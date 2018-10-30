/*1540931318,,JIT Construction: v4478689,en_US*/

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
					__d("JSSDKCssConfig", [], {
						rules:
							"._2vfx{font-size:100px;overflow:hidden}._2vfy{overflow:hidden}._2vf-{overflow:hidden;transition:transform .3s cubic-bezier(.14, 1, 1, 1);will-change:transform}._11u9{float:left;overflow:hidden;position:relative;text-decoration:none}._11u-{background:linear-gradient(rgba(0,0,0,0) 0\u0025, rgba(0,0,0,.2) 100\u0025);bottom:0;left:0;position:absolute;right:0;top:60\u0025}._11u- ._11u_{bottom:8px;color:#fff;left:0;margin-top:0;padding-left:8px;padding-right:8px;position:absolute;right:0;text-shadow:0 1px 3px black}._11u_{color:#606770;font-size:12\u0025;font-weight:normal;margin-top:4.023\u0025}._41-w ._11u_{font-size:13px}._41-w ._11vj{height:18px;line-height:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._11v0,._11vj{line-height:1.4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._11v0{font-weight:500}._11vj{font-weight:normal}._11us{background-position:center center;background-repeat:no-repeat;background-size:cover;border-radius:10px;width:100\u0025}._11ur{border-radius:10px;overflow:hidden;position:relative}._11vk{border:1px solid #3578e5;border-radius:4px;color:#3578e5;font-size:12\u0025;font-weight:normal;line-height:1;margin-bottom:4.023\u0025;margin-top:4.023\u0025;padding-bottom:3.448\u0025;padding-top:3.448\u0025;text-align:center}\n._1xj7{background-color:#000;height:100\u0025;overflow:hidden;position:relative;width:100\u0025}._1xj8{height:100\u0025;left:0;position:absolute;top:0;width:100\u0025}._1xj9{background-position:center;background-repeat:no-repeat;bottom:12px;cursor:pointer;height:20px;position:absolute;right:12px;width:20px}._73wr ._1xj9{background-color:rgba(0, 0, 0, .3);border-radius:30px;padding:5px;right:5px;top:50px}._1xj9._1xja{background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y-/r/muQZaN-Pay7.png)}._1xj9._1xjb{background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yr/r/ZwUyODcSYJ2.png)}._3c3s{background-color:rgba(0, 0, 0, .6);background-image:url(https://www.facebook.com/images/marketing/video/play-medium.png);background-position:center;background-repeat:no-repeat;height:100\u0025;opacity:1;position:absolute;transition:opacity .3s;visibility:visible;width:100\u0025}._3c3s._2a06{opacity:0;transition:opacity .3s, visibility 0s linear .3s;visibility:hidden}._6pfr{background-position:center center;background-repeat:no-repeat;background-size:cover;bottom:-30px;filter:blur(20px);left:-30px;pointer-events:none;position:absolute;right:-30px;top:-30px}._7462 ._3c3s,._7462 ._1xj9,._7462 ._1xj8{display:none}\n._727b{align-items:center;background-color:rgba(0, 0, 0, .6);display:flex;height:100\u0025;justify-content:center;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity .3s;width:100\u0025}._727i{align-items:center;background-color:#fff;border-radius:12px;display:flex;flex-direction:column;font-family:-apple-system, roboto, 'Helvetica Neue', sans-serif;font-size:14px;justify-content:center;margin:10px;padding:12px 12px;text-align:center;width:200px}._727l{background-size:contain;border-radius:50\u0025;height:60px;margin-right:4px;margin-top:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:60px}._727m{margin:4px 4px 0 0}._727k{margin-right:4px;margin-top:4px}._727n{background-color:#3578e5;border-radius:4px;box-sizing:border-box;color:#fff;font-weight:normal;margin-top:24px;padding:6px;width:80\u0025}._727o{opacity:1}._727j{background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yD/r/jEwNOnngB02.png);background-size:contain;height:16px;margin-left:auto;text-align:right;width:16px}\n._6qhh{font-family:-apple-system, roboto, 'Helvetica Neue', sans-serif;font-size:14px;font-weight:normal;text-align:left}._6qhd{align-items:center;animation:fadeIn .3s ease-in-out both;background:#dadde1;bottom:0;display:flex;justify-content:center;left:0;padding:5px;position:absolute;right:0;top:0;z-index:100}._6wfr ._6qhd{bottom:-0.5px;left:-0.5px;right:-0.5px;top:-0.5px}._6qhe{animation:fadeIn .3s ease-in-out both;background:white;border-radius:10px;box-shadow:0 2px 8px 0 rgba(0, 0, 0, .3);box-sizing:border-box;display:flex;flex-direction:column;max-height:100\u0025;max-width:320px;position:relative}._6qha{overflow-x:hidden;overflow-y:auto;padding-top:10px}._6qhg{height:23px;position:absolute;right:0;top:0}._6qhg:after{background-color:rgba(255, 255, 255, .8);background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/ys/r/gX9Zgekva9J.png);background-position:27px 3px;background-repeat:no-repeat;background-size:12px 12px;border-radius:0 0 0 6px;box-shadow:0 0 4px 0 rgba(0, 0, 0, .15);content:'';display:block;height:18px;margin-left:5px;margin-top:0;width:42px}._6qhg:before{background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yu/r/4l2RpWw-PLG.png);background-position:0 4px;background-repeat:no-repeat;background-size:10px 10px;border-right:1px solid rgba(0, 0, 0, .2);content:'';height:18px;left:11px;position:absolute;top:0;width:15px}._6qhb{box-sizing:border-box;display:flex;flex-direction:column;max-height:100\u0025;padding:10px 16px}._6qhc{padding-bottom:0}._6qhk,._6qgi{background-repeat:no-repeat;background-size:18px 18px;display:inline-block;height:18px;width:18px}._6qhh ._6qho{align-items:center;display:flex;flex-direction:row;margin:10px 0;text-decoration:none}._6qhk{flex-shrink:0;margin-right:10px}._6qhm{color:#1c1e21;font-weight:normal}._6qhl{font-size:16px;line-height:19px}._6qhn{color:#606770;font-size:14px;line-height:16px}._6qgk{background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yc/r/NOeCWD5no4s.png)}._6qgl{background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yA/r/BKiZzia0l7j.png)}._6qhp{background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/ys/r/gX9Zgekva9J.png)}._6qi1{background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y4/r/PITveVN_6ro.png);background-repeat:no-repeat;background-size:100\u0025;display:inline-block;height:20px;vertical-align:middle;width:20px}._6qhz{background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yd/r/kS3NV5igXMY.png);background-repeat:no-repeat;background-size:100\u0025;display:inline-block;height:11px;margin-right:6px;width:15px}._6qh6{font-weight:normal;padding-bottom:4px;position:relative}._6qh6:after{background:linear-gradient(white, rgba(255, 255, 255, 0));content:'';height:10px;left:0;position:absolute;right:0;top:100\u0025}._6qgh{border-bottom:1px solid #ccc;font-size:16px;line-height:20px;margin-bottom:6px;padding-bottom:6px;text-align:center}._6qh5{align-items:center;display:flex;flex-direction:row}._6qh4{color:#606770}._6qgi{flex-shrink:0;margin-right:10px}._6qh9{margin:0 -8px}._6qh9 ._6qh7{display:inline-block;margin-bottom:20px;margin-left:8px;margin-right:8px;vertical-align:middle}._6qh7{background:#ebedf0;border:none;border-radius:20px;color:#606770;font-size:14px;line-height:14px;padding:13px 16px;white-space:nowrap}._6qh7:focus,._6qh7:active{border:none;outline:none}._6qh7:active,._6qh8{background:#3578e5;color:#fff}._6qi4{align-items:center;display:flex;flex-direction:column}._6qhx{color:#1c1e21;font-size:16px;line-height:24px;margin-top:6px}._6qhy{color:#606770;font-size:14px;line-height:19px;margin:10px 0;text-align:center}._6qhu{background-position:center center;background-repeat:no-repeat;background-size:16px 16px;border-radius:50\u0025;height:42px;width:42px}._6qhv{background-color:#3578e5;background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yE/r/oy4B7rSgGV0.png)}._6qhw{background-color:#f7923b;background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yo/r/TQU64J6qQUe.png)}._6qi2{display:flex;flex-direction:row;margin-bottom:20px}._6qhh ._6qi0{align-items:center;color:#3578e5;display:flex;flex-direction:row;margin-top:auto;text-decoration:none;width:auto}._6qi1{margin-right:6px}._6qh-{border-radius:50\u0025;height:40px;margin-right:5px;width:40px}._6qhh ._6qi3{background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yF/r/tlUefGrS_4W.png);background-position:center center;background-repeat:no-repeat;background-size:13px 13px;height:13px;margin-right:-10px;margin-top:-10px;padding:10px;position:absolute;right:16px;top:15px;width:13px}._6qhf{align-self:flex-start;color:#8d949e;font-size:16px;margin-top:20px}\u0040keyframes fadeIn{0\u0025{opacity:0}100\u0025{opacity:1}}",
						components: [
							"css:ANCarousel",
							"css:ANWebVideoPlayer",
							"css:ANWebTwoStepClickDialog",
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
							function a(a) {
								var b = m(a);
								a = ES(a, "indexOf", !0, ":", ES(a, "indexOf", !0, "://") + 3);
								a !== -1 && (b = b.substring(0, a));
								a = ES(b, "indexOf", !0, "://");
								return a === -1 ? b : b.substring(a + 3);
							}
							function n(a) {
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
								a = n(a);
								a = a.substring(a.length - b.length);
								return a === b;
							}
							function o(a) {
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
								return o()[0];
							}
							function p(a) {
								__p && __p();
								var b = o();
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
								return p("v55");
							}
							function f() {
								return p("v60");
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
								return h.getScreenOrientation() == g.VERTICAL;
							}
							function D(a) {
								if (!a) return !1;
								for (var b = 0; b < l.length; b++) {
									var c = l[b];
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
								if (J(a)) return k;
								if (b >= c.length) return j;
								a.textContent = c.slice(0, b + 1).join(" ") + "\u2026";
								if (J(a)) {
									a.textContent = d;
									return j;
								}
								a.textContent = d;
								return i;
							}
							function L(a) {
								if (!J(a)) return;
								var b = a.textContent.split(" "),
									c = 0,
									d = b.length - 1;
								while (c <= d) {
									var e = Math.floor((c + d) / 2),
										f = K(a, e, b);
									if (f === j) break;
									f === k ? (d = e - 1) : (c = e + 1);
								}
							}
							function M(a) {
								var b = !1;
								return function() {
									b || ((b = !0), a.apply(undefined, arguments));
								};
							}
							e.exports = {
								calculateLargestMargin: I,
								cssSize: u,
								extractOrigin: m,
								extractDomain: a,
								extractHostname: n,
								findWidestParentElement: H,
								getDFPRoot: x,
								getElementWidth: y,
								getElementHeight: z,
								getScreenHeight: B,
								getScreenWidth: A,
								getTopMostAccessibleWindow: c,
								getV55TagStateContainer: d,
								getV60TagStateContainer: f,
								getWindowHierarchy: o,
								isA9Container: w,
								isAppStoreURL: D,
								isDfpContainer: t,
								isSameRootDomain: b,
								maybeHTMLElement: r,
								maybeHTMLBodyElement: s,
								maybeNode: q,
								once: M,
								resizeElement: v,
								restoreElementStyles: F,
								removeStoredData: G,
								screenIsPortrait: C,
								storeElementStyles: E,
								truncateTextToFitElement: L
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
									setTimeout(function() {
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
								var b = this.$3(a);
								a = g(a.contentDocument.body);
								a.style.margin = "0";
								a.style.padding = "0";
								a.style.overflow = "hidden";
								a.appendChild(b);
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							function a(a) {
								(this.$1 = !1), (this.$2 = 0), (this.$4 = a), (this.$3 = []);
							}
							a.prototype.$5 = function() {
								__p && __p();
								var a = Date.now() - this.$2;
								for (
									var b = this.$3,
										c = Array.isArray(b),
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
								this.$2 = Date.now();
								var a = new g(this.$4);
								a.addVisibilityListener(
									function() {
										var b = a.getVisibilityState();
										b === "visible" && this.$5();
									}.bind(this)
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
						"VPAIDDomUtils",
						["nullthrows"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							function h(a, b, c) {
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
								return h("div", { className: a }, b || []);
							}
							function b(a, b) {
								return h("a", {
									className: a,
									href: b || "#",
									target: "_blank"
								});
							}
							function c(a, b) {
								return h("span", { className: a, textContent: b });
							}
							function d(a, b) {
								return g(a.querySelector(b));
							}
							e.exports = { anchor: b, dom: h, div: a, find: d, span: c };
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
											b = Array.isArray(a),
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
							function a(a, b) {
								(this.$4 = b), (this.$1 = a), (this.$2 = this.$5());
							}
							a.prototype.setImageSize = function(a) {
								a = a + "px";
								this.$2.style.width = a;
								this.$3.style.width = a;
								this.$3.style.height = a;
							};
							a.prototype.$5 = function() {
								__p && __p();
								var a = m("_11u9", [
									j("_11ur", [
										j("_11us"),
										j("_11u-", [
											j("_11u_", [
												n("_11v0", this.$1.adTitle),
												n("_11vj", this.$1.adBody)
											])
										])
									]),
									n("_11vk", this.$1.adCallToAction)
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
								var b = Date.now(),
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
									(this.$3 = Date.now()),
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
											function() {
												this.scrollTo(this.$16(this.$1 + b.x * l));
											}.bind(this)
										));
								else if (Date.now() - this.$3 > 2 * (1e3 / 60)) {
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
									function() {
										this.$11.onCriticalAnimationEnd();
									}.bind(this),
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
										function() {
											this.scrollTo(a, b);
										}.bind(this)
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
							"ANCarouselItem",
							"ANCarouselMotion",
							"VPAIDDomUtils",
							"csx",
							"cx"
						],
						function(a, b, c, d, e, f, g, h, i, j, k) {
							"use strict";
							__p && __p();
							var l = i.div,
								m = i.find,
								n = function() {},
								o = function(a) {
									return { x: a.touches[0].clientX, y: a.touches[0].clientY };
								},
								p = 298,
								q = 174;
							b = 8;
							var r = q / p,
								s = b / q,
								t = 1.2;
							function a(a) {
								var b = a.ads,
									c = a.onEvent,
									d = a.onCriticalAnimationStart,
									e = a.onCriticalAnimationEnd;
								a = a.onLoadEventCounter;
								this.$12 = a;
								this.$4 = b;
								this.$7 = c || n;
								this.onCriticalAnimationStart = d || n;
								this.onCriticalAnimationEnd = e || n;
								this.$13();
							}
							a.prototype.$13 = function() {
								(this.$6 = 0),
									(this.$5 = []),
									(this.$1 = l("ANCarousel/root", [l("_2vfy", [l("_2vf-")])])),
									(this.$3 = m(this.$1, "._2vf-")),
									(this.$2 = m(this.$1, "._2vfy")),
									this.$12.addRequiredEvent(),
									this.$4.forEach(
										function(a, b) {
											a = new g(
												a,
												b === 0
													? function() {
															return this.$12.requiredEventFired();
													  }.bind(this)
													: null
											);
											this.$5.push(a);
											this.$3.appendChild(a.getElement());
										}.bind(this)
									),
									(this.$11 = new h(
										this,
										function(a, b) {
											this.$7("AN_CAROUSEL_EVENT_SWIPE", {
												index: a,
												direction: b
											});
										}.bind(this)
									)),
									this.ensureSizes(),
									this.$14();
							};
							a.prototype.$15 = function() {
								return this.$1.clientWidth;
							};
							a.prototype.$14 = function() {
								this.$3.addEventListener(
									"touchstart",
									function(a) {
										this.$11.onMoveStart(o(a));
									}.bind(this)
								),
									this.$3.addEventListener(
										"touchmove",
										function(a) {
											this.$11.onMove(a, o(a));
										}.bind(this)
									),
									this.$3.addEventListener(
										"touchend",
										function(a) {
											this.$11.onMoveEnd();
										}.bind(this)
									);
							};
							a.prototype.$16 = function(a) {
								if (this.isWithinRange(a)) return a;
								return a > 0 ? 0 : -this.getMaxOffset();
							};
							a.prototype.$17 = function() {
								return Math.round(this.$10 * r);
							};
							a.prototype.$18 = function() {
								return Math.round(this.$8 * s);
							};
							a.prototype.$19 = function() {
								return this.$8 > q ? t : 1;
							};
							a.prototype.$20 = function(a) {
								return (this.$8 + this.$9) * a + this.$9;
							};
							a.prototype.getLinks = function() {
								return this.$5.map(function(a) {
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
								return this.$8 / q;
							};
							a.prototype.getFullWidth = function() {
								return this.$4.length * (this.$8 + this.$9);
							};
							a.prototype.getMaxOffset = function() {
								return this.getFullWidth() - this.$10 + this.$9;
							};
							a.prototype.isIndexVisible = function(a) {
								var b = this.$11.getCurrentOffset();
								a = this.$20(a);
								return a > b && a + this.$8 < b + this.$10;
							};
							a.prototype["goto"] = function(a, b) {
								var c = -a * (this.$8 + this.$9);
								c += (this.$10 - this.$8) / 2 - this.$9;
								c = this.$16(c);
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
								(this.$10 = this.$15() || p),
									(this.$8 = this.$17()),
									(this.$9 = this.$18()),
									(this.$1.style.fontSize = this.$19() * 100 + "px"),
									(this.$3.style.width = this.getFullWidth() + "px"),
									this.$5.forEach(
										function(a, b) {
											var c = a.getElement();
											a.setImageSize(this.$8);
											b < this.$5.length - 1 &&
												(c.style.marginRight = this.$9 + "px");
											b === 0 && (c.style.marginLeft = this.$9 + "px");
										}.bind(this)
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
								this.$2 ? setTimeout(a, 0) : this.$3.push(a);
							};
							a.prototype.$4 = function() {
								__p && __p();
								for (
									var a = this.$3,
										b = Array.isArray(a),
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
							function a() {
								(this.$1 = new Map()),
									(this.$2 = new Map()),
									(this.$3 = new Map());
							}
							a.prototype.resize = function(a, b, c) {
								this.addChanges(a, {
									width: g.cssSize(b),
									height: g.cssSize(c)
								});
							};
							a.prototype.addChanges = function(a, b) {
								__p && __p();
								var c = this.$4(a);
								this.$1.has(c) ||
									(this.$1.set(c, new Map()), this.$2.set(c, new Map()));
								var d = h(this.$1.get(c));
								c = h(this.$2.get(c));
								var e = Object.keys(b);
								for (var f = 0; f < e.length; f++) {
									var g = e[f];
									d.set(g, b[g]);
									k(c, a, g);
								}
							};
							a.prototype.applyChanges = function() {
								__p && __p();
								for (
									var a = this.$1,
										b = Array.isArray(a),
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
											f = Array.isArray(d),
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
							a.prototype.restoreOriginalStyles = function() {
								__p && __p();
								for (
									var a = this.$2,
										b = Array.isArray(a),
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
											f = Array.isArray(d),
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
							a.prototype.$4 = function(a) {
								a.id || (a.id = j());
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
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							__p && __p();
							function a(a, b, c, d, e) {
								(this.$1 = new g()),
									(this.$2 = a),
									(this.$3 = b),
									(this.$4 = c),
									(this.$5 = d),
									(this.$6 = e);
							}
							a.prototype.resize = function(a, b) {
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
							a.prototype.$7 = function(a, b, c, d) {
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
							a.prototype.restoreOriginalStyles = function() {
								this.$1.restoreOriginalStyles();
							};
							a.prototype.$8 = function(a) {
								this.$1.addChanges(a, { "max-width": "none" });
								a = a.parentElement;
								if (!a) return;
								var b = this.$6 - a.getBoundingClientRect().left;
								this.$1.addChanges(a, { "margin-left": h.cssSize(b) });
								this.$1.addChanges(a, { "max-width": "none" });
							};
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
							function a(a, b, c) {
								(this.$1 = new g()),
									(this.$2 = a),
									(this.$3 = b),
									(this.$5 = c);
							}
							a.prototype.resize = function(a, b) {
								this.$1.resize(this.$3, a, b);
								var c = this.$6(this.$3);
								c &&
									(this.$1.resize(c, a, b),
									this.$1.addChanges(c, {
										"margin-left": "auto",
										"margin-right": "auto"
									}),
									this.$1.addChanges(this.$2, { display: "block" }));
								this.$1.applyChanges();
								this.$7();
								this.$1.applyChanges();
							};
							a.prototype.restoreOriginalStyles = function() {
								this.$1.restoreOriginalStyles();
							};
							a.prototype.$6 = function(a) {
								a =
									a.parentElement &&
									a.parentElement.parentElement &&
									a.parentElement.parentElement.parentElement;
								return a && h.isDfpContainer(a) ? a : null;
							};
							a.prototype.$7 = function() {
								var a = this.$3,
									b = this.$5 - a.getBoundingClientRect().left;
								this.$1.addChanges(a, {
									"margin-left": h.cssSize(b),
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
							a.prototype.$17 = function(a, b) {
								__p && __p();
								var c = j(a, "position");
								if (c && c !== "static" && !(b === 0 && c === "relative"))
									if (c === "relative")
										for (
											var c = a.children,
												a = Array.isArray(c),
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
							a.prototype.$18 = function(a) {
								return Object.prototype.hasOwnProperty.call(a.dataset, this.$9)
									? i.getElementHeight(a) - parseInt(a.dataset[this.$9], 10)
									: null;
							};
							a.prototype.$14 = function() {
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
							a.prototype.$16 = function(a) {
								if (a.nodeName === "BODY") return !1;
								var b = window.getComputedStyle(a).overflowY;
								if (b === "scroll" || b === "auto") return !1;
								return i.getElementHeight(a) > this.$10 * 2 ? !1 : !0;
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
							function a(a) {
								(this.$1 = a),
									(this.$2 = document.createElement("a")),
									(this.$2.rel = "noopener noreferrer"),
									this.$1.appendChild(this.$2);
							}
							a.prototype.openNewTab = function(a) {
								(this.$2.href = a),
									(this.$2.target = "_blank"),
									this.$2.click();
							};
							e.exports = a;
						},
						null
					);
					__d(
						"LogLevels",
						[],
						function(a, b, c, d, e, f) {
							e.exports = Object.freeze({ DEBUG: 1, WARNING: 2, ERROR: 3 });
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
						"getTime",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							function a() {
								return Date.now();
							}
							e.exports = a;
						},
						null
					);
					__d(
						"ANLogger",
						["LogLevels", "QueryString", "getTime"],
						function(a, b, c, d, e, f, g, h, i) {
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
										b = Array.isArray(a),
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
									var event = d;
									this.$7(event.name, event.timestamp, event.params);
								}
								this.$5 = [];
							};
							a.prototype.debug = function(a, b) {
								this.$1 <= g.DEBUG && this.event(a, b);
							};
							a.prototype.error = function(a) {
								this.$1 <= g.ERROR && this.event("ADNW_ADERROR", a);
							};
							a.prototype.event = function(a, b, c) {
								var d = {};
								b != null && (d.error_message = "" + b);
								c != null && (d.error_stack_trace = c);
								this.eventWithParams(a, d);
							};
							a.prototype.eventWithParams = function(a, b) {
								var c = i();
								if (!this.$6) {
									this.$5.push({ name: a, timestamp: c, params: b });
									return;
								}
								this.$7(a, c, b);
							};
							a.prototype.$7 = function(a, b, c) {
								(c.client_ts = b),
									(c.event_name = a),
									this.$2 > 0 &&
										(c.latency_since_navigation_start = b - this.$2),
									(c.latency_since_sdk_init = b - this.$3),
									window.$8 && (c.visibility_changed = !0),
									this.$4(h.appendToUrl(this.$6, c));
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANRewardedVideoPlayer",
						["ANUtils", "cx", "nullthrows"],
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							__p && __p();
							var j = 2,
								k = 4;
							function a(a, b, c) {
								(this.$1 = a),
									(this.$2 = b),
									(this.$3 = c),
									(this.$4 = !1),
									(this.$5 = !1),
									(this.$9 = i(b.querySelector(".adnwRVFooterInfo"))),
									(this.$6 = i(b.querySelector(".skipProgressWheel"))),
									(this.$7 = i(
										this.$6.querySelector(
											".skipProgressWheelLeft .skipProgressWheelCircle"
										)
									)),
									(this.$8 = i(
										this.$6.querySelector(
											".skipProgressWheelRight .skipProgressWheelCircle"
										)
									)),
									(this.$10 = i(b.querySelector(".skipButton")));
							}
							a.prototype.makeRewarded = function() {
								var a = this.$3.getVideoElement();
								a.loop = !1;
								this.$3.setMuted(!1);
								this.$11();
								this.$3.getElement().classList.add("_73wr");
							};
							a.prototype.$12 = function() {
								var a = i(this.$2.querySelector(".closeArea"));
								a.addEventListener(
									"click",
									g.once(
										function() {
											return this.$1.adClosed();
										}.bind(this)
									)
								);
								this.$3.pause();
								this.$13();
								this.$2.classList.add("endCardShowing");
								this.$3.getElement().classList.add("_7462");
								this.$1.rewardCompleted();
							};
							a.prototype.$14 = function() {
								if (this.$4) return;
								this.$4 = !0;
								this.$9.classList.add("fadeIn");
							};
							a.prototype.$13 = function() {
								if (!this.$4) return;
								this.$4 = !1;
								this.$9.classList.remove("fadeIn");
							};
							a.prototype.$15 = function() {
								var a = this.$3.getVideoElement();
								if (a.duration <= j || this.$5) return;
								if (a.currentTime >= j) this.$16();
								else {
									this.$6.classList.add("skipProgressWheelShow");
									a = Math.ceil((360 * a.currentTime) / j);
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
							a.prototype.$16 = function() {
								if (this.$5) return;
								this.$5 = !0;
								this.$6.classList.remove("skipProgressWheelShow");
								var a = i(this.$2.querySelector(".skipButton"));
								a.classList.add("skipButtonShow");
								a.addEventListener("click", g.once(this.$12.bind(this)));
							};
							a.prototype.$17 = function() {
								var a = this.$3.getVideoElement();
								a = a.duration - a.currentTime;
								return a < k;
							};
							a.prototype.$11 = function() {
								__p && __p();
								var a = i(this.$2.querySelector(".adnwRVProgressBar")),
									b = this.$3.getVideoElement(),
									c = function() {
										var d = 100 * (b.currentTime / b.duration);
										d = Math.min(d, 100);
										this.$15();
										a.style.width = d + "%";
										(b.paused || this.$17()) && this.$14();
										d >= 100
											? this.$12()
											: b.paused || window.requestAnimationFrame(c);
										b.currentTime >= j && this.$16();
									}.bind(this);
								b.addEventListener(
									"play",
									function() {
										this.$17() || this.$13(), window.requestAnimationFrame(c);
									}.bind(this)
								);
								!b.paused ? window.requestAnimationFrame(c) : this.$14();
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANRewardsManager",
						["ANUtils"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							function a(a, b) {
								(this.$2 = a ? g.once(a) : function() {}),
									(this.$3 = b ? g.once(b) : function() {}),
									(this.$1 = !1);
							}
							a.prototype.enable = function() {
								this.$1 = !0;
							};
							a.prototype.isEnabled = function() {
								return this.$1;
							};
							a.prototype.rewardCompleted = function() {
								if (!this.$1) return;
								this.$2();
							};
							a.prototype.adClosed = function() {
								if (!this.$1) return;
								this.$3();
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
							function r(a, b) {
								(this.$1 = a), (this.$2 = b), (this.$4 = []), (this.$5 = []);
							}
							r.openDialog = function(a, b, c) {
								b = new r(b, c);
								b.$6();
								b.$7(a);
								return b;
							};
							r.prototype.onConfirm = function(a) {
								this.$4.push(a);
								return this;
							};
							r.prototype.onDismiss = function(a) {
								this.$5.push(a);
								return this;
							};
							r.prototype.$6 = function() {
								__p && __p();
								var a = this.$3;
								a ||
									((a = n("_727b", [
										n("_727i", [
											o("_727j", ""),
											o("_727k", p),
											o("_727l", ""),
											o("_727m", this.$1),
											o("_727n", q)
										])
									])),
									(k(a.querySelector("._727l")).style.backgroundImage =
										"url(" + this.$2 + ")"),
									a.addEventListener(
										"click",
										function(event) {
											__p && __p();
											var b = k(m(event.target)),
												c = k(k(a).querySelector("._727i")),
												d = k(k(a).querySelector("._727j"));
											if (b === d) this.$8(event);
											else if (b === c || c.contains(b))
												for (
													var d = this.$4,
														c = Array.isArray(d),
														b = 0,
														d = c
															? d
															: d[
																	typeof Symbol === "function"
																		? Symbol.iterator
																		: "@@iterator"
															  ]();
													;

												) {
													var e;
													if (c) {
														if (b >= d.length) break;
														e = d[b++];
													} else {
														b = d.next();
														if (b.done) break;
														e = b.value;
													}
													e = e;
													e(event);
												}
											else this.$8(event);
										}.bind(this)
									));
								this.$3 = a;
							};
							r.prototype.$8 = function(event) {
								__p && __p();
								var a = k(this.$3);
								a.classList.remove("_727o");
								k(this.$3).style.opacity = "0";
								setTimeout(
									function() {
										__p && __p();
										a.parentNode && a.parentNode.removeChild(a);
										for (
											var b = this.$5,
												c = Array.isArray(b),
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
											e(event);
										}
									}.bind(this),
									300
								);
							};
							r.prototype.$7 = function(a) {
								a.appendChild(k(this.$3)),
									setTimeout(
										function() {
											k(this.$3).classList.add("_727o");
										}.bind(this)
									);
							};
							e.exports = r;
						},
						null
					);
					__d(
						"ANWebVideoLogger.anweb",
						["QueryString"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = 10,
								i = 0.97;
							function a(a, b, c, d) {
								(this.$7 = function() {
									!this.$5 && this.$1.currentTime >= h && this.$8();
									var a = this.$1.currentTime / this.$1.duration;
									!this.$6 && a >= i && this.$9();
								}.bind(this)),
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
									((this.$5 = !0), this.$4(g.appendToUrl(this.$2, this.$10())));
							};
							a.prototype.$9 = function() {
								this.$3 != null &&
									!this.$6 &&
									((this.$6 = !0), this.$4(g.appendToUrl(this.$3, this.$10())));
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
						"ANWebVideoPlayer.anweb",
						["VPAIDDomUtils", "csx", "cx", "nullthrows"],
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							var k = g.div,
								l = g.dom;
							function m(a, b) {
								return j(a.querySelector(b));
							}
							function a(a, b, c, d, e, f) {
								(this.$6 = !1),
									(this.$7 = !1),
									(this.$8 = !1),
									(this.$1 = a),
									(this.$2 = b),
									(this.$8 = !!c),
									(this.$5 = d),
									(this.$3 = e),
									(this.$4 = f),
									(this.$13 = !0),
									this.$14(),
									this.$15();
							}
							a.prototype.$14 = function() {
								__p && __p();
								var a = k("_6pfr");
								this.$8 && (a.style.backgroundImage = "url(" + this.$2 + ")");
								if (this.$5) {
									var b = new Image();
									b.addEventListener(
										"load",
										function() {
											this.$5 && this.$5();
										}.bind(this)
									);
									b.src = this.$2;
								}
								this.$9 = k("_1xj7", [
									a,
									l(
										"video",
										{
											className: "_1xj8",
											muted: !0,
											loop: !0,
											controls: !1,
											src: this.$1
										},
										[]
									),
									k("_3c3s"),
									k("_1xj9")
								]);
								this.$10 = m(this.$9, "._1xj8");
								this.$11 = m(this.$9, "._1xj9");
								this.$12 = m(this.$9, "._3c3s");
								this.$10.poster = this.$2;
								this.$10.setAttribute("webkit-playsinline", "true");
								this.$10.setAttribute("playsinline", "true");
								this.$10.setAttribute("muted", "true");
								this.$16();
							};
							a.prototype.$15 = function() {
								__p && __p();
								var a = function(event) {
										this.setMuted(!this.$13), event.stopPropagation();
									}.bind(this),
									b = function(event) {
										this.$10.paused ? this.play(!0) : this.pause(!0),
											this.$4 && this.$4(),
											event.stopPropagation();
									}.bind(this);
								this.$9.addEventListener(
									"click",
									function(event) {
										if (event.target === this.$11) {
											a(event);
											return;
										}
										if (
											event.target === this.$10 ||
											event.target === this.$12
										) {
											b(event);
											return;
										}
									}.bind(this)
								);
								var c = function(event) {
									return this.pause(!0);
								}.bind(this);
								this.$10.addEventListener("webkitendfullscreen", c);
								this.$10.addEventListener("fullscreenchange", c);
								this.$10.addEventListener("webkitfullscreenchange", c);
							};
							a.prototype.getElement = function() {
								return this.$9;
							};
							a.prototype.setMuted = function(a) {
								(this.$13 = a), (this.$10.muted = a), this.$16();
							};
							a.prototype.$16 = function() {
								this.$11.classList.toggle("_1xja", this.$13),
									this.$11.classList.toggle("_1xjb", !this.$13);
							};
							a.prototype.play = function(a) {
								this.$7 = !0;
								this.$6 = this.$6 && !a;
								a = this.$10.play();
								a && a.then instanceof Function
									? a.then(
											function() {
												this.$12.classList.add("_2a06");
											}.bind(this),
											function() {
												this.$12.classList.remove("_2a06"),
													this.$3 && this.$3();
											}.bind(this)
									  )
									: this.$12.classList.add("_2a06");
							};
							a.prototype.pause = function(a) {
								(this.$6 = this.$6 || !!a),
									this.$10.pause(),
									this.$12.classList.remove("_2a06");
							};
							a.prototype.wasManuallyPaused = function() {
								return this.$6;
							};
							a.prototype.hasPlayed = function() {
								return this.$7;
							};
							a.prototype.getVideoElement = function() {
								return this.$10;
							};
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
								var a = i(
										"_6qhu" +
											(this.$4 === "hide" ? " _6qhv" : "") +
											(this.$4 === "report" ? " _6qhw" : "")
									),
									b = i("_6qhx");
								b.innerText =
									this.$4 === "hide"
										? this.$2.finished_hide_ad
										: this.$2.finished_report_ad;
								var c = i("_6qhy");
								c.innerText = this.$2.finished_description;
								var d = i("_6qh7 _6qh8", [i("_6qhz")]);
								d.appendChild(document.createTextNode(this.$3.title));
								var e = document.createElement("img");
								e.className = "_6qh-";
								e.src = this.$1;
								var f = i("_6qh_");
								f.textContent = this.$2.manage_ad_preferences;
								var g = document.createElement("a");
								g.href = this.$2.manage_ad_preferences_uri;
								g.target = "_blank";
								g.className = "_6qi0";
								g.appendChild(i("_6qi1"));
								g.appendChild(f);
								f = i("_6qi2", [e, d]);
								e = document.createElement("a");
								e.className = "_6qi3";
								this.$6 != null && (e.href = this.$6);
								this.$6 == null &&
									e.addEventListener(
										"click",
										function(a) {
											this.$5();
										}.bind(this)
									);
								return i("_6qi4", [a, b, c, f, g, e]);
							};
							a.prototype.render = function() {
								var a = i("_6qhb _6qi5"),
									b = this.$7();
								a.appendChild(b);
								return a;
							};
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
											? undefined
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
						"ANXOutInitialStep",
						["VPAIDDomUtils", "cx", "joinClasses"],
						function(a, b, c, d, e, f, g, h, i) {
							"use strict";
							__p && __p();
							var j = g.div;
							function a(a, b, c, d) {
								(this.$3 = c), (this.$4 = d), (this.$1 = b), (this.$2 = a);
							}
							a.prototype.$5 = function(a, b, c, d, e) {
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
							a.prototype.render = function() {
								var a = this.$5(
										this.$2.hide_ad,
										"_6qgk",
										this.$2.hide_ad_description,
										function() {
											this.$3("hide");
										}.bind(this)
									),
									b = this.$5(
										this.$2.report_ad,
										"_6qgl",
										this.$2.report_ad_description,
										function() {
											this.$3("report");
										}.bind(this)
									),
									c = this.$5(
										this.$2.why_am_i_seeing_this,
										"_6qhp",
										null,
										function() {
											this.$3();
										}.bind(this),
										this.$1
									),
									d = document.createElement("a");
								d.className = "_6qi3";
								d.addEventListener(
									"click",
									function(a) {
										a.preventDefault(), this.$4();
									}.bind(this)
								);
								return j("_6qhb _6qhq", [a, b, c, d]);
							};
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
							function a(a, b, c) {
								(this.$3 = a), (this.$2 = b), (this.$1 = c);
							}
							a.prototype.$4 = function() {
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
							a.prototype.$5 = function() {
								__p && __p();
								var a =
									this.$2 === "hide"
										? this.$3.hide_ad_options
										: this.$3.report_ad_options;
								a = a.map(
									function(a) {
										var b = document.createElement("button");
										b.className = "_6qh7";
										b.textContent = a.title;
										b.addEventListener(
											"click",
											function() {
												b.classList.add("_6qh8"), this.$1(a);
											}.bind(this)
										);
										return b;
									}.bind(this)
								);
								a = i("_6qh9", a);
								return i("_6qha", [a]);
							};
							a.prototype.render = function() {
								var a = i("_6qhb _6qhc"),
									b = this.$4(),
									c = this.$5();
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
									(this.$13 = a.endURL);
							}
							a.prototype.$14 = function() {
								this.$3 == null &&
									((this.$3 = m("_6qhd")), this.$2.appendChild(this.$3));
								return l(this.$3);
							};
							a.prototype.$15 = function() {
								this.$3 != null &&
									(this.$2.removeChild(this.$3), (this.$3 = null));
							};
							a.prototype.$16 = function() {
								return m("_6qhe");
							};
							a.prototype.$17 = function(a) {
								var b = this.$14(),
									c = this.$16();
								this.$18();
								c.appendChild(a);
								b.appendChild(c);
							};
							a.prototype.$18 = function() {
								var a = this.$14();
								while (a.firstChild) a.removeChild(a.firstChild);
							};
							a.prototype.$19 = function() {
								var a = this.$14(),
									b = m("_6qhf");
								this.$18();
								b.innerText = this.$7.ad_removed;
								a.appendChild(b);
							};
							a.prototype.onInitialStepDone = function() {
								this.$12 != null && this.$20();
							};
							a.prototype.$20 = function() {
								var a = new i(
									this.$7,
									l(this.$12),
									function(a) {
										this.$21(a);
									}.bind(this)
								);
								this.$17(a.render());
							};
							a.prototype.$21 = function(a) {
								__p && __p();
								this.$10(a.option_type);
								if (a.option_type === this.$7.follow_up_report) {
									this.$12 = "report";
									this.$20();
									return;
								}
								this.$11();
								a = new g(
									this.$7,
									a,
									this.$5,
									l(this.$12),
									function() {
										this.$19();
									}.bind(this),
									this.$13
								);
								this.$17(a.render());
							};
							a.prototype.$22 = function() {
								var a = new h(
									this.$7,
									this.$6,
									function(a) {
										a === "hide" && this.$10(this.$7.dislike_option),
											a === "report" && this.$10(this.$7.follow_up_report),
											(this.$12 = a),
											this.onInitialStepDone();
									}.bind(this),
									function() {
										this.$9(), this.$15();
									}.bind(this)
								);
								this.$17(a.render());
							};
							a.prototype.getButton = function() {
								return l(this.$4);
							};
							a.prototype.getRoot = function() {
								return this.$2;
							};
							a.prototype.render = function() {
								__p && __p();
								this.$2 = m("_6qhh", []);
								if (this.$4 == null) {
									var a = document.createElement("a");
									a.href = "#";
									a.className = "_6qhg";
									this.$2.appendChild(a);
									this.$4 = a;
								}
								this.$4.addEventListener(
									"click",
									function(a) {
										a.preventDefault(), this.$22(), this.$8();
									}.bind(this)
								);
								this.$1.appendChild(this.$2);
							};
							e.exports = a;
						},
						null
					);
					__d(
						"ANXOutClientEvents",
						[],
						function(a, b, c, d, e, f) {
							"use strict";
							e.exports = {
								START: "ADNW_XOUT_START",
								CANCEL: "ADNW_XOUT_CANCEL",
								FINISH: "ADNW_XOUT_FINISH",
								SELECT_OPTION: "ADNW_XOUT_OPTION",
								HAS_INLINE_XOUT: "ADNW_HAS_INLINE_XOUT"
							};
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h;
							b = babelHelpers.inherits(a, g);
							h = b && b.prototype;
							function a(a, b) {
								h.constructor.call(this),
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
							h.unknownResult = function(a, b) {
								a === void 0 && (a = g.NONE);
								b === void 0 && (b = "");
								return new h({ vd: a, r: b });
							};
							function h(a) {
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
							h.prototype.appendResult = function(a) {
								this.$5 || (this.$5 = a.$5),
									this.$1 || (this.$1 = a.$1),
									(this.$4 = a.$4),
									(this.$3 = a.$3),
									(this.$6 = a.$6),
									(this.$7 = this.$7 || a.$7);
							};
							h.prototype.getData = function() {
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
							h.prototype.getAdRect = function() {
								return this.$1;
							};
							h.prototype.getError = function() {
								return this.$2;
							};
							h.prototype.getMaxAdArea = function() {
								return this.$7;
							};
							h.prototype.getIsContinuous = function() {
								return this.$6;
							};
							h.prototype.getViewableRect = function() {
								return this.$5;
							};
							h.prototype.getViewableRatio = function() {
								return this.$8(function(a) {
									return a.area();
								});
							};
							h.prototype.getViewableHeightRatio = function() {
								return this.$8(function(a) {
									return a.height;
								});
							};
							h.prototype.getViewableWidthRatio = function() {
								return this.$8(function(a) {
									return a.width;
								});
							};
							h.prototype.$8 = function(a) {
								var b = this.$1,
									c = this.$5;
								return (c && a(c) === 0) || (b && a(b) === 0)
									? 0
									: c && b
										? a(c) / a(b)
										: null;
							};
							h.prototype.getViewabilityDetection = function() {
								return this.$3;
							};
							h.prototype.getReason = function() {
								return this.$4;
							};
							h.prototype.isConclusive = function() {
								return typeof this.getViewableRatio() === "number";
							};
							e.exports = h;
						},
						null
					);
					__d(
						"AdQualityMeasurement.adquality",
						["AdQualityMeasurementResult.adquality"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							function a(a, b) {
								this.__parentWindow = b;
							}
							a.prototype.destroy = function() {};
							a.prototype.getMeasurement = function(a) {
								a(
									g.unknownResult(
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							function h(a, b, c, d) {
								(this.x = a || 0),
									(this.y = b || 0),
									(this.width = c || 0),
									(this.height = d || 0);
							}
							h.RectangleZero = function() {
								return new h(0, 0, 0, 0);
							};
							h.RectangleFromClientRect = function(a) {
								return new h(
									a.left || 0,
									a.top || 0,
									a.width || a.right - a.left || 0,
									a.height || a.bottom - a.top || 0
								);
							};
							h.ClientRectFromRectangle = function(a) {
								return {
									width: a.width,
									height: a.height,
									left: a.x,
									top: a.y,
									right: a.x + a.width,
									bottom: a.y + a.height
								};
							};
							h.RectangleFromWindow = function(a) {
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
									return new h(0, 0, d, a);
								} catch (a) {
									return null;
								}
							};
							h.RectangleFromViewport = function(a) {
								var b = g.getBrowserBarOffset(a);
								return new h(
									a.screenX,
									a.screenY + b,
									a.outerWidth,
									a.outerHeight - b
								);
							};
							h.prototype.area = function() {
								return this.width * this.height;
							};
							h.prototype.getData = function() {
								return {
									x: this.x,
									y: this.y,
									width: this.width,
									height: this.height
								};
							};
							h.prototype.intersection = function(a) {
								var b = Math.max(this.x, a.x),
									c = Math.max(this.y, a.y),
									d = Math.min(this.x + this.width, a.x + a.width);
								a = Math.min(this.y + this.height, a.y + a.height);
								return d >= b && a >= c ? new h(b, c, d - b, a - c) : null;
							};
							h.prototype.offset = function(a, b) {
								return new h(this.x + a, this.y + b, this.width, this.height);
							};
							e.exports = h;
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
							var m,
								n = i.getBrowserBarOffset;
							b = babelHelpers.inherits(a, g);
							m = b && b.prototype;
							function a(a, b) {
								m.constructor.call(this, a, b),
									(this.$AMPMeasurement5 = ES(
										function(a) {
											a = a[a.length - 1];
											var b = a.boundingClientRect;
											a = a.intersectionRect;
											this.$AMPMeasurement1 = l.RectangleFromClientRect(b);
											this.$AMPMeasurement4 = l
												.RectangleFromClientRect(a)
												.offset(
													this.__parentWindow.screenX,
													this.__parentWindow.screenY + n(this.__parentWindow)
												);
											this.$AMPMeasurement4 =
												(this.$AMPMeasurement2 &&
													this.$AMPMeasurement2.hidden) ||
												!this.$AMPMeasurement4
													? l.RectangleZero()
													: this.$AMPMeasurement4;
										},
										"bind",
										!0,
										this
									)),
									(this.$AMPMeasurement1 = null),
									(this.$AMPMeasurement2 = null),
									(this.__viewabilityDetection = j.AMP),
									(this.$AMPMeasurement3 = null),
									(this.$AMPMeasurement4 = null),
									k.genAMPContext().then(
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
								return k.isAMP();
							};
							a.prototype.getMeasurement = function(a) {
								a(
									new h({
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
						function(a, b, c, d, e, f, g) {
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
								this.$2(0, g.unknownResult(), a);
							};
							a.prototype.$2 = function(a, b, c) {
								b.appendResult(g.unknownResult());
								if (a < this.$1.length) {
									var d = this.$1[a];
									!d.isAvailable(this.$1)
										? this.$2(a + 1, b, c)
										: d.getMeasurement(
												ES(
													function(d) {
														b.appendResult(d),
															b.isConclusive()
																? this.$3(b, c)
																: this.$2(a + 1, b, c);
													},
													"bind",
													!0,
													this
												)
										  );
								} else this.$3(b, c);
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							function a() {
								this.$1 = { h: 0, u: 0, v: 0 };
							}
							a.prototype.destroy = function() {
								this.$1 = { h: 0, u: 0, v: 0 };
							};
							a.prototype.getMaxAdAreaForScreenOrientation = function(a) {
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
						function(a, b, c, d, e, f, g, h) {
							"use strict";
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
								(this.$15 === null || this.$15 === undefined || this.$15 > c) &&
									(this.$15 = c);
								(this.$12 === null || this.$12 === undefined || this.$12 < c) &&
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
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							var k = 0.5;
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
							a.prototype.getStatistics = function() {
								return this.$6.getData();
							};
							a.prototype.getViewableRatio = function(a, b) {
								this.$3.getMeasurement(
									ES(
										function(c) {
											var d = c.getAdRect();
											b(
												new h({
													ar: d,
													e: c.getError(),
													vd: c.getViewabilityDetection(),
													r: a ? "fullscreen" : c.getReason(),
													vr: a ? d : c.getViewableRect(),
													maa: this.$4.getMaxAdAreaForScreenOrientation(c)
												})
											);
										},
										"bind",
										!0,
										this
									)
								);
							};
							a.prototype.registerProgress = function(a, b) {
								__p && __p();
								if (!this.$1) {
									b && b(this.getStatistics());
									return;
								}
								this.$3.getMeasurement(
									ES(
										function(c) {
											if (this.$1) {
												var d = c.getAdRect();
												d = new h({
													ar: d,
													e: c.getError(),
													vd: c.getViewabilityDetection(),
													r: a.isFullScreen ? "fullscreen" : c.getReason(),
													vr: a.isFullScreen ? d : c.getViewableRect(),
													cont: a.isContinuous,
													maa: this.$4.getMaxAdAreaForScreenOrientation(c)
												});
												this.$9(
													d,
													parseFloat(a.loggingTimeInterval),
													this.getStatistics(),
													a,
													a.volume,
													a.playbackRate
												);
												b && b(this.getStatistics());
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
							a = Object.freeze({
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
							function p(a, b) {
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
										(this.offsetHeight = a.offsetHeight),
											(this.offsetWidth = a.offsetWidth);
									} catch (a) {}
									var c = a.ownerDocument;
									this.parentWindow =
										b || a.ownerDocument.defaultView || c.parentWindow;
									if (this.parentWindow) {
										b = a;
										c = this.parentWindow;
										while (c && this.windowCount < 100) {
											this.windowCount++;
											a = null;
											var d = null;
											try {
												(d = c.document.referrer),
													(a = c.location.href || c.document.location.href),
													(this.topWindow = c),
													(this.topWindowLevel = this.windowCount);
											} catch (a) {
												this.crossDomainWindowCount++;
											}
											this.ancestorURLs.push(a || d || "");
											var e = null;
											try {
												b &&
													p.isElementVisible(b) === !1 &&
													(this.transparent = !0);
											} catch (a) {}
											var f = null;
											if (
												b &&
												b.getBoundingClientRect &&
												this.crossDomainWindowCount === 0
											)
												try {
													f = b.getBoundingClientRect();
												} catch (a) {}
											f &&
												this.crossDomainWindowCount === 0 &&
												(!this.offsetRect
													? (this.offsetRect = h.RectangleFromClientRect(f))
													: (this.offsetRect = this.offsetRect.offset(
															f.left,
															f.top
													  )));
											if (!this.parentWindow || !this.parentWindow.top)
												c = null;
											else if (c === this.parentWindow.top)
												a &&
													((this.pageURL = a),
													(this.pageDomain = g.extractDomain(a)),
													(this.domainDetectionMethod = j),
													(this.focus = e)),
													this.windowCount > 1
														? a
															? (this.type = n)
															: (this.type = o)
														: (this.type = m),
													this.type !== o &&
														((this.viewportRect = h.RectangleFromWindow(c)),
														this.transparent === null &&
															(this.transparent = !1)),
													(c = null);
											else {
												d &&
													c.parent === this.parentWindow.top &&
													((this.pageURL = d),
													(this.pageDomain = g.extractDomain(d)),
													(this.domainDetectionMethod = k));
												b = null;
												try {
													(b = c.frameElement),
														b && this.ancestorIframes.push(b);
												} catch (a) {}
												c = c.parent;
											}
										}
										if (!this.pageURL) {
											f = window.location.ancestorOrigins;
											f &&
												f.length > 0 &&
												((this.pageDomain = g.extractDomain(f[f.length - 1])),
												(this.domainDetectionMethod = l));
										}
									}
								} catch (a) {
									this.error = a;
								}
							}
							p.prototype.getData = function() {
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
							p.prototype.isSafeframe = function() {
								return !!this.getSafeFrameAPI();
							};
							p.prototype.getSafeFrameAPI = function() {
								return this.$1(function(a) {
									return a.$sf && a.$sf.ext;
								});
							};
							p.prototype.getMRAIDAPI = function() {
								return this.$1(function(a) {
									return a.mraid;
								});
							};
							p.prototype.$1 = function(a) {
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
							p.prototype.getNestLevel = function() {
								return this.ancestorURLs.length - 1;
							};
							p.prototype.getTopURL = function() {
								return this.ancestorURLs[this.ancestorURLs.length - 1];
							};
							p.prototype.isCrossDomain = function() {
								return this.crossDomainWindowCount > 0;
							};
							p.prototype.getOverlayedArea = function(a) {
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
							p.isElementVisible = function(a) {
								if (!a.style) return !0;
								if (a.style.opacity && a.style.opacity < "0.9") return !1;
								if (a.style.visibility && a.style.visibility === "hidden")
									return !1;
								return a.parentElement
									? this.isElementVisible(a.parentElement)
									: !0;
							};
							e.exports = p;
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
							var m;
							b = babelHelpers.inherits(a, g);
							m = b && b.prototype;
							function a(a, b) {
								m.constructor.call(this, a, b);
								this.$GeometricMeasurement1 = a;
								b = new j(a, b);
								this.$GeometricMeasurement2 = !!(
									b.viewportRect && b.offsetRect
								);
								this.__viewabilityDetection = i.GEOMETRIC;
								this.$GeometricMeasurement3 = new k(a.ownerDocument);
							}
							a.prototype.isAvailable = function() {
								return this.$GeometricMeasurement2;
							};
							a.prototype.getMeasurement = function(a) {
								__p && __p();
								var b = new j(this.$GeometricMeasurement1, this.__parentWindow),
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
						function(a, b, c, d, e, f, g, h, i, j, k, l) {
							"use strict";
							__p && __p();
							var m;
							b = babelHelpers.inherits(a, g);
							m = b && b.prototype;
							function a(a, b) {
								m.constructor.call(this, a, b),
									(this.$SafeframeMeasurement1 = new j(a, b).getSafeFrameAPI()),
									(this.__viewabilityDetection = i.SAFEFRAME);
							}
							a.prototype.isAvailable = function() {
								return !!this.$SafeframeMeasurement1;
							};
							a.prototype.getMeasurement = function(a) {
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
							"SafeframeMeasurement.adquality"
						],
						function(a, b, c, d, e, f, g, h, i, j, k) {
							"use strict";
							__p && __p();
							var l = 100;
							function a(a, b) {
								this.$4 = [];
								this.$5 = [];
								this.$6 = [];
								this.$7 = [];
								this.$10 = !1;
								this.$11 = !1;
								this.$3 = null;
								a = b.ownerDocument.defaultView;
								this.$2 = new g({
									element: b,
									parentWindow: a,
									rules: [],
									measurementTests: [new j(b, a), new k(b, a), new i(b, a)]
								});
							}
							a.prototype.pause = function() {
								this.$1 = !0;
							};
							a.prototype.resume = function() {
								this.$1 = !1;
							};
							a.prototype.addViewableCallback = function(a) {
								this.$4.push(a), this.$12();
							};
							a.prototype.$13 = function() {
								__p && __p();
								if (this.$10) return;
								this.$10 = !0;
								this.$11 = !1;
								var a = this.getDimensions(),
									b = this.getCurrentViewabilityState();
								this.$4.forEach(function(c) {
									c(a, b);
								});
								this.$4 = [];
								this.$5.forEach(function(c) {
									c(a, b);
								});
							};
							a.prototype.$14 = function() {
								__p && __p();
								if (this.$11) return;
								this.$10 = !1;
								this.$11 = !0;
								var a = this.getDimensions(),
									b = this.getCurrentViewabilityState();
								this.$4.forEach(function(c) {
									c(a, b);
								});
								this.$4 = [];
								this.$6.forEach(function(c) {
									c(a, b);
								});
							};
							a.prototype.$15 = function() {
								if (!this.$10 && !this.$11) return;
								this.$10 = !1;
								this.$11 = !1;
								var a = this.getDimensions(),
									b = this.getCurrentViewabilityState();
								this.$7.forEach(function(c) {
									c(a, b);
								});
							};
							a.prototype.addFullyViewableAlwaysCallback = function(a) {
								this.$6.push(a), this.$12();
							};
							a.prototype.addNonViewableAlwaysCallback = function(a) {
								this.$7.push(a), this.$12();
							};
							a.prototype.addPartiallyViewableAlwaysCallback = function(a) {
								this.$5.push(a), this.$12();
							};
							a.prototype.getDimensions = function() {
								return !this.$8 ? null : this.$8.getAdRect();
							};
							a.prototype.attachBehaviorManager = function(a) {
								(this.$3 = a), this.$12();
							};
							a.prototype.$12 = function() {
								__p && __p();
								if (this.$9 !== undefined) return;
								this.$9 = window.setInterval(
									function() {
										if (this.$1) return;
										this.$2.getViewableRatio(
											!1,
											function(a) {
												this.$8 = a;
												var b = this.getCurrentViewabilityState()
													.viewabilityLevels;
												b.indexOf(h.FULLY_VISIBLE) >= 0
													? this.$14()
													: b.indexOf(h.PARTIALLY_VISIBLE) >= 0
														? this.$13()
														: this.$15();
												b = a.getViewableWidthRatio();
												a = a.getViewableHeightRatio();
												this.$3 != null &&
													b != null &&
													a != null &&
													this.$3.updateView(b, a);
											}.bind(this)
										);
									}.bind(this),
									l
								);
							};
							a.prototype.getCurrentViewabilityState = function() {
								__p && __p();
								if (!this.$8) return { viewabilityLevels: [h.UNKNOWN] };
								var a = this.$8,
									b = a.getViewableRatio(),
									c = a.getViewableWidthRatio();
								a = a.getViewableHeightRatio();
								if (b == null || c == null || a == null)
									return { viewabilityLevels: [h.UNKNOWN] };
								if (b <= 0)
									return { viewabilityLevels: [h.OFFSCREEN_INFINITY] };
								if (c <= 0.99)
									return { viewabilityLevels: [h.OFFSCREEN_HORIZONTAL] };
								b >= 1 ? (b = [h.FULLY_VISIBLE]) : (b = [h.PARTIALLY_VISIBLE]);
								return {
									viewabilityLevels: b,
									widthInView: c,
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
							e.exports = Object.freeze({
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
							function a(a) {
								__p && __p();
								(this.$2 = function() {
									__p && __p();
									if (this.$1.getNestLevel() === 0) return h.NONE;
									for (
										var a = this.$1.ancestorIframes,
											b = Array.isArray(a),
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
										if (d.src) {
											d = i.extractDomain(d.src);
											if (d === this.$1.pageDomain) return h.NONE;
										}
									}
									return null;
								}.bind(this)),
									(this.$4 = function() {
										var a = this.$1.ancestorURLs;
										if (a.length > 0 && this.$1.getSafeFrameAPI()) {
											a = i.extractDomain(a[0]);
											if (window.googletag && a === "tpc.googlesyndication.com")
												return h.GOOGLE_SAFE_FRAME;
											else return h.UNKNOWN_SAFE_FRAME;
										}
										return null;
									}.bind(this)),
									(this.$5 = function() {
										var a = this.$1.ancestorIframes;
										return a.length > 0 &&
											a[0].id.indexOf("google_ads_iframe_") === 0
											? h.GOOGLE_FRIENDLY_IFRAME
											: null;
									}.bind(this)),
									(this.$8 = function() {
										var a = this.$1.ancestorIframes;
										return a.length > 0 &&
											(a[0].classList.contains("str-fan-iframe") ||
												j(a[0].parentElement).id === "str-fan-placeholder")
											? h.SHARETHROUGH
											: null;
									}.bind(this)),
									(this.$9 = function() {
										var a = this.$1.ancestorIframes;
										return a.length > 0 &&
											a[0].classList.contains("fiSafeFrame") &&
											window.parent.fiQuery
											? h.FIRSTIMPRESSION_IO
											: null;
									}.bind(this)),
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
								for (var b = 0; b < a.length; b++) {
									var c = a[b];
									try {
										c = c();
										if (c) return c;
									} catch (a) {}
								}
								return h.UNKNOWN;
							};
							a.prototype.$6 = function() {
								return window.sas &&
									document.querySelector(
										'script[src*="www.smartadserver.com/"]'
									)
									? window.sas_ajax
										? h.SMART_ADSERVER_ASYNC
										: h.SMART_ADSERVER_SYNC
									: null;
							};
							a.prototype.$7 = function() {
								if (window.ADNXSMediation && window.ADNXSMediation.adFilled)
									if (window.ADNXSAsync || window.ADNXSMediation.isAsync())
										return h.APPNEXUS_ASYNC;
									else return h.APPNEXUS;
								return null;
							};
							a.prototype.$3 = function() {
								return g.isAMP() ? h.AMP : null;
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
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h = Object.freeze({
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
							function a(a) {
								a === void 0 && (a = g.MOBILE_FEED),
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
								var b = i(this.$1),
									c = i(a);
								for (
									var d = this.$2,
										e = Array.isArray(d),
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
							a.prototype.addBehavior = function(a) {
								this.$2.push(a), k(a, i("off-screen"), i(this.$1));
							};
							e.exports = a;
						},
						null
					);
					__d(
						"PlayVideoWhenOnScreenBehavior.anweb",
						["OnScreenBehavior.anweb"],
						function(a, b, c, d, e, f, g) {
							"use strict";
							__p && __p();
							var h;
							b = babelHelpers.inherits(a, g);
							h = b && b.prototype;
							function a(a, b) {
								h.constructor.call(this),
									(this.$PlayVideoWhenOnScreenBehavior1 = a),
									(this.$PlayVideoWhenOnScreenBehavior2 = b);
							}
							a.prototype.onCompletelyEntered = function() {
								this.$PlayVideoWhenOnScreenBehavior2 &&
									!this.$PlayVideoWhenOnScreenBehavior1.wasManuallyPaused() &&
									this.$PlayVideoWhenOnScreenBehavior1.play();
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
							a.prototype.run = function(a, b, c, d) {
								__p && __p();
								try {
									var e = window.document.createElement("iframe");
									e.id = "fbsbx-sig-iframe-" + a;
									e.style.height = "100%";
									e.style.width = "100%";
									e.sandbox = "allow-scripts allow-same-origin";
									e.style.opacity = "0";
									e.style.position = "absolute";
									e.style.zIndex = "-9999999";
									e.src =
										"https://s.update.fbsbx.com/2/843748/analytics.html?ti=" +
										a +
										"&di=" +
										c +
										"&bt=" +
										b +
										"&dt=8437481520966594402012&sn=IMPRESSION";
									d.appendChild(e);
								} catch (a) {}
							};
							function a() {}
							e.exports = a;
						},
						null
					);
					__d(
						"ANCore",
						[
							"AdImpressionBehavior.anweb",
							"AdQualityViewabilityMonitor",
							"AdViewability",
							"AMPContextLoader",
							"ANAdChoices",
							"ANBounceBackManager",
							"ANCarousel",
							"ANEventCounter",
							"ANFullWidthLoader",
							"ANLinkOpener",
							"ANLogger",
							"ANRewardedVideoPlayer",
							"ANRewardsManager",
							"ANUtils",
							"ANWebTwoStepClickDialog",
							"ANWebVideoLogger.anweb",
							"ANWebVideoPlayer.anweb",
							"ANXOut",
							"ANXOutClientEvents",
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
							I
						) {
							"use strict";
							__p && __p();
							var J = {
									"300x250": [300, 250],
									"320x50": [320, 50],
									"300x600": [300, 600],
									"970x250": [970, 250],
									"728x90": [728, 90],
									fullwidth: [300, 250]
								},
								K = {
									BILLABLE: 0,
									FAST_CLICK_GUARD: 10,
									TWO_STEP_OPEN_DIALOG: 11,
									TWO_STEP_CANCEL: 12
								};
							function a(a) {
								__p && __p();
								this.sendSignal = function(a) {
									this.sendToFacebook("signal", { signalUrl: a });
								}.bind(this);
								this.$28 = new s(a.onRewardCompleted, a.onAdClosed);
								this.$4 = !1;
								this.$22 = !1;
								this.$5 = a;
								this.$23 = new n();
								this.$14 = !1;
								this.$15 = !1;
								this.$26 = !1;
								this.$3 = !1;
								this.$10 = a.displayFormat || a.format || "300x250";
								this.tagJsIframeAppendedTime = a.tagJsIframeAppendedTime;
								var b = t.getTopMostAccessibleWindow();
								b =
									(b.performance &&
										b.performance.timing &&
										b.performance.timing.navigationStart) ||
									0;
								this.$24 = new q(B.ERROR, a.tagJsInitTime, b, this.sendSignal);
								this.$11 = a.rootElement;
								this.$12 = new z(this.$11, this.$29());
								this.$2 = null;
								this.$4 = !1;
								window.addEventListener(
									"pagehide",
									function() {
										this.$4 || this.$24.event("ADNW_UNLOAD_BEFORE_ADLOADED");
									}.bind(this)
								);
								this.$21 = new D();
								this.$25 = new p(this.$11);
							}
							a.prototype.sendToFacebook = function(a, b) {
								(b = b || {}),
									(b.key = this.$5.data.key),
									this.$5.iframe.contentWindow.postMessage(
										{ name: a, params: b },
										this.$5.domain
									);
							};
							a.prototype.$29 = function() {
								return this.$11.ownerDocument.defaultView;
							};
							a.prototype.$30 = function() {
								return this.$29().frameElement;
							};
							a.prototype.$31 = function(a) {
								a = a.ownerDocument;
								var b = a.createElement("style");
								b.innerText = A.rules;
								a.body && a.body.appendChild(b);
							};
							a.prototype.$32 = function() {
								return I(this.$27);
							};
							a.prototype.$33 = function() {
								if (!this.$32().$34) return !1;
								var a = this.$35();
								return a.clientWidth >= 300 && a.clientHeight >= 250;
							};
							a.prototype.$36 = function(a) {
								__p && __p();
								var b = this.$35();
								if (!this.$33()) {
									var c = new k(b, a);
									c.render();
									return;
								}
								var d = "inline-condensed";
								c = new x({
									parentEl: b,
									adIcon: a.adIcon,
									adChoicesLink: a.adChoicesHref,
									content: this.$32().$37,
									onXOutStart: function() {
										this.$24.event(y.START, d);
									}.bind(this),
									onXOutCancel: function() {
										this.$24.event(y.CANCEL, d);
									}.bind(this),
									onXOutOption: function(a) {
										this.sendToFacebook("xout", { reason: a, type: d }),
											this.$24.event(y.SELECT_OPTION, a);
									}.bind(this),
									onXOutFinish: function() {
										this.$24.event(y.FINISH);
									}.bind(this)
								});
								c.render();
								return;
							};
							a.prototype.adLoaded = function(a, b, c, d) {
								__p && __p();
								if (this.$4) {
									this.$24.error("Multiple ADLOADED attempted.");
									return;
								}
								var e = a.features || {};
								this.$27 = {
									$38: !!e.clickOpenNewTab,
									$39: !!e.enableWhiteops,
									$40: e,
									$34: e.inlineXOut,
									$13: e.isDesktopDisplayFormat,
									$41: a.nativeImpURL,
									$37: a.xout,
									$42: e.clickGuardElements || [
										"fbAdTitle",
										"fbAdBody",
										"fbAdSubtitle",
										"fbAdIcon",
										"fbAdMedia",
										"UNKNOWN"
									],
									$43: a.unifiedLoggingURL
								};
								this.$24.setLogLevel(this.$32().$40.logLevel || B.ERROR);
								this.$24.setClientEventURL(a.clientEventURL);
								this.$1 = H();
								this.$4 = !0;
								if (!a.success) {
									this.$24.error();
									d(a.errorCode, a.errorMsg, a.placementId);
									return;
								}
								this.$32().$40.rp && this.$28.enable();
								var f = 0,
									g = !!a.creativeMarkupBackup;
								!a.nativeAd
									? (this.$11.style.display = "")
									: (a.creativeMarkup &&
											(this.$44() ? this.$45() : this.$46(),
											this.$32().$40.resizeMediaView &&
												((this.$11.style.visibility = "hidden"),
												(f = this.$47()))),
									  this.loadCreative(
											a,
											a.creativeMarkup,
											this.$11,
											b,
											!!this.$32().$40.resizeMediaView
									  ));
								this.$35().classList.add("fbAdLoaded");
								c(a.placementId);
								this.$32().$40.resizeMediaView
									? window.setTimeout(
											function() {
												__p && __p();
												var c = new o(
														g,
														this.$30(),
														this.$11,
														this.$9,
														this.$16,
														this.$24,
														f
													),
													d = this.$35();
												d.style.width = t.cssSize(this.$16);
												this.$6 && this.$6.ensureSizes();
												d = c.resize(this.$16, d.offsetHeight);
												d &&
													((this.$14 = !0), (this.$15 = !!a.nativeCarouselAds));
												this.$36(a.nativeAd);
												if (g) {
													var e = function() {
														(a.nativeCarouselAds = null),
															c.restoreOriginalStyles(),
															this.$48(
																a,
																a.creativeMarkupBackup,
																b,
																!!this.$32().$40.resizeMediaView
															),
															(this.$14 = !1),
															(this.$15 = !1),
															this.$36(a.nativeAd),
															(this.$11.style.visibility = "visible");
													}.bind(this);
													if (!d) e();
													else {
														d = function a() {
															t.screenIsPortrait() ||
																(window.removeEventListener(
																	"orientationchange",
																	a
																),
																e());
														};
														window.addEventListener("orientationchange", d);
													}
												}
											}.bind(this),
											0
									  )
									: this.$36(a.nativeAd);
								this.setupViewability();
								this.$24.eventWithParams("ADNW_ADLOADED", this.$49());
								this.$50();
								this.$51();
							};
							a.prototype.$49 = function() {
								var a = this.$19;
								if (!a) return { viewability: i.UNKNOWN };
								a = this.$19.getCurrentViewabilityState();
								return {
									viewability: a.viewabilityLevels.join(","),
									width_in_view: a.widthInView || 0,
									height_in_view: a.heightInView || 0,
									left: a.pageLeft || 0,
									top: a.pageTop || 0,
									scroll_left: a.scrollLeft || 0,
									scroll_top: a.scrollTop || 0,
									page_width: a.pageWidth || 0,
									page_height: a.pageHeight || 0
								};
							};
							a.prototype.$51 = function() {
								var a = this.$32().$40.forceIframeSize;
								if (a) {
									var b = this.$30();
									b &&
										((b.style.width = t.cssSize(a.w)),
										(b.style.height = t.cssSize(a.h)));
								}
							};
							a.prototype.$50 = function() {
								var a = this.$35().querySelectorAll(
									"[data-auto-fit-text=true]"
								);
								for (var b = 0; b < a.length; b++)
									t.truncateTextToFitElement(a[b]);
							};
							a.prototype.$47 = function() {
								var a = 300,
									b = t.getScreenWidth(),
									c = this.$30() || this.$11;
								c = t.findWidestParentElement(c);
								var d = t.calculateLargestMargin(c);
								this.$16 = b - d * 2;
								this.$16 < a &&
									((this.$16 = a), (d = c.getBoundingClientRect().right - a));
								return d;
							};
							a.prototype.$45 = function() {
								__p && __p();
								var a = J[this.$10],
									b = a[0];
								a = a[1];
								var c = document.createElement("iframe");
								c.classList.add("fbAdWrapper");
								c.style.border = "0";
								c.style.width = t.cssSize(b);
								c.style.height = t.cssSize(a);
								this.$11.appendChild(c);
								b = I(c.contentDocument.body);
								b.style.overflow = "hidden";
								b.style.margin = "0";
								b.style.padding = "0";
								b.style.maxWidth = t.getScreenWidth() + "px";
								this.$8 = b;
								this.$9 = c;
							};
							a.prototype.$46 = function() {
								__p && __p();
								var a = document.createElement("div");
								a.style.textAlign = "center";
								a.style.position = "relative";
								this.$11.appendChild(a);
								this.$9 = a;
								var b = document.createElement("div");
								b.style.maxWidth = t.cssSize(t.getScreenWidth());
								b.style.width = "100%";
								b.style.position = "relative";
								b.style.display = "inline-block";
								a.appendChild(b);
								this.$8 = b;
							};
							a.prototype.$35 = function() {
								var a = this.$44() ? this.$8 || this.$11 : this.$11;
								return (
									a.getElementsByClassName("fbANRoot")[0] ||
									a.getElementsByClassName("thirdPartyRoot")[0] ||
									a
								);
							};
							a.prototype.loadCreative = function(a, b, c, d, e) {
								(a.nativeAd.loaded = !1),
									b && b.raw && ((this.$8.innerHTML = b.raw), (c = this.$8)),
									c && ((c = this.$35()), this.$31(c)),
									(this.$20 = a.nativeAd && c ? c : d),
									(this.$18 = this.loadNativeAd(
										c,
										a.nativeAd,
										a.nativeCarouselAds,
										e,
										b && b.dfp,
										!!this.$32().$40.autoplayEnabled
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
							a.prototype.adjustMediaViewSize = function(a, b) {
								a = this.getAspectRatio(a);
								t.resizeElement(b, this.$16, Math.round(this.$16 / a));
							};
							a.prototype.sendImpression = function() {
								__p && __p();
								if (this.$2) {
									this.$24.error("Multiple ADIMPRESSION attempted.");
									return;
								}
								this.$2 = H();
								var a = this.$27 && this.$27.$43,
									b = this.$52();
								this.sendToFacebook("impress", {
									unifiedLoggingURL: a,
									payload: b
								});
								var c = this.$32().$41;
								!a &&
									c &&
									this.sendToFacebook("signal", {
										signalUrl: F.appendToUrl(
											c,
											Object.assign({}, b, {
												iframe_urls: JSON.stringify(b.iframe_urls)
											})
										)
									});
								this.$24.eventWithParams("ADNW_ADIMPRESSION", this.$49());
								this.$33() && this.$24.event(y.HAS_INLINE_XOUT);
							};
							a.prototype.$53 = function() {
								var a = this.$12.getSafeFrameAPI();
								if (this.$12.isCrossDomain() && !a)
									return j.isAMP() ? "AMP" : "CROSS_DOMAIN_IFRAME";
								var b = this.$12.getNestLevel();
								if (b === 0) return "NO_IFRAME";
								return b > 1
									? a
										? "NESTED_SAFE_FRAME"
										: "NESTED_FRIENDLY_IFRAME"
									: a
										? "SAFE_FRAME"
										: "FRIENDLY_IFRAME";
							};
							a.prototype.setupViewability = function() {
								this.$19 = new h(this.$12, this.$20);
								this.$19.attachBehaviorManager(this.$21);
								var a = new g(
									function() {
										return this.$54();
									}.bind(this),
									function() {
										return this.$24.event("ADNW_PARTIAL_ADIMPRESSION");
									}.bind(this)
								);
								this.$22 || a.mediaLoaded();
								this.$21.addBehavior(a);
								this.$23.addListener(function() {
									return a.mediaLoaded();
								});
							};
							a.prototype.getAspectRatio = function(a) {
								if (a.adImageAspectRatio != null && a.adImageAspectRatio > 0)
									return Math.max(a.adImageAspectRatio, 1.5);
								else if (a.adVideo) return 1.75;
								else return 1.9;
							};
							a.prototype.loadMedia = function(a, b, c, d, e) {
								d
									? this.loadCarousel(b, d)
									: c.adVideo
										? this.loadVideo(b, c, e)
										: this.loadImage(b, c);
							};
							a.prototype.loadCarousel = function(a, b) {
								__p && __p();
								this.$22 = !0;
								var c = new m({
									parent: a,
									ads: b,
									onCriticalAnimationStart: function() {
										this.$19.pause();
									}.bind(this),
									onCriticalAnimationEnd: function() {
										this.$19.resume();
									}.bind(this),
									onEvent: function(a, b) {
										switch (a) {
											case "AN_CAROUSEL_EVENT_SWIPE":
												this.$24.eventWithParams("CAROUSEL_SWIPE", b);
										}
									}.bind(this),
									onLoadEventCounter: this.$23
								});
								a.appendChild(c.getElement());
								c.ensureSizes();
								c.getLinks().forEach(
									function(a, c) {
										this.installLink(a, b[c]);
									}.bind(this)
								);
								this.$6 = c;
							};
							a.prototype.loadImage = function(a, b) {
								a.appendChild(this.createAdImage(b));
							};
							a.prototype.loadVideo = function(a, b, c) {
								__p && __p();
								if (!b.adVideo) throw new Error("No video for Ad.");
								this.$22 = !0;
								this.$23.addRequiredEvent();
								var d = new w(
									I(b.adVideo),
									b.adImage,
									this.$32().$40.videoBlendedBackground,
									function() {
										this.$23.requiredEventFired();
									}.bind(this),
									function() {
										return this.$24.event("PLAY_FAILED");
									}.bind(this),
									function() {
										return this.$24.event("VIDEO_CLICK");
									}.bind(this)
								);
								this.$55() && this.$28.isEnabled()
									? (new r(this.$28, this.$11, d).makeRewarded(),
									  this.$8 && (this.$8.style.maxWidth = ""))
									: this.$21.addBehavior(new E(d, c));
								new v(
									d.getVideoElement(),
									this.sendSignal,
									b.videoPlayLink,
									b.videoTimeLink
								).startLogging();
								a.appendChild(d.getElement());
							};
							a.prototype.installLink = function(a, b) {
								__p && __p();
								var c = function(a, c, d) {
										__p && __p();
										var e = H(),
											f = b.href,
											g = {};
										if (this.$19) {
											var h = this.$19.getDimensions(),
												i = this.$19.getCurrentViewabilityState();
											h != null &&
												((g.height = h.height),
												(g.width = h.width),
												i.widthInView != null &&
													i.heightInView != null &&
													((g.visibleWidth = Math.round(
														i.widthInView * h.width
													)),
													(g.visibleHeight = Math.round(
														i.heightInView * h.height
													))));
											this.$12.getSafeFrameAPI()
												? ((g.relClickX = d.clientX), (g.relClickY = d.clientY))
												: ((g.clickX = d.clientX),
												  (g.clickY = d.clientY),
												  i.viewportLeft != null &&
														i.viewportTop != null &&
														((g.relClickX = d.clientX - i.viewportLeft),
														(g.relClickY = d.clientY - i.viewportTop)));
										}
										h = {
											clktm: Math.round(e / 1e3),
											clknutab: this.$32().$38,
											touch: JSON.stringify(g)
										};
										this.$2 && (h.clkdel = e - this.$2);
										g.height &&
											g.width &&
											g.visibleWidth &&
											g.visibleHeight &&
											(h.vp =
												(g.visibleWidth * g.visibleHeight) /
												(g.height * g.width));
										this.sendToFacebook("click", {
											href: f,
											clickParams: h,
											adElementType: c,
											action: a
										});
										d = t.isAppStoreURL(f);
										this.$32().$38 &&
											f &&
											!d &&
											a === K.BILLABLE &&
											this.$25.openNewTab(f);
										if (this.$32().$38 || d) {
											i = new l(window.document);
											var j = H();
											i.onBounceBack(
												function(a) {
													this.sendToFacebook("bounce", {
														leaveTime: j,
														backTime: H()
													}),
														this.$24.event("ADNW_BOUNCEBACK", "" + a);
												}.bind(this)
											);
										}
									}.bind(this),
									d = function() {
										u.openDialog(this.$35(), b.adSubtitle, b.adIcon)
											.onConfirm(
												function(event) {
													(this.$26 = !0), c(K.BILLABLE, "UNKNOWN", event);
												}.bind(this)
											)
											.onDismiss(
												function(event) {
													(this.$26 = !1),
														c(K.TWO_STEP_CANCEL, "UNKNOWN", event);
												}.bind(this)
											);
									}.bind(this),
									e = function(a) {
										var b = H(),
											e = t.maybeHTMLElement(a.target);
										e = e ? this.$56(e) : "UNKNOWN";
										var f = this.$32().$40.minClickDelay;
										f && this.$1 && this.$1 + f > b && !this.$3
											? ((this.$3 = !0),
											  c(K.FAST_CLICK_GUARD, e, a),
											  this.$14 &&
													this.$32().$40.useTwoStepOnFastClicks === !0 &&
													d())
											: this.$32().$42.includes(e) &&
											  this.$14 &&
											  !this.$15 &&
											  this.$32().$40.useTwoStepClick === !0 &&
											  !this.$26
												? (c(K.TWO_STEP_OPEN_DIALOG, e, a), d())
												: c(K.BILLABLE, e, a);
										a.preventDefault();
										a.stopPropagation();
									}.bind(this);
								if (!this.$8) {
									a.addEventListener("click", e);
									return;
								}
								var f = this.$8.querySelector(".adnwTwoClickBlocker");
								if (f && !!this.$32().$40.clickConfirmation) {
									var g = I(f.querySelector(".adnwCancelLink"));
									g.addEventListener("click", function(event) {
										f.style.display = "none";
									});
									g = I(f.querySelector(".adnwContinueLink"));
									g.addEventListener("click", function(event) {
										(f.style.display = "none"), e(event);
									});
									a.addEventListener("click", function(event) {
										f.style.display = "block";
									});
								} else a.addEventListener("click", e);
							};
							a.prototype.applyAdTypeClass = function(a, b, c) {
								c
									? (a.className += " fbCarouselType")
									: b.adVideo
										? (a.className += " fbVideoType")
										: (a.className += " fbDisplayType");
							};
							a.prototype.$48 = function(a, b, c, d) {
								__p && __p();
								this.$19.pause();
								a.nativeAd.loaded = !1;
								this.$8.innerHTML = b.raw;
								if (this.$8 == null) return;
								this.$31(this.$35());
								if (this.$8 == null) return;
								this.$57(
									this.$8,
									a.nativeAd,
									a.nativeCarouselAds,
									d,
									b && b.dfp,
									!!this.$32().$40.autoplayEnabled
								);
								this.$8 &&
									((this.$19 = new h(this.$12, this.$8)),
									this.$19.attachBehaviorManager(this.$21));
							};
							a.prototype.$57 = function(a, b, c, d, e, f) {
								b.loaded = !0;
								var g;
								d = a.getElementsByClassName("fbAdIcon");
								for (g = 0; g < d.length; g++)
									d[g].appendChild(this.createAdIcon(b));
								this.$17 = a.getElementsByClassName("fbAdMedia");
								for (g = 0; g < this.$17.length; g++)
									this.loadMedia(a, this.$17[g], b, c, f);
								this.updateAdText(a, b, "", e);
							};
							a.prototype.$58 = function(a) {
								a = I(a.ownerDocument.body);
								a.addEventListener("touchstart", function() {}, !1);
							};
							a.prototype.loadNativeAd = function(a, b, c, d, e, f) {
								__p && __p();
								if (!a || !b || b.loaded) return !1;
								this.applyAdTypeClass(a, b, c);
								this.$58(a);
								b.loaded = !0;
								var g = !1;
								c = this.loadNativeAdInternal(a, b, c, "", d, e, f);
								if (this.$32().$39 === !0) {
									d = new G();
									d.run(b.requestId, "AN_MWEB", b.topDomain, a);
								}
								return g || c;
							};
							a.prototype.loadNativeAdInternal = function(a, b, c, d, e, f, g) {
								var h,
									i = a.getElementsByClassName("fbAdIcon" + d);
								for (h = 0; h < i.length; h++)
									i[h].appendChild(this.createAdIcon(b));
								i = !1;
								this.$17 = a.getElementsByClassName("fbAdMedia" + d);
								for (h = 0; h < this.$17.length; h++)
									(i = !0),
										e && !c && this.adjustMediaViewSize(b, this.$17[h]),
										this.loadMedia(a, this.$17[h], b, c, g);
								this.updateAdText(a, b, d, f);
								return i;
							};
							a.prototype.updateAdText = function(a, b, c, d) {
								__p && __p();
								var e;
								d = a.getElementsByClassName("fbAdTitle" + c);
								for (e = 0; e < d.length; e++) d[e].textContent = b.adTitle;
								d = a.getElementsByClassName("fbAdSubtitle" + c);
								for (e = 0; e < d.length; e++) d[e].textContent = b.adSubtitle;
								d = a.getElementsByClassName("fbAdBody" + c);
								for (e = 0; e < d.length; e++) d[e].textContent = b.adBody;
								d = a.getElementsByClassName("fbAdCallToAction" + c);
								for (e = 0; e < d.length; e++)
									d[e].textContent = b.adCallToAction;
								d = a.getElementsByClassName("fbAdSocialContext" + c);
								for (e = 0; e < d.length; e++)
									d[e].textContent = b.adSocialContext;
								d = a.getElementsByClassName("fbAdLink" + c);
								for (e = 0; e < d.length; e++) this.installLink(d[e], b);
							};
							a.prototype.createAdIcon = function(a) {
								var b = document.createElement("img");
								b.style.height = "100%";
								b.style.width = "100%";
								this.$22 = !0;
								this.$23.addRequiredEvent();
								b.addEventListener(
									"load",
									function() {
										this.$23.requiredEventFired();
									}.bind(this)
								);
								b.src = a.adIcon;
								return b;
							};
							a.prototype.createAdImage = function(a) {
								__p && __p();
								var b = document.createElement("img");
								b.style.height = "100%";
								b.style.width = "100%";
								this.$22 = !0;
								this.$23.addRequiredEvent();
								b.addEventListener(
									"load",
									function() {
										this.$23.requiredEventFired(),
											b.naturalWidth === 1 &&
												b.naturalHeight === 1 &&
												this.$24.eventWithParams("ADNW_ADERROR", {
													error_message: "Image loading error (1x1)",
													error_stack_trace: b.src
												});
									}.bind(this)
								);
								b.addEventListener(
									"error",
									function() {
										this.$24.eventWithParams("ADNW_ADERROR", {
											error_message: "Image loading error (uncaught)",
											error_stack_trace: b.src
										});
									}.bind(this)
								);
								b.src = a.adImage;
								return b;
							};
							a.prototype.$59 = function() {
								return this.$10 === "native";
							};
							a.prototype.$55 = function() {
								return this.$10 === "rewarded_video";
							};
							a.prototype.$44 = function() {
								return !this.$30() && !this.$59() && J[this.$10];
							};
							a.prototype.$54 = function() {
								this.$35().classList.add("fbVisibleOnce"),
									this.sendImpression();
							};
							a.prototype.$52 = function() {
								var a = this.$19.getDimensions(),
									b =
										(this.$19 && this.$19.getCurrentViewabilityState()) || null;
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
									hosturl: this.$12.getTopURL(),
									iframe_status: this.$53(),
									nest_level: this.$12.getNestLevel(),
									iframe_urls: this.$12.ancestorURLs.slice(0, -1),
									mediation_service: new C(this.$12).getMediator(),
									nmv: this.$18
								};
							};
							a.prototype.$56 = function(a) {
								__p && __p();
								var b = [
										"fbAdCallToAction",
										"fbAdTitle",
										"fbAdBody",
										"fbAdSubtitle",
										"fbAdIcon",
										"fbAdMedia"
									],
									c = this.$35();
								for (var d = 0; d < b.length; d++) {
									var e = b[d],
										f = c.getElementsByClassName(e);
									for (
										var f = f,
											g = Array.isArray(f),
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
										if (a === i || i.contains(a)) return e;
									}
								}
								return "UNKNOWN";
							};
							e.exports = a;
						},
						null
					);
					__d(
						"legacy:fb.fbadnw55",
						["ANCore", "ANUtils", "getTime", "nullthrows"],
						function(a, b, c, d, e, f, g, h, i, j) {
							"use strict";
							__p && __p();
							var k = window;
							function l(a, b) {
								var c = function(a) {
										k.setTimeout(function() {
											return b(a);
										}, 0);
									},
									d = a.push;
								a.push = function(b) {
									c(b), d.call(a, b);
								};
								[].forEach.call(a, function(a) {
									return c(a);
								});
							}
							var m = function(a, b) {
								__p && __p();
								if (a.rootElement.dataset.parsed) return;
								a.rootElement.dataset.parsed = "true";
								a.domain = h.extractOrigin(a.iframe.src);
								a.data = {};
								a.core = new g(a);
								var c = function(b) {
										if (a.isAdLoaded) return;
										a.isAdLoaded = !0;
										var c = j(b.iframeData),
											d = b.data.flags || [],
											e = b.data.features || {},
											f = b.data.clientEventURL || "";
										c.result === "valid"
											? ((a.data.result = c.result),
											  a.core.sendToFacebook("init", {
													flags: d,
													features: e,
													clientEventUrl: f
											  }))
											: (b.data = {
													errorCode: "1007",
													errorMsg: "Incorrect Domain",
													placementId: b.placementId
											  });
										a.core.adLoaded(
											b.data,
											a.iframe,
											function() {
												a.onAdLoaded(a.rootElement);
											},
											a.onAdError.bind(a)
										);
									},
									d = function(b, event) {
										__p && __p();
										if (event.source !== b.iframe.contentWindow) return;
										b = j(b.iframeData);
										switch (event.name) {
											case "iframeLoaded":
												b.result ||
													((b.result = event.data.result),
													(b.pluginPerf = event.data.pluginPerf));
												a.xhrLoaded && c(a);
												break;
											case "xhrLoaded":
												a.xhrLoaded = !0;
												var d = event.data;
												for (var e in d) a.data[e] = d[e];
												(a.data.code || b.result) && c(a);
												break;
										}
									};
								a.core.sdkJSComplete = i();
								l(a.events, function(event) {
									return d(a, event);
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
				'","revision":"4478689","namespace":"FB","message":"' +
				e.message +
				'"}}'
		);
}
