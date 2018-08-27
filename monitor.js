#!/usr/bin/env node

const fs = require('fs-extra');
const url = require("url");
const semver = require('semver');
const Crawler = require("crawler");
const prettier = require("prettier");
const configFile = './monitor_config.json';
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

				spawnSync("git", ["add", "."]);

				let message = `updated( ${monitor.name} ): `;
				let changes = execSync("echo \"`git diff --cached --stat`\"").toString();
				message += execSync("echo `date +'%A, %B %-d, %Y'`").toString();
				if(changes.length > 3){
					message += changes;
				}
				message = message.replace(/\n$/g, '');

				spawnSync("git", ["commit", "-m", message]);
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
	fs.ensureDir(dir)
		.then(() => {
			fs.createWriteStream(filename).write(content);
		});
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