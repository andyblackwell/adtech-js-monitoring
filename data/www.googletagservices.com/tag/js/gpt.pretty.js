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
		ba = function(a) {
			var b =
				"undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
			return b ? b.call(a) : { next: aa(a) };
		},
		ca = function(a) {
			if (!(a instanceof Array)) {
				a = ba(a);
				for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
				a = c;
			}
			return a;
		},
		da =
			"function" == typeof Object.create
				? Object.create
				: function(a) {
						var b = function() {};
						b.prototype = a;
						return new b();
				  },
		ea;
	if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
	else {
		var fa;
		a: {
			var ha = { U: !0 },
				ia = {};
			try {
				ia.__proto__ = ha;
				fa = ia.U;
				break a;
			} catch (a) {}
			fa = !1;
		}
		ea = fa
			? function(a, b) {
					a.__proto__ = b;
					if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
					return a;
			  }
			: null;
	}
	var ja = ea,
		ka = function(a, b) {
			a.prototype = da(b.prototype);
			a.prototype.constructor = a;
			if (ja) ja(a, b);
			else
				for (var c in b)
					if ("prototype" != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d);
						} else a[c] = b[c];
		},
		h = this || self,
		na = function() {
			if (null === la)
				a: {
					var a = h.document;
					if (
						(a = a.querySelector && a.querySelector("script[nonce]")) &&
						(a = a.nonce || a.getAttribute("nonce")) &&
						ma.test(a)
					) {
						la = a;
						break a;
					}
					la = "";
				}
			return la;
		},
		ma = /^[\w+/_-]+[=]{0,2}$/,
		la = null,
		oa = function(a) {
			a = a.split(".");
			for (var b = h, c = 0; c < a.length; c++)
				if (((b = b[a[c]]), null == b)) return null;
			return b;
		},
		pa = function() {},
		k = function(a) {
			a.v = void 0;
			a.f = function() {
				return a.v ? a.v : (a.v = new a());
			};
		},
		ra = function(a) {
			var b = typeof a;
			if ("object" == b)
				if (a) {
					if (a instanceof Array) return "array";
					if (a instanceof Object) return b;
					var c = Object.prototype.toString.call(a);
					if ("[object Window]" == c) return "object";
					if (
						"[object Array]" == c ||
						("number" == typeof a.length &&
							"undefined" != typeof a.splice &&
							"undefined" != typeof a.propertyIsEnumerable &&
							!a.propertyIsEnumerable("splice"))
					)
						return "array";
					if (
						"[object Function]" == c ||
						("undefined" != typeof a.call &&
							"undefined" != typeof a.propertyIsEnumerable &&
							!a.propertyIsEnumerable("call"))
					)
						return "function";
				} else return "null";
			else if ("function" == b && "undefined" == typeof a.call) return "object";
			return b;
		},
		sa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		ta = 0,
		ua = function(a, b) {
			for (var c in b) a[c] = b[c];
		},
		l = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
		};
	var n = function(a, b) {
			for (
				var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
				e < c;
				e++
			)
				e in d && b.call(void 0, d[e], e, a);
		},
		va = function(a, b) {
			for (
				var c = a.length,
					d = [],
					e = 0,
					f = "string" === typeof a ? a.split("") : a,
					g = 0;
				g < c;
				g++
			)
				if (g in f) {
					var m = f[g];
					b.call(void 0, m, g, a) && (d[e++] = m);
				}
			return d;
		},
		p = function(a, b) {
			for (
				var c = a.length,
					d = Array(c),
					e = "string" === typeof a ? a.split("") : a,
					f = 0;
				f < c;
				f++
			)
				f in e && (d[f] = b.call(void 0, e[f], f, a));
			return d;
		},
		wa = function(a, b) {
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
		xa = function(a, b) {
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
		q = function(a, b) {
			a: if ("string" === typeof a)
				a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
			else {
				for (var c = 0; c < a.length; c++)
					if (c in a && a[c] === b) {
						a = c;
						break a;
					}
				a = -1;
			}
			return 0 <= a;
		};
	var r = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
	var ya = {
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
	var v = function(a, b) {
		this.b = (a === u && b) || "";
		this.c = za;
	};
	v.prototype.j = !0;
	v.prototype.a = function() {
		return this.b;
	};
	var Aa = function(a) {
			return a instanceof v && a.constructor === v && a.c === za
				? a.b
				: "type_error:Const";
		},
		za = {},
		u = {};
	var w = function(a, b) {
		this.c = (a === Ba && b) || "";
		this.g = Ca;
	};
	w.prototype.j = !0;
	w.prototype.a = function() {
		return this.c.toString();
	};
	w.prototype.u = !0;
	w.prototype.b = function() {
		return 1;
	};
	var Da = function(a) {
			return a instanceof w && a.constructor === w && a.g === Ca
				? a.c
				: "type_error:TrustedResourceUrl";
		},
		Ea = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		Ca = {},
		Fa = function(a, b, c) {
			if (null == c) return b;
			if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
			for (var d in c) {
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
		Ba = {};
	var Ga = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		Oa = function(a) {
			if (!Ha.test(a)) return a;
			-1 != a.indexOf("&") && (a = a.replace(Ia, "&amp;"));
			-1 != a.indexOf("<") && (a = a.replace(Ja, "&lt;"));
			-1 != a.indexOf(">") && (a = a.replace(Ka, "&gt;"));
			-1 != a.indexOf('"') && (a = a.replace(La, "&quot;"));
			-1 != a.indexOf("'") && (a = a.replace(Ma, "&#39;"));
			-1 != a.indexOf("\x00") && (a = a.replace(Na, "&#0;"));
			return a;
		},
		Ia = /&/g,
		Ja = /</g,
		Ka = />/g,
		La = /"/g,
		Ma = /'/g,
		Na = /\x00/g,
		Ha = /[\x00&<>"']/,
		Qa = function(a, b) {
			var c = 0;
			a = Ga(String(a)).split(".");
			b = Ga(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c =
						Pa(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == g[1].length ? 0 : parseInt(g[1], 10)
						) ||
						Pa(0 == f[2].length, 0 == g[2].length) ||
						Pa(f[2], g[2]);
					f = f[3];
					g = g[3];
				} while (0 == c);
			}
			return c;
		},
		Pa = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var x = function(a, b) {
		this.c = (a === Ra && b) || "";
		this.g = Sa;
	};
	x.prototype.j = !0;
	x.prototype.a = function() {
		return this.c.toString();
	};
	x.prototype.u = !0;
	x.prototype.b = function() {
		return 1;
	};
	var Ta = function(a) {
			return a instanceof x && a.constructor === x && a.g === Sa
				? a.c
				: "type_error:SafeUrl";
		},
		Ua = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		Sa = {},
		Ra = {};
	var y;
	a: {
		var Va = h.navigator;
		if (Va) {
			var Wa = Va.userAgent;
			if (Wa) {
				y = Wa;
				break a;
			}
		}
		y = "";
	}
	var z = function() {
		this.c = "";
		this.i = Xa;
		this.g = null;
	};
	z.prototype.u = !0;
	z.prototype.b = function() {
		return this.g;
	};
	z.prototype.j = !0;
	z.prototype.a = function() {
		return this.c.toString();
	};
	var Ya = function(a) {
			return a instanceof z && a.constructor === z && a.i === Xa
				? a.c
				: "type_error:SafeHtml";
		},
		Za = function(a) {
			if (a instanceof z) return a;
			var b = "object" == typeof a,
				c = null;
			b && a.u && (c = a.b());
			a = Oa(b && a.j ? a.a() : String(a));
			return A(a, c);
		},
		$a = /^[a-zA-Z0-9-]+$/,
		ab = {
			action: !0,
			cite: !0,
			data: !0,
			formaction: !0,
			href: !0,
			manifest: !0,
			poster: !0,
			src: !0
		},
		cb = function(a, b) {
			var c = { src: a },
				d = {};
			a = {};
			for (var e in c) a[e] = c[e];
			for (e in d) a[e] = d[e];
			if (b)
				for (e in b) {
					var f = e.toLowerCase();
					if (f in c) throw Error("");
					f in d && delete a[f];
					a[e] = b[e];
				}
			b = null;
			e = "";
			if (a)
				for (g in a) {
					if (!$a.test(g)) throw Error("");
					d = a[g];
					if (null != d) {
						c = g;
						if (d instanceof v) d = Aa(d);
						else {
							if ("style" == c.toLowerCase()) throw Error("");
							if (/^on/i.test(c)) throw Error("");
							if (c.toLowerCase() in ab)
								if (d instanceof w) d = Da(d).toString();
								else if (d instanceof x) d = Ta(d);
								else if ("string" === typeof d)
									d instanceof x ||
										((d = "object" == typeof d && d.j ? d.a() : String(d)),
										Ua.test(d) || (d = "about:invalid#zClosurez"),
										(d = new x(Ra, d))),
										(d = d.a());
								else throw Error("");
						}
						d.j && (d = d.a());
						c = c + '="' + Oa(String(d)) + '"';
						e += " " + c;
					}
				}
			var g = "<script" + e;
			e = void 0;
			null == e ? (e = []) : Array.isArray(e) || (e = [e]);
			!0 === ya.script
				? (g += ">")
				: ((b = bb(e)),
				  (g += ">" + Ya(b).toString() + "\x3c/script>"),
				  (b = b.b()));
			(a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
			return A(g, b);
		},
		eb = function(a) {
			var b = Za(db),
				c = b.b(),
				d = [],
				e = function(f) {
					Array.isArray(f)
						? n(f, e)
						: ((f = Za(f)),
						  d.push(Ya(f).toString()),
						  (f = f.b()),
						  0 == c ? (c = f) : 0 != f && c != f && (c = null));
				};
			n(a, e);
			return A(d.join(Ya(b).toString()), c);
		},
		bb = function(a) {
			return eb(Array.prototype.slice.call(arguments));
		},
		Xa = {},
		A = function(a, b) {
			var c = new z();
			c.c = a;
			c.g = b;
			return c;
		};
	A("<!DOCTYPE html>", 0);
	var db = A("", 0);
	A("<br>", 0);
	var fb = function(a, b) {
			a.write(Ya(b));
		},
		gb = function(a, b) {
			a.src = Da(b);
			(b = na()) && a.setAttribute("nonce", b);
		};
	var hb = function(a) {
		hb[" "](a);
		return a;
	};
	hb[" "] = pa;
	var B = function() {},
		ib = "function" == typeof Uint8Array,
		D = function(a, b, c, d) {
			a.a = null;
			b || (b = []);
			a.l = void 0;
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
							(ib && e instanceof Uint8Array)
						)
					) {
						a.g = b - a.c;
						a.b = e;
						break a;
					}
				}
				a.g = Number.MAX_VALUE;
			}
			a.i = {};
			if (c)
				for (b = 0; b < c.length; b++)
					(e = c[b]),
						e < a.g
							? ((e += a.c), (a.h[e] = a.h[e] || C))
							: (jb(a), (a.b[e] = a.b[e] || C));
			if (d && d.length) for (b = 0; b < d.length; b++) kb(a, d[b]);
		},
		C = [],
		jb = function(a) {
			var b = a.g + a.c;
			a.h[b] || (a.b = a.h[b] = {});
		},
		F = function(a, b) {
			if (b < a.g) {
				b += a.c;
				var c = a.h[b];
				return c === C ? (a.h[b] = []) : c;
			}
			if (a.b) return (c = a.b[b]), c === C ? (a.b[b] = []) : c;
		},
		G = function(a, b, c) {
			a = F(a, b);
			return null == a ? c : a;
		},
		lb = function(a, b) {
			a = F(a, b);
			a = null == a ? a : +a;
			return null == a ? 0 : a;
		},
		mb = function(a, b, c) {
			b < a.g ? (a.h[b + a.c] = c) : (jb(a), (a.b[b] = c));
		},
		kb = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					g = F(a, f);
				null != g && ((c = f), (d = g), mb(a, f, void 0));
			}
			return c ? (mb(a, c, d), c) : 0;
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
			b == C && (b = a.a[c] = []);
			return b;
		},
		nb = function(a, b, c) {
			a.a || (a.a = {});
			c = c || [];
			for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].h;
			a.a[b] = c;
			mb(a, b, d);
		};
	var pb = function(a) {
			ob();
			return new w(Ba, a);
		},
		ob = pa;
	var qb = function() {
		return (
			-1 != y.indexOf("iPad") ||
			(-1 != y.indexOf("Android") && -1 == y.indexOf("Mobile")) ||
			-1 != y.indexOf("Silk")
		);
	};
	var rb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
	var vb = function(a, b) {
			if (!sb() && !tb()) {
				var c = Math.random();
				if (c < b) return (c = ub(h)), a[Math.floor(c * a.length)];
			}
			return null;
		},
		ub = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		wb = function(a, b) {
			if (a)
				for (var c in a)
					Object.prototype.hasOwnProperty.call(a, c) &&
						b.call(void 0, a[c], c, a);
		},
		tb = r(function() {
			a: {
				var a = [
					"Google Web Preview",
					"Mediapartners-Google",
					"Google-Read-Aloud",
					"Google-Adwords"
				];
				for (
					var b = xb,
						c = a.length,
						d = "string" === typeof a ? a.split("") : a,
						e = 0;
					e < c;
					e++
				)
					if (e in d && b.call(void 0, d[e], e, a)) {
						a = !0;
						break a;
					}
				a = !1;
			}
			return a || 1e-4 > Math.random();
		}),
		sb = r(function() {
			return xb("MSIE");
		}),
		xb = function(a) {
			return -1 != y.indexOf(a);
		},
		yb = /^(-?[0-9.]{1,30})$/,
		zb = function(a, b) {
			return yb.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		Ab = function() {
			try {
				return na();
			} catch (a) {}
		},
		Bb = r(function() {
			return qb() ||
				(-1 == y.indexOf("iPod") &&
					-1 == y.indexOf("iPhone") &&
					-1 == y.indexOf("Android") &&
					-1 == y.indexOf("IEMobile"))
				? qb()
					? 1
					: 0
				: 2;
		});
	var Cb = function() {}; /*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
	var J = function(a) {
		D(this, a, Db, Eb);
	};
	l(J, B);
	var Db = [2, 8],
		Eb = [[3, 4, 5], [6, 7]];
	var Fb = function(a) {
			return null != a ? !a : a;
		},
		Gb = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		Ib = function(a, b) {
			var c = I(a, J, 2);
			if (!c.length) return Hb(a, b);
			a = G(a, 1, 0);
			if (1 == a) return Fb(Ib(c[0], b));
			c = p(c, function(d) {
				return function() {
					return Ib(d, b);
				};
			});
			switch (a) {
				case 2:
					return Gb(c, !1);
				case 3:
					return Gb(c, !0);
			}
		},
		Hb = function(a, b) {
			var c = kb(a, Eb[0]);
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
								a = lb(a, 6);
								break a;
							case 5:
								a = G(a, 7, "");
								break a;
						}
						a = void 0;
					}
				if (null != a) {
					if (6 == b) return e === a;
					if (9 == b) return 0 == Qa(e, a);
					if (d)
						switch (b) {
							case 7:
								return e < a;
							case 8:
								return e > a;
							case 12:
								return new RegExp(a).test(e);
							case 10:
								return -1 == Qa(e, a);
							case 11:
								return 1 == Qa(e, a);
						}
				}
			}
		},
		Jb = function(a, b) {
			return !a || !(!b || !Ib(a, b));
		};
	var Lb = function(a) {
		D(this, a, Kb, null);
	};
	l(Lb, B);
	var Kb = [4];
	var K = function(a) {
		D(this, a, Mb, Nb);
	};
	l(K, B);
	var Ob = function(a) {
		D(this, a, null, null);
	};
	l(Ob, B);
	var Mb = [5],
		Nb = [[1, 2, 3, 6, 7]];
	var L = function() {
		var a = {};
		this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
	};
	k(L);
	var Pb = /^true$/.test("false");
	var Qb = Pb,
		Rb = function(a, b) {
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
		Sb = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return (a = F(a, 1)), (a = null == a ? a : !!a), null == a ? !1 : a;
				case 7:
					return G(a, 3, "");
				case 2:
					return lb(a, 2);
				case 3:
					return G(a, 3, "");
				case 6:
					return F(a, 4);
				default:
					return null;
			}
		},
		Tb = r(function() {
			if (!Qb) return {};
			try {
				var a =
					window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
				if (a) return JSON.parse(a);
			} catch (b) {}
			return {};
		}),
		Vb = function(a, b, c, d) {
			d = void 0 === d ? 0 : d;
			var e = Tb();
			if (e[a] && null != e[a][b]) return e[a][b];
			b = M(d)[a][b];
			if (!b) return c;
			b = new K(b);
			b = Ub(b);
			a = Sb(b, a);
			return null != a ? a : c;
		},
		Ub = function(a) {
			var b = L.f().a;
			if (b) {
				var c = xa(I(a, Ob, 5), function(d) {
					return Jb(H(d, J, 1), b);
				});
				if (c) return H(c, Lb, 2);
			}
			return H(a, Lb, 4);
		},
		Wb = function() {
			this.a = {};
			this.b = [];
		};
	k(Wb);
	var Xb = function(a, b, c) {
			return !!Vb(1, a, void 0 === b ? !1 : b, c);
		},
		Yb = function(a, b, c) {
			b = void 0 === b ? 0 : b;
			a = Number(Vb(2, a, b, c));
			return isNaN(a) ? b : a;
		},
		Zb = function(a, b, c) {
			return Vb(3, a, void 0 === b ? "" : b, c);
		},
		$b = function(a, b, c) {
			b = void 0 === b ? [] : b;
			return Vb(6, a, b, c);
		},
		M = function(a) {
			var b = {};
			return (
				Wb.f().a[a] ||
				(Wb.f().a[a] = ((b[1] = {}), (b[2] = {}), (b[3] = {}), (b[6] = {}), b))
			);
		},
		ac = function(a, b) {
			var c = M(b);
			wb(a, function(d, e) {
				return wb(d, function(f, g) {
					return (c[e][g] = f);
				});
			});
		},
		bc = function(a, b) {
			var c = M(b);
			n(a, function(d) {
				var e = kb(d, Nb[0]),
					f = Rb(d, e);
				f && (c[e][f] = d.h);
			});
		},
		cc = function(a, b) {
			var c = M(b);
			n(a, function(d) {
				var e = new K(d),
					f = kb(e, Nb[0]);
				(e = Rb(e, f)) && (c[f][e] || (c[f][e] = d));
			});
		},
		dc = function() {
			return p(Object.keys(Wb.f().a), function(a) {
				return Number(a);
			});
		},
		ec = function(a) {
			q(Wb.f().b, a) || ac(M(4), a);
		};
	var N = function(a) {
			this.methodName = a;
		},
		fc = new N(1),
		gc = new N(15),
		hc = new N(2),
		ic = new N(3),
		jc = new N(4),
		kc = new N(5),
		lc = new N(6),
		mc = new N(7),
		nc = new N(8),
		oc = new N(9),
		pc = new N(10),
		qc = new N(11),
		rc = new N(12),
		sc = new N(13),
		tc = new N(14),
		O = function(a, b, c) {
			c.hasOwnProperty(a.methodName) ||
				Object.defineProperty(c, String(a.methodName), { value: b });
		},
		P = function(a, b, c) {
			return b[a.methodName] || c || function() {};
		},
		uc = function(a) {
			O(kc, Xb, a);
			O(lc, Yb, a);
			O(mc, Zb, a);
			O(nc, $b, a);
			O(sc, cc, a);
			O(gc, ec, a);
		},
		vc = function(a) {
			O(
				jc,
				function(b) {
					L.f().a = b;
				},
				a
			);
			O(
				oc,
				function(b, c) {
					var d = L.f();
					d.a[3][b] || (d.a[3][b] = c);
				},
				a
			);
			O(
				pc,
				function(b, c) {
					var d = L.f();
					d.a[4][b] || (d.a[4][b] = c);
				},
				a
			);
			O(
				qc,
				function(b, c) {
					var d = L.f();
					d.a[5][b] || (d.a[5][b] = c);
				},
				a
			);
			O(
				tc,
				function(b) {
					for (
						var c = L.f(), d = ba([3, 4, 5]), e = d.next();
						!e.done;
						e = d.next()
					)
						(e = e.value), ua(c.a[e], b[e]);
				},
				a
			);
		},
		wc = function(a) {
			a.hasOwnProperty("init-done") ||
				Object.defineProperty(a, "init-done", { value: !0 });
		};
	var xc = function() {
			this.b = function(a, b) {
				return void 0 === b ? !1 : b;
			};
			this.c = function(a, b) {
				return void 0 === b ? 0 : b;
			};
			this.a = function() {};
		},
		yc = function(a, b, c) {
			a.b = function(d, e) {
				return P(kc, b)(d, e, c);
			};
			a.c = function(d, e) {
				return P(lc, b)(d, e, c);
			};
			a.a = function() {
				P(gc, b)(c);
			};
		};
	k(xc);
	var Q = function(a) {
		var b = void 0 === b ? !1 : b;
		return xc.f().b(a, b);
	};
	var zc = function(a) {
		var b = window;
		a = void 0 === a ? 0 : a;
		a = 0 != a ? "google_experiment_mod" + a : "google_experiment_mod";
		a: {
			var c = -1;
			try {
				b.localStorage && (c = parseInt(b.localStorage.getItem(a), 10));
			} catch (e) {
				c = null;
				break a;
			}
			c = 0 <= c && 1e3 > c ? c : null;
		}
		if (null != c) var d = c;
		else
			a: {
				if (!tb()) {
					c = Math.floor(1e3 * ub(b));
					try {
						if (b.localStorage) {
							b.localStorage.setItem(a, String(c));
							d = c;
							break a;
						}
					} catch (e) {}
				}
				d = null;
			}
		return d;
	};
	var Ac = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var Bc = null,
		Cc = function() {
			if (null === Bc) {
				Bc = "";
				try {
					var a = "";
					try {
						a = h.top.location.hash;
					} catch (c) {
						a = h.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						Bc = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return Bc;
		};
	var R = function() {
			this.a = function() {};
			this.b = function() {
				return [];
			};
		},
		Dc = function(a, b, c) {
			a.a = function(d) {
				P(hc, b, function() {
					return [];
				})(d, c);
			};
			a.b = function() {
				return P(ic, b, function() {
					return [];
				})(c);
			};
		};
	k(R);
	var Ec = function(a, b) {
			a = oa(a);
			a = "function" === typeof a ? a() : a;
			return typeof a === b ? a : void 0;
		},
		Fc = function() {
			var a = {};
			this[3] = ((a[8] = function(b) {
				return !!oa(b);
			}),
			(a[9] = function(b) {
				b = oa(b);
				var c;
				if ((c = "function" == ra(b)))
					(b = b && b.toString && b.toString()),
						(c = "string" === typeof b && -1 != b.indexOf("[native code]"));
				return c;
			}),
			(a[10] = function() {
				return window == window.top;
			}),
			(a[6] = function(b) {
				return q(R.f().b(), parseInt(b, 10));
			}),
			(a[27] = function(b) {
				b = Ec(b, "boolean");
				return void 0 !== b ? b : void 0;
			}),
			a);
			a = {};
			this[4] = ((a[3] = function() {
				return Bb();
			}),
			(a[5] = function(b) {
				b = zc(void 0 === b ? 0 : b);
				return null != b ? b : void 0;
			}),
			(a[6] = function(b) {
				b = Ec(b, "number");
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
				b = Ec(b, "string");
				return void 0 !== b ? b : void 0;
			}),
			a);
		};
	k(Fc);
	var Gc = function() {
		var a = void 0 === a ? h : a;
		return a.ggeac || (a.ggeac = {});
	};
	var Ic = function(a) {
		D(this, a, Hc, null);
	};
	l(Ic, B);
	var Hc = [2];
	Ic.prototype.getId = function() {
		return G(this, 1, 0);
	};
	Ic.prototype.m = function() {
		return G(this, 7, 0);
	};
	var Kc = function(a) {
		D(this, a, Jc, null);
	};
	l(Kc, B);
	var Jc = [2];
	Kc.prototype.m = function() {
		return G(this, 5, 0);
	};
	var Mc = function(a) {
		D(this, a, Lc, null);
	};
	l(Mc, B);
	var S = function(a) {
		D(this, a, Nc, null);
	};
	l(S, B);
	var Lc = [1, 4, 2, 3],
		Nc = [2];
	S.prototype.m = function() {
		return G(this, 1, 0);
	};
	var Oc = [12, 13],
		Pc = function() {},
		Qc = function(a, b, c, d) {
			var e = void 0 === d ? {} : d;
			d = void 0 === e.G ? !1 : e.G;
			var f = void 0 === e.J ? {} : e.J;
			e = void 0 === e.O ? [] : e.O;
			a.a = b;
			a.i = d;
			a.g = f;
			b = {};
			a.b = ((b[c] = e), (b[4] = []), b);
			a.c = {};
			(c = Cc()) &&
				n(c.split(",") || [], function(g) {
					(g = parseInt(g, 10)) && (a.c[g] = !0);
				});
			return a;
		},
		Vc = function(a, b, c) {
			var d = [],
				e = Rc(a.a, b);
			if (e.length) {
				9 !== b && (a.a = Sc(a.a, b));
				var f = q(Oc, b);
				n(e, function(g) {
					if ((g = Tc(a, g))) {
						var m = g.getId();
						d.push(m);
						Uc(a, m, f ? 4 : c);
						var t = I(g, K, 2);
						t &&
							(f
								? n(dc(), function(qa) {
										return bc(t, qa);
								  })
								: bc(t, c));
					}
				});
			}
			return d;
		},
		Uc = function(a, b, c) {
			a.b[c] || (a.b[c] = []);
			a.b[c].push(b);
		},
		Wc = function(a, b) {
			a.a.push.apply(
				a.a,
				ca(
					va(
						p(b, function(c) {
							return new S(c);
						}),
						function(c) {
							return !q(Oc, c.m());
						}
					)
				)
			);
		},
		Tc = function(a, b) {
			var c = L.f().a;
			if (!Jb(H(b, J, 3), c)) return null;
			var d = I(b, Ic, 2),
				e = d.length * G(b, 1, 0),
				f = G(b, 6, 0);
			if (f)
				return (
					(e = zc(f)),
					null === e && (e = Math.floor(1e3 * ub(window))),
					(b = Xc(b, e)),
					!b || (c && !Jb(H(b, J, 3), c)) ? null : Yc(a, [b], 1)
				);
			d = c
				? va(d, function(g) {
						return Jb(H(g, J, 3), c);
				  })
				: d;
			return d.length
				? (b = G(b, 4, 0))
					? Zc(a, b, e, d)
					: Yc(a, d, e / 1e3)
				: null;
		},
		Zc = function(a, b, c, d) {
			var e = null != a.g[b] ? a.g[b] : 1e3;
			if (0 >= e) return null;
			d = Yc(a, d, c / e);
			a.g[b] = d ? 0 : e - c;
			return d;
		},
		Yc = function(a, b, c) {
			var d = a.c,
				e = wa(b, function(f) {
					return !!d[f.getId()];
				});
			return e ? e : a.i ? null : vb(b, c);
		},
		$c = function(a, b) {
			O(
				fc,
				function(c) {
					a.c[c] = !0;
				},
				b
			);
			O(
				hc,
				function(c, d) {
					return Vc(a, c, d);
				},
				b
			);
			O(
				ic,
				function(c) {
					return (a.b[c] || []).concat(a.b[4]);
				},
				b
			);
			O(
				rc,
				function(c) {
					return Wc(a, c);
				},
				b
			);
		};
	k(Pc);
	var Rc = function(a, b) {
			return (
				((a = wa(a, function(c) {
					return c.m() == b;
				})) &&
					I(a, Kc, 2)) ||
				[]
			);
		},
		Sc = function(a, b) {
			return va(a, function(c) {
				return c.m() != b;
			});
		},
		Xc = function(a, b) {
			var c = I(a, Ic, 2),
				d = c.length,
				e = G(a, 1, 0);
			a = G(a, 8, 0);
			var f = (b - a) % d;
			return b < a || b - a - f >= d * e - 1 ? null : c[f];
		};
	var ad = function() {
		this.a = function() {};
	};
	k(ad);
	var bd = function(a) {
		ad.f().a(a);
	};
	var ed = function(a) {
			var b = cd.f(),
				c = { G: T(211), J: T(227), O: T(226) },
				d = void 0,
				e = 2;
			d = void 0 === d ? Gc() : d;
			e = void 0 === e ? 0 : e;
			d.hasOwnProperty("init-done")
				? (P(rc, d)(
						p(I(a, S, 2), function(f) {
							return f.h;
						})
				  ),
				  P(sc, d)(
						p(I(a, K, 1), function(f) {
							return f.h;
						}),
						e
				  ),
				  b && P(tc, d)(b),
				  dd(d, e))
				: ($c(Qc(Pc.f(), I(a, S, 2), e, c), d),
				  uc(d),
				  vc(d),
				  wc(d),
				  dd(d, e),
				  bc(I(a, K, 1), e),
				  (Qb = Qb || !(!c || !c.V)),
				  bd(Fc.f()),
				  b && bd(b));
		},
		dd = function(a, b) {
			a = void 0 === a ? Gc() : a;
			b = void 0 === b ? 0 : b;
			var c = a,
				d = b;
			d = void 0 === d ? 0 : d;
			Dc(R.f(), c, d);
			c = a;
			b = void 0 === b ? 0 : b;
			yc(xc.f(), c, b);
			ad.f().a = P(tc, a);
			xc.f().a();
		};
	var fd = function(a, b, c) {
		var d = "script";
		d = void 0 === d ? "" : d;
		var e = a.createElement("link");
		try {
			e.rel = "preload";
			if (b instanceof w) var f = Da(b).toString();
			else {
				if (b instanceof x) var g = Ta(b);
				else {
					if (b instanceof x) var m = b;
					else
						(b = "object" == typeof b && b.j ? b.a() : String(b)),
							Ua.test(b) || (b = "about:invalid#zClosurez"),
							(m = new x(Ra, b));
					g = Ta(m);
				}
				f = g;
			}
			e.href = f;
		} catch (t) {
			return;
		}
		d && (e.as = d);
		c && e.setAttribute("nonce", c);
		if ((a = a.getElementsByTagName("head")[0]))
			try {
				a.appendChild(e);
			} catch (t) {}
	};
	var gd = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		hd = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		id = function(a) {
			return gd.test(a) && !hd.test(a);
		},
		jd = function(a) {
			return a.replace(/[\W]/g, function(b) {
				return "&#" + b.charCodeAt() + ";";
			});
		},
		U = h,
		kd = function(a, b) {
			a = "https://adservice" + (b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(h.location.hostname)];
			V[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(V[1]));
			return a + "?" + b.join("&");
		},
		V,
		W,
		ld = function() {
			U = h;
			V = U.googleToken = U.googleToken || {};
			var a = +new Date();
			(V[1] && V[3] > a && 0 < V[2]) ||
				((V[1] = ""), (V[2] = -1), (V[3] = -1), (V[4] = ""), (V[6] = ""));
			W = U.googleIMState = U.googleIMState || {};
			id(W[1]) || (W[1] = ".google.com");
			"array" == ra(W[5]) || (W[5] = []);
			"boolean" !== typeof W[6] && (W[6] = !1);
			"array" == ra(W[7]) || (W[7] = []);
			"number" !== typeof W[8] && (W[8] = 0);
		},
		md = function(a) {
			try {
				a();
			} catch (b) {
				h.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		od = function(a) {
			"complete" == h.document.readyState ||
			"loaded" == h.document.readyState ||
			(h.document.currentScript && h.document.currentScript.async)
				? nd(3)
				: a();
		},
		pd = 0,
		qd = {
			o: function() {
				return 0 < W[8];
			},
			B: function() {
				W[8]++;
			},
			L: function() {
				0 < W[8] && W[8]--;
			},
			M: function() {
				W[8] = 0;
			},
			s: function() {},
			P: function() {
				return !1;
			},
			H: function() {
				return W[5];
			},
			F: md
		},
		rd = {
			o: function() {
				return W[6];
			},
			B: function() {
				W[6] = !0;
			},
			L: function() {
				W[6] = !1;
			},
			M: function() {
				W[6] = !1;
			},
			s: function() {},
			P: function() {
				return ".google.com" != W[1] && 2 < ++pd;
			},
			H: function() {
				return W[7];
			},
			F: function(a) {
				od(function() {
					md(a);
				});
			}
		},
		nd = function(a) {
			if (1e-5 > Math.random()) {
				h.google_image_requests || (h.google_image_requests = []);
				var b = h.document.createElement("img");
				b.src =
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
					a;
				h.google_image_requests.push(b);
			}
		};
	qd.s = function() {
		if (!qd.o()) {
			var a = h.document,
				b = function(e) {
					e = kd("js", e);
					var f = Ab();
					fd(a, e, f);
					f = a.createElement("script");
					f.type = "text/javascript";
					f.onerror = function() {
						return h.processGoogleToken({}, 2);
					};
					e = pb(e);
					gb(f, e);
					try {
						(a.head || a.body || a.documentElement).appendChild(f), qd.B();
					} catch (g) {}
				},
				c = W[1];
			b(c);
			".google.com" != c && b(".google.com");
			b = {};
			var d = ((b.newToken = "FBT"), b);
			h.setTimeout(function() {
				return h.processGoogleToken(d, 1);
			}, 1e3);
		}
	};
	rd.s = function() {
		if (!rd.o()) {
			var a = h.document,
				b = kd("sync.js", W[1]),
				c = Ab();
			fd(a, b, c);
			b = jd(b);
			var d = hb("script"),
				e = "";
			c && (e = 'nonce="' + jd(c) + '"');
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
			od(function() {
				a.write(f);
				rd.B();
			});
		}
	};
	var sd = function(a) {
			ld();
			(V[3] >= +new Date() && V[2] >= +new Date()) || a.s();
		},
		ud = function() {
			h.processGoogleToken =
				h.processGoogleToken ||
				function(a, b) {
					return td(qd, a, b);
				};
			sd(qd);
		},
		vd = function() {
			h.processGoogleTokenSync =
				h.processGoogleTokenSync ||
				function(a, b) {
					return td(rd, a, b);
				};
			sd(rd);
		},
		td = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				g = parseInt(b.validLifetimeSecs || "", 10),
				m = b["1p_jar"] || "";
			b = b.pucrd || "";
			ld();
			1 == c ? a.M() : a.L();
			if (!d && a.P()) id(".google.com") && (W[1] = ".google.com"), a.s();
			else {
				var t = (U.googleToken = U.googleToken || {}),
					qa =
						0 == c &&
						d &&
						"string" === typeof d &&
						!e &&
						"number" === typeof f &&
						0 < f &&
						"number" === typeof g &&
						0 < g &&
						"string" === typeof m;
				e = e && !a.o() && (!(V[3] >= +new Date()) || "NT" == V[1]);
				var Jd = !(V[3] >= +new Date()) && 0 != c;
				if (qa || e || Jd)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(g = e + 1e3 * g),
						nd(c),
						(t[5] = c),
						(t[1] = d),
						(t[2] = f),
						(t[3] = g),
						(t[4] = m),
						(t[6] = b),
						ld();
				if (qa || !a.o()) {
					c = a.H();
					for (d = 0; d < c.length; d++) a.F(c[d]);
					c.length = 0;
				}
			}
		};
	var wd = function(a) {
		a = void 0 === a ? h : a;
		return (a = a.performance) && a.now ? a.now() : null;
	};
	var X = h.performance,
		xd = !!(X && X.mark && X.measure && X.clearMarks),
		yd = r(function() {
			var a;
			if ((a = xd)) (a = Cc()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
			return a;
		});
	var zd = function(a, b, c) {
			this.a = void 0 === a ? null : a;
			this.g = void 0 === b ? "jserror" : b;
			this.b = null;
			this.c = void 0 === c ? 0.01 : c;
			this.l = this.i;
		},
		Ad = function(a, b) {
			a.b = b;
		};
	zd.prototype.i = function(a, b, c, d, e) {
		c = void 0 === c ? this.c : c;
		e = void 0 === e ? this.g : e;
		if (Math.random() > c) return !1;
		(b.error && b.meta && b.id) || (b = new Ac(b, { context: a, id: e }));
		if (d || this.b) (b.meta = {}), this.b && this.b(b.meta), d && d(b.meta);
		h.google_js_errors = h.google_js_errors || [];
		h.google_js_errors.push(b);
		h.error_rep_loaded ||
			((b = h.document),
			(a = b.createElement("script")),
			gb(
				a,
				pb(
					h.location.protocol +
						"//pagead2.googlesyndication.com/pagead/js/err_rep.js"
				)
			),
			(b = b.getElementsByTagName("script")[0]) &&
				b.parentNode &&
				b.parentNode.insertBefore(a, b),
			(h.error_rep_loaded = !0));
		return !1;
	};
	var Bd = function(a, b) {
		try {
			var c = a.a && a.a.start("420", 3);
			b();
			a.a && c && a.a.a(c);
		} catch (d) {
			if (
				(a.a &&
					c &&
					(b = c) &&
					X &&
					yd() &&
					(X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
					X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
				!a.l(420, d, a.c, void 0, a.g))
			)
				throw d;
		}
	};
	var Cd = new v(u, "gpt/pubads_impl_"),
		Dd = new v(u, "https://securepubads.g.doubleclick.net/");
	var Ed = function(a) {
		if (!a.google_ltobserver) {
			var b = new a.PerformanceObserver(function(c) {
				var d = (a.google_lt_queue = a.google_lt_queue || []);
				n(c.getEntries(), function(e) {
					return d.push(e);
				});
			});
			b.observe({ entryTypes: ["longtask"] });
			a.google_ltobserver = b;
		}
	};
	var Fd = function(a) {
			var b = wd(a);
			b &&
				((b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				2048 > a.length && a.push(b));
		},
		Gd = function(a, b, c) {
			var d = window;
			return function() {
				var e = wd(),
					f = 3;
				try {
					var g = b.apply(this, arguments);
				} catch (m) {
					f = 13;
					if (c) return c(a, m), g;
					throw m;
				} finally {
					d.google_measure_js_timing &&
						e &&
						((e = {
							label: a.toString(),
							value: e,
							duration: (wd() || 0) - e,
							type: f
						}),
						(f = d.google_js_reporting_queue =
							d.google_js_reporting_queue || []),
						2048 > f.length && f.push(e));
				}
				return g;
			};
		},
		Hd = function(a, b) {
			return Gd(a, b, function(c, d) {
				new zd().i(c, d);
			});
		};
	function Y(a, b) {
		return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
	}
	var Kd = function() {
		var a = this;
		this.I = this.S = this.w = this.l = this.g = 0;
		this.K = !1;
		this.A = this.i = this.c = 0;
		this.N = 0.1 > Math.random();
		this.R = h === h.top;
		var b = document.querySelector("[data-google-query-id]");
		if ((this.a = b ? b.getAttribute("data-google-query-id") : null)) b = null;
		else {
			if ("number" !== typeof h.goog_pvsid)
				try {
					Object.defineProperty(h, "goog_pvsid", {
						value: Math.floor(Math.random() * Math.pow(2, 52))
					});
				} catch (c) {}
			b = Number(h.goog_pvsid) || -1;
		}
		this.C = b;
		this.N &&
			((b =
				"https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics" +
				(this.a ? "&qqid=" + encodeURIComponent(this.a) : Y("pvsid", this.C))),
			(b += Y("test", 1)),
			(b += "&top=" + (this.R ? 1 : 0)),
			Id(b));
		this.T = new PerformanceObserver(
			Hd(640, function(c) {
				c = ba(c.getEntries());
				for (var d = c.next(); !d.done; d = c.next()) {
					d = d.value;
					if ("layout-shift" === d.entryType) {
						var e = d;
						e.hadRecentInput ||
							(Q(241) && !(0.01 < e.value)) ||
							((a.g += Number(e.value)),
							Number(e.value) > a.l && (a.l = Number(e.value)),
							(a.w += 1));
					}
					"largest-contentful-paint" === d.entryType &&
						((e = d), (a.S = Math.floor(e.renderTime || e.loadTime)));
					"first-input" === d.entryType &&
						((e = d),
						(a.I = Number((e.processingStart - e.startTime).toFixed(3))),
						(a.K = !0));
					"longtask" === d.entryType &&
						((a.c += d.duration),
						d.duration > a.i && (a.i = d.duration),
						(a.A += 1));
				}
			})
		);
		this.D = !1;
		this.b = Hd(641, this.b.bind(this));
	};
	ka(Kd, Cb);
	var Ld = function() {
		var a = new Kd();
		a.T.observe({
			entryTypes: [
				"layout-shift",
				"largest-contentful-paint",
				"first-input",
				"longtask"
			],
			buffered: !Q(240)
		});
		document.addEventListener("unload", a.b);
		document.addEventListener("visibilitychange", a.b);
	};
	Kd.prototype.b = function() {
		var a = document;
		if (
			2 ===
				({ visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
					a.visibilityState ||
						a.webkitVisibilityState ||
						a.mozVisibilityState ||
						""
				] || 0) &&
			!this.D
		) {
			this.D = !0;
			this.T.takeRecords();
			a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
			window.LayoutShift &&
				((a += "&cls=" + this.g.toFixed(3)),
				(a += "&mls=" + this.l.toFixed(3)),
				(a += Y("nls", this.w)));
			window.LargestContentfulPaint && (a += Y("lcp", this.S));
			window.PerformanceEventTiming && this.K && (a += Y("fid", this.I));
			window.PerformanceLongTaskTiming &&
				((a += Y("cbt", this.c)),
				(a += Y("mbt", this.i)),
				(a += Y("nlt", this.A)));
			for (
				var b = 0,
					c = ba(document.getElementsByTagName("iframe")),
					d = c.next();
				!d.done;
				d = c.next()
			)
				if (
					((d = d.value),
					d.id.includes("google_ads_iframe_") || d.id.includes("aswift"))
				)
					b += 1;
			a += Y("nif", b);
			b = window.google_unique_id;
			a += Y("ifi", "number" === typeof b ? b : 0);
			b = R.f().b();
			a += "&eid=" + encodeURIComponent(b.join());
			this.N && (a += Y("test", 1));
			a += "&top=" + (this.R ? 1 : 0);
			a += this.a ? "&qqid=" + encodeURIComponent(this.a) : Y("pvsid", this.C);
			Id(a);
		}
	};
	function Id(a) {
		window.fetch(a, {
			keepalive: !0,
			credentials: "include",
			redirect: "follow",
			method: "get",
			mode: "no-cors"
		});
	}
	var Md = ["https://www.google.com"],
		Nd = void 0,
		Od = function(a) {
			this.c = Md;
			this.a = 2;
			this.b = a;
		};
	ka(Od, Cb);
	var Pd = function(a) {
		null === a.b ||
			3 <= a.a ||
			((a.a = 3),
			n(a.c, function(b) {
				a.b
					.fetch(b + "/.well-known/trust-token", {
						keepalive: !0,
						redirect: "follow",
						method: "get",
						mode: "no-cors",
						Y: { type: "srr-token-redemption", W: b, X: "none" }
					})
					.then(function(c) {
						if (!c.ok) throw Error("Network response was not ok");
						c.blob();
						a.a = 5;
					})
					.catch(function() {
						4 > a.a && (a.a = 4);
					});
			}));
	};
	var Qd = function() {
			return h.googletag || (h.googletag = {});
		},
		Rd = function(a, b) {
			var c = Qd();
			c.hasOwnProperty(a) || (c[a] = b);
		},
		Sd = function(a, b) {
			a.addEventListener
				? a.addEventListener("load", b, !1)
				: a.attachEvent && a.attachEvent("onload", b);
		};
	var Z = {
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
		228: "//www.googletagservices.com/pubconsole/"
	};
	Z[6] = (function(a, b) {
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
	Z[49] = new Date().getTime();
	Z[36] = /^true$/.test("false");
	Z[148] = Pb;
	Z[221] = /^true$/.test("");
	Z[204] = zb("{{MOD}}", -1);
	var Td = function() {
		ua(this, Z);
	};
	k(Td);
	var T = function(a) {
			return Td.f()[a];
		},
		Ud = Qd(),
		Vd = Td.f();
	ua(Vd, Ud._vars_);
	Ud._vars_ = Vd;
	var Wd = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var Xd = (function(a, b) {
			var c = b || Wd;
			return function() {
				var d = this || h;
				d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
				var e =
					(Object.prototype.hasOwnProperty.call(a, sa) && a[sa]) ||
					(a[sa] = ++ta);
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
		Yd = function() {
			return 0 === Xd(T(172));
		};
	var Zd = function() {
		return zb("9") || 0;
	};
	Rd("getVersion", function() {
		return "2020041605";
	});
	var cd = function() {
		var a = {};
		this[3] = ((a[3] = Yd),
		(a[2] = T(36)),
		(a[17] = function(b) {
			for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
			d = String;
			var e = void 0 === e ? window : e;
			if ((e = (e = e.location.href.match(rb)[3] || null) ? decodeURI(e) : e)) {
				var f = e.length;
				if (0 == f) e = 0;
				else {
					for (var g = 305419896, m = 0; m < f; m++)
						g ^= ((g << 5) + (g >> 2) + e.charCodeAt(m)) & 4294967295;
					e = 0 < g ? g : 4294967296 + g;
				}
			} else e = null;
			return q(c, d(e));
		}),
		(a[21] = function() {
			return T(148);
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return T(204);
		}),
		(a[4] = Zd),
		a);
		this[5] = {};
	};
	k(cd);
	var $d = [],
		ae = function(a) {
			var b = new Mc(T(246));
			a = new Mc(a || $d);
			if (!I(b, K, 1).length && I(a, K, 1).length) {
				var c = I(a, K, 1);
				nb(b, 1, c);
			}
			!I(b, S, 2).length &&
				I(a, S, 2).length &&
				((a = I(a, S, 2)), nb(b, 2, a));
			ed(b);
		};
	var be = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		ce = function() {
			var a = [Dd, Cd, new v(u, "2020041605"), new v(u, ".js")];
			for (var b = "", c = 0; c < a.length; c++) b += Aa(a[c]);
			a = new w(Ba, b);
			var d = void 0 === d ? 0 : d;
			(d = xc.f().c(24, d))
				? ((d = String(d)),
				  (a = Ea.exec(Da(a).toString())),
				  (b = a[3] || ""),
				  (d = new w(Ba, a[1] + Fa("?", a[2] || "", d) + Fa("#", b, void 0))))
				: (d = a);
			return d;
		},
		de = function(a, b, c) {
			var d;
			if (!(d = a.currentScript))
				a: {
					if ((a = a.scripts))
						for (d = 0; d < a.length; d++) {
							var e = a[d];
							if (-1 < e.src.indexOf("/tag/js/gpt")) {
								d = e;
								break a;
							}
						}
					d = null;
				}
			a = d;
			Td.f()[172] = a;
			new ae(b);
			R.f().a(12);
			R.f().a(5);
			Q(200) || Q(220) || ((b = T(150)), ld(), id(b) && (W[1] = b));
			Q(312) &&
				(void 0 === Nd &&
					(document.hasTrustToken ? (Nd = new Od(c)) : (Nd = null)),
				(c = Nd),
				c && Pd(c));
		},
		ee = function(a, b, c) {
			var d = Qd();
			a = a || d.fifWin || window;
			b = b || a.document;
			var e = d.fifWin ? window : a;
			Rd("cmd", []);
			if (d.evalScripts) d.evalScripts();
			else {
				de(b, c, a);
				try {
					a.PerformanceObserver &&
						(a.PerformanceLongTaskTiming && Ed(a),
						Q(203) &&
							!window.google_plmetrics &&
							(Ld(), (window.google_plmetrics = !0)));
				} catch (t) {}
				Fd(a);
				a = ce();
				c = Q(200) || Q(239);
				if (be(b)) {
					var f = "gpt-impl-" + Math.random();
					try {
						fb(b, cb(a, { id: f, nonce: na() }));
					} catch (t) {}
					b.getElementById(f) && ((d._loadStarted_ = !0), c || vd());
				}
				if (!d._loadStarted_) {
					c || ud();
					b = d.fifWin ? e.document : b;
					var g = b.createElement("script");
					gb(g, a);
					g.async = !0;
					var m = b.head || b.body || b.documentElement;
					"complete" !== e.document.readyState && d.fifWin
						? Sd(e, function() {
								return void m.appendChild(g);
						  })
						: m.appendChild(g);
					d._loadStarted_ = !0;
				}
			}
		};
	var fe;
	a: {
		try {
			if ("array" == ra(E)) {
				fe = E;
				break a;
			}
		} catch (a) {}
		fe = [];
	}
	(function(a, b, c) {
		var d = new zd(null, "gpt_exception", 0.01);
		Ad(d, function(e) {
			e.methodId = 420;
		});
		Bd(d, function() {
			return ee(a, b, c);
		});
	})(void 0, void 0, fe);
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
	[
		[null, 13, null, [null, 1]],
		[36, null, null, [1]],
		[297, null, null, [1]],
		[null, 7, null, [null, 0.1]],
		[167, null, null, [1]],
		[20, null, null, [], [[[1, [[4, null, 1]]], [1]]]],
		[130, null, null, [1]],
		[252, null, null, [1]],
		[213, null, null, [1]],
		[35, null, null, [1]],
		[null, 15, null, [null, 2]],
		[42, null, null, [1]],
		[258, null, null, [1]],
		[156, null, null, [1]],
		[157, null, null, [1]],
		[8, null, null, [1]],
		[134, null, null, [1]],
		[55, null, null, [1]],
		[277, null, null, [1]],
		[197, null, null, [1]],
		[null, 8, null, [null, -1]],
		[
			237,
			null,
			null,
			[],
			[[[4, null, 8, null, null, null, null, ["googletag.fifWin"]], [1]]]
		],
		[null, 28, null, [null, 0.01]],
		[139, null, null, [1]],
		[199, null, null, [1]],
		[201, null, null, [1]],
		[null, null, 2, [null, null, "1-0-37"]],
		[215, null, null, [1]],
		[null, 39, null, [null, 72]],
		[null, 38, null, [null, 24]],
		[null, 40, null, [null, 5]],
		[null, 33, null, [null, 250]],
		[269, null, null, [1]],
		[261, null, null, [1]],
		[272, null, null, [1]],
		[221, null, null, [1]],
		[300, null, null, [1]],
		[288, null, null, [1]],
		[299, null, null, [1]],
		[
			238,
			null,
			null,
			[],
			[[[4, null, 8, null, null, null, null, ["googletag.fifWin"]], [1]]]
		],
		[null, 32, null, [null, 20]]
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
						[676982961, [[212, null, null, [1]]]],
						[676982996, [[null, 7, null, [null, 1]]]]
					]
				],
				[
					null,
					[
						[44714835, [[null, 7, null, [null, 1]], [212, null, null, [1]]]],
						[44714836, [[null, 7, null, [null, 1]], [212, null, null, [1]]]]
					]
				],
				[null, [[44717978], [676982681]]],
				[null, [[44718034]]],
				[
					null,
					[
						[21063927],
						[21063928, [[null, 16, null, [null, 500]]]],
						[21063929, [[null, 16, null, [null, 500]]]],
						[21063930, [[null, 16, null, [null, 750]]]],
						[21063931, [[null, 16, null, [null, 1000]]]],
						[21063932, [[null, 17, null, [null, 50]]]],
						[21063933, [[null, 17, null, [null, 100]]]],
						[21063934, [[null, 17, null, [null, 150]]]],
						[21063935, [[null, 17, null, [null, 200]]]],
						[21063936, [[null, 18, null, [null, 1]]]],
						[21063937, [[null, 18, null, [null, 250]]]],
						[21063938, [[null, 18, null, [null, 500]]]],
						[21063939, [[null, 18, null, [null, 750]]]],
						[21063940, [[null, 18, null, [null, 1000]]]]
					]
				],
				[
					null,
					[
						[21063941],
						[21063942, [[null, 16, null, [null, 250]]]],
						[21063943, [[null, 16, null, [null, 500]]]],
						[21063944, [[null, 16, null, [null, 750]]]],
						[21063945, [[null, 16, null, [null, 1000]]]],
						[21063946, [[null, 17, null, [null, 50]]]],
						[21063947, [[null, 17, null, [null, 100]]]],
						[21063948, [[null, 17, null, [null, 150]]]],
						[21063949, [[null, 17, null, [null, 200]]]],
						[21063950, [[null, 18, null, [null, 250]]]],
						[21063951, [[null, 18, null, [null, 500]]]],
						[21063952, [[null, 18, null, [null, 750]]]],
						[21063953, [[null, 18, null, [null, 1000]]]]
					]
				],
				[null, [[21063962], [21063963, [[null, 18, null, [null, 1]]]]]],
				[null, [[21064296, [[150, null, null, [1]]]]]],
				[
					null,
					[
						[21064500],
						[21064501, [[136, null, null, [1]]]],
						[21064502, [[136, null, null, [1]], [137, null, null, [1]]]]
					]
				],
				[null, [[21065147, [[null, 32, null, [null, 3]]]]]],
				[
					null,
					[
						[21065571],
						[21065572, [[74, null, null, [1]], [198, null, null, [1]]]]
					]
				],
				[
					null,
					[
						[21065573],
						[21065574, [[74, null, null, [1]], [198, null, null, [1]]]]
					]
				],
				[
					null,
					[
						[21065693],
						[21065694],
						[21065695],
						[21065696, [[263, null, null, [1]]]],
						[21065697, [[267, null, null, [1]]]],
						[21065698, [[286, null, null, [1]]]]
					]
				]
			]
		],
		[
			3,
			[
				[null, [[44714834]]],
				[null, [[676982863], [676982882]]],
				[null, [[676982960], [676982994], [676982998]]],
				[null, [[676982975], [676982980]]],
				[null, [[1337, [[82, null, null, [1]], [188, null, null, [1]]]]]],
				[5, [[20194812, [[20, null, null, [1]]]], [20194813]], null, 3],
				[
					500,
					[
						[21060610],
						[
							21060611,
							[
								[77, null, null, [1]],
								[78, null, null, [1]],
								[85, null, null, [1]],
								[80, null, null, [1]],
								[76, null, null, [1]]
							]
						]
					],
					[4, null, 6, null, null, null, null, ["21061508"]]
				],
				[
					500,
					[[21060697], [21060698, [[87, null, null, [1]]]]],
					[
						2,
						[
							[4, null, 6, null, null, null, null, ["21061508"]],
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
							[4, null, 6, null, null, null, null, ["21061508"]],
							[4, null, 9, null, null, null, null, ["requestAnimationFrame"]]
						]
					]
				],
				[
					100,
					[[21061545], [21061546, [[79, null, null, [1]]]]],
					[
						2,
						[
							[4, null, 6, null, null, null, null, ["21061508"]],
							[4, null, 8, null, null, null, null, ["google_ltobserver"]]
						]
					]
				],
				[
					50,
					[[21061999], [21062000, [[81, null, null, [1]]]]],
					[
						2,
						[[4, null, 6, null, null, null, null, ["21061508"]], [4, null, 10]]
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
					10,
					[
						[21062796],
						[21062797, null, [4, null, 8, null, null, null, null, ["Map"]]]
					]
				],
				[50, [[21062832], [21062833, [[89, null, null, [1]]]]], null, 12],
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
				[10, [[21063204], [21063205, [[47, null, null, [1]]]]]],
				[null, [[21063635], [21063636, [[104, null, null, [1]]]]]],
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
				[
					5,
					[
						[21064623, [[98, null, null, [1]]]],
						[21064624, [[98, null, null, [1]]]]
					]
				],
				[50, [[21064712], [21064713, [[229, null, null, [1]]]]], null, 20],
				[1, [[21064758], [21064759, [[206, null, null, [1]]]]]],
				[10, [[21065112], [21065113, [[162, null, null, [1]]]]]],
				[10, [[21065138], [21065139, [[148, null, null, [1]]]]]],
				[
					1,
					[
						[21065185],
						[21065186, [[143, null, null, [1]], [292, null, null, [1]]]],
						[
							21065187,
							[
								[143, null, null, [1]],
								[292, null, null, [1]],
								[null, 41, null, [null, 2]]
							]
						]
					],
					null,
					20
				],
				[
					null,
					[
						[21065197],
						[
							21065198,
							[[null, null, null, [null, null, null, ["v", "1-0-37"]], null, 1]]
						],
						[21065199, [[null, null, 2, [null, null, "1-0-37"]]]]
					]
				],
				[50, [[21065202], [21065203, [[null, 32, null, [null, 5]]]]]],
				[10, [[21065238], [21065239, [[250, null, null, [1]]]]]],
				[1, [[21065352], [21065353, [[123, null, null, [1]]]]]],
				[null, [[21065388], [21065389, [[54, null, null, [1]]]]]],
				[50, [[21065392], [21065393, [[276, null, null, [1]]]]]],
				[50, [[21065401], [21065402, [[280, null, null, [1]]]]]],
				[
					10,
					[
						[21065512],
						[21065513, [[292, null, null, [1]]]],
						[21065514, [[293, null, null, [1]]]]
					]
				],
				[50, [[21065516], [21065517, [[49, null, null, [1]]]]]],
				[10, [[21065558], [21065559]]],
				[
					10,
					[
						[21065614],
						[21065615, [[null, 45, null, [null, 0.1]], [291, null, null, [1]]]],
						[
							21065616,
							[[null, 45, null, [null, 0.05]], [291, null, null, [1]]]
						],
						[
							21065617,
							[[null, 45, null, [null, 0.02]], [291, null, null, [1]]]
						],
						[21065620, [[null, 45, null, [null, 0.01]], [291, null, null, [1]]]]
					]
				],
				[
					10,
					[
						[21065636],
						[21065637, [[246, null, null, [1]]]],
						[21065638, [[287, null, null, [1]], [253, null, null, [1]]]],
						[21065639, [[242, null, null, [1]], [253, null, null, [1]]]],
						[
							21065640,
							[
								[298, null, null, [1]],
								[287, null, null, [1]],
								[242, null, null, [1]],
								[253, null, null, [1]]
							]
						],
						[
							21065641,
							[
								[303, null, null, [1]],
								[287, null, null, [1]],
								[242, null, null, [1]]
							]
						]
					]
				],
				[
					10,
					[
						[21065733, [[229, null, null, [1]]]],
						[21065734, [[275, null, null, [1]], [229, null, null, [1]]]],
						[21065735, [[296, null, null, [1]], [229, null, null, [1]]]]
					],
					null,
					20
				],
				[50, [[21065782], [21065783, [[315, null, null, [1]]]]]],
				[
					1,
					[
						[
							21065868,
							[[null, 47, null, [null, 5]], [null, 46, null, [null, 1]]]
						],
						[21065869],
						[
							21065870,
							[[null, 47, null, [null, 1]], [null, 46, null, [null, 1]]]
						],
						[
							21065871,
							[[null, 47, null, [null, 1]], [null, 46, null, [null, 2]]]
						],
						[
							21065872,
							[[null, 47, null, [null, 10]], [null, 46, null, [null, 1]]]
						]
					]
				],
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
			5,
			[
				[
					10,
					[
						[21061507],
						[21061508, [[83, null, null, [1]], [84, null, null, [1]]]]
					]
				],
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
					1000,
					[
						[
							21064355,
							[[89, null, null, [1]]],
							[12, null, null, null, 3, null, "googPreventMultipleDisplay"]
						]
					],
					null,
					12
				],
				[
					1,
					[
						[21064823],
						[21064824, [[200, null, null, [1]]]],
						[21064825, [[220, null, null, [1]]]],
						[21064826, [[239, null, null, [1]]]]
					]
				],
				[
					10,
					[[21065645], [21065646, [[305, null, null, [1]]]]],
					[4, null, 9, null, null, null, null, ["window.fetch"]]
				],
				[
					1000,
					[
						[
							21065889,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21065889]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21065889]]
							],
							[6, null, null, 4, null, 6]
						],
						[
							21065890,
							[
								[null, 7, null, [null, 1]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]]
							],
							[6, null, null, 4, null, 7]
						]
					],
					[4, null, 3],
					1
				],
				[
					1000,
					[
						[
							21065893,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21065893]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21065893]]
							],
							[6, null, null, 4, null, 2]
						],
						[
							21065894,
							[
								[null, 7, null, [null, 1]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]]
							],
							[6, null, null, 4, null, 3]
						]
					],
					[4, null, 3],
					1
				],
				[
					1000,
					[
						[
							21065899,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21065899]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21065899]]
							],
							[6, null, null, 4, null, 4]
						],
						[
							21065900,
							[
								[null, 7, null, [null, 1]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]]
							],
							[6, null, null, 4, null, 5]
						]
					],
					[4, null, 3],
					1
				],
				[
					1000,
					[
						[
							21065901,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21065901]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21065901]]
							],
							[6, null, null, 4, null, 8]
						],
						[
							21065902,
							[
								[null, 7, null, [null, 1]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]]
							],
							[6, null, null, 4, null, 9]
						]
					],
					[4, null, 3],
					1
				]
			]
		],
		[
			6,
			[
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
				],
				[
					1000,
					[
						[
							21065410,
							null,
							[
								2,
								[
									[1, [[4, null, 12]]],
									[4, null, 6, null, null, null, null, ["21065185"]]
								]
							]
						],
						[
							21065411,
							null,
							[
								2,
								[
									[1, [[4, null, 12]]],
									[4, null, 6, null, null, null, null, ["21065186"]]
								]
							]
						],
						[
							21065412,
							null,
							[
								2,
								[
									[1, [[4, null, 12]]],
									[4, null, 6, null, null, null, null, ["21065187"]]
								]
							]
						]
					],
					null,
					20
				],
				[
					1000,
					[
						[
							21065413,
							null,
							[
								2,
								[
									[4, null, 12],
									[4, null, 6, null, null, null, null, ["21065185"]]
								]
							]
						],
						[
							21065414,
							null,
							[
								2,
								[
									[4, null, 12],
									[4, null, 6, null, null, null, null, ["21065186"]]
								]
							]
						],
						[
							21065415,
							null,
							[
								2,
								[
									[4, null, 12],
									[4, null, 6, null, null, null, null, ["21065187"]]
								]
							]
						]
					],
					null,
					20
				],
				[
					1000,
					[
						[
							21065416,
							null,
							[
								2,
								[
									[4, null, 10],
									[4, null, 6, null, null, null, null, ["21065185"]]
								]
							]
						],
						[
							21065417,
							null,
							[
								2,
								[
									[4, null, 10],
									[4, null, 6, null, null, null, null, ["21065186"]]
								]
							]
						],
						[
							21065418,
							null,
							[
								2,
								[
									[4, null, 10],
									[4, null, 6, null, null, null, null, ["21065187"]]
								]
							]
						]
					],
					null,
					20
				],
				[
					1000,
					[
						[
							21065440,
							null,
							[
								2,
								[
									[1, [[4, null, 10]]],
									[4, null, 6, null, null, null, null, ["21065185"]]
								]
							]
						],
						[
							21065441,
							null,
							[
								2,
								[
									[1, [[4, null, 10]]],
									[4, null, 6, null, null, null, null, ["21065186"]]
								]
							]
						],
						[
							21065442,
							null,
							[
								2,
								[
									[1, [[4, null, 10]]],
									[4, null, 6, null, null, null, null, ["21065187"]]
								]
							]
						]
					],
					null,
					20
				]
			]
		],
		[
			13,
			[
				[
					500,
					[[21065350], [21065351]],
					[
						2,
						[
							[
								3,
								[
									[4, null, 6, null, null, null, null, ["21061508"]],
									[4, null, 6, null, null, null, null, ["21060549"]]
								]
							],
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
				]
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
				[1, [[21065755], [21065756, [[312, null, null, [1]]]]], null, 21],
				[
					1,
					[[21065757], [21065758, [[312, null, null, [1]]]]],
					[4, null, 9, null, null, null, null, ["hasTrustToken"]],
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
				[50, [[44716866], [44716867, [[314, null, null, [1]]]]]]
			]
		]
	]
]));
