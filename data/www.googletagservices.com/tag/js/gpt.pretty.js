(function(E) {
	var window = this; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
	var aa = function(a) {
			var b = 0;
			return function() {
				return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
			};
		},
		ba =
			"function" == typeof Object.defineProperties
				? Object.defineProperty
				: function(a, b, c) {
						if (a == Array.prototype || a == Object.prototype) return a;
						a[b] = c.value;
						return a;
				  },
		ca = function(a) {
			a = [
				"object" == typeof globalThis && globalThis,
				a,
				"object" == typeof window && window,
				"object" == typeof self && self,
				"object" == typeof global && global
			];
			for (var b = 0; b < a.length; ++b) {
				var c = a[b];
				if (c && c.Math == Math) return c;
			}
			throw Error("Cannot find global object");
		},
		da = ca(this),
		ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
		h = {},
		fa = {},
		l = function(a, b) {
			var c = fa[b];
			if (null == c) return a[b];
			c = a[c];
			return void 0 !== c ? c : a[b];
		},
		n = function(a, b, c) {
			if (b)
				a: {
					var d = a.split(".");
					a = 1 === d.length;
					var e = d[0],
						f;
					!a && e in h ? (f = h) : (f = da);
					for (e = 0; e < d.length - 1; e++) {
						var g = d[e];
						if (!(g in f)) break a;
						f = f[g];
					}
					d = d[d.length - 1];
					c = ea && "es6" === c ? f[d] : null;
					b = b(c);
					null != b &&
						(a
							? ba(h, d, { configurable: !0, writable: !0, value: b })
							: b !== c &&
							  ((fa[d] = ea ? da.Symbol(d) : "$jscp$" + d),
							  (d = fa[d]),
							  ba(f, d, { configurable: !0, writable: !0, value: b })));
				}
		};
	n(
		"Symbol",
		function(a) {
			if (a) return a;
			var b = function(e, f) {
				this.a = e;
				ba(this, "description", { configurable: !0, writable: !0, value: f });
			};
			b.prototype.toString = function() {
				return this.a;
			};
			var c = 0,
				d = function(e) {
					if (this instanceof d)
						throw new TypeError("Symbol is not a constructor");
					return new b("jscomp_symbol_" + (e || "") + "_" + c++, e);
				};
			return d;
		},
		"es6"
	);
	n(
		"Symbol.iterator",
		function(a) {
			if (a) return a;
			a = (0, h.Symbol)("Symbol.iterator");
			for (
				var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
						" "
					),
					c = 0;
				c < b.length;
				c++
			) {
				var d = da[b[c]];
				"function" === typeof d &&
					"function" != typeof d.prototype[a] &&
					ba(d.prototype, a, {
						configurable: !0,
						writable: !0,
						value: function() {
							return ha(aa(this));
						}
					});
			}
			return a;
		},
		"es6"
	);
	var ha = function(a) {
			a = { next: a };
			a[l(h.Symbol, "iterator")] = function() {
				return this;
			};
			return a;
		},
		ia = function(a) {
			var b =
				"undefined" != typeof h.Symbol &&
				l(h.Symbol, "iterator") &&
				a[l(h.Symbol, "iterator")];
			return b ? b.call(a) : { next: aa(a) };
		},
		ja = function(a) {
			if (!(a instanceof Array)) {
				a = ia(a);
				for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
				a = c;
			}
			return a;
		},
		ka =
			"function" == typeof Object.create
				? Object.create
				: function(a) {
						var b = function() {};
						b.prototype = a;
						return new b();
				  },
		la;
	if (ea && "function" == typeof Object.setPrototypeOf)
		la = Object.setPrototypeOf;
	else {
		var ma;
		a: {
			var na = { V: !0 },
				oa = {};
			try {
				oa.__proto__ = na;
				ma = oa.V;
				break a;
			} catch (a) {}
			ma = !1;
		}
		la = ma
			? function(a, b) {
					a.__proto__ = b;
					if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
					return a;
			  }
			: null;
	}
	var pa = la,
		qa = function(a, b) {
			a.prototype = ka(b.prototype);
			a.prototype.constructor = a;
			if (pa) pa(a, b);
			else
				for (var c in b)
					if ("prototype" != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d);
						} else a[c] = b[c];
		},
		ra = function(a, b) {
			a instanceof String && (a += "");
			var c = 0,
				d = {
					next: function() {
						if (c < a.length) {
							var e = c++;
							return { value: b(e, a[e]), done: !1 };
						}
						d.next = function() {
							return { done: !0, value: void 0 };
						};
						return d.next();
					}
				};
			d[l(h.Symbol, "iterator")] = function() {
				return d;
			};
			return d;
		};
	n(
		"Array.prototype.keys",
		function(a) {
			return a
				? a
				: function() {
						return ra(this, function(b) {
							return b;
						});
				  };
		},
		"es6"
	);
	n(
		"Object.is",
		function(a) {
			return a
				? a
				: function(b, c) {
						return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
				  };
		},
		"es6"
	);
	n(
		"Array.prototype.includes",
		function(a) {
			return a
				? a
				: function(b, c) {
						var d = this;
						d instanceof String && (d = String(d));
						var e = d.length;
						c = c || 0;
						for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
							var f = d[c];
							if (f === b || l(Object, "is").call(Object, f, b)) return !0;
						}
						return !1;
				  };
		},
		"es7"
	);
	n(
		"String.prototype.includes",
		function(a) {
			return a
				? a
				: function(b, c) {
						if (null == this)
							throw new TypeError(
								"The 'this' value for String.prototype.includes must not be null or undefined"
							);
						if (b instanceof RegExp)
							throw new TypeError(
								"First argument to String.prototype.includes must not be a regular expression"
							);
						return -1 !== this.indexOf(b, c || 0);
				  };
		},
		"es6"
	);
	var p = this || self,
		ua = function(a) {
			if (a && a != p) return sa(a.document);
			null === ta && (ta = sa(p.document));
			return ta;
		},
		va = /^[\w+/_-]+[=]{0,2}$/,
		ta = null,
		sa = function(a) {
			return (a = a.querySelector && a.querySelector("script[nonce]")) &&
				(a = a.nonce || a.getAttribute("nonce")) &&
				va.test(a)
				? a
				: "";
		},
		wa = function(a) {
			a = a.split(".");
			for (var b = p, c = 0; c < a.length; c++)
				if (((b = b[a[c]]), null == b)) return null;
			return b;
		},
		xa = function() {},
		q = function(a) {
			a.A = void 0;
			a.f = function() {
				return a.A ? a.A : (a.A = new a());
			};
		},
		ya = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		za = 0,
		Aa = function(a, b) {
			for (var c in b) a[c] = b[c];
		},
		r = Date.now,
		t = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
		};
	var Ba;
	var u = function(a, b) {
			Array.prototype.forEach.call(a, b, void 0);
		},
		Ca = function(a, b) {
			return Array.prototype.filter.call(a, b, void 0);
		},
		Da = function(a, b) {
			return Array.prototype.map.call(a, b, void 0);
		},
		Ea = function(a, b) {
			a: {
				for (
					var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
					e < c;
					e++
				)
					if (e in d && b.call(void 0, d[e], e, a)) {
						b = e;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
		},
		Fa = function(a, b) {
			a: {
				for (
					var c = "string" === typeof a ? a.split("") : a, d = a.length - 1;
					0 <= d;
					d--
				)
					if (d in c && b.call(void 0, c[d], d, a)) {
						b = d;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
		},
		Ga = function(a, b) {
			return 0 <= Array.prototype.indexOf.call(a, b, void 0);
		};
	var Ha = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
	var Ia = {
		area: !0,
		base: !0,
		br: !0,
		col: !0,
		command: !0,
		embed: !0,
		hr: !0,
		img: !0,
		input: !0,
		keygen: !0,
		link: !0,
		meta: !0,
		param: !0,
		source: !0,
		track: !0,
		wbr: !0
	};
	var w = function(a, b) {
		this.b = (a === v && b) || "";
		this.c = Ja;
	};
	w.prototype.j = !0;
	w.prototype.a = function() {
		return this.b;
	};
	var Ka = function(a) {
			return a instanceof w && a.constructor === w && a.c === Ja
				? a.b
				: "type_error:Const";
		},
		Ja = {},
		v = {};
	var x = function(a, b) {
		this.c = (a === La && b) || "";
		this.g = Ma;
	};
	x.prototype.j = !0;
	x.prototype.a = function() {
		return this.c.toString();
	};
	x.prototype.v = !0;
	x.prototype.b = function() {
		return 1;
	};
	var Na = function(a) {
			return a instanceof x && a.constructor === x && a.g === Ma
				? a.c
				: "type_error:TrustedResourceUrl";
		},
		Qa = function(a) {
			var b = Ka(
				new w(
					v,
					"https://fundingchoicesmessages.google.com/uf/%{id}?ers=%{ers}"
				)
			);
			if (!Oa.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
			var c = b.replace(Pa, function(d, e) {
				if (!Object.prototype.hasOwnProperty.call(a, e))
					throw Error(
						'Found marker, "' +
							e +
							'", in format string, "' +
							b +
							'", but no valid label mapping found in args: ' +
							JSON.stringify(a)
					);
				d = a[e];
				return d instanceof w ? Ka(d) : encodeURIComponent(String(d));
			});
			return new x(La, c);
		},
		Pa = /%{(\w+)}/g,
		Oa = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
		Ra = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		Ma = {},
		Sa = function(a, b, c) {
			if (null == c) return b;
			if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
			for (var d in c)
				if (Object.prototype.hasOwnProperty.call(c, d)) {
					var e = c[d];
					e = Array.isArray(e) ? e : [e];
					for (var f = 0; f < e.length; f++) {
						var g = e[f];
						null != g &&
							(b || (b = a),
							(b +=
								(b.length > a.length ? "&" : "") +
								encodeURIComponent(d) +
								"=" +
								encodeURIComponent(String(g))));
					}
				}
			return b;
		},
		La = {};
	var Ta = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		ab = function(a) {
			if (!Ua.test(a)) return a;
			-1 != a.indexOf("&") && (a = a.replace(Va, "&amp;"));
			-1 != a.indexOf("<") && (a = a.replace(Wa, "&lt;"));
			-1 != a.indexOf(">") && (a = a.replace(Xa, "&gt;"));
			-1 != a.indexOf('"') && (a = a.replace(Ya, "&quot;"));
			-1 != a.indexOf("'") && (a = a.replace(Za, "&#39;"));
			-1 != a.indexOf("\x00") && (a = a.replace($a, "&#0;"));
			return a;
		},
		Va = /&/g,
		Wa = /</g,
		Xa = />/g,
		Ya = /"/g,
		Za = /'/g,
		$a = /\x00/g,
		Ua = /[\x00&<>"']/,
		cb = function(a, b) {
			var c = 0;
			a = Ta(String(a)).split(".");
			b = Ta(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c =
						bb(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == g[1].length ? 0 : parseInt(g[1], 10)
						) ||
						bb(0 == f[2].length, 0 == g[2].length) ||
						bb(f[2], g[2]);
					f = f[3];
					g = g[3];
				} while (0 == c);
			}
			return c;
		},
		bb = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var y = function(a, b) {
		this.c = (a === db && b) || "";
		this.g = eb;
	};
	y.prototype.j = !0;
	y.prototype.a = function() {
		return this.c.toString();
	};
	y.prototype.v = !0;
	y.prototype.b = function() {
		return 1;
	};
	var fb = function(a) {
			return a instanceof y && a.constructor === y && a.g === eb
				? a.c
				: "type_error:SafeUrl";
		},
		gb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		eb = {},
		hb = new y(db, "about:invalid#zClosurez"),
		db = {};
	var z;
	a: {
		var ib = p.navigator;
		if (ib) {
			var jb = ib.userAgent;
			if (jb) {
				z = jb;
				break a;
			}
		}
		z = "";
	}
	var A = function() {
		this.c = "";
		this.i = kb;
		this.g = null;
	};
	A.prototype.v = !0;
	A.prototype.b = function() {
		return this.g;
	};
	A.prototype.j = !0;
	A.prototype.a = function() {
		return this.c.toString();
	};
	var lb = function(a) {
			return a instanceof A && a.constructor === A && a.i === kb
				? a.c
				: "type_error:SafeHtml";
		},
		nb = function(a) {
			if (a instanceof A) return a;
			var b = "object" == typeof a,
				c = null;
			b && a.v && (c = a.b());
			a = ab(b && a.j ? a.a() : String(a));
			return mb(a, c);
		},
		ob = /^[a-zA-Z0-9-]+$/,
		pb = {
			action: !0,
			cite: !0,
			data: !0,
			formaction: !0,
			href: !0,
			manifest: !0,
			poster: !0,
			src: !0
		},
		rb = function(a, b) {
			var c = { src: a },
				d = {};
			a = {};
			for (var e in c)
				Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
			for (e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
			if (b)
				for (e in b)
					if (Object.prototype.hasOwnProperty.call(b, e)) {
						var f = e.toLowerCase();
						if (f in c) throw Error("");
						f in d && delete a[f];
						a[e] = b[e];
					}
			b = null;
			e = "";
			if (a)
				for (g in a)
					if (Object.prototype.hasOwnProperty.call(a, g)) {
						if (!ob.test(g)) throw Error("");
						d = a[g];
						if (null != d) {
							c = g;
							if (d instanceof w) d = Ka(d);
							else {
								if ("style" == c.toLowerCase()) throw Error("");
								if (/^on/i.test(c)) throw Error("");
								if (c.toLowerCase() in pb)
									if (d instanceof x) d = Na(d).toString();
									else if (d instanceof y) d = fb(d);
									else if ("string" === typeof d)
										d instanceof y ||
											((d = "object" == typeof d && d.j ? d.a() : String(d)),
											(d = gb.test(d) ? new y(db, d) : null)),
											(d = (d || hb).a());
									else throw Error("");
							}
							d.j && (d = d.a());
							c = c + '="' + ab(String(d)) + '"';
							e += " " + c;
						}
					}
			var g = "<script" + e;
			e = void 0;
			null == e ? (e = []) : Array.isArray(e) || (e = [e]);
			!0 === Ia.script
				? (g += ">")
				: ((b = qb(e)),
				  (g += ">" + lb(b).toString() + "\x3c/script>"),
				  (b = b.b()));
			(a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
			return mb(g, b);
		},
		tb = function(a) {
			var b = nb(sb),
				c = b.b(),
				d = [],
				e = function(f) {
					Array.isArray(f)
						? u(f, e)
						: ((f = nb(f)),
						  d.push(lb(f).toString()),
						  (f = f.b()),
						  0 == c ? (c = f) : 0 != f && c != f && (c = null));
				};
			u(a, e);
			return mb(d.join(lb(b).toString()), c);
		},
		qb = function(a) {
			return tb(Array.prototype.slice.call(arguments));
		},
		kb = {},
		mb = function(a, b) {
			var c = new A();
			c.c = a;
			c.g = b;
			return c;
		},
		ub = new A();
	ub.c =
		p.trustedTypes && p.trustedTypes.emptyHTML ? p.trustedTypes.emptyHTML : "";
	ub.g = 0;
	var sb = ub;
	var vb = function(a, b) {
			a.write(lb(b));
		},
		wb = function(a, b) {
			a.src = Na(b);
			(b = ua(a.ownerDocument && a.ownerDocument.defaultView)) &&
				a.setAttribute("nonce", b);
		};
	var xb = function(a) {
		xb[" "](a);
		return a;
	};
	xb[" "] = xa;
	var yb = {},
		zb = null;
	var C = function() {},
		Ab = "function" == typeof Uint8Array,
		D = function(a, b, c, d) {
			a.a = null;
			b || (b = []);
			a.u = void 0;
			a.c = -1;
			a.h = b;
			a: {
				if ((b = a.h.length)) {
					--b;
					var e = a.h[b];
					if (
						!(
							null === e ||
							"object" != typeof e ||
							Array.isArray(e) ||
							(Ab && e instanceof Uint8Array)
						)
					) {
						a.g = b - a.c;
						a.b = e;
						break a;
					}
				}
				a.g = Number.MAX_VALUE;
			}
			a.l = {};
			if (c)
				for (b = 0; b < c.length; b++)
					(e = c[b]),
						e < a.g
							? ((e += a.c), (a.h[e] = a.h[e] || Bb))
							: (Cb(a), (a.b[e] = a.b[e] || Bb));
			if (d && d.length) for (b = 0; b < d.length; b++) Db(a, d[b]);
		},
		Bb = [],
		Cb = function(a) {
			var b = a.g + a.c;
			a.h[b] || (a.b = a.h[b] = {});
		},
		F = function(a, b) {
			if (b < a.g) {
				b += a.c;
				var c = a.h[b];
				return c === Bb ? (a.h[b] = []) : c;
			}
			if (a.b) return (c = a.b[b]), c === Bb ? (a.b[b] = []) : c;
		},
		G = function(a, b, c) {
			a = F(a, b);
			return null == a ? c : a;
		},
		Eb = function(a, b) {
			a = F(a, b);
			a = null == a ? a : +a;
			return null == a ? 0 : a;
		},
		Fb = function(a, b, c) {
			b < a.g ? (a.h[b + a.c] = c) : (Cb(a), (a.b[b] = c));
		},
		Gb = function(a, b, c) {
			"" !== c
				? Fb(a, b, c)
				: b < a.g
					? (a.h[b + a.c] = null)
					: (Cb(a), delete a.b[b]);
			return a;
		},
		Db = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					g = F(a, f);
				null != g && ((c = f), (d = g), Fb(a, f, void 0));
			}
			return c ? (Fb(a, c, d), c) : 0;
		},
		H = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				var d = F(a, c);
				d && (a.a[c] = new b(d));
			}
			return a.a[c];
		},
		I = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				for (var d = F(a, c), e = [], f = 0; f < d.length; f++)
					e[f] = new b(d[f]);
				a.a[c] = e;
			}
			b = a.a[c];
			b == Bb && (b = a.a[c] = []);
			return b;
		},
		Hb = function(a, b, c) {
			a.a || (a.a = {});
			c = c || [];
			for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].h;
			a.a[b] = c;
			Fb(a, b, d);
		};
	C.prototype.i = Ab
		? function() {
				var a = Uint8Array.prototype.toJSON;
				Uint8Array.prototype.toJSON = function() {
					var b;
					void 0 === b && (b = 0);
					if (!zb) {
						zb = {};
						for (
							var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
									""
								),
								d = ["+/=", "+/", "-_=", "-_.", "-_"],
								e = 0;
							5 > e;
							e++
						) {
							var f = c.concat(d[e].split(""));
							yb[e] = f;
							for (var g = 0; g < f.length; g++) {
								var k = f[g];
								void 0 === zb[k] && (zb[k] = g);
							}
						}
					}
					b = yb[b];
					c = [];
					for (d = 0; d < this.length; d += 3) {
						var m = this[d],
							B = (e = d + 1 < this.length) ? this[d + 1] : 0;
						k = (f = d + 2 < this.length) ? this[d + 2] : 0;
						g = m >> 2;
						m = ((m & 3) << 4) | (B >> 4);
						B = ((B & 15) << 2) | (k >> 6);
						k &= 63;
						f || ((k = 64), e || (B = 64));
						c.push(b[g], b[m], b[B] || "", b[k] || "");
					}
					return c.join("");
				};
				try {
					return JSON.stringify(this.h && this.h, Ib);
				} finally {
					Uint8Array.prototype.toJSON = a;
				}
		  }
		: function() {
				return JSON.stringify(this.h && this.h, Ib);
		  };
	var Ib = function(a, b) {
		return "number" !== typeof b ||
			(!isNaN(b) && Infinity !== b && -Infinity !== b)
			? b
			: String(b);
	};
	var Jb = function(a) {
		D(this, a, null, null);
	};
	t(Jb, C);
	var Kb = function(a) {
		this.a = a || p.document || document;
	};
	Kb.prototype.createElement = function(a) {
		var b = this.a;
		a = String(a);
		"application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
		return b.createElement(a);
	};
	Kb.prototype.appendChild = function(a, b) {
		a.appendChild(b);
	};
	var Mb = function(a) {
			Lb();
			return new x(La, a);
		},
		Lb = xa;
	var Nb = function() {
		return (
			-1 != z.indexOf("iPad") ||
			(-1 != z.indexOf("Android") && -1 == z.indexOf("Mobile")) ||
			-1 != z.indexOf("Silk")
		);
	};
	var Ob = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
	var Sb = function(a, b) {
			if (!Pb() && !Qb()) {
				var c = Math.random();
				if (c < b) return (c = Rb(p)), a[Math.floor(c * a.length)];
			}
			return null;
		},
		Rb = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		Tb = function(a, b) {
			if (a)
				for (var c in a)
					Object.prototype.hasOwnProperty.call(a, c) &&
						b.call(void 0, a[c], c, a);
		},
		Qb = Ha(function() {
			return (
				Array.prototype.some.call(
					[
						"Google Web Preview",
						"Mediapartners-Google",
						"Google-Read-Aloud",
						"Google-Adwords"
					],
					Ub,
					void 0
				) || 1e-4 > Math.random()
			);
		}),
		Pb = Ha(function() {
			return Ub("MSIE");
		}),
		Ub = function(a) {
			return -1 != z.indexOf(a);
		},
		Vb = /^(-?[0-9.]{1,30})$/,
		Wb = function(a, b) {
			return Vb.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		Xb = function() {
			try {
				return ua();
			} catch (a) {}
		},
		Yb = Ha(function() {
			return Nb() ||
				(-1 == z.indexOf("iPod") &&
					-1 == z.indexOf("iPhone") &&
					-1 == z.indexOf("Android") &&
					-1 == z.indexOf("IEMobile"))
				? Nb()
					? 1
					: 0
				: 2;
		}),
		Zb = function() {
			var a = void 0 === a ? window : a;
			if ((a = (a = a.location.href.match(Ob)[3] || null) ? decodeURI(a) : a)) {
				var b = a.length;
				if (0 == b) a = 0;
				else {
					for (var c = 305419896, d = 0; d < b; d++)
						c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
					a = 0 < c ? c : 4294967296 + c;
				}
			} else a = null;
			return a;
		},
		$b = function() {
			if ("number" !== typeof p.goog_pvsid)
				try {
					Object.defineProperty(p, "goog_pvsid", {
						value: Math.floor(Math.random() * Math.pow(2, 52))
					});
				} catch (a) {}
			return Number(p.goog_pvsid) || -1;
		};
	var ac = function() {};
	var bc = function(a, b) {
			a.google_image_requests || (a.google_image_requests = []);
			var c = a.document.createElement("img");
			c.src = b;
			a.google_image_requests.push(c);
		},
		dc = function(a, b) {
			var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
			Tb(a, function(d, e) {
				d && (c += "&" + e + "=" + encodeURIComponent(d));
			});
			cc(c);
		},
		cc = function(a) {
			var b = window;
			b.fetch
				? b.fetch(a, {
						keepalive: !0,
						credentials: "include",
						redirect: "follow",
						method: "get",
						mode: "no-cors"
				  })
				: bc(b, a);
		};
	var ec = function(a, b, c, d, e, f) {
		try {
			var g = a.a,
				k = a.createElement("SCRIPT");
			k.async = !0;
			wb(k, b);
			g.head.appendChild(k);
			k.addEventListener("load", function() {
				e();
				d && g.head.removeChild(k);
			});
			k.addEventListener("error", function() {
				0 < c ? ec(a, b, c - 1, d, e, f) : (d && g.head.removeChild(k), f());
			});
		} catch (m) {
			f();
		}
	};
	var fc = function(a, b) {
		this.a = a;
		this.b = a.document;
		this.c = (a = this.a)
			? new Kb(9 == a.nodeType ? a : a.ownerDocument || a.document)
			: Ba || (Ba = new Kb());
		this.g = b;
	};
	fc.prototype.start = function() {
		try {
			gc(this), hc(this);
		} catch (a) {}
	};
	var gc = function(a) {
			var b = function() {
				if (!a.a.frames.googlefcPresent)
					if (a.b.body) {
						var c = a.c.createElement("IFRAME");
						c.style.display = "none";
						c.style.width = "0px";
						c.style.height = "0px";
						c.style.border = "none";
						c.style.zIndex = "-1000";
						c.style.left = "-1000px";
						c.style.top = "-1000px";
						c.name = "googlefcPresent";
						a.b.body.appendChild(c);
					} else a.a.setTimeout(b, 5);
			};
			b();
		},
		hc = function(a) {
			var b = Qa({ id: a.g, ers: 3 });
			ec(a.c, b, 0, !1, function() {}, function() {});
		};
	var ic = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var jc = null,
		kc = function() {
			if (null === jc) {
				jc = "";
				try {
					var a = "";
					try {
						a = p.top.location.hash;
					} catch (c) {
						a = p.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						jc = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return jc;
		};
	var J = function(a) {
		D(this, a, lc, mc);
	};
	t(J, C);
	var lc = [2, 8],
		mc = [[3, 4, 5], [6, 7]];
	var nc = function(a) {
			return null != a ? !a : a;
		},
		oc = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		qc = function(a, b) {
			var c = I(a, J, 2);
			if (!c.length) return pc(a, b);
			a = G(a, 1, 0);
			if (1 == a) return nc(qc(c[0], b));
			c = Da(c, function(d) {
				return function() {
					return qc(d, b);
				};
			});
			switch (a) {
				case 2:
					return oc(c, !1);
				case 3:
					return oc(c, !0);
			}
		},
		pc = function(a, b) {
			var c = Db(a, mc[0]);
			a: {
				switch (c) {
					case 3:
						var d = G(a, 3, 0);
						break a;
					case 4:
						d = G(a, 4, 0);
						break a;
					case 5:
						d = G(a, 5, 0);
						break a;
				}
				d = void 0;
			}
			if (d && (b = (b = b[c]) && b[d])) {
				try {
					var e = b.apply(null, F(a, 8));
				} catch (f) {
					return;
				}
				b = G(a, 1, 0);
				if (4 == b) return !!e;
				d = null != e;
				if (5 == b) return d;
				if (12 == b) a = G(a, 7, "");
				else
					a: {
						switch (c) {
							case 4:
								a = Eb(a, 6);
								break a;
							case 5:
								a = G(a, 7, "");
								break a;
						}
						a = void 0;
					}
				if (null != a) {
					if (6 == b) return e === a;
					if (9 == b) return 0 == cb(e, a);
					if (d)
						switch (b) {
							case 7:
								return e < a;
							case 8:
								return e > a;
							case 12:
								return new RegExp(a).test(e);
							case 10:
								return -1 == cb(e, a);
							case 11:
								return 1 == cb(e, a);
						}
				}
			}
		},
		rc = function(a, b) {
			return !a || !(!b || !qc(a, b));
		};
	var tc = function(a) {
		D(this, a, sc, null);
	};
	t(tc, C);
	var sc = [4];
	var K = function(a) {
		D(this, a, uc, vc);
	};
	t(K, C);
	var wc = function(a) {
		D(this, a, null, null);
	};
	t(wc, C);
	var uc = [5],
		vc = [[1, 2, 3, 6, 7]];
	var L = function() {
		var a = {};
		this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
	};
	q(L);
	var xc = /^true$/.test("false");
	var yc = xc,
		zc = function(a, b) {
			switch (b) {
				case 1:
					return G(a, 1, 0);
				case 2:
					return G(a, 2, 0);
				case 3:
					return G(a, 3, 0);
				case 6:
					return G(a, 6, 0);
				default:
					return null;
			}
		},
		Ac = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return (a = F(a, 1)), (a = null == a ? a : !!a), null == a ? !1 : a;
				case 7:
					return G(a, 3, "");
				case 2:
					return Eb(a, 2);
				case 3:
					return G(a, 3, "");
				case 6:
					return F(a, 4);
				default:
					return null;
			}
		},
		Bc = Ha(function() {
			if (!yc) return {};
			try {
				var a =
					window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
				if (a) return JSON.parse(a);
			} catch (b) {}
			return {};
		}),
		Ec = function(a, b, c, d) {
			d = void 0 === d ? 0 : d;
			var e = Bc();
			if (e[a] && null != e[a][b]) return e[a][b];
			b = Cc(d)[a][b];
			if (!b) return c;
			b = new K(b);
			b = Dc(b);
			a = Ac(b, a);
			return null != a ? a : c;
		},
		Dc = function(a) {
			var b = L.f().a;
			if (b) {
				var c = Fa(I(a, wc, 5), function(d) {
					return rc(H(d, J, 1), b);
				});
				if (c) return H(c, tc, 2);
			}
			return H(a, tc, 4);
		},
		Fc = function() {
			this.a = {};
			this.b = [];
		};
	q(Fc);
	var Gc = function(a, b, c) {
			return !!Ec(1, a, void 0 === b ? !1 : b, c);
		},
		Hc = function(a, b, c) {
			b = void 0 === b ? 0 : b;
			a = Number(Ec(2, a, b, c));
			return isNaN(a) ? b : a;
		},
		Ic = function(a, b, c) {
			return Ec(3, a, void 0 === b ? "" : b, c);
		},
		Jc = function(a, b, c) {
			b = void 0 === b ? [] : b;
			return Ec(6, a, b, c);
		},
		Cc = function(a) {
			var b = {};
			return (
				Fc.f().a[a] ||
				(Fc.f().a[a] = ((b[1] = {}), (b[2] = {}), (b[3] = {}), (b[6] = {}), b))
			);
		},
		Kc = function(a, b) {
			var c = Cc(b);
			Tb(a, function(d, e) {
				return Tb(d, function(f, g) {
					return (c[e][g] = f);
				});
			});
		},
		Lc = function(a, b) {
			var c = Cc(b);
			u(a, function(d) {
				var e = Db(d, vc[0]),
					f = zc(d, e);
				f && (c[e][f] = d.h);
			});
		},
		Mc = function(a, b) {
			var c = Cc(b);
			u(a, function(d) {
				var e = new K(d),
					f = Db(e, vc[0]);
				(e = zc(e, f)) && (c[f][e] || (c[f][e] = d));
			});
		},
		Nc = function() {
			return Da(l(Object, "keys").call(Object, Fc.f().a), function(a) {
				return Number(a);
			});
		},
		Oc = function(a) {
			Ga(Fc.f().b, a) || Kc(Cc(4), a);
		};
	var M = function(a) {
			this.methodName = a;
		},
		Pc = new M(1),
		Qc = new M(15),
		Rc = new M(2),
		Sc = new M(3),
		Tc = new M(4),
		Uc = new M(5),
		Vc = new M(6),
		Wc = new M(7),
		Xc = new M(8),
		Yc = new M(9),
		Zc = new M(10),
		$c = new M(11),
		ad = new M(12),
		bd = new M(13),
		cd = new M(14),
		N = function(a, b, c) {
			c.hasOwnProperty(a.methodName) ||
				Object.defineProperty(c, String(a.methodName), { value: b });
		},
		O = function(a, b, c) {
			return b[a.methodName] || c || function() {};
		},
		dd = function(a) {
			N(Uc, Gc, a);
			N(Vc, Hc, a);
			N(Wc, Ic, a);
			N(Xc, Jc, a);
			N(bd, Mc, a);
			N(Qc, Oc, a);
		},
		ed = function(a) {
			N(
				Tc,
				function(b) {
					L.f().a = b;
				},
				a
			);
			N(
				Yc,
				function(b, c) {
					var d = L.f();
					d.a[3][b] || (d.a[3][b] = c);
				},
				a
			);
			N(
				Zc,
				function(b, c) {
					var d = L.f();
					d.a[4][b] || (d.a[4][b] = c);
				},
				a
			);
			N(
				$c,
				function(b, c) {
					var d = L.f();
					d.a[5][b] || (d.a[5][b] = c);
				},
				a
			);
			N(
				cd,
				function(b) {
					for (
						var c = L.f(), d = ia([3, 4, 5]), e = d.next();
						!e.done;
						e = d.next()
					)
						(e = e.value), Aa(c.a[e], b[e]);
				},
				a
			);
		},
		fd = function(a) {
			a.hasOwnProperty("init-done") ||
				Object.defineProperty(a, "init-done", { value: !0 });
		};
	var P = function() {
			this.b = function() {};
			this.a = function() {
				return [];
			};
		},
		gd = function(a, b, c) {
			a.b = function(d) {
				O(Rc, b, function() {
					return [];
				})(d, c);
			};
			a.a = function() {
				return O(Sc, b, function() {
					return [];
				})(c);
			};
		};
	q(P);
	var hd = function(a, b) {
			try {
				a: {
					var c = a.split(".");
					a = p;
					for (var d = 0, e; d < c.length; d++)
						if (((e = a), (a = a[c[d]]), null == a)) {
							var f = null;
							break a;
						}
					f = "function" === typeof a ? e[c[d - 1]]() : a;
				}
				if (typeof f === b) return f;
			} catch (g) {}
		},
		id = function() {
			var a = {};
			this[3] = ((a[8] = function(b) {
				try {
					return null != wa(b);
				} catch (c) {}
			}),
			(a[9] = function(b) {
				try {
					var c = wa(b);
				} catch (d) {
					return;
				}
				if ((b = "function" === typeof c))
					(c = c && c.toString && c.toString()),
						(b = "string" === typeof c && -1 != c.indexOf("[native code]"));
				return b;
			}),
			(a[10] = function() {
				return window == window.top;
			}),
			(a[6] = function(b) {
				return Ga(P.f().a(), parseInt(b, 10));
			}),
			(a[27] = function(b) {
				b = hd(b, "boolean");
				return void 0 !== b ? b : void 0;
			}),
			a);
			a = {};
			this[4] = ((a[3] = function() {
				return Yb();
			}),
			(a[6] = function(b) {
				b = hd(b, "number");
				return void 0 !== b ? b : void 0;
			}),
			a);
			a = {};
			this[5] = ((a[2] = function() {
				return window.location.href;
			}),
			(a[3] = function() {
				try {
					return window.top.location.hash;
				} catch (b) {
					return "";
				}
			}),
			(a[4] = function(b) {
				b = hd(b, "string");
				return void 0 !== b ? b : void 0;
			}),
			a);
		};
	q(id);
	var jd = function() {
		var a = void 0 === a ? p : a;
		return a.ggeac || (a.ggeac = {});
	};
	var ld = function(a) {
		D(this, a, kd, null);
	};
	t(ld, C);
	var kd = [2];
	ld.prototype.getId = function() {
		return G(this, 1, 0);
	};
	ld.prototype.m = function() {
		return G(this, 7, 0);
	};
	var nd = function(a) {
		D(this, a, md, null);
	};
	t(nd, C);
	var md = [2];
	nd.prototype.m = function() {
		return G(this, 5, 0);
	};
	var pd = function(a) {
		D(this, a, od, null);
	};
	t(pd, C);
	var Q = function(a) {
		D(this, a, qd, null);
	};
	t(Q, C);
	var od = [1, 4, 2, 3],
		qd = [2];
	Q.prototype.m = function() {
		return G(this, 1, 0);
	};
	var rd = [12, 13],
		sd = function() {},
		td = function(a, b, c, d) {
			var e = void 0 === d ? {} : d;
			d = void 0 === e.I ? !1 : e.I;
			var f = void 0 === e.L ? {} : e.L;
			e = void 0 === e.R ? [] : e.R;
			a.a = b;
			a.i = d;
			a.g = f;
			b = {};
			a.b = ((b[c] = e), (b[4] = []), b);
			a.c = {};
			(c = kc()) &&
				u(c.split(",") || [], function(g) {
					(g = parseInt(g, 10)) && (a.c[g] = !0);
				});
			return a;
		},
		yd = function(a, b, c) {
			var d = [],
				e = ud(a.a, b);
			if (e.length) {
				9 !== b && (a.a = vd(a.a, b));
				var f = Ga(rd, b);
				u(e, function(g) {
					if ((g = wd(a, g, c))) {
						var k = g.getId();
						d.push(k);
						xd(a, k, f ? 4 : c);
						var m = I(g, K, 2);
						m &&
							(f
								? u(Nc(), function(B) {
										return Lc(m, B);
								  })
								: Lc(m, c));
					}
				});
			}
			return d;
		},
		xd = function(a, b, c) {
			a.b[c] || (a.b[c] = []);
			a = a.b[c];
			Ga(a, b)
				? dc({ eids: JSON.stringify(a), dup: b }, "gpt_dupeid")
				: a.push(b);
		},
		zd = function(a, b) {
			a.a.push.apply(
				a.a,
				ja(
					Ca(
						Da(b, function(c) {
							return new Q(c);
						}),
						function(c) {
							return !Ga(rd, c.m());
						}
					)
				)
			);
		},
		wd = function(a, b, c) {
			var d = L.f().a;
			if (!rc(H(b, J, 3), d)) return null;
			var e = I(b, ld, 2),
				f = e.length * G(b, 1, 0),
				g = G(b, 6, 0);
			if (g) {
				f = d[4];
				switch (c) {
					case 2:
						var k = f[8];
						break;
					case 1:
						k = f[7];
				}
				f = null;
				if (k)
					try {
						f = k(g);
					} catch (m) {}
				null === f && (f = Math.floor(1e3 * Rb(window)));
				b = Ad(b, f);
				return !b || (d && !rc(H(b, J, 3), d)) ? null : Bd(a, [b], 1);
			}
			g = d
				? Ca(e, function(m) {
						return rc(H(m, J, 3), d);
				  })
				: e;
			return g.length
				? (b = G(b, 4, 0))
					? Cd(a, b, f, g)
					: Bd(a, g, f / 1e3)
				: null;
		},
		Cd = function(a, b, c, d) {
			var e = null != a.g[b] ? a.g[b] : 1e3;
			if (0 >= e) return null;
			d = Bd(a, d, c / e);
			a.g[b] = d ? 0 : e - c;
			return d;
		},
		Bd = function(a, b, c) {
			var d = a.c,
				e = Ea(b, function(f) {
					return !!d[f.getId()];
				});
			return e ? e : a.i ? null : Sb(b, c);
		},
		Dd = function(a, b) {
			N(
				Pc,
				function(c) {
					a.c[c] = !0;
				},
				b
			);
			N(
				Rc,
				function(c, d) {
					return yd(a, c, d);
				},
				b
			);
			N(
				Sc,
				function(c) {
					return (a.b[c] || []).concat(a.b[4]);
				},
				b
			);
			N(
				ad,
				function(c) {
					return zd(a, c);
				},
				b
			);
		};
	q(sd);
	var ud = function(a, b) {
			return (
				((a = Ea(a, function(c) {
					return c.m() == b;
				})) &&
					I(a, nd, 2)) ||
				[]
			);
		},
		vd = function(a, b) {
			return Ca(a, function(c) {
				return c.m() != b;
			});
		},
		Ad = function(a, b) {
			var c = I(a, ld, 2),
				d = c.length,
				e = G(a, 1, 0);
			a = G(a, 8, 0);
			var f = (b - a) % d;
			return b < a || b - a - f >= d * e - 1 ? null : c[f];
		};
	var Ed = function() {
			this.b = function(a, b) {
				return void 0 === b ? !1 : b;
			};
			this.c = function(a, b) {
				return void 0 === b ? 0 : b;
			};
			this.a = function() {};
		},
		Fd = function(a, b, c) {
			a.b = function(d, e) {
				return O(Uc, b)(d, e, c);
			};
			a.c = function(d, e) {
				return O(Vc, b)(d, e, c);
			};
			a.a = function() {
				O(Qc, b)(c);
			};
		};
	q(Ed);
	var R = function(a) {
		var b = void 0 === b ? !1 : b;
		return Ed.f().b(a, b);
	};
	var Gd = function() {
		this.a = function() {};
	};
	q(Gd);
	var Hd = function(a) {
		Gd.f().a(a);
	};
	var Kd = function(a) {
			var b = Id.f(),
				c = { I: S(211), L: S(227), R: S(226) },
				d = void 0,
				e = 2;
			d = void 0 === d ? jd() : d;
			e = void 0 === e ? 0 : e;
			d.hasOwnProperty("init-done")
				? (O(ad, d)(
						Da(I(a, Q, 2), function(f) {
							return f.h;
						})
				  ),
				  O(bd, d)(
						Da(I(a, K, 1), function(f) {
							return f.h;
						}),
						e
				  ),
				  b && O(cd, d)(b),
				  Jd(d, e))
				: (Dd(td(sd.f(), I(a, Q, 2), e, c), d),
				  dd(d),
				  ed(d),
				  fd(d),
				  Jd(d, e),
				  Lc(I(a, K, 1), e),
				  (yc = yc || !(!c || !c.W)),
				  Hd(id.f()),
				  b && Hd(b));
		},
		Jd = function(a, b) {
			a = void 0 === a ? jd() : a;
			b = void 0 === b ? 0 : b;
			var c = a,
				d = b;
			d = void 0 === d ? 0 : d;
			gd(P.f(), c, d);
			c = a;
			b = void 0 === b ? 0 : b;
			Fd(Ed.f(), c, b);
			Gd.f().a = O(cd, a);
			Ed.f().a();
		};
	var Ld = function(a, b, c) {
		var d = "script";
		d = void 0 === d ? "" : d;
		var e = a.createElement("link");
		try {
			e.rel = "preload";
			if (b instanceof x) var f = Na(b).toString();
			else {
				if (b instanceof y) var g = fb(b);
				else {
					if (b instanceof y) var k = b;
					else
						(b = "object" == typeof b && b.j ? b.a() : String(b)),
							gb.test(b) || (b = "about:invalid#zClosurez"),
							(k = new y(db, b));
					g = fb(k);
				}
				f = g;
			}
			e.href = f;
		} catch (m) {
			return;
		}
		d && (e.as = d);
		c && e.setAttribute("nonce", c);
		if ((a = a.getElementsByTagName("head")[0]))
			try {
				a.appendChild(e);
			} catch (m) {}
	};
	var Md = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Nd = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		Od = function(a) {
			return Md.test(a) && !Nd.test(a);
		},
		Pd = function(a) {
			return a.replace(/[\W]/g, function(b) {
				return "&#" + b.charCodeAt() + ";";
			});
		},
		T = p,
		Qd = function(a, b) {
			a = "https://adservice" + (b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(p.location.hostname)];
			U[3] >= r() && b.push("adsid=" + encodeURIComponent(U[1]));
			return a + "?" + b.join("&");
		},
		U,
		V,
		Rd = function() {
			T = p;
			U = T.googleToken = T.googleToken || {};
			var a = r();
			(U[1] && U[3] > a && 0 < U[2]) ||
				((U[1] = ""), (U[2] = -1), (U[3] = -1), (U[4] = ""), (U[6] = ""));
			V = T.googleIMState = T.googleIMState || {};
			Od(V[1]) || (V[1] = ".google.com");
			Array.isArray(V[5]) || (V[5] = []);
			"boolean" !== typeof V[6] && (V[6] = !1);
			Array.isArray(V[7]) || (V[7] = []);
			"number" !== typeof V[8] && (V[8] = 0);
		},
		Sd = function(a) {
			try {
				a();
			} catch (b) {
				p.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		Ud = function(a) {
			"complete" == p.document.readyState ||
			"loaded" == p.document.readyState ||
			(p.document.currentScript && p.document.currentScript.async)
				? Td(3)
				: a();
		},
		Vd = 0,
		Wd = {
			o: function() {
				return 0 < V[8];
			},
			C: function() {
				V[8]++;
			},
			N: function() {
				0 < V[8] && V[8]--;
			},
			O: function() {
				V[8] = 0;
			},
			s: function() {},
			S: function() {
				return !1;
			},
			J: function() {
				return V[5];
			},
			H: Sd
		},
		Xd = {
			o: function() {
				return V[6];
			},
			C: function() {
				V[6] = !0;
			},
			N: function() {
				V[6] = !1;
			},
			O: function() {
				V[6] = !1;
			},
			s: function() {},
			S: function() {
				return ".google.com" != V[1] && 2 < ++Vd;
			},
			J: function() {
				return V[7];
			},
			H: function(a) {
				Ud(function() {
					Sd(a);
				});
			}
		},
		Td = function(a) {
			1e-5 > Math.random() &&
				bc(
					p,
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
						a
				);
		};
	Wd.s = function() {
		if (!Wd.o()) {
			var a = p.document,
				b = function(e) {
					e = Qd("js", e);
					var f = Xb();
					Ld(a, e, f);
					f = a.createElement("script");
					f.type = "text/javascript";
					f.onerror = function() {
						return p.processGoogleToken({}, 2);
					};
					e = Mb(e);
					wb(f, e);
					try {
						(a.head || a.body || a.documentElement).appendChild(f), Wd.C();
					} catch (g) {}
				},
				c = V[1];
			b(c);
			".google.com" != c && b(".google.com");
			b = {};
			var d = ((b.newToken = "FBT"), b);
			p.setTimeout(function() {
				return p.processGoogleToken(d, 1);
			}, 1e3);
		}
	};
	Xd.s = function() {
		if (!Xd.o()) {
			var a = p.document,
				b = Qd("sync.js", V[1]),
				c = Xb();
			Ld(a, b, c);
			b = Pd(b);
			var d = xb("script"),
				e = "";
			c && (e = 'nonce="' + Pd(c) + '"');
			var f =
				"<" +
				d +
				' src="' +
				b +
				'" ' +
				e +
				"></" +
				d +
				"><" +
				(d +
					" " +
					e +
					'>processGoogleTokenSync({"newToken":"FBS"},5);</' +
					d +
					">");
			Ud(function() {
				a.write(f);
				Xd.C();
			});
		}
	};
	var Yd = function(a) {
			Rd();
			(U[3] >= r() && U[2] >= r()) || a.s();
		},
		$d = function() {
			p.processGoogleToken =
				p.processGoogleToken ||
				function(a, b) {
					return Zd(Wd, a, b);
				};
			Yd(Wd);
		},
		ae = function() {
			p.processGoogleTokenSync =
				p.processGoogleTokenSync ||
				function(a, b) {
					return Zd(Xd, a, b);
				};
			Yd(Xd);
		},
		Zd = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				g = parseInt(b.validLifetimeSecs || "", 10),
				k = b["1p_jar"] || "";
			b = b.pucrd || "";
			Rd();
			1 == c ? a.O() : a.N();
			if (!d && a.S()) Od(".google.com") && (V[1] = ".google.com"), a.s();
			else {
				var m = (T.googleToken = T.googleToken || {}),
					B =
						0 == c &&
						d &&
						"string" === typeof d &&
						!e &&
						"number" === typeof f &&
						0 < f &&
						"number" === typeof g &&
						0 < g &&
						"string" === typeof k;
				e = e && !a.o() && (!(U[3] >= r()) || "NT" == U[1]);
				var me = !(U[3] >= r()) && 0 != c;
				if (B || e || me)
					(e = r()),
						(f = e + 1e3 * f),
						(g = e + 1e3 * g),
						Td(c),
						(m[5] = c),
						(m[1] = d),
						(m[2] = f),
						(m[3] = g),
						(m[4] = k),
						(m[6] = b),
						Rd();
				if (B || !a.o()) {
					c = a.J();
					for (d = 0; d < c.length; d++) a.H(c[d]);
					c.length = 0;
				}
			}
		};
	var be = function(a) {
		a = void 0 === a ? p : a;
		return (a = a.performance) && a.now ? a.now() : null;
	};
	var W = p.performance,
		ce = !!(W && W.mark && W.measure && W.clearMarks),
		de = Ha(function() {
			var a;
			if ((a = ce)) (a = kc()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
			return a;
		});
	var ee = function(a, b, c) {
			this.a = void 0 === a ? null : a;
			this.g = void 0 === b ? "jserror" : b;
			this.b = null;
			this.c = void 0 === c ? 0.01 : c;
			this.l = this.i;
		},
		fe = function(a, b) {
			a.b = b;
		};
	ee.prototype.i = function(a, b, c, d, e) {
		c = void 0 === c ? this.c : c;
		e = void 0 === e ? this.g : e;
		if (Math.random() > c) return !1;
		(b.error && b.meta && b.id) || (b = new ic(b, { context: a, id: e }));
		if (d || this.b) (b.meta = {}), this.b && this.b(b.meta), d && d(b.meta);
		p.google_js_errors = p.google_js_errors || [];
		p.google_js_errors.push(b);
		p.error_rep_loaded ||
			((b = p.document),
			(a = b.createElement("script")),
			wb(
				a,
				Mb(
					p.location.protocol +
						"//pagead2.googlesyndication.com/pagead/js/err_rep.js"
				)
			),
			(b = b.getElementsByTagName("script")[0]) &&
				b.parentNode &&
				b.parentNode.insertBefore(a, b),
			(p.error_rep_loaded = !0));
		return !1;
	};
	var ge = function(a, b) {
		try {
			var c = a.a && a.a.start("420", 3);
			b();
			a.a && c && a.a.a(c);
		} catch (d) {
			if (
				(a.a &&
					c &&
					(b = c) &&
					W &&
					de() &&
					(W.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
					W.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
				!a.l(420, d, a.c, void 0, a.g))
			)
				throw d;
		}
	};
	var he = new w(v, "gpt/pubads_impl_"),
		ie = new w(v, "https://securepubads.g.doubleclick.net/");
	var je = function(a) {
		if (!a.google_ltobserver) {
			var b = new a.PerformanceObserver(function(c) {
				var d = (a.google_lt_queue = a.google_lt_queue || []);
				u(c.getEntries(), function(e) {
					return d.push(e);
				});
			});
			b.observe({ entryTypes: ["longtask"] });
			a.google_ltobserver = b;
		}
	};
	var ke = function(a) {
			var b = be(a);
			b &&
				((b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				2048 > a.length && a.push(b));
		},
		le = function(a, b, c) {
			var d = window;
			return function() {
				var e = be(),
					f = 3;
				try {
					var g = b.apply(this, arguments);
				} catch (m) {
					f = 13;
					if (c) return c(a, m), g;
					throw m;
				} finally {
					if (d.google_measure_js_timing && e) {
						var k = be() || 0;
						e = { label: a.toString(), value: e, duration: k - e, type: f };
						f = d.google_js_reporting_queue = d.google_js_reporting_queue || [];
						2048 > f.length && f.push(e);
					}
				}
				return g;
			};
		},
		ne = function(a, b) {
			return le(a, b, function(c, d) {
				new ee().i(c, d);
			});
		};
	function X(a, b) {
		return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
	}
	var pe = function() {
		var a = this;
		this.K = this.U = this.u = this.l = this.g = 0;
		this.M = !1;
		this.B = this.i = this.c = 0;
		this.P = 0.1 > Math.random();
		this.T = p === p.top;
		var b = document.querySelector("[data-google-query-id]");
		this.D = (this.a = b ? b.getAttribute("data-google-query-id") : null)
			? null
			: $b();
		this.P &&
			((b =
				"https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics" +
				(this.a ? "&qqid=" + encodeURIComponent(this.a) : X("pvsid", this.D))),
			(b += X("test", 1)),
			(b += "&top=" + (this.T ? 1 : 0)),
			oe(b));
		this.F = new PerformanceObserver(
			ne(640, function(c) {
				c = ia(c.getEntries());
				for (var d = c.next(); !d.done; d = c.next()) {
					d = d.value;
					if ("layout-shift" === d.entryType) {
						var e = d;
						e.hadRecentInput ||
							(R(241) && !(0.01 < e.value)) ||
							((a.g += Number(e.value)),
							Number(e.value) > a.l && (a.l = Number(e.value)),
							(a.u += 1));
					}
					"largest-contentful-paint" === d.entryType &&
						((e = d), (a.U = Math.floor(e.renderTime || e.loadTime)));
					"first-input" === d.entryType &&
						((e = d),
						(a.K = Number((e.processingStart - e.startTime).toFixed(3))),
						(a.M = !0));
					"longtask" === d.entryType &&
						((a.c += d.duration),
						d.duration > a.i && (a.i = d.duration),
						(a.B += 1));
				}
			})
		);
		this.G = !1;
		this.b = ne(641, this.b.bind(this));
	};
	qa(pe, ac);
	pe.prototype.b = function() {
		var a = document;
		if (
			2 ===
				({ visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
					a.visibilityState ||
						a.webkitVisibilityState ||
						a.mozVisibilityState ||
						""
				] || 0) &&
			!this.G
		) {
			this.G = !0;
			this.F.takeRecords();
			a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
			window.LayoutShift &&
				((a += "&cls=" + this.g.toFixed(3)),
				(a += "&mls=" + this.l.toFixed(3)),
				(a += X("nls", this.u)));
			window.LargestContentfulPaint && (a += X("lcp", this.U));
			window.PerformanceEventTiming && this.M && (a += X("fid", this.K));
			window.PerformanceLongTaskTiming &&
				((a += X("cbt", this.c)),
				(a += X("mbt", this.i)),
				(a += X("nlt", this.B)));
			for (
				var b = 0,
					c = ia(document.getElementsByTagName("iframe")),
					d = c.next();
				!d.done;
				d = c.next()
			)
				if (
					((d = d.value),
					l(d.id, "includes").call(d.id, "google_ads_iframe_") ||
						l(d.id, "includes").call(d.id, "aswift"))
				)
					b += 1;
			a += X("nif", b);
			b = window.google_unique_id;
			a += X("ifi", "number" === typeof b ? b : 0);
			b = P.f().a();
			a += "&eid=" + encodeURIComponent(b.join());
			this.P && (a += X("test", 1));
			a += "&top=" + (this.T ? 1 : 0);
			a += this.a ? "&qqid=" + encodeURIComponent(this.a) : X("pvsid", this.D);
			oe(a);
		}
	};
	function oe(a) {
		window.fetch(a, {
			keepalive: !0,
			credentials: "include",
			redirect: "follow",
			method: "get",
			mode: "no-cors"
		});
	}
	var qe = ["https://adservice.google.com"],
		re = function(a) {
			this.g = qe;
			this.a = 2;
			this.b = a;
			this.c = $b();
		};
	qa(re, ac);
	var se = function(a) {
		!document.hasTrustToken ||
			3 <= a.a ||
			((a.a = 3),
			u(a.g, function(b) {
				window
					.fetch(b + "/tt/r", {
						keepalive: !0,
						redirect: "follow",
						method: "get",
						X: {
							type: "srr-token-redemption",
							issuer: b,
							refreshPolicy: "none"
						}
					})
					.then(function(c) {
						if (!c.ok) throw Error(c.status + ": Network response was not ok!");
						a.a = 5;
						a.b({ issuer: b, state: 5 });
					})
					.catch(function(c) {
						if (c && "NoModificationAllowedError" === c.name)
							(a.a = 5), a.b({ issuer: b, state: 5 });
						else if (4 > a.a) {
							a.b({ issuer: null, state: 4 });
							var d = P.f().a();
							dc(
								{
									pvsid: a.c,
									issuer: b,
									eid: d.join(),
									err: c ? c.message : null
								},
								"trusttoken"
							);
						}
					});
			}));
	};
	var te = [
			"platform",
			"platformVersion",
			"architecture",
			"model",
			"uaFullVersion"
		],
		ue = function(a) {
			return a.navigator &&
				a.navigator.userAgentData &&
				"function" === typeof a.navigator.userAgentData.getHighEntropyValues
				? a.navigator.userAgentData.getHighEntropyValues(te).then(function(b) {
						var c = new Jb();
						c = Gb(c, 1, b.platform);
						c = Gb(c, 2, b.platformVersion);
						c = Gb(c, 3, b.architecture);
						c = Gb(c, 4, b.model);
						return Gb(c, 5, b.uaFullVersion);
				  })
				: null;
		};
	var ve = function() {
			return p.googletag || (p.googletag = {});
		},
		we = function(a, b) {
			var c = ve();
			c.hasOwnProperty(a) || (c[a] = b);
		},
		xe = function(a, b) {
			a.addEventListener
				? a.addEventListener("load", b, !1)
				: a.attachEvent && a.attachEvent("onload", b);
		};
	var Y = {
		247: "https://securepubads.g.doubleclick.net",
		7: 0.02,
		13: 1500,
		23: 0.001,
		37: 0.01,
		38: 0.001,
		58: 1,
		150: "",
		211: !1,
		152: [],
		172: null,
		191: "",
		192: "",
		190: "",
		245: {},
		180: null,
		246: [],
		227: {},
		226: [],
		248: 0,
		228: "//www.googletagservices.com/pubconsole/",
		249: !1,
		250: null,
		251: null
	};
	Y[6] = (function(a, b) {
		b = void 0 === b ? !0 : b;
		try {
			for (var c = null; c != a; c = a, a = a.parent)
				switch (a.location.protocol) {
					case "https:":
						return !0;
					case "file:":
						return b;
					case "http:":
						return !1;
				}
		} catch (d) {}
		return !0;
	})(window);
	Y[49] = new Date().getTime();
	Y[36] = /^true$/.test("false");
	Y[148] = xc;
	Y[221] = /^true$/.test("");
	Y[204] = Wb("{{MOD}}", -1);
	var Z = function() {
		Aa(this, Y);
	};
	q(Z);
	var S = function(a) {
			return Z.f()[a];
		},
		ye = ve(),
		ze = Z.f();
	Aa(ze, ye._vars_);
	ye._vars_ = ze;
	var Ae = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var Be = (function(a, b) {
			var c = b || Ae;
			return function() {
				var d = this || p;
				d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
				var e =
					(Object.prototype.hasOwnProperty.call(a, ya) && a[ya]) ||
					(a[ya] = ++za);
				e = c(e, arguments);
				return d.hasOwnProperty(e) ? d[e] : (d[e] = a.apply(this, arguments));
			};
		})(
			function(a) {
				return a && a.src
					? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(
							a.src
					  )
						? 0
						: 1
					: 2;
			},
			function(a, b) {
				return a + "\x0B" + (b && b[0] && b[0].src);
			}
		),
		Ce = function() {
			return 0 === Be(S(172));
		};
	var De = function() {
		return Wb("3") || 0;
	};
	we("getVersion", function() {
		return "2020072301";
	});
	var Id = function() {
		var a = {};
		this[3] = ((a[3] = Ce),
		(a[2] = S(36)),
		(a[17] = function(b) {
			for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
			return l(c, "includes").call(c, String(Zb()));
		}),
		(a[21] = function() {
			return S(148);
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return S(204);
		}),
		(a[4] = De),
		a);
		this[5] = {};
	};
	q(Id);
	var Ee = [],
		Fe = function(a) {
			var b = new pd(S(246));
			a = new pd(a || Ee);
			if (!I(b, K, 1).length && I(a, K, 1).length) {
				var c = I(a, K, 1);
				Hb(b, 1, c);
			}
			!I(b, Q, 2).length &&
				I(a, Q, 2).length &&
				((a = I(a, Q, 2)), Hb(b, 2, a));
			Kd(b);
		};
	var Ge = function(a) {
			if ((a = a.scripts))
				for (var b = 0; b < a.length; b++) {
					var c = a[b];
					if (-1 < c.src.indexOf("/tag/js/gpt")) return c;
				}
			return null;
		},
		He = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		Ie = function() {
			var a = [ie, he, new w(v, "2020072301"), new w(v, ".js")];
			for (var b = "", c = 0; c < a.length; c++) b += Ka(a[c]);
			a = new x(La, b);
			var d = void 0 === d ? 0 : d;
			(d = Ed.f().c(24, d))
				? ((d = String(d)),
				  (a = Ra.exec(Na(a).toString())),
				  (b = a[3] || ""),
				  (d = new x(La, a[1] + Sa("?", a[2] || "", d) + Sa("#", b, void 0))))
				: (d = a);
			return d;
		},
		Je = function(a, b, c) {
			a = a.currentScript || Ge(a);
			Z.f()[172] = a;
			new Fe(b);
			P.f().b(12);
			P.f().b(5);
			R(200) || R(220) || ((b = S(150)), Rd(), Od(b) && (V[1] = b));
			R(312) &&
				se(
					new re(function(d) {
						Z.f()[250] = d;
					})
				);
			R(363) &&
				(b = ue(c)) &&
				b.then(function(d) {
					d = d.i();
					Z.f()[251] = d;
				});
			b = "";
			R(349) &&
				a &&
				a.hasAttribute("data-load-fc") &&
				(b = a.getAttribute("data-network-id")) &&
				new fc(c, b).start();
		},
		Ke = function(a) {
			try {
				if (
					a.PerformanceObserver &&
					(a.PerformanceLongTaskTiming && !R(377) && je(a),
					R(203) && !window.google_plmetrics)
				) {
					for (
						var b = new pe(),
							c = ia([
								"layout-shift",
								"largest-contentful-paint",
								"first-input",
								"longtask"
							]),
							d = c.next();
						!d.done;
						d = c.next()
					)
						b.F.observe({ type: d.value, buffered: !R(240) });
					document.addEventListener("unload", b.b);
					document.addEventListener("visibilitychange", b.b);
					window.google_plmetrics = !0;
				}
			} catch (e) {}
		},
		Le = function(a, b, c) {
			var d = ve();
			a = a || d.fifWin || window;
			b = b || a.document;
			var e = d.fifWin ? window : a;
			we("cmd", []);
			if (d.evalScripts) d.evalScripts();
			else {
				Je(b, c, a);
				Ke(a);
				R(339) && (Z.f()[249] = !0);
				ke(a);
				a = Ie();
				c = R(200) || R(239);
				if (He(b)) {
					var f = "gpt-impl-" + Math.random();
					try {
						vb(b, rb(a, { id: f, nonce: ua() }));
					} catch (m) {}
					b.getElementById(f) && ((d._loadStarted_ = !0), c || ae());
				}
				if (!d._loadStarted_) {
					c || $d();
					b = d.fifWin ? e.document : b;
					var g = b.createElement("script");
					wb(g, a);
					g.async = !0;
					var k = b.head || b.body || b.documentElement;
					"complete" !== e.document.readyState && d.fifWin
						? xe(e, function() {
								return void k.appendChild(g);
						  })
						: k.appendChild(g);
					d._loadStarted_ = !0;
				}
			}
		};
	var Me;
	a: {
		try {
			if (Array.isArray(E)) {
				Me = E;
				break a;
			}
		} catch (a) {}
		Me = [];
	}
	(function(a, b, c) {
		var d = new ee(null, "gpt_exception", 0.01);
		fe(d, function(e) {
			e.methodId = 420;
		});
		ge(d, function() {
			return Le(a, b, c);
		});
	})(void 0, void 0, Me);
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
	[
		[269, null, null, [1]],
		[351, null, null, [1]],
		[null, 7, null, [null, 0.1]],
		[347, null, null, [1]],
		[322, null, null, [1]],
		[20, null, null, null, [[[1, [[4, null, 1]]], [1]]]],
		[380, null, null, [1]],
		[null, 45, null, [null, 0.5]],
		[252, null, null, [1]],
		[293, null, null, [1]],
		[333, null, null, [1]],
		[296, null, null, [1]],
		[null, 61, null, [null, 0.001]],
		[275, null, null, [1]],
		[
			274,
			null,
			null,
			null,
			[[[1, [[3, [[4, null, 15, null, null, null, null, ["31110078"]]]]]], [1]]]
		],
		[258, null, null, [1]],
		[74, null, null, [1]],
		[198, null, null, [1]],
		[291, null, null, [1]],
		[327, null, null, [1]],
		[352, null, null, [1]],
		[326, null, null, [1]],
		[358, null, null, [1]],
		[null, 8, null, [null, -1]],
		[
			237,
			null,
			null,
			null,
			[[[4, null, 8, null, null, null, null, ["googletag.fifWin"]], [1]]]
		],
		[null, 28, null, [null, 0.01]],
		[372, null, null, [1]],
		[null, 51, null, [null, 1000]],
		[139, null, null, [1]],
		[298, null, null, [1]],
		[89, null, null, [1]],
		[355, null, null, [1]],
		[null, null, 2, [null, null, "1-0-37"]],
		[340, null, null, [1]],
		[215, null, null, [1]],
		[null, 39, null, [null, 72]],
		[null, 38, null, [null, 24]],
		[null, 40, null, [null, 5]],
		[null, 33, null, [null, 250]],
		[330, null, null, [1]],
		[287, null, null, [1]],
		[321, null, null, [1]],
		[
			238,
			null,
			null,
			null,
			[[[4, null, 8, null, null, null, null, ["googletag.fifWin"]], [1]]]
		],
		[null, 32, null, []]
	],
	[
		[
			4,
			[
				[null, [[44713783]]],
				[
					null,
					[
						[44714449, [[null, 7, null, [null, 1]]]],
						[676982961, [[null, 7, null, [null, 0.4]], [212, null, null, [1]]]],
						[676982996, [[null, 7, null, [null, 1]]]]
					]
				],
				[
					null,
					[
						[44716833, [[null, 7, null, [null, 0.03]], [212, null, null, [1]]]],
						[44719570, [[null, 7, null, [null, 0.03]], [212, null, null, [1]]]]
					]
				],
				[
					null,
					[
						[44717978, [[null, 7, null, [null, 0.02]], [212, null, null, [1]]]],
						[44719803, [[null, 7, null, [null, 0.02]], [212, null, null, [1]]]],
						[44719804, [[null, 7, null, [null, 0.02]], [212, null, null, [1]]]],
						[676982681]
					]
				],
				[
					null,
					[
						[44718034, [[null, 7, null, [null, 0.02]], [212, null, null, [1]]]],
						[44719513, [[null, 7, null, [null, 0.02]], [212, null, null, [1]]]]
					]
				],
				[
					null,
					[
						[21065693],
						[21065694],
						[21065695],
						[21065697, [[267, null, null, [1]]]]
					]
				]
			]
		],
		[
			3,
			[
				[null, [[44716830], [44716831], [44717742], [44717743]]],
				[null, [[44716832], [44717744], [44717745]]],
				[null, [[44717747]]],
				[null, [[44718189]]],
				[null, [[676982680]]],
				[null, [[676982863], [676982882]]],
				[null, [[676982960], [676982994], [676982998]]],
				[null, [[676982975], [676982980]]],
				[
					null,
					[
						[
							1337,
							[
								[77, null, null, [1]],
								[78, null, null, [1]],
								[85, null, null, [1]],
								[80, null, null, [1]],
								[76, null, null, [1]],
								[84, null, null, [1]],
								[188, null, null, [1]]
							]
						]
					]
				],
				[5, [[20194812, [[20, null, null, [1]]]], [20194813]], null, 3],
				[
					500,
					[[21060697], [21060698, [[87, null, null, [1]]]]],
					[
						2,
						[
							[4, null, 6, null, null, null, null, ["21066613"]],
							[4, null, 8, null, null, null, null, ["Uint8Array"]],
							[4, null, 11]
						]
					]
				],
				[
					100,
					[[21061497], [21061498, [[86, null, null, [1]]]]],
					[
						2,
						[
							[4, null, 6, null, null, null, null, ["21066613"]],
							[4, null, 9, null, null, null, null, ["requestAnimationFrame"]]
						]
					]
				],
				[
					100,
					[[21061545], [21061546, [[78, null, null, [1]]]]],
					[
						2,
						[
							[4, null, 6, null, null, null, null, ["21066613"]],
							[4, null, 8, null, null, null, null, ["google_ltobserver"]]
						]
					]
				],
				[
					50,
					[[21061999], [21062000, [[81, null, null, [1]]]]],
					[
						2,
						[[4, null, 6, null, null, null, null, ["21066613"]], [4, null, 10]]
					]
				],
				[
					1,
					[
						[21062330],
						[21062331, [[null, 8, null, [null, 800]]]],
						[21062332, [[null, 8, null, [null, 10000]]]]
					],
					null,
					3
				],
				[
					5,
					[
						[21062899],
						[21062900, [[98, null, null, [1]]]],
						[21062901, [[98, null, null, [1]]]]
					]
				],
				[1, [[21062970], [21062971, [[109, null, null, [1]]]]]],
				[
					5,
					[[21063046], [21063047], [21063048]],
					[
						2,
						[
							[4, null, 7],
							[4, null, 8, null, null, null, null, ["TextDecoder"]],
							[4, null, 10]
						]
					],
					9
				],
				[null, [[21063635], [21063636, [[104, null, null, [1]]]]], null, 22],
				[
					1,
					[[21063669], [21063670]],
					[4, null, 8, null, null, null, null, ["TextDecoder"]],
					9
				],
				[50, [[21064169], [21064170, [[168, null, null, [1]]]]]],
				[10, [[21064211], [21064212, [[177, null, null, [1]]]]]],
				[
					10,
					[
						[21064365],
						[
							21064366,
							[[null, null, null, [null, null, null, ["u_tz"]], null, 7]]
						],
						[
							21064367,
							[[null, null, null, [null, null, null, ["u_his"]], null, 7]]
						],
						[
							21064368,
							[
								[
									null,
									null,
									null,
									[null, null, null, ["u_ah", "u_aw"]],
									null,
									7
								]
							]
						],
						[
							21064369,
							[[null, null, null, [null, null, null, ["u_cd"]], null, 7]]
						],
						[
							21064370,
							[[null, null, null, [null, null, null, ["u_nplug"]], null, 7]]
						],
						[
							21064371,
							[[null, null, null, [null, null, null, ["u_nmime"]], null, 7]]
						],
						[
							21064372,
							[[null, null, null, [null, null, null, ["flash"]], null, 7]]
						]
					],
					null,
					15
				],
				[null, [[21064411], [21064412, [[144, null, null, [1]]]]]],
				[
					5,
					[
						[21064623, [[98, null, null, [1]]]],
						[21064624, [[98, null, null, [1]]]]
					]
				],
				[10, [[21065112], [21065113, [[162, null, null, [1]]]]]],
				[10, [[21065138], [21065139, [[148, null, null, [1]]]]]],
				[
					null,
					[
						[
							21065198,
							[[null, null, null, [null, null, null, ["v", "1-0-37"]], null, 1]]
						],
						[21065199, [[null, null, 2, [null, null, "1-0-37"]]]]
					]
				],
				[1, [[21065352], [21065353, [[123, null, null, [1]]]]]],
				[50, [[21065516], [21065517, [[49, null, null, [1]]]]]],
				[10, [[21065803], [21065804, [[329, null, null, [1]]]]]],
				[50, [[21065975], [21065976, [[319, null, null, [1]]]]]],
				[
					1000,
					[
						[
							21066090,
							null,
							[2, [[8, null, null, 1, null, 9], [7, null, null, 1, null, 15]]]
						],
						[
							21066091,
							null,
							[2, [[8, null, null, 1, null, 14], [7, null, null, 1, null, 20]]]
						],
						[
							21066092,
							null,
							[2, [[8, null, null, 1, null, 19], [7, null, null, 1, null, 25]]]
						],
						[
							21066093,
							null,
							[2, [[8, null, null, 1, null, 24], [7, null, null, 1, null, 30]]]
						],
						[
							21066094,
							null,
							[2, [[8, null, null, 1, null, 29], [7, null, null, 1, null, 35]]]
						],
						[
							21066095,
							null,
							[2, [[8, null, null, 1, null, 34], [7, null, null, 1, null, 40]]]
						],
						[
							21066096,
							null,
							[2, [[8, null, null, 1, null, 39], [7, null, null, 1, null, 45]]]
						],
						[
							21066097,
							null,
							[2, [[8, null, null, 1, null, 44], [7, null, null, 1, null, 50]]]
						]
					],
					[4, null, 3]
				],
				[
					10,
					[
						[21066165],
						[
							21066166,
							null,
							[4, null, 8, null, null, null, null, ["location.origin"]]
						]
					]
				],
				[
					10,
					[
						[21066288],
						[
							21066289,
							[
								[null, 52, null, [null, 1]],
								[null, 56, null, [null, 600]],
								[null, 47, null, [null, 1]],
								[null, 55, null, [null, 180]],
								[null, 46, null, [null, 1]]
							]
						]
					]
				],
				[1, [[21066560], [21066561, [[364, null, null, [1]]]]]],
				[
					25,
					[
						[21066720],
						[21066721, [[null, 59, null, [null, 3]]]],
						[21066722, [[null, 59, null, [null, 4]]]],
						[21066723, [[null, 59, null, [null, 1]]]]
					]
				],
				[10, [[21066724], [21066725, [[377, null, null, [1]]]]]],
				[50, [[21066747], [21066748, [[384, null, null, [1]]]]]],
				[10, [[21066781], [21066782]]],
				[
					1000,
					[
						[
							22316437,
							null,
							[2, [[8, null, null, 1, null, -1], [7, null, null, 1, null, 5]]]
						],
						[
							22316438,
							null,
							[2, [[8, null, null, 1, null, 4], [7, null, null, 1, null, 10]]]
						]
					],
					[4, null, 3]
				],
				[50, [[44723443], [44723444, [[374, null, null, [1]]]]]],
				[
					null,
					[
						[
							21065729,
							null,
							[4, null, 6, null, null, null, null, ["21065725"]]
						],
						[
							21065730,
							[[null, 35, null, [null, 10]]],
							[4, null, 6, null, null, null, null, ["21065725"]]
						]
					],
					[4, null, 9, null, null, null, null, ["LayoutShift"]]
				]
			]
		],
		[
			13,
			[
				[
					1000,
					[
						[
							21066819,
							null,
							[
								2,
								[
									[
										12,
										null,
										null,
										null,
										4,
										null,
										"Linux.*Chrome",
										["navigator.userAgent"]
									],
									[
										4,
										null,
										27,
										null,
										null,
										null,
										null,
										["navigator.connection.saveData"]
									]
								]
							]
						]
					]
				],
				[
					500,
					[[21065350], [21065351]],
					[
						2,
						[
							[4, null, 6, null, null, null, null, ["21066613"]],
							[4, null, 9, null, null, null, null, ["ReportingObserver"]]
						]
					]
				],
				[
					100,
					[
						[
							21065726,
							null,
							[4, null, 6, null, null, null, null, ["21065725"]]
						],
						[
							21065727,
							[[240, null, null, [1]]],
							[4, null, 6, null, null, null, null, ["21065725"]]
						],
						[
							21065728,
							[[241, null, null, [1]]],
							[4, null, 6, null, null, null, null, ["21065725"]]
						]
					],
					[4, null, 9, null, null, null, null, ["LayoutShift"]]
				],
				[50, [[21066392], [21066393, [[338, null, null, [1]]]]]],
				[
					500,
					[
						[21066614],
						[
							21066615,
							[
								[77, null, null, [1]],
								[78, null, null, [1]],
								[85, null, null, [1]],
								[80, null, null, [1]],
								[76, null, null, [1]]
							]
						]
					],
					[4, null, 6, null, null, null, null, ["21066613"]]
				],
				[
					1000,
					[
						[
							21066749,
							null,
							[
								2,
								[
									[6, null, null, 6, null, 8577213, null, ["__gsaExp.id"]],
									[
										1,
										[[6, null, null, null, 4, null, "", ["frameElement.src"]]]
									]
								]
							]
						],
						[
							21066750,
							null,
							[
								2,
								[
									[6, null, null, 6, null, 8577213, null, ["__gsaExp.id"]],
									[6, null, null, null, 4, null, "", ["frameElement.src"]]
								]
							]
						],
						[
							21066751,
							null,
							[
								2,
								[
									[5, null, null, 6, null, null, null, ["__gsaExp.id"]],
									[
										1,
										[[6, null, null, 6, null, 8577213, null, ["__gsaExp.id"]]]
									]
								]
							]
						]
					]
				],
				[
					1000,
					[
						[
							21066752,
							null,
							[
								2,
								[
									[
										12,
										null,
										null,
										null,
										4,
										null,
										"Linux.*Chrome",
										["navigator.userAgent"]
									],
									[
										1,
										[[6, null, null, null, 4, null, "", ["frameElement.src"]]]
									],
									[1, [[5, null, null, 6, null, null, null, ["__gsaExp.id"]]]]
								]
							]
						],
						[
							21066753,
							null,
							[
								2,
								[
									[
										12,
										null,
										null,
										null,
										4,
										null,
										"Linux.*Chrome",
										["navigator.userAgent"]
									],
									[6, null, null, null, 4, null, "", ["frameElement.src"]],
									[1, [[5, null, null, 6, null, null, null, ["__gsaExp.id"]]]]
								]
							]
						]
					]
				],
				[50, [[21066806], [21066807, [[370, null, null, [1]]]]]]
			]
		],
		[
			6,
			[
				[null, [[20205494], [20205495]]],
				[null, [[21062379, [[23, null, null, [1]]]]]],
				[
					1000,
					[
						[
							21064215,
							null,
							[4, null, 6, null, null, null, null, ["21064211"]]
						],
						[21064216, null, [4, null, 6, null, null, null, null, ["21064212"]]]
					],
					[4, null, 19]
				]
			]
		],
		[
			5,
			[
				[
					1000,
					[
						[
							21062812,
							[[23, null, null, [1]]],
							[4, null, 8, null, null, null, null, ["_gmptnl"]]
						]
					],
					[12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"]
				],
				[
					1000,
					[
						[
							21064113,
							[[23, null, null, [1]]],
							[
								4,
								null,
								8,
								null,
								null,
								null,
								null,
								["webkit.messageHandlers._gmptnl"]
							]
						]
					],
					[12, null, null, null, 2, null, "today\\.line\\.me/.+/(main|article)"]
				],
				[
					10,
					[[21065645], [21065646, [[305, null, null, [1]]]]],
					[4, null, 9, null, null, null, null, ["window.fetch"]]
				],
				[
					1,
					[
						[21066028],
						[21066029, [[200, null, null, [1]]]],
						[21066030, [[220, null, null, [1]]]]
					],
					null,
					24
				],
				[50, [[21066031], [21066032, [[239, null, null, [1]]]]], null, 24],
				[10, [[21066272], [21066273, [[339, null, null, [1]]]]]],
				[1, [[21066390], [21066391, [[346, null, null, [1]]]]]],
				[1, [[21066465], [21066466, [[302, null, null, [1]]]]]],
				[null, [[21066602], [21066603, [[354, null, null, [1]]]]]],
				[50, [[21066625], [21066626, [[373, null, null, [1]]]]]],
				[
					1000,
					[
						[
							21066799,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066799]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066799]]
							],
							[6, null, null, 4, null, 4]
						],
						[
							21066800,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066800]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066800]]
							],
							[6, null, null, 4, null, 5]
						]
					],
					[4, null, 3],
					1
				],
				[
					5,
					[
						[21066808],
						[21066809, [[361, null, null, [1]], [360, null, null, [1]]]]
					]
				],
				[
					1000,
					[
						[
							21066825,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066825]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066825]]
							],
							[6, null, null, 4, null, 2]
						],
						[
							21066826,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066826]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066826]]
							],
							[6, null, null, 4, null, 3]
						]
					],
					[4, null, 3],
					1
				],
				[
					null,
					[
						[21066839],
						[
							21066840,
							[[393, null, null, [1]]],
							[12, null, null, null, 5, null, "www\\.googletagservices\\.com"]
						]
					]
				],
				[
					1000,
					[
						[
							21066841,
							null,
							[4, null, 6, null, null, null, null, ["21066839"]]
						],
						[21066842, null, [4, null, 6, null, null, null, null, ["21066840"]]]
					],
					[12, null, null, null, 5, null, "www\\.googletagservices\\.com"]
				]
			]
		],
		[
			2,
			[
				[10, [[21066169], [21066170, [[274, null, null, [1]]]]]],
				[
					1,
					[[21066173], [21066174], [21066181], [21066182]],
					null,
					null,
					null,
					43,
					21
				],
				[1, [[21066183], [21066184]], null, null, null, 43, null, 500]
			]
		],
		[
			12,
			[
				[
					20,
					[[21065724], [21065725, [[203, null, null, [1]]]]],
					[4, null, 9, null, null, null, null, ["LayoutShift"]]
				],
				[10, [[21065755], [21065756, [[312, null, null, [1]]]]], null, 21],
				[
					100,
					[[21065757], [21065758, [[312, null, null, [1]]]]],
					[4, null, 9, null, null, null, null, ["document.hasTrustToken"]],
					21
				],
				[1, [[21065784]]],
				[
					1,
					[
						[
							21065785,
							null,
							[
								4,
								null,
								8,
								null,
								null,
								null,
								null,
								["navigator.connection.saveData"]
							]
						]
					]
				],
				[
					1,
					[
						[
							21065786,
							null,
							[
								4,
								null,
								27,
								null,
								null,
								null,
								null,
								["navigator.connection.saveData"]
							]
						]
					]
				],
				[
					1,
					[
						[
							21065787,
							null,
							[
								1,
								[
									[
										4,
										null,
										27,
										null,
										null,
										null,
										null,
										["navigator.connection.saveData"]
									]
								]
							]
						]
					]
				],
				[
					1,
					[
						[
							21065798,
							null,
							[
								2,
								[
									[5, null, 8, null, null, null, null, ["localStorage"]],
									[4, null, 8, null, null, null, null, ["localStorage"]]
								]
							]
						]
					]
				],
				[
					1,
					[
						[
							21065799,
							null,
							[
								2,
								[
									[5, null, 8, null, null, null, null, ["localStorage"]],
									[1, [[4, null, 8, null, null, null, null, ["localStorage"]]]]
								]
							]
						]
					]
				],
				[
					1,
					[
						[
							21066438,
							null,
							[1, [[5, null, 8, null, null, null, null, ["localStorage"]]]]
						]
					]
				],
				[50, [[21066532], [21066533, [[363, null, null, [1]]]]], null, 25],
				[
					500,
					[[21066534], [21066535, [[363, null, null, [1]]]]],
					[
						4,
						null,
						9,
						null,
						null,
						null,
						null,
						["navigator.userAgentData.getHighEntropyValues"]
					],
					25
				],
				[
					10,
					[
						[21066612],
						[21066613, [[83, null, null, [1]], [84, null, null, [1]]]]
					]
				],
				[10, [[21066705], [21066706, [[382, null, null, [1]]]]]]
			]
		]
	]
]));
