/*1541459443,,JIT Construction: v4500748,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function _(a, b, c, d) {
	if (window[c]) return;
	var e = (window[c] = {
		__buffer: {
			replay: function() {
				for (var a = 0; a < this.calls.length; a++)
					window[c][this.calls[a][0]].apply(null, this.calls[a][1]);
				this.calls = [];
			},
			calls: []
		},
		getUserID: function() {
			return "";
		},
		getAuthResponse: function() {
			return null;
		},
		getAccessToken: function() {
			return null;
		}
	});
	for (var b = 0; b < d.length; b++) {
		var f = d[b];
		if (f in e) continue;
		var g = f.split("."),
			h = g.pop(),
			i = e;
		for (var j = 0; j < g.length; j++) i = i[g[j]] || (i[g[j]] = {});
		i[h] = (function(a) {
			return function() {
				e.__buffer.calls.push([a, Array.prototype.slice.call(arguments)]);
			};
		})(f);
	}
	j = a;
	g = /Chrome\/(\d+)/.exec(navigator.userAgent);
	g && Number(g[1]) >= 55 && (j += "&ua=modern_es6");
	if (window.inDapIF) {
		i = document.createElement("script");
		i.src = j;
		i.async = !0;
		h = document.getElementsByTagName("script")[0];
		h.parentNode && h.parentNode.insertBefore(i, h);
		return;
	}
	f = document.createElement("iframe");
	f.id = "facebook-jssdk-iframe";
	f.style.cssText = "width: 0; height: 0; border: 0";
	f.src = "javascript:false";
	d = document.getElementsByTagName("script")[0];
	if (!d.parentNode) return;
	d.parentNode.insertBefore(f, d);
	b = f.contentWindow.document;
	b.open().write(
		"<body onload=\"var js=document.createElement('script');js.src='" +
			j +
			"';document.body.appendChild(js);\">"
	);
	b.close();
})(
	"https://connect.facebook.net/en_US/all.js?hash=7eff9a68781749dcb8e2997cd865c3de",
	1541459443,
	"FB",
	[
		"AppEvents.EventNames",
		"AppEvents.ParameterNames",
		"AppEvents.activateApp",
		"AppEvents.clearAppVersion",
		"AppEvents.clearUserID",
		"AppEvents.getAppVersion",
		"AppEvents.getUserID",
		"AppEvents.logEvent",
		"AppEvents.logPageView",
		"AppEvents.logPurchase",
		"AppEvents.setAppVersion",
		"AppEvents.setUserID",
		"AppEvents.updateUserProperties",
		"Canvas.Plugin.showPluginElement",
		"Canvas.Plugin.hidePluginElement",
		"Canvas.Prefetcher.addStaticResource",
		"Canvas.Prefetcher.setCollectionMode",
		"Canvas.getPageInfo",
		"Canvas.scrollTo",
		"Canvas.setAutoGrow",
		"Canvas.setDoneLoading",
		"Canvas.setSize",
		"Canvas.setUrlHandler",
		"Canvas.startTimer",
		"Canvas.stopTimer",
		"Event.subscribe",
		"Event.unsubscribe",
		"XFBML.parse",
		"addFriend",
		"api",
		"getAccessToken",
		"getAuthResponse",
		"getLoginStatus",
		"getUserID",
		"init",
		"login",
		"logout",
		"publish",
		"share",
		"ui"
	]
);
