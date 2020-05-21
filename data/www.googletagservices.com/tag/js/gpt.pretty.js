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
		fa = {},
		ha = {},
		ia = function(a, b) {
			var c = ha[b];
			if (null == c) return a[b];
			c = a[c];
			return void 0 !== c ? c : a[b];
		},
		ja = function(a, b, c) {
			if (b) {
				var d = a.split(".");
				a = 1 === d.length;
				var e = d[0],
					f;
				!a && e in fa ? (f = fa) : (f = da);
				for (e = 0; e < d.length - 1; e++) {
					var g = d[e];
					g in f || (f[g] = {});
					f = f[g];
				}
				d = d[d.length - 1];
				c = ea && "es6" === c ? f[d] : null;
				b = b(c);
				null != b &&
					(a
						? ba(fa, d, { configurable: !0, writable: !0, value: b })
						: b !== c &&
						  ((ha[d] = ea ? da.Symbol(d) : "$jscp$" + d),
						  (d = ha[d]),
						  ba(f, d, { configurable: !0, writable: !0, value: b })));
			}
		},
		ka = function(a) {
			var b =
				"undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
			return b ? b.call(a) : { next: aa(a) };
		},
		la = function(a) {
			if (!(a instanceof Array)) {
				a = ka(a);
				for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
				a = c;
			}
			return a;
		},
		ma =
			"function" == typeof Object.create
				? Object.create
				: function(a) {
						var b = function() {};
						b.prototype = a;
						return new b();
				  },
		na;
	if (ea && "function" == typeof Object.setPrototypeOf)
		na = Object.setPrototypeOf;
	else {
		var pa;
		a: {
			var qa = { U: !0 },
				ra = {};
			try {
				ra.__proto__ = qa;
				pa = ra.U;
				break a;
			} catch (a) {}
			pa = !1;
		}
		na = pa
			? function(a, b) {
					a.__proto__ = b;
					if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
					return a;
			  }
			: null;
	}
	var sa = na,
		ta = function(a, b) {
			a.prototype = ma(b.prototype);
			a.prototype.constructor = a;
			if (sa) sa(a, b);
			else
				for (var c in b)
					if ("prototype" != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d);
						} else a[c] = b[c];
		};
	ja(
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
	var h = this || self,
		wa = function(a) {
			if (a && a != h) return ua(a.document);
			null === va && (va = ua(h.document));
			return va;
		},
		xa = /^[\w+/_-]+[=]{0,2}$/,
		va = null,
		ua = function(a) {
			return (a = a.querySelector && a.querySelector("script[nonce]")) &&
				(a = a.nonce || a.getAttribute("nonce")) &&
				xa.test(a)
				? a
				: "";
		},
		ya = function(a) {
			a = a.split(".");
			for (var b = h, c = 0; c < a.length; c++)
				if (((b = b[a[c]]), null == b)) return null;
			return b;
		},
		za = function() {},
		k = function(a) {
			a.v = void 0;
			a.f = function() {
				return a.v ? a.v : (a.v = new a());
			};
		},
		Aa = function(a) {
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
		Ba = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		Ca = 0,
		Da = function(a, b) {
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
		Ea = function(a, b) {
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
		Fa = function(a, b) {
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
		Ga = function(a, b) {
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
	var Ha = {
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
	var Ia = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var v = function(a, b) {
		this.b = (a === u && b) || "";
		this.c = Ja;
	};
	v.prototype.j = !0;
	v.prototype.a = function() {
		return this.b;
	};
	var Ka = function(a) {
			return a instanceof v && a.constructor === v && a.c === Ja
				? a.b
				: "type_error:Const";
		},
		Ja = {},
		u = {};
	var w = function(a, b) {
		this.c = (a === La && b) || "";
		this.g = Ma;
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
			return a instanceof w && a.constructor === w && a.g === Ma
				? a.c
				: "type_error:TrustedResourceUrl";
		},
		Na = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		Ma = {},
		Oa = function(a, b, c) {
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
		La = {};
	var Pa = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		Xa = function(a) {
			if (!Qa.test(a)) return a;
			-1 != a.indexOf("&") && (a = a.replace(Ra, "&amp;"));
			-1 != a.indexOf("<") && (a = a.replace(Sa, "&lt;"));
			-1 != a.indexOf(">") && (a = a.replace(Ta, "&gt;"));
			-1 != a.indexOf('"') && (a = a.replace(Ua, "&quot;"));
			-1 != a.indexOf("'") && (a = a.replace(Va, "&#39;"));
			-1 != a.indexOf("\x00") && (a = a.replace(Wa, "&#0;"));
			return a;
		},
		Ra = /&/g,
		Sa = /</g,
		Ta = />/g,
		Ua = /"/g,
		Va = /'/g,
		Wa = /\x00/g,
		Qa = /[\x00&<>"']/,
		Za = function(a, b) {
			var c = 0;
			a = Pa(String(a)).split(".");
			b = Pa(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c =
						Ya(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == g[1].length ? 0 : parseInt(g[1], 10)
						) ||
						Ya(0 == f[2].length, 0 == g[2].length) ||
						Ya(f[2], g[2]);
					f = f[3];
					g = g[3];
				} while (0 == c);
			}
			return c;
		},
		Ya = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var y = function(a, b) {
		this.c = (a === $a && b) || "";
		this.g = ab;
	};
	y.prototype.j = !0;
	y.prototype.a = function() {
		return this.c.toString();
	};
	y.prototype.u = !0;
	y.prototype.b = function() {
		return 1;
	};
	var bb = function(a) {
			return a instanceof y && a.constructor === y && a.g === ab
				? a.c
				: "type_error:SafeUrl";
		},
		cb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		ab = {},
		$a = {};
	var z;
	a: {
		var db = h.navigator;
		if (db) {
			var eb = db.userAgent;
			if (eb) {
				z = eb;
				break a;
			}
		}
		z = "";
	}
	var A = function() {
		this.c = "";
		this.i = fb;
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
	var gb = function(a) {
			return a instanceof A && a.constructor === A && a.i === fb
				? a.c
				: "type_error:SafeHtml";
		},
		ib = function(a) {
			if (a instanceof A) return a;
			var b = "object" == typeof a,
				c = null;
			b && a.u && (c = a.b());
			a = Xa(b && a.j ? a.a() : String(a));
			return hb(a, c);
		},
		jb = /^[a-zA-Z0-9-]+$/,
		kb = {
			action: !0,
			cite: !0,
			data: !0,
			formaction: !0,
			href: !0,
			manifest: !0,
			poster: !0,
			src: !0
		},
		mb = function(a, b) {
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
					if (!jb.test(g)) throw Error("");
					d = a[g];
					if (null != d) {
						c = g;
						if (d instanceof v) d = Ka(d);
						else {
							if ("style" == c.toLowerCase()) throw Error("");
							if (/^on/i.test(c)) throw Error("");
							if (c.toLowerCase() in kb)
								if (d instanceof w) d = x(d).toString();
								else if (d instanceof y) d = bb(d);
								else if ("string" === typeof d)
									d instanceof y ||
										((d = "object" == typeof d && d.j ? d.a() : String(d)),
										cb.test(d) || (d = "about:invalid#zClosurez"),
										(d = new y($a, d))),
										(d = d.a());
								else throw Error("");
						}
						d.j && (d = d.a());
						c = c + '="' + Xa(String(d)) + '"';
						e += " " + c;
					}
				}
			var g = "<script" + e;
			e = void 0;
			null == e ? (e = []) : Array.isArray(e) || (e = [e]);
			!0 === Ha.script
				? (g += ">")
				: ((b = lb(e)),
				  (g += ">" + gb(b).toString() + "\x3c/script>"),
				  (b = b.b()));
			(a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
			return hb(g, b);
		},
		ob = function(a) {
			var b = ib(nb),
				c = b.b(),
				d = [],
				e = function(f) {
					Array.isArray(f)
						? p(f, e)
						: ((f = ib(f)),
						  d.push(gb(f).toString()),
						  (f = f.b()),
						  0 == c ? (c = f) : 0 != f && c != f && (c = null));
				};
			p(a, e);
			return hb(d.join(gb(b).toString()), c);
		},
		lb = function(a) {
			return ob(Array.prototype.slice.call(arguments));
		},
		fb = {},
		hb = function(a, b) {
			var c = new A();
			c.c = a;
			c.g = b;
			return c;
		},
		pb = new A();
	pb.c =
		h.trustedTypes && h.trustedTypes.emptyHTML ? h.trustedTypes.emptyHTML : "";
	pb.g = 0;
	var nb = pb;
	var qb = function(a, b) {
			a.write(gb(b));
		},
		rb = function(a) {
			var b = wa(a.ownerDocument && a.ownerDocument.defaultView);
			b && a.setAttribute("nonce", b);
		};
	var sb = function(a) {
		sb[" "](a);
		return a;
	};
	sb[" "] = za;
	var B = function() {},
		tb = "function" == typeof Uint8Array,
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
							(tb && e instanceof Uint8Array)
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
							: (ub(a), (a.b[e] = a.b[e] || C));
			if (d && d.length) for (b = 0; b < d.length; b++) vb(a, d[b]);
		},
		C = [],
		ub = function(a) {
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
		wb = function(a, b) {
			a = F(a, b);
			a = null == a ? a : +a;
			return null == a ? 0 : a;
		},
		xb = function(a, b, c) {
			b < a.g ? (a.h[b + a.c] = c) : (ub(a), (a.b[b] = c));
		},
		vb = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					g = F(a, f);
				null != g && ((c = f), (d = g), xb(a, f, void 0));
			}
			return c ? (xb(a, c, d), c) : 0;
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
		yb = function(a, b, c) {
			a.a || (a.a = {});
			c = c || [];
			for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].h;
			a.a[b] = c;
			xb(a, b, d);
		};
	var Ab = function(a) {
			zb();
			return new w(La, a);
		},
		zb = za;
	var Bb = function() {
		return (
			-1 != z.indexOf("iPad") ||
			(-1 != z.indexOf("Android") && -1 == z.indexOf("Mobile")) ||
			-1 != z.indexOf("Silk")
		);
	};
	var Cb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
	var Gb = function(a, b) {
			if (!Db() && !Eb()) {
				var c = Math.random();
				if (c < b) return (c = Fb(h)), a[Math.floor(c * a.length)];
			}
			return null;
		},
		Fb = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		Hb = function(a, b) {
			if (a)
				for (var c in a)
					Object.prototype.hasOwnProperty.call(a, c) &&
						b.call(void 0, a[c], c, a);
		},
		Eb = t(function() {
			a: {
				var a = [
					"Google Web Preview",
					"Mediapartners-Google",
					"Google-Read-Aloud",
					"Google-Adwords"
				];
				for (
					var b = Ib,
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
		Db = t(function() {
			return Ib("MSIE");
		}),
		Ib = function(a) {
			return -1 != z.indexOf(a);
		},
		Jb = /^(-?[0-9.]{1,30})$/,
		Kb = function(a, b) {
			return Jb.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		Lb = function() {
			try {
				return wa();
			} catch (a) {}
		},
		Mb = t(function() {
			return Bb() ||
				(-1 == z.indexOf("iPod") &&
					-1 == z.indexOf("iPhone") &&
					-1 == z.indexOf("Android") &&
					-1 == z.indexOf("IEMobile"))
				? Bb()
					? 1
					: 0
				: 2;
		}),
		Nb = function(a) {
			var b =
				"https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_dupeid";
			Hb(a, function(c, d) {
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
	var J = function(a) {
		D(this, a, Ob, Pb);
	};
	m(J, B);
	var Ob = [2, 8],
		Pb = [[3, 4, 5], [6, 7]];
	var Qb = function(a) {
			return null != a ? !a : a;
		},
		Rb = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		Tb = function(a, b) {
			var c = I(a, J, 2);
			if (!c.length) return Sb(a, b);
			a = G(a, 1, 0);
			if (1 == a) return Qb(Tb(c[0], b));
			c = q(c, function(d) {
				return function() {
					return Tb(d, b);
				};
			});
			switch (a) {
				case 2:
					return Rb(c, !1);
				case 3:
					return Rb(c, !0);
			}
		},
		Sb = function(a, b) {
			var c = vb(a, Pb[0]);
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
								a = wb(a, 6);
								break a;
							case 5:
								a = G(a, 7, "");
								break a;
						}
						a = void 0;
					}
				if (null != a) {
					if (6 == b) return e === a;
					if (9 == b) return 0 == Za(e, a);
					if (d)
						switch (b) {
							case 7:
								return e < a;
							case 8:
								return e > a;
							case 12:
								return new RegExp(a).test(e);
							case 10:
								return -1 == Za(e, a);
							case 11:
								return 1 == Za(e, a);
						}
				}
			}
		},
		Ub = function(a, b) {
			return !a || !(!b || !Tb(a, b));
		};
	var Wb = function(a) {
		D(this, a, Vb, null);
	};
	m(Wb, B);
	var Vb = [4];
	var K = function(a) {
		D(this, a, Xb, Yb);
	};
	m(K, B);
	var Zb = function(a) {
		D(this, a, null, null);
	};
	m(Zb, B);
	var Xb = [5],
		Yb = [[1, 2, 3, 6, 7]];
	var L = function() {
		var a = {};
		this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
	};
	k(L);
	var $b = /^true$/.test("false");
	var ac = $b,
		bc = function(a, b) {
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
		cc = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return (a = F(a, 1)), (a = null == a ? a : !!a), null == a ? !1 : a;
				case 7:
					return G(a, 3, "");
				case 2:
					return wb(a, 2);
				case 3:
					return G(a, 3, "");
				case 6:
					return F(a, 4);
				default:
					return null;
			}
		},
		dc = t(function() {
			if (!ac) return {};
			try {
				var a =
					window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
				if (a) return JSON.parse(a);
			} catch (b) {}
			return {};
		}),
		fc = function(a, b, c, d) {
			d = void 0 === d ? 0 : d;
			var e = dc();
			if (e[a] && null != e[a][b]) return e[a][b];
			b = M(d)[a][b];
			if (!b) return c;
			b = new K(b);
			b = ec(b);
			a = cc(b, a);
			return null != a ? a : c;
		},
		ec = function(a) {
			var b = L.f().a;
			if (b) {
				var c = Ga(I(a, Zb, 5), function(d) {
					return Ub(H(d, J, 1), b);
				});
				if (c) return H(c, Wb, 2);
			}
			return H(a, Wb, 4);
		},
		gc = function() {
			this.a = {};
			this.b = [];
		};
	k(gc);
	var hc = function(a, b, c) {
			return !!fc(1, a, void 0 === b ? !1 : b, c);
		},
		ic = function(a, b, c) {
			b = void 0 === b ? 0 : b;
			a = Number(fc(2, a, b, c));
			return isNaN(a) ? b : a;
		},
		jc = function(a, b, c) {
			return fc(3, a, void 0 === b ? "" : b, c);
		},
		kc = function(a, b, c) {
			b = void 0 === b ? [] : b;
			return fc(6, a, b, c);
		},
		M = function(a) {
			var b = {};
			return (
				gc.f().a[a] ||
				(gc.f().a[a] = ((b[1] = {}), (b[2] = {}), (b[3] = {}), (b[6] = {}), b))
			);
		},
		lc = function(a, b) {
			var c = M(b);
			Hb(a, function(d, e) {
				return Hb(d, function(f, g) {
					return (c[e][g] = f);
				});
			});
		},
		mc = function(a, b) {
			var c = M(b);
			p(a, function(d) {
				var e = vb(d, Yb[0]),
					f = bc(d, e);
				f && (c[e][f] = d.h);
			});
		},
		nc = function(a, b) {
			var c = M(b);
			p(a, function(d) {
				var e = new K(d),
					f = vb(e, Yb[0]);
				(e = bc(e, f)) && (c[f][e] || (c[f][e] = d));
			});
		},
		oc = function() {
			return q(Object.keys(gc.f().a), function(a) {
				return Number(a);
			});
		},
		pc = function(a) {
			r(gc.f().b, a) || lc(M(4), a);
		};
	var N = function(a) {
			this.methodName = a;
		},
		qc = new N(1),
		rc = new N(15),
		sc = new N(2),
		tc = new N(3),
		uc = new N(4),
		vc = new N(5),
		wc = new N(6),
		xc = new N(7),
		yc = new N(8),
		zc = new N(9),
		Ac = new N(10),
		Bc = new N(11),
		Cc = new N(12),
		Dc = new N(13),
		Ec = new N(14),
		O = function(a, b, c) {
			c.hasOwnProperty(a.methodName) ||
				Object.defineProperty(c, String(a.methodName), { value: b });
		},
		P = function(a, b, c) {
			return b[a.methodName] || c || function() {};
		},
		Fc = function(a) {
			O(vc, hc, a);
			O(wc, ic, a);
			O(xc, jc, a);
			O(yc, kc, a);
			O(Dc, nc, a);
			O(rc, pc, a);
		},
		Gc = function(a) {
			O(
				uc,
				function(b) {
					L.f().a = b;
				},
				a
			);
			O(
				zc,
				function(b, c) {
					var d = L.f();
					d.a[3][b] || (d.a[3][b] = c);
				},
				a
			);
			O(
				Ac,
				function(b, c) {
					var d = L.f();
					d.a[4][b] || (d.a[4][b] = c);
				},
				a
			);
			O(
				Bc,
				function(b, c) {
					var d = L.f();
					d.a[5][b] || (d.a[5][b] = c);
				},
				a
			);
			O(
				Ec,
				function(b) {
					for (
						var c = L.f(), d = ka([3, 4, 5]), e = d.next();
						!e.done;
						e = d.next()
					)
						(e = e.value), Da(c.a[e], b[e]);
				},
				a
			);
		},
		Hc = function(a) {
			a.hasOwnProperty("init-done") ||
				Object.defineProperty(a, "init-done", { value: !0 });
		};
	var Ic = function() {
			this.b = function(a, b) {
				return void 0 === b ? !1 : b;
			};
			this.c = function(a, b) {
				return void 0 === b ? 0 : b;
			};
			this.a = function() {};
		},
		Jc = function(a, b, c) {
			a.b = function(d, e) {
				return P(vc, b)(d, e, c);
			};
			a.c = function(d, e) {
				return P(wc, b)(d, e, c);
			};
			a.a = function() {
				P(rc, b)(c);
			};
		};
	k(Ic);
	var Q = function(a) {
		var b = void 0 === b ? !1 : b;
		return Ic.f().b(a, b);
	};
	var Kc = function() {};
	var Lc = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var Mc = null,
		Nc = function() {
			if (null === Mc) {
				Mc = "";
				try {
					var a = "";
					try {
						a = h.top.location.hash;
					} catch (c) {
						a = h.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						Mc = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return Mc;
		};
	var R = function() {
			this.a = function() {};
			this.b = function() {
				return [];
			};
		},
		Oc = function(a, b, c) {
			a.a = function(d) {
				P(sc, b, function() {
					return [];
				})(d, c);
			};
			a.b = function() {
				return P(tc, b, function() {
					return [];
				})(c);
			};
		};
	k(R);
	var Pc = function(a, b) {
			a = ya(a);
			a = "function" === typeof a ? a() : a;
			return typeof a === b ? a : void 0;
		},
		Qc = function() {
			var a = {};
			this[3] = ((a[8] = function(b) {
				return !!ya(b);
			}),
			(a[9] = function(b) {
				b = ya(b);
				var c;
				if ((c = "function" == Aa(b)))
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
				b = Pc(b, "boolean");
				return void 0 !== b ? b : void 0;
			}),
			a);
			a = {};
			this[4] = ((a[3] = function() {
				return Mb();
			}),
			(a[6] = function(b) {
				b = Pc(b, "number");
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
				b = Pc(b, "string");
				return void 0 !== b ? b : void 0;
			}),
			a);
		};
	k(Qc);
	var Rc = function() {
		var a = void 0 === a ? h : a;
		return a.ggeac || (a.ggeac = {});
	};
	var Tc = function(a) {
		D(this, a, Sc, null);
	};
	m(Tc, B);
	var Sc = [2];
	Tc.prototype.getId = function() {
		return G(this, 1, 0);
	};
	Tc.prototype.m = function() {
		return G(this, 7, 0);
	};
	var Vc = function(a) {
		D(this, a, Uc, null);
	};
	m(Vc, B);
	var Uc = [2];
	Vc.prototype.m = function() {
		return G(this, 5, 0);
	};
	var Xc = function(a) {
		D(this, a, Wc, null);
	};
	m(Xc, B);
	var S = function(a) {
		D(this, a, Yc, null);
	};
	m(S, B);
	var Wc = [1, 4, 2, 3],
		Yc = [2];
	S.prototype.m = function() {
		return G(this, 1, 0);
	};
	var Zc = [12, 13],
		$c = function() {},
		ad = function(a, b, c, d) {
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
			(c = Nc()) &&
				p(c.split(",") || [], function(g) {
					(g = parseInt(g, 10)) && (a.c[g] = !0);
				});
			return a;
		},
		fd = function(a, b, c) {
			var d = [],
				e = bd(a.a, b);
			if (e.length) {
				9 !== b && (a.a = cd(a.a, b));
				var f = r(Zc, b);
				p(e, function(g) {
					if ((g = dd(a, g, c))) {
						var l = g.getId();
						d.push(l);
						ed(a, l, f ? 4 : c);
						var n = I(g, K, 2);
						n &&
							(f
								? p(oc(), function(oa) {
										return mc(n, oa);
								  })
								: mc(n, c));
					}
				});
			}
			return d;
		},
		ed = function(a, b, c) {
			a.b[c] || (a.b[c] = []);
			a = a.b[c];
			r(a, b) ? Nb({ eids: JSON.stringify(a), dup: b }) : a.push(b);
		},
		gd = function(a, b) {
			a.a.push.apply(
				a.a,
				la(
					Ea(
						q(b, function(c) {
							return new S(c);
						}),
						function(c) {
							return !r(Zc, c.m());
						}
					)
				)
			);
		},
		dd = function(a, b, c) {
			var d = L.f().a;
			if (!Ub(H(b, J, 3), d)) return null;
			var e = I(b, Tc, 2),
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
				null === f && (f = Math.floor(1e3 * Fb(window)));
				b = hd(b, f);
				return !b || (d && !Ub(H(b, J, 3), d)) ? null : id(a, [b], 1);
			}
			g = d
				? Ea(e, function(n) {
						return Ub(H(n, J, 3), d);
				  })
				: e;
			return g.length
				? (b = G(b, 4, 0))
					? jd(a, b, f, g)
					: id(a, g, f / 1e3)
				: null;
		},
		jd = function(a, b, c, d) {
			var e = null != a.g[b] ? a.g[b] : 1e3;
			if (0 >= e) return null;
			d = id(a, d, c / e);
			a.g[b] = d ? 0 : e - c;
			return d;
		},
		id = function(a, b, c) {
			var d = a.c,
				e = Fa(b, function(f) {
					return !!d[f.getId()];
				});
			return e ? e : a.i ? null : Gb(b, c);
		},
		kd = function(a, b) {
			O(
				qc,
				function(c) {
					a.c[c] = !0;
				},
				b
			);
			O(
				sc,
				function(c, d) {
					return fd(a, c, d);
				},
				b
			);
			O(
				tc,
				function(c) {
					return (a.b[c] || []).concat(a.b[4]);
				},
				b
			);
			O(
				Cc,
				function(c) {
					return gd(a, c);
				},
				b
			);
		};
	k($c);
	var bd = function(a, b) {
			return (
				((a = Fa(a, function(c) {
					return c.m() == b;
				})) &&
					I(a, Vc, 2)) ||
				[]
			);
		},
		cd = function(a, b) {
			return Ea(a, function(c) {
				return c.m() != b;
			});
		},
		hd = function(a, b) {
			var c = I(a, Tc, 2),
				d = c.length,
				e = G(a, 1, 0);
			a = G(a, 8, 0);
			var f = (b - a) % d;
			return b < a || b - a - f >= d * e - 1 ? null : c[f];
		};
	var ld = function() {
		this.a = function() {};
	};
	k(ld);
	var md = function(a) {
		ld.f().a(a);
	};
	var pd = function(a) {
			var b = nd.f(),
				c = { G: T(211), J: T(227), O: T(226) },
				d = void 0,
				e = 2;
			d = void 0 === d ? Rc() : d;
			e = void 0 === e ? 0 : e;
			d.hasOwnProperty("init-done")
				? (P(Cc, d)(
						q(I(a, S, 2), function(f) {
							return f.h;
						})
				  ),
				  P(Dc, d)(
						q(I(a, K, 1), function(f) {
							return f.h;
						}),
						e
				  ),
				  b && P(Ec, d)(b),
				  od(d, e))
				: (kd(ad($c.f(), I(a, S, 2), e, c), d),
				  Fc(d),
				  Gc(d),
				  Hc(d),
				  od(d, e),
				  mc(I(a, K, 1), e),
				  (ac = ac || !(!c || !c.V)),
				  md(Qc.f()),
				  b && md(b));
		},
		od = function(a, b) {
			a = void 0 === a ? Rc() : a;
			b = void 0 === b ? 0 : b;
			var c = a,
				d = b;
			d = void 0 === d ? 0 : d;
			Oc(R.f(), c, d);
			c = a;
			b = void 0 === b ? 0 : b;
			Jc(Ic.f(), c, b);
			ld.f().a = P(Ec, a);
			Ic.f().a();
		};
	var qd = function(a, b, c) {
		var d = "script";
		d = void 0 === d ? "" : d;
		var e = a.createElement("link");
		try {
			e.rel = "preload";
			if (b instanceof w) var f = x(b).toString();
			else {
				if (b instanceof y) var g = bb(b);
				else {
					if (b instanceof y) var l = b;
					else
						(b = "object" == typeof b && b.j ? b.a() : String(b)),
							cb.test(b) || (b = "about:invalid#zClosurez"),
							(l = new y($a, b));
					g = bb(l);
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
	var rd = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		sd = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		td = function(a) {
			return rd.test(a) && !sd.test(a);
		},
		ud = function(a) {
			return a.replace(/[\W]/g, function(b) {
				return "&#" + b.charCodeAt() + ";";
			});
		},
		U = h,
		vd = function(a, b) {
			a = "https://adservice" + (b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(h.location.hostname)];
			V[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(V[1]));
			return a + "?" + b.join("&");
		},
		V,
		W,
		wd = function() {
			U = h;
			V = U.googleToken = U.googleToken || {};
			var a = +new Date();
			(V[1] && V[3] > a && 0 < V[2]) ||
				((V[1] = ""), (V[2] = -1), (V[3] = -1), (V[4] = ""), (V[6] = ""));
			W = U.googleIMState = U.googleIMState || {};
			td(W[1]) || (W[1] = ".google.com");
			Array.isArray(W[5]) || (W[5] = []);
			"boolean" !== typeof W[6] && (W[6] = !1);
			Array.isArray(W[7]) || (W[7] = []);
			"number" !== typeof W[8] && (W[8] = 0);
		},
		xd = function(a) {
			try {
				a();
			} catch (b) {
				h.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		zd = function(a) {
			"complete" == h.document.readyState ||
			"loaded" == h.document.readyState ||
			(h.document.currentScript && h.document.currentScript.async)
				? yd(3)
				: a();
		},
		Ad = 0,
		Bd = {
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
			F: xd
		},
		Cd = {
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
				return ".google.com" != W[1] && 2 < ++Ad;
			},
			H: function() {
				return W[7];
			},
			F: function(a) {
				zd(function() {
					xd(a);
				});
			}
		},
		yd = function(a) {
			if (1e-5 > Math.random()) {
				h.google_image_requests || (h.google_image_requests = []);
				var b = h.document.createElement("img");
				b.src =
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
					a;
				h.google_image_requests.push(b);
			}
		};
	Bd.s = function() {
		if (!Bd.o()) {
			var a = h.document,
				b = function(e) {
					e = vd("js", e);
					var f = Lb();
					qd(a, e, f);
					f = a.createElement("script");
					f.type = "text/javascript";
					f.onerror = function() {
						return h.processGoogleToken({}, 2);
					};
					e = Ab(e);
					f.src = x(e);
					rb(f);
					try {
						(a.head || a.body || a.documentElement).appendChild(f), Bd.B();
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
	Cd.s = function() {
		if (!Cd.o()) {
			var a = h.document,
				b = vd("sync.js", W[1]),
				c = Lb();
			qd(a, b, c);
			b = ud(b);
			var d = sb("script"),
				e = "";
			c && (e = 'nonce="' + ud(c) + '"');
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
			zd(function() {
				a.write(f);
				Cd.B();
			});
		}
	};
	var Dd = function(a) {
			wd();
			(V[3] >= +new Date() && V[2] >= +new Date()) || a.s();
		},
		Fd = function() {
			h.processGoogleToken =
				h.processGoogleToken ||
				function(a, b) {
					return Ed(Bd, a, b);
				};
			Dd(Bd);
		},
		Gd = function() {
			h.processGoogleTokenSync =
				h.processGoogleTokenSync ||
				function(a, b) {
					return Ed(Cd, a, b);
				};
			Dd(Cd);
		},
		Ed = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				g = parseInt(b.validLifetimeSecs || "", 10),
				l = b["1p_jar"] || "";
			b = b.pucrd || "";
			wd();
			1 == c ? a.M() : a.L();
			if (!d && a.P()) td(".google.com") && (W[1] = ".google.com"), a.s();
			else {
				var n = (U.googleToken = U.googleToken || {}),
					oa =
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
				var Ud = !(V[3] >= +new Date()) && 0 != c;
				if (oa || e || Ud)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(g = e + 1e3 * g),
						yd(c),
						(n[5] = c),
						(n[1] = d),
						(n[2] = f),
						(n[3] = g),
						(n[4] = l),
						(n[6] = b),
						wd();
				if (oa || !a.o()) {
					c = a.H();
					for (d = 0; d < c.length; d++) a.F(c[d]);
					c.length = 0;
				}
			}
		};
	var Hd = function(a) {
		a = void 0 === a ? h : a;
		return (a = a.performance) && a.now ? a.now() : null;
	};
	var X = h.performance,
		Id = !!(X && X.mark && X.measure && X.clearMarks),
		Jd = t(function() {
			var a;
			if ((a = Id)) (a = Nc()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
			return a;
		});
	var Kd = function(a, b, c) {
			this.a = void 0 === a ? null : a;
			this.g = void 0 === b ? "jserror" : b;
			this.b = null;
			this.c = void 0 === c ? 0.01 : c;
			this.l = this.i;
		},
		Ld = function(a, b) {
			a.b = b;
		};
	Kd.prototype.i = function(a, b, c, d, e) {
		c = void 0 === c ? this.c : c;
		e = void 0 === e ? this.g : e;
		if (Math.random() > c) return !1;
		(b.error && b.meta && b.id) || (b = new Lc(b, { context: a, id: e }));
		if (d || this.b) (b.meta = {}), this.b && this.b(b.meta), d && d(b.meta);
		h.google_js_errors = h.google_js_errors || [];
		h.google_js_errors.push(b);
		h.error_rep_loaded ||
			((b = h.document),
			(a = b.createElement("script")),
			(c = Ab(
				h.location.protocol +
					"//pagead2.googlesyndication.com/pagead/js/err_rep.js"
			)),
			(a.src = x(c)),
			rb(a),
			(b = b.getElementsByTagName("script")[0]) &&
				b.parentNode &&
				b.parentNode.insertBefore(a, b),
			(h.error_rep_loaded = !0));
		return !1;
	};
	var Md = function(a, b) {
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
					Jd() &&
					(X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
					X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
				!a.l(420, d, a.c, void 0, a.g))
			)
				throw d;
		}
	};
	var Nd = new v(u, "gpt/pubads_impl_"),
		Od = new v(u, "https://securepubads.g.doubleclick.net/");
	var Pd = function(a) {
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
	var Qd = function(a) {
			var b = Hd(a);
			b &&
				((b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				2048 > a.length && a.push(b));
		},
		Rd = function(a, b, c) {
			var d = window;
			return function() {
				var e = Hd(),
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
							duration: (Hd() || 0) - e,
							type: f
						}),
						(f = d.google_js_reporting_queue =
							d.google_js_reporting_queue || []),
						2048 > f.length && f.push(e));
				}
				return g;
			};
		},
		Sd = function(a, b) {
			return Rd(a, b, function(c, d) {
				new Kd().i(c, d);
			});
		};
	function Y(a, b) {
		return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
	}
	var Vd = function() {
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
			Td(b));
		this.T = new PerformanceObserver(
			Sd(640, function(c) {
				c = ka(c.getEntries());
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
		this.b = Sd(641, this.b.bind(this));
	};
	ta(Vd, Kc);
	var Wd = function() {
		var a = new Vd();
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
	Vd.prototype.b = function() {
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
					c = ka(document.getElementsByTagName("iframe")),
					d = c.next();
				!d.done;
				d = c.next()
			)
				if (
					((d = d.value),
					ia(d.id, "includes").call(d.id, "google_ads_iframe_") ||
						ia(d.id, "includes").call(d.id, "aswift"))
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
			Td(a);
		}
	};
	function Td(a) {
		window.fetch(a, {
			keepalive: !0,
			credentials: "include",
			redirect: "follow",
			method: "get",
			mode: "no-cors"
		});
	}
	var Xd = ["https://www.google.com"],
		Yd = void 0,
		Zd = function(a) {
			this.c = Xd;
			this.a = 2;
			this.b = a;
		};
	ta(Zd, Kc);
	var $d = function(a) {
		null === a.b ||
			3 <= a.a ||
			((a.a = 3),
			p(a.c, function(b) {
				a.b
					.fetch(b + "/.well-known/trust-token", {
						keepalive: !0,
						redirect: "follow",
						method: "get",
						W: {
							type: "srr-token-redemption",
							issuer: b,
							refreshPolicy: "none"
						}
					})
					.then(function(c) {
						if (!c.ok) throw Error(c.status + ": Network response was not ok!");
						a.a = 5;
					})
					.catch(function(c) {
						c && "NoModificationAllowedError" === c.name
							? (a.a = 5)
							: 4 > a.a && (a.a = 4);
					});
			}));
	};
	var ae = function() {
			return h.googletag || (h.googletag = {});
		},
		be = function(a, b) {
			var c = ae();
			c.hasOwnProperty(a) || (c[a] = b);
		},
		ce = function(a, b) {
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
		228: "//www.googletagservices.com/pubconsole/",
		249: !1
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
	Z[148] = $b;
	Z[221] = /^true$/.test("");
	Z[204] = Kb("{{MOD}}", -1);
	var de = function() {
		Da(this, Z);
	};
	k(de);
	var T = function(a) {
			return de.f()[a];
		},
		ee = ae(),
		fe = de.f();
	Da(fe, ee._vars_);
	ee._vars_ = fe;
	var ge = (function(a, b) {
			var c = b || Ia;
			return function() {
				var d = this || h;
				d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
				var e =
					(Object.prototype.hasOwnProperty.call(a, Ba) && a[Ba]) ||
					(a[Ba] = ++Ca);
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
		he = function() {
			return 0 === ge(T(172));
		};
	var ie = function() {
		return Kb("9") || 0;
	};
	be("getVersion", function() {
		return "2020052102";
	});
	var nd = function() {
		var a = {};
		this[3] = ((a[3] = he),
		(a[2] = T(36)),
		(a[17] = function(b) {
			for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
			d = String;
			var e = void 0 === e ? window : e;
			if ((e = (e = e.location.href.match(Cb)[3] || null) ? decodeURI(e) : e)) {
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
		(a[4] = ie),
		a);
		this[5] = {};
	};
	k(nd);
	var je = [],
		ke = function(a) {
			var b = new Xc(T(246));
			a = new Xc(a || je);
			if (!I(b, K, 1).length && I(a, K, 1).length) {
				var c = I(a, K, 1);
				yb(b, 1, c);
			}
			!I(b, S, 2).length &&
				I(a, S, 2).length &&
				((a = I(a, S, 2)), yb(b, 2, a));
			pd(b);
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
			var a = [Od, Nd, new v(u, "2020052102"), new v(u, ".js")];
			for (var b = "", c = 0; c < a.length; c++) b += Ka(a[c]);
			a = new w(La, b);
			var d = void 0 === d ? 0 : d;
			(d = Ic.f().c(24, d))
				? ((d = String(d)),
				  (a = Na.exec(x(a).toString())),
				  (b = a[3] || ""),
				  (d = new w(La, a[1] + Oa("?", a[2] || "", d) + Oa("#", b, void 0))))
				: (d = a);
			return d;
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
			de.f()[172] = a;
			new ke(b);
			R.f().a(12);
			R.f().a(5);
			Q(200) || Q(220) || ((b = T(150)), wd(), td(b) && (W[1] = b));
			Q(312) &&
				(void 0 === Yd &&
					(document.hasTrustToken ? (Yd = new Zd(c)) : (Yd = null)),
				(c = Yd),
				c && $d(c));
		},
		oe = function(a, b, c) {
			var d = ae();
			a = a || d.fifWin || window;
			b = b || a.document;
			var e = d.fifWin ? window : a;
			be("cmd", []);
			if (d.evalScripts) d.evalScripts();
			else {
				ne(b, c, a);
				try {
					a.PerformanceObserver &&
						(a.PerformanceLongTaskTiming && Pd(a),
						Q(203) &&
							!window.google_plmetrics &&
							(Wd(), (window.google_plmetrics = !0)));
				} catch (n) {}
				Q(339) && (de.f()[249] = !0);
				Qd(a);
				a = me();
				c = Q(200) || Q(239);
				if (le(b)) {
					var f = "gpt-impl-" + Math.random();
					try {
						qb(b, mb(a, { id: f, nonce: wa() }));
					} catch (n) {}
					b.getElementById(f) && ((d._loadStarted_ = !0), c || Gd());
				}
				if (!d._loadStarted_) {
					c || Fd();
					b = d.fifWin ? e.document : b;
					var g = b.createElement("script");
					g.src = x(a);
					rb(g);
					g.async = !0;
					var l = b.head || b.body || b.documentElement;
					"complete" !== e.document.readyState && d.fifWin
						? ce(e, function() {
								return void l.appendChild(g);
						  })
						: l.appendChild(g);
					d._loadStarted_ = !0;
				}
			}
		};
	var pe;
	a: {
		try {
			if (Array.isArray(E)) {
				pe = E;
				break a;
			}
		} catch (a) {}
		pe = [];
	}
	(function(a, b, c) {
		var d = new Kd(null, "gpt_exception", 0.01);
		Ld(d, function(e) {
			e.methodId = 420;
		});
		Md(d, function() {
			return oe(a, b, c);
		});
	})(void 0, void 0, pe);
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
	[
		[null, 7, null, [null, 0.1]],
		[20, null, null, [], [[[1, [[4, null, 1]]], [1]]]],
		[315, null, null, [1]],
		[252, null, null, [1]],
		[258, null, null, [1]],
		[326, null, null, [1]],
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
		[298, null, null, [1]],
		[89, null, null, [1]],
		[null, null, 2, [null, null, "1-0-37"]],
		[229, null, null, [1]],
		[215, null, null, [1]],
		[null, 39, null, [null, 72]],
		[null, 38, null, [null, 24]],
		[null, 40, null, [null, 5]],
		[null, 33, null, [null, 250]],
		[269, null, null, [1]],
		[276, null, null, [1]],
		[287, null, null, [1]],
		[321, null, null, [1]],
		[337, null, null, [1]],
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
				[1, [[21065803], [21065804, [[329, null, null, [1]]]]]],
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
				[50, [[21065975], [21065976, [[319, null, null, [1]]]]], null, 22],
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
								[293, null, null, [1]]
							]
						],
						[21066136, [[322, null, null, [1]], [293, null, null, [1]]]]
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
				[50, [[21066063], [21066065, [[null, 32, null, []]]]]],
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
				[null, [[21066137], [21066138, [[322, null, null, [1]]]]], null, 22],
				[
					50,
					[
						[21066163],
						[
							21066164,
							[
								[298, null, null, []],
								[287, null, null, []],
								[321, null, null, []]
							]
						]
					]
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
				[50, [[21066221], [21066222, [[89, null, null, []]]]]],
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
				[1, [[21066169], [21066170, [[274, null, null, [1]]]]]],
				[
					1000,
					[
						[
							21066225,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066225]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066225]]
							],
							[6, null, null, 4, null, 2]
						],
						[
							21066226,
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
							21066231,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066231]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066231]]
							],
							[6, null, null, 4, null, 4]
						],
						[
							21066232,
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
							21066238,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066238]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066238]]
							],
							[6, null, null, 4, null, 6]
						],
						[
							21066239,
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
							21066242,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066242]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066242]]
							],
							[6, null, null, 4, null, 8]
						],
						[
							21066243,
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
			2,
			[
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
				]
			]
		]
	]
]));
