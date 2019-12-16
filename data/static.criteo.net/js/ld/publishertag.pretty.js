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
					var o = document.createElement("img");
					(o.src = e),
						(o.height = 1),
						(o.width = 1),
						(o.style.display = "none"),
						(o.onload = t),
						(o.onerror = i);
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
							o = window.navigator.userAgent,
							n = 0 < o.indexOf("MSIE ") || 0 < o.indexOf("Trident/");
						window.console &&
							(n
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
	var CRITEO_VENDOR_ID = 91,
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
					var o = TimeMeasurer.CreateRunning(),
						n = !1,
						r = setTimeout(function() {
							(n = !0),
								Log.Warning(
									"Timeout: Unable to resolve GDPR consent after " + e + "ms"
								),
								i(void 0);
						}, e);
					this.executeCommand("getConsentData", null, function(e, t) {
						n ||
							(clearTimeout(r),
							t
								? (Log.Debug("Consent retrieved in " + o.elapsed() + "ms"),
								  a.processResponseData(e, i))
								: (Log.Warning("Error retrieving GDPR consent data from CMP"),
								  i(void 0)));
					});
				}),
				(a.prototype.retrieveGDPRConsentForPassback = function(i, e) {
					void 0 === e && (e = parseInt("10000", 10));
					var o = TimeMeasurer.CreateRunning(),
						n = !1,
						r = setTimeout(function() {
							(n = !0),
								Log.Warning(
									"Timeout: Unable to resolve GDPR consent after " + e + "ms"
								),
								i(void 0);
						}, e);
					this.executeCommand("getVendorConsents", [CRITEO_VENDOR_ID], function(
						e,
						t
					) {
						n ||
							(clearTimeout(r),
							t
								? (Log.Debug(
										"Consent (getVendorConsents) retrieved in " +
											o.elapsed() +
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
							var o = Math.random().toString(10),
								n = { __cmpCall: { command: e, parameter: t, callId: o } };
							(r.cmpCallbacks[o] = i), a.postMessage(n, "*");
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
						o = this.localStorage.getItem(e + this.EXPIRE_SUFFIX),
						n = o ? parseInt(o, 10) : -1;
					return (-1 !== n && n < i) || (t && (-1 === n || t < n - i))
						? (this.removeItem(e), null)
						: this.localStorage.getItem(e);
				}),
				(e.prototype.setItem = function(e, t, i) {
					if ((this.localStorage.setItem(e, t), i)) {
						var o = new Date().getTime() + i;
						this.localStorage.setItem(e + this.EXPIRE_SUFFIX, o.toString());
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
					var o = this;
					void 0 === i && (i = 100),
						i <= 0 || this.tryAcquire(t)
							? (e(), this.release())
							: setTimeout(function() {
									o.acquire(e, t, i - 10);
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
		__extends = ((db = function(e, t) {
			return (db =
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
			db(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		db,
		SlotKeyWithSize = (function(n) {
			function e(e, t, i) {
				var o = n.call(this, e) || this;
				return (o.size = t), (o.networkId = i), o;
			}
			return (
				__extends(e, n),
				(e.prototype.toString = function() {
					return (
						n.prototype.toString.call(this) +
						"_Size" +
						this.size +
						"_NetworkId" +
						this.networkId
					);
				}),
				e
			);
		})(SlotKey),
		__extends$1 = ((vb = function(e, t) {
			return (vb =
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
			vb(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		vb,
		SlotKeyWithZoneId = (function(o) {
			function e(e, t) {
				var i = o.call(this, e) || this;
				return (i.zoneId = t), i;
			}
			return (
				__extends$1(e, o),
				(e.prototype.toString = function() {
					return o.prototype.toString.call(this) + "_ZoneId" + this.zoneId;
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
					for (var t = [], i = 0, o = e.sizes; i < o.length; i++) {
						var n = o[i];
						t.push(new SlotKeyWithSize(e.impId, n, this.networkId));
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
					for (var t = [], i = 0, o = e; i < o.length; i++) {
						for (
							var n = o[i],
								r = [],
								a = 0,
								s = this.slotKeyFactory.createKeysFromSlotRequest(n);
							a < s.length;
							a++
						) {
							var d = s[a];
							this.getBid(d, 0) !== l.NO_BID &&
								(d instanceof SlotKeyWithSize ? r.push(d.size) : t.push(n));
						}
						0 < r.length && ((n.sizes = r), t.push(n));
					}
					return t;
				}),
				(l.prototype.getRequestCachedBids = function(e, t) {
					void 0 === t && (t = 5e3);
					for (var i = [], o = 0, n = e; o < n.length; o++)
						for (
							var r = n[o],
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
							for (var o = 0, n = i.bids; o < n.length; o++) {
								var r = n[o];
								if (new Lock(l.BID_KEY_PREFIX + r.bid.slotid).tryAcquire(t))
									return r.bid;
							}
					}
				}),
				(l.prototype.storeRequestNoBid = function(e, t) {
					for (
						var i = 0, o = this.slotKeyFactory.createKeysFromSlotRequest(e);
						i < o.length;
						i++
					) {
						var n = o[i];
						this.storeNoBid(n, t);
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
					var o = this;
					if (this.localStorageEnabled) {
						var n = new Lock(t.toString());
						n.acquire(function() {
							var e = o.getBySlotKey(t);
							i(e), o.setBySlotKey(t, e), n.release();
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
							o = this.get(i);
						o && this.set(i, o);
					}
				}),
				(l.NO_BID = "nobid"),
				(l.BID_KEY_PREFIX = "criteo_pt_cdb_bidcache_"),
				l
			);
		})(),
		DirectBiddingCache = (function() {
			function e(e, t, i) {
				var o = DirectBiddingBidManager.useZoneIdIntegration(t, i);
				(this.bidManager = new DirectBiddingBidManager(o, i)),
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
				(e.prototype.handleResponse = function(e, t, i, o) {
					var n = i.time_to_next_call;
					0 < n &&
						(Log.Debug("Global silent mode enabled for " + n + " seconds"),
						this.silentModeManager.enableSilentMode(1e3 * n));
					var r = {};
					if (i.slots)
						for (var a = 0, s = i.slots; a < s.length; a++) {
							(f = s[a]).ttl && (r[f.imp_id] = f.ttl);
						}
					if (t.slots)
						for (var d = 0, c = t.slots; d < c.length; d++) {
							var l = 0;
							(f = c[d]).slotid in r && ((l = r[f.slotid]), delete r[f.slotid]),
								o &&
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
			function a(e, t, i, o) {
				void 0 === o && (o = !0),
					(this.url = e),
					(this.data = t),
					(this.contentType = i),
					(this.withCredentials = o);
			}
			return (
				(a.prototype.send = function(e, t, i, o) {
					var n = void 0 !== this.data ? "POST" : "GET",
						r = this.getXMLHttpRequest(n, e, t, i, o);
					if (void 0 !== r) r.send(this.data);
					else {
						var a = this.getXDomainRequest(n, e, t, i, o);
						void 0 !== a && a.send(this.data);
					}
				}),
				(a.prototype.getXMLHttpRequest = function(e, t, i, o, n) {
					var r = new XMLHttpRequest();
					if ("withCredentials" in r)
						return (
							r.open(e, this.url, !0),
							(r.timeout = n || a.LOCAL_PASSBACK_TIMEOUT),
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
							o && (r.ontimeout = o),
							r
						);
				}),
				(a.prototype.getXDomainRequest = function(e, t, i, o, n) {
					if ("undefined" != typeof XDomainRequest) {
						var r = new XDomainRequest();
						return (
							(r.timeout = n || a.LOCAL_PASSBACK_TIMEOUT),
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
							r.ontimeout && o && (r.ontimeout = o),
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
	var PublisherTagVersion = 78,
		DirectBiddingMetric = function(
			e,
			t,
			i,
			o,
			n,
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
				(this.isTimeout = o),
				(this.pageLoadElapsed = n),
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
		DirectBiddingMetricSlot = function(e, t, i, o, n) {
			(this.impressionId = e),
				(this.zoneId = t),
				(this.adUnitId = i),
				(this.cachedBidUsed = o),
				(this.isDsc = n);
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
				(e.prototype.addSlot = function(e, t, i, o) {
					var n =
						0 <
						this.cachedBidsReturned.filter(function(e) {
							return e.impid === i && e.zoneid === t;
						}).length;
					return (
						this.slots.push(new DirectBiddingMetricSlot(e, t, i, n, o)), this
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
		DirectBiddingMetricsManager = (function() {
			function n() {
				(this.localStorageHelper = new LocalStorageHelper()),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage());
			}
			return (
				(n.prototype.getMetrics = function(e) {
					if (this.localStorageEnabled) {
						var t = n.METRICS_STORAGE_KEY,
							i = this.localStorageHelper.getItem(t),
							o = i ? tryParseJson(i) : [];
						return e && this.localStorageHelper.removeItem(t), o;
					}
					return [];
				}),
				(n.prototype.setMetrics = function(e) {
					if (this.localStorageEnabled) {
						var t = n.METRICS_STORAGE_KEY;
						this.localStorageHelper.setItem(t, JSON.stringify(e), 36e5);
					}
				}),
				(n.prototype.storeMetric = function(e) {
					if (this.localStorageEnabled) {
						var t = this.getMetrics(!1);
						t.push(e), this.setMetrics(t);
					}
				}),
				(n.METRICS_STORAGE_KEY = "criteo_pt_cdb_metrics"),
				n
			);
		})(),
		IntegrationMode,
		ef;
	function parse(e) {
		switch (e.toLowerCase()) {
			case "amp":
				return IntegrationMode.AMP;
			default:
				return IntegrationMode.Unspecified;
		}
	}
	(ef = IntegrationMode || (IntegrationMode = {})),
		(ef[(ef.Unspecified = 0)] = "Unspecified"),
		(ef[(ef.AMP = 1)] = "AMP");
	var DirectBiddingRequestBuilder = (function() {
		function t(e, t, i, o, n, r, a, s, d, c, l) {
			(this.slots = e),
				(this.context = t),
				(this.metricsManager = i),
				(this.urlBuilder = o),
				(this.profileId = n),
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
					var o = i[t],
						n = { slotid: o.slotId, impid: o.impId };
					if (
						(void 0 !== o.zoneId && (n.zoneid = o.zoneId),
						void 0 !== o.nativeCallback && (n.native = !0),
						void 0 !== o.transactionId && (n.transactionid = o.transactionId),
						void 0 !== o.publisherSubId &&
							(n.publishersubid = o.publisherSubId),
						void 0 !== o.sizes)
					) {
						for (var r = [], a = 0, s = o.sizes; a < s.length; a++) {
							var d = s[a];
							r.push(d.width + "x" + d.height);
						}
						n.sizes = r;
					}
					if (void 0 !== o.video) {
						var c = {
							playersizes: this.parsePlayerSizes(o.video.playersize),
							mimes: o.video.mimes,
							protocols: o.video.protocols,
							maxduration: o.video.maxduration,
							api: o.video.api,
							skip: o.video.skip,
							placement: o.video.placement,
							playbackmethod: o.video.playbackmethod,
							minduration: o.video.minduration,
							startdelay: o.video.startdelay
						};
						n.video = c;
					}
					if (void 0 !== this.viewportComputer) {
						var l = this.viewportComputer.getSlotPosition(o);
						void 0 !== l && (n.position = { top: l.top, left: l.left });
					}
					e.push(n);
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
				var o = t[i];
				if (o.name === e && o.duration) return Math.round(o.duration);
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
				var o = this.timer.elapsed();
				this.builder.withAdapterStartElapsed(o),
					this.builder.withPageLoadElapsed(
						TimeMeasurer.TimeSincePageLoad() - o
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
						for (var i = 0, o = t; i < o.length; i++) {
							var n = o[i];
							this.builder.addSlot(n.imp_id, n.zone_id, n.ad_unit_id, n.is_dsc);
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
									o = i.responseStart,
									n = i.requestStart;
								if (void 0 !== o && void 0 !== n) return o - n;
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
		__extends$2 = ((kg = function(e, t) {
			return (kg =
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
			kg(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		kg,
		DirectBiddingEvent = (function(p) {
			function h(e, t, i, o, n, r, a, s, d, c, l) {
				var u = p.call(this, h.NAME) || this;
				return (
					(u.profileId = e),
					(u.urlBuilder = t),
					(u.slots = i),
					(u.metricBuilder = new DirectBiddingMetricBuilder()),
					(u.metricsManager = new DirectBiddingMetricsManager()),
					(u.callbackSuccess = o),
					(u.callbackError = n),
					(u.callbackTimeout = r),
					(u.timeout = a),
					(u.networkId = s),
					(u.integrationMode = d),
					(u.adapterVersion = c),
					(u.viewportComputer = l),
					u
				);
			}
			return (
				__extends$2(h, p),
				(h.prototype.setGDPRConsent = function(e) {
					this.gdprConsent = e;
				}),
				(h.prototype.setCCPAIabConsent = function(e) {
					this.ccpaIabConsent = e;
				}),
				(h.prototype.getMetricBuilder = function() {
					return this.metricBuilder;
				}),
				(h.prototype.eval = function(e) {
					this.evalWithTimeout(e, void 0);
				}),
				(h.prototype.evalWithTimeout = function(e, t) {
					var o = this,
						i = h.getCriteoAdapterBidRequest(),
						n = h.getRequestAuctionStart(i),
						r = t || resolvePrebidTimeout(i && i.timeout),
						a = new DirectBiddingTimer(this.metricBuilder, n, r),
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
									void 0 !== o.callbackSuccess &&
										o.callbackSuccess(JSON.stringify(t), i),
										o.metricsManager.storeMetric(a.finish(t.sid, i.slots));
								},
								function(e, t) {
									a.requestReceived(),
										void 0 !== o.callbackError && o.callbackError(e, t),
										o.metricsManager.storeMetric(a.finish());
								},
								function() {
									a.requestReceived(!0),
										void 0 !== o.callbackTimeout && o.callbackTimeout(),
										o.metricsManager.storeMetric(a.finish());
								},
								this.timeout
							);
					} else this.callbackError(void 0, void 0);
				}),
				(h.getCriteoAdapterBidRequest = function() {
					try {
						return window.pbjs._bidsRequested.find(function(e) {
							return "criteo" === e.bidderCode;
						});
					} catch (e) {
						return;
					}
				}),
				(h.getRequestAuctionStart = function(e) {
					return e && e.auctionStart;
				}),
				(h.NAME = "directbidding"),
				h
			);
		})(AbstractEvent),
		__extends$3 = ((eh = function(e, t) {
			return (eh =
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
			eh(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		eh,
		DirectBiddingEventWithCaching = (function(h) {
			function f(e, t, i, o, n, r, a, s, d, c, l) {
				var u = h.call(this, f.NAME) || this,
					p = Math.max(10 * (a || 3e3), 3e3);
				return (
					(u.cache = new DirectBiddingCache(
						window.criteo_pubtag.context,
						i,
						s
					)),
					(u.directBiddingEvent = new DirectBiddingEvent(
						e,
						t,
						u.cache.filterNoBidSlots(i),
						function(e, t) {
							return u.onSuccess(e, t);
						},
						function(e, t) {
							return u.onError(e, t);
						},
						function() {
							return u.onHttpTimeout();
						},
						p,
						s,
						d,
						c,
						l
					)),
					(u.slots = i),
					(u.callbackSuccess = o),
					(u.callbackError = n),
					(u.callbackTimeout = r),
					(u.timeout = a),
					(u.hasTimeouted = !1),
					(u.hasResponded = !1),
					(u.gdprPrivacyProvider = new GDPRPrivacyProvider(window)),
					u
				);
			}
			return (
				__extends$3(f, h),
				(f.prototype.eval = function(t) {
					var i = this;
					this.gdprPrivacyProvider.readyToRetrieve()
						? this.gdprPrivacyProvider.retrieveGDPRConsent(function(e) {
								i.evalWithCmp(t, e);
						  })
						: this.evalWithCmp(t, void 0);
				}),
				(f.prototype.evalWithCmp = function(e, t) {
					var i = this;
					if (this.cache.silentModeEnabled())
						return (
							Log.Debug(
								"Request ignored because the global silent mode is enabled"
							),
							void this.callbackSuccess("", void 0)
						);
					setTimeout(function() {
						return i.onTimeout();
					}, this.timeout || 3e3),
						this.directBiddingEvent.setGDPRConsent(t),
						this.directBiddingEvent.evalWithTimeout(e, this.timeout);
				}),
				(f.prototype.onSuccess = function(e, t) {
					if (((this.hasResponded = !0), void 0 !== t)) {
						var i = tryParseJson(e);
						this.cache.handleResponse(this.slots, i, t, this.hasTimeouted);
					}
					this.hasTimeouted || this.callbackSuccess(e, t),
						this.cache.clearExpiredItems();
				}),
				(f.prototype.onError = function(e, t) {
					(this.hasResponded = !0),
						this.hasTimeouted || this.callbackError(e, t),
						this.cache.clearExpiredItems();
				}),
				(f.prototype.onHttpTimeout = function() {
					(this.hasResponded = !0),
						this.hasTimeouted || this.callbackTimeout(),
						this.cache.clearExpiredItems();
				}),
				(f.prototype.onTimeout = function() {
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
				(f.prototype.getMetricBuilder = function() {
					return this.directBiddingEvent.getMetricBuilder();
				}),
				(f.prototype.getBidCache = function() {
					return this.cache;
				}),
				(f.NAME = "directbidding"),
				f
			);
		})(AbstractEvent),
		CacheBusterGenerator = (function() {
			function e() {}
			return (
				(e.generateCacheBuster = function() {
					return Math.floor(99999999999 * Math.random());
				}),
				e
			);
		})(),
		DirectBiddingUrlBuilder = (function() {
			function a(e) {
				void 0 === e && (e = !1), (this.auditMode = e);
			}
			return (
				(a.prototype.buildUrl = function(e, t, i, o, n) {
					void 0 === i && (i = IntegrationMode.Unspecified);
					var r = a.CRITEO_BIDDER_URL + this.getHandlerPath();
					return (
						(r += "?ptv=" + PublisherTagVersion),
						!0 === t.isAdBlocked && (r += "&abp=1"),
						(r = this.appendCommonParameters(r, e, o, n)),
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
					var o = a.CRITEO_BIDDER_URL + a.CRITEO_CSM_HANDLER;
					return (
						(o += "?ptv=" + PublisherTagVersion),
						this.appendCommonParameters(o, e, t, i)
					);
				}),
				(a.prototype.appendCommonParameters = function(e, t, i, o) {
					return (
						(e += "&profileId=" + String(t)),
						void 0 !== i && (e += "&av=" + String(i)),
						void 0 !== o && (e += "&wv=" + encodeURIComponent(o)),
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
		})();
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
				o =
					window.innerHeight ||
					document.documentElement.clientHeight ||
					document.body.clientHeight,
				n = 0,
				r = e;
			n < r.length;
			n++
		) {
			for (
				var a = r[n],
					s = a.getSlotElementId(),
					d = [],
					c = 0,
					l = a.getSizes(i, o) || a.getSizes();
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
				for (var t, i = 1, o = arguments.length; i < o; i++)
					for (var n in (t = arguments[i]))
						Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
				return e;
			}).apply(this, arguments);
	};
	function createEmptyDFPTargeting() {
		return createDFPTargeting(null, null);
	}
	function createDFPTargeting(e, t, i) {
		var o = { crt_pb: [e], crt_bidid: [t] };
		return void 0 !== i && (o = __assign({}, o, { crt_deal: [i] })), o;
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
				var o = this.googletag
					.pubads()
					.getSlots()
					.filter(function(e) {
						return e.getSlotElementId() === t;
					});
				0 === o.length
					? Log.Warning("No googletag slot found for slotId: " + t)
					: 1 < o.length
						? Log.Warning("More than one googletag slot found for slotId: " + t)
						: this.googletag.cmd.push(function() {
								for (var e in i)
									i.hasOwnProperty(e) &&
										(o[0].clearTargeting(e), o[0].setTargeting(e, i[e] + ""));
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
		__extends$4 = ((bj = function(e, t) {
			return (bj =
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
			bj(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		bj,
		BidEventContainerTarget = (function(_super) {
			function BidEventContainerTarget(e, t) {
				var i = _super.call(this) || this;
				i.containerId = t;
				var o = e.getElementById(t);
				return (
					o
						? (i.element = o)
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
		__extends$5 = ((tj = function(e, t) {
			return (tj =
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
			tj(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		tj,
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
		__extends$6 = ((Nj = function(e, t) {
			return (Nj =
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
			Nj(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Nj,
		Custom = (function(i) {
			function o(e) {
				var t = i.call(this, o.NAME) || this;
				return (t.callback = e), t;
			}
			return (
				__extends$6(o, i),
				(o.prototype.eval = function(e) {
					this.callback && this.callback.apply(this);
				}),
				(o.NAME = "genericEvent"),
				o
			);
		})(AbstractEvent),
		BidResponseSlot = (function() {
			function e(e, t, i, o, n, r, a) {
				(this.id = this.generateRandomId()),
					(this.slotId = e),
					(this.impressionId = t),
					(this.cpm = i),
					(this.width = o),
					(this.height = n),
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
		__extends$7 = ((jk = function(e, t) {
			return (jk =
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
			jk(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		jk,
		DisplayUrlBidResponseSlot = (function(c) {
			function e(e, t, i, o, n, r, a, s) {
				var d = c.call(this, e, t, i, o, n, r, s) || this;
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
		__extends$8 = ((Hk = function(e, t) {
			return (Hk =
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
			Hk(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Hk,
		HtmlCreativeBidResponseSlot = (function(c) {
			function e(e, t, i, o, n, r, a, s) {
				var d = c.call(this, e, t, i, o, n, r, s) || this;
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
					for (var t = [], i = 0, o = e.split(";"); i < o.length; i++) {
						var n = o[i],
							r = n.split(".."),
							a = h.roundToDecimal(r[0], 2),
							s = r[1].split(":"),
							d = h.roundToDecimal(s[0], 2),
							c = h.roundToDecimal(s[1], 2);
						if (isNaN(a) || isNaN(d) || isNaN(c) || 0 === c) {
							Log.Warning("Could not parse range parameter: " + n);
							break;
						}
						if (a < 0 || d < 0 || c < 0) {
							Log.Warning("Positive values must be set for range bounds: " + n);
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
					for (var i = 0, o = t; i < o.length; i++) {
						var n = o[i];
						if (e <= n.upperBound && e > n.lowerBound) {
							var r = Math.floor(e / n.increment + 1e-4) * n.increment;
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
						o = Math.pow(10, t);
					return Math.round(i * o) / o;
				}),
				h
			);
		})(),
		__extends$9 = ((Ll = function(e, t) {
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
		NativeBidResponseSlot = (function(l) {
			function e(e, t, i, o, n, r, a, s, d) {
				var c = l.call(this, e, t, i, o, n, r, d) || this;
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
		__extends$10 = ((qm = function(e, t) {
			return (qm =
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
			qm(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		qm,
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
		DirectBiddingSlot = function(e, t, i, o, n, r, a, s) {
			(this.slotId = generateUuid().replace(/-/g, "")),
				(this.impId = e),
				(this.zoneId = t),
				(this.nativeCallback = i),
				(this.transactionId = o),
				(this.sizes = n),
				(this.publisherSubId = r),
				(this.mediaTypes = a),
				(this.video = s);
		},
		__extends$11 = ((Vm = function(e, t) {
			return (Vm =
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
			Vm(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Vm,
		PlacementInputParameters = (function(t) {
			function e(e) {
				var n = t.call(this) || this;
				return (
					(n.slotId = void 0),
					(n.zoneId = void 0),
					(n.sizes = []),
					(n.nativeCallback = void 0),
					(n.publisherSubId = void 0),
					n.addParameter("slotid", function(e) {
						n.slotId = e;
					}),
					n.addParameter("zoneid", function(e) {
						n.zoneId = e;
					}),
					n.addParameter("sizes", function(e) {
						for (var t = 0, i = e; t < i.length; t++) {
							var o = i[t].split("x");
							n.sizes.push(new Size(parseInt(o[0], 10), parseInt(o[1], 10)));
						}
					}),
					n.addParameter("nativecallback", function(e) {
						n.nativeCallback = e;
					}),
					n.addParameter("publisherSubId", function(e) {
						n.publisherSubId = e;
					}),
					t.prototype.tryFillParameters.call(n, e),
					n
				);
			}
			return __extends$11(e, t), e;
		})(InputParameters),
		__extends$12 = ((sn = function(e, t) {
			return (sn =
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
			sn(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		sn,
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
					for (var t = [], i = 0, o = e; i < o.length; i++) {
						var n = o[i],
							r = new PlacementInputParameters(n);
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
					var o = this.createClone(t);
					return (
						i.insertBefore(o, t),
						o.appendChild(this.createPlaceholder()),
						this.isVisible(o)
							? ((this.cloneByImpressionId[e] = o), !0)
							: (i.removeChild(o), !1)
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
						var o = Math.floor(Math.random() * e.length);
						t += e.charAt(o);
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
								var o = 0, n = i.getElementsByClassName(u.PLACEHOLDER_NAME);
								o < n.length;
								o++
							) {
								var r = n[o];
								null !== r.parentNode && r.parentNode.removeChild(r);
							}
					} else null !== t.parentNode && t.parentNode.removeChild(t);
				}),
				(u.insertAdIFrame = function(e) {
					var t,
						i = this.cloneByImpressionId[e];
					if (void 0 !== i) t = i;
					else {
						var o = document.getElementById(e);
						if (null === o) return null;
						t = o;
					}
					for (
						var n = 0, r = t.getElementsByClassName(u.PLACEHOLDER_NAME);
						n < r.length;
						n++
					) {
						for (var a = r[n], s = 0, d = a.childNodes; s < d.length; s++) {
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
					for (var i = 0, o = e; i < o.length; i++) {
						var n = o[i].impId;
						-1 === t.indexOf(n) && u.removePlaceholder(n);
					}
				}),
				(u.tryInsertPlaceholders = function(e) {
					for (var t = [], i = 0, o = e; i < o.length; i++) {
						var n = o[i],
							r = n.impId;
						u.tryInsertPlaceholder(r) && t.push(n);
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
		DirectBiddingViewport = function(e, t, i, o) {
			(this.width = e),
				(this.height = t),
				(this.scrollTop = i),
				(this.scrollLeft = o);
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
						var o = t.location.ancestorOrigins;
						if (o) return o[o.length - 1];
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
						o =
							e.innerHeight ||
							t.documentElement.clientHeight ||
							t.body.clientHeight,
						n = t.documentElement.scrollTop || t.body.scrollTop,
						r = t.documentElement.scrollLeft || t.body.scrollLeft;
					return new DirectBiddingViewport(i, o, n, r);
				}),
				(e.prototype.getSlotPosition = function(e) {
					var t = e.impId,
						i = document.getElementById(t);
					if (null !== i) {
						var o = i.getBoundingClientRect();
						return new DirectBiddingPosition(o.top, o.left);
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
	function DiscoverTagsAndRequestBids(t, i, o) {
		retrieveGoogleTagPlacements(function(e) {
			e.length <= 0
				? Log.Warning(
						"No Google tag placements have been retrieved, no bid will be requested."
				  )
				: RequestBidsWithProfileId(
						{ networkId: t, placements: e },
						standaloneProfileId,
						i,
						o
				  );
		});
	}
	function RequestBidsOnGoogleTagSlots(e, t, i) {
		if ("number" == typeof e) {
			DiscoverTagsAndRequestBids((o = e), t, i);
		} else {
			var o = getParam(e, "networkId", "number"),
				n = getParam(e, "placements", "object"),
				r = getParam(e, "callback", "function"),
				a = getParam(e, "timeout", "function");
			void 0 === n
				? DiscoverTagsAndRequestBids(o, r, a)
				: RequestBidsWithProfileId(
						{ networkId: o, placements: googleSlotsToDynamicSlots(n) },
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
			var o,
				n = window.criteo_pubtag.context,
				r = StandaloneAdBlockFlagManager.create();
			if (r.adBlockFlagEnabled()) {
				(t = standaloneAdBlockProfileId), (n.isAdBlocked = !0);
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
					(o = new ViewportComputer());
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
									for (var i = 0, o = t.invocation_codes; i < o.length; i++)
										for (
											var n = o[i], r = 0, d = n.slot_ids;
											r < d.length;
											r++
										) {
											var c = d[r];
											s[c] = n.invocation_code;
										}
								for (
									var l = function(t) {
											for (
												var e = void 0, i = 0, o = y.placements;
												i < o.length;
												i++
											) {
												var n = o[i];
												if (n.nativeCallback && n.impId === t.impid) {
													e = n.nativeCallback;
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
						o
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
			var e = new DirectBiddingMetricsManager(),
				t = e.getMetrics(!1),
				i = {},
				o = 0;
			o < t.length;
			++o
		)
			for (var n = 0, r = t[o].slots; n < r.length; n++) {
				i[r[n].impressionId] = o;
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
		for (var o in i)
			if (i.hasOwnProperty(o)) {
				var n = ComputeDFPTargeting(i[o], t);
				void 0 !== n && e.setKeyValuePerSlot(o, n);
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
			var o =
				void 0 !== i.containerId
					? new BidEventContainerTarget(i.document, i.containerId)
					: new BidEventDocumentTarget(i.document);
			RenderAdOnTarget(i.bidId, o);
		} else Log.Error("You must provide a bidId to the RenderAd call");
	}
	function RenderAdOnTarget(e, t) {
		var i = window.criteo_pubtag.standaloneBidder.bids;
		if (i.hasOwnProperty(e)) {
			var o = i[e],
				n = o.GenerateEvent(t);
			window.criteo_pubtag.push(n),
				o.slotId in bidCaches && bidCaches[o.slotId].removeBid(o),
				delete i[e];
		} else Log.Error("Could not render bid with id: " + e);
	}
	function GetBids(e) {
		var t = window.criteo_pubtag.standaloneBidder.bids;
		if (null === t) return [];
		var i = window.criteo_pubtag.standaloneBidder.lineItemRanges,
			o = [];
		for (var n in t)
			if (t.hasOwnProperty(n)) {
				var r = t[n];
				if (
					!e ||
					!e.impressionIds ||
					-1 !== e.impressionIds.indexOf(r.impressionId)
				) {
					if (0 < i.length) {
						var a = LineItemRange.computeLineItemPricebandValue(r.cpm, i);
						r.cpm_bucket = a;
					}
					o.push(r);
				}
			}
		return o;
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
			var o = i[t];
			if (IsEmptyOrUndefined(o.impId))
				return Log.Error("Missing 'slotId' parameter in placements object"), !1;
			if (
				IsEmptyOrUndefined(o.zoneId) &&
				(IsEmptyOrUndefined(o.sizes) || IsEmptyOrUndefined(e.networkId))
			)
				return (
					Log.Error(
						"Missing zone information: specify either a zoneId or a networkId and a zone size"
					),
					!1
				);
			if (void 0 !== o.nativeCallback && "function" != typeof o.nativeCallback)
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
				var o = t[i];
				if (e.hasOwnProperty(o.impressionId))
					e[o.impressionId].cpm < o.cpm && (e[o.impressionId] = o);
				else e[o.impressionId] = o;
			}
		return e;
	}
	function GenerateBidResponseSlot(e, t, i, o, n, r, a, s, d, c, l) {
		return void 0 !== a && void 0 !== s
			? new NativeBidResponseSlot(e, t, i, o, n, r, a, s, l)
			: void 0 === d || (void 0 !== c && "<script" !== c.substr(0, 7))
				? void 0 !== c
					? new HtmlCreativeBidResponseSlot(e, t, i, o, n, r, c, l)
					: void 0
				: new DisplayUrlBidResponseSlot(e, t, i, o, n, r, d, l);
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
			(s.Standalone = function(n, r, a) {
				RequestBids(
					{
						integrationmode: "amp",
						placements: [
							{
								slotid: n.slot,
								zoneid: n.zone,
								sizes: [n.width + "x" + n.height]
							}
						]
					},
					function(e) {
						if ("DFP" === n.adserver) {
							s.listenForCreativeRequests(e);
							for (var t = 0, i = e; t < i.length; t++) {
								var o = ComputeStandaloneDFPTargeting(i[t], n.lineItemRanges);
								void 0 !== o && a(o);
							}
							0 === e.length && a({});
						}
						r(null);
					},
					n.timeout
				);
			}),
			(s.listenForCreativeRequests = function(s) {
				window.addEventListener(
					"message",
					function(e) {
						var t = e.data instanceof Object ? e.data : tryParseJson(e.data);
						if (t && t.bidId && e.source)
							for (var i = 0, o = s; i < o.length; i++) {
								var n = o[i];
								if (n.id === t.bidId) {
									var r = e.source,
										a = n.GenerateMessage();
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
	var DirectBiddingSlotVideo = function(e, t, i, o, n, r, a, s, d, c) {
			(this.playersize = e),
				(this.mimes = t),
				(this.protocols = i),
				(this.maxduration = o),
				(this.api = n),
				(this.skip = r),
				(this.placement = a),
				(this.playbackmethod = s),
				(this.minduration = d),
				(this.startdelay = c);
		},
		PrebidMediaTypes,
		ns;
	(ns = PrebidMediaTypes || (PrebidMediaTypes = {})),
		(ns.Banner = "banner"),
		(ns.Video = "video");
	var Prebid = (function() {
			function o(e, t, i, o, n) {
				var r, a;
				(this.timer = new DirectBiddingTimer(
					new DirectBiddingMetricBuilder(),
					o.auctionStart,
					resolvePrebidTimeout(o.timeout)
				)),
					(this.auctionId = o.auctionId),
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
						SetCeh$1(o.ceh),
						c.params.integrationMode && (a = parse(c.params.integrationMode));
				}
				var l = {};
				o.gdprConsent &&
					(void 0 !== o.gdprConsent.consentString &&
						(l.consentData = o.gdprConsent.consentString),
					void 0 !== o.gdprConsent.gdprApplies &&
						(l.gdprApplies = !!o.gdprConsent.gdprApplies),
					o.gdprConsent.vendorData &&
						o.gdprConsent.vendorData.vendorConsents &&
						void 0 !==
							o.gdprConsent.vendorData.vendorConsents[
								CRITEO_VENDOR_ID.toString(10)
							] &&
						(l.consentGiven = !!o.gdprConsent.vendorData.vendorConsents[
							CRITEO_VENDOR_ID.toString(10)
						]));
				var u = { uspString: o.uspConsent };
				(this.metricsManager = new DirectBiddingMetricsManager()),
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
						n
					)),
					(this.url = this.requestBuilder.getUrl()),
					(window.Criteo.prebid_adapters = window.Criteo.prebid_adapters || {}),
					(window.Criteo.prebid_adapters[this.auctionId] = this);
			}
			return (
				(o.prototype.buildCdbUrl = function() {
					return this.url;
				}),
				(o.prototype.buildCdbRequest = function() {
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
				(o.GetAllAdapters = function() {
					return window.Criteo.prebid_adapters;
				}),
				(o.GetAdapter = function(e) {
					var t = "string" == typeof e ? e : e.bidRequests[0].auctionId,
						i = o.GetAllAdapters();
					if (i && t in i) return i[t];
				}),
				(o.prototype.createCriteoNativeAdWithCallback = function(e, t, i) {
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
				(o.prototype.getBidRequestForSlot = function(e) {
					for (var t = 0, i = this.bidRequests; t < i.length; t++) {
						var o = i[t];
						if (
							o.adUnitCode === e.impid &&
							(!o.params.zoneId || parseInt(o.params.zoneId, 10) === e.zoneid)
						)
							return o;
					}
				}),
				(o.prototype.getVideoInfoFromBidRequest = function(e) {
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
				(o.prototype.hasVideoMediaType = function(e) {
					return (
						void 0 !== e.params &&
						void 0 !== e.params.video &&
						(void 0 !== e.mediaTypes && void 0 !== e.mediaTypes.video)
					);
				}),
				(o.prototype.interpretResponse = function(e, t) {
					this.timer.requestReceived();
					var i = extractExtraData(e),
						o = {};
					if (void 0 !== i.slots)
						for (var n = 0, r = i.slots; n < r.length; n++) {
							o[(c = r[n]).imp_id] = c;
						}
					var a = [];
					if (e.slots && Array.isArray(e.slots))
						for (var s = 0, d = e.slots; s < d.length; s++) {
							var c = d[s],
								l = this.getBidRequestForSlot(c);
							if (l) {
								var u = l.bidId,
									p = c.ttl || (o[c.slotid] && o[c.slotid].ttl) || 60,
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
				(o.prototype.handleBidWon = function(e) {
					this.updateMetric(e, function(e) {
						e.adapterBidWon = !0;
					});
				}),
				(o.prototype.handleBidTimeout = function() {
					this.timer.requestReceived(!0),
						this.metricsManager.storeMetric(this.timer.finish()),
						this.cache.clearExpiredItems();
				}),
				(o.prototype.handleSetTargeting = function(e) {
					var t = this;
					this.timer.setTargeting(),
						this.updateMetric(e, function() {
							return t.timer.build();
						});
				}),
				(o.prototype.updateMetric = function(e, t) {
					for (
						var i = this.metricsManager.getMetrics(!1), o = 0;
						o < i.length;
						++o
					)
						for (var n = 0, r = i[o].slots; n < r.length; n++) {
							var a = r[n];
							if (a.adUnitId === e.adUnitCode) {
								var s = t(a);
								s && (i[o] = s);
							}
						}
					this.metricsManager.setMetrics(i);
				}),
				o
			);
		})(),
		__extends$13 = ((mt = function(e, t) {
			return (mt =
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
			mt(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		mt,
		ConditionalEvent = (function(r) {
			function a(e, t, i, o) {
				var n = r.call(this, a.NAME) || this;
				return (
					(n.condition = e),
					(n.eventIfTrue = t),
					(n.eventIfFalse = i),
					(n.conditionRequirement = o),
					n
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
		Ft;
	(Ft = AdFormatType || (AdFormatType = {})),
		(Ft[(Ft.Classic = 0)] = "Classic"),
		(Ft[(Ft.StickyFooter = 1)] = "StickyFooter"),
		(Ft[(Ft.ScrollingBanner = 2)] = "ScrollingBanner");
	var CookieHelper = (function() {
			function h() {}
			return (
				(h.SetCookie = function(e, t, i, o, n) {
					void 0 === n && (n = !1);
					var r = o || document,
						a = r.location.hostname,
						s = new Date();
					s.setTime(s.getTime() + 60 * i * 60 * 1e3);
					var d = "expires=" + s.toUTCString();
					if (!n) return h.setCookieString(e, t, d, void 0, r), a;
					for (var c = a.split("."), l = 0; l < c.length; ++l) {
						var u = c.slice(c.length - l - 1, c.length).join(".");
						h.setCookieString(e, t, d, u, r);
						var p = h.GetCookie(e, o);
						if (p && p === t) return u;
					}
					return a;
				}),
				(h.DeleteCookie = function(e, t, i) {
					void 0 === i && (i = !1), h.SetCookie(e, "", 0, t, i);
				}),
				(h.GetCookie = function(e, t) {
					for (
						var i = 0, o = (t || document).cookie.split(";");
						i < o.length;
						i++
					) {
						var n = o[i],
							r = n.substr(0, n.indexOf("=")).replace(/^\s+|\s+$/g, ""),
							a = n.substr(n.indexOf("=") + 1);
						if (r === e) return decodeURIComponent(a);
					}
				}),
				(h.setCookieString = function(e, t, i, o, n) {
					var r = e + "=" + encodeURIComponent(t) + ";" + i + ";";
					o && "" !== o && (r += "domain=." + o + ";"),
						(n.cookie = r + "path=/");
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
					var o = document.createElement("div");
					if (
						(t.appendChild(o),
						(o.id = "cto_sticky"),
						(o.style.margin = "0 auto"),
						(o.style.display = "table"),
						void 0 === e || "" === e)
					)
						document.body.appendChild(t);
					else {
						var n = document.getElementById(e);
						n
							? n.appendChild(t)
							: Log.Error(
									'Target element "' + e + '" not found in the document'
							  );
					}
					return o.id;
				}),
				(e.prototype.CreateScrollingBannerContainer = function(e) {
					var t,
						i = this;
					if (void 0 === e || "" === e)
						((t = document.createElement("div")).id = "cto_scrolling"),
							document.body.appendChild(t);
					else {
						var o = document.getElementById(e);
						if (!o)
							return (
								Log.Error(
									'Target element "' + e + '" not found in the document'
								),
								e
							);
						t = o;
					}
					var n = t.offsetTop;
					return (
						window.addEventListener
							? window.addEventListener(
									"scroll",
									function() {
										i.SetScrollingContainerPosition(t, n);
									},
									!1
							  )
							: window.attachEvent("onscroll", function() {
									i.SetScrollingContainerPosition(t, n);
							  }),
						this.SetScrollingContainerPosition(t, n),
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
		Au;
	(Au = DisplayContext || (DisplayContext = {})),
		(Au[(Au.InFriendlyIframe = 1)] = "InFriendlyIframe"),
		(Au[(Au.InUnfriendlyIframe = 2)] = "InUnfriendlyIframe"),
		(Au[(Au.DirectIntegration = 3)] = "DirectIntegration");
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
							var o = document.getElementById("compute_visibility_helper"),
								n = r.GetRatioAboveFold(o);
							return o.parentElement.removeChild(o), n;
						}
					}
					if (e.displayContext === DisplayContext.InFriendlyIframe)
						return r.GetRatioAboveFold(frameElement);
				}),
				(r.GetRatioAboveFold = function(e) {
					var t = new ViewportComputer().getViewport(),
						i = t.height,
						o = e.getBoundingClientRect(),
						n = t.scrollTop;
					return i >= o.bottom + n
						? 1
						: i <= o.top + n
							? 0
							: (i - o.top - n) / e.offsetHeight;
				}),
				r
			);
		})(),
		__extends$14 = ((Ru = function(e, t) {
			return (Ru =
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
			Ru(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Ru,
		DisplayEvent = (function(n) {
			function e(e, t, i) {
				var o = n.call(this, e) || this;
				return (
					(o.displayParameters = i),
					(o.urlBuilder = t),
					(o.gdprPrivacyProvider = new GDPRPrivacyProvider(window)),
					o
				);
			}
			return (
				__extends$14(e, n),
				(e.prototype.eval = function(e) {
					this.displayParameters.atfRatio = ViewabilityComputer.GetAtfRatio(
						e.context,
						this.displayParameters.containerid
					);
				}),
				(e.prototype.buildCasUrl = function(t, i, o, n, r) {
					var a = this;
					this.gdprPrivacyProvider.readyToRetrieve()
						? this.gdprPrivacyProvider.retrieveGDPRConsentForPassback(function(
								e
						  ) {
								t(a.urlBuilder.buildUrl(a.displayParameters, i, o, n, r, e));
						  })
						: t(this.urlBuilder.buildUrl(this.displayParameters, i, o, n, r));
				}),
				e
			);
		})(AbstractEvent),
		HandlerType,
		ov;
	(ov = HandlerType || (HandlerType = {})),
		(ov[(ov.AFR = 0)] = "AFR"),
		(ov[(ov.AJS = 1)] = "AJS");
	var __extends$15 = ((pv = function(e, t) {
			return (pv =
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
			pv(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		pv,
		DisplayEventAFR = (function(a) {
			function n(e, t, i) {
				var o = a.call(this, n.NAME, e, t) || this;
				return (o.respectsEyeoDeal = i), o;
			}
			return (
				__extends$15(n, a),
				(n.prototype.eval = function(t) {
					var i = this;
					a.prototype.eval.call(this, t);
					var o = this.displayParameters.containerid,
						n = this.displayParameters.callbackSuccess,
						r = this.displayParameters.callbackError;
					this.buildCasUrl(
						function(e) {
							if (t.context.isAdBlocked) {
								if (!i.respectsEyeoDeal) return;
								i.loadIframe(e, o, n, r);
							} else i.loadIframe(e, o, n, r);
						},
						t.context,
						HandlerType.AFR
					);
				}),
				(n.prototype.loadIframe = function(e, t, i, o) {
					var n = document.createElement("iframe");
					(n.src = e),
						(n.id = t + "_cto_iframe"),
						(n.frameBorder = "0"),
						n.setAttribute("hspace", "0"),
						n.setAttribute("vspace", "0"),
						(n.marginWidth = "0px"),
						(n.marginHeight = "0px"),
						(n.width = "100%"),
						(n.height = "100%"),
						(n.scrolling = "no"),
						i && (n.onload = i),
						o && (n.onerror = o);
					var r = document.getElementById(t);
					r
						? r.appendChild(n)
						: Log.Error('Target element "' + t + '" not found in the document');
				}),
				(n.NAME = "displayAfr"),
				n
			);
		})(DisplayEvent),
		__extends$16 = ((Sv = function(e, t) {
			return (Sv =
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
			Sv(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Sv,
		DisplayEventAsync = (function(_super) {
			function DisplayEventAsync(e, t) {
				return _super.call(this, DisplayEventAsync.NAME, e, t) || this;
			}
			return (
				__extends$16(DisplayEventAsync, _super),
				(DisplayEventAsync.prototype.eval = function(t) {
					var i = this;
					_super.prototype.eval.call(this, t);
					var o = this.displayParameters.containerid,
						n = this.displayParameters.width,
						r = this.displayParameters.height,
						e = this.displayParameters.layout,
						a = this.displayParameters.callbackSuccess,
						s = this.displayParameters.callbackError,
						d = this.displayParameters.passbackCode;
					if ("" === o || void 0 === o) Log.Error("No containerid provided");
					else if (void 0 !== e) {
						var c =
								DisplayEventAsync.CHAPI_NAME +
								"=" +
								encodeURIComponent(JSON.stringify(e)),
							l = function() {
								var e = i.getContainerSize(o, n, r);
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
						void 0 !== n && void 0 !== r
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
					var o = document.getElementById(e),
						n = DomManipulationTools.inIframe(),
						r = t || (n ? document.body.offsetWidth : o ? o.offsetWidth : 0),
						a = i || (n ? document.body.offsetHeight : o ? o.offsetHeight : 0);
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
		__extends$17 = ((Aw = function(e, t) {
			return (Aw =
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
			Aw(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Aw,
		DisplayEventSync = (function(i) {
			function o(e, t) {
				return i.call(this, o.NAME, e, t) || this;
			}
			return (
				__extends$17(o, i),
				(o.prototype.eval = function(e) {
					var t = this;
					i.prototype.eval.call(this, e),
						this.buildCasUrl(function(e) {
							t.loadScriptSync(e);
						}, e.context);
				}),
				(o.prototype.loadScriptSync = function(e) {
					document.write(
						"<script type='text/javascript' src='" + e + "'></script>"
					);
				}),
				(o.NAME = "displaySync"),
				o
			);
		})(DisplayEvent),
		__extends$18 = ((Tw = function(e, t) {
			return (Tw =
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
			Tw(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Tw,
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
				(c.prototype.buildUrl = function(e, t, i, o, n, r) {
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
					(a += o ? "&width=" + o : ""),
					(a += n ? "&height=" + n : ""),
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
						o = i.respectsAdRatioConstraint;
					return (
						o
							? ((a.atfRatio = i.newAtfRatio), (a.btfRatio = i.newBtfRatio))
							: Log.Debug(
									"The element " +
										e +
										"does not respect Eyeo acceptable ads ratio constraints"
							  ),
						o
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
						o = screen.width * screen.height,
						n = a.atfRatio + (t * i) / o,
						r = a.btfRatio + ((1 - t) * i) / o;
					return {
						respectsAdRatioConstraint: n <= 0.15 && r <= 0.25,
						newAtfRatio: n,
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
					var o;
					(o = t.async
						? new DisplayEventAsync(new DisplayUrlBuilder(), t)
						: new DisplayEventSync(new DisplayUrlBuilder(), t)),
						window.criteo_pubtag.push(o);
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
					var o = window.criteo_pubtag.context;
					if (void 0 === o.isAdBlocked)
						new AdBlocker().isAdBlocked(function(e) {
							(o.isAdBlocked = e), window.criteo_pubtag.evalEvents();
						});
					var n,
						r,
						a = new EyeoDealValidator();
					(n = new DisplayEventAFR(
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
						n,
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
							for (var o = Math.max(0 <= t ? t : i - Math.abs(t), 0); o < i; ) {
								if (o in this && this[o] === e) return o;
								o++;
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
									o = 2 <= arguments.length ? arguments[1] : void 0,
									n = 0;
								n < t;
								n++
							)
								if (n in this) {
									var r = this[n];
									e.call(o, r, n, this) && i.push(r);
								}
							return i;
						});
				}),
				e
			);
		})(),
		StorageOrigin,
		Ny;
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
	(Ny = StorageOrigin || (StorageOrigin = {})),
		(Ny[(Ny.None = 0)] = "None"),
		(Ny[(Ny.Cookie = 1)] = "Cookie"),
		(Ny[(Ny.LocalStorage = 2)] = "LocalStorage");
	var CookieSynchronizer = (function() {
			function o(e, t, i) {
				(this.isDebug = t),
					(this.topWin = e),
					(this.topDoc = e.document),
					(this.localStorageHelper = new LocalStorageHelper(this.topWin)),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage()),
					(this.canWriteCookies = this.checkCookiesAreWriteable()),
					(this.topUrl = i);
			}
			return (
				(o.isSafariBrowser = function() {
					return null !== navigator.userAgent.match(o.SAFARI_CHECK_REGEX);
				}),
				(o.isAndroidBrowser = function() {
					return -1 < navigator.userAgent.toLowerCase().indexOf("android");
				}),
				(o.isFirefoxBrowser = function() {
					return -1 < navigator.userAgent.toLowerCase().indexOf("firefox");
				}),
				(o.isEdgeChromiumBrowser = function() {
					return -1 < navigator.userAgent.toLowerCase().indexOf("edg/");
				}),
				(o.isEdgeLegacyBrowser = function() {
					return -1 < navigator.userAgent.toLowerCase().indexOf("edge/");
				}),
				(o.prototype.synchronizeCriteoUid = function(e) {
					var t = this;
					if (
						(e ||
							o.isSafariBrowser() ||
							o.isAndroidBrowser() ||
							o.isFirefoxBrowser() ||
							o.isEdgeChromiumBrowser() ||
							o.isEdgeLegacyBrowser()) &&
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
				(o.prototype.appendGumIframeIfDoesNotExist = function() {
					var r = this,
						e = this.createGumIframe();
					this.topDoc.getElementById(o.SYNCFRAME_ID) ||
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
													o =
														"string" == typeof t.callbacks
															? [t.callbacks]
															: t.callbacks;
												i < o.length;
												i++
											) {
												var n = o[i];
												new Image().src = n;
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
				(o.prototype.getClientSideUid = function() {
					return this.getFromAllStorages(o.GUID_COOKIE_NAME);
				}),
				(o.prototype.setClientSideUid = function(e) {
					this.writeOnAllStorages(
						o.GUID_COOKIE_NAME,
						e,
						o.GUID_RETENTION_TIME_HOUR
					);
				}),
				(o.prototype.deleteClientSideUid = function() {
					this.deleteFromAllStorage(o.GUID_COOKIE_NAME);
				}),
				(o.prototype.getBundle = function() {
					return this.getFromAllStorages(o.BUNDLE_COOKIE_NAME);
				}),
				(o.prototype.setBundle = function(e) {
					this.writeOnAllStorages(
						o.BUNDLE_COOKIE_NAME,
						e,
						o.GUID_RETENTION_TIME_HOUR
					);
				}),
				(o.prototype.deleteBundle = function() {
					this.deleteFromAllStorage(o.BUNDLE_COOKIE_NAME);
				}),
				(o.prototype.getClientSideOptOut = function() {
					var e = this.getFromAllStorages(o.OPTOUT_COOKIE_NAME);
					return { value: "1" === e.value, origin: e.origin };
				}),
				(o.prototype.setClientSideOptOut = function() {
					this.writeOnAllStorages(
						o.OPTOUT_COOKIE_NAME,
						"1",
						o.OPTOUT_RETENTION_TIME_HOUR
					);
				}),
				(o.prototype.deleteClientSideIdfs = function() {
					this.deleteFromAllStorage(o.IDFS_COOKIE_NAME);
				}),
				(o.prototype.getClientSideIdfs = function() {
					return this.getFromAllStorages(o.IDFS_COOKIE_NAME);
				}),
				(o.prototype.setClientSideIdfs = function(e) {
					this.writeOnAllStorages(
						o.IDFS_COOKIE_NAME,
						e,
						o.GUID_RETENTION_TIME_HOUR
					);
				}),
				(o.prototype.getClientSideSecureId = function() {
					return this.getFromAllStorages(o.SECURE_ID_COOKIE_NAME);
				}),
				(o.prototype.setClientSideSecureId = function(e) {
					this.writeOnAllStorages(
						o.SECURE_ID_COOKIE_NAME,
						e,
						o.GUID_RETENTION_TIME_HOUR
					);
				}),
				(o.prototype.deleteClientSideSecureId = function() {
					this.deleteFromAllStorage(o.SECURE_ID_COOKIE_NAME);
				}),
				(o.prototype.getClientSideLocalWebId = function() {
					return this.getFromAllStorages(o.LOCAL_WEB_ID_COOKIE_NAME);
				}),
				(o.prototype.checkCookiesAreWriteable = function() {
					var e = "cto_writeable";
					CookieHelper.SetCookie(e, "1", 1, this.topDoc, !0);
					var t = "1" === CookieHelper.GetCookie(e, this.topDoc);
					return CookieHelper.DeleteCookie(e, this.topDoc, !0), t;
				}),
				(o.prototype.createGumIframe = function() {
					var e = this.topDoc.createElement("iframe"),
						t = this.buildSyncframeSrc();
					return (
						(e.src = t), (e.id = o.SYNCFRAME_ID), (e.style.display = "none"), e
					);
				}),
				(o.prototype.writeOnAllStorages = function(e, t, i) {
					this.localStorageEnabled && this.localStorageHelper.setItem(e, t),
						CookieHelper.SetCookie(e, t, i, this.topDoc, !0);
				}),
				(o.prototype.getFromAllStorages = function(e) {
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
				(o.prototype.deleteFromAllStorage = function(e) {
					CookieHelper.DeleteCookie(e, this.topDoc, !0),
						this.localStorageEnabled && this.localStorageHelper.removeItem(e);
				}),
				(o.prototype.getTld = function() {
					var e = CookieHelper.SetCookie(
						o.TLD_TEST_COOKIE_NAME,
						"test",
						1,
						this.topDoc,
						!0
					);
					return (
						CookieHelper.DeleteCookie(o.TLD_TEST_COOKIE_NAME, this.topDoc, !0),
						e
					);
				}),
				(o.prototype.buildSyncframeSrc = function() {
					var e = this.getClientSideUid(),
						t = this.getClientSideIdfs(),
						i = this.getClientSideOptOut(),
						o = this.getClientSideSecureId(),
						n = this.getClientSideLocalWebId(),
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
							sid: o,
							origin: "publishertag",
							version: d,
							lwid: n,
							tld: a,
							bundle: r,
							topUrl: s,
							cw: c
						}));
				}),
				(o.GUID_COOKIE_NAME = "cto_idcpy"),
				(o.GUID_RETENTION_TIME_HOUR = 9360),
				(o.IDFS_COOKIE_NAME = "cto_idfs"),
				(o.SECURE_ID_COOKIE_NAME = "cto_sid"),
				(o.LOCAL_WEB_ID_COOKIE_NAME = "cto_lwid"),
				(o.BUNDLE_COOKIE_NAME = "cto_bundle"),
				(o.OPTOUT_COOKIE_NAME = "cto_optout"),
				(o.OPTOUT_RETENTION_TIME_HOUR = 43200),
				(o.TLD_TEST_COOKIE_NAME = "cto_pub_test_tld"),
				(o.SYNCFRAME_ID = "criteo-syncframe"),
				(o.SAFARI_CHECK_REGEX = /^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i),
				o
			);
		})(),
		Context = (function() {
			function e(e, t) {
				this.charset = e.charset || e.characterSet || "";
				var i = DomManipulationTools.getHighestAccessibleWindow(t);
				(this.displayContext = this.getDisplayContext(i)),
					(this.highestAccessibleUrl = DomManipulationTools.getHighestAccessibleUrl(
						i
					)),
					this.synchronizeCriteoUid(i, this.highestAccessibleUrl);
				var o = this.getQueryStringParams(this.highestAccessibleUrl);
				(this.debugMode = "1" === o.pbt_debug || !1),
					(this.noLog = "1" === o.pbt_nolog || !1),
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
						for (var o = 0, n = i[1].split("&"); o < n.length; o++) {
							var r = n[o].split("=");
							t[tryDecodeURIComponent(r[0])] = tryDecodeURIComponent(r[1]);
						}
					return t;
				}),
				(e.prototype.synchronizeCriteoUid = function(e, t) {
					var i = e.topFrame,
						o = new CookieSynchronizer(i, this.debugMode, t);
					(this.ctoIdOnPublisherDomain = o.getClientSideUid().value),
						(this.isOptOut = o.getClientSideOptOut().value),
						(this.idfs = o.getClientSideIdfs().value),
						(this.secureId = o.getClientSideSecureId().value),
						(this.bundle = o.getBundle().value),
						o.synchronizeCriteoUid();
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
				for (var i = 0, o = e; i < o.length; i++) {
					var n = o[i];
					this.events.push(n);
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
		for (var o in ((i.prototype = t.prototype), t))
			t.hasOwnProperty(o) && (i[o] = t[o]);
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
					for (var i = 0, o = e; i < o.length; i++) {
						var n = o[i];
						"function" == typeof n && safeFunction(n)();
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
	function RenderAdPassback(e, t, i, o) {
		var n;
		"string" == typeof e
			? (n = e)
			: ((n = getParam(e, "adUnit", "string")),
			  (t = getParam(e, "passback", "function")),
			  (i = getParam(e, "customRenderFunction", "function")),
			  (o = getParam(e, "minimumBidPrice", "number"))),
			void 0 !== n
				? void 0 !== t
					? ("function" != typeof i &&
							(i = function(e) {
								RenderAd({ bidId: e.id, containerId: n });
							}),
					  (window.Criteo.passbackEvents = window.Criteo.passbackEvents || []),
					  window.Criteo.passbackEvents.push(function() {
							var e = GetBidsForAdUnit(n)[0];
							e && (void 0 === o || e.cpm > o) ? i(e) : t(n);
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
