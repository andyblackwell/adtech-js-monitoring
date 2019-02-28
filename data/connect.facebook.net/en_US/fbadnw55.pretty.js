/*1551340732,,JIT Construction: v4805889,en_US*/

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
try {
	(window.FB && !window.FB.__buffer) ||
		(function(window, fb_fif_window) {
			var apply = Function.prototype.apply;
			function bindContext(fn, thisArg) {
				return function _sdkBound() {
					return apply.call(fn, thisArg, arguments);
				};
			}
			var global = {
				__type: "JS_SDK_SANDBOX",
				window: window,
				document: window.document
			};
			var sandboxWhitelist = [
				"setTimeout",
				"setInterval",
				"clearTimeout",
				"clearInterval"
			];
			for (var i = 0; i < sandboxWhitelist.length; i++) {
				global[sandboxWhitelist[i]] = bindContext(
					window[sandboxWhitelist[i]],
					window
				);
			}
			(function() {
				var self = window;
				var __DEV__ = 0;
				function emptyFunction() {}
				var __transform_includes = {};
				var __annotator, __bodyWrapper;
				var __buffer = window.FB && window.FB.__buffer;
				var __w, __t;
				var undefined;
				var __p;
				with (this) {
					(function() {
						var a = {},
							b = function(a, b) {
								if (!a && !b) return null;
								var c = {};
								typeof a !== "undefined" && (c.type = a);
								typeof b !== "undefined" && (c.signature = b);
								return c;
							},
							c = function(a, c) {
								return b(
									a && /^[A-Z]/.test(a) ? a : void 0,
									c && ((c.params && c.params.length) || c.returns)
										? "function(" +
										  (c.params
												? c.params
														.map(function(a) {
															return /\?/.test(a)
																? "?" + a.replace("?", "")
																: a;
														})
														.join(",")
												: "") +
										  ")" +
										  (c.returns ? ":" + c.returns : "")
										: void 0
								);
							},
							d = function(a, b, c) {
								return a;
							},
							e = function(a, b, d) {
								"sourcemeta" in __transform_includes && (a.__SMmeta = b);
								if ("typechecks" in __transform_includes) {
									b = c(b ? b.name : void 0, d);
									b && __w(a, b);
								}
								return a;
							},
							f = function(a, b, c) {
								return c.apply(a, b);
							},
							g = function(a, b, c, d) {
								d && d.params && __t.apply(a, d.params);
								c = c.apply(a, b);
								d && d.returns && __t([c, d.returns]);
								return c;
							},
							h = function(b, c, d, e, f) {
								if (f) {
									f.callId ||
										(f.callId =
											f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
									e = f.callId;
									a[e] = (a[e] || 0) + 1;
								}
								return d.apply(b, c);
							};
						typeof __transform_includes === "undefined"
							? ((__annotator = d), (__bodyWrapper = f))
							: ((__annotator = e),
							  "codeusage" in __transform_includes
									? ((__annotator = d),
									  (__bodyWrapper = h),
									  (__bodyWrapper.getCodeUsage = function() {
											return a;
									  }),
									  (__bodyWrapper.clearCodeUsage = function() {
											a = {};
									  }))
									: "typechecks" in __transform_includes
										? (__bodyWrapper = g)
										: (__bodyWrapper = f));
					})();
					(__t = function(a) {
						return a[0];
					}),
						(__w = function(a) {
							return a;
						});
					var require, __d;
					(function(a) {
						var b = {},
							c = {},
							d = [
								"global",
								"require",
								"requireDynamic",
								"requireLazy",
								"module",
								"exports"
							];
						require = function(d, e) {
							if (Object.prototype.hasOwnProperty.call(c, d)) return c[d];
							if (!Object.prototype.hasOwnProperty.call(b, d)) {
								if (e) return null;
								throw new Error("Module " + d + " has not been defined");
							}
							e = b[d];
							var f = e.deps,
								g = e.factory.length,
								h,
								i = [];
							for (var j = 0; j < g; j++) {
								switch (f[j]) {
									case "module":
										h = e;
										break;
									case "exports":
										h = e.exports;
										break;
									case "global":
										h = a;
										break;
									case "require":
										h = require;
										break;
									case "requireDynamic":
										h = null;
										break;
									case "requireLazy":
										h = null;
										break;
									default:
										h = require.call(null, f[j]);
								}
								i.push(h);
							}
							e.factory.apply(a, i);
							c[d] = e.exports;
							return e.exports;
						};
						__d = function(a, e, f, g) {
							typeof f === "function"
								? ((b[a] = { factory: f, deps: d.concat(e), exports: {} }),
								  g === 3 && require.call(null, a))
								: (c[a] = f);
						};
					})(this);
					__d(
						"ES5Array",
						[],
						function(a, b, c, d, e, f) {
							a = {};
							a.isArray = function(a) {
								return Object.prototype.toString.call(a) == "[object Array]";
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ES5ArrayPrototype",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = {};
							g.map = function(a, b) {
								if (typeof a !== "function") throw new TypeError();
								var c,
									d = this.length,
									e = new Array(d);
								for (c = 0; c < d; ++c)
									c in this && (e[c] = a.call(b, this[c], c, this));
								return e;
							};
							g.forEach = function(a, b) {
								g.map.call(this, a, b);
							};
							g.filter = function(a, b) {
								if (typeof a !== "function") throw new TypeError();
								var c,
									d,
									e = this.length,
									f = [];
								for (c = 0; c < e; ++c)
									c in this &&
										((d = this[c]), a.call(b, d, c, this) && f.push(d));
								return f;
							};
							g.every = function(a, b) {
								if (typeof a !== "function") throw new TypeError();
								var c = new Object(this),
									d = c.length;
								for (var e = 0; e < d; e++)
									if (e in c && !a.call(b, c[e], e, c)) return !1;
								return !0;
							};
							g.some = function(a, b) {
								if (typeof a !== "function") throw new TypeError();
								var c = new Object(this),
									d = c.length;
								for (var e = 0; e < d; e++)
									if (e in c && a.call(b, c[e], e, c)) return !0;
								return !1;
							};
							g.indexOf = function(a, b) {
								var c = this.length;
								b |= 0;
								b < 0 && (b += c);
								for (; b < c; b++) if (b in this && this[b] === a) return b;
								return -1;
							};
							e.exports = g;
						},
						null
					);
					__d(
						"ES5Date",
						[],
						function(a, b, c, d, e, f) {
							a = {};
							a.now = function() {
								return new Date().getTime();
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ES5FunctionPrototype",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							a = {};
							a.bind = function(a) {
								if (typeof this !== "function")
									throw new TypeError("Bind must be called on a function");
								var b = this,
									c = Array.prototype.slice.call(arguments, 1);
								function d() {
									return b.apply(
										a,
										c.concat(Array.prototype.slice.call(arguments))
									);
								}
								d.displayName = "bound:" + (b.displayName || b.name || "(?)");
								d.toString = function() {
									return "bound: " + b;
								};
								return d;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ie8DontEnum",
						[],
						function(a, b, c, d, e, f) {
							var g = [
									"toString",
									"toLocaleString",
									"valueOf",
									"hasOwnProperty",
									"isPrototypeOf",
									"prototypeIsEnumerable",
									"constructor"
								],
								h = {}.hasOwnProperty;
							a = function() {};
							({ toString: !0 }.propertyIsEnumerable("toString") &&
								(a = function(a, b) {
									for (var c = 0; c < g.length; c++) {
										var d = g[c];
										h.call(a, d) && b(d);
									}
								}));
							e.exports = a;
						},
						null
					);
					__d(
						"ES5Object",
						["ie8DontEnum"],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = {}.hasOwnProperty;
							a = {};
							function h() {}
							a.create = function(a) {
								var b = typeof a;
								if (b != "object" && b != "function")
									throw new TypeError(
										"Object prototype may only be a Object or null"
									);
								h.prototype = a;
								return new h();
							};
							a.keys = function(a) {
								var c = typeof a;
								if ((c != "object" && c != "function") || a === null)
									throw new TypeError("Object.keys called on non-object");
								var d = [];
								for (var e in a) g.call(a, e) && d.push(e);
								b("ie8DontEnum")(a, function(a) {
									return d.push(a);
								});
								return d;
							};
							a.freeze = function(a) {
								return a;
							};
							a.isFrozen = function() {
								return !1;
							};
							a.seal = function(a) {
								return a;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ES5StringPrototype",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							a = {};
							a.trim = function() {
								if (this == null)
									throw new TypeError(
										"String.prototype.trim called on null or undefined"
									);
								return String.prototype.replace.call(this, /^\s+|\s+$/g, "");
							};
							a.startsWith = function(a) {
								var b = String(this);
								if (this == null)
									throw new TypeError(
										"String.prototype.startsWith called on null or undefined"
									);
								var c = arguments.length > 1 ? Number(arguments[1]) : 0;
								isNaN(c) && (c = 0);
								var d = Math.min(Math.max(c, 0), b.length);
								return b.indexOf(String(a), c) == d;
							};
							a.endsWith = function(a) {
								var b = String(this);
								if (this == null)
									throw new TypeError(
										"String.prototype.endsWith called on null or undefined"
									);
								var c = b.length,
									d = String(a),
									e = arguments.length > 1 ? Number(arguments[1]) : c;
								isNaN(e) && (e = 0);
								var f = Math.min(Math.max(e, 0), c),
									g = f - d.length;
								return g < 0 ? !1 : b.lastIndexOf(d, g) == g;
							};
							a.includes = function(a) {
								if (this == null)
									throw new TypeError(
										"String.prototype.contains called on null or undefined"
									);
								var b = String(this),
									c = arguments.length > 1 ? Number(arguments[1]) : 0;
								isNaN(c) && (c = 0);
								return b.indexOf(String(a), c) != -1;
							};
							a.contains = a.includes;
							a.repeat = function(a) {
								__p && __p();
								if (this == null)
									throw new TypeError(
										"String.prototype.repeat called on null or undefined"
									);
								var b = String(this);
								a = a ? Number(a) : 0;
								isNaN(a) && (a = 0);
								if (a < 0 || a === Infinity) throw RangeError();
								if (a === 1) return b;
								if (a === 0) return "";
								var c = "";
								while (a) a & 1 && (c += b), (a >>= 1) && (b += b);
								return c;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ES6Array",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = {
								from: function(a) {
									__p && __p();
									if (a == null)
										throw new TypeError("Object is null or undefined");
									var b = arguments[1],
										c = arguments[2],
										d = this,
										e = Object(a),
										f =
											typeof Symbol === "function"
												? typeof Symbol === "function"
													? Symbol.iterator
													: "@@iterator"
												: "@@iterator",
										g = typeof b === "function",
										h = typeof e[f] === "function",
										i = 0,
										j,
										k;
									if (h) {
										j = typeof d === "function" ? new d() : [];
										var l = e[f](),
											m;
										while (!(m = l.next()).done)
											(k = m.value),
												g && (k = b.call(c, k, i)),
												(j[i] = k),
												(i += 1);
										j.length = i;
										return j;
									}
									var n = e.length;
									(isNaN(n) || n < 0) && (n = 0);
									j = typeof d === "function" ? new d(n) : new Array(n);
									while (i < n)
										(k = e[i]),
											g && (k = b.call(c, k, i)),
											(j[i] = k),
											(i += 1);
									j.length = i;
									return j;
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ES6ArrayPrototype",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = {
								find: function(a, b) {
									if (this == null)
										throw new TypeError(
											"Array.prototype.find called on null or undefined"
										);
									if (typeof a !== "function")
										throw new TypeError("predicate must be a function");
									a = g.findIndex.call(this, a, b);
									return a === -1 ? void 0 : this[a];
								},
								findIndex: function(a, b) {
									if (this == null)
										throw new TypeError(
											"Array.prototype.findIndex called on null or undefined"
										);
									if (typeof a !== "function")
										throw new TypeError("predicate must be a function");
									var c = Object(this),
										d = c.length >>> 0;
									for (var e = 0; e < d; e++)
										if (a.call(b, c[e], e, c)) return e;
									return -1;
								},
								fill: function(a) {
									if (this == null)
										throw new TypeError(
											"Array.prototype.fill called on null or undefined"
										);
									var b = Object(this),
										c = b.length >>> 0,
										d = arguments[1],
										e = d >> 0,
										f = e < 0 ? Math.max(c + e, 0) : Math.min(e, c),
										g = arguments[2],
										h = g === void 0 ? c : g >> 0,
										i = h < 0 ? Math.max(c + h, 0) : Math.min(h, c);
									while (f < i) (b[f] = a), f++;
									return b;
								}
							};
							e.exports = g;
						},
						null
					);
					__d(
						"ES6DatePrototype",
						[],
						function(a, b, c, d, e, f) {
							function g(a) {
								return (a < 10 ? "0" : "") + a;
							}
							a = {
								toISOString: function() {
									if (!isFinite(this)) throw new Error("Invalid time value");
									var a = this.getUTCFullYear();
									a =
										(a < 0 ? "-" : a > 9999 ? "+" : "") +
										("00000" + Math.abs(a)).slice(
											0 <= a && a <= 9999 ? -4 : -6
										);
									return (
										a +
										"-" +
										g(this.getUTCMonth() + 1) +
										"-" +
										g(this.getUTCDate()) +
										"T" +
										g(this.getUTCHours()) +
										":" +
										g(this.getUTCMinutes()) +
										":" +
										g(this.getUTCSeconds()) +
										"." +
										(this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) +
										"Z"
									);
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ES6Number",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							a = Math.pow(2, -52);
							b = Math.pow(2, 53) - 1;
							c = -1 * b;
							d = {
								isFinite: (function(a) {
									function b(b) {
										return a.apply(this, arguments);
									}
									b.toString = function() {
										return a.toString();
									};
									return b;
								})(function(a) {
									return typeof a === "number" && isFinite(a);
								}),
								isNaN: (function(a) {
									function b(b) {
										return a.apply(this, arguments);
									}
									b.toString = function() {
										return a.toString();
									};
									return b;
								})(function(a) {
									return typeof a === "number" && isNaN(a);
								}),
								isInteger: function(a) {
									return this.isFinite(a) && Math.floor(a) === a;
								},
								isSafeInteger: function(a) {
									return (
										this.isFinite(a) &&
										a >= this.MIN_SAFE_INTEGER &&
										a <= this.MAX_SAFE_INTEGER &&
										Math.floor(a) === a
									);
								},
								EPSILON: a,
								MAX_SAFE_INTEGER: b,
								MIN_SAFE_INTEGER: c
							};
							e.exports = d;
						},
						null
					);
					__d(
						"ES6Object",
						["ie8DontEnum"],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = {}.hasOwnProperty;
							a = {
								assign: function(a) {
									__p && __p();
									if (a == null)
										throw new TypeError(
											"Object.assign target cannot be null or undefined"
										);
									a = Object(a);
									for (
										var c = 0;
										c < (arguments.length <= 1 ? 0 : arguments.length - 1);
										c++
									) {
										var d =
											c + 1 < 1 || arguments.length <= c + 1
												? void 0
												: arguments[c + 1];
										if (d == null) continue;
										d = Object(d);
										for (var e in d) g.call(d, e) && (a[e] = d[e]);
										b("ie8DontEnum")(d, function(b) {
											return (a[b] = d[b]);
										});
									}
									return a;
								},
								is: function(a, b) {
									if (a === b) return a !== 0 || 1 / a === 1 / b;
									else return a !== a && b !== b;
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ES7ArrayPrototype",
						["ES5Array", "ES5ArrayPrototype"],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = b("ES5Array").isArray,
								h = b("ES5ArrayPrototype").indexOf;
							function i(a) {
								return Math.min(Math.max(j(a), 0), Number.MAX_SAFE_INTEGER);
							}
							function j(a) {
								a = Number(a);
								return isFinite(a) && a !== 0
									? k(a) * Math.floor(Math.abs(a))
									: a;
							}
							function k(a) {
								return a >= 0 ? 1 : -1;
							}
							a = {
								includes: function(a) {
									"use strict";
									__p && __p();
									if (
										a !== void 0 &&
										g(this) &&
										!(typeof a === "number" && isNaN(a))
									)
										return h.apply(this, arguments) !== -1;
									var b = Object(this),
										c = b.length ? i(b.length) : 0;
									if (c === 0) return !1;
									var d = arguments.length > 1 ? j(arguments[1]) : 0,
										e = d < 0 ? Math.max(c + d, 0) : d,
										f = isNaN(a) && typeof a === "number";
									while (e < c) {
										var k = b[e];
										if (k === a || (typeof k === "number" && f && isNaN(k)))
											return !0;
										e++;
									}
									return !1;
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ES7Object",
						["ie8DontEnum"],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = {}.hasOwnProperty;
							a = {};
							a.entries = function(a) {
								if (a == null)
									throw new TypeError("Object.entries called on non-object");
								var c = [];
								for (var d in a) g.call(a, d) && c.push([d, a[d]]);
								b("ie8DontEnum")(a, function(b) {
									return c.push([b, a[b]]);
								});
								return c;
							};
							a.values = function(a) {
								if (a == null)
									throw new TypeError("Object.values called on non-object");
								var c = [];
								for (var d in a) g.call(a, d) && c.push(a[d]);
								b("ie8DontEnum")(a, function(b) {
									return c.push(a[b]);
								});
								return c;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ES7StringPrototype",
						[],
						function(a, b, c, d, e, f) {
							a = {};
							a.trimLeft = function() {
								return this.replace(/^\s+/, "");
							};
							a.trimRight = function() {
								return this.replace(/\s+$/, "");
							};
							e.exports = a;
						},
						null
					);
					/**
					 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
					 */
					__d(
						"json3-3.3.2",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = {},
								h = { exports: g },
								i;
							function j() {
								__p && __p();
								(function() {
									__p && __p();
									var b = typeof i === "function" && i.amd,
										c = { function: !0, object: !0 },
										d = c[typeof g] && g && !g.nodeType && g,
										e = (c[typeof window] && window) || this,
										j =
											d &&
											c[typeof h] &&
											h &&
											!h.nodeType &&
											typeof a == "object" &&
											a;
									j &&
										(j.global === j || j.window === j || j.self === j) &&
										(e = j);
									function k(b, a) {
										__p && __p();
										b || (b = e.Object());
										a || (a = e.Object());
										var d = b.Number || e.Number,
											g = b.String || e.String,
											h = b.Object || e.Object,
											i = b.Date || e.Date,
											j = b.SyntaxError || e.SyntaxError,
											l = b.TypeError || e.TypeError,
											m = b.Math || e.Math;
										b = b.JSON || e.JSON;
										typeof b == "object" &&
											b &&
											((a.stringify = b.stringify), (a.parse = b.parse));
										b = h.prototype;
										var n = b.toString,
											o,
											p,
											q,
											r = new i(-3509827334573292);
										try {
											r =
												r.getUTCFullYear() == -109252 &&
												r.getUTCMonth() === 0 &&
												r.getUTCDate() === 1 &&
												r.getUTCHours() == 10 &&
												r.getUTCMinutes() == 37 &&
												r.getUTCSeconds() == 6 &&
												r.getUTCMilliseconds() == 708;
										} catch (a) {}
										function s(b) {
											__p && __p();
											if (s[b] !== q) return s[b];
											var c;
											if (b == "bug-string-char-index") c = "a"[0] != "a";
											else if (b == "json")
												c = s("json-stringify") && s("json-parse");
											else {
												var e,
													f =
														'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
												if (b == "json-stringify") {
													var h = a.stringify,
														j = typeof h == "function" && r;
													if (j) {
														(e = function() {
															return 1;
														}).toJSON = e;
														try {
															j =
																h(0) === "0" &&
																h(new d()) === "0" &&
																h(new g()) == '""' &&
																h(n) === q &&
																h(q) === q &&
																h() === q &&
																h(e) === "1" &&
																h([e]) == "[1]" &&
																h([q]) == "[null]" &&
																h(null) == "null" &&
																h([q, n, null]) == "[null,null,null]" &&
																h({ a: [e, !0, !1, null, "\0\b\n\f\r\t"] }) ==
																	f &&
																h(null, e) === "1" &&
																h([1, 2], null, 1) == "[\n 1,\n 2\n]" &&
																h(new i(-864e13)) ==
																	'"-271821-04-20T00:00:00.000Z"' &&
																h(new i(864e13)) ==
																	'"+275760-09-13T00:00:00.000Z"' &&
																h(new i(-621987552e5)) ==
																	'"-000001-01-01T00:00:00.000Z"' &&
																h(new i(-1)) == '"1969-12-31T23:59:59.999Z"';
														} catch (a) {
															j = !1;
														}
													}
													c = j;
												}
												if (b == "json-parse") {
													h = a.parse;
													if (typeof h == "function")
														try {
															if (h("0") === 0 && !h(!1)) {
																e = h(f);
																var k = e.a.length == 5 && e.a[0] === 1;
																if (k) {
																	try {
																		k = !h('"\t"');
																	} catch (a) {}
																	if (k)
																		try {
																			k = h("01") !== 1;
																		} catch (a) {}
																	if (k)
																		try {
																			k = h("1.") !== 1;
																		} catch (a) {}
																}
															}
														} catch (a) {
															k = !1;
														}
													c = k;
												}
											}
											return (s[b] = !!c);
										}
										if (!s("json")) {
											var t = "[object Function]",
												u = "[object Date]",
												v = "[object Number]",
												w = "[object String]",
												x = "[object Array]",
												y = "[object Boolean]",
												z = s("bug-string-char-index");
											if (!r)
												var A = m.floor,
													B = [
														0,
														31,
														59,
														90,
														120,
														151,
														181,
														212,
														243,
														273,
														304,
														334
													],
													C = function(a, b) {
														return (
															B[b] +
															365 * (a - 1970) +
															A((a - 1969 + (b = +(b > 1))) / 4) -
															A((a - 1901 + b) / 100) +
															A((a - 1601 + b) / 400)
														);
													};
											(o = b.hasOwnProperty) ||
												(o = function(a) {
													var b = {},
														c;
													((b.__proto__ = null),
													(b.__proto__ = { toString: 1 }),
													b).toString != n
														? (o = function(a) {
																var b = this.__proto__;
																a = a in ((this.__proto__ = null), this);
																this.__proto__ = b;
																return a;
														  })
														: ((c = b.constructor),
														  (o = function(a) {
																var b = (this.constructor || c).prototype;
																return (
																	a in this && !(a in b && this[a] === b[a])
																);
														  }));
													return o.call(this, a);
												});
											p = function(a, b) {
												__p && __p();
												var d = 0,
													e,
													f;
												(e = function() {
													this.valueOf = 0;
												}).prototype.valueOf = 0;
												f = new e();
												for (e in f) o.call(f, e) && d++;
												f = null;
												!d
													? ((f = [
															"valueOf",
															"toString",
															"toLocaleString",
															"propertyIsEnumerable",
															"isPrototypeOf",
															"hasOwnProperty",
															"constructor"
													  ]),
													  (p = function(a, b) {
															var d = n.call(a) == t,
																e,
																g =
																	(!d &&
																		typeof a.constructor != "function" &&
																		c[typeof a.hasOwnProperty] &&
																		a.hasOwnProperty) ||
																	o;
															for (e in a)
																!(d && e == "prototype") &&
																	g.call(a, e) &&
																	b(e);
															for (
																d = f.length;
																(e = f[--d]);
																g.call(a, e) && b(e)
															);
													  }))
													: d == 2
														? (p = function(a, b) {
																var c = {},
																	d = n.call(a) == t,
																	e;
																for (e in a)
																	!(d && e == "prototype") &&
																		!o.call(c, e) &&
																		(c[e] = 1) &&
																		o.call(a, e) &&
																		b(e);
														  })
														: (p = function(a, b) {
																var c = n.call(a) == t,
																	d,
																	e;
																for (d in a)
																	!(c && d == "prototype") &&
																		o.call(a, d) &&
																		!(e = d === "constructor") &&
																		b(d);
																(e || o.call(a, (d = "constructor"))) && b(d);
														  });
												return p(a, b);
											};
											if (!s("json-stringify")) {
												var D = {
														92: "\\\\",
														34: '\\"',
														8: "\\b",
														12: "\\f",
														10: "\\n",
														13: "\\r",
														9: "\\t"
													},
													E = "000000",
													F = function(a, b) {
														return (E + (b || 0)).slice(-a);
													},
													G = "\\u00",
													H = function(a) {
														__p && __p();
														var b = '"',
															c = 0,
															d = a.length,
															e = !z || d > 10,
															f = e && (z ? a.split("") : a);
														for (; c < d; c++) {
															var g = a.charCodeAt(c);
															switch (g) {
																case 8:
																case 9:
																case 10:
																case 12:
																case 13:
																case 34:
																case 92:
																	b += D[g];
																	break;
																default:
																	if (g < 32) {
																		b += G + F(2, g.toString(16));
																		break;
																	}
																	b += e ? f[c] : a.charAt(c);
															}
														}
														return b + '"';
													},
													I = function(a, b, c, d, e, f, g) {
														__p && __p();
														var h, i, j, k, m, r, s, t, z, B;
														try {
															h = b[a];
														} catch (a) {}
														if (typeof h == "object" && h) {
															i = n.call(h);
															if (i == u && !o.call(h, "toJSON"))
																if (h > -1 / 0 && h < 1 / 0) {
																	if (C) {
																		m = A(h / 864e5);
																		for (
																			j = A(m / 365.2425) + 1970 - 1;
																			C(j + 1, 0) <= m;
																			j++
																		);
																		for (
																			k = A((m - C(j, 0)) / 30.42);
																			C(j, k + 1) <= m;
																			k++
																		);
																		m = 1 + m - C(j, k);
																		r = ((h % 864e5) + 864e5) % 864e5;
																		s = A(r / 36e5) % 24;
																		t = A(r / 6e4) % 60;
																		z = A(r / 1e3) % 60;
																		r = r % 1e3;
																	} else
																		(j = h.getUTCFullYear()),
																			(k = h.getUTCMonth()),
																			(m = h.getUTCDate()),
																			(s = h.getUTCHours()),
																			(t = h.getUTCMinutes()),
																			(z = h.getUTCSeconds()),
																			(r = h.getUTCMilliseconds());
																	h =
																		(j <= 0 || j >= 1e4
																			? (j < 0 ? "-" : "+") +
																			  F(6, j < 0 ? -j : j)
																			: F(4, j)) +
																		"-" +
																		F(2, k + 1) +
																		"-" +
																		F(2, m) +
																		"T" +
																		F(2, s) +
																		":" +
																		F(2, t) +
																		":" +
																		F(2, z) +
																		"." +
																		F(3, r) +
																		"Z";
																} else h = null;
															else
																typeof h.toJSON == "function" &&
																	((i != v && i != w && i != x) ||
																		o.call(h, "toJSON")) &&
																	(h = h.toJSON(a));
														}
														c && (h = c.call(b, a, h));
														if (h === null) return "null";
														i = n.call(h);
														if (i == y) return "" + h;
														else if (i == v)
															return h > -1 / 0 && h < 1 / 0 ? "" + h : "null";
														else if (i == w) return H("" + h);
														if (typeof h == "object") {
															for (j = g.length; j--; )
																if (g[j] === h) throw l();
															g.push(h);
															B = [];
															k = f;
															f += e;
															if (i == x) {
																for (m = 0, j = h.length; m < j; m++)
																	(s = I(m, h, c, d, e, f, g)),
																		B.push(s === q ? "null" : s);
																t = B.length
																	? e
																		? "[\n" +
																		  f +
																		  B.join(",\n" + f) +
																		  "\n" +
																		  k +
																		  "]"
																		: "[" + B.join(",") + "]"
																	: "[]";
															} else
																p(d || h, function(a) {
																	var b = I(a, h, c, d, e, f, g);
																	b !== q &&
																		B.push(H(a) + ":" + (e ? " " : "") + b);
																}),
																	(t = B.length
																		? e
																			? "{\n" +
																			  f +
																			  B.join(",\n" + f) +
																			  "\n" +
																			  k +
																			  "}"
																			: "{" + B.join(",") + "}"
																		: "{}");
															g.pop();
															return t;
														}
													};
												a.stringify = function(a, b, d) {
													__p && __p();
													var e, f, g, h;
													if (c[typeof b] && b)
														if ((h = n.call(b)) == t) f = b;
														else if (h == x) {
															g = {};
															for (
																var i = 0, j = b.length, k;
																i < j;
																k = b[i++],
																	((h = n.call(k)), h == w || h == v) &&
																		(g[k] = 1)
															);
														}
													if (d)
														if ((h = n.call(d)) == v) {
															if ((d -= d % 1) > 0)
																for (
																	e = "", d > 10 && (d = 10);
																	e.length < d;
																	e += " "
																);
														} else
															h == w &&
																(e = d.length <= 10 ? d : d.slice(0, 10));
													return I(
														"",
														((k = {}), (k[""] = a), k),
														f,
														g,
														e,
														"",
														[]
													);
												};
											}
											if (!s("json-parse")) {
												var J = g.fromCharCode,
													K = {
														92: "\\",
														34: '"',
														47: "/",
														98: "\b",
														116: "\t",
														110: "\n",
														102: "\f",
														114: "\r"
													},
													L,
													M,
													N = function() {
														L = M = null;
														throw j();
													},
													O = function() {
														__p && __p();
														var a = M,
															b = a.length,
															c,
															d,
															e,
															f,
															g;
														while (L < b) {
															g = a.charCodeAt(L);
															switch (g) {
																case 9:
																case 10:
																case 13:
																case 32:
																	L++;
																	break;
																case 123:
																case 125:
																case 91:
																case 93:
																case 58:
																case 44:
																	c = z ? a.charAt(L) : a[L];
																	L++;
																	return c;
																case 34:
																	for (c = "@", L++; L < b; ) {
																		g = a.charCodeAt(L);
																		if (g < 32) N();
																		else if (g == 92) {
																			g = a.charCodeAt(++L);
																			switch (g) {
																				case 92:
																				case 34:
																				case 47:
																				case 98:
																				case 116:
																				case 110:
																				case 102:
																				case 114:
																					c += K[g];
																					L++;
																					break;
																				case 117:
																					d = ++L;
																					for (e = L + 4; L < e; L++)
																						(g = a.charCodeAt(L)),
																							(g >= 48 && g <= 57) ||
																								(g >= 97 && g <= 102) ||
																								(g >= 65 && g <= 70) ||
																								N();
																					c += J("0x" + a.slice(d, L));
																					break;
																				default:
																					N();
																			}
																		} else {
																			if (g == 34) break;
																			g = a.charCodeAt(L);
																			d = L;
																			while (g >= 32 && g != 92 && g != 34)
																				g = a.charCodeAt(++L);
																			c += a.slice(d, L);
																		}
																	}
																	if (a.charCodeAt(L) == 34) {
																		L++;
																		return c;
																	}
																	N();
																default:
																	d = L;
																	g == 45 &&
																		((f = !0), (g = a.charCodeAt(++L)));
																	if (g >= 48 && g <= 57) {
																		g == 48 &&
																			((g = a.charCodeAt(L + 1)),
																			g >= 48 && g <= 57) &&
																			N();
																		f = !1;
																		for (
																			;
																			L < b &&
																			((g = a.charCodeAt(L)),
																			g >= 48 && g <= 57);
																			L++
																		);
																		if (a.charCodeAt(L) == 46) {
																			e = ++L;
																			for (
																				;
																				e < b &&
																				((g = a.charCodeAt(e)),
																				g >= 48 && g <= 57);
																				e++
																			);
																			e == L && N();
																			L = e;
																		}
																		g = a.charCodeAt(L);
																		if (g == 101 || g == 69) {
																			g = a.charCodeAt(++L);
																			(g == 43 || g == 45) && L++;
																			for (
																				e = L;
																				e < b &&
																				((g = a.charCodeAt(e)),
																				g >= 48 && g <= 57);
																				e++
																			);
																			e == L && N();
																			L = e;
																		}
																		return +a.slice(d, L);
																	}
																	f && N();
																	if (a.slice(L, L + 4) == "true") {
																		L += 4;
																		return !0;
																	} else if (a.slice(L, L + 5) == "false") {
																		L += 5;
																		return !1;
																	} else if (a.slice(L, L + 4) == "null") {
																		L += 4;
																		return null;
																	}
																	N();
															}
														}
														return "$";
													},
													P = function(a) {
														__p && __p();
														var b, c;
														a == "$" && N();
														if (typeof a == "string") {
															if ((z ? a.charAt(0) : a[0]) == "@")
																return a.slice(1);
															if (a == "[") {
																b = [];
																for (; ; c || (c = !0)) {
																	a = O();
																	if (a == "]") break;
																	c &&
																		(a == ","
																			? ((a = O()), a == "]" && N())
																			: N());
																	a == "," && N();
																	b.push(P(a));
																}
																return b;
															} else if (a == "{") {
																b = {};
																for (; ; c || (c = !0)) {
																	a = O();
																	if (a == "}") break;
																	c &&
																		(a == ","
																			? ((a = O()), a == "}" && N())
																			: N());
																	(a == "," ||
																		typeof a != "string" ||
																		(z ? a.charAt(0) : a[0]) != "@" ||
																		O() != ":") &&
																		N();
																	b[a.slice(1)] = P(O());
																}
																return b;
															}
															N();
														}
														return a;
													},
													Q = function(a, b, c) {
														c = R(a, b, c);
														c === q ? delete a[b] : (a[b] = c);
													},
													R = function(a, b, c) {
														var d = a[b],
															e;
														if (typeof d == "object" && d)
															if (n.call(d) == x)
																for (e = d.length; e--; ) Q(d, e, c);
															else
																p(d, function(a) {
																	Q(d, a, c);
																});
														return c.call(a, b, d);
													};
												a.parse = function(a, b) {
													var c;
													L = 0;
													M = "" + a;
													a = P(O());
													O() != "$" && N();
													L = M = null;
													return b && n.call(b) == t
														? R(((c = {}), (c[""] = a), c), "", b)
														: a;
												};
											}
										}
										a.runInContext = k;
										return a;
									}
									if (d && !b) k(e, d);
									else {
										var l = e.JSON,
											m = e.JSON3,
											n = !1,
											o = k(
												e,
												(e.JSON3 = {
													noConflict: function() {
														n ||
															((n = !0),
															(e.JSON = l),
															(e.JSON3 = m),
															(l = m = null));
														return o;
													}
												})
											);
										e.JSON = { parse: o.parse, stringify: o.stringify };
									}
									b &&
										i(function() {
											return o;
										});
								}.call(this));
							}
							var k = !1,
								l = function() {
									k || ((k = !0), j());
									return h.exports;
								};
							b = function(a) {
								switch (a) {
									case void 0:
										return l();
								}
							};
							e.exports = b;
						},
						null
					);
					__d(
						"json3",
						["json3-3.3.2"],
						function(a, b, c, d, e, f) {
							e.exports = b("json3-3.3.2")();
						},
						null
					);
					__d(
						"ES",
						[
							"ES5Array",
							"ES5ArrayPrototype",
							"ES5Date",
							"ES5FunctionPrototype",
							"ES5Object",
							"ES5StringPrototype",
							"ES6Array",
							"ES6ArrayPrototype",
							"ES6DatePrototype",
							"ES6Number",
							"ES6Object",
							"ES7ArrayPrototype",
							"ES7Object",
							"ES7StringPrototype",
							"json3"
						],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = {}.toString,
								h = {
									"JSON.stringify": b("json3").stringify,
									"JSON.parse": b("json3").parse
								};
							d = {
								"Array.prototype": b("ES5ArrayPrototype"),
								"Function.prototype": b("ES5FunctionPrototype"),
								"String.prototype": b("ES5StringPrototype"),
								Object: b("ES5Object"),
								Array: b("ES5Array"),
								Date: b("ES5Date")
							};
							f = {
								Object: b("ES6Object"),
								"Array.prototype": b("ES6ArrayPrototype"),
								"Date.prototype": b("ES6DatePrototype"),
								Number: b("ES6Number"),
								Array: b("ES6Array")
							};
							b = {
								Object: b("ES7Object"),
								"String.prototype": b("ES7StringPrototype"),
								"Array.prototype": b("ES7ArrayPrototype")
							};
							function a(a) {
								__p && __p();
								for (var b in a) {
									if (!Object.prototype.hasOwnProperty.call(a, b)) continue;
									var c = a[b],
										d = b.split(".");
									if (d.length === 2) {
										var e = d[0],
											f = d[1];
										if (!e || !f || !window[e] || !window[e][f]) {
											var g = e ? window[e] : "-",
												i = e && window[e] && f ? window[e][f] : "-";
											throw new Error(
												"Unexpected state (t11975770): " +
													(e + ", " + f + ", " + g + ", " + i + ", " + b)
											);
										}
									}
									e = d.length === 2 ? window[d[0]][d[1]] : window[b];
									for (var j in c) {
										if (!Object.prototype.hasOwnProperty.call(c, j)) continue;
										if (typeof c[j] !== "function") {
											h[b + "." + j] = c[j];
											continue;
										}
										f = e[j];
										h[b + "." + j] =
											f && /\{\s+\[native code\]\s\}/.test(f) ? f : c[j];
									}
								}
							}
							a(d);
							a(f);
							a(b);
							function c(a, b, c) {
								var d = c ? g.call(a).slice(8, -1) + ".prototype" : a,
									e = h[d + "." + b] || a[b];
								if (typeof e === "function") {
									for (
										var f = arguments.length,
											i = new Array(f > 3 ? f - 3 : 0),
											j = 3;
										j < f;
										j++
									)
										i[j - 3] = arguments[j];
									return e.apply(a, i);
								} else if (e) return e;
								throw new Error(
									"Polyfill " + d + " does not have implementation of " + b
								);
							}
							e.exports = c;
						},
						null
					);
					__d(
						"sdk.babelHelpers",
						["ES5FunctionPrototype", "ES5Object", "ES6Object"],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = {},
								h = Object.prototype.hasOwnProperty;
							g.inheritsLoose = function(a, c) {
								b("ES6Object").assign(a, c);
								a.prototype = b("ES5Object").create(c && c.prototype);
								a.prototype.constructor = a;
								a.__superConstructor__ = c;
								return c;
							};
							g.inherits = g.inheritsLoose;
							g.wrapNativeSuper = function(a) {
								__p && __p();
								var b = typeof Map === "function" ? new Map() : void 0;
								g.wrapNativeSuper = function(a) {
									__p && __p();
									if (a === null) return null;
									if (typeof a !== "function")
										throw new TypeError(
											"Super expression must either be null or a function"
										);
									if (b !== void 0) {
										if (b.has(a)) return b.get(a);
										b.set(a, c);
									}
									g.inheritsLoose(c, a);
									function c() {
										a.apply(this, arguments);
									}
									return c;
								};
								return g.wrapNativeSuper(a);
							};
							g.assertThisInitialized = function(a) {
								if (a === void 0)
									throw new ReferenceError(
										"this hasn't been initialised - super() hasn't been called"
									);
								return a;
							};
							g._extends = b("ES6Object").assign;
							g["extends"] = g._extends;
							g.construct = function(a, b) {
								var c = [null];
								c.push.apply(c, b);
								return new (Function.prototype.bind.apply(a, c))();
							};
							g.objectWithoutPropertiesLoose = function(a, b) {
								var c = {};
								for (var d in a) {
									if (!h.call(a, d) || b.indexOf(d) >= 0) continue;
									c[d] = a[d];
								}
								return c;
							};
							g.objectWithoutProperties = g.objectWithoutPropertiesLoose;
							g.taggedTemplateLiteralLoose = function(a, b) {
								b || (b = a.slice(0));
								a.raw = b;
								return a;
							};
							g.bind = b("ES5FunctionPrototype").bind;
							e.exports = g;
						},
						null
					);
					var ES = require("ES");
					var babelHelpers = require("sdk.babelHelpers");
					(function(a, b) {
						var c = "keys",
							d = "values",
							e = "entries",
							f = (function() {
								var a = h(Array),
									b;
								a ||
									(b = (function() {
										function a(a, b) {
											"use strict";
											(this.$1 = a), (this.$2 = b), (this.$3 = 0);
										}
										a.prototype.next = function() {
											"use strict";
											if (this.$1 == null) return { value: void 0, done: !0 };
											var a = this.$1,
												b = this.$1.length,
												f = this.$3,
												g = this.$2;
											if (f >= b) {
												this.$1 = void 0;
												return { value: void 0, done: !0 };
											}
											this.$3 = f + 1;
											if (g === c) return { value: f, done: !1 };
											else if (g === d) return { value: a[f], done: !1 };
											else if (g === e) return { value: [f, a[f]], done: !1 };
										};
										a.prototype[
											typeof Symbol === "function"
												? Symbol.iterator
												: "@@iterator"
										] = function() {
											"use strict";
											return this;
										};
										return a;
									})());
								return {
									keys: a
										? function(a) {
												return a.keys();
										  }
										: function(a) {
												return new b(a, c);
										  },
									values: a
										? function(a) {
												return a.values();
										  }
										: function(a) {
												return new b(a, d);
										  },
									entries: a
										? function(a) {
												return a.entries();
										  }
										: function(a) {
												return new b(a, e);
										  }
								};
							})(),
							g = (function() {
								var a = h(String),
									b;
								a ||
									(b = (function() {
										function a(a) {
											"use strict";
											(this.$1 = a), (this.$2 = 0);
										}
										a.prototype.next = function() {
											"use strict";
											if (this.$1 == null) return { value: void 0, done: !0 };
											var a = this.$2,
												b = this.$1,
												c = b.length;
											if (a >= c) {
												this.$1 = void 0;
												return { value: void 0, done: !0 };
											}
											var d = b.charCodeAt(a);
											if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
											else {
												c = b.charCodeAt(a + 1);
												c < 56320 || c > 57343
													? (d = b[a])
													: (d = b[a] + b[a + 1]);
											}
											this.$2 = a + d.length;
											return { value: d, done: !1 };
										};
										a.prototype[
											typeof Symbol === "function"
												? Symbol.iterator
												: "@@iterator"
										] = function() {
											"use strict";
											return this;
										};
										return a;
									})());
								return {
									keys: function() {
										throw TypeError(
											"Strings default iterator doesn't implement keys."
										);
									},
									values: a
										? function(a) {
												return a[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
												]();
										  }
										: function(a) {
												return new b(a);
										  },
									entries: function() {
										throw TypeError(
											"Strings default iterator doesn't implement entries."
										);
									}
								};
							})();
						function h(a) {
							return (
								typeof a.prototype[
									typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
								] === "function" &&
								typeof a.prototype.values === "function" &&
								typeof a.prototype.keys === "function" &&
								typeof a.prototype.entries === "function"
							);
						}
						function i(a, b) {
							"use strict";
							(this.$1 = a),
								(this.$2 = b),
								(this.$3 = ES("Object", "keys", !1, a)),
								(this.$4 = 0);
						}
						i.prototype.next = function() {
							"use strict";
							var a = this.$3.length,
								b = this.$4,
								f = this.$2,
								g = this.$3[b];
							if (b >= a) {
								this.$1 = void 0;
								return { value: void 0, done: !0 };
							}
							this.$4 = b + 1;
							if (f === c) return { value: g, done: !1 };
							else if (f === d) return { value: this.$1[g], done: !1 };
							else if (f === e) return { value: [g, this.$1[g]], done: !1 };
						};
						i.prototype[
							typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
						] = function() {
							"use strict";
							return this;
						};
						var j = {
							keys: function(a) {
								return new i(a, c);
							},
							values: function(a) {
								return new i(a, d);
							},
							entries: function(a) {
								return new i(a, e);
							}
						};
						function k(a, b) {
							if (typeof a === "string") return g[b || d](a);
							else if (ES("Array", "isArray", !1, a)) return f[b || d](a);
							else if (
								a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]
							)
								return a[
									typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
								]();
							else return j[b || e](a);
						}
						ES("Object", "assign", !1, k, {
							KIND_KEYS: c,
							KIND_VALUES: d,
							KIND_ENTRIES: e,
							keys: function(a) {
								return k(a, c);
							},
							values: function(a) {
								return k(a, d);
							},
							entries: function(a) {
								return k(a, e);
							},
							generic: j.entries
						});
						a.FB_enumerate = k;
					})(typeof global === "undefined" ? this : global);
					(function(a, b) {
						var c = a.window || a;
						function d() {
							return (
								"f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
							);
						}
						function e(a) {
							var b = a ? a.ownerDocument || a : document;
							b = b.defaultView || c;
							return !!(
								a &&
								(typeof b.Node === "function"
									? a instanceof b.Node
									: typeof a === "object" &&
									  typeof a.nodeType === "number" &&
									  typeof a.nodeName === "string")
							);
						}
						function f(a) {
							a = c[a];
							if (a == null) return !0;
							if (typeof c.Symbol !== "function") return !0;
							var b = a.prototype;
							return (
								a == null ||
								typeof a !== "function" ||
								typeof b.clear !== "function" ||
								new a().size !== 0 ||
								typeof b.keys !== "function" ||
								typeof b.forEach !== "function"
							);
						}
						var g = a.FB_enumerate,
							h = (function() {
								if (!f("Map")) return c.Map;
								var b = "key",
									i = "value",
									j = "key+value",
									k = "$map_",
									l,
									m = "IE_HASH_";
								function a(a) {
									"use strict";
									if (!r(this)) throw new TypeError("Wrong map object type.");
									q(this);
									if (a != null) {
										a = g(a);
										var b;
										while (!(b = a.next()).done) {
											if (!r(b.value))
												throw new TypeError(
													"Expected iterable items to be pair objects."
												);
											this.set(b.value[0], b.value[1]);
										}
									}
								}
								a.prototype.clear = function() {
									"use strict";
									q(this);
								};
								a.prototype.has = function(a) {
									"use strict";
									a = o(this, a);
									return !!(a != null && this._mapData[a]);
								};
								a.prototype.set = function(a, b) {
									"use strict";
									var c = o(this, a);
									c != null && this._mapData[c]
										? (this._mapData[c][1] = b)
										: ((c = this._mapData.push([a, b]) - 1),
										  p(this, a, c),
										  (this.size += 1));
									return this;
								};
								a.prototype.get = function(a) {
									"use strict";
									a = o(this, a);
									if (a == null) return void 0;
									else return this._mapData[a][1];
								};
								a.prototype["delete"] = function(a) {
									"use strict";
									var b = o(this, a);
									if (b != null && this._mapData[b]) {
										p(this, a, void 0);
										this._mapData[b] = void 0;
										this.size -= 1;
										return !0;
									} else return !1;
								};
								a.prototype.entries = function() {
									"use strict";
									return new n(this, j);
								};
								a.prototype.keys = function() {
									"use strict";
									return new n(this, b);
								};
								a.prototype.values = function() {
									"use strict";
									return new n(this, i);
								};
								a.prototype.forEach = function(a, b) {
									"use strict";
									if (typeof a !== "function")
										throw new TypeError("Callback must be callable.");
									a = ES(a, "bind", !0, b || void 0);
									b = this._mapData;
									for (var c = 0; c < b.length; c++) {
										var d = b[c];
										d != null && a(d[1], d[0], this);
									}
								};
								a.prototype[
									typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
								] = function() {
									"use strict";
									return this.entries();
								};
								function n(a, c) {
									"use strict";
									if (!(r(a) && a._mapData))
										throw new TypeError("Object is not a map.");
									if (ES([b, j, i], "indexOf", !0, c) === -1)
										throw new Error("Invalid iteration kind.");
									this._map = a;
									this._nextIndex = 0;
									this._kind = c;
								}
								n.prototype.next = function() {
									"use strict";
									if (!this instanceof a)
										throw new TypeError(
											"Expected to be called on a MapIterator."
										);
									var c = this._map,
										d = this._nextIndex,
										e = this._kind;
									if (c == null) return s(void 0, !0);
									c = c._mapData;
									while (d < c.length) {
										var f = c[d];
										d += 1;
										this._nextIndex = d;
										if (f)
											if (e === b) return s(f[0], !1);
											else if (e === i) return s(f[1], !1);
											else if (e) return s(f, !1);
									}
									this._map = void 0;
									return s(void 0, !0);
								};
								n.prototype[
									typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
								] = function() {
									"use strict";
									return this;
								};
								function o(a, b) {
									if (r(b)) {
										var c = w(b);
										return c ? a._objectIndex[c] : void 0;
									} else {
										c = k + b;
										if (typeof b === "string") return a._stringIndex[c];
										else return a._otherIndex[c];
									}
								}
								function p(a, b, c) {
									var d = c == null;
									if (r(b)) {
										var e = w(b);
										e || (e = x(b));
										d ? delete a._objectIndex[e] : (a._objectIndex[e] = c);
									} else {
										e = k + b;
										typeof b === "string"
											? d
												? delete a._stringIndex[e]
												: (a._stringIndex[e] = c)
											: d
												? delete a._otherIndex[e]
												: (a._otherIndex[e] = c);
									}
								}
								function q(a) {
									(a._mapData = []),
										(a._objectIndex = {}),
										(a._stringIndex = {}),
										(a._otherIndex = {}),
										(a.size = 0);
								}
								function r(a) {
									return (
										a != null &&
										(typeof a === "object" || typeof a === "function")
									);
								}
								function s(a, b) {
									return { value: a, done: b };
								}
								a.__isES5 = (function() {
									try {
										Object.defineProperty({}, "__.$#x", {});
										return !0;
									} catch (a) {
										return !1;
									}
								})();
								function t(b) {
									if (!a.__isES5 || !Object.isExtensible) return !0;
									else return Object.isExtensible(b);
								}
								function u(a) {
									var b;
									switch (a.nodeType) {
										case 1:
											b = a.uniqueID;
											break;
										case 9:
											b = a.documentElement.uniqueID;
											break;
										default:
											return null;
									}
									if (b) return m + b;
									else return null;
								}
								var v = d();
								function w(b) {
									if (b[v]) return b[v];
									else if (
										!a.__isES5 &&
										b.propertyIsEnumerable &&
										b.propertyIsEnumerable[v]
									)
										return b.propertyIsEnumerable[v];
									else if (!a.__isES5 && e(b) && u(b)) return u(b);
									else if (!a.__isES5 && b[v]) return b[v];
								}
								var x = (function() {
									var b = Object.prototype.propertyIsEnumerable,
										c = 0;
									return function(d) {
										if (t(d)) {
											c += 1;
											if (a.__isES5)
												Object.defineProperty(d, v, {
													enumerable: !1,
													writable: !1,
													configurable: !1,
													value: c
												});
											else if (d.propertyIsEnumerable)
												(d.propertyIsEnumerable = function() {
													return b.apply(this, arguments);
												}),
													(d.propertyIsEnumerable[v] = c);
											else if (e(d)) d[v] = c;
											else
												throw new Error(
													"Unable to set a non-enumerable property on object."
												);
											return c;
										} else
											throw new Error(
												"Non-extensible objects are not allowed as keys."
											);
									};
								})();
								return __annotator(a, { name: "Map" });
							})();
						b = (function() {
							if (!f("Set")) return c.Set;
							function a(a) {
								"use strict";
								if (
									this == null ||
									(typeof this !== "object" && typeof this !== "function")
								)
									throw new TypeError("Wrong set object type.");
								b(this);
								if (a != null) {
									a = g(a);
									var c;
									while (!(c = a.next()).done) this.add(c.value);
								}
							}
							a.prototype.add = function(a) {
								"use strict";
								this._map.set(a, a);
								this.size = this._map.size;
								return this;
							};
							a.prototype.clear = function() {
								"use strict";
								b(this);
							};
							a.prototype["delete"] = function(a) {
								"use strict";
								a = this._map["delete"](a);
								this.size = this._map.size;
								return a;
							};
							a.prototype.entries = function() {
								"use strict";
								return this._map.entries();
							};
							a.prototype.forEach = function(a) {
								"use strict";
								var b = arguments[1],
									c = this._map.keys(),
									d;
								while (!(d = c.next()).done) a.call(b, d.value, d.value, this);
							};
							a.prototype.has = function(a) {
								"use strict";
								return this._map.has(a);
							};
							a.prototype.values = function() {
								"use strict";
								return this._map.values();
							};
							a.prototype.keys = function() {
								"use strict";
								return this.values();
							};
							a.prototype[
								typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
							] = function() {
								"use strict";
								return this.values();
							};
							function b(a) {
								(a._map = new h()), (a.size = a._map.size);
							}
							return __annotator(a, { name: "Set" });
						})();
						a.Map = h;
						a.Set = b;
					})(typeof global === "undefined" ? this : global);
					__d("JSSDKCssConfig", [], {
						rules:
							"._2vfx{font-size:100px;overflow:hidden}._2vfy{overflow:hidden}._2vf-{overflow:hidden;transition:transform .3s cubic-bezier(.14, 1, 1, 1);will-change:transform}._11u9{float:left;overflow:hidden;position:relative;text-decoration:none}._11u-{background:linear-gradient(rgba(0,0,0,0) 0\u0025, rgba(0,0,0,.2) 100\u0025);bottom:0;left:0;position:absolute;right:0;top:60\u0025}._11u- ._11u_{bottom:8px;color:#fff;left:0;margin-top:0;padding-left:8px;padding-right:8px;position:absolute;right:0;text-shadow:0 1px 3px black}._11u_{color:#606770;font-size:12\u0025;font-weight:normal;margin-top:4.023\u0025}._41-w ._11u_{font-size:13px}._41-w ._11vj{height:18px;line-height:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._11v0,._11vj{line-height:1.4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._11v0{font-weight:500}._11vj{font-weight:normal}._11us{background-position:center center;background-repeat:no-repeat;background-size:cover;border-radius:10px;width:100\u0025}._11ur{border-radius:10px;overflow:hidden;position:relative}._11vk{border:1px solid #3578e5;border-radius:4px;color:#3578e5;font-size:12\u0025;font-weight:normal;line-height:1;margin-bottom:4.023\u0025;margin-top:4.023\u0025;padding-bottom:3.448\u0025;padding-top:3.448\u0025;text-align:center}._11vk._7m01{background-color:#1479fb;color:#fff}\n._1xj7{background-color:#000;height:100\u0025;overflow:hidden;position:relative;width:100\u0025}._1xj8{height:100\u0025;left:0;position:absolute;top:0;width:100\u0025}._1xj9{background-position:center;background-repeat:no-repeat;bottom:12px;cursor:pointer;height:20px;position:absolute;right:12px;width:20px}._73wr ._1xj9{background-color:rgba(0, 0, 0, .3);background-size:16px 16px;border-radius:30px;padding:14px;right:8px;top:50px}._7jun ._1xj9{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/muQZaN-Pay7.png)}._1xj9{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/ZwUyODcSYJ2.png)}._3c3s{background-color:rgba(0, 0, 0, .6);background-image:url(https://www.facebook.com/images/marketing/video/play-medium.png);background-position:center;background-repeat:no-repeat;height:100\u0025;opacity:0;position:absolute;transition:visibility 0s linear 300ms, opacity 300ms;visibility:hidden;width:100\u0025}._7juo ._3c3s._7kbt,._7kc3 ._3c3s._7kbu{opacity:1;transition:visibility 0s linear 0s, opacity 300ms;visibility:visible}._6pfr{background-position:center center;background-repeat:no-repeat;background-size:cover;bottom:-30px;filter:blur(20px);left:-30px;pointer-events:none;position:absolute;right:-30px;top:-30px}._7462 ._3c3s,._7462 ._1xj9,._7462 ._1xj8{display:none}\n._74hs{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/1W8xR-TQBLS.png);background-position:center;background-repeat:no-repeat;background-size:cover;height:24px;position:absolute;right:16px;top:16px;width:52px}\n._74vg{align-items:center;background-color:rgba(0, 0, 0, .6);display:flex;height:100\u0025;justify-content:center;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity .3s;width:100\u0025;z-index:100}._727i{align-items:center;background-color:#fff;border-radius:12px;display:flex;flex-direction:column;font-family:-apple-system, roboto, 'Helvetica Neue', sans-serif;font-size:14px;justify-content:center;margin:10px;padding:12px 12px;text-align:center;width:200px}._727l{background-size:contain;border-radius:50\u0025;height:60px;margin-right:4px;margin-top:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:60px}._727m{margin:4px 4px 0 0}._727k{margin-right:4px;margin-top:4px}._727n{background-color:#3578e5;border-radius:4px;box-sizing:border-box;color:#fff;font-weight:normal;margin-top:24px;padding:6px;width:80\u0025}._727o{opacity:1}._727j{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/jEwNOnngB02.png);background-size:contain;height:16px;margin-left:auto;text-align:right;width:16px}\n._7kc0{opacity:0;transition:visibility 0s linear 300ms, opacity 300ms;visibility:hidden}._7kb_{background-color:#000;background-position:center;background-repeat:no-repeat;background-size:contain;filter:blur(8px) brightness(.5);transform:scale3d(1.05, 1.05, 1)}._7kc1,._7kb_{bottom:0;left:0;position:absolute;right:0;top:0}._7kc1{align-items:center;display:flex;justify-content:center}._7juo ._7kc0{opacity:1;transition:visibility 0s linear 0s, opacity 300ms;visibility:visible}._7kb-{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:20px}._7kc0 .fbAdCallToAction{background-color:rgba(255, 255, 255, .9);border-radius:6px;color:#23272f;padding:10px 20px}._7kc0 .fbAdSubtitle{color:#fff;margin-bottom:20px;text-shadow:0 0 1px black}._7kc0 .fbAdIcon{border-radius:50\u0025;height:48px;margin-bottom:8px;overflow:hidden;width:48px}\n._7kby{opacity:0;transition:visibility 0s linear 300ms, opacity 300ms;visibility:hidden}._7kbx{background-color:#000;background-position:center;background-repeat:no-repeat;background-size:contain;filter:blur(8px) brightness(.5);transform:scale3d(1.05, 1.05, 1)}._7kbz,._7kbx{bottom:0;left:0;position:absolute;right:0;top:0}._7kbz{align-items:center;display:flex;justify-content:center}._7kc2 ._7kby{opacity:1;transition:visibility 0s linear 0s, opacity 300ms;visibility:visible}._7kbv{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/VfZ9LmofHmb.png);bottom:12px;height:24px;left:12px;position:absolute;width:24px}._7kbw{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:20px}._7kby .fbAdCallToAction{background-color:rgba(255, 255, 255, .9);border-radius:6px;color:#23272f;padding:10px 20px}._7kby .fbAdSubtitle{color:#fff;margin-bottom:20px;text-shadow:0 0 1px black}._7kby .fbAdIcon{border-radius:50\u0025;height:48px;margin-bottom:8px;overflow:hidden;width:48px}\n._7juk,._7lkn,._7lkm{bottom:0;left:0;position:absolute;right:0}._7lkn{align-items:center;display:flex;flex-direction:row;font-size:14px;font-weight:normal;padding:12px 16px;position:absolute}._7lkm{background:linear-gradient( transparent, rgba(0, 0, 0, .2), rgba(0, 0, 0, .4) );height:60px;opacity:1;transition:opacity 1s}._7jum ._7jul,._7jum ._7jue,._7jum ._7lkm{opacity:0}._7jui{color:#fff;display:inline-block;flex-grow:0;min-width:40px;padding:0 12px;padding-left:0;text-align:center;text-shadow:0 0 1px rgba(0, 0, 0, .4)}._7jul{background-color:rgba(255, 255, 255, .6);border-radius:2px;display:inline-block;flex-grow:1;height:2px;margin:0 12px;overflow:hidden;transition:opacity 1s}._7jue{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/7Ri190UbT7O.png);background-position:center;background-repeat:no-repeat;cursor:pointer;filter:drop-shadow(0 0 1px rgba(0, 0, 0, .4));height:24px;padding-left:0;transition:opacity 1s;width:24px}._7juo ._7jue{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/8qlISslWDk2.png)}._7juj{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/ZwUyODcSYJ2.png);background-position:center;background-repeat:no-repeat;cursor:pointer;filter:drop-shadow(0 0 1px rgba(0, 0, 0, .4));height:20px;width:20px}._7jun ._7juj{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/muQZaN-Pay7.png)}._7juh{background-color:#3578e5;height:2px;transition:width .5s}\n._6qhh{font-family:-apple-system, roboto, 'Helvetica Neue', sans-serif;font-size:14px;font-weight:normal;text-align:left}._6qhd{align-items:center;animation:fadeIn .3s ease-in-out both;background:#dadde1;bottom:0;display:flex;justify-content:center;left:0;padding:5px;position:absolute;right:0;top:0;z-index:100}._6wfr ._6qhd{bottom:-0.5px;left:-0.5px;right:-0.5px;top:-0.5px}._6qhe{animation:fadeIn .3s ease-in-out both;background:white;border-radius:10px;box-shadow:0 2px 8px 0 rgba(0, 0, 0, .3);box-sizing:border-box;display:flex;flex-direction:column;max-height:100\u0025;max-width:320px;position:relative}._6qha{overflow-x:hidden;overflow-y:auto;padding-top:10px}._6qhg{height:23px;position:absolute;right:0;-webkit-tap-highlight-color:transparent;top:0}._6qhg:after{background-color:rgba(255, 255, 255, .8);background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/gX9Zgekva9J.png);background-position:27px 3px;background-repeat:no-repeat;background-size:12px 12px;border-radius:0 0 0 6px;box-shadow:0 0 4px 0 rgba(0, 0, 0, .15);content:'';display:block;height:18px;margin-left:5px;margin-top:0;width:42px}._6qhg:before{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/4l2RpWw-PLG.png);background-position:0 4px;background-repeat:no-repeat;background-size:10px 10px;border-right:1px solid rgba(0, 0, 0, .2);content:'';height:18px;left:11px;position:absolute;top:0;width:15px}._6qhb{box-sizing:border-box;display:flex;flex-direction:column;max-height:100\u0025;padding:10px 16px}._6qhc{padding-bottom:0}._6qhk,._6qgi{background-repeat:no-repeat;background-size:18px 18px;display:inline-block;height:18px;width:18px}._6qhh ._6qho{align-items:center;display:flex;flex-direction:row;margin:10px 0;text-decoration:none}._6qhk{flex-shrink:0;margin-right:10px}._6qhm{color:#1c1e21;font-weight:normal}._6qhl{font-size:16px;line-height:19px}._6qhn{color:#606770;font-size:14px;line-height:16px}._6qgk{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/NOeCWD5no4s.png)}._6qgl{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/BKiZzia0l7j.png)}._6qhp{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/gX9Zgekva9J.png)}._6qi1{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/PITveVN_6ro.png);background-repeat:no-repeat;background-size:100\u0025;display:inline-block;height:20px;vertical-align:middle;width:20px}._6qhz{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/kS3NV5igXMY.png);background-repeat:no-repeat;background-size:100\u0025;display:inline-block;height:11px;margin-right:6px;width:15px}._6qh6{font-weight:normal;padding-bottom:4px;position:relative}._6qh6:after{background:linear-gradient(white, rgba(255, 255, 255, 0));content:'';height:10px;left:0;position:absolute;right:0;top:100\u0025}._6qgh{border-bottom:1px solid #ccc;font-size:16px;line-height:20px;margin-bottom:6px;padding-bottom:6px;text-align:center}._6qh5{align-items:center;display:flex;flex-direction:row}._6qh4{color:#606770}._6qgi{flex-shrink:0;margin-right:10px}._6qh9{margin:0 -8px}._6qh9 ._6qh7{display:inline-block;margin-bottom:20px;margin-left:8px;margin-right:8px;vertical-align:middle}._6qh7{background:#ebedf0;border:none;border-radius:20px;color:#606770;font-size:14px;line-height:14px;padding:13px 16px;white-space:nowrap}._6qh7:focus,._6qh7:active{border:none;outline:none}._6qh7:active,._6qh8{background:#3578e5;color:#fff}._6qi4{align-items:center;display:flex;flex-direction:column}._6qhx{color:#1c1e21;font-size:16px;line-height:24px;margin-top:6px}._6qhy{color:#606770;font-size:14px;line-height:19px;margin:10px 0;text-align:center}._6qhu{background-position:center center;background-repeat:no-repeat;background-size:16px 16px;border-radius:50\u0025;height:42px;width:42px}._6qhv{background-color:#3578e5;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/oy4B7rSgGV0.png)}._6qhw{background-color:#f7923b;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/TQU64J6qQUe.png)}._6qi2{display:flex;flex-direction:row;margin-bottom:20px}._6qhh ._6qi0{align-items:center;color:#3578e5;display:flex;flex-direction:row;margin-top:auto;text-decoration:none;width:auto}._6qi1{margin-right:6px}._6qh-{border-radius:50\u0025;height:40px;margin-right:5px;width:40px}._6qhh ._6qi3{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/tlUefGrS_4W.png);background-position:center center;background-repeat:no-repeat;background-size:13px 13px;height:13px;margin-right:-10px;margin-top:-10px;padding:10px;position:absolute;right:16px;top:15px;width:13px}._6qhf{align-self:flex-start;color:#8d949e;font-size:16px;margin-top:20px}\u0040keyframes fadeIn{0\u0025{opacity:0}100\u0025{opacity:1}}",
						components: [
							"css:ANCarousel",
							"css:ANWebVideoPlayer",
							"css:ANXOutRewardedVideo",
							"css:ANWebTwoStepClickDialog",
							"css:ANWebIconAndCtaPauseCard",
							"css:ANWebSimpleEndCard",
							"css:ANWebVideoPlayerControls",
							"css:ANXOut"
						]
					});
					__d(
						"AdQualityScreenOrientation",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								HORIZONTAL: "h",
								UNKNOWN: "u",
								VERTICAL: "v"
							});
						},
						null
					);
					__d(
						"ScreenOrientation.adquality",
						["AdQualityScreenOrientation"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = {
								getScreenOrientation: function() {
									__p && __p();
									if (!window) return b("AdQualityScreenOrientation").UNKNOWN;
									if (typeof window.orientation === "number")
										return window.orientation === 0 ||
											window.orientation === 180
											? b("AdQualityScreenOrientation").VERTICAL
											: b("AdQualityScreenOrientation").HORIZONTAL;
									var a =
										window.screen &&
										(window.screen.orientation ||
											window.screen.msOrientation ||
											window.screen.mozOrientation);
									if (a) {
										a = typeof a === "string" ? a : (a || {}).type;
										if (typeof a === "string")
											return a === "portrait-primary" ||
												a === "portrait-secondary"
												? b("AdQualityScreenOrientation").VERTICAL
												: b("AdQualityScreenOrientation").HORIZONTAL;
									}
									if (window.matchMedia) {
										a = window.matchMedia("(orientation: portrait)");
										if (a)
											return a.matches
												? b("AdQualityScreenOrientation").VERTICAL
												: b("AdQualityScreenOrientation").HORIZONTAL;
									}
									return b("AdQualityScreenOrientation").UNKNOWN;
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANUtils",
						["AdQualityScreenOrientation", "ScreenOrientation.adquality"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = -1,
								h = 0,
								i = 1,
								j = [
									/^https?:\/\/itunes\.apple\.com\/([^\/]+\/)?app\//,
									/^market:\/\/details/
								];
							function k(a) {
								var b = ES(
									a,
									"indexOf",
									!0,
									"/",
									ES(a, "indexOf", !0, "://") + 3
								);
								return b === -1 ? a : a.substring(0, b);
							}
							function a(a) {
								var b = k(a);
								a = ES(a, "indexOf", !0, ":", ES(a, "indexOf", !0, "://") + 3);
								a !== -1 && (b = b.substring(0, a));
								a = ES(b, "indexOf", !0, "://");
								return a === -1 ? b : b.substring(a + 3);
							}
							function l(a) {
								var b;
								ES(a, "indexOf", !0, "://") > -1
									? (b = a.split("/")[2])
									: (b = a.split("/")[0]);
								b = b.split(":")[0];
								b = b.split("?")[0];
								b = b.split(";")[0];
								return b;
							}
							function c(a, b) {
								a = l(a);
								a = a.substring(a.length - b.length);
								return a === b;
							}
							function m(a) {
								a === void 0 && (a = null);
								a = a || window;
								var b = [a];
								try {
									while (a.parent && a !== a.parent && a.parent.document)
										b.push((a = a.parent));
								} catch (a) {}
								return b.reverse();
							}
							function d() {
								var a = n();
								a =
									(a.performance &&
										a.performance.timing &&
										a.performance.timing.navigationStart) ||
									0;
								return a;
							}
							function n() {
								return m()[0];
							}
							function o(a) {
								__p && __p();
								var b = m();
								for (var c = 0; c < b.length; c++) {
									var d = b[c],
										e = d.ADNW || {};
									d.ADNW = e;
									if (!d.ADNW) continue;
									e[a] = e[a] || {};
									e[a].ads = e[a].ads || [];
									e[a].window = e[a].window || d;
									return e[a];
								}
								throw new Error("no_writable_global");
							}
							function f() {
								return o("v55");
							}
							function p() {
								return o("v60");
							}
							function q(a) {
								if (a instanceof Node) return a;
								return a &&
									a.ownerDocument &&
									a.ownerDocument.defaultView &&
									a.ownerDocument.defaultView.Node &&
									a instanceof a.ownerDocument.defaultView.Node
									? a
									: null;
							}
							function r(a) {
								a = q(a);
								return a &&
									(a instanceof HTMLElement ||
										a instanceof a.ownerDocument.defaultView.HTMLElement)
									? a
									: null;
							}
							function s(a) {
								return a &&
									(a instanceof HTMLBodyElement ||
										a instanceof a.ownerDocument.defaultView.HTMLBodyElement)
									? a
									: null;
							}
							function t(a) {
								return !!(
									a &&
									a.id &&
									(a.id.match(/^div-gpt/) ||
										a.hasAttribute("data-google-query-id"))
								);
							}
							function u(a) {
								return a == null ? "" : typeof a === "string" ? a : a + "px";
							}
							function v(a, b, c) {
								b === void 0 && (b = null);
								c === void 0 && (c = null);
								if (!a) return;
								a.style.width = u(b);
								a.style.height = u(c);
							}
							function w(a) {
								return !!(a && a.id && a.id.match(/^apstag-f-iframe-/));
							}
							function x(a) {
								w(a) && (a = a.ownerDocument.defaultView.frameElement);
								a = a.parentElement && a.parentElement.parentElement;
								return t(a) ? a : null;
							}
							function y(a) {
								var b = a.ownerDocument.defaultView;
								return parseInt(b.getComputedStyle(a).width, 10);
							}
							function z(a) {
								var b = a.ownerDocument.defaultView;
								return parseInt(b.getComputedStyle(a).height, 10);
							}
							function A() {
								return window.screen.width;
							}
							function B() {
								return window.screen.height;
							}
							function C() {
								return (
									b("ScreenOrientation.adquality").getScreenOrientation() ==
									b("AdQualityScreenOrientation").VERTICAL
								);
							}
							function D(a) {
								if (!a) return !1;
								for (var b = 0; b < j.length; b++) {
									var c = j[b];
									if (a.match(c)) return !0;
								}
								return !1;
							}
							function E(a, b, c) {
								__p && __p();
								for (
									var b = b,
										d = ES("Array", "isArray", !1, b),
										e = 0,
										b = d
											? b
											: b[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
											  ]();
									;

								) {
									var f;
									if (d) {
										if (e >= b.length) break;
										f = b[e++];
									} else {
										e = b.next();
										if (e.done) break;
										f = e.value;
									}
									f = f;
									var g = f.ownerDocument.defaultView;
									g = g.getComputedStyle(f);
									for (
										var h = c,
											i = ES("Array", "isArray", !1, h),
											j = 0,
											h = i
												? h
												: h[
														typeof Symbol === "function"
															? Symbol.iterator
															: "@@iterator"
												  ]();
										;

									) {
										var k;
										if (i) {
											if (j >= h.length) break;
											k = h[j++];
										} else {
											j = h.next();
											if (j.done) break;
											k = j.value;
										}
										k = k;
										var l = a + k;
										f.dataset[l] = g.getPropertyValue(k);
									}
								}
							}
							function F(a, b, c) {
								__p && __p();
								for (
									var b = b,
										d = ES("Array", "isArray", !1, b),
										e = 0,
										b = d
											? b
											: b[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
											  ]();
									;

								) {
									var f;
									if (d) {
										if (e >= b.length) break;
										f = b[e++];
									} else {
										e = b.next();
										if (e.done) break;
										f = e.value;
									}
									f = f;
									if (!f) continue;
									for (
										var g = c,
											h = ES("Array", "isArray", !1, g),
											i = 0,
											g = h
												? g
												: g[
														typeof Symbol === "function"
															? Symbol.iterator
															: "@@iterator"
												  ]();
										;

									) {
										var j;
										if (h) {
											if (i >= g.length) break;
											j = g[i++];
										} else {
											i = g.next();
											if (i.done) break;
											j = i.value;
										}
										j = j;
										var k = a + j;
										f.style[j] = f.dataset[k];
									}
								}
							}
							function G(a, b, c) {
								__p && __p();
								for (
									var b = b,
										d = ES("Array", "isArray", !1, b),
										e = 0,
										b = d
											? b
											: b[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
											  ]();
									;

								) {
									var f;
									if (d) {
										if (e >= b.length) break;
										f = b[e++];
									} else {
										e = b.next();
										if (e.done) break;
										f = e.value;
									}
									f = f;
									if (!f) continue;
									for (
										var g = c,
											h = ES("Array", "isArray", !1, g),
											i = 0,
											g = h
												? g
												: g[
														typeof Symbol === "function"
															? Symbol.iterator
															: "@@iterator"
												  ]();
										;

									) {
										var j;
										if (h) {
											if (i >= g.length) break;
											j = g[i++];
										} else {
											i = g.next();
											if (i.done) break;
											j = i.value;
										}
										j = j;
										j = a + j;
										delete f.dataset[j];
									}
								}
							}
							function H(a) {
								a = a;
								while (a) {
									w(a) && (a = a.ownerDocument.defaultView.frameElement);
									if (
										window.getComputedStyle(a).overflowX !== "visible" ||
										!a.parentElement
									)
										break;
									a = a.parentElement;
								}
								return a;
							}
							function I(a) {
								a = a.getBoundingClientRect();
								var b = a.left;
								a = A() - a.right;
								return Math.max(a, b);
							}
							function J(a) {
								return a.scrollHeight > a.clientHeight + 3;
							}
							function K(a, b, c) {
								__p && __p();
								var d = c.slice(0, b).join(" ") + "\u2026";
								a.textContent = d;
								if (J(a)) return i;
								if (b >= c.length) return h;
								a.textContent = c.slice(0, b + 1).join(" ") + "\u2026";
								if (J(a)) {
									a.textContent = d;
									return h;
								}
								a.textContent = d;
								return g;
							}
							function L(a) {
								if (!J(a)) return;
								var b = a.textContent.split(" "),
									c = 0,
									d = b.length - 1;
								while (c <= d) {
									var e = Math.floor((c + d) / 2),
										f = K(a, e, b);
									if (f === h) break;
									f === i ? (d = e - 1) : (c = e + 1);
								}
							}
							function M(a) {
								a = a.querySelectorAll("[data-auto-fit-text=true]");
								for (var b = 0; b < a.length; b++) L(a[b]);
							}
							function N(a) {
								var b = !1;
								return function() {
									b || ((b = !0), a.apply(void 0, arguments));
								};
							}
							function O(a) {
								if (typeof a === "string") return a;
								else return "";
							}
							function P(a, b) {
								a.iframe.contentWindow.postMessage(b, a.domain);
							}
							e.exports = {
								calculateLargestMargin: I,
								cssSize: u,
								extractOrigin: k,
								extractDomain: a,
								extractHostname: l,
								findWidestParentElement: H,
								getDFPRoot: x,
								getElementWidth: y,
								getElementHeight: z,
								getScreenHeight: B,
								getScreenWidth: A,
								getNavigationStart: d,
								getTopMostAccessibleWindow: n,
								getV55TagStateContainer: f,
								getV60TagStateContainer: p,
								getWindowHierarchy: m,
								isA9Container: w,
								isAppStoreURL: D,
								isDfpContainer: t,
								isSameRootDomain: c,
								maybeHTMLElement: r,
								maybeHTMLBodyElement: s,
								maybeNode: q,
								once: N,
								onlyString: O,
								resizeElement: v,
								restoreElementStyles: F,
								removeStoredData: G,
								screenIsPortrait: C,
								sendToFacebook: P,
								storeElementStyles: E,
								truncateTextToFitElement: L,
								autofitTextWhereNeeded: M
							};
						},
						null
					);
					__d(
						"SimplePromise.adquality",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = 0,
								h = 1,
								i = 2;
							function j(a) {
								(this.$1 = g),
									(this.$4 = []),
									(this.$5 = []),
									a(
										ES(this.$6, "bind", !0, this),
										ES(this.$7, "bind", !0, this)
									);
							}
							j.prototype.then = function(a, b) {
								if (this.$1 === g) {
									this.$4.push(a);
									b && this.$5.push(b);
									return;
								}
								this.$1 === h ? a(this.$2) : this.$1 === i && b && b(this.$3);
							};
							j.prototype.$6 = function(a) {
								if (this.$1 !== g) return;
								this.$2 = a;
								this.$1 = h;
								while (this.$4.length > 0) this.$4.shift()(this.$2);
							};
							j.prototype.$7 = function(a) {
								if (this.$1 !== g) return;
								this.$3 = a;
								this.$1 = i;
								while (this.$5.length > 0) this.$5.shift()(this.$3);
							};
							j.resolve = function(a) {
								return new j(function(b, c) {
									b(a);
								});
							};
							j.reject = function(a) {
								return new j(function(b, c) {
									c(a);
								});
							};
							j.all = function(a) {
								return new j(function(b, c) {
									var d = [],
										e = 0,
										f = function(f) {
											var g = f;
											a[f].then(
												function(c) {
													(d[g] = c), e++, e === a.length && b(d);
												},
												function(a) {
													c(a);
												}
											);
										};
									for (var g = 0; g < a.length; g++) f(g);
								});
							};
							e.exports = j;
						},
						null
					);
					__d(
						"AMPContextLoader",
						["ANUtils", "SimplePromise.adquality"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = function(a) {
								try {
									return ES("JSON", "parse", !1, decodeURI(a.name))._context
										.ampcontextFilepath;
								} catch (a) {
									return null;
								}
							};
							function h(a) {
								return a && a.sourceUrl;
							}
							var i = function(a, c) {
								__p && __p();
								var d = b("ANUtils").getTopMostAccessibleWindow();
								if (h(d.context)) {
									a(d.context);
									return;
								}
								var e = g(d);
								if (e == null) {
									c();
									return;
								}
								d.addEventListener("amp-windowContextCreated", function() {
									a(d.context);
								});
								c = d.document;
								var f = c.createElement("script");
								f.src = e;
								c.head.appendChild(f);
							};
							a = {
								genAMPContext: function() {
									return new (b("SimplePromise.adquality"))(i);
								},
								isAMP: function() {
									var a = b("ANUtils").getTopMostAccessibleWindow();
									return h(a.context) || g(a) != null;
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"nullthrows",
						[],
						function(a, b, c, d, e, f) {
							a = function(a, b) {
								b === void 0 && (b = "Got unexpected null or undefined");
								if (a != null) return a;
								a = new Error(b);
								a.framesToPop = 1;
								throw a;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANAdChoices",
						["nullthrows"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function a(a, b) {
								(this.$1 = a), (this.$2 = b);
							}
							a.prototype.$3 = function(a) {
								__p && __p();
								var b = this.$4(),
									c = this.$5();
								b.appendChild(c);
								var d = this.$6();
								b.appendChild(d);
								d.addEventListener("click", function() {
									c.style.paddingRight = "1px";
									c.style.visibility = "visible";
									c.style.width = "55px";
									a.style.width = "72px";
									a.style.transition = "0.0s";
									window.setTimeout(function() {
										(c.style.paddingLeft = "0px"),
											(c.style.visibility = "hidden"),
											(c.style.width = "1px"),
											(a.style.transition = "0.3s");
									}, 3e3);
									return !0;
								});
								return b;
							};
							a.prototype.$4 = function() {
								__p && __p();
								var a = document.createElement("div");
								a.className = "fbAdChoices";
								a.style.backgroundColor = "#ccc";
								a.style.borderBottomLeftRadius = "4px";
								a.style.cursor = "pointer";
								a.style.right = "0";
								a.style.padding = "2px";
								a.style.lineHeight = "normal";
								a.style.textAlign = "center";
								a.style.position = "absolute";
								a.style.top = "0";
								return a;
							};
							a.prototype.$5 = function() {
								__p && __p();
								var a = document.createElement("a");
								a.innerText = "AdChoices";
								a.href = this.$2.adChoicesHref;
								a.style.color = "rgba(0,0,0,.8)";
								a.style.display = "inline-block";
								a.style.fontFamily = "sans-serif";
								a.style.fontSize = "10px";
								a.style.overflow = "hidden";
								a.style.left = "0";
								a.style.paddingLeft = "0px";
								a.style.textDecoration = "none";
								a.style.top = "0";
								a.style.transition = "0.3s";
								a.style.verticalAlign = "middle";
								a.style.visibility = "hidden";
								a.style.width = "1px";
								a.target = "_blank";
								return a;
							};
							a.prototype.$6 = function() {
								var a = document.createElement("img");
								a.src = this.$2.adChoicesIcon;
								a.style.backgroundColor = "#ccc";
								a.style.display = "inline-block";
								a.style.height = "12px";
								a.style.margin = "0";
								a.style.verticalAlign = "bottom";
								a.style.width = "12px";
								return a;
							};
							a.prototype.render = function() {
								__p && __p();
								var a = document.createElement("iframe");
								a.style.position = "absolute";
								a.style.top = "0";
								a.style.right = "0";
								a.style.border = "0";
								a.style.height = "16px";
								a.style.width = "18px";
								this.$1.appendChild(a);
								a.contentDocument.open();
								a.contentDocument.close();
								var c = this.$3(a);
								a = b("nullthrows")(a.contentDocument.body);
								a.style.margin = "0";
								a.style.padding = "0";
								a.style.overflow = "hidden";
								a.appendChild(c);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"PageVisibility.adquality",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = ["webkit", "moz", "ms", "o"];
							function a(a) {
								__p && __p();
								this.$6 = ES(
									function() {
										__p && __p();
										var a = this.getVisibilityState();
										for (
											var b = this.$5,
												c = ES("Array", "isArray", !1, b),
												d = 0,
												b = c
													? b
													: b[
															typeof Symbol === "function"
																? Symbol.iterator
																: "@@iterator"
													  ]();
											;

										) {
											var e;
											if (c) {
												if (d >= b.length) break;
												e = b[d++];
											} else {
												d = b.next();
												if (d.done) break;
												e = d.value;
											}
											e = e;
											e(a);
										}
									},
									"bind",
									!0,
									this
								);
								this.$1 = a;
								this.$5 = [];
								this.$1.hidden != null &&
									((this.$2 = "hidden"),
									(this.$3 = "visibilityState"),
									(this.$4 = "visibilitychange"));
								for (var a = 0; a < g.length; a++) {
									var b = g[a];
									if (this.$1[b + "Hidden"] != null) {
										this.$2 = b + "Hidden";
										this.$3 = b + "VisibilityState";
										this.$4 = b + "visibilitychange";
										break;
									}
								}
							}
							a.prototype.isHidden = function() {
								return this.$1[this.$2];
							};
							a.prototype.getVisibilityState = function() {
								return this.$1[this.$3];
							};
							a.prototype.addVisibilityListener = function(a) {
								this.$5.length === 0 &&
									this.$1.addEventListener(this.$4, this.$6),
									this.$5.push(a);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANBounceBackManager",
						["PageVisibility.adquality"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function a(a) {
								(this.$1 = !1), (this.$2 = 0), (this.$4 = a), (this.$3 = []);
							}
							a.prototype.$5 = function() {
								__p && __p();
								var a = ES("Date", "now", !1) - this.$2;
								for (
									var b = this.$3,
										c = ES("Array", "isArray", !1, b),
										d = 0,
										b = c
											? b
											: b[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
											  ]();
									;

								) {
									var e;
									if (c) {
										if (d >= b.length) break;
										e = b[d++];
									} else {
										d = b.next();
										if (d.done) break;
										e = d.value;
									}
									e = e;
									e(a);
								}
								this.$3 = [];
							};
							a.prototype.$6 = function() {
								this.$2 = ES("Date", "now", !1);
								var a = new (b("PageVisibility.adquality"))(this.$4);
								a.addVisibilityListener(
									ES(
										function() {
											var b = a.getVisibilityState();
											b === "visible" && this.$5();
										},
										"bind",
										!0,
										this
									)
								);
								this.$1 = !0;
							};
							a.prototype.onBounceBack = function(a) {
								this.$1 || this.$6(), this.$3.push(a);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANCallbackManager",
						["ANUtils"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function g(a) {
								return a ? b("ANUtils").once(a) : null;
							}
							function a(a, b, c, d) {
								(this.$1 = a),
									(this.$2 = b),
									(this.$3 = g(c)),
									(this.$4 = g(d)),
									(this.$5 = !1),
									(this.$7 = !1);
							}
							a.prototype.enableReward = function() {
								this.$5 = !0;
							};
							a.prototype.isRewardEnabled = function() {
								return this.$5;
							};
							a.prototype.rewardCompleted = function() {
								if (!this.$5 || !this.$3) return;
								this.$3();
							};
							a.prototype.adClosed = function() {
								if (!this.$5 || !this.$4) return;
								this.$4();
							};
							a.prototype.setVideo = function(a) {
								this.$6 = a;
							};
							a.prototype.mediaLoaded = function() {
								var a = this.$2;
								if (this.$7 || !a) return;
								this.$7 = !0;
								var c = this.$6;
								a(
									this.$1,
									c
										? b("ANUtils").once(function() {
												window.setTimeout(function() {
													return c.play(!0);
												}, 0);
										  })
										: function() {}
								);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"VPAIDDomUtils",
						["nullthrows"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function g(a, b, c) {
								__p && __p();
								b === void 0 && (b = {});
								c === void 0 && (c = []);
								a = document.createElement(a);
								ES("Object", "assign", !1, a, b);
								for (
									var b = c,
										c = ES("Array", "isArray", !1, b),
										d = 0,
										b = c
											? b
											: b[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
											  ]();
									;

								) {
									var e;
									if (c) {
										if (d >= b.length) break;
										e = b[d++];
									} else {
										d = b.next();
										if (d.done) break;
										e = d.value;
									}
									e = e;
									a.appendChild(e);
								}
								return a;
							}
							function a(a, b) {
								return g("div", { className: a }, b || []);
							}
							function c(a, b) {
								return g("a", {
									className: a,
									href: b || "#",
									target: "_blank"
								});
							}
							function d(a, b) {
								return g("span", { className: a, textContent: b });
							}
							function f(a, c) {
								return b("nullthrows")(a.querySelector(c));
							}
							e.exports = { anchor: c, dom: g, div: a, find: f, span: d };
						},
						null
					);
					__d(
						"csx",
						[],
						function(a, b, c, d, e, f) {
							function a(a) {
								throw new Error(
									"csx: Unexpected class selector transformation."
								);
							}
							e.exports = a;
						},
						null
					);
					__d(
						"cx",
						[],
						function(a, b, c, d, e, f) {
							function a(a) {
								throw new Error("cx: Unexpected class transformation.");
							}
							e.exports = a;
						},
						null
					);
					__d(
						"ANCarouselItem",
						["csx", "cx", "VPAIDDomUtils"],
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							var i = b("VPAIDDomUtils").div,
								j = b("VPAIDDomUtils").dom,
								k = b("VPAIDDomUtils").find,
								l = function(a, b) {
									__p && __p();
									b === void 0 && (b = []);
									var c = document.createElement("a");
									c.className = a;
									for (
										var a = b,
											b = ES("Array", "isArray", !1, a),
											d = 0,
											a = b
												? a
												: a[
														typeof Symbol === "function"
															? Symbol.iterator
															: "@@iterator"
												  ]();
										;

									) {
										var e;
										if (b) {
											if (d >= a.length) break;
											e = a[d++];
										} else {
											d = a.next();
											if (d.done) break;
											e = d.value;
										}
										e = e;
										c.appendChild(e);
									}
									c.href = "#";
									return c;
								},
								m = function(a, b) {
									b === void 0 && (b = "");
									return j("div", { className: a, textContent: b });
								};
							function a(a, b, c) {
								(this.$4 = b),
									(this.$1 = a),
									(this.$5 = c),
									(this.$2 = this.$6());
							}
							a.prototype.setImageSize = function(a) {
								a = a + "px";
								this.$2.style.width = a;
								this.$3.style.width = a;
								this.$3.style.height = a;
							};
							a.prototype.$6 = function() {
								__p && __p();
								var a;
								this.$5 === "Empty" ? (a = "_11vk") : (a = "_11vk _7m01");
								a = l("_11u9", [
									i("_11ur", [
										i("_11us"),
										i("_11u-", [
											i("_11u_", [
												m("_11v0", this.$1.adTitle),
												m("_11vj", this.$1.adBody)
											])
										])
									]),
									m(a, this.$1.adCallToAction)
								]);
								this.$3 = k(a, "._11us");
								var b = this.$4;
								if (b != null) {
									var c = new Image();
									c.addEventListener("load", function() {
										b();
									});
									c.src = this.$1.adImage;
								}
								this.$3.style.backgroundImage = "url(" + this.$1.adImage + ")";
								return a;
							};
							a.prototype.getElement = function() {
								return this.$2;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANCarouselMotion",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = function(a, b) {
									(a.style.transform = b), (a.style.webkitTransform = b);
								},
								h = 0;
							b = function(a) {
								var b = ES("Date", "now", !1),
									c = Math.max(0, 16 - (b - h));
								h = b + c;
								return setTimeout(a, c);
							};
							var i = window.requestAnimationFrame || b,
								j =
									window.cancelAnimationFrame ||
									function(a) {
										return clearTimeout(a);
									},
								k = 4,
								l = 0.5,
								m = 60,
								n = 316,
								o = 1;
							function a(a, b) {
								(this.$2 = !1),
									(this.$6 = !1),
									(this.$8 = 0),
									(this.$11 = a),
									(this.$10 = a.getRail()),
									(this.$12 = b || function() {}),
									g(this.$10, "translate3d(0px, 0px, 0px)");
							}
							a.prototype.$13 = function() {
								this.$10.style.transition = "";
							};
							a.prototype.$14 = function() {
								this.$10.style.transition = "none";
							};
							a.prototype.$15 = function(a, b) {
								a = this.$11.closestIndex(a);
								this.$11["goto"](a);
								this.$12(a, b);
							};
							a.prototype.$16 = function(a) {
								if (this.$11.isWithinRange(a)) return a;
								if (a > 0) return a / k;
								var b = -this.$11.getMaxOffset();
								return b + (a - b) / k;
							};
							a.prototype.onMoveStart = function(a) {
								this.$11.onCriticalAnimationStart(),
									this.$7 && clearTimeout(this.$7),
									this.$14(),
									(this.$4 = this.$5 = a),
									(this.$1 = this.$8 - a.x * l),
									(this.$3 = ES("Date", "now", !1)),
									(this.$2 = !1),
									(this.$6 = !1);
							};
							a.prototype.onMove = function(a, b) {
								__p && __p();
								if (this.$6)
									if (this.$2) a.preventDefault();
									else return;
								this.$9 && j(this.$9);
								this.$5 = b;
								if (this.$1 == null || this.$4 == null || this.$5 == null)
									return;
								a = this.$4;
								var c = this.$5;
								if (this.$6)
									this.$2 &&
										(this.$9 = i(
											ES(
												function() {
													this.scrollTo(this.$16(this.$1 + b.x * l));
												},
												"bind",
												!0,
												this
											)
										));
								else if (ES("Date", "now", !1) - this.$3 > 2 * (1e3 / 60)) {
									var d = a.x - c.x;
									a = a.y - c.y;
									d === 0 ? (c = Infinity) : (c = a / d);
									Math.abs(c) < o && (this.$2 = !0);
									this.$6 = !0;
								}
							};
							a.prototype.onMoveEnd = function() {
								__p && __p();
								if (!this.$2) return;
								this.$9 && j(this.$9);
								var a = "left";
								this.$5 != null &&
									this.$4 != null &&
									(a = this.$5.x < this.$4.x ? "right" : "left");
								this.$13();
								this.$1 = this.$4 = this.$5 = null;
								var b = -this.$8,
									c = Math.round(m * this.$11.getItemWidthRatio());
								a === "right" ? (b += c) : (b -= c);
								this.$7 = setTimeout(
									ES(
										function() {
											this.$11.onCriticalAnimationEnd();
										},
										"bind",
										!0,
										this
									),
									n
								);
								this.$15(b, a);
							};
							a.prototype.scrollTo = function(a, b) {
								b != null
									? (this.$10.style.transitionDuration = b / 1e3 + "s")
									: (this.$10.style.transitionDuration = ""),
									g(this.$10, "translate3d(" + a + "px, 0px, 0px)"),
									(this.$8 = a);
							};
							a.prototype.scrollToTransition = function(a, b) {
								this.$13(),
									(this.$8 = a),
									(this.$9 = i(
										ES(
											function() {
												this.scrollTo(a, b);
											},
											"bind",
											!0,
											this
										)
									));
							};
							a.prototype.getCurrentOffset = function() {
								return -this.$8;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANCarousel",
						[
							"csx",
							"cx",
							"ANCarouselMotion",
							"VPAIDDomUtils",
							"ANCarouselItem"
						],
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							var i = b("VPAIDDomUtils").div,
								j = b("VPAIDDomUtils").find,
								k = function() {},
								l = function(a) {
									return { x: a.touches[0].clientX, y: a.touches[0].clientY };
								},
								m = 298,
								n = 174;
							c = 8;
							var o = n / m,
								p = c / n,
								q = 1.2;
							function a(a) {
								var b = a.ads,
									c = a.onEvent,
									d = a.onCriticalAnimationStart,
									e = a.onCriticalAnimationEnd,
									f = a.onLoadEventCounter;
								a = a.adFeatures;
								this.$12 = f;
								this.$4 = b;
								this.$7 = c || k;
								this.onCriticalAnimationStart = d || k;
								this.onCriticalAnimationEnd = e || k;
								this.$13 = a;
								this.$14();
							}
							a.prototype.$14 = function() {
								(this.$6 = 0),
									(this.$5 = []),
									(this.$1 = i("ANCarousel/root", [i("_2vfy", [i("_2vf-")])])),
									(this.$3 = j(this.$1, "._2vf-")),
									(this.$2 = j(this.$1, "._2vfy")),
									this.$12.addRequiredEvent(),
									ES(
										this.$4,
										"forEach",
										!0,
										ES(
											function(a, c) {
												a = new (b("ANCarouselItem"))(
													a,
													c === 0
														? ES(
																function() {
																	return this.$12.requiredEventFired();
																},
																"bind",
																!0,
																this
														  )
														: null,
													this.$13.useFilledCarouselCTA === !0
														? "Filled"
														: "Empty"
												);
												this.$5.push(a);
												this.$3.appendChild(a.getElement());
											},
											"bind",
											!0,
											this
										)
									),
									(this.$11 = new (b("ANCarouselMotion"))(
										this,
										ES(
											function(a, b) {
												this.$7("AN_CAROUSEL_EVENT_SWIPE", {
													index: a,
													direction: b
												});
											},
											"bind",
											!0,
											this
										)
									)),
									this.ensureSizes(),
									this.$15();
							};
							a.prototype.$16 = function() {
								return this.$1.clientWidth;
							};
							a.prototype.$15 = function() {
								this.$3.addEventListener(
									"touchstart",
									ES(
										function(a) {
											this.$11.onMoveStart(l(a));
										},
										"bind",
										!0,
										this
									)
								),
									this.$3.addEventListener(
										"touchmove",
										ES(
											function(a) {
												this.$11.onMove(a, l(a));
											},
											"bind",
											!0,
											this
										)
									),
									this.$3.addEventListener(
										"touchend",
										ES(
											function(a) {
												this.$11.onMoveEnd();
											},
											"bind",
											!0,
											this
										)
									);
							};
							a.prototype.$17 = function(a) {
								if (this.isWithinRange(a)) return a;
								return a > 0 ? 0 : -this.getMaxOffset();
							};
							a.prototype.$18 = function() {
								return Math.round(this.$10 * o);
							};
							a.prototype.$19 = function() {
								return Math.round(this.$8 * p);
							};
							a.prototype.$20 = function() {
								return this.$8 > n ? q : 1;
							};
							a.prototype.$21 = function(a) {
								return (this.$8 + this.$9) * a + this.$9;
							};
							a.prototype.getLinks = function() {
								return ES(this.$5, "map", !0, function(a) {
									return a.getElement();
								});
							};
							a.prototype.getElement = function() {
								return this.$1;
							};
							a.prototype.getRail = function() {
								return this.$3;
							};
							a.prototype.getItemWidthRatio = function() {
								return this.$8 / n;
							};
							a.prototype.getFullWidth = function() {
								return this.$4.length * (this.$8 + this.$9);
							};
							a.prototype.getMaxOffset = function() {
								return this.getFullWidth() - this.$10 + this.$9;
							};
							a.prototype.isIndexVisible = function(a) {
								var b = this.$11.getCurrentOffset();
								a = this.$21(a);
								return a > b && a + this.$8 < b + this.$10;
							};
							a.prototype["goto"] = function(a, b) {
								var c = -a * (this.$8 + this.$9);
								c += (this.$10 - this.$8) / 2 - this.$9;
								c = this.$17(c);
								this.$11.scrollToTransition(c, b);
								this.$6 = a;
							};
							a.prototype.closestIndex = function(a) {
								var b = this.$8 + this.$9;
								a = a + this.$10 / 2;
								a = Math.floor(a / b);
								if (a >= this.$4.length) return this.$4.length - 1;
								else if (a < 0) return 0;
								return a;
							};
							a.prototype.isWithinRange = function(a) {
								return a > 0 ? !1 : a > -this.getMaxOffset();
							};
							a.prototype.ensureSizes = function() {
								(this.$10 = this.$16() || m),
									(this.$8 = this.$18()),
									(this.$9 = this.$19()),
									(this.$1.style.fontSize = this.$20() * 100 + "px"),
									(this.$3.style.width = this.getFullWidth() + "px"),
									ES(
										this.$5,
										"forEach",
										!0,
										ES(
											function(a, b) {
												var c = a.getElement();
												a.setImageSize(this.$8);
												b < this.$5.length - 1 &&
													(c.style.marginRight = this.$9 + "px");
												b === 0 && (c.style.marginLeft = this.$9 + "px");
											},
											"bind",
											!0,
											this
										)
									);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANEventCounter",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function a() {
								(this.$1 = 0), (this.$2 = !1), (this.$3 = []);
							}
							a.prototype.addRequiredEvent = function() {
								this.addRequiredEvents();
							};
							a.prototype.addRequiredEvents = function(a) {
								a === void 0 && (a = 1), (this.$1 += a);
							};
							a.prototype.requiredEventFired = function() {
								(this.$1 -= 1),
									!this.$2 && this.$1 === 0 && ((this.$2 = !0), this.$4());
							};
							a.prototype.addListener = function(a) {
								this.$2 ? window.setTimeout(a, 0) : this.$3.push(a);
							};
							a.prototype.$4 = function() {
								__p && __p();
								for (
									var a = this.$3,
										b = ES("Array", "isArray", !1, a),
										c = 0,
										a = b
											? a
											: a[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
											  ]();
									;

								) {
									var d;
									if (b) {
										if (c >= a.length) break;
										d = a[c++];
									} else {
										c = a.next();
										if (c.done) break;
										d = c.value;
									}
									d = d;
									d();
								}
							};
							a.prototype.hasFired = function() {
								return this.$2;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANStyleChangeTracker",
						["ANUtils", "nullthrows"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = 0;
							function h() {
								g++;
								return "fban-fw-sct-" + g;
							}
							function i(a, b, c) {
								if (a.has(c)) return;
								var d = b.style.getPropertyValue(c);
								d
									? a.set(c, {
											property: c,
											value: b.style.getPropertyValue(c),
											priority: b.style.getPropertyPriority(c)
									  })
									: a.set(c, { property: c });
							}
							function a() {
								(this.$1 = new Map()),
									(this.$2 = new Map()),
									(this.$3 = new Map());
							}
							a.prototype.resize = function(a, c, d) {
								this.addChanges(a, {
									width: b("ANUtils").cssSize(c),
									height: b("ANUtils").cssSize(d)
								});
							};
							a.prototype.addChanges = function(a, c) {
								__p && __p();
								var d = this.$4(a);
								this.$1.has(d) ||
									(this.$1.set(d, new Map()), this.$2.set(d, new Map()));
								var e = b("nullthrows")(this.$1.get(d));
								d = b("nullthrows")(this.$2.get(d));
								var f = ES("Object", "keys", !1, c);
								for (var g = 0; g < f.length; g++) {
									var h = f[g];
									e.set(h, c[h]);
									i(d, a, h);
								}
							};
							a.prototype.applyChanges = function() {
								__p && __p();
								for (
									var a = this.$1,
										c = ES("Array", "isArray", !1, a),
										d = 0,
										a = c
											? a
											: a[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
											  ]();
									;

								) {
									var e;
									if (c) {
										if (d >= a.length) break;
										e = a[d++];
									} else {
										d = a.next();
										if (d.done) break;
										e = d.value;
									}
									e = e;
									var f = e[0];
									e = e[1];
									f = b("nullthrows")(this.$3.get(f));
									for (
										var e = e,
											g = ES("Array", "isArray", !1, e),
											h = 0,
											e = g
												? e
												: e[
														typeof Symbol === "function"
															? Symbol.iterator
															: "@@iterator"
												  ]();
										;

									) {
										var i;
										if (g) {
											if (h >= e.length) break;
											i = e[h++];
										} else {
											h = e.next();
											if (h.done) break;
											i = h.value;
										}
										i = i;
										var j = i[0];
										i = i[1];
										f.style.setProperty(j, i, "important");
									}
								}
							};
							a.prototype.restoreOriginalStyles = function() {
								__p && __p();
								for (
									var a = this.$2,
										c = ES("Array", "isArray", !1, a),
										d = 0,
										a = c
											? a
											: a[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
											  ]();
									;

								) {
									var e;
									if (c) {
										if (d >= a.length) break;
										e = a[d++];
									} else {
										d = a.next();
										if (d.done) break;
										e = d.value;
									}
									e = e;
									var f = e[0];
									e = e[1];
									f = b("nullthrows")(this.$3.get(f));
									for (
										var e = e,
											g = ES("Array", "isArray", !1, e),
											h = 0,
											e = g
												? e
												: e[
														typeof Symbol === "function"
															? Symbol.iterator
															: "@@iterator"
												  ]();
										;

									) {
										var i;
										if (g) {
											if (h >= e.length) break;
											i = e[h++];
										} else {
											h = e.next();
											if (h.done) break;
											i = h.value;
										}
										i = i;
										var j = i[0];
										i = i[1];
										i.value == null
											? f.style.removeProperty(j)
											: f.style.setProperty(j, i.value, i.priority);
									}
								}
							};
							a.prototype.$4 = function(a) {
								a.id || (a.id = h());
								this.$3.set(a.id, a);
								return a.id;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANFullWidthIFrame",
						["ANStyleChangeTracker", "ANUtils", "nullthrows"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function a(a, c, d, e, f) {
								(this.$1 = new (b("ANStyleChangeTracker"))()),
									(this.$2 = a),
									(this.$3 = c),
									(this.$4 = d),
									(this.$5 = e),
									(this.$6 = f);
							}
							a.prototype.resize = function(a, c) {
								__p && __p();
								var d = this.$2;
								b("ANUtils").isA9Container(this.$2) &&
									(this.$1.resize(d, a, c),
									(d = this.$2.ownerDocument.defaultView.frameElement));
								this.$1.resize(d, a, c);
								this.$1.resize(this.$4, a, c);
								this.$1.addChanges(this.$3, { display: "block" });
								var e = b("ANUtils").getDFPRoot(d);
								e != null
									? this.$7(e, d, a, c)
									: this.$1.addChanges(d, {
											overflow: "visible",
											"margin-left": "auto",
											"margin-right": "auto",
											position: "initial"
									  });
								this.$1.applyChanges();
								this.$8(d);
								this.$1.applyChanges();
							};
							a.prototype.$7 = function(a, c, d, e) {
								c = b("nullthrows")(c.parentElement);
								this.$1.addChanges(a, {
									overflow: "visible",
									"margin-left": "auto",
									"margin-right": "auto",
									position: "initial",
									height: "auto",
									width: "auto"
								});
								this.$1.resize(c, d, e);
								this.$1.addChanges(c, {
									"margin-left": "0",
									position: "initial"
								});
							};
							a.prototype.restoreOriginalStyles = function() {
								this.$1.restoreOriginalStyles();
							};
							a.prototype.$8 = function(a) {
								this.$1.addChanges(a, { "max-width": "none" });
								a = a.parentElement;
								if (!a) return;
								var c = this.$6 - a.getBoundingClientRect().left;
								this.$1.addChanges(a, {
									"margin-left": b("ANUtils").cssSize(c)
								});
								this.$1.addChanges(a, { "max-width": "none" });
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANFullWidthInline",
						["ANStyleChangeTracker", "ANUtils"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function a(a, c, d) {
								(this.$1 = new (b("ANStyleChangeTracker"))()),
									(this.$2 = a),
									(this.$3 = c),
									(this.$4 = d);
							}
							a.prototype.resize = function(a, b) {
								this.$1.resize(this.$3, a, b);
								var c = this.$5(this.$3);
								c &&
									(this.$1.resize(c, a, b),
									this.$1.addChanges(c, {
										"margin-left": "auto",
										"margin-right": "auto"
									}),
									this.$1.addChanges(this.$2, { display: "block" }));
								this.$1.applyChanges();
								this.$6();
								this.$1.applyChanges();
							};
							a.prototype.restoreOriginalStyles = function() {
								this.$1.restoreOriginalStyles();
							};
							a.prototype.$5 = function(a) {
								a =
									a.parentElement &&
									a.parentElement.parentElement &&
									a.parentElement.parentElement.parentElement;
								return a && b("ANUtils").isDfpContainer(a) ? a : null;
							};
							a.prototype.$6 = function() {
								var a = this.$3,
									c = this.$4 - a.getBoundingClientRect().left;
								this.$1.addChanges(a, {
									"margin-left": b("ANUtils").cssSize(c),
									"max-width": "none"
								});
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANFullWidthLoader",
						["ANFullWidthIFrame", "ANFullWidthInline", "ANUtils"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function g(a, b) {
								return document.defaultView &&
									document.defaultView.getComputedStyle
									? document.defaultView
											.getComputedStyle(a, "")
											.getPropertyValue(b)
									: "";
							}
							function h(a) {
								return !a || !a.nodeType || a.nodeType !== Node.ELEMENT_NODE
									? null
									: a;
							}
							var i = "fbOriginalHeightResizeChecks",
								j = "ADNW_FW_PRE_RESIZE_CHECK_FAIL",
								k = "ADNW_FW_POST_RESIZE_CHECK_FAIL",
								l = 0;
							function a(a, c, d, e, f, g, h) {
								(this.$1 = a),
									(this.$2 = c),
									(this.$3 = d),
									(this.$4 = e),
									(this.$5 = f),
									(this.$6 = g),
									(this.$8 = []),
									(this.$9 = i + l++),
									(this.$10 = b("ANUtils").getScreenHeight()),
									(this.$11 = b("ANUtils").getScreenWidth()),
									this.$2
										? (this.$7 = new (b("ANFullWidthIFrame"))(
												this.$2,
												this.$3,
												this.$4,
												this.$6,
												h
										  ))
										: (this.$7 = new (b("ANFullWidthInline"))(
												this.$3,
												this.$4,
												h
										  ));
							}
							a.prototype.resize = function(a, b) {
								__p && __p();
								var c = !1;
								if (this.$1) {
									c = this.$12();
									if (!c && this.$1) {
										this.$13();
										return !1;
									}
								}
								this.$7.resize(a, b);
								this.$3.style.visibility = "";
								a = c;
								this.$1 && c && (a = this.$14());
								this.$13();
								return a;
							};
							a.prototype.restoreOriginalStyles = function() {
								this.$7.restoreOriginalStyles();
							};
							a.prototype.$13 = function() {
								while (this.$8.length) {
									var a = this.$8.pop();
									delete a.dataset[this.$9];
								}
							};
							a.prototype.$15 = function() {
								return this.$2 ? this.$2 : this.$3;
							};
							a.prototype.$12 = function() {
								__p && __p();
								var a = this.$15();
								if (!a) return !1;
								var c = b("ANUtils").isA9Container(this.$2);
								if (a.ownerDocument.defaultView.frameElement && !c) {
									this.$6.event(j, "iframe");
									return !1;
								}
								if (!b("ANUtils").screenIsPortrait()) return !1;
								c = 0;
								var d = "";
								while (a && this.$16(a))
									(d = d || this.$17(a, c)),
										(a.dataset[this.$9] =
											b("ANUtils").getElementHeight(a) + ""),
										this.$8.push(a),
										(a = h(a.parentElement)),
										c++;
								if (d) {
									this.$6.event(j, d);
									return !1;
								}
								return !0;
							};
							a.prototype.$17 = function(a, b) {
								__p && __p();
								var c = g(a, "position");
								if (c && c !== "static" && !(b === 0 && c === "relative"))
									if (c === "relative")
										for (
											var c = a.children,
												a = ES("Array", "isArray", !1, c),
												d = 0,
												c = a
													? c
													: c[
															typeof Symbol === "function"
																? Symbol.iterator
																: "@@iterator"
													  ]();
											;

										) {
											var e;
											if (a) {
												if (d >= c.length) break;
												e = c[d++];
											} else {
												d = c.next();
												if (d.done) break;
												e = d.value;
											}
											e = e;
											e = g(e, "position");
											if (e === "absolute") return "sibling_" + b;
										}
									else return "position_" + b;
								return "";
							};
							a.prototype.$18 = function(a) {
								return Object.prototype.hasOwnProperty.call(a.dataset, this.$9)
									? b("ANUtils").getElementHeight(a) -
											parseInt(a.dataset[this.$9], 10)
									: null;
							};
							a.prototype.$14 = function() {
								__p && __p();
								var a = this.$15();
								if (!a) return !1;
								if (this.$2) {
									var c = this.$2.getBoundingClientRect();
									if (c.left < 0 || c.right > b("ANUtils").getScreenWidth()) {
										this.$6.event(k, "off_screen");
										return !1;
									}
								}
								while (a && this.$16(a)) {
									c = this.$18(a);
									if (c == null) {
										this.$6.event(k, "height_null");
										return !1;
									}
									if (c === 0) {
										this.$6.event(k, "height_unchanged");
										return !1;
									}
									a = h(a.parentElement);
								}
								return !0;
							};
							a.prototype.$16 = function(a) {
								if (a.nodeName === "BODY") return !1;
								var c = window.getComputedStyle(a).overflowY;
								if (c === "scroll" || c === "auto") return !1;
								return b("ANUtils").getElementHeight(a) > this.$10 * 2
									? !1
									: !0;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANLinkOpener",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function a(a) {
								(this.$1 = a),
									(this.$2 = document.createElement("a")),
									(this.$2.rel = "noopener noreferrer"),
									this.$1.appendChild(this.$2);
							}
							a.prototype.$3 = function(a, b) {
								(this.$2.href = a),
									(this.$2.target = b ? "_blank" : ""),
									this.$2.click();
							};
							a.prototype.openNewTab = function(a) {
								this.$3(a, !0);
							};
							a.prototype.open = function(a) {
								this.$3(a, !1);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"LogLevels",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								DEBUG: 1,
								WARNING: 2,
								ERROR: 3
							});
						},
						null
					);
					__d(
						"getTime",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							function a() {
								return ES("Date", "now", !1);
							}
							e.exports = a;
						},
						null
					);
					__d(
						"ANLogger",
						["LogLevels", "getTime"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function a(a, b, c, d) {
								(this.$1 = a),
									(this.$3 = b),
									(this.$2 = c),
									(this.$4 = d),
									(this.$5 = []);
							}
							a.prototype.setLogLevel = function(a) {
								this.$1 = a;
							};
							a.prototype.setClientEventURL = function(a) {
								__p && __p();
								this.$6 = a;
								for (
									var a = this.$5,
										b = ES("Array", "isArray", !1, a),
										c = 0,
										a = b
											? a
											: a[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
											  ]();
									;

								) {
									var d;
									if (b) {
										if (c >= a.length) break;
										d = a[c++];
									} else {
										c = a.next();
										if (c.done) break;
										d = c.value;
									}
									d = d;
									this.$7(d.timestamp, d.params);
								}
								this.$5 = [];
							};
							a.prototype.debug = function(a, c) {
								this.$1 <= b("LogLevels").DEBUG && this.event(a, c);
							};
							a.prototype.error = function(a) {
								this.$1 <= b("LogLevels").ERROR &&
									this.event("ADNW_ADERROR", a);
							};
							a.prototype.event = function(a, b, c) {
								a = { event_name: a };
								b != null && (a.error_message = "" + b);
								c != null && (a.error_stack_trace = c);
								this.eventWithParams(a);
							};
							a.prototype.eventWithParams = function(a) {
								var c = b("getTime")();
								if (!this.$6) {
									this.$5.push({ timestamp: c, params: a });
									return;
								}
								this.$7(c, a);
							};
							a.prototype.$7 = function(a, b) {
								(b.client_ts = a),
									this.$2 > 0 &&
										(b.latency_since_navigation_start = a - this.$2),
									(b.latency_since_sdk_init = a - this.$3),
									window.$8 && (b.visibility_changed = !0),
									this.$4(this.$6, b);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANMWebAdElement",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								FB_AD_BODY: "fbAdBody",
								FB_AD_CALL_TO_ACTION: "fbAdCallToAction",
								FB_AD_ICON: "fbAdIcon",
								FB_AD_MEDIA: "fbAdMedia",
								FB_AD_MEDIA_CENTER: "fbAdMediaCenter",
								FB_AD_SUBTITLE: "fbAdSubtitle",
								FB_AD_TITLE: "fbAdTitle",
								FB_TWO_STEP_DIALOG: "fbTwoStepDialog",
								UNKNOWN: "UNKNOWN"
							});
						},
						null
					);
					__d(
						"ANMWebUnifiedLoggingXOutOrigin",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								INLINE: "inline",
								INLINE_CONDENSED: "inline-condensed"
							});
						},
						null
					);
					__d(
						"ANMWebXOutClientEvent",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								CANCEL: "ADNW_XOUT_CANCEL",
								FINISH: "ADNW_XOUT_FINISH",
								HAS_INLINE_XOUT: "ADNW_HAS_INLINE_XOUT",
								SELECT_OPTION: "ADNW_XOUT_OPTION",
								START: "ADNW_XOUT_START"
							});
						},
						null
					);
					__d(
						"ANRewardedVideoPlayer",
						["cx", "ANUtils", "VPAIDDomUtils", "nullthrows"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = b("VPAIDDomUtils").div,
								i = 31,
								j = 4;
							function a(a, c, d, e) {
								(this.$1 = a),
									(this.$2 = c),
									(this.$3 = d),
									(this.$4 = !1),
									(this.$5 = !1),
									e && (this.$11 = h("_74hs")),
									(this.$9 = b("nullthrows")(
										c.querySelector(".adnwRVFooterInfo")
									)),
									(this.$6 = b("nullthrows")(
										c.querySelector(".skipProgressWheel")
									)),
									(this.$7 = b("nullthrows")(
										this.$6.querySelector(
											".skipProgressWheelLeft .skipProgressWheelCircle"
										)
									)),
									(this.$8 = b("nullthrows")(
										this.$6.querySelector(
											".skipProgressWheelRight .skipProgressWheelCircle"
										)
									)),
									(this.$10 = b("nullthrows")(c.querySelector(".skipButton")));
							}
							a.prototype.makeRewarded = function() {
								__p && __p();
								var a = this.$3.getVideoElement();
								a.loop = !1;
								this.$3.setMuted(!1);
								this.$12();
								this.$3.getElement().classList.add("_73wr");
								if (this.$11) {
									a = this.$11;
									this.$2.appendChild(a);
									a.addEventListener(
										"click",
										ES(
											function() {
												this.$3.pause(!0);
											},
											"bind",
											!0,
											this
										)
									);
								}
							};
							a.prototype.getXoutButton = function() {
								return this.$11;
							};
							a.prototype.$13 = function() {
								var a = b("nullthrows")(this.$2.querySelector(".closeArea"));
								a.addEventListener(
									"click",
									b("ANUtils").once(
										ES(
											function() {
												return this.$1.adClosed();
											},
											"bind",
											!0,
											this
										)
									)
								);
								this.$3.pause();
								this.$14();
								this.$2.classList.add("endCardShowing");
								this.$3.getElement().classList.add("_7462");
								this.$1.rewardCompleted();
							};
							a.prototype.$15 = function() {
								if (this.$4) return;
								this.$4 = !0;
								this.$9.classList.add("fadeIn");
							};
							a.prototype.$14 = function() {
								if (!this.$4) return;
								this.$4 = !1;
								this.$9.classList.remove("fadeIn");
							};
							a.prototype.$16 = function() {
								var a = this.$3.getVideoElement();
								if (a.duration <= i || this.$5) return;
								if (a.currentTime >= i) this.$17();
								else {
									this.$6.classList.add("skipProgressWheelShow");
									a = Math.ceil((360 * a.currentTime) / i);
									a <= 180
										? ((this.$7.style.transform =
												"rotate(0deg) translate(100%, 0)"),
										  (this.$8.style.transform =
												"rotate(" + a + "deg) translate(-100%, 0)"))
										: ((this.$8.style.transform =
												"rotate(180deg) translate(-100%, 0)"),
										  (this.$7.style.transform =
												"rotate(" + (a - 180) + "deg) translate(100%, 0)"));
								}
							};
							a.prototype.$17 = function() {
								if (this.$5) return;
								this.$5 = !0;
								this.$6.classList.remove("skipProgressWheelShow");
								var a = b("nullthrows")(this.$2.querySelector(".skipButton"));
								a.classList.add("skipButtonShow");
								a.addEventListener(
									"click",
									b("ANUtils").once(ES(this.$13, "bind", !0, this))
								);
							};
							a.prototype.$18 = function() {
								var a = this.$3.getVideoElement();
								a = a.duration - a.currentTime;
								return a < j;
							};
							a.prototype.$12 = function() {
								__p && __p();
								var a = b("nullthrows")(
										this.$2.querySelector(".adnwRVProgressBar")
									),
									c = this.$3.getVideoElement(),
									d = this.$2.ownerDocument.defaultView,
									e = ES(
										function() {
											var b = 100 * (c.currentTime / c.duration);
											b = Math.min(b, 100);
											this.$16();
											a.style.width = b + "%";
											(c.paused || this.$18()) && this.$15();
											b >= 100
												? this.$13()
												: c.paused || d.requestAnimationFrame(e);
											c.currentTime >= i && this.$17();
										},
										"bind",
										!0,
										this
									);
								c.addEventListener(
									"play",
									ES(
										function() {
											this.$18() || this.$14(), d.requestAnimationFrame(e);
										},
										"bind",
										!0,
										this
									)
								);
								!c.paused ? d.requestAnimationFrame(e) : this.$15();
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANUnifiedLoggingClickEvent",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								BILLABLE_CLICK: 0,
								CLOSE: 1,
								NON_STORE_CLICK: 3,
								MPA_SCROLL: 4,
								NATIVE_MPA_SCROLL: 5,
								RESUME_CLICK: 8,
								AD_CHOICES_CLICK: 9,
								CLICK_GUARD: 10,
								TWO_STEP_DIALOG: 11,
								TWO_STEP_CANCEL: 12
							});
						},
						null
					);
					__d(
						"sdk.fbt",
						[],
						function(a, b, c, d, e, f) {
							a = {
								_: function(a) {
									return typeof a === "string" ? a : a[0];
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANWebTwoStepClickDialog",
						["csx", "cx", "ANUtils", "VPAIDDomUtils", "nullthrows", "sdk.fbt"],
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							var i = b("ANUtils").maybeNode,
								j = b("VPAIDDomUtils").div,
								k = b("VPAIDDomUtils").span,
								l = b("sdk.fbt")._("Continue to"),
								m = b("sdk.fbt")._("Continue");
							function n(a, b) {
								(this.$1 = a), (this.$2 = b), (this.$4 = []), (this.$5 = []);
							}
							n.openDialog = function(a, b, c) {
								b = new n(b, c);
								b.$6();
								b.$7(a);
								return b;
							};
							n.prototype.onConfirm = function(a) {
								this.$4.push(a);
								return this;
							};
							n.prototype.onDismiss = function(a) {
								this.$5.push(a);
								return this;
							};
							n.prototype.$6 = function() {
								__p && __p();
								var a = this.$3;
								a ||
									((a = j("_74vg", [
										j("_727i", [
											k("_727j", ""),
											k("_727k", l),
											k("_727l", ""),
											k("_727m", this.$1),
											k("_727n", m)
										])
									])),
									(b("nullthrows")(
										a.querySelector("._727l")
									).style.backgroundImage = "url(" + this.$2 + ")"),
									a.addEventListener(
										"click",
										ES(
											function(c) {
												__p && __p();
												var d = b("nullthrows")(i(c.target)),
													e = b("nullthrows")(
														b("nullthrows")(a).querySelector("._727i")
													),
													f = b("nullthrows")(
														b("nullthrows")(a).querySelector("._727j")
													);
												if (d === f) this.$8(c);
												else if (d === e || ES(e, "contains", !0, d))
													for (
														var f = this.$4,
															e = ES("Array", "isArray", !1, f),
															d = 0,
															f = e
																? f
																: f[
																		typeof Symbol === "function"
																			? Symbol.iterator
																			: "@@iterator"
																  ]();
														;

													) {
														var g;
														if (e) {
															if (d >= f.length) break;
															g = f[d++];
														} else {
															d = f.next();
															if (d.done) break;
															g = d.value;
														}
														g = g;
														g(c);
													}
												else this.$8(c);
											},
											"bind",
											!0,
											this
										)
									));
								this.$3 = a;
							};
							n.prototype.$8 = function(a) {
								__p && __p();
								var c = b("nullthrows")(this.$3);
								c.classList.remove("_727o");
								b("nullthrows")(this.$3).style.opacity = "0";
								window.setTimeout(
									ES(
										function() {
											__p && __p();
											c.parentNode && c.parentNode.removeChild(c);
											for (
												var b = this.$5,
													d = ES("Array", "isArray", !1, b),
													e = 0,
													b = d
														? b
														: b[
																typeof Symbol === "function"
																	? Symbol.iterator
																	: "@@iterator"
														  ]();
												;

											) {
												var f;
												if (d) {
													if (e >= b.length) break;
													f = b[e++];
												} else {
													e = b.next();
													if (e.done) break;
													f = e.value;
												}
												f = f;
												f(a);
											}
										},
										"bind",
										!0,
										this
									),
									300
								);
							};
							n.prototype.$7 = function(a) {
								a.appendChild(b("nullthrows")(this.$3)),
									window.setTimeout(
										ES(
											function() {
												b("nullthrows")(this.$3).classList.add("_727o");
											},
											"bind",
											!0,
											this
										)
									);
							};
							e.exports = n;
						},
						null
					);
					__d(
						"QueryString",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							function a(a) {
								__p && __p();
								var b = [];
								ES(ES("Object", "keys", !1, a).sort(), "forEach", !0, function(
									c
								) {
									var d = a[c];
									if (d === void 0) return;
									if (d === null) {
										b.push(c);
										return;
									}
									b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d));
								});
								return b.join("&");
							}
							function b(a, b) {
								__p && __p();
								b === void 0 && (b = !1);
								var c = {};
								if (a === "") return c;
								a = a.split("&");
								for (var d = 0; d < a.length; d++) {
									var e = a[d].split("=", 2),
										f = decodeURIComponent(e[0]);
									if (b && Object.prototype.hasOwnProperty.call(c, f))
										throw new URIError("Duplicate key: " + f);
									c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null;
								}
								return c;
							}
							function c(a, b) {
								return (
									a +
									(ES(a, "indexOf", !0, "?") !== -1 ? "&" : "?") +
									(typeof b === "string" ? b : g.encode(b))
								);
							}
							var g = { encode: a, decode: b, appendToUrl: c };
							e.exports = g;
						},
						null
					);
					__d(
						"ANWebVideoLogger.anweb",
						["QueryString"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = 10,
								h = 0.97;
							function a(a, b, c, d) {
								(this.$7 = ES(
									function() {
										!this.$5 && this.$1.currentTime >= g && this.$8();
										var a = this.$1.currentTime / this.$1.duration;
										!this.$6 && a >= h && this.$9();
									},
									"bind",
									!0,
									this
								)),
									(this.$1 = a),
									(this.$4 = b),
									(this.$2 = c !== null ? c : null),
									(this.$3 = d !== null ? d : null);
							}
							a.prototype.startLogging = function() {
								this.$1.addEventListener("timeupdate", this.$7);
							};
							a.prototype.$8 = function() {
								this.$2 != null &&
									!this.$5 &&
									((this.$5 = !0),
									this.$4(b("QueryString").appendToUrl(this.$2, this.$10())));
							};
							a.prototype.$9 = function() {
								this.$3 != null &&
									!this.$6 &&
									((this.$6 = !0),
									this.$4(b("QueryString").appendToUrl(this.$3, this.$10())));
							};
							a.prototype.$10 = function() {
								return {
									time: this.$1.currentTime,
									inline: 1,
									autoplay: 1,
									volume: this.$1.muted ? 0 : this.$1.volume
								};
							};
							e.exports = a;
						},
						null
					);
					__d(
						"NativePromise",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							a = Promise;
							e.exports = a;
						},
						null
					);
					__d(
						"joinClasses",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							function a(a) {
								var b = a || "",
									c = arguments.length <= 1 ? 0 : arguments.length - 1;
								for (var d = 0; d < c; d++) {
									var e =
										d + 1 < 1 || arguments.length <= d + 1
											? void 0
											: arguments[d + 1];
									e != null && e !== "" && (b = (b ? b + " " : "") + e);
								}
								return b;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"ANWebVideoPlayer.anweb",
						[
							"csx",
							"cx",
							"NativePromise",
							"VPAIDDomUtils",
							"joinClasses",
							"nullthrows"
						],
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							var i = b("VPAIDDomUtils").div,
								j = b("VPAIDDomUtils").dom;
							function k(a, c, d) {
								d === void 0 && (d = HTMLElement);
								a = b("nullthrows")(a.querySelector(c));
								if (a instanceof d) return a;
								throw new Error("Invalid element type");
							}
							function l() {
								__p && __p();
								this.$10 = ES(
									function(a) {
										var c = b("nullthrows")(this.$7);
										c.setMuted(!c.isMuted());
										a.stopPropagation();
									},
									"bind",
									!0,
									this
								);
								this.$11 = ES(
									function(a) {
										var c = b("nullthrows")(this.$7);
										c.getVideoElement().paused ? c.play(!0) : c.pause(!0);
										a.stopPropagation();
									},
									"bind",
									!0,
									this
								);
								this.$15 = ES(
									function() {
										this.$16();
									},
									"bind",
									!0,
									this
								);
								this.$12 = ES(
									function(a) {
										this.$18(), this.$19();
									},
									"bind",
									!0,
									this
								);
								this.$14 = ES(
									function() {
										this.$18();
									},
									"bind",
									!0,
									this
								);
								this.$13 = ES(
									function() {
										this.$19();
									},
									"bind",
									!0,
									this
								);
								var a = this.$9(),
									c = a[0],
									d = a[1],
									e = a[2],
									f = a[3];
								a = a[4];
								this.$2 = c;
								this.$3 = d;
								this.$4 = e;
								this.$5 = f;
								this.$6 = a;
								this.$8 = null;
							}
							l.prototype.$9 = function() {
								var a = i("_7juh"),
									b = i("_7jue"),
									c = i("_7jui"),
									d = i("_7juj"),
									e = i("_7juk", [
										i("_7lkm"),
										i("_7lkn", [b, i("_7jul", [a]), c, d])
									]);
								d.addEventListener("click", this.$10);
								b.addEventListener("click", this.$11);
								return [e, a, b, c, d];
							};
							l.prototype.attach = function(a) {
								__p && __p();
								this.$7 != null && (this.detach(), (this.$7 = null));
								this.$7 = a;
								a.getElement().appendChild(this.$2);
								this.$2.addEventListener("click", this.$12);
								a = a.getVideoElement();
								a.addEventListener("click", this.$12);
								a.addEventListener("play", this.$13);
								a.addEventListener("pause", this.$14);
								a.addEventListener("timeupdate", this.$15);
								this.$16();
							};
							l.prototype.detach = function() {
								this.$2.parentNode &&
									(this.$2.parentNode.removeChild(this.$2),
									this.$2.removeEventListener("click", this.$12));
								var a = this.$7;
								if (a) {
									a = a.getVideoElement();
									a.removeEventListener("click", this.$12);
									a.removeEventListener("play", this.$13);
									a.removeEventListener("pause", this.$14);
									a.removeEventListener("timeupdate", this.$15);
								}
							};
							l.prototype.$17 = function() {
								this.$8 != null &&
									(window.clearTimeout(this.$8), (this.$8 = null));
							};
							l.prototype.$18 = function() {
								this.$2.classList.remove("_7jum"), this.$17();
							};
							l.prototype.$19 = function() {
								this.$17(),
									(this.$8 = window.setTimeout(
										ES(
											function() {
												this.$2.classList.add("_7jum");
											},
											"bind",
											!0,
											this
										),
										l.$1
									));
							};
							l.prototype.$16 = function() {
								var a = b("nullthrows")(this.$7),
									c = a.getDuration();
								a = a.getCurrentTime();
								var d = "0";
								c > 0 && (d = (a / c) * 100 + "%");
								this.$3.style.width = d;
								d = (c - a) / 1e3;
								c = Math.floor(d / 60);
								a = Math.floor(d % 60);
								this.$5.textContent = "- " + c + ":" + (a < 10 ? "0" + a : a);
							};
							l.$1 = 3e3;
							function m() {
								(this.$4 = ES(
									function(a) {
										var c = b("nullthrows")(this.$2);
										c.setMuted(!c.isMuted());
										a.stopPropagation();
									},
									"bind",
									!0,
									this
								)),
									(this.$1 = this.$3());
							}
							m.prototype.$3 = function() {
								var a = i("_1xj9");
								a.addEventListener("click", this.$4, !1);
								return a;
							};
							m.prototype.attach = function(a) {
								this.$2 != null && (this.detach(), (this.$2 = null)),
									(this.$2 = a),
									a.getElement().appendChild(this.$1);
							};
							m.prototype.detach = function() {
								this.$1.parentNode && this.$1.parentNode.removeChild(this.$1);
							};
							function n(a, b) {
								this.$1 = this.$3(a, b);
							}
							n.prototype.$3 = function(a, b) {
								return i("_3c3s" + (a ? " _7kbt" : "") + (b ? " _7kbu" : ""));
							};
							n.prototype.attach = function(a) {
								this.$2 != null && (this.detach(), (this.$2 = null)),
									(this.$2 = a),
									a.getElement().appendChild(this.$1);
							};
							n.prototype.detach = function() {
								this.$1.parentNode && this.$1.parentNode.removeChild(this.$1);
							};
							n.pauseCard = function() {
								return new n(!0, !1);
							};
							n.autoplayCard = function() {
								return new n(!1, !0);
							};
							function o(a) {
								__p && __p();
								this.$7 = ES(
									function(a) {
										var c = b("nullthrows")(this.$5);
										c.play();
										a.stopPropagation();
									},
									"bind",
									!0,
									this
								);
								this.$1 = a;
								a = this.$6();
								var c = a[0],
									d = a[1];
								a = a[2];
								this.$2 = c;
								this.$3 = d;
								this.$4 = a;
							}
							o.prototype.$6 = function() {
								var a = i("_7kbv"),
									c = i(b("joinClasses")("_7kbw", "fbAdLink"), [
										i("fbAdIcon"),
										i("fbAdSubtitle"),
										i("fbAdCallToAction")
									]),
									d = i("_7kbx"),
									e = i("_7kby", [d, i("_7kbz", [c]), a]);
								d.style.backgroundImage = "url(" + this.$1 + ")";
								return [e, c, a];
							};
							o.prototype.attach = function(a) {
								this.$5 != null && (this.detach(), (this.$5 = null)),
									(this.$5 = a),
									a.getElement().appendChild(this.$2),
									(a.getVideoElement().loop = !1),
									this.$4.addEventListener("click", this.$7),
									this.$2.addEventListener("click", this.$8);
							};
							o.prototype.$8 = function(a) {
								a.stopPropagation();
							};
							o.prototype.detach = function() {
								this.$2.parentNode &&
									(this.$2.parentNode.removeChild(this.$2),
									this.$4.removeEventListener("click", this.$7),
									this.$2.removeEventListener("click", this.$8));
							};
							function p(a) {
								this.$1 = a;
								a = this.$4();
								this.$2 = a;
							}
							p.prototype.$4 = function() {
								var a = i(b("joinClasses")("_7kb-", "fbAdLink"), [
										i("fbAdIcon"),
										i("fbAdSubtitle"),
										i("fbAdCallToAction")
									]),
									c = i("_7kb_");
								a = i("_7kc0", [c, i("_7kc1", [a])]);
								c.style.backgroundImage = "url(" + this.$1 + ")";
								return a;
							};
							p.prototype.attach = function(a) {
								this.$3 != null && (this.detach(), (this.$3 = null)),
									this.$2.addEventListener("click", this.$5),
									(this.$3 = a),
									a.getElement().appendChild(this.$2);
							};
							p.prototype.$5 = function(a) {
								a.stopPropagation();
							};
							p.prototype.detach = function() {
								this.$2.parentNode &&
									(this.$2.parentNode.removeChild(this.$2),
									this.$2.removeEventListener("click", this.$5));
							};
							var q = ES("Object", "freeze", !1, {
								controls: "mute_only",
								endCard: "none",
								pauseCard: "play_button"
							});
							function a(a, b, c, d, e, f) {
								__p && __p();
								this.$5 = !1;
								this.$6 = !1;
								this.$16 = ES(
									function() {
										this.$12.loop ||
											(this.$11.classList.add("_7kc2"), (this.$5 = !0));
									},
									"bind",
									!0,
									this
								);
								this.$1 = a;
								this.$2 = b;
								this.$4 = e;
								this.$3 = f;
								this.$13 = !0;
								this.$7 =
									(d.controls || q.controls) === "full" ? new l() : new m();
								this.$8 =
									(d.pauseCard || q.pauseCard) === "icon_and_cta"
										? new p(b)
										: new n.pauseCard();
								this.$10 = (d.endCard || q.endCard) === "v1" ? new o(b) : null;
								this.$9 = n.autoplayCard();
								c = this.$14();
								a = c[0];
								e = c[1];
								this.$11 = a;
								this.$12 = e;
								this.$15();
								this.$8.attach(this);
								this.$7.attach(this);
								this.$9.attach(this);
								this.$10 && this.$10.attach(this);
							}
							a.prototype.$14 = function() {
								__p && __p();
								var a = i("_6pfr");
								a.style.backgroundImage = "url(" + this.$2 + ")";
								if (this.$4) {
									var c = new Image();
									c.addEventListener(
										"load",
										ES(
											function() {
												this.$4 && this.$4();
											},
											"bind",
											!0,
											this
										)
									);
									c.src = this.$2;
								}
								c = i(b("joinClasses")("_1xj7", "_7jun", "_7kc3"), [
									a,
									j(
										"video",
										{
											className: "_1xj8",
											muted: !0,
											loop: !0,
											controls: !1,
											src: this.$1
										},
										[]
									)
								]);
								a = document.defaultView.HTMLVideoElement;
								a = k(c, "._1xj8", a);
								a.poster = this.$2;
								a.setAttribute("webkit-playsinline", "true");
								a.setAttribute("playsinline", "true");
								return [c, a];
							};
							a.prototype.$15 = function() {
								this.$11.addEventListener(
									"click",
									ES(
										function(a) {
											this.$12.paused ? this.play(!0) : this.pause(!0),
												this.$3 && this.$3(),
												a.stopPropagation();
										},
										"bind",
										!0,
										this
									)
								);
								this.$12.addEventListener("ended", this.$16);
								var a = ES(
									function(a) {
										return this.pause(!0);
									},
									"bind",
									!0,
									this
								);
								this.$12.addEventListener("webkitendfullscreen", a);
								this.$12.addEventListener("fullscreenchange", a);
								this.$12.addEventListener("webkitfullscreenchange", a);
							};
							a.prototype.getElement = function() {
								return this.$11;
							};
							a.prototype.setMuted = function(a) {
								(this.$13 = a),
									(this.$12.muted = a),
									this.$11.classList.toggle("_7jun", this.$13);
							};
							a.prototype.isMuted = function() {
								return this.$13;
							};
							a.prototype.play = function(a) {
								__p && __p();
								this.$6 = !0;
								this.$5 = this.$5 && !a;
								a = this.$12.play();
								if (a instanceof Promise)
									return a
										.then(
											ES(
												function() {
													this.$11.classList.remove("_7juo"),
														this.$11.classList.remove("_7kc2"),
														this.$11.classList.remove("_7kc3");
												},
												"bind",
												!0,
												this
											)
										)
										["catch"](
											ES(
												function(a) {
													this.$11.classList.add("_7juo");
													throw a;
												},
												"bind",
												!0,
												this
											)
										);
								else {
									this.$11.classList.remove("_7juo");
									return b("NativePromise").resolve();
								}
							};
							a.prototype.pause = function(a) {
								(this.$5 = this.$5 || !!a),
									this.$12.pause(),
									this.$11.classList.add("_7juo");
							};
							a.prototype.wasManuallyPaused = function() {
								return this.$5;
							};
							a.prototype.hasPlayed = function() {
								return this.$6;
							};
							a.prototype.getVideoElement = function() {
								return this.$12;
							};
							a.prototype.getDuration = function() {
								return this.$12 == null
									? 0
									: Math.round(this.$12.duration * 1e3) || 0;
							};
							a.prototype.getCurrentTime = function() {
								return this.$12 == null
									? 0
									: Math.round(this.$12.currentTime * 1e3);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANXOutConfirmationStep",
						["cx", "VPAIDDomUtils"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = b("VPAIDDomUtils").div;
							function a(a, b, c, d, e, f) {
								(this.$2 = a),
									(this.$3 = b),
									(this.$1 = c),
									(this.$4 = d),
									(this.$5 = e),
									(this.$6 = f);
							}
							a.prototype.$7 = function() {
								__p && __p();
								var a = h(
										"_6qhu" +
											(this.$4 === "hide" ? " _6qhv" : "") +
											(this.$4 === "report" ? " _6qhw" : "")
									),
									b = h("_6qhx");
								b.innerText =
									this.$4 === "hide"
										? this.$2.finished_hide_ad
										: this.$2.finished_report_ad;
								var c = h("_6qhy");
								c.innerText = this.$2.finished_description;
								var d = h("_6qh7 _6qh8", [h("_6qhz")]);
								d.appendChild(document.createTextNode(this.$3.title));
								var e = document.createElement("img");
								e.className = "_6qh-";
								e.src = this.$1;
								var f = h("_6qh_");
								f.textContent = this.$2.manage_ad_preferences;
								var g = document.createElement("a");
								g.href = this.$2.manage_ad_preferences_uri;
								g.target = "_blank";
								g.className = "_6qi0";
								g.appendChild(h("_6qi1"));
								g.appendChild(f);
								f = h("_6qi2", [e, d]);
								e = document.createElement("a");
								e.className = "_6qi3";
								this.$6 != null && (e.href = this.$6);
								this.$6 == null &&
									e.addEventListener(
										"click",
										ES(
											function(a) {
												this.$5();
											},
											"bind",
											!0,
											this
										)
									);
								return h("_6qi4", [a, b, c, f, g, e]);
							};
							a.prototype.render = function() {
								var a = h("_6qhb _6qi5"),
									b = this.$7();
								a.appendChild(b);
								return a;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANXOutInitialStep",
						["cx", "VPAIDDomUtils", "joinClasses"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = b("VPAIDDomUtils").div;
							function a(a, b, c, d) {
								(this.$3 = c), (this.$4 = d), (this.$1 = b), (this.$2 = a);
							}
							a.prototype.$5 = function(a, c, d, e, f) {
								__p && __p();
								c = h(b("joinClasses")("_6qhk", c));
								var g = h("_6qhl");
								g.textContent = a;
								a = h("_6qhm", [g]);
								if (d != null) {
									g = h("_6qhn");
									g.textContent = d;
									a.appendChild(g);
								}
								d = document.createElement("a");
								d.className = "_6qho";
								d.appendChild(c);
								d.appendChild(a);
								f != null && ((d.href = f), (d.target = "_blank"));
								d.addEventListener("click", function(a) {
									f == null && a.preventDefault(), e();
								});
								return d;
							};
							a.prototype.render = function() {
								var a = this.$5(
										this.$2.hide_ad,
										"_6qgk",
										this.$2.hide_ad_description,
										ES(
											function() {
												this.$3("hide");
											},
											"bind",
											!0,
											this
										)
									),
									b = this.$5(
										this.$2.report_ad,
										"_6qgl",
										this.$2.report_ad_description,
										ES(
											function() {
												this.$3("report");
											},
											"bind",
											!0,
											this
										)
									),
									c = this.$5(
										this.$2.why_am_i_seeing_this,
										"_6qhp",
										null,
										ES(
											function() {
												this.$3();
											},
											"bind",
											!0,
											this
										),
										this.$1
									),
									d = document.createElement("a");
								d.className = "_6qi3";
								d.addEventListener(
									"click",
									ES(
										function(a) {
											a.preventDefault(), this.$4();
										},
										"bind",
										!0,
										this
									)
								);
								return h("_6qhb _6qhq", [a, b, c, d]);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANXOutOptionStep",
						["cx", "VPAIDDomUtils"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = b("VPAIDDomUtils").div;
							function a(a, b, c, d, e) {
								(this.$3 = a),
									(this.$2 = b),
									(this.$1 = c),
									(this.$4 = d),
									(this.$5 = e);
							}
							a.prototype.$6 = function() {
								var a = h("_6qgh"),
									b = h(
										"_6qgi" +
											(this.$2 === "hide" ? " _6qgk" : "") +
											(this.$2 === "report" ? " _6qgl" : "")
									),
									c = h("_6qh4");
								b = h("_6qh5", [b, c]);
								b = h("_6qh6", [a, b]);
								a.textContent =
									this.$2 === "hide" ? this.$3.hide_ad : this.$3.report_ad;
								c.textContent =
									this.$2 === "hide"
										? this.$3.hide_ad_follow_up_heading
										: this.$3.report_ad_follow_up_heading;
								return b;
							};
							a.prototype.$7 = function() {
								__p && __p();
								var a =
									this.$2 === "hide"
										? this.$3.hide_ad_options
										: this.$3.report_ad_options;
								a = ES(
									a,
									"map",
									!0,
									ES(
										function(a) {
											var b = document.createElement("button");
											b.className = "_6qh7";
											b.textContent = a.title;
											b.addEventListener(
												"click",
												ES(
													function() {
														b.classList.add("_6qh8"), this.$1(a);
													},
													"bind",
													!0,
													this
												)
											);
											return b;
										},
										"bind",
										!0,
										this
									)
								);
								a = h("_6qh9", a);
								a = h("_6qha", [a]);
								if (this.$5) {
									var b = document.createElement("a");
									b.className = "_6qi3";
									b.addEventListener(
										"click",
										ES(
											function(a) {
												a.preventDefault(), this.$4();
											},
											"bind",
											!0,
											this
										)
									);
									a.appendChild(b);
								}
								return a;
							};
							a.prototype.render = function() {
								var a = h("_6qhb _6qhc"),
									b = this.$6(),
									c = this.$7();
								a.appendChild(b);
								a.appendChild(c);
								return a;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANXOut",
						[
							"cx",
							"ANXOutConfirmationStep",
							"ANXOutInitialStep",
							"ANXOutOptionStep",
							"VPAIDDomUtils",
							"nullthrows"
						],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = b("VPAIDDomUtils").div;
							function a(a) {
								(this.$1 = a.parentEl),
									(this.$5 = a.adIcon),
									(this.$6 = a.adChoicesLink),
									(this.$7 = a.content),
									(this.$8 = a.onXOutStart),
									(this.$9 = a.onXOutCancel),
									(this.$10 = a.onXOutOption),
									(this.$11 = a.onXOutFinish),
									(this.$4 = a.buttonEl),
									(this.$13 = a.endURL),
									(this.$14 = !!a.allowOptionStepClose);
							}
							a.prototype.$15 = function() {
								this.$3 == null &&
									((this.$3 = h("_6qhd")), this.$2.appendChild(this.$3));
								return b("nullthrows")(this.$3);
							};
							a.prototype.$16 = function() {
								this.$3 != null &&
									(this.$2.removeChild(this.$3), (this.$3 = null));
							};
							a.prototype.$17 = function() {
								return h("_6qhe");
							};
							a.prototype.$18 = function(a) {
								var b = this.$15(),
									c = this.$17();
								this.$19();
								c.appendChild(a);
								b.appendChild(c);
							};
							a.prototype.$19 = function() {
								var a = this.$15();
								while (a.firstChild) a.removeChild(a.firstChild);
							};
							a.prototype.$20 = function() {
								var a = this.$15(),
									b = h("_6qhf");
								this.$19();
								b.innerText = this.$7.ad_removed;
								a.appendChild(b);
							};
							a.prototype.onInitialStepDone = function() {
								this.$12 != null && this.$21();
							};
							a.prototype.$21 = function() {
								var a = new (b("ANXOutOptionStep"))(
									this.$7,
									b("nullthrows")(this.$12),
									ES(
										function(a) {
											this.$22(a);
										},
										"bind",
										!0,
										this
									),
									ES(
										function() {
											this.$9(), this.$16();
										},
										"bind",
										!0,
										this
									),
									this.$14
								);
								this.$18(a.render());
							};
							a.prototype.$22 = function(a) {
								__p && __p();
								this.$10(a.option_type);
								if (a.option_type === this.$7.follow_up_report) {
									this.$12 = "report";
									this.$21();
									return;
								}
								this.$11();
								a = new (b("ANXOutConfirmationStep"))(
									this.$7,
									a,
									this.$5,
									b("nullthrows")(this.$12),
									ES(
										function() {
											this.$20();
										},
										"bind",
										!0,
										this
									),
									this.$13
								);
								this.$18(a.render());
							};
							a.prototype.$23 = function() {
								var a = new (b("ANXOutInitialStep"))(
									this.$7,
									this.$6,
									ES(
										function(a) {
											a === "hide" && this.$10(this.$7.dislike_option),
												a === "report" && this.$10(this.$7.follow_up_report),
												(this.$12 = a),
												this.onInitialStepDone();
										},
										"bind",
										!0,
										this
									),
									ES(
										function() {
											this.$9(), this.$16();
										},
										"bind",
										!0,
										this
									)
								);
								this.$18(a.render());
							};
							a.prototype.getButton = function() {
								return b("nullthrows")(this.$4);
							};
							a.prototype.getRoot = function() {
								return this.$2;
							};
							a.prototype.render = function() {
								__p && __p();
								this.$2 = h("_6qhh", []);
								if (this.$4 == null) {
									var a = document.createElement("a");
									a.href = "#";
									a.className = "_6qhg";
									this.$2.appendChild(a);
									this.$4 = a;
								}
								this.$4.addEventListener(
									"click",
									ES(
										function(a) {
											a.preventDefault(), this.$23(), this.$8();
										},
										"bind",
										!0,
										this
									)
								);
								this.$1.appendChild(this.$2);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"OnScreenBehavior.anweb",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a.prototype.onPartiallyEntered = function() {};
							a.prototype.onMostlyEntered = function() {};
							a.prototype.onCompletelyEntered = function() {};
							a.prototype.onPartiallyLeft = function() {};
							a.prototype.onMostlyLeft = function() {};
							a.prototype.onCompletelyLeft = function() {};
							a.prototype.onBecameInvalid = function() {};
							a.prototype.onBecameValid = function() {};
							function a() {}
							e.exports = a;
						},
						null
					);
					__d(
						"AdImpressionBehavior.anweb",
						["OnScreenBehavior.anweb"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g;
							c = babelHelpers.inherits(a, b("OnScreenBehavior.anweb"));
							g = c && c.prototype;
							function a(a, b) {
								g.constructor.call(this),
									(this.$AdImpressionBehavior1 = !0),
									(this.$AdImpressionBehavior2 = !0),
									(this.$AdImpressionBehavior3 = !1),
									(this.$AdImpressionBehavior4 = !1),
									(this.$AdImpressionBehavior5 = a),
									(this.$AdImpressionBehavior6 = b);
							}
							a.prototype.onPartiallyEntered = function() {
								(this.$AdImpressionBehavior4 = !0),
									this.$AdImpressionBehavior7();
							};
							a.prototype.onCompletelyLeft = function() {
								this.$AdImpressionBehavior4 = !1;
							};
							a.prototype.onBecameInvalid = function() {
								this.$AdImpressionBehavior2 && this.$AdImpressionBehavior6(),
									(this.$AdImpressionBehavior2 = !1);
							};
							a.prototype.mediaLoaded = function() {
								(this.$AdImpressionBehavior3 = !0),
									this.$AdImpressionBehavior7();
							};
							a.prototype.$AdImpressionBehavior7 = function() {
								if (
									!this.$AdImpressionBehavior3 ||
									!this.$AdImpressionBehavior4
								)
									return;
								this.$AdImpressionBehavior1 && this.$AdImpressionBehavior5();
								this.$AdImpressionBehavior1 = !1;
								this.$AdImpressionBehavior2 = !1;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"AdMostlyViewableImpressionBehavior.anweb",
						["OnScreenBehavior.anweb"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g,
								h = 1e3;
							c = babelHelpers.inherits(a, b("OnScreenBehavior.anweb"));
							g = c && c.prototype;
							function a(a) {
								g.constructor.call(this),
									(this.$AdMostlyViewableImpressionBehavior4 = null),
									(this.$AdMostlyViewableImpressionBehavior1 = !0),
									(this.$AdMostlyViewableImpressionBehavior2 = !1),
									(this.$AdMostlyViewableImpressionBehavior3 = !1),
									(this.$AdMostlyViewableImpressionBehavior5 = a);
							}
							a.prototype.onMostlyEntered = function() {
								(this.$AdMostlyViewableImpressionBehavior3 = !0),
									this.$AdMostlyViewableImpressionBehavior2 &&
										this.$AdMostlyViewableImpressionBehavior6();
							};
							a.prototype.onMostlyLeft = function() {
								(this.$AdMostlyViewableImpressionBehavior3 = !1),
									window.clearTimeout(
										this.$AdMostlyViewableImpressionBehavior4
									);
							};
							a.prototype.mediaLoaded = function() {
								(this.$AdMostlyViewableImpressionBehavior2 = !0),
									this.$AdMostlyViewableImpressionBehavior3 &&
										this.$AdMostlyViewableImpressionBehavior6();
							};
							a.prototype.$AdMostlyViewableImpressionBehavior6 = function() {
								this.$AdMostlyViewableImpressionBehavior1 &&
									this.$AdMostlyViewableImpressionBehavior4 === null &&
									(this.$AdMostlyViewableImpressionBehavior4 = window.setTimeout(
										ES(
											function() {
												this.$AdMostlyViewableImpressionBehavior5();
											},
											"bind",
											!0,
											this
										),
										h
									)),
									(this.$AdMostlyViewableImpressionBehavior1 = !1);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"AdQualityViewabilityDetection",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								AMP: "amp",
								FLASH: "fl",
								GEOMETRIC: "geo",
								INSTANT_ARTICLES: "ia",
								IE_MOUSE: "ie-m",
								INTERSECTION_OBSERVER: "io",
								MOZILLA_INNER_SCREEN: "moz-is",
								MRAID: "mr",
								MOAT: "mt",
								NACL: "nacl",
								NONE: "n",
								PAGE_VISIBILITY: "pv",
								PLAIN_VAST: "plain-vast",
								RAF: "raf",
								SAFEFRAME: "sf",
								SDK_ANDROID: "sdk-android",
								SDK_IOS: "sdk-ios",
								SDK_MEASUREMENT_PLUGIN_ANDROID: "sdk-mp-android",
								SDK_MEASUREMENT_PLUGIN_IOS: "sdk-mp-ios"
							});
						},
						null
					);
					__d(
						"AdQualityMeasurementResult.adquality",
						["AdQualityViewabilityDetection"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							g.unknownResult = function(a, c) {
								a === void 0 && (a = b("AdQualityViewabilityDetection").NONE);
								c === void 0 && (c = "");
								return new g({ vd: a, r: c });
							};
							function g(a) {
								var c = a.ar,
									d = a.e,
									e = a.vd,
									f = a.r,
									g = a.vr,
									h = a.cont;
								a = a.maa;
								this.$3 = e;
								this.$5 = g;
								this.$1 = c;
								this.$7 = a;
								this.$2 = d || null;
								this.$4 =
									e === b("AdQualityViewabilityDetection").NONE ? "" : f || e;
								this.$6 = h || !1;
							}
							g.prototype.appendResult = function(a) {
								this.$5 || (this.$5 = a.$5),
									this.$1 || (this.$1 = a.$1),
									(this.$4 = a.$4),
									(this.$3 = a.$3),
									(this.$6 = a.$6),
									(this.$7 = this.$7 || a.$7);
							};
							g.prototype.getData = function() {
								var a = null;
								if (this.$2)
									try {
										a = this.$2.toString();
									} catch (b) {
										a = "Unknown error";
									}
								return {
									error: a,
									viewabilityDetection: this.$3,
									reason: this.$4,
									viewableRatio: this.getViewableRatio()
								};
							};
							g.prototype.getAdRect = function() {
								return this.$1;
							};
							g.prototype.getError = function() {
								return this.$2;
							};
							g.prototype.getMaxAdArea = function() {
								return this.$7;
							};
							g.prototype.getIsContinuous = function() {
								return this.$6;
							};
							g.prototype.getViewableRect = function() {
								return this.$5;
							};
							g.prototype.getViewableRatio = function() {
								return this.$8(function(a) {
									return a.area();
								});
							};
							g.prototype.getViewableHeightRatio = function() {
								return this.$8(function(a) {
									return a.height;
								});
							};
							g.prototype.getViewableWidthRatio = function() {
								return this.$8(function(a) {
									return a.width;
								});
							};
							g.prototype.$8 = function(a) {
								var b = this.$1,
									c = this.$5;
								return (c && a(c) === 0) || (b && a(b) === 0)
									? 0
									: c && b
										? a(c) / a(b)
										: null;
							};
							g.prototype.getViewabilityDetection = function() {
								return this.$3;
							};
							g.prototype.getReason = function() {
								return this.$4;
							};
							g.prototype.isConclusive = function() {
								return typeof this.getViewableRatio() === "number";
							};
							e.exports = g;
						},
						null
					);
					__d(
						"AdQualityMeasurement.adquality",
						["AdQualityMeasurementResult.adquality"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function a(a, b) {
								this.__parentWindow = b;
							}
							a.prototype.destroy = function() {};
							a.prototype.getMeasurement = function(a) {
								a(
									b("AdQualityMeasurementResult.adquality").unknownResult(
										this.__viewabilityDetection,
										this.__viewabilityDetection + "-na"
									)
								);
							};
							a.prototype.getViewabilityDetection = function() {
								return this.__viewabilityDetection;
							};
							a.prototype.getParentWindow = function() {
								return this.__parentWindow;
							};
							a.prototype.isAvailable = function(a) {
								return !1;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"AdQualityUtils.adquality",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function g() {
								var a = navigator.userAgent.toLowerCase();
								a = a.match(/chrome\/(\d+)/);
								a = a ? parseInt(a[1], 10) : null;
								return a;
							}
							function h() {
								var a = navigator.userAgent.toLowerCase();
								a = a.match(/firefox\/(\d+)/);
								a = a ? parseInt(a[1], 10) : null;
								return a;
							}
							function i() {
								var a = navigator.userAgent.toLowerCase(),
									b = /safari\//.test(a) && !/chrome\//.test(a);
								a = a.match(/version\/(\d+)/);
								b = b && a ? parseInt(a[1], 10) : null;
								return b;
							}
							function j() {
								var a = navigator.userAgent.toLowerCase();
								return (
									ES(a, "indexOf", !0, "trident") > -1 &&
									ES(a, "indexOf", !0, "msie") === -1
								);
							}
							function k() {
								return ES(navigator.platform, "indexOf", !0, "Mac") > -1;
							}
							function a() {
								var a = !!document.documentMode;
								a = !a && !!window.StyleMedia;
								return a && l();
							}
							function l() {
								var a = navigator.userAgent.toLowerCase();
								return /\Wedge\/(\d|\.)+/i.test(a);
							}
							var m = ES("Object", "freeze", !1, {
								CHROME_MAC: 97,
								CHROME_WIN: 89,
								FIREFOX_MAC: 102,
								FIREFOX_WIN: 124,
								FIREFOX_WIN_MAX: 130,
								IE_11: 86,
								SAFARI: 38
							});
							function b(a) {
								__p && __p();
								if (g()) return k() ? m.CHROME_MAC : m.CHROME_WIN;
								else if (h()) {
									var b = a.screen,
										c = b.height;
									b = b.width;
									var d = a.outerHeight;
									a = a.outerWidth;
									d = d === c && a === b;
									return k()
										? m.FIREFOX_MAC
										: d
											? m.FIREFOX_WIN_MAX
											: m.FIREFOX_WIN;
								} else if (j()) return m.IE_11;
								else if (i()) return m.SAFARI;
								else return 0;
							}
							e.exports = {
								getBrowserBarOffset: b,
								getChromeVersion: g,
								getFirefoxVersion: h,
								getSafariVersion: i,
								isIE11: j,
								isEdge: a,
								isEdgeUA: l
							};
						},
						null
					);
					__d(
						"Rectangle.adquality",
						["AdQualityUtils.adquality"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function g(a, b, c, d) {
								(this.x = a || 0),
									(this.y = b || 0),
									(this.width = c || 0),
									(this.height = d || 0);
							}
							g.RectangleZero = function() {
								return new g(0, 0, 0, 0);
							};
							g.RectangleFromClientRect = function(a) {
								return new g(
									a.left || 0,
									a.top || 0,
									a.width || a.right - a.left || 0,
									a.height || a.bottom - a.top || 0
								);
							};
							g.ClientRectFromRectangle = function(a) {
								return {
									width: a.width,
									height: a.height,
									left: a.x,
									top: a.y,
									right: a.x + a.width,
									bottom: a.y + a.height
								};
							};
							g.RectangleFromWindow = function(a) {
								try {
									var b = a.document,
										c = a.document.documentElement,
										d = c.hasOwnProperty
											? Object.prototype.hasOwnProperty.call(c, "ontouchstart")
											: !1,
										e = b.compatMode === "BackCompat";
									d
										? ((d = a.innerWidth), (a = a.innerHeight))
										: e
											? ((d = b.body.clientWidth), (a = b.body.clientHeight))
											: ((d = c.clientWidth), (a = c.clientHeight));
									return new g(0, 0, d, a);
								} catch (a) {
									return null;
								}
							};
							g.RectangleFromViewport = function(a) {
								var c = b("AdQualityUtils.adquality").getBrowserBarOffset(a);
								return new g(
									a.screenX,
									a.screenY + c,
									a.outerWidth,
									a.outerHeight - c
								);
							};
							g.prototype.area = function() {
								return this.width * this.height;
							};
							g.prototype.getData = function() {
								return {
									x: this.x,
									y: this.y,
									width: this.width,
									height: this.height
								};
							};
							g.prototype.intersection = function(a) {
								var b = Math.max(this.x, a.x),
									c = Math.max(this.y, a.y),
									d = Math.min(this.x + this.width, a.x + a.width);
								a = Math.min(this.y + this.height, a.y + a.height);
								return d >= b && a >= c ? new g(b, c, d - b, a - c) : null;
							};
							g.prototype.offset = function(a, b) {
								return new g(this.x + a, this.y + b, this.width, this.height);
							};
							e.exports = g;
						},
						null
					);
					__d(
						"AMPMeasurement.adquality",
						[
							"AdQualityMeasurement.adquality",
							"AdQualityMeasurementResult.adquality",
							"AdQualityUtils.adquality",
							"AdQualityViewabilityDetection",
							"AMPContextLoader",
							"Rectangle.adquality"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g,
								h = b("AdQualityUtils.adquality").getBrowserBarOffset;
							c = babelHelpers.inherits(a, b("AdQualityMeasurement.adquality"));
							g = c && c.prototype;
							function a(a, c) {
								g.constructor.call(this, a, c),
									(this.$AMPMeasurement5 = ES(
										function(a) {
											a = a[a.length - 1];
											var c = a.boundingClientRect;
											a = a.intersectionRect;
											this.$AMPMeasurement1 = b(
												"Rectangle.adquality"
											).RectangleFromClientRect(c);
											this.$AMPMeasurement4 = b("Rectangle.adquality")
												.RectangleFromClientRect(a)
												.offset(
													this.__parentWindow.screenX,
													this.__parentWindow.screenY + h(this.__parentWindow)
												);
											this.$AMPMeasurement4 =
												(this.$AMPMeasurement2 &&
													this.$AMPMeasurement2.hidden) ||
												!this.$AMPMeasurement4
													? b("Rectangle.adquality").RectangleZero()
													: this.$AMPMeasurement4;
										},
										"bind",
										!0,
										this
									)),
									(this.$AMPMeasurement1 = null),
									(this.$AMPMeasurement2 = null),
									(this.__viewabilityDetection = b(
										"AdQualityViewabilityDetection"
									).AMP),
									(this.$AMPMeasurement3 = null),
									(this.$AMPMeasurement4 = null),
									b("AMPContextLoader")
										.genAMPContext()
										.then(
											ES(
												function(a) {
													(this.$AMPMeasurement2 = a),
														(this.$AMPMeasurement3 = a.observeIntersection(
															this.$AMPMeasurement5
														));
												},
												"bind",
												!0,
												this
											)
										);
							}
							a.prototype.destroy = function() {
								this.$AMPMeasurement3 && this.$AMPMeasurement3();
							};
							a.prototype.isAvailable = function() {
								return b("AMPContextLoader").isAMP();
							};
							a.prototype.getMeasurement = function(a) {
								a(
									new (b("AdQualityMeasurementResult.adquality"))({
										ar: this.$AMPMeasurement1,
										vd: this.__viewabilityDetection,
										vr: this.$AMPMeasurement4
									})
								);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"AdQualityMeasurementQueue.adquality",
						["AdQualityMeasurementResult.adquality"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function a(a) {
								this.$1 = a;
							}
							a.prototype.destroy = function() {
								ES(this.$1, "forEach", !0, function(a) {
									a.destroy();
								}),
									(this.$1 = []);
							};
							a.prototype.getMeasurement = function(a) {
								this.$2(
									0,
									b("AdQualityMeasurementResult.adquality").unknownResult(),
									a
								);
							};
							a.prototype.$2 = function(a, c, d) {
								c.appendResult(
									b("AdQualityMeasurementResult.adquality").unknownResult()
								);
								if (a < this.$1.length) {
									var e = this.$1[a];
									!e.isAvailable(this.$1)
										? this.$2(a + 1, c, d)
										: e.getMeasurement(
												ES(
													function(b) {
														c.appendResult(b),
															c.isConclusive()
																? this.$3(c, d)
																: this.$2(a + 1, c, d);
													},
													"bind",
													!0,
													this
												)
										  );
								} else this.$3(c, d);
							};
							a.prototype.$3 = function(a, b) {
								b(a);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"AdQualityPlayerSizeMonitor.adquality",
						["ScreenOrientation.adquality"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function a() {
								this.$1 = { h: 0, u: 0, v: 0 };
							}
							a.prototype.destroy = function() {
								this.$1 = { h: 0, u: 0, v: 0 };
							};
							a.prototype.getMaxAdAreaForScreenOrientation = function(a) {
								var c = b("ScreenOrientation.adquality").getScreenOrientation();
								if (a.getReason() !== "fullscreen") {
									a = a.getAdRect();
									a = (a && a.area()) || 0;
									this.$1[c] = Math.max(this.$1[c], a);
								}
								return {
									maxAdAreaNotFullscreen: this.$1[c],
									screenOrientation: c
								};
							};
							a.prototype.getMaxAdAreaByScreenOrientation = function(a) {
								return {
									maxAdAreaNotFullscreen: this.$1[a],
									screenOrientation: a
								};
							};
							e.exports = a;
						},
						null
					);
					__d(
						"AdQualityStatistics.adquality",
						["AdQualityScreenOrientation", "AdQualityViewabilityDetection"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function a(a, c, d) {
								c === void 0 && (c = 0.05),
									d === void 0 && (d = 0.33),
									(this.$23 = a),
									(this.$2 = c),
									(this.$28 = d),
									this.resetNonContinuousStatistics(),
									(this.$20 = b("AdQualityViewabilityDetection").NONE),
									(this.$21 = ""),
									(this.$5 = 0),
									(this.$7 = 0),
									(this.$6 = 0),
									(this.$9 = 0),
									(this.$10 = 0),
									(this.$11 = 0),
									(this.$27 = {
										maxAdAreaNotFullscreen: 0,
										screenOrientation: b("AdQualityScreenOrientation").UNKNOWN
									});
							}
							a.prototype.getViewableRatio = function() {
								return this.$23;
							};
							a.prototype.getData = function() {
								return {
									audibleSeconds: this.$1,
									avgPlaybackRate: isFinite(this.$18 / this.$24)
										? Math.round((this.$18 * 100) / this.$24) / 100
										: null,
									avgViewableRatio: this.$3,
									avgVolume: this.$4,
									curViewableRatio: this.$8,
									maxContinuousAudibleSeconds: this.$9,
									maxContinuousPlaySeconds: this.$10,
									maxContinuousViewableSeconds: this.$11,
									maxViewableRatio: this.$12,
									maxVolume: this.$13,
									measurementSeconds: this.$14,
									minViewableRatio: this.$15,
									minVolume: this.$16,
									viewableDetection: this.$20,
									viewableReason: this.$21,
									viewableSeconds: this.$22,
									stickyAdSeconds: this.$26,
									maxAdArea: this.$27
								};
							};
							a.prototype.registerProgress = function(a, b) {
								__p && __p();
								this.$14 += a;
								var c = b.getViewableRatio() || 0;
								this.$20 = b.getViewabilityDetection();
								this.$21 = b.getReason();
								this.$8 = c;
								this.$17 += c * a;
								this.$14 > 0 && (this.$3 = this.$17 / this.$14);
								(this.$15 === null || this.$15 === void 0 || this.$15 > c) &&
									(this.$15 = c);
								(this.$12 === null || this.$12 === void 0 || this.$12 < c) &&
									(this.$12 = c);
								this.$27 = b.getMaxAdArea() || this.$27;
								var d = b.getAdRect();
								b.getReason() !== "fullscreen" &&
									d &&
									d.area() < this.$28 * this.$27.maxAdAreaNotFullscreen &&
									(this.$26 += a);
								d = c >= this.$23;
								d && (this.$22 += a);
								this.$6 += a;
								(!b.getIsContinuous() || !d) && (this.$6 = 0);
								this.$11 = Math.max(this.$11, this.$6);
								this.$7 += a;
								b.getIsContinuous() || (this.$7 = 0);
								this.$10 = Math.max(this.$10, this.$7);
							};
							a.prototype.registerVolume = function(a, b, c) {
								__p && __p();
								this.$25++;
								this.$19 += b;
								this.$4 = this.$19 / this.$25;
								this.$13 = Math.max(this.$13, b);
								this.$16 = this.$25 !== 1 ? Math.min(this.$16, b) : b;
								b = b >= this.$2;
								b && (this.$1 += a);
								this.$5 += a;
								(!c || !b) && (this.$5 = 0);
								this.$9 = Math.max(this.$9, this.$5);
							};
							a.prototype.registerPlaybackRate = function(a, b) {
								(this.$24 += a), (this.$18 += b * a);
							};
							a.prototype.resetNonContinuousStatistics = function() {
								(this.$1 = 0),
									(this.$3 = null),
									(this.$4 = 0),
									(this.$8 = null),
									(this.$12 = null),
									(this.$13 = 0),
									(this.$14 = 0),
									(this.$15 = null),
									(this.$16 = 0),
									(this.$18 = 0),
									(this.$17 = 0),
									(this.$19 = 0),
									(this.$22 = 0),
									(this.$24 = 0),
									(this.$25 = 0),
									(this.$26 = 0);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"AdQualityManager.adquality",
						[
							"AdQualityMeasurementQueue.adquality",
							"AdQualityMeasurementResult.adquality",
							"AdQualityPlayerSizeMonitor.adquality",
							"AdQualityStatistics.adquality"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = 0.5;
							function a(a) {
								__p && __p();
								var c = a.element,
									d = a.parentWindow,
									e = a.rules;
								this.$1 = !0;
								this.$2 = c;
								this.$3 = new (b("AdQualityMeasurementQueue.adquality"))(
									a.measurementTests
								);
								this.$4 = new (b("AdQualityPlayerSizeMonitor.adquality"))();
								this.$5 = d;
								this.$8 = e;
								this.$6 = new (b("AdQualityStatistics.adquality"))(g);
								this.$7 = ES(this.$8, "map", !0, function(a) {
									return a.createTest(a);
								});
							}
							a.prototype.getStatistics = function() {
								return this.$6.getData();
							};
							a.prototype.getViewableRatio = function(a, c) {
								this.$3.getMeasurement(
									ES(
										function(d) {
											var e = d.getAdRect();
											c(
												new (b("AdQualityMeasurementResult.adquality"))({
													ar: e,
													e: d.getError(),
													vd: d.getViewabilityDetection(),
													r: a ? "fullscreen" : d.getReason(),
													vr: a ? e : d.getViewableRect(),
													maa: this.$4.getMaxAdAreaForScreenOrientation(d)
												})
											);
										},
										"bind",
										!0,
										this
									)
								);
							};
							a.prototype.registerProgress = function(a, c) {
								__p && __p();
								if (!this.$1) {
									c && c(this.getStatistics());
									return;
								}
								this.$3.getMeasurement(
									ES(
										function(d) {
											if (this.$1) {
												var e = d.getAdRect();
												e = new (b("AdQualityMeasurementResult.adquality"))({
													ar: e,
													e: d.getError(),
													vd: d.getViewabilityDetection(),
													r: a.isFullScreen ? "fullscreen" : d.getReason(),
													vr: a.isFullScreen ? e : d.getViewableRect(),
													cont: a.isContinuous,
													maa: this.$4.getMaxAdAreaForScreenOrientation(d)
												});
												this.$9(
													e,
													parseFloat(a.loggingTimeInterval),
													this.getStatistics(),
													a,
													a.volume,
													a.playbackRate
												);
												c && c(this.getStatistics());
											}
										},
										"bind",
										!0,
										this
									)
								);
							};
							a.prototype.resetStatistics = function() {
								this.$6.resetNonContinuousStatistics();
							};
							a.prototype.addRule = function(a) {
								this.$8.push(a), this.$7.push(a.createTest(a));
							};
							a.prototype.$9 = function(a, b, c, d, e, f) {
								this.$6.registerVolume(b, e, a.getIsContinuous()),
									this.$6.registerPlaybackRate(b, f),
									this.$6.registerProgress(b, a),
									ES(this.$7, "forEach", !0, function(e) {
										e.registerProgress(b, a, c, d);
									});
							};
							e.exports = a;
						},
						null
					);
					__d(
						"AdViewability",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							a = ES("Object", "freeze", !1, {
								PARTIALLY_VISIBLE: "PARTIALLY_VISIBLE",
								FULLY_VISIBLE: "FULLY_VISIBLE",
								HIDDEN_TAB: "HIDDEN_TAB",
								SAFEFRAME_OFFSCREEN: "SAFEFRAME_OFFSCREEN",
								OFFSCREEN_ABOVE: "OFFSCREEN_ABOVE",
								OFFSCREEN_BELOW: "OFFSCREEN_BELOW",
								OFFSCREEN_HORIZONTAL: "OFFSCREEN_HORIZONTAL",
								OFFSCREEN_INFINITY: "OFFSCREEN_INFINITY",
								MISSING_ELEMENTS: "MISSING_ELEMENTS",
								INVALID_SAFEFRAME_API: "INVALID_SAFEFRAME_API",
								UNKNOWN: "UNKNOWN"
							});
							e.exports = a;
						},
						null
					);
					__d(
						"HTMLElementFrameContext.adquality",
						["ANUtils", "Rectangle.adquality"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = 0,
								h = 1,
								i = 2,
								j = 3,
								k = 0,
								l = 1,
								m = 2;
							function n(a, c) {
								__p && __p();
								this.ancestorIframes = [];
								this.ancestorURLs = [];
								this.crossDomainWindowCount = 0;
								this.error = null;
								this.focus = null;
								this.offsetHeight = null;
								this.offsetRect = null;
								this.offsetWidth = null;
								this.pageURL = null;
								this.parentWindow = null;
								this.topWindow = null;
								this.topWindowLevel = 0;
								this.type = null;
								this.viewportRect = null;
								this.windowCount = 0;
								this.domainDetectionMethod = g;
								this.pageDomain = null;
								this.transparent = null;
								try {
									try {
										(this.offsetHeight = a.offsetHeight),
											(this.offsetWidth = a.offsetWidth);
									} catch (a) {}
									var d = a.ownerDocument;
									this.parentWindow =
										c || a.ownerDocument.defaultView || d.parentWindow;
									if (this.parentWindow) {
										c = a;
										d = this.parentWindow;
										while (d && this.windowCount < 100) {
											this.windowCount++;
											a = null;
											var e = null;
											try {
												(e = d.document.referrer),
													(a = d.location.href || d.document.location.href),
													(this.topWindow = d),
													(this.topWindowLevel = this.windowCount);
											} catch (a) {
												this.crossDomainWindowCount++;
											}
											this.ancestorURLs.push(a || e || "");
											var f = null;
											try {
												c &&
													n.isElementVisible(c) === !1 &&
													(this.transparent = !0);
											} catch (a) {}
											var o = null;
											if (
												c &&
												c.getBoundingClientRect &&
												this.crossDomainWindowCount === 0
											)
												try {
													o = c.getBoundingClientRect();
												} catch (a) {}
											o &&
												this.crossDomainWindowCount === 0 &&
												(!this.offsetRect
													? (this.offsetRect = b(
															"Rectangle.adquality"
													  ).RectangleFromClientRect(o))
													: (this.offsetRect = this.offsetRect.offset(
															o.left,
															o.top
													  )));
											if (!this.parentWindow || !this.parentWindow.top)
												d = null;
											else if (d === this.parentWindow.top)
												a &&
													((this.pageURL = a),
													(this.pageDomain = b("ANUtils").extractDomain(a)),
													(this.domainDetectionMethod = h),
													(this.focus = f)),
													this.windowCount > 1
														? a
															? (this.type = l)
															: (this.type = m)
														: (this.type = k),
													this.type !== m &&
														((this.viewportRect = b(
															"Rectangle.adquality"
														).RectangleFromWindow(d)),
														this.transparent === null &&
															(this.transparent = !1)),
													(d = null);
											else {
												e &&
													d.parent === this.parentWindow.top &&
													((this.pageURL = e),
													(this.pageDomain = b("ANUtils").extractDomain(e)),
													(this.domainDetectionMethod = i));
												c = null;
												try {
													(c = d.frameElement),
														c && this.ancestorIframes.push(c);
												} catch (a) {}
												d = d.parent;
											}
										}
										if (!this.pageURL) {
											o = window.location.ancestorOrigins;
											o &&
												o.length > 0 &&
												((this.pageDomain = b("ANUtils").extractDomain(
													o[o.length - 1]
												)),
												(this.domainDetectionMethod = j));
										}
									}
								} catch (a) {
									this.error = a;
								}
							}
							n.prototype.getData = function() {
								var a = null;
								if (this.error)
									try {
										a = this.error.toString();
									} catch (b) {
										a = "Unknown error";
									}
								return {
									crossDomainWindowCount: this.crossDomainWindowCount,
									error: a,
									focus: this.focus,
									offsetHeight: this.offsetHeight,
									offsetRect: this.offsetRect
										? this.offsetRect.getData()
										: null,
									offsetWidth: this.offsetWidth,
									pageDomain: this.pageDomain,
									pageURL: this.pageURL,
									domainDetectionMethod: this.domainDetectionMethod,
									topWindowLevel: this.topWindowLevel,
									type: this.type,
									viewportRect: this.viewportRect
										? this.viewportRect.getData()
										: null,
									windowCount: this.windowCount,
									transparent: this.transparent
								};
							};
							n.prototype.isSafeframe = function() {
								return !!this.getSafeFrameAPI();
							};
							n.prototype.getSafeFrameAPI = function() {
								return this.$1(function(a) {
									return a.$sf && a.$sf.ext;
								});
							};
							n.prototype.getMRAIDAPI = function() {
								return this.$1(function(a) {
									return a.mraid;
								});
							};
							n.prototype.$1 = function(a) {
								__p && __p();
								var c = b("ANUtils").getWindowHierarchy(this.parentWindow);
								for (
									var c = c,
										d = ES("Array", "isArray", !1, c),
										e = 0,
										c = d
											? c
											: c[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
											  ]();
									;

								) {
									var f;
									if (d) {
										if (e >= c.length) break;
										f = c[e++];
									} else {
										e = c.next();
										if (e.done) break;
										f = e.value;
									}
									f = f;
									f = a(f);
									if (f) return f;
								}
								return null;
							};
							n.prototype.getNestLevel = function() {
								return this.ancestorURLs.length - 1;
							};
							n.prototype.getTopURL = function() {
								return this.ancestorURLs[this.ancestorURLs.length - 1];
							};
							n.prototype.isCrossDomain = function() {
								return this.crossDomainWindowCount > 0;
							};
							n.prototype.getOverlayedArea = function(a) {
								__p && __p();
								try {
									var b = this.topWindow,
										c = this.ancestorIframes[this.ancestorIframes.length - 1];
									if (!b || !c) return 0;
									var d = function(a) {
											a = b.document.elementFromPoint(a.x, a.y);
											return (
												a && a !== c && ES("Object", "keys", !1, a).length > 0
											);
										},
										e = a.getData(),
										f = e.height,
										g = e.width,
										h = e.x;
									e = e.y;
									h = [
										{ x: h, y: e },
										{ x: h + g - 1, y: e },
										{ x: h, y: e + f - 1 },
										{ x: h + g - 1, y: e + f - 1 },
										{ x: h + g / 2, y: e + f / 2 },
										{ x: h + g / 4, y: e + f / 2 },
										{ x: h + (3 * g) / 4, y: e + f / 2 },
										{ x: h + g / 2, y: e + f / 4 },
										{ x: h + g / 2, y: e + (3 * f) / 4 }
									];
									g = Math.min(
										1,
										ES(h, "map", !0, d).reduce(function(a, b) {
											return a + (b ? 1 / 9 : 0);
										}, 0)
									);
									return g * a.area();
								} catch (a) {}
								return 0;
							};
							n.isElementVisible = function(a) {
								if (!a.style) return !0;
								if (a.style.opacity && a.style.opacity < "0.9") return !1;
								if (a.style.visibility && a.style.visibility === "hidden")
									return !1;
								return a.parentElement
									? this.isElementVisible(a.parentElement)
									: !0;
							};
							e.exports = n;
						},
						null
					);
					__d(
						"GeometricMeasurement.adquality",
						[
							"AdQualityMeasurement.adquality",
							"AdQualityMeasurementResult.adquality",
							"AdQualityViewabilityDetection",
							"HTMLElementFrameContext.adquality",
							"PageVisibility.adquality",
							"Rectangle.adquality"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g;
							c = babelHelpers.inherits(a, b("AdQualityMeasurement.adquality"));
							g = c && c.prototype;
							function a(a, c) {
								g.constructor.call(this, a, c);
								this.$GeometricMeasurement1 = a;
								c = new (b("HTMLElementFrameContext.adquality"))(a, c);
								this.$GeometricMeasurement2 = !!(
									c.viewportRect && c.offsetRect
								);
								this.__viewabilityDetection = b(
									"AdQualityViewabilityDetection"
								).GEOMETRIC;
								this.$GeometricMeasurement3 = new (b(
									"PageVisibility.adquality"
								))(a.ownerDocument);
							}
							a.prototype.isAvailable = function() {
								return this.$GeometricMeasurement2;
							};
							a.prototype.getMeasurement = function(a) {
								__p && __p();
								var c = new (b("HTMLElementFrameContext.adquality"))(
										this.$GeometricMeasurement1,
										this.__parentWindow
									),
									d = null,
									e = null,
									f = "",
									g = null,
									h = null;
								try {
									var i = this.$GeometricMeasurement3.isHidden();
									typeof i === "boolean" && (e = !i);
									h = c.offsetRect;
									c.focus !== null && (e = c.focus);
									if (c.transparent === !0) {
										a(
											new (b("AdQualityMeasurementResult.adquality"))({
												ar: h,
												vd: this.__viewabilityDetection,
												r: "geo-trans",
												vr: b("Rectangle.adquality").RectangleZero()
											}),
											c
										);
										return;
									}
									c.viewportRect && h && c.crossDomainWindowCount === 0
										? ((g =
												c.viewportRect.intersection(h) ||
												b("Rectangle.adquality").RectangleZero()),
										  (f = g.area() > 0 ? "geo-area" : "geo-no-vr"))
										: h || (f = "geo-no-or");
									e === !1 &&
										((g = b("Rectangle.adquality").RectangleZero()),
										(f = "geo-pv"));
								} catch (a) {
									d = a;
								}
								a(
									new (b("AdQualityMeasurementResult.adquality"))({
										ar: h,
										e: d,
										vd: this.__viewabilityDetection,
										r: f,
										vr: g
									}),
									c
								);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"IntersectionObserverMeasurement.adquality",
						[
							"AdQualityMeasurement.adquality",
							"AdQualityMeasurementResult.adquality",
							"AdQualityViewabilityDetection",
							"HTMLElementFrameContext.adquality",
							"PageVisibility.adquality",
							"Rectangle.adquality",
							"SimplePromise.adquality"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g,
								h = 300,
								i = [];
							for (var c = 0; c <= 10; c += 1) i.push(c / 10);
							d = babelHelpers.inherits(a, b("AdQualityMeasurement.adquality"));
							g = d && d.prototype;
							function a(a, c) {
								__p && __p();
								g.constructor.call(this, a, c),
									(this.$IntersectionObserverMeasurement2 = a),
									this.isAvailable() &&
										(this.$IntersectionObserverMeasurement4 = new (b(
											"SimplePromise.adquality"
										))(
											ES(
												function(d, e) {
													__p && __p();
													var f = window.setTimeout(function() {
															return e();
														}, h),
														g = new (b("HTMLElementFrameContext.adquality"))(
															a,
															c
														),
														j = g.offsetRect;
													g = g.topWindow;
													var k = a;
													if (j && g) {
														var l = b(
															"Rectangle.adquality"
														).RectangleFromWindow(g);
														l &&
															(j.y < l.y ||
																j.x < l.x ||
																j.height > l.height ||
																j.width > l.width) &&
															(k = g.document.documentElement || a);
													}
													j = this.__parentWindow.IntersectionObserver;
													this.$IntersectionObserverMeasurement3 = new j(
														ES(
															function(a) {
																var b = !!this
																	.$IntersectionObserverMeasurement1;
																this.$IntersectionObserverMeasurement1 =
																	a[a.length - 1];
																b || (window.clearTimeout(f), d());
															},
															"bind",
															!0,
															this
														),
														{ threshold: i }
													);
													this.$IntersectionObserverMeasurement3.observe(k);
													this.$IntersectionObserverMeasurement5 = new (b(
														"PageVisibility.adquality"
													))(a.ownerDocument);
												},
												"bind",
												!0,
												this
											)
										)),
									(this.__viewabilityDetection = b(
										"AdQualityViewabilityDetection"
									).INTERSECTION_OBSERVER);
							}
							a.prototype.destroy = function() {
								this.$IntersectionObserverMeasurement3 &&
									this.$IntersectionObserverMeasurement3.disconnect();
							};
							a.prototype.isAvailable = function() {
								return "IntersectionObserver" in this.__parentWindow;
							};
							a.prototype.getMeasurement = function(a) {
								__p && __p();
								if (this.$IntersectionObserverMeasurement1) {
									this.$IntersectionObserverMeasurement6(a);
									return;
								}
								if (!this.$IntersectionObserverMeasurement4) {
									this.$IntersectionObserverMeasurement7(a);
									return;
								}
								this.$IntersectionObserverMeasurement4.then(
									ES(
										function() {
											return this.$IntersectionObserverMeasurement6(a);
										},
										"bind",
										!0,
										this
									),
									ES(
										function() {
											return this.$IntersectionObserverMeasurement7(a);
										},
										"bind",
										!0,
										this
									)
								);
							};
							a.prototype.$IntersectionObserverMeasurement6 = function(a) {
								__p && __p();
								if (!this.$IntersectionObserverMeasurement1) {
									this.$IntersectionObserverMeasurement7(a);
									return;
								}
								var c = this.$IntersectionObserverMeasurement1,
									d = c.boundingClientRect;
								c = c.intersectionRect;
								var e = !this.$IntersectionObserverMeasurement5.isHidden(),
									f = new (b("HTMLElementFrameContext.adquality"))(
										this.$IntersectionObserverMeasurement2,
										this.__parentWindow
									);
								f.focus !== null && (e = e && Boolean(f.focus));
								f = e
									? b("Rectangle.adquality").RectangleFromClientRect(c)
									: b("Rectangle.adquality").RectangleZero();
								a(
									new (b("AdQualityMeasurementResult.adquality"))({
										ar: b("Rectangle.adquality").RectangleFromClientRect(d),
										vd: this.__viewabilityDetection,
										vr: f
									})
								);
							};
							a.prototype.$IntersectionObserverMeasurement7 = function(a) {
								a(
									b("AdQualityMeasurementResult.adquality").unknownResult(
										this.__viewabilityDetection,
										this.__viewabilityDetection + "-na"
									)
								);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"SafeframeMeasurement.adquality",
						[
							"AdQualityMeasurement.adquality",
							"AdQualityMeasurementResult.adquality",
							"AdQualityViewabilityDetection",
							"HTMLElementFrameContext.adquality",
							"Rectangle.adquality",
							"nullthrows"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g;
							c = babelHelpers.inherits(a, b("AdQualityMeasurement.adquality"));
							g = c && c.prototype;
							function a(a, c) {
								g.constructor.call(this, a, c),
									(this.$SafeframeMeasurement1 = new (b(
										"HTMLElementFrameContext.adquality"
									))(a, c).getSafeFrameAPI()),
									(this.__viewabilityDetection = b(
										"AdQualityViewabilityDetection"
									).SAFEFRAME);
							}
							a.prototype.isAvailable = function() {
								return !!this.$SafeframeMeasurement1;
							};
							a.prototype.getMeasurement = function(a) {
								var c = b("nullthrows")(this.$SafeframeMeasurement1);
								c = c.geom;
								c = c();
								c = c.self;
								var d = Number(c.h),
									e = Number(c.w),
									f = Number(c.l),
									g = Number(c.t);
								a(
									new (b("AdQualityMeasurementResult.adquality"))({
										ar: new (b("Rectangle.adquality"))(f, g, e, d),
										vd: this.__viewabilityDetection,
										vr: new (b("Rectangle.adquality"))(
											f,
											g,
											Number(c.xiv) * e,
											Number(c.yiv) * d
										)
									})
								);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"AdQualityViewabilityMonitor",
						[
							"AdQualityManager.adquality",
							"AdViewability",
							"AMPMeasurement.adquality",
							"GeometricMeasurement.adquality",
							"IntersectionObserverMeasurement.adquality",
							"SafeframeMeasurement.adquality"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = 100;
							function a(a, c) {
								c === void 0 && (c = !1);
								this.$1 = !1;
								this.$3 = null;
								var d = a.ownerDocument.defaultView,
									e = [
										new (b("GeometricMeasurement.adquality"))(a, d),
										new (b("SafeframeMeasurement.adquality"))(a, d),
										new (b("AMPMeasurement.adquality"))(a, d)
									],
									f = new (b("IntersectionObserverMeasurement.adquality"))(
										a,
										d
									);
								c ? (e = [f].concat(e)) : e.push(f);
								this.$2 = new (b("AdQualityManager.adquality"))({
									element: a,
									parentWindow: d,
									rules: [],
									measurementTests: e
								});
							}
							a.prototype.pause = function() {
								this.$1 = !0;
							};
							a.prototype.resume = function() {
								this.$1 = !1;
							};
							a.prototype.getDimensions = function() {
								return !this.$4 ? null : this.$4.getAdRect();
							};
							a.prototype.attachBehaviorManager = function(a) {
								(this.$3 = a), this.$6();
							};
							a.prototype.$6 = function() {
								__p && __p();
								if (this.$5 !== void 0) return;
								this.$5 = window.setInterval(
									ES(
										function() {
											if (this.$1) return;
											this.$2.getViewableRatio(
												!1,
												ES(
													function(a) {
														this.$4 = a;
														var b = a.getViewableWidthRatio();
														a = a.getViewableHeightRatio();
														this.$3 != null &&
															b != null &&
															a != null &&
															this.$3.updateView(b, a);
													},
													"bind",
													!0,
													this
												)
											);
										},
										"bind",
										!0,
										this
									),
									g
								);
							};
							a.prototype.getCurrentViewabilityState = function() {
								__p && __p();
								if (!this.$4)
									return { viewabilityLevels: [b("AdViewability").UNKNOWN] };
								var a = this.$4,
									c = a.getViewableRatio(),
									d = a.getViewableWidthRatio();
								a = a.getViewableHeightRatio();
								if (c == null || d == null || a == null)
									return { viewabilityLevels: [b("AdViewability").UNKNOWN] };
								if (c <= 0)
									return {
										viewabilityLevels: [b("AdViewability").OFFSCREEN_INFINITY]
									};
								if (d <= 0.99)
									return {
										viewabilityLevels: [b("AdViewability").OFFSCREEN_HORIZONTAL]
									};
								c >= 1
									? (c = [b("AdViewability").FULLY_VISIBLE])
									: (c = [b("AdViewability").PARTIALLY_VISIBLE]);
								return {
									viewabilityLevels: c,
									widthInView: d,
									heightInView: a
								};
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANMWebMediator",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								AMP: "AMP",
								APPNEXUS: "APPNEXUS",
								APPNEXUS_ASYNC: "APPNEXUS_ASYNC",
								FIRSTIMPRESSION_IO: "FIRSTIMPRESSION.IO",
								GOOGLE_FRIENDLY_IFRAME: "GOOGLE_FRIENDLY_IFRAME",
								GOOGLE_SAFE_FRAME: "GOOGLE_SAFE_FRAME",
								NONE: "NONE",
								SHARETHROUGH: "SHARETHROUGH",
								SMART_ADSERVER_ASYNC: "SMART_ADSERVER_ASYNC",
								SMART_ADSERVER_SYNC: "SMART_ADSERVER_SYNC",
								UNKNOWN: "UNKNOWN",
								UNKNOWN_SAFE_FRAME: "UNKNOWN_SAFE_FRAME"
							});
						},
						null
					);
					__d(
						"MediationDetector",
						["AMPContextLoader", "ANMWebMediator", "ANUtils", "nullthrows"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function a(a) {
								__p && __p();
								(this.$2 = ES(
									function() {
										__p && __p();
										if (this.$1.getNestLevel() === 0)
											return b("ANMWebMediator").NONE;
										for (
											var a = this.$1.ancestorIframes,
												c = ES("Array", "isArray", !1, a),
												d = 0,
												a = c
													? a
													: a[
															typeof Symbol === "function"
																? Symbol.iterator
																: "@@iterator"
													  ]();
											;

										) {
											var e;
											if (c) {
												if (d >= a.length) break;
												e = a[d++];
											} else {
												d = a.next();
												if (d.done) break;
												e = d.value;
											}
											e = e;
											if (e.src) {
												e = b("ANUtils").extractDomain(e.src);
												if (e === this.$1.pageDomain)
													return b("ANMWebMediator").NONE;
											}
										}
										return null;
									},
									"bind",
									!0,
									this
								)),
									(this.$4 = ES(
										function() {
											var a = this.$1.ancestorURLs;
											if (a.length > 0 && this.$1.getSafeFrameAPI()) {
												a = b("ANUtils").extractDomain(a[0]);
												if (
													window.googletag &&
													a === "tpc.googlesyndication.com"
												)
													return b("ANMWebMediator").GOOGLE_SAFE_FRAME;
												else return b("ANMWebMediator").UNKNOWN_SAFE_FRAME;
											}
											return null;
										},
										"bind",
										!0,
										this
									)),
									(this.$5 = ES(
										function() {
											var a = this.$1.ancestorIframes;
											return a.length > 0 &&
												ES(a[0].id, "indexOf", !0, "google_ads_iframe_") === 0
												? b("ANMWebMediator").GOOGLE_FRIENDLY_IFRAME
												: null;
										},
										"bind",
										!0,
										this
									)),
									(this.$8 = ES(
										function() {
											var a = this.$1.ancestorIframes;
											return a.length > 0 &&
												(ES(a[0].classList, "contains", !0, "str-fan-iframe") ||
													b("nullthrows")(a[0].parentElement).id ===
														"str-fan-placeholder")
												? b("ANMWebMediator").SHARETHROUGH
												: null;
										},
										"bind",
										!0,
										this
									)),
									(this.$9 = ES(
										function() {
											var a = this.$1.ancestorIframes;
											return a.length > 0 &&
												ES(a[0].classList, "contains", !0, "fiSafeFrame") &&
												window.parent.fiQuery
												? b("ANMWebMediator").FIRSTIMPRESSION_IO
												: null;
										},
										"bind",
										!0,
										this
									)),
									(this.$1 = a);
							}
							a.prototype.getMediator = function() {
								var a = [
									this.$2,
									this.$3,
									this.$4,
									this.$5,
									this.$6,
									this.$7,
									this.$8,
									this.$9
								];
								for (var c = 0; c < a.length; c++) {
									var d = a[c];
									try {
										d = d();
										if (d) return d;
									} catch (a) {}
								}
								return b("ANMWebMediator").UNKNOWN;
							};
							a.prototype.$6 = function() {
								return window.sas &&
									document.querySelector(
										'script[src*="www.smartadserver.com/"]'
									)
									? window.sas_ajax
										? b("ANMWebMediator").SMART_ADSERVER_ASYNC
										: b("ANMWebMediator").SMART_ADSERVER_SYNC
									: null;
							};
							a.prototype.$7 = function() {
								if (window.ADNXSMediation && window.ADNXSMediation.adFilled)
									if (window.ADNXSAsync || window.ADNXSMediation.isAsync())
										return b("ANMWebMediator").APPNEXUS_ASYNC;
									else return b("ANMWebMediator").APPNEXUS;
								return null;
							};
							a.prototype.$3 = function() {
								return b("AMPContextLoader").isAMP()
									? b("ANMWebMediator").AMP
									: null;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"OnScreenDefinition.anweb",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a.prototype.getState = function(a, b) {
								if (b < 0.01) return "off-screen";
								else if (a < 0.99) return "invalid";
								else if (b < 0.5) return "partially-on-screen";
								else if (b < 0.99) return "mostly-on-screen";
								else return "completely-on-screen";
							};
							function a() {}
							e.exports = { MOBILE_FEED: new a() };
						},
						null
					);
					__d(
						"OnScreenBehaviorManager.anweb",
						["OnScreenDefinition.anweb"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = ES("Object", "freeze", !1, {
								invalid: -1,
								"off-screen": 0,
								"partially-on-screen": 1,
								"mostly-on-screen": 2,
								"completely-on-screen": 3
							});
							function h(a) {
								return g[a];
							}
							function i(a, b, c) {
								__p && __p();
								switch (b) {
									case 3:
										a.onCompletelyEntered();
										break;
									case 2:
										c ? a.onMostlyEntered() : a.onPartiallyLeft();
										break;
									case 1:
										c ? a.onPartiallyEntered() : a.onMostlyLeft();
										break;
									case 0:
										c ? a.onBecameValid() : a.onCompletelyLeft();
										break;
									case -1:
										a.onBecameInvalid();
										break;
								}
							}
							function j(a, b, c) {
								for (var d = b + 1; d <= c; d++) i(a, d, !0);
								for (var d = b - 1; d >= c; d--) i(a, d, !1);
							}
							function a(a) {
								a === void 0 && (a = b("OnScreenDefinition.anweb").MOBILE_FEED),
									(this.$3 = a),
									(this.$1 = "off-screen"),
									(this.$2 = []);
							}
							a.prototype.updateView = function(a, b) {
								a = this.$3.getState(a, b);
								this.$4(a);
							};
							a.prototype.$4 = function(a) {
								__p && __p();
								if (a === this.$1) return;
								var b = h(this.$1),
									c = h(a);
								for (
									var d = this.$2,
										e = ES("Array", "isArray", !1, d),
										f = 0,
										d = e
											? d
											: d[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
											  ]();
									;

								) {
									var g;
									if (e) {
										if (f >= d.length) break;
										g = d[f++];
									} else {
										f = d.next();
										if (f.done) break;
										g = f.value;
									}
									g = g;
									j(g, b, c);
								}
								this.$1 = a;
							};
							a.prototype.addBehavior = function(a) {
								this.$2.push(a), j(a, h("off-screen"), h(this.$1));
							};
							e.exports = a;
						},
						null
					);
					__d(
						"promiseDone.anweb",
						[],
						function(a, b, c, d, e, f) {
							function a(a, b, c) {
								var d = arguments.length > 1 ? a.then(b, c) : a;
								d.then(null, function(a) {
									window.setTimeout(function() {
										throw a;
									});
								});
							}
							e.exports = a;
						},
						null
					);
					__d(
						"PlayVideoWhenOnScreenBehavior.anweb",
						["OnScreenBehavior.anweb", "promiseDone.anweb"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g;
							c = babelHelpers.inherits(a, b("OnScreenBehavior.anweb"));
							g = c && c.prototype;
							function a(a, b, c) {
								g.constructor.call(this),
									(this.$PlayVideoWhenOnScreenBehavior1 = a),
									(this.$PlayVideoWhenOnScreenBehavior2 = b),
									(this.$PlayVideoWhenOnScreenBehavior3 = c),
									(this.$PlayVideoWhenOnScreenBehavior4 = !1);
							}
							a.prototype.onCompletelyEntered = function() {
								!this.$PlayVideoWhenOnScreenBehavior4 &&
									this.$PlayVideoWhenOnScreenBehavior2 &&
									!this.$PlayVideoWhenOnScreenBehavior1.wasManuallyPaused() &&
									((this.$PlayVideoWhenOnScreenBehavior4 = !0),
									b("promiseDone.anweb")(
										this.$PlayVideoWhenOnScreenBehavior1.play().then(
											ES(
												function() {
													return this.$PlayVideoWhenOnScreenBehavior3.event(
														"VIDEO_AUTOPLAY_SUCCEEDED"
													);
												},
												"bind",
												!0,
												this
											),
											ES(
												function() {
													return this.$PlayVideoWhenOnScreenBehavior3.event(
														"VIDEO_AUTOPLAY_FAILED"
													);
												},
												"bind",
												!0,
												this
											)
										)
									));
							};
							a.prototype.onMostlyLeft = function() {
								this.$PlayVideoWhenOnScreenBehavior1.pause();
							};
							a.prototype.onCompletelyLeft = function() {
								this.$PlayVideoWhenOnScreenBehavior1.pause();
							};
							a.prototype.onMostlyEntered = function() {
								this.$PlayVideoWhenOnScreenBehavior1.hasPlayed() &&
									!this.$PlayVideoWhenOnScreenBehavior1.wasManuallyPaused() &&
									this.$PlayVideoWhenOnScreenBehavior1.play();
							};
							e.exports = a;
						},
						null
					);
					__d(
						"Whiteops",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = {
								run: function(a, b, c, d, e) {
									__p && __p();
									try {
										var f = window.document.createElement("iframe");
										f.id = "fbsbx-sig-iframe-" + a;
										f.style.height = "100%";
										f.style.width = "100%";
										f.sandbox = "allow-scripts allow-same-origin";
										f.style.opacity = "0";
										f.style.position = "absolute";
										f.style.zIndex = "-9999999";
										f.src =
											"https://s.update.fbsbx.com/2/843748/utils.html?ti=" +
											a +
											"&di=" +
											c +
											"&bt=" +
											b +
											"&dt=8437481520966594402012&sn=IMPRESSION&c1=" +
											d;
										e.appendChild(f);
									} catch (a) {}
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANAdManager",
						[
							"cx",
							"AdImpressionBehavior.anweb",
							"AdMostlyViewableImpressionBehavior.anweb",
							"AdQualityViewabilityMonitor",
							"AdViewability",
							"AMPContextLoader",
							"ANAdChoices",
							"ANBounceBackManager",
							"ANCallbackManager",
							"ANCarousel",
							"ANEventCounter",
							"ANFullWidthLoader",
							"ANLinkOpener",
							"ANLogger",
							"ANMWebAdElement",
							"ANMWebUnifiedLoggingXOutOrigin",
							"ANMWebXOutClientEvent",
							"ANRewardedVideoPlayer",
							"ANUnifiedLoggingClickEvent",
							"ANUtils",
							"ANWebTwoStepClickDialog",
							"ANWebVideoLogger.anweb",
							"ANWebVideoPlayer.anweb",
							"ANXOut",
							"HTMLElementFrameContext.adquality",
							"JSSDKCssConfig",
							"LogLevels",
							"MediationDetector",
							"OnScreenBehaviorManager.anweb",
							"PlayVideoWhenOnScreenBehavior.anweb",
							"QueryString",
							"Whiteops",
							"getTime",
							"nullthrows"
						],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = {
									"300x250": [300, 250],
									"320x50": [320, 50],
									"300x600": [300, 600],
									"970x250": [970, 250],
									"728x90": [728, 90],
									fullwidth: [300, 250],
									rewarded_video: ["100%", "100%"]
								},
								i = [
									"fbAdBody",
									"fbAdCallToAction",
									"fbAdIcon",
									"fbAdMedia",
									"fbAdSubtitle",
									"fbAdTitle",
									"fbTwoStepDialog",
									"UNKNOWN"
								];
							function j(a) {
								return {
									controls: a.controls === "full" ? "full" : "mute_only",
									endCard: a.endCard || "none",
									pauseCard: a.pauseCard || "play_button"
								};
							}
							function a(a, c) {
								(this.$70 = ES(
									function(a) {
										this.sendToFacebook({
											name: "signal",
											params: {
												key: b("ANUtils").onlyString(this.$4.data.key),
												signalUrl: a
											}
										});
									},
									"bind",
									!0,
									this
								)),
									(this.$28 = ES(
										function(a, c) {
											this.sendToFacebook({
												name: "client_event",
												params: {
													key: b("ANUtils").onlyString(this.$4.data.key),
													clientEventUrl: a,
													payload: c
												}
											});
										},
										"bind",
										!0,
										this
									)),
									(this.$77 = ES(
										function() {
											var a = b("nullthrows")(this.$26);
											this.$21.eventWithParams({
												event_name: "VIDEO_CLICK",
												video_playback_time: a.getCurrentTime(),
												video_duration: a.getDuration()
											});
										},
										"bind",
										!0,
										this
									)),
									(this.$25 = new (b("ANCallbackManager"))(
										c,
										a.onMediaLoaded,
										a.onRewardCompleted,
										a.onAdClosed
									)),
									(this.$19 = !1),
									(this.$4 = a),
									(this.$20 = new (b("ANEventCounter"))()),
									(this.$11 = !1),
									(this.$12 = !1),
									(this.$23 = !1),
									(this.$3 = !1),
									this.$20.addListener(
										ES(
											function() {
												return this.$25.mediaLoaded();
											},
											"bind",
											!0,
											this
										)
									),
									(this.$8 = a.displayFormat || a.format || "300x250"),
									(this.tagJsIframeAppendedTime = a.tagJsIframeAppendedTime),
									(this.$21 = new (b("ANLogger"))(
										b("LogLevels").ERROR,
										a.tagJsInitTime,
										b("ANUtils").getNavigationStart(),
										this.$28
									)),
									(this.$9 = c),
									(this.$10 = new (b("HTMLElementFrameContext.adquality"))(
										this.$9,
										this.$29()
									)),
									(this.$2 = null),
									(this.$18 = new (b("OnScreenBehaviorManager.anweb"))()),
									(this.$22 = new (b("ANLinkOpener"))(this.$9));
							}
							a.prototype.sendToFacebook = function(a) {
								b("ANUtils").sendToFacebook(this.$4, a);
							};
							a.prototype.$29 = function() {
								return this.$9.ownerDocument.defaultView;
							};
							a.prototype.$30 = function() {
								return this.$29().frameElement;
							};
							a.prototype.$31 = function(a) {
								a = a.ownerDocument;
								var c = a.createElement("style");
								c.innerText = b("JSSDKCssConfig").rules;
								a.body && a.body.appendChild(c);
							};
							a.prototype.$32 = function() {
								return b("nullthrows")(this.$24);
							};
							a.prototype.$33 = function() {
								if (!this.$32().$34) return !1;
								var a = this.$35();
								return (
									(a.clientWidth >= 300 && a.clientHeight >= 250) || this.$36()
								);
							};
							a.prototype.$37 = function(a) {
								__p && __p();
								var c = this.$35();
								if (!this.$33()) {
									var d = new (b("ANAdChoices"))(c, a);
									d.render();
									return;
								}
								d = this.$27 ? this.$27.getXoutButton() : null;
								var e = b("ANMWebUnifiedLoggingXOutOrigin").INLINE_CONDENSED;
								c = new (b("ANXOut"))({
									parentEl: c,
									adIcon: a.adIcon,
									adChoicesLink: a.adChoicesHref,
									content: this.$32().$38,
									buttonEl: d,
									allowOptionStepClose: this.$32().$39.allowOptionStepClose,
									onXOutStart: ES(
										function() {
											this.$21.event(b("ANMWebXOutClientEvent").START, e);
										},
										"bind",
										!0,
										this
									),
									onXOutCancel: ES(
										function() {
											this.$21.event(b("ANMWebXOutClientEvent").CANCEL, e);
										},
										"bind",
										!0,
										this
									),
									onXOutOption: ES(
										function(a) {
											this.sendToFacebook({
												name: "xout",
												params: {
													key: b("ANUtils").onlyString(this.$4.data.key),
													reason: a,
													type: e
												}
											}),
												this.$21.event(
													b("ANMWebXOutClientEvent").SELECT_OPTION,
													a
												);
										},
										"bind",
										!0,
										this
									),
									onXOutFinish: ES(
										function() {
											this.$25.adClosed(),
												this.$21.event(b("ANMWebXOutClientEvent").FINISH);
										},
										"bind",
										!0,
										this
									)
								});
								c.render();
								return;
							};
							a.prototype.renderAd = function(a, c, d, e) {
								__p && __p();
								e = a.features || {};
								this.$24 = {
									$40: !!e.clickOpenNewTab,
									$41: !!e.enableWhiteops,
									$42: e.appIDHashed,
									$39: e,
									$34: e.inlineXOut,
									$43: e.isDesktopDisplayFormat,
									$44: !!e.useIntersectionObserver,
									$45: !!e.useCtaFallback,
									$38: a.xout,
									$46: e.clickGuardElements || i,
									$47: j(e.video || {}),
									$48: e.fullwidthMinAspectRatio || 1.5,
									$49: e.autoplayEnabled === !0,
									$50: e.separateVideoViewability === !0
								};
								this.$21.setLogLevel(
									this.$32().$39.logLevel || b("LogLevels").ERROR
								);
								this.$21.setClientEventURL(a.clientEventURL);
								this.$1 = b("getTime")();
								this.$32().$39.rp && this.$25.enableReward();
								var f = 0,
									g = !!a.creativeMarkupBackup;
								!a.nativeAd
									? (this.$9.style.display = "")
									: (a.creativeMarkup &&
											(this.$51() ? this.$52() : this.$53(),
											this.$32().$39.resizeMediaView &&
												((this.$9.style.visibility = "hidden"),
												(f = this.$54()))),
									  this.$55(
											a,
											a.creativeMarkup,
											this.$9,
											c,
											!!this.$32().$39.resizeMediaView
									  ));
								this.$35().classList.add("fbAdLoaded");
								d(a.placementId);
								this.$32().$39.resizeMediaView
									? window.setTimeout(
											ES(
												function() {
													__p && __p();
													var d = new (b("ANFullWidthLoader"))(
															g,
															this.$30(),
															this.$9,
															this.$7,
															this.$13,
															this.$21,
															f
														),
														e = this.$35();
													e.style.width = b("ANUtils").cssSize(this.$13);
													this.$5 && this.$5.ensureSizes();
													e = d.resize(this.$13, e.offsetHeight);
													e &&
														((this.$11 = !0),
														(this.$12 = !!a.nativeCarouselAds));
													this.$37(a.nativeAd);
													if (g) {
														var h = ES(
															function() {
																(a.nativeCarouselAds = null),
																	d.restoreOriginalStyles(),
																	this.$56(
																		a,
																		a.creativeMarkupBackup,
																		c,
																		!!this.$32().$39.resizeMediaView
																	),
																	(this.$11 = !1),
																	(this.$12 = !1),
																	this.$37(a.nativeAd),
																	(this.$9.style.visibility = "visible");
															},
															"bind",
															!0,
															this
														);
														if (!e) h();
														else {
															e = function a() {
																b("ANUtils").screenIsPortrait() ||
																	(window.removeEventListener(
																		"orientationchange",
																		a
																	),
																	h());
															};
															window.addEventListener("orientationchange", e);
														}
													}
												},
												"bind",
												!0,
												this
											),
											0
									  )
									: this.$37(a.nativeAd);
								this.$32().$45 === !0 &&
									(this.$17 = this.$57(a.nativeAd, this.$9, c));
								this.$58();
								this.$21.eventWithParams(this.$59("ADNW_ADLOADED"));
								b("ANUtils").autofitTextWhereNeeded(this.$35());
								this.$60();
							};
							a.prototype.$59 = function(a) {
								var c = this.$16;
								if (!c)
									return {
										event_name: a,
										viewability: b("AdViewability").UNKNOWN
									};
								c = this.$16.getCurrentViewabilityState();
								return {
									event_name: a,
									viewability: c.viewabilityLevels.join(","),
									width_in_view: c.widthInView || 0,
									height_in_view: c.heightInView || 0,
									left: c.pageLeft || 0,
									top: c.pageTop || 0,
									scroll_left: c.scrollLeft || 0,
									scroll_top: c.scrollTop || 0,
									page_width: c.pageWidth || 0,
									page_height: c.pageHeight || 0
								};
							};
							a.prototype.$60 = function() {
								var a = this.$32().$39.forceIframeSize;
								if (a) {
									var c = this.$30();
									c &&
										((c.style.width = b("ANUtils").cssSize(a.w)),
										(c.style.height = b("ANUtils").cssSize(a.h)));
								}
							};
							a.prototype.$54 = function() {
								var a = 300,
									c = b("ANUtils").getScreenWidth(),
									d = this.$30() || this.$9;
								d = b("ANUtils").findWidestParentElement(d);
								var e = b("ANUtils").calculateLargestMargin(d);
								this.$13 = c - e * 2;
								this.$13 < a &&
									((this.$13 = a), (e = d.getBoundingClientRect().right - a));
								return e;
							};
							a.prototype.$52 = function() {
								__p && __p();
								var a = h[this.$8],
									c = a[0];
								a = a[1];
								var d = document.createElement("iframe");
								d.classList.add("fbAdWrapper");
								d.style.border = "0";
								d.style.width = b("ANUtils").cssSize(c);
								d.style.height = b("ANUtils").cssSize(a);
								this.$9.appendChild(d);
								d.contentDocument.open();
								d.contentDocument.close();
								c = b("nullthrows")(d.contentDocument.body);
								c.style.overflow = "hidden";
								c.style.margin = "0";
								c.style.padding = "0";
								c.style.maxWidth = b("ANUtils").getScreenWidth() + "px";
								this.$6 = c;
								this.$7 = d;
							};
							a.prototype.$53 = function() {
								__p && __p();
								var a = document.createElement("div");
								a.style.textAlign = "center";
								a.style.position = "relative";
								this.$9.appendChild(a);
								this.$7 = a;
								var c = document.createElement("div");
								c.style.maxWidth = b("ANUtils").cssSize(
									b("ANUtils").getScreenWidth()
								);
								c.style.width = "100%";
								c.style.position = "relative";
								c.style.display = "inline-block";
								a.appendChild(c);
								this.$6 = c;
							};
							a.prototype.$35 = function() {
								var a = this.$51() ? this.$6 || this.$9 : this.$9;
								return (
									a.getElementsByClassName("fbANRoot")[0] ||
									a.getElementsByClassName("thirdPartyRoot")[0] ||
									a
								);
							};
							a.prototype.$61 = function(a) {
								return a && a.video ? j(a.video) : this.$32().$47;
							};
							a.prototype.$55 = function(a, b, c, d, e) {
								(a.nativeAd.loaded = !1),
									b && b.raw && ((this.$6.innerHTML = b.raw), (c = this.$6)),
									c && ((c = this.$35()), this.$31(c)),
									this.$32().$45 !== !0 &&
										(this.$17 = this.$57(a.nativeAd, c, d)),
									(this.$15 = this.$62(
										c,
										a.requestId,
										a.nativeAd,
										a.nativeCarouselAds,
										e,
										b && b.dfp,
										this.$61(b)
									)),
									a.nativeAd.primaryColor &&
										c &&
										(c.style.setProperty(
											"--fb-ad-primary-color",
											a.nativeAd.primaryColor
										),
										c.style.setProperty(
											"--fb-ad-text-color",
											a.nativeAd.textColor
										));
							};
							a.prototype.$63 = function(a, c) {
								a = this.$64(a);
								b("ANUtils").resizeElement(
									c,
									this.$13,
									Math.round(this.$13 / a)
								);
							};
							a.prototype.$65 = function() {
								this.$21.eventWithParams(
									this.$59("ADNW_MOSTLY_VIEWABLE_FOR_1S")
								);
							};
							a.prototype.$66 = function() {
								if (this.$2) {
									this.$21.error("Multiple ADIMPRESSION attempted.");
									return;
								}
								this.$2 = b("getTime")();
								var a = this.$67();
								this.sendToFacebook({
									name: "impress",
									params: {
										key: b("ANUtils").onlyString(this.$4.data.key),
										payload: a
									}
								});
								this.$21.eventWithParams(this.$59("ADNW_ADIMPRESSION"));
								this.$33() &&
									this.$21.event(b("ANMWebXOutClientEvent").HAS_INLINE_XOUT);
							};
							a.prototype.$68 = function() {
								var a = this.$10.getSafeFrameAPI();
								if (this.$10.isCrossDomain() && !a)
									return b("AMPContextLoader").isAMP()
										? "AMP"
										: "CROSS_DOMAIN_IFRAME";
								var c = this.$10.getNestLevel();
								if (c === 0) return "NO_IFRAME";
								return c > 1
									? a
										? "NESTED_SAFE_FRAME"
										: "NESTED_FRIENDLY_IFRAME"
									: a
										? "SAFE_FRAME"
										: "FRIENDLY_IFRAME";
							};
							a.prototype.$57 = function(a, b, c) {
								__p && __p();
								if (this.$32().$45 !== !0) return a && b ? b : c;
								a = a && b;
								if (a) {
									b = a.getBoundingClientRect();
									b = b.width * b.height;
									if (b > 0) return a;
									else {
										b = a.querySelector(".fbAdLink");
										return b || a;
									}
								}
								return c;
							};
							a.prototype.$58 = function() {
								__p && __p();
								this.$16 = new (b("AdQualityViewabilityMonitor"))(
									this.$17,
									this.$32().$44
								);
								this.$16.attachBehaviorManager(this.$18);
								var a = new (b("AdImpressionBehavior.anweb"))(
									ES(
										function() {
											return this.$69();
										},
										"bind",
										!0,
										this
									),
									ES(
										function() {
											return this.$21.event("ADNW_PARTIAL_ADIMPRESSION");
										},
										"bind",
										!0,
										this
									)
								);
								this.$19 || a.mediaLoaded();
								this.$18.addBehavior(a);
								this.$20.addListener(function() {
									return a.mediaLoaded();
								});
								if (this.$32().$39.useMostlyViewableImp) {
									var c = new (b("AdMostlyViewableImpressionBehavior.anweb"))(
										ES(
											function() {
												return this.$65();
											},
											"bind",
											!0,
											this
										)
									);
									this.$19 || c.mediaLoaded();
									this.$18.addBehavior(c);
									this.$20.addListener(function() {
										return c.mediaLoaded();
									});
								}
							};
							a.prototype.$64 = function(a) {
								if (a.adImageAspectRatio != null && a.adImageAspectRatio > 0)
									return Math.max(a.adImageAspectRatio, this.$32().$48);
								else if (a.adVideo) return 1.75;
								else return 1.9;
							};
							a.prototype.$71 = function(a, b, c, d, e) {
								d
									? this.$72(b, d)
									: c.adVideo
										? this.$73(b, c, e)
										: this.$74(b, c);
							};
							a.prototype.$72 = function(a, c) {
								__p && __p();
								this.$19 = !0;
								var d = new (b("ANCarousel"))({
									parent: a,
									ads: c,
									onCriticalAnimationStart: ES(
										function() {
											this.$16.pause();
										},
										"bind",
										!0,
										this
									),
									onCriticalAnimationEnd: ES(
										function() {
											this.$16.resume();
										},
										"bind",
										!0,
										this
									),
									onEvent: ES(
										function(a, b) {
											switch (a) {
												case "AN_CAROUSEL_EVENT_SWIPE":
													this.$21.eventWithParams({
														event_name: "CAROUSEL_SWIPE",
														index: b.index,
														direction: b.direction
													});
											}
										},
										"bind",
										!0,
										this
									),
									onLoadEventCounter: this.$20,
									adFeatures: this.$32().$39
								});
								a.appendChild(d.getElement());
								d.ensureSizes();
								ES(
									d.getLinks(),
									"forEach",
									!0,
									ES(
										function(a, b) {
											this.$75(a, c[b]);
										},
										"bind",
										!0,
										this
									)
								);
								this.$5 = d;
							};
							a.prototype.$74 = function(a, b) {
								a.appendChild(this.$76(b));
							};
							a.prototype.$73 = function(a, c, d) {
								__p && __p();
								if (!c.adVideo) throw new Error("No video for Ad.");
								var e = this.$32().$49;
								this.$21.event(
									e ? "VIDEO_AUTOPLAY_ENABLED" : "VIDEO_AUTOPLAY_DISABLED"
								);
								this.$19 = !0;
								this.$20.addRequiredEvent();
								d = new (b("ANWebVideoPlayer.anweb"))(
									b("nullthrows")(c.adVideo),
									c.adImage,
									e,
									d,
									ES(
										function() {
											this.$20.requiredEventFired();
										},
										"bind",
										!0,
										this
									),
									this.$77
								);
								var f = this.$36() && this.$25.isRewardEnabled();
								if (f) {
									var g = b("nullthrows")(this.$6);
									this.$27 = new (b("ANRewardedVideoPlayer"))(
										this.$25,
										g,
										d,
										this.$32().$34
									);
									this.$27.makeRewarded();
									g.style.maxWidth = "";
									this.$7 &&
										((this.$7.style.maxWidth = "100vw"),
										(this.$7.style.maxHeight = "100vh"));
								}
								new (b("ANWebVideoLogger.anweb"))(
									d.getVideoElement(),
									this.$70,
									c.videoPlayLink,
									c.videoTimeLink
								).startLogging();
								a.appendChild(d.getElement());
								this.$26 = d;
								this.$25.setVideo(d);
								if (!f) {
									g = this.$18;
									if (this.$32().$50) {
										c = d.getVideoElement();
										a = new (b("AdQualityViewabilityMonitor"))(
											c,
											this.$32().$44
										);
										g = new (b("OnScreenBehaviorManager.anweb"))();
										a.attachBehaviorManager(g);
									}
									g.addBehavior(
										new (b("PlayVideoWhenOnScreenBehavior.anweb"))(
											d,
											e,
											this.$21
										)
									);
								}
							};
							a.prototype.$75 = function(a, c) {
								__p && __p();
								var d = ES(
										function(a, d) {
											__p && __p();
											var e = b("getTime")(),
												f = c.href,
												g = b("ANUtils").maybeHTMLElement(d.target);
											g = g ? this.$78(g) : b("ANMWebAdElement").UNKNOWN;
											var h = {};
											if (this.$16) {
												var i = this.$16.getDimensions(),
													j = this.$16.getCurrentViewabilityState();
												i != null &&
													((h.height = i.height),
													(h.width = i.width),
													j.widthInView != null &&
														j.heightInView != null &&
														((h.visibleWidth = Math.round(
															j.widthInView * i.width
														)),
														(h.visibleHeight = Math.round(
															j.heightInView * i.height
														))));
												if (this.$10.getSafeFrameAPI())
													(h.relClickX = d.clientX), (h.relClickY = d.clientY);
												else {
													h.clickX = d.clientX;
													h.clickY = d.clientY;
													if (j.viewportLeft != null && j.viewportTop != null)
														(h.relClickX = d.clientX - j.viewportLeft),
															(h.relClickY = d.clientY - j.viewportTop);
													else {
														i = this.$35().getBoundingClientRect();
														h.relClickX = d.clientX - i.left;
														h.relClickY = d.clientY - i.top;
													}
												}
											}
											j = {
												clktm: Math.round(e / 1e3),
												clknutab: this.$32().$40,
												touch: ES("JSON", "stringify", !1, h)
											};
											this.$2 && (j.clkdel = e - this.$2);
											h.height &&
												h.width &&
												h.visibleWidth &&
												h.visibleHeight &&
												(j.vp =
													(h.visibleWidth * h.visibleHeight) /
													(h.height * h.width));
											d = b("ANUtils").isAppStoreURL(f);
											i =
												!d &&
												a === b("ANUnifiedLoggingClickEvent").BILLABLE_CLICK &&
												this.$32().$39.useShim;
											this.sendToFacebook({
												name: "click",
												params: {
													key: b("ANUtils").onlyString(this.$4.data.key),
													href: f,
													clickParams: j,
													adElementType: g,
													action: a,
													videoDuration:
														this.$26 == null ? 0 : this.$26.getDuration(),
													videoPlaybackTime:
														this.$26 == null ? 0 : this.$26.getCurrentTime(),
													pos: {
														element: g,
														width: h.width,
														height: h.height,
														visibleWidth: h.visibleWidth,
														visibleHeight: h.visibleHeight,
														clickX: h.clickX,
														clickY: h.clickY,
														relClickX: h.relClickX,
														relClickY: h.relClickX
													},
													onlyClickClientEvent: i
												}
											});
											if (i) {
												e = b("QueryString").appendToUrl(f, {
													ts: j.clktm,
													dl: j.clkdel,
													w: h.width,
													h: h.height,
													vw: h.visibleWidth,
													vh: h.visibleHeight,
													cx: h.clickX,
													cy: h.clickY,
													rcx: h.relClickX,
													rcy: h.relClickY
												});
												this.$22.openNewTab(e);
											} else
												this.$32().$40 &&
													f &&
													!d &&
													a ===
														b("ANUnifiedLoggingClickEvent").BILLABLE_CLICK &&
													this.$22.openNewTab(f);
											if (this.$32().$39.useShim || this.$32().$40 || d) {
												g = new (b("ANBounceBackManager"))(window.document);
												var k = b("getTime")();
												g.onBounceBack(
													ES(
														function(a) {
															this.sendToFacebook({
																name: "bounce",
																params: {
																	key: b("ANUtils").onlyString(
																		this.$4.data.key
																	),
																	leaveTime: k,
																	backTime: b("getTime")()
																}
															}),
																this.$21.event("ADNW_BOUNCEBACK", "" + a);
														},
														"bind",
														!0,
														this
													)
												);
											}
										},
										"bind",
										!0,
										this
									),
									e = ES(
										function() {
											b("ANWebTwoStepClickDialog")
												.openDialog(this.$35(), c.adSubtitle, c.adIcon)
												.onConfirm(
													ES(
														function(a) {
															(this.$23 = !0),
																d(
																	b("ANUnifiedLoggingClickEvent")
																		.BILLABLE_CLICK,
																	a
																);
														},
														"bind",
														!0,
														this
													)
												)
												.onDismiss(
													ES(
														function(a) {
															(this.$23 = !1),
																d(
																	b("ANUnifiedLoggingClickEvent")
																		.TWO_STEP_CANCEL,
																	a
																);
														},
														"bind",
														!0,
														this
													)
												);
										},
										"bind",
										!0,
										this
									),
									f = ES(
										function(a) {
											var c = b("getTime")(),
												f = b("ANUtils").maybeHTMLElement(a.target);
											f = f ? this.$78(f) : b("ANMWebAdElement").UNKNOWN;
											var g = this.$32().$39.minClickDelay;
											g && this.$1 && this.$1 + g > c && !this.$3
												? ((this.$3 = !0),
												  d(b("ANUnifiedLoggingClickEvent").CLICK_GUARD, a),
												  this.$11 &&
														this.$32().$39.useTwoStepOnFastClicks === !0 &&
														e())
												: ES(this.$32().$46, "includes", !0, f) &&
												  this.$11 &&
												  !this.$12 &&
												  this.$32().$39.useTwoStepClick === !0 &&
												  !this.$23
													? (d(
															b("ANUnifiedLoggingClickEvent").TWO_STEP_DIALOG,
															a
													  ),
													  e())
													: d(
															b("ANUnifiedLoggingClickEvent").BILLABLE_CLICK,
															a
													  );
											a.preventDefault();
											a.stopPropagation();
										},
										"bind",
										!0,
										this
									);
								if (!this.$6) {
									a.addEventListener("click", f);
									return;
								}
								var g = this.$6.querySelector(".adnwTwoClickBlocker");
								if (g && !!this.$32().$39.clickConfirmation) {
									var h = b("nullthrows")(g.querySelector(".adnwCancelLink"));
									h.addEventListener("click", function(a) {
										g.style.display = "none";
									});
									h = b("nullthrows")(g.querySelector(".adnwContinueLink"));
									h.addEventListener("click", function(a) {
										(g.style.display = "none"), f(a);
									});
									a.addEventListener("click", function(a) {
										g.style.display = "block";
									});
								} else a.addEventListener("click", f);
							};
							a.prototype.applyAdTypeClass = function(a, b, c) {
								c
									? (a.className += " fbCarouselType")
									: b.adVideo
										? (a.className += " fbVideoType")
										: (a.className += " fbDisplayType");
							};
							a.prototype.$56 = function(a, c, d, e) {
								__p && __p();
								this.$16.pause();
								a.nativeAd.loaded = !1;
								this.$6.innerHTML = c.raw;
								if (this.$6 == null) return;
								this.$31(this.$35());
								if (this.$6 == null) return;
								this.$79(
									this.$6,
									a.nativeAd,
									a.nativeCarouselAds,
									e,
									c && c.dfp,
									this.$61(c)
								);
								this.$6 &&
									((this.$16 = new (b("AdQualityViewabilityMonitor"))(this.$6)),
									this.$16.attachBehaviorManager(this.$18));
							};
							a.prototype.$79 = function(a, c, d, e, f, g) {
								c.loaded = !0;
								this.$14 = a.getElementsByClassName(
									b("ANMWebAdElement").FB_AD_MEDIA
								);
								for (e = 0; e < this.$14.length; e++)
									this.$71(a, this.$14[e], c, d, g);
								this.$80(a, c, "", f);
								d = a.getElementsByClassName(b("ANMWebAdElement").FB_AD_ICON);
								for (e = 0; e < d.length; e++) d[e].appendChild(this.$81(c));
							};
							a.prototype.$82 = function(a) {
								a = b("nullthrows")(a.ownerDocument.body);
								a.addEventListener("touchstart", function() {}, !1);
							};
							a.prototype.$62 = function(a, c, d, e, f, g, h) {
								if (!a || !d || d.loaded) return !1;
								this.applyAdTypeClass(a, d, e);
								this.$82(a);
								d.loaded = !0;
								var i = !1;
								e = this.$83(a, d, e, "", f, g, h);
								this.$32().$41 === !0 &&
									b("Whiteops").run(
										c,
										"AN_MWEB",
										d.topDomain,
										this.$32().$42,
										a
									);
								return i || e;
							};
							a.prototype.$83 = function(a, c, d, e, f, g, h) {
								var i,
									j = !1;
								this.$14 = a.getElementsByClassName(
									b("ANMWebAdElement").FB_AD_MEDIA + e
								);
								for (i = 0; i < this.$14.length; i++)
									(j = !0),
										f && !d && this.$63(c, this.$14[i]),
										this.$71(a, this.$14[i], c, d, h);
								this.$80(a, c, e, g);
								d = a.getElementsByClassName(
									b("ANMWebAdElement").FB_AD_ICON + e
								);
								for (i = 0; i < d.length; i++) d[i].appendChild(this.$81(c));
								return j;
							};
							a.prototype.$80 = function(a, c, d, e) {
								__p && __p();
								var f;
								e = a.getElementsByClassName(
									b("ANMWebAdElement").FB_AD_TITLE + d
								);
								for (f = 0; f < e.length; f++) e[f].textContent = c.adTitle;
								e = a.getElementsByClassName(
									b("ANMWebAdElement").FB_AD_SUBTITLE + d
								);
								for (f = 0; f < e.length; f++) e[f].textContent = c.adSubtitle;
								e = a.getElementsByClassName(
									b("ANMWebAdElement").FB_AD_BODY + d
								);
								for (f = 0; f < e.length; f++) e[f].textContent = c.adBody;
								e = a.getElementsByClassName(
									b("ANMWebAdElement").FB_AD_CALL_TO_ACTION + d
								);
								for (f = 0; f < e.length; f++)
									e[f].textContent = c.adCallToAction;
								e = a.getElementsByClassName("fbAdSocialContext" + d);
								for (f = 0; f < e.length; f++)
									e[f].textContent = c.adSocialContext;
								e = a.getElementsByClassName("fbAdLink" + d);
								for (f = 0; f < e.length; f++) this.$75(e[f], c);
							};
							a.prototype.$81 = function(a) {
								var b = document.createElement("img");
								b.style.height = "100%";
								b.style.width = "100%";
								this.$19 = !0;
								this.$20.addRequiredEvent();
								b.addEventListener(
									"load",
									ES(
										function() {
											this.$20.requiredEventFired();
										},
										"bind",
										!0,
										this
									)
								);
								b.src = a.adIcon;
								return b;
							};
							a.prototype.$76 = function(a) {
								__p && __p();
								var b = document.createElement("img");
								b.style.height = "100%";
								b.style.width = "100%";
								this.$19 = !0;
								this.$20.addRequiredEvent();
								b.addEventListener(
									"load",
									ES(
										function() {
											this.$20.requiredEventFired(),
												b.naturalWidth === 1 &&
													b.naturalHeight === 1 &&
													this.$21.eventWithParams({
														event_name: "ADNW_ADERROR",
														error_message: "Image loading error (1x1)",
														error_stack_trace: b.src
													});
										},
										"bind",
										!0,
										this
									)
								);
								b.addEventListener(
									"error",
									ES(
										function() {
											this.$21.eventWithParams({
												event_name: "ADNW_ADERROR",
												error_message: "Image loading error (uncaught)",
												error_stack_trace: b.src
											});
										},
										"bind",
										!0,
										this
									)
								);
								b.src = a.adImage;
								return b;
							};
							a.prototype.$84 = function() {
								return this.$8 === "native";
							};
							a.prototype.$36 = function() {
								return this.$8 === "rewarded_video";
							};
							a.prototype.$51 = function() {
								return !this.$30() && !this.$84() && h[this.$8];
							};
							a.prototype.$69 = function() {
								this.$35().classList.add("fbVisibleOnce"), this.$66();
							};
							a.prototype.$67 = function() {
								var a = this.$16.getDimensions(),
									c =
										(this.$16 && this.$16.getCurrentViewabilityState()) || null;
								return {
									width: a ? a.width : null,
									height: a ? a.height : null,
									width_in_view: (c && c.widthInView) || null,
									height_in_view: (c && c.heightInView) || null,
									top: (c && c.pageTop) || null,
									left: (c && c.pageLeft) || null,
									scroll_top: (c && c.scrollTop) || null,
									scroll_left: (c && c.scrollLeft) || null,
									page_width: (c && c.pageWidth) || null,
									page_height: (c && c.pageHeight) || null,
									hosturl: this.$10.getTopURL(),
									iframe_status: this.$68(),
									nest_level: this.$10.getNestLevel(),
									iframe_urls: this.$10.ancestorURLs.slice(0, -1),
									mediation_service: new (b("MediationDetector"))(
										this.$10
									).getMediator(),
									nmv: this.$15
								};
							};
							a.prototype.$78 = function(a) {
								__p && __p();
								var c;
								c = ((c = {
									fbAdCallToAction: "fbAdCallToAction",
									fbAdTitle: "fbAdTitle",
									fbAdBody: "fbAdBody",
									fbAdSubtitle: "fbAdSubtitle",
									fbAdIcon: "fbAdIcon",
									fbAdMediaCenter: "fbAdMediaCenter",
									fbAdMedia: "fbAdMedia"
								}),
								(c._74vg = "fbTwoStepDialog"),
								c);
								var d = this.$35();
								for (var e in c) {
									var f = d.getElementsByClassName(e);
									for (
										var f = f,
											g = ES("Array", "isArray", !1, f),
											h = 0,
											f = g
												? f
												: f[
														typeof Symbol === "function"
															? Symbol.iterator
															: "@@iterator"
												  ]();
										;

									) {
										var i;
										if (g) {
											if (h >= f.length) break;
											i = f[h++];
										} else {
											h = f.next();
											if (h.done) break;
											i = h.value;
										}
										i = i;
										if (a === i || ES(i, "contains", !0, a)) return c[e];
									}
								}
								return b("ANMWebAdElement").UNKNOWN;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANRecirculationUnit",
						[
							"AdImpressionBehavior.anweb",
							"AdQualityViewabilityMonitor",
							"ANLinkOpener",
							"ANUtils",
							"OnScreenBehaviorManager.anweb"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function g(a, c, d, e, f, g, h) {
								(this.$1 = a),
									(this.$2 = c),
									(this.$3 = d),
									(this.$4 = e),
									(this.$5 = g),
									(this.$6 = h),
									(this.$7 = f),
									(this.$8 = []),
									(this.$9 = new (b("ANLinkOpener"))(d));
							}
							g.render = function(a, b, c, d, e, f, h) {
								a = new g(a, b, c, d, e, f, h);
								a.$10();
								return a;
							};
							g.prototype.$11 = function(a, c) {
								var d = c.querySelector(".fbArticleImage"),
									e = new (b("OnScreenBehaviorManager.anweb"))();
								c = new (b("AdQualityViewabilityMonitor"))(c);
								c.attachBehaviorManager(e);
								var f = new (b("AdImpressionBehavior.anweb"))(
									ES(
										function() {
											this.$5(a);
										},
										"bind",
										!0,
										this
									),
									function() {}
								);
								d &&
									(d.complete && f.mediaLoaded(),
									d.addEventListener("load", function() {
										f.mediaLoaded();
									}));
								e.addBehavior(f);
							};
							g.prototype.$12 = function(a, b, c) {
								this.$11(a, c),
									c.addEventListener(
										"click",
										ES(
											function() {
												this.$6(a), this.$9.open(b.link);
											},
											"bind",
											!0,
											this
										)
									);
							};
							g.prototype.$13 = function(a, c) {
								c.innerHTML = this.$4;
								var d = c.querySelector(".fbArticleImage"),
									e = c.querySelector(".fbArticleTitle"),
									f = c.querySelector(".fbArticleSubtitle"),
									g = c.querySelector(".fbArticleSource");
								d && (d.src = a.image);
								e && (e.textContent = a.title);
								f && (f.textContent = a.summary);
								g && (g.textContent = a.source);
								b("ANUtils").autofitTextWhereNeeded(c);
							};
							g.prototype.$10 = function() {
								__p && __p();
								var a = this.$3.querySelectorAll(".fbSlot"),
									b = 0,
									c = 0;
								for (var d = 0; d < a.length; d++) {
									var e = a[d];
									if (ES(e.classList, "contains", !0, "fbSlotAd")) {
										var f = this.$2[b++];
										this.$8.push(f);
										this.$7(f, e);
									} else if (ES(e.classList, "contains", !0, "fbSlotArticle")) {
										f = this.$1[c++];
										this.$8.push(f);
										this.$13(f, e);
										this.$12(d, f, e);
									}
								}
							};
							e.exports = g;
						},
						null
					);
					__d(
						"ANCoreProxy",
						[
							"ANAdManager",
							"ANLogger",
							"ANRecirculationUnit",
							"ANUtils",
							"LogLevels"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function a(a) {
								(this.$1 = !1),
									(this.$2 = a),
									(this.$3 = new (b("ANLogger"))(
										b("LogLevels").ERROR,
										a.tagJsInitTime,
										b("ANUtils").getNavigationStart(),
										ES(
											function(a, c) {
												b("ANUtils").sendToFacebook(this.$2, {
													name: "client_event",
													params: {
														key: this.$4(),
														clientEventUrl: a,
														payload: c
													}
												});
											},
											"bind",
											!0,
											this
										)
									)),
									window.addEventListener(
										"pagehide",
										ES(
											function() {
												this.$1 || this.$3.event("ADNW_UNLOAD_BEFORE_ADLOADED");
											},
											"bind",
											!0,
											this
										)
									);
							}
							a.prototype.$4 = function() {
								return b("ANUtils").onlyString(
									this.$2.data.key ||
										(this.$2.data.keys && this.$2.data.keys[0])
								);
							};
							a.prototype.sendToFacebook = function(a) {
								b("ANUtils").sendToFacebook(this.$2, a);
							};
							a.prototype.renderAd = function(a, c, d, e, f) {
								var g = ES("Object", "assign", !1, {}, this.$2, { data: a });
								g = new (b("ANAdManager"))(g, c);
								g.renderAd(a, d, e, f);
							};
							a.prototype.$5 = function(a) {
								__p && __p();
								var b = [];
								if (a.nativeAd) b = [a];
								else if (a.nativeAds)
									for (var c = 0; c < a.nativeAds.length; c++) {
										var d = ES("Object", "assign", !1, {}, a, {
											key: a.keys[c],
											nativeAd: a.nativeAds[c]
										});
										delete d.keys;
										delete d.nativeAds;
										b.push(d);
									}
								return b;
							};
							a.prototype.$6 = function() {
								return b("ANUtils").onlyString(this.$2.data.requestId);
							};
							a.prototype.$7 = function(a, c, d, e) {
								__p && __p();
								var f = this.$5(a),
									g = !!a.recommendedContent,
									h = f.length > 1,
									i = this.$2.rootElement;
								a.wrapperMarkup && (i.innerHTML = a.wrapperMarkup);
								if (g)
									b("ANRecirculationUnit").render(
										a.recommendedContent,
										f,
										i,
										a.wrapperItemMarkup,
										ES(
											function(a, b) {
												this.renderAd(a, b, c, d, e);
											},
											"bind",
											!0,
											this
										),
										ES(
											function(a) {
												b("ANUtils").sendToFacebook(this.$2, {
													name: "recirc",
													params: {
														reqId: this.$6(),
														payload: { type: "impression", index: a }
													}
												});
											},
											"bind",
											!0,
											this
										),
										ES(
											function(c) {
												var d = a.features || {};
												if (d.skipRecircClickEvent === !0) return;
												b("ANUtils").sendToFacebook(this.$2, {
													name: "recirc",
													params: {
														reqId: this.$6(),
														payload: { type: "click", index: c }
													}
												});
											},
											"bind",
											!0,
											this
										)
									);
								else
									for (var g = 0; g < f.length; g++) {
										var j = f[g],
											k = i;
										h &&
											((k = document.createElement("div")),
											(k.className = "fbAdSlot-" + g),
											i.appendChild(k));
										this.renderAd(j, k, c, d, e);
									}
							};
							a.prototype.adLoaded = function(a, c, d, e) {
								__p && __p();
								if (this.$1) {
									this.$3.error("Multiple ADLOADED attempted.");
									return;
								}
								var f = a.features || {};
								this.$3.setLogLevel(f.logLevel || b("LogLevels").ERROR);
								this.$3.setClientEventURL(a.clientEventURL);
								if (!a.success) {
									this.$3.error();
									e(a.errorCode, a.errorMsg, a.placementId);
									return;
								}
								this.$7(a, c, d, e);
								this.$1 = !0;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"legacy:fb.fbadnw55",
						["ANCoreProxy", "ANUtils", "getTime", "nullthrows"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = window;
							function h(a, b) {
								__p && __p();
								var c = function(a) {
										g.setTimeout(function() {
											return b(a);
										}, 0);
									},
									d = a.push;
								a.push = function(b) {
									c(b), d.call(a, b);
								};
								for (
									var e = a,
										f = ES("Array", "isArray", !1, e),
										h = 0,
										e = f
											? e
											: e[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
											  ]();
									;

								) {
									var i;
									if (f) {
										if (h >= e.length) break;
										i = e[h++];
									} else {
										h = e.next();
										if (h.done) break;
										i = h.value;
									}
									i = i;
									c(i);
								}
							}
							var i = function(a, c) {
								__p && __p();
								if (a.rootElement.dataset.parsed) return;
								a.rootElement.dataset.parsed = "true";
								a.domain = b("ANUtils").extractOrigin(a.iframe.src);
								a.data = {};
								a.core = new (b("ANCoreProxy"))(a);
								var d = function(c) {
										__p && __p();
										if (a.isAdLoaded) return;
										a.isAdLoaded = !0;
										var d = b("nullthrows")(c.iframeData),
											e = c.data.features || {},
											f = c.data.clientEventURL || "";
										if (d.result === "valid") {
											a.data.result = d.result;
											d = !!e.useClickUrlFromAdResponse;
											var g = [],
												h = [];
											if (a.data.keys) {
												g = a.data.keys;
												var i = c.data.nativeAds;
												i &&
													(h = ES(i, "map", !0, function(a) {
														return a.href;
													}));
											} else {
												i = c.data.nativeAd;
												h.push(i && i.href);
												g.push(a.data.key);
											}
											for (var i = 0; i < g.length; i++)
												a.core.sendToFacebook({
													name: "init",
													params: {
														key: b("ANUtils").onlyString(g[i]),
														features: e,
														clientEventUrl: b("ANUtils").onlyString(f),
														clickUrl: d ? b("ANUtils").onlyString(h[i]) : null
													}
												});
										} else
											c.data = {
												errorCode: "1007",
												errorMsg: "Incorrect Domain",
												placementId: c.placementId
											};
										a.core.adLoaded(
											c.data,
											a.iframe,
											function() {
												a.onAdLoaded(a.rootElement);
											},
											ES(a.onAdError, "bind", !0, a)
										);
									},
									e = function(c, e) {
										__p && __p();
										if (e.source !== c.iframe.contentWindow) return;
										c = b("nullthrows")(c.iframeData);
										switch (e.name) {
											case "iframeLoaded":
												c.result ||
													((c.result = e.data.result),
													(c.pluginPerf = e.data.pluginPerf));
												a.xhrLoaded && d(a);
												break;
											case "xhrLoaded":
												a.xhrLoaded = !0;
												e = e.data;
												for (var f in e) a.data[f] = e[f];
												(a.data.code || c.result) && d(a);
												break;
										}
									};
								a.core.sdkJSComplete = b("getTime")();
								h(a.events, function(b) {
									return e(a, b);
								});
							};
							a = function() {
								var a = b("ANUtils").getV55TagStateContainer();
								a.sdkInitialized ||
									((a.sdkInitialized = !0),
									h(a.ads, function(b) {
										return i(b, a);
									}));
							};
							a();
						},
						3
					);
				}
			}.call(global));
		})(window.inDapIF ? parent.window : window, window);
} catch (e) {
	new Image().src =
		"https://www.facebook.com/" +
		"common/scribe_endpoint.php?c=jssdk_error&m=" +
		encodeURIComponent(
			'{"error":"LOAD", "extra": {"name":"' +
				e.name +
				'","line":"' +
				(e.lineNumber || e.line) +
				'","script":"' +
				(e.fileName || e.sourceURL || e.script) +
				'","stack":"' +
				(e.stackTrace || e.stack) +
				'","revision":"4805889","namespace":"FB","message":"' +
				e.message +
				'"}}'
		);
}
