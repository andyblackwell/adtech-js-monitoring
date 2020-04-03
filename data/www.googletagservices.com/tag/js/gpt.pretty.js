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
		qa = function(a) {
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
	var p = function(a, b) {
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
		q = function(a, b) {
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
		r = function(a, b) {
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
	var t = function(a) {
			var b = !1,
				c;
			return function() {
				b || ((c = a()), (b = !0));
				return c;
			};
		},
		ya = function(a) {
			var b = a;
			return function() {
				if (b) {
					var c = b;
					b = null;
					c();
				}
			};
		};
	var za = {
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
	var u = function(a, b) {
		this.b = (a === Aa && b) || "";
		this.c = Ba;
	};
	u.prototype.j = !0;
	u.prototype.a = function() {
		return this.b;
	};
	var Ca = function(a) {
			return a instanceof u && a.constructor === u && a.c === Ba
				? a.b
				: "type_error:Const";
		},
		v = function(a) {
			return new u(Aa, a);
		},
		Ba = {},
		Aa = {};
	var w = function(a, b) {
		this.c = (a === Da && b) || "";
		this.g = Ea;
	};
	w.prototype.j = !0;
	w.prototype.a = function() {
		return this.c.toString();
	};
	w.prototype.u = !0;
	w.prototype.b = function() {
		return 1;
	};
	var Ha = function(a, b) {
			a = Fa.exec(x(a).toString());
			var c = a[3] || "";
			return new w(Da, a[1] + Ga("?", a[2] || "", b) + Ga("#", c, void 0));
		},
		x = function(a) {
			return a instanceof w && a.constructor === w && a.g === Ea
				? a.c
				: "type_error:TrustedResourceUrl";
		},
		Fa = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		Ia = function(a) {
			for (var b = "", c = 0; c < a.length; c++) b += Ca(a[c]);
			return new w(Da, b);
		},
		Ea = {},
		Ga = function(a, b, c) {
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
		Da = {};
	var Ja = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		Ra = function(a) {
			if (!Ka.test(a)) return a;
			-1 != a.indexOf("&") && (a = a.replace(La, "&amp;"));
			-1 != a.indexOf("<") && (a = a.replace(Ma, "&lt;"));
			-1 != a.indexOf(">") && (a = a.replace(Na, "&gt;"));
			-1 != a.indexOf('"') && (a = a.replace(Oa, "&quot;"));
			-1 != a.indexOf("'") && (a = a.replace(Pa, "&#39;"));
			-1 != a.indexOf("\x00") && (a = a.replace(Qa, "&#0;"));
			return a;
		},
		La = /&/g,
		Ma = /</g,
		Na = />/g,
		Oa = /"/g,
		Pa = /'/g,
		Qa = /\x00/g,
		Ka = /[\x00&<>"']/,
		Ta = function(a, b) {
			var c = 0;
			a = Ja(String(a)).split(".");
			b = Ja(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c =
						Sa(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == g[1].length ? 0 : parseInt(g[1], 10)
						) ||
						Sa(0 == f[2].length, 0 == g[2].length) ||
						Sa(f[2], g[2]);
					f = f[3];
					g = g[3];
				} while (0 == c);
			}
			return c;
		},
		Sa = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var y = function(a, b) {
		this.c = (a === Ua && b) || "";
		this.g = Va;
	};
	y.prototype.j = !0;
	y.prototype.a = function() {
		return this.c.toString();
	};
	y.prototype.u = !0;
	y.prototype.b = function() {
		return 1;
	};
	var Wa = function(a) {
			return a instanceof y && a.constructor === y && a.g === Va
				? a.c
				: "type_error:SafeUrl";
		},
		Xa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		Va = {},
		Ua = {};
	var z;
	a: {
		var Ya = h.navigator;
		if (Ya) {
			var Za = Ya.userAgent;
			if (Za) {
				z = Za;
				break a;
			}
		}
		z = "";
	}
	var A = function() {
		this.c = "";
		this.i = $a;
		this.g = null;
	};
	A.prototype.u = !0;
	A.prototype.b = function() {
		return this.g;
	};
	A.prototype.j = !0;
	A.prototype.a = function() {
		return this.c.toString();
	};
	var ab = function(a) {
			return a instanceof A && a.constructor === A && a.i === $a
				? a.c
				: "type_error:SafeHtml";
		},
		bb = function(a) {
			if (a instanceof A) return a;
			var b = "object" == typeof a,
				c = null;
			b && a.u && (c = a.b());
			a = Ra(b && a.j ? a.a() : String(a));
			return B(a, c);
		},
		cb = /^[a-zA-Z0-9-]+$/,
		db = {
			action: !0,
			cite: !0,
			data: !0,
			formaction: !0,
			href: !0,
			manifest: !0,
			poster: !0,
			src: !0
		},
		fb = function(a, b) {
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
					if (!cb.test(g)) throw Error("");
					d = a[g];
					if (null != d) {
						c = g;
						if (d instanceof u) d = Ca(d);
						else {
							if ("style" == c.toLowerCase()) throw Error("");
							if (/^on/i.test(c)) throw Error("");
							if (c.toLowerCase() in db)
								if (d instanceof w) d = x(d).toString();
								else if (d instanceof y) d = Wa(d);
								else if ("string" === typeof d)
									d instanceof y ||
										((d = "object" == typeof d && d.j ? d.a() : String(d)),
										Xa.test(d) || (d = "about:invalid#zClosurez"),
										(d = new y(Ua, d))),
										(d = d.a());
								else throw Error("");
						}
						d.j && (d = d.a());
						c = c + '="' + Ra(String(d)) + '"';
						e += " " + c;
					}
				}
			var g = "<script" + e;
			e = void 0;
			null == e ? (e = []) : Array.isArray(e) || (e = [e]);
			!0 === za.script
				? (g += ">")
				: ((b = eb(e)),
				  (g += ">" + ab(b).toString() + "\x3c/script>"),
				  (b = b.b()));
			(a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
			return B(g, b);
		},
		hb = function(a) {
			var b = bb(gb),
				c = b.b(),
				d = [],
				e = function(f) {
					Array.isArray(f)
						? p(f, e)
						: ((f = bb(f)),
						  d.push(ab(f).toString()),
						  (f = f.b()),
						  0 == c ? (c = f) : 0 != f && c != f && (c = null));
				};
			p(a, e);
			return B(d.join(ab(b).toString()), c);
		},
		eb = function(a) {
			return hb(Array.prototype.slice.call(arguments));
		},
		$a = {},
		B = function(a, b) {
			var c = new A();
			c.c = a;
			c.g = b;
			return c;
		};
	B("<!DOCTYPE html>", 0);
	var gb = B("", 0);
	B("<br>", 0);
	var ib = function(a, b) {
			a.write(ab(b));
		},
		jb = function(a, b) {
			a.src = x(b);
			(b = na()) && a.setAttribute("nonce", b);
		};
	var kb = function(a) {
		kb[" "](a);
		return a;
	};
	kb[" "] = pa;
	var C = function() {},
		lb = "function" == typeof Uint8Array,
		F = function(a, b, c, d) {
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
							(lb && e instanceof Uint8Array)
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
							? ((e += a.c), (a.h[e] = a.h[e] || D))
							: (mb(a), (a.b[e] = a.b[e] || D));
			if (d && d.length) for (b = 0; b < d.length; b++) nb(a, d[b]);
		},
		D = [],
		mb = function(a) {
			var b = a.g + a.c;
			a.h[b] || (a.b = a.h[b] = {});
		},
		G = function(a, b) {
			if (b < a.g) {
				b += a.c;
				var c = a.h[b];
				return c === D ? (a.h[b] = []) : c;
			}
			if (a.b) return (c = a.b[b]), c === D ? (a.b[b] = []) : c;
		},
		H = function(a, b, c) {
			a = G(a, b);
			return null == a ? c : a;
		},
		ob = function(a, b) {
			a = G(a, b);
			a = null == a ? a : +a;
			return null == a ? 0 : a;
		},
		pb = function(a, b, c) {
			b < a.g ? (a.h[b + a.c] = c) : (mb(a), (a.b[b] = c));
		},
		nb = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					g = G(a, f);
				null != g && ((c = f), (d = g), pb(a, f, void 0));
			}
			return c ? (pb(a, c, d), c) : 0;
		},
		I = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				var d = G(a, c);
				d && (a.a[c] = new b(d));
			}
			return a.a[c];
		},
		J = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				for (var d = G(a, c), e = [], f = 0; f < d.length; f++)
					e[f] = new b(d[f]);
				a.a[c] = e;
			}
			b = a.a[c];
			b == D && (b = a.a[c] = []);
			return b;
		},
		qb = function(a, b, c) {
			a.a || (a.a = {});
			c = c || [];
			for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].h;
			a.a[b] = c;
			pb(a, b, d);
		};
	var rb = function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1);
	};
	var sb = function() {
		var a = document;
		var b = "IFRAME";
		"application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
		return a.createElement(b);
	};
	var ub = function(a) {
			tb();
			return new w(Da, a);
		},
		tb = pa;
	var vb = function() {
		return (
			-1 != z.indexOf("iPad") ||
			(-1 != z.indexOf("Android") && -1 == z.indexOf("Mobile")) ||
			-1 != z.indexOf("Silk")
		);
	};
	var wb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
	var Ab = function(a, b) {
			if (!xb() && !yb()) {
				var c = Math.random();
				if (c < b) return (c = zb(h)), a[Math.floor(c * a.length)];
			}
			return null;
		},
		zb = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		Bb = function(a, b) {
			if (a)
				for (var c in a)
					Object.prototype.hasOwnProperty.call(a, c) &&
						b.call(void 0, a[c], c, a);
		},
		yb = t(function() {
			a: {
				var a = [
					"Google Web Preview",
					"Mediapartners-Google",
					"Google-Read-Aloud",
					"Google-Adwords"
				];
				for (
					var b = Cb,
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
		xb = t(function() {
			return Cb("MSIE");
		}),
		Cb = function(a) {
			return -1 != z.indexOf(a);
		},
		Db = /^(-?[0-9.]{1,30})$/,
		Eb = function(a, b) {
			return Db.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		Fb = function() {
			try {
				return na();
			} catch (a) {}
		},
		Gb = t(function() {
			return vb() ||
				(-1 == z.indexOf("iPod") &&
					-1 == z.indexOf("iPhone") &&
					-1 == z.indexOf("Android") &&
					-1 == z.indexOf("IEMobile"))
				? vb()
					? 1
					: 0
				: 2;
		});
	var K = function(a) {
		F(this, a, Hb, Ib);
	};
	l(K, C);
	var Hb = [2, 8],
		Ib = [[3, 4, 5], [6, 7]];
	var Jb = function(a) {
			return null != a ? !a : a;
		},
		Kb = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		Mb = function(a, b) {
			var c = J(a, K, 2);
			if (!c.length) return Lb(a, b);
			a = H(a, 1, 0);
			if (1 == a) return Jb(Mb(c[0], b));
			c = q(c, function(d) {
				return function() {
					return Mb(d, b);
				};
			});
			switch (a) {
				case 2:
					return Kb(c, !1);
				case 3:
					return Kb(c, !0);
			}
		},
		Lb = function(a, b) {
			var c = nb(a, Ib[0]);
			a: {
				switch (c) {
					case 3:
						var d = H(a, 3, 0);
						break a;
					case 4:
						d = H(a, 4, 0);
						break a;
					case 5:
						d = H(a, 5, 0);
						break a;
				}
				d = void 0;
			}
			if (d && (b = (b = b[c]) && b[d])) {
				try {
					var e = b.apply(null, G(a, 8));
				} catch (f) {
					return;
				}
				b = H(a, 1, 0);
				if (4 == b) return !!e;
				d = null != e;
				if (5 == b) return d;
				if (12 == b) a = H(a, 7, "");
				else
					a: {
						switch (c) {
							case 4:
								a = ob(a, 6);
								break a;
							case 5:
								a = H(a, 7, "");
								break a;
						}
						a = void 0;
					}
				if (null != a) {
					if (6 == b) return e === a;
					if (9 == b) return 0 == Ta(e, a);
					if (d)
						switch (b) {
							case 7:
								return e < a;
							case 8:
								return e > a;
							case 12:
								return new RegExp(a).test(e);
							case 10:
								return -1 == Ta(e, a);
							case 11:
								return 1 == Ta(e, a);
						}
				}
			}
		},
		Nb = function(a, b) {
			return !a || !(!b || !Mb(a, b));
		};
	var Pb = function(a) {
		F(this, a, Ob, null);
	};
	l(Pb, C);
	var Ob = [4];
	var L = function(a) {
		F(this, a, Qb, Rb);
	};
	l(L, C);
	var Sb = function(a) {
		F(this, a, null, null);
	};
	l(Sb, C);
	var Qb = [5],
		Rb = [[1, 2, 3, 6, 7]];
	var M = function() {
		var a = {};
		this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
	};
	k(M);
	var Tb = /^true$/.test("false");
	var Ub = Tb,
		Vb = function(a, b) {
			switch (b) {
				case 1:
					return H(a, 1, 0);
				case 2:
					return H(a, 2, 0);
				case 3:
					return H(a, 3, 0);
				case 6:
					return H(a, 6, 0);
				default:
					return null;
			}
		},
		Wb = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return (a = G(a, 1)), (a = null == a ? a : !!a), null == a ? !1 : a;
				case 7:
					return H(a, 3, "");
				case 2:
					return ob(a, 2);
				case 3:
					return H(a, 3, "");
				case 6:
					return G(a, 4);
				default:
					return null;
			}
		},
		Xb = t(function() {
			if (!Ub) return {};
			try {
				var a =
					window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
				if (a) return JSON.parse(a);
			} catch (b) {}
			return {};
		}),
		$b = function(a, b, c, d) {
			d = void 0 === d ? 0 : d;
			var e = Xb();
			if (e[a] && null != e[a][b]) return e[a][b];
			b = Yb(d)[a][b];
			if (!b) return c;
			b = new L(b);
			b = Zb(b);
			a = Wb(b, a);
			return null != a ? a : c;
		},
		Zb = function(a) {
			var b = M.f().a;
			if (b) {
				var c = xa(J(a, Sb, 5), function(d) {
					return Nb(I(d, K, 1), b);
				});
				if (c) return I(c, Pb, 2);
			}
			return I(a, Pb, 4);
		},
		ac = function() {
			this.a = {};
			this.b = [];
		};
	k(ac);
	var bc = function(a, b, c) {
			return !!$b(1, a, void 0 === b ? !1 : b, c);
		},
		cc = function(a, b, c) {
			b = void 0 === b ? 0 : b;
			a = Number($b(2, a, b, c));
			return isNaN(a) ? b : a;
		},
		dc = function(a, b, c) {
			return $b(3, a, void 0 === b ? "" : b, c);
		},
		ec = function(a, b, c) {
			b = void 0 === b ? [] : b;
			return $b(6, a, b, c);
		},
		Yb = function(a) {
			var b = {};
			return (
				ac.f().a[a] ||
				(ac.f().a[a] = ((b[1] = {}), (b[2] = {}), (b[3] = {}), (b[6] = {}), b))
			);
		},
		fc = function(a, b) {
			var c = Yb(b);
			Bb(a, function(d, e) {
				return Bb(d, function(f, g) {
					return (c[e][g] = f);
				});
			});
		},
		gc = function(a, b) {
			var c = Yb(b);
			p(a, function(d) {
				var e = nb(d, Rb[0]),
					f = Vb(d, e);
				f && (c[e][f] = d.h);
			});
		},
		hc = function(a, b) {
			var c = Yb(b);
			p(a, function(d) {
				var e = new L(d),
					f = nb(e, Rb[0]);
				(e = Vb(e, f)) && (c[f][e] || (c[f][e] = d));
			});
		},
		ic = function() {
			return q(Object.keys(ac.f().a), function(a) {
				return Number(a);
			});
		},
		jc = function(a) {
			r(ac.f().b, a) || fc(Yb(4), a);
		};
	var N = function(a) {
			this.methodName = a;
		},
		kc = new N(1),
		lc = new N(15),
		mc = new N(2),
		nc = new N(3),
		oc = new N(4),
		pc = new N(5),
		qc = new N(6),
		rc = new N(7),
		sc = new N(8),
		tc = new N(9),
		uc = new N(10),
		vc = new N(11),
		wc = new N(12),
		xc = new N(13),
		yc = new N(14),
		O = function(a, b, c) {
			c.hasOwnProperty(a.methodName) ||
				Object.defineProperty(c, String(a.methodName), { value: b });
		},
		P = function(a, b, c) {
			return b[a.methodName] || c || function() {};
		},
		zc = function(a) {
			O(pc, bc, a);
			O(qc, cc, a);
			O(rc, dc, a);
			O(sc, ec, a);
			O(xc, hc, a);
			O(lc, jc, a);
		},
		Ac = function(a) {
			O(
				oc,
				function(b) {
					M.f().a = b;
				},
				a
			);
			O(
				tc,
				function(b, c) {
					var d = M.f();
					d.a[3][b] || (d.a[3][b] = c);
				},
				a
			);
			O(
				uc,
				function(b, c) {
					var d = M.f();
					d.a[4][b] || (d.a[4][b] = c);
				},
				a
			);
			O(
				vc,
				function(b, c) {
					var d = M.f();
					d.a[5][b] || (d.a[5][b] = c);
				},
				a
			);
			O(
				yc,
				function(b) {
					for (
						var c = M.f(), d = ba([3, 4, 5]), e = d.next();
						!e.done;
						e = d.next()
					)
						(e = e.value), ua(c.a[e], b[e]);
				},
				a
			);
		},
		Bc = function(a) {
			a.hasOwnProperty("init-done") ||
				Object.defineProperty(a, "init-done", { value: !0 });
		};
	var Cc = function() {
			this.b = function(a, b) {
				return void 0 === b ? !1 : b;
			};
			this.c = function(a, b) {
				return void 0 === b ? 0 : b;
			};
			this.a = function() {};
		},
		Dc = function(a, b, c) {
			a.b = function(d, e) {
				return P(pc, b)(d, e, c);
			};
			a.c = function(d, e) {
				return P(qc, b)(d, e, c);
			};
			a.a = function() {
				P(lc, b)(c);
			};
		};
	k(Cc);
	var Q = function(a) {
			var b = void 0 === b ? !1 : b;
			return Cc.f().b(a, b);
		},
		Ec = function() {
			var a = void 0 === a ? 0 : a;
			return Cc.f().c(24, a);
		};
	var Fc = function(a) {
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
				if (!yb()) {
					c = Math.floor(1e3 * zb(b));
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
	var Gc = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var Hc = null,
		Ic = function() {
			if (null === Hc) {
				Hc = "";
				try {
					var a = "";
					try {
						a = h.top.location.hash;
					} catch (c) {
						a = h.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						Hc = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return Hc;
		};
	var R = function() {
			this.a = function() {};
			this.b = function() {
				return [];
			};
		},
		Jc = function(a, b, c) {
			a.a = function(d) {
				P(mc, b, function() {
					return [];
				})(d, c);
			};
			a.b = function() {
				return P(nc, b, function() {
					return [];
				})(c);
			};
		};
	k(R);
	var Kc = function(a, b) {
			a = oa(a);
			a = "function" === typeof a ? a() : a;
			return typeof a === b ? a : void 0;
		},
		Lc = function() {
			var a = {};
			this[3] = ((a[8] = function(b) {
				return !!oa(b);
			}),
			(a[9] = function(b) {
				b = oa(b);
				var c;
				if ((c = "function" == qa(b)))
					(b = b && b.toString && b.toString()),
						(c = "string" === typeof b && -1 != b.indexOf("[native code]"));
				return c;
			}),
			(a[10] = function() {
				return window == window.top;
			}),
			(a[6] = function(b) {
				return r(R.f().b(), parseInt(b, 10));
			}),
			(a[27] = function(b) {
				b = Kc(b, "boolean");
				return void 0 !== b ? b : void 0;
			}),
			a);
			a = {};
			this[4] = ((a[3] = function() {
				return Gb();
			}),
			(a[5] = function(b) {
				b = Fc(void 0 === b ? 0 : b);
				return null != b ? b : void 0;
			}),
			(a[6] = function(b) {
				b = Kc(b, "number");
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
				b = Kc(b, "string");
				return void 0 !== b ? b : void 0;
			}),
			a);
		};
	k(Lc);
	var Mc = function() {
		var a = void 0 === a ? h : a;
		return a.ggeac || (a.ggeac = {});
	};
	var Oc = function(a) {
		F(this, a, Nc, null);
	};
	l(Oc, C);
	var Nc = [2];
	Oc.prototype.getId = function() {
		return H(this, 1, 0);
	};
	Oc.prototype.m = function() {
		return H(this, 7, 0);
	};
	var Qc = function(a) {
		F(this, a, Pc, null);
	};
	l(Qc, C);
	var Pc = [2];
	Qc.prototype.m = function() {
		return H(this, 5, 0);
	};
	var Sc = function(a) {
		F(this, a, Rc, null);
	};
	l(Sc, C);
	var S = function(a) {
		F(this, a, Tc, null);
	};
	l(S, C);
	var Rc = [1, 4, 2, 3],
		Tc = [2];
	S.prototype.m = function() {
		return H(this, 1, 0);
	};
	var Uc = [12, 13],
		Vc = function() {},
		Wc = function(a, b, c, d) {
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
			(c = Ic()) &&
				p(c.split(",") || [], function(g) {
					(g = parseInt(g, 10)) && (a.c[g] = !0);
				});
			return a;
		},
		ad = function(a, b, c) {
			var d = [],
				e = Xc(a.a, b);
			if (e.length) {
				9 !== b && (a.a = Yc(a.a, b));
				var f = r(Uc, b);
				p(e, function(g) {
					if ((g = Zc(a, g))) {
						var m = g.getId();
						d.push(m);
						$c(a, m, f ? 4 : c);
						var n = J(g, L, 2);
						n &&
							(f
								? p(ic(), function(ra) {
										return gc(n, ra);
								  })
								: gc(n, c));
					}
				});
			}
			return d;
		},
		$c = function(a, b, c) {
			a.b[c] || (a.b[c] = []);
			a.b[c].push(b);
		},
		bd = function(a, b) {
			a.a.push.apply(
				a.a,
				ca(
					va(
						q(b, function(c) {
							return new S(c);
						}),
						function(c) {
							return !r(Uc, c.m());
						}
					)
				)
			);
		},
		Zc = function(a, b) {
			var c = M.f().a;
			if (!Nb(I(b, K, 3), c)) return null;
			var d = J(b, Oc, 2),
				e = d.length * H(b, 1, 0),
				f = H(b, 6, 0);
			if (f) {
				e = Fc(f);
				if (null === e) return null;
				b = cd(b, e);
				return !b || (c && !Nb(I(b, K, 3), c)) ? null : dd(a, [b], 1);
			}
			d = c
				? va(d, function(g) {
						return Nb(I(g, K, 3), c);
				  })
				: d;
			return d.length
				? (b = H(b, 4, 0))
					? ed(a, b, e, d)
					: dd(a, d, e / 1e3)
				: null;
		},
		ed = function(a, b, c, d) {
			var e = null != a.g[b] ? a.g[b] : 1e3;
			if (0 >= e) return null;
			d = dd(a, d, c / e);
			a.g[b] = d ? 0 : e - c;
			return d;
		},
		dd = function(a, b, c) {
			var d = a.c,
				e = wa(b, function(f) {
					return !!d[f.getId()];
				});
			return e ? e : a.i ? null : Ab(b, c);
		},
		fd = function(a, b) {
			O(
				kc,
				function(c) {
					a.c[c] = !0;
				},
				b
			);
			O(
				mc,
				function(c, d) {
					return ad(a, c, d);
				},
				b
			);
			O(
				nc,
				function(c) {
					return (a.b[c] || []).concat(a.b[4]);
				},
				b
			);
			O(
				wc,
				function(c) {
					return bd(a, c);
				},
				b
			);
		};
	k(Vc);
	var Xc = function(a, b) {
			return (
				((a = wa(a, function(c) {
					return c.m() == b;
				})) &&
					J(a, Qc, 2)) ||
				[]
			);
		},
		Yc = function(a, b) {
			return va(a, function(c) {
				return c.m() != b;
			});
		},
		cd = function(a, b) {
			var c = J(a, Oc, 2),
				d = c.length,
				e = H(a, 1, 0);
			a = H(a, 8, 0);
			var f = (b - a) % d;
			return b < a || b - a - f >= d * e - 1 ? null : c[f];
		};
	var gd = function() {
		this.a = function() {};
	};
	k(gd);
	var hd = function(a) {
		gd.f().a(a);
	};
	var kd = function(a) {
			var b = id.f(),
				c = { G: T(211), J: T(227), O: T(226) },
				d = void 0,
				e = 2;
			d = void 0 === d ? Mc() : d;
			e = void 0 === e ? 0 : e;
			d.hasOwnProperty("init-done")
				? (P(wc, d)(
						q(J(a, S, 2), function(f) {
							return f.h;
						})
				  ),
				  P(xc, d)(
						q(J(a, L, 1), function(f) {
							return f.h;
						}),
						e
				  ),
				  b && P(yc, d)(b),
				  jd(d, e))
				: (fd(Wc(Vc.f(), J(a, S, 2), e, c), d),
				  zc(d),
				  Ac(d),
				  Bc(d),
				  jd(d, e),
				  gc(J(a, L, 1), e),
				  (Ub = Ub || !(!c || !c.V)),
				  hd(Lc.f()),
				  b && hd(b));
		},
		jd = function(a, b) {
			a = void 0 === a ? Mc() : a;
			b = void 0 === b ? 0 : b;
			var c = a,
				d = b;
			d = void 0 === d ? 0 : d;
			Jc(R.f(), c, d);
			c = a;
			b = void 0 === b ? 0 : b;
			Dc(Cc.f(), c, b);
			gd.f().a = P(yc, a);
			Cc.f().a();
		};
	var ld = function(a, b, c) {
		var d = "script";
		d = void 0 === d ? "" : d;
		var e = a.createElement("link");
		try {
			e.rel = "preload";
			if (b instanceof w) var f = x(b).toString();
			else {
				if (b instanceof y) var g = Wa(b);
				else {
					if (b instanceof y) var m = b;
					else
						(b = "object" == typeof b && b.j ? b.a() : String(b)),
							Xa.test(b) || (b = "about:invalid#zClosurez"),
							(m = new y(Ua, b));
					g = Wa(m);
				}
				f = g;
			}
			e.href = f;
		} catch (n) {
			return;
		}
		d && (e.as = d);
		c && e.setAttribute("nonce", c);
		if ((a = a.getElementsByTagName("head")[0]))
			try {
				a.appendChild(e);
			} catch (n) {}
	};
	var md = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		nd = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		od = function(a) {
			return md.test(a) && !nd.test(a);
		},
		pd = function(a) {
			return a.replace(/[\W]/g, function(b) {
				return "&#" + b.charCodeAt() + ";";
			});
		},
		U = h,
		qd = function(a, b) {
			a = "https://adservice" + (b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(h.location.hostname)];
			V[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(V[1]));
			return a + "?" + b.join("&");
		},
		V,
		W,
		rd = function() {
			U = h;
			V = U.googleToken = U.googleToken || {};
			var a = +new Date();
			(V[1] && V[3] > a && 0 < V[2]) ||
				((V[1] = ""), (V[2] = -1), (V[3] = -1), (V[4] = ""), (V[6] = ""));
			W = U.googleIMState = U.googleIMState || {};
			od(W[1]) || (W[1] = ".google.com");
			"array" == qa(W[5]) || (W[5] = []);
			"boolean" !== typeof W[6] && (W[6] = !1);
			"array" == qa(W[7]) || (W[7] = []);
			"number" !== typeof W[8] && (W[8] = 0);
		},
		sd = function(a) {
			try {
				a();
			} catch (b) {
				h.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		ud = function(a) {
			"complete" == h.document.readyState ||
			"loaded" == h.document.readyState ||
			(h.document.currentScript && h.document.currentScript.async)
				? td(3)
				: a();
		},
		vd = 0,
		wd = {
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
			F: sd
		},
		xd = {
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
				return ".google.com" != W[1] && 2 < ++vd;
			},
			H: function() {
				return W[7];
			},
			F: function(a) {
				ud(function() {
					sd(a);
				});
			}
		},
		td = function(a) {
			if (1e-5 > Math.random()) {
				h.google_image_requests || (h.google_image_requests = []);
				var b = h.document.createElement("img");
				b.src =
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
					a;
				h.google_image_requests.push(b);
			}
		};
	wd.s = function() {
		if (!wd.o()) {
			var a = h.document,
				b = function(e) {
					e = qd("js", e);
					var f = Fb();
					ld(a, e, f);
					f = a.createElement("script");
					f.type = "text/javascript";
					f.onerror = function() {
						return h.processGoogleToken({}, 2);
					};
					e = ub(e);
					jb(f, e);
					try {
						(a.head || a.body || a.documentElement).appendChild(f), wd.B();
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
	xd.s = function() {
		if (!xd.o()) {
			var a = h.document,
				b = qd("sync.js", W[1]),
				c = Fb();
			ld(a, b, c);
			b = pd(b);
			var d = kb("script"),
				e = "";
			c && (e = 'nonce="' + pd(c) + '"');
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
			ud(function() {
				a.write(f);
				xd.B();
			});
		}
	};
	var yd = function(a) {
			rd();
			(V[3] >= +new Date() && V[2] >= +new Date()) || a.s();
		},
		Ad = function() {
			h.processGoogleToken =
				h.processGoogleToken ||
				function(a, b) {
					return zd(wd, a, b);
				};
			yd(wd);
		},
		Bd = function() {
			h.processGoogleTokenSync =
				h.processGoogleTokenSync ||
				function(a, b) {
					return zd(xd, a, b);
				};
			yd(xd);
		},
		zd = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				g = parseInt(b.validLifetimeSecs || "", 10),
				m = b["1p_jar"] || "";
			b = b.pucrd || "";
			rd();
			1 == c ? a.M() : a.L();
			if (!d && a.P()) od(".google.com") && (W[1] = ".google.com"), a.s();
			else {
				var n = (U.googleToken = U.googleToken || {}),
					ra =
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
				var Qd = !(V[3] >= +new Date()) && 0 != c;
				if (ra || e || Qd)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(g = e + 1e3 * g),
						td(c),
						(n[5] = c),
						(n[1] = d),
						(n[2] = f),
						(n[3] = g),
						(n[4] = m),
						(n[6] = b),
						rd();
				if (ra || !a.o()) {
					c = a.H();
					for (d = 0; d < c.length; d++) a.F(c[d]);
					c.length = 0;
				}
			}
		};
	var Cd = function(a) {
		a = void 0 === a ? h : a;
		return (a = a.performance) && a.now ? a.now() : null;
	};
	var X = h.performance,
		Dd = !!(X && X.mark && X.measure && X.clearMarks),
		Ed = t(function() {
			var a;
			if ((a = Dd)) (a = Ic()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
			return a;
		});
	var Fd = function(a, b, c) {
			this.a = void 0 === a ? null : a;
			this.g = void 0 === b ? "jserror" : b;
			this.b = null;
			this.c = void 0 === c ? 0.01 : c;
			this.l = this.i;
		},
		Gd = function(a, b) {
			a.b = b;
		};
	Fd.prototype.i = function(a, b, c, d, e) {
		c = void 0 === c ? this.c : c;
		e = void 0 === e ? this.g : e;
		if (Math.random() > c) return !1;
		(b.error && b.meta && b.id) || (b = new Gc(b, { context: a, id: e }));
		if (d || this.b) (b.meta = {}), this.b && this.b(b.meta), d && d(b.meta);
		h.google_js_errors = h.google_js_errors || [];
		h.google_js_errors.push(b);
		h.error_rep_loaded ||
			((b = h.document),
			(a = b.createElement("script")),
			jb(
				a,
				ub(
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
	var Hd = function(a, b) {
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
					Ed() &&
					(X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
					X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
				!a.l(420, d, a.c, void 0, a.g))
			)
				throw d;
		}
	};
	var Id = v("gpt/pubads_impl_"),
		Jd = v("https://securepubads.g.doubleclick.net/"),
		Kd = v("https://ff.doubleclick.net");
	var Ld = function(a) {
		if (!a.google_ltobserver) {
			var b = new a.PerformanceObserver(function(c) {
				var d = (a.google_lt_queue = a.google_lt_queue || []);
				p(c.getEntries(), function(e) {
					return d.push(e);
				});
			});
			b.observe({ entryTypes: ["longtask"] });
			a.google_ltobserver = b;
		}
	};
	var Md = function(a) {
			var b = Cd(a);
			b &&
				((b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				2048 > a.length && a.push(b));
		},
		Nd = function(a, b, c) {
			var d = window;
			return function() {
				var e = Cd(),
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
							duration: (Cd() || 0) - e,
							type: f
						}),
						(f = d.google_js_reporting_queue =
							d.google_js_reporting_queue || []),
						2048 > f.length && f.push(e));
				}
				return g;
			};
		},
		Od = function(a, b) {
			return Nd(a, b, function(c, d) {
				new Fd().i(c, d);
			});
		};
	var Pd = function() {};
	function Y(a, b) {
		return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
	}
	var Sd = function() {
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
			Rd(b));
		this.T = new PerformanceObserver(
			Od(640, function(c) {
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
		this.b = Od(641, this.b.bind(this));
	};
	ka(Sd, Pd);
	var Td = function() {
		var a = new Sd();
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
	Sd.prototype.b = function() {
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
			Rd(a);
		}
	};
	function Rd(a) {
		window.fetch(a, {
			keepalive: !0,
			credentials: "include",
			redirect: "follow",
			method: "get",
			mode: "no-cors"
		});
	}
	var Ud = ["https://www.google.com"],
		Vd = void 0,
		Wd = function(a) {
			this.c = Ud;
			this.a = 2;
			this.b = a;
		};
	ka(Wd, Pd);
	var Xd = function(a) {
		null === a.b ||
			3 <= a.a ||
			((a.a = 3),
			p(a.c, function(b) {
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
	var Yd = function() {
			return h.googletag || (h.googletag = {});
		},
		Zd = function(a, b) {
			var c = Yd();
			c.hasOwnProperty(a) || (c[a] = b);
		},
		$d = function(a, b) {
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
	Z[148] = Tb;
	Z[221] = /^true$/.test("");
	Z[204] = Eb("{{MOD}}", -1);
	var ae = function() {
		ua(this, Z);
	};
	k(ae);
	var T = function(a) {
			return ae.f()[a];
		},
		be = Yd(),
		ce = ae.f();
	ua(ce, be._vars_);
	be._vars_ = ce;
	var de = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var ee = (function(a, b) {
			var c = b || de;
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
		fe = function() {
			return 0 === ee(T(172));
		};
	var ge = function() {
		return Eb("5") || 0;
	};
	Zd("getVersion", function() {
		return "2020040201";
	});
	var id = function() {
		var a = {};
		this[3] = ((a[3] = fe),
		(a[2] = T(36)),
		(a[17] = function(b) {
			for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
			d = String;
			var e = void 0 === e ? window : e;
			if ((e = (e = e.location.href.match(wb)[3] || null) ? decodeURI(e) : e)) {
				var f = e.length;
				if (0 == f) e = 0;
				else {
					for (var g = 305419896, m = 0; m < f; m++)
						g ^= ((g << 5) + (g >> 2) + e.charCodeAt(m)) & 4294967295;
					e = 0 < g ? g : 4294967296 + g;
				}
			} else e = null;
			return r(c, d(e));
		}),
		(a[21] = function() {
			return T(148);
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return T(204);
		}),
		(a[4] = ge),
		a);
		this[5] = {};
	};
	k(id);
	var he = [],
		ie = function(a) {
			var b = new Sc(T(246));
			a = new Sc(a || he);
			if (!J(b, L, 1).length && J(a, L, 1).length) {
				var c = J(a, L, 1);
				qb(b, 1, c);
			}
			!J(b, S, 2).length &&
				J(a, S, 2).length &&
				((a = J(a, S, 2)), qb(b, 2, a));
			kd(b);
		};
	var je = function(a, b) {
			if (a.getAttribute("data-ready")) b();
			else {
				var c = ya(b),
					d = function() {
						c();
						rb(a, "load", d);
						rb(window, "message", e);
					};
				var e = function(f) {
					"ready" === f.data &&
						f.source === a.contentWindow &&
						(c(), rb(a, "load", d), rb(window, "message", e));
				};
				a.addEventListener && a.addEventListener("load", d, !1);
				window.addEventListener && window.addEventListener("message", e, !1);
			}
		},
		ke = function() {
			var a =
				void 0 === a
					? Ia([Kd, v("/tag/js/fetch_frame_"), v("2020040201"), v(".html")])
					: a;
			var b = sb();
			b.style.display = "none";
			b.name = "gpt_fetch_frame";
			var c = Ec();
			a = c ? Ha(a, String(c)) : a;
			b.src = x(a).toString();
			document.documentElement.appendChild(b);
			je(b, function() {
				b.setAttribute("data-ready", "true");
			});
		};
	var le = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		me = function() {
			var a = Ia([Jd, Id, v("2020040201"), v(".js")]),
				b = Ec();
			return b ? Ha(a, String(b)) : a;
		},
		ne = function(a, b, c) {
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
			ae.f()[172] = a;
			new ie(b);
			R.f().a(12);
			R.f().a(5);
			Q(200) || Q(220) || ((b = T(150)), rd(), od(b) && (W[1] = b));
			Q(312) &&
				(void 0 === Vd &&
					(document.hasTrustToken ? (Vd = new Wd(c)) : (Vd = null)),
				(c = Vd),
				c && Xd(c));
		},
		oe = function(a, b, c) {
			var d = Yd();
			a = a || d.fifWin || window;
			b = b || a.document;
			var e = d.fifWin ? window : a;
			Zd("cmd", []);
			if (d.evalScripts) d.evalScripts();
			else {
				ne(b, c, a);
				try {
					a.PerformanceObserver &&
						(a.PerformanceLongTaskTiming && Ld(a),
						Q(203) &&
							!window.google_plmetrics &&
							(Td(), (window.google_plmetrics = !0)));
				} catch (n) {}
				Md(a);
				a = me();
				c = Q(200) || Q(239);
				if (le(b)) {
					var f = "gpt-impl-" + Math.random();
					try {
						ib(b, fb(a, { id: f, nonce: na() }));
					} catch (n) {}
					b.getElementById(f) && ((d._loadStarted_ = !0), c || Bd());
				}
				if (!d._loadStarted_) {
					c || Ad();
					b = d.fifWin ? e.document : b;
					var g = b.createElement("script");
					jb(g, a);
					g.async = !0;
					var m = b.head || b.body || b.documentElement;
					"complete" !== e.document.readyState && d.fifWin
						? $d(e, function() {
								return void m.appendChild(g);
						  })
						: m.appendChild(g);
					d._loadStarted_ = !0;
				}
				d = (e = Q(244)) && (Q(245) || Q(306) || Q(307));
				e &&
					((e = function() {
						var n = document.getElementsByName("gpt_fetch_frame");
						(n.length && n[0]) || ke();
					}),
					d ? e() : setTimeout(e, 1e3));
			}
		};
	var pe;
	a: {
		try {
			if ("array" == qa(E)) {
				pe = E;
				break a;
			}
		} catch (a) {}
		pe = [];
	}
	(function(a, b, c) {
		var d = new Fd(null, "gpt_exception", 0.01);
		Gd(d, function(e) {
			e.methodId = 420;
		});
		Hd(d, function() {
			return oe(a, b, c);
		});
	})(void 0, void 0, pe);
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
	[
		[null, 13, null, [null, 1]],
		[297, null, null, [1]],
		[null, 7, null, [null, 0.1]],
		[167, null, null, [1]],
		[20, null, null, [], [[[1, [[4, null, 1]]], [1]]]],
		[130, null, null, [1]],
		[213, null, null, [1]],
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
		[112, null, null, [1]],
		[null, 32, null, [null, 20]]
	],
	[
		[
			4,
			[
				[null, [[44711894], [44711895], [44711896], [44712408], [44713783]]],
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
				[null, [[676982681]]],
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
				[50, [[21062452], [21062453, [[43, null, null, [1]]]]]],
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
				[
					null,
					[
						[21063340],
						[21063341, [[129, null, null, [1]], [65, null, null, [1]]]],
						[
							21063342,
							[
								[129, null, null, [1]],
								[65, null, null, [1]],
								[71, null, null, [1]]
							]
						]
					]
				],
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
				[10, [[21064712], [21064713, [[229, null, null, [1]]]]], null, 20],
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
				[50, [[21065390], [21065391, [[252, null, null, [1]]]]]],
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
						[21065658],
						[21065659, [[null, 42, null, [null, 10]]]],
						[21065660, [[null, 42, null, [null, 25]]]],
						[21065661, [[null, 42, null, [null, 50]]]],
						[21065662, [[null, 42, null, [null, 100]]]]
					]
				],
				[
					10,
					[
						[21065685],
						[21065686, [[36, null, null, [1]], [35, null, null, [1]]]]
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
				[1, [[21065782], [21065783, [[315, null, null, [1]]]]]],
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
							21065811,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21065811]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21065811]]
							],
							[6, null, null, 4, null, 2]
						],
						[
							21065812,
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
							21065813,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21065813]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21065813]]
							],
							[6, null, null, 4, null, 4]
						],
						[
							21065814,
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
