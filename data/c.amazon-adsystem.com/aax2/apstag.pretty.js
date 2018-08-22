/*! amazon-dtb-javascript-api - apstag - v7.13.00 - 2018-08-20 16:12:22 */
!(function(t) {
	var e = {};
	function n(r) {
		if (e[r]) return e[r].exports;
		var o = (e[r] = { i: r, l: !1, exports: {} });
		return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
	}
	(n.m = t),
		(n.c = e),
		(n.d = function(t, e, r) {
			n.o(t, e) ||
				Object.defineProperty(t, e, {
					configurable: !1,
					enumerable: !0,
					get: r
				});
		}),
		(n.r = function(t) {
			Object.defineProperty(t, "__esModule", { value: !0 });
		}),
		(n.n = function(t) {
			var e =
				t && t.__esModule
					? function() {
							return t.default;
					  }
					: function() {
							return t;
					  };
			return n.d(e, "a", e), e;
		}),
		(n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(n.p = ""),
		n((n.s = 8));
})([
	function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.DISPLAY_TARGETING_KEYS = ["amznbid", "amzniid", "amznsz", "amznp"]),
			(e.VIDEO_TARGETING_KEYS = [
				"amznbid",
				"amzniid",
				"amznp",
				"r_amznbid",
				"r_amzniid",
				"r_amznp"
			]),
			(e.BID_STATES = {
				new: "NEW",
				exposed: "EXPOSED",
				set: "SET",
				rendered: "RENDERED"
			}),
			(e.DEBUG_LOCAL_STORAGE_KEY = "apstagDebug"),
			(e.DEBUG_GLOBAL = "apstagDEBUG"),
			(e.DEBUG_CONSOLE_LOCAL_STORAGE_KEY = "apstagDebugConsole"),
			(e.CFG_LOCAL_STORAGE_KEY = "apstagCfg"),
			(e.NO_LOCAL_STORAGE_SUPPORT_MAGIC_NUNMBER_FOR_AAX = 0),
			(e.MINIMUM_BID_TIMEOUT = 0),
			(e.MOCKBID = {
				amznbid: "testBid",
				amzniid: "testImpression",
				amznp: "testP",
				crid: "testCrid"
			}),
			(e.MEDIA_TYPES_MAGIC_STRING_FOR_AAX = { video: "v" }),
			(e.SLOT_STATE_KEYS = ["amznbid", "amznp"]),
			(e.FIRST_PARTY_COOKIE_KEYS = {
				__apsid: { urlParam: "ck" },
				__aps_id_p: { urlParam: "ckp" },
				aps_ext_917: { urlParam: "st" }
			}),
			(e.SLOT_STATES = { noRequest: "0", bidInFlight: "1", noBid: "2" }),
			(e.APSTAG_CONSOLE_ENABLED = "apstagConsoleEnabled"),
			(e.APSTAG_CONSOLE_DISABLED = "apstagConsoleDisabled"),
			(e.AAX_RESP_REMAP_COOKIE_KEY = "cr"),
			(e.SELF_SERVE_PUB_SRC = "600"),
			(e.LIBRARY_VERSION = "7.13.00"),
			(e.PROTOCOL = (function() {
				try {
					var t = window.document.location.protocol;
					if ("h" === t[0]) return t + "//";
				} catch (t) {}
				return "https://";
			})());
	},
	function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 });
		var r =
			"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
				? function(t) {
						return typeof t;
				  }
				: function(t) {
						return t &&
							"function" == typeof Symbol &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? "symbol"
							: typeof t;
				  };
		(e.shouldSample = function(t) {
			try {
				var e = parseInt(t, 10);
				if (!isNaN(e)) {
					if (e <= 0) return !1;
					if (e >= 100) return !0;
					if (100 * Math.random() <= e) return !0;
				}
				return !1;
			} catch (t) {
				return !1;
			}
		}),
			(e.getRandomArrayElement = function(t) {
				return a(t)[0];
			}),
			(e.shuffleArray = a),
			(e.getRand = function() {
				return "" + Math.round(1e12 * Math.random()) + Date.now();
			}),
			(e.isObject = i),
			(e.isArray = c),
			(e.safeObjectHasProp = s),
			(e.hasLocalStorage = u),
			(e.checkAllPossibleBidCacheIds = function(t, e, n) {
				return t.amzniid === e || t[n + "amzniid"] === e || t.amzniid_sp === e;
			}),
			(e.inArray = d),
			(e.isDebugEnabled = function(t) {
				if (!u()) return !1;
				var e = window.localStorage.getItem(o.DEBUG_LOCAL_STORAGE_KEY);
				if (null === e) return !1;
				if ("true" === e) return !0;
				if ("false" === e) return !1;
				var n = void 0;
				try {
					n = JSON.parse(e);
				} catch (t) {
					return !1;
				}
				return !(null === n || !c(n)) && d(n, t);
			}),
			(e.getDebugValue = function(t) {
				return s(window, o.DEBUG_GLOBAL) && s(window[o.DEBUG_GLOBAL], t)
					? window[o.DEBUG_GLOBAL][t]
					: "";
			});
		var o = n(0);
		function a(t) {
			var e = t.length,
				n = void 0,
				r = void 0;
			for (
				t = [].concat(
					(function(t) {
						if (Array.isArray(t)) {
							for (var e = 0, n = Array(t.length); e < t.length; e++)
								n[e] = t[e];
							return n;
						}
						return Array.from(t);
					})(t)
				);
				0 !== e;

			)
				(r = Math.floor(Math.random() * e)),
					(n = t[--e]),
					(t[e] = t[r]),
					(t[r] = n);
			return t;
		}
		function i(t) {
			return "object" === (void 0 === t ? "undefined" : r(t)) && null !== t;
		}
		function c(t) {
			return "[object Array]" === Object.prototype.toString.call(t);
		}
		function s(t, e) {
			return (
				i(t) &&
				Object.prototype.hasOwnProperty.call(t, e) &&
				void 0 !== t[e] &&
				"" !== t[e]
			);
		}
		function u() {
			var t = "amzn_lsTest";
			try {
				return (
					window.localStorage.setItem(t, t),
					window.localStorage.removeItem(t),
					!0
				);
			} catch (t) {
				return !1;
			}
		}
		function d(t, e) {
			return -1 !== t.indexOf(e);
		}
	},
	function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }), (e.store = void 0);
		var r =
			Object.assign ||
			function(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = arguments[e];
					for (var r in n)
						Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
				}
				return t;
			};
		e.reducer = d;
		var o = n(0),
			a = n(1);
		function i(t, e, n) {
			return (
				e in t
					? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
					  })
					: (t[e] = n),
				t
			);
		}
		function c(t) {
			if (Array.isArray(t)) {
				for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
				return n;
			}
			return Array.from(t);
		}
		var s = void 0,
			u = [];
		function d() {
			var t =
					arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
				e = arguments[1];
			return {
				AAXReqs: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? []
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "RECORD_AAX_REQUEST":
							return [].concat(c(t), [r({}, e.data)]);
						case "RECORD_AAX_RESPONSE_PROP":
							return t.map(function(t) {
								return (
									(t = r({}, t)).bidReqID === e.bidReqID &&
										(t[e.key] = e.value),
									t
								);
							});
						default:
							return [].concat(c(t));
					}
				})(t.AAXReqs, e),
				aaxViewabilityEnabled: (function() {
					var t =
							!(arguments.length <= 0 || void 0 === arguments[0]) &&
							arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "SET_VIEWABILITY":
							return e.viewability;
						default:
							return t;
					}
				})(t.aaxViewabilityEnabled, e),
				bidConfigs: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? {}
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "RECORD_ORIGINAL_BID_CONFIG":
							return r({}, t, i({}, e.bidConfig.bidReqID, r({}, e.bidConfig)));
						default:
							return r({}, t);
					}
				})(t.bidConfigs, e),
				bidReqs: (function() {
					var t,
						e =
							arguments.length <= 0 || void 0 === arguments[0]
								? {}
								: arguments[0],
						n = arguments[1];
					switch (n.type) {
						case "ADD_CHUNKED_REQUESTS":
							return r(
								{},
								e,
								i(
									{},
									n.fid,
									r({}, e[n.fid], { networkReqs: new Array(n.numChunks) })
								)
							);
						case "NEW_FETCH_BID_REQUEST":
							return r(
								{},
								e,
								i({}, n.fid, { pto: n.pto, hasCallbackExecuted: !1 })
							);
						case "RECORD_CALLBACK":
							return r(
								{},
								e,
								i({}, n.fid, r({}, e[n.fid], { hasCallbackExecuted: !0 }))
							);
						case "RECORD_NETWORK_EXCHANGE":
							return r(
								{},
								e,
								i(
									{},
									n.fid,
									r({}, e[n.fid], {
										networkReqs: r(
											[].concat(c(e[n.fid].networkReqs)),
											i(
												{},
												n.networkID,
												r(
													{},
													e[n.fid].networkReqs[n.networkID],
													((t = {}),
													i(t, n.exchangeType + "Time", n.timestamp),
													i(t, "inFlight", "request" === n.exchangeType),
													t)
												)
											)
										)
									})
								)
							);
						case "RECORD_TIMEOUT":
							return r(
								{},
								e,
								i(
									{},
									n.fid,
									r({}, e[n.fid], {
										networkReqs: e[n.fid].networkReqs.map(function(t) {
											return t.inFlight ? r({}, t, { timeOut: n.timeOut }) : t;
										})
									})
								)
							);
						default:
							return r({}, e);
					}
				})(t.bidReqs, e),
				bsPixels: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? {}
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "RECORD_BID_INFO_SENT":
							return r({}, t, i({}, e.bidInfo.iid, e.bidInfo.state));
						default:
							return r({}, t);
					}
				})(t.bsPixels, e),
				cfg: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? {
										DEFAULT_AAX_HOST:
											(0, a.getDebugValue)("host") || "aax.amazon-adsystem.com",
										CSM_JS: "//c.amazon-adsystem.com/aax2/csm.js.gz",
										CSM_RTB_COMMUNICATOR_JS:
											"//c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js",
										DEBUG_APP_HTML:
											"//c.amazon-adsystem.com/aax2/debugApp.html",
										DEFAULT_TIMEOUT: 2e3,
										DTB_PATH: "/e/dtb",
										PIXEL_PATH: "/x/px/",
										LATENCY_SAMPLING_RATE: 1,
										COOKIE_MATCH_DELAY: 0,
										MAX_SLOTS_PER_REQUEST: 1
								  }
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "SET_CFG":
							return r({}, t, e.cfg);
						default:
							return r({}, t);
					}
				})(t.cfg, e),
				cmpFired: (function() {
					var t =
						!(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];
					switch (arguments[1].type) {
						case "CMP_FIRED":
							return !0;
						default:
							return t;
					}
				})(t.cmpFired, e),
				config: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? {}
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "SET_CONFIG":
							return r({}, e.config, {
								gdpr: r({ cmpTimeout: e.defaultCmpTimeout }, e.config.gdpr),
								isSelfServePub: e.config.pubID && e.config.pubID.length >= 5
							});
						default:
							return r({}, t);
					}
				})(t.config, e),
				DFP: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? { slots: [], noBidSlotIDs: [] }
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "DFP_SLOT_RENDER_ENDED_SET":
							return r({}, t, { slotRenderEndedSet: !0 });
						case "NO_BID_ON_DFP_SLOTS":
							return r({}, t, {
								noBidSlotIDs: t.noBidSlotIDs.concat(e.slotIDs)
							});
						case "REQUESTED_BID_FOR_DFP_SLOTS":
							return r({}, t, {
								noBidSlotIDs: t.noBidSlotIDs.filter(function(t) {
									return !(0, a.inArray)(e.slotIDs, t);
								})
							});
						default:
							return {
								slots: [].concat(c(t.slots)),
								noBidSlotIDs: [].concat(c(t.noBidSlotIDs))
							};
					}
				})(t.DFP, e),
				eventLog: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? []
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "LOG_EVENT":
							return [].concat(c(t), [r({}, e.event)]);
						default:
							return [].concat(c(t));
					}
				})(t.eventLog, e),
				experiments: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? {}
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "SHOULD_CHUNK_REQUESTS":
							return r(
								{ chunkRequests: !0 === t.shouldSampleLatency && e.value },
								t
							);
						case "SHOULD_SAMPLE_LATENCY":
							return r({}, t, { shouldSampleLatency: e.value });
						default:
							return r({}, t);
					}
				})(t.experiments, e),
				gdpr: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? null
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "SET_GDPR_CONFIG":
							return null === e.config ? null : r({}, e.config);
						default:
							return null === t ? t : r({}, t);
					}
				})(t.gdpr, e),
				gdprQue: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? []
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "ADD_GDPR_QUE_ITEM":
							return [].concat(c(t), [e.func]);
						case "CLEAR_GDPR_QUE":
							return [];
						default:
							return [].concat(c(t));
					}
				})(t.gdprQue, e),
				Q: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? []
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "SET_Q":
							return [].concat(c(e.Q));
						default:
							return [].concat(c(t));
					}
				})(t.Q, e),
				slotBids: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? {}
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "BID_STATE_CHANGE":
							return r(
								{},
								t,
								i(
									{},
									e.slotID,
									t[e.slotID].map(function(t) {
										var n = {};
										return (
											(0, a.checkAllPossibleBidCacheIds)(
												t,
												e.bidID,
												e.dealId
											) &&
												((n.bidState = e.bidState),
												e.bidState === o.BID_STATES.rendered
													? (n.renderTime = e.ts)
													: e.bidState === o.BID_STATES.set &&
													  (n.setAtTimes = (0, a.safeObjectHasProp)(
															t,
															"setAtTimes"
													  )
															? [].concat(c(t.setAtTimes), [e.ts])
															: [e.ts])),
											r({}, t, n)
										);
									})
								)
							);
						case "UPDATE_BID_INFO_PROP":
							return void 0 === t[e.slotID] ||
								t[e.slotID].filter(function(t) {
									return (0, a.checkAllPossibleBidCacheIds)(t, e.iid, e.dealId);
								}).length < 1
								? r({}, t)
								: r(
										{},
										t,
										i(
											{},
											e.slotID,
											t[e.slotID].map(function(t) {
												return (
													(t = r({}, t)),
													(0, a.checkAllPossibleBidCacheIds)(
														t,
														e.iid,
														e.dealId
													) && (t[e.key] = e.value),
													t
												);
											})
										)
								  );
						case "UPDATE_SLOT_BIDS":
							return r(
								{},
								t,
								e.bids.reduce(function(e, n) {
									return (
										(0, a.safeObjectHasProp)(e, n.slotID)
											? (e[n.slotID] = [].concat(c(e[n.slotID]), [r({}, n)]))
											: (0, a.safeObjectHasProp)(t, n.slotID)
												? (e[n.slotID] = [].concat(c(t[n.slotID]), [r({}, n)]))
												: (e[n.slotID] = [r({}, n)]),
										e
									);
								}, {})
							);
						default:
							return r({}, t);
					}
				})(t.slotBids, e),
				sync917: (function() {
					var t =
							!(arguments.length <= 0 || void 0 === arguments[0]) &&
							arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "SET_SYNC_917":
							return e.value;
						default:
							return t;
					}
				})(t.sync917, e),
				targetingKeys: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? {}
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "UPDATE_SLOT_BIDS":
							return r(
								{},
								t,
								e.bids.reduce(function(e, n) {
									return (
										(0, a.safeObjectHasProp)(t, n.slotID)
											? (e[n.slotID] = [].concat(
													c(t[n.slotID]),
													c(
														(n.targeting
															? n.targeting
															: o.DISPLAY_TARGETING_KEYS
														).filter(function(e) {
															return -1 === t[n.slotID].indexOf(e);
														})
													)
											  ))
											: (e[n.slotID] = n.targeting
													? n.targeting
													: o.DISPLAY_TARGETING_KEYS),
										e
									);
								}, {})
							);
						default:
							return r({}, t);
					}
				})(t.targetingKeys, e),
				tests: (function() {
					var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? {}
								: arguments[0],
						e = arguments[1];
					switch (e.type) {
						case "UPDATE_TEST":
							return r(
								{},
								t,
								i({}, e.id, { name: e.name, status: e.status, case: e.case })
							);
						default:
							return r({}, t);
					}
				})(t.tests, e)
			};
		}
		var l = {
			getState: function() {
				return s;
			},
			dispatch: function(t) {
				(s = d(s, t)),
					u.forEach(function(t) {
						return t();
					});
			},
			subscribe: function(t) {
				u.push(t);
			}
		};
		(0, a.isDebugEnabled)("redux") &&
			(0, a.hasLocalStorage)() &&
			(0, a.safeObjectHasProp)(window, "__REDUX_DEVTOOLS_EXTENSION__") &&
			(e.store = l = window.__REDUX_DEVTOOLS_EXTENSION__(d)),
			l.dispatch({ type: "NOOP" }),
			(e.store = l);
	},
	function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.GDPR = e.cmpLocalStorageChanged = e.cmpResponseKey = void 0);
		var r =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function(t) {
							return typeof t;
					  }
					: function(t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t;
					  },
			o =
				Object.assign ||
				function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
					}
					return t;
				},
			a = n(1);
		Number.isInteger =
			Number.isInteger ||
			function(t) {
				return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
			};
		var i = (e.cmpResponseKey = "cmpRTimesA"),
			c = (e.cmpLocalStorageChanged = "crfgL0cSt0rC");
		e.GDPR = function(t, e, n) {
			t = o({}, t);
			var s = void 0,
				u = 50,
				d = [1, 1, 3, 5],
				l = 0,
				f = !1,
				p = "crfgL0cSt0r",
				g = !1,
				m = "cmp-timeout";
			try {
				!(function() {
					e = n.wrapFunction(e, "GdprCallback");
					var _ = function(t) {
							try {
								if (!(0, a.hasLocalStorage)()) return;
								window.localStorage.setItem(c, "0"),
									(!1 !== g &&
										g.enabled === t.enabled &&
										g.consent === t.consent) ||
										(window.localStorage.setItem(c, "2"),
										window.localStorage.setItem(
											p,
											JSON.stringify({ enabled: t.enabled, consent: t.consent })
										),
										!1 !== g &&
											((b.lsStatus = "cmp-override"),
											window.localStorage.setItem(c, "1"))),
									(window.document.cookie = p + "=true;max-age=604800");
							} catch (t) {
								return void n.reportError(t, "__gdpr_save__");
							}
						},
						S = function(t) {
							try {
								(t = o({}, t)),
									Object.keys(t.log).map(function(e) {
										"string" == typeof t.log[e] &&
											-1 !== t.log[e].indexOf("/") &&
											(t.log[e] = encodeURIComponent(t.log[e]));
									}),
									(t.log = JSON.stringify(t.log));
							} catch (t) {
								n.reportError(t, "__gdpr_stringify_log__");
							}
							e(t);
						};
					("object" === (void 0 === t ? "undefined" : r(t)) && null !== t) ||
						(t = {});
					var b = {
						cmpGlobal: t.cmpGlobal,
						cmpTimeout: t.cmpTimeout,
						enabled: t.enabled
					};
					(0, a.hasLocalStorage)() &&
						(g = (function() {
							try {
								var t = window.localStorage.getItem(p);
								return null !== t && JSON.parse(t);
							} catch (t) {
								return n.reportError(t, "__gdpr_parse_ls__"), !1;
							}
						})()),
						!1 !== g &&
							(void 0 === window.document.cookie ||
							-1 === window.document.cookie.indexOf(p + "=true")
								? ((g = !1), (b.lsStatus = "invalid"))
								: ((b.lsStatus = "present"),
								  (u = 50),
								  (m = "cmp-timeout-cfb"))),
						"string" != typeof t.cmpGlobal && (t.cmpGlobal = "__cmp"),
						Number.isInteger(t.cmpTimeout) || (t.cmpTimeout = u);
					var h,
						E,
						y = ((E = { log: b }),
						void 0 === (h = t).enabled
							? E
							: !1 === h.enabled
								? ((E.enabled = 0), E)
								: (Number.isInteger(h.enabled)
										? (E.enabled = h.enabled)
										: (E.enabled = 1),
								  "string" == typeof h.consent && (E.consent = h.consent),
								  E));
					!1 !== g && (y = o({}, g, y)),
						!1 === g ||
							(g.enabled === y.enabled && g.consent === y.consent) ||
							(b.lsStatus = "pub-override"),
						(function t(e, r) {
							if (
								!(0, a.safeObjectHasProp)(window, e.cmpGlobal) ||
								"function" != typeof window[e.cmpGlobal]
							)
								return (
									r({ error: "no-cmp" }),
									void (l < d.length && (setTimeout(t, 1e3 * d[l], e, r), l++))
								);
							setTimeout(r, e.cmpTimeout, { timeout: !0 }, !0),
								(s = Date.now());
							try {
								window[e.cmpGlobal]("getConsentData", null, r);
							} catch (t) {
								r({ error: "cmp-internal-error" }),
									n.reportError(t, "__gdpr_cmp__");
							}
						})(
							t,
							function(t, e, o) {
								if (
									!f ||
									"object" !== (void 0 === e ? "undefined" : r(e)) ||
									null === e ||
									!e.timeout
								) {
									f = !0;
									try {
										return "object" === (void 0 === e ? "undefined" : r(e)) &&
											null !== e &&
											void 0 !== e.error
											? ((b.status = e.error), void S(t))
											: o &&
											  "object" === (void 0 === e ? "undefined" : r(e)) &&
											  null !== e
												? e.timeout
													? ((b.status = m), void S(t))
													: ((function(t) {
															if ((0, a.hasLocalStorage)())
																try {
																	var e = window.localStorage.getItem(i);
																	(e = null !== e ? JSON.parse(e) : []).push(t),
																		window.localStorage.setItem(
																			i,
																			JSON.stringify(e)
																		);
																} catch (t) {
																	n.reportError(t, "__gdpr_save_time__");
																}
													  })(Date.now() - s),
													  (b.status = "success"),
													  e.gdprApplies
															? ((t.enabled = 1),
															  (t.consent = e.consentData),
															  _(t),
															  void S(t))
															: ((t.enabled = 0),
															  delete t.consent,
															  _(t),
															  void S(t)))
												: ((b.status = "cmp-error"), void S(t));
									} catch (e) {
										return (
											n.reportError(e, "__gdpr_cmp_callback__"),
											(b.status = "func-error"),
											void S(t)
										);
									}
								}
							}.bind(null, y)
						);
				})();
			} catch (t) {
				f || e({ log: '{"status":"global-func-error"}' }),
					(f = !0),
					n.reportError(t, "__gdpr_global_func__");
			}
		};
	},
	function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.pixels = e.pixelQueue = void 0),
			(e.noBidCacheIdPixel = function(t) {
				return d(u() + "p/PH/" + s(t));
			}),
			(e.bidCacheIdPixel = function(t, e) {
				return d("" + u() + t + "/" + s(e));
			}),
			(e.sendPixels = function() {
				i || ((i = !0), a.forEach(d));
			}),
			(e.resetSendPixels = function() {
				(i = !1), (e.pixels = c = []), (e.pixelQueue = a = []);
			});
		var r = n(0),
			o = n(2),
			a = (e.pixelQueue = []),
			i = !1,
			c = (e.pixels = []);
		function s(t) {
			t._tl = "aps-tag";
			var e = JSON.stringify(t);
			return (e = e.replace(/\\.{1}/g, "")), encodeURIComponent(e);
		}
		function u() {
			var t = o.store.getState().cfg,
				e = t.DEFAULT_AAX_HOST,
				n = t.PIXEL_PATH;
			return "" + r.PROTOCOL + e + n;
		}
		function d(t) {
			if (i) {
				var e = new Image();
				return (e.src = t), c.push(e), e;
			}
			return a.push(t), t;
		}
	},
	function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 });
		var r =
			"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
				? function(t) {
						return typeof t;
				  }
				: function(t) {
						return t &&
							"function" == typeof Symbol &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? "symbol"
							: typeof t;
				  };
		(e.getMetricFromPerformanceObject = a),
			(e.getResourcePerformanceObject = function(t, e) {
				try {
					var n = t.performance
						.getEntriesByType("resource")
						.filter(function(t) {
							return -1 !== t.name.indexOf(e);
						})[0];
					return void 0 === n ? null : n;
				} catch (t) {
					return null;
				}
			}),
			(e.getWindowPerformanceMetric = function(t, e) {
				try {
					var n = t.performance.timing[e];
					return void 0 === n ? o : n;
				} catch (t) {
					return o;
				}
			}),
			(e.isResourceCached = function(t) {
				try {
					var e = (function() {
						if (
							0 ===
							[
								"redirectStart",
								"redirectEnd",
								"domainLookupStart",
								"domainLookupEnd",
								"connectStart",
								"connectEnd",
								"requestStart",
								"responseStart",
								"secureConnectionStart"
							].reduce(function(e, n) {
								return e + a(t, n);
							}, 0)
						)
							return { v: null };
						var e = a(t, "fetchStart");
						return {
							v: [
								"domainLookupStart",
								"domainLookupEnd",
								"connectStart",
								"connectEnd"
							].reduce(function(n, r) {
								return n && a(t, r) === e;
							}, !0)
						};
					})();
					if ("object" === (void 0 === e ? "undefined" : r(e))) return e.v;
				} catch (t) {
					return null;
				}
			}),
			(e.getTimeOrigin = function() {
				try {
					var t = window.performance.timeOrigin;
					return (
						void 0 === t && (t = window.performance.timing.navigationStart), t
					);
				} catch (t) {
					return o;
				}
			});
		var o = 0;
		function a(t, e) {
			try {
				return "number" != typeof t[e] ? o : Math.round(t[e]);
			} catch (t) {
				return o;
			}
		}
	},
	function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.default = function(t) {
				var e = this;
				(this.testId = (0, o.getRand)()),
					(t.sample = void 0 === t.sample ? 1 : t.sample),
					(t.delay = void 0 === t.delay ? 5e3 : t.delay);
				var n = function(n) {
						i("pixeling"),
							(n._type = encodeURIComponent(t.name + "-tst")),
							Object.keys(t.cases).length > 1 &&
								(n._case = encodeURIComponent(e.runningCase)),
							(0, a.noBidCacheIdPixel)(n),
							i("done");
					},
					i = function(t) {
						(e.status = t),
							r.store.dispatch({
								type: "UPDATE_TEST",
								id: e.testId,
								status: e.status,
								name: e.name,
								case: e.runningCase
							});
					};
				(this.name = t.name),
					(this.sampleRate = t.sample),
					(this.runningCase = ""),
					(this.status = ""),
					i("config"),
					(0, o.shouldSample)(t.sample)
						? (i("waiting"),
						  setTimeout(function() {
								i("setup"),
									(e.runningCase = (0, o.getRandomArrayElement)(
										Object.keys(t.cases)
									)),
									i("running"),
									t.run(n, t.cases[e.runningCase]);
						  }, t.delay))
						: i("nosample");
			});
		var r = n(2),
			o = n(1),
			a = n(4);
	},
	function(t, e, n) {
		"use strict";
		var r =
				Object.assign ||
				function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var r in n)
							Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
					}
					return t;
				},
			o =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function(t) {
							return typeof t;
					  }
					: function(t) {
							return t &&
								"function" == typeof Symbol &&
								t.constructor === Symbol &&
								t !== Symbol.prototype
								? "symbol"
								: typeof t;
					  },
			a = n(6),
			i = p(a),
			s = n(3),
			c = n(2),
			u = n(1),
			d = n(0),
			l = n(5),
			f = n(4);
		function p(t) {
			return t && t.__esModule ? t : { default: t };
		}
		function g(t) {
			if (Array.isArray(t)) {
				for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
				return n;
			}
			return Array.from(t);
		}
		function m(t, e, n) {
			return (
				e in t
					? Object.defineProperty(t, e, {
							value: n,
							enumerable: !0,
							configurable: !0,
							writable: !0
					  })
					: (t[e] = n),
				t
			);
		}
		function _(t, e) {
			var n = {};
			for (var r in t)
				e.indexOf(r) >= 0 ||
					(Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
			return n;
		}
		var S = (0, u.shouldSample)(10),
			b;
		function h(t, e, n, r, o) {
			try {
				if (!S) return;
				var a = {
					lv: d.LIBRARY_VERSION,
					ts: Date.now(),
					url: encodeURIComponent(window.document.documentURI),
					r: encodeURIComponent(window.document.referrer),
					_type: "apstagError",
					e: { et: t.name, el: e, msg: t.message }
				};
				void 0 !== n && (n ? ((a.src = r), (a.pubid = o)) : (a.src = o)),
					(0, f.noBidCacheIdPixel)(a);
			} catch (t) {}
		}
		try {
			var E = ((b = !1),
			(0, u.safeObjectHasProp)(window, "apstag") &&
				(0, u.safeObjectHasProp)(window.apstag, "debug") &&
				(b = !0),
			b);
			E ||
				(function() {
					var t = (0, l.getWindowPerformanceMetric)(window, "navigationStart"),
						e = (0, u.getRand)(),
						n = ((a = !1),
						"function" == typeof XMLHttpRequest &&
							void 0 !== new XMLHttpRequest().withCredentials &&
							(a = !0),
						a),
						a,
						p = !(
							!(0, u.hasLocalStorage)() ||
							window.localStorage.getItem(d.DEBUG_CONSOLE_LOCAL_STORAGE_KEY) !==
								d.APSTAG_CONSOLE_ENABLED
						);
					function S() {
						try {
							return window.top !== window.self
								? encodeURIComponent(document.referrer)
								: "";
						} catch (t) {
							return (
								Wt(t, "__error-detectIframeAndGetURL__"),
								encodeURIComponent(document.documentURI)
							);
						}
					}
					function b() {
						var t, e;
						try {
							try {
								e = window.top.document.referrer;
							} catch (t) {
								Wt(t, "__error-getPageReferrerURL-1__"),
									(e = window.document.referrer);
							}
							t = encodeURIComponent(e);
						} catch (t) {
							Wt(t, "__error-getPageReferrerURL-2__");
						}
						return t;
					}
					function E() {
						var t = (0, u.getDebugValue)("url");
						if ("" !== t) return encodeURIComponent(t);
						var e = encodeURIComponent(document.documentURI);
						try {
							((e = encodeURIComponent(window.top.location.href)) &&
								void 0 !== e) ||
								(e = S());
						} catch (t) {
							Wt(t, "__error-getReferrerURL__"), (e = S());
						}
						return e;
					}
					function y() {
						if (!(0, u.hasLocalStorage)())
							return d.NO_LOCAL_STORAGE_SUPPORT_MAGIC_NUNMBER_FOR_AAX;
						var t = c.store.getState();
						return (0, u.safeObjectHasProp)(t, "cfg") &&
							(0, u.safeObjectHasProp)(t.cfg, "v")
							? t.cfg.v
							: null;
					}
					function I(t) {
						return encodeURIComponent(JSON.stringify(t));
					}
					!(function() {
						if ((0, u.hasLocalStorage)()) {
							var t = localStorage.getItem(d.CFG_LOCAL_STORAGE_KEY);
							if (t && "undefined" !== t) {
								var e = JSON.parse(t);
								c.store.dispatch({ type: "SET_CFG", cfg: e });
							}
						}
					})();
					var O = ((D = {}),
						(v = Date.now()),
						(T = 0),
						{
							addTimer: function(t, e) {
								e || (e = Date.now()), (D[t] = e - v);
							},
							set: function(t, e) {
								D[t] = e;
							},
							schedule: function(t, e) {
								t || (t = 5e3),
									e || (e = "PH"),
									(e += "/"),
									setTimeout(function() {
										var t;
										(D.i = T),
											(D.t0 = v),
											(D.site = ((t = decodeURIComponent(E())).indexOf("://") >
											-1
												? t.split("/")[2]
												: t.split("/")[0]
											).split(":")[0]),
											(0, f.noBidCacheIdPixel)(D),
											(D = {}),
											(v = Date.now()),
											T++;
									}, t);
							}
						}),
						D,
						v,
						T;
					function R(t) {
						(0, u.hasLocalStorage)() &&
							window.localStorage.setItem(d.DEBUG_LOCAL_STORAGE_KEY, t);
					}
					function A(t) {
						(0, u.hasLocalStorage)() &&
							window.localStorage.setItem(d.DEBUG_CONSOLE_LOCAL_STORAGE_KEY, t);
					}
					function P(t) {
						(t.ts = Date.now()),
							c.store.dispatch({ type: "LOG_EVENT", event: t });
					}
					function w(t) {
						function e(t) {
							if (!c.store.getState().cmpFired) {
								c.store.dispatch({ type: "CMP_FIRED" });
								var e = document.createElement("iframe");
								(e.style.display = "none"),
									(e.src = t),
									document.body.appendChild(e);
							}
						}
						document.readyState && "loading" === document.readyState
							? document.addEventListener
								? document.addEventListener(
										"DOMContentLoaded",
										function() {
											e(t);
										},
										!1
								  )
								: document.attachEvent &&
								  document.attachEvent("onreadystatechange", function() {
										"complete" === document.readyState && e(t);
								  })
							: e(t);
					}
					function C(t) {
						U(t);
					}
					function z(t) {
						try {
							var e = c.store.getState().cfg.COOKIE_MATCH_DELAY;
							window.setTimeout(function() {
								try {
									t && t.cmp && "" !== t.cmp && void 0 !== t.cmp
										? w(t.cmp)
										: t &&
										  t.cmpjs &&
										  "" !== t.cmpjs &&
										  void 0 !== t.cmpjs &&
										  C(t.cmpjs);
								} catch (t) {
									Wt(t, "__error-tryCookieMatch-1__");
								}
							}, e);
						} catch (t) {
							Wt(t, "__error-tryCookieMatch-2__");
						}
					}
					function L(t) {
						if (!t) return !1;
						try {
							var e = ~~Number(t);
							if (e > d.MINIMUM_BID_TIMEOUT) return e;
						} catch (t) {
							return Wt(t, "__error-getValidMilliseconds__"), !1;
						}
						return !1;
					}
					function B(t, e, n) {
						try {
							e &&
								"function" == typeof e &&
								(t.readyState
									? (t.onreadystatechange = function() {
											("loaded" !== t.readyState &&
												"complete" !== t.readyState) ||
												((t.onreadystatechange = null), e.apply(null, n));
									  })
									: (t.onload = function() {
											e.apply(null, n);
									  }));
						} catch (t) {
							Wt(t, "__error-safeOnload__");
						}
					}
					function x(t) {
						return (
							!c.store.getState().experiments.chunkRequests ||
							0 ===
								c.store
									.getState()
									.bidReqs[t.split("-")[0]].networkReqs.filter(function(t) {
										return t.inFlight;
									}).length
						);
					}
					function j(t, e) {
						!c.store.getState().bidReqs[t[0]].hasCallbackExecuted &&
							x(t[0]) &&
							(c.store.dispatch({ type: "RECORD_CALLBACK", fid: t[0] }), e());
					}
					function N(t) {
						c.store.getState().experiments.chunkRequests &&
							c.store.dispatch({
								type: "RECORD_NETWORK_EXCHANGE",
								fid: t[0],
								timestamp: Date.now(),
								exchangeType: "response",
								networkID: t[1]
							});
					}
					function q(t) {
						try {
							var e = new XMLHttpRequest();
							(e.onload = t.onload.bind(null, e)),
								(e.onerror = t.onerror),
								t.ontimeout && (e.ontimeout = t.ontimeout),
								t.withCredentials && (e.withCredentials = !0),
								e.open("GET", t.url),
								e.send(null);
						} catch (t) {
							Wt(t, "__error-xhr__");
						}
					}
					function M(t, e, n) {
						var r = n.split("-"),
							o = { url: t, withCredentials: !0 };
						try {
							(o.onload = function(t) {
								N(r), eval(t.responseText), j(r, e);
							}),
								(o.onerror = function() {
									N(r), j(r, e);
								}),
								q(o);
						} catch (t) {
							Wt(t, "__error-xhrBid__"), N(r), j(r, e);
						}
					}
					function k(t) {
						c.store.dispatch({
							type: "UPDATE_BID_INFO_PROP",
							slotID: t.slotID,
							key: "aaxImpReqTs",
							value: t.aaxImpReqTs,
							iid: t.amzniid
						});
					}
					function U(t, e, n) {
						if ((n || (n = document), t || !e || "function" != typeof e)) {
							var r = n.getElementsByTagName("script")[0],
								o = n.createElement("script");
							(o.type = "text/javascript"),
								(o.async = !0),
								(o.src = t),
								e && B(o, e),
								r.parentNode.insertBefore(o, r);
						} else e(!0);
					}
					function G() {
						var t,
							e = {},
							n = document.cookie.split("; ");
						return (
							(e.cookiesParams = ""),
							n.forEach(function(n) {
								if ((t = n.split("="))[0] in d.FIRST_PARTY_COOKIE_KEYS)
									switch (t[0]) {
										case "aps_ext_917":
											e.fb = t[1];
											break;
										default:
											e.cookiesParams +=
												"&" +
												d.FIRST_PARTY_COOKIE_KEYS[t[0]].urlParam +
												"=" +
												t[1];
									}
							}),
							e.fb ||
								c.store.getState().sync917 ||
								c.store.dispatch({ type: "SET_SYNC_917", value: !0 }),
							e
						);
					}
					function H(t) {
						var e = new Date();
						return e.setTime(e.getTime() + 1e3 * t), e.toGMTString();
					}
					function F(t) {
						if (t[d.AAX_RESP_REMAP_COOKIE_KEY])
							try {
								t[d.AAX_RESP_REMAP_COOKIE_KEY].forEach(function(t) {
									document.cookie =
										t.k + "=" + t.v + ";expires=" + H(t.exp) + ";";
								});
							} catch (t) {
								Wt(t, "__error-setFirstPartyCookies__");
							}
					}
					function K(t) {
						(0, u.safeObjectHasProp)(t, "cb") &&
							(c.store.dispatch({
								type: "RECORD_AAX_RESPONSE_PROP",
								bidReqID: t.cb,
								key: "resTs",
								value: Date.now()
							}),
							c.store.dispatch({
								type: "RECORD_AAX_RESPONSE_PROP",
								bidReqID: t.cb,
								key: "perf",
								value: (0, l.getResourcePerformanceObject)(window, t.cb)
							})),
							(0, u.safeObjectHasProp)(t, "cfg") &&
								c.store.dispatch({ type: "SET_CFG", cfg: t.cfg }),
							O.addTimer("br"),
							O.set("brs", t.punt ? "0" : "1"),
							(0, u.safeObjectHasProp)(t, "rm") && O.schedule(t.to, t.id),
							rt() && Ft(t);
					}
					function X(t) {
						z(t),
							F(t),
							(0, u.safeObjectHasProp)(t, "cfg") &&
								localStorage.setItem(
									d.CFG_LOCAL_STORAGE_KEY,
									JSON.stringify(t.cfg)
								),
							(0, u.safeObjectHasProp)(t, "st") &&
								t.st.includes(917) &&
								c.store.getState().sync917 &&
								(c.store.dispatch({ type: "SET_SYNC_917", value: !1 }), vt()),
							t.punt || (0, f.sendPixels)();
					}
					function Y(t, e) {
						var n = !1,
							r = null,
							o = function(e) {
								if (!n) {
									try {
										t(e), r && clearTimeout(r);
									} catch (t) {
										Wt(t, "__error-wrapCallback__");
									}
									n = !0;
								}
							},
							a = L(e);
						return (
							(r = window.setTimeout(
								o.bind(null, !0),
								a || c.store.getState().cfg.DEFAULT_TIMEOUT
							)),
							o.bind(null, !1)
						);
					}
					function Q() {
						try {
							return (
								(window.innerWidth ||
									document.documentElement.clientWidth ||
									document.body.clientWidth) +
								"x" +
								(window.innerHeight ||
									document.documentElement.clientHeight ||
									document.body.clientHeight)
							);
						} catch (t) {
							Wt(t, "__error-getWindowsDimensions__");
						}
						return "x";
					}
					function V(t) {
						if ("string" == typeof t && t.length > 0) return !0;
						if (Array.isArray(t)) {
							for (var e = 0; e < t.length; e++) {
								if ("string" != typeof t[e]) return !1;
								if (0 === t[e].length) return !1;
							}
							return !0;
						}
						return !1;
					}
					function J(t) {
						return I(
							t
								.map(function(t) {
									var e = {};
									return (
										(0, u.safeObjectHasProp)(t, "mediaType") &&
										"video" === t.mediaType
											? ((e.id = t.slotID),
											  (e.mt = d.MEDIA_TYPES_MAGIC_STRING_FOR_AAX.video))
											: (0, u.safeObjectHasProp)(t, "sizes") &&
											  ((e.sd = t.slotID),
											  (e.s = t.sizes.filter(u.isArray).map(function(t) {
													return t.join("x");
											  })),
											  (0, u.safeObjectHasProp)(t, "slotName") &&
													t.slotName !== t.slotID &&
													(e.sn = t.slotName)),
										(0, u.safeObjectHasProp)(t, "slotParams") &&
											"object" === o(t.slotParams) &&
											null !== t.slotParams &&
											((e.kv = {}),
											Object.keys(t.slotParams).forEach(function(n) {
												V(t.slotParams[n]) && (e.kv[n] = t.slotParams[n]);
											})),
										0 !== Object.keys(e).length ? e : r({}, t, { id: "error" })
									);
								})
								.filter(function(t) {
									return "error" !== t.id;
								})
						);
					}
					function W(t) {
						var e,
							n =
								t.blockedBidders && (0, u.isArray)(t.blockedBidders)
									? t.blockedBidders
									: c.store.getState().config.blockedBidders;
						return n && (0, u.isArray)(n) && (e = JSON.stringify(n)), e;
					}
					function Z(t, n) {
						var a,
							i,
							l = c.store.getState().cfg.DEFAULT_AAX_HOST,
							f = c.store.getState().cfg.DTB_PATH,
							p = c.store.getState().config.pubID,
							g = e,
							m = E(),
							_ = b(),
							S = Q(),
							h = d.LIBRARY_VERSION,
							O = G(),
							D = W(t),
							v = y(),
							T = {};
						if (
							(c.store.dispatch({
								type: "RECORD_AAX_REQUEST",
								data: {
									bidConfig: t,
									timeout: n,
									bidReqID: t.bidReqID,
									ws: S,
									url: m,
									rqTs: Date.now()
								}
							}),
							c.store.getState().experiments.chunkRequests)
						) {
							var R = t.bidReqID.split("-");
							c.store.dispatch({
								type: "RECORD_NETWORK_EXCHANGE",
								fid: R[0],
								networkID: R[1],
								timestamp: Date.now(),
								exchangeType: "request"
							});
						}
						(a = c.store.getState().config.isSelfServePub
							? "src=600&pubid=" + p
							: "src=" + p),
							(a +=
								"&u=" +
								m +
								"&pid=" +
								g +
								"&cb=" +
								t.bidReqID +
								"&ws=" +
								S +
								"&v=" +
								h +
								"&t=" +
								n),
							(0, u.safeObjectHasProp)(t, "slots") &&
								(a += "&slots=" + J(t.slots)),
							((0, u.safeObjectHasProp)(c.store.getState().config, "params") ||
								Object.keys(c.store.getState().experiments).length > 0) &&
								((i = r({}, c.store.getState().config.params, {
									apse: c.store.getState().experiments
								})),
								(a += "&pj=" + I(i))),
							O.cookiesParams && (a += O.cookiesParams),
							O.fb &&
								((T[917] = O.fb),
								(a +=
									"&" +
									d.FIRST_PARTY_COOKIE_KEYS.aps_ext_917.urlParam +
									"=" +
									encodeURIComponent(JSON.stringify(T)))),
							(v || v === d.NO_LOCAL_STORAGE_SUPPORT_MAGIC_NUNMBER_FOR_AAX) &&
								(a += "&cfgv=" + v);
						var A,
							P,
							w = (0, u.getDebugValue)("bidParams");
						return (
							"" !== w &&
								Object.keys(w).forEach(function(t) {
									a += "&" + t + "=" + w[t];
								}),
							_ && "" !== _ && (a += "&pr=" + _),
							D && (a += "&bb=" + D),
							"object" === o(c.store.getState().gdpr) &&
								null !== c.store.getState().gdpr &&
								((A = r({}, c.store.getState().gdpr)),
								(P = { enabled: "gdpre", consent: "gdprc", log: "gdprl" }),
								Object.keys(P)
									.filter(function(t) {
										return void 0 !== A[t];
									})
									.map(function(t) {
										switch (t) {
											case "log":
												if ((0, u.hasLocalStorage)()) {
													var e = window.localStorage.getItem(s.cmpResponseKey);
													if (null !== e) {
														try {
															e = JSON.parse(e);
														} catch (t) {
															e = null;
														}
														window.localStorage.removeItem(s.cmpResponseKey);
													}
													null !== e &&
														(A.log = JSON.stringify(
															r({}, JSON.parse(A.log), { rtimes: e })
														));
													var n = window.localStorage.getItem(
														s.cmpLocalStorageChanged
													);
													null !== n &&
														(window.localStorage.removeItem(
															s.cmpLocalStorageChanged
														),
														(A.log = JSON.stringify(
															r({}, JSON.parse(A.log), { cc: n })
														)));
												}
										}
										a += "&" + P[t] + "=" + encodeURIComponent(A[t]);
									})),
							"" + d.PROTOCOL + l + f + "/bid?" + a
						);
					}
					function $() {
						c.store.getState().Q.forEach(function(t) {
							"i" === t[0]
								? window.apstag.init.apply(null, t[1])
								: window.apstag.fetchBids.apply(null, t[1]);
						});
					}
					function tt(t) {
						return (
							c.store.dispatch({ type: "SET_GDPR_CONFIG", config: null }),
							c.store.dispatch({
								type: "SET_CONFIG",
								config: t,
								defaultCmpTimeout: c.store.getState().cfg.GDPR_CMP_TIMEOUT
							}),
							"success"
						);
					}
					function et() {
						var t = c.store.getState();
						return (
							(0, u.safeObjectHasProp)(t, "config") &&
							(0, u.safeObjectHasProp)(t.config, "deals") &&
							!0 === t.config.deals
						);
					}
					function nt() {
						var t = c.store.getState();
						return (
							(0, u.safeObjectHasProp)(t, "config") &&
							(0, u.safeObjectHasProp)(t.config, "adServer") &&
							"oas" === t.config.adServer
						);
					}
					function rt() {
						var t = c.store.getState();
						return (
							(0, u.safeObjectHasProp)(t, "config") &&
							(0, u.safeObjectHasProp)(t.config, "adServer") &&
							"googletag" === t.config.adServer
						);
					}
					function ot() {
						return (
							"undefined" != typeof googletag &&
							(0, u.safeObjectHasProp)(googletag, "apiReady") &&
							!0 === googletag.apiReady
						);
					}
					function at() {
						return "undefined" != typeof googletag && void 0 !== googletag.cmd;
					}
					function it(t) {
						var e = t.slotID;
						((0, u.safeObjectHasProp)(t, "mediaType") &&
							"video" === t.mediaType) ||
							((0, u.safeObjectHasProp)(window, "googletag") &&
								at() &&
								(ot()
									? st(e) && yt(t)
									: googletag.cmd.push(function() {
											it(t);
									  })));
					}
					function st(t) {
						var e;
						try {
							e = gt().filter(function(e) {
								return e.getSlotElementId() === t;
							})[0];
						} catch (t) {
							Wt(t, "__error-getGoogletagSlot__");
						}
						return e;
					}
					function ct(t) {
						return (0, u.safeObjectHasProp)(t, "amzniid")
							? t.amzniid
							: t.amzniid_sp;
					}
					function ut(t) {
						try {
							var e = c.store.getState().targetingKeys[t];
							if (ot() && (0, u.isArray)(e)) {
								var n = st(t);
								e.forEach(function(t) {
									return n.clearTargeting(t);
								});
							}
						} catch (t) {
							Wt(t, "__error-clearTargetingFromGPTSlot__");
						}
					}
					function dt(t) {
						var e;
						try {
							var n = c.store.getState().slotBids;
							(0, u.safeObjectHasProp)(n, t) &&
								n[t].forEach(function(t) {
									t.bidState === d.BID_STATES.set && (e = ct(t));
								});
						} catch (t) {
							Wt(t, "__error-findBidIDSetBySlotID__");
						}
						return e;
					}
					function lt(t) {
						try {
							if ((0, u.safeObjectHasProp)(c.store.getState().slotBids, t)) {
								var e = c.store.getState().slotBids[t].filter(function(t) {
									return t.bidState === d.BID_STATES.set;
								})[0];
								e &&
									e.bidState === d.BID_STATES.set &&
									c.store.dispatch({
										type: "BID_STATE_CHANGE",
										slotID: t,
										bidID: dt(t),
										bidState: d.BID_STATES.exposed
									});
							}
						} catch (t) {
							Wt(t, "__error-clearbidSetOnSlot__");
						}
					}
					function ft(t, e) {
						return (
							decodeURIComponent(t)
								.split("?")[0]
								.split("#")[0] ===
							decodeURIComponent(e)
								.split("?")[0]
								.split("#")[0]
						);
					}
					function pt(t, e) {
						return (
							t
								.map(function(t) {
									return (0, u.inArray)(e, t);
								})
								.filter(function(t) {
									return t;
								}).length === t.length
						);
					}
					function gt() {
						var t = [];
						try {
							ot() && (t = googletag.pubads().getSlots());
						} catch (t) {
							Wt(t, "__error-googletagSlots__");
						}
						return t;
					}
					function mt() {
						var t = {};
						try {
							Object.keys(c.store.getState().slotBids).forEach(function(e) {
								var n = c.store.getState().slotBids[e];
								if (
									!(
										n.filter(function(t) {
											return t.bidState === d.BID_STATES.set;
										}).length > 0
									)
								) {
									var o = n
										.filter(function(t) {
											return (
												Date.now() -
													c.store.getState().AAXReqs.filter(function(e) {
														return e.bidReqID === t.bidReqID;
													})[0].rqTs <
												24e4
											);
										})
										.filter(function(t) {
											return ft(
												E(),
												c.store.getState().AAXReqs.filter(function(e) {
													return e.bidReqID === t.bidReqID;
												})[0].url
											);
										})
										.filter(function(t) {
											return t.bidState !== d.BID_STATES.rendered;
										});
									o.length > 0 &&
										(t[e] = o
											.map(function(t) {
												var e = c.store.getState().AAXReqs.filter(function(e) {
													return e.bidReqID === t.bidReqID;
												})[0].rqTs;
												return r({}, t, { rqTs: e });
											})
											.reduce(function(t, e) {
												return t.rqTs > e.rqTs ? t : e;
											}));
								}
							});
						} catch (t) {
							Wt(t, "__error-getCurrentSlotBids__");
						}
						return t;
					}
					function _t(t, e) {
						return (0, u.isArray)(c.store.getState().targetingKeys[t])
							? e
								? ["amzniid_sp"]
								: c.store.getState().targetingKeys[t].filter(function(t) {
										return (
											t.indexOf("amzniid") > -1 && t.indexOf("amzniid_sp") < 0
										);
								  })
							: ["amzniid"];
					}
					function St(t, e) {
						var n, r;
						try {
							var o = c.store.getState().slotBids;
							Object.keys(o).forEach(function(a) {
								o[a].forEach(function(o) {
									_t(a, e).forEach(function(e) {
										o[e] === t &&
											((n = o),
											"amzniid_sp" === e
												? (r = "sp")
												: "amzniid" !== e &&
												  (r = e.substr(0, e.indexOf("amzniid"))));
									});
								});
							});
						} catch (t) {
							Wt(t, "__error-findSlotBidByBidID__");
						}
						return { slotBid: n, dealId: r };
					}
					function bt(t, e, n) {
						var r;
						return (
							e[n + "amzniid"] === t &&
								(r = n
									.split("_")
									.pop()
									.trim()),
							r
						);
					}
					function ht(t) {
						var e = {};
						return (
							t.slots.forEach(function(t) {
								"video" !== t.mediaType
									? (e[t.slotID] = t)
									: (t.slotID.indexOf("rsv-") >= 0 &&
											(t = {
												slotID: t.slotID.substring(4),
												r_amznbid: t.amznbid,
												r_amzniid: t.amzniid,
												r_amznp: t.amznp,
												mediaType: "video",
												targeting: ["r_amznbid", "r_amzniid", "r_amznp"]
											}),
									  e[t.slotID]
											? ((t.targeting = t.targeting.concat(
													e[t.slotID].targeting
											  )),
											  (e[t.slotID] = r({}, e[t.slotID], t)))
											: (e[t.slotID] = t));
							}),
							Object.keys(e).map(function(t) {
								return e[t];
							})
						);
					}
					function Et(t) {
						var e,
							n = ht(t),
							o = ["host", "ev", "cb", "cmp"];
						try {
							e = n.map(function(e) {
								var n = { bidState: d.BID_STATES.new };
								return (
									(0, u.safeObjectHasProp)(e, "amznsz") || (n.amznsz = e.size),
									o.forEach(function(e) {
										if ((0, u.safeObjectHasProp)(t, e)) {
											var r = t[e],
												o = e;
											"cb" === e && (o = "bidReqID"), (n[o] = r);
										}
									}),
									r({}, e, n)
								);
							});
						} catch (t) {
							Wt(t, "__error-convertAAXResponse__");
						}
						return e;
					}
					function yt(t) {
						try {
							var e,
								n = t.slotID,
								r = ct(t),
								o = t.targeting ? t.targeting : Ue("display");
							(e = st(n)) &&
								(Object.keys(t)
									.filter(function(t) {
										return (0, u.inArray)(o, t);
									})
									.forEach(function(n) {
										return e.setTargeting(n, t[n]);
									}),
								c.store.dispatch({
									type: "BID_STATE_CHANGE",
									slotID: n,
									bidID: r,
									bidState: d.BID_STATES.set,
									ts: Date.now()
								}));
						} catch (t) {
							Wt(t, "__error-applyTargetingToGPTSlot__");
						}
					}
					function It(t) {
						var e = mt();
						t.forEach(function(t) {
							e[t] && it(e[t]);
						});
					}
					function Ot() {
						var t = mt();
						Object.keys(t).forEach(function(e) {
							it(t[e]);
						});
					}
					function Dt(t) {
						try {
							t ? It(t) : Ot(),
								c.store.getState().DFP.slotRenderEndedSet ||
									(googletag.cmd.push(function() {
										googletag
											.pubads()
											.addEventListener("slotRenderEnded", function(t) {
												ut(t.slot.getSlotElementId()),
													lt(t.slot.getSlotElementId());
											});
									}),
									c.store.dispatch({ type: "DFP_SLOT_RENDER_ENDED_SET" }));
						} catch (t) {
							Wt(t, "__error-applyGPTSlotTargeting__");
						}
					}
					function vt() {
						var t = 197,
							e =
								"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
							n = "1881141382166183",
							r = "https://www.facebook.com/audiencenetwork/token/update";
						function o(t) {
							var e = JSON.parse(t),
								n = e.fbToken,
								r = "0" === n ? 432e5 : e.expAfter;
							document.cookie = "aps_ext_917=" + n + "; expires=" + r;
						}
						function a(n) {
							!(function(t, e, n) {
								var o;
								!(function(t, e) {
									var n = { url: t, withCredentials: !0 };
									try {
										(n.onload = function(t) {
											e(t.responseText);
										}),
											(n.onerror = function() {}),
											q(n);
									} catch (t) {
										Wt(t, "__error-fbTokenRequest__");
									}
								})(
									((o = e),
									r +
										"?partner=" +
										encodeURIComponent(t) +
										"&vr_token=" +
										encodeURIComponent(o)),
									n
								);
							})(
								n,
								(function() {
									for (var n = "VR_", r = 0; r < t; ++r)
										n += e.charAt(Math.floor(Math.random() * e.length));
									return n;
								})(),
								o
							);
						}
						"complete" === document.readyState
							? a(n)
							: window.addEventListener("load", function() {
									a(n);
							  });
					}
					function Tt(t) {
						var e = "?b=" + t.bidID + "&rnd=" + (0, u.getRand)(),
							n = "" + t.host + c.store.getState().cfg.DTB_PATH + "/imp";
						return (
							(0, u.safeObjectHasProp)(t, "pp") && (e += "&pp=" + t.pp),
							(0, u.safeObjectHasProp)(t, "amznp") && (e += "&p=" + t.amznp),
							(0, u.safeObjectHasProp)(t, "crID") && (e += "&crid=" + t.crID),
							(0, u.safeObjectHasProp)(t, "isSharedPMP") &&
								!0 === t.isSharedPMP &&
								(e += "&sp=true"),
							"1" === t.fif ? n + "j" + e : n + "i" + e
						);
					}
					function Rt(t) {
						var e = Date.now();
						return {
							_type: "renderPixel",
							dl: t.renderTime,
							rq: t.aaxImpReqTs,
							rd: e
						};
					}
					function At(t, e, n) {
						(0, f.bidCacheIdPixel)(t.amzniid, Rt(t)),
							n && n(t.doc, t.amzniid, e);
					}
					function Pt(t) {
						var e = t.doc.createElement("iframe");
						return (
							(e.frameBorder = 0),
							(e.marginHeight = 0),
							(e.marginWidth = 0),
							(e.topMargin = 0),
							(e.leftMargin = 0),
							(e.scrolling = "no"),
							(e.allowTransparency = !0),
							(e.width = t.sizes[0] + "px"),
							(e.height = t.sizes[1] + "px"),
							e
						);
					}
					function wt(t) {
						zt({
							bidID: t.amzniid,
							doc: t.document,
							pp: t.amznbid.split("_").pop(),
							host: t.amznhost.replace("http://", "https://"),
							adID: "amznad" + Math.round(1e6 * Math.random()),
							sizes: t.amznsz.split("x"),
							fif: !1,
							isAmp: !0,
							amznp: t.amznp,
							renderTime: t.dfpRenderTime
						});
					}
					function Ct(t) {
						try {
							var e = Pt(t);
							(e.id = "apstag-f-iframe-" + (0, u.getRand)()),
								(e.src = "about:blank"),
								t.doc.body.appendChild(e);
							var n = St(t.bidID, t.isSharedPMP).slotBid;
							e.onload = function() {
								At(n);
							};
							var r = t.html;
							e.contentWindow.document.open(),
								e.contentWindow.document.write(r),
								e.contentWindow.document.close();
						} catch (t) {
							Wt(t, "__error-loadAdIntoFriendlyIframe__");
						}
					}
					function zt(t, e) {
						try {
							var n = Pt(t),
								r = {};
							if (
								((n.id = t.adID),
								(n.sandbox =
									"allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"),
								(0, u.isDebugEnabled)("fake_bids"))
							) {
								var o =
									'<body style="background-color: #FF9900;">' +
									(t.sizes[1] > 50 ? "<h3>apstag Test Creative</h3>" : "") +
									"<h4>amzniid - " +
									t.bidID +
									" | amznbid: " +
									t.pp +
									" | size: " +
									t.sizes.join("x") +
									"</h4></body>";
								n.src = "javascript:'" + o + "'";
							} else n.src = Tt(t);
							if (t.isAmp)
								(r.aaxImpReqTs = Date.now()),
									(r.renderTime = t.renderTime),
									(r.doc = t.doc),
									(r.amzniid = t.bidID),
									(r.slotID = "amp"),
									k(r);
							else {
								var a = St(t.bidID, t.isSharedPMP);
								((r = a.slotBid).aaxImpReqTs = Date.now()),
									(r.doc = t.doc),
									k(r);
							}
							t.doc.body.appendChild(n),
								(n.onload = function() {
									At(r, n, e);
								});
						} catch (t) {
							Wt(t, "__error-loadAdIntoUnfriendlyIframe__");
						}
					}
					function Lt(t, e, n) {
						var r;
						(0, u.safeObjectHasProp)(window, "amzncsm")
							? (r = window.amzncsm)
							: (0, u.safeObjectHasProp)(t.defaultView, "amzncsm") &&
							  (r = t.defaultView.amzncsm),
							r &&
								(0, u.safeObjectHasProp)(r, "rmD") &&
								((r.host = c.store.getState().cfg.DEFAULT_AAX_HOST),
								r.rmD(n, e, t.defaultView, t, c.store.getState().config.pubID));
					}
					function Bt(t) {
						var e = t.map(Ht),
							n = {};
						return (
							Object.keys(c.store.getState().slotBids).forEach(function(t) {
								var r = c.store.getState().slotBids[t].filter(function(t) {
									return t.bidState === d.BID_STATES.new;
								})[0];
								r &&
									(0, u.inArray)(e, t) &&
									((n[t] = r),
									c.store.dispatch({
										type: "BID_STATE_CHANGE",
										slotID: t,
										bidID: ct(r),
										bidState: d.BID_STATES.exposed
									}));
							}),
							n
						);
					}
					function xt(t, e) {
						var n = "0x0";
						return et()
							? {
									slotID: t,
									size: n,
									mediaType: "banner",
									targeting: { amznbid: e, amzniid: "", amznp: e, amznsz: n },
									helpers: {
										targetingKeys: ["amznbid", "amzniid", "amznp", "amznsz"]
									}
							  }
							: {
									slotID: t,
									amzniid: "",
									amznbid: e,
									amznp: e,
									amznsz: n,
									size: n
							  };
					}
					function jt(t, e) {
						var n = "";
						return (
							t.targeting.forEach(function(e) {
								n += "&" + e + "=" + t[e];
							}),
							!0 === e && (n = encodeURIComponent(n)),
							n
						);
					}
					function Nt(t, e, n) {
						var r,
							o = e.slots.filter(he).map(Ht),
							a = t.map(Ht);
						return (
							(r = n
								? o.map(function(t) {
										return xt(t, d.SLOT_STATES.bidInFlight);
								  })
								: o.reduce(function(t, e) {
										return (
											(0, u.inArray)(a, e) ||
												t.push(xt(e, d.SLOT_STATES.noBid)),
											t
										);
								  }, [])),
							t.concat(r)
						);
					}
					function qt(t, e) {
						return function(n) {
							var r = Bt(e.slots),
								o = Object.keys(r),
								a = [];
							n &&
								(c.store.dispatch({
									type: "RECORD_AAX_RESPONSE_PROP",
									bidReqID: e.bidReqID,
									key: "timedOutAt",
									value: Date.now()
								}),
								c.store.getState().experiments.chunkRequests &&
									c.store.dispatch({
										type: "RECORD_TIMEOUT",
										fid: e.bidReqID,
										timeOut: Date.now()
									})),
								o.forEach(function(t) {
									if ((0, u.safeObjectHasProp)(r, t)) {
										var e = r[t],
											n = {};
										if (et())
											e.meta.forEach(function(t) {
												n[t] = e[t];
											}),
												(n.targeting = {}),
												e.targeting.forEach(function(t) {
													n.targeting[t] = e[t];
												}),
												(n.helpers = {
													targetingKeys: e.targeting,
													qsParams: jt.bind(null, e, !1),
													encodedQsParams: jt.bind(null, e, !0)
												});
										else if ((0, u.safeObjectHasProp)(e, "amznbid")) {
											if (
												((0, u.safeObjectHasProp)(e, "amznp") || (e.amznp = ""),
												(n = {
													amzniid: e.amzniid,
													amznbid: e.amznbid,
													amznp: e.amznp,
													slotID: t
												}),
												(0, u.safeObjectHasProp)(e, "size") &&
													((n.size = e.size), (n.amznsz = e.amznsz)),
												"video" === e.mediaType)
											) {
												n.mediaType = "video";
												var o = "";
												e.amznbid
													? (o +=
															"&amzniid=" +
															e.amzniid +
															"&amznbid=" +
															e.amznbid +
															"&amznp=" +
															e.amznp)
													: ((n.amznbid = ""), (n.amzniid = "")),
													e.r_amznbid
														? ((n.r_amznbid = e.r_amznbid),
														  (n.r_amzniid = e.r_amzniid),
														  (n.r_amznp = e.r_amznp),
														  (o +=
																"&r_amzniid=" +
																e.r_amzniid +
																"&r_amznbid=" +
																e.r_amznbid +
																"&r_amznp=" +
																e.r_amznp))
														: ((n.r_amznbid = ""),
														  (n.r_amzniid = ""),
														  (n.r_amznp = "")),
													(n.qsParams = o),
													(n.encodedQsParams = encodeURIComponent(o));
											}
										} else n = xt(e.slotID, d.SLOT_STATES.noBid);
										a.push(n);
									}
								}),
								rt() && (a = Nt(a, e, n)),
								t(a, { fromTimeout: n });
						};
					}
					function Mt(t, e) {
						try {
							var n;
							((n =
								t.defaultView && t.defaultView.frameElement
									? t.defaultView.frameElement
									: window.frameElement).width = e[0]),
								(n.height = e[1]);
						} catch (t) {
							Wt(t, "__error-resizeIframe__");
						}
					}
					function kt(t) {
						return t[0] + "x" + t[1];
					}
					function Ut(t) {
						return 1 === t.length
							? kt(t[0])
							: kt(t[Math.floor(t.length * Math.random())]);
					}
					function Gt(t, e) {
						var n,
							r = c.store.getState().cfg.DEFAULT_AAX_HOST,
							o = E(),
							a = t.bidReqID,
							i = Q(),
							s = (0, u.getDebugValue)("testBidTimeout") || 200;
						c.store.dispatch({
							type: "RECORD_AAX_REQUEST",
							data: {
								bidConfig: t,
								timeout: s,
								bidReqID: a,
								ws: i,
								url: o,
								rqTs: Date.now()
							}
						}),
							(n = t.slots.map(function(t) {
								var e = {
									slotID: t.slotID,
									amzniid: d.MOCKBID.amzniid + "-" + (0, u.getRand)(),
									amznbid: d.MOCKBID.amznbid,
									amznp: d.MOCKBID.amznp,
									crid: d.MOCKBID.crid + "-" + (0, u.getRand)()
								};
								if ((0, u.safeObjectHasProp)(t, "sizes")) {
									var n = Ut(t.sizes);
									(e.size = n), (e.amznsz = n);
								} else "video" === t.mediaType && ((e.mediaType = "video"), (e.amznbid = "v_" + e.amznbid));
								if (et()) {
									(e.mediaType = "banner"),
										(e.meta = ["slotID", "mediaType", "size"]),
										(e.amznbid_sp = d.MOCKBID.amznbid + "SP"),
										(e.amznp_sp = d.MOCKBID.amznp + "SP"),
										(e.amznsz_sp = e.size);
									var r = "testDeal" + (0, u.getRand)() + "_" + e.size,
										o = "testDealImpression-" + (0, u.getRand)();
									(e.amzndeal_sp = r),
										(e.amzndeals = [r]),
										(e[r + "amzniid"] = o),
										(e.amzniid_sp = o),
										(e.targeting = [
											"amzniid",
											"amznbid",
											"amznp",
											"amznsz",
											"amzniid_sp",
											"amznbid_sp",
											"amznp_sp",
											"amznsz_sp",
											"amzndeal_sp",
											"amzndeals",
											r + "amzniid"
										]);
								}
								return e;
							})),
							window.setTimeout(function() {
								window.apstag.bids({ slots: n, host: r, status: "ok", cb: a }),
									e(!0);
							}, s);
					}
					function Ht(t) {
						return t.slotID;
					}
					function Ft(t) {
						var e = c.store.getState().AAXReqs.filter(function(e) {
							return e.bidReqID === t.cb;
						})[0];
						if (e && e.bidConfig && e.bidConfig.slots) {
							var n = e.bidConfig.slots.filter(he).map(function(t) {
									return t.slotID;
								}),
								r = (0, u.safeObjectHasProp)(t, "slots")
									? t.slots.map(function(t) {
											return t.slotID;
									  })
									: [],
								o = n.filter(function(t) {
									return !(0, u.inArray)(r, t);
								});
							c.store.dispatch({ type: "NO_BID_ON_DFP_SLOTS", slotIDs: o }),
								ot()
									? Yt()
									: at() &&
									  googletag.cmd.push(function() {
											Yt();
									  });
						}
					}
					function Kt(t) {
						return (0, u.inArray)(
							c.store
								.getState()
								.AAXReqs.filter(function(t) {
									return !t.resTs;
								})
								.map(function(t) {
									return t.bidConfig.slots;
								})
								.reduce(function(t, e) {
									return t.concat(e);
								}, [])
								.map(Ht),
							t
						);
					}
					function Xt(t) {
						var e = t.getTargeting("amznbid");
						return e.length > 0 && e[0].length > 2;
					}
					function Yt() {
						rt() &&
							(ot() &&
								"1" === googletag.pubads().getTargeting("amznbid")[0] &&
								Vt(),
							gt().forEach(function(t) {
								!(0, u.inArray)(
									c.store.getState().DFP.noBidSlotIDs,
									t.getSlotElementId()
								) ||
									Kt(t.getSlotElementId()) ||
									Xt(t) ||
									"2" === t.getTargeting("amznbid")[0] ||
									Qt(t, "noBid");
							}));
					}
					function Qt(t, e) {
						d.SLOT_STATE_KEYS.forEach(function(n) {
							return t.setTargeting(n, d.SLOT_STATES[e]);
						});
					}
					function Vt() {
						d.SLOT_STATE_KEYS.forEach(function(t) {
							return googletag.pubads().clearTargeting(t);
						});
					}
					function Jt(t) {
						var e = { _type: "dupePixel", dd: Date.now() - t.renderTime };
						(0, f.bidCacheIdPixel)(t.amzniid, e);
					}
					function Wt(t, e) {
						void 0 === c.store.getState() ||
						void 0 === c.store.getState().config
							? h(t, e)
							: h(
									t,
									e,
									c.store.getState().config.isSelfServePub,
									d.SELF_SERVE_PUB_SRC,
									c.store.getState().config.pubID
							  );
					}
					function Zt() {
						var n = (0, l.getResourcePerformanceObject)(
								window,
								"aax2/apstag.js"
							),
							r = {
								pid: e,
								ns: t,
								fs: (0, l.getMetricFromPerformanceObject)(n, "fetchStart"),
								re: (0, l.getMetricFromPerformanceObject)(n, "responseEnd")
							},
							o = (0, l.isResourceCached)(n);
						null !== o && (r.c = o ? 1 : 0),
							window.setTimeout(f.noBidCacheIdPixel, 1e3, r);
					}
					function $t() {
						try {
							window.setTimeout(function() {
								var t = re().filter(function(t) {
									return (
										!(0, u.safeObjectHasProp)(
											c.store.getState().bsPixels,
											t.iid
										) || t.state !== c.store.getState().bsPixels[t.iid]
									);
								});
								t &&
									t.length &&
									t.length > 0 &&
									(t.forEach(function(t) {
										var e = t.iid,
											n = _(t, ["iid"]);
										(0, f.bidCacheIdPixel)(e, ee(n));
									}),
									te(t));
								var n = {
									fetchStart: "a",
									domainLookupStart: "b",
									domainLookupEnd: "c",
									connectStart: "d",
									secureConnectionStart: "e",
									connectEnd: "f",
									requestStart: "g",
									responseStart: "h",
									responseEnd: "i",
									resTs: "j"
								};
								Object.keys(c.store.getState().slotBids).forEach(function(t) {
									c.store
										.getState()
										.slotBids[t].filter(function(t) {
											return void 0 !== t.amzniid;
										})
										.forEach(function(r) {
											if (!r.pixelSent) {
												var a = c.store.getState().AAXReqs.filter(function(t) {
													return t.bidReqID === r.bidReqID;
												})[0];
												if (
													"object" === (void 0 === a ? "undefined" : o(a)) &&
													null !== a
												) {
													var i = a.rqTs - (0, l.getTimeOrigin)(),
														s = {
															pid: e,
															lv: d.LIBRARY_VERSION,
															ns: a.bidConfig.slots.length,
															fid: r.bidReqID,
															fbrq: a.rqTs,
															_type: "latencyBd"
														};
													"object" === o(a.perf) &&
														null !== a.perf &&
														Object.keys(n).forEach(function(t) {
															0 !==
																(0, l.getMetricFromPerformanceObject)(
																	a.perf,
																	t
																) &&
																(s[n[t]] =
																	(0, l.getMetricFromPerformanceObject)(
																		a.perf,
																		t
																	) - i);
														}),
														(s[n.resTs] = a.resTs - a.rqTs),
														(0, f.bidCacheIdPixel)(r.amzniid, s),
														c.store.dispatch({
															type: "UPDATE_BID_INFO_PROP",
															slotID: t,
															iid: r.amzniid,
															key: "pixelSent",
															value: !0
														});
												}
											}
										});
								}),
									$t();
							}, 5e3);
						} catch (t) {
							Wt(t, "__error-bidSetPixel__");
						}
					}
					function te(t) {
						t.forEach(function(t) {
							return c.store.dispatch({
								type: "RECORD_BID_INFO_SENT",
								bidInfo: t
							});
						});
					}
					function ee(t) {
						var e = {};
						try {
							var n = ne(t.fid);
							((e = {
								status: t.state,
								pubid: c.store.getState().config.pubID,
								_type: "bidSetPixel"
							}).toa = (0, u.safeObjectHasProp)(n.req, "timedOutAt")
								? n.req.timedOutAt
								: "0"),
								(e.fbrq = n.req.rqTs),
								(e.pto = n.req.timeout),
								(e.ns = n.req.bidConfig.slots.length),
								(e.bla = n.req.resTs - n.req.rqTs),
								(e.reqindex = n.index),
								(e.fid = t.fid),
								c.store.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION &&
									((e.eid = c.store.getState().experiments.chunkRequests
										? 2
										: 1),
									(e.fbindex = n.fbIndex),
									(e.fbns = c.store.getState().bidConfigs[
										t.fid.split("-")[0]
									].slots.length)),
								t.delta && (e.delay = t.delta);
						} catch (t) {
							Wt(t, "__error-mapBidInfoToPixel__");
						}
						return e;
					}
					function ne(t) {
						var e = {
							req: c.store.getState().AAXReqs.filter(function(e) {
								return e.bidReqID === t;
							})[0]
						};
						return (
							(e.index = c.store.getState().AAXReqs.indexOf(e.req) + 1),
							c.store.getState().experiments.chunkRequests
								? (e.fbIndex =
										c.store
											.getState()
											.AAXReqs.filter(function(t) {
												return (
													-1 === t.bidReqID.indexOf("-") ||
													"0" === t.bidReqID.split("-")[1]
												);
											})
											.map(function(t) {
												return t.bidReqID.split("-")[0];
											})
											.indexOf(t.split("-")[0]) + 1)
								: (e.fbIndex = e.index),
							e
						);
					}
					function re() {
						var t = se(),
							e = [];
						return t
							? (Object.keys(c.store.getState().slotBids).forEach(function(n) {
									"video" !== c.store.getState().slotBids[n][0].mediaType &&
										c.store
											.getState()
											.slotBids[n].filter(function(t) {
												return void 0 !== t.amzniid;
											})
											.forEach(function(r) {
												var o = { slotID: n, iid: r.amzniid, fid: r.bidReqID },
													a = [],
													i = [];
												if (
													(n in t &&
														((a = t[n].fetchedAt.filter(function(t) {
															return (
																t.AAXReqInfo &&
																t.AAXReqInfo.bidReqID === r.bidReqID
															);
														})),
														(i = t[n].targetedAt.filter(function(t) {
															return t.targeting === r.amzniid;
														}))),
													a.length > 0
														? a.length > 0 &&
														  i.length >= a.length &&
														  a.slice(a.length - 1)[0].ts >
																i.slice(a.length - 1)[0].ts
															? 1 ===
															  t[n].fetchWithIID.filter(function(t) {
																	return t === r.amzniid;
															  }).length
																? (o.state = 1)
																: (o.state = 4)
															: -1 !== t[n].fetchWithIID.indexOf(r.amzniid)
																? (o.state = 3)
																: (o.state = 2)
														: (o.state = 0),
													1 === o.state || 2 === o.state)
												) {
													var s = c.store
															.getState()
															.AAXReqs.filter(function(t) {
																return t.bidReqID === r.bidReqID;
															})[0].resTs,
														d = oe(s, t[n].fetchedAt, 2 === o.state);
													d &&
														(0, u.safeObjectHasProp)(d, "ts") &&
														(o.delta = s - d.ts);
												}
												e.push(o);
											});
							  }),
							  e)
							: e;
					}
					function oe(t, e, n) {
						return e[
							ae(
								e.map(function(e) {
									var r = t - e.ts;
									return n ? (r >= 0 ? r : null) : r <= 0 ? -r : null;
								})
							)
						];
					}
					function ae(t) {
						for (var e, n, r, o = 0; o < t.length; o++)
							"number" == typeof (e = t[o]) &&
								("number" != typeof r || e < n) &&
								((r = o), (n = e));
						return r;
					}
					function ie(t, e) {
						return c.store.getState().AAXReqs.filter(function(t) {
							return (
								t.bidConfig.slots
									.map(function(t) {
										return t.slotID;
									})
									.indexOf(e) > -1
							);
						})[t];
					}
					function se() {
						if (!ot()) return null;
						var t = googletag.debug_log
							.getAllEvents()
							.map(function(t) {
								var e = t.getMessage(),
									n = t.getSlot();
								return {
									id: e.getMessageId(),
									args: e.getMessageArgs(),
									slotID: n ? n.getSlotElementId() : null,
									ts: t.getTimestamp().getTime()
								};
							})
							.filter(function(t) {
								return (
									(17 === t.id && "amzniid" === t.args[0]) ||
									(103 === t.id && "amzniid" === t.args[0]) ||
									3 === t.id
								);
							})
							.reduce(function(t, e) {
								(0, u.safeObjectHasProp)(t, e.slotID) ||
									(t[e.slotID] = { fetchedAt: [], targetedAt: [] });
								var n = t[e.slotID];
								return (
									3 === e.id
										? n.fetchedAt.push({
												ts: e.ts,
												AAXReqInfo: ie(t[e.slotID].fetchedAt.length, e.slotID)
										  })
										: 17 === e.id
											? n.targetedAt.push({ ts: e.ts, targeting: e.args[1] })
											: 103 === e.id &&
											  n.targetedAt.push({ ts: e.ts, targeting: "" }),
									t
								);
							}, {});
						return (
							Object.keys(t).forEach(function(e) {
								var n = t[e];
								(n.fetchWithIID = n.fetchedAt.map(function(t) {
									var e = oe(t.ts, n.targetedAt, !0);
									return e ? e.targeting : 0;
								})),
									(t[e] = n);
							}),
							t
						);
					}
					var ce = {
							wrapFunction: function(t, e) {
								return function() {
									try {
										return t.apply(null, arguments);
									} catch (t) {
										return Wt(t, e), null;
									}
								};
							},
							reportError: Wt
						},
						ue;
					function de() {
						le(), fe();
					}
					function le() {
						"http://" === d.PROTOCOL &&
							new i.default({
								run: pe.bind(null, ["http", "https"]),
								cases: {
									aax: [
										"http://d29a6k4186aqcx.cloudfront.net/2k.txt",
										"https://d29a6k4186aqcx.cloudfront.net/2k.txt"
									],
									cf: [
										"http://d29a6k4186aqcx.cloudfront.net/2k.txt",
										"https://d29a6k4186aqcx.cloudfront.net/2k.txt"
									]
								},
								name: "https"
							});
					}
					function fe() {
						new i.default({
							run: pe.bind(null, ["aax", "cf"]),
							cases: {
								tst: [
									"https://d29a6k4186aqcx.cloudfront.net/2k.txt",
									"https://d29a6k4186aqcx.cloudfront.net/2k.txt"
								]
							},
							name: "edge-server"
						});
					}
					function pe(t, e, n) {
						(n = ge(n)),
							_e((0, u.shuffleArray)(n), function() {
								var r;
								return e(
									(m(
										(r = {
											pubID: c.store.getState().config
												? c.store.getState().config.pubID
												: null
										}),
										t[0],
										me(n[0])
									),
									m(r, t[1], me(n[1])),
									r)
								);
							});
					}
					function ge(t) {
						return t.map(function(t) {
							return (
								t +
								(-1 === t.indexOf("?") ? "?" : "&") +
								"cb=" +
								(0, u.getRand)()
							);
						});
					}
					function me(t) {
						try {
							var e = (0, l.getResourcePerformanceObject)(window, t);
							return (
								(0, l.getMetricFromPerformanceObject)(e, "fetchStart") -
								(0, l.getMetricFromPerformanceObject)(e, "responseEnd")
							);
						} catch (t) {
							return Wt(t, "__getRoundTripTime-error__"), 0;
						}
					}
					function _e(t, e) {
						var n = { requests: {}, callback: !1 };
						t.map(function(t) {
							n.requests[t] = !1;
						});
						var r = function(t) {
							(n.requests[t] = !0), !n.callback && Se(n.requests) && e();
						};
						t.map(function(t) {
							q({
								url: t,
								onload: r.bind(null, t),
								onerror: r.bind(null, t, !0)
							});
						});
					}
					function Se(t) {
						var e = Object.keys(t);
						return (
							e
								.map(function(e) {
									return t[e];
								})
								.filter(function(t) {
									return t;
								}).length === e.length
						);
					}
					function be() {
						rt() &&
							(ot()
								? Qt(googletag.pubads(), "noRequest")
								: at() &&
								  (googletag.cmd = [
										function() {
											Qt(googletag.pubads(), "noRequest");
										}
								  ].concat(g(googletag.cmd))));
					}
					function he(t) {
						return "video" !== t.mediaType;
					}
					function Ee(t) {
						rt() &&
							at() &&
							(c.store.dispatch({
								type: "REQUESTED_BID_FOR_DFP_SLOTS",
								slotIDs: t
							}),
							c.store.dispatch({
								type: "REQUESTED_BID_FOR_PMP_ONLY_DFP_SLOTS",
								slotIDs: t
							}),
							googletag.cmd.push(function() {
								var e = gt();
								"0" === googletag.pubads().getTargeting("amznbid")[0] && Vt(),
									pt(
										t,
										e.map(function(t) {
											return t.getSlotElementId();
										})
									)
										? e.forEach(function(e) {
												(0, u.inArray)(t, e.getSlotElementId()) &&
													!Xt(e) &&
													Qt(e, "bidInFlight");
										  })
										: googletag.cmd.push(function() {
												Qt(googletag.pubads(), "bidInFlight");
										  });
							}));
					}
					function ye(t) {
						switch (t) {
							case "getLog":
								return c.store.getState().eventLog;
							case "getState":
								return c.store.getState();
							case "enable":
								return R(!0), "DEBUG MODE ENABLED";
							case "disable":
								return R(!1), "DEBUG MODE DISABLED";
							case "enableConsole":
								return A(d.APSTAG_CONSOLE_ENABLED), "Debug console enabled";
							case "disableConsole":
								return A(d.APSTAG_CONSOLE_DISABLED), "Debug console disabled";
							default:
								return "unknown debug argument";
						}
					}
					function Ie(t) {
						return t.split("x").map(function(t) {
							return parseInt(t, 10);
						});
					}
					function Oe(t, e) {
						if (t.type && "amp" === t.type) {
							var n = t;
							return (n.dfpRenderTime = Date.now()), void wt(n);
						}
						var r = !1;
						e &&
							"string" == typeof e &&
							0 === e.indexOf("sp|") &&
							((e = e.substring(3)), (r = !0));
						var o,
							a = e || t.amzniid,
							i = St(a, r),
							s = i.slotBid,
							u = i.dealId;
						if (
							((o =
								u && u.length >= 1
									? Ie("sp" === u ? s.amznsz_sp : bt(a, s, u))
									: Ie(s.size)),
							1 !== arguments.length)
						) {
							if (s) {
								s.bidState === d.BID_STATES.rendered && Jt(s),
									c.store.dispatch({
										type: "BID_STATE_CHANGE",
										slotID: s.slotID,
										bidID: e,
										bidState: d.BID_STATES.rendered,
										dealId: u,
										ts: Date.now()
									}),
									O.addTimer("imp");
								var l = s.host,
									f = "amznad" + Math.round(1e6 * Math.random()),
									p = De("amznbid", s, u),
									g = De("amznp", s, u),
									m = De("crid", s, u),
									_ = {
										bidID: e,
										doc: t,
										pp: p,
										host: l,
										adID: f,
										sizes: o,
										amznp: g,
										crID: m,
										fif: !1,
										dealId: u,
										isSharedPMP: r
									};
								"1" === s.fif
									? ((_.fif = "1"),
									  c.store.dispatch({
											type: "UPDATE_BID_INFO_PROP",
											slotID: s.slotID,
											iid: e,
											key: "doc",
											value: t,
											dealId: u
									  }),
									  U(Tt(_), null, document),
									  (s.aaxImpReqTs = Date.now()),
									  k(s))
									: c.store.getState().aaxViewabilityEnabled
										? nt() && "loading" === t.readyState
											? t.addEventListener("DOMContentLoaded", function() {
													ve(_, t);
											  })
											: ve(_, t)
										: zt(_),
									Mt(t, o);
							}
						} else Ct({ doc: s.doc, bidID: s.amzniid, sizes: o, html: t.html });
					}
					function De(t, e, n) {
						return n && n.length >= 1
							? "sp" === n
								? e[t + "_sp"]
								: ""
							: e[t]
								? e[t]
								: "";
					}
					function ve(t, e) {
						var n = e.createElement("script");
						(n.type = "text/javascript"),
							(n.async = !0),
							e.body.appendChild(n),
							B(n, function() {
								zt(t, Lt);
							}),
							(n.src = c.store.getState().cfg.CSM_JS);
					}
					function Te(t) {
						K(t),
							c.store.dispatch({ type: "UPDATE_SLOT_BIDS", bids: Et(t) }),
							(0, u.safeObjectHasProp)(t, "ev") &&
								c.store.dispatch({
									type: "SET_VIEWABILITY",
									viewability: t.ev
								}),
							(0, u.safeObjectHasProp)(t, "cfn") &&
								c.store.dispatch({
									type: "SET_CFG",
									cfg: { CSM_JS: "//c.amazon-adsystem.com/" + t.cfn }
								}),
							X(t);
					}
					function Re() {
						return (
							"number" == typeof c.store.getState().cfg.MAX_SLOTS_PER_REQUEST &&
							c.store.getState().cfg.MAX_SLOTS_PER_REQUEST > 0
						);
					}
					function Ae(t, e) {
						var n = xe.bind(null, t, e);
						void 0 === c.store.getState().gdpr ||
						null === c.store.getState().gdpr
							? (c.store.dispatch({ type: "ADD_GDPR_QUE_ITEM", func: n }),
							  1 === c.store.getState().gdprQue.length &&
									(0, s.GDPR)(c.store.getState().config.gdpr, Pe, ce))
							: n();
					}
					function Pe(t) {
						c.store.dispatch({ type: "SET_GDPR_CONFIG", config: t }),
							c.store.getState().gdprQue.map(function(t) {
								try {
									t();
								} catch (t) {
									Wt(t, "__gdpr_que__");
								}
							}),
							c.store.dispatch({ type: "CLEAR_GDPR_QUE" });
					}
					function we(t) {
						var e = [
								"300,250",
								"300,600",
								"160,600",
								"320,50",
								"728,90",
								"970,90"
							],
							n = "";
						return t.filter(function(t) {
							return (n = t.join(",")), e.indexOf(n) >= 0;
						});
					}
					function Ce(t) {
						var e = t
							.filter(function(t) {
								return "fluid" !== t;
							})
							.map(function(t) {
								return [t.getWidth(), t.getHeight()];
							});
						return c.store.getState().config.isSelfServePub ? we(e) : e;
					}
					function ze(t) {
						var e = Q().split("x");
						return {
							slotID: t.getSlotElementId(),
							slotName: t.getAdUnitPath(),
							sizes: Ce(t.getSizes(Number(e[0]), Number(e[1])))
						};
					}
					function Le(t) {
						return t.filter(function(t) {
							return 0 !== t.sizes.length;
						});
					}
					function Be(t) {
						return (
							t || (t = gt()),
							Le(
								t.map(function(t) {
									return ze(t);
								})
							)
						);
					}
					function xe(t, e) {
						var r = Object.keys(t).length,
							o = c.store.getState().config.simplerGPT;
						!0 !== o ||
							!(0, u.safeObjectHasProp)(t, "timeout") ||
							(1 !== r && 0 !== r) ||
							(t.slots = Be()),
							!0 === o &&
								(0, u.safeObjectHasProp)(t, "slots") &&
								t.slots[0] &&
								!(0, u.safeObjectHasProp)(t.slots[0], "slotID") &&
								(t.slots = Be(t.slots));
						var a,
							i,
							s,
							d = Ne(t.slots);
						d && (t.slots = d);
						try {
							(i =
								t.timeout ||
								c.store.getState().config.bidTimeout ||
								c.store.getState().cfg.DEFAULT_TIMEOUT),
								"function" != typeof e && (e = function() {}),
								(t.bidReqID = (0, u.getRand)()),
								(a = Y(qt(e, t), i));
						} catch (t) {
							Wt(t, "__error-fetchBids__");
						}
						if (0 === t.slots.length)
							return (
								Wt(
									new Error("No slots provided for bid request"),
									"__error-no_slots_provided_bid_request__"
								),
								void setTimeout(e.bind(null, []), 10)
							);
						if (
							(Ee(t.slots.filter(he).map(Ht)),
							c.store.dispatch({
								type: "NEW_FETCH_BID_REQUEST",
								fid: t.bidReqID,
								pto: i
							}),
							c.store.dispatch({
								type: "RECORD_ORIGINAL_BID_CONFIG",
								bidConfig: t
							}),
							(0, u.isDebugEnabled)("fake_bids"))
						)
							Gt(t, a);
						else if (n)
							if (
								(c.store.dispatch({
									type: "SHOULD_CHUNK_REQUESTS",
									value: (0, u.shouldSample)(
										c.store.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION
									)
								}),
								c.store.getState().experiments.chunkRequests && Re())
							) {
								s = je(t);
								for (var l = 0; l < s.length; l++)
									s[l].bidReqID = t.bidReqID + "-" + l;
								c.store.dispatch({
									type: "ADD_CHUNKED_REQUESTS",
									fid: t.bidReqID,
									numChunks: s.length
								}),
									s.forEach(function(t) {
										M(Z(t, i), a, t.bidReqID);
									});
							} else M(Z(t, i), a, t.bidReqID);
						else U(Z(t, i), a);
					}
					function je(t) {
						for (
							var e = Math.ceil(
									t.slots.length / c.store.getState().cfg.MAX_SLOTS_PER_REQUEST
								),
								n = new Array(e),
								o = 0;
							o < e;
							o++
						) {
							var a = o * c.store.getState().cfg.MAX_SLOTS_PER_REQUEST;
							n[o] = {
								slots: t.slots.slice(
									a,
									a + c.store.getState().cfg.MAX_SLOTS_PER_REQUEST
								)
							};
						}
						return n.map(function(e) {
							return r({}, t, e);
						});
					}
					function Ne(t) {
						try {
							return t.map(function(t) {
								return t.sizes &&
									(0, u.isArray)(t.sizes) &&
									!(0, u.isArray)(t.sizes[0])
									? r({}, t, { sizes: [t.sizes] })
									: t;
							});
						} catch (t) {
							Wt(t, "__error-adjustSlotArraySizes__");
						}
						return !1;
					}
					function qe(t) {
						(t.punt = !0), K(t), X(t);
					}
					function Me(t) {
						(0, u.safeObjectHasProp)(c.store.getState().config, "adServer") &&
							rt() &&
							(Dt(t), Yt());
					}
					function ke(t, e) {
						var n = tt(t);
						be(), "success" === n && "function" == typeof e && e();
					}
					function Ue() {
						var t =
							arguments.length <= 0 || void 0 === arguments[0]
								? "display"
								: arguments[0];
						switch (t) {
							case "display":
								return d.DISPLAY_TARGETING_KEYS;
							case "video":
								return d.VIDEO_TARGETING_KEYS;
							default:
								return et() &&
									(0, u.isArray)(c.store.getState().targetingKeys[t])
									? c.store.getState().targetingKeys[t]
									: "unknown targeting type " + t;
						}
					}
					function Ge() {
						var t = new XMLHttpRequest(),
							e = c.store.getState().cfg.DEBUG_APP_HTML;
						t.open("GET", e, !0),
							(t.onreadystatechange = function() {
								t.readyState === XMLHttpRequest.DONE &&
									200 === t.status &&
									He(t.responseText);
							}),
							t.send();
					}
					function He(t) {
						var e = document.createElement("iframe");
						(e.frameBorder = 0),
							(e.marginHeight = 0),
							(e.marginWidth = 0),
							(e.topMargin = 0),
							(e.leftMargin = 0),
							(e.scrolling = "no"),
							(e.allowTransparency = !0),
							(e.width = "100%;"),
							(e.height = "200px"),
							(e.id = "apstag-debug-iframe"),
							(e.srcdoc = t),
							(e.style =
								"background: #eaeded; z-index: 2147483647; line-height: 1; text-align: center; font-size: 12px; font-family: sans-serif; font-weight: bold; bottom: 0; position: fixed !important;"),
							document.body.appendChild(e);
					}
					function Fe(t, e) {
						var n = e;
						return function() {
							return (
								P({ method: t, args: arguments }), n.apply(void 0, arguments)
							);
						};
					}
					function Ke(t) {
						return function() {
							try {
								return t.apply(void 0, arguments);
							} catch (e) {
								return Wt(e, t.name), null;
							}
						};
					}
					O.addTimer("tlt");
					try {
						(0, u.safeObjectHasProp)(window, "apstag") &&
							(0, u.safeObjectHasProp)(window.apstag, "_Q") &&
							window.apstag._Q.length > 0 &&
							c.store.dispatch({ type: "SET_Q", Q: window.apstag._Q });
					} catch (t) {
						Wt(t, "__error-storeApstagQ__");
					}
					(window.apstag = ((ue = {
						punt: qe,
						init: ke,
						debug: ye,
						targetingKeys: Ue,
						fetchBids: Ae,
						setDisplayBids: Me,
						renderImp: Oe,
						bids: Te
					}),
					p &&
						(Object.keys(ue).forEach(function(t) {
							ue[t] = Fe(t, ue[t]);
						}),
						Ge()),
					Object.keys(ue).forEach(function(t) {
						ue[t] = Ke(ue[t]);
					}),
					ue)),
						(function() {
							try {
								c.store.dispatch({
									type: "SHOULD_SAMPLE_LATENCY",
									value: (0, u.shouldSample)(
										c.store.getState().cfg.LATENCY_SAMPLING_RATE
									)
								}),
									c.store.getState().experiments.shouldSampleLatency &&
										(Zt(), $t()),
									(0, u.shouldSample)(0) && de();
							} catch (t) {
								Wt(t, "__error-sampleLatency__");
							}
							try {
								$();
							} catch (t) {
								Wt(t, "__error-doLast__");
							}
							try {
								var t = {};
								t.url = c.store.getState().cfg.CSM_RTB_COMMUNICATOR_JS;
								var e = function(t) {
									(t && "object" !== (void 0 === t ? "undefined" : o(t))) ||
										(t = "Request Timeout or Error"),
										Wt(
											{ message: "csm-rtb-comm-js loading failed", name: t },
											"__csm-rtb-comm-js__"
										);
								};
								(t.onload = function(t) {
									t.readyState === XMLHttpRequest.DONE && 200 === t.status
										? eval(t.responseText)
										: e(
												JSON.stringify({
													status: t.statusText,
													response: t.responseXML
												})
										  );
								}),
									(t.onerror = e),
									(t.ontimeout = e),
									q(t);
							} catch (t) {
								Wt(t, "__load-csm-rtb-comm-js__");
							}
						})();
				})();
		} catch (t) {
			h(t, "__error-global__");
		}
	},
	function(t, e, n) {
		t.exports = n(7);
	}
]);
//# sourceMappingURL=apstag.js.map
