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
			var da = { I: !0 },
				ea = {};
			try {
				ea.__proto__ = da;
				ca = ea.I;
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
			a.L = b.prototype;
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
			a.f = function() {
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
			a.L = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
			a.M = function(a, c, f) {
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
					var x = f[h];
					b.call(void 0, x, h, a) && (d[e++] = x);
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
	var u;
	a: {
		var ua = g.navigator;
		if (ua) {
			var va = ua.userAgent;
			if (va) {
				u = va;
				break a;
			}
		}
		u = "";
	}
	var xa = function(a) {
		var b = {},
			c;
		for (c in a) b[c] = a[c];
		return b;
	};
	var w = function(a) {
		w[" "](a);
		return a;
	};
	w[" "] = ka;
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
						a.c = e;
						break a;
					}
				}
				a.h = Number.MAX_VALUE;
			}
			a.w = {};
			if (c)
				for (b = 0; b < c.length; b++)
					(e = c[b]),
						e < a.h
							? ((e += a.g), (a.b[e] = a.b[e] || z))
							: (za(a), (a.c[e] = a.c[e] || z));
			if (d && d.length) for (b = 0; b < d.length; b++) Aa(a, d[b]);
		},
		z = [],
		za = function(a) {
			var b = a.h + a.g;
			a.b[b] || (a.c = a.b[b] = {});
		},
		B = function(a, b) {
			if (b < a.h) {
				b += a.g;
				var c = a.b[b];
				return c === z ? (a.b[b] = []) : c;
			}
			if (a.c) return (c = a.c[b]), c === z ? (a.c[b] = []) : c;
		},
		C = function(a, b, c) {
			a = B(a, b);
			return null == a ? c : a;
		},
		Ba = function(a, b, c) {
			b < a.h ? (a.b[b + a.g] = c) : (za(a), (a.c[b] = c));
		},
		Aa = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					h = B(a, f);
				null != h && ((c = f), (d = h), Ba(a, f, void 0));
			}
			return c ? (Ba(a, c, d), c) : 0;
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
	var G = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
	var H = function() {
		this.b = "";
		this.g = Ca;
	};
	H.prototype.c = !0;
	H.prototype.a = function() {
		return this.b;
	};
	var Da = function(a) {
			return a instanceof H && a.constructor === H && a.g === Ca
				? a.b
				: "type_error:TrustedResourceUrl";
		},
		Ca = {};
	var I = function() {
		this.m = "";
		this.H = Ea;
	};
	I.prototype.c = !0;
	I.prototype.a = function() {
		return this.m;
	};
	var Fa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		Ea = {},
		Ga = function(a) {
			var b = new I();
			b.m = a;
			return b;
		};
	Ga("about:blank");
	var Ha = function(a, b) {
		a.src = Da(b);
		(b = ja()) && a.setAttribute("nonce", b);
	};
	var Ja = function(a) {
			Ia();
			var b = new H();
			b.b = a;
			return b;
		},
		Ia = ka;
	var Ka = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var Oa = function(a, b) {
			if (!La() && !Ma()) {
				var c = Math.random();
				if (c < b) return (c = Na(g)), a[Math.floor(c * a.length)];
			}
			return null;
		},
		Na = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		Pa = function() {
			var a = J(210),
				b;
			for (b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
			return !0;
		},
		Ma = G(function() {
			return -1 != u.indexOf("Google Web Preview") || 1e-4 > Math.random();
		}),
		La = G(function() {
			return -1 != u.indexOf("MSIE");
		}),
		Qa = /^(-?[0-9.]{1,30})$/,
		Ra = function(a, b) {
			return Qa.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		Sa = function() {
			try {
				return ja();
			} catch (a) {}
		};
	var Ta = function() {
		var a = window,
			b = -1;
		try {
			a.localStorage &&
				(b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10));
		} catch (c) {
			return null;
		}
		if (0 <= b && 1e3 > b) return b;
		if (Ma()) return null;
		b = Math.floor(1e3 * Na(a));
		try {
			if (a.localStorage)
				return a.localStorage.setItem("google_experiment_mod", "" + b), b;
		} catch (c) {}
		return null;
	};
	var Ua = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.line = b.line || -1;
		this.msg = b.message || "";
		this.file = b.file || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var Va = null,
		Wa = function() {
			if (null === Va) {
				Va = "";
				try {
					var a = "";
					try {
						a = g.top.location.hash;
					} catch (c) {
						a = g.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						Va = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return Va;
		};
	var Ya = function(a) {
		A(this, a, Xa, null);
	};
	r(Ya, y);
	var $a = function(a) {
		A(this, a, Za, null);
	};
	r($a, y);
	var cb = function(a) {
		A(this, a, ab, bb);
	};
	r(cb, y);
	var db = function(a) {
		A(this, a, null, null);
	};
	r(db, y);
	var fb = function(a) {
		A(this, a, eb, null);
	};
	r(fb, y);
	var K = function(a) {
		A(this, a, gb, hb);
	};
	r(K, y);
	var Xa = [2],
		Za = [2];
	$a.prototype.getId = function() {
		return C(this, 1, 0);
	};
	var ab = [5],
		bb = [[1, 2, 3, 6]],
		eb = [4],
		gb = [2, 8],
		hb = [[3, 4, 5], [6, 7]];
	var ib = function(a) {
			return null != a ? !a : a;
		},
		jb = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		lb = function(a, b) {
			var c = E(a, K, 2);
			if (!c.length) return kb(a, b);
			a = C(a, 1, 0);
			if (1 == a) return ib(lb(c[0], b));
			c = oa(c, function(a) {
				return function() {
					return lb(a, b);
				};
			});
			switch (a) {
				case 2:
					return jb(c, !1);
				case 3:
					return jb(c, !0);
			}
		},
		kb = function(a, b) {
			var c = Aa(a, hb[0]);
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
							a = +C(a, 6, 0);
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
		mb = function(a, b) {
			return !a || !(!b || !lb(a, b));
		};
	var L = function() {
		var a = {};
		this.a = ((a[3] = {}), (a[4] = {}), (a[5] = {}), a);
	};
	L.prototype.b = function(a, b) {
		this.a[3][a] || (this.a[3][a] = b);
	};
	L.prototype.c = function(a, b) {
		this.a[4][a] || (this.a[4][a] = b);
	};
	L.prototype.g = function(a, b) {
		this.a[5][a] || (this.a[5][a] = b);
	};
	p(L);
	var nb = function(a, b) {
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
		ob = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return C(a, 1, !1);
				case 2:
					return +C(a, 2, 0);
				case 3:
					return C(a, 3, "");
				case 6:
					return B(a, 4);
				default:
					return null;
			}
		},
		pb = G(function() {
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
		sb = function(a, b, c) {
			var d = pb();
			if (d[a] && null != d[a][b]) return d[a][b];
			b = qb.f().a[a][b];
			if (!b) return c;
			b = new cb(b);
			b = rb(b);
			a = ob(b, a);
			return null != a ? a : c;
		},
		rb = function(a) {
			var b = L.f().a;
			if (b) {
				var c = qa(E(a, db, 5), function(a) {
					return mb(D(a, K, 1), b);
				});
				if (c) return D(c, fb, 2);
			}
			return D(a, fb, 4);
		},
		qb = function() {
			var a = {};
			this.a = ((a[1] = {}), (a[2] = {}), (a[3] = {}), (a[6] = {}), a);
		};
	p(qb);
	var tb = function(a, b) {
			return sb(1, a, void 0 === b ? !1 : b);
		},
		ub = function(a, b) {
			return sb(2, a, void 0 === b ? 0 : b);
		},
		vb = function(a, b) {
			return sb(3, a, void 0 === b ? "" : b);
		},
		wb = function(a, b) {
			b = void 0 === b ? [] : b;
			return sb(6, a, b);
		},
		xb = function(a) {
			var b = qb.f().a;
			t(a, function(a) {
				var c = Aa(a, bb[0]),
					e = nb(a, c);
				e && (b[c][e] = a.b);
			});
		};
	var M = function(a) {
			this.a = a;
		},
		yb = new M(1),
		zb = new M(2),
		Ab = new M(3),
		Bb = new M(10),
		Cb = new M(4),
		Db = new M(5),
		Eb = new M(6),
		Fb = new M(7),
		Gb = new M(8),
		Hb = new M(9),
		Ib = new M(11),
		O = function(a, b, c) {
			c.hasOwnProperty(a.a) ||
				Object.defineProperty(c, String(a.a), { value: b });
		},
		Jb = function(a, b) {
			return b[a.a] || function() {};
		},
		Kb = function(a) {
			O(Cb, tb, a);
			O(Db, ub, a);
			O(Eb, vb, a);
			O(Fb, wb, a);
		},
		Lb = function(a) {
			O(Gb, L.f().b, a);
			O(Hb, L.f().c, a);
			O(Ib, L.f().g, a);
		};
	var Mb = function(a, b) {
			var c = this,
				d = void 0 === b ? {} : b;
			b = void 0 === d.u ? !1 : d.u;
			var e = void 0 === d.A ? {} : d.A;
			d = void 0 === d.D ? [] : d.D;
			this.h = a;
			this.w = b;
			this.c = e;
			this.a = null;
			this.g = d;
			this.b = {};
			if ((a = Wa()))
				(a = a.split(",") || []),
					t(a, function(a) {
						(a = parseInt(a, 10)) && (c.b[a] = !0);
					});
		},
		Ob = function(a, b) {
			var c = [],
				d = a.h[b];
			d &&
				(9 !== b && delete a.h[b],
				t(d, function(b) {
					if ((b = Nb(a, new Ya(b)))) {
						var d = b.getId();
						c.push(d);
						a.g.push(d);
						(b = E(b, cb, 2)) && xb(b);
					}
				}));
			return c;
		},
		Nb = function(a, b) {
			if (!mb(D(b, K, 3), a.a)) return null;
			var c = E(b, $a, 2),
				d = a.a,
				e = d
					? na(c, function(a) {
							return mb(D(a, K, 3), d);
					  })
					: c,
				f = e.length;
			if (!f) return null;
			c = C(b, 4, 0);
			b = f * C(b, 1, 0);
			if (!c) return Pb(a, e, b / 1e3);
			f = null != a.c[c] ? a.c[c] : 1e3;
			if (0 >= f) return null;
			e = Pb(a, e, b / f);
			a.c[c] = e ? 0 : f - b;
			return e;
		},
		Pb = function(a, b, c) {
			var d = a.b,
				e = pa(b, function(a) {
					return !!d[a.getId()];
				});
			return e ? e : a.w ? null : Oa(b, c);
		},
		Qb = function(a, b) {
			O(
				yb,
				function(b) {
					a.b[b] = !0;
				},
				b
			);
			O(
				zb,
				function(b) {
					return void Ob(a, b);
				},
				b
			);
			O(
				Ab,
				function() {
					return a.g;
				},
				b
			);
			O(
				Bb,
				function(b) {
					a.a = b;
				},
				b
			);
			Kb(b);
			Lb(b);
		};
	var P = function() {
			this.a = function() {
				return !1;
			};
			this.b = function() {
				return 0;
			};
			this.c = function() {
				return "";
			};
		},
		Rb = function(a) {
			var b = P.f();
			b.a = Jb(Cb, a);
			b.b = Jb(Db, a);
			b.c = Jb(Eb, a);
		};
	p(P);
	var Q = function(a) {
			var b = void 0 === b ? !1 : b;
			return P.f().a(a, b);
		},
		Sb = function(a) {
			var b = void 0 === b ? 0 : b;
			return P.f().b(a, b);
		},
		Tb = function(a, b) {
			b = void 0 === b ? "" : b;
			return P.f().c(a, b);
		};
	var Ub = function() {};
	p(Ub);
	var Vb = G(function() {
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
				if (-1 != c.toLowerCase().indexOf("stylesheet")) var h = Da(b);
				else {
					if (b instanceof H) var x = Da(b);
					else {
						if (b instanceof I)
							var v =
								b instanceof I && b.constructor === I && b.H === Ea
									? b.m
									: "type_error:SafeUrl";
						else {
							if (b instanceof I) var N = b;
							else
								(b = "object" == typeof b && b.c ? b.a() : String(b)),
									Fa.test(b) || (b = "about:invalid#zClosurez"),
									(N = Ga(b));
							v = N.a();
						}
						x = v;
					}
					h = x;
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
	var Wb = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Xb = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		Yb = function(a) {
			return Wb.test(a) && !Xb.test(a);
		},
		Zb = function(a) {
			return a.replace(/[\W]/g, function(a) {
				return "&#" + a.charCodeAt() + ";";
			});
		},
		T = g,
		$b = function(a, b) {
			a = "https://" + ("adservice" + b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(g.location.hostname)];
			U[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(U[1]));
			return a + "?" + b.join("&");
		},
		U,
		V,
		ac = function() {
			T = g;
			U = T.googleToken = T.googleToken || {};
			var a = +new Date();
			(U[1] && U[3] > a && 0 < U[2]) ||
				((U[1] = ""), (U[2] = -1), (U[3] = -1), (U[4] = ""), (U[6] = ""));
			V = T.googleIMState = T.googleIMState || {};
			Yb(V[1]) || (V[1] = ".google.com");
			"array" == q(V[5]) || (V[5] = []);
			"boolean" == typeof V[6] || (V[6] = !1);
			"array" == q(V[7]) || (V[7] = []);
			l(V[8]) || (V[8] = 0);
		},
		bc = function(a) {
			try {
				a();
			} catch (b) {
				g.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		dc = function(a) {
			"complete" == g.document.readyState ||
			"loaded" == g.document.readyState ||
			(g.document.currentScript && g.document.currentScript.async)
				? cc(3)
				: a();
		},
		ec = 0,
		W = {
			i: function() {
				return 0 < V[8];
			},
			o: function() {
				V[8]++;
			},
			B: function() {
				0 < V[8] && V[8]--;
			},
			C: function() {
				V[8] = 0;
			},
			j: function() {},
			G: function() {
				return !1;
			},
			v: function() {
				return V[5];
			},
			s: bc
		},
		X = {
			i: function() {
				return V[6];
			},
			o: function() {
				V[6] = !0;
			},
			B: function() {
				V[6] = !1;
			},
			C: function() {
				V[6] = !1;
			},
			j: function() {},
			G: function() {
				return ".google.com" != V[1] && 2 < ++ec;
			},
			v: function() {
				return V[7];
			},
			s: function(a) {
				dc(function() {
					bc(a);
				});
			}
		},
		cc = function(a) {
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
					b = $b("js", b);
					var c = Sa();
					R(a, b, "preload", "script", c);
					c = a.createElement("script");
					c.type = "text/javascript";
					c.onerror = function() {
						return g.processGoogleToken({}, 2);
					};
					b = Ja(b);
					Ha(c, b);
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
				b = $b("sync.js", V[1]);
			R(a, b, "preload", "script");
			b = Zb(b);
			var c = w("script"),
				d = "",
				e = Sa();
			e && (d = 'nonce="' + Zb(e) + '"');
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
			dc(function() {
				a.write(f);
				X.o();
			});
		}
	};
	var fc = function(a) {
			ac();
			(U[3] >= +new Date() && U[2] >= +new Date()) || a.j();
		},
		hc = function() {
			g.processGoogleToken =
				g.processGoogleToken ||
				function(a, b) {
					return gc(W, a, b);
				};
			fc(W);
		},
		ic = function() {
			g.processGoogleTokenSync =
				g.processGoogleTokenSync ||
				function(a, b) {
					return gc(X, a, b);
				};
			fc(X);
		},
		gc = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				h = parseInt(b.validLifetimeSecs || "", 10),
				x = b["1p_jar"] || "";
			b = b.pucrd || "";
			ac();
			1 == c ? a.C() : a.B();
			if (!d && a.G()) Yb(".google.com") && (V[1] = ".google.com"), a.j();
			else {
				var v = (T.googleToken = T.googleToken || {}),
					N =
						0 == c && d && k(d) && !e && l(f) && 0 < f && l(h) && 0 < h && k(x);
				e = e && !a.i() && (!(U[3] >= +new Date()) || "NT" == U[1]);
				var wa = !(U[3] >= +new Date()) && 0 != c;
				if (N || e || wa)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(h = e + 1e3 * h),
						cc(c),
						(v[5] = c),
						(v[1] = d),
						(v[2] = f),
						(v[3] = h),
						(v[4] = x),
						(v[6] = b),
						ac();
				if (N || !a.i()) {
					c = a.v();
					for (d = 0; d < c.length; d++) a.s(c[d]);
					c.length = 0;
				}
			}
		};
	var jc = function() {
			this.a = null;
		},
		kc = function(a, b) {
			a.a = b;
		};
	jc.prototype.b = function(a, b, c, d, e) {
		if (Math.random() > (void 0 === c ? 0.01 : c)) return !1;
		(b.error && b.meta && b.id) ||
			(b = new Ua(b, { context: a, id: void 0 === e ? "gpt_exception" : e }));
		if (d || this.a) (b.meta = {}), this.a && this.a(b.meta), d && d(b.meta);
		g.google_js_errors = g.google_js_errors || [];
		g.google_js_errors.push(b);
		g.error_rep_loaded ||
			((b = g.document),
			(a = b.createElement("script")),
			Ha(
				a,
				Ja(
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
	var lc = function(a, b) {
		var c = void 0 === c ? a.b : c;
		try {
			b();
		} catch (d) {
			if (!c.call(a, 420, d, 0.01, void 0, "gpt_exception")) throw d;
		}
	};
	var mc = function(a) {
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
	var nc = function(a) {
		var b = a;
		b = void 0 === b ? g : b;
		if ((b = (b = b.performance) && b.now ? b.now() : null))
			(b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				1024 > a.length && a.push(b);
	};
	var oc = [
		[28, null, null, [1]],
		[38, null, null, [1]],
		[null, 7, null, [null, 0.1]],
		[40, null, null, [1]],
		[72, null, null, [1]],
		[null, 14, null, [null, 1]],
		[56, null, null, [1]],
		[53, null, null, [1]],
		[52, null, null, [1]],
		[69, null, null, [1]],
		[110, null, null, [1]],
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
	var pc = function() {
			return g.googletag || (g.googletag = {});
		},
		qc = function(a, b) {
			var c = pc();
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
		71: 0.05,
		76: "",
		124: 1,
		129: 0.05,
		134: 0.01,
		135: 0.005,
		143: 0.005,
		187: 0.01,
		150: "",
		179: 0,
		211: !1,
		196: 0.001,
		234: 5e-4,
		236: 5e-4,
		197: 0.001,
		152: [],
		172: null,
		191: "001902151859190",
		192: "021902081532110",
		190: "011902081532110",
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
	Y[204] = Ra("{{MOD}}", -1);
	var rc = function() {
		for (var a in Y) this[a] = Y[a];
	};
	p(rc);
	var J = function(a) {
			return rc.f()[a];
		},
		Z = function(a, b) {
			rc.f()[a] = b;
		},
		sc = pc(),
		tc = rc.f(),
		uc = sc._vars_,
		vc;
	for (vc in uc) tc[vc] = uc[vc];
	sc._vars_ = tc;
	var wc = function() {
		Mb.call(this, J(210), { u: J(211), A: J(227), D: J(226) });
	};
	ha(wc, Mb);
	var xc = function() {
		return J(36);
	};
	var yc = (function(a, b) {
			var c = b || Ka;
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
		zc = function() {
			return 0 === yc(J(172));
		};
	var Ac = function() {
		return Ra("0") || 0;
	};
	qc("getVersion", function() {
		return "308";
	});
	var Bc = function() {
		var a = {};
		this[3] = ((a[8] = function(a) {
			return !!n(a);
		}),
		(a[3] = zc),
		(a[2] = xc),
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
			return J(204);
		}),
		(a[4] = Ac),
		(a[2] = function() {
			return 308;
		}),
		(a[5] = function() {
			var a = Ta();
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
	p(Bc);
	var Cc = {
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
			[
				10,
				[[21062352], [21062353, [[20, null, null, [1]]]]],
				[1, [[4, null, 1]]],
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
			[
				50,
				[
					[21062576],
					[21062577, [[20, null, null, [], [[[1, [[4, null, 1]]], [1]]]]]]
				],
				null,
				3
			],
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
			[5, [[21063046], [21063047], [21063048]], [4, null, 7], 9],
			[
				250,
				[[21063065], [21063066, [[116, null, null, [1]]]]],
				[
					3,
					[
						[2, [[8, null, null, 2, null, 294], [7, null, null, 2, null, 1e3]]],
						[8, null, null, 2, null, 2019013100]
					]
				]
			],
			[10, [[21063094], [21063095], [21063096]], [4, null, 7], 9],
			[50, [[21063101], [21063102, [[72, null, null, []]]]]],
			[
				1,
				[
					[21063105],
					[21063106, [[65, null, null, [1]]]],
					[21063107, [[65, null, null, [1]], [71, null, null, [1]]]]
				]
			],
			[
				10,
				[[21063115], [21063116, [[115, null, null, [1]]]]],
				[
					3,
					[
						[2, [[8, null, null, 2, null, 294], [7, null, null, 2, null, 1e3]]],
						[8, null, null, 2, null, 2019013100]
					]
				]
			],
			[
				50,
				[
					[21063138, [[null, 14, null, [null, 1]]]],
					[21063139, [[null, 14, null, [null, 1]], [121, null, null, [1]]]]
				]
			],
			[1, [[21063145], [21063146, [[112, null, null, [1]]]]]],
			[
				1,
				[[21063147], [21063148, [[99, null, null, [1]]]]],
				[
					3,
					[
						[2, [[8, null, null, 2, null, 304], [7, null, null, 2, null, 1e3]]],
						[8, null, null, 2, null, 2019020401]
					]
				]
			],
			[
				50,
				[[21063156], [21063157, [[69, null, null, []], [110, null, null, []]]]]
			],
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
			[50, [[21063224], [21063225, [[124, null, null, [1]]]]]],
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
			[10, [[22322686], [22322687, [[null, 3, null, [null, 0.01]]]]]],
			[
				100,
				[[22325465], [22325466, [[80, null, null, [1]]]]],
				[4, null, 6, null, null, null, null, ["21060611"]]
			],
			[50, [[53887176], [53887177]]],
			[1, [[108809132], [108809133, [[45, null, null, [1]]]]]],
			[10, [[370204054], [370204055, [[113, null, null, [1]]]]]],
			[null, [[370204058], [370204059, [[119, null, null, [1]]]]]]
		],
		4: [
			[null, [[21062304], [21062305, [[34, null, null, [1]]]]]],
			[
				null,
				[
					[21062804],
					[21062805, [[8, null, null, [1]]]],
					[21062806, [[55, null, null, [1]]]]
				]
			],
			[
				null,
				[[21062807], [21062808, [[8, null, null, [1]], [55, null, null, [1]]]]]
			],
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
			[null, [[21063242], [21063243, [[120, null, null, [1]]]]]]
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
				10,
				[
					[
						21062549,
						[
							[null, null, 5, [null, null, "ob"]],
							[null, null, 6, [null, null, "ob"]]
						]
					],
					[21062550, [[null, null, 4, [null, null, "/gpt/pubads_impl_ob_"]]]]
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
						21063249,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21063249"]],
							[null, 12, null, [null, 308]],
							[null, null, 7, [null, null, "21063249"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21063249"]]
						]
					],
					[
						21063250,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21063250"]],
							[null, 12, null, [null, 309]],
							[null, null, 7, [null, null, "21063250"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21063250"]]
						]
					]
				],
				null,
				1
			],
			[
				1,
				[
					[
						21063253,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21063253"]],
							[null, 12, null, [null, 308]],
							[null, null, 7, [null, null, "21063253"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21063253"]]
						]
					],
					[
						21063254,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21063254"]],
							[null, 12, null, [null, 310]],
							[null, null, 7, [null, null, "21063254"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21063254"]]
						]
					]
				],
				null,
				1
			]
		],
		6: [
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
			],
			[50, [[21063160], [21063161, [[null, 14, null, []]]]]]
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
		8: [
			[
				1e3,
				[[21063228, null, [4, null, 6, null, null, null, null, ["21063253"]]]],
				[4, null, 3]
			],
			[
				1e3,
				[[21063229, null, [4, null, 6, null, null, null, null, ["21063254"]]]],
				[4, null, 3]
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
	var Dc = function(a) {
		var b = { J: oc, K: Cc };
		a = a || b;
		Pa() && Z(210, xa(a.K));
		wc.call(this);
		var c = this;
		b = Bc.f();
		b[3][6] = function(a) {
			a: {
				var b = c.g;
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
		this.a = b;
		J(219).length || Z(219, a.J);
		L.f().a = b;
		Z(241, b);
		xb(
			oa(J(219), function(a) {
				return new cb(a);
			})
		);
		Z(230, qb.f().a);
		a = J(245);
		Qb(this, a);
		Rb(a);
		Ub.f();
	};
	ha(Dc, wc);
	w("partner.googleadservices.com");
	var Ec = w("www.googletagservices.com"),
		Fc = function() {
			return J(46) && !J(6)
				? "http://pubads.g.doubleclick.net"
				: "https://securepubads.g.doubleclick.net";
		},
		Gc = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		Ic = function() {
			var a = J(76);
			if (a) return a;
			a = Fc();
			var b = Tb(4, "/gpt/pubads_impl_"),
				c = Hc() || Sb(12) || "308",
				d = Tb(5);
			a = a + b + c + ".js";
			d && (a += "?" + d);
			Z(76, a);
			return a;
		},
		Jc = function(a, b) {
			var c;
			if (!(c = a.currentScript))
				a: {
					if ((a = a.scripts))
						for (c = 0; c < a.length; c++) {
							var d = a[c];
							if (-1 < d.src.indexOf(Ec + "/tag/js/gpt")) {
								c = d;
								break a;
							}
						}
					c = null;
				}
			Z(172, c);
			b = new Dc(b);
			Ob(b, 7);
			Ob(b, 5);
			Ob(b, 8);
			Q(59) && (Z(173, Ec), Z(174, Ec));
			b = J(150);
			ac();
			Yb(b) && (V[1] = b);
		},
		Kc = function() {
			return navigator.getBattery
				? navigator.getBattery().then(function(a) {
						Z(243, a.level);
						Z(244, a.charging);
						Z(242, !0);
				  })
				: null;
		},
		Hc = function() {
			var a = "";
			if (!J(148)) return a;
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
		Lc = function(a, b) {
			var c = pc(),
				d = c.fifWin || window;
			a = a || d.document;
			qc("cmd", []);
			if (c.evalScripts) c.evalScripts();
			else {
				Jc(a, b);
				d.PerformanceObserver && d.PerformanceLongTaskTiming && mc(d);
				nc(d);
				b = Ic();
				if (Gc(a)) {
					d = "gpt-impl-" + Math.random();
					try {
						var e = '<script id="' + d + '" src="' + b + '">\x3c/script>';
						Q(17) &&
							Vb() &&
							(e += '<link rel="preconnect" href="' + Fc() + '">');
						a.write(e);
					} catch (f) {}
					a.getElementById(d) &&
						((c._loadStarted_ = !0), Z(220, !1), Sb(4) || ic());
				}
				c._loadStarted_ ||
					(Sb(4) || hc(),
					Q(16) && R(a, b, "preload", "script"),
					Q(108) &&
						((d = Tb(6)),
						(e = Hc() || Sb(12) || "308"),
						(d =
							Fc() +
							"/gpt/" +
							("pubads_impl_rendering_" + e + ".js") +
							(d ? "?" + d : "")),
						R(a, d, "preload", "script")),
					(d = a.createElement("script")),
					(d.src = b),
					(d.async = !0),
					(a.head || a.body || a.documentElement).appendChild(d),
					Q(17) && Vb() && R(a, Fc(), "preconnect"),
					Z(220, !0),
					(c._loadStarted_ = !0));
				(a = Kc()) &&
					a.catch(function(a) {
						var b = new jc();
						kc(b, function(a) {
							a.methodId = 501;
						});
						b.b(501, a);
					});
			}
		};
	(function(a, b) {
		var c = new jc();
		kc(c, function(a) {
			a.methodId = 420;
		});
		lc(c, function() {
			return Lc(a, b);
		});
	})();
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this));
