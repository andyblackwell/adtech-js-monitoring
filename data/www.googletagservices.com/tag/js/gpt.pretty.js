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
		qa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		ra = 0,
		sa = function(a, b) {
			for (var c in b) a[c] = b[c];
		},
		m = function(a, b) {
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
		ua = function(a, b) {
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
		xa = function(a) {
			var b = a;
			return function() {
				if (b) {
					var c = b;
					b = null;
					c();
				}
			};
		};
	var ya = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		Ga = function(a) {
			if (!za.test(a)) return a;
			-1 != a.indexOf("&") && (a = a.replace(Aa, "&amp;"));
			-1 != a.indexOf("<") && (a = a.replace(Ba, "&lt;"));
			-1 != a.indexOf(">") && (a = a.replace(Ca, "&gt;"));
			-1 != a.indexOf('"') && (a = a.replace(Da, "&quot;"));
			-1 != a.indexOf("'") && (a = a.replace(Ea, "&#39;"));
			-1 != a.indexOf("\x00") && (a = a.replace(Fa, "&#0;"));
			return a;
		},
		Aa = /&/g,
		Ba = /</g,
		Ca = />/g,
		Da = /"/g,
		Ea = /'/g,
		Fa = /\x00/g,
		za = /[\x00&<>"']/,
		Ia = function(a, b) {
			var c = 0;
			a = ya(String(a)).split(".");
			b = ya(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c =
						Ha(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == g[1].length ? 0 : parseInt(g[1], 10)
						) ||
						Ha(0 == f[2].length, 0 == g[2].length) ||
						Ha(f[2], g[2]);
					f = f[3];
					g = g[3];
				} while (0 == c);
			}
			return c;
		},
		Ha = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var u;
	a: {
		var Ja = h.navigator;
		if (Ja) {
			var Ka = Ja.userAgent;
			if (Ka) {
				u = Ka;
				break a;
			}
		}
		u = "";
	}
	var La = {
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
		this.b = (a === Ma && b) || "";
		this.c = Na;
	};
	v.prototype.j = !0;
	v.prototype.a = function() {
		return this.b;
	};
	var Oa = function(a) {
			return a instanceof v && a.constructor === v && a.c === Na
				? a.b
				: "type_error:Const";
		},
		w = function(a) {
			return new v(Ma, a);
		},
		Na = {},
		Ma = {};
	var x = function(a, b) {
		this.c = (a === Pa && b) || "";
		this.g = Qa;
	};
	x.prototype.j = !0;
	x.prototype.a = function() {
		return this.c.toString();
	};
	x.prototype.u = !0;
	x.prototype.b = function() {
		return 1;
	};
	var Ta = function(a, b) {
			a = Ra.exec(y(a).toString());
			var c = a[3] || "";
			return new x(Pa, a[1] + Sa("?", a[2] || "", b) + Sa("#", c, void 0));
		},
		y = function(a) {
			return a instanceof x && a.constructor === x && a.g === Qa
				? a.c
				: "type_error:TrustedResourceUrl";
		},
		Ra = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		Ua = function(a) {
			for (var b = "", c = 0; c < a.length; c++) b += Oa(a[c]);
			return new x(Pa, b);
		},
		Qa = {},
		Sa = function(a, b, c) {
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
		Pa = {};
	var z = function(a, b) {
		this.c = (a === Va && b) || "";
		this.g = Wa;
	};
	z.prototype.j = !0;
	z.prototype.a = function() {
		return this.c.toString();
	};
	z.prototype.u = !0;
	z.prototype.b = function() {
		return 1;
	};
	var Xa = function(a) {
			return a instanceof z && a.constructor === z && a.g === Wa
				? a.c
				: "type_error:SafeUrl";
		},
		Ya = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		Wa = {},
		Va = {};
	var A = function() {
		this.c = "";
		this.i = Za;
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
	var $a = function(a) {
			return a instanceof A && a.constructor === A && a.i === Za
				? a.c
				: "type_error:SafeHtml";
		},
		ab = function(a) {
			if (a instanceof A) return a;
			var b = "object" == typeof a,
				c = null;
			b && a.u && (c = a.b());
			a = Ga(b && a.j ? a.a() : String(a));
			return B(a, c);
		},
		bb = /^[a-zA-Z0-9-]+$/,
		cb = {
			action: !0,
			cite: !0,
			data: !0,
			formaction: !0,
			href: !0,
			manifest: !0,
			poster: !0,
			src: !0
		},
		eb = function(a, b) {
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
					if (!bb.test(g)) throw Error("");
					d = a[g];
					if (null != d) {
						c = g;
						if (d instanceof v) d = Oa(d);
						else {
							if ("style" == c.toLowerCase()) throw Error("");
							if (/^on/i.test(c)) throw Error("");
							if (c.toLowerCase() in cb)
								if (d instanceof x) d = y(d).toString();
								else if (d instanceof z) d = Xa(d);
								else if ("string" === typeof d)
									d instanceof z ||
										((d = "object" == typeof d && d.j ? d.a() : String(d)),
										Ya.test(d) || (d = "about:invalid#zClosurez"),
										(d = new z(Va, d))),
										(d = d.a());
								else throw Error("");
						}
						d.j && (d = d.a());
						c = c + '="' + Ga(String(d)) + '"';
						e += " " + c;
					}
				}
			var g = "<script" + e;
			e = void 0;
			null == e ? (e = []) : Array.isArray(e) || (e = [e]);
			!0 === La.script
				? (g += ">")
				: ((b = db(e)),
				  (g += ">" + $a(b).toString() + "\x3c/script>"),
				  (b = b.b()));
			(a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
			return B(g, b);
		},
		gb = function(a) {
			var b = ab(fb),
				c = b.b(),
				d = [],
				e = function(f) {
					Array.isArray(f)
						? p(f, e)
						: ((f = ab(f)),
						  d.push($a(f).toString()),
						  (f = f.b()),
						  0 == c ? (c = f) : 0 != f && c != f && (c = null));
				};
			p(a, e);
			return B(d.join($a(b).toString()), c);
		},
		db = function(a) {
			return gb(Array.prototype.slice.call(arguments));
		},
		Za = {},
		B = function(a, b) {
			var c = new A();
			c.c = a;
			c.g = b;
			return c;
		};
	B("<!DOCTYPE html>", 0);
	var fb = B("", 0);
	B("<br>", 0);
	var hb = function(a, b) {
			a.write($a(b));
		},
		ib = function(a, b) {
			a.src = y(b);
			(b = ma()) && a.setAttribute("nonce", b);
		};
	var jb = function(a) {
		jb[" "](a);
		return a;
	};
	jb[" "] = oa;
	var C = function() {},
		kb = "function" == typeof Uint8Array,
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
							(kb && e instanceof Uint8Array)
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
							? ((e += a.c), (a.h[e] = a.h[e] || lb))
							: (mb(a), (a.b[e] = a.b[e] || lb));
			if (d && d.length) for (b = 0; b < d.length; b++) nb(a, d[b]);
		},
		lb = [],
		mb = function(a) {
			var b = a.g + a.c;
			a.h[b] || (a.b = a.h[b] = {});
		},
		F = function(a, b) {
			if (b < a.g) {
				b += a.c;
				var c = a.h[b];
				return c === lb ? (a.h[b] = []) : c;
			}
			if (a.b) return (c = a.b[b]), c === lb ? (a.b[b] = []) : c;
		},
		G = function(a, b, c) {
			a = F(a, b);
			return null == a ? c : a;
		},
		ob = function(a, b) {
			a = F(a, b);
			a = null == a ? a : +a;
			return null == a ? 0 : a;
		},
		pb = function(a, b, c) {
			b < a.g ? (a.h[b + a.c] = c) : (mb(a), (a.b[b] = c));
		},
		nb = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					g = F(a, f);
				null != g && ((c = f), (d = g), pb(a, f, void 0));
			}
			return c ? (pb(a, c, d), c) : 0;
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
			b == lb && (b = a.a[c] = []);
			return b;
		},
		qb = function(a, b, c) {
			a.a || (a.a = {});
			c = c || [];
			for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].h;
			a.a[b] = c;
			pb(a, b, d);
		};
	var rb = function() {
		return (
			-1 != u.indexOf("iPad") ||
			(-1 != u.indexOf("Android") && -1 == u.indexOf("Mobile")) ||
			-1 != u.indexOf("Silk")
		);
	};
	var sb = function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1);
	};
	var tb = function() {
		var a = document;
		var b = "IFRAME";
		"application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
		return a.createElement(b);
	};
	var vb = function(a) {
			ub();
			return new x(Pa, a);
		},
		ub = oa;
	var wb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
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
			return -1 != u.indexOf(a);
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
		Gb = t(function() {
			return rb() ||
				(-1 == u.indexOf("iPod") &&
					-1 == u.indexOf("iPhone") &&
					-1 == u.indexOf("Android") &&
					-1 == u.indexOf("IEMobile"))
				? rb()
					? 1
					: 0
				: 2;
		});
	var J = function(a) {
		D(this, a, Hb, Ib);
	};
	m(J, C);
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
			var c = I(a, J, 2);
			if (!c.length) return Lb(a, b);
			a = G(a, 1, 0);
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
								a = ob(a, 6);
								break a;
							case 5:
								a = G(a, 7, "");
								break a;
						}
						a = void 0;
					}
				if (null != a) {
					if (6 == b) return e === a;
					if (9 == b) return 0 == Ia(e, a);
					if (d)
						switch (b) {
							case 7:
								return e < a;
							case 8:
								return e > a;
							case 12:
								return new RegExp(a).test(e);
							case 10:
								return -1 == Ia(e, a);
							case 11:
								return 1 == Ia(e, a);
						}
				}
			}
		},
		Nb = function(a, b) {
			return !a || !(!b || !Mb(a, b));
		};
	var Pb = function(a) {
		D(this, a, Ob, null);
	};
	m(Pb, C);
	var Ob = [4];
	var K = function(a) {
		D(this, a, Qb, Rb);
	};
	m(K, C);
	var Sb = function(a) {
		D(this, a, null, null);
	};
	m(Sb, C);
	var Qb = [5],
		Rb = [[1, 2, 3, 6]];
	var L = function() {
		var a = {};
		this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
	};
	k(L);
	var Tb = /^true$/.test("false");
	var Ub = Tb,
		Vb = function(a, b) {
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
		Wb = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return (a = F(a, 1)), (a = null == a ? a : !!a), null == a ? !1 : a;
				case 2:
					return ob(a, 2);
				case 3:
					return G(a, 3, "");
				case 6:
					return F(a, 4);
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
			b = new K(b);
			b = Zb(b);
			a = Wb(b, a);
			return null != a ? a : c;
		},
		Zb = function(a) {
			var b = L.f().a;
			if (b) {
				var c = wa(I(a, Sb, 5), function(d) {
					return Nb(H(d, J, 1), b);
				});
				if (c) return H(c, Pb, 2);
			}
			return H(a, Pb, 4);
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
				var e = new K(d),
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
	var M = function(a) {
			this.methodName = a;
		},
		kc = new M(1),
		lc = new M(15),
		mc = new M(2),
		nc = new M(3),
		oc = new M(4),
		pc = new M(5),
		qc = new M(6),
		rc = new M(7),
		sc = new M(8),
		tc = new M(9),
		uc = new M(10),
		vc = new M(11),
		wc = new M(12),
		xc = new M(13),
		yc = new M(14),
		N = function(a, b, c) {
			c.hasOwnProperty(a.methodName) ||
				Object.defineProperty(c, String(a.methodName), { value: b });
		},
		O = function(a, b, c) {
			return b[a.methodName] || c || function() {};
		},
		zc = function(a) {
			N(pc, bc, a);
			N(qc, cc, a);
			N(rc, dc, a);
			N(sc, ec, a);
			N(xc, hc, a);
			N(lc, jc, a);
		},
		Ac = function(a) {
			N(
				oc,
				function(b) {
					L.f().a = b;
				},
				a
			);
			N(
				tc,
				function(b, c) {
					var d = L.f();
					d.a[3][b] || (d.a[3][b] = c);
				},
				a
			);
			N(
				uc,
				function(b, c) {
					var d = L.f();
					d.a[4][b] || (d.a[4][b] = c);
				},
				a
			);
			N(
				vc,
				function(b, c) {
					var d = L.f();
					d.a[5][b] || (d.a[5][b] = c);
				},
				a
			);
			N(
				yc,
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
				return O(pc, b)(d, e, c);
			};
			a.c = function(d, e) {
				return O(qc, b)(d, e, c);
			};
			a.a = function() {
				O(lc, b)(c);
			};
		};
	k(Cc);
	var P = function(a) {
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
	var Q = function() {
			this.a = function() {};
			this.b = function() {
				return [];
			};
		},
		Jc = function(a, b, c) {
			a.a = function(d) {
				O(mc, b, function() {
					return [];
				})(d, c);
			};
			a.b = function() {
				return O(nc, b, function() {
					return [];
				})(c);
			};
		};
	k(Q);
	var Kc = function() {
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
		(a[6] = function(b) {
			return r(Q.f().b(), parseInt(b, 10));
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
	k(Kc);
	var Lc = function() {
		var a = void 0 === a ? h : a;
		return a.ggeac || (a.ggeac = {});
	};
	var Nc = function(a) {
		D(this, a, Mc, null);
	};
	m(Nc, C);
	var Mc = [2];
	Nc.prototype.getId = function() {
		return G(this, 1, 0);
	};
	Nc.prototype.m = function() {
		return G(this, 7, 0);
	};
	var Pc = function(a) {
		D(this, a, Oc, null);
	};
	m(Pc, C);
	var Oc = [2];
	Pc.prototype.m = function() {
		return G(this, 5, 0);
	};
	var Rc = function(a) {
		D(this, a, Qc, null);
	};
	m(Rc, C);
	var R = function(a) {
		D(this, a, Sc, null);
	};
	m(R, C);
	var Qc = [1, 4, 2, 3],
		Sc = [2];
	R.prototype.m = function() {
		return G(this, 1, 0);
	};
	var Tc = [12, 13],
		Uc = function() {},
		Vc = function(a, b, c, d) {
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
			(c = Ic()) &&
				p(c.split(",") || [], function(g) {
					(g = parseInt(g, 10)) && (a.c[g] = !0);
				});
			return a;
		},
		$c = function(a, b, c) {
			var d = [],
				e = Wc(a.a, b);
			if (e.length) {
				9 !== b && (a.a = Xc(a.a, b));
				var f = r(Tc, b);
				p(e, function(g) {
					if ((g = Yc(a, g))) {
						var l = g.getId();
						d.push(l);
						Zc(a, l, f ? 4 : c);
						var n = I(g, K, 2);
						n &&
							(f
								? p(ic(), function(va) {
										return gc(n, va);
								  })
								: gc(n, c));
					}
				});
			}
			return d;
		},
		Zc = function(a, b, c) {
			a.b[c] || (a.b[c] = []);
			a.b[c].push(b);
		},
		ad = function(a, b) {
			a.a.push.apply(
				a.a,
				ca(
					ta(
						q(b, function(c) {
							return new R(c);
						}),
						function(c) {
							return !r(Tc, c.m());
						}
					)
				)
			);
		},
		Yc = function(a, b) {
			var c = L.f().a;
			if (!Nb(H(b, J, 3), c)) return null;
			var d = I(b, Nc, 2),
				e = d.length * G(b, 1, 0),
				f = G(b, 6, 0);
			if (f) {
				e = Fc(f);
				if (null === e) return null;
				b = bd(b, e);
				return !b || (c && !Nb(H(b, J, 3), c)) ? null : cd(a, [b], 1);
			}
			d = c
				? ta(d, function(g) {
						return Nb(H(g, J, 3), c);
				  })
				: d;
			return d.length
				? (b = G(b, 4, 0))
					? dd(a, b, e, d)
					: cd(a, d, e / 1e3)
				: null;
		},
		dd = function(a, b, c, d) {
			var e = null != a.g[b] ? a.g[b] : 1e3;
			if (0 >= e) return null;
			d = cd(a, d, c / e);
			a.g[b] = d ? 0 : e - c;
			return d;
		},
		cd = function(a, b, c) {
			var d = a.c,
				e = ua(b, function(f) {
					return !!d[f.getId()];
				});
			return e ? e : a.i ? null : Ab(b, c);
		},
		ed = function(a, b) {
			N(
				kc,
				function(c) {
					a.c[c] = !0;
				},
				b
			);
			N(
				mc,
				function(c, d) {
					return $c(a, c, d);
				},
				b
			);
			N(
				nc,
				function(c) {
					return (a.b[c] || []).concat(a.b[4]);
				},
				b
			);
			N(
				wc,
				function(c) {
					return ad(a, c);
				},
				b
			);
		};
	k(Uc);
	var Wc = function(a, b) {
			return (
				((a = ua(a, function(c) {
					return c.m() == b;
				})) &&
					I(a, Pc, 2)) ||
				[]
			);
		},
		Xc = function(a, b) {
			return ta(a, function(c) {
				return c.m() != b;
			});
		},
		bd = function(a, b) {
			var c = I(a, Nc, 2),
				d = c.length,
				e = G(a, 1, 0);
			a = G(a, 8, 0);
			var f = (b - a) % d;
			return b < a || b - a - f >= d * e - 1 ? null : c[f];
		};
	var fd = function() {
		this.a = function() {};
	};
	k(fd);
	var gd = function(a) {
		fd.f().a(a);
	};
	var jd = function(a) {
			var b = hd.f(),
				c = { D: S(211), I: S(227), N: S(226) },
				d = void 0,
				e = 2;
			d = void 0 === d ? Lc() : d;
			e = void 0 === e ? 0 : e;
			d.hasOwnProperty("init-done")
				? (O(wc, d)(
						q(I(a, R, 2), function(f) {
							return f.h;
						})
				  ),
				  O(xc, d)(
						q(I(a, K, 1), function(f) {
							return f.h;
						}),
						e
				  ),
				  b && O(yc, d)(b),
				  id(d, e))
				: (ed(Vc(Uc.f(), I(a, R, 2), e, c), d),
				  zc(d),
				  Ac(d),
				  Bc(d),
				  id(d, e),
				  gc(I(a, K, 1), e),
				  (Ub = Ub || !(!c || !c.U)),
				  gd(Kc.f()),
				  b && gd(b));
		},
		id = function(a, b) {
			a = void 0 === a ? Lc() : a;
			b = void 0 === b ? 0 : b;
			var c = a,
				d = b;
			d = void 0 === d ? 0 : d;
			Jc(Q.f(), c, d);
			c = a;
			b = void 0 === b ? 0 : b;
			Dc(Cc.f(), c, b);
			fd.f().a = O(yc, a);
			Cc.f().a();
		};
	var kd = function(a, b, c) {
		var d = "script";
		d = void 0 === d ? "" : d;
		var e = a.createElement("link");
		try {
			e.rel = "preload";
			if (b instanceof x) var f = y(b).toString();
			else {
				if (b instanceof z) var g = Xa(b);
				else {
					if (b instanceof z) var l = b;
					else
						(b = "object" == typeof b && b.j ? b.a() : String(b)),
							Ya.test(b) || (b = "about:invalid#zClosurez"),
							(l = new z(Va, b));
					g = Xa(l);
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
	var ld = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		md = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		nd = function(a) {
			return ld.test(a) && !md.test(a);
		},
		od = function(a) {
			return a.replace(/[\W]/g, function(b) {
				return "&#" + b.charCodeAt() + ";";
			});
		},
		T = h,
		pd = function(a, b) {
			a = "https://adservice" + (b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(h.location.hostname)];
			U[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(U[1]));
			return a + "?" + b.join("&");
		},
		U,
		V,
		qd = function() {
			T = h;
			U = T.googleToken = T.googleToken || {};
			var a = +new Date();
			(U[1] && U[3] > a && 0 < U[2]) ||
				((U[1] = ""), (U[2] = -1), (U[3] = -1), (U[4] = ""), (U[6] = ""));
			V = T.googleIMState = T.googleIMState || {};
			nd(V[1]) || (V[1] = ".google.com");
			"array" == pa(V[5]) || (V[5] = []);
			"boolean" !== typeof V[6] && (V[6] = !1);
			"array" == pa(V[7]) || (V[7] = []);
			"number" !== typeof V[8] && (V[8] = 0);
		},
		rd = function(a) {
			try {
				a();
			} catch (b) {
				h.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		td = function(a) {
			"complete" == h.document.readyState ||
			"loaded" == h.document.readyState ||
			(h.document.currentScript && h.document.currentScript.async)
				? sd(3)
				: a();
		},
		ud = 0,
		vd = {
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
			C: rd
		},
		wd = {
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
				return ".google.com" != V[1] && 2 < ++ud;
			},
			F: function() {
				return V[7];
			},
			C: function(a) {
				td(function() {
					rd(a);
				});
			}
		},
		sd = function(a) {
			if (1e-5 > Math.random()) {
				h.google_image_requests || (h.google_image_requests = []);
				var b = h.document.createElement("img");
				b.src =
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
					a;
				h.google_image_requests.push(b);
			}
		};
	vd.s = function() {
		if (!vd.o()) {
			var a = h.document,
				b = function(e) {
					e = pd("js", e);
					var f = Fb();
					kd(a, e, f);
					f = a.createElement("script");
					f.type = "text/javascript";
					f.onerror = function() {
						return h.processGoogleToken({}, 2);
					};
					e = vb(e);
					ib(f, e);
					try {
						(a.head || a.body || a.documentElement).appendChild(f), vd.A();
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
	wd.s = function() {
		if (!wd.o()) {
			var a = h.document,
				b = pd("sync.js", V[1]);
			kd(a, b);
			b = od(b);
			var c = jb("script"),
				d = "",
				e = Fb();
			e && (d = 'nonce="' + od(e) + '"');
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
			td(function() {
				a.write(f);
				wd.A();
			});
		}
	};
	var xd = function(a) {
			qd();
			(U[3] >= +new Date() && U[2] >= +new Date()) || a.s();
		},
		zd = function() {
			h.processGoogleToken =
				h.processGoogleToken ||
				function(a, b) {
					return yd(vd, a, b);
				};
			xd(vd);
		},
		Ad = function() {
			h.processGoogleTokenSync =
				h.processGoogleTokenSync ||
				function(a, b) {
					return yd(wd, a, b);
				};
			xd(wd);
		},
		yd = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				g = parseInt(b.validLifetimeSecs || "", 10),
				l = b["1p_jar"] || "";
			b = b.pucrd || "";
			qd();
			1 == c ? a.L() : a.K();
			if (!d && a.O()) nd(".google.com") && (V[1] = ".google.com"), a.s();
			else {
				var n = (T.googleToken = T.googleToken || {}),
					va =
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
				var Od = !(U[3] >= +new Date()) && 0 != c;
				if (va || e || Od)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(g = e + 1e3 * g),
						sd(c),
						(n[5] = c),
						(n[1] = d),
						(n[2] = f),
						(n[3] = g),
						(n[4] = l),
						(n[6] = b),
						qd();
				if (va || !a.o()) {
					c = a.F();
					for (d = 0; d < c.length; d++) a.C(c[d]);
					c.length = 0;
				}
			}
		};
	var Bd = function(a) {
		a = void 0 === a ? h : a;
		return (a = a.performance) && a.now ? a.now() : null;
	};
	var W = h.performance,
		Cd = !!(W && W.mark && W.measure && W.clearMarks),
		Dd = t(function() {
			var a;
			if ((a = Cd)) (a = Ic()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
			return a;
		});
	var Ed = function(a, b, c) {
			this.a = void 0 === a ? null : a;
			this.g = void 0 === b ? "jserror" : b;
			this.b = null;
			this.c = void 0 === c ? 0.01 : c;
			this.l = this.i;
		},
		Fd = function(a, b) {
			a.b = b;
		};
	Ed.prototype.i = function(a, b, c, d, e) {
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
			ib(
				a,
				vb(
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
	var Gd = function(a, b) {
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
					Dd() &&
					(W.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
					W.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
				!a.l(420, d, a.c, void 0, a.g))
			)
				throw d;
		}
	};
	var Hd = w("gpt/pubads_impl_"),
		Id = w("https://securepubads.g.doubleclick.net/"),
		Jd = w("https://ff.doubleclick.net");
	var Kd = function(a) {
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
	var Ld = function(a) {
			var b = Bd(a);
			b &&
				((b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				2048 > a.length && a.push(b));
		},
		Md = function(a, b, c) {
			var d = window;
			return function() {
				var e = Bd(),
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
							duration: (Bd() || 0) - e,
							type: f
						}),
						(f = d.google_js_reporting_queue =
							d.google_js_reporting_queue || []),
						2048 > f.length && f.push(e));
				}
				return g;
			};
		},
		Nd = function(a, b) {
			return Md(a, b, function(c, d) {
				new Ed().i(c, d);
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
				Pd(b);
			}
			this.R = new PerformanceObserver(
				Nd(640, function(c) {
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
			this.w = Nd(641, this.w.bind(this));
		},
		Qd = function() {};
	Y.prototype = da(Qd.prototype);
	Y.prototype.constructor = Y;
	if (ja) ja(Y, Qd);
	else
		for (var Rd in Qd)
			if ("prototype" != Rd)
				if (Object.defineProperties) {
					var Sd = Object.getOwnPropertyDescriptor(Qd, Rd);
					Sd && Object.defineProperty(Y, Rd, Sd);
				} else Y[Rd] = Qd[Rd];
	var Td = function() {
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
			Pd(a);
		}
	};
	function Pd(a) {
		window.fetch(a, {
			keepalive: !0,
			credentials: "include",
			redirect: "follow",
			method: "get",
			mode: "no-cors"
		});
	}
	var Ud = function() {
			return h.googletag || (h.googletag = {});
		},
		Vd = function(a, b) {
			var c = Ud();
			c.hasOwnProperty(a) || (c[a] = b);
		},
		Wd = function(a, b) {
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
	var Xd = function() {
		sa(this, Z);
	};
	k(Xd);
	var S = function(a) {
			return Xd.f()[a];
		},
		Yd = Ud(),
		Zd = Xd.f();
	sa(Zd, Yd._vars_);
	Yd._vars_ = Zd;
	var $d = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var ae = (function(a, b) {
			var c = b || $d;
			return function() {
				var d = this || h;
				d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
				var e =
					(Object.prototype.hasOwnProperty.call(a, qa) && a[qa]) ||
					(a[qa] = ++ra);
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
		be = function() {
			return 0 === ae(S(172));
		};
	var ce = function() {
		return Eb("5") || 0;
	};
	Vd("getVersion", function() {
		return "2020030201";
	});
	var hd = function() {
		var a = {};
		this[3] = ((a[3] = be),
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
			return r(c, d(e));
		}),
		(a[21] = function() {
			return S(148);
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return S(204);
		}),
		(a[4] = ce),
		a);
		this[5] = {};
	};
	k(hd);
	var de = [],
		ee = function(a) {
			var b = new Rc(S(246));
			a = new Rc(a || de);
			if (!I(b, K, 1).length && I(a, K, 1).length) {
				var c = I(a, K, 1);
				qb(b, 1, c);
			}
			!I(b, R, 2).length &&
				I(a, R, 2).length &&
				((a = I(a, R, 2)), qb(b, 2, a));
			jd(b);
		};
	var fe = function(a, b) {
			if (a.getAttribute("data-ready")) b();
			else {
				var c = xa(b),
					d = function() {
						c();
						sb(a, "load", d);
						sb(window, "message", e);
					};
				var e = function(f) {
					"ready" === f.data &&
						f.source === a.contentWindow &&
						(c(), sb(a, "load", d), sb(window, "message", e));
				};
				a.addEventListener && a.addEventListener("load", d, !1);
				window.addEventListener && window.addEventListener("message", e, !1);
			}
		},
		ge = function() {
			var a =
				void 0 === a
					? Ua([Jd, w("/tag/js/fetch_frame_"), w("2020030201"), w(".html")])
					: a;
			var b = tb();
			b.style.display = "none";
			b.name = "gpt_fetch_frame";
			var c = Ec();
			a = c ? Ta(a, String(c)) : a;
			b.src = y(a).toString();
			document.documentElement.appendChild(b);
			fe(b, function() {
				b.setAttribute("data-ready", "true");
			});
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
			var a = Ua([Id, Hd, w("2020030201"), w(".js")]),
				b = Ec();
			return b ? Ta(a, String(b)) : a;
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
			Xd.f()[172] = a;
			new ee(b);
			Q.f().a(12);
			Q.f().a(5);
			P(200) || P(220) || ((b = S(150)), qd(), nd(b) && (V[1] = b));
		},
		ke = function(a, b, c) {
			var d = Ud();
			a = a || d.fifWin || window;
			b = b || a.document;
			var e = d.fifWin ? window : a;
			Vd("cmd", []);
			if (d.evalScripts) d.evalScripts();
			else {
				je(b, c);
				try {
					a.PerformanceObserver &&
						(a.PerformanceLongTaskTiming && Kd(a),
						P(203) &&
							!window.google_plmetrics &&
							(Td(), (window.google_plmetrics = !0)));
				} catch (n) {}
				Ld(a);
				a = ie();
				c = P(200) || P(239);
				if (he(b)) {
					var f = "gpt-impl-" + Math.random();
					try {
						hb(b, eb(a, { id: f }));
					} catch (n) {}
					b.getElementById(f) && ((d._loadStarted_ = !0), c || Ad());
				}
				if (!d._loadStarted_) {
					c || zd();
					b = d.fifWin ? e.document : b;
					var g = b.createElement("script");
					ib(g, a);
					g.async = !0;
					var l = b.head || b.body || b.documentElement;
					"complete" !== e.document.readyState && d.fifWin
						? Wd(e, function() {
								return void l.appendChild(g);
						  })
						: l.appendChild(g);
					d._loadStarted_ = !0;
				}
				d = (e = P(244)) && (P(245) || P(306) || P(307));
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
			if ("array" == pa(E)) {
				le = E;
				break a;
			}
		} catch (a) {}
		le = [];
	}
	(function(a, b, c) {
		var d = new Ed(null, "gpt_exception", 0.01);
		Fd(d, function(e) {
			e.methodId = 420;
		});
		Gd(d, function() {
			return ke(a, b, c);
		});
	})(void 0, void 0, le);
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
	[
		[null, 13, null, [null, 1]],
		[null, 7, null, [null, 0.1]],
		[167, null, null, [1]],
		[20, null, null, [], [[[1, [[4, null, 1]]], [1]]]],
		[130, null, null, [1]],
		[281, null, null, [1]],
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
		[45, null, null, []],
		[null, null, 2, [null, null, "1-0-37"]],
		[215, null, null, [1]],
		[null, 39, null, [null, 72]],
		[null, 38, null, [null, 24]],
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
				[50, [[21062414], [21062415, [[64, null, null, [1]]]]]],
				[50, [[21062452], [21062453, [[43, null, null, [1]]]]]],
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
				[null, [[21063065], [21063066, [[116, null, null, [1]]]]]],
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
				[1, [[21064411], [21064412, [[144, null, null, [1]]]]]],
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
				[10, [[21064712], [21064713, [[229, null, null, [1]]]]]],
				[1, [[21064758], [21064759, [[206, null, null, [1]]]]]],
				[10, [[21065112], [21065113, [[162, null, null, [1]]]]]],
				[10, [[21065138], [21065139, [[148, null, null, [1]]]]]],
				[10, [[21065165], [21065166, [[253, null, null, [1]]]]], null, 19],
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
					]
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
				[null, [[21065240], [21065241, [[262, null, null, [1]]]]]],
				[50, [[21065352], [21065353, [[123, null, null, [1]]]]]],
				[
					null,
					[
						[21065369],
						[21065371, [[287, null, null, [1]], [253, null, null, [1]]]]
					]
				],
				[
					null,
					[
						[21065372],
						[21065374, [[242, null, null, [1]], [253, null, null, [1]]]]
					]
				],
				[null, [[21065388], [21065389, [[54, null, null, [1]]]]]],
				[50, [[21065390], [21065391, [[252, null, null, [1]]]]]],
				[50, [[21065392], [21065393, [[276, null, null, [1]]]]]],
				[10, [[21065401], [21065402, [[280, null, null, [1]]]]]],
				[50, [[21065432], [21065433, [[112, null, null, []]]]]],
				[10, [[21065443], [21065444, [[139, null, null, [1]]]]]],
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
				[50, [[21065575], [21065576, [[297, null, null, [1]]]]]],
				[
					10,
					[
						[21065585],
						[21065586, [[275, null, null, [1]]]],
						[21065587, [[296, null, null, [1]], [275, null, null, [1]]]]
					]
				],
				[10, [[21065588], [21065589, [[null, 42, null, [null, 100]]]]]],
				[
					null,
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
				[10, [[21065621], [21065622, [[301, null, null, [1]]]]]],
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
				]
			]
		],
		[
			4,
			[
				[null, [[44711894], [44711895], [44711896], [44712408], [44713783]]],
				[null, [[44714449, [[null, 7, null, [null, 1]]]]]],
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
						[676982961, [[212, null, null, [1]]]],
						[676982996, [[null, 7, null, [null, 1]]]]
					]
				],
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
						[21065463],
						[21065464],
						[21065465],
						[21065466, [[263, null, null, [1]]]],
						[21065467, [[267, null, null, [1]]]],
						[21065468, [[286, null, null, [1]]]]
					]
				],
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
						[
							21064113,
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
				[50, [[21065399], [21065400, [[274, null, null, [1]]]]]],
				[
					10,
					[
						[21065603],
						[21065604, [[244, null, null, [1]], [245, null, null, [1]]]]
					],
					null,
					19
				],
				[
					1000,
					[
						[
							21065618,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21065618]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21065618]]
							],
							[6, null, null, 4, null, 2]
						],
						[
							21065619,
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
							21065627,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21065627]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21065627]]
							],
							[6, null, null, 4, null, 4]
						],
						[
							21065628,
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
							21065629,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21065629]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21065629]]
							],
							[6, null, null, 4, null, 6]
						],
						[
							21065630,
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
					]
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
					]
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
					]
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
					]
				]
			]
		],
		[
			12,
			[
				[
					1,
					[
						[44713525, [[230, null, null, []]]],
						[44713528],
						[44713529, [[230, null, null, []]]],
						[44713538],
						[44713539],
						[44713540]
					],
					null,
					null,
					null,
					13,
					null,
					800
				],
				[
					50,
					[[44714061], [44714062, [[289, null, null, [1]]]]],
					null,
					null,
					null,
					13,
					null,
					200
				],
				[
					10,
					[
						[44715867],
						[44715868, [[261, null, null, []], [272, null, null, []]]]
					],
					null,
					null,
					null,
					13,
					null,
					100
				],
				[1, [[21064123], [21064124]]],
				[
					20,
					[[21064522], [21064523, [[203, null, null, [1]]]]],
					[4, null, 9, null, null, null, null, ["LayoutShift"]]
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
				]
			]
		]
	]
]));
