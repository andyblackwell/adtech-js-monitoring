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
	var Log = (function() {
		function e() {}
		return (
			(e.Debug = function(t) {
				window.console &&
					e.LOGLEVEL >= LogLevel.Debug &&
					console.log("PubTag [DEBUG]:" + t);
			}),
			(e.Warning = function(t) {
				window.console &&
					e.LOGLEVEL >= LogLevel.Warning &&
					console.log("PubTag [WARNING]:" + t);
			}),
			(e.Error = function(t) {
				e.LOGLEVEL >= LogLevel.Error &&
					(window.console
						? console.log("PubTag [ERROR]:" + t)
						: alert("PubTag [ERROR]:" + t));
			}),
			(e.LOGLEVEL = LogLevel.Error),
			e
		);
	})();
	function SetLogLevel(t) {
		Log.LOGLEVEL = t;
	}
	var TimeMeasurer = (function() {
		function n(t) {
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
			(n.CreateRunning = function() {
				var t = new n();
				return t.start(), t;
			}),
			(n.CreateWithStartTime = function(t) {
				var e = new n(!1);
				return (e.startTime = t), e;
			}),
			(n.TimeSincePageLoad = function() {
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
			(n.prototype.start = function() {
				this.startTime = this.now();
			}),
			(n.prototype.elapsed = function() {
				return this.now() - this.startTime;
			}),
			n
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
	function retrieveGDPRConsent(t, n, e) {
		void 0 === e && (e = 1e4);
		var o = TimeMeasurer.CreateRunning(),
			i = !1,
			r = setTimeout(function() {
				(i = !0),
					Log.Warning(
						"Timeout: Unable to resolve GDPR consent after " + e + "ms"
					),
					n(void 0);
			}, e);
		executeCommand(t, "getVendorConsents", [CRITEO_VENDOR_ID], function(t, e) {
			i ||
				(clearTimeout(r),
				Log.Debug("Consent retrieved in " + o.elapsed() + "ms"),
				getVendorConsentsCallback(t, n));
		});
	}
	function getVendorConsentsCallback(t, e) {
		if (t) {
			var n = {};
			void 0 !== t.metadata && (n.consentData = t.metadata),
				void 0 !== t.gdprApplies && (n.gdprApplies = !!t.gdprApplies),
				t.vendorConsents &&
					void 0 !== t.vendorConsents[CRITEO_VENDOR_ID.toString()] &&
					(n.consentGiven = !!t.vendorConsents[CRITEO_VENDOR_ID.toString()]),
				e(n);
		} else Log.Warning("Unable to read GDPR consent data from CMP"), e(void 0);
	}
	function executeCommand(t, e, n, r) {
		if (!cmpInFrame(t)) {
			Log.Debug("No CMP defined on current frame");
			var a = getCMPFrame(t);
			(t.__cmp = function(t, e, n) {
				if (a) {
					var o = Math.random().toString(10),
						i = { __cmpCall: { command: t, parameter: e, callId: o } };
					(cmpCallbacks[o] = r), a.postMessage(i, "*");
				} else Log.Warning("CMP not found");
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
							var n = e.__cmpReturn;
							cmpCallbacks[n.callId](n.returnValue, n.success),
								delete cmpCallbacks[n.callId];
						}
					},
					!1
				);
		}
		t.__cmp(e, n, r);
	}
	function cmpInFrame(t) {
		return "function" == typeof t.__cmp;
	}
	function getCMPFrame(t) {
		for (var e, n = t, o = 0; o < 10; ++o) {
			try {
				n.frames.__cmpLocator && (e = n);
			} catch (t) {}
			if (n === t.top) break;
			n = n.parent;
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
					var n = new Date().getTime(),
						o = this.localStorage.getItem(t + this.EXPIRE_SUFFIX),
						i = o ? parseInt(o, 10) : -1;
					return (-1 !== i && i < n) || (e && (-1 === i || e < i - n))
						? (this.removeItem(t), null)
						: this.localStorage.getItem(t);
				}),
				(t.prototype.setItem = function(t, e, n) {
					if ((this.localStorage.setItem(t, e), n)) {
						var o = new Date().getTime() + n;
						this.localStorage.setItem(t + this.EXPIRE_SUFFIX, o.toString());
					}
				}),
				t
			);
		})(),
		DirectBiddingSilentModeManager = (function() {
			function n() {
				(this.localStorageHelper = new LocalStorageHelper()),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage());
			}
			return (
				(n.prototype.silentModeEnabled = function() {
					var t = n.SILENT_MODE_KEY;
					return (
						this.localStorageEnabled &&
						null !== this.localStorageHelper.getItem(t)
					);
				}),
				(n.prototype.enableSilentMode = function(t) {
					if (this.localStorageEnabled) {
						var e = n.SILENT_MODE_KEY;
						this.localStorageHelper.setItem(e, "1", t);
					}
				}),
				(n.SILENT_MODE_KEY = "criteo_silent_mode"),
				n
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
		__extends = ((xa = function(t, e) {
			return (xa =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			xa(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		xa,
		SlotKeyWithSize = (function(i) {
			function t(t, e, n) {
				var o = i.call(this, t) || this;
				return (o.size = e), (o.networkId = n), o;
			}
			return (
				__extends(t, i),
				(t.prototype.toString = function() {
					return (
						i.prototype.toString.call(this) +
						"_Size" +
						this.size +
						"_NetworkId" +
						this.networkId
					);
				}),
				t
			);
		})(SlotKey),
		__extends$1 = ((Oa = function(t, e) {
			return (Oa =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			Oa(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		Oa,
		SlotKeyWithZoneId = (function(o) {
			function t(t, e) {
				var n = o.call(this, t) || this;
				return (n.zoneId = e), n;
			}
			return (
				__extends$1(t, o),
				(t.prototype.toString = function() {
					return o.prototype.toString.call(this) + "_ZoneId" + this.zoneId;
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
					for (var e = [], n = 0, o = t.sizes; n < o.length; n++) {
						var i = o[n];
						e.push(new SlotKeyWithSize(t.impId, i, this.networkId));
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
				t
			);
		})(),
		DirectBiddingBidManager = (function() {
			function c(t, e) {
				(this.localStorageHelper = new LocalStorageHelper()),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage()),
					(this.slotKeyFactory = new SlotKeyFactory(t, e));
			}
			return (
				(c.useZoneIdIntegration = function(t, e) {
					return (
						void 0 === e ||
						0 ===
							t.filter(function(t) {
								return void 0 !== t.sizes && 0 < t.sizes.length;
							}).length
					);
				}),
				(c.prototype.filterNoBidSlots = function(t) {
					for (var e = [], n = 0, o = t; n < o.length; n++) {
						for (
							var i = o[n],
								r = [],
								a = 0,
								s = this.slotKeyFactory.createKeysFromSlotRequest(i);
							a < s.length;
							a++
						) {
							var d = s[a];
							this.getBid(d, !1) !== c.NO_BID &&
								(d instanceof SlotKeyWithSize ? r.push(d.size) : e.push(i));
						}
						0 < r.length && ((i.sizes = r), e.push(i));
					}
					return e;
				}),
				(c.prototype.getRequestCachedBids = function(t) {
					for (var e = [], n = 0, o = t; n < o.length; n++)
						for (
							var i = o[n],
								r = 0,
								a = this.slotKeyFactory.createKeysFromSlotRequest(i);
							r < a.length;
							r++
						) {
							var s = a[r],
								d = this.getBid(s);
							void 0 !== d && d !== c.NO_BID && e.push(d);
						}
					return e;
				}),
				(c.prototype.getBid = function(t, e) {
					if ((void 0 === e && (e = !0), this.localStorageEnabled)) {
						var n = c.BID_KEY_PREFIX + t.toString(),
							o = this.localStorageHelper.getItem(n);
						return (
							e && o !== c.NO_BID && this.localStorageHelper.removeItem(n),
							o ? tryParseJson(o) : void 0
						);
					}
				}),
				(c.prototype.storeRequestNoBid = function(t, e) {
					for (
						var n = 0, o = this.slotKeyFactory.createKeysFromSlotRequest(t);
						n < o.length;
						n++
					) {
						var i = o[n];
						this.storeNoBid(i, e);
					}
				}),
				(c.prototype.storeResponseBid = function(t, e) {
					var n = this.slotKeyFactory.createKeyFromSlotResponse(t);
					this.storeBid(n, t, e);
				}),
				(c.prototype.storeNoBid = function(t, e) {
					this.storeBid(t, c.NO_BID, e);
				}),
				(c.prototype.storeBid = function(t, e, n) {
					if (this.localStorageEnabled) {
						var o = c.BID_KEY_PREFIX + t.toString();
						this.localStorageHelper.setItem(o, JSON.stringify(e), 1e3 * n);
					}
				}),
				(c.NO_BID = "nobid"),
				(c.BID_KEY_PREFIX = "criteo_pt_cdb_bidcache_"),
				c
			);
		})(),
		DirectBiddingCache = (function() {
			function t(t, e, n) {
				var o = DirectBiddingBidManager.useZoneIdIntegration(e, n);
				(this.bidManager = new DirectBiddingBidManager(o, n)),
					(this.silentModeManager = new DirectBiddingSilentModeManager()),
					(this.context = t);
			}
			return (
				(t.prototype.filterNoBidSlots = function(t) {
					var e = this.bidManager.filterNoBidSlots(t);
					return this.context.shouldIgnoreSilentMode
						? (e.length !== t.length && this.context.setSilentModeIgnored(), t)
						: e;
				}),
				(t.prototype.silentModeEnabled = function() {
					var t = !1;
					return (
						this.silentModeManager.silentModeEnabled() &&
							(this.context.shouldIgnoreSilentMode
								? this.context.setSilentModeIgnored()
								: (t = !0)),
						t
					);
				}),
				(t.prototype.getCachedBids = function(t) {
					return this.bidManager.getRequestCachedBids(t);
				}),
				(t.prototype.handleResponse = function(t, e, n, o) {
					var i = n.time_to_next_call;
					0 < i &&
						(Log.Debug("Global silent mode enabled for " + i + " seconds"),
						this.silentModeManager.enableSilentMode(1e3 * i));
					var r = {};
					if (n.slots)
						for (var a = 0, s = n.slots; a < s.length; a++) {
							(g = s[a]).ttl && (r[g.imp_id] = g.ttl);
						}
					var d = n.bidcachedurationseconds;
					if (e.slots)
						for (var c = 0, l = e.slots; c < l.length; c++) {
							var u = d;
							(g = l[c]).slotid in r && ((u = r[g.slotid]), delete r[g.slotid]),
								o &&
									0 < u &&
									(Log.Debug(
										"Post-timeout bid for slot '" +
											g.impid +
											"' cached for " +
											u +
											" seconds"
									),
									this.bidManager.storeResponseBid(g, u));
						}
					for (var p in r)
						for (var h = 0, f = t; h < f.length; h++) {
							var g;
							if ((g = f[h]).slotId === p) {
								u = r[p];
								Log.Debug(
									"Silent mode for slot '" +
										g.impId +
										"' enabled for " +
										u +
										" seconds"
								),
									this.bidManager.storeRequestNoBid(g, u);
							}
						}
				}),
				t
			);
		})(),
		AsyncRequest = (function() {
			function a(t, e, n, o) {
				void 0 === o && (o = !0),
					(this.url = t),
					(this.data = e),
					(this.contentType = n),
					(this.withCredentials = o);
			}
			return (
				(a.prototype.send = function(t, e, n, o) {
					var i = void 0 !== this.data ? "POST" : "GET",
						r = this.getXMLHttpRequest(i, t, e, n, o);
					if (void 0 !== r) r.send(this.data);
					else {
						var a = this.getXDomainRequest(i, t, e, n, o);
						void 0 !== a && a.send(this.data);
					}
				}),
				(a.prototype.getXMLHttpRequest = function(t, e, n, o, i) {
					var r = new XMLHttpRequest();
					if ("withCredentials" in r)
						return (
							r.open(t, this.url, !0),
							(r.timeout = i || a.LOCAL_PASSBACK_TIMEOUT),
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
									: n(r.readyState, r.status);
							}),
							(r.onerror = function() {
								n(void 0, void 0);
							}),
							o && (r.ontimeout = o),
							r
						);
				}),
				(a.prototype.getXDomainRequest = function(t, e, n, o, i) {
					if ("undefined" != typeof XDomainRequest) {
						var r = new XDomainRequest();
						return (
							(r.timeout = i || a.LOCAL_PASSBACK_TIMEOUT),
							r.open(t, this.url),
							(r.onload = function() {
								void 0 !== r.responseText
									? e(r.responseText)
									: n(void 0, void 0);
							}),
							r.onerror &&
								(r.onerror = function() {
									n(void 0, void 0);
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
	function resolvePrebidTimeout(t) {
		var e =
			"number" == typeof window.PREBID_TIMEOUT ? window.PREBID_TIMEOUT : void 0;
		return t && e ? Math.min(t, e) : t || e || void 0;
	}
	var DirectBiddingMetric = function(t, e, n, o, i, r, a, s, d, c, l) {
			(this.slots = t),
				(this.elapsed = e),
				(this.isTimeout = n),
				(this.pageLoadElapsed = o),
				(this.adapterStartElapsed = i),
				(this.cdbCallStartElapsed = r),
				(this.cdbCallEndElapsed = a),
				(this.setTargetingElapsed = s),
				(this.adapterEndElapsed = d),
				(this.adapterTimeout = c),
				(this.adapterIsTimeout = l);
		},
		DirectBiddingMetricSlot = function(t, e, n, o) {
			(this.impressionId = t),
				(this.zoneId = e),
				(this.adUnitId = n),
				(this.cachedBidUsed = o);
		},
		DirectBiddingMetricBuilder = (function() {
			function t() {
				(this.elapsed = 0),
					(this.isTimeout = !1),
					(this.pageLoadElapsed = 0),
					(this.adapterStartElapsed = 0),
					(this.cdbCallStartElapsed = 0),
					(this.cdbCallEndElapsed = 0),
					(this.setTargetingElapsed = 0),
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
				(t.prototype.addSlot = function(t, e, n) {
					var o =
						0 <
						this.cachedBidsReturned.filter(function(t) {
							return t.impid === n && t.zoneid === e;
						}).length;
					return this.slots.push(new DirectBiddingMetricSlot(t, e, n, o)), this;
				}),
				(t.prototype.build = function() {
					var t;
					return (
						void 0 !== this.adapterTimeout &&
							(t = this.adapterEndElapsed > this.adapterTimeout),
						new DirectBiddingMetric(
							this.slots,
							this.elapsed,
							this.isTimeout,
							this.pageLoadElapsed,
							this.adapterStartElapsed,
							this.cdbCallStartElapsed,
							this.cdbCallEndElapsed,
							this.setTargetingElapsed,
							this.adapterEndElapsed,
							this.adapterTimeout,
							t
						)
					);
				}),
				t
			);
		})(),
		DirectBiddingMetricsManager = (function() {
			function i() {
				(this.localStorageHelper = new LocalStorageHelper()),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage());
			}
			return (
				(i.prototype.getMetrics = function(t) {
					if (this.localStorageEnabled) {
						var e = i.METRICS_STORAGE_KEY,
							n = this.localStorageHelper.getItem(e),
							o = n ? tryParseJson(n) : [];
						return t && this.localStorageHelper.removeItem(e), o;
					}
					return [];
				}),
				(i.prototype.setMetrics = function(t) {
					if (this.localStorageEnabled) {
						var e = i.METRICS_STORAGE_KEY;
						this.localStorageHelper.setItem(e, JSON.stringify(t), 36e5);
					}
				}),
				(i.prototype.storeMetric = function(t) {
					if (this.localStorageEnabled) {
						var e = i.METRICS_STORAGE_KEY,
							n = this.localStorageHelper.getItem(e),
							o = n ? tryParseJson(n) : [];
						o.push(t), this.setMetrics(o);
					}
				}),
				(i.METRICS_STORAGE_KEY = "criteo_pt_cdb_metrics"),
				i
			);
		})(),
		IntegrationMode,
		Rd;
	function parse(t) {
		switch (t.toLowerCase()) {
			case "amp":
				return IntegrationMode.AMP;
			default:
				return IntegrationMode.Unspecified;
		}
	}
	(Rd = IntegrationMode || (IntegrationMode = {})),
		(Rd[(Rd.Unspecified = 0)] = "Unspecified"),
		(Rd[(Rd.AMP = 1)] = "AMP");
	var DirectBiddingRequestBuilder = (function() {
		function t(t, e, n, o, i, r, a, s, d, c) {
			(this.slots = t),
				(this.context = e),
				(this.metricsManager = n),
				(this.urlBuilder = o),
				(this.profileId = i),
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
				for (var t = [], e = 0, n = this.slots; e < n.length; e++) {
					var o = n[e],
						i = { slotid: o.slotId, impid: o.impId };
					if (
						(void 0 !== o.zoneId && (i.zoneid = o.zoneId),
						void 0 !== o.nativeCallback && (i.native = !0),
						void 0 !== o.transactionId && (i.transactionid = o.transactionId),
						void 0 !== o.publisherSubId &&
							(i.publishersubid = o.publisherSubId),
						void 0 !== o.sizes)
					) {
						for (var r = [], a = 0, s = o.sizes; a < s.length; a++) {
							var d = s[a];
							r.push(d.width + "x" + d.height);
						}
						i.sizes = r;
					}
					t.push(i);
				}
				var c = {
					publisher: { url: this.context.highestAccessibleUrl },
					slots: t
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
		var e = { slots: void 0, bidcachedurationseconds: 0, time_to_next_call: 0 };
		return (
			void 0 !== t.exd &&
				(void 0 !== t.exd.bidcachedurationseconds &&
					(e.bidcachedurationseconds = t.exd.bidcachedurationseconds),
				void 0 !== t.exd.time_to_next_call &&
					(e.time_to_next_call = t.exd.time_to_next_call),
				(e.slots = t.exd.slots),
				delete t.exd),
			e
		);
	}
	function getPreciseRequestDuration(t) {
		if (window.performance && window.performance.getEntries)
			for (
				var e = window.performance.getEntries(), n = e.length - 1;
				0 <= n;
				--n
			) {
				var o = e[n];
				if (o.name === t && o.duration) return Math.round(o.duration);
			}
	}
	var DirectBiddingTimer = (function() {
			function t(t, e, n) {
				(this.hasSetTargetingBeenCalled = !1),
					(this.builder = t),
					(this.timer =
						void 0 !== e
							? TimeMeasurer.CreateWithStartTime(e)
							: TimeMeasurer.CreateRunning());
				var o = this.timer.elapsed();
				this.builder.withAdapterStartElapsed(o),
					this.builder.withPageLoadElapsed(
						TimeMeasurer.TimeSincePageLoad() - o
					),
					void 0 !== n && this.builder.withAdapterTimeout(n);
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
				(t.prototype.finish = function(t, e) {
					if ((this.builder.withAdapterEndElapsed(this.timer.elapsed()), e))
						for (var n = 0, o = e; n < o.length; n++) {
							var i = o[n];
							this.builder.addSlot(i.imp_id, i.zone_id, i.ad_unit_id);
						}
					t.storeMetric(this.builder.build());
				}),
				t
			);
		})(),
		__extends$2 = ((Fe = function(t, e) {
			return (Fe =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			Fe(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		Fe,
		DirectBiddingEvent = (function(u) {
			function p(t, e, n, o, i, r, a, s, d, c) {
				var l = u.call(this, p.NAME) || this;
				return (
					(l.profileId = t),
					(l.urlBuilder = e),
					(l.slots = n),
					(l.metricBuilder = new DirectBiddingMetricBuilder()),
					(l.metricsManager = new DirectBiddingMetricsManager()),
					(l.callbackSuccess = o),
					(l.callbackError = i),
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
					var o = this,
						n = p.getCriteoAdapterBidRequest(),
						i = p.getRequestAuctionStart(n),
						r = e || resolvePrebidTimeout(n && n.timeout),
						a = new DirectBiddingTimer(this.metricBuilder, i, r),
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
										n = extractExtraData(e);
									void 0 !== o.callbackSuccess &&
										o.callbackSuccess(JSON.stringify(e), n),
										a.finish(o.metricsManager, n.slots);
								},
								function(t, e) {
									a.requestReceived(),
										void 0 !== o.callbackError && o.callbackError(t, e),
										a.finish(o.metricsManager);
								},
								function() {
									a.requestReceived(!0),
										void 0 !== o.callbackTimeout && o.callbackTimeout(),
										a.finish(o.metricsManager);
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
		__extends$3 = ((yf = function(t, e) {
			return (yf =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			yf(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		yf,
		DirectBiddingEventWithCaching = (function(p) {
			function h(t, e, n, o, i, r, a, s, d, c) {
				var l = p.call(this, h.NAME) || this,
					u = Math.max(10 * (a || 3e3), 3e3);
				return (
					(l.cache = new DirectBiddingCache(
						window.criteo_pubtag.context,
						n,
						s
					)),
					(l.directBiddingEvent = new DirectBiddingEvent(
						t,
						e,
						l.cache.filterNoBidSlots(n),
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
					(l.slots = n),
					(l.callbackSuccess = o),
					(l.callbackError = i),
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
					var n = this;
					hasCMP(window)
						? retrieveGDPRConsent(window, function(t) {
								n.evalWithCmp(e, t);
						  })
						: this.evalWithCmp(e, void 0);
				}),
				(h.prototype.evalWithCmp = function(t, e) {
					var n = this;
					if (
						(setTimeout(function() {
							return n.onTimeout();
						}, this.timeout || 3e3),
						this.cache.silentModeEnabled())
					)
						return (
							Log.Debug(
								"Request ignored because the global silent mode is enabled"
							),
							void this.callbackSuccess("", void 0)
						);
					this.directBiddingEvent.setGDPRConsent(e),
						this.directBiddingEvent.evalWithTimeout(t, this.timeout);
				}),
				(h.prototype.onSuccess = function(t, e) {
					if (((this.hasResponded = !0), void 0 !== e)) {
						var n = tryParseJson(t);
						this.cache.handleResponse(this.slots, n, e, this.hasTimeouted);
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
		PublisherTagVersion = 55,
		DirectBiddingUrlBuilder = (function() {
			function a(t) {
				void 0 === t && (t = !1), (this.auditMode = t);
			}
			return (
				(a.prototype.buildUrl = function(t, e, n, o, i) {
					void 0 === n && (n = IntegrationMode.Unspecified);
					var r =
						("https:" === e.protocol ? "https:" : "http:") +
						a.CRITEO_BIDDER_URL +
						this.getHandlerPath();
					return (
						(r += "?ptv=" + PublisherTagVersion),
						(r += "&profileId=" + String(t)),
						(r += e.ctoIdOnPublisherDomain
							? "&idcpy=" + e.ctoIdOnPublisherDomain
							: ""),
						(r += e.idfs ? "&idfs=" + e.idfs : ""),
						(r += e.secureId ? "&sid=" + e.secureId : ""),
						(r += e.isOptOut ? "&optout=1" : ""),
						n !== IntegrationMode.Unspecified && (r += "&im=" + n),
						void 0 !== o && (r += "&av=" + String(o)),
						void 0 !== i && (r += "&wv=" + encodeURIComponent(i)),
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
	function retrieveGoogleTagPlacements(u) {
		(window.googletag = window.googletag || {}),
			(window.googletag.cmd = window.googletag.cmd || []),
			window.googletag.cmd.push(function() {
				for (
					var t = [],
						e =
							window.innerWidth ||
							document.documentElement.clientWidth ||
							document.body.clientWidth,
						n =
							window.innerHeight ||
							document.documentElement.clientHeight ||
							document.body.clientHeight,
						o = 0,
						i = window.googletag.pubads().getSlots();
					o < i.length;
					o++
				) {
					for (
						var r = i[o],
							a = r.getSlotElementId(),
							s = [],
							d = 0,
							c = r.getSizes(e, n) || r.getSizes();
						d < c.length;
						d++
					) {
						var l = c[d];
						"function" == typeof l.getWidth &&
							l.getWidth() &&
							"function" == typeof l.getHeight &&
							l.getHeight() &&
							s.push(l.getWidth() + "x" + l.getHeight());
					}
					a && 0 < s.length && t.push({ slotId: a, sizes: s });
				}
				u(t);
			});
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
					var n = this;
					this.googletag.cmd.push(function() {
						for (var t in e)
							n.googletag.pubads().clearTargeting(t),
								n.googletag.pubads().setTargeting(t, e[t] + "");
					});
				}),
				(t.prototype.setKeyValuePerSlot = function(e, n) {
					var o = this.googletag
						.pubads()
						.getSlots()
						.filter(function(t) {
							return t.getSlotElementId() === e;
						});
					0 === o.length
						? Log.Warning("No googletag slot found for slotId: " + e)
						: 1 < o.length
							? Log.Warning(
									"More than one googletag slot found for slotId: " + e
							  )
							: this.googletag.cmd.push(function() {
									for (var t in n)
										o[0].clearTargeting(t), o[0].setTargeting(t, n[t] + "");
							  });
				}),
				(t.prototype.resetKeyValuesForSlots = function(e) {
					var t = this,
						n = createEmptyDFPTargeting();
					this.googletag
						.pubads()
						.getSlots()
						.filter(function(t) {
							return -1 !== e.indexOf(t.getSlotElementId());
						})
						.forEach(function(e) {
							t.googletag.cmd.push(function() {
								for (var t in n) e.clearTargeting(t);
							});
						});
				}),
				t
			);
		})(),
		BidEventTarget = function() {},
		__extends$4 = ((ah = function(t, e) {
			return (ah =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			ah(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		ah,
		BidEventContainerTarget = (function(_super) {
			function BidEventContainerTarget(t, e) {
				var n = _super.call(this) || this;
				n.containerId = e;
				var o = t.getElementById(e);
				return (
					o
						? (n.element = o)
						: Log.Error("Target element '" + e + "' not found in the document"),
					n
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
		__extends$5 = ((sh = function(t, e) {
			return (sh =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			sh(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		sh,
		BidEventDocumentTarget = (function(n) {
			function t(t) {
				var e = n.call(this) || this;
				return (e.document = t), e;
			}
			return (
				__extends$5(t, n),
				(t.prototype.ResizeFrame = function(t, e) {
					if (
						this.document.defaultView &&
						this.document.defaultView.frameElement
					) {
						var n = this.document.defaultView.frameElement;
						(n.width = t.toString()), (n.height = e.toString());
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
		__extends$6 = ((Mh = function(t, e) {
			return (Mh =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			Mh(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		Mh,
		Custom = (function(n) {
			function o(t) {
				var e = n.call(this, o.NAME) || this;
				return (e.callback = t), e;
			}
			return (
				__extends$6(o, n),
				(o.prototype.eval = function(t) {
					this.callback && this.callback.apply(this);
				}),
				(o.NAME = "genericEvent"),
				o
			);
		})(AbstractEvent),
		BidResponseSlot = (function() {
			function t(t, e, n, o, i, r) {
				(this.id = this.generateRandomId()),
					(this.slotId = t),
					(this.impressionId = e),
					(this.cpm = n),
					(this.width = o),
					(this.height = i),
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
		__extends$7 = ((hi = function(t, e) {
			return (hi =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			hi(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		hi,
		DisplayUrlBidResponseSlot = (function(d) {
			function t(t, e, n, o, i, r, a) {
				var s = d.call(this, t, e, n, o, i, r) || this;
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
		__extends$8 = ((Ei = function(t, e) {
			return (Ei =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			Ei(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		Ei,
		HtmlCreativeBidResponseSlot = (function(d) {
			function t(t, e, n, o, i, r, a) {
				var s = d.call(this, t, e, n, o, i, r) || this;
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
			function h(t, e, n) {
				(this.lowerBound = t), (this.upperBound = e), (this.increment = n);
			}
			return (
				(h.createLineItemRangesFromString = function(t) {
					for (var e = [], n = 0, o = t.split(";"); n < o.length; n++) {
						var i = o[n],
							r = i.split(".."),
							a = h.roundToDecimal(r[0], 2),
							s = r[1].split(":"),
							d = h.roundToDecimal(s[0], 2),
							c = h.roundToDecimal(s[1], 2);
						if (isNaN(a) || isNaN(d) || isNaN(c) || 0 === c) {
							Log.Warning("Could not parse range parameter: " + i);
							break;
						}
						if (a < 0 || d < 0 || c < 0) {
							Log.Warning("Positive values must be set for range bounds: " + i);
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
					for (var n = 0, o = e; n < o.length; n++) {
						var i = o[n];
						if (t <= i.upperBound && t > i.lowerBound) {
							var r = Math.floor(t / i.increment + 1e-4) * i.increment;
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
					var n = parseFloat(t),
						o = Math.pow(10, e);
					return Math.round(n * o) / o;
				}),
				h
			);
		})(),
		__extends$9 = ((Hj = function(t, e) {
			return (Hj =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			Hj(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		Hj,
		NativeBidResponseSlot = (function(c) {
			function t(t, e, n, o, i, r, a, s) {
				var d = c.call(this, t, e, n, o, i, r) || this;
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
							var n = e.toLowerCase();
							this.paramParser[n]
								? this.paramParser[n](t[e])
								: Log.Warning("Unknown parameter: " + e);
						}
				}),
				t
			);
		})(),
		__extends$10 = ((lk = function(t, e) {
			return (lk =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			lk(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		lk,
		RenderAdInputParameters = (function(n) {
			function t(t) {
				var e = n.call(this) || this;
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
					n.prototype.tryFillParameters.call(e, t),
					e
				);
			}
			return __extends$10(t, n), t;
		})(InputParameters);
	function generateUuid() {
		var n = new Date().getTime();
		return (
			"undefined" != typeof performance &&
				"function" == typeof performance.now &&
				(n += performance.now()),
			"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
				var e = (n + 16 * Math.random()) % 16 | 0;
				return (
					(n = Math.floor(n / 16)), ("x" === t ? e : (3 & e) | 8).toString(16)
				);
			})
		);
	}
	var DirectBiddingSlot = function(t, e, n, o, i, r) {
			(this.slotId = generateUuid().replace(/-/g, "")),
				(this.impId = t),
				(this.zoneId = e),
				(this.nativeCallback = n),
				(this.transactionId = o),
				(this.sizes = i),
				(this.publisherSubId = r);
		},
		__extends$11 = ((Nk = function(t, e) {
			return (Nk =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			Nk(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		Nk,
		PlacementInputParameters = (function(e) {
			function t(t) {
				var i = e.call(this) || this;
				return (
					(i.slotId = void 0),
					(i.zoneId = void 0),
					(i.sizes = []),
					(i.nativeCallback = void 0),
					(i.publisherSubId = void 0),
					i.addParameter("slotid", function(t) {
						i.slotId = t;
					}),
					i.addParameter("zoneid", function(t) {
						i.zoneId = t;
					}),
					i.addParameter("sizes", function(t) {
						for (var e = 0, n = t; e < n.length; e++) {
							var o = n[e].split("x");
							i.sizes.push(new Size(parseInt(o[0], 10), parseInt(o[1], 10)));
						}
					}),
					i.addParameter("nativecallback", function(t) {
						i.nativeCallback = t;
					}),
					i.addParameter("publisherSubId", function(t) {
						i.publisherSubId = t;
					}),
					e.prototype.tryFillParameters.call(i, t),
					i
				);
			}
			return __extends$11(t, e), t;
		})(InputParameters),
		__extends$12 = ((jl = function(t, e) {
			return (jl =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			jl(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		jl,
		StandaloneInputParameters = (function(n) {
			function t(t) {
				var e = n.call(this) || this;
				return (
					(e.placements = void 0),
					(e.networkId = void 0),
					e.addParameter("networkId", function(t) {
						e.networkId = t;
					}),
					e.addParameter("placements", function(t) {
						e.placements = e.deserializePlacementInput(t);
					}),
					n.prototype.tryFillParameters.call(e, t),
					e
				);
			}
			return (
				__extends$12(t, n),
				(t.prototype.deserializePlacementInput = function(t) {
					for (var e = [], n = 0, o = t; n < o.length; n++) {
						var i = o[n],
							r = new PlacementInputParameters(i);
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
	function RequestBids(t, e, n) {
		RequestBidsWithProfileId(t, standaloneProfileId, e, n);
	}
	function RequestBidsOnGoogleTagSlots(e, n, o) {
		retrieveGoogleTagPlacements(function(t) {
			t.length <= 0
				? Log.Warning(
						"No Google tag placements have been retrieved, no bid will be requested."
				  )
				: RequestBidsWithProfileId(
						{ networkId: e, placements: t },
						standaloneProfileId,
						n,
						o
				  );
		});
	}
	function RequestBidsWithProfileId(t, e, h, n) {
		var f = new StandaloneInputParameters(t);
		if (checkInputParameters(f)) {
			for (
				var o = function() {
						void 0 !== h && h([]);
					},
					i = new DirectBiddingEventWithCaching(
						e,
						new DirectBiddingUrlBuilder(!1),
						f.placements,
						function(t) {
							var e = tryParseJson(t);
							if (void 0 !== e && void 0 !== e.slots) {
								for (var n = 0, o = e.slots; n < o.length; n++) {
									for (
										var i = o[n], r = void 0, a = 0, s = f.placements;
										a < s.length;
										a++
									)
										if ((p = s[a]).nativeCallback && p.impId === i.impid) {
											r = p.nativeCallback;
											break;
										}
									var d = GenerateBidResponseSlot(
										i.slotid,
										i.impid,
										i.cpm,
										i.width,
										i.height,
										i.zoneid,
										r,
										i.native,
										i.displayurl,
										i.creative
									);
									void 0 !== d &&
										(window.criteo_pubtag.standaloneBidder.bids[d.id] = d);
								}
								e.granularity && SetLineItemRanges(e.granularity);
							}
							if (void 0 !== h) {
								for (var c = [], l = 0, u = f.placements; l < u.length; l++) {
									var p = u[l];
									c.push(p.impId);
								}
								h(GetBids({ impressionIds: c }));
							}
						},
						o,
						o,
						n || 3e3,
						f.networkId,
						f.integrationMode
					),
					r = [],
					a = 0,
					s = f.placements;
				a < s.length;
				a++
			) {
				var d = s[a];
				r.push(d.impId);
			}
			(window.criteo_pubtag.standaloneBidder.impIds = r),
				window.criteo_pubtag.push(i);
		}
	}
	function SetLineItemRanges(t) {
		var e = LineItemRange.createLineItemRangesFromString(t);
		window.criteo_pubtag.standaloneBidder.lineItemRanges = e;
	}
	function markSetTargetingMetrics(t) {
		for (
			var e = new DirectBiddingMetricsManager(),
				n = e.getMetrics(!1),
				o = 0,
				i = n;
			o < i.length;
			o++
		)
			for (var r = i[o], a = 0, s = r.slots; a < s.length; a++) {
				var d = s[a].adUnitId;
				if (d && -1 !== t.indexOf(d)) {
					var c = TimeMeasurer.TimeSincePageLoad() - r.pageLoadElapsed;
					r.setTargetingElapsed = c;
				}
				break;
			}
		e.setMetrics(n);
	}
	function SetDFPKeyValueTargeting() {
		var t = new DFPKeyValueTargeter();
		t.resetKeyValuesForSlots(window.criteo_pubtag.standaloneBidder.impIds);
		var e = window.criteo_pubtag.standaloneBidder.lineItemRanges,
			n = GetImpressionIdToBestBid(),
			o = [];
		for (var i in n) {
			var r = ComputeDFPTargeting(n[i], e);
			void 0 !== r && (t.setKeyValuePerSlot(i, r), o.push(i));
		}
		markSetTargetingMetrics(o);
	}
	function ComputeStandaloneDFPTargeting(t, e) {
		return ComputeDFPTargeting(
			t,
			LineItemRange.createLineItemRangesFromString(e)
		);
	}
	function ComputeDFPTargeting(t, e) {
		var n = LineItemRange.computeLineItemPricebandValue(t.cpm, e);
		return void 0 === n ? void 0 : createDFPTargeting(n, t.id);
	}
	function RenderAd(t, e) {
		var n = new RenderAdInputParameters(
			"string" == typeof t ? { bidId: t, document: e } : t
		);
		if (n.bidId) {
			var o =
				void 0 !== n.containerId
					? new BidEventContainerTarget(n.document, n.containerId)
					: new BidEventDocumentTarget(n.document);
			RenderAdOnTarget(n.bidId, o);
		} else Log.Error("You must provide a bidId to the RenderAd call");
	}
	function RenderAdOnTarget(t, e) {
		var n = window.criteo_pubtag.standaloneBidder.bids;
		if (n.hasOwnProperty(t)) {
			var o = n[t].GenerateEvent(e);
			window.criteo_pubtag.push(o), delete n[t];
		} else Log.Error("Could not render bid with id: " + t);
	}
	function GetBids(t) {
		var e = window.criteo_pubtag.standaloneBidder.bids;
		if (null === e) return [];
		var n = window.criteo_pubtag.standaloneBidder.lineItemRanges,
			o = [];
		for (var i in e) {
			var r = e[i];
			if (
				!t ||
				!t.impressionIds ||
				-1 !== t.impressionIds.indexOf(r.impressionId)
			) {
				if (0 < n.length) {
					var a = LineItemRange.computeLineItemPricebandValue(r.cpm, n);
					r.cpm_bucket = a;
				}
				o.push(r);
			}
		}
		return o;
	}
	function GetBidsForAdUnit(t, e) {
		void 0 === e && (e = 1);
		var n = GetBids({ impressionIds: [t] });
		return n
			.sort(function(t, e) {
				return e.cpm - t.cpm;
			})
			.slice(0, Math.min(Math.max(e, 0), n.length));
	}
	function checkInputParameters(t) {
		if (void 0 === t.placements)
			return Log.Error("Missing 'placements' parameter"), !1;
		if (0 === t.placements.length)
			return Log.Error("'placements' parameter is empty"), !1;
		for (var e = 0, n = t.placements; e < n.length; e++) {
			var o = n[e];
			if (IsEmptyOrUndefined(o.impId))
				return Log.Error("Missing 'slotId' parameter in placements object"), !1;
			if (
				IsEmptyOrUndefined(o.zoneId) &&
				(IsEmptyOrUndefined(o.sizes) || IsEmptyOrUndefined(t.networkId))
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
		var t = {},
			e = window.criteo_pubtag.standaloneBidder.bids;
		for (var n in e) {
			var o = e[n];
			if (t.hasOwnProperty(o.impressionId))
				t[o.impressionId].cpm < o.cpm && (t[o.impressionId] = o);
			else t[o.impressionId] = o;
		}
		return t;
	}
	function GenerateBidResponseSlot(t, e, n, o, i, r, a, s, d, c) {
		return void 0 !== a && void 0 !== s
			? new NativeBidResponseSlot(t, e, n, o, i, r, a, s)
			: void 0 === d || (void 0 !== c && "<script" !== c.substr(0, 7))
				? void 0 !== c
					? new HtmlCreativeBidResponseSlot(t, e, n, o, i, r, c)
					: void 0
				: new DisplayUrlBidResponseSlot(t, e, n, o, i, r, d);
	}
	function IsEmptyOrUndefined(t) {
		return void 0 === t || t + "" == "";
	}
	var AMP = (function() {
			function s() {}
			return (
				(s.Standalone = function(i, r, a) {
					RequestBids(
						{
							integrationmode: "amp",
							placements: [
								{
									slotid: i.slot,
									zoneid: i.zone,
									sizes: [i.width + "x" + i.height]
								}
							]
						},
						function(t) {
							if ("DFP" === i.adserver) {
								s.listenForCreativeRequests(t);
								for (var e = 0, n = t; e < n.length; e++) {
									var o = ComputeStandaloneDFPTargeting(n[e], i.lineItemRanges);
									void 0 !== o && a(o);
								}
								0 === t.length && a({});
							}
							r(null);
						},
						i.timeout
					);
				}),
				(s.listenForCreativeRequests = function(s) {
					window.addEventListener(
						"message",
						function(t) {
							var e = t.data instanceof Object ? t.data : tryParseJson(t.data);
							if (e && e.bidId && t.source)
								for (var n = 0, o = s; n < o.length; n++) {
									var i = o[n];
									if (i.id === e.bidId) {
										var r = t.source,
											a = i.GenerateMessage();
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
		Prebid = (function() {
			function o(t, e, n, o, i) {
				var r, a;
				(this.timer = new DirectBiddingTimer(
					new DirectBiddingMetricBuilder(),
					o.auctionStart,
					resolvePrebidTimeout(o.timeout)
				)),
					(this.auctionId = o.auctionId),
					(this.bidRequests = n),
					(this.slots = []);
				for (var s = 0, d = n; s < d.length; s++) {
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
							c.params.publisherSubId
						)
					),
						(r = c.params.networkId || r),
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
						i
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
					if (!this.cache.silentModeEnabled())
						return (
							this.timer.sendRequest(this.url), this.requestBuilder.getRequest()
						);
					Log.Debug(
						"Request ignored because the global silent mode is enabled"
					);
				}),
				(o.GetAllAdapters = function() {
					return window.Criteo.prebid_adapters;
				}),
				(o.GetAdapter = function(t) {
					var e = "string" == typeof t ? t : t.bidRequests[0].auctionId,
						n = o.GetAllAdapters();
					if (n && e in n) return n[e];
				}),
				(o.prototype.createNativeAd = function(t, e, n) {
					return (
						(window.criteo_prebid_native_slots =
							window.criteo_prebid_native_slots || {}),
						(window.criteo_prebid_native_slots[t] = {
							callback: n,
							payload: e
						}),
						'<script type="text/javascript">\n            var win = window;\n            for (var i = 0; i < 10; ++i) {\n                win = win.parent;\n                if (win.criteo_prebid_native_slots) {\n                    var responseSlot = win.criteo_prebid_native_slots["' +
							t +
							'"];\n                    responseSlot.callback(responseSlot.payload);\n                    break;\n                }\n            }\n        </script>'
					);
				}),
				(o.prototype.getBidRequestForSlot = function(t) {
					for (var e = 0, n = this.bidRequests; e < n.length; e++) {
						var o = n[e];
						if (
							o.adUnitCode === t.impid &&
							(!o.params.zoneId || parseInt(o.params.zoneId, 10) === t.zoneid)
						)
							return o;
					}
				}),
				(o.prototype.interpretResponse = function(t, e) {
					this.timer.requestReceived();
					var n = extractExtraData(t),
						o = {};
					if (void 0 !== n.slots)
						for (var i = 0, r = n.slots; i < r.length; i++) {
							o[(c = r[i]).imp_id] = c;
						}
					var a = [];
					if (t.slots && Array.isArray(t.slots))
						for (var s = 0, d = t.slots; s < d.length; s++) {
							var c = d[s],
								l = this.getBidRequestForSlot(c);
							if (l) {
								var u = l.bidId,
									p = c.native
										? this.createNativeAd(u, c.native, l.params.nativeCallback)
										: c.creative,
									h = c.ttl || (o[c.slotid] && o[c.slotid].ttl) || 60;
								a.push({
									requestId: u,
									cpm: c.cpm,
									ad: p,
									currency: c.currency,
									netRevenue: !0,
									ttl: h,
									creativeId: u,
									width: c.width,
									height: c.height
								});
							} else
								Log.Error('Could not get bid request for slot "' + c + '"');
						}
					return (
						this.cache.handleResponse(this.slots, t, n, !1),
						this.timer.finish(this.metricsManager, n.slots),
						a
					);
				}),
				(o.prototype.handleBidWon = function(t) {
					for (
						var e = this.metricsManager.getMetrics(!1), n = 0, o = e;
						n < o.length;
						n++
					)
						for (var i = 0, r = o[n].slots; i < r.length; i++) {
							var a = r[i];
							a.adUnitId === t.adUnitCode && (a.adapterBidWon = !0);
						}
					this.metricsManager.setMetrics(e);
				}),
				(o.prototype.handleBidTimeout = function() {
					this.timer.requestReceived(!0),
						this.timer.finish(this.metricsManager);
				}),
				(o.prototype.handleSetTargeting = function() {
					this.timer.setTargeting();
				}),
				o
			);
		})();
	function GetIdfs() {
		return window.criteo_pubtag.context.getIdfs();
	}
	function SetIdfs(t) {
		window.criteo_pubtag.context.setIdfs(t);
	}
	var AdBlocker = (function() {
			function a() {
				(this.allowedPixelLoaded = !1), (this.blockedPixelFailed = !1);
			}
			return (
				(a.prototype.isAdBlocked = function(t, e) {
					var n = this,
						o = "https:" === t ? "https:" : "http:",
						i = o + a.allowedPixelUrl,
						r = o + a.blockedPixelUrl;
					this.createPixel(
						i,
						function() {
							(n.allowedPixelLoaded = !0) === n.blockedPixelFailed && e(!0);
						},
						function() {}
					),
						this.createPixel(
							r,
							function() {
								e(!1);
							},
							function() {
								(n.blockedPixelFailed = !0) === n.allowedPixelLoaded && e(!0);
							}
						);
				}),
				(a.prototype.createPixel = function(t, e, n) {
					var o = document.createElement("img");
					(o.src = t),
						(o.height = 1),
						(o.width = 1),
						(o.style.display = "none"),
						(o.onload = e),
						(o.onerror = n);
				}),
				(a.allowedPixelUrl = "//static.criteo.net/images/pixel.gif?ch=1"),
				(a.blockedPixelUrl = "//static.criteo.net/images/pixel.gif?ch=2"),
				a
			);
		})(),
		__extends$13 = ((Wo = function(t, e) {
			return (Wo =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			Wo(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		Wo,
		ConditionalEvent = (function(r) {
			function a(t, e, n, o) {
				var i = r.call(this, a.NAME) || this;
				return (
					(i.condition = t),
					(i.eventIfTrue = e),
					(i.eventIfFalse = n),
					(i.conditionRequirement = o),
					i
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
		np;
	(np = AdFormatType || (AdFormatType = {})),
		(np[(np.Classic = 0)] = "Classic"),
		(np[(np.StickyFooter = 1)] = "StickyFooter"),
		(np[(np.ScrollingBanner = 2)] = "ScrollingBanner");
	var CookieHelper = (function() {
			function p() {}
			return (
				(p.SetCookie = function(t, e, n, o, i) {
					void 0 === i && (i = !1);
					var r = o || document,
						a = new Date();
					a.setTime(a.getTime() + 60 * n * 60 * 1e3);
					var s = "expires=" + a.toUTCString();
					if (!i)
						return p.setCookieString(t, e, s, void 0, r), r.location.hostname;
					for (
						var d = r.location.hostname.split("."), c = 0;
						c < d.length;
						++c
					) {
						var l = d.slice(d.length - c - 1, d.length).join(".");
						p.setCookieString(t, e, s, l, r);
						var u = p.GetCookie(t, o);
						if (u && u === e) return l;
					}
					return r.location.hostname;
				}),
				(p.DeleteCookie = function(t, e, n) {
					void 0 === n && (n = !1), p.SetCookie(t, "", 0, e, n);
				}),
				(p.GetCookie = function(t, e) {
					for (
						var n = 0, o = (e || document).cookie.split(";");
						n < o.length;
						n++
					) {
						var i = o[n],
							r = i.substr(0, i.indexOf("=")).replace(/^\s+|\s+$/g, ""),
							a = i.substr(i.indexOf("=") + 1);
						if (r === t) return decodeURIComponent(a);
					}
				}),
				(p.setCookieString = function(t, e, n, o, i) {
					var r = t + "=" + encodeURIComponent(e) + ";" + n + ";";
					o && "" !== o && (r += "domain=." + o + ";"),
						(i.cookie = r + "path=/");
				}),
				p
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
					var n = document.createElement("a");
					e.appendChild(n),
						(n.style.backgroundColor = "rgb(221, 221, 221)"),
						(n.style.backgroundImage =
							"url('//static.criteo.net/images/criteo/publishertag/close.png')"),
						(n.style.backgroundRepeat = "no-repeat"),
						(n.style.backgroundPosition = "center"),
						(n.style.display = "block"),
						(n.style.position = "absolute"),
						(n.style.left = "0"),
						(n.style.top = "-24px"),
						(n.style.width = "23px"),
						(n.style.height = "24px"),
						(n.style.borderBottomColor = "#6d6c71"),
						(n.style.cursor = "pointer"),
						(n.onclick = function() {
							(e.style.display = "none"),
								CookieHelper.SetCookie("cto_sticky_closed", "true", 24);
						});
					var o = document.createElement("div");
					if (
						(e.appendChild(o),
						(o.id = "cto_sticky"),
						(o.style.margin = "0 auto"),
						(o.style.display = "table"),
						void 0 === t || "" === t)
					)
						document.body.appendChild(e);
					else {
						var i = document.getElementById(t);
						i
							? i.appendChild(e)
							: Log.Error(
									'Target element "' + t + '" not found in the document'
							  );
					}
					return o.id;
				}),
				(t.prototype.CreateScrollingBannerContainer = function(t) {
					var e,
						n = this;
					if (void 0 === t || "" === t)
						((e = document.createElement("div")).id = "cto_scrolling"),
							document.body.appendChild(e);
					else {
						var o = document.getElementById(t);
						if (!o)
							return (
								Log.Error(
									'Target element "' + t + '" not found in the document'
								),
								t
							);
						e = o;
					}
					var i = e.offsetTop;
					return (
						window.addEventListener
							? window.addEventListener(
									"scroll",
									function() {
										n.SetScrollingContainerPosition(e, i);
									},
									!1
							  )
							: window.attachEvent("onscroll", function() {
									n.SetScrollingContainerPosition(e, i);
							  }),
						this.SetScrollingContainerPosition(e, i),
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
		hq;
	(hq = DisplayContext || (DisplayContext = {})),
		(hq[(hq.InFriendlyIframe = 1)] = "InFriendlyIframe"),
		(hq[(hq.InUnfriendlyIframe = 2)] = "InUnfriendlyIframe"),
		(hq[(hq.DirectIntegration = 3)] = "DirectIntegration");
	var DomManipulationTools = (function() {
			function t() {}
			return (
				(t.getHighestAccessibleWindow = function(t) {
					var e = t,
						n = !1;
					try {
						for (; e.parent.document !== e.document; ) {
							if (!e.parent.document) {
								n = !0;
								break;
							}
							e = e.parent;
						}
					} catch (t) {
						n = !0;
					}
					return { topFrame: e, err: n };
				}),
				(t.getHighestAccessibleUrl = function(t) {
					var e = t.topFrame;
					if (!t.err) return e.location.href;
					try {
						var n = e.top.location.href;
						if (n) return n;
					} catch (t) {}
					try {
						var o = e.location.ancestorOrigins;
						if (o) return o[o.length - 1];
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
					var n = document.getElementById(e);
					if (t.displayContext === DisplayContext.DirectIntegration) {
						if (null !== n) return r.GetRatioAboveFold(n);
						document.write(
							"<div id='compute_visibility_helper' width='0px' height='0px'></div>"
						);
						var o = document.getElementById("compute_visibility_helper"),
							i = r.GetRatioAboveFold(o);
						return o.parentElement.removeChild(o), i;
					}
					if (t.displayContext === DisplayContext.InFriendlyIframe)
						return r.GetRatioAboveFold(frameElement);
				}),
				(r.GetRatioAboveFold = function(t) {
					var e = DomManipulationTools.getHighestAccessibleWindow(window)
							.topFrame,
						n = e.document,
						o =
							e.innerHeight ||
							n.documentElement.clientHeight ||
							n.body.clientHeight,
						i = t.getBoundingClientRect(),
						r = n.documentElement.scrollTop || n.body.scrollTop;
					return o >= i.bottom + r
						? 1
						: o <= i.top + r
							? 0
							: (o - i.top - r) / t.offsetHeight;
				}),
				r
			);
		})(),
		__extends$14 = ((Hq = function(t, e) {
			return (Hq =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			Hq(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		Hq,
		DisplayEvent = (function(i) {
			function t(t, e, n) {
				var o = i.call(this, t) || this;
				return (o.displayParameters = n), (o.urlBuilder = e), o;
			}
			return (
				__extends$14(t, i),
				(t.prototype.eval = function(t) {
					this.displayParameters.atfRatio = ViewabilityComputer.GetAtfRatio(
						t.context,
						this.displayParameters.containerid
					);
				}),
				(t.prototype.buildCasUrl = function(e, n, o, i, r) {
					var a = this;
					hasCMP(window)
						? retrieveGDPRConsent(window, function(t) {
								e(a.urlBuilder.buildUrl(a.displayParameters, n, o, i, r, t));
						  })
						: e(this.urlBuilder.buildUrl(this.displayParameters, n, o, i, r));
				}),
				t
			);
		})(AbstractEvent),
		HandlerType,
		er;
	(er = HandlerType || (HandlerType = {})),
		(er[(er.AFR = 0)] = "AFR"),
		(er[(er.AJS = 1)] = "AJS");
	var __extends$15 = ((fr = function(t, e) {
			return (fr =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			fr(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		fr,
		DisplayEventAFR = (function(a) {
			function i(t, e, n) {
				var o = a.call(this, i.NAME, t, e) || this;
				return (o.respectsEyeoDeal = n), o;
			}
			return (
				__extends$15(i, a),
				(i.prototype.eval = function(e) {
					var n = this;
					a.prototype.eval.call(this, e);
					var o = this.displayParameters.containerid,
						i = this.displayParameters.callbackSuccess,
						r = this.displayParameters.callbackError;
					this.buildCasUrl(
						function(t) {
							if (e.context.isAdBlocked) {
								if (!n.respectsEyeoDeal) return;
								n.loadIframe(t, o, i, r);
							} else n.loadIframe(t, o, i, r);
						},
						e.context,
						HandlerType.AFR
					);
				}),
				(i.prototype.loadIframe = function(t, e, n, o) {
					var i = document.createElement("iframe");
					(i.src = t),
						(i.id = e + "_cto_iframe"),
						(i.frameBorder = "0"),
						i.setAttribute("hspace", "0"),
						i.setAttribute("vspace", "0"),
						(i.marginWidth = "0px"),
						(i.marginHeight = "0px"),
						(i.width = "100%"),
						(i.height = "100%"),
						(i.scrolling = "no"),
						n && (i.onload = n),
						o && (i.onerror = o);
					var r = document.getElementById(e);
					r
						? r.appendChild(i)
						: Log.Error('Target element "' + e + '" not found in the document');
				}),
				(i.NAME = "displayAfr"),
				i
			);
		})(DisplayEvent),
		__extends$16 = ((Ir = function(t, e) {
			return (Ir =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			Ir(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		Ir,
		DisplayEventAsync = (function(_super) {
			function DisplayEventAsync(t, e) {
				return _super.call(this, DisplayEventAsync.NAME, t, e) || this;
			}
			return (
				__extends$16(DisplayEventAsync, _super),
				(DisplayEventAsync.prototype.eval = function(e) {
					var n = this;
					_super.prototype.eval.call(this, e);
					var o = this.displayParameters.containerid,
						i = this.displayParameters.width,
						r = this.displayParameters.height,
						t = this.displayParameters.layout,
						a = this.displayParameters.callbackSuccess,
						s = this.displayParameters.callbackError,
						d = this.displayParameters.passbackCode;
					if ("" === o || void 0 === o) Log.Error("No containerid provided");
					else if (void 0 !== t) {
						var c =
								DisplayEventAsync.CHAPI_NAME +
								"=" +
								encodeURIComponent(JSON.stringify(t)),
							l = function() {
								var t = n.getContainerSize(o, i, r);
								n.buildCasUrl(
									function(t) {
										n.loadScriptAsync(t, c, a, s, d);
									},
									e.context,
									void 0,
									t.width,
									t.height
								);
							};
						void 0 !== i && void 0 !== r
							? l()
							: window.addEventListener
								? window.addEventListener("load", l, !1)
								: window.attachEvent("onload", l);
					} else
						this.buildCasUrl(function(t) {
							n.loadScriptAsync(t, void 0, a, s, d);
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
				(DisplayEventAsync.prototype.getContainerSize = function(t, e, n) {
					var o = document.getElementById(t),
						i = DomManipulationTools.inIframe(),
						r = e || (i ? document.body.offsetWidth : o ? o.offsetWidth : 0),
						a = n || (i ? document.body.offsetHeight : o ? o.offsetHeight : 0);
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
		__extends$17 = ((qs = function(t, e) {
			return (qs =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			qs(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		qs,
		DisplayEventSync = (function(n) {
			function o(t, e) {
				return n.call(this, o.NAME, t, e) || this;
			}
			return (
				__extends$17(o, n),
				(o.prototype.eval = function(t) {
					var e = this;
					n.prototype.eval.call(this, t),
						this.buildCasUrl(function(t) {
							e.loadScriptSync(t);
						}, t.context);
				}),
				(o.prototype.loadScriptSync = function(t) {
					document.write(
						"<script type='text/javascript' src='" + t + "'></script>"
					);
				}),
				(o.NAME = "displaySync"),
				o
			);
		})(DisplayEvent),
		__extends$18 = ((Js = function(t, e) {
			return (Js =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			Js(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		Js,
		DisplayInputParameters = (function(n) {
			function t(t) {
				var e = n.call(this) || this;
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
					n.prototype.tryFillParameters.call(e, t),
					e
				);
			}
			return (
				__extends$18(t, n),
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
				(l.prototype.buildUrl = function(t, e, n, o, i, r) {
					var a;
					a = n === HandlerType.AFR ? l.CAS_URL_AFR : l.CAS_URL_AJS;
					var s =
						("https:" === e.protocol ? "https:" : "http:") +
						a +
						"?ptv=" +
						PublisherTagVersion;
					if (!0 === e.isAdBlocked) {
						var d = this.getAbpParameter(t, e);
						s += "&abp=" + String(d);
					}
					for (var c in (n !== HandlerType.AFR &&
						(s +=
							void 0 !== t.containerid && "" !== t.containerid
								? "&containerid=" + encodeURIComponent(t.containerid)
								: ""),
					(s += "&zoneid=" + String(t.zoneid)),
					(s += o ? "&width=" + o : ""),
					(s += i ? "&height=" + i : ""),
					(s += e.ctoIdOnPublisherDomain
						? "&idcpy=" + e.ctoIdOnPublisherDomain
						: ""),
					(s += e.idfs ? "&idfs=" + e.idfs : ""),
					(s += e.secureId ? "&sid=" + e.secureId : ""),
					(s += e.isOptOut ? "&optout=1" : ""),
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
					(s += t.publisherUrl
						? "&publisherurl=" + encodeURIComponent(t.publisherUrl)
						: ""),
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
							(void 0 !== r.consentData &&
								(s += r.consentData ? "&gdprDta=" + r.consentData : ""),
							void 0 !== r.consentGiven &&
								(s += "&gdprGvn=" + (r.consentGiven ? "1" : "0")),
							void 0 !== r.gdprApplies &&
								(s += "&gdprApp=" + (r.gdprApplies ? "1" : "0"))),
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
					var n = this.getNewRatiosFeatures(e),
						o = n.respectsAdRatioConstraint;
					return (
						o
							? ((a.atfRatio = n.newAtfRatio), (a.btfRatio = n.newBtfRatio))
							: Log.Debug(
									"The element " +
										t +
										"does not respect Eyeo acceptable ads ratio constraints"
							  ),
						o
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
						n = t.offsetHeight * t.offsetWidth,
						o = screen.width * screen.height,
						i = a.atfRatio + (e * n) / o,
						r = a.btfRatio + ((1 - e) * n) / o;
					return {
						respectsAdRatioConstraint: i <= 0.15 && r <= 0.25,
						newAtfRatio: i,
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
						var n = new AdvancedAdFormats(e.adFormat);
						if (n.IsUserOptout())
							return void Log.Debug(
								"The user has opted-out for 1 day when closing the sticky footer."
							);
						e.containerid = n.CreateAdvancedAdFormatContainer(e.containerid);
					}
					var o;
					(o = e.async
						? new DisplayEventAsync(new DisplayUrlBuilder(), e)
						: new DisplayEventSync(new DisplayUrlBuilder(), e)),
						window.criteo_pubtag.push(o);
				} else
					Log.Error("Missing parameter 'containerid' for an async display");
			else Log.Error("Criteo hosted ads only work in async mode");
		else Log.Error("missing parameter 'zoneid'");
	}
	function DisplayAcceptableAdIfAdblocked(t) {
		var e = new DisplayInputParameters(t);
		if (void 0 !== e.zoneid)
			if (void 0 !== e.containerid && "" !== e.containerid) {
				var n = document.getElementById(e.containerid);
				if (isVisible(n)) {
					var o = window.criteo_pubtag.context;
					if (void 0 === o.isAdBlocked)
						new AdBlocker().isAdBlocked(o.protocol, function(t) {
							(o.isAdBlocked = t), window.criteo_pubtag.evalEvents();
						});
					var i,
						r,
						a = new EyeoDealValidator();
					(i = new DisplayEventAFR(
						new DisplayUrlBuilder(),
						e,
						a.respectsEyeoDeal(e.containerid)
					)),
						(r = new Custom(function() {
							e.collapseContainerIfNotAdblocked && (n.style.display = "none"),
								void 0 !== e.callIfNotAdblocked && e.callIfNotAdblocked();
						}));
					var s;
					(s = new ConditionalEvent(
						function() {
							return !0 === window.criteo_pubtag.context.isAdBlocked;
						},
						i,
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
		var n = t.currentStyle;
		if (n) {
			if ("none" === n.display) return !1;
			if ("hidden" === n.visibility) return !1;
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
						var n = this.length;
						if (0 === n) return -1;
						if (n <= e) return -1;
						for (var o = Math.max(0 <= e ? e : n - Math.abs(e), 0); o < n; ) {
							if (o in this && this[o] === t) return o;
							o++;
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
							var n = [],
								o = 2 <= arguments.length ? arguments[1] : void 0,
								i = 0;
							i < e;
							i++
						)
							if (i in this) {
								var r = this[i];
								t.call(o, r, i, this) && n.push(r);
							}
						return n;
					});
			}),
			t
		);
	})();
	function tryDecodeURIComponent(e, n) {
		try {
			return decodeURIComponent(e);
		} catch (t) {
			return void 0 !== n ? n : e;
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
	var CookieSynchronizer = (function() {
			function o(t, e, n) {
				(this.isDebug = e),
					(this.topWin = t),
					(this.topDoc = t.document),
					(this.localStorageHelper = new LocalStorageHelper(this.topWin)),
					(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage()),
					(this.topUrl = n);
			}
			return (
				(o.isSafariBrowser = function() {
					return null !== navigator.userAgent.match(o.SAFARI_CHECK_REGEX);
				}),
				(o.isAndroidBrowser = function() {
					return null !== navigator.userAgent.match(o.ANDROID_CHECK_REGEX);
				}),
				(o.prototype.synchronizeCriteoUid = function(t) {
					var e = this;
					if (
						(t || o.isSafariBrowser() || o.isAndroidBrowser()) &&
						this.topWin.addEventListener
					)
						if ("complete" === this.topDoc.readyState)
							this.appendGumIframeIfDoesNotExist();
						else {
							var n = function() {
								e.topDoc.removeEventListener("DOMContentLoaded", n),
									e.topWin.removeEventListener("load", n),
									e.appendGumIframeIfDoesNotExist();
							};
							this.topWin.addEventListener("load", n, !1),
								this.topDoc.addEventListener("DOMContentLoaded", n, !1);
						}
				}),
				(o.prototype.appendGumIframeIfDoesNotExist = function() {
					var n = this,
						t = this.createGumIframe();
					this.topDoc.getElementById(o.SYNCFRAME_ID) ||
						(this.topWin.addEventListener(
							"message",
							function(t) {
								var e = t.data;
								e &&
									e.isCriteoMessage &&
									(t.stopImmediatePropagation(),
									e.optout
										? (n.setClientSideOptOut(),
										  n.deleteClientSideUid(),
										  n.deleteClientSideIdfs(),
										  n.deleteClientSideSecureId())
										: (e.uid && n.setClientSideUid(e.uid),
										  e.idfs && n.setClientSideIdfs(e.idfs),
										  e.removeSid
												? n.deleteClientSideSecureId()
												: e.sid && n.setClientSideSecureId(e.sid)));
							},
							!0
						),
						this.topDoc.body.appendChild(t));
				}),
				(o.prototype.getClientSideUid = function() {
					return this.getFromAllStorages(o.GUID_COOKIE_NAME);
				}),
				(o.prototype.setClientSideUid = function(t) {
					this.writeOnAllStorages(
						o.GUID_COOKIE_NAME,
						t,
						o.GUID_RETENTION_TIME_HOUR
					);
				}),
				(o.prototype.deleteClientSideUid = function() {
					this.deleteFromAllStorage(o.GUID_COOKIE_NAME);
				}),
				(o.prototype.getClientSideOptOut = function() {
					var t = this.getFromAllStorages(o.OPTOUT_COOKIE_NAME);
					return Boolean(t);
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
				(o.prototype.setClientSideIdfs = function(t) {
					this.writeOnAllStorages(
						o.IDFS_COOKIE_NAME,
						t,
						o.GUID_RETENTION_TIME_HOUR
					);
				}),
				(o.prototype.getClientSideSecureId = function() {
					return this.getFromAllStorages(o.SECURE_ID_COOKIE_NAME);
				}),
				(o.prototype.setClientSideSecureId = function(t) {
					this.writeOnAllStorages(
						o.SECURE_ID_COOKIE_NAME,
						t,
						o.GUID_RETENTION_TIME_HOUR
					);
				}),
				(o.prototype.deleteClientSideSecureId = function() {
					this.deleteFromAllStorage(o.SECURE_ID_COOKIE_NAME);
				}),
				(o.prototype.getLocalWebId = function() {
					var t = CookieHelper.GetCookie(
						o.LOCAL_WEB_ID_COOKIE_NAME,
						this.topDoc
					);
					if (!t) {
						var e = generateUuid();
						CookieHelper.SetCookie(
							o.LOCAL_WEB_ID_COOKIE_NAME,
							e,
							o.GUID_RETENTION_TIME_HOUR,
							this.topDoc,
							!0
						),
							(t = CookieHelper.GetCookie(
								o.LOCAL_WEB_ID_COOKIE_NAME,
								this.topDoc
							));
					}
					return t || "NA";
				}),
				(o.prototype.createGumIframe = function() {
					var t = this.topDoc.createElement("iframe"),
						e = this.buildSyncframeSrc();
					return (
						(t.src = e), (t.id = o.SYNCFRAME_ID), (t.style.display = "none"), t
					);
				}),
				(o.prototype.writeOnAllStorages = function(t, e, n) {
					this.localStorageEnabled && this.localStorageHelper.setItem(t, e),
						CookieHelper.SetCookie(t, e, n, this.topDoc, !0);
				}),
				(o.prototype.getFromAllStorages = function(t) {
					var e,
						n = CookieHelper.GetCookie(t, this.topDoc);
					return (
						this.localStorageEnabled &&
							(e = this.localStorageHelper.getItem(t) || void 0),
						n || e
					);
				}),
				(o.prototype.deleteFromAllStorage = function(t) {
					CookieHelper.DeleteCookie(t, this.topDoc, !0),
						this.localStorageEnabled && this.localStorageHelper.removeItem(t);
				}),
				(o.prototype.getTld = function() {
					var t = CookieHelper.SetCookie(
						o.TLD_TEST_COOKIE_NAME,
						"test",
						1,
						this.topDoc,
						!0
					);
					return (
						CookieHelper.DeleteCookie(o.TLD_TEST_COOKIE_NAME, this.topDoc, !0),
						t
					);
				}),
				(o.prototype.buildSyncframeSrc = function() {
					var t = this.getClientSideUid(),
						e = this.getClientSideIdfs(),
						n = this.getClientSideOptOut(),
						o = this.getClientSideSecureId(),
						i = this.getLocalWebId(),
						r = this.getTld(),
						a = encodeURIComponent(parseUri(this.topUrl).hostname),
						s = PublisherTagVersion,
						d =
							"https://gum.criteo.com/syncframe?topUrl=" +
							a +
							(this.isDebug ? "&debug=1" : "");
					return (d +=
						"#" +
						JSON.stringify({
							optout: n,
							uid: t,
							idfs: e,
							sid: o,
							origin: "publishertag",
							version: s,
							lwid: i,
							tld: r,
							topUrl: a
						}));
				}),
				(o.GUID_COOKIE_NAME = "cto_idcpy"),
				(o.GUID_RETENTION_TIME_HOUR = 9360),
				(o.IDFS_COOKIE_NAME = "cto_idfs"),
				(o.SECURE_ID_COOKIE_NAME = "cto_sid"),
				(o.LOCAL_WEB_ID_COOKIE_NAME = "cto_lwid"),
				(o.OPTOUT_COOKIE_NAME = "cto_optout"),
				(o.OPTOUT_RETENTION_TIME_HOUR = 43200),
				(o.TLD_TEST_COOKIE_NAME = "cto_pub_test_tld"),
				(o.SYNCFRAME_ID = "criteo-syncframe"),
				(o.SAFARI_CHECK_REGEX = /^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i),
				(o.ANDROID_CHECK_REGEX = /^.*Mozilla\/5.0\s?\(Linux.*;(\s?U;)?\s?Android\s?([^;]*);(.*;)*\s?(.+)\s?Build\/([^;)]*)(;\swv)?/i),
				o
			);
		})(),
		Context = (function() {
			function t(t, e) {
				this.charset = t.charset || t.characterSet || "";
				var n = DomManipulationTools.getHighestAccessibleWindow(e);
				(this.displayContext = this.getDisplayContext(n)),
					(this.highestAccessibleUrl = DomManipulationTools.getHighestAccessibleUrl(
						n
					)),
					this.synchronizeCriteoUid(n, this.highestAccessibleUrl);
				var o = this.getQueryStringParams(this.highestAccessibleUrl);
				(this.debugMode = "1" === o.pbt_debug || !1),
					(this.noLog = "1" === o.pbt_nolog || !1),
					(this.shouldIgnoreSilentMode = this.computeShouldIgnoreSilentMode()),
					(this.silentModeIgnored = !1),
					this.debugMode && SetLogLevel(LogLevel.Debug),
					(this.location = e.location),
					(this.protocol = e.location.protocol),
					(this.dising = !1),
					(this.ct0 = void 0),
					(this.wpdt0 = void 0),
					(this.isAdBlocked = void 0),
					(this.rtaVarNames = []);
			}
			return (
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
						n = t.split("?");
					if (1 < n.length)
						for (var o = 0, i = n[1].split("&"); o < i.length; o++) {
							var r = i[o].split("=");
							e[tryDecodeURIComponent(r[0])] = tryDecodeURIComponent(r[1]);
						}
					return e;
				}),
				(t.prototype.synchronizeCriteoUid = function(t, e) {
					var n = t.topFrame,
						o = new CookieSynchronizer(n, this.debugMode, e);
					(this.ctoIdOnPublisherDomain = o.getClientSideUid()),
						(this.isOptOut = o.getClientSideOptOut()),
						(this.idfs = o.getClientSideIdfs()),
						(this.secureId = o.getClientSideSecureId()),
						o.synchronizeCriteoUid();
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
				for (var n = 0, o = t; n < o.length; n++) {
					var i = o[n];
					this.events.push(i);
				}
				this.evalEvents();
			}),
			(t.prototype.evalEvents = function() {
				for (var t = 0; t < this.events.length; ) {
					var e = this.events[t];
					if (isConditionalEvent(e) && !e.canEval()) t++;
					else this.events.splice(t, 1)[0].eval(this);
				}
			}),
			(t.VERSION = PublisherTagVersion),
			t
		);
	})();
	function createEventProcessor(t) {
		var e = {
			push: function() {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				if (void 0 !== t)
					for (var n = 0, o = t; n < o.length; n++) {
						var i = o[n];
						"function" == typeof i && i();
					}
			}
		};
		return t && Array.isArray(t) && e.push.apply(e, t), e;
	}
	var __extends$19 = ((aw = function(t, e) {
			return (aw =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			aw(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		aw,
		DefaultCrtgContentName = "crtg_content",
		DefaultCrtgRtaCookieName = "crtg_rta",
		RtaInputParameters = (function(n) {
			function t(t) {
				var e = n.call(this) || this;
				return (
					(e.networkId = void 0),
					(e.crtgContentName = void 0),
					(e.crtgRtaCookieName = void 0),
					(e.adserver = void 0),
					e.addParameter("networkId", function(t) {
						e.networkId = t;
					}),
					e.addParameter("varName", function(t) {
						e.crtgContentName = t;
					}),
					e.addParameter("cookieName", function(t) {
						e.crtgRtaCookieName = t;
					}),
					e.addParameter("adserver", function(t) {
						e.adserver = t;
					}),
					n.prototype.tryFillParameters.call(e, t),
					e
				);
			}
			return __extends$19(t, n), t;
		})(InputParameters),
		__extends$20 = ((tw = function(t, e) {
			return (tw =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			tw(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		tw,
		RtaEvent = (function(_super) {
			function RtaEvent(t, e) {
				var n = _super.call(this, RtaEvent.NAME) || this;
				return (n.urlBuilder = t), (n.parameters = e), n;
			}
			return (
				__extends$20(RtaEvent, _super),
				(RtaEvent.prototype.eval = function(t) {
					_super.prototype.eval.call(this, t);
					var e = this.urlBuilder.buildUrl(this.parameters, t.context),
						n = new AsyncRequest(e),
						o = this.parameters.crtgContentName || DefaultCrtgContentName;
					-1 === t.context.rtaVarNames.indexOf(o, 0) &&
						t.context.rtaVarNames.push(o),
						n.send(this.executeScript, function() {
							return Log.Error("An error occured while calling " + e);
						});
				}),
				(RtaEvent.prototype.executeScript = function(responseText) {
					eval(responseText);
				}),
				(RtaEvent.NAME = "rtaEvent"),
				RtaEvent
			);
		})(AbstractEvent);
	function ExtractKeyValuesFromRtaResponse(t) {
		if (void 0 === t || "" === t) return {};
		for (var e = {}, n = 0, o = t.split(";"); n < o.length; n++) {
			var i = o[n];
			if ("" !== i) {
				var r = i.split("=");
				if (2 === r.length) {
					var a = r[0],
						s = r[1];
					(e[a] = e[a] || []), e[a].push("" + s);
				}
			}
		}
		return e;
	}
	var __extends$21 = ((Ww = function(t, e) {
			return (Ww =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function(t, e) {
						t.__proto__ = e;
					}) ||
				function(t, e) {
					for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
				})(t, e);
		}),
		function(t, e) {
			function n() {
				this.constructor = t;
			}
			Ww(t, e),
				(t.prototype =
					null === e
						? Object.create(e)
						: ((n.prototype = e.prototype), new n()));
		}),
		Ww,
		RtaTargetingEvent = (function(o) {
			function i(t, e) {
				var n = o.call(this, i.NAME) || this;
				return (n.adserver = t), (n.targetingValues = e), n;
			}
			return (
				__extends$21(i, o),
				(i.prototype.eval = function(t) {
					if (void 0 !== this.adserver)
						switch (this.adserver.toLowerCase()) {
							case "dfp":
								this.setTargetingDFP(this.targetingValues);
								break;
							default:
								Log.Error("unknown adserver '" + this.adserver + "'");
						}
					else Log.Error("undefined adserver");
				}),
				(i.prototype.setTargetingDFP = function(t) {
					new DFPKeyValueTargeter().setKeyValuesForAllSlots(t);
				}),
				(i.NAME = "rtaTargetingEvent"),
				i
			);
		})(AbstractEvent),
		RtaUrlBuilder = (function() {
			function o() {}
			return (
				(o.prototype.buildUrl = function(t, e) {
					var n =
						("https:" === e.protocol ? "https:" : "http:") +
						o.RTA_URL +
						"?ptv=" +
						PublisherTagVersion;
					return (
						!0 === e.isAdBlocked && (n += "&abp=1"),
						(n += "&netid=" + String(t.networkId)),
						(n += e.ctoIdOnPublisherDomain
							? "&idcpy=" + e.ctoIdOnPublisherDomain
							: ""),
						(n += e.idfs ? "&idfs=" + e.idfs : ""),
						(n += e.secureId ? "&sid=" + e.secureId : ""),
						(n += e.isOptOut ? "&optout=1" : ""),
						(n += t.crtgRtaCookieName
							? "&cookieName=" + encodeURIComponent(t.crtgRtaCookieName)
							: ""),
						(n += t.crtgContentName
							? "&varName=" + encodeURIComponent(t.crtgContentName)
							: ""),
						(n += "&rnd=" + String(CacheBusterGenerator.generateCacheBuster())),
						(n += e.getContextFlags()),
						t.integrationMode !== IntegrationMode.Unspecified &&
							(n += "&im=" + t.integrationMode),
						n
					);
				}),
				(o.RTA_URL = "//rtax.criteo.com/delivery/rta/rta.js"),
				o
			);
		})();
	function CallRTA(t) {
		var e = new RtaInputParameters(t);
		if (void 0 !== e.networkId) {
			var n = e.crtgContentName ? e.crtgContentName : DefaultCrtgContentName,
				o = e.crtgRtaCookieName
					? e.crtgRtaCookieName
					: DefaultCrtgRtaCookieName;
			window[n] = CookieHelper.GetCookie(o) || "";
			var i = new RtaEvent(new RtaUrlBuilder(), e);
			window.criteo_pubtag.push(i);
		} else Log.Error("missing parameter 'networkid'");
	}
	function SetTargeting(t) {
		var e = new RtaInputParameters(t);
		if (void 0 !== e.adserver) {
			var n = [];
			if (void 0 !== e.crtgContentName) n.push(e.crtgContentName);
			else if (0 < window.criteo_pubtag.context.rtaVarNames.length)
				for (
					var o = 0, i = window.criteo_pubtag.context.rtaVarNames;
					o < i.length;
					o++
				) {
					var r = i[o];
					n.push(r);
				}
			else n.push(DefaultCrtgContentName);
			for (var a = 0, s = n; a < s.length; a++) {
				var d = s[a],
					c = ExtractKeyValuesFromRtaResponse(window[d]),
					l = new RtaTargetingEvent(e.adserver, c);
				window.criteo_pubtag.push(l),
					RemoveCrtgContentNameFromPublisherTagContext(d);
			}
		} else Log.Error("missing parameter 'adserver'");
	}
	function ComputeDFPTargetingForAMP(t, e) {
		var n = ExtractKeyValuesFromRtaResponse(CookieHelper.GetCookie(t));
		return RemoveCrtgContentNameFromPublisherTagContext(e), n;
	}
	function RemoveCrtgContentNameFromPublisherTagContext(t) {
		var e = window.criteo_pubtag.context.rtaVarNames.indexOf(t, 0);
		-1 < e && window.criteo_pubtag.context.rtaVarNames.splice(e, 1);
	}
	var passbackProfileId = 206;
	function SetupPassbackEventQueue() {
		window.Criteo.passbackEvents = createEventProcessor(
			window.Criteo.passbackEvents
		);
	}
	function RequestBidsPassback(t, e) {
		RequestBidsWithProfileId(t, passbackProfileId, SetupPassbackEventQueue, e);
	}
	function RenderAdPassback(t, e, n, o) {
		var i;
		"string" == typeof t
			? (i = t)
			: ((i = getParam(t, "adUnit", "string")),
			  (e = getParam(t, "passback", "function")),
			  (n = getParam(t, "customRenderFunction", "function")),
			  (o = getParam(t, "minimumBidPrice", "number"))),
			void 0 !== i
				? void 0 !== e
					? ("function" != typeof n &&
							(n = function(t) {
								RenderAd({ bidId: t.id, containerId: i });
							}),
					  (window.Criteo.passbackEvents = window.Criteo.passbackEvents || []),
					  window.Criteo.passbackEvents.push(function() {
							var t = GetBidsForAdUnit(i)[0];
							t && (void 0 === o || t.cpm > o) ? n(t) : e(i);
					  }))
					: Log.Error("A passback callback should be provided")
				: Log.Error("An adUnit string parameter should be provided");
	}
	function getParam(t, e, n) {
		return typeof t[e] === n ? t[e] : void 0;
	}
	window.criteo_pubtag ||
		(Polyfills.LoadPolyfills(), (window.criteo_pubtag = new PublisherTag())),
		(window.Criteo = {
			CallRTA: CallRTA,
			ComputeDFPTargetingForAMP: ComputeDFPTargetingForAMP,
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
		}),
		(window.Criteo.events = createEventProcessor(window.Criteo.events));
})();
