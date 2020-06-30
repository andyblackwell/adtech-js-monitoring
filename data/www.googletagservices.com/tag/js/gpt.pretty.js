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
			if (b)
				a: {
					var d = a.split(".");
					a = 1 === d.length;
					var e = d[0],
						f;
					!a && e in fa ? (f = fa) : (f = da);
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
		var oa;
		a: {
			var pa = { V: !0 },
				qa = {};
			try {
				qa.__proto__ = pa;
				oa = qa.V;
				break a;
			} catch (a) {}
			oa = !1;
		}
		na = oa
			? function(a, b) {
					a.__proto__ = b;
					if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
					return a;
			  }
			: null;
	}
	var ra = na,
		sa = function(a, b) {
			a.prototype = ma(b.prototype);
			a.prototype.constructor = a;
			if (ra) ra(a, b);
			else
				for (var c in b)
					if ("prototype" != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d);
						} else a[c] = b[c];
		};
	ja(
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
	ja(
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
							if (f === b || ia(Object, "is").call(Object, f, b)) return !0;
						}
						return !1;
				  };
		},
		"es7"
	);
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
		va = function(a) {
			if (a && a != h) return ta(a.document);
			null === ua && (ua = ta(h.document));
			return ua;
		},
		wa = /^[\w+/_-]+[=]{0,2}$/,
		ua = null,
		ta = function(a) {
			return (a = a.querySelector && a.querySelector("script[nonce]")) &&
				(a = a.nonce || a.getAttribute("nonce")) &&
				wa.test(a)
				? a
				: "";
		},
		xa = function(a) {
			a = a.split(".");
			for (var b = h, c = 0; c < a.length; c++)
				if (((b = b[a[c]]), null == b)) return null;
			return b;
		},
		ya = function() {},
		l = function(a) {
			a.A = void 0;
			a.f = function() {
				return a.A ? a.A : (a.A = new a());
			};
		},
		za = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		Aa = 0,
		Ba = function(a, b) {
			for (var c in b) a[c] = b[c];
		},
		n = Date.now,
		p = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
		};
	var Ca;
	var q = function(a, b) {
			Array.prototype.forEach.call(a, b, void 0);
		},
		Da = function(a, b) {
			return Array.prototype.filter.call(a, b, void 0);
		},
		r = function(a, b) {
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
		t = function(a, b) {
			return 0 <= Array.prototype.indexOf.call(a, b, void 0);
		};
	var u = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
	var Ga = {
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
		this.c = Ha;
	};
	w.prototype.j = !0;
	w.prototype.a = function() {
		return this.b;
	};
	var Ia = function(a) {
			return a instanceof w && a.constructor === w && a.c === Ha
				? a.b
				: "type_error:Const";
		},
		Ha = {},
		v = {};
	var x = function(a, b) {
		this.c = (a === Ja && b) || "";
		this.g = Ka;
	};
	x.prototype.j = !0;
	x.prototype.a = function() {
		return this.c.toString();
	};
	x.prototype.v = !0;
	x.prototype.b = function() {
		return 1;
	};
	var La = function(a) {
			return a instanceof x && a.constructor === x && a.g === Ka
				? a.c
				: "type_error:TrustedResourceUrl";
		},
		Oa = function(a) {
			var b = Ia(
				new w(v, "https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}")
			);
			if (!Ma.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
			var c = b.replace(Na, function(d, e) {
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
				return d instanceof w ? Ia(d) : encodeURIComponent(String(d));
			});
			return new x(Ja, c);
		},
		Na = /%{(\w+)}/g,
		Ma = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
		Pa = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		Ka = {},
		Qa = function(a, b, c) {
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
		Ja = {};
	var Ra = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		Za = function(a) {
			if (!Sa.test(a)) return a;
			-1 != a.indexOf("&") && (a = a.replace(Ta, "&amp;"));
			-1 != a.indexOf("<") && (a = a.replace(Ua, "&lt;"));
			-1 != a.indexOf(">") && (a = a.replace(Va, "&gt;"));
			-1 != a.indexOf('"') && (a = a.replace(Wa, "&quot;"));
			-1 != a.indexOf("'") && (a = a.replace(Xa, "&#39;"));
			-1 != a.indexOf("\x00") && (a = a.replace(Ya, "&#0;"));
			return a;
		},
		Ta = /&/g,
		Ua = /</g,
		Va = />/g,
		Wa = /"/g,
		Xa = /'/g,
		Ya = /\x00/g,
		Sa = /[\x00&<>"']/,
		ab = function(a, b) {
			var c = 0;
			a = Ra(String(a)).split(".");
			b = Ra(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c =
						$a(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == g[1].length ? 0 : parseInt(g[1], 10)
						) ||
						$a(0 == f[2].length, 0 == g[2].length) ||
						$a(f[2], g[2]);
					f = f[3];
					g = g[3];
				} while (0 == c);
			}
			return c;
		},
		$a = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var y = function(a, b) {
		this.c = (a === bb && b) || "";
		this.g = cb;
	};
	y.prototype.j = !0;
	y.prototype.a = function() {
		return this.c.toString();
	};
	y.prototype.v = !0;
	y.prototype.b = function() {
		return 1;
	};
	var db = function(a) {
			return a instanceof y && a.constructor === y && a.g === cb
				? a.c
				: "type_error:SafeUrl";
		},
		eb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		cb = {},
		fb = new y(bb, "about:invalid#zClosurez"),
		bb = {};
	var z;
	a: {
		var gb = h.navigator;
		if (gb) {
			var hb = gb.userAgent;
			if (hb) {
				z = hb;
				break a;
			}
		}
		z = "";
	}
	var A = function() {
		this.c = "";
		this.i = ib;
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
	var jb = function(a) {
			return a instanceof A && a.constructor === A && a.i === ib
				? a.c
				: "type_error:SafeHtml";
		},
		lb = function(a) {
			if (a instanceof A) return a;
			var b = "object" == typeof a,
				c = null;
			b && a.v && (c = a.b());
			a = Za(b && a.j ? a.a() : String(a));
			return kb(a, c);
		},
		mb = /^[a-zA-Z0-9-]+$/,
		nb = {
			action: !0,
			cite: !0,
			data: !0,
			formaction: !0,
			href: !0,
			manifest: !0,
			poster: !0,
			src: !0
		},
		pb = function(a, b) {
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
					if (!mb.test(g)) throw Error("");
					d = a[g];
					if (null != d) {
						c = g;
						if (d instanceof w) d = Ia(d);
						else {
							if ("style" == c.toLowerCase()) throw Error("");
							if (/^on/i.test(c)) throw Error("");
							if (c.toLowerCase() in nb)
								if (d instanceof x) d = La(d).toString();
								else if (d instanceof y) d = db(d);
								else if ("string" === typeof d)
									d instanceof y ||
										((d = "object" == typeof d && d.j ? d.a() : String(d)),
										(d = eb.test(d) ? new y(bb, d) : null)),
										(d = (d || fb).a());
								else throw Error("");
						}
						d.j && (d = d.a());
						c = c + '="' + Za(String(d)) + '"';
						e += " " + c;
					}
				}
			var g = "<script" + e;
			e = void 0;
			null == e ? (e = []) : Array.isArray(e) || (e = [e]);
			!0 === Ga.script
				? (g += ">")
				: ((b = ob(e)),
				  (g += ">" + jb(b).toString() + "\x3c/script>"),
				  (b = b.b()));
			(a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
			return kb(g, b);
		},
		rb = function(a) {
			var b = lb(qb),
				c = b.b(),
				d = [],
				e = function(f) {
					Array.isArray(f)
						? q(f, e)
						: ((f = lb(f)),
						  d.push(jb(f).toString()),
						  (f = f.b()),
						  0 == c ? (c = f) : 0 != f && c != f && (c = null));
				};
			q(a, e);
			return kb(d.join(jb(b).toString()), c);
		},
		ob = function(a) {
			return rb(Array.prototype.slice.call(arguments));
		},
		ib = {},
		kb = function(a, b) {
			var c = new A();
			c.c = a;
			c.g = b;
			return c;
		},
		sb = new A();
	sb.c =
		h.trustedTypes && h.trustedTypes.emptyHTML ? h.trustedTypes.emptyHTML : "";
	sb.g = 0;
	var qb = sb;
	var tb = function(a, b) {
			a.write(jb(b));
		},
		ub = function(a, b) {
			a.src = La(b);
			(b = va(a.ownerDocument && a.ownerDocument.defaultView)) &&
				a.setAttribute("nonce", b);
		};
	var vb = function(a) {
		vb[" "](a);
		return a;
	};
	vb[" "] = ya;
	var wb = {},
		xb = null;
	var C = function() {},
		yb = "function" == typeof Uint8Array,
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
							(yb && e instanceof Uint8Array)
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
							? ((e += a.c), (a.h[e] = a.h[e] || zb))
							: (Ab(a), (a.b[e] = a.b[e] || zb));
			if (d && d.length) for (b = 0; b < d.length; b++) Bb(a, d[b]);
		},
		zb = [],
		Ab = function(a) {
			var b = a.g + a.c;
			a.h[b] || (a.b = a.h[b] = {});
		},
		F = function(a, b) {
			if (b < a.g) {
				b += a.c;
				var c = a.h[b];
				return c === zb ? (a.h[b] = []) : c;
			}
			if (a.b) return (c = a.b[b]), c === zb ? (a.b[b] = []) : c;
		},
		G = function(a, b, c) {
			a = F(a, b);
			return null == a ? c : a;
		},
		Cb = function(a, b) {
			a = F(a, b);
			a = null == a ? a : +a;
			return null == a ? 0 : a;
		},
		Db = function(a, b, c) {
			b < a.g ? (a.h[b + a.c] = c) : (Ab(a), (a.b[b] = c));
		},
		Eb = function(a, b, c) {
			"" !== c
				? Db(a, b, c)
				: b < a.g
					? (a.h[b + a.c] = null)
					: (Ab(a), delete a.b[b]);
			return a;
		},
		Bb = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					g = F(a, f);
				null != g && ((c = f), (d = g), Db(a, f, void 0));
			}
			return c ? (Db(a, c, d), c) : 0;
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
			b == zb && (b = a.a[c] = []);
			return b;
		},
		Fb = function(a, b, c) {
			a.a || (a.a = {});
			c = c || [];
			for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].h;
			a.a[b] = c;
			Db(a, b, d);
		};
	C.prototype.i = yb
		? function() {
				var a = Uint8Array.prototype.toJSON;
				Uint8Array.prototype.toJSON = function() {
					var b;
					void 0 === b && (b = 0);
					if (!xb) {
						xb = {};
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
							wb[e] = f;
							for (var g = 0; g < f.length; g++) {
								var k = f[g];
								void 0 === xb[k] && (xb[k] = g);
							}
						}
					}
					b = wb[b];
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
					return JSON.stringify(this.h && this.h, Gb);
				} finally {
					Uint8Array.prototype.toJSON = a;
				}
		  }
		: function() {
				return JSON.stringify(this.h && this.h, Gb);
		  };
	var Gb = function(a, b) {
		return "number" !== typeof b ||
			(!isNaN(b) && Infinity !== b && -Infinity !== b)
			? b
			: String(b);
	};
	var Hb = function(a) {
		D(this, a, null, null);
	};
	p(Hb, C);
	var Ib = function(a) {
		this.a = a || h.document || document;
	};
	Ib.prototype.createElement = function(a) {
		var b = this.a;
		a = String(a);
		"application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
		return b.createElement(a);
	};
	Ib.prototype.appendChild = function(a, b) {
		a.appendChild(b);
	};
	var Kb = function(a) {
			Jb();
			return new x(Ja, a);
		},
		Jb = ya;
	var Lb = function() {
		return (
			-1 != z.indexOf("iPad") ||
			(-1 != z.indexOf("Android") && -1 == z.indexOf("Mobile")) ||
			-1 != z.indexOf("Silk")
		);
	};
	var Mb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
	var Qb = function(a, b) {
			if (!Nb() && !Ob()) {
				var c = Math.random();
				if (c < b) return (c = Pb(h)), a[Math.floor(c * a.length)];
			}
			return null;
		},
		Pb = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		Rb = function(a, b) {
			if (a)
				for (var c in a)
					Object.prototype.hasOwnProperty.call(a, c) &&
						b.call(void 0, a[c], c, a);
		},
		Ob = u(function() {
			return (
				Array.prototype.some.call(
					[
						"Google Web Preview",
						"Mediapartners-Google",
						"Google-Read-Aloud",
						"Google-Adwords"
					],
					Sb,
					void 0
				) || 1e-4 > Math.random()
			);
		}),
		Nb = u(function() {
			return Sb("MSIE");
		}),
		Sb = function(a) {
			return -1 != z.indexOf(a);
		},
		Tb = /^(-?[0-9.]{1,30})$/,
		Ub = function(a, b) {
			return Tb.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		Vb = function() {
			try {
				return va();
			} catch (a) {}
		},
		Wb = u(function() {
			return Lb() ||
				(-1 == z.indexOf("iPod") &&
					-1 == z.indexOf("iPhone") &&
					-1 == z.indexOf("Android") &&
					-1 == z.indexOf("IEMobile"))
				? Lb()
					? 1
					: 0
				: 2;
		}),
		Xb = function() {
			var a = void 0 === a ? window : a;
			if ((a = (a = a.location.href.match(Mb)[3] || null) ? decodeURI(a) : a)) {
				var b = a.length;
				if (0 == b) a = 0;
				else {
					for (var c = 305419896, d = 0; d < b; d++)
						c ^= ((c << 5) + (c >> 2) + a.charCodeAt(d)) & 4294967295;
					a = 0 < c ? c : 4294967296 + c;
				}
			} else a = null;
			return a;
		};
	var Yb = function() {};
	var Zb = function(a, b) {
			a.google_image_requests || (a.google_image_requests = []);
			var c = a.document.createElement("img");
			c.src = b;
			a.google_image_requests.push(c);
		},
		ac = function(a) {
			var b =
				"https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_dupeid";
			Rb(a, function(c, d) {
				c && (b += "&" + d + "=" + encodeURIComponent(c));
			});
			$b(b);
		},
		$b = function(a) {
			var b = window;
			b.fetch
				? b.fetch(a, {
						keepalive: !0,
						credentials: "include",
						redirect: "follow",
						method: "get",
						mode: "no-cors"
				  })
				: Zb(b, a);
		};
	var bc = function(a, b, c, d, e, f) {
		try {
			var g = a.a,
				k = a.createElement("SCRIPT");
			k.async = !0;
			ub(k, b);
			g.head.appendChild(k);
			k.addEventListener("load", function() {
				e();
				d && g.head.removeChild(k);
			});
			k.addEventListener("error", function() {
				0 < c ? bc(a, b, c - 1, d, e, f) : (d && g.head.removeChild(k), f());
			});
		} catch (m) {
			f();
		}
	};
	var cc = function(a, b) {
		this.a = a;
		this.b = a.document;
		this.c = (a = this.a)
			? new Ib(9 == a.nodeType ? a : a.ownerDocument || a.document)
			: Ca || (Ca = new Ib());
		this.g = b;
	};
	cc.prototype.start = function() {
		try {
			dc(this), ec(this);
		} catch (a) {}
	};
	var dc = function(a) {
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
		ec = function(a) {
			var b = Oa({ id: a.g, ers: 3 });
			bc(a.c, b, 0, !1, function() {}, function() {});
		};
	var fc = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var gc = null,
		hc = function() {
			if (null === gc) {
				gc = "";
				try {
					var a = "";
					try {
						a = h.top.location.hash;
					} catch (c) {
						a = h.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						gc = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return gc;
		};
	var J = function(a) {
		D(this, a, ic, jc);
	};
	p(J, C);
	var ic = [2, 8],
		jc = [[3, 4, 5], [6, 7]];
	var kc = function(a) {
			return null != a ? !a : a;
		},
		lc = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		nc = function(a, b) {
			var c = I(a, J, 2);
			if (!c.length) return mc(a, b);
			a = G(a, 1, 0);
			if (1 == a) return kc(nc(c[0], b));
			c = r(c, function(d) {
				return function() {
					return nc(d, b);
				};
			});
			switch (a) {
				case 2:
					return lc(c, !1);
				case 3:
					return lc(c, !0);
			}
		},
		mc = function(a, b) {
			var c = Bb(a, jc[0]);
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
								a = Cb(a, 6);
								break a;
							case 5:
								a = G(a, 7, "");
								break a;
						}
						a = void 0;
					}
				if (null != a) {
					if (6 == b) return e === a;
					if (9 == b) return 0 == ab(e, a);
					if (d)
						switch (b) {
							case 7:
								return e < a;
							case 8:
								return e > a;
							case 12:
								return new RegExp(a).test(e);
							case 10:
								return -1 == ab(e, a);
							case 11:
								return 1 == ab(e, a);
						}
				}
			}
		},
		oc = function(a, b) {
			return !a || !(!b || !nc(a, b));
		};
	var qc = function(a) {
		D(this, a, pc, null);
	};
	p(qc, C);
	var pc = [4];
	var K = function(a) {
		D(this, a, rc, sc);
	};
	p(K, C);
	var tc = function(a) {
		D(this, a, null, null);
	};
	p(tc, C);
	var rc = [5],
		sc = [[1, 2, 3, 6, 7]];
	var L = function() {
		var a = {};
		this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
	};
	l(L);
	var uc = /^true$/.test("false");
	var vc = uc,
		wc = function(a, b) {
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
		xc = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return (a = F(a, 1)), (a = null == a ? a : !!a), null == a ? !1 : a;
				case 7:
					return G(a, 3, "");
				case 2:
					return Cb(a, 2);
				case 3:
					return G(a, 3, "");
				case 6:
					return F(a, 4);
				default:
					return null;
			}
		},
		yc = u(function() {
			if (!vc) return {};
			try {
				var a =
					window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
				if (a) return JSON.parse(a);
			} catch (b) {}
			return {};
		}),
		Bc = function(a, b, c, d) {
			d = void 0 === d ? 0 : d;
			var e = yc();
			if (e[a] && null != e[a][b]) return e[a][b];
			b = zc(d)[a][b];
			if (!b) return c;
			b = new K(b);
			b = Ac(b);
			a = xc(b, a);
			return null != a ? a : c;
		},
		Ac = function(a) {
			var b = L.f().a;
			if (b) {
				var c = Fa(I(a, tc, 5), function(d) {
					return oc(H(d, J, 1), b);
				});
				if (c) return H(c, qc, 2);
			}
			return H(a, qc, 4);
		},
		Cc = function() {
			this.a = {};
			this.b = [];
		};
	l(Cc);
	var Dc = function(a, b, c) {
			return !!Bc(1, a, void 0 === b ? !1 : b, c);
		},
		Ec = function(a, b, c) {
			b = void 0 === b ? 0 : b;
			a = Number(Bc(2, a, b, c));
			return isNaN(a) ? b : a;
		},
		Fc = function(a, b, c) {
			return Bc(3, a, void 0 === b ? "" : b, c);
		},
		Gc = function(a, b, c) {
			b = void 0 === b ? [] : b;
			return Bc(6, a, b, c);
		},
		zc = function(a) {
			var b = {};
			return (
				Cc.f().a[a] ||
				(Cc.f().a[a] = ((b[1] = {}), (b[2] = {}), (b[3] = {}), (b[6] = {}), b))
			);
		},
		Hc = function(a, b) {
			var c = zc(b);
			Rb(a, function(d, e) {
				return Rb(d, function(f, g) {
					return (c[e][g] = f);
				});
			});
		},
		Ic = function(a, b) {
			var c = zc(b);
			q(a, function(d) {
				var e = Bb(d, sc[0]),
					f = wc(d, e);
				f && (c[e][f] = d.h);
			});
		},
		Jc = function(a, b) {
			var c = zc(b);
			q(a, function(d) {
				var e = new K(d),
					f = Bb(e, sc[0]);
				(e = wc(e, f)) && (c[f][e] || (c[f][e] = d));
			});
		},
		Kc = function() {
			return r(Object.keys(Cc.f().a), function(a) {
				return Number(a);
			});
		},
		Lc = function(a) {
			t(Cc.f().b, a) || Hc(zc(4), a);
		};
	var M = function(a) {
			this.methodName = a;
		},
		Mc = new M(1),
		Nc = new M(15),
		Oc = new M(2),
		Pc = new M(3),
		Qc = new M(4),
		Rc = new M(5),
		Sc = new M(6),
		Tc = new M(7),
		Uc = new M(8),
		Vc = new M(9),
		Wc = new M(10),
		Xc = new M(11),
		Yc = new M(12),
		Zc = new M(13),
		$c = new M(14),
		N = function(a, b, c) {
			c.hasOwnProperty(a.methodName) ||
				Object.defineProperty(c, String(a.methodName), { value: b });
		},
		O = function(a, b, c) {
			return b[a.methodName] || c || function() {};
		},
		ad = function(a) {
			N(Rc, Dc, a);
			N(Sc, Ec, a);
			N(Tc, Fc, a);
			N(Uc, Gc, a);
			N(Zc, Jc, a);
			N(Nc, Lc, a);
		},
		bd = function(a) {
			N(
				Qc,
				function(b) {
					L.f().a = b;
				},
				a
			);
			N(
				Vc,
				function(b, c) {
					var d = L.f();
					d.a[3][b] || (d.a[3][b] = c);
				},
				a
			);
			N(
				Wc,
				function(b, c) {
					var d = L.f();
					d.a[4][b] || (d.a[4][b] = c);
				},
				a
			);
			N(
				Xc,
				function(b, c) {
					var d = L.f();
					d.a[5][b] || (d.a[5][b] = c);
				},
				a
			);
			N(
				$c,
				function(b) {
					for (
						var c = L.f(), d = ka([3, 4, 5]), e = d.next();
						!e.done;
						e = d.next()
					)
						(e = e.value), Ba(c.a[e], b[e]);
				},
				a
			);
		},
		cd = function(a) {
			a.hasOwnProperty("init-done") ||
				Object.defineProperty(a, "init-done", { value: !0 });
		};
	var P = function() {
			this.a = function() {};
			this.b = function() {
				return [];
			};
		},
		dd = function(a, b, c) {
			a.a = function(d) {
				O(Oc, b, function() {
					return [];
				})(d, c);
			};
			a.b = function() {
				return O(Pc, b, function() {
					return [];
				})(c);
			};
		};
	l(P);
	var ed = function(a, b) {
			try {
				var c = xa(a),
					d = "function" === typeof c ? c() : c;
				if (typeof d === b) return d;
			} catch (e) {}
		},
		fd = function() {
			var a = {};
			this[3] = ((a[8] = function(b) {
				try {
					return null != xa(b);
				} catch (c) {}
			}),
			(a[9] = function(b) {
				try {
					var c = xa(b);
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
				return t(P.f().b(), parseInt(b, 10));
			}),
			(a[27] = function(b) {
				b = ed(b, "boolean");
				return void 0 !== b ? b : void 0;
			}),
			a);
			a = {};
			this[4] = ((a[3] = function() {
				return Wb();
			}),
			(a[6] = function(b) {
				b = ed(b, "number");
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
				b = ed(b, "string");
				return void 0 !== b ? b : void 0;
			}),
			a);
		};
	l(fd);
	var gd = function() {
		var a = void 0 === a ? h : a;
		return a.ggeac || (a.ggeac = {});
	};
	var id = function(a) {
		D(this, a, hd, null);
	};
	p(id, C);
	var hd = [2];
	id.prototype.getId = function() {
		return G(this, 1, 0);
	};
	id.prototype.m = function() {
		return G(this, 7, 0);
	};
	var kd = function(a) {
		D(this, a, jd, null);
	};
	p(kd, C);
	var jd = [2];
	kd.prototype.m = function() {
		return G(this, 5, 0);
	};
	var md = function(a) {
		D(this, a, ld, null);
	};
	p(md, C);
	var Q = function(a) {
		D(this, a, nd, null);
	};
	p(Q, C);
	var ld = [1, 4, 2, 3],
		nd = [2];
	Q.prototype.m = function() {
		return G(this, 1, 0);
	};
	var od = [12, 13],
		pd = function() {},
		qd = function(a, b, c, d) {
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
			(c = hc()) &&
				q(c.split(",") || [], function(g) {
					(g = parseInt(g, 10)) && (a.c[g] = !0);
				});
			return a;
		},
		vd = function(a, b, c) {
			var d = [],
				e = rd(a.a, b);
			if (e.length) {
				9 !== b && (a.a = sd(a.a, b));
				var f = t(od, b);
				q(e, function(g) {
					if ((g = td(a, g, c))) {
						var k = g.getId();
						d.push(k);
						ud(a, k, f ? 4 : c);
						var m = I(g, K, 2);
						m &&
							(f
								? q(Kc(), function(B) {
										return Ic(m, B);
								  })
								: Ic(m, c));
					}
				});
			}
			return d;
		},
		ud = function(a, b, c) {
			a.b[c] || (a.b[c] = []);
			a = a.b[c];
			t(a, b) ? ac({ eids: JSON.stringify(a), dup: b }) : a.push(b);
		},
		wd = function(a, b) {
			a.a.push.apply(
				a.a,
				la(
					Da(
						r(b, function(c) {
							return new Q(c);
						}),
						function(c) {
							return !t(od, c.m());
						}
					)
				)
			);
		},
		td = function(a, b, c) {
			var d = L.f().a;
			if (!oc(H(b, J, 3), d)) return null;
			var e = I(b, id, 2),
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
				null === f && (f = Math.floor(1e3 * Pb(window)));
				b = xd(b, f);
				return !b || (d && !oc(H(b, J, 3), d)) ? null : yd(a, [b], 1);
			}
			g = d
				? Da(e, function(m) {
						return oc(H(m, J, 3), d);
				  })
				: e;
			return g.length
				? (b = G(b, 4, 0))
					? zd(a, b, f, g)
					: yd(a, g, f / 1e3)
				: null;
		},
		zd = function(a, b, c, d) {
			var e = null != a.g[b] ? a.g[b] : 1e3;
			if (0 >= e) return null;
			d = yd(a, d, c / e);
			a.g[b] = d ? 0 : e - c;
			return d;
		},
		yd = function(a, b, c) {
			var d = a.c,
				e = Ea(b, function(f) {
					return !!d[f.getId()];
				});
			return e ? e : a.i ? null : Qb(b, c);
		},
		Ad = function(a, b) {
			N(
				Mc,
				function(c) {
					a.c[c] = !0;
				},
				b
			);
			N(
				Oc,
				function(c, d) {
					return vd(a, c, d);
				},
				b
			);
			N(
				Pc,
				function(c) {
					return (a.b[c] || []).concat(a.b[4]);
				},
				b
			);
			N(
				Yc,
				function(c) {
					return wd(a, c);
				},
				b
			);
		};
	l(pd);
	var rd = function(a, b) {
			return (
				((a = Ea(a, function(c) {
					return c.m() == b;
				})) &&
					I(a, kd, 2)) ||
				[]
			);
		},
		sd = function(a, b) {
			return Da(a, function(c) {
				return c.m() != b;
			});
		},
		xd = function(a, b) {
			var c = I(a, id, 2),
				d = c.length,
				e = G(a, 1, 0);
			a = G(a, 8, 0);
			var f = (b - a) % d;
			return b < a || b - a - f >= d * e - 1 ? null : c[f];
		};
	var Bd = function() {
			this.b = function(a, b) {
				return void 0 === b ? !1 : b;
			};
			this.c = function(a, b) {
				return void 0 === b ? 0 : b;
			};
			this.a = function() {};
		},
		Cd = function(a, b, c) {
			a.b = function(d, e) {
				return O(Rc, b)(d, e, c);
			};
			a.c = function(d, e) {
				return O(Sc, b)(d, e, c);
			};
			a.a = function() {
				O(Nc, b)(c);
			};
		};
	l(Bd);
	var R = function(a) {
		var b = void 0 === b ? !1 : b;
		return Bd.f().b(a, b);
	};
	var Dd = function() {
		this.a = function() {};
	};
	l(Dd);
	var Ed = function(a) {
		Dd.f().a(a);
	};
	var Hd = function(a) {
			var b = Fd.f(),
				c = { I: S(211), L: S(227), R: S(226) },
				d = void 0,
				e = 2;
			d = void 0 === d ? gd() : d;
			e = void 0 === e ? 0 : e;
			d.hasOwnProperty("init-done")
				? (O(Yc, d)(
						r(I(a, Q, 2), function(f) {
							return f.h;
						})
				  ),
				  O(Zc, d)(
						r(I(a, K, 1), function(f) {
							return f.h;
						}),
						e
				  ),
				  b && O($c, d)(b),
				  Gd(d, e))
				: (Ad(qd(pd.f(), I(a, Q, 2), e, c), d),
				  ad(d),
				  bd(d),
				  cd(d),
				  Gd(d, e),
				  Ic(I(a, K, 1), e),
				  (vc = vc || !(!c || !c.W)),
				  Ed(fd.f()),
				  b && Ed(b));
		},
		Gd = function(a, b) {
			a = void 0 === a ? gd() : a;
			b = void 0 === b ? 0 : b;
			var c = a,
				d = b;
			d = void 0 === d ? 0 : d;
			dd(P.f(), c, d);
			c = a;
			b = void 0 === b ? 0 : b;
			Cd(Bd.f(), c, b);
			Dd.f().a = O($c, a);
			Bd.f().a();
		};
	var Id = function(a, b, c) {
		var d = "script";
		d = void 0 === d ? "" : d;
		var e = a.createElement("link");
		try {
			e.rel = "preload";
			if (b instanceof x) var f = La(b).toString();
			else {
				if (b instanceof y) var g = db(b);
				else {
					if (b instanceof y) var k = b;
					else
						(b = "object" == typeof b && b.j ? b.a() : String(b)),
							eb.test(b) || (b = "about:invalid#zClosurez"),
							(k = new y(bb, b));
					g = db(k);
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
	var Jd = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Kd = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		Ld = function(a) {
			return Jd.test(a) && !Kd.test(a);
		},
		Md = function(a) {
			return a.replace(/[\W]/g, function(b) {
				return "&#" + b.charCodeAt() + ";";
			});
		},
		T = h,
		Nd = function(a, b) {
			a = "https://adservice" + (b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(h.location.hostname)];
			U[3] >= n() && b.push("adsid=" + encodeURIComponent(U[1]));
			return a + "?" + b.join("&");
		},
		U,
		V,
		Od = function() {
			T = h;
			U = T.googleToken = T.googleToken || {};
			var a = n();
			(U[1] && U[3] > a && 0 < U[2]) ||
				((U[1] = ""), (U[2] = -1), (U[3] = -1), (U[4] = ""), (U[6] = ""));
			V = T.googleIMState = T.googleIMState || {};
			Ld(V[1]) || (V[1] = ".google.com");
			Array.isArray(V[5]) || (V[5] = []);
			"boolean" !== typeof V[6] && (V[6] = !1);
			Array.isArray(V[7]) || (V[7] = []);
			"number" !== typeof V[8] && (V[8] = 0);
		},
		Pd = function(a) {
			try {
				a();
			} catch (b) {
				h.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		Rd = function(a) {
			"complete" == h.document.readyState ||
			"loaded" == h.document.readyState ||
			(h.document.currentScript && h.document.currentScript.async)
				? Qd(3)
				: a();
		},
		Sd = 0,
		Td = {
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
			H: Pd
		},
		Ud = {
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
				return ".google.com" != V[1] && 2 < ++Sd;
			},
			J: function() {
				return V[7];
			},
			H: function(a) {
				Rd(function() {
					Pd(a);
				});
			}
		},
		Qd = function(a) {
			1e-5 > Math.random() &&
				Zb(
					h,
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
						a
				);
		};
	Td.s = function() {
		if (!Td.o()) {
			var a = h.document,
				b = function(e) {
					e = Nd("js", e);
					var f = Vb();
					Id(a, e, f);
					f = a.createElement("script");
					f.type = "text/javascript";
					f.onerror = function() {
						return h.processGoogleToken({}, 2);
					};
					e = Kb(e);
					ub(f, e);
					try {
						(a.head || a.body || a.documentElement).appendChild(f), Td.C();
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
	Ud.s = function() {
		if (!Ud.o()) {
			var a = h.document,
				b = Nd("sync.js", V[1]),
				c = Vb();
			Id(a, b, c);
			b = Md(b);
			var d = vb("script"),
				e = "";
			c && (e = 'nonce="' + Md(c) + '"');
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
			Rd(function() {
				a.write(f);
				Ud.C();
			});
		}
	};
	var Vd = function(a) {
			Od();
			(U[3] >= n() && U[2] >= n()) || a.s();
		},
		Xd = function() {
			h.processGoogleToken =
				h.processGoogleToken ||
				function(a, b) {
					return Wd(Td, a, b);
				};
			Vd(Td);
		},
		Yd = function() {
			h.processGoogleTokenSync =
				h.processGoogleTokenSync ||
				function(a, b) {
					return Wd(Ud, a, b);
				};
			Vd(Ud);
		},
		Wd = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				g = parseInt(b.validLifetimeSecs || "", 10),
				k = b["1p_jar"] || "";
			b = b.pucrd || "";
			Od();
			1 == c ? a.O() : a.N();
			if (!d && a.S()) Ld(".google.com") && (V[1] = ".google.com"), a.s();
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
				e = e && !a.o() && (!(U[3] >= n()) || "NT" == U[1]);
				var je = !(U[3] >= n()) && 0 != c;
				if (B || e || je)
					(e = n()),
						(f = e + 1e3 * f),
						(g = e + 1e3 * g),
						Qd(c),
						(m[5] = c),
						(m[1] = d),
						(m[2] = f),
						(m[3] = g),
						(m[4] = k),
						(m[6] = b),
						Od();
				if (B || !a.o()) {
					c = a.J();
					for (d = 0; d < c.length; d++) a.H(c[d]);
					c.length = 0;
				}
			}
		};
	var Zd = function(a) {
		a = void 0 === a ? h : a;
		return (a = a.performance) && a.now ? a.now() : null;
	};
	var W = h.performance,
		$d = !!(W && W.mark && W.measure && W.clearMarks),
		ae = u(function() {
			var a;
			if ((a = $d)) (a = hc()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
			return a;
		});
	var be = function(a, b, c) {
			this.a = void 0 === a ? null : a;
			this.g = void 0 === b ? "jserror" : b;
			this.b = null;
			this.c = void 0 === c ? 0.01 : c;
			this.l = this.i;
		},
		ce = function(a, b) {
			a.b = b;
		};
	be.prototype.i = function(a, b, c, d, e) {
		c = void 0 === c ? this.c : c;
		e = void 0 === e ? this.g : e;
		if (Math.random() > c) return !1;
		(b.error && b.meta && b.id) || (b = new fc(b, { context: a, id: e }));
		if (d || this.b) (b.meta = {}), this.b && this.b(b.meta), d && d(b.meta);
		h.google_js_errors = h.google_js_errors || [];
		h.google_js_errors.push(b);
		h.error_rep_loaded ||
			((b = h.document),
			(a = b.createElement("script")),
			ub(
				a,
				Kb(
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
	var de = function(a, b) {
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
					ae() &&
					(W.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
					W.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
				!a.l(420, d, a.c, void 0, a.g))
			)
				throw d;
		}
	};
	var ee = new w(v, "gpt/pubads_impl_"),
		fe = new w(v, "https://securepubads.g.doubleclick.net/");
	var ge = function(a) {
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
	var he = function(a) {
			var b = Zd(a);
			b &&
				((b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				2048 > a.length && a.push(b));
		},
		ie = function(a, b, c) {
			var d = window;
			return function() {
				var e = Zd(),
					f = 3;
				try {
					var g = b.apply(this, arguments);
				} catch (m) {
					f = 13;
					if (c) return c(a, m), g;
					throw m;
				} finally {
					if (d.google_measure_js_timing && e) {
						var k = Zd() || 0;
						e = { label: a.toString(), value: e, duration: k - e, type: f };
						f = d.google_js_reporting_queue = d.google_js_reporting_queue || [];
						2048 > f.length && f.push(e);
					}
				}
				return g;
			};
		},
		ke = function(a, b) {
			return ie(a, b, function(c, d) {
				new be().i(c, d);
			});
		};
	function X(a, b) {
		return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
	}
	var me = function() {
		var a = this;
		this.K = this.U = this.u = this.l = this.g = 0;
		this.M = !1;
		this.B = this.i = this.c = 0;
		this.P = 0.1 > Math.random();
		this.T = h === h.top;
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
		this.F = b;
		this.P &&
			((b =
				"https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics" +
				(this.a ? "&qqid=" + encodeURIComponent(this.a) : X("pvsid", this.F))),
			(b += X("test", 1)),
			(b += "&top=" + (this.T ? 1 : 0)),
			le(b));
		this.D = new PerformanceObserver(
			ke(640, function(c) {
				c = ka(c.getEntries());
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
		this.b = ke(641, this.b.bind(this));
	};
	sa(me, Yb);
	var ne = function() {
		var a = new me();
		a.D.observe({
			entryTypes: [
				"layout-shift",
				"largest-contentful-paint",
				"first-input",
				"longtask"
			],
			buffered: !R(240)
		});
		document.addEventListener("unload", a.b);
		document.addEventListener("visibilitychange", a.b);
	};
	me.prototype.b = function() {
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
			this.D.takeRecords();
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
			a += X("nif", b);
			b = window.google_unique_id;
			a += X("ifi", "number" === typeof b ? b : 0);
			b = P.f().b();
			a += "&eid=" + encodeURIComponent(b.join());
			this.P && (a += X("test", 1));
			a += "&top=" + (this.T ? 1 : 0);
			a += this.a ? "&qqid=" + encodeURIComponent(this.a) : X("pvsid", this.F);
			le(a);
		}
	};
	function le(a) {
		window.fetch(a, {
			keepalive: !0,
			credentials: "include",
			redirect: "follow",
			method: "get",
			mode: "no-cors"
		});
	}
	var oe = ["https://adservice.google.com"],
		pe = function(a) {
			this.c = oe;
			this.a = 2;
			this.b = a;
		};
	sa(pe, Yb);
	var qe = function(a) {
		!document.hasTrustToken ||
			3 <= a.a ||
			((a.a = 3),
			q(a.c, function(b) {
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
						c && "NoModificationAllowedError" === c.name
							? ((a.a = 5), a.b({ issuer: b, state: 5 }))
							: 4 > a.a && a.b({ issuer: null, state: 4 });
					});
			}));
	};
	var re = [
			"platform",
			"platformVersion",
			"architecture",
			"model",
			"uaFullVersion"
		],
		se = function(a) {
			return a.navigator &&
				a.navigator.userAgentData &&
				"function" === typeof a.navigator.userAgentData.getHighEntropyValues
				? a.navigator.userAgentData.getHighEntropyValues(re).then(function(b) {
						var c = new Hb();
						c = Eb(c, 1, b.platform);
						c = Eb(c, 2, b.platformVersion);
						c = Eb(c, 3, b.architecture);
						c = Eb(c, 4, b.model);
						return Eb(c, 5, b.uaFullVersion);
				  })
				: null;
		};
	var te = function() {
			return h.googletag || (h.googletag = {});
		},
		ue = function(a, b) {
			var c = te();
			c.hasOwnProperty(a) || (c[a] = b);
		},
		ve = function(a, b) {
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
	Y[148] = uc;
	Y[221] = /^true$/.test("");
	Y[204] = Ub("{{MOD}}", -1);
	var Z = function() {
		Ba(this, Y);
	};
	l(Z);
	var S = function(a) {
			return Z.f()[a];
		},
		we = te(),
		xe = Z.f();
	Ba(xe, we._vars_);
	we._vars_ = xe;
	var ye = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var ze = (function(a, b) {
			var c = b || ye;
			return function() {
				var d = this || h;
				d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
				var e =
					(Object.prototype.hasOwnProperty.call(a, za) && a[za]) ||
					(a[za] = ++Aa);
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
		Ae = function() {
			return 0 === ze(S(172));
		};
	var Be = function() {
		return Ub("7") || 0;
	};
	ue("getVersion", function() {
		return "2020062902";
	});
	var Fd = function() {
		var a = {};
		this[3] = ((a[3] = Ae),
		(a[2] = S(36)),
		(a[17] = function(b) {
			for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
			return ia(c, "includes").call(c, String(Xb()));
		}),
		(a[21] = function() {
			return S(148);
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return S(204);
		}),
		(a[4] = Be),
		a);
		this[5] = {};
	};
	l(Fd);
	var Ce = [],
		De = function(a) {
			var b = new md(S(246));
			a = new md(a || Ce);
			if (!I(b, K, 1).length && I(a, K, 1).length) {
				var c = I(a, K, 1);
				Fb(b, 1, c);
			}
			!I(b, Q, 2).length &&
				I(a, Q, 2).length &&
				((a = I(a, Q, 2)), Fb(b, 2, a));
			Hd(b);
		};
	var Ee = function(a) {
			if ((a = a.scripts))
				for (var b = 0; b < a.length; b++) {
					var c = a[b];
					if (-1 < c.src.indexOf("/tag/js/gpt")) return c;
				}
			return null;
		},
		Fe = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		Ge = function() {
			var a = [fe, ee, new w(v, "2020062902"), new w(v, ".js")];
			for (var b = "", c = 0; c < a.length; c++) b += Ia(a[c]);
			a = new x(Ja, b);
			var d = void 0 === d ? 0 : d;
			(d = Bd.f().c(24, d))
				? ((d = String(d)),
				  (a = Pa.exec(La(a).toString())),
				  (b = a[3] || ""),
				  (d = new x(Ja, a[1] + Qa("?", a[2] || "", d) + Qa("#", b, void 0))))
				: (d = a);
			return d;
		},
		He = function(a, b, c) {
			a = a.currentScript || Ee(a);
			Z.f()[172] = a;
			new De(b);
			P.f().a(12);
			P.f().a(5);
			R(200) || R(220) || ((b = S(150)), Od(), Ld(b) && (V[1] = b));
			R(312) &&
				qe(
					new pe(function(d) {
						Z.f()[250] = d;
					})
				);
			R(363) &&
				(b = se(c)) &&
				b.then(function(d) {
					d = d.i();
					Z.f()[251] = d;
				});
			b = "";
			R(349) &&
				a &&
				a.hasAttribute("data-load-fc") &&
				(b = a.getAttribute("data-network-id")) &&
				new cc(c, b).start();
		},
		Ie = function(a, b, c) {
			var d = te();
			a = a || d.fifWin || window;
			b = b || a.document;
			var e = d.fifWin ? window : a;
			ue("cmd", []);
			if (d.evalScripts) d.evalScripts();
			else {
				He(b, c, a);
				try {
					a.PerformanceObserver &&
						(a.PerformanceLongTaskTiming && ge(a),
						R(203) &&
							!window.google_plmetrics &&
							(ne(), (window.google_plmetrics = !0)));
				} catch (m) {}
				R(339) && (Z.f()[249] = !0);
				he(a);
				a = Ge();
				c = R(200) || R(239);
				if (Fe(b)) {
					var f = "gpt-impl-" + Math.random();
					try {
						tb(b, pb(a, { id: f, nonce: va() }));
					} catch (m) {}
					b.getElementById(f) && ((d._loadStarted_ = !0), c || Yd());
				}
				if (!d._loadStarted_) {
					c || Xd();
					b = d.fifWin ? e.document : b;
					var g = b.createElement("script");
					ub(g, a);
					g.async = !0;
					var k = b.head || b.body || b.documentElement;
					"complete" !== e.document.readyState && d.fifWin
						? ve(e, function() {
								return void k.appendChild(g);
						  })
						: k.appendChild(g);
					d._loadStarted_ = !0;
				}
			}
		};
	var Je;
	a: {
		try {
			if (Array.isArray(E)) {
				Je = E;
				break a;
			}
		} catch (a) {}
		Je = [];
	}
	(function(a, b, c) {
		var d = new be(null, "gpt_exception", 0.01);
		ce(d, function(e) {
			e.methodId = 420;
		});
		de(d, function() {
			return Ie(a, b, c);
		});
	})(void 0, void 0, Je);
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
	[
		[289, null, null, [1]],
		[351, null, null, [1]],
		[null, 7, null, [null, 0.1]],
		[347, null, null, [1]],
		[322, null, null, [1]],
		[20, null, null, null, [[[1, [[4, null, 1]]], [1]]]],
		[null, 358, null, [null, 2]],
		[252, null, null, [1]],
		[293, null, null, [1]],
		[333, null, null, [1]],
		[275, null, null, [1]],
		[
			274,
			null,
			null,
			null,
			[
				[
					[
						3,
						[
							[4, null, 15, null, null, null, null, ["479"]],
							[4, null, 15, null, null, null, null, ["44520695"]],
							[4, null, 15, null, null, null, null, ["31695825"]],
							[4, null, 15, null, null, null, null, ["70801804"]],
							[4, null, 15, null, null, null, null, ["154013155"]],
							[4, null, 15, null, null, null, null, ["366560878"]],
							[4, null, 15, null, null, null, null, ["169657134"]],
							[4, null, 15, null, null, null, null, ["21709104563"]],
							[4, null, 15, null, null, null, null, ["120157152"]],
							[4, null, 15, null, null, null, null, ["1018282"]],
							[4, null, 15, null, null, null, null, ["43863810"]],
							[4, null, 15, null, null, null, null, ["89844762"]],
							[4, null, 15, null, null, null, null, ["21715515940"]],
							[4, null, 15, null, null, null, null, ["4444"]],
							[4, null, 15, null, null, null, null, ["139364342"]],
							[4, null, 15, null, null, null, null, ["241667871"]],
							[4, null, 15, null, null, null, null, ["6783"]],
							[4, null, 15, null, null, null, null, ["103997693"]],
							[4, null, 15, null, null, null, null, ["1010633"]],
							[4, null, 15, null, null, null, null, ["42159803"]],
							[4, null, 15, null, null, null, null, ["7190"]],
							[4, null, 15, null, null, null, null, ["4288"]],
							[4, null, 15, null, null, null, null, ["21643048729"]],
							[4, null, 15, null, null, null, null, ["23328537"]],
							[4, null, 15, null, null, null, null, ["83058232"]],
							[4, null, 15, null, null, null, null, ["144148308"]],
							[4, null, 15, null, null, null, null, ["108347105"]],
							[4, null, 15, null, null, null, null, ["219305991"]],
							[4, null, 15, null, null, null, null, ["128139881"]],
							[4, null, 15, null, null, null, null, ["121124594"]],
							[4, null, 15, null, null, null, null, ["4282"]],
							[4, null, 15, null, null, null, null, ["27415282"]],
							[4, null, 15, null, null, null, null, ["4900"]],
							[4, null, 15, null, null, null, null, ["3048"]],
							[4, null, 15, null, null, null, null, ["8695"]],
							[4, null, 15, null, null, null, null, ["21703060983"]]
						]
					],
					[1]
				]
			]
		],
		[258, null, null, [1]],
		[74, null, null, [1]],
		[198, null, null, [1]],
		[326, null, null, [1]],
		[null, 8, null, [null, -1]],
		[
			237,
			null,
			null,
			null,
			[[[4, null, 8, null, null, null, null, ["googletag.fifWin"]], [1]]]
		],
		[null, 28, null, [null, 0.01]],
		[null, 51, null, [null, 1000]],
		[139, null, null, [1]],
		[298, null, null, [1]],
		[89, null, null, [1]],
		[null, null, 2, [null, null, "1-0-37"]],
		[340, null, null, [1]],
		[362, null, null, [1]],
		[215, null, null, [1]],
		[null, 39, null, [null, 72]],
		[null, 38, null, [null, 24]],
		[null, 40, null, [null, 5]],
		[null, 33, null, [null, 250]],
		[269, null, null, [1]],
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
				[
					10,
					[
						[21063671],
						[21063817],
						[21063818],
						[21063910],
						[21063911],
						[21066299]
					]
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
				[null, [[21065803], [21065804, [[329, null, null, [1]]]]]],
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
				[50, [[21065975], [21065976, [[319, null, null, [1]]]]]],
				[10, [[21066039], [21066040]]],
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
				[50, [[21066340], [21066342, [[296, null, null, [1]]]]], null, 20],
				[100, [[21066350], [21066351, [[351, null, null, [1]]]]]],
				[null, [[21066370], [21066371, [[355, null, null, [1]]]]]],
				[10, [[21066375], [21066376, [[352, null, null, [1]]]]]],
				[100, [[21066436], [21066437, [[358, null, null, [1]]]]]],
				[
					25,
					[
						[21066462],
						[21066463, [[null, 59, null, [null, 3]]]],
						[21066464, [[null, 59, null, [null, 3]]]]
					]
				],
				[
					1,
					[
						[21066560],
						[21066561, [[364, null, null, [1]], [352, null, null, [1]]]]
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
				[null, [[21066031], [21066032, [[239, null, null, [1]]]]], null, 24],
				[10, [[21066272], [21066273, [[339, null, null, [1]]]]]],
				[1, [[21066334], [21066335, [[342, null, null, [1]]]]]],
				[1, [[21066390], [21066391, [[346, null, null, [1]]]]]],
				[
					10,
					[
						[21066447],
						[21066448, [[360, null, null, [1]]]],
						[21066449, [[361, null, null, [1]]]]
					]
				],
				[10, [[21066465], [21066466, [[302, null, null, [1]]]]]],
				[1, [[21066602], [21066603, [[354, null, null, [1]]]]]],
				[null, [[21066606], [21066607, [[372, null, null, [1]]]]]],
				[
					1000,
					[
						[
							21066610,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066610]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066610]]
							],
							[6, null, null, 4, null, 4]
						],
						[
							21066611,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066611]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066611]]
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
							21066627,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066627]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066627]]
							],
							[6, null, null, 4, null, 2]
						],
						[
							21066628,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066628]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066628]]
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
							21066629,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066629]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066629]]
							],
							[6, null, null, 4, null, 6]
						],
						[
							21066630,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066630]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066630]]
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
							21066633,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066633]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066633]]
							],
							[6, null, null, 4, null, 8]
						],
						[
							21066634,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066634]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066634]]
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
					1000,
					[
						[
							8577212,
							null,
							[6, null, null, 6, null, 8577212, null, ["__gsaExp.id"]]
						]
					]
				],
				[
					1000,
					[
						[
							8577213,
							null,
							[6, null, null, 6, null, 8577213, null, ["__gsaExp.id"]]
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
					1000,
					[
						[
							21066484,
							null,
							[
								2,
								[
									[5, null, null, 6, null, null, null, ["__gsaExp.id"]],
									[
										1,
										[[6, null, null, 6, null, 8577212, null, ["__gsaExp.id"]]]
									],
									[
										1,
										[[6, null, null, 6, null, 8577213, null, ["__gsaExp.id"]]]
									]
								]
							]
						],
						[
							21066485,
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
									[1, [[5, null, null, 6, null, null, null, ["__gsaExp.id"]]]]
								]
							]
						],
						[
							21066621,
							null,
							[6, null, null, 6, null, 8577212, null, ["__gsaExp.id"]]
						],
						[
							21066622,
							null,
							[6, null, null, 6, null, 8577213, null, ["__gsaExp.id"]]
						]
					]
				]
			]
		],
		[
			2,
			[
				[50, [[21066169], [21066170, [[274, null, null, [1]]]]]],
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
				[null, [[21066532], [21066533, [[363, null, null, [1]]]]], null, 25],
				[
					null,
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
				]
			]
		]
	]
]));
