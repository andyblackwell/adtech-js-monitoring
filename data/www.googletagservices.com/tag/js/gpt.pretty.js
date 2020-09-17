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
		fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
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
						var h = d[e];
						if (!(h in f)) break a;
						f = f[h];
					}
					d = d[d.length - 1];
					c = fa && "es6" === c ? f[d] : null;
					b = b(c);
					null != b &&
						(a
							? ba(m, d, { configurable: !0, writable: !0, value: b })
							: b !== c &&
							  ((ha[d] = fa ? da.Symbol(d) : "$jscp$" + d),
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
	if (fa && "function" == typeof Object.setPrototypeOf)
		ma = Object.setPrototypeOf;
	else {
		var na;
		a: {
			var oa = { R: !0 },
				pa = {};
			try {
				pa.__proto__ = oa;
				na = pa.R;
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
		},
		sa = function(a, b, c) {
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
						for (var h = 0; h < f && c < e; ) if (d[c++] != b[h++]) return !1;
						return h >= f;
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
			function c(h) {
				var g = typeof h;
				return ("object" === g && null !== h) || "function" === g;
			}
			if (
				(function() {
					if (!a || !Object.seal) return !1;
					try {
						var h = Object.seal({}),
							g = Object.seal({}),
							k = new a([[h, 2], [g, 3]]);
						if (2 != k.get(h) || 3 != k.get(g)) return !1;
						k.delete(h);
						k.set(g, 4);
						return !k.has(h) && 4 == k.get(g);
					} catch (l) {
						return !1;
					}
				})()
			)
				return a;
			var d = "$jscomp_hidden_" + Math.random(),
				e = 0,
				f = function(h) {
					this.a = (e += Math.random() + 1).toString();
					if (h) {
						h = r(h);
						for (var g; !(g = h.next()).done; )
							(g = g.value), this.set(g[0], g[1]);
					}
				};
			f.prototype.set = function(h, g) {
				if (!c(h)) throw Error("Invalid WeakMap key");
				if (!t(h, d)) {
					var k = new b();
					ba(h, d, { value: k });
				}
				if (!t(h, d)) throw Error("WeakMap key fail: " + h);
				h[d][this.a] = g;
				return this;
			};
			f.prototype.get = function(h) {
				return c(h) && t(h, d) ? h[d][this.a] : void 0;
			};
			f.prototype.has = function(h) {
				return c(h) && t(h, d) && t(h[d], this.a);
			};
			f.prototype.delete = function(h) {
				return c(h) && t(h, d) && t(h[d], this.a) ? delete h[d][this.a] : !1;
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
						var g = Object.seal({ x: 4 }),
							k = new a(r([[g, "s"]]));
						if (
							"s" != k.get(g) ||
							1 != k.size ||
							k.get({ x: 4 }) ||
							k.set({ x: 4 }, "t") != k ||
							2 != k.size
						)
							return !1;
						var l = k.entries(),
							p = l.next();
						if (p.done || p.value[0] != g || "s" != p.value[1]) return !1;
						p = l.next();
						return p.done ||
							4 != p.value[0].x ||
							"t" != p.value[1] ||
							!l.next().done
							? !1
							: !0;
					} catch (ea) {
						return !1;
					}
				})()
			)
				return a;
			var b = new m.WeakMap(),
				c = function(g) {
					this.b = {};
					this.a = f();
					this.size = 0;
					if (g) {
						g = r(g);
						for (var k; !(k = g.next()).done; )
							(k = k.value), this.set(k[0], k[1]);
					}
				};
			c.prototype.set = function(g, k) {
				g = 0 === g ? 0 : g;
				var l = d(this, g);
				l.list || (l.list = this.b[l.id] = []);
				l.i
					? (l.i.value = k)
					: ((l.i = {
							next: this.a,
							l: this.a.l,
							head: this.a,
							key: g,
							value: k
					  }),
					  l.list.push(l.i),
					  (this.a.l.next = l.i),
					  (this.a.l = l.i),
					  this.size++);
				return this;
			};
			c.prototype.delete = function(g) {
				g = d(this, g);
				return g.i && g.list
					? (g.list.splice(g.index, 1),
					  g.list.length || delete this.b[g.id],
					  (g.i.l.next = g.i.next),
					  (g.i.next.l = g.i.l),
					  (g.i.head = null),
					  this.size--,
					  !0)
					: !1;
			};
			c.prototype.clear = function() {
				this.b = {};
				this.a = this.a.l = f();
				this.size = 0;
			};
			c.prototype.has = function(g) {
				return !!d(this, g).i;
			};
			c.prototype.get = function(g) {
				return (g = d(this, g).i) && g.value;
			};
			c.prototype.entries = function() {
				return e(this, function(g) {
					return [g.key, g.value];
				});
			};
			c.prototype.keys = function() {
				return e(this, function(g) {
					return g.key;
				});
			};
			c.prototype.values = function() {
				return e(this, function(g) {
					return g.value;
				});
			};
			c.prototype.forEach = function(g, k) {
				for (var l = this.entries(), p; !(p = l.next()).done; )
					(p = p.value), g.call(k, p[1], p[0], this);
			};
			c.prototype[n(m.Symbol, "iterator")] = c.prototype.entries;
			var d = function(g, k) {
					var l = k && typeof k;
					"object" == l || "function" == l
						? b.has(k)
							? (l = b.get(k))
							: ((l = "" + ++h), b.set(k, l))
						: (l = "p_" + k);
					var p = g.b[l];
					if (p && t(g.b, l))
						for (g = 0; g < p.length; g++) {
							var ea = p[g];
							if ((k !== k && ea.key !== ea.key) || k === ea.key)
								return { id: l, list: p, index: g, i: ea };
						}
					return { id: l, list: p, index: -1, i: void 0 };
				},
				e = function(g, k) {
					var l = g.a;
					return ia(function() {
						if (l) {
							for (; l.head != g.a; ) l = l.l;
							for (; l.next != l.head; )
								return (l = l.next), { done: !1, value: k(l) };
							l = null;
						}
						return { done: !0, value: void 0 };
					});
				},
				f = function() {
					var g = {};
					return (g.l = g.next = g.head = g);
				},
				h = 0;
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
					} catch (h) {
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
		v = function(a) {
			a.A = void 0;
			a.f = function() {
				return a.A ? a.A : (a.A = new a());
			};
		},
		Ba = function(a) {
			return (
				(Object.prototype.hasOwnProperty.call(a, za) && a[za]) || (a[za] = ++Aa)
			);
		},
		za = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		Aa = 0,
		Ca = function(a, b) {
			for (var c in b) a[c] = b[c];
		},
		w = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
		};
	var Da;
	var x = function(a, b) {
			Array.prototype.forEach.call(a, b, void 0);
		},
		Ea = function(a, b) {
			return Array.prototype.filter.call(a, b, void 0);
		},
		Fa = function(a, b) {
			return Array.prototype.map.call(a, b, void 0);
		};
	function Ga(a, b) {
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
	}
	function Ha(a, b) {
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
	}
	function Ia(a, b) {
		return 0 <= Array.prototype.indexOf.call(a, b, void 0);
	}
	var Ja = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
	var Ka = {
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
	var y = function(a, b) {
		this.b = (a === La && b) || "";
		this.c = Ma;
	};
	y.prototype.o = !0;
	y.prototype.a = function() {
		return this.b;
	};
	var Na = function(a) {
			return a instanceof y && a.constructor === y && a.c === Ma
				? a.b
				: "type_error:Const";
		},
		z = function(a) {
			return new y(La, a);
		},
		Ma = {},
		La = {};
	var A = function(a, b) {
		this.c = b === Oa ? a : "";
	};
	A.prototype.o = !0;
	A.prototype.a = function() {
		return this.c.toString();
	};
	A.prototype.v = !0;
	A.prototype.b = function() {
		return 1;
	};
	var Pa = function(a) {
			return a instanceof A && a.constructor === A
				? a.c
				: "type_error:TrustedResourceUrl";
		},
		Sa = function(a) {
			var b = Na(
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
				return d instanceof y ? Na(d) : encodeURIComponent(String(d));
			});
			return new A(c, Oa);
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
						var h = e[f];
						null != h &&
							(b || (b = a),
							(b +=
								(b.length > a.length ? "&" : "") +
								encodeURIComponent(d) +
								"=" +
								encodeURIComponent(String(h))));
					}
				}
			return b;
		};
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
					h = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
					if (0 == f[0].length && 0 == h[0].length) break;
					c =
						db(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == h[1].length ? 0 : parseInt(h[1], 10)
						) ||
						db(0 == f[2].length, 0 == h[2].length) ||
						db(f[2], h[2]);
					f = f[3];
					h = h[3];
				} while (0 == c);
			}
			return c;
		},
		db = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var B = function(a, b) {
		this.c = b === fb ? a : "";
	};
	B.prototype.o = !0;
	B.prototype.a = function() {
		return this.c.toString();
	};
	B.prototype.v = !0;
	B.prototype.b = function() {
		return 1;
	};
	var gb = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
		hb = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
		ib = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		fb = {},
		jb = new B("about:invalid#zClosurez", fb);
	var C;
	a: {
		var kb = u.navigator;
		if (kb) {
			var lb = kb.userAgent;
			if (lb) {
				C = lb;
				break a;
			}
		}
		C = "";
	}
	var D = function(a, b, c) {
		this.c = c === mb ? a : "";
		this.g = b;
	};
	D.prototype.v = !0;
	D.prototype.b = function() {
		return this.g;
	};
	D.prototype.o = !0;
	D.prototype.a = function() {
		return this.c.toString();
	};
	var nb = function(a) {
			return a instanceof D && a.constructor === D
				? a.c
				: "type_error:SafeHtml";
		},
		ob = function(a) {
			if (a instanceof D) return a;
			var b = "object" == typeof a,
				c = null;
			b && a.v && (c = a.b());
			a = cb(b && a.o ? a.a() : String(a));
			return new D(a, c, mb);
		},
		pb = /^[a-zA-Z0-9-]+$/,
		qb = {
			action: !0,
			cite: !0,
			data: !0,
			formaction: !0,
			href: !0,
			manifest: !0,
			poster: !0,
			src: !0
		},
		sb = function(a, b) {
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
				for (h in a)
					if (Object.prototype.hasOwnProperty.call(a, h)) {
						if (!pb.test(h)) throw Error("");
						d = a[h];
						if (null != d) {
							c = h;
							if (d instanceof y) d = Na(d);
							else {
								if ("style" == c.toLowerCase()) throw Error("");
								if (/^on/i.test(c)) throw Error("");
								if (c.toLowerCase() in qb)
									if (d instanceof A) d = Pa(d).toString();
									else if (d instanceof B)
										d =
											d instanceof B && d.constructor === B
												? d.c
												: "type_error:SafeUrl";
									else if ("string" === typeof d)
										d instanceof B ||
											((d = "object" == typeof d && d.o ? d.a() : String(d)),
											ib.test(d)
												? (d = new B(d, fb))
												: ((d = String(d)),
												  (d = d.replace(/(%0A|%0D)/g, "")),
												  (d =
														(f = d.match(hb)) && gb.test(f[1])
															? new B(d, fb)
															: null))),
											(d = (d || jb).a());
									else throw Error("");
							}
							d.o && (d = d.a());
							c = c + '="' + cb(String(d)) + '"';
							e += " " + c;
						}
					}
			var h = "<script" + e;
			e = void 0;
			null == e ? (e = []) : Array.isArray(e) || (e = [e]);
			!0 === Ka.script
				? (h += ">")
				: ((b = rb(e)),
				  (h += ">" + nb(b).toString() + "\x3c/script>"),
				  (b = b.b()));
			(a = a && a.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? (b = 0) : (b = null));
			return new D(h, b, mb);
		},
		ub = function(a) {
			var b = ob(tb),
				c = b.b(),
				d = [],
				e = function(f) {
					Array.isArray(f)
						? x(f, e)
						: ((f = ob(f)),
						  d.push(nb(f).toString()),
						  (f = f.b()),
						  0 == c ? (c = f) : 0 != f && c != f && (c = null));
				};
			x(a, e);
			return new D(d.join(nb(b).toString()), c, mb);
		},
		rb = function(a) {
			return ub(Array.prototype.slice.call(arguments));
		},
		mb = {},
		tb = new D((u.trustedTypes && u.trustedTypes.emptyHTML) || "", 0, mb);
	var vb = function(a, b) {
			a.write(nb(b));
		},
		wb = function(a) {
			var b = wa(a.ownerDocument && a.ownerDocument.defaultView);
			b && a.setAttribute("nonce", b);
		};
	var xb = {},
		yb = null;
	var F = function() {},
		zb = "function" == typeof Uint8Array,
		G = function(a, b, c, d) {
			a.a = null;
			b || (b = []);
			a.s = void 0;
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
							(zb && e instanceof Uint8Array)
						)
					) {
						a.g = b - a.c;
						a.b = e;
						break a;
					}
				}
				a.g = Number.MAX_VALUE;
			}
			a.m = {};
			if (c)
				for (b = 0; b < c.length; b++)
					(e = c[b]),
						e < a.g
							? ((e += a.c), (a.h[e] = a.h[e] || Ab))
							: (Bb(a), (a.b[e] = a.b[e] || Ab));
			if (d && d.length) for (b = 0; b < d.length; b++) Cb(a, d[b]);
		},
		Ab = [],
		Bb = function(a) {
			var b = a.g + a.c;
			a.h[b] || (a.b = a.h[b] = {});
		},
		H = function(a, b) {
			if (b < a.g) {
				b += a.c;
				var c = a.h[b];
				return c === Ab ? (a.h[b] = []) : c;
			}
			if (a.b) return (c = a.b[b]), c === Ab ? (a.b[b] = []) : c;
		},
		I = function(a, b, c) {
			a = H(a, b);
			return null == a ? c : a;
		},
		Db = function(a, b) {
			a = H(a, b);
			a = null == a ? a : +a;
			return null == a ? 0 : a;
		},
		J = function(a, b, c) {
			b < a.g ? (a.h[b + a.c] = c) : (Bb(a), (a.b[b] = c));
			return a;
		},
		Cb = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					h = H(a, f);
				null != h && ((c = f), (d = h), J(a, f, void 0));
			}
			return c ? (J(a, c, d), c) : 0;
		},
		K = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				var d = H(a, c);
				d && (a.a[c] = new b(d));
			}
			return a.a[c];
		},
		L = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				for (var d = H(a, c), e = [], f = 0; f < d.length; f++)
					e[f] = new b(d[f]);
				a.a[c] = e;
			}
			b = a.a[c];
			b == Ab && (b = a.a[c] = []);
			return b;
		},
		Eb = function(a, b, c) {
			a.a || (a.a = {});
			c = c || [];
			for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].h;
			a.a[b] = c;
			J(a, b, d);
		};
	F.prototype.j = zb
		? function() {
				var a = Uint8Array.prototype.toJSON;
				Uint8Array.prototype.toJSON = function() {
					var b;
					void 0 === b && (b = 0);
					if (!yb) {
						yb = {};
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
							xb[e] = f;
							for (var h = 0; h < f.length; h++) {
								var g = f[h];
								void 0 === yb[g] && (yb[g] = h);
							}
						}
					}
					b = xb[b];
					c = [];
					for (d = 0; d < this.length; d += 3) {
						var k = this[d],
							l = (e = d + 1 < this.length) ? this[d + 1] : 0;
						g = (f = d + 2 < this.length) ? this[d + 2] : 0;
						h = k >> 2;
						k = ((k & 3) << 4) | (l >> 4);
						l = ((l & 15) << 2) | (g >> 6);
						g &= 63;
						f || ((g = 64), e || (l = 64));
						c.push(b[h], b[k], b[l] || "", b[g] || "");
					}
					return c.join("");
				};
				try {
					return JSON.stringify(this.h && this.h, Fb);
				} finally {
					Uint8Array.prototype.toJSON = a;
				}
		  }
		: function() {
				return JSON.stringify(this.h && this.h, Fb);
		  };
	var Fb = function(a, b) {
		return "number" !== typeof b ||
			(!isNaN(b) && Infinity !== b && -Infinity !== b)
			? b
			: String(b);
	};
	var Hb = function(a) {
			return a
				? new Gb(9 == a.nodeType ? a : a.ownerDocument || a.document)
				: Da || (Da = new Gb());
		},
		Gb = function(a) {
			this.a = a || u.document || document;
		};
	Gb.prototype.createElement = function(a) {
		var b = this.a;
		a = String(a);
		"application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
		return b.createElement(a);
	};
	Gb.prototype.appendChild = function(a, b) {
		a.appendChild(b);
	};
	var Ib = function() {
		return (
			-1 != C.indexOf("iPad") ||
			(-1 != C.indexOf("Android") && -1 == C.indexOf("Mobile")) ||
			-1 != C.indexOf("Silk")
		);
	};
	var Jb = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
		Kb = function(a) {
			return a ? decodeURI(a) : a;
		};
	var Ob = function(a, b) {
			if (!Lb() && !Mb()) {
				var c = Math.random();
				if (c < b) return (c = Nb(u)), a[Math.floor(c * a.length)];
			}
			return null;
		},
		Nb = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		Pb = function(a, b) {
			if (a)
				for (var c in a)
					Object.prototype.hasOwnProperty.call(a, c) &&
						b.call(void 0, a[c], c, a);
		},
		Mb = Ja(function() {
			return (
				Array.prototype.some.call(
					[
						"Google Web Preview",
						"Mediapartners-Google",
						"Google-Read-Aloud",
						"Google-Adwords"
					],
					Qb,
					void 0
				) || 1e-4 > Math.random()
			);
		}),
		Lb = Ja(function() {
			return Qb("MSIE");
		}),
		Qb = function(a) {
			return -1 != C.indexOf(a);
		},
		Rb = /^(-?[0-9.]{1,30})$/,
		Sb = function(a, b) {
			return Rb.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		Tb = Ja(function() {
			return Ib() ||
				(-1 == C.indexOf("iPod") &&
					-1 == C.indexOf("iPhone") &&
					-1 == C.indexOf("Android") &&
					-1 == C.indexOf("IEMobile"))
				? Ib()
					? 1
					: 0
				: 2;
		}),
		Ub = function() {
			var a = void 0 === a ? window : a;
			if ((a = Kb(a.location.href.match(Jb)[3] || null))) {
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
	var M = function() {
		this.a = this.a;
		this.b = this.b;
	};
	M.prototype.a = !1;
	M.prototype.m = function() {
		if (this.b) for (; this.b.length; ) this.b.shift()();
	};
	var Wb = function(a) {
			var b =
				"https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_dupeid";
			Pb(a, function(c, d) {
				c && (b += "&" + d + "=" + encodeURIComponent(c));
			});
			Vb(b);
		},
		Vb = function(a) {
			var b = window;
			if (b.fetch)
				b.fetch(a, {
					keepalive: !0,
					credentials: "include",
					redirect: "follow",
					method: "get",
					mode: "no-cors"
				});
			else {
				b.google_image_requests || (b.google_image_requests = []);
				var c = b.document.createElement("img");
				c.src = a;
				b.google_image_requests.push(c);
			}
		};
	var Xb = {};
	var Yb = function() {},
		Zb = function(a, b) {
			if (b !== Xb) throw Error("Bad secret");
			this.a = a;
		};
	ra(Zb, Yb);
	Zb.prototype.toString = function() {
		return this.a;
	};
	new Zb("about:blank", Xb);
	new Zb("about:invalid#zTSz", Xb);
	var ac = function(a) {
		G(this, a, $b, null);
	};
	w(ac, F);
	var $b = [6];
	var bc = function(a, b, c, d, e, f) {
		try {
			var h = a.a,
				g = a.createElement("SCRIPT");
			g.async = !0;
			g.src = Pa(b);
			wb(g);
			h.head.appendChild(g);
			g.addEventListener("load", function() {
				e();
				d && h.head.removeChild(g);
			});
			g.addEventListener("error", function() {
				0 < c ? bc(a, b, c - 1, d, e, f) : (d && h.head.removeChild(g), f());
			});
		} catch (k) {
			f();
		}
	};
	var cc = function(a) {
		var b = a.document,
			c = Hb(a),
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
	var dc = function(a, b) {
		this.a = a;
		this.b = Hb(this.a);
		this.c = b;
	};
	dc.prototype.start = function() {
		try {
			cc(this.a), ec(this);
		} catch (a) {}
	};
	var ec = function(a) {
		var b = Sa({ id: a.c, ers: 3 });
		bc(a.b, b, 0, !1, function() {}, function() {});
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
						a = u.top.location.hash;
					} catch (c) {
						a = u.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						gc = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return gc;
		};
	var kc = function(a) {
		G(this, a, ic, jc);
	};
	w(kc, F);
	var ic = [2, 8],
		jc = [[3, 4, 5], [6, 7]];
	var lc = function(a) {
			return null != a ? !a : a;
		},
		mc = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		oc = function(a, b) {
			var c = L(a, kc, 2);
			if (!c.length) return nc(a, b);
			a = I(a, 1, 0);
			if (1 == a) return lc(oc(c[0], b));
			c = Fa(c, function(d) {
				return function() {
					return oc(d, b);
				};
			});
			switch (a) {
				case 2:
					return mc(c, !1);
				case 3:
					return mc(c, !0);
			}
		},
		nc = function(a, b) {
			var c = Cb(a, jc[0]);
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
								a = Db(a, 6);
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
		pc = function(a, b) {
			return !a || !(!b || !oc(a, b));
		};
	var rc = function(a) {
		G(this, a, qc, null);
	};
	w(rc, F);
	var qc = [4];
	var N = function(a) {
		G(this, a, sc, tc);
	};
	w(N, F);
	var uc = function(a) {
		G(this, a, null, null);
	};
	w(uc, F);
	var sc = [5],
		tc = [[1, 2, 3, 6, 7]];
	var O = function() {
		var a = {};
		this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
	};
	v(O);
	var vc = /^true$/.test("false");
	var wc = vc,
		xc = function(a, b) {
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
		yc = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return (a = H(a, 1)), (a = null == a ? a : !!a), null == a ? !1 : a;
				case 7:
					return I(a, 3, "");
				case 2:
					return Db(a, 2);
				case 3:
					return I(a, 3, "");
				case 6:
					return H(a, 4);
				default:
					return null;
			}
		},
		zc = Ja(function() {
			if (!wc) return {};
			try {
				var a =
					window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
				if (a) return JSON.parse(a);
			} catch (b) {}
			return {};
		}),
		Cc = function(a, b, c, d) {
			d = void 0 === d ? 0 : d;
			var e = zc();
			if (e[a] && null != e[a][b]) return e[a][b];
			b = Ac(d)[a][b];
			if (!b) return c;
			b = new N(b);
			b = Bc(b);
			a = yc(b, a);
			return null != a ? a : c;
		},
		Bc = function(a) {
			var b = O.f().a;
			if (b) {
				var c = Ha(L(a, uc, 5), function(d) {
					return pc(K(d, kc, 1), b);
				});
				if (c) return K(c, rc, 2);
			}
			return K(a, rc, 4);
		},
		Dc = function() {
			this.a = {};
			this.b = [];
		};
	v(Dc);
	var Ec = function(a, b, c) {
			return !!Cc(1, a, void 0 === b ? !1 : b, c);
		},
		Fc = function(a, b, c) {
			b = void 0 === b ? 0 : b;
			a = Number(Cc(2, a, b, c));
			return isNaN(a) ? b : a;
		},
		Gc = function(a, b, c) {
			return Cc(3, a, void 0 === b ? "" : b, c);
		},
		Hc = function(a, b, c) {
			b = void 0 === b ? [] : b;
			return Cc(6, a, b, c);
		},
		Ac = function(a) {
			var b = {};
			return (
				Dc.f().a[a] ||
				(Dc.f().a[a] = ((b[1] = {}), (b[2] = {}), (b[3] = {}), (b[6] = {}), b))
			);
		},
		Ic = function(a, b) {
			var c = Ac(b);
			Pb(a, function(d, e) {
				return Pb(d, function(f, h) {
					return (c[e][h] = f);
				});
			});
		},
		Jc = function(a, b) {
			var c = Ac(b);
			x(a, function(d) {
				var e = Cb(d, tc[0]),
					f = xc(d, e);
				f && (c[e][f] = d.h);
			});
		},
		Kc = function(a, b) {
			var c = Ac(b);
			x(a, function(d) {
				var e = new N(d),
					f = Cb(e, tc[0]);
				(e = xc(e, f)) && (c[f][e] || (c[f][e] = d));
			});
		},
		Lc = function() {
			return Fa(n(Object, "keys").call(Object, Dc.f().a), function(a) {
				return Number(a);
			});
		},
		Mc = function(a) {
			Ia(Dc.f().b, a) || Ic(Ac(4), a);
		};
	var P = function(a) {
			this.methodName = a;
		},
		Nc = new P(1),
		Oc = new P(15),
		Pc = new P(2),
		Qc = new P(3),
		Rc = new P(4),
		Sc = new P(5),
		Tc = new P(6),
		Uc = new P(7),
		Vc = new P(8),
		Wc = new P(9),
		Xc = new P(10),
		Yc = new P(11),
		Zc = new P(12),
		$c = new P(13),
		ad = new P(14),
		Q = function(a, b, c) {
			c.hasOwnProperty(a.methodName) ||
				Object.defineProperty(c, String(a.methodName), { value: b });
		},
		R = function(a, b, c) {
			return b[a.methodName] || c || function() {};
		},
		bd = function(a) {
			Q(Sc, Ec, a);
			Q(Tc, Fc, a);
			Q(Uc, Gc, a);
			Q(Vc, Hc, a);
			Q($c, Kc, a);
			Q(Oc, Mc, a);
		},
		cd = function(a) {
			Q(
				Rc,
				function(b) {
					O.f().a = b;
				},
				a
			);
			Q(
				Wc,
				function(b, c) {
					var d = O.f();
					d.a[3][b] || (d.a[3][b] = c);
				},
				a
			);
			Q(
				Xc,
				function(b, c) {
					var d = O.f();
					d.a[4][b] || (d.a[4][b] = c);
				},
				a
			);
			Q(
				Yc,
				function(b, c) {
					var d = O.f();
					d.a[5][b] || (d.a[5][b] = c);
				},
				a
			);
			Q(
				ad,
				function(b) {
					for (
						var c = O.f(), d = r([3, 4, 5]), e = d.next();
						!e.done;
						e = d.next()
					)
						(e = e.value), Ca(c.a[e], b[e]);
				},
				a
			);
		},
		dd = function(a) {
			a.hasOwnProperty("init-done") ||
				Object.defineProperty(a, "init-done", { value: !0 });
		};
	var ed = function() {
			this.a = function() {};
			this.b = function() {
				return [];
			};
		},
		fd = function(a, b, c) {
			a.a = function(d) {
				R(Pc, b, function() {
					return [];
				})(d, c);
			};
			a.b = function() {
				return R(Qc, b, function() {
					return [];
				})(c);
			};
		};
	v(ed);
	var gd = function(a, b) {
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
			} catch (h) {}
		},
		hd = function() {
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
				return Ia(ed.f().b(), parseInt(b, 10));
			}),
			(a[27] = function(b) {
				b = gd(b, "boolean");
				return void 0 !== b ? b : void 0;
			}),
			a);
			a = {};
			this[4] = ((a[3] = function() {
				return Tb();
			}),
			(a[6] = function(b) {
				b = gd(b, "number");
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
				b = gd(b, "string");
				return void 0 !== b ? b : void 0;
			}),
			a);
		};
	v(hd);
	var id = function() {
		var a = void 0 === a ? u : a;
		return a.ggeac || (a.ggeac = {});
	};
	var kd = function(a) {
		G(this, a, jd, null);
	};
	w(kd, F);
	var jd = [2];
	kd.prototype.getId = function() {
		return I(this, 1, 0);
	};
	kd.prototype.u = function() {
		return I(this, 7, 0);
	};
	var md = function(a) {
		G(this, a, ld, null);
	};
	w(md, F);
	var ld = [2];
	md.prototype.u = function() {
		return I(this, 5, 0);
	};
	var od = function(a) {
		G(this, a, nd, null);
	};
	w(od, F);
	var S = function(a) {
		G(this, a, pd, null);
	};
	w(S, F);
	var nd = [1, 4, 2, 3],
		pd = [2];
	S.prototype.u = function() {
		return I(this, 1, 0);
	};
	var qd = [12, 13],
		rd = function() {},
		sd = function(a, b, c, d) {
			d = void 0 === d ? {} : d;
			var e = void 0 === d.L ? !1 : d.L,
				f = void 0 === d.M ? {} : d.M;
			d = void 0 === d.N ? [] : d.N;
			a.a = b;
			a.j = e;
			a.g = f;
			b = {};
			a.b = ((b[c] = []), (b[4] = []), b);
			a.c = {};
			(c = hc()) &&
				x(c.split(",") || [], function(h) {
					(h = parseInt(h, 10)) && (a.c[h] = !0);
				});
			x(d, function(h) {
				a.c[h] = !0;
			});
			return a;
		},
		xd = function(a, b, c) {
			var d = [],
				e = td(a.a, b);
			if (e.length) {
				9 !== b && (a.a = ud(a.a, b));
				var f = Ia(qd, b);
				x(e, function(h) {
					if ((h = vd(a, h, c))) {
						var g = h.getId();
						d.push(g);
						wd(a, g, f ? 4 : c);
						var k = L(h, N, 2);
						k &&
							(f
								? x(Lc(), function(l) {
										return Jc(k, l);
								  })
								: Jc(k, c));
					}
				});
			}
			return d;
		},
		wd = function(a, b, c) {
			a.b[c] || (a.b[c] = []);
			a = a.b[c];
			Ia(a, b) ? Wb({ eids: JSON.stringify(a), dup: b }) : a.push(b);
		},
		yd = function(a, b) {
			a.a.push.apply(
				a.a,
				ka(
					Ea(
						Fa(b, function(c) {
							return new S(c);
						}),
						function(c) {
							return !Ia(qd, c.u());
						}
					)
				)
			);
		},
		vd = function(a, b, c) {
			var d = O.f().a;
			if (!pc(K(b, kc, 3), d)) return null;
			var e = L(b, kd, 2),
				f = e.length * I(b, 1, 0),
				h = I(b, 6, 0);
			if (h) {
				f = d[4];
				switch (c) {
					case 2:
						var g = f[8];
						break;
					case 1:
						g = f[7];
				}
				f = null;
				if (g)
					try {
						f = g(h);
					} catch (k) {}
				null === f && (f = Math.floor(1e3 * Nb(window)));
				b = zd(b, f);
				return !b || (d && !pc(K(b, kc, 3), d)) ? null : Ad(a, [b], 1);
			}
			h = d
				? Ea(e, function(k) {
						return pc(K(k, kc, 3), d);
				  })
				: e;
			return h.length
				? (b = I(b, 4, 0))
					? Bd(a, b, f, h)
					: Ad(a, h, f / 1e3)
				: null;
		},
		Bd = function(a, b, c, d) {
			var e = null != a.g[b] ? a.g[b] : 1e3;
			if (0 >= e) return null;
			d = Ad(a, d, c / e);
			a.g[b] = d ? 0 : e - c;
			return d;
		},
		Ad = function(a, b, c) {
			var d = a.c,
				e = Ga(b, function(f) {
					return !!d[f.getId()];
				});
			return e ? e : a.j ? null : Ob(b, c);
		},
		Cd = function(a, b) {
			Q(
				Nc,
				function(c) {
					a.c[c] = !0;
				},
				b
			);
			Q(
				Pc,
				function(c, d) {
					return xd(a, c, d);
				},
				b
			);
			Q(
				Qc,
				function(c) {
					return (a.b[c] || []).concat(a.b[4]);
				},
				b
			);
			Q(
				Zc,
				function(c) {
					return yd(a, c);
				},
				b
			);
		};
	v(rd);
	var td = function(a, b) {
			return (
				((a = Ga(a, function(c) {
					return c.u() == b;
				})) &&
					L(a, md, 2)) ||
				[]
			);
		},
		ud = function(a, b) {
			return Ea(a, function(c) {
				return c.u() != b;
			});
		},
		zd = function(a, b) {
			var c = L(a, kd, 2),
				d = c.length,
				e = I(a, 1, 0);
			a = I(a, 8, 0);
			var f = (b - a) % d;
			return b < a || b - a - f >= d * e - 1 ? null : c[f];
		};
	var Dd = function() {
			this.b = function(a, b) {
				return void 0 === b ? !1 : b;
			};
			this.c = function(a, b) {
				return void 0 === b ? 0 : b;
			};
			this.a = function() {};
		},
		Ed = function(a, b, c) {
			a.b = function(d, e) {
				return R(Sc, b)(d, e, c);
			};
			a.c = function(d, e) {
				return R(Tc, b)(d, e, c);
			};
			a.a = function() {
				R(Oc, b)(c);
			};
		};
	v(Dd);
	var T = function(a) {
			var b = void 0 === b ? !1 : b;
			return Dd.f().b(a, b);
		},
		Fd = function(a) {
			var b = void 0 === b ? 0 : b;
			return Dd.f().c(a, b);
		};
	var Gd = function() {
		this.a = function() {};
	};
	v(Gd);
	var Hd = function(a) {
		Gd.f().a(a);
	};
	var Kd = function(a) {
			var b = Id.f(),
				c = { L: U(211), M: U(227), N: U(226) },
				d = void 0,
				e = 2;
			d = void 0 === d ? id() : d;
			e = void 0 === e ? 0 : e;
			d.hasOwnProperty("init-done")
				? (R(Zc, d)(
						Fa(L(a, S, 2), function(f) {
							return f.h;
						})
				  ),
				  R($c, d)(
						Fa(L(a, N, 1), function(f) {
							return f.h;
						}),
						e
				  ),
				  b && R(ad, d)(b),
				  Jd(d, e))
				: (Cd(sd(rd.f(), L(a, S, 2), e, c), d),
				  bd(d),
				  cd(d),
				  dd(d),
				  Jd(d, e),
				  Jc(L(a, N, 1), e),
				  (wc = wc || !(!c || !c.S)),
				  Hd(hd.f()),
				  b && Hd(b));
		},
		Jd = function(a, b) {
			a = void 0 === a ? id() : a;
			b = void 0 === b ? 0 : b;
			var c = a,
				d = b;
			d = void 0 === d ? 0 : d;
			fd(ed.f(), c, d);
			c = a;
			b = void 0 === b ? 0 : b;
			Ed(Dd.f(), c, b);
			Gd.f().a = R(ad, a);
			Dd.f().a();
		};
	var Ld = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Md = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		Nd = u,
		V,
		W,
		Od = function() {
			Nd = u;
			V = Nd.googleToken = Nd.googleToken || {};
			var a = Date.now();
			(V[1] && V[3] > a && 0 < V[2]) ||
				((V[1] = ""), (V[2] = -1), (V[3] = -1), (V[4] = ""), (V[6] = ""));
			W = Nd.googleIMState = Nd.googleIMState || {};
			a = W[1];
			(Ld.test(a) && !Md.test(a)) || (W[1] = ".google.com");
			Array.isArray(W[5]) || (W[5] = []);
			"boolean" !== typeof W[6] && (W[6] = !1);
			Array.isArray(W[7]) || (W[7] = []);
			"number" !== typeof W[8] && (W[8] = 0);
		};
	var Pd = function(a) {
		a = void 0 === a ? u : a;
		return (a = a.performance) && a.now ? a.now() : null;
	};
	var X = u.performance,
		Qd = !!(X && X.mark && X.measure && X.clearMarks),
		Rd = Ja(function() {
			var a;
			if ((a = Qd)) (a = hc()), (a = !!a.indexOf && 0 <= a.indexOf("1337"));
			return a;
		});
	var Sd = function(a, b, c) {
			this.a = void 0 === a ? null : a;
			this.g = void 0 === b ? "jserror" : b;
			this.b = null;
			this.c = void 0 === c ? 0.01 : c;
			this.m = this.j;
			this.s = null;
		},
		Td = function(a, b) {
			a.b = b;
		};
	Sd.prototype.j = function(a, b, c, d, e) {
		c = void 0 === c ? this.c : c;
		e = void 0 === e ? this.g : e;
		if (Math.random() > c) return !1;
		(b.error && b.meta && b.id) || (b = new fc(b, { context: a, id: e }));
		if (d || this.b) (b.meta = {}), this.b && this.b(b.meta), d && d(b.meta);
		u.google_js_errors = u.google_js_errors || [];
		u.google_js_errors.push(b);
		u.error_rep_loaded ||
			((c = u.location.protocol),
			(a = u.document),
			(b = this.s) ||
				(b = new A(
					c + "//pagead2.googlesyndication.com/pagead/js/err_rep.js",
					Oa
				)),
			(c = a.createElement("script")),
			(c.src = Pa(b)),
			wb(c),
			(a = a.getElementsByTagName("script")[0]) &&
				a.parentNode &&
				a.parentNode.insertBefore(c, a),
			(u.error_rep_loaded = !0));
		return !1;
	};
	var Ud = function(a, b) {
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
					Rd() &&
					(X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_start"),
					X.clearMarks("goog_" + b.label + "_" + b.uniqueId + "_end")),
				!a.m(420, d, a.c, void 0, a.g))
			)
				throw d;
		}
	};
	var Vd = z("gpt/pubads_impl_"),
		Wd = z("https://securepubads.g.doubleclick.net/");
	var Xd = function(a) {
			var b = Pd(a);
			b &&
				((b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				2048 > a.length && a.push(b));
		},
		Yd = function(a, b, c) {
			var d = window;
			return function() {
				var e = Pd(),
					f = 3;
				try {
					var h = b.apply(this, arguments);
				} catch (g) {
					f = 13;
					if (c) return c(a, g), h;
					throw g;
				} finally {
					d.google_measure_js_timing &&
						e &&
						((e = {
							label: a.toString(),
							value: e,
							duration: (Pd() || 0) - e,
							type: f
						}),
						(f = d.google_js_reporting_queue =
							d.google_js_reporting_queue || []),
						2048 > f.length && f.push(e));
				}
				return h;
			};
		},
		Zd = function(a, b) {
			return Yd(a, b, function(c, d) {
				new Sd().j(c, d);
			});
		};
	function Y(a, b) {
		return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b);
	}
	var $d = new m.Set();
	function ae(a) {
		a = a.id;
		return (
			$d.has(a) ||
			n(a, "startsWith").call(a, "google_ads_iframe_") ||
			n(a, "startsWith").call(a, "aswift")
		);
	}
	function be(a, b) {
		b = void 0 === b ? 4 : b;
		if (!a) return !1;
		if (ae(a)) return !0;
		if (0 >= b) return !1;
		a = r(a.childNodes);
		for (var c = a.next(); !c.done; c = a.next())
			if (be(c.value, b - 1)) return !0;
		return !1;
	}
	var ce = function() {
		M.call(this);
		this.P = this.H = this.I = this.c = this.C = this.B = this.j = 0;
		this.G = !1;
		this.D = this.s = this.g = 0;
		var a = document.querySelector("[data-google-query-id]");
		this.K = a ? a.getAttribute("data-google-query-id") : null;
		this.F = null;
		this.J = !1;
		this.O = function() {};
	};
	ra(ce, M);
	var fe = function() {
			var a = new ce();
			if (T(203) && !window.google_plmetrics && window.PerformanceObserver) {
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
					(c = c.value), de(a).observe({ type: c, buffered: !T(240) });
				ee(a);
			}
		},
		de = function(a) {
			a.F ||
				(a.F = new PerformanceObserver(
					Zd(640, function(b) {
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
												$d.clear();
												for (
													var f = r(e.getSlots()), h = f.next();
													!h.done;
													h = f.next()
												)
													$d.add(h.value.getSlotId().getDomId());
											}
										} catch (p) {}
										c = !0;
									}
									var g = a;
									if (!d.hadRecentInput && (!T(241) || 0.01 < d.value)) {
										g.j += Number(d.value);
										Number(d.value) > g.B && (g.B = Number(d.value));
										g.C += 1;
										a: {
											if (d.sources) {
												var k = r(d.sources);
												for (var l = k.next(); !l.done; l = k.next())
													if (be(l.value.node)) {
														k = !0;
														break a;
													}
											}
											k = !1;
										}
										k && ((g.c += d.value), g.I++);
									}
									break;
								case "largest-contentful-paint":
									a.H = Math.floor(d.renderTime || d.loadTime);
									break;
								case "first-input":
									a.P = Number((d.processingStart - d.startTime).toFixed(3));
									a.G = !0;
									break;
								case "longtask":
									(a.g += d.duration),
										d.duration > a.s && (a.s = d.duration),
										(a.D += 1);
							}
					})
				));
			return a.F;
		},
		ee = function(a) {
			var b = Zd(641, function() {
					var f = document;
					2 ==
						({ visible: 1, hidden: 2, prerender: 3, preview: 4, unloaded: 5 }[
							f.visibilityState ||
								f.webkitVisibilityState ||
								f.mozVisibilityState ||
								""
						] || 0) && ge(a);
				}),
				c = Zd(641, function() {
					return void ge(a);
				});
			document.addEventListener("visibilitychange", b);
			document.addEventListener("unload", c);
			var d = Fd(1905),
				e;
			0 < d && (e = setTimeout(c, 1e3 * d));
			a.O = function() {
				document.removeEventListener("visibilitychange", b);
				document.removeEventListener("unload", c);
				de(a).disconnect();
				e && clearTimeout(e);
			};
		};
	ce.prototype.m = function() {
		M.prototype.m.call(this);
		this.O();
	};
	var ge = function(a) {
		if (!a.J) {
			a.J = !0;
			de(a).takeRecords();
			var b =
				"https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
			window.LayoutShift &&
				((b += "&cls=" + a.j.toFixed(3)),
				(b += "&mls=" + a.B.toFixed(3)),
				(b += Y("nls", a.C)),
				window.LayoutShiftAttribution &&
					((b += "&cas=" + a.c.toFixed(3)), (b += Y("nas", a.I))));
			window.LargestContentfulPaint && (b += Y("lcp", a.H));
			window.PerformanceEventTiming && a.G && (b += Y("fid", a.P));
			window.PerformanceLongTaskTiming &&
				((b += Y("cbt", a.g)), (b += Y("mbt", a.s)), (b += Y("nlt", a.D)));
			for (
				var c = 0, d = r(document.getElementsByTagName("iframe")), e = d.next();
				!e.done;
				e = d.next()
			)
				ae(e.value) && c++;
			b += Y("nif", c);
			c = window.google_unique_id;
			b += Y("ifi", "number" === typeof c ? c : 0);
			c = ed.f().b();
			b += "&eid=" + encodeURIComponent(c.join());
			b += "&top=" + (u === u.top ? 1 : 0);
			if (a.K) c = "&qqid=" + encodeURIComponent(a.K);
			else {
				if ("number" !== typeof u.goog_pvsid)
					try {
						Object.defineProperty(u, "goog_pvsid", {
							value: Math.floor(Math.random() * Math.pow(2, 52))
						});
					} catch (f) {}
				c = Y("pvsid", Number(u.goog_pvsid) || -1);
			}
			window.fetch(b + c, {
				keepalive: !0,
				credentials: "include",
				redirect: "follow",
				method: "get",
				mode: "no-cors"
			});
			a.a || ((a.a = !0), a.m());
		}
	};
	var he = [
			{
				issuerOrigin: "https://adservice.google.com",
				issuancePath: "/tt/i",
				redemptionPath: "/tt/r"
			}
		],
		je = function(a) {
			M.call(this);
			this.j = he;
			this.g = a;
			this.c = ie(this);
		};
	ra(je, M);
	var ie = function(a) {
			var b = a.j.map(function(c) {
				return {
					issuerOrigin: c.issuerOrigin,
					state: document.hasTrustToken ? 1 : 0
				};
			});
			a.g(b);
			return b;
		},
		ke = function(a, b, c) {
			var d = n(a.c, "findIndex").call(a.c, function(e) {
				return e.issuerOrigin === b;
			});
			0 <= d && ((a.c[d].state = c), a.g(a.c));
		},
		le = function(a) {
			document.hasTrustToken &&
				a.j.forEach(function(b) {
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
							ke(a, b.issuerOrigin, 6);
						})
						.catch(function(c) {
							c && "NoModificationAllowedError" === c.name
								? ke(a, b.issuerOrigin, 6)
								: ke(a, b.issuerOrigin, 5);
						});
					ke(a, b.issuerOrigin, 2);
				});
		};
	var me = [
			"platform",
			"platformVersion",
			"architecture",
			"model",
			"uaFullVersion"
		],
		ne = function(a) {
			return a.navigator &&
				a.navigator.userAgentData &&
				"function" === typeof a.navigator.userAgentData.getHighEntropyValues
				? a.navigator.userAgentData.getHighEntropyValues(me).then(function(b) {
						var c = new ac();
						c = J(c, 1, b.platform);
						c = J(c, 2, b.platformVersion);
						c = J(c, 3, b.architecture);
						c = J(c, 4, b.model);
						return J(c, 5, b.uaFullVersion);
				  })
				: null;
		};
	var oe = function() {
			return u.googletag || (u.googletag = {});
		},
		pe = function(a, b) {
			var c = oe();
			c.hasOwnProperty(a) || (c[a] = b);
		},
		qe = function(a, b) {
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
	Z[148] = vc;
	Z[221] = /^true$/.test("");
	Z[204] = Sb("{{MOD}}", -1);
	var re = function() {
		Ca(this, Z);
	};
	v(re);
	var U = function(a) {
			return re.f()[a];
		},
		se = oe(),
		te = re.f();
	Ca(te, se._vars_);
	se._vars_ = te;
	var ue = new m.WeakMap(),
		ve = function(a, b) {
			a = [a];
			for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
			return a.join("\x0B");
		};
	var we = (function(a, b) {
			b = void 0 === b ? ve : b;
			var c = Ba(a),
				d = function(e) {
					e = r(e);
					e.next();
					e = ja(e);
					return b(c, e);
				};
			return function(e) {
				for (var f = [], h = 0; h < arguments.length; ++h) f[h] = arguments[h];
				h = this || u;
				var g = ue.get(h);
				g || ((g = {}), ue.set(h, g));
				h = g;
				g = [this].concat(ka(f));
				f = d ? d(g) : g;
				if (Object.prototype.hasOwnProperty.call(h, f)) h = h[f];
				else {
					var k = r(g);
					g = k.next().value;
					k = ja(k);
					g = a.apply(g, k);
					h = h[f] = g;
				}
				return h;
			};
		})(
			function(a) {
				return a && a.src
					? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|pagead2\.googlesyndication\.com)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(
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
		xe = function() {
			return 0 === we(U(172));
		};
	var ye = function() {
		return Sb("7") || 0;
	};
	pe("getVersion", function() {
		return "2020091601";
	});
	var Id = function() {
		var a = {};
		this[3] = ((a[3] = xe),
		(a[2] = U(36)),
		(a[17] = function(b) {
			for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
			return n(c, "includes").call(c, String(Ub()));
		}),
		(a[21] = function() {
			return U(148);
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return U(204);
		}),
		(a[4] = ye),
		a);
		a = {};
		this[5] = ((a[5] = function() {
			var b = U(172);
			return b ? Kb(b.src.match(Jb)[3] || null) : void 0;
		}),
		a);
	};
	v(Id);
	var ze = [],
		Ae = function(a) {
			var b = new od(U(246));
			a = new od(a || ze);
			if (!L(b, N, 1).length && L(a, N, 1).length) {
				var c = L(a, N, 1);
				Eb(b, 1, c);
			}
			!L(b, S, 2).length &&
				L(a, S, 2).length &&
				((a = L(a, S, 2)), Eb(b, 2, a));
			Kd(b);
		};
	var Be = function(a) {
			if ((a = a.scripts))
				for (var b = 0; b < a.length; b++) {
					var c = a[b];
					if (-1 < c.src.indexOf("/tag/js/gpt")) return c;
				}
			return null;
		},
		Ce = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		De = function() {
			var a = [
				T(393) ? z("https://pagead2.googlesyndication.com/") : Wd,
				Vd,
				z("2020091601"),
				z(".js")
			];
			var b = "";
			for (var c = 0; c < a.length; c++) b += Na(a[c]);
			b = new A(b, Oa);
			(a = Fd(24))
				? ((a = String(a)),
				  (b = Ta.exec(Pa(b).toString())),
				  (c = b[3] || ""),
				  (a = new A(b[1] + Ua("?", b[2] || "", a) + Ua("#", c, void 0), Oa)))
				: (a = b);
			return a;
		},
		Ee = function(a, b, c) {
			a = a.currentScript || Be(a);
			re.f()[172] = a;
			new Ae(b);
			ed.f().a(12);
			ed.f().a(5);
			T(200) ||
				T(220) ||
				((b = U(150)), Od(), Ld.test(b) && !Md.test(b) && (W[1] = b));
			T(312) &&
				le(
					new je(function(d) {
						re.f()[250] = d;
					})
				);
			T(363) &&
				(b = ne(c)) &&
				b.then(function(d) {
					d = d.j();
					re.f()[251] = d;
				});
			b = "";
			T(349) &&
				a &&
				a.hasAttribute("data-load-fc") &&
				(b = a.getAttribute("data-network-id")) &&
				new dc(c, b).start();
		},
		Fe = function(a, b, c) {
			var d = oe();
			a = a || d.fifWin || window;
			b = b || a.document;
			var e = d.fifWin ? window : a;
			pe("cmd", []);
			if (d.evalScripts) d.evalScripts();
			else {
				Ee(b, c, a);
				try {
					fe();
				} catch (g) {}
				Xd(a);
				a = De();
				if (Ce(b)) {
					c = "gpt-impl-" + Math.random();
					try {
						vb(b, sb(a, { id: c, nonce: wa() }));
					} catch (g) {}
					b.getElementById(c) && (d._loadStarted_ = !0);
				}
				if (!d._loadStarted_) {
					b = d.fifWin ? e.document : b;
					var f = b.createElement("script");
					f.src = Pa(a);
					wb(f);
					f.async = !0;
					var h = b.head || b.body || b.documentElement;
					"complete" !== e.document.readyState && d.fifWin
						? qe(e, function() {
								return void h.appendChild(f);
						  })
						: h.appendChild(f);
					d._loadStarted_ = !0;
				}
			}
		};
	var Ge;
	a: {
		try {
			if (Array.isArray(E)) {
				Ge = E;
				break a;
			}
		} catch (a) {}
		Ge = [];
	}
	(function(a, b, c) {
		var d = new Sd(null, "gpt_exception", 0.01);
		Td(d, function(e) {
			e.methodId = 420;
		});
		Ud(d, function() {
			return Fe(a, b, c);
		});
	})(void 0, void 0, Ge);
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, [
	[
		[419, null, null, [1]],
		[269, null, null, [1]],
		[351, null, null, [1]],
		[null, 7, null, [null, 0.1]],
		[347, null, null, [1]],
		[1902, null, null, [1]],
		[322, null, null, [1]],
		[20, null, null, null, [[[1, [[6, null, null, 3, null, 0]]], [1]]]],
		[null, 45, null, [null, 0.5]],
		[252, null, null, [1]],
		[374, null, null, [1]],
		[null, null, null, [], null, 428],
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
		[338, null, null, [1]],
		[312, null, null, [1]],
		[239, null, null, [1]],
		[391, null, null, [1]],
		[329, null, null, [1]],
		[null, null, 2, [null, null, "1-0-37"]],
		[411, null, null, [1]],
		[null, 59, null, [null, 1]],
		[422, null, null, [1]],
		[423, null, null, [1]],
		[412, null, null, [1]],
		[421, null, null, [1]],
		[340, null, null, [1]],
		[215, null, null, [1]],
		[377, null, null, [1]],
		[null, 39, null, [null, 72]],
		[null, 38, null, [null, 24]],
		[null, 40, null, [null, 5]],
		[null, 33, null, [null, -1]],
		[363, null, null, [1]],
		[330, null, null, [1]],
		[403, null, null, [1]],
		[354, null, null, [1]],
		[388, null, null, [1]],
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
					[[44718034, [[null, 7, null, [null, 0.02]], [212, null, null, [1]]]]]
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
					10,
					[
						[21067192],
						[21067193, [[98, null, null, [1]]]],
						[21067194, [[98, null, null, [1]]]]
					]
				],
				[
					50,
					[
						[21067199],
						[21067200, [[385, null, null, [1]], [387, null, null, [1]]]],
						[21067201, [[385, null, null, [1]]]]
					],
					null,
					29
				],
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
				[100, [[21067332], [21067333, [[424, null, null, [1]]]]]],
				[100, [[21067341], [21067342, [[406, null, null, [1]]]]]],
				[
					1,
					[
						[21067362],
						[21067363, [[390, null, null, [1]], [177, null, null, [1]]]],
						[21067364, [[399, null, null, [1]]]],
						[21067365, [[389, null, null, [1]]]],
						[21067366, [[389, null, null, [1]], [392, null, null, [1]]]],
						[21067367, [[417, null, null, [1]]]]
					],
					null,
					30
				],
				[100, [[21067374], [21067375, [[426, null, null, [1]]]]]],
				[10, [[21067389], [21067390, [[427, null, null, [1]]]]]],
				[
					1,
					[
						[21067397],
						[21067398, [[308, null, null, [1]], [311, null, null, [1]]]]
					]
				],
				[10, [[21067414], [21067415, [[401, null, null, [1]]]]]],
				[50, [[21067434], [21067435, [[431, null, null, [1]]]]]],
				[10, [[21067447], [21067448, [[430, null, null, [1]]]]]],
				[
					1000,
					[
						[
							21067455,
							[
								[308, null, null, [1]],
								[
									null,
									null,
									null,
									[null, null, null, ["criteotest"]],
									null,
									428
								],
								[311, null, null, [1]]
							],
							[
								4,
								null,
								17,
								null,
								null,
								null,
								null,
								["3312015223", "1819441360"]
							]
						]
					]
				],
				[10, [[21067470], [21067471, [[432, null, null, [1]]]]], null, 30],
				[1, [[21067485]]],
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
				[1, [[21067386, null, [6, null, null, 3, null, 0]]]],
				[1, [[21067387, null, [6, null, null, 3, null, 1]]]],
				[1, [[21067388, null, [6, null, null, 3, null, 2]]]]
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
				],
				[1, [[21067486]]]
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
				[50, [[21066465], [21066466, [[302, null, null, [1]]]]]],
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
				[50, [[21067118], [21067119, [[373, null, null, [1]]]]]],
				[50, [[21067393], [21067394, [[312, null, null, []]]]], null, 21],
				[
					50,
					[[21067395], [21067396, [[312, null, null, []]]]],
					[4, null, 9, null, null, null, null, ["document.hasTrustToken"]],
					21
				],
				[100, [[21067408], [21067409], [21067410]], null, 29],
				[
					1000,
					[
						[
							21067411,
							null,
							[4, null, 6, null, null, null, null, ["21067408"]]
						],
						[
							21067412,
							[
								[null, 24, null, [null, 21067412]],
								[null, 25, null, [null, 21067412]]
							],
							[4, null, 6, null, null, null, null, ["21067409"]]
						],
						[
							21067413,
							[
								[null, 24, null, [null, 21067413]],
								[393, null, null, [1]],
								[null, 25, null, [null, 21067413]]
							],
							[4, null, 6, null, null, null, null, ["21067410"]]
						]
					],
					[
						12,
						null,
						null,
						null,
						5,
						null,
						"www\\.pagead2\\.googlesyndication\\.com"
					],
					29
				],
				[10, [[21067442], [21067443, [[425, null, null, [1]]]]]],
				[
					1000,
					[
						[
							21067449,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21067449]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21067449]]
							],
							[6, null, null, 4, null, 4]
						],
						[
							21067450,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21067450]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21067450]]
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
							21067462,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21067462]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21067462]]
							],
							[6, null, null, 4, null, 2]
						],
						[
							21067463,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21067463]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21067463]]
							],
							[6, null, null, 4, null, 3]
						]
					],
					[4, null, 3],
					1
				],
				[10, [[21067480], [21067481, [[429, null, null, [1]]]]]],
				[
					1000,
					[
						[
							21067482,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21067482]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21067482]]
							],
							[6, null, null, 4, null, 6]
						],
						[
							21067483,
							[
								[null, 7, null, [null, 1]],
								[null, 24, null, [null, 21067483]],
								[60, null, null, [1]],
								[null, 28, null, [null, 0.1]],
								[null, 25, null, [null, 21067483]]
							],
							[6, null, null, 4, null, 7]
						]
					],
					[4, null, 3],
					1
				],
				[1, [[21067484]]],
				[
					1000,
					[[21067489]],
					[4, null, 9, null, null, null, null, ["document.hasTrustToken"]],
					21
				]
			]
		],
		[2, [[1, [[21067487]]]]],
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
				[
					10,
					[
						[21066612],
						[21066613, [[83, null, null, [1]], [84, null, null, [1]]]]
					]
				],
				[50, [[21066705], [21066706, [[382, null, null, [1]]]]]],
				[
					10,
					[
						[44725623],
						[44725624, [[null, 1904, null, [null, 1]]]],
						[44727579, [[null, 1904, null, [null, 2]]]],
						[44727580, [[null, 1904, null, [null, 3]]]]
					],
					null,
					28
				]
			]
		]
	]
]));
