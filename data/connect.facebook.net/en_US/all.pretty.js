/*1536833991,,JIT Construction: v4307551,en_US*/

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
	window.FB ||
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
									a && /^[A-Z]/.test(a) ? a : undefined,
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
										: undefined
								);
							},
							d = function(a, b, c) {
								return a;
							},
							e = function(a, b, d) {
								"sourcemeta" in __transform_includes && (a.__SMmeta = b);
								if ("typechecks" in __transform_includes) {
									b = c(b ? b.name : undefined, d);
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
										h = g === undefined ? c : g >> 0,
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
												? undefined
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
										a !== undefined &&
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
									case undefined:
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
							a = {};
							var j = Object.prototype.hasOwnProperty;
							a.inherits = function(a, b) {
								i.assign(a, b);
								a.prototype = h.create(b && b.prototype);
								a.prototype.constructor = a;
								a.__superConstructor__ = b;
								return b;
							};
							a._extends = i.assign;
							a["extends"] = a._extends;
							a.objectWithoutProperties = function(a, b) {
								var c = {};
								for (var d in a) {
									if (!j.call(a, d) || b.indexOf(d) >= 0) continue;
									c[d] = a[d];
								}
								return c;
							};
							a.taggedTemplateLiteralLoose = function(a, b) {
								a.raw = b;
								return a;
							};
							a.bind = g.bind;
							e.exports = a;
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
									f;
								a ||
									(f = (function() {
										function a(a, b) {
											"use strict";
											(this.$1 = a), (this.$2 = b), (this.$3 = 0);
										}
										a.prototype.next = function() {
											"use strict";
											if (this.$1 == null) return { value: b, done: !0 };
											var a = this.$1,
												f = this.$1.length,
												g = this.$3,
												h = this.$2;
											if (g >= f) {
												this.$1 = b;
												return { value: b, done: !0 };
											}
											this.$3 = g + 1;
											if (h === c) return { value: g, done: !1 };
											else if (h === d) return { value: a[g], done: !1 };
											else if (h === e) return { value: [g, a[g]], done: !1 };
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
												return new f(a, c);
										  },
									values: a
										? function(a) {
												return a.values();
										  }
										: function(a) {
												return new f(a, d);
										  },
									entries: a
										? function(a) {
												return a.entries();
										  }
										: function(a) {
												return new f(a, e);
										  }
								};
							})(),
							g = (function() {
								var a = h(String),
									c;
								a ||
									(c = (function() {
										function a(a) {
											"use strict";
											(this.$1 = a), (this.$2 = 0);
										}
										a.prototype.next = function() {
											"use strict";
											if (this.$1 == null) return { value: b, done: !0 };
											var a = this.$2,
												c = this.$1,
												d = c.length;
											if (a >= d) {
												this.$1 = b;
												return { value: b, done: !0 };
											}
											var e = c.charCodeAt(a);
											if (e < 55296 || e > 56319 || a + 1 === d) e = c[a];
											else {
												d = c.charCodeAt(a + 1);
												d < 56320 || d > 57343
													? (e = c[a])
													: (e = c[a] + c[a + 1]);
											}
											this.$2 = a + e.length;
											return { value: e, done: !1 };
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
												return new c(a);
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
								f = this.$4,
								g = this.$2,
								h = this.$3[f];
							if (f >= a) {
								this.$1 = b;
								return { value: b, done: !0 };
							}
							this.$4 = f + 1;
							if (g === c) return { value: h, done: !1 };
							else if (g === d) return { value: this.$1[h], done: !1 };
							else if (g === e) return { value: [h, this.$1[h]], done: !1 };
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
								var i = "key",
									j = "value",
									k = "key+value",
									l = "$map_",
									m,
									n = "IE_HASH_";
								function a(a) {
									"use strict";
									if (!s(this)) throw new TypeError("Wrong map object type.");
									r(this);
									if (a != null) {
										a = g(a);
										var b;
										while (!(b = a.next()).done) {
											if (!s(b.value))
												throw new TypeError(
													"Expected iterable items to be pair objects."
												);
											this.set(b.value[0], b.value[1]);
										}
									}
								}
								a.prototype.clear = function() {
									"use strict";
									r(this);
								};
								a.prototype.has = function(a) {
									"use strict";
									a = p(this, a);
									return !!(a != null && this._mapData[a]);
								};
								a.prototype.set = function(a, b) {
									"use strict";
									var c = p(this, a);
									c != null && this._mapData[c]
										? (this._mapData[c][1] = b)
										: ((c = this._mapData.push([a, b]) - 1),
										  q(this, a, c),
										  (this.size += 1));
									return this;
								};
								a.prototype.get = function(a) {
									"use strict";
									a = p(this, a);
									if (a == null) return b;
									else return this._mapData[a][1];
								};
								a.prototype["delete"] = function(a) {
									"use strict";
									var c = p(this, a);
									if (c != null && this._mapData[c]) {
										q(this, a, b);
										this._mapData[c] = b;
										this.size -= 1;
										return !0;
									} else return !1;
								};
								a.prototype.entries = function() {
									"use strict";
									return new o(this, k);
								};
								a.prototype.keys = function() {
									"use strict";
									return new o(this, i);
								};
								a.prototype.values = function() {
									"use strict";
									return new o(this, j);
								};
								a.prototype.forEach = function(a, c) {
									"use strict";
									if (typeof a !== "function")
										throw new TypeError("Callback must be callable.");
									a = ES(a, "bind", !0, c || b);
									c = this._mapData;
									for (var d = 0; d < c.length; d++) {
										var e = c[d];
										e != null && a(e[1], e[0], this);
									}
								};
								a.prototype[
									typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
								] = function() {
									"use strict";
									return this.entries();
								};
								function o(a, b) {
									"use strict";
									if (!(s(a) && a._mapData))
										throw new TypeError("Object is not a map.");
									if (ES([i, k, j], "indexOf", !0, b) === -1)
										throw new Error("Invalid iteration kind.");
									this._map = a;
									this._nextIndex = 0;
									this._kind = b;
								}
								o.prototype.next = function() {
									"use strict";
									if (!this instanceof a)
										throw new TypeError(
											"Expected to be called on a MapIterator."
										);
									var c = this._map,
										d = this._nextIndex,
										e = this._kind;
									if (c == null) return t(b, !0);
									c = c._mapData;
									while (d < c.length) {
										var f = c[d];
										d += 1;
										this._nextIndex = d;
										if (f)
											if (e === i) return t(f[0], !1);
											else if (e === j) return t(f[1], !1);
											else if (e) return t(f, !1);
									}
									this._map = b;
									return t(b, !0);
								};
								o.prototype[
									typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
								] = function() {
									"use strict";
									return this;
								};
								function p(a, c) {
									if (s(c)) {
										var d = x(c);
										return d ? a._objectIndex[d] : b;
									} else {
										d = l + c;
										if (typeof c === "string") return a._stringIndex[d];
										else return a._otherIndex[d];
									}
								}
								function q(a, b, c) {
									var d = c == null;
									if (s(b)) {
										var e = x(b);
										e || (e = y(b));
										d ? delete a._objectIndex[e] : (a._objectIndex[e] = c);
									} else {
										e = l + b;
										typeof b === "string"
											? d
												? delete a._stringIndex[e]
												: (a._stringIndex[e] = c)
											: d
												? delete a._otherIndex[e]
												: (a._otherIndex[e] = c);
									}
								}
								function r(a) {
									(a._mapData = []),
										(a._objectIndex = {}),
										(a._stringIndex = {}),
										(a._otherIndex = {}),
										(a.size = 0);
								}
								function s(a) {
									return (
										a != null &&
										(typeof a === "object" || typeof a === "function")
									);
								}
								function t(a, b) {
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
								function u(b) {
									if (!a.__isES5 || !Object.isExtensible) return !0;
									else return Object.isExtensible(b);
								}
								function v(a) {
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
									if (b) return n + b;
									else return null;
								}
								var w = d();
								function x(b) {
									if (b[w]) return b[w];
									else if (
										!a.__isES5 &&
										b.propertyIsEnumerable &&
										b.propertyIsEnumerable[w]
									)
										return b.propertyIsEnumerable[w];
									else if (!a.__isES5 && e(b) && v(b)) return v(b);
									else if (!a.__isES5 && b[w]) return b[w];
								}
								var y = (function() {
									var b = Object.prototype.propertyIsEnumerable,
										c = 0;
									return function(d) {
										if (u(d)) {
											c += 1;
											if (a.__isES5)
												Object.defineProperty(d, w, {
													enumerable: !1,
													writable: !1,
													configurable: !1,
													value: c
												});
											else if (d.propertyIsEnumerable)
												(d.propertyIsEnumerable = function() {
													return b.apply(this, arguments);
												}),
													(d.propertyIsEnumerable[w] = c);
											else if (e(d)) d[w] = c;
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
							})(),
							i = (function() {
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
									while (!(d = c.next()).done)
										a.call(b, d.value, d.value, this);
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
						a.Set = i;
					})(typeof global === "undefined" ? this : global);
					__d("UrlMapConfig", [], {
						www: "www.facebook.com",
						m: "m.facebook.com",
						connect: "connect.facebook.net",
						business: "business.facebook.com",
						api: "api.facebook.com",
						api_read: "api-read.facebook.com",
						graph: "graph.facebook.com",
						an: "an.facebook.com",
						fbcdn: "static.xx.fbcdn.net",
						cdn: "staticxx.facebook.com"
					});
					__d("JSSDKRuntimeConfig", [], {
						locale: "en_US",
						revision: "4307551",
						rtl: false,
						sdkab: null,
						sdkns: "FB",
						sdkurl: "http://connect.facebook.net/en_US/all.js"
					});
					__d("JSSDKConfig", [], {
						bustCache: true,
						tagCountLogRate: 0.01,
						errorHandling: { rate: 4 },
						usePluginPipe: true,
						features: {
							dialog_resize_refactor: true,
							one_comment_controller: true,
							allow_non_canvas_app_events: false,
							prefer_cors_as_transport: { rate: 100 },
							should_force_single_dialog_instance: true,
							js_sdk_force_status_on_load: true,
							js_sdk_mbasic_share_plugin_init: true,
							kill_fragment: true,
							xfbml_profile_pic_server: true,
							error_handling: { rate: 4 },
							e2e_ping_tracking: { rate: 1.0e-6 },
							getloginstatus_tracking: { rate: 0.001 },
							xd_timeout: { rate: 1, value: 60000 },
							use_bundle: true,
							launch_payment_dialog_via_pac: { rate: 100 },
							should_log_response_error: true,
							popup_blocker_scribe_logging: { rate: 100 },
							https_only_enforce_starting: 1538809200000,
							https_only_learn_more:
								"https://developers.facebook.com/blog/post/2018/06/08/enforce-https-facebook-login/",
							https_only_scribe_logging: { rate: 1 },
							log_perf: { rate: 0.001 },
							log_perf_devsite: { rate: 15 },
							plugin_tags_blacklist: ["name"]
						},
						api: {
							mode: "warn",
							https_only: [
								"api",
								"getAccessToken",
								"getAuthResponse",
								"getLoginStatus",
								"getUserID",
								"login"
							],
							whitelist: [
								"AppEvents",
								"AppEvents.EventNames",
								"AppEvents.ParameterNames",
								"AppEvents.activateApp",
								"AppEvents.logEvent",
								"AppEvents.logPageView",
								"AppEvents.logPurchase",
								"AppEvents.setUserID",
								"AppEvents.getUserID",
								"AppEvents.clearUserID",
								"AppEvents.updateUserProperties",
								"Canvas",
								"Canvas.Prefetcher",
								"Canvas.Prefetcher.addStaticResource",
								"Canvas.Prefetcher.setCollectionMode",
								"Canvas.getPageInfo",
								"Canvas.hideFlashElement",
								"Canvas.scrollTo",
								"Canvas.setAutoGrow",
								"Canvas.setDoneLoading",
								"Canvas.setSize",
								"Canvas.setUrlHandler",
								"Canvas.showFlashElement",
								"Canvas.startTimer",
								"Canvas.stopTimer",
								"Event",
								"Event.subscribe",
								"Event.unsubscribe",
								"Music.flashCallback",
								"Music.init",
								"Music.send",
								"Payment",
								"Payment.cancelFlow",
								"Payment.continueFlow",
								"Payment.init",
								"Payment.lockForProcessing",
								"Payment.parse",
								"Payment.setSize",
								"Payment.unlockForProcessing",
								"ThirdPartyProvider",
								"ThirdPartyProvider.init",
								"ThirdPartyProvider.sendData",
								"UA",
								"UA.nativeApp",
								"XFBML",
								"XFBML.RecommendationsBar",
								"XFBML.RecommendationsBar.markRead",
								"XFBML.parse",
								"addFriend",
								"api",
								"getAccessToken",
								"getAuthResponse",
								"getLoginStatus",
								"getUserID",
								"init",
								"login",
								"logout",
								"publish",
								"share",
								"ui",
								"AppEvents.setAppVersion",
								"AppEvents.getAppVersion",
								"AppEvents.clearAppVersion",
								"RankingService.hidePlugin",
								"RankingService.showPlugin",
								"CustomerChat.hideDialog",
								"CustomerChat.showDialog",
								"CustomerChat.hide",
								"CustomerChat.show",
								"CustomerChat.update"
							]
						}
					});
					__d("JSSDKXDConfig", [], {
						XdUrl: "/connect/xd_arbiter.php?version=42",
						XdBundleUrl: "/connect/xd_arbiter/r/kO5a7GzG6AF.js?version=42",
						Flash: {
							path:
								"https://connect.facebook.net/rsrc.php/v2/yW/r/yOZN1vHw3Z_.swf"
						},
						useCdn: true
					});
					__d("JSSDKCssConfig", [], {
						rules:
							'.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:"lucida grande", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}.fb_link img{border:none}\u0040keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}\n.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_reset .fb_dialog_legacy{overflow:visible}.fb_dialog_advanced{padding:10px;border-radius:8px}.fb_dialog_content{background:#fff;color:#333}.fb_dialog_close_icon{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{top:5px;left:5px;right:auto}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_loader{background-color:#f5f6f7;border:1px solid #606060;font-size:24px;padding:20px}.fb_dialog_top_left,.fb_dialog_top_right,.fb_dialog_bottom_left,.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}.fb_dialog_top_left{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 0;left:-10px;top:-10px}.fb_dialog_top_right{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 -10px;right:-10px;top:-10px}.fb_dialog_bottom_left{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 -20px;bottom:-10px;left:-10px}.fb_dialog_bottom_right{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/8YeTNIlTZjm.png) no-repeat 0 -30px;right:-10px;bottom:-10px}.fb_dialog_vert_left,.fb_dialog_vert_right,.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}.fb_dialog_vert_left,.fb_dialog_vert_right{width:10px;height:100\u0025}.fb_dialog_vert_left{margin-left:-10px}.fb_dialog_vert_right{right:0;margin-right:-10px}.fb_dialog_horiz_top,.fb_dialog_horiz_bottom{width:100\u0025;height:10px}.fb_dialog_horiz_top{margin-top:-10px}.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50\u0025;float:left;padding:5px 0 7px 26px}body.fb_hidden{-webkit-transform:none;height:100\u0025;margin:0;overflow:visible;position:absolute;top:-10000px;left:0;width:100\u0025}.fb_dialog.fb_dialog_mobile.loading{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50\u0025 50\u0025;min-height:100\u0025;min-width:100\u0025;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{width:auto;height:auto;min-height:initial;min-width:initial;background:none}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100\u0025}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{color:#fff;display:block;padding-top:20px;clear:both;font-size:18px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .45);position:absolute;bottom:0;left:0;right:0;top:0;width:100\u0025;min-height:100\u0025;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:-webkit-sticky;top:0}.fb_dialog_content .dialog_header{-webkit-box-shadow:white 0 1px 1px -1px inset;background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#738ABA), to(#2C4987));border-bottom:1px solid;border-color:#1d4088;color:#fff;font:14px Helvetica, sans-serif;font-weight:bold;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{-webkit-font-smoothing:subpixel-antialiased;height:43px;width:100\u0025}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:-webkit-gradient(linear, 0\u0025 0\u0025, 0\u0025 100\u0025, from(#4966A6), color-stop(.5, #355492), to(#2A4887));border:1px solid #29487d;-webkit-background-clip:padding-box;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0, 0, 0, .117188) 0 1px 1px inset, rgba(255, 255, 255, .167969) 0 1px 0;display:inline-block;margin-top:3px;max-width:85px;line-height:18px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{border:none;background:none;color:#fff;font:12px Helvetica, sans-serif;font-weight:bold;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50\u0025 50\u0025;border:1px solid #555;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #555;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_button{text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-repeat:no-repeat;background-position:50\u0025 50\u0025;height:24px;width:24px}\u0040keyframes rotateSpinner{0\u0025{transform:rotate(0deg)}100\u0025{transform:rotate(360deg)}}\n.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100\u0025}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_hide_iframes iframe{position:relative;left:-10000px}.fb_iframe_widget_loader{position:relative;display:inline-block}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100\u0025}.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}.fb_iframe_widget_loader .FB_Loader{background:url(https://static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50\u0025;z-index:4}\n.fb_customer_chat_bounce_in_v2{animation-duration:300ms;animation-name:fb_bounce_in_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_v2{animation-duration:300ms;animation-name:fb_bounce_out_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_v2_mobile_chat_started{animation-duration:300ms;animation-name:fb_bounce_in_v2_mobile_chat_started;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_v2_mobile_chat_started{animation-duration:300ms;animation-name:fb_bounce_out_v2_mobile_chat_started;transition-timing-function:ease-in}.fb_customer_chat_bubble_pop_in{animation-duration:250ms;animation-name:fb_customer_chat_bubble_bounce_in_animation}.fb_customer_chat_bubble_animated_no_badge{box-shadow:0 3px 12px rgba(0, 0, 0, .15);transition:box-shadow 150ms linear}.fb_customer_chat_bubble_animated_no_badge:hover{box-shadow:0 5px 24px rgba(0, 0, 0, .3)}.fb_customer_chat_bubble_animated_with_badge{box-shadow:-5px 4px 14px rgba(0, 0, 0, .15);transition:box-shadow 150ms linear}.fb_customer_chat_bubble_animated_with_badge:hover{box-shadow:-5px 8px 24px rgba(0, 0, 0, .2)}.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0}.fb_mobile_overlay_active{background-color:#fff;height:100\u0025;overflow:hidden;position:fixed;visibility:hidden;width:100\u0025}\u0040keyframes fb_bounce_in_v2{0\u0025{opacity:0;transform:scale(0, 0);transform-origin:bottom right}50\u0025{transform:scale(1.03, 1.03);transform-origin:bottom right}100\u0025{opacity:1;transform:scale(1, 1);transform-origin:bottom right}}\u0040keyframes fb_bounce_in_v2_mobile_chat_started{0\u0025{opacity:0;top:20px}100\u0025{opacity:1;top:0}}\u0040keyframes fb_bounce_out_v2{0\u0025{opacity:1;transform:scale(1, 1);transform-origin:bottom right}100\u0025{opacity:0;transform:scale(0, 0);transform-origin:bottom right}}\u0040keyframes fb_bounce_out_v2_mobile_chat_started{0\u0025{opacity:1;top:0}100\u0025{opacity:0;top:20px}}\u0040keyframes fb_customer_chat_bubble_bounce_in_animation{0\u0025{bottom:6pt;opacity:0;transform:scale(0, 0);transform-origin:center}70\u0025{bottom:18pt;opacity:1;transform:scale(1.2, 1.2)}100\u0025{transform:scale(1, 1)}}',
						components: [
							"css:fb.css.base",
							"css:fb.css.dialog",
							"css:fb.css.iframewidget",
							"css:fb.css.customer_chat_plugin_iframe"
						]
					});
					__d("ApiClientConfig", [], {
						FlashRequest: {
							swfUrl:
								"https://connect.facebook.net/rsrc.php/v2/yd/r/mxzow1Sdmxr.swf"
						}
					});
					__d("JSSDKCanvasPrefetcherConfig", [], {
						blacklist: [144959615576466, 768691303149786, 320528941393723],
						sampleRate: 500
					});
					__d(
						"DOMWrapper",
						[],
						function(a, b, c, d, e, f) {
							var g, h;
							a = {
								setRoot: function(a) {
									g = a;
								},
								getRoot: function() {
									return g || document.body;
								},
								setWindow: function(a) {
									h = a;
								},
								getWindow: function() {
									return h || self;
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"dotAccess",
						[],
						function(a, b, c, d, e, f) {
							function a(a, b, c) {
								b = b.split(".");
								do {
									var d = b.shift();
									a = a[d] || (c && (a[d] = {}));
								} while (b.length && a);
								return a;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"guid",
						[],
						function(a, b, c, d, e, f) {
							function a() {
								return (
									"f" +
									(Math.random() * (1 << 30)).toString(16).replace(".", "")
								);
							}
							e.exports = a;
						},
						null
					);
					__d(
						"wrapFunction",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = {};
							a = function(a, b, c) {
								return function() {
									var d = b in g ? g[b](a, c) : a;
									for (
										var e = arguments.length, f = new Array(e), h = 0;
										h < e;
										h++
									)
										f[h] = arguments[h];
									return d.apply(this, f);
								};
							};
							a.setWrapper = function(a, b) {
								g[b] = a;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"GlobalCallback",
						["DOMWrapper", "dotAccess", "guid", "wrapFunction"],
						function(a, b, c, d, e, f, g, h, i, j) {
							__p && __p();
							var k, l;
							a = {
								setPrefix: function(a) {
									(k = h(g.getWindow(), a, !0)), (l = a);
								},
								create: function(a, b) {
									k || this.setPrefix("__globalCallbacks");
									var c = i();
									k[c] = j(a, "entry", b || "GlobalCallback");
									return l + "." + c;
								},
								remove: function(a) {
									a = a.substring(l.length + 1);
									delete k[a];
								}
							};
							e.exports = a;
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
						"Log",
						["sprintf"],
						function(a, b, c, d, e, f, g) {
							b = { DEBUG: 3, INFO: 2, WARNING: 1, ERROR: 0 };
							function a(a, b) {
								var c = Array.prototype.slice.call(arguments, 2),
									d = g.apply(null, c),
									e = window.console;
								e && h.level >= b && e[a in e ? a : "log"](d);
							}
							var h = {
								level: -1,
								Level: b,
								debug: ES(a, "bind", !0, null, "debug", b.DEBUG),
								info: ES(a, "bind", !0, null, "info", b.INFO),
								warn: ES(a, "bind", !0, null, "warn", b.WARNING),
								error: ES(a, "bind", !0, null, "error", b.ERROR),
								log: a
							};
							e.exports = h;
						},
						null
					);
					__d(
						"OAuthControllerParameterName",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								ANDROID_KEY: "android_key",
								API_KEY: "api_key",
								APP_ID: "app_id",
								AUTH_TOKEN: "auth_token",
								AUTH_TYPE: "auth_type",
								CLIENT_ID: "client_id",
								DISPLAY: "display",
								DOMAIN: "domain",
								FORCE_CONFIRMATION: "force_confirmation",
								NEXT: "next",
								ORIGIN: "origin",
								PERMS: "perms",
								REDIRECT_URI: "redirect_uri",
								REF: "ref",
								RESPONSE_TYPE: "response_type",
								RETURN_SCOPES: "return_scopes",
								SCOPE: "scope",
								SDK: "sdk",
								STATE: "state",
								SSO: "sso",
								SSO_KEY: "sso_key",
								VERSION: "version",
								ANCESTOR_ORIGINS: "ancestor_origins"
							});
						},
						null
					);
					__d(
						"ObservableMixin",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							function a() {
								this.__observableEvents = {};
							}
							a.prototype = {
								inform: function(a) {
									__p && __p();
									var b = Array.prototype.slice.call(arguments, 1),
										c = Array.prototype.slice.call(this.getSubscribers(a));
									for (var d = 0; d < c.length; d++) {
										if (c[d] === null) continue;
										try {
											c[d].apply(this, b);
										} catch (a) {
											setTimeout(function() {
												throw a;
											}, 0);
										}
									}
									return this;
								},
								getSubscribers: function(a) {
									return (
										this.__observableEvents[a] ||
										(this.__observableEvents[a] = [])
									);
								},
								clearSubscribers: function(a) {
									a && (this.__observableEvents[a] = []);
									return this;
								},
								clearAllSubscribers: function() {
									this.__observableEvents = {};
									return this;
								},
								subscribe: function(a, b) {
									a = this.getSubscribers(a);
									a.push(b);
									return this;
								},
								unsubscribe: function(a, b) {
									a = this.getSubscribers(a);
									for (var c = 0; c < a.length; c++)
										if (a[c] === b) {
											a.splice(c, 1);
											break;
										}
									return this;
								},
								monitor: function(a, b) {
									if (!b()) {
										var c = ES(
											function(d) {
												b.apply(b, arguments) && this.unsubscribe(a, c);
											},
											"bind",
											!0,
											this
										);
										this.subscribe(a, c);
									}
									return this;
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"javascript_shared_TAAL_OpCode",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								PREVIOUS_FILE: 1,
								PREVIOUS_FRAME: 2,
								PREVIOUS_DIR: 3
							});
						},
						null
					);
					__d(
						"TAALOpcodes",
						["javascript_shared_TAAL_OpCode"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							a = {
								previousFile: function() {
									return g.PREVIOUS_FILE;
								},
								previousFrame: function() {
									return g.PREVIOUS_FRAME;
								},
								previousDirectory: function() {
									return g.PREVIOUS_DIR;
								},
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
									return this.applyOpcodes(a, [g.previousFile()]);
								},
								blameToPreviousFrame: function(a) {
									return this.applyOpcodes(a, [g.previousFrame()]);
								},
								blameToPreviousDirectory: function(a) {
									return this.applyOpcodes(a, [g.previousDirectory()]);
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
						"invariant",
						["TAAL", "ex", "sprintf"],
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							__p && __p();
							var j = h;
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
									if (c === undefined) {
										c = "Invariant: ";
										for (var h = 0; h < e.length; h++) c += "%s,";
									}
									c = g.blameToPreviousFrame(c);
									var i = new Error(j.apply(undefined, [c].concat(e)));
									i.name = "Invariant Violation";
									i.messageWithParams = [c].concat(e);
									throw i;
								}
							}
							e.exports = a;
						},
						null
					);
					__d(
						"UrlMap",
						["UrlMapConfig", "invariant"],
						function(a, b, c, d, e, f, g, h) {
							a = {
								resolve: function(a) {
									var b = "https";
									if (a in g) return b + "://" + g[a];
									a in g || h(0, undefined, a);
									return "";
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ErrorConstants",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							a = {
								ANONYMOUS_GUARD_TAG: "<anonymous guard>",
								EVAL_FRAME_PATTERN_CHROME: /^at .*eval eval (at .*\:\d+\:\d+), .*$/,
								GLOBAL_ERROR_HANDLER_TAG:
									typeof window === "undefined"
										? "<self.onerror>"
										: "<window.onerror>",
								GLOBAL_REACT_ERROR_HANDLER_TAG: "<global.react>",
								IE_AND_OTHER_FRAME_PATTERN: /(.*)[@\s][^\s]+$/,
								IE_STACK_TRACE_REFERENCES: [
									"Unknown script code",
									"Function code",
									"eval code"
								]
							};
							e.exports = a;
						},
						null
					);
					__d(
						"CometErrorUtils",
						["ErrorConstants"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							Error.stackTraceLimit != null &&
								Error.stackTraceLimit < 40 &&
								(Error.stackTraceLimit = 40);
							var h = {
								getColumn: function(a) {
									a = (a = a.columnNumber) != null ? a : "";
									return String(a);
								},
								getColumnFromStackData: function(a) {
									return (a[0] && a[0].column) || "";
								},
								getIEFrame: function(a) {
									for (var b = 0; b < g.IE_STACK_TRACE_REFERENCES.length; b++) {
										var c = " " + g.IE_STACK_TRACE_REFERENCES[b];
										if (ES(a, "endsWith", !0, c))
											return [a, a.substring(0, a.length - c.length)];
									}
									return null;
								},
								getLine: function(a) {
									a = (a = a.lineNumber) != null ? a : "";
									return String(a);
								},
								getLineFromStackData: function(a) {
									return (a[0] && a[0].line) || "";
								},
								getReactComponentStack: function(a) {
									if (a == null || a === "") return null;
									a = a.split("\n");
									a.splice(0, 1);
									return ES(a, "map", !0, function(a) {
										return ES(a, "trim", !0);
									});
								},
								getScript: function(a) {
									a = (a = a.fileName) != null ? a : "";
									return String(a);
								},
								getScriptFromStackData: function(a) {
									return (a[0] && a[0].script) || "";
								},
								normalizeError: function(a) {
									var b = h.normalizeErrorStack(a),
										c = h.getReactComponentStack(
											a.reactComponentStackForLogging
										);
									c = {
										_originalError: a,
										column: h.getColumn(a) || h.getColumnFromStackData(b),
										deferredSource: null,
										extra: {},
										fbloggerMetadata: [],
										guard: "",
										guardList: [],
										line: h.getLine(a) || h.getLineFromStackData(b),
										message: a.message,
										messageWithParams: [],
										name: a.name,
										reactComponentStack: c,
										script: h.getScript(a) || h.getScriptFromStackData(b),
										serverHash: null,
										stack: ES(b, "map", !0, function(a) {
											return a.text;
										}).join("\n"),
										stackFrames: b,
										type: ""
									};
									typeof c.message === "string"
										? (c.messageWithParams = [c.message])
										: ((c.messageObject = c.message),
										  (c.message =
												String(c.message) + " (" + typeof c.message + ")"));
									typeof window !== "undefined" &&
										window &&
										window.location &&
										(c.windowLocationURL = window.location.href);
									for (var d in c) c[d] == null && delete c[d];
									return c;
								},
								normalizeErrorStack: function(a) {
									__p && __p();
									var b = a.stack;
									if (b == null) return [];
									a = a.message;
									var c = b.replace(/^[\w \.\<\>:]+:\s/, "");
									a =
										a != null && ES(c, "startsWith", !0, a)
											? c.substr(a.length + 1)
											: c !== b
												? c.replace(/^.*?\n/, "")
												: b;
									return ES(
										a
											.split(/\n\n/)[0]
											.replace(/[\(\)]|\[.*?\]/g, "")
											.split("\n"),
										"map",
										!0,
										function(a) {
											__p && __p();
											a = ES(a, "trim", !0);
											var b = a.match(g.EVAL_FRAME_PATTERN_CHROME);
											b && (a = b[1]);
											var c, d;
											b = a.match(/:(\d+)(?::(\d+))?$/);
											b &&
												((c = b[1]),
												(d = b[2]),
												(a = a.slice(0, -b[0].length)));
											var e;
											b =
												h.getIEFrame(a) ||
												a.match(g.IE_AND_OTHER_FRAME_PATTERN);
											if (b) {
												a = a.substring(b[1].length + 1);
												b = b[1].match(/(?:at)?\s*(.*)(?:[^\s]+|$)/);
												e = b ? b[1] : "";
											}
											ES(a, "includes", !0, "charset=utf-8;base64,") &&
												(a = "<inlined-file>");
											b = { column: d, identifier: e, line: c, script: a };
											var f = e != null && e !== "" ? " " + e + " (" : " ",
												i = f.length > 1 ? ")" : "",
												j = c != null && c !== "" ? ":" + c : "",
												k = d != null && d !== "" ? ":" + d : "";
											f = "    at" + f + a + j + k + i;
											return babelHelpers["extends"]({}, b, { text: f });
										}
									);
								}
							};
							e.exports = h;
						},
						null
					);
					__d(
						"Env",
						[],
						function(a, b, c, d, e, f) {
							b = {
								start: ES("Date", "now", !1),
								nocatch: !1,
								ajaxpipe_token: null
							};
							a.Env && ES("Object", "assign", !1, b, a.Env);
							a.Env = b;
							e.exports = b;
						},
						null
					);
					__d(
						"ManagedError",
						[],
						function(a, b, c, d, e, f) {
							var g;
							b = babelHelpers.inherits(a, Error);
							g = b && b.prototype;
							function a(a, b) {
								"use strict";
								g.constructor.call(
									this,
									a !== null && a !== undefined ? a : ""
								),
									a !== null && a !== undefined
										? (this.message = a)
										: (this.message = ""),
									(this.innerError = b);
							}
							e.exports = a;
						},
						null
					);
					__d(
						"LogviewForcedKeyError",
						["ManagedError"],
						function(a, b, c, d, e, f, g) {
							__p && __p();
							var h;
							b = babelHelpers.inherits(a, g);
							h = b && b.prototype;
							function a(a, b) {
								"use strict";
								h.constructor.call(this, b, a);
							}
							a.prototype.getCause = function() {
								"use strict";
								return this.innerError;
							};
							a.prototype.getForcedCategoryKey = function() {
								"use strict";
								return this.message;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"erx",
						["ex"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							function a(a) {
								__p && __p();
								if (typeof a !== "string") return a;
								var b = ES(a, "indexOf", !0, g._prefix),
									c = a.lastIndexOf(g._suffix);
								if (b < 0 || c < 0) return [a];
								var d = b + g._prefix.length,
									e = c + g._suffix.length;
								if (d >= c) return ["erx slice failure: %s", a];
								b = a.substring(0, b);
								e = a.substring(e);
								a = a.substring(d, c);
								try {
									d = ES("JSON", "parse", !1, a);
									d[0] = b + d[0] + e;
									return d;
								} catch (b) {
									return ["erx parse failure: %s because %s", a, b.message];
								}
							}
							e.exports = a;
						},
						null
					);
					__d(
						"removeFromArray",
						[],
						function(a, b, c, d, e, f) {
							function a(a, b) {
								b = ES(a, "indexOf", !0, b);
								b !== -1 && a.splice(b, 1);
							}
							e.exports = a;
						},
						null
					);
					__d(
						"ErrorUtils",
						[
							"CometErrorUtils",
							"Env",
							"ErrorConstants",
							"LogviewForcedKeyError",
							"eprintf",
							"erx",
							"removeFromArray",
							"sprintf"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
							"use strict";
							__p && __p();
							var o = "<generated guard>",
								p = /^https?:\/\//i,
								q = /^Type Mismatch for/,
								r = [],
								s,
								t = [],
								u = 50,
								v = [],
								w = !1,
								x = !1,
								y = !1,
								z = /\bnocatch\b/.test(location.search);
							function A(a) {
								a = a.columnNumber || a.column;
								return a != null ? String(a) : "";
							}
							function B(a) {
								return (a[0] && a[0].column) || "";
							}
							function C(a) {
								a = a.lineNumber || a.line;
								return a != null ? String(a) : "";
							}
							function D(a) {
								return (a[0] && a[0].line) || "";
							}
							function E(a) {
								a = a.fileName || a.sourceURL;
								return a != null ? String(a) : "";
							}
							function F(a) {
								return (a[0] && a[0].script) || "";
							}
							function G(a) {
								__p && __p();
								var b = a.stackTrace || a.stack;
								if (b == null) return [];
								a = a.message;
								var c = b.replace(/^[\w \.\<\>:]+:\s/, "");
								a =
									a != null && ES(c, "startsWith", !0, a)
										? c.substr(a.length + 1)
										: c !== b
											? c.replace(/^.*?\n/, "")
											: b;
								return ES(
									a
										.split(/\n\n/)[0]
										.replace(/[\(\)]|\[.*?\]/g, "")
										.split("\n"),
									"map",
									!0,
									function(a) {
										__p && __p();
										a = ES(a, "trim", !0);
										var b = a.match(i.EVAL_FRAME_PATTERN_CHROME);
										b && (a = b[1]);
										var c, d;
										b = a.match(/:(\d+)(?::(\d+))?$/);
										b &&
											((c = b[1]), (d = b[2]), (a = a.slice(0, -b[0].length)));
										var e;
										b =
											g.getIEFrame(a) || a.match(i.IE_AND_OTHER_FRAME_PATTERN);
										if (b) {
											a = a.substring(b[1].length + 1);
											b = b[1].match(/(?:at)?\s*(.*)(?:[^\s]+|$)/);
											e = b ? b[1] : "";
										}
										ES(a, "includes", !0, "charset=utf-8;base64,") &&
											(a = "<inlined-file>");
										b = { column: d, identifier: e, line: c, script: a };
										s && s(b);
										a =
											"    at" +
											(b.identifier ? " " + b.identifier + " (" : " ") +
											b.script +
											(b.line ? ":" + b.line : "") +
											(b.column ? ":" + b.column : "") +
											(b.identifier ? ")" : "");
										return babelHelpers["extends"]({}, b, { text: a });
									}
								);
							}
							function H(a) {
								v.unshift(a), (w = !0);
							}
							function I() {
								v.shift(), (w = v.length !== 0);
							}
							var J = {
								ANONYMOUS_GUARD_TAG: i.ANONYMOUS_GUARD_TAG,
								GENERATED_GUARD_TAG: o,
								GLOBAL_ERROR_HANDLER_TAG: i.GLOBAL_ERROR_HANDLER_TAG,
								history: t,
								addListener: function(a, b) {
									b === void 0 && (b = !1),
										r.push(a),
										b ||
											ES(t, "forEach", !0, function(b) {
												return a(b.error, b.loggingType);
											});
								},
								removeListener: function(a) {
									m(r, a);
								},
								setSourceResolver: function(a) {
									s = a;
								},
								applyWithGuard: function(b, c, d, e, f, g) {
									__p && __p();
									H(f || i.ANONYMOUS_GUARD_TAG);
									h.nocatch && (z = !0);
									if (z) {
										try {
											f = b.apply(c, d || []);
										} finally {
											I();
										}
										return f;
									}
									try {
										return b.apply(c, d || []);
									} catch (h) {
										f = h;
										if (f == null)
											try {
												var j = c,
													k = function(a) {
														__p && __p();
														if (a == null) return "<unset>";
														else if (typeof a === "object" && a.toString)
															return a.toString();
														else if (typeof a === "boolean" && a.toString)
															return a.toString();
														else if (typeof a === "number" && a.toString)
															return a.toString();
														else if (typeof a === "string") return a;
														else if (typeof a === "symbol" && a.toString)
															return a.toString();
														else if (typeof a === "function" && a.toString)
															return a.toString();
														return "<unset>";
													};
												if (c != null)
													if (c == window) j = "[The window object]";
													else if (c == a) j = "[The global object]";
													else {
														var l = c,
															m = {};
														ES(ES("Object", "keys", !1, l), "map", !0, function(
															a,
															b
														) {
															b = l[a];
															m[a] = k(b);
														});
														j = m;
													}
												c = ES(d || [], "map", !0, k);
												var o =
														"applyWithGuard threw null or undefined:\nFunc: %s\nContext: %s\nArgs: %s",
													p = b.toString && b.toString().substr(0, 1024);
												j = ES("JSON", "stringify", !1, j).substr(0, 1024);
												c = ES("JSON", "stringify", !1, c).substr(0, 1024);
												var q = n(
													o,
													p ? p : "this function does not support toString",
													j,
													c
												);
												f = new Error(q);
												f.messageWithParams = [
													o,
													p ? p : "this function does not support toString",
													j,
													c
												];
											} catch (a) {
												q =
													"applyWithGuard threw null or undefined with unserializable data:\nFunc: %s\nMetaEx: %s";
												o = b.toString && b.toString().substr(0, 1024);
												p = n(
													q,
													o ? o : "this function does not support toString",
													a.message
												);
												f = new Error(p);
												f.messageWithParams = [
													p,
													o ? o : "this function does not support toString",
													a.message
												];
											}
										g &&
											g.deferredSource &&
											(f.deferredSource = g.deferredSource);
										j = J.normalizeError(f);
										e && e(j);
										j.extra || (j.extra = {});
										if (b)
											try {
												j.extra[b.toString().substring(0, 100)] = "function";
											} catch (a) {}
										d &&
											(j.extra[
												ES("Array", "from", !1, d)
													.toString()
													.substring(0, 100)
											] = "args");
										j.guard = v[0];
										j.guardList = v.slice();
										J.reportError(j, !1, "GUARDED");
									} finally {
										I();
									}
								},
								guard: function(a, b, c) {
									b = b || a.name || o;
									function d() {
										return J.applyWithGuard(
											a,
											c || this,
											[].concat(Array.prototype.slice.call(arguments)),
											null,
											b
										);
									}
									a.__SMmeta && (d.__SMmeta = a.__SMmeta);
									return d;
								},
								inGuard: function() {
									return w;
								},
								normalizeError: function(a) {
									__p && __p();
									var b = a;
									a = a != null ? a : {};
									if (Object.prototype.hasOwnProperty.call(a, "_originalError"))
										return a;
									var c = G(a),
										d = !1;
									if (a.framesToPop) {
										var e = a.framesToPop,
											f;
										while (e > 0 && c.length > 0)
											(f = c.shift()), e--, (d = !0);
										q.test(a.message) &&
											a.framesToPop === 2 &&
											f &&
											(p.test(f.script) &&
												(a.message +=
													" at " +
													f.script +
													(f.line ? ":" + f.line : "") +
													(f.column ? ":" + f.column : "")));
									}
									e = g.getReactComponentStack(a.reactComponentStackForLogging);
									var h = a instanceof j ? a.getForcedCategoryKey() : null;
									b = {
										_originalError: b,
										column: d ? B(c) : A(a) || B(c),
										deferredSource: a.deferredSource,
										extra: a.extra,
										fbloggerMetadata: a.fbloggerMetadata,
										forcedLogviewKey: h,
										guard: a.guard,
										guardList: a.guardList,
										line: d ? D(c) : C(a) || D(c),
										message: a.message,
										messageWithParams: a.messageWithParams,
										name: a.name,
										reactComponentStack: e,
										script: d ? F(c) : E(a) || F(c),
										serverHash: a.serverHash,
										snapshot: a.snapshot,
										stack: ES(c, "map", !0, function(a) {
											return a.text;
										}).join("\n"),
										stackFrames: c,
										type: a.type
									};
									typeof b.message === "string"
										? (b.messageWithParams =
												b.messageWithParams || l(b.message))
										: ((b.messageObject = b.message),
										  (b.message =
												String(b.message) + " (" + typeof b.message + ")"));
									b.messageWithParams &&
										(b.message = k.apply(undefined, b.messageWithParams));
									typeof window !== "undefined" &&
										window &&
										window.location &&
										(b.windowLocationURL = window.location.href);
									s && s(b);
									for (var i in b) b[i] == null && delete b[i];
									return b;
								},
								onerror: function(a, b, c, d, e) {
									(e = e || {}),
										(e.message = e.message || a),
										(e.script = e.script || b),
										(e.line = e.line || c),
										(e.column = e.column || d),
										(e.guard = i.GLOBAL_ERROR_HANDLER_TAG),
										(e.guardList = [i.GLOBAL_ERROR_HANDLER_TAG]),
										J.reportError(e, !0, "FATAL");
								},
								reportError: function(b, c, d) {
									__p && __p();
									c === void 0 && (c = !1);
									d === void 0 && (d = "DEPRECATED");
									if (x) {
										!1;
										return !1;
									}
									b.reactComponentStack && H(i.GLOBAL_REACT_ERROR_HANDLER_TAG);
									v.length > 0 &&
										((b.guard = b.guard || v[0]), (b.guardList = v.slice()));
									b.reactComponentStack && I();
									b = J.normalizeError(b);
									if (!c) {
										c = a.console;
										var e = b._originalError;
										e = e != null ? "" + e.message : "";
										if ((!c[b.type] || b.type === "error") && !y) {
											e = e.length > 80 ? e.slice(0, 77) + "..." : e;
											c.error(
												'ErrorUtils caught an error: "' +
													e +
													"\". Subsequent errors won't be logged; see https://fburl.com/debugjs."
											);
											y = !0;
										}
									}
									t.length > u && t.splice(u / 2, 1);
									t.push({ error: b, loggingType: d });
									x = !0;
									for (var c = 0; c < r.length; c++)
										try {
											r[c](b, d);
										} catch (a) {
											!1;
										}
									x = !1;
									return !0;
								}
							};
							a.onerror = J.onerror;
							e.exports = a.ErrorUtils = J;
							typeof __t === "function" &&
								__t.setHandler &&
								__t.setHandler(J.reportError);
						},
						3
					);
					__d(
						"defaultTo",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							function a(a, b) {
								return a == null
									? b
									: typeof a === "string" && a === ""
										? b
										: a;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"ErrorGuard",
						["CometErrorUtils", "ErrorConstants", "defaultTo"],
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							__p && __p();
							var j = !1,
								k = !1,
								l = [],
								m = 50,
								n = [],
								o = {
									guardList: [],
									isGuarding: !1,
									addListener: function(a, b) {
										b === void 0 && (b = !1),
											n.push(a),
											b ||
												ES(l, "forEach", !0, function(b) {
													return a(b.error, b.loggingType);
												});
									},
									applyWithGuard: function(a, b, c, d) {
										__p && __p();
										o.pushGuard(
											d && d.name != null && d.name !== ""
												? d.name
												: h.ANONYMOUS_GUARD_TAG
										);
										try {
											return a.apply(b, c || []);
										} catch (e) {
											b = g.normalizeError(e);
											d &&
												d.deferredSource &&
												(b.deferredSource = d.deferredSource);
											d && d.onError && d.onError(b);
											b.extra == null && (b.extra = {});
											if (typeof b.extra === "object") {
												if (a)
													try {
														b.extra[a.toString().substring(0, 100)] =
															"function";
													} catch (a) {}
												c &&
													(b.extra[
														ES("Array", "from", !1, c)
															.toString()
															.substring(0, 100)
													] = "args");
											}
											b.guard = o.guardList[0];
											b.guardList = o.guardList.slice();
											o.reportError(b, !1, "GUARDED");
										} finally {
											o.popGuard();
										}
										return null;
									},
									onerror: function(a, b, c, d, e) {
										e = e || new Error(a);
										e.message = e.message || a;
										e.lineNumber = Number(i(String(e.lineNumber), c));
										e.columnNumber = Number(i(String(e.columnNumber), d));
										e = g.normalizeError(e);
										e.script = i(e.script, b);
										e.guard = h.GLOBAL_ERROR_HANDLER_TAG;
										e.guardList = [h.GLOBAL_ERROR_HANDLER_TAG];
										o.reportError(e, !0, "FATAL");
									},
									popGuard: function() {
										o.guardList.shift(),
											(o.isGuarding = o.guardList.length !== 0);
									},
									pushGuard: function(a) {
										o.guardList.unshift(a), (o.isGuarding = !0);
									},
									removeListener: function(a) {
										a = ES(l, "indexOf", !0, a);
										a !== -1 && l.splice(a, 1);
									},
									reportError: function(b, c, d) {
										__p && __p();
										c === void 0 && (c = !1);
										d === void 0 && (d = "DEPRECATED");
										if (j) return !1;
										b.reactComponentStack == null &&
											o.pushGuard(h.GLOBAL_REACT_ERROR_HANDLER_TAG);
										if (o.guardList.length > 0) {
											var e;
											b.guard = (e = b.guard) != null ? e : o.guardList[0];
											b.guardList = o.guardList.slice();
										}
										b.reactComponentStack && o.popGuard();
										if (!c) {
											e = a.console;
											c = "" + b.message;
											if ((!e[b.type] || b.type === "error") && !k) {
												c = c.length > 80 ? c.slice(0, 77) + "..." : c;
												e.error(
													'ErrorUtils caught an error: "' +
														c +
														"\". Subsequent errors won't be logged; see https://fburl.com/debugjs."
												);
												k = !0;
											}
										}
										l.length > m && l.splice(m / 2, 1);
										l.push({ error: b, loggingType: d });
										j = !0;
										for (var e = 0; e < n.length; e++)
											try {
												n[e](b, d);
											} catch (a) {
												!1;
											}
										j = !1;
										return !0;
									}
								};
							a.onerror = o.onerror;
							e.exports = o;
						},
						null
					);
					__d(
						"FBLogMessageCore",
						["CometErrorUtils", "ErrorGuard"],
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							var i = { info: "log", mustfix: "error", warn: "warn" };
							function j(a) {
								for (
									var b = arguments.length,
										c = new Array(b > 1 ? b - 1 : 0),
										d = 1;
									d < b;
									d++
								)
									c[d - 1] = arguments[d];
								return (
									"<![EX[" +
									ES(
										"JSON",
										"stringify",
										!1,
										[a].concat(
											ES(c, "map", !0, function(a) {
												return String(a);
											})
										)
									) +
									"]]"
								);
							}
							function k(a) {
								this.project = a;
							}
							k.prototype.$1 = function(a, b) {
								__p && __p();
								var c;
								for (
									var d = arguments.length,
										e = new Array(d > 2 ? d - 2 : 0),
										f = 2;
									f < d;
									f++
								)
									e[f - 2] = arguments[f];
								if (this.error) {
									c = this.error;
									var l = b + " from %s: %s";
									e.push(c.name);
									e.push(c.message);
									c.message = j.apply(undefined, [l].concat(e));
								} else c = new Error(j.apply(undefined, [b].concat(e)));
								if (this.error && ES(c.name, "startsWith", !0, "<level:")) {
									var m = new k("fblogger");
									m.warn("Double logging detected");
								}
								var n = "FBLogger" + (this.error ? " caught " + c.name : "");
								c.name = "<level:" + a + "> <name:" + this.project + "> " + n;
								var o = g.normalizeError(c);
								o.type = i[a];
								h.reportError(o, !1, "FBLOGGER");
							};
							k.prototype.mustfix = function(a) {
								for (
									var b = arguments.length,
										c = new Array(b > 1 ? b - 1 : 0),
										d = 1;
									d < b;
									d++
								)
									c[d - 1] = arguments[d];
								this.$1.apply(this, ["mustfix", a].concat(c));
							};
							k.prototype.warn = function(a) {
								for (
									var b = arguments.length,
										c = new Array(b > 1 ? b - 1 : 0),
										d = 1;
									d < b;
									d++
								)
									c[d - 1] = arguments[d];
								this.$1.apply(this, ["warn", a].concat(c));
							};
							k.prototype.info = function(a) {};
							k.prototype.debug = function(a) {};
							k.prototype.catching = function(a) {
								!(a instanceof Error)
									? new k("fblogger").warn(
											"Catching non-Error object is not supported"
									  )
									: (this.error = a);
								return this;
							};
							e.exports = k;
						},
						null
					);
					__d(
						"FBLoggerMetadata",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							var g = [];
							function a() {
								this.metadata = [].concat(g);
							}
							a.prototype.addMetadata = function(a, b, c) {
								this.metadata.push([a, b, c]);
								return this;
							};
							a.prototype.isEmpty = function() {
								return this.metadata.length === 0;
							};
							a.prototype.getAll = function() {
								__p && __p();
								var a = [],
									b = ES(this.metadata, "filter", !0, function(b) {
										if (b == null) return !1;
										var c = ES(b, "filter", !0, function(a) {
											return a && ES(a, "indexOf", !0, ":") > -1;
										});
										if (c.length > 0) {
											a.push(b);
											return !1;
										}
										return !0;
									});
								return { invalidMetadata: a, validMetadata: b };
							};
							a.addGlobalMetadata = function(a, b, c) {
								g.push([a, b, c]);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"FBLogMessage",
						[
							"ErrorUtils",
							"FBLoggerMetadata",
							"FBLogMessageCore",
							"TAAL",
							"TAALOpcodes",
							"erx",
							"ex",
							"sprintf"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
							"use strict";
							__p && __p();
							var o,
								p = { mustfix: "error", warn: "warn", info: "log" },
								q = m,
								r = function a(b) {
									return function(c) {
										b > 0 && (c(), a(b - 1)(c));
									};
								};
							a = babelHelpers.inherits(s, i);
							o = a && a.prototype;
							function s(a) {
								o.constructor.call(this, a),
									(this.metadata = new h()),
									(this.taalOpcodes = []);
							}
							s.prototype.$FBLogMessage1 = function(a, b) {
								__p && __p();
								var c = 2;
								if (b === undefined) {
									var d = new s("fblogger");
									r(c)(function() {
										return d.blameToPreviousFrame();
									});
									d.mustfix(
										"You provided an undefined format string to FBLogger, dropping log line"
									);
									return;
								}
								var e;
								for (
									var f = arguments.length,
										h = new Array(f > 2 ? f - 2 : 0),
										i = 2;
									i < f;
									i++
								)
									h[i - 2] = arguments[i];
								if (this.error) {
									e = this.error;
									var m = b + " from %s: %s";
									h.push(e.name);
									h.push(e.message ? n.apply(null, l(e.message)) : "");
									e.message = q.apply(undefined, [m].concat(h));
								} else {
									r(c)(
										ES(
											function() {
												return this.taalOpcodes.unshift(k.previousFrame());
											},
											"bind",
											!0,
											this
										)
									);
									if (this.taalOpcodes) {
										var o = j.applyOpcodes(b, this.taalOpcodes);
										e = new Error(q.apply(undefined, [o].concat(h)));
									} else e = new Error(q.apply(undefined, [b].concat(h)));
								}
								if (this.error && ES(e.name, "startsWith", !0, "<level:")) {
									var t = new s("fblogger");
									r(c)(function() {
										return t.blameToPreviousFrame();
									});
									t.warn("Double logging detected");
								}
								var u = "FBLogger" + (this.error ? " caught " + e.name : "");
								e.name = n("<level:%s> <name:%s> %s", a, this.project, u);
								e = g.normalizeError(e);
								if (!this.metadata.isEmpty()) {
									var v = this.metadata.getAll(),
										w = v.invalidMetadata,
										x = v.validMetadata;
									if (w.length > 0) {
										var y = new s("fblogger");
										r(c)(function() {
											return y.blameToPreviousFrame();
										});
										y.warn(
											"Metadata cannot contain colon %s",
											ES(w, "map", !0, function(a) {
												return a.join(":");
											}).join(" ")
										);
									}
									e.fbloggerMetadata = ES(x, "map", !0, function(a) {
										return a.join(":");
									});
								}
								var z = p[a];
								e.type = z;
								if (
									this.error &&
									(this.taalOpcodes && this.taalOpcodes.length)
								) {
									var A = new s("fblogger");
									r(c)(function() {
										return A.blameToPreviousFrame();
									});
									A.warn("Blame helpers do not work with catching");
								}
								g.reportError(e, !1, "FBLOGGER");
							};
							s.prototype.mustfix = function(a) {
								for (
									var b = arguments.length,
										c = new Array(b > 1 ? b - 1 : 0),
										d = 1;
									d < b;
									d++
								)
									c[d - 1] = arguments[d];
								this.$FBLogMessage1.apply(this, ["mustfix", a].concat(c));
							};
							s.prototype.warn = function(a) {
								for (
									var b = arguments.length,
										c = new Array(b > 1 ? b - 1 : 0),
										d = 1;
									d < b;
									d++
								)
									c[d - 1] = arguments[d];
								this.$FBLogMessage1.apply(this, ["warn", a].concat(c));
							};
							s.prototype.info = function(a) {};
							s.prototype.debug = function(a) {};
							s.prototype.catching = function(a) {
								!(a instanceof Error)
									? new s("fblogger")
											.blameToPreviousFrame()
											.warn("Catching non-Error object is not supported")
									: o.catching.call(this, a);
								return this;
							};
							s.prototype.blameToPreviousFile = function() {
								this.taalOpcodes.push(k.previousFile());
								return this;
							};
							s.prototype.blameToPreviousFrame = function() {
								this.taalOpcodes.push(k.previousFrame());
								return this;
							};
							s.prototype.blameToPreviousDirectory = function() {
								this.taalOpcodes.push(k.previousDirectory());
								return this;
							};
							s.prototype.addMetadata = function(a, b, c) {
								this.metadata.addMetadata(a, b, c);
								return this;
							};
							e.exports = s;
						},
						null
					);
					__d(
						"FBLogger",
						["FBLoggerMetadata", "FBLogMessage"],
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							a = function(a) {
								return new h(a);
							};
							a.addGlobalMetadata = function(a, b, c) {
								g.addGlobalMetadata(a, b, c);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"WebStorage",
						["FBLogger", "ex"],
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							var i = {},
								j = {};
							function k(a, b, c) {
								Object.prototype.hasOwnProperty.call(i, c) || (i[c] = b(c));
								return i[c];
							}
							function l(a) {
								try {
									return window[a];
								} catch (a) {
									g("web_storage").warn(
										"Failed to get storage for read %s",
										a.message
									);
								}
								return null;
							}
							function m(a) {
								__p && __p();
								try {
									a = window[a];
									if (a) {
										var b = "__test__" + ES("Date", "now", !1);
										a.setItem(b, "");
										a.removeItem(b);
									}
									return a;
								} catch (a) {
									g("web_storage").warn("Failed to get storage %s", a.message);
								}
								return null;
							}
							function n(a) {
								var b = [];
								for (var c = 0; c < a.length; c++) b.push(a.key(c) || "");
								return b;
							}
							function a(a, b, c) {
								__p && __p();
								if (a == null) return new Error("storage cannot be null");
								var d = null;
								try {
									a.setItem(b, c);
								} catch (f) {
									var e = ES(n(a), "map", !0, function(b) {
										var c = (a.getItem(b) || "").length;
										return b + "(" + c + ")";
									});
									d = new Error(
										h(
											"%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s",
											f.name ? f.name + ": " : "",
											b,
											c.length,
											e.join()
										)
									);
									g("web_storage")
										.catching(d)
										.mustfix("Error set item");
								}
								return d;
							}
							b = {
								getLocalStorage: function() {
									return k(i, m, "localStorage");
								},
								getSessionStorage: function() {
									return k(i, m, "sessionStorage");
								},
								getLocalStorageForRead: function() {
									return k(j, l, "localStorage");
								},
								getSessionStorageForRead: function() {
									return k(j, l, "sessionStorage");
								},
								setItemGuarded: a
							};
							e.exports = b;
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
									if (d === undefined) return;
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
						"AssertionError",
						["ManagedError"],
						function(a, b, c, d, e, f, g) {
							function a(a) {
								g.prototype.constructor.apply(this, arguments);
							}
							a.prototype = new g();
							a.prototype.constructor = a;
							e.exports = a;
						},
						null
					);
					__d(
						"Assert",
						["AssertionError", "sprintf"],
						function(a, b, c, d, e, f, g, h) {
							__p && __p();
							function i(a, b) {
								if (typeof a !== "boolean" || !a) throw new g(b);
								return a;
							}
							function j(a, b, c) {
								__p && __p();
								var d;
								if (b === undefined) d = "undefined";
								else if (b === null) d = "null";
								else {
									var e = Object.prototype.toString.call(b);
									d = /\s(\w*)/.exec(e)[1].toLowerCase();
								}
								i(
									ES(a, "indexOf", !0, d) !== -1,
									c || h("Expression is of type %s, not %s", d, a)
								);
								return b;
							}
							function a(a, b, c) {
								i(b instanceof a, c || "Expression not instance of type");
								return b;
							}
							function k(a, b) {
								(l["is" + a] = b),
									(l["maybe" + a] = function(a, c) {
										a != null && b(a, c);
									});
							}
							var l = {
								isInstanceOf: a,
								isTrue: i,
								isTruthy: function(a, b) {
									return i(!!a, b);
								},
								type: j,
								define: function(a, b) {
									(a =
										a.substring(0, 1).toUpperCase() +
										a.substring(1).toLowerCase()),
										k(a, function(a, c) {
											i(b(a), c);
										});
								}
							};
							ES(
								[
									"Array",
									"Boolean",
									"Date",
									"Function",
									"Null",
									"Number",
									"Object",
									"Regexp",
									"String",
									"Undefined"
								],
								"forEach",
								!0,
								function(a) {
									k(a, ES(j, "bind", !0, null, a.toLowerCase()));
								}
							);
							e.exports = l;
						},
						null
					);
					__d(
						"Type",
						["Assert"],
						function(a, b, c, d, e, f, g) {
							__p && __p();
							function h() {
								var a = this.__mixins;
								if (a)
									for (var b = 0; b < a.length; b++)
										a[b].apply(this, arguments);
							}
							function i(a, b) {
								if (b instanceof a) return !0;
								if (b instanceof h)
									for (var c = 0; c < b.__mixins.length; c++)
										if (b.__mixins[c] == a) return !0;
								return !1;
							}
							function j(a, b) {
								var c = a.prototype;
								ES("Array", "isArray", !1, b) || (b = [b]);
								for (var a = 0; a < b.length; a++) {
									var d = b[a];
									typeof d === "function" &&
										(c.__mixins.push(d), (d = d.prototype));
									ES(ES("Object", "keys", !1, d), "forEach", !0, function(a) {
										c[a] = d[a];
									});
								}
							}
							function k(a, b, c) {
								__p && __p();
								var d =
									b && Object.prototype.hasOwnProperty.call(b, "constructor")
										? b.constructor
										: function() {
												this.parent.apply(this, arguments);
										  };
								g.isFunction(d);
								if (a && a.prototype instanceof h === !1)
									throw new Error("parent type does not inherit from Type");
								a = a || h;
								function e() {}
								e.prototype = a.prototype;
								d.prototype = new e();
								b && ES("Object", "assign", !1, d.prototype, b);
								d.prototype.constructor = d;
								d.parent = a;
								d.prototype.__mixins = a.prototype.__mixins
									? Array.prototype.slice.call(a.prototype.__mixins)
									: [];
								c && j(d, c);
								d.prototype.parent = function() {
									(this.parent = a.prototype.parent), a.apply(this, arguments);
								};
								d.prototype.parentCall = function(b) {
									return a.prototype[b].apply(
										this,
										Array.prototype.slice.call(arguments, 1)
									);
								};
								d.extend = function(a, b) {
									return k(this, a, b);
								};
								return d;
							}
							ES("Object", "assign", !1, h.prototype, {
								instanceOf: function(a) {
									return i(a, this);
								}
							});
							ES("Object", "assign", !1, h, {
								extend: function(a, b) {
									return typeof a === "function"
										? k.apply(null, arguments)
										: k(null, a, b);
								},
								instanceOf: i
							});
							e.exports = h;
						},
						null
					);
					__d(
						"sdk.Model",
						["ObservableMixin", "Type"],
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							a = h.extend(
								{
									constructor: function(a) {
										__p && __p();
										this.parent();
										var b = {},
											c = this;
										ES(ES("Object", "keys", !1, a), "forEach", !0, function(d) {
											(b[d] = a[d]),
												(c["set" + d] = function(a) {
													if (a === b[d]) return c;
													b[d] = a;
													c.inform(d + ".change", a);
													return c;
												}),
												(c["get" + d] = function() {
													return b[d];
												});
										});
									}
								},
								g
							);
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.Runtime",
						["JSSDKRuntimeConfig", "sdk.Model"],
						function(a, b, c, d, e, f, g, h) {
							__p && __p();
							var i = { UNKNOWN: 0, PAGETAB: 1, CANVAS: 2, PLATFORM: 4 },
								j = new h({
									AccessToken: "",
									AutoLogAppEvents: !1,
									ClientID: "",
									CookieUserID: "",
									Environment: i.UNKNOWN,
									Initialized: !1,
									IsVersioned: !1,
									KidDirectedSite: undefined,
									Locale: g.locale,
									LoggedIntoFacebook: undefined,
									LoginStatus: undefined,
									Revision: g.revision,
									Rtl: g.rtl,
									Scope: undefined,
									SDKAB: g.sdkab,
									SDKUrl: g.sdkurl,
									SDKNS: g.sdkns,
									UseCookie: !1,
									UseLocalStorage: !0,
									UserID: "",
									Version: undefined
								});
							ES("Object", "assign", !1, j, {
								ENVIRONMENTS: i,
								isEnvironment: function(a) {
									var b = this.getEnvironment();
									return (a | b) === b;
								},
								isCanvasEnvironment: function() {
									return (
										this.isEnvironment(i.CANVAS) ||
										this.isEnvironment(i.PAGETAB)
									);
								}
							});
							(function() {
								var a = /app_runner/.test(window.name)
									? i.PAGETAB
									: /iframe_canvas/.test(window.name)
										? i.CANVAS
										: i.UNKNOWN;
								(a | i.PAGETAB) === a && (a |= i.CANVAS);
								j.setEnvironment(a);
							})();
							e.exports = j;
						},
						null
					);
					__d(
						"sdk.Cookie",
						["QueryString", "sdk.Runtime"],
						function(a, b, c, d, e, f, g, h) {
							__p && __p();
							var i = null;
							function j(a, b, c, d) {
								a = a + h.getClientID();
								d = d ? ";Secure" : "";
								var e = i !== null && i !== ".";
								e &&
									((document.cookie =
										a + "=; expires=Wed, 04 Feb 2004 08:00:00 GMT" + d),
									(document.cookie =
										a +
										"=; expires=Wed, 04 Feb 2004 08:00:00 GMT;domain=" +
										location.hostname +
										d));
								var f = new Date(c).toUTCString();
								document.cookie =
									a +
									"=" +
									b +
									(b && c === 0 ? "" : "; expires=" + f) +
									"; path=/" +
									(e ? "; domain=" + ((a = i) != null ? a : "") : "") +
									d;
							}
							function k(a) {
								a = a + h.getClientID();
								a = new RegExp("\\b" + a + "=([^;]*)\\b");
								a = document.cookie.match(a);
								if (a === null || a === undefined) return null;
								else return a[1];
							}
							a = {
								setDomain: function(a) {
									i = a;
									a = g.encode({
										base_domain: i !== null && i !== "." ? i : ""
									});
									var b = new Date();
									b.setFullYear(b.getFullYear() + 1);
									j("fbm_", a, b.getTime(), !1);
								},
								getDomain: function() {
									return i;
								},
								loadMeta: function() {
									var a = k("fbm_");
									if (a !== null && a !== undefined && i === null) {
										a = g.decode(a);
										i = a.base_domain;
										return a;
									}
									return null;
								},
								loadSignedRequest: function() {
									return k("fbsr_");
								},
								setSignedRequestCookie: function(a, b, c) {
									if (a === "")
										throw new Error(
											"Value passed to Cookie.setSignedRequestCookie was empty."
										);
									j("fbsr_", a, b, c);
								},
								clearSignedRequestCookie: function() {
									this.loadMeta(), j("fbsr_", "", 0, !1);
								},
								setRaw: j,
								getRaw: k
							};
							e.exports = a;
						},
						null
					);
					__d(
						"Miny",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = "Miny1",
								h = "wxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("");
							a = {
								encode: function(a) {
									__p && __p();
									if (/^$|[~\\]|__proto__/.test(a)) return a;
									a = a.match(/\w+|\W+/g);
									var b,
										c = ES("Object", "create", !1, null);
									for (b = 0; b < a.length; b++) c[a[b]] = (c[a[b]] || 0) + 1;
									var d = ES("Object", "keys", !1, c);
									d.sort(function(a, b) {
										return c[b] - c[a];
									});
									for (b = 0; b < d.length; b++) {
										var e = (b - (b % 32)) / 32;
										c[d[b]] = e ? e.toString(32) + h[b % 32] : h[b % 32];
									}
									e = "";
									for (b = 0; b < a.length; b++) e += c[a[b]];
									d.unshift(g, d.length);
									d.push(e);
									return d.join("~");
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.UA",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							a = navigator.userAgent;
							var g = {
									iphone: /\b(iPhone|iP[ao]d)/.test(a),
									ipad: /\b(iP[ao]d)/.test(a),
									android: /Android/i.test(a),
									nativeApp: /FBAN\/\w+;/i.test(a),
									nativeAndroidApp: /FB_IAB\/\w+;/i.test(a),
									nativeInstagramApp: /Instagram/i.test(a),
									ucBrowser: /UCBrowser/i.test(a)
								},
								h = /Mobile/i.test(a),
								i = {
									ie: "",
									firefox: "",
									chrome: "",
									webkit: "",
									osx: "",
									edge: "",
									operaMini: "",
									ucWeb: ""
								};
							b = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
								a
							);
							if (b) {
								i.ie = b[1] ? parseFloat(b[1]) : b[4] ? parseFloat(b[4]) : "";
								i.firefox = b[2] || "";
								i.webkit = b[3] || "";
								if (b[3]) {
									c = /(?:Chrome\/(\d+\.\d+))/.exec(a);
									i.chrome = c ? c[1] : "";
									d = /(?:Edge\/(\d+\.\d+))/.exec(a);
									i.edge = d ? d[1] : "";
								}
							}
							f = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
							f && (i.osx = f[1]);
							b = /(?:Opera Mini\/(\d+(?:\.\d+)?))/.exec(a);
							b && (i.operaMini = b[1]);
							c = /(?:UCWEB\/(\d+(?:\.\d+))?)/.exec(a);
							c && (i.ucWeb = c[1] || "2.0");
							function j(a) {
								return ES(a.split("."), "map", !0, function(a) {
									return parseFloat(a);
								});
							}
							var k = {};
							ES(ES("Object", "keys", !1, i), "map", !0, function(a) {
								(k[a] = function() {
									return parseFloat(i[a]);
								}),
									(k[a].getVersionParts = function() {
										return j(i[a]);
									});
							});
							ES(ES("Object", "keys", !1, g), "map", !0, function(a) {
								k[a] = function() {
									return g[a];
								};
							});
							k.mobile = function() {
								return g.iphone || g.ipad || g.android || h;
							};
							k.mTouch = function() {
								return g.android || g.iphone || g.ipad;
							};
							k.facebookInAppBrowser = function() {
								return g.nativeApp || g.nativeAndroidApp;
							};
							k.inAppBrowser = function() {
								return (
									g.nativeApp || g.nativeAndroidApp || g.nativeInstagramApp
								);
							};
							k.mBasic = function() {
								return !!(i.ucWeb || i.operaMini);
							};
							e.exports = k;
						},
						null
					);
					__d(
						"getBlankIframeSrc",
						["sdk.UA"],
						function(a, b, c, d, e, f, g) {
							function a() {
								return g.ie() < 10 ? "javascript:false" : "about:blank";
							}
							e.exports = a;
						},
						null
					);
					__d(
						"insertIframe",
						["GlobalCallback", "getBlankIframeSrc", "guid"],
						function(a, b, c, d, e, f, g, h, i) {
							__p && __p();
							function a(a) {
								__p && __p();
								a.id = a.id || i();
								a.name = a.name || i();
								var b = !1,
									c = !1,
									d = function() {
										b &&
											!c &&
											((c = !0), a.onload && a.onload(a.root.firstChild));
									},
									e = g.create(d);
								if (document.attachEvent) {
									var f =
										'<iframe id="' +
										a.id +
										'" name="' +
										a.name +
										'"' +
										(a.title ? ' title="' + a.title + '"' : "") +
										(a.className ? ' class="' + a.className + '"' : "") +
										' style="border:none;' +
										(a.width ? "width:" + a.width + "px;" : "") +
										(a.height ? "height:" + a.height + "px;" : "") +
										'" src="' +
										h() +
										'" frameborder="0" scrolling="no" allowtransparency="true" onload="' +
										e +
										'()"></iframe>';
									a.root.innerHTML =
										'<iframe src="' +
										h() +
										'" frameborder="0" scrolling="no" style="height:1px"></iframe>';
									b = !0;
									setTimeout(function() {
										(a.root.innerHTML = f),
											(a.root.firstChild.src = a.url),
											a.onInsert && a.onInsert(a.root.firstChild);
									}, 0);
								} else {
									e = document.createElement("iframe");
									e.id = a.id;
									e.name = a.name;
									e.onload = d;
									e.scrolling = "no";
									e.style.border = "none";
									e.style.overflow = "hidden";
									a.title && (e.title = a.title);
									a.className && (e.className = a.className);
									a.height !== undefined && (e.style.height = a.height + "px");
									a.width !== undefined &&
										(a.width == "100%"
											? (e.style.width = a.width)
											: (e.style.width = a.width + "px"));
									a.root.appendChild(e);
									b = !0;
									e.src = a.url;
									a.onInsert && a.onInsert(e);
								}
							}
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.domReady",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g;
							b =
								"readyState" in document
									? /loaded|complete/.test(document.readyState)
									: !!document.body;
							function h() {
								if (!g) return;
								var a;
								while ((a = g.shift())) a();
								g = null;
							}
							function a(a) {
								if (g) {
									g.push(a);
									return;
								} else a();
							}
							if (!b) {
								g = [];
								document.addEventListener
									? (document.addEventListener("DOMContentLoaded", h, !1),
									  window.addEventListener("load", h, !1))
									: document.attachEvent &&
									  (document.attachEvent("onreadystatechange", h),
									  window.attachEvent("onload", h));
								if (
									document.documentElement.doScroll &&
									window === window.top
								) {
									c = function a() {
										try {
											document.documentElement.doScroll("left");
										} catch (b) {
											setTimeout(a, 0);
											return;
										}
										h();
									};
									c();
								}
							}
							e.exports = a;
						},
						3
					);
					__d(
						"sdk.Content",
						["Log", "sdk.domReady", "sdk.UA"],
						function(a, b, c, d, e, f, g, h, i) {
							__p && __p();
							var j,
								k = {
									append: function(a, b) {
										b ||
											(!j
												? ((j = b = document.getElementById("fb-root")),
												  b ||
														(g.warn(
															'The "fb-root" div has not been created, auto-creating'
														),
														(j = b = document.createElement("div")),
														(b.id = "fb-root"),
														i.ie() || !document.body
															? h(function() {
																	document.body.appendChild(b);
															  })
															: document.body.appendChild(b)),
												  (b.className += " fb_reset"))
												: (b = j));
										if (typeof a === "string") {
											var c = document.createElement("div");
											b.appendChild(c).innerHTML = a;
											return c;
										} else return b.appendChild(a);
									},
									appendHidden: function(a) {
										if (!b) {
											var b = document.createElement("div"),
												c = b.style;
											c.position = "absolute";
											c.top = "-10000px";
											c.width = c.height = 0;
											b = k.append(b);
										}
										return k.append(a, b);
									},
									submitToTarget: function(a, b) {
										__p && __p();
										var c = document.createElement("form");
										c.action = a.url;
										c.target = a.target;
										c.method = b ? "GET" : "POST";
										k.appendHidden(c);
										for (var d in a.params)
											if (Object.prototype.hasOwnProperty.call(a.params, d)) {
												b = a.params[d];
												if (b !== null && b !== undefined) {
													var e = document.createElement("input");
													e.name = d;
													e.value = b;
													c.appendChild(e);
												}
											}
										c.submit();
										c.parentNode.removeChild(c);
									}
								};
							e.exports = k;
						},
						null
					);
					__d(
						"sdk.Impressions",
						[
							"Miny",
							"QueryString",
							"UrlMap",
							"getBlankIframeSrc",
							"guid",
							"insertIframe",
							"sdk.Content",
							"sdk.Runtime"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
							__p && __p();
							function o(a) {
								__p && __p();
								var b = n.getClientID();
								!a.api_key && b && (a.api_key = b);
								a.kid_directed_site = n.getKidDirectedSite();
								b = i.resolve("www", !0) + "/impression.php/" + k() + "/";
								var c = h.appendToUrl(b, a);
								if (
									c.length > 2e3 &&
									(a.payload && typeof a.payload === "string")
								) {
									var d = g.encode(a.payload);
									d &&
										d.length < a.payload.length &&
										((a.payload = d), (c = h.appendToUrl(b, a)));
								}
								if (c.length <= 2e3) {
									d = new Image();
									d.src = c;
								} else {
									d = k();
									var e = m.appendHidden("");
									l({
										url: j(),
										root: e,
										name: d,
										className: "fb_hidden fb_invisible",
										onload: function() {
											e.parentNode.removeChild(e);
										}
									});
									m.submitToTarget({ url: b, target: d, params: a });
								}
							}
							a = {
								log: function(a, b) {
									b.source || (b.source = "jssdk"),
										o({ lid: a, payload: ES("JSON", "stringify", !1, b) });
								},
								impression: o
							};
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.Scribe",
						["QueryString", "UrlMap", "sdk.Runtime"],
						function(a, b, c, d, e, f, g, h, i) {
							function a(a, b) {
								typeof b.extra === "object" &&
									(b.extra.revision = i.getRevision()),
									(new Image().src = g.appendToUrl(
										h.resolve("www") + "/common/scribe_endpoint.php",
										{ c: a, m: ES("JSON", "stringify", !1, b) }
									));
							}
							b = { log: a };
							e.exports = b;
						},
						null
					);
					__d(
						"Base64",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g =
								"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
							function h(a) {
								a =
									(a.charCodeAt(0) << 16) |
									(a.charCodeAt(1) << 8) |
									a.charCodeAt(2);
								return String.fromCharCode(
									g.charCodeAt(a >>> 18),
									g.charCodeAt((a >>> 12) & 63),
									g.charCodeAt((a >>> 6) & 63),
									g.charCodeAt(a & 63)
								);
							}
							var i =
								">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";
							function j(a) {
								a =
									(i.charCodeAt(a.charCodeAt(0) - 43) << 18) |
									(i.charCodeAt(a.charCodeAt(1) - 43) << 12) |
									(i.charCodeAt(a.charCodeAt(2) - 43) << 6) |
									i.charCodeAt(a.charCodeAt(3) - 43);
								return String.fromCharCode(a >>> 16, (a >>> 8) & 255, a & 255);
							}
							var k = {
								encode: function(a) {
									a = unescape(encodeURI(a));
									var b = (a.length + 2) % 3;
									a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
									return a.slice(0, a.length + b - 2) + "==".slice(b);
								},
								decode: function(a) {
									a = a.replace(/[^A-Za-z0-9+\/]/g, "");
									var b = (a.length + 3) & 3;
									a = (a + "AAA".slice(b)).replace(/..../g, j);
									a = a.slice(0, a.length + b - 3);
									try {
										return decodeURIComponent(escape(a));
									} catch (a) {
										throw new Error("Not valid UTF-8");
									}
								},
								encodeObject: function(a) {
									return k.encode(ES("JSON", "stringify", !1, a));
								},
								decodeObject: function(a) {
									return ES("JSON", "parse", !1, k.decode(a));
								},
								encodeNums: function(a) {
									return String.fromCharCode.apply(
										String,
										ES(a, "map", !0, function(a) {
											return g.charCodeAt((a | -(a > 63)) & -(a > 0) & 63);
										})
									);
								}
							};
							e.exports = k;
						},
						null
					);
					__d(
						"sdk.SignedRequest",
						["Base64"],
						function(a, b, c, d, e, f, g) {
							function a(a) {
								if (!a) return null;
								a = a
									.split(".", 2)[1]
									.replace(/\-/g, "+")
									.replace(/\_/g, "/");
								return g.decodeObject(a);
							}
							b = { parse: a };
							e.exports = b;
						},
						null
					);
					__d(
						"URIRFC3986",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = new RegExp(
								"^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?"
							);
							a = {
								parse: function(a) {
									__p && __p();
									if (ES(a, "trim", !0) === "") return null;
									a = a.match(g);
									if (a == null) return null;
									var b = {};
									b.uri = a[0] ? a[0] : null;
									b.scheme = a[1] ? a[1].substr(0, a[1].length - 1) : null;
									b.authority = a[2] ? a[2].substr(2) : null;
									b.userinfo = a[3] ? a[3].substr(0, a[3].length - 1) : null;
									b.host = a[2] ? a[4] : null;
									b.port = a[5]
										? a[5].substr(1)
											? parseInt(a[5].substr(1), 10)
											: null
										: null;
									b.path = a[6] ? a[6] : null;
									b.query = a[7] ? a[7].substr(1) : null;
									b.fragment = a[8] ? a[8].substr(1) : null;
									b.isGenericURI = b.authority === null && !!b.scheme;
									return b;
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"createObjectFrom",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							function g(a, b) {
								if (b === undefined) return g(a, !0);
								var c = {};
								if (ES("Array", "isArray", !1, b))
									for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
								else for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
								return c;
							}
							e.exports = g;
						},
						null
					);
					__d(
						"URISchemes",
						["createObjectFrom"],
						function(a, b, c, d, e, f, g) {
							var h = g([
								"blob",
								"cmms",
								"fb",
								"fba",
								"fbatwork",
								"fb-ama",
								"fb-workchat",
								"fb-workchat-secure",
								"fb-messenger",
								"fb-messenger-public",
								"fb-messenger-group-thread",
								"fb-page-messages",
								"fb-pma",
								"fbcf",
								"fbconnect",
								"fbinternal",
								"fbmobilehome",
								"fbrpc",
								"file",
								"ftp",
								"http",
								"https",
								"mailto",
								"ms-app",
								"intent",
								"itms",
								"itms-apps",
								"itms-services",
								"market",
								"svn+ssh",
								"fbstaging",
								"tel",
								"sms",
								"pebblejs",
								"sftp",
								"whatsapp",
								"moments",
								"flash",
								"fblite",
								"chrome-extension",
								"webcal",
								"fb124024574287414",
								"fb124024574287414rc",
								"fb124024574287414master",
								"fb1576585912599779",
								"fb929757330408142",
								"designpack",
								"fbpixelcloud",
								"fbapi20130214",
								"fb1196383223757595",
								"tbauth",
								"oculus",
								"oculus.store",
								"skype",
								"callto",
								"workchat",
								"fb236786383180508",
								"fb1775440806014337",
								"data"
							]);
							a = {
								isAllowed: function(a) {
									return !a
										? !0
										: Object.prototype.hasOwnProperty.call(h, a.toLowerCase());
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"setHostSubdomain",
						[],
						function(a, b, c, d, e, f) {
							function a(a, b) {
								a = a.split(".");
								a.length < 3 ? a.unshift(b) : (a[0] = b);
								return a.join(".");
							}
							e.exports = a;
						},
						null
					);
					__d(
						"URIBase",
						[
							"FBLogger",
							"URIRFC3986",
							"URISchemes",
							"ex",
							"invariant",
							"setHostSubdomain"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							__p && __p();
							var m = new RegExp(
									"[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"
								),
								n = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");
							function o(a, b, c, d) {
								__p && __p();
								if (!b) return !0;
								if (b instanceof q) {
									a.setProtocol(b.getProtocol());
									a.setDomain(b.getDomain());
									a.setPort(b.getPort());
									a.setPath(b.getPath());
									a.setQueryData(d.deserialize(d.serialize(b.getQueryData())));
									a.setFragment(b.getFragment());
									a.setIsGeneric(b.getIsGeneric());
									a.setForceFragmentSeparator(b.getForceFragmentSeparator());
									return !0;
								}
								b = ES(b.toString(), "trim", !0);
								var e = h.parse(b) || { fragment: null, scheme: null };
								if (!c && !i.isAllowed(e.scheme)) return !1;
								a.setProtocol(e.scheme || "");
								if (!c && m.test(e.host || "")) return !1;
								a.setDomain(e.host || "");
								a.setPort(e.port || "");
								a.setPath(e.path || "");
								if (c) a.setQueryData(d.deserialize(e.query || "") || {});
								else
									try {
										a.setQueryData(d.deserialize(e.query || "") || {});
									} catch (a) {
										return !1;
									}
								a.setFragment(e.fragment || "");
								e.fragment === "" && a.setForceFragmentSeparator(!0);
								a.setIsGeneric(e.isGenericURI || !1);
								if (e.userinfo !== null)
									if (c)
										throw new Error(
											j(
												"URI.parse: invalid URI (userinfo is not allowed in a URI): %s",
												a.toString()
											)
										);
									else return !1;
								if (
									!a.getDomain() &&
									ES(a.getPath(), "indexOf", !0, "\\") !== -1
								)
									if (c)
										throw new Error(
											j(
												"URI.parse: invalid URI (no domain but multiple back-slashes): %s",
												a.toString()
											)
										);
									else return !1;
								if (!a.getProtocol() && n.test(b))
									if (c)
										throw new Error(
											j(
												"URI.parse: invalid URI (unsafe protocol-relative URLs): %s",
												a.toString()
											)
										);
									else return !1;
								if (
									a.getDomain() &&
									a.getPath() &&
									!ES(a.getPath(), "startsWith", !0, "/")
								)
									if (c)
										throw new Error(
											j(
												"URI.parse: invalid URI (domain and path where path lacks leading slash): %s",
												a.toString()
											)
										);
									else return !1;
								return !0;
							}
							var p = [];
							q.tryParse = function(a, b) {
								"use strict";
								var c = new q(null, b);
								return o(c, a, !1, b) ? c : null;
							};
							q.isValid = function(a, b) {
								"use strict";
								return !!q.tryParse(a, b);
							};
							function q(a, b) {
								"use strict";
								b || k(0, undefined),
									(this.$9 = b),
									(this.$7 = ""),
									(this.$1 = ""),
									(this.$6 = ""),
									(this.$5 = ""),
									(this.$3 = ""),
									(this.$4 = !1),
									(this.$8 = {}),
									(this.$2 = !1),
									o(this, a, !0, b);
							}
							q.prototype.setProtocol = function(a) {
								"use strict";
								i.isAllowed(a) ||
									(g("uri").mustfix(
										"You attempted to set the protocol of a URI to `%s`. That protocol does not pass the `URISchemes.isAllowed` test.",
										a
									),
									k(0, undefined, a));
								this.$7 = a;
								return this;
							};
							q.prototype.getProtocol = function() {
								"use strict";
								return (this.$7 || "").toLowerCase();
							};
							q.prototype.setSecure = function(a) {
								"use strict";
								return this.setProtocol(a ? "https" : "http");
							};
							q.prototype.isSecure = function() {
								"use strict";
								return this.getProtocol() === "https";
							};
							q.prototype.setDomain = function(a) {
								"use strict";
								if (m.test(a))
									throw new Error(
										j(
											"URI.setDomain: unsafe domain specified: %s for url %s",
											a,
											this.toString()
										)
									);
								this.$1 = a;
								return this;
							};
							q.prototype.getDomain = function() {
								"use strict";
								return this.$1;
							};
							q.prototype.setPort = function(a) {
								"use strict";
								this.$6 = a;
								return this;
							};
							q.prototype.getPort = function() {
								"use strict";
								return this.$6;
							};
							q.prototype.setPath = function(a) {
								"use strict";
								this.$5 = a;
								return this;
							};
							q.prototype.getPath = function() {
								"use strict";
								return this.$5;
							};
							q.prototype.addQueryData = function(a, b) {
								"use strict";
								Object.prototype.toString.call(a) === "[object Object]"
									? ES("Object", "assign", !1, this.$8, a)
									: (this.$8[a] = b);
								return this;
							};
							q.prototype.setQueryData = function(a) {
								"use strict";
								this.$8 = a;
								return this;
							};
							q.prototype.getQueryData = function() {
								"use strict";
								return this.$8;
							};
							q.prototype.removeQueryData = function(a) {
								"use strict";
								ES("Array", "isArray", !1, a) || (a = [a]);
								for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
								return this;
							};
							q.prototype.setFragment = function(a) {
								"use strict";
								this.$3 = a;
								this.setForceFragmentSeparator(!1);
								return this;
							};
							q.prototype.getFragment = function() {
								"use strict";
								return this.$3;
							};
							q.prototype.setForceFragmentSeparator = function(a) {
								"use strict";
								this.$2 = a;
								return this;
							};
							q.prototype.getForceFragmentSeparator = function() {
								"use strict";
								return this.$2;
							};
							q.prototype.setIsGeneric = function(a) {
								"use strict";
								this.$4 = a;
								return this;
							};
							q.prototype.getIsGeneric = function() {
								"use strict";
								return this.$4;
							};
							q.prototype.isEmpty = function() {
								"use strict";
								return !(
									this.getPath() ||
									this.getProtocol() ||
									this.getDomain() ||
									this.getPort() ||
									ES("Object", "keys", !1, this.getQueryData()).length > 0 ||
									this.getFragment()
								);
							};
							q.prototype.toString = function() {
								"use strict";
								var a = this;
								for (var b = 0; b < p.length; b++) a = p[b](a);
								return a.$10();
							};
							q.prototype.$10 = function() {
								"use strict";
								__p && __p();
								var a = "",
									b = this.getProtocol();
								b && (a += b + ":" + (this.getIsGeneric() ? "" : "//"));
								b = this.getDomain();
								b && (a += b);
								b = this.getPort();
								b && (a += ":" + b);
								b = this.getPath();
								b ? (a += b) : a && (a += "/");
								b = this.$9.serialize(this.getQueryData());
								b && (a += "?" + b);
								b = this.getFragment();
								b
									? (a += "#" + b)
									: this.getForceFragmentSeparator() && (a += "#");
								return a;
							};
							q.registerFilter = function(a) {
								"use strict";
								p.push(a);
							};
							q.prototype.getOrigin = function() {
								"use strict";
								var a = this.getPort();
								return (
									this.getProtocol() +
									"://" +
									this.getDomain() +
									(a ? ":" + a : "")
								);
							};
							q.prototype.getQualifiedURIBase = function() {
								"use strict";
								return new q(this, this.$9).qualify();
							};
							q.prototype.qualify = function() {
								"use strict";
								if (!this.getDomain()) {
									var a = new q(window.location.href, this.$9);
									this.setProtocol(a.getProtocol())
										.setDomain(a.getDomain())
										.setPort(a.getPort());
								}
								return this;
							};
							q.prototype.setSubdomain = function(a) {
								"use strict";
								var b = this.qualify().getDomain();
								return this.setDomain(l(b, a));
							};
							q.prototype.getSubdomain = function() {
								"use strict";
								if (!this.getDomain()) return "";
								var a = this.getDomain().split(".");
								if (a.length <= 2) return "";
								else return a[0];
							};
							e.exports = q;
						},
						null
					);
					__d(
						"sdk.URI",
						["Assert", "QueryString", "URIBase"],
						function(a, b, c, d, e, f, g, h, i) {
							__p && __p();
							var j,
								k = /\.facebook\.com$/,
								l = {
									serialize: function(a) {
										return a ? h.encode(a) : "";
									},
									deserialize: function(a) {
										return a ? h.decode(a) : {};
									}
								};
							b = babelHelpers.inherits(a, i);
							j = b && b.prototype;
							function a(a) {
								"use strict";
								g.isString(a, "The passed argument was of invalid type."),
									j.constructor.call(this, a, l);
							}
							a.prototype.isFacebookURI = function() {
								"use strict";
								return k.test(this.getDomain());
							};
							a.prototype.valueOf = function() {
								"use strict";
								return this.toString();
							};
							a.isValidURI = function(a) {
								"use strict";
								return i.isValid(a, l);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"Queue",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = {};
							function h(a) {
								"use strict";
								(this._opts = babelHelpers["extends"](
									{ interval: 0, processor: null },
									a
								)),
									(this._queue = []),
									(this._stopped = !0);
							}
							h.prototype._dispatch = function(a) {
								"use strict";
								__p && __p();
								if (this._stopped || this._queue.length === 0) return;
								if (!this._opts.processor) {
									this._stopped = !0;
									throw new Error("No processor available");
								}
								if (this._opts.interval)
									this._opts.processor.call(this, this._queue.shift()),
										(this._timeout = setTimeout(
											ES(this._dispatch, "bind", !0, this),
											this._opts.interval
										));
								else
									while (this._queue.length)
										this._opts.processor.call(this, this._queue.shift());
							};
							h.prototype.enqueue = function(a) {
								"use strict";
								this._opts.processor && !this._stopped
									? this._opts.processor.call(this, a)
									: this._queue.push(a);
								return this;
							};
							h.prototype.start = function(a) {
								"use strict";
								a && (this._opts.processor = a);
								this._stopped = !1;
								this._dispatch();
								return this;
							};
							h.prototype.isStarted = function() {
								"use strict";
								return !this._stopped;
							};
							h.prototype.dispatch = function() {
								"use strict";
								this._dispatch(!0);
							};
							h.prototype.stop = function(a) {
								"use strict";
								this._stopped = !0;
								a && clearTimeout(this._timeout);
								return this;
							};
							h.prototype.merge = function(a, b) {
								"use strict";
								this._queue[b ? "unshift" : "push"].apply(
									this._queue,
									a._queue
								);
								a._queue = [];
								this._dispatch();
								return this;
							};
							h.prototype.getLength = function() {
								"use strict";
								return this._queue.length;
							};
							h.get = function(a, b) {
								"use strict";
								var c;
								a in g ? (c = g[a]) : (c = g[a] = new h(b));
								return c;
							};
							h.exists = function(a) {
								"use strict";
								return a in g;
							};
							h.remove = function(a) {
								"use strict";
								return delete g[a];
							};
							e.exports = h;
						},
						null
					);
					__d(
						"UserAgent_DEPRECATED",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = !1,
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
								v;
							function w() {
								__p && __p();
								if (g) return;
								g = !0;
								var a = navigator.userAgent,
									b = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(
										a
									),
									c = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
								s = /\b(iPhone|iP[ao]d)/.exec(a);
								t = /\b(iP[ao]d)/.exec(a);
								q = /Android/i.exec(a);
								u = /FBAN\/\w+;/i.exec(a);
								v = /Mobile/i.exec(a);
								r = !!/Win64/.exec(a);
								if (b) {
									h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN;
									h &&
										document &&
										document.documentMode &&
										(h = document.documentMode);
									var d = /(?:Trident\/(\d+.\d+))/.exec(a);
									m = d ? parseFloat(d[1]) + 4 : h;
									i = b[2] ? parseFloat(b[2]) : NaN;
									j = b[3] ? parseFloat(b[3]) : NaN;
									k = b[4] ? parseFloat(b[4]) : NaN;
									k
										? ((b = /(?:Chrome\/(\d+\.\d+))/.exec(a)),
										  (l = b && b[1] ? parseFloat(b[1]) : NaN))
										: (l = NaN);
								} else h = i = j = l = k = NaN;
								if (c) {
									if (c[1]) {
										d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
										n = d ? parseFloat(d[1].replace("_", ".")) : !0;
									} else n = !1;
									o = !!c[2];
									p = !!c[3];
								} else n = o = p = !1;
							}
							var x = {
								ie: function() {
									return w() || h;
								},
								ieCompatibilityMode: function() {
									return w() || m > h;
								},
								ie64: function() {
									return x.ie() && r;
								},
								firefox: function() {
									return w() || i;
								},
								opera: function() {
									return w() || j;
								},
								webkit: function() {
									return w() || k;
								},
								safari: function() {
									return x.webkit();
								},
								chrome: function() {
									return w() || l;
								},
								windows: function() {
									return w() || o;
								},
								osx: function() {
									return w() || n;
								},
								linux: function() {
									return w() || p;
								},
								iphone: function() {
									return w() || s;
								},
								mobile: function() {
									return w() || s || t || q || v;
								},
								nativeApp: function() {
									return w() || u;
								},
								android: function() {
									return w() || q;
								},
								ipad: function() {
									return w() || t;
								}
							};
							e.exports = x;
						},
						null
					);
					__d(
						"htmlSpecialChars",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = /&/g,
								h = /</g,
								i = />/g,
								j = /\"/g,
								k = /\'/g;
							function a(a) {
								if (typeof a === "undefined" || a === null || !a.toString)
									return "";
								if (a === !1) return "0";
								else if (a === !0) return "1";
								return a
									.toString()
									.replace(g, "&amp;")
									.replace(j, "&quot;")
									.replace(k, "&#039;")
									.replace(h, "&lt;")
									.replace(i, "&gt;");
							}
							e.exports = a;
						},
						null
					);
					__d(
						"emptyFunction",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							function a(a) {
								return function() {
									return a;
								};
							}
							b = function() {};
							b.thatReturns = a;
							b.thatReturnsFalse = a(!1);
							b.thatReturnsTrue = a(!0);
							b.thatReturnsNull = a(null);
							b.thatReturnsThis = function() {
								return this;
							};
							b.thatReturnsArgument = function(a) {
								return a;
							};
							e.exports = b;
						},
						null
					);
					__d(
						"sdk.DOMEventListener",
						["emptyFunction", "invariant", "wrapFunction"],
						function(a, b, c, d, e, f, g, h, i) {
							__p && __p();
							var j = !1;
							try {
								a = Object.defineProperty({}, "passive", {
									get: function() {
										j = !0;
									}
								});
								window.addEventListener("test", null, a);
							} catch (a) {}
							var k, l;
							window.addEventListener
								? ((k = function(a, b, c, d) {
										d === void 0 && (d = !1),
											(c.wrapper = i(c, "entry", "DOMEventListener.add " + b)),
											a.addEventListener(b, c.wrapper, j ? d : !1);
								  }),
								  (l = function(a, b, c, d) {
										d === void 0 && (d = !1),
											a.removeEventListener(b, c.wrapper, j ? d : !1);
								  }))
								: window.attachEvent
									? ((k = function(a, b, c) {
											(c.wrapper = i(c, "entry", "DOMEventListener.add " + b)),
												a.attachEvent || h(0, undefined),
												a.attachEvent("on" + b, c.wrapper);
									  }),
									  (l = function(a, b, c) {
											a.detachEvent || h(0, undefined),
												a.detachEvent("on" + b, c.wrapper);
									  }))
									: (l = k = g);
							b = {
								add: function(a, b, c, d) {
									d === void 0 && (d = !1);
									k(a, b, c, d);
									return {
										remove: function() {
											l(a, b, c, d);
										}
									};
								},
								remove: l
							};
							e.exports = b;
						},
						null
					);
					__d(
						"Flash",
						[
							"DOMWrapper",
							"QueryString",
							"UserAgent_DEPRECATED",
							"guid",
							"htmlSpecialChars",
							"sdk.DOMEventListener"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							__p && __p();
							var m = {},
								n,
								o = g.getWindow().document;
							function p(a) {
								var b = o.getElementById(a);
								b && b.parentNode.removeChild(b);
								delete m[a];
							}
							function q() {
								for (var a in m)
									Object.prototype.hasOwnProperty.call(m, a) && p(a);
							}
							function r(a) {
								return a.replace(/\d+/g, function(a) {
									return "000".substring(a.length) + a;
								});
							}
							function s(a) {
								n || (i.ie() >= 9 && l.add(window, "unload", q), (n = !0)),
									(m[a] = a);
							}
							var t = {
								embed: function(a, b, c, d) {
									__p && __p();
									var e = j();
									a = k(a).replace(/&amp;/g, "&");
									c = babelHelpers["extends"](
										{ allowscriptaccess: "always", flashvars: d, movie: a },
										c
									);
									typeof c.flashvars === "object" &&
										(c.flashvars = h.encode(c.flashvars));
									d = [];
									for (var f in c)
										Object.prototype.hasOwnProperty.call(c, f) &&
											c[f] &&
											d.push(
												'<param name="' + k(f) + '" value="' + k(c[f]) + '">'
											);
									b = b.appendChild(o.createElement("span"));
									a =
										"<object " +
										(i.ie()
											? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '
											: 'type="application/x-shockwave-flash"') +
										'data="' +
										a +
										'" ' +
										(c.height ? 'height="' + c.height + '" ' : "") +
										(c.width ? 'width="' + c.width + '" ' : "") +
										'id="' +
										e +
										'">' +
										d.join("") +
										"</object>";
									b.innerHTML = a;
									c = b.firstChild;
									s(e);
									return c;
								},
								remove: p,
								getVersion: function() {
									var a = "Shockwave Flash",
										b = "application/x-shockwave-flash",
										c = "ShockwaveFlash.ShockwaveFlash",
										d;
									if (
										navigator.plugins &&
										typeof navigator.plugins[a] === "object"
									) {
										a = navigator.plugins[a].description;
										a &&
											navigator.mimeTypes &&
											navigator.mimeTypes[b] &&
											navigator.mimeTypes[b].enabledPlugin &&
											(d = a.match(/\d+/g));
									}
									if (!d)
										try {
											(d = new ActiveXObject(c)
												.GetVariable("$version")
												.match(/(\d+),(\d+),(\d+),(\d+)/)),
												(d = Array.prototype.slice.call(d, 1));
										} catch (a) {}
									return d;
								},
								getVersionString: function() {
									var a = t.getVersion();
									return a ? a.join(".") : "";
								},
								checkMinVersion: function(a) {
									var b = t.getVersion();
									return !b ? !1 : r(b.join(".")) >= r(a);
								},
								isAvailable: function() {
									return !!t.getVersion();
								}
							};
							e.exports = t;
						},
						null
					);
					__d(
						"XDM",
						[
							"DOMWrapper",
							"Flash",
							"GlobalCallback",
							"Log",
							"UserAgent_DEPRECATED",
							"emptyFunction",
							"guid",
							"sdk.DOMEventListener",
							"wrapFunction"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
							__p && __p();
							var p = {},
								q = { transports: [] },
								r = g.getWindow();
							function s(a) {
								__p && __p();
								var b = {},
									c = a.length,
									d = q.transports;
								while (c--) b[a[c]] = 1;
								c = d.length;
								while (c--) {
									a = d[c];
									var e = p[a];
									if (!b[a] && e.isAvailable()) return a;
								}
							}
							a = {
								register: function(a, b) {
									j.debug("Registering %s as XDM provider", a),
										q.transports.push(a),
										(p[a] = b);
								},
								create: function(a) {
									__p && __p();
									if (!a.whenReady && !a.onMessage) {
										j.error(
											"An instance without whenReady or onMessage makes no sense"
										);
										throw new Error(
											"An instance without whenReady or onMessage makes no sense"
										);
									}
									a.channel ||
										(j.warn("Missing channel name, selecting at random"),
										(a.channel = m()));
									a.whenReady || (a.whenReady = l);
									a.onMessage || (a.onMessage = l);
									var b = a.transport || s(a.blacklist || []),
										c = p[b];
									if (c && c.isAvailable()) {
										j.debug("%s is available", b);
										c.init(a);
										return b;
									}
								}
							};
							a.register(
								"flash",
								(function() {
									__p && __p();
									var a = !1,
										b,
										c = !1,
										d = 15e3,
										e;
									return {
										isAvailable: function() {
											return h.checkMinVersion("8.0.24");
										},
										init: function(f) {
											__p && __p();
											j.debug("init flash: " + f.channel);
											var g = {
												send: function(a, c, d, e) {
													j.debug("sending to: %s (%s)", c, e),
														b.postMessage(a, c, e);
												}
											};
											if (a) {
												f.whenReady(g);
												return;
											}
											var k = f.root.appendChild(
													r.document.createElement("div")
												),
												l = i.create(function() {
													i.remove(l);
													clearTimeout(e);
													j.info("xdm.swf called the callback");
													var a = i.create(function(a, b) {
														(a = decodeURIComponent(a)),
															(b = decodeURIComponent(b)),
															j.debug("received message %s from %s", a, b),
															f.onMessage(a, b);
													}, "xdm.swf:onMessage");
													b.init(f.channel, a);
													f.whenReady(g);
												}, "xdm.swf:load");
											b = h.embed(f.flashUrl, k, null, {
												protocol: location.protocol.replace(":", ""),
												host: location.host,
												callback: l,
												log: c
											});
											e = setTimeout(function() {
												j.warn(
													"The Flash component did not load within %s ms - verify that the container is not set to hidden or invisible using CSS as this will cause some browsers to not load the components",
													d
												);
											}, d);
											a = !0;
										}
									};
								})()
							);
							var t = /\.facebook\.com(\/|$)/;
							a.register(
								"postmessage",
								(function() {
									__p && __p();
									var a = !1;
									return {
										isAvailable: function() {
											return !!r.postMessage;
										},
										init: function(b) {
											__p && __p();
											j.debug("init postMessage: " + b.channel);
											var c = "_FB_" + b.channel,
												d = {
													send: function(a, b, c, d) {
														if (r === c) {
															j.error(
																"Invalid windowref, equal to window (self)"
															);
															throw new Error();
														}
														j.debug("sending to: %s (%s)", b, d);
														var e = function() {
															c.postMessage("_FB_" + d + a, b);
														};
														k.ie() == 8 || k.ieCompatibilityMode()
															? setTimeout(e, 0)
															: e();
													}
												};
											if (a) {
												b.whenReady(d);
												return;
											}
											n.add(
												r,
												"message",
												o(
													function(event) {
														__p && __p();
														var a = event.data,
															d = event.origin || "native";
														if (!/^(https?:\/\/|native$)/.test(d)) {
															j.debug(
																"Received message from invalid origin type: %s",
																d
															);
															return;
														}
														if (
															d !== "native" &&
															!(
																t.test(location.hostname) ||
																t.test(event.origin)
															)
														)
															return;
														if (typeof a !== "string") {
															j.warn(
																"Received message of type %s from %s, expected a string",
																typeof a,
																d
															);
															return;
														}
														j.debug("received message %s from %s", a, d);
														a.substring(0, c.length) == c &&
															(a = a.substring(c.length));
														b.onMessage(a, d);
													},
													"entry",
													"onMessage"
												)
											);
											b.whenReady(d);
											a = !0;
										}
									};
								})()
							);
							e.exports = a;
						},
						null
					);
					__d(
						"isFacebookURI",
						[],
						function(a, b, c, d, e, f) {
							var g = null,
								h = ["http", "https"];
							function a(a) {
								g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
								if (a.isEmpty() && a.toString() !== "#") return !1;
								return !a.getDomain() && !a.getProtocol()
									? !0
									: ES(h, "indexOf", !0, a.getProtocol()) !== -1 &&
											g.test(a.getDomain());
							}
							a.setRegex = function(a) {
								g = a;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.Event",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = {
								SUBSCRIBE: "event.subscribe",
								UNSUBSCRIBE: "event.unsubscribe",
								subscribers: function() {
									this._subscribersMap || (this._subscribersMap = {});
									return this._subscribersMap;
								},
								subscribe: function(a, b) {
									var c = this.subscribers();
									!c[a]
										? (c[a] = [b])
										: ES(c[a], "indexOf", !0, b) == -1 && c[a].push(b);
									a != this.SUBSCRIBE &&
										a != this.UNSUBSCRIBE &&
										this.fire(this.SUBSCRIBE, a, c[a]);
								},
								unsubscribe: function(a, b) {
									var c = this.subscribers()[a];
									c &&
										ES(c, "forEach", !0, function(a, d) {
											a === b && c.splice(d, 1);
										});
									a != this.SUBSCRIBE &&
										a != this.UNSUBSCRIBE &&
										this.fire(this.UNSUBSCRIBE, a, c);
								},
								monitor: function(a, b) {
									if (!b()) {
										var c = this,
											d = function d() {
												b.apply(b, arguments) && c.unsubscribe(a, d);
											};
										this.subscribe(a, d);
									}
								},
								clear: function(a) {
									delete this.subscribers()[a];
								},
								fire: function(a) {
									for (
										var b = arguments.length,
											c = new Array(b > 1 ? b - 1 : 0),
											d = 1;
										d < b;
										d++
									)
										c[d - 1] = arguments[d];
									var e = this.subscribers()[a];
									e &&
										ES(e, "forEach", !0, function(a) {
											a && a.apply(this, c);
										});
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"JSONRPC",
						["Log"],
						function(a, b, c, d, e, f, g) {
							__p && __p();
							function a(a) {
								"use strict";
								(this.$1 = 0),
									(this.$2 = {}),
									(this.remote = ES(
										function(a) {
											this.$3 = a;
											return this.remote;
										},
										"bind",
										!0,
										this
									)),
									(this.local = {}),
									(this.$4 = a);
							}
							a.prototype.stub = function(a) {
								"use strict";
								this.remote[a] = ES(
									function() {
										var b = { jsonrpc: "2.0", method: a };
										for (
											var c = arguments.length, d = new Array(c), e = 0;
											e < c;
											e++
										)
											d[e] = arguments[e];
										typeof d[d.length - 1] === "function" &&
											((b.id = ++this.$1), (this.$2[b.id] = d.pop()));
										b.params = d;
										this.$4(
											ES("JSON", "stringify", !1, b),
											this.$3 || { method: a }
										);
									},
									"bind",
									!0,
									this
								);
							};
							a.prototype.read = function(a, b) {
								"use strict";
								__p && __p();
								a = ES("JSON", "parse", !1, a);
								var c = a.id;
								if (!a.method) {
									if (!this.$2[c]) {
										g.warn("Could not find callback %s", c);
										return;
									}
									var d = this.$2[c];
									delete this.$2[c];
									delete a.id;
									delete a.jsonrpc;
									d(a);
									return;
								}
								var e = this;
								d = this.local[a.method];
								var f;
								c
									? (f = function(a, d) {
											var f = { jsonrpc: "2.0", id: c };
											f[a] = d;
											setTimeout(function() {
												e.$4(ES("JSON", "stringify", !1, f), b);
											}, 0);
									  })
									: (f = function() {});
								if (!d) {
									g.error('Method "%s" has not been defined', a.method);
									f("error", {
										code: -32601,
										message: "Method not found",
										data: a.method
									});
									return;
								}
								a.params.push(ES(f, "bind", !0, null, "result"));
								a.params.push(ES(f, "bind", !0, null, "error"));
								try {
									d = d.apply(b || null, a.params);
									typeof d !== "undefined" && f("result", d);
								} catch (b) {
									g.error(
										"Invokation of RPC method %s resulted in the error: %s",
										a.method,
										b.message
									),
										f("error", {
											code: -32603,
											message: "Internal error",
											data: b.message
										});
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.RPC",
						["Assert", "JSONRPC", "Queue"],
						function(a, b, c, d, e, f, g, h, i) {
							var j = new i(),
								k = new h(function(a) {
									j.enqueue(a);
								});
							a = {
								local: k.local,
								remote: k.remote,
								stub: ES(k.stub, "bind", !0, k),
								setInQueue: function(a) {
									g.isInstanceOf(i, a),
										a.start(function(a) {
											k.read(a);
										});
								},
								getOutQueue: function() {
									return j;
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"hasNamePropertyBug",
						["UserAgent_DEPRECATED", "guid"],
						function(a, b, c, d, e, f, g, h) {
							__p && __p();
							var i = g.ie() ? undefined : !1;
							function j() {
								var a = document.createElement("form"),
									b = a.appendChild(document.createElement("input"));
								b.name = h();
								i = b !== a.elements[b.name];
								a = b = null;
								return i;
							}
							function a() {
								return typeof i === "undefined" ? j() : i;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"isNumberLike",
						[],
						function(a, b, c, d, e, f) {
							function a(a) {
								return !isNaN(parseFloat(a)) && isFinite(a);
							}
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.createIframe",
						[
							"getBlankIframeSrc",
							"guid",
							"hasNamePropertyBug",
							"isNumberLike",
							"sdk.DOMEventListener"
						],
						function(a, b, c, d, e, f, g, h, i, j, k) {
							__p && __p();
							function a(a) {
								__p && __p();
								a = ES("Object", "assign", !1, {}, a);
								var b,
									c = a.name || h(),
									d = a.root,
									e = a.style || { border: "none" },
									f = a.url,
									l = a.onload,
									m = a.onerror;
								i()
									? (b = document.createElement('<iframe name="' + c + '"/>'))
									: ((b = document.createElement("iframe")), (b.name = c));
								delete a.style;
								delete a.name;
								delete a.url;
								delete a.root;
								delete a.onload;
								delete a.onerror;
								c = ES(
									"Object",
									"assign",
									!1,
									{
										frameBorder: 0,
										allowTransparency: !0,
										allowFullscreen: !0,
										scrolling: "no",
										allow: "encrypted-media"
									},
									a
								);
								c.width && j(c.width) && (b.width = c.width + "px");
								c.height && j(c.height) && (b.height = c.height + "px");
								delete c.height;
								delete c.width;
								for (var n in c)
									Object.prototype.hasOwnProperty.call(c, n) &&
										b.setAttribute(n, c[n]);
								ES("Object", "assign", !1, b.style, e);
								b.src = g();
								d.appendChild(b);
								if (l)
									var o = k.add(b, "load", function() {
										o.remove(), l();
									});
								if (m)
									var p = k.add(b, "error", function() {
										p.remove(), m();
									});
								b.src = f;
								return b;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.FeatureFunctor",
						["invariant"],
						function(a, b, c, d, e, f, g) {
							__p && __p();
							function h(a, b, c) {
								if (a.features && b in a.features) {
									a = a.features[b];
									if (typeof a === "object" && typeof a.rate === "number")
										if (a.rate && Math.random() * 100 <= a.rate)
											return a.value || !0;
										else return a.value ? null : !1;
									else return a;
								}
								return c;
							}
							function a(a) {
								return function() {
									for (
										var b = arguments.length, c = new Array(b), d = 0;
										d < b;
										d++
									)
										c[d] = arguments[d];
									c.length >= 2 || g(0, undefined);
									var e = c[0],
										f = c[1];
									return h(a, e, f);
								};
							}
							e.exports = { create: a };
						},
						null
					);
					__d(
						"sdk.feature",
						["JSSDKConfig", "sdk.FeatureFunctor"],
						function(a, b, c, d, e, f, g, h) {
							e.exports = h.create(g);
						},
						null
					);
					__d(
						"sdk.XD",
						[
							"JSSDKXDConfig",
							"Log",
							"QueryString",
							"Queue",
							"UrlMap",
							"XDM",
							"guid",
							"isFacebookURI",
							"sdk.Content",
							"sdk.createIframe",
							"sdk.Event",
							"sdk.feature",
							"sdk.RPC",
							"sdk.Runtime",
							"sdk.Scribe",
							"sdk.URI"
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
							v
						) {
							__p && __p();
							var w = new j(),
								x = new j(),
								y = m(),
								z = "https";
							a = g.useCdn ? "cdn" : "www";
							b = r("use_bundle", !1) ? g.XdBundleUrl : g.XdUrl;
							var A = k.resolve(a) + b;
							c = function() {
								if ("origin" in location)
									if (location.origin && location.origin !== "null")
										return location.origin;
									else if (window !== window.parent)
										try {
											var a = parent.location.origin;
											if (a && a !== "null") return a;
										} catch (a) {}
								return location.protocol + "//" + location.host;
							};
							var B = m(),
								C = c(),
								D,
								E,
								F = !1,
								G = "Facebook Cross Domain Communication Frame",
								H = {},
								I = new j();
							s.setInQueue(I);
							function J(a) {
								h.info("Remote XD can talk to facebook.com (%s)", a),
									t.setEnvironment(
										a === "canvas"
											? t.ENVIRONMENTS.CANVAS
											: t.ENVIRONMENTS.PAGETAB
									);
							}
							function K(a, b) {
								__p && __p();
								if (!b) {
									h.error("No senderOrigin");
									throw new Error();
								}
								switch (a.xd_action) {
									case "proxy_ready":
										var c, d;
										c = x;
										d = E;
										t.setLoggedIntoFacebook(a.logged_in === "true");
										a.registered && (J(a.registered), (w = c.merge(w)));
										h.info(
											"Proxy ready, starting queue containing %s messages",
											c.getLength()
										);
										c.start(function(a) {
											D.send(
												typeof a === "string" ? a : i.encode(a),
												b,
												d.contentWindow,
												B + "_" + z
											);
										});
										break;
									case "plugin_ready":
										h.info("Plugin %s ready, protocol: %s", a.name, z);
										H[a.name] = { protocol: z };
										if (j.exists(a.name)) {
											c = j.get(a.name);
											h.debug(
												"Enqueuing %s messages for %s in %s",
												c.getLength(),
												a.name,
												z + "ProxyQueue"
											);
											x.merge(c);
										}
										break;
								}
								a.data && L(a.data, b);
							}
							function L(a, b) {
								__p && __p();
								if (b && b !== "native" && !n(new v(b))) return;
								if (typeof a === "string") {
									if (/^FB_RPC:/.test(a)) {
										I.enqueue(a.substring(7));
										return;
									}
									if (a.substring(0, 1) == "{")
										try {
											a = ES("JSON", "parse", !1, a);
										} catch (b) {
											h.warn("Failed to decode %s as JSON", a);
											return;
										}
									else a = i.decode(a);
								}
								b || (a.xd_sig == y && (b = a.xd_origin));
								if (a.xd_action) {
									K(a, b);
									return;
								}
								if (a.cb) {
									b = O._callbacks[a.cb];
									O._forever[a.cb] || delete O._callbacks[a.cb];
									b && b(a);
								}
							}
							function M(a, b) {
								if (a == "facebook")
									(b.relation = "parent.parent"), w.enqueue(b);
								else {
									b.relation = 'parent.frames["' + a + '"]';
									var c = H[a];
									c
										? (h.debug(
												"Enqueuing message for plugin %s in %s",
												a,
												c.protocol + "ProxyQueue"
										  ),
										  x.enqueue(b))
										: (h.debug("Buffering message for plugin %s", a),
										  j.get(a).enqueue(b));
								}
							}
							s.getOutQueue().start(function(a) {
								M("facebook", "FB_RPC:" + a);
							});
							function N(a) {
								if (F) return;
								var b = o.appendHidden(document.createElement("div")),
									c = l.create({
										blacklist: null,
										root: b,
										channel: B,
										flashUrl: g.Flash.path,
										whenReady: function(d) {
											D = d;
											d = { channel: B, origin: C, transport: c, xd_name: a };
											d = "#" + i.encode(d);
											E = p({
												url: A + d,
												name: "fb_xdm_frame_https",
												id: "fb_xdm_frame_https",
												root: b,
												"aria-hidden": !0,
												title: G,
												tabindex: -1
											});
										},
										onMessage: L
									});
								c ||
									u.log("jssdk_error", {
										appId: t.getClientID(),
										error: "XD_TRANSPORT",
										extra: { message: "Failed to create a valid transport" }
									});
								F = !0;
							}
							var O = {
								rpc: s,
								_callbacks: {},
								_forever: {},
								_channel: B,
								_origin: C,
								onMessage: L,
								recv: L,
								init: N,
								sendToFacebook: M,
								inform: function(a, b, c, d) {
									M("facebook", {
										method: a,
										params: ES("JSON", "stringify", !1, b || {}),
										behavior: d || "p",
										relation: c
									});
								},
								handler: function(a, b, c, d) {
									a =
										"#" +
										i.encode({
											cb: this.registerCallback(a, c, d),
											origin: C + "/" + B,
											domain: location.hostname,
											relation: b || "opener"
										});
									return A + a;
								},
								registerCallback: function(a, b, c) {
									c = c || m();
									b && (O._forever[c] = !0);
									O._callbacks[c] = a;
									return c;
								},
								getXDArbiterURL: function() {
									return A;
								}
							};
							q.subscribe("init:post", function(a) {
								N(a.xdProxyName);
								var b = r("xd_timeout", !1);
								b &&
									setTimeout(function() {
										var a = E && !!E == x.isStarted();
										a ||
											u.log("jssdk_error", {
												appId: t.getClientID(),
												error: "XD_INITIALIZATION",
												extra: {
													message: "Failed to initialize in " + b + "ms"
												}
											});
									}, b);
							});
							e.exports = O;
						},
						null
					);
					__d(
						"sdk.getContextType",
						["sdk.Runtime", "sdk.UA"],
						function(a, b, c, d, e, f, g, h) {
							function a() {
								if (h.nativeApp()) return 3;
								if (h.mobile()) return 2;
								return g.isEnvironment(g.ENVIRONMENTS.CANVAS) ? 5 : 1;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.Auth",
						[
							"DOMWrapper",
							"Log",
							"OAuthControllerParameterName",
							"ObservableMixin",
							"UrlMap",
							"WebStorage",
							"guid",
							"sdk.Cookie",
							"sdk.createIframe",
							"sdk.feature",
							"sdk.getContextType",
							"sdk.Impressions",
							"sdk.Runtime",
							"sdk.Scribe",
							"sdk.SignedRequest",
							"sdk.URI",
							"sdk.XD"
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
							w
						) {
							__p && __p();
							var x = "fblst_",
								y = "fblo_",
								z = 365 * 24 * 60 * 60 * 1e3,
								A,
								B,
								C = new j();
							function D(a, b) {
								__p && __p();
								var c = s.getUserID(),
									d = "";
								if (a)
									if (a.userID) d = a.userID;
									else if (a.signedRequest) {
										var e = u.parse(a.signedRequest);
										e && e.user_id && (d = e.user_id);
									}
								e = s.getLoginStatus();
								var f =
										(e === "unknown" && a) ||
										(s.getUseCookie() && s.getCookieUserID() !== d),
									g = c && !a;
								c = a && c && c != d;
								var h = a != A;
								e = b != (e || "unknown");
								s.setLoginStatus(b);
								s.setAccessToken((a && a.accessToken) || null);
								s.setUserID(d);
								A = a;
								d = { authResponse: a, status: b };
								(g || c) && C.inform("logout", d);
								(f || c) && C.inform("login", d);
								h && C.inform("authresponse.change", d);
								e && C.inform("status.change", d);
								return d;
							}
							function E() {
								return A;
							}
							function F(a, b, c) {
								__p && __p();
								return function(d) {
									__p && __p();
									var e = !1;
									if (d && d.access_token) {
										var f = u.parse(d.signed_request);
										b = {
											accessToken: d.access_token,
											userID: f.user_id,
											expiresIn: parseInt(d.expires_in, 10),
											signedRequest: d.signed_request
										};
										d.granted_scopes &&
											(b = babelHelpers["extends"]({}, b, {
												grantedScopes: d.granted_scopes
											}));
										d.reauthorize_required_in &&
											(b = babelHelpers["extends"]({}, b, {
												reauthorize_required_in: parseInt(
													d.reauthorize_required_in,
													10
												)
											}));
										d.enforce_https && (e = !0);
										if (
											s.getUseLocalStorage() &&
											location.protocol === "https:" &&
											d.long_lived_token
										) {
											f = l.getLocalStorage();
											f && f.setItem(x + s.getClientID(), d.long_lived_token);
										}
										if (s.getUseCookie()) {
											f =
												b.expiresIn === 0
													? 0
													: ES("Date", "now", !1) + b.expiresIn * 1e3;
											var g = n.getDomain();
											!g && d.base_domain && n.setDomain("." + d.base_domain);
											n.setSignedRequestCookie(d.signed_request, f, e);
										}
										G();
										g = "connected";
										D(b, g);
									} else
										(c === "logout" || c === "login_status") &&
											(d && d.error && d.error === "not_authorized"
												? ((g = "not_authorized"), D(null, g))
												: d && d.error && d.error === "authorization_expired"
													? ((g = "authorization_expired"), D(null, g))
													: ((g = "unknown"), D(null, g)),
											s.getUseCookie() && n.clearSignedRequestCookie(),
											c === "logout" &&
												(H(),
												t.log("jssdk_error", {
													appId: s.getClientID(),
													error: "PLATFORM_AUTH_LOGOUT",
													extra: { args: { fblo: !0 } }
												})));
									if (a) {
										f = { authResponse: b, status: s.getLoginStatus() };
										a(f);
									}
									return b;
								};
							}
							function G() {
								n.setRaw(y, "", 0, !1);
							}
							function H() {
								n.setRaw(y, "y", ES("Date", "now", !1) + z, !1);
							}
							function I(a) {
								__p && __p();
								var b,
									c = ES("Date", "now", !1);
								B && (clearTimeout(B), (B = null));
								var d = n.getRaw(y) === "y";
								if (d) {
									d = "unknown";
									D(null, d);
									a && a({ authResponse: null, status: d });
									return;
								}
								var e = F(a, A, "login_status");
								d = new v(k.resolve("www") + "/connect/ping")
									.addQueryData(i.CLIENT_ID, s.getClientID())
									.addQueryData(i.RESPONSE_TYPE, "token,signed_request")
									.addQueryData(i.DOMAIN, location.hostname)
									.addQueryData(i.ORIGIN, q())
									.addQueryData(
										i.REDIRECT_URI,
										w.handler(function(a) {
											if (p("e2e_ping_tracking", !0)) {
												var d = {
													init: c,
													close: ES("Date", "now", !1),
													method: "ping"
												};
												h.debug("e2e: %s", ES("JSON", "stringify", !1, d));
												r.log(114, { payload: d });
											}
											b.parentNode.removeChild(b);
											e(a) &&
												(B = setTimeout(function() {
													I(function() {});
												}, 12e5));
										}, "parent")
									)
									.addQueryData(i.SDK, "joey")
									.addQueryData(
										i.VERSION,
										s.getIsVersioned() ? s.getVersion() : null
									);
								if (window.location.ancestorOrigins) {
									a = window.location.ancestorOrigins;
									if (a.length > 0) {
										var f = "";
										for (var j = 0; j < a.length; j++) (f += a[j]), (f += ",");
										d.addQueryData(i.ANCESTOR_ORIGINS, f.slice(0, -1));
									}
								}
								b = o({
									root: g.getRoot(),
									name: m(),
									url: d.toString(),
									style: { display: "none" }
								});
							}
							var J;
							function a(a, b) {
								__p && __p();
								if (!s.getClientID()) {
									h.warn(
										"FB.getLoginStatus() called before calling FB.init()."
									);
									return;
								}
								if (a)
									if (!b && J === "loaded") {
										var c = { authResponse: E(), status: s.getLoginStatus() };
										a(c);
										return;
									} else C.subscribe("FB.loginStatus", a);
								if (!b && J === "loading") return;
								J = "loading";
								c = function(a) {
									(J = "loaded"),
										C.inform("FB.loginStatus", a),
										C.clearSubscribers("FB.loginStatus");
								};
								I(c);
							}
							ES("Object", "assign", !1, C, {
								removeLogoutState: G,
								getLoginStatus: a,
								fetchLoginStatus: I,
								setAuthResponse: D,
								getAuthResponse: E,
								parseSignedRequest: u.parse,
								xdResponseWrapper: F
							});
							e.exports = C;
						},
						null
					);
					__d(
						"sdk.DOM",
						["Assert", "sdk.domReady", "sdk.UA"],
						function(a, b, c, d, e, f, g, h, i) {
							__p && __p();
							var j = {};
							function k(a, b) {
								a =
									a.getAttribute(b) ||
									a.getAttribute(b.replace(/_/g, "-")) ||
									a.getAttribute(b.replace(/-/g, "_")) ||
									a.getAttribute(b.replace(/-/g, "")) ||
									a.getAttribute(b.replace(/_/g, "")) ||
									a.getAttribute("data-" + b) ||
									a.getAttribute("data-" + b.replace(/_/g, "-")) ||
									a.getAttribute("data-" + b.replace(/-/g, "_")) ||
									a.getAttribute("data-" + b.replace(/-/g, "")) ||
									a.getAttribute("data-" + b.replace(/_/g, ""));
								return a ? String(a) : null;
							}
							function a(a, b) {
								a = k(a, b);
								return a ? /^(true|1|yes|on)$/.test(a) : null;
							}
							function l(a, b) {
								g.isTruthy(a, "element not specified");
								g.isString(b);
								try {
									return String(a[b]);
								} catch (a) {
									throw new Error(
										"Could not read property " + b + " : " + a.message
									);
								}
							}
							function b(a, b) {
								g.isTruthy(a, "element not specified");
								g.isString(b);
								try {
									a.innerHTML = b;
								} catch (a) {
									throw new Error("Could not set innerHTML : " + a.message);
								}
							}
							function m(a, b) {
								g.isTruthy(a, "element not specified");
								g.isString(b);
								a = " " + l(a, "className") + " ";
								return ES(a, "indexOf", !0, " " + b + " ") >= 0;
							}
							function c(a, b) {
								g.isTruthy(a, "element not specified"),
									g.isString(b),
									m(a, b) || (a.className = l(a, "className") + " " + b);
							}
							function d(a, b) {
								g.isTruthy(a, "element not specified");
								g.isString(b);
								b = new RegExp("\\s*" + b, "g");
								a.className = ES(l(a, "className").replace(b, ""), "trim", !0);
							}
							function f(a, b, c) {
								__p && __p();
								g.isString(a);
								b = b || document.body;
								c = c || "*";
								if (b.querySelectorAll)
									return ES(
										"Array",
										"from",
										!1,
										b.querySelectorAll(c + "." + a)
									);
								b = b.getElementsByTagName(c);
								c = [];
								for (var d = 0, e = b.length; d < e; d++)
									m(b[d], a) && (c[c.length] = b[d]);
								return c;
							}
							function n(a, b) {
								g.isTruthy(a, "element not specified");
								g.isString(b);
								b = b.replace(/-(\w)/g, function(a, b) {
									return b.toUpperCase();
								});
								a =
									a.currentStyle ||
									document.defaultView.getComputedStyle(a, null);
								a = a[b];
								/backgroundPosition?/.test(b) &&
									/top|left/.test(a) &&
									(a = "0%");
								return a;
							}
							function o(a, b, c) {
								g.isTruthy(a, "element not specified"),
									g.isString(b),
									(b = b.replace(/-(\w)/g, function(a, b) {
										return b.toUpperCase();
									})),
									(a.style[b] = c);
							}
							function p(a, b) {
								__p && __p();
								var c = !0;
								for (var d = 0, e; (e = b[d++]); )
									e in j || ((c = !1), (j[e] = !0));
								if (c) return;
								if (i.ie() < 11)
									try {
										document.createStyleSheet().cssText = a;
									} catch (b) {
										document.styleSheets[0] &&
											(document.styleSheets[0].cssText += a);
									}
								else {
									e = document.createElement("style");
									e.type = "text/css";
									e.textContent = a;
									document.getElementsByTagName("head")[0].appendChild(e);
								}
							}
							function q(a) {
								if (!a || !a.parentNode) return null;
								else return a.parentNode.removeChild(a);
							}
							function r() {
								var a =
									document.documentElement &&
									document.compatMode == "CSS1Compat"
										? document.documentElement
										: document.body;
								return {
									scrollTop: a.scrollTop || document.body.scrollTop,
									scrollLeft: a.scrollLeft || document.body.scrollLeft,
									width: window.innerWidth ? window.innerWidth : a.clientWidth,
									height: window.innerHeight
										? window.innerHeight
										: a.clientHeight
								};
							}
							function s(a) {
								g.isTruthy(a, "element not specified");
								var b = 0,
									c = 0;
								do (b += a.offsetLeft), (c += a.offsetTop);
								while ((a = a.offsetParent));
								return { x: b, y: c };
							}
							c = {
								containsCss: m,
								addCss: c,
								removeCss: d,
								getByClass: f,
								getStyle: n,
								setStyle: o,
								getAttr: k,
								getBoolAttr: a,
								getProp: l,
								html: b,
								addCssRules: p,
								getViewportInfo: r,
								getPosition: s,
								ready: h,
								remove: q
							};
							e.exports = c;
						},
						null
					);
					__d(
						"normalizeError",
						["sdk.UA"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							a = function(a) {
								var b = {
									line: a.lineNumber || a.line,
									message: a.message,
									name: a.name,
									script: a.fileName || a.sourceURL || a.script,
									stack: a.stackTrace || a.stack
								};
								b._originalError = a;
								a = /([\w:\.\/]+\.js):(\d+)/.exec(a.stack);
								g.chrome() &&
									a &&
									((b.script = a[1]), (b.line = parseInt(a[2], 10)));
								for (var c in b) b[c] == null && delete b[c];
								return b;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.ErrorHandler",
						["ManagedError", "normalizeError", "wrapFunction"],
						function(a, b, c, d, e, f, g, h, i) {
							__p && __p();
							function a(a, b) {
								__p && __p();
								var c = "";
								function d(a) {
									var c = a._originalError;
									delete a._originalError;
									b(a);
									throw c;
								}
								function e(b, e) {
									__p && __p();
									return function() {
										__p && __p();
										if (!a) return b.apply(this, arguments);
										try {
											c = e;
											return b.apply(this, arguments);
										} catch (a) {
											if (a instanceof g) throw a;
											var f = h(a);
											f.entry = e;
											var i = ES(
												Array.prototype.slice.call(arguments),
												"map",
												!0,
												function(a) {
													var b = Object.prototype.toString.call(a);
													return /^\[object (String|Number|Boolean|Object|Date)\]$/.test(
														b
													)
														? a
														: a.toString();
												}
											);
											f.args = ES("JSON", "stringify", !1, i).substring(0, 200);
											d(f);
										} finally {
											c = "";
										}
									};
								}
								function f(a) {
									a.__wrapper ||
										(a.__wrapper = function() {
											try {
												return a.apply(this, arguments);
											} catch (a) {
												window.setTimeout(function() {
													throw a;
												}, 0);
												return !1;
											}
										});
									return a.__wrapper;
								}
								function j(a) {
									try {
										return a && a.callee && a.callee.caller
											? a.callee.caller.name
											: "";
									} catch (a) {
										return "";
									}
								}
								function k(a, b) {
									return function(d, e) {
										var f =
											b +
											":" +
											(c || "[global]") +
											":" +
											(d.name || "[anonymous]" + j(arguments));
										return a(i(d, "entry", f), e);
									};
								}
								a &&
									((setTimeout = k(setTimeout, "setTimeout")),
									(setInterval = k(setInterval, "setInterval")),
									i.setWrapper(e, "entry"));
								return { guard: e, unguard: f };
							}
							e.exports = { create: a };
						},
						null
					);
					__d(
						"sdk.ErrorHandling",
						["sdk.ErrorHandler", "sdk.feature", "sdk.Runtime", "sdk.Scribe"],
						function(a, b, c, d, e, f, g, h, i, j) {
							a = h("error_handling", !1);
							e.exports = g.create(a, function(a) {
								j.log("jssdk_error", {
									appId: i.getClientID(),
									error: a.name || a.message,
									extra: a
								});
							});
						},
						null
					);
					__d(
						"sdk.Insights",
						["sdk.Impressions"],
						function(a, b, c, d, e, f, g) {
							a = {
								TYPE: { NOTICE: "notice", WARNING: "warn", ERROR: "error" },
								CATEGORY: {
									DEPRECATED: "deprecated",
									APIERROR: "apierror",
									HTTP_DEPRECATED: "httpdeprecated"
								},
								log: function(a, b, c) {
									a = { source: "jssdk", type: a, category: b, payload: c };
									g.log(113, a);
								},
								impression: g.impression
							};
							e.exports = a;
						},
						null
					);
					__d(
						"FB",
						[
							"DOMWrapper",
							"GlobalCallback",
							"JSSDKConfig",
							"JSSDKCssConfig",
							"Log",
							"dotAccess",
							"sdk.Auth",
							"sdk.Content",
							"sdk.DOM",
							"sdk.domReady",
							"sdk.ErrorHandling",
							"sdk.feature",
							"sdk.Insights",
							"sdk.Runtime",
							"sdk.Scribe"
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
							var v,
								w,
								x = l(i, "api.mode"),
								y,
								z = r("https_only_enforce_starting", !1),
								A = r("https_only_learn_more", ""),
								B = {};
							v = window.FB = {};
							b = {};
							k.level = 0;
							h.setPrefix("FB.__globalCallbacks");
							var C = document.createElement("div");
							g.setRoot(C);
							p(function() {
								k.info("domReady"),
									n.appendHidden(C),
									j.rules && o.addCssRules(j.rules, j.components);
							});
							t.subscribe("AccessToken.change", function(a) {
								!a &&
									t.getLoginStatus() === "connected" &&
									m.getLoginStatus(null, !0);
							});
							l(i, "api.whitelist.length") &&
								((w = {}),
								ES(i.api.whitelist, "forEach", !0, function(a) {
									w[a] = 1;
								}));
							l(i, "api.https_only.length") &&
								((y = {}),
								ES(i.api.https_only, "forEach", !0, function(a) {
									y[a] = 1;
								}));
							function D(a, b, c, d) {
								__p && __p();
								var e;
								/^_/.test(c) ? (e = "hide") : w && !w[b] && (e = x);
								switch (e) {
									case "hide":
										return;
									case "stub":
										return function() {
											k.warn(
												"The method FB.%s has been removed from the JS SDK.",
												b
											);
										};
									default:
										return location.protocol !== "https:" &&
											y &&
											y[b] &&
											z &&
											z - ES("Date", "now", !1) <= 0
											? function() {
													k.log(
														"error",
														-1,
														"The method FB.%s can no longer be called from http pages. %s",
														b,
														A
													);
											  }
											: q.guard(function() {
													__p && __p();
													if (
														location.protocol !== "https:" &&
														y &&
														y[b] &&
														z
													) {
														var f =
															Math.floor((z - ES("Date", "now", !1)) / 864e5) +
															1;
														f > 30
															? k.log(
																	"warn",
																	-1,
																	"The method FB.%s will stop working when called from http pages in %s days.  Please update your site to use https for Facebook Login. %s",
																	b,
																	Math.floor(
																		(z - ES("Date", "now", !1)) / 864e5
																	),
																	A
															  )
															: k.log(
																	"error",
																	-1,
																	"The method FB.%s will stop working when called from http pages in %s days.  Please update your site to use https for Facebook Login. %s",
																	b,
																	Math.floor(
																		(z - ES("Date", "now", !1)) / 864e5
																	),
																	A
															  );
														r("https_only_scribe_logging", !0) &&
															!Object.prototype.hasOwnProperty.call(B, b) &&
															(u.log("jssdk_error", {
																appId: t.getClientID(),
																error: "HttpsOnly",
																extra: { message: b }
															}),
															(B[b] = !0));
													}
													e === "warn" &&
														(k.warn(
															"The method FB.%s is not officially supported by Facebook and access to it will soon be removed.",
															b
														),
														Object.prototype.hasOwnProperty.call(B, b) ||
															(s.log(
																s.TYPE.WARNING,
																s.CATEGORY.DEPRECATED,
																"FB." + b
															),
															u.log("jssdk_error", {
																appId: t.getClientID(),
																error: "Private method used",
																extra: { message: b }
															}),
															(B[b] = !0)));
													function g(a) {
														if (ES("Array", "isArray", !1, a))
															return ES(a, "map", !0, g);
														return a && typeof a === "object" && a.__wrapped
															? a.__wrapped
															: typeof a === "function" &&
															  /^function/.test(a.toString())
																? q.unguard(a)
																: a;
													}
													var h = ES(
															Array.prototype.slice.call(arguments),
															"map",
															!0,
															g
														),
														i = a.apply(d, h),
														j,
														l = !0;
													if (i && typeof i === "object") {
														j = ES("Object", "create", !1, i);
														j.__wrapped = i;
														for (var c in i) {
															var m = i[c];
															if (
																typeof m !== "function" ||
																c === "constructor"
															)
																continue;
															l = !1;
															j[c] = D(m, b + ":" + c, c, i);
														}
													}
													return !l ? j : l ? i : j;
											  }, b);
								}
							}
							function a(a, b) {
								var c = a ? l(v, a, !0) : v;
								ES(ES("Object", "keys", !1, b), "forEach", !0, function(d) {
									var e = b[d];
									if (typeof e === "function") {
										var f = (a ? a + "." : "") + d,
											g = D(e, f, d, b);
										g && (c[d] = g);
									} else (typeof e === "object" || typeof e === "number") && ((f = (a ? a + "." : "") + d), w && w[f] && (c[d] = e));
								});
							}
							ES("Object", "assign", !1, b, { provide: a });
							e.exports = b;
						},
						null
					);
					__d(
						"ArgumentError",
						["ManagedError"],
						function(a, b, c, d, e, f, g) {
							var h;
							b = babelHelpers.inherits(a, g);
							h = b && b.prototype;
							function a(a, b) {
								"use strict";
								h.constructor.call(this, a, b);
							}
							e.exports = a;
						},
						null
					);
					__d(
						"flattenObject",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							__p && __p();
							a = function(a) {
								var b = {};
								for (var c in a)
									if (Object.prototype.hasOwnProperty.call(a, c)) {
										var d = a[c];
										if (null === d || undefined === d) continue;
										else
											typeof d === "string"
												? (b[c] = d)
												: (b[c] = ES("JSON", "stringify", !1, d));
									}
								return b;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ApiClientUtils",
						[
							"ArgumentError",
							"Assert",
							"Log",
							"flattenObject",
							"sdk.URI",
							"sprintf"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							__p && __p();
							var m = { get: !0, post: !0, delete: !0, put: !0 };
							function a(a) {
								__p && __p();
								var b = a.shift();
								h.isString(b, "Invalid path");
								!/^https?/.test(b) && b.charAt(0) !== "/" && (b = "/" + b);
								var c = {};
								try {
									b = new k(b);
								} catch (a) {
									throw new g(a.message, a);
								}
								ES(a, "forEach", !0, function(a) {
									return (c[typeof a] = a);
								});
								a = (c.string || "get").toLowerCase();
								h.isTrue(
									Object.prototype.hasOwnProperty.call(m, a),
									l("Invalid method passed to ApiClient: %s", a)
								);
								var d = c["function"];
								d || i.warn("No callback passed to the ApiClient");
								c.object && b.addQueryData(j(c.object));
								var e = b.getQueryData();
								e.method = a;
								return { uri: b, callback: d, params: e };
							}
							e.exports = { parseCallDataFromArgs: a };
						},
						null
					);
					__d(
						"errorCode",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							function a(a) {
								throw new Error(
									'errorCode("' + a + '"): This should not happen. Oh noes!'
								);
							}
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
						"sdk.safelyParseResponse",
						["errorCode", "nullthrows"],
						function(a, b, c, d, e, f, g, h) {
							"use strict";
							__p && __p();
							b = function(a, b, c) {
								return i;
							};
							function a(a, c) {
								c === void 0 && (c = null);
								try {
									return a === null ? i : ES("JSON", "parse", !1, h(a));
								} catch (d) {
									return b(d, a, c);
								}
							}
							var i = {
								error: {
									code: 1,
									error_subcode: 1357046,
									message: "Received Invalid JSON reply.",
									type: "http"
								}
							};
							a.ERROR = i;
							a.setErrorHandler = function(a) {
								b = a;
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ApiBatcher",
						[
							"ApiClientUtils",
							"QueryString",
							"invariant",
							"sdk.safelyParseResponse"
						],
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							var k = 50,
								l = 105440539523;
							function m(a, b) {
								(this.$1 = []),
									(this.$2 = []),
									(this.$4 = null),
									(this.executeRequest = a),
									(this.$3 = b);
							}
							m.prototype.scheduleBatchCall = function() {
								for (
									var a = arguments.length, b = new Array(a), c = 0;
									c < a;
									c++
								)
									b[c] = arguments[c];
								var d = m.prepareBatchParams(b),
									e = d.body,
									f = d.callback,
									g = d.method,
									h = d.relative_url,
									i = { method: g, relative_url: h };
								e && (i.body = e);
								this.$1.push(i);
								this.$2.push(f);
								this.$1.length == k
									? (this.$4 && clearTimeout(this.$4), this.$5())
									: this.$4 ||
									  (this.$4 = setTimeout(
											ES(
												function() {
													this.$5();
												},
												"bind",
												!0,
												this
											),
											0
									  ));
							};
							m.prepareBatchParams = function(a) {
								a = g.parseCallDataFromArgs(a);
								var b = a.uri,
									c = a.callback;
								a = a.params.method;
								var d,
									e = b.removeQueryData("method").toString();
								a.toLowerCase() == "post" &&
									((d = h.encode(b.getQueryData())),
									(e = b.setQueryData({}).toString()));
								return { body: d, callback: c, method: a, relative_url: e };
							};
							m.prototype.$5 = function() {
								__p && __p();
								this.$1.length > 0 || i(0, undefined);
								this.$1.length === this.$2.length || i(0, undefined);
								var a = this.$1,
									b = this.$2;
								this.$1 = [];
								this.$2 = [];
								this.$4 = null;
								if (a.length === 1) {
									var c = a[0],
										d = b[0],
										e = c.body ? h.decode(c.body) : null;
									this.executeRequest(c.relative_url, c.method, e, d);
									return;
								}
								this.executeRequest(
									"/",
									"POST",
									{ batch: a, include_headers: !1, batch_app_id: this.$3 || l },
									function(a) {
										ES("Array", "isArray", !1, a)
											? ES(a, "forEach", !0, function(a, c) {
													b[c](j(a && a.body));
											  })
											: ES(b, "forEach", !0, function(a) {
													return a({
														error: { message: "Fatal: batch call failed." }
													});
											  });
									}
								);
							};
							e.exports = m;
						},
						null
					);
					__d(
						"RequestConstants",
						["errorCode"],
						function(a, b, c, d, e, f, g) {
							a = {
								code: 1,
								error_subcode: 1357045,
								message: "unknown error (empty response)",
								type: "http",
								status: 0
							};
							e.exports = { PARSE_ERROR_TEMPLATE: a };
						},
						null
					);
					__d(
						"CORSRequest",
						[
							"QueryString",
							"RequestConstants",
							"sdk.safelyParseResponse",
							"wrapFunction"
						],
						function(a, b, c, d, e, f, g, h, i, j) {
							__p && __p();
							function k(a, b) {
								__p && __p();
								if (!self.XMLHttpRequest) return null;
								var c = new XMLHttpRequest(),
									d = function() {};
								if ("withCredentials" in c)
									c.open(a, b, !0),
										c.setRequestHeader(
											"Content-type",
											"application/x-www-form-urlencoded"
										);
								else if (self.XDomainRequest) {
									c = new XDomainRequest();
									try {
										c.open(a, b), (c.onprogress = c.ontimeout = d);
									} catch (a) {
										return null;
									}
								} else return null;
								var e = {
										send: function(a) {
											c.send(a);
										}
									},
									f = j(
										function() {
											(f = d), "onload" in e && e.onload(c);
										},
										"entry",
										"XMLHttpRequest:load"
									),
									g = j(
										function() {
											(g = d), "onerror" in e && e.onerror(c);
										},
										"entry",
										"XMLHttpRequest:error"
									);
								c.onload = function() {
									f();
								};
								c.onerror = function() {
									g();
								};
								c.onreadystatechange = function() {
									c.readyState == 4 && (c.status == 200 ? f() : g());
								};
								return e;
							}
							function a(a, b, c, d) {
								__p && __p();
								c.suppress_http_code = 1;
								c = g.encode(c);
								b != "post" && ((a = g.appendToUrl(a, c)), (c = ""));
								b = k(b, a);
								if (!b) return !1;
								b.onload = function(b) {
									d(i(b.responseText, a));
								};
								b.onerror = function(b) {
									b.responseText
										? d(i(b.responseText, a))
										: d({
												error: babelHelpers["extends"](
													{},
													h.PARSE_ERROR_TEMPLATE,
													{ status: b.status }
												)
										  });
								};
								b.send(c);
								return !0;
							}
							b = { execute: a };
							e.exports = b;
						},
						null
					);
					__d(
						"GraphBatchConstants",
						[],
						function(a, b, c, d, e, f) {
							e.exports = ES("Object", "freeze", !1, {
								FLUSH_DELIMITER: "\r\n"
							});
						},
						null
					);
					__d(
						"ChunkedRequest",
						[
							"GraphBatchConstants",
							"QueryString",
							"RequestConstants",
							"sdk.safelyParseResponse",
							"wrapFunction"
						],
						function(a, b, c, d, e, f, g, h, i, j, k) {
							__p && __p();
							var l = "{}";
							function m(a) {
								a === void 0 && (a = g.FLUSH_DELIMITER),
									(this.offset = 0),
									(this.delimiter = g.FLUSH_DELIMITER),
									(this.delimiter = a);
							}
							m.prototype.parse = function(a, b) {
								__p && __p();
								b === void 0 && (b = !1);
								var c = [],
									d = a.substring(this.offset),
									e = 0,
									f = ES(d, "indexOf", !0, this.delimiter, e);
								f === 0 &&
									((e = this.delimiter.length),
									(f = ES(d, "indexOf", !0, this.delimiter, e)));
								while (f > -1) {
									var g = d.substring(e, f);
									g && c.push(g);
									e = f + this.delimiter.length;
									f = ES(d, "indexOf", !0, this.delimiter, e);
								}
								this.offset += e;
								if (b && d && f === -1) {
									g = a.substring(this.offset);
									c.push(g);
								}
								return c;
							};
							function n(a, b) {
								__p && __p();
								if (!self.XMLHttpRequest) return null;
								var c = new XMLHttpRequest();
								if (!("withCredentials" in c)) return null;
								c.open(a, b, !0);
								c.setRequestHeader(
									"Content-type",
									"application/x-www-form-urlencoded"
								);
								var d = new m(),
									e = {
										send: function(a) {
											c.send(a);
										}
									},
									f = k(
										function(a, b) {
											if (e.onchunk) {
												a = d.parse(a);
												ES(a, "forEach", !0, function(a) {
													return e.onchunk(a, b);
												});
												b && e.onchunk(l, b);
											}
										},
										"entry",
										"XMLHttpRequest:onchunk"
									),
									g = k(
										function() {
											e.onerror && e.onerror(c);
										},
										"entry",
										"XMLHttpRequest:error"
									);
								c.onerror = g;
								c.onreadystatechange = function() {
									c.readyState == 4
										? c.status === 200
											? f(c.responseText, !0)
											: g()
										: c.readyState == 3 && f(c.responseText, !1);
								};
								return e;
							}
							function a(a, b, c, d) {
								__p && __p();
								c.suppress_http_code = 1;
								c = h.encode(c);
								b != "post" && ((a = h.appendToUrl(a, c)), (c = ""));
								b = n(b, a);
								if (!b) return !1;
								b.onchunk = function(a, b) {
									d(j(a), b);
								};
								b.onerror = function(a) {
									a.responseText
										? d(j(a.responseText))
										: d({
												error: babelHelpers["extends"](
													{},
													i.PARSE_ERROR_TEMPLATE,
													{ status: a.status }
												)
										  });
								};
								b.send(c);
								return !0;
							}
							b = { execute: a };
							e.exports = b;
						},
						null
					);
					__d(
						"FlashRequest",
						["DOMWrapper", "Flash", "GlobalCallback", "QueryString", "Queue"],
						function(a, b, c, d, e, f, g, h, i, j, k) {
							__p && __p();
							var l,
								m = {},
								n,
								o;
							function p() {
								__p && __p();
								if (!n) throw new Error("swfUrl has not been set");
								var a = i.create(function() {
										l.start(function(a) {
											var b = o.execute(a.method, a.url, a.body);
											if (!b) throw new Error("Could create request");
											m[b] = a.callback;
										});
									}),
									b = i.create(function(a, b, c) {
										var d;
										try {
											d = ES("JSON", "parse", !1, decodeURIComponent(c));
										} catch (a) {
											d = {
												error: {
													type: "SyntaxError",
													message: a.message,
													status: b,
													raw: c
												}
											};
										}
										m[a](d);
										delete m[a];
									});
								o = h.embed(n, g.getRoot(), null, {
									log: !1,
									initCallback: a,
									requestCallback: b
								});
							}
							function a(a, b, c, d) {
								__p && __p();
								c.suppress_http_code = 1;
								c.method || (c.method = b);
								c = j.encode(c);
								b === "get" && a.length + c.length < 2e3
									? ((a = j.appendToUrl(a, c)), (c = ""))
									: (b = "post");
								if (!l) {
									if (!h.isAvailable()) return !1;
									l = new k();
									p();
								}
								l.enqueue({ method: b, url: a, body: c, callback: d });
								return !0;
							}
							b = {
								setSwfUrl: function(a) {
									n = a;
								},
								execute: a
							};
							e.exports = b;
						},
						null
					);
					__d(
						"JSONPRequest",
						["DOMWrapper", "GlobalCallback", "QueryString"],
						function(a, b, c, d, e, f, g, h, i) {
							__p && __p();
							var j = 2e3,
								k = !1;
							function a(a, b, c, d) {
								__p && __p();
								var e = document.createElement("script"),
									f = function(a) {
										(f = function() {}),
											h.remove(c.callback),
											d(a),
											e.parentNode.removeChild(e);
									};
								c.callback = h.create(f);
								c.method || (c.method = b);
								a = i.appendToUrl(a, c);
								if (!k && a.length > j) {
									h.remove(c.callback);
									return !1;
								}
								e.onerror = function() {
									f({ error: { type: "http", message: "unknown error" } });
								};
								var l = function() {
									setTimeout(function() {
										f({ error: { type: "http", message: "unknown error" } });
									}, 0);
								};
								e.addEventListener
									? e.addEventListener("load", l, !1)
									: (e.onreadystatechange = function() {
											/loaded|complete/.test(this.readyState) && l();
									  });
								e.src = a;
								g.getRoot().appendChild(e);
								return !0;
							}
							function b() {
								k = !0;
							}
							c = {
								execute: a,
								ignoreMaxQuerystringLength: b,
								MAX_QUERYSTRING_LENGTH: j
							};
							e.exports = c;
						},
						null
					);
					__d(
						"ApiClient",
						[
							"ApiBatcher",
							"ApiClientConfig",
							"ApiClientUtils",
							"Assert",
							"ChunkedRequest",
							"CORSRequest",
							"FlashRequest",
							"JSONPRequest",
							"Log",
							"ObservableMixin",
							"QueryString",
							"UrlMap",
							"flattenObject"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
							__p && __p();
							var t,
								u,
								v,
								w = n.MAX_QUERYSTRING_LENGTH,
								x = {
									fql_query: !0,
									fql_multiquery: !0,
									friends_get: !0,
									notifications_get: !0,
									stream_get: !0,
									users_getinfo: !0
								},
								y = ["cors", "jsonp", "flash"],
								z = 0,
								A = [],
								B = 0,
								C = 0,
								D;
							function E(a, b, c, d) {
								__p && __p();
								var e = B !== 0 && z >= B;
								if (e) {
									A.push(function() {
										return E(a, b, c, d);
									});
									H.inform("request.queued", a, b, c);
									return;
								}
								z++;
								v && (c = ES("Object", "assign", !1, {}, v, c));
								c.pretty = c.pretty || 0;
								c = s(c);
								e = { jsonp: n, cors: l, flash: m, chunked: k };
								var f = {},
									g = c.access_token || t;
								g && (f.access_token = g);
								g = ES("Object", "keys", !1, f);
								g.length > 0 &&
									((a = q.appendToUrl(a, f)),
									ES(g, "forEach", !0, function(a) {
										return delete c[a];
									}));
								c.transport
									? ((f = [c.transport]), delete c.transport)
									: (f = y);
								for (var g = 0; g < f.length; g++) {
									var h = e[f[g]],
										i = ES("Object", "assign", !1, {}, c);
									if (h.execute(a, b, i, d)) return;
								}
								d({
									error: {
										type: "no-transport",
										message: "Could not find a usable transport for request"
									}
								});
							}
							function F(a, b, c, d, e, f, g, h) {
								__p && __p();
								if (d.transport && d.transport === "chunked" && h === !1) {
									a(g, !1);
									return;
								}
								g &&
									g.error &&
									H.inform(
										"request.error",
										b,
										c,
										d,
										g,
										ES("Date", "now", !1) - e,
										f
									);
								H.inform(
									"request.complete",
									b,
									c,
									d,
									g,
									ES("Date", "now", !1) - e,
									f
								);
								z--;
								a && a(g);
								h = A.length > 0 && z < B;
								if (h) {
									b = A.shift();
									b();
								}
							}
							function G() {
								for (
									var a = arguments.length, b = new Array(a), c = 0;
									c < a;
									c++
								)
									b[c] = arguments[c];
								var d = i.parseCallDataFromArgs(b),
									e = d.uri,
									f = d.callback,
									g = d.params,
									h = g.method;
								I(e, h) && (h = "post");
								var j =
										e.getProtocol() && e.getDomain()
											? e.setQueryData({}).toString()
											: r.resolve("graph") + e.getPath(),
									k = C++;
								H.inform("request.prepare", j, g, k);
								E(
									j,
									h == "get" ? "get" : "post",
									g,
									ES(
										F,
										"bind",
										!0,
										null,
										f,
										e.getPath(),
										h,
										g,
										ES("Date", "now", !1),
										k
									)
								);
							}
							function a() {
								var a;
								D || (D = new g(G, u));
								(a = D).scheduleBatchCall.apply(a, arguments);
							}
							function b(a, b) {
								__p && __p();
								j.isObject(a);
								j.isString(a.method, "method missing");
								b || o.warn("No callback passed to the ApiClient");
								var c = a.method.toLowerCase().replace(".", "_");
								a.format = "json-strings";
								a.api_key = u;
								c = c in x ? "api_read" : "api";
								c = r.resolve(c) + "/restserver.php";
								var d = C++;
								b = ES(
									F,
									"bind",
									!0,
									null,
									b,
									"/restserver.php",
									"get",
									a,
									ES("Date", "now", !1),
									d
								);
								E(c, "get", a, b);
							}
							var H = ES("Object", "assign", !1, new p(), {
								setAccessToken: function(a) {
									t = a;
								},
								setAccessTokenForClientID: function(a, b) {
									t && u && u !== b ? !1 : (t = a);
								},
								getAccessToken: function() {
									return t;
								},
								setClientID: function(a) {
									u = a;
								},
								setDefaultParams: function(a) {
									v = a;
								},
								setDefaultTransports: function(a) {
									y = a;
								},
								setMaxConcurrentRequests: function(a) {
									B = a;
								},
								getCurrentlyExecutingRequestCount: function() {
									return z;
								},
								getQueuedRequestCount: function() {
									return A.length;
								},
								rest: b,
								graph: G,
								scheduleBatchCall: a,
								prepareBatchParams: g.prepareBatchParams
							});
							function I(a, b) {
								return a.toString().length > w && b === "get";
							}
							m.setSwfUrl(h.FlashRequest.swfUrl);
							e.exports = H;
						},
						null
					);
					__d(
						"sdk.PlatformVersioning",
						["ManagedError", "sdk.Runtime"],
						function(a, b, c, d, e, f, g, h) {
							var i = /^v\d+\.\d\d?$/;
							a = {
								REGEX: i,
								assertVersionIsSet: function() {
									if (!h.getVersion())
										throw new g("init not called with valid version");
								},
								assertValidVersion: function(a) {
									if (!i.test(a)) throw new g("invalid version specified");
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.api",
						[
							"ApiClient",
							"sdk.feature",
							"sdk.PlatformVersioning",
							"sdk.Runtime",
							"sdk.Scribe",
							"sdk.URI"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							__p && __p();
							var m = h("should_log_response_error", !1),
								n;
							j.subscribe("ClientID.change", function(a) {
								return g.setClientID(a);
							});
							j.subscribe("AccessToken.change", function(a) {
								(n = a), g.setAccessToken(a);
							});
							g.setDefaultParams({ sdk: "joey" });
							g.subscribe("request.complete", function(a, b, c, d) {
								a = !1;
								d &&
									typeof d === "object" &&
									(d.error
										? (d.error == "invalid_token" ||
												(d.error.type == "OAuthException" &&
													d.error.code == 190)) &&
										  (a = !0)
										: d.error_code && (d.error_code == "190" && (a = !0)));
								a && n === j.getAccessToken() && j.setAccessToken(null);
							});
							g.subscribe("request.complete", function(a, b, c, d) {
								((a == "/me/permissions" && b === "delete") ||
									(a == "/restserver.php" &&
										c.method == "Auth.revokeAuthorization")) &&
									d === !0 &&
									j.setAccessToken(null);
							});
							g.subscribe("request.error", function(a, b, c, d) {
								m &&
									d.error.type === "http" &&
									k.log("jssdk_error", {
										appId: j.getClientID(),
										error: "transport",
										extra: {
											name: "transport",
											message: ES("JSON", "stringify", !1, d.error)
										}
									});
							});
							function a(a) {
								__p && __p();
								if (typeof a === "string")
									if (j.getIsVersioned()) {
										i.assertVersionIsSet();
										!/https?/.test(a) && a.charAt(0) !== "/" && (a = "/" + a);
										a = new l(a)
											.setDomain(null)
											.setProtocol(null)
											.toString();
										i.REGEX.test(
											a.substring(1, ES(a, "indexOf", !0, "/", 1))
										) || (a = "/" + j.getVersion() + a);
										var b = [a].concat(
											Array.prototype.slice.call(arguments, 1)
										);
										g.graph.apply(g, b);
									} else g.graph.apply(g, arguments);
								else g.rest.apply(g, arguments);
							}
							e.exports = a;
						},
						null
					);
					__d(
						"legacy:fb.api",
						["FB", "sdk.api"],
						function(a, b, c, d, e, f, g, h) {
							g.provide("", { api: h });
						},
						3
					);
					__d(
						"flattenPHPQueryData",
						["invariant"],
						function(a, b, c, d, e, f, g) {
							__p && __p();
							function a(a) {
								return h(a, "", {});
							}
							function h(a, b, c) {
								if (a === null || a === undefined) c[b] = undefined;
								else if (typeof a === "object") {
									typeof a.appendChild !== "function" || g(0, undefined);
									for (var d in a)
										d !== "$$typeof" &&
											Object.prototype.hasOwnProperty.call(a, d) &&
											a[d] !== undefined &&
											h(a[d], b ? b + "[" + d + "]" : d, c);
								} else c[b] = a;
								return c;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"PHPQuerySerializer",
						["flattenPHPQueryData", "invariant"],
						function(a, b, c, d, e, f, g, h) {
							__p && __p();
							function a(a) {
								var b = [];
								a = g(a);
								for (var c in a)
									if (Object.prototype.hasOwnProperty.call(a, c)) {
										var d = i(c);
										a[c] === undefined
											? b.push(d)
											: b.push(d + "=" + i(String(a[c])));
									}
								return b.join("&");
							}
							function i(a) {
								return encodeURIComponent(a)
									.replace(/%5D/g, "]")
									.replace(/%5B/g, "[");
							}
							var j = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;
							function k(a) {
								return a === "hasOwnProperty" || a === "__proto__"
									? "\ud83d\udf56"
									: a;
							}
							function b(a) {
								__p && __p();
								if (!a) return {};
								var b = {};
								a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
								a = a.split("&");
								var c = Object.prototype.hasOwnProperty;
								for (var d = 0, e = a.length; d < e; d++) {
									var f = a[d].match(j);
									if (!f) {
										var g = a[d].split("=");
										b[l(g[0])] = g[1] === undefined ? null : l(g[1]);
									} else {
										g = f[2].split(/\]\[|\[|\]/).slice(0, -1);
										var h = f[1];
										f = l(f[3] || "");
										g[0] = h;
										h = b;
										for (var i = 0; i < g.length - 1; i++) {
											var m = k(g[i]);
											if (m) {
												if (!c.call(h, m)) {
													var n =
														g[i + 1] && !g[i + 1].match(/^\d{1,3}$/) ? {} : [];
													h[m] = n;
													if (h[m] !== n) return b;
												}
												h = h[m];
											} else
												g[i + 1] && !g[i + 1].match(/^\d{1,3}$/)
													? h.push({})
													: h.push([]),
													(h = h[h.length - 1]);
										}
										h instanceof Array && g[g.length - 1] === ""
											? h.push(f)
											: (h[k(g[g.length - 1])] = f);
									}
								}
								return b;
							}
							function l(a) {
								try {
									return decodeURIComponent(a.replace(/\+/g, " "));
								} catch (b) {
									return a;
								}
							}
							c = {
								serialize: a,
								encodeComponent: i,
								deserialize: b,
								decodeComponent: l
							};
							e.exports = c;
						},
						null
					);
					__d(
						"ReloadPage",
						[],
						function(a, b, c, d, e, f) {
							b = {
								now: function(b) {
									a.window.location.reload(b);
								},
								delay: function(b) {
									a.setTimeout(ES(this.now, "bind", !0, this), b);
								}
							};
							e.exports = b;
						},
						null
					);
					__d(
						"areSameOrigin",
						[],
						function(a, b, c, d, e, f) {
							function a(a, b) {
								if (a.isEmpty() || b.isEmpty()) return !1;
								if (a.getProtocol() && a.getProtocol() != b.getProtocol())
									return !1;
								if (a.getDomain() && a.getDomain() != b.getDomain()) return !1;
								return a.getPort() &&
									a.getPort().toString() !== b.getPort().toString()
									? !1
									: !0;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"ifRequired",
						[],
						function(a, b, c, d, e, f) {
							function a(a, b, c) {
								var e;
								d &&
									d.call(null, [a], function(a) {
										e = a;
									});
								if (e && b) return b(e);
								else if (!e && c) return c();
							}
							e.exports = a;
						},
						null
					);
					__d(
						"memoize",
						["invariant"],
						function(a, b, c, d, e, f, g) {
							function a(a) {
								var b = a,
									c;
								return function() {
									arguments.length && g(0, undefined);
									b && ((c = b()), (b = null));
									return c;
								};
							}
							e.exports = a;
						},
						null
					);
					__d(
						"unqualifyURI",
						[],
						function(a, b, c, d, e, f) {
							function a(a) {
								a.setProtocol(null)
									.setDomain(null)
									.setPort(null);
							}
							e.exports = a;
						},
						null
					);
					__d(
						"URI",
						[
							"PHPQuerySerializer",
							"ReloadPage",
							"URIBase",
							"areSameOrigin",
							"ifRequired",
							"isFacebookURI",
							"memoize",
							"unqualifyURI"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
							__p && __p();
							var o,
								p = m(function() {
									return new r(window.location.href);
								});
							function q() {
								return k("PageTransitions", function(a) {
									if (a.isInitialized()) return a;
								});
							}
							b = babelHelpers.inherits(r, i);
							o = b && b.prototype;
							function r(a) {
								"use strict";
								o.constructor.call(this, a || "", g);
							}
							r.prototype.setPath = function(a) {
								"use strict";
								this.path = a;
								return o.setPath.call(this, a);
							};
							r.prototype.getPath = function() {
								"use strict";
								var a = o.getPath.call(this);
								return a ? a.replace(/^\/+/, "/") : a;
							};
							r.prototype.setProtocol = function(a) {
								"use strict";
								this.protocol = a;
								return o.setProtocol.call(this, a);
							};
							r.prototype.setDomain = function(a) {
								"use strict";
								this.domain = a;
								return o.setDomain.call(this, a);
							};
							r.prototype.setPort = function(a) {
								"use strict";
								this.port = a;
								return o.setPort.call(this, a);
							};
							r.prototype.setFragment = function(a) {
								"use strict";
								this.fragment = a;
								return o.setFragment.call(this, a);
							};
							r.prototype.stripTrailingSlash = function() {
								"use strict";
								this.setPath(this.getPath().replace(/\/$/, ""));
								return this;
							};
							r.prototype.valueOf = function() {
								"use strict";
								return this.toString();
							};
							r.prototype.isSubdomainOfDomain = function(a) {
								"use strict";
								__p && __p();
								var b = this.getDomain();
								if (a === "" || b === "") return !1;
								if (ES(b, "endsWith", !0, a)) {
									var c = b.length,
										d = a.length,
										e = c - d - 1;
									if (c === d || b[e] === ".") return r.isValidURI(a);
								}
								return !1;
							};
							r.prototype.getRegisteredDomain = function() {
								"use strict";
								if (!this.getDomain()) return "";
								if (!l(this)) return null;
								var a = this.getDomain().split("."),
									b = ES(a, "indexOf", !0, "facebook");
								b === -1 && (b = ES(a, "indexOf", !0, "workplace"));
								return a.slice(b).join(".");
							};
							r.prototype.getUnqualifiedURI = function() {
								"use strict";
								var a = new r(this);
								n(a);
								return a;
							};
							r.prototype.getQualifiedURI = function() {
								"use strict";
								return new r(this).qualify();
							};
							r.prototype.isSameOrigin = function(a) {
								"use strict";
								a = a;
								!a ? (a = p()) : a instanceof r || (a = new r(a.toString()));
								return j(this, a);
							};
							r.go = function(a, b, c) {
								"use strict";
								r.goURIOnWindow(a, window, b, c);
							};
							r.goURIOnWindow = function(b, c, d, e) {
								"use strict";
								b = new r(b);
								var f = b.toString();
								b = c ? c : window;
								k("PageNavigationStageLogger", function(b) {
									d
										? b.setNote("force")
										: a.PageTransitions || b.setNote("no_pagetrans"),
										b.setCookieForNavigation(f);
								});
								!d && a.PageTransitions
									? a.PageTransitions.go(f, e)
									: window.location.href === f
										? h.now()
										: e
											? b.location.replace(f)
											: (b.location.href = f);
							};
							r.prototype.go = function(a, b) {
								"use strict";
								r.go(this, a, b);
							};
							r.tryParseURI = function(a) {
								"use strict";
								a = i.tryParse(a, g);
								return a ? new r(a) : null;
							};
							r.isValidURI = function(a) {
								"use strict";
								return i.isValid(a, g);
							};
							r.getRequestURI = function(a, b) {
								"use strict";
								a = a === undefined || a;
								if (a) {
									a = q();
									if (a) return a.getCurrentURI(!!b).getQualifiedURI();
								}
								return new r(window.location.href);
							};
							r.getMostRecentURI = function() {
								"use strict";
								var a = q();
								return a
									? a.getMostRecentURI().getQualifiedURI()
									: new r(window.location.href);
							};
							r.getNextURI = function() {
								"use strict";
								var a = q();
								return a
									? a.getNextURI().getQualifiedURI()
									: new r(window.location.href);
							};
							r.encodeComponent = function(a) {
								"use strict";
								return encodeURIComponent(a)
									.replace(/%5D/g, "]")
									.replace(/%5B/g, "[");
							};
							r.decodeComponent = function(a) {
								"use strict";
								return decodeURIComponent(a.replace(/\+/g, " "));
							};
							ES("Object", "assign", !1, r, {
								expression: /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,
								arrayQueryExpression: /^(\w+)((?:\[\w*\])+)=?(.*)/
							});
							e.exports = r;
						},
						null
					);
					__d(
						"resolveURI",
						[],
						function(a, b, c, d, e, f) {
							function a(a) {
								if (!a) return window.location.href;
								a = a.replace(/&/g, "&amp;").replace(/\"/g, "&quot;");
								var b = document.createElement("div");
								b.innerHTML = '<a href="' + a + '"></a>';
								return b.firstChild.href;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.Canvas.Environment",
						["sdk.RPC"],
						function(a, b, c, d, e, f, g) {
							function a(a) {
								g.remote.getPageInfo(function(b) {
									a(b.result);
								});
							}
							function b(a, b) {
								g.remote.scrollTo({ x: a || 0, y: b || 0 });
							}
							g.stub("getPageInfo");
							g.stub("scrollTo");
							c = { getPageInfo: a, scrollTo: b };
							e.exports = c;
						},
						null
					);
					__d(
						"sdk.DialogUtils",
						["sdk.Content", "sdk.DOM", "sdk.DOMEventListener", "sdk.UA"],
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							a = {
								isOrientationPotrait: function() {
									return window.innerWidth < window.innerHeight;
								},
								addDoubleClickAction: function(a, b, c) {
									var d = null;
									return i.add(a, "click", function() {
										d !== null && (clearTimeout(d), (d = null), b()),
											(d = setTimeout(function() {
												d = null;
											}, c));
									});
								},
								addIdleDesktopAction: function(a, b, c) {
									var d,
										event,
										e = function() {
											d = setTimeout(b, c);
										};
									e();
									return i.add(a, "mouseenter", function() {
										clearTimeout(d),
											event ||
												(event = i.add(a, "mouseleave", function() {
													e();
												}));
									});
								},
								addMobileOrientationChangeAction: function(a) {
									if (!j.mobile()) return null;
									var event =
											"onorientationchange" in window
												? "orientationchange"
												: "resize",
										b = function(b) {
											return setTimeout(function(b) {
												return a(b);
											}, 50);
										};
									return i.add(window, event, b);
								},
								applyScreenDimensions: function(a) {
									if (a == null) return;
									var b = h.getViewportInfo();
									a.style.minHeight =
										b.height || b.width ? b.height + "px" : "";
									a.style.top = b.scrollTop ? b.scrollTop + "px" : "";
								},
								setDialogPositionToCenter: function(a, b, c) {
									__p && __p();
									var d = function(a) {
											return typeof a === "number" ? a : parseInt(a, 10);
										},
										e = h.getViewportInfo(),
										f = d(a.offsetWidth);
									d = d(a.offsetHeight);
									f = e.scrollLeft + (e.width - f) / 2;
									var g = (e.height - d) / 2.5;
									f < g && (g = f);
									var i = e.height - d - g,
										k = (e.height - d) / 2;
									c &&
										(k = c.scrollTop - c.offsetTop + (c.clientHeight - d) / 2);
									k < g ? (k = g) : k > i && (k = i);
									k += e.scrollTop;
									if (j.mobile()) {
										c = 100;
										b
											? ((c += (e.height - d) / 2),
											  h.addCss(document.body, "fb_reposition"))
											: (h.addCss(document.body, "fb_hidden"),
											  (document.body.style.width = "auto"),
											  (k = 1e4));
										g = h.getByClass("fb_dialog_padding", a);
										g.length && (g[0].style.height = c + "px");
									}
									a.style.left = (f > 0 ? f : 0) + "px";
									a.style.top = (k > 0 ? k : 0) + "px";
								},
								setDialogPositionToTop: function(a, b, c) {
									this.setDialogPositionToCenter(a, b, c);
									b = h.getViewportInfo();
									c = b.scrollTop + (b.height - a.offsetHeight) * 0.05;
									h.setStyle(a, "top", c + "px");
								},
								setupNewDarkOverlay: function() {
									var a = document.createElement("div");
									a.setAttribute("id", "fb_dialog_ipad_overlay");
									this.applyScreenDimensions(a);
									return a;
								},
								setupNewDialog: function(a) {
									__p && __p();
									a = a || {};
									var b = document.createElement("div"),
										c = a;
									c = c.onClose;
									if (a.closeIcon && c) {
										var d = document.createElement("a");
										d.className = "fb_dialog_close_icon";
										i.add(d, "click", c);
										b.appendChild(d);
									}
									c = "fb_dialog";
									c += " " + (a.classes || "");
									c += j.mobile() ? " fb_dialog_mobile" : " fb_dialog_advanced";
									b.className = c;
									if (a.width) {
										d = parseInt(a.width, 10);
										isNaN(d) || (b.style.width = d + "px");
									}
									c = document.createElement("div");
									a.content && g.append(a.content, c);
									c.className = "fb_dialog_content";
									b.appendChild(c);
									if (j.mobile()) {
										d = document.createElement("div");
										d.className = "fb_dialog_padding";
										b.appendChild(d);
									}
									return { dialogElement: b, contentRoot: c };
								},
								onDialogHideCleanup: function(a) {
									var b = document.body;
									a
										? h.removeCss(b, "fb_reposition")
										: h.removeCss(b, "fb_hidden");
								}
							};
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
						"sdk.Dialog",
						[
							"ObservableMixin",
							"Type",
							"sdk.Canvas.Environment",
							"sdk.Content",
							"sdk.DialogUtils",
							"sdk.DOM",
							"sdk.DOMEventListener",
							"sdk.fbt",
							"sdk.Runtime",
							"sdk.UA"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
							__p && __p();
							var q = 30,
								r = 590,
								s = 500,
								t = 240,
								u = 575;
							function v() {
								var a = l.getViewportInfo();
								return a.height && a.width
									? {
											width: Math.min(a.width, s),
											height: Math.min(a.height, r)
									  }
									: null;
							}
							var w = h.extend(
									{
										constructor: function(a, b) {
											this.parent(),
												(this.id = a),
												(this.display = b),
												(this._e2e = {}),
												x._dialogs ||
													((x._dialogs = {}), x._addOrientationHandler()),
												(x._dialogs[a] = this),
												this.trackEvent("init");
										},
										trackEvent: function(a, b) {
											if (this._e2e[a]) return this;
											this._e2e[a] = b || ES("Date", "now", !1);
											a == "close" && this.inform("e2e:end", this._e2e);
											return this;
										},
										trackEvents: function(a) {
											typeof a === "string" && (a = ES("JSON", "parse", !1, a));
											for (var b in a)
												Object.prototype.hasOwnProperty.call(a, b) &&
													this.trackEvent(b, a[b]);
											return this;
										}
									},
									g
								),
								x = {
									newInstance: function(a, b) {
										return new w(a, b);
									},
									_dialogs: null,
									_lastYOffset: 0,
									_overlayListeners: [],
									_loaderEl: null,
									_overlayEl: null,
									_stack: [],
									_active: null,
									_forceTabletStyle: null,
									_closeOnOverlayTap: null,
									_positionDialogAtTopWhenPortrait: null,
									get: function(a) {
										return x._dialogs[a];
									},
									_findRoot: function(a) {
										while (a) {
											if (l.containsCss(a, "fb_dialog")) return a;
											a = a.parentNode;
										}
									},
									_createWWWLoader: function(a) {
										a = a ? a : 460;
										return x.create({
											content:
												'<div class="dialog_title">  <a id="fb_dialog_loader_close">    <div class="fb_dialog_close_icon"></div>  </a>  <span>Facebook</span>  <div style="clear:both;"></div></div><div class="dialog_content"></div><div class="dialog_footer"></div>',
											width: a
										});
									},
									_createMobileLoader: function() {
										var a;
										p.nativeApp()
											? (a = '<div class="dialog_header"></div>')
											: x.isTabletStyle()
												? (a =
														'<div class="overlayLoader"><div id="fb_dialog_loader_spinner"></div><a id="fb_dialog_loader_close" href="#">' +
														n._("Cancel") +
														"</a></div>")
												: (a =
														'<div class="dialog_header"><table>  <tbody>    <tr>      <td class="header_left">        <label class="touchable_button">          <input type="submit" value="' +
														n._("Cancel") +
														'"            id="fb_dialog_loader_close"/>        </label>      </td>      <td class="header_center">        <div>         ' +
														n._("Loading...") +
														'        </div>      </td>      <td class="header_right">      </td>    </tr>  </tbody></table></div>');
										return x.create({
											classes:
												"loading" + (x.isTabletStyle() ? " centered" : ""),
											content: a
										});
									},
									_setDialogOverlayStyle: function() {
										k.applyScreenDimensions(x._overlayEl);
									},
									_showTabletOverlay: function(a) {
										if (!x.isTabletStyle()) return;
										x._overlayEl ||
											((x._overlayEl = k.setupNewDarkOverlay()),
											j.append(x._overlayEl, null));
										if (x._closeOnOverlayTap) {
											a = k.addDoubleClickAction(
												x._overlayEl,
												ES(a, "bind", !0, this),
												5e3
											);
											x._overlayListeners.push(a);
										}
										x._overlayEl.className = "";
									},
									_hideTabletOverlay: function() {
										x.isTabletStyle() &&
											((x._overlayEl.className = "hidden"),
											ES(x._overlayListeners, "forEach", !0, function(a) {
												return a.remove();
											}),
											(x._overlayListeners = []));
									},
									showLoader: function(a, b) {
										__p && __p();
										a || (a = function() {});
										var c = function() {
											x._hideLoader(),
												k.onDialogHideCleanup(x.isTabletStyle()),
												x._hideTabletOverlay(),
												a();
										};
										x._showTabletOverlay(c);
										x._loaderEl ||
											(x._loaderEl = x._findRoot(
												p.mobile()
													? x._createMobileLoader()
													: x._createWWWLoader(b)
											));
										b = document.getElementById("fb_dialog_loader_close");
										if (b) {
											l.removeCss(b, "fb_hidden");
											b = m.add(b, "click", c);
											x._overlayListeners.push(b);
										}
										x._makeActive(x._loaderEl);
									},
									setCloseOnOverlayTap: function(a) {
										x._closeOnOverlayTap = !!a;
									},
									setPositionDialogAtTopWhenPortrait: function(a) {
										x._positionDialogAtTopWhenPortrait = !!a;
									},
									_hideLoader: function() {
										x._loaderEl &&
											x._loaderEl == x._active &&
											(x._loaderEl.style.top = "-10000px");
									},
									_makeActive: function(a) {
										x._setDialogSizes(),
											x._lowerActive(),
											(x._active = a),
											o.isEnvironment(o.ENVIRONMENTS.CANVAS) &&
												i.getPageInfo(function(a) {
													x._centerActive(a);
												}),
											x._centerActive();
									},
									_lowerActive: function() {
										if (!x._active) return;
										x._active.style.top = "-10000px";
										x._active = null;
									},
									_removeStacked: function(a) {
										x._stack = ES(x._stack, "filter", !0, function(b) {
											return b != a;
										});
									},
									_centerActive: function(a) {
										var b = x._active;
										if (!b) return;
										x._positionDialogAtTopWhenPortrait &&
										k.isOrientationPotrait()
											? k.setDialogPositionToTop(b, x.isTabletStyle(), a)
											: k.setDialogPositionToCenter(b, x.isTabletStyle(), a);
									},
									_setDialogSizes: function(a) {
										a === void 0 && (a = !1);
										if (!p.mobile()) return;
										for (var b in x._dialogs)
											if (Object.prototype.hasOwnProperty.call(x._dialogs, b)) {
												var c = document.getElementById(b);
												c &&
													((c.style.width = x.getDefaultSize().width + "px"),
													a ||
														(c.style.height =
															x.getDefaultSize().height + "px"));
											}
									},
									getDefaultSize: function() {
										__p && __p();
										if (p.mobile()) {
											var a = v();
											if (a) {
												l.getViewportInfo().width <= a.width &&
													(a.width = l.getViewportInfo().width - q);
												l.getViewportInfo().height <= a.height &&
													(a.height = l.getViewportInfo().height - q);
												return a;
											}
											if (p.ipad()) return { width: s, height: r };
											if (p.android())
												return {
													width: screen.availWidth,
													height: screen.availHeight
												};
											else {
												a = window.innerWidth;
												var b = window.innerHeight,
													c = a / b > 1.2;
												return {
													width: a,
													height: Math.max(b, c ? screen.width : screen.height)
												};
											}
										}
										return { width: u, height: t };
									},
									_handleOrientationChange: function() {
										__p && __p();
										x._availScreenWidth = l.getViewportInfo().width;
										if (x.isTabletStyle())
											x._setDialogSizes(!0),
												x._centerActive(),
												x._setDialogOverlayStyle();
										else {
											var a = x.getDefaultSize().width;
											for (var b in x._dialogs)
												if (
													Object.prototype.hasOwnProperty.call(x._dialogs, b)
												) {
													var c = document.getElementById(b);
													c && (c.style.width = a + "px");
												}
										}
									},
									_addOrientationHandler: function() {
										if (!p.mobile()) return null;
										x._availScreenWidth = l.getViewportInfo().width;
										k.addMobileOrientationChangeAction(
											x._handleOrientationChange
										);
									},
									create: function(a) {
										var b = k.setupNewDialog(a);
										j.append(b.dialogElement);
										a.visible && x.show(b.dialogElement);
										typeof a.styles === "object" &&
											ES(
												"Object",
												"assign",
												!1,
												b.dialogElement.style,
												a.styles
											);
										return b.contentRoot;
									},
									show: function(a) {
										var b = x._findRoot(a);
										b &&
											(x._removeStacked(b),
											x._hideLoader(),
											x._makeActive(b),
											x._stack.push(b),
											"fbCallID" in a &&
												x
													.get(a.fbCallID)
													.inform("iframe_show")
													.trackEvent("show"));
									},
									hide: function(a) {
										var b = x._findRoot(a);
										x._hideLoader();
										b == x._active &&
											(x._lowerActive(),
											k.onDialogHideCleanup(x.isTabletStyle()),
											x._hideTabletOverlay(),
											"fbCallID" in a &&
												x
													.get(a.fbCallID)
													.inform("iframe_hide")
													.trackEvent("hide"));
									},
									remove: function(a) {
										a = x._findRoot(a);
										if (a) {
											var b = x._active == a;
											x._removeStacked(a);
											b
												? (x._hideLoader(),
												  x._stack.length > 0
														? x.show(x._stack.pop())
														: (x._lowerActive(),
														  k.onDialogHideCleanup(x.isTabletStyle()),
														  x._hideTabletOverlay()))
												: x._active === null &&
												  x._stack.length > 0 &&
												  x.show(x._stack.pop());
											setTimeout(function() {
												a.parentNode.removeChild(a);
											}, 3e3);
										}
									},
									isActive: function(a) {
										a = x._findRoot(a);
										return a && a === x._active;
									},
									setForceTabletStyle: function(a) {
										x._forceTabletStyle = !!a;
									},
									isTabletStyle: function() {
										if (!p.mobile()) return !1;
										if (x._forceTabletStyle) return !0;
										var a = v();
										return a && (a.height >= r || a.width >= s);
									}
								};
							e.exports = x;
						},
						null
					);
					__d(
						"sdk.NativeExtensions",
						["Log", "sdk.DOMEventListener", "sdk.UA"],
						function(a, b, c, d, e, f, g, h, i) {
							__p && __p();
							var j = "fbNativeExtensionsReady";
							function k() {
								return window._FBSdkExtensions &&
									window._FBSdkExtensions.jsonRPC &&
									window._FBSdkExtensions.initializeCallbackHandler &&
									window._FBSdkExtensions.supportsDialog
									? window._FBSdkExtensions
									: null;
							}
							a = {
								onReady: function(a) {
									__p && __p();
									if (!i.facebookInAppBrowser()) {
										g.error(
											"FB.NativeExtensions.onReady only works when the page is rendered in a WebView of the native Facebook app."
										);
										return;
									}
									var b = k();
									if (b) {
										a(b);
										return;
									}
									var c = !1;
									b = function b() {
										var d = k();
										if (c || !d) return;
										c = !0;
										a(d);
										h.remove(window, j, b);
									};
									h.add(window, j, b);
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.Extensions",
						["JSONRPC", "Queue", "sdk.NativeExtensions", "sdk.UA"],
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							var k = new h(),
								l = new g(function(a) {
									k.enqueue(a);
								}),
								m = new h();
							m.start(function(a) {
								l.read(a);
							});
							var n = null;
							j.facebookInAppBrowser() &&
								i.onReady(function(a) {
									(n = a),
										(window._FBBrowserCallbackHandler = function(a) {
											m.enqueue(ES("JSON", "stringify", !1, a));
										}),
										a.initializeCallbackHandler(
											ES("JSON", "stringify", !1, {
												name: "_FBBrowserCallbackHandler"
											})
										),
										k.start(function(b) {
											a.jsonRPC(b);
										});
								});
							e.exports = {
								local: l.local,
								remote: l.remote,
								stub: ES(l.stub, "bind", !0, l),
								supportsDialog: function(a) {
									return !!n && n.supportsDialog(a);
								}
							};
						},
						null
					);
					__d(
						"sdk.Frictionless",
						["sdk.api", "sdk.Auth", "sdk.Dialog", "sdk.Event"],
						function(a, b, c, d, e, f, g, h, i, j) {
							__p && __p();
							var k = {
								_allowedRecipients: {},
								_useFrictionless: !1,
								_updateRecipients: function() {
									(k._allowedRecipients = {}),
										g("/me/apprequestformerrecipients", function(a) {
											if (!a || a.error) return;
											ES(a.data, "forEach", !0, function(a) {
												k._allowedRecipients[a.recipient_id] = !0;
											});
										});
								},
								init: function() {
									(k._useFrictionless = !0),
										h.getLoginStatus(function(a) {
											a.status == "connected" && k._updateRecipients();
										}),
										j.subscribe("auth.login", function(a) {
											a.authResponse && k._updateRecipients();
										});
								},
								_processRequestResponse: function(a, b) {
									return function(c) {
										var d = c && c.updated_frictionless;
										k._useFrictionless && d && k._updateRecipients();
										c &&
											(!b &&
												c.frictionless &&
												(i._hideLoader(),
												i._restoreBodyPosition(),
												i._hideIPadOverlay()),
											delete c.frictionless,
											delete c.updated_frictionless);
										a && a(c);
									};
								},
								isAllowed: function(a) {
									__p && __p();
									if (!a) return !1;
									if (typeof a === "number") return a in k._allowedRecipients;
									typeof a === "string" && (a = a.split(","));
									a = ES(a, "map", !0, function(a) {
										return ES(String(a), "trim", !0);
									});
									var b = !0,
										c = !1;
									ES(a, "forEach", !0, function(a) {
										(b = b && a in k._allowedRecipients), (c = !0);
									});
									return b && c;
								}
							};
							j.subscribe("init:post", function(a) {
								a.frictionlessRequests && k.init();
							});
							e.exports = k;
						},
						null
					);
					__d(
						"sdk.Native",
						["Log", "sdk.UA"],
						function(a, b, c, d, e, f, g, h) {
							__p && __p();
							var i = "fbNativeReady";
							a = {
								onready: function(a) {
									__p && __p();
									if (!h.nativeApp()) {
										g.error(
											"FB.Native.onready only works when the page is rendered in a WebView of the native Facebook app. Test if this is the case calling FB.UA.nativeApp()"
										);
										return;
									}
									window.__fbNative &&
										!this.nativeReady &&
										ES("Object", "assign", !1, this, window.__fbNative);
									if (this.nativeReady) a();
									else {
										var b = function b(c) {
											window.removeEventListener(i, b), this.onready(a);
										};
										window.addEventListener(i, b, !1);
									}
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.openMessenger",
						["sdk.UA"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = "https://itunes.apple.com/us/app/messenger/id454638411",
								i =
									"https://play.google.com/store/apps/details?id=com.facebook.orca",
								j = 3e3;
							function a(a) {
								var b,
									c,
									d = a.link;
								a = a.app_id;
								g.android()
									? ((b =
											"intent://share/#Intent;package=com.facebook.orca;scheme=fb-messenger;S.android.intent.extra.TEXT=" +
											encodeURIComponent(d) +
											";S.trigger=send_plugin;"),
									  a &&
											(b += "S.platform_app_id=" + encodeURIComponent(a) + ";"),
									  (b += "end"),
									  (c = i))
									: ((b = "fb-messenger://share?link=" + encodeURIComponent(d)),
									  a && (b += "&app_id=" + encodeURIComponent(a)),
									  (c = h));
								setTimeout(function() {
									window.location.href = c;
								}, j);
								window.location.href = b;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.UIServer",
						[
							"JSSDKConfig",
							"Log",
							"QueryString",
							"UrlMap",
							"createObjectFrom",
							"flattenObject",
							"guid",
							"insertIframe",
							"resolveURI",
							"sdk.Auth",
							"sdk.Content",
							"sdk.Dialog",
							"sdk.DOM",
							"sdk.Event",
							"sdk.Extensions",
							"sdk.fbt",
							"sdk.feature",
							"sdk.Frictionless",
							"sdk.getContextType",
							"sdk.Native",
							"sdk.openMessenger",
							"sdk.RPC",
							"sdk.Runtime",
							"sdk.Scribe",
							"sdk.UA",
							"sdk.XD"
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
							F
						) {
							__p && __p();
							var G = {
								transform: function(a) {
									if (
										a.params.display === "touch" &&
										N.canIframe(a.params) &&
										window.postMessage
									) {
										a.params.channel = N._xdChannelHandler(a.id, "parent");
										E.nativeApp() || (a.params.in_iframe = 1);
										return a;
									} else return N.genericTransform(a);
								},
								getXdRelation: function(a) {
									var b = a.display;
									return b === "touch" && window.postMessage && a.in_iframe
										? "parent"
										: N.getXdRelation(a);
								}
							};
							function H(a) {
								return (
									a.method == "permissions.oauth" ||
									a.method == "permissions.request" ||
									a.method == "oauth"
								);
							}
							function I(a) {
								return H(a) && u.supportsDialog("oauth");
							}
							function J(a) {
								return (
									H(a) &&
									(a.is_account_link === !0 || a.is_account_link === "true") &&
									u.supportsDialog("accountLink")
								);
							}
							a = {
								"stream.share": {
									size: { width: 670, height: 340 },
									url: "sharer.php",
									transform: function(a) {
										a.params.u || (a.params.u = window.location.toString());
										a.params.display = "popup";
										return a;
									}
								},
								apprequests: {
									transform: function(a) {
										a = G.transform(a);
										a.params.frictionless = x && x._useFrictionless;
										a.params.frictionless &&
											(x.isAllowed(a.params.to) &&
												((a.params.display = "iframe"),
												(a.params.in_iframe = !0),
												(a.hideLoader = !0)),
											(a.cb = x._processRequestResponse(a.cb, a.hideLoader)));
										a.closeIcon = !1;
										return a;
									},
									getXdRelation: G.getXdRelation
								},
								"permissions.oauth": {
									url: "dialog/oauth",
									size: {
										width: E.mobile() ? null : 475,
										height: E.mobile() ? null : 183
									},
									transform: function(a) {
										__p && __p();
										if (!C.getClientID()) {
											h.error("FB.login() called before FB.init().");
											return;
										}
										if (
											p.getAuthResponse() &&
											!a.params.scope &&
											!a.params.auth_type
										) {
											h.error(
												"FB.login() called when user is already connected."
											);
											a.cb &&
												a.cb({
													status: C.getLoginStatus(),
													authResponse: p.getAuthResponse()
												});
											return;
										}
										var b = a.cb,
											c = a.id;
										delete a.cb;
										var d = a.params.auth_type === "reauthenticate",
											e = ES(
												"Object",
												"keys",
												!1,
												ES(
													"Object",
													"assign",
													!1,
													a.params.response_type
														? k(a.params.response_type.split(","))
														: {},
													{ token: !0, signed_request: !0 }
												)
											).join(",");
										a.params.display === "async"
											? (ES("Object", "assign", !1, a.params, {
													client_id: C.getClientID(),
													origin: y(),
													response_type: e,
													domain: location.hostname
											  }),
											  (a.cb = p.xdResponseWrapper(
													b,
													p.getAuthResponse(),
													"permissions.oauth"
											  )))
											: (d &&
													N._xdNextHandler(
														function(a) {
															b({
																authResponse: null,
																status: "not_authorized"
															});
														},
														c,
														"opener",
														!0
													),
											  ES("Object", "assign", !1, a.params, {
													client_id: C.getClientID(),
													redirect_uri: o(
														N.xdHandler(
															b,
															c,
															"opener",
															p.getAuthResponse(),
															"permissions.oauth",
															!d
														)
													),
													origin: y(),
													response_type: e,
													domain: location.hostname
											  }));
										return a;
									}
								},
								"auth.logout": {
									url: "logout.php",
									transform: function(a) {
										if (!C.getClientID())
											h.error("FB.logout() called before calling FB.init().");
										else if (!p.getAuthResponse())
											h.error("FB.logout() called without an access token.");
										else {
											a.params.next = N.xdHandler(
												a.cb,
												a.id,
												"parent",
												p.getAuthResponse(),
												"logout",
												!0
											);
											return a;
										}
									}
								},
								"login.status": {
									url: "dialog/oauth",
									transform: function(a) {
										var b = a.cb,
											c = a.id;
										delete a.cb;
										ES("Object", "assign", !1, a.params, {
											client_id: C.getClientID(),
											redirect_uri: N.xdHandler(
												b,
												c,
												"parent",
												p.getAuthResponse(),
												"login_status",
												!0
											),
											origin: y(),
											response_type: "token,signed_request",
											domain: location.hostname
										});
										return a;
									}
								},
								pay: {
									size: { width: 555, height: 120 },
									connectDisplay: "popup"
								},
								live_broadcast: {
									transform: function(a) {
										a.params.phase === "create" &&
											(a.size = { width: 480, height: 280 });
										a.params.phase === "publish" &&
											(a.size = { width: 772, height: 540 });
										return a;
									},
									require_access_token: !0
								},
								boost: {
									transform: function(a) {
										a.size = { width: 960, height: 760 };
										a.params.display = "popup";
										return a;
									}
								}
							};
							var K = {};
							function L(a, b) {
								K[b] = !0;
								return function(c) {
									delete K[b], a(c);
								};
							}
							function M(a) {
								if (!w("should_force_single_dialog_instance", !0)) return !1;
								var b = a.method.toLowerCase();
								return b === "pay" && a.display === "async" ? !0 : !1;
							}
							var N = {
								Methods: a,
								_loadedNodes: {},
								_defaultCb: {},
								_resultToken: '"xxRESULTTOKENxx"',
								genericTransform: function(a) {
									(a.params.display == "dialog" ||
										a.params.display == "iframe") &&
										ES(
											"Object",
											"assign",
											!1,
											a.params,
											{
												display: "iframe",
												channel: N._xdChannelHandler(a.id, "parent.parent")
											},
											!0
										);
									return a;
								},
								checkOauthDisplay: function(a) {
									var b = a.scope || a.perms || C.getScope();
									return !b ? a.display : "popup";
								},
								prepareCall: function(a, b) {
									__p && __p();
									var c = a.method.toLowerCase(),
										d = Object.prototype.hasOwnProperty.call(N.Methods, c)
											? ES("Object", "assign", !1, {}, N.Methods[c])
											: {},
										e = m(),
										f = !0;
									ES("Object", "assign", !1, a, {
										app_id: C.getClientID(),
										locale: C.getLocale(),
										sdk: "joey",
										access_token: (f && C.getAccessToken()) || undefined
									});
									(c === "share" || c === "share_open_graph") &&
										((a.mobile_iframe =
											E.mobile() && (a.mobile_iframe || a.iframe_test)),
										a.mobile_iframe && (d = ES("Object", "assign", !1, {}, G)));
									a.display = N.getDisplayMode(d, a);
									d.url || (d.url = "dialog/" + c);
									(d.url == "dialog/oauth" ||
										d.url == "dialog/permissions.request") &&
										(a.display == "iframe" ||
											(a.display == "touch" && a.in_iframe)) &&
										(a.display = N.checkOauthDisplay(a));
									a.display == "popup" &&
										!d.require_access_token &&
										delete a.access_token;
									C.getIsVersioned() &&
										d.url.substring(0, 7) === "dialog/" &&
										(d.url = a.version + "/" + d.url);
									if (M(a)) {
										if (K[c]) {
											f = 'Dialog "' + c + '" is trying to run more than once.';
											h.warn(f);
											b({ error_code: -100, error_message: f });
											return;
										}
										b = L(b, c);
									}
									f = {
										cb: b,
										id: e,
										size: d.size || N.getDefaultSize(),
										url:
											j.resolve(a.display == "touch" ? "m" : "www") +
											"/" +
											d.url,
										params: a,
										name: c,
										dialog: r.newInstance(e, a.display)
									};
									b = d.transform ? d.transform : N.genericTransform;
									if (b) {
										f = b(f);
										if (!f) return;
									}
									a.display === "touch" &&
										a.in_iframe &&
										(f.params.parent_height = window.innerHeight);
									c = d.getXdRelation || N.getXdRelation;
									b = c(f.params);
									!(f.id in N._defaultCb) &&
										!("next" in f.params) &&
										!("redirect_uri" in f.params) &&
										(f.params.next = N._xdResult(f.cb, f.id, b, !0));
									(b === "parent" || b === "opener") &&
										ES(
											"Object",
											"assign",
											!1,
											f.params,
											{
												channel_url: N._xdChannelHandler(
													e,
													b === "parent" ? "parent.parent" : "opener"
												)
											},
											!0
										);
									f = N.prepareParams(f);
									return f;
								},
								prepareParams: function(a) {
									a.params.display !== "async" && delete a.params.method;
									a.params.kid_directed_site =
										C.getKidDirectedSite() || a.params.kid_directed_site;
									a.params = l(a.params);
									var b = i.encode(a.params);
									!E.nativeApp() && N.urlTooLongForIE(a.url + "?" + b)
										? (a.post = !0)
										: b && (a.url += "?" + b);
									return a;
								},
								urlTooLongForIE: function(a) {
									return E.ie() && E.ie() <= 8 && a.length > 2048;
								},
								getDisplayMode: function(a, b) {
									__p && __p();
									if (
										b.display === "hidden" ||
										b.display === "none" ||
										b.display === "native"
									)
										return b.display;
									var c =
										C.isEnvironment(C.ENVIRONMENTS.CANVAS) ||
										C.isEnvironment(C.ENVIRONMENTS.PAGETAB);
									if (c && !b.display) return "async";
									if (I(b) || J(b)) return "async";
									if (E.mobile() || b.display === "touch") return "touch";
									if (
										(b.display == "iframe" || b.display == "dialog") &&
										!N.canIframe(b)
									) {
										h.error(
											'"dialog" mode can only be used when the user is connected.'
										);
										return "popup";
									}
									return a.connectDisplay && !c
										? a.connectDisplay
										: b.display || (N.canIframe(b) ? "dialog" : "popup");
								},
								canIframe: function(a) {
									if (C.getAccessToken()) return !0;
									return E.mobile() && C.getLoggedIntoFacebook()
										? !!a.mobile_iframe
										: !1;
								},
								getXdRelation: function(a) {
									a = a.display;
									if (a === "popup" || a === "touch") return "opener";
									if (
										a === "dialog" ||
										a === "iframe" ||
										a === "hidden" ||
										a === "none"
									)
										return "parent";
									if (a === "async")
										return "parent.frames[" + window.name + "]";
								},
								popup: function(a) {
									__p && __p();
									var b =
											typeof window.screenX !== "undefined"
												? window.screenX
												: window.screenLeft,
										c =
											typeof window.screenY !== "undefined"
												? window.screenY
												: window.screenTop,
										d =
											typeof window.outerWidth !== "undefined"
												? window.outerWidth
												: document.documentElement.clientWidth,
										e =
											typeof window.outerHeight !== "undefined"
												? window.outerHeight
												: document.documentElement.clientHeight - 22,
										f = E.mobile() ? null : a.size.width,
										g = E.mobile() ? null : a.size.height;
									b = b < 0 ? window.screen.width + b : b;
									b = parseInt(b + (d - f) / 2, 10);
									d = parseInt(c + (e - g) / 2.5, 10);
									c = [];
									f !== null && c.push("width=" + f);
									g !== null && c.push("height=" + g);
									c.push("left=" + b);
									c.push("top=" + d);
									c.push("scrollbars=1");
									(a.name == "permissions.request" ||
										a.name == "permissions.oauth") &&
										(c.push("toolbar=0"),
										(!E.chrome() || E.chrome() < 59) && c.push("location=1"));
									c = c.join(",");
									a.post
										? ((e = window.open("about:blank", a.id, c)),
										  e &&
												(N.setLoadedNode(a, e, "popup"),
												q.submitToTarget({
													url: a.url,
													target: a.id,
													params: a.params
												})))
										: ((e = window.open(a.url, a.id, c)),
										  e && N.setLoadedNode(a, e, "popup"));
									if (!e) {
										w("popup_blocker_scribe_logging", !0) &&
											D.log("jssdk_error", {
												appId: C.getClientID(),
												error: "POPUP_MAYBE_BLOCKED",
												extra: { call: a.name }
											});
										return;
									}
									a.id in N._defaultCb && N._popupMonitor();
								},
								setLoadedNode: function(a, b, c) {
									c === "iframe" && (b.fbCallID = a.id),
										(b = { node: b, type: c, fbCallID: a.id }),
										(N._loadedNodes[a.id] = b);
								},
								getLoadedNode: function(a) {
									a = typeof a === "object" ? a.id : a;
									a = N._loadedNodes[a];
									return a ? a.node : null;
								},
								hidden: function(a) {
									(a.className = "FB_UI_Hidden"),
										(a.root = q.appendHidden("")),
										N._insertIframe(a);
								},
								iframe: function(a) {
									__p && __p();
									a.className = "FB_UI_Dialog";
									a.params.mobile_iframe &&
										(r.setForceTabletStyle(!0),
										r.setCloseOnOverlayTap(!0),
										r.setPositionDialogAtTopWhenPortrait(!0));
									var b = function() {
											var b = ES("JSON", "stringify", !1, {
												error_code: 4201,
												error_message: v._("User canceled the Dialog flow")
											});
											N._triggerDefault(a.id, b);
										},
										c = {
											onClose: b,
											closeIcon: a.closeIcon === undefined ? !0 : a.closeIcon,
											classes: r.isTabletStyle() ? "centered" : ""
										};
									a.params.mobile_iframe &&
										(c.styles = { "border-radius": "8px" });
									a.root = r.create(c);
									a.hideLoader || r.showLoader(b, a.size.width);
									s.addCss(a.root, "fb_dialog_iframe");
									N._insertIframe(a);
								},
								touch: function(a) {
									a.params && a.params.in_iframe
										? a.ui_created
											? r.showLoader(function() {
													N._triggerDefault(a.id, null);
											  }, 0)
											: N.iframe(a)
										: E.nativeApp() && !a.ui_created
											? ((a.frame = a.id),
											  z.onready(function() {
													N.setLoadedNode(
														a,
														z.open(a.url + "#cb=" + a.frameName),
														"native"
													);
											  }),
											  N._popupMonitor())
											: a.ui_created || N.popup(a);
								},
								async: function(a) {
									__p && __p();
									a.params.redirect_uri =
										location.protocol +
										"//" +
										location.host +
										location.pathname;
									delete a.params.access_token;
									var b = function(b) {
										b = b.result;
										if (b && b.e2e) {
											var c = r.get(a.id);
											c.trackEvents(b.e2e);
											c.trackEvent("close");
											delete b.e2e;
										}
										a.cb(b);
									};
									I(a.params) || J(a.params)
										? ((a.params.method = "oauth"),
										  (a.params.redirect_uri = a.params.next),
										  u.remote.showDialog(a.params, b))
										: B.remote.showDialog(a.params, b);
								},
								native: function(a) {
									A(a.params);
								},
								getDefaultSize: function() {
									return r.getDefaultSize();
								},
								_insertIframe: function(a) {
									N._loadedNodes[a.id] = !1;
									var b = function(b) {
										a.id in N._loadedNodes && N.setLoadedNode(a, b, "iframe");
									};
									a.post
										? n({
												url: "about:blank",
												root: a.root,
												className: a.className,
												width: a.size.width,
												height: a.size.height,
												id: a.id,
												onInsert: b,
												onload: function(b) {
													q.submitToTarget({
														url: a.url,
														target: b.name,
														params: a.params
													});
												}
										  })
										: n({
												url: a.url,
												root: a.root,
												className: a.className,
												width: a.size.width,
												height: a.size.height,
												id: a.id,
												name: a.frameName,
												onInsert: b
										  });
								},
								_handleResizeMessage: function(a, b) {
									a = N.getLoadedNode(a);
									if (!a) return;
									b.height && (a.style.height = b.height + "px");
									b.width && (a.style.width = b.width + "px");
									F.inform(
										"resize.ack",
										b || {},
										"parent.frames[" + a.name + "]"
									);
									!r.isActive(a) ? r.show(a) : r._centerActive();
								},
								_triggerDefault: function(a, b) {
									var c = { frame: a };
									b && (c.result = b);
									N._xdRecv(c, N._defaultCb[a] || function() {});
								},
								_popupMonitor: function() {
									__p && __p();
									var a;
									for (var b in N._loadedNodes)
										if (
											Object.prototype.hasOwnProperty.call(N._loadedNodes, b) &&
											b in N._defaultCb
										) {
											var c = N._loadedNodes[b];
											if (c.type != "popup" && c.type != "native") continue;
											c = c.node;
											try {
												c.closed ? N._triggerDefault(b, null) : (a = !0);
											} catch (a) {}
										}
									a && !N._popupInterval
										? (N._popupInterval = setInterval(N._popupMonitor, 100))
										: !a &&
										  N._popupInterval &&
										  (clearInterval(N._popupInterval),
										  (N._popupInterval = null));
								},
								_xdChannelHandler: function(a, b) {
									__p && __p();
									return F.handler(
										function(b) {
											__p && __p();
											var c = N.getLoadedNode(a);
											if (!c) return;
											if (b.type == "resize") N._handleResizeMessage(a, b);
											else if (b.type == "hide") r.hide(c);
											else if (b.type == "rendered") {
												c = r._findRoot(c);
												r.show(c);
											} else b.type == "fireevent" && t.fire(b.event, b);
										},
										b,
										!0,
										null
									);
								},
								_xdNextHandler: function(a, b, c, d) {
									d && (N._defaultCb[b] = a);
									return (
										F.handler(function(b) {
											N._xdRecv(b, a);
										}, c) +
										"&frame=" +
										b
									);
								},
								_xdRecv: function(a, b) {
									__p && __p();
									var c = N.getLoadedNode(a.frame);
									if (c)
										if (c.close)
											try {
												c.close(),
													/iPhone.*Version\/(5|6)/.test(navigator.userAgent) &&
														RegExp.$1 !== "5" &&
														window.focus(),
													N._popupCount--;
											} catch (a) {}
										else
											s.containsCss(c, "FB_UI_Hidden")
												? setTimeout(function() {
														c.parentNode.parentNode.removeChild(c.parentNode);
												  }, 3e3)
												: s.containsCss(c, "FB_UI_Dialog") && r.remove(c);
									delete N._loadedNodes[a.frame];
									delete N._defaultCb[a.frame];
									if (a.e2e) {
										var d = r.get(a.frame);
										d.trackEvents(a.e2e);
										d.trackEvent("close");
										delete a.e2e;
									}
									b(a);
								},
								_xdResult: function(a, b, c, d) {
									return (
										N._xdNextHandler(
											function(b) {
												a &&
													a(
														b.result &&
															b.result != N._resultToken &&
															ES("JSON", "parse", !1, b.result)
													);
											},
											b,
											c,
											d
										) +
										"&result=" +
										encodeURIComponent(N._resultToken)
									);
								},
								xdHandler: function(a, b, c, d, e, f) {
									return N._xdNextHandler(
										p.xdResponseWrapper(a, d, e),
										b,
										c,
										f
									);
								}
							};
							u.stub("showDialog");
							B.stub("showDialog");
							e.exports = N;
						},
						null
					);
					__d(
						"sdk.ui",
						[
							"Assert",
							"Log",
							"URI",
							"sdk.feature",
							"sdk.Impressions",
							"sdk.PlatformVersioning",
							"sdk.Runtime",
							"sdk.UIServer"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
							__p && __p();
							function a(a, b) {
								__p && __p();
								g.isObject(a);
								g.maybeFunction(b);
								m.getIsVersioned() &&
									(l.assertVersionIsSet(),
									a.version
										? l.assertValidVersion(a.version)
										: (a.version = m.getVersion()));
								a = ES("Object", "assign", !1, {}, a);
								if (!a.method) {
									h.error('"method" is a required parameter for FB.ui().');
									return null;
								}
								a.method == "pay.prompt" && (a.method = "pay");
								var c = a.method;
								a.redirect_uri &&
									(h.warn(
										"When using FB.ui, you should not specify a redirect_uri."
									),
									delete a.redirect_uri);
								if (!a.fallback_redirect_uri) {
									var d = new i(document.location.href);
									d.setQueryData({}).setFragment();
									a.fallback_redirect_uri = d.toString();
								}
								(c == "permissions.request" || c == "permissions.oauth") &&
									(a.display == "iframe" || a.display == "dialog") &&
									(a.display = n.checkOauthDisplay(a));
								if (a.display === "native" && c !== "send") {
									h.error('display type "native" not supported');
									return null;
								}
								d = j("e2e_tracking", !0);
								d && (a.e2e = {});
								a = n.prepareCall(a, b || function() {});
								if (!a) return null;
								var e = a.params.display;
								e === "dialog"
									? (e = "iframe")
									: e === "none" && (e = "hidden");
								b = n[e];
								if (!b) {
									h.error(
										'"display" must be one of "popup", "dialog", "iframe", "touch", "async", "hidden", or "none"'
									);
									return null;
								}
								d &&
									a.dialog.subscribe("e2e:end", function(a) {
										(a.method = c),
											(a.display = e),
											h.debug("e2e: %s", ES("JSON", "stringify", !1, a)),
											k.log(114, { payload: a });
									});
								b(a);
								return a.dialog;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"legacy:fb.auth",
						[
							"FB",
							"Log",
							"sdk.Auth",
							"sdk.Cookie",
							"sdk.Event",
							"sdk.Runtime",
							"sdk.SignedRequest",
							"sdk.ui"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
							__p && __p();
							g.provide("", {
								getLoginStatus: function() {
									return i.getLoginStatus.apply(i, arguments);
								},
								getAuthResponse: function() {
									return i.getAuthResponse();
								},
								getAccessToken: function() {
									return l.getAccessToken() || null;
								},
								getUserID: function() {
									return l.getUserID() || l.getCookieUserID();
								},
								login: function(a, b) {
									b &&
										b.perms &&
										!b.scope &&
										((b.scope = b.perms),
										delete b.perms,
										h.warn(
											"OAuth2 specification states that 'perms' should now be called 'scope'.  Please update."
										));
									var c =
										l.isEnvironment(l.ENVIRONMENTS.CANVAS) ||
										l.isEnvironment(l.ENVIRONMENTS.PAGETAB);
									n(
										babelHelpers["extends"](
											{
												method: "permissions.oauth",
												display: c ? "async" : "popup",
												domain: location.hostname
											},
											b || {}
										),
										a
									);
								},
								logout: function(a) {
									n({ method: "auth.logout", display: "hidden" }, a);
								}
							}),
								i.subscribe("logout", ES(k.fire, "bind", !0, k, "auth.logout")),
								i.subscribe("login", ES(k.fire, "bind", !0, k, "auth.login")),
								i.subscribe(
									"authresponse.change",
									ES(k.fire, "bind", !0, k, "auth.authResponseChange")
								),
								i.subscribe(
									"status.change",
									ES(k.fire, "bind", !0, k, "auth.statusChange")
								),
								k.subscribe("init:post", function(a) {
									__p && __p();
									a.status && i.getLoginStatus();
									if (l.getClientID())
										if (a.authResponse)
											i.setAuthResponse(a.authResponse, "connected");
										else if (l.getUseCookie()) {
											a = j.loadSignedRequest();
											if (a) {
												try {
													a = m.parse(a);
												} catch (a) {
													j.clearSignedRequestCookie();
												}
												a && a.user_id && l.setCookieUserID(a.user_id);
											}
										}
								});
						},
						3
					);
					__d(
						"sdk.Canvas.IframeHandling",
						["DOMWrapper", "sdk.RPC"],
						function(a, b, c, d, e, f, g, h) {
							__p && __p();
							var i = null,
								j;
							function k() {
								var a = g.getWindow().document,
									b = a.body;
								a = a.documentElement;
								var c = Math.max(b.offsetTop, 0),
									d = Math.max(a.offsetTop, 0),
									e = b.scrollHeight + c;
								b = b.offsetHeight + c;
								c = a.scrollHeight + d;
								a = a.offsetHeight + d;
								return Math.max(e, b, c, a);
							}
							function l(a) {
								__p && __p();
								typeof a !== "object" && (a = {});
								var b = 0,
									c = 0;
								a.height || ((a.height = k()), (b = 16), (c = 4));
								a.frame || (a.frame = window.name || "iframe_canvas");
								if (j) {
									var d = j.height;
									d = a.height - d;
									if (d <= c && d >= -b) return !1;
								}
								j = a;
								h.remote.setSize(a);
								return !0;
							}
							function a(a, b) {
								b === undefined && typeof a === "number" && ((b = a), (a = !0)),
									a || a === undefined
										? (i === null &&
												(i = setInterval(function() {
													l();
												}, b || 100)),
										  l())
										: i !== null && (clearInterval(i), (i = null));
							}
							h.stub("setSize");
							b = { setSize: l, setAutoGrow: a };
							e.exports = b;
						},
						null
					);
					__d(
						"sdk.Canvas.Navigation",
						["sdk.RPC"],
						function(a, b, c, d, e, f, g) {
							function a(a) {
								(g.local.navigate = function(b) {
									a({ path: b });
								}),
									g.remote.setNavigationEnabled(!0);
							}
							g.stub("setNavigationEnabled");
							b = { setUrlHandler: a };
							e.exports = b;
						},
						null
					);
					__d(
						"sdk.Canvas.Plugin",
						["Log", "sdk.api", "sdk.RPC", "sdk.Runtime", "sdk.UA"],
						function(a, b, c, d, e, f, g, h, i, j, k) {
							__p && __p();
							var l = "CLSID:D27CDB6E-AE6D-11CF-96B8-444553540000",
								m = "CLSID:444785F1-DE89-4295-863A-D46C3A781394",
								n = null;
							c = k.osx() && k.osx.getVersionParts();
							var o = !(
								c &&
								c[0] > 10 &&
								c[1] > 10 &&
								(k.chrome() >= 31 || k.webkit() >= 537.71 || k.firefox() >= 25)
							);
							function p(a) {
								(a._hideunity_savedstyle = {}),
									(a._hideunity_savedstyle.left = a.style.left),
									(a._hideunity_savedstyle.position = a.style.position),
									(a._hideunity_savedstyle.width = a.style.width),
									(a._hideunity_savedstyle.height = a.style.height),
									(a.style.left = "-10000px"),
									(a.style.position = "absolute"),
									(a.style.width = "1px"),
									(a.style.height = "1px");
							}
							function q(a) {
								a._hideunity_savedstyle &&
									((a.style.left = a._hideunity_savedstyle.left),
									(a.style.position = a._hideunity_savedstyle.position),
									(a.style.width = a._hideunity_savedstyle.width),
									(a.style.height = a._hideunity_savedstyle.height));
							}
							function r(a) {
								(a._old_visibility = a.style.visibility),
									(a.style.visibility = "hidden");
							}
							function s(a) {
								(a.style.visibility = a._old_visibility || ""),
									delete a._old_visibility;
							}
							function t(a) {
								__p && __p();
								var b = a.type ? a.type.toLowerCase() : null;
								b =
									b === "application/x-shockwave-flash" ||
									(a.classid && a.classid.toUpperCase() == l);
								if (!b) return !1;
								b = /opaque|transparent/i;
								if (b.test(a.getAttribute("wmode"))) return !1;
								for (var c = 0; c < a.childNodes.length; c++) {
									var d = a.childNodes[c];
									if (
										/param/i.test(d.nodeName) &&
										/wmode/i.test(d.name) &&
										b.test(d.value)
									)
										return !1;
								}
								return !0;
							}
							function u(a) {
								var b = a.type ? a.type.toLowerCase() : null;
								return (
									b === "application/vnd.unity" ||
									(a.classid && a.classid.toUpperCase() == m)
								);
							}
							function v(a) {
								__p && __p();
								var b = ES(
									"Array",
									"from",
									!1,
									window.document.getElementsByTagName("object")
								);
								b = b.concat(
									ES(
										"Array",
										"from",
										!1,
										window.document.getElementsByTagName("embed")
									)
								);
								var c = !1,
									d = !1;
								ES(b, "forEach", !0, function(b) {
									__p && __p();
									var e = t(b),
										f = o && u(b);
									if (!e && !f) return;
									c = c || e;
									d = d || f;
									f = function() {
										a.state === "opened" ? (e ? r(b) : p(b)) : e ? s(b) : q(b);
									};
									if (n) {
										g.info("Calling developer specified callback");
										var h = { state: a.state, elem: b };
										n(h);
										setTimeout(f, 200);
									} else f();
								});
								if (Math.random() <= 1 / 1e3) {
									b = { unity: d, flash: c };
									h(j.getClientID() + "/occludespopups", "post", b);
								}
							}
							i.local.hidePluginObjects = function() {
								g.info("hidePluginObjects called"), v({ state: "opened" });
							};
							i.local.showPluginObjects = function() {
								g.info("showPluginObjects called"), v({ state: "closed" });
							};
							i.local.showFlashObjects = i.local.showPluginObjects;
							i.local.hideFlashObjects = i.local.hidePluginObjects;
							function a() {
								r(), p();
							}
							function b() {
								s(), q();
							}
							d = {
								_setHidePluginCallback: function(a) {
									n = a;
								},
								hidePluginElement: a,
								showPluginElement: b
							};
							e.exports = d;
						},
						null
					);
					__d(
						"sdk.Canvas.Tti",
						["sdk.RPC", "sdk.Runtime"],
						function(a, b, c, d, e, f, g, h) {
							__p && __p();
							function i(a, b) {
								b = {
									appId: h.getClientID(),
									time: ES("Date", "now", !1),
									name: b
								};
								b = [b];
								a &&
									b.push(function(b) {
										a(b.result);
									});
								g.remote.logTtiMessage.apply(null, b);
							}
							function a() {
								i(null, "StartIframeAppTtiTimer");
							}
							function b(a) {
								i(a, "StopIframeAppTtiTimer");
							}
							function c(a) {
								i(a, "RecordIframeAppTti");
							}
							g.stub("logTtiMessage");
							d = { setDoneLoading: c, startTimer: a, stopTimer: b };
							e.exports = d;
						},
						null
					);
					__d(
						"legacy:fb.canvas",
						[
							"Assert",
							"sdk.Canvas.Environment",
							"sdk.Event",
							"FB",
							"sdk.Canvas.IframeHandling",
							"sdk.Canvas.Navigation",
							"sdk.Canvas.Plugin",
							"sdk.RPC",
							"sdk.Runtime",
							"sdk.Canvas.Tti"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
							__p && __p();
							j.provide("Canvas", {
								setSize: function(a) {
									g.maybeObject(a, "Invalid argument");
									return k.setSize.apply(null, arguments);
								},
								setAutoGrow: function() {
									return k.setAutoGrow.apply(null, arguments);
								},
								getPageInfo: function(a) {
									g.isFunction(a, "Invalid argument");
									return h.getPageInfo.apply(null, arguments);
								},
								scrollTo: function(a, b) {
									g.maybeNumber(a, "Invalid argument");
									g.maybeNumber(b, "Invalid argument");
									return h.scrollTo.apply(null, arguments);
								},
								setDoneLoading: function(a) {
									g.maybeFunction(a, "Invalid argument");
									return p.setDoneLoading.apply(null, arguments);
								},
								startTimer: function() {
									return p.startTimer.apply(null, arguments);
								},
								stopTimer: function(a) {
									g.maybeFunction(a, "Invalid argument");
									return p.stopTimer.apply(null, arguments);
								},
								getHash: function(a) {
									g.isFunction(a, "Invalid argument");
									return l.getHash.apply(null, arguments);
								},
								setHash: function(a) {
									g.isString(a, "Invalid argument");
									return l.setHash.apply(null, arguments);
								},
								setUrlHandler: function(a) {
									g.isFunction(a, "Invalid argument");
									return l.setUrlHandler.apply(null, arguments);
								}
							}),
								(n.local.fireEvent = ES(i.fire, "bind", !0, i)),
								i.subscribe("init:post", function(a) {
									o.isEnvironment(o.ENVIRONMENTS.CANVAS) &&
										(g.isTrue(
											!a.hideFlashCallback || !a.hidePluginCallback,
											"cannot specify deprecated hideFlashCallback and new hidePluginCallback"
										),
										m._setHidePluginCallback(
											a.hidePluginCallback || a.hideFlashCallback
										));
								});
						},
						3
					);
					__d(
						"legacy:fb.canvas-legacy",
						["Assert", "FB", "Log", "sdk.Canvas.Tti"],
						function(a, b, c, d, e, f, g, h, i, j) {
							h.provide("CanvasInsights", {
								setDoneLoading: function(a) {
									i.warn("Deprecated: use FB.Canvas.setDoneLoading");
									g.maybeFunction(a, "Invalid argument");
									return j.setDoneLoading.apply(null, arguments);
								}
							});
						},
						3
					);
					__d(
						"legacy:fb.canvas.plugin",
						["FB", "sdk.Canvas.Plugin"],
						function(a, b, c, d, e, f, g, h) {
							g.provide("Canvas.Plugin", h);
						},
						3
					);
					__d(
						"sdk.Canvas.Prefetcher",
						["JSSDKCanvasPrefetcherConfig", "sdk.api", "sdk.Runtime"],
						function(a, b, c, d, e, f, g, h, i) {
							__p && __p();
							var j = { AUTOMATIC: 0, MANUAL: 1 },
								k = g.sampleRate,
								l = g.blacklist,
								m = j.AUTOMATIC,
								n = [];
							function o() {
								var a = { object: "data", link: "href", script: "src" };
								m == j.AUTOMATIC &&
									ES(ES("Object", "keys", !1, a), "forEach", !0, function(b) {
										var c = a[b];
										ES(
											ES("Array", "from", !1, document.getElementsByTagName(b)),
											"forEach",
											!0,
											function(a) {
												a[c] && n.push(a[c]);
											}
										);
									});
								if (n.length === 0) return;
								h(i.getClientID() + "/staticresources", "post", {
									urls: ES("JSON", "stringify", !1, n),
									is_https: location.protocol === "https:"
								});
								n = [];
							}
							function a() {
								if (
									!i.isEnvironment(i.ENVIRONMENTS.CANVAS) ||
									!i.getClientID() ||
									!k
								)
									return;
								if (
									Math.random() > 1 / k ||
									l == "*" ||
									~ES(l, "indexOf", !0, i.getClientID())
								)
									return;
								setTimeout(o, 3e4);
							}
							function b(a) {
								m = a;
							}
							function c(a) {
								n.push(a);
							}
							d = {
								COLLECT_AUTOMATIC: j.AUTOMATIC,
								COLLECT_MANUAL: j.MANUAL,
								addStaticResource: c,
								setCollectionMode: b,
								_maybeSample: a
							};
							e.exports = d;
						},
						null
					);
					__d(
						"legacy:fb.canvas.prefetcher",
						["FB", "sdk.Canvas.Prefetcher", "sdk.Event", "sdk.Runtime"],
						function(a, b, c, d, e, f, g, h, i, j) {
							g.provide("Canvas.Prefetcher", h),
								i.subscribe("init:post", function(a) {
									j.isEnvironment(j.ENVIRONMENTS.CANVAS) && h._maybeSample();
								});
						},
						3
					);
					__d(
						"legacy:fb.compat.ui",
						["FB", "Log", "sdk.ui", "sdk.UIServer"],
						function(a, b, c, d, e, f, g, h, i, j) {
							g.provide("", {
								share: function(a) {
									h.error(
										"share() has been deprecated. Please use FB.ui() instead."
									),
										i({ display: "popup", method: "stream.share", u: a });
								},
								publish: function(a, b) {
									h.error(
										"publish() has been deprecated. Please use FB.ui() instead."
									),
										(a = a || {}),
										i(
											babelHelpers["extends"](
												{
													display: "popup",
													method: "stream.publish",
													preview: 1
												},
												a || {}
											),
											b
										);
								},
								addFriend: function(a, b) {
									h.error(
										"addFriend() has been deprecated. Please use FB.ui() instead."
									),
										i({ display: "popup", id: a, method: "friend.add" }, b);
								}
							}),
								(j.Methods["auth.login"] = j.Methods["permissions.request"]);
						},
						3
					);
					__d(
						"sdk.Data",
						["Log"],
						function(a, b, c, d, e, f, g) {
							a = function() {
								g.error(
									"##########################\n#  FB.Data has been deprecated.\n#  Please use FB.api().\n#  https://developers.facebook.com/docs/javascript/reference/FB.api/\n##########################"
								);
							};
							b = { query: a, waitOn: a, process: a };
							e.exports = b;
						},
						null
					);
					__d(
						"legacy:fb.data",
						["FB", "sdk.Data"],
						function(a, b, c, d, e, f, g, h) {
							g.provide("Data", h);
						},
						3
					);
					__d(
						"legacy:fb.event",
						["FB", "sdk.Event", "Log"],
						function(a, b, c, d, e, f, g, h, i) {
							a = function(a) {
								return i.error("FB.Event." + a + "() has been deprecated");
							};
							g.provide("Event", {
								subscribe: function(a, b) {
									return h.subscribe(a, b);
								},
								unsubscribe: ES(h.unsubscribe, "bind", !0, h),
								clear: ES(a, "bind", !0, null, "clear"),
								fire: ES(a, "bind", !0, null, "fire")
							});
						},
						3
					);
					__d(
						"legacy:fb.frictionless",
						["FB", "sdk.Frictionless"],
						function(a, b, c, d, e, f, g, h) {
							g.provide("Frictionless", h);
						},
						3
					);
					__d(
						"sdk.MBasicInitializer",
						[
							"UrlMap",
							"sdk.DOM",
							"sdk.fbt",
							"sdk.feature",
							"sdk.Runtime",
							"sdk.UA",
							"sdk.URI"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
							__p && __p();
							var n = function() {
								__p && __p();
								function a(a) {
									__p && __p();
									if (!a) return;
									var b = a.parentNode;
									if (!b) return;
									var c = h.getAttr(a, "href") || window.location.href,
										d = new m(g.resolve("m"));
									d.setPath("/dialog/share");
									d.addQueryData("href", encodeURI(c));
									d.addQueryData("app_id", k.getClientID());
									d.addQueryData("mbasic_link", 1);
									c = document.createElement("a");
									c.style = "display:inline-block; zoom:1;";
									c.textContent = i._("Share to Facebook");
									c.setAttribute("href", d.toString());
									c.setAttribute("target", "_blank");
									b.insertBefore(c, a);
									b.removeChild(a);
								}
								if (!j("js_sdk_mbasic_share_plugin_init", !1)) return;
								ES(
									ES(
										"Array",
										"from",
										!1,
										document.getElementsByTagName("fb:share-button")
									),
									"forEach",
									!0,
									function(b) {
										return a(b);
									}
								);
								ES(
									ES(
										"Array",
										"from",
										!1,
										document.getElementsByClassName("fb-share-button")
									),
									"forEach",
									!0,
									function(b) {
										return a(b);
									}
								);
							};
							function a() {
								if (!l.mBasic()) return;
								n();
							}
							e.exports = { init: a };
						},
						null
					);
					__d(
						"sdk.init",
						[
							"Log",
							"ManagedError",
							"QueryString",
							"sdk.Cookie",
							"sdk.ErrorHandling",
							"sdk.Event",
							"sdk.MBasicInitializer",
							"sdk.PlatformVersioning",
							"sdk.Runtime",
							"sdk.UA",
							"sdk.URI"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
							__p && __p();
							function r(a) {
								var b =
									(typeof a === "number" && a > 0) ||
									(typeof a === "string" &&
										/^[0-9a-f]{21,}$|^[0-9]{1,21}$/.test(a));
								if (b) return a.toString();
								g.warn(
									"Invalid App Id: Must be a number or numeric string representing the application id."
								);
								return null;
							}
							function s(a) {
								__p && __p();
								o.getInitialized() &&
									g.warn(
										"FB.init has already been called - this could indicate a problem"
									);
								if (o.getIsVersioned()) {
									if (Object.prototype.toString.call(a) !== "[object Object]")
										throw new h("Invalid argument");
									a.authResponse &&
										g.warn("Setting authResponse is not supported");
									a.version ||
										(a.version = new q(
											location.href
										).getQueryData().sdk_version);
									n.assertValidVersion(a.version);
									o.setVersion(a.version);
								} else
									/number|string/.test(typeof a) &&
										(g.warn("FB.init called with invalid parameters"),
										(a = { apiKey: a })),
										(a = ES("Object", "assign", !1, { status: !0 }, a || {}));
								var b = r(a.appId || a.apiKey);
								b !== null && o.setClientID(b);
								"scope" in a && o.setScope(a.scope);
								a.cookie &&
									(o.setUseCookie(!0),
									typeof a.cookie === "string" && j.setDomain(a.cookie));
								(a.localStorage === !1 || a.localStorage === "false") &&
									o.setUseLocalStorage(!1);
								a.kidDirectedSite && o.setKidDirectedSite(!0);
								(a.autoLogAppEvents === "1" || a.autoLogAppEvents === "true") &&
									(a.autoLogAppEvents = !0);
								a.ab && o.setSDKAB(a.ab);
								o.setInitialized(!0);
								p.mBasic() && m.init();
								l.fire("init:post", a);
							}
							setTimeout(function() {
								__p && __p();
								var a = /(connect\.facebook\.net|\.facebook\.com\/assets.php|\.facebook\.net\/assets.php).*?#(.*)/;
								ES(
									ES(
										"Array",
										"from",
										!1,
										fb_fif_window.document.getElementsByTagName("script")
									),
									"forEach",
									!0,
									function(b) {
										__p && __p();
										if (b.src) {
											b = a.exec(b.src);
											if (b) {
												b = i.decode(b[2]);
												for (var c in b)
													if (Object.prototype.hasOwnProperty.call(b, c)) {
														var d = b[c];
														d == "0" && (b[c] = 0);
													}
												s(b);
											}
										}
									}
								);
								window.fbAsyncInit &&
									!window.fbAsyncInit.hasRun &&
									(l.fire("init:asyncstart"),
									(window.fbAsyncInit.hasRun = !0),
									k.unguard(window.fbAsyncInit)());
							}, 0);
							e.exports = s;
						},
						null
					);
					__d(
						"legacy:fb.init",
						["FB", "sdk.init"],
						function(a, b, c, d, e, f, g, h) {
							g.provide("", { init: h });
						},
						3
					);
					__d(
						"legacy:fb.json",
						["FB", "ManagedError"],
						function(a, b, c, d, e, f, g, h) {
							g.provide("JSON", {
								stringify: function(a) {
									try {
										return ES("JSON", "stringify", !1, a);
									} catch (a) {
										throw new h(a.message, a);
									}
								},
								parse: function(a) {
									try {
										return ES("JSON", "parse", !1, a);
									} catch (a) {
										throw new h(a.message, a);
									}
								}
							});
						},
						3
					);
					__d(
						"runOnce",
						[],
						function(a, b, c, d, e, f) {
							function a(a) {
								var b, c;
								return function() {
									b || ((b = !0), (c = a()));
									return c;
								};
							}
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.Time",
						["Log", "sdk.feature", "sdk.Impressions", "sdk.Runtime"],
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							var k = window.performance,
								l = k && "now" in k && "getEntriesByName" in k,
								m,
								n = {};
							if (l) {
								var o = j.getSDKUrl();
								a = null;
								b = ES(k.getEntriesByType("resource"), "filter", !0, function(
									a
								) {
									return ES(a.name, "startsWith", !0, o);
								});
								if (b.length > 1)
									if (b > 2) b = null;
									else {
										c = b.findIndex(function(a) {
											return ES(a.name, "startsWith", !0, o + "?hash=");
										});
										!c ? (b = null) : ((a = b.splice(c)[0]), (b = b[0]));
									}
								else b.length === 1 ? (b = b[0]) : (b = null);
								b &&
									((n.fetchTime = Number(b.duration)),
									a && (n.fetchTime += Number(a.duration)),
									"transferSize" in b &&
										((n.transferSize = Number(b.transferSize)),
										a && (n.transferSize += Number(a.transferSize))),
									g.debug(
										"sdkperf: it took %s ms and %s bytes to load %s",
										n.fetchTime,
										n.transferSize,
										o
									),
									(m = b.startTime),
									(n.ns = j.getSDKNS()),
									m &&
										setTimeout(function() {
											var a = h("log_perf", !1),
												b = j.getSDKAB();
											b &&
												((n.ab = b),
												(b === "yn" || b === "ny") &&
													(a = h("log_perf_devsite", !1)));
											a && i.log(116, n);
										}, 1e4));
							}
							d = {
								log: function(a) {
									if (!l || !m) return;
									n[a] = Number(k.now() - m);
									g.debug("sdkperf: %s logged after %s ms", a, n[a]);
								}
							};
							e.exports = d;
						},
						null
					);
					__d(
						"legacy:fb.time",
						["sdk.Event", "sdk.Time", "runOnce"],
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							g.subscribe("init:post", function() {
								h.log("init");
							}),
								g.subscribe("init:asyncstart", function() {
									h.log("asyncstart");
								}),
								g.subscribe(
									"iframeplugin:create",
									i(function() {
										return h.log("pluginframe");
									})
								),
								g.subscribe(
									"iframeplugin:onload",
									i(function() {
										return h.log("ttfp");
									})
								);
						},
						3
					);
					__d(
						"legacy:fb.ua",
						["FB", "sdk.UA"],
						function(a, b, c, d, e, f, g, h) {
							g.provide("UA", { nativeApp: h.nativeApp });
						},
						3
					);
					__d(
						"legacy:fb.ui",
						["FB", "sdk.ui"],
						function(a, b, c, d, e, f, g, h) {
							g.provide("", { ui: h });
						},
						3
					);
					__d(
						"XFBML",
						[
							"Assert",
							"Log",
							"ObservableMixin",
							"runOnce",
							"sdk.DOM",
							"sdk.UA"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							__p && __p();
							var m = {},
								n = {},
								o = 0,
								p = new i();
							function q(a, b) {
								return ES(a[b] + "", "trim", !0);
							}
							function r(a) {
								return a.scopeName ? a.scopeName + ":" + a.nodeName : "";
							}
							function s(a) {
								return (
									m[q(a, "nodeName").toLowerCase()] || m[r(a).toLowerCase()]
								);
							}
							function t(a) {
								var b = ES(
									q(a, "className").split(/\s+/),
									"filter",
									!0,
									function(a) {
										return Object.prototype.hasOwnProperty.call(n, a);
									}
								);
								if (b.length === 0) return undefined;
								if (
									a.getAttribute("fb-xfbml-state") ||
									!a.childNodes ||
									a.childNodes.length === 0 ||
									(a.childNodes.length === 1 &&
										a.childNodes[0].nodeType === 3) ||
									(a.children.length === 1 &&
										q(a.children[0], "className") === "fb-xfbml-parse-ignore")
								)
									return n[b[0]];
							}
							function u(a) {
								var b = {};
								ES(
									ES("Array", "from", !1, a.attributes),
									"forEach",
									!0,
									function(a) {
										b[q(a, "name")] = q(a, "value");
									}
								);
								return b;
							}
							function v(a, b, c) {
								var d = document.createElement("div");
								k.addCss(a, b + "-" + c);
								ES(
									ES("Array", "from", !1, a.childNodes),
									"forEach",
									!0,
									function(a) {
										d.appendChild(a);
									}
								);
								ES(
									ES("Array", "from", !1, a.attributes),
									"forEach",
									!0,
									function(a) {
										d.setAttribute(a.name, a.value);
									}
								);
								a.parentNode.replaceChild(d, a);
								return d;
							}
							function w(a, b, c) {
								__p && __p();
								g.isTrue(
									a &&
										a.nodeType &&
										a.nodeType === 1 &&
										!!a.getElementsByTagName,
									"Invalid DOM node passed to FB.XFBML.parse()"
								);
								g.isFunction(b, "Invalid callback passed to FB.XFBML.parse()");
								var d = ++o;
								h.info("XFBML Parsing Start %s", d);
								var e = 1,
									f = 0,
									i = function() {
										e--,
											e === 0 &&
												(h.info("XFBML Parsing Finish %s, %s tags found", d, f),
												b(),
												p.inform("render", d, f)),
											g.isTrue(
												e >= 0,
												"onrender() has been called too many times"
											);
									};
								ES(
									ES("Array", "from", !1, a.getElementsByTagName("*")),
									"forEach",
									!0,
									function(a) {
										__p && __p();
										if (!c && a.getAttribute("fb-xfbml-state")) return;
										if (a.nodeType !== 1) return;
										var b = s(a) || t(a);
										if (!b) return;
										l.ie() < 9 &&
											a.scopeName &&
											(a = v(a, b.xmlns, b.localName));
										e++;
										f++;
										var d = new b.ctor(a, b.xmlns, b.localName, u(a));
										d.subscribe(
											"render",
											j(function() {
												a.setAttribute("fb-xfbml-state", "rendered"), i();
											})
										);
										b = function b() {
											a.getAttribute("fb-xfbml-state") == "parsed"
												? p.subscribe("render.queue", b)
												: (a.setAttribute("fb-xfbml-state", "parsed"),
												  d.process());
										};
										b();
									}
								);
								p.inform("parse", d, f);
								var k = 3e4;
								setTimeout(function() {
									e > 0 && h.warn("%s tags failed to render in %s ms", e, k);
								}, k);
								i();
							}
							p.subscribe("render", function() {
								var a = p.getSubscribers("render.queue");
								p.clearSubscribers("render.queue");
								ES(a, "forEach", !0, function(a) {
									a();
								});
							});
							ES("Object", "assign", !1, p, {
								registerTag: function(a) {
									var b = a.xmlns + ":" + a.localName;
									g.isUndefined(m[b], b + " already registered");
									m[b] = a;
									n[a.xmlns + "-" + a.localName] = a;
								},
								parse: function(a, b) {
									w(a || document.body, b || function() {}, !0);
								},
								parseNew: function() {
									w(document.body, function() {}, !1);
								}
							});
							e.exports = p;
						},
						null
					);
					__d(
						"legacy:fb.xfbml",
						[
							"Assert",
							"sdk.Event",
							"FB",
							"XFBML",
							"sdk.domReady",
							"wrapFunction"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							__p && __p();
							i.provide("XFBML", {
								parse: function(a) {
									g.maybeXfbml(a, "Invalid argument");
									a && a.nodeType === 9 && (a = a.body);
									return j.parse.apply(null, arguments);
								}
							});
							j.subscribe("parse", ES(h.fire, "bind", !0, h, "xfbml.parse"));
							j.subscribe("render", ES(h.fire, "bind", !0, h, "xfbml.render"));
							h.subscribe("init:post", function(a) {
								a.xfbml &&
									setTimeout(
										l(
											ES(k, "bind", !0, null, j.parse),
											"entry",
											"init:post:xfbml.parse"
										),
										0
									);
							});
							g.define("Xfbml", function(a) {
								return (
									(a.nodeType === 1 || a.nodeType === 9) &&
									typeof a.nodeName === "string"
								);
							});
							try {
								document.namespaces &&
									!document.namespaces.item.fb &&
									document.namespaces.add("fb");
							} catch (a) {}
						},
						3
					);
					__d(
						"IframePlugin",
						[
							"Log",
							"ObservableMixin",
							"QueryString",
							"Type",
							"UrlMap",
							"guid",
							"resolveURI",
							"sdk.Auth",
							"sdk.createIframe",
							"sdk.DOM",
							"sdk.Event",
							"sdk.PlatformVersioning",
							"sdk.Runtime",
							"sdk.UA",
							"sdk.URI",
							"sdk.XD"
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
							v
						) {
							__p && __p();
							var w = {
								skin: "string",
								font: "string",
								width: "string",
								height: "px",
								ref: "string",
								color_scheme: "string"
							};
							function x(a, b, c) {
								(b || b === 0) &&
									(b === "100%"
										? (a.style.width = "100%")
										: (a.style.width = b + "px")),
									(c || c === 0) && (a.style.height = c + "px");
							}
							function y(a) {
								return function(b) {
									b = { width: b.width, height: b.height, pluginID: a };
									q.fire("xfbml.resize", b);
								};
							}
							var z = {
								string: function(a) {
									return a;
								},
								bool: function(a) {
									return a ? /^(?:true|1|yes|on)$/i.test(a) : undefined;
								},
								url: function(a) {
									return m(a);
								},
								url_maybe: function(a) {
									return a ? m(a) : a;
								},
								hostname: function(a) {
									return a || window.location.hostname;
								},
								px: function(a) {
									return /^(\d+)(?:px)?$/.test(a)
										? parseInt(RegExp.$1, 10)
										: undefined;
								},
								text: function(a) {
									return a;
								}
							};
							function A(a, b) {
								a =
									a[b] ||
									a[b.replace(/_/g, "-")] ||
									a[b.replace(/_/g, "")] ||
									a["data-" + b] ||
									a["data-" + b.replace(/_/g, "-")] ||
									a["data-" + b.replace(/_/g, "")] ||
									undefined;
								return a;
							}
							function B(a, b, c, d) {
								ES(ES("Object", "keys", !1, a), "forEach", !0, function(e) {
									a[e] == "text" &&
										!c[e] &&
										((c[e] = b.textContent || b.innerText || ""),
										b.setAttribute(e, c[e])),
										(d[e] = z[a[e]](A(c, e)));
								});
							}
							function C(a) {
								return a === "100%"
									? "100%"
									: a || a === "0" || a === 0
										? parseInt(a, 10)
										: undefined;
							}
							function D(a) {
								a && x(a, 0, 0);
							}
							var E = j.extend(
								{
									constructor: function(a, b, c, d) {
										__p && __p();
										this.parent();
										c = c.replace(/-/g, "_");
										var e = A(d, "plugin_id");
										this.subscribe("xd.resize", y(e));
										this.subscribe("xd.resize.flow", y(e));
										this.subscribe(
											"xd.resize.flow",
											ES(
												function(a) {
													ES(
														"Object",
														"assign",
														!1,
														this._iframeOptions.root.style,
														{ verticalAlign: "bottom", overflow: "" }
													),
														x(
															this._iframeOptions.root,
															C(a.width),
															C(a.height)
														),
														this.updateLift(),
														clearTimeout(this._timeoutID);
												},
												"bind",
												!0,
												this
											)
										);
										this.subscribe(
											"xd.resize",
											ES(
												function(a) {
													ES(
														"Object",
														"assign",
														!1,
														this._iframeOptions.root.style,
														{ verticalAlign: "bottom", overflow: "" }
													),
														x(
															this._iframeOptions.root,
															C(a.width),
															C(a.height)
														),
														x(this._iframe, C(a.width), C(a.height)),
														(this._isIframeResized = !0),
														this.updateLift(),
														clearTimeout(this._timeoutID);
												},
												"bind",
												!0,
												this
											)
										);
										this.subscribe(
											"xd.resize.iframe",
											ES(
												function(a) {
													x(this._iframe, C(a.width), C(a.height)),
														(this._isIframeResized = !0),
														this.updateLift(),
														clearTimeout(this._timeoutID);
												},
												"bind",
												!0,
												this
											)
										);
										this.subscribe("xd.sdk_event", function(b) {
											var c = ES("JSON", "parse", !1, b.data);
											c.pluginID = e;
											q.fire(b.event, c, a);
										});
										var f = k.resolve("www") + "/plugins/" + c + ".php?",
											g = {};
										B(this.getParams(), a, d, g);
										B(w, a, d, g);
										ES("Object", "assign", !1, g, {
											app_id: s.getClientID(),
											locale: s.getLocale(),
											sdk: "joey",
											kid_directed_site: s.getKidDirectedSite(),
											channel: v.handler(
												ES(
													function(a) {
														return this.inform("xd." + a.type, a);
													},
													"bind",
													!0,
													this
												),
												"parent.parent",
												!0
											)
										});
										this.shouldIgnoreWidth() && (g.width = void 0);
										g.container_width = a.offsetWidth;
										p.addCss(a, "fb_iframe_widget");
										var h = l();
										this.subscribe("xd.verify", function(a) {
											v.sendToFacebook(h, {
												method: "xd/verify",
												params: ES("JSON", "stringify", !1, a.token)
											});
										});
										this.subscribe(
											"xd.refreshLoginStatus",
											ES(
												function() {
													n.removeLogoutState(),
														n.getLoginStatus(
															ES(this.inform, "bind", !0, this, "login.status"),
															!0
														);
												},
												"bind",
												!0,
												this
											)
										);
										d = document.createElement("span");
										ES("Object", "assign", !1, d.style, {
											verticalAlign: "top",
											width: "0px",
											height: "0px",
											overflow: "hidden"
										});
										this._element = a;
										this._ns = b;
										this._tag = c;
										this._params = g;
										this._config = this.getConfig();
										this._iframeOptions = {
											root: d,
											url: f + i.encode(g),
											name: h,
											width:
												this._config.mobile_fullsize && t.mobile()
													? void 0
													: g.width || 1e3,
											height: g.height || 1e3,
											style: { border: "none", visibility: "hidden" },
											title:
												this._ns + ":" + this._tag + " Facebook Social Plugin",
											onload: ES(
												function() {
													return this.inform("render");
												},
												"bind",
												!0,
												this
											),
											onerror: ES(
												function() {
													return D(this._iframe);
												},
												"bind",
												!0,
												this
											)
										};
										this.isFluid() &&
											g.width !== "auto" &&
											(p.addCss(
												this._element,
												"fb_iframe_widget_fluid_desktop"
											),
											!g.width &&
												this._config.full_width &&
												((this._element.style.width = "100%"),
												(this._iframeOptions.root.style.width = "100%"),
												(this._iframeOptions.style.width = "100%"),
												(this._params.container_width = this._element.offsetWidth),
												(this._iframeOptions.url =
													f + i.encode(this._params))));
									},
									shouldIgnoreWidth: function() {
										return t.mobile() && this.getConfig().mobile_fullsize;
									},
									useInlineHeightForMobile: function() {
										return !0;
									},
									process: function() {
										__p && __p();
										if (s.getIsVersioned()) {
											r.assertVersionIsSet();
											var a = new u(this._iframeOptions.url);
											this._iframeOptions.url = a
												.setPath("/" + s.getVersion() + a.getPath())
												.toString();
										}
										a = ES("Object", "assign", !1, {}, this._params);
										delete a.channel;
										var b = i.encode(a);
										if (
											this._element.getAttribute("fb-iframe-plugin-query") == b
										) {
											g.info(
												"Skipping render: %s:%s %s",
												this._ns,
												this._tag,
												b
											);
											this.inform("render");
											return;
										}
										this._element.setAttribute("fb-iframe-plugin-query", b);
										this.subscribe(
											"render",
											ES(
												function() {
													q.fire("iframeplugin:onload"),
														(this._iframe.style.visibility = "visible"),
														this._isIframeResized || D(this._iframe);
												},
												"bind",
												!0,
												this
											)
										);
										while (this._element.firstChild)
											this._element.removeChild(this._element.firstChild);
										this._element.appendChild(this._iframeOptions.root);
										var c = t.mobile() ? 120 : 45;
										this._timeoutID = setTimeout(
											ES(
												function() {
													D(this._iframe),
														g.warn(
															"%s:%s failed to resize in %ss",
															this._ns,
															this._tag,
															c
														);
												},
												"bind",
												!0,
												this
											),
											c * 1e3
										);
										this._iframe = o(this._iframeOptions);
										q.fire("iframeplugin:create");
										if (t.mobile() || a.width === "auto") {
											this.useInlineHeightForMobile() &&
												p.addCss(this._element, "fb_iframe_widget_fluid");
											if (!this._iframeOptions.width) {
												ES("Object", "assign", !1, this._element.style, {
													display: "block",
													width: "100%",
													height: "auto"
												});
												ES(
													"Object",
													"assign",
													!1,
													this._iframeOptions.root.style,
													{ width: "100%", height: "auto" }
												);
												b = {
													height: "auto",
													position: "static",
													width: "100%"
												};
												(t.iphone() || t.ipad()) &&
													ES("Object", "assign", !1, b, {
														width: "220px",
														"min-width": "100%"
													});
												ES("Object", "assign", !1, this._iframe.style, b);
											}
										}
									},
									getConfig: function() {
										return {};
									},
									isFluid: function() {
										var a = this.getConfig();
										return a.fluid;
									},
									updateLift: function() {
										var a =
											this._iframe.style.width ===
												this._iframeOptions.root.style.width &&
											this._iframe.style.height ===
												this._iframeOptions.root.style.height;
										p[a ? "removeCss" : "addCss"](
											this._iframe,
											"fb_iframe_widget_lift"
										);
									}
								},
								h
							);
							E.getVal = A;
							E.withParams = function(a, b) {
								return E.extend({
									getParams: function() {
										return a;
									},
									getConfig: function() {
										return b ? b : {};
									}
								});
							};
							e.exports = E;
						},
						null
					);
					__d(
						"PluginConfig",
						["sdk.feature"],
						function(a, b, c, d, e, f, g) {
							a = {
								comment_embed: { mobile_fullsize: !0 },
								messengerpreconfirmation: { mobile_fullsize: !0 },
								messengeraccountconfirmation: { mobile_fullsize: !0 },
								messengerbusinesslink: { mobile_fullsize: !0 },
								messengertoggle: { mobile_fullsize: !0 },
								messengermessageus: { mobile_fullsize: !0 },
								post: { fluid: g("fluid_embed", !1), mobile_fullsize: !0 },
								send_to_messenger: { mobile_fullsize: !0 }
							};
							e.exports = a;
						},
						null
					);
					__d(
						"PluginAttrTypes",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							a = { string: "string", bool: "bool", url: "url" };
							e.exports = a;
						},
						null
					);
					__d(
						"PluginTags",
						["PluginAttrTypes"],
						function(a, b, c, d, e, f, g) {
							var h = {
									comment_embed: { href: g.url, include_parent: g.bool },
									composer: {
										action_type: g.string,
										action_properties: g.string
									},
									create_event_button: {},
									group: {
										href: g.url,
										show_social_context: g.bool,
										show_group_info: g.bool,
										show_metadata: g.bool
									},
									like: {
										href: g.url,
										layout: g.string,
										show_faces: g.bool,
										share: g.bool,
										action: g.string,
										send: g.bool,
										size: g.string
									},
									like_box: {
										href: g.string,
										show_faces: g.bool,
										header: g.bool,
										stream: g.bool,
										force_wall: g.bool,
										show_border: g.bool,
										id: g.string,
										connections: g.string,
										profile_id: g.string,
										name: g.string
									},
									page: {
										href: g.string,
										hide_cta: g.bool,
										hide_cover: g.bool,
										small_header: g.bool,
										adapt_container_width: g.bool,
										show_facepile: g.bool,
										show_posts: g.bool,
										tabs: g.string
									},
									messenger_checkbox: {
										messenger_app_id: g.string,
										page_id: g.string,
										pixel_id: g.string,
										prechecked: g.bool,
										allow_login: g.bool,
										size: g.string,
										origin: g.string,
										user_ref: g.string,
										identity_match: g.string,
										center_align: g.bool
									},
									messengerpreconfirmation: {
										messenger_app_id: g.string,
										page_id: g.string
									},
									messengeraccountconfirmation: {
										messenger_app_id: g.string,
										page_id: g.string,
										state: g.string
									},
									messengerbusinesslink: {
										messenger_app_id: g.string,
										page_id: g.string,
										state: g.string
									},
									messengertoggle: {
										messenger_app_id: g.string,
										page_id: g.string,
										token: g.string,
										psid: g.string
									},
									messengermessageus: {
										messenger_app_id: g.string,
										page_id: g.string,
										color: g.string,
										size: g.string
									},
									send_to_messenger: {
										messenger_app_id: g.string,
										page_id: g.string,
										color: g.string,
										size: g.string,
										enforce_login: g.bool,
										identity_match: g.string,
										origin: g.string,
										cta_text: g.string
									},
									page_events: { href: g.url },
									post: { href: g.url, show_text: g.bool },
									profile_pic: {
										uid: g.string,
										linked: g.bool,
										href: g.string,
										size: g.string,
										facebook_logo: g.bool
									},
									send_to_mobile: {
										max_rows: g.string,
										show_faces: g.bool,
										size: g.string
									}
								},
								i = { fan: "like_box", likebox: "like_box" };
							ES(ES("Object", "keys", !1, i), "forEach", !0, function(a) {
								h[a] = h[i[a]];
							});
							e.exports = h;
						},
						null
					);
					__d(
						"sdk.Arbiter",
						[],
						function(a, b, c, d, e, f) {
							a = {
								BEHAVIOR_EVENT: "e",
								BEHAVIOR_PERSISTENT: "p",
								BEHAVIOR_STATE: "s"
							};
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.XFBML.Element",
						["ObservableMixin", "Type", "sdk.DOM"],
						function(a, b, c, d, e, f, g, h, i) {
							__p && __p();
							a = h.extend(
								{
									constructor: function(a) {
										this.parent(), (this.dom = a);
									},
									fire: function() {
										this.inform.apply(this, arguments);
									},
									getAttribute: function(a, b, c) {
										a = i.getAttr(this.dom, a);
										return a ? (c ? c(a) : a) : b;
									},
									_getBoolAttribute: function(a, b) {
										a = i.getBoolAttr(this.dom, a);
										return a === null ? b : a;
									},
									_getPxAttribute: function(a, b) {
										return this.getAttribute(a, b, function(a) {
											a = parseInt(a, 10);
											return isNaN(a) ? b : a;
										});
									},
									_getLengthAttribute: function(a, b) {
										return this.getAttribute(a, b, function(a) {
											if (a === "100%" || a === "auto") return a;
											a = parseInt(a, 10);
											return isNaN(a) ? b : a;
										});
									},
									_getAttributeFromList: function(a, b, c) {
										return this.getAttribute(a, b, function(a) {
											a = a.toLowerCase();
											return ES(c, "indexOf", !0, a) > -1 ? a : b;
										});
									},
									isValid: function() {
										for (var a = this.dom; a; a = a.parentNode)
											if (a == document.body) return !0;
									},
									clear: function() {
										i.html(this.dom, "");
									}
								},
								g
							);
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.XFBML.IframeWidget",
						[
							"QueryString",
							"UrlMap",
							"guid",
							"insertIframe",
							"sdk.Arbiter",
							"sdk.Auth",
							"sdk.Content",
							"sdk.DOM",
							"sdk.Event",
							"sdk.Runtime",
							"sdk.ui",
							"sdk.XD",
							"sdk.XFBML.Element"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
							__p && __p();
							a = s.extend({
								_iframeName: null,
								_showLoader: !0,
								_refreshOnAuthChange: !1,
								_allowReProcess: !1,
								_fetchPreCachedLoader: !1,
								_visibleAfter: "load",
								_widgetPipeEnabled: !1,
								_borderReset: !1,
								getUrlBits: function() {
									throw new Error(
										"Inheriting class needs to implement getUrlBits()."
									);
								},
								setupAndValidate: function() {
									return !0;
								},
								oneTimeSetup: function() {},
								getSize: function() {},
								getIframeName: function() {
									return this._iframeName;
								},
								getIframeTitle: function() {
									return "Facebook Social Plugin";
								},
								getChannelUrl: function() {
									if (!this._channelUrl) {
										var a = this;
										this._channelUrl = r.handler(
											function(b) {
												a.fire("xd." + b.type, b);
											},
											"parent.parent",
											!0
										);
									}
									return this._channelUrl;
								},
								getIframeNode: function() {
									return this.dom.getElementsByTagName("iframe")[0];
								},
								arbiterInform: function(event, a, b) {
									r.sendToFacebook(this.getIframeName(), {
										method: event,
										params: ES("JSON", "stringify", !1, a || {}),
										behavior: b || "persistent"
									});
								},
								_arbiterInform: function(event, a, b) {
									var c = 'parent.frames["' + this.getIframeNode().name + '"]';
									r.inform(event, a, c, b);
								},
								getDefaultWebDomain: function() {
									return h.resolve("www");
								},
								process: function(a) {
									__p && __p();
									if (this._done) {
										if (!this._allowReProcess && !a) return;
										this.clear();
									} else this._oneTimeSetup();
									this._done = !0;
									this._iframeName =
										this.getIframeName() || this._iframeName || i();
									if (!this.setupAndValidate()) {
										this.fire("render");
										return;
									}
									this._showLoader && this._addLoader();
									n.addCss(this.dom, "fb_iframe_widget");
									this._visibleAfter != "immediate"
										? n.addCss(this.dom, "fb_hide_iframes")
										: this.subscribe(
												"iframe.onload",
												ES(this.fire, "bind", !0, this, "render")
										  );
									a = this.getSize() || {};
									var b = this.getFullyQualifiedURL();
									a.width == "100%" &&
										n.addCss(this.dom, "fb_iframe_widget_fluid");
									this.clear();
									j({
										url: b,
										root: this.dom.appendChild(document.createElement("span")),
										name: this._iframeName,
										title: this.getIframeTitle(),
										className: p.getRtl() ? "fb_rtl" : "fb_ltr",
										height: a.height,
										width: a.width,
										onload: ES(this.fire, "bind", !0, this, "iframe.onload")
									});
									this._resizeFlow(a);
									this.loaded = !1;
									this.subscribe(
										"iframe.onload",
										ES(
											function() {
												(this.loaded = !0),
													this._isResizeHandled ||
														n.addCss(this.dom, "fb_hide_iframes");
											},
											"bind",
											!0,
											this
										)
									);
								},
								generateWidgetPipeIframeName: function() {
									t++;
									return "fb_iframe_" + t;
								},
								getFullyQualifiedURL: function() {
									var a = this._getURL();
									a += "?" + g.encode(this._getQS());
									if (a.length > 2e3) {
										a = "about:blank";
										var b = ES(
											function() {
												this._postRequest(),
													this.unsubscribe("iframe.onload", b);
											},
											"bind",
											!0,
											this
										);
										this.subscribe("iframe.onload", b);
									}
									return a;
								},
								_getWidgetPipeShell: function() {
									return h.resolve("www") + "/common/widget_pipe_shell.php";
								},
								_oneTimeSetup: function() {
									this.subscribe(
										"xd.resize",
										ES(this._handleResizeMsg, "bind", !0, this)
									),
										this.subscribe(
											"xd.resize",
											ES(this._bubbleResizeEvent, "bind", !0, this)
										),
										this.subscribe(
											"xd.resize.iframe",
											ES(this._resizeIframe, "bind", !0, this)
										),
										this.subscribe(
											"xd.resize.flow",
											ES(this._resizeFlow, "bind", !0, this)
										),
										this.subscribe(
											"xd.resize.flow",
											ES(this._bubbleResizeEvent, "bind", !0, this)
										),
										this.subscribe("xd.refreshLoginStatus", function() {
											l.getLoginStatus(function() {}, !0);
										}),
										this.subscribe("xd.logout", function() {
											q(
												{ method: "auth.logout", display: "hidden" },
												function() {}
											);
										}),
										this._refreshOnAuthChange && this._setupAuthRefresh(),
										this._visibleAfter == "load" &&
											this.subscribe(
												"iframe.onload",
												ES(this._makeVisible, "bind", !0, this)
											),
										this.subscribe(
											"xd.verify",
											ES(
												function(a) {
													this.arbiterInform("xd/verify", a.token);
												},
												"bind",
												!0,
												this
											)
										),
										this.oneTimeSetup();
								},
								_makeVisible: function() {
									this._removeLoader(),
										n.removeCss(this.dom, "fb_hide_iframes"),
										this.fire("render");
								},
								_setupAuthRefresh: function() {
									l.getLoginStatus(
										ES(
											function(a) {
												var b = a.status;
												o.subscribe(
													"auth.statusChange",
													ES(
														function(a) {
															if (!this.isValid()) return;
															(b == "unknown" || a.status == "unknown") &&
																this.process(!0);
															b = a.status;
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
										)
									);
								},
								_handleResizeMsg: function(a) {
									if (!this.isValid()) return;
									this._resizeIframe(a);
									this._resizeFlow(a);
									this._borderReset ||
										((this.getIframeNode().style.border = "none"),
										(this._borderReset = !0));
									this._isResizeHandled = !0;
									this._makeVisible();
								},
								_bubbleResizeEvent: function(a) {
									a = {
										height: a.height,
										width: a.width,
										pluginID: this.getAttribute("plugin-id")
									};
									o.fire("xfbml.resize", a);
								},
								_resizeIframe: function(a) {
									var b = this.getIframeNode();
									a.height && (b.style.height = a.height + "px");
									a.width && (b.style.width = a.width + "px");
								},
								_resizeFlow: function(a) {
									var b = this.dom.getElementsByTagName("span")[0];
									a.height && (b.style.height = a.height + "px");
									a.width && (b.style.width = a.width + "px");
								},
								_addLoader: function() {
									this._loaderDiv ||
										(n.addCss(this.dom, "fb_iframe_widget_loader"),
										(this._loaderDiv = document.createElement("div")),
										(this._loaderDiv.className = "FB_Loader"),
										this.dom.appendChild(this._loaderDiv));
								},
								_removeLoader: function() {
									this._loaderDiv &&
										(n.removeCss(this.dom, "fb_iframe_widget_loader"),
										this._loaderDiv.parentNode &&
											this._loaderDiv.parentNode.removeChild(this._loaderDiv),
										(this._loaderDiv = null));
								},
								_getQS: function() {
									return ES(
										"Object",
										"assign",
										!1,
										{
											api_key: p.getClientID(),
											locale: p.getLocale(),
											sdk: "joey",
											kid_directed_site: p.getKidDirectedSite(),
											ref: this.getAttribute("ref")
										},
										this.getUrlBits().params
									);
								},
								_getURL: function() {
									var a = this.getDefaultWebDomain(),
										b = "";
									return a + "/plugins/" + b + this.getUrlBits().name + ".php";
								},
								_postRequest: function() {
									m.submitToTarget({
										url: this._getURL(),
										target: this.getIframeNode().name,
										params: this._getQS()
									});
								}
							});
							var t = 0;
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.XFBML.Comments",
						[
							"QueryString",
							"UrlMap",
							"sdk.Event",
							"sdk.Runtime",
							"sdk.UA",
							"sdk.XFBML.IframeWidget"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							__p && __p();
							var m = 320;
							a = l.extend({
								_visibleAfter: "immediate",
								_refreshOnAuthChange: !0,
								setupAndValidate: function() {
									__p && __p();
									var a = {
										channel_url: this.getChannelUrl(),
										colorscheme: this.getAttribute("colorscheme"),
										skin: this.getAttribute("skin"),
										numposts: this.getAttribute("num-posts", 10),
										width: this._getLengthAttribute("width"),
										href: this.getAttribute("href"),
										permalink: this.getAttribute("permalink"),
										publish_feed: this.getAttribute("publish_feed"),
										order_by: this.getAttribute("order_by"),
										mobile: this._getBoolAttribute("mobile"),
										version: this.getAttribute("version")
									};
									!a.width && !a.permalink && (a.width = 550);
									k.mobile() && a.mobile !== !1 && (a.mobile = !0);
									a.skin || (a.skin = a.colorscheme);
									if (!a.href) {
										a.migrated = this.getAttribute("migrated");
										a.xid = this.getAttribute("xid");
										a.title = this.getAttribute("title", document.title);
										a.url = this.getAttribute("url", document.URL);
										a.quiet = this.getAttribute("quiet");
										a.reverse = this.getAttribute("reverse");
										a.simple = this.getAttribute("simple");
										a.css = this.getAttribute("css");
										a.notify = this.getAttribute("notify");
										if (!a.xid) {
											var b = ES(document.URL, "indexOf", !0, "#");
											b > 0
												? (a.xid = encodeURIComponent(
														document.URL.substring(0, b)
												  ))
												: (a.xid = encodeURIComponent(document.URL));
										}
										a.migrated &&
											(a.href =
												h.resolve("www") +
												"/plugins/comments_v1.php?app_id=" +
												j.getClientID() +
												"&xid=" +
												encodeURIComponent(a.xid) +
												"&url=" +
												encodeURIComponent(a.url));
									} else {
										b = this.getAttribute("fb_comment_id");
										b ||
											((b = g.decode(
												document.URL.substring(
													ES(document.URL, "indexOf", !0, "?") + 1
												)
											).fb_comment_id),
											b &&
												ES(b, "indexOf", !0, "#") > 0 &&
												(b = b.substring(0, ES(b, "indexOf", !0, "#"))));
										b &&
											((a.fb_comment_id = b),
											this.subscribe(
												"render",
												ES(
													function() {
														window.location.hash ||
															(window.location.hash = this.getIframeNode().id);
													},
													"bind",
													!0,
													this
												)
											));
									}
									a.version || (a.version = j.getVersion());
									this._attr = a;
									return !0;
								},
								oneTimeSetup: function() {
									this.subscribe("xd.sdk_event", function(a) {
										i.fire(a.event, ES("JSON", "parse", !1, a.data));
									});
								},
								getSize: function() {
									if (!this._attr.permalink)
										return {
											width:
												this._attr.mobile ||
												this._attr.width === "auto" ||
												this._attr.width === "100%"
													? "100%"
													: Math.max(this._attr.width, m),
											height: 100
										};
								},
								getUrlBits: function() {
									return { name: "comments", params: this._attr };
								},
								getDefaultWebDomain: function() {
									return h.resolve("www");
								}
							});
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.XFBML.CommentsCount",
						["ApiClient", "Log", "sdk.DOM", "sdk.XFBML.Element", "sprintf"],
						function(a, b, c, d, e, f, g, h, i, j, k) {
							__p && __p();
							a = j.extend({
								process: function() {
									h.error(
										"##########################\n#  <fb:comments-count> has been deprecated.\n#  Please use FB.api().\n#  https://developers.facebook.com/docs/javascript/reference/FB.api/\n##########################"
									);
									i.addCss(this.dom, "fb_comments_count_zero");
									var a = this.getAttribute("href", window.location.href);
									g.scheduleBatchCall(
										"/v2.1/" + encodeURIComponent(a),
										{ fields: "share" },
										ES(
											function(a) {
												a = (a.share && a.share.comment_count) || 0;
												i.html(
													this.dom,
													k('<span class="fb_comments_count">%s</span>', a)
												);
												a > 0 &&
													i.removeCss(this.dom, "fb_comments_count_zero");
												this.fire("render");
											},
											"bind",
											!0,
											this
										)
									);
								}
							});
							e.exports = a;
						},
						null
					);
					__d(
						"getDocumentScrollElement",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							var g =
								typeof navigator !== "undefined" &&
								ES(navigator.userAgent, "indexOf", !0, "AppleWebKit") > -1;
							function a(a) {
								a = a || document;
								return a.scrollingElement
									? a.scrollingElement
									: !g && a.compatMode === "CSS1Compat"
										? a.documentElement
										: a.body;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.DocumentTitle",
						[],
						function(a, b, c, d, e, f) {
							__p && __p();
							var g = document.title,
								h = null,
								i = 1500,
								j = null,
								k = !1;
							function l() {
								h ? (!k ? m(h) : n()) : (clearInterval(j), (j = null), n());
							}
							function m(a) {
								(document.title = a), (k = !0);
							}
							function n() {
								o.set(g), (k = !1);
							}
							var o = {
								get: function() {
									return g;
								},
								set: function(a) {
									document.title = a;
								},
								blink: function(a) {
									h = a;
									j === null && (j = setInterval(l, i));
									return {
										stop: function() {
											h = null;
										}
									};
								}
							};
							e.exports = o;
						},
						null
					);
					__d(
						"sdk.XFBML.CustomerChat",
						[
							"IframePlugin",
							"QueryString",
							"getDocumentScrollElement",
							"sdk.Content",
							"sdk.createIframe",
							"sdk.DialogUtils",
							"sdk.DocumentTitle",
							"sdk.DOM",
							"sdk.DOMEventListener",
							"sdk.Event",
							"sdk.UA",
							"sdk.XD"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
							"use strict";
							__p && __p();
							var s = [
									"animationend",
									"mozAnimationEnd",
									"MSAnimationEnd",
									"oAnimationEnd",
									"webkitAnimationEnd"
								],
								t = null,
								u = !(q.ie() <= 9),
								v = null,
								w = !1,
								x = null,
								y = "",
								z = !1,
								A = 0,
								B = 0,
								C = !1,
								D = null;
							a = g.extend({
								constructor: function(a, b, c, d) {
									n.addCss(a, "fb_invisible_flow"),
										n.remove(a),
										j.append(a),
										this.parent(a, b, c, d),
										(this._iframeOptions.title = ""),
										p.fire("customerchat.load"),
										this._setUpSubscriptions();
								},
								_setUpSubscriptions: function() {
									__p && __p();
									this.subscribe(
										"xd.liveChatPluginGetBubbleIframe",
										ES(
											function(a) {
												this._handleGetBubbleIframe(a);
											},
											"bind",
											!0,
											this
										)
									),
										this.subscribe(
											"xd.liveChatPluginPrepareAnchorIframe",
											ES(
												function(a) {
													(z = ES(
														"JSON",
														"parse",
														!1,
														a.passesMobileRedesignGK
													)),
														ES("JSON", "parse", !1, a.isMobile)
															? this._handlePrepareMobileAnchorIframe(a)
															: this._handlePrepareDesktopAnchorIframe(a);
												},
												"bind",
												!0,
												this
											)
										),
										this.subscribe(
											"xd.liveChatPluginResizeAnchorIframe",
											ES(
												function(a) {
													this._handleResizeAnchorIframe(a);
												},
												"bind",
												!0,
												this
											)
										),
										this.subscribe(
											"xd.liveChatPluginExpandDialogIframe",
											ES(
												function(a) {
													ES("JSON", "parse", !1, a.isMobile)
														? this._handleExpandMobileDialogIframe(a)
														: this._handleExpandDesktopDialogIframe(a);
												},
												"bind",
												!0,
												this
											)
										),
										this.subscribe(
											"xd.liveChatPluginShowInterstitialOnPage",
											ES(
												function(a) {
													this._handleShowInterstitialOnPage(a);
												},
												"bind",
												!0,
												this
											)
										),
										this.subscribe(
											"xd.liveChatPluginShowDialogIframe",
											ES(
												function(a) {
													this._handleShowDialogIframe(a);
												},
												"bind",
												!0,
												this
											)
										),
										this.subscribe(
											"xd.liveChatPluginHideDialogIframe",
											ES(
												function(a) {
													this._handleHideDialogIframe(a);
												},
												"bind",
												!0,
												this
											)
										),
										this.subscribe(
											"xd.liveChatPluginUpdateShadow",
											ES(
												function(a) {
													this._handleShadowUpdate(a);
												},
												"bind",
												!0,
												this
											)
										),
										this.subscribe(
											"xd.liveChatPluginUpdatePageTitle",
											ES(
												function(a) {
													this._handleUpdatePageTitle(a);
												},
												"bind",
												!0,
												this
											)
										),
										this.subscribe(
											"xd.liveChatPluginExpandMobilePrompt",
											ES(
												function(a) {
													this._handleExpandMobilePrompt();
												},
												"bind",
												!0,
												this
											)
										),
										q.iphone() &&
											(this.subscribe(
												"xd.liveChatPluginFocusComposer",
												ES(
													function(a) {
														this._handleFocusComposer();
													},
													"bind",
													!0,
													this
												)
											),
											this.subscribe(
												"xd.liveChatPluginBlurComposer",
												ES(
													function(a) {
														this._handleBlurComposer();
													},
													"bind",
													!0,
													this
												)
											));
								},
								_handleGetBubbleIframe: function(a) {
									(this._bubbleDialog = this._setupNewIframeDialog(
										a.fromIframe
									)),
										(v = this._bubbleDialog),
										j.append(this._bubbleDialog),
										this.subscribe(
											"xd.liveChatPluginShowBubbleIframe",
											ES(
												function(a) {
													n.setStyle(this._bubbleDialog, "display", "inline"),
														u &&
															(n.addCss(
																this._bubbleDialog,
																"fb_customer_chat_bubble_pop_in"
															),
															ES("JSON", "parse", !1, a.dialogHidden) ||
																setTimeout(
																	ES(
																		function() {
																			(D = !1), G(this._iframe, w, q.mobile());
																		},
																		"bind",
																		!0,
																		this
																	),
																	750
																)),
														ES("JSON", "parse", !1, a.showBadge) &&
															this._setBubbleBadgeStyle();
												},
												"bind",
												!0,
												this
											)
										);
								},
								_handlePrepareDesktopAnchorIframe: function(a) {
									this._iframe &&
										(this._iframe.setAttribute("data-testid", "dialog_iframe"),
										ES("Object", "assign", !1, this._iframe.style, {
											borderRadius: "9pt",
											bottom: "63pt",
											padding: "0",
											position: "fixed",
											right: "9pt",
											top: "auto",
											width: "288pt",
											zIndex: "2147483647"
										}),
										n.setStyle(
											this._iframe,
											"maxHeight",
											ES("JSON", "parse", !1, a.dialogHidden) || u
												? "0"
												: "100%"
										),
										ES("JSON", "parse", !1, a.chatStarted) &&
											((w = !0),
											ES("Object", "assign", !1, this._iframe.style, {
												height: "378pt"
											})),
										(x = this._iframe));
								},
								_handlePrepareMobileAnchorIframe: function(a) {
									__p && __p();
									if (this._iframe) {
										this._iframe.setAttribute("data-testid", "dialog_iframe");
										ES("Object", "assign", !1, this._iframe.style, {
											padding: "0",
											position: "fixed",
											zIndex: "2147483647"
										});
										n.setStyle(
											this._iframe,
											"maxHeight",
											ES("JSON", "parse", !1, a.dialogHidden) || u
												? "0"
												: "100%"
										);
										var b = ES("JSON", "parse", !1, a.chatStarted);
										if (b)
											(w = !0),
												ES("Object", "assign", !1, this._iframe.style, {
													boxShadow: "none",
													height: "100%",
													right: "0",
													top: "0",
													width: "100%"
												}),
												ES("JSON", "parse", !1, a.dialogHidden) || E();
										else if (z)
											if (!ES("JSON", "parse", !1, a.showInterstitialOnPage)) {
												b = screen.width - 120;
												ES("Object", "assign", !1, this._iframe.style, {
													bottom: "12px",
													right: "84px",
													top: "auto",
													width: b + "px"
												});
											} else this._makeDialogIframeFullScreen(), (C = !0);
										else
											ES("Object", "assign", !1, this._iframe.style, {
												borderRadius: "9pt",
												bottom: "63pt",
												right: "3pt",
												top: "auto",
												width: "288pt"
											});
										x = this._iframe;
									}
								},
								_handleResizeAnchorIframe: function(a) {
									this._iframe &&
										n.setStyle(
											this._iframe,
											"height",
											ES("JSON", "parse", !1, a.height) + "px"
										);
								},
								_handleExpandDesktopDialogIframe: function() {
									(w = !0),
										this._iframe && n.setStyle(this._iframe, "height", "378pt");
								},
								_handleExpandMobileDialogIframe: function() {
									(w = !0), this._makeDialogIframeFullScreen(), E();
								},
								_handleShowDialogIframe: function(a) {
									G(
										this._iframe,
										ES("JSON", "parse", !1, a.chatStarted),
										ES("JSON", "parse", !1, a.isMobile)
									);
								},
								_handleHideDialogIframe: function(a) {
									H(
										this._iframe,
										ES("JSON", "parse", !1, a.chatStarted),
										ES("JSON", "parse", !1, a.isMobile)
									);
								},
								_handleShowInterstitialOnPage: function(a) {
									!ES("JSON", "parse", !1, a.dialogHidden)
										? (H(this._iframe, !1, !0, !1),
										  setTimeout(
												ES(
													function() {
														this._makeDialogIframeFullScreen(),
															(C = !0),
															G(this._iframe, !1, !0, !0),
															E();
													},
													"bind",
													!0,
													this
												),
												500
										  ))
										: (this._makeDialogIframeFullScreen(),
										  (C = !0),
										  G(this._iframe, !1, !0, !0));
								},
								_handleShadowUpdate: function(a) {
									ES("JSON", "parse", !1, a.resetShadow) && this._bubbleDialog
										? (n.setStyle(this._bubbleDialog, "borderRadius", "50%"),
										  u
												? n.addCss(
														this._bubbleDialog,
														"fb_customer_chat_bubble_animated_no_badge"
												  )
												: n.setStyle(
														this._bubbleDialog,
														"boxShadow",
														"0px 3px 12px rgba(0, 0, 0, 0.15)"
												  ))
										: ES("JSON", "parse", !1, a.resetShadow) ||
										  this._setBubbleBadgeStyle();
								},
								_handleUpdatePageTitle: function(a) {
									!t && a.titleText
										? ((t = m.blink(a.titleText)),
										  o.add(
												window,
												"focus",
												ES(
													function(a) {
														this._stopBlinking();
													},
													"bind",
													!0,
													this
												)
										  ))
										: t && !a.titleText && this._stopBlinking();
								},
								_handleFocusComposer: function() {
									setTimeout(
										ES(
											function() {
												var a = i();
												a &&
													(n.setStyle(
														this._iframe,
														"maxHeight",
														a.scrollHeight - a.scrollTop + "px"
													),
													a.scrollTo(0, 0));
											},
											"bind",
											!0,
											this
										),
										700
									);
								},
								_handleBlurComposer: function() {
									n.setStyle(this._iframe, "maxHeight", "100%");
								},
								_setupNewIframeDialog: function(a) {
									a = "#" + h.encode({ forIframe: a });
									var b = l.setupNewDialog();
									n.setStyle(b.contentRoot, "background", "none");
									y = this._iframeOptions.name;
									k({
										url: r.getXDArbiterURL() + a,
										name: "blank_" + this._iframeOptions.name,
										root: b.contentRoot,
										tabindex: -1,
										width: 60,
										"data-testid": "bubble_iframe"
									});
									ES("Object", "assign", !1, b.dialogElement.style, {
										background: "none",
										borderRadius: "50%",
										bottom: "18pt",
										display: "none",
										height: "45pt",
										padding: "0",
										position: "fixed",
										right: "18pt",
										top: "auto",
										width: "45pt",
										zIndex: "2147483646"
									});
									u
										? (n.removeCss(
												b.dialogElement,
												"fb_customer_chat_bubble_animated_with_badge"
										  ),
										  n.addCss(
												b.dialogElement,
												"fb_customer_chat_bubble_animated_no_badge"
										  ))
										: n.setStyle(
												b.dialogElement,
												"boxShadow",
												"0px 3px 12px rgba(0, 0, 0, 0.15)"
										  );
									return b.dialogElement;
								},
								_setBubbleBadgeStyle: function() {
									this._bubbleDialog &&
										(n.setStyle(
											this._bubbleDialog,
											"borderRadius",
											"50% 0% 50% 50%"
										),
										u
											? (n.removeCss(
													this._bubbleDialog,
													"fb_customer_chat_bubble_animated_no_badge"
											  ),
											  n.addCss(
													this._bubbleDialog,
													"fb_customer_chat_bubble_animated_with_badge"
											  ))
											: n.setStyle(
													this._bubbleDialog,
													"boxShadow",
													"-5px 4px 14px rgba(0, 0, 0, 0.15)"
											  ));
								},
								_stopBlinking: function() {
									t && (t.stop(), (t = null));
								},
								_makeDialogIframeFullScreen: function() {
									this._iframe &&
										(n.setStyle(this._iframe, "boxShadow", "none"),
										n.setStyle(this._iframe, "border-radius", "0"),
										n.setStyle(this._iframe, "height", "100%"),
										n.setStyle(this._iframe, "right", "0"),
										n.setStyle(this._iframe, "top", "0"),
										n.setStyle(this._iframe, "width", "100%"));
								},
								getParams: function() {
									return {
										attribution: "string",
										greeting_dialog_display: "string",
										greeting_dialog_delay: "string",
										logged_in_greeting: "string",
										logged_out_greeting: "string",
										minimized: "bool",
										page_id: "string",
										theme_color: "string"
									};
								}
							});
							function E() {
								(A =
									window.pageXOffset !== undefined
										? window.pageXOffset
										: document.documentElement &&
										  document.documentElement.scrollLeft),
									(B =
										window.pageYOffset !== undefined
											? window.pageYOffset
											: document.documentElement &&
											  document.documentElement.scrollTop),
									n.addCss(document.body, "fb_mobile_overlay_active");
							}
							function F() {
								n.removeCss(document.body, "fb_mobile_overlay_active"),
									window.scrollTo(A, B);
							}
							function G(a, b, c, d) {
								__p && __p();
								d === void 0 && (d = !0);
								if (!a) return;
								if (D === null || D === !1) {
									c && (b || (z && C)) && E();
									if (u) {
										c && (b || (z && C))
											? ((c =
													"fb_customer_chat_bounce_in_v2_mobile_chat_started"),
											  (b =
													"fb_customer_chat_bounce_out_v2_mobile_chat_started"))
											: ((c = "fb_customer_chat_bounce_in_v2"),
											  (b = "fb_customer_chat_bounce_out_v2"));
										n.removeCss(a, b);
										n.addCss(a, c);
									}
									n.setStyle(a, "maxHeight", "100%");
									r.sendToFacebook(y, {
										method: "CustomerChat.isDialogHidden",
										params: ES("JSON", "stringify", !1, {
											is_dialog_hidden: !1
										})
									});
									D = !0;
								}
								d && p.fire("customerchat.dialogShow");
							}
							function H(a, b, c, d) {
								__p && __p();
								d === void 0 && (d = !0);
								var e = a;
								if (!e) return;
								if (D === null || D === !0) {
									c && (b || (z && C)) && F();
									if (!u) n.setStyle(e, "maxHeight", "0");
									else {
										var f = function a(d) {
												var f;
												c && (b || (z && C))
													? (f = "fb_bounce_out_v2_mobile_chat_started")
													: (f = "fb_bounce_out_v2");
												d.animationName === f &&
													(n.setStyle(e, "maxHeight", "0"),
													ES(s, "forEach", !0, function(event) {
														o.remove(e, event, a);
													}));
											},
											g;
										c && (b || (z && C))
											? ((a =
													"fb_customer_chat_bounce_in_v2_mobile_chat_started"),
											  (g =
													"fb_customer_chat_bounce_out_v2_mobile_chat_started"))
											: ((a = "fb_customer_chat_bounce_in_v2"),
											  (g = "fb_customer_chat_bounce_out_v2"));
										n.removeCss(e, a);
										n.addCss(e, g);
										ES(s, "forEach", !0, function(event) {
											o.add(e, event, f);
										});
									}
									r.sendToFacebook(y, {
										method: "CustomerChat.isDialogHidden",
										params: ES("JSON", "stringify", !1, {
											is_dialog_hidden: !0
										})
									});
									D = !1;
								}
								d && p.fire("customerchat.dialogHide");
							}
							a.show = function(a) {
								a === void 0 && (a = !0),
									n.setStyle(v, "display", "inline"),
									a && G(x, w, q.mobile(), !1),
									p.fire("customerchat.show");
							};
							a.hide = function() {
								n.setStyle(v, "display", "none"),
									H(x, w, q.mobile(), !1),
									p.fire("customerchat.hide");
							};
							a.showDialog = function() {
								n.setStyle(v, "display", "inline"), G(x, w, q.mobile());
							};
							a.hideDialog = function() {
								H(x, w, q.mobile());
							};
							a.update = function(a) {
								r.sendToFacebook(y, {
									method: "updateCustomerChat",
									params: ES("JSON", "stringify", !1, a || {})
								});
							};
							e.exports = a;
						},
						null
					);
					__d(
						"safeEval",
						[],
						function(a, b, c, d, e, f) {
							function a(a, b) {
								if (a === null || typeof a === "undefined") return;
								if (typeof a !== "string") return a;
								return /^\w+$/.test(a) && typeof window[a] === "function"
									? window[a].apply(null, b || [])
									: Function(
											'return eval("' + a.replace(/\"/g, '\\"') + '");'
									  ).apply(null, b || []);
							}
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.Helper",
						["UrlMap", "safeEval", "sdk.ErrorHandling", "sdk.Event", "sprintf"],
						function(a, b, c, d, e, f, g, h, i, j, k) {
							__p && __p();
							a = {
								isUser: function(a) {
									return (
										a < 22e8 ||
										(a >= 1e14 && a <= 100099999989999) ||
										(a >= 89e12 && a <= 89999999999999) ||
										(a >= 6000001e7 && a <= 60000019999999)
									);
								},
								upperCaseFirstChar: function(a) {
									if (a.length > 0)
										return a.substr(0, 1).toUpperCase() + a.substr(1);
									else return a;
								},
								getProfileLink: function(a, b, c) {
									!c &&
										a &&
										(c = k(
											"%s/profile.php?id=%s",
											g.resolve("www"),
											a.uid || a.id
										));
									c && (b = k('<a class="fb_link" href="%s">%s</a>', c, b));
									return b;
								},
								invokeHandler: function(a, b, c) {
									a &&
										(typeof a === "string"
											? i.unguard(h)(a, c)
											: a.apply && i.unguard(a).apply(b, c || []));
								},
								fireEvent: function(a, b) {
									var c = b._attr.href;
									b.fire(a, c);
									j.fire(a, c, b);
								},
								executeFunctionByName: function(a) {
									var b = Array.prototype.slice.call(arguments, 1),
										c = a.split("."),
										d = c.pop(),
										e = window;
									for (var f = 0; f < c.length; f++) e = e[c[f]];
									return e[d].apply(this, b);
								}
							};
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.XFBML.LoginButton",
						[
							"IframePlugin",
							"Log",
							"sdk.feature",
							"sdk.Helper",
							"sdk.Runtime",
							"sdk.Scribe",
							"sdk.ui",
							"sdk.XD"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
							__p && __p();
							var o = i("https_only_enforce_starting", !1),
								p = i("https_only_learn_more", "");
							a = g.extend({
								constructor: function(a, b, c, d) {
									__p && __p();
									if (location.protocol !== "https:" && o) {
										var e = Math.floor((o - ES("Date", "now", !1)) / 864e5) + 1,
											f =
												"The Login Button plugin will stop working on http pages in %s days. Please update your site to use https for Facebook Login. %s";
										e > 30
											? h.log("warn", -1, f, e - 1, p)
											: o - ES("Date", "now", !1) > 0
												? h.log("error", -1, f, e - 1, p)
												: h.log(
														"error",
														-1,
														"The Login Button plugin can no longer be used on http pages. %s",
														p
												  );
										i("https_only_scribe_logging", !0) &&
											l.log("jssdk_error", {
												appId: k.getClientID(),
												error: "HttpsOnly",
												extra: { message: "LoginButton" }
											});
									}
									this.parent(a, b, c, d);
									var q = g.getVal(d, "on_login"),
										r = null,
										s = this._iframeOptions.name;
									q &&
										((r = function(a) {
											if (a.error_code) {
												h.debug(
													"Plugin Return Error (%s): %s",
													a.error_code,
													a.error_message || a.error_description
												);
												return;
											}
											j.invokeHandler(q, null, [a]);
										}),
										this.subscribe("login.status", r));
									this.subscribe("xd.login_button_dialog_open", function(a) {
										m(ES("JSON", "parse", !1, a.params), function(a) {
											j.invokeHandler(r, null, [a]),
												n.sendToFacebook(s, {
													method: "loginReload",
													params: ES("JSON", "stringify", !1, a)
												});
										});
									});
								},
								shouldIgnoreWidth: function() {
									return !1;
								},
								getParams: function() {
									return {
										scope: "string",
										perms: "string",
										size: "string",
										login_text: "text",
										show_faces: "bool",
										max_rows: "string",
										show_login_face: "bool",
										show_login_numbers: "bool",
										registration_url: "url_maybe",
										auto_logout_link: "bool",
										one_click: "bool",
										show_banner: "bool",
										auth_type: "string",
										default_audience: "string",
										use_continue_as: "bool",
										button_type: "string",
										width: "px",
										height: "px"
									};
								}
							});
							e.exports = a;
						},
						null
					);
					__d(
						"escapeHTML",
						[],
						function(a, b, c, d, e, f) {
							var g = /[&<>\"\'\/]/g,
								h = {
									"&": "&amp;",
									"<": "&lt;",
									">": "&gt;",
									'"': "&quot;",
									"'": "&#039;",
									"/": "&#x2F;"
								};
							function a(a) {
								return a.replace(g, function(a) {
									return h[a];
								});
							}
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.XFBML.Name",
						[
							"ApiClient",
							"Log",
							"escapeHTML",
							"sdk.Event",
							"sdk.Helper",
							"sdk.Runtime",
							"sdk.Scribe",
							"sdk.XFBML.Element"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
							__p && __p();
							var o = {}.hasOwnProperty;
							a = n.extend({
								process: function() {
									__p && __p();
									h.error(
										"##########################\n#  <fb:name> has been deprecated.\n#  Please use FB.api().\n#  https://developers.facebook.com/docs/javascript/reference/FB.api/\n##########################"
									);
									m.log("jssdk_error", {
										appId: l.getClientID(),
										error: "<fb:name>"
									});
									ES("Object", "assign", !1, this, {
										_uid: this.getAttribute("uid"),
										_firstnameonly: this._getBoolAttribute("first-name-only"),
										_lastnameonly: this._getBoolAttribute("last-name-only"),
										_possessive: this._getBoolAttribute("possessive"),
										_reflexive: this._getBoolAttribute("reflexive"),
										_objective: this._getBoolAttribute("objective"),
										_linked: this._getBoolAttribute("linked", !0),
										_subjectId: this.getAttribute("subject-id")
									});
									if (!this._uid) {
										h.error('"uid" is a required attribute for <fb:name>');
										this.fire("render");
										return;
									}
									var a = [];
									this._firstnameonly
										? a.push("first_name")
										: this._lastnameonly
											? a.push("last_name")
											: a.push("name");
									this._subjectId &&
										(a.push("gender"),
										this._subjectId == l.getUserID() && (this._reflexive = !0));
									j.monitor(
										"auth.statusChange",
										ES(
											function() {
												__p && __p();
												if (!this.isValid()) {
													this.fire("render");
													return !0;
												}
												(!this._uid || this._uid == "loggedinuser") &&
													(this._uid = l.getUserID());
												if (!this._uid) return;
												g.scheduleBatchCall(
													"/v1.0/" + this._uid,
													{ fields: a.join(",") },
													ES(
														function(a) {
															if (o.call(a, "error")) {
																h.warn(
																	"The name is not found for ID: " + this._uid
																);
																return;
															}
															this._subjectId == this._uid
																? this._renderPronoun(a)
																: this._renderOther(a);
															this.fire("render");
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
										)
									);
								},
								_renderPronoun: function(a) {
									__p && __p();
									var b = "",
										c = this._objective;
									this._subjectId &&
										((c = !0),
										this._subjectId === this._uid && (this._reflexive = !0));
									if (
										this._uid == l.getUserID() &&
										this._getBoolAttribute("use-you", !0)
									)
										this._possessive
											? this._reflexive
												? (b = "your own")
												: (b = "your")
											: this._reflexive
												? (b = "yourself")
												: (b = "you");
									else
										switch (a.gender) {
											case "male":
												this._possessive
													? (b = this._reflexive ? "his own" : "his")
													: this._reflexive
														? (b = "himself")
														: c
															? (b = "him")
															: (b = "he");
												break;
											case "female":
												this._possessive
													? (b = this._reflexive ? "her own" : "her")
													: this._reflexive
														? (b = "herself")
														: c
															? (b = "her")
															: (b = "she");
												break;
											default:
												this._getBoolAttribute("use-they", !0)
													? this._possessive
														? this._reflexive
															? (b = "their own")
															: (b = "their")
														: this._reflexive
															? (b = "themselves")
															: c
																? (b = "them")
																: (b = "they")
													: this._possessive
														? this._reflexive
															? (b = "his/her own")
															: (b = "his/her")
														: this._reflexive
															? (b = "himself/herself")
															: c
																? (b = "him/her")
																: (b = "he/she");
												break;
										}
									this._getBoolAttribute("capitalize", !1) &&
										(b = k.upperCaseFirstChar(b));
									this.dom.innerHTML = b;
								},
								_renderOther: function(a) {
									var b = "",
										c = "";
									this._uid == l.getUserID() &&
									this._getBoolAttribute("use-you", !0)
										? this._reflexive
											? this._possessive
												? (b = "your own")
												: (b = "yourself")
											: this._possessive
												? (b = "your")
												: (b = "you")
										: a &&
										  (null === a.first_name && (a.first_name = ""),
										  null === a.last_name && (a.last_name = ""),
										  this._firstnameonly && a.first_name !== undefined
												? (b = i(a.first_name))
												: this._lastnameonly &&
												  a.last_name !== undefined &&
												  (b = i(a.last_name)),
										  b || (b = i(a.name)),
										  b !== "" && this._possessive && (b += "'s"));
									b ||
										(b = i(this.getAttribute("if-cant-see", "Facebook User")));
									b &&
										(this._getBoolAttribute("capitalize", !1) &&
											(b = k.upperCaseFirstChar(b)),
										a && this._linked
											? (c = k.getProfileLink(
													a,
													b,
													this.getAttribute("href", null)
											  ))
											: (c = b));
									this.dom.innerHTML = c;
								}
							});
							e.exports = a;
						},
						null
					);
					__d(
						"UnicodeUtils",
						["invariant"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = 55296,
								i = 56319,
								j = 56320,
								k = 57343,
								l = /[\uD800-\uDFFF]/;
							function m(a) {
								return h <= a && a <= k;
							}
							function a(a, b) {
								(0 <= b && b < a.length) || g(0, undefined, b, a.length);
								if (b + 1 === a.length) return !1;
								var c = a.charCodeAt(b);
								a = a.charCodeAt(b + 1);
								return h <= c && c <= i && j <= a && a <= k;
							}
							function n(a) {
								return l.test(a);
							}
							function o(a, b) {
								return 1 + m(a.charCodeAt(b));
							}
							function b(a) {
								if (!n(a)) return a.length;
								var b = 0;
								for (var c = 0; c < a.length; c += o(a, c)) b++;
								return b;
							}
							function p(a, b, c) {
								__p && __p();
								b = b || 0;
								c = c === undefined ? Infinity : c || 0;
								if (!n(a)) return a.substr(b, c);
								var d = a.length;
								if (d <= 0 || b > d || c <= 0) return "";
								var e = 0;
								if (b > 0) {
									for (; b > 0 && e < d; b--) e += o(a, e);
									if (e >= d) return "";
								} else if (b < 0) {
									for (e = d; b < 0 && 0 < e; b++) e -= o(a, e - 1);
									e < 0 && (e = 0);
								}
								b = d;
								if (c < d) for (b = e; c > 0 && b < d; c--) b += o(a, b);
								return a.substring(e, b);
							}
							function c(a, b, c) {
								b = b || 0;
								c = c === undefined ? Infinity : c || 0;
								b < 0 && (b = 0);
								c < 0 && (c = 0);
								var d = Math.abs(c - b);
								b = b < c ? b : c;
								return p(a, b, d);
							}
							function d(a) {
								var b = [];
								for (var c = 0; c < a.length; c += o(a, c))
									b.push(a.codePointAt(c));
								return b;
							}
							f = {
								getCodePoints: d,
								getUTF16Length: o,
								hasSurrogateUnit: n,
								isCodeUnitInSurrogateRange: m,
								isSurrogatePair: a,
								strlen: b,
								substring: c,
								substr: p
							};
							e.exports = f;
						},
						null
					);
					__d(
						"isNode",
						[],
						function(a, b, c, d, e, f) {
							function a(a) {
								var b = a ? a.ownerDocument || a : document;
								b = b.defaultView || window;
								return !!(
									a &&
									(typeof b.Node === "function"
										? a instanceof b.Node
										: typeof a === "object" &&
										  typeof a.nodeType === "number" &&
										  typeof a.nodeName === "string")
								);
							}
							e.exports = a;
						},
						null
					);
					__d(
						"isTextNode",
						["isNode"],
						function(a, b, c, d, e, f, g) {
							function a(a) {
								return g(a) && a.nodeType == 3;
							}
							e.exports = a;
						},
						null
					);
					__d(
						"containsNode",
						["isTextNode"],
						function(a, b, c, d, e, f, g) {
							__p && __p();
							function h(a, b) {
								__p && __p();
								if (!a || !b) return !1;
								else if (a === b) return !0;
								else if (g(a)) return !1;
								else if (g(b)) return h(a, b.parentNode);
								else if ("contains" in a) return ES(a, "contains", !0, b);
								else if (a.compareDocumentPosition)
									return !!(a.compareDocumentPosition(b) & 16);
								else return !1;
							}
							e.exports = h;
						},
						null
					);
					__d(
						"sdk.XFBML.Quote",
						[
							"IframePlugin",
							"UnicodeUtils",
							"containsNode",
							"sdk.DOM",
							"sdk.DOMEventListener",
							"sdk.feature",
							"sdk.UA",
							"sdk.XD"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
							"use strict";
							__p && __p();
							var o = "fb-quotable",
								p = 155,
								q = 70,
								r = "",
								s = null,
								t = [],
								u = !1,
								v = null,
								w = m.mobile();
							function x(a) {
								a = a.getRangeAt(0);
								a = a.startContainer;
								return a.nodeType === 3 ? a.parentNode : a;
							}
							function y(a) {
								__p && __p();
								if (!document.getSelection || w) return;
								a = document.getSelection();
								if (a.rangeCount === 0) {
									A();
									return;
								}
								var b = t.length;
								A();
								if (b) {
									var c = !1;
									for (var d = 0; d < b; d++)
										if (i(t[d], a.focusNode)) {
											c = !0;
											break;
										}
									if (!c) return;
								}
								r = a.toString();
								if (r === "") {
									A();
									return;
								}
								r = ES(r.toString().replace(/\s+/g, " "), "trim", !0);
								b = Number(l("sharequotelimit", 500));
								h.strlen(r) > b
									? (r = h.substr(r, 0, b - 3) + "...")
									: (r = h.substr(r, 0, b));
								if (!u && v) {
									x(a).appendChild(v);
									d = z(a);
									v.style.left = d.x + "px";
									v.style.top = d.y + "px";
								}
							}
							function z(a) {
								__p && __p();
								var b = v && v.offsetWidth,
									c = b ? v.offsetHeight : q;
								b = b ? v.offsetWidth : p;
								a = a.getRangeAt(0);
								var d = document.createElement("span"),
									e = document.createElement("span"),
									f = document.createRange();
								f.setStart(a.startContainer, a.startOffset);
								f.insertNode(d);
								f = document.createRange();
								f.setStart(a.endContainer, a.endOffset);
								f.insertNode(e);
								a = d.offsetTop - c;
								f = d.offsetLeft + (e.offsetLeft - d.offsetLeft) / 2 - b / 2;
								d.parentNode.removeChild(d);
								e.parentNode.removeChild(e);
								return { x: f, y: a };
							}
							function A() {
								(r = ""), !u && v && (v.style.left = "-9999px");
							}
							a = g.extend({
								constructor: function(a, b, c, d) {
									__p && __p();
									if (s) return s;
									this.parent(a, b, c, d);
									u = j.getAttr(a, "layout") === "button";
									v = a;
									v.style.position = "absolute";
									v.style.display = "";
									k.add(document, "keyup", y);
									k.add(document, "mouseup", y);
									this.subscribe(
										"xd.getTextSelection",
										ES(
											function() {
												n.sendToFacebook(this._iframeOptions.name, {
													method: "setTextSelection",
													params: ES("JSON", "stringify", !1, { text: r })
												}),
													A();
											},
											"bind",
											!0,
											this
										)
									);
									t = ES(
										ES("Array", "from", !1, document.getElementsByTagName("*")),
										"filter",
										!0,
										function(a) {
											return (
												a.nodeName.toLowerCase() === "article" ||
												j.containsCss(a, o)
											);
										}
									);
									A();
									s = this;
									return s;
								},
								getParams: function() {
									return { href: "url", layout: "string" };
								}
							});
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.XFBML.Save",
						[
							"IframePlugin",
							"QueryString",
							"sdk.Content",
							"sdk.createIframe",
							"sdk.DialogUtils",
							"sdk.DOM",
							"sdk.Event",
							"sdk.UA",
							"sdk.XD"
						],
						function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
							"use strict";
							__p && __p();
							var p;
							a = g.extend({
								constructor: function(a, b, c, d) {
									__p && __p();
									this.parent(a, b, c, d);
									var e = n.mobile();
									this.subscribe(
										"xd.savePluginGetBlankIframe",
										ES(
											function(a) {
												__p && __p();
												var b,
													c,
													d,
													f = function(a) {
														a && l.removeCss(a, "fb_invisible");
													},
													g = function(a) {
														a && l.addCss(a, "fb_invisible");
													};
												e &&
													((b = k.setupNewDarkOverlay()),
													g(b),
													i.append(b),
													k.addDoubleClickAction(
														b,
														function() {
															return ES(d, "forEach", !0, g);
														},
														5e3
													));
												c = this.setupNewIframeDialog(
													ES("JSON", "parse", !1, a.data),
													a.fromIframe
												);
												g(c);
												i.append(c);
												d = [c, b];
												var h = function() {
														ES(d, "forEach", !0, g),
															k.onDialogHideCleanup(e),
															clearInterval(p);
													},
													j;
												this.subscribe(
													"xd.savePluginShowIframe",
													ES(
														function() {
															m.fire("savePlugin:hideDialog"),
																ES(d, "forEach", !0, f),
																this.positionOnScreen(c, b),
																!e &&
																	!j &&
																	(j = k.addIdleDesktopAction(c, h, 7e3));
														},
														"bind",
														!0,
														this
													)
												);
												this.subscribe("xd.savePluginHideIframe", function() {
													return h();
												});
												m.subscribe("savePlugin:hideDialog", function() {
													return h();
												});
												var n = setInterval(function() {
													var b = document.getElementsByName(a.fromIframe);
													b.length === 0 &&
														(clearInterval(n),
														h(),
														ES(d, "forEach", !0, function(a) {
															a && a.parentNode.removeChild(a);
														}));
												}, 500);
											},
											"bind",
											!0,
											this
										)
									);
								},
								positionOnScreen: function(a, b) {
									__p && __p();
									var c = n.mobile();
									if (c) {
										var d = function(a, b) {
											b != null && k.setDialogPositionToCenter(b, c),
												k.setDialogPositionToCenter(a, c);
										};
										d(a, b);
										k.addMobileOrientationChangeAction(function(c) {
											d(a, b);
										});
										p = setInterval(function() {
											return d(a, b);
										}, 100);
									} else
										l.setStyle(a, "position", "fixed"),
											l.setStyle(a, "top", "20px"),
											l.setStyle(a, "right", "20px");
								},
								setupNewIframeDialog: function(a, b) {
									__p && __p();
									b = "#" + h.encode({ forIframe: b });
									var c = k.setupNewDialog();
									j({
										url: o.getXDArbiterURL() + b,
										name: "blank_" + this._iframeOptions.name,
										root: c.contentRoot,
										tabindex: -1
									});
									l.addCss(c.contentRoot, "fb_dialog_iframe");
									ES(
										"Object",
										"assign",
										!1,
										c.dialogElement.style,
										a.style || {}
									);
									l.setStyle(c.dialogElement, "width", a.width + "px");
									l.setStyle(c.dialogElement, "height", a.height + "px");
									ES(a.classList, "forEach", !0, function(a) {
										return l.addCss(c.dialogElement, a);
									});
									l.removeCss(c.dialogElement, "fb_dialog_advanced");
									return c.dialogElement;
								},
								getParams: function() {
									return { uri: "url", url_category: "string", size: "string" };
								}
							});
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.XFBML.ShareButton",
						["IframePlugin", "sdk.UA", "sdk.ui"],
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							a = g.extend({
								constructor: function(a, b, c, d) {
									this.parent(a, b, c, d),
										this.subscribe("xd.shareTriggerMobileIframe", function(a) {
											a = ES("JSON", "parse", !1, a.data);
											i({
												method: "share",
												href: a.href,
												mobile_iframe: h.mobile()
											});
										});
								},
								getParams: function() {
									return {
										href: "url",
										layout: "string",
										mobile_iframe: "bool",
										type: "string",
										size: "string"
									};
								}
							});
							e.exports = a;
						},
						null
					);
					__d(
						"sdk.XFBML.Video",
						[
							"Assert",
							"IframePlugin",
							"ObservableMixin",
							"sdk.Event",
							"sdk.XD"
						],
						function(a, b, c, d, e, f, g, h, i, j, k) {
							__p && __p();
							function l(a) {
								"use strict";
								(this.$1 = a.isMuted),
									(this.$2 = a.volume),
									(this.$3 = a.timePosition),
									(this.$4 = a.duration);
							}
							l.prototype.update = function(a) {
								"use strict";
								a.isMuted !== undefined && (this.$1 = a.isMuted),
									a.volume !== undefined && (this.$2 = a.volume),
									a.timePosition !== undefined && (this.$3 = a.timePosition),
									a.duration !== undefined && (this.$4 = a.duration);
							};
							l.prototype.isMuted = function() {
								"use strict";
								return this.$1;
							};
							l.prototype.getVolume = function() {
								"use strict";
								return this.$1 ? 0 : this.$2;
							};
							l.prototype.getCurrentPosition = function() {
								"use strict";
								return this.$3;
							};
							l.prototype.getDuration = function() {
								"use strict";
								return this.$4;
							};
							function m(a, b, c) {
								"use strict";
								(this.$1 = a), (this.$2 = b), (this.$3 = c);
							}
							m.prototype.play = function() {
								"use strict";
								k.sendToFacebook(this.$1, {
									method: "play",
									params: ES("JSON", "stringify", !1, {})
								});
							};
							m.prototype.pause = function() {
								"use strict";
								k.sendToFacebook(this.$1, {
									method: "pause",
									params: ES("JSON", "stringify", !1, {})
								});
							};
							m.prototype.seek = function(a) {
								"use strict";
								g.isNumber(a, "Invalid argument"),
									k.sendToFacebook(this.$1, {
										method: "seek",
										params: ES("JSON", "stringify", !1, { target: a })
									});
							};
							m.prototype.mute = function() {
								"use strict";
								k.sendToFacebook(this.$1, {
									method: "mute",
									params: ES("JSON", "stringify", !1, {})
								});
							};
							m.prototype.unmute = function() {
								"use strict";
								k.sendToFacebook(this.$1, {
									method: "unmute",
									params: ES("JSON", "stringify", !1, {})
								});
							};
							m.prototype.setVolume = function(a) {
								"use strict";
								g.isNumber(a, "Invalid argument"),
									k.sendToFacebook(this.$1, {
										method: "setVolume",
										params: ES("JSON", "stringify", !1, { volume: a })
									});
							};
							m.prototype.isMuted = function() {
								"use strict";
								return this.$3.isMuted();
							};
							m.prototype.getVolume = function() {
								"use strict";
								return this.$3.getVolume();
							};
							m.prototype.getCurrentPosition = function() {
								"use strict";
								return this.$3.getCurrentPosition();
							};
							m.prototype.getDuration = function() {
								"use strict";
								return this.$3.getDuration();
							};
							m.prototype.subscribe = function(event, a) {
								"use strict";
								g.isString(event, "Invalid argument");
								g.isFunction(a, "Invalid argument");
								this.$2.subscribe(event, a);
								return {
									release: ES(
										function() {
											this.$2.unsubscribe(event, a);
										},
										"bind",
										!0,
										this
									)
								};
							};
							a = h.extend({
								constructor: function(a, b, c, d) {
									this.parent(a, b, c, d),
										(this._videoController = null),
										(this._sharedObservable = null),
										(this._sharedVideoCache = null),
										this.subscribe("xd.onVideoAPIReady", function(a) {
											(this._sharedObservable = new i()),
												(this._sharedVideoCache = new l(
													ES("JSON", "parse", !1, a.data)
												)),
												(this._videoController = new m(
													this._iframeOptions.name,
													this._sharedObservable,
													this._sharedVideoCache
												)),
												j.fire("xfbml.ready", {
													type: "video",
													id: d.id,
													instance: this._videoController
												});
										}),
										this.subscribe("xd.stateChange", function(a) {
											this._sharedObservable.inform(a.state);
										}),
										this.subscribe("xd.cachedStateUpdateRequest", function(a) {
											this._sharedVideoCache.update(
												ES("JSON", "parse", !1, a.data)
											);
										});
								},
								getParams: function() {
									return {
										allowfullscreen: "bool",
										autoplay: "bool",
										controls: "bool",
										href: "url",
										show_captions: "bool",
										show_text: "bool"
									};
								},
								getConfig: function() {
									return { fluid: !0, full_width: !0 };
								}
							});
							e.exports = a;
						},
						null
					);
					__d(
						"legacy:fb.xfbml.plugins",
						[
							"IframePlugin",
							"PluginConfig",
							"PluginTags",
							"XFBML",
							"sdk.feature",
							"sdk.XFBML.CustomerChat",
							"sdk.XFBML.Comments",
							"sdk.XFBML.CommentsCount",
							"sdk.XFBML.LoginButton",
							"sdk.XFBML.Name",
							"sdk.XFBML.Quote",
							"sdk.XFBML.Save",
							"sdk.XFBML.ShareButton",
							"sdk.XFBML.Video"
						],
						function(a, b, c, d, e, f, g, h, i, j, k) {
							var l = {
									customerchat: b("sdk.XFBML.CustomerChat"),
									comments: b("sdk.XFBML.Comments"),
									comments_count: b("sdk.XFBML.CommentsCount"),
									login_button: b("sdk.XFBML.LoginButton"),
									name: b("sdk.XFBML.Name"),
									quote: b("sdk.XFBML.Quote"),
									save: b("sdk.XFBML.Save"),
									share_button: b("sdk.XFBML.ShareButton"),
									video: b("sdk.XFBML.Video")
								},
								m = k("plugin_tags_blacklist", []);
							ES(ES("Object", "keys", !1, i), "forEach", !0, function(a) {
								if (ES(m, "indexOf", !0, a) !== -1) return;
								j.registerTag({
									xmlns: "fb",
									localName: a.replace(/_/g, "-"),
									ctor: g.withParams(i[a], h[a])
								});
							});
							ES(ES("Object", "keys", !1, l), "forEach", !0, function(a) {
								if (ES(m, "indexOf", !0, a) !== -1) return;
								j.registerTag({
									xmlns: "fb",
									localName: a.replace(/_/g, "-"),
									ctor: l[a]
								});
							});
						},
						3
					);
				}
			}.call(global));
		})(window.inDapIF ? parent.window : window, window);
} catch (e) {
	new Image().src =
		"http://www.facebook.com/" +
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
				'","revision":"4307551","namespace":"FB","message":"' +
				e.message +
				'"}}'
		);
}
