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
		oa = function(a) {
			if (a && a != h) return la(a.document);
			null === ma && (ma = la(h.document));
			return ma;
		},
		pa = /^[\w+/_-]+[=]{0,2}$/,
		ma = null,
		la = function(a) {
			return (a = a.querySelector && a.querySelector("script[nonce]")) &&
				(a = a.nonce || a.getAttribute("nonce")) &&
				pa.test(a)
				? a
				: "";
		},
		qa = function(a) {
			a = a.split(".");
			for (var b = h, c = 0; c < a.length; c++)
				if (((b = b[a[c]]), null == b)) return null;
			return b;
		},
		ra = function() {},
		k = function(a) {
			a.v = void 0;
			a.f = function() {
				return a.v ? a.v : (a.v = new a());
			};
		},
		sa = function(a) {
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
		ta = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		ua = 0,
		va = function(a, b) {
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
		wa = function(a, b) {
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
		xa = function(a, b) {
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
		ya = function(a, b) {
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
	var Aa = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var v = function(a, b) {
		this.b = (a === u && b) || "";
		this.c = Ba;
	};
	v.prototype.j = !0;
	v.prototype.a = function() {
		return this.b;
	};
	var Ca = function(a) {
			return a instanceof v && a.constructor === v && a.c === Ba
				? a.b
				: "type_error:Const";
		},
		Ba = {},
		u = {};
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
	var x = function(a) {
			return a instanceof w && a.constructor === w && a.g === Ea
				? a.c
				: "type_error:TrustedResourceUrl";
		},
		Fa = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
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
	var Ha = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		Pa = function(a) {
			if (!Ia.test(a)) return a;
			-1 != a.indexOf("&") && (a = a.replace(Ja, "&amp;"));
			-1 != a.indexOf("<") && (a = a.replace(Ka, "&lt;"));
			-1 != a.indexOf(">") && (a = a.replace(La, "&gt;"));
			-1 != a.indexOf('"') && (a = a.replace(Ma, "&quot;"));
			-1 != a.indexOf("'") && (a = a.replace(Na, "&#39;"));
			-1 != a.indexOf("\x00") && (a = a.replace(Oa, "&#0;"));
			return a;
		},
		Ja = /&/g,
		Ka = /</g,
		La = />/g,
		Ma = /"/g,
		Na = /'/g,
		Oa = /\x00/g,
		Ia = /[\x00&<>"']/,
		Ra = function(a, b) {
			var c = 0;
			a = Ha(String(a)).split(".");
			b = Ha(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c =
						Qa(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == g[1].length ? 0 : parseInt(g[1], 10)
						) ||
						Qa(0 == f[2].length, 0 == g[2].length) ||
						Qa(f[2], g[2]);
					f = f[3];
					g = g[3];
				} while (0 == c);
			}
			return c;
		},
		Qa = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var y = function(a, b) {
		this.c = (a === Sa && b) || "";
		this.g = Ta;
	};
	y.prototype.j = !0;
	y.prototype.a = function() {
		return this.c.toString();
	};
	y.prototype.u = !0;
	y.prototype.b = function() {
		return 1;
	};
	var Ua = function(a) {
			return a instanceof y && a.constructor === y && a.g === Ta
				? a.c
				: "type_error:SafeUrl";
		},
		Va = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		Ta = {},
		Sa = {};
	var z;
	a: {
		var Wa = h.navigator;
		if (Wa) {
			var Xa = Wa.userAgent;
			if (Xa) {
				z = Xa;
				break a;
			}
		}
		z = "";
	}
	var A = function() {
		this.c = "";
		this.i = Ya;
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
	var Za = function(a) {
			return a instanceof A && a.constructor === A && a.i === Ya
				? a.c
				: "type_error:SafeHtml";
		},
		ab = function(a) {
			if (a instanceof A) return a;
			var b = "object" == typeof a,
				c = null;
			b && a.u && (c = a.b());
			a = Pa(b && a.j ? a.a() : String(a));
			return $a(a, c);
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
						if (d instanceof v) d = Ca(d);
						else {
							if ("style" == c.toLowerCase()) throw Error("");
							if (/^on/i.test(c)) throw Error("");
							if (c.toLowerCase() in cb)
								if (d instanceof w) d = x(d).toString();
								else if (d instanceof y) d = Ua(d);
								else if ("string" === typeof d)
									d instanceof y ||
										((d = "object" == typeof d && d.j ? d.a() : String(d)),
										Va.test(d) || (d = "about:invalid#zClosurez"),
										(d = new y(Sa, d))),
										(d = d.a());
								else throw Error("");
						}
						d.j && (d = d.a());
						c = c + '="' + Pa(String(d)) + '"';
						e += " " + c;
					}
				}
			var g = "<script" + e;
			e = void 0;
			null == e ? (e = []) : Array.isArray(e) || (e = [e]);
			!0 === za.script
				? (g += ">")
				: ((b = db(e)),
				  (g += ">" + Za(b).toString() + "\x3c/script>"),
				  (b = b.b()));
			(a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
			return $a(g, b);
		},
		gb = function(a) {
			var b = ab(fb),
				c = b.b(),
				d = [],
				e = function(f) {
					Array.isArray(f)
						? p(f, e)
						: ((f = ab(f)),
						  d.push(Za(f).toString()),
						  (f = f.b()),
						  0 == c ? (c = f) : 0 != f && c != f && (c = null));
				};
			p(a, e);
			return $a(d.join(Za(b).toString()), c);
		},
		db = function(a) {
			return gb(Array.prototype.slice.call(arguments));
		},
		Ya = {},
		$a = function(a, b) {
			var c = new A();
			c.c = a;
			c.g = b;
			return c;
		},
		hb = new A();
	hb.c = h.trustedTypes ? h.trustedTypes.emptyHTML : "";
	hb.g = 0;
	var fb = hb;
	var ib = function(a, b) {
			a.write(Za(b));
		},
		jb = function(a) {
			var b = oa(a.ownerDocument && a.ownerDocument.defaultView);
			b && a.setAttribute("nonce", b);
		};
	var kb = function(a) {
		kb[" "](a);
		return a;
	};
	kb[" "] = ra;
	var B = function() {},
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
							? ((e += a.c), (a.h[e] = a.h[e] || C))
							: (mb(a), (a.b[e] = a.b[e] || C));
			if (d && d.length) for (b = 0; b < d.length; b++) nb(a, d[b]);
		},
		C = [],
		mb = function(a) {
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
			b == C && (b = a.a[c] = []);
			return b;
		},
		qb = function(a, b, c) {
			a.a || (a.a = {});
			c = c || [];
			for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].h;
			a.a[b] = c;
			pb(a, b, d);
		};
	var sb = function(a) {
			rb();
			return new w(Da, a);
		},
		rb = ra;
	var tb = function() {
		return (
			-1 != z.indexOf("iPad") ||
			(-1 != z.indexOf("Android") && -1 == z.indexOf("Mobile")) ||
			-1 != z.indexOf("Silk")
		);
	};
	var ub = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
	var yb = function(a, b) {
			if (!vb() && !wb()) {
				var c = Math.random();
				if (c < b) return (c = xb(h)), a[Math.floor(c * a.length)];
			}
			return null;
		},
		xb = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		zb = function(a, b) {
			if (a)
				for (var c in a)
					Object.prototype.hasOwnProperty.call(a, c) &&
						b.call(void 0, a[c], c, a);
		},
		wb = t(function() {
			a: {
				var a = [
					"Google Web Preview",
					"Mediapartners-Google",
					"Google-Read-Aloud",
					"Google-Adwords"
				];
				for (
					var b = Ab,
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
		vb = t(function() {
			return Ab("MSIE");
		}),
		Ab = function(a) {
			return -1 != z.indexOf(a);
		},
		Bb = /^(-?[0-9.]{1,30})$/,
		Cb = function(a, b) {
			return Bb.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		Db = function() {
			try {
				return oa();
			} catch (a) {}
		},
		Eb = t(function() {
			return tb() ||
				(-1 == z.indexOf("iPod") &&
					-1 == z.indexOf("iPhone") &&
					-1 == z.indexOf("Android") &&
					-1 == z.indexOf("IEMobile"))
				? tb()
					? 1
					: 0
				: 2;
		}),
		Fb = function(a) {
			var b =
				"https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_dupeid";
			zb(a, function(c, d) {
				c && (b += "&" + d + "=" + encodeURIComponent(c));
			});
			window.fetch(b, {
				keepalive: !0,
				credentials: "include",
				redirect: "follow",
				method: "get",
				mode: "no-cors"
			});
		};
	var Gb = function() {}; /*
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
		D(this, a, Hb, Ib);
	};
	m(J, B);
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
					if (9 == b) return 0 == Ra(e, a);
					if (d)
						switch (b) {
							case 7:
								return e < a;
							case 8:
								return e > a;
							case 12:
								return new RegExp(a).test(e);
							case 10:
								return -1 == Ra(e, a);
							case 11:
								return 1 == Ra(e, a);
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
	m(Pb, B);
	var Ob = [4];
	var K = function(a) {
		D(this, a, Qb, Rb);
	};
	m(K, B);
	var Sb = function(a) {
		D(this, a, null, null);
	};
	m(Sb, B);
	var Qb = [5],
		Rb = [[1, 2, 3, 6, 7]];
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
				case 7:
					return G(a, 3, "");
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
		Zb = function(a, b, c, d) {
			d = void 0 === d ? 0 : d;
			var e = Xb();
			if (e[a] && null != e[a][b]) return e[a][b];
			b = M(d)[a][b];
			if (!b) return c;
			b = new K(b);
			b = Yb(b);
			a = Wb(b, a);
			return null != a ? a : c;
		},
		Yb = function(a) {
			var b = L.f().a;
			if (b) {
				var c = ya(I(a, Sb, 5), function(d) {
					return Nb(H(d, J, 1), b);
				});
				if (c) return H(c, Pb, 2);
			}
			return H(a, Pb, 4);
		},
		$b = function() {
			this.a = {};
			this.b = [];
		};
	k($b);
	var ac = function(a, b, c) {
			return !!Zb(1, a, void 0 === b ? !1 : b, c);
		},
		bc = function(a, b, c) {
			b = void 0 === b ? 0 : b;
			a = Number(Zb(2, a, b, c));
			return isNaN(a) ? b : a;
		},
		cc = function(a, b, c) {
			return Zb(3, a, void 0 === b ? "" : b, c);
		},
		dc = function(a, b, c) {
			b = void 0 === b ? [] : b;
			return Zb(6, a, b, c);
		},
		M = function(a) {
			var b = {};
			return (
				$b.f().a[a] ||
				($b.f().a[a] = ((b[1] = {}), (b[2] = {}), (b[3] = {}), (b[6] = {}), b))
			);
		},
		ec = function(a, b) {
			var c = M(b);
			zb(a, function(d, e) {
				return zb(d, function(f, g) {
					return (c[e][g] = f);
				});
			});
		},
		fc = function(a, b) {
			var c = M(b);
			p(a, function(d) {
				var e = nb(d, Rb[0]),
					f = Vb(d, e);
				f && (c[e][f] = d.h);
			});
		},
		gc = function(a, b) {
			var c = M(b);
			p(a, function(d) {
				var e = new K(d),
					f = nb(e, Rb[0]);
				(e = Vb(e, f)) && (c[f][e] || (c[f][e] = d));
			});
		},
		hc = function() {
			return q(Object.keys($b.f().a), function(a) {
				return Number(a);
			});
		},
		ic = function(a) {
			r($b.f().b, a) || ec(M(4), a);
		};
	var N = function(a) {
			this.methodName = a;
		},
		jc = new N(1),
		kc = new N(15),
		lc = new N(2),
		mc = new N(3),
		nc = new N(4),
		oc = new N(5),
		pc = new N(6),
		qc = new N(7),
		rc = new N(8),
		sc = new N(9),
		tc = new N(10),
		uc = new N(11),
		vc = new N(12),
		wc = new N(13),
		xc = new N(14),
		O = function(a, b, c) {
			c.hasOwnProperty(a.methodName) ||
				Object.defineProperty(c, String(a.methodName), { value: b });
		},
		P = function(a, b, c) {
			return b[a.methodName] || c || function() {};
		},
		yc = function(a) {
			O(oc, ac, a);
			O(pc, bc, a);
			O(qc, cc, a);
			O(rc, dc, a);
			O(wc, gc, a);
			O(kc, ic, a);
		},
		zc = function(a) {
			O(
				nc,
				function(b) {
					L.f().a = b;
				},
				a
			);
			O(
				sc,
				function(b, c) {
					var d = L.f();
					d.a[3][b] || (d.a[3][b] = c);
				},
				a
			);
			O(
				tc,
				function(b, c) {
					var d = L.f();
					d.a[4][b] || (d.a[4][b] = c);
				},
				a
			);
			O(
				uc,
				function(b, c) {
					var d = L.f();
					d.a[5][b] || (d.a[5][b] = c);
				},
				a
			);
			O(
				xc,
				function(b) {
					for (
						var c = L.f(), d = ba([3, 4, 5]), e = d.next();
						!e.done;
						e = d.next()
					)
						(e = e.value), va(c.a[e], b[e]);
				},
				a
			);
		},
		Ac = function(a) {
			a.hasOwnProperty("init-done") ||
				Object.defineProperty(a, "init-done", { value: !0 });
		};
	var Bc = function() {
			this.b = function(a, b) {
				return void 0 === b ? !1 : b;
			};
			this.c = function(a, b) {
				return void 0 === b ? 0 : b;
			};
			this.a = function() {};
		},
		Cc = function(a, b, c) {
			a.b = function(d, e) {
				return P(oc, b)(d, e, c);
			};
			a.c = function(d, e) {
				return P(pc, b)(d, e, c);
			};
			a.a = function() {
				P(kc, b)(c);
			};
		};
	k(Bc);
	var Q = function(a) {
		var b = void 0 === b ? !1 : b;
		return Bc.f().b(a, b);
	};
	var Dc = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var Ec = null,
		Fc = function() {
			if (null === Ec) {
				Ec = "";
				try {
					var a = "";
					try {
						a = h.top.location.hash;
					} catch (c) {
						a = h.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						Ec = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return Ec;
		};
	var R = function() {
			this.a = function() {};
			this.b = function() {
				return [];
			};
		},
		Gc = function(a, b, c) {
			a.a = function(d) {
				P(lc, b, function() {
					return [];
				})(d, c);
			};
			a.b = function() {
				return P(mc, b, function() {
					return [];
				})(c);
			};
		};
	k(R);
	var Hc = function(a, b) {
			a = qa(a);
			a = "function" === typeof a ? a() : a;
			return typeof a === b ? a : void 0;
		},
		Ic = function() {
			var a = {};
			this[3] = ((a[8] = function(b) {
				return !!qa(b);
			}),
			(a[9] = function(b) {
				b = qa(b);
				var c;
				if ((c = "function" == sa(b)))
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
				b = Hc(b, "boolean");
				return void 0 !== b ? b : void 0;
			}),
			a);
			a = {};
			this[4] = ((a[3] = function() {
				return Eb();
			}),
			(a[6] = function(b) {
				b = Hc(b, "number");
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
				b = Hc(b, "string");
				return void 0 !== b ? b : void 0;
			}),
			a);
		};
	k(Ic);
	var Jc = function() {
		var a = void 0 === a ? h : a;
		return a.ggeac || (a.ggeac = {});
	};
	var Lc = function(a) {
		D(this, a, Kc, null);
	};
	m(Lc, B);
	var Kc = [2];
	Lc.prototype.getId = function() {
		return G(this, 1, 0);
	};
	Lc.prototype.m = function() {
		return G(this, 7, 0);
	};
	var Nc = function(a) {
		D(this, a, Mc, null);
	};
	m(Nc, B);
	var Mc = [2];
	Nc.prototype.m = function() {
		return G(this, 5, 0);
	};
	var Pc = function(a) {
		D(this, a, Oc, null);
	};
	m(Pc, B);
	var S = function(a) {
		D(this, a, Qc, null);
	};
	m(S, B);
	var Oc = [1, 4, 2, 3],
		Qc = [2];
	S.prototype.m = function() {
		return G(this, 1, 0);
	};
	var Rc = [12, 13],
		Sc = function() {},
		Tc = function(a, b, c, d) {
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
			(c = Fc()) &&
				p(c.split(",") || [], function(g) {
					(g = parseInt(g, 10)) && (a.c[g] = !0);
				});
			return a;
		},
		Yc = function(a, b, c) {
			var d = [],
				e = Uc(a.a, b);
			if (e.length) {
				9 !== b && (a.a = Vc(a.a, b));
				var f = r(Rc, b);
				p(e, function(g) {
					if ((g = Wc(a, g, c))) {
						var l = g.getId();
						d.push(l);
						Xc(a, l, f ? 4 : c);
						var n = I(g, K, 2);
						n &&
							(f
								? p(hc(), function(na) {
										return fc(n, na);
								  })
								: fc(n, c));
					}
				});
			}
			return d;
		},
		Xc = function(a, b, c) {
			a.b[c] || (a.b[c] = []);
			a = a.b[c];
			r(a, b) ? Fb({ eids: JSON.stringify(a), dup: b }) : a.push(b);
		},
		Zc = function(a, b) {
			a.a.push.apply(
				a.a,
				ca(
					wa(
						q(b, function(c) {
							return new S(c);
						}),
						function(c) {
							return !r(Rc, c.m());
						}
					)
				)
			);
		},
		Wc = function(a, b, c) {
			var d = L.f().a;
			if (!Nb(H(b, J, 3), d)) return null;
			var e = I(b, Lc, 2),
				f = e.length * G(b, 1, 0),
				g = G(b, 6, 0);
			if (g) {
				f = d[4];
				switch (c) {
					case 2:
						var l = f[8];
						break;
					case 1:
						l = f[7];
				}
				f = null;
				if (l)
					try {
						f = l(g);
					} catch (n) {}
				null === f && (f = Math.floor(1e3 * xb(window)));
				b = $c(b, f);
				return !b || (d && !Nb(H(b, J, 3), d)) ? null : ad(a, [b], 1);
			}
			g = d
				? wa(e, function(n) {
						return Nb(H(n, J, 3), d);
				  })
				: e;
			return g.length
				? (b = G(b, 4, 0))
					? bd(a, b, f, g)
					: ad(a, g, f / 1e3)
				: null;
		},
		bd = function(a, b, c, d) {
			var e = null != a.g[b] ? a.g[b] : 1e3;
			if (0 >= e) return null;
			d = ad(a, d, c / e);
			a.g[b] = d ? 0 : e - c;
			return d;
		},
		ad = function(a, b, c) {
			var d = a.c,
				e = xa(b, function(f) {
					return !!d[f.getId()];
				});
			return e ? e : a.i ? null : yb(b, c);
		},
		cd = function(a, b) {
			O(
				jc,
				function(c) {
					a.c[c] = !0;
				},
				b
			);
			O(
				lc,
				function(c, d) {
					return Yc(a, c, d);
				},
				b
			);
			O(
				mc,
				function(c) {
					return (a.b[c] || []).concat(a.b[4]);
				},
				b
			);
			O(
				vc,
				function(c) {
					return Zc(a, c);
				},
				b
			);
		};
	k(Sc);
	var Uc = function(a, b) {
			return (
				((a = xa(a, function(c) {
					return c.m() == b;
				})) &&
					I(a, Nc, 2)) ||
				[]
			);
		},
		Vc = function(a, b) {
			return wa(a, function(c) {
				return c.m() != b;
			});
		},
		$c = function(a, b) {
			var c = I(a, Lc, 2),
				d = c.length,
				e = G(a, 1, 0);
			a = G(a, 8, 0);
			var f = (b - a) % d;
			return b < a || b - a - f >= d * e - 1 ? null : c[f];
		};
	var dd = function() {
		this.a = function() {};
	};
	k(dd);
	var ed = function(a) {
		dd.f().a(a);
	};
	var hd = function(a) {
			var b = fd.f(),
				c = { G: T(211), J: T(227), O: T(226) },
				d = void 0,
				e = 2;
			d = void 0 === d ? Jc() : d;
			e = void 0 === e ? 0 : e;
			d.hasOwnProperty("init-done")
				? (P(vc, d)(
						q(I(a, S, 2), function(f) {
							return f.h;
						})
				  ),
				  P(wc, d)(
						q(I(a, K, 1), function(f) {
							return f.h;
						}),
						e
				  ),
				  b && P(xc, d)(b),
				  gd(d, e))
				: (cd(Tc(Sc.f(), I(a, S, 2), e, c), d),
				  yc(d),
				  zc(d),
				  Ac(d),
				  gd(d, e),
				  fc(I(a, K, 1), e),
				  (Ub = Ub || !(!c || !c.V)),
				  ed(Ic.f()),
				  b && ed(b));
		},
		gd = function(a, b) {
			a = void 0 === a ? Jc() : a;
			b = void 0 === b ? 0 : b;
			var c = a,
				d = b;
			d = void 0 === d ? 0 : d;
			Gc(R.f(), c, d);
			c = a;
			b = void 0 === b ? 0 : b;
			Cc(Bc.f(), c, b);
			dd.f().a = P(xc, a);
			Bc.f().a();
		};
	var id = function(a, b, c) {
		var d = "script";
		d = void 0 === d ? "" : d;
		var e = a.createElement("link");
		try {
			e.rel = "preload";
			if (b instanceof w) var f = x(b).toString();
			else {
				if (b instanceof y) var g = Ua(b);
				else {
					if (b instanceof y) var l = b;
					else
						(b = "object" == typeof b && b.j ? b.a() : String(b)),
							Va.test(b) || (b = "about:invalid#zClosurez"),
							(l = new y(Sa, b));
					g = Ua(l);
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
	var jd = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		kd = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		ld = function(a) {
			return jd.test(a) && !kd.test(a);
		},
		md = function(a) {
			return a.replace(/[\W]/g, function(b) {
				return "&#" + b.charCodeAt() + ";";
			});
		},
		U = h,
		nd = function(a, b) {
			a = "https://adservice" + (b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(h.location.hostname)];
			V[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(V[1]));
			return a + "?" + b.join("&");
		},
		V,
		W,
		od = function() {
			U = h;
			V = U.googleToken = U.googleToken || {};
			var a = +new Date();
			(V[1] && V[3] > a && 0 < V[2]) ||
				((V[1] = ""), (V[2] = -1), (V[3] = -1), (V[4] = ""), (V[6] = ""));
			W = U.googleIMState = U.googleIMState || {};
			ld(W[1]) || (W[1] = ".google.com");
			Array.isArray(W[5]) || (W[5] = []);
			"boolean" !== typeof W[6] && (W[6] = !1);
			Array.isArray(W[7]) || (W[7] = []);
			"number" !== typeof W[8] && (W[8] = 0);
		},
		pd = function(a) {
			try {
				a();
			} catch (b) {
				h.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		rd = function(a) {
			"complete" == h.document.readyState ||
			"loaded" == h.document.readyState ||
			(h.document.currentScript && h.document.currentScript.async)
				? qd(3)
				: a();
		},
		sd = 0,
		td = {
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
			F: pd
		},
		ud = {
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
				return ".google.com" != W[1] && 2 < ++sd;
			},
			H: function() {
				return W[7];
			},
			F: function(a) {
				rd(function() {
					pd(a);
				});
			}
		},
		qd = function(a) {
			if (1e-5 > Math.random()) {
				h.google_image_requests || (h.google_image_requests = []);
				var b = h.document.createElement("img");
				b.src =
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
					a;
				h.google_image_requests.push(b);
			}
		};
	td.s = function() {
		if (!td.o()) {
			var a = h.document,
				b = function(e) {
					e = nd("js", e);
					var f = Db();
					id(a, e, f);
					f = a.createElement("script");
					f.type = "text/javascript";
					f.onerror = function() {
						return h.processGoogleToken({}, 2);
					};
					e = sb(e);
					f.src = x(e);
					jb(f);
					try {
						(a.head || a.body || a.documentElement).appendChild(f), td.B();
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
	ud.s = function() {
		if (!ud.o()) {
			var a = h.document,
				b = nd("sync.js", W[1]),
				c = Db();
			id(a, b, c);
			b = md(b);
			var d = kb("script"),
				e = "";
			c && (e = 'nonce="' + md(c) + '"');
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
			rd(function() {
				a.write(f);
				ud.B();
			});
		}
	};
	var vd = function(a) {
			od();
			(V[3] >= +new Date() && V[2] >= +new Date()) || a.s();
		},
		xd = function() {
			h.processGoogleToken =
				h.processGoogleToken ||
				function(a, b) {
					return wd(td, a, b);
				};
			vd(td);
		},
		yd = function() {
			h.processGoogleTokenSync =
				h.processGoogleTokenSync ||
				function(a, b) {
					return wd(ud, a, b);
				};
			vd(ud);
		},
		wd = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				g = parseInt(b.validLifetimeSecs || "", 10),
				l = b["1p_jar"] || "";
			b = b.pucrd || "";
			od();
			1 == c ? a.M() : a.L();
			if (!d && a.P()) ld(".google.com") && (W[1] = ".google.com"), a.s();
			else {
				var n = (U.googleToken = U.googleToken || {}),
					na =
						0 == c &&
						d &&
						"string" === typeof d &&
						!e &&
						"number" === typeof f &&
						0 < f &&
						"number" === typeof g &&
						0 < g &&
						"string" === typeof l;
				e = e && !a.o() && (!(V[3] >= +new Date()) || "NT" == V[1]);
				var Md = !(V[3] >= +new Date()) && 0 != c;
				if (na || e || Md)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(g = e + 1e3 * g),
						qd(c),
						(n[5] = c),
						(n[1] = d),
						(n[2] = f),
						(n[3] = g),
						(n[4] = l),
						(n[6] = b),
						od();
				if (na || !a.o()) {
					c = a.H();
					for (d = 0; d < c.length; d++) a.F(c[d]);
					c.length = 0;
				}
			}
		};
	var zd = function(a) {
		a = void 0 === a ? h : a;
		return (a = a.performance) && a.now ? a.now() : null;
	};
	var X = h.performance,
		Ad = !!(X && X.mark && X.measure && X.clearMarks),
		Bd = t(function() {
			var a;
			if ((a = Ad)) (a = Fc()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
			return a;
		});
	var Cd = function(a, b, c) {
			this.a = void 0 === a ? null : a;
			this.g = void 0 === b ? "jserror" : b;
			this.b = null;
			this.c = void 0 === c ? 0.01 : c;
			this.l = this.i;
		},
		Dd = function(a, b) {
			a.b = b;
		};
	Cd.prototype.i = function(a, b, c, d, e) {
		c = void 0 === c ? this.c : c;
		e = void 0 === e ? this.g : e;
		if (Math.random() > c) return !1;
		(b.error && b.meta && b.id) || (b = new Dc(b, { context: a, id: e }));
		if (d || this.b) (b.meta = {}), this.b && this.b(b.meta), d && d(b.meta);
		h.google_js_errors = h.google_js_errors || [];
		h.google_js_errors.push(b);
		h.error_rep_loaded ||
			((b = h.document),
			(a = b.createElement("script")),
			(c = sb(
				h.location.protocol +
					"//pagead2.googlesyndication.com/pagead/js/err_rep.js"
			)),
			(a.src = x(c)),
			jb(a),
			(b = b.getElementsByTagName("script")[0]) &&
				b.parentNode &&
				b.parentNode.insertBefore(a, b),
			(h.error_rep_loaded = !0));
		return !1;
	};
	var Ed = function(a, b) {
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
					Bd() &&
					(X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
					X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
				!a.l(420, d, a.c, void 0, a.g))
			)
				throw d;
		}
	};
	var Fd = new v(u, "gpt/pubads_impl_"),
		Gd = new v(u, "https://securepubads.g.doubleclick.net/");
	var Hd = function(a) {
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
	var Id = function(a) {
			var b = zd(a);
			b &&
				((b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				2048 > a.length && a.push(b));
		},
		Jd = function(a, b, c) {
			var d = window;
			return function() {
				var e = zd(),
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
							duration: (zd() || 0) - e,
							type: f
						}),
						(f = d.google_js_reporting_queue =
							d.google_js_reporting_queue || []),
						2048 > f.length && f.push(e));
				}
				return g;
			};
		},
		Kd = function(a, b) {
			return Jd(a, b, function(c, d) {
				new Cd().i(c, d);
			});
		};
	function Y(a, b) {
		return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
	}
	var Nd = function() {
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
			Ld(b));
		this.T = new PerformanceObserver(
			Kd(640, function(c) {
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
		this.b = Kd(641, this.b.bind(this));
	};
	ka(Nd, Gb);
	var Od = function() {
		var a = new Nd();
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
	Nd.prototype.b = function() {
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
			Ld(a);
		}
	};
	function Ld(a) {
		window.fetch(a, {
			keepalive: !0,
			credentials: "include",
			redirect: "follow",
			method: "get",
			mode: "no-cors"
		});
	}
	var Pd = ["https://www.google.com"],
		Qd = void 0,
		Rd = function(a) {
			this.c = Pd;
			this.a = 2;
			this.b = a;
		};
	ka(Rd, Gb);
	var Sd = function(a) {
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
	var Td = function() {
			return h.googletag || (h.googletag = {});
		},
		Ud = function(a, b) {
			var c = Td();
			c.hasOwnProperty(a) || (c[a] = b);
		},
		Vd = function(a, b) {
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
	Z[204] = Cb("{{MOD}}", -1);
	var Wd = function() {
		va(this, Z);
	};
	k(Wd);
	var T = function(a) {
			return Wd.f()[a];
		},
		Xd = Td(),
		Yd = Wd.f();
	va(Yd, Xd._vars_);
	Xd._vars_ = Yd;
	var Zd = (function(a, b) {
			var c = b || Aa;
			return function() {
				var d = this || h;
				d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
				var e =
					(Object.prototype.hasOwnProperty.call(a, ta) && a[ta]) ||
					(a[ta] = ++ua);
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
		$d = function() {
			return 0 === Zd(T(172));
		};
	var ae = function() {
		return Cb("7") || 0;
	};
	Ud("getVersion", function() {
		return "2020050701";
	});
	var fd = function() {
		var a = {};
		this[3] = ((a[3] = $d),
		(a[2] = T(36)),
		(a[17] = function(b) {
			for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
			d = String;
			var e = void 0 === e ? window : e;
			if ((e = (e = e.location.href.match(ub)[3] || null) ? decodeURI(e) : e)) {
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
			return T(148);
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return T(204);
		}),
		(a[4] = ae),
		a);
		this[5] = {};
	};
	k(fd);
	var be = [],
		ce = function(a) {
			var b = new Pc(T(246));
			a = new Pc(a || be);
			if (!I(b, K, 1).length && I(a, K, 1).length) {
				var c = I(a, K, 1);
				qb(b, 1, c);
			}
			!I(b, S, 2).length &&
				I(a, S, 2).length &&
				((a = I(a, S, 2)), qb(b, 2, a));
			hd(b);
		};
	var de = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		ee = function() {
			var a = [Gd, Fd, new v(u, "2020050701"), new v(u, ".js")];
			for (var b = "", c = 0; c < a.length; c++) b += Ca(a[c]);
			a = new w(Da, b);
			var d = void 0 === d ? 0 : d;
			(d = Bc.f().c(24, d))
				? ((d = String(d)),
				  (a = Fa.exec(x(a).toString())),
				  (b = a[3] || ""),
				  (d = new w(Da, a[1] + Ga("?", a[2] || "", d) + Ga("#", b, void 0))))
				: (d = a);
			return d;
		},
		fe = function(a, b, c) {
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
			Wd.f()[172] = a;
			new ce(b);
			R.f().a(12);
			R.f().a(5);
			Q(200) || Q(220) || ((b = T(150)), od(), ld(b) && (W[1] = b));
			Q(312) &&
				(void 0 === Qd &&
					(document.hasTrustToken ? (Qd = new Rd(c)) : (Qd = null)),
				(c = Qd),
				c && Sd(c));
		},
		ge = function(a, b, c) {
			var d = Td();
			a = a || d.fifWin || window;
			b = b || a.document;
			var e = d.fifWin ? window : a;
			Ud("cmd", []);
			if (d.evalScripts) d.evalScripts();
			else {
				fe(b, c, a);
				try {
					a.PerformanceObserver &&
						(a.PerformanceLongTaskTiming && Hd(a),
						Q(203) &&
							!window.google_plmetrics &&
							(Od(), (window.google_plmetrics = !0)));
				} catch (n) {}
				Id(a);
				a = ee();
				c = Q(200) || Q(239);
				if (de(b)) {
					var f = "gpt-impl-" + Math.random();
					try {
						ib(b, eb(a, { id: f, nonce: oa() }));
					} catch (n) {}
					b.getElementById(f) && ((d._loadStarted_ = !0), c || yd());
				}
				if (!d._loadStarted_) {
					c || xd();
					b = d.fifWin ? e.document : b;
					var g = b.createElement("script");
					g.src = x(a);
					jb(g);
					g.async = !0;
					var l = b.head || b.body || b.documentElement;
					"complete" !== e.document.readyState && d.fifWin
						? Vd(e, function() {
								return void l.appendChild(g);
						  })
						: l.appendChild(g);
					d._loadStarted_ = !0;
				}
			}
		};
	var he;
	a: {
		try {
			if (Array.isArray(E)) {
				he = E;
				break a;
			}
		} catch (a) {}
		he = [];
	}
	(function(a, b, c) {
		var d = new Cd(null, "gpt_exception", 0.01);
		Dd(d, function(e) {
			e.methodId = 420;
		});
		Ed(d, function() {
			return ge(a, b, c);
		});
	})(void 0, void 0, he);
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
		[null, 51, null, [null, 1000]],
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
		[276, null, null, [1]],
		[288, null, null, [1]],
		[299, null, null, [1]],
		[
			238,
			null,
			null,
			[],
			[[[4, null, 8, null, null, null, null, ["googletag.fifWin"]], [1]]]
		],
		[null, 32, null, [null, 5]]
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
						[44714835, [[null, 7, null, [null, 1]], [212, null, null, [1]]]],
						[44714836, [[null, 7, null, [null, 1]], [212, null, null, [1]]]]
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
				[null, [[44716830], [44716831], [44717742], [44717743]]],
				[null, [[44716832], [44717744], [44717745]]],
				[null, [[44717747]]],
				[null, [[44718189]]],
				[null, [[676982680]]],
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
				[null, [[21065803], [21065804, [[329, null, null, [1]]]]]],
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
				[10, [[21065975], [21065976, [[319, null, null, [1]]]]], null, 22],
				[null, [[21065979], [21065980, [[322, null, null, [1]]]]], null, 22],
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
					25,
					[
						[21066063],
						[21066064, [[null, 32, null, [null, 1]]]],
						[21066065, [[null, 32, null, []]]]
					]
				],
				[
					10,
					[
						[21066083],
						[
							21066084,
							[
								[null, 52, null, [null, 1]],
								[null, 47, null, []],
								[null, 46, null, [null, 1]]
							]
						]
					]
				],
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
				[
					1000,
					[
						[
							21066106,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066106]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066106]]
							],
							[6, null, null, 4, null, 2]
						],
						[
							21066107,
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
							21066130,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066130]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066130]]
							],
							[6, null, null, 4, null, 6]
						],
						[
							21066131,
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
