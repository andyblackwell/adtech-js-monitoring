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
		var o = document.createElement("img");
		(o.src = e),
			(o.height = 1),
			(o.width = 1),
			(o.style.display = "none"),
			(o.onload = t),
			(o.onerror = i);
	}),
	(a.allowedPixelUrl = "https://static.criteo.net/images/pixel.gif?ch=1"),
	(a.blockedPixelUrl = "https://static.criteo.net/images/pixel.gif?ch=2"),
	a);
	function a() {
		(this.allowedPixelLoaded = !1), (this.blockedPixelFailed = !1);
	}
	var AbstractEvent = ((h.prototype.eval = function(e) {}), h),
		LogLevel,
		k;
	function h(e) {
		this.name = e;
	}
	(k = LogLevel = LogLevel || {}),
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
		Log = ((l.Log = function(e, t) {
			if (!(l.LOGLEVEL < e)) {
				var i = LogLevel[e].toUpperCase(),
					o = window.navigator.userAgent,
					r = 0 < o.indexOf("MSIE ") || 0 < o.indexOf("Trident/");
				window.console &&
					(r
						? console.log("[PubTag] " + i + ": " + t)
						: console.log("%cPubTag", CSS_LOG, i + ": " + t));
			}
		}),
		(l.Debug = function(e) {
			l.Log(LogLevel.Debug, e);
		}),
		(l.Warning = function(e) {
			l.Log(LogLevel.Warning, e);
		}),
		(l.Error = function(e) {
			l.Log(LogLevel.Error, e);
		}),
		(l.LOGLEVEL = LogLevel.Error),
		l);
	function l() {}
	function SetLogLevel(e) {
		Log.LOGLEVEL = e;
	}
	var TimeMeasurer = ((v.CreateRunning = function() {
		var e = new v();
		return e.start(), e;
	}),
	(v.CreateWithStartTime = function(e) {
		var t = new v(!1);
		return (t.startTime = e), t;
	}),
	(v.TimeSincePageLoad = function() {
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
	(v.prototype.start = function() {
		this.startTime = this.now();
	}),
	(v.prototype.elapsed = function() {
		return this.now() - this.startTime;
	}),
	v);
	function v(e) {
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
		CCPAPrivacyProvider = ((D.prototype.getCMPFrame = function() {
			for (var e, t = this.currentWindow, i = 0; i < 10; ++i) {
				try {
					t.frames.__uspapiLocator && (e = t);
				} catch (e) {}
				if (t === this.currentWindow.top) break;
				t = t.parent;
			}
			return e;
		}),
		(D.prototype.hasCallerFunctionInWindow = function() {
			return "function" == typeof this.currentWindow.__uspapi;
		}),
		(D.prototype.readyToRetrieve = function() {
			return this.hasCallerFunctionInWindow() || void 0 !== this.getCMPFrame();
		}),
		(D.prototype.retrieveCCPAConsent = function(i, e) {
			void 0 === e && (e = parseInt("50", 10));
			var o = TimeMeasurer.CreateRunning(),
				r = !1,
				n = setTimeout(function() {
					(r = !0),
						Log.Warning(
							"Timeout: Unable to resolve CCPA consent after " + e + "ms"
						),
						i(void 0);
				}, e);
			this.executeCommand("getUSPData", USPAPI_VERSION, function(e, t) {
				r ||
					(clearTimeout(n),
					t
						? (Log.Debug("Consent retrieved in " + o.elapsed() + "ms"),
						  D.processResponseData(e, i))
						: (Log.Warning("Error retrieving CCPA consent data from CMP"),
						  i(void 0)));
			});
		}),
		(D.processResponseData = function(e, t) {
			e
				? t(e)
				: (Log.Warning("Unable to read CCPA consent data from CMP"), t(void 0));
		}),
		(D.prototype.executeCommand = function(e, t, i) {
			var n = this;
			if (!this.hasCallerFunctionInWindow()) {
				Log.Debug("No CMP defined on current frame");
				var a = this.getCMPFrame();
				(this.currentWindow.__uspapi = function(e, t, i) {
					if (!a)
						return (
							Log.Warning("CMP not found"), void i({ msg: "CMP not found" }, !1)
						);
					var o = Math.random().toString(10),
						r = { __uspapiCall: { command: e, parameter: t, callId: o } };
					(n.uspapiCallbacks[o] = i), a.postMessage(r, "*");
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
		(D.prototype.hasUserOptOut = function(e) {
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
		D);
	function D(e) {
		(this.uspapiCallbacks = {}), (this.currentWindow = e);
	}
	var CRITEO_VENDOR_ID = 91,
		GDPRPrivacyProvider = ((ea.prototype.getCMPFrame = function() {
			for (var e, t = this.currentWindow, i = 0; i < 10; ++i) {
				try {
					t.frames.__cmpLocator && (e = t);
				} catch (e) {}
				if (t === this.currentWindow.top) break;
				t = t.parent;
			}
			return e;
		}),
		(ea.prototype.hasCallerFunctionInFrame = function() {
			return "function" == typeof this.currentWindow.__cmp;
		}),
		(ea.prototype.readyToRetrieve = function() {
			return this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame();
		}),
		(ea.prototype.retrieveGDPRConsent = function(i, e) {
			void 0 === e && (e = parseInt("10000", 10));
			var o = TimeMeasurer.CreateRunning(),
				r = !1,
				n = setTimeout(function() {
					(r = !0),
						Log.Warning(
							"Timeout: Unable to resolve GDPR consent after " + e + "ms"
						),
						i(void 0);
				}, e);
			this.executeCommand("getConsentData", null, function(e, t) {
				r ||
					(clearTimeout(n),
					t
						? (Log.Debug("Consent retrieved in " + o.elapsed() + "ms"),
						  ea.processResponseData(e, i))
						: (Log.Warning("Error retrieving GDPR consent data from CMP"),
						  i(void 0)));
			});
		}),
		(ea.prototype.retrieveGDPRConsentForPassback = function(i, e) {
			void 0 === e && (e = parseInt("10000", 10));
			var o = TimeMeasurer.CreateRunning(),
				r = !1,
				n = setTimeout(function() {
					(r = !0),
						Log.Warning(
							"Timeout: Unable to resolve GDPR consent after " + e + "ms"
						),
						i(void 0);
				}, e);
			this.executeCommand("getVendorConsents", [CRITEO_VENDOR_ID], function(
				e,
				t
			) {
				r ||
					(clearTimeout(n),
					t
						? (Log.Debug(
								"Consent (getVendorConsents) retrieved in " + o.elapsed() + "ms"
						  ),
						  ea.processResponseData(e, i))
						: (Log.Warning("Error while calling getVendorConsents from CMP"),
						  i(void 0)));
			});
		}),
		(ea.processResponseData = function(e, t) {
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
		(ea.prototype.executeCommand = function(e, t, i) {
			var n = this;
			if (!this.hasCallerFunctionInFrame()) {
				Log.Debug("No CMP defined on current frame");
				var a = this.getCMPFrame();
				(this.currentWindow.__cmp = function(e, t, i) {
					if (!a)
						return (
							Log.Warning("CMP not found"), void i({ msg: "CMP not found" }, !1)
						);
					var o = Math.random().toString(10),
						r = { __cmpCall: { command: e, parameter: t, callId: o } };
					(n.cmpCallbacks[o] = i), a.postMessage(r, "*");
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
		ea);
	function ea(e) {
		(this.cmpCallbacks = {}), (this.currentWindow = e);
	}
	function tryGetLocalStorage(e) {
		try {
			return e.localStorage;
		} catch (e) {
			return;
		}
	}
	var LocalStorageHelper = ((Qa.prototype.checkLocalStorage = function() {
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
	(Qa.prototype.removeItem = function(e) {
		this.localStorage.removeItem(e),
			this.localStorage.removeItem(e + this.EXPIRE_SUFFIX);
	}),
	(Qa.prototype.getItem = function(e, t) {
		var i = new Date().getTime(),
			o = this.localStorage.getItem(e + this.EXPIRE_SUFFIX),
			r = o ? parseInt(o, 10) : -1;
		return (-1 !== r && r < i) || (t && (-1 === r || t < r - i))
			? (this.removeItem(e), null)
			: this.localStorage.getItem(e);
	}),
	(Qa.prototype.setItem = function(e, t, i) {
		if ((this.localStorage.setItem(e, t), i)) {
			var o = new Date().getTime() + i;
			this.localStorage.setItem(e + this.EXPIRE_SUFFIX, o.toString());
		}
	}),
	(Qa.prototype.getAllItemsByPrefix = function(e) {
		var t = [];
		for (var i in localStorage) 0 === i.indexOf(e) && t.push(i);
		return t;
	}),
	Qa);
	function Qa(e) {
		(this.EXPIRE_SUFFIX = "_expires"),
			(this.CHECK_STORAGE_KEY = "criteo_localstorage_check"),
			(this.localStorage = tryGetLocalStorage(e || window));
	}
	var DirectBiddingSilentModeManager = ((ib.prototype.silentModeEnabled = function() {
		var e = ib.SILENT_MODE_KEY;
		return (
			this.localStorageEnabled && null !== this.localStorageHelper.getItem(e)
		);
	}),
	(ib.prototype.enableSilentMode = function(e) {
		if (this.localStorageEnabled) {
			var t = ib.SILENT_MODE_KEY;
			this.localStorageHelper.setItem(t, "1", e);
		}
	}),
	(ib.SILENT_MODE_KEY = "criteo_silent_mode"),
	ib);
	function ib() {
		(this.localStorageHelper = new LocalStorageHelper()),
			(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage());
	}
	function now() {
		return new Date().getTime();
	}
	var Lock = ((nb.prototype.get = function(e) {
		var t = localStorage.getItem(e);
		if (t) {
			var i = t.split("|");
			if (!(i.length < 2 || parseInt(i[1], 10) < now())) return i[0];
		}
	}),
	(nb.prototype.set = function(e, t) {
		var i = now() + t;
		localStorage.setItem(e, this.id + "|" + i);
	}),
	(nb.prototype.acquire = function(e, t, i) {
		var o = this;
		void 0 === i && (i = 100),
			i <= 0 || this.tryAcquire(t)
				? (e(), this.release())
				: setTimeout(function() {
						o.acquire(e, t, i - 10);
				  }, 10);
	}),
	(nb.prototype.tryAcquire = function(e) {
		localStorage.setItem(this.x, this.id);
		var t = this.get(this.y);
		return !(
			(t && t !== this.id) ||
			(this.set(this.y, e),
			localStorage.getItem(this.x) !== this.id || this.get(this.y) !== this.id)
		);
	}),
	(nb.prototype.release = function() {
		localStorage.removeItem(this.x), localStorage.removeItem(this.y);
	}),
	nb);
	function nb(e) {
		(this.x = e + "_lock_A"),
			(this.y = e + "_lock_B"),
			(this.id = Math.floor(1e9 * Math.random()).toString());
	}
	var Size = ((Cb.prototype.toString = function() {
		return this.width + "x" + this.height;
	}),
	Cb);
	function Cb(e, t) {
		(this.width = e), (this.height = t);
	}
	var SlotKey = ((Fb.prototype.toString = function() {
		return "ImpId" + this.impressionId;
	}),
	Fb);
	function Fb(e) {
		this.impressionId = e;
	}
	var __extends = ((Hb = function(e, t) {
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
		SlotKeyWithSize = ((Sb = SlotKey),
		__extends(Tb, Sb),
		(Tb.prototype.toString = function() {
			return (
				Sb.prototype.toString.call(this) +
				"_Size" +
				this.size +
				"_NetworkId" +
				this.networkId
			);
		}),
		Tb),
		Sb;
	function Tb(e, t, i) {
		var o = Sb.call(this, e) || this;
		return (o.size = t), (o.networkId = i), o;
	}
	var __extends$1 = ((Yb = function(e, t) {
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
		SlotKeyWithZoneId = ((hc = SlotKey),
		__extends$1(ic, hc),
		(ic.prototype.toString = function() {
			return hc.prototype.toString.call(this) + "_ZoneId" + this.zoneId;
		}),
		ic),
		hc;
	function ic(e, t) {
		var i = hc.call(this, e) || this;
		return (i.zoneId = t), i;
	}
	var SlotKeyFactory = ((mc.prototype.createKeysFromSlotRequest = function(e) {
		if (this.useZoneIdIntegration)
			return [new SlotKeyWithZoneId(e.impId, e.zoneId)];
		for (var t = [], i = 0, o = e.sizes; i < o.length; i++) {
			var r = o[i];
			t.push(new SlotKeyWithSize(e.impId, r, this.networkId));
		}
		return t;
	}),
	(mc.prototype.createKeyFromSlotResponse = function(e) {
		return this.useZoneIdIntegration
			? new SlotKeyWithZoneId(e.impid, e.zoneid)
			: new SlotKeyWithSize(
					e.impid,
					new Size(e.width, e.height),
					this.networkId
			  );
	}),
	(mc.prototype.createKeyFromBid = function(e) {
		return this.useZoneIdIntegration
			? new SlotKeyWithZoneId(e.impressionId, e.zoneId)
			: new SlotKeyWithSize(
					e.impressionId,
					new Size(e.width, e.height),
					this.networkId
			  );
	}),
	mc);
	function mc(e, t) {
		(this.useZoneIdIntegration = e), (this.networkId = t);
	}
	var DirectBiddingBidManager = ((wc.useZoneIdIntegration = function(e, t) {
		return (
			void 0 === t ||
			0 ===
				e.filter(function(e) {
					return void 0 !== e.sizes && 0 < e.sizes.length;
				}).length
		);
	}),
	(wc.prototype.get = function(e) {
		var t = this.localStorageHelper.getItem(e),
			i = t && tryParseJson(t);
		return i && "object" == typeof i && "bids" in i
			? ((i.bids = i.bids.filter(function(e) {
					return e.expiration > now();
			  })),
			  i)
			: { bids: [] };
	}),
	(wc.prototype.getBySlotKey = function(e) {
		return this.get(wc.BID_KEY_PREFIX + e.toString());
	}),
	(wc.prototype.set = function(e, t) {
		0 < t.bids.length || (t.no_bid && t.no_bid > now())
			? this.localStorageHelper.setItem(e, JSON.stringify(t))
			: this.localStorageHelper.removeItem(e);
	}),
	(wc.prototype.setBySlotKey = function(e, t) {
		this.set(wc.BID_KEY_PREFIX + e.toString(), t);
	}),
	(wc.prototype.filterNoBidSlots = function(e) {
		for (var t = [], i = 0, o = e; i < o.length; i++) {
			for (
				var r = o[i],
					n = [],
					a = 0,
					s = this.slotKeyFactory.createKeysFromSlotRequest(r);
				a < s.length;
				a++
			) {
				var d = s[a];
				this.getBid(d, 0) !== wc.NO_BID &&
					(d instanceof SlotKeyWithSize ? n.push(d.size) : t.push(r));
			}
			0 < n.length && ((r.sizes = n), t.push(r));
		}
		return t;
	}),
	(wc.prototype.getRequestCachedBids = function(e, t) {
		void 0 === t && (t = 5e3);
		for (var i = [], o = 0, r = e; o < r.length; o++)
			for (
				var n = r[o],
					a = 0,
					s = this.slotKeyFactory.createKeysFromSlotRequest(n);
				a < s.length;
				a++
			) {
				var d = s[a],
					c = this.getBid(d, t);
				void 0 !== c && c !== wc.NO_BID && i.push(c);
			}
		return i;
	}),
	(wc.prototype.getBid = function(e, t) {
		if ((void 0 === t && (t = 5e3), this.localStorageEnabled)) {
			var i = this.getBySlotKey(e);
			if (i.no_bid && i.no_bid > now()) return wc.NO_BID;
			if (0 < t)
				for (var o = 0, r = i.bids; o < r.length; o++) {
					var n = r[o];
					if (new Lock(wc.BID_KEY_PREFIX + n.bid.slotid).tryAcquire(t))
						return n.bid;
				}
		}
	}),
	(wc.prototype.storeRequestNoBid = function(e, t) {
		for (
			var i = 0, o = this.slotKeyFactory.createKeysFromSlotRequest(e);
			i < o.length;
			i++
		) {
			var r = o[i];
			this.storeNoBid(r, t);
		}
	}),
	(wc.prototype.storeResponseBid = function(t, i) {
		var e = this.slotKeyFactory.createKeyFromSlotResponse(t);
		this.modifyCache(e, function(e) {
			e.bids.push({ bid: t, expiration: now() + 1e3 * i });
		});
	}),
	(wc.prototype.storeNoBid = function(e, t) {
		this.modifyCache(e, function(e) {
			e.no_bid = Math.max(e.no_bid || 0, now() + 1e3 * t);
		});
	}),
	(wc.prototype.removeBid = function(i) {
		var e = this.slotKeyFactory.createKeyFromBid(i);
		this.modifyCache(e, function(e) {
			for (var t = 0; t < e.bids.length; t++)
				if (e.bids[t].bid.slotid === i.slotId) return void e.bids.splice(t, 1);
		}),
			new Lock(e.toString()).release();
	}),
	(wc.prototype.modifyCache = function(t, i) {
		var o = this;
		if (this.localStorageEnabled) {
			var r = new Lock(t.toString());
			r.acquire(function() {
				var e = o.getBySlotKey(t);
				i(e), o.setBySlotKey(t, e), r.release();
			}, 1e3);
		}
	}),
	(wc.prototype.clearExpiredItems = function() {
		for (
			var e = 0,
				t = this.localStorageHelper.getAllItemsByPrefix(wc.BID_KEY_PREFIX);
			e < t.length;
			e++
		) {
			var i = t[e],
				o = this.get(i);
			o && this.set(i, o);
		}
	}),
	(wc.NO_BID = "nobid"),
	(wc.BID_KEY_PREFIX = "criteo_pt_cdb_bidcache_"),
	wc);
	function wc(e, t) {
		(this.localStorageHelper = new LocalStorageHelper()),
			(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage()),
			(this.slotKeyFactory = new SlotKeyFactory(e, t));
	}
	var DirectBiddingCache = ((Ld.prototype.filterNoBidSlots = function(e) {
		var t = this.bidManager.filterNoBidSlots(e);
		return this.context.shouldIgnoreSilentMode
			? (t.length !== e.length &&
					this.context.setSilentModeIgnored &&
					this.context.setSilentModeIgnored(),
			  e)
			: t;
	}),
	(Ld.prototype.silentModeEnabled = function() {
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
	(Ld.prototype.getCachedBids = function(e) {
		return this.bidManager.getRequestCachedBids(e);
	}),
	(Ld.prototype.removeBid = function(e) {
		this.bidManager.removeBid(e);
	}),
	(Ld.prototype.handleResponse = function(e, t, i, o) {
		var r = i.time_to_next_call;
		0 < r &&
			(Log.Debug("Global silent mode enabled for " + r + " seconds"),
			this.silentModeManager.enableSilentMode(1e3 * r));
		var n = {};
		if (i.slots)
			for (var a = 0, s = i.slots; a < s.length; a++)
				(f = s[a]).ttl && (n[f.imp_id] = f.ttl);
		if (t.slots)
			for (var d = 0, c = t.slots; d < c.length; d++) {
				var l = 0;
				(f = c[d]).slotid in n && ((l = n[f.slotid]), delete n[f.slotid]),
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
		for (var u in n)
			if (n.hasOwnProperty(u))
				for (var p = 0, h = e; p < h.length; p++) {
					var f;
					(f = h[p]).slotId === u &&
						((l = n[u]),
						Log.Debug(
							"Silent mode for slot '" +
								f.impId +
								"' enabled for " +
								l +
								" seconds"
						),
						this.bidManager.storeRequestNoBid(f, l));
				}
	}),
	(Ld.prototype.clearExpiredItems = function() {
		var e = this;
		setTimeout(function() {
			e.bidManager.clearExpiredItems();
		}, 3e3);
	}),
	Ld);
	function Ld(e, t, i) {
		var o = DirectBiddingBidManager.useZoneIdIntegration(t, i);
		(this.bidManager = new DirectBiddingBidManager(o, i)),
			(this.silentModeManager = new DirectBiddingSilentModeManager()),
			(this.context = e);
	}
	var AsyncRequest = ((je.prototype.send = function(e, t, i, o) {
		var r = void 0 !== this.data ? "POST" : "GET",
			n = this.getXMLHttpRequest(r, e, t, i, o);
		if (void 0 !== n) n.send(this.data);
		else {
			var a = this.getXDomainRequest(r, e, t, i, o);
			void 0 !== a && a.send(this.data);
		}
	}),
	(je.prototype.getXMLHttpRequest = function(e, t, i, o, r) {
		var n = new XMLHttpRequest();
		if ("withCredentials" in n)
			return (
				n.open(e, this.url, !0),
				(n.timeout = r || je.LOCAL_PASSBACK_TIMEOUT),
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
				o && (n.ontimeout = o),
				n
			);
	}),
	(je.prototype.getXDomainRequest = function(e, t, i, o, r) {
		if ("undefined" != typeof XDomainRequest) {
			var n = new XDomainRequest();
			return (
				(n.timeout = r || je.LOCAL_PASSBACK_TIMEOUT),
				n.open(e, this.url),
				(n.onload = function() {
					void 0 !== n.responseText ? t(n.responseText) : i(void 0, void 0);
				}),
				n.onerror &&
					(n.onerror = function() {
						i(void 0, void 0);
					}),
				n.ontimeout && o && (n.ontimeout = o),
				n
			);
		}
	}),
	(je.LOCAL_PASSBACK_TIMEOUT = 3e4),
	je);
	function je(e, t, i, o) {
		void 0 === o && (o = !0),
			(this.url = e),
			(this.data = t),
			(this.contentType = i),
			(this.withCredentials = o);
	}
	function resolvePrebidTimeout(e) {
		var t =
			"number" == typeof window.PREBID_TIMEOUT ? window.PREBID_TIMEOUT : void 0;
		return e && t ? Math.min(e, t) : e || t || void 0;
	}
	var PublisherTagVersion = 83,
		DirectBiddingMetric = function(
			e,
			t,
			i,
			o,
			r,
			n,
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
				(this.pageLoadElapsed = r),
				(this.adapterStartElapsed = n),
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
		DirectBiddingMetricSlot = function(e, t, i, o, r) {
			(this.impressionId = e),
				(this.zoneId = t),
				(this.adUnitId = i),
				(this.cachedBidUsed = o),
				(this.isDsc = r);
		},
		DirectBiddingMetricBuilder = ((df.prototype.withElapsed = function(e) {
			return (this.elapsed = Math.round(e)), this;
		}),
		(df.prototype.withIsTimeout = function(e) {
			return (this.isTimeout = e), this;
		}),
		(df.prototype.withPageLoadElapsed = function(e) {
			return (this.pageLoadElapsed = Math.round(e)), this;
		}),
		(df.prototype.withAdapterStartElapsed = function(e) {
			return (this.adapterStartElapsed = Math.round(e)), this;
		}),
		(df.prototype.withCdbCallStartElapsed = function(e) {
			return (this.cdbCallStartElapsed = Math.round(e)), this;
		}),
		(df.prototype.withCdbCallEndElapsed = function(e) {
			return (this.cdbCallEndElapsed = Math.round(e)), this;
		}),
		(df.prototype.withSetTargetingElapsed = function(e) {
			return (this.setTargetingElapsed = Math.round(e)), this;
		}),
		(df.prototype.withAdapterEndElapsed = function(e) {
			return (this.adapterEndElapsed = Math.round(e)), this;
		}),
		(df.prototype.withAdapterTimeout = function(e) {
			return (this.adapterTimeout = e && Math.round(e)), this;
		}),
		(df.prototype.withCachedBidsReturned = function(e) {
			return (this.cachedBidsReturned = e), this;
		}),
		(df.prototype.withTimeToFirstByte = function(e) {
			return (this.timeToFirstByte = e && Math.round(e)), this;
		}),
		(df.prototype.withRequestGroupId = function(e) {
			return (this.requestGroupId = e), this;
		}),
		(df.prototype.withSid = function(e) {
			return (this.sid = e), this;
		}),
		(df.prototype.addSlot = function(e, t, i, o) {
			var r =
				0 <
				this.cachedBidsReturned.filter(function(e) {
					return e.impid === i && e.zoneid === t;
				}).length;
			return this.slots.push(new DirectBiddingMetricSlot(e, t, i, r, o)), this;
		}),
		(df.prototype.build = function() {
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
		df);
	function df() {
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
	var DirectBiddingMetricRequestBuilder = ((zf.prototype.getRequest = function() {
		return { feedbacks: this.feedbacks };
	}),
	(zf.prototype.getUrl = function() {
		return this.urlBuilder.buildCsmUrl(
			this.profileId,
			this.adapterVersion,
			this.wrapperVersion
		);
	}),
	zf);
	function zf(e, t, i, o, r) {
		(this.urlBuilder = e),
			(this.profileId = t),
			(this.adapterVersion = o),
			(this.wrapperVersion = r),
			(this.feedbacks = i);
	}
	var CacheBusterGenerator = ((Gf.generateCacheBuster = function() {
			return Math.floor(99999999999 * Math.random());
		}),
		Gf),
		IntegrationMode,
		Hf;
	function Gf() {}
	function parse(e) {
		switch (e.toLowerCase()) {
			case "amp":
				return IntegrationMode.AMP;
			default:
				return IntegrationMode.Unspecified;
		}
	}
	(Hf = IntegrationMode = IntegrationMode || {}),
		(Hf[(Hf.Unspecified = 0)] = "Unspecified"),
		(Hf[(Hf.AMP = 1)] = "AMP");
	var DirectBiddingUrlBuilder = ((Jf.prototype.buildUrl = function(
		e,
		t,
		i,
		o,
		r
	) {
		void 0 === i && (i = IntegrationMode.Unspecified);
		var n = Jf.CRITEO_BIDDER_URL + this.getHandlerPath();
		return (
			(n += "?ptv=" + PublisherTagVersion),
			!0 === t.isAdBlocked && (n += "&abp=1"),
			(n = this.appendCommonParameters(n, e, o, r)),
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
	(Jf.prototype.buildCsmUrl = function(e, t, i) {
		var o = Jf.CRITEO_BIDDER_URL + Jf.CRITEO_CSM_HANDLER;
		return (
			(o += "?ptv=" + PublisherTagVersion),
			this.appendCommonParameters(o, e, t, i)
		);
	}),
	(Jf.prototype.appendCommonParameters = function(e, t, i, o) {
		return (
			(e += "&profileId=" + String(t)),
			void 0 !== i && (e += "&av=" + String(i)),
			void 0 !== o && (e += "&wv=" + encodeURIComponent(o)),
			e
		);
	}),
	(Jf.prototype.getHandlerPath = function() {
		return this.auditMode
			? Jf.CRITEO_BIDDER_AUDIT_HANDLER
			: Jf.CRITEO_BIDDER_HANDLER;
	}),
	(Jf.CRITEO_BIDDER_URL = "https://bidder.criteo.com/"),
	(Jf.CRITEO_BIDDER_HANDLER = "cdb"),
	(Jf.CRITEO_CSM_HANDLER = "csm"),
	(Jf.CRITEO_BIDDER_AUDIT_HANDLER = "prebid/audit"),
	Jf);
	function Jf(e) {
		void 0 === e && (e = !1), (this.auditMode = e);
	}
	var DirectBiddingMetricsManager = ((Zf.prototype.getMetrics = function(e) {
		if (this.localStorageEnabled) {
			var t = Zf.METRICS_STORAGE_KEY,
				i = this.localStorageHelper.getItem(t),
				o = i ? tryParseJson(i) : [];
			return e && this.localStorageHelper.removeItem(t), o;
		}
		return [];
	}),
	(Zf.prototype.setMetrics = function(e) {
		if (this.localStorageEnabled) {
			var t = Zf.METRICS_STORAGE_KEY;
			this.localStorageHelper.setItem(t, JSON.stringify(e), 36e5);
		}
	}),
	(Zf.prototype.storeMetric = function(e) {
		var t = this;
		if (this.localStorageEnabled) {
			var i = this.getMetrics(!1);
			i.push(e), this.setMetrics(i);
			var o = ((e && e.adapterTimeout) || 2e3) + 1e3;
			setTimeout(function() {
				t.sendMetrics();
			}, o);
		}
	}),
	(Zf.prototype.sendMetrics = function() {
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
				o = JSON.stringify(t.getRequest());
			navigator.sendBeacon && navigator.sendBeacon(i, o);
		}
	}),
	(Zf.METRICS_STORAGE_KEY = "criteo_pt_cdb_metrics"),
	Zf);
	function Zf(e, t, i, o) {
		(this.profileId = e),
			(this.adapterVersion = t),
			(this.wrapperVersion = i),
			(this.localStorageHelper = o || new LocalStorageHelper()),
			(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage());
	}
	var DirectBiddingRequestBuilder = ((qg.prototype.isValid = function() {
		return 0 < this.slots.length;
	}),
	(qg.prototype.getRequest = function() {
		for (var e = [], t = 0, i = this.slots; t < i.length; t++) {
			var o = i[t],
				r = { slotid: o.slotId, impid: o.impId };
			if (
				(void 0 !== o.zoneId && (r.zoneid = o.zoneId),
				void 0 !== o.nativeCallback && (r.native = !0),
				void 0 !== o.transactionId && (r.transactionid = o.transactionId),
				void 0 !== o.publisherSubId && (r.publishersubid = o.publisherSubId),
				void 0 !== o.sizes)
			) {
				for (var n = [], a = 0, s = o.sizes; a < s.length; a++) {
					var d = s[a];
					n.push(d.width + "x" + d.height);
				}
				r.sizes = n;
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
				r.video = c;
			}
			if (void 0 !== this.viewportComputer) {
				var l = this.viewportComputer.getSlotPosition(o);
				void 0 !== l && (r.position = { top: l.top, left: l.left });
			}
			e.push(r);
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
	(qg.parsePlayerSize = function(e) {
		return e[0] + "x" + e[1];
	}),
	(qg.prototype.parsePlayerSizes = function(e) {
		return Array.isArray(e[0])
			? e.map(function(e) {
					return qg.parsePlayerSize(e);
			  })
			: [qg.parsePlayerSize(e)];
	}),
	(qg.prototype.getUrl = function() {
		return this.urlBuilder.buildUrl(
			this.profileId,
			this.context,
			this.integrationMode,
			this.adapterVersion,
			this.wrapperVersion
		);
	}),
	qg);
	function qg(e, t, i, o, r, n, a, s, d, c, l) {
		(this.slots = e),
			(this.context = t),
			(this.metricsManager = i),
			(this.urlBuilder = o),
			(this.profileId = r),
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
	var DirectBiddingTimer = ((bh.prototype.sendRequest = function(e) {
		(this.url = e),
			(this.sendTime = TimeMeasurer.CreateRunning()),
			this.builder.withCdbCallStartElapsed(this.timer.elapsed());
	}),
	(bh.prototype.requestReceived = function(e) {
		void 0 === e && (e = !1),
			this.builder.withElapsed(
				getPreciseRequestDuration(this.url) || this.sendTime.elapsed()
			),
			this.builder.withCdbCallEndElapsed(this.timer.elapsed()),
			this.builder.withIsTimeout(e);
	}),
	(bh.prototype.setTargeting = function() {
		this.hasSetTargetingBeenCalled ||
			(this.builder.withSetTargetingElapsed(this.timer.elapsed()),
			(this.hasSetTargetingBeenCalled = !0));
	}),
	(bh.prototype.finish = function(e, t) {
		if (
			(this.builder.withAdapterEndElapsed(this.timer.elapsed()),
			this.builder.withSid(e),
			this.builder.withRequestGroupId(generateUuid()),
			t && 0 !== t.length)
		)
			for (var i = 0, o = t; i < o.length; i++) {
				var r = o[i];
				this.builder.addSlot(r.imp_id, r.zone_id, r.ad_unit_id, r.is_dsc);
			}
		else this.builder.addSlot("");
		return (
			this.builder.withTimeToFirstByte(bh.computeTimeToFirstByte()),
			this.build()
		);
	}),
	(bh.computeTimeToFirstByte = function() {
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
				if (void 0 !== t && 0 < t.length) {
					var i = t[t.length - 1],
						o = i.responseStart,
						r = i.requestStart;
					if (void 0 !== o && void 0 !== r) return o - r;
				}
			}
		}
	}),
	(bh.prototype.build = function() {
		return this.builder.build();
	}),
	bh);
	function bh(e, t, i) {
		(this.hasSetTargetingBeenCalled = !1),
			(this.builder = e),
			(this.timer =
				void 0 !== t
					? TimeMeasurer.CreateWithStartTime(t)
					: TimeMeasurer.CreateRunning());
		var o = this.timer.elapsed();
		this.builder.withAdapterStartElapsed(o),
			this.builder.withPageLoadElapsed(TimeMeasurer.TimeSincePageLoad() - o),
			void 0 !== i && this.builder.withAdapterTimeout(i);
	}
	var __extends$2 = ((th = function(e, t) {
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
		DirectBiddingEvent = ((Eh = AbstractEvent),
		__extends$2(Fh, Eh),
		(Fh.prototype.setGDPRConsent = function(e) {
			this.gdprConsent = e;
		}),
		(Fh.prototype.setCCPAIabConsent = function(e) {
			this.ccpaIabConsent = e;
		}),
		(Fh.prototype.getMetricBuilder = function() {
			return this.metricBuilder;
		}),
		(Fh.prototype.eval = function(e) {
			this.evalWithTimeout(e, void 0);
		}),
		(Fh.prototype.evalWithTimeout = function(e, t) {
			var o = this,
				i = Fh.getCriteoAdapterBidRequest(),
				r = Fh.getRequestAuctionStart(i),
				n = t || resolvePrebidTimeout(i && i.timeout),
				a = new DirectBiddingTimer(this.metricBuilder, r, n),
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
								void 0 !== o.callbackSuccess &&
									o.callbackSuccess(JSON.stringify(t), i),
									o.metricsManager.storeMetric(a.finish(t.sid, i.slots));
							} catch (e) {
								Log.Error("Error onSuccess: " + e.toString());
							}
						},
						function(e, t) {
							try {
								a.requestReceived(),
									void 0 !== o.callbackError && o.callbackError(e, t),
									o.metricsManager.storeMetric(a.finish());
							} catch (e) {
								Log.Error("Error onError: " + e.toString());
							}
						},
						function() {
							try {
								a.requestReceived(!0),
									void 0 !== o.callbackTimeout && o.callbackTimeout(),
									o.metricsManager.storeMetric(a.finish());
							} catch (e) {
								Log.Error("Error onTimeout: " + e.toString());
							}
						},
						this.timeout
					);
			} else this.callbackError(void 0, void 0);
		}),
		(Fh.getCriteoAdapterBidRequest = function() {
			try {
				return window.pbjs._bidsRequested.find(function(e) {
					return "criteo" === e.bidderCode;
				});
			} catch (e) {
				return;
			}
		}),
		(Fh.getRequestAuctionStart = function(e) {
			return e && e.auctionStart;
		}),
		(Fh.NAME = "directbidding"),
		Fh),
		Eh;
	function Fh(e, t, i, o, r, n, a, s, d, c, l, u) {
		var p = Eh.call(this, Fh.NAME) || this;
		return (
			(p.profileId = e),
			(p.urlBuilder = t),
			(p.slots = i),
			(p.metricBuilder = new DirectBiddingMetricBuilder()),
			(p.metricsManager = u || new DirectBiddingMetricsManager(e)),
			(p.callbackSuccess = o),
			(p.callbackError = r),
			(p.callbackTimeout = n),
			(p.timeout = a),
			(p.networkId = s),
			(p.integrationMode = d),
			(p.adapterVersion = c),
			(p.viewportComputer = l),
			p
		);
	}
	var __extends$3 = ((ri = function(e, t) {
			return (ri =
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
			ri(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		ri,
		DirectBiddingEventWithCaching = ((Ci = AbstractEvent),
		__extends$3(Di, Ci),
		(Di.prototype.eval = function(t) {
			var i = this,
				e = this.gdprPrivacyProvider.readyToRetrieve(),
				o = this.ccpaPrivacyProvider.readyToRetrieve();
			if (e || o) {
				var r,
					n,
					a = [],
					s = 0;
				e &&
					(a.push(GDPRPrivacyProvider),
					(s = Math.max(s, parseInt("10000", 10)))),
					o &&
						(a.push(CCPAPrivacyProvider),
						(s = Math.max(s, parseInt("50", 10)))),
					e &&
						this.gdprPrivacyProvider.retrieveGDPRConsent(function(e) {
							a.splice(a.indexOf("GDPR"), 1),
								0 === a.length ? i.evalWithCmp(t, e, n) : (r = e);
						}, s),
					o &&
						this.ccpaPrivacyProvider.retrieveCCPAConsent(function(e) {
							a.splice(a.indexOf("CCPA"), 1),
								0 === a.length ? i.evalWithCmp(t, r, e) : (n = e);
						}, s);
			} else this.evalWithCmp(t, void 0, void 0);
		}),
		(Di.prototype.evalWithCmp = function(e, t, i) {
			var o = this;
			if (this.cache.silentModeEnabled())
				return (
					Log.Debug(
						"Request ignored because the global silent mode is enabled"
					),
					void this.callbackSuccess("", void 0)
				);
			setTimeout(function() {
				return o.onTimeout();
			}, this.timeout || 3e3),
				this.directBiddingEvent.setGDPRConsent(t),
				this.directBiddingEvent.setCCPAIabConsent(i),
				this.directBiddingEvent.evalWithTimeout(e, this.timeout);
		}),
		(Di.prototype.onSuccess = function(e, t) {
			if (((this.hasResponded = !0), void 0 !== t)) {
				var i = tryParseJson(e);
				this.cache.handleResponse(this.slots, i, t, this.hasTimeouted);
			}
			this.hasTimeouted || this.callbackSuccess(e, t),
				this.cache.clearExpiredItems();
		}),
		(Di.prototype.onError = function(e, t) {
			(this.hasResponded = !0),
				this.hasTimeouted || this.callbackError(e, t),
				this.cache.clearExpiredItems();
		}),
		(Di.prototype.onHttpTimeout = function() {
			(this.hasResponded = !0),
				this.hasTimeouted || this.callbackTimeout(),
				this.cache.clearExpiredItems();
		}),
		(Di.prototype.onTimeout = function() {
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
		(Di.prototype.getMetricBuilder = function() {
			return this.directBiddingEvent.getMetricBuilder();
		}),
		(Di.prototype.getBidCache = function() {
			return this.cache;
		}),
		(Di.NAME = "directbidding"),
		Di),
		Ci;
	function Di(e, t, i, o, r, n, a, s, d, c, l, u, p, h) {
		var f = Ci.call(this, Di.NAME) || this,
			g = Math.max(10 * (a || 3e3), 3e3);
		return (
			(f.cache = new DirectBiddingCache(window.criteo_pubtag.context, i, s)),
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
			(f.callbackSuccess = o),
			(f.callbackError = r),
			(f.callbackTimeout = n),
			(f.timeout = a),
			(f.hasTimeouted = !1),
			(f.hasResponded = !1),
			(f.gdprPrivacyProvider = p || new GDPRPrivacyProvider(window)),
			(f.ccpaPrivacyProvider = h || new CCPAPrivacyProvider(window)),
			f
		);
	}
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
				r = 0,
				n = e;
			r < n.length;
			r++
		) {
			for (
				var a = n[r],
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
					for (var r in (t = arguments[i]))
						Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
				return e;
			}).apply(this, arguments);
	};
	function createEmptyDFPTargeting() {
		return createDFPTargeting(null, null);
	}
	function createDFPTargeting(e, t, i) {
		var o = { crt_pb: [e], crt_bidid: [t] };
		return (
			void 0 !== i && (o = __assign(__assign({}, o), { crt_deal: [i] })), o
		);
	}
	var DFPKeyValueTargeter = ((Pj.prototype.setKeyValuesForAllSlots = function(
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
	(Pj.prototype.setKeyValuePerSlot = function(t, i) {
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
	(Pj.prototype.resetKeyValuesForSlots = function(t) {
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
	Pj);
	function Pj() {
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
	var BidEventTarget = function() {},
		__extends$4 = ((ik = function(e, t) {
			return (ik =
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
			ik(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		ik,
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
		__extends$5 = ((Ak = function(e, t) {
			return (Ak =
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
			Ak(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Ak,
		BidEventDocumentTarget = ((Lk = BidEventTarget),
		__extends$5(Mk, Lk),
		(Mk.prototype.ResizeFrame = function(e, t) {
			if (this.document.defaultView && this.document.defaultView.frameElement) {
				var i = this.document.defaultView.frameElement;
				(i.width = e.toString()), (i.height = t.toString());
			}
		}),
		(Mk.prototype.Write = function(e) {
			this.document.open(), this.document.write(e), this.document.close();
		}),
		(Mk.prototype.LoadScript = function(e) {
			this.Write("<script type='text/javascript' src='" + e + "'></script>");
		}),
		Mk),
		Lk;
	function Mk(e) {
		var t = Lk.call(this) || this;
		return (t.document = e), t;
	}
	var __extends$6 = ((Uk = function(e, t) {
			return (Uk =
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
			Uk(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Uk,
		Custom = ((dl = AbstractEvent),
		__extends$6(el, dl),
		(el.prototype.eval = function(e) {
			this.callback && this.callback.apply(this);
		}),
		(el.NAME = "genericEvent"),
		el),
		dl;
	function el(e) {
		var t = dl.call(this, el.NAME) || this;
		return (t.callback = e), t;
	}
	var BidResponseSlot = ((il.prototype.generateRandomId = function() {
		return Math.random()
			.toString(36)
			.replace(/[^a-z]+/g, "")
			.substr(0, 6);
	}),
	il);
	function il(e, t, i, o, r, n, a) {
		(this.id = this.generateRandomId()),
			(this.slotId = e),
			(this.impressionId = t),
			(this.cpm = i),
			(this.width = o),
			(this.height = r),
			(this.zoneId = n),
			(this.dealCode = a);
	}
	var __extends$7 = ((ql = function(e, t) {
			return (ql =
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
			ql(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		ql,
		DisplayUrlBidResponseSlot = ((Bl = BidResponseSlot),
		__extends$7(Cl, Bl),
		(Cl.prototype.GenerateEvent = function(e) {
			var t = this;
			return (
				e.ResizeFrame(this.width, this.height),
				new Custom(function() {
					return e.LoadScript(t.displayUrl);
				})
			);
		}),
		(Cl.prototype.GenerateMessage = function() {
			return { displayUrl: this.displayUrl };
		}),
		Cl),
		Bl;
	function Cl(e, t, i, o, r, n, a, s) {
		var d = Bl.call(this, e, t, i, o, r, n, s) || this;
		return (d.displayUrl = a), d;
	}
	var __extends$8 = ((Ol = function(e, t) {
			return (Ol =
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
			Ol(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Ol,
		HtmlCreativeBidResponseSlot = ((Zl = BidResponseSlot),
		__extends$8($l, Zl),
		($l.prototype.GenerateEvent = function(e) {
			var t = this;
			return (
				e.ResizeFrame(this.width, this.height),
				new Custom(function() {
					return e.Write(t.creative);
				})
			);
		}),
		($l.prototype.GenerateMessage = function() {
			return { creative: this.creative };
		}),
		$l),
		Zl;
	function $l(e, t, i, o, r, n, a, s) {
		var d = Zl.call(this, e, t, i, o, r, n, s) || this;
		return (d.creative = a), d;
	}
	var LineItemRange = ((km.createLineItemRangesFromString = function(e) {
		for (var t = [], i = 0, o = e.split(";"); i < o.length; i++) {
			var r = o[i],
				n = r.split(".."),
				a = km.roundToDecimal(n[0], 2),
				s = n[1].split(":"),
				d = km.roundToDecimal(s[0], 2),
				c = km.roundToDecimal(s[1], 2);
			if (isNaN(a) || isNaN(d) || isNaN(c) || 0 === c) {
				Log.Warning("Could not parse range parameter: " + r);
				break;
			}
			if (a < 0 || d < 0 || c < 0) {
				Log.Warning("Positive values must be set for range bounds: " + r);
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
					? t.push(new km(a, d, c))
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
	(km.getDefaultDenseLineItemRanges = function() {
		return [new km(0, 3, 0.01), new km(3, 8, 0.05), new km(8, 20, 0.5)];
	}),
	(km.computeLineItemPricebandValue = function(e, t) {
		0 === t.length && (t = km.getDefaultDenseLineItemRanges());
		for (var i = 0, o = t; i < o.length; i++) {
			var r = o[i];
			if (e <= r.upperBound && e > r.lowerBound) {
				var n = Math.floor(e / r.increment + 1e-4) * r.increment;
				return km.formatPriceBand(n);
			}
		}
		return e < t[0].lowerBound
			? void 0
			: e === t[0].lowerBound
				? km.formatPriceBand(t[0].lowerBound)
				: km.formatPriceBand(t[t.length - 1].upperBound);
	}),
	(km.formatPriceBand = function(e) {
		return e.toFixed(2);
	}),
	(km.roundToDecimal = function(e, t) {
		var i = parseFloat(e),
			o = Math.pow(10, t);
		return Math.round(i * o) / o;
	}),
	km);
	function km(e, t, i) {
		(this.lowerBound = e), (this.upperBound = t), (this.increment = i);
	}
	var __extends$9 = ((Sm = function(e, t) {
			return (Sm =
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
			Sm(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Sm,
		NativeBidResponseSlot = ((bn = BidResponseSlot),
		__extends$9(cn, bn),
		(cn.prototype.GenerateEvent = function(e) {
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
		(cn.prototype.GenerateMessage = function() {
			return { nativePayload: this.nativePayload };
		}),
		cn),
		bn;
	function cn(e, t, i, o, r, n, a, s, d) {
		var c = bn.call(this, e, t, i, o, r, n, d) || this;
		return (c.nativeCallback = a), (c.nativePayload = s), c;
	}
	var InputParameters = ((qn.prototype.addParameter = function(e, t) {
		this.paramParser[e.toLowerCase()] = t;
	}),
	(qn.prototype.tryFillParameters = function(e) {
		for (var t in e)
			if (void 0 !== e[t]) {
				var i = t.toLowerCase();
				this.paramParser[i]
					? this.paramParser[i](e[t])
					: Log.Warning("Unknown parameter: " + t);
			}
	}),
	qn);
	function qn() {
		var t = this;
		(this.integrationMode = IntegrationMode.Unspecified),
			(this.paramParser = {}),
			this.addParameter("integrationMode", function(e) {
				t.integrationMode = parse(e);
			});
	}
	var __extends$10 = ((yn = function(e, t) {
			return (yn =
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
			yn(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		yn,
		RenderAdInputParameters = ((Jn = InputParameters),
		__extends$10(Kn, Jn),
		Kn),
		Jn;
	function Kn(e) {
		var t = Jn.call(this) || this;
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
			Jn.prototype.tryFillParameters.call(t, e),
			t
		);
	}
	var StandaloneAdBlockFlagManager = ((Qn.create = function() {
		return new Qn();
	}),
	(Qn.prototype.adBlockFlagEnabled = function() {
		if (!this.localStorageEnabled) return !1;
		var e = Qn.ADBLOCK_FLAG_KEY;
		return null !== this.localStorageHelper.getItem(e);
	}),
	(Qn.prototype.enableAdBlockFlag = function() {
		if (this.localStorageEnabled) {
			var e = Qn.ADBLOCK_FLAG_KEY;
			this.localStorageHelper.setItem(e, "1", Qn.ADBLOCK_FLAG_LIFETIME);
		}
	}),
	(Qn.prototype.disableAdBlockFlag = function() {
		if (this.localStorageEnabled) {
			var e = Qn.ADBLOCK_FLAG_KEY;
			this.localStorageHelper.removeItem(e);
		}
	}),
	(Qn.ADBLOCK_FLAG_KEY = "criteo_adblock_flag"),
	(Qn.ADBLOCK_FLAG_LIFETIME = 864e5),
	Qn);
	function Qn() {
		(this.localStorageHelper = new LocalStorageHelper()),
			(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage());
	}
	var DirectBiddingSlot = function(e, t, i, o, r, n, a, s) {
			(this.slotId = generateUuid().replace(/-/g, "")),
				(this.impId = e),
				(this.zoneId = t),
				(this.nativeCallback = i),
				(this.transactionId = o),
				(this.sizes = r),
				(this.publisherSubId = n),
				(this.mediaTypes = a),
				(this.video = s);
		},
		__extends$11 = ((bo = function(e, t) {
			return (bo =
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
			bo(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		bo,
		PlacementInputParameters = ((no = InputParameters),
		__extends$11(oo, no),
		oo),
		no;
	function oo(e) {
		var r = no.call(this) || this;
		return (
			(r.slotId = void 0),
			(r.zoneId = void 0),
			(r.sizes = []),
			(r.nativeCallback = void 0),
			(r.publisherSubId = void 0),
			r.addParameter("slotid", function(e) {
				r.slotId = e;
			}),
			r.addParameter("zoneid", function(e) {
				r.zoneId = e;
			}),
			r.addParameter("sizes", function(e) {
				for (var t = 0, i = e; t < i.length; t++) {
					var o = i[t].split("x");
					r.sizes.push(new Size(parseInt(o[0], 10), parseInt(o[1], 10)));
				}
			}),
			r.addParameter("nativecallback", function(e) {
				r.nativeCallback = e;
			}),
			r.addParameter("publisherSubId", function(e) {
				r.publisherSubId = e;
			}),
			no.prototype.tryFillParameters.call(r, e),
			r
		);
	}
	var __extends$12 = ((Ao = function(e, t) {
			return (Ao =
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
			Ao(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Ao,
		StandaloneInputParameters = ((Lo = InputParameters),
		__extends$12(Mo, Lo),
		(Mo.prototype.deserializePlacementInput = function(e) {
			for (var t = [], i = 0, o = e; i < o.length; i++) {
				var r = o[i],
					n = new PlacementInputParameters(r);
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
		Mo),
		Lo;
	function Mo(e) {
		var t = Lo.call(this) || this;
		return (
			(t.placements = void 0),
			(t.networkId = void 0),
			t.addParameter("networkId", function(e) {
				t.networkId = e;
			}),
			t.addParameter("placements", function(e) {
				t.placements = t.deserializePlacementInput(e);
			}),
			Lo.prototype.tryFillParameters.call(t, e),
			t
		);
	}
	var StandalonePlaceholder = ((Xo.clearState = function() {
		this.cloneByImpressionId = {};
	}),
	(Xo.tryInsertPlaceholder = function(e) {
		var t = document.getElementById(e);
		if (null === t) return !1;
		if ((t.appendChild(this.createPlaceholder()), this.isVisible(t))) return !0;
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
	(Xo.isVisible = function(e) {
		return (
			0 !== e.offsetWidth &&
			0 !== e.offsetHeight &&
			0 !== e.getClientRects().length
		);
	}),
	(Xo.createClone = function(e) {
		var t = e.cloneNode(!1);
		return (t.id = this.generateRandomId()), (t.className = ""), t;
	}),
	(Xo.generateRandomId = function() {
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
	(Xo.createPlaceholder = function() {
		var e = document.createElement("div");
		return (
			(e.style.width = "1px"),
			(e.style.height = "1px"),
			(e.style.display = "block"),
			(e.className = Xo.PLACEHOLDER_NAME),
			e
		);
	}),
	(Xo.removePlaceholder = function(e) {
		var t = this.cloneByImpressionId[e];
		if (void 0 === t) {
			var i = document.getElementById(e);
			if (null !== i)
				for (
					var o = 0, r = i.getElementsByClassName(Xo.PLACEHOLDER_NAME);
					o < r.length;
					o++
				) {
					var n = r[o];
					null !== n.parentNode && n.parentNode.removeChild(n);
				}
		} else null !== t.parentNode && t.parentNode.removeChild(t);
	}),
	(Xo.insertAdIFrame = function(e) {
		var t,
			i = this.cloneByImpressionId[e];
		if (void 0 !== i) t = i;
		else {
			var o = document.getElementById(e);
			if (null === o) return null;
			t = o;
		}
		for (
			var r = 0, n = t.getElementsByClassName(Xo.PLACEHOLDER_NAME);
			r < n.length;
			r++
		) {
			for (var a = n[r], s = 0, d = a.childNodes; s < d.length; s++) {
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
	(Xo.createAdIFrame = function() {
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
	(Xo.removePlaceholders = function(e, t) {
		void 0 === t && (t = []);
		for (var i = 0, o = e; i < o.length; i++) {
			var r = o[i].impId;
			-1 === t.indexOf(r) && Xo.removePlaceholder(r);
		}
	}),
	(Xo.tryInsertPlaceholders = function(e) {
		for (var t = [], i = 0, o = e; i < o.length; i++) {
			var r = o[i],
				n = r.impId;
			Xo.tryInsertPlaceholder(n) && t.push(r);
		}
		return t;
	}),
	(Xo.PLACEHOLDER_NAME = "criteo_placeholder"),
	(Xo.cloneByImpressionId = {}),
	Xo);
	function Xo() {}
	var DirectBiddingPosition = function(e, t) {
			(this.top = e), (this.left = t);
		},
		DirectBiddingViewport = function(e, t, i, o) {
			(this.width = e),
				(this.height = t),
				(this.scrollTop = i),
				(this.scrollLeft = o);
		},
		DomManipulationTools = ((Yp.getHighestAccessibleWindow = function(e) {
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
		(Yp.getHighestAccessibleUrl = function(e) {
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
		(Yp.inIframe = function() {
			try {
				return window.self !== window.top;
			} catch (e) {
				return !0;
			}
		}),
		Yp);
	function Yp() {}
	var ViewportComputer = ((jq.prototype.getViewport = function() {
		var e = DomManipulationTools.getHighestAccessibleWindow(window).topFrame,
			t = e.document,
			i = e.innerWidth || t.documentElement.clientWidth || t.body.clientWidth,
			o =
				e.innerHeight || t.documentElement.clientHeight || t.body.clientHeight,
			r = t.documentElement.scrollTop || t.body.scrollTop,
			n = t.documentElement.scrollLeft || t.body.scrollLeft;
		return new DirectBiddingViewport(i, o, r, n);
	}),
	(jq.prototype.getSlotPosition = function(e) {
		var t = e.impId,
			i = document.getElementById(t);
		if (null !== i) {
			var o = i.getBoundingClientRect();
			return new DirectBiddingPosition(o.top, o.left);
		}
	}),
	jq);
	function jq() {}
	var standaloneProfileId = 184,
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
				r = getParam(e, "placements", "object"),
				n = getParam(e, "callback", "function"),
				a = getParam(e, "timeout", "function");
			void 0 === r
				? DiscoverTagsAndRequestBids(o, n, a)
				: RequestBidsWithProfileId(
						{ networkId: o, placements: googleSlotsToDynamicSlots(r) },
						standaloneProfileId,
						n,
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
				r = window.criteo_pubtag.context,
				n = StandaloneAdBlockFlagManager.create();
			if (n.adBlockFlagEnabled()) {
				(t = standaloneAdBlockProfileId), (r.isAdBlocked = !0);
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
									for (var i = 0, o = t.invocation_codes; i < o.length; i++)
										for (
											var r = o[i], n = 0, d = r.slot_ids;
											n < d.length;
											n++
										) {
											var c = d[n];
											s[c] = r.invocation_code;
										}
								for (
									var l = function(t) {
											for (
												var e = void 0, i = 0, o = y.placements;
												i < o.length;
												i++
											) {
												var r = o[i];
												if (r.nativeCallback && r.impId === t.impid) {
													e = r.nativeCallback;
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
			var e = new DirectBiddingMetricsManager(standaloneProfileId),
				t = e.getMetrics(!1),
				i = {},
				o = 0;
			o < t.length;
			++o
		)
			for (var r = 0, n = t[o].slots; r < n.length; r++) {
				i[n[r].impressionId] = o;
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
				var r = ComputeDFPTargeting(i[o], t);
				void 0 !== r && e.setKeyValuePerSlot(o, r);
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
				r = o.GenerateEvent(t);
			window.criteo_pubtag.push(r),
				o.slotId in bidCaches && bidCaches[o.slotId].removeBid(o),
				delete i[e];
		} else Log.Error("Could not render bid with id: " + e);
	}
	function GetBids(e) {
		var t = window.criteo_pubtag.standaloneBidder.bids;
		if (null === t) return [];
		var i = window.criteo_pubtag.standaloneBidder.lineItemRanges,
			o = [];
		for (var r in t)
			if (t.hasOwnProperty(r)) {
				var n = t[r];
				if (
					!e ||
					!e.impressionIds ||
					-1 !== e.impressionIds.indexOf(n.impressionId)
				) {
					if (0 < i.length) {
						var a = LineItemRange.computeLineItemPricebandValue(n.cpm, i);
						n.cpm_bucket = a;
					}
					o.push(n);
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
	function GenerateBidResponseSlot(e, t, i, o, r, n, a, s, d, c, l) {
		return void 0 !== a && void 0 !== s
			? new NativeBidResponseSlot(e, t, i, o, r, n, a, s, l)
			: void 0 === d || (void 0 !== c && "<script" !== c.substr(0, 7))
				? void 0 !== c
					? new HtmlCreativeBidResponseSlot(e, t, i, o, r, n, c, l)
					: void 0
				: new DisplayUrlBidResponseSlot(e, t, i, o, r, n, d, l);
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
	var AMP = ((Rs.Standalone = function(r, n, a) {
		RequestBids(
			{
				integrationmode: "amp",
				placements: [
					{ slotid: r.slot, zoneid: r.zone, sizes: [r.width + "x" + r.height] }
				]
			},
			function(e) {
				if ("DFP" === r.adserver) {
					Rs.listenForCreativeRequests(e);
					for (var t = 0, i = e; t < i.length; t++) {
						var o = ComputeStandaloneDFPTargeting(i[t], r.lineItemRanges);
						void 0 !== o && a(o);
					}
					0 === e.length && a({});
				}
				n(null);
			},
			r.timeout
		);
	}),
	(Rs.listenForCreativeRequests = function(s) {
		window.addEventListener(
			"message",
			function(e) {
				var t = e.data instanceof Object ? e.data : tryParseJson(e.data);
				if (t && t.bidId && e.source)
					for (var i = 0, o = s; i < o.length; i++) {
						var r = o[i];
						if (r.id === t.bidId) {
							var n = e.source,
								a = r.GenerateMessage();
							(a.message = "Criteo creative"),
								n.postMessage(JSON.stringify(a), "*");
						}
					}
			},
			!1
		);
	}),
	Rs);
	function Rs() {}
	function GetIdfs() {
		return window.criteo_pubtag.context.getIdfs();
	}
	function SetIdfs(e) {
		window.criteo_pubtag.context.setIdfs(e);
	}
	function SetCeh$1(e) {
		window.criteo_pubtag.context.ceh = e;
	}
	var DirectBiddingSlotVideo = function(e, t, i, o, r, n, a, s, d, c) {
			(this.playersize = e),
				(this.mimes = t),
				(this.protocols = i),
				(this.maxduration = o),
				(this.api = r),
				(this.skip = n),
				(this.placement = a),
				(this.playbackmethod = s),
				(this.minduration = d),
				(this.startdelay = c);
		},
		PrebidMediaTypes,
		ut;
	(ut = PrebidMediaTypes = PrebidMediaTypes || {}),
		(ut.Native = "native"),
		(ut.Banner = "banner"),
		(ut.Video = "video");
	var Prebid = ((vt.prototype.setEnableSendAllBids = function(e) {
		this.enableSendAllBids = e;
	}),
	(vt.prototype.buildCdbUrl = function() {
		return this.url;
	}),
	(vt.prototype.buildCdbRequest = function() {
		if (this.cache.silentModeEnabled())
			Log.Debug("Request ignored because the global silent mode is enabled");
		else {
			if (this.requestBuilder.isValid())
				return (
					this.timer.sendRequest(this.url), this.requestBuilder.getRequest()
				);
			Log.Debug("Request ignored because it doesnt contain any slot");
		}
	}),
	(vt.GetAllAdapters = function() {
		return window.Criteo.prebid_adapters;
	}),
	(vt.GetAdapter = function(e) {
		var t = "string" == typeof e ? e : e.bidRequests[0].auctionId,
			i = vt.GetAllAdapters();
		if (i && t in i) return i[t];
	}),
	(vt.createCriteoNativeAdWithCallback = function(e, t, i) {
		return (
			(window.criteo_prebid_native_slots =
				window.criteo_prebid_native_slots || {}),
			(window.criteo_prebid_native_slots[e] = { callback: i, payload: t }),
			'<script type="text/javascript">\n            var win = window;\n            for (var i = 0; i < 10; ++i) {\n                win = win.parent;\n                if (win.criteo_prebid_native_slots) {\n                    var responseSlot = win.criteo_prebid_native_slots["' +
				e +
				'"];\n                    responseSlot.callback(responseSlot.payload);\n                    break;\n                }\n            }\n        </script>'
		);
	}),
	(vt.createPrebidNativeAd = function(e) {
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
	(vt.prototype.getBidRequestForSlot = function(e) {
		for (var t = 0, i = this.bidRequests; t < i.length; t++) {
			var o = i[t];
			if (
				o.adUnitCode === e.impid &&
				(!o.params.zoneId || parseInt(o.params.zoneId, 10) === e.zoneid)
			)
				return o;
		}
	}),
	(vt.getVideoInfoFromBidRequest = function(e) {
		if (vt.hasVideoMediaType(e))
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
	(vt.hasVideoMediaType = function(e) {
		return (
			void 0 !== e.params &&
			void 0 !== e.params.video &&
			!(void 0 === e.mediaTypes || void 0 === e.mediaTypes.video)
		);
	}),
	(vt.prototype.interpretResponse = function(e, t) {
		this.timer.requestReceived();
		var i = extractExtraData(e),
			o = {};
		if (void 0 !== i.slots)
			for (var r = 0, n = i.slots; r < n.length; r++) o[(c = n[r]).imp_id] = c;
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
					if (c.native)
						if (l.params.nativeCallback)
							h.ad = vt.createCriteoNativeAdWithCallback(
								u,
								c.native,
								l.params.nativeCallback
							);
						else {
							if (this.enableSendAllBids) {
								Log.Error("Not supporting non mediation mode");
								continue;
							}
							(h.native = vt.createPrebidNativeAd(c.native)),
								(h.mediaType = PrebidMediaTypes.Native);
						}
					else
						c.video
							? ((h.vastUrl = c.displayurl),
							  (h.mediaType = PrebidMediaTypes.Video))
							: (h.ad = c.creative);
					a.push(h);
				} else Log.Error('Could not get bid request for slot "' + c + '"');
			}
		return (
			this.cache.handleResponse(this.slots, e, i, !1),
			this.metricsManager.storeMetric(this.timer.finish(e.sid, i.slots)),
			this.cache.clearExpiredItems(),
			a
		);
	}),
	(vt.prototype.handleBidWon = function(e) {
		this.updateMetric(e, function(e) {
			e.adapterBidWon = !0;
		});
	}),
	(vt.prototype.handleBidTimeout = function() {
		this.timer.requestReceived(!0),
			this.metricsManager.storeMetric(this.timer.finish()),
			this.cache.clearExpiredItems();
	}),
	(vt.prototype.handleSetTargeting = function(e) {
		var t = this;
		this.timer.setTargeting(),
			this.updateMetric(e, function() {
				return t.timer.build();
			});
	}),
	(vt.prototype.updateMetric = function(e, t) {
		for (var i = this.metricsManager.getMetrics(!1), o = 0; o < i.length; ++o)
			for (var r = 0, n = i[o].slots; r < n.length; r++) {
				var a = n[r];
				if (a.adUnitId === e.adUnitCode) {
					var s = t(a);
					s && (i[o] = s);
				}
			}
		this.metricsManager.setMetrics(i);
	}),
	vt);
	function vt(e, t, i, o, r) {
		var n, a;
		(this.enableSendAllBids = !0),
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
					vt.getVideoInfoFromBidRequest(c)
				)
			),
				(n = c.params.networkId || n),
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
		(this.metricsManager = new DirectBiddingMetricsManager(e, t, r)),
			(this.cache = new DirectBiddingCache(
				window.criteo_pubtag.context,
				this.slots,
				n
			)),
			(this.requestBuilder = new DirectBiddingRequestBuilder(
				this.cache.filterNoBidSlots(this.slots),
				window.criteo_pubtag.context,
				this.metricsManager,
				new DirectBiddingUrlBuilder(!1),
				e,
				a,
				n,
				t,
				{ ccpaIabConsent: u, gdprConsent: l },
				r
			)),
			(this.url = this.requestBuilder.getUrl()),
			(window.Criteo.prebid_adapters = window.Criteo.prebid_adapters || {}),
			(window.Criteo.prebid_adapters[this.auctionId] = this);
	}
	var __extends$13 = ((wu = function(e, t) {
			return (wu =
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
			wu(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		wu,
		ConditionalEvent = ((Hu = AbstractEvent),
		__extends$13(Iu, Hu),
		(Iu.prototype.canEval = function() {
			return (
				void 0 === this.conditionRequirement ||
				this.conditionRequirement.apply(this)
			);
		}),
		(Iu.prototype.eval = function(e) {
			this.condition.apply(this)
				? this.eventIfTrue.eval(e)
				: this.eventIfFalse.eval(e);
		}),
		(Iu.NAME = "conditionalEvent"),
		Iu),
		Hu,
		AdFormatType,
		Pu;
	function Iu(e, t, i, o) {
		var r = Hu.call(this, Iu.NAME) || this;
		return (
			(r.condition = e),
			(r.eventIfTrue = t),
			(r.eventIfFalse = i),
			(r.conditionRequirement = o),
			r
		);
	}
	(Pu = AdFormatType = AdFormatType || {}),
		(Pu[(Pu.Classic = 0)] = "Classic"),
		(Pu[(Pu.StickyFooter = 1)] = "StickyFooter"),
		(Pu[(Pu.ScrollingBanner = 2)] = "ScrollingBanner");
	var CookieHelper = ((Qu.SetCookie = function(e, t, i, o, r) {
		void 0 === r && (r = !1);
		var n = o || document,
			a = n.location.hostname,
			s = new Date();
		s.setTime(s.getTime() + 60 * i * 60 * 1e3);
		var d = "expires=" + s.toUTCString();
		if (!r) return Qu.setCookieString(e, t, d, void 0, n), a;
		for (var c = a.split("."), l = 0; l < c.length; ++l) {
			var u = c.slice(c.length - l - 1, c.length).join(".");
			Qu.setCookieString(e, t, d, u, n);
			var p = Qu.GetCookie(e, o);
			if (p && p === t) return u;
		}
		return a;
	}),
	(Qu.DeleteCookie = function(e, t, i) {
		void 0 === i && (i = !1), Qu.SetCookie(e, "", 0, t, i);
	}),
	(Qu.GetCookie = function(e, t) {
		for (var i = 0, o = (t || document).cookie.split(";"); i < o.length; i++) {
			var r = o[i],
				n = r.substr(0, r.indexOf("=")).replace(/^\s+|\s+$/g, ""),
				a = r.substr(r.indexOf("=") + 1);
			if (n === e) return decodeURIComponent(a);
		}
	}),
	(Qu.setCookieString = function(e, t, i, o, r) {
		var n = e + "=" + encodeURIComponent(t) + ";" + i + ";";
		o && "" !== o && (n += "domain=." + o + ";"), (r.cookie = n + "path=/");
	}),
	Qu);
	function Qu() {}
	var AdvancedAdFormats = ((uv.prototype.CreateAdvancedAdFormatContainer = function(
			e
		) {
			return this.adFormat === AdFormatType.StickyFooter
				? this.CreateStickyFooterContainer(e)
				: this.adFormat === AdFormatType.ScrollingBanner
					? this.CreateScrollingBannerContainer(e)
					: void 0;
		}),
		(uv.prototype.IsUserOptout = function() {
			return (
				this.adFormat === AdFormatType.StickyFooter &&
				"true" === CookieHelper.GetCookie("cto_sticky_closed")
			);
		}),
		(uv.prototype.CreateStickyFooterContainer = function(e) {
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
				var r = document.getElementById(e);
				r
					? r.appendChild(t)
					: Log.Error('Target element "' + e + '" not found in the document');
			}
			return o.id;
		}),
		(uv.prototype.CreateScrollingBannerContainer = function(e) {
			var t,
				i = this;
			if (void 0 === e || "" === e)
				((t = document.createElement("div")).id = "cto_scrolling"),
					document.body.appendChild(t);
			else {
				var o = document.getElementById(e);
				if (!o)
					return (
						Log.Error('Target element "' + e + '" not found in the document'), e
					);
				t = o;
			}
			var r = t.offsetTop;
			return (
				window.addEventListener
					? window.addEventListener(
							"scroll",
							function() {
								i.SetScrollingContainerPosition(t, r);
							},
							!1
					  )
					: window.attachEvent("onscroll", function() {
							i.SetScrollingContainerPosition(t, r);
					  }),
				this.SetScrollingContainerPosition(t, r),
				t.id
			);
		}),
		(uv.prototype.SetScrollingContainerPosition = function(e, t) {
			t - 10 <=
			(window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop ||
				0)
				? ((e.style.position = "fixed"), (e.style.top = "10px"))
				: ((e.style.position = "static"), (e.style.top = "auto"));
		}),
		uv),
		DisplayContext,
		Kv;
	function uv(e) {
		this.adFormat = e;
	}
	(Kv = DisplayContext = DisplayContext || {}),
		(Kv[(Kv.InFriendlyIframe = 1)] = "InFriendlyIframe"),
		(Kv[(Kv.InUnfriendlyIframe = 2)] = "InUnfriendlyIframe"),
		(Kv[(Kv.DirectIntegration = 3)] = "DirectIntegration");
	var DocumentHelper = ((Lv.tryWrite = function(e) {
		for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
		return "loading" === e.readyState && (e.write.apply(e, t), !0);
	}),
	Lv);
	function Lv() {}
	var ViewabilityComputer = ((Pv.GetAtfRatio = function(e, t) {
		var i = document.getElementById(t);
		if (e.displayContext === DisplayContext.DirectIntegration) {
			if (null !== i) return Pv.GetRatioAboveFold(i);
			if (
				DocumentHelper.tryWrite(
					document,
					"<div id='compute_visibility_helper' width='0px' height='0px'></div>"
				)
			) {
				var o = document.getElementById("compute_visibility_helper"),
					r = Pv.GetRatioAboveFold(o);
				return o.parentElement.removeChild(o), r;
			}
		}
		if (e.displayContext === DisplayContext.InFriendlyIframe)
			return Pv.GetRatioAboveFold(frameElement);
	}),
	(Pv.GetRatioAboveFold = function(e) {
		var t = new ViewportComputer().getViewport(),
			i = t.height,
			o = e.getBoundingClientRect(),
			r = t.scrollTop;
		return i >= o.bottom + r
			? 1
			: i <= o.top + r
				? 0
				: (i - o.top - r) / e.offsetHeight;
	}),
	Pv);
	function Pv() {}
	var __extends$14 = ((_v = function(e, t) {
			return (_v =
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
			_v(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		_v,
		DisplayEvent = ((kw = AbstractEvent),
		__extends$14(lw, kw),
		(lw.prototype.eval = function(e) {
			this.displayParameters.atfRatio = ViewabilityComputer.GetAtfRatio(
				e.context,
				this.displayParameters.containerid
			);
		}),
		(lw.prototype.buildCasUrl = function(t, i, o, r, n) {
			var a = this;
			this.gdprPrivacyProvider.readyToRetrieve()
				? this.gdprPrivacyProvider.retrieveGDPRConsentForPassback(function(e) {
						t(a.urlBuilder.buildUrl(a.displayParameters, i, o, r, n, e));
				  })
				: t(this.urlBuilder.buildUrl(this.displayParameters, i, o, r, n));
		}),
		lw),
		kw,
		HandlerType,
		yw;
	function lw(e, t, i) {
		var o = kw.call(this, e) || this;
		return (
			(o.displayParameters = i),
			(o.urlBuilder = t),
			(o.gdprPrivacyProvider = new GDPRPrivacyProvider(window)),
			o
		);
	}
	(yw = HandlerType = HandlerType || {}),
		(yw[(yw.AFR = 0)] = "AFR"),
		(yw[(yw.AJS = 1)] = "AJS");
	var __extends$15 = ((zw = function(e, t) {
			return (zw =
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
			zw(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		zw,
		DisplayEventAFR = ((Kw = DisplayEvent),
		__extends$15(Lw, Kw),
		(Lw.prototype.eval = function(t) {
			var i = this;
			Kw.prototype.eval.call(this, t);
			var o = this.displayParameters.containerid,
				r = this.displayParameters.callbackSuccess,
				n = this.displayParameters.callbackError;
			this.buildCasUrl(
				function(e) {
					if (t.context.isAdBlocked) {
						if (!i.respectsEyeoDeal) return;
						i.loadIframe(e, o, r, n);
					} else i.loadIframe(e, o, r, n);
				},
				t.context,
				HandlerType.AFR
			);
		}),
		(Lw.prototype.loadIframe = function(e, t, i, o) {
			var r = document.createElement("iframe");
			(r.src = e),
				(r.id = t + "_cto_iframe"),
				(r.frameBorder = "0"),
				r.setAttribute("hspace", "0"),
				r.setAttribute("vspace", "0"),
				(r.marginWidth = "0px"),
				(r.marginHeight = "0px"),
				(r.width = "100%"),
				(r.height = "100%"),
				(r.scrolling = "no"),
				i && (r.onload = i),
				o && (r.onerror = o);
			var n = document.getElementById(t);
			n
				? n.appendChild(r)
				: Log.Error('Target element "' + t + '" not found in the document');
		}),
		(Lw.NAME = "displayAfr"),
		Lw),
		Kw;
	function Lw(e, t, i) {
		var o = Kw.call(this, Lw.NAME, e, t) || this;
		return (o.respectsEyeoDeal = i), o;
	}
	var __extends$16 = ((ax = function(e, t) {
			return (ax =
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
			ax(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		ax,
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
						r = this.displayParameters.width,
						n = this.displayParameters.height,
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
								var e = i.getContainerSize(o, r, n);
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
						void 0 !== r && void 0 !== n
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
						r = DomManipulationTools.inIframe(),
						n = t || (r ? document.body.offsetWidth : o ? o.offsetWidth : 0),
						a = i || (r ? document.body.offsetHeight : o ? o.offsetHeight : 0);
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
		__extends$17 = ((Kx = function(e, t) {
			return (Kx =
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
			Kx(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		Kx,
		DisplayEventSync = ((Vx = DisplayEvent),
		__extends$17(Wx, Vx),
		(Wx.prototype.eval = function(e) {
			var t = this;
			Vx.prototype.eval.call(this, e),
				this.buildCasUrl(function(e) {
					t.loadScriptSync(e);
				}, e.context);
		}),
		(Wx.prototype.loadScriptSync = function(e) {
			document.write(
				"<script type='text/javascript' src='" + e + "'></script>"
			);
		}),
		(Wx.NAME = "displaySync"),
		Wx),
		Vx;
	function Wx(e, t) {
		return Vx.call(this, Wx.NAME, e, t) || this;
	}
	var __extends$18 = ((by = function(e, t) {
			return (by =
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
			by(e, t),
				(e.prototype =
					null === t
						? Object.create(t)
						: ((i.prototype = t.prototype), new i()));
		}),
		by,
		DisplayInputParameters = ((my = InputParameters),
		__extends$18(ny, my),
		(ny.prototype.parseAdFormat = function(e) {
			switch (e.toLowerCase()) {
				case "stickyfooter":
					return AdFormatType.StickyFooter;
				case "scrollingbanner":
					return AdFormatType.ScrollingBanner;
				default:
					return AdFormatType.Classic;
			}
		}),
		ny),
		my;
	function ny(e) {
		var t = my.call(this) || this;
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
			my.prototype.tryFillParameters.call(t, e),
			t
		);
	}
	var DisplayUrlBuilder = ((Jy.prototype.buildUrl = function(e, t, i, o, r, n) {
		var a =
			(i === HandlerType.AFR ? Jy.CAS_URL_AFR : Jy.CAS_URL_AJS) +
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
		(a += r ? "&height=" + r : ""),
		(a += t.ctoIdOnPublisherDomain ? "&idcpy=" + t.ctoIdOnPublisherDomain : ""),
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
		return (
			(a += e.passbackCode ? "&dlp=1" : ""),
			e.integrationMode !== IntegrationMode.Unspecified &&
				(a += "&im=" + e.integrationMode),
			(a += "&dc=" + t.displayContext),
			void 0 !== e.atfRatio &&
				(a += "&atfr=" + Math.round(100 * e.atfRatio) / 100),
			(a += t.highestAccessibleUrl
				? "&loc=" +
				  encodeURIComponent(t.highestAccessibleUrl).substring(0, 1600)
				: ""),
			n &&
				(void 0 !== n.consentGiven &&
					(a += "&gdprGvn=" + (n.consentGiven ? "1" : "0")),
				void 0 !== n.gdprApplies &&
					(a += "&gdprApp=" + (n.gdprApplies ? "1" : "0")),
				void 0 !== n.consentData &&
					(a += n.consentData ? "&gdprDta=" + n.consentData : "")),
			a
		);
	}),
	(Jy.prototype.getAbpParameter = function(e, t) {
		return (t.isAdBlocked ? 1 : 0) | (e.overrideZoneFloor ? 0 : 2);
	}),
	(Jy.CAS_URL_AJS = "https://cas.criteo.com/delivery/ajs.php"),
	(Jy.CAS_URL_AFR = "https://cas.criteo.com/delivery/afr.php"),
	Jy);
	function Jy() {}
	var EyeoDealValidator = ((Zy.prototype.respectsEyeoDeal = function(e) {
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
				? ((Zy.atfRatio = i.newAtfRatio), (Zy.btfRatio = i.newBtfRatio))
				: Log.Debug(
						"The element " +
							e +
							"does not respect Eyeo acceptable ads ratio constraints"
				  ),
			o
		);
	}),
	(Zy.prototype.respectsSizeConstraints = function(e) {
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
	(Zy.prototype.getAdLocationAttribute = function(e) {
		return e.getAttribute("data-ad-loc") || void 0;
	}),
	(Zy.prototype.getNewRatiosFeatures = function(e) {
		var t = ViewabilityComputer.GetRatioAboveFold(e),
			i = e.offsetHeight * e.offsetWidth,
			o = screen.width * screen.height,
			r = Zy.atfRatio + (t * i) / o,
			n = Zy.btfRatio + ((1 - t) * i) / o;
		return {
			respectsAdRatioConstraint: r <= 0.15 && n <= 0.25,
			newAtfRatio: r,
			newBtfRatio: n
		};
	}),
	(Zy.atfRatio = 0),
	(Zy.btfRatio = 0),
	Zy);
	function Zy() {}
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
					(o = new (t.async ? DisplayEventAsync : DisplayEventSync)(
						new DisplayUrlBuilder(),
						t
					)),
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
					var r,
						n,
						a = new EyeoDealValidator();
					(r = new DisplayEventAFR(
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
						r,
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
			var o = window.getComputedStyle(e, "");
			if ("none" === o.display) return !1;
			if ("hidden" === o.visibility && !1 === t) return !1;
			i = i || "visible" === o.visibility;
		}
		var r = e.currentStyle;
		if (r) {
			if ("none" === r.display) return !1;
			if ("hidden" === r.visibility && !1 === t) return !1;
			i = i || "visible" === r.visibility;
		}
		return isVisible(e.parentNode, null != t ? t : i);
	}
	var Polyfills = ((Iz.LoadPolyfills = function() {
			Iz.DefineIsArray(), Iz.DefineIndexOf(), Iz.DefineFilter();
		}),
		(Iz.DefineIsArray = function() {
			Array.isArray ||
				(Array.isArray = function(e) {
					return "[object Array]" === Object.prototype.toString.call(e);
				});
		}),
		(Iz.DefineIndexOf = function() {
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
		(Iz.DefineFilter = function() {
			Array.prototype.filter ||
				(Array.prototype.filter = function(e) {
					if (void 0 === this || void 0 === this) throw new TypeError();
					var t = this.length;
					if ("function" != typeof e) throw new TypeError();
					for (
						var i = [],
							o = 2 <= arguments.length ? arguments[1] : void 0,
							r = 0;
						r < t;
						r++
					)
						if (r in this) {
							var n = this[r];
							e.call(o, n, r, this) && i.push(n);
						}
					return i;
				});
		}),
		Iz),
		StorageOrigin,
		Zz;
	function Iz() {}
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
	(Zz = StorageOrigin = StorageOrigin || {}),
		(Zz[(Zz.None = 0)] = "None"),
		(Zz[(Zz.Cookie = 1)] = "Cookie"),
		(Zz[(Zz.LocalStorage = 2)] = "LocalStorage");
	var CookieSynchronizer = (($z.isSafariBrowser = function() {
		return null !== navigator.userAgent.match($z.SAFARI_CHECK_REGEX);
	}),
	($z.isAndroidBrowser = function() {
		return -1 < navigator.userAgent.toLowerCase().indexOf("android");
	}),
	($z.isFirefoxBrowser = function() {
		return -1 < navigator.userAgent.toLowerCase().indexOf("firefox");
	}),
	($z.isEdgeChromiumBrowser = function() {
		return -1 < navigator.userAgent.toLowerCase().indexOf("edg/");
	}),
	($z.isEdgeLegacyBrowser = function() {
		return -1 < navigator.userAgent.toLowerCase().indexOf("edge/");
	}),
	($z.prototype.synchronizeCriteoUid = function(e) {
		var t = this;
		if (
			(e ||
				$z.isSafariBrowser() ||
				$z.isAndroidBrowser() ||
				$z.isFirefoxBrowser() ||
				$z.isEdgeChromiumBrowser() ||
				$z.isEdgeLegacyBrowser()) &&
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
	($z.prototype.appendGumIframeIfDoesNotExist = function() {
		var n = this,
			e = this.createGumIframe();
		this.topDoc.getElementById($z.SYNCFRAME_ID) ||
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
										o =
											"string" == typeof t.callbacks
												? [t.callbacks]
												: t.callbacks;
									i < o.length;
									i++
								) {
									var r = o[i];
									new Image().src = r;
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
	($z.prototype.getClientSideUid = function() {
		return this.getFromAllStorages($z.GUID_COOKIE_NAME);
	}),
	($z.prototype.setClientSideUid = function(e) {
		this.writeOnAllStorages(
			$z.GUID_COOKIE_NAME,
			e,
			$z.GUID_RETENTION_TIME_HOUR
		);
	}),
	($z.prototype.deleteClientSideUid = function() {
		this.deleteFromAllStorage($z.GUID_COOKIE_NAME);
	}),
	($z.prototype.getBundle = function() {
		return this.getFromAllStorages($z.BUNDLE_COOKIE_NAME);
	}),
	($z.prototype.setBundle = function(e) {
		this.writeOnAllStorages(
			$z.BUNDLE_COOKIE_NAME,
			e,
			$z.GUID_RETENTION_TIME_HOUR
		);
	}),
	($z.prototype.deleteBundle = function() {
		this.deleteFromAllStorage($z.BUNDLE_COOKIE_NAME);
	}),
	($z.prototype.getClientSideOptOut = function() {
		var e = this.getFromAllStorages($z.OPTOUT_COOKIE_NAME);
		return { value: "1" === e.value, origin: e.origin };
	}),
	($z.prototype.setClientSideOptOut = function() {
		this.writeOnAllStorages(
			$z.OPTOUT_COOKIE_NAME,
			"1",
			$z.OPTOUT_RETENTION_TIME_HOUR
		);
	}),
	($z.prototype.deleteClientSideIdfs = function() {
		this.deleteFromAllStorage($z.IDFS_COOKIE_NAME);
	}),
	($z.prototype.getClientSideIdfs = function() {
		return this.getFromAllStorages($z.IDFS_COOKIE_NAME);
	}),
	($z.prototype.setClientSideIdfs = function(e) {
		this.writeOnAllStorages(
			$z.IDFS_COOKIE_NAME,
			e,
			$z.GUID_RETENTION_TIME_HOUR
		);
	}),
	($z.prototype.getClientSideSecureId = function() {
		return this.getFromAllStorages($z.SECURE_ID_COOKIE_NAME);
	}),
	($z.prototype.setClientSideSecureId = function(e) {
		this.writeOnAllStorages(
			$z.SECURE_ID_COOKIE_NAME,
			e,
			$z.GUID_RETENTION_TIME_HOUR
		);
	}),
	($z.prototype.deleteClientSideSecureId = function() {
		this.deleteFromAllStorage($z.SECURE_ID_COOKIE_NAME);
	}),
	($z.prototype.getClientSideLocalWebId = function() {
		return this.getFromAllStorages($z.LOCAL_WEB_ID_COOKIE_NAME);
	}),
	($z.prototype.checkCookiesAreWriteable = function() {
		var e = "cto_writeable";
		CookieHelper.SetCookie(e, "1", 1, this.topDoc, !0);
		var t = "1" === CookieHelper.GetCookie(e, this.topDoc);
		return CookieHelper.DeleteCookie(e, this.topDoc, !0), t;
	}),
	($z.prototype.createGumIframe = function() {
		var e = this.topDoc.createElement("iframe"),
			t = this.buildSyncframeSrc();
		return (e.src = t), (e.id = $z.SYNCFRAME_ID), (e.style.display = "none"), e;
	}),
	($z.prototype.writeOnAllStorages = function(e, t, i) {
		this.localStorageEnabled && this.localStorageHelper.setItem(e, t),
			CookieHelper.SetCookie(e, t, i, this.topDoc, !0);
	}),
	($z.prototype.getFromAllStorages = function(e) {
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
	($z.prototype.deleteFromAllStorage = function(e) {
		CookieHelper.DeleteCookie(e, this.topDoc, !0),
			this.localStorageEnabled && this.localStorageHelper.removeItem(e);
	}),
	($z.prototype.getTld = function() {
		var e = CookieHelper.SetCookie(
			$z.TLD_TEST_COOKIE_NAME,
			"test",
			1,
			this.topDoc,
			!0
		);
		return (
			CookieHelper.DeleteCookie($z.TLD_TEST_COOKIE_NAME, this.topDoc, !0), e
		);
	}),
	($z.prototype.buildSyncframeSrc = function() {
		var e = this.getClientSideUid(),
			t = this.getClientSideIdfs(),
			i = this.getClientSideOptOut(),
			o = this.getClientSideSecureId(),
			r = this.getClientSideLocalWebId(),
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
				sid: o,
				origin: "publishertag",
				version: d,
				lwid: r,
				tld: a,
				bundle: n,
				topUrl: s,
				cw: c
			}));
	}),
	($z.GUID_COOKIE_NAME = "cto_idcpy"),
	($z.GUID_RETENTION_TIME_HOUR = 9360),
	($z.IDFS_COOKIE_NAME = "cto_idfs"),
	($z.SECURE_ID_COOKIE_NAME = "cto_sid"),
	($z.LOCAL_WEB_ID_COOKIE_NAME = "cto_lwid"),
	($z.BUNDLE_COOKIE_NAME = "cto_bundle"),
	($z.OPTOUT_COOKIE_NAME = "cto_optout"),
	($z.OPTOUT_RETENTION_TIME_HOUR = 43200),
	($z.TLD_TEST_COOKIE_NAME = "cto_pub_test_tld"),
	($z.SYNCFRAME_ID = "criteo-syncframe"),
	($z.SAFARI_CHECK_REGEX = /^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i),
	$z);
	function $z(e, t, i) {
		(this.isDebug = t),
			(this.topWin = e),
			(this.topDoc = e.document),
			(this.localStorageHelper = new LocalStorageHelper(this.topWin)),
			(this.localStorageEnabled = this.localStorageHelper.checkLocalStorage()),
			(this.canWriteCookies = this.checkCookiesAreWriteable()),
			(this.topUrl = i);
	}
	var Context = ((UA.prototype.getContextFlags = function() {
		var e = "";
		return (
			(e += this.debugMode ? "&debug=1" : ""),
			(e += this.noLog ? "&nolog=1" : "")
		);
	}),
	(UA.prototype.getDisplayContext = function(e) {
		return DomManipulationTools.inIframe()
			? e.err
				? DisplayContext.InUnfriendlyIframe
				: DisplayContext.InFriendlyIframe
			: DisplayContext.DirectIntegration;
	}),
	(UA.prototype.getQueryStringParams = function(e) {
		var t = {},
			i = e.split("?");
		if (1 < i.length)
			for (var o = 0, r = i[1].split("&"); o < r.length; o++) {
				var n = r[o].split("=");
				t[tryDecodeURIComponent(n[0])] = tryDecodeURIComponent(n[1]);
			}
		return t;
	}),
	(UA.prototype.synchronizeCriteoUid = function() {
		var e = this.cookieSynchronizerFactory();
		(this.ctoIdOnPublisherDomain = e.getClientSideUid().value),
			(this.isOptOut = e.getClientSideOptOut().value),
			(this.idfs = e.getClientSideIdfs().value),
			(this.secureId = e.getClientSideSecureId().value),
			(this.bundle = e.getBundle().value),
			e.synchronizeCriteoUid();
	}),
	(UA.prototype.getIdfs = function() {
		return [this.idfs, this.secureId].join(":");
	}),
	(UA.prototype.setIdfs = function(e) {
		var t = e.split(":");
		t[0] && (this.idfs = t[0]), t[1] && (this.secureId = t[1]);
	}),
	(UA.prototype.computeShouldIgnoreSilentMode = function() {
		return Math.floor(100 * Math.random()) < 5;
	}),
	(UA.prototype.setSilentModeIgnored = function() {
		this.silentModeIgnored = !0;
	}),
	(UA.prototype.checkIfUserHasOptOutForCCPA = function(t) {
		var i = this;
		this.ccpaPrivacyProvider.readyToRetrieve()
			? this.ccpaPrivacyProvider.retrieveCCPAConsent(function(e) {
					t(i.ccpaPrivacyProvider.hasUserOptOut(e));
			  })
			: t(!1);
	}),
	UA);
	function UA(e, t, i, o) {
		var r = this;
		this.charset = e.charset || e.characterSet || "";
		var n = DomManipulationTools.getHighestAccessibleWindow(t);
		(this.displayContext = this.getDisplayContext(n)),
			(this.highestAccessibleUrl = DomManipulationTools.getHighestAccessibleUrl(
				n
			)),
			(this.ccpaPrivacyProvider = i || new CCPAPrivacyProvider(t)),
			(this.cookieSynchronizerFactory =
				o ||
				function() {
					return new CookieSynchronizer(
						n.topFrame,
						r.debugMode,
						r.highestAccessibleUrl
					);
				}),
			this.checkIfUserHasOptOutForCCPA(function(e) {
				e || r.synchronizeCriteoUid();
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
	var PublisherTag = ((uB.prototype.push = function() {
		for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
		for (var i = 0, o = e; i < o.length; i++) {
			var r = o[i];
			this.events.push(r);
		}
		this.evalEvents();
	}),
	(uB.prototype.evalEvents = function() {
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
	(uB.VERSION = PublisherTagVersion),
	uB);
	function uB() {
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
		for (var o in ((t.prototype = i.prototype), i))
			i.hasOwnProperty(o) && (t[o] = i[o]);
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
					for (var i = 0, o = e; i < o.length; i++) {
						var r = o[i];
						"function" == typeof r && safeFunction(r)();
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
		var r;
		"string" == typeof e
			? (r = e)
			: ((r = getParam(e, "adUnit", "string")),
			  (t = getParam(e, "passback", "function")),
			  (i = getParam(e, "customRenderFunction", "function")),
			  (o = getParam(e, "minimumBidPrice", "number"))),
			void 0 !== r
				? void 0 !== t
					? ("function" != typeof i &&
							(i = function(e) {
								RenderAd({ bidId: e.id, containerId: r });
							}),
					  (window.Criteo.passbackEvents = window.Criteo.passbackEvents || []),
					  window.Criteo.passbackEvents.push(function() {
							var e = GetBidsForAdUnit(r)[0];
							e && (void 0 === o || e.cpm > o) ? i(e) : t(r);
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
