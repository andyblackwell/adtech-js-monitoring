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
		k = {},
		fa = {},
		m = function(a, b) {
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
					!a && e in k ? (f = k) : (f = da);
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
							? ba(k, d, { configurable: !0, writable: !0, value: b })
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
			a = (0, k.Symbol)("Symbol.iterator");
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
			a[m(k.Symbol, "iterator")] = function() {
				return this;
			};
			return a;
		},
		p = function(a) {
			var b =
				"undefined" != typeof k.Symbol &&
				m(k.Symbol, "iterator") &&
				a[m(k.Symbol, "iterator")];
			return b ? b.call(a) : { next: aa(a) };
		},
		ia = function(a) {
			for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
			return c;
		},
		ja = function(a) {
			return a instanceof Array ? a : ia(p(a));
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
			d[m(k.Symbol, "iterator")] = function() {
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
	var q = function(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b);
	};
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
							if (f === b || m(Object, "is").call(Object, f, b)) return !0;
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
	n(
		"WeakMap",
		function(a) {
			function b() {}
			function c(g) {
				var h = typeof g;
				return ("object" === h && null !== g) || "function" === h;
			}
			if (
				(function() {
					if (!a || !Object.seal) return !1;
					try {
						var g = Object.seal({}),
							h = Object.seal({}),
							l = new a([[g, 2], [h, 3]]);
						if (2 != l.get(g) || 3 != l.get(h)) return !1;
						l.delete(g);
						l.set(h, 4);
						return !l.has(g) && 4 == l.get(h);
					} catch (y) {
						return !1;
					}
				})()
			)
				return a;
			var d = "$jscomp_hidden_" + Math.random(),
				e = 0,
				f = function(g) {
					this.a = (e += Math.random() + 1).toString();
					if (g) {
						g = p(g);
						for (var h; !(h = g.next()).done; )
							(h = h.value), this.set(h[0], h[1]);
					}
				};
			f.prototype.set = function(g, h) {
				if (!c(g)) throw Error("Invalid WeakMap key");
				if (!q(g, d)) {
					var l = new b();
					ba(g, d, { value: l });
				}
				if (!q(g, d)) throw Error("WeakMap key fail: " + g);
				g[d][this.a] = h;
				return this;
			};
			f.prototype.get = function(g) {
				return c(g) && q(g, d) ? g[d][this.a] : void 0;
			};
			f.prototype.has = function(g) {
				return c(g) && q(g, d) && q(g[d], this.a);
			};
			f.prototype.delete = function(g) {
				return c(g) && q(g, d) && q(g[d], this.a) ? delete g[d][this.a] : !1;
			};
			return f;
		},
		"es6"
	);
	var r = this || self,
		ua = function(a) {
			if (a && a != r) return sa(a.document);
			null === ta && (ta = sa(r.document));
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
			for (var b = r, c = 0; c < a.length; c++)
				if (((b = b[a[c]]), null == b)) return null;
			return b;
		},
		xa = function() {},
		t = function(a) {
			a.A = void 0;
			a.f = function() {
				return a.A ? a.A : (a.A = new a());
			};
		},
		Aa = function(a) {
			return (
				(Object.prototype.hasOwnProperty.call(a, ya) && a[ya]) || (a[ya] = ++za)
			);
		},
		ya = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		za = 0,
		Ba = function(a, b) {
			for (var c in b) a[c] = b[c];
		},
		u = Date.now,
		v = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
		};
	var Ca;
	var w = function(a, b) {
			Array.prototype.forEach.call(a, b, void 0);
		},
		Da = function(a, b) {
			return Array.prototype.filter.call(a, b, void 0);
		},
		Ea = function(a, b) {
			return Array.prototype.map.call(a, b, void 0);
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
		Ha = function(a, b) {
			return 0 <= Array.prototype.indexOf.call(a, b, void 0);
		};
	var Ia = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
	var Ja = {
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
	var x = function(a, b) {
		this.b = (a === Ka && b) || "";
		this.c = La;
	};
	x.prototype.j = !0;
	x.prototype.a = function() {
		return this.b;
	};
	var Ma = function(a) {
			return a instanceof x && a.constructor === x && a.c === La
				? a.b
				: "type_error:Const";
		},
		z = function(a) {
			return new x(Ka, a);
		},
		La = {},
		Ka = {};
	var A = function(a, b) {
		this.c = (a === Na && b) || "";
		this.g = Oa;
	};
	A.prototype.j = !0;
	A.prototype.a = function() {
		return this.c.toString();
	};
	A.prototype.v = !0;
	A.prototype.b = function() {
		return 1;
	};
	var Pa = function(a) {
			return a instanceof A && a.constructor === A && a.g === Oa
				? a.c
				: "type_error:TrustedResourceUrl";
		},
		Sa = function(a) {
			var b = Ma(
				z("https://fundingchoicesmessages.google.com/uf/%{id}?ers=%{ers}")
			);
			if (!Qa.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
			var c = b.replace(Ra, function(d, e) {
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
				return d instanceof x ? Ma(d) : encodeURIComponent(String(d));
			});
			return new A(Na, c);
		},
		Ra = /%{(\w+)}/g,
		Qa = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
		Ta = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		Oa = {},
		Ua = function(a, b, c) {
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
		Na = {};
	var Va = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		cb = function(a) {
			if (!Wa.test(a)) return a;
			-1 != a.indexOf("&") && (a = a.replace(Xa, "&amp;"));
			-1 != a.indexOf("<") && (a = a.replace(Ya, "&lt;"));
			-1 != a.indexOf(">") && (a = a.replace(Za, "&gt;"));
			-1 != a.indexOf('"') && (a = a.replace($a, "&quot;"));
			-1 != a.indexOf("'") && (a = a.replace(ab, "&#39;"));
			-1 != a.indexOf("\x00") && (a = a.replace(bb, "&#0;"));
			return a;
		},
		Xa = /&/g,
		Ya = /</g,
		Za = />/g,
		$a = /"/g,
		ab = /'/g,
		bb = /\x00/g,
		Wa = /[\x00&<>"']/,
		eb = function(a, b) {
			var c = 0;
			a = Va(String(a)).split(".");
			b = Va(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c =
						db(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == g[1].length ? 0 : parseInt(g[1], 10)
						) ||
						db(0 == f[2].length, 0 == g[2].length) ||
						db(f[2], g[2]);
					f = f[3];
					g = g[3];
				} while (0 == c);
			}
			return c;
		},
		db = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var B = function(a, b) {
		this.c = (a === fb && b) || "";
		this.g = gb;
	};
	B.prototype.j = !0;
	B.prototype.a = function() {
		return this.c.toString();
	};
	B.prototype.v = !0;
	B.prototype.b = function() {
		return 1;
	};
	var hb = function(a) {
			return a instanceof B && a.constructor === B && a.g === gb
				? a.c
				: "type_error:SafeUrl";
		},
		ib = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
		jb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
		kb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		gb = {},
		lb = new B(fb, "about:invalid#zClosurez"),
		fb = {};
	var C;
	a: {
		var mb = r.navigator;
		if (mb) {
			var nb = mb.userAgent;
			if (nb) {
				C = nb;
				break a;
			}
		}
		C = "";
	}
	var D = function() {
		this.c = "";
		this.i = ob;
		this.g = null;
	};
	D.prototype.v = !0;
	D.prototype.b = function() {
		return this.g;
	};
	D.prototype.j = !0;
	D.prototype.a = function() {
		return this.c.toString();
	};
	var pb = function(a) {
			return a instanceof D && a.constructor === D && a.i === ob
				? a.c
				: "type_error:SafeHtml";
		},
		rb = function(a) {
			if (a instanceof D) return a;
			var b = "object" == typeof a,
				c = null;
			b && a.v && (c = a.b());
			a = cb(b && a.j ? a.a() : String(a));
			return qb(a, c);
		},
		sb = /^[a-zA-Z0-9-]+$/,
		tb = {
			action: !0,
			cite: !0,
			data: !0,
			formaction: !0,
			href: !0,
			manifest: !0,
			poster: !0,
			src: !0
		},
		vb = function(a, b) {
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
						if (!sb.test(g)) throw Error("");
						d = a[g];
						if (null != d) {
							c = g;
							if (d instanceof x) d = Ma(d);
							else {
								if ("style" == c.toLowerCase()) throw Error("");
								if (/^on/i.test(c)) throw Error("");
								if (c.toLowerCase() in tb)
									if (d instanceof A) d = Pa(d).toString();
									else if (d instanceof B) d = hb(d);
									else if ("string" === typeof d)
										d instanceof B ||
											((d = "object" == typeof d && d.j ? d.a() : String(d)),
											kb.test(d)
												? (d = new B(fb, d))
												: ((d = String(d)),
												  (d = d.replace(/(%0A|%0D)/g, "")),
												  (d =
														(f = d.match(jb)) && ib.test(f[1])
															? new B(fb, d)
															: null))),
											(d = (d || lb).a());
									else throw Error("");
							}
							d.j && (d = d.a());
							c = c + '="' + cb(String(d)) + '"';
							e += " " + c;
						}
					}
			var g = "<script" + e;
			e = void 0;
			null == e ? (e = []) : Array.isArray(e) || (e = [e]);
			!0 === Ja.script
				? (g += ">")
				: ((b = ub(e)),
				  (g += ">" + pb(b).toString() + "\x3c/script>"),
				  (b = b.b()));
			(a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
			return qb(g, b);
		},
		xb = function(a) {
			var b = rb(wb),
				c = b.b(),
				d = [],
				e = function(f) {
					Array.isArray(f)
						? w(f, e)
						: ((f = rb(f)),
						  d.push(pb(f).toString()),
						  (f = f.b()),
						  0 == c ? (c = f) : 0 != f && c != f && (c = null));
				};
			w(a, e);
			return qb(d.join(pb(b).toString()), c);
		},
		ub = function(a) {
			return xb(Array.prototype.slice.call(arguments));
		},
		ob = {},
		qb = function(a, b) {
			var c = new D();
			c.c = a;
			c.g = b;
			return c;
		},
		yb = new D();
	yb.c =
		r.trustedTypes && r.trustedTypes.emptyHTML ? r.trustedTypes.emptyHTML : "";
	yb.g = 0;
	var wb = yb;
	var zb = function(a, b) {
			a.write(pb(b));
		},
		Ab = function(a, b) {
			a.src = Pa(b);
			(b = ua(a.ownerDocument && a.ownerDocument.defaultView)) &&
				a.setAttribute("nonce", b);
		};
	var Bb = function(a) {
		Bb[" "](a);
		return a;
	};
	Bb[" "] = xa;
	var Cb = {},
		Db = null;
	var F = function() {},
		Eb = "function" == typeof Uint8Array,
		G = function(a, b, c, d) {
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
							(Eb && e instanceof Uint8Array)
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
							? ((e += a.c), (a.h[e] = a.h[e] || Fb))
							: (Gb(a), (a.b[e] = a.b[e] || Fb));
			if (d && d.length) for (b = 0; b < d.length; b++) Hb(a, d[b]);
		},
		Fb = [],
		Gb = function(a) {
			var b = a.g + a.c;
			a.h[b] || (a.b = a.h[b] = {});
		},
		H = function(a, b) {
			if (b < a.g) {
				b += a.c;
				var c = a.h[b];
				return c === Fb ? (a.h[b] = []) : c;
			}
			if (a.b) return (c = a.b[b]), c === Fb ? (a.b[b] = []) : c;
		},
		I = function(a, b, c) {
			a = H(a, b);
			return null == a ? c : a;
		},
		Ib = function(a, b) {
			a = H(a, b);
			a = null == a ? a : +a;
			return null == a ? 0 : a;
		},
		J = function(a, b, c) {
			b < a.g ? (a.h[b + a.c] = c) : (Gb(a), (a.b[b] = c));
			return a;
		},
		Hb = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					g = H(a, f);
				null != g && ((c = f), (d = g), J(a, f, void 0));
			}
			return c ? (J(a, c, d), c) : 0;
		},
		Jb = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				var d = H(a, c);
				d && (a.a[c] = new b(d));
			}
			return a.a[c];
		},
		K = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				for (var d = H(a, c), e = [], f = 0; f < d.length; f++)
					e[f] = new b(d[f]);
				a.a[c] = e;
			}
			b = a.a[c];
			b == Fb && (b = a.a[c] = []);
			return b;
		},
		Kb = function(a, b, c) {
			a.a || (a.a = {});
			c = c || [];
			for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].h;
			a.a[b] = c;
			J(a, b, d);
		};
	F.prototype.i = Eb
		? function() {
				var a = Uint8Array.prototype.toJSON;
				Uint8Array.prototype.toJSON = function() {
					var b;
					void 0 === b && (b = 0);
					if (!Db) {
						Db = {};
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
							Cb[e] = f;
							for (var g = 0; g < f.length; g++) {
								var h = f[g];
								void 0 === Db[h] && (Db[h] = g);
							}
						}
					}
					b = Cb[b];
					c = [];
					for (d = 0; d < this.length; d += 3) {
						var l = this[d],
							y = (e = d + 1 < this.length) ? this[d + 1] : 0;
						h = (f = d + 2 < this.length) ? this[d + 2] : 0;
						g = l >> 2;
						l = ((l & 3) << 4) | (y >> 4);
						y = ((y & 15) << 2) | (h >> 6);
						h &= 63;
						f || ((h = 64), e || (y = 64));
						c.push(b[g], b[l], b[y] || "", b[h] || "");
					}
					return c.join("");
				};
				try {
					return JSON.stringify(this.h && this.h, Lb);
				} finally {
					Uint8Array.prototype.toJSON = a;
				}
		  }
		: function() {
				return JSON.stringify(this.h && this.h, Lb);
		  };
	var Lb = function(a, b) {
		return "number" !== typeof b ||
			(!isNaN(b) && Infinity !== b && -Infinity !== b)
			? b
			: String(b);
	};
	var Mb = function(a) {
		this.a = a || r.document || document;
	};
	Mb.prototype.createElement = function(a) {
		var b = this.a;
		a = String(a);
		"application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
		return b.createElement(a);
	};
	Mb.prototype.appendChild = function(a, b) {
		a.appendChild(b);
	};
	var Ob = function(a) {
			Nb();
			return new A(Na, a);
		},
		Nb = xa;
	var Pb = function() {
		return (
			-1 != C.indexOf("iPad") ||
			(-1 != C.indexOf("Android") && -1 == C.indexOf("Mobile")) ||
			-1 != C.indexOf("Silk")
		);
	};
	var Qb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
		Rb = function(a) {
			return a ? decodeURI(a) : a;
		};
	var Vb = function(a, b) {
			if (!Sb() && !Tb()) {
				var c = Math.random();
				if (c < b) return (c = Ub(r)), a[Math.floor(c * a.length)];
			}
			return null;
		},
		Ub = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		Wb = function(a, b) {
			if (a)
				for (var c in a)
					Object.prototype.hasOwnProperty.call(a, c) &&
						b.call(void 0, a[c], c, a);
		},
		Tb = Ia(function() {
			return (
				Array.prototype.some.call(
					[
						"Google Web Preview",
						"Mediapartners-Google",
						"Google-Read-Aloud",
						"Google-Adwords"
					],
					Xb,
					void 0
				) || 1e-4 > Math.random()
			);
		}),
		Sb = Ia(function() {
			return Xb("MSIE");
		}),
		Xb = function(a) {
			return -1 != C.indexOf(a);
		},
		Yb = /^(-?[0-9.]{1,30})$/,
		Zb = function(a, b) {
			return Yb.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		$b = function() {
			try {
				return ua();
			} catch (a) {}
		},
		ac = Ia(function() {
			return Pb() ||
				(-1 == C.indexOf("iPod") &&
					-1 == C.indexOf("iPhone") &&
					-1 == C.indexOf("Android") &&
					-1 == C.indexOf("IEMobile"))
				? Pb()
					? 1
					: 0
				: 2;
		}),
		bc = function() {
			var a = void 0 === a ? window : a;
			if ((a = Rb(a.location.href.match(Qb)[3] || null))) {
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
		cc = function() {
			if ("number" !== typeof r.goog_pvsid)
				try {
					Object.defineProperty(r, "goog_pvsid", {
						value: Math.floor(Math.random() * Math.pow(2, 52))
					});
				} catch (a) {}
			return Number(r.goog_pvsid) || -1;
		};
	var dc = function() {};
	var ec = function(a, b) {
			a.google_image_requests || (a.google_image_requests = []);
			var c = a.document.createElement("img");
			c.src = b;
			a.google_image_requests.push(c);
		},
		gc = function(a, b) {
			var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
			Wb(a, function(d, e) {
				d && (c += "&" + e + "=" + encodeURIComponent(d));
			});
			fc(c);
		},
		fc = function(a) {
			var b = window;
			b.fetch
				? b.fetch(a, {
						keepalive: !0,
						credentials: "include",
						redirect: "follow",
						method: "get",
						mode: "no-cors"
				  })
				: ec(b, a);
		};
	var ic = function(a) {
		G(this, a, hc, null);
	};
	v(ic, F);
	var hc = [6];
	var jc = function(a, b, c, d, e, f) {
		try {
			var g = a.a,
				h = a.createElement("SCRIPT");
			h.async = !0;
			Ab(h, b);
			g.head.appendChild(h);
			h.addEventListener("load", function() {
				e();
				d && g.head.removeChild(h);
			});
			h.addEventListener("error", function() {
				0 < c ? jc(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f());
			});
		} catch (l) {
			f();
		}
	};
	var kc = function(a, b) {
		this.a = a;
		this.b = a.document;
		this.c = (a = this.a)
			? new Mb(9 == a.nodeType ? a : a.ownerDocument || a.document)
			: Ca || (Ca = new Mb());
		this.g = b;
	};
	kc.prototype.start = function() {
		try {
			lc(this), mc(this);
		} catch (a) {}
	};
	var lc = function(a) {
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
		mc = function(a) {
			var b = Sa({ id: a.g, ers: 3 });
			jc(a.c, b, 0, !1, function() {}, function() {});
		};
	var nc = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var oc = null,
		pc = function() {
			if (null === oc) {
				oc = "";
				try {
					var a = "";
					try {
						a = r.top.location.hash;
					} catch (c) {
						a = r.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						oc = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return oc;
		};
	var sc = function(a) {
		G(this, a, qc, rc);
	};
	v(sc, F);
	var qc = [2, 8],
		rc = [[3, 4, 5], [6, 7]];
	var tc = function(a) {
			return null != a ? !a : a;
		},
		uc = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		wc = function(a, b) {
			var c = K(a, sc, 2);
			if (!c.length) return vc(a, b);
			a = I(a, 1, 0);
			if (1 == a) return tc(wc(c[0], b));
			c = Ea(c, function(d) {
				return function() {
					return wc(d, b);
				};
			});
			switch (a) {
				case 2:
					return uc(c, !1);
				case 3:
					return uc(c, !0);
			}
		},
		vc = function(a, b) {
			var c = Hb(a, rc[0]);
			a: {
				switch (c) {
					case 3:
						var d = I(a, 3, 0);
						break a;
					case 4:
						d = I(a, 4, 0);
						break a;
					case 5:
						d = I(a, 5, 0);
						break a;
				}
				d = void 0;
			}
			if (d && (b = (b = b[c]) && b[d])) {
				try {
					var e = b.apply(null, H(a, 8));
				} catch (f) {
					return;
				}
				b = I(a, 1, 0);
				if (4 == b) return !!e;
				d = null != e;
				if (5 == b) return d;
				if (12 == b) a = I(a, 7, "");
				else
					a: {
						switch (c) {
							case 4:
								a = Ib(a, 6);
								break a;
							case 5:
								a = I(a, 7, "");
								break a;
						}
						a = void 0;
					}
				if (null != a) {
					if (6 == b) return e === a;
					if (9 == b) return 0 == eb(e, a);
					if (d)
						switch (b) {
							case 7:
								return e < a;
							case 8:
								return e > a;
							case 12:
								return new RegExp(a).test(e);
							case 10:
								return -1 == eb(e, a);
							case 11:
								return 1 == eb(e, a);
						}
				}
			}
		},
		xc = function(a, b) {
			return !a || !(!b || !wc(a, b));
		};
	var zc = function(a) {
		G(this, a, yc, null);
	};
	v(zc, F);
	var yc = [4];
	var L = function(a) {
		G(this, a, Ac, Bc);
	};
	v(L, F);
	var Cc = function(a) {
		G(this, a, null, null);
	};
	v(Cc, F);
	var Ac = [5],
		Bc = [[1, 2, 3, 6, 7]];
	var M = function() {
		var a = {};
		this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
	};
	t(M);
	var Dc = /^true$/.test("false");
	var Ec = Dc,
		Fc = function(a, b) {
			switch (b) {
				case 1:
					return I(a, 1, 0);
				case 2:
					return I(a, 2, 0);
				case 3:
					return I(a, 3, 0);
				case 6:
					return I(a, 6, 0);
				default:
					return null;
			}
		},
		Gc = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return (a = H(a, 1)), (a = null == a ? a : !!a), null == a ? !1 : a;
				case 7:
					return I(a, 3, "");
				case 2:
					return Ib(a, 2);
				case 3:
					return I(a, 3, "");
				case 6:
					return H(a, 4);
				default:
					return null;
			}
		},
		Hc = Ia(function() {
			if (!Ec) return {};
			try {
				var a =
					window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
				if (a) return JSON.parse(a);
			} catch (b) {}
			return {};
		}),
		Kc = function(a, b, c, d) {
			d = void 0 === d ? 0 : d;
			var e = Hc();
			if (e[a] && null != e[a][b]) return e[a][b];
			b = Ic(d)[a][b];
			if (!b) return c;
			b = new L(b);
			b = Jc(b);
			a = Gc(b, a);
			return null != a ? a : c;
		},
		Jc = function(a) {
			var b = M.f().a;
			if (b) {
				var c = Ga(K(a, Cc, 5), function(d) {
					return xc(Jb(d, sc, 1), b);
				});
				if (c) return Jb(c, zc, 2);
			}
			return Jb(a, zc, 4);
		},
		Lc = function() {
			this.a = {};
			this.b = [];
		};
	t(Lc);
	var Mc = function(a, b, c) {
			return !!Kc(1, a, void 0 === b ? !1 : b, c);
		},
		Nc = function(a, b, c) {
			b = void 0 === b ? 0 : b;
			a = Number(Kc(2, a, b, c));
			return isNaN(a) ? b : a;
		},
		Oc = function(a, b, c) {
			return Kc(3, a, void 0 === b ? "" : b, c);
		},
		Pc = function(a, b, c) {
			b = void 0 === b ? [] : b;
			return Kc(6, a, b, c);
		},
		Ic = function(a) {
			var b = {};
			return (
				Lc.f().a[a] ||
				(Lc.f().a[a] = ((b[1] = {}), (b[2] = {}), (b[3] = {}), (b[6] = {}), b))
			);
		},
		Qc = function(a, b) {
			var c = Ic(b);
			Wb(a, function(d, e) {
				return Wb(d, function(f, g) {
					return (c[e][g] = f);
				});
			});
		},
		Rc = function(a, b) {
			var c = Ic(b);
			w(a, function(d) {
				var e = Hb(d, Bc[0]),
					f = Fc(d, e);
				f && (c[e][f] = d.h);
			});
		},
		Sc = function(a, b) {
			var c = Ic(b);
			w(a, function(d) {
				var e = new L(d),
					f = Hb(e, Bc[0]);
				(e = Fc(e, f)) && (c[f][e] || (c[f][e] = d));
			});
		},
		Tc = function() {
			return Ea(m(Object, "keys").call(Object, Lc.f().a), function(a) {
				return Number(a);
			});
		},
		Uc = function(a) {
			Ha(Lc.f().b, a) || Qc(Ic(4), a);
		};
	var N = function(a) {
			this.methodName = a;
		},
		Vc = new N(1),
		Wc = new N(15),
		Xc = new N(2),
		Yc = new N(3),
		Zc = new N(4),
		$c = new N(5),
		ad = new N(6),
		bd = new N(7),
		cd = new N(8),
		dd = new N(9),
		ed = new N(10),
		fd = new N(11),
		gd = new N(12),
		hd = new N(13),
		id = new N(14),
		O = function(a, b, c) {
			c.hasOwnProperty(a.methodName) ||
				Object.defineProperty(c, String(a.methodName), { value: b });
		},
		P = function(a, b, c) {
			return b[a.methodName] || c || function() {};
		},
		jd = function(a) {
			O($c, Mc, a);
			O(ad, Nc, a);
			O(bd, Oc, a);
			O(cd, Pc, a);
			O(hd, Sc, a);
			O(Wc, Uc, a);
		},
		kd = function(a) {
			O(
				Zc,
				function(b) {
					M.f().a = b;
				},
				a
			);
			O(
				dd,
				function(b, c) {
					var d = M.f();
					d.a[3][b] || (d.a[3][b] = c);
				},
				a
			);
			O(
				ed,
				function(b, c) {
					var d = M.f();
					d.a[4][b] || (d.a[4][b] = c);
				},
				a
			);
			O(
				fd,
				function(b, c) {
					var d = M.f();
					d.a[5][b] || (d.a[5][b] = c);
				},
				a
			);
			O(
				id,
				function(b) {
					for (
						var c = M.f(), d = p([3, 4, 5]), e = d.next();
						!e.done;
						e = d.next()
					)
						(e = e.value), Ba(c.a[e], b[e]);
				},
				a
			);
		},
		ld = function(a) {
			a.hasOwnProperty("init-done") ||
				Object.defineProperty(a, "init-done", { value: !0 });
		};
	var Q = function() {
			this.b = function() {};
			this.a = function() {
				return [];
			};
		},
		md = function(a, b, c) {
			a.b = function(d) {
				P(Xc, b, function() {
					return [];
				})(d, c);
			};
			a.a = function() {
				return P(Yc, b, function() {
					return [];
				})(c);
			};
		};
	t(Q);
	var nd = function(a, b) {
			try {
				a: {
					var c = a.split(".");
					a = r;
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
		od = function() {
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
				return Ha(Q.f().a(), parseInt(b, 10));
			}),
			(a[27] = function(b) {
				b = nd(b, "boolean");
				return void 0 !== b ? b : void 0;
			}),
			a);
			a = {};
			this[4] = ((a[3] = function() {
				return ac();
			}),
			(a[6] = function(b) {
				b = nd(b, "number");
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
				b = nd(b, "string");
				return void 0 !== b ? b : void 0;
			}),
			a);
		};
	t(od);
	var pd = function() {
		var a = void 0 === a ? r : a;
		return a.ggeac || (a.ggeac = {});
	};
	var rd = function(a) {
		G(this, a, qd, null);
	};
	v(rd, F);
	var qd = [2];
	rd.prototype.getId = function() {
		return I(this, 1, 0);
	};
	rd.prototype.m = function() {
		return I(this, 7, 0);
	};
	var td = function(a) {
		G(this, a, sd, null);
	};
	v(td, F);
	var sd = [2];
	td.prototype.m = function() {
		return I(this, 5, 0);
	};
	var vd = function(a) {
		G(this, a, ud, null);
	};
	v(vd, F);
	var R = function(a) {
		G(this, a, wd, null);
	};
	v(R, F);
	var ud = [1, 4, 2, 3],
		wd = [2];
	R.prototype.m = function() {
		return I(this, 1, 0);
	};
	var xd = [12, 13],
		yd = function() {},
		zd = function(a, b, c, d) {
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
			(c = pc()) &&
				w(c.split(",") || [], function(g) {
					(g = parseInt(g, 10)) && (a.c[g] = !0);
				});
			return a;
		},
		Ed = function(a, b, c) {
			var d = [],
				e = Ad(a.a, b);
			if (e.length) {
				9 !== b && (a.a = Bd(a.a, b));
				var f = Ha(xd, b);
				w(e, function(g) {
					if ((g = Cd(a, g, c))) {
						var h = g.getId();
						d.push(h);
						Dd(a, h, f ? 4 : c);
						var l = K(g, L, 2);
						l &&
							(f
								? w(Tc(), function(y) {
										return Rc(l, y);
								  })
								: Rc(l, c));
					}
				});
			}
			return d;
		},
		Dd = function(a, b, c) {
			a.b[c] || (a.b[c] = []);
			a = a.b[c];
			Ha(a, b)
				? gc({ eids: JSON.stringify(a), dup: b }, "gpt_dupeid")
				: a.push(b);
		},
		Fd = function(a, b) {
			a.a.push.apply(
				a.a,
				ja(
					Da(
						Ea(b, function(c) {
							return new R(c);
						}),
						function(c) {
							return !Ha(xd, c.m());
						}
					)
				)
			);
		},
		Cd = function(a, b, c) {
			var d = M.f().a;
			if (!xc(Jb(b, sc, 3), d)) return null;
			var e = K(b, rd, 2),
				f = e.length * I(b, 1, 0),
				g = I(b, 6, 0);
			if (g) {
				f = d[4];
				switch (c) {
					case 2:
						var h = f[8];
						break;
					case 1:
						h = f[7];
				}
				f = null;
				if (h)
					try {
						f = h(g);
					} catch (l) {}
				null === f && (f = Math.floor(1e3 * Ub(window)));
				b = Gd(b, f);
				return !b || (d && !xc(Jb(b, sc, 3), d)) ? null : Hd(a, [b], 1);
			}
			g = d
				? Da(e, function(l) {
						return xc(Jb(l, sc, 3), d);
				  })
				: e;
			return g.length
				? (b = I(b, 4, 0))
					? Id(a, b, f, g)
					: Hd(a, g, f / 1e3)
				: null;
		},
		Id = function(a, b, c, d) {
			var e = null != a.g[b] ? a.g[b] : 1e3;
			if (0 >= e) return null;
			d = Hd(a, d, c / e);
			a.g[b] = d ? 0 : e - c;
			return d;
		},
		Hd = function(a, b, c) {
			var d = a.c,
				e = Fa(b, function(f) {
					return !!d[f.getId()];
				});
			return e ? e : a.i ? null : Vb(b, c);
		},
		Jd = function(a, b) {
			O(
				Vc,
				function(c) {
					a.c[c] = !0;
				},
				b
			);
			O(
				Xc,
				function(c, d) {
					return Ed(a, c, d);
				},
				b
			);
			O(
				Yc,
				function(c) {
					return (a.b[c] || []).concat(a.b[4]);
				},
				b
			);
			O(
				gd,
				function(c) {
					return Fd(a, c);
				},
				b
			);
		};
	t(yd);
	var Ad = function(a, b) {
			return (
				((a = Fa(a, function(c) {
					return c.m() == b;
				})) &&
					K(a, td, 2)) ||
				[]
			);
		},
		Bd = function(a, b) {
			return Da(a, function(c) {
				return c.m() != b;
			});
		},
		Gd = function(a, b) {
			var c = K(a, rd, 2),
				d = c.length,
				e = I(a, 1, 0);
			a = I(a, 8, 0);
			var f = (b - a) % d;
			return b < a || b - a - f >= d * e - 1 ? null : c[f];
		};
	var Kd = function() {
			this.b = function(a, b) {
				return void 0 === b ? !1 : b;
			};
			this.c = function(a, b) {
				return void 0 === b ? 0 : b;
			};
			this.a = function() {};
		},
		Ld = function(a, b, c) {
			a.b = function(d, e) {
				return P($c, b)(d, e, c);
			};
			a.c = function(d, e) {
				return P(ad, b)(d, e, c);
			};
			a.a = function() {
				P(Wc, b)(c);
			};
		};
	t(Kd);
	var S = function(a) {
		var b = void 0 === b ? !1 : b;
		return Kd.f().b(a, b);
	};
	var Md = function() {
		this.a = function() {};
	};
	t(Md);
	var Nd = function(a) {
		Md.f().a(a);
	};
	var Qd = function(a) {
			var b = Od.f(),
				c = { I: T(211), L: T(227), R: T(226) },
				d = void 0,
				e = 2;
			d = void 0 === d ? pd() : d;
			e = void 0 === e ? 0 : e;
			d.hasOwnProperty("init-done")
				? (P(gd, d)(
						Ea(K(a, R, 2), function(f) {
							return f.h;
						})
				  ),
				  P(hd, d)(
						Ea(K(a, L, 1), function(f) {
							return f.h;
						}),
						e
				  ),
				  b && P(id, d)(b),
				  Pd(d, e))
				: (Jd(zd(yd.f(), K(a, R, 2), e, c), d),
				  jd(d),
				  kd(d),
				  ld(d),
				  Pd(d, e),
				  Rc(K(a, L, 1), e),
				  (Ec = Ec || !(!c || !c.W)),
				  Nd(od.f()),
				  b && Nd(b));
		},
		Pd = function(a, b) {
			a = void 0 === a ? pd() : a;
			b = void 0 === b ? 0 : b;
			var c = a,
				d = b;
			d = void 0 === d ? 0 : d;
			md(Q.f(), c, d);
			c = a;
			b = void 0 === b ? 0 : b;
			Ld(Kd.f(), c, b);
			Md.f().a = P(id, a);
			Kd.f().a();
		};
	var Rd = function(a, b, c) {
		var d = "script";
		d = void 0 === d ? "" : d;
		var e = a.createElement("link");
		try {
			e.rel = "preload";
			if (b instanceof A) var f = Pa(b).toString();
			else {
				if (b instanceof B) var g = hb(b);
				else {
					if (b instanceof B) var h = b;
					else
						(b = "object" == typeof b && b.j ? b.a() : String(b)),
							kb.test(b) || (b = "about:invalid#zClosurez"),
							(h = new B(fb, b));
					g = hb(h);
				}
				f = g;
			}
			e.href = f;
		} catch (l) {
			return;
		}
		d && (e.as = d);
		c && e.setAttribute("nonce", c);
		if ((a = a.getElementsByTagName("head")[0]))
			try {
				a.appendChild(e);
			} catch (l) {}
	};
	var Sd = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Td = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		Ud = function(a) {
			return Sd.test(a) && !Td.test(a);
		},
		Vd = function(a) {
			return a.replace(/[\W]/g, function(b) {
				return "&#" + b.charCodeAt() + ";";
			});
		},
		U = r,
		Wd = function(a, b) {
			a = "https://adservice" + (b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(r.location.hostname)];
			V[3] >= u() && b.push("adsid=" + encodeURIComponent(V[1]));
			return a + "?" + b.join("&");
		},
		V,
		W,
		Xd = function() {
			U = r;
			V = U.googleToken = U.googleToken || {};
			var a = u();
			(V[1] && V[3] > a && 0 < V[2]) ||
				((V[1] = ""), (V[2] = -1), (V[3] = -1), (V[4] = ""), (V[6] = ""));
			W = U.googleIMState = U.googleIMState || {};
			Ud(W[1]) || (W[1] = ".google.com");
			Array.isArray(W[5]) || (W[5] = []);
			"boolean" !== typeof W[6] && (W[6] = !1);
			Array.isArray(W[7]) || (W[7] = []);
			"number" !== typeof W[8] && (W[8] = 0);
		},
		Yd = function(a) {
			try {
				a();
			} catch (b) {
				r.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		$d = function(a) {
			"complete" == r.document.readyState ||
			"loaded" == r.document.readyState ||
			(r.document.currentScript && r.document.currentScript.async)
				? Zd(3)
				: a();
		},
		ae = 0,
		be = {
			o: function() {
				return 0 < W[8];
			},
			C: function() {
				W[8]++;
			},
			N: function() {
				0 < W[8] && W[8]--;
			},
			O: function() {
				W[8] = 0;
			},
			s: function() {},
			S: function() {
				return !1;
			},
			J: function() {
				return W[5];
			},
			H: Yd
		},
		ce = {
			o: function() {
				return W[6];
			},
			C: function() {
				W[6] = !0;
			},
			N: function() {
				W[6] = !1;
			},
			O: function() {
				W[6] = !1;
			},
			s: function() {},
			S: function() {
				return ".google.com" != W[1] && 2 < ++ae;
			},
			J: function() {
				return W[7];
			},
			H: function(a) {
				$d(function() {
					Yd(a);
				});
			}
		},
		Zd = function(a) {
			1e-5 > Math.random() &&
				ec(
					r,
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
						a
				);
		};
	be.s = function() {
		if (!be.o()) {
			var a = r.document,
				b = function(e) {
					e = Wd("js", e);
					var f = $b();
					Rd(a, e, f);
					f = a.createElement("script");
					f.type = "text/javascript";
					f.onerror = function() {
						return r.processGoogleToken({}, 2);
					};
					e = Ob(e);
					Ab(f, e);
					try {
						(a.head || a.body || a.documentElement).appendChild(f), be.C();
					} catch (g) {}
				},
				c = W[1];
			b(c);
			".google.com" != c && b(".google.com");
			b = {};
			var d = ((b.newToken = "FBT"), b);
			r.setTimeout(function() {
				return r.processGoogleToken(d, 1);
			}, 1e3);
		}
	};
	ce.s = function() {
		if (!ce.o()) {
			var a = r.document,
				b = Wd("sync.js", W[1]),
				c = $b();
			Rd(a, b, c);
			b = Vd(b);
			var d = Bb("script"),
				e = "";
			c && (e = 'nonce="' + Vd(c) + '"');
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
			$d(function() {
				a.write(f);
				ce.C();
			});
		}
	};
	var de = function(a) {
			Xd();
			(V[3] >= u() && V[2] >= u()) || a.s();
		},
		fe = function() {
			r.processGoogleToken =
				r.processGoogleToken ||
				function(a, b) {
					return ee(be, a, b);
				};
			de(be);
		},
		ge = function() {
			r.processGoogleTokenSync =
				r.processGoogleTokenSync ||
				function(a, b) {
					return ee(ce, a, b);
				};
			de(ce);
		},
		ee = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				g = parseInt(b.validLifetimeSecs || "", 10),
				h = b["1p_jar"] || "";
			b = b.pucrd || "";
			Xd();
			1 == c ? a.O() : a.N();
			if (!d && a.S()) Ud(".google.com") && (W[1] = ".google.com"), a.s();
			else {
				var l = (U.googleToken = U.googleToken || {}),
					y =
						0 == c &&
						d &&
						"string" === typeof d &&
						!e &&
						"number" === typeof f &&
						0 < f &&
						"number" === typeof g &&
						0 < g &&
						"string" === typeof h;
				e = e && !a.o() && (!(V[3] >= u()) || "NT" == V[1]);
				var ue = !(V[3] >= u()) && 0 != c;
				if (y || e || ue)
					(e = u()),
						(f = e + 1e3 * f),
						(g = e + 1e3 * g),
						Zd(c),
						(l[5] = c),
						(l[1] = d),
						(l[2] = f),
						(l[3] = g),
						(l[4] = h),
						(l[6] = b),
						Xd();
				if (y || !a.o()) {
					c = a.J();
					for (d = 0; d < c.length; d++) a.H(c[d]);
					c.length = 0;
				}
			}
		};
	var he = function(a) {
		a = void 0 === a ? r : a;
		return (a = a.performance) && a.now ? a.now() : null;
	};
	var X = r.performance,
		ie = !!(X && X.mark && X.measure && X.clearMarks),
		je = Ia(function() {
			var a;
			if ((a = ie)) (a = pc()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
			return a;
		});
	var ke = function(a, b, c) {
			this.a = void 0 === a ? null : a;
			this.g = void 0 === b ? "jserror" : b;
			this.b = null;
			this.c = void 0 === c ? 0.01 : c;
			this.l = this.i;
		},
		le = function(a, b) {
			a.b = b;
		};
	ke.prototype.i = function(a, b, c, d, e) {
		c = void 0 === c ? this.c : c;
		e = void 0 === e ? this.g : e;
		if (Math.random() > c) return !1;
		(b.error && b.meta && b.id) || (b = new nc(b, { context: a, id: e }));
		if (d || this.b) (b.meta = {}), this.b && this.b(b.meta), d && d(b.meta);
		r.google_js_errors = r.google_js_errors || [];
		r.google_js_errors.push(b);
		r.error_rep_loaded ||
			((b = r.document),
			(c = Ob(
				r.location.protocol +
					"//pagead2.googlesyndication.com/pagead/js/err_rep.js"
			)),
			(a = b.createElement("script")),
			Ab(a, "string" === typeof c ? Ob(c) : c),
			(b = b.getElementsByTagName("script")[0]) &&
				b.parentNode &&
				b.parentNode.insertBefore(a, b),
			(r.error_rep_loaded = !0));
		return !1;
	};
	var me = function(a, b) {
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
					je() &&
					(X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
					X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
				!a.l(420, d, a.c, void 0, a.g))
			)
				throw d;
		}
	};
	var ne = z("gpt/pubads_impl_"),
		oe = z("https://securepubads.g.doubleclick.net/");
	var pe = function(a) {
		if (!a.google_ltobserver) {
			var b = new a.PerformanceObserver(function(c) {
				var d = (a.google_lt_queue = a.google_lt_queue || []);
				w(c.getEntries(), function(e) {
					return d.push(e);
				});
			});
			b.observe({ entryTypes: ["longtask"] });
			a.google_ltobserver = b;
		}
	};
	var qe = function(a) {
			var b = he(a);
			b &&
				((b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				2048 > a.length && a.push(b));
		},
		re = function(a, b, c) {
			var d = window;
			return function() {
				var e = he(),
					f = 3;
				try {
					var g = b.apply(this, arguments);
				} catch (l) {
					f = 13;
					if (c) return c(a, l), g;
					throw l;
				} finally {
					if (d.google_measure_js_timing && e) {
						var h = he() || 0;
						e = { label: a.toString(), value: e, duration: h - e, type: f };
						f = d.google_js_reporting_queue = d.google_js_reporting_queue || [];
						2048 > f.length && f.push(e);
					}
				}
				return g;
			};
		},
		se = function(a, b) {
			return re(a, b, function(c, d) {
				new ke().i(c, d);
			});
		};
	function Y(a, b) {
		return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
	}
	var ve = function() {
		var a = this;
		this.K = this.U = this.u = this.l = this.g = 0;
		this.M = !1;
		this.B = this.i = this.c = 0;
		this.P = 0.1 > Math.random();
		this.T = r === r.top;
		var b = document.querySelector("[data-google-query-id]");
		this.D = (this.a = b ? b.getAttribute("data-google-query-id") : null)
			? null
			: cc();
		this.P &&
			((b =
				"https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics" +
				(this.a ? "&qqid=" + encodeURIComponent(this.a) : Y("pvsid", this.D))),
			(b += Y("test", 1)),
			(b += "&top=" + (this.T ? 1 : 0)),
			te(b));
		this.F = new PerformanceObserver(
			se(640, function(c) {
				c = p(c.getEntries());
				for (var d = c.next(); !d.done; d = c.next()) {
					d = d.value;
					if ("layout-shift" === d.entryType) {
						var e = d;
						e.hadRecentInput ||
							(S(241) && !(0.01 < e.value)) ||
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
		this.b = se(641, this.b.bind(this));
	};
	qa(ve, dc);
	ve.prototype.b = function() {
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
				(a += Y("nls", this.u)));
			window.LargestContentfulPaint && (a += Y("lcp", this.U));
			window.PerformanceEventTiming && this.M && (a += Y("fid", this.K));
			window.PerformanceLongTaskTiming &&
				((a += Y("cbt", this.c)),
				(a += Y("mbt", this.i)),
				(a += Y("nlt", this.B)));
			for (
				var b = 0, c = p(document.getElementsByTagName("iframe")), d = c.next();
				!d.done;
				d = c.next()
			)
				if (
					((d = d.value),
					m(d.id, "includes").call(d.id, "google_ads_iframe_") ||
						m(d.id, "includes").call(d.id, "aswift"))
				)
					b += 1;
			a += Y("nif", b);
			b = window.google_unique_id;
			a += Y("ifi", "number" === typeof b ? b : 0);
			b = Q.f().a();
			a += "&eid=" + encodeURIComponent(b.join());
			this.P && (a += Y("test", 1));
			a += "&top=" + (this.T ? 1 : 0);
			a += this.a ? "&qqid=" + encodeURIComponent(this.a) : Y("pvsid", this.D);
			te(a);
		}
	};
	function te(a) {
		window.fetch(a, {
			keepalive: !0,
			credentials: "include",
			redirect: "follow",
			method: "get",
			mode: "no-cors"
		});
	}
	var we = ["https://adservice.google.com"],
		xe = function(a) {
			this.g = we;
			this.a = 2;
			this.b = a;
			this.c = cc();
		};
	qa(xe, dc);
	var ye = function(a) {
		!document.hasTrustToken ||
			3 <= a.a ||
			((a.a = 3),
			w(a.g, function(b) {
				window
					.fetch(b + "/tt/r", {
						keepalive: !0,
						redirect: "follow",
						method: "get",
						trustToken: {
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
							var d = Q.f().a();
							gc(
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
	var ze = [
			"platform",
			"platformVersion",
			"architecture",
			"model",
			"uaFullVersion"
		],
		Ae = function(a) {
			return a.navigator &&
				a.navigator.userAgentData &&
				"function" === typeof a.navigator.userAgentData.getHighEntropyValues
				? a.navigator.userAgentData.getHighEntropyValues(ze).then(function(b) {
						var c = new ic();
						c = J(c, 1, b.platform);
						c = J(c, 2, b.platformVersion);
						c = J(c, 3, b.architecture);
						c = J(c, 4, b.model);
						return J(c, 5, b.uaFullVersion);
				  })
				: null;
		};
	var Be = function() {
			return r.googletag || (r.googletag = {});
		},
		Ce = function(a, b) {
			var c = Be();
			c.hasOwnProperty(a) || (c[a] = b);
		},
		De = function(a, b) {
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
		250: null,
		252: null,
		251: null
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
	Z[148] = Dc;
	Z[221] = /^true$/.test("");
	Z[204] = Zb("{{MOD}}", -1);
	var Ee = function() {
		Ba(this, Z);
	};
	t(Ee);
	var T = function(a) {
			return Ee.f()[a];
		},
		Fe = Be(),
		Ge = Ee.f();
	Ba(Ge, Fe._vars_);
	Fe._vars_ = Ge;
	var He = new k.WeakMap(),
		Ie = function(a, b) {
			a = [a];
			for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
			return a.join("\x0B");
		};
	var Je = (function(a, b) {
			b = void 0 === b ? Ie : b;
			var c = Aa(a),
				d = function(e) {
					e = p(e);
					e.next();
					e = ia(e);
					return b(c, e);
				};
			return function(e) {
				for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
				g = this || r;
				var h = He.get(g);
				h || ((h = {}), He.set(g, h));
				g = h;
				h = [this].concat(ja(f));
				f = d ? d(h) : h;
				if (Object.prototype.hasOwnProperty.call(g, f)) g = g[f];
				else {
					var l = p(h);
					h = l.next().value;
					l = ia(l);
					h = a.apply(h, l);
					g = g[f] = h;
				}
				return g;
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
		Ke = function() {
			return 0 === Je(T(172));
		};
	var Le = function() {
		return Zb("3") || 0;
	};
	Ce("getVersion", function() {
		return "2020080301";
	});
	var Od = function() {
		var a = {};
		this[3] = ((a[3] = Ke),
		(a[2] = T(36)),
		(a[17] = function(b) {
			for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
			return m(c, "includes").call(c, String(bc()));
		}),
		(a[21] = function() {
			return T(148);
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return T(204);
		}),
		(a[4] = Le),
		a);
		a = {};
		this[5] = ((a[5] = function() {
			var b = T(172);
			return b ? Rb(b.src.match(Qb)[3] || null) : void 0;
		}),
		a);
	};
	t(Od);
	var Me = [],
		Ne = function(a) {
			var b = new vd(T(246));
			a = new vd(a || Me);
			if (!K(b, L, 1).length && K(a, L, 1).length) {
				var c = K(a, L, 1);
				Kb(b, 1, c);
			}
			!K(b, R, 2).length &&
				K(a, R, 2).length &&
				((a = K(a, R, 2)), Kb(b, 2, a));
			Qd(b);
		};
	var Oe = function(a) {
			if ((a = a.scripts))
				for (var b = 0; b < a.length; b++) {
					var c = a[b];
					if (-1 < c.src.indexOf("/tag/js/gpt")) return c;
				}
			return null;
		},
		Pe = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		Qe = function() {
			var a = [
				S(393) ? z("https://www.googletagservices.com/") : oe,
				ne,
				z("2020080301"),
				z(".js")
			];
			for (var b = "", c = 0; c < a.length; c++) b += Ma(a[c]);
			a = new A(Na, b);
			var d = void 0 === d ? 0 : d;
			(d = Kd.f().c(24, d))
				? ((d = String(d)),
				  (a = Ta.exec(Pa(a).toString())),
				  (b = a[3] || ""),
				  (d = new A(Na, a[1] + Ua("?", a[2] || "", d) + Ua("#", b, void 0))))
				: (d = a);
			return d;
		},
		Re = function(a, b, c) {
			a = a.currentScript || Oe(a);
			Ee.f()[172] = a;
			new Ne(b);
			Q.f().b(12);
			Q.f().b(5);
			S(200) || S(220) || ((b = T(150)), Xd(), Ud(b) && (W[1] = b));
			S(312) &&
				ye(
					new xe(function(d) {
						Ee.f()[250] = d;
					})
				);
			S(363) &&
				(b = Ae(c)) &&
				b.then(function(d) {
					d = d.i();
					Ee.f()[251] = d;
				});
			b = "";
			S(349) &&
				a &&
				a.hasAttribute("data-load-fc") &&
				(b = a.getAttribute("data-network-id")) &&
				new kc(c, b).start();
		},
		Se = function(a) {
			try {
				if (
					a.PerformanceObserver &&
					(a.PerformanceLongTaskTiming && !S(377) && pe(a),
					S(203) && !window.google_plmetrics)
				) {
					for (
						var b = new ve(),
							c = p([
								"layout-shift",
								"largest-contentful-paint",
								"first-input",
								"longtask"
							]),
							d = c.next();
						!d.done;
						d = c.next()
					)
						b.F.observe({ type: d.value, buffered: !S(240) });
					document.addEventListener("unload", b.b);
					document.addEventListener("visibilitychange", b.b);
					window.google_plmetrics = !0;
				}
			} catch (e) {}
		},
		Te = function(a, b, c) {
			var d = Be();
			a = a || d.fifWin || window;
			b = b || a.document;
			var e = d.fifWin ? window : a;
			Ce("cmd", []);
			if (d.evalScripts) d.evalScripts();
			else {
				Re(b, c, a);
				Se(a);
				qe(a);
				a = Qe();
				c = S(200) || S(239);
				if (Pe(b)) {
					var f = "gpt-impl-" + Math.random();
					try {
						zb(b, vb(a, { id: f, nonce: ua() }));
					} catch (l) {}
					b.getElementById(f) && ((d._loadStarted_ = !0), c || ge());
				}
				if (!d._loadStarted_) {
					c || fe();
					b = d.fifWin ? e.document : b;
					var g = b.createElement("script");
					Ab(g, a);
					g.async = !0;
					var h = b.head || b.body || b.documentElement;
					"complete" !== e.document.readyState && d.fifWin
						? De(e, function() {
								return void h.appendChild(g);
						  })
						: h.appendChild(g);
					d._loadStarted_ = !0;
				}
			}
		};
	var Ue;
	a: {
		try {
			if (Array.isArray(E)) {
				Ue = E;
				break a;
			}
		} catch (a) {}
		Ue = [];
	}
	(function(a, b, c) {
		var d = new ke(null, "gpt_exception", 0.01);
		le(d, function(e) {
			e.methodId = 420;
		});
		me(d, function() {
			return Te(a, b, c);
		});
	})(void 0, void 0, Ue);
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
	[
		[269, null, null, [1]],
		[351, null, null, [1]],
		[null, 7, null, [null, 0.1]],
		[347, null, null, [1]],
		[322, null, null, [1]],
		[20, null, null, null, [[[1, [[4, null, 1]]], [1]]]],
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
		[89, null, null, [1]],
		[null, null, 2, [null, null, "1-0-37"]],
		[null, 59, null, [null, 1]],
		[340, null, null, [1]],
		[215, null, null, [1]],
		[377, null, null, [1]],
		[null, 39, null, [null, 72]],
		[null, 38, null, [null, 24]],
		[null, 40, null, [null, 5]],
		[null, 33, null, [null, 250]],
		[330, null, null, [1]],
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
				[100, [[21065803], [21065804, [[329, null, null, [1]]]]]],
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
				[10, [[21066781], [21066782]]],
				[1, [[21066883], [21066884, [[87, null, null, [1]]]]]],
				[1, [[21066894], [21066895], [21066896]]],
				[
					5,
					[
						[21066904],
						[21066905, [[177, null, null, [1]]]],
						[21066906, [[394, null, null, [1]]]],
						[21066907, [[null, 395, null, [null, 1]]]],
						[21066908, [[null, 395, null, [null, 2]]]]
					]
				],
				[
					1,
					[
						[21066913],
						[21066914, [[177, null, null, [1]]]],
						[21066915, [[390, null, null, [1]]]],
						[21066916, [[390, null, null, [1]], [177, null, null, [1]]]],
						[21066917, [[399, null, null, [1]]]],
						[21066918, [[389, null, null, [1]]]],
						[21066919, [[389, null, null, [1]], [392, null, null, [1]]]]
					]
				],
				[
					1,
					[
						[21066954],
						[21066955, [[385, null, null, [1]], [387, null, null, [1]]]],
						[21066956, [[385, null, null, [1]]]],
						[21066957, [[396, null, null, [1]]]],
						[21066958, [[385, null, null, [1]], [396, null, null, [1]]]],
						[
							21066959,
							[
								[385, null, null, [1]],
								[396, null, null, [1]],
								[387, null, null, [1]]
							]
						]
					]
				],
				[10, [[21066980], [21066981, [[403, null, null, [1]]]]]],
				[10, [[21066982], [21066983, [[398, null, null, [1]]]]]],
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
			12,
			[
				[10, [[21066920], [21066921, [[1900, null, null, [1]]]]]],
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
									[6, null, null, 6, null, 8580143, null, ["__gsaExp.id"]],
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
									[6, null, null, 6, null, 8580143, null, ["__gsaExp.id"]],
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
										[[6, null, null, 6, null, 8580143, null, ["__gsaExp.id"]]]
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
							[4, null, 6, null, null, null, null, ["21066913"]]
						],
						[21064216, null, [4, null, 6, null, null, null, null, ["21066914"]]]
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
				[1, [[21066390], [21066391, [[346, null, null, [1]]]]]],
				[1, [[21066465], [21066466, [[302, null, null, [1]]]]]],
				[null, [[21066602], [21066603, [[354, null, null, [1]]]]]],
				[50, [[21066625], [21066626, [[373, null, null, [1]]]]]],
				[
					5,
					[
						[21066808],
						[21066809, [[361, null, null, [1]], [360, null, null, [1]]]]
					]
				],
				[100, [[21066940], [21066941, [[391, null, null, [1]]]]]],
				[
					1000,
					[
						[
							21066964,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066964]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066964]]
							],
							[6, null, null, 4, null, 2]
						],
						[
							21066965,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21066965]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21066965]]
							],
							[6, null, null, 4, null, 3]
						]
					],
					[4, null, 3],
					1
				],
				[1, [[21066984], [21066985], [21066986]]],
				[
					1000,
					[
						[21066987, null, [4, null, 6, null, null, null, null, ["21066984"]]]
					],
					[12, null, null, null, 5, null, "www\\.googletagservices\\.com"]
				],
				[
					1000,
					[
						[
							21066988,
							[
								[null, 24, null, [null, 21066988]],
								[null, 25, null, [null, 21066988]]
							],
							[4, null, 6, null, null, null, null, ["21066985"]]
						],
						[
							21066989,
							[
								[null, 24, null, [null, 21066989]],
								[393, null, null, [1]],
								[null, 25, null, [null, 21066989]]
							],
							[4, null, 6, null, null, null, null, ["21066986"]]
						]
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
		]
	]
]));
