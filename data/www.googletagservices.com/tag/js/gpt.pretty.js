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
			var ha = { T: !0 },
				ia = {};
			try {
				ia.__proto__ = ha;
				fa = ia.T;
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
		h = this || self,
		ma = function() {
			if (null === ka)
				a: {
					var a = h.document;
					if (
						(a = a.querySelector && a.querySelector("script[nonce]")) &&
						(a = a.nonce || a.getAttribute("nonce")) &&
						la.test(a)
					) {
						ka = a;
						break a;
					}
					ka = "";
				}
			return ka;
		},
		la = /^[\w+/_-]+[=]{0,2}$/,
		ka = null,
		na = function(a) {
			a = a.split(".");
			for (var b = h, c = 0; c < a.length; c++)
				if (((b = b[a[c]]), null == b)) return null;
			return b;
		},
		oa = function() {},
		k = function(a) {
			a.v = void 0;
			a.f = function() {
				return a.v ? a.v : (a.v = new a());
			};
		},
		pa = function(a) {
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
		m = function(a) {
			return "array" == pa(a);
		},
		qa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		ra = 0,
		sa = function(a, b) {
			for (var c in b) a[c] = b[c];
		},
		p = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
		};
	var q = function(a, b) {
			for (
				var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0;
				e < c;
				e++
			)
				e in d && b.call(void 0, d[e], e, a);
		},
		ta = function(a, b) {
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
					var l = f[g];
					b.call(void 0, l, g, a) && (d[e++] = l);
				}
			return d;
		},
		r = function(a, b) {
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
		va = function(a, b) {
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
		wa = function(a, b) {
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
		t = function(a, b) {
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
	var u = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
	var xa = {
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
		this.b = (a === ya && b) || "";
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
		w = function(a) {
			return new v(ya, a);
		},
		za = {},
		ya = {},
		Ba = w("");
	var x = function(a, b) {
		this.c = (a === Ca && b) || "";
		this.g = Da;
	};
	x.prototype.j = !0;
	x.prototype.a = function() {
		return this.c.toString();
	};
	x.prototype.u = !0;
	x.prototype.b = function() {
		return 1;
	};
	var Ha = function(a, b) {
			a = Ea.exec(Fa(a).toString());
			var c = a[3] || "";
			return new x(Ca, a[1] + Ga("?", a[2] || "", b) + Ga("#", c, void 0));
		},
		Fa = function(a) {
			return a instanceof x && a.constructor === x && a.g === Da
				? a.c
				: "type_error:TrustedResourceUrl";
		},
		Ea = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		Ia = function(a) {
			for (var b = "", c = 0; c < a.length; c++) b += Aa(a[c]);
			return new x(Ca, b);
		},
		Da = {},
		Ga = function(a, b, c) {
			if (null == c) return b;
			if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
			for (var d in c) {
				var e = c[d];
				e = m(e) ? e : [e];
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
		Ca = {};
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
						if (d instanceof v) d = Aa(d);
						else {
							if ("style" == c.toLowerCase()) throw Error("");
							if (/^on/i.test(c)) throw Error("");
							if (c.toLowerCase() in db)
								if (d instanceof x) d = Fa(d).toString();
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
			null == e ? (e = []) : m(e) || (e = [e]);
			!0 === xa.script
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
					m(f)
						? q(f, e)
						: ((f = bb(f)),
						  d.push(ab(f).toString()),
						  (f = f.b()),
						  0 == c ? (c = f) : 0 != f && c != f && (c = null));
				};
			q(a, e);
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
			a.src = Fa(b);
			(b = ma()) && a.setAttribute("nonce", b);
		};
	var kb = function(a) {
		kb[" "](a);
		return a;
	};
	kb[" "] = oa;
	var C = function() {},
		lb = "function" == typeof Uint8Array,
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
							m(e) ||
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
							? ((e += a.c), (a.h[e] = a.h[e] || mb))
							: (nb(a), (a.b[e] = a.b[e] || mb));
			if (d && d.length) for (b = 0; b < d.length; b++) ob(a, d[b]);
		},
		mb = [],
		nb = function(a) {
			var b = a.g + a.c;
			a.h[b] || (a.b = a.h[b] = {});
		},
		F = function(a, b) {
			if (b < a.g) {
				b += a.c;
				var c = a.h[b];
				return c === mb ? (a.h[b] = []) : c;
			}
			if (a.b) return (c = a.b[b]), c === mb ? (a.b[b] = []) : c;
		},
		G = function(a, b, c) {
			a = F(a, b);
			return null == a ? c : a;
		},
		pb = function(a, b) {
			a = F(a, b);
			a = null == a ? a : +a;
			return null == a ? 0 : a;
		},
		qb = function(a, b, c) {
			b < a.g ? (a.h[b + a.c] = c) : (nb(a), (a.b[b] = c));
		},
		ob = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					g = F(a, f);
				null != g && ((c = f), (d = g), qb(a, f, void 0));
			}
			return c ? (qb(a, c, d), c) : 0;
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
			b == mb && (b = a.a[c] = []);
			return b;
		},
		rb = function(a, b, c) {
			a.a || (a.a = {});
			c = c || [];
			for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].h;
			a.a[b] = c;
			qb(a, b, d);
		};
	var sb = function() {
		var a = document;
		var b = "IFRAME";
		"application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
		return a.createElement(b);
	};
	var ub = function(a) {
			tb();
			return new x(Ca, a);
		},
		tb = oa;
	var vb = function() {
		return (
			-1 != z.indexOf("iPad") ||
			(-1 != z.indexOf("Android") && -1 == z.indexOf("Mobile")) ||
			-1 != z.indexOf("Silk")
		);
	};
	var wb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
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
		yb = u(function() {
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
		xb = u(function() {
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
				return ma();
			} catch (a) {}
		},
		Gb = u(function() {
			return vb() ||
				(-1 == z.indexOf("iPod") &&
					-1 == z.indexOf("iPhone") &&
					-1 == z.indexOf("Android") &&
					-1 == z.indexOf("IEMobile"))
				? vb()
					? 1
					: 0
				: 2;
		}),
		Hb = u(function() {
			var a = /Edge\/([^. ]+)/.exec(navigator.userAgent);
			return a
				? 18 <= parseInt(a[1], 10)
				: (a = /Chrome\/([^. ]+)/.exec(navigator.userAgent))
					? 71 <= parseInt(a[1], 10)
					: (a = /AppleWebKit\/([^. ]+)/.exec(navigator.userAgent))
						? 605 <= parseInt(a[1], 10)
						: (a = /Firefox\/([^. ]+)/.exec(navigator.userAgent))
							? 64 <= parseInt(a[1], 10)
							: !1;
		});
	var J = function(a) {
		D(this, a, Ib, Jb);
	};
	p(J, C);
	var Ib = [2, 8],
		Jb = [[3, 4, 5], [6, 7]];
	var Kb = function(a) {
			return null != a ? !a : a;
		},
		Lb = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		Nb = function(a, b) {
			var c = I(a, J, 2);
			if (!c.length) return Mb(a, b);
			a = G(a, 1, 0);
			if (1 == a) return Kb(Nb(c[0], b));
			c = r(c, function(d) {
				return function() {
					return Nb(d, b);
				};
			});
			switch (a) {
				case 2:
					return Lb(c, !1);
				case 3:
					return Lb(c, !0);
			}
		},
		Mb = function(a, b) {
			var c = ob(a, Jb[0]);
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
								a = pb(a, 6);
								break a;
							case 5:
								a = G(a, 7, "");
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
		Ob = function(a, b) {
			return !a || !(!b || !Nb(a, b));
		};
	var Qb = function(a) {
		D(this, a, Pb, null);
	};
	p(Qb, C);
	var Pb = [4];
	var K = function(a) {
		D(this, a, Rb, Sb);
	};
	p(K, C);
	var Tb = function(a) {
		D(this, a, null, null);
	};
	p(Tb, C);
	var Rb = [5],
		Sb = [[1, 2, 3, 6]];
	var L = function() {
		var a = {};
		this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
	};
	k(L);
	var Ub = /^true$/.test("false");
	var Vb = Ub,
		Wb = function(a, b) {
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
		Xb = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return (a = F(a, 1)), (a = null == a ? a : !!a), null == a ? !1 : a;
				case 2:
					return pb(a, 2);
				case 3:
					return G(a, 3, "");
				case 6:
					return F(a, 4);
				default:
					return null;
			}
		},
		Yb = u(function() {
			if (!Vb) return {};
			try {
				var a =
					window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
				if (a) return JSON.parse(a);
			} catch (b) {}
			return {};
		}),
		ac = function(a, b, c, d) {
			d = void 0 === d ? 0 : d;
			var e = Yb();
			if (e[a] && null != e[a][b]) return e[a][b];
			b = Zb(d)[a][b];
			if (!b) return c;
			b = new K(b);
			b = $b(b);
			a = Xb(b, a);
			return null != a ? a : c;
		},
		$b = function(a) {
			var b = L.f().a;
			if (b) {
				var c = wa(I(a, Tb, 5), function(d) {
					return Ob(H(d, J, 1), b);
				});
				if (c) return H(c, Qb, 2);
			}
			return H(a, Qb, 4);
		},
		bc = function() {
			this.a = {};
			this.b = [];
		};
	k(bc);
	var cc = function(a, b, c) {
			return !!ac(1, a, void 0 === b ? !1 : b, c);
		},
		dc = function(a, b, c) {
			b = void 0 === b ? 0 : b;
			a = Number(ac(2, a, b, c));
			return isNaN(a) ? b : a;
		},
		ec = function(a, b, c) {
			return ac(3, a, void 0 === b ? "" : b, c);
		},
		fc = function(a, b, c) {
			b = void 0 === b ? [] : b;
			return ac(6, a, b, c);
		},
		Zb = function(a) {
			var b = {};
			return (
				bc.f().a[a] ||
				(bc.f().a[a] = ((b[1] = {}), (b[2] = {}), (b[3] = {}), (b[6] = {}), b))
			);
		},
		gc = function(a, b) {
			var c = Zb(b);
			Bb(a, function(d, e) {
				return Bb(d, function(f, g) {
					return (c[e][g] = f);
				});
			});
		},
		hc = function(a, b) {
			var c = Zb(b);
			q(a, function(d) {
				var e = ob(d, Sb[0]),
					f = Wb(d, e);
				f && (c[e][f] = d.h);
			});
		},
		ic = function(a, b) {
			var c = Zb(b);
			q(a, function(d) {
				var e = new K(d),
					f = ob(e, Sb[0]);
				(e = Wb(e, f)) && (c[f][e] || (c[f][e] = d));
			});
		},
		jc = function() {
			return r(Object.keys(bc.f().a), function(a) {
				return Number(a);
			});
		},
		kc = function(a) {
			t(bc.f().b, a) || gc(Zb(4), a);
		};
	var M = function(a) {
			this.a = a;
		},
		lc = new M(1),
		mc = new M(15),
		nc = new M(2),
		oc = new M(3),
		pc = new M(4),
		qc = new M(5),
		rc = new M(6),
		sc = new M(7),
		tc = new M(8),
		uc = new M(9),
		vc = new M(10),
		wc = new M(11),
		xc = new M(12),
		yc = new M(13),
		zc = new M(14),
		N = function(a, b, c) {
			c.hasOwnProperty(a.a) ||
				Object.defineProperty(c, String(a.a), { value: b });
		},
		O = function(a, b, c) {
			return b[a.a] || c || function() {};
		},
		Ac = function(a) {
			N(qc, cc, a);
			N(rc, dc, a);
			N(sc, ec, a);
			N(tc, fc, a);
			N(yc, ic, a);
			N(mc, kc, a);
		},
		Bc = function(a) {
			N(
				pc,
				function(b) {
					L.f().a = b;
				},
				a
			);
			N(
				uc,
				function(b, c) {
					var d = L.f();
					d.a[3][b] || (d.a[3][b] = c);
				},
				a
			);
			N(
				vc,
				function(b, c) {
					var d = L.f();
					d.a[4][b] || (d.a[4][b] = c);
				},
				a
			);
			N(
				wc,
				function(b, c) {
					var d = L.f();
					d.a[5][b] || (d.a[5][b] = c);
				},
				a
			);
			N(
				zc,
				function(b) {
					for (
						var c = L.f(), d = ba([3, 4, 5]), e = d.next();
						!e.done;
						e = d.next()
					)
						(e = e.value), sa(c.a[e], b[e]);
				},
				a
			);
		},
		Cc = function(a) {
			a.hasOwnProperty("init-done") ||
				Object.defineProperty(a, "init-done", { value: !0 });
		};
	var Dc = function() {
			this.b = function() {
				return !1;
			};
			this.c = function() {
				return 0;
			};
			this.a = function() {};
		},
		Ec = function(a, b, c) {
			a.b = function(d, e) {
				return O(qc, b)(d, e, c);
			};
			a.c = function(d, e) {
				return O(rc, b)(d, e, c);
			};
			a.a = function() {
				O(mc, b)(c);
			};
		};
	k(Dc);
	var P = function(a) {
			var b = void 0 === b ? !1 : b;
			return Dc.f().b(a, b);
		},
		Fc = function() {
			var a = void 0 === a ? 0 : a;
			return Dc.f().c(24, a);
		};
	var Gc = function(a) {
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
	var Hc = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var Ic = null,
		Jc = function() {
			if (null === Ic) {
				Ic = "";
				try {
					var a = "";
					try {
						a = h.top.location.hash;
					} catch (c) {
						a = h.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						Ic = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return Ic;
		};
	var Q = function() {
			this.a = function() {};
			this.b = function() {
				return [];
			};
		},
		Kc = function(a, b, c) {
			a.a = function(d) {
				O(nc, b, function() {
					return [];
				})(d, c);
			};
			a.b = function() {
				return O(oc, b, function() {
					return [];
				})(c);
			};
		};
	k(Q);
	var Lc = function() {
		var a = {};
		this[3] = ((a[8] = function(b) {
			return !!na(b);
		}),
		(a[9] = function(b) {
			b = na(b);
			var c;
			if ((c = "function" == pa(b)))
				(b = b && b.toString && b.toString()),
					(c = "string" === typeof b && -1 != b.indexOf("[native code]"));
			return c;
		}),
		(a[10] = function() {
			return window == window.top;
		}),
		(a[22] = function() {
			return Hb();
		}),
		(a[6] = function(b) {
			return t(Q.f().b(), parseInt(b, 10));
		}),
		a);
		a = {};
		this[4] = ((a[3] = function() {
			return Gb();
		}),
		(a[5] = function(b) {
			b = Gc(void 0 === b ? 0 : b);
			return null != b ? b : void 0;
		}),
		(a[6] = function(b) {
			b = na(b);
			return "number" === typeof b ? b : void 0;
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
			b = na(b);
			return "string" === typeof b ? b : void 0;
		}),
		a);
	};
	k(Lc);
	var Mc = function() {
		var a = void 0 === a ? h : a;
		return a.ggeac || (a.ggeac = {});
	};
	var Oc = function(a) {
		D(this, a, Nc, null);
	};
	p(Oc, C);
	var Nc = [2];
	Oc.prototype.getId = function() {
		return G(this, 1, 0);
	};
	Oc.prototype.m = function() {
		return G(this, 7, 0);
	};
	var Qc = function(a) {
		D(this, a, Pc, null);
	};
	p(Qc, C);
	var Pc = [2];
	Qc.prototype.m = function() {
		return G(this, 5, 0);
	};
	var Sc = function(a) {
		D(this, a, Rc, null);
	};
	p(Sc, C);
	var R = function(a) {
		D(this, a, Tc, null);
	};
	p(R, C);
	var Rc = [1, 2],
		Tc = [2];
	R.prototype.m = function() {
		return G(this, 1, 0);
	};
	var Uc = [12, 13],
		Vc = function() {},
		Wc = function(a, b, c, d) {
			var e = void 0 === d ? {} : d;
			d = void 0 === e.D ? !1 : e.D;
			var f = void 0 === e.I ? {} : e.I;
			e = void 0 === e.N ? [] : e.N;
			a.a = b;
			a.i = d;
			a.g = f;
			b = {};
			a.b = ((b[c] = e), (b[4] = []), b);
			a.c = {};
			(c = Jc()) &&
				q(c.split(",") || [], function(g) {
					(g = parseInt(g, 10)) && (a.c[g] = !0);
				});
			return a;
		},
		ad = function(a, b, c) {
			var d = [],
				e = Xc(a.a, b);
			if (e.length) {
				9 !== b && (a.a = Yc(a.a, b));
				var f = t(Uc, b);
				q(e, function(g) {
					if ((g = Zc(a, g))) {
						var l = g.getId();
						d.push(l);
						$c(a, l, f ? 4 : c);
						var n = I(g, K, 2);
						n &&
							(f
								? q(jc(), function(ua) {
										return hc(n, ua);
								  })
								: hc(n, c));
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
					ta(
						r(b, function(c) {
							return new R(c);
						}),
						function(c) {
							return !t(Uc, c.m());
						}
					)
				)
			);
		},
		Zc = function(a, b) {
			var c = L.f().a;
			if (!Ob(H(b, J, 3), c)) return null;
			var d = I(b, Oc, 2),
				e = d.length * G(b, 1, 0),
				f = G(b, 6, 0);
			if (f) {
				e = Gc(f);
				if (null === e) return null;
				b = cd(b, e);
				return !b || (c && !Ob(H(b, J, 3), c)) ? null : dd(a, [b], 1);
			}
			d = c
				? ta(d, function(g) {
						return Ob(H(g, J, 3), c);
				  })
				: d;
			return d.length
				? (b = G(b, 4, 0))
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
				e = va(b, function(f) {
					return !!d[f.getId()];
				});
			return e ? e : a.i ? null : Ab(b, c);
		},
		fd = function(a, b) {
			N(
				lc,
				function(c) {
					a.c[c] = !0;
				},
				b
			);
			N(
				nc,
				function(c, d) {
					return ad(a, c, d);
				},
				b
			);
			N(
				oc,
				function(c) {
					return (a.b[c] || []).concat(a.b[4]);
				},
				b
			);
			N(
				xc,
				function(c) {
					return bd(a, c);
				},
				b
			);
		};
	k(Vc);
	var Xc = function(a, b) {
			return (
				((a = va(a, function(c) {
					return c.m() == b;
				})) &&
					I(a, Qc, 2)) ||
				[]
			);
		},
		Yc = function(a, b) {
			return ta(a, function(c) {
				return c.m() != b;
			});
		},
		cd = function(a, b) {
			var c = I(a, Oc, 2),
				d = c.length,
				e = G(a, 1, 0);
			a = G(a, 8, 0);
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
				c = { D: S(211), I: S(227), N: S(226) },
				d = void 0,
				e = 2;
			d = void 0 === d ? Mc() : d;
			e = void 0 === e ? 0 : e;
			d.hasOwnProperty("init-done")
				? (O(xc, d)(
						r(I(a, R, 2), function(f) {
							return f.h;
						})
				  ),
				  O(yc, d)(
						r(I(a, K, 1), function(f) {
							return f.h;
						}),
						e
				  ),
				  b && O(zc, d)(b),
				  jd(d, e))
				: (fd(Wc(Vc.f(), I(a, R, 2), e, c), d),
				  Ac(d),
				  Bc(d),
				  Cc(d),
				  jd(d, e),
				  hc(I(a, K, 1), e),
				  (Vb = Vb || !(!c || !c.U)),
				  hd(Lc.f()),
				  b && hd(b));
		},
		jd = function(a, b) {
			a = void 0 === a ? Mc() : a;
			b = void 0 === b ? 0 : b;
			var c = a,
				d = b;
			d = void 0 === d ? 0 : d;
			Kc(Q.f(), c, d);
			c = a;
			b = void 0 === b ? 0 : b;
			Ec(Dc.f(), c, b);
			gd.f().a = O(zc, a);
			Dc.f().a();
		};
	var ld = function(a, b, c) {
		var d = "script";
		d = void 0 === d ? "" : d;
		var e = a.createElement("link");
		try {
			e.rel = "preload";
			if (b instanceof x) var f = Fa(b).toString();
			else {
				if (b instanceof y) var g = Wa(b);
				else {
					if (b instanceof y) var l = b;
					else
						(b = "object" == typeof b && b.j ? b.a() : String(b)),
							Xa.test(b) || (b = "about:invalid#zClosurez"),
							(l = new y(Ua, b));
					g = Wa(l);
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
		T = h,
		qd = function(a, b) {
			a = "https://adservice" + (b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(h.location.hostname)];
			U[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(U[1]));
			return a + "?" + b.join("&");
		},
		U,
		V,
		rd = function() {
			T = h;
			U = T.googleToken = T.googleToken || {};
			var a = +new Date();
			(U[1] && U[3] > a && 0 < U[2]) ||
				((U[1] = ""), (U[2] = -1), (U[3] = -1), (U[4] = ""), (U[6] = ""));
			V = T.googleIMState = T.googleIMState || {};
			od(V[1]) || (V[1] = ".google.com");
			m(V[5]) || (V[5] = []);
			"boolean" !== typeof V[6] && (V[6] = !1);
			m(V[7]) || (V[7] = []);
			"number" !== typeof V[8] && (V[8] = 0);
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
				return 0 < V[8];
			},
			A: function() {
				V[8]++;
			},
			K: function() {
				0 < V[8] && V[8]--;
			},
			L: function() {
				V[8] = 0;
			},
			s: function() {},
			O: function() {
				return !1;
			},
			F: function() {
				return V[5];
			},
			C: sd
		},
		xd = {
			o: function() {
				return V[6];
			},
			A: function() {
				V[6] = !0;
			},
			K: function() {
				V[6] = !1;
			},
			L: function() {
				V[6] = !1;
			},
			s: function() {},
			O: function() {
				return ".google.com" != V[1] && 2 < ++vd;
			},
			F: function() {
				return V[7];
			},
			C: function(a) {
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
						(a.head || a.body || a.documentElement).appendChild(f), wd.A();
					} catch (g) {}
				},
				c = V[1];
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
				b = qd("sync.js", V[1]);
			ld(a, b);
			b = pd(b);
			var c = kb("script"),
				d = "",
				e = Fb();
			e && (d = 'nonce="' + pd(e) + '"');
			var f =
				"<" +
				c +
				' src="' +
				b +
				'" ' +
				d +
				"></" +
				c +
				"><" +
				(c +
					" " +
					d +
					'>processGoogleTokenSync({"newToken":"FBS"},5);</' +
					c +
					">");
			ud(function() {
				a.write(f);
				xd.A();
			});
		}
	};
	var yd = function(a) {
			rd();
			(U[3] >= +new Date() && U[2] >= +new Date()) || a.s();
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
				l = b["1p_jar"] || "";
			b = b.pucrd || "";
			rd();
			1 == c ? a.L() : a.K();
			if (!d && a.O()) od(".google.com") && (V[1] = ".google.com"), a.s();
			else {
				var n = (T.googleToken = T.googleToken || {}),
					ua =
						0 == c &&
						d &&
						"string" === typeof d &&
						!e &&
						"number" === typeof f &&
						0 < f &&
						"number" === typeof g &&
						0 < g &&
						"string" === typeof l;
				e = e && !a.o() && (!(U[3] >= +new Date()) || "NT" == U[1]);
				var Pd = !(U[3] >= +new Date()) && 0 != c;
				if (ua || e || Pd)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(g = e + 1e3 * g),
						td(c),
						(n[5] = c),
						(n[1] = d),
						(n[2] = f),
						(n[3] = g),
						(n[4] = l),
						(n[6] = b),
						rd();
				if (ua || !a.o()) {
					c = a.F();
					for (d = 0; d < c.length; d++) a.C(c[d]);
					c.length = 0;
				}
			}
		};
	var Cd = function(a) {
		a = void 0 === a ? h : a;
		return (a = a.performance) && a.now ? a.now() : null;
	};
	var W = h.performance,
		Dd = !!(W && W.mark && W.measure && W.clearMarks),
		Ed = u(function() {
			var a;
			if ((a = Dd)) (a = Jc()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
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
		(b.error && b.meta && b.id) || (b = new Hc(b, { context: a, id: e }));
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
					W &&
					Ed() &&
					(W.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
					W.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
				!a.l(420, d, a.c, void 0, a.g))
			)
				throw d;
		}
	};
	var Id = w("gpt/pubads_impl_"),
		Jd = w("https://securepubads.g.doubleclick.net/"),
		Kd = w("https://ff.doubleclick.net");
	var Ld = function(a) {
		if (!a.google_ltobserver) {
			var b = new a.PerformanceObserver(function(c) {
				var d = (a.google_lt_queue = a.google_lt_queue || []);
				q(c.getEntries(), function(e) {
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
				} catch (l) {
					f = 13;
					if (c) return c(a, l), g;
					throw l;
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
	function X(a, b) {
		return "&" + a + "=" + Math.floor(b);
	}
	var Y = function() {
			var a = this;
			this.G = this.P = this.i = this.g = this.b = 0;
			this.H = !1;
			this.l = this.c = this.a = 0;
			if ("number" !== typeof h.goog_pvsid)
				try {
					Object.defineProperty(h, "goog_pvsid", {
						value: Math.floor(Math.random() * Math.pow(2, 52))
					});
				} catch (c) {}
			this.S = Number(h.goog_pvsid) || -1;
			this.J = 0.1 > Math.random();
			this.M = h === h.top;
			if (this.J) {
				var b =
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics" +
					X("pvsid", this.S);
				b += X("test", 1);
				b += "&top=" + (this.M ? 1 : 0);
				Qd(b);
			}
			this.R = new PerformanceObserver(
				Od(640, function(c) {
					c = ba(c.getEntries());
					for (var d = c.next(); !d.done; d = c.next()) {
						d = d.value;
						if ("layout-shift" === d.entryType) {
							var e = d;
							e.hadRecentInput ||
								(P(241) && !(0.01 < e.value)) ||
								((a.b += Number(e.value)),
								Number(e.value) > a.g && (a.g = Number(e.value)),
								(a.i += 1));
						}
						"largest-contentful-paint" === d.entryType &&
							((e = d), (a.P = Math.floor(e.renderTime || e.loadTime)));
						"first-input" === d.entryType &&
							((e = d),
							(a.G = Number((e.processingStart - e.startTime).toFixed(3))),
							(a.H = !0));
						"longtask" === d.entryType &&
							((a.a += d.duration),
							d.duration > a.c && (a.c = d.duration),
							(a.l += 1));
					}
				})
			);
			this.B = !1;
			this.w = Od(641, this.w.bind(this));
		},
		Rd = function() {};
	Y.prototype = da(Rd.prototype);
	Y.prototype.constructor = Y;
	if (ja) ja(Y, Rd);
	else
		for (var Sd in Rd)
			if ("prototype" != Sd)
				if (Object.defineProperties) {
					var Td = Object.getOwnPropertyDescriptor(Rd, Sd);
					Td && Object.defineProperty(Y, Sd, Td);
				} else Y[Sd] = Rd[Sd];
	var Ud = function() {
		var a = new Y();
		a.R.observe({
			entryTypes: [
				"layout-shift",
				"largest-contentful-paint",
				"first-input",
				"longtask"
			],
			buffered: !P(240)
		});
		document.addEventListener("visibilitychange", a.w);
	};
	Y.prototype.w = function() {
		var a = document;
		if (
			2 ===
				({ visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
					a.visibilityState ||
						a.webkitVisibilityState ||
						a.mozVisibilityState ||
						""
				] || 0) &&
			!this.B
		) {
			this.B = !0;
			this.R.takeRecords();
			a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
			window.LayoutShift &&
				((a += "&cls=" + this.b.toFixed(3)),
				(a += "&mls=" + this.g.toFixed(3)),
				(a += X("nls", this.i)));
			window.LargestContentfulPaint && (a += X("lcp", this.P));
			window.PerformanceEventTiming && this.H && (a += X("fid", this.G));
			window.PerformanceLongTaskTiming &&
				((a += X("cbt", this.a)),
				(a += X("mbt", this.c)),
				(a += X("nlt", this.l)));
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
			a += X("nif", b);
			b = window.google_unique_id;
			a += X("ifi", "number" === typeof b ? b : 0);
			b = Q.f().b();
			b = "&eid=" + encodeURIComponent(b.join());
			a = a + b + X("pvsid", this.S);
			this.J && (a += X("test", 1));
			a += "&top=" + (this.M ? 1 : 0);
			Qd(a);
		}
	};
	function Qd(a) {
		window.fetch(a, {
			keepalive: !0,
			credentials: "include",
			redirect: "follow",
			method: "get",
			mode: "no-cors"
		});
	}
	var Vd = function() {
			return h.googletag || (h.googletag = {});
		},
		Wd = function(a, b) {
			var c = Vd();
			c.hasOwnProperty(a) || (c[a] = b);
		},
		Xd = function(a, b) {
			a.addEventListener
				? a.addEventListener("load", b, !1)
				: a.attachEvent && a.attachEvent("onload", b);
		};
	var Z = {
		247: "https://securepubads.g.doubleclick.net",
		7: 0.02,
		13: 1500,
		23: 0.001,
		24: 200,
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
	Z[148] = Ub;
	Z[221] = /^true$/.test("");
	Z[204] = Eb("{{MOD}}", -1);
	var Yd = function() {
		sa(this, Z);
	};
	k(Yd);
	var S = function(a) {
			return Yd.f()[a];
		},
		Zd = Vd(),
		$d = Yd.f();
	sa($d, Zd._vars_);
	Zd._vars_ = $d;
	var ae = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var be = (function(a, b) {
			var c = b || ae;
			return function() {
				var d = this || h;
				d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
				var e = c(a[qa] || (a[qa] = ++ra), arguments);
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
		ce = function() {
			return 0 === be(S(172));
		};
	var de = function() {
		return Eb("7") || 0;
	};
	Wd("getVersion", function() {
		return "2020010201";
	});
	var id = function() {
		var a = {};
		this[3] = ((a[3] = ce),
		(a[2] = S(36)),
		(a[17] = function(b) {
			for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
			d = String;
			var e = void 0 === e ? window : e;
			if ((e = (e = e.location.href.match(wb)[3] || null) ? decodeURI(e) : e)) {
				var f = e.length;
				if (0 == f) e = 0;
				else {
					for (var g = 305419896, l = 0; l < f; l++)
						g ^= ((g << 5) + (g >> 2) + e.charCodeAt(l)) & 4294967295;
					e = 0 < g ? g : 4294967296 + g;
				}
			} else e = null;
			return t(c, d(e));
		}),
		(a[21] = function() {
			return S(148);
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return S(204);
		}),
		(a[4] = de),
		a);
		this[5] = {};
	};
	k(id);
	var ee = [],
		fe = function(a) {
			var b = new Sc(S(246));
			a = new Sc(a || ee);
			if (!I(b, K, 1).length && I(a, K, 1).length) {
				var c = I(a, K, 1);
				rb(b, 1, c);
			}
			!I(b, R, 2).length &&
				I(a, R, 2).length &&
				((a = I(a, R, 2)), rb(b, 2, a));
			kd(b);
		};
	var ge = function() {
		var a =
			void 0 === a
				? Ia([Kd, w("/tag/js/fetch_frame_"), w("2020010201"), w(".html")])
				: a;
		var b = sb();
		b.style.display = "none";
		b.name = "gpt_fetch_frame";
		var c = Fc();
		a = c ? Ha(a, String(c)) : a;
		b.src = Fa(a).toString();
		document.documentElement.appendChild(b);
		var d = function() {
			b.setAttribute("data-ready", "true");
			b.removeEventListener && b.removeEventListener("load", d, !1);
		};
		b.addEventListener && b.addEventListener("load", d, !1);
	};
	var he = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		ie = function() {
			var a = Ba;
			P(187) ? (a = w("modern_")) : P(234) && (a = w("legacy_"));
			a = Ia([Jd, Id, a, w("2020010201"), w(".js")]);
			var b = Fc();
			return b ? Ha(a, String(b)) : a;
		},
		je = function(a, b) {
			var c;
			if (!(c = a.currentScript))
				a: {
					if ((a = a.scripts))
						for (c = 0; c < a.length; c++) {
							var d = a[c];
							if (-1 < d.src.indexOf("/tag/js/gpt")) {
								c = d;
								break a;
							}
						}
					c = null;
				}
			a = c;
			Yd.f()[172] = a;
			new fe(b);
			Q.f().a(12);
			Q.f().a(5);
			P(200) || P(220) || ((b = S(150)), rd(), od(b) && (V[1] = b));
		},
		ke = function(a, b, c) {
			var d = Vd();
			a = a || d.fifWin || window;
			b = b || a.document;
			var e = d.fifWin ? window : a;
			Wd("cmd", []);
			if (d.evalScripts) d.evalScripts();
			else {
				je(b, c);
				try {
					a.PerformanceObserver &&
						(a.PerformanceLongTaskTiming && Ld(a),
						P(203) &&
							!window.google_plmetrics &&
							(Ud(), (window.google_plmetrics = !0)));
				} catch (n) {}
				Md(a);
				a = ie();
				c = P(200) || P(239);
				if (he(b)) {
					var f = "gpt-impl-" + Math.random();
					try {
						ib(b, fb(a, { id: f }));
					} catch (n) {}
					b.getElementById(f) && ((d._loadStarted_ = !0), c || Bd());
				}
				if (!d._loadStarted_) {
					c || Ad();
					b = d.fifWin ? e.document : b;
					var g = b.createElement("script");
					jb(g, a);
					g.async = !0;
					var l = b.head || b.body || b.documentElement;
					"complete" !== e.document.readyState && d.fifWin
						? Xd(e, function() {
								return void l.appendChild(g);
						  })
						: l.appendChild(g);
					d._loadStarted_ = !0;
				}
				d = (e = P(244)) && P(245);
				e &&
					((e = function() {
						var n = document.getElementsByName("gpt_fetch_frame");
						(n.length && n[0]) || ge();
					}),
					d ? e() : setTimeout(e, 1e3));
			}
		};
	var le;
	a: {
		try {
			if (m(E)) {
				le = E;
				break a;
			}
		} catch (a) {}
		le = [];
	}
	(function(a, b, c) {
		var d = new Fd(null, "gpt_exception", 0.01);
		Gd(d, function(e) {
			e.methodId = 420;
		});
		Hd(d, function() {
			return ke(a, b, c);
		});
	})(void 0, void 0, le);
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
	[
		[null, 13, null, [null, 1]],
		[null, 7, null, [null, 0.1]],
		[167, null, null, [1]],
		[159, null, null, [1]],
		[20, null, null, [], [[[1, [[4, null, 1]]], [1]]]],
		[130, null, null, [1]],
		[42, null, null, [1]],
		[258, null, null, [1]],
		[156, null, null, [1]],
		[157, null, null, [1]],
		[8, null, null, [1]],
		[134, null, null, [1]],
		[55, null, null, [1]],
		[204, null, null, [1]],
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
		[139, null, null, []],
		[199, null, null, [1]],
		[201, null, null, [1]],
		[45, null, null, []],
		[null, null, 2, [null, null, "1-0-37"]],
		[null, 39, null, [null, 72]],
		[null, 38, null, [null, 24]],
		[null, 33, null, [null, 250]],
		[269, null, null, [1]],
		[221, null, null, [1]],
		[142, null, null, [1]],
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
			null,
			[
				[null, [[21063445], [21063446]]],
				[null, [[21064294], [21064295]]],
				[
					null,
					[[21064472], [21064473, [[164, null, null, [1]]]]],
					[
						12,
						null,
						null,
						null,
						2,
						null,
						"https?://(.*\\.)?nextdoor\\.com(\\?|/|$)"
					],
					14
				],
				[null, [[21064695], [21064696], [21064697]]],
				[null, [[21065001], [21065002]]],
				[null, [[44711889], [44711890], [44711891], [44711892], [44712407]]],
				[null, [[44711893]]],
				[null, [[676982680]]]
			]
		],
		[
			3,
			[
				[
					null,
					[
						[
							21065148,
							null,
							[4, null, 6, null, null, null, null, ["21064523"]]
						],
						[
							21065149,
							[[null, 35, null, [null, 10]]],
							[4, null, 6, null, null, null, null, ["21064523"]]
						]
					],
					[4, null, 9, null, null, null, null, ["LayoutShift"]]
				],
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
				[50, [[21062414], [21062415, [[64, null, null, [1]]]]]],
				[50, [[21062452], [21062453, [[43, null, null, [1]]]]]],
				[
					10,
					[
						[21062751],
						[21062752, [[null, 15, null, [null, 1]]]],
						[21062753, [[null, 15, null, [null, 2]]]]
					]
				],
				[
					10,
					[
						[21062796],
						[21062797, null, [4, null, 8, null, null, null, null, ["Map"]]]
					]
				],
				[50, [[21062832], [21062833, [[89, null, null, [1]]]]], null, 12],
				[50, [[21062888], [21062889, [[101, null, null, [1]]]]]],
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
					[
						[21063046],
						[21063047, [[142, null, null, [1]]]],
						[21063048, [[142, null, null, [1]]]]
					],
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
				[null, [[21063065], [21063066, [[116, null, null, [1]]]]]],
				[50, [[21063145], [21063146, [[112, null, null, [1]]]]]],
				[1, [[21063147], [21063148, [[99, null, null, [1]]]]]],
				[null, [[21063202], [21063203, [[123, null, null, [1]]]]]],
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
				[50, [[21063635], [21063636, [[104, null, null, [1]]]]]],
				[
					1,
					[[21063669], [21063670], [21063671, [[142, null, null, [1]]]]],
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
				[1, [[21064411], [21064412, [[144, null, null, [1]]]]]],
				[
					50,
					[
						[21064549],
						[21064550, [[156, null, null, []], [157, null, null, []]]]
					]
				],
				[
					1,
					[
						[21064608],
						[21064609, [[null, 7, null, [null, 1]], [212, null, null, [1]]]]
					]
				],
				[
					5,
					[
						[21064623, [[98, null, null, [1]]]],
						[21064624, [[98, null, null, [1]]]]
					]
				],
				[1, [[21064712], [21064713, [[229, null, null, [1]]]]]],
				[1, [[21064758], [21064759, [[206, null, null, [1]]]]]],
				[
					50,
					[
						[21065025],
						[
							21065026,
							[
								[null, 31, null, [null, 0.2]],
								[
									null,
									null,
									null,
									[
										null,
										null,
										null,
										[
											"1288355901",
											"165763429",
											"3946387130",
											"3617864019",
											"1901889028",
											"586877095",
											"1194064817",
											"2110468301"
										]
									],
									null,
									5
								],
								[
									null,
									null,
									null,
									[
										null,
										null,
										null,
										[
											"Aqlg67cGet040lbsXgDy/D2VrD8qRr+1qqry9mC8vTMtsyTbpVK98ywx22Iq+jrdfegxil7KnH57mZJVOXopWQwAAABneyJvcmlnaW4iOiJodHRwczovL3d3dy5vdWVzdC1mcmFuY2UuZnI6NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"Ah6osjNcqcICXGZPu6xx2iAXkKSuPSq4ZwNfNxziBSClzdk/Kb+v5YDsrV30szEz3+uIUjVNlrzcBob8MreRKgQAAABgeyJvcmlnaW4iOiJodHRwczovL3d3dy5zcG9ydC5lczo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1NzU0MTc1OTl9",
											"ArlXTELifeodpwApTy166Iu2pQZ8mPIEMo4gEJl0TJOLTvPE7kPKpyqE7HD/ZkMX1RzDHhuF+Cum9j9Nyx6VugEAAABkeyJvcmlnaW4iOiJodHRwczovL20uYWN0aXZlYmVhdC5jb206NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"AthTMGvdiMaCTyxax1tMmm72BachUKXmp3pdGB7nvmeU1FPL+3TFhOJM2Os0ImY6+t3ybZ1s66LV/w61c4dM2gEAAABheyJvcmlnaW4iOiJodHRwczovL20ucGF0cmlrYS5jb206NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"AkbQZQKCrEjuuFT3Dz5xJZR1oRO5hGS0hLhuvFDUDIS4Gz4gcOTVo9mzY0+xNH0l+s+enyePrJpOSa3/Hawu3QwAAABieyJvcmlnaW4iOiJodHRwczovL3RveW9rZWl6YWkubmV0OjQ0MyIsImZlYXR1cmUiOiJFeHBlcmltZW50YWxJc0lucHV0UGVuZGluZyIsImV4cGlyeSI6MTU3NTQxNzU5OX0=",
											"AtTQXUKv5lD000A1Apt69fTsBy01iYJoe4X6vwfbNGTTR0uqCtV/jalRsz5ww9aNZvx65DhbJ9AUavhx8pkqpQcAAABheyJvcmlnaW4iOiJodHRwczovL3d3dy5tZXJrdXIuZGU6NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"AvgHpg20QhUOrucBEHjERR1sGAbOIVnKHkrUSD+Cvp0Uu2bG+kqa50WETP/ZVs4DZ74nLeGF09pqFZm4lNTJZQgAAABdeyJvcmlnaW4iOiJodHRwczovL3d3dy50ei5kZTo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1NzU0MTc1OTl9",
											"Avh35O4hfuadenyBhFekBF1jafEUbbsY1bnyk2uQecDLxU1n0C4anmQm7bhgLfIxKnzaE2XAtQmmlYrYg+br8QcAAABjeyJvcmlnaW4iOiJodHRwczovL3d3dy5vb21waC5jby5pZDo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1NzU0MTc1OTl9"
										]
									],
									null,
									6
								],
								[169, null, null, [1]]
							]
						]
					],
					[
						2,
						[
							[
								4,
								null,
								17,
								null,
								null,
								null,
								null,
								[
									"1288355901",
									"165763429",
									"3946387130",
									"3617864019",
									"1901889028",
									"586877095",
									"1194064817",
									"2110468301"
								]
							],
							[6, null, null, 3, null, 0],
							[4, null, 8, null, null, null, null, ["chrome"]]
						]
					],
					17
				],
				[
					1,
					[
						[21065052],
						[21065053, [[246, null, null, [1]]]],
						[21065054, [[242, null, null, [1]], [253, null, null, [1]]]]
					]
				],
				[
					null,
					[
						[21065085, null, [4, null, 10]],
						[21065086, [[143, null, null, [1]]], [4, null, 10]]
					]
				],
				[
					null,
					[
						[21065089, null, [1, [[4, null, 10]]]],
						[21065090, [[143, null, null, [1]]], [1, [[4, null, 10]]]]
					]
				],
				[50, [[21065098], [21065099, [[139, null, null, []]]]], null, 16],
				[10, [[21065112], [21065113, [[162, null, null, [1]]]]]],
				[10, [[21065138], [21065139, [[148, null, null, [1]]]]]],
				[10, [[21065165], [21065166, [[253, null, null, [1]]]]], null, 19],
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
				[10, [[21065232], [21065233]]],
				[10, [[21065238], [21065239, [[250, null, null, [1]]]]]],
				[
					1000,
					[
						[
							21065272,
							null,
							[4, null, 6, null, null, null, null, ["21065270"]]
						],
						[21065273, null, [4, null, 6, null, null, null, null, ["21065271"]]]
					],
					[
						2,
						[
							[4, null, 22],
							[4, null, 9, null, null, null, null, ["IntersectionObserver"]],
							[4, null, 9, null, null, null, null, ["Proxy"]]
						]
					]
				],
				[50, [[21065309], [21065310, [[268, null, null, [1]]]]]],
				[10, [[21065313], [21065314, [[264, null, null, [1]]]]]],
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
				[1, [[108809132], [108809133, [[45, null, null, [1]]]]]],
				[10, [[370204026], [370204027], [370204053]]],
				[null, [[425301911]]],
				[null, [[676982691]]],
				[null, [[676982693], [676982707]]],
				[null, [[676982863], [676982882]]],
				[null, [[676982960], [676982994], [676982996]]],
				[null, [[676982975], [676982980]]]
			]
		],
		[
			4,
			[
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
				[
					null,
					[
						[21064604],
						[21064605],
						[21064606, [[74, null, null, [1]]]],
						[21064607, [[74, null, null, [1]], [198, null, null, [1]]]]
					]
				],
				[
					null,
					[
						[21064637],
						[21064638],
						[21064639, [[74, null, null, [1]]]],
						[21064640, [[74, null, null, [1]], [198, null, null, [1]]]]
					]
				],
				[null, [[21065147, [[null, 32, null, [null, 3]]]]]],
				[null, [[44711894], [44711895], [44711896], [44712408]]],
				[
					null,
					[
						[425301912, [[null, 7, null, [null, 1]], [212, null, null, [1]]]],
						[425301913, [[null, 7, null, [null, 1]], [212, null, null, [1]]]]
					]
				],
				[null, [[676982681]]],
				[null, [[676982961, [[212, null, null, [1]]]]]],
				[null, [[676982998, [[212, null, null, [1]]]]]]
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
							21062785,
							[[23, null, null, []]],
							[2, [[8, null, null, 5, null, -1], [7, null, null, 5, null, 50]]]
						],
						[
							21062786,
							[[23, null, null, [1]]],
							[
								2,
								[[8, null, null, 5, null, 949], [7, null, null, 5, null, 1000]]
							]
						]
					],
					[
						2,
						[
							[
								12,
								null,
								null,
								null,
								2,
								null,
								"today\\.line\\.me/.+/(main|article)"
							],
							[4, null, 8, null, null, null, null, ["_gmptnl"]]
						]
					],
					7
				],
				[
					1000,
					[
						[
							21062812,
							[[23, null, null, [1]]],
							[2, [[8, null, null, 5, null, 49], [7, null, null, 5, null, 950]]]
						]
					],
					[
						2,
						[
							[
								12,
								null,
								null,
								null,
								2,
								null,
								"today\\.line\\.me/.+/(main|article)"
							],
							[4, null, 8, null, null, null, null, ["_gmptnl"]]
						]
					],
					7
				],
				[
					1000,
					[
						[
							21063916,
							[[23, null, null, []]],
							[2, [[8, null, null, 5, null, -1], [7, null, null, 5, null, 50]]]
						],
						[
							21063917,
							[[23, null, null, [1]]],
							[
								2,
								[[8, null, null, 5, null, 949], [7, null, null, 5, null, 1000]]
							]
						],
						[21064113, [[23, null, null, [1]]]]
					],
					[
						2,
						[
							[
								12,
								null,
								null,
								null,
								2,
								null,
								"today\\.line\\.me/.+/(main|article)"
							],
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
					7
				],
				[
					10,
					[
						[
							21064029,
							null,
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
					]
				],
				[
					10,
					[[21064030, null, [4, null, 8, null, null, null, null, ["_gmptnl"]]]]
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
					[
						[21065019],
						[21065020, [[176, null, null, [1]], [null, 31, null, [null, 0.2]]]],
						[
							21065021,
							[
								[176, null, null, [1]],
								[171, null, null, [1]],
								[null, 31, null, [null, 0.2]]
							]
						],
						[
							21065022,
							[
								[176, null, null, [1]],
								[170, null, null, [1]],
								[null, 31, null, [null, 0.2]],
								[
									null,
									null,
									null,
									[
										null,
										null,
										null,
										[
											"1288355901",
											"165763429",
											"3946387130",
											"3617864019",
											"1901889028",
											"586877095",
											"1194064817",
											"2110468301"
										]
									],
									null,
									5
								],
								[
									null,
									null,
									null,
									[
										null,
										null,
										null,
										[
											"Aqlg67cGet040lbsXgDy/D2VrD8qRr+1qqry9mC8vTMtsyTbpVK98ywx22Iq+jrdfegxil7KnH57mZJVOXopWQwAAABneyJvcmlnaW4iOiJodHRwczovL3d3dy5vdWVzdC1mcmFuY2UuZnI6NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"Ah6osjNcqcICXGZPu6xx2iAXkKSuPSq4ZwNfNxziBSClzdk/Kb+v5YDsrV30szEz3+uIUjVNlrzcBob8MreRKgQAAABgeyJvcmlnaW4iOiJodHRwczovL3d3dy5zcG9ydC5lczo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1NzU0MTc1OTl9",
											"ArlXTELifeodpwApTy166Iu2pQZ8mPIEMo4gEJl0TJOLTvPE7kPKpyqE7HD/ZkMX1RzDHhuF+Cum9j9Nyx6VugEAAABkeyJvcmlnaW4iOiJodHRwczovL20uYWN0aXZlYmVhdC5jb206NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"AthTMGvdiMaCTyxax1tMmm72BachUKXmp3pdGB7nvmeU1FPL+3TFhOJM2Os0ImY6+t3ybZ1s66LV/w61c4dM2gEAAABheyJvcmlnaW4iOiJodHRwczovL20ucGF0cmlrYS5jb206NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"AkbQZQKCrEjuuFT3Dz5xJZR1oRO5hGS0hLhuvFDUDIS4Gz4gcOTVo9mzY0+xNH0l+s+enyePrJpOSa3/Hawu3QwAAABieyJvcmlnaW4iOiJodHRwczovL3RveW9rZWl6YWkubmV0OjQ0MyIsImZlYXR1cmUiOiJFeHBlcmltZW50YWxJc0lucHV0UGVuZGluZyIsImV4cGlyeSI6MTU3NTQxNzU5OX0=",
											"AtTQXUKv5lD000A1Apt69fTsBy01iYJoe4X6vwfbNGTTR0uqCtV/jalRsz5ww9aNZvx65DhbJ9AUavhx8pkqpQcAAABheyJvcmlnaW4iOiJodHRwczovL3d3dy5tZXJrdXIuZGU6NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"AvgHpg20QhUOrucBEHjERR1sGAbOIVnKHkrUSD+Cvp0Uu2bG+kqa50WETP/ZVs4DZ74nLeGF09pqFZm4lNTJZQgAAABdeyJvcmlnaW4iOiJodHRwczovL3d3dy50ei5kZTo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1NzU0MTc1OTl9",
											"Avh35O4hfuadenyBhFekBF1jafEUbbsY1bnyk2uQecDLxU1n0C4anmQm7bhgLfIxKnzaE2XAtQmmlYrYg+br8QcAAABjeyJvcmlnaW4iOiJodHRwczovL3d3dy5vb21waC5jby5pZDo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1NzU0MTc1OTl9"
										]
									],
									null,
									6
								]
							]
						],
						[
							21065023,
							[
								[176, null, null, [1]],
								[173, null, null, [1]],
								[171, null, null, [1]],
								[null, 31, null, [null, 0.2]]
							]
						],
						[
							21065024,
							[
								[176, null, null, [1]],
								[173, null, null, [1]],
								[170, null, null, [1]],
								[null, 31, null, [null, 0.2]],
								[
									null,
									null,
									null,
									[
										null,
										null,
										null,
										[
											"1288355901",
											"165763429",
											"3946387130",
											"3617864019",
											"1901889028",
											"586877095",
											"1194064817",
											"2110468301"
										]
									],
									null,
									5
								],
								[
									null,
									null,
									null,
									[
										null,
										null,
										null,
										[
											"Aqlg67cGet040lbsXgDy/D2VrD8qRr+1qqry9mC8vTMtsyTbpVK98ywx22Iq+jrdfegxil7KnH57mZJVOXopWQwAAABneyJvcmlnaW4iOiJodHRwczovL3d3dy5vdWVzdC1mcmFuY2UuZnI6NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"Ah6osjNcqcICXGZPu6xx2iAXkKSuPSq4ZwNfNxziBSClzdk/Kb+v5YDsrV30szEz3+uIUjVNlrzcBob8MreRKgQAAABgeyJvcmlnaW4iOiJodHRwczovL3d3dy5zcG9ydC5lczo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1NzU0MTc1OTl9",
											"ArlXTELifeodpwApTy166Iu2pQZ8mPIEMo4gEJl0TJOLTvPE7kPKpyqE7HD/ZkMX1RzDHhuF+Cum9j9Nyx6VugEAAABkeyJvcmlnaW4iOiJodHRwczovL20uYWN0aXZlYmVhdC5jb206NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"AthTMGvdiMaCTyxax1tMmm72BachUKXmp3pdGB7nvmeU1FPL+3TFhOJM2Os0ImY6+t3ybZ1s66LV/w61c4dM2gEAAABheyJvcmlnaW4iOiJodHRwczovL20ucGF0cmlrYS5jb206NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"AkbQZQKCrEjuuFT3Dz5xJZR1oRO5hGS0hLhuvFDUDIS4Gz4gcOTVo9mzY0+xNH0l+s+enyePrJpOSa3/Hawu3QwAAABieyJvcmlnaW4iOiJodHRwczovL3RveW9rZWl6YWkubmV0OjQ0MyIsImZlYXR1cmUiOiJFeHBlcmltZW50YWxJc0lucHV0UGVuZGluZyIsImV4cGlyeSI6MTU3NTQxNzU5OX0=",
											"AtTQXUKv5lD000A1Apt69fTsBy01iYJoe4X6vwfbNGTTR0uqCtV/jalRsz5ww9aNZvx65DhbJ9AUavhx8pkqpQcAAABheyJvcmlnaW4iOiJodHRwczovL3d3dy5tZXJrdXIuZGU6NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"AvgHpg20QhUOrucBEHjERR1sGAbOIVnKHkrUSD+Cvp0Uu2bG+kqa50WETP/ZVs4DZ74nLeGF09pqFZm4lNTJZQgAAABdeyJvcmlnaW4iOiJodHRwczovL3d3dy50ei5kZTo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1NzU0MTc1OTl9",
											"Avh35O4hfuadenyBhFekBF1jafEUbbsY1bnyk2uQecDLxU1n0C4anmQm7bhgLfIxKnzaE2XAtQmmlYrYg+br8QcAAABjeyJvcmlnaW4iOiJodHRwczovL3d3dy5vb21waC5jby5pZDo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1NzU0MTc1OTl9"
										]
									],
									null,
									6
								]
							]
						],
						[
							21065095,
							[
								[176, null, null, [1]],
								[null, 31, null, [null, 1]],
								[
									null,
									null,
									null,
									[
										null,
										null,
										null,
										[
											"1288355901",
											"165763429",
											"3946387130",
											"3617864019",
											"1901889028",
											"586877095",
											"1194064817",
											"2110468301"
										]
									],
									null,
									5
								],
								[
									null,
									null,
									null,
									[
										null,
										null,
										null,
										[
											"Aqlg67cGet040lbsXgDy/D2VrD8qRr+1qqry9mC8vTMtsyTbpVK98ywx22Iq+jrdfegxil7KnH57mZJVOXopWQwAAABneyJvcmlnaW4iOiJodHRwczovL3d3dy5vdWVzdC1mcmFuY2UuZnI6NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"Ah6osjNcqcICXGZPu6xx2iAXkKSuPSq4ZwNfNxziBSClzdk/Kb+v5YDsrV30szEz3+uIUjVNlrzcBob8MreRKgQAAABgeyJvcmlnaW4iOiJodHRwczovL3d3dy5zcG9ydC5lczo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1NzU0MTc1OTl9",
											"ArlXTELifeodpwApTy166Iu2pQZ8mPIEMo4gEJl0TJOLTvPE7kPKpyqE7HD/ZkMX1RzDHhuF+Cum9j9Nyx6VugEAAABkeyJvcmlnaW4iOiJodHRwczovL20uYWN0aXZlYmVhdC5jb206NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"AthTMGvdiMaCTyxax1tMmm72BachUKXmp3pdGB7nvmeU1FPL+3TFhOJM2Os0ImY6+t3ybZ1s66LV/w61c4dM2gEAAABheyJvcmlnaW4iOiJodHRwczovL20ucGF0cmlrYS5jb206NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"AkbQZQKCrEjuuFT3Dz5xJZR1oRO5hGS0hLhuvFDUDIS4Gz4gcOTVo9mzY0+xNH0l+s+enyePrJpOSa3/Hawu3QwAAABieyJvcmlnaW4iOiJodHRwczovL3RveW9rZWl6YWkubmV0OjQ0MyIsImZlYXR1cmUiOiJFeHBlcmltZW50YWxJc0lucHV0UGVuZGluZyIsImV4cGlyeSI6MTU3NTQxNzU5OX0=",
											"AtTQXUKv5lD000A1Apt69fTsBy01iYJoe4X6vwfbNGTTR0uqCtV/jalRsz5ww9aNZvx65DhbJ9AUavhx8pkqpQcAAABheyJvcmlnaW4iOiJodHRwczovL3d3dy5tZXJrdXIuZGU6NDQzIiwiZmVhdHVyZSI6IkV4cGVyaW1lbnRhbElzSW5wdXRQZW5kaW5nIiwiZXhwaXJ5IjoxNTc1NDE3NTk5fQ==",
											"AvgHpg20QhUOrucBEHjERR1sGAbOIVnKHkrUSD+Cvp0Uu2bG+kqa50WETP/ZVs4DZ74nLeGF09pqFZm4lNTJZQgAAABdeyJvcmlnaW4iOiJodHRwczovL3d3dy50ei5kZTo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1NzU0MTc1OTl9",
											"Avh35O4hfuadenyBhFekBF1jafEUbbsY1bnyk2uQecDLxU1n0C4anmQm7bhgLfIxKnzaE2XAtQmmlYrYg+br8QcAAABjeyJvcmlnaW4iOiJodHRwczovL3d3dy5vb21waC5jby5pZDo0NDMiLCJmZWF0dXJlIjoiRXhwZXJpbWVudGFsSXNJbnB1dFBlbmRpbmciLCJleHBpcnkiOjE1NzU0MTc1OTl9"
										]
									],
									null,
									6
								],
								[247, null, null, [1]]
							]
						]
					],
					[
						2,
						[
							[
								4,
								null,
								17,
								null,
								null,
								null,
								null,
								[
									"1288355901",
									"165763429",
									"3946387130",
									"3617864019",
									"1901889028",
									"586877095",
									"1194064817",
									"2110468301"
								]
							],
							[6, null, null, 3, null, 0],
							[4, null, 8, null, null, null, null, ["chrome"]]
						]
					],
					17
				],
				[
					null,
					[
						[
							21065270,
							[
								[null, 24, null, [null, 21065270]],
								[null, 25, null, [null, 21065270]]
							]
						],
						[
							21065271,
							[
								[null, 24, null, [null, 21065271]],
								[null, 25, null, [null, 21065271]],
								[
									187,
									null,
									null,
									[],
									[
										[
											[
												2,
												[
													[4, null, 22],
													[
														4,
														null,
														9,
														null,
														null,
														null,
														null,
														["IntersectionObserver"]
													],
													[4, null, 9, null, null, null, null, ["Proxy"]]
												]
											],
											[1]
										]
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
							21065326,
							null,
							[2, [[8, null, null, 1, null, 9], [7, null, null, 1, null, 20]]]
						],
						[
							21065327,
							[[244, null, null, [1]], [245, null, null, [1]]],
							[2, [[8, null, null, 1, null, 19], [7, null, null, 1, null, 30]]]
						]
					],
					[4, null, 3],
					19
				],
				[
					1,
					[
						[21065328],
						[
							21065329,
							[
								[244, null, null, [1]],
								[245, null, null, [1]],
								[257, null, null, [1]]
							]
						]
					],
					null,
					19
				],
				[
					1000,
					[
						[
							21065331,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21065331]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21065331]]
							],
							[6, null, null, 4, null, 2]
						],
						[
							21065332,
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
							21065333,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21065333]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21065333]]
							],
							[6, null, null, 4, null, 4]
						],
						[
							21065334,
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
							21065335,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21065335]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21065335]]
							],
							[6, null, null, 4, null, 6]
						],
						[
							21065336,
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
					50,
					[
						[21065167, [[139, null, null, []]]],
						[21065168, [[159, null, null, []], [139, null, null, []]]]
					],
					[4, null, 12],
					16
				]
			]
		],
		[
			9,
			[
				[
					1000,
					[[21061726]],
					[4, null, 13, null, null, null, null, ["PnHSZjekOp", "jvnwkvnp"]]
				]
			]
		],
		[11, [[50, [[21065145], [21065146, [[255, null, null, [1]]]]]]]],
		[
			12,
			[
				[1, [[21064123], [21064124]]],
				[
					10,
					[[21064522], [21064523, [[203, null, null, [1]]]]],
					[4, null, 9, null, null, null, null, ["LayoutShift"]]
				]
			]
		],
		[
			13,
			[
				[
					100,
					[
						[
							21065005,
							null,
							[4, null, 6, null, null, null, null, ["21064523"]]
						],
						[
							21065006,
							[[240, null, null, [1]]],
							[4, null, 6, null, null, null, null, ["21064523"]]
						],
						[
							21065011,
							[[241, null, null, [1]]],
							[4, null, 6, null, null, null, null, ["21064523"]]
						]
					],
					[4, null, 9, null, null, null, null, ["LayoutShift"]]
				],
				[
					1000,
					[
						[
							21065195,
							null,
							[
								2,
								[
									[4, null, 6, null, null, null, null, ["21064523"]],
									[4, null, 10]
								]
							]
						]
					],
					[4, null, 9, null, null, null, null, ["LayoutShift"]]
				],
				[
					1000,
					[
						[
							21065196,
							null,
							[
								2,
								[
									[4, null, 6, null, null, null, null, ["21064523"]],
									[1, [[4, null, 10]]]
								]
							]
						]
					],
					[4, null, 9, null, null, null, null, ["LayoutShift"]]
				],
				[
					1,
					[
						[21065304],
						[21065305, [[215, null, null, [1]], [null, 37, null, []]]],
						[21065306, [[215, null, null, [1]], [null, 37, null, [null, 100]]]],
						[21065307, [[215, null, null, [1]], [null, 37, null, [null, 250]]]],
						[21065308, [[215, null, null, [1]], [null, 37, null, [null, 1000]]]]
					]
				]
			]
		]
	]
]));
