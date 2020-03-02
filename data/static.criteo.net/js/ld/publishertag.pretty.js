!(function() {
	"use strict";
	var AdBlocker = ((a.prototype.isAdBlocked = function(e) {
		var t = this;
		this.createPixel(
			a.allowedPixelUrl,
			function() {
				(t.allowedPixelLoaded = !0) === t.blockedPixelFailed && e(!0);
			},
			function() {}
		),
			this.createPixel(
				a.blockedPixelUrl,
				function() {
					e(!1);
				},
				function() {
					(t.blockedPixelFailed = !0) === t.allowedPixelLoaded && e(!0);
				}
			);
	}),
	(a.prototype.createPixel = function(e, t, i) {
		var r = document.createElement("img");
		(r.src = e),
			(r.height = 1),
			(r.width = 1),
			(r.style.display = "none"),
			(r.onload = t),
			(r.onerror = i);
	}),
	(a.allowedPixelUrl = "https://static.criteo.net/images/pixel.gif?ch=1"),
	(a.blockedPixelUrl = "https://static.criteo.net/images/pixel.gif?ch=2"),
	a);
	function a() {
		(this.allowedPixelLoaded = !1), (this.blockedPixelFailed = !1);
	}
	function tryGetLocalStorage(e) {
		try {
			return e.localStorage;
		} catch (e) {
			return;
		}
	}
	var LocalStorageHelper = ((j.prototype.checkLocalStorage = function() {
		if (!this.localStorage) return !1;
		var e = this.CHECK_STORAGE_KEY;
		try {
			return (
				this.localStorage.setItem(e, e), this.localStorage.removeItem(e), !0
			);
		} catch (e) {
			return !1;
		}
	}),
	(j.prototype.removeItem = function(e) {
		this.localStorage.removeItem(e),
			this.localStorage.removeItem(e + this.EXPIRE_SUFFIX);
	}),
	(j.prototype.getItem = function(e, t) {
		var i = new Date().getTime(),
			r = this.localStorage.getItem(e + this.EXPIRE_SUFFIX),
			o = r ? parseInt(r, 10) : -1;
		return (-1 !== o && o < i) || (t && (-1 === o || t < o - i))
			? (this.removeItem(e), null)
			: this.localStorage.getItem(e);
	}),
	(j.prototype.setItem = function(e, t, i) {
		if ((this.localStorage.setItem(e, t), i)) {
			var r = new Date().getTime() + i;
			this.localStorage.setItem(e + this.EXPIRE_SUFFIX, r.toString());
		}
	}),
	(j.prototype.getAllItemsByPrefix = function(e) {
		var t = [];
		for (var i in localStorage) 0 === i.indexOf(e) && t.push(i);
		return t;
	}),
	j);
	function j(e) {
		(this.EXPIRE_SUFFIX = "_expires"),
			(this.CHECK_STORAGE_KEY = "criteo_localstorage_check"),
			(this.localStorage = tryGetLocalStorage(e || window));
	}
	var AdBlockFlagManager = ((D.create = function() {
		return new D();
	}),
	(D.prototype.adBlockFlagEnabled = function() {
		if (!this.localStorageEnabled) return !1;
		var e = D.ADBLOCK_FLAG_KEY;
		return null !== this.localStorageHelper.getItem(e);
	}),
	(D.prototype.enableAdBlockFlag = function() {
		if (this.localStorageEnabled) {
			var e = D.ADBLOCK_FLAG_KEY;
			this.localStorageHelper.setItem(e, "1", D.ADBLOCK_FLAG_LIFETIME);
		}
	}),
	(D.prototype.disableAdBlockFlag = function() {
		if (this.localStorageEnabled) {
			var e = D.ADBLOCK_FLAG_KEY;
			this.localStorageHelper.removeItem(e);
		}
	}),
	(D.prototype.setAdBlockFlagTimer = function(e) {
		var t = this;
		if (!this.adBlockFlagEnabled() && this.timerEnabled && !this.timerStarted) {
			var i = new AdBlocker();
			(this.timerStarted = !0),
				setTimeout(function() {
					t.timerEnabled &&
						i.isAdBlocked(function(e) {
							e ? t.enableAdBlockFlag() : t.disableAdBlockFlag();
						}),
						t.disableAdBlockFlagTimer();
				}, e);
		}
	}),
	(D.prototype.disableAdBlockFlagTimer = function() {
		this.timerEnabled = !1;
	}),
	(D.ADBLOCK_FLAG_KEY = "criteo_adblock_flag"),
	(D.ADBLOCK_FLAG_LIFETIME = 864e5),
	D);
	function D() {
		(this.localStorageHelper = new LocalStorageHelper()),
			(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage()),
			(this.timerEnabled = !0),
			(this.timerStarted = !1);
	}
	var AsyncRequest = ((L.prototype.send = function(e, t, i, r) {
			var o = void 0 !== this.data ? "POST" : "GET",
				n = this.getXMLHttpRequest(o, e, t, i, r);
			if (void 0 !== n) n.send(this.data);
			else {
				var a = this.getXDomainRequest(o, e, t, i, r);
				void 0 !== a && a.send(this.data);
			}
		}),
		(L.prototype.getXMLHttpRequest = function(e, t, i, r, o) {
			var n = new XMLHttpRequest();
			if ("withCredentials" in n)
				return (
					n.open(e, this.url, !0),
					(n.timeout = o || L.LOCAL_PASSBACK_TIMEOUT),
					this.contentType
						? n.setRequestHeader("Content-type", this.contentType)
						: "POST" === e &&
						  n.setRequestHeader(
								"Content-type",
								"application/x-www-form-urlencoded"
						  ),
					(n.withCredentials = this.withCredentials),
					(n.onload = function() {
						4 === n.readyState && 200 === n.status
							? t(n.responseText)
							: i(n.readyState, n.status);
					}),
					(n.onerror = function() {
						i(void 0, void 0);
					}),
					r && (n.ontimeout = r),
					n
				);
		}),
		(L.prototype.getXDomainRequest = function(e, t, i, r, o) {
			if ("undefined" != typeof XDomainRequest) {
				var n = new XDomainRequest();
				return (
					(n.timeout = o || L.LOCAL_PASSBACK_TIMEOUT),
					n.open(e, this.url),
					(n.onload = function() {
						void 0 !== n.responseText ? t(n.responseText) : i(void 0, void 0);
					}),
					n.onerror &&
						(n.onerror = function() {
							i(void 0, void 0);
						}),
					n.ontimeout && r && (n.ontimeout = r),
					n
				);
			}
		}),
		(L.LOCAL_PASSBACK_TIMEOUT = 3e4),
		L),
		LogLevel,
		ha;
	function L(e, t, i, r) {
		void 0 === r && (r = !0),
			(this.url = e),
			(this.data = t),
			(this.contentType = i),
			(this.withCredentials = r);
	}
	(ha = LogLevel = LogLevel || {}),
		(ha[(ha.Error = 0)] = "Error"),
		(ha[(ha.Warning = 1)] = "Warning"),
		(ha[(ha.Debug = 2)] = "Debug");
	var CSS_LOG = [
			"color: #fff;",
			"background: #ff8f1c;",
			"display: inline-block;",
			"padding: 1px 4px;",
			"border-radius: 3px;"
		].join(" "),
		Log = ((ia.Log = function(e, t) {
			if (!(ia.LOGLEVEL < e)) {
				var i = LogLevel[e].toUpperCase(),
					r = window.navigator.userAgent,
					o = 0 < r.indexOf("MSIE ") || 0 < r.indexOf("Trident/");
				window.console &&
					(o
						? console.log("[PubTag] " + i + ": " + t)
						: console.log("%cPubTag", CSS_LOG, i + ": " + t));
			}
		}),
		(ia.Debug = function(e) {
			ia.Log(LogLevel.Debug, e);
		}),
		(ia.Warning = function(e) {
			ia.Log(LogLevel.Warning, e);
		}),
		(ia.Error = function(e) {
			ia.Log(LogLevel.Error, e);
		}),
		(ia.LOGLEVEL = LogLevel.Error),
		ia);
	function ia() {}
	function SetLogLevel(e) {
		Log.LOGLEVEL = e;
	}
	var BidEventTarget = function() {},
		__extends = ((ta = function(e, t) {
			return (ta =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			ta(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		ta,
		BidEventContainerTarget = (function(_super) {
			function BidEventContainerTarget(e, t) {
				var i = _super.call(this) || this;
				i.containerId = t;
				var r = e.getElementById(t);
				return (
					r
						? (i.element = r)
						: Log.Error("Target element '" + t + "' not found in the document"),
					i
				);
			}
			return (
				__extends(BidEventContainerTarget, _super),
				(BidEventContainerTarget.prototype.ResizeFrame = function(e, t) {}),
				(BidEventContainerTarget.prototype.Write = function(e) {
					this.element && (this.element.innerHTML = e);
				}),
				(BidEventContainerTarget.prototype.LoadScript = function(url) {
					(url += -1 === url.indexOf("?") ? "?" : "&"),
						(url += "containerid=" + encodeURIComponent(this.containerId));
					var request = new AsyncRequest(url);
					request.send(
						function(responseText) {
							eval(responseText);
						},
						function() {},
						function() {}
					);
				}),
				BidEventContainerTarget
			);
		})(BidEventTarget),
		__extends$1 = ((La = function(e, t) {
			return (La =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			La(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		La,
		BidEventDocumentTarget = ((Wa = BidEventTarget),
		__extends$1(Xa, Wa),
		(Xa.prototype.ResizeFrame = function(e, t) {
			if (this.document.defaultView && this.document.defaultView.frameElement) {
				var i = this.document.defaultView.frameElement;
				(i.width = e.toString()), (i.height = t.toString());
			}
		}),
		(Xa.prototype.Write = function(e) {
			this.document.open(), this.document.write(e), this.document.close();
		}),
		(Xa.prototype.LoadScript = function(e) {
			this.Write("<script type='text/javascript' src='" + e + "'></script>");
		}),
		Xa),
		Wa;
	function Xa(e) {
		var t = Wa.call(this) || this;
		return (t.document = e), t;
	}
	var AbstractEvent = ((db.prototype.eval = function(e) {}), db);
	function db(e) {
		this.name = e;
	}
	var TimeMeasurer = ((gb.CreateRunning = function() {
		var e = new gb();
		return e.start(), e;
	}),
	(gb.CreateWithStartTime = function(e) {
		var t = new gb(!1);
		return (t.startTime = e), t;
	}),
	(gb.TimeSincePageLoad = function() {
		if (window.performance) {
			if (window.performance.now) return window.performance.now();
			if (
				window.performance.timing &&
				window.performance.timing.navigationStart
			)
				return new Date().getTime() - performance.timing.navigationStart;
		}
		return 0;
	}),
	(gb.prototype.start = function() {
		this.startTime = this.now();
	}),
	(gb.prototype.elapsed = function() {
		return this.now() - this.startTime;
	}),
	gb);
	function gb(e) {
		void 0 === e && (e = !0),
			e && window.performance && window.performance.now
				? (this.now = window.performance.now.bind(window.performance))
				: Date.now
					? (this.now = Date.now)
					: (this.now = function() {
							return new Date().getTime();
					  });
	}
	function tryParseJson(e) {
		try {
			return JSON.parse(e);
		} catch (e) {
			return;
		}
	}
	var USPAPI_VERSION = 1,
		CCPAPrivacyProvider = ((ob.prototype.getCMPFrame = function() {
			for (var e, t = this.currentWindow, i = 0; i < 10; ++i) {
				try {
					t.frames.__uspapiLocator && (e = t);
				} catch (e) {}
				if (t === this.currentWindow.top) break;
				t = t.parent;
			}
			return e;
		}),
		(ob.prototype.hasCallerFunctionInWindow = function() {
			return "function" == typeof this.currentWindow.__uspapi;
		}),
		(ob.prototype.readyToRetrieve = function() {
			return this.hasCallerFunctionInWindow() || void 0 !== this.getCMPFrame();
		}),
		(ob.prototype.retrieveConsent = function(i) {
			var e = this,
				r = TimeMeasurer.CreateRunning(),
				o = !1,
				n = setTimeout(function() {
					(o = !0),
						Log.Warning(
							"Timeout: Unable to resolve CCPA consent after " +
								e.timeout +
								"ms"
						),
						i(void 0);
				}, this.timeout);
			this.executeCommand("getUSPData", USPAPI_VERSION, function(e, t) {
				o ||
					(clearTimeout(n),
					t
						? (Log.Debug("CCPA consent retrieved in " + r.elapsed() + "ms"),
						  ob.processResponseData(e, i))
						: (Log.Warning("Error retrieving CCPA consent data from CMP"),
						  i(void 0)));
			});
		}),
		(ob.processResponseData = function(e, t) {
			e
				? t(e)
				: (Log.Warning("Unable to read CCPA consent data from CMP"), t(void 0));
		}),
		(ob.prototype.executeCommand = function(e, t, i) {
			var n = this;
			if (!this.hasCallerFunctionInWindow()) {
				Log.Debug("No CCPA CMP defined on current frame");
				var a = this.getCMPFrame();
				(this.currentWindow.__uspapi = function(e, t, i) {
					if (!a)
						return (
							Log.Warning("CCPA CMP not found in any frame"),
							void i({ msg: "CCPA CMP not found in any frame" }, !1)
						);
					var r = Math.random().toString(10),
						o = { __uspapiCall: { command: e, parameter: t, callId: r } };
					(n.uspapiCallbacks[r] = i), a.postMessage(o, "*");
				}),
					this.currentWindow.addEventListener(
						"message",
						function(e) {
							var t = "string" == typeof e.data ? tryParseJson(e.data) : e.data;
							if (
								t &&
								t.__uspapiReturn &&
								t.__uspapiReturn.callId &&
								t.__uspapiReturn.returnValue
							) {
								var i = t.__uspapiReturn;
								n.uspapiCallbacks &&
									n.uspapiCallbacks[i.callId] &&
									(n.uspapiCallbacks[i.callId](i.returnValue, i.success),
									delete n.uspapiCallbacks[i.callId]);
							}
						},
						!1
					);
			}
			this.currentWindow.__uspapi(e, t, i);
		}),
		(ob.prototype.hasUserOptOut = function(e) {
			return !(
				!e ||
				!e.uspString ||
				"1YNY" === e.uspString.toUpperCase() ||
				"1YNN" === e.uspString.toUpperCase() ||
				"1YN-" === e.uspString.toUpperCase() ||
				"1-N-" === e.uspString.toUpperCase() ||
				"1---" === e.uspString
			);
		}),
		ob);
	function ob(e, t) {
		void 0 === t && (t = parseInt("50", 10)),
			(this.uspapiCallbacks = {}),
			(this.currentWindow = e),
			(this.timeout = t);
	}
	var GDPRCompatiblePrivacyProvider = ((Tb.prototype.getReadyToRetrieveProvider = function() {
		return this.tcfv2PrivacyProvider.hasCallerFunctionInFrame()
			? this.tcfv2PrivacyProvider
			: this.gdprPrivacyProvider.hasCallerFunctionInFrame()
				? this.gdprPrivacyProvider
				: void 0 !== this.tcfv2PrivacyProvider.getCMPFrame()
					? this.tcfv2PrivacyProvider
					: void 0 !== this.gdprPrivacyProvider.getCMPFrame()
						? this.gdprPrivacyProvider
						: void 0;
	}),
	(Tb.prototype.retrieveConsentForPassback = function(e) {
		var t = this.getReadyToRetrieveProvider();
		void 0 === t &&
			(Log.Warning("No compatible GDPR privacy provider found"), e(void 0)),
			t === this.gdprPrivacyProvider
				? this.gdprPrivacyProvider.retrieveConsentForPassback(e)
				: t === this.tcfv2PrivacyProvider &&
				  this.tcfv2PrivacyProvider.retrieveConsent(e);
	}),
	(Tb.prototype.retrieveConsent = function(e) {
		var t = this.getReadyToRetrieveProvider();
		void 0 === t &&
			(Log.Warning("No compatible GDPR privacy provider found"), e(void 0)),
			null == t || t.retrieveConsent(e);
	}),
	(Tb.prototype.readyToRetrieve = function() {
		return (
			this.tcfv2PrivacyProvider.readyToRetrieve() ||
			this.gdprPrivacyProvider.readyToRetrieve()
		);
	}),
	Tb);
	function Tb(e, t) {
		(this.gdprPrivacyProvider = e), (this.tcfv2PrivacyProvider = t);
	}
	var CRITEO_VENDOR_ID = 91,
		GDPRPrivacyProvider = ((_b.prototype.getCMPFrame = function() {
			for (var e, t = this.currentWindow, i = 0; i < 10; ++i) {
				try {
					t.frames.__cmpLocator && (e = t);
				} catch (e) {}
				if (t === this.currentWindow.top) break;
				t = t.parent;
			}
			return e;
		}),
		(_b.prototype.hasCallerFunctionInFrame = function() {
			return "function" == typeof this.currentWindow.__cmp;
		}),
		(_b.prototype.readyToRetrieve = function() {
			return this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame();
		}),
		(_b.prototype.pingWithTimeout = function(r, o, e, t, i) {
			function n(e, t) {
				Log.Warning(t), clearTimeout(e), i();
			}
			var a = this;
			return setTimeout(function() {
				var i = setTimeout(function() {
					n(o, "Timeout: Unable to get ping return after " + e + "ms");
				}, e);
				a.executeCommand("ping", null, function(e, t) {
					clearTimeout(i),
						t
							? (Log.Debug("GDPR CMP ping returned in " + r.elapsed() + "ms"),
							  !0 !== e.cmpLoaded &&
									n(o, "GDPR ping returned cmpLoaded which is not true"),
							  Log.Debug("GDPR ping returned cmpLoaded which is true"))
							: n(o, "Error sending ping to GDPR CMP");
				});
			}, t);
		}),
		(_b.prototype.retrieveConsent = function(i) {
			var e = this,
				r = TimeMeasurer.CreateRunning(),
				o = !1,
				n = setTimeout(function() {
					(o = !0),
						Log.Warning(
							"Timeout: Unable to resolve GDPR consent after " +
								e.timeout +
								"ms"
						),
						i(void 0);
				}, this.timeout),
				a = this.pingWithTimeout(
					r,
					n,
					this.pingTimeout,
					this.pingDelay,
					function() {
						(o = !0),
							Log.Warning(
								"Timeout: Unable to ping GDPR API after " + e.pingTimeout + "ms"
							),
							i(void 0);
					}
				);
			this.executeCommand("getConsentData", null, function(e, t) {
				clearTimeout(a),
					o ||
						(clearTimeout(n),
						t
							? (Log.Debug("GDPR consent retrieved in " + r.elapsed() + "ms"),
							  _b.processConsentData(e, i))
							: (Log.Warning("Error retrieving GDPR consent data from CMP"),
							  i(void 0)));
			});
		}),
		(_b.prototype.retrieveConsentForPassback = function(i) {
			var e = this,
				r = TimeMeasurer.CreateRunning(),
				o = !1,
				n = setTimeout(function() {
					(o = !0),
						Log.Warning(
							"Timeout: Unable to resolve GDPR consent after " +
								e.timeout +
								"ms"
						),
						i(void 0);
				}, this.timeout),
				a = this.pingWithTimeout(
					r,
					n,
					this.pingTimeout,
					this.pingDelay,
					function() {
						(o = !0),
							Log.Warning(
								"Timeout: Unable to ping GDPR API after " + e.pingTimeout + "ms"
							),
							i(void 0);
					}
				);
			this.executeCommand("getVendorConsents", [CRITEO_VENDOR_ID], function(
				e,
				t
			) {
				clearTimeout(a),
					o ||
						(clearTimeout(n),
						t
							? (Log.Debug(
									"Consent (getVendorConsents) retrieved in " +
										r.elapsed() +
										"ms"
							  ),
							  _b.processConsentData(e, i))
							: (Log.Warning("Error while calling getVendorConsents from CMP"),
							  i(void 0)));
			});
		}),
		(_b.processConsentData = function(e, t) {
			if (e) {
				var i = {};
				void 0 !== e.consentData && (i.consentData = e.consentData),
					void 0 !== e.gdprApplies && (i.gdprApplies = !!e.gdprApplies),
					e.vendorConsents &&
						void 0 !== e.vendorConsents[CRITEO_VENDOR_ID.toString()] &&
						(i.consentGiven = !!e.vendorConsents[CRITEO_VENDOR_ID.toString()]),
					t(i);
			} else
				Log.Warning("Unable to read GDPR consent data from CMP"), t(void 0);
		}),
		(_b.prototype.executeCommand = function(e, t, i) {
			var n = this;
			if (!this.hasCallerFunctionInFrame()) {
				Log.Debug("No GDPR CMP defined on current frame");
				var a = this.getCMPFrame();
				(this.currentWindow.__cmp = function(e, t, i) {
					if (!a)
						return (
							Log.Warning("GDPR CMP not found in any frame"),
							void i({ msg: "GDPR CMP not found in any frame" }, !1)
						);
					var r = Math.random().toString(10),
						o = { __cmpCall: { command: e, parameter: t, callId: r } };
					(n.cmpCallbacks[r] = i), a.postMessage(o, "*");
				}),
					this.currentWindow.addEventListener(
						"message",
						function(e) {
							var t = "string" == typeof e.data ? tryParseJson(e.data) : e.data;
							if (
								t &&
								t.__cmpReturn &&
								t.__cmpReturn.callId &&
								t.__cmpReturn.returnValue
							) {
								var i = t.__cmpReturn;
								n.cmpCallbacks &&
									n.cmpCallbacks[i.callId] &&
									(n.cmpCallbacks[i.callId](i.returnValue, i.success),
									delete n.cmpCallbacks[i.callId]);
							}
						},
						!1
					);
			}
			this.currentWindow.__cmp(e, t, i);
		}),
		_b);
	function _b(e, t, i, r) {
		void 0 === t && (t = parseInt("10000", 10)),
			void 0 === i && (i = Math.min(t, parseInt("50", 10))),
			void 0 === r && (r = Math.min(t, parseInt("1000", 10))),
			(this.cmpCallbacks = {}),
			(this.currentWindow = e),
			(this.timeout = t),
			(this.pingTimeout = i),
			(this.pingDelay = r);
	}
	var CRITEO_VENDOR_ID$1 = 91,
		TCF_V2_VERSION = 2,
		TCFv2PrivacyProvider = (($c.prototype.getCMPFrame = function() {
			for (var e, t = this.currentWindow, i = 0; i < 10; ++i) {
				try {
					t.frames.__tcfapiLocator && (e = t);
				} catch (e) {}
				if (t === this.currentWindow.top) break;
				t = t.parent;
			}
			return e;
		}),
		($c.prototype.hasCallerFunctionInFrame = function() {
			return "function" == typeof this.currentWindow.__tcfapi;
		}),
		($c.prototype.readyToRetrieve = function() {
			return this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame();
		}),
		($c.prototype.pingWithTimeout = function(i, r, e, t, o) {
			function n(e, t) {
				Log.Warning(t), clearTimeout(e), o();
			}
			var a = this;
			return setTimeout(function() {
				var t = setTimeout(function() {
					n(r, "Timeout: Unable to get TCFv2 ping return after " + e + "ms");
				}, e);
				a.executeCommand("ping", TCF_V2_VERSION, function(e) {
					clearTimeout(t),
						Log.Debug("TCFv2 CMP ping returned in " + i.elapsed() + "ms"),
						"error" === e.cmpStatus
							? n(r, "Error status on ping to TCFv2 CMP")
							: (!0 !== e.cmpLoaded &&
									n(r, "TCFv2 ping returned cmpLoaded which is not true"),
							  Log.Debug("TCFv2 ping returned cmpLoaded which is true"));
				});
			}, t);
		}),
		($c.prototype.retrieveConsent = function(i) {
			var e = this,
				r = TimeMeasurer.CreateRunning(),
				o = !1,
				n = setTimeout(function() {
					(o = !0),
						Log.Warning(
							"Timeout: Unable to resolve TCFv2 consent after " +
								e.timeout +
								"ms"
						),
						i(void 0);
				}, this.timeout),
				a = this.pingWithTimeout(
					r,
					n,
					this.pingTimeout,
					this.pingDelay,
					function() {
						(o = !0),
							Log.Warning(
								"Timeout: Unable to ping TCFv2 API after " +
									e.pingTimeout +
									"ms"
							),
							i(void 0);
					}
				);
			this.executeCommand(
				"getTCData",
				TCF_V2_VERSION,
				function(e, t) {
					clearTimeout(a),
						o ||
							(clearTimeout(n),
							t
								? (Log.Debug(
										"TCFv2 consent retrieved in " + r.elapsed() + "ms"
								  ),
								  $c.processResponseData(e, i))
								: (Log.Warning("Error retrieving TCFv2 consent data from CMP"),
								  i(void 0)));
				},
				[CRITEO_VENDOR_ID$1]
			);
		}),
		($c.processResponseData = function(e, t) {
			if (e) {
				var i = {};
				void 0 !== e.tcData && (i.consentData = e.tcData),
					void 0 !== e.gdprApplies && (i.gdprApplies = !!e.gdprApplies),
					e.vendor &&
						e.vendor.consents &&
						void 0 !== e.vendor.consents[CRITEO_VENDOR_ID$1.toString()] &&
						(i.consentGiven = e.vendor.consents[CRITEO_VENDOR_ID$1.toString()]),
					(i.version = e.tcfPolicyVersion
						? e.tcfPolicyVersion
						: TCF_V2_VERSION),
					t(i);
			} else
				Log.Warning("Unable to read GDPR consent data from CMP"), t(void 0);
		}),
		($c.prototype.executeCommand = function(e, t, i, r) {
			var a = this;
			if (!this.hasCallerFunctionInFrame()) {
				Log.Debug("No TCFv2 CMP defined on current frame");
				var s = this.getCMPFrame();
				(this.currentWindow.__tcfapi = function(e, t, i, r) {
					if (!s)
						return (
							Log.Warning("TCFv2 CMP not found in any frame"),
							void i({ msg: "TCFv2 CMP not found in any frame" }, !1)
						);
					var o = Math.random().toString(10),
						n = {
							__tcfapiCall: { command: e, version: t, parameter: r, callId: o }
						};
					(a.cmpCallbacks[o] = i), s.postMessage(n, "*");
				}),
					this.currentWindow.addEventListener(
						"message",
						function(e) {
							var t = "string" == typeof e.data ? tryParseJson(e.data) : e.data;
							if (
								t &&
								t.__tcfapiReturn &&
								t.__tcfapiReturn.callId &&
								t.__tcfapiReturn.returnValue
							) {
								var i = t.__tcfapiReturn;
								a.cmpCallbacks &&
									a.cmpCallbacks[i.callId] &&
									"function" == typeof a.cmpCallbacks[i.callId] &&
									(a.cmpCallbacks[i.callId](i.returnValue, i.success),
									delete a.cmpCallbacks[i.callId]);
							}
						},
						!1
					);
			}
			this.currentWindow.__tcfapi(e, t, i, r);
		}),
		$c);
	function $c(e, t, i, r) {
		void 0 === t && (t = parseInt("10000", 10)),
			void 0 === i && (i = Math.min(t, parseInt("50", 10))),
			void 0 === r && (r = Math.min(t, parseInt("1000", 10))),
			(this.cmpCallbacks = {}),
			(this.currentWindow = e),
			(this.timeout = t),
			(this.pingTimeout = i),
			(this.pingDelay = r);
	}
	var DirectBiddingSilentModeManager = ((Sd.prototype.silentModeEnabled = function() {
		var e = Sd.SILENT_MODE_KEY;
		return (
			this.localStorageEnabled && null !== this.localStorageHelper.getItem(e)
		);
	}),
	(Sd.prototype.enableSilentMode = function(e) {
		if (this.localStorageEnabled) {
			var t = Sd.SILENT_MODE_KEY;
			this.localStorageHelper.setItem(t, "1", e);
		}
	}),
	(Sd.SILENT_MODE_KEY = "criteo_silent_mode"),
	Sd);
	function Sd() {
		(this.localStorageHelper = new LocalStorageHelper()),
			(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage());
	}
	function now() {
		return new Date().getTime();
	}
	var Lock = ((Xd.prototype.get = function(e) {
		var t = localStorage.getItem(e);
		if (t) {
			var i = t.split("|");
			if (!(i.length < 2 || parseInt(i[1], 10) < now())) return i[0];
		}
	}),
	(Xd.prototype.set = function(e, t) {
		var i = now() + t;
		localStorage.setItem(e, this.id + "|" + i);
	}),
	(Xd.prototype.acquire = function(e, t, i) {
		var r = this;
		void 0 === i && (i = 100),
			i <= 0 || this.tryAcquire(t)
				? (e(), this.release())
				: setTimeout(function() {
						r.acquire(e, t, i - 10);
				  }, 10);
	}),
	(Xd.prototype.tryAcquire = function(e) {
		localStorage.setItem(this.x, this.id);
		var t = this.get(this.y);
		return !(
			(t && t !== this.id) ||
			(this.set(this.y, e),
			localStorage.getItem(this.x) !== this.id || this.get(this.y) !== this.id)
		);
	}),
	(Xd.prototype.release = function() {
		localStorage.removeItem(this.x), localStorage.removeItem(this.y);
	}),
	Xd);
	function Xd(e) {
		(this.x = e + "_lock_A"),
			(this.y = e + "_lock_B"),
			(this.id = Math.floor(1e9 * Math.random()).toString());
	}
	var Size = ((je.prototype.toString = function() {
		return this.width + "x" + this.height;
	}),
	je);
	function je(e, t) {
		(this.width = e), (this.height = t);
	}
	var SlotKey = ((me.prototype.toString = function() {
		return "ImpId" + this.impressionId;
	}),
	me);
	function me(e) {
		this.impressionId = e;
	}
	var __extends$2 = ((oe = function(e, t) {
			return (oe =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			oe(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		oe,
		SlotKeyWithSize = ((ze = SlotKey),
		__extends$2(Ae, ze),
		(Ae.prototype.toString = function() {
			return (
				ze.prototype.toString.call(this) +
				"_Size" +
				this.size +
				"_NetworkId" +
				this.networkId
			);
		}),
		Ae),
		ze;
	function Ae(e, t, i) {
		var r = ze.call(this, e) || this;
		return (r.size = t), (r.networkId = i), r;
	}
	var __extends$3 = ((Fe = function(e, t) {
			return (Fe =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			Fe(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Fe,
		SlotKeyWithZoneId = ((Qe = SlotKey),
		__extends$3(Re, Qe),
		(Re.prototype.toString = function() {
			return Qe.prototype.toString.call(this) + "_ZoneId" + this.zoneId;
		}),
		Re),
		Qe;
	function Re(e, t) {
		var i = Qe.call(this, e) || this;
		return (i.zoneId = t), i;
	}
	var SlotKeyFactory = ((Ve.prototype.createKeysFromSlotRequest = function(e) {
		if (this.useZoneIdIntegration)
			return [new SlotKeyWithZoneId(e.impId, e.zoneId)];
		for (var t = [], i = 0, r = e.sizes; i < r.length; i++) {
			var o = r[i];
			t.push(new SlotKeyWithSize(e.impId, o, this.networkId));
		}
		return t;
	}),
	(Ve.prototype.createKeyFromSlotResponse = function(e) {
		return this.useZoneIdIntegration
			? new SlotKeyWithZoneId(e.impid, e.zoneid)
			: new SlotKeyWithSize(
					e.impid,
					new Size(e.width, e.height),
					this.networkId
			  );
	}),
	(Ve.prototype.createKeyFromBid = function(e) {
		return this.useZoneIdIntegration
			? new SlotKeyWithZoneId(e.impressionId, e.zoneId)
			: new SlotKeyWithSize(
					e.impressionId,
					new Size(e.width, e.height),
					this.networkId
			  );
	}),
	Ve);
	function Ve(e, t) {
		(this.useZoneIdIntegration = e), (this.networkId = t);
	}
	var DirectBiddingBidManager = ((df.useZoneIdIntegration = function(e, t) {
		return (
			void 0 === t ||
			0 ===
				e.filter(function(e) {
					return void 0 !== e.sizes && 0 < e.sizes.length;
				}).length
		);
	}),
	(df.prototype.get = function(e) {
		var t = this.localStorageHelper.getItem(e),
			i = t && tryParseJson(t);
		return i && "object" == typeof i && "bids" in i
			? ((i.bids = i.bids.filter(function(e) {
					return e.expiration > now();
			  })),
			  i)
			: { bids: [] };
	}),
	(df.prototype.getBySlotKey = function(e) {
		return this.get(df.BID_KEY_PREFIX + e.toString());
	}),
	(df.prototype.set = function(e, t) {
		0 < t.bids.length || (t.no_bid && t.no_bid > now())
			? this.localStorageHelper.setItem(e, JSON.stringify(t))
			: this.localStorageHelper.removeItem(e);
	}),
	(df.prototype.setBySlotKey = function(e, t) {
		this.set(df.BID_KEY_PREFIX + e.toString(), t);
	}),
	(df.prototype.filterNoBidSlots = function(e) {
		for (var t = [], i = 0, r = e; i < r.length; i++) {
			for (
				var o = r[i],
					n = [],
					a = 0,
					s = this.slotKeyFactory.createKeysFromSlotRequest(o);
				a < s.length;
				a++
			) {
				var d = s[a];
				this.getBid(d, 0) !== df.NO_BID &&
					(d instanceof SlotKeyWithSize ? n.push(d.size) : t.push(o));
			}
			0 < n.length && ((o.sizes = n), t.push(o));
		}
		return t;
	}),
	(df.prototype.getRequestCachedBids = function(e, t) {
		void 0 === t && (t = 5e3);
		for (var i = [], r = 0, o = e; r < o.length; r++)
			for (
				var n = o[r],
					a = 0,
					s = this.slotKeyFactory.createKeysFromSlotRequest(n);
				a < s.length;
				a++
			) {
				var d = s[a],
					c = this.getBid(d, t);
				void 0 !== c && c !== df.NO_BID && i.push(c);
			}
		return i;
	}),
	(df.prototype.getBid = function(e, t) {
		if ((void 0 === t && (t = 5e3), this.localStorageEnabled)) {
			var i = this.getBySlotKey(e);
			if (i.no_bid && i.no_bid > now()) return df.NO_BID;
			if (0 < t)
				for (var r = 0, o = i.bids; r < o.length; r++) {
					var n = o[r];
					if (new Lock(df.BID_KEY_PREFIX + n.bid.slotid).tryAcquire(t))
						return n.bid;
				}
		}
	}),
	(df.prototype.storeRequestNoBid = function(e, t) {
		for (
			var i = 0, r = this.slotKeyFactory.createKeysFromSlotRequest(e);
			i < r.length;
			i++
		) {
			var o = r[i];
			this.storeNoBid(o, t);
		}
	}),
	(df.prototype.storeResponseBid = function(t, i) {
		var e = this.slotKeyFactory.createKeyFromSlotResponse(t);
		this.modifyCache(e, function(e) {
			e.bids.push({ bid: t, expiration: now() + 1e3 * i });
		});
	}),
	(df.prototype.storeNoBid = function(e, t) {
		this.modifyCache(e, function(e) {
			e.no_bid = Math.max(e.no_bid || 0, now() + 1e3 * t);
		});
	}),
	(df.prototype.removeBid = function(i) {
		var e = this.slotKeyFactory.createKeyFromBid(i);
		this.modifyCache(e, function(e) {
			for (var t = 0; t < e.bids.length; t++)
				if (e.bids[t].bid.slotid === i.slotId) return void e.bids.splice(t, 1);
		}),
			new Lock(e.toString()).release();
	}),
	(df.prototype.modifyCache = function(t, i) {
		var r = this;
		if (this.localStorageEnabled) {
			var o = new Lock(t.toString());
			o.acquire(function() {
				var e = r.getBySlotKey(t);
				i(e), r.setBySlotKey(t, e), o.release();
			}, 1e3);
		}
	}),
	(df.prototype.clearExpiredItems = function() {
		for (
			var e = 0,
				t = this.localStorageHelper.getAllItemsByPrefix(df.BID_KEY_PREFIX);
			e < t.length;
			e++
		) {
			var i = t[e],
				r = this.get(i);
			r && this.set(i, r);
		}
	}),
	(df.NO_BID = "nobid"),
	(df.BID_KEY_PREFIX = "criteo_pt_cdb_bidcache_"),
	df);
	function df(e, t) {
		(this.localStorageHelper = new LocalStorageHelper()),
			(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage()),
			(this.slotKeyFactory = new SlotKeyFactory(e, t));
	}
	var DirectBiddingCache = ((tg.prototype.filterNoBidSlots = function(e) {
		var t = this.bidManager.filterNoBidSlots(e);
		return this.context.shouldIgnoreSilentMode
			? (t.length !== e.length &&
					this.context.setSilentModeIgnored &&
					this.context.setSilentModeIgnored(),
			  e)
			: t;
	}),
	(tg.prototype.silentModeEnabled = function() {
		var e = !1;
		return (
			this.silentModeManager.silentModeEnabled() &&
				(this.context.shouldIgnoreSilentMode &&
				this.context.setSilentModeIgnored
					? this.context.setSilentModeIgnored()
					: (e = !0)),
			e
		);
	}),
	(tg.prototype.getCachedBids = function(e) {
		return this.bidManager.getRequestCachedBids(e);
	}),
	(tg.prototype.removeBid = function(e) {
		this.bidManager.removeBid(e);
	}),
	(tg.prototype.handleResponse = function(e, t, i, r) {
		var o = i.time_to_next_call;
		0 < o &&
			(Log.Debug("Global silent mode enabled for " + o + " seconds"),
			this.silentModeManager.enableSilentMode(1e3 * o));
		var n = {};
		if (i.slots)
			for (var a = 0, s = i.slots; a < s.length; a++)
				(g = s[a]).ttl && (n[g.imp_id] = g.ttl);
		if (t.slots)
			for (var d = 0, c = t.slots; d < c.length; d++) {
				var l = 0;
				(g = c[d]).slotid in n && ((l = n[g.slotid]), delete n[g.slotid]),
					r &&
						0 < l &&
						(Log.Debug(
							"Post-timeout bid for slot '" +
								g.impid +
								"' cached for " +
								l +
								" seconds"
						),
						this.bidManager.storeResponseBid(g, l));
			}
		for (var u in n)
			if (n.hasOwnProperty(u))
				for (var p = 0, h = e; p < h.length; p++) {
					var g;
					(g = h[p]).slotId === u &&
						((l = n[u]),
						Log.Debug(
							"Silent mode for slot '" +
								g.impId +
								"' enabled for " +
								l +
								" seconds"
						),
						this.bidManager.storeRequestNoBid(g, l));
				}
	}),
	(tg.prototype.clearExpiredItems = function() {
		var e = this;
		setTimeout(function() {
			e.bidManager.clearExpiredItems();
		}, 3e3);
	}),
	tg);
	function tg(e, t, i) {
		var r = DirectBiddingBidManager.useZoneIdIntegration(t, i);
		(this.bidManager = new DirectBiddingBidManager(r, i)),
			(this.silentModeManager = new DirectBiddingSilentModeManager()),
			(this.context = e);
	}
	function resolvePrebidTimeout(e) {
		var t =
			"number" == typeof window.PREBID_TIMEOUT ? window.PREBID_TIMEOUT : void 0;
		return e && t ? Math.min(e, t) : e || t || void 0;
	}
	var PublisherTagVersion = 85,
		DirectBiddingMetric = function(
			e,
			t,
			i,
			r,
			o,
			n,
			a,
			s,
			d,
			c,
			l,
			u,
			p,
			h,
			g,
			f,
			v,
			m,
			y,
			C
		) {
			(this.publisherTagVersion = e),
				(this.slots = t),
				(this.elapsed = i),
				(this.isTimeout = r),
				(this.pageLoadElapsed = o),
				(this.adapterStartElapsed = n),
				(this.cdbCallStartElapsed = a),
				(this.cdbCallEndElapsed = s),
				(this.adapterEndElapsed = d),
				(this.setTargetingElapsed = c),
				(this.adapterTimeout = l),
				(this.adapterIsTimeout = u),
				(this.timeToFirstByte = p),
				(this.requestGroupId = h),
				(this.sid = g),
				(this.previousBuildRequestTimestamp = f),
				(this.silentModeRequestCount = v),
				(this.localStorageKeyCount = m),
				(this.connectionEstablishmentTime = y),
				(this.domainLookupTime = C);
		},
		DirectBiddingMetricSlot = function(e, t, i, r, o) {
			(this.impressionId = e),
				(this.zoneId = t),
				(this.adUnitId = i),
				(this.cachedBidUsed = r),
				(this.isDsc = o);
		},
		DirectBiddingMetricBuilder = ((uh.prototype.withElapsed = function(e) {
			return (this.elapsed = Math.round(e)), this;
		}),
		(uh.prototype.withIsTimeout = function(e) {
			return (this.isTimeout = e), this;
		}),
		(uh.prototype.withPageLoadElapsed = function(e) {
			return (this.pageLoadElapsed = Math.round(e)), this;
		}),
		(uh.prototype.withAdapterStartElapsed = function(e) {
			return (this.adapterStartElapsed = Math.round(e)), this;
		}),
		(uh.prototype.withCdbCallStartElapsed = function(e) {
			return (this.cdbCallStartElapsed = Math.round(e)), this;
		}),
		(uh.prototype.withCdbCallEndElapsed = function(e) {
			return (this.cdbCallEndElapsed = Math.round(e)), this;
		}),
		(uh.prototype.withSetTargetingElapsed = function(e) {
			return (this.setTargetingElapsed = Math.round(e)), this;
		}),
		(uh.prototype.withAdapterEndElapsed = function(e) {
			return (this.adapterEndElapsed = Math.round(e)), this;
		}),
		(uh.prototype.withAdapterTimeout = function(e) {
			return (this.adapterTimeout = e && Math.round(e)), this;
		}),
		(uh.prototype.withCachedBidsReturned = function(e) {
			return (this.cachedBidsReturned = e), this;
		}),
		(uh.prototype.withTimeToFirstByte = function(e) {
			return (this.timeToFirstByte = e && Math.round(e)), this;
		}),
		(uh.prototype.withConnectionEstablishmentTime = function(e) {
			return (this.connectionEstablishmentTime = e && Math.round(e)), this;
		}),
		(uh.prototype.withDomainLookupTime = function(e) {
			return (this.domainLookupTime = e && Math.round(e)), this;
		}),
		(uh.prototype.withRequestGroupId = function(e) {
			return (this.requestGroupId = e), this;
		}),
		(uh.prototype.withSid = function(e) {
			return (this.sid = e), this;
		}),
		(uh.prototype.addSlot = function(e, t, i, r) {
			var o =
				0 <
				this.cachedBidsReturned.filter(function(e) {
					return e.impid === i && e.zoneid === t;
				}).length;
			return this.slots.push(new DirectBiddingMetricSlot(e, t, i, o, r)), this;
		}),
		(uh.prototype.build = function() {
			var e;
			return (
				void 0 !== this.adapterTimeout &&
					(e = this.adapterEndElapsed > this.adapterTimeout),
				new DirectBiddingMetric(
					PublisherTagVersion,
					this.slots,
					this.elapsed,
					this.isTimeout,
					this.pageLoadElapsed,
					this.adapterStartElapsed,
					this.cdbCallStartElapsed,
					this.cdbCallEndElapsed,
					this.adapterEndElapsed,
					this.setTargetingElapsed,
					this.adapterTimeout,
					e,
					this.timeToFirstByte,
					this.requestGroupId,
					this.sid,
					this.metricsManager.getPreviousBuildRequestTimestamp(),
					this.metricsManager.getSilentModeRequestCount(!0),
					this.metricsManager.getLocalStorageKeyCount(),
					this.connectionEstablishmentTime,
					this.domainLookupTime
				)
			);
		}),
		uh);
	function uh(e) {
		(this.elapsed = 0),
			(this.isTimeout = !1),
			(this.pageLoadElapsed = 0),
			(this.adapterStartElapsed = 0),
			(this.cdbCallStartElapsed = 0),
			(this.cdbCallEndElapsed = 0),
			(this.adapterEndElapsed = 0),
			(this.cachedBidsReturned = []),
			(this.slots = []),
			(this.metricsManager = e);
	}
	var DirectBiddingMetricRequestBuilder = ((Sh.prototype.getRequest = function() {
		return { feedbacks: this.feedbacks };
	}),
	(Sh.prototype.getUrl = function() {
		return this.urlBuilder.buildCsmUrl(
			this.profileId,
			this.adapterVersion,
			this.wrapperVersion
		);
	}),
	Sh);
	function Sh(e, t, i, r, o) {
		(this.urlBuilder = e),
			(this.profileId = t),
			(this.adapterVersion = r),
			(this.wrapperVersion = o),
			(this.feedbacks = i);
	}
	var CacheBusterGenerator = ((Zh.generateCacheBuster = function() {
			return Math.floor(99999999999 * Math.random());
		}),
		Zh),
		IntegrationMode,
		$h;
	function Zh() {}
	function parse(e) {
		switch (e.toLowerCase()) {
			case "amp":
				return IntegrationMode.AMP;
			default:
				return IntegrationMode.Unspecified;
		}
	}
	($h = IntegrationMode = IntegrationMode || {}),
		($h[($h.Unspecified = 0)] = "Unspecified"),
		($h[($h.AMP = 1)] = "AMP");
	var DirectBiddingUrlBuilder = ((ai.prototype.buildUrl = function(
		e,
		t,
		i,
		r,
		o
	) {
		void 0 === i && (i = IntegrationMode.Unspecified);
		var n = ai.CRITEO_BIDDER_URL + this.getHandlerPath();
		return (
			(n += "?ptv=" + PublisherTagVersion),
			!0 === t.isAdBlocked && (n += "&abp=1"),
			(n = this.appendCommonParameters(n, e, r, o)),
			(n += t.ctoIdOnPublisherDomain
				? "&idcpy=" + t.ctoIdOnPublisherDomain
				: ""),
			(n += t.idfs ? "&idfs=" + t.idfs : ""),
			(n += t.secureId ? "&sid=" + t.secureId : ""),
			(n += t.isOptOut ? "&optout=1" : ""),
			(n += t.bundle ? "&bundle=" + t.bundle : ""),
			i !== IntegrationMode.Unspecified && (n += "&im=" + i),
			(n += t.silentModeIgnored ? "&smi=1" : ""),
			(n += "&cb=" + String(CacheBusterGenerator.generateCacheBuster())),
			(n += t.getContextFlags())
		);
	}),
	(ai.prototype.buildCsmUrl = function(e, t, i) {
		var r = ai.CRITEO_BIDDER_URL + ai.CRITEO_CSM_HANDLER;
		return (
			(r += "?ptv=" + PublisherTagVersion),
			this.appendCommonParameters(r, e, t, i)
		);
	}),
	(ai.prototype.appendCommonParameters = function(e, t, i, r) {
		return (
			(e += "&profileId=" + String(t)),
			void 0 !== i && (e += "&av=" + String(i)),
			void 0 !== r && (e += "&wv=" + encodeURIComponent(r)),
			e
		);
	}),
	(ai.prototype.getHandlerPath = function() {
		return this.auditMode
			? ai.CRITEO_BIDDER_AUDIT_HANDLER
			: ai.CRITEO_BIDDER_HANDLER;
	}),
	(ai.CRITEO_BIDDER_URL = "https://bidder.criteo.com/"),
	(ai.CRITEO_BIDDER_HANDLER = "cdb"),
	(ai.CRITEO_CSM_HANDLER = "csm"),
	(ai.CRITEO_BIDDER_AUDIT_HANDLER = "prebid/audit"),
	ai);
	function ai(e) {
		void 0 === e && (e = !1), (this.auditMode = e);
	}
	var DirectBiddingMetricsManager = ((qi.prototype.getMetrics = function(e) {
		if (this.localStorageEnabled) {
			var t = qi.TIMING_METRICS_STORAGE_KEY,
				i = this.localStorageHelper.getItem(t),
				r = i ? tryParseJson(i) : [];
			return e && this.localStorageHelper.removeItem(t), r;
		}
		return [];
	}),
	(qi.prototype.setMetrics = function(e) {
		if (this.localStorageEnabled) {
			var t = qi.TIMING_METRICS_STORAGE_KEY;
			this.localStorageHelper.setItem(t, JSON.stringify(e), 36e5);
		}
	}),
	(qi.prototype.storeMetric = function(e) {
		var t = this;
		if (this.localStorageEnabled) {
			var i = this.getMetrics(!1);
			i.push(e), this.setMetrics(i);
			var r = ((e && e.adapterTimeout) || 2e3) + 1e3;
			setTimeout(function() {
				t.sendMetrics();
			}, r);
		}
	}),
	(qi.prototype.getManagerMetrics = function() {
		var e = this.localStorageHelper.getItem(qi.MANAGER_METRICS_STORAGE_KEY);
		if (null == e) return {};
		var t = tryParseJson(e);
		return void 0 === t ? {} : t;
	}),
	(qi.prototype.setManagerMetrics = function(e) {
		this.localStorageHelper.setItem(
			qi.MANAGER_METRICS_STORAGE_KEY,
			JSON.stringify(e)
		);
	}),
	(qi.prototype.getPreviousBuildRequestTimestamp = function() {
		var e = this.getManagerMetrics().previousBuildRequestTimestamp;
		return isNaN(e) ? void 0 : e;
	}),
	(qi.prototype.resetPreviousBuildRequestTimestamp = function() {
		var e = this.getManagerMetrics();
		(e.previousBuildRequestTimestamp = new Date().getTime().toString()),
			this.setManagerMetrics(e);
	}),
	(qi.prototype.getSilentModeRequestCount = function(e) {
		void 0 === e && (e = !1);
		var t = this.getManagerMetrics().silentModeRequestCount;
		return e && this.resetSilentModeRequestCount(), isNaN(t) ? 0 : t;
	}),
	(qi.prototype.incSilentModeRequestCount = function() {
		var e = this.getManagerMetrics();
		(e.silentModeRequestCount = isNaN(e.silentModeRequestCount)
			? 1
			: e.silentModeRequestCount + 1),
			this.setManagerMetrics(e);
	}),
	(qi.prototype.resetSilentModeRequestCount = function() {
		var e = this.getManagerMetrics();
		(e.silentModeRequestCount = 0), this.setManagerMetrics(e);
	}),
	(qi.prototype.getLocalStorageKeyCount = function() {
		return (
			this.localStorageHelper.getAllItemsByPrefix("criteo_").length +
			this.localStorageHelper.getAllItemsByPrefix("cto_").length
		);
	}),
	(qi.prototype.sendMetrics = function() {
		var e = this.getMetrics(!0);
		if (!(e.length <= 0)) {
			this.resetPreviousBuildRequestTimestamp();
			var t = new DirectBiddingMetricRequestBuilder(
					new DirectBiddingUrlBuilder(),
					this.profileId,
					e,
					this.adapterVersion,
					this.wrapperVersion
				),
				i = t.getUrl(),
				r = JSON.stringify(t.getRequest());
			navigator.sendBeacon && navigator.sendBeacon(i, r);
		}
	}),
	(qi.TIMING_METRICS_STORAGE_KEY = "criteo_pt_cdb_metrics"),
	(qi.MANAGER_METRICS_STORAGE_KEY = "criteo_pt_cdb_mngr_metrics"),
	qi);
	function qi(e, t, i, r) {
		(this.profileId = e),
			(this.adapterVersion = t),
			(this.wrapperVersion = i),
			(this.localStorageHelper = r || new LocalStorageHelper()),
			(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage());
	}
	var DirectBiddingRequestBuilder = ((Si.prototype.isValid = function() {
		return 0 < this.slots.length;
	}),
	(Si.prototype.getRequest = function() {
		for (var e = [], t = 0, i = this.slots; t < i.length; t++) {
			var r = i[t],
				o = { slotid: r.slotId, impid: r.impId };
			if (
				(void 0 !== r.zoneId && (o.zoneid = r.zoneId),
				void 0 !== r.nativeCallback && (o.native = !0),
				void 0 !== r.transactionId && (o.transactionid = r.transactionId),
				void 0 !== r.publisherSubId && (o.publishersubid = r.publisherSubId),
				void 0 !== r.sizes)
			) {
				for (var n = [], a = 0, s = r.sizes; a < s.length; a++) {
					var d = s[a];
					n.push(d.width + "x" + d.height);
				}
				o.sizes = n;
			}
			if (void 0 !== r.video) {
				var c = {
					playersizes: this.parsePlayerSizes(r.video.playersize),
					mimes: r.video.mimes,
					protocols: r.video.protocols,
					maxduration: r.video.maxduration,
					api: r.video.api,
					skip: r.video.skip,
					placement: r.video.placement,
					playbackmethod: r.video.playbackmethod,
					minduration: r.video.minduration,
					startdelay: r.video.startdelay
				};
				o.video = c;
			}
			if (void 0 !== this.viewportComputer) {
				var l = this.viewportComputer.getSlotPosition(r);
				void 0 !== l && (o.position = { top: l.top, left: l.left });
			}
			e.push(o);
		}
		var u = { ceh: this.context.ceh, uspOptout: this.context.ccpaOptout },
			p = {
				publisher: { url: this.context.highestAccessibleUrl },
				slots: e,
				user: u
			};
		void 0 !== this.networkId && (p.publisher.networkid = this.networkId);
		var h = this.metricsManager.getMetrics(!0);
		if (
			(h.length && (p.previousBidFeedback = h),
			this.privacyWrapper &&
				(this.privacyWrapper.gdprConsent &&
					(p.gdprConsent = this.privacyWrapper.gdprConsent),
				this.privacyWrapper.ccpaIabConsent &&
					(u.uspIab = this.privacyWrapper.ccpaIabConsent.uspString)),
			void 0 !== this.viewportComputer)
		) {
			var g = this.viewportComputer.getViewport();
			p.viewport = {
				width: g.width,
				height: g.height,
				scrollTop: g.scrollTop,
				scrollLeft: g.scrollLeft
			};
		}
		return p;
	}),
	(Si.parsePlayerSize = function(e) {
		return e[0] + "x" + e[1];
	}),
	(Si.prototype.parsePlayerSizes = function(e) {
		return Array.isArray(e[0])
			? e.map(function(e) {
					return Si.parsePlayerSize(e);
			  })
			: [Si.parsePlayerSize(e)];
	}),
	(Si.prototype.getUrl = function() {
		return this.urlBuilder.buildUrl(
			this.profileId,
			this.context,
			this.integrationMode,
			this.adapterVersion,
			this.wrapperVersion
		);
	}),
	Si);
	function Si(e, t, i, r, o, n, a, s, d, c, l) {
		(this.slots = e),
			(this.context = t),
			(this.metricsManager = i),
			(this.urlBuilder = r),
			(this.profileId = o),
			(this.integrationMode = n || IntegrationMode.Unspecified),
			(this.networkId = a),
			(this.adapterVersion = s),
			(this.privacyWrapper = d),
			(this.wrapperVersion = c),
			(this.viewportComputer = l);
	}
	function extractExtraData(e) {
		var t = { slots: void 0, time_to_next_call: 0 };
		return (
			void 0 !== e.exd &&
				(void 0 !== e.exd.time_to_next_call &&
					(t.time_to_next_call = e.exd.time_to_next_call),
				(t.slots = e.exd.slots),
				delete e.exd),
			t
		);
	}
	function getPreciseRequestDuration(e) {
		if (window.performance && window.performance.getEntries)
			for (
				var t = window.performance.getEntries(), i = t.length - 1;
				0 <= i;
				--i
			) {
				var r = t[i];
				if (r.name === e && r.duration) return Math.round(r.duration);
			}
	}
	function generateUuid() {
		var i = new Date().getTime();
		return (
			"undefined" != typeof performance &&
				"function" == typeof performance.now &&
				(i += performance.now()),
			"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
				var t = (i + 16 * Math.random()) % 16 | 0;
				return (
					(i = Math.floor(i / 16)), ("x" === e ? t : (3 & t) | 8).toString(16)
				);
			})
		);
	}
	var DirectBiddingTimer = ((Dj.prototype.sendRequest = function(e) {
		(this.url = e),
			(this.sendTime = TimeMeasurer.CreateRunning()),
			this.builder.withCdbCallStartElapsed(this.timer.elapsed());
	}),
	(Dj.prototype.requestReceived = function(e) {
		void 0 === e && (e = !1),
			this.builder.withElapsed(
				getPreciseRequestDuration(this.url) || this.sendTime.elapsed()
			),
			this.builder.withCdbCallEndElapsed(this.timer.elapsed()),
			this.builder.withIsTimeout(e);
	}),
	(Dj.prototype.setTargeting = function() {
		this.hasSetTargetingBeenCalled ||
			(this.builder.withSetTargetingElapsed(this.timer.elapsed()),
			(this.hasSetTargetingBeenCalled = !0));
	}),
	(Dj.prototype.finish = function(e, t) {
		if (
			(this.builder.withAdapterEndElapsed(this.timer.elapsed()),
			this.builder.withSid(e),
			this.builder.withRequestGroupId(generateUuid()),
			t && 0 !== t.length)
		)
			for (var i = 0, r = t; i < r.length; i++) {
				var o = r[i];
				this.builder.addSlot(o.imp_id, o.zone_id, o.ad_unit_id, o.is_dsc);
			}
		else this.builder.addSlot("");
		var n = Dj.getLastCdbTiming();
		return (
			void 0 !== n &&
				(this.builder.withTimeToFirstByte(Dj.computeTimeToFirstByte(n)),
				this.builder.withConnectionEstablishmentTime(
					Dj.computeConnectionEstablishmentTime(n)
				),
				this.builder.withDomainLookupTime(Dj.computeDomainLookupTime(n))),
			this.build()
		);
	}),
	(Dj.getLastCdbTiming = function() {
		if (
			void 0 !== window.performance &&
			void 0 !== window.performance.getEntriesByType &&
			"function" == typeof window.performance.getEntriesByType
		) {
			var e = window.performance.getEntriesByType("resource");
			if (void 0 !== e) {
				var t = e.filter(function(e) {
					return 0 <= e.name.indexOf("cdb");
				});
				return void 0 !== t && 0 < t.length ? t[t.length - 1] : void 0;
			}
		}
	}),
	(Dj.computeTimeToFirstByte = function(e) {
		var t = e.responseStart,
			i = e.requestStart;
		if (void 0 !== t && void 0 !== i) return t - i;
	}),
	(Dj.computeConnectionEstablishmentTime = function(e) {
		var t = e.connectEnd - e.connectStart;
		return isNaN(t) ? void 0 : t;
	}),
	(Dj.computeDomainLookupTime = function(e) {
		var t = e.domainLookupEnd - e.domainLookupStart;
		return isNaN(t) ? void 0 : t;
	}),
	(Dj.prototype.build = function() {
		return this.builder.build();
	}),
	Dj);
	function Dj(e, t, i) {
		(this.hasSetTargetingBeenCalled = !1),
			(this.builder = e),
			(this.timer =
				void 0 !== t
					? TimeMeasurer.CreateWithStartTime(t)
					: TimeMeasurer.CreateRunning());
		var r = this.timer.elapsed();
		this.builder.withAdapterStartElapsed(r),
			this.builder.withPageLoadElapsed(TimeMeasurer.TimeSincePageLoad() - r),
			void 0 !== i && this.builder.withAdapterTimeout(i);
	}
	var __extends$4 = (($j = function(e, t) {
			return ($j =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			$j(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		$j,
		DirectBiddingEvent = ((jk = AbstractEvent),
		__extends$4(kk, jk),
		(kk.prototype.setGDPRConsent = function(e) {
			this.gdprConsent = e;
		}),
		(kk.prototype.setCCPAIabConsent = function(e) {
			this.ccpaIabConsent = e;
		}),
		(kk.prototype.getMetricBuilder = function() {
			return this.metricBuilder;
		}),
		(kk.prototype.getMetricsManager = function() {
			return this.metricsManager;
		}),
		(kk.prototype.eval = function(e) {
			this.evalWithTimeout(e, void 0);
		}),
		(kk.prototype.evalWithTimeout = function(e, t) {
			var r = this,
				i = kk.getCriteoAdapterBidRequest(),
				o = kk.getRequestAuctionStart(i),
				n = t || resolvePrebidTimeout(i && i.timeout),
				a = new DirectBiddingTimer(this.metricBuilder, o, n),
				s = new DirectBiddingRequestBuilder(
					this.slots,
					e.context,
					this.metricsManager,
					this.urlBuilder,
					this.profileId,
					this.integrationMode,
					this.networkId,
					this.adapterVersion,
					{
						ccpaIabConsent: this.ccpaIabConsent,
						gdprConsent: this.gdprConsent
					},
					void 0,
					this.viewportComputer
				);
			if (s.isValid() && "undefined" != typeof JSON) {
				var d = s.getRequest(),
					c = JSON.stringify(d),
					l = s.getUrl(),
					u = new AsyncRequest(l, c, "application/x-www-form-urlencoded");
				a.sendRequest(l),
					u.send(
						function(e) {
							try {
								a.requestReceived();
								var t = tryParseJson(e) || {},
									i = extractExtraData(t);
								void 0 !== r.callbackSuccess &&
									r.callbackSuccess(JSON.stringify(t), i),
									r.metricsManager.storeMetric(a.finish(t.sid, i.slots));
							} catch (e) {
								Log.Error("Error onSuccess: " + e.toString());
							}
						},
						function(e, t) {
							try {
								a.requestReceived(),
									void 0 !== r.callbackError && r.callbackError(e, t),
									r.metricsManager.storeMetric(a.finish());
							} catch (e) {
								Log.Error("Error onError: " + e.toString());
							}
						},
						function() {
							try {
								a.requestReceived(!0),
									void 0 !== r.callbackTimeout && r.callbackTimeout(),
									r.metricsManager.storeMetric(a.finish());
							} catch (e) {
								Log.Error("Error onTimeout: " + e.toString());
							}
						},
						this.timeout
					);
			} else this.callbackError(void 0, void 0);
		}),
		(kk.getCriteoAdapterBidRequest = function() {
			try {
				return window.pbjs._bidsRequested.find(function(e) {
					return "criteo" === e.bidderCode;
				});
			} catch (e) {
				return;
			}
		}),
		(kk.getRequestAuctionStart = function(e) {
			return e && e.auctionStart;
		}),
		(kk.NAME = "directbidding"),
		kk),
		jk;
	function kk(e, t, i, r, o, n, a, s, d, c, l, u) {
		var p = jk.call(this, kk.NAME) || this;
		return (
			(p.profileId = e),
			(p.urlBuilder = t),
			(p.slots = i),
			(p.metricsManager = u || new DirectBiddingMetricsManager(e)),
			(p.metricBuilder = new DirectBiddingMetricBuilder(p.metricsManager)),
			(p.callbackSuccess = r),
			(p.callbackError = o),
			(p.callbackTimeout = n),
			(p.timeout = a),
			(p.networkId = s),
			(p.integrationMode = d),
			(p.adapterVersion = c),
			(p.viewportComputer = l),
			p
		);
	}
	var __extends$5 = ((Yk = function(e, t) {
			return (Yk =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			Yk(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Yk,
		DirectBiddingEventWithCaching = ((hl = AbstractEvent),
		__extends$5(il, hl),
		(il.prototype.eval = function(t) {
			var i = this,
				e = this.gdprPrivacyProvider.readyToRetrieve(),
				r = this.ccpaPrivacyProvider.readyToRetrieve();
			if (e || r) {
				var o,
					n,
					a = [];
				e && a.push(GDPRPrivacyProvider),
					r && a.push(CCPAPrivacyProvider),
					e &&
						this.gdprPrivacyProvider.retrieveConsent(function(e) {
							a.splice(a.indexOf("GDPR"), 1),
								0 === a.length ? i.evalWithCmp(t, e, n) : (o = e);
						}),
					r &&
						this.ccpaPrivacyProvider.retrieveConsent(function(e) {
							a.splice(a.indexOf("CCPA"), 1),
								0 === a.length ? i.evalWithCmp(t, o, e) : (n = e);
						});
			} else this.evalWithCmp(t, void 0, void 0);
		}),
		(il.prototype.evalWithCmp = function(e, t, i) {
			var r = this;
			if (this.cache.silentModeEnabled())
				return (
					Log.Debug(
						"Request ignored because the global silent mode is enabled"
					),
					this.getMetricsManager().incSilentModeRequestCount(),
					void this.callbackSuccess("", void 0)
				);
			setTimeout(function() {
				return r.onTimeout();
			}, this.timeout || 3e3),
				this.directBiddingEvent.setGDPRConsent(t),
				this.directBiddingEvent.setCCPAIabConsent(i),
				this.directBiddingEvent.evalWithTimeout(e, this.timeout);
		}),
		(il.prototype.onSuccess = function(e, t) {
			if (((this.hasResponded = !0), void 0 !== t)) {
				var i = tryParseJson(e);
				this.cache.handleResponse(this.slots, i, t, this.hasTimeouted);
			}
			this.hasTimeouted || this.callbackSuccess(e, t),
				this.cache.clearExpiredItems();
		}),
		(il.prototype.onError = function(e, t) {
			(this.hasResponded = !0),
				this.hasTimeouted || this.callbackError(e, t),
				this.cache.clearExpiredItems();
		}),
		(il.prototype.onHttpTimeout = function() {
			(this.hasResponded = !0),
				this.hasTimeouted || this.callbackTimeout(),
				this.cache.clearExpiredItems();
		}),
		(il.prototype.onTimeout = function() {
			if (!this.hasResponded) {
				this.hasTimeouted = !0;
				var e = this.cache.getCachedBids(this.slots);
				0 === e.length
					? this.callbackTimeout()
					: (Log.Debug(
							"Cached bids returned because of timeout: ['" +
								e
									.map(function(e) {
										return e.impid;
									})
									.join("', '") +
								"']"
					  ),
					  this.getMetricBuilder().withCachedBidsReturned(e),
					  this.callbackSuccess(JSON.stringify({ slots: e }), void 0));
			}
		}),
		(il.prototype.getMetricBuilder = function() {
			return this.directBiddingEvent.getMetricBuilder();
		}),
		(il.prototype.getMetricsManager = function() {
			return this.directBiddingEvent.getMetricsManager();
		}),
		(il.prototype.getBidCache = function() {
			return this.cache;
		}),
		(il.NAME = "directbidding"),
		il),
		hl;
	function il(e, t, i, r, o, n, a, s, d, c, l, u, p, h) {
		var g = hl.call(this, il.NAME) || this,
			f = Math.max(10 * (a || 3e3), 3e3);
		return (
			(g.cache = new DirectBiddingCache(window.criteo_pubtag.context, i, s)),
			(g.directBiddingEvent = new DirectBiddingEvent(
				e,
				t,
				g.cache.filterNoBidSlots(i),
				function(e, t) {
					return g.onSuccess(e, t);
				},
				function(e, t) {
					return g.onError(e, t);
				},
				function() {
					return g.onHttpTimeout();
				},
				f,
				s,
				d,
				c,
				l,
				u
			)),
			(g.slots = i),
			(g.callbackSuccess = r),
			(g.callbackError = o),
			(g.callbackTimeout = n),
			(g.timeout = a),
			(g.hasTimeouted = !1),
			(g.hasResponded = !1),
			(g.gdprPrivacyProvider =
				p ||
				new GDPRCompatiblePrivacyProvider(
					new GDPRPrivacyProvider(window),
					new TCFv2PrivacyProvider(window)
				)),
			(g.ccpaPrivacyProvider = h || new CCPAPrivacyProvider(window)),
			g
		);
	}
	var __extends$6 = ((Xl = function(e, t) {
			return (Xl =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			Xl(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Xl,
		Custom = ((gm = AbstractEvent),
		__extends$6(hm, gm),
		(hm.prototype.eval = function(e) {
			this.callback && this.callback.apply(this);
		}),
		(hm.NAME = "genericEvent"),
		hm),
		gm;
	function hm(e) {
		var t = gm.call(this, hm.NAME) || this;
		return (t.callback = e), t;
	}
	var BidResponseSlot = ((lm.prototype.generateRandomId = function() {
		return Math.random()
			.toString(36)
			.replace(/[^a-z]+/g, "")
			.substr(0, 6);
	}),
	lm);
	function lm(e, t, i, r, o, n, a) {
		(this.id = this.generateRandomId()),
			(this.slotId = e),
			(this.impressionId = t),
			(this.cpm = i),
			(this.width = r),
			(this.height = o),
			(this.zoneId = n),
			(this.dealCode = a);
	}
	var __extends$7 = ((tm = function(e, t) {
			return (tm =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			tm(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		tm,
		DisplayUrlBidResponseSlot = ((Em = BidResponseSlot),
		__extends$7(Fm, Em),
		(Fm.prototype.GenerateEvent = function(e) {
			var t = this;
			return (
				e.ResizeFrame(this.width, this.height),
				new Custom(function() {
					return e.LoadScript(t.displayUrl);
				})
			);
		}),
		(Fm.prototype.GenerateMessage = function() {
			return { displayUrl: this.displayUrl };
		}),
		Fm),
		Em;
	function Fm(e, t, i, r, o, n, a, s) {
		var d = Em.call(this, e, t, i, r, o, n, s) || this;
		return (d.displayUrl = a), d;
	}
	var __extends$8 = ((Rm = function(e, t) {
			return (Rm =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			Rm(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Rm,
		HtmlCreativeBidResponseSlot = ((an = BidResponseSlot),
		__extends$8(bn, an),
		(bn.prototype.GenerateEvent = function(e) {
			var t = this;
			return (
				e.ResizeFrame(this.width, this.height),
				new Custom(function() {
					return e.Write(t.creative);
				})
			);
		}),
		(bn.prototype.GenerateMessage = function() {
			return { creative: this.creative };
		}),
		bn),
		an;
	function bn(e, t, i, r, o, n, a, s) {
		var d = an.call(this, e, t, i, r, o, n, s) || this;
		return (d.creative = a), d;
	}
	var __extends$9 = ((on = function(e, t) {
			return (on =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			on(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		on,
		NativeBidResponseSlot = ((zn = BidResponseSlot),
		__extends$9(An, zn),
		(An.prototype.GenerateEvent = function(e) {
			var t = this;
			return "function" != typeof this.nativeCallback
				? (Log.Error(
						"'nativeCallback' parameter is not a function in placements object"
				  ),
				  new Custom(void 0))
				: "object" != typeof this.nativePayload
					? (Log.Error(
							"'nativePayload' parameter is not an object in placements object"
					  ),
					  new Custom(void 0))
					: new Custom(function() {
							return t.nativeCallback(t.nativePayload);
					  });
		}),
		(An.prototype.GenerateMessage = function() {
			return { nativePayload: this.nativePayload };
		}),
		An),
		zn;
	function An(e, t, i, r, o, n, a, s, d) {
		var c = zn.call(this, e, t, i, r, o, n, d) || this;
		return (c.nativeCallback = a), (c.nativePayload = s), c;
	}
	function GenerateBidResponseSlot(e, t, i, r, o, n, a, s, d, c, l) {
		return void 0 !== a && void 0 !== s
			? new NativeBidResponseSlot(e, t, i, r, o, n, a, s, l)
			: void 0 === d || (void 0 !== c && "<script" !== c.substr(0, 7))
				? void 0 !== c
					? new HtmlCreativeBidResponseSlot(e, t, i, r, o, n, c, l)
					: void 0
				: new DisplayUrlBidResponseSlot(e, t, i, r, o, n, d, l);
	}
	var DirectBiddingPlaceholder = ((Yn.clearState = function() {
		this.cloneByImpressionId = {};
	}),
	(Yn.tryInsertPlaceholder = function(e) {
		var t = document.getElementById(e);
		if (null === t) return !1;
		if ((t.appendChild(this.createPlaceholder()), this.isVisible(t))) return !0;
		this.removePlaceholder(e);
		var i = t.parentElement;
		if (null === i) return !1;
		var r = this.createClone(t);
		return (
			i.insertBefore(r, t),
			r.appendChild(this.createPlaceholder()),
			this.isVisible(r)
				? ((this.cloneByImpressionId[e] = r), !0)
				: (i.removeChild(r), !1)
		);
	}),
	(Yn.isVisible = function(e) {
		return (
			0 !== e.offsetWidth &&
			0 !== e.offsetHeight &&
			0 !== e.getClientRects().length
		);
	}),
	(Yn.createClone = function(e) {
		var t = e.cloneNode(!1);
		return (t.id = this.generateRandomId()), (t.className = ""), t;
	}),
	(Yn.generateRandomId = function() {
		for (
			var e = "1234567890abcdefghijklmnopqrstuvwxyz", t = "", i = 0;
			i < 20;
			i++
		) {
			var r = Math.floor(Math.random() * e.length);
			t += e.charAt(r);
		}
		return t;
	}),
	(Yn.createPlaceholder = function() {
		var e = document.createElement("div");
		return (
			(e.style.width = "1px"),
			(e.style.height = "1px"),
			(e.style.display = "block"),
			(e.className = Yn.PLACEHOLDER_NAME),
			e
		);
	}),
	(Yn.removePlaceholder = function(e) {
		var t = this.cloneByImpressionId[e];
		if (void 0 === t) {
			var i = document.getElementById(e);
			if (null !== i)
				for (
					var r = 0, o = i.getElementsByClassName(Yn.PLACEHOLDER_NAME);
					r < o.length;
					r++
				) {
					var n = o[r];
					null !== n.parentNode && n.parentNode.removeChild(n);
				}
		} else null !== t.parentNode && t.parentNode.removeChild(t);
	}),
	(Yn.insertAdIFrame = function(e) {
		var t,
			i = this.cloneByImpressionId[e];
		if (void 0 !== i) t = i;
		else {
			var r = document.getElementById(e);
			if (null === r) return null;
			t = r;
		}
		for (
			var o = 0, n = t.getElementsByClassName(Yn.PLACEHOLDER_NAME);
			o < n.length;
			o++
		) {
			for (var a = n[o], s = 0, d = a.childNodes; s < d.length; s++) {
				var c = d[s];
				null !== c.parentNode && c.parentNode.removeChild(c);
			}
			var l = this.createAdIFrame();
			return (
				a.appendChild(l),
				(a.style.width = ""),
				(a.style.height = ""),
				(a.style.display = ""),
				l
			);
		}
		return null;
	}),
	(Yn.createAdIFrame = function() {
		var e = document.createElement("iframe");
		return (
			(e.scrolling = "no"),
			(e.marginWidth = "0"),
			(e.marginHeight = "0"),
			(e.frameBorder = "0"),
			(e.style.border = "0"),
			(e.style.verticalAlign = "bottom"),
			e
		);
	}),
	(Yn.removePlaceholders = function(e, t) {
		void 0 === t && (t = []);
		for (var i = 0, r = e; i < r.length; i++) {
			var o = r[i].impId;
			-1 === t.indexOf(o) && Yn.removePlaceholder(o);
		}
	}),
	(Yn.tryInsertPlaceholders = function(e) {
		for (var t = [], i = 0, r = e; i < r.length; i++) {
			var o = r[i],
				n = o.impId;
			Yn.tryInsertPlaceholder(n) && t.push(o);
		}
		return t;
	}),
	(Yn.PLACEHOLDER_NAME = "criteo_placeholder"),
	(Yn.cloneByImpressionId = {}),
	Yn);
	function Yn() {}
	function retrieveGoogleTagPlacements(t) {
		(window.googletag = window.googletag || {}),
			(window.googletag.cmd = window.googletag.cmd || []),
			window.googletag.cmd.push(function() {
				var e = googleSlotsToDynamicSlots(window.googletag.pubads().getSlots());
				t(e);
			});
	}
	function googleSlotsToDynamicSlots(e) {
		for (
			var t = [],
				i =
					window.innerWidth ||
					document.documentElement.clientWidth ||
					document.body.clientWidth,
				r =
					window.innerHeight ||
					document.documentElement.clientHeight ||
					document.body.clientHeight,
				o = 0,
				n = e;
			o < n.length;
			o++
		) {
			for (
				var a = n[o],
					s = a.getSlotElementId(),
					d = [],
					c = 0,
					l = a.getSizes(i, r) || a.getSizes();
				c < l.length;
				c++
			) {
				var u = l[c];
				"function" == typeof u.getWidth &&
					u.getWidth() &&
					"function" == typeof u.getHeight &&
					u.getHeight() &&
					d.push(u.getWidth() + "x" + u.getHeight());
			}
			s && 0 < d.length && t.push({ slotId: s, sizes: d });
		}
		return t;
	}
	var __assign = function() {
		return (__assign =
			Object.assign ||
			function(e) {
				for (var t, i = 1, r = arguments.length; i < r; i++)
					for (var o in (t = arguments[i]))
						Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
				return e;
			}).apply(this, arguments);
	};
	function createEmptyDFPTargeting() {
		return createDFPTargeting(null, null);
	}
	function createDFPTargeting(e, t, i) {
		var r = { crt_pb: [e], crt_bidid: [t] };
		return (
			void 0 !== i && (r = __assign(__assign({}, r), { crt_deal: [i] })), r
		);
	}
	var DFPKeyValueTargeter = ((op.prototype.setKeyValuesForAllSlots = function(
		t
	) {
		var i = this;
		this.googletag.cmd.push(function() {
			for (var e in t)
				t.hasOwnProperty(e) &&
					(i.googletag.pubads().clearTargeting(e),
					i.googletag.pubads().setTargeting(e, t[e] + ""));
		});
	}),
	(op.prototype.setKeyValuePerSlot = function(t, i) {
		var r = this.googletag
			.pubads()
			.getSlots()
			.filter(function(e) {
				return e.getSlotElementId() === t;
			});
		0 === r.length
			? Log.Warning("No googletag slot found for slotId: " + t)
			: 1 < r.length
				? Log.Warning("More than one googletag slot found for slotId: " + t)
				: this.googletag.cmd.push(function() {
						for (var e in i)
							i.hasOwnProperty(e) &&
								(r[0].clearTargeting(e), r[0].setTargeting(e, i[e] + ""));
				  });
	}),
	(op.prototype.resetKeyValuesForSlots = function(t) {
		var e = this,
			i = createEmptyDFPTargeting();
		this.googletag
			.pubads()
			.getSlots()
			.filter(function(e) {
				return -1 !== t.indexOf(e.getSlotElementId());
			})
			.forEach(function(t) {
				e.googletag.cmd.push(function() {
					for (var e in i) i.hasOwnProperty(e) && t.clearTargeting(e);
				});
			});
	}),
	op);
	function op() {
		void 0 === window.googletag && (window.googletag = {}),
			(this.googletag = window.googletag),
			(this.googletag.cmd = this.googletag.cmd || []);
	}
	function executeFunction(val, args) {
		if (val) {
			var ret;
			try {
				ret = eval("(" + val + ")");
			} catch (e) {
				return void Log.Error("Error evaluating the function: " + e);
			}
			if ("function" == typeof ret) return ret.apply(ret, args);
			Log.Error("The passed value is not a function");
		} else Log.Error("Cannot execute an empty function");
	}
	function getParam(e, t, i) {
		return typeof e[t] === i ? e[t] : void 0;
	}
	var DirectBiddingPosition = function(e, t) {
			(this.top = e), (this.left = t);
		},
		DirectBiddingViewport = function(e, t, i, r) {
			(this.width = e),
				(this.height = t),
				(this.scrollTop = i),
				(this.scrollLeft = r);
		},
		DomManipulationTools = ((Qp.getHighestAccessibleWindow = function(e) {
			var t = e,
				i = !1;
			try {
				for (; t.parent.document !== t.document; ) {
					if (!t.parent.document) {
						i = !0;
						break;
					}
					t = t.parent;
				}
			} catch (e) {
				i = !0;
			}
			return { topFrame: t, err: i };
		}),
		(Qp.getHighestAccessibleUrl = function(e) {
			var t = e.topFrame;
			if (!e.err) return t.location.href;
			try {
				var i = t.top.location.href;
				if (i) return i;
			} catch (e) {}
			try {
				var r = t.location.ancestorOrigins;
				if (r) return r[r.length - 1];
			} catch (e) {}
			return t.document.referrer;
		}),
		(Qp.inIframe = function() {
			try {
				return window.self !== window.top;
			} catch (e) {
				return !0;
			}
		}),
		Qp);
	function Qp() {}
	var ViewportComputer = ((bq.prototype.getViewport = function() {
		var e = DomManipulationTools.getHighestAccessibleWindow(window).topFrame,
			t = e.document,
			i = e.innerWidth || t.documentElement.clientWidth,
			r = e.innerHeight || t.documentElement.clientHeight,
			o = t.documentElement.scrollTop || (t.body && t.body.scrollTop) || 0,
			n = t.documentElement.scrollLeft || (t.body && t.body.scrollLeft) || 0;
		return new DirectBiddingViewport(i, r, o, n);
	}),
	(bq.prototype.getSlotPosition = function(e) {
		var t = e.impId,
			i = document.getElementById(t);
		if (null !== i) {
			var r = i.getBoundingClientRect();
			return new DirectBiddingPosition(r.top, r.left);
		}
	}),
	bq);
	function bq() {}
	var LineItemRange = ((mq.createLineItemRangesFromString = function(e) {
		for (var t = [], i = 0, r = e.split(";"); i < r.length; i++) {
			var o = r[i],
				n = o.split(".."),
				a = mq.roundToDecimal(n[0], 2),
				s = n[1].split(":"),
				d = mq.roundToDecimal(s[0], 2),
				c = mq.roundToDecimal(s[1], 2);
			if (isNaN(a) || isNaN(d) || isNaN(c) || 0 === c) {
				Log.Warning("Could not parse range parameter: " + o);
				break;
			}
			if (a < 0 || d < 0 || c < 0) {
				Log.Warning("Positive values must be set for range bounds: " + o);
				break;
			}
			var l = d - a,
				u = l / c,
				p = u === Math.floor(u);
			d < a
				? Log.Warning(
						"Lower bound (" + a + ") greater than upper bound (" + d + ")"
				  )
				: p
					? t.push(new mq(a, d, c))
					: Log.Warning(
							"Range (" + l + ") is not divisible by increment (" + c + ")"
					  );
		}
		return (
			t.sort(function(e, t) {
				return e.upperBound > t.upperBound
					? 1
					: t.upperBound > e.upperBound
						? -1
						: 0;
			}),
			t
		);
	}),
	(mq.getDefaultDenseLineItemRanges = function() {
		return [new mq(0, 3, 0.01), new mq(3, 8, 0.05), new mq(8, 20, 0.5)];
	}),
	(mq.computeLineItemPricebandValue = function(e, t) {
		0 === t.length && (t = mq.getDefaultDenseLineItemRanges());
		for (var i = 0, r = t; i < r.length; i++) {
			var o = r[i];
			if (e <= o.upperBound && e > o.lowerBound) {
				var n = Math.floor(e / o.increment + 1e-4) * o.increment;
				return mq.formatPriceBand(n);
			}
		}
		return e < t[0].lowerBound
			? void 0
			: e === t[0].lowerBound
				? mq.formatPriceBand(t[0].lowerBound)
				: mq.formatPriceBand(t[t.length - 1].upperBound);
	}),
	(mq.formatPriceBand = function(e) {
		return e.toFixed(2);
	}),
	(mq.roundToDecimal = function(e, t) {
		var i = parseFloat(e),
			r = Math.pow(10, t);
		return Math.round(i * r) / r;
	}),
	mq);
	function mq(e, t, i) {
		(this.lowerBound = e), (this.upperBound = t), (this.increment = i);
	}
	var InputParameters = ((Uq.prototype.addParameter = function(e, t) {
		this.paramParser[e.toLowerCase()] = t;
	}),
	(Uq.prototype.tryFillParameters = function(e) {
		for (var t in e)
			if (void 0 !== e[t]) {
				var i = t.toLowerCase();
				this.paramParser[i]
					? this.paramParser[i](e[t])
					: Log.Warning("Unknown parameter: " + t);
			}
	}),
	Uq);
	function Uq() {
		var t = this;
		(this.integrationMode = IntegrationMode.Unspecified),
			(this.paramParser = {}),
			this.addParameter("integrationMode", function(e) {
				t.integrationMode = parse(e);
			});
	}
	var __extends$10 = ((ar = function(e, t) {
			return (ar =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			ar(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		ar,
		RenderAdInputParameters = ((lr = InputParameters),
		__extends$10(mr, lr),
		mr),
		lr;
	function mr(e) {
		var t = lr.call(this) || this;
		return (
			(t.bidId = void 0),
			(t.document = window.document),
			(t.containerId = void 0),
			t.addParameter("bidId", function(e) {
				t.bidId = e;
			}),
			t.addParameter("document", function(e) {
				t.document = e;
			}),
			t.addParameter("containerId", function(e) {
				t.containerId = e;
			}),
			lr.prototype.tryFillParameters.call(t, e),
			t
		);
	}
	var DirectBiddingSlot = function(e, t, i, r, o, n, a, s) {
			(this.slotId = generateUuid().replace(/-/g, "")),
				(this.impId = e),
				(this.zoneId = t),
				(this.nativeCallback = i),
				(this.transactionId = r),
				(this.sizes = o),
				(this.publisherSubId = n),
				(this.mediaTypes = a),
				(this.video = s);
		},
		__extends$11 = ((Br = function(e, t) {
			return (Br =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			Br(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Br,
		PlacementInputParameters = ((Mr = InputParameters),
		__extends$11(Nr, Mr),
		Nr),
		Mr;
	function Nr(e) {
		var o = Mr.call(this) || this;
		return (
			(o.slotId = void 0),
			(o.zoneId = void 0),
			(o.sizes = []),
			(o.nativeCallback = void 0),
			(o.publisherSubId = void 0),
			o.addParameter("slotid", function(e) {
				o.slotId = e;
			}),
			o.addParameter("zoneid", function(e) {
				o.zoneId = e;
			}),
			o.addParameter("sizes", function(e) {
				for (var t = 0, i = e; t < i.length; t++) {
					var r = i[t].split("x");
					o.sizes.push(new Size(parseInt(r[0], 10), parseInt(r[1], 10)));
				}
			}),
			o.addParameter("nativecallback", function(e) {
				o.nativeCallback = e;
			}),
			o.addParameter("publisherSubId", function(e) {
				o.publisherSubId = e;
			}),
			Mr.prototype.tryFillParameters.call(o, e),
			o
		);
	}
	var __extends$12 = ((Zr = function(e, t) {
			return (Zr =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			Zr(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Zr,
		StandaloneInputParameters = ((is = InputParameters),
		__extends$12(js, is),
		(js.prototype.deserializePlacementInput = function(e) {
			for (var t = [], i = 0, r = e; i < r.length; i++) {
				var o = r[i],
					n = new PlacementInputParameters(o);
				t.push(
					new DirectBiddingSlot(
						n.slotId,
						n.zoneId,
						n.nativeCallback,
						void 0,
						n.sizes,
						n.publisherSubId
					)
				);
			}
			return t;
		}),
		js),
		is;
	function js(e) {
		var t = is.call(this) || this;
		return (
			(t.placements = void 0),
			(t.networkId = void 0),
			t.addParameter("networkId", function(e) {
				t.networkId = e;
			}),
			t.addParameter("placements", function(e) {
				t.placements = t.deserializePlacementInput(e);
			}),
			is.prototype.tryFillParameters.call(t, e),
			t
		);
	}
	var standaloneProfileId = 184,
		standaloneAdBlockProfileId = 275;
	function RequestBids(e, t, i) {
		RequestBidsWithProfileId(e, standaloneProfileId, t, i);
	}
	function DiscoverTagsAndRequestBids(t, i, r) {
		retrieveGoogleTagPlacements(function(e) {
			e.length <= 0
				? Log.Warning(
						"No Google tag placements have been retrieved, no bid will be requested."
				  )
				: RequestBidsWithProfileId(
						{ networkId: t, placements: e },
						standaloneProfileId,
						i,
						r
				  );
		});
	}
	function RequestBidsOnGoogleTagSlots(e, t, i) {
		if ("number" == typeof e) DiscoverTagsAndRequestBids(e, t, i);
		else {
			var r = getParam(e, "networkId", "number"),
				o = getParam(e, "placements", "object"),
				n = getParam(e, "callback", "function"),
				a = getParam(e, "timeout", "function");
			void 0 === o
				? DiscoverTagsAndRequestBids(r, n, a)
				: RequestBidsWithProfileId(
						{ networkId: r, placements: googleSlotsToDynamicSlots(o) },
						standaloneProfileId,
						n,
						a
				  );
		}
	}
	var metricBuilders = {},
		bidCaches = {},
		metricsManager = new DirectBiddingMetricsManager(standaloneProfileId);
	function RequestBidsWithProfileId(e, t, m, i) {
		var y = new StandaloneInputParameters(e);
		if (checkInputParameters(y)) {
			var r,
				o = window.criteo_pubtag.context,
				n = AdBlockFlagManager.create();
			if (n.adBlockFlagEnabled()) {
				(t = standaloneAdBlockProfileId), (o.isAdBlocked = !0);
				var a = DirectBiddingPlaceholder.tryInsertPlaceholders(y.placements);
				if (0 === a.length) return;
				y.placements = a;
				var s = m;
				(m = function(e) {
					void 0 !== s && s(e),
						e.forEach(function(e) {
							var t = DirectBiddingPlaceholder.insertAdIFrame(e.impressionId);
							null !== t && RenderAd(e.id, t.contentDocument);
						});
				}),
					(r = new ViewportComputer());
			}
			for (
				var d = function() {
						DirectBiddingPlaceholder.removePlaceholders(y.placements),
							new AdBlocker().isAdBlocked(function(e) {
								e ? n.enableAdBlockFlag() : n.disableAdBlockFlag();
							}),
							void 0 !== m && m([]);
					},
					c = new DirectBiddingEventWithCaching(
						t,
						new DirectBiddingUrlBuilder(!1),
						y.placements,
						function(e) {
							var a = [],
								t = tryParseJson(e);
							if (void 0 !== t && void 0 !== t.slots) {
								var s = {};
								if (t.invocation_codes)
									for (var i = 0, r = t.invocation_codes; i < r.length; i++)
										for (
											var o = r[i], n = 0, d = o.slot_ids;
											n < d.length;
											n++
										) {
											var c = d[n];
											s[c] = o.invocation_code;
										}
								for (
									var l = function(t) {
											for (
												var e = void 0, i = 0, r = y.placements;
												i < r.length;
												i++
											) {
												var o = r[i];
												if (o.nativeCallback && o.impId === t.impid) {
													e = o.nativeCallback;
													break;
												}
											}
											!e &&
												(t.slotid in s) &&
												(e = function(e) {
													executeFunction(s[t.slotid], [e]);
												});
											var n = GenerateBidResponseSlot(
												t.slotid,
												t.impid,
												t.cpm,
												t.width,
												t.height,
												t.zoneid,
												e,
												t.native,
												t.displayurl,
												t.creative,
												t.deal
											);
											void 0 !== n &&
												((window.criteo_pubtag.standaloneBidder.bids[n.id] = n),
												a.push(n.impressionId));
										},
										u = 0,
										p = t.slots;
									u < p.length;
									u++
								) {
									l(p[u]);
								}
								t.granularity && SetLineItemRanges(t.granularity);
							}
							if (
								(DirectBiddingPlaceholder.removePlaceholders(y.placements, a),
								void 0 !== m)
							) {
								for (var h = [], g = 0, f = y.placements; g < f.length; g++) {
									var v = f[g];
									h.push(v.impId);
								}
								m(GetBids({ impressionIds: h }));
							}
						},
						d,
						d,
						i || 3e3,
						y.networkId,
						y.integrationMode,
						void 0,
						r
					),
					l = [],
					u = 0,
					p = y.placements;
				u < p.length;
				u++
			) {
				var h = p[u];
				l.push(h.impId),
					(metricBuilders[h.slotId] = c.getMetricBuilder()),
					(bidCaches[h.slotId] = c.getBidCache());
			}
			(window.criteo_pubtag.standaloneBidder.impIds = l),
				window.criteo_pubtag.push(c);
		}
	}
	function SetLineItemRanges(e) {
		var t = LineItemRange.createLineItemRangesFromString(e);
		window.criteo_pubtag.standaloneBidder.lineItemRanges = t;
	}
	function markSetTargetingMetrics() {
		for (
			var e = metricsManager.getMetrics(!1), t = {}, i = 0;
			i < e.length;
			++i
		)
			for (var r = 0, o = e[i].slots; r < o.length; r++) {
				t[o[r].impressionId] = i;
			}
		for (var n in metricBuilders)
			if (metricBuilders.hasOwnProperty(n)) {
				var a = metricBuilders[n],
					s = TimeMeasurer.TimeSincePageLoad() - a.pageLoadElapsed;
				a.withSetTargetingElapsed(s), n in t && (e[t[n]] = a.build());
			}
		metricsManager.setMetrics(e);
	}
	function SetDFPKeyValueTargeting() {
		var e = new DFPKeyValueTargeter();
		e.resetKeyValuesForSlots(window.criteo_pubtag.standaloneBidder.impIds);
		var t = window.criteo_pubtag.standaloneBidder.lineItemRanges,
			i = GetImpressionIdToBestBid();
		for (var r in i)
			if (i.hasOwnProperty(r)) {
				var o = ComputeDFPTargeting(i[r], t);
				void 0 !== o && e.setKeyValuePerSlot(r, o);
			}
		markSetTargetingMetrics();
	}
	function ComputeStandaloneDFPTargeting(e, t) {
		return ComputeDFPTargeting(
			e,
			LineItemRange.createLineItemRangesFromString(t)
		);
	}
	function ComputeDFPTargeting(e, t) {
		var i = LineItemRange.computeLineItemPricebandValue(e.cpm, t);
		return void 0 === i ? void 0 : createDFPTargeting(i, e.id, e.dealCode);
	}
	function RenderAd(e, t) {
		var i = new RenderAdInputParameters(
			"string" == typeof e ? { bidId: e, document: t } : e
		);
		if (i.bidId) {
			var r =
				void 0 !== i.containerId
					? new BidEventContainerTarget(i.document, i.containerId)
					: new BidEventDocumentTarget(i.document);
			RenderAdOnTarget(i.bidId, r);
		} else Log.Error("You must provide a bidId to the RenderAd call");
	}
	function RenderAdOnTarget(e, t) {
		var i = window.criteo_pubtag.standaloneBidder.bids;
		if (i.hasOwnProperty(e)) {
			var r = i[e],
				o = r.GenerateEvent(t);
			window.criteo_pubtag.push(o),
				r.slotId in bidCaches && bidCaches[r.slotId].removeBid(r),
				delete i[e];
		} else Log.Error("Could not render bid with id: " + e);
	}
	function GetBids(e) {
		var t = window.criteo_pubtag.standaloneBidder.bids;
		if (null === t) return [];
		var i = window.criteo_pubtag.standaloneBidder.lineItemRanges,
			r = [];
		for (var o in t)
			if (t.hasOwnProperty(o)) {
				var n = t[o];
				if (
					!e ||
					!e.impressionIds ||
					-1 !== e.impressionIds.indexOf(n.impressionId)
				) {
					if (0 < i.length) {
						var a = LineItemRange.computeLineItemPricebandValue(n.cpm, i);
						n.cpm_bucket = a;
					}
					r.push(n);
				}
			}
		return r;
	}
	function GetBidsForAdUnit(e, t) {
		void 0 === t && (t = 1);
		var i = GetBids({ impressionIds: [e] });
		return i
			.sort(function(e, t) {
				return t.cpm - e.cpm;
			})
			.slice(0, Math.min(Math.max(t, 0), i.length));
	}
	function checkInputParameters(e) {
		if (void 0 === e.placements)
			return Log.Error("Missing 'placements' parameter"), !1;
		if (0 === e.placements.length)
			return Log.Error("'placements' parameter is empty"), !1;
		for (var t = 0, i = e.placements; t < i.length; t++) {
			var r = i[t];
			if (IsEmptyOrUndefined(r.impId))
				return Log.Error("Missing 'slotId' parameter in placements object"), !1;
			if (
				IsEmptyOrUndefined(r.zoneId) &&
				(IsEmptyOrUndefined(r.sizes) || IsEmptyOrUndefined(e.networkId))
			)
				return (
					Log.Error(
						"Missing zone information: specify either a zoneId or a networkId and a zone size"
					),
					!1
				);
			if (void 0 !== r.nativeCallback && "function" != typeof r.nativeCallback)
				return (
					Log.Error(
						"'nativeCallback' parameter is not a function in placements object"
					),
					!1
				);
		}
		return !0;
	}
	function GetImpressionIdToBestBid() {
		var e = {},
			t = window.criteo_pubtag.standaloneBidder.bids;
		for (var i in t)
			if (t.hasOwnProperty(i)) {
				var r = t[i];
				if (e.hasOwnProperty(r.impressionId))
					e[r.impressionId].cpm < r.cpm && (e[r.impressionId] = r);
				else e[r.impressionId] = r;
			}
		return e;
	}
	function IsEmptyOrUndefined(e) {
		return void 0 === e || e + "" == "";
	}
	function SetCeh(e) {
		window.criteo_pubtag.context.ceh = e;
	}
	function SetCCPAExplicitOptOut(e) {
		window.criteo_pubtag.context.ccpaOptout = e;
	}
	var AMP = ((Fu.Standalone = function(o, n, a) {
		RequestBids(
			{
				integrationmode: "amp",
				placements: [
					{ slotid: o.slot, zoneid: o.zone, sizes: [o.width + "x" + o.height] }
				]
			},
			function(e) {
				if ("DFP" === o.adserver) {
					Fu.listenForCreativeRequests(e);
					for (var t = 0, i = e; t < i.length; t++) {
						var r = ComputeStandaloneDFPTargeting(i[t], o.lineItemRanges);
						void 0 !== r && a(r);
					}
					0 === e.length && a({});
				}
				n(null);
			},
			o.timeout
		);
	}),
	(Fu.listenForCreativeRequests = function(s) {
		window.addEventListener(
			"message",
			function(e) {
				var t = e.data instanceof Object ? e.data : tryParseJson(e.data);
				if (t && t.bidId && e.source)
					for (var i = 0, r = s; i < r.length; i++) {
						var o = r[i];
						if (o.id === t.bidId) {
							var n = e.source,
								a = o.GenerateMessage();
							(a.message = "Criteo creative"),
								n.postMessage(JSON.stringify(a), "*");
						}
					}
			},
			!1
		);
	}),
	Fu);
	function Fu() {}
	function GetIdfs() {
		return window.criteo_pubtag.context.getIdfs();
	}
	function SetIdfs(e) {
		window.criteo_pubtag.context.setIdfs(e);
	}
	function SetCeh$1(e) {
		window.criteo_pubtag.context.ceh = e;
	}
	var DirectBiddingSlotVideo = function(e, t, i, r, o, n, a, s, d, c) {
			(this.playersize = e),
				(this.mimes = t),
				(this.protocols = i),
				(this.maxduration = r),
				(this.api = o),
				(this.skip = n),
				(this.placement = a),
				(this.playbackmethod = s),
				(this.minduration = d),
				(this.startdelay = c);
		},
		PREBID_ADBLOCK_PROFILE_ID = 280,
		PREBID_MAX_TIMEOUT = 5e3,
		PrebidMediaTypes,
		iv;
	(iv = PrebidMediaTypes = PrebidMediaTypes || {}),
		(iv.Native = "native"),
		(iv.Banner = "banner"),
		(iv.Video = "video");
	var Prebid = ((jv.prototype.setEnableSendAllBids = function(e) {
		this.enableSendAllBids = e;
	}),
	(jv.prototype.buildCdbUrl = function() {
		return this.url;
	}),
	(jv.prototype.buildCdbRequest = function() {
		if (this.cache.silentModeEnabled())
			return (
				Log.Debug("Request ignored because the global silent mode is enabled"),
				void this.metricsManager.incSilentModeRequestCount()
			);
		if (this.requestBuilder.isValid()) {
			var e = Math.min(
				(this.timeout || PREBID_MAX_TIMEOUT) + 1e3,
				PREBID_MAX_TIMEOUT
			);
			return (
				this.adBlockFlagManager.setAdBlockFlagTimer(e),
				this.timer.sendRequest(this.url),
				this.requestBuilder.getRequest()
			);
		}
		Log.Debug("Request ignored because it doesnt contain any slot");
	}),
	(jv.GetAllAdapters = function() {
		return window.Criteo.prebid_adapters;
	}),
	(jv.GetAdapter = function(e) {
		var t = "string" == typeof e ? e : e.bidRequests[0].auctionId,
			i = jv.GetAllAdapters();
		if (i && t in i) return i[t];
	}),
	(jv.createCriteoNativeAdWithCallback = function(e, t, i) {
		return (
			(window.criteo_prebid_native_slots =
				window.criteo_prebid_native_slots || {}),
			(window.criteo_prebid_native_slots[e] = { callback: i, payload: t }),
			'<script type="text/javascript">\n            var win = window;\n            for (var i = 0; i < 10; ++i) {\n                win = win.parent;\n                if (win.criteo_prebid_native_slots) {\n                    var responseSlot = win.criteo_prebid_native_slots["' +
				e +
				'"];\n                    responseSlot.callback(responseSlot.payload);\n                    break;\n                }\n            }\n        </script>'
		);
	}),
	(jv.createPrebidNativeAd = function(e) {
		return {
			title: e.products[0].title,
			body: e.products[0].description,
			sponsoredBy: e.advertiser.description,
			icon: e.advertiser.logo,
			image: e.products[0].image,
			clickUrl: e.products[0].click_url,
			privacyLink: e.privacy.optout_click_url,
			privacyIcon: e.privacy.optout_image_url,
			cta: e.products[0].call_to_action,
			price: e.products[0].price,
			impressionTrackers: e.impression_pixels.map(function(e) {
				return e.url;
			})
		};
	}),
	(jv.prototype.getBidRequestForSlot = function(e) {
		for (var t = 0, i = this.bidRequests; t < i.length; t++) {
			var r = i[t];
			if (
				r.adUnitCode === e.impid &&
				(!r.params.zoneId || parseInt(r.params.zoneId, 10) === e.zoneid)
			)
				return r;
		}
	}),
	(jv.getVideoInfoFromBidRequest = function(e) {
		if (jv.hasVideoMediaType(e))
			return new DirectBiddingSlotVideo(
				e.mediaTypes.video.playerSize,
				e.mediaTypes.video.mimes,
				e.mediaTypes.video.protocols,
				e.mediaTypes.video.maxduration,
				e.mediaTypes.video.api,
				e.params.video.skip,
				e.params.video.placement,
				e.params.video.playbackmethod,
				e.params.video.minduration,
				e.params.video.startdelay
			);
	}),
	(jv.hasVideoMediaType = function(e) {
		return (
			void 0 !== e.params &&
			void 0 !== e.params.video &&
			!(void 0 === e.mediaTypes || void 0 === e.mediaTypes.video)
		);
	}),
	(jv.prototype.interpretResponse = function(e, t) {
		this.timer.requestReceived(),
			this.adBlockFlagManager.disableAdBlockFlagTimer();
		var i = extractExtraData(e),
			r = {};
		if (void 0 !== i.slots)
			for (var o = 0, n = i.slots; o < n.length; o++) r[(c = n[o]).imp_id] = c;
		var a = [];
		if (e.slots && Array.isArray(e.slots))
			for (var s = 0, d = e.slots; s < d.length; s++) {
				var c = d[s],
					l = this.getBidRequestForSlot(c);
				if (l)
					if (!0 === window.criteo_pubtag.context.isAdBlocked) {
						if (
							void 0 !==
								(f = GenerateBidResponseSlot(
									c.slotid,
									c.impid,
									c.cpm,
									c.width,
									c.height,
									c.zoneid,
									l.params.nativeCallback,
									c.native,
									c.displayurl,
									c.creative,
									c.deal
								)) &&
							DirectBiddingPlaceholder.tryInsertPlaceholder(l.adUnitCode)
						) {
							var u = DirectBiddingPlaceholder.insertAdIFrame(l.adUnitCode);
							if (null != u) {
								var p = new BidEventDocumentTarget(u.contentDocument);
								f.GenerateEvent(p).eval(window.criteo_pubtag);
							}
						}
					} else {
						var h = l.bidId,
							g = c.ttl || (r[c.slotid] && r[c.slotid].ttl) || 60,
							f = {
								requestId: h,
								adId: generateUuid(),
								cpm: c.cpm,
								currency: c.currency,
								netRevenue: !0,
								ttl: g,
								creativeId: h,
								width: c.width,
								height: c.height,
								dealId: c.deal
							};
						if (c.native)
							if (l.params.nativeCallback)
								f.ad = jv.createCriteoNativeAdWithCallback(
									h,
									c.native,
									l.params.nativeCallback
								);
							else {
								if (this.enableSendAllBids) {
									Log.Error("Not supporting non mediation mode");
									continue;
								}
								(f.native = jv.createPrebidNativeAd(c.native)),
									(f.mediaType = PrebidMediaTypes.Native);
							}
						else
							c.video
								? ((f.vastUrl = c.displayurl),
								  (f.mediaType = PrebidMediaTypes.Video))
								: (f.ad = c.creative);
						a.push(f);
					}
				else Log.Error("Unable to bid request for slot " + c);
			}
		return (
			this.cache.handleResponse(this.slots, e, i, !1),
			this.metricsManager.storeMetric(this.timer.finish(e.sid, i.slots)),
			this.cache.clearExpiredItems(),
			a
		);
	}),
	(jv.prototype.handleBidWon = function(e) {
		this.updateMetric(e, function(e) {
			e.adapterBidWon = !0;
		});
	}),
	(jv.prototype.handleBidTimeout = function() {
		this.timer.requestReceived(!0),
			this.metricsManager.storeMetric(this.timer.finish()),
			this.cache.clearExpiredItems();
	}),
	(jv.prototype.handleSetTargeting = function(e) {
		var t = this;
		this.timer.setTargeting(),
			this.updateMetric(e, function() {
				return t.timer.build();
			});
	}),
	(jv.prototype.updateMetric = function(e, t) {
		for (var i = this.metricsManager.getMetrics(!1), r = 0; r < i.length; ++r)
			for (var o = 0, n = i[r].slots; o < n.length; o++) {
				var a = n[o];
				if (a.adUnitId === e.adUnitCode) {
					var s = t(a);
					s && (i[r] = s);
				}
			}
		this.metricsManager.setMetrics(i);
	}),
	jv);
	function jv(e, t, i, r, o) {
		var n, a, s;
		(this.enableSendAllBids = !0),
			(this.timeout = resolvePrebidTimeout(r.timeout)),
			(this.metricsManager = new DirectBiddingMetricsManager(e, t, o)),
			(this.metricBuilder = new DirectBiddingMetricBuilder(
				this.metricsManager
			)),
			(this.timer = new DirectBiddingTimer(
				this.metricBuilder,
				r.auctionStart,
				this.timeout
			)),
			(this.adBlockFlagManager = AdBlockFlagManager.create()),
			this.adBlockFlagManager.adBlockFlagEnabled() &&
				((e = PREBID_ADBLOCK_PROFILE_ID),
				(window.criteo_pubtag.context.isAdBlocked = !0),
				(n = new ViewportComputer())),
			(this.auctionId = r.auctionId),
			(this.bidRequests = i),
			(this.slots = []);
		for (var d = 0, c = i; d < c.length; d++) {
			var l = c[d];
			this.slots.push(
				new DirectBiddingSlot(
					l.adUnitCode,
					l.params.zoneId,
					l.params.nativeCallback,
					l.transactionId,
					l.sizes.map(function(e) {
						return new Size(e[0], e[1]);
					}),
					l.params.publisherSubId,
					l.mediaTypes,
					jv.getVideoInfoFromBidRequest(l)
				)
			),
				(a = l.params.networkId || a),
				SetCeh$1(r.ceh),
				l.params.integrationMode && (s = parse(l.params.integrationMode));
		}
		var u = {};
		r.gdprConsent &&
			(void 0 !== r.gdprConsent.consentString &&
				(u.consentData = r.gdprConsent.consentString),
			void 0 !== r.gdprConsent.gdprApplies &&
				(u.gdprApplies = !!r.gdprConsent.gdprApplies),
			r.gdprConsent.vendorData &&
				r.gdprConsent.vendorData.vendorConsents &&
				void 0 !==
					r.gdprConsent.vendorData.vendorConsents[
						CRITEO_VENDOR_ID.toString(10)
					] &&
				(u.consentGiven = !!r.gdprConsent.vendorData.vendorConsents[
					CRITEO_VENDOR_ID.toString(10)
				]));
		var p = { uspString: r.uspConsent };
		(this.cache = new DirectBiddingCache(
			window.criteo_pubtag.context,
			this.slots,
			a
		)),
			(this.requestBuilder = new DirectBiddingRequestBuilder(
				this.cache.filterNoBidSlots(this.slots),
				window.criteo_pubtag.context,
				this.metricsManager,
				new DirectBiddingUrlBuilder(!1),
				e,
				s,
				a,
				t,
				{ ccpaIabConsent: p, gdprConsent: u },
				o,
				n
			)),
			(this.url = this.requestBuilder.getUrl()),
			(window.Criteo.prebid_adapters = window.Criteo.prebid_adapters || {}),
			(window.Criteo.prebid_adapters[this.auctionId] = this);
	}
	var __extends$13 = ((pw = function(e, t) {
			return (pw =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			pw(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		pw,
		ConditionalEvent = ((Aw = AbstractEvent),
		__extends$13(Bw, Aw),
		(Bw.prototype.canEval = function() {
			return (
				void 0 === this.conditionRequirement ||
				this.conditionRequirement.apply(this)
			);
		}),
		(Bw.prototype.eval = function(e) {
			this.condition.apply(this)
				? this.eventIfTrue.eval(e)
				: this.eventIfFalse.eval(e);
		}),
		(Bw.NAME = "conditionalEvent"),
		Bw),
		Aw,
		AdFormatType,
		Iw;
	function Bw(e, t, i, r) {
		var o = Aw.call(this, Bw.NAME) || this;
		return (
			(o.condition = e),
			(o.eventIfTrue = t),
			(o.eventIfFalse = i),
			(o.conditionRequirement = r),
			o
		);
	}
	(Iw = AdFormatType = AdFormatType || {}),
		(Iw[(Iw.Classic = 0)] = "Classic"),
		(Iw[(Iw.StickyFooter = 1)] = "StickyFooter"),
		(Iw[(Iw.ScrollingBanner = 2)] = "ScrollingBanner");
	var CookieHelper = ((Jw.SetCookie = function(e, t, i, r, o) {
		void 0 === o && (o = !1);
		var n = r || document,
			a = n.location.hostname,
			s = new Date();
		s.setTime(s.getTime() + 60 * i * 60 * 1e3);
		var d = "expires=" + s.toUTCString();
		if (!o) return Jw.setCookieString(e, t, d, void 0, n), a;
		for (var c = a.split("."), l = 0; l < c.length; ++l) {
			var u = c.slice(c.length - l - 1, c.length).join(".");
			Jw.setCookieString(e, t, d, u, n);
			var p = Jw.GetCookie(e, r);
			if (p && p === t) return u;
		}
		return a;
	}),
	(Jw.DeleteCookie = function(e, t, i) {
		void 0 === i && (i = !1), Jw.SetCookie(e, "", 0, t, i);
	}),
	(Jw.GetCookie = function(e, t) {
		for (var i = 0, r = (t || document).cookie.split(";"); i < r.length; i++) {
			var o = r[i],
				n = o.substr(0, o.indexOf("=")).replace(/^\s+|\s+$/g, ""),
				a = o.substr(o.indexOf("=") + 1);
			if (n === e) return decodeURIComponent(a);
		}
	}),
	(Jw.setCookieString = function(e, t, i, r, o) {
		var n = e + "=" + encodeURIComponent(t) + ";" + i + ";";
		r && "" !== r && (n += "domain=." + r + ";"), (o.cookie = n + "path=/");
	}),
	Jw);
	function Jw() {}
	var AdvancedAdFormats = ((nx.prototype.CreateAdvancedAdFormatContainer = function(
			e
		) {
			return this.adFormat === AdFormatType.StickyFooter
				? this.CreateStickyFooterContainer(e)
				: this.adFormat === AdFormatType.ScrollingBanner
					? this.CreateScrollingBannerContainer(e)
					: void 0;
		}),
		(nx.prototype.IsUserOptout = function() {
			return (
				this.adFormat === AdFormatType.StickyFooter &&
				"true" === CookieHelper.GetCookie("cto_sticky_closed")
			);
		}),
		(nx.prototype.CreateStickyFooterContainer = function(e) {
			var t = document.createElement("div");
			(t.style.position = "fixed"),
				(t.style.zIndex = "2147483646"),
				(t.style.bottom = "0"),
				(t.style.left = "0"),
				(t.style.padding = "0"),
				(t.style.borderColor = "rgb(196, 196, 196)"),
				(t.style.width = "100%"),
				(t.style.backgroundColor = "rgba(245, 245, 245, 0.54902)"),
				(t.style.borderStyle = "solid"),
				(t.style.borderWidth = "1px");
			var i = document.createElement("a");
			t.appendChild(i),
				(i.style.backgroundColor = "rgb(221, 221, 221)"),
				(i.style.backgroundImage =
					"url('//static.criteo.net/images/criteo/publishertag/close.png')"),
				(i.style.backgroundRepeat = "no-repeat"),
				(i.style.backgroundPosition = "center"),
				(i.style.display = "block"),
				(i.style.position = "absolute"),
				(i.style.left = "0"),
				(i.style.top = "-24px"),
				(i.style.width = "23px"),
				(i.style.height = "24px"),
				(i.style.borderBottomColor = "#6d6c71"),
				(i.style.cursor = "pointer"),
				(i.onclick = function() {
					(t.style.display = "none"),
						CookieHelper.SetCookie("cto_sticky_closed", "true", 24);
				});
			var r = document.createElement("div");
			if (
				(t.appendChild(r),
				(r.id = "cto_sticky"),
				(r.style.margin = "0 auto"),
				(r.style.display = "table"),
				void 0 === e || "" === e)
			)
				document.body.appendChild(t);
			else {
				var o = document.getElementById(e);
				o
					? o.appendChild(t)
					: Log.Error('Target element "' + e + '" not found in the document');
			}
			return r.id;
		}),
		(nx.prototype.CreateScrollingBannerContainer = function(e) {
			var t,
				i = this;
			if (void 0 === e || "" === e)
				((t = document.createElement("div")).id = "cto_scrolling"),
					document.body.appendChild(t);
			else {
				var r = document.getElementById(e);
				if (!r)
					return (
						Log.Error('Target element "' + e + '" not found in the document'), e
					);
				t = r;
			}
			var o = t.offsetTop;
			return (
				window.addEventListener
					? window.addEventListener(
							"scroll",
							function() {
								i.SetScrollingContainerPosition(t, o);
							},
							!1
					  )
					: window.attachEvent("onscroll", function() {
							i.SetScrollingContainerPosition(t, o);
					  }),
				this.SetScrollingContainerPosition(t, o),
				t.id
			);
		}),
		(nx.prototype.SetScrollingContainerPosition = function(e, t) {
			t - 10 <=
			(window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop ||
				0)
				? ((e.style.position = "fixed"), (e.style.top = "10px"))
				: ((e.style.position = "static"), (e.style.top = "auto"));
		}),
		nx),
		DisplayContext,
		Dx;
	function nx(e) {
		this.adFormat = e;
	}
	(Dx = DisplayContext = DisplayContext || {}),
		(Dx[(Dx.InFriendlyIframe = 1)] = "InFriendlyIframe"),
		(Dx[(Dx.InUnfriendlyIframe = 2)] = "InUnfriendlyIframe"),
		(Dx[(Dx.DirectIntegration = 3)] = "DirectIntegration");
	var DocumentHelper = ((Ex.tryWrite = function(e) {
		for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
		return "loading" === e.readyState && (e.write.apply(e, t), !0);
	}),
	Ex);
	function Ex() {}
	var ViewabilityComputer = ((Ix.GetAtfRatio = function(e, t) {
		var i = document.getElementById(t);
		if (e.displayContext === DisplayContext.DirectIntegration) {
			if (null !== i) return Ix.GetRatioAboveFold(i);
			if (
				DocumentHelper.tryWrite(
					document,
					"<div id='compute_visibility_helper' width='0px' height='0px'></div>"
				)
			) {
				var r = document.getElementById("compute_visibility_helper"),
					o = Ix.GetRatioAboveFold(r);
				return r.parentElement.removeChild(r), o;
			}
		}
		if (e.displayContext === DisplayContext.InFriendlyIframe)
			return Ix.GetRatioAboveFold(frameElement);
	}),
	(Ix.GetRatioAboveFold = function(e) {
		var t = new ViewportComputer().getViewport(),
			i = t.height,
			r = e.getBoundingClientRect(),
			o = t.scrollTop;
		return i >= r.bottom + o
			? 1
			: i <= r.top + o
				? 0
				: (i - r.top - o) / e.offsetHeight;
	}),
	Ix);
	function Ix() {}
	var __extends$14 = ((Ux = function(e, t) {
			return (Ux =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			Ux(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Ux,
		DisplayEvent = ((dy = AbstractEvent),
		__extends$14(ey, dy),
		(ey.prototype.eval = function(e) {
			this.displayParameters.atfRatio = ViewabilityComputer.GetAtfRatio(
				e.context,
				this.displayParameters.containerid
			);
		}),
		(ey.prototype.buildCasUrl = function(t, i, r, o, n) {
			var a = this,
				e = this.gdprCompatiblePrivacyProvider.readyToRetrieve(),
				s = this.ccpaPrivacyProvider.readyToRetrieve();
			if (e || s) {
				var d,
					c,
					l = [];
				e && l.push(GDPRPrivacyProvider),
					s && l.push(CCPAPrivacyProvider),
					e &&
						this.gdprCompatiblePrivacyProvider.retrieveConsentForPassback(
							function(e) {
								l.splice(l.indexOf("GDPR"), 1),
									0 === l.length
										? t(
												a.urlBuilder.buildUrl(
													a.displayParameters,
													i,
													r,
													o,
													n,
													e,
													c
												)
										  )
										: (d = e);
							}
						),
					s &&
						this.ccpaPrivacyProvider.retrieveConsent(function(e) {
							l.splice(l.indexOf("CCPA"), 1),
								0 === l.length
									? t(
											a.urlBuilder.buildUrl(
												a.displayParameters,
												i,
												r,
												o,
												n,
												d,
												e
											)
									  )
									: (c = e);
						});
			} else t(this.urlBuilder.buildUrl(this.displayParameters, i, r, o, n));
		}),
		ey),
		dy,
		HandlerType,
		zy;
	function ey(e, t, i, r, o) {
		var n = dy.call(this, e) || this;
		return (
			(n.displayParameters = i),
			(n.urlBuilder = t),
			(n.gdprCompatiblePrivacyProvider =
				null != r
					? r
					: new GDPRCompatiblePrivacyProvider(
							new GDPRPrivacyProvider(window),
							new TCFv2PrivacyProvider(window)
					  )),
			(n.ccpaPrivacyProvider = null != o ? o : new CCPAPrivacyProvider(window)),
			n
		);
	}
	(zy = HandlerType = HandlerType || {}),
		(zy[(zy.AFR = 0)] = "AFR"),
		(zy[(zy.AJS = 1)] = "AJS");
	var __extends$15 = ((Ay = function(e, t) {
			return (Ay =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			Ay(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Ay,
		DisplayEventAFR = ((Ly = DisplayEvent),
		__extends$15(My, Ly),
		(My.prototype.eval = function(t) {
			var i = this;
			Ly.prototype.eval.call(this, t);
			var r = this.displayParameters.containerid,
				o = this.displayParameters.callbackSuccess,
				n = this.displayParameters.callbackError;
			this.buildCasUrl(
				function(e) {
					if (t.context.isAdBlocked) {
						if (!i.respectsEyeoDeal) return;
						i.loadIframe(e, r, o, n);
					} else i.loadIframe(e, r, o, n);
				},
				t.context,
				HandlerType.AFR
			);
		}),
		(My.prototype.loadIframe = function(e, t, i, r) {
			var o = document.createElement("iframe");
			(o.src = e),
				(o.id = t + "_cto_iframe"),
				(o.frameBorder = "0"),
				o.setAttribute("hspace", "0"),
				o.setAttribute("vspace", "0"),
				(o.marginWidth = "0px"),
				(o.marginHeight = "0px"),
				(o.width = "100%"),
				(o.height = "100%"),
				(o.scrolling = "no"),
				i && (o.onload = i),
				r && (o.onerror = r);
			var n = document.getElementById(t);
			n
				? n.appendChild(o)
				: Log.Error('Target element "' + t + '" not found in the document');
		}),
		(My.NAME = "displayAfr"),
		My),
		Ly;
	function My(e, t, i) {
		var r = Ly.call(this, My.NAME, e, t) || this;
		return (r.respectsEyeoDeal = i), r;
	}
	var __extends$16 = ((bz = function(e, t) {
			return (bz =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			bz(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		bz,
		DisplayEventAsync = (function(_super) {
			function DisplayEventAsync(e, t) {
				return _super.call(this, DisplayEventAsync.NAME, e, t) || this;
			}
			return (
				__extends$16(DisplayEventAsync, _super),
				(DisplayEventAsync.prototype.eval = function(t) {
					var i = this;
					_super.prototype.eval.call(this, t);
					var r = this.displayParameters.containerid,
						o = this.displayParameters.width,
						n = this.displayParameters.height,
						e = this.displayParameters.layout,
						a = this.displayParameters.callbackSuccess,
						s = this.displayParameters.callbackError,
						d = this.displayParameters.passbackCode;
					if ("" === r || void 0 === r) Log.Error("No containerid provided");
					else if (void 0 !== e) {
						var c =
								DisplayEventAsync.CHAPI_NAME +
								"=" +
								encodeURIComponent(JSON.stringify(e)),
							l = function() {
								var e = i.getContainerSize(r, o, n);
								i.buildCasUrl(
									function(e) {
										i.loadScriptAsync(e, c, a, s, d);
									},
									t.context,
									void 0,
									e.width,
									e.height
								);
							};
						void 0 !== o && void 0 !== n
							? l()
							: window.addEventListener
								? window.addEventListener("load", l, !1)
								: window.attachEvent("onload", l);
					} else
						this.buildCasUrl(function(e) {
							i.loadScriptAsync(e, void 0, a, s, d);
						}, t.context);
				}),
				(DisplayEventAsync.prototype.loadScriptAsync = function(
					url,
					data,
					callBackSuccess,
					callbackFail,
					passbackCode
				) {
					var request = new AsyncRequest(url, data);
					request.send(
						function(responseText) {
							var pb = passbackCode || function() {};
							eval(responseText),
								void 0 !== callBackSuccess && callBackSuccess(responseText);
						},
						function(e, t) {
							void 0 !== passbackCode && passbackCode(),
								void 0 !== callbackFail && callbackFail(e, t);
						},
						passbackCode
					);
				}),
				(DisplayEventAsync.prototype.getContainerSize = function(e, t, i) {
					var r = document.getElementById(e),
						o = DomManipulationTools.inIframe(),
						n = t || (o ? document.body.offsetWidth : r ? r.offsetWidth : 0),
						a = i || (o ? document.body.offsetHeight : r ? r.offsetHeight : 0);
					return (
						(0 === n || 0 === a || n < 80 || a < 40) && (n = a = void 0),
						{ width: n, height: a }
					);
				}),
				(DisplayEventAsync.NAME = "displayEventAsync"),
				(DisplayEventAsync.CHAPI_NAME = "publisherCreativeConfiguration"),
				DisplayEventAsync
			);
		})(DisplayEvent),
		__extends$17 = ((Lz = function(e, t) {
			return (Lz =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			Lz(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Lz,
		DisplayEventSync = ((Wz = DisplayEvent),
		__extends$17(Xz, Wz),
		(Xz.prototype.eval = function(e) {
			var t = this;
			Wz.prototype.eval.call(this, e),
				this.buildCasUrl(function(e) {
					t.loadScriptSync(e);
				}, e.context);
		}),
		(Xz.prototype.loadScriptSync = function(e) {
			document.write(
				"<script type='text/javascript' src='" + e + "'></script>"
			);
		}),
		(Xz.NAME = "displaySync"),
		Xz),
		Wz;
	function Xz(e, t, i, r) {
		return Wz.call(this, Xz.NAME, e, t, i, r) || this;
	}
	var __extends$18 = ((eA = function(e, t) {
			return (eA =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(e, t) {
						e.__proto__ = t;
					}) ||
				function(e, t) {
					for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
				})(e, t);
		}),
		function(e, t) {
			function i() {
				this.constructor = e;
			}
			eA(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		eA,
		DisplayInputParameters = ((pA = InputParameters),
		__extends$18(qA, pA),
		(qA.prototype.parseAdFormat = function(e) {
			switch (e.toLowerCase()) {
				case "stickyfooter":
					return AdFormatType.StickyFooter;
				case "scrollingbanner":
					return AdFormatType.ScrollingBanner;
				default:
					return AdFormatType.Classic;
			}
		}),
		qA),
		pA;
	function qA(e) {
		var t = pA.call(this) || this;
		return (
			(t.zoneid = void 0),
			(t.async = void 0),
			(t.containerid = void 0),
			(t.width = void 0),
			(t.height = void 0),
			(t.callbackSuccess = void 0),
			(t.callbackError = void 0),
			(t.callIfNotAdblocked = void 0),
			(t.passbackCode = void 0),
			(t.publisherUrl = void 0),
			(t.overridenWpdt0 = void 0),
			(t.overridenCt0 = void 0),
			(t.layout = void 0),
			(t.atfRatio = void 0),
			(t.adFormat = AdFormatType.Classic),
			(t.overrideZoneFloor = !0),
			(t.collapseContainerIfNotAdblocked = !0),
			(t.extraData = {}),
			t.addParameter("zoneId", function(e) {
				t.zoneid = e;
			}),
			t.addParameter("async", function(e) {
				t.async = !0 === e;
			}),
			t.addParameter("containerId", function(e) {
				t.containerid = e;
			}),
			t.addParameter("width", function(e) {
				t.width = e;
			}),
			t.addParameter("height", function(e) {
				t.height = e;
			}),
			t.addParameter("callbackSuccess", function(e) {
				t.callbackSuccess = e;
			}),
			t.addParameter("callbackError", function(e) {
				t.callbackError = e;
			}),
			t.addParameter("callIfNotAdblocked", function(e) {
				t.callIfNotAdblocked = e;
			}),
			t.addParameter("passbackCode", function(e) {
				t.passbackCode = e;
			}),
			t.addParameter("layout", function(e) {
				t.layout = e;
			}),
			t.addParameter("publisherCreativeConfiguration", function(e) {
				t.layout = e;
			}),
			t.addParameter("extraData", function(e) {
				t.extraData = e;
			}),
			t.addParameter("publisherUrl", function(e) {
				t.publisherUrl = e;
			}),
			t.addParameter("wpdt0", function(e) {
				t.overridenWpdt0 = e;
			}),
			t.addParameter("ct0", function(e) {
				t.overridenCt0 = e;
			}),
			t.addParameter("overrideZoneFloor", function(e) {
				t.overrideZoneFloor = e;
			}),
			t.addParameter("collapseContainerIfNotAdblocked", function(e) {
				t.collapseContainerIfNotAdblocked = e;
			}),
			t.addParameter("adFormat", function(e) {
				t.adFormat = t.parseAdFormat(e);
			}),
			pA.prototype.tryFillParameters.call(t, e),
			t
		);
	}
	var DisplayUrlBuilder = ((MA.prototype.buildUrl = function(
		e,
		t,
		i,
		r,
		o,
		n,
		a
	) {
		var s =
			(i === HandlerType.AFR ? MA.CAS_URL_AFR : MA.CAS_URL_AJS) +
			"?ptv=" +
			PublisherTagVersion;
		if (!0 === t.isAdBlocked) {
			var d = this.getAbpParameter(e, t);
			s += "&abp=" + String(d);
		}
		for (var c in (i !== HandlerType.AFR &&
			(s +=
				void 0 !== e.containerid && "" !== e.containerid
					? "&containerid=" + encodeURIComponent(e.containerid)
					: ""),
		(s += "&zoneid=" + String(e.zoneid)),
		(s += r ? "&width=" + r : ""),
		(s += o ? "&height=" + o : ""),
		(s += t.ctoIdOnPublisherDomain ? "&idcpy=" + t.ctoIdOnPublisherDomain : ""),
		(s += t.idfs ? "&idfs=" + t.idfs : ""),
		(s += t.secureId ? "&sid=" + t.secureId : ""),
		(s += t.isOptOut ? "&optout=1" : ""),
		(s += t.bundle ? "&bundle=" + t.bundle : ""),
		(s += "&cb=" + String(CacheBusterGenerator.generateCacheBuster())),
		(s += "&nodis=" + (t.dising ? "0" : "1")),
		(s += t.charset ? "&charset=" + t.charset : ""),
		(s += e.overridenCt0
			? "&ct0=" + encodeURIComponent(e.overridenCt0)
			: t.ct0
				? "&ct0=" + encodeURIComponent(t.ct0)
				: ""),
		(s += e.overridenWpdt0
			? "&wpdt0=" + encodeURIComponent(e.overridenWpdt0)
			: t.wpdt0
				? "&wpdt0=" + encodeURIComponent(t.wpdt0)
				: ""),
		e.publisherUrl &&
			(s += "&publisherurl=" + encodeURIComponent(e.publisherUrl)),
		(s += t.getContextFlags()),
		e.extraData))
			void 0 !== e.extraData[c] &&
				(s += "&" + c + "=" + encodeURIComponent(e.extraData[c]));
		return (
			(s += e.passbackCode ? "&dlp=1" : ""),
			e.integrationMode !== IntegrationMode.Unspecified &&
				(s += "&im=" + e.integrationMode),
			(s += "&dc=" + t.displayContext),
			void 0 !== e.atfRatio &&
				(s += "&atfr=" + Math.round(100 * e.atfRatio) / 100),
			(s += t.highestAccessibleUrl
				? "&loc=" +
				  encodeURIComponent(t.highestAccessibleUrl).substring(0, 1600)
				: ""),
			n &&
				(void 0 !== n.consentGiven &&
					(s += "&gdprGvn=" + (n.consentGiven ? "1" : "0")),
				void 0 !== n.gdprApplies &&
					(s += "&gdprApp=" + (n.gdprApplies ? "1" : "0")),
				void 0 !== n.consentData &&
					(s += n.consentData ? "&gdprDta=" + n.consentData : ""),
				void 0 !== n.version &&
					(s += n.version ? "&gdprVer=" + n.version : "")),
			a && void 0 !== a.uspString && (s += "&uspIab=" + a.uspString),
			t.ccpaOptout && (s += "&uspOptout=" + t.ccpaOptout),
			s
		);
	}),
	(MA.prototype.getAbpParameter = function(e, t) {
		return (t.isAdBlocked ? 1 : 0) | (e.overrideZoneFloor ? 0 : 2);
	}),
	(MA.CAS_URL_AJS = "https://cas.criteo.com/delivery/ajs.php"),
	(MA.CAS_URL_AFR = "https://cas.criteo.com/delivery/afr.php"),
	MA);
	function MA() {}
	var EyeoDealValidator = ((bB.prototype.respectsEyeoDeal = function(e) {
		var t = document.getElementById(e);
		if (!this.respectsSizeConstraints(t))
			return (
				Log.Debug(
					"The element " +
						e +
						"does not respect Eyeo acceptable ads size constraints"
				),
				!1
			);
		var i = this.getNewRatiosFeatures(t),
			r = i.respectsAdRatioConstraint;
		return (
			r
				? ((bB.atfRatio = i.newAtfRatio), (bB.btfRatio = i.newBtfRatio))
				: Log.Debug(
						"The element " +
							e +
							"does not respect Eyeo acceptable ads ratio constraints"
				  ),
			r
		);
	}),
	(bB.prototype.respectsSizeConstraints = function(e) {
		var t = this.getAdLocationAttribute(e);
		switch (t) {
			case "above-content":
				return e.offsetHeight <= 200;
			case "in-content":
				return !1;
			case "below-content":
				return e.offsetHeight <= 400;
			case "side-content":
				return e.offsetWidth <= 350;
			default:
				return (
					void 0 !== t && Log.Error("Unknown data-ad-loc attribute : " + t), !0
				);
		}
	}),
	(bB.prototype.getAdLocationAttribute = function(e) {
		return e.getAttribute("data-ad-loc") || void 0;
	}),
	(bB.prototype.getNewRatiosFeatures = function(e) {
		var t = ViewabilityComputer.GetRatioAboveFold(e),
			i = e.offsetHeight * e.offsetWidth,
			r = screen.width * screen.height,
			o = bB.atfRatio + (t * i) / r,
			n = bB.btfRatio + ((1 - t) * i) / r;
		return {
			respectsAdRatioConstraint: o <= 0.15 && n <= 0.25,
			newAtfRatio: o,
			newBtfRatio: n
		};
	}),
	(bB.atfRatio = 0),
	(bB.btfRatio = 0),
	bB);
	function bB() {}
	function DisplayAd(e) {
		var t = new DisplayInputParameters(e);
		if (((t.async = !1 !== t.async), void 0 !== t.zoneid))
			if (void 0 === t.layout || !1 !== t.async)
				if (
					!0 !== t.async ||
					(void 0 !== t.containerid && "" !== t.containerid)
				) {
					if (
						(!1 === t.async &&
							void 0 !== t.passbackCode &&
							(Log.Error(
								"Criteo.DisplayAd does not support synchronous local passback"
							),
							(t.passbackCode = void 0)),
						t.adFormat !== AdFormatType.Classic)
					) {
						var i = new AdvancedAdFormats(t.adFormat);
						if (i.IsUserOptout())
							return void Log.Debug(
								"The user has opted-out for 1 day when closing the sticky footer."
							);
						t.containerid = i.CreateAdvancedAdFormatContainer(t.containerid);
					}
					var r;
					(r = new (t.async ? DisplayEventAsync : DisplayEventSync)(
						new DisplayUrlBuilder(),
						t
					)),
						window.criteo_pubtag.push(r);
				} else
					Log.Error("Missing parameter 'containerid' for an async display");
			else Log.Error("Criteo hosted ads only work in async mode");
		else Log.Error("missing parameter 'zoneid'");
	}
	function DisplayAcceptableAdIfAdblocked(e) {
		var t = new DisplayInputParameters(e);
		if (void 0 !== t.zoneid)
			if (void 0 !== t.containerid && "" !== t.containerid) {
				var i = document.getElementById(t.containerid);
				if (isVisible(i)) {
					var r = window.criteo_pubtag.context;
					if (void 0 === r.isAdBlocked)
						new AdBlocker().isAdBlocked(function(e) {
							(r.isAdBlocked = e), window.criteo_pubtag.evalEvents();
						});
					var o,
						n,
						a = new EyeoDealValidator();
					(o = new DisplayEventAFR(
						new DisplayUrlBuilder(),
						t,
						a.respectsEyeoDeal(t.containerid)
					)),
						(n = new Custom(function() {
							t.collapseContainerIfNotAdblocked && (i.style.display = "none"),
								void 0 !== t.callIfNotAdblocked && t.callIfNotAdblocked();
						}));
					var s;
					(s = new ConditionalEvent(
						function() {
							return !0 === window.criteo_pubtag.context.isAdBlocked;
						},
						o,
						n,
						function() {
							return void 0 !== window.criteo_pubtag.context.isAdBlocked;
						}
					)),
						window.criteo_pubtag.push(s);
				} else
					Log.Error(
						"can't display acceptable ad : the container \"" +
							t.containerid +
							'" is not visible'
					);
			} else
				Log.Error("missing parameter 'containerid' to display acceptable ads");
		else Log.Error("missing parameter 'zoneid'");
	}
	function isVisible(e, t) {
		if (e === document) return !0;
		var i = "visible" === e.style.visibility;
		if (!e) return !1;
		if (!e.parentNode) return !1;
		if (e.style) {
			if ("none" === e.style.display) return !1;
			if ("hidden" === e.style.visibility && !1 === t) return !1;
		}
		if (window.getComputedStyle) {
			var r = window.getComputedStyle(e, "");
			if ("none" === r.display) return !1;
			if ("hidden" === r.visibility && !1 === t) return !1;
			i = i || "visible" === r.visibility;
		}
		var o = e.currentStyle;
		if (o) {
			if ("none" === o.display) return !1;
			if ("hidden" === o.visibility && !1 === t) return !1;
			i = i || "visible" === o.visibility;
		}
		return isVisible(e.parentNode, null != t ? t : i);
	}
	var Polyfills = ((MB.LoadPolyfills = function() {
			MB.DefineIsArray(), MB.DefineIndexOf(), MB.DefineFilter();
		}),
		(MB.DefineIsArray = function() {
			Array.isArray ||
				(Array.isArray = function(e) {
					return "[object Array]" === Object.prototype.toString.call(e);
				});
		}),
		(MB.DefineIndexOf = function() {
			Array.prototype.indexOf ||
				(Array.prototype.indexOf = function(e, t) {
					if ((void 0 === t && (t = 0), void 0 === this))
						throw new TypeError("'this' is null or not defined");
					var i = this.length;
					if (0 === i) return -1;
					if (i <= t) return -1;
					for (var r = Math.max(0 <= t ? t : i - Math.abs(t), 0); r < i; ) {
						if (r in this && this[r] === e) return r;
						r++;
					}
					return -1;
				});
		}),
		(MB.DefineFilter = function() {
			Array.prototype.filter ||
				(Array.prototype.filter = function(e) {
					if (void 0 === this || void 0 === this) throw new TypeError();
					var t = this.length;
					if ("function" != typeof e) throw new TypeError();
					for (
						var i = [],
							r = 2 <= arguments.length ? arguments[1] : void 0,
							o = 0;
						o < t;
						o++
					)
						if (o in this) {
							var n = this[o];
							e.call(r, n, o, this) && i.push(n);
						}
					return i;
				});
		}),
		MB),
		StorageOrigin,
		bC;
	function MB() {}
	function tryDecodeURIComponent(t, i) {
		try {
			return decodeURIComponent(t);
		} catch (e) {
			return void 0 !== i ? i : t;
		}
	}
	function parseUri(e) {
		var t = document.createElement("a");
		return (
			(t.href = e),
			{
				protocol: t.protocol,
				host: t.host,
				hostname: t.hostname,
				pathname: "/" === t.pathname[0] ? t.pathname.slice(1) : t.pathname,
				search: t.search,
				href: t.href
			}
		);
	}
	(bC = StorageOrigin = StorageOrigin || {}),
		(bC[(bC.None = 0)] = "None"),
		(bC[(bC.Cookie = 1)] = "Cookie"),
		(bC[(bC.LocalStorage = 2)] = "LocalStorage");
	var CookieSynchronizer = ((cC.isSafariBrowser = function() {
		return null !== navigator.userAgent.match(cC.SAFARI_CHECK_REGEX);
	}),
	(cC.isAndroidBrowser = function() {
		return -1 < navigator.userAgent.toLowerCase().indexOf("android");
	}),
	(cC.isFirefoxBrowser = function() {
		return -1 < navigator.userAgent.toLowerCase().indexOf("firefox");
	}),
	(cC.isEdgeChromiumBrowser = function() {
		return -1 < navigator.userAgent.toLowerCase().indexOf("edg/");
	}),
	(cC.isEdgeLegacyBrowser = function() {
		return -1 < navigator.userAgent.toLowerCase().indexOf("edge/");
	}),
	(cC.prototype.synchronizeCriteoUid = function(e) {
		var t = this;
		if (
			(e ||
				cC.isSafariBrowser() ||
				cC.isAndroidBrowser() ||
				cC.isFirefoxBrowser() ||
				cC.isEdgeChromiumBrowser() ||
				cC.isEdgeLegacyBrowser()) &&
			this.topWin.addEventListener
		)
			if ("complete" === this.topDoc.readyState)
				this.appendGumIframeIfDoesNotExist();
			else {
				var i = function() {
					t.topDoc.removeEventListener("DOMContentLoaded", i),
						t.topWin.removeEventListener("load", i),
						t.appendGumIframeIfDoesNotExist();
				};
				this.topWin.addEventListener("load", i, !1),
					this.topDoc.addEventListener("DOMContentLoaded", i, !1);
			}
	}),
	(cC.prototype.appendGumIframeIfDoesNotExist = function() {
		var n = this,
			e = this.createGumIframe();
		this.topDoc.getElementById(cC.SYNCFRAME_ID) ||
			(this.topWin.addEventListener(
				"message",
				function(e) {
					var t = e.data;
					if (t && t.isCriteoMessage)
						if ((e.stopImmediatePropagation(), t.optout))
							n.setClientSideOptOut(),
								n.deleteClientSideUid(),
								n.deleteClientSideIdfs(),
								n.deleteClientSideSecureId(),
								n.deleteBundle();
						else {
							if (
								(t.uid && n.setClientSideUid(t.uid),
								t.idfs && n.setClientSideIdfs(t.idfs),
								t.callbacks)
							)
								for (
									var i = 0,
										r =
											"string" == typeof t.callbacks
												? [t.callbacks]
												: t.callbacks;
									i < r.length;
									i++
								) {
									var o = r[i];
									new Image().src = o;
								}
							else t.bundle && n.setBundle(t.bundle);
							t.removeSid
								? n.deleteClientSideSecureId()
								: t.sid && n.setClientSideSecureId(t.sid);
						}
				},
				!0
			),
			this.topDoc.body.appendChild(e));
	}),
	(cC.prototype.getClientSideUid = function() {
		return this.getFromAllStorages(cC.GUID_COOKIE_NAME);
	}),
	(cC.prototype.setClientSideUid = function(e) {
		this.writeOnAllStorages(
			cC.GUID_COOKIE_NAME,
			e,
			cC.GUID_RETENTION_TIME_HOUR
		);
	}),
	(cC.prototype.deleteClientSideUid = function() {
		this.deleteFromAllStorage(cC.GUID_COOKIE_NAME);
	}),
	(cC.prototype.getBundle = function() {
		return this.getFromAllStorages(cC.BUNDLE_COOKIE_NAME);
	}),
	(cC.prototype.setBundle = function(e) {
		this.writeOnAllStorages(
			cC.BUNDLE_COOKIE_NAME,
			e,
			cC.GUID_RETENTION_TIME_HOUR
		);
	}),
	(cC.prototype.deleteBundle = function() {
		this.deleteFromAllStorage(cC.BUNDLE_COOKIE_NAME);
	}),
	(cC.prototype.getClientSideOptOut = function() {
		var e = this.getFromAllStorages(cC.OPTOUT_COOKIE_NAME);
		return { value: "1" === e.value, origin: e.origin };
	}),
	(cC.prototype.setClientSideOptOut = function() {
		this.writeOnAllStorages(
			cC.OPTOUT_COOKIE_NAME,
			"1",
			cC.OPTOUT_RETENTION_TIME_HOUR
		);
	}),
	(cC.prototype.deleteClientSideIdfs = function() {
		this.deleteFromAllStorage(cC.IDFS_COOKIE_NAME);
	}),
	(cC.prototype.getClientSideIdfs = function() {
		return this.getFromAllStorages(cC.IDFS_COOKIE_NAME);
	}),
	(cC.prototype.setClientSideIdfs = function(e) {
		this.writeOnAllStorages(
			cC.IDFS_COOKIE_NAME,
			e,
			cC.GUID_RETENTION_TIME_HOUR
		);
	}),
	(cC.prototype.getClientSideSecureId = function() {
		return this.getFromAllStorages(cC.SECURE_ID_COOKIE_NAME);
	}),
	(cC.prototype.setClientSideSecureId = function(e) {
		this.writeOnAllStorages(
			cC.SECURE_ID_COOKIE_NAME,
			e,
			cC.GUID_RETENTION_TIME_HOUR
		);
	}),
	(cC.prototype.deleteClientSideSecureId = function() {
		this.deleteFromAllStorage(cC.SECURE_ID_COOKIE_NAME);
	}),
	(cC.prototype.getClientSideLocalWebId = function() {
		return this.getFromAllStorages(cC.LOCAL_WEB_ID_COOKIE_NAME);
	}),
	(cC.prototype.checkCookiesAreWriteable = function() {
		var e = "cto_writeable";
		CookieHelper.SetCookie(e, "1", 1, this.topDoc, !0);
		var t = "1" === CookieHelper.GetCookie(e, this.topDoc);
		return CookieHelper.DeleteCookie(e, this.topDoc, !0), t;
	}),
	(cC.prototype.createGumIframe = function() {
		var e = this.topDoc.createElement("iframe"),
			t = this.buildSyncframeSrc();
		return (e.src = t), (e.id = cC.SYNCFRAME_ID), (e.style.display = "none"), e;
	}),
	(cC.prototype.writeOnAllStorages = function(e, t, i) {
		this.localStorageEnabled && this.localStorageHelper.setItem(e, t),
			CookieHelper.SetCookie(e, t, i, this.topDoc, !0);
	}),
	(cC.prototype.getFromAllStorages = function(e) {
		var t,
			i = CookieHelper.GetCookie(e, this.topDoc);
		return (
			this.localStorageEnabled &&
				(t = this.localStorageHelper.getItem(e) || void 0),
			{
				value: i || t,
				origin: (i && StorageOrigin.Cookie) | (t && StorageOrigin.LocalStorage)
			}
		);
	}),
	(cC.prototype.deleteFromAllStorage = function(e) {
		CookieHelper.DeleteCookie(e, this.topDoc, !0),
			this.localStorageEnabled && this.localStorageHelper.removeItem(e);
	}),
	(cC.prototype.getTld = function() {
		var e = CookieHelper.SetCookie(
			cC.TLD_TEST_COOKIE_NAME,
			"test",
			1,
			this.topDoc,
			!0
		);
		return (
			CookieHelper.DeleteCookie(cC.TLD_TEST_COOKIE_NAME, this.topDoc, !0), e
		);
	}),
	(cC.prototype.buildSyncframeSrc = function() {
		var e = this.getClientSideUid(),
			t = this.getClientSideIdfs(),
			i = this.getClientSideOptOut(),
			r = this.getClientSideSecureId(),
			o = this.getClientSideLocalWebId(),
			n = this.getBundle(),
			a = this.getTld(),
			s = encodeURIComponent(parseUri(this.topUrl).hostname),
			d = PublisherTagVersion,
			c = this.canWriteCookies,
			l =
				"https://gum.criteo.com/syncframe?topUrl=" +
				s +
				(this.isDebug ? "&debug=1" : "");
		return (l +=
			"#" +
			JSON.stringify({
				optout: i,
				uid: e,
				idfs: t,
				sid: r,
				origin: "publishertag",
				version: d,
				lwid: o,
				tld: a,
				bundle: n,
				topUrl: s,
				cw: c
			}));
	}),
	(cC.GUID_COOKIE_NAME = "cto_idcpy"),
	(cC.GUID_RETENTION_TIME_HOUR = 9360),
	(cC.IDFS_COOKIE_NAME = "cto_idfs"),
	(cC.SECURE_ID_COOKIE_NAME = "cto_sid"),
	(cC.LOCAL_WEB_ID_COOKIE_NAME = "cto_lwid"),
	(cC.BUNDLE_COOKIE_NAME = "cto_bundle"),
	(cC.OPTOUT_COOKIE_NAME = "cto_optout"),
	(cC.OPTOUT_RETENTION_TIME_HOUR = 43200),
	(cC.TLD_TEST_COOKIE_NAME = "cto_pub_test_tld"),
	(cC.SYNCFRAME_ID = "criteo-syncframe"),
	(cC.SAFARI_CHECK_REGEX = /^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i),
	cC);
	function cC(e, t, i) {
		(this.isDebug = t),
			(this.topWin = e),
			(this.topDoc = e.document),
			(this.localStorageHelper = new LocalStorageHelper(this.topWin)),
			(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage()),
			(this.canWriteCookies = this.checkCookiesAreWriteable()),
			(this.topUrl = i);
	}
	var Context = ((YC.prototype.getContextFlags = function() {
		var e = "";
		return (
			(e += this.debugMode ? "&debug=1" : ""),
			(e += this.noLog ? "&nolog=1" : "")
		);
	}),
	(YC.prototype.getDisplayContext = function(e) {
		return DomManipulationTools.inIframe()
			? e.err
				? DisplayContext.InUnfriendlyIframe
				: DisplayContext.InFriendlyIframe
			: DisplayContext.DirectIntegration;
	}),
	(YC.prototype.getQueryStringParams = function(e) {
		var t = {},
			i = e.split("?");
		if (1 < i.length)
			for (var r = 0, o = i[1].split("&"); r < o.length; r++) {
				var n = o[r].split("=");
				t[tryDecodeURIComponent(n[0])] = tryDecodeURIComponent(n[1]);
			}
		return t;
	}),
	(YC.prototype.synchronizeCriteoUid = function() {
		var e = this.cookieSynchronizerFactory();
		(this.ctoIdOnPublisherDomain = e.getClientSideUid().value),
			(this.isOptOut = e.getClientSideOptOut().value),
			(this.idfs = e.getClientSideIdfs().value),
			(this.secureId = e.getClientSideSecureId().value),
			(this.bundle = e.getBundle().value),
			e.synchronizeCriteoUid();
	}),
	(YC.prototype.getIdfs = function() {
		return [this.idfs, this.secureId].join(":");
	}),
	(YC.prototype.setIdfs = function(e) {
		var t = e.split(":");
		t[0] && (this.idfs = t[0]), t[1] && (this.secureId = t[1]);
	}),
	(YC.prototype.computeShouldIgnoreSilentMode = function() {
		return Math.floor(100 * Math.random()) < 5;
	}),
	(YC.prototype.setSilentModeIgnored = function() {
		this.silentModeIgnored = !0;
	}),
	(YC.prototype.checkIfUserHasOptOutForCCPA = function(t) {
		var i = this;
		this.ccpaPrivacyProvider.readyToRetrieve()
			? this.ccpaPrivacyProvider.retrieveConsent(function(e) {
					t(i.ccpaPrivacyProvider.hasUserOptOut(e));
			  })
			: t(!1);
	}),
	YC);
	function YC(e, t, i, r) {
		var o = this;
		this.charset = e.charset || e.characterSet || "";
		var n = DomManipulationTools.getHighestAccessibleWindow(t);
		(this.displayContext = this.getDisplayContext(n)),
			(this.highestAccessibleUrl = DomManipulationTools.getHighestAccessibleUrl(
				n
			)),
			(this.ccpaPrivacyProvider = i || new CCPAPrivacyProvider(t)),
			(this.cookieSynchronizerFactory =
				r ||
				function() {
					return new CookieSynchronizer(
						n.topFrame,
						o.debugMode,
						o.highestAccessibleUrl
					);
				}),
			this.checkIfUserHasOptOutForCCPA(function(e) {
				e || o.synchronizeCriteoUid();
			});
		var a = this.getQueryStringParams(this.highestAccessibleUrl);
		(this.debugMode = "1" === a.pbt_debug || !1),
			(this.noLog = "1" === a.pbt_nolog || !1),
			(this.shouldIgnoreSilentMode = this.computeShouldIgnoreSilentMode()),
			(this.silentModeIgnored = !1),
			this.debugMode && SetLogLevel(LogLevel.Debug),
			(this.location = t.location),
			(this.dising = !1),
			(this.ct0 = void 0),
			(this.wpdt0 = void 0),
			(this.isAdBlocked = void 0),
			(this.rtaVarNames = []);
	}
	var StandaloneDirectBidder = function() {
		(this.bids = {}), (this.lineItemRanges = []), (this.impIds = []);
	};
	function isConditionalEvent(e) {
		return "conditionalEvent" === e.name;
	}
	var PublisherTag = ((yD.prototype.push = function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		for (var i = 0, r = e; i < r.length; i++) {
			var o = r[i];
			this.events.push(o);
		}
		this.evalEvents();
	}),
	(yD.prototype.evalEvents = function() {
		for (var e = 0; e < this.events.length; ) {
			var t = this.events[e];
			if (isConditionalEvent(t) && !t.canEval()) e++;
			else {
				var i = this.events.splice(e, 1);
				try {
					i[0].eval(this);
				} catch (e) {
					Log.Error(
						"An exception occurred processing an event: " + e.toString()
					);
				}
			}
		}
	}),
	(yD.VERSION = PublisherTagVersion),
	yD);
	function yD() {
		(this.standaloneBidder = new StandaloneDirectBidder()),
			(this.events = []),
			(this.context = new Context(document, window)),
			Log.Debug("Publisher Tag loaded");
	}
	function safeFunction(e) {
		function t() {
			try {
				return i.apply(this, arguments);
			} catch (e) {
				Log.Error("Exception caught: " + e.toString());
			}
		}
		var i = e;
		for (var r in ((t.prototype = i.prototype), i))
			i.hasOwnProperty(r) && (t[r] = i[r]);
		return t;
	}
	function safeObject(e) {
		for (var t in e)
			if (t in e) {
				var i = e[t];
				"function" == typeof i
					? (e[t] = safeFunction(i))
					: "object" == typeof i && (e[t] = safeObject(i));
			}
		return e;
	}
	function createEventProcessor(e) {
		var t = {
			push: function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				if (void 0 !== e)
					for (var i = 0, r = e; i < r.length; i++) {
						var o = r[i];
						"function" == typeof o && safeFunction(o)();
					}
			}
		};
		return e && Array.isArray(e) && t.push.apply(t, e), t;
	}
	function CallRTA(e) {}
	function SetTargeting(e) {}
	var DefaultCrtgContentName = "crtg_content",
		DefaultCrtgRtaCookieName = "crtg_rta",
		passbackProfileId = 206;
	function SetupPassbackEventQueue() {
		window.Criteo.passbackEvents = createEventProcessor(
			window.Criteo.passbackEvents
		);
	}
	function RequestBidsPassback(e, t) {
		RequestBidsWithProfileId(e, passbackProfileId, SetupPassbackEventQueue, t);
	}
	function RenderAdPassback(e, t, i, r) {
		var o;
		"string" == typeof e
			? (o = e)
			: ((o = getParam(e, "adUnit", "string")),
			  (t = getParam(e, "passback", "function")),
			  (i = getParam(e, "customRenderFunction", "function")),
			  (r = getParam(e, "minimumBidPrice", "number"))),
			void 0 !== o
				? void 0 !== t
					? ("function" != typeof i &&
							(i = function(e) {
								RenderAd({ bidId: e.id, containerId: o });
							}),
					  (window.Criteo.passbackEvents = window.Criteo.passbackEvents || []),
					  window.Criteo.passbackEvents.push(function() {
							var e = GetBidsForAdUnit(o)[0];
							e && (void 0 === r || e.cpm > r) ? i(e) : t(o);
					  }))
					: Log.Error("A passback callback should be provided")
				: Log.Error("An adUnit string parameter should be provided");
	}
	window.criteo_pubtag ||
		(Polyfills.LoadPolyfills(), (window.criteo_pubtag = new PublisherTag())),
		(window.Criteo = safeObject({
			CallRTA: CallRTA,
			SetTargeting: SetTargeting,
			DisplayAd: DisplayAd,
			DisplayAcceptableAdIfAdblocked: DisplayAcceptableAdIfAdblocked,
			ComputeStandaloneDFPTargeting: ComputeStandaloneDFPTargeting,
			GetBids: GetBids,
			GetBidsForAdUnit: GetBidsForAdUnit,
			RenderAd: RenderAd,
			RequestBids: RequestBids,
			RequestBidsOnGoogleTagSlots: RequestBidsOnGoogleTagSlots,
			SetDFPKeyValueTargeting: SetDFPKeyValueTargeting,
			SetLineItemRanges: SetLineItemRanges,
			SetCeh: SetCeh$1,
			SetCCPAExplicitOptOut: SetCCPAExplicitOptOut,
			Passback: {
				RequestBids: RequestBidsPassback,
				RenderAd: RenderAdPassback
			},
			PubTag: {
				Adapters: { AMP: AMP, Prebid: Prebid },
				Context: { SetIdfs: SetIdfs, GetIdfs: GetIdfs },
				DirectBidding: {
					DirectBiddingEvent: DirectBiddingEventWithCaching,
					DirectBiddingSlot: DirectBiddingSlot,
					DirectBiddingUrlBuilder: DirectBiddingUrlBuilder,
					Size: Size
				},
				RTA: {
					DefaultCrtgContentName: DefaultCrtgContentName,
					DefaultCrtgRtaCookieName: DefaultCrtgRtaCookieName
				}
			},
			events: window.Criteo ? window.Criteo.events : [],
			passbackEvents: window.Criteo ? window.Criteo.passbackEvents : [],
			usePrebidEvents: !window.Criteo || window.Criteo.usePrebidEvents
		})),
		(window.Criteo.events = createEventProcessor(window.Criteo.events));
})();
