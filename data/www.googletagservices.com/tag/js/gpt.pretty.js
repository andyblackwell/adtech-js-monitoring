(function() {
	var window = this;
	var aa =
			"function" == typeof Object.create
				? Object.create
				: function(a) {
						var b = function() {};
						b.prototype = a;
						return new b();
				  },
		ba;
	if ("function" == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf;
	else {
		var ca;
		a: {
			var da = { H: !0 },
				ea = {};
			try {
				ea.__proto__ = da;
				ca = ea.H;
				break a;
			} catch (a) {}
			ca = !1;
		}
		ba = ca
			? function(a, b) {
					a.__proto__ = b;
					if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
					return a;
			  }
			: null;
	}
	var fa = ba,
		ha = function(a, b) {
			a.prototype = aa(b.prototype);
			a.prototype.constructor = a;
			if (fa) fa(a, b);
			else
				for (var c in b)
					if ("prototype" != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d);
						} else a[c] = b[c];
			a.K = b.prototype;
		},
		g = this,
		k = function(a) {
			return "string" == typeof a;
		},
		l = function(a) {
			return "number" == typeof a;
		},
		ja = function() {
			if (null === m)
				a: {
					var a = g.document;
					if (
						(a = a.querySelector && a.querySelector("script[nonce]")) &&
						(a = a.nonce || a.getAttribute("nonce")) &&
						ia.test(a)
					) {
						m = a;
						break a;
					}
					m = "";
				}
			return m;
		},
		ia = /^[\w+/_-]+[=]{0,2}$/,
		m = null,
		n = function(a) {
			a = a.split(".");
			for (var b = g, c = 0; c < a.length; c++)
				if (((b = b[a[c]]), null == b)) return null;
			return b;
		},
		ka = function() {},
		p = function(a) {
			a.l = void 0;
			a.c = function() {
				return a.l ? a.l : (a.l = new a());
			};
		},
		q = function(a) {
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
		la = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		ma = 0,
		r = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.K = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
			a.L = function(a, c, f) {
				for (
					var d = Array(arguments.length - 2), e = 2;
					e < arguments.length;
					e++
				)
					d[e - 2] = arguments[e];
				return b.prototype[c].apply(a, d);
			};
		};
	var t = function(a, b) {
			for (var c = a.length, d = k(a) ? a.split("") : a, e = 0; e < c; e++)
				e in d && b.call(void 0, d[e], e, a);
		},
		na = function(a, b) {
			for (
				var c = a.length, d = [], e = 0, f = k(a) ? a.split("") : a, h = 0;
				h < c;
				h++
			)
				if (h in f) {
					var u = f[h];
					b.call(void 0, u, h, a) && (d[e++] = u);
				}
			return d;
		},
		oa = function(a, b) {
			for (
				var c = a.length, d = Array(c), e = k(a) ? a.split("") : a, f = 0;
				f < c;
				f++
			)
				f in e && (d[f] = b.call(void 0, e[f], f, a));
			return d;
		},
		pa = function(a, b) {
			a: {
				for (var c = a.length, d = k(a) ? a.split("") : a, e = 0; e < c; e++)
					if (e in d && b.call(void 0, d[e], e, a)) {
						b = e;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : k(a) ? a.charAt(b) : a[b];
		},
		qa = function(a, b) {
			a: {
				var c = a.length,
					d = k(a) ? a.split("") : a;
				for (--c; 0 <= c; c--)
					if (c in d && b.call(void 0, d[c], c, a)) {
						b = c;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : k(a) ? a.charAt(b) : a[b];
		};
	var ra = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		ta = function(a, b) {
			var c = 0;
			a = ra(String(a)).split(".");
			b = ra(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					h = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
					if (0 == f[0].length && 0 == h[0].length) break;
					c =
						sa(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == h[1].length ? 0 : parseInt(h[1], 10)
						) ||
						sa(0 == f[2].length, 0 == h[2].length) ||
						sa(f[2], h[2]);
					f = f[3];
					h = h[3];
				} while (0 == c);
			}
			return c;
		},
		sa = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var w;
	a: {
		var ua = g.navigator;
		if (ua) {
			var va = ua.userAgent;
			if (va) {
				w = va;
				break a;
			}
		}
		w = "";
	}
	var xa = function(a) {
		var b = {},
			c;
		for (c in a) b[c] = a[c];
		return b;
	};
	var x = function(a) {
		x[" "](a);
		return a;
	};
	x[" "] = ka;
	var y = function() {},
		ya = "function" == typeof Uint8Array,
		A = function(a, b, c, d) {
			a.a = null;
			b || (b = []);
			a.N = void 0;
			a.g = -1;
			a.b = b;
			a: {
				if ((b = a.b.length)) {
					--b;
					var e = a.b[b];
					if (
						!(
							null === e ||
							"object" != typeof e ||
							"array" == q(e) ||
							(ya && e instanceof Uint8Array)
						)
					) {
						a.h = b - a.g;
						a.f = e;
						break a;
					}
				}
				a.h = Number.MAX_VALUE;
			}
			a.M = {};
			if (c)
				for (b = 0; b < c.length; b++)
					(e = c[b]),
						e < a.h
							? ((e += a.g), (a.b[e] = a.b[e] || z))
							: (za(a), (a.f[e] = a.f[e] || z));
			if (d && d.length) for (b = 0; b < d.length; b++) Aa(a, d[b]);
		},
		z = [],
		za = function(a) {
			var b = a.h + a.g;
			a.b[b] || (a.f = a.b[b] = {});
		},
		B = function(a, b) {
			if (b < a.h) {
				b += a.g;
				var c = a.b[b];
				return c === z ? (a.b[b] = []) : c;
			}
			if (a.f) return (c = a.f[b]), c === z ? (a.f[b] = []) : c;
		},
		C = function(a, b, c) {
			a = B(a, b);
			return null == a ? c : a;
		},
		Ba = function(a, b) {
			a = B(a, b);
			a = null == a ? a : +a;
			return null == a ? 0 : a;
		},
		Ca = function(a, b, c) {
			b < a.h ? (a.b[b + a.g] = c) : (za(a), (a.f[b] = c));
		},
		Aa = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					h = B(a, f);
				null != h && ((c = f), (d = h), Ca(a, f, void 0));
			}
			return c ? (Ca(a, c, d), c) : 0;
		},
		D = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				var d = B(a, c);
				d && (a.a[c] = new b(d));
			}
			return a.a[c];
		},
		E = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				for (var d = B(a, c), e = [], f = 0; f < d.length; f++)
					e[f] = new b(d[f]);
				a.a[c] = e;
			}
			b = a.a[c];
			b == z && (b = a.a[c] = []);
			return b;
		};
	var Da = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
	var G = function() {
		this.b = "";
		this.g = Ea;
	};
	G.prototype.f = !0;
	G.prototype.a = function() {
		return this.b;
	};
	var Fa = function(a) {
			return a instanceof G && a.constructor === G && a.g === Ea
				? a.b
				: "type_error:TrustedResourceUrl";
		},
		Ea = {};
	var H = function() {
		this.m = "";
		this.G = Ga;
	};
	H.prototype.f = !0;
	H.prototype.a = function() {
		return this.m;
	};
	var Ha = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		Ga = {},
		Ia = function(a) {
			var b = new H();
			b.m = a;
			return b;
		};
	Ia("about:blank");
	var Ja = function(a, b) {
		a.src = Fa(b);
		(b = ja()) && a.setAttribute("nonce", b);
	};
	var La = function(a) {
			Ka();
			var b = new G();
			b.b = a;
			return b;
		},
		Ka = ka;
	var Ma = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var Qa = function(a, b) {
			if (!Na() && !Oa()) {
				var c = Math.random();
				if (c < b) return (c = Pa(g)), a[Math.floor(c * a.length)];
			}
			return null;
		},
		Pa = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		Ra = function() {
			var a = I(210),
				b;
			for (b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
			return !0;
		},
		Oa = Da(function() {
			return -1 != w.indexOf("Google Web Preview") || 1e-4 > Math.random();
		}),
		Na = Da(function() {
			return -1 != w.indexOf("MSIE");
		}),
		Sa = /^(-?[0-9.]{1,30})$/,
		Ta = function(a, b) {
			return Sa.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		Ua = function() {
			try {
				return ja();
			} catch (a) {}
		};
	var Va = function() {
		var a = window,
			b = -1;
		try {
			a.localStorage &&
				(b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10));
		} catch (c) {
			return null;
		}
		if (0 <= b && 1e3 > b) return b;
		if (Oa()) return null;
		b = Math.floor(1e3 * Pa(a));
		try {
			if (a.localStorage)
				return a.localStorage.setItem("google_experiment_mod", "" + b), b;
		} catch (c) {}
		return null;
	};
	var Wa = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.msg = b.message || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var Xa = null,
		Ya = function() {
			if (null === Xa) {
				Xa = "";
				try {
					var a = "";
					try {
						a = g.top.location.hash;
					} catch (c) {
						a = g.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						Xa = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return Xa;
		};
	var $a = function(a) {
		A(this, a, Za, null);
	};
	r($a, y);
	var bb = function(a) {
		A(this, a, ab, null);
	};
	r(bb, y);
	var eb = function(a) {
		A(this, a, cb, db);
	};
	r(eb, y);
	var fb = function(a) {
		A(this, a, null, null);
	};
	r(fb, y);
	var hb = function(a) {
		A(this, a, gb, null);
	};
	r(hb, y);
	var J = function(a) {
		A(this, a, ib, jb);
	};
	r(J, y);
	var Za = [2],
		ab = [2];
	bb.prototype.getId = function() {
		return C(this, 1, 0);
	};
	var cb = [5],
		db = [[1, 2, 3, 6]],
		gb = [4],
		ib = [2, 8],
		jb = [[3, 4, 5], [6, 7]];
	var kb = function(a) {
			return null != a ? !a : a;
		},
		lb = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		nb = function(a, b) {
			var c = E(a, J, 2);
			if (!c.length) return mb(a, b);
			a = C(a, 1, 0);
			if (1 == a) return kb(nb(c[0], b));
			c = oa(c, function(a) {
				return function() {
					return nb(a, b);
				};
			});
			switch (a) {
				case 2:
					return lb(c, !1);
				case 3:
					return lb(c, !0);
			}
		},
		mb = function(a, b) {
			var c = Aa(a, jb[0]);
			a: {
				switch (c) {
					case 3:
						var d = C(a, 3, 0);
						break a;
					case 4:
						d = C(a, 4, 0);
						break a;
					case 5:
						d = C(a, 5, 0);
						break a;
				}
				d = void 0;
			}
			if (d && (b = (b = b[c]) && b[d])) {
				try {
					var e = b.apply(null, B(a, 8));
				} catch (f) {
					return;
				}
				b = C(a, 1, 0);
				if (4 == b) return !!e;
				d = null != e;
				if (5 == b) return d;
				a: {
					switch (c) {
						case 4:
							a = Ba(a, 6);
							break a;
						case 5:
							a = C(a, 7, "");
							break a;
					}
					a = void 0;
				}
				if (null != a) {
					if (6 == b) return e === a;
					if (9 == b) return 0 == ta(e, a);
					if (d)
						switch (b) {
							case 7:
								return e < a;
							case 8:
								return e > a;
							case 12:
								return new RegExp(a).test(e);
							case 10:
								return -1 == ta(e, a);
							case 11:
								return 1 == ta(e, a);
						}
				}
			}
		},
		ob = function(a, b) {
			return !a || !(!b || !nb(a, b));
		};
	var K = function() {
		var a = {};
		this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
	};
	p(K);
	var pb = function(a, b) {
			switch (b) {
				case 1:
					return C(a, 1, 0);
				case 2:
					return C(a, 2, 0);
				case 3:
					return C(a, 3, 0);
				case 6:
					return C(a, 6, 0);
				default:
					return null;
			}
		},
		qb = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return (a = B(a, 1)), (a = null == a ? a : !!a), null == a ? !1 : a;
				case 2:
					return Ba(a, 2);
				case 3:
					return C(a, 3, "");
				case 6:
					return B(a, 4);
				default:
					return null;
			}
		},
		rb = Da(function() {
			var a = "";
			try {
				a = g.top.location.hash;
			} catch (c) {
				a = g.location.hash;
			}
			var b = {};
			if ((a = (a = /\bdflags=({.*})(&|$)/.exec(a)) && a[1]))
				try {
					b = JSON.parse(decodeURIComponent(a));
				} catch (c) {}
			return b;
		}),
		ub = function(a, b, c) {
			var d = rb();
			if (d[a] && null != d[a][b]) return d[a][b];
			b = sb.c().a[a][b];
			if (!b) return c;
			b = new eb(b);
			b = tb(b);
			a = qb(b, a);
			return null != a ? a : c;
		},
		tb = function(a) {
			var b = K.c().a;
			if (b) {
				var c = qa(E(a, fb, 5), function(a) {
					return ob(D(a, J, 1), b);
				});
				if (c) return D(c, hb, 2);
			}
			return D(a, hb, 4);
		},
		sb = function() {
			var a = {};
			this.a = ((a[1] = {}), (a[2] = {}), (a[3] = {}), (a[6] = {}), a);
		};
	p(sb);
	var vb = function(a, b) {
			return ub(1, a, void 0 === b ? !1 : b);
		},
		wb = function(a, b) {
			return ub(2, a, void 0 === b ? 0 : b);
		},
		xb = function(a, b) {
			return ub(3, a, void 0 === b ? "" : b);
		},
		yb = function(a, b) {
			b = void 0 === b ? [] : b;
			return ub(6, a, b);
		},
		zb = function(a) {
			var b = sb.c().a;
			t(a, function(a) {
				var c = Aa(a, db[0]),
					e = pb(a, c);
				e && (b[c][e] = a.b);
			});
		};
	var L = function(a) {
			this.a = a;
		},
		Ab = new L(1),
		Bb = new L(2),
		Cb = new L(3),
		Db = new L(4),
		Eb = new L(5),
		Fb = new L(6),
		Gb = new L(7),
		Hb = new L(8),
		Ib = new L(9),
		Jb = new L(10),
		Kb = new L(11),
		M = function(a, b, c) {
			c.hasOwnProperty(a.a) ||
				Object.defineProperty(c, String(a.a), { value: b });
		},
		N = function(a, b) {
			return b[a.a] || function() {};
		},
		Lb = function(a) {
			M(Eb, vb, a);
			M(Fb, wb, a);
			M(Gb, xb, a);
			M(Hb, yb, a);
		},
		Mb = function(a) {
			M(
				Db,
				function(a) {
					K.c().a = a;
				},
				a
			);
			M(
				Ib,
				function(a, c) {
					var b = K.c();
					b.a[3][a] || (b.a[3][a] = c);
				},
				a
			);
			M(
				Jb,
				function(a, c) {
					var b = K.c();
					b.a[4][a] || (b.a[4][a] = c);
				},
				a
			);
			M(
				Kb,
				function(a, c) {
					var b = K.c();
					b.a[5][a] || (b.a[5][a] = c);
				},
				a
			);
		};
	var Nb = function(a, b) {
			var c = this,
				d = void 0 === b ? {} : b;
			b = void 0 === d.u ? !1 : d.u;
			var e = void 0 === d.w ? {} : d.w;
			d = void 0 === d.C ? [] : d.C;
			this.g = a;
			this.h = b;
			this.b = e;
			this.f = d;
			this.a = {};
			if ((a = Ya()))
				(a = a.split(",") || []),
					t(a, function(a) {
						(a = parseInt(a, 10)) && (c.a[a] = !0);
					});
		},
		Pb = function(a, b) {
			var c = [],
				d = a.g[b];
			d &&
				(9 !== b && delete a.g[b],
				t(d, function(b) {
					if ((b = Ob(a, new $a(b)))) {
						var d = b.getId();
						c.push(d);
						a.f.push(d);
						(b = E(b, eb, 2)) && zb(b);
					}
				}));
			return c;
		},
		Ob = function(a, b) {
			var c = K.c().a;
			if (!ob(D(b, J, 3), c)) return null;
			var d = E(b, bb, 2),
				e = c
					? na(d, function(a) {
							return ob(D(a, J, 3), c);
					  })
					: d,
				f = e.length;
			if (!f) return null;
			d = C(b, 4, 0);
			b = f * C(b, 1, 0);
			if (!d) return Qb(a, e, b / 1e3);
			f = null != a.b[d] ? a.b[d] : 1e3;
			if (0 >= f) return null;
			e = Qb(a, e, b / f);
			a.b[d] = e ? 0 : f - b;
			return e;
		},
		Qb = function(a, b, c) {
			var d = a.a,
				e = pa(b, function(a) {
					return !!d[a.getId()];
				});
			return e ? e : a.h ? null : Qa(b, c);
		},
		Rb = function(a, b) {
			M(
				Ab,
				function(b) {
					a.a[b] = !0;
				},
				b
			);
			M(
				Bb,
				function(b) {
					return void Pb(a, b);
				},
				b
			);
			M(
				Cb,
				function() {
					return a.f;
				},
				b
			);
			Lb(b);
			Mb(b);
		};
	var P = function() {
			this.a = function() {
				return !1;
			};
			this.b = function() {
				return 0;
			};
			this.f = function() {
				return "";
			};
			this.g = function() {
				return [];
			};
		},
		Sb = function(a) {
			var b = P.c();
			b.a = N(Eb, a);
			b.b = N(Fb, a);
			b.f = N(Gb, a);
			b.g = N(Hb, a);
		};
	p(P);
	var Q = function(a) {
			var b = void 0 === b ? !1 : b;
			return P.c().a(a, b);
		},
		Tb = function(a) {
			var b = void 0 === b ? 0 : b;
			return P.c().b(a, b);
		},
		Ub = function(a, b) {
			b = void 0 === b ? "" : b;
			return P.c().f(a, b);
		};
	var Vb = function() {};
	p(Vb);
	var Wb = Da(function() {
			var a = (g.navigator && g.navigator.userAgent) || "";
			a = a.toLowerCase();
			return (
				-1 != a.indexOf("firefox/") ||
				-1 != a.indexOf("chrome/") ||
				-1 != a.indexOf("opr/")
			);
		}),
		R = function(a, b, c, d, e) {
			d = void 0 === d ? "" : d;
			var f = a.createElement("link");
			try {
				f.rel = c;
				if (-1 != c.toLowerCase().indexOf("stylesheet")) var h = Fa(b);
				else {
					if (b instanceof G) var u = Fa(b);
					else {
						if (b instanceof H)
							var v =
								b instanceof H && b.constructor === H && b.G === Ga
									? b.m
									: "type_error:SafeUrl";
						else {
							if (b instanceof H) var O = b;
							else
								(b = "object" == typeof b && b.f ? b.a() : String(b)),
									Ha.test(b) || (b = "about:invalid#zClosurez"),
									(O = Ia(b));
							v = O.a();
						}
						u = v;
					}
					h = u;
				}
				f.href = h;
			} catch (wa) {
				return;
			}
			d && "preload" == c && (f.as = d);
			e && f.setAttribute("nonce", e);
			if ((a = a.getElementsByTagName("head")[0]))
				try {
					a.appendChild(f);
				} catch (wa) {}
		};
	var Xb = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Yb = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		Zb = function(a) {
			return Xb.test(a) && !Yb.test(a);
		},
		$b = function(a) {
			return a.replace(/[\W]/g, function(a) {
				return "&#" + a.charCodeAt() + ";";
			});
		},
		T = g,
		ac = function(a, b) {
			a = "https://" + ("adservice" + b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(g.location.hostname)];
			U[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(U[1]));
			return a + "?" + b.join("&");
		},
		U,
		V,
		bc = function() {
			T = g;
			U = T.googleToken = T.googleToken || {};
			var a = +new Date();
			(U[1] && U[3] > a && 0 < U[2]) ||
				((U[1] = ""), (U[2] = -1), (U[3] = -1), (U[4] = ""), (U[6] = ""));
			V = T.googleIMState = T.googleIMState || {};
			Zb(V[1]) || (V[1] = ".google.com");
			"array" == q(V[5]) || (V[5] = []);
			"boolean" == typeof V[6] || (V[6] = !1);
			"array" == q(V[7]) || (V[7] = []);
			l(V[8]) || (V[8] = 0);
		},
		cc = function(a) {
			try {
				a();
			} catch (b) {
				g.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		ec = function(a) {
			"complete" == g.document.readyState ||
			"loaded" == g.document.readyState ||
			(g.document.currentScript && g.document.currentScript.async)
				? dc(3)
				: a();
		},
		fc = 0,
		W = {
			i: function() {
				return 0 < V[8];
			},
			o: function() {
				V[8]++;
			},
			A: function() {
				0 < V[8] && V[8]--;
			},
			B: function() {
				V[8] = 0;
			},
			j: function() {},
			D: function() {
				return !1;
			},
			v: function() {
				return V[5];
			},
			s: cc
		},
		X = {
			i: function() {
				return V[6];
			},
			o: function() {
				V[6] = !0;
			},
			A: function() {
				V[6] = !1;
			},
			B: function() {
				V[6] = !1;
			},
			j: function() {},
			D: function() {
				return ".google.com" != V[1] && 2 < ++fc;
			},
			v: function() {
				return V[7];
			},
			s: function(a) {
				ec(function() {
					cc(a);
				});
			}
		},
		dc = function(a) {
			if (1e-5 > Math.random()) {
				g.google_image_requests || (g.google_image_requests = []);
				var b = g.document.createElement("img");
				b.src =
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
					a;
				g.google_image_requests.push(b);
			}
		};
	W.j = function() {
		if (!W.i()) {
			var a = g.document,
				b = function(b) {
					b = ac("js", b);
					var c = Ua();
					R(a, b, "preload", "script", c);
					c = a.createElement("script");
					c.type = "text/javascript";
					c.onerror = function() {
						return g.processGoogleToken({}, 2);
					};
					b = La(b);
					Ja(c, b);
					try {
						(a.head || a.body || a.documentElement).appendChild(c), W.o();
					} catch (h) {}
				},
				c = V[1];
			b(c);
			".google.com" != c && b(".google.com");
			b = {};
			var d = ((b.newToken = "FBT"), b);
			g.setTimeout(function() {
				return g.processGoogleToken(d, 1);
			}, 1e3);
		}
	};
	X.j = function() {
		if (!X.i()) {
			var a = g.document,
				b = ac("sync.js", V[1]);
			R(a, b, "preload", "script");
			b = $b(b);
			var c = x("script"),
				d = "",
				e = Ua();
			e && (d = 'nonce="' + $b(e) + '"');
			var f =
				"<" +
				c +
				' src="' +
				b +
				'" ' +
				d +
				"></" +
				c +
				">" +
				("<" +
					c +
					" " +
					d +
					'>processGoogleTokenSync({"newToken":"FBS"},5);</' +
					c +
					">");
			ec(function() {
				a.write(f);
				X.o();
			});
		}
	};
	var gc = function(a) {
			bc();
			(U[3] >= +new Date() && U[2] >= +new Date()) || a.j();
		},
		ic = function() {
			g.processGoogleToken =
				g.processGoogleToken ||
				function(a, b) {
					return hc(W, a, b);
				};
			gc(W);
		},
		jc = function() {
			g.processGoogleTokenSync =
				g.processGoogleTokenSync ||
				function(a, b) {
					return hc(X, a, b);
				};
			gc(X);
		},
		hc = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				h = parseInt(b.validLifetimeSecs || "", 10),
				u = b["1p_jar"] || "";
			b = b.pucrd || "";
			bc();
			1 == c ? a.B() : a.A();
			if (!d && a.D()) Zb(".google.com") && (V[1] = ".google.com"), a.j();
			else {
				var v = (T.googleToken = T.googleToken || {}),
					O =
						0 == c && d && k(d) && !e && l(f) && 0 < f && l(h) && 0 < h && k(u);
				e = e && !a.i() && (!(U[3] >= +new Date()) || "NT" == U[1]);
				var wa = !(U[3] >= +new Date()) && 0 != c;
				if (O || e || wa)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(h = e + 1e3 * h),
						dc(c),
						(v[5] = c),
						(v[1] = d),
						(v[2] = f),
						(v[3] = h),
						(v[4] = u),
						(v[6] = b),
						bc();
				if (O || !a.i()) {
					c = a.v();
					for (d = 0; d < c.length; d++) a.s(c[d]);
					c.length = 0;
				}
			}
		};
	var kc = function() {
			this.a = null;
		},
		lc = function(a, b) {
			a.a = b;
		};
	kc.prototype.b = function(a, b, c, d, e) {
		if (Math.random() > (void 0 === c ? 0.01 : c)) return !1;
		(b.error && b.meta && b.id) ||
			(b = new Wa(b, { context: a, id: void 0 === e ? "gpt_exception" : e }));
		if (d || this.a) (b.meta = {}), this.a && this.a(b.meta), d && d(b.meta);
		g.google_js_errors = g.google_js_errors || [];
		g.google_js_errors.push(b);
		g.error_rep_loaded ||
			((b = g.document),
			(a = b.createElement("script")),
			Ja(
				a,
				La(
					g.location.protocol +
						"//pagead2.googlesyndication.com/pagead/js/err_rep.js"
				)
			),
			(b = b.getElementsByTagName("script")[0]) &&
				b.parentNode &&
				b.parentNode.insertBefore(a, b),
			(g.error_rep_loaded = !0));
		return !1;
	};
	var mc = function(a, b) {
		var c = void 0 === c ? a.b : c;
		try {
			b();
		} catch (d) {
			if (!c.call(a, 420, d, 0.01, void 0, "gpt_exception")) throw d;
		}
	};
	var nc = function(a) {
		if (!a.google_ltobserver) {
			var b = new a.PerformanceObserver(function(b) {
				var c = (a.google_lt_queue = a.google_lt_queue || []);
				t(b.getEntries(), function(a) {
					return c.push(a);
				});
			});
			b.observe({ entryTypes: ["longtask"] });
			a.google_ltobserver = b;
		}
	};
	var oc = function(a) {
		var b = a;
		b = void 0 === b ? g : b;
		if ((b = (b = b.performance) && b.now ? b.now() : null))
			(b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				1024 > a.length && a.push(b);
	};
	var pc = [
		[28, null, null, [1]],
		[38, null, null, [1]],
		[null, 7, null, [null, 0.1]],
		[40, null, null, [1]],
		[72, null, null, [1]],
		[null, 14, null, [null, 1]],
		[20, null, null, [], [[[1, [[4, null, 1]]], [1]]]],
		[56, null, null, [1]],
		[53, null, null, [1]],
		[52, null, null, [1]],
		[
			null,
			null,
			null,
			[
				null,
				null,
				null,
				"21062261 21062262 21062903 21062834 21062835 21062859 21062860 21063195 21063196".split(
					" "
				)
			],
			null,
			4
		],
		[46, null, null, [1]],
		[null, null, 8, [null, null, "/pagead/js/rum.js"]],
		[11, null, null, [1]],
		[48, null, null, [1]],
		[18, null, null, [1]],
		[39, null, null, [1]],
		[30, null, null, [1]],
		[3, null, null, [1]],
		[null, 8, null, [null, -1]],
		[15, null, null, [1]],
		[null, 11, null, [null, 10]],
		[
			null,
			1,
			null,
			[null, 4096],
			[
				[[4, null, 14], [null, 8192]],
				[[4, null, 15, null, null, null, null, ["7646"]], [null, 16384]]
			]
		],
		[null, 2, null, [null, 1e3]],
		[106, null, null, [1]],
		[45, null, null, []],
		[null, null, 2, [null, null, "1-0-32"]],
		[21, null, null, [1]],
		[7, null, null, [1]],
		[94, null, null, [1]],
		[27, null, null, [1]],
		[88, null, null, [1]],
		[29, null, null, [1]],
		[14, null, null, [1]],
		[12, null, null, [1]],
		[63, null, null, [1]]
	];
	var qc = function() {
			return g.googletag || (g.googletag = {});
		},
		rc = function(a, b) {
			var c = qc();
			c.hasOwnProperty(a) || (c[a] = b);
		};
	var Y = {
		173: "pubads.g.doubleclick.net",
		174: "securepubads.g.doubleclick.net",
		7: 0.02,
		13: 1500,
		23: 0.001,
		24: 200,
		37: 0.01,
		38: 0.001,
		58: 1,
		66: 1e-5,
		76: "",
		129: 0.05,
		187: 0.01,
		150: "",
		211: !1,
		152: [],
		172: null,
		191: "001903080058260",
		192: "021903070012530",
		190: "011903070012530",
		245: {},
		180: null,
		219: [],
		230: {},
		210: {},
		227: {},
		226: [],
		241: {},
		214: 0.05,
		215: 0.01,
		220: !1,
		228: "//www.googletagservices.com/pubconsole/",
		242: !1,
		244: !1,
		243: -1
	};
	Y[6] = (function(a, b) {
		try {
			for (var c = null; c != a; c = a, a = a.parent)
				switch (a.location.protocol) {
					case "https:":
						return !0;
					case "file:":
						return !!b;
					case "http:":
						return !1;
				}
		} catch (d) {}
		return !0;
	})(window);
	Y[49] = new Date().getTime();
	Y[36] = /^true$/.test("false");
	Y[46] = /^true$/.test("false");
	Y[148] = /^true$/.test("false");
	Y[221] = /^true$/.test("");
	Y[204] = Ta("{{MOD}}", -1);
	var sc = function() {
		for (var a in Y) this[a] = Y[a];
	};
	p(sc);
	var I = function(a) {
			return sc.c()[a];
		},
		Z = function(a, b) {
			sc.c()[a] = b;
		},
		tc = qc(),
		uc = sc.c(),
		vc = tc._vars_,
		wc;
	for (wc in vc) uc[wc] = vc[wc];
	tc._vars_ = uc;
	var xc = function() {
		Nb.call(this, I(210), { u: I(211), w: I(227), C: I(226) });
	};
	ha(xc, Nb);
	var yc = function() {
		return I(36);
	};
	var zc = (function(a, b) {
			var c = b || Ma;
			return function() {
				var b = this || g;
				b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {});
				var e = c(a[la] || (a[la] = ++ma), arguments);
				return b.hasOwnProperty(e) ? b[e] : (b[e] = a.apply(this, arguments));
			};
		})(
			function(a) {
				return a && a.src
					? /^(?:https?:)?\/\/www\.googletagservices\.com\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(
							a.src
					  )
						? 0
						: 1
					: 2;
			},
			function(a, b) {
				return a + "\x0B" + (b[0] && b[0].src);
			}
		),
		Ac = function() {
			return 0 === zc(I(172));
		};
	var Bc = function() {
		return Ta("0") || 0;
	};
	rc("getVersion", function() {
		return "320";
	});
	var Cc = function() {
		var a = {};
		this[3] = ((a[8] = function(a) {
			return !!n(a);
		}),
		(a[3] = Ac),
		(a[2] = yc),
		(a[9] = function(a) {
			a = n(a);
			var b;
			if ((b = "function" == q(a)))
				(a = a && a.toString && a.toString()),
					(b = k(a) && -1 != a.indexOf("[native code]"));
			return b;
		}),
		(a[10] = function() {
			return window == window.top;
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return I(204);
		}),
		(a[4] = Bc),
		(a[2] = function() {
			return 320;
		}),
		(a[5] = function() {
			var a = Va();
			return null != a ? a : void 0;
		}),
		(a[6] = function(a) {
			a = n(a);
			return l(a) ? a : void 0;
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
		(a[4] = function(a) {
			a = n(a);
			return k(a) ? a : void 0;
		}),
		a);
	};
	p(Cc);
	var Dc = {
		3: [
			[
				null,
				[
					[
						1337,
						[
							[82, null, null, [1]],
							[null, null, 8, [null, null, "/pagead/js/rum_debug.js"]]
						]
					]
				]
			],
			[1, [[20194812, [[20, null, null, [1]]]], [20194813]], null, 3],
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
			[10, [[21061505], [21061506, [[82, null, null, [1]]]]]],
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
				[[21061742], [21061743, [[127, null, null, [1]]]]],
				[8, null, null, 2, null, 313]
			],
			[
				50,
				[
					[
						21061863,
						[[null, 1, null, [null, 4096], [[[4, null, 14], [null, 8192]]]]]
					],
					[21061864, [[null, 1, null, [null, 12288]]]],
					[21061865, [[null, 1, null, [null, 15360]]]]
				],
				[8, null, null, 2, null, 313]
			],
			[
				50,
				[[21061999], [21062e3, [[81, null, null, [1]]]]],
				[2, [[4, null, 6, null, null, null, null, ["21061508"]], [4, null, 10]]]
			],
			[
				1,
				[
					[
						21062059,
						[
							[
								null,
								null,
								null,
								[null, null, null, ["50", "50", "50", "50", "50"]],
								null,
								2
							]
						]
					],
					[
						21062060,
						[
							[
								null,
								null,
								null,
								[null, null, null, "25 25 25 25 25 25 25 25 25 25".split(" ")],
								null,
								2
							]
						]
					],
					[
						21062061,
						[
							[
								null,
								null,
								null,
								[null, null, null, ["125", "125", "125", "125"]],
								null,
								2
							]
						]
					],
					[22321847],
					[
						22321848,
						[
							[
								null,
								null,
								null,
								[null, null, null, "50 50 50 50 50 50 50 50 50 50".split(" ")],
								null,
								2
							]
						]
					],
					[
						22322161,
						[[null, null, null, [null, null, null, ["250", "250"]], null, 2]]
					]
				]
			],
			[50, [[21062068, [[58, null, null, [1]]]], [21062069]]],
			[
				1e3,
				[
					[
						21062150,
						null,
						[2, [[8, null, null, 1, null, 9], [7, null, null, 1, null, 15]]]
					],
					[
						21062151,
						[
							[
								null,
								null,
								null,
								[null, null, null, ["50", "50", "50", "50", "50"]],
								null,
								2
							]
						],
						[2, [[8, null, null, 1, null, 14], [7, null, null, 1, null, 20]]]
					],
					[
						21062152,
						[
							[
								null,
								null,
								null,
								[null, null, null, "50 50 50 50 50 50 50 50 50 50".split(" ")],
								null,
								2
							]
						],
						[2, [[8, null, null, 1, null, 19], [7, null, null, 1, null, 25]]]
					],
					[
						21062153,
						[
							[
								null,
								null,
								null,
								[null, null, null, "25 25 25 25 25 25 25 25 25 25".split(" ")],
								null,
								2
							]
						],
						[2, [[8, null, null, 1, null, 24], [7, null, null, 1, null, 30]]]
					]
				],
				[4, null, 3]
			],
			[null, [[21062156], [21062157, [[15, null, null, [1]]]]]],
			[10, [[21062185], [21062186, [[24, null, null, [1]]]]]],
			[
				10,
				[
					[21062261],
					[21062262, [[92, null, null, [1]], [33, null, null, [1]]]]
				],
				null,
				8
			],
			[
				1,
				[
					[21062330],
					[21062331, [[null, 8, null, [null, 800]]]],
					[21062332, [[null, 8, null, [null, 1e4]]]]
				],
				null,
				3
			],
			[50, [[21062377], [21062378, [[11, null, null, []]]]]],
			[
				1,
				[
					[21062398],
					[21062399, [[null, 13, null, [null, 1]]]],
					[21062400, [[null, 13, null, [null, 1]]]],
					[21062593, [[null, 13, null, [null, 2]]]]
				]
			],
			[50, [[21062414], [21062415, [[64, null, null, [1]]]]]],
			[1, [[21062416], [21062417, [[37, null, null, [1]]]]]],
			[50, [[21062420], [21062421, [[42, null, null, [1]]]]]],
			[50, [[21062452], [21062453, [[43, null, null, [1]]]]]],
			[50, [[21062454], [21062456, [[51, null, null, [1]]]]]],
			[1, [[21062693], [21062694, [[65, null, null, [1]]]]]],
			[10, [[21062724], [21062725, [[67, null, null, [1]]]]]],
			[
				null,
				[
					[21062738],
					[
						21062739,
						[[null, null, null, [null, null, null, ["v", "1-0-32"]], null, 1]]
					],
					[21062740, [[null, null, 2, [null, null, "1-0-32"]]]]
				]
			],
			[
				10,
				[
					[21062745],
					[21062748, [[null, 11, null, [null, 60]]]],
					[21062862, [[null, 11, null, [null, 40]]]]
				]
			],
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
			[50, [[21062818], [21062819, [[93, null, null, [1]]]]]],
			[50, [[21062832], [21062833, [[89, null, null, [1]]]]]],
			[
				50,
				[
					[21062834],
					[21062835, [[92, null, null, [1]], [33, null, null, [1]]]]
				],
				[4, null, 2],
				8
			],
			[10, [[21062844], [21062845]]],
			[50, [[21062854], [21062855, [[100, null, null, [1]]]]]],
			[10, [[21062859], [21062860, [[92, null, null, [1]]]]], null, 8],
			[50, [[21062886], [21062887, [[91, null, null, [1]]]]]],
			[10, [[21062888], [21062889, [[101, null, null, [1]]]]]],
			[
				5,
				[
					[21062899],
					[21062900, [[98, null, null, [1]]]],
					[21062901, [[98, null, null, [1]]]]
				]
			],
			[
				5,
				[
					[21062916, [[98, null, null, [1]]]],
					[21062917, [[98, null, null, [1]]]]
				]
			],
			[null, [[21062937], [21062947], [21062948]], [4, null, 10]],
			[1, [[21062949], [21062950, [[108, null, null, [1]]]]]],
			[1, [[21062970], [21062971, [[109, null, null, [1]]]]]],
			[10, [[21062975], [21062977, [[104, null, null, [1]]]]]],
			[50, [[21063015], [21063016, [[97, null, null, [1]]]]]],
			[
				50,
				[
					[21063041],
					[
						21063042,
						[
							[62, null, null, [1]],
							[68, null, null, [1]],
							[107, null, null, [1]]
						]
					],
					[21063043, [[107, null, null, [1]]]]
				]
			],
			[
				5,
				[[21063046], [21063047], [21063048]],
				[
					2,
					[[4, null, 7], [4, null, 8, null, null, null, null, ["TextDecoder"]]]
				],
				9
			],
			[250, [[21063065], [21063066, [[116, null, null, [1]]]]]],
			[
				10,
				[[21063094], [21063095], [21063096]],
				[
					2,
					[[4, null, 7], [4, null, 8, null, null, null, null, ["TextDecoder"]]]
				],
				9
			],
			[50, [[21063115], [21063116, [[115, null, null, [1]]]]]],
			[
				1e3,
				[
					[21063127, null, [2, [[6, null, null, 1, null, 31]]]],
					[21063128, null, [2, [[6, null, null, 1, null, 30]]]]
				],
				[4, null, 3]
			],
			[1, [[21063145], [21063146, [[112, null, null, [1]]]]]],
			[1, [[21063147], [21063148, [[99, null, null, [1]]]]]],
			[50, [[21063158], [21063159, [[90, null, null, [1]]]]]],
			[
				1e3,
				[
					[
						21063165,
						null,
						[3, [[6, null, null, 1, null, 0], [6, null, null, 1, null, 5]]]
					],
					[
						21063166,
						[[null, 14, null, [null, 1]], [114, null, null, [1]]],
						[3, [[6, null, null, 1, null, 1], [6, null, null, 1, null, 6]]]
					]
				],
				[4, null, 3]
			],
			[10, [[21063167], [21063168, [[102, null, null, [1]]]]]],
			[10, [[21063195], [21063196, [[122, null, null, [1]]]]], null, 8],
			[50, [[21063202], [21063203, [[123, null, null, [1]]]]]],
			[10, [[21063204], [21063205, [[47, null, null, [1]]]]]],
			[
				null,
				[
					[21063260],
					[21063261, [[null, 16, null, [null, 250]]]],
					[21063262, [[null, 16, null, [null, 500]]]],
					[21063263, [[null, 16, null, [null, 750]]]],
					[21063264, [[null, 16, null, [null, 1e3]]]]
				]
			],
			[null, [[21063271], [21063272, [[128, null, null, [1]]]]]],
			[
				10,
				[
					[21063283],
					[21063284, [[69, null, null, [1]], [110, null, null, [1]]]]
				]
			],
			[50, [[21063302], [21063303, [[125, null, null, [1]]]]], null, 10],
			[
				50,
				[
					[21063304, [[null, 14, null, [null, 1]], [125, null, null, [1]]]],
					[
						21063305,
						[
							[null, 14, null, [null, 1]],
							[125, null, null, [1]],
							[121, null, null, [1]]
						]
					]
				],
				null,
				10
			],
			[
				50,
				[
					[21063306],
					[21063307, [[20, null, null, [], [[[1, [[4, null, 1]]], []]]]]]
				],
				null,
				3
			],
			[
				1e3,
				[
					[
						21063316,
						null,
						[3, [[6, null, null, 1, null, 2], [6, null, null, 1, null, 7]]]
					],
					[
						21063317,
						[[null, 14, null, [null, 1]], [114, null, null, [1]]],
						[3, [[6, null, null, 1, null, 3], [6, null, null, 1, null, 8]]]
					]
				],
				[4, null, 3]
			],
			[
				null,
				[
					[21063340],
					[21063341, [[65, null, null, [1]]]],
					[21063342, [[65, null, null, [1]], [71, null, null, [1]]]]
				]
			],
			[
				1e3,
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
				100,
				[[22325465], [22325466, [[80, null, null, [1]]]]],
				[4, null, 6, null, null, null, null, ["21060611"]]
			],
			[50, [[53887176], [53887177]]],
			[1, [[108809132], [108809133, [[45, null, null, [1]]]]]],
			[
				10,
				[[370204026], [370204027], [370204053]],
				[8, null, null, 2, null, 313]
			],
			[10, [[370204054], [370204055, [[113, null, null, [1]]]]]],
			[null, [[370204058], [370204059, [[119, null, null, [1]]]]]],
			[
				10,
				[[953563515], [953563516], [953563517]],
				[8, null, null, 2, null, 313]
			]
		],
		4: [
			[null, [[21062304], [21062305, [[34, null, null, [1]]]]]],
			[
				null,
				[
					[21062846],
					[21062847, [[74, null, null, [1]]]],
					[21062848, [[75, null, null, [1]]]],
					[21062849, [[74, null, null, [1]], [75, null, null, [1]]]]
				]
			],
			[
				null,
				[
					[21062983],
					[21062984, [[96, null, null, [1]]]],
					[
						21062985,
						[[96, null, null, [1]], [8, null, null, [1]], [55, null, null, [1]]]
					]
				]
			],
			[null, [[21063037], [21063038, [[105, null, null, [1]]]]]],
			[null, [[21063039], [21063040, [[70, null, null, [1]]]]]],
			[null, [[21063242], [21063243, [[120, null, null, [1]]]]]],
			[
				null,
				[
					[21063311],
					[21063312, [[8, null, null, [1]]]],
					[21063313, [[55, null, null, [1]]]]
				]
			],
			[
				null,
				[[21063314], [21063315, [[8, null, null, [1]], [55, null, null, [1]]]]]
			]
		],
		5: [
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
							[76, null, null, [1]]
						]
					]
				],
				[4, null, 6, null, null, null, null, ["21061508"]]
			],
			[
				null,
				[
					[21061212],
					[21061213, [[16, null, null, [1]]]],
					[21061214, [[17, null, null, [1]]]],
					[21061277, [[17, null, null, [1]], [16, null, null, [1]]]]
				]
			],
			[
				1,
				[
					[21061590, [[null, null, 6, [null, null, "21061590"]]]],
					[21061591, [[59, null, null, [1]]]]
				],
				null,
				1
			],
			[
				1e3,
				[
					[21062785, [[23, null, null, []]], [7, null, null, 5, null, 50]],
					[21062786, [[23, null, null, [1]]], [8, null, null, 5, null, 949]]
				],
				[
					2,
					[
						[12, null, null, null, 2, null, "today\\.line\\.me/.+/article"],
						[4, null, 8, null, null, null, null, ["_gmptnl"]]
					]
				],
				7
			],
			[
				1e3,
				[[21062812, [[23, null, null, [1]]]]],
				[
					2,
					[
						[12, null, null, null, 2, null, "today\\.line\\.me/.+/article"],
						[4, null, 8, null, null, null, null, ["_gmptnl"]]
					]
				],
				7
			],
			[
				1e3,
				[
					[
						21062903,
						[[92, null, null, [1]], [33, null, null, [1]]],
						[12, null, null, null, 3, null, "googDisableSync"]
					]
				],
				null,
				8
			],
			[
				50,
				[
					[
						21063232,
						null,
						[
							6,
							null,
							null,
							null,
							4,
							null,
							"slow-2g",
							["navigator.connection.effectiveType"]
						]
					]
				],
				[
					5,
					null,
					null,
					null,
					4,
					null,
					null,
					["navigator.connection.effectiveType"]
				]
			],
			[
				50,
				[
					[
						21063233,
						null,
						[
							6,
							null,
							null,
							null,
							4,
							null,
							"2g",
							["navigator.connection.effectiveType"]
						]
					]
				],
				[
					5,
					null,
					null,
					null,
					4,
					null,
					null,
					["navigator.connection.effectiveType"]
				]
			],
			[
				50,
				[
					[
						21063234,
						null,
						[
							6,
							null,
							null,
							null,
							4,
							null,
							"3g",
							["navigator.connection.effectiveType"]
						]
					]
				],
				[
					5,
					null,
					null,
					null,
					4,
					null,
					null,
					["navigator.connection.effectiveType"]
				]
			],
			[
				50,
				[
					[
						21063235,
						null,
						[
							6,
							null,
							null,
							null,
							4,
							null,
							"4g",
							["navigator.connection.effectiveType"]
						]
					]
				],
				[
					5,
					null,
					null,
					null,
					4,
					null,
					null,
					["navigator.connection.effectiveType"]
				]
			],
			[
				50,
				[[21063247]],
				[
					1,
					[
						[
							5,
							null,
							null,
							null,
							4,
							null,
							null,
							["navigator.connection.effectiveType"]
						]
					]
				]
			],
			[
				50,
				[
					[
						21063248,
						null,
						[
							1,
							[
								[
									12,
									null,
									null,
									null,
									4,
									null,
									"^(slow-2g|2g|3g|4g)$",
									["navigator.connection.effectiveType"]
								]
							]
						]
					]
				],
				[
					5,
					null,
					null,
					null,
					4,
					null,
					null,
					["navigator.connection.effectiveType"]
				]
			],
			[
				1,
				[
					[
						21063343,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21063343"]],
							[null, 12, null, [null, 319]],
							[null, null, 7, [null, null, "21063343"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21063343"]]
						]
					],
					[
						21063344,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21063344"]],
							[null, 12, null, [null, 320]],
							[null, null, 7, [null, null, "21063344"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21063344"]]
						]
					]
				],
				null,
				1
			]
		],
		6: [
			[null, [[21062379, [[23, null, null, [1]]]]]],
			[
				10,
				[[21063049], [21063050], [21063051]],
				[
					3,
					[
						[4, null, 6, null, null, null, null, ["21062415"]],
						[4, null, 6, null, null, null, null, ["21062414"]]
					]
				]
			]
		],
		7: [
			[
				10,
				[[21061507], [21061508, [[83, null, null, [1]], [84, null, null, [1]]]]]
			],
			[1e3, [[21063217, null, [6, null, null, 4, null, 1]]], null, 1],
			[
				1e3,
				[
					[
						21063218,
						[
							[null, null, 5, [null, null, "21063218"]],
							[null, null, 6, [null, null, "21063218"]]
						],
						[6, null, null, 4, null, 2]
					],
					[21063219, null, [6, null, null, 4, null, 3]]
				],
				[4, null, 3],
				1
			],
			[
				1e3,
				[
					[
						21063220,
						[
							[null, null, 5, [null, null, "21063220"]],
							[null, null, 6, [null, null, "21063220"]]
						],
						[6, null, null, 4, null, 2]
					],
					[21063221, null, [6, null, null, 4, null, 3]]
				],
				[1, [[4, null, 3]]],
				1
			]
		],
		9: [
			[
				1e3,
				[[21061726]],
				[4, null, 13, null, null, null, null, ["PnHSZjekOp", "jvnwkvnp"]]
			]
		]
	};
	var Ec = function(a) {
		var b = { I: pc, J: Dc };
		b = a || b;
		Ra() && Z(210, xa(b.J));
		xc.call(this);
		var c = this;
		a = Cc.c();
		a[3][6] = function(a) {
			a: {
				var b = c.f;
				a = parseInt(a, 10);
				if (k(b)) b = k(a) && 1 == a.length ? b.indexOf(a, 0) : -1;
				else {
					for (var d = 0; d < b.length; d++)
						if (d in b && b[d] === a) {
							b = d;
							break a;
						}
					b = -1;
				}
			}
			return 0 <= b;
		};
		I(219).length || Z(219, b.I);
		Z(241, a);
		zb(
			oa(I(219), function(a) {
				return new eb(a);
			})
		);
		Z(230, sb.c().a);
		b = I(245);
		Rb(this, b);
		Sb(b);
		Vb.c();
		N(Db, b)(a);
	};
	ha(Ec, xc);
	x("partner.googleadservices.com");
	var Fc = x("www.googletagservices.com"),
		Gc = function() {
			return I(46) && !I(6)
				? "http://pubads.g.doubleclick.net"
				: "https://securepubads.g.doubleclick.net";
		},
		Hc = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		Jc = function() {
			var a = I(76);
			if (a) return a;
			a = Gc();
			var b = Ub(4, "/gpt/pubads_impl_"),
				c = Ic() || Tb(12) || "320",
				d = Ub(5);
			a = a + b + c + ".js";
			d && (a += "?" + d);
			Z(76, a);
			return a;
		},
		Kc = function(a, b, c) {
			var d;
			if (!(d = b.currentScript))
				a: {
					if ((b = b.scripts))
						for (d = 0; d < b.length; d++) {
							var e = b[d];
							if (-1 < e.src.indexOf(Fc + "/tag/js/gpt")) {
								d = e;
								break a;
							}
						}
					d = null;
				}
			Z(172, d);
			c = new Ec(c);
			var f = void 0 === f ? [] : f;
			f = P.c().g(4, f);
			if (f.length) {
				a: {
					try {
						if (a.parent != a) {
							var h = N(Cb, a.parent.googletag._vars_[245])();
							break a;
						}
					} catch (u) {}
					h = [];
				}
				a = h;
				for (h = 0; h < a.length; ++h)
					(b = a[h]), -1 < f.indexOf("" + b) && (c.a[b] = !0);
			}
			Pb(c, 7);
			Pb(c, 5);
			Pb(c, 8);
			Q(59) && (Z(173, Fc), Z(174, Fc));
			a = I(150);
			bc();
			Zb(a) && (V[1] = a);
		},
		Lc = function() {
			return navigator.getBattery
				? navigator.getBattery().then(function(a) {
						Z(243, a.level);
						Z(244, a.charging);
						Z(242, !0);
				  })
				: null;
		},
		Ic = function() {
			var a = "";
			if (!I(148)) return a;
			try {
				var b = "";
				try {
					b = g.top.location.hash;
				} catch (d) {
					b = g.location.hash;
				}
				if (b) {
					var c = b.match(/\bgptv=(\d+)/);
					a = c ? c[1] : "";
				}
			} catch (d) {}
			return a;
		},
		Mc = function(a, b, c) {
			var d = qc();
			a = a || d.fifWin || window;
			b = b || a.document;
			rc("cmd", []);
			if (d.evalScripts) d.evalScripts();
			else {
				Kc(a, b, c);
				a.PerformanceObserver && a.PerformanceLongTaskTiming && nc(a);
				oc(a);
				a = Jc();
				if (Hc(b)) {
					c = "gpt-impl-" + Math.random();
					try {
						var e = '<script id="' + c + '" src="' + a + '">\x3c/script>';
						Q(17) &&
							Wb() &&
							(e += '<link rel="preconnect" href="' + Gc() + '">');
						b.write(e);
					} catch (f) {}
					b.getElementById(c) &&
						((d._loadStarted_ = !0), Z(220, !1), Tb(4) || jc());
				}
				d._loadStarted_ ||
					(Tb(4) || ic(),
					Q(16) && R(b, a, "preload", "script"),
					Q(108) &&
						((c = Ub(6)),
						(e = Ic() || Tb(12) || "320"),
						(c =
							Gc() +
							"/gpt/" +
							("pubads_impl_rendering_" + e + ".js") +
							(c ? "?" + c : "")),
						R(b, c, "preload", "script")),
					(c = b.createElement("script")),
					(c.src = a),
					(c.async = !0),
					(b.head || b.body || b.documentElement).appendChild(c),
					Q(17) && Wb() && R(b, Gc(), "preconnect"),
					Z(220, !0),
					(d._loadStarted_ = !0));
				(b = Lc()) &&
					b.catch(function(a) {
						var b = new kc();
						lc(b, function(a) {
							a.methodId = 501;
						});
						b.b(501, a);
					});
			}
		};
	(function(a, b, c) {
		var d = new kc();
		lc(d, function(a) {
			a.methodId = 420;
		});
		mc(d, function() {
			return Mc(a, b, c);
		});
	})();
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this));
