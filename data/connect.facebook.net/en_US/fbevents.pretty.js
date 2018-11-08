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

fbq.version = "2.8.33";
fbq._releaseSegment = "stable";
fbq.pendingConfigs = ["global_config"];
(function(a, b, c, d) {
	var e = { exports: {} };
	e.exports;
	(function() {
		var f = a.fbq;
		f.execStart = a.performance && a.performance.now && a.performance.now();
		if (
			!(function() {
				var b = a.postMessage || function() {};
				if (!f) {
					b(
						{
							action: "FB_LOG",
							logType: "Facebook Pixel Error",
							logMessage: "Pixel code is not installed correctly on this page"
						},
						"*"
					);
					"error" in console &&
						console.error(
							"Facebook Pixel Error: Pixel code is not installed correctly on this page"
						);
					return !1;
				}
				return !0;
			})()
		)
			return;
		var g = (function() {
				function a(a, b) {
					for (var c = 0; c < b.length; c++) {
						var d = b[c];
						d.enumerable = d.enumerable || !1;
						d.configurable = !0;
						"value" in d && (d.writable = !0);
						Object.defineProperty(a, d.key, d);
					}
				}
				return function(b, c, d) {
					c && a(b.prototype, c);
					d && a(b, d);
					return b;
				};
			})(),
			h =
				typeof Symbol === "function" &&
				typeof (typeof Symbol === "function"
					? Symbol.iterator
					: "@@iterator") === "symbol"
					? function(a) {
							return typeof a;
					  }
					: function(a) {
							return a &&
								typeof Symbol === "function" &&
								a.constructor === Symbol &&
								a !==
									(typeof Symbol === "function"
										? Symbol.prototype
										: "@@prototype")
								? "symbol"
								: typeof a;
					  };
		function i(a, b) {
			if (!(a instanceof b))
				throw new TypeError("Cannot call a class as a function");
		}
		f.__fbeventsModules ||
			((f.__fbeventsModules = {}),
			(f.__fbeventsResolvedModules = {}),
			(f.getFbeventsModules = function(a) {
				f.__fbeventsResolvedModules[a] ||
					(f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
				return f.__fbeventsResolvedModules[a];
			}),
			(f.fbIsModuleLoaded = function(a) {
				return !!f.__fbeventsModules[a];
			}),
			(f.ensureModuleRegistered = function(b, a) {
				f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
			}));
		f.ensureModuleRegistered("SignalsFBEventsOptTrackingOptions", function() {
			return (function(f, g, h, i) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					e.exports = {
						AUTO_CONFIG_OPT_OUT: 1 << 0,
						AUTO_CONFIG: 1 << 1,
						CONFIG_LOADING: 1 << 2,
						SUPPORTS_DEFINE_PROPERTY: 1 << 3,
						SUPPORTS_SEND_BEACON: 1 << 4,
						HAS_INVALIDATED_PII: 1 << 5,
						SHOULD_PROXY: 1 << 6,
						IS_HEADLESS: 1 << 7,
						IS_SELENIUM: 1 << 8,
						HAS_DETECTION_FAILED: 1 << 9
					};
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsPlugin", function() {
			return (function(f, g, h, i) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					function a(a) {
						this.plugin = a;
						this.__fbEventsPlugin = 1;
						return this;
					}
					e.exports = a;
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsProxyState", function() {
			return (function(f, g, h, i) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					var a = !1;
					e.exports = {
						getShouldProxy: function() {
							return a;
						},
						setShouldProxy: function(b) {
							a = b;
						}
					};
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsUtils", function() {
			return (function(f, b, c, d) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					var a = Object.prototype.toString,
						c = !("addEventListener" in b);
					function d(a, b) {
						return b != null && a instanceof b;
					}
					function f(b) {
						return Array.isArray
							? Array.isArray(b)
							: a.call(b) === "[object Array]";
					}
					function j(a) {
						return (
							typeof a === "number" ||
							(typeof a === "string" && /^\d+$/.test(a))
						);
					}
					var k =
						Number.isInteger ||
						function(a) {
							return (
								typeof a === "number" && isFinite(a) && Math.floor(a) === a
							);
						};
					function l(a, b, d) {
						var e = c ? "on" + b : b;
						b = c ? a.attachEvent : a.addEventListener;
						var f = c ? a.detachEvent : a.removeEventListener,
							g = function b() {
								f && f.call(a, e, b, !1), d();
							};
						b && b.call(a, e, g, !1);
					}
					var m = Object.prototype.hasOwnProperty,
						n = !{ toString: null }.propertyIsEnumerable("toString"),
						o = [
							"toString",
							"toLocaleString",
							"valueOf",
							"hasOwnProperty",
							"isPrototypeOf",
							"propertyIsEnumerable",
							"constructor"
						],
						p = o.length;
					function q(a) {
						if (Object.keys) return Object.keys(a);
						if (
							(typeof a === "undefined" ? "undefined" : h(a)) !== "object" &&
							(typeof a !== "function" || a === null)
						)
							throw new TypeError("Object.keys called on non-object");
						var b = [];
						for (var c in a) m.call(a, c) && b.push(c);
						if (n) for (var d = 0; d < p; d++) m.call(a, o[d]) && b.push(o[d]);
						return b;
					}
					function r(a, b) {
						if (Array.prototype.map) return Array.prototype.map.call(a, b);
						var c = void 0,
							d = void 0;
						if (a == null) throw new TypeError(" array is null or not defined");
						a = Object(a);
						var e = a.length >>> 0;
						if (typeof b !== "function")
							throw new TypeError(b + " is not a function");
						c = new Array(e);
						d = 0;
						while (d < e) {
							var f;
							d in a && ((f = a[d]), (f = b.call(null, f, d, a)), (c[d] = f));
							d++;
						}
						return c;
					}
					function s(a) {
						if (this == null)
							throw new TypeError(
								"Array.prototype.some called on null or undefined"
							);
						if (Array.prototype.some) return Array.prototype.some.call(this, a);
						if (typeof a !== "function") throw new TypeError();
						var b = Object(this),
							c = b.length >>> 0,
							d = arguments.length >= 2 ? arguments[1] : void 0;
						for (var e = 0; e < c; e++)
							if (e in b && a.call(d, b[e], e, b)) return !0;
						return !1;
					}
					function t(a) {
						return q(a).length === 0;
					}
					function u(a) {
						if (this === void 0 || this === null) throw new TypeError();
						var b = Object(this),
							c = b.length >>> 0;
						if (typeof a !== "function") throw new TypeError();
						var d = [],
							e = arguments.length >= 2 ? arguments[1] : void 0;
						for (var f = 0; f < c; f++)
							if (f in b) {
								var g = b[f];
								a.call(e, g, f, b) && d.push(g);
							}
						return d;
					}
					var v = (function() {
						function a(b) {
							i(this, a), (this.items = b || []);
						}
						g(a, [
							{
								key: "has",
								value: function(a) {
									return s.call(this.items, function(b) {
										return b === a;
									});
								}
							},
							{
								key: "add",
								value: function(a) {
									this.items.push(a);
								}
							}
						]);
						return a;
					})();
					function w(a) {
						return a;
					}
					function x(a) {
						var b = a;
						if (a.innerText != null) return a.innerText;
						else if (b.text != null) return b.text;
						else return a.textContent;
					}
					x = {
						getTextContent: x,
						isArray: f,
						isEmptyObject: t,
						isNumber: j,
						isInteger: k,
						isInstanceOf: d,
						keys: q,
						listenOnce: l,
						map: r,
						FBSet: v,
						each: function(a, b) {
							r.call(this, a, b);
						},
						some: function(a, b) {
							return s.call(a, b);
						},
						filter: function(a, b) {
							return u.call(a, b);
						},
						castTo: w
					};
					e.exports = x;
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEvents.plugins.opttracking", function() {
			return (function(g, h, i, d) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					var a = f.getFbeventsModules("SignalsFBEventsOptTrackingOptions"),
						b = f.getFbeventsModules("SignalsFBEventsPlugin"),
						c = f.getFbeventsModules("SignalsFBEventsProxyState"),
						d = f.getFbeventsModules("SignalsFBEventsUtils"),
						h = d.some,
						i = !1;
					function j() {
						try {
							Object.defineProperty({}, "test", {});
						} catch (a) {
							return !1;
						}
						return !0;
					}
					function k() {
						return !!(g.navigator && g.navigator.sendBeacon);
					}
					function l(a, b) {
						return a ? b : 0;
					}
					var m = ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"],
						n = [
							"__webdriver_evaluate",
							"__selenium_evaluate",
							"__webdriver_script_function",
							"__webdriver_script_func",
							"__webdriver_script_fn",
							"__fxdriver_evaluate",
							"__driver_unwrapped",
							"__webdriver_unwrapped",
							"__driver_evaluate",
							"__selenium_unwrapped",
							"__fxdriver_unwrapped"
						];
					function o() {
						if (q(m)) return !0;
						var a = h(n, function(a) {
							return g.document[a] ? !0 : !1;
						});
						if (a) return !0;
						a = g.document;
						for (var b in a)
							if (b.match(/\$[a-z]dc_/) && a[b].cache_) return !0;
						if (
							g.external &&
							g.external.toString &&
							g.external.toString().indexOf("Sequentum") !== -1
						)
							return !0;
						if (a.documentElement && a.documentElement.getAttribute) {
							a = h(["selenium", "webdriver", "driver"], function(a) {
								return g.document.documentElement.getAttribute(a) ? !0 : !1;
							});
							if (a) return !0;
						}
						return !1;
					}
					function p() {
						if (q(["_phantom", "__nightmare", "callPhantom"])) return !0;
						return /HeadlessChrome/.test(g.navigator.userAgent) ? !0 : !1;
					}
					function q(a) {
						a = h(a, function(a) {
							return g[a] ? !0 : !1;
						});
						return a;
					}
					function r() {
						var b = 0,
							c = 0,
							d = 0;
						try {
							(b = l(o(), a.IS_SELENIUM)), (c = l(p(), a.IS_HEADLESS));
						} catch (b) {
							d = a.HAS_DETECTION_FAILED;
						}
						return { isHeadless: c, isSelenium: b, hasDetectionFailed: d };
					}
					d = new b(function(b, d) {
						if (i) return;
						var e = {};
						b.on("pii_invalidated", function(a) {
							a != null && (e[typeof a === "string" ? a : a.id] = !0);
						});
						b.on("getCustomParameters", function(f) {
							if (f == null) return {};
							var g = d.optIns,
								h = l(
									g.isOptedOut(f.id, "AutomaticSetup"),
									a.AUTO_CONFIG_OPT_OUT
								);
							g = l(g.isOptedIn(f.id, "AutomaticSetup"), a.AUTO_CONFIG);
							var i = l(b.disableConfigLoading !== !0, a.CONFIG_LOADING),
								m = l(j(), a.SUPPORTS_DEFINE_PROPERTY),
								n = l(k(), a.SUPPORTS_SEND_BEACON);
							f = l(f != null && e[f.id], a.HAS_INVALIDATED_PII);
							var o = l(c.getShouldProxy(), a.SHOULD_PROXY),
								p = r();
							h =
								h |
								g |
								i |
								m |
								n |
								f |
								o |
								p.isHeadless |
								p.isSelenium |
								p.hasDetectionFailed;
							return { o: h };
						});
						i = !0;
					});
					d.OPTIONS = a;
					e.exports = d;
				})();
				return e.exports;
			})(a, b, c, d);
		});
		e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.opttracking");
		f.registerPlugin &&
			f.registerPlugin("fbevents.plugins.opttracking", e.exports);
		f.ensureModuleRegistered("fbevents.plugins.opttracking", function() {
			return e.exports;
		});
	})();
})(window, document, location, history);
(function(a, b, c, d) {
	var e = { exports: {} };
	e.exports;
	(function() {
		var f = a.fbq;
		f.execStart = a.performance && a.performance.now && a.performance.now();
		if (
			!(function() {
				var b = a.postMessage || function() {};
				if (!f) {
					b(
						{
							action: "FB_LOG",
							logType: "Facebook Pixel Error",
							logMessage: "Pixel code is not installed correctly on this page"
						},
						"*"
					);
					"error" in console &&
						console.error(
							"Facebook Pixel Error: Pixel code is not installed correctly on this page"
						);
					return !1;
				}
				return !0;
			})()
		)
			return;
		var g = (function() {
				function a(a, b) {
					var c = [],
						d = !0,
						e = !1,
						f = undefined;
					try {
						for (
							var a = a[
									typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
								](),
								g;
							!(d = (g = a.next()).done);
							d = !0
						) {
							c.push(g.value);
							if (b && c.length === b) break;
						}
					} catch (a) {
						(e = !0), (f = a);
					} finally {
						try {
							!d && a["return"] && a["return"]();
						} finally {
							if (e) throw f;
						}
					}
					return c;
				}
				return function(b, c) {
					if (Array.isArray(b)) return b;
					else if (
						(typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in
						Object(b)
					)
						return a(b, c);
					else
						throw new TypeError(
							"Invalid attempt to destructure non-iterable instance"
						);
				};
			})(),
			h =
				typeof Symbol === "function" &&
				typeof (typeof Symbol === "function"
					? Symbol.iterator
					: "@@iterator") === "symbol"
					? function(a) {
							return typeof a;
					  }
					: function(a) {
							return a &&
								typeof Symbol === "function" &&
								a.constructor === Symbol &&
								a !==
									(typeof Symbol === "function"
										? Symbol.prototype
										: "@@prototype")
								? "symbol"
								: typeof a;
					  },
			i = (function() {
				function a(a, b) {
					for (var c = 0; c < b.length; c++) {
						var d = b[c];
						d.enumerable = d.enumerable || !1;
						d.configurable = !0;
						"value" in d && (d.writable = !0);
						Object.defineProperty(a, d.key, d);
					}
				}
				return function(b, c, d) {
					c && a(b.prototype, c);
					d && a(b, d);
					return b;
				};
			})();
		function j(a) {
			if (Array.isArray(a)) {
				for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
				return c;
			} else return Array.from(a);
		}
		function k(a, b) {
			if (!(a instanceof b))
				throw new TypeError("Cannot call a class as a function");
		}
		f.__fbeventsModules ||
			((f.__fbeventsModules = {}),
			(f.__fbeventsResolvedModules = {}),
			(f.getFbeventsModules = function(a) {
				f.__fbeventsResolvedModules[a] ||
					(f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
				return f.__fbeventsResolvedModules[a];
			}),
			(f.fbIsModuleLoaded = function(a) {
				return !!f.__fbeventsModules[a];
			}),
			(f.ensureModuleRegistered = function(b, a) {
				f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
			}));
		f.ensureModuleRegistered("SignalsEventValidation", function() {
			return (function(g, h, i, j) {
				var k = { exports: {} };
				k.exports;
				(function() {
					"use strict";
					var a = f.getFbeventsModules("SignalsFBEventsLogging"),
						b = a.logUserError,
						c = /^[+-]?\d+(\.\d+)?$/,
						d = "number",
						e = "currency_code",
						g = {
							AED: 1,
							ARS: 1,
							AUD: 1,
							BOB: 1,
							BRL: 1,
							CAD: 1,
							CHF: 1,
							CLP: 1,
							CNY: 1,
							COP: 1,
							CRC: 1,
							CZK: 1,
							DKK: 1,
							EUR: 1,
							GBP: 1,
							GTQ: 1,
							HKD: 1,
							HNL: 1,
							HUF: 1,
							IDR: 1,
							ILS: 1,
							INR: 1,
							ISK: 1,
							JPY: 1,
							KRW: 1,
							MOP: 1,
							MXN: 1,
							MYR: 1,
							NIO: 1,
							NOK: 1,
							NZD: 1,
							PEN: 1,
							PHP: 1,
							PLN: 1,
							PYG: 1,
							QAR: 1,
							RON: 1,
							RUB: 1,
							SAR: 1,
							SEK: 1,
							SGD: 1,
							THB: 1,
							TRY: 1,
							TWD: 1,
							USD: 1,
							UYU: 1,
							VEF: 1,
							VND: 1,
							ZAR: 1
						};
					a = {
						value: { type: d, isRequired: !0 },
						currency: { type: e, isRequired: !0 }
					};
					var h = {
							PageView: {},
							ViewContent: {},
							Search: {},
							AddToCart: {},
							AddToWishlist: {},
							InitiateCheckout: {},
							PixelInitialized: {},
							AddPaymentInfo: {},
							Purchase: { validationSchema: a },
							Lead: {},
							CompleteRegistration: {},
							CustomEvent: { validationSchema: { event: { isRequired: !0 } } }
						},
						i = { agent: !0, automaticmatchingconfig: !0, codeless: !0 },
						j = Object.prototype.hasOwnProperty;
					function l() {
						return { error: null, warnings: [] };
					}
					function m(a) {
						return { error: a, warnings: [] };
					}
					function n(a) {
						return { error: null, warnings: a };
					}
					function o(a) {
						if (a) {
							a = a.toLowerCase();
							var b = i[a];
							if (!b)
								return m({
									type: "UNSUPPORTED_METADATA_ARGUMENT",
									metadata: a
								});
						}
						return l();
					}
					function p(a) {
						var b =
							arguments.length > 1 && arguments[1] !== undefined
								? arguments[1]
								: {};
						if (!a) return m({ type: "NO_EVENT_NAME" });
						var c = h[a];
						return !c
							? n([{ type: "NONSTANDARD_EVENT", eventName: a }])
							: q(a, b, c);
					}
					function q(a, b, f) {
						f = f.validationSchema;
						var h = [];
						for (var i in f)
							if (j.call(f, i)) {
								var k = f[i],
									l = b[i];
								if (k) {
									if (k.isRequired && !j.call(b, i))
										return m({
											type: "REQUIRED_PARAM_MISSING",
											param: i,
											eventName: a
										});
									if (k.type && typeof k.type === "string") {
										var o = !0;
										switch (k.type) {
											case d:
												k =
													(typeof l === "string" || typeof l === "number") &&
													c.test("" + l);
												k &&
													Number(l) < 0 &&
													h.push({
														type: "NEGATIVE_EVENT_PARAM",
														param: i,
														eventName: a ? a : "null"
													});
												o = k;
												break;
											case e:
												o = typeof l === "string" && !!g[l.toUpperCase()];
												break;
										}
										if (!o)
											return m({
												type: "INVALID_PARAM",
												param: i,
												eventName: a
											});
									}
								}
							}
						return n(h);
					}
					function r(a, c) {
						a = p(a, c);
						a.error && b(a.error);
						if (a.warnings)
							for (var c = 0; c < a.warnings.length; c++) b(a.warnings[c]);
						return a;
					}
					k.exports = {
						validateMetadata: o,
						validateEvent: p,
						validateEventAndLog: r
					};
				})();
				return k.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsEvents", function() {
			return (function(g, h, j, d) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					var a = f.getFbeventsModules("SignalsFBEventsLogging");
					a = a.logError;
					var b = f.getFbeventsModules("SignalsFBEventsUtils"),
						c = b.keys,
						d = 0;
					b = (function() {
						function b() {
							var a = this;
							k(this, b);
							this._listeners = {};
							this.on = function() {
								return a._on.apply(a, arguments);
							};
							this.once = function() {
								return a._once.apply(a, arguments);
							};
							this.trigger = function(b) {
								for (
									var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), e = 1;
									e < c;
									e++
								)
									d[e - 1] = arguments[e];
								return a._trigger.apply(a, [b].concat(d));
							};
							this.unsubscribe = function() {
								return a._unsubscribe.apply(a, arguments);
							};
						}
						i(b, [
							{
								key: "_on",
								value: function(a, b) {
									var c = this,
										e = d++;
									this._listeners[a] || (this._listeners[a] = {});
									this._listeners[a][e.toString()] = b;
									return function() {
										c.unsubscribe(a, e.toString());
									};
								}
							},
							{
								key: "_once",
								value: function(a, b) {
									var c = arguments,
										d = this.on(a, function() {
											d();
											return b.apply(null, c);
										});
									return d;
								}
							},
							{
								key: "_trigger",
								value: function(b) {
									var d = this;
									for (
										var e = arguments.length,
											f = Array(e > 1 ? e - 1 : 0),
											g = 1;
										g < e;
										g++
									)
										f[g - 1] = arguments[g];
									return !this._listeners[b]
										? []
										: c(this._listeners[b]).map(function(c) {
												try {
													return !d._listeners[b][c]
														? []
														: d._listeners[b][c].apply(null, f);
												} catch (b) {
													a(b);
												}
												return null;
										  });
								}
							},
							{
								key: "_unsubscribe",
								value: function(a, b) {
									var d = this._listeners[a];
									d &&
										d[b] &&
										(delete d[b],
										c(d).length === 0 && delete this._listeners[a]);
								}
							}
						]);
						return b;
					})();
					b = new b();
					e.exports = b;
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsConfigStore", function() {
			return (function(f, g, h, j) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					var a =
							Object.assign ||
							function(a) {
								for (var b = 1; b < arguments.length; b++) {
									var c = arguments[b];
									for (var d in c)
										Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
								}
								return a;
							},
						b = (function() {
							function b() {
								k(this, b), (this._config = {});
							}
							i(b, [
								{
									key: "_getPixelConfig",
									value: function(a) {
										this._config[a] == null && (this._config[a] = {});
										return this._config[a];
									}
								},
								{
									key: "set",
									value: function(b, c, d) {
										c === "automaticMatching" && d.selectedMatchKeys
											? (this._getPixelConfig(b).automaticMatching = a({}, d))
											: c === "inferredEvents" &&
											  d.buttonSelector &&
											  (this._getPixelConfig(b).inferredEvents = a({}, d));
										return this;
									}
								},
								{
									key: "getAutomaticMatchingConfig",
									value: function(a) {
										return this._getPixelConfig(a).automaticMatching;
									}
								},
								{
									key: "getInferredEventsConfig",
									value: function(a) {
										return this._getPixelConfig(a).inferredEvents;
									}
								}
							]);
							return b;
						})();
					e.exports = new b();
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsFBQ", function() {
			return (function(g, h, c, d) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					var a = f.getFbeventsModules("SignalsEventValidation"),
						b = f.getFbeventsModules("SignalsFBEventsConfigStore"),
						c = f.getFbeventsModules("SignalsFBEventsFireLock"),
						d = f.getFbeventsModules("SignalsFBEventsJSLoader"),
						h = f.getFbeventsModules("SignalsFBEventsLogging"),
						l = f.getFbeventsModules("SignalsFBEventsOptIn");
					f.getFbeventsModules("SignalsFBEventsQE");
					var m = f.getFbeventsModules("SignalsFBEventsUtils"),
						n = f.getFbeventsModules("SignalsPixelEndpoint"),
						o = m.each,
						p = m.keys,
						q = m.map,
						r = m.some,
						s = h.logError,
						t = h.logUserError,
						u = {
							AutomaticMatching: !0,
							Dwell: !0,
							FirstPartyCookies: !0,
							Interaction: !0,
							InferredEvents: !0,
							Microdata: !0,
							MicrodataJsonLd: !0,
							ProxyEndpoint: !0,
							Sessions: !0,
							TimeSpent: !0,
							IWL: !0,
							IWLBootstrapper: !0,
							IWLParameters: !0,
							GA2FBQ: !0,
							BotDetection: !0
						};
					m = ["InferredEvents", "Microdata"];
					var v = { AutomaticSetup: m },
						w = {
							AutomaticMatching: ["inferredevents", "identity"],
							Dwell: ["dwell"],
							FirstPartyCookies: ["cookie"],
							InferredEvents: ["inferredevents", "identity"],
							Interaction: ["interaction", "timespent"],
							Microdata: ["microdata", "identity"],
							MicrodataJsonLd: ["jsonld_microdata"],
							ProxyEndpoint: ["proxy"],
							Sessions: ["sessions"],
							TimeSpent: ["timespent"],
							IWL: ["iwl"],
							IWLBootstrapper: ["iwlbootstrapper"],
							IWLParameters: ["iwlparameters", "inferredEvents"],
							GA2FBQ: ["ga2fbq"],
							BotDetection: ["botdetection"]
						};
					function x(a) {
						return !!(u[a] || v[a]);
					}
					function y(a, b, c) {
						d.loadJSFile(
							d.CONFIG.CDN_BASE_URL +
								"signals/config/" +
								a +
								"?v=" +
								b +
								"&r=" +
								c
						);
					}
					h = (function() {
						function d(a, e) {
							var g = this;
							k(this, d);
							this.VALID_FEATURES = u;
							this.optIns = new l(v);
							this.configsLoaded = {};
							this.locks = c.global;
							this.pluginConfig = b;
							this.disableFirstPartyCookies = !1;
							this.VERSION = a.version;
							this.RELEASE_SEGMENT = a._releaseSegment;
							this.pixelsByID = e;
							this.fbq = a;
							o(a.pendingConfigs || [], function(a) {
								return g.locks.lockConfig(a);
							});
						}
						i(d, [
							{
								key: "optIn",
								value: function(a, b) {
									var c = this,
										d =
											arguments.length > 2 && arguments[2] !== undefined
												? arguments[2]
												: !1;
									if (typeof b !== "string" || !x(b))
										throw new Error(
											'Invalid Argument: "' +
												b +
												'" is not a valid opt-in feature'
										);
									x(b) &&
										(this.optIns.optIn(a, b, d),
										o([b].concat(j(v[b] || [])), function(a) {
											w[a] &&
												o(w[a], function(a) {
													return c.fbq.loadPlugin(a);
												});
										}));
									return this;
								}
							},
							{
								key: "optOut",
								value: function(a, b) {
									this.optIns.optOut(a, b);
									return this;
								}
							},
							{
								key: "consent",
								value: function(a) {
									a == "revoke"
										? this.locks.lockConsent()
										: a == "grant"
											? this.locks.unlockConsent()
											: t({ type: "INVALID_CONSENT_ACTION", action: a });
									return this;
								}
							},
							{
								key: "setUserProperties",
								value: function(a, b) {
									if (
										!Object.prototype.hasOwnProperty.call(this.pixelsByID, a)
									) {
										t({ type: "PIXEL_NOT_INITIALIZED", pixelID: a });
										return;
									}
									var c = this.getDefaultSendData(a, "UserProperties");
									c.customData = b;
									c.customParameters = { es: "userProperties" };
									this.trackSingleSystem(
										"user_properties",
										a,
										"UserProperties",
										b
									);
								}
							},
							{
								key: "trackSingle",
								value: function(b, c, d, e) {
									a.validateEventAndLog(c, d);
									return this.trackSingleGeneric(b, c, d, e);
								}
							},
							{
								key: "trackSingleCustom",
								value: function(a, b, c, d) {
									return this.trackSingleGeneric(a, b, c, d);
								}
							},
							{
								key: "trackSingleSystem",
								value: function(a, b, c, d) {
									return this.trackSingleGeneric(b, c, d, null, a);
								}
							},
							{
								key: "trackSingleGeneric",
								value: function(a, b, c, d, e) {
									a = typeof a === "string" ? a : a.id;
									if (
										!Object.prototype.hasOwnProperty.call(this.pixelsByID, a)
									) {
										var f = { type: "PIXEL_NOT_INITIALIZED", pixelID: a };
										e == null ? t(f) : s(new Error(f.type + " " + f.pixelID));
										return this;
									}
									f = this.getDefaultSendData(a, b, d);
									f.customData = c;
									e != null && (f.customParameters = { es: e });
									this.fire(f, !1);
									return this;
								}
							},
							{
								key: "_validateSend",
								value: function(b, c) {
									if (!b.eventName || !b.eventName.length)
										throw new Error("Event name not specified");
									if (!b.pixelId || !b.pixelId.length)
										throw new Error("PixelId not specified");
									b.set &&
										o(
											q(p(b.set), function(b) {
												return a.validateMetadata(b);
											}),
											function(a) {
												if (a.error) throw new Error(a.error);
												a.warnings.length && o(a.warnings, t);
											}
										);
									if (c) {
										c = a.validateEvent(b.eventName, b.customData || {});
										if (c.error) throw new Error(c.error);
										c.warnings && c.warnings.length && o(c.warnings, t);
									}
									return this;
								}
							},
							{
								key: "fire",
								value: function(a) {
									var b =
										arguments.length > 1 && arguments[1] !== undefined
											? arguments[1]
											: !1;
									this._validateSend(a, b);
									if (
										a.userData &&
										p(a.userData).length > 0 &&
										!this.fbq.loadPlugin("identity")
									) {
										g.fbq("fire", a);
										return this;
									}
									var c = this.fbq.getEventCustomParameters(
											this.getPixel(a.pixelId)
										),
										d = a.eventData.eventID;
									c.append("eid", d);
									var e = a.customParameters;
									e &&
										o(p(e), function(a) {
											if (c.containsKey(a))
												throw new Error(
													"Custom parameter " + a + " already specified."
												);
											else c.append(a, e[a]);
										});
									n.sendEvent(a.pixelId, a.eventName, a.customData, c);
									return this;
								}
							},
							{
								key: "callMethod",
								value: function(a) {
									var b = a[0];
									a = Array.prototype.slice.call(a, 1);
									if (typeof b !== "string") {
										t({ type: "FBQ_NO_METHOD_NAME" });
										return;
									}
									if (typeof this[b] === "function")
										try {
											this[b].apply(this, a);
										} catch (a) {
											s(a);
										}
									else t({ type: "INVALID_FBQ_METHOD", method: b });
								}
							},
							{
								key: "getDefaultSendData",
								value: function(a, b, c) {
									var d = this.getPixel(a);
									a = { pixelId: a, eventName: b, eventData: c || {} };
									d &&
										(d.userData && (a.userData = d.userData),
										d.agent != null && d.agent !== ""
											? (a.set = { agent: d.agent })
											: this.fbq.agent != null &&
											  this.fbq.agent !== "" &&
											  (a.set = { agent: this.fbq.agent }));
									return a;
								}
							},
							{
								key: "getOptedInPixels",
								value: function(a) {
									var b = this;
									return this.optIns.listPixelIds(a).map(function(a) {
										return b.pixelsByID[a];
									});
								}
							},
							{
								key: "getPixel",
								value: function(a) {
									return this.pixelsByID[a];
								}
							},
							{
								key: "loadConfig",
								value: function(a) {
									if (
										this.fbq.disableConfigLoading === !0 ||
										Object.prototype.hasOwnProperty.call(this.configsLoaded, a)
									)
										return;
									this.locks.lockConfig(a);
									(!this.fbq.pendingConfigs ||
										r(this.fbq.pendingConfigs, function(b) {
											return b === a;
										}) == !1) &&
										y(
											a,
											this.VERSION,
											this.RELEASE_SEGMENT != null
												? this.RELEASE_SEGMENT
												: "stable"
										);
								}
							},
							{
								key: "configLoaded",
								value: function(a) {
									(this.configsLoaded[a] = !0),
										this.locks.releaseConfig(a),
										this.fbq.trigger("configLoaded", a);
								}
							}
						]);
						return d;
					})();
					e.exports = h;
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsFireLock", function() {
			return (function(g, h, j, d) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					var a = f.getFbeventsModules("SignalsFBEventsUtils"),
						b = a.each,
						c = a.keys;
					a = (function() {
						function a() {
							k(this, a), (this._locks = {}), (this._callbacks = []);
						}
						i(a, [
							{
								key: "lock",
								value: function(a) {
									this._locks[a] = !0;
								}
							},
							{
								key: "release",
								value: function(a) {
									Object.prototype.hasOwnProperty.call(this._locks, a) &&
										(delete this._locks[a],
										c(this._locks).length === 0 &&
											b(this._callbacks, function(b) {
												return b(a);
											}));
								}
							},
							{
								key: "onUnlocked",
								value: function(a) {
									this._callbacks.push(a);
								}
							},
							{
								key: "isLocked",
								value: function() {
									return c(this._locks).length > 0;
								}
							},
							{
								key: "lockPlugin",
								value: function(a) {
									this.lock("plugin:" + a);
								}
							},
							{
								key: "releasePlugin",
								value: function(a) {
									this.release("plugin:" + a);
								}
							},
							{
								key: "lockConfig",
								value: function(a) {
									this.lock("config:" + a);
								}
							},
							{
								key: "releaseConfig",
								value: function(a) {
									this.release("config:" + a);
								}
							},
							{
								key: "lockConsent",
								value: function() {
									this.lock("consent");
								}
							},
							{
								key: "unlockConsent",
								value: function() {
									this.release("consent");
								}
							}
						]);
						return a;
					})();
					a.global = new a();
					e.exports = a;
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsJSLoader", function() {
			return (function(f, g, h, i) {
				var j = { exports: {} };
				j.exports;
				(function() {
					"use strict";
					var a = { CDN_BASE_URL: "https://connect.facebook.net/" };
					function b() {
						var b = g.getElementsByTagName("script");
						for (var c = 0; c < b.length; c++)
							if (b[c] && b[c].src && b[c].src.indexOf(a.CDN_BASE_URL) !== -1)
								return b[c];
						return null;
					}
					function c(a) {
						var c = g.createElement("script");
						c.src = a;
						c.async = !0;
						a = b();
						a && a.parentNode
							? a.parentNode.insertBefore(c, a)
							: g.head && g.head.firstChild && g.head.appendChild(c);
					}
					j.exports = { CONFIG: a, loadJSFile: c };
				})();
				return j.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsLogging", function() {
			return (function(g, h, i, j) {
				var k = { exports: {} };
				k.exports;
				(function() {
					"use strict";
					var a = f.getFbeventsModules("SignalsFBEventsNetworkUtils"),
						b = a.sendPOST;
					a = f.getFbeventsModules("SignalsFBEventsUtils");
					var c = a.isInstanceOf,
						d = f.getFbeventsModules("SignalsParamList"),
						e = !1;
					function h() {
						e = !0;
					}
					var i = !0;
					function j() {
						i = !1;
					}
					a = "console";
					var l = "warn",
						m = g[a] && g[a][l] ? g[a][l].bind(g[a]) : function() {},
						n = !1;
					function o() {
						n = !0;
					}
					function p(a) {
						if (n) return;
						m("[Facebook Pixel] - " + a);
					}
					var q = "Facebook Pixel Error",
						r = g.postMessage ? g.postMessage.bind(g) : function() {},
						s = {};
					function t(a) {
						switch (a.type) {
							case "FBQ_NO_METHOD_NAME":
								return "You must provide an argument to fbq().";
							case "INVALID_FBQ_METHOD":
								var b = a.method;
								return "\"fbq('" + b + "', ...);\" is not a valid fbq command.";
							case "INVALID_PIXEL_ID":
								b = a.pixelID;
								return "Invalid PixelID: " + b + ".";
							case "DUPLICATE_PIXEL_ID":
								b = a.pixelID;
								return "Duplicate Pixel ID: " + b + ".";
							case "SET_METADATA_ON_UNINITIALIZED_PIXEL_ID":
								b = a.metadataValue;
								var c = a.pixelID;
								return (
									"Trying to set argument " +
									b +
									" for uninitialized Pixel ID " +
									c +
									"."
								);
							case "CONFLICTING_VERSIONS":
								return "Multiple pixels with conflicting versions were detected on this page.";
							case "MULTIPLE_PIXELS":
								return "Multiple pixels were detected on this page.";
							case "UNSUPPORTED_METADATA_ARGUMENT":
								b = a.metadata;
								return "Unsupported metadata argument: " + b + ".";
							case "REQUIRED_PARAM_MISSING":
								c = a.param;
								b = a.eventName;
								return (
									"Required parameter '" +
									c +
									"' is missing for event '" +
									b +
									"'."
								);
							case "INVALID_PARAM":
								c = a.param;
								b = a.eventName;
								return (
									"Parameter '" + c + "' is invalid for event '" + b + "'."
								);
							case "NO_EVENT_NAME":
								return 'Missing event name. Track events must be logged with an event name fbq("track", eventName)';
							case "NONSTANDARD_EVENT":
								c = a.eventName;
								return (
									"You are sending a non-standard event '" +
									c +
									"'. The preferred way to send these events is using trackCustom. See 'https://developers.facebook.com/docs/ads-for-websites/pixel-events/#events' for more information."
								);
							case "NEGATIVE_EVENT_PARAM":
								b = a.param;
								c = a.eventName;
								return (
									"Parameter '" + b + "' is negative for event '" + c + "'."
								);
							case "PII_INVALID_TYPE":
								b = a.key_type;
								c = a.key_val;
								return (
									"An invalid " +
									b +
									" was specified for '" +
									c +
									"'. This data will not be sent with any events for this Pixel."
								);
							case "PII_UNHASHED_PII":
								b = a.key;
								return (
									"The value for the '" +
									b +
									"' key appeared to be PII. This data will not be sent with any events for this Pixel."
								);
							case "INVALID_CONSENT_ACTION":
								c = a.action;
								return (
									"\"fbq('" +
									c +
									"', ...);\" is not a valid fbq('consent', ...) action. Valid actions are 'await' and 'grant'."
								);
							case "INVALID_JSON_LD":
								b = a.jsonLd;
								return (
									"Unable to parse JSON-LD tag. Malformed JSON found: '" +
									b +
									"'."
								);
							case "SITE_CODELESS_OPT_OUT":
								c = a.pixelID;
								return (
									"Unable to open Codeless events interface for pixel as the site has opted out. Pixel ID: " +
									c +
									"."
								);
							case "PIXEL_NOT_INITIALIZED":
								b = a.pixelID;
								return "Pixel " + b + " not found";
							default:
								w(
									new Error(
										"INVALID_USER_ERROR - " + a.type + " - " + JSON.stringify(a)
									)
								);
								return "Invalid User Error.";
						}
					}
					function u(a, e) {
						try {
							var f = Math.random(),
								h =
									g.fbq && g.fbq._releaseSegment
										? g.fbq._releaseSegment
										: "unknown";
							if ((i && f < 0.01) || h === "canary") {
								f = new d(null);
								f.append("p", "pixel");
								f.append(
									"v",
									g.fbq && g.fbq.version ? g.fbq.version : "unknown"
								);
								f.append("e", a.toString());
								c(a, Error) &&
									(f.append("f", a.fileName),
									f.append("s", a.stackTrace || a.stack));
								f.append("ue", e ? "1" : "0");
								f.append("rs", h);
								b(f, "https://connect.facebook.net/log/error");
							}
						} catch (a) {}
					}
					function v(a) {
						var b = JSON.stringify(a);
						if (!Object.prototype.hasOwnProperty.call(s, b)) s[b] = !0;
						else return;
						b = t(a);
						p(b);
						r({ action: "FB_LOG", logType: q, logMessage: b }, "*");
						u(new Error(b), !0);
					}
					function w(a) {
						u(a, !1), e && p(a.toString());
					}
					l = {
						consoleWarn: m,
						logError: w,
						logUserError: v,
						enableVerboseDebugLogging: h,
						disableAllLogging: o,
						disableSampling: j
					};
					k.exports = l;
				})();
				return k.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsMobileAppBridge", function() {
			return (function(g, i, j, k) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					var a = f.getFbeventsModules("SignalsFBEventsTelemetry"),
						b = f.getFbeventsModules("SignalsFBEventsUtils"),
						c = b.each,
						d = "fbmq-0.1",
						i = {
							AddPaymentInfo: "fb_mobile_add_payment_info",
							AddToCart: "fb_mobile_add_to_cart",
							AddToWishlist: "fb_mobile_add_to_wishlist",
							CompleteRegistration: "fb_mobile_complete_registration",
							InitiateCheckout: "fb_mobile_initiated_checkout",
							Other: "other",
							Purchase: "fb_mobile_purchase",
							Search: "fb_mobile_search",
							ViewContent: "fb_mobile_content_view"
						},
						j = {
							content_ids: "fb_content_id",
							content_type: "fb_content_type",
							currency: "fb_currency",
							num_items: "fb_num_items",
							search_string: "fb_search_string",
							value: "_valueToSum"
						},
						k = {};
					function l(a) {
						return "fbmq_" + a[1];
					}
					function m(a) {
						if (
							Object.prototype.hasOwnProperty.call(k, [0]) &&
							Object.prototype.hasOwnProperty.call(k[a[0]], a[1])
						)
							return !0;
						var b = g[l(a)];
						b = b && b.getProtocol.call && b.getProtocol() === d ? b : null;
						b !== null && ((k[a[0]] = k[a[0]] || {}), (k[a[0]][a[1]] = b));
						return b !== null;
					}
					function n(a) {
						var b = [];
						a = k[a.id] || {};
						for (var c in a)
							Object.prototype.hasOwnProperty.call(a, c) && b.push(a[c]);
						return b;
					}
					function o(a) {
						return n(a).length > 0;
					}
					function p(a) {
						return Object.prototype.hasOwnProperty.call(i, a) ? i[a] : a;
					}
					function q(a) {
						return Object.prototype.hasOwnProperty.call(j, a) ? j[a] : a;
					}
					function r(a) {
						if (typeof a === "string") return a;
						if (typeof a === "number") return isNaN(a) ? undefined : a;
						try {
							return JSON.stringify(a);
						} catch (a) {}
						return a.toString && a.toString.call ? a.toString() : undefined;
					}
					function s(a) {
						var b = {};
						if (
							a != null &&
							(typeof a === "undefined" ? "undefined" : h(a)) === "object"
						)
							for (var c in a)
								if (Object.prototype.hasOwnProperty.call(a, c)) {
									var d = r(a[c]);
									d != null && (b[q(c)] = d);
								}
						return b;
					}
					var t = 0;
					function u() {
						var b = t;
						t = 0;
						a.logMobileNativeForwarding(b);
					}
					function v(a, b, d, e) {
						c(n(a), function(c) {
							return c.sendEvent(a.id, p(b), JSON.stringify(s(d)));
						}),
							t++,
							setTimeout(u, 0);
					}
					e.exports = {
						pixelHasActiveBridge: o,
						registerBridge: m,
						sendEvent: v
					};
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsNetworkUtils", function() {
			return (function(g, h, i, j) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					var a = f.getFbeventsModules("SignalsFBEventsProxyState"),
						b = f.getFbeventsModules("SignalsFBEventsQE"),
						c = f.getFbeventsModules("SignalsFBEventsUtils"),
						d = c.listenOnce;
					function i(b, c) {
						return c != null && a.getShouldProxy() ? c : b;
					}
					var j = {
						UNSENT: 0,
						OPENED: 1,
						HEADERS_RECEIVED: 2,
						LOADING: 3,
						DONE: 4
					};
					c = function c() {
						var e = this;
						k(this, c);
						this.sendGET = function(b, c, d) {
							var f = b.toQueryString();
							f = i(c, d) + "?" + f;
							if (f.length < 2048) {
								var g = new Image();
								if (d != null) {
									var h = a.getShouldProxy();
									g.onerror = function() {
										a.setShouldProxy(!0), h || e.sendGET(b, c, d);
									};
								}
								g.src = f;
								return !0;
							}
							return !1;
						};
						this.sendPOST = function(a, c, d) {
							var f = b.get("xhr_cors_post");
							if (f) {
								a.append("exp", f.code);
								if (f.isInExperimentGroup) return e._sendXHRPost(a, c, d);
							}
							return e._sendFormPOST(a, c, d);
						};
						this._sendXHRPost = function(b, c, d) {
							var f = new XMLHttpRequest(),
								g = function() {
									if (d != null) {
										var f = a.getShouldProxy();
										a.setShouldProxy(!0);
										f || e.sendPOST(b, c, d);
									}
								};
							if ("withCredentials" in f)
								(f.withCredentials = !0),
									f.open("POST", c, !1),
									(f.onreadystatechange = function() {
										if (f.readyState !== j.DONE) return;
										f.status !== 200 && g();
									});
							else if (XDomainRequest != undefined)
								(f = new XDomainRequest()), f.open("POST", c), (f.onerror = g);
							else return !1;
							f.send(b.toFormData());
							return !0;
						};
						this._sendFormPOST = function(b, c, f) {
							var j =
									"fb" +
									Math.random()
										.toString()
										.replace(".", ""),
								k = h.createElement("form");
							k.method = "post";
							k.action = i(c, f);
							k.target = j;
							k.acceptCharset = "utf-8";
							k.style.display = "none";
							var l = !!(g.attachEvent && !g.addEventListener),
								m = h.createElement("iframe");
							l && (m.name = j);
							m.src = "about:blank";
							m.id = j;
							m.name = j;
							k.appendChild(m);
							d(m, "load", function() {
								b.each(function(a, b) {
									var c = h.createElement("input");
									c.name = decodeURIComponent(a);
									c.value = b;
									k.appendChild(c);
								}),
									d(m, "load", function() {
										k.parentNode && k.parentNode.removeChild(k);
									}),
									k.submit();
							});
							if (f != null) {
								var n = a.getShouldProxy();
								m.onerror = function() {
									a.setShouldProxy(!0), n || e.sendPOST(b, c, f);
								};
							}
							h.body != null && h.body.appendChild(k);
							return !0;
						};
						this.sendBeacon = function(b, c, d) {
							if (g.navigator && g.navigator.sendBeacon) {
								var f = g.navigator.sendBeacon(i(c, d), b.toFormData());
								if (d != null && !f) {
									f = a.getShouldProxy();
									a.setShouldProxy(!0);
									f || e.sendBeacon(b, c, d);
								}
								return !0;
							}
							return !1;
						};
					};
					e.exports = new c();
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsOptIn", function() {
			return (function(g, h, c, d) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					var a = f.getFbeventsModules("SignalsFBEventsUtils"),
						b = a.each,
						c = a.filter,
						d = a.keys,
						g = a.some;
					function h(a) {
						b(d(a), function(b) {
							if (
								g(a[b], function(b) {
									return Object.prototype.hasOwnProperty.call(a, b);
								})
							)
								throw new Error(
									"Circular subOpts are not allowed. " +
										b +
										" depends on another subOpt"
								);
						});
					}
					a = (function() {
						function a() {
							var b =
								arguments.length > 0 && arguments[0] !== undefined
									? arguments[0]
									: {};
							k(this, a);
							this._opts = {};
							this._subOpts = b;
							h(this._subOpts);
						}
						i(a, [
							{
								key: "_getOpts",
								value: function(a) {
									return [].concat(
										j(
											Object.prototype.hasOwnProperty.call(this._subOpts, a)
												? this._subOpts[a]
												: []
										),
										[a]
									);
								}
							},
							{
								key: "_setOpt",
								value: function(a, b, c) {
									b = this._opts[b] || (this._opts[b] = {});
									b[a] = c;
								}
							},
							{
								key: "optIn",
								value: function(a, c) {
									var d = this,
										e =
											arguments.length > 2 && arguments[2] !== undefined
												? arguments[2]
												: !1;
									b(this._getOpts(c), function(b) {
										var f = e == !0 && d.isOptedOut(a, c);
										f || d._setOpt(a, b, !0);
									});
									return this;
								}
							},
							{
								key: "optOut",
								value: function(a, c) {
									var d = this;
									b(this._getOpts(c), function(b) {
										return d._setOpt(a, b, !1);
									});
									return this;
								}
							},
							{
								key: "isOptedIn",
								value: function(a, b) {
									return this._opts[b] != null && this._opts[b][a] === !0;
								}
							},
							{
								key: "isOptedOut",
								value: function(a, b) {
									return this._opts[b] != null && this._opts[b][a] === !1;
								}
							},
							{
								key: "listPixelIds",
								value: function(a) {
									var b = this._opts[a];
									return b != null
										? c(d(b), function(a) {
												return b[a] === !0;
										  })
										: [];
								}
							}
						]);
						return a;
					})();
					e.exports = a;
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsProxyState", function() {
			return (function(f, g, h, i) {
				var j = { exports: {} };
				j.exports;
				(function() {
					"use strict";
					var a = !1;
					j.exports = {
						getShouldProxy: function() {
							return a;
						},
						setShouldProxy: function(b) {
							a = b;
						}
					};
				})();
				return j.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsQE", function() {
			return (function(f, h, j, d) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					var a = function() {
						return Math.random();
					};
					function b(c) {
						var b = a();
						for (var d = 0; d < c.length; d++) {
							var e = c[d],
								f = e.passRate,
								h = g(e.range, 2),
								i = h[0];
							h = h[1];
							if (f < 0 || f > 1)
								throw new Error(
									"passRate should be between 0 and 1 in " + e.name
								);
							if (b >= i && b < h) {
								i = a() < f;
								return {
									name: e.name,
									isInExperimentGroup: i,
									code: e.code + (i ? "1" : "0")
								};
							}
						}
						return null;
					}
					var c = (function() {
						function a() {
							k(this, a),
								(this._groups = []),
								(this._result = null),
								(this._hasRolled = !1);
						}
						i(a, [
							{
								key: "setExperimentGroups",
								value: function(a) {
									(this._groups = a),
										(this._result = null),
										(this._hasRolled = !1);
								}
							},
							{
								key: "get",
								value: function(a) {
									if (!this._hasRolled) {
										var c = b(this._groups);
										c != null && (this._result = c);
										this._hasRolled = !0;
									}
									if (a == null || a === "") return this._result;
									return this._result != null && this._result.name === a
										? this._result
										: null;
								}
							}
						]);
						return a;
					})();
					e.exports = new c();
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsTelemetry", function() {
			return (function(g, h, i, j) {
				var k = { exports: {} };
				k.exports;
				(function() {
					"use strict";
					var a = f.getFbeventsModules("SignalsFBEventsLogging"),
						b = f.getFbeventsModules("SignalsFBEventsNetworkUtils"),
						c = b.sendPOST,
						d = f.getFbeventsModules("SignalsParamList");
					b = 0.01;
					var e = Math.random(),
						h =
							g.fbq && g.fbq._releaseSegment
								? g.fbq._releaseSegment
								: "unknown",
						i = e < b || h === "canary";
					function j(event) {
						var b =
								arguments.length > 1 && arguments[1] !== undefined
									? arguments[1]
									: 0,
							e =
								arguments.length > 2 && arguments[2] !== undefined
									? arguments[2]
									: !1;
						if (!e && !i) return;
						try {
							var f = new d(null);
							f.append("v", g.fbq && g.fbq.version ? g.fbq.version : "unknown");
							f.append("rs", h);
							f.append("e", event);
							f.append("p", b);
							c(f, "https://connect.facebook.net/log/fbevents_telemetry/");
						} catch (b) {
							a.logError(b);
						}
					}
					function l() {
						j("COALESCE_INIT");
					}
					function m(a) {
						j("COALESCE_COMPLETE", a);
					}
					function n(a) {
						j("FBMQ_FORWARDED", a, !0);
					}
					k.exports = {
						logStartBatch: l,
						logEndBatch: m,
						logMobileNativeForwarding: n
					};
				})();
				return k.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEventsUtils", function() {
			return (function(f, g, j, d) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					var a = Object.prototype.toString,
						b = !("addEventListener" in g);
					function c(a, b) {
						return b != null && a instanceof b;
					}
					function d(b) {
						return Array.isArray
							? Array.isArray(b)
							: a.call(b) === "[object Array]";
					}
					function f(a) {
						return (
							typeof a === "number" ||
							(typeof a === "string" && /^\d+$/.test(a))
						);
					}
					var j =
						Number.isInteger ||
						function(a) {
							return (
								typeof a === "number" && isFinite(a) && Math.floor(a) === a
							);
						};
					function l(a, c, d) {
						var e = b ? "on" + c : c;
						c = b ? a.attachEvent : a.addEventListener;
						var f = b ? a.detachEvent : a.removeEventListener,
							g = function b() {
								f && f.call(a, e, b, !1), d();
							};
						c && c.call(a, e, g, !1);
					}
					var m = Object.prototype.hasOwnProperty,
						n = !{ toString: null }.propertyIsEnumerable("toString"),
						o = [
							"toString",
							"toLocaleString",
							"valueOf",
							"hasOwnProperty",
							"isPrototypeOf",
							"propertyIsEnumerable",
							"constructor"
						],
						p = o.length;
					function q(a) {
						if (Object.keys) return Object.keys(a);
						if (
							(typeof a === "undefined" ? "undefined" : h(a)) !== "object" &&
							(typeof a !== "function" || a === null)
						)
							throw new TypeError("Object.keys called on non-object");
						var b = [];
						for (var c in a) m.call(a, c) && b.push(c);
						if (n) for (var d = 0; d < p; d++) m.call(a, o[d]) && b.push(o[d]);
						return b;
					}
					function r(a, b) {
						if (Array.prototype.map) return Array.prototype.map.call(a, b);
						var c = void 0,
							d = void 0;
						if (a == null) throw new TypeError(" array is null or not defined");
						a = Object(a);
						var e = a.length >>> 0;
						if (typeof b !== "function")
							throw new TypeError(b + " is not a function");
						c = new Array(e);
						d = 0;
						while (d < e) {
							var f;
							d in a && ((f = a[d]), (f = b.call(null, f, d, a)), (c[d] = f));
							d++;
						}
						return c;
					}
					function s(a) {
						if (this == null)
							throw new TypeError(
								"Array.prototype.some called on null or undefined"
							);
						if (Array.prototype.some) return Array.prototype.some.call(this, a);
						if (typeof a !== "function") throw new TypeError();
						var b = Object(this),
							c = b.length >>> 0,
							d = arguments.length >= 2 ? arguments[1] : void 0;
						for (var e = 0; e < c; e++)
							if (e in b && a.call(d, b[e], e, b)) return !0;
						return !1;
					}
					function t(a) {
						return q(a).length === 0;
					}
					function u(a) {
						if (this === void 0 || this === null) throw new TypeError();
						var b = Object(this),
							c = b.length >>> 0;
						if (typeof a !== "function") throw new TypeError();
						var d = [],
							e = arguments.length >= 2 ? arguments[1] : void 0;
						for (var f = 0; f < c; f++)
							if (f in b) {
								var g = b[f];
								a.call(e, g, f, b) && d.push(g);
							}
						return d;
					}
					var v = (function() {
						function a(b) {
							k(this, a), (this.items = b || []);
						}
						i(a, [
							{
								key: "has",
								value: function(a) {
									return s.call(this.items, function(b) {
										return b === a;
									});
								}
							},
							{
								key: "add",
								value: function(a) {
									this.items.push(a);
								}
							}
						]);
						return a;
					})();
					function w(a) {
						return a;
					}
					function x(a) {
						var b = a;
						if (a.innerText != null) return a.innerText;
						else if (b.text != null) return b.text;
						else return a.textContent;
					}
					x = {
						getTextContent: x,
						isArray: d,
						isEmptyObject: t,
						isNumber: f,
						isInteger: j,
						isInstanceOf: c,
						keys: q,
						listenOnce: l,
						map: r,
						FBSet: v,
						each: function(a, b) {
							r.call(this, a, b);
						},
						some: function(a, b) {
							return s.call(a, b);
						},
						filter: function(a, b) {
							return u.call(a, b);
						},
						castTo: w
					};
					e.exports = x;
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsParamList", function() {
			return (function(f, g, j, d) {
				var e = { exports: {} };
				e.exports;
				(function() {
					"use strict";
					var a = "deep",
						b = "shallow";
					function c(a) {
						if (JSON === undefined || JSON === null || !JSON.stringify)
							return Object.prototype.toString.call(a);
						else return JSON.stringify(a);
					}
					function d(a) {
						if (a === null || a === undefined) return !0;
						a = typeof a === "undefined" ? "undefined" : h(a);
						return a === "number" || a === "boolean" || a === "string";
					}
					var f = (function() {
						function e(a) {
							k(this, e), (this._params = []), (this._piiTranslator = a);
						}
						i(
							e,
							[
								{
									key: "containsKey",
									value: function(a) {
										for (var b = 0; b < this._params.length; b++)
											if (this._params[b].name === a) return !0;
										return !1;
									}
								},
								{
									key: "get",
									value: function(a) {
										a = a;
										for (var b = 0; b < this._params.length; b++)
											if (this._params[b].name === a)
												return this._params[b].value;
										return null;
									}
								},
								{
									key: "getAllParams",
									value: function() {
										return this._params;
									}
								},
								{
									key: "addRange",
									value: function(a) {
										var c = this;
										a.each(function(a, d) {
											return c._append(a, d, b, !1);
										});
									}
								},
								{
									key: "append",
									value: function(b, c) {
										var d =
											arguments.length > 2 && arguments[2] !== undefined
												? arguments[2]
												: !1;
										this._append(encodeURIComponent(b), c, a, d);
										return this;
									}
								},
								{
									key: "appendHash",
									value: function(b) {
										var c =
											arguments.length > 1 && arguments[1] !== undefined
												? arguments[1]
												: !1;
										for (var d in b)
											Object.prototype.hasOwnProperty.call(b, d) &&
												this._append(encodeURIComponent(d), b[d], a, c);
										return this;
									}
								},
								{
									key: "_append",
									value: function(b, e, f, g) {
										d(e)
											? this._appendPrimitive(b, e, g)
											: f === a
												? this._appendObject(b, e, g)
												: this._appendPrimitive(b, c(e), g);
									}
								},
								{
									key: "_translateValue",
									value: function(a, b, c) {
										if (typeof b === "boolean") return b ? "true" : "false";
										if (!c) return "" + b;
										if (!this._piiTranslator) throw new Error();
										return this._piiTranslator(a, "" + b);
									}
								},
								{
									key: "_appendPrimitive",
									value: function(a, b, c) {
										if (b != null) {
											b = this._translateValue(a, b, c);
											b != null && this._params.push({ name: a, value: b });
										}
									}
								},
								{
									key: "_appendObject",
									value: function(a, c, d) {
										var e = null;
										for (var f in c)
											if (Object.prototype.hasOwnProperty.call(c, f)) {
												var g = a + "[" + encodeURIComponent(f) + "]";
												try {
													this._append(g, c[f], b, d);
												} catch (a) {
													e == null && (e = a);
												}
											}
										if (e != null) throw e;
									}
								},
								{
									key: "each",
									value: function(a) {
										for (var b = 0; b < this._params.length; b++) {
											var c = this._params[b],
												d = c.name;
											c = c.value;
											a(d, c);
										}
									}
								},
								{
									key: "toQueryString",
									value: function() {
										var a = [];
										this.each(function(b, c) {
											a.push(b + "=" + encodeURIComponent(c));
										});
										return a.join("&");
									}
								},
								{
									key: "toFormData",
									value: function() {
										var a = new FormData();
										this.each(function(b, c) {
											a.append(b, c);
										});
										return a;
									}
								}
							],
							[
								{
									key: "fromHash",
									value: function(a, b) {
										return new e(b).appendHash(a);
									}
								}
							]
						);
						return e;
					})();
					e.exports = f;
				})();
				return e.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsPixelEndpoint", function() {
			return (function(g, h, i, j) {
				var k = { exports: {} };
				k.exports;
				(function() {
					"use strict";
					var a = f.getFbeventsModules("SignalsEvents"),
						b = f.getFbeventsModules("SignalsFBEventsNetworkUtils"),
						c = f.getFbeventsModules("SignalsFBEventsQE"),
						d = f.getFbeventsModules("SignalsFBEventsTelemetry"),
						e = f.getFbeventsModules("SignalsParamList"),
						j = a.trigger,
						l = {
							ENDPOINT: "https://www.facebook.com/tr/",
							PROXY_ENDPOINT: null
						},
						m = g.top !== g,
						n = !1;
					a = function(a) {
						n = a;
					};
					a(s());
					function o(a, b, c, d) {
						a.append("id", b);
						a.append("ev", c);
						a.append("dl", i.href);
						a.append("rl", h.referrer);
						a.append("if", m);
						a.append("ts", new Date().valueOf());
						a.append("cd", d);
						a.append("sw", g.screen.width);
						a.append("sh", g.screen.height);
						return a;
					}
					var p = 0;
					function q() {
						var a = p;
						p = 0;
						d.logEndBatch(a);
					}
					function r(a, f, g, h, i) {
						i = new e(i);
						o(i, a, f, g);
						h && i.addRange(h);
						a = c.get();
						if (a != null) {
							var k = a.name === "send_coalescence_telemetry";
							k &&
								p === 0 &&
								a.isInExperimentGroup &&
								(d.logStartBatch(), setTimeout(q, 0));
							a.name === "a_a_test_experiment" && i.append("exp", a.code);
						}
						p++;
						k = !!h && h.containsKey("es") && h.get("es") == "timespent";
						a = [i, l.ENDPOINT, l.PROXY_ENDPOINT];
						if (
							(k || (!n && f === "SubscribedButtonClick")) &&
							b.sendBeacon.apply(b, a)
						) {
							j("fired", "BEACON", i, g);
							return;
						}
						if (b.sendGET.apply(b, a)) {
							j("fired", "GET", i, g);
							return;
						}
						if (b.sendPOST.apply(b, a)) {
							j("fired", "POST", i, g);
							return;
						}
						throw new Error("No working send method found for this fire.");
					}
					function s() {
						var a = g.chrome,
							b = g.navigator,
							c = b.vendor,
							d = g.opr !== undefined,
							e = b.userAgent.indexOf("Edge") > -1;
						b = b.userAgent.match("CriOS");
						return (
							!b &&
							a !== null &&
							a !== undefined &&
							c === "Google Inc." &&
							d === !1 &&
							e === !1
						);
					}
					function t(a, c, d, f, h) {
						if (g.navigator && g.navigator.sendBeacon) {
							h = new e(h);
							o(h, a, c, d);
							f && h.addRange(f);
							b.sendBeacon(h, l.ENDPOINT);
						}
					}
					k.exports = {
						CONFIG: l,
						sendEvent: r,
						sendBeaconPII: t,
						setIsChrome: a
					};
				})();
				return k.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("signalsFBEventsInjectMethod", function() {
			return (function(g, h, i, j) {
				var k = { exports: {} };
				k.exports;
				(function() {
					"use strict";
					var a = f.getFbeventsModules("signalsFBEventsMakeSafe");
					function b(b, c, d) {
						var e = b[c],
							f = a(d);
						b[c] = function() {
							var a = e.apply(this, arguments);
							f.apply(this, arguments);
							return a;
						};
					}
					k.exports = b;
				})();
				return k.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("signalsFBEventsMakeSafe", function() {
			return (function(g, h, i, j) {
				var k = { exports: {} };
				k.exports;
				(function() {
					"use strict";
					var a = f.getFbeventsModules("SignalsFBEventsLogging");
					a = a.logError;
					function b(b) {
						return typeof b !== "function"
							? b
							: function() {
									try {
										return b.apply(this, arguments);
									} catch (b) {
										a(b);
									}
									return undefined;
							  };
					}
					k.exports = b;
				})();
				return k.exports;
			})(a, b, c, d);
		});
		f.ensureModuleRegistered("SignalsFBEvents", function() {
			return (function(g, h, i, j) {
				var k = { exports: {} };
				k.exports;
				(function() {
					"use strict";
					var a = g.fbq;
					a.execStart =
						g.performance && typeof g.performance.now === "function"
							? g.performance.now()
							: null;
					var b = a.getFbeventsModules("SignalsFBEventsQE"),
						c = a.getFbeventsModules("SignalsParamList"),
						d = a.getFbeventsModules("SignalsPixelEndpoint"),
						e = a.getFbeventsModules("SignalsEvents"),
						l = a.getFbeventsModules("SignalsFBEventsUtils"),
						m = a.getFbeventsModules("SignalsFBEventsLogging"),
						n = a.getFbeventsModules("SignalsEventValidation"),
						o = a.getFbeventsModules("SignalsFBEventsFBQ"),
						p = a.getFbeventsModules("SignalsFBEventsJSLoader"),
						q = a.getFbeventsModules("SignalsFBEventsFireLock"),
						r = a.getFbeventsModules("SignalsFBEventsMobileAppBridge"),
						s = a.getFbeventsModules("signalsFBEventsInjectMethod"),
						t = a.getFbeventsModules("signalsFBEventsMakeSafe"),
						u = a.getFbeventsModules("SignalsFBEventsConfigStore"),
						v = e.on,
						w = e.once,
						x = e.trigger,
						y = l.each;
					e = l.FBSet;
					var z = l.isArray,
						A = l.isInteger,
						B = l.isEmptyObject,
						C = l.isNumber,
						D = l.keys,
						E = m.logError,
						F = m.logUserError,
						G = q.global;
					function aa(b) {
						return a.getFbeventsModules(b);
					}
					function ba(b) {
						return a.fbIsModuleLoaded(b);
					}
					var H = {},
						I = -1,
						ca = Array.prototype.slice,
						J = Object.prototype.hasOwnProperty,
						K = i.href,
						L = !1,
						M = !1,
						N = [],
						O = {},
						P;
					h.referrer;
					var Q = { PageView: new e(), PixelInitialized: new e() },
						R = new o(a, O);
					function da(a) {
						for (var b in a) J.call(a, b) && (this[b] = a[b]);
						return this;
					}
					function S(b) {
						try {
							var c = ca.call(arguments);
							if (G.isLocked() && c[0] !== "consent") {
								a.queue.push(arguments);
								return;
							}
							var d = c.length === 1 && z(c[0]);
							d && (c = c[0]);
							typeof c[0] !== "string" && F({ type: "FBQ_NO_METHOD_NAME" });
							if (b.slice(0, 6) === "report") {
								var e = b.slice(6);
								e === "CustomEvent"
									? ((e = (c[1] || {}).event || e),
									  (c = ["trackCustom", e].concat(c.slice(1))))
									: (c = ["track", e].concat(c.slice(1)));
							}
							b = c.shift();
							switch (b) {
								case "addPixelId":
									L = !0;
									U.apply(this, c);
									break;
								case "init":
									M = !0;
									U.apply(this, c);
									break;
								case "set":
									T.apply(this, c);
									break;
								case "track":
									if (C(c[0])) {
										ha.apply(this, c);
										break;
									}
									if (d) {
										W.apply(this, c);
										break;
									}
									ga.apply(this, c);
									break;
								case "trackCustom":
									W.apply(this, c);
									break;
								case "send":
									X.apply(this, c);
									break;
								case "on":
									v.apply(null, c);
									break;
								case "loadPlugin":
									$(c[0]);
									break;
								default:
									R.callMethod(arguments);
									break;
							}
						} catch (a) {
							E(a);
						}
					}
					function T(c) {
						for (
							var e = arguments.length, f = Array(e > 1 ? e - 1 : 0), g = 1;
							g < e;
							g++
						)
							f[g - 1] = arguments[g];
						switch (c) {
							case "endpoint":
								var h = f[0];
								if (typeof h !== "string")
									throw new Error("endpoint value must be a string");
								d.CONFIG.ENDPOINT = h;
								break;
							case "cdn":
								var i = f[0];
								if (typeof i !== "string")
									throw new Error("cdn value must be a string");
								p.CONFIG.CDN_BASE_URL = i;
								break;
							case "releaseSegment":
								var j = f[0];
								if (typeof j !== "string")
									throw new Error("releaseSegment value must be a string");
								a._releaseSegment = j;
								break;
							case "proxy":
								var k = f[0];
								if (d.CONFIG.PROXY_ENDPOINT)
									throw new Error("proxy has already been set");
								if (typeof k !== "string")
									throw new Error("endpoint value must be a string");
								d.CONFIG.PROXY_ENDPOINT = k;
								break;
							case "autoConfig":
								var l = f[0],
									m = f[1],
									n = l === !0 || l === "true" ? "optIn" : "optOut";
								if (typeof m !== "string")
									throw new Error(
										"Invalid pixelID supplied to set autoConfig."
									);
								R.callMethod([n, m, "AutomaticSetup"]);
								break;
							case "firstPartyCookies":
								var o = f[0],
									q = f[1],
									s = o === !0 || o === "true" ? "optIn" : "optOut";
								if (typeof q === "string")
									R.callMethod([s, q, "FirstPartyCookies"]);
								else if (q === undefined) R.disableFirstPartyCookies = !0;
								else
									throw new Error(
										"Invalid pixelID supplied to set cookie controls."
									);
								break;
							case "experiments":
								var t = f[0],
									u = [],
									v = D(t);
								for (var w = 0; w < v.length; w++) u.push(t[v[w]]);
								b.setExperimentGroups(u);
								break;
							case "mobileBridge":
								var y = f[0],
									z = f[1];
								if (typeof y !== "string")
									throw new Error("Invalid pixelID supplied to set call.");
								if (typeof z !== "string")
									throw new Error("Invalid appID supplied to set call.");
								r.registerBridge([y, z]);
								break;
							case "iwlExtractors":
								var A = f[0],
									B = f[1];
								x("setIWLExtractors", { extractors: B, pixelID: A });
								break;
							default:
								var C = f[0],
									E = f[1];
								if (typeof c !== "string")
									throw new Error(
										"The metadata setting provided in the 'set' call is invalid."
									);
								if (typeof C !== "string")
									throw new Error("The metadata value must be a string.");
								if (typeof E !== "string")
									throw new Error("Invalid pixelID supplied to set call.");
								fa(c, C, E);
								break;
						}
					}
					a._initHandlers = [];
					a._initsDone = {};
					var ea = function(a) {
						return A(a) && a >= 0 && a <= Number.MAX_SAFE_INTEGER;
					};
					function U(a, b, c) {
						I = I === -1 ? Date.now() : I;
						if (typeof a === "number")
							ea(a) || F({ type: "INVALID_PIXEL_ID", pixelID: a.toString() }),
								(a = a.toString());
						else if (typeof a === "string") {
							var d = /^[1-9][0-9]{0,25}$/;
							d.test(a) || F({ type: "INVALID_PIXEL_ID", pixelID: a });
						} else if (a === undefined)
							F({ type: "INVALID_PIXEL_ID", pixelID: "undefined" });
						else if (a === null)
							F({ type: "INVALID_PIXEL_ID", pixelID: "null" });
						else {
							typeof a.toString === "function"
								? F({ type: "INVALID_PIXEL_ID", pixelID: a.toString() })
								: F({ type: "INVALID_PIXEL_ID", pixelID: "[no toString]" });
							return;
						}
						if (J.call(O, a)) {
							b && B(O[a].userData)
								? ((O[a].userData = b), $("identity"))
								: F({ type: "DUPLICATE_PIXEL_ID", pixelID: a });
							return;
						}
						d = {
							agent: c ? c.agent : null,
							id: a,
							userData: b || {},
							eventCount: 0
						};
						N.push(d);
						O[a] = d;
						b != null && $("identity");
						V();
						R.loadConfig(a);
					}
					function V() {
						for (var b = 0; b < a._initHandlers.length; b++) {
							var c = a._initHandlers[b];
							a._initsDone[b] || (a._initsDone[b] = {});
							for (var d = 0; d < N.length; d++) {
								var e = N[d];
								a._initsDone[b][e.id] || ((a._initsDone[b][e.id] = !0), c(e));
							}
						}
					}
					function fa(a, b, c) {
						var d = n.validateMetadata(a);
						d.error && F(d.error);
						if (d.warnings)
							for (var e = 0; e < d.warnings.length; e++) F(d.warnings[e]);
						if (J.call(O, c)) {
							for (var e = 0, d = N.length; e < d; e++)
								if (N[e].id === c) {
									N[e][a] = b;
									break;
								}
						} else F({ type: "SET_METADATA_ON_UNINITIALIZED_PIXEL_ID", metadataValue: b, pixelID: c });
					}
					function ga(a, b) {
						(b = b || {}),
							n.validateEventAndLog(a, b),
							a === "CustomEvent" &&
								typeof b.event === "string" &&
								(a = b.event),
							W.call(this, a, b);
					}
					function W(a, b) {
						for (var c = 0, d = N.length; c < d; c++) {
							var e = N[c];
							if (
								!(a === "PageView" && this.allowDuplicatePageViews) &&
								Object.prototype.hasOwnProperty.call(Q, a) &&
								Q[a].has(e.id)
							)
								continue;
							Z(e, a, b);
							Object.prototype.hasOwnProperty.call(Q, a) && Q[a].add(e.id);
						}
					}
					function ha(a, b) {
						Z(null, a, b);
					}
					function X(a, b) {
						for (var c = 0, d = N.length; c < d; c++) Z(N[c], a, b);
					}
					function Y(b) {
						var d = new c(a.piiTranslator);
						try {
							d.append("ud", (b && b.userData) || {}, !0);
						} catch (a) {
							x("pii_invalidated", b);
						}
						d.append("v", a.version);
						a._releaseSegment && d.append("r", a._releaseSegment);
						d.append("a", b && b.agent ? b.agent : a.agent);
						b && (d.append("ec", b.eventCount), b.eventCount++);
						var e = x("getCustomParameters", b);
						y(e, function(a) {
							return y(D(a), function(b) {
								if (d.containsKey(b))
									throw new Error(
										"Custom parameter " + b + " has already been specified."
									);
								else d.append(b, a[b]);
							});
						});
						d.append("it", I);
						e = b && b.codeless === "false";
						d.append("coo", e);
						return d;
					}
					function Z(a, b, c) {
						if (a != null && r.pixelHasActiveBridge(a)) {
							r.sendEvent(a, b, c || {});
							return;
						}
						d.sendEvent(a ? a.id : null, b, c, Y(a));
					}
					function ia() {
						while (a.queue.length && !G.isLocked()) {
							var b = a.queue.shift();
							S.apply(a, b);
						}
					}
					function ja(a) {
						return "fbevents.plugins." + a;
					}
					function $(b) {
						if (/^[a-zA-Z]\w+$/.test(b) === !1)
							throw new Error("Invalid plugin name: " + b);
						var c = ja(b);
						if (H[c]) return !0;
						if (ba(c)) {
							ka(c, aa(c));
							return !0;
						}
						b =
							p.CONFIG.CDN_BASE_URL +
							"signals/plugins/" +
							b +
							".js?v=" +
							a.version;
						if (!H[c]) {
							G.lockPlugin(c);
							p.loadJSFile(b);
							return !0;
						}
						return !1;
					}
					function ka(b, c) {
						if (Object.prototype.hasOwnProperty.call(H, b)) return;
						J.call(c, "__fbEventsPlugin") &&
							c.__fbEventsPlugin === 1 &&
							((H[b] = c), H[b].plugin(a, R, u), x("pluginLoaded", b));
						G.releasePlugin(b);
					}
					G.onUnlocked(function() {
						ia();
					});
					a.pixelId && ((L = !0), U(a.pixelId));
					((L && M) || g.fbq !== g._fbq) && F({ type: "CONFLICTING_VERSIONS" });
					N.length > 1 && F({ type: "MULTIPLE_PIXELS" });
					function la() {
						if (a.disablePushState === !0) return;
						if (!j.pushState || !j.replaceState) return;
						var b = t(function() {
							P = K;
							K = i.href;
							if (K === P) return;
							var a = new da({ allowDuplicatePageViews: !0 });
							S.call(a, "trackCustom", "PageView");
						});
						s(j, "pushState", b);
						s(j, "replaceState", b);
						g.addEventListener("popstate", b, !1);
					}
					w("fired", function() {
						return la();
					});
					function ma(b) {
						a._initHandlers.push(b), V();
					}
					function na() {
						return { pixelInitializationTime: I, pixels: N };
					}
					function oa(a) {
						(a.instance = R),
							(a.callMethod = S),
							(a.loadPlugin = $),
							(a.registerPlugin = ka),
							(a._initHandlers = []),
							(a._initsDone = {}),
							(a.on = v),
							(a.once = w),
							(a.send = X),
							(a.trigger = x),
							(a.getEventCustomParameters = Y),
							(a.addInitHandler = ma),
							(a.getState = na),
							(a.init = U),
							(a.set = T);
					}
					oa(g.fbq);
					ia();
					k.exports = { doExport: oa };
					x("execEnd");
					x("initialized", a);
				})();
				return k.exports;
			})(a, b, c, d);
		});
		e.exports = f.getFbeventsModules("SignalsFBEvents");
		f.registerPlugin && f.registerPlugin("fbevents", e.exports);
		f.ensureModuleRegistered("fbevents", function() {
			return e.exports;
		});
	})();
})(window, document, location, history);
fbq.registerPlugin("global_config", {
	__fbEventsPlugin: 1,
	plugin: function(fbq, instance, config) {
		fbq.loadPlugin("opttracking");
		fbq.set("experiments", {
			"0": { name: "beacon", range: [0, 0], code: "b", passRate: 0.5 },
			"1": { name: "logDataLayer", range: [0, 0], code: "d", passRate: 0 },
			"2": {
				name: "button_click_send_beacon",
				range: [0, 0.1],
				code: "e",
				passRate: 0.5
			},
			"3": {
				name: "button_click_send_beacon_all_browser",
				range: [0.11, 0.12],
				code: "f",
				passRate: 0.5
			},
			"4": {
				name: "all_event_send_beacon",
				range: [0.12, 0.13],
				code: "g",
				passRate: 0.5
			},
			"5": {
				name: "send_coalescence_telemetry",
				range: [0, 0],
				code: "h",
				passRate: 0.5
			},
			"6": { name: "xhr_cors_post", range: [0, 0], code: "x", passRate: 0.5 }
		});
		instance.configLoaded("global_config");
	}
});
