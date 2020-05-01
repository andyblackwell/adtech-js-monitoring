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
		na = function(a) {
			if (a && a != h) return la(a.document);
			null === ma && (ma = la(h.document));
			return ma;
		},
		oa = /^[\w+/_-]+[=]{0,2}$/,
		ma = null,
		la = function(a) {
			return (a = a.querySelector && a.querySelector("script[nonce]")) &&
				(a = a.nonce || a.getAttribute("nonce")) &&
				oa.test(a)
				? a
				: "";
		},
		pa = function(a) {
			a = a.split(".");
			for (var b = h, c = 0; c < a.length; c++)
				if (((b = b[a[c]]), null == b)) return null;
			return b;
		},
		qa = function() {},
		l = function(a) {
			a.w = void 0;
			a.f = function() {
				return a.w ? a.w : (a.w = new a());
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
					var k = f[g];
					b.call(void 0, k, g, a) && (d[e++] = k);
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
	w.prototype.v = !0;
	w.prototype.b = function() {
		return 1;
	};
	var x = function(a) {
			return a instanceof w && a.constructor === w && a.g === Ca
				? a.c
				: "type_error:TrustedResourceUrl";
		},
		Da = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		Ca = {},
		Ea = function(a, b, c) {
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
	var Fa = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		Na = function(a) {
			if (!Ga.test(a)) return a;
			-1 != a.indexOf("&") && (a = a.replace(Ha, "&amp;"));
			-1 != a.indexOf("<") && (a = a.replace(Ia, "&lt;"));
			-1 != a.indexOf(">") && (a = a.replace(Ja, "&gt;"));
			-1 != a.indexOf('"') && (a = a.replace(Ka, "&quot;"));
			-1 != a.indexOf("'") && (a = a.replace(La, "&#39;"));
			-1 != a.indexOf("\x00") && (a = a.replace(Ma, "&#0;"));
			return a;
		},
		Ha = /&/g,
		Ia = /</g,
		Ja = />/g,
		Ka = /"/g,
		La = /'/g,
		Ma = /\x00/g,
		Ga = /[\x00&<>"']/,
		Pa = function(a, b) {
			var c = 0;
			a = Fa(String(a)).split(".");
			b = Fa(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c =
						Oa(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == g[1].length ? 0 : parseInt(g[1], 10)
						) ||
						Oa(0 == f[2].length, 0 == g[2].length) ||
						Oa(f[2], g[2]);
					f = f[3];
					g = g[3];
				} while (0 == c);
			}
			return c;
		},
		Oa = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var y = function(a, b) {
		this.c = (a === Qa && b) || "";
		this.g = Ra;
	};
	y.prototype.j = !0;
	y.prototype.a = function() {
		return this.c.toString();
	};
	y.prototype.v = !0;
	y.prototype.b = function() {
		return 1;
	};
	var Sa = function(a) {
			return a instanceof y && a.constructor === y && a.g === Ra
				? a.c
				: "type_error:SafeUrl";
		},
		Ta = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		Ra = {},
		Qa = {};
	var z;
	a: {
		var Ua = h.navigator;
		if (Ua) {
			var Va = Ua.userAgent;
			if (Va) {
				z = Va;
				break a;
			}
		}
		z = "";
	}
	var A = function() {
		this.c = "";
		this.i = Wa;
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
	var Xa = function(a) {
			return a instanceof A && a.constructor === A && a.i === Wa
				? a.c
				: "type_error:SafeHtml";
		},
		Ya = function(a) {
			if (a instanceof A) return a;
			var b = "object" == typeof a,
				c = null;
			b && a.v && (c = a.b());
			a = Na(b && a.j ? a.a() : String(a));
			return C(a, c);
		},
		Za = /^[a-zA-Z0-9-]+$/,
		$a = {
			action: !0,
			cite: !0,
			data: !0,
			formaction: !0,
			href: !0,
			manifest: !0,
			poster: !0,
			src: !0
		},
		bb = function(a, b) {
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
					if (!Za.test(g)) throw Error("");
					d = a[g];
					if (null != d) {
						c = g;
						if (d instanceof v) d = Aa(d);
						else {
							if ("style" == c.toLowerCase()) throw Error("");
							if (/^on/i.test(c)) throw Error("");
							if (c.toLowerCase() in $a)
								if (d instanceof w) d = x(d).toString();
								else if (d instanceof y) d = Sa(d);
								else if ("string" === typeof d)
									d instanceof y ||
										((d = "object" == typeof d && d.j ? d.a() : String(d)),
										Ta.test(d) || (d = "about:invalid#zClosurez"),
										(d = new y(Qa, d))),
										(d = d.a());
								else throw Error("");
						}
						d.j && (d = d.a());
						c = c + '="' + Na(String(d)) + '"';
						e += " " + c;
					}
				}
			var g = "<script" + e;
			e = void 0;
			null == e ? (e = []) : Array.isArray(e) || (e = [e]);
			!0 === ya.script
				? (g += ">")
				: ((b = ab(e)),
				  (g += ">" + Xa(b).toString() + "\x3c/script>"),
				  (b = b.b()));
			(a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
			return C(g, b);
		},
		db = function(a) {
			var b = Ya(cb),
				c = b.b(),
				d = [],
				e = function(f) {
					Array.isArray(f)
						? p(f, e)
						: ((f = Ya(f)),
						  d.push(Xa(f).toString()),
						  (f = f.b()),
						  0 == c ? (c = f) : 0 != f && c != f && (c = null));
				};
			p(a, e);
			return C(d.join(Xa(b).toString()), c);
		},
		ab = function(a) {
			return db(Array.prototype.slice.call(arguments));
		},
		Wa = {},
		C = function(a, b) {
			var c = new A();
			c.c = a;
			c.g = b;
			return c;
		};
	C("<!DOCTYPE html>", 0);
	var cb = C("", 0);
	C("<br>", 0);
	var eb = function(a, b) {
			a.write(Xa(b));
		},
		fb = function(a) {
			var b = na(a.ownerDocument && a.ownerDocument.defaultView);
			b && a.setAttribute("nonce", b);
		};
	var gb = function(a) {
		gb[" "](a);
		return a;
	};
	gb[" "] = qa;
	var hb = {},
		ib = null;
	var D = function() {},
		jb = "function" == typeof Uint8Array,
		F = function(a, b, c, d) {
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
							(jb && e instanceof Uint8Array)
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
							? ((e += a.c), (a.h[e] = a.h[e] || kb))
							: (lb(a), (a.b[e] = a.b[e] || kb));
			if (d && d.length) for (b = 0; b < d.length; b++) mb(a, d[b]);
		},
		kb = [],
		lb = function(a) {
			var b = a.g + a.c;
			a.h[b] || (a.b = a.h[b] = {});
		},
		G = function(a, b) {
			if (b < a.g) {
				b += a.c;
				var c = a.h[b];
				return c === kb ? (a.h[b] = []) : c;
			}
			if (a.b) return (c = a.b[b]), c === kb ? (a.b[b] = []) : c;
		},
		H = function(a, b, c) {
			a = G(a, b);
			return null == a ? c : a;
		},
		nb = function(a, b) {
			a = G(a, b);
			a = null == a ? a : +a;
			return null == a ? 0 : a;
		},
		ob = function(a, b, c) {
			b < a.g ? (a.h[b + a.c] = c) : (lb(a), (a.b[b] = c));
		},
		pb = function(a, b, c) {
			0 !== c
				? ob(a, b, c)
				: b < a.g
					? (a.h[b + a.c] = null)
					: (lb(a), delete a.b[b]);
			return a;
		},
		mb = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					g = G(a, f);
				null != g && ((c = f), (d = g), ob(a, f, void 0));
			}
			return c ? (ob(a, c, d), c) : 0;
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
			qb(a, b, c);
			b = a.a[c];
			b == kb && (b = a.a[c] = []);
			return b;
		},
		qb = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				for (var d = G(a, c), e = [], f = 0; f < d.length; f++)
					e[f] = new b(d[f]);
				a.a[c] = e;
			}
		},
		rb = function(a, b, c) {
			a.a || (a.a = {});
			c = c || [];
			for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].h;
			a.a[b] = c;
			ob(a, b, d);
		};
	D.prototype.i = jb
		? function() {
				var a = Uint8Array.prototype.toJSON;
				Uint8Array.prototype.toJSON = function() {
					var b;
					void 0 === b && (b = 0);
					if (!ib) {
						ib = {};
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
							hb[e] = f;
							for (var g = 0; g < f.length; g++) {
								var k = f[g];
								void 0 === ib[k] && (ib[k] = g);
							}
						}
					}
					b = hb[b];
					c = [];
					for (d = 0; d < this.length; d += 3) {
						var n = this[d],
							B = (e = d + 1 < this.length) ? this[d + 1] : 0;
						k = (f = d + 2 < this.length) ? this[d + 2] : 0;
						g = n >> 2;
						n = ((n & 3) << 4) | (B >> 4);
						B = ((B & 15) << 2) | (k >> 6);
						k &= 63;
						f || ((k = 64), e || (B = 64));
						c.push(b[g], b[n], b[B] || "", b[k] || "");
					}
					return c.join("");
				};
				try {
					return JSON.stringify(this.h && this.h, sb);
				} finally {
					Uint8Array.prototype.toJSON = a;
				}
		  }
		: function() {
				return JSON.stringify(this.h && this.h, sb);
		  };
	var sb = function(a, b) {
		return "number" !== typeof b ||
			(!isNaN(b) && Infinity !== b && -Infinity !== b)
			? b
			: String(b);
	};
	var ub = function(a) {
			tb();
			return new w(Ba, a);
		},
		tb = qa;
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
		Db = function(a) {
			return yb() ? null : Math.floor(1e3 * zb(a));
		},
		Eb = function(a, b, c) {
			try {
				if (a.localStorage) return a.localStorage.setItem(b, c), c;
			} catch (d) {}
			return null;
		},
		xb = t(function() {
			return Cb("MSIE");
		}),
		Cb = function(a) {
			return -1 != z.indexOf(a);
		},
		Fb = /^(-?[0-9.]{1,30})$/,
		Gb = function(a, b) {
			return Fb.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		Hb = function() {
			try {
				return na();
			} catch (a) {}
		},
		Ib = t(function() {
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
		Jb = function(a, b) {
			var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
			Bb(a, function(d, e) {
				d && (c += "&" + e + "=" + encodeURIComponent(d));
			});
			window.fetch(c, {
				keepalive: !0,
				credentials: "include",
				redirect: "follow",
				method: "get",
				mode: "no-cors"
			});
		};
	var K = function(a) {
		F(this, a, Kb, Lb);
	};
	m(K, D);
	var Kb = [2, 8],
		Lb = [[3, 4, 5], [6, 7]];
	var Mb = function(a) {
			return null != a ? !a : a;
		},
		Nb = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		Pb = function(a, b) {
			var c = J(a, K, 2);
			if (!c.length) return Ob(a, b);
			a = H(a, 1, 0);
			if (1 == a) return Mb(Pb(c[0], b));
			c = q(c, function(d) {
				return function() {
					return Pb(d, b);
				};
			});
			switch (a) {
				case 2:
					return Nb(c, !1);
				case 3:
					return Nb(c, !0);
			}
		},
		Ob = function(a, b) {
			var c = mb(a, Lb[0]);
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
								a = nb(a, 6);
								break a;
							case 5:
								a = H(a, 7, "");
								break a;
						}
						a = void 0;
					}
				if (null != a) {
					if (6 == b) return e === a;
					if (9 == b) return 0 == Pa(e, a);
					if (d)
						switch (b) {
							case 7:
								return e < a;
							case 8:
								return e > a;
							case 12:
								return new RegExp(a).test(e);
							case 10:
								return -1 == Pa(e, a);
							case 11:
								return 1 == Pa(e, a);
						}
				}
			}
		},
		Qb = function(a, b) {
			return !a || !(!b || !Pb(a, b));
		};
	var Sb = function(a) {
		F(this, a, Rb, null);
	};
	m(Sb, D);
	var Rb = [4];
	var L = function(a) {
		F(this, a, Tb, Ub);
	};
	m(L, D);
	var Vb = function(a) {
		F(this, a, null, null);
	};
	m(Vb, D);
	var Tb = [5],
		Ub = [[1, 2, 3, 6, 7]];
	var M = function() {
		var a = {};
		this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
	};
	l(M);
	var Wb = /^true$/.test("false");
	var Xb = Wb,
		Yb = function(a, b) {
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
		Zb = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return (a = G(a, 1)), (a = null == a ? a : !!a), null == a ? !1 : a;
				case 7:
					return H(a, 3, "");
				case 2:
					return nb(a, 2);
				case 3:
					return H(a, 3, "");
				case 6:
					return G(a, 4);
				default:
					return null;
			}
		},
		$b = t(function() {
			if (!Xb) return {};
			try {
				var a =
					window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
				if (a) return JSON.parse(a);
			} catch (b) {}
			return {};
		}),
		cc = function(a, b, c, d) {
			d = void 0 === d ? 0 : d;
			var e = $b();
			if (e[a] && null != e[a][b]) return e[a][b];
			b = ac(d)[a][b];
			if (!b) return c;
			b = new L(b);
			b = bc(b);
			a = Zb(b, a);
			return null != a ? a : c;
		},
		bc = function(a) {
			var b = M.f().a;
			if (b) {
				var c = xa(J(a, Vb, 5), function(d) {
					return Qb(I(d, K, 1), b);
				});
				if (c) return I(c, Sb, 2);
			}
			return I(a, Sb, 4);
		},
		dc = function() {
			this.a = {};
			this.b = [];
		};
	l(dc);
	var ec = function(a, b, c) {
			return !!cc(1, a, void 0 === b ? !1 : b, c);
		},
		fc = function(a, b, c) {
			b = void 0 === b ? 0 : b;
			a = Number(cc(2, a, b, c));
			return isNaN(a) ? b : a;
		},
		gc = function(a, b, c) {
			return cc(3, a, void 0 === b ? "" : b, c);
		},
		hc = function(a, b, c) {
			b = void 0 === b ? [] : b;
			return cc(6, a, b, c);
		},
		ac = function(a) {
			var b = {};
			return (
				dc.f().a[a] ||
				(dc.f().a[a] = ((b[1] = {}), (b[2] = {}), (b[3] = {}), (b[6] = {}), b))
			);
		},
		ic = function(a, b) {
			var c = ac(b);
			Bb(a, function(d, e) {
				return Bb(d, function(f, g) {
					return (c[e][g] = f);
				});
			});
		},
		jc = function(a, b) {
			var c = ac(b);
			p(a, function(d) {
				var e = mb(d, Ub[0]),
					f = Yb(d, e);
				f && (c[e][f] = d.h);
			});
		},
		kc = function(a, b) {
			var c = ac(b);
			p(a, function(d) {
				var e = new L(d),
					f = mb(e, Ub[0]);
				(e = Yb(e, f)) && (c[f][e] || (c[f][e] = d));
			});
		},
		lc = function() {
			return q(Object.keys(dc.f().a), function(a) {
				return Number(a);
			});
		},
		mc = function(a) {
			r(dc.f().b, a) || ic(ac(4), a);
		};
	var N = function(a) {
			this.methodName = a;
		},
		nc = new N(1),
		oc = new N(15),
		pc = new N(2),
		qc = new N(3),
		rc = new N(4),
		sc = new N(5),
		tc = new N(6),
		uc = new N(7),
		vc = new N(8),
		wc = new N(9),
		xc = new N(10),
		yc = new N(11),
		zc = new N(12),
		Ac = new N(13),
		Bc = new N(14),
		O = function(a, b, c) {
			c.hasOwnProperty(a.methodName) ||
				Object.defineProperty(c, String(a.methodName), { value: b });
		},
		P = function(a, b, c) {
			return b[a.methodName] || c || function() {};
		},
		Cc = function(a) {
			O(sc, ec, a);
			O(tc, fc, a);
			O(uc, gc, a);
			O(vc, hc, a);
			O(Ac, kc, a);
			O(oc, mc, a);
		},
		Dc = function(a) {
			O(
				rc,
				function(b) {
					M.f().a = b;
				},
				a
			);
			O(
				wc,
				function(b, c) {
					var d = M.f();
					d.a[3][b] || (d.a[3][b] = c);
				},
				a
			);
			O(
				xc,
				function(b, c) {
					var d = M.f();
					d.a[4][b] || (d.a[4][b] = c);
				},
				a
			);
			O(
				yc,
				function(b, c) {
					var d = M.f();
					d.a[5][b] || (d.a[5][b] = c);
				},
				a
			);
			O(
				Bc,
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
		Ec = function(a) {
			a.hasOwnProperty("init-done") ||
				Object.defineProperty(a, "init-done", { value: !0 });
		};
	var Fc = function() {
			this.b = function(a, b) {
				return void 0 === b ? !1 : b;
			};
			this.c = function(a, b) {
				return void 0 === b ? 0 : b;
			};
			this.a = function() {};
		},
		Gc = function(a, b, c) {
			a.b = function(d, e) {
				return P(sc, b)(d, e, c);
			};
			a.c = function(d, e) {
				return P(tc, b)(d, e, c);
			};
			a.a = function() {
				P(oc, b)(c);
			};
		};
	l(Fc);
	var Q = function(a) {
		var b = void 0 === b ? !1 : b;
		return Fc.f().b(a, b);
	};
	var Ic = function(a) {
		F(this, a, Hc, null);
	};
	m(Ic, D);
	var Jc = function(a) {
		F(this, a, null, null);
	};
	m(Jc, D);
	var Hc = [1],
		Kc = function(a) {
			var b = new Jc();
			return pb(b, 1, a);
		},
		Lc = function(a, b) {
			return pb(a, 2, b);
		},
		Mc = function(a, b) {
			qb(a, Jc, 1);
			var c = a.a[1];
			c || (c = a.a[1] = []);
			b = b ? b : new Jc();
			a = G(a, 1);
			c.push(b);
			a.push(b.h);
		};
	var Nc = function(a) {
			var b = window;
			a = void 0 === a ? 0 : a;
			a = 0 != a ? "google_experiment_mod" + a : "google_experiment_mod";
			a: {
				var c = -1;
				try {
					b.localStorage && (c = parseInt(b.localStorage.getItem(a), 10));
				} catch (d) {
					c = null;
					break a;
				}
				c = 0 <= c && 1e3 > c ? c : null;
			}
			null === c
				? (b = (c = Db(b)) && Eb(b, a, String(c)) ? c : null)
				: (b = c);
			return b;
		},
		Pc = function(a) {
			var b = window;
			a: {
				try {
					if (b.localStorage) {
						var c = b.localStorage.getItem("google_experiment_mod");
						break a;
					}
				} catch (g) {}
				c = null;
			}
			var d = c || "";
			c = null;
			try {
				if (((c = new Ic(d ? JSON.parse(d) : null)), d)) {
					var e = new Ic(d ? JSON.parse(d) : null);
					Mc(e, Lc(Kc(1), -1));
					e.i();
				}
			} catch (g) {
				Oc(d), (c = new Ic());
			}
			e = J(c, Jc, 1);
			if (
				(e = wa(e, function(g) {
					return H(g, 1, 0) === a;
				}))
			) {
				var f = H(e, 2, 0);
				if (null === f || isNaN(f)) Oc(d);
				else return f;
			}
			d = Db(b);
			if (null === d) return null;
			e ? pb(e, 2, d) : Mc(c, Lc(Kc(a), d));
			return Eb(b, "google_experiment_mod", c.i()) ? d : null;
		},
		Oc = function(a) {
			0.01 > Math.random() && Jb({ data: a }, "ls_tamp");
		};
	var Qc = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var Rc = null,
		Sc = function() {
			if (null === Rc) {
				Rc = "";
				try {
					var a = "";
					try {
						a = h.top.location.hash;
					} catch (c) {
						a = h.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						Rc = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return Rc;
		};
	var R = function() {
			this.a = function() {};
			this.b = function() {
				return [];
			};
		},
		Tc = function(a, b, c) {
			a.a = function(d) {
				P(pc, b, function() {
					return [];
				})(d, c);
			};
			a.b = function() {
				return P(qc, b, function() {
					return [];
				})(c);
			};
		};
	l(R);
	var Uc = function(a, b) {
			a = pa(a);
			a = "function" === typeof a ? a() : a;
			return typeof a === b ? a : void 0;
		},
		Vc = function() {
			var a = {};
			this[3] = ((a[8] = function(b) {
				return !!pa(b);
			}),
			(a[9] = function(b) {
				b = pa(b);
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
				return r(R.f().b(), parseInt(b, 10));
			}),
			(a[27] = function(b) {
				b = Uc(b, "boolean");
				return void 0 !== b ? b : void 0;
			}),
			a);
			a = {};
			this[4] = ((a[3] = function() {
				return Ib();
			}),
			(a[6] = function(b) {
				b = Uc(b, "number");
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
				b = Uc(b, "string");
				return void 0 !== b ? b : void 0;
			}),
			a);
		};
	l(Vc);
	var Wc = function() {
		var a = void 0 === a ? h : a;
		return a.ggeac || (a.ggeac = {});
	};
	var Yc = function(a) {
		F(this, a, Xc, null);
	};
	m(Yc, D);
	var Xc = [2];
	Yc.prototype.getId = function() {
		return H(this, 1, 0);
	};
	Yc.prototype.m = function() {
		return H(this, 7, 0);
	};
	var $c = function(a) {
		F(this, a, Zc, null);
	};
	m($c, D);
	var Zc = [2];
	$c.prototype.m = function() {
		return H(this, 5, 0);
	};
	var bd = function(a) {
		F(this, a, ad, null);
	};
	m(bd, D);
	var S = function(a) {
		F(this, a, cd, null);
	};
	m(S, D);
	var ad = [1, 4, 2, 3],
		cd = [2];
	S.prototype.m = function() {
		return H(this, 1, 0);
	};
	var dd = [12, 13],
		ed = function() {},
		fd = function(a, b, c, d) {
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
			(c = Sc()) &&
				p(c.split(",") || [], function(g) {
					(g = parseInt(g, 10)) && (a.c[g] = !0);
				});
			return a;
		},
		kd = function(a, b, c) {
			var d = [],
				e = gd(a.a, b);
			if (e.length) {
				9 !== b && (a.a = hd(a.a, b));
				var f = r(dd, b);
				p(e, function(g) {
					if ((g = id(a, g, c))) {
						var k = g.getId();
						d.push(k);
						jd(a, k, f ? 4 : c);
						var n = J(g, L, 2);
						n &&
							(f
								? p(lc(), function(B) {
										return jc(n, B);
								  })
								: jc(n, c));
					}
				});
			}
			return d;
		},
		jd = function(a, b, c) {
			a.b[c] || (a.b[c] = []);
			a = a.b[c];
			r(a, b)
				? Jb({ eids: JSON.stringify(a), dup: b }, "gpt_dupeid")
				: a.push(b);
		},
		ld = function(a, b) {
			a.a.push.apply(
				a.a,
				ca(
					va(
						q(b, function(c) {
							return new S(c);
						}),
						function(c) {
							return !r(dd, c.m());
						}
					)
				)
			);
		},
		id = function(a, b, c) {
			var d = M.f().a;
			if (!Qb(I(b, K, 3), d)) return null;
			var e = J(b, Yc, 2),
				f = e.length * H(b, 1, 0),
				g = H(b, 6, 0);
			if (g)
				return (
					(f = 2 == c ? Pc(g) : Nc(g)),
					null === f && (f = Math.floor(1e3 * zb(window))),
					(b = md(b, f)),
					!b || (d && !Qb(I(b, K, 3), d)) ? null : nd(a, [b], 1)
				);
			c = d
				? va(e, function(k) {
						return Qb(I(k, K, 3), d);
				  })
				: e;
			return c.length
				? (b = H(b, 4, 0))
					? od(a, b, f, c)
					: nd(a, c, f / 1e3)
				: null;
		},
		od = function(a, b, c, d) {
			var e = null != a.g[b] ? a.g[b] : 1e3;
			if (0 >= e) return null;
			d = nd(a, d, c / e);
			a.g[b] = d ? 0 : e - c;
			return d;
		},
		nd = function(a, b, c) {
			var d = a.c,
				e = wa(b, function(f) {
					return !!d[f.getId()];
				});
			return e ? e : a.i ? null : Ab(b, c);
		},
		pd = function(a, b) {
			O(
				nc,
				function(c) {
					a.c[c] = !0;
				},
				b
			);
			O(
				pc,
				function(c, d) {
					return kd(a, c, d);
				},
				b
			);
			O(
				qc,
				function(c) {
					return (a.b[c] || []).concat(a.b[4]);
				},
				b
			);
			O(
				zc,
				function(c) {
					return ld(a, c);
				},
				b
			);
		};
	l(ed);
	var gd = function(a, b) {
			return (
				((a = wa(a, function(c) {
					return c.m() == b;
				})) &&
					J(a, $c, 2)) ||
				[]
			);
		},
		hd = function(a, b) {
			return va(a, function(c) {
				return c.m() != b;
			});
		},
		md = function(a, b) {
			var c = J(a, Yc, 2),
				d = c.length,
				e = H(a, 1, 0);
			a = H(a, 8, 0);
			var f = (b - a) % d;
			return b < a || b - a - f >= d * e - 1 ? null : c[f];
		};
	var qd = function() {
		this.a = function() {};
	};
	l(qd);
	var rd = function(a) {
		qd.f().a(a);
	};
	var ud = function(a) {
			var b = sd.f(),
				c = { G: T(211), J: T(227), O: T(226) },
				d = void 0,
				e = 2;
			d = void 0 === d ? Wc() : d;
			e = void 0 === e ? 0 : e;
			d.hasOwnProperty("init-done")
				? (P(zc, d)(
						q(J(a, S, 2), function(f) {
							return f.h;
						})
				  ),
				  P(Ac, d)(
						q(J(a, L, 1), function(f) {
							return f.h;
						}),
						e
				  ),
				  b && P(Bc, d)(b),
				  td(d, e))
				: (pd(fd(ed.f(), J(a, S, 2), e, c), d),
				  Cc(d),
				  Dc(d),
				  Ec(d),
				  td(d, e),
				  jc(J(a, L, 1), e),
				  (Xb = Xb || !(!c || !c.V)),
				  rd(Vc.f()),
				  b && rd(b));
		},
		td = function(a, b) {
			a = void 0 === a ? Wc() : a;
			b = void 0 === b ? 0 : b;
			var c = a,
				d = b;
			d = void 0 === d ? 0 : d;
			Tc(R.f(), c, d);
			c = a;
			b = void 0 === b ? 0 : b;
			Gc(Fc.f(), c, b);
			qd.f().a = P(Bc, a);
			Fc.f().a();
		};
	var vd = function(a, b, c) {
		var d = "script";
		d = void 0 === d ? "" : d;
		var e = a.createElement("link");
		try {
			e.rel = "preload";
			if (b instanceof w) var f = x(b).toString();
			else {
				if (b instanceof y) var g = Sa(b);
				else {
					if (b instanceof y) var k = b;
					else
						(b = "object" == typeof b && b.j ? b.a() : String(b)),
							Ta.test(b) || (b = "about:invalid#zClosurez"),
							(k = new y(Qa, b));
					g = Sa(k);
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
	var wd = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		xd = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		yd = function(a) {
			return wd.test(a) && !xd.test(a);
		},
		zd = function(a) {
			return a.replace(/[\W]/g, function(b) {
				return "&#" + b.charCodeAt() + ";";
			});
		},
		U = h,
		Ad = function(a, b) {
			a = "https://adservice" + (b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(h.location.hostname)];
			V[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(V[1]));
			return a + "?" + b.join("&");
		},
		V,
		W,
		Bd = function() {
			U = h;
			V = U.googleToken = U.googleToken || {};
			var a = +new Date();
			(V[1] && V[3] > a && 0 < V[2]) ||
				((V[1] = ""), (V[2] = -1), (V[3] = -1), (V[4] = ""), (V[6] = ""));
			W = U.googleIMState = U.googleIMState || {};
			yd(W[1]) || (W[1] = ".google.com");
			Array.isArray(W[5]) || (W[5] = []);
			"boolean" !== typeof W[6] && (W[6] = !1);
			Array.isArray(W[7]) || (W[7] = []);
			"number" !== typeof W[8] && (W[8] = 0);
		},
		Cd = function(a) {
			try {
				a();
			} catch (b) {
				h.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		Ed = function(a) {
			"complete" == h.document.readyState ||
			"loaded" == h.document.readyState ||
			(h.document.currentScript && h.document.currentScript.async)
				? Dd(3)
				: a();
		},
		Fd = 0,
		Gd = {
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
			F: Cd
		},
		Hd = {
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
				return ".google.com" != W[1] && 2 < ++Fd;
			},
			H: function() {
				return W[7];
			},
			F: function(a) {
				Ed(function() {
					Cd(a);
				});
			}
		},
		Dd = function(a) {
			if (1e-5 > Math.random()) {
				h.google_image_requests || (h.google_image_requests = []);
				var b = h.document.createElement("img");
				b.src =
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
					a;
				h.google_image_requests.push(b);
			}
		};
	Gd.s = function() {
		if (!Gd.o()) {
			var a = h.document,
				b = function(e) {
					e = Ad("js", e);
					var f = Hb();
					vd(a, e, f);
					f = a.createElement("script");
					f.type = "text/javascript";
					f.onerror = function() {
						return h.processGoogleToken({}, 2);
					};
					e = ub(e);
					f.src = x(e);
					fb(f);
					try {
						(a.head || a.body || a.documentElement).appendChild(f), Gd.B();
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
	Hd.s = function() {
		if (!Hd.o()) {
			var a = h.document,
				b = Ad("sync.js", W[1]),
				c = Hb();
			vd(a, b, c);
			b = zd(b);
			var d = gb("script"),
				e = "";
			c && (e = 'nonce="' + zd(c) + '"');
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
			Ed(function() {
				a.write(f);
				Hd.B();
			});
		}
	};
	var Id = function(a) {
			Bd();
			(V[3] >= +new Date() && V[2] >= +new Date()) || a.s();
		},
		Kd = function() {
			h.processGoogleToken =
				h.processGoogleToken ||
				function(a, b) {
					return Jd(Gd, a, b);
				};
			Id(Gd);
		},
		Ld = function() {
			h.processGoogleTokenSync =
				h.processGoogleTokenSync ||
				function(a, b) {
					return Jd(Hd, a, b);
				};
			Id(Hd);
		},
		Jd = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				g = parseInt(b.validLifetimeSecs || "", 10),
				k = b["1p_jar"] || "";
			b = b.pucrd || "";
			Bd();
			1 == c ? a.M() : a.L();
			if (!d && a.P()) yd(".google.com") && (W[1] = ".google.com"), a.s();
			else {
				var n = (U.googleToken = U.googleToken || {}),
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
				e = e && !a.o() && (!(V[3] >= +new Date()) || "NT" == V[1]);
				var $d = !(V[3] >= +new Date()) && 0 != c;
				if (B || e || $d)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(g = e + 1e3 * g),
						Dd(c),
						(n[5] = c),
						(n[1] = d),
						(n[2] = f),
						(n[3] = g),
						(n[4] = k),
						(n[6] = b),
						Bd();
				if (B || !a.o()) {
					c = a.H();
					for (d = 0; d < c.length; d++) a.F(c[d]);
					c.length = 0;
				}
			}
		};
	var Md = function(a) {
		a = void 0 === a ? h : a;
		return (a = a.performance) && a.now ? a.now() : null;
	};
	var X = h.performance,
		Nd = !!(X && X.mark && X.measure && X.clearMarks),
		Od = t(function() {
			var a;
			if ((a = Nd)) (a = Sc()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
			return a;
		});
	var Pd = function(a, b, c) {
			this.a = void 0 === a ? null : a;
			this.g = void 0 === b ? "jserror" : b;
			this.b = null;
			this.c = void 0 === c ? 0.01 : c;
			this.l = this.i;
		},
		Qd = function(a, b) {
			a.b = b;
		};
	Pd.prototype.i = function(a, b, c, d, e) {
		c = void 0 === c ? this.c : c;
		e = void 0 === e ? this.g : e;
		if (Math.random() > c) return !1;
		(b.error && b.meta && b.id) || (b = new Qc(b, { context: a, id: e }));
		if (d || this.b) (b.meta = {}), this.b && this.b(b.meta), d && d(b.meta);
		h.google_js_errors = h.google_js_errors || [];
		h.google_js_errors.push(b);
		h.error_rep_loaded ||
			((b = h.document),
			(a = b.createElement("script")),
			(c = ub(
				h.location.protocol +
					"//pagead2.googlesyndication.com/pagead/js/err_rep.js"
			)),
			(a.src = x(c)),
			fb(a),
			(b = b.getElementsByTagName("script")[0]) &&
				b.parentNode &&
				b.parentNode.insertBefore(a, b),
			(h.error_rep_loaded = !0));
		return !1;
	};
	var Rd = function(a, b) {
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
					Od() &&
					(X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
					X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
				!a.l(420, d, a.c, void 0, a.g))
			)
				throw d;
		}
	};
	var Sd = new v(u, "gpt/pubads_impl_"),
		Td = new v(u, "https://securepubads.g.doubleclick.net/");
	var Ud = function(a) {
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
	var Vd = function(a) {
			var b = Md(a);
			b &&
				((b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				2048 > a.length && a.push(b));
		},
		Wd = function(a, b, c) {
			var d = window;
			return function() {
				var e = Md(),
					f = 3;
				try {
					var g = b.apply(this, arguments);
				} catch (k) {
					f = 13;
					if (c) return c(a, k), g;
					throw k;
				} finally {
					d.google_measure_js_timing &&
						e &&
						((e = {
							label: a.toString(),
							value: e,
							duration: (Md() || 0) - e,
							type: f
						}),
						(f = d.google_js_reporting_queue =
							d.google_js_reporting_queue || []),
						2048 > f.length && f.push(e));
				}
				return g;
			};
		},
		Xd = function(a, b) {
			return Wd(a, b, function(c, d) {
				new Pd().i(c, d);
			});
		};
	var Yd = function() {};
	function Y(a, b) {
		return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
	}
	var ae = function() {
		var a = this;
		this.I = this.S = this.u = this.l = this.g = 0;
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
			Zd(b));
		this.T = new PerformanceObserver(
			Xd(640, function(c) {
				c = ba(c.getEntries());
				for (var d = c.next(); !d.done; d = c.next()) {
					d = d.value;
					if ("layout-shift" === d.entryType) {
						var e = d;
						e.hadRecentInput ||
							(Q(241) && !(0.01 < e.value)) ||
							((a.g += Number(e.value)),
							Number(e.value) > a.l && (a.l = Number(e.value)),
							(a.u += 1));
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
		this.b = Xd(641, this.b.bind(this));
	};
	ka(ae, Yd);
	var be = function() {
		var a = new ae();
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
	ae.prototype.b = function() {
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
				(a += Y("nls", this.u)));
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
			Zd(a);
		}
	};
	function Zd(a) {
		window.fetch(a, {
			keepalive: !0,
			credentials: "include",
			redirect: "follow",
			method: "get",
			mode: "no-cors"
		});
	}
	var ce = ["https://www.google.com"],
		de = void 0,
		ee = function(a) {
			this.c = ce;
			this.a = 2;
			this.b = a;
		};
	ka(ee, Yd);
	var fe = function(a) {
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
	var ge = function() {
			return h.googletag || (h.googletag = {});
		},
		he = function(a, b) {
			var c = ge();
			c.hasOwnProperty(a) || (c[a] = b);
		},
		ie = function(a, b) {
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
	Z[148] = Wb;
	Z[221] = /^true$/.test("");
	Z[204] = Gb("{{MOD}}", -1);
	var je = function() {
		ua(this, Z);
	};
	l(je);
	var T = function(a) {
			return je.f()[a];
		},
		ke = ge(),
		le = je.f();
	ua(le, ke._vars_);
	ke._vars_ = le;
	var me = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var ne = (function(a, b) {
			var c = b || me;
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
		oe = function() {
			return 0 === ne(T(172));
		};
	var pe = function() {
		return Gb("3") || 0;
	};
	he("getVersion", function() {
		return "2020043001";
	});
	var sd = function() {
		var a = {};
		this[3] = ((a[3] = oe),
		(a[2] = T(36)),
		(a[17] = function(b) {
			for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
			d = String;
			var e = void 0 === e ? window : e;
			if ((e = (e = e.location.href.match(wb)[3] || null) ? decodeURI(e) : e)) {
				var f = e.length;
				if (0 == f) e = 0;
				else {
					for (var g = 305419896, k = 0; k < f; k++)
						g ^= ((g << 5) + (g >> 2) + e.charCodeAt(k)) & 4294967295;
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
		(a[4] = pe),
		a);
		this[5] = {};
	};
	l(sd);
	var qe = [],
		re = function(a) {
			var b = new bd(T(246));
			a = new bd(a || qe);
			if (!J(b, L, 1).length && J(a, L, 1).length) {
				var c = J(a, L, 1);
				rb(b, 1, c);
			}
			!J(b, S, 2).length &&
				J(a, S, 2).length &&
				((a = J(a, S, 2)), rb(b, 2, a));
			ud(b);
		};
	var se = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		te = function() {
			var a = [Td, Sd, new v(u, "2020043001"), new v(u, ".js")];
			for (var b = "", c = 0; c < a.length; c++) b += Aa(a[c]);
			a = new w(Ba, b);
			var d = void 0 === d ? 0 : d;
			(d = Fc.f().c(24, d))
				? ((d = String(d)),
				  (a = Da.exec(x(a).toString())),
				  (b = a[3] || ""),
				  (d = new w(Ba, a[1] + Ea("?", a[2] || "", d) + Ea("#", b, void 0))))
				: (d = a);
			return d;
		},
		ue = function(a, b, c) {
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
			je.f()[172] = a;
			new re(b);
			R.f().a(12);
			R.f().a(5);
			Q(200) || Q(220) || ((b = T(150)), Bd(), yd(b) && (W[1] = b));
			Q(312) &&
				(void 0 === de &&
					(document.hasTrustToken ? (de = new ee(c)) : (de = null)),
				(c = de),
				c && fe(c));
		},
		ve = function(a, b, c) {
			var d = ge();
			a = a || d.fifWin || window;
			b = b || a.document;
			var e = d.fifWin ? window : a;
			he("cmd", []);
			if (d.evalScripts) d.evalScripts();
			else {
				ue(b, c, a);
				try {
					a.PerformanceObserver &&
						(a.PerformanceLongTaskTiming && Ud(a),
						Q(203) &&
							!window.google_plmetrics &&
							(be(), (window.google_plmetrics = !0)));
				} catch (n) {}
				Vd(a);
				a = te();
				c = Q(200) || Q(239);
				if (se(b)) {
					var f = "gpt-impl-" + Math.random();
					try {
						eb(b, bb(a, { id: f, nonce: na() }));
					} catch (n) {}
					b.getElementById(f) && ((d._loadStarted_ = !0), c || Ld());
				}
				if (!d._loadStarted_) {
					c || Kd();
					b = d.fifWin ? e.document : b;
					var g = b.createElement("script");
					g.src = x(a);
					fb(g);
					g.async = !0;
					var k = b.head || b.body || b.documentElement;
					"complete" !== e.document.readyState && d.fifWin
						? ie(e, function() {
								return void k.appendChild(g);
						  })
						: k.appendChild(g);
					d._loadStarted_ = !0;
				}
			}
		};
	var we;
	a: {
		try {
			if (Array.isArray(E)) {
				we = E;
				break a;
			}
		} catch (a) {}
		we = [];
	}
	(function(a, b, c) {
		var d = new Pd(null, "gpt_exception", 0.01);
		Qd(d, function(e) {
			e.methodId = 420;
		});
		Rd(d, function() {
			return ve(a, b, c);
		});
	})(void 0, void 0, we);
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
	[
		[null, 13, null, [null, 1]],
		[297, null, null, [1]],
		[null, 7, null, [null, 0.1]],
		[167, null, null, [1]],
		[20, null, null, [], [[[1, [[4, null, 1]]], [1]]]],
		[130, null, null, [1]],
		[252, null, null, [1]],
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
		[326, null, null, [1]],
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
		[229, null, null, [1]],
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
			12,
			[
				[
					50,
					[[44718965], [44718966, [[289, null, null, [1]]]]],
					null,
					null,
					null,
					13,
					null,
					200
				],
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
		],
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
				[
					5,
					[
						[21064623, [[98, null, null, [1]]]],
						[21064624, [[98, null, null, [1]]]]
					]
				],
				[1, [[21064758], [21064759, [[206, null, null, [1]]]]]],
				[10, [[21065112], [21065113, [[162, null, null, [1]]]]]],
				[10, [[21065138], [21065139, [[148, null, null, [1]]]]]],
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
				[1, [[21065352], [21065353, [[123, null, null, [1]]]]]],
				[null, [[21065388], [21065389, [[54, null, null, [1]]]]]],
				[50, [[21065392], [21065393, [[276, null, null, [1]]]]]],
				[50, [[21065401], [21065402, [[280, null, null, [1]]]]]],
				[
					50,
					[
						[21065512],
						[21065513, [[292, null, null, [1]]]],
						[21065514, [[293, null, null, [1]]]]
					]
				],
				[50, [[21065516], [21065517, [[49, null, null, [1]]]]]],
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
				[50, [[21065919], [21065920, [[229, null, null, [1]]]]], null, 20],
				[
					50,
					[
						[21065928],
						[
							21065929,
							[
								[null, 45, null, [null, 0.5]],
								[291, null, null, [1]],
								[327, null, null, [1]]
							]
						]
					]
				],
				[
					1,
					[
						[21065931],
						[21065933, [[246, null, null, [1]]]],
						[21065934, [[287, null, null, [1]], [253, null, null, [1]]]],
						[21065935, [[242, null, null, [1]], [253, null, null, [1]]]],
						[
							21065936,
							[
								[298, null, null, [1]],
								[287, null, null, [1]],
								[242, null, null, [1]],
								[253, null, null, [1]]
							]
						],
						[21065937, [[303, null, null, [1]], [287, null, null, [1]]]],
						[
							21065938,
							[
								[298, null, null, [1]],
								[303, null, null, [1]],
								[287, null, null, [1]]
							]
						],
						[21065939, [[287, null, null, [1]], [321, null, null, [1]]]]
					]
				],
				[
					50,
					[
						[21065932],
						[
							21065940,
							[
								[298, null, null, [1]],
								[287, null, null, [1]],
								[321, null, null, [1]]
							]
						]
					]
				],
				[
					1,
					[
						[21065975],
						[21065976, [[319, null, null, [1]]]],
						[21065977, [[320, null, null, [1]]]],
						[21065978, [[320, null, null, [1]], [319, null, null, [1]]]]
					],
					null,
					22
				],
				[10, [[21065979], [21065980, [[322, null, null, [1]]]]], null, 22],
				[
					1,
					[
						[21065981, [[229, null, null, [1]]]],
						[21065982, [[229, null, null, [1]], [null, 53, null, [null, 1]]]]
					],
					null,
					20
				],
				[
					null,
					[
						[21066006],
						[
							21066007,
							[
								[143, null, null, [1]],
								[322, null, null, [1]],
								[292, null, null, [1]]
							]
						]
					],
					null,
					22
				],
				[10, [[21066039], [21066040]]],
				[
					10,
					[
						[21066043, [[229, null, null, [1]]]],
						[
							21066044,
							[
								[null, 49, null, [null, 1]],
								[null, 50, null, [null, 1]],
								[229, null, null, [1]]
							]
						],
						[
							21066045,
							[
								[null, 49, null, [null, 100]],
								[null, 50, null, [null, 1]],
								[229, null, null, [1]]
							]
						],
						[
							21066046,
							[
								[null, 49, null, [null, 4]],
								[null, 50, null, [null, 2]],
								[229, null, null, [1]]
							]
						],
						[
							21066047,
							[
								[null, 49, null, [null, 100]],
								[null, 50, null, [null, 2]],
								[229, null, null, [1]]
							]
						]
					],
					null,
					20
				],
				[
					10,
					[
						[21066050],
						[
							21066051,
							[
								[null, 52, null, [null, 1]],
								[null, 47, null, [null, 1]],
								[null, 46, null, [null, 1]]
							]
						],
						[
							21066052,
							[[null, 52, null, [null, 1]], [null, 47, null, [null, 1]]]
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
					10,
					[[21065645], [21065646, [[305, null, null, [1]]]]],
					[4, null, 9, null, null, null, null, ["window.fetch"]]
				],
				[
					1000,
					[
						[
							21065921,
							[[229, null, null, []]],
							[12, null, null, null, 3, null, "gptDisableSnapshotting"]
						]
					],
					null,
					20
				],
				[
					1000,
					[
						[
							21065958,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21065958]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21065958]]
							],
							[6, null, null, 4, null, 4]
						],
						[
							21065959,
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
					50,
					[
						[21065994],
						[21065995, [[47, null, null, [1]]]],
						[21065996, [[null, 51, null, [null, 100]]]],
						[21065997, [[null, 51, null, [null, 1000]]]]
					]
				],
				[
					1,
					[
						[21066028],
						[21066029, [[200, null, null, [1]]]],
						[21066030, [[220, null, null, [1]]]]
					]
				],
				[
					null,
					[
						[21066031, null, null, 1],
						[21066032, [[239, null, null, [1]]], null, 10]
					]
				],
				[
					1000,
					[
						[
							21066033,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066033]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066033]]
							],
							[6, null, null, 4, null, 6]
						],
						[
							21066034,
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
							21066053,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066053]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066053]]
							],
							[6, null, null, 4, null, 2]
						],
						[
							21066054,
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
							21066008,
							null,
							[
								2,
								[
									[1, [[4, null, 12]]],
									[4, null, 6, null, null, null, null, ["21066006"]]
								]
							]
						],
						[
							21066009,
							null,
							[
								2,
								[
									[1, [[4, null, 12]]],
									[4, null, 6, null, null, null, null, ["21066007"]]
								]
							]
						]
					],
					null,
					22
				],
				[
					1000,
					[
						[
							21066010,
							null,
							[
								2,
								[
									[4, null, 12],
									[4, null, 6, null, null, null, null, ["21066006"]]
								]
							]
						],
						[
							21066011,
							null,
							[
								2,
								[
									[4, null, 12],
									[4, null, 6, null, null, null, null, ["21066007"]]
								]
							]
						]
					],
					null,
					22
				],
				[
					1000,
					[
						[
							21066012,
							null,
							[
								2,
								[
									[4, null, 10],
									[4, null, 6, null, null, null, null, ["21066006"]]
								]
							]
						],
						[
							21066013,
							null,
							[
								2,
								[
									[4, null, 10],
									[4, null, 6, null, null, null, null, ["21066007"]]
								]
							]
						]
					],
					null,
					22
				],
				[
					1000,
					[
						[
							21066014,
							null,
							[
								2,
								[
									[1, [[4, null, 10]]],
									[4, null, 6, null, null, null, null, ["21066006"]]
								]
							]
						],
						[
							21066015,
							null,
							[
								2,
								[
									[1, [[4, null, 10]]],
									[4, null, 6, null, null, null, null, ["21066007"]]
								]
							]
						]
					],
					null,
					22
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
		]
	]
]));
