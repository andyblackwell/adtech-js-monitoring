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
		m = {},
		ha = {},
		n = function(a, b) {
			var c = ha[b];
			if (null == c) return a[b];
			c = a[c];
			return void 0 !== c ? c : a[b];
		},
		q = function(a, b, c) {
			if (b)
				a: {
					var d = a.split(".");
					a = 1 === d.length;
					var e = d[0],
						f;
					!a && e in m ? (f = m) : (f = da);
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
							? ba(m, d, { configurable: !0, writable: !0, value: b })
							: b !== c &&
							  ((ha[d] = ea ? da.Symbol(d) : "$jscp$" + d),
							  (d = ha[d]),
							  ba(f, d, { configurable: !0, writable: !0, value: b })));
				}
		};
	q(
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
	q(
		"Symbol.iterator",
		function(a) {
			if (a) return a;
			a = (0, m.Symbol)("Symbol.iterator");
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
							return ia(aa(this));
						}
					});
			}
			return a;
		},
		"es6"
	);
	var ia = function(a) {
			a = { next: a };
			a[n(m.Symbol, "iterator")] = function() {
				return this;
			};
			return a;
		},
		r = function(a) {
			var b =
				"undefined" != typeof m.Symbol &&
				n(m.Symbol, "iterator") &&
				a[n(m.Symbol, "iterator")];
			return b ? b.call(a) : { next: aa(a) };
		},
		ja = function(a) {
			for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
			return c;
		},
		ka = function(a) {
			return a instanceof Array ? a : ja(r(a));
		},
		la =
			"function" == typeof Object.create
				? Object.create
				: function(a) {
						var b = function() {};
						b.prototype = a;
						return new b();
				  },
		ma;
	if (ea && "function" == typeof Object.setPrototypeOf)
		ma = Object.setPrototypeOf;
	else {
		var na;
		a: {
			var oa = { W: !0 },
				pa = {};
			try {
				pa.__proto__ = oa;
				na = pa.W;
				break a;
			} catch (a) {}
			na = !1;
		}
		ma = na
			? function(a, b) {
					a.__proto__ = b;
					if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
					return a;
			  }
			: null;
	}
	var qa = ma,
		ra = function(a, b) {
			a.prototype = la(b.prototype);
			a.prototype.constructor = a;
			if (qa) qa(a, b);
			else
				for (var c in b)
					if ("prototype" != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d);
						} else a[c] = b[c];
		},
		t = function(a, b) {
			return Object.prototype.hasOwnProperty.call(a, b);
		};
	q(
		"Array.prototype.findIndex",
		function(a) {
			return a
				? a
				: function(b, c) {
						a: {
							var d = this;
							d instanceof String && (d = String(d));
							for (var e = d.length, f = 0; f < e; f++)
								if (b.call(c, d[f], f, d)) {
									b = f;
									break a;
								}
							b = -1;
						}
						return b;
				  };
		},
		"es6"
	);
	var sa = function(a, b, c) {
		if (null == a)
			throw new TypeError(
				"The 'this' value for String.prototype." +
					c +
					" must not be null or undefined"
			);
		if (b instanceof RegExp)
			throw new TypeError(
				"First argument to String.prototype." +
					c +
					" must not be a regular expression"
			);
		return a + "";
	};
	q(
		"String.prototype.startsWith",
		function(a) {
			return a
				? a
				: function(b, c) {
						var d = sa(this, b, "startsWith"),
							e = d.length,
							f = b.length;
						c = Math.max(0, Math.min(c | 0, d.length));
						for (var g = 0; g < f && c < e; ) if (d[c++] != b[g++]) return !1;
						return g >= f;
				  };
		},
		"es6"
	);
	var ta = function(a, b) {
		a instanceof String && (a += "");
		var c = 0,
			d = !1,
			e = {
				next: function() {
					if (!d && c < a.length) {
						var f = c++;
						return { value: b(f, a[f]), done: !1 };
					}
					d = !0;
					return { done: !0, value: void 0 };
				}
			};
		e[n(m.Symbol, "iterator")] = function() {
			return e;
		};
		return e;
	};
	q(
		"Array.prototype.keys",
		function(a) {
			return a
				? a
				: function() {
						return ta(this, function(b) {
							return b;
						});
				  };
		},
		"es6"
	);
	q(
		"Array.prototype.values",
		function(a) {
			return a
				? a
				: function() {
						return ta(this, function(b, c) {
							return c;
						});
				  };
		},
		"es8"
	);
	q(
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
	q(
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
							if (f === b || n(Object, "is").call(Object, f, b)) return !0;
						}
						return !1;
				  };
		},
		"es7"
	);
	q(
		"String.prototype.includes",
		function(a) {
			return a
				? a
				: function(b, c) {
						return -1 !== sa(this, b, "includes").indexOf(b, c || 0);
				  };
		},
		"es6"
	);
	q(
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
							k = new a([[g, 2], [h, 3]]);
						if (2 != k.get(g) || 3 != k.get(h)) return !1;
						k.delete(g);
						k.set(h, 4);
						return !k.has(g) && 4 == k.get(h);
					} catch (l) {
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
						g = r(g);
						for (var h; !(h = g.next()).done; )
							(h = h.value), this.set(h[0], h[1]);
					}
				};
			f.prototype.set = function(g, h) {
				if (!c(g)) throw Error("Invalid WeakMap key");
				if (!t(g, d)) {
					var k = new b();
					ba(g, d, { value: k });
				}
				if (!t(g, d)) throw Error("WeakMap key fail: " + g);
				g[d][this.a] = h;
				return this;
			};
			f.prototype.get = function(g) {
				return c(g) && t(g, d) ? g[d][this.a] : void 0;
			};
			f.prototype.has = function(g) {
				return c(g) && t(g, d) && t(g[d], this.a);
			};
			f.prototype.delete = function(g) {
				return c(g) && t(g, d) && t(g[d], this.a) ? delete g[d][this.a] : !1;
			};
			return f;
		},
		"es6"
	);
	q(
		"Map",
		function(a) {
			if (
				(function() {
					if (
						!a ||
						"function" != typeof a ||
						!a.prototype.entries ||
						"function" != typeof Object.seal
					)
						return !1;
					try {
						var h = Object.seal({ x: 4 }),
							k = new a(r([[h, "s"]]));
						if (
							"s" != k.get(h) ||
							1 != k.size ||
							k.get({ x: 4 }) ||
							k.set({ x: 4 }, "t") != k ||
							2 != k.size
						)
							return !1;
						var l = k.entries(),
							p = l.next();
						if (p.done || p.value[0] != h || "s" != p.value[1]) return !1;
						p = l.next();
						return p.done ||
							4 != p.value[0].x ||
							"t" != p.value[1] ||
							!l.next().done
							? !1
							: !0;
					} catch (fa) {
						return !1;
					}
				})()
			)
				return a;
			var b = new m.WeakMap(),
				c = function(h) {
					this.b = {};
					this.a = f();
					this.size = 0;
					if (h) {
						h = r(h);
						for (var k; !(k = h.next()).done; )
							(k = k.value), this.set(k[0], k[1]);
					}
				};
			c.prototype.set = function(h, k) {
				h = 0 === h ? 0 : h;
				var l = d(this, h);
				l.list || (l.list = this.b[l.id] = []);
				l.i
					? (l.i.value = k)
					: ((l.i = {
							next: this.a,
							l: this.a.l,
							head: this.a,
							key: h,
							value: k
					  }),
					  l.list.push(l.i),
					  (this.a.l.next = l.i),
					  (this.a.l = l.i),
					  this.size++);
				return this;
			};
			c.prototype.delete = function(h) {
				h = d(this, h);
				return h.i && h.list
					? (h.list.splice(h.index, 1),
					  h.list.length || delete this.b[h.id],
					  (h.i.l.next = h.i.next),
					  (h.i.next.l = h.i.l),
					  (h.i.head = null),
					  this.size--,
					  !0)
					: !1;
			};
			c.prototype.clear = function() {
				this.b = {};
				this.a = this.a.l = f();
				this.size = 0;
			};
			c.prototype.has = function(h) {
				return !!d(this, h).i;
			};
			c.prototype.get = function(h) {
				return (h = d(this, h).i) && h.value;
			};
			c.prototype.entries = function() {
				return e(this, function(h) {
					return [h.key, h.value];
				});
			};
			c.prototype.keys = function() {
				return e(this, function(h) {
					return h.key;
				});
			};
			c.prototype.values = function() {
				return e(this, function(h) {
					return h.value;
				});
			};
			c.prototype.forEach = function(h, k) {
				for (var l = this.entries(), p; !(p = l.next()).done; )
					(p = p.value), h.call(k, p[1], p[0], this);
			};
			c.prototype[n(m.Symbol, "iterator")] = c.prototype.entries;
			var d = function(h, k) {
					var l = k && typeof k;
					"object" == l || "function" == l
						? b.has(k)
							? (l = b.get(k))
							: ((l = "" + ++g), b.set(k, l))
						: (l = "p_" + k);
					var p = h.b[l];
					if (p && t(h.b, l))
						for (h = 0; h < p.length; h++) {
							var fa = p[h];
							if ((k !== k && fa.key !== fa.key) || k === fa.key)
								return { id: l, list: p, index: h, i: fa };
						}
					return { id: l, list: p, index: -1, i: void 0 };
				},
				e = function(h, k) {
					var l = h.a;
					return ia(function() {
						if (l) {
							for (; l.head != h.a; ) l = l.l;
							for (; l.next != l.head; )
								return (l = l.next), { done: !1, value: k(l) };
							l = null;
						}
						return { done: !0, value: void 0 };
					});
				},
				f = function() {
					var h = {};
					return (h.l = h.next = h.head = h);
				},
				g = 0;
			return c;
		},
		"es6"
	);
	q(
		"Set",
		function(a) {
			if (
				(function() {
					if (
						!a ||
						"function" != typeof a ||
						!a.prototype.entries ||
						"function" != typeof Object.seal
					)
						return !1;
					try {
						var c = Object.seal({ x: 4 }),
							d = new a(r([c]));
						if (
							!d.has(c) ||
							1 != d.size ||
							d.add(c) != d ||
							1 != d.size ||
							d.add({ x: 4 }) != d ||
							2 != d.size
						)
							return !1;
						var e = d.entries(),
							f = e.next();
						if (f.done || f.value[0] != c || f.value[1] != c) return !1;
						f = e.next();
						return f.done ||
							f.value[0] == c ||
							4 != f.value[0].x ||
							f.value[1] != f.value[0]
							? !1
							: e.next().done;
					} catch (g) {
						return !1;
					}
				})()
			)
				return a;
			var b = function(c) {
				this.a = new m.Map();
				if (c) {
					c = r(c);
					for (var d; !(d = c.next()).done; ) this.add(d.value);
				}
				this.size = this.a.size;
			};
			b.prototype.add = function(c) {
				c = 0 === c ? 0 : c;
				this.a.set(c, c);
				this.size = this.a.size;
				return this;
			};
			b.prototype.delete = function(c) {
				c = this.a.delete(c);
				this.size = this.a.size;
				return c;
			};
			b.prototype.clear = function() {
				this.a.clear();
				this.size = 0;
			};
			b.prototype.has = function(c) {
				return this.a.has(c);
			};
			b.prototype.entries = function() {
				return this.a.entries();
			};
			b.prototype.values = function() {
				return n(this.a, "values").call(this.a);
			};
			b.prototype.keys = n(b.prototype, "values");
			b.prototype[n(m.Symbol, "iterator")] = n(b.prototype, "values");
			b.prototype.forEach = function(c, d) {
				var e = this;
				this.a.forEach(function(f) {
					return c.call(d, f, f, e);
				});
			};
			return b;
		},
		"es6"
	);
	var u = this || self,
		wa = function(a) {
			if (a && a != u) return ua(a.document);
			null === va && (va = ua(u.document));
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
			for (var b = u, c = 0; c < a.length; c++)
				if (((b = b[a[c]]), null == b)) return null;
			return b;
		},
		za = function() {},
		v = function(a) {
			a.C = void 0;
			a.f = function() {
				return a.C ? a.C : (a.C = new a());
			};
		},
		Ca = function(a) {
			return (
				(Object.prototype.hasOwnProperty.call(a, Aa) && a[Aa]) || (a[Aa] = ++Ba)
			);
		},
		Aa = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		Ba = 0,
		Da = function(a, b) {
			for (var c in b) a[c] = b[c];
		},
		w = Date.now,
		x = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
		};
	var Ea;
	var y = function(a, b) {
			Array.prototype.forEach.call(a, b, void 0);
		},
		Fa = function(a, b) {
			return Array.prototype.filter.call(a, b, void 0);
		},
		Ga = function(a, b) {
			return Array.prototype.map.call(a, b, void 0);
		},
		Ha = function(a, b) {
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
		Ia = function(a, b) {
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
		Ja = function(a, b) {
			return 0 <= Array.prototype.indexOf.call(a, b, void 0);
		};
	var Ka = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
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
	var z = function(a, b) {
		this.b = (a === Ma && b) || "";
		this.c = Na;
	};
	z.prototype.m = !0;
	z.prototype.a = function() {
		return this.b;
	};
	var Oa = function(a) {
			return a instanceof z && a.constructor === z && a.c === Na
				? a.b
				: "type_error:Const";
		},
		A = function(a) {
			return new z(Ma, a);
		},
		Na = {},
		Ma = {};
	var B = function(a, b) {
		this.c = b === Pa ? a : "";
	};
	B.prototype.m = !0;
	B.prototype.a = function() {
		return this.c.toString();
	};
	B.prototype.B = !0;
	B.prototype.b = function() {
		return 1;
	};
	var Qa = function(a) {
			return a instanceof B && a.constructor === B
				? a.c
				: "type_error:TrustedResourceUrl";
		},
		Ta = function(a) {
			var b = Oa(
				A("https://fundingchoicesmessages.google.com/uf/%{id}?ers=%{ers}")
			);
			if (!Ra.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
			var c = b.replace(Sa, function(d, e) {
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
				return d instanceof z ? Oa(d) : encodeURIComponent(String(d));
			});
			return new B(c, Pa);
		},
		Sa = /%{(\w+)}/g,
		Ra = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
		Ua = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		Pa = {},
		Va = function(a, b, c) {
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
		};
	var Wa = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		db = function(a) {
			if (!Xa.test(a)) return a;
			-1 != a.indexOf("&") && (a = a.replace(Ya, "&amp;"));
			-1 != a.indexOf("<") && (a = a.replace(Za, "&lt;"));
			-1 != a.indexOf(">") && (a = a.replace($a, "&gt;"));
			-1 != a.indexOf('"') && (a = a.replace(ab, "&quot;"));
			-1 != a.indexOf("'") && (a = a.replace(bb, "&#39;"));
			-1 != a.indexOf("\x00") && (a = a.replace(cb, "&#0;"));
			return a;
		},
		Ya = /&/g,
		Za = /</g,
		$a = />/g,
		ab = /"/g,
		bb = /'/g,
		cb = /\x00/g,
		Xa = /[\x00&<>"']/,
		fb = function(a, b) {
			var c = 0;
			a = Wa(String(a)).split(".");
			b = Wa(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c =
						eb(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == g[1].length ? 0 : parseInt(g[1], 10)
						) ||
						eb(0 == f[2].length, 0 == g[2].length) ||
						eb(f[2], g[2]);
					f = f[3];
					g = g[3];
				} while (0 == c);
			}
			return c;
		},
		eb = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var C = function(a, b) {
		this.c = b === gb ? a : "";
	};
	C.prototype.m = !0;
	C.prototype.a = function() {
		return this.c.toString();
	};
	C.prototype.B = !0;
	C.prototype.b = function() {
		return 1;
	};
	var hb = function(a) {
			return a instanceof C && a.constructor === C ? a.c : "type_error:SafeUrl";
		},
		ib = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
		jb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
		kb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		gb = {},
		lb = new C("about:invalid#zClosurez", gb);
	var D;
	a: {
		var mb = u.navigator;
		if (mb) {
			var nb = mb.userAgent;
			if (nb) {
				D = nb;
				break a;
			}
		}
		D = "";
	}
	var F = function(a, b, c) {
		this.c = c === ob ? a : "";
		this.g = b;
	};
	F.prototype.B = !0;
	F.prototype.b = function() {
		return this.g;
	};
	F.prototype.m = !0;
	F.prototype.a = function() {
		return this.c.toString();
	};
	var pb = function(a) {
			return a instanceof F && a.constructor === F
				? a.c
				: "type_error:SafeHtml";
		},
		qb = function(a) {
			if (a instanceof F) return a;
			var b = "object" == typeof a,
				c = null;
			b && a.B && (c = a.b());
			a = db(b && a.m ? a.a() : String(a));
			return new F(a, c, ob);
		},
		rb = /^[a-zA-Z0-9-]+$/,
		sb = {
			action: !0,
			cite: !0,
			data: !0,
			formaction: !0,
			href: !0,
			manifest: !0,
			poster: !0,
			src: !0
		},
		ub = function(a, b) {
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
						if (!rb.test(g)) throw Error("");
						d = a[g];
						if (null != d) {
							c = g;
							if (d instanceof z) d = Oa(d);
							else {
								if ("style" == c.toLowerCase()) throw Error("");
								if (/^on/i.test(c)) throw Error("");
								if (c.toLowerCase() in sb)
									if (d instanceof B) d = Qa(d).toString();
									else if (d instanceof C) d = hb(d);
									else if ("string" === typeof d)
										d instanceof C ||
											((d = "object" == typeof d && d.m ? d.a() : String(d)),
											kb.test(d)
												? (d = new C(d, gb))
												: ((d = String(d)),
												  (d = d.replace(/(%0A|%0D)/g, "")),
												  (d =
														(f = d.match(jb)) && ib.test(f[1])
															? new C(d, gb)
															: null))),
											(d = (d || lb).a());
									else throw Error("");
							}
							d.m && (d = d.a());
							c = c + '="' + db(String(d)) + '"';
							e += " " + c;
						}
					}
			var g = "<script" + e;
			e = void 0;
			null == e ? (e = []) : Array.isArray(e) || (e = [e]);
			!0 === La.script
				? (g += ">")
				: ((b = tb(e)),
				  (g += ">" + pb(b).toString() + "\x3c/script>"),
				  (b = b.b()));
			(a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
			return new F(g, b, ob);
		},
		wb = function(a) {
			var b = qb(vb),
				c = b.b(),
				d = [],
				e = function(f) {
					Array.isArray(f)
						? y(f, e)
						: ((f = qb(f)),
						  d.push(pb(f).toString()),
						  (f = f.b()),
						  0 == c ? (c = f) : 0 != f && c != f && (c = null));
				};
			y(a, e);
			return new F(d.join(pb(b).toString()), c, ob);
		},
		tb = function(a) {
			return wb(Array.prototype.slice.call(arguments));
		},
		ob = {},
		vb = new F((u.trustedTypes && u.trustedTypes.emptyHTML) || "", 0, ob);
	var xb = function(a, b) {
			a.write(pb(b));
		},
		yb = function(a, b) {
			a.src = Qa(b);
			(b = wa(a.ownerDocument && a.ownerDocument.defaultView)) &&
				a.setAttribute("nonce", b);
		};
	var zb = function(a) {
		zb[" "](a);
		return a;
	};
	zb[" "] = za;
	var Ab = {},
		Bb = null;
	var G = function() {},
		Cb = "function" == typeof Uint8Array,
		H = function(a, b, c, d) {
			a.a = null;
			b || (b = []);
			a.A = void 0;
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
							(Cb && e instanceof Uint8Array)
						)
					) {
						a.g = b - a.c;
						a.b = e;
						break a;
					}
				}
				a.g = Number.MAX_VALUE;
			}
			a.o = {};
			if (c)
				for (b = 0; b < c.length; b++)
					(e = c[b]),
						e < a.g
							? ((e += a.c), (a.h[e] = a.h[e] || Db))
							: (Eb(a), (a.b[e] = a.b[e] || Db));
			if (d && d.length) for (b = 0; b < d.length; b++) Fb(a, d[b]);
		},
		Db = [],
		Eb = function(a) {
			var b = a.g + a.c;
			a.h[b] || (a.b = a.h[b] = {});
		},
		I = function(a, b) {
			if (b < a.g) {
				b += a.c;
				var c = a.h[b];
				return c === Db ? (a.h[b] = []) : c;
			}
			if (a.b) return (c = a.b[b]), c === Db ? (a.b[b] = []) : c;
		},
		J = function(a, b, c) {
			a = I(a, b);
			return null == a ? c : a;
		},
		Gb = function(a, b) {
			a = I(a, b);
			a = null == a ? a : +a;
			return null == a ? 0 : a;
		},
		K = function(a, b, c) {
			b < a.g ? (a.h[b + a.c] = c) : (Eb(a), (a.b[b] = c));
			return a;
		},
		Fb = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					g = I(a, f);
				null != g && ((c = f), (d = g), K(a, f, void 0));
			}
			return c ? (K(a, c, d), c) : 0;
		},
		Hb = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				var d = I(a, c);
				d && (a.a[c] = new b(d));
			}
			return a.a[c];
		},
		L = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				for (var d = I(a, c), e = [], f = 0; f < d.length; f++)
					e[f] = new b(d[f]);
				a.a[c] = e;
			}
			b = a.a[c];
			b == Db && (b = a.a[c] = []);
			return b;
		},
		Ib = function(a, b, c) {
			a.a || (a.a = {});
			c = c || [];
			for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].h;
			a.a[b] = c;
			K(a, b, d);
		};
	G.prototype.j = Cb
		? function() {
				var a = Uint8Array.prototype.toJSON;
				Uint8Array.prototype.toJSON = function() {
					var b;
					void 0 === b && (b = 0);
					if (!Bb) {
						Bb = {};
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
							Ab[e] = f;
							for (var g = 0; g < f.length; g++) {
								var h = f[g];
								void 0 === Bb[h] && (Bb[h] = g);
							}
						}
					}
					b = Ab[b];
					c = [];
					for (d = 0; d < this.length; d += 3) {
						var k = this[d],
							l = (e = d + 1 < this.length) ? this[d + 1] : 0;
						h = (f = d + 2 < this.length) ? this[d + 2] : 0;
						g = k >> 2;
						k = ((k & 3) << 4) | (l >> 4);
						l = ((l & 15) << 2) | (h >> 6);
						h &= 63;
						f || ((h = 64), e || (l = 64));
						c.push(b[g], b[k], b[l] || "", b[h] || "");
					}
					return c.join("");
				};
				try {
					return JSON.stringify(this.h && this.h, Jb);
				} finally {
					Uint8Array.prototype.toJSON = a;
				}
		  }
		: function() {
				return JSON.stringify(this.h && this.h, Jb);
		  };
	var Jb = function(a, b) {
		return "number" !== typeof b ||
			(!isNaN(b) && Infinity !== b && -Infinity !== b)
			? b
			: String(b);
	};
	var Lb = function(a) {
			return a
				? new Kb(9 == a.nodeType ? a : a.ownerDocument || a.document)
				: Ea || (Ea = new Kb());
		},
		Kb = function(a) {
			this.a = a || u.document || document;
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
	var Nb = function(a) {
			Mb();
			return new B(a, Pa);
		},
		Mb = za;
	var Ob = function() {
		return (
			-1 != D.indexOf("iPad") ||
			(-1 != D.indexOf("Android") && -1 == D.indexOf("Mobile")) ||
			-1 != D.indexOf("Silk")
		);
	};
	var Pb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
		Qb = function(a) {
			return a ? decodeURI(a) : a;
		};
	var Ub = function(a, b) {
			var c = Rb();
			return !c && !Sb() && ((c = Math.random()), c < b)
				? ((c = Tb(u)), a[Math.floor(c * a.length)])
				: null;
		},
		Tb = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		Vb = function(a, b) {
			if (a)
				for (var c in a)
					Object.prototype.hasOwnProperty.call(a, c) &&
						b.call(void 0, a[c], c, a);
		},
		Sb = Ka(function() {
			return (
				Array.prototype.some.call(
					[
						"Google Web Preview",
						"Mediapartners-Google",
						"Google-Read-Aloud",
						"Google-Adwords"
					],
					Wb,
					void 0
				) || 1e-4 > Math.random()
			);
		}),
		Rb = Ka(function() {
			return Wb("MSIE");
		}),
		Wb = function(a) {
			return -1 != D.indexOf(a);
		},
		Xb = /^(-?[0-9.]{1,30})$/,
		Yb = function(a, b) {
			return Xb.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		Zb = function() {
			try {
				return wa();
			} catch (a) {}
		},
		$b = Ka(function() {
			return Ob() ||
				(-1 == D.indexOf("iPod") &&
					-1 == D.indexOf("iPhone") &&
					-1 == D.indexOf("Android") &&
					-1 == D.indexOf("IEMobile"))
				? Ob()
					? 1
					: 0
				: 2;
		}),
		ac = function() {
			var a = void 0 === a ? window : a;
			if ((a = Qb(a.location.href.match(Pb)[3] || null))) {
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
	var bc = function() {};
	var cc = function(a, b) {
			a.google_image_requests || (a.google_image_requests = []);
			var c = a.document.createElement("img");
			c.src = b;
			a.google_image_requests.push(c);
		},
		ec = function(a) {
			var b =
				"https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_dupeid";
			Vb(a, function(c, d) {
				c && (b += "&" + d + "=" + encodeURIComponent(c));
			});
			dc(b);
		},
		dc = function(a) {
			var b = window;
			b.fetch
				? b.fetch(a, {
						keepalive: !0,
						credentials: "include",
						redirect: "follow",
						method: "get",
						mode: "no-cors"
				  })
				: cc(b, a);
		};
	var fc = {};
	var gc = function() {},
		hc = function(a, b) {
			if (b !== fc) throw Error("Bad secret");
			this.a = a;
		};
	ra(hc, gc);
	hc.prototype.toString = function() {
		return this.a;
	};
	new hc("about:blank", fc);
	new hc("about:invalid#zTSz", fc);
	var jc = function(a) {
		H(this, a, ic, null);
	};
	x(jc, G);
	var ic = [6];
	var kc = function(a, b, c, d, e, f) {
		try {
			var g = a.a,
				h = a.createElement("SCRIPT");
			h.async = !0;
			yb(h, b);
			g.head.appendChild(h);
			h.addEventListener("load", function() {
				e();
				d && g.head.removeChild(h);
			});
			h.addEventListener("error", function() {
				0 < c ? kc(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f());
			});
		} catch (k) {
			f();
		}
	};
	var lc = function(a) {
		var b = a.document,
			c = Lb(a),
			d = function() {
				if (!a.frames.googlefcPresent)
					if (b.body) {
						var e = c.createElement("IFRAME");
						e.style.display = "none";
						e.style.width = "0px";
						e.style.height = "0px";
						e.style.border = "none";
						e.style.zIndex = "-1000";
						e.style.left = "-1000px";
						e.style.top = "-1000px";
						e.name = "googlefcPresent";
						b.body.appendChild(e);
					} else a.setTimeout(d, 5);
			};
		d();
	};
	var mc = function(a, b) {
		this.a = a;
		this.b = Lb(this.a);
		this.c = b;
	};
	mc.prototype.start = function() {
		try {
			lc(this.a), nc(this);
		} catch (a) {}
	};
	var nc = function(a) {
		var b = Ta({ id: a.c, ers: 3 });
		kc(a.b, b, 0, !1, function() {}, function() {});
	};
	var oc = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var pc = null,
		qc = function() {
			if (null === pc) {
				pc = "";
				try {
					var a = "";
					try {
						a = u.top.location.hash;
					} catch (c) {
						a = u.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						pc = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return pc;
		};
	var tc = function(a) {
		H(this, a, rc, sc);
	};
	x(tc, G);
	var rc = [2, 8],
		sc = [[3, 4, 5], [6, 7]];
	var uc = function(a) {
			return null != a ? !a : a;
		},
		vc = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		xc = function(a, b) {
			var c = L(a, tc, 2);
			if (!c.length) return wc(a, b);
			a = J(a, 1, 0);
			if (1 == a) return uc(xc(c[0], b));
			c = Ga(c, function(d) {
				return function() {
					return xc(d, b);
				};
			});
			switch (a) {
				case 2:
					return vc(c, !1);
				case 3:
					return vc(c, !0);
			}
		},
		wc = function(a, b) {
			var c = Fb(a, sc[0]);
			a: {
				switch (c) {
					case 3:
						var d = J(a, 3, 0);
						break a;
					case 4:
						d = J(a, 4, 0);
						break a;
					case 5:
						d = J(a, 5, 0);
						break a;
				}
				d = void 0;
			}
			if (d && (b = (b = b[c]) && b[d])) {
				try {
					var e = b.apply(null, I(a, 8));
				} catch (f) {
					return;
				}
				b = J(a, 1, 0);
				if (4 == b) return !!e;
				d = null != e;
				if (5 == b) return d;
				if (12 == b) a = J(a, 7, "");
				else
					a: {
						switch (c) {
							case 4:
								a = Gb(a, 6);
								break a;
							case 5:
								a = J(a, 7, "");
								break a;
						}
						a = void 0;
					}
				if (null != a) {
					if (6 == b) return e === a;
					if (9 == b) return 0 == fb(e, a);
					if (d)
						switch (b) {
							case 7:
								return e < a;
							case 8:
								return e > a;
							case 12:
								return new RegExp(a).test(e);
							case 10:
								return -1 == fb(e, a);
							case 11:
								return 1 == fb(e, a);
						}
				}
			}
		},
		yc = function(a, b) {
			return !a || !(!b || !xc(a, b));
		};
	var Ac = function(a) {
		H(this, a, zc, null);
	};
	x(Ac, G);
	var zc = [4];
	var M = function(a) {
		H(this, a, Bc, Cc);
	};
	x(M, G);
	var Dc = function(a) {
		H(this, a, null, null);
	};
	x(Dc, G);
	var Bc = [5],
		Cc = [[1, 2, 3, 6, 7]];
	var N = function() {
		var a = {};
		this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
	};
	v(N);
	var Ec = /^true$/.test("false");
	var Fc = Ec,
		Gc = function(a, b) {
			switch (b) {
				case 1:
					return J(a, 1, 0);
				case 2:
					return J(a, 2, 0);
				case 3:
					return J(a, 3, 0);
				case 6:
					return J(a, 6, 0);
				default:
					return null;
			}
		},
		Hc = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return (a = I(a, 1)), (a = null == a ? a : !!a), null == a ? !1 : a;
				case 7:
					return J(a, 3, "");
				case 2:
					return Gb(a, 2);
				case 3:
					return J(a, 3, "");
				case 6:
					return I(a, 4);
				default:
					return null;
			}
		},
		Ic = Ka(function() {
			if (!Fc) return {};
			try {
				var a =
					window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
				if (a) return JSON.parse(a);
			} catch (b) {}
			return {};
		}),
		Lc = function(a, b, c, d) {
			d = void 0 === d ? 0 : d;
			var e = Ic();
			if (e[a] && null != e[a][b]) return e[a][b];
			b = Jc(d)[a][b];
			if (!b) return c;
			b = new M(b);
			b = Kc(b);
			a = Hc(b, a);
			return null != a ? a : c;
		},
		Kc = function(a) {
			var b = N.f().a;
			if (b) {
				var c = Ia(L(a, Dc, 5), function(d) {
					return yc(Hb(d, tc, 1), b);
				});
				if (c) return Hb(c, Ac, 2);
			}
			return Hb(a, Ac, 4);
		},
		Mc = function() {
			this.a = {};
			this.b = [];
		};
	v(Mc);
	var Nc = function(a, b, c) {
			return !!Lc(1, a, void 0 === b ? !1 : b, c);
		},
		Oc = function(a, b, c) {
			b = void 0 === b ? 0 : b;
			a = Number(Lc(2, a, b, c));
			return isNaN(a) ? b : a;
		},
		Pc = function(a, b, c) {
			return Lc(3, a, void 0 === b ? "" : b, c);
		},
		Qc = function(a, b, c) {
			b = void 0 === b ? [] : b;
			return Lc(6, a, b, c);
		},
		Jc = function(a) {
			var b = {};
			return (
				Mc.f().a[a] ||
				(Mc.f().a[a] = ((b[1] = {}), (b[2] = {}), (b[3] = {}), (b[6] = {}), b))
			);
		},
		Rc = function(a, b) {
			var c = Jc(b);
			Vb(a, function(d, e) {
				return Vb(d, function(f, g) {
					return (c[e][g] = f);
				});
			});
		},
		Sc = function(a, b) {
			var c = Jc(b);
			y(a, function(d) {
				var e = Fb(d, Cc[0]),
					f = Gc(d, e);
				f && (c[e][f] = d.h);
			});
		},
		Tc = function(a, b) {
			var c = Jc(b);
			y(a, function(d) {
				var e = new M(d),
					f = Fb(e, Cc[0]);
				(e = Gc(e, f)) && (c[f][e] || (c[f][e] = d));
			});
		},
		Uc = function() {
			return Ga(n(Object, "keys").call(Object, Mc.f().a), function(a) {
				return Number(a);
			});
		},
		Vc = function(a) {
			Ja(Mc.f().b, a) || Rc(Jc(4), a);
		};
	var O = function(a) {
			this.methodName = a;
		},
		Wc = new O(1),
		Xc = new O(15),
		Yc = new O(2),
		Zc = new O(3),
		$c = new O(4),
		ad = new O(5),
		bd = new O(6),
		cd = new O(7),
		dd = new O(8),
		ed = new O(9),
		fd = new O(10),
		gd = new O(11),
		hd = new O(12),
		id = new O(13),
		jd = new O(14),
		P = function(a, b, c) {
			c.hasOwnProperty(a.methodName) ||
				Object.defineProperty(c, String(a.methodName), { value: b });
		},
		Q = function(a, b, c) {
			return b[a.methodName] || c || function() {};
		},
		kd = function(a) {
			P(ad, Nc, a);
			P(bd, Oc, a);
			P(cd, Pc, a);
			P(dd, Qc, a);
			P(id, Tc, a);
			P(Xc, Vc, a);
		},
		ld = function(a) {
			P(
				$c,
				function(b) {
					N.f().a = b;
				},
				a
			);
			P(
				ed,
				function(b, c) {
					var d = N.f();
					d.a[3][b] || (d.a[3][b] = c);
				},
				a
			);
			P(
				fd,
				function(b, c) {
					var d = N.f();
					d.a[4][b] || (d.a[4][b] = c);
				},
				a
			);
			P(
				gd,
				function(b, c) {
					var d = N.f();
					d.a[5][b] || (d.a[5][b] = c);
				},
				a
			);
			P(
				jd,
				function(b) {
					for (
						var c = N.f(), d = r([3, 4, 5]), e = d.next();
						!e.done;
						e = d.next()
					)
						(e = e.value), Da(c.a[e], b[e]);
				},
				a
			);
		},
		md = function(a) {
			a.hasOwnProperty("init-done") ||
				Object.defineProperty(a, "init-done", { value: !0 });
		};
	var nd = function() {
			this.a = function() {};
			this.b = function() {
				return [];
			};
		},
		od = function(a, b, c) {
			a.a = function(d) {
				Q(Yc, b, function() {
					return [];
				})(d, c);
			};
			a.b = function() {
				return Q(Zc, b, function() {
					return [];
				})(c);
			};
		};
	v(nd);
	var pd = function(a, b) {
			try {
				a: {
					var c = a.split(".");
					a = u;
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
		qd = function() {
			var a = {};
			this[3] = ((a[8] = function(b) {
				try {
					return null != ya(b);
				} catch (c) {}
			}),
			(a[9] = function(b) {
				try {
					var c = ya(b);
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
				return Ja(nd.f().b(), parseInt(b, 10));
			}),
			(a[27] = function(b) {
				b = pd(b, "boolean");
				return void 0 !== b ? b : void 0;
			}),
			a);
			a = {};
			this[4] = ((a[3] = function() {
				return $b();
			}),
			(a[6] = function(b) {
				b = pd(b, "number");
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
				b = pd(b, "string");
				return void 0 !== b ? b : void 0;
			}),
			a);
		};
	v(qd);
	var rd = function() {
		var a = void 0 === a ? u : a;
		return a.ggeac || (a.ggeac = {});
	};
	var td = function(a) {
		H(this, a, sd, null);
	};
	x(td, G);
	var sd = [2];
	td.prototype.getId = function() {
		return J(this, 1, 0);
	};
	td.prototype.s = function() {
		return J(this, 7, 0);
	};
	var vd = function(a) {
		H(this, a, ud, null);
	};
	x(vd, G);
	var ud = [2];
	vd.prototype.s = function() {
		return J(this, 5, 0);
	};
	var xd = function(a) {
		H(this, a, wd, null);
	};
	x(xd, G);
	var R = function(a) {
		H(this, a, yd, null);
	};
	x(R, G);
	var wd = [1, 4, 2, 3],
		yd = [2];
	R.prototype.s = function() {
		return J(this, 1, 0);
	};
	var zd = [12, 13],
		Ad = function() {},
		Bd = function(a, b, c, d) {
			var e = void 0 === d ? {} : d;
			d = void 0 === e.K ? !1 : e.K;
			var f = void 0 === e.M ? {} : e.M;
			e = void 0 === e.S ? [] : e.S;
			a.a = b;
			a.j = d;
			a.g = f;
			b = {};
			a.b = ((b[c] = e), (b[4] = []), b);
			a.c = {};
			(c = qc()) &&
				y(c.split(",") || [], function(g) {
					(g = parseInt(g, 10)) && (a.c[g] = !0);
				});
			return a;
		},
		Gd = function(a, b, c) {
			var d = [],
				e = Cd(a.a, b);
			if (e.length) {
				9 !== b && (a.a = Dd(a.a, b));
				var f = Ja(zd, b);
				y(e, function(g) {
					if ((g = Ed(a, g, c))) {
						var h = g.getId();
						d.push(h);
						Fd(a, h, f ? 4 : c);
						var k = L(g, M, 2);
						k &&
							(f
								? y(Uc(), function(l) {
										return Sc(k, l);
								  })
								: Sc(k, c));
					}
				});
			}
			return d;
		},
		Fd = function(a, b, c) {
			a.b[c] || (a.b[c] = []);
			a = a.b[c];
			Ja(a, b) ? ec({ eids: JSON.stringify(a), dup: b }) : a.push(b);
		},
		Hd = function(a, b) {
			a.a.push.apply(
				a.a,
				ka(
					Fa(
						Ga(b, function(c) {
							return new R(c);
						}),
						function(c) {
							return !Ja(zd, c.s());
						}
					)
				)
			);
		},
		Ed = function(a, b, c) {
			var d = N.f().a;
			if (!yc(Hb(b, tc, 3), d)) return null;
			var e = L(b, td, 2),
				f = e.length * J(b, 1, 0),
				g = J(b, 6, 0);
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
					} catch (k) {}
				null === f && (f = Math.floor(1e3 * Tb(window)));
				b = Id(b, f);
				return !b || (d && !yc(Hb(b, tc, 3), d)) ? null : Jd(a, [b], 1);
			}
			g = d
				? Fa(e, function(k) {
						return yc(Hb(k, tc, 3), d);
				  })
				: e;
			return g.length
				? (b = J(b, 4, 0))
					? Kd(a, b, f, g)
					: Jd(a, g, f / 1e3)
				: null;
		},
		Kd = function(a, b, c, d) {
			var e = null != a.g[b] ? a.g[b] : 1e3;
			if (0 >= e) return null;
			d = Jd(a, d, c / e);
			a.g[b] = d ? 0 : e - c;
			return d;
		},
		Jd = function(a, b, c) {
			var d = a.c,
				e = Ha(b, function(f) {
					return !!d[f.getId()];
				});
			return e ? e : a.j ? null : Ub(b, c);
		},
		Ld = function(a, b) {
			P(
				Wc,
				function(c) {
					a.c[c] = !0;
				},
				b
			);
			P(
				Yc,
				function(c, d) {
					return Gd(a, c, d);
				},
				b
			);
			P(
				Zc,
				function(c) {
					return (a.b[c] || []).concat(a.b[4]);
				},
				b
			);
			P(
				hd,
				function(c) {
					return Hd(a, c);
				},
				b
			);
		};
	v(Ad);
	var Cd = function(a, b) {
			return (
				((a = Ha(a, function(c) {
					return c.s() == b;
				})) &&
					L(a, vd, 2)) ||
				[]
			);
		},
		Dd = function(a, b) {
			return Fa(a, function(c) {
				return c.s() != b;
			});
		},
		Id = function(a, b) {
			var c = L(a, td, 2),
				d = c.length,
				e = J(a, 1, 0);
			a = J(a, 8, 0);
			var f = (b - a) % d;
			return b < a || b - a - f >= d * e - 1 ? null : c[f];
		};
	var Md = function() {
			this.b = function(a, b) {
				return void 0 === b ? !1 : b;
			};
			this.c = function(a, b) {
				return void 0 === b ? 0 : b;
			};
			this.a = function() {};
		},
		Nd = function(a, b, c) {
			a.b = function(d, e) {
				return Q(ad, b)(d, e, c);
			};
			a.c = function(d, e) {
				return Q(bd, b)(d, e, c);
			};
			a.a = function() {
				Q(Xc, b)(c);
			};
		};
	v(Md);
	var S = function(a) {
		var b = void 0 === b ? !1 : b;
		return Md.f().b(a, b);
	};
	var Od = function() {
		this.a = function() {};
	};
	v(Od);
	var Pd = function(a) {
		Od.f().a(a);
	};
	var Sd = function(a) {
			var b = Qd.f(),
				c = { K: T(211), M: T(227), S: T(226) },
				d = void 0,
				e = 2;
			d = void 0 === d ? rd() : d;
			e = void 0 === e ? 0 : e;
			d.hasOwnProperty("init-done")
				? (Q(hd, d)(
						Ga(L(a, R, 2), function(f) {
							return f.h;
						})
				  ),
				  Q(id, d)(
						Ga(L(a, M, 1), function(f) {
							return f.h;
						}),
						e
				  ),
				  b && Q(jd, d)(b),
				  Rd(d, e))
				: (Ld(Bd(Ad.f(), L(a, R, 2), e, c), d),
				  kd(d),
				  ld(d),
				  md(d),
				  Rd(d, e),
				  Sc(L(a, M, 1), e),
				  (Fc = Fc || !(!c || !c.X)),
				  Pd(qd.f()),
				  b && Pd(b));
		},
		Rd = function(a, b) {
			a = void 0 === a ? rd() : a;
			b = void 0 === b ? 0 : b;
			var c = a,
				d = b;
			d = void 0 === d ? 0 : d;
			od(nd.f(), c, d);
			c = a;
			b = void 0 === b ? 0 : b;
			Nd(Md.f(), c, b);
			Od.f().a = Q(jd, a);
			Md.f().a();
		};
	var Td = function(a, b, c) {
		var d = "script";
		d = void 0 === d ? "" : d;
		var e = a.createElement("link");
		try {
			e.rel = "preload";
			if (b instanceof B) var f = Qa(b).toString();
			else {
				if (b instanceof C) var g = hb(b);
				else {
					if (b instanceof C) var h = b;
					else
						(b = "object" == typeof b && b.m ? b.a() : String(b)),
							kb.test(b) || (b = "about:invalid#zClosurez"),
							(h = new C(b, gb));
					g = hb(h);
				}
				f = g;
			}
			e.href = f;
		} catch (k) {
			return;
		}
		d && (e.as = d);
		c && e.setAttribute("nonce", c);
		if ((a = a.getElementsByTagName("head")[0]))
			try {
				a.appendChild(e);
			} catch (k) {}
	};
	var Ud = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Vd = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		Wd = function(a) {
			return Ud.test(a) && !Vd.test(a);
		},
		Xd = function(a) {
			return a.replace(/[\W]/g, function(b) {
				return "&#" + b.charCodeAt() + ";";
			});
		},
		U = u,
		Yd = function(a, b) {
			a = "https://adservice" + (b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(u.location.hostname)];
			V[3] >= w() && b.push("adsid=" + encodeURIComponent(V[1]));
			return a + "?" + b.join("&");
		},
		V,
		W,
		Zd = function() {
			U = u;
			V = U.googleToken = U.googleToken || {};
			var a = w();
			(V[1] && V[3] > a && 0 < V[2]) ||
				((V[1] = ""), (V[2] = -1), (V[3] = -1), (V[4] = ""), (V[6] = ""));
			W = U.googleIMState = U.googleIMState || {};
			Wd(W[1]) || (W[1] = ".google.com");
			Array.isArray(W[5]) || (W[5] = []);
			"boolean" !== typeof W[6] && (W[6] = !1);
			Array.isArray(W[7]) || (W[7] = []);
			"number" !== typeof W[8] && (W[8] = 0);
		},
		$d = function(a) {
			try {
				a();
			} catch (b) {
				u.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		be = function(a) {
			"complete" == u.document.readyState ||
			"loaded" == u.document.readyState ||
			(u.document.currentScript && u.document.currentScript.async)
				? ae(3)
				: a();
		},
		ce = 0,
		de = {
			u: function() {
				return 0 < W[8];
			},
			G: function() {
				W[8]++;
			},
			O: function() {
				0 < W[8] && W[8]--;
			},
			P: function() {
				W[8] = 0;
			},
			v: function() {},
			T: function() {
				return !1;
			},
			L: function() {
				return W[5];
			},
			J: $d
		},
		ee = {
			u: function() {
				return W[6];
			},
			G: function() {
				W[6] = !0;
			},
			O: function() {
				W[6] = !1;
			},
			P: function() {
				W[6] = !1;
			},
			v: function() {},
			T: function() {
				return ".google.com" != W[1] && 2 < ++ce;
			},
			L: function() {
				return W[7];
			},
			J: function(a) {
				be(function() {
					$d(a);
				});
			}
		},
		ae = function(a) {
			1e-5 > Math.random() &&
				cc(
					u,
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
						a
				);
		};
	de.v = function() {
		if (!de.u()) {
			var a = u.document,
				b = function(e) {
					e = Yd("js", e);
					var f = Zb();
					Td(a, e, f);
					f = a.createElement("script");
					f.type = "text/javascript";
					f.onerror = function() {
						return u.processGoogleToken({}, 2);
					};
					e = Nb(e);
					yb(f, e);
					try {
						(a.head || a.body || a.documentElement).appendChild(f), de.G();
					} catch (g) {}
				},
				c = W[1];
			b(c);
			".google.com" != c && b(".google.com");
			b = {};
			var d = ((b.newToken = "FBT"), b);
			u.setTimeout(function() {
				return u.processGoogleToken(d, 1);
			}, 1e3);
		}
	};
	ee.v = function() {
		if (!ee.u()) {
			var a = u.document,
				b = Yd("sync.js", W[1]),
				c = Zb();
			Td(a, b, c);
			b = Xd(b);
			var d = zb("script"),
				e = "";
			c && (e = 'nonce="' + Xd(c) + '"');
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
			be(function() {
				a.write(f);
				ee.G();
			});
		}
	};
	var fe = function(a) {
			Zd();
			(V[3] >= w() && V[2] >= w()) || a.v();
		},
		he = function() {
			u.processGoogleToken =
				u.processGoogleToken ||
				function(a, b) {
					return ge(de, a, b);
				};
			fe(de);
		},
		ie = function() {
			u.processGoogleTokenSync =
				u.processGoogleTokenSync ||
				function(a, b) {
					return ge(ee, a, b);
				};
			fe(ee);
		},
		ge = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				g = parseInt(b.validLifetimeSecs || "", 10),
				h = b["1p_jar"] || "";
			b = b.pucrd || "";
			Zd();
			1 == c ? a.P() : a.O();
			if (!d && a.T()) Wd(".google.com") && (W[1] = ".google.com"), a.v();
			else {
				var k = (U.googleToken = U.googleToken || {}),
					l =
						0 == c &&
						d &&
						"string" === typeof d &&
						!e &&
						"number" === typeof f &&
						0 < f &&
						"number" === typeof g &&
						0 < g &&
						"string" === typeof h;
				e = e && !a.u() && (!(V[3] >= w()) || "NT" == V[1]);
				var p = !(V[3] >= w()) && 0 != c;
				if (l || e || p)
					(e = w()),
						(f = e + 1e3 * f),
						(g = e + 1e3 * g),
						ae(c),
						(k[5] = c),
						(k[1] = d),
						(k[2] = f),
						(k[3] = g),
						(k[4] = h),
						(k[6] = b),
						Zd();
				if (l || !a.u()) {
					c = a.L();
					for (d = 0; d < c.length; d++) a.J(c[d]);
					c.length = 0;
				}
			}
		};
	var je = function(a) {
		a = void 0 === a ? u : a;
		return (a = a.performance) && a.now ? a.now() : null;
	};
	var X = u.performance,
		ke = !!(X && X.mark && X.measure && X.clearMarks),
		le = Ka(function() {
			var a;
			if ((a = ke)) (a = qc()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
			return a;
		});
	var me = function(a, b, c) {
			this.a = void 0 === a ? null : a;
			this.g = void 0 === b ? "jserror" : b;
			this.b = null;
			this.c = void 0 === c ? 0.01 : c;
			this.o = this.j;
		},
		ne = function(a, b) {
			a.b = b;
		};
	me.prototype.j = function(a, b, c, d, e) {
		c = void 0 === c ? this.c : c;
		e = void 0 === e ? this.g : e;
		if (Math.random() > c) return !1;
		(b.error && b.meta && b.id) || (b = new oc(b, { context: a, id: e }));
		if (d || this.b) (b.meta = {}), this.b && this.b(b.meta), d && d(b.meta);
		u.google_js_errors = u.google_js_errors || [];
		u.google_js_errors.push(b);
		u.error_rep_loaded ||
			((b = u.document),
			(c = Nb(
				u.location.protocol +
					"//pagead2.googlesyndication.com/pagead/js/err_rep.js"
			)),
			(a = b.createElement("script")),
			yb(a, "string" === typeof c ? Nb(c) : c),
			(b = b.getElementsByTagName("script")[0]) &&
				b.parentNode &&
				b.parentNode.insertBefore(a, b),
			(u.error_rep_loaded = !0));
		return !1;
	};
	var oe = function(a, b) {
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
					le() &&
					(X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
					X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
				!a.o(420, d, a.c, void 0, a.g))
			)
				throw d;
		}
	};
	var pe = A("gpt/pubads_impl_"),
		qe = A("https://securepubads.g.doubleclick.net/");
	var re = function(a) {
			var b = je(a);
			b &&
				((b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				2048 > a.length && a.push(b));
		},
		se = function(a, b, c) {
			var d = window;
			return function() {
				var e = je(),
					f = 3;
				try {
					var g = b.apply(this, arguments);
				} catch (k) {
					f = 13;
					if (c) return c(a, k), g;
					throw k;
				} finally {
					if (d.google_measure_js_timing && e) {
						var h = je() || 0;
						e = { label: a.toString(), value: e, duration: h - e, type: f };
						f = d.google_js_reporting_queue = d.google_js_reporting_queue || [];
						2048 > f.length && f.push(e);
					}
				}
				return g;
			};
		},
		te = function(a, b) {
			return se(a, b, function(c, d) {
				new me().j(c, d);
			});
		};
	function Y(a, b) {
		return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
	}
	var ue = new m.Set();
	function ve(a) {
		a = a.id;
		return (
			ue.has(a) ||
			n(a, "startsWith").call(a, "google_ads_iframe_") ||
			n(a, "startsWith").call(a, "aswift")
		);
	}
	function we(a, b) {
		b = void 0 === b ? 4 : b;
		if (!a) return !1;
		if (ve(a)) return !0;
		if (0 >= b) return !1;
		a = r(a.childNodes);
		for (var c = a.next(); !c.done; c = a.next())
			if (we(c.value, b - 1)) return !0;
		return !1;
	}
	var xe = function() {
		this.N = this.U = this.V = this.b = this.A = this.o = this.g = 0;
		this.R = !1;
		this.D = this.j = this.c = 0;
		var a = document.querySelector("[data-google-query-id]");
		this.I = a ? a.getAttribute("data-google-query-id") : null;
		this.F = null;
		this.H = !1;
		this.a = te(641, this.a.bind(this));
	};
	ra(xe, bc);
	var ze = function() {
			var a = new xe();
			if (S(203) && !window.google_plmetrics && window.PerformanceObserver) {
				window.google_plmetrics = !0;
				for (
					var b = r([
							"layout-shift",
							"largest-contentful-paint",
							"first-input",
							"longtask"
						]),
						c = b.next();
					!c.done;
					c = b.next()
				)
					(c = c.value), ye(a).observe({ type: c, buffered: !S(240) });
				document.addEventListener("unload", a.a);
				document.addEventListener("visibilitychange", a.a);
			}
		},
		ye = function(a) {
			a.F ||
				(a.F = new PerformanceObserver(
					te(640, function(b) {
						var c = !1;
						b = r(b.getEntries());
						for (var d = b.next(); !d.done; d = b.next())
							switch (((d = d.value), d.entryType)) {
								case "layout-shift":
									if (!c) {
										try {
											if (
												"undefined" !== typeof googletag &&
												googletag.pubads
											) {
												var e = googletag.pubads();
												ue.clear();
												for (
													var f = r(e.getSlots()), g = f.next();
													!g.done;
													g = f.next()
												)
													ue.add(g.value.getSlotId().getDomId());
											}
										} catch (p) {}
										c = !0;
									}
									var h = a;
									if (!d.hadRecentInput && (!S(241) || 0.01 < d.value)) {
										h.g += Number(d.value);
										Number(d.value) > h.o && (h.o = Number(d.value));
										h.A += 1;
										a: {
											if (d.sources) {
												var k = r(d.sources);
												for (var l = k.next(); !l.done; l = k.next())
													if (we(l.value.node)) {
														k = !0;
														break a;
													}
											}
											k = !1;
										}
										k && ((h.b += d.value), h.V++);
									}
									break;
								case "largest-contentful-paint":
									a.U = Math.floor(d.renderTime || d.loadTime);
									break;
								case "first-input":
									a.N = Number((d.processingStart - d.startTime).toFixed(3));
									a.R = !0;
									break;
								case "longtask":
									(a.c += d.duration),
										d.duration > a.j && (a.j = d.duration),
										(a.D += 1);
							}
					})
				));
			return a.F;
		};
	xe.prototype.a = function() {
		var a;
		if ((a = !this.H))
			(a = document),
				(a =
					2 ===
					({ visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
						a.visibilityState ||
							a.webkitVisibilityState ||
							a.mozVisibilityState ||
							""
					] || 0));
		if (a) {
			this.H = !0;
			ye(this).takeRecords();
			a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
			window.LayoutShift &&
				((a += "&cls=" + this.g.toFixed(3)),
				(a += "&mls=" + this.o.toFixed(3)),
				(a += Y("nls", this.A)),
				window.LayoutShiftAttribution &&
					((a += "&cas=" + this.b.toFixed(3)), (a += Y("nas", this.V))));
			window.LargestContentfulPaint && (a += Y("lcp", this.U));
			window.PerformanceEventTiming && this.R && (a += Y("fid", this.N));
			window.PerformanceLongTaskTiming &&
				((a += Y("cbt", this.c)),
				(a += Y("mbt", this.j)),
				(a += Y("nlt", this.D)));
			for (
				var b = 0, c = r(document.getElementsByTagName("iframe")), d = c.next();
				!d.done;
				d = c.next()
			)
				ve(d.value) && b++;
			a += Y("nif", b);
			b = window.google_unique_id;
			a += Y("ifi", "number" === typeof b ? b : 0);
			b = nd.f().b();
			a += "&eid=" + encodeURIComponent(b.join());
			a += "&top=" + (u === u.top ? 1 : 0);
			if (this.I) b = "&qqid=" + encodeURIComponent(this.I);
			else {
				if ("number" !== typeof u.goog_pvsid)
					try {
						Object.defineProperty(u, "goog_pvsid", {
							value: Math.floor(Math.random() * Math.pow(2, 52))
						});
					} catch (e) {}
				b = Y("pvsid", Number(u.goog_pvsid) || -1);
			}
			window.fetch(a + b, {
				keepalive: !0,
				credentials: "include",
				redirect: "follow",
				method: "get",
				mode: "no-cors"
			});
		}
	};
	var Ae = [
			{
				issuerOrigin: "https://adservice.google.com",
				issuancePath: "/tt/i",
				redemptionPath: "/tt/r"
			}
		],
		Ce = function(a) {
			this.c = Ae;
			this.b = a;
			this.a = Be(this);
		};
	ra(Ce, bc);
	var Be = function(a) {
			var b = a.c.map(function(c) {
				return {
					issuerOrigin: c.issuerOrigin,
					state: document.hasTrustToken ? 1 : 0
				};
			});
			a.b(b);
			return b;
		},
		De = function(a, b, c) {
			var d = n(a.a, "findIndex").call(a.a, function(e) {
				return e.issuerOrigin === b;
			});
			0 <= d && ((a.a[d].state = c), a.b(a.a));
		},
		Ee = function(a) {
			document.hasTrustToken &&
				a.c.forEach(function(b) {
					window
						.fetch(b.issuerOrigin + b.redemptionPath, {
							keepalive: !0,
							redirect: "follow",
							method: "get",
							trustToken: {
								type: "srr-token-redemption",
								issuer: b.issuerOrigin,
								refreshPolicy: "none"
							}
						})
						.then(function(c) {
							if (!c.ok)
								throw Error(c.status + ": Network response was not ok!");
							De(a, b.issuerOrigin, 6);
						})
						.catch(function(c) {
							c && "NoModificationAllowedError" === c.name
								? De(a, b.issuerOrigin, 6)
								: De(a, b.issuerOrigin, 5);
						});
					De(a, b.issuerOrigin, 2);
				});
		};
	var Fe = [
			"platform",
			"platformVersion",
			"architecture",
			"model",
			"uaFullVersion"
		],
		Ge = function(a) {
			return a.navigator &&
				a.navigator.userAgentData &&
				"function" === typeof a.navigator.userAgentData.getHighEntropyValues
				? a.navigator.userAgentData.getHighEntropyValues(Fe).then(function(b) {
						var c = new jc();
						c = K(c, 1, b.platform);
						c = K(c, 2, b.platformVersion);
						c = K(c, 3, b.architecture);
						c = K(c, 4, b.model);
						return K(c, 5, b.uaFullVersion);
				  })
				: null;
		};
	var He = function() {
			return u.googletag || (u.googletag = {});
		},
		Ie = function(a, b) {
			var c = He();
			c.hasOwnProperty(a) || (c[a] = b);
		},
		Je = function(a, b) {
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
		253: !1,
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
	Z[148] = Ec;
	Z[221] = /^true$/.test("");
	Z[204] = Yb("{{MOD}}", -1);
	var Ke = function() {
		Da(this, Z);
	};
	v(Ke);
	var T = function(a) {
			return Ke.f()[a];
		},
		Le = He(),
		Me = Ke.f();
	Da(Me, Le._vars_);
	Le._vars_ = Me;
	var Ne = new m.WeakMap(),
		Oe = function(a, b) {
			a = [a];
			for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
			return a.join("\x0B");
		};
	var Pe = (function(a, b) {
			b = void 0 === b ? Oe : b;
			var c = Ca(a),
				d = function(e) {
					e = r(e);
					e.next();
					e = ja(e);
					return b(c, e);
				};
			return function(e) {
				for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
				g = this || u;
				var h = Ne.get(g);
				h || ((h = {}), Ne.set(g, h));
				g = h;
				h = [this].concat(ka(f));
				f = d ? d(h) : h;
				if (Object.prototype.hasOwnProperty.call(g, f)) g = g[f];
				else {
					var k = r(h);
					h = k.next().value;
					k = ja(k);
					h = a.apply(h, k);
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
		Qe = function() {
			return 0 === Pe(T(172));
		};
	var Re = function() {
		return Yb("9") || 0;
	};
	Ie("getVersion", function() {
		return "2020082701";
	});
	var Qd = function() {
		var a = {};
		this[3] = ((a[3] = Qe),
		(a[2] = T(36)),
		(a[17] = function(b) {
			for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
			return n(c, "includes").call(c, String(ac()));
		}),
		(a[21] = function() {
			return T(148);
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return T(204);
		}),
		(a[4] = Re),
		a);
		a = {};
		this[5] = ((a[5] = function() {
			var b = T(172);
			return b ? Qb(b.src.match(Pb)[3] || null) : void 0;
		}),
		a);
	};
	v(Qd);
	var Se = [],
		Te = function(a) {
			var b = new xd(T(246));
			a = new xd(a || Se);
			if (!L(b, M, 1).length && L(a, M, 1).length) {
				var c = L(a, M, 1);
				Ib(b, 1, c);
			}
			!L(b, R, 2).length &&
				L(a, R, 2).length &&
				((a = L(a, R, 2)), Ib(b, 2, a));
			Sd(b);
		};
	var Ue = function(a) {
			if ((a = a.scripts))
				for (var b = 0; b < a.length; b++) {
					var c = a[b];
					if (-1 < c.src.indexOf("/tag/js/gpt")) return c;
				}
			return null;
		},
		Ve = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		We = function() {
			var a = [
				S(393) ? A("https://www.googletagservices.com/") : qe,
				pe,
				A("2020082701"),
				A(".js")
			];
			for (var b = "", c = 0; c < a.length; c++) b += Oa(a[c]);
			a = new B(b, Pa);
			var d = void 0 === d ? 0 : d;
			(d = Md.f().c(24, d))
				? ((d = String(d)),
				  (a = Ua.exec(Qa(a).toString())),
				  (b = a[3] || ""),
				  (d = new B(a[1] + Va("?", a[2] || "", d) + Va("#", b, void 0), Pa)))
				: (d = a);
			return d;
		},
		Xe = function(a, b, c) {
			a = a.currentScript || Ue(a);
			Ke.f()[172] = a;
			new Te(b);
			nd.f().a(12);
			nd.f().a(5);
			S(200) || S(220) || ((b = T(150)), Zd(), Wd(b) && (W[1] = b));
			S(312) &&
				Ee(
					new Ce(function(d) {
						Ke.f()[250] = d;
					})
				);
			S(363) &&
				(b = Ge(c)) &&
				b.then(function(d) {
					d = d.j();
					Ke.f()[251] = d;
				});
			b = "";
			S(349) &&
				a &&
				a.hasAttribute("data-load-fc") &&
				(b = a.getAttribute("data-network-id")) &&
				new mc(c, b).start();
		},
		Ye = function(a, b, c) {
			var d = He();
			a = a || d.fifWin || window;
			b = b || a.document;
			var e = d.fifWin ? window : a;
			Ie("cmd", []);
			if (d.evalScripts) d.evalScripts();
			else {
				Xe(b, c, a);
				try {
					ze();
				} catch (k) {}
				re(a);
				a = We();
				c = S(200) || S(239);
				if (Ve(b)) {
					var f = "gpt-impl-" + Math.random();
					try {
						xb(b, ub(a, { id: f, nonce: wa() }));
					} catch (k) {}
					b.getElementById(f) && ((d._loadStarted_ = !0), c || ie());
				}
				if (!d._loadStarted_) {
					c || he();
					b = d.fifWin ? e.document : b;
					var g = b.createElement("script");
					yb(g, a);
					g.async = !0;
					var h = b.head || b.body || b.documentElement;
					"complete" !== e.document.readyState && d.fifWin
						? Je(e, function() {
								return void h.appendChild(g);
						  })
						: h.appendChild(g);
					d._loadStarted_ = !0;
				}
			}
		};
	var Ze;
	a: {
		try {
			if (Array.isArray(E)) {
				Ze = E;
				break a;
			}
		} catch (a) {}
		Ze = [];
	}
	(function(a, b, c) {
		var d = new me(null, "gpt_exception", 0.01);
		ne(d, function(e) {
			e.methodId = 420;
		});
		oe(d, function() {
			return Ye(a, b, c);
		});
	})(void 0, void 0, Ze);
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
		[374, null, null, [1]],
		[293, null, null, [1]],
		[333, null, null, [1]],
		[296, null, null, [1]],
		[null, 61, null, [null, 0.001]],
		[275, null, null, [1]],
		[274, null, null, [1]],
		[258, null, null, [1]],
		[291, null, null, [1]],
		[327, null, null, [1]],
		[352, null, null, [1]],
		[326, null, null, [1]],
		[415, null, null, [1]],
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
		[null, 420, null, [null, 2]],
		[239, null, null, [1]],
		[391, null, null, [1]],
		[329, null, null, [1]],
		[null, null, 2, [null, null, "1-0-37"]],
		[411, null, null, [1]],
		[null, 59, null, [null, 1]],
		[340, null, null, [1]],
		[215, null, null, [1]],
		[377, null, null, [1]],
		[null, 39, null, [null, 72]],
		[null, 38, null, [null, 24]],
		[null, 40, null, [null, 5]],
		[null, 33, null, [null, 250]],
		[330, null, null, [1]],
		[403, null, null, [1]],
		[354, null, null, [1]],
		[388, null, null, [1]],
		[1900, null, null, [1]],
		[405, null, null, [1]],
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
				],
				[
					null,
					[
						[21067036],
						[21067037, [[136, null, null, [1]]]],
						[21067038, [[136, null, null, [1]], [137, null, null, [1]]]]
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
					1,
					[
						[21062330],
						[21062331, [[null, 8, null, [null, 800]]]],
						[21062332, [[null, 8, null, [null, 10000]]]]
					],
					null,
					3
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
				[10, [[21066883], [21066884, [[87, null, null, [1]]]]]],
				[50, [[21066904], [21066908, [[null, 395, null, [null, 2]]]]]],
				[50, [[21066992], [21066993, [[410, null, null, [1]]]]]],
				[50, [[21066994], [21066995, [[404, null, null, [1]]]]]],
				[null, [[21067049], [21067050], [21067051]]],
				[
					null,
					[
						[21067073],
						[21067076, [[390, null, null, [1]], [177, null, null, [1]]]],
						[21067077, [[399, null, null, [1]]]],
						[21067078, [[389, null, null, [1]]]],
						[21067079, [[389, null, null, [1]], [392, null, null, [1]]]]
					]
				],
				[null, [[21067108], [21067109, [[412, null, null, [1]]]]]],
				[null, [[21067110], [21067111, [[418, null, null, [1]]]]]],
				[10, [[21067126], [21067127, [[421, null, null, [1]]]]]],
				[
					10,
					[
						[21067192],
						[21067193, [[98, null, null, [1]]]],
						[21067194, [[98, null, null, [1]]]]
					]
				],
				[
					10,
					[
						[21067199],
						[
							21067200,
							[
								[1902, null, null, [1]],
								[385, null, null, [1]],
								[387, null, null, [1]]
							]
						],
						[21067201, [[1902, null, null, [1]], [385, null, null, [1]]]]
					],
					null,
					29
				],
				[10, [[21067223], [21067224, [[422, null, null, [1]]]]]],
				[
					10,
					[
						[21067257],
						[
							21067258,
							[[413, null, null, [1]], [null, 414, null, [null, 0.5]]]
						],
						[21067259, [[413, null, null, [1]], [null, 414, null, [null, 1]]]]
					]
				],
				[
					null,
					[
						[
							21067297,
							[
								[
									406,
									null,
									null,
									[],
									[[[4, null, 9, null, null, null, null, ["Array.from"]], [1]]]
								]
							]
						],
						[21067302],
						[21067303, [[406, null, null, [1]]]]
					]
				],
				[10, [[21067307], [21067308, [[419, null, null, [1]]]]]],
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
				[50, [[21066806], [21066807, [[370, null, null, [1]]]]]],
				[
					1000,
					[
						[
							21066970,
							null,
							[
								2,
								[
									[6, null, null, 6, null, 8582400, null, ["__gsaExp.id"]],
									[
										1,
										[[6, null, null, null, 4, null, "", ["frameElement.src"]]]
									]
								]
							]
						],
						[
							21066971,
							null,
							[
								2,
								[
									[6, null, null, 6, null, 8582400, null, ["__gsaExp.id"]],
									[6, null, null, null, 4, null, "", ["frameElement.src"]]
								]
							]
						],
						[
							21066972,
							null,
							[
								2,
								[
									[5, null, null, 6, null, null, null, ["__gsaExp.id"]],
									[
										1,
										[[6, null, null, 6, null, 8582400, null, ["__gsaExp.id"]]]
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
							21066973,
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
							21066974,
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
				[
					100,
					[[21067087], [21067088, [[78, null, null, [1]]]]],
					[2, [[4, null, 6, null, null, null, null, ["21066613"]]]]
				],
				[10, [[21067202], [21067203, [[1902, null, null, [1]]]]], null, 29]
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
							21067022,
							null,
							[4, null, 6, null, null, null, null, ["21066904"]]
						],
						[21067026, null, [4, null, 6, null, null, null, null, ["21066908"]]]
					],
					[4, null, 19]
				],
				[
					1000,
					[
						[
							21067027,
							null,
							[4, null, 6, null, null, null, null, ["21066904"]]
						],
						[21067031, null, [4, null, 6, null, null, null, null, ["21066908"]]]
					],
					[1, [[4, null, 19]]]
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
				[10, [[21066465], [21066466, [[302, null, null, [1]]]]]],
				[
					5,
					[
						[21066808],
						[21066809, [[361, null, null, [1]], [360, null, null, [1]]]]
					]
				],
				[
					50,
					[
						[21066928],
						[21066929, [[239, null, null, [1]], [405, null, null, [1]]]]
					],
					null,
					24
				],
				[10, [[21066984], [21066985], [21066986]], null, 29],
				[
					1000,
					[
						[
							21066987,
							null,
							[4, null, 6, null, null, null, null, ["21066984"]]
						],
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
					[12, null, null, null, 5, null, "www\\.googletagservices\\.com"],
					29
				],
				[10, [[21067056], [21067057, [[312, null, null, [1]]]]], null, 21],
				[
					100,
					[[21067058], [21067059, [[312, null, null, [1]]]]],
					[4, null, 9, null, null, null, null, ["document.hasTrustToken"]],
					21
				],
				[50, [[21067118], [21067119, [[373, null, null, [1]]]]]],
				[
					1000,
					[
						[
							21067294,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21067294]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21067294]]
							],
							[6, null, null, 4, null, 4]
						],
						[
							21067295,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21067295]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21067295]]
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
							21067309,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21067309]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21067309]]
							],
							[6, null, null, 4, null, 6]
						],
						[
							21067310,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21067310]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21067310]]
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
							21067330,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21067330]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21067330]]
							],
							[6, null, null, 4, null, 8]
						],
						[
							21067331,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21067331]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21067331]]
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
				[50, [[21066705], [21066706, [[382, null, null, [1]]]]]],
				[10, [[44725623], [44725624, [[1901, null, null, [1]]]]], null, 28]
			]
		]
	]
]));
