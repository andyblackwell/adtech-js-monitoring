!(function() {
	"use strict";
	var AdBlocker = (function() {
			function i() {
				(this.allowedPixelLoaded = !1), (this.blockedPixelFailed = !1);
			}
			return (
				(i.prototype.isAdBlocked = function(e) {
					var t = this;
					this.createPixel(
						i.allowedPixelUrl,
						function() {
							(t.allowedPixelLoaded = !0) === t.blockedPixelFailed && e(!0);
						},
						function() {}
					),
						this.createPixel(
							i.blockedPixelUrl,
							function() {
								e(!1);
							},
							function() {
								(t.blockedPixelFailed = !0) === t.allowedPixelLoaded && e(!0);
							}
						);
				}),
				(i.prototype.createPixel = function(e, t, i) {
					var n = document.createElement("img");
					(n.src = e),
						(n.height = 1),
						(n.width = 1),
						(n.style.display = "none"),
						(n.onload = t),
						(n.onerror = i);
				}),
				(i.allowedPixelUrl = "https://static.criteo.net/images/pixel.gif?ch=1"),
				(i.blockedPixelUrl = "https://static.criteo.net/images/pixel.gif?ch=2"),
				i
			);
		})(),
		AbstractEvent = (function() {
			function e(e) {
				this.name = e;
			}
			return (e.prototype.eval = function(e) {}), e;
		})(),
		LogLevel,
		k;
	(k = LogLevel || (LogLevel = {})),
		(k[(k.Error = 0)] = "Error"),
		(k[(k.Warning = 1)] = "Warning"),
		(k[(k.Debug = 2)] = "Debug");
	var CSS_LOG = [
			"color: #fff;",
			"background: #ff8f1c;",
			"display: inline-block;",
			"padding: 1px 4px;",
			"border-radius: 3px;"
		].join(" "),
		Log = (function() {
			function r() {}
			return (
				(r.Log = function(e, t) {
					if (!(r.LOGLEVEL < e)) {
						var i = LogLevel[e].toUpperCase(),
							n = window.navigator.userAgent,
							o = 0 < n.indexOf("MSIE ") || 0 < n.indexOf("Trident/");
						window.console &&
							(o
								? console.log("[PubTag] " + i + ": " + t)
								: console.log("%cPubTag", CSS_LOG, i + ": " + t));
					}
				}),
				(r.Debug = function(e) {
					r.Log(LogLevel.Debug, e);
				}),
				(r.Warning = function(e) {
					r.Log(LogLevel.Warning, e);
				}),
				(r.Error = function(e) {
					r.Log(LogLevel.Error, e);
				}),
				(r.LOGLEVEL = LogLevel.Error),
				r
			);
		})();
	function SetLogLevel(e) {
		Log.LOGLEVEL = e;
	}
	var TimeMeasurer = (function() {
		function i(e) {
			void 0 === e && (e = !0),
				e && window.performance && window.performance.now
					? (this.now = window.performance.now.bind(window.performance))
					: Date.now
						? (this.now = Date.now)
						: (this.now = function() {
								return new Date().getTime();
						  });
		}
		return (
			(i.CreateRunning = function() {
				var e = new i();
				return e.start(), e;
			}),
			(i.CreateWithStartTime = function(e) {
				var t = new i(!1);
				return (t.startTime = e), t;
			}),
			(i.TimeSincePageLoad = function() {
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
			(i.prototype.start = function() {
				this.startTime = this.now();
			}),
			(i.prototype.elapsed = function() {
				return this.now() - this.startTime;
			}),
			i
		);
	})();
	function tryParseJson(e) {
		try {
			return JSON.parse(e);
		} catch (e) {
			return;
		}
	}
	var USPAPI_VERSION = 1,
		CCPAPrivacyProvider = (function() {
			function a(e) {
				(this.uspapiCallbacks = {}), (this.currentWindow = e);
			}
			return (
				(a.prototype.getCMPFrame = function() {
					for (var e, t = this.currentWindow, i = 0; i < 10; ++i) {
						try {
							t.frames.__uspapiLocator && (e = t);
						} catch (e) {}
						if (t === this.currentWindow.top) break;
						t = t.parent;
					}
					return e;
				}),
				(a.prototype.hasCallerFunctionInWindow = function() {
					return "function" == typeof this.currentWindow.__uspapi;
				}),
				(a.prototype.readyToRetrieve = function() {
					return (
						this.hasCallerFunctionInWindow() || void 0 !== this.getCMPFrame()
					);
				}),
				(a.prototype.retrieveCCPAConsent = function(i, e) {
					void 0 === e && (e = parseInt("50", 10));
					var n = TimeMeasurer.CreateRunning(),
						o = !1,
						r = setTimeout(function() {
							(o = !0),
								Log.Warning(
									"Timeout: Unable to resolve CCPA consent after " + e + "ms"
								),
								i(void 0);
						}, e);
					this.executeCommand("getUSPData", USPAPI_VERSION, function(e, t) {
						o ||
							(clearTimeout(r),
							t
								? (Log.Debug("Consent retrieved in " + n.elapsed() + "ms"),
								  a.processResponseData(e, i))
								: (Log.Warning("Error retrieving CCPA consent data from CMP"),
								  i(void 0)));
					});
				}),
				(a.processResponseData = function(e, t) {
					e
						? t(e)
						: (Log.Warning("Unable to read CCPA consent data from CMP"),
						  t(void 0));
				}),
				(a.prototype.executeCommand = function(e, t, i) {
					var r = this;
					if (!this.hasCallerFunctionInWindow()) {
						Log.Debug("No CMP defined on current frame");
						var a = this.getCMPFrame();
						(this.currentWindow.__uspapi = function(e, t, i) {
							if (!a)
								return (
									Log.Warning("CMP not found"),
									void i({ msg: "CMP not found" }, !1)
								);
							var n = Math.random().toString(10),
								o = { __uspapiCall: { command: e, parameter: t, callId: n } };
							(r.uspapiCallbacks[n] = i), a.postMessage(o, "*");
						}),
							this.currentWindow.addEventListener(
								"message",
								function(e) {
									var t =
										"string" == typeof e.data ? tryParseJson(e.data) : e.data;
									if (
										t &&
										t.__uspapiReturn &&
										t.__uspapiReturn.callId &&
										t.__uspapiReturn.returnValue
									) {
										var i = t.__uspapiReturn;
										r.uspapiCallbacks &&
											r.uspapiCallbacks[i.callId] &&
											(r.uspapiCallbacks[i.callId](i.returnValue, i.success),
											delete r.uspapiCallbacks[i.callId]);
									}
								},
								!1
							);
					}
					this.currentWindow.__uspapi(e, t, i);
				}),
				(a.prototype.hasUserOptOut = function(e) {
					return !(
						!e ||
						!e.uspString ||
						"1YNY" === e.uspString.toUpperCase() ||
						"1YNN" === e.uspString.toUpperCase() ||
						"1---" === e.uspString
					);
				}),
				a
			);
		})(),
		CRITEO_VENDOR_ID = 91,
		GDPRPrivacyProvider = (function() {
			function a(e) {
				(this.cmpCallbacks = {}), (this.currentWindow = e);
			}
			return (
				(a.prototype.getCMPFrame = function() {
					for (var e, t = this.currentWindow, i = 0; i < 10; ++i) {
						try {
							t.frames.__cmpLocator && (e = t);
						} catch (e) {}
						if (t === this.currentWindow.top) break;
						t = t.parent;
					}
					return e;
				}),
				(a.prototype.hasCallerFunctionInFrame = function() {
					return "function" == typeof this.currentWindow.__cmp;
				}),
				(a.prototype.readyToRetrieve = function() {
					return (
						this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
					);
				}),
				(a.prototype.retrieveGDPRConsent = function(i, e) {
					void 0 === e && (e = parseInt("10000", 10));
					var n = TimeMeasurer.CreateRunning(),
						o = !1,
						r = setTimeout(function() {
							(o = !0),
								Log.Warning(
									"Timeout: Unable to resolve GDPR consent after " + e + "ms"
								),
								i(void 0);
						}, e);
					this.executeCommand("getConsentData", null, function(e, t) {
						o ||
							(clearTimeout(r),
							t
								? (Log.Debug("Consent retrieved in " + n.elapsed() + "ms"),
								  a.processResponseData(e, i))
								: (Log.Warning("Error retrieving GDPR consent data from CMP"),
								  i(void 0)));
					});
				}),
				(a.prototype.retrieveGDPRConsentForPassback = function(i, e) {
					void 0 === e && (e = parseInt("10000", 10));
					var n = TimeMeasurer.CreateRunning(),
						o = !1,
						r = setTimeout(function() {
							(o = !0),
								Log.Warning(
									"Timeout: Unable to resolve GDPR consent after " + e + "ms"
								),
								i(void 0);
						}, e);
					this.executeCommand("getVendorConsents", [CRITEO_VENDOR_ID], function(
						e,
						t
					) {
						o ||
							(clearTimeout(r),
							t
								? (Log.Debug(
										"Consent (getVendorConsents) retrieved in " +
											n.elapsed() +
											"ms"
								  ),
								  a.processResponseData(e, i))
								: (Log.Warning(
										"Error while calling getVendorConsents from CMP"
								  ),
								  i(void 0)));
					});
				}),
				(a.processResponseData = function(e, t) {
					if (e) {
						var i = {};
						void 0 !== e.consentData && (i.consentData = e.consentData),
							void 0 !== e.gdprApplies && (i.gdprApplies = !!e.gdprApplies),
							e.vendorConsents &&
								void 0 !== e.vendorConsents[CRITEO_VENDOR_ID.toString()] &&
								(i.consentGiven = !!e.vendorConsents[
									CRITEO_VENDOR_ID.toString()
								]),
							t(i);
					} else
						Log.Warning("Unable to read GDPR consent data from CMP"), t(void 0);
				}),
				(a.prototype.executeCommand = function(e, t, i) {
					var r = this;
					if (!this.hasCallerFunctionInFrame()) {
						Log.Debug("No CMP defined on current frame");
						var a = this.getCMPFrame();
						(this.currentWindow.__cmp = function(e, t, i) {
							if (!a)
								return (
									Log.Warning("CMP not found"),
									void i({ msg: "CMP not found" }, !1)
								);
							var n = Math.random().toString(10),
								o = { __cmpCall: { command: e, parameter: t, callId: n } };
							(r.cmpCallbacks[n] = i), a.postMessage(o, "*");
						}),
							this.currentWindow.addEventListener(
								"message",
								function(e) {
									var t =
										"string" == typeof e.data ? tryParseJson(e.data) : e.data;
									if (
										t &&
										t.__cmpReturn &&
										t.__cmpReturn.callId &&
										t.__cmpReturn.returnValue
									) {
										var i = t.__cmpReturn;
										r.cmpCallbacks &&
											r.cmpCallbacks[i.callId] &&
											(r.cmpCallbacks[i.callId](i.returnValue, i.success),
											delete r.cmpCallbacks[i.callId]);
									}
								},
								!1
							);
					}
					this.currentWindow.__cmp(e, t, i);
				}),
				a
			);
		})();
	function tryGetLocalStorage(e) {
		try {
			return e.localStorage;
		} catch (e) {
			return;
		}
	}
	var LocalStorageHelper = (function() {
			function e(e) {
				(this.EXPIRE_SUFFIX = "_expires"),
					(this.CHECK_STORAGE_KEY = "criteo_localstorage_check"),
					(this.localStorage = tryGetLocalStorage(e || window));
			}
			return (
				(e.prototype.checkLocalStorage = function() {
					if (!this.localStorage) return !1;
					var e = this.CHECK_STORAGE_KEY;
					try {
						return (
							this.localStorage.setItem(e, e),
							this.localStorage.removeItem(e),
							!0
						);
					} catch (e) {
						return !1;
					}
				}),
				(e.prototype.removeItem = function(e) {
					this.localStorage.removeItem(e),
						this.localStorage.removeItem(e + this.EXPIRE_SUFFIX);
				}),
				(e.prototype.getItem = function(e, t) {
					var i = new Date().getTime(),
						n = this.localStorage.getItem(e + this.EXPIRE_SUFFIX),
						o = n ? parseInt(n, 10) : -1;
					return (-1 !== o && o < i) || (t && (-1 === o || t < o - i))
						? (this.removeItem(e), null)
						: this.localStorage.getItem(e);
				}),
				(e.prototype.setItem = function(e, t, i) {
					if ((this.localStorage.setItem(e, t), i)) {
						var n = new Date().getTime() + i;
						this.localStorage.setItem(e + this.EXPIRE_SUFFIX, n.toString());
					}
				}),
				(e.prototype.getAllItemsByPrefix = function(e) {
					var t = [];
					for (var i in localStorage) 0 === i.indexOf(e) && t.push(i);
					return t;
				}),
				e
			);
		})(),
		DirectBiddingSilentModeManager = (function() {
			function i() {
				(this.localStorageHelper = new LocalStorageHelper()),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage());
			}
			return (
				(i.prototype.silentModeEnabled = function() {
					var e = i.SILENT_MODE_KEY;
					return (
						this.localStorageEnabled &&
						null !== this.localStorageHelper.getItem(e)
					);
				}),
				(i.prototype.enableSilentMode = function(e) {
					if (this.localStorageEnabled) {
						var t = i.SILENT_MODE_KEY;
						this.localStorageHelper.setItem(t, "1", e);
					}
				}),
				(i.SILENT_MODE_KEY = "criteo_silent_mode"),
				i
			);
		})();
	function now() {
		return new Date().getTime();
	}
	var Lock = (function() {
			function e(e) {
				(this.x = e + "_lock_A"),
					(this.y = e + "_lock_B"),
					(this.id = Math.floor(1e9 * Math.random()).toString());
			}
			return (
				(e.prototype.get = function(e) {
					var t = localStorage.getItem(e);
					if (t) {
						var i = t.split("|");
						if (!(i.length < 2 || parseInt(i[1], 10) < now())) return i[0];
					}
				}),
				(e.prototype.set = function(e, t) {
					var i = now() + t;
					localStorage.setItem(e, this.id + "|" + i);
				}),
				(e.prototype.acquire = function(e, t, i) {
					var n = this;
					void 0 === i && (i = 100),
						i <= 0 || this.tryAcquire(t)
							? (e(), this.release())
							: setTimeout(function() {
									n.acquire(e, t, i - 10);
							  }, 10);
				}),
				(e.prototype.tryAcquire = function(e) {
					localStorage.setItem(this.x, this.id);
					var t = this.get(this.y);
					return !(
						(t && t !== this.id) ||
						(this.set(this.y, e),
						localStorage.getItem(this.x) !== this.id ||
							this.get(this.y) !== this.id)
					);
				}),
				(e.prototype.release = function() {
					localStorage.removeItem(this.x), localStorage.removeItem(this.y);
				}),
				e
			);
		})(),
		Size = (function() {
			function e(e, t) {
				(this.width = e), (this.height = t);
			}
			return (
				(e.prototype.toString = function() {
					return this.width + "x" + this.height;
				}),
				e
			);
		})(),
		SlotKey = (function() {
			function e(e) {
				this.impressionId = e;
			}
			return (
				(e.prototype.toString = function() {
					return "ImpId" + this.impressionId;
				}),
				e
			);
		})(),
		__extends = ((Hb = function(e, t) {
			return (Hb =
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
			Hb(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Hb,
		SlotKeyWithSize = (function(o) {
			function e(e, t, i) {
				var n = o.call(this, e) || this;
				return (n.size = t), (n.networkId = i), n;
			}
			return (
				__extends(e, o),
				(e.prototype.toString = function() {
					return (
						o.prototype.toString.call(this) +
						"_Size" +
						this.size +
						"_NetworkId" +
						this.networkId
					);
				}),
				e
			);
		})(SlotKey),
		__extends$1 = ((Yb = function(e, t) {
			return (Yb =
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
			Yb(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Yb,
		SlotKeyWithZoneId = (function(n) {
			function e(e, t) {
				var i = n.call(this, e) || this;
				return (i.zoneId = t), i;
			}
			return (
				__extends$1(e, n),
				(e.prototype.toString = function() {
					return n.prototype.toString.call(this) + "_ZoneId" + this.zoneId;
				}),
				e
			);
		})(SlotKey),
		SlotKeyFactory = (function() {
			function e(e, t) {
				(this.useZoneIdIntegration = e), (this.networkId = t);
			}
			return (
				(e.prototype.createKeysFromSlotRequest = function(e) {
					if (this.useZoneIdIntegration)
						return [new SlotKeyWithZoneId(e.impId, e.zoneId)];
					for (var t = [], i = 0, n = e.sizes; i < n.length; i++) {
						var o = n[i];
						t.push(new SlotKeyWithSize(e.impId, o, this.networkId));
					}
					return t;
				}),
				(e.prototype.createKeyFromSlotResponse = function(e) {
					return this.useZoneIdIntegration
						? new SlotKeyWithZoneId(e.impid, e.zoneid)
						: new SlotKeyWithSize(
								e.impid,
								new Size(e.width, e.height),
								this.networkId
						  );
				}),
				(e.prototype.createKeyFromBid = function(e) {
					return this.useZoneIdIntegration
						? new SlotKeyWithZoneId(e.impressionId, e.zoneId)
						: new SlotKeyWithSize(
								e.impressionId,
								new Size(e.width, e.height),
								this.networkId
						  );
				}),
				e
			);
		})(),
		DirectBiddingBidManager = (function() {
			function l(e, t) {
				(this.localStorageHelper = new LocalStorageHelper()),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage()),
					(this.slotKeyFactory = new SlotKeyFactory(e, t));
			}
			return (
				(l.useZoneIdIntegration = function(e, t) {
					return (
						void 0 === t ||
						0 ===
							e.filter(function(e) {
								return void 0 !== e.sizes && 0 < e.sizes.length;
							}).length
					);
				}),
				(l.prototype.get = function(e) {
					var t = this.localStorageHelper.getItem(e),
						i = t && tryParseJson(t);
					return i && "object" == typeof i && "bids" in i
						? ((i.bids = i.bids.filter(function(e) {
								return e.expiration > now();
						  })),
						  i)
						: { bids: [] };
				}),
				(l.prototype.getBySlotKey = function(e) {
					return this.get(l.BID_KEY_PREFIX + e.toString());
				}),
				(l.prototype.set = function(e, t) {
					0 < t.bids.length || (t.no_bid && t.no_bid > now())
						? this.localStorageHelper.setItem(e, JSON.stringify(t))
						: this.localStorageHelper.removeItem(e);
				}),
				(l.prototype.setBySlotKey = function(e, t) {
					this.set(l.BID_KEY_PREFIX + e.toString(), t);
				}),
				(l.prototype.filterNoBidSlots = function(e) {
					for (var t = [], i = 0, n = e; i < n.length; i++) {
						for (
							var o = n[i],
								r = [],
								a = 0,
								s = this.slotKeyFactory.createKeysFromSlotRequest(o);
							a < s.length;
							a++
						) {
							var d = s[a];
							this.getBid(d, 0) !== l.NO_BID &&
								(d instanceof SlotKeyWithSize ? r.push(d.size) : t.push(o));
						}
						0 < r.length && ((o.sizes = r), t.push(o));
					}
					return t;
				}),
				(l.prototype.getRequestCachedBids = function(e, t) {
					void 0 === t && (t = 5e3);
					for (var i = [], n = 0, o = e; n < o.length; n++)
						for (
							var r = o[n],
								a = 0,
								s = this.slotKeyFactory.createKeysFromSlotRequest(r);
							a < s.length;
							a++
						) {
							var d = s[a],
								c = this.getBid(d, t);
							void 0 !== c && c !== l.NO_BID && i.push(c);
						}
					return i;
				}),
				(l.prototype.getBid = function(e, t) {
					if ((void 0 === t && (t = 5e3), this.localStorageEnabled)) {
						var i = this.getBySlotKey(e);
						if (i.no_bid && i.no_bid > now()) return l.NO_BID;
						if (0 < t)
							for (var n = 0, o = i.bids; n < o.length; n++) {
								var r = o[n];
								if (new Lock(l.BID_KEY_PREFIX + r.bid.slotid).tryAcquire(t))
									return r.bid;
							}
					}
				}),
				(l.prototype.storeRequestNoBid = function(e, t) {
					for (
						var i = 0, n = this.slotKeyFactory.createKeysFromSlotRequest(e);
						i < n.length;
						i++
					) {
						var o = n[i];
						this.storeNoBid(o, t);
					}
				}),
				(l.prototype.storeResponseBid = function(t, i) {
					var e = this.slotKeyFactory.createKeyFromSlotResponse(t);
					this.modifyCache(e, function(e) {
						e.bids.push({ bid: t, expiration: now() + 1e3 * i });
					});
				}),
				(l.prototype.storeNoBid = function(e, t) {
					this.modifyCache(e, function(e) {
						e.no_bid = Math.max(e.no_bid || 0, now() + 1e3 * t);
					});
				}),
				(l.prototype.removeBid = function(i) {
					var e = this.slotKeyFactory.createKeyFromBid(i);
					this.modifyCache(e, function(e) {
						for (var t = 0; t < e.bids.length; t++)
							if (e.bids[t].bid.slotid === i.slotId)
								return void e.bids.splice(t, 1);
					}),
						new Lock(e.toString()).release();
				}),
				(l.prototype.modifyCache = function(t, i) {
					var n = this;
					if (this.localStorageEnabled) {
						var o = new Lock(t.toString());
						o.acquire(function() {
							var e = n.getBySlotKey(t);
							i(e), n.setBySlotKey(t, e), o.release();
						}, 1e3);
					}
				}),
				(l.prototype.clearExpiredItems = function() {
					for (
						var e = 0,
							t = this.localStorageHelper.getAllItemsByPrefix(l.BID_KEY_PREFIX);
						e < t.length;
						e++
					) {
						var i = t[e],
							n = this.get(i);
						n && this.set(i, n);
					}
				}),
				(l.NO_BID = "nobid"),
				(l.BID_KEY_PREFIX = "criteo_pt_cdb_bidcache_"),
				l
			);
		})(),
		DirectBiddingCache = (function() {
			function e(e, t, i) {
				var n = DirectBiddingBidManager.useZoneIdIntegration(t, i);
				(this.bidManager = new DirectBiddingBidManager(n, i)),
					(this.silentModeManager = new DirectBiddingSilentModeManager()),
					(this.context = e);
			}
			return (
				(e.prototype.filterNoBidSlots = function(e) {
					var t = this.bidManager.filterNoBidSlots(e);
					return this.context.shouldIgnoreSilentMode
						? (t.length !== e.length &&
								this.context.setSilentModeIgnored &&
								this.context.setSilentModeIgnored(),
						  e)
						: t;
				}),
				(e.prototype.silentModeEnabled = function() {
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
				(e.prototype.getCachedBids = function(e) {
					return this.bidManager.getRequestCachedBids(e);
				}),
				(e.prototype.removeBid = function(e) {
					this.bidManager.removeBid(e);
				}),
				(e.prototype.handleResponse = function(e, t, i, n) {
					var o = i.time_to_next_call;
					0 < o &&
						(Log.Debug("Global silent mode enabled for " + o + " seconds"),
						this.silentModeManager.enableSilentMode(1e3 * o));
					var r = {};
					if (i.slots)
						for (var a = 0, s = i.slots; a < s.length; a++) {
							(f = s[a]).ttl && (r[f.imp_id] = f.ttl);
						}
					if (t.slots)
						for (var d = 0, c = t.slots; d < c.length; d++) {
							var l = 0;
							(f = c[d]).slotid in r && ((l = r[f.slotid]), delete r[f.slotid]),
								n &&
									0 < l &&
									(Log.Debug(
										"Post-timeout bid for slot '" +
											f.impid +
											"' cached for " +
											l +
											" seconds"
									),
									this.bidManager.storeResponseBid(f, l));
						}
					for (var u in r)
						if (r.hasOwnProperty(u))
							for (var p = 0, h = e; p < h.length; p++) {
								var f;
								if ((f = h[p]).slotId === u) {
									l = r[u];
									Log.Debug(
										"Silent mode for slot '" +
											f.impId +
											"' enabled for " +
											l +
											" seconds"
									),
										this.bidManager.storeRequestNoBid(f, l);
								}
							}
				}),
				(e.prototype.clearExpiredItems = function() {
					var e = this;
					setTimeout(function() {
						e.bidManager.clearExpiredItems();
					}, 3e3);
				}),
				e
			);
		})(),
		AsyncRequest = (function() {
			function a(e, t, i, n) {
				void 0 === n && (n = !0),
					(this.url = e),
					(this.data = t),
					(this.contentType = i),
					(this.withCredentials = n);
			}
			return (
				(a.prototype.send = function(e, t, i, n) {
					var o = void 0 !== this.data ? "POST" : "GET",
						r = this.getXMLHttpRequest(o, e, t, i, n);
					if (void 0 !== r) r.send(this.data);
					else {
						var a = this.getXDomainRequest(o, e, t, i, n);
						void 0 !== a && a.send(this.data);
					}
				}),
				(a.prototype.getXMLHttpRequest = function(e, t, i, n, o) {
					var r = new XMLHttpRequest();
					if ("withCredentials" in r)
						return (
							r.open(e, this.url, !0),
							(r.timeout = o || a.LOCAL_PASSBACK_TIMEOUT),
							this.contentType
								? r.setRequestHeader("Content-type", this.contentType)
								: "POST" === e &&
								  r.setRequestHeader(
										"Content-type",
										"application/x-www-form-urlencoded"
								  ),
							(r.withCredentials = this.withCredentials),
							(r.onload = function() {
								4 === r.readyState && 200 === r.status
									? t(r.responseText)
									: i(r.readyState, r.status);
							}),
							(r.onerror = function() {
								i(void 0, void 0);
							}),
							n && (r.ontimeout = n),
							r
						);
				}),
				(a.prototype.getXDomainRequest = function(e, t, i, n, o) {
					if ("undefined" != typeof XDomainRequest) {
						var r = new XDomainRequest();
						return (
							(r.timeout = o || a.LOCAL_PASSBACK_TIMEOUT),
							r.open(e, this.url),
							(r.onload = function() {
								void 0 !== r.responseText
									? t(r.responseText)
									: i(void 0, void 0);
							}),
							r.onerror &&
								(r.onerror = function() {
									i(void 0, void 0);
								}),
							r.ontimeout && n && (r.ontimeout = n),
							r
						);
					}
				}),
				(a.LOCAL_PASSBACK_TIMEOUT = 3e4),
				a
			);
		})();
	function resolvePrebidTimeout(e) {
		var t =
			"number" == typeof window.PREBID_TIMEOUT ? window.PREBID_TIMEOUT : void 0;
		return e && t ? Math.min(e, t) : e || t || void 0;
	}
	var PublisherTagVersion = 79,
		DirectBiddingMetric = function(
			e,
			t,
			i,
			n,
			o,
			r,
			a,
			s,
			d,
			c,
			l,
			u,
			p,
			h,
			f
		) {
			(this.publisherTagVersion = e),
				(this.slots = t),
				(this.elapsed = i),
				(this.isTimeout = n),
				(this.pageLoadElapsed = o),
				(this.adapterStartElapsed = r),
				(this.cdbCallStartElapsed = a),
				(this.cdbCallEndElapsed = s),
				(this.adapterEndElapsed = d),
				(this.setTargetingElapsed = c),
				(this.adapterTimeout = l),
				(this.adapterIsTimeout = u),
				(this.timeToFirstByte = p),
				(this.requestGroupId = h),
				(this.sid = f);
		},
		DirectBiddingMetricSlot = function(e, t, i, n, o) {
			(this.impressionId = e),
				(this.zoneId = t),
				(this.adUnitId = i),
				(this.cachedBidUsed = n),
				(this.isDsc = o);
		},
		DirectBiddingMetricBuilder = (function() {
			function e() {
				(this.elapsed = 0),
					(this.isTimeout = !1),
					(this.pageLoadElapsed = 0),
					(this.adapterStartElapsed = 0),
					(this.cdbCallStartElapsed = 0),
					(this.cdbCallEndElapsed = 0),
					(this.adapterEndElapsed = 0),
					(this.cachedBidsReturned = []),
					(this.slots = []);
			}
			return (
				(e.prototype.withElapsed = function(e) {
					return (this.elapsed = Math.round(e)), this;
				}),
				(e.prototype.withIsTimeout = function(e) {
					return (this.isTimeout = e), this;
				}),
				(e.prototype.withPageLoadElapsed = function(e) {
					return (this.pageLoadElapsed = Math.round(e)), this;
				}),
				(e.prototype.withAdapterStartElapsed = function(e) {
					return (this.adapterStartElapsed = Math.round(e)), this;
				}),
				(e.prototype.withCdbCallStartElapsed = function(e) {
					return (this.cdbCallStartElapsed = Math.round(e)), this;
				}),
				(e.prototype.withCdbCallEndElapsed = function(e) {
					return (this.cdbCallEndElapsed = Math.round(e)), this;
				}),
				(e.prototype.withSetTargetingElapsed = function(e) {
					return (this.setTargetingElapsed = Math.round(e)), this;
				}),
				(e.prototype.withAdapterEndElapsed = function(e) {
					return (this.adapterEndElapsed = Math.round(e)), this;
				}),
				(e.prototype.withAdapterTimeout = function(e) {
					return (this.adapterTimeout = e && Math.round(e)), this;
				}),
				(e.prototype.withCachedBidsReturned = function(e) {
					return (this.cachedBidsReturned = e), this;
				}),
				(e.prototype.withTimeToFirstByte = function(e) {
					return (this.timeToFirstByte = e && Math.round(e)), this;
				}),
				(e.prototype.withRequestGroupId = function(e) {
					return (this.requestGroupId = e), this;
				}),
				(e.prototype.withSid = function(e) {
					return (this.sid = e), this;
				}),
				(e.prototype.addSlot = function(e, t, i, n) {
					var o =
						0 <
						this.cachedBidsReturned.filter(function(e) {
							return e.impid === i && e.zoneid === t;
						}).length;
					return (
						this.slots.push(new DirectBiddingMetricSlot(e, t, i, o, n)), this
					);
				}),
				(e.prototype.build = function() {
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
							this.sid
						)
					);
				}),
				e
			);
		})(),
		DirectBiddingMetricRequestBuilder = (function() {
			function e(e, t, i, n, o) {
				(this.urlBuilder = e),
					(this.profileId = t),
					(this.adapterVersion = n),
					(this.wrapperVersion = o),
					(this.feedbacks = i);
			}
			return (
				(e.prototype.getRequest = function() {
					return { feedbacks: this.feedbacks };
				}),
				(e.prototype.getUrl = function() {
					return this.urlBuilder.buildCsmUrl(
						this.profileId,
						this.adapterVersion,
						this.wrapperVersion
					);
				}),
				e
			);
		})(),
		CacheBusterGenerator = (function() {
			function e() {}
			return (
				(e.generateCacheBuster = function() {
					return Math.floor(99999999999 * Math.random());
				}),
				e
			);
		})(),
		IntegrationMode,
		Hf;
	function parse(e) {
		switch (e.toLowerCase()) {
			case "amp":
				return IntegrationMode.AMP;
			default:
				return IntegrationMode.Unspecified;
		}
	}
	(Hf = IntegrationMode || (IntegrationMode = {})),
		(Hf[(Hf.Unspecified = 0)] = "Unspecified"),
		(Hf[(Hf.AMP = 1)] = "AMP");
	var DirectBiddingUrlBuilder = (function() {
			function a(e) {
				void 0 === e && (e = !1), (this.auditMode = e);
			}
			return (
				(a.prototype.buildUrl = function(e, t, i, n, o) {
					void 0 === i && (i = IntegrationMode.Unspecified);
					var r = a.CRITEO_BIDDER_URL + this.getHandlerPath();
					return (
						(r += "?ptv=" + PublisherTagVersion),
						!0 === t.isAdBlocked && (r += "&abp=1"),
						(r = this.appendCommonParameters(r, e, n, o)),
						(r += t.ctoIdOnPublisherDomain
							? "&idcpy=" + t.ctoIdOnPublisherDomain
							: ""),
						(r += t.idfs ? "&idfs=" + t.idfs : ""),
						(r += t.secureId ? "&sid=" + t.secureId : ""),
						(r += t.isOptOut ? "&optout=1" : ""),
						(r += t.bundle ? "&bundle=" + t.bundle : ""),
						i !== IntegrationMode.Unspecified && (r += "&im=" + i),
						(r += t.silentModeIgnored ? "&smi=1" : ""),
						(r += "&cb=" + String(CacheBusterGenerator.generateCacheBuster())),
						(r += t.getContextFlags())
					);
				}),
				(a.prototype.buildCsmUrl = function(e, t, i) {
					var n = a.CRITEO_BIDDER_URL + a.CRITEO_CSM_HANDLER;
					return (
						(n += "?ptv=" + PublisherTagVersion),
						this.appendCommonParameters(n, e, t, i)
					);
				}),
				(a.prototype.appendCommonParameters = function(e, t, i, n) {
					return (
						(e += "&profileId=" + String(t)),
						void 0 !== i && (e += "&av=" + String(i)),
						void 0 !== n && (e += "&wv=" + encodeURIComponent(n)),
						e
					);
				}),
				(a.prototype.getHandlerPath = function() {
					return this.auditMode
						? a.CRITEO_BIDDER_AUDIT_HANDLER
						: a.CRITEO_BIDDER_HANDLER;
				}),
				(a.CRITEO_BIDDER_URL = "https://bidder.criteo.com/"),
				(a.CRITEO_BIDDER_HANDLER = "cdb"),
				(a.CRITEO_CSM_HANDLER = "csm"),
				(a.CRITEO_BIDDER_AUDIT_HANDLER = "prebid/audit"),
				a
			);
		})(),
		DirectBiddingMetricsManager = (function() {
			function o(e, t, i, n) {
				(this.profileId = e),
					(this.adapterVersion = t),
					(this.wrapperVersion = i),
					(this.localStorageHelper = n || new LocalStorageHelper()),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage());
			}
			return (
				(o.prototype.getMetrics = function(e) {
					if (this.localStorageEnabled) {
						var t = o.METRICS_STORAGE_KEY,
							i = this.localStorageHelper.getItem(t),
							n = i ? tryParseJson(i) : [];
						return e && this.localStorageHelper.removeItem(t), n;
					}
					return [];
				}),
				(o.prototype.setMetrics = function(e) {
					if (this.localStorageEnabled) {
						var t = o.METRICS_STORAGE_KEY;
						this.localStorageHelper.setItem(t, JSON.stringify(e), 36e5);
					}
				}),
				(o.prototype.storeMetric = function(e) {
					var t = this;
					if (this.localStorageEnabled) {
						var i = this.getMetrics(!1);
						i.push(e), this.setMetrics(i);
						var n = ((e && e.adapterTimeout) || 2e3) + 1e3;
						setTimeout(function() {
							t.sendMetrics();
						}, n);
					}
				}),
				(o.prototype.sendMetrics = function() {
					var e = this.getMetrics(!0);
					if (!(e.length <= 0)) {
						var t = new DirectBiddingMetricRequestBuilder(
								new DirectBiddingUrlBuilder(),
								this.profileId,
								e,
								this.adapterVersion,
								this.wrapperVersion
							),
							i = t.getUrl(),
							n = JSON.stringify(t.getRequest());
						navigator.sendBeacon && navigator.sendBeacon(i, n);
					}
				}),
				(o.METRICS_STORAGE_KEY = "criteo_pt_cdb_metrics"),
				o
			);
		})(),
		DirectBiddingRequestBuilder = (function() {
			function t(e, t, i, n, o, r, a, s, d, c, l) {
				(this.slots = e),
					(this.context = t),
					(this.metricsManager = i),
					(this.urlBuilder = n),
					(this.profileId = o),
					(this.integrationMode = r || IntegrationMode.Unspecified),
					(this.networkId = a),
					(this.adapterVersion = s),
					(this.privacyWrapper = d),
					(this.wrapperVersion = c),
					(this.viewportComputer = l);
			}
			return (
				(t.prototype.isValid = function() {
					return 0 < this.slots.length;
				}),
				(t.prototype.getRequest = function() {
					for (var e = [], t = 0, i = this.slots; t < i.length; t++) {
						var n = i[t],
							o = { slotid: n.slotId, impid: n.impId };
						if (
							(void 0 !== n.zoneId && (o.zoneid = n.zoneId),
							void 0 !== n.nativeCallback && (o.native = !0),
							void 0 !== n.transactionId && (o.transactionid = n.transactionId),
							void 0 !== n.publisherSubId &&
								(o.publishersubid = n.publisherSubId),
							void 0 !== n.sizes)
						) {
							for (var r = [], a = 0, s = n.sizes; a < s.length; a++) {
								var d = s[a];
								r.push(d.width + "x" + d.height);
							}
							o.sizes = r;
						}
						if (void 0 !== n.video) {
							var c = {
								playersizes: this.parsePlayerSizes(n.video.playersize),
								mimes: n.video.mimes,
								protocols: n.video.protocols,
								maxduration: n.video.maxduration,
								api: n.video.api,
								skip: n.video.skip,
								placement: n.video.placement,
								playbackmethod: n.video.playbackmethod,
								minduration: n.video.minduration,
								startdelay: n.video.startdelay
							};
							o.video = c;
						}
						if (void 0 !== this.viewportComputer) {
							var l = this.viewportComputer.getSlotPosition(n);
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
						var f = this.viewportComputer.getViewport();
						p.viewport = {
							width: f.width,
							height: f.height,
							scrollTop: f.scrollTop,
							scrollLeft: f.scrollLeft
						};
					}
					return p;
				}),
				(t.parsePlayerSize = function(e) {
					return e[0] + "x" + e[1];
				}),
				(t.prototype.parsePlayerSizes = function(e) {
					return Array.isArray(e[0])
						? e.map(function(e) {
								return t.parsePlayerSize(e);
						  })
						: [t.parsePlayerSize(e)];
				}),
				(t.prototype.getUrl = function() {
					return this.urlBuilder.buildUrl(
						this.profileId,
						this.context,
						this.integrationMode,
						this.adapterVersion,
						this.wrapperVersion
					);
				}),
				t
			);
		})();
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
				var n = t[i];
				if (n.name === e && n.duration) return Math.round(n.duration);
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
	var DirectBiddingTimer = (function() {
			function e(e, t, i) {
				(this.hasSetTargetingBeenCalled = !1),
					(this.builder = e),
					(this.timer =
						void 0 !== t
							? TimeMeasurer.CreateWithStartTime(t)
							: TimeMeasurer.CreateRunning());
				var n = this.timer.elapsed();
				this.builder.withAdapterStartElapsed(n),
					this.builder.withPageLoadElapsed(
						TimeMeasurer.TimeSincePageLoad() - n
					),
					void 0 !== i && this.builder.withAdapterTimeout(i);
			}
			return (
				(e.prototype.sendRequest = function(e) {
					(this.url = e),
						(this.sendTime = TimeMeasurer.CreateRunning()),
						this.builder.withCdbCallStartElapsed(this.timer.elapsed());
				}),
				(e.prototype.requestReceived = function(e) {
					void 0 === e && (e = !1),
						this.builder.withElapsed(
							getPreciseRequestDuration(this.url) || this.sendTime.elapsed()
						),
						this.builder.withCdbCallEndElapsed(this.timer.elapsed()),
						this.builder.withIsTimeout(e);
				}),
				(e.prototype.setTargeting = function() {
					this.hasSetTargetingBeenCalled ||
						(this.builder.withSetTargetingElapsed(this.timer.elapsed()),
						(this.hasSetTargetingBeenCalled = !0));
				}),
				(e.prototype.finish = function(e, t) {
					if (
						(this.builder.withAdapterEndElapsed(this.timer.elapsed()),
						this.builder.withSid(e),
						this.builder.withRequestGroupId(generateUuid()),
						t && 0 !== t.length)
					)
						for (var i = 0, n = t; i < n.length; i++) {
							var o = n[i];
							this.builder.addSlot(o.imp_id, o.zone_id, o.ad_unit_id, o.is_dsc);
						}
					else this.builder.addSlot("");
					return (
						this.builder.withTimeToFirstByte(this.computeTimeToFirstByte()),
						this.build()
					);
				}),
				(e.prototype.computeTimeToFirstByte = function() {
					if (void 0 !== window.performance) {
						var e = window.performance.getEntriesByType("resource");
						if (void 0 !== e) {
							var t = e.filter(function(e) {
								return 0 <= e.name.indexOf("cdb");
							});
							if (void 0 !== t && 0 < t.length) {
								var i = t[t.length - 1],
									n = i.responseStart,
									o = i.requestStart;
								if (void 0 !== n && void 0 !== o) return n - o;
							}
						}
					}
				}),
				(e.prototype.build = function() {
					return this.builder.build();
				}),
				e
			);
		})(),
		__extends$2 = ((th = function(e, t) {
			return (th =
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
			th(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		th,
		DirectBiddingEvent = (function(h) {
			function f(e, t, i, n, o, r, a, s, d, c, l, u) {
				var p = h.call(this, f.NAME) || this;
				return (
					(p.profileId = e),
					(p.urlBuilder = t),
					(p.slots = i),
					(p.metricBuilder = new DirectBiddingMetricBuilder()),
					(p.metricsManager = u || new DirectBiddingMetricsManager(e)),
					(p.callbackSuccess = n),
					(p.callbackError = o),
					(p.callbackTimeout = r),
					(p.timeout = a),
					(p.networkId = s),
					(p.integrationMode = d),
					(p.adapterVersion = c),
					(p.viewportComputer = l),
					p
				);
			}
			return (
				__extends$2(f, h),
				(f.prototype.setGDPRConsent = function(e) {
					this.gdprConsent = e;
				}),
				(f.prototype.setCCPAIabConsent = function(e) {
					this.ccpaIabConsent = e;
				}),
				(f.prototype.getMetricBuilder = function() {
					return this.metricBuilder;
				}),
				(f.prototype.eval = function(e) {
					this.evalWithTimeout(e, void 0);
				}),
				(f.prototype.evalWithTimeout = function(e, t) {
					var n = this,
						i = f.getCriteoAdapterBidRequest(),
						o = f.getRequestAuctionStart(i),
						r = t || resolvePrebidTimeout(i && i.timeout),
						a = new DirectBiddingTimer(this.metricBuilder, o, r),
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
									a.requestReceived();
									var t = tryParseJson(e) || {},
										i = extractExtraData(t);
									void 0 !== n.callbackSuccess &&
										n.callbackSuccess(JSON.stringify(t), i),
										n.metricsManager.storeMetric(a.finish(t.sid, i.slots));
								},
								function(e, t) {
									a.requestReceived(),
										void 0 !== n.callbackError && n.callbackError(e, t),
										n.metricsManager.storeMetric(a.finish());
								},
								function() {
									a.requestReceived(!0),
										void 0 !== n.callbackTimeout && n.callbackTimeout(),
										n.metricsManager.storeMetric(a.finish());
								},
								this.timeout
							);
					} else this.callbackError(void 0, void 0);
				}),
				(f.getCriteoAdapterBidRequest = function() {
					try {
						return window.pbjs._bidsRequested.find(function(e) {
							return "criteo" === e.bidderCode;
						});
					} catch (e) {
						return;
					}
				}),
				(f.getRequestAuctionStart = function(e) {
					return e && e.auctionStart;
				}),
				(f.NAME = "directbidding"),
				f
			);
		})(AbstractEvent),
		__extends$3 = ((oi = function(e, t) {
			return (oi =
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
			oi(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		oi,
		DirectBiddingEventWithCaching = (function(v) {
			function m(e, t, i, n, o, r, a, s, d, c, l, u, p, h) {
				var f = v.call(this, m.NAME) || this,
					g = Math.max(10 * (a || 3e3), 3e3);
				return (
					(f.cache = new DirectBiddingCache(
						window.criteo_pubtag.context,
						i,
						s
					)),
					(f.directBiddingEvent = new DirectBiddingEvent(
						e,
						t,
						f.cache.filterNoBidSlots(i),
						function(e, t) {
							return f.onSuccess(e, t);
						},
						function(e, t) {
							return f.onError(e, t);
						},
						function() {
							return f.onHttpTimeout();
						},
						g,
						s,
						d,
						c,
						l,
						u
					)),
					(f.slots = i),
					(f.callbackSuccess = n),
					(f.callbackError = o),
					(f.callbackTimeout = r),
					(f.timeout = a),
					(f.hasTimeouted = !1),
					(f.hasResponded = !1),
					(f.gdprPrivacyProvider = p || new GDPRPrivacyProvider(window)),
					(f.ccpaPrivacyProvider = h || new CCPAPrivacyProvider(window)),
					f
				);
			}
			return (
				__extends$3(m, v),
				(m.prototype.eval = function(t) {
					var i = this,
						e = this.gdprPrivacyProvider.readyToRetrieve(),
						n = this.ccpaPrivacyProvider.readyToRetrieve();
					if (e || n) {
						var o,
							r,
							a = [],
							s = 0;
						e &&
							(a.push(GDPRPrivacyProvider),
							(s = Math.max(s, parseInt("10000", 10)))),
							n &&
								(a.push(CCPAPrivacyProvider),
								(s = Math.max(s, parseInt("50", 10)))),
							e &&
								this.gdprPrivacyProvider.retrieveGDPRConsent(function(e) {
									a.splice(a.indexOf("GDPR"), 1),
										0 === a.length ? i.evalWithCmp(t, e, r) : (o = e);
								}, s),
							n &&
								this.ccpaPrivacyProvider.retrieveCCPAConsent(function(e) {
									a.splice(a.indexOf("CCPA"), 1),
										0 === a.length ? i.evalWithCmp(t, o, e) : (r = e);
								}, s);
					} else this.evalWithCmp(t, void 0, void 0);
				}),
				(m.prototype.evalWithCmp = function(e, t, i) {
					var n = this;
					if (this.cache.silentModeEnabled())
						return (
							Log.Debug(
								"Request ignored because the global silent mode is enabled"
							),
							void this.callbackSuccess("", void 0)
						);
					setTimeout(function() {
						return n.onTimeout();
					}, this.timeout || 3e3),
						this.directBiddingEvent.setGDPRConsent(t),
						this.directBiddingEvent.setCCPAIabConsent(i),
						this.directBiddingEvent.evalWithTimeout(e, this.timeout);
				}),
				(m.prototype.onSuccess = function(e, t) {
					if (((this.hasResponded = !0), void 0 !== t)) {
						var i = tryParseJson(e);
						this.cache.handleResponse(this.slots, i, t, this.hasTimeouted);
					}
					this.hasTimeouted || this.callbackSuccess(e, t),
						this.cache.clearExpiredItems();
				}),
				(m.prototype.onError = function(e, t) {
					(this.hasResponded = !0),
						this.hasTimeouted || this.callbackError(e, t),
						this.cache.clearExpiredItems();
				}),
				(m.prototype.onHttpTimeout = function() {
					(this.hasResponded = !0),
						this.hasTimeouted || this.callbackTimeout(),
						this.cache.clearExpiredItems();
				}),
				(m.prototype.onTimeout = function() {
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
							  this.directBiddingEvent
									.getMetricBuilder()
									.withCachedBidsReturned(e),
							  this.callbackSuccess(JSON.stringify({ slots: e }), void 0));
					}
				}),
				(m.prototype.getMetricBuilder = function() {
					return this.directBiddingEvent.getMetricBuilder();
				}),
				(m.prototype.getBidCache = function() {
					return this.cache;
				}),
				(m.NAME = "directbidding"),
				m
			);
		})(AbstractEvent);
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
				n =
					window.innerHeight ||
					document.documentElement.clientHeight ||
					document.body.clientHeight,
				o = 0,
				r = e;
			o < r.length;
			o++
		) {
			for (
				var a = r[o],
					s = a.getSlotElementId(),
					d = [],
					c = 0,
					l = a.getSizes(i, n) || a.getSizes();
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
				for (var t, i = 1, n = arguments.length; i < n; i++)
					for (var o in (t = arguments[i]))
						Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
				return e;
			}).apply(this, arguments);
	};
	function createEmptyDFPTargeting() {
		return createDFPTargeting(null, null);
	}
	function createDFPTargeting(e, t, i) {
		var n = { crt_pb: [e], crt_bidid: [t] };
		return void 0 !== i && (n = __assign({}, n, { crt_deal: [i] })), n;
	}
	var DFPKeyValueTargeter = (function() {
		function e() {
			void 0 === window.googletag && (window.googletag = {}),
				(this.googletag = window.googletag),
				(this.googletag.cmd = this.googletag.cmd || []);
		}
		return (
			(e.prototype.setKeyValuesForAllSlots = function(t) {
				var i = this;
				this.googletag.cmd.push(function() {
					for (var e in t)
						t.hasOwnProperty(e) &&
							(i.googletag.pubads().clearTargeting(e),
							i.googletag.pubads().setTargeting(e, t[e] + ""));
				});
			}),
			(e.prototype.setKeyValuePerSlot = function(t, i) {
				var n = this.googletag
					.pubads()
					.getSlots()
					.filter(function(e) {
						return e.getSlotElementId() === t;
					});
				0 === n.length
					? Log.Warning("No googletag slot found for slotId: " + t)
					: 1 < n.length
						? Log.Warning("More than one googletag slot found for slotId: " + t)
						: this.googletag.cmd.push(function() {
								for (var e in i)
									i.hasOwnProperty(e) &&
										(n[0].clearTargeting(e), n[0].setTargeting(e, i[e] + ""));
						  });
			}),
			(e.prototype.resetKeyValuesForSlots = function(t) {
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
			e
		);
	})();
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
	var BidEventTarget = function() {},
		__extends$4 = ((fk = function(e, t) {
			return (fk =
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
			fk(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		fk,
		BidEventContainerTarget = (function(_super) {
			function BidEventContainerTarget(e, t) {
				var i = _super.call(this) || this;
				i.containerId = t;
				var n = e.getElementById(t);
				return (
					n
						? (i.element = n)
						: Log.Error("Target element '" + t + "' not found in the document"),
					i
				);
			}
			return (
				__extends$4(BidEventContainerTarget, _super),
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
		__extends$5 = ((xk = function(e, t) {
			return (xk =
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
			xk(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		xk,
		BidEventDocumentTarget = (function(i) {
			function e(e) {
				var t = i.call(this) || this;
				return (t.document = e), t;
			}
			return (
				__extends$5(e, i),
				(e.prototype.ResizeFrame = function(e, t) {
					if (
						this.document.defaultView &&
						this.document.defaultView.frameElement
					) {
						var i = this.document.defaultView.frameElement;
						(i.width = e.toString()), (i.height = t.toString());
					}
				}),
				(e.prototype.Write = function(e) {
					this.document.open(), this.document.write(e), this.document.close();
				}),
				(e.prototype.LoadScript = function(e) {
					this.Write(
						"<script type='text/javascript' src='" + e + "'></script>"
					);
				}),
				e
			);
		})(BidEventTarget),
		__extends$6 = ((Rk = function(e, t) {
			return (Rk =
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
			Rk(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Rk,
		Custom = (function(i) {
			function n(e) {
				var t = i.call(this, n.NAME) || this;
				return (t.callback = e), t;
			}
			return (
				__extends$6(n, i),
				(n.prototype.eval = function(e) {
					this.callback && this.callback.apply(this);
				}),
				(n.NAME = "genericEvent"),
				n
			);
		})(AbstractEvent),
		BidResponseSlot = (function() {
			function e(e, t, i, n, o, r, a) {
				(this.id = this.generateRandomId()),
					(this.slotId = e),
					(this.impressionId = t),
					(this.cpm = i),
					(this.width = n),
					(this.height = o),
					(this.zoneId = r),
					(this.dealCode = a);
			}
			return (
				(e.prototype.generateRandomId = function() {
					return Math.random()
						.toString(36)
						.replace(/[^a-z]+/g, "")
						.substr(0, 6);
				}),
				e
			);
		})(),
		__extends$7 = ((nl = function(e, t) {
			return (nl =
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
			nl(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		nl,
		DisplayUrlBidResponseSlot = (function(c) {
			function e(e, t, i, n, o, r, a, s) {
				var d = c.call(this, e, t, i, n, o, r, s) || this;
				return (d.displayUrl = a), d;
			}
			return (
				__extends$7(e, c),
				(e.prototype.GenerateEvent = function(e) {
					var t = this;
					return (
						e.ResizeFrame(this.width, this.height),
						new Custom(function() {
							return e.LoadScript(t.displayUrl);
						})
					);
				}),
				(e.prototype.GenerateMessage = function() {
					return { displayUrl: this.displayUrl };
				}),
				e
			);
		})(BidResponseSlot),
		__extends$8 = ((Ll = function(e, t) {
			return (Ll =
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
			Ll(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Ll,
		HtmlCreativeBidResponseSlot = (function(c) {
			function e(e, t, i, n, o, r, a, s) {
				var d = c.call(this, e, t, i, n, o, r, s) || this;
				return (d.creative = a), d;
			}
			return (
				__extends$8(e, c),
				(e.prototype.GenerateEvent = function(e) {
					var t = this;
					return (
						e.ResizeFrame(this.width, this.height),
						new Custom(function() {
							return e.Write(t.creative);
						})
					);
				}),
				(e.prototype.GenerateMessage = function() {
					return { creative: this.creative };
				}),
				e
			);
		})(BidResponseSlot),
		LineItemRange = (function() {
			function h(e, t, i) {
				(this.lowerBound = e), (this.upperBound = t), (this.increment = i);
			}
			return (
				(h.createLineItemRangesFromString = function(e) {
					for (var t = [], i = 0, n = e.split(";"); i < n.length; i++) {
						var o = n[i],
							r = o.split(".."),
							a = h.roundToDecimal(r[0], 2),
							s = r[1].split(":"),
							d = h.roundToDecimal(s[0], 2),
							c = h.roundToDecimal(s[1], 2);
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
								? t.push(new h(a, d, c))
								: Log.Warning(
										"Range (" +
											l +
											") is not divisible by increment (" +
											c +
											")"
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
				(h.getDefaultDenseLineItemRanges = function() {
					return [new h(0, 3, 0.01), new h(3, 8, 0.05), new h(8, 20, 0.5)];
				}),
				(h.computeLineItemPricebandValue = function(e, t) {
					0 === t.length && (t = h.getDefaultDenseLineItemRanges());
					for (var i = 0, n = t; i < n.length; i++) {
						var o = n[i];
						if (e <= o.upperBound && e > o.lowerBound) {
							var r = Math.floor(e / o.increment + 1e-4) * o.increment;
							return h.formatPriceBand(r);
						}
					}
					return e < t[0].lowerBound
						? void 0
						: e === t[0].lowerBound
							? h.formatPriceBand(t[0].lowerBound)
							: h.formatPriceBand(t[t.length - 1].upperBound);
				}),
				(h.formatPriceBand = function(e) {
					return e.toFixed(2);
				}),
				(h.roundToDecimal = function(e, t) {
					var i = parseFloat(e),
						n = Math.pow(10, t);
					return Math.round(i * n) / n;
				}),
				h
			);
		})(),
		__extends$9 = ((Pm = function(e, t) {
			return (Pm =
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
			Pm(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Pm,
		NativeBidResponseSlot = (function(l) {
			function e(e, t, i, n, o, r, a, s, d) {
				var c = l.call(this, e, t, i, n, o, r, d) || this;
				return (c.nativeCallback = a), (c.nativePayload = s), c;
			}
			return (
				__extends$9(e, l),
				(e.prototype.GenerateEvent = function(e) {
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
				(e.prototype.GenerateMessage = function() {
					return { nativePayload: this.nativePayload };
				}),
				e
			);
		})(BidResponseSlot),
		InputParameters = (function() {
			function e() {
				var t = this;
				(this.integrationMode = IntegrationMode.Unspecified),
					(this.paramParser = {}),
					this.addParameter("integrationMode", function(e) {
						t.integrationMode = parse(e);
					});
			}
			return (
				(e.prototype.addParameter = function(e, t) {
					this.paramParser[e.toLowerCase()] = t;
				}),
				(e.prototype.tryFillParameters = function(e) {
					for (var t in e)
						if (void 0 !== e[t]) {
							var i = t.toLowerCase();
							this.paramParser[i]
								? this.paramParser[i](e[t])
								: Log.Warning("Unknown parameter: " + t);
						}
				}),
				e
			);
		})(),
		__extends$10 = ((vn = function(e, t) {
			return (vn =
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
			vn(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		vn,
		RenderAdInputParameters = (function(i) {
			function e(e) {
				var t = i.call(this) || this;
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
					i.prototype.tryFillParameters.call(t, e),
					t
				);
			}
			return __extends$10(e, i), e;
		})(InputParameters),
		StandaloneAdBlockFlagManager = (function() {
			function t() {
				(this.localStorageHelper = new LocalStorageHelper()),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage());
			}
			return (
				(t.create = function() {
					return new t();
				}),
				(t.prototype.adBlockFlagEnabled = function() {
					if (!this.localStorageEnabled) return !1;
					var e = t.ADBLOCK_FLAG_KEY;
					return null !== this.localStorageHelper.getItem(e);
				}),
				(t.prototype.enableAdBlockFlag = function() {
					if (this.localStorageEnabled) {
						var e = t.ADBLOCK_FLAG_KEY;
						this.localStorageHelper.setItem(e, "1", t.ADBLOCK_FLAG_LIFETIME);
					}
				}),
				(t.prototype.disableAdBlockFlag = function() {
					if (this.localStorageEnabled) {
						var e = t.ADBLOCK_FLAG_KEY;
						this.localStorageHelper.removeItem(e);
					}
				}),
				(t.ADBLOCK_FLAG_KEY = "criteo_adblock_flag"),
				(t.ADBLOCK_FLAG_LIFETIME = 864e5),
				t
			);
		})(),
		DirectBiddingSlot = function(e, t, i, n, o, r, a, s) {
			(this.slotId = generateUuid().replace(/-/g, "")),
				(this.impId = e),
				(this.zoneId = t),
				(this.nativeCallback = i),
				(this.transactionId = n),
				(this.sizes = o),
				(this.publisherSubId = r),
				(this.mediaTypes = a),
				(this.video = s);
		},
		__extends$11 = (($n = function(e, t) {
			return ($n =
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
			$n(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		$n,
		PlacementInputParameters = (function(t) {
			function e(e) {
				var o = t.call(this) || this;
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
							var n = i[t].split("x");
							o.sizes.push(new Size(parseInt(n[0], 10), parseInt(n[1], 10)));
						}
					}),
					o.addParameter("nativecallback", function(e) {
						o.nativeCallback = e;
					}),
					o.addParameter("publisherSubId", function(e) {
						o.publisherSubId = e;
					}),
					t.prototype.tryFillParameters.call(o, e),
					o
				);
			}
			return __extends$11(e, t), e;
		})(InputParameters),
		__extends$12 = ((xo = function(e, t) {
			return (xo =
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
			xo(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		xo,
		StandaloneInputParameters = (function(i) {
			function e(e) {
				var t = i.call(this) || this;
				return (
					(t.placements = void 0),
					(t.networkId = void 0),
					t.addParameter("networkId", function(e) {
						t.networkId = e;
					}),
					t.addParameter("placements", function(e) {
						t.placements = t.deserializePlacementInput(e);
					}),
					i.prototype.tryFillParameters.call(t, e),
					t
				);
			}
			return (
				__extends$12(e, i),
				(e.prototype.deserializePlacementInput = function(e) {
					for (var t = [], i = 0, n = e; i < n.length; i++) {
						var o = n[i],
							r = new PlacementInputParameters(o);
						t.push(
							new DirectBiddingSlot(
								r.slotId,
								r.zoneId,
								r.nativeCallback,
								void 0,
								r.sizes,
								r.publisherSubId
							)
						);
					}
					return t;
				}),
				e
			);
		})(InputParameters),
		StandalonePlaceholder = (function() {
			function u() {}
			return (
				(u.clearState = function() {
					this.cloneByImpressionId = {};
				}),
				(u.tryInsertPlaceholder = function(e) {
					var t = document.getElementById(e);
					if (null === t) return !1;
					if ((t.appendChild(this.createPlaceholder()), this.isVisible(t)))
						return !0;
					this.removePlaceholder(e);
					var i = t.parentElement;
					if (null === i) return !1;
					var n = this.createClone(t);
					return (
						i.insertBefore(n, t),
						n.appendChild(this.createPlaceholder()),
						this.isVisible(n)
							? ((this.cloneByImpressionId[e] = n), !0)
							: (i.removeChild(n), !1)
					);
				}),
				(u.isVisible = function(e) {
					return (
						0 !== e.offsetWidth &&
						0 !== e.offsetHeight &&
						0 !== e.getClientRects().length
					);
				}),
				(u.createClone = function(e) {
					var t = e.cloneNode(!1);
					return (t.id = this.generateRandomId()), (t.className = ""), t;
				}),
				(u.generateRandomId = function() {
					for (
						var e = "1234567890abcdefghijklmnopqrstuvwxyz", t = "", i = 0;
						i < 20;
						i++
					) {
						var n = Math.floor(Math.random() * e.length);
						t += e.charAt(n);
					}
					return t;
				}),
				(u.createPlaceholder = function() {
					var e = document.createElement("div");
					return (
						(e.style.width = "1px"),
						(e.style.height = "1px"),
						(e.style.display = "block"),
						(e.className = u.PLACEHOLDER_NAME),
						e
					);
				}),
				(u.removePlaceholder = function(e) {
					var t = this.cloneByImpressionId[e];
					if (void 0 === t) {
						var i = document.getElementById(e);
						if (null !== i)
							for (
								var n = 0, o = i.getElementsByClassName(u.PLACEHOLDER_NAME);
								n < o.length;
								n++
							) {
								var r = o[n];
								null !== r.parentNode && r.parentNode.removeChild(r);
							}
					} else null !== t.parentNode && t.parentNode.removeChild(t);
				}),
				(u.insertAdIFrame = function(e) {
					var t,
						i = this.cloneByImpressionId[e];
					if (void 0 !== i) t = i;
					else {
						var n = document.getElementById(e);
						if (null === n) return null;
						t = n;
					}
					for (
						var o = 0, r = t.getElementsByClassName(u.PLACEHOLDER_NAME);
						o < r.length;
						o++
					) {
						for (var a = r[o], s = 0, d = a.childNodes; s < d.length; s++) {
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
				(u.createAdIFrame = function() {
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
				(u.removePlaceholders = function(e, t) {
					void 0 === t && (t = []);
					for (var i = 0, n = e; i < n.length; i++) {
						var o = n[i].impId;
						-1 === t.indexOf(o) && u.removePlaceholder(o);
					}
				}),
				(u.tryInsertPlaceholders = function(e) {
					for (var t = [], i = 0, n = e; i < n.length; i++) {
						var o = n[i],
							r = o.impId;
						u.tryInsertPlaceholder(r) && t.push(o);
					}
					return t;
				}),
				(u.PLACEHOLDER_NAME = "criteo_placeholder"),
				(u.cloneByImpressionId = {}),
				u
			);
		})(),
		DirectBiddingPosition = function(e, t) {
			(this.top = e), (this.left = t);
		},
		DirectBiddingViewport = function(e, t, i, n) {
			(this.width = e),
				(this.height = t),
				(this.scrollTop = i),
				(this.scrollLeft = n);
		},
		DomManipulationTools = (function() {
			function e() {}
			return (
				(e.getHighestAccessibleWindow = function(e) {
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
				(e.getHighestAccessibleUrl = function(e) {
					var t = e.topFrame;
					if (!e.err) return t.location.href;
					try {
						var i = t.top.location.href;
						if (i) return i;
					} catch (e) {}
					try {
						var n = t.location.ancestorOrigins;
						if (n) return n[n.length - 1];
					} catch (e) {}
					return t.document.referrer;
				}),
				(e.inIframe = function() {
					try {
						return window.self !== window.top;
					} catch (e) {
						return !0;
					}
				}),
				e
			);
		})(),
		ViewportComputer = (function() {
			function e() {}
			return (
				(e.prototype.getViewport = function() {
					var e = DomManipulationTools.getHighestAccessibleWindow(window)
							.topFrame,
						t = e.document,
						i =
							e.innerWidth ||
							t.documentElement.clientWidth ||
							t.body.clientWidth,
						n =
							e.innerHeight ||
							t.documentElement.clientHeight ||
							t.body.clientHeight,
						o = t.documentElement.scrollTop || t.body.scrollTop,
						r = t.documentElement.scrollLeft || t.body.scrollLeft;
					return new DirectBiddingViewport(i, n, o, r);
				}),
				(e.prototype.getSlotPosition = function(e) {
					var t = e.impId,
						i = document.getElementById(t);
					if (null !== i) {
						var n = i.getBoundingClientRect();
						return new DirectBiddingPosition(n.top, n.left);
					}
				}),
				e
			);
		})(),
		standaloneProfileId = 184,
		standaloneAdBlockProfileId = 275;
	function RequestBids(e, t, i) {
		RequestBidsWithProfileId(e, standaloneProfileId, t, i);
	}
	function DiscoverTagsAndRequestBids(t, i, n) {
		retrieveGoogleTagPlacements(function(e) {
			e.length <= 0
				? Log.Warning(
						"No Google tag placements have been retrieved, no bid will be requested."
				  )
				: RequestBidsWithProfileId(
						{ networkId: t, placements: e },
						standaloneProfileId,
						i,
						n
				  );
		});
	}
	function RequestBidsOnGoogleTagSlots(e, t, i) {
		if ("number" == typeof e) {
			DiscoverTagsAndRequestBids((n = e), t, i);
		} else {
			var n = getParam(e, "networkId", "number"),
				o = getParam(e, "placements", "object"),
				r = getParam(e, "callback", "function"),
				a = getParam(e, "timeout", "function");
			void 0 === o
				? DiscoverTagsAndRequestBids(n, r, a)
				: RequestBidsWithProfileId(
						{ networkId: n, placements: googleSlotsToDynamicSlots(o) },
						standaloneProfileId,
						r,
						a
				  );
		}
	}
	var metricBuilders = {},
		bidCaches = {};
	function RequestBidsWithProfileId(e, t, m, i) {
		var y = new StandaloneInputParameters(e);
		if (checkInputParameters(y)) {
			var n,
				o = window.criteo_pubtag.context,
				r = StandaloneAdBlockFlagManager.create();
			if (r.adBlockFlagEnabled()) {
				(t = standaloneAdBlockProfileId), (o.isAdBlocked = !0);
				var a = StandalonePlaceholder.tryInsertPlaceholders(y.placements);
				if (0 === a.length) return;
				y.placements = a;
				var s = m;
				(m = function(e) {
					void 0 !== s && s(e),
						e.forEach(function(e) {
							var t = StandalonePlaceholder.insertAdIFrame(e.impressionId);
							null !== t && RenderAd(e.id, t.contentDocument);
						});
				}),
					(n = new ViewportComputer());
			}
			for (
				var d = function() {
						StandalonePlaceholder.removePlaceholders(y.placements),
							new AdBlocker().isAdBlocked(function(e) {
								e ? r.enableAdBlockFlag() : r.disableAdBlockFlag();
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
									for (var i = 0, n = t.invocation_codes; i < n.length; i++)
										for (
											var o = n[i], r = 0, d = o.slot_ids;
											r < d.length;
											r++
										) {
											var c = d[r];
											s[c] = o.invocation_code;
										}
								for (
									var l = function(t) {
											for (
												var e = void 0, i = 0, n = y.placements;
												i < n.length;
												i++
											) {
												var o = n[i];
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
											var r = GenerateBidResponseSlot(
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
											void 0 !== r &&
												((window.criteo_pubtag.standaloneBidder.bids[r.id] = r),
												a.push(r.impressionId));
										},
										u = 0,
										p = t.slots;
									u < p.length;
									u++
								)
									l(p[u]);
								t.granularity && SetLineItemRanges(t.granularity);
							}
							if (
								(StandalonePlaceholder.removePlaceholders(y.placements, a),
								void 0 !== m)
							) {
								for (var h = [], f = 0, g = y.placements; f < g.length; f++) {
									var v = g[f];
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
						n
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
			var e = new DirectBiddingMetricsManager(standaloneProfileId),
				t = e.getMetrics(!1),
				i = {},
				n = 0;
			n < t.length;
			++n
		)
			for (var o = 0, r = t[n].slots; o < r.length; o++) {
				i[r[o].impressionId] = n;
			}
		for (var a in metricBuilders)
			if (metricBuilders.hasOwnProperty(a)) {
				var s = metricBuilders[a],
					d = TimeMeasurer.TimeSincePageLoad() - s.pageLoadElapsed;
				s.withSetTargetingElapsed(d), a in i && (t[i[a]] = s.build());
			}
		e.setMetrics(t);
	}
	function SetDFPKeyValueTargeting() {
		var e = new DFPKeyValueTargeter();
		e.resetKeyValuesForSlots(window.criteo_pubtag.standaloneBidder.impIds);
		var t = window.criteo_pubtag.standaloneBidder.lineItemRanges,
			i = GetImpressionIdToBestBid();
		for (var n in i)
			if (i.hasOwnProperty(n)) {
				var o = ComputeDFPTargeting(i[n], t);
				void 0 !== o && e.setKeyValuePerSlot(n, o);
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
			var n =
				void 0 !== i.containerId
					? new BidEventContainerTarget(i.document, i.containerId)
					: new BidEventDocumentTarget(i.document);
			RenderAdOnTarget(i.bidId, n);
		} else Log.Error("You must provide a bidId to the RenderAd call");
	}
	function RenderAdOnTarget(e, t) {
		var i = window.criteo_pubtag.standaloneBidder.bids;
		if (i.hasOwnProperty(e)) {
			var n = i[e],
				o = n.GenerateEvent(t);
			window.criteo_pubtag.push(o),
				n.slotId in bidCaches && bidCaches[n.slotId].removeBid(n),
				delete i[e];
		} else Log.Error("Could not render bid with id: " + e);
	}
	function GetBids(e) {
		var t = window.criteo_pubtag.standaloneBidder.bids;
		if (null === t) return [];
		var i = window.criteo_pubtag.standaloneBidder.lineItemRanges,
			n = [];
		for (var o in t)
			if (t.hasOwnProperty(o)) {
				var r = t[o];
				if (
					!e ||
					!e.impressionIds ||
					-1 !== e.impressionIds.indexOf(r.impressionId)
				) {
					if (0 < i.length) {
						var a = LineItemRange.computeLineItemPricebandValue(r.cpm, i);
						r.cpm_bucket = a;
					}
					n.push(r);
				}
			}
		return n;
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
			var n = i[t];
			if (IsEmptyOrUndefined(n.impId))
				return Log.Error("Missing 'slotId' parameter in placements object"), !1;
			if (
				IsEmptyOrUndefined(n.zoneId) &&
				(IsEmptyOrUndefined(n.sizes) || IsEmptyOrUndefined(e.networkId))
			)
				return (
					Log.Error(
						"Missing zone information: specify either a zoneId or a networkId and a zone size"
					),
					!1
				);
			if (void 0 !== n.nativeCallback && "function" != typeof n.nativeCallback)
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
				var n = t[i];
				if (e.hasOwnProperty(n.impressionId))
					e[n.impressionId].cpm < n.cpm && (e[n.impressionId] = n);
				else e[n.impressionId] = n;
			}
		return e;
	}
	function GenerateBidResponseSlot(e, t, i, n, o, r, a, s, d, c, l) {
		return void 0 !== a && void 0 !== s
			? new NativeBidResponseSlot(e, t, i, n, o, r, a, s, l)
			: void 0 === d || (void 0 !== c && "<script" !== c.substr(0, 7))
				? void 0 !== c
					? new HtmlCreativeBidResponseSlot(e, t, i, n, o, r, c, l)
					: void 0
				: new DisplayUrlBidResponseSlot(e, t, i, n, o, r, d, l);
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
	var AMP = (function() {
		function s() {}
		return (
			(s.Standalone = function(o, r, a) {
				RequestBids(
					{
						integrationmode: "amp",
						placements: [
							{
								slotid: o.slot,
								zoneid: o.zone,
								sizes: [o.width + "x" + o.height]
							}
						]
					},
					function(e) {
						if ("DFP" === o.adserver) {
							s.listenForCreativeRequests(e);
							for (var t = 0, i = e; t < i.length; t++) {
								var n = ComputeStandaloneDFPTargeting(i[t], o.lineItemRanges);
								void 0 !== n && a(n);
							}
							0 === e.length && a({});
						}
						r(null);
					},
					o.timeout
				);
			}),
			(s.listenForCreativeRequests = function(s) {
				window.addEventListener(
					"message",
					function(e) {
						var t = e.data instanceof Object ? e.data : tryParseJson(e.data);
						if (t && t.bidId && e.source)
							for (var i = 0, n = s; i < n.length; i++) {
								var o = n[i];
								if (o.id === t.bidId) {
									var r = e.source,
										a = o.GenerateMessage();
									(a.message = "Criteo creative"),
										r.postMessage(JSON.stringify(a), "*");
								}
							}
					},
					!1
				);
			}),
			s
		);
	})();
	function GetIdfs() {
		return window.criteo_pubtag.context.getIdfs();
	}
	function SetIdfs(e) {
		window.criteo_pubtag.context.setIdfs(e);
	}
	function SetCeh$1(e) {
		window.criteo_pubtag.context.ceh = e;
	}
	var DirectBiddingSlotVideo = function(e, t, i, n, o, r, a, s, d, c) {
			(this.playersize = e),
				(this.mimes = t),
				(this.protocols = i),
				(this.maxduration = n),
				(this.api = o),
				(this.skip = r),
				(this.placement = a),
				(this.playbackmethod = s),
				(this.minduration = d),
				(this.startdelay = c);
		},
		PrebidMediaTypes,
		rt;
	(rt = PrebidMediaTypes || (PrebidMediaTypes = {})),
		(rt.Banner = "banner"),
		(rt.Video = "video");
	var Prebid = (function() {
			function n(e, t, i, n, o) {
				var r, a;
				(this.timer = new DirectBiddingTimer(
					new DirectBiddingMetricBuilder(),
					n.auctionStart,
					resolvePrebidTimeout(n.timeout)
				)),
					(this.auctionId = n.auctionId),
					(this.bidRequests = i),
					(this.slots = []);
				for (var s = 0, d = i; s < d.length; s++) {
					var c = d[s];
					this.slots.push(
						new DirectBiddingSlot(
							c.adUnitCode,
							c.params.zoneId,
							c.params.nativeCallback,
							c.transactionId,
							c.sizes.map(function(e) {
								return new Size(e[0], e[1]);
							}),
							c.params.publisherSubId,
							c.mediaTypes,
							this.getVideoInfoFromBidRequest(c)
						)
					),
						(r = c.params.networkId || r),
						SetCeh$1(n.ceh),
						c.params.integrationMode && (a = parse(c.params.integrationMode));
				}
				var l = {};
				n.gdprConsent &&
					(void 0 !== n.gdprConsent.consentString &&
						(l.consentData = n.gdprConsent.consentString),
					void 0 !== n.gdprConsent.gdprApplies &&
						(l.gdprApplies = !!n.gdprConsent.gdprApplies),
					n.gdprConsent.vendorData &&
						n.gdprConsent.vendorData.vendorConsents &&
						void 0 !==
							n.gdprConsent.vendorData.vendorConsents[
								CRITEO_VENDOR_ID.toString(10)
							] &&
						(l.consentGiven = !!n.gdprConsent.vendorData.vendorConsents[
							CRITEO_VENDOR_ID.toString(10)
						]));
				var u = { uspString: n.uspConsent };
				(this.metricsManager = new DirectBiddingMetricsManager(e, t, o)),
					(this.cache = new DirectBiddingCache(
						window.criteo_pubtag.context,
						this.slots,
						r
					)),
					(this.requestBuilder = new DirectBiddingRequestBuilder(
						this.cache.filterNoBidSlots(this.slots),
						window.criteo_pubtag.context,
						this.metricsManager,
						new DirectBiddingUrlBuilder(!1),
						e,
						a,
						r,
						t,
						{ ccpaIabConsent: u, gdprConsent: l },
						o
					)),
					(this.url = this.requestBuilder.getUrl()),
					(window.Criteo.prebid_adapters = window.Criteo.prebid_adapters || {}),
					(window.Criteo.prebid_adapters[this.auctionId] = this);
			}
			return (
				(n.prototype.buildCdbUrl = function() {
					return this.url;
				}),
				(n.prototype.buildCdbRequest = function() {
					if (this.cache.silentModeEnabled())
						Log.Debug(
							"Request ignored because the global silent mode is enabled"
						);
					else {
						if (this.requestBuilder.isValid())
							return (
								this.timer.sendRequest(this.url),
								this.requestBuilder.getRequest()
							);
						Log.Debug("Request ignored because it doesnt contain any slot");
					}
				}),
				(n.GetAllAdapters = function() {
					return window.Criteo.prebid_adapters;
				}),
				(n.GetAdapter = function(e) {
					var t = "string" == typeof e ? e : e.bidRequests[0].auctionId,
						i = n.GetAllAdapters();
					if (i && t in i) return i[t];
				}),
				(n.prototype.createCriteoNativeAdWithCallback = function(e, t, i) {
					return (
						(window.criteo_prebid_native_slots =
							window.criteo_prebid_native_slots || {}),
						(window.criteo_prebid_native_slots[e] = {
							callback: i,
							payload: t
						}),
						'<script type="text/javascript">\n            var win = window;\n            for (var i = 0; i < 10; ++i) {\n                win = win.parent;\n                if (win.criteo_prebid_native_slots) {\n                    var responseSlot = win.criteo_prebid_native_slots["' +
							e +
							'"];\n                    responseSlot.callback(responseSlot.payload);\n                    break;\n                }\n            }\n        </script>'
					);
				}),
				(n.prototype.getBidRequestForSlot = function(e) {
					for (var t = 0, i = this.bidRequests; t < i.length; t++) {
						var n = i[t];
						if (
							n.adUnitCode === e.impid &&
							(!n.params.zoneId || parseInt(n.params.zoneId, 10) === e.zoneid)
						)
							return n;
					}
				}),
				(n.prototype.getVideoInfoFromBidRequest = function(e) {
					if (this.hasVideoMediaType(e))
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
				(n.prototype.hasVideoMediaType = function(e) {
					return (
						void 0 !== e.params &&
						void 0 !== e.params.video &&
						(void 0 !== e.mediaTypes && void 0 !== e.mediaTypes.video)
					);
				}),
				(n.prototype.interpretResponse = function(e, t) {
					this.timer.requestReceived();
					var i = extractExtraData(e),
						n = {};
					if (void 0 !== i.slots)
						for (var o = 0, r = i.slots; o < r.length; o++) {
							n[(c = r[o]).imp_id] = c;
						}
					var a = [];
					if (e.slots && Array.isArray(e.slots))
						for (var s = 0, d = e.slots; s < d.length; s++) {
							var c = d[s],
								l = this.getBidRequestForSlot(c);
							if (l) {
								var u = l.bidId,
									p = c.ttl || (n[c.slotid] && n[c.slotid].ttl) || 60,
									h = {
										requestId: u,
										adId: generateUuid(),
										cpm: c.cpm,
										currency: c.currency,
										netRevenue: !0,
										ttl: p,
										creativeId: u,
										width: c.width,
										height: c.height,
										dealId: c.deal
									};
								if (c.native) {
									if (!l.params.nativeCallback) {
										Log.Error(
											'The slot creative is native but we miss the nativeCallback parameter to render it."' +
												c +
												'"'
										);
										continue;
									}
									h.ad = this.createCriteoNativeAdWithCallback(
										u,
										c.native,
										l.params.nativeCallback
									);
								} else
									c.video
										? ((h.vastUrl = c.displayurl),
										  (h.mediaType = PrebidMediaTypes.Video))
										: (h.ad = c.creative);
								a.push(h);
							} else
								Log.Error('Could not get bid request for slot "' + c + '"');
						}
					return (
						this.cache.handleResponse(this.slots, e, i, !1),
						this.metricsManager.storeMetric(this.timer.finish(e.sid, i.slots)),
						this.cache.clearExpiredItems(),
						a
					);
				}),
				(n.prototype.handleBidWon = function(e) {
					this.updateMetric(e, function(e) {
						e.adapterBidWon = !0;
					});
				}),
				(n.prototype.handleBidTimeout = function() {
					this.timer.requestReceived(!0),
						this.metricsManager.storeMetric(this.timer.finish()),
						this.cache.clearExpiredItems();
				}),
				(n.prototype.handleSetTargeting = function(e) {
					var t = this;
					this.timer.setTargeting(),
						this.updateMetric(e, function() {
							return t.timer.build();
						});
				}),
				(n.prototype.updateMetric = function(e, t) {
					for (
						var i = this.metricsManager.getMetrics(!1), n = 0;
						n < i.length;
						++n
					)
						for (var o = 0, r = i[n].slots; o < r.length; o++) {
							var a = r[o];
							if (a.adUnitId === e.adUnitCode) {
								var s = t(a);
								s && (i[n] = s);
							}
						}
					this.metricsManager.setMetrics(i);
				}),
				n
			);
		})(),
		__extends$13 = ((qu = function(e, t) {
			return (qu =
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
			qu(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		qu,
		ConditionalEvent = (function(r) {
			function a(e, t, i, n) {
				var o = r.call(this, a.NAME) || this;
				return (
					(o.condition = e),
					(o.eventIfTrue = t),
					(o.eventIfFalse = i),
					(o.conditionRequirement = n),
					o
				);
			}
			return (
				__extends$13(a, r),
				(a.prototype.canEval = function() {
					return (
						void 0 === this.conditionRequirement ||
						this.conditionRequirement.apply(this)
					);
				}),
				(a.prototype.eval = function(e) {
					this.condition.apply(this)
						? this.eventIfTrue.eval(e)
						: this.eventIfFalse.eval(e);
				}),
				(a.NAME = "conditionalEvent"),
				a
			);
		})(AbstractEvent),
		AdFormatType,
		Ju;
	(Ju = AdFormatType || (AdFormatType = {})),
		(Ju[(Ju.Classic = 0)] = "Classic"),
		(Ju[(Ju.StickyFooter = 1)] = "StickyFooter"),
		(Ju[(Ju.ScrollingBanner = 2)] = "ScrollingBanner");
	var CookieHelper = (function() {
			function h() {}
			return (
				(h.SetCookie = function(e, t, i, n, o) {
					void 0 === o && (o = !1);
					var r = n || document,
						a = r.location.hostname,
						s = new Date();
					s.setTime(s.getTime() + 60 * i * 60 * 1e3);
					var d = "expires=" + s.toUTCString();
					if (!o) return h.setCookieString(e, t, d, void 0, r), a;
					for (var c = a.split("."), l = 0; l < c.length; ++l) {
						var u = c.slice(c.length - l - 1, c.length).join(".");
						h.setCookieString(e, t, d, u, r);
						var p = h.GetCookie(e, n);
						if (p && p === t) return u;
					}
					return a;
				}),
				(h.DeleteCookie = function(e, t, i) {
					void 0 === i && (i = !1), h.SetCookie(e, "", 0, t, i);
				}),
				(h.GetCookie = function(e, t) {
					for (
						var i = 0, n = (t || document).cookie.split(";");
						i < n.length;
						i++
					) {
						var o = n[i],
							r = o.substr(0, o.indexOf("=")).replace(/^\s+|\s+$/g, ""),
							a = o.substr(o.indexOf("=") + 1);
						if (r === e) return decodeURIComponent(a);
					}
				}),
				(h.setCookieString = function(e, t, i, n, o) {
					var r = e + "=" + encodeURIComponent(t) + ";" + i + ";";
					n && "" !== n && (r += "domain=." + n + ";"),
						(o.cookie = r + "path=/");
				}),
				h
			);
		})(),
		AdvancedAdFormats = (function() {
			function e(e) {
				this.adFormat = e;
			}
			return (
				(e.prototype.CreateAdvancedAdFormatContainer = function(e) {
					return this.adFormat === AdFormatType.StickyFooter
						? this.CreateStickyFooterContainer(e)
						: this.adFormat === AdFormatType.ScrollingBanner
							? this.CreateScrollingBannerContainer(e)
							: void 0;
				}),
				(e.prototype.IsUserOptout = function() {
					return (
						this.adFormat === AdFormatType.StickyFooter &&
						"true" === CookieHelper.GetCookie("cto_sticky_closed")
					);
				}),
				(e.prototype.CreateStickyFooterContainer = function(e) {
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
					var n = document.createElement("div");
					if (
						(t.appendChild(n),
						(n.id = "cto_sticky"),
						(n.style.margin = "0 auto"),
						(n.style.display = "table"),
						void 0 === e || "" === e)
					)
						document.body.appendChild(t);
					else {
						var o = document.getElementById(e);
						o
							? o.appendChild(t)
							: Log.Error(
									'Target element "' + e + '" not found in the document'
							  );
					}
					return n.id;
				}),
				(e.prototype.CreateScrollingBannerContainer = function(e) {
					var t,
						i = this;
					if (void 0 === e || "" === e)
						((t = document.createElement("div")).id = "cto_scrolling"),
							document.body.appendChild(t);
					else {
						var n = document.getElementById(e);
						if (!n)
							return (
								Log.Error(
									'Target element "' + e + '" not found in the document'
								),
								e
							);
						t = n;
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
				(e.prototype.SetScrollingContainerPosition = function(e, t) {
					t - 10 <=
					(window.pageYOffset ||
						document.documentElement.scrollTop ||
						document.body.scrollTop ||
						0)
						? ((e.style.position = "fixed"), (e.style.top = "10px"))
						: ((e.style.position = "static"), (e.style.top = "auto"));
				}),
				e
			);
		})(),
		DisplayContext,
		Ev;
	(Ev = DisplayContext || (DisplayContext = {})),
		(Ev[(Ev.InFriendlyIframe = 1)] = "InFriendlyIframe"),
		(Ev[(Ev.InUnfriendlyIframe = 2)] = "InUnfriendlyIframe"),
		(Ev[(Ev.DirectIntegration = 3)] = "DirectIntegration");
	var DocumentHelper = (function() {
			function e() {}
			return (
				(e.tryWrite = function(e) {
					for (var t = [], i = 1; i < arguments.length; i++)
						t[i - 1] = arguments[i];
					return "loading" === e.readyState && (e.write.apply(e, t), !0);
				}),
				e
			);
		})(),
		ViewabilityComputer = (function() {
			function r() {}
			return (
				(r.GetAtfRatio = function(e, t) {
					var i = document.getElementById(t);
					if (e.displayContext === DisplayContext.DirectIntegration) {
						if (null !== i) return r.GetRatioAboveFold(i);
						if (
							DocumentHelper.tryWrite(
								document,
								"<div id='compute_visibility_helper' width='0px' height='0px'></div>"
							)
						) {
							var n = document.getElementById("compute_visibility_helper"),
								o = r.GetRatioAboveFold(n);
							return n.parentElement.removeChild(n), o;
						}
					}
					if (e.displayContext === DisplayContext.InFriendlyIframe)
						return r.GetRatioAboveFold(frameElement);
				}),
				(r.GetRatioAboveFold = function(e) {
					var t = new ViewportComputer().getViewport(),
						i = t.height,
						n = e.getBoundingClientRect(),
						o = t.scrollTop;
					return i >= n.bottom + o
						? 1
						: i <= n.top + o
							? 0
							: (i - n.top - o) / e.offsetHeight;
				}),
				r
			);
		})(),
		__extends$14 = ((Vv = function(e, t) {
			return (Vv =
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
			Vv(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Vv,
		DisplayEvent = (function(o) {
			function e(e, t, i) {
				var n = o.call(this, e) || this;
				return (
					(n.displayParameters = i),
					(n.urlBuilder = t),
					(n.gdprPrivacyProvider = new GDPRPrivacyProvider(window)),
					n
				);
			}
			return (
				__extends$14(e, o),
				(e.prototype.eval = function(e) {
					this.displayParameters.atfRatio = ViewabilityComputer.GetAtfRatio(
						e.context,
						this.displayParameters.containerid
					);
				}),
				(e.prototype.buildCasUrl = function(t, i, n, o, r) {
					var a = this;
					this.gdprPrivacyProvider.readyToRetrieve()
						? this.gdprPrivacyProvider.retrieveGDPRConsentForPassback(function(
								e
						  ) {
								t(a.urlBuilder.buildUrl(a.displayParameters, i, n, o, r, e));
						  })
						: t(this.urlBuilder.buildUrl(this.displayParameters, i, n, o, r));
				}),
				e
			);
		})(AbstractEvent),
		HandlerType,
		sw;
	(sw = HandlerType || (HandlerType = {})),
		(sw[(sw.AFR = 0)] = "AFR"),
		(sw[(sw.AJS = 1)] = "AJS");
	var __extends$15 = ((tw = function(e, t) {
			return (tw =
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
			tw(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		tw,
		DisplayEventAFR = (function(a) {
			function o(e, t, i) {
				var n = a.call(this, o.NAME, e, t) || this;
				return (n.respectsEyeoDeal = i), n;
			}
			return (
				__extends$15(o, a),
				(o.prototype.eval = function(t) {
					var i = this;
					a.prototype.eval.call(this, t);
					var n = this.displayParameters.containerid,
						o = this.displayParameters.callbackSuccess,
						r = this.displayParameters.callbackError;
					this.buildCasUrl(
						function(e) {
							if (t.context.isAdBlocked) {
								if (!i.respectsEyeoDeal) return;
								i.loadIframe(e, n, o, r);
							} else i.loadIframe(e, n, o, r);
						},
						t.context,
						HandlerType.AFR
					);
				}),
				(o.prototype.loadIframe = function(e, t, i, n) {
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
						n && (o.onerror = n);
					var r = document.getElementById(t);
					r
						? r.appendChild(o)
						: Log.Error('Target element "' + t + '" not found in the document');
				}),
				(o.NAME = "displayAfr"),
				o
			);
		})(DisplayEvent),
		__extends$16 = ((Ww = function(e, t) {
			return (Ww =
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
			Ww(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Ww,
		DisplayEventAsync = (function(_super) {
			function DisplayEventAsync(e, t) {
				return _super.call(this, DisplayEventAsync.NAME, e, t) || this;
			}
			return (
				__extends$16(DisplayEventAsync, _super),
				(DisplayEventAsync.prototype.eval = function(t) {
					var i = this;
					_super.prototype.eval.call(this, t);
					var n = this.displayParameters.containerid,
						o = this.displayParameters.width,
						r = this.displayParameters.height,
						e = this.displayParameters.layout,
						a = this.displayParameters.callbackSuccess,
						s = this.displayParameters.callbackError,
						d = this.displayParameters.passbackCode;
					if ("" === n || void 0 === n) Log.Error("No containerid provided");
					else if (void 0 !== e) {
						var c =
								DisplayEventAsync.CHAPI_NAME +
								"=" +
								encodeURIComponent(JSON.stringify(e)),
							l = function() {
								var e = i.getContainerSize(n, o, r);
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
						void 0 !== o && void 0 !== r
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
					var n = document.getElementById(e),
						o = DomManipulationTools.inIframe(),
						r = t || (o ? document.body.offsetWidth : n ? n.offsetWidth : 0),
						a = i || (o ? document.body.offsetHeight : n ? n.offsetHeight : 0);
					return (
						(0 === r || 0 === a || r < 80 || a < 40) && (r = a = void 0),
						{ width: r, height: a }
					);
				}),
				(DisplayEventAsync.NAME = "displayEventAsync"),
				(DisplayEventAsync.CHAPI_NAME = "publisherCreativeConfiguration"),
				DisplayEventAsync
			);
		})(DisplayEvent),
		__extends$17 = ((Ex = function(e, t) {
			return (Ex =
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
			Ex(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Ex,
		DisplayEventSync = (function(i) {
			function n(e, t) {
				return i.call(this, n.NAME, e, t) || this;
			}
			return (
				__extends$17(n, i),
				(n.prototype.eval = function(e) {
					var t = this;
					i.prototype.eval.call(this, e),
						this.buildCasUrl(function(e) {
							t.loadScriptSync(e);
						}, e.context);
				}),
				(n.prototype.loadScriptSync = function(e) {
					document.write(
						"<script type='text/javascript' src='" + e + "'></script>"
					);
				}),
				(n.NAME = "displaySync"),
				n
			);
		})(DisplayEvent),
		__extends$18 = ((Xx = function(e, t) {
			return (Xx =
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
			Xx(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Xx,
		DisplayInputParameters = (function(i) {
			function e(e) {
				var t = i.call(this) || this;
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
					i.prototype.tryFillParameters.call(t, e),
					t
				);
			}
			return (
				__extends$18(e, i),
				(e.prototype.parseAdFormat = function(e) {
					switch (e.toLowerCase()) {
						case "stickyfooter":
							return AdFormatType.StickyFooter;
						case "scrollingbanner":
							return AdFormatType.ScrollingBanner;
						default:
							return AdFormatType.Classic;
					}
				}),
				e
			);
		})(InputParameters),
		DisplayUrlBuilder = (function() {
			function c() {}
			return (
				(c.prototype.buildUrl = function(e, t, i, n, o, r) {
					var a =
						(i === HandlerType.AFR ? c.CAS_URL_AFR : c.CAS_URL_AJS) +
						"?ptv=" +
						PublisherTagVersion;
					if (!0 === t.isAdBlocked) {
						var s = this.getAbpParameter(e, t);
						a += "&abp=" + String(s);
					}
					for (var d in (i !== HandlerType.AFR &&
						(a +=
							void 0 !== e.containerid && "" !== e.containerid
								? "&containerid=" + encodeURIComponent(e.containerid)
								: ""),
					(a += "&zoneid=" + String(e.zoneid)),
					(a += n ? "&width=" + n : ""),
					(a += o ? "&height=" + o : ""),
					(a += t.ctoIdOnPublisherDomain
						? "&idcpy=" + t.ctoIdOnPublisherDomain
						: ""),
					(a += t.idfs ? "&idfs=" + t.idfs : ""),
					(a += t.secureId ? "&sid=" + t.secureId : ""),
					(a += t.isOptOut ? "&optout=1" : ""),
					(a += t.bundle ? "&bundle=" + t.bundle : ""),
					(a += "&cb=" + String(CacheBusterGenerator.generateCacheBuster())),
					(a += "&nodis=" + (t.dising ? "0" : "1")),
					(a += t.charset ? "&charset=" + t.charset : ""),
					(a += e.overridenCt0
						? "&ct0=" + encodeURIComponent(e.overridenCt0)
						: t.ct0
							? "&ct0=" + encodeURIComponent(t.ct0)
							: ""),
					(a += e.overridenWpdt0
						? "&wpdt0=" + encodeURIComponent(e.overridenWpdt0)
						: t.wpdt0
							? "&wpdt0=" + encodeURIComponent(t.wpdt0)
							: ""),
					e.publisherUrl &&
						(a += "&publisherurl=" + encodeURIComponent(e.publisherUrl)),
					(a += t.getContextFlags()),
					e.extraData))
						void 0 !== e.extraData[d] &&
							(a += "&" + d + "=" + encodeURIComponent(e.extraData[d]));
					((a += e.passbackCode ? "&dlp=1" : ""),
					e.integrationMode !== IntegrationMode.Unspecified &&
						(a += "&im=" + e.integrationMode),
					(a += "&dc=" + t.displayContext),
					void 0 !== e.atfRatio) &&
						(a += "&atfr=" + Math.round(100 * e.atfRatio) / 100);
					return (
						(a += t.highestAccessibleUrl
							? "&loc=" +
							  encodeURIComponent(t.highestAccessibleUrl).substring(0, 1600)
							: ""),
						r &&
							(void 0 !== r.consentGiven &&
								(a += "&gdprGvn=" + (r.consentGiven ? "1" : "0")),
							void 0 !== r.gdprApplies &&
								(a += "&gdprApp=" + (r.gdprApplies ? "1" : "0")),
							void 0 !== r.consentData &&
								(a += r.consentData ? "&gdprDta=" + r.consentData : "")),
						a
					);
				}),
				(c.prototype.getAbpParameter = function(e, t) {
					return (t.isAdBlocked ? 1 : 0) | (e.overrideZoneFloor ? 0 : 2);
				}),
				(c.CAS_URL_AJS = "https://cas.criteo.com/delivery/ajs.php"),
				(c.CAS_URL_AFR = "https://cas.criteo.com/delivery/afr.php"),
				c
			);
		})(),
		EyeoDealValidator = (function() {
			function a() {}
			return (
				(a.prototype.respectsEyeoDeal = function(e) {
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
						n = i.respectsAdRatioConstraint;
					return (
						n
							? ((a.atfRatio = i.newAtfRatio), (a.btfRatio = i.newBtfRatio))
							: Log.Debug(
									"The element " +
										e +
										"does not respect Eyeo acceptable ads ratio constraints"
							  ),
						n
					);
				}),
				(a.prototype.respectsSizeConstraints = function(e) {
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
								void 0 !== t &&
									Log.Error("Unknown data-ad-loc attribute : " + t),
								!0
							);
					}
				}),
				(a.prototype.getAdLocationAttribute = function(e) {
					return e.getAttribute("data-ad-loc") || void 0;
				}),
				(a.prototype.getNewRatiosFeatures = function(e) {
					var t = ViewabilityComputer.GetRatioAboveFold(e),
						i = e.offsetHeight * e.offsetWidth,
						n = screen.width * screen.height,
						o = a.atfRatio + (t * i) / n,
						r = a.btfRatio + ((1 - t) * i) / n;
					return {
						respectsAdRatioConstraint: o <= 0.15 && r <= 0.25,
						newAtfRatio: o,
						newBtfRatio: r
					};
				}),
				(a.atfRatio = 0),
				(a.btfRatio = 0),
				a
			);
		})();
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
					var n;
					(n = t.async
						? new DisplayEventAsync(new DisplayUrlBuilder(), t)
						: new DisplayEventSync(new DisplayUrlBuilder(), t)),
						window.criteo_pubtag.push(n);
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
					var n = window.criteo_pubtag.context;
					if (void 0 === n.isAdBlocked)
						new AdBlocker().isAdBlocked(function(e) {
							(n.isAdBlocked = e), window.criteo_pubtag.evalEvents();
						});
					var o,
						r,
						a = new EyeoDealValidator();
					(o = new DisplayEventAFR(
						new DisplayUrlBuilder(),
						t,
						a.respectsEyeoDeal(t.containerid)
					)),
						(r = new Custom(function() {
							t.collapseContainerIfNotAdblocked && (i.style.display = "none"),
								void 0 !== t.callIfNotAdblocked && t.callIfNotAdblocked();
						}));
					var s;
					(s = new ConditionalEvent(
						function() {
							return !0 === window.criteo_pubtag.context.isAdBlocked;
						},
						o,
						r,
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
	function isVisible(e) {
		if (e === document) return !0;
		if (!e) return !1;
		if (!e.parentNode) return !1;
		if (e.style) {
			if ("none" === e.style.display) return !1;
			if ("hidden" === e.style.visibility) return !1;
		}
		if (window.getComputedStyle) {
			var t = window.getComputedStyle(e, "");
			if ("none" === t.display) return !1;
			if ("hidden" === t.visibility) return !1;
		}
		var i = e.currentStyle;
		if (i) {
			if ("none" === i.display) return !1;
			if ("hidden" === i.visibility) return !1;
		}
		return isVisible(e.parentNode);
	}
	var Polyfills = (function() {
			function e() {}
			return (
				(e.LoadPolyfills = function() {
					e.DefineIsArray(), e.DefineIndexOf(), e.DefineFilter();
				}),
				(e.DefineIsArray = function() {
					Array.isArray ||
						(Array.isArray = function(e) {
							return "[object Array]" === Object.prototype.toString.call(e);
						});
				}),
				(e.DefineIndexOf = function() {
					Array.prototype.indexOf ||
						(Array.prototype.indexOf = function(e, t) {
							if ((void 0 === t && (t = 0), void 0 === this))
								throw new TypeError("'this' is null or not defined");
							var i = this.length;
							if (0 === i) return -1;
							if (i <= t) return -1;
							for (var n = Math.max(0 <= t ? t : i - Math.abs(t), 0); n < i; ) {
								if (n in this && this[n] === e) return n;
								n++;
							}
							return -1;
						});
				}),
				(e.DefineFilter = function() {
					Array.prototype.filter ||
						(Array.prototype.filter = function(e) {
							if (void 0 === this || void 0 === this) throw new TypeError();
							var t = this.length;
							if ("function" != typeof e) throw new TypeError();
							for (
								var i = [],
									n = 2 <= arguments.length ? arguments[1] : void 0,
									o = 0;
								o < t;
								o++
							)
								if (o in this) {
									var r = this[o];
									e.call(n, r, o, this) && i.push(r);
								}
							return i;
						});
				}),
				e
			);
		})(),
		StorageOrigin,
		Rz;
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
	(Rz = StorageOrigin || (StorageOrigin = {})),
		(Rz[(Rz.None = 0)] = "None"),
		(Rz[(Rz.Cookie = 1)] = "Cookie"),
		(Rz[(Rz.LocalStorage = 2)] = "LocalStorage");
	var CookieSynchronizer = (function() {
			function n(e, t, i) {
				(this.isDebug = t),
					(this.topWin = e),
					(this.topDoc = e.document),
					(this.localStorageHelper = new LocalStorageHelper(this.topWin)),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage()),
					(this.canWriteCookies = this.checkCookiesAreWriteable()),
					(this.topUrl = i);
			}
			return (
				(n.isSafariBrowser = function() {
					return null !== navigator.userAgent.match(n.SAFARI_CHECK_REGEX);
				}),
				(n.isAndroidBrowser = function() {
					return -1 < navigator.userAgent.toLowerCase().indexOf("android");
				}),
				(n.isFirefoxBrowser = function() {
					return -1 < navigator.userAgent.toLowerCase().indexOf("firefox");
				}),
				(n.isEdgeChromiumBrowser = function() {
					return -1 < navigator.userAgent.toLowerCase().indexOf("edg/");
				}),
				(n.isEdgeLegacyBrowser = function() {
					return -1 < navigator.userAgent.toLowerCase().indexOf("edge/");
				}),
				(n.prototype.synchronizeCriteoUid = function(e) {
					var t = this;
					if (
						(e ||
							n.isSafariBrowser() ||
							n.isAndroidBrowser() ||
							n.isFirefoxBrowser() ||
							n.isEdgeChromiumBrowser() ||
							n.isEdgeLegacyBrowser()) &&
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
				(n.prototype.appendGumIframeIfDoesNotExist = function() {
					var r = this,
						e = this.createGumIframe();
					this.topDoc.getElementById(n.SYNCFRAME_ID) ||
						(this.topWin.addEventListener(
							"message",
							function(e) {
								var t = e.data;
								if (t && t.isCriteoMessage)
									if ((e.stopImmediatePropagation(), t.optout))
										r.setClientSideOptOut(),
											r.deleteClientSideUid(),
											r.deleteClientSideIdfs(),
											r.deleteClientSideSecureId(),
											r.deleteBundle();
									else {
										if (
											(t.uid && r.setClientSideUid(t.uid),
											t.idfs && r.setClientSideIdfs(t.idfs),
											t.callbacks)
										)
											for (
												var i = 0,
													n =
														"string" == typeof t.callbacks
															? [t.callbacks]
															: t.callbacks;
												i < n.length;
												i++
											) {
												var o = n[i];
												new Image().src = o;
											}
										else t.bundle && r.setBundle(t.bundle);
										t.removeSid
											? r.deleteClientSideSecureId()
											: t.sid && r.setClientSideSecureId(t.sid);
									}
							},
							!0
						),
						this.topDoc.body.appendChild(e));
				}),
				(n.prototype.getClientSideUid = function() {
					return this.getFromAllStorages(n.GUID_COOKIE_NAME);
				}),
				(n.prototype.setClientSideUid = function(e) {
					this.writeOnAllStorages(
						n.GUID_COOKIE_NAME,
						e,
						n.GUID_RETENTION_TIME_HOUR
					);
				}),
				(n.prototype.deleteClientSideUid = function() {
					this.deleteFromAllStorage(n.GUID_COOKIE_NAME);
				}),
				(n.prototype.getBundle = function() {
					return this.getFromAllStorages(n.BUNDLE_COOKIE_NAME);
				}),
				(n.prototype.setBundle = function(e) {
					this.writeOnAllStorages(
						n.BUNDLE_COOKIE_NAME,
						e,
						n.GUID_RETENTION_TIME_HOUR
					);
				}),
				(n.prototype.deleteBundle = function() {
					this.deleteFromAllStorage(n.BUNDLE_COOKIE_NAME);
				}),
				(n.prototype.getClientSideOptOut = function() {
					var e = this.getFromAllStorages(n.OPTOUT_COOKIE_NAME);
					return { value: "1" === e.value, origin: e.origin };
				}),
				(n.prototype.setClientSideOptOut = function() {
					this.writeOnAllStorages(
						n.OPTOUT_COOKIE_NAME,
						"1",
						n.OPTOUT_RETENTION_TIME_HOUR
					);
				}),
				(n.prototype.deleteClientSideIdfs = function() {
					this.deleteFromAllStorage(n.IDFS_COOKIE_NAME);
				}),
				(n.prototype.getClientSideIdfs = function() {
					return this.getFromAllStorages(n.IDFS_COOKIE_NAME);
				}),
				(n.prototype.setClientSideIdfs = function(e) {
					this.writeOnAllStorages(
						n.IDFS_COOKIE_NAME,
						e,
						n.GUID_RETENTION_TIME_HOUR
					);
				}),
				(n.prototype.getClientSideSecureId = function() {
					return this.getFromAllStorages(n.SECURE_ID_COOKIE_NAME);
				}),
				(n.prototype.setClientSideSecureId = function(e) {
					this.writeOnAllStorages(
						n.SECURE_ID_COOKIE_NAME,
						e,
						n.GUID_RETENTION_TIME_HOUR
					);
				}),
				(n.prototype.deleteClientSideSecureId = function() {
					this.deleteFromAllStorage(n.SECURE_ID_COOKIE_NAME);
				}),
				(n.prototype.getClientSideLocalWebId = function() {
					return this.getFromAllStorages(n.LOCAL_WEB_ID_COOKIE_NAME);
				}),
				(n.prototype.checkCookiesAreWriteable = function() {
					var e = "cto_writeable";
					CookieHelper.SetCookie(e, "1", 1, this.topDoc, !0);
					var t = "1" === CookieHelper.GetCookie(e, this.topDoc);
					return CookieHelper.DeleteCookie(e, this.topDoc, !0), t;
				}),
				(n.prototype.createGumIframe = function() {
					var e = this.topDoc.createElement("iframe"),
						t = this.buildSyncframeSrc();
					return (
						(e.src = t), (e.id = n.SYNCFRAME_ID), (e.style.display = "none"), e
					);
				}),
				(n.prototype.writeOnAllStorages = function(e, t, i) {
					this.localStorageEnabled && this.localStorageHelper.setItem(e, t),
						CookieHelper.SetCookie(e, t, i, this.topDoc, !0);
				}),
				(n.prototype.getFromAllStorages = function(e) {
					var t,
						i = CookieHelper.GetCookie(e, this.topDoc);
					return (
						this.localStorageEnabled &&
							(t = this.localStorageHelper.getItem(e) || void 0),
						{
							value: i || t,
							origin:
								(i && StorageOrigin.Cookie) | (t && StorageOrigin.LocalStorage)
						}
					);
				}),
				(n.prototype.deleteFromAllStorage = function(e) {
					CookieHelper.DeleteCookie(e, this.topDoc, !0),
						this.localStorageEnabled && this.localStorageHelper.removeItem(e);
				}),
				(n.prototype.getTld = function() {
					var e = CookieHelper.SetCookie(
						n.TLD_TEST_COOKIE_NAME,
						"test",
						1,
						this.topDoc,
						!0
					);
					return (
						CookieHelper.DeleteCookie(n.TLD_TEST_COOKIE_NAME, this.topDoc, !0),
						e
					);
				}),
				(n.prototype.buildSyncframeSrc = function() {
					var e = this.getClientSideUid(),
						t = this.getClientSideIdfs(),
						i = this.getClientSideOptOut(),
						n = this.getClientSideSecureId(),
						o = this.getClientSideLocalWebId(),
						r = this.getBundle(),
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
							sid: n,
							origin: "publishertag",
							version: d,
							lwid: o,
							tld: a,
							bundle: r,
							topUrl: s,
							cw: c
						}));
				}),
				(n.GUID_COOKIE_NAME = "cto_idcpy"),
				(n.GUID_RETENTION_TIME_HOUR = 9360),
				(n.IDFS_COOKIE_NAME = "cto_idfs"),
				(n.SECURE_ID_COOKIE_NAME = "cto_sid"),
				(n.LOCAL_WEB_ID_COOKIE_NAME = "cto_lwid"),
				(n.BUNDLE_COOKIE_NAME = "cto_bundle"),
				(n.OPTOUT_COOKIE_NAME = "cto_optout"),
				(n.OPTOUT_RETENTION_TIME_HOUR = 43200),
				(n.TLD_TEST_COOKIE_NAME = "cto_pub_test_tld"),
				(n.SYNCFRAME_ID = "criteo-syncframe"),
				(n.SAFARI_CHECK_REGEX = /^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i),
				n
			);
		})(),
		Context = (function() {
			function e(e, t, i, n) {
				var o = this;
				this.charset = e.charset || e.characterSet || "";
				var r = DomManipulationTools.getHighestAccessibleWindow(t);
				(this.displayContext = this.getDisplayContext(r)),
					(this.highestAccessibleUrl = DomManipulationTools.getHighestAccessibleUrl(
						r
					)),
					(this.ccpaPrivacyProvider = i || new CCPAPrivacyProvider(t)),
					(this.cookieSynchronizerFactory =
						n ||
						function() {
							return new CookieSynchronizer(
								r.topFrame,
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
			return (
				(e.prototype.getContextFlags = function() {
					var e = "";
					return (
						(e += this.debugMode ? "&debug=1" : ""),
						(e += this.noLog ? "&nolog=1" : "")
					);
				}),
				(e.prototype.getDisplayContext = function(e) {
					return DomManipulationTools.inIframe()
						? e.err
							? DisplayContext.InUnfriendlyIframe
							: DisplayContext.InFriendlyIframe
						: DisplayContext.DirectIntegration;
				}),
				(e.prototype.getQueryStringParams = function(e) {
					var t = {},
						i = e.split("?");
					if (1 < i.length)
						for (var n = 0, o = i[1].split("&"); n < o.length; n++) {
							var r = o[n].split("=");
							t[tryDecodeURIComponent(r[0])] = tryDecodeURIComponent(r[1]);
						}
					return t;
				}),
				(e.prototype.synchronizeCriteoUid = function() {
					var e = this.cookieSynchronizerFactory();
					(this.ctoIdOnPublisherDomain = e.getClientSideUid().value),
						(this.isOptOut = e.getClientSideOptOut().value),
						(this.idfs = e.getClientSideIdfs().value),
						(this.secureId = e.getClientSideSecureId().value),
						(this.bundle = e.getBundle().value),
						e.synchronizeCriteoUid();
				}),
				(e.prototype.getIdfs = function() {
					return [this.idfs, this.secureId].join(":");
				}),
				(e.prototype.setIdfs = function(e) {
					var t = e.split(":");
					t[0] && (this.idfs = t[0]), t[1] && (this.secureId = t[1]);
				}),
				(e.prototype.computeShouldIgnoreSilentMode = function() {
					return Math.floor(100 * Math.random()) < 5;
				}),
				(e.prototype.setSilentModeIgnored = function() {
					this.silentModeIgnored = !0;
				}),
				(e.prototype.checkIfUserHasOptOutForCCPA = function(t) {
					var i = this;
					this.ccpaPrivacyProvider.readyToRetrieve()
						? this.ccpaPrivacyProvider.retrieveCCPAConsent(function(e) {
								t(i.ccpaPrivacyProvider.hasUserOptOut(e));
						  })
						: t(!1);
				}),
				e
			);
		})(),
		StandaloneDirectBidder = function() {
			(this.bids = {}), (this.lineItemRanges = []), (this.impIds = []);
		};
	function isConditionalEvent(e) {
		return "conditionalEvent" === e.name;
	}
	var PublisherTag = (function() {
		function e() {
			(this.standaloneBidder = new StandaloneDirectBidder()),
				(this.events = []),
				(this.context = new Context(document, window)),
				Log.Debug("Publisher Tag loaded");
		}
		return (
			(e.prototype.push = function() {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				for (var i = 0, n = e; i < n.length; i++) {
					var o = n[i];
					this.events.push(o);
				}
				this.evalEvents();
			}),
			(e.prototype.evalEvents = function() {
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
			(e.VERSION = PublisherTagVersion),
			e
		);
	})();
	function safeFunction(e) {
		var t = e,
			i = function() {
				try {
					return t.apply(this, arguments);
				} catch (e) {
					Log.Error("Exception caught: " + e.toString());
				}
			};
		for (var n in ((i.prototype = t.prototype), t))
			t.hasOwnProperty(n) && (i[n] = t[n]);
		return i;
	}
	function safeObject(e) {
		for (var t in e)
			if (e.hasOwnProperty(t)) {
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
					for (var i = 0, n = e; i < n.length; i++) {
						var o = n[i];
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
	function RenderAdPassback(e, t, i, n) {
		var o;
		"string" == typeof e
			? (o = e)
			: ((o = getParam(e, "adUnit", "string")),
			  (t = getParam(e, "passback", "function")),
			  (i = getParam(e, "customRenderFunction", "function")),
			  (n = getParam(e, "minimumBidPrice", "number"))),
			void 0 !== o
				? void 0 !== t
					? ("function" != typeof i &&
							(i = function(e) {
								RenderAd({ bidId: e.id, containerId: o });
							}),
					  (window.Criteo.passbackEvents = window.Criteo.passbackEvents || []),
					  window.Criteo.passbackEvents.push(function() {
							var e = GetBidsForAdUnit(o)[0];
							e && (void 0 === n || e.cpm > n) ? i(e) : t(o);
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
