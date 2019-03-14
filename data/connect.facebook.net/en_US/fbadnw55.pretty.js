/*1552543309,,JIT Construction: v4850155,en_US*/

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
						function(a, b, c, d, e, f, g) {
							__p && __p();
							var h = {}.hasOwnProperty;
							a = {};
							function i() {}
							a.create = function(a) {
								var b = typeof a;
								if (b != "object" && b != "function")
									throw new TypeError(
										"Object prototype may only be a Object or null"
									);
								i.prototype = a;
								return new i();
							};
							a.keys = function(a) {
								var b = typeof a;
								if ((b != "object" && b != "function") || a === null)
									throw new TypeError("Object.keys called on non-object");
								var c = [];
								for (var d in a) h.call(a, d) && c.push(d);
								g(a, function(a) {
									return c.push(a);
								});
								return c;
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
						function(a, b, c, d, e, f, g) {
							__p && __p();
							var h = {}.hasOwnProperty;
							a = {
								assign: function(a) {
									__p && __p();
									if (a == null)
										throw new TypeError(
											"Object.assign target cannot be null or undefined"
										);
									a = Object(a);
									for (
										var b = 0;
										b < (arguments.length <= 1 ? 0 : arguments.length - 1);
										b++
									) {
										var c =
											b + 1 < 1 || arguments.length <= b + 1
												? void 0
												: arguments[b + 1];
										if (c == null) continue;
										c = Object(c);
										for (var d in c) h.call(c, d) && (a[d] = c[d]);
										g(c, function(b) {
											return (a[b] = c[b]);
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
						function(a, b, c, d, e, f, g, h) {
							__p && __p();
							var i = g.isArray,
								j = h.indexOf;
							function k(a) {
								return Math.min(Math.max(l(a), 0), Number.MAX_SAFE_INTEGER);
							}
							function l(a) {
								a = Number(a);
								return isFinite(a) && a !== 0
									? m(a) * Math.floor(Math.abs(a))
									: a;
							}
							function m(a) {
								return a >= 0 ? 1 : -1;
							}
							a = {
								includes: function(a) {
									"use strict";
									__p && __p();
									if (
										a !== void 0 &&
										i(this) &&
										!(typeof a === "number" && isNaN(a))
									)
										return j.apply(this, arguments) !== -1;
									var b = Object(this),
										c = b.length ? k(b.length) : 0;
									if (c === 0) return !1;
									var d = arguments.length > 1 ? l(arguments[1]) : 0,
										e = d < 0 ? Math.max(c + d, 0) : d,
										f = isNaN(a) && typeof a === "number";
									while (e < c) {
										var g = b[e];
										if (g === a || (typeof g === "number" && f && isNaN(g)))
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
						function(a, b, c, d, e, f, g) {
							__p && __p();
							var h = {}.hasOwnProperty;
							a = {};
							a.entries = function(a) {
								if (a == null)
									throw new TypeError("Object.entries called on non-object");
								var b = [];
								for (var c in a) h.call(a, c) && b.push([c, a[c]]);
								g(a, function(c) {
									return b.push([c, a[c]]);
								});
								return b;
							};
							a.values = function(a) {
								if (a == null)
									throw new TypeError("Object.values called on non-object");
								var b = [];
								for (var c in a) h.call(a, c) && b.push(a[c]);
								g(a, function(c) {
									return b.push(a[c]);
								});
								return b;
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
						function(
							a,
							b,
							c,
							d,
							e,
							f,
							g,
							h,
							i,
							j,
							k,
							l,
							m,
							n,
							o,
							p,
							q,
							r,
							s,
							t,
							u
						) {
							__p && __p();
							var v = {}.toString,
								w = { "JSON.stringify": u.stringify, "JSON.parse": u.parse };
							c = {
								"Array.prototype": h,
								"Function.prototype": j,
								"String.prototype": l,
								Object: k,
								Array: g,
								Date: i
							};
							d = {
								Object: q,
								"Array.prototype": n,
								"Date.prototype": o,
								Number: p,
								Array: m
							};
							f = { Object: s, "String.prototype": t, "Array.prototype": r };
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
												h = e && window[e] && f ? window[e][f] : "-";
											throw new Error(
												"Unexpected state (t11975770): " +
													(e + ", " + f + ", " + g + ", " + h + ", " + b)
											);
										}
									}
									e = d.length === 2 ? window[d[0]][d[1]] : window[b];
									for (var i in c) {
										if (!Object.prototype.hasOwnProperty.call(c, i)) continue;
										if (typeof c[i] !== "function") {
											w[b + "." + i] = c[i];
											continue;
										}
										f = e[i];
										w[b + "." + i] =
											f && /\{\s+\[native code\]\s\}/.test(f) ? f : c[i];
									}
								}
							}
							a(c);
							a(d);
							a(f);
							function b(a, b, c) {
								var d = c ? v.call(a).slice(8, -1) + ".prototype" : a,
									e = w[d + "." + b] || a[b];
								if (typeof e === "function") {
									for (
										var f = arguments.length,
											g = new Array(f > 3 ? f - 3 : 0),
											h = 3;
										h < f;
										h++
									)
										g[h - 3] = arguments[h];
									return e.apply(a, g);
								} else if (e) return e;
								throw new Error(
									"Polyfill " + d + " does not have implementation of " + b
								);
							}
							e.exports = b;
						},
						null
					);
					__d(
						"sdk.babelHelpers",
						["ES5FunctionPrototype", "ES5Object", "ES6Object"],
						function(a, b, c, d, e, f, g, h, i) {
							__p && __p();
							var j = {},
								k = Object.prototype.hasOwnProperty;
							j.inheritsLoose = function(a, b) {
								i.assign(a, b);
								a.prototype = h.create(b && b.prototype);
								a.prototype.constructor = a;
								a.__superConstructor__ = b;
								return b;
							};
							j.inherits = j.inheritsLoose;
							j.wrapNativeSuper = function(a) {
								__p && __p();
								var b = typeof Map === "function" ? new Map() : void 0;
								j.wrapNativeSuper = function(a) {
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
									j.inheritsLoose(c, a);
									function c() {
										a.apply(this, arguments);
									}
									return c;
								};
								return j.wrapNativeSuper(a);
							};
							j.assertThisInitialized = function(a) {
								if (a === void 0)
									throw new ReferenceError(
										"this hasn't been initialised - super() hasn't been called"
									);
								return a;
							};
							j._extends = i.assign;
							j["extends"] = j._extends;
							j.construct = function(a, b) {
								var c = [null];
								c.push.apply(c, b);
								return new (Function.prototype.bind.apply(a, c))();
							};
							j.objectWithoutPropertiesLoose = function(a, b) {
								var c = {};
								for (var d in a) {
									if (!k.call(a, d) || b.indexOf(d) >= 0) continue;
									c[d] = a[d];
								}
								return c;
							};
							j.objectWithoutProperties = j.objectWithoutPropertiesLoose;
							j.taggedTemplateLiteralLoose = function(a, b) {
								b || (b = a.slice(0));
								a.raw = b;
								return a;
							};
							j.bind = g.bind;
							e.exports = j;
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							a = {
								getScreenOrientation: function() {
									__p && __p();
									if (!window) return g.UNKNOWN;
									if (typeof window.orientation === "number")
										return window.orientation === 0 ||
											window.orientation === 180
											? g.VERTICAL
											: g.HORIZONTAL;
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
												? g.VERTICAL
												: g.HORIZONTAL;
									}
									if (window.matchMedia) {
										a = window.matchMedia("(orientation: portrait)");
										if (a) return a.matches ? g.VERTICAL : g.HORIZONTAL;
									}
									return g.UNKNOWN;
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANUtils",
						["AdQualityScreenOrientation", "ScreenOrientation.adquality"],
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							var i = -1,
								j = 0,
								k = 1,
								l = [
									/^https?:\/\/itunes\.apple\.com\/([^\/]+\/)?app\//,
									/^market:\/\/details/
								];
							function m(a) {
								var b = ES(
									a,
									"indexOf",
									!0,
									"/",
									ES(a, "indexOf", !0, "://") + 3
								);
								return b === -1 ? a : a.substring(0, b);
							}
							function n(a) {
								var b = m(a);
								a = ES(a, "indexOf", !0, ":", ES(a, "indexOf", !0, "://") + 3);
								a !== -1 && (b = b.substring(0, a));
								a = ES(b, "indexOf", !0, "://");
								return a === -1 ? b : b.substring(a + 3);
							}
							function o() {
								var a = location.ancestorOrigins || [],
									b = a[a.length - 1] || location.origin;
								a = a[a.length - 2] || location.origin;
								if (p(b) && q(a)) return a;
								else return b;
							}
							function a() {
								return n(o());
							}
							var p = function(a) {
								var b = /^https?:\/\/www\.google(\.com?)?.\w{2,3}$/;
								return !!a.match(b);
							};
							function q(a) {
								return ES(a, "endsWith", !0, "cdn.ampproject.org");
							}
							function r(a) {
								var b;
								ES(a, "indexOf", !0, "://") > -1
									? (b = a.split("/")[2])
									: (b = a.split("/")[0]);
								b = b.split(":")[0];
								b = b.split("?")[0];
								b = b.split(";")[0];
								return b;
							}
							function b(a, b) {
								a = r(a);
								a = a.substring(a.length - b.length);
								return a === b;
							}
							function s(a) {
								a === void 0 && (a = null);
								a = a || window;
								var b = [a];
								try {
									while (a.parent && a !== a.parent && a.parent.document)
										b.push((a = a.parent));
								} catch (a) {}
								return b.reverse();
							}
							function c() {
								var a = t();
								a =
									(a.performance &&
										a.performance.timing &&
										a.performance.timing.navigationStart) ||
									0;
								return a;
							}
							function t() {
								return s()[0];
							}
							function u(a) {
								__p && __p();
								var b = s();
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
							function d() {
								return u("v55");
							}
							function f() {
								return u("v60");
							}
							function v(a) {
								if (a instanceof Node) return a;
								return a &&
									a.ownerDocument &&
									a.ownerDocument.defaultView &&
									a.ownerDocument.defaultView.Node &&
									a instanceof a.ownerDocument.defaultView.Node
									? a
									: null;
							}
							function w(a) {
								a = v(a);
								return a &&
									(a instanceof HTMLElement ||
										a instanceof a.ownerDocument.defaultView.HTMLElement)
									? a
									: null;
							}
							function x(a) {
								return a &&
									(a instanceof HTMLBodyElement ||
										a instanceof a.ownerDocument.defaultView.HTMLBodyElement)
									? a
									: null;
							}
							function y(a) {
								return !!(
									a &&
									a.id &&
									(a.id.match(/^div-gpt/) ||
										a.hasAttribute("data-google-query-id"))
								);
							}
							function z(a) {
								return a.ownerDocument.defaultView.frameElement;
							}
							function A(a) {
								return !!(a && a.id && a.id.match(/^google_ads_iframe_/));
							}
							function B(a) {
								var b = z(a);
								if (!A(b)) return;
								D(b, "100%", a.clientHeight);
							}
							function C(a) {
								return a == null ? "" : typeof a === "string" ? a : a + "px";
							}
							function D(a, b, c) {
								b === void 0 && (b = null);
								c === void 0 && (c = null);
								if (!a) return;
								a.style.width = C(b);
								a.style.height = C(c);
							}
							function E(a) {
								return !!(a && a.id && a.id.match(/^apstag-f-iframe-/));
							}
							function F(a) {
								E(a) && (a = a.ownerDocument.defaultView.frameElement);
								a = a.parentElement && a.parentElement.parentElement;
								return y(a) ? a : null;
							}
							function G(a) {
								var b = a.ownerDocument.defaultView;
								return parseInt(b.getComputedStyle(a).width, 10);
							}
							function H(a) {
								var b = a.ownerDocument.defaultView;
								return parseInt(b.getComputedStyle(a).height, 10);
							}
							function I() {
								return window.screen.width;
							}
							function J() {
								return window.screen.height;
							}
							function K() {
								return h.getScreenOrientation() == g.VERTICAL;
							}
							function L(a) {
								if (!a) return !1;
								for (var b = 0; b < l.length; b++) {
									var c = l[b];
									if (a.match(c)) return !0;
								}
								return !1;
							}
							function M(a, b, c) {
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
										j = a + j;
										delete f.dataset[j];
									}
								}
							}
							function P(a) {
								a = a;
								while (a) {
									E(a) && (a = a.ownerDocument.defaultView.frameElement);
									if (
										window.getComputedStyle(a).overflowX !== "visible" ||
										!a.parentElement
									)
										break;
									a = a.parentElement;
								}
								return a;
							}
							function Q(a) {
								a = a.getBoundingClientRect();
								var b = a.left;
								a = I() - a.right;
								return Math.max(a, b);
							}
							function R(a) {
								return a.scrollHeight > a.clientHeight + 3;
							}
							function S(a, b, c) {
								__p && __p();
								var d = c.slice(0, b).join(" ") + "\u2026";
								a.textContent = d;
								if (R(a)) return k;
								if (b >= c.length) return j;
								a.textContent = c.slice(0, b + 1).join(" ") + "\u2026";
								if (R(a)) {
									a.textContent = d;
									return j;
								}
								a.textContent = d;
								return i;
							}
							function T(a) {
								if (!R(a)) return;
								var b = a.textContent.split(" "),
									c = 0,
									d = b.length - 1;
								while (c <= d) {
									var e = Math.floor((c + d) / 2),
										f = S(a, e, b);
									if (f === j) break;
									f === k ? (d = e - 1) : (c = e + 1);
								}
							}
							function U(a) {
								a = a.querySelectorAll("[data-auto-fit-text=true]");
								for (var b = 0; b < a.length; b++) T(a[b]);
							}
							function V(a) {
								var b = !1;
								return function() {
									b || ((b = !0), a.apply(void 0, arguments));
								};
							}
							function W(a) {
								if (typeof a === "string") return a;
								else return "";
							}
							function X(a, b, c) {
								a.contentWindow.postMessage(c, b);
							}
							e.exports = {
								autofitIfInDfpIframe: B,
								calculateLargestMargin: Q,
								cssSize: C,
								extractOrigin: m,
								extractDomain: n,
								extractHostname: r,
								findWidestParentElement: P,
								getDFPRoot: F,
								getElementWidth: G,
								getElementHeight: H,
								getScreenHeight: J,
								getScreenWidth: I,
								getNavigationStart: c,
								getTopMostAccessibleWindow: t,
								getV55TagStateContainer: d,
								getV60TagStateContainer: f,
								getWindowHierarchy: s,
								isA9Container: E,
								isAppStoreURL: L,
								isDfpContainer: y,
								isSameRootDomain: b,
								maybeHTMLElement: w,
								maybeHTMLBodyElement: x,
								maybeNode: v,
								once: V,
								onlyString: W,
								resizeElement: D,
								restoreElementStyles: N,
								removeStoredData: O,
								screenIsPortrait: K,
								sendToFacebook: X,
								storeElementStyles: M,
								truncateTextToFitElement: T,
								autofitTextWhereNeeded: U,
								getTopDomain: a
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
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							var i = function(a) {
								try {
									return ES("JSON", "parse", !1, decodeURI(a.name))._context
										.ampcontextFilepath;
								} catch (a) {
									return null;
								}
							};
							function j(a) {
								return a && a.sourceUrl;
							}
							var k = function(a, b) {
								__p && __p();
								var c = g.getTopMostAccessibleWindow();
								if (j(c.context)) {
									a(c.context);
									return;
								}
								var d = i(c);
								if (d == null) {
									b();
									return;
								}
								c.addEventListener("amp-windowContextCreated", function() {
									a(c.context);
								});
								b = c.document;
								var e = b.createElement("script");
								e.src = d;
								b.head.appendChild(e);
							};
							a = {
								genAMPContext: function() {
									return new h(k);
								},
								isAMP: function() {
									var a = g.getTopMostAccessibleWindow();
									return j(a.context) || i(a) != null;
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a, b) {
									(this.$1 = a), (this.$2 = b);
								}
								var b = a.prototype;
								b.$3 = function(a) {
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
								b.$4 = function() {
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
								b.$5 = function() {
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
								b.$6 = function() {
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
								b.render = function() {
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
									var b = this.$3(a);
									a = g(a.contentDocument.body);
									a.style.margin = "0";
									a.style.padding = "0";
									a.style.overflow = "hidden";
									a.appendChild(b);
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a) {
									(this.$1 = !1), (this.$2 = 0), (this.$4 = a), (this.$3 = []);
								}
								var b = a.prototype;
								b.$5 = function() {
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
								b.$6 = function() {
									var a = this;
									this.$2 = ES("Date", "now", !1);
									var b = new g(this.$4);
									b.addVisibilityListener(function() {
										var c = b.getVisibilityState();
										c === "visible" && a.$5();
									});
									this.$1 = !0;
								};
								b.onBounceBack = function(a) {
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							function h(a) {
								return a ? g.once(a) : null;
							}
							a = (function() {
								__p && __p();
								function a(a, b, c, d) {
									(this.$1 = a),
										(this.$2 = b),
										(this.$3 = h(c)),
										(this.$4 = h(d)),
										(this.$5 = !1),
										(this.$7 = !1);
								}
								var b = a.prototype;
								b.enableReward = function() {
									this.$5 = !0;
								};
								b.isRewardEnabled = function() {
									return this.$5;
								};
								b.rewardCompleted = function() {
									if (!this.$5 || !this.$3) return;
									this.$3();
								};
								b.adClosed = function() {
									if (!this.$5 || !this.$4) return;
									this.$4();
								};
								b.setVideo = function(a) {
									this.$6 = a;
								};
								b.mediaLoaded = function() {
									var a = this.$2;
									if (this.$7 || !a) return;
									this.$7 = !0;
									var b = this.$6;
									a(
										this.$1,
										b
											? g.once(function() {
													window.setTimeout(function() {
														return b.play(!0);
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							a = function a(b) {
								__p && __p();
								var c = this;
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
									return c.dom("div", { className: a }, b || []);
								};
								this.anchor = function(a, b) {
									return c.dom("a", {
										className: a,
										href: b || "#",
										target: "_blank"
									});
								};
								this.span = function(a, b) {
									return c.dom("span", { className: a, textContent: b });
								};
								this.find = function(a, b) {
									return g(a.querySelector(b));
								};
								this.withDocument = function(b) {
									return new a(b);
								};
								this.$1 = b;
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
						["VPAIDDomUtils", "csx", "cx"],
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							__p && __p();
							var j = g.div,
								k = g.dom,
								l = g.find,
								m = function(a, b) {
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
								n = function(a, b) {
									b === void 0 && (b = "");
									return k("div", { className: a, textContent: b });
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
									a = m("_11u9", [
										j("_11ur", [
											j("_11us"),
											j("_11u-", [
												j("_11u_", [
													n("_11v0", this.$1.adTitle),
													n("_11vj", this.$1.adBody)
												])
											])
										]),
										n(a, this.$1.adCallToAction)
									]);
									this.$3 = l(a, "._11us");
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
							"ANCarouselMotion",
							"VPAIDDomUtils",
							"csx",
							"cx",
							"ANCarouselItem"
						],
						function(a, b, c, d, e, f, g, h, i, j, k) {
							"use strict";
							__p && __p();
							var l = h.div,
								m = h.find,
								n = function() {},
								o = function(a) {
									return { x: a.touches[0].clientX, y: a.touches[0].clientY };
								},
								p = 298,
								q = 174;
							a = 8;
							var r = q / p,
								s = a / q,
								t = 1.2;
							b = (function() {
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
									this.$7 = c || n;
									this.onCriticalAnimationStart = d || n;
									this.onCriticalAnimationEnd = e || n;
									this.$13 = a;
									this.$14();
								}
								var b = a.prototype;
								b.$14 = function() {
									__p && __p();
									var a = this;
									this.$6 = 0;
									this.$5 = [];
									this.$1 = l("ANCarousel/root", [l("_2vfy", [l("_2vf-")])]);
									this.$3 = m(this.$1, "._2vf-");
									this.$2 = m(this.$1, "._2vfy");
									this.$12.addRequiredEvent();
									ES(this.$4, "forEach", !0, function(b, c) {
										b = new k(
											b,
											c === 0
												? function() {
														return a.$12.requiredEventFired();
												  }
												: null,
											a.$13.useFilledCarouselCTA === !0 ? "Filled" : "Empty"
										);
										a.$5.push(b);
										a.$3.appendChild(b.getElement());
									});
									this.$11 = new g(this, function(b, c) {
										a.$7("AN_CAROUSEL_EVENT_SWIPE", { index: b, direction: c });
									});
									this.ensureSizes();
									this.$15();
								};
								b.$16 = function() {
									return this.$1.clientWidth;
								};
								b.$15 = function() {
									var a = this;
									this.$3.addEventListener("touchstart", function(b) {
										a.$11.onMoveStart(o(b));
									});
									this.$3.addEventListener("touchmove", function(b) {
										a.$11.onMove(b, o(b));
									});
									this.$3.addEventListener("touchend", function(b) {
										a.$11.onMoveEnd();
									});
								};
								b.$17 = function(a) {
									if (this.isWithinRange(a)) return a;
									return a > 0 ? 0 : -this.getMaxOffset();
								};
								b.$18 = function() {
									return Math.round(this.$10 * r);
								};
								b.$19 = function() {
									return Math.round(this.$8 * s);
								};
								b.$20 = function() {
									return this.$8 > q ? t : 1;
								};
								b.$21 = function(a) {
									return (this.$8 + this.$9) * a + this.$9;
								};
								b.getLinks = function() {
									return ES(this.$5, "map", !0, function(a) {
										return a.getElement();
									});
								};
								b.getElement = function() {
									return this.$1;
								};
								b.getRail = function() {
									return this.$3;
								};
								b.getItemWidthRatio = function() {
									return this.$8 / q;
								};
								b.getFullWidth = function() {
									return this.$4.length * (this.$8 + this.$9);
								};
								b.getMaxOffset = function() {
									return this.getFullWidth() - this.$10 + this.$9;
								};
								b.isIndexVisible = function(a) {
									var b = this.$11.getCurrentOffset();
									a = this.$21(a);
									return a > b && a + this.$8 < b + this.$10;
								};
								b["goto"] = function(a, b) {
									var c = -a * (this.$8 + this.$9);
									c += (this.$10 - this.$8) / 2 - this.$9;
									c = this.$17(c);
									this.$11.scrollToTransition(c, b);
									this.$6 = a;
								};
								b.closestIndex = function(a) {
									var b = this.$8 + this.$9;
									a = a + this.$10 / 2;
									a = Math.floor(a / b);
									if (a >= this.$4.length) return this.$4.length - 1;
									else if (a < 0) return 0;
									return a;
								};
								b.isWithinRange = function(a) {
									return a > 0 ? !1 : a > -this.getMaxOffset();
								};
								b.ensureSizes = function() {
									__p && __p();
									var a = this;
									this.$10 = this.$16() || p;
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
							e.exports = b;
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
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							var i = 0;
							function j() {
								i++;
								return "fban-fw-sct-" + i;
							}
							function k(a, b, c) {
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
								var b = a.prototype;
								b.resize = function(a, b, c) {
									this.addChanges(a, {
										width: g.cssSize(b),
										height: g.cssSize(c)
									});
								};
								b.addChanges = function(a, b) {
									__p && __p();
									var c = this.$4(a);
									this.$1.has(c) ||
										(this.$1.set(c, new Map()), this.$2.set(c, new Map()));
									var d = h(this.$1.get(c));
									c = h(this.$2.get(c));
									var e = ES("Object", "keys", !1, b);
									for (var f = 0; f < e.length; f++) {
										var g = e[f];
										d.set(g, b[g]);
										k(c, a, g);
									}
								};
								b.applyChanges = function() {
									__p && __p();
									for (
										var a = this.$1,
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
										var e = d[0];
										d = d[1];
										e = h(this.$3.get(e));
										for (
											var d = d,
												f = ES("Array", "isArray", !1, d),
												g = 0,
												d = f
													? d
													: d[
															typeof Symbol === "function"
																? Symbol.iterator
																: "@@iterator"
													  ]();
											;

										) {
											var i;
											if (f) {
												if (g >= d.length) break;
												i = d[g++];
											} else {
												g = d.next();
												if (g.done) break;
												i = g.value;
											}
											i = i;
											var j = i[0];
											i = i[1];
											e.style.setProperty(j, i, "important");
										}
									}
								};
								b.restoreOriginalStyles = function() {
									__p && __p();
									for (
										var a = this.$2,
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
										var e = d[0];
										d = d[1];
										e = h(this.$3.get(e));
										for (
											var d = d,
												f = ES("Array", "isArray", !1, d),
												g = 0,
												d = f
													? d
													: d[
															typeof Symbol === "function"
																? Symbol.iterator
																: "@@iterator"
													  ]();
											;

										) {
											var i;
											if (f) {
												if (g >= d.length) break;
												i = d[g++];
											} else {
												g = d.next();
												if (g.done) break;
												i = g.value;
											}
											i = i;
											var j = i[0];
											i = i[1];
											i.value == null
												? e.style.removeProperty(j)
												: e.style.setProperty(j, i.value, i.priority);
										}
									}
								};
								b.$4 = function(a) {
									a.id || (a.id = j());
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
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a, b, c, d, e) {
									(this.$1 = new g()),
										(this.$2 = a),
										(this.$3 = b),
										(this.$4 = c),
										(this.$5 = d),
										(this.$6 = e);
								}
								var b = a.prototype;
								b.resize = function(a, b) {
									__p && __p();
									var c = this.$2;
									h.isA9Container(this.$2) &&
										(this.$1.resize(c, a, b),
										(c = this.$2.ownerDocument.defaultView.frameElement));
									this.$1.resize(c, a, b);
									this.$1.resize(this.$4, a, b);
									this.$1.addChanges(this.$3, { display: "block" });
									var d = h.getDFPRoot(c);
									d != null
										? this.$7(d, c, a, b)
										: this.$1.addChanges(c, {
												overflow: "visible",
												"margin-left": "auto",
												"margin-right": "auto",
												position: "initial"
										  });
									this.$1.applyChanges();
									this.$8(c);
									this.$1.applyChanges();
								};
								b.$7 = function(a, b, c, d) {
									b = i(b.parentElement);
									this.$1.addChanges(a, {
										overflow: "visible",
										"margin-left": "auto",
										"margin-right": "auto",
										position: "initial",
										height: "auto",
										width: "auto"
									});
									this.$1.resize(b, c, d);
									this.$1.addChanges(b, {
										"margin-left": "0",
										position: "initial"
									});
								};
								b.restoreOriginalStyles = function() {
									this.$1.restoreOriginalStyles();
								};
								b.$8 = function(a) {
									this.$1.addChanges(a, { "max-width": "none" });
									a = a.parentElement;
									if (!a) return;
									var b = this.$6 - a.getBoundingClientRect().left;
									this.$1.addChanges(a, { "margin-left": h.cssSize(b) });
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
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a, b, c) {
									(this.$1 = new g()),
										(this.$2 = a),
										(this.$3 = b),
										(this.$4 = c);
								}
								var b = a.prototype;
								b.resize = function(a, b) {
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
								b.restoreOriginalStyles = function() {
									this.$1.restoreOriginalStyles();
								};
								b.$5 = function(a) {
									a =
										a.parentElement &&
										a.parentElement.parentElement &&
										a.parentElement.parentElement.parentElement;
									return a && h.isDfpContainer(a) ? a : null;
								};
								b.$6 = function() {
									var a = this.$3,
										b = this.$4 - a.getBoundingClientRect().left;
									this.$1.addChanges(a, {
										"margin-left": h.cssSize(b),
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
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							__p && __p();
							function j(a, b) {
								return document.defaultView &&
									document.defaultView.getComputedStyle
									? document.defaultView
											.getComputedStyle(a, "")
											.getPropertyValue(b)
									: "";
							}
							function k(a) {
								return !a || !a.nodeType || a.nodeType !== Node.ELEMENT_NODE
									? null
									: a;
							}
							var l = "fbOriginalHeightResizeChecks",
								m = "ADNW_FW_PRE_RESIZE_CHECK_FAIL",
								n = "ADNW_FW_POST_RESIZE_CHECK_FAIL",
								o = 0;
							a = (function() {
								__p && __p();
								function a(a, b, c, d, e, f, j) {
									(this.$1 = a),
										(this.$2 = b),
										(this.$3 = c),
										(this.$4 = d),
										(this.$5 = e),
										(this.$6 = f),
										(this.$8 = []),
										(this.$9 = l + o++),
										(this.$10 = i.getScreenHeight()),
										(this.$11 = i.getScreenWidth()),
										this.$2
											? (this.$7 = new g(this.$2, this.$3, this.$4, this.$6, j))
											: (this.$7 = new h(this.$3, this.$4, j));
								}
								var b = a.prototype;
								b.resize = function(a, b) {
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
								b.restoreOriginalStyles = function() {
									this.$7.restoreOriginalStyles();
								};
								b.$13 = function() {
									while (this.$8.length) {
										var a = this.$8.pop();
										delete a.dataset[this.$9];
									}
								};
								b.$15 = function() {
									return this.$2 ? this.$2 : this.$3;
								};
								b.$12 = function() {
									__p && __p();
									var a = this.$15();
									if (!a) return !1;
									var b = i.isA9Container(this.$2);
									if (a.ownerDocument.defaultView.frameElement && !b) {
										this.$6.event(m, "iframe");
										return !1;
									}
									if (!i.screenIsPortrait()) return !1;
									b = 0;
									var c = "";
									while (a && this.$16(a))
										(c = c || this.$17(a, b)),
											(a.dataset[this.$9] = i.getElementHeight(a) + ""),
											this.$8.push(a),
											(a = k(a.parentElement)),
											b++;
									if (c) {
										this.$6.event(m, c);
										return !1;
									}
									return !0;
								};
								b.$17 = function(a, b) {
									__p && __p();
									var c = j(a, "position");
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
												e = j(e, "position");
												if (e === "absolute") return "sibling_" + b;
											}
										else return "position_" + b;
									return "";
								};
								b.$18 = function(a) {
									return Object.prototype.hasOwnProperty.call(
										a.dataset,
										this.$9
									)
										? i.getElementHeight(a) - parseInt(a.dataset[this.$9], 10)
										: null;
								};
								b.$14 = function() {
									__p && __p();
									var a = this.$15();
									if (!a) return !1;
									if (this.$2) {
										var b = this.$2.getBoundingClientRect();
										if (b.left < 0 || b.right > i.getScreenWidth()) {
											this.$6.event(n, "off_screen");
											return !1;
										}
									}
									while (a && this.$16(a)) {
										b = this.$18(a);
										if (b == null) {
											this.$6.event(n, "height_null");
											return !1;
										}
										if (b === 0) {
											this.$6.event(n, "height_unchanged");
											return !1;
										}
										a = k(a.parentElement);
									}
									return !0;
								};
								b.$16 = function(a) {
									if (a.nodeName === "BODY") return !1;
									var b = window.getComputedStyle(a).overflowY;
									if (b === "scroll" || b === "auto") return !1;
									return i.getElementHeight(a) > this.$10 * 2 ? !1 : !0;
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
						function(a, b, c, d, e, f, g, h, i, j, k) {
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
								var b = a.prototype;
								b.setLogLevel = function(a) {
									this.$1 = a;
								};
								b.frameReady = function() {
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
								b.setUnifiedLoggingURL = function(a) {
									this.$8 = a;
								};
								b.debug = function(a, b) {
									this.$1 <= i.DEBUG && this.event(a, b);
								};
								b.error = function(a) {
									this.$1 <= i.ERROR && this.event("ADNW_ADERROR", a);
								};
								b.event = function(a, b, c) {
									a = { event_name: a };
									b != null && (a.error_message = "" + b);
									c != null && (a.error_stack_trace = c);
									this.eventWithParams(a);
								};
								b.eventWithParams = function(a) {
									var b = j();
									if (!this.$9) {
										this.$7.push({ timestamp: b, params: a });
										return;
									}
									this.$10(b, a);
								};
								b.$10 = function(a, b) {
									(b.client_ts = a),
										this.$2 > 0 &&
											(b.latency_since_navigation_start = a - this.$2),
										(b.latency_since_sdk_init = a - this.$3),
										window.$11 && (b.visibility_changed = !0),
										h.sendToFacebook(this.$5, this.$6, {
											name: "client_event",
											params: { key: h.onlyString(this.$4), payload: b }
										});
								};
								b.logClick = function(a, b) {
									var c = a.action != null ? a.action : g.BILLABLE_CLICK,
										d = j();
									d = {
										name: "client_event",
										params: {
											key: a.key,
											payload: {
												event_name: "ADNW_CLICK",
												error_message: String(d - b),
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
											top_domain: h.getTopDomain(),
											payload: {
												type: c,
												time: a.clickParams.clktm,
												delay: a.clickParams.clkdel,
												pos: a.pos
											}
										},
										{
											type: "client",
											key: a.key,
											top_domain: h.getTopDomain(),
											payload: d.params.payload
										}
									]);
								};
								b.$12 = function(a) {
									if (!this.isPublisherSideLoggingSupported())
										throw new Error("unsupported_pub_side_logging");
									window.navigator.sendBeacon(
										k(this.$8),
										ES("JSON", "stringify", !1, a)
									);
								};
								b.isPublisherSideLoggingSupported = function() {
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
						"ANRewardedVideoPlayer",
						["ANUtils", "VPAIDDomUtils", "cx", "nullthrows"],
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							var k = h.div,
								l = 31,
								m = 4;
							a = (function() {
								__p && __p();
								function a(a, b, c, d) {
									(this.$1 = a),
										(this.$2 = b),
										(this.$3 = c),
										(this.$4 = !1),
										(this.$5 = !1),
										d && (this.$11 = k("_74hs")),
										(this.$9 = j(b.querySelector(".adnwRVFooterInfo"))),
										(this.$6 = j(b.querySelector(".skipProgressWheel"))),
										(this.$7 = j(
											this.$6.querySelector(
												".skipProgressWheelLeft .skipProgressWheelCircle"
											)
										)),
										(this.$8 = j(
											this.$6.querySelector(
												".skipProgressWheelRight .skipProgressWheelCircle"
											)
										)),
										(this.$10 = j(b.querySelector(".skipButton")));
								}
								var b = a.prototype;
								b.makeRewarded = function() {
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
								b.getXoutButton = function() {
									return this.$11;
								};
								b.$13 = function() {
									var a = this,
										b = j(this.$2.querySelector(".closeArea"));
									b.addEventListener(
										"click",
										g.once(function() {
											return a.$1.adClosed();
										})
									);
									this.$3.pause();
									this.$14();
									this.$2.classList.add("endCardShowing");
									this.$3.getElement().classList.add("_7462");
									this.$1.rewardCompleted();
								};
								b.$15 = function() {
									if (this.$4) return;
									this.$4 = !0;
									this.$9.classList.add("fadeIn");
								};
								b.$14 = function() {
									if (!this.$4) return;
									this.$4 = !1;
									this.$9.classList.remove("fadeIn");
								};
								b.$16 = function() {
									var a = this.$3.getVideoElement();
									if (a.duration <= l || this.$5) return;
									if (a.currentTime >= l) this.$17();
									else {
										this.$6.classList.add("skipProgressWheelShow");
										a = Math.ceil((360 * a.currentTime) / l);
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
								b.$17 = function() {
									if (this.$5) return;
									this.$5 = !0;
									this.$6.classList.remove("skipProgressWheelShow");
									var a = j(this.$2.querySelector(".skipButton"));
									a.classList.add("skipButtonShow");
									a.addEventListener(
										"click",
										g.once(ES(this.$13, "bind", !0, this))
									);
								};
								b.$18 = function() {
									var a = this.$3.getVideoElement();
									a = a.duration - a.currentTime;
									return a < m;
								};
								b.$12 = function() {
									__p && __p();
									var a = this,
										b = j(this.$2.querySelector(".adnwRVProgressBar")),
										c = this.$3.getVideoElement(),
										d = this.$2.ownerDocument.defaultView,
										e = function e() {
											var f = 100 * (c.currentTime / c.duration);
											f = Math.min(f, 100);
											a.$16();
											b.style.width = f + "%";
											(c.paused || a.$18()) && a.$15();
											f >= 100
												? a.$13()
												: c.paused || d.requestAnimationFrame(e);
											c.currentTime >= l && a.$17();
										};
									c.addEventListener("play", function() {
										a.$18() || a.$14(), d.requestAnimationFrame(e);
									});
									!c.paused ? d.requestAnimationFrame(e) : this.$15();
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
						["ANUtils", "VPAIDDomUtils", "csx", "cx", "nullthrows", "sdk.fbt"],
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							"use strict";
							__p && __p();
							var m = g.maybeNode,
								n = h.div,
								o = h.span,
								p = l._("Continue to"),
								q = l._("Continue");
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
								var b = a.prototype;
								b.onConfirm = function(a) {
									this.$4.push(a);
									return this;
								};
								b.onDismiss = function(a) {
									this.$5.push(a);
									return this;
								};
								b.$6 = function() {
									__p && __p();
									var a = this,
										b = this.$3;
									b ||
										((b = n("_74vg", [
											n("_727i", [
												o("_727j", ""),
												o("_727k", p),
												o("_727l", ""),
												o("_727m", this.$1),
												o("_727n", q)
											])
										])),
										(k(b.querySelector("._727l")).style.backgroundImage =
											"url(" + this.$2 + ")"),
										b.addEventListener("click", function(c) {
											__p && __p();
											var d = k(m(c.target)),
												e = k(k(b).querySelector("._727i")),
												f = k(k(b).querySelector("._727j"));
											if (d === f) a.$8(c);
											else if (d === e || ES(e, "contains", !0, d))
												for (
													var f = a.$4,
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
											else a.$8(c);
										}));
									this.$3 = b;
								};
								b.$8 = function(a) {
									__p && __p();
									var b = this,
										c = k(this.$3);
									c.classList.remove("_727o");
									k(this.$3).style.opacity = "0";
									window.setTimeout(function() {
										__p && __p();
										c.parentNode && c.parentNode.removeChild(c);
										for (
											var d = b.$5,
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
											g(a);
										}
									}, 300);
								};
								b.$7 = function(a) {
									var b = this;
									a.appendChild(k(this.$3));
									window.setTimeout(function() {
										k(b.$3).classList.add("_727o");
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = 1e3,
								i = 100;
							function j(a) {
								return Math.floor(a * h);
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
									vtime_ms: j(a.viewableSeconds),
									atime_ms: j(a.audibleSeconds),
									mcat_ms: j(a.maxContinuousAudibleSeconds),
									mcpt_ms: j(a.maxContinuousPlaySeconds),
									mcvt_ms: j(a.maxContinuousViewableSeconds),
									spt_ms: j(a.stickyAdSeconds),
									maa: a.maxAdArea.maxAdAreaNotFullscreen,
									ortn: a.maxAdArea.screenOrientation,
									vw_d: a.viewableDetection,
									vw_rsn: a.viewableReason,
									pbra: a.avgPlaybackRate === null ? void 0 : a.avgPlaybackRate
								};
							}
							function b() {
								__p && __p();
								var a = i,
									b = [],
									c = window;
								while (a > 0) {
									try {
										b.push(c.document.hasFocus() ? g.FOCUSED : g.UNFOCUSED);
									} catch (a) {
										b.push(g.UNKNOWN);
									}
									if (c === window.top) break;
									c = c.parent;
									a--;
								}
								return b;
							}
							function c(a) {
								return /iPhone|iPod/.test(a);
							}
							e.exports = {
								getStatsFields: a,
								getFocus: b,
								isIPhoneOrIPod: c,
								MAX_LAYERS: i
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
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							a = {
								getBrowserFeaturesMap: function(a) {
									__p && __p();
									var b = j(),
										c = {},
										d = {},
										e = a ? h : g;
									ES(ES("Object", "keys", !1, e), "forEach", !0, function(a) {
										a = e[a];
										var b = j();
										try {
											a in k ? (c[a] = k[a]()) : (c[a] = "Not implemented");
										} catch (b) {
											c[a] = b.message;
										}
										d[a] = j() - b;
									});
									c[e.TIME] = j() - b;
									a || (c[g.FEATURE_TIMES] = d);
									return c;
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
							function i(a) {
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
							function j() {
								if (!!window.performance && !!window.performance.now)
									return window.performance.now();
								else if (ES("Date", "now", !1)) return ES("Date", "now", !1);
								else return new Date();
							}
							var k = ((b = {}),
							(b[g.CSS_ALL] = function() {
								return "all" in document.documentElement.style;
							}),
							(b[g.CSS_FEATURE_QUERIES] = function() {
								var a = "CSS" in window && "supports" in window.CSS;
								return a || "supportsCSS" in window;
							}),
							(b[g.DRAG_AND_DROP] = function() {
								var a = document.createElement("div");
								return (
									"draggable" in a || ("ondragstart" in a && "ondrop" in a)
								);
							}),
							(b[g.OGG] = function() {
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
							(b[g.CSS_VAR] = function() {
								return (
									window.CSS != null &&
									window.CSS.supports != null &&
									window.CSS.supports("--fake-var", 0)
								);
							}),
							(b[g.SCOPED_CSS] = function() {
								var a = document.createElement("style");
								a.setAttribute("scoped", "true");
								return a.scoped === !0;
							}),
							(b[g.STICKY] = function() {
								var a = "position:",
									b = "sticky",
									c = ["-webkit-", "-moz-", "-o-", "-ms-"],
									d = document.createElement("a");
								d = d.style;
								d.cssText = a + c.join(b + ";" + a).slice(0, -a.length);
								return ES(d.position, "indexOf", !0, b) !== -1;
							}),
							(b[g.TIME_ZONE] = function() {
								var a = new Date();
								return a.getTimezoneOffset();
							}),
							(b[g.DIALOG] = function() {
								var a = document.createElement("dialog");
								return !!a.show;
							}),
							(b[g.VIDEO] = function() {
								var a = document.createElement("video");
								return !!a.canPlayType;
							}),
							(b[g.AUDIO] = function() {
								var a = document.createElement("audio");
								return !!a.canPlayType;
							}),
							(b[g.AUDIO_CONTEXT] = function() {
								try {
									var a = new window.AudioContext();
									a = a.createOscillator();
									a.frequency.value = 10;
									return a.frequency.value == 10;
								} catch (a) {
									return !1;
								}
							}),
							(b[g.ANCESTOR] = function() {
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
							(b[g.RANDOM] = function() {
								return (
									(!!window.crypto && !!window.crypto.getRandomValues) ||
									(!!window.msCrypto && !!window.msCrypto.getRandomValues)
								);
							}),
							(b[g.USERDATA] = function() {
								var a = document.createElement("div");
								return !a.addBehavior;
							}),
							(b[g.CHROME_EXTENSION] = function() {
								return (
									!!window.chrome &&
									!!window.chrome.runtime &&
									!!window.chrome.runtime.id
								);
							}),
							(b[g.IS_POPUP] = function() {
								return !!window.opener && window.opener !== window;
							}),
							(b[g.HREF] = function() {
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
							(b[g.HAS_CANVAS] = function() {
								var a = document.createElement("canvas");
								return !!(a.getContext && a.getContext("2d"));
							}),
							(b[g.EMOJI] = function() {
								__p && __p();
								if (!k[g.HAS_CANVAS]()) return !1;
								var a = window.devicePixelRatio || 1;
								a = 12 * a;
								var b = document.createElement("canvas");
								b = b.getContext("2d");
								b.fillStyle = "#f00";
								b.textBaseline = "top";
								b.font = "32px Arial";
								b.fillText("\ud83d\udc28", 0, 0);
								return b.getImageData(a, a, 1, 1).data[0] !== 0;
							}),
							(b[g.CANVAS_HASH] = function() {
								__p && __p();
								if (!k[g.HAS_CANVAS]()) return 0;
								var a = document.createElement("canvas"),
									b = a.getContext("2d"),
									c = "text";
								b.textBaseline = "top";
								b.font = "14px Arial";
								b.textBaseline = "alphabetic";
								b.fillStyle = "#f60";
								b.fillRect(125, 1, 62, 20);
								b.fillStyle = "#069";
								b.fillText(c, 2, 15);
								b.fillStyle = "rgba(102, 204, 0, 0.7)";
								b.fillText(c, 4, 17);
								return i(a.toDataURL());
							}),
							(b[g.UA] = function() {
								return navigator.userAgent;
							}),
							(b[g.VERSION] = function() {
								return navigator.appVersion;
							}),
							(b[g.PLATFORM] = function() {
								return navigator.platform;
							}),
							(b[g.IS_IFRAME] = function() {
								return parent !== window;
							}),
							(b[g.REFERER] = function() {
								return document.referrer;
							}),
							(b[g.URL] = function() {
								return document.URL;
							}),
							(b[g.SCREEN_HEIGHT] = function() {
								return screen.height;
							}),
							(b[g.SCREEN_WIDTH] = function() {
								return screen.width;
							}),
							(b[g.AVAILABLE_HEIGHT] = function() {
								return screen.height;
							}),
							(b[g.AVAILABLE_WIDTH] = function() {
								return screen.width;
							}),
							(b[g.SCREEN_LEFT] = function() {
								return window.screenLeft ? window.screenLeft : window.screenX;
							}),
							(b[g.SCREEN_TOP] = function() {
								return window.screenTop ? window.screenTop : window.screenY;
							}),
							(b[g.HAS_SCROLL] = function() {
								return "scrollBehavior" in document.documentElement.style;
							}),
							(b[g.HAS_PIC_ELEMENT] = function() {
								return "HTMLPictureElement" in window;
							}),
							(b[g.PLUGIN_COUNT] = function() {
								return navigator.plugins.length;
							}),
							(b[g.PHANTOM_MODE] = function() {
								try {
									null[0]();
								} catch (b) {
									var a = b.stack;
									if (a.search("phantomjs") != -1) return !0;
								}
								return !!window.callPhantom || !!window._phantom;
							}),
							(b[g.COLOR_DEPTH] = function() {
								return screen.colorDepth;
							}),
							(b[g.WEBSQL] = function() {
								return !!window.openDatabase;
							}),
							(b[g.CUSTOM_ELEMENT] = function() {
								return "registerElement" in document;
							}),
							(b[g.HAS_IMPORTS] = function() {
								return "import" in document.createElement("link");
							}),
							(b[g.CHROME] = function() {
								return !!window.chrome;
							}),
							(b[g.CHROME_WEB_STORE] = function() {
								return !!window.chrome && !!window.chrome.webstore;
							}),
							(b[g.IE] = function() {
								return !window.ActiveXObject;
							}),
							(b[g.WC] = function() {
								return "willChange" in document.documentElement.style;
							}),
							(b[g.DEVORIENT] = function() {
								return "DeviceOrientationEvent" in window;
							}),
							(b[g.DEVMOTION] = function() {
								return "DeviceMotionEvent" in window;
							}),
							(b[g.SRCSET] = function() {
								return "srcset" in document.createElement("img");
							}),
							(b[g.AVAIL_DIMENSIONS] = function() {
								return screen.availHeight <= 1 || screen.availWidth <= 1;
							}),
							(b[g.COLOR_AND_PIXEL_DEPTH] = function() {
								return (
									screen.colorDepth <= 8 ||
									screen.pixelDepth <= 8 ||
									window.devicePixelRatio <= 0
								);
							}),
							(b[g.DIMENSIONS] = function() {
								return screen.height <= 1 || screen.width <= 1;
							}),
							(b[g.TOP_WINDOW_DRIVER] = function() {
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
							(b[g.DOM_AUTOMATION] = function() {
								return (
									document.documentElement.hasAttribute("webdriver") ||
									window.domAutomation != null ||
									window.domAutomationController != null ||
									window._WEBDRIVER_ELEM_CACHE != null
								);
							}),
							(b[g.WEBDRIVER_CACHE] = function() {
								return window._WEBDRIVER_ELEM_CACHE != null;
							}),
							(b[g.EXTERNAL_URL] = function() {
								return window.isExternalUrlSafeForNavigation != null;
							}),
							(b[g.OPERA_A] = function() {
								return (
									window.opera != null &&
									window.opera._browserjsran != null &&
									window.opera.browserjsran === 0
								);
							}),
							(b[g.OPERA_B] = function() {
								return (
									window.opera != null &&
									window.opera._browserjsran != null &&
									window.opera.browserjsran === !1
								);
							}),
							(b[g.WEB_DRIVER] = function() {
								return (
									window.webdriver != null ||
									document.webdriver != null ||
									document.documentElement.hasAttribute("webdriver")
								);
							}),
							(b[g.ENGINE] = function() {
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
							(b[g.IE_EXTERNAL] = function() {
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
							(b[g.FONT_DIFF] = function() {
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
							(b[g.FONTS] = function() {
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
							b);
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
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							__p && __p();
							var j = h.getFocus,
								k = h.getStatsFields,
								l = h.isIPhoneOrIPod;
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
								var b = a.prototype;
								b.setPlayer = function(a) {
									if (this.$2 != a)
										throw new Error("players should be the same");
								};
								b.logMRCEvent = function(a, b, c, d, e, f) {
									e = this.$9(b, c, d, a);
									this.$10(g.VIDEO_MRC, e);
								};
								b.logImpressionEvent = function(a, b, c, d) {
									this.$5();
								};
								b.logViewableImpressionEvent = function(a, b, c) {
									b = this.$9(b, c, null, a);
									this.$10(g.VIDEO_VIEWABLE_IMPRESSION, b);
								};
								b.logTimeEvent = function(a, b, c, d, e, f, h) {
									e = this.$9(a, b, c, d);
									this.$10(g.VIDEO_TIME, e);
									h();
								};
								b.logMuteEvent = function() {
									if (!this.$2.isMuted()) return;
									this.$11(g.VIDEO_MUTE);
								};
								b.logUnMuteEvent = function() {
									if (this.$2.isMuted()) return;
									this.$11(g.VIDEO_UNMUTE);
								};
								b.$8 = function() {
									this.$11(g.VIDEO_PAUSE);
								};
								b.$7 = function() {
									this.$11(g.VIDEO_UNPAUSE);
								};
								b.$11 = function(a) {
									this.$10(a, { time: this.$2.getCurrentTime() });
								};
								b.$9 = function(a, b, c, d) {
									var e = c ? c.offsetRect : null,
										f = c ? c.offsetHeight : null,
										g = c ? c.offsetWidth : null,
										h = c ? c.viewportRect : null;
									if (l(navigator.userAgent) && g === 0 && f === 0) {
										var i = this.$2.getWidth(),
											m = this.$2.getHeight();
										i !== null && m !== null && ((g = i), (f = m));
									}
									return babelHelpers["extends"](
										{
											time: b,
											ptime: a,
											pt: e == null ? void 0 : e.y,
											pl: e == null ? void 0 : e.x,
											ph: typeof f === "number" ? f : void 0,
											pw: typeof g === "number" ? g : void 0,
											vph: h == null ? void 0 : h.height,
											vpw: h == null ? void 0 : h.width,
											inline: Number(this.$2.isFullscreen()),
											autoplay: 1,
											detected_page_domain:
												c && c.pageDomain !== null ? c.pageDomain : void 0,
											detected_page_url:
												c && c.pageURL !== null ? c.pageURL : void 0,
											domain_detection_method: c ? c.domainDetectionMethod : 0,
											bf: this.$12(),
											focus: j()
										},
										k(d)
									);
								};
								b.$12 = function() {
									try {
										return i.getAllBrowserFeatures();
									} catch (a) {
										return "";
									}
								};
								b.$10 = function(a, b) {
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
							"NativePromise",
							"VPAIDDomUtils",
							"csx",
							"cx",
							"joinClasses",
							"nullthrows"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							"use strict";
							__p && __p();
							var m = h.div,
								n = h.dom;
							function o(a, b, c) {
								c === void 0 && (c = HTMLElement);
								a = l(a.querySelector(b));
								if (a instanceof c) return a;
								throw new Error("Invalid element type");
							}
							var p = (function() {
								__p && __p();
								function a() {
									__p && __p();
									var a = this;
									this.$10 = function(b) {
										var c = l(a.$7);
										c.setMuted(!c.isMuted());
										b.stopPropagation();
									};
									this.$11 = function(b) {
										var c = l(a.$7);
										c.getVideoElement().paused ? c.play(!0) : c.pause(!0);
										b.stopPropagation();
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
									var b = this.$9(),
										c = b[0],
										d = b[1],
										e = b[2],
										f = b[3];
									b = b[4];
									this.$2 = c;
									this.$3 = d;
									this.$4 = e;
									this.$5 = f;
									this.$6 = b;
									this.$8 = null;
								}
								var b = a.prototype;
								b.$9 = function() {
									var a = m("_7juh"),
										b = m("_7jue"),
										c = m("_7jui"),
										d = m("_7juj"),
										e = m("_7juk", [
											m("_7lkm"),
											m("_7lkn", [b, m("_7jul", [a]), c, d])
										]);
									d.addEventListener("click", this.$10);
									b.addEventListener("click", this.$11);
									return [e, a, b, c, d];
								};
								b.attach = function(a) {
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
								b.detach = function() {
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
								b.$17 = function() {
									this.$8 != null &&
										(window.clearTimeout(this.$8), (this.$8 = null));
								};
								b.$18 = function() {
									this.$2.classList.remove("_7jum"), this.$17();
								};
								b.$19 = function() {
									var b = this;
									this.$17();
									this.$8 = window.setTimeout(function() {
										b.$2.classList.add("_7jum");
									}, a.$1);
								};
								b.$16 = function() {
									var a = l(this.$7),
										b = a.getDuration();
									a = a.getCurrentTime();
									var c = "0";
									b > 0 && (c = (a / b) * 100 + "%");
									this.$3.style.width = c;
									c = (b - a) / 1e3;
									b = Math.floor(c / 60);
									a = Math.floor(c % 60);
									this.$5.textContent = "- " + b + ":" + (a < 10 ? "0" + a : a);
								};
								return a;
							})();
							p.$1 = 3e3;
							var q = (function() {
									__p && __p();
									function a() {
										var a = this;
										this.$4 = function(b) {
											var c = l(a.$2);
											c.setMuted(!c.isMuted());
											b.stopPropagation();
										};
										this.$1 = this.$3();
									}
									var b = a.prototype;
									b.$3 = function() {
										var a = m("_1xj9");
										a.addEventListener("click", this.$4, !1);
										return a;
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
									return a;
								})(),
								r = (function() {
									__p && __p();
									function a(a, b) {
										this.$1 = this.$3(a, b);
									}
									var b = a.prototype;
									b.$3 = function(a, b) {
										return m(
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
								s = (function() {
									__p && __p();
									function a(a) {
										__p && __p();
										var b = this;
										this.$7 = function(a) {
											var c = l(b.$5);
											c.play();
											a.stopPropagation();
										};
										this.$1 = a;
										a = this.$6();
										var c = a[0],
											d = a[1];
										a = a[2];
										this.$2 = c;
										this.$3 = d;
										this.$4 = a;
									}
									var b = a.prototype;
									b.$6 = function() {
										var a = m("_7kbv"),
											b = m(k("_7kbw", "fbAdLink"), [
												m("fbAdIcon"),
												m("fbAdSubtitle"),
												m("fbAdCallToAction")
											]),
											c = m("_7kbx"),
											d = m("_7kby", [c, m("_7kbz", [b]), a]);
										c.style.backgroundImage = "url(" + this.$1 + ")";
										return [d, b, a];
									};
									b.attach = function(a) {
										this.$5 != null && (this.detach(), (this.$5 = null)),
											(this.$5 = a),
											a.getElement().appendChild(this.$2),
											(a.getVideoElement().loop = !1),
											this.$4.addEventListener("click", this.$7),
											this.$2.addEventListener("click", this.$8);
									};
									b.$8 = function(a) {
										a.stopPropagation();
									};
									b.detach = function() {
										this.$2.parentNode &&
											(this.$2.parentNode.removeChild(this.$2),
											this.$4.removeEventListener("click", this.$7),
											this.$2.removeEventListener("click", this.$8));
									};
									return a;
								})(),
								t = (function() {
									__p && __p();
									function a(a) {
										this.$1 = a;
										a = this.$4();
										this.$2 = a;
									}
									var b = a.prototype;
									b.$4 = function() {
										var a = m(k("_7kb-", "fbAdLink"), [
												m("fbAdIcon"),
												m("fbAdSubtitle"),
												m("fbAdCallToAction")
											]),
											b = m("_7kb_");
										a = m("_7kc0", [b, m("_7kc1", [a])]);
										b.style.backgroundImage = "url(" + this.$1 + ")";
										return a;
									};
									b.attach = function(a) {
										this.$3 != null && (this.detach(), (this.$3 = null)),
											this.$2.addEventListener("click", this.$5),
											(this.$3 = a),
											a.getElement().appendChild(this.$2);
									};
									b.$5 = function(a) {
										a.stopPropagation();
									};
									b.detach = function() {
										this.$2.parentNode &&
											(this.$2.parentNode.removeChild(this.$2),
											this.$2.removeEventListener("click", this.$5));
									};
									return a;
								})(),
								u = ES("Object", "freeze", !1, {
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
										(d.controls || u.controls) === "full" ? new p() : new q();
									this.$8 =
										(d.pauseCard || u.pauseCard) === "icon_and_cta"
											? new t(b)
											: new r.pauseCard();
									this.$10 =
										(d.endCard || u.endCard) === "v1" ? new s(b) : null;
									this.$9 = r.autoplayCard();
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
								var b = a.prototype;
								b.$14 = function() {
									__p && __p();
									var a = this,
										b = m("_6pfr");
									b.style.backgroundImage = "url(" + this.$2 + ")";
									if (this.$4) {
										var c = new Image();
										c.addEventListener("load", function() {
											a.$4 && a.$4();
										});
										c.src = this.$2;
									}
									c = m(k("_1xj7", "_7jun", "_7kc3"), [
										b,
										n(
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
									b = document.defaultView.HTMLVideoElement;
									b = o(c, "._1xj8", b);
									b.poster = this.$2;
									b.setAttribute("webkit-playsinline", "true");
									b.setAttribute("playsinline", "true");
									return [c, b];
								};
								b.$15 = function() {
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
								b.getElement = function() {
									return this.$11;
								};
								b.setMuted = function(a) {
									(this.$13 = a),
										(this.$12.muted = a),
										this.$11.classList.toggle("_7jun", this.$13);
								};
								b.isMuted = function() {
									return this.$13;
								};
								b.play = function(a) {
									__p && __p();
									var b = this;
									this.$6 = !0;
									this.$5 = this.$5 && !a;
									a = this.$12.play();
									if (a instanceof Promise)
										return a
											.then(function() {
												b.$11.classList.remove("_7juo"),
													b.$11.classList.remove("_7kc2"),
													b.$11.classList.remove("_7kc3");
											})
											["catch"](function(a) {
												b.$11.classList.add("_7juo");
												throw a;
											});
									else {
										this.$11.classList.remove("_7juo");
										return g.resolve();
									}
								};
								b.pause = function(a) {
									(this.$5 = this.$5 || !!a),
										this.$12.pause(),
										this.$11.classList.add("_7juo");
								};
								b.wasManuallyPaused = function() {
									return this.$5;
								};
								b.hasPlayed = function() {
									return this.$6;
								};
								b.getVideoElement = function() {
									return this.$12;
								};
								b.getDuration = function() {
									return this.$12 == null
										? 0
										: Math.round(this.$12.duration * 1e3) || 0;
								};
								b.getCurrentTime = function() {
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
						["VPAIDDomUtils", "cx"],
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							var i = g.div;
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
										b = i(
											"_6qhu" +
												(this.$4 === "hide" ? " _6qhv" : "") +
												(this.$4 === "report" ? " _6qhw" : "")
										),
										c = i("_6qhx");
									c.innerText =
										this.$4 === "hide"
											? this.$2.finished_hide_ad
											: this.$2.finished_report_ad;
									var d = i("_6qhy");
									d.innerText = this.$2.finished_description;
									var e = i("_6qh7 _6qh8", [i("_6qhz")]);
									e.appendChild(document.createTextNode(this.$3.title));
									var f = document.createElement("img");
									f.className = "_6qh-";
									f.src = this.$1;
									var g = i("_6qh_");
									g.textContent = this.$2.manage_ad_preferences;
									var h = document.createElement("a");
									h.href = this.$2.manage_ad_preferences_uri;
									h.target = "_blank";
									h.className = "_6qi0";
									h.appendChild(i("_6qi1"));
									h.appendChild(g);
									g = i("_6qi2", [f, e]);
									f = document.createElement("a");
									f.className = "_6qi3";
									this.$6 != null && (f.href = this.$6);
									this.$6 == null &&
										f.addEventListener("click", function(b) {
											a.$5();
										});
									return i("_6qi4", [b, c, d, g, h, f]);
								};
								b.render = function() {
									var a = i("_6qhb _6qi5"),
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
						["VPAIDDomUtils", "cx", "joinClasses"],
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							__p && __p();
							var j = g.div;
							a = (function() {
								__p && __p();
								function a(a, b, c, d) {
									(this.$3 = c), (this.$4 = d), (this.$1 = b), (this.$2 = a);
								}
								var b = a.prototype;
								b.$5 = function(a, b, c, d, e) {
									__p && __p();
									b = j(i("_6qhk", b));
									var f = j("_6qhl");
									f.textContent = a;
									a = j("_6qhm", [f]);
									if (c != null) {
										f = j("_6qhn");
										f.textContent = c;
										a.appendChild(f);
									}
									c = document.createElement("a");
									c.className = "_6qho";
									c.appendChild(b);
									c.appendChild(a);
									e != null && ((c.href = e), (c.target = "_blank"));
									c.addEventListener("click", function(a) {
										e == null && a.preventDefault(), d();
									});
									return c;
								};
								b.render = function() {
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
									return j("_6qhb _6qhq", [b, c, d, e]);
								};
								return a;
							})();
							e.exports = a;
						},
						null
					);
					__d(
						"ANXOutOptionStep",
						["VPAIDDomUtils", "cx"],
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							var i = g.div;
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
									var a = i("_6qgh"),
										b = i(
											"_6qgi" +
												(this.$2 === "hide" ? " _6qgk" : "") +
												(this.$2 === "report" ? " _6qgl" : "")
										),
										c = i("_6qh4");
									b = i("_6qh5", [b, c]);
									b = i("_6qh6", [a, b]);
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
									b = i("_6qh9", b);
									b = i("_6qha", [b]);
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
									var a = i("_6qhb _6qhc"),
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
							"ANXOutConfirmationStep",
							"ANXOutInitialStep",
							"ANXOutOptionStep",
							"VPAIDDomUtils",
							"cx",
							"nullthrows"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							"use strict";
							__p && __p();
							var m = j.div;
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
								var b = a.prototype;
								b.$15 = function() {
									this.$3 == null &&
										((this.$3 = m("_6qhd")),
										this.getRoot().appendChild(l(this.$3)));
									return l(this.$3);
								};
								b.$16 = function() {
									this.$3 != null &&
										(this.getRoot().removeChild(l(this.$3)), (this.$3 = null));
								};
								b.$17 = function() {
									return m("_6qhe");
								};
								b.$18 = function(a) {
									var b = this.$15(),
										c = this.$17();
									this.$19();
									c.appendChild(a);
									b.appendChild(c);
								};
								b.$19 = function() {
									var a = this.$15();
									while (a.firstChild) a.removeChild(a.firstChild);
								};
								b.$20 = function() {
									var a = this.$15(),
										b = m("_6qhf");
									this.$19();
									b.innerText = this.$7.ad_removed;
									a.appendChild(b);
								};
								b.onInitialStepDone = function() {
									this.$12 != null && this.$21();
								};
								b.$21 = function() {
									var a = this,
										b = new i(
											this.$7,
											l(this.$12),
											function(b) {
												a.$22(b);
											},
											function() {
												a.$9(), a.$16();
											},
											this.$14
										);
									this.$18(b.render());
								};
								b.$22 = function(a) {
									__p && __p();
									var b = this;
									this.$10(a.option_type);
									if (a.option_type === this.$7.follow_up_report) {
										this.$12 = "report";
										this.$21();
										return;
									}
									this.$11();
									a = new g(
										this.$7,
										a,
										this.$5,
										l(this.$12),
										function() {
											b.$20();
										},
										this.$13
									);
									this.$18(a.render());
								};
								b.$23 = function() {
									var a = this,
										b = new h(
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
									this.$18(b.render());
								};
								b.getButton = function() {
									return l(this.$4);
								};
								b.getRoot = function() {
									return l(this.$2);
								};
								b.render = function() {
									__p && __p();
									var a = this;
									this.$2 = m("_6qhh", []);
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
						function(a, b, c, d, e, f, g) {
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
							})(g);
							e.exports = a;
						},
						null
					);
					__d(
						"AdMostlyViewableImpressionBehavior.anweb",
						["OnScreenBehavior.anweb"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = 1e3;
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
											h
										));
									this.$AdMostlyViewableImpressionBehavior1 = !1;
								};
								return b;
							})(g);
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								a.unknownResult = function(b, c) {
									b === void 0 && (b = g.NONE);
									c === void 0 && (c = "");
									return new a({ vd: b, r: c });
								};
								function a(a) {
									var b = a.ar,
										c = a.e,
										d = a.vd,
										e = a.r,
										f = a.vr,
										h = a.cont;
									a = a.maa;
									this.$3 = d;
									this.$5 = f;
									this.$1 = b;
									this.$7 = a;
									this.$2 = c || null;
									this.$4 = d === g.NONE ? "" : e || d;
									this.$6 = h || !1;
								}
								var b = a.prototype;
								b.appendResult = function(a) {
									this.$5 || (this.$5 = a.$5),
										this.$1 || (this.$1 = a.$1),
										(this.$4 = a.$4),
										(this.$3 = a.$3),
										(this.$6 = a.$6),
										(this.$7 = this.$7 || a.$7);
								};
								b.getData = function() {
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
								b.getAdRect = function() {
									return this.$1;
								};
								b.getError = function() {
									return this.$2;
								};
								b.getMaxAdArea = function() {
									return this.$7;
								};
								b.getIsContinuous = function() {
									return this.$6;
								};
								b.getViewableRect = function() {
									return this.$5;
								};
								b.getViewableRatio = function() {
									return this.$8(function(a) {
										return a.area();
									});
								};
								b.getViewableHeightRatio = function() {
									return this.$8(function(a) {
										return a.height;
									});
								};
								b.getViewableWidthRatio = function() {
									return this.$8(function(a) {
										return a.width;
									});
								};
								b.$8 = function(a) {
									var b = this.$1,
										c = this.$5;
									return (c && a(c) === 0) || (b && a(b) === 0)
										? 0
										: c && b
											? a(c) / a(b)
											: null;
								};
								b.getViewabilityDetection = function() {
									return this.$3;
								};
								b.getReason = function() {
									return this.$4;
								};
								b.isConclusive = function() {
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a, b) {
									this.__parentWindow = b;
								}
								var b = a.prototype;
								b.destroy = function() {};
								b.getMeasurement = function(a) {
									a(
										g.unknownResult(
											this.__viewabilityDetection,
											this.__viewabilityDetection + "-na"
										)
									);
								};
								b.getViewabilityDetection = function() {
									return this.__viewabilityDetection;
								};
								b.getParentWindow = function() {
									return this.__parentWindow;
								};
								b.isAvailable = function(a) {
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
						function(a, b, c, d, e, f, g) {
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
								a.RectangleFromViewport = function(b) {
									var c = g.getBrowserBarOffset(b);
									return new a(
										b.screenX,
										b.screenY + c,
										b.outerWidth,
										b.outerHeight - c
									);
								};
								var b = a.prototype;
								b.area = function() {
									return this.width * this.height;
								};
								b.getData = function() {
									return {
										x: this.x,
										y: this.y,
										width: this.width,
										height: this.height
									};
								};
								b.intersection = function(b) {
									var c = Math.max(this.x, b.x),
										d = Math.max(this.y, b.y),
										e = Math.min(this.x + this.width, b.x + b.width);
									b = Math.min(this.y + this.height, b.y + b.height);
									return e >= c && b >= d ? new a(c, d, e - c, b - d) : null;
								};
								b.offset = function(b, c) {
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
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							"use strict";
							__p && __p();
							var m = i.getBrowserBarOffset;
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(b, a);
								function b(b, c) {
									__p && __p();
									var d;
									d = a.call(this, b, c) || this;
									d.$AMPMeasurement5 = function(a) {
										a = a[a.length - 1];
										var b = a.boundingClientRect;
										a = a.intersectionRect;
										d.$AMPMeasurement1 = l.RectangleFromClientRect(b);
										d.$AMPMeasurement4 = l
											.RectangleFromClientRect(a)
											.offset(
												d.__parentWindow.screenX,
												d.__parentWindow.screenY + m(d.__parentWindow)
											);
										d.$AMPMeasurement4 =
											(d.$AMPMeasurement2 && d.$AMPMeasurement2.hidden) ||
											!d.$AMPMeasurement4
												? l.RectangleZero()
												: d.$AMPMeasurement4;
									};
									d.$AMPMeasurement1 = null;
									d.$AMPMeasurement2 = null;
									d.__viewabilityDetection = j.AMP;
									d.$AMPMeasurement3 = null;
									d.$AMPMeasurement4 = null;
									k.genAMPContext().then(function(a) {
										(d.$AMPMeasurement2 = a),
											(d.$AMPMeasurement3 = a.observeIntersection(
												d.$AMPMeasurement5
											));
									});
									return d;
								}
								var c = b.prototype;
								c.destroy = function() {
									this.$AMPMeasurement3 && this.$AMPMeasurement3();
								};
								c.isAvailable = function() {
									return k.isAMP();
								};
								c.getMeasurement = function(a) {
									a(
										new h({
											ar: this.$AMPMeasurement1,
											vd: this.__viewabilityDetection,
											vr: this.$AMPMeasurement4
										})
									);
								};
								return b;
							})(g);
							e.exports = a;
						},
						null
					);
					__d(
						"AdQualityMeasurementQueue.adquality",
						["AdQualityMeasurementResult.adquality"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a) {
									this.$1 = a;
								}
								var b = a.prototype;
								b.destroy = function() {
									ES(this.$1, "forEach", !0, function(a) {
										a.destroy();
									}),
										(this.$1 = []);
								};
								b.getMeasurement = function(a) {
									this.$2(0, g.unknownResult(), a);
								};
								b.$2 = function(a, b, c) {
									var d = this;
									b.appendResult(g.unknownResult());
									if (a < this.$1.length) {
										var e = this.$1[a];
										!e.isAvailable(this.$1)
											? this.$2(a + 1, b, c)
											: e.getMeasurement(function(e) {
													b.appendResult(e),
														b.isConclusive() ? d.$3(b, c) : d.$2(a + 1, b, c);
											  });
									} else this.$3(b, c);
								};
								b.$3 = function(a, b) {
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a() {
									this.$1 = { h: 0, u: 0, v: 0 };
								}
								var b = a.prototype;
								b.destroy = function() {
									this.$1 = { h: 0, u: 0, v: 0 };
								};
								b.getMaxAdAreaForScreenOrientation = function(a) {
									var b = g.getScreenOrientation();
									if (a.getReason() !== "fullscreen") {
										a = a.getAdRect();
										a = (a && a.area()) || 0;
										this.$1[b] = Math.max(this.$1[b], a);
									}
									return {
										maxAdAreaNotFullscreen: this.$1[b],
										screenOrientation: b
									};
								};
								b.getMaxAdAreaByScreenOrientation = function(a) {
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
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a, b, c) {
									b === void 0 && (b = 0.05),
										c === void 0 && (c = 0.33),
										(this.$23 = a),
										(this.$2 = b),
										(this.$28 = c),
										this.resetNonContinuousStatistics(),
										(this.$20 = h.NONE),
										(this.$21 = ""),
										(this.$5 = 0),
										(this.$7 = 0),
										(this.$6 = 0),
										(this.$9 = 0),
										(this.$10 = 0),
										(this.$11 = 0),
										(this.$27 = {
											maxAdAreaNotFullscreen: 0,
											screenOrientation: g.UNKNOWN
										});
								}
								var b = a.prototype;
								b.getViewableRatio = function() {
									return this.$23;
								};
								b.getData = function() {
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
								b.registerProgress = function(a, b) {
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
								b.registerVolume = function(a, b, c) {
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
								b.registerPlaybackRate = function(a, b) {
									(this.$24 += a), (this.$18 += b * a);
								};
								b.resetNonContinuousStatistics = function() {
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
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							var k = 0.5;
							a = (function() {
								__p && __p();
								function a(a) {
									__p && __p();
									var b = a.element,
										c = a.parentWindow,
										d = a.rules;
									this.$1 = !0;
									this.$2 = b;
									this.$3 = new g(a.measurementTests);
									this.$4 = new i();
									this.$5 = c;
									this.$8 = d;
									this.$6 = new j(k);
									this.$7 = ES(this.$8, "map", !0, function(a) {
										return a.createTest(a);
									});
								}
								var b = a.prototype;
								b.getStatistics = function() {
									return this.$6.getData();
								};
								b.getViewableRatio = function(a, b) {
									var c = this;
									this.$3.getMeasurement(function(d) {
										var e = d.getAdRect();
										b(
											new h({
												ar: e,
												e: d.getError(),
												vd: d.getViewabilityDetection(),
												r: a ? "fullscreen" : d.getReason(),
												vr: a ? e : d.getViewableRect(),
												maa: c.$4.getMaxAdAreaForScreenOrientation(d)
											})
										);
									});
								};
								b.registerProgress = function(a, b) {
									__p && __p();
									var c = this;
									if (!this.$1) {
										b && b(this.getStatistics());
										return;
									}
									this.$3.getMeasurement(function(d) {
										if (c.$1) {
											var e = d.getAdRect();
											e = new h({
												ar: e,
												e: d.getError(),
												vd: d.getViewabilityDetection(),
												r: a.isFullScreen ? "fullscreen" : d.getReason(),
												vr: a.isFullScreen ? e : d.getViewableRect(),
												cont: a.isContinuous,
												maa: c.$4.getMaxAdAreaForScreenOrientation(d)
											});
											c.$9(
												e,
												parseFloat(a.loggingTimeInterval),
												c.getStatistics(),
												a,
												a.volume,
												a.playbackRate
											);
											b && b(c.getStatistics());
										}
									});
								};
								b.resetStatistics = function() {
									this.$6.resetNonContinuousStatistics();
								};
								b.addRule = function(a) {
									this.$8.push(a), this.$7.push(a.createTest(a));
								};
								b.$9 = function(a, b, c, d, e, f) {
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
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							var i = 0,
								j = 1,
								k = 2,
								l = 3,
								m = 0,
								n = 1,
								o = 2;
							a = (function() {
								__p && __p();
								function a(b, c) {
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
									this.domainDetectionMethod = i;
									this.pageDomain = null;
									this.transparent = null;
									try {
										try {
											(this.offsetHeight = b.offsetHeight),
												(this.offsetWidth = b.offsetWidth);
										} catch (a) {}
										var d = b.ownerDocument;
										this.parentWindow =
											c || b.ownerDocument.defaultView || d.parentWindow;
										if (this.parentWindow) {
											c = b;
											d = this.parentWindow;
											while (d && this.windowCount < 100) {
												this.windowCount++;
												b = null;
												var e = null;
												try {
													(e = d.document.referrer),
														(b = d.location.href || d.document.location.href),
														(this.topWindow = d),
														(this.topWindowLevel = this.windowCount);
												} catch (a) {
													this.crossDomainWindowCount++;
												}
												this.ancestorURLs.push(b || e || "");
												var f = null;
												try {
													c &&
														a.isElementVisible(c) === !1 &&
														(this.transparent = !0);
												} catch (a) {}
												var p = null;
												if (
													c &&
													c.getBoundingClientRect &&
													this.crossDomainWindowCount === 0
												)
													try {
														p = c.getBoundingClientRect();
													} catch (a) {}
												p &&
													this.crossDomainWindowCount === 0 &&
													(!this.offsetRect
														? (this.offsetRect = h.RectangleFromClientRect(p))
														: (this.offsetRect = this.offsetRect.offset(
																p.left,
																p.top
														  )));
												if (!this.parentWindow || !this.parentWindow.top)
													d = null;
												else if (d === this.parentWindow.top)
													b &&
														((this.pageURL = b),
														(this.pageDomain = g.extractDomain(b)),
														(this.domainDetectionMethod = j),
														(this.focus = f)),
														this.windowCount > 1
															? b
																? (this.type = n)
																: (this.type = o)
															: (this.type = m),
														this.type !== o &&
															((this.viewportRect = h.RectangleFromWindow(d)),
															this.transparent === null &&
																(this.transparent = !1)),
														(d = null);
												else {
													e &&
														d.parent === this.parentWindow.top &&
														((this.pageURL = e),
														(this.pageDomain = g.extractDomain(e)),
														(this.domainDetectionMethod = k));
													c = null;
													try {
														(c = d.frameElement),
															c && this.ancestorIframes.push(c);
													} catch (a) {}
													d = d.parent;
												}
											}
											if (!this.pageURL) {
												p = window.location.ancestorOrigins;
												p &&
													p.length > 0 &&
													((this.pageDomain = g.extractDomain(p[p.length - 1])),
													(this.domainDetectionMethod = l));
											}
										}
									} catch (a) {
										this.error = a;
									}
								}
								var b = a.prototype;
								b.getData = function() {
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
								b.isSafeframe = function() {
									return !!this.getSafeFrameAPI();
								};
								b.getSafeFrameAPI = function() {
									return this.$1(function(a) {
										return a.$sf && a.$sf.ext;
									});
								};
								b.getMRAIDAPI = function() {
									return this.$1(function(a) {
										return a.mraid;
									});
								};
								b.$1 = function(a) {
									__p && __p();
									var b = g.getWindowHierarchy(this.parentWindow);
									for (
										var b = b,
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
										e = a(e);
										if (e) return e;
									}
									return null;
								};
								b.getNestLevel = function() {
									return this.ancestorURLs.length - 1;
								};
								b.getTopURL = function() {
									return this.ancestorURLs[this.ancestorURLs.length - 1];
								};
								b.isCrossDomain = function() {
									return this.crossDomainWindowCount > 0;
								};
								b.getOverlayedArea = function(a) {
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
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							"use strict";
							__p && __p();
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(b, a);
								function b(b, c) {
									var d;
									d = a.call(this, b, c) || this;
									d.$GeometricMeasurement1 = b;
									c = new j(b, c);
									d.$GeometricMeasurement2 = !!(c.viewportRect && c.offsetRect);
									d.__viewabilityDetection = i.GEOMETRIC;
									d.$GeometricMeasurement3 = new k(b.ownerDocument);
									return d;
								}
								var c = b.prototype;
								c.isAvailable = function() {
									return this.$GeometricMeasurement2;
								};
								c.getMeasurement = function(a) {
									__p && __p();
									var b = new j(
											this.$GeometricMeasurement1,
											this.__parentWindow
										),
										c = null,
										d = null,
										e = "",
										f = null,
										g = null;
									try {
										var i = this.$GeometricMeasurement3.isHidden();
										typeof i === "boolean" && (d = !i);
										g = b.offsetRect;
										b.focus !== null && (d = b.focus);
										if (b.transparent === !0) {
											a(
												new h({
													ar: g,
													vd: this.__viewabilityDetection,
													r: "geo-trans",
													vr: l.RectangleZero()
												}),
												b
											);
											return;
										}
										b.viewportRect && g && b.crossDomainWindowCount === 0
											? ((f =
													b.viewportRect.intersection(g) || l.RectangleZero()),
											  (e = f.area() > 0 ? "geo-area" : "geo-no-vr"))
											: g || (e = "geo-no-or");
										d === !1 && ((f = l.RectangleZero()), (e = "geo-pv"));
									} catch (a) {
										c = a;
									}
									a(
										new h({
											ar: g,
											e: c,
											vd: this.__viewabilityDetection,
											r: e,
											vr: f
										}),
										b
									);
								};
								return b;
							})(g);
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
						function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
							"use strict";
							__p && __p();
							var n = 300,
								o = [];
							for (var a = 0; a <= 10; a += 1) o.push(a / 10);
							b = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(b, a);
								function b(b, c) {
									__p && __p();
									var d;
									d = a.call(this, b, c) || this;
									d.$IntersectionObserverMeasurement2 = b;
									d.isAvailable() &&
										(d.$IntersectionObserverMeasurement4 = new m(function(
											a,
											e
										) {
											__p && __p();
											var f = window.setTimeout(function() {
													return e();
												}, n),
												g = new j(b, c),
												h = g.offsetRect;
											g = g.topWindow;
											var i = b;
											if (h && g) {
												var m = l.RectangleFromWindow(g);
												m &&
													(h.y < m.y ||
														h.x < m.x ||
														h.height > m.height ||
														h.width > m.width) &&
													(i = g.document.documentElement || b);
											}
											h = d.__parentWindow.IntersectionObserver;
											d.$IntersectionObserverMeasurement3 = new h(
												function(b) {
													var c = !!d.$IntersectionObserverMeasurement1;
													d.$IntersectionObserverMeasurement1 = b[b.length - 1];
													c || (window.clearTimeout(f), a());
												},
												{ threshold: o }
											);
											d.$IntersectionObserverMeasurement3.observe(i);
											d.$IntersectionObserverMeasurement5 = new k(
												b.ownerDocument
											);
										}));
									d.__viewabilityDetection = i.INTERSECTION_OBSERVER;
									return d;
								}
								var c = b.prototype;
								c.destroy = function() {
									this.$IntersectionObserverMeasurement3 &&
										this.$IntersectionObserverMeasurement3.disconnect();
								};
								c.isAvailable = function() {
									return "IntersectionObserver" in this.__parentWindow;
								};
								c.getMeasurement = function(a) {
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
								c.$IntersectionObserverMeasurement6 = function(a) {
									__p && __p();
									if (!this.$IntersectionObserverMeasurement1) {
										this.$IntersectionObserverMeasurement7(a);
										return;
									}
									var b = this.$IntersectionObserverMeasurement1,
										c = b.boundingClientRect;
									b = b.intersectionRect;
									var d = !this.$IntersectionObserverMeasurement5.isHidden(),
										e = new j(
											this.$IntersectionObserverMeasurement2,
											this.__parentWindow
										);
									e.focus !== null && (d = d && Boolean(e.focus));
									e = d ? l.RectangleFromClientRect(b) : l.RectangleZero();
									a(
										new h({
											ar: l.RectangleFromClientRect(c),
											vd: this.__viewabilityDetection,
											vr: e
										})
									);
								};
								c.$IntersectionObserverMeasurement7 = function(a) {
									a(
										h.unknownResult(
											this.__viewabilityDetection,
											this.__viewabilityDetection + "-na"
										)
									);
								};
								return b;
							})(g);
							e.exports = b;
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
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							"use strict";
							__p && __p();
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(b, a);
								function b(b, c) {
									var d;
									d = a.call(this, b, c) || this;
									d.$SafeframeMeasurement1 = new j(b, c).getSafeFrameAPI();
									d.__viewabilityDetection = i.SAFEFRAME;
									return d;
								}
								var c = b.prototype;
								c.isAvailable = function() {
									return !!this.$SafeframeMeasurement1;
								};
								c.getMeasurement = function(a) {
									var b = l(this.$SafeframeMeasurement1);
									b = b.geom;
									b = b();
									b = b.self;
									var c = Number(b.h),
										d = Number(b.w),
										e = Number(b.l),
										f = Number(b.t);
									a(
										new h({
											ar: new k(e, f, d, c),
											vd: this.__viewabilityDetection,
											vr: new k(e, f, Number(b.xiv) * d, Number(b.yiv) * c)
										})
									);
								};
								return b;
							})(g);
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
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							"use strict";
							__p && __p();
							var m = 100;
							a = (function() {
								__p && __p();
								function a(a, b) {
									b === void 0 && (b = !1);
									this.$1 = !1;
									this.$3 = null;
									var c = a.ownerDocument.defaultView,
										d = [new j(a, c), new l(a, c), new i(a, c)],
										e = new k(a, c);
									b ? (d = [e].concat(d)) : d.push(e);
									this.$2 = new g({
										element: a,
										parentWindow: c,
										rules: [],
										measurementTests: d
									});
								}
								var b = a.prototype;
								b.pause = function() {
									this.$1 = !0;
								};
								b.resume = function() {
									this.$1 = !1;
								};
								b.getDimensions = function() {
									return !this.$4 ? null : this.$4.getAdRect();
								};
								b.attachBehaviorManager = function(a) {
									(this.$3 = a), this.$6();
								};
								b.$6 = function() {
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
									}, m);
								};
								b.getCurrentViewabilityState = function() {
									__p && __p();
									if (!this.$4) return { viewabilityLevels: [h.UNKNOWN] };
									var a = this.$4,
										b = a.getViewableRatio(),
										c = a.getViewableWidthRatio();
									a = a.getViewableHeightRatio();
									if (b == null || c == null || a == null)
										return { viewabilityLevels: [h.UNKNOWN] };
									if (b <= 0)
										return { viewabilityLevels: [h.OFFSCREEN_INFINITY] };
									if (c <= 0.99)
										return { viewabilityLevels: [h.OFFSCREEN_HORIZONTAL] };
									b >= 1
										? (b = [h.FULLY_VISIBLE])
										: (b = [h.PARTIALLY_VISIBLE]);
									return {
										viewabilityLevels: b,
										widthInView: c,
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
						function(a, b, c, d, e, f, g) {
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
								var b = a.prototype;
								b.addEventListener = function(a, b, c) {
									this.$2.push({
										type: a,
										listener: b,
										optionsOrUseCapture: c
									}),
										this.$1.addEventListener(a, b, c);
								};
								b.enforcesContinuity = function() {
									return !1;
								};
								b.exitFullscreen = function() {
									document.exitFullscreen
										? document.exitFullscreen()
										: document.msExitFullscreen
											? document.msExitFullscreen()
											: document.mozCancelFullScreen
												? document.mozCancelFullScreen()
												: document.webkitExitFullscreen &&
												  document.webkitExitFullscreen();
								};
								b.getCurrentTime = function() {
									return this.$1.currentTime;
								};
								b.getDuration = function() {
									return this.$1.duration;
								};
								b.getError = function() {
									return this.$1.error;
								};
								b.getVideoSlot = function() {
									return this.$1;
								};
								b.getVolume = function() {
									return this.$1.volume;
								};
								b.getPlaybackRate = function() {
									return this.$1.playbackRate;
								};
								b.isFullscreen = function() {
									if (this.$1.webkitDisplayingFullscreen) return !0;
									var a = g();
									a = a === this.$1;
									if (a) return !0;
									a = /iPhone OS (9_|8_|7_)|iPod/;
									return a.test(navigator.userAgent) &&
										!(this.$1 instanceof HTMLVideoElement) &&
										!this.$1.paused
										? !0
										: !1;
								};
								b.isMuted = function() {
									return this.$1.muted;
								};
								b.isPaused = function() {
									return this.$1.paused;
								};
								b.pause = function() {
									this.$1.pause();
								};
								b.play = function() {
									this.$1.play();
								};
								b.remove = function() {
									this.$1.parentNode && this.$1.parentNode.removeChild(this.$1);
								};
								b.requestFullscreen = function() {
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
								b.removeEventListener = function(a, b, c) {
									this.$1.removeEventListener(a, b, c);
								};
								b.setSrc = function(a) {
									this.$1.setAttribute
										? this.$1.setAttribute("src", a)
										: (this.$1.src = a);
								};
								b.getSrc = function() {
									return this.$1.getAttribute
										? this.$1.getAttribute("src")
										: this.$1.src;
								};
								b.setVolume = function(a) {
									this.setMuted(a <= 0), (this.$1.volume = a);
								};
								b.setMuted = function(a) {
									this.$1.muted = a;
								};
								b.cleanup = function() {
									var a = this;
									ES(this.$2, "forEach", !0, function(b) {
										a.removeEventListener(
											b.type,
											b.listener,
											b.optionsOrUseCapture
										);
									});
								};
								b.$3 = function() {
									if (this.$1.getBoundingClientRect)
										return this.$1.getBoundingClientRect();
									else if (
										this.$1.parentNode &&
										this.$1.parentNode.getBoundingClientRect
									)
										return this.$1.parentNode.getBoundingClientRect();
									return null;
								};
								b.getWidth = function() {
									var a = this.$3();
									return a ? a.width : null;
								};
								b.getHeight = function() {
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
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(b, a);
								function b(b, c) {
									var d;
									d = a.call(this, b, c) || this;
									d.$BaseXDomainScreenMeasurement1 = b;
									d.$BaseXDomainScreenMeasurement3 = c;
									d.$BaseXDomainScreenMeasurement2 =
										ES(navigator.platform, "indexOf", !0, "Mac") > -1;
									return d;
								}
								var c = b.prototype;
								c.__getAdOffset = function() {
									throw new Error("Not implemented");
								};
								c.__isDocumentHidden = function() {
									return document.hidden === !0;
								};
								c.getMeasurement = function(a) {
									__p && __p();
									var b = i.RectangleFromClientRect(
											this.$BaseXDomainScreenMeasurement1.getBoundingClientRect()
										),
										c = j(
											i.RectangleFromWindow(this.$BaseXDomainScreenMeasurement3)
										);
									if (this.__isDocumentHidden()) {
										a(
											new h({
												ar: i.RectangleZero(),
												vd: this.__viewabilityDetection,
												vr: i.RectangleZero()
											})
										);
										return;
									}
									b = b.intersection(c);
									if (!b) {
										a(
											new h({
												ar: i.RectangleZero(),
												vd: this.__viewabilityDetection,
												vr: i.RectangleZero()
											})
										);
										return;
									}
									c = this.__getAdOffset();
									if (!c) {
										a(
											h.unknownResult(
												this.__viewabilityDetection,
												this.__viewabilityDetection + "-no-offset"
											)
										);
										return;
									}
									var d = c.x;
									c = c.y;
									d = b
										.offset(d, c)
										.intersection(
											i.RectangleFromViewport(
												this.$BaseXDomainScreenMeasurement3
											)
										);
									a(
										new h({
											ar: b,
											vd: this.__viewabilityDetection,
											vr: d || i.RectangleZero()
										})
									);
								};
								return b;
							})(g);
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
						function(a, b, c, d, e, f, g, h, i, j, k) {
							"use strict";
							__p && __p();
							var l = h.isIE11;
							function m(a, b, c) {
								a.addEventListener
									? a.addEventListener(b, c, !1)
									: a.attachEvent
										? a.attachEvent("on" + b, c)
										: (a[b] = c);
							}
							var n = 11;
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(b, a);
								function b(b, c) {
									__p && __p();
									var d;
									d = a.call(this, b, c) || this;
									d.$IEXDomainScreenMeasurement1 = null;
									d.__viewabilityDetection = i.IE_MOUSE;
									b = new k(b, c);
									d.$IEXDomainScreenMeasurement3 = b.isCrossDomain();
									if (!d.isAvailable())
										return babelHelpers.assertThisInitialized(d);
									c = b.parentWindow;
									if (!c) return babelHelpers.assertThisInitialized(d);
									b = c.document.documentElement;
									if (!b) return babelHelpers.assertThisInitialized(d);
									d.$IEXDomainScreenMeasurement4 = b;
									m(d.$IEXDomainScreenMeasurement4, "click", function(b) {
										b = b || window.event;
										if (b.target !== d.$IEXDomainScreenMeasurement4) return !0;
										b.preventDefault();
										b.stopPropagation();
										d.$IEXDomainScreenMeasurement1 = {
											x: b.screenX - b.clientX,
											y: b.screenY - b.clientY + n
										};
										b = d.$IEXDomainScreenMeasurement2;
										b &&
											(a.prototype.getMeasurement.call(
												babelHelpers.assertThisInitialized(d),
												b
											),
											(d.$IEXDomainScreenMeasurement2 = null));
										return !1;
									});
									return d;
								}
								var c = b.prototype;
								c.isAvailable = function() {
									return !this.$IEXDomainScreenMeasurement3 ? !1 : l();
								};
								c.getMeasurement = function(a) {
									var b = this.$IEXDomainScreenMeasurement2,
										c = this.$IEXDomainScreenMeasurement4;
									!c
										? a(
												g.unknownResult(
													this.__viewabilityDetection,
													this.__viewabilityDetection + "-na"
												)
										  )
										: (b &&
												b(
													g.unknownResult(
														this.__viewabilityDetection,
														this.__viewabilityDetection + "-no-click"
													)
												),
										  (this.$IEXDomainScreenMeasurement2 = a),
										  c.click());
								};
								c.__getAdOffset = function() {
									return this.$IEXDomainScreenMeasurement1;
								};
								return b;
							})(j);
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
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							var k = 24,
								l = 2,
								m = window.performance;
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(b, a);
								function b(b, c) {
									c = a.call(this, b, c) || this;
									c.$InstantArticleMeasurement1 = b;
									c.__viewabilityDetection = i.INSTANT_ARTICLES;
									return c;
								}
								var c = b.prototype;
								c.isAvailable = function() {
									var a = navigator.userAgent.toLowerCase();
									a = /fbia\/fb4a/.test(a);
									return m && a;
								};
								c.$InstantArticleMeasurement2 = function(a) {
									if (!("now" in m)) return;
									var b = !1,
										c = 0,
										d = m.now(),
										e = function e(f) {
											c !== l && !b && window.requestAnimationFrame(e),
												c === l && !b && ((b = !0), a(f - d < k)),
												(d = f),
												c++;
										};
									window.requestAnimationFrame(e);
									window.setTimeout(function() {
										b || ((b = !0), a(!1));
									}, k * 3);
								};
								c.getMeasurement = function(a) {
									var b = this;
									this.$InstantArticleMeasurement2(function(c) {
										var d = new j(
											0,
											0,
											b.$InstantArticleMeasurement1.clientWidth,
											b.$InstantArticleMeasurement1.clientHeight
										);
										a(
											new h({
												ar: d,
												vd: b.__viewabilityDetection,
												vr: c ? d : j.RectangleZero()
											})
										);
									});
								};
								return b;
							})(g);
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
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							__p && __p();
							var j = g.getFirefoxVersion;
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(b, a);
								function b(b, c) {
									b = a.call(this, b, c) || this;
									b.__viewabilityDetection = h.MOZILLA_INNER_SCREEN;
									return b;
								}
								var c = b.prototype;
								c.isAvailable = function() {
									var a = j();
									return typeof a === "number" && a >= 3;
								};
								c.__getAdOffset = function() {
									var a = this.__parentWindow,
										b = a.mozInnerScreenX;
									a = a.mozInnerScreenY;
									return b === void 0 || a === void 0 ? null : { x: b, y: a };
								};
								return b;
							})(i);
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
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							var k = 4,
								l = 1;
							function m(a) {
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
								babelHelpers.inheritsLoose(b, a);
								function b(b, c) {
									c = a.call(this, b, c) || this;
									c.$BaseBeaconXMeasurement1 = b;
									c.$BaseBeaconXMeasurement2 = [];
									c.$BaseBeaconXMeasurement3 = [];
									c.$BaseBeaconXMeasurement4 = [];
									c.$BaseBeaconXMeasurement5 = {};
									return c;
								}
								var c = b.prototype;
								c.destroy = function() {
									var a = this;
									ES(this.$BaseBeaconXMeasurement2, "forEach", !0, function(b) {
										a.$BaseBeaconXMeasurement1.removeChild(b);
									});
								};
								c.isAvailable = function() {
									return !0;
								};
								c.getMeasurement = function(a) {
									__p && __p();
									var b = this,
										c = m([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
										d = m([].concat(c));
									c = ES(c, "map", !0, function(a, b) {
										return { x: a, y: d[b] };
									});
									var e = [],
										f = [];
									ES(c, "forEach", !0, function(a) {
										a.x === 0 || a.y === 0 || a.x === 10 || a.y === 10
											? e.push(a)
											: f.push(a);
									});
									var g = ES(e, "map", !0, function(a) {
										return b.__detectViewability(a);
									});
									j.all(g).then(function(c) {
										__p && __p();
										c = c.reduce(function(a, b) {
											return a + (b === "1" ? 1 : 0);
										}, 0);
										if (c === g.length) {
											a(b.$BaseBeaconXMeasurement6(1));
											return;
										}
										c = [].concat(
											g,
											ES(f, "map", !0, function(a) {
												return b.__detectViewability(a);
											})
										);
										j.all(c).then(function(c) {
											c = c.reduce(function(a, b) {
												return a + (b === "1" ? 1 : 0);
											}, 0);
											c = Math.min(Math.max(-0.05 + c * 0.1, 0), 1);
											a(b.$BaseBeaconXMeasurement6(c));
										});
									});
								};
								c.$BaseBeaconXMeasurement6 = function(a) {
									var b = this.$BaseBeaconXMeasurement1,
										c = a <= 0 ? 0 : b.clientWidth;
									return new h({
										ar: new i(0, 0, b.clientWidth, b.clientHeight),
										vd: this.__viewabilityDetection,
										vr: new i(0, 0, c, b.clientHeight * a)
									});
								};
								c.__detectViewability = function(a) {
									var c = this,
										d = a.x,
										e = a.y;
									return new j(function(a, f) {
										var g = c.$BaseBeaconXMeasurement1.clientWidth,
											h = c.$BaseBeaconXMeasurement1.clientHeight;
										c.$BaseBeaconXMeasurement7().then(function(f) {
											(f.style.left =
												Math.floor(d * g * 0.1) - b.BEACON_SIZE / 2 + "px"),
												(f.style.top =
													Math.floor(e * h * 0.1) - b.BEACON_SIZE / 2 + "px"),
												c.__checkVisibility(f).then(function(b) {
													a(b ? "1" : "0");
													b = c.$BaseBeaconXMeasurement4.shift();
													b ? b(f) : c.$BaseBeaconXMeasurement3.push(f);
												});
										});
									});
								};
								c.__checkVisibility = function(a) {
									throw new Error(
										"Implement __checkVisibility in the subclass"
									);
								};
								c.$BaseBeaconXMeasurement8 = function() {
									var a = navigator.userAgent;
									return /iPhone|iPod/.test(a) ? l : k;
								};
								c.$BaseBeaconXMeasurement7 = function() {
									__p && __p();
									var a = this;
									return new j(function(c, d) {
										__p && __p();
										var e = a.$BaseBeaconXMeasurement3.pop();
										if (e) {
											c(e);
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
											e.style.width = b.BEACON_SIZE + "px";
											e.style.height = b.BEACON_SIZE + "px";
											a.$BaseBeaconXMeasurement1.appendChild(e);
											a.$BaseBeaconXMeasurement2.push(e);
											e.addEventListener(
												"load",
												function() {
													a.__checkVisibility(e).then(function(a) {
														c(e);
													});
												},
												!1
											);
											return;
										}
										a.$BaseBeaconXMeasurement4.push(c);
									});
								};
								c.__setUpBeacon = function(a) {
									throw new Error("Implement __setUpBeacon in the subclass");
								};
								return b;
							})(g);
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
						function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
							"use strict";
							__p && __p();
							var n = h.getChromeVersion,
								o = h.getFirefoxVersion,
								p = h.getSafariVersion,
								q = h.isEdge,
								r = 36,
								s = 2,
								t = 4;
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(b, a);
								function b(b, c, d) {
									__p && __p();
									var e;
									e = a.call(this, b, c) || this;
									e.$RafBeaconMeasurement6 = function(a) {
										var b = a.data;
										a = a.origin;
										try {
											if (a !== null && a !== "null") return;
											a = ES("JSON", "parse", !1, b);
											b = e.$RafBeaconMeasurement5[a.id];
											b && b(a.iv);
										} catch (a) {}
									};
									e.$RafBeaconMeasurement10 = function(a) {
										ES(e.$RafBeaconMeasurement8, "forEach", !0, function(b) {
											return b(a);
										}),
											(e.$RafBeaconMeasurement8 = []),
											(e.$RafBeaconMeasurement7 = !1);
									};
									e.$RafBeaconMeasurement1 = b;
									e.$RafBeaconMeasurement2 = !!p();
									e.__viewabilityDetection = i.RAF;
									e.$RafBeaconMeasurement9 = 0;
									e.$RafBeaconMeasurement3 = new k(b, c).isSafeframe();
									e.$RafBeaconMeasurement7 = !1;
									e.$RafBeaconMeasurement8 = [];
									e.$RafBeaconMeasurement4 = d;
									e.isAvailable() &&
										window.addEventListener(
											"message",
											e.$RafBeaconMeasurement6
										);
									e.$RafBeaconMeasurement5 = {};
									return e;
								}
								var c = b.prototype;
								c.destroy = function() {
									window.removeEventListener(
										"message",
										this.$RafBeaconMeasurement6
									),
										a.prototype.destroy.call(this);
								};
								c.isAvailable = function() {
									__p && __p();
									if (!a.prototype.isAvailable.call(this)) return !1;
									if (this.$RafBeaconMeasurement3) return !1;
									if (this.$RafBeaconMeasurement4 && q()) return !1;
									var b = navigator.userAgent.toLowerCase(),
										c;
									if ((c = o())) return c >= 40 && c < 49;
									if ((c = p())) return c >= 9;
									var d = b.match(/crios\/(\d+)/);
									if (d) {
										d = parseInt(d[1], 10);
										return d >= 48;
									}
									d = /fbios/.test(b);
									if (d) return !0;
									return (c = n()) ? c >= 52 : !1;
								};
								c.getMeasurement = function(b) {
									var c = this;
									this.$RafBeaconMeasurement8.push(b);
									if (this.$RafBeaconMeasurement7) return;
									this.$RafBeaconMeasurement7 = !0;
									m.raf_safari_fix && this.$RafBeaconMeasurement2
										? this.__checkSupportsSafari().then(function(b) {
												b
													? a.prototype.getMeasurement.call(
															c,
															c.$RafBeaconMeasurement10
													  )
													: c.$RafBeaconMeasurement10(
															g.unknownResult(
																c.__viewabilityDetection,
																"raf-safari"
															)
													  );
										  })
										: a.prototype.getMeasurement.call(
												this,
												this.$RafBeaconMeasurement10
										  );
								};
								c.__checkSupportsSafari = function() {
									var a = this;
									if (this.$RafBeaconMeasurement9 >= t) return l.resolve(!0);
									else if (this.$RafBeaconMeasurement9 <= -t)
										return l.resolve(!1);
									return new l(function(b, c) {
										a.__detectViewability({ x: -1e3, y: -1e3 }).then(function(
											c
										) {
											(a.$RafBeaconMeasurement9 += c === "0" ? 1 : -1),
												b(c === "0");
										});
									});
								};
								c.__setUpBeacon = function(a) {
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
								c.__checkVisibility = function(a) {
									__p && __p();
									var b = this,
										c = Math.random() + "";
									return new l(function(d, e) {
										var f = a.contentWindow;
										f.postMessage(c, "*");
										var g = window.setTimeout(function() {
											f.postMessage("failed", "*");
											var a = b.$RafBeaconMeasurement5[c];
											a && a(!1);
										}, r * s);
										b.$RafBeaconMeasurement5[c] = function(a) {
											delete b.$RafBeaconMeasurement5[c],
												window.clearTimeout(g),
												d(a);
										};
									});
								};
								return b;
							})(j);
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
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							"use strict";
							function a(a, b, c) {
								return [
									new i(a, b),
									new g(a, b),
									new k(a, b),
									new l(a, b, c),
									new h(a, b),
									new j(a, b)
								];
							}
							e.exports = { getDefaultMeasurements: a };
						},
						null
					);
					__d(
						"AdQualityTest.adquality",
						["AdQualityStatistics.adquality"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a) {
									(this.$1 = !1),
										(this.$2 = a),
										(this.$3 = new g(a.viewableRatio));
								}
								var b = a.prototype;
								b.registerProgress = function(a, b, c, d) {
									__p && __p();
									if (this.$1) return;
									this.$3.registerProgress(a, b);
									c = b.getViewableRatio() || 0;
									if (
										this.$2.continuous &&
										(!b.getIsContinuous() || c < this.$2.viewableRatio)
									) {
										this.$3 = new g(this.$2.viewableRatio);
										return;
									}
									d = this.$3.getData().viewableSeconds || 0;
									d >= this.$2.viewableSeconds &&
										b.isConclusive() &&
										this.$4(b);
								};
								b.$4 = function(a) {
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
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							__p && __p();
							var j = 5;
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(b, a);
								function b(b) {
									var c;
									c = a.call(this, b) || this;
									c.$AdQualityVideoDynamicIntervalTest2 = {
										lastViewableRatio: 0,
										lastLoggingTime: 0,
										lastStateUpdateTime: 0,
										lastStatisticsData: new g(0).getData(),
										lastMonitoringState: i.initState(),
										isInitialized: !1
									};
									var d = b.viewableRatio,
										e = b.adQualityTestConditionTrueCallback;
									b = b.adQualityTestFinalCallback;
									c.$AdQualityVideoDynamicIntervalTest1 = new g(d);
									c.$AdQualityVideoDynamicIntervalTest3 = e;
									c.$AdQualityVideoDynamicIntervalTest4 = b ? b : function() {};
									return c;
								}
								var c = b.prototype;
								c.registerProgress = function(a, b, c, d) {
									a = !0;
									while (a) {
										c = this.$AdQualityVideoDynamicIntervalTest2;
										c = this.$AdQualityVideoDynamicIntervalTest5(d, c, b);
										this.$AdQualityVideoDynamicIntervalTest2 = c.state;
										a = c.checkLogForNextInterval;
									}
								};
								c.$AdQualityVideoDynamicIntervalTest5 = function(a, b, c) {
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
								c.$AdQualityVideoDynamicIntervalTest9 = function(a, b) {
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
								c.$AdQualityVideoDynamicIntervalTest7 = function(
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
								c.$AdQualityVideoDynamicIntervalTest8 = function(
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
								c.$AdQualityVideoDynamicIntervalTest6 = function(
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
												f - c >= j ||
												a.forceFlushLog;
								};
								c.$AdQualityVideoDynamicIntervalTest10 = function(a, b) {
									return a || !b;
								};
								return b;
							})(h);
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
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							a = {
								videoTimeEvent: function(a, b) {
									return {
										continuous: !0,
										adQualityTestConditionTrueCallback: a,
										adQualityTestFinalCallback: b,
										viewableRatio: 0.5,
										viewableSeconds: 0,
										createTest: function(a) {
											return new h(a);
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
											return new g(a);
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
											return new g(a);
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
								FORCED_KEY: 4,
								getString: function(a) {
									return a && a.length ? " TAAL[" + a.join(";") + "]" : "";
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"TAAL",
						["TAALOpcodes"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							a = {
								blameToPreviousFile: function(a) {
									return this.applyOpcodes(a, [g.PREVIOUS_FILE]);
								},
								blameToPreviousFrame: function(a) {
									return this.applyOpcodes(a, [g.PREVIOUS_FRAME]);
								},
								blameToPreviousDirectory: function(a) {
									return this.applyOpcodes(a, [g.PREVIOUS_DIR]);
								},
								applyOpcodes: function(a, b) {
									return a + g.getString(b);
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
						function(a, b, c, d, e, f, g) {
							function h(a) {
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
									? h(
											"ex args number mismatch: %s",
											ES("JSON", "stringify", !1, [a].concat(e))
									  )
									: h._prefix +
											ES("JSON", "stringify", !1, [a].concat(e)) +
											h._suffix;
							}
							h._prefix = "<![EX[";
							h._suffix = "]]>";
							e.exports = h;
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
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							var k = i;
							function a(a, b) {
								__p && __p();
								if (!a) {
									var c = b;
									for (
										var d = arguments.length,
											e = new Array(d > 2 ? d - 2 : 0),
											f = 2;
										f < d;
										f++
									)
										e[f - 2] = arguments[f];
									if (typeof c === "number") {
										var g = l(c, e),
											i = g.message,
											j = g.decoderLink;
										c = i;
										e.unshift(j);
									} else if (c === void 0) {
										c = "Invariant: ";
										for (var m = 0; m < e.length; m++) c += "%s,";
									}
									c = h.blameToPreviousFrame(c);
									var n = new Error(k.apply(void 0, [c].concat(e)));
									n.name = "Invariant Violation";
									n.messageWithParams = [c].concat(e);
									throw n;
								}
							}
							function l(a, b) {
								var c = "Minified invariant #" + a + "; %s";
								b.length > 0 &&
									(c +=
										" Params: " +
										ES(b, "map", !0, function(a) {
											return "%s";
										}).join(", "));
								a =
									g.show_invariant_decoder === !0
										? "visit " + m(a, b) + " to see the full message."
										: "";
								return { message: c, decoderLink: a };
							}
							function m(a, b) {
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
							"AdQualityManager.adquality",
							"AdQualityMeasurementUtils.adquality",
							"AdQualityRules.adquality",
							"ANVideoStateUtils",
							"HTMLElementFrameContext.adquality",
							"invariant"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							__p && __p();
							a = (function() {
								"use strict";
								__p && __p();
								function a(a, b) {
									(this.$9 = 0),
										(this.$1 = a),
										(this.$2 = b),
										(this.$5 = j.initState()),
										(this.$6 = 0),
										(this.$7 = !1),
										(this.$8 = null);
								}
								var b = a.prototype;
								b.checkAndSendVideoTimeEvent = function(a) {
									this.$10(a);
								};
								b.getAdQualityManager = function() {
									__p && __p();
									var a = this;
									if (this.$4) return this.$4;
									var b = this.$1.getGatingConfig(),
										c = this.$1.getViewabilityMeasurementElement();
									this.$4 = new g({
										element: c,
										parentWindow: window,
										rules: [
											i.mrc(function() {
												var b = new k(
													a.$1.getViewabilityMeasurementElement(),
													window
												);
												a.$2.logMRCEvent(
													a.getAdQualityManager().getStatistics(),
													a.$11().getCurrentTime() - 2,
													a.$11().getCurrentTime(),
													b,
													a.$1.getAdWidth(),
													a.$1.getAdHeight()
												);
											}),
											i.viewableImpression(function(b) {
												a.$2.logViewableImpressionEvent(
													b.statistics,
													Math.max(
														0,
														a.$11().getCurrentTime() -
															b.statistics.viewableSeconds
													),
													a.$11().getCurrentTime()
												);
												var c = new k(
													a.$1.getViewabilityMeasurementElement(),
													window
												);
												a.$2.logImpressionEvent(
													c,
													b.statistics.curViewableRatio,
													b.measurementResult.getViewabilityDetection(),
													b.measurementResult.getReason()
												);
											}),
											i.videoTimeEvent(
												function(b) {
													var c = b.lastLoggingTime,
														d = b.currentLoggingTime,
														e = b.statistics,
														f = new k(
															a.$1.getViewabilityMeasurementElement(),
															window
														),
														g = function() {
															b.adQualityTestFinalCallback &&
																b.adQualityTestFinalCallback();
														};
													a.$2.logTimeEvent(
														c,
														d,
														f,
														e,
														a.$1.getAdWidth(),
														a.$1.getAdHeight(),
														g
													);
												},
												function() {
													--a.$9 === 0 && a.$8 && a.$8();
												}
											)
										],
										gatingConfig: b,
										measurementTests: h.getDefaultMeasurements(
											c,
											window,
											ES(
												b.killswitches,
												"includes",
												!0,
												"remove_edge_browser_from_raf_detection"
											)
										)
									});
									return this.$4;
								};
								b.getLogger = function() {
									return this.$2;
								};
								b.$11 = function() {
									this.$3 || l(0, 2333);
									return this.$3;
								};
								b.startListening = function(a) {
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
								b.$12 = function() {
									this.$9 === 0 && this.$8 && this.$8();
								};
								b.$14 = function() {
									var a = this.$11().getVolume(),
										b = this.$11().isMuted();
									return j.isAudible(a, b);
								};
								b.$13 = function() {
									!this.$14() && this.$5.isAudible
										? (this.$2.logMuteEvent(), (this.$5.isAudible = !1))
										: this.$14() &&
										  !this.$5.isAudible &&
										  (this.$2.logUnMuteEvent(), (this.$5.isAudible = !0));
								};
								b.readCurrentState = function() {
									var a = this.$11().getCurrentTime(),
										b = ES("Date", "now", !1),
										c = this.$11().isPaused();
									return {
										clockTimeMs: b,
										videoTime: a,
										isPaused: c,
										isAudible: this.$14(),
										isFullScreen: this.$11().isFullscreen(),
										isContinuous:
											this.$11().enforcesContinuity() ||
											j.isContinuous(
												this.$5,
												c,
												b,
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
								b.$10 = function(a) {
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
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a) {
									__p && __p();
									var b = this;
									this.$2 = function() {
										__p && __p();
										if (b.$1.getNestLevel() === 0) return h.NONE;
										for (
											var a = b.$1.ancestorIframes,
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
												e = i.extractDomain(e.src);
												if (e === b.$1.pageDomain) return h.NONE;
											}
										}
										return null;
									};
									this.$4 = function() {
										var a = b.$1.ancestorURLs;
										if (a.length > 0 && b.$1.getSafeFrameAPI()) {
											a = i.extractDomain(a[0]);
											if (window.googletag && a === "tpc.googlesyndication.com")
												return h.GOOGLE_SAFE_FRAME;
											else return h.UNKNOWN_SAFE_FRAME;
										}
										return null;
									};
									this.$5 = function() {
										var a = b.$1.ancestorIframes;
										return a.length > 0 &&
											ES(a[0].id, "indexOf", !0, "google_ads_iframe_") === 0
											? h.GOOGLE_FRIENDLY_IFRAME
											: null;
									};
									this.$8 = function() {
										var a = b.$1.ancestorIframes;
										return a.length > 0 &&
											(ES(a[0].classList, "contains", !0, "str-fan-iframe") ||
												j(a[0].parentElement).id === "str-fan-placeholder")
											? h.SHARETHROUGH
											: null;
									};
									this.$9 = function() {
										var a = b.$1.ancestorIframes;
										return a.length > 0 &&
											ES(a[0].classList, "contains", !0, "fiSafeFrame") &&
											window.parent.fiQuery
											? h.FIRSTIMPRESSION_IO
											: null;
									};
									this.$1 = a;
								}
								var b = a.prototype;
								b.getMediator = function() {
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
									for (var b = 0; b < a.length; b++) {
										var c = a[b];
										try {
											c = c();
											if (c) return c;
										} catch (a) {}
									}
									return h.UNKNOWN;
								};
								b.$6 = function() {
									return window.sas &&
										document.querySelector(
											'script[src*="www.smartadserver.com/"]'
										)
										? window.sas_ajax
											? h.SMART_ADSERVER_ASYNC
											: h.SMART_ADSERVER_SYNC
										: null;
								};
								b.$7 = function() {
									if (window.ADNXSMediation && window.ADNXSMediation.adFilled)
										if (window.ADNXSAsync || window.ADNXSMediation.isAsync())
											return h.APPNEXUS_ASYNC;
										else return h.APPNEXUS;
									return null;
								};
								b.$3 = function() {
									return g.isAMP() ? h.AMP : null;
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = ES("Object", "freeze", !1, {
								invalid: -1,
								"off-screen": 0,
								"partially-on-screen": 1,
								"mostly-on-screen": 2,
								"completely-on-screen": 3
							});
							function i(a) {
								return h[a];
							}
							function j(a, b, c) {
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
							function k(a, b, c) {
								for (var d = b + 1; d <= c; d++) j(a, d, !0);
								for (var d = b - 1; d >= c; d--) j(a, d, !1);
							}
							a = (function() {
								__p && __p();
								function a(a) {
									a === void 0 && (a = g.MOBILE_FEED),
										(this.$3 = a),
										(this.$1 = "off-screen"),
										(this.$2 = []);
								}
								var b = a.prototype;
								b.updateView = function(a, b) {
									a = this.$3.getState(a, b);
									this.$4(a);
								};
								b.$4 = function(a) {
									__p && __p();
									if (a === this.$1) return;
									var b = i(this.$1),
										c = i(a);
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
										k(g, b, c);
									}
									this.$1 = a;
								};
								b.addBehavior = function(a) {
									this.$2.push(a), k(a, i("off-screen"), i(this.$1));
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
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							a = (function(a) {
								__p && __p();
								babelHelpers.inheritsLoose(b, a);
								function b(b, c, d) {
									var e;
									e = a.call(this) || this;
									e.$PlayVideoWhenOnScreenBehavior1 = b;
									e.$PlayVideoWhenOnScreenBehavior2 = c;
									e.$PlayVideoWhenOnScreenBehavior3 = d;
									e.$PlayVideoWhenOnScreenBehavior4 = !1;
									return e;
								}
								var c = b.prototype;
								c.onCompletelyEntered = function() {
									var a = this;
									!this.$PlayVideoWhenOnScreenBehavior4 &&
										this.$PlayVideoWhenOnScreenBehavior2 &&
										!this.$PlayVideoWhenOnScreenBehavior1.wasManuallyPaused() &&
										((this.$PlayVideoWhenOnScreenBehavior4 = !0),
										h(
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
								c.onMostlyLeft = function() {
									this.$PlayVideoWhenOnScreenBehavior1.pause();
								};
								c.onCompletelyLeft = function() {
									this.$PlayVideoWhenOnScreenBehavior1.pause();
								};
								c.onMostlyEntered = function() {
									this.$PlayVideoWhenOnScreenBehavior1.hasPlayed() &&
										!this.$PlayVideoWhenOnScreenBehavior1.wasManuallyPaused() &&
										this.$PlayVideoWhenOnScreenBehavior1.play();
								};
								return b;
							})(g);
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
							"cx",
							"getTime",
							"nullthrows"
						],
						function(
							a,
							b,
							c,
							d,
							e,
							f,
							g,
							h,
							i,
							j,
							k,
							l,
							m,
							n,
							o,
							p,
							q,
							r,
							s,
							t,
							u,
							v,
							w,
							x,
							y,
							z,
							A,
							B,
							C,
							D,
							E,
							F,
							G,
							H,
							I,
							J,
							K,
							L,
							M,
							N,
							O,
							P,
							Q
						) {
							"use strict";
							__p && __p();
							var R = {
									"300x250": [300, 250],
									"320x50": [320, 50],
									"300x600": [300, 600],
									"970x250": [970, 250],
									"728x90": [728, 90],
									fullwidth: [300, 250],
									rewarded_video: ["100%", "100%"]
								},
								S = [
									"fbAdBody",
									"fbAdCallToAction",
									"fbAdIcon",
									"fbAdMedia",
									"fbAdSubtitle",
									"fbAdTitle",
									"fbTwoStepDialog",
									"UNKNOWN"
								];
							function T(a) {
								return {
									controls: a.controls === "full" ? "full" : "mute_only",
									endCard: a.endCard || "none",
									pauseCard: a.pauseCard || "play_button"
								};
							}
							a = (function() {
								__p && __p();
								function a(a, b) {
									__p && __p();
									var c = this;
									this.$77 = function() {
										var a = Q(c.$26);
										c.$21.eventWithParams({
											event_name: "VIDEO_CLICK",
											video_playback_time: a.getCurrentTime(),
											video_duration: a.getDuration()
										});
									};
									this.$25 = new n(
										b,
										a.onMediaLoaded,
										a.onRewardCompleted,
										a.onAdClosed
									);
									this.$19 = !1;
									this.$4 = a;
									this.$20 = new p();
									this.$11 = !1;
									this.$12 = !1;
									this.$23 = !1;
									this.$3 = !1;
									this.$20.addListener(function() {
										return c.$25.mediaLoaded();
									});
									this.$8 = a.displayFormat || a.format || "300x250";
									this.tagJsIframeAppendedTime = a.tagJsIframeAppendedTime;
									this.$21 = new s(
										I.ERROR,
										a.tagJsInitTime,
										y.getNavigationStart(),
										y.onlyString(a.data.key),
										a.iframe,
										a.domain
									);
									this.$9 = b;
									this.$10 = new G(this.$9, this.$28());
									this.$2 = null;
									this.$18 = new K();
									this.$22 = new r(this.$9);
									this.$28().addEventListener("beforeunload", function() {
										c.$21.event("ADNW_PAGE_UNLOADED");
									});
								}
								var b = a.prototype;
								b.sendToFacebook = function(a) {
									y.sendToFacebook(this.$4.iframe, this.$4.domain, a);
								};
								b.$28 = function() {
									return this.$9.ownerDocument.defaultView;
								};
								b.$29 = function() {
									return this.$28().frameElement;
								};
								b.$30 = function(a) {
									a = a.ownerDocument;
									var b = a.createElement("style");
									b.innerText = H.rules;
									a.body && a.body.appendChild(b);
								};
								b.$31 = function() {
									return Q(this.$24);
								};
								b.$32 = function() {
									if (!this.$31().$33) return !1;
									var a = this.$34();
									return (
										(a.clientWidth >= 300 && a.clientHeight >= 250) ||
										this.$35()
									);
								};
								b.$36 = function(a) {
									__p && __p();
									var b = this,
										c = this.$34();
									if (!this.$32()) {
										var d = new l(c, a);
										d.render();
										return;
									}
									d = this.$27 ? this.$27.getXoutButton() : null;
									var e = u.INLINE_CONDENSED;
									c = new D({
										parentEl: c,
										adIcon: a.adIcon,
										adChoicesLink: a.adChoicesHref,
										content: this.$31().$37,
										buttonEl: d,
										allowOptionStepClose: this.$31().$38.allowOptionStepClose,
										onXOutStart: function() {
											b.$21.event(v.START, e);
										},
										onXOutCancel: function() {
											b.$21.event(v.CANCEL, e);
										},
										onXOutOption: function(a) {
											b.sendToFacebook({
												name: "xout",
												params: {
													key: y.onlyString(b.$4.data.key),
													reason: a,
													type: e
												}
											}),
												b.$21.event(v.SELECT_OPTION, a);
										},
										onXOutFinish: function() {
											b.$25.adClosed(), b.$21.event(v.FINISH);
										}
									});
									c.render();
									return;
								};
								b.renderAd = function(a, b, c, d) {
									__p && __p();
									var e = this;
									d = a.features || {};
									this.$24 = {
										$39: !!d.clickOpenNewTab,
										$40: !!d.enableWhiteops,
										$41: d.appIDHashed,
										$38: d,
										$33: d.inlineXOut,
										$42: d.isDesktopDisplayFormat,
										$43: !!d.useIntersectionObserver,
										$44: !!d.useCtaFallback,
										$37: a.xout,
										$45: d.clickGuardElements || S,
										$46: T(d.video || {}),
										$47: d.fullwidthMinAspectRatio || 1.5,
										$48: d.autoplayEnabled === !0,
										$49: d.separateVideoViewability === !0,
										$50: d.pubSideLogging === !0
									};
									this.$21.setLogLevel(this.$31().$38.logLevel || I.ERROR);
									this.$21.frameReady();
									this.$21.setUnifiedLoggingURL(a.unifiedLoggingURL);
									this.$1 = P();
									this.$31().$38.rp && this.$25.enableReward();
									var f = 0,
										g = !!a.creativeMarkupBackup;
									!a.nativeAd
										? (this.$9.style.display = "")
										: (a.creativeMarkup &&
												(this.$51() ? this.$52() : this.$53(),
												this.$31().$38.resizeMediaView &&
													((this.$9.style.visibility = "hidden"),
													(f = this.$54()))),
										  this.$55(
												a,
												a.creativeMarkup,
												this.$9,
												b,
												!!this.$31().$38.resizeMediaView
										  ));
									this.$34().classList.add("fbAdLoaded");
									c(a.placementId);
									this.$31().$38.resizeMediaView
										? window.setTimeout(function() {
												__p && __p();
												var c = new q(g, e.$29(), e.$9, e.$7, e.$13, e.$21, f),
													d = e.$34();
												d.style.width = y.cssSize(e.$13);
												e.$5 && e.$5.ensureSizes();
												d = c.resize(e.$13, d.offsetHeight);
												d && ((e.$11 = !0), (e.$12 = !!a.nativeCarouselAds));
												e.$36(a.nativeAd);
												if (g) {
													var h = function() {
														(a.nativeCarouselAds = null),
															c.restoreOriginalStyles(),
															e.$56(
																a,
																a.creativeMarkupBackup,
																b,
																!!e.$31().$38.resizeMediaView
															),
															(e.$11 = !1),
															(e.$12 = !1),
															e.$36(a.nativeAd),
															(e.$9.style.visibility = "visible");
													};
													if (!d) h();
													else {
														d = function a() {
															y.screenIsPortrait() ||
																(window.removeEventListener(
																	"orientationchange",
																	a
																),
																h());
														};
														window.addEventListener("orientationchange", d);
													}
												}
										  }, 0)
										: this.$36(a.nativeAd);
									this.$31().$44 === !0 &&
										(this.$17 = this.$57(a.nativeAd, this.$9, b));
									this.$58(!!a.nativeAd.adVideo);
									this.$21.eventWithParams(this.$59("ADNW_ADLOADED"));
									y.autofitTextWhereNeeded(this.$34());
									this.$60();
								};
								b.$59 = function(a) {
									var b = this.$16;
									if (!b) return { event_name: a, viewability: j.UNKNOWN };
									b = this.$16.getCurrentViewabilityState();
									return {
										event_name: a,
										viewability: b.viewabilityLevels.join(","),
										width_in_view: b.widthInView || 0,
										height_in_view: b.heightInView || 0,
										left: b.pageLeft || 0,
										top: b.pageTop || 0,
										scroll_left: b.scrollLeft || 0,
										scroll_top: b.scrollTop || 0,
										page_width: b.pageWidth || 0,
										page_height: b.pageHeight || 0
									};
								};
								b.$60 = function() {
									var a = this.$31().$38.forceIframeSize;
									if (a) {
										var b = this.$29();
										b &&
											((b.style.width = y.cssSize(a.w)),
											(b.style.height = y.cssSize(a.h)));
									}
								};
								b.$54 = function() {
									var a = 300,
										b = y.getScreenWidth(),
										c = this.$29() || this.$9;
									c = y.findWidestParentElement(c);
									var d = y.calculateLargestMargin(c);
									this.$13 = b - d * 2;
									this.$13 < a &&
										((this.$13 = a), (d = c.getBoundingClientRect().right - a));
									return d;
								};
								b.$52 = function() {
									__p && __p();
									var a = R[this.$8],
										b = a[0];
									a = a[1];
									var c = document.createElement("iframe");
									c.classList.add("fbAdWrapper");
									c.style.border = "0";
									c.style.width = y.cssSize(b);
									c.style.height = y.cssSize(a);
									this.$9.appendChild(c);
									c.contentDocument.open();
									c.contentDocument.close();
									b = Q(c.contentDocument.body);
									b.style.overflow = "hidden";
									b.style.margin = "0";
									b.style.padding = "0";
									b.style.maxWidth = y.getScreenWidth() + "px";
									this.$6 = b;
									this.$7 = c;
								};
								b.$53 = function() {
									__p && __p();
									var a = document.createElement("div");
									a.style.textAlign = "center";
									a.style.position = "relative";
									this.$9.appendChild(a);
									this.$7 = a;
									var b = document.createElement("div");
									b.style.maxWidth = y.cssSize(y.getScreenWidth());
									b.style.width = "100%";
									b.style.position = "relative";
									b.style.display = "inline-block";
									a.appendChild(b);
									this.$6 = b;
								};
								b.$34 = function() {
									var a = this.$51() ? this.$6 || this.$9 : this.$9;
									return (
										a.getElementsByClassName("fbANRoot")[0] ||
										a.getElementsByClassName("thirdPartyRoot")[0] ||
										a
									);
								};
								b.$61 = function(a) {
									return a && a.video ? T(a.video) : this.$31().$46;
								};
								b.$55 = function(a, b, c, d, e) {
									(a.nativeAd.loaded = !1),
										b && b.raw && ((this.$6.innerHTML = b.raw), (c = this.$6)),
										c && ((c = this.$34()), this.$30(c)),
										this.$31().$44 !== !0 &&
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
								b.$63 = function(a, b) {
									a = this.$64(a);
									y.resizeElement(b, this.$13, Math.round(this.$13 / a));
								};
								b.$65 = function() {
									this.$21.eventWithParams(
										this.$59("ADNW_MOSTLY_VIEWABLE_FOR_1S")
									);
								};
								b.$66 = function() {
									if (this.$2) {
										this.$21.error("Multiple ADIMPRESSION attempted.");
										return;
									}
									this.$2 = P();
									var a = this.$67();
									this.sendToFacebook({
										name: "impress",
										params: { key: y.onlyString(this.$4.data.key), payload: a }
									});
									this.$21.eventWithParams(this.$59("ADNW_ADIMPRESSION"));
									this.$32() && this.$21.event(v.HAS_INLINE_XOUT);
								};
								b.$68 = function() {
									var a = this.$10.getSafeFrameAPI();
									if (this.$10.isCrossDomain() && !a)
										return k.isAMP() ? "AMP" : "CROSS_DOMAIN_IFRAME";
									var b = this.$10.getNestLevel();
									if (b === 0) return "NO_IFRAME";
									return b > 1
										? a
											? "NESTED_SAFE_FRAME"
											: "NESTED_FRIENDLY_IFRAME"
										: a
											? "SAFE_FRAME"
											: "FRIENDLY_IFRAME";
								};
								b.$57 = function(a, b, c) {
									__p && __p();
									if (this.$31().$44 !== !0) return a && b ? b : c;
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
								b.$58 = function(a) {
									__p && __p();
									var b = this;
									this.$16 = new i(this.$17, this.$31().$43);
									this.$16.attachBehaviorManager(this.$18);
									var c = new g(
										function() {
											(a && b.$69()) || b.$70();
										},
										function() {
											return b.$21.event("ADNW_PARTIAL_ADIMPRESSION");
										}
									);
									this.$19 || c.mediaLoaded();
									this.$18.addBehavior(c);
									this.$20.addListener(function() {
										return c.mediaLoaded();
									});
									if (this.$31().$38.useMostlyViewableImp) {
										var d = new h(function() {
											return b.$65();
										});
										this.$19 || d.mediaLoaded();
										this.$18.addBehavior(d);
										this.$20.addListener(function() {
											return d.mediaLoaded();
										});
									}
								};
								b.$64 = function(a) {
									if (a.adImageAspectRatio != null && a.adImageAspectRatio > 0)
										return Math.max(a.adImageAspectRatio, this.$31().$47);
									else if (a.adVideo) return 1.75;
									else return 1.9;
								};
								b.$71 = function(a, b, c, d, e) {
									d
										? this.$72(b, d)
										: c.adVideo
											? this.$73(b, c, e)
											: this.$74(b, c);
								};
								b.$72 = function(a, b) {
									__p && __p();
									var c = this;
									this.$19 = !0;
									var d = new o({
										parent: a,
										ads: b,
										onCriticalAnimationStart: function() {
											c.$16.pause();
										},
										onCriticalAnimationEnd: function() {
											c.$16.resume();
										},
										onEvent: function(a, b) {
											switch (a) {
												case "AN_CAROUSEL_EVENT_SWIPE":
													c.$21.eventWithParams({
														event_name: "CAROUSEL_SWIPE",
														index: b.index,
														direction: b.direction
													});
											}
										},
										onLoadEventCounter: this.$20,
										adFeatures: this.$31().$38
									});
									a.appendChild(d.getElement());
									d.ensureSizes();
									ES(d.getLinks(), "forEach", !0, function(a, d) {
										c.$75(a, b[d]);
									});
									this.$5 = d;
								};
								b.$74 = function(a, b) {
									b = this.$76(b);
									a.firstChild
										? a.insertBefore(b, a.firstChild)
										: a.appendChild(b);
								};
								b.$73 = function(a, b, c) {
									__p && __p();
									var d = this;
									if (!b.adVideo) throw new Error("No video for Ad.");
									var e = this.$31().$48;
									this.$21.event(
										e ? "VIDEO_AUTOPLAY_ENABLED" : "VIDEO_AUTOPLAY_DISABLED"
									);
									this.$19 = !0;
									this.$20.addRequiredEvent();
									b = new C(
										Q(b.adVideo),
										b.adImage,
										e,
										c,
										function() {
											d.$20.requiredEventFired();
										},
										this.$77
									);
									c = this.$35() && this.$25.isRewardEnabled();
									if (c) {
										var f = Q(this.$6);
										this.$27 = new w(this.$25, f, b, this.$31().$33);
										this.$27.makeRewarded();
										f.style.maxWidth = "";
										this.$7 &&
											((this.$7.style.maxWidth = "100vw"),
											(this.$7.style.maxHeight = "100vh"));
									}
									if (this.$69()) {
										f = new E(b.getVideoElement(), !0);
										var g =
											this.$31().$38.logVideoEvents !== !0 &&
											this.$31().$38.videoMrcImpression === !0;
										g = new A(
											g,
											f,
											y.onlyString(this.$4.data.key),
											function(a) {
												return d.sendToFacebook(a);
											},
											function() {
												return d.$70();
											}
										);
										g = new F(new B(f), g);
										g.startListening(f);
									}
									a.appendChild(b.getElement());
									this.$26 = b;
									this.$25.setVideo(b);
									if (!c) {
										g = this.$18;
										if (this.$31().$49) {
											f = b.getVideoElement();
											a = new i(f, this.$31().$43);
											g = new K();
											a.attachBehaviorManager(g);
										}
										g.addBehavior(new L(b, e, this.$21));
									}
								};
								b.$78 = function(a) {
									this.$21.logClick(a, Q(this.$1));
									var b = a.href;
									a.clickParams.clknutab !== !0 || y.isAppStoreURL(b)
										? this.$22.open(b)
										: this.$22.openNewTab(b);
								};
								b.$75 = function(a, b) {
									__p && __p();
									var c = this,
										d = function(a, d) {
											__p && __p();
											var e = P(),
												f = b.href,
												g = y.maybeHTMLElement(d.target);
											g = g ? c.$79(g) : t.UNKNOWN;
											var h = {};
											if (c.$16) {
												var i = c.$16.getDimensions(),
													j = c.$16.getCurrentViewabilityState();
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
												if (c.$10.getSafeFrameAPI())
													(h.relClickX = d.clientX), (h.relClickY = d.clientY);
												else {
													h.clickX = d.clientX;
													h.clickY = d.clientY;
													if (j.viewportLeft != null && j.viewportTop != null)
														(h.relClickX = d.clientX - j.viewportLeft),
															(h.relClickY = d.clientY - j.viewportTop);
													else {
														i = c.$34().getBoundingClientRect();
														h.relClickX = d.clientX - i.left;
														h.relClickY = d.clientY - i.top;
													}
												}
											}
											j = {
												clktm: Math.round(e / 1e3),
												clknutab: c.$31().$39,
												touch: ES("JSON", "stringify", !1, h)
											};
											c.$2 && (j.clkdel = e - c.$2);
											h.height &&
												h.width &&
												h.visibleWidth &&
												h.visibleHeight &&
												(j.vp =
													(h.visibleWidth * h.visibleHeight) /
													(h.height * h.width));
											d = y.isAppStoreURL(f);
											i = !d && a === x.BILLABLE_CLICK && c.$31().$38.useShim;
											e =
												c.$31().$50 &&
												c.$21.isPublisherSideLoggingSupported() &&
												a === x.BILLABLE_CLICK;
											e &&
												f === "" &&
												(c.$21.error("pub_logging_no_href"), (e = !1));
											g = {
												key: y.onlyString(c.$4.data.key),
												href: f,
												clickParams: j,
												adElementType: g,
												action: a,
												videoDuration: c.$26 == null ? 0 : c.$26.getDuration(),
												videoPlaybackTime:
													c.$26 == null ? 0 : c.$26.getCurrentTime(),
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
											};
											if (e) c.$78(g);
											else if (i) {
												c.sendToFacebook({ name: "click", params: g });
												e = M.appendToUrl(f, {
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
												c.$22.openNewTab(e);
											} else
												c.sendToFacebook({ name: "click", params: g }),
													c.$31().$39 &&
														f &&
														!d &&
														a === x.BILLABLE_CLICK &&
														c.$22.openNewTab(f);
											if (c.$31().$38.useShim || c.$31().$39 || d) {
												i = new m(window.document);
												var k = P();
												i.onBounceBack(function(a) {
													c.sendToFacebook({
														name: "bounce",
														params: {
															key: y.onlyString(c.$4.data.key),
															leaveTime: k,
															backTime: P()
														}
													}),
														c.$21.event("ADNW_BOUNCEBACK", "" + a);
												});
											}
										},
										e = function() {
											z.openDialog(c.$34(), b.adSubtitle, b.adIcon)
												.onConfirm(function(a) {
													(c.$23 = !0), d(x.BILLABLE_CLICK, a);
												})
												.onDismiss(function(a) {
													(c.$23 = !1), d(x.TWO_STEP_CANCEL, a);
												});
										},
										f = function(a) {
											var b = P(),
												f = y.maybeHTMLElement(a.target);
											f = f ? c.$79(f) : t.UNKNOWN;
											var g = c.$31().$38.minClickDelay;
											g && c.$1 && c.$1 + g > b && !c.$3
												? ((c.$3 = !0),
												  d(x.CLICK_GUARD, a),
												  c.$11 &&
														c.$31().$38.useTwoStepOnFastClicks === !0 &&
														e())
												: ES(c.$31().$45, "includes", !0, f) &&
												  c.$11 &&
												  !c.$12 &&
												  c.$31().$38.useTwoStepClick === !0 &&
												  !c.$23
													? (d(x.TWO_STEP_DIALOG, a), e())
													: d(x.BILLABLE_CLICK, a);
											a.preventDefault();
											a.stopPropagation();
										};
									if (!this.$6) {
										a.addEventListener("click", f);
										return;
									}
									var g = this.$6.querySelector(".adnwTwoClickBlocker");
									if (g && !!this.$31().$38.clickConfirmation) {
										var h = Q(g.querySelector(".adnwCancelLink"));
										h.addEventListener("click", function(a) {
											g.style.display = "none";
										});
										h = Q(g.querySelector(".adnwContinueLink"));
										h.addEventListener("click", function(a) {
											(g.style.display = "none"), f(a);
										});
										a.addEventListener("click", function(a) {
											g.style.display = "block";
										});
									} else a.addEventListener("click", f);
								};
								b.applyAdTypeClass = function(a, b, c) {
									c
										? (a.className += " fbCarouselType")
										: b.adVideo
											? (a.className += " fbVideoType")
											: (a.className += " fbDisplayType");
								};
								b.$56 = function(a, b, c, d) {
									__p && __p();
									this.$16.pause();
									a.nativeAd.loaded = !1;
									this.$6.innerHTML = b.raw;
									if (this.$6 == null) return;
									this.$30(this.$34());
									if (this.$6 == null) return;
									this.$80(
										this.$6,
										a.nativeAd,
										a.nativeCarouselAds,
										d,
										b && b.dfp,
										this.$61(b)
									);
									this.$6 &&
										((this.$16 = new i(this.$6)),
										this.$16.attachBehaviorManager(this.$18));
								};
								b.$80 = function(a, b, c, d, e, f) {
									b.loaded = !0;
									this.$14 = a.getElementsByClassName(t.FB_AD_MEDIA);
									for (d = 0; d < this.$14.length; d++)
										this.$71(a, this.$14[d], b, c, f);
									this.$81(a, b, "", e);
									c = a.getElementsByClassName(t.FB_AD_ICON);
									for (d = 0; d < c.length; d++) c[d].appendChild(this.$82(b));
								};
								b.$83 = function(a) {
									a = Q(a.ownerDocument.body);
									a.addEventListener("touchstart", function() {}, !1);
								};
								b.$62 = function(a, b, c, d, e, f, g) {
									if (!a || !c || c.loaded) return !1;
									this.applyAdTypeClass(a, c, d);
									this.$83(a);
									c.loaded = !0;
									var h = !1;
									d = this.$84(a, c, d, "", e, f, g);
									this.$31().$40 === !0 &&
										N.run(b, "AN_MWEB", c.topDomain, this.$31().$41, a);
									return h || d;
								};
								b.$84 = function(a, b, c, d, e, f, g) {
									var h,
										i = !1;
									this.$14 = a.getElementsByClassName(t.FB_AD_MEDIA + d);
									for (h = 0; h < this.$14.length; h++)
										(i = !0),
											e && !c && this.$63(b, this.$14[h]),
											this.$71(a, this.$14[h], b, c, g);
									this.$81(a, b, d, f);
									c = a.getElementsByClassName(t.FB_AD_ICON + d);
									for (h = 0; h < c.length; h++) c[h].appendChild(this.$82(b));
									return i;
								};
								b.$81 = function(a, b, c, d) {
									__p && __p();
									var e;
									d = a.getElementsByClassName(t.FB_AD_TITLE + c);
									for (e = 0; e < d.length; e++) d[e].textContent = b.adTitle;
									d = a.getElementsByClassName(t.FB_AD_SUBTITLE + c);
									for (e = 0; e < d.length; e++)
										d[e].textContent = b.adSubtitle;
									d = a.getElementsByClassName(t.FB_AD_BODY + c);
									for (e = 0; e < d.length; e++) d[e].textContent = b.adBody;
									d = a.getElementsByClassName(t.FB_AD_CALL_TO_ACTION + c);
									for (e = 0; e < d.length; e++)
										d[e].textContent = b.adCallToAction;
									d = a.getElementsByClassName("fbAdSocialContext" + c);
									for (e = 0; e < d.length; e++)
										d[e].textContent = b.adSocialContext;
									d = a.getElementsByClassName("fbAdLink" + c);
									for (e = 0; e < d.length; e++) this.$75(d[e], b);
								};
								b.$82 = function(a) {
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
								b.$76 = function(a) {
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
								b.$85 = function() {
									return this.$8 === "native";
								};
								b.$35 = function() {
									return this.$8 === "rewarded_video";
								};
								b.$51 = function() {
									return !this.$29() && !this.$85() && R[this.$8];
								};
								b.$70 = function() {
									this.$34().classList.add("fbVisibleOnce"), this.$66();
								};
								b.$67 = function() {
									var a = this.$16.getDimensions(),
										b =
											(this.$16 && this.$16.getCurrentViewabilityState()) ||
											null;
									return {
										width: a ? a.width : null,
										height: a ? a.height : null,
										width_in_view: (b && b.widthInView) || null,
										height_in_view: (b && b.heightInView) || null,
										top: (b && b.pageTop) || null,
										left: (b && b.pageLeft) || null,
										scroll_top: (b && b.scrollTop) || null,
										scroll_left: (b && b.scrollLeft) || null,
										page_width: (b && b.pageWidth) || null,
										page_height: (b && b.pageHeight) || null,
										hosturl: this.$10.getTopURL(),
										iframe_status: this.$68(),
										nest_level: this.$10.getNestLevel(),
										iframe_urls: this.$10.ancestorURLs.slice(0, -1),
										mediation_service: new J(this.$10).getMediator(),
										nmv: this.$15
									};
								};
								b.$79 = function(a) {
									__p && __p();
									var b;
									b = ((b = {
										fbAdCallToAction: "fbAdCallToAction",
										fbAdTitle: "fbAdTitle",
										fbAdBody: "fbAdBody",
										fbAdSubtitle: "fbAdSubtitle",
										fbAdIcon: "fbAdIcon",
										fbAdMediaCenter: "fbAdMediaCenter",
										fbAdMedia: "fbAdMedia"
									}),
									(b._74vg = "fbTwoStepDialog"),
									b);
									var c = this.$34();
									for (var d in b) {
										var e = c.getElementsByClassName(d);
										for (
											var e = e,
												f = ES("Array", "isArray", !1, e),
												g = 0,
												e = f
													? e
													: e[
															typeof Symbol === "function"
																? Symbol.iterator
																: "@@iterator"
													  ]();
											;

										) {
											var h;
											if (f) {
												if (g >= e.length) break;
												h = e[g++];
											} else {
												g = e.next();
												if (g.done) break;
												h = g.value;
											}
											h = h;
											if (a === h || ES(h, "contains", !0, a)) return b[d];
										}
									}
									return t.UNKNOWN;
								};
								b.$69 = function() {
									return (
										this.$31().$38.videoMrcImpression === !0 ||
										this.$31().$38.logVideoEvents === !0
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
						function(a, b, c, d, e, f, g, h, i, j, k) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a, b, c, d, e, f, g) {
									(this.$1 = a),
										(this.$2 = b),
										(this.$3 = c),
										(this.$4 = d),
										(this.$5 = f),
										(this.$6 = g),
										(this.$7 = e),
										(this.$8 = []),
										(this.$9 = new i(c));
								}
								a.render = function(b, c, d, e, f, g, h) {
									b = new a(b, c, d, e, f, g, h);
									b.$10();
									return b;
								};
								var b = a.prototype;
								b.$11 = function(a, b) {
									var c = this,
										d = b.querySelector(".fbArticleImage"),
										e = new k();
									b = new h(b);
									b.attachBehaviorManager(e);
									var f = new g(
										function() {
											c.$5(a);
										},
										function() {}
									);
									d &&
										(d.complete && f.mediaLoaded(),
										d.addEventListener("load", function() {
											f.mediaLoaded();
										}));
									e.addBehavior(f);
								};
								b.$12 = function(a, b, c) {
									var d = this;
									this.$11(a, c);
									c.addEventListener("click", function() {
										d.$6(a), d.$9.open(b.link);
									});
								};
								b.$13 = function(a, b) {
									b.innerHTML = this.$4;
									var c = b.querySelector(".fbArticleImage"),
										d = b.querySelector(".fbArticleTitle"),
										e = b.querySelector(".fbArticleSubtitle"),
										f = b.querySelector(".fbArticleSource");
									c && (c.src = a.image);
									d && (d.textContent = a.title);
									e && (e.textContent = a.summary);
									f && (f.textContent = a.source);
									j.autofitTextWhereNeeded(b);
								};
								b.$10 = function() {
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
										} else if (
											ES(e.classList, "contains", !0, "fbSlotArticle")
										) {
											f = this.$1[c++];
											this.$8.push(f);
											this.$13(f, e);
											this.$12(d, f, e);
										}
									}
									j.autofitIfInDfpIframe(this.$3);
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
						function(a, b, c, d, e, f, g, h, i, j, k) {
							"use strict";
							__p && __p();
							a = (function() {
								__p && __p();
								function a(a) {
									var b = this;
									this.$1 = !1;
									this.$2 = a;
									this.$3 = new h(
										k.ERROR,
										a.tagJsInitTime,
										j.getNavigationStart(),
										this.$4(),
										this.$2.iframe,
										this.$2.domain
									);
									window.addEventListener("pagehide", function() {
										b.$1 || b.$3.event("ADNW_UNLOAD_BEFORE_ADLOADED");
									});
								}
								var b = a.prototype;
								b.$4 = function() {
									return j.onlyString(
										this.$2.data.key ||
											(this.$2.data.keys && this.$2.data.keys[0])
									);
								};
								b.sendToFacebook = function(a) {
									j.sendToFacebook(this.$2.iframe, this.$2.domain, a);
								};
								b.renderAd = function(a, b, c, d, e) {
									var f = ES("Object", "assign", !1, {}, this.$2, { data: a });
									f = new g(f, b);
									f.renderAd(a, c, d, e);
								};
								b.$5 = function(a) {
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
								b.$6 = function() {
									return j.onlyString(this.$2.data.requestId);
								};
								b.$7 = function(a, b, c, d) {
									__p && __p();
									var e = this,
										f = this.$5(a),
										g = !!a.recommendedContent,
										h = f.length > 1,
										k = this.$2.rootElement;
									a.wrapperMarkup && (k.innerHTML = a.wrapperMarkup);
									if (g)
										i.render(
											a.recommendedContent,
											f,
											k,
											a.wrapperItemMarkup,
											function(a, f) {
												e.renderAd(a, f, b, c, d);
											},
											function(a) {
												j.sendToFacebook(e.$2.iframe, e.$2.domain, {
													name: "recirc",
													params: {
														reqId: e.$6(),
														payload: { type: "impression", index: a }
													}
												});
											},
											function(b) {
												var c = a.features || {};
												if (c.skipRecircClickEvent === !0) return;
												j.sendToFacebook(e.$2.iframe, e.$2.domain, {
													name: "recirc",
													params: {
														reqId: e.$6(),
														payload: { type: "click", index: b }
													}
												});
											}
										);
									else
										for (var g = 0; g < f.length; g++) {
											var l = f[g],
												m = k;
											h &&
												((m = document.createElement("div")),
												(m.className = "fbAdSlot-" + g),
												k.appendChild(m));
											this.renderAd(l, m, b, c, d);
										}
								};
								b.adLoaded = function(a, b, c, d) {
									__p && __p();
									if (this.$1) {
										this.$3.error("Multiple ADLOADED attempted.");
										return;
									}
									var e = a.features || {};
									this.$3.setLogLevel(e.logLevel || k.ERROR);
									this.$3.frameReady();
									if (!a.success) {
										this.$3.error();
										d(a.errorCode, a.errorMsg, a.placementId);
										return;
									}
									this.$7(a, b, c, d);
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
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							var k = window;
							function l(a, b) {
								__p && __p();
								var c = function(a) {
										k.setTimeout(function() {
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
										g = 0,
										e = f
											? e
											: e[
													typeof Symbol === "function"
														? Symbol.iterator
														: "@@iterator"
											  ]();
									;

								) {
									var h;
									if (f) {
										if (g >= e.length) break;
										h = e[g++];
									} else {
										g = e.next();
										if (g.done) break;
										h = g.value;
									}
									h = h;
									c(h);
								}
							}
							var m = function(a, b) {
								__p && __p();
								if (a.rootElement.dataset.parsed) return;
								a.rootElement.dataset.parsed = "true";
								a.domain = h.extractOrigin(a.iframe.src);
								a.data = {};
								a.core = new g(a);
								var c = function(b) {
										__p && __p();
										if (a.isAdLoaded) return;
										a.isAdLoaded = !0;
										var c = j(b.iframeData),
											d = b.data.features || {},
											e = b.data.clientEventURL || "";
										if (c.result === "valid") {
											a.data.result = c.result;
											c = !!d.useClickUrlFromAdResponse;
											var f = [],
												g = [];
											if (a.data.keys) {
												f = a.data.keys;
												var i = b.data.nativeAds;
												i &&
													(g = ES(i, "map", !0, function(a) {
														return a.href;
													}));
											} else {
												i = b.data.nativeAd;
												g.push(i && i.href);
												f.push(a.data.key);
											}
											for (var i = 0; i < f.length; i++)
												a.core.sendToFacebook({
													name: "init",
													params: {
														key: h.onlyString(f[i]),
														features: d,
														clientEventUrl: h.onlyString(e),
														clickUrl: c ? h.onlyString(g[i]) : null
													}
												});
										} else
											b.data = {
												errorCode: "1007",
												errorMsg: "Incorrect Domain",
												placementId: b.placementId
											};
										a.core.adLoaded(
											b.data,
											a.iframe,
											function() {
												a.onAdLoaded(a.rootElement);
											},
											ES(a.onAdError, "bind", !0, a)
										);
									},
									d = function(b, d) {
										__p && __p();
										if (d.source !== b.iframe.contentWindow) return;
										b = j(b.iframeData);
										switch (d.name) {
											case "iframeLoaded":
												b.result ||
													((b.result = d.data.result),
													(b.pluginPerf = d.data.pluginPerf));
												a.xhrLoaded && c(a);
												break;
											case "xhrLoaded":
												a.xhrLoaded = !0;
												d = d.data;
												for (var e in d) a.data[e] = d[e];
												(a.data.code || b.result) && c(a);
												break;
										}
									};
								a.core.sdkJSComplete = i();
								l(a.events, function(b) {
									return d(a, b);
								});
							};
							a = function() {
								var a = h.getV55TagStateContainer();
								a.sdkInitialized ||
									((a.sdkInitialized = !0),
									l(a.ads, function(b) {
										return m(b, a);
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
				'","revision":"4850155","namespace":"FB","message":"' +
				e.message +
				'"}}'
		);
}
