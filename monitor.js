#!/usr/bin/env node

const fs = require('fs-extra');
const url = require("url");
const semver = require('semver');
const Crawler = require("crawler");
const prettier = require("prettier");
const configFile = './monitor.config.json';
const { execSync, spawnSync } = require('child_process');
let config = fs.readJsonSync(configFile);

config.prettier = config.prettier || {};

function isNumeric(value) {
    return !isNaN(value - parseFloat(value));
}

var c = new Crawler({
	maxConnections : 10,
	jQuery: false,
	// This will be called for each crawled page
	callback : function (error, res, done) {
		console.log(`${res.statusCode}:`, res.options.uri);
		if(error){
			console.log(res.options.uri, error);
		}else if(res.statusCode < 300) {
			let uri = url.parse(res.options.uri);
			let filename = 'data/' + uri.hostname + uri.pathname;
			let monitor = res.options.monitor;
			let save = function(){
				console.log(`updated: ${monitor.name}`);
				if (res.headers.etag) {
					monitor.etag = res.headers.etag; // store and use this next time
				}
				writeFile(
					filename,
					res.body
				);
				writeFile(
					filename.replace(/\.js$/, '.pretty.js'),
					prettier.format(res.body, config.prettier)
				);
				writeFile(
					configFile,
					prettier.format(JSON.stringify(config), Object.assign({}, config.prettier, {parser: 'json'}))
				);

				let message = execSync("echo `date +'%Y-%m-%d %I:%M %p'`").toString();
				message += ` :: ${monitor.name}`;

				let changes = execSync("echo \"`git diff -w --no-color data/*pretty* | grep -E '^\\+' | grep -E -v '^\\+{2,}\\s(a|b)\\/'`\"").toString();
				if(monitor.diffIgnorePatterns) {
					try{
						let regex = new RegExp('(' + monitor.diffIgnorePatterns.join('|') + ')');
						changes = changes.split(/\n/gm).filter(line => !line.match(regex) && line.replace(/\s/g, '').length).join("\n");
					}catch(e){ console.log(e); }
				}
				if(changes.length){
					changes = execSync("echo \"`git diff -w --no-color --shortstat data/*pretty*`\"").toString().replace(/(^\s+|\s+$)/gm, '');
					message += ` :: ${changes}`;
					message = message.replace(/\n/gm, '');
					console.log(message);
					spawnSync("git", ["add", "."]);
					spawnSync("git", ["commit", "-m", message]);
				}

			}
			if(monitor.versionRegex) {
				let pattern = new RegExp(monitor.versionRegex);
				let matches = res.body.match(pattern);
				if (matches && matches.length >= 2) {
					let currentVersion = matches[1];
					if (semver.valid(currentVersion)) {
						if (!monitor.version || (semver.valid(monitor.version) && semver.gt(currentVersion, monitor.version))) {
							monitor.version = currentVersion;
							save();
						}
					} else if (isNumeric(currentVersion) && isNumeric(monitor.version) && currentVersion > monitor.version) {
						monitor.version = currentVersion;
						save();
					}
					if (!monitor.version) {
						monitor.version = currentVersion;
						save();
					}
				}
			} else {
				save();
			}
		}
		done();
	}
});

function writeFile(filename, content){
	dir = filename.split('/').slice(0, -1).join('/')
	fs.ensureDirSync(dir);
	fs.writeFileSync(filename, content);
}

try{
	config.monitors.forEach(monitor => {
		let item = {
			uri: monitor.url,
			monitor: monitor
		};
		if(monitor.etag){
			item.preRequest = function(options, done) {
				options.headers = {
					'If-None-Match': monitor.etag
				};
				done();
			}
		}
		console.log('added:', monitor.url);
		c.queue(item);
	});
}catch(e){}

c.on('drain',function(){
	spawnSync("git", ["push", "origin", "master"]);
	console.log('DONE!');
});