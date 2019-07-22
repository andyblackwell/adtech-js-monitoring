!(function() {
	"use strict";
	var AbstractEvent = (function() {
			function t(t) {
				this.name = t;
			}
			return (t.prototype.eval = function(t) {}), t;
		})(),
		LogLevel,
		d;
	(d = LogLevel || (LogLevel = {})),
		(d[(d.Error = 0)] = "Error"),
		(d[(d.Warning = 1)] = "Warning"),
		(d[(d.Debug = 2)] = "Debug");
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
				(r.Log = function(t, e) {
					if (!(r.LOGLEVEL < t)) {
						var i = LogLevel[t].toUpperCase(),
							n = window.navigator.userAgent,
							o = 0 < n.indexOf("MSIE ") || 0 < n.indexOf("Trident/");
						window.console
							? o
								? console.log("[PubTag] " + i + ": " + e)
								: console.log("%cPubTag", CSS_LOG, i + ": " + e)
							: t <= LogLevel.Error && alert("[PubTag] " + i + ": " + e);
					}
				}),
				(r.Debug = function(t) {
					r.Log(LogLevel.Debug, t);
				}),
				(r.Warning = function(t) {
					r.Log(LogLevel.Warning, t);
				}),
				(r.Error = function(t) {
					r.Log(LogLevel.Error, t);
				}),
				(r.LOGLEVEL = LogLevel.Error),
				r
			);
		})();
	function SetLogLevel(t) {
		Log.LOGLEVEL = t;
	}
	var TimeMeasurer = (function() {
		function i(t) {
			void 0 === t && (t = !0),
				t && window.performance && window.performance.now
					? (this.now = window.performance.now.bind(window.performance))
					: Date.now
						? (this.now = Date.now)
						: (this.now = function() {
								return new Date().getTime();
						  });
		}
		return (
			(i.CreateRunning = function() {
				var t = new i();
				return t.start(), t;
			}),
			(i.CreateWithStartTime = function(t) {
				var e = new i(!1);
				return (e.startTime = t), e;
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
	function tryParseJson(t) {
		try {
			return JSON.parse(t);
		} catch (t) {
			return;
		}
	}
	var CRITEO_VENDOR_ID = 91,
		cmpCallbacks = {};
	function hasCMP(t) {
		return cmpInFrame(t) || void 0 !== getCMPFrame(t);
	}
	function retrieveGDPRConsent(t, i, e) {
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
		executeCommand(t, "getConsentData", null, function(t, e) {
			o ||
				(clearTimeout(r),
				e
					? (Log.Debug("Consent retrieved in " + n.elapsed() + "ms"),
					  getVendorConsentDataCallback(t, i))
					: (Log.Warning("Error retrieving GDPR consent data from CMP"),
					  i(void 0)));
		});
	}
	function getVendorConsentDataCallback(t, e) {
		if (t) {
			var i = {};
			void 0 !== t.consentData && (i.consentData = t.consentData),
				void 0 !== t.gdprApplies && (i.gdprApplies = !!t.gdprApplies),
				e(i);
		} else Log.Warning("Unable to read GDPR consent data from CMP"), e(void 0);
	}
	function executeCommand(t, e, i, n) {
		if (!cmpInFrame(t)) {
			Log.Debug("No CMP defined on current frame");
			var r = getCMPFrame(t);
			(t.__cmp = function(t, e, i) {
				if (!r)
					return (
						Log.Warning("CMP not found"), void i({ msg: "CMP not found" }, !1)
					);
				var n = Math.random().toString(10),
					o = { __cmpCall: { command: t, parameter: e, callId: n } };
				(cmpCallbacks[n] = i), r.postMessage(o, "*");
			}),
				t.addEventListener(
					"message",
					function(t) {
						var e = "string" == typeof t.data ? tryParseJson(t.data) : t.data;
						if (
							e &&
							e.__cmpReturn &&
							e.__cmpReturn.callId &&
							e.__cmpReturn.returnValue
						) {
							var i = e.__cmpReturn;
							cmpCallbacks &&
								cmpCallbacks[i.callId] &&
								(cmpCallbacks[i.callId](i.returnValue, i.success),
								delete cmpCallbacks[i.callId]);
						}
					},
					!1
				);
		}
		t.__cmp(e, i, n);
	}
	function cmpInFrame(t) {
		return "function" == typeof t.__cmp;
	}
	function getCMPFrame(t) {
		for (var e, i = t, n = 0; n < 10; ++n) {
			try {
				i.frames.__cmpLocator && (e = i);
			} catch (t) {}
			if (i === t.top) break;
			i = i.parent;
		}
		return e;
	}
	function tryGetLocalStorage(t) {
		try {
			return t.localStorage;
		} catch (t) {
			return;
		}
	}
	var LocalStorageHelper = (function() {
			function t(t) {
				(this.EXPIRE_SUFFIX = "_expires"),
					(this.CHECK_STORAGE_KEY = "criteo_localstorage_check"),
					(this.localStorage = tryGetLocalStorage(t || window));
			}
			return (
				(t.prototype.checkLocalStorage = function() {
					if (!this.localStorage) return !1;
					var t = this.CHECK_STORAGE_KEY;
					try {
						return (
							this.localStorage.setItem(t, t),
							this.localStorage.removeItem(t),
							!0
						);
					} catch (t) {
						return !1;
					}
				}),
				(t.prototype.removeItem = function(t) {
					this.localStorage.removeItem(t),
						this.localStorage.removeItem(t + this.EXPIRE_SUFFIX);
				}),
				(t.prototype.getItem = function(t, e) {
					var i = new Date().getTime(),
						n = this.localStorage.getItem(t + this.EXPIRE_SUFFIX),
						o = n ? parseInt(n, 10) : -1;
					return (-1 !== o && o < i) || (e && (-1 === o || e < o - i))
						? (this.removeItem(t), null)
						: this.localStorage.getItem(t);
				}),
				(t.prototype.setItem = function(t, e, i) {
					if ((this.localStorage.setItem(t, e), i)) {
						var n = new Date().getTime() + i;
						this.localStorage.setItem(t + this.EXPIRE_SUFFIX, n.toString());
					}
				}),
				t
			);
		})(),
		DirectBiddingSilentModeManager = (function() {
			function i() {
				(this.localStorageHelper = new LocalStorageHelper()),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage());
			}
			return (
				(i.prototype.silentModeEnabled = function() {
					var t = i.SILENT_MODE_KEY;
					return (
						this.localStorageEnabled &&
						null !== this.localStorageHelper.getItem(t)
					);
				}),
				(i.prototype.enableSilentMode = function(t) {
					if (this.localStorageEnabled) {
						var e = i.SILENT_MODE_KEY;
						this.localStorageHelper.setItem(e, "1", t);
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
			function t(t) {
				(this.x = t + "_lock_A"),
					(this.y = t + "_lock_B"),
					(this.id = Math.floor(1e9 * Math.random()).toString());
			}
			return (
				(t.prototype.get = function(t) {
					var e = localStorage.getItem(t);
					if (e) {
						var i = e.split("|");
						if (!(i.length < 2 || parseInt(i[1], 10) < now())) return i[0];
					}
				}),
				(t.prototype.set = function(t, e) {
					var i = now() + e;
					localStorage.setItem(t, this.id + "|" + i);
				}),
				(t.prototype.acquire = function(t, e, i) {
					var n = this;
					void 0 === i && (i = 100),
						i <= 0 || this.tryAcquire(e)
							? (t(), this.release())
							: setTimeout(function() {
									n.acquire(t, e, i - 10);
							  }, 10);
				}),
				(t.prototype.tryAcquire = function(t) {
					localStorage.setItem(this.x, this.id);
					var e = this.get(this.y);
					return !(
						(e && e !== this.id) ||
						(this.set(this.y, t),
						localStorage.getItem(this.x) !== this.id ||
							this.get(this.y) !== this.id)
					);
				}),
				(t.prototype.release = function() {
					localStorage.removeItem(this.x), localStorage.removeItem(this.y);
				}),
				t
			);
		})(),
		Size = (function() {
			function t(t, e) {
				(this.width = t), (this.height = e);
			}
			return (
				(t.prototype.toString = function() {
					return this.width + "x" + this.height;
				}),
				t
			);
		})(),
		SlotKey = (function() {
			function t(t) {
				this.impressionId = t;
			}
			return (
				(t.prototype.toString = function() {
					return "ImpId" + this.impressionId;
				}),
				t
			);
		})(),
		__extends = ((Qa = function(t, e) {
			return (Qa =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			Qa(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		Qa,
		SlotKeyWithSize = (function(o) {
			function t(t, e, i) {
				var n = o.call(this, t) || this;
				return (n.size = e), (n.networkId = i), n;
			}
			return (
				__extends(t, o),
				(t.prototype.toString = function() {
					return (
						o.prototype.toString.call(this) +
						"_Size" +
						this.size +
						"_NetworkId" +
						this.networkId
					);
				}),
				t
			);
		})(SlotKey),
		__extends$1 = ((fb = function(t, e) {
			return (fb =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			fb(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		fb,
		SlotKeyWithZoneId = (function(n) {
			function t(t, e) {
				var i = n.call(this, t) || this;
				return (i.zoneId = e), i;
			}
			return (
				__extends$1(t, n),
				(t.prototype.toString = function() {
					return n.prototype.toString.call(this) + "_ZoneId" + this.zoneId;
				}),
				t
			);
		})(SlotKey),
		SlotKeyFactory = (function() {
			function t(t, e) {
				(this.useZoneIdIntegration = t), (this.networkId = e);
			}
			return (
				(t.prototype.createKeysFromSlotRequest = function(t) {
					if (this.useZoneIdIntegration)
						return [new SlotKeyWithZoneId(t.impId, t.zoneId)];
					for (var e = [], i = 0, n = t.sizes; i < n.length; i++) {
						var o = n[i];
						e.push(new SlotKeyWithSize(t.impId, o, this.networkId));
					}
					return e;
				}),
				(t.prototype.createKeyFromSlotResponse = function(t) {
					return this.useZoneIdIntegration
						? new SlotKeyWithZoneId(t.impid, t.zoneid)
						: new SlotKeyWithSize(
								t.impid,
								new Size(t.width, t.height),
								this.networkId
						  );
				}),
				(t.prototype.createKeyFromBid = function(t) {
					return this.useZoneIdIntegration
						? new SlotKeyWithZoneId(t.impressionId, t.zoneId)
						: new SlotKeyWithSize(
								t.impressionId,
								new Size(t.width, t.height),
								this.networkId
						  );
				}),
				t
			);
		})(),
		DirectBiddingBidManager = (function() {
			function l(t, e) {
				(this.localStorageHelper = new LocalStorageHelper()),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage()),
					(this.slotKeyFactory = new SlotKeyFactory(t, e));
			}
			return (
				(l.useZoneIdIntegration = function(t, e) {
					return (
						void 0 === e ||
						0 ===
							t.filter(function(t) {
								return void 0 !== t.sizes && 0 < t.sizes.length;
							}).length
					);
				}),
				(l.prototype.get = function(t) {
					var e = l.BID_KEY_PREFIX + t.toString(),
						i = this.localStorageHelper.getItem(e),
						n = i && tryParseJson(i);
					return n && "object" == typeof n && "bids" in n
						? ((n.bids = n.bids.filter(function(t) {
								return t.expiration > now();
						  })),
						  n)
						: { bids: [] };
				}),
				(l.prototype.set = function(t, e) {
					var i = l.BID_KEY_PREFIX + t.toString();
					0 < e.bids.length || (e.no_bid && e.no_bid > now())
						? this.localStorageHelper.setItem(i, JSON.stringify(e))
						: this.localStorageHelper.removeItem(i);
				}),
				(l.prototype.filterNoBidSlots = function(t) {
					for (var e = [], i = 0, n = t; i < n.length; i++) {
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
								(d instanceof SlotKeyWithSize ? r.push(d.size) : e.push(o));
						}
						0 < r.length && ((o.sizes = r), e.push(o));
					}
					return e;
				}),
				(l.prototype.getRequestCachedBids = function(t, e) {
					void 0 === e && (e = 5e3);
					for (var i = [], n = 0, o = t; n < o.length; n++)
						for (
							var r = o[n],
								a = 0,
								s = this.slotKeyFactory.createKeysFromSlotRequest(r);
							a < s.length;
							a++
						) {
							var d = s[a],
								c = this.getBid(d, e);
							void 0 !== c && c !== l.NO_BID && i.push(c);
						}
					return i;
				}),
				(l.prototype.getBid = function(t, e) {
					if ((void 0 === e && (e = 5e3), this.localStorageEnabled)) {
						var i = this.get(t);
						if (i.no_bid && i.no_bid > now()) return l.NO_BID;
						if (0 < e)
							for (var n = 0, o = i.bids; n < o.length; n++) {
								var r = o[n];
								if (new Lock(l.BID_KEY_PREFIX + r.bid.slotid).tryAcquire(e))
									return r.bid;
							}
					}
				}),
				(l.prototype.storeRequestNoBid = function(t, e) {
					for (
						var i = 0, n = this.slotKeyFactory.createKeysFromSlotRequest(t);
						i < n.length;
						i++
					) {
						var o = n[i];
						this.storeNoBid(o, e);
					}
				}),
				(l.prototype.storeResponseBid = function(e, i) {
					var t = this.slotKeyFactory.createKeyFromSlotResponse(e);
					this.modifyCache(t, function(t) {
						t.bids.push({ bid: e, expiration: now() + 1e3 * i });
					});
				}),
				(l.prototype.storeNoBid = function(t, e) {
					this.modifyCache(t, function(t) {
						t.no_bid = Math.max(t.no_bid || 0, now() + 1e3 * e);
					});
				}),
				(l.prototype.removeBid = function(i) {
					var t = this.slotKeyFactory.createKeyFromBid(i);
					this.modifyCache(t, function(t) {
						for (var e = 0; e < t.bids.length; e++)
							if (t.bids[e].bid.slotid === i.slotId)
								return void t.bids.splice(e, 1);
					}),
						new Lock(t.toString()).release();
				}),
				(l.prototype.modifyCache = function(e, i) {
					var n = this;
					if (this.localStorageEnabled) {
						var o = new Lock(e.toString());
						o.acquire(function() {
							var t = n.get(e);
							i(t), n.set(e, t), o.release();
						}, 1e3);
					}
				}),
				(l.NO_BID = "nobid"),
				(l.BID_KEY_PREFIX = "criteo_pt_cdb_bidcache_"),
				l
			);
		})(),
		DirectBiddingCache = (function() {
			function t(t, e, i) {
				var n = DirectBiddingBidManager.useZoneIdIntegration(e, i);
				(this.bidManager = new DirectBiddingBidManager(n, i)),
					(this.silentModeManager = new DirectBiddingSilentModeManager()),
					(this.context = t);
			}
			return (
				(t.prototype.filterNoBidSlots = function(t) {
					var e = this.bidManager.filterNoBidSlots(t);
					return this.context.shouldIgnoreSilentMode
						? (e.length !== t.length &&
								this.context.setSilentModeIgnored &&
								this.context.setSilentModeIgnored(),
						  t)
						: e;
				}),
				(t.prototype.silentModeEnabled = function() {
					var t = !1;
					return (
						this.silentModeManager.silentModeEnabled() &&
							(this.context.shouldIgnoreSilentMode &&
							this.context.setSilentModeIgnored
								? this.context.setSilentModeIgnored()
								: (t = !0)),
						t
					);
				}),
				(t.prototype.getCachedBids = function(t) {
					return this.bidManager.getRequestCachedBids(t);
				}),
				(t.prototype.removeBid = function(t) {
					this.bidManager.removeBid(t);
				}),
				(t.prototype.handleResponse = function(t, e, i, n) {
					var o = i.time_to_next_call;
					0 < o &&
						(Log.Debug("Global silent mode enabled for " + o + " seconds"),
						this.silentModeManager.enableSilentMode(1e3 * o));
					var r = {};
					if (i.slots)
						for (var a = 0, s = i.slots; a < s.length; a++) {
							(f = s[a]).ttl && (r[f.imp_id] = f.ttl);
						}
					if (e.slots)
						for (var d = 0, c = e.slots; d < c.length; d++) {
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
							for (var p = 0, h = t; p < h.length; p++) {
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
				t
			);
		})(),
		AsyncRequest = (function() {
			function a(t, e, i, n) {
				void 0 === n && (n = !0),
					(this.url = t),
					(this.data = e),
					(this.contentType = i),
					(this.withCredentials = n);
			}
			return (
				(a.prototype.send = function(t, e, i, n) {
					var o = void 0 !== this.data ? "POST" : "GET",
						r = this.getXMLHttpRequest(o, t, e, i, n);
					if (void 0 !== r) r.send(this.data);
					else {
						var a = this.getXDomainRequest(o, t, e, i, n);
						void 0 !== a && a.send(this.data);
					}
				}),
				(a.prototype.getXMLHttpRequest = function(t, e, i, n, o) {
					var r = new XMLHttpRequest();
					if ("withCredentials" in r)
						return (
							r.open(t, this.url, !0),
							(r.timeout = o || a.LOCAL_PASSBACK_TIMEOUT),
							this.contentType
								? r.setRequestHeader("Content-type", this.contentType)
								: "POST" === t &&
								  r.setRequestHeader(
										"Content-type",
										"application/x-www-form-urlencoded"
								  ),
							(r.withCredentials = this.withCredentials),
							(r.onload = function() {
								4 === r.readyState && 200 === r.status
									? e(r.responseText)
									: i(r.readyState, r.status);
							}),
							(r.onerror = function() {
								i(void 0, void 0);
							}),
							n && (r.ontimeout = n),
							r
						);
				}),
				(a.prototype.getXDomainRequest = function(t, e, i, n, o) {
					if ("undefined" != typeof XDomainRequest) {
						var r = new XDomainRequest();
						return (
							(r.timeout = o || a.LOCAL_PASSBACK_TIMEOUT),
							r.open(t, this.url),
							(r.onload = function() {
								void 0 !== r.responseText
									? e(r.responseText)
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
	function resolvePrebidTimeout(t) {
		var e =
			"number" == typeof window.PREBID_TIMEOUT ? window.PREBID_TIMEOUT : void 0;
		return t && e ? Math.min(t, e) : t || e || void 0;
	}
	var PublisherTagVersion = 68,
		DirectBiddingMetric = function(t, e, i, n, o, r, a, s, d, c, l, u) {
			(this.publisherTagVersion = t),
				(this.slots = e),
				(this.elapsed = i),
				(this.isTimeout = n),
				(this.pageLoadElapsed = o),
				(this.adapterStartElapsed = r),
				(this.cdbCallStartElapsed = a),
				(this.cdbCallEndElapsed = s),
				(this.adapterEndElapsed = d),
				(this.setTargetingElapsed = c),
				(this.adapterTimeout = l),
				(this.adapterIsTimeout = u);
		},
		DirectBiddingMetricSlot = function(t, e, i, n, o) {
			(this.impressionId = t),
				(this.zoneId = e),
				(this.adUnitId = i),
				(this.cachedBidUsed = n),
				(this.isDsc = o);
		},
		DirectBiddingMetricBuilder = (function() {
			function t() {
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
				(t.prototype.withElapsed = function(t) {
					return (this.elapsed = Math.round(t)), this;
				}),
				(t.prototype.withIsTimeout = function(t) {
					return (this.isTimeout = t), this;
				}),
				(t.prototype.withPageLoadElapsed = function(t) {
					return (this.pageLoadElapsed = Math.round(t)), this;
				}),
				(t.prototype.withAdapterStartElapsed = function(t) {
					return (this.adapterStartElapsed = Math.round(t)), this;
				}),
				(t.prototype.withCdbCallStartElapsed = function(t) {
					return (this.cdbCallStartElapsed = Math.round(t)), this;
				}),
				(t.prototype.withCdbCallEndElapsed = function(t) {
					return (this.cdbCallEndElapsed = Math.round(t)), this;
				}),
				(t.prototype.withSetTargetingElapsed = function(t) {
					return (this.setTargetingElapsed = Math.round(t)), this;
				}),
				(t.prototype.withAdapterEndElapsed = function(t) {
					return (this.adapterEndElapsed = Math.round(t)), this;
				}),
				(t.prototype.withAdapterTimeout = function(t) {
					return (this.adapterTimeout = t && Math.round(t)), this;
				}),
				(t.prototype.withCachedBidsReturned = function(t) {
					return (this.cachedBidsReturned = t), this;
				}),
				(t.prototype.addSlot = function(t, e, i, n) {
					var o =
						0 <
						this.cachedBidsReturned.filter(function(t) {
							return t.impid === i && t.zoneid === e;
						}).length;
					return (
						this.slots.push(new DirectBiddingMetricSlot(t, e, i, o, n)), this
					);
				}),
				(t.prototype.build = function() {
					var t;
					return (
						void 0 !== this.adapterTimeout &&
							(t = this.adapterEndElapsed > this.adapterTimeout),
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
							t
						)
					);
				}),
				t
			);
		})(),
		DirectBiddingMetricsManager = (function() {
			function o() {
				(this.localStorageHelper = new LocalStorageHelper()),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage());
			}
			return (
				(o.prototype.getMetrics = function(t) {
					if (this.localStorageEnabled) {
						var e = o.METRICS_STORAGE_KEY,
							i = this.localStorageHelper.getItem(e),
							n = i ? tryParseJson(i) : [];
						return t && this.localStorageHelper.removeItem(e), n;
					}
					return [];
				}),
				(o.prototype.setMetrics = function(t) {
					if (this.localStorageEnabled) {
						var e = o.METRICS_STORAGE_KEY;
						this.localStorageHelper.setItem(e, JSON.stringify(t), 36e5);
					}
				}),
				(o.prototype.storeMetric = function(t) {
					if (this.localStorageEnabled) {
						var e = this.getMetrics(!1);
						e.push(t), this.setMetrics(e);
					}
				}),
				(o.METRICS_STORAGE_KEY = "criteo_pt_cdb_metrics"),
				o
			);
		})(),
		IntegrationMode,
		Ee;
	function parse(t) {
		switch (t.toLowerCase()) {
			case "amp":
				return IntegrationMode.AMP;
			default:
				return IntegrationMode.Unspecified;
		}
	}
	(Ee = IntegrationMode || (IntegrationMode = {})),
		(Ee[(Ee.Unspecified = 0)] = "Unspecified"),
		(Ee[(Ee.AMP = 1)] = "AMP");
	var DirectBiddingRequestBuilder = (function() {
		function t(t, e, i, n, o, r, a, s, d, c) {
			(this.slots = t),
				(this.context = e),
				(this.metricsManager = i),
				(this.urlBuilder = n),
				(this.profileId = o),
				(this.integrationMode = r || IntegrationMode.Unspecified),
				(this.networkId = a),
				(this.adapterVersion = s),
				(this.gdprConsent = d),
				(this.wrapperVersion = c);
		}
		return (
			(t.prototype.isValid = function() {
				return 0 < this.slots.length;
			}),
			(t.prototype.getRequest = function() {
				for (var t = [], e = 0, i = this.slots; e < i.length; e++) {
					var n = i[e],
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
					t.push(o);
				}
				var c = {
					publisher: { url: this.context.highestAccessibleUrl },
					slots: t,
					user: { ceh: this.context.ceh }
				};
				void 0 !== this.networkId && (c.publisher.networkid = this.networkId);
				var l = this.metricsManager.getMetrics(!0);
				return (
					l.length && (c.previousBidFeedback = l),
					this.gdprConsent && (c.gdprConsent = this.gdprConsent),
					c
				);
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
	function extractExtraData(t) {
		var e = { slots: void 0, time_to_next_call: 0 };
		return (
			void 0 !== t.exd &&
				(void 0 !== t.exd.time_to_next_call &&
					(e.time_to_next_call = t.exd.time_to_next_call),
				(e.slots = t.exd.slots),
				delete t.exd),
			e
		);
	}
	function getPreciseRequestDuration(t) {
		if (window.performance && window.performance.getEntries)
			for (
				var e = window.performance.getEntries(), i = e.length - 1;
				0 <= i;
				--i
			) {
				var n = e[i];
				if (n.name === t && n.duration) return Math.round(n.duration);
			}
	}
	var DirectBiddingTimer = (function() {
			function t(t, e, i) {
				(this.hasSetTargetingBeenCalled = !1),
					(this.builder = t),
					(this.timer =
						void 0 !== e
							? TimeMeasurer.CreateWithStartTime(e)
							: TimeMeasurer.CreateRunning());
				var n = this.timer.elapsed();
				this.builder.withAdapterStartElapsed(n),
					this.builder.withPageLoadElapsed(
						TimeMeasurer.TimeSincePageLoad() - n
					),
					void 0 !== i && this.builder.withAdapterTimeout(i);
			}
			return (
				(t.prototype.sendRequest = function(t) {
					(this.url = t),
						(this.sendTime = TimeMeasurer.CreateRunning()),
						this.builder.withCdbCallStartElapsed(this.timer.elapsed());
				}),
				(t.prototype.requestReceived = function(t) {
					void 0 === t && (t = !1),
						this.builder.withElapsed(
							getPreciseRequestDuration(this.url) || this.sendTime.elapsed()
						),
						this.builder.withCdbCallEndElapsed(this.timer.elapsed()),
						this.builder.withIsTimeout(t);
				}),
				(t.prototype.setTargeting = function() {
					this.hasSetTargetingBeenCalled ||
						(this.builder.withSetTargetingElapsed(this.timer.elapsed()),
						(this.hasSetTargetingBeenCalled = !0));
				}),
				(t.prototype.finish = function(t) {
					if (
						(this.builder.withAdapterEndElapsed(this.timer.elapsed()),
						t && 0 !== t.length)
					)
						for (var e = 0, i = t; e < i.length; e++) {
							var n = i[e];
							this.builder.addSlot(n.imp_id, n.zone_id, n.ad_unit_id, n.is_dsc);
						}
					else this.builder.addSlot("");
					return this.build();
				}),
				(t.prototype.build = function() {
					return this.builder.build();
				}),
				t
			);
		})(),
		__extends$2 = ((sf = function(t, e) {
			return (sf =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			sf(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		sf,
		DirectBiddingEvent = (function(u) {
			function p(t, e, i, n, o, r, a, s, d, c) {
				var l = u.call(this, p.NAME) || this;
				return (
					(l.profileId = t),
					(l.urlBuilder = e),
					(l.slots = i),
					(l.metricBuilder = new DirectBiddingMetricBuilder()),
					(l.metricsManager = new DirectBiddingMetricsManager()),
					(l.callbackSuccess = n),
					(l.callbackError = o),
					(l.callbackTimeout = r),
					(l.timeout = a),
					(l.networkId = s),
					(l.integrationMode = d),
					(l.adapterVersion = c),
					l
				);
			}
			return (
				__extends$2(p, u),
				(p.prototype.setGDPRConsent = function(t) {
					this.gdprConsent = t;
				}),
				(p.prototype.getMetricBuilder = function() {
					return this.metricBuilder;
				}),
				(p.prototype.eval = function(t) {
					this.evalWithTimeout(t, void 0);
				}),
				(p.prototype.evalWithTimeout = function(t, e) {
					var n = this,
						i = p.getCriteoAdapterBidRequest(),
						o = p.getRequestAuctionStart(i),
						r = e || resolvePrebidTimeout(i && i.timeout),
						a = new DirectBiddingTimer(this.metricBuilder, o, r),
						s = new DirectBiddingRequestBuilder(
							this.slots,
							t.context,
							this.metricsManager,
							this.urlBuilder,
							this.profileId,
							this.integrationMode,
							this.networkId,
							this.adapterVersion,
							this.gdprConsent
						);
					if (s.isValid() && "undefined" != typeof JSON) {
						var d = s.getRequest(),
							c = JSON.stringify(d),
							l = s.getUrl(),
							u = new AsyncRequest(l, c, "application/x-www-form-urlencoded");
						a.sendRequest(l),
							u.send(
								function(t) {
									a.requestReceived();
									var e = tryParseJson(t) || {},
										i = extractExtraData(e);
									void 0 !== n.callbackSuccess &&
										n.callbackSuccess(JSON.stringify(e), i),
										n.metricsManager.storeMetric(a.finish(i.slots));
								},
								function(t, e) {
									a.requestReceived(),
										void 0 !== n.callbackError && n.callbackError(t, e),
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
				(p.getCriteoAdapterBidRequest = function() {
					try {
						return window.pbjs._bidsRequested.find(function(t) {
							return "criteo" === t.bidderCode;
						});
					} catch (t) {
						return;
					}
				}),
				(p.getRequestAuctionStart = function(t) {
					return t && t.auctionStart;
				}),
				(p.NAME = "directbidding"),
				p
			);
		})(AbstractEvent),
		__extends$3 = ((kg = function(t, e) {
			return (kg =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			kg(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		kg,
		DirectBiddingEventWithCaching = (function(p) {
			function h(t, e, i, n, o, r, a, s, d, c) {
				var l = p.call(this, h.NAME) || this,
					u = Math.max(10 * (a || 3e3), 3e3);
				return (
					(l.cache = new DirectBiddingCache(
						window.criteo_pubtag.context,
						i,
						s
					)),
					(l.directBiddingEvent = new DirectBiddingEvent(
						t,
						e,
						l.cache.filterNoBidSlots(i),
						function(t, e) {
							return l.onSuccess(t, e);
						},
						function(t, e) {
							return l.onError(t, e);
						},
						function() {
							return l.onHttpTimeout();
						},
						u,
						s,
						d,
						c
					)),
					(l.slots = i),
					(l.callbackSuccess = n),
					(l.callbackError = o),
					(l.callbackTimeout = r),
					(l.timeout = a),
					(l.hasTimeouted = !1),
					(l.hasResponded = !1),
					l
				);
			}
			return (
				__extends$3(h, p),
				(h.prototype.eval = function(e) {
					var i = this;
					hasCMP(window)
						? retrieveGDPRConsent(window, function(t) {
								i.evalWithCmp(e, t);
						  })
						: this.evalWithCmp(e, void 0);
				}),
				(h.prototype.evalWithCmp = function(t, e) {
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
						this.directBiddingEvent.setGDPRConsent(e),
						this.directBiddingEvent.evalWithTimeout(t, this.timeout);
				}),
				(h.prototype.onSuccess = function(t, e) {
					if (((this.hasResponded = !0), void 0 !== e)) {
						var i = tryParseJson(t);
						this.cache.handleResponse(this.slots, i, e, this.hasTimeouted);
					}
					this.hasTimeouted || this.callbackSuccess(t, e);
				}),
				(h.prototype.onError = function(t, e) {
					(this.hasResponded = !0),
						this.hasTimeouted || this.callbackError(t, e);
				}),
				(h.prototype.onHttpTimeout = function() {
					(this.hasResponded = !0), this.hasTimeouted || this.callbackTimeout();
				}),
				(h.prototype.onTimeout = function() {
					if (!this.hasResponded) {
						this.hasTimeouted = !0;
						var t = this.cache.getCachedBids(this.slots);
						0 === t.length
							? this.callbackTimeout()
							: (Log.Debug(
									"Cached bids returned because of timeout: ['" +
										t
											.map(function(t) {
												return t.impid;
											})
											.join("', '") +
										"']"
							  ),
							  this.directBiddingEvent
									.getMetricBuilder()
									.withCachedBidsReturned(t),
							  this.callbackSuccess(JSON.stringify({ slots: t }), void 0));
					}
				}),
				(h.prototype.getMetricBuilder = function() {
					return this.directBiddingEvent.getMetricBuilder();
				}),
				(h.prototype.getBidCache = function() {
					return this.cache;
				}),
				(h.NAME = "directbidding"),
				h
			);
		})(AbstractEvent),
		CacheBusterGenerator = (function() {
			function t() {}
			return (
				(t.generateCacheBuster = function() {
					return Math.floor(99999999999 * Math.random());
				}),
				t
			);
		})(),
		DirectBiddingUrlBuilder = (function() {
			function a(t) {
				void 0 === t && (t = !1), (this.auditMode = t);
			}
			return (
				(a.prototype.buildUrl = function(t, e, i, n, o) {
					void 0 === i && (i = IntegrationMode.Unspecified);
					var r = e.protocol + a.CRITEO_BIDDER_URL + this.getHandlerPath();
					return (
						(r += "?ptv=" + PublisherTagVersion),
						(r += "&profileId=" + String(t)),
						(r += e.ctoIdOnPublisherDomain
							? "&idcpy=" + e.ctoIdOnPublisherDomain
							: ""),
						(r += e.idfs ? "&idfs=" + e.idfs : ""),
						(r += e.secureId ? "&sid=" + e.secureId : ""),
						(r += e.isOptOut ? "&optout=1" : ""),
						(r += e.bundle ? "&bundle=" + e.bundle : ""),
						i !== IntegrationMode.Unspecified && (r += "&im=" + i),
						void 0 !== n && (r += "&av=" + String(n)),
						void 0 !== o && (r += "&wv=" + encodeURIComponent(o)),
						(r += e.silentModeIgnored ? "&smi=1" : ""),
						(r += "&cb=" + String(CacheBusterGenerator.generateCacheBuster())),
						(r += e.getContextFlags())
					);
				}),
				(a.prototype.getHandlerPath = function() {
					return this.auditMode
						? a.CRITEO_BIDDER_AUDIT_HANDLER
						: a.CRITEO_BIDDER_HANDLER;
				}),
				(a.CRITEO_BIDDER_URL = "//bidder.criteo.com/"),
				(a.CRITEO_BIDDER_HANDLER = "cdb"),
				(a.CRITEO_BIDDER_AUDIT_HANDLER = "prebid/audit"),
				a
			);
		})();
	function retrieveGoogleTagPlacements(e) {
		(window.googletag = window.googletag || {}),
			(window.googletag.cmd = window.googletag.cmd || []),
			window.googletag.cmd.push(function() {
				var t = googleSlotsToDynamicSlots(window.googletag.pubads().getSlots());
				e(t);
			});
	}
	function googleSlotsToDynamicSlots(t) {
		for (
			var e = [],
				i =
					window.innerWidth ||
					document.documentElement.clientWidth ||
					document.body.clientWidth,
				n =
					window.innerHeight ||
					document.documentElement.clientHeight ||
					document.body.clientHeight,
				o = 0,
				r = t;
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
			s && 0 < d.length && e.push({ slotId: s, sizes: d });
		}
		return e;
	}
	function createEmptyDFPTargeting() {
		return createDFPTargeting(null, null);
	}
	function createDFPTargeting(t, e) {
		return { crt_pb: [t], crt_bidid: [e] };
	}
	var DFPKeyValueTargeter = (function() {
		function t() {
			void 0 === window.googletag && (window.googletag = {}),
				(this.googletag = window.googletag),
				(this.googletag.cmd = this.googletag.cmd || []);
		}
		return (
			(t.prototype.setKeyValuesForAllSlots = function(e) {
				var i = this;
				this.googletag.cmd.push(function() {
					for (var t in e)
						e.hasOwnProperty(t) &&
							(i.googletag.pubads().clearTargeting(t),
							i.googletag.pubads().setTargeting(t, e[t] + ""));
				});
			}),
			(t.prototype.setKeyValuePerSlot = function(e, i) {
				var n = this.googletag
					.pubads()
					.getSlots()
					.filter(function(t) {
						return t.getSlotElementId() === e;
					});
				0 === n.length
					? Log.Warning("No googletag slot found for slotId: " + e)
					: 1 < n.length
						? Log.Warning("More than one googletag slot found for slotId: " + e)
						: this.googletag.cmd.push(function() {
								for (var t in i)
									i.hasOwnProperty(t) &&
										(n[0].clearTargeting(t), n[0].setTargeting(t, i[t] + ""));
						  });
			}),
			(t.prototype.resetKeyValuesForSlots = function(e) {
				var t = this,
					i = createEmptyDFPTargeting();
				this.googletag
					.pubads()
					.getSlots()
					.filter(function(t) {
						return -1 !== e.indexOf(t.getSlotElementId());
					})
					.forEach(function(e) {
						t.googletag.cmd.push(function() {
							for (var t in i) i.hasOwnProperty(t) && e.clearTargeting(t);
						});
					});
			}),
			t
		);
	})();
	function executeFunction(val, args) {
		if (val) {
			var ret;
			try {
				ret = eval("(" + val + ")");
			} catch (t) {
				return void Log.Error("Error evaluating the function: " + t);
			}
			if ("function" == typeof ret) return ret.apply(ret, args);
			Log.Error("The passed value is not a function");
		} else Log.Error("Cannot execute an empty function");
	}
	function getParam(t, e, i) {
		return typeof t[e] === i ? t[e] : void 0;
	}
	var BidEventTarget = function() {},
		__extends$4 = ((Th = function(t, e) {
			return (Th =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			Th(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		Th,
		BidEventContainerTarget = (function(_super) {
			function BidEventContainerTarget(t, e) {
				var i = _super.call(this) || this;
				i.containerId = e;
				var n = t.getElementById(e);
				return (
					n
						? (i.element = n)
						: Log.Error("Target element '" + e + "' not found in the document"),
					i
				);
			}
			return (
				__extends$4(BidEventContainerTarget, _super),
				(BidEventContainerTarget.prototype.ResizeFrame = function(t, e) {}),
				(BidEventContainerTarget.prototype.Write = function(t) {
					this.element && (this.element.innerHTML = t);
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
		__extends$5 = ((ji = function(t, e) {
			return (ji =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			ji(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		ji,
		BidEventDocumentTarget = (function(i) {
			function t(t) {
				var e = i.call(this) || this;
				return (e.document = t), e;
			}
			return (
				__extends$5(t, i),
				(t.prototype.ResizeFrame = function(t, e) {
					if (
						this.document.defaultView &&
						this.document.defaultView.frameElement
					) {
						var i = this.document.defaultView.frameElement;
						(i.width = t.toString()), (i.height = e.toString());
					}
				}),
				(t.prototype.Write = function(t) {
					this.document.open(), this.document.write(t), this.document.close();
				}),
				(t.prototype.LoadScript = function(t) {
					this.Write(
						"<script type='text/javascript' src='" + t + "'></script>"
					);
				}),
				t
			);
		})(BidEventTarget),
		__extends$6 = ((Di = function(t, e) {
			return (Di =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			Di(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		Di,
		Custom = (function(i) {
			function n(t) {
				var e = i.call(this, n.NAME) || this;
				return (e.callback = t), e;
			}
			return (
				__extends$6(n, i),
				(n.prototype.eval = function(t) {
					this.callback && this.callback.apply(this);
				}),
				(n.NAME = "genericEvent"),
				n
			);
		})(AbstractEvent),
		BidResponseSlot = (function() {
			function t(t, e, i, n, o, r) {
				(this.id = this.generateRandomId()),
					(this.slotId = t),
					(this.impressionId = e),
					(this.cpm = i),
					(this.width = n),
					(this.height = o),
					(this.zoneId = r);
			}
			return (
				(t.prototype.generateRandomId = function() {
					return Math.random()
						.toString(36)
						.replace(/[^a-z]+/g, "")
						.substr(0, 6);
				}),
				t
			);
		})(),
		__extends$7 = (($i = function(t, e) {
			return ($i =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			$i(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		$i,
		DisplayUrlBidResponseSlot = (function(d) {
			function t(t, e, i, n, o, r, a) {
				var s = d.call(this, t, e, i, n, o, r) || this;
				return (s.displayUrl = a), s;
			}
			return (
				__extends$7(t, d),
				(t.prototype.GenerateEvent = function(t) {
					var e = this;
					return (
						t.ResizeFrame(this.width, this.height),
						new Custom(function() {
							return t.LoadScript(e.displayUrl);
						})
					);
				}),
				(t.prototype.GenerateMessage = function() {
					return { displayUrl: this.displayUrl };
				}),
				t
			);
		})(BidResponseSlot),
		__extends$8 = ((vj = function(t, e) {
			return (vj =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			vj(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		vj,
		HtmlCreativeBidResponseSlot = (function(d) {
			function t(t, e, i, n, o, r, a) {
				var s = d.call(this, t, e, i, n, o, r) || this;
				return (s.creative = a), s;
			}
			return (
				__extends$8(t, d),
				(t.prototype.GenerateEvent = function(t) {
					var e = this;
					return (
						t.ResizeFrame(this.width, this.height),
						new Custom(function() {
							return t.Write(e.creative);
						})
					);
				}),
				(t.prototype.GenerateMessage = function() {
					return { creative: this.creative };
				}),
				t
			);
		})(BidResponseSlot),
		LineItemRange = (function() {
			function h(t, e, i) {
				(this.lowerBound = t), (this.upperBound = e), (this.increment = i);
			}
			return (
				(h.createLineItemRangesFromString = function(t) {
					for (var e = [], i = 0, n = t.split(";"); i < n.length; i++) {
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
								? e.push(new h(a, d, c))
								: Log.Warning(
										"Range (" +
											l +
											") is not divisible by increment (" +
											c +
											")"
								  );
					}
					return (
						e.sort(function(t, e) {
							return t.upperBound > e.upperBound
								? 1
								: e.upperBound > t.upperBound
									? -1
									: 0;
						}),
						e
					);
				}),
				(h.getDefaultDenseLineItemRanges = function() {
					return [new h(0, 3, 0.01), new h(3, 8, 0.05), new h(8, 20, 0.5)];
				}),
				(h.computeLineItemPricebandValue = function(t, e) {
					0 === e.length && (e = h.getDefaultDenseLineItemRanges());
					for (var i = 0, n = e; i < n.length; i++) {
						var o = n[i];
						if (t <= o.upperBound && t > o.lowerBound) {
							var r = Math.floor(t / o.increment + 1e-4) * o.increment;
							return h.formatPriceBand(r);
						}
					}
					return t < e[0].lowerBound
						? void 0
						: t === e[0].lowerBound
							? h.formatPriceBand(e[0].lowerBound)
							: h.formatPriceBand(e[e.length - 1].upperBound);
				}),
				(h.formatPriceBand = function(t) {
					return t.toFixed(2);
				}),
				(h.roundToDecimal = function(t, e) {
					var i = parseFloat(t),
						n = Math.pow(10, e);
					return Math.round(i * n) / n;
				}),
				h
			);
		})(),
		__extends$9 = ((yk = function(t, e) {
			return (yk =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			yk(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		yk,
		NativeBidResponseSlot = (function(c) {
			function t(t, e, i, n, o, r, a, s) {
				var d = c.call(this, t, e, i, n, o, r) || this;
				return (d.nativeCallback = a), (d.nativePayload = s), d;
			}
			return (
				__extends$9(t, c),
				(t.prototype.GenerateEvent = function(t) {
					var e = this;
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
									return e.nativeCallback(e.nativePayload);
							  });
				}),
				(t.prototype.GenerateMessage = function() {
					return { nativePayload: this.nativePayload };
				}),
				t
			);
		})(BidResponseSlot),
		InputParameters = (function() {
			function t() {
				var e = this;
				(this.integrationMode = IntegrationMode.Unspecified),
					(this.paramParser = {}),
					this.addParameter("integrationMode", function(t) {
						e.integrationMode = parse(t);
					});
			}
			return (
				(t.prototype.addParameter = function(t, e) {
					this.paramParser[t.toLowerCase()] = e;
				}),
				(t.prototype.tryFillParameters = function(t) {
					for (var e in t)
						if (void 0 !== t[e]) {
							var i = e.toLowerCase();
							this.paramParser[i]
								? this.paramParser[i](t[e])
								: Log.Warning("Unknown parameter: " + e);
						}
				}),
				t
			);
		})(),
		__extends$10 = ((cl = function(t, e) {
			return (cl =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			cl(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		cl,
		RenderAdInputParameters = (function(i) {
			function t(t) {
				var e = i.call(this) || this;
				return (
					(e.bidId = void 0),
					(e.document = window.document),
					(e.containerId = void 0),
					e.addParameter("bidId", function(t) {
						e.bidId = t;
					}),
					e.addParameter("document", function(t) {
						e.document = t;
					}),
					e.addParameter("containerId", function(t) {
						e.containerId = t;
					}),
					i.prototype.tryFillParameters.call(e, t),
					e
				);
			}
			return __extends$10(t, i), t;
		})(InputParameters);
	function generateUuid() {
		var i = new Date().getTime();
		return (
			"undefined" != typeof performance &&
				"function" == typeof performance.now &&
				(i += performance.now()),
			"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
				var e = (i + 16 * Math.random()) % 16 | 0;
				return (
					(i = Math.floor(i / 16)), ("x" === t ? e : (3 & e) | 8).toString(16)
				);
			})
		);
	}
	var DirectBiddingSlot = function(t, e, i, n, o, r, a) {
			(this.slotId = generateUuid().replace(/-/g, "")),
				(this.impId = t),
				(this.zoneId = e),
				(this.nativeCallback = i),
				(this.transactionId = n),
				(this.sizes = o),
				(this.publisherSubId = r),
				(this.mediaTypes = a);
		},
		__extends$11 = ((Fl = function(t, e) {
			return (Fl =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			Fl(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		Fl,
		PlacementInputParameters = (function(e) {
			function t(t) {
				var o = e.call(this) || this;
				return (
					(o.slotId = void 0),
					(o.zoneId = void 0),
					(o.sizes = []),
					(o.nativeCallback = void 0),
					(o.publisherSubId = void 0),
					o.addParameter("slotid", function(t) {
						o.slotId = t;
					}),
					o.addParameter("zoneid", function(t) {
						o.zoneId = t;
					}),
					o.addParameter("sizes", function(t) {
						for (var e = 0, i = t; e < i.length; e++) {
							var n = i[e].split("x");
							o.sizes.push(new Size(parseInt(n[0], 10), parseInt(n[1], 10)));
						}
					}),
					o.addParameter("nativecallback", function(t) {
						o.nativeCallback = t;
					}),
					o.addParameter("publisherSubId", function(t) {
						o.publisherSubId = t;
					}),
					e.prototype.tryFillParameters.call(o, t),
					o
				);
			}
			return __extends$11(t, e), t;
		})(InputParameters),
		__extends$12 = ((bm = function(t, e) {
			return (bm =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			bm(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		bm,
		StandaloneInputParameters = (function(i) {
			function t(t) {
				var e = i.call(this) || this;
				return (
					(e.placements = void 0),
					(e.networkId = void 0),
					e.addParameter("networkId", function(t) {
						e.networkId = t;
					}),
					e.addParameter("placements", function(t) {
						e.placements = e.deserializePlacementInput(t);
					}),
					i.prototype.tryFillParameters.call(e, t),
					e
				);
			}
			return (
				__extends$12(t, i),
				(t.prototype.deserializePlacementInput = function(t) {
					for (var e = [], i = 0, n = t; i < n.length; i++) {
						var o = n[i],
							r = new PlacementInputParameters(o);
						e.push(
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
					return e;
				}),
				t
			);
		})(InputParameters),
		standaloneProfileId = 184;
	function RequestBids(t, e, i) {
		RequestBidsWithProfileId(t, standaloneProfileId, e, i);
	}
	function DiscoverTagsAndRequestBids(e, i, n) {
		retrieveGoogleTagPlacements(function(t) {
			t.length <= 0
				? Log.Warning(
						"No Google tag placements have been retrieved, no bid will be requested."
				  )
				: RequestBidsWithProfileId(
						{ networkId: e, placements: t },
						standaloneProfileId,
						i,
						n
				  );
		});
	}
	function RequestBidsOnGoogleTagSlots(t, e, i) {
		if ("number" == typeof t) {
			DiscoverTagsAndRequestBids((n = t), e, i);
		} else {
			var n = getParam(t, "networkId", "number"),
				o = getParam(t, "placements", "object"),
				r = getParam(t, "callback", "function"),
				a = getParam(t, "timeout", "function");
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
	function RequestBidsWithProfileId(t, e, v, i) {
		var m = new StandaloneInputParameters(t);
		if (checkInputParameters(m)) {
			for (
				var n = function() {
						void 0 !== v && v([]);
					},
					o = new DirectBiddingEventWithCaching(
						e,
						new DirectBiddingUrlBuilder(!1),
						m.placements,
						function(t) {
							var e = tryParseJson(t);
							if (void 0 !== e && void 0 !== e.slots) {
								var a = {};
								if (e.invocation_codes)
									for (var i = 0, n = e.invocation_codes; i < n.length; i++)
										for (
											var o = n[i], r = 0, s = o.slot_ids;
											r < s.length;
											r++
										) {
											var d = s[r];
											a[d] = o.invocation_code;
										}
								for (
									var c = function(e) {
											for (
												var t = void 0, i = 0, n = m.placements;
												i < n.length;
												i++
											) {
												var o = n[i];
												if (o.nativeCallback && o.impId === e.impid) {
													t = o.nativeCallback;
													break;
												}
											}
											!t &&
												(e.slotid in a) &&
												(t = function(t) {
													executeFunction(a[e.slotid], [t]);
												});
											var r = GenerateBidResponseSlot(
												e.slotid,
												e.impid,
												e.cpm,
												e.width,
												e.height,
												e.zoneid,
												t,
												e.native,
												e.displayurl,
												e.creative
											);
											void 0 !== r &&
												(window.criteo_pubtag.standaloneBidder.bids[r.id] = r);
										},
										l = 0,
										u = e.slots;
									l < u.length;
									l++
								)
									c(u[l]);
								e.granularity && SetLineItemRanges(e.granularity);
							}
							if (void 0 !== v) {
								for (var p = [], h = 0, f = m.placements; h < f.length; h++) {
									var g = f[h];
									p.push(g.impId);
								}
								v(GetBids({ impressionIds: p }));
							}
						},
						n,
						n,
						i || 3e3,
						m.networkId,
						m.integrationMode
					),
					r = [],
					a = 0,
					s = m.placements;
				a < s.length;
				a++
			) {
				var d = s[a];
				r.push(d.impId),
					(metricBuilders[d.slotId] = o.getMetricBuilder()),
					(bidCaches[d.slotId] = o.getBidCache());
			}
			(window.criteo_pubtag.standaloneBidder.impIds = r),
				window.criteo_pubtag.push(o);
		}
	}
	function SetLineItemRanges(t) {
		var e = LineItemRange.createLineItemRangesFromString(t);
		window.criteo_pubtag.standaloneBidder.lineItemRanges = e;
	}
	function markSetTargetingMetrics() {
		for (
			var t = new DirectBiddingMetricsManager(),
				e = t.getMetrics(!1),
				i = {},
				n = 0;
			n < e.length;
			++n
		)
			for (var o = 0, r = e[n].slots; o < r.length; o++) {
				i[r[o].impressionId] = n;
			}
		for (var a in metricBuilders)
			if (metricBuilders.hasOwnProperty(a)) {
				var s = metricBuilders[a],
					d = TimeMeasurer.TimeSincePageLoad() - s.pageLoadElapsed;
				s.withSetTargetingElapsed(d), a in i && (e[i[a]] = s.build());
			}
		t.setMetrics(e);
	}
	function SetDFPKeyValueTargeting() {
		var t = new DFPKeyValueTargeter();
		t.resetKeyValuesForSlots(window.criteo_pubtag.standaloneBidder.impIds);
		var e = window.criteo_pubtag.standaloneBidder.lineItemRanges,
			i = GetImpressionIdToBestBid();
		for (var n in i)
			if (i.hasOwnProperty(n)) {
				var o = ComputeDFPTargeting(i[n], e);
				void 0 !== o && t.setKeyValuePerSlot(n, o);
			}
		markSetTargetingMetrics();
	}
	function ComputeStandaloneDFPTargeting(t, e) {
		return ComputeDFPTargeting(
			t,
			LineItemRange.createLineItemRangesFromString(e)
		);
	}
	function ComputeDFPTargeting(t, e) {
		var i = LineItemRange.computeLineItemPricebandValue(t.cpm, e);
		return void 0 === i ? void 0 : createDFPTargeting(i, t.id);
	}
	function RenderAd(t, e) {
		var i = new RenderAdInputParameters(
			"string" == typeof t ? { bidId: t, document: e } : t
		);
		if (i.bidId) {
			var n =
				void 0 !== i.containerId
					? new BidEventContainerTarget(i.document, i.containerId)
					: new BidEventDocumentTarget(i.document);
			RenderAdOnTarget(i.bidId, n);
		} else Log.Error("You must provide a bidId to the RenderAd call");
	}
	function RenderAdOnTarget(t, e) {
		var i = window.criteo_pubtag.standaloneBidder.bids;
		if (i.hasOwnProperty(t)) {
			var n = i[t],
				o = n.GenerateEvent(e);
			window.criteo_pubtag.push(o),
				n.slotId in bidCaches && bidCaches[n.slotId].removeBid(n),
				delete i[t];
		} else Log.Error("Could not render bid with id: " + t);
	}
	function GetBids(t) {
		var e = window.criteo_pubtag.standaloneBidder.bids;
		if (null === e) return [];
		var i = window.criteo_pubtag.standaloneBidder.lineItemRanges,
			n = [];
		for (var o in e)
			if (e.hasOwnProperty(o)) {
				var r = e[o];
				if (
					!t ||
					!t.impressionIds ||
					-1 !== t.impressionIds.indexOf(r.impressionId)
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
	function GetBidsForAdUnit(t, e) {
		void 0 === e && (e = 1);
		var i = GetBids({ impressionIds: [t] });
		return i
			.sort(function(t, e) {
				return e.cpm - t.cpm;
			})
			.slice(0, Math.min(Math.max(e, 0), i.length));
	}
	function checkInputParameters(t) {
		if (void 0 === t.placements)
			return Log.Error("Missing 'placements' parameter"), !1;
		if (0 === t.placements.length)
			return Log.Error("'placements' parameter is empty"), !1;
		for (var e = 0, i = t.placements; e < i.length; e++) {
			var n = i[e];
			if (IsEmptyOrUndefined(n.impId))
				return Log.Error("Missing 'slotId' parameter in placements object"), !1;
			if (
				IsEmptyOrUndefined(n.zoneId) &&
				(IsEmptyOrUndefined(n.sizes) || IsEmptyOrUndefined(t.networkId))
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
		var t = {},
			e = window.criteo_pubtag.standaloneBidder.bids;
		for (var i in e)
			if (e.hasOwnProperty(i)) {
				var n = e[i];
				if (t.hasOwnProperty(n.impressionId))
					t[n.impressionId].cpm < n.cpm && (t[n.impressionId] = n);
				else t[n.impressionId] = n;
			}
		return t;
	}
	function GenerateBidResponseSlot(t, e, i, n, o, r, a, s, d, c) {
		return void 0 !== a && void 0 !== s
			? new NativeBidResponseSlot(t, e, i, n, o, r, a, s)
			: void 0 === d || (void 0 !== c && "<script" !== c.substr(0, 7))
				? void 0 !== c
					? new HtmlCreativeBidResponseSlot(t, e, i, n, o, r, c)
					: void 0
				: new DisplayUrlBidResponseSlot(t, e, i, n, o, r, d);
	}
	function IsEmptyOrUndefined(t) {
		return void 0 === t || t + "" == "";
	}
	function SetCeh(t) {
		window.criteo_pubtag.context.ceh = t;
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
						function(t) {
							if ("DFP" === o.adserver) {
								s.listenForCreativeRequests(t);
								for (var e = 0, i = t; e < i.length; e++) {
									var n = ComputeStandaloneDFPTargeting(i[e], o.lineItemRanges);
									void 0 !== n && a(n);
								}
								0 === t.length && a({});
							}
							r(null);
						},
						o.timeout
					);
				}),
				(s.listenForCreativeRequests = function(s) {
					window.addEventListener(
						"message",
						function(t) {
							var e = t.data instanceof Object ? t.data : tryParseJson(t.data);
							if (e && e.bidId && t.source)
								for (var i = 0, n = s; i < n.length; i++) {
									var o = n[i];
									if (o.id === e.bidId) {
										var r = t.source,
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
		})(),
		PrebidMediaTypes,
		cp;
	function GetIdfs() {
		return window.criteo_pubtag.context.getIdfs();
	}
	function SetIdfs(t) {
		window.criteo_pubtag.context.setIdfs(t);
	}
	function SetCeh$1(t) {
		window.criteo_pubtag.context.ceh = t;
	}
	(cp = PrebidMediaTypes || (PrebidMediaTypes = {})),
		(cp.Native = "native"),
		(cp.Banner = "banner"),
		(cp.Video = "video");
	var Prebid = (function() {
			function n(t, e, i, n, o) {
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
							c.sizes.map(function(t) {
								return new Size(t[0], t[1]);
							}),
							c.params.publisherSubId,
							c.mediaTypes
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
						])),
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
						t,
						a,
						r,
						e,
						l,
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
				(n.GetAdapter = function(t) {
					var e = "string" == typeof t ? t : t.bidRequests[0].auctionId,
						i = n.GetAllAdapters();
					if (i && e in i) return i[e];
				}),
				(n.prototype.createCriteoNativeAdWithCallback = function(t, e, i) {
					return (
						(window.criteo_prebid_native_slots =
							window.criteo_prebid_native_slots || {}),
						(window.criteo_prebid_native_slots[t] = {
							callback: i,
							payload: e
						}),
						'<script type="text/javascript">\n            var win = window;\n            for (var i = 0; i < 10; ++i) {\n                win = win.parent;\n                if (win.criteo_prebid_native_slots) {\n                    var responseSlot = win.criteo_prebid_native_slots["' +
							t +
							'"];\n                    responseSlot.callback(responseSlot.payload);\n                    break;\n                }\n            }\n        </script>'
					);
				}),
				(n.prototype.createPrebidNativeAd = function(t) {
					return {
						title: t.products[0].title,
						body: t.products[0].description,
						sponsoredBy: t.advertiser.description,
						icon: t.advertiser.logo,
						image: t.products[0].image,
						clickUrl: t.products[0].click_url,
						privacyLink: t.privacy.optout_click_url,
						privacyIcon: t.privacy.optout_image_url,
						cta: t.products[0].call_to_action,
						price: t.products[0].price,
						impressionTrackers: t.impression_pixels.map(function(t) {
							return t.url;
						})
					};
				}),
				(n.prototype.getBidRequestForSlot = function(t) {
					for (var e = 0, i = this.bidRequests; e < i.length; e++) {
						var n = i[e];
						if (
							n.adUnitCode === t.impid &&
							(!n.params.zoneId || parseInt(n.params.zoneId, 10) === t.zoneid)
						)
							return n;
					}
				}),
				(n.prototype.interpretResponse = function(t, e) {
					this.timer.requestReceived();
					var i = extractExtraData(t),
						n = {};
					if (void 0 !== i.slots)
						for (var o = 0, r = i.slots; o < r.length; o++) {
							n[(c = r[o]).imp_id] = c;
						}
					var a = [];
					if (t.slots && Array.isArray(t.slots))
						for (var s = 0, d = t.slots; s < d.length; s++) {
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
										height: c.height
									};
								c.native
									? l.params.nativeCallback
										? (h.ad = this.createCriteoNativeAdWithCallback(
												u,
												c.native,
												l.params.nativeCallback
										  ))
										: ((h.native = this.createPrebidNativeAd(c.native)),
										  (h.mediaType = PrebidMediaTypes.Native))
									: (h.ad = c.creative),
									a.push(h);
							} else
								Log.Error('Could not get bid request for slot "' + c + '"');
						}
					return (
						this.cache.handleResponse(this.slots, t, i, !1),
						this.metricsManager.storeMetric(this.timer.finish(i.slots)),
						a
					);
				}),
				(n.prototype.handleBidWon = function(t) {
					this.updateMetric(t, function(t) {
						t.adapterBidWon = !0;
					});
				}),
				(n.prototype.handleBidTimeout = function() {
					this.timer.requestReceived(!0),
						this.metricsManager.storeMetric(this.timer.finish());
				}),
				(n.prototype.handleSetTargeting = function(t) {
					var e = this;
					this.timer.setTargeting(),
						this.updateMetric(t, function() {
							return e.timer.build();
						});
				}),
				(n.prototype.updateMetric = function(t, e) {
					for (
						var i = this.metricsManager.getMetrics(!1), n = 0;
						n < i.length;
						++n
					)
						for (var o = 0, r = i[n].slots; o < r.length; o++) {
							var a = r[o];
							if (a.adUnitId === t.adUnitCode) {
								var s = e(a);
								s && (i[n] = s);
							}
						}
					this.metricsManager.setMetrics(i);
				}),
				n
			);
		})(),
		AdBlocker = (function() {
			function a() {
				(this.allowedPixelLoaded = !1), (this.blockedPixelFailed = !1);
			}
			return (
				(a.prototype.isAdBlocked = function(t, e) {
					var i = this,
						n = "https:" === t ? "https:" : "http:",
						o = n + a.allowedPixelUrl,
						r = n + a.blockedPixelUrl;
					this.createPixel(
						o,
						function() {
							(i.allowedPixelLoaded = !0) === i.blockedPixelFailed && e(!0);
						},
						function() {}
					),
						this.createPixel(
							r,
							function() {
								e(!1);
							},
							function() {
								(i.blockedPixelFailed = !0) === i.allowedPixelLoaded && e(!0);
							}
						);
				}),
				(a.prototype.createPixel = function(t, e, i) {
					var n = document.createElement("img");
					(n.src = t),
						(n.height = 1),
						(n.width = 1),
						(n.style.display = "none"),
						(n.onload = e),
						(n.onerror = i);
				}),
				(a.allowedPixelUrl = "//static.criteo.net/images/pixel.gif?ch=1"),
				(a.blockedPixelUrl = "//static.criteo.net/images/pixel.gif?ch=2"),
				a
			);
		})(),
		__extends$13 = ((lq = function(t, e) {
			return (lq =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			lq(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		lq,
		ConditionalEvent = (function(r) {
			function a(t, e, i, n) {
				var o = r.call(this, a.NAME) || this;
				return (
					(o.condition = t),
					(o.eventIfTrue = e),
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
				(a.prototype.eval = function(t) {
					this.condition.apply(this)
						? this.eventIfTrue.eval(t)
						: this.eventIfFalse.eval(t);
				}),
				(a.NAME = "conditionalEvent"),
				a
			);
		})(AbstractEvent),
		AdFormatType,
		Eq;
	(Eq = AdFormatType || (AdFormatType = {})),
		(Eq[(Eq.Classic = 0)] = "Classic"),
		(Eq[(Eq.StickyFooter = 1)] = "StickyFooter"),
		(Eq[(Eq.ScrollingBanner = 2)] = "ScrollingBanner");
	var CookieHelper = (function() {
			function h() {}
			return (
				(h.SetCookie = function(t, e, i, n, o) {
					void 0 === o && (o = !1);
					var r = n || document,
						a = r.location.hostname,
						s = new Date();
					s.setTime(s.getTime() + 60 * i * 60 * 1e3);
					var d = "expires=" + s.toUTCString();
					if (!o) return h.setCookieString(t, e, d, void 0, r), a;
					for (var c = a.split("."), l = 0; l < c.length; ++l) {
						var u = c.slice(c.length - l - 1, c.length).join(".");
						h.setCookieString(t, e, d, u, r);
						var p = h.GetCookie(t, n);
						if (p && p === e) return u;
					}
					return a;
				}),
				(h.DeleteCookie = function(t, e, i) {
					void 0 === i && (i = !1), h.SetCookie(t, "", 0, e, i);
				}),
				(h.GetCookie = function(t, e) {
					for (
						var i = 0, n = (e || document).cookie.split(";");
						i < n.length;
						i++
					) {
						var o = n[i],
							r = o.substr(0, o.indexOf("=")).replace(/^\s+|\s+$/g, ""),
							a = o.substr(o.indexOf("=") + 1);
						if (r === t) return decodeURIComponent(a);
					}
				}),
				(h.setCookieString = function(t, e, i, n, o) {
					var r = t + "=" + encodeURIComponent(e) + ";" + i + ";";
					n && "" !== n && (r += "domain=." + n + ";"),
						(o.cookie = r + "path=/");
				}),
				h
			);
		})(),
		AdvancedAdFormats = (function() {
			function t(t) {
				this.adFormat = t;
			}
			return (
				(t.prototype.CreateAdvancedAdFormatContainer = function(t) {
					return this.adFormat === AdFormatType.StickyFooter
						? this.CreateStickyFooterContainer(t)
						: this.adFormat === AdFormatType.ScrollingBanner
							? this.CreateScrollingBannerContainer(t)
							: void 0;
				}),
				(t.prototype.IsUserOptout = function() {
					return (
						this.adFormat === AdFormatType.StickyFooter &&
						"true" === CookieHelper.GetCookie("cto_sticky_closed")
					);
				}),
				(t.prototype.CreateStickyFooterContainer = function(t) {
					var e = document.createElement("div");
					(e.style.position = "fixed"),
						(e.style.zIndex = "2147483646"),
						(e.style.bottom = "0"),
						(e.style.left = "0"),
						(e.style.padding = "0"),
						(e.style.borderColor = "rgb(196, 196, 196)"),
						(e.style.width = "100%"),
						(e.style.backgroundColor = "rgba(245, 245, 245, 0.54902)"),
						(e.style.borderStyle = "solid"),
						(e.style.borderWidth = "1px");
					var i = document.createElement("a");
					e.appendChild(i),
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
							(e.style.display = "none"),
								CookieHelper.SetCookie("cto_sticky_closed", "true", 24);
						});
					var n = document.createElement("div");
					if (
						(e.appendChild(n),
						(n.id = "cto_sticky"),
						(n.style.margin = "0 auto"),
						(n.style.display = "table"),
						void 0 === t || "" === t)
					)
						document.body.appendChild(e);
					else {
						var o = document.getElementById(t);
						o
							? o.appendChild(e)
							: Log.Error(
									'Target element "' + t + '" not found in the document'
							  );
					}
					return n.id;
				}),
				(t.prototype.CreateScrollingBannerContainer = function(t) {
					var e,
						i = this;
					if (void 0 === t || "" === t)
						((e = document.createElement("div")).id = "cto_scrolling"),
							document.body.appendChild(e);
					else {
						var n = document.getElementById(t);
						if (!n)
							return (
								Log.Error(
									'Target element "' + t + '" not found in the document'
								),
								t
							);
						e = n;
					}
					var o = e.offsetTop;
					return (
						window.addEventListener
							? window.addEventListener(
									"scroll",
									function() {
										i.SetScrollingContainerPosition(e, o);
									},
									!1
							  )
							: window.attachEvent("onscroll", function() {
									i.SetScrollingContainerPosition(e, o);
							  }),
						this.SetScrollingContainerPosition(e, o),
						e.id
					);
				}),
				(t.prototype.SetScrollingContainerPosition = function(t, e) {
					e - 10 <=
					(window.pageYOffset ||
						document.documentElement.scrollTop ||
						document.body.scrollTop ||
						0)
						? ((t.style.position = "fixed"), (t.style.top = "10px"))
						: ((t.style.position = "static"), (t.style.top = "auto"));
				}),
				t
			);
		})(),
		DisplayContext,
		zr;
	(zr = DisplayContext || (DisplayContext = {})),
		(zr[(zr.InFriendlyIframe = 1)] = "InFriendlyIframe"),
		(zr[(zr.InUnfriendlyIframe = 2)] = "InUnfriendlyIframe"),
		(zr[(zr.DirectIntegration = 3)] = "DirectIntegration");
	var DomManipulationTools = (function() {
			function t() {}
			return (
				(t.getHighestAccessibleWindow = function(t) {
					var e = t,
						i = !1;
					try {
						for (; e.parent.document !== e.document; ) {
							if (!e.parent.document) {
								i = !0;
								break;
							}
							e = e.parent;
						}
					} catch (t) {
						i = !0;
					}
					return { topFrame: e, err: i };
				}),
				(t.getHighestAccessibleUrl = function(t) {
					var e = t.topFrame;
					if (!t.err) return e.location.href;
					try {
						var i = e.top.location.href;
						if (i) return i;
					} catch (t) {}
					try {
						var n = e.location.ancestorOrigins;
						if (n) return n[n.length - 1];
					} catch (t) {}
					return e.document.referrer;
				}),
				(t.inIframe = function() {
					try {
						return window.self !== window.top;
					} catch (t) {
						return !0;
					}
				}),
				t
			);
		})(),
		ViewabilityComputer = (function() {
			function r() {}
			return (
				(r.GetAtfRatio = function(t, e) {
					var i = document.getElementById(e);
					if (t.displayContext === DisplayContext.DirectIntegration) {
						if (null !== i) return r.GetRatioAboveFold(i);
						document.write(
							"<div id='compute_visibility_helper' width='0px' height='0px'></div>"
						);
						var n = document.getElementById("compute_visibility_helper"),
							o = r.GetRatioAboveFold(n);
						return n.parentElement.removeChild(n), o;
					}
					if (t.displayContext === DisplayContext.InFriendlyIframe)
						return r.GetRatioAboveFold(frameElement);
				}),
				(r.GetRatioAboveFold = function(t) {
					var e = DomManipulationTools.getHighestAccessibleWindow(window)
							.topFrame,
						i = e.document,
						n =
							e.innerHeight ||
							i.documentElement.clientHeight ||
							i.body.clientHeight,
						o = t.getBoundingClientRect(),
						r = i.documentElement.scrollTop || i.body.scrollTop;
					return n >= o.bottom + r
						? 1
						: n <= o.top + r
							? 0
							: (n - o.top - r) / t.offsetHeight;
				}),
				r
			);
		})(),
		__extends$14 = ((Zr = function(t, e) {
			return (Zr =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			Zr(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		Zr,
		DisplayEvent = (function(o) {
			function t(t, e, i) {
				var n = o.call(this, t) || this;
				return (n.displayParameters = i), (n.urlBuilder = e), n;
			}
			return (
				__extends$14(t, o),
				(t.prototype.eval = function(t) {
					this.displayParameters.atfRatio = ViewabilityComputer.GetAtfRatio(
						t.context,
						this.displayParameters.containerid
					);
				}),
				(t.prototype.buildCasUrl = function(e, i, n, o, r) {
					var a = this;
					hasCMP(window)
						? retrieveGDPRConsent(window, function(t) {
								e(a.urlBuilder.buildUrl(a.displayParameters, i, n, o, r, t));
						  })
						: e(this.urlBuilder.buildUrl(this.displayParameters, i, n, o, r));
				}),
				t
			);
		})(AbstractEvent),
		HandlerType,
		ws;
	(ws = HandlerType || (HandlerType = {})),
		(ws[(ws.AFR = 0)] = "AFR"),
		(ws[(ws.AJS = 1)] = "AJS");
	var __extends$15 = ((xs = function(t, e) {
			return (xs =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			xs(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		xs,
		DisplayEventAFR = (function(a) {
			function o(t, e, i) {
				var n = a.call(this, o.NAME, t, e) || this;
				return (n.respectsEyeoDeal = i), n;
			}
			return (
				__extends$15(o, a),
				(o.prototype.eval = function(e) {
					var i = this;
					a.prototype.eval.call(this, e);
					var n = this.displayParameters.containerid,
						o = this.displayParameters.callbackSuccess,
						r = this.displayParameters.callbackError;
					this.buildCasUrl(
						function(t) {
							if (e.context.isAdBlocked) {
								if (!i.respectsEyeoDeal) return;
								i.loadIframe(t, n, o, r);
							} else i.loadIframe(t, n, o, r);
						},
						e.context,
						HandlerType.AFR
					);
				}),
				(o.prototype.loadIframe = function(t, e, i, n) {
					var o = document.createElement("iframe");
					(o.src = t),
						(o.id = e + "_cto_iframe"),
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
					var r = document.getElementById(e);
					r
						? r.appendChild(o)
						: Log.Error('Target element "' + e + '" not found in the document');
				}),
				(o.NAME = "displayAfr"),
				o
			);
		})(DisplayEvent),
		__extends$16 = (($s = function(t, e) {
			return ($s =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			$s(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		$s,
		DisplayEventAsync = (function(_super) {
			function DisplayEventAsync(t, e) {
				return _super.call(this, DisplayEventAsync.NAME, t, e) || this;
			}
			return (
				__extends$16(DisplayEventAsync, _super),
				(DisplayEventAsync.prototype.eval = function(e) {
					var i = this;
					_super.prototype.eval.call(this, e);
					var n = this.displayParameters.containerid,
						o = this.displayParameters.width,
						r = this.displayParameters.height,
						t = this.displayParameters.layout,
						a = this.displayParameters.callbackSuccess,
						s = this.displayParameters.callbackError,
						d = this.displayParameters.passbackCode;
					if ("" === n || void 0 === n) Log.Error("No containerid provided");
					else if (void 0 !== t) {
						var c =
								DisplayEventAsync.CHAPI_NAME +
								"=" +
								encodeURIComponent(JSON.stringify(t)),
							l = function() {
								var t = i.getContainerSize(n, o, r);
								i.buildCasUrl(
									function(t) {
										i.loadScriptAsync(t, c, a, s, d);
									},
									e.context,
									void 0,
									t.width,
									t.height
								);
							};
						void 0 !== o && void 0 !== r
							? l()
							: window.addEventListener
								? window.addEventListener("load", l, !1)
								: window.attachEvent("onload", l);
					} else
						this.buildCasUrl(function(t) {
							i.loadScriptAsync(t, void 0, a, s, d);
						}, e.context);
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
						function(t, e) {
							void 0 !== passbackCode && passbackCode(),
								void 0 !== callbackFail && callbackFail(t, e);
						},
						passbackCode
					);
				}),
				(DisplayEventAsync.prototype.getContainerSize = function(t, e, i) {
					var n = document.getElementById(t),
						o = DomManipulationTools.inIframe(),
						r = e || (o ? document.body.offsetWidth : n ? n.offsetWidth : 0),
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
		__extends$17 = ((It = function(t, e) {
			return (It =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			It(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		It,
		DisplayEventSync = (function(i) {
			function n(t, e) {
				return i.call(this, n.NAME, t, e) || this;
			}
			return (
				__extends$17(n, i),
				(n.prototype.eval = function(t) {
					var e = this;
					i.prototype.eval.call(this, t),
						this.buildCasUrl(function(t) {
							e.loadScriptSync(t);
						}, t.context);
				}),
				(n.prototype.loadScriptSync = function(t) {
					document.write(
						"<script type='text/javascript' src='" + t + "'></script>"
					);
				}),
				(n.NAME = "displaySync"),
				n
			);
		})(DisplayEvent),
		__extends$18 = ((_t = function(t, e) {
			return (_t =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
				})(t, e);
		}),
		function(t, e) {
			function i() {
				this.constructor = t;
			}
			_t(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((i.prototype = e.prototype), new i()));
		}),
		_t,
		DisplayInputParameters = (function(i) {
			function t(t) {
				var e = i.call(this) || this;
				return (
					(e.zoneid = void 0),
					(e.async = void 0),
					(e.containerid = void 0),
					(e.width = void 0),
					(e.height = void 0),
					(e.callbackSuccess = void 0),
					(e.callbackError = void 0),
					(e.callIfNotAdblocked = void 0),
					(e.passbackCode = void 0),
					(e.publisherUrl = void 0),
					(e.overridenWpdt0 = void 0),
					(e.overridenCt0 = void 0),
					(e.layout = void 0),
					(e.atfRatio = void 0),
					(e.adFormat = AdFormatType.Classic),
					(e.overrideZoneFloor = !0),
					(e.collapseContainerIfNotAdblocked = !0),
					(e.extraData = {}),
					e.addParameter("zoneId", function(t) {
						e.zoneid = t;
					}),
					e.addParameter("async", function(t) {
						e.async = !0 === t;
					}),
					e.addParameter("containerId", function(t) {
						e.containerid = t;
					}),
					e.addParameter("width", function(t) {
						e.width = t;
					}),
					e.addParameter("height", function(t) {
						e.height = t;
					}),
					e.addParameter("callbackSuccess", function(t) {
						e.callbackSuccess = t;
					}),
					e.addParameter("callbackError", function(t) {
						e.callbackError = t;
					}),
					e.addParameter("callIfNotAdblocked", function(t) {
						e.callIfNotAdblocked = t;
					}),
					e.addParameter("passbackCode", function(t) {
						e.passbackCode = t;
					}),
					e.addParameter("layout", function(t) {
						e.layout = t;
					}),
					e.addParameter("publisherCreativeConfiguration", function(t) {
						e.layout = t;
					}),
					e.addParameter("extraData", function(t) {
						e.extraData = t;
					}),
					e.addParameter("publisherUrl", function(t) {
						e.publisherUrl = t;
					}),
					e.addParameter("wpdt0", function(t) {
						e.overridenWpdt0 = t;
					}),
					e.addParameter("ct0", function(t) {
						e.overridenCt0 = t;
					}),
					e.addParameter("overrideZoneFloor", function(t) {
						e.overrideZoneFloor = t;
					}),
					e.addParameter("collapseContainerIfNotAdblocked", function(t) {
						e.collapseContainerIfNotAdblocked = t;
					}),
					e.addParameter("adFormat", function(t) {
						e.adFormat = e.parseAdFormat(t);
					}),
					i.prototype.tryFillParameters.call(e, t),
					e
				);
			}
			return (
				__extends$18(t, i),
				(t.prototype.parseAdFormat = function(t) {
					switch (t.toLowerCase()) {
						case "stickyfooter":
							return AdFormatType.StickyFooter;
						case "scrollingbanner":
							return AdFormatType.ScrollingBanner;
						default:
							return AdFormatType.Classic;
					}
				}),
				t
			);
		})(InputParameters),
		DisplayUrlBuilder = (function() {
			function l() {}
			return (
				(l.prototype.buildUrl = function(t, e, i, n, o, r) {
					var a;
					a = i === HandlerType.AFR ? l.CAS_URL_AFR : l.CAS_URL_AJS;
					var s = e.protocol + a + "?ptv=" + PublisherTagVersion;
					if (!0 === e.isAdBlocked) {
						var d = this.getAbpParameter(t, e);
						s += "&abp=" + String(d);
					}
					for (var c in (i !== HandlerType.AFR &&
						(s +=
							void 0 !== t.containerid && "" !== t.containerid
								? "&containerid=" + encodeURIComponent(t.containerid)
								: ""),
					(s += "&zoneid=" + String(t.zoneid)),
					(s += n ? "&width=" + n : ""),
					(s += o ? "&height=" + o : ""),
					(s += e.ctoIdOnPublisherDomain
						? "&idcpy=" + e.ctoIdOnPublisherDomain
						: ""),
					(s += e.idfs ? "&idfs=" + e.idfs : ""),
					(s += e.secureId ? "&sid=" + e.secureId : ""),
					(s += e.isOptOut ? "&optout=1" : ""),
					(s += e.bundle ? "&bundle=" + e.bundle : ""),
					(s += "&cb=" + String(CacheBusterGenerator.generateCacheBuster())),
					(s += "&nodis=" + (e.dising ? "0" : "1")),
					(s += e.charset ? "&charset=" + e.charset : ""),
					(s += t.overridenCt0
						? "&ct0=" + encodeURIComponent(t.overridenCt0)
						: e.ct0
							? "&ct0=" + encodeURIComponent(e.ct0)
							: ""),
					(s += t.overridenWpdt0
						? "&wpdt0=" + encodeURIComponent(t.overridenWpdt0)
						: e.wpdt0
							? "&wpdt0=" + encodeURIComponent(e.wpdt0)
							: ""),
					t.publisherUrl &&
						(s += "&publisherurl=" + encodeURIComponent(t.publisherUrl)),
					(s += e.getContextFlags()),
					t.extraData))
						void 0 !== t.extraData[c] &&
							(s += "&" + c + "=" + encodeURIComponent(t.extraData[c]));
					((s += t.passbackCode ? "&dlp=1" : ""),
					t.integrationMode !== IntegrationMode.Unspecified &&
						(s += "&im=" + t.integrationMode),
					(s += "&dc=" + e.displayContext),
					void 0 !== t.atfRatio) &&
						(s += "&atfr=" + Math.round(100 * t.atfRatio) / 100);
					return (
						(s += e.highestAccessibleUrl
							? "&loc=" +
							  encodeURIComponent(e.highestAccessibleUrl).substring(0, 1600)
							: ""),
						r &&
							(void 0 !== r.gdprApplies &&
								(s += "&gdprApp=" + (r.gdprApplies ? "1" : "0")),
							void 0 !== r.consentData &&
								(s += r.consentData ? "&gdprDta=" + r.consentData : "")),
						s
					);
				}),
				(l.prototype.getAbpParameter = function(t, e) {
					return (e.isAdBlocked ? 1 : 0) | (t.overrideZoneFloor ? 0 : 2);
				}),
				(l.CAS_URL_AJS = "//cas.criteo.com/delivery/ajs.php"),
				(l.CAS_URL_AFR = "//cas.criteo.com/delivery/afr.php"),
				l
			);
		})(),
		EyeoDealValidator = (function() {
			function a() {}
			return (
				(a.prototype.respectsEyeoDeal = function(t) {
					var e = document.getElementById(t);
					if (!this.respectsSizeConstraints(e))
						return (
							Log.Debug(
								"The element " +
									t +
									"does not respect Eyeo acceptable ads size constraints"
							),
							!1
						);
					var i = this.getNewRatiosFeatures(e),
						n = i.respectsAdRatioConstraint;
					return (
						n
							? ((a.atfRatio = i.newAtfRatio), (a.btfRatio = i.newBtfRatio))
							: Log.Debug(
									"The element " +
										t +
										"does not respect Eyeo acceptable ads ratio constraints"
							  ),
						n
					);
				}),
				(a.prototype.respectsSizeConstraints = function(t) {
					var e = this.getAdLocationAttribute(t);
					switch (e) {
						case "above-content":
							return t.offsetHeight <= 200;
						case "in-content":
							return !1;
						case "below-content":
							return t.offsetHeight <= 400;
						case "side-content":
							return t.offsetWidth <= 350;
						default:
							return (
								void 0 !== e &&
									Log.Error("Unknown data-ad-loc attribute : " + e),
								!0
							);
					}
				}),
				(a.prototype.getAdLocationAttribute = function(t) {
					return t.getAttribute("data-ad-loc") || void 0;
				}),
				(a.prototype.getNewRatiosFeatures = function(t) {
					var e = ViewabilityComputer.GetRatioAboveFold(t),
						i = t.offsetHeight * t.offsetWidth,
						n = screen.width * screen.height,
						o = a.atfRatio + (e * i) / n,
						r = a.btfRatio + ((1 - e) * i) / n;
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
	function DisplayAd(t) {
		var e = new DisplayInputParameters(t);
		if (((e.async = !1 !== e.async), void 0 !== e.zoneid))
			if (void 0 === e.layout || !1 !== e.async)
				if (
					!0 !== e.async ||
					(void 0 !== e.containerid && "" !== e.containerid)
				) {
					if (
						(!1 === e.async &&
							void 0 !== e.passbackCode &&
							(Log.Error(
								"Criteo.DisplayAd does not support synchronous local passback"
							),
							(e.passbackCode = void 0)),
						e.adFormat !== AdFormatType.Classic)
					) {
						var i = new AdvancedAdFormats(e.adFormat);
						if (i.IsUserOptout())
							return void Log.Debug(
								"The user has opted-out for 1 day when closing the sticky footer."
							);
						e.containerid = i.CreateAdvancedAdFormatContainer(e.containerid);
					}
					var n;
					(n = e.async
						? new DisplayEventAsync(new DisplayUrlBuilder(), e)
						: new DisplayEventSync(new DisplayUrlBuilder(), e)),
						window.criteo_pubtag.push(n);
				} else
					Log.Error("Missing parameter 'containerid' for an async display");
			else Log.Error("Criteo hosted ads only work in async mode");
		else Log.Error("missing parameter 'zoneid'");
	}
	function DisplayAcceptableAdIfAdblocked(t) {
		var e = new DisplayInputParameters(t);
		if (void 0 !== e.zoneid)
			if (void 0 !== e.containerid && "" !== e.containerid) {
				var i = document.getElementById(e.containerid);
				if (isVisible(i)) {
					var n = window.criteo_pubtag.context;
					if (void 0 === n.isAdBlocked)
						new AdBlocker().isAdBlocked(n.protocol, function(t) {
							(n.isAdBlocked = t), window.criteo_pubtag.evalEvents();
						});
					var o,
						r,
						a = new EyeoDealValidator();
					(o = new DisplayEventAFR(
						new DisplayUrlBuilder(),
						e,
						a.respectsEyeoDeal(e.containerid)
					)),
						(r = new Custom(function() {
							e.collapseContainerIfNotAdblocked && (i.style.display = "none"),
								void 0 !== e.callIfNotAdblocked && e.callIfNotAdblocked();
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
							e.containerid +
							'" is not visible'
					);
			} else
				Log.Error("missing parameter 'containerid' to display acceptable ads");
		else Log.Error("missing parameter 'zoneid'");
	}
	function isVisible(t) {
		if (t === document) return !0;
		if (!t) return !1;
		if (!t.parentNode) return !1;
		if (t.style) {
			if ("none" === t.style.display) return !1;
			if ("hidden" === t.style.visibility) return !1;
		}
		if (window.getComputedStyle) {
			var e = window.getComputedStyle(t, "");
			if ("none" === e.display) return !1;
			if ("hidden" === e.visibility) return !1;
		}
		var i = t.currentStyle;
		if (i) {
			if ("none" === i.display) return !1;
			if ("hidden" === i.visibility) return !1;
		}
		return isVisible(t.parentNode);
	}
	var Polyfills = (function() {
			function t() {}
			return (
				(t.LoadPolyfills = function() {
					t.DefineIsArray(), t.DefineIndexOf(), t.DefineFilter();
				}),
				(t.DefineIsArray = function() {
					Array.isArray ||
						(Array.isArray = function(t) {
							return "[object Array]" === Object.prototype.toString.call(t);
						});
				}),
				(t.DefineIndexOf = function() {
					Array.prototype.indexOf ||
						(Array.prototype.indexOf = function(t, e) {
							if ((void 0 === e && (e = 0), void 0 === this))
								throw new TypeError("'this' is null or not defined");
							var i = this.length;
							if (0 === i) return -1;
							if (i <= e) return -1;
							for (var n = Math.max(0 <= e ? e : i - Math.abs(e), 0); n < i; ) {
								if (n in this && this[n] === t) return n;
								n++;
							}
							return -1;
						});
				}),
				(t.DefineFilter = function() {
					Array.prototype.filter ||
						(Array.prototype.filter = function(t) {
							if (void 0 === this || void 0 === this) throw new TypeError();
							var e = this.length;
							if ("function" != typeof t) throw new TypeError();
							for (
								var i = [],
									n = 2 <= arguments.length ? arguments[1] : void 0,
									o = 0;
								o < e;
								o++
							)
								if (o in this) {
									var r = this[o];
									t.call(n, r, o, this) && i.push(r);
								}
							return i;
						});
				}),
				t
			);
		})(),
		StorageOrigin,
		Vv;
	function tryDecodeURIComponent(e, i) {
		try {
			return decodeURIComponent(e);
		} catch (t) {
			return void 0 !== i ? i : e;
		}
	}
	function parseUri(t) {
		var e = document.createElement("a");
		return (
			(e.href = t),
			{
				protocol: e.protocol,
				host: e.host,
				hostname: e.hostname,
				pathname: "/" === e.pathname[0] ? e.pathname.slice(1) : e.pathname,
				search: e.search,
				href: e.href
			}
		);
	}
	(Vv = StorageOrigin || (StorageOrigin = {})),
		(Vv[(Vv.None = 0)] = "None"),
		(Vv[(Vv.Cookie = 1)] = "Cookie"),
		(Vv[(Vv.LocalStorage = 2)] = "LocalStorage");
	var CookieSynchronizer = (function() {
			function n(t, e, i) {
				(this.isDebug = e),
					(this.topWin = t),
					(this.topDoc = t.document),
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
				(n.prototype.synchronizeCriteoUid = function(t) {
					var e = this;
					if (
						(t ||
							n.isSafariBrowser() ||
							n.isAndroidBrowser() ||
							n.isFirefoxBrowser()) &&
						this.topWin.addEventListener
					)
						if ("complete" === this.topDoc.readyState)
							this.appendGumIframeIfDoesNotExist();
						else {
							var i = function() {
								e.topDoc.removeEventListener("DOMContentLoaded", i),
									e.topWin.removeEventListener("load", i),
									e.appendGumIframeIfDoesNotExist();
							};
							this.topWin.addEventListener("load", i, !1),
								this.topDoc.addEventListener("DOMContentLoaded", i, !1);
						}
				}),
				(n.prototype.appendGumIframeIfDoesNotExist = function() {
					var i = this,
						t = this.createGumIframe();
					this.topDoc.getElementById(n.SYNCFRAME_ID) ||
						(this.topWin.addEventListener(
							"message",
							function(t) {
								var e = t.data;
								e &&
									e.isCriteoMessage &&
									(t.stopImmediatePropagation(),
									e.optout
										? (i.setClientSideOptOut(),
										  i.deleteClientSideUid(),
										  i.deleteClientSideIdfs(),
										  i.deleteClientSideSecureId(),
										  i.deleteBundle())
										: (e.uid && i.setClientSideUid(e.uid),
										  e.idfs && i.setClientSideIdfs(e.idfs),
										  e.bundle && i.setBundle(e.bundle),
										  e.removeSid
												? i.deleteClientSideSecureId()
												: e.sid && i.setClientSideSecureId(e.sid)));
							},
							!0
						),
						this.topDoc.body.appendChild(t));
				}),
				(n.prototype.getClientSideUid = function() {
					return this.getFromAllStorages(n.GUID_COOKIE_NAME);
				}),
				(n.prototype.setClientSideUid = function(t) {
					this.writeOnAllStorages(
						n.GUID_COOKIE_NAME,
						t,
						n.GUID_RETENTION_TIME_HOUR
					);
				}),
				(n.prototype.deleteClientSideUid = function() {
					this.deleteFromAllStorage(n.GUID_COOKIE_NAME);
				}),
				(n.prototype.getBundle = function() {
					return this.getFromAllStorages(n.BUNDLE_COOKIE_NAME);
				}),
				(n.prototype.setBundle = function(t) {
					this.writeOnAllStorages(
						n.BUNDLE_COOKIE_NAME,
						t,
						n.GUID_RETENTION_TIME_HOUR
					);
				}),
				(n.prototype.deleteBundle = function() {
					this.deleteFromAllStorage(n.BUNDLE_COOKIE_NAME);
				}),
				(n.prototype.getClientSideOptOut = function() {
					var t = this.getFromAllStorages(n.OPTOUT_COOKIE_NAME);
					return { value: "1" === t.value, origin: t.origin };
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
				(n.prototype.setClientSideIdfs = function(t) {
					this.writeOnAllStorages(
						n.IDFS_COOKIE_NAME,
						t,
						n.GUID_RETENTION_TIME_HOUR
					);
				}),
				(n.prototype.getClientSideSecureId = function() {
					return this.getFromAllStorages(n.SECURE_ID_COOKIE_NAME);
				}),
				(n.prototype.setClientSideSecureId = function(t) {
					this.writeOnAllStorages(
						n.SECURE_ID_COOKIE_NAME,
						t,
						n.GUID_RETENTION_TIME_HOUR
					);
				}),
				(n.prototype.deleteClientSideSecureId = function() {
					this.deleteFromAllStorage(n.SECURE_ID_COOKIE_NAME);
				}),
				(n.prototype.getLocalWebId = function() {
					var t = this.getFromAllStorages(n.LOCAL_WEB_ID_COOKIE_NAME);
					if (this.canWriteCookies) {
						var e = t.value;
						e || (e = generateUuid()),
							this.writeOnAllStorages(
								n.LOCAL_WEB_ID_COOKIE_NAME,
								String(e),
								n.GUID_RETENTION_TIME_HOUR
							),
							(t = this.getFromAllStorages(n.LOCAL_WEB_ID_COOKIE_NAME));
					}
					return (t.value && t) || { value: "NA", origin: StorageOrigin.None };
				}),
				(n.prototype.checkCookiesAreWriteable = function() {
					var t = "cto_writeable";
					CookieHelper.SetCookie(t, "1", 1, this.topDoc, !0);
					var e = "1" === CookieHelper.GetCookie(t, this.topDoc);
					return CookieHelper.DeleteCookie(t, this.topDoc, !0), e;
				}),
				(n.prototype.createGumIframe = function() {
					var t = this.topDoc.createElement("iframe"),
						e = this.buildSyncframeSrc();
					return (
						(t.src = e), (t.id = n.SYNCFRAME_ID), (t.style.display = "none"), t
					);
				}),
				(n.prototype.writeOnAllStorages = function(t, e, i) {
					this.localStorageEnabled && this.localStorageHelper.setItem(t, e),
						CookieHelper.SetCookie(t, e, i, this.topDoc, !0);
				}),
				(n.prototype.getFromAllStorages = function(t) {
					var e,
						i = CookieHelper.GetCookie(t, this.topDoc);
					return (
						this.localStorageEnabled &&
							(e = this.localStorageHelper.getItem(t) || void 0),
						{
							value: i || e,
							origin:
								(i && StorageOrigin.Cookie) | (e && StorageOrigin.LocalStorage)
						}
					);
				}),
				(n.prototype.deleteFromAllStorage = function(t) {
					CookieHelper.DeleteCookie(t, this.topDoc, !0),
						this.localStorageEnabled && this.localStorageHelper.removeItem(t);
				}),
				(n.prototype.getTld = function() {
					var t = CookieHelper.SetCookie(
						n.TLD_TEST_COOKIE_NAME,
						"test",
						1,
						this.topDoc,
						!0
					);
					return (
						CookieHelper.DeleteCookie(n.TLD_TEST_COOKIE_NAME, this.topDoc, !0),
						t
					);
				}),
				(n.prototype.buildSyncframeSrc = function() {
					var t = this.getClientSideUid(),
						e = this.getClientSideIdfs(),
						i = this.getClientSideOptOut(),
						n = this.getClientSideSecureId(),
						o = this.getLocalWebId(),
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
							uid: t,
							idfs: e,
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
			function t(t, e) {
				this.charset = t.charset || t.characterSet || "";
				var i = DomManipulationTools.getHighestAccessibleWindow(e);
				(this.displayContext = this.getDisplayContext(i)),
					(this.highestAccessibleUrl = DomManipulationTools.getHighestAccessibleUrl(
						i
					)),
					this.synchronizeCriteoUid(i, this.highestAccessibleUrl);
				var n = this.getQueryStringParams(this.highestAccessibleUrl);
				(this.debugMode = "1" === n.pbt_debug || !1),
					(this.noLog = "1" === n.pbt_nolog || !1),
					(this.shouldIgnoreSilentMode = this.computeShouldIgnoreSilentMode()),
					(this.silentModeIgnored = !1),
					this.debugMode && SetLogLevel(LogLevel.Debug),
					(this.location = e.location),
					(this.protocol = this.getProtocol(e)),
					(this.dising = !1),
					(this.ct0 = void 0),
					(this.wpdt0 = void 0),
					(this.isAdBlocked = void 0),
					(this.rtaVarNames = []);
			}
			return (
				(t.prototype.getProtocol = function(t) {
					var e = t,
						i = t,
						n = 0;
					do {
						try {
							switch (((i = (e = i).parent), e.location.protocol)) {
								case "https:":
									return "https:";
								case "http:":
									return "http:";
								default:
									n++;
							}
						} catch (t) {}
					} while (e !== i && n < 10 && void 0 !== i);
					return "https:";
				}),
				(t.prototype.getContextFlags = function() {
					var t = "";
					return (
						(t += this.debugMode ? "&debug=1" : ""),
						(t += this.noLog ? "&nolog=1" : "")
					);
				}),
				(t.prototype.getDisplayContext = function(t) {
					return DomManipulationTools.inIframe()
						? t.err
							? DisplayContext.InUnfriendlyIframe
							: DisplayContext.InFriendlyIframe
						: DisplayContext.DirectIntegration;
				}),
				(t.prototype.getQueryStringParams = function(t) {
					var e = {},
						i = t.split("?");
					if (1 < i.length)
						for (var n = 0, o = i[1].split("&"); n < o.length; n++) {
							var r = o[n].split("=");
							e[tryDecodeURIComponent(r[0])] = tryDecodeURIComponent(r[1]);
						}
					return e;
				}),
				(t.prototype.synchronizeCriteoUid = function(t, e) {
					var i = t.topFrame,
						n = new CookieSynchronizer(i, this.debugMode, e);
					(this.ctoIdOnPublisherDomain = n.getClientSideUid().value),
						(this.isOptOut = n.getClientSideOptOut().value),
						(this.idfs = n.getClientSideIdfs().value),
						(this.secureId = n.getClientSideSecureId().value),
						(this.bundle = n.getBundle().value),
						n.synchronizeCriteoUid();
				}),
				(t.prototype.getIdfs = function() {
					return [this.idfs, this.secureId].join(":");
				}),
				(t.prototype.setIdfs = function(t) {
					var e = t.split(":");
					e[0] && (this.idfs = e[0]), e[1] && (this.secureId = e[1]);
				}),
				(t.prototype.computeShouldIgnoreSilentMode = function() {
					return Math.floor(100 * Math.random()) < 5;
				}),
				(t.prototype.setSilentModeIgnored = function() {
					this.silentModeIgnored = !0;
				}),
				t
			);
		})(),
		StandaloneDirectBidder = function() {
			(this.bids = {}), (this.lineItemRanges = []), (this.impIds = []);
		};
	function isConditionalEvent(t) {
		return "conditionalEvent" === t.name;
	}
	var PublisherTag = (function() {
		function t() {
			(this.standaloneBidder = new StandaloneDirectBidder()),
				(this.events = []),
				(this.context = new Context(document, window)),
				Log.Debug("Publisher Tag loaded");
		}
		return (
			(t.prototype.push = function() {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				for (var i = 0, n = t; i < n.length; i++) {
					var o = n[i];
					this.events.push(o);
				}
				this.evalEvents();
			}),
			(t.prototype.evalEvents = function() {
				for (var t = 0; t < this.events.length; ) {
					var e = this.events[t];
					if (isConditionalEvent(e) && !e.canEval()) t++;
					else {
						var i = this.events.splice(t, 1);
						try {
							i[0].eval(this);
						} catch (t) {
							Log.Error(
								"An exception occurred processing an event: " + t.toString()
							);
						}
					}
				}
			}),
			(t.VERSION = PublisherTagVersion),
			t
		);
	})();
	function safeFunction(t) {
		var e = t,
			i = function() {
				try {
					return e.apply(this, arguments);
				} catch (t) {
					Log.Error("Exception caught: " + t.toString());
				}
			};
		for (var n in ((i.prototype = e.prototype), e))
			e.hasOwnProperty(n) && (i[n] = e[n]);
		return i;
	}
	function safeObject(t) {
		for (var e in t)
			if (t.hasOwnProperty(e)) {
				var i = t[e];
				"function" == typeof i
					? (t[e] = safeFunction(i))
					: "object" == typeof i && (t[e] = safeObject(i));
			}
		return t;
	}
	function createEventProcessor(t) {
		var e = {
			push: function() {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				if (void 0 !== t)
					for (var i = 0, n = t; i < n.length; i++) {
						var o = n[i];
						"function" == typeof o && safeFunction(o)();
					}
			}
		};
		return t && Array.isArray(t) && e.push.apply(e, t), e;
	}
	function CallRTA(t) {}
	function SetTargeting(t) {}
	var DefaultCrtgContentName = "crtg_content",
		DefaultCrtgRtaCookieName = "crtg_rta",
		passbackProfileId = 206;
	function SetupPassbackEventQueue() {
		window.Criteo.passbackEvents = createEventProcessor(
			window.Criteo.passbackEvents
		);
	}
	function RequestBidsPassback(t, e) {
		RequestBidsWithProfileId(t, passbackProfileId, SetupPassbackEventQueue, e);
	}
	function RenderAdPassback(t, e, i, n) {
		var o;
		"string" == typeof t
			? (o = t)
			: ((o = getParam(t, "adUnit", "string")),
			  (e = getParam(t, "passback", "function")),
			  (i = getParam(t, "customRenderFunction", "function")),
			  (n = getParam(t, "minimumBidPrice", "number"))),
			void 0 !== o
				? void 0 !== e
					? ("function" != typeof i &&
							(i = function(t) {
								RenderAd({ bidId: t.id, containerId: o });
							}),
					  (window.Criteo.passbackEvents = window.Criteo.passbackEvents || []),
					  window.Criteo.passbackEvents.push(function() {
							var t = GetBidsForAdUnit(o)[0];
							t && (void 0 === n || t.cpm > n) ? i(t) : e(o);
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
