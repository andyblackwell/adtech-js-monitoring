/*1553767855,,JIT Construction: v4901049,en_US*/

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
										"use strict";
										function a(a, b) {
											(this.$1 = a), (this.$2 = b), (this.$3 = 0);
										}
										var b = a.prototype;
										b.next = function() {
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
										b[
											typeof Symbol === "function"
												? Symbol.iterator
												: "@@iterator"
										] = function() {
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
										"use strict";
										function a(a) {
											(this.$1 = a), (this.$2 = 0);
										}
										var b = a.prototype;
										b.next = function() {
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
										b[
											typeof Symbol === "function"
												? Symbol.iterator
												: "@@iterator"
										] = function() {
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
						var i = (function() {
								"use strict";
								function a(a, b) {
									(this.$1 = a),
										(this.$2 = b),
										(this.$3 = ES("Object", "keys", !1, a)),
										(this.$4 = 0);
								}
								var b = a.prototype;
								b.next = function() {
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
								b[
									typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
								] = function() {
									return this;
								};
								return a;
							})(),
							j = {
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
									m = "IE_HASH_",
									a = (function() {
										"use strict";
										function a(a) {
											if (!r(this))
												throw new TypeError("Wrong map object type.");
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
										var c = a.prototype;
										c.clear = function() {
											q(this);
										};
										c.has = function(a) {
											a = o(this, a);
											return !!(a != null && this._mapData[a]);
										};
										c.set = function(a, b) {
											var c = o(this, a);
											c != null && this._mapData[c]
												? (this._mapData[c][1] = b)
												: ((c = this._mapData.push([a, b]) - 1),
												  p(this, a, c),
												  (this.size += 1));
											return this;
										};
										c.get = function(a) {
											a = o(this, a);
											if (a == null) return void 0;
											else return this._mapData[a][1];
										};
										c["delete"] = function(a) {
											var b = o(this, a);
											if (b != null && this._mapData[b]) {
												p(this, a, void 0);
												this._mapData[b] = void 0;
												this.size -= 1;
												return !0;
											} else return !1;
										};
										c.entries = function() {
											return new n(this, j);
										};
										c.keys = function() {
											return new n(this, b);
										};
										c.values = function() {
											return new n(this, i);
										};
										c.forEach = function(a, b) {
											if (typeof a !== "function")
												throw new TypeError("Callback must be callable.");
											a = ES(a, "bind", !0, b || void 0);
											b = this._mapData;
											for (var c = 0; c < b.length; c++) {
												var d = b[c];
												d != null && a(d[1], d[0], this);
											}
										};
										c[
											typeof Symbol === "function"
												? Symbol.iterator
												: "@@iterator"
										] = function() {
											return this.entries();
										};
										return a;
									})(),
									n = (function() {
										"use strict";
										function c(a, c) {
											if (!(r(a) && a._mapData))
												throw new TypeError("Object is not a map.");
											if (ES([b, j, i], "indexOf", !0, c) === -1)
												throw new Error("Invalid iteration kind.");
											this._map = a;
											this._nextIndex = 0;
											this._kind = c;
										}
										var d = c.prototype;
										d.next = function() {
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
										d[
											typeof Symbol === "function"
												? Symbol.iterator
												: "@@iterator"
										] = function() {
											return this;
										};
										return c;
									})();
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
							var a = (function() {
								"use strict";
								function a(a) {
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
								var c = a.prototype;
								c.add = function(a) {
									this._map.set(a, a);
									this.size = this._map.size;
									return this;
								};
								c.clear = function() {
									b(this);
								};
								c["delete"] = function(a) {
									a = this._map["delete"](a);
									this.size = this._map.size;
									return a;
								};
								c.entries = function() {
									return this._map.entries();
								};
								c.forEach = function(a) {
									var b = arguments[1],
										c = this._map.keys(),
										d;
									while (!(d = c.next()).done)
										a.call(b, d.value, d.value, this);
								};
								c.has = function(a) {
									return this._map.has(a);
								};
								c.values = function() {
									return this._map.values();
								};
								c.keys = function() {
									return this.values();
								};
								c[
									typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
								] = function() {
									return this.values();
								};
								return a;
							})();
							function b(a) {
								(a._map = new h()), (a.size = a._map.size);
							}
							return __annotator(a, { name: "Set" });
						})();
						a.Map = h;
						a.Set = b;
					})(typeof global === "undefined" ? this : global);
					__d("ViewabilitySettings", [], {
						fl_test: true,
						raf_safari_fix: true
					});
					__d("JSSDKCssConfig", [], {
						rules:
							"._2vfx{font-size:100px;overflow:hidden}._2vfy{overflow:hidden}._2vf-{overflow:hidden;transition:transform .3s cubic-bezier(.14, 1, 1, 1);will-change:transform}._11u9{float:left;overflow:hidden;position:relative;text-decoration:none}._11u-{background:linear-gradient(rgba(0,0,0,0) 0\u0025, rgba(0,0,0,.2) 100\u0025);bottom:0;left:0;position:absolute;right:0;top:60\u0025}._11u- ._11u_{bottom:8px;color:#fff;left:0;margin-top:0;padding-left:8px;padding-right:8px;position:absolute;right:0;text-shadow:0 1px 3px black}._11u_{color:#606770;font-size:12\u0025;font-weight:normal;margin-top:4.023\u0025}._41-w ._11u_{font-size:13px}._41-w ._11vj{height:18px;line-height:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._11v0,._11vj{line-height:1.4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._11v0{font-weight:500}._11vj{font-weight:normal}._11us{background-position:center center;background-repeat:no-repeat;background-size:cover;border-radius:10px;width:100\u0025}._11ur{border-radius:10px;overflow:hidden;position:relative}._11vk{border:1px solid #3578e5;border-radius:4px;color:#3578e5;font-size:12\u0025;font-weight:normal;line-height:1;margin-bottom:4.023\u0025;margin-top:4.023\u0025;padding-bottom:3.448\u0025;padding-top:3.448\u0025;text-align:center}._11vk._7m01{background-color:#1479fb;color:#fff}\n._1xj7{background-color:#000;height:100\u0025;overflow:hidden;position:relative;width:100\u0025}._1xj8{height:100\u0025;left:0;position:absolute;top:0;width:100\u0025}._1xj9{background-position:center;background-repeat:no-repeat;bottom:12px;cursor:pointer;height:20px;position:absolute;right:12px;width:20px}._73wr ._1xj9{background-color:rgba(0, 0, 0, .3);background-size:16px 16px;border-radius:30px;padding:14px;right:8px;top:50px}._7jun ._1xj9{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/muQZaN-Pay7.png)}._1xj9{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/BISw5vI_8Pz.png)}._3c3s{background-color:rgba(0, 0, 0, .6);background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/j9woTBMUYPw.png);background-position:center;background-repeat:no-repeat;height:100\u0025;opacity:0;position:absolute;transition:visibility 0s linear 300ms, opacity 300ms;visibility:hidden;width:100\u0025}._7juo ._3c3s._7kbt,._7kc3 ._3c3s._7kbu{opacity:1;transition:visibility 0s linear 0s, opacity 300ms;visibility:visible}._6pfr{background-position:center center;background-repeat:no-repeat;background-size:cover;bottom:-30px;filter:blur(20px);left:-30px;pointer-events:none;position:absolute;right:-30px;top:-30px}._7462 ._3c3s,._7462 ._1xj9,._7462 ._1xj8{display:none}\n._74hs{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/PJDwifb8hqb.png);background-position:center;background-repeat:no-repeat;background-size:cover;height:24px;position:absolute;right:16px;top:16px;width:52px}\n._7pnj{display:flex}._7pnh{background-color:#fff;height:100\u0025;width:1px}._7pni{background-position:top center;background-repeat:no-repeat;background-size:contain;height:100\u0025;width:100\u0025}\n._74vg{align-items:center;background-color:rgba(0, 0, 0, .6);display:flex;height:100\u0025;justify-content:center;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity .3s;width:100\u0025;z-index:100}._727i{align-items:center;background-color:#fff;border-radius:12px;display:flex;flex-direction:column;font-family:-apple-system, roboto, 'Helvetica Neue', sans-serif;font-size:14px;justify-content:center;margin:10px;padding:12px 12px;text-align:center;width:200px}._727l{background-size:contain;border-radius:50\u0025;height:60px;margin-right:4px;margin-top:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:60px}._727m{margin:4px 4px 0 0}._727k{margin-right:4px;margin-top:4px}._727n{background-color:#3578e5;border-radius:4px;box-sizing:border-box;color:#fff;font-weight:normal;margin-top:24px;padding:6px;width:80\u0025}._727o{opacity:1}._727j{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/jEwNOnngB02.png);background-size:contain;height:16px;margin-left:auto;text-align:right;width:16px}\n._7kc0{opacity:0;transition:visibility 0s linear 300ms, opacity 300ms;visibility:hidden}._7kb_{background-color:#000;background-position:center;background-repeat:no-repeat;background-size:contain;filter:blur(8px) brightness(.5);transform:scale3d(1.05, 1.05, 1)}._7kc1,._7kb_{bottom:0;left:0;position:absolute;right:0;top:0}._7kc1{align-items:center;display:flex;justify-content:center}._7juo ._7kc0{opacity:1;transition:visibility 0s linear 0s, opacity 300ms;visibility:visible}._7kb-{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:20px}._7kc0 .fbAdCallToAction{background-color:rgba(255, 255, 255, .9);border-radius:6px;color:#23272f;padding:10px 20px}._7kc0 .fbAdSubtitle{color:#fff;margin-bottom:20px;text-shadow:0 0 1px black}._7kc0 .fbAdIcon{border-radius:50\u0025;height:48px;margin-bottom:8px;overflow:hidden;width:48px}\n._7kby{opacity:0;transition:visibility 0s linear 300ms, opacity 300ms;visibility:hidden}._7kbx{background-color:#000;background-position:center;background-repeat:no-repeat;background-size:contain;filter:blur(8px) brightness(.5);transform:scale3d(1.05, 1.05, 1)}._7kbz,._7kbx{bottom:0;left:0;position:absolute;right:0;top:0}._7kbz{align-items:center;display:flex;justify-content:center}._7kc2 ._7kby{opacity:1;transition:visibility 0s linear 0s, opacity 300ms;visibility:visible}._7kbv{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/cGwBF2i3A8v.png);bottom:12px;height:24px;left:12px;position:absolute;width:24px}._7kbw{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:20px}._7kby .fbAdCallToAction{background-color:rgba(255, 255, 255, .9);border-radius:6px;color:#23272f;padding:10px 20px}._7kby .fbAdSubtitle{color:#fff;margin-bottom:20px;text-shadow:0 0 1px black}._7kby .fbAdIcon{border-radius:50\u0025;height:48px;margin-bottom:8px;overflow:hidden;width:48px}\n._7juk,._7lkn,._7lkm{bottom:0;left:0;position:absolute;right:0}._7lkn{align-items:center;display:flex;flex-direction:row;font-size:14px;font-weight:normal;padding:12px 16px;position:absolute}._7lkm{background:linear-gradient( transparent, rgba(0, 0, 0, .2), rgba(0, 0, 0, .4) );height:60px;opacity:1;transition:opacity 1s}._7jum ._7jul,._7jum ._7jue,._7jum ._7lkm{opacity:0}._7jui{color:#fff;display:inline-block;flex-grow:0;min-width:40px;padding:0 12px;padding-left:0;text-align:center;text-shadow:0 0 1px rgba(0, 0, 0, .4)}._7jul{background-color:rgba(255, 255, 255, .6);border-radius:2px;display:inline-block;flex-grow:1;height:2px;margin:0 12px;overflow:hidden;transition:opacity 1s}._7jue{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/7Ri190UbT7O.png);background-position:center;background-repeat:no-repeat;cursor:pointer;filter:drop-shadow(0 0 1px rgba(0, 0, 0, .4));height:24px;padding-left:0;transition:opacity 1s;width:24px}._7juo ._7jue{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/8qlISslWDk2.png)}._7juj{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/BISw5vI_8Pz.png);background-position:center;background-repeat:no-repeat;cursor:pointer;filter:drop-shadow(0 0 1px rgba(0, 0, 0, .4));height:20px;width:20px}._7jun ._7juj{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/muQZaN-Pay7.png)}._7juh{background-color:#3578e5;height:2px;transition:width .5s}\n._6qhh{font-family:-apple-system, roboto, 'Helvetica Neue', sans-serif;font-size:14px;font-weight:normal;text-align:left}._6qhd{align-items:center;animation:fadeIn .3s ease-in-out both;background:#dadde1;bottom:0;display:flex;justify-content:center;left:0;padding:5px;position:absolute;right:0;top:0;z-index:100}._6wfr ._6qhd{bottom:-0.5px;left:-0.5px;right:-0.5px;top:-0.5px}._6qhe{animation:fadeIn .3s ease-in-out both;background:white;border-radius:10px;box-shadow:0 2px 8px 0 rgba(0, 0, 0, .3);box-sizing:border-box;display:flex;flex-direction:column;max-height:100\u0025;max-width:320px;position:relative}._6qha{overflow-x:hidden;overflow-y:auto;padding-top:10px}._6qhg{height:23px;position:absolute;right:0;-webkit-tap-highlight-color:transparent;top:0}._6qhg:after{background-color:rgba(255, 255, 255, .8);background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/gX9Zgekva9J.png);background-position:27px 3px;background-repeat:no-repeat;background-size:12px 12px;border-radius:0 0 0 6px;box-shadow:0 0 4px 0 rgba(0, 0, 0, .15);content:'';display:block;height:18px;margin-left:5px;margin-top:0;width:42px}._6qhg:before{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/4l2RpWw-PLG.png);background-position:0 4px;background-repeat:no-repeat;background-size:10px 10px;border-right:1px solid rgba(0, 0, 0, .2);content:'';height:18px;left:11px;position:absolute;top:0;width:15px}._6qhb{box-sizing:border-box;display:flex;flex-direction:column;max-height:100\u0025;padding:10px 16px}._6qhc{padding-bottom:0}._6qhk,._6qgi{background-repeat:no-repeat;background-size:18px 18px;display:inline-block;height:18px;width:18px}._6qhh ._6qho{align-items:center;display:flex;flex-direction:row;margin:10px 0;text-decoration:none}._6qhk{flex-shrink:0;margin-right:10px}._6qhm{color:#1c1e21;font-weight:normal}._6qhl{font-size:16px;line-height:19px}._6qhn{color:#606770;font-size:14px;line-height:16px}._6qgk{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/NOeCWD5no4s.png)}._6qgl{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/BKiZzia0l7j.png)}._6qhp{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/gX9Zgekva9J.png)}._6qi1{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/PITveVN_6ro.png);background-repeat:no-repeat;background-size:100\u0025;display:inline-block;height:20px;vertical-align:middle;width:20px}._6qhz{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/kS3NV5igXMY.png);background-repeat:no-repeat;background-size:100\u0025;display:inline-block;height:11px;margin-right:6px;width:15px}._6qh6{font-weight:normal;padding-bottom:4px;position:relative}._6qh6:after{background:linear-gradient(white, rgba(255, 255, 255, 0));content:'';height:10px;left:0;position:absolute;right:0;top:100\u0025}._6qgh{border-bottom:1px solid #ccc;font-size:16px;line-height:20px;margin-bottom:6px;padding-bottom:6px;text-align:center}._6qh5{align-items:center;display:flex;flex-direction:row}._6qh4{color:#606770}._6qgi{flex-shrink:0;margin-right:10px}._6qh9{margin:0 -8px}._6qh9 ._6qh7{display:inline-block;margin-bottom:20px;margin-left:8px;margin-right:8px;vertical-align:middle}._6qh7{background:#ebedf0;border:none;border-radius:20px;color:#606770;font-size:14px;line-height:14px;padding:13px 16px;white-space:nowrap}._6qh7:focus,._6qh7:active{border:none;outline:none}._6qh7:active,._6qh8{background:#3578e5;color:#fff}._6qi4{align-items:center;display:flex;flex-direction:column}._6qhx{color:#1c1e21;font-size:16px;line-height:24px;margin-top:6px}._6qhy{color:#606770;font-size:14px;line-height:19px;margin:10px 0;text-align:center}._6qhu{background-position:center center;background-repeat:no-repeat;background-size:16px 16px;border-radius:50\u0025;height:42px;width:42px}._6qhv{background-color:#3578e5;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/oy4B7rSgGV0.png)}._6qhw{background-color:#f7923b;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/TQU64J6qQUe.png)}._6qi2{display:flex;flex-direction:row;margin-bottom:20px}._6qhh ._6qi0{align-items:center;color:#3578e5;display:flex;flex-direction:row;margin-top:auto;text-decoration:none;width:auto}._6qi1{margin-right:6px}._6qh-{border-radius:50\u0025;height:40px;margin-right:5px;width:40px}._6qhh ._6qi3{background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/tlUefGrS_4W.png);background-position:center center;background-repeat:no-repeat;background-size:13px 13px;height:13px;margin-right:-10px;margin-top:-10px;padding:10px;position:absolute;right:16px;top:13px;width:13px}._6qhf{align-self:flex-start;color:#8d949e;font-size:16px;margin-top:20px}\u0040keyframes fadeIn{0\u0025{opacity:0}100\u0025{opacity:1}}",
						components: [
							"css:ANCarousel",
							"css:ANWebVideoPlayer",
							"css:ANXOutRewardedVideo",
							"css:ANStitchedImage",
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
						"ANUtils",
						[
							"AdQualityScreenOrientation",
							"ScreenOrientation.adquality",
							"nullthrows"
						],
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
							function l(a) {
								var b = k(a);
								a = ES(a, "indexOf", !0, ":", ES(a, "indexOf", !0, "://") + 3);
								a !== -1 && (b = b.substring(0, a));
								a = ES(b, "indexOf", !0, "://");
								return a === -1 ? b : b.substring(a + 3);
							}
							function m() {
								var a = location.ancestorOrigins || [],
									b = a[a.length - 1] || location.origin;
								a = a[a.length - 2] || location.origin;
								if (n(b) && o(a)) return a;
								else return b;
							}
							function a() {
								return l(m());
							}
							var n = function(a) {
								var b = /^https?:\/\/www\.google(\.com?)?.\w{2,3}$/;
								return !!a.match(b);
							};
							function o(a) {
								return ES(a, "endsWith", !0, "cdn.ampproject.org");
							}
							function p(a) {
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
								a = p(a);
								a = a.substring(a.length - b.length);
								return a === b;
							}
							function q(a) {
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
								var a = r();
								a =
									(a.performance &&
										a.performance.timing &&
										a.performance.timing.navigationStart) ||
									0;
								return a;
							}
							function r() {
								return q()[0];
							}
							function s(a) {
								__p && __p();
								var b = q();
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
								return s("v55");
							}
							function t() {
								return s("v60");
							}
							function u(a) {
								if (a instanceof Node) return a;
								return a &&
									a.ownerDocument &&
									a.ownerDocument.defaultView &&
									a.ownerDocument.defaultView.Node &&
									a instanceof a.ownerDocument.defaultView.Node
									? a
									: null;
							}
							function v(a) {
								a = u(a);
								return a &&
									(a instanceof HTMLElement ||
										a instanceof a.ownerDocument.defaultView.HTMLElement)
									? a
									: null;
							}
							function w(a) {
								return a &&
									(a instanceof HTMLBodyElement ||
										a instanceof a.ownerDocument.defaultView.HTMLBodyElement)
									? a
									: null;
							}
							function x(a) {
								return !!(
									a &&
									a.id &&
									(a.id.match(/^div-gpt/) ||
										a.hasAttribute("data-google-query-id"))
								);
							}
							function y(a) {
								return a.ownerDocument.defaultView.frameElement;
							}
							function z(a) {
								return !!(a && a.id && a.id.match(/^google_ads_iframe_/));
							}
							function A(a) {
								while (a != null) {
									if (z(a)) return !0;
									a = y(a);
								}
								return !1;
							}
							function B(a) {
								var b = y(a);
								if (b == null) return;
								if (!z(b)) return;
								E(b, "100%", b.clientHeight);
								E(b, "100%", a.clientHeight);
							}
							function C(a, c) {
								__p && __p();
								var d = c.ownerDocument;
								d = d.createElement("iframe");
								a.appendChild(d);
								d.contentDocument.open();
								d.contentDocument.close();
								a = b("nullthrows")(d.contentDocument.body);
								a.appendChild(c);
								a.style.margin = "0";
								d.style.border = "none";
								E(d, "100%", null);
								return d;
							}
							function D(a) {
								return a == null ? "" : typeof a === "string" ? a : a + "px";
							}
							function E(a, b, c) {
								b === void 0 && (b = null);
								c === void 0 && (c = null);
								if (!a) return;
								a.style.width = D(b);
								a.style.height = D(c);
							}
							function F(a) {
								return !!(a && a.id && a.id.match(/^apstag-f-iframe-/));
							}
							function G(a) {
								F(a) && (a = a.ownerDocument.defaultView.frameElement);
								a = a.parentElement && a.parentElement.parentElement;
								return x(a) ? a : null;
							}
							function H(a) {
								var b = a.ownerDocument.defaultView;
								return parseInt(b.getComputedStyle(a).width, 10);
							}
							function I(a) {
								var b = a.ownerDocument.defaultView;
								return parseInt(b.getComputedStyle(a).height, 10);
							}
							function J() {
								return window.screen.width;
							}
							function K() {
								return window.screen.height;
							}
							function L() {
								return (
									b("ScreenOrientation.adquality").getScreenOrientation() ==
									b("AdQualityScreenOrientation").VERTICAL
								);
							}
							function M(a) {
								if (!a) return !1;
								for (var b = 0; b < j.length; b++) {
									var c = j[b];
									if (a.match(c)) return !0;
								}
								return !1;
							}
							function N(a, b, c) {
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
							function O(a, b, c) {
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
							function P(a, b, c) {
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
							function Q(a) {
								a = a;
								while (a) {
									F(a) && (a = a.ownerDocument.defaultView.frameElement);
									if (
										window.getComputedStyle(a).overflowX !== "visible" ||
										!a.parentElement
									)
										break;
									a = a.parentElement;
								}
								return a;
							}
							function R(a) {
								a = a.getBoundingClientRect();
								var b = a.left;
								a = J() - a.right;
								return Math.max(a, b);
							}
							function S(a) {
								return a.scrollHeight > a.clientHeight + 3;
							}
							function T(a, b, c) {
								__p && __p();
								var d = c.slice(0, b).join(" ") + "\u2026";
								a.textContent = d;
								if (S(a)) return i;
								if (b >= c.length) return h;
								a.textContent = c.slice(0, b + 1).join(" ") + "\u2026";
								if (S(a)) {
									a.textContent = d;
									return h;
								}
								a.textContent = d;
								return g;
							}
							function U(a) {
								if (!S(a)) return;
								var b = a.textContent.split(" "),
									c = 0,
									d = b.length - 1;
								while (c <= d) {
									var e = Math.floor((c + d) / 2),
										f = T(a, e, b);
									if (f === h) break;
									f === i ? (d = e - 1) : (c = e + 1);
								}
							}
							function V(a) {
								a = a.querySelectorAll("[data-auto-fit-text=true]");
								for (var b = 0; b < a.length; b++) U(a[b]);
							}
							function W(a) {
								var b = !1;
								return function() {
									b || ((b = !0), a.apply(void 0, arguments));
								};
							}
							function X(a) {
								if (typeof a === "string") return a;
								else return "";
							}
							function Y(a, b, c) {
								a.contentWindow.postMessage(c, b);
							}
							e.exports = {
								autofitIfInDfpIframe: B,
								calculateLargestMargin: R,
								cssSize: D,
								extractOrigin: k,
								extractDomain: l,
								extractHostname: p,
								findWidestParentElement: Q,
								getDFPRoot: G,
								getElementWidth: H,
								getElementHeight: I,
								getScreenHeight: K,
								getScreenWidth: J,
								getNavigationStart: d,
								getTopMostAccessibleWindow: r,
								getV55TagStateContainer: f,
								getV60TagStateContainer: t,
								getWindowHierarchy: q,
								isA9Container: F,
								isAppStoreURL: M,
								isInDfpIframe: A,
								isDfpContainer: x,
								isSameRootDomain: c,
								maybeHTMLElement: v,
								maybeHTMLBodyElement: w,
								maybeNode: u,
								once: W,
								onlyString: X,
								resizeElement: E,
								restoreElementStyles: O,
								removeStoredData: P,
								screenIsPortrait: L,
								sendToFacebook: Y,
								storeElementStyles: N,
								truncateTextToFitElement: U,
								autofitTextWhereNeeded: V,
								getTopDomain: a,
								wrapInIframe: C
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
							a = (function() {
								__p && __p();
								function a(a) {
									(this.$1 = g),
										(this.$4 = []),
										(this.$5 = []),
										a(
											ES(this.$6, "bind", !0, this),
											ES(this.$7, "bind", !0, this)
										);
								}
								var b = a.prototype;
								b.then = function(a, b) {
									if (this.$1 === g) {
										this.$4.push(a);
										b && this.$5.push(b);
										return;
									}
									this.$1 === h ? a(this.$2) : this.$1 === i && b && b(this.$3);
								};
								b.$6 = function(a) {
									if (this.$1 !== g) return;
									this.$2 = a;
									this.$1 = h;
									while (this.$4.length > 0) this.$4.shift()(this.$2);
								};
								b.$7 = function(a) {
									if (this.$1 !== g) return;
									this.$3 = a;
									this.$1 = i;
									while (this.$5.length > 0) this.$5.shift()(this.$3);
								};
								a.resolve = function(b) {
									return new a(function(a, c) {
										a(b);
									});
								};
								a.reject = function(b) {
									return new a(function(a, c) {
										c(b);
									});
								};
								a.all = function(b) {
									return new a(function(a, c) {
										var d = [],
											e = 0,
											f = function(f) {
												var g = f;
												b[f].then(
													function(c) {
														(d[g] = c), e++, e === b.length && a(d);
													},
													function(a) {
														c(a);
													}
												);
											};
										for (var g = 0; g < b.length; g++) f(g);
									});
								};
								return a;
							})();
							e.exports = a;
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
						"ANAdChoices",
						["nullthrows"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a, b) {
									(this.$1 = a), (this.$2 = b);
								}
								var c = a.prototype;
								c.$3 = function(a) {
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
								c.$4 = function() {
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
								c.$5 = function() {
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
								c.$6 = function() {
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
								c.render = function() {
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
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(a) {
									__p && __p();
									var b = this;
									this.$6 = function() {
										__p && __p();
										var a = b.getVisibilityState();
										for (
											var c = b.$5,
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
											f(a);
										}
									};
									this.$1 = a;
									this.$5 = [];
									this.$1.hidden != null &&
										((this.$2 = "hidden"),
										(this.$3 = "visibilityState"),
										(this.$4 = "visibilitychange"));
									for (var a = 0; a < g.length; a++) {
										var c = g[a];
										if (this.$1[c + "Hidden"] != null) {
											this.$2 = c + "Hidden";
											this.$3 = c + "VisibilityState";
											this.$4 = c + "visibilitychange";
											break;
										}
									}
								}
								var b = a.prototype;
								b.isHidden = function() {
									return this.$1[this.$2];
								};
								b.getVisibilityState = function() {
									return this.$1[this.$3];
								};
								b.addVisibilityListener = function(a) {
									this.$5.length === 0 &&
										this.$1.addEventListener(this.$4, this.$6),
										this.$5.push(a);
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(a) {
									(this.$1 = !1), (this.$2 = 0), (this.$4 = a), (this.$3 = []);
								}
								var c = a.prototype;
								c.$5 = function() {
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
								c.$6 = function() {
									var a = this;
									this.$2 = ES("Date", "now", !1);
									var c = new (b("PageVisibility.adquality"))(this.$4);
									c.addVisibilityListener(function() {
										var b = c.getVisibilityState();
										b === "visible" && a.$5();
									});
									this.$1 = !0;
								};
								c.onBounceBack = function(a) {
									this.$1 || this.$6(), this.$3.push(a);
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(a, b, c, d) {
									(this.$1 = a),
										(this.$2 = b),
										(this.$3 = g(c)),
										(this.$4 = g(d)),
										(this.$5 = !1),
										(this.$7 = !1);
								}
								var c = a.prototype;
								c.enableReward = function() {
									this.$5 = !0;
								};
								c.isRewardEnabled = function() {
									return this.$5;
								};
								c.rewardCompleted = function() {
									if (!this.$5 || !this.$3) return;
									this.$3();
								};
								c.adClosed = function() {
									if (!this.$5 || !this.$4) return;
									this.$4();
								};
								c.setVideo = function(a) {
									this.$6 = a;
								};
								c.mediaLoaded = function() {
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
								return a;
							})();
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
							a = function a(c) {
								__p && __p();
								var d = this;
								this.dom = function(a, b, c) {
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
								};
								this.div = function(a, b) {
									return d.dom("div", { className: a }, b || []);
								};
								this.anchor = function(a, b) {
									return d.dom("a", {
										className: a,
										href: b || "#",
										target: "_blank"
									});
								};
								this.span = function(a, b) {
									return d.dom("span", { className: a, textContent: b });
								};
								this.find = function(a, c) {
									return b("nullthrows")(a.querySelector(c));
								};
								this.withDocument = function(b) {
									return new a(b);
								};
								this.$1 = c;
							};
							e.exports = new a(document);
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
							a = (function() {
								__p && __p();
								function a(a, b, c) {
									(this.$4 = b),
										(this.$1 = a),
										(this.$5 = c),
										(this.$2 = this.$6());
								}
								var b = a.prototype;
								b.setImageSize = function(a) {
									a = a + "px";
									this.$2.style.width = a;
									this.$3.style.width = a;
									this.$3.style.height = a;
								};
								b.$6 = function() {
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
									this.$3.style.backgroundImage =
										"url(" + this.$1.adImage + ")";
									return a;
								};
								b.getElement = function() {
									return this.$2;
								};
								return a;
							})();
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
							a = function(a) {
								var b = ES("Date", "now", !1),
									c = Math.max(0, 16 - (b - h));
								h = b + c;
								return setTimeout(a, c);
							};
							var i = window.requestAnimationFrame || a,
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
							b = (function() {
								__p && __p();
								function a(a, b) {
									(this.$2 = !1),
										(this.$6 = !1),
										(this.$8 = 0),
										(this.$11 = a),
										(this.$10 = a.getRail()),
										(this.$12 = b || function() {}),
										g(this.$10, "translate3d(0px, 0px, 0px)");
								}
								var b = a.prototype;
								b.$13 = function() {
									this.$10.style.transition = "";
								};
								b.$14 = function() {
									this.$10.style.transition = "none";
								};
								b.$15 = function(a, b) {
									a = this.$11.closestIndex(a);
									this.$11["goto"](a);
									this.$12(a, b);
								};
								b.$16 = function(a) {
									if (this.$11.isWithinRange(a)) return a;
									if (a > 0) return a / k;
									var b = -this.$11.getMaxOffset();
									return b + (a - b) / k;
								};
								b.onMoveStart = function(a) {
									this.$11.onCriticalAnimationStart(),
										this.$7 && clearTimeout(this.$7),
										this.$14(),
										(this.$4 = this.$5 = a),
										(this.$1 = this.$8 - a.x * l),
										(this.$3 = ES("Date", "now", !1)),
										(this.$2 = !1),
										(this.$6 = !1);
								};
								b.onMove = function(a, b) {
									__p && __p();
									var c = this;
									if (this.$6)
										if (this.$2) a.preventDefault();
										else return;
									this.$9 && j(this.$9);
									this.$5 = b;
									if (this.$1 == null || this.$4 == null || this.$5 == null)
										return;
									a = this.$4;
									var d = this.$5;
									if (this.$6)
										this.$2 &&
											(this.$9 = i(function() {
												c.scrollTo(c.$16(c.$1 + b.x * l));
											}));
									else if (ES("Date", "now", !1) - this.$3 > 2 * (1e3 / 60)) {
										var e = a.x - d.x;
										a = a.y - d.y;
										e === 0 ? (d = Infinity) : (d = a / e);
										Math.abs(d) < o && (this.$2 = !0);
										this.$6 = !0;
									}
								};
								b.onMoveEnd = function() {
									__p && __p();
									var a = this;
									if (!this.$2) return;
									this.$9 && j(this.$9);
									var b = "left";
									this.$5 != null &&
										this.$4 != null &&
										(b = this.$5.x < this.$4.x ? "right" : "left");
									this.$13();
									this.$1 = this.$4 = this.$5 = null;
									var c = -this.$8,
										d = Math.round(m * this.$11.getItemWidthRatio());
									b === "right" ? (c += d) : (c -= d);
									this.$7 = setTimeout(function() {
										a.$11.onCriticalAnimationEnd();
									}, n);
									this.$15(c, b);
								};
								b.scrollTo = function(a, b) {
									b != null
										? (this.$10.style.transitionDuration = b / 1e3 + "s")
										: (this.$10.style.transitionDuration = ""),
										g(this.$10, "translate3d(" + a + "px, 0px, 0px)"),
										(this.$8 = a);
								};
								b.scrollToTransition = function(a, b) {
									var c = this;
									this.$13();
									this.$8 = a;
									this.$9 = i(function() {
										c.scrollTo(a, b);
									});
								};
								b.getCurrentOffset = function() {
									return -this.$8;
								};
								return a;
							})();
							e.exports = b;
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
							a = 8;
							var o = n / m,
								p = a / n,
								q = 1.2;
							c = (function() {
								__p && __p();
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
								var c = a.prototype;
								c.$14 = function() {
									__p && __p();
									var a = this;
									this.$6 = 0;
									this.$5 = [];
									this.$1 = i("ANCarousel/root", [i("_2vfy", [i("_2vf-")])]);
									this.$3 = j(this.$1, "._2vf-");
									this.$2 = j(this.$1, "._2vfy");
									this.$12.addRequiredEvent();
									ES(this.$4, "forEach", !0, function(c, d) {
										c = new (b("ANCarouselItem"))(
											c,
											d === 0
												? function() {
														return a.$12.requiredEventFired();
												  }
												: null,
											a.$13.useFilledCarouselCTA === !0 ? "Filled" : "Empty"
										);
										a.$5.push(c);
										a.$3.appendChild(c.getElement());
									});
									this.$11 = new (b("ANCarouselMotion"))(this, function(b, c) {
										a.$7("AN_CAROUSEL_EVENT_SWIPE", { index: b, direction: c });
									});
									this.ensureSizes();
									this.$15();
								};
								c.$16 = function() {
									return this.$1.clientWidth;
								};
								c.$15 = function() {
									var a = this;
									this.$3.addEventListener("touchstart", function(b) {
										a.$11.onMoveStart(l(b));
									});
									this.$3.addEventListener("touchmove", function(b) {
										a.$11.onMove(b, l(b));
									});
									this.$3.addEventListener("touchend", function(b) {
										a.$11.onMoveEnd();
									});
								};
								c.$17 = function(a) {
									if (this.isWithinRange(a)) return a;
									return a > 0 ? 0 : -this.getMaxOffset();
								};
								c.$18 = function() {
									return Math.round(this.$10 * o);
								};
								c.$19 = function() {
									return Math.round(this.$8 * p);
								};
								c.$20 = function() {
									return this.$8 > n ? q : 1;
								};
								c.$21 = function(a) {
									return (this.$8 + this.$9) * a + this.$9;
								};
								c.getLinks = function() {
									return ES(this.$5, "map", !0, function(a) {
										return a.getElement();
									});
								};
								c.getElement = function() {
									return this.$1;
								};
								c.getRail = function() {
									return this.$3;
								};
								c.getItemWidthRatio = function() {
									return this.$8 / n;
								};
								c.getFullWidth = function() {
									return this.$4.length * (this.$8 + this.$9);
								};
								c.getMaxOffset = function() {
									return this.getFullWidth() - this.$10 + this.$9;
								};
								c.isIndexVisible = function(a) {
									var b = this.$11.getCurrentOffset();
									a = this.$21(a);
									return a > b && a + this.$8 < b + this.$10;
								};
								c["goto"] = function(a, b) {
									var c = -a * (this.$8 + this.$9);
									c += (this.$10 - this.$8) / 2 - this.$9;
									c = this.$17(c);
									this.$11.scrollToTransition(c, b);
									this.$6 = a;
								};
								c.closestIndex = function(a) {
									var b = this.$8 + this.$9;
									a = a + this.$10 / 2;
									a = Math.floor(a / b);
									if (a >= this.$4.length) return this.$4.length - 1;
									else if (a < 0) return 0;
									return a;
								};
								c.isWithinRange = function(a) {
									return a > 0 ? !1 : a > -this.getMaxOffset();
								};
								c.ensureSizes = function() {
									__p && __p();
									var a = this;
									this.$10 = this.$16() || m;
									this.$8 = this.$18();
									this.$9 = this.$19();
									this.$1.style.fontSize = this.$20() * 100 + "px";
									this.$3.style.width = this.getFullWidth() + "px";
									ES(this.$5, "forEach", !0, function(b, c) {
										var d = b.getElement();
										b.setImageSize(a.$8);
										c < a.$5.length - 1 && (d.style.marginRight = a.$9 + "px");
										c === 0 && (d.style.marginLeft = a.$9 + "px");
									});
								};
								return a;
							})();
							e.exports = c;
						},
						null
					);
					__d(
						"ANEventCounter",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a() {
									(this.$1 = 0), (this.$2 = !1), (this.$3 = []);
								}
								var b = a.prototype;
								b.addRequiredEvent = function() {
									this.addRequiredEvents();
								};
								b.addRequiredEvents = function(a) {
									a === void 0 && (a = 1), (this.$1 += a);
								};
								b.requiredEventFired = function() {
									(this.$1 -= 1),
										!this.$2 && this.$1 === 0 && ((this.$2 = !0), this.$4());
								};
								b.addListener = function(a) {
									this.$2 ? window.setTimeout(a, 0) : this.$3.push(a);
								};
								b.$4 = function() {
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
								b.hasFired = function() {
									return this.$2;
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a() {
									(this.$1 = new Map()),
										(this.$2 = new Map()),
										(this.$3 = new Map());
								}
								var c = a.prototype;
								c.resize = function(a, c, d) {
									this.addChanges(a, {
										width: b("ANUtils").cssSize(c),
										height: b("ANUtils").cssSize(d)
									});
								};
								c.addChanges = function(a, c) {
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
								c.applyChanges = function() {
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
								c.restoreOriginalStyles = function() {
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
								c.$4 = function(a) {
									a.id || (a.id = h());
									this.$3.set(a.id, a);
									return a.id;
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(a, c, d, e, f) {
									(this.$1 = new (b("ANStyleChangeTracker"))()),
										(this.$2 = a),
										(this.$3 = c),
										(this.$4 = d),
										(this.$5 = e),
										(this.$6 = f);
								}
								var c = a.prototype;
								c.resize = function(a, c) {
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
								c.$7 = function(a, c, d, e) {
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
								c.restoreOriginalStyles = function() {
									this.$1.restoreOriginalStyles();
								};
								c.$8 = function(a) {
									this.$1.addChanges(a, { "max-width": "none" });
									a = a.parentElement;
									if (!a) return;
									var c = this.$6 - a.getBoundingClientRect().left;
									this.$1.addChanges(a, {
										"margin-left": b("ANUtils").cssSize(c)
									});
									this.$1.addChanges(a, { "max-width": "none" });
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(a, c, d) {
									(this.$1 = new (b("ANStyleChangeTracker"))()),
										(this.$2 = a),
										(this.$3 = c),
										(this.$4 = d);
								}
								var c = a.prototype;
								c.resize = function(a, b) {
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
								c.restoreOriginalStyles = function() {
									this.$1.restoreOriginalStyles();
								};
								c.$5 = function(a) {
									a =
										a.parentElement &&
										a.parentElement.parentElement &&
										a.parentElement.parentElement.parentElement;
									return a && b("ANUtils").isDfpContainer(a) ? a : null;
								};
								c.$6 = function() {
									var a = this.$3,
										c = this.$4 - a.getBoundingClientRect().left;
									this.$1.addChanges(a, {
										"margin-left": b("ANUtils").cssSize(c),
										"max-width": "none"
									});
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
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
								var c = a.prototype;
								c.resize = function(a, b) {
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
								c.restoreOriginalStyles = function() {
									this.$7.restoreOriginalStyles();
								};
								c.$13 = function() {
									while (this.$8.length) {
										var a = this.$8.pop();
										delete a.dataset[this.$9];
									}
								};
								c.$15 = function() {
									return this.$2 ? this.$2 : this.$3;
								};
								c.$12 = function() {
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
								c.$17 = function(a, b) {
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
								c.$18 = function(a) {
									return Object.prototype.hasOwnProperty.call(
										a.dataset,
										this.$9
									)
										? b("ANUtils").getElementHeight(a) -
												parseInt(a.dataset[this.$9], 10)
										: null;
								};
								c.$14 = function() {
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
								c.$16 = function(a) {
									if (a.nodeName === "BODY") return !1;
									var c = window.getComputedStyle(a).overflowY;
									if (c === "scroll" || c === "auto") return !1;
									return b("ANUtils").getElementHeight(a) > this.$10 * 2
										? !1
										: !0;
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(a) {
									(this.$1 = a),
										(this.$2 = document.createElement("a")),
										(this.$2.rel = "noopener noreferrer"),
										this.$1.appendChild(this.$2);
								}
								var b = a.prototype;
								b.$3 = function(a, b) {
									(this.$2.href = a),
										(this.$2.target = b ? "_blank" : "_top"),
										this.$2.click();
								};
								b.openNewTab = function(a) {
									this.$3(a, !0);
								};
								b.open = function(a) {
									this.$3(a, !1);
								};
								return a;
							})();
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
						[
							"ANUnifiedLoggingClickEvent",
							"ANUtils",
							"LogLevels",
							"getTime",
							"nullthrows"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a, b, c, d, e, f) {
									(this.$1 = a),
										(this.$3 = b),
										(this.$2 = c),
										(this.$4 = d),
										(this.$5 = e),
										(this.$6 = f),
										(this.$7 = []),
										(this.$8 = null),
										(this.$9 = !1);
								}
								var c = a.prototype;
								c.setLogLevel = function(a) {
									this.$1 = a;
								};
								c.frameReady = function() {
									__p && __p();
									this.$9 = !0;
									for (
										var a = this.$7,
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
										this.$10(d.timestamp, d.params);
									}
									this.$7 = [];
								};
								c.setUnifiedLoggingURL = function(a) {
									this.$8 = a;
								};
								c.debug = function(a, c) {
									this.$1 <= b("LogLevels").DEBUG && this.event(a, c);
								};
								c.error = function(a) {
									this.$1 <= b("LogLevels").ERROR &&
										this.event("ADNW_ADERROR", a);
								};
								c.event = function(a, b, c) {
									a = { event_name: a };
									b != null && (a.error_message = "" + b);
									c != null && (a.error_stack_trace = c);
									this.eventWithParams(a);
								};
								c.eventWithParams = function(a) {
									var c = b("getTime")();
									if (!this.$9) {
										this.$7.push({ timestamp: c, params: a });
										return;
									}
									this.$10(c, a);
								};
								c.$10 = function(a, c) {
									(c.client_ts = a),
										this.$2 > 0 &&
											(c.latency_since_navigation_start = a - this.$2),
										(c.latency_since_sdk_init = a - this.$3),
										window.$11 && (c.visibility_changed = !0),
										b("ANUtils").sendToFacebook(this.$5, this.$6, {
											name: "client_event",
											params: {
												key: b("ANUtils").onlyString(this.$4),
												payload: c
											}
										});
								};
								c.logClick = function(a, c) {
									var d =
											a.action != null
												? a.action
												: b("ANUnifiedLoggingClickEvent").BILLABLE_CLICK,
										e = b("getTime")();
									e = {
										name: "client_event",
										params: {
											key: a.key,
											payload: {
												event_name: "ADNW_CLICK",
												error_message: String(e - c),
												error_stack_trace: a.adElementType,
												video_duration: a.videoDuration,
												video_playback_time: a.videoPlaybackTime
											}
										}
									};
									this.$12([
										{
											type: "clk",
											key: a.key,
											top_domain: b("ANUtils").getTopDomain(),
											payload: {
												type: d,
												time: a.clickParams.clktm,
												delay: a.clickParams.clkdel,
												pos: a.pos
											}
										},
										{
											type: "client",
											key: a.key,
											top_domain: b("ANUtils").getTopDomain(),
											payload: e.params.payload
										}
									]);
								};
								c.$12 = function(a) {
									if (!this.isPublisherSideLoggingSupported())
										throw new Error("unsupported_pub_side_logging");
									window.navigator.sendBeacon(
										b("nullthrows")(this.$8),
										ES("JSON", "stringify", !1, a)
									);
								};
								c.isPublisherSideLoggingSupported = function() {
									return window.navigator && window.navigator.sendBeacon;
								};
								return a;
							})();
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
						"ANMoatSivt",
						["NativePromise", "nullthrows"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = 1e4;
							a = (function() {
								__p && __p();
								function a(a, b) {
									(this.$1 = a), (this.$2 = b);
								}
								var c = a.prototype;
								c.getMeasurements = function() {
									var a = this;
									return new (b("NativePromise"))(function(b, c) {
										var d = !1,
											e = window.setTimeout(function() {
												(d = !0), c();
											}, g),
											f = a.$3();
										f.push(function(a) {
											if (d) return;
											window.clearTimeout(e);
											b(a);
										});
									});
								};
								c.$3 = function() {
									var a = this.$2.defaultView;
									a.ADNW = a.ADNW || {};
									if (a.ADNW.moat) return a.ADNW.moat;
									a.ADNW.moat = [];
									this.$4();
									return a.ADNW.moat;
								};
								c.$4 = function() {
									var a = this.$2.createElement("script");
									a.src = this.$1;
									a.async = !0;
									b("nullthrows")(this.$2.body).appendChild(a);
								};
								return a;
							})();
							e.exports = a;
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
							a = (function() {
								__p && __p();
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
										(this.$10 = b("nullthrows")(
											c.querySelector(".skipButton")
										));
								}
								var c = a.prototype;
								c.makeRewarded = function() {
									__p && __p();
									var a = this,
										b = this.$3.getVideoElement();
									b.loop = !1;
									this.$3.setMuted(!1);
									this.$12();
									this.$3.getElement().classList.add("_73wr");
									if (this.$11) {
										b = this.$11;
										this.$2.appendChild(b);
										b.addEventListener("click", function() {
											a.$3.pause(!0);
										});
									}
								};
								c.getXoutButton = function() {
									return this.$11;
								};
								c.$13 = function() {
									var a = this,
										c = b("nullthrows")(this.$2.querySelector(".closeArea"));
									c.addEventListener(
										"click",
										b("ANUtils").once(function() {
											return a.$1.adClosed();
										})
									);
									this.$3.pause();
									this.$14();
									this.$2.classList.add("endCardShowing");
									this.$3.getElement().classList.add("_7462");
									this.$1.rewardCompleted();
								};
								c.$15 = function() {
									if (this.$4) return;
									this.$4 = !0;
									this.$9.classList.add("fadeIn");
								};
								c.$14 = function() {
									if (!this.$4) return;
									this.$4 = !1;
									this.$9.classList.remove("fadeIn");
								};
								c.$16 = function() {
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
								c.$17 = function() {
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
								c.$18 = function() {
									var a = this.$3.getVideoElement();
									a = a.duration - a.currentTime;
									return a < j;
								};
								c.$12 = function() {
									__p && __p();
									var a = this,
										c = b("nullthrows")(
											this.$2.querySelector(".adnwRVProgressBar")
										),
										d = this.$3.getVideoElement(),
										e = this.$2.ownerDocument.defaultView,
										f = function b() {
											var f = 100 * (d.currentTime / d.duration);
											f = Math.min(f, 100);
											a.$16();
											c.style.width = f + "%";
											(d.paused || a.$18()) && a.$15();
											f >= 100
												? a.$13()
												: d.paused || e.requestAnimationFrame(b);
											d.currentTime >= i && a.$17();
										};
									d.addEventListener("play", function() {
										a.$18() || a.$14(), e.requestAnimationFrame(f);
									});
									!d.paused ? e.requestAnimationFrame(f) : this.$15();
								};
								return a;
							})();
							e.exports = a;
						},
						null
					);
					__d(
						"ANStitchedImage",
						["cx", "VPAIDDomUtils"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = b("VPAIDDomUtils").div;
							a = (function() {
								__p && __p();
								function a(a, b) {
									(this.$1 = !1), (this.$2 = a), (this.$3 = b);
								}
								var b = a.prototype;
								b.render = function(a, b) {
									var c = this.$4(),
										d = c[0],
										e = c[1];
									c = c[2];
									this.$2.addRequiredEvent();
									this.$5(e, a);
									this.$5(c, b);
									return d;
								};
								b.$4 = function() {
									var a = h("_7pnh"),
										b = h("_7pni"),
										c = h("_7pni");
									a = h("_7pnj", [b, a, c]);
									return [a, b, c];
								};
								b.$5 = function(a, b) {
									var c = this,
										d = document.createElement("img");
									d.addEventListener("load", function() {
										(a.style.backgroundImage = "url(" + b.adImage + ")"),
											c.$1 || ((c.$1 = !0), c.$2.requiredEventFired()),
											d.naturalWidth === 1 &&
												d.naturalHeight === 1 &&
												c.$3.eventWithParams({
													event_name: "ADNW_ADERROR",
													error_message: "Image loading error (1x1)",
													error_stack_trace: d.src
												});
									});
									d.addEventListener("error", function() {
										c.$3.eventWithParams({
											event_name: "ADNW_ADERROR",
											error_message: "Image loading error (uncaught)",
											error_stack_trace: d.src
										});
									});
									d.src = b.adImage;
									return a;
								};
								return a;
							})();
							e.exports = a;
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
							a = (function() {
								__p && __p();
								function a(a, b) {
									(this.$1 = a), (this.$2 = b), (this.$4 = []), (this.$5 = []);
								}
								a.openDialog = function(b, c, d) {
									c = new a(c, d);
									c.$6();
									c.$7(b);
									return c;
								};
								var c = a.prototype;
								c.onConfirm = function(a) {
									this.$4.push(a);
									return this;
								};
								c.onDismiss = function(a) {
									this.$5.push(a);
									return this;
								};
								c.$6 = function() {
									__p && __p();
									var a = this,
										c = this.$3;
									c ||
										((c = j("_74vg", [
											j("_727i", [
												k("_727j", ""),
												k("_727k", l),
												k("_727l", ""),
												k("_727m", this.$1),
												k("_727n", m)
											])
										])),
										(b("nullthrows")(
											c.querySelector("._727l")
										).style.backgroundImage = "url(" + this.$2 + ")"),
										c.addEventListener("click", function(d) {
											__p && __p();
											var e = b("nullthrows")(i(d.target)),
												f = b("nullthrows")(
													b("nullthrows")(c).querySelector("._727i")
												),
												g = b("nullthrows")(
													b("nullthrows")(c).querySelector("._727j")
												);
											if (e === g) a.$8(d);
											else if (e === f || ES(f, "contains", !0, e))
												for (
													var g = a.$4,
														f = ES("Array", "isArray", !1, g),
														e = 0,
														g = f
															? g
															: g[
																	typeof Symbol === "function"
																		? Symbol.iterator
																		: "@@iterator"
															  ]();
													;

												) {
													var h;
													if (f) {
														if (e >= g.length) break;
														h = g[e++];
													} else {
														e = g.next();
														if (e.done) break;
														h = e.value;
													}
													h = h;
													h(d);
												}
											else a.$8(d);
										}));
									this.$3 = c;
								};
								c.$8 = function(a) {
									__p && __p();
									var c = this,
										d = b("nullthrows")(this.$3);
									d.classList.remove("_727o");
									b("nullthrows")(this.$3).style.opacity = "0";
									window.setTimeout(function() {
										__p && __p();
										d.parentNode && d.parentNode.removeChild(d);
										for (
											var b = c.$5,
												e = ES("Array", "isArray", !1, b),
												f = 0,
												b = e
													? b
													: b[
															typeof Symbol === "function"
																? Symbol.iterator
																: "@@iterator"
													  ]();
											;

										) {
											var g;
											if (e) {
												if (f >= b.length) break;
												g = b[f++];
											} else {
												f = b.next();
												if (f.done) break;
												g = f.value;
											}
											g = g;
											g(a);
										}
									}, 300);
								};
								c.$7 = function(a) {
									var c = this;
									a.appendChild(b("nullthrows")(this.$3));
									window.setTimeout(function() {
										b("nullthrows")(c.$3).classList.add("_727o");
									});
								};
								return a;
							})();
							e.exports = a;
						},
						null
					);
					__d(
						"AdNetworkVideoEventType",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								VIDEO_PLAY: 0,
								VIDEO_SKIP: 1,
								VIDEO_TIME: 2,
								VIDEO_MRC: 3,
								VIDEO_PAUSE: 4,
								VIDEO_UNPAUSE: 5,
								VIDEO_MUTE: 6,
								VIDEO_UNMUTE: 7,
								VIDEO_FULLSCREEN: 8,
								VIDEO_LEAVE_FULLSCREEN: 9,
								VIDEO_VIEWABLE_IMPRESSION: 10,
								VIDEO_FIRST_QUARTILE: 11,
								VIDEO_MID_POINT: 12,
								VIDEO_THIRD_QUARTILE: 13,
								VIDEO_COMPLETE: 14,
								VIDEO_IMPRESSION_IAB: 16
							});
						},
						null
					);
					__d(
						"AdNetworkFocusState",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								UNKNOWN: 0,
								FOCUSED: 1,
								UNFOCUSED: 2
							});
						},
						null
					);
					__d(
						"AudienceNetworkVideoLoggingUtils",
						["AdNetworkFocusState"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = 1e3,
								h = 100;
							function i(a) {
								return Math.floor(a * g);
							}
							function a(a) {
								var b;
								return {
									vla: a.avgVolume,
									vlm: a.minVolume,
									vlmax: a.maxVolume,
									vwa: (b = a.avgViewableRatio) != null ? b : 0,
									vwm: (b = a.minViewableRatio) != null ? b : 0,
									vwmax: (b = a.maxViewableRatio) != null ? b : 0,
									vtime_ms: i(a.viewableSeconds),
									atime_ms: i(a.audibleSeconds),
									mcat_ms: i(a.maxContinuousAudibleSeconds),
									mcpt_ms: i(a.maxContinuousPlaySeconds),
									mcvt_ms: i(a.maxContinuousViewableSeconds),
									spt_ms: i(a.stickyAdSeconds),
									maa: a.maxAdArea.maxAdAreaNotFullscreen,
									ortn: a.maxAdArea.screenOrientation,
									vw_d: a.viewableDetection,
									vw_rsn: a.viewableReason,
									pbra: a.avgPlaybackRate === null ? void 0 : a.avgPlaybackRate
								};
							}
							function c() {
								__p && __p();
								var a = h,
									c = [],
									d = window;
								while (a > 0) {
									try {
										c.push(
											d.document.hasFocus()
												? b("AdNetworkFocusState").FOCUSED
												: b("AdNetworkFocusState").UNFOCUSED
										);
									} catch (a) {
										c.push(b("AdNetworkFocusState").UNKNOWN);
									}
									if (d === window.top) break;
									d = d.parent;
									a--;
								}
								return c;
							}
							function d(a) {
								return /iPhone|iPod/.test(a);
							}
							e.exports = {
								getStatsFields: a,
								getFocus: c,
								isIPhoneOrIPod: d,
								MAX_LAYERS: h
							};
						},
						null
					);
					__d(
						"BrowserDetectionFeature",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								UA: "ua",
								VERSION: "version",
								PLATFORM: "platform",
								IS_IFRAME: "isIframe",
								REFERER: "ref",
								URL: "url",
								SCREEN_WIDTH: "width",
								SCREEN_HEIGHT: "height",
								AVAILABLE_WIDTH: "awidth",
								AVAILABLE_HEIGHT: "aheight",
								SCREEN_LEFT: "left",
								SCREEN_TOP: "top",
								CSS_ALL: "css_all",
								CSS_FEATURE_QUERIES: "cfq",
								CSS_VAR: "cssvar",
								SCOPED_CSS: "scope",
								STICKY: "sticky",
								HAS_SCROLL: "scroll",
								PLUGIN_COUNT: "plugins",
								PHANTOM_MODE: "pmode",
								COLOR_DEPTH: "colorDepth",
								WEBSQL: "websql",
								DRAG_AND_DROP: "dnd",
								CUSTOM_ELEMENT: "ce",
								HAS_IMPORTS: "imp",
								TIME_ZONE: "tz",
								OGG: "ogg",
								DIALOG: "dialog",
								VIDEO: "video",
								AUDIO: "audio",
								AUDIO_CONTEXT: "ac",
								ANCESTOR: "ancestor",
								CHROME: "chrome",
								CHROME_WEB_STORE: "chromewebstore",
								RANDOM: "random",
								IE: "ie",
								USERDATA: "userdata",
								SRCSET: "srcset",
								HAS_CANVAS: "canvas",
								EMOJI: "emoji",
								HAS_PIC_ELEMENT: "pic",
								WC: "wc",
								CHROME_EXTENSION: "ext",
								FOCUS: "focus",
								IS_POPUP: "pop",
								HREF: "href",
								DEVORIENT: "devorient",
								DEVMOTION: "devmotion",
								CANVAS_HASH: "canvasfp",
								TIME: "time",
								FEATURE_TIMES: "feature_times",
								AVAIL_DIMENSIONS: "avail_dimensions",
								COLOR_AND_PIXEL_DEPTH: "colorPixelDepth",
								DIMENSIONS: "dimensions",
								TOP_WINDOW_DRIVER: "topWindowDriver",
								DOM_AUTOMATION: "domAutomation",
								WEBDRIVER_CACHE: "webdriverCache",
								EXTERNAL_URL: "externalUrl",
								OPERA_A: "operaA",
								OPERA_B: "operaB",
								WEB_DRIVER: "webDriver",
								ENGINE: "engine",
								IE_EXTERNAL: "ieExternal",
								FONT_DIFF: "fontDiff",
								FONTS: "fonts"
							});
						},
						null
					);
					__d(
						"FastBrowserDetectionFeature",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								UA: "ua",
								CSS_ALL: "css_all",
								CSS_FEATURE_QUERIES: "cfq",
								CSS_VAR: "cssvar",
								SCOPED_CSS: "scope",
								STICKY: "sticky",
								HAS_SCROLL: "scroll",
								PLUGIN_COUNT: "plugins",
								PHANTOM_MODE: "pmode",
								COLOR_DEPTH: "colorDepth",
								WEBSQL: "websql",
								DRAG_AND_DROP: "dnd",
								CUSTOM_ELEMENT: "ce",
								HAS_IMPORTS: "imp",
								TIME_ZONE: "tz",
								OGG: "ogg",
								DIALOG: "dialog",
								VIDEO: "video",
								AUDIO: "audio",
								CHROME: "chrome",
								CHROME_WEB_STORE: "chromewebstore",
								RANDOM: "random",
								IE: "ie",
								USERDATA: "userdata",
								SRCSET: "srcset",
								HAS_CANVAS: "canvas",
								HAS_PIC_ELEMENT: "pic",
								WC: "wc",
								CHROME_EXTENSION: "ext",
								DEVORIENT: "devorient",
								DEVMOTION: "devmotion",
								TIME: "time"
							});
						},
						null
					);
					__d(
						"PluginBrowserFeatures",
						["BrowserDetectionFeature", "FastBrowserDetectionFeature"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = {
								getBrowserFeaturesMap: function(a) {
									__p && __p();
									var c = h(),
										d = {},
										e = {},
										f = a
											? b("FastBrowserDetectionFeature")
											: b("BrowserDetectionFeature");
									ES(ES("Object", "keys", !1, f), "forEach", !0, function(a) {
										a = f[a];
										var b = h();
										try {
											a in i ? (d[a] = i[a]()) : (d[a] = "Not implemented");
										} catch (b) {
											d[a] = b.message;
										}
										e[a] = h() - b;
									});
									d[f.TIME] = h() - c;
									a || (d[b("BrowserDetectionFeature").FEATURE_TIMES] = e);
									return d;
								},
								getAllBrowserFeatures: function() {
									return ES(
										"JSON",
										"stringify",
										!1,
										this.getBrowserFeaturesMap(!1)
									);
								},
								getFastBrowserFeatures: function() {
									return ES(
										"JSON",
										"stringify",
										!1,
										this.getBrowserFeaturesMap(!0)
									);
								}
							};
							function g(a) {
								var b = 0,
									c = a.length;
								if (c === 0) return b;
								for (var d = 0; d < c; d++) {
									var e = a.charCodeAt(d);
									b = b * 32 - b + e;
									b |= 0;
								}
								return b;
							}
							function h() {
								if (!!window.performance && !!window.performance.now)
									return window.performance.now();
								else if (ES("Date", "now", !1)) return ES("Date", "now", !1);
								else return new Date();
							}
							var i = ((c = {}),
							(c[b("BrowserDetectionFeature").CSS_ALL] = function() {
								return "all" in document.documentElement.style;
							}),
							(c[
								b("BrowserDetectionFeature").CSS_FEATURE_QUERIES
							] = function() {
								var a = "CSS" in window && "supports" in window.CSS;
								return a || "supportsCSS" in window;
							}),
							(c[b("BrowserDetectionFeature").DRAG_AND_DROP] = function() {
								var a = document.createElement("div");
								return (
									"draggable" in a || ("ondragstart" in a && "ondrop" in a)
								);
							}),
							(c[b("BrowserDetectionFeature").OGG] = function() {
								var a = document.createElement("video"),
									b = !1;
								try {
									if ((b = !!a.canPlayType)) {
										a = a
											.canPlayType('video/ogg; codecs="theora"')
											.replace(/^no$/, "");
										b = a != "";
									}
								} catch (a) {}
								return b;
							}),
							(c[b("BrowserDetectionFeature").CSS_VAR] = function() {
								return (
									window.CSS != null &&
									window.CSS.supports != null &&
									window.CSS.supports("--fake-var", 0)
								);
							}),
							(c[b("BrowserDetectionFeature").SCOPED_CSS] = function() {
								var a = document.createElement("style");
								a.setAttribute("scoped", "true");
								return a.scoped === !0;
							}),
							(c[b("BrowserDetectionFeature").STICKY] = function() {
								var a = "position:",
									b = "sticky",
									c = ["-webkit-", "-moz-", "-o-", "-ms-"],
									d = document.createElement("a");
								d = d.style;
								d.cssText = a + c.join(b + ";" + a).slice(0, -a.length);
								return ES(d.position, "indexOf", !0, b) !== -1;
							}),
							(c[b("BrowserDetectionFeature").TIME_ZONE] = function() {
								var a = new Date();
								return a.getTimezoneOffset();
							}),
							(c[b("BrowserDetectionFeature").DIALOG] = function() {
								var a = document.createElement("dialog");
								return !!a.show;
							}),
							(c[b("BrowserDetectionFeature").VIDEO] = function() {
								var a = document.createElement("video");
								return !!a.canPlayType;
							}),
							(c[b("BrowserDetectionFeature").AUDIO] = function() {
								var a = document.createElement("audio");
								return !!a.canPlayType;
							}),
							(c[b("BrowserDetectionFeature").AUDIO_CONTEXT] = function() {
								try {
									var a = new window.AudioContext();
									a = a.createOscillator();
									a.frequency.value = 10;
									return a.frequency.value == 10;
								} catch (a) {
									return !1;
								}
							}),
							(c[b("BrowserDetectionFeature").ANCESTOR] = function() {
								var a = "";
								if (
									!!window.location &&
									!!location.ancestorOrigins &&
									location.ancestorOrigins.length > 0
								) {
									a = location.ancestorOrigins.item(0);
									for (var b = 1; b < location.ancestorOrigins.length; ++b)
										a = a + "," + location.ancestorOrigins.item(b);
								}
								return a;
							}),
							(c[b("BrowserDetectionFeature").RANDOM] = function() {
								return (
									(!!window.crypto && !!window.crypto.getRandomValues) ||
									(!!window.msCrypto && !!window.msCrypto.getRandomValues)
								);
							}),
							(c[b("BrowserDetectionFeature").USERDATA] = function() {
								var a = document.createElement("div");
								return !a.addBehavior;
							}),
							(c[b("BrowserDetectionFeature").CHROME_EXTENSION] = function() {
								return (
									!!window.chrome &&
									!!window.chrome.runtime &&
									!!window.chrome.runtime.id
								);
							}),
							(c[b("BrowserDetectionFeature").IS_POPUP] = function() {
								return !!window.opener && window.opener !== window;
							}),
							(c[b("BrowserDetectionFeature").HREF] = function() {
								if (
									!!window.opener &&
									!!window.opener.location &&
									!!window.opener.location.href
								)
									return window.opener.location.href;
								return !!window.location && !!window.location.href
									? window.location.href
									: "";
							}),
							(c[b("BrowserDetectionFeature").HAS_CANVAS] = function() {
								var a = document.createElement("canvas");
								return !!(a.getContext && a.getContext("2d"));
							}),
							(c[b("BrowserDetectionFeature").EMOJI] = function() {
								__p && __p();
								if (!i[b("BrowserDetectionFeature").HAS_CANVAS]()) return !1;
								var a = window.devicePixelRatio || 1;
								a = 12 * a;
								var c = document.createElement("canvas");
								c = c.getContext("2d");
								c.fillStyle = "#f00";
								c.textBaseline = "top";
								c.font = "32px Arial";
								c.fillText("\ud83d\udc28", 0, 0);
								return c.getImageData(a, a, 1, 1).data[0] !== 0;
							}),
							(c[b("BrowserDetectionFeature").CANVAS_HASH] = function() {
								__p && __p();
								if (!i[b("BrowserDetectionFeature").HAS_CANVAS]()) return 0;
								var a = document.createElement("canvas"),
									c = a.getContext("2d"),
									d = "text";
								c.textBaseline = "top";
								c.font = "14px Arial";
								c.textBaseline = "alphabetic";
								c.fillStyle = "#f60";
								c.fillRect(125, 1, 62, 20);
								c.fillStyle = "#069";
								c.fillText(d, 2, 15);
								c.fillStyle = "rgba(102, 204, 0, 0.7)";
								c.fillText(d, 4, 17);
								return g(a.toDataURL());
							}),
							(c[b("BrowserDetectionFeature").UA] = function() {
								return navigator.userAgent;
							}),
							(c[b("BrowserDetectionFeature").VERSION] = function() {
								return navigator.appVersion;
							}),
							(c[b("BrowserDetectionFeature").PLATFORM] = function() {
								return navigator.platform;
							}),
							(c[b("BrowserDetectionFeature").IS_IFRAME] = function() {
								return parent !== window;
							}),
							(c[b("BrowserDetectionFeature").REFERER] = function() {
								return document.referrer;
							}),
							(c[b("BrowserDetectionFeature").URL] = function() {
								return document.URL;
							}),
							(c[b("BrowserDetectionFeature").SCREEN_HEIGHT] = function() {
								return screen.height;
							}),
							(c[b("BrowserDetectionFeature").SCREEN_WIDTH] = function() {
								return screen.width;
							}),
							(c[b("BrowserDetectionFeature").AVAILABLE_HEIGHT] = function() {
								return screen.height;
							}),
							(c[b("BrowserDetectionFeature").AVAILABLE_WIDTH] = function() {
								return screen.width;
							}),
							(c[b("BrowserDetectionFeature").SCREEN_LEFT] = function() {
								return window.screenLeft ? window.screenLeft : window.screenX;
							}),
							(c[b("BrowserDetectionFeature").SCREEN_TOP] = function() {
								return window.screenTop ? window.screenTop : window.screenY;
							}),
							(c[b("BrowserDetectionFeature").HAS_SCROLL] = function() {
								return "scrollBehavior" in document.documentElement.style;
							}),
							(c[b("BrowserDetectionFeature").HAS_PIC_ELEMENT] = function() {
								return "HTMLPictureElement" in window;
							}),
							(c[b("BrowserDetectionFeature").PLUGIN_COUNT] = function() {
								return navigator.plugins.length;
							}),
							(c[b("BrowserDetectionFeature").PHANTOM_MODE] = function() {
								try {
									null[0]();
								} catch (b) {
									var a = b.stack;
									if (a.search("phantomjs") != -1) return !0;
								}
								return !!window.callPhantom || !!window._phantom;
							}),
							(c[b("BrowserDetectionFeature").COLOR_DEPTH] = function() {
								return screen.colorDepth;
							}),
							(c[b("BrowserDetectionFeature").WEBSQL] = function() {
								return !!window.openDatabase;
							}),
							(c[b("BrowserDetectionFeature").CUSTOM_ELEMENT] = function() {
								return "registerElement" in document;
							}),
							(c[b("BrowserDetectionFeature").HAS_IMPORTS] = function() {
								return "import" in document.createElement("link");
							}),
							(c[b("BrowserDetectionFeature").CHROME] = function() {
								return !!window.chrome;
							}),
							(c[b("BrowserDetectionFeature").CHROME_WEB_STORE] = function() {
								return !!window.chrome && !!window.chrome.webstore;
							}),
							(c[b("BrowserDetectionFeature").IE] = function() {
								return !window.ActiveXObject;
							}),
							(c[b("BrowserDetectionFeature").WC] = function() {
								return "willChange" in document.documentElement.style;
							}),
							(c[b("BrowserDetectionFeature").DEVORIENT] = function() {
								return "DeviceOrientationEvent" in window;
							}),
							(c[b("BrowserDetectionFeature").DEVMOTION] = function() {
								return "DeviceMotionEvent" in window;
							}),
							(c[b("BrowserDetectionFeature").SRCSET] = function() {
								return "srcset" in document.createElement("img");
							}),
							(c[b("BrowserDetectionFeature").AVAIL_DIMENSIONS] = function() {
								return screen.availHeight <= 1 || screen.availWidth <= 1;
							}),
							(c[
								b("BrowserDetectionFeature").COLOR_AND_PIXEL_DEPTH
							] = function() {
								return (
									screen.colorDepth <= 8 ||
									screen.pixelDepth <= 8 ||
									window.devicePixelRatio <= 0
								);
							}),
							(c[b("BrowserDetectionFeature").DIMENSIONS] = function() {
								return screen.height <= 1 || screen.width <= 1;
							}),
							(c[b("BrowserDetectionFeature").TOP_WINDOW_DRIVER] = function() {
								return top == null ||
									top.window == null ||
									(document.location.ancestorOrigins != null &&
										document.location.ancestorOrigins.length > 0 &&
										document.location.ancestorOrigins[0] !==
											document.location.protocol +
												"//" +
												document.location.host) ||
									top.window.name == null
									? void 0
									: ES(top.window.name, "indexOf", !0, "driver") > -1;
							}),
							(c[b("BrowserDetectionFeature").DOM_AUTOMATION] = function() {
								return (
									document.documentElement.hasAttribute("webdriver") ||
									window.domAutomation != null ||
									window.domAutomationController != null ||
									window._WEBDRIVER_ELEM_CACHE != null
								);
							}),
							(c[b("BrowserDetectionFeature").WEBDRIVER_CACHE] = function() {
								return window._WEBDRIVER_ELEM_CACHE != null;
							}),
							(c[b("BrowserDetectionFeature").EXTERNAL_URL] = function() {
								return window.isExternalUrlSafeForNavigation != null;
							}),
							(c[b("BrowserDetectionFeature").OPERA_A] = function() {
								return (
									window.opera != null &&
									window.opera._browserjsran != null &&
									window.opera.browserjsran === 0
								);
							}),
							(c[b("BrowserDetectionFeature").OPERA_B] = function() {
								return (
									window.opera != null &&
									window.opera._browserjsran != null &&
									window.opera.browserjsran === !1
								);
							}),
							(c[b("BrowserDetectionFeature").WEB_DRIVER] = function() {
								return (
									window.webdriver != null ||
									document.webdriver != null ||
									document.documentElement.hasAttribute("webdriver")
								);
							}),
							(c[b("BrowserDetectionFeature").ENGINE] = function() {
								__p && __p();
								var a = {},
									b = [],
									c = "unknown",
									d = {
										trident: 0,
										gecko: 0,
										presto: 0,
										webkit: 0,
										unknown: -1
									},
									e = document.createElement("fake");
								for (var f in e.style) {
									e = (/^([A-Za-z][a-z]*)[A-Z]/.exec(f) || [])[1];
									e != null && (e = e.toLowerCase());
									e in a ? a[e]++ : (a[e] = 1);
								}
								for (var g in a) b.push([g, a[g]]);
								b.sort(function(a, b) {
									return b[1] - a[1];
								}).slice(0, 10);
								for (var e = 0, a = b.length; e < a; e++) {
									var h = b[e][0].toLowerCase();
									h === "moz"
										? (d.gecko += 5)
										: h === "ms"
											? (d.trident += 5)
											: h === "get"
												? d.webkit++
												: h === "webkit"
													? (d.webkit += 5)
													: (h === "o" || h === "xv") && (d.presto += 2);
								}
								"onhelp" in window && d.trident++;
								"maxConnectionsPerServer" in window && d.trident++;
								try {
									window.ActiveXObject.toString != null && (d.trident += 5);
								} catch (a) {}
								Function.prototype.toSource !== void 0 && (d.gecko += 5);
								for (var i in d) d[i] > d[c] && (c = i);
								return c;
							}),
							(c[b("BrowserDetectionFeature").IE_EXTERNAL] = function() {
								var a = [
										"AddChannel",
										"AddDesktopComponent",
										"AddFavorite",
										"AddSearchProvider",
										"AddService",
										"AddToFavoritesBar",
										"AutoCompleteSaveForm",
										"AutoScan",
										"bubbleEvent",
										"ContentDiscoveryReset",
										"ImportExportFavorites",
										"InPrivateFilteringEnabled",
										"IsSearchProviderInstalled",
										"IsServiceInstalled",
										"IsSubscribed",
										"msActiveXFilteringEnabled",
										"msAddSiteMode",
										"msAddTrackingProtectionList",
										"msClearTile",
										"msEnableTileNotificationQueue",
										"msEnableTileNotificationQueueForSquare150x150",
										"msEnableTileNotificationQueueForSquare310x310",
										"msEnableTileNotificationQueueForWide310x150",
										"msIsSiteMode",
										"msIsSiteModeFirstRun",
										"msPinnedSiteState",
										"msProvisionNetworks",
										"msRemoveScheduledTileNotification",
										"msReportSafeUrl",
										"msScheduledTileNotification",
										"msSiteModeActivate",
										"msSiteModeAddButtonStyle",
										"msSiteModeAddJumpListItem",
										"msSiteModeAddThumbBarButton",
										"msSiteModeClearBadge",
										"msSiteModeClearIconOverlay",
										"msSiteModeClearJumpList",
										"msSiteModeCreateJumpList",
										"msSiteModeRefreshBadge",
										"msSiteModeSetIconOverlay",
										"msSiteModeShowButtonStyle",
										"msSiteModeShowJumpList",
										"msSiteModeShowThumbBar",
										"msSiteModeUpdateThumbBarButton",
										"msStartPeriodicBadgeUpdate",
										"msStartPeriodicTileUpdate",
										"msStartPeriodicTileUpdateBatch",
										"msStopPeriodicBadgeUpdate",
										"msStopPeriodicTileUpdate",
										"msTrackingProtectionEnabled",
										"NavigateAndFind",
										"raiseEvent",
										"setContextMenu",
										"ShowBrowserUI",
										"menuArguments",
										"onvisibilitychange",
										"scrollbar",
										"selectableContent",
										"version",
										"visibility",
										"mssitepinned",
										"AddUrlAuthentication",
										"CloseRegPopup",
										"FeatureEnabled",
										"GetJsonWebData",
										"GetRegValue",
										"Log",
										"LogShellErrorsOnly",
										"OpenPopup",
										"ReadFile",
										"RunGutsScript",
										"SaveRegInfo",
										"SetAppMaximizeTimeToRestart",
										"SetAppMinimizeTimeToRestart",
										"SetAutoStart",
										"SetAutoStartMinimized",
										"SetMaxMemory",
										"ShareEventFromBrowser",
										"ShowPopup",
										"ShowRadar",
										"WriteFile",
										"WriteRegValue",
										"summonWalrus"
									],
									b = {};
								if (window.external != null)
									for (var c = 0; c < a.length; c++) {
										var d = a[c];
										b[d] = window.external[d] != null;
									}
								return ES("JSON", "stringify", !1, b);
							}),
							(c[b("BrowserDetectionFeature").FONT_DIFF] = function() {
								__p && __p();
								var a = document.createElement("div"),
									b = document.createElement("div");
								a.style.top = "-1000px";
								a.style.setProperty(
									"-webkit-text-size-adjust",
									"auto",
									"important"
								);
								a.style.fontSize = "xx-small";
								a.style.position = "absolute";
								b.style.setProperty(
									"-webkit-text-size-adjust",
									"auto",
									"important"
								);
								b.style.fontSize = "1%";
								b.textContent = "l";
								a.appendChild(b);
								document.body.appendChild(a);
								b = b.clientHeight;
								document.body.removeChild(a);
								return b;
							}),
							(c[b("BrowserDetectionFeature").FONTS] = function() {
								__p && __p();
								var a = [
										"Ubuntu",
										"Utopia",
										"URW Gothic L",
										"Bitstream Charter",
										"FreeMono",
										"DejaVu Sans",
										"Droid Serif",
										"Liberation Sans",
										"Vrinda",
										"Kartika",
										"Sylfaen",
										"CordiaUPC",
										"Angsana New Bold Italic",
										"DFKai-SB",
										"Ebrima",
										"Lao UI",
										"Segoe UI Symbol",
										"Vijaya",
										"Roboto",
										"Apple Color Emoji",
										"Baskerville",
										"Marker Felt",
										"Apple Symbols",
										"Chalkboard",
										"Herculanum",
										"Skia"
									],
									b = ["monospace", "sans-serif", "serif"],
									c = "mmmmmmmmmmlli",
									d = document.body,
									e = document.createElement("span"),
									f = {},
									g = {},
									h = {};
								e.style.fontSize = "72px";
								e.textContent = c;
								for (var c = 0; c < b.length; c++) {
									var i = b[c];
									e.style.fontFamily = i;
									d.appendChild(e);
									f[i] = e.offsetWidth;
									g[i] = e.offsetHeight;
									d.removeChild(e);
								}
								for (var i = 0; i < a.length; i++) {
									c = a[i];
									var j = !1;
									for (var k = 0; k < b.length; k++) {
										var l = b[k];
										e.style.fontFamily = c + "," + l;
										d.appendChild(e);
										l = e.offsetWidth != f[l] || e.offsetHeight != g[l];
										d.removeChild(e);
										j = j || l;
									}
									h[c] = j;
								}
								return ES("JSON", "stringify", !1, h);
							}),
							c);
							e.exports = a;
						},
						null
					);
					__d(
						"ANWebVideoLogger.anweb",
						[
							"AdNetworkVideoEventType",
							"AudienceNetworkVideoLoggingUtils",
							"PluginBrowserFeatures"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = b("AudienceNetworkVideoLoggingUtils").getFocus,
								h = b("AudienceNetworkVideoLoggingUtils").getStatsFields,
								i = b("AudienceNetworkVideoLoggingUtils").isIPhoneOrIPod;
							a = (function() {
								__p && __p();
								function a(a, b, c, d, e) {
									__p && __p();
									var f = this;
									this.$1 = a;
									this.$2 = b;
									this.$3 = c;
									this.$4 = d;
									this.$5 = e;
									this.$6 = !1;
									this.$2.addEventListener(
										"play",
										function(a) {
											f.$6 ? f.$7() : (f.$6 = !0);
										},
										!1
									);
									this.$2.addEventListener(
										"pause",
										function(a) {
											f.$2.getDuration() !== f.$2.getCurrentTime() && f.$8();
										},
										!1
									);
								}
								var c = a.prototype;
								c.setPlayer = function(a) {
									if (this.$2 != a)
										throw new Error("players should be the same");
								};
								c.logMRCEvent = function(a, c, d, e, f, g) {
									f = this.$9(c, d, e, a);
									this.$10(b("AdNetworkVideoEventType").VIDEO_MRC, f);
								};
								c.logImpressionEvent = function(a, b, c, d) {
									this.$5();
								};
								c.logViewableImpressionEvent = function(a, c, d) {
									c = this.$9(c, d, null, a);
									this.$10(
										b("AdNetworkVideoEventType").VIDEO_VIEWABLE_IMPRESSION,
										c
									);
								};
								c.logTimeEvent = function(a, c, d, e, f, g, h) {
									f = this.$9(a, c, d, e);
									this.$10(b("AdNetworkVideoEventType").VIDEO_TIME, f);
									h();
								};
								c.logMuteEvent = function() {
									if (!this.$2.isMuted()) return;
									this.$11(b("AdNetworkVideoEventType").VIDEO_MUTE);
								};
								c.logUnMuteEvent = function() {
									if (this.$2.isMuted()) return;
									this.$11(b("AdNetworkVideoEventType").VIDEO_UNMUTE);
								};
								c.$8 = function() {
									this.$11(b("AdNetworkVideoEventType").VIDEO_PAUSE);
								};
								c.$7 = function() {
									this.$11(b("AdNetworkVideoEventType").VIDEO_UNPAUSE);
								};
								c.$11 = function(a) {
									this.$10(a, { time: this.$2.getCurrentTime() });
								};
								c.$9 = function(a, b, c, d) {
									var e = c ? c.offsetRect : null,
										f = c ? c.offsetHeight : null,
										j = c ? c.offsetWidth : null,
										k = c ? c.viewportRect : null;
									if (i(navigator.userAgent) && j === 0 && f === 0) {
										var l = this.$2.getWidth(),
											m = this.$2.getHeight();
										l !== null && m !== null && ((j = l), (f = m));
									}
									return babelHelpers["extends"](
										{
											time: b,
											ptime: a,
											pt: e == null ? void 0 : e.y,
											pl: e == null ? void 0 : e.x,
											ph: typeof f === "number" ? f : void 0,
											pw: typeof j === "number" ? j : void 0,
											vph: k == null ? void 0 : k.height,
											vpw: k == null ? void 0 : k.width,
											inline: Number(this.$2.isFullscreen()),
											autoplay: 1,
											detected_page_domain:
												c && c.pageDomain !== null ? c.pageDomain : void 0,
											detected_page_url:
												c && c.pageURL !== null ? c.pageURL : void 0,
											domain_detection_method: c ? c.domainDetectionMethod : 0,
											bf: this.$12(),
											focus: g()
										},
										h(d)
									);
								};
								c.$12 = function() {
									try {
										return b("PluginBrowserFeatures").getAllBrowserFeatures();
									} catch (a) {
										return "";
									}
								};
								c.$10 = function(a, b) {
									if (this.$1) return;
									this.$4({
										name: "video",
										params: { key: this.$3, payload: { type: a, params: b } }
									});
								};
								return a;
							})();
							e.exports = a;
						},
						null
					);
					__d(
						"ANWebVideoManager",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a) {
									this.$1 = a;
								}
								var b = a.prototype;
								b.getViewabilityMeasurementElement = function() {
									return this.$1.getVideoSlot();
								};
								b.getAdWidth = function() {
									return this.$1.getWidth() || 0;
								};
								b.getAdHeight = function() {
									return this.$1.getHeight() || 0;
								};
								b.getGatingConfig = function() {
									return {
										killswitches: [],
										gatekeepers: [],
										qes: [],
										qrts: {}
									};
								};
								return a;
							})();
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
							var l = (function() {
								__p && __p();
								function a() {
									__p && __p();
									var a = this;
									this.$10 = function(c) {
										var d = b("nullthrows")(a.$7);
										d.setMuted(!d.isMuted());
										c.stopPropagation();
									};
									this.$11 = function(c) {
										var d = b("nullthrows")(a.$7);
										d.getVideoElement().paused ? d.play(!0) : d.pause(!0);
										c.stopPropagation();
									};
									this.$15 = function() {
										a.$16();
									};
									this.$12 = function(b) {
										a.$18(), a.$19();
									};
									this.$14 = function() {
										a.$18();
									};
									this.$13 = function() {
										a.$19();
									};
									var c = this.$9(),
										d = c[0],
										e = c[1],
										f = c[2],
										g = c[3];
									c = c[4];
									this.$2 = d;
									this.$3 = e;
									this.$4 = f;
									this.$5 = g;
									this.$6 = c;
									this.$8 = null;
								}
								var c = a.prototype;
								c.$9 = function() {
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
								c.attach = function(a) {
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
								c.detach = function() {
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
								c.$17 = function() {
									this.$8 != null &&
										(window.clearTimeout(this.$8), (this.$8 = null));
								};
								c.$18 = function() {
									this.$2.classList.remove("_7jum"), this.$17();
								};
								c.$19 = function() {
									var b = this;
									this.$17();
									this.$8 = window.setTimeout(function() {
										b.$2.classList.add("_7jum");
									}, a.$1);
								};
								c.$16 = function() {
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
								return a;
							})();
							l.$1 = 3e3;
							var m = (function() {
									__p && __p();
									function a() {
										var a = this;
										this.$4 = function(c) {
											var d = b("nullthrows")(a.$2);
											d.setMuted(!d.isMuted());
											c.stopPropagation();
										};
										this.$1 = this.$3();
									}
									var c = a.prototype;
									c.$3 = function() {
										var a = i("_1xj9");
										a.addEventListener("click", this.$4, !1);
										return a;
									};
									c.attach = function(a) {
										this.$2 != null && (this.detach(), (this.$2 = null)),
											(this.$2 = a),
											a.getElement().appendChild(this.$1);
									};
									c.detach = function() {
										this.$1.parentNode &&
											this.$1.parentNode.removeChild(this.$1);
									};
									return a;
								})(),
								n = (function() {
									__p && __p();
									function a(a, b) {
										this.$1 = this.$3(a, b);
									}
									var b = a.prototype;
									b.$3 = function(a, b) {
										return i(
											"_3c3s" + (a ? " _7kbt" : "") + (b ? " _7kbu" : "")
										);
									};
									b.attach = function(a) {
										this.$2 != null && (this.detach(), (this.$2 = null)),
											(this.$2 = a),
											a.getElement().appendChild(this.$1);
									};
									b.detach = function() {
										this.$1.parentNode &&
											this.$1.parentNode.removeChild(this.$1);
									};
									a.pauseCard = function() {
										return new a(!0, !1);
									};
									a.autoplayCard = function() {
										return new a(!1, !0);
									};
									return a;
								})(),
								o = (function() {
									__p && __p();
									function a(a) {
										__p && __p();
										var c = this;
										this.$7 = function(a) {
											var d = b("nullthrows")(c.$5);
											d.play();
											a.stopPropagation();
										};
										this.$1 = a;
										a = this.$6();
										var d = a[0],
											e = a[1];
										a = a[2];
										this.$2 = d;
										this.$3 = e;
										this.$4 = a;
									}
									var c = a.prototype;
									c.$6 = function() {
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
									c.attach = function(a) {
										this.$5 != null && (this.detach(), (this.$5 = null)),
											(this.$5 = a),
											a.getElement().appendChild(this.$2),
											(a.getVideoElement().loop = !1),
											this.$4.addEventListener("click", this.$7),
											this.$2.addEventListener("click", this.$8);
									};
									c.$8 = function(a) {
										a.stopPropagation();
									};
									c.detach = function() {
										this.$2.parentNode &&
											(this.$2.parentNode.removeChild(this.$2),
											this.$4.removeEventListener("click", this.$7),
											this.$2.removeEventListener("click", this.$8));
									};
									return a;
								})(),
								p = (function() {
									__p && __p();
									function a(a) {
										this.$1 = a;
										a = this.$4();
										this.$2 = a;
									}
									var c = a.prototype;
									c.$4 = function() {
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
									c.attach = function(a) {
										this.$3 != null && (this.detach(), (this.$3 = null)),
											this.$2.addEventListener("click", this.$5),
											(this.$3 = a),
											a.getElement().appendChild(this.$2);
									};
									c.$5 = function(a) {
										a.stopPropagation();
									};
									c.detach = function() {
										this.$2.parentNode &&
											(this.$2.parentNode.removeChild(this.$2),
											this.$2.removeEventListener("click", this.$5));
									};
									return a;
								})(),
								q = ES("Object", "freeze", !1, {
									controls: "mute_only",
									endCard: "none",
									pauseCard: "play_button"
								});
							a = (function() {
								__p && __p();
								function a(a, b, c, d, e, f) {
									__p && __p();
									var g = this;
									this.$5 = !1;
									this.$6 = !1;
									this.$16 = function() {
										g.$12.loop || (g.$11.classList.add("_7kc2"), (g.$5 = !0));
									};
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
									this.$10 =
										(d.endCard || q.endCard) === "v1" ? new o(b) : null;
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
								var c = a.prototype;
								c.$14 = function() {
									__p && __p();
									var a = this,
										c = i("_6pfr");
									c.style.backgroundImage = "url(" + this.$2 + ")";
									if (this.$4) {
										var d = new Image();
										d.addEventListener("load", function() {
											a.$4 && a.$4();
										});
										d.src = this.$2;
									}
									d = i(b("joinClasses")("_1xj7", "_7jun", "_7kc3"), [
										c,
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
									c = document.defaultView.HTMLVideoElement;
									c = k(d, "._1xj8", c);
									c.poster = this.$2;
									c.setAttribute("webkit-playsinline", "true");
									c.setAttribute("playsinline", "true");
									return [d, c];
								};
								c.$15 = function() {
									var a = this;
									this.$11.addEventListener("click", function(b) {
										a.$12.paused ? a.play(!0) : a.pause(!0),
											a.$3 && a.$3(),
											b.stopPropagation();
									});
									this.$12.addEventListener("ended", this.$16);
									var b = function(b) {
										return a.pause(!0);
									};
									this.$12.addEventListener("webkitendfullscreen", b);
									this.$12.addEventListener("fullscreenchange", b);
									this.$12.addEventListener("webkitfullscreenchange", b);
								};
								c.getElement = function() {
									return this.$11;
								};
								c.setMuted = function(a) {
									(this.$13 = a),
										(this.$12.muted = a),
										this.$11.classList.toggle("_7jun", this.$13);
								};
								c.isMuted = function() {
									return this.$13;
								};
								c.play = function(a) {
									__p && __p();
									var c = this;
									this.$6 = !0;
									this.$5 = this.$5 && !a;
									a = this.$12.play();
									if (a instanceof Promise)
										return a
											.then(function() {
												c.$11.classList.remove("_7juo"),
													c.$11.classList.remove("_7kc2"),
													c.$11.classList.remove("_7kc3");
											})
											["catch"](function(a) {
												c.$11.classList.add("_7juo");
												throw a;
											});
									else {
										this.$11.classList.remove("_7juo");
										return b("NativePromise").resolve();
									}
								};
								c.pause = function(a) {
									(this.$5 = this.$5 || !!a),
										this.$12.pause(),
										this.$11.classList.add("_7juo");
								};
								c.wasManuallyPaused = function() {
									return this.$5;
								};
								c.hasPlayed = function() {
									return this.$6;
								};
								c.getVideoElement = function() {
									return this.$12;
								};
								c.getDuration = function() {
									return this.$12 == null
										? 0
										: Math.round(this.$12.duration * 1e3) || 0;
								};
								c.getCurrentTime = function() {
									return this.$12 == null
										? 0
										: Math.round(this.$12.currentTime * 1e3);
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(a, b, c, d, e, f) {
									(this.$2 = a),
										(this.$3 = b),
										(this.$1 = c),
										(this.$4 = d),
										(this.$5 = e),
										(this.$6 = f);
								}
								var b = a.prototype;
								b.$7 = function() {
									__p && __p();
									var a = this,
										b = h(
											"_6qhu" +
												(this.$4 === "hide" ? " _6qhv" : "") +
												(this.$4 === "report" ? " _6qhw" : "")
										),
										c = h("_6qhx");
									c.innerText =
										this.$4 === "hide"
											? this.$2.finished_hide_ad
											: this.$2.finished_report_ad;
									var d = h("_6qhy");
									d.innerText = this.$2.finished_description;
									var e = h("_6qh7 _6qh8", [h("_6qhz")]);
									e.appendChild(document.createTextNode(this.$3.title));
									var f = document.createElement("img");
									f.className = "_6qh-";
									f.src = this.$1;
									var g = h("_6qh_");
									g.textContent = this.$2.manage_ad_preferences;
									var i = document.createElement("a");
									i.href = this.$2.manage_ad_preferences_uri;
									i.target = "_blank";
									i.className = "_6qi0";
									i.appendChild(h("_6qi1"));
									i.appendChild(g);
									g = h("_6qi2", [f, e]);
									f = document.createElement("a");
									f.className = "_6qi3";
									this.$6 != null && (f.href = this.$6);
									this.$6 == null &&
										f.addEventListener("click", function(b) {
											a.$5();
										});
									return h("_6qi4", [b, c, d, g, i, f]);
								};
								b.render = function() {
									var a = h("_6qhb _6qi5"),
										b = this.$7();
									a.appendChild(b);
									return a;
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(a, b, c, d) {
									(this.$3 = c), (this.$4 = d), (this.$1 = b), (this.$2 = a);
								}
								var c = a.prototype;
								c.$5 = function(a, c, d, e, f) {
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
								c.render = function() {
									var a = this,
										b = this.$5(
											this.$2.hide_ad,
											"_6qgk",
											this.$2.hide_ad_description,
											function() {
												a.$3("hide");
											}
										),
										c = this.$5(
											this.$2.report_ad,
											"_6qgl",
											this.$2.report_ad_description,
											function() {
												a.$3("report");
											}
										),
										d = this.$5(
											this.$2.why_am_i_seeing_this,
											"_6qhp",
											null,
											function() {
												a.$3();
											},
											this.$1
										),
										e = document.createElement("a");
									e.className = "_6qi3";
									e.addEventListener("click", function(b) {
										b.preventDefault(), a.$4();
									});
									return h("_6qhb _6qhq", [b, c, d, e]);
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(a, b, c, d, e) {
									(this.$3 = a),
										(this.$2 = b),
										(this.$1 = c),
										(this.$4 = d),
										(this.$5 = e);
								}
								var b = a.prototype;
								b.$6 = function() {
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
								b.$7 = function() {
									__p && __p();
									var a = this,
										b =
											this.$2 === "hide"
												? this.$3.hide_ad_options
												: this.$3.report_ad_options;
									b = ES(b, "map", !0, function(b) {
										var c = document.createElement("button");
										c.className = "_6qh7";
										c.textContent = b.title;
										c.addEventListener("click", function() {
											c.classList.add("_6qh8"), a.$1(b);
										});
										return c;
									});
									b = h("_6qh9", b);
									b = h("_6qha", [b]);
									if (this.$5) {
										var c = document.createElement("a");
										c.className = "_6qi3";
										c.addEventListener("click", function(b) {
											b.preventDefault(), a.$4();
										});
										b.appendChild(c);
									}
									return b;
								};
								b.render = function() {
									var a = h("_6qhb _6qhc"),
										b = this.$6(),
										c = this.$7();
									a.appendChild(b);
									a.appendChild(c);
									return a;
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
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
								var c = a.prototype;
								c.$15 = function() {
									this.$3 == null &&
										((this.$3 = h("_6qhd")),
										this.getRoot().appendChild(b("nullthrows")(this.$3)));
									return b("nullthrows")(this.$3);
								};
								c.$16 = function() {
									this.$3 != null &&
										(this.getRoot().removeChild(b("nullthrows")(this.$3)),
										(this.$3 = null));
								};
								c.$17 = function() {
									return h("_6qhe");
								};
								c.$18 = function(a) {
									var b = this.$15(),
										c = this.$17();
									this.$19();
									c.appendChild(a);
									b.appendChild(c);
								};
								c.$19 = function() {
									var a = this.$15();
									while (a.firstChild) a.removeChild(a.firstChild);
								};
								c.$20 = function() {
									var a = this.$15(),
										b = h("_6qhf");
									this.$19();
									b.innerText = this.$7.ad_removed;
									a.appendChild(b);
								};
								c.onInitialStepDone = function() {
									this.$12 != null && this.$21();
								};
								c.$21 = function() {
									var a = this,
										c = new (b("ANXOutOptionStep"))(
											this.$7,
											b("nullthrows")(this.$12),
											function(b) {
												a.$22(b);
											},
											function() {
												a.$9(), a.$16();
											},
											this.$14
										);
									this.$18(c.render());
								};
								c.$22 = function(a) {
									__p && __p();
									var c = this;
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
										function() {
											c.$20();
										},
										this.$13
									);
									this.$18(a.render());
								};
								c.$23 = function() {
									var a = this,
										c = new (b("ANXOutInitialStep"))(
											this.$7,
											this.$6,
											function(b) {
												b === "hide" && a.$10(a.$7.dislike_option),
													b === "report" && a.$10(a.$7.follow_up_report),
													(a.$12 = b),
													a.onInitialStepDone();
											},
											function() {
												a.$9(), a.$16();
											}
										);
									this.$18(c.render());
								};
								c.getButton = function() {
									return b("nullthrows")(this.$4);
								};
								c.getRoot = function() {
									return b("nullthrows")(this.$2);
								};
								c.render = function() {
									__p && __p();
									var a = this;
									this.$2 = h("_6qhh", []);
									if (this.$4 == null) {
										var b = document.createElement("a");
										b.href = "#";
										b.className = "_6qhg";
										this.getRoot().appendChild(b);
										this.$4 = b;
									}
									this.$4.addEventListener("click", function(b) {
										b.preventDefault(), a.$23(), a.$8();
									});
									this.$1.appendChild(this.getRoot());
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a() {}
								var b = a.prototype;
								b.onPartiallyEntered = function() {};
								b.onMostlyEntered = function() {};
								b.onCompletelyEntered = function() {};
								b.onPartiallyLeft = function() {};
								b.onMostlyLeft = function() {};
								b.onCompletelyLeft = function() {};
								b.onBecameInvalid = function() {};
								b.onBecameValid = function() {};
								return a;
							})();
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
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(b, a);
								function b(b, c) {
									var d;
									d = a.call(this) || this;
									d.$AdImpressionBehavior1 = !0;
									d.$AdImpressionBehavior2 = !0;
									d.$AdImpressionBehavior3 = !1;
									d.$AdImpressionBehavior4 = !1;
									d.$AdImpressionBehavior5 = b;
									d.$AdImpressionBehavior6 = c;
									return d;
								}
								var c = b.prototype;
								c.onPartiallyEntered = function() {
									(this.$AdImpressionBehavior4 = !0),
										this.$AdImpressionBehavior7();
								};
								c.onCompletelyLeft = function() {
									this.$AdImpressionBehavior4 = !1;
								};
								c.onBecameInvalid = function() {
									this.$AdImpressionBehavior2 && this.$AdImpressionBehavior6(),
										(this.$AdImpressionBehavior2 = !1);
								};
								c.mediaLoaded = function() {
									(this.$AdImpressionBehavior3 = !0),
										this.$AdImpressionBehavior7();
								};
								c.$AdImpressionBehavior7 = function() {
									if (
										!this.$AdImpressionBehavior3 ||
										!this.$AdImpressionBehavior4
									)
										return;
									this.$AdImpressionBehavior1 && this.$AdImpressionBehavior5();
									this.$AdImpressionBehavior1 = !1;
									this.$AdImpressionBehavior2 = !1;
								};
								return b;
							})(b("OnScreenBehavior.anweb"));
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
							var g = 1e3;
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(b, a);
								function b(b) {
									var c;
									c = a.call(this) || this;
									c.$AdMostlyViewableImpressionBehavior4 = null;
									c.$AdMostlyViewableImpressionBehavior1 = !0;
									c.$AdMostlyViewableImpressionBehavior2 = !1;
									c.$AdMostlyViewableImpressionBehavior3 = !1;
									c.$AdMostlyViewableImpressionBehavior5 = b;
									return c;
								}
								var c = b.prototype;
								c.onMostlyEntered = function() {
									(this.$AdMostlyViewableImpressionBehavior3 = !0),
										this.$AdMostlyViewableImpressionBehavior2 &&
											this.$AdMostlyViewableImpressionBehavior6();
								};
								c.onMostlyLeft = function() {
									(this.$AdMostlyViewableImpressionBehavior3 = !1),
										window.clearTimeout(
											this.$AdMostlyViewableImpressionBehavior4
										);
								};
								c.mediaLoaded = function() {
									(this.$AdMostlyViewableImpressionBehavior2 = !0),
										this.$AdMostlyViewableImpressionBehavior3 &&
											this.$AdMostlyViewableImpressionBehavior6();
								};
								c.$AdMostlyViewableImpressionBehavior6 = function() {
									var a = this;
									this.$AdMostlyViewableImpressionBehavior1 &&
										this.$AdMostlyViewableImpressionBehavior4 === null &&
										(this.$AdMostlyViewableImpressionBehavior4 = window.setTimeout(
											function() {
												a.$AdMostlyViewableImpressionBehavior5();
											},
											g
										));
									this.$AdMostlyViewableImpressionBehavior1 = !1;
								};
								return b;
							})(b("OnScreenBehavior.anweb"));
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
							a = (function() {
								__p && __p();
								a.unknownResult = function(c, d) {
									c === void 0 && (c = b("AdQualityViewabilityDetection").NONE);
									d === void 0 && (d = "");
									return new a({ vd: c, r: d });
								};
								function a(a) {
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
								var c = a.prototype;
								c.appendResult = function(a) {
									this.$5 || (this.$5 = a.$5),
										this.$1 || (this.$1 = a.$1),
										(this.$4 = a.$4),
										(this.$3 = a.$3),
										(this.$6 = a.$6),
										(this.$7 = this.$7 || a.$7);
								};
								c.getData = function() {
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
								c.getAdRect = function() {
									return this.$1;
								};
								c.getError = function() {
									return this.$2;
								};
								c.getMaxAdArea = function() {
									return this.$7;
								};
								c.getIsContinuous = function() {
									return this.$6;
								};
								c.getViewableRect = function() {
									return this.$5;
								};
								c.getViewableRatio = function() {
									return this.$8(function(a) {
										return a.area();
									});
								};
								c.getViewableHeightRatio = function() {
									return this.$8(function(a) {
										return a.height;
									});
								};
								c.getViewableWidthRatio = function() {
									return this.$8(function(a) {
										return a.width;
									});
								};
								c.$8 = function(a) {
									var b = this.$1,
										c = this.$5;
									return (c && a(c) === 0) || (b && a(b) === 0)
										? 0
										: c && b
											? a(c) / a(b)
											: null;
								};
								c.getViewabilityDetection = function() {
									return this.$3;
								};
								c.getReason = function() {
									return this.$4;
								};
								c.isConclusive = function() {
									return typeof this.getViewableRatio() === "number";
								};
								return a;
							})();
							e.exports = a;
						},
						null
					);
					__d(
						"AdQualityMeasurement.adquality",
						["AdQualityMeasurementResult.adquality"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a, b) {
									this.__parentWindow = b;
								}
								var c = a.prototype;
								c.destroy = function() {};
								c.getMeasurement = function(a) {
									a(
										b("AdQualityMeasurementResult.adquality").unknownResult(
											this.__viewabilityDetection,
											this.__viewabilityDetection + "-na"
										)
									);
								};
								c.getViewabilityDetection = function() {
									return this.__viewabilityDetection;
								};
								c.getParentWindow = function() {
									return this.__parentWindow;
								};
								c.isAvailable = function(a) {
									return !1;
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(a, b, c, d) {
									(this.x = a || 0),
										(this.y = b || 0),
										(this.width = c || 0),
										(this.height = d || 0);
								}
								a.RectangleZero = function() {
									return new a(0, 0, 0, 0);
								};
								a.RectangleFromClientRect = function(b) {
									return new a(
										b.left || 0,
										b.top || 0,
										b.width || b.right - b.left || 0,
										b.height || b.bottom - b.top || 0
									);
								};
								a.ClientRectFromRectangle = function(a) {
									return {
										width: a.width,
										height: a.height,
										left: a.x,
										top: a.y,
										right: a.x + a.width,
										bottom: a.y + a.height
									};
								};
								a.RectangleFromWindow = function(b) {
									try {
										var c = b.document,
											d = b.document.documentElement,
											e = d.hasOwnProperty
												? Object.prototype.hasOwnProperty.call(
														d,
														"ontouchstart"
												  )
												: !1,
											f = c.compatMode === "BackCompat";
										e
											? ((e = b.innerWidth), (b = b.innerHeight))
											: f
												? ((e = c.body.clientWidth), (b = c.body.clientHeight))
												: ((e = d.clientWidth), (b = d.clientHeight));
										return new a(0, 0, e, b);
									} catch (a) {
										return null;
									}
								};
								a.RectangleFromViewport = function(c) {
									var d = b("AdQualityUtils.adquality").getBrowserBarOffset(c);
									return new a(
										c.screenX,
										c.screenY + d,
										c.outerWidth,
										c.outerHeight - d
									);
								};
								var c = a.prototype;
								c.area = function() {
									return this.width * this.height;
								};
								c.getData = function() {
									return {
										x: this.x,
										y: this.y,
										width: this.width,
										height: this.height
									};
								};
								c.intersection = function(b) {
									var c = Math.max(this.x, b.x),
										d = Math.max(this.y, b.y),
										e = Math.min(this.x + this.width, b.x + b.width);
									b = Math.min(this.y + this.height, b.y + b.height);
									return e >= c && b >= d ? new a(c, d, e - c, b - d) : null;
								};
								c.offset = function(b, c) {
									return new a(this.x + b, this.y + c, this.width, this.height);
								};
								return a;
							})();
							e.exports = a;
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
							var g = b("AdQualityUtils.adquality").getBrowserBarOffset;
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(c, a);
								function c(c, d) {
									__p && __p();
									var e;
									e = a.call(this, c, d) || this;
									e.$AMPMeasurement5 = function(a) {
										a = a[a.length - 1];
										var c = a.boundingClientRect;
										a = a.intersectionRect;
										e.$AMPMeasurement1 = b(
											"Rectangle.adquality"
										).RectangleFromClientRect(c);
										e.$AMPMeasurement4 = b("Rectangle.adquality")
											.RectangleFromClientRect(a)
											.offset(
												e.__parentWindow.screenX,
												e.__parentWindow.screenY + g(e.__parentWindow)
											);
										e.$AMPMeasurement4 =
											(e.$AMPMeasurement2 && e.$AMPMeasurement2.hidden) ||
											!e.$AMPMeasurement4
												? b("Rectangle.adquality").RectangleZero()
												: e.$AMPMeasurement4;
									};
									e.$AMPMeasurement1 = null;
									e.$AMPMeasurement2 = null;
									e.__viewabilityDetection = b(
										"AdQualityViewabilityDetection"
									).AMP;
									e.$AMPMeasurement3 = null;
									e.$AMPMeasurement4 = null;
									b("AMPContextLoader")
										.genAMPContext()
										.then(function(a) {
											(e.$AMPMeasurement2 = a),
												(e.$AMPMeasurement3 = a.observeIntersection(
													e.$AMPMeasurement5
												));
										});
									return e;
								}
								var d = c.prototype;
								d.destroy = function() {
									this.$AMPMeasurement3 && this.$AMPMeasurement3();
								};
								d.isAvailable = function() {
									return b("AMPContextLoader").isAMP();
								};
								d.getMeasurement = function(a) {
									a(
										new (b("AdQualityMeasurementResult.adquality"))({
											ar: this.$AMPMeasurement1,
											vd: this.__viewabilityDetection,
											vr: this.$AMPMeasurement4
										})
									);
								};
								return c;
							})(b("AdQualityMeasurement.adquality"));
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
							a = (function() {
								__p && __p();
								function a(a) {
									this.$1 = a;
								}
								var c = a.prototype;
								c.destroy = function() {
									ES(this.$1, "forEach", !0, function(a) {
										a.destroy();
									}),
										(this.$1 = []);
								};
								c.getMeasurement = function(a) {
									this.$2(
										0,
										b("AdQualityMeasurementResult.adquality").unknownResult(),
										a
									);
								};
								c.$2 = function(a, c, d) {
									var e = this;
									c.appendResult(
										b("AdQualityMeasurementResult.adquality").unknownResult()
									);
									if (a < this.$1.length) {
										var f = this.$1[a];
										!f.isAvailable(this.$1)
											? this.$2(a + 1, c, d)
											: f.getMeasurement(function(b) {
													c.appendResult(b),
														c.isConclusive() ? e.$3(c, d) : e.$2(a + 1, c, d);
											  });
									} else this.$3(c, d);
								};
								c.$3 = function(a, b) {
									b(a);
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a() {
									this.$1 = { h: 0, u: 0, v: 0 };
								}
								var c = a.prototype;
								c.destroy = function() {
									this.$1 = { h: 0, u: 0, v: 0 };
								};
								c.getMaxAdAreaForScreenOrientation = function(a) {
									var c = b(
										"ScreenOrientation.adquality"
									).getScreenOrientation();
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
								c.getMaxAdAreaByScreenOrientation = function(a) {
									return {
										maxAdAreaNotFullscreen: this.$1[a],
										screenOrientation: a
									};
								};
								return a;
							})();
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
							a = (function() {
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
								var c = a.prototype;
								c.getViewableRatio = function() {
									return this.$23;
								};
								c.getData = function() {
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
								c.registerProgress = function(a, b) {
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
								c.registerVolume = function(a, b, c) {
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
								c.registerPlaybackRate = function(a, b) {
									(this.$24 += a), (this.$18 += b * a);
								};
								c.resetNonContinuousStatistics = function() {
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
								return a;
							})();
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
							a = (function() {
								__p && __p();
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
								var c = a.prototype;
								c.getStatistics = function() {
									return this.$6.getData();
								};
								c.getViewableRatio = function(a, c) {
									var d = this;
									this.$3.getMeasurement(function(e) {
										var f = e.getAdRect();
										c(
											new (b("AdQualityMeasurementResult.adquality"))({
												ar: f,
												e: e.getError(),
												vd: e.getViewabilityDetection(),
												r: a ? "fullscreen" : e.getReason(),
												vr: a ? f : e.getViewableRect(),
												maa: d.$4.getMaxAdAreaForScreenOrientation(e)
											})
										);
									});
								};
								c.registerProgress = function(a, c) {
									__p && __p();
									var d = this;
									if (!this.$1) {
										c && c(this.getStatistics());
										return;
									}
									this.$3.getMeasurement(function(e) {
										if (d.$1) {
											var f = e.getAdRect();
											f = new (b("AdQualityMeasurementResult.adquality"))({
												ar: f,
												e: e.getError(),
												vd: e.getViewabilityDetection(),
												r: a.isFullScreen ? "fullscreen" : e.getReason(),
												vr: a.isFullScreen ? f : e.getViewableRect(),
												cont: a.isContinuous,
												maa: d.$4.getMaxAdAreaForScreenOrientation(e)
											});
											d.$9(
												f,
												parseFloat(a.loggingTimeInterval),
												d.getStatistics(),
												a,
												a.volume,
												a.playbackRate
											);
											c && c(d.getStatistics());
										}
									});
								};
								c.resetStatistics = function() {
									this.$6.resetNonContinuousStatistics();
								};
								c.addRule = function(a) {
									this.$8.push(a), this.$7.push(a.createTest(a));
								};
								c.$9 = function(a, b, c, d, e, f) {
									this.$6.registerVolume(b, e, a.getIsContinuous()),
										this.$6.registerPlaybackRate(b, f),
										this.$6.registerProgress(b, a),
										ES(this.$7, "forEach", !0, function(e) {
											e.registerProgress(b, a, c, d);
										});
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(c, d) {
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
											(this.offsetHeight = c.offsetHeight),
												(this.offsetWidth = c.offsetWidth);
										} catch (a) {}
										var e = c.ownerDocument;
										this.parentWindow =
											d || c.ownerDocument.defaultView || e.parentWindow;
										if (this.parentWindow) {
											d = c;
											e = this.parentWindow;
											while (e && this.windowCount < 100) {
												this.windowCount++;
												c = null;
												var f = null;
												try {
													(f = e.document.referrer),
														(c = e.location.href || e.document.location.href),
														(this.topWindow = e),
														(this.topWindowLevel = this.windowCount);
												} catch (a) {
													this.crossDomainWindowCount++;
												}
												this.ancestorURLs.push(c || f || "");
												var n = null;
												try {
													d &&
														a.isElementVisible(d) === !1 &&
														(this.transparent = !0);
												} catch (a) {}
												var o = null;
												if (
													d &&
													d.getBoundingClientRect &&
													this.crossDomainWindowCount === 0
												)
													try {
														o = d.getBoundingClientRect();
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
													e = null;
												else if (e === this.parentWindow.top)
													c &&
														((this.pageURL = c),
														(this.pageDomain = b("ANUtils").extractDomain(c)),
														(this.domainDetectionMethod = h),
														(this.focus = n)),
														this.windowCount > 1
															? c
																? (this.type = l)
																: (this.type = m)
															: (this.type = k),
														this.type !== m &&
															((this.viewportRect = b(
																"Rectangle.adquality"
															).RectangleFromWindow(e)),
															this.transparent === null &&
																(this.transparent = !1)),
														(e = null);
												else {
													f &&
														e.parent === this.parentWindow.top &&
														((this.pageURL = f),
														(this.pageDomain = b("ANUtils").extractDomain(f)),
														(this.domainDetectionMethod = i));
													d = null;
													try {
														(d = e.frameElement),
															d && this.ancestorIframes.push(d);
													} catch (a) {}
													e = e.parent;
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
								var c = a.prototype;
								c.getData = function() {
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
								c.isSafeframe = function() {
									return !!this.getSafeFrameAPI();
								};
								c.getSafeFrameAPI = function() {
									return this.$1(function(a) {
										return a.$sf && a.$sf.ext;
									});
								};
								c.getMRAIDAPI = function() {
									return this.$1(function(a) {
										return a.mraid;
									});
								};
								c.$1 = function(a) {
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
								c.getNestLevel = function() {
									return this.ancestorURLs.length - 1;
								};
								c.getTopURL = function() {
									return this.ancestorURLs[this.ancestorURLs.length - 1];
								};
								c.isCrossDomain = function() {
									return this.crossDomainWindowCount > 0;
								};
								c.getOverlayedArea = function(a) {
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
								a.isElementVisible = function(a) {
									if (!a.style) return !0;
									if (a.style.opacity && a.style.opacity < "0.9") return !1;
									if (a.style.visibility && a.style.visibility === "hidden")
										return !1;
									return a.parentElement
										? this.isElementVisible(a.parentElement)
										: !0;
								};
								return a;
							})();
							e.exports = a;
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
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(c, a);
								function c(c, d) {
									var e;
									e = a.call(this, c, d) || this;
									e.$GeometricMeasurement1 = c;
									d = new (b("HTMLElementFrameContext.adquality"))(c, d);
									e.$GeometricMeasurement2 = !!(d.viewportRect && d.offsetRect);
									e.__viewabilityDetection = b(
										"AdQualityViewabilityDetection"
									).GEOMETRIC;
									e.$GeometricMeasurement3 = new (b(
										"PageVisibility.adquality"
									))(c.ownerDocument);
									return e;
								}
								var d = c.prototype;
								d.isAvailable = function() {
									return this.$GeometricMeasurement2;
								};
								d.getMeasurement = function(a) {
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
								return c;
							})(b("AdQualityMeasurement.adquality"));
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
							var g = 300,
								h = [];
							for (var a = 0; a <= 10; a += 1) h.push(a / 10);
							c = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(c, a);
								function c(c, d) {
									__p && __p();
									var e;
									e = a.call(this, c, d) || this;
									e.$IntersectionObserverMeasurement2 = c;
									e.isAvailable() &&
										(e.$IntersectionObserverMeasurement4 = new (b(
											"SimplePromise.adquality"
										))(function(a, f) {
											__p && __p();
											var i = window.setTimeout(function() {
													return f();
												}, g),
												j = new (b("HTMLElementFrameContext.adquality"))(c, d),
												k = j.offsetRect;
											j = j.topWindow;
											var l = c;
											if (k && j) {
												var m = b("Rectangle.adquality").RectangleFromWindow(j);
												m &&
													(k.y < m.y ||
														k.x < m.x ||
														k.height > m.height ||
														k.width > m.width) &&
													(l = j.document.documentElement || c);
											}
											k = e.__parentWindow.IntersectionObserver;
											e.$IntersectionObserverMeasurement3 = new k(
												function(b) {
													var c = !!e.$IntersectionObserverMeasurement1;
													e.$IntersectionObserverMeasurement1 = b[b.length - 1];
													c || (window.clearTimeout(i), a());
												},
												{ threshold: h }
											);
											e.$IntersectionObserverMeasurement3.observe(l);
											e.$IntersectionObserverMeasurement5 = new (b(
												"PageVisibility.adquality"
											))(c.ownerDocument);
										}));
									e.__viewabilityDetection = b(
										"AdQualityViewabilityDetection"
									).INTERSECTION_OBSERVER;
									return e;
								}
								var d = c.prototype;
								d.destroy = function() {
									this.$IntersectionObserverMeasurement3 &&
										this.$IntersectionObserverMeasurement3.disconnect();
								};
								d.isAvailable = function() {
									return "IntersectionObserver" in this.__parentWindow;
								};
								d.getMeasurement = function(a) {
									__p && __p();
									var b = this;
									if (this.$IntersectionObserverMeasurement1) {
										this.$IntersectionObserverMeasurement6(a);
										return;
									}
									if (!this.$IntersectionObserverMeasurement4) {
										this.$IntersectionObserverMeasurement7(a);
										return;
									}
									this.$IntersectionObserverMeasurement4.then(
										function() {
											return b.$IntersectionObserverMeasurement6(a);
										},
										function() {
											return b.$IntersectionObserverMeasurement7(a);
										}
									);
								};
								d.$IntersectionObserverMeasurement6 = function(a) {
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
								d.$IntersectionObserverMeasurement7 = function(a) {
									a(
										b("AdQualityMeasurementResult.adquality").unknownResult(
											this.__viewabilityDetection,
											this.__viewabilityDetection + "-na"
										)
									);
								};
								return c;
							})(b("AdQualityMeasurement.adquality"));
							e.exports = c;
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
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(c, a);
								function c(c, d) {
									var e;
									e = a.call(this, c, d) || this;
									e.$SafeframeMeasurement1 = new (b(
										"HTMLElementFrameContext.adquality"
									))(c, d).getSafeFrameAPI();
									e.__viewabilityDetection = b(
										"AdQualityViewabilityDetection"
									).SAFEFRAME;
									return e;
								}
								var d = c.prototype;
								d.isAvailable = function() {
									return !!this.$SafeframeMeasurement1;
								};
								d.getMeasurement = function(a) {
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
								return c;
							})(b("AdQualityMeasurement.adquality"));
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
							a = (function() {
								__p && __p();
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
								var c = a.prototype;
								c.pause = function() {
									this.$1 = !0;
								};
								c.resume = function() {
									this.$1 = !1;
								};
								c.getDimensions = function() {
									return !this.$4 ? null : this.$4.getAdRect();
								};
								c.attachBehaviorManager = function(a) {
									(this.$3 = a), this.$6();
								};
								c.$6 = function() {
									__p && __p();
									var a = this;
									if (this.$5 !== void 0) return;
									this.$5 = window.setInterval(function() {
										if (a.$1) return;
										a.$2.getViewableRatio(!1, function(b) {
											a.$4 = b;
											var c = b.getViewableWidthRatio();
											b = b.getViewableHeightRatio();
											a.$3 != null &&
												c != null &&
												b != null &&
												a.$3.updateView(c, b);
										});
									}, g);
								};
								c.getCurrentViewabilityState = function() {
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
											viewabilityLevels: [
												b("AdViewability").OFFSCREEN_HORIZONTAL
											]
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
								return a;
							})();
							e.exports = a;
						},
						null
					);
					__d(
						"getFullScreenElement",
						[],
						function(a, b, c, d, e, f) {
							function a() {
								return (
									document.fullscreenElement ||
									document.webkitFullscreenElement ||
									document.mozFullScreenElement ||
									document.msFullscreenElement
								);
							}
							e.exports = a;
						},
						null
					);
					__d(
						"AudienceNetworkHTMLVideoPlayer",
						["getFullScreenElement"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a, b) {
									b === void 0 && (b = !1),
										(this.$1 = a),
										(this.$2 = []),
										b || ((this.$1.volume = 1), (this.$1.muted = !1));
								}
								var c = a.prototype;
								c.addEventListener = function(a, b, c) {
									this.$2.push({
										type: a,
										listener: b,
										optionsOrUseCapture: c
									}),
										this.$1.addEventListener(a, b, c);
								};
								c.enforcesContinuity = function() {
									return !1;
								};
								c.exitFullscreen = function() {
									document.exitFullscreen
										? document.exitFullscreen()
										: document.msExitFullscreen
											? document.msExitFullscreen()
											: document.mozCancelFullScreen
												? document.mozCancelFullScreen()
												: document.webkitExitFullscreen &&
												  document.webkitExitFullscreen();
								};
								c.getCurrentTime = function() {
									return this.$1.currentTime;
								};
								c.getDuration = function() {
									return this.$1.duration;
								};
								c.getError = function() {
									return this.$1.error;
								};
								c.getVideoSlot = function() {
									return this.$1;
								};
								c.getVolume = function() {
									return this.$1.volume;
								};
								c.getPlaybackRate = function() {
									return this.$1.playbackRate;
								};
								c.isFullscreen = function() {
									if (this.$1.webkitDisplayingFullscreen) return !0;
									var a = b("getFullScreenElement")();
									a = a === this.$1;
									if (a) return !0;
									a = /iPhone OS (9_|8_|7_)|iPod/;
									return a.test(navigator.userAgent) &&
										!(this.$1 instanceof HTMLVideoElement) &&
										!this.$1.paused
										? !0
										: !1;
								};
								c.isMuted = function() {
									return this.$1.muted;
								};
								c.isPaused = function() {
									return this.$1.paused;
								};
								c.pause = function() {
									this.$1.pause();
								};
								c.play = function() {
									this.$1.play();
								};
								c.remove = function() {
									this.$1.parentNode && this.$1.parentNode.removeChild(this.$1);
								};
								c.requestFullscreen = function() {
									var a = this.$1;
									a.requestFullscreen
										? a.requestFullscreen()
										: a.msRequestFullscreen
											? a.msRequestFullscreen()
											: a.mozRequestFullScreen
												? a.mozRequestFullScreen()
												: a.webkitRequestFullscreen &&
												  a.webkitRequestFullscreen();
								};
								c.removeEventListener = function(a, b, c) {
									this.$1.removeEventListener(a, b, c);
								};
								c.setSrc = function(a) {
									this.$1.setAttribute
										? this.$1.setAttribute("src", a)
										: (this.$1.src = a);
								};
								c.getSrc = function() {
									return this.$1.getAttribute
										? this.$1.getAttribute("src")
										: this.$1.src;
								};
								c.setVolume = function(a) {
									this.setMuted(a <= 0), (this.$1.volume = a);
								};
								c.setMuted = function(a) {
									this.$1.muted = a;
								};
								c.cleanup = function() {
									var a = this;
									ES(this.$2, "forEach", !0, function(b) {
										a.removeEventListener(
											b.type,
											b.listener,
											b.optionsOrUseCapture
										);
									});
								};
								c.$3 = function() {
									if (this.$1.getBoundingClientRect)
										return this.$1.getBoundingClientRect();
									else if (
										this.$1.parentNode &&
										this.$1.parentNode.getBoundingClientRect
									)
										return this.$1.parentNode.getBoundingClientRect();
									return null;
								};
								c.getWidth = function() {
									var a = this.$3();
									return a ? a.width : null;
								};
								c.getHeight = function() {
									var a = this.$3();
									return a ? a.height : null;
								};
								return a;
							})();
							e.exports = a;
						},
						null
					);
					__d(
						"ANVideoStateUtils",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = 0.05,
								h = 0.5,
								i = 2,
								j = 0.25,
								k = 0.5,
								l = 0.05;
							function a() {
								return {
									isAudible: !0,
									isPaused: !1,
									isFullScreen: !1,
									isContinuous: !0,
									clockTimeMs: 0,
									videoTime: 0,
									loggingTimeInterval: 0,
									volume: 0,
									playbackRate: 1,
									videoDuration: 0,
									forceFlushLog: !1
								};
							}
							function b(a, b) {
								if (b || a < g) return !1;
								else return !0;
							}
							function c(a, b, c, d, e) {
								__p && __p();
								var f = d - a.videoTime;
								if (f < 0) return !1;
								if (e - d <= j && f <= j) return !0;
								if (a.isPaused && b && a.videoTime > 0) return f <= l;
								if (a.videoTime <= 0 || a.isPaused || b) return f <= k;
								e = (c - a.clockTimeMs) / 1e3;
								if (e <= l && f <= l) return !0;
								d = f / e;
								return d < i && d >= h;
							}
							e.exports = { isAudible: b, isContinuous: c, initState: a };
						},
						null
					);
					__d(
						"BaseXDomainScreenMeasurement.adquality",
						[
							"AdQualityMeasurement.adquality",
							"AdQualityMeasurementResult.adquality",
							"Rectangle.adquality",
							"nullthrows"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(c, a);
								function c(b, c) {
									var d;
									d = a.call(this, b, c) || this;
									d.$BaseXDomainScreenMeasurement1 = b;
									d.$BaseXDomainScreenMeasurement3 = c;
									d.$BaseXDomainScreenMeasurement2 =
										ES(navigator.platform, "indexOf", !0, "Mac") > -1;
									return d;
								}
								var d = c.prototype;
								d.__getAdOffset = function() {
									throw new Error("Not implemented");
								};
								d.__isDocumentHidden = function() {
									return document.hidden === !0;
								};
								d.getMeasurement = function(a) {
									__p && __p();
									var c = b("Rectangle.adquality").RectangleFromClientRect(
											this.$BaseXDomainScreenMeasurement1.getBoundingClientRect()
										),
										d = b("nullthrows")(
											b("Rectangle.adquality").RectangleFromWindow(
												this.$BaseXDomainScreenMeasurement3
											)
										);
									if (this.__isDocumentHidden()) {
										a(
											new (b("AdQualityMeasurementResult.adquality"))({
												ar: b("Rectangle.adquality").RectangleZero(),
												vd: this.__viewabilityDetection,
												vr: b("Rectangle.adquality").RectangleZero()
											})
										);
										return;
									}
									c = c.intersection(d);
									if (!c) {
										a(
											new (b("AdQualityMeasurementResult.adquality"))({
												ar: b("Rectangle.adquality").RectangleZero(),
												vd: this.__viewabilityDetection,
												vr: b("Rectangle.adquality").RectangleZero()
											})
										);
										return;
									}
									d = this.__getAdOffset();
									if (!d) {
										a(
											b("AdQualityMeasurementResult.adquality").unknownResult(
												this.__viewabilityDetection,
												this.__viewabilityDetection + "-no-offset"
											)
										);
										return;
									}
									var e = d.x;
									d = d.y;
									e = c
										.offset(e, d)
										.intersection(
											b("Rectangle.adquality").RectangleFromViewport(
												this.$BaseXDomainScreenMeasurement3
											)
										);
									a(
										new (b("AdQualityMeasurementResult.adquality"))({
											ar: c,
											vd: this.__viewabilityDetection,
											vr: e || b("Rectangle.adquality").RectangleZero()
										})
									);
								};
								return c;
							})(b("AdQualityMeasurement.adquality"));
							e.exports = a;
						},
						null
					);
					__d(
						"IEXDomainScreenMeasurement.adquality",
						[
							"AdQualityMeasurementResult.adquality",
							"AdQualityUtils.adquality",
							"AdQualityViewabilityDetection",
							"BaseXDomainScreenMeasurement.adquality",
							"HTMLElementFrameContext.adquality"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = b("AdQualityUtils.adquality").isIE11;
							function h(a, b, c) {
								a.addEventListener
									? a.addEventListener(b, c, !1)
									: a.attachEvent
										? a.attachEvent("on" + b, c)
										: (a[b] = c);
							}
							var i = 11;
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(c, a);
								function c(c, d) {
									__p && __p();
									var e;
									e = a.call(this, c, d) || this;
									e.$IEXDomainScreenMeasurement1 = null;
									e.__viewabilityDetection = b(
										"AdQualityViewabilityDetection"
									).IE_MOUSE;
									c = new (b("HTMLElementFrameContext.adquality"))(c, d);
									e.$IEXDomainScreenMeasurement3 = c.isCrossDomain();
									if (!e.isAvailable())
										return babelHelpers.assertThisInitialized(e);
									d = c.parentWindow;
									if (!d) return babelHelpers.assertThisInitialized(e);
									c = d.document.documentElement;
									if (!c) return babelHelpers.assertThisInitialized(e);
									e.$IEXDomainScreenMeasurement4 = c;
									h(e.$IEXDomainScreenMeasurement4, "click", function(b) {
										b = b || window.event;
										if (b.target !== e.$IEXDomainScreenMeasurement4) return !0;
										b.preventDefault();
										b.stopPropagation();
										e.$IEXDomainScreenMeasurement1 = {
											x: b.screenX - b.clientX,
											y: b.screenY - b.clientY + i
										};
										b = e.$IEXDomainScreenMeasurement2;
										b &&
											(a.prototype.getMeasurement.call(
												babelHelpers.assertThisInitialized(e),
												b
											),
											(e.$IEXDomainScreenMeasurement2 = null));
										return !1;
									});
									return e;
								}
								var d = c.prototype;
								d.isAvailable = function() {
									return !this.$IEXDomainScreenMeasurement3 ? !1 : g();
								};
								d.getMeasurement = function(a) {
									var c = this.$IEXDomainScreenMeasurement2,
										d = this.$IEXDomainScreenMeasurement4;
									!d
										? a(
												b("AdQualityMeasurementResult.adquality").unknownResult(
													this.__viewabilityDetection,
													this.__viewabilityDetection + "-na"
												)
										  )
										: (c &&
												c(
													b(
														"AdQualityMeasurementResult.adquality"
													).unknownResult(
														this.__viewabilityDetection,
														this.__viewabilityDetection + "-no-click"
													)
												),
										  (this.$IEXDomainScreenMeasurement2 = a),
										  d.click());
								};
								d.__getAdOffset = function() {
									return this.$IEXDomainScreenMeasurement1;
								};
								return c;
							})(b("BaseXDomainScreenMeasurement.adquality"));
							e.exports = a;
						},
						null
					);
					__d(
						"InstantArticleMeasurement.adquality",
						[
							"AdQualityMeasurement.adquality",
							"AdQualityMeasurementResult.adquality",
							"AdQualityViewabilityDetection",
							"Rectangle.adquality"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = 24,
								h = 2,
								i = window.performance;
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(c, a);
								function c(c, d) {
									d = a.call(this, c, d) || this;
									d.$InstantArticleMeasurement1 = c;
									d.__viewabilityDetection = b(
										"AdQualityViewabilityDetection"
									).INSTANT_ARTICLES;
									return d;
								}
								var d = c.prototype;
								d.isAvailable = function() {
									var a = navigator.userAgent.toLowerCase();
									a = /fbia\/fb4a/.test(a);
									return i && a;
								};
								d.$InstantArticleMeasurement2 = function(a) {
									if (!("now" in i)) return;
									var b = !1,
										c = 0,
										d = i.now(),
										e = function e(f) {
											c !== h && !b && window.requestAnimationFrame(e),
												c === h && !b && ((b = !0), a(f - d < g)),
												(d = f),
												c++;
										};
									window.requestAnimationFrame(e);
									window.setTimeout(function() {
										b || ((b = !0), a(!1));
									}, g * 3);
								};
								d.getMeasurement = function(a) {
									var c = this;
									this.$InstantArticleMeasurement2(function(d) {
										var e = new (b("Rectangle.adquality"))(
											0,
											0,
											c.$InstantArticleMeasurement1.clientWidth,
											c.$InstantArticleMeasurement1.clientHeight
										);
										a(
											new (b("AdQualityMeasurementResult.adquality"))({
												ar: e,
												vd: c.__viewabilityDetection,
												vr: d ? e : b("Rectangle.adquality").RectangleZero()
											})
										);
									});
								};
								return c;
							})(b("AdQualityMeasurement.adquality"));
							e.exports = a;
						},
						null
					);
					__d(
						"MozInnerScreenMeasurement.adquality",
						[
							"AdQualityUtils.adquality",
							"AdQualityViewabilityDetection",
							"BaseXDomainScreenMeasurement.adquality"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = b("AdQualityUtils.adquality").getFirefoxVersion;
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(c, a);
								function c(c, d) {
									c = a.call(this, c, d) || this;
									c.__viewabilityDetection = b(
										"AdQualityViewabilityDetection"
									).MOZILLA_INNER_SCREEN;
									return c;
								}
								var d = c.prototype;
								d.isAvailable = function() {
									var a = g();
									return typeof a === "number" && a >= 3;
								};
								d.__getAdOffset = function() {
									var a = this.__parentWindow,
										b = a.mozInnerScreenX;
									a = a.mozInnerScreenY;
									return b === void 0 || a === void 0 ? null : { x: b, y: a };
								};
								return c;
							})(b("BaseXDomainScreenMeasurement.adquality"));
							e.exports = a;
						},
						null
					);
					__d(
						"BaseBeaconXMeasurement.adquality",
						[
							"AdQualityMeasurement.adquality",
							"AdQualityMeasurementResult.adquality",
							"Rectangle.adquality",
							"SimplePromise.adquality"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = 4,
								h = 1;
							function i(a) {
								for (var b = a.length; b > 0; ) {
									var c = Math.floor(Math.random() * b--),
										d = a[b];
									a[b] = a[c];
									a[c] = d;
								}
								return a;
							}
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(c, a);
								function c(b, c) {
									c = a.call(this, b, c) || this;
									c.$BaseBeaconXMeasurement1 = b;
									c.$BaseBeaconXMeasurement2 = [];
									c.$BaseBeaconXMeasurement3 = [];
									c.$BaseBeaconXMeasurement4 = [];
									c.$BaseBeaconXMeasurement5 = {};
									return c;
								}
								var d = c.prototype;
								d.destroy = function() {
									var a = this;
									ES(this.$BaseBeaconXMeasurement2, "forEach", !0, function(b) {
										a.$BaseBeaconXMeasurement1.removeChild(b);
									});
								};
								d.isAvailable = function() {
									return !0;
								};
								d.getMeasurement = function(a) {
									__p && __p();
									var c = this,
										d = i([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
										e = i([].concat(d));
									d = ES(d, "map", !0, function(a, b) {
										return { x: a, y: e[b] };
									});
									var f = [],
										g = [];
									ES(d, "forEach", !0, function(a) {
										a.x === 0 || a.y === 0 || a.x === 10 || a.y === 10
											? f.push(a)
											: g.push(a);
									});
									var h = ES(f, "map", !0, function(a) {
										return c.__detectViewability(a);
									});
									b("SimplePromise.adquality")
										.all(h)
										.then(function(d) {
											__p && __p();
											d = d.reduce(function(a, b) {
												return a + (b === "1" ? 1 : 0);
											}, 0);
											if (d === h.length) {
												a(c.$BaseBeaconXMeasurement6(1));
												return;
											}
											d = [].concat(
												h,
												ES(g, "map", !0, function(a) {
													return c.__detectViewability(a);
												})
											);
											b("SimplePromise.adquality")
												.all(d)
												.then(function(b) {
													b = b.reduce(function(a, b) {
														return a + (b === "1" ? 1 : 0);
													}, 0);
													b = Math.min(Math.max(-0.05 + b * 0.1, 0), 1);
													a(c.$BaseBeaconXMeasurement6(b));
												});
										});
								};
								d.$BaseBeaconXMeasurement6 = function(a) {
									var c = this.$BaseBeaconXMeasurement1,
										d = a <= 0 ? 0 : c.clientWidth;
									return new (b("AdQualityMeasurementResult.adquality"))({
										ar: new (b("Rectangle.adquality"))(
											0,
											0,
											c.clientWidth,
											c.clientHeight
										),
										vd: this.__viewabilityDetection,
										vr: new (b("Rectangle.adquality"))(
											0,
											0,
											d,
											c.clientHeight * a
										)
									});
								};
								d.__detectViewability = function(a) {
									var d = this,
										e = a.x,
										f = a.y;
									return new (b("SimplePromise.adquality"))(function(a, b) {
										var g = d.$BaseBeaconXMeasurement1.clientWidth,
											h = d.$BaseBeaconXMeasurement1.clientHeight;
										d.$BaseBeaconXMeasurement7().then(function(b) {
											(b.style.left =
												Math.floor(e * g * 0.1) - c.BEACON_SIZE / 2 + "px"),
												(b.style.top =
													Math.floor(f * h * 0.1) - c.BEACON_SIZE / 2 + "px"),
												d.__checkVisibility(b).then(function(c) {
													a(c ? "1" : "0");
													c = d.$BaseBeaconXMeasurement4.shift();
													c ? c(b) : d.$BaseBeaconXMeasurement3.push(b);
												});
										});
									});
								};
								d.__checkVisibility = function(a) {
									throw new Error(
										"Implement __checkVisibility in the subclass"
									);
								};
								d.$BaseBeaconXMeasurement8 = function() {
									var a = navigator.userAgent;
									return /iPhone|iPod/.test(a) ? h : g;
								};
								d.$BaseBeaconXMeasurement7 = function() {
									__p && __p();
									var a = this;
									return new (b("SimplePromise.adquality"))(function(b, d) {
										__p && __p();
										var e = a.$BaseBeaconXMeasurement3.pop();
										if (e) {
											b(e);
											return;
										}
										if (
											a.$BaseBeaconXMeasurement2.length <
											a.$BaseBeaconXMeasurement8()
										) {
											e = a.__setUpBeacon(0);
											e.style.position = "absolute";
											e.style.display = "block";
											e.style.zIndex = "-99999";
											e.style.border = "none";
											e.style.width = c.BEACON_SIZE + "px";
											e.style.height = c.BEACON_SIZE + "px";
											a.$BaseBeaconXMeasurement1.appendChild(e);
											a.$BaseBeaconXMeasurement2.push(e);
											e.addEventListener(
												"load",
												function() {
													a.__checkVisibility(e).then(function(a) {
														b(e);
													});
												},
												!1
											);
											return;
										}
										a.$BaseBeaconXMeasurement4.push(b);
									});
								};
								d.__setUpBeacon = function(a) {
									throw new Error("Implement __setUpBeacon in the subclass");
								};
								return c;
							})(b("AdQualityMeasurement.adquality"));
							a.BEACON_SIZE = 2;
							e.exports = a;
						},
						null
					);
					__d(
						"RafBeaconMeasurement.adquality",
						[
							"AdQualityMeasurementResult.adquality",
							"AdQualityUtils.adquality",
							"AdQualityViewabilityDetection",
							"BaseBeaconXMeasurement.adquality",
							"HTMLElementFrameContext.adquality",
							"SimplePromise.adquality",
							"ViewabilitySettings"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = b("AdQualityUtils.adquality").getChromeVersion,
								h = b("AdQualityUtils.adquality").getFirefoxVersion,
								i = b("AdQualityUtils.adquality").getSafariVersion,
								j = b("AdQualityUtils.adquality").isEdge,
								k = 36,
								l = 2,
								m = 4;
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(c, a);
								function c(c, d, e) {
									__p && __p();
									var f;
									f = a.call(this, c, d) || this;
									f.$RafBeaconMeasurement6 = function(a) {
										var b = a.data;
										a = a.origin;
										try {
											if (a !== null && a !== "null") return;
											a = ES("JSON", "parse", !1, b);
											b = f.$RafBeaconMeasurement5[a.id];
											b && b(a.iv);
										} catch (a) {}
									};
									f.$RafBeaconMeasurement10 = function(a) {
										ES(f.$RafBeaconMeasurement8, "forEach", !0, function(b) {
											return b(a);
										}),
											(f.$RafBeaconMeasurement8 = []),
											(f.$RafBeaconMeasurement7 = !1);
									};
									f.$RafBeaconMeasurement1 = c;
									f.$RafBeaconMeasurement2 = !!i();
									f.__viewabilityDetection = b(
										"AdQualityViewabilityDetection"
									).RAF;
									f.$RafBeaconMeasurement9 = 0;
									f.$RafBeaconMeasurement3 = new (b(
										"HTMLElementFrameContext.adquality"
									))(c, d).isSafeframe();
									f.$RafBeaconMeasurement7 = !1;
									f.$RafBeaconMeasurement8 = [];
									f.$RafBeaconMeasurement4 = e;
									f.isAvailable() &&
										window.addEventListener(
											"message",
											f.$RafBeaconMeasurement6
										);
									f.$RafBeaconMeasurement5 = {};
									return f;
								}
								var d = c.prototype;
								d.destroy = function() {
									window.removeEventListener(
										"message",
										this.$RafBeaconMeasurement6
									),
										a.prototype.destroy.call(this);
								};
								d.isAvailable = function() {
									__p && __p();
									if (!a.prototype.isAvailable.call(this)) return !1;
									if (this.$RafBeaconMeasurement3) return !1;
									if (this.$RafBeaconMeasurement4 && j()) return !1;
									var b = navigator.userAgent.toLowerCase(),
										c;
									if ((c = h())) return c >= 40 && c < 49;
									if ((c = i())) return c >= 9;
									var d = b.match(/crios\/(\d+)/);
									if (d) {
										d = parseInt(d[1], 10);
										return d >= 48;
									}
									d = /fbios/.test(b);
									if (d) return !0;
									return (c = g()) ? c >= 52 : !1;
								};
								d.getMeasurement = function(c) {
									var d = this;
									this.$RafBeaconMeasurement8.push(c);
									if (this.$RafBeaconMeasurement7) return;
									this.$RafBeaconMeasurement7 = !0;
									b("ViewabilitySettings").raf_safari_fix &&
									this.$RafBeaconMeasurement2
										? this.__checkSupportsSafari().then(function(c) {
												c
													? a.prototype.getMeasurement.call(
															d,
															d.$RafBeaconMeasurement10
													  )
													: d.$RafBeaconMeasurement10(
															b(
																"AdQualityMeasurementResult.adquality"
															).unknownResult(
																d.__viewabilityDetection,
																"raf-safari"
															)
													  );
										  })
										: a.prototype.getMeasurement.call(
												this,
												this.$RafBeaconMeasurement10
										  );
								};
								d.__checkSupportsSafari = function() {
									var a = this;
									if (this.$RafBeaconMeasurement9 >= m)
										return b("SimplePromise.adquality").resolve(!0);
									else if (this.$RafBeaconMeasurement9 <= -m)
										return b("SimplePromise.adquality").resolve(!1);
									return new (b("SimplePromise.adquality"))(function(b, c) {
										a.__detectViewability({ x: -1e3, y: -1e3 }).then(function(
											c
										) {
											(a.$RafBeaconMeasurement9 += c === "0" ? 1 : -1),
												b(c === "0");
										});
									});
								};
								d.__setUpBeacon = function(a) {
									__p && __p();
									a = document.createElement("iframe");
									a.sandbox = "allow-scripts";
									var b = function() {
										__p && __p();
										var a = 2,
											b = null;
										window.isVisible = function(c, d) {
											var e = !1,
												f = 0,
												g = function g(h) {
													if (e) return;
													else
														f < a
															? (b = window.requestAnimationFrame(g))
															: ((e = !0),
															  d.postMessage(
																	'{"id": "' + c + '", "iv": true}',
																	"*"
															  ));
													f++;
												};
											g();
										};
										window.addEventListener("message", function(a) {
											window.cancelAnimationFrame(b),
												a.data !== "failed" &&
													window.isVisible(a.data, a.source);
										});
									}.toString();
									a.setAttribute(
										"srcdoc",
										"<script>var __p;(" + b + ")();</script>"
									);
									return a;
								};
								d.__checkVisibility = function(a) {
									__p && __p();
									var c = this,
										d = Math.random() + "";
									return new (b("SimplePromise.adquality"))(function(b, e) {
										var f = a.contentWindow;
										f.postMessage(d, "*");
										var g = window.setTimeout(function() {
											f.postMessage("failed", "*");
											var a = c.$RafBeaconMeasurement5[d];
											a && a(!1);
										}, k * l);
										c.$RafBeaconMeasurement5[d] = function(a) {
											delete c.$RafBeaconMeasurement5[d],
												window.clearTimeout(g),
												b(a);
										};
									});
								};
								return c;
							})(b("BaseBeaconXMeasurement.adquality"));
							e.exports = a;
						},
						null
					);
					__d(
						"AdQualityMeasurementUtils.adquality",
						[
							"GeometricMeasurement.adquality",
							"IEXDomainScreenMeasurement.adquality",
							"InstantArticleMeasurement.adquality",
							"IntersectionObserverMeasurement.adquality",
							"MozInnerScreenMeasurement.adquality",
							"RafBeaconMeasurement.adquality"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							function a(a, c, d) {
								return [
									new (b("InstantArticleMeasurement.adquality"))(a, c),
									new (b("GeometricMeasurement.adquality"))(a, c),
									new (b("MozInnerScreenMeasurement.adquality"))(a, c),
									new (b("RafBeaconMeasurement.adquality"))(a, c, d),
									new (b("IEXDomainScreenMeasurement.adquality"))(a, c),
									new (b("IntersectionObserverMeasurement.adquality"))(a, c)
								];
							}
							e.exports = { getDefaultMeasurements: a };
						},
						null
					);
					__d(
						"AdQualityTest.adquality",
						["AdQualityStatistics.adquality"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a) {
									(this.$1 = !1),
										(this.$2 = a),
										(this.$3 = new (b("AdQualityStatistics.adquality"))(
											a.viewableRatio
										));
								}
								var c = a.prototype;
								c.registerProgress = function(a, c, d, e) {
									__p && __p();
									if (this.$1) return;
									this.$3.registerProgress(a, c);
									d = c.getViewableRatio() || 0;
									if (
										this.$2.continuous &&
										(!c.getIsContinuous() || d < this.$2.viewableRatio)
									) {
										this.$3 = new (b("AdQualityStatistics.adquality"))(
											this.$2.viewableRatio
										);
										return;
									}
									e = this.$3.getData().viewableSeconds || 0;
									e >= this.$2.viewableSeconds &&
										c.isConclusive() &&
										this.$4(c);
								};
								c.$4 = function(a) {
									(this.$1 = !0),
										this.$2.adQualityTestConditionTrueCallback({
											measurementResult: a,
											statistics: this.$3.getData(),
											lastLoggingTime: 0,
											currentLoggingTime: 0,
											adQualityTestFinalCallback: null
										});
								};
								return a;
							})();
							e.exports = a;
						},
						null
					);
					__d(
						"AdQualityVideoDynamicIntervalTest.adquality",
						[
							"AdQualityStatistics.adquality",
							"AdQualityTest.adquality",
							"ANVideoStateUtils"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = 5;
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(c, a);
								function c(c) {
									var d;
									d = a.call(this, c) || this;
									d.$AdQualityVideoDynamicIntervalTest2 = {
										lastViewableRatio: 0,
										lastLoggingTime: 0,
										lastStateUpdateTime: 0,
										lastStatisticsData: new (b(
											"AdQualityStatistics.adquality"
										))(0).getData(),
										lastMonitoringState: b("ANVideoStateUtils").initState(),
										isInitialized: !1
									};
									var e = c.viewableRatio,
										f = c.adQualityTestConditionTrueCallback;
									c = c.adQualityTestFinalCallback;
									d.$AdQualityVideoDynamicIntervalTest1 = new (b(
										"AdQualityStatistics.adquality"
									))(e);
									d.$AdQualityVideoDynamicIntervalTest3 = f;
									d.$AdQualityVideoDynamicIntervalTest4 = c ? c : function() {};
									return d;
								}
								var d = c.prototype;
								d.registerProgress = function(a, b, c, d) {
									a = !0;
									while (a) {
										c = this.$AdQualityVideoDynamicIntervalTest2;
										c = this.$AdQualityVideoDynamicIntervalTest5(d, c, b);
										this.$AdQualityVideoDynamicIntervalTest2 = c.state;
										a = c.checkLogForNextInterval;
									}
								};
								d.$AdQualityVideoDynamicIntervalTest5 = function(a, b, c) {
									__p && __p();
									var d = a.videoDuration,
										e = a.videoTime,
										f = a.loggingTimeInterval,
										g = a.isContinuous,
										h = a.isPaused,
										i = b.lastLoggingTime,
										j = b.lastStateUpdateTime,
										k = this.$AdQualityVideoDynamicIntervalTest1.getViewableRatio(),
										l =
											b.lastStatisticsData.curViewableRatio !== null &&
											b.lastStatisticsData.curViewableRatio !== void 0
												? b.lastStatisticsData.curViewableRatio
												: 0,
										m = c.getViewableRatio();
									m = m !== null && m !== void 0 ? m : 0;
									m = Math.min(m, l) < k && Math.max(m, l) >= k && i != j;
									l = e >= d;
									k = this.$AdQualityVideoDynamicIntervalTest2.isInitialized
										? i
										: e - f;
									d = this.$AdQualityVideoDynamicIntervalTest6(a, j, i, m, l);
									j = m && (!g || h || l) && k != e;
									h = this.$AdQualityVideoDynamicIntervalTest7(
										a,
										d,
										f,
										c,
										m,
										j
									);
									l = h.preCallbackAction;
									f = h.postCallbackAction;
									l();
									d
										? (k = this.$AdQualityVideoDynamicIntervalTest8(
												i,
												a,
												m,
												b,
												c,
												j
										  ))
										: j || this.$AdQualityVideoDynamicIntervalTest4();
									f();
									return {
										state: {
											lastLoggingTime: g ? k : e,
											lastStateUpdateTime: e,
											lastStatisticsData: ES(
												"Object",
												"assign",
												!1,
												{},
												this.$AdQualityVideoDynamicIntervalTest1.getData()
											),
											lastMonitoringState: a,
											isInitialized: !0
										},
										checkLogForNextInterval: j
									};
								};
								d.$AdQualityVideoDynamicIntervalTest9 = function(a, b) {
									var c = a.loggingTimeInterval,
										d = a.volume,
										e = a.isContinuous;
									a = a.playbackRate;
									this.$AdQualityVideoDynamicIntervalTest1.registerVolume(
										c,
										d,
										e
									);
									this.$AdQualityVideoDynamicIntervalTest1.registerPlaybackRate(
										c,
										a
									);
									this.$AdQualityVideoDynamicIntervalTest1.registerProgress(
										c,
										b
									);
								};
								d.$AdQualityVideoDynamicIntervalTest7 = function(
									a,
									b,
									c,
									d,
									e,
									f
								) {
									var g = this,
										h = this.$AdQualityVideoDynamicIntervalTest10(
											e,
											a.isContinuous
										);
									c = function() {
										h || g.$AdQualityVideoDynamicIntervalTest9(a, d);
									};
									e = function() {
										b &&
											g.$AdQualityVideoDynamicIntervalTest1.resetNonContinuousStatistics(),
											h && !f && g.$AdQualityVideoDynamicIntervalTest9(a, d);
									};
									return { preCallbackAction: c, postCallbackAction: e };
								};
								d.$AdQualityVideoDynamicIntervalTest8 = function(
									a,
									b,
									c,
									d,
									e,
									f
								) {
									var g = d.lastStateUpdateTime;
									d = d.lastStatisticsData;
									var h = b.videoTime;
									b = b.isContinuous;
									g = this.$AdQualityVideoDynamicIntervalTest10(c, b) ? g : h;
									c = c
										? d
										: this.$AdQualityVideoDynamicIntervalTest1.getData();
									d = f ? null : this.$AdQualityVideoDynamicIntervalTest4();
									this.$AdQualityVideoDynamicIntervalTest3({
										statistics: c,
										lastLoggingTime: a,
										currentLoggingTime: g,
										measurementResult: e,
										adQualityTestFinalCallback: d,
										results: { complete: !1, passed: !0 }
									});
									return b ? g : h;
								};
								d.$AdQualityVideoDynamicIntervalTest6 = function(
									a,
									b,
									c,
									d,
									e
								) {
									var f = a.videoTime;
									return f === c
										? !1
										: e ||
												((this.$AdQualityVideoDynamicIntervalTest10(
													d,
													a.isContinuous
												) ||
													a.isPaused) &&
													c != b) ||
												f - c >= g ||
												a.forceFlushLog;
								};
								d.$AdQualityVideoDynamicIntervalTest10 = function(a, b) {
									return a || !b;
								};
								return c;
							})(b("AdQualityTest.adquality"));
							e.exports = a;
						},
						null
					);
					__d(
						"AdQualityRules.adquality",
						[
							"AdQualityTest.adquality",
							"AdQualityVideoDynamicIntervalTest.adquality"
						],
						function(a, b, c, d, e, f) {
							"use strict";
							a = {
								videoTimeEvent: function(a, c) {
									return {
										continuous: !0,
										adQualityTestConditionTrueCallback: a,
										adQualityTestFinalCallback: c,
										viewableRatio: 0.5,
										viewableSeconds: 0,
										createTest: function(a) {
											return new (b(
												"AdQualityVideoDynamicIntervalTest.adquality"
											))(a);
										}
									};
								},
								mrc: function(a) {
									return {
										continuous: !0,
										adQualityTestConditionTrueCallback: a,
										adQualityTestFinalCallback: null,
										viewableRatio: 0.5,
										viewableSeconds: 2,
										createTest: function(a) {
											return new (b("AdQualityTest.adquality"))(a);
										}
									};
								},
								viewableImpression: function(a) {
									return {
										continuous: !1,
										adQualityTestConditionTrueCallback: a,
										adQualityTestFinalCallback: null,
										viewableRatio: 1e-7,
										viewableSeconds: 0.001,
										createTest: function(a) {
											return new (b("AdQualityTest.adquality"))(a);
										}
									};
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"Env",
						[],
						function(a, b, c, d, e, f) {
							b = {
								ajaxpipe_token: null,
								iframeKey: "",
								isCQuick: !1,
								start: ES("Date", "now", !1),
								nocatch: !1
							};
							a.Env && ES("Object", "assign", !1, b, a.Env);
							a.Env = b;
							e.exports = b;
						},
						null
					);
					__d(
						"TAALOpcodes",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							a = {
								PREVIOUS_FILE: 1,
								PREVIOUS_FRAME: 2,
								PREVIOUS_DIR: 3,
								FORCED_KEY: 4
							};
							e.exports = a;
						},
						null
					);
					__d(
						"TAAL",
						["TAALOpcodes"],
						function(a, b, c, d, e, f) {
							"use strict";
							a = {
								blameToPreviousFile: function(a) {
									return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_FILE]);
								},
								blameToPreviousFrame: function(a) {
									return this.applyOpcodes(a, [
										b("TAALOpcodes").PREVIOUS_FRAME
									]);
								},
								blameToPreviousDirectory: function(a) {
									return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_DIR]);
								},
								applyOpcodes: function(a, b) {
									return b && b.length ? a + " TAAL[" + b.join(";") + "]" : a;
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"eprintf",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							function g(a) {
								for (
									var b = arguments.length,
										c = new Array(b > 1 ? b - 1 : 0),
										d = 1;
									d < b;
									d++
								)
									c[d - 1] = arguments[d];
								var e = ES(c, "map", !0, function(a) {
										return String(a);
									}),
									f = a.split("%s").length - 1;
								if (f !== e.length)
									return g(
										"eprintf args number mismatch: %s",
										ES("JSON", "stringify", !1, [a].concat(e))
									);
								var h = 0;
								return a.replace(/%s/g, function() {
									return String(e[h++]);
								});
							}
							e.exports = g;
						},
						null
					);
					__d(
						"ex",
						["eprintf"],
						function(a, b, c, d, e, f) {
							function g(a) {
								for (
									var b = arguments.length,
										c = new Array(b > 1 ? b - 1 : 0),
										d = 1;
									d < b;
									d++
								)
									c[d - 1] = arguments[d];
								var e = ES(c, "map", !0, function(a) {
										return String(a);
									}),
									f = a.split("%s").length - 1;
								return f !== e.length
									? g(
											"ex args number mismatch: %s",
											ES("JSON", "stringify", !1, [a].concat(e))
									  )
									: g._prefix +
											ES("JSON", "stringify", !1, [a].concat(e)) +
											g._suffix;
							}
							g._prefix = "<![EX[";
							g._suffix = "]]>";
							e.exports = g;
						},
						null
					);
					__d(
						"sprintf",
						[],
						function(a, b, c, d, e, f) {
							function a(a) {
								for (
									var b = arguments.length,
										c = new Array(b > 1 ? b - 1 : 0),
										d = 1;
									d < b;
									d++
								)
									c[d - 1] = arguments[d];
								var e = 0;
								return a.replace(/%s/g, function() {
									return String(c[e++]);
								});
							}
							e.exports = a;
						},
						null
					);
					__d(
						"invariant",
						["Env", "TAAL", "ex", "sprintf"],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = b("ex");
							function a(a, c) {
								__p && __p();
								if (!a) {
									var d = c;
									for (
										var e = arguments.length,
											f = new Array(e > 2 ? e - 2 : 0),
											i = 2;
										i < e;
										i++
									)
										f[i - 2] = arguments[i];
									if (typeof d === "number") {
										var j = h(d, f),
											k = j.message,
											l = j.decoderLink;
										d = k;
										f.unshift(l);
									} else if (d === void 0) {
										d = "Invariant: ";
										for (var m = 0; m < f.length; m++) d += "%s,";
									}
									d = b("TAAL").blameToPreviousFrame(d);
									var n = new Error(g.apply(void 0, [d].concat(f)));
									n.name = "Invariant Violation";
									n.messageWithParams = [d].concat(f);
									throw n;
								}
							}
							function h(a, c) {
								var d = "Minified invariant #" + a + "; %s";
								c.length > 0 &&
									(d +=
										" Params: " +
										ES(c, "map", !0, function(a) {
											return "%s";
										}).join(", "));
								a =
									b("Env").show_invariant_decoder === !0
										? "visit " + i(a, c) + " to see the full message."
										: "";
								return { message: d, decoderLink: a };
							}
							function i(a, b) {
								a =
									"https://our.intern.facebook.com/intern/invariant/" + a + "/";
								b.length > 0 &&
									(a +=
										"?" +
										ES(b, "map", !0, function(a, b) {
											return "args[" + b + "]=" + encodeURIComponent(String(a));
										}).join("&"));
								return a;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"AudienceNetworkVideoMonitor",
						[
							"invariant",
							"AdQualityManager.adquality",
							"AdQualityMeasurementUtils.adquality",
							"AdQualityRules.adquality",
							"ANVideoStateUtils",
							"HTMLElementFrameContext.adquality"
						],
						function(a, b, c, d, e, f, g) {
							__p && __p();
							a = (function() {
								"use strict";
								__p && __p();
								function a(a, c) {
									(this.$9 = 0),
										(this.$1 = a),
										(this.$2 = c),
										(this.$5 = b("ANVideoStateUtils").initState()),
										(this.$6 = 0),
										(this.$7 = !1),
										(this.$8 = null);
								}
								var c = a.prototype;
								c.checkAndSendVideoTimeEvent = function(a) {
									this.$10(a);
								};
								c.getAdQualityManager = function() {
									__p && __p();
									var a = this;
									if (this.$4) return this.$4;
									var c = this.$1.getGatingConfig(),
										d = this.$1.getViewabilityMeasurementElement();
									this.$4 = new (b("AdQualityManager.adquality"))({
										element: d,
										parentWindow: window,
										rules: [
											b("AdQualityRules.adquality").mrc(function() {
												var c = new (b("HTMLElementFrameContext.adquality"))(
													a.$1.getViewabilityMeasurementElement(),
													window
												);
												a.$2.logMRCEvent(
													a.getAdQualityManager().getStatistics(),
													a.$11().getCurrentTime() - 2,
													a.$11().getCurrentTime(),
													c,
													a.$1.getAdWidth(),
													a.$1.getAdHeight()
												);
											}),
											b("AdQualityRules.adquality").viewableImpression(function(
												c
											) {
												a.$2.logViewableImpressionEvent(
													c.statistics,
													Math.max(
														0,
														a.$11().getCurrentTime() -
															c.statistics.viewableSeconds
													),
													a.$11().getCurrentTime()
												);
												var d = new (b("HTMLElementFrameContext.adquality"))(
													a.$1.getViewabilityMeasurementElement(),
													window
												);
												a.$2.logImpressionEvent(
													d,
													c.statistics.curViewableRatio,
													c.measurementResult.getViewabilityDetection(),
													c.measurementResult.getReason()
												);
											}),
											b("AdQualityRules.adquality").videoTimeEvent(
												function(c) {
													var d = c.lastLoggingTime,
														e = c.currentLoggingTime,
														f = c.statistics,
														g = new (b("HTMLElementFrameContext.adquality"))(
															a.$1.getViewabilityMeasurementElement(),
															window
														),
														h = function() {
															c.adQualityTestFinalCallback &&
																c.adQualityTestFinalCallback();
														};
													a.$2.logTimeEvent(
														d,
														e,
														g,
														f,
														a.$1.getAdWidth(),
														a.$1.getAdHeight(),
														h
													);
												},
												function() {
													--a.$9 === 0 && a.$8 && a.$8();
												}
											)
										],
										gatingConfig: c,
										measurementTests: b(
											"AdQualityMeasurementUtils.adquality"
										).getDefaultMeasurements(
											d,
											window,
											ES(
												c.killswitches,
												"includes",
												!0,
												"remove_edge_browser_from_raf_detection"
											)
										)
									});
									return this.$4;
								};
								c.getLogger = function() {
									return this.$2;
								};
								c.$11 = function() {
									this.$3 || g(0, 2333);
									return this.$3;
								};
								c.startListening = function(a) {
									(this.$3 = a),
										this.$2.setPlayer(a),
										this.$11().addEventListener(
											"ended",
											ES(this.$12, "bind", !0, this),
											!1
										),
										this.$11().addEventListener(
											"timeupdate",
											ES(this.$10, "bind", !0, this, null),
											!1
										),
										this.$11().addEventListener(
											"volumechange",
											ES(this.$13, "bind", !0, this),
											!1
										);
								};
								c.$12 = function() {
									this.$9 === 0 && this.$8 && this.$8();
								};
								c.$14 = function() {
									var a = this.$11().getVolume(),
										c = this.$11().isMuted();
									return b("ANVideoStateUtils").isAudible(a, c);
								};
								c.$13 = function() {
									!this.$14() && this.$5.isAudible
										? (this.$2.logMuteEvent(), (this.$5.isAudible = !1))
										: this.$14() &&
										  !this.$5.isAudible &&
										  (this.$2.logUnMuteEvent(), (this.$5.isAudible = !0));
								};
								c.readCurrentState = function() {
									var a = this.$11().getCurrentTime(),
										c = ES("Date", "now", !1),
										d = this.$11().isPaused();
									return {
										clockTimeMs: c,
										videoTime: a,
										isPaused: d,
										isAudible: this.$14(),
										isFullScreen: this.$11().isFullscreen(),
										isContinuous:
											this.$11().enforcesContinuity() ||
											b("ANVideoStateUtils").isContinuous(
												this.$5,
												d,
												c,
												a,
												this.$11().getDuration()
											),
										loggingTimeInterval: 0,
										volume: this.$11().getVolume(),
										playbackRate: this.$11().getPlaybackRate(),
										videoDuration: this.$11().getDuration(),
										forceFlushLog: !!this.$8
									};
								};
								c.$10 = function(a) {
									__p && __p();
									a === void 0 && (a = null);
									var b = this.$11().getDuration();
									if (b <= 0) return;
									a && (this.$8 = a);
									var c = this.readCurrentState(),
										d = ES("Object", "assign", !1, {}, this.$5);
									this.$5.videoTime = c.videoTime;
									this.$5.isPaused = c.isPaused;
									this.$5.clockTimeMs = c.clockTimeMs;
									this.$5.isContinuous = c.isContinuous;
									var e = this.$11().getVolume(),
										f = this.$11().getPlaybackRate(),
										g = this.$11().isFullscreen(),
										h = this.$14();
									d = c.isContinuous ? c.videoTime - d.videoTime : 0;
									this.$9++;
									this.getAdQualityManager().registerProgress({
										loggingTimeInterval: d,
										volume: e,
										playbackRate: f,
										isFullScreen: g,
										isContinuous: c.isContinuous,
										isPaused: c.isPaused,
										clockTimeMs: c.clockTimeMs,
										videoTime: c.videoTime,
										videoDuration: b,
										isAudible: h,
										forceFlushLog: !!a
									});
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(a) {
									__p && __p();
									var c = this;
									this.$2 = function() {
										__p && __p();
										if (c.$1.getNestLevel() === 0)
											return b("ANMWebMediator").NONE;
										for (
											var a = c.$1.ancestorIframes,
												d = ES("Array", "isArray", !1, a),
												e = 0,
												a = d
													? a
													: a[
															typeof Symbol === "function"
																? Symbol.iterator
																: "@@iterator"
													  ]();
											;

										) {
											var f;
											if (d) {
												if (e >= a.length) break;
												f = a[e++];
											} else {
												e = a.next();
												if (e.done) break;
												f = e.value;
											}
											f = f;
											if (f.src) {
												f = b("ANUtils").extractDomain(f.src);
												if (f === c.$1.pageDomain)
													return b("ANMWebMediator").NONE;
											}
										}
										return null;
									};
									this.$4 = function() {
										var a = c.$1.ancestorURLs;
										if (a.length > 0 && c.$1.getSafeFrameAPI()) {
											a = b("ANUtils").extractDomain(a[0]);
											if (window.googletag && a === "tpc.googlesyndication.com")
												return b("ANMWebMediator").GOOGLE_SAFE_FRAME;
											else return b("ANMWebMediator").UNKNOWN_SAFE_FRAME;
										}
										return null;
									};
									this.$5 = function() {
										var a = c.$1.ancestorIframes;
										return a.length > 0 &&
											ES(a[0].id, "indexOf", !0, "google_ads_iframe_") === 0
											? b("ANMWebMediator").GOOGLE_FRIENDLY_IFRAME
											: null;
									};
									this.$8 = function() {
										var a = c.$1.ancestorIframes;
										return a.length > 0 &&
											(ES(a[0].classList, "contains", !0, "str-fan-iframe") ||
												b("nullthrows")(a[0].parentElement).id ===
													"str-fan-placeholder")
											? b("ANMWebMediator").SHARETHROUGH
											: null;
									};
									this.$9 = function() {
										var a = c.$1.ancestorIframes;
										return a.length > 0 &&
											ES(a[0].classList, "contains", !0, "fiSafeFrame") &&
											window.parent.fiQuery
											? b("ANMWebMediator").FIRSTIMPRESSION_IO
											: null;
									};
									this.$1 = a;
								}
								var c = a.prototype;
								c.getMediator = function() {
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
								c.$6 = function() {
									return window.sas &&
										document.querySelector(
											'script[src*="www.smartadserver.com/"]'
										)
										? window.sas_ajax
											? b("ANMWebMediator").SMART_ADSERVER_ASYNC
											: b("ANMWebMediator").SMART_ADSERVER_SYNC
										: null;
								};
								c.$7 = function() {
									if (window.ADNXSMediation && window.ADNXSMediation.adFilled)
										if (window.ADNXSAsync || window.ADNXSMediation.isAsync())
											return b("ANMWebMediator").APPNEXUS_ASYNC;
										else return b("ANMWebMediator").APPNEXUS;
									return null;
								};
								c.$3 = function() {
									return b("AMPContextLoader").isAMP()
										? b("ANMWebMediator").AMP
										: null;
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a() {}
								var b = a.prototype;
								b.getState = function(a, b) {
									if (b < 0.01) return "off-screen";
									else if (a < 0.99) return "invalid";
									else if (b < 0.5) return "partially-on-screen";
									else if (b < 0.99) return "mostly-on-screen";
									else return "completely-on-screen";
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(a) {
									a === void 0 &&
										(a = b("OnScreenDefinition.anweb").MOBILE_FEED),
										(this.$3 = a),
										(this.$1 = "off-screen"),
										(this.$2 = []);
								}
								var c = a.prototype;
								c.updateView = function(a, b) {
									a = this.$3.getState(a, b);
									this.$4(a);
								};
								c.$4 = function(a) {
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
								c.addBehavior = function(a) {
									this.$2.push(a), j(a, h("off-screen"), h(this.$1));
								};
								return a;
							})();
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
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(c, a);
								function c(b, c, d) {
									var e;
									e = a.call(this) || this;
									e.$PlayVideoWhenOnScreenBehavior1 = b;
									e.$PlayVideoWhenOnScreenBehavior2 = c;
									e.$PlayVideoWhenOnScreenBehavior3 = d;
									e.$PlayVideoWhenOnScreenBehavior4 = !1;
									return e;
								}
								var d = c.prototype;
								d.onCompletelyEntered = function() {
									var a = this;
									!this.$PlayVideoWhenOnScreenBehavior4 &&
										this.$PlayVideoWhenOnScreenBehavior2 &&
										!this.$PlayVideoWhenOnScreenBehavior1.wasManuallyPaused() &&
										((this.$PlayVideoWhenOnScreenBehavior4 = !0),
										b("promiseDone.anweb")(
											this.$PlayVideoWhenOnScreenBehavior1.play().then(
												function() {
													return a.$PlayVideoWhenOnScreenBehavior3.event(
														"VIDEO_AUTOPLAY_SUCCEEDED"
													);
												},
												function() {
													return a.$PlayVideoWhenOnScreenBehavior3.event(
														"VIDEO_AUTOPLAY_FAILED"
													);
												}
											)
										));
								};
								d.onMostlyLeft = function() {
									this.$PlayVideoWhenOnScreenBehavior1.pause();
								};
								d.onCompletelyLeft = function() {
									this.$PlayVideoWhenOnScreenBehavior1.pause();
								};
								d.onMostlyEntered = function() {
									this.$PlayVideoWhenOnScreenBehavior1.hasPlayed() &&
										!this.$PlayVideoWhenOnScreenBehavior1.wasManuallyPaused() &&
										this.$PlayVideoWhenOnScreenBehavior1.play();
								};
								return c;
							})(b("OnScreenBehavior.anweb"));
							e.exports = a;
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
							"ANMoatSivt",
							"ANMWebAdElement",
							"ANMWebUnifiedLoggingXOutOrigin",
							"ANMWebXOutClientEvent",
							"ANRewardedVideoPlayer",
							"ANStitchedImage",
							"ANUnifiedLoggingClickEvent",
							"ANUtils",
							"ANWebTwoStepClickDialog",
							"ANWebVideoLogger.anweb",
							"ANWebVideoManager",
							"ANWebVideoPlayer.anweb",
							"ANXOut",
							"AudienceNetworkHTMLVideoPlayer",
							"AudienceNetworkVideoMonitor",
							"HTMLElementFrameContext.adquality",
							"JSSDKCssConfig",
							"LogLevels",
							"MediationDetector",
							"OnScreenBehaviorManager.anweb",
							"PlayVideoWhenOnScreenBehavior.anweb",
							"QueryString",
							"Whiteops",
							"getTime",
							"nullthrows",
							"promiseDone.anweb"
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
							a = (function() {
								__p && __p();
								function a(a, c) {
									__p && __p();
									var d = this;
									this.$82 = function() {
										var a = b("nullthrows")(d.$26);
										d.$21.eventWithParams({
											event_name: "VIDEO_CLICK",
											video_playback_time: a.getCurrentTime(),
											video_duration: a.getDuration()
										});
									};
									this.$25 = new (b("ANCallbackManager"))(
										c,
										a.onMediaLoaded,
										a.onRewardCompleted,
										a.onAdClosed
									);
									this.$19 = !1;
									this.$4 = a;
									this.$20 = new (b("ANEventCounter"))();
									this.$11 = !1;
									this.$12 = !1;
									this.$23 = !1;
									this.$3 = !1;
									this.$20.addListener(function() {
										return d.$25.mediaLoaded();
									});
									this.$8 = a.displayFormat || a.format || "300x250";
									this.tagJsIframeAppendedTime = a.tagJsIframeAppendedTime;
									this.$21 = new (b("ANLogger"))(
										b("LogLevels").ERROR,
										a.tagJsInitTime,
										b("ANUtils").getNavigationStart(),
										b("ANUtils").onlyString(a.data.key),
										a.iframe,
										a.domain
									);
									this.$9 = c;
									this.$10 = new (b("HTMLElementFrameContext.adquality"))(
										this.$9,
										this.$28()
									);
									this.$2 = null;
									this.$18 = new (b("OnScreenBehaviorManager.anweb"))();
									this.$22 = new (b("ANLinkOpener"))(this.$9);
									this.$28().addEventListener("beforeunload", function() {
										d.$21.event("ADNW_PAGE_UNLOADED");
									});
								}
								var c = a.prototype;
								c.sendToFacebook = function(a) {
									b("ANUtils").sendToFacebook(
										this.$4.iframe,
										this.$4.domain,
										a
									);
								};
								c.$28 = function() {
									return this.$9.ownerDocument.defaultView;
								};
								c.$29 = function() {
									return this.$28().frameElement;
								};
								c.$30 = function(a) {
									a = a.ownerDocument;
									var c = a.createElement("style");
									c.innerText = b("JSSDKCssConfig").rules;
									a.body && a.body.appendChild(c);
								};
								c.$31 = function() {
									return b("nullthrows")(this.$24);
								};
								c.$32 = function() {
									return this.$9.getElementsByClassName("adnwTextOnlyXOut")[0];
								};
								c.$33 = function() {
									if (!this.$31().$34) return !1;
									var a = this.$35();
									return (
										(a.clientWidth >= 300 && a.clientHeight >= 250) ||
										this.$36() ||
										this.$37()
									);
								};
								c.$38 = function(a) {
									__p && __p();
									var c = this,
										d = this.$35();
									if (!this.$33()) {
										var e = new (b("ANAdChoices"))(d, a);
										e.render();
										return;
									}
									e = null;
									this.$27
										? (e = this.$27.getXoutButton())
										: this.$37() && (e = this.$32());
									var f = b("ANMWebUnifiedLoggingXOutOrigin").INLINE_CONDENSED;
									d = new (b("ANXOut"))({
										parentEl: d,
										adIcon: a.adIcon,
										adChoicesLink: a.adChoicesHref,
										content: this.$31().$39,
										buttonEl: e,
										allowOptionStepClose: this.$31().$40.allowOptionStepClose,
										onXOutStart: function() {
											c.$21.event(b("ANMWebXOutClientEvent").START, f);
										},
										onXOutCancel: function() {
											c.$21.event(b("ANMWebXOutClientEvent").CANCEL, f);
										},
										onXOutOption: function(a) {
											c.sendToFacebook({
												name: "xout",
												params: {
													key: b("ANUtils").onlyString(c.$4.data.key),
													reason: a,
													type: f
												}
											}),
												c.$21.event(
													b("ANMWebXOutClientEvent").SELECT_OPTION,
													a
												);
										},
										onXOutFinish: function() {
											c.$25.adClosed(),
												c.$21.event(b("ANMWebXOutClientEvent").FINISH);
										}
									});
									d.render();
									return;
								};
								c.renderAd = function(a, c, d, e) {
									__p && __p();
									var f = this;
									e = a.features || {};
									this.$24 = {
										$41: !!e.clickOpenNewTab,
										$42: !!e.enableWhiteops,
										$43: e.appIDHashed,
										$40: e,
										$34: e.inlineXOut,
										$44: !!e.useIntersectionObserver,
										$45: !!e.useCtaFallback,
										$39: a.xout,
										$46: e.clickGuardElements || i,
										$47: j(e.video || {}),
										$48: e.fullwidthMinAspectRatio || 1.5,
										$49: e.autoplayEnabled === !0,
										$50: e.separateVideoViewability === !0,
										$51: e.pubSideLogging === !0,
										$52: e.moatUrl
									};
									this.$21.setLogLevel(
										this.$31().$40.logLevel || b("LogLevels").ERROR
									);
									this.$21.frameReady();
									this.$21.setUnifiedLoggingURL(a.unifiedLoggingURL);
									this.$1 = b("getTime")();
									this.$31().$40.rp && this.$25.enableReward();
									var g = 0,
										h = !!a.creativeMarkupBackup;
									!a.nativeAd
										? (this.$9.style.display = "")
										: (a.creativeMarkup &&
												(this.$53() ? this.$54() : this.$55(),
												this.$31().$40.resizeMediaView &&
													((this.$9.style.visibility = "hidden"),
													(g = this.$56()))),
										  this.$57(
												a,
												a.creativeMarkup,
												this.$9,
												c,
												!!this.$31().$40.resizeMediaView
										  ));
									this.$35().classList.add("fbAdLoaded");
									d(a.placementId);
									this.$31().$40.resizeMediaView
										? window.setTimeout(function() {
												__p && __p();
												var d = new (b("ANFullWidthLoader"))(
														h,
														f.$29(),
														f.$9,
														f.$7,
														f.$13,
														f.$21,
														g
													),
													e = f.$35();
												e.style.width = b("ANUtils").cssSize(f.$13);
												f.$5 && f.$5.ensureSizes();
												e = d.resize(f.$13, e.offsetHeight);
												e && ((f.$11 = !0), (f.$12 = !!a.nativeCarouselAds));
												f.$38(a.nativeAd);
												if (h) {
													var i = function() {
														f.$31().$40.useClientSideCarouselStitch ||
															(a.nativeCarouselAds = null),
															d.restoreOriginalStyles(),
															f.$58(
																a,
																a.creativeMarkupBackup,
																c,
																!!f.$31().$40.resizeMediaView
															),
															(f.$11 = !1),
															(f.$12 = !1),
															f.$38(a.nativeAd),
															(f.$9.style.visibility = "visible");
													};
													if (!e) i();
													else {
														e = function a() {
															b("ANUtils").screenIsPortrait() ||
																(window.removeEventListener(
																	"orientationchange",
																	a
																),
																i());
														};
														window.addEventListener("orientationchange", e);
													}
												}
										  }, 0)
										: this.$38(a.nativeAd);
									this.$31().$45 === !0 &&
										(this.$17 = this.$59(a.nativeAd, this.$9, c));
									this.$60(!!a.nativeAd.adVideo);
									this.$21.eventWithParams(this.$61("ADNW_ADLOADED"));
									b("ANUtils").autofitTextWhereNeeded(this.$35());
									this.$62();
								};
								c.$61 = function(a) {
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
								c.$62 = function() {
									var a = this.$31().$40.forceIframeSize;
									if (a) {
										var c = this.$29();
										c &&
											((c.style.width = b("ANUtils").cssSize(a.w)),
											(c.style.height = b("ANUtils").cssSize(a.h)));
									}
								};
								c.$56 = function() {
									var a = 300,
										c = b("ANUtils").getScreenWidth(),
										d = this.$29() || this.$9;
									d = b("ANUtils").findWidestParentElement(d);
									var e = b("ANUtils").calculateLargestMargin(d);
									this.$13 = c - e * 2;
									this.$13 < a &&
										((this.$13 = a), (e = d.getBoundingClientRect().right - a));
									return e;
								};
								c.$54 = function() {
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
								c.$55 = function() {
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
								c.$35 = function() {
									var a = this.$53() ? this.$6 || this.$9 : this.$9;
									return (
										a.getElementsByClassName("fbANRoot")[0] ||
										a.getElementsByClassName("thirdPartyRoot")[0] ||
										a
									);
								};
								c.$63 = function(a) {
									return a && a.video ? j(a.video) : this.$31().$47;
								};
								c.$57 = function(a, b, c, d, e) {
									(a.nativeAd.loaded = !1),
										b && b.raw && ((this.$6.innerHTML = b.raw), (c = this.$6)),
										c && ((c = this.$35()), this.$30(c)),
										this.$31().$45 !== !0 &&
											(this.$17 = this.$59(a.nativeAd, c, d)),
										(this.$15 = this.$64(
											c,
											a.requestId,
											a.creativeMarkup,
											a.nativeAd,
											a.nativeCarouselAds,
											e,
											b && b.dfp,
											this.$63(b)
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
								c.$65 = function(a, c) {
									a = this.$66(a);
									b("ANUtils").resizeElement(
										c,
										this.$13,
										Math.round(this.$13 / a)
									);
								};
								c.$67 = function() {
									this.$21.eventWithParams(
										this.$61("ADNW_MOSTLY_VIEWABLE_FOR_1S")
									);
								};
								c.$68 = function() {
									__p && __p();
									if (this.$2) {
										this.$21.error("Multiple ADIMPRESSION attempted.");
										return;
									}
									this.$2 = b("getTime")();
									var a = this.$69();
									this.sendToFacebook({
										name: "impress",
										params: {
											key: b("ANUtils").onlyString(this.$4.data.key),
											payload: a
										}
									});
									this.$21.eventWithParams(this.$61("ADNW_ADIMPRESSION"));
									this.$33() &&
										this.$21.event(b("ANMWebXOutClientEvent").HAS_INLINE_XOUT);
									this.$70();
								};
								c.$70 = function() {
									__p && __p();
									var a = this,
										c = this.$31().$52;
									if (c == null) return;
									var d = this.$9;
									if (d == null) {
										this.$21.error("missing ad element");
										return;
									}
									c = new (b("ANMoatSivt"))(c, d.ownerDocument);
									b("promiseDone.anweb")(
										c
											.getMeasurements()
											.then(function(c) {
												a.sendToFacebook({
													name: "moat_sivt",
													params: {
														key: b("ANUtils").onlyString(a.$4.data.key),
														payload: c
													}
												});
											})
											["catch"](function(b) {
												return a.$21.error(b);
											})
									);
								};
								c.$71 = function() {
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
								c.$59 = function(a, b, c) {
									__p && __p();
									if (this.$31().$45 !== !0) return a && b ? b : c;
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
								c.$60 = function(a) {
									__p && __p();
									var c = this;
									this.$16 = new (b("AdQualityViewabilityMonitor"))(
										this.$17,
										this.$31().$44
									);
									this.$16.attachBehaviorManager(this.$18);
									var d = new (b("AdImpressionBehavior.anweb"))(
										function() {
											(a && c.$72()) || c.$73();
										},
										function() {
											return c.$21.event("ADNW_PARTIAL_ADIMPRESSION");
										}
									);
									this.$19 || d.mediaLoaded();
									this.$18.addBehavior(d);
									this.$20.addListener(function() {
										return d.mediaLoaded();
									});
									if (this.$31().$40.useMostlyViewableImp) {
										var e = new (b("AdMostlyViewableImpressionBehavior.anweb"))(
											function() {
												return c.$67();
											}
										);
										this.$19 || e.mediaLoaded();
										this.$18.addBehavior(e);
										this.$20.addListener(function() {
											return e.mediaLoaded();
										});
									}
								};
								c.$66 = function(a) {
									if (a.adImageAspectRatio != null && a.adImageAspectRatio > 0)
										return Math.max(a.adImageAspectRatio, this.$31().$48);
									else if (a.adVideo) return 1.75;
									else return 1.9;
								};
								c.$74 = function(a, b, c, d, e, f) {
									e && c && !c.use_carousel_stitch
										? this.$75(b, e)
										: d.adVideo
											? this.$76(b, d, f)
											: this.$31().$40.useClientSideCarouselStitch &&
											  e &&
											  c &&
											  c.use_carousel_stitch &&
											  e.length > 1
												? this.$77(b, e)
												: this.$78(b, d);
								};
								c.$75 = function(a, c) {
									__p && __p();
									var d = this;
									this.$19 = !0;
									var e = new (b("ANCarousel"))({
										parent: a,
										ads: c,
										onCriticalAnimationStart: function() {
											d.$16.pause();
										},
										onCriticalAnimationEnd: function() {
											d.$16.resume();
										},
										onEvent: function(a, b) {
											switch (a) {
												case "AN_CAROUSEL_EVENT_SWIPE":
													d.$21.eventWithParams({
														event_name: "CAROUSEL_SWIPE",
														index: b.index,
														direction: b.direction
													});
											}
										},
										onLoadEventCounter: this.$20,
										adFeatures: this.$31().$40
									});
									a.appendChild(e.getElement());
									e.ensureSizes();
									ES(e.getLinks(), "forEach", !0, function(a, b) {
										d.$79(a, c[b]);
									});
									this.$5 = e;
								};
								c.$80 = function(a) {
									__p && __p();
									var c = b("nullthrows")(a.parentElement);
									c.style.overflow = "hidden";
									var d = c.ownerDocument.defaultView.getComputedStyle(c)
										.position;
									d !== "absolute" && (c.style.position = "relative");
									a.style.objectFit = "contain";
									a.style.position = "relative";
									d = document.createElement("div");
									d.style.backgroundImage = "url(" + a.src + ")";
									d.style.backgroundPosition = "center center";
									d.style.backgroundSize = "cover";
									d.style.position = "absolute";
									d.style.left = "-20px";
									d.style.top = "-20px";
									d.style.right = "-20px";
									d.style.bottom = "-20px";
									d.style.filter = "blur(20px)";
									d.dataset.fbImageBackdrop = "true";
									c.insertBefore(d, a);
								};
								c.$78 = function(a, b) {
									var c = this.$81(b);
									a.firstChild
										? a.insertBefore(c, a.firstChild)
										: a.appendChild(c);
									this.$31().$40.addImageBackdrop &&
										b.adImageAspectRatio &&
										b.adImageAspectRatio < 1.9 &&
										this.$80(c);
								};
								c.$77 = function(a, c) {
									this.$19 = !0;
									var d = new (b("ANStitchedImage"))(this.$20, this.$21);
									a.appendChild(d.render(c[0], c[1]));
								};
								c.$76 = function(a, c, d) {
									__p && __p();
									var e = this;
									if (!c.adVideo) throw new Error("No video for Ad.");
									var f = this.$31().$49;
									this.$21.event(
										f ? "VIDEO_AUTOPLAY_ENABLED" : "VIDEO_AUTOPLAY_DISABLED"
									);
									this.$19 = !0;
									this.$20.addRequiredEvent();
									c = new (b("ANWebVideoPlayer.anweb"))(
										b("nullthrows")(c.adVideo),
										c.adImage,
										f,
										d,
										function() {
											e.$20.requiredEventFired();
										},
										this.$82
									);
									d = this.$36() && this.$25.isRewardEnabled();
									if (d) {
										var g = b("nullthrows")(this.$6);
										this.$27 = new (b("ANRewardedVideoPlayer"))(
											this.$25,
											g,
											c,
											this.$31().$34
										);
										this.$27.makeRewarded();
										g.style.maxWidth = "";
										this.$7 &&
											((this.$7.style.maxWidth = "100vw"),
											(this.$7.style.maxHeight = "100vh"));
									}
									if (this.$72()) {
										g = new (b("AudienceNetworkHTMLVideoPlayer"))(
											c.getVideoElement(),
											!0
										);
										var h =
											this.$31().$40.logVideoEvents !== !0 &&
											this.$31().$40.videoMrcImpression === !0;
										h = new (b("ANWebVideoLogger.anweb"))(
											h,
											g,
											b("ANUtils").onlyString(this.$4.data.key),
											function(a) {
												return e.sendToFacebook(a);
											},
											function() {
												return e.$73();
											}
										);
										h = new (b("AudienceNetworkVideoMonitor"))(
											new (b("ANWebVideoManager"))(g),
											h
										);
										h.startListening(g);
									}
									a.appendChild(c.getElement());
									this.$26 = c;
									this.$25.setVideo(c);
									if (!d) {
										h = this.$18;
										if (this.$31().$50) {
											g = c.getVideoElement();
											a = new (b("AdQualityViewabilityMonitor"))(
												g,
												this.$31().$44
											);
											h = new (b("OnScreenBehaviorManager.anweb"))();
											a.attachBehaviorManager(h);
										}
										h.addBehavior(
											new (b("PlayVideoWhenOnScreenBehavior.anweb"))(
												c,
												f,
												this.$21
											)
										);
									}
								};
								c.$83 = function(a) {
									this.$21.logClick(a, b("nullthrows")(this.$1));
									var c = a.href;
									a.clickParams.clknutab !== !0 || b("ANUtils").isAppStoreURL(c)
										? this.$22.open(c)
										: this.$22.openNewTab(c);
								};
								c.$79 = function(a, c) {
									__p && __p();
									var d = this,
										e = function(a, e) {
											__p && __p();
											var f = b("getTime")(),
												g = c.href,
												h = b("ANUtils").maybeHTMLElement(e.target);
											h = h ? d.$84(h) : b("ANMWebAdElement").UNKNOWN;
											var i = {};
											if (d.$16) {
												var j = d.$16.getDimensions(),
													k = d.$16.getCurrentViewabilityState();
												j != null &&
													((i.height = j.height),
													(i.width = j.width),
													k.widthInView != null &&
														k.heightInView != null &&
														((i.visibleWidth = Math.round(
															k.widthInView * j.width
														)),
														(i.visibleHeight = Math.round(
															k.heightInView * j.height
														))));
												if (d.$10.getSafeFrameAPI())
													(i.relClickX = e.clientX), (i.relClickY = e.clientY);
												else {
													i.clickX = e.clientX;
													i.clickY = e.clientY;
													if (k.viewportLeft != null && k.viewportTop != null)
														(i.relClickX = e.clientX - k.viewportLeft),
															(i.relClickY = e.clientY - k.viewportTop);
													else {
														j = d.$35().getBoundingClientRect();
														i.relClickX = e.clientX - j.left;
														i.relClickY = e.clientY - j.top;
													}
												}
											}
											k = {
												clktm: Math.round(f / 1e3),
												clknutab: d.$31().$41,
												touch: ES("JSON", "stringify", !1, i)
											};
											d.$2 && (k.clkdel = f - d.$2);
											i.height &&
												i.width &&
												i.visibleWidth &&
												i.visibleHeight &&
												(k.vp =
													(i.visibleWidth * i.visibleHeight) /
													(i.height * i.width));
											e = b("ANUtils").isAppStoreURL(g);
											j =
												ES(
													g,
													"indexOf",
													!0,
													"facebook.com/ads/conv_redirect"
												) !== -1 &&
												a === b("ANUnifiedLoggingClickEvent").BILLABLE_CLICK;
											f =
												!j &&
												d.$31().$51 &&
												d.$21.isPublisherSideLoggingSupported() &&
												a === b("ANUnifiedLoggingClickEvent").BILLABLE_CLICK;
											f &&
												g === "" &&
												(d.$21.error("pub_logging_no_href"), (f = !1));
											h = {
												key: b("ANUtils").onlyString(d.$4.data.key),
												href: g,
												clickParams: k,
												adElementType: h,
												action: a,
												videoDuration: d.$26 == null ? 0 : d.$26.getDuration(),
												videoPlaybackTime:
													d.$26 == null ? 0 : d.$26.getCurrentTime(),
												pos: {
													element: h,
													width: i.width,
													height: i.height,
													visibleWidth: i.visibleWidth,
													visibleHeight: i.visibleHeight,
													clickX: i.clickX,
													clickY: i.clickY,
													relClickX: i.relClickX,
													relClickY: i.relClickX
												},
												onlyClickClientEvent: j
											};
											if (f) d.$83(h);
											else if (j) {
												d.sendToFacebook({ name: "click", params: h });
												f = b("QueryString").appendToUrl(g, {
													ts: k.clktm,
													dl: k.clkdel,
													w: i.width,
													h: i.height,
													vw: i.visibleWidth,
													vh: i.visibleHeight,
													cx: i.clickX,
													cy: i.clickY,
													rcx: i.relClickX,
													rcy: i.relClickY
												});
												d.$22.openNewTab(f);
											} else
												d.sendToFacebook({ name: "click", params: h }),
													d.$31().$41 &&
														g &&
														!e &&
														a ===
															b("ANUnifiedLoggingClickEvent").BILLABLE_CLICK &&
														d.$22.openNewTab(g);
											if (d.$31().$41 || e) {
												j = new (b("ANBounceBackManager"))(window.document);
												var l = b("getTime")();
												j.onBounceBack(function(a) {
													d.sendToFacebook({
														name: "bounce",
														params: {
															key: b("ANUtils").onlyString(d.$4.data.key),
															leaveTime: l,
															backTime: b("getTime")()
														}
													}),
														d.$21.event("ADNW_BOUNCEBACK", "" + a);
												});
											}
										},
										f = function() {
											b("ANWebTwoStepClickDialog")
												.openDialog(d.$35(), c.adSubtitle, c.adIcon)
												.onConfirm(function(a) {
													(d.$23 = !0),
														e(
															b("ANUnifiedLoggingClickEvent").BILLABLE_CLICK,
															a
														);
												})
												.onDismiss(function(a) {
													(d.$23 = !1),
														e(
															b("ANUnifiedLoggingClickEvent").TWO_STEP_CANCEL,
															a
														);
												});
										},
										g = function(a) {
											var c = b("getTime")(),
												g = b("ANUtils").maybeHTMLElement(a.target);
											g = g ? d.$84(g) : b("ANMWebAdElement").UNKNOWN;
											var h = d.$31().$40.minClickDelay;
											h && d.$1 && d.$1 + h > c && !d.$3
												? ((d.$3 = !0),
												  e(b("ANUnifiedLoggingClickEvent").CLICK_GUARD, a),
												  d.$11 &&
														d.$31().$40.useTwoStepOnFastClicks === !0 &&
														f())
												: ES(d.$31().$46, "includes", !0, g) &&
												  d.$11 &&
												  !d.$12 &&
												  d.$31().$40.useTwoStepClick === !0 &&
												  !d.$23
													? (e(
															b("ANUnifiedLoggingClickEvent").TWO_STEP_DIALOG,
															a
													  ),
													  f())
													: e(
															b("ANUnifiedLoggingClickEvent").BILLABLE_CLICK,
															a
													  );
											a.preventDefault();
											a.stopPropagation();
										};
									if (!this.$6) {
										a.addEventListener("click", g);
										return;
									}
									var h = this.$6.querySelector(".adnwTwoClickBlocker");
									if (h && !!this.$31().$40.clickConfirmation) {
										var i = b("nullthrows")(h.querySelector(".adnwCancelLink"));
										i.addEventListener("click", function(a) {
											h.style.display = "none";
										});
										i = b("nullthrows")(h.querySelector(".adnwContinueLink"));
										i.addEventListener("click", function(a) {
											(h.style.display = "none"), g(a);
										});
										a.addEventListener("click", function(a) {
											h.style.display = "block";
										});
									} else a.addEventListener("click", g);
								};
								c.applyAdTypeClass = function(a, b, c) {
									c
										? (a.className += " fbCarouselType")
										: b.adVideo
											? (a.className += " fbVideoType")
											: (a.className += " fbDisplayType");
								};
								c.$58 = function(a, c, d, e) {
									__p && __p();
									this.$16.pause();
									a.nativeAd.loaded = !1;
									this.$6.innerHTML = c.raw;
									if (this.$6 == null) return;
									this.$30(this.$35());
									if (this.$6 == null) return;
									this.$85(
										this.$6,
										a.creativeMarkup,
										a.nativeAd,
										a.nativeCarouselAds,
										e,
										c && c.dfp,
										this.$63(c)
									);
									this.$6 &&
										((this.$16 = new (b("AdQualityViewabilityMonitor"))(
											this.$6
										)),
										this.$16.attachBehaviorManager(this.$18));
								};
								c.$85 = function(a, c, d, e, f, g, h) {
									d.loaded = !0;
									this.$14 = a.getElementsByClassName(
										b("ANMWebAdElement").FB_AD_MEDIA
									);
									for (f = 0; f < this.$14.length; f++)
										this.$74(a, this.$14[f], c, d, e, h);
									this.$86(a, d, g);
									c = a.getElementsByClassName(b("ANMWebAdElement").FB_AD_ICON);
									for (f = 0; f < c.length; f++) c[f].appendChild(this.$87(d));
								};
								c.$88 = function(a) {
									a = b("nullthrows")(a.ownerDocument.body);
									a.addEventListener("touchstart", function() {}, !1);
								};
								c.$64 = function(a, c, d, e, f, g, h, i) {
									if (!a || !e || e.loaded) return !1;
									this.applyAdTypeClass(a, e, f);
									this.$88(a);
									e.loaded = !0;
									var j = !1;
									d = this.$89(a, d, e, f, g, h, i);
									this.$31().$42 === !0 &&
										b("Whiteops").run(
											c,
											"AN_MWEB",
											e.topDomain,
											this.$31().$43,
											a
										);
									return j || d;
								};
								c.$89 = function(a, c, d, e, f, g, h) {
									var i,
										j = !1;
									this.$14 = a.getElementsByClassName(
										b("ANMWebAdElement").FB_AD_MEDIA
									);
									for (i = 0; i < this.$14.length; i++)
										(j = !0),
											f && !e && this.$65(d, this.$14[i]),
											this.$74(a, this.$14[i], c, d, e, h);
									this.$86(a, d, g);
									c = a.getElementsByClassName(b("ANMWebAdElement").FB_AD_ICON);
									for (i = 0; i < c.length; i++) c[i].appendChild(this.$87(d));
									return j;
								};
								c.$86 = function(a, c, d) {
									__p && __p();
									var e;
									d = a.getElementsByClassName(
										b("ANMWebAdElement").FB_AD_TITLE
									);
									for (e = 0; e < d.length; e++) d[e].textContent = c.adTitle;
									d = a.getElementsByClassName(
										b("ANMWebAdElement").FB_AD_SUBTITLE
									);
									for (e = 0; e < d.length; e++)
										d[e].textContent = c.adSubtitle;
									d = a.getElementsByClassName(b("ANMWebAdElement").FB_AD_BODY);
									for (e = 0; e < d.length; e++) d[e].textContent = c.adBody;
									d = a.getElementsByClassName(
										b("ANMWebAdElement").FB_AD_CALL_TO_ACTION
									);
									for (e = 0; e < d.length; e++)
										d[e].textContent = c.adCallToAction;
									d = a.getElementsByClassName("fbAdSocialContext");
									for (e = 0; e < d.length; e++)
										d[e].textContent = c.adSocialContext;
									d = a.getElementsByClassName("fbAdLink");
									for (e = 0; e < d.length; e++) this.$79(d[e], c);
								};
								c.$87 = function(a) {
									var b = this,
										c = document.createElement("img");
									c.style.height = "100%";
									c.style.width = "100%";
									this.$19 = !0;
									this.$20.addRequiredEvent();
									c.addEventListener("load", function() {
										b.$20.requiredEventFired();
									});
									c.src = a.adIcon;
									return c;
								};
								c.$81 = function(a) {
									__p && __p();
									var b = this,
										c = document.createElement("img");
									c.style.height = "100%";
									c.style.width = "100%";
									this.$19 = !0;
									this.$20.addRequiredEvent();
									c.addEventListener("load", function() {
										b.$20.requiredEventFired(),
											c.naturalWidth === 1 &&
												c.naturalHeight === 1 &&
												b.$21.eventWithParams({
													event_name: "ADNW_ADERROR",
													error_message: "Image loading error (1x1)",
													error_stack_trace: c.src
												});
									});
									c.addEventListener("error", function() {
										b.$21.eventWithParams({
											event_name: "ADNW_ADERROR",
											error_message: "Image loading error (uncaught)",
											error_stack_trace: c.src
										});
									});
									c.src = a.adImage;
									return c;
								};
								c.$90 = function() {
									return this.$8 === "native";
								};
								c.$36 = function() {
									return this.$8 === "rewarded_video";
								};
								c.$37 = function() {
									return this.$8 === "text";
								};
								c.$53 = function() {
									return !this.$29() && !this.$90() && h[this.$8];
								};
								c.$73 = function() {
									this.$35().classList.add("fbVisibleOnce"), this.$68();
								};
								c.$69 = function() {
									var a = this.$16.getDimensions(),
										c =
											(this.$16 && this.$16.getCurrentViewabilityState()) ||
											null;
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
										iframe_status: this.$71(),
										nest_level: this.$10.getNestLevel(),
										iframe_urls: this.$10.ancestorURLs.slice(0, -1),
										mediation_service: new (b("MediationDetector"))(
											this.$10
										).getMediator(),
										nmv: this.$15
									};
								};
								c.$84 = function(a) {
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
								c.$72 = function() {
									return (
										this.$31().$40.videoMrcImpression === !0 ||
										this.$31().$40.logVideoEvents === !0
									);
								};
								return a;
							})();
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
							a = (function() {
								__p && __p();
								function a(a, c, d, e, f, g, h) {
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
								a.render = function(b, c, d, e, f, g, h) {
									b = new a(b, c, d, e, f, g, h);
									b.$10();
									return b;
								};
								var c = a.prototype;
								c.$11 = function(a, c) {
									var d = this,
										e = c.querySelector(".fbArticleImage"),
										f = new (b("OnScreenBehaviorManager.anweb"))();
									c = new (b("AdQualityViewabilityMonitor"))(c);
									c.attachBehaviorManager(f);
									var g = new (b("AdImpressionBehavior.anweb"))(
										function() {
											d.$5(a);
										},
										function() {}
									);
									e &&
										(e.complete && g.mediaLoaded(),
										e.addEventListener("load", function() {
											g.mediaLoaded();
										}));
									f.addBehavior(g);
								};
								c.$12 = function(a, b, c) {
									var d = this;
									this.$11(a, c);
									c.addEventListener("click", function() {
										d.$6(a), d.$9.open(b.link);
									});
								};
								c.$13 = function(a, c) {
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
								c.$10 = function() {
									__p && __p();
									var a = this.$3.querySelectorAll(".fbSlot"),
										c = 0,
										d = 0;
									for (var e = 0; e < a.length; e++) {
										var f = a[e];
										if (ES(f.classList, "contains", !0, "fbSlotAd")) {
											var g = this.$2[c++];
											this.$8.push(g);
											this.$7(g, f);
										} else if (
											ES(f.classList, "contains", !0, "fbSlotArticle")
										) {
											g = this.$1[d++];
											this.$8.push(g);
											this.$13(g, f);
											this.$12(e, g, f);
										}
									}
									b("ANUtils").autofitIfInDfpIframe(this.$3);
								};
								return a;
							})();
							e.exports = a;
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
							a = (function() {
								__p && __p();
								function a(a) {
									var c = this;
									this.$1 = !1;
									this.$2 = a;
									this.$3 = new (b("ANLogger"))(
										b("LogLevels").ERROR,
										a.tagJsInitTime,
										b("ANUtils").getNavigationStart(),
										this.$4(),
										this.$2.iframe,
										this.$2.domain
									);
									window.addEventListener("pagehide", function() {
										c.$1 || c.$3.event("ADNW_UNLOAD_BEFORE_ADLOADED");
									});
								}
								var c = a.prototype;
								c.$4 = function() {
									return b("ANUtils").onlyString(
										this.$2.data.key ||
											(this.$2.data.keys && this.$2.data.keys[0])
									);
								};
								c.sendToFacebook = function(a) {
									b("ANUtils").sendToFacebook(
										this.$2.iframe,
										this.$2.domain,
										a
									);
								};
								c.renderAd = function(a, c, d, e, f) {
									var g = ES("Object", "assign", !1, {}, this.$2, { data: a });
									g = new (b("ANAdManager"))(g, c);
									g.renderAd(a, d, e, f);
								};
								c.$5 = function(a) {
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
								c.$6 = function() {
									return b("ANUtils").onlyString(this.$2.data.requestId);
								};
								c.$7 = function(a, c, d, e) {
									__p && __p();
									var f = this,
										g = this.$5(a),
										h = !!a.recommendedContent,
										i = g.length > 1,
										j = this.$2.rootElement,
										k = a.features || {},
										l = null;
									if (
										h &&
										!b("ANUtils").isInDfpIframe(j) &&
										k.wrapRecirculationInIframe
									) {
										var m = document.createElement("div");
										j.innerHTML = "";
										j.appendChild(m);
										k.wrapRecirculationInIframe &&
											(l = b("ANUtils").wrapInIframe(j, m));
										j = m;
									}
									a.wrapperMarkup && (j.innerHTML = a.wrapperMarkup);
									if (h)
										b("ANRecirculationUnit").render(
											a.recommendedContent,
											g,
											j,
											a.wrapperItemMarkup,
											function(a, b) {
												f.renderAd(a, b, c, d, e);
											},
											function(a) {
												b("ANUtils").sendToFacebook(f.$2.iframe, f.$2.domain, {
													name: "recirc",
													params: {
														reqId: f.$6(),
														payload: { type: "impression", index: a }
													}
												});
											},
											function(d) {
												var c = a.features || {};
												if (c.skipRecircClickEvent === !0) return;
												b("ANUtils").sendToFacebook(f.$2.iframe, f.$2.domain, {
													name: "recirc",
													params: {
														reqId: f.$6(),
														payload: { type: "click", index: d }
													}
												});
											}
										),
											l != null &&
												b("ANUtils").resizeElement(l, "100%", j.clientHeight);
									else
										for (var k = 0; k < g.length; k++) {
											m = g[k];
											h = j;
											i &&
												((h = document.createElement("div")),
												(h.className = "fbAdSlot-" + k),
												j.appendChild(h));
											this.renderAd(m, h, c, d, e);
										}
								};
								c.adLoaded = function(a, c, d, e) {
									__p && __p();
									if (this.$1) {
										this.$3.error("Multiple ADLOADED attempted.");
										return;
									}
									var f = a.features || {};
									this.$3.setLogLevel(f.logLevel || b("LogLevels").ERROR);
									this.$3.frameReady();
									if (!a.success) {
										this.$3.error();
										e(a.errorCode, a.errorMsg, a.placementId);
										return;
									}
									this.$7(a, c, d, e);
									this.$1 = !0;
								};
								return a;
							})();
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
				'","revision":"4901049","namespace":"FB","message":"' +
				e.message +
				'"}}'
		);
}
