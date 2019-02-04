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
		g;
	if ("function" == typeof Object.setPrototypeOf) g = Object.setPrototypeOf;
	else {
		var ba;
		a: {
			var ca = { H: !0 },
				da = {};
			try {
				da.__proto__ = ca;
				ba = da.H;
				break a;
			} catch (a) {}
			ba = !1;
		}
		g = ba
			? function(a, b) {
					a.__proto__ = b;
					if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
					return a;
			  }
			: null;
	}
	var ea = g,
		fa = function(a, b) {
			a.prototype = aa(b.prototype);
			a.prototype.constructor = a;
			if (ea) ea(a, b);
			else
				for (var c in b)
					if ("prototype" != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d);
						} else a[c] = b[c];
			a.K = b.prototype;
		},
		k = this,
		l = function(a) {
			return "string" == typeof a;
		},
		ia = function() {
			if (null === m)
				a: {
					var a = k.document;
					if (
						(a = a.querySelector && a.querySelector("script[nonce]")) &&
						(a = a.nonce || a.getAttribute("nonce")) &&
						ha.test(a)
					) {
						m = a;
						break a;
					}
					m = "";
				}
			return m;
		},
		ha = /^[\w+/_-]+[=]{0,2}$/,
		m = null,
		ja = function(a) {
			a = a.split(".");
			for (var b = k, c = 0; c < a.length; c++)
				if (((b = b[a[c]]), null == b)) return null;
			return b;
		},
		ka = function() {},
		la = function(a) {
			a.l = void 0;
			a.g = function() {
				return a.l ? a.l : (a.l = new a());
			};
		},
		n = function(a) {
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
		ma = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		na = 0,
		p = function(a, b) {
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
	var q = function(a, b) {
			for (var c = a.length, d = l(a) ? a.split("") : a, e = 0; e < c; e++)
				e in d && b.call(void 0, d[e], e, a);
		},
		oa = function(a, b) {
			for (
				var c = a.length, d = [], e = 0, f = l(a) ? a.split("") : a, h = 0;
				h < c;
				h++
			)
				if (h in f) {
					var v = f[h];
					b.call(void 0, v, h, a) && (d[e++] = v);
				}
			return d;
		},
		qa = function(a, b) {
			for (
				var c = a.length, d = Array(c), e = l(a) ? a.split("") : a, f = 0;
				f < c;
				f++
			)
				f in e && (d[f] = b.call(void 0, e[f], f, a));
			return d;
		},
		ra = function(a, b) {
			a: {
				for (var c = a.length, d = l(a) ? a.split("") : a, e = 0; e < c; e++)
					if (e in d && b.call(void 0, d[e], e, a)) {
						b = e;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : l(a) ? a.charAt(b) : a[b];
		},
		sa = function(a, b) {
			a: {
				var c = a.length,
					d = l(a) ? a.split("") : a;
				for (--c; 0 <= c; c--)
					if (c in d && b.call(void 0, d[c], c, a)) {
						b = c;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : l(a) ? a.charAt(b) : a[b];
		};
	var ta = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		va = function(a, b) {
			var c = 0;
			a = ta(String(a)).split(".");
			b = ta(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					h = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
					if (0 == f[0].length && 0 == h[0].length) break;
					c =
						ua(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == h[1].length ? 0 : parseInt(h[1], 10)
						) ||
						ua(0 == f[2].length, 0 == h[2].length) ||
						ua(f[2], h[2]);
					f = f[3];
					h = h[3];
				} while (0 == c);
			}
			return c;
		},
		ua = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var r;
	a: {
		var wa = k.navigator;
		if (wa) {
			var xa = wa.userAgent;
			if (xa) {
				r = xa;
				break a;
			}
		}
		r = "";
	}
	var ya = function(a) {
		var b = {},
			c;
		for (c in a) b[c] = a[c];
		return b;
	};
	var t = function(a) {
		t[" "](a);
		return a;
	};
	t[" "] = ka;
	var w = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
	var x = function() {
		this.b = "";
		this.f = za;
	};
	x.prototype.c = !0;
	x.prototype.a = function() {
		return this.b;
	};
	var Aa = function(a) {
			return a instanceof x && a.constructor === x && a.f === za
				? a.b
				: "type_error:TrustedResourceUrl";
		},
		za = {};
	var y = function() {
		this.m = "";
		this.G = Ba;
	};
	y.prototype.c = !0;
	y.prototype.a = function() {
		return this.m;
	};
	var Ca = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		Ba = {},
		Da = function(a) {
			var b = new y();
			b.m = a;
			return b;
		};
	Da("about:blank");
	var Ea = function(a, b) {
		a.src = Aa(b);
		(b = ia()) && a.setAttribute("nonce", b);
	};
	var Ga = function(a) {
			Fa();
			var b = new x();
			b.b = a;
			return b;
		},
		Fa = ka;
	var Ka = function(a, b) {
			if (!Ha() && !Ia()) {
				var c = Math.random();
				if (c < b) return (c = Ja(k)), a[Math.floor(c * a.length)];
			}
			return null;
		},
		Ja = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		La = function() {
			var a = z(210),
				b;
			for (b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
			return !0;
		},
		Ia = w(function() {
			return -1 != r.indexOf("Google Web Preview") || 1e-4 > Math.random();
		}),
		Ha = w(function() {
			return -1 != r.indexOf("MSIE");
		}),
		Ma = /^(-?[0-9.]{1,30})$/,
		Na = function(a, b) {
			return Ma.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		Oa = function() {
			try {
				return ia();
			} catch (a) {}
		};
	var Pa = function() {
			return k.googletag || (k.googletag = {});
		},
		Qa = function(a, b) {
			var c = Pa();
			c.hasOwnProperty(a) || (c[a] = b);
		};
	var A = {
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
		191: "001901312147090",
		192: "021901222107370",
		190: "011901222107370",
		245: {},
		180: null,
		219: [],
		230: {},
		210: {},
		227: {},
		226: [],
		241: {},
		202: "",
		214: 0.05,
		215: 0.01,
		220: !1,
		228: "//www.googletagservices.com/pubconsole/",
		242: !1,
		244: !1,
		243: -1
	};
	A[6] = (function(a, b) {
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
	A[49] = new Date().getTime();
	A[36] = /^true$/.test("false");
	A[46] = /^true$/.test("false");
	A[148] = /^true$/.test("false");
	A[221] = /^true$/.test("");
	A[204] = Na("{{MOD}}", -1);
	var B = function() {
		for (var a in A) this[a] = A[a];
	};
	la(B);
	var z = function(a) {
			return B.g()[a];
		},
		C = function(a, b) {
			B.g()[a] = b;
		},
		Ra = Pa(),
		Sa = B.g(),
		Ta = Ra._vars_,
		Ua;
	for (Ua in Ta) Sa[Ua] = Ta[Ua];
	Ra._vars_ = Sa;
	var Va = function() {
		return Na("0") || 0;
	};
	Qa("getVersion", function() {
		return "301";
	});
	var D = function() {},
		Wa = "function" == typeof Uint8Array,
		F = function(a, b, c, d) {
			a.a = null;
			b || (b = []);
			a.M = void 0;
			a.f = -1;
			a.b = b;
			a: {
				if ((b = a.b.length)) {
					--b;
					var e = a.b[b];
					if (
						!(
							null === e ||
							"object" != typeof e ||
							"array" == n(e) ||
							(Wa && e instanceof Uint8Array)
						)
					) {
						a.h = b - a.f;
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
							? ((e += a.f), (a.b[e] = a.b[e] || E))
							: (Xa(a), (a.c[e] = a.c[e] || E));
			if (d && d.length) for (b = 0; b < d.length; b++) Ya(a, d[b]);
		},
		E = [],
		Xa = function(a) {
			var b = a.h + a.f;
			a.b[b] || (a.c = a.b[b] = {});
		},
		G = function(a, b) {
			if (b < a.h) {
				b += a.f;
				var c = a.b[b];
				return c === E ? (a.b[b] = []) : c;
			}
			if (a.c) return (c = a.c[b]), c === E ? (a.c[b] = []) : c;
		},
		H = function(a, b, c) {
			a = G(a, b);
			return null == a ? c : a;
		},
		Za = function(a, b, c) {
			b < a.h ? (a.b[b + a.f] = c) : (Xa(a), (a.c[b] = c));
		},
		Ya = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					h = G(a, f);
				null != h && ((c = f), (d = h), Za(a, f, void 0));
			}
			return c ? (Za(a, c, d), c) : 0;
		},
		J = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				var d = G(a, c);
				d && (a.a[c] = new b(d));
			}
			return a.a[c];
		},
		K = function(a, b, c) {
			a.a || (a.a = {});
			if (!a.a[c]) {
				for (var d = G(a, c), e = [], f = 0; f < d.length; f++)
					e[f] = new b(d[f]);
				a.a[c] = e;
			}
			b = a.a[c];
			b == E && (b = a.a[c] = []);
			return b;
		};
	var $a = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var ab = function() {
		var a = window,
			b = -1;
		try {
			a.localStorage &&
				(b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10));
		} catch (c) {
			return null;
		}
		if (0 <= b && 1e3 > b) return b;
		if (Ia()) return null;
		b = Math.floor(1e3 * Ja(a));
		try {
			if (a.localStorage)
				return a.localStorage.setItem("google_experiment_mod", "" + b), b;
		} catch (c) {}
		return null;
	};
	var bb = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.line = b.line || -1;
		this.msg = b.message || "";
		this.file = b.file || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var L = null,
		cb = function() {
			if (null === L) {
				L = "";
				try {
					var a = "";
					try {
						a = k.top.location.hash;
					} catch (c) {
						a = k.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						L = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return L;
		};
	var eb = function(a) {
		F(this, a, db, null);
	};
	p(eb, D);
	var gb = function(a) {
		F(this, a, fb, null);
	};
	p(gb, D);
	var M = function(a) {
		F(this, a, hb, ib);
	};
	p(M, D);
	var jb = function(a) {
		F(this, a, null, null);
	};
	p(jb, D);
	var lb = function(a) {
		F(this, a, kb, null);
	};
	p(lb, D);
	var N = function(a) {
		F(this, a, mb, nb);
	};
	p(N, D);
	var db = [2],
		fb = [2];
	gb.prototype.getId = function() {
		return H(this, 1, 0);
	};
	var hb = [5],
		ib = [[1, 2, 3, 6]],
		kb = [4],
		mb = [2, 8],
		nb = [[3, 4, 5], [6, 7]];
	var ob = function(a) {
			return null != a ? !a : a;
		},
		pb = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		rb = function(a, b) {
			var c = K(a, N, 2);
			if (!c.length) return qb(a, b);
			a = H(a, 1, 0);
			if (1 == a) return ob(rb(c[0], b));
			c = qa(c, function(a) {
				return function() {
					return rb(a, b);
				};
			});
			switch (a) {
				case 2:
					return pb(c, !1);
				case 3:
					return pb(c, !0);
			}
		},
		qb = function(a, b) {
			var c = Ya(a, nb[0]);
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
				a: {
					switch (c) {
						case 4:
							a = +H(a, 6, 0);
							break a;
						case 5:
							a = H(a, 7, "");
							break a;
					}
					a = void 0;
				}
				if (null != a) {
					if (6 == b) return e === a;
					if (9 == b) return 0 == va(e, a);
					if (d)
						switch (b) {
							case 7:
								return e < a;
							case 8:
								return e > a;
							case 12:
								return new RegExp(a).test(e);
							case 10:
								return -1 == va(e, a);
							case 11:
								return 1 == va(e, a);
						}
				}
			}
		},
		sb = function(a, b) {
			return !a || !(!b || !rb(a, b));
		};
	var O = function(a) {
			this.a = a;
		},
		tb = new O(1),
		ub = new O(2),
		vb = new O(3),
		wb = new O(4),
		P = function(a, b, c) {
			c.hasOwnProperty(a.a) ||
				Object.defineProperty(c, String(a.a), { value: b });
		};
	var xb = function(a, b) {
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
		yb = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return H(a, 1, !1);
				case 2:
					return +H(a, 2, 0);
				case 3:
					return H(a, 3, "");
				case 6:
					return G(a, 4);
				default:
					return null;
			}
		},
		zb = w(function() {
			var a = "";
			try {
				a = k.top.location.hash;
			} catch (c) {
				a = k.location.hash;
			}
			var b = {};
			if ((a = (a = /\bdflags=({.*})(&|$)/.exec(a)) && a[1]))
				try {
					b = JSON.parse(decodeURIComponent(a));
				} catch (c) {}
			return b;
		}),
		R = function(a, b, c) {
			var d = zb();
			if (d[a] && null != d[a][b]) return d[a][b];
			b = Q.g().a[a][b];
			if (!b) return c;
			b = new M(b);
			b = Ab(b);
			a = yb(b, a);
			return null != a ? a : c;
		},
		Ab = function(a) {
			var b = Q.g().b;
			if (b) {
				var c = sa(K(a, jb, 5), function(a) {
					return sb(J(a, N, 1), b);
				});
				if (c) return J(c, lb, 2);
			}
			return J(a, lb, 4);
		},
		Q = function() {
			var a = {};
			this.a = ((a[1] = {}), (a[2] = {}), (a[3] = {}), (a[6] = {}), a);
			this.b = null;
		};
	la(Q);
	var Bb = function(a, b) {
			return R(3, a, void 0 === b ? "" : b);
		},
		Cb = function(a) {
			var b = Q.g().a;
			q(a, function(a) {
				var c = Ya(a, ib[0]),
					e = xb(a, c);
				e && (b[c][e] = a.b);
			});
		};
	var Db = function(a, b) {
			var c = this,
				d = void 0 === b ? {} : b;
			b = void 0 === d.u ? !1 : d.u;
			var e = void 0 === d.A ? {} : d.A;
			d = void 0 === d.D ? [] : d.D;
			this.h = a;
			this.w = b;
			this.c = e;
			this.a = null;
			this.f = d;
			this.b = {};
			if ((a = cb()))
				(a = a.split(",") || []),
					q(a, function(a) {
						(a = parseInt(a, 10)) && (c.b[a] = !0);
					});
		},
		Fb = function(a, b) {
			var c = a.h[b];
			c &&
				(delete a.h[b],
				q(c, function(b) {
					b = new eb(b);
					sb(J(b, N, 3), a.a) &&
						(b = Eb(a, b)) &&
						(a.f.push(b.getId()), (b = K(b, M, 2)) && Cb(b));
				}));
		},
		Eb = function(a, b) {
			var c = K(b, gb, 2),
				d = a.a,
				e = d
					? oa(c, function(a) {
							return sb(J(a, N, 3), d);
					  })
					: c,
				f = e.length;
			if (!f) return null;
			c = H(b, 4, 0);
			b = f * H(b, 1, 0);
			if (!c) return Gb(a, e, b / 1e3);
			f = null != a.c[c] ? a.c[c] : 1e3;
			if (0 >= f) return null;
			e = Gb(a, e, b / f);
			a.c[c] = e ? 0 : f - b;
			return e;
		},
		Gb = function(a, b, c) {
			var d = a.b,
				e = ra(b, function(a) {
					return !!d[a.getId()];
				});
			return e ? e : a.w ? null : Ka(b, c);
		},
		Hb = function(a) {
			var b = z(245);
			P(
				tb,
				function(b) {
					a.b[b] = !0;
				},
				b
			);
			P(
				ub,
				function(b) {
					return void Fb(a, b);
				},
				b
			);
			P(
				vb,
				function() {
					return a.f;
				},
				b
			);
			P(
				wb,
				function(b) {
					a.a = b;
				},
				b
			);
		};
	var Ib = w(function() {
			var a = (k.navigator && k.navigator.userAgent) || "";
			a = a.toLowerCase();
			return (
				-1 != a.indexOf("firefox/") ||
				-1 != a.indexOf("chrome/") ||
				-1 != a.indexOf("opr/")
			);
		}),
		S = function(a, b, c, d, e) {
			d = void 0 === d ? "" : d;
			var f = a.createElement("link");
			try {
				f.rel = c;
				if (-1 != c.toLowerCase().indexOf("stylesheet")) var h = Aa(b);
				else {
					if (b instanceof x) var v = Aa(b);
					else {
						if (b instanceof y)
							var u =
								b instanceof y && b.constructor === y && b.G === Ba
									? b.m
									: "type_error:SafeUrl";
						else {
							if (b instanceof y) var I = b;
							else
								(b = "object" == typeof b && b.c ? b.a() : String(b)),
									Ca.test(b) || (b = "about:invalid#zClosurez"),
									(I = Da(b));
							u = I.a();
						}
						v = u;
					}
					h = v;
				}
				f.href = h;
			} catch (pa) {
				return;
			}
			d && "preload" == c && (f.as = d);
			e && f.setAttribute("nonce", e);
			if ((a = a.getElementsByTagName("head")[0]))
				try {
					a.appendChild(f);
				} catch (pa) {}
		};
	var Jb = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Kb = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		Lb = function(a) {
			return Jb.test(a) && !Kb.test(a);
		},
		Mb = function(a) {
			return a.replace(/[\W]/g, function(a) {
				return "&#" + a.charCodeAt() + ";";
			});
		},
		T = k,
		Nb = function(a, b) {
			a = "https://" + ("adservice" + b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(k.location.hostname)];
			U[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(U[1]));
			return a + "?" + b.join("&");
		},
		U,
		V,
		W = function() {
			T = k;
			U = T.googleToken = T.googleToken || {};
			var a = +new Date();
			(U[1] && U[3] > a && 0 < U[2]) ||
				((U[1] = ""), (U[2] = -1), (U[3] = -1), (U[4] = ""), (U[6] = ""));
			V = T.googleIMState = T.googleIMState || {};
			Lb(V[1]) || (V[1] = ".google.com");
			"array" == n(V[5]) || (V[5] = []);
			"boolean" == typeof V[6] || (V[6] = !1);
			"array" == n(V[7]) || (V[7] = []);
			"number" == typeof V[8] || (V[8] = 0);
		},
		Ob = function(a) {
			try {
				a();
			} catch (b) {
				k.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		Qb = function(a) {
			"complete" == k.document.readyState ||
			"loaded" == k.document.readyState ||
			(k.document.currentScript && k.document.currentScript.async)
				? Pb(3)
				: a();
		},
		Rb = 0,
		X = {
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
			F: function() {
				return !1;
			},
			v: function() {
				return V[5];
			},
			s: Ob
		},
		Y = {
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
			F: function() {
				return ".google.com" != V[1] && 2 < ++Rb;
			},
			v: function() {
				return V[7];
			},
			s: function(a) {
				Qb(function() {
					Ob(a);
				});
			}
		},
		Pb = function(a) {
			if (1e-5 > Math.random()) {
				k.google_image_requests || (k.google_image_requests = []);
				var b = k.document.createElement("img");
				b.src =
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
					a;
				k.google_image_requests.push(b);
			}
		};
	X.j = function() {
		if (!X.i()) {
			var a = k.document,
				b = function(b) {
					b = Nb("js", b);
					var c = Oa();
					S(a, b, "preload", "script", c);
					c = a.createElement("script");
					c.type = "text/javascript";
					c.onerror = function() {
						return k.processGoogleToken({}, 2);
					};
					b = Ga(b);
					Ea(c, b);
					try {
						(a.head || a.body || a.documentElement).appendChild(c), X.o();
					} catch (h) {}
				},
				c = V[1];
			b(c);
			".google.com" != c && b(".google.com");
			b = {};
			var d = ((b.newToken = "FBT"), b);
			k.setTimeout(function() {
				return k.processGoogleToken(d, 1);
			}, 1e3);
		}
	};
	Y.j = function() {
		if (!Y.i()) {
			var a = k.document,
				b = Nb("sync.js", V[1]);
			S(a, b, "preload", "script");
			b = Mb(b);
			var c = t("script"),
				d = "",
				e = Oa();
			e && (d = 'nonce="' + Mb(e) + '"');
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
			Qb(function() {
				a.write(f);
				Y.o();
			});
		}
	};
	var Sb = function(a) {
			W();
			(U[3] >= +new Date() && U[2] >= +new Date()) || a.j();
		},
		Ub = function() {
			k.processGoogleToken =
				k.processGoogleToken ||
				function(a, b) {
					return Tb(X, a, b);
				};
			Sb(X);
		},
		Vb = function() {
			k.processGoogleTokenSync =
				k.processGoogleTokenSync ||
				function(a, b) {
					return Tb(Y, a, b);
				};
			Sb(Y);
		},
		Tb = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				h = parseInt(b.validLifetimeSecs || "", 10),
				v = b["1p_jar"] || "";
			b = b.pucrd || "";
			W();
			1 == c ? a.C() : a.B();
			if (!d && a.F()) Lb(".google.com") && (V[1] = ".google.com"), a.j();
			else {
				var u = (T.googleToken = T.googleToken || {}),
					I =
						0 == c &&
						d &&
						l(d) &&
						!e &&
						"number" == typeof f &&
						0 < f &&
						"number" == typeof h &&
						0 < h &&
						l(v);
				e = e && !a.i() && (!(U[3] >= +new Date()) || "NT" == U[1]);
				var pa = !(U[3] >= +new Date()) && 0 != c;
				if (I || e || pa)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(h = e + 1e3 * h),
						Pb(c),
						(u[5] = c),
						(u[1] = d),
						(u[2] = f),
						(u[3] = h),
						(u[4] = v),
						(u[6] = b),
						W();
				if (I || !a.i()) {
					c = a.v();
					for (d = 0; d < c.length; d++) a.s(c[d]);
					c.length = 0;
				}
			}
		};
	var Wb = function() {
			this.a = null;
		},
		Xb = function(a, b) {
			a.a = b;
		};
	Wb.prototype.b = function(a, b, c, d, e) {
		if (Math.random() > (void 0 === c ? 0.01 : c)) return !1;
		(b.error && b.meta && b.id) ||
			(b = new bb(b, { context: a, id: void 0 === e ? "gpt_exception" : e }));
		if (d || this.a) (b.meta = {}), this.a && this.a(b.meta), d && d(b.meta);
		k.google_js_errors = k.google_js_errors || [];
		k.google_js_errors.push(b);
		k.error_rep_loaded ||
			((b = k.document),
			(a = b.createElement("script")),
			Ea(
				a,
				Ga(
					k.location.protocol +
						"//pagead2.googlesyndication.com/pagead/js/err_rep.js"
				)
			),
			(b = b.getElementsByTagName("script")[0]) &&
				b.parentNode &&
				b.parentNode.insertBefore(a, b),
			(k.error_rep_loaded = !0));
		return !1;
	};
	var Yb = function(a, b) {
		var c = void 0 === c ? a.b : c;
		try {
			b();
		} catch (d) {
			if (!c.call(a, 420, d, 0.01, void 0, "gpt_exception")) throw d;
		}
	};
	var Zb = function(a) {
		if (!a.google_ltobserver) {
			var b = new a.PerformanceObserver(function(b) {
				var c = (a.google_lt_queue = a.google_lt_queue || []);
				q(b.getEntries(), function(a) {
					return c.push(a);
				});
			});
			b.observe({ entryTypes: ["longtask"] });
			a.google_ltobserver = b;
		}
	};
	var $b = function(a) {
		var b = a;
		b = void 0 === b ? k : b;
		if ((b = (b = b.performance) && b.now ? b.now() : null))
			(b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				1024 > a.length && a.push(b);
	};
	var ac = [
		[28, null, null, [1]],
		[38, null, null, [1]],
		[null, 7, null, [null, 0.1]],
		[40, null, null, [1]],
		[72, null, null, [1]],
		[61, null, null, [1]],
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
		[null, null, 2, [null, null, "1-0-31"]],
		[21, null, null, [1]],
		[7, null, null, [1]],
		[94, null, null, [1]]
	];
	var bc = function() {
		Db.call(this, z(210), { u: z(211), A: z(227), D: z(226) });
	};
	fa(bc, Db);
	var cc = function() {
		return z(36);
	};
	var dc = (function(a, b) {
			var c = b || $a;
			return function() {
				var b = this || k;
				b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {});
				var e = c(a[ma] || (a[ma] = ++na), arguments);
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
		ec = function() {
			return 0 === dc(z(172));
		};
	var fc = function() {
		var a = {};
		this[3] = ((a[8] = function(a) {
			return !!ja(a);
		}),
		(a[3] = ec),
		(a[2] = cc),
		(a[9] = function(a) {
			a = ja(a);
			var b;
			if ((b = "function" == n(a)))
				(a = a && a.toString && a.toString()),
					(b = l(a) && -1 != a.indexOf("[native code]"));
			return b;
		}),
		(a[10] = function() {
			return window == window.top;
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return z(204);
		}),
		(a[4] = Va),
		(a[2] = function() {
			return 301;
		}),
		(a[5] = function() {
			var a = ab();
			return null != a ? a : void 0;
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
		a);
	};
	la(fc);
	var gc = {
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
			[50, [[21061763], [21061764, [[5, null, null, [1]]]]]],
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
				1,
				[
					[21062261],
					[21062262, [[92, null, null, [1]], [33, null, null, [1]]]]
				],
				null,
				8
			],
			[
				10,
				[
					[21062287],
					[
						21062288,
						[
							[56, null, null, [1]],
							[53, null, null, [1]],
							[52, null, null, [1]],
							[27, null, null, [1]],
							[88, null, null, [1]],
							[29, null, null, [1]],
							[14, null, null, [1]],
							[12, null, null, [1]],
							[63, null, null, [1]]
						]
					]
				],
				null,
				4
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
			[1, [[21062495], [21062496, [[47, null, null, [1]]]]]],
			[
				1,
				[
					[21062500],
					[
						21062501,
						[
							[null, 6, null, [null, 1]],
							[53, null, null, [1]],
							[52, null, null, [1]],
							[27, null, null, [1]],
							[88, null, null, [1]],
							[29, null, null, [1]],
							[26, null, null, [1]],
							[14, null, null, [1]],
							[12, null, null, [1]],
							[63, null, null, [1]]
						]
					]
				],
				null,
				4
			],
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
			[50, [[21062722], [21062723, [[69, null, null, [1]]]]]],
			[10, [[21062724], [21062725, [[67, null, null, [1]]]]]],
			[
				null,
				[
					[21062738],
					[
						21062739,
						[[null, null, null, [null, null, null, ["v", "1-0-31"]], null, 1]]
					],
					[21062740, [[null, null, 2, [null, null, "1-0-31"]]]]
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
			[50, [[21062830], [21062831, [[90, null, null, [1]]]]]],
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
			[
				1,
				[[21062856], [21062857, [[99, null, null, [1]]]]],
				[2, [[8, null, null, 2, null, 278], [7, null, null, 2, null, 1e3]]]
			],
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
			[
				1,
				[
					[21062937],
					[21062947, [[12, null, null, [1]]]],
					[21062948, [[12, null, null, [1]]]]
				],
				[4, null, 10],
				4
			],
			[
				1,
				[
					[21062939],
					[21062940, [[null, 14, null, [null, 1]], [114, null, null, [1]]]]
				],
				[2, [[8, null, null, 2, null, 291], [7, null, null, 2, null, 1e3]]]
			],
			[1, [[21062949], [21062950, [[108, null, null, [1]]]]]],
			[10, [[21062957], [21062958, [[102, null, null, [1]]]]]],
			[
				1,
				[[21062970], [21062971, [[109, null, null, [1]]]]],
				[2, [[8, null, null, 2, null, 289], [7, null, null, 2, null, 1e3]]]
			],
			[10, [[21062975], [21062977, [[104, null, null, [1]]]]]],
			[
				1,
				[[21063011], [21063012, [[117, null, null, [1]]]]],
				[2, [[8, null, null, 2, null, 297], [7, null, null, 2, null, 1e3]]]
			],
			[50, [[21063015], [21063016, [[97, null, null, [1]]]]]],
			[
				10,
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
			[10, [[21063044], [21063045, [[110, null, null, [1]]]]]],
			[
				5,
				[[21063046], [21063047], [21063048]],
				[
					2,
					[
						[4, null, 7],
						[8, null, null, 2, null, 278],
						[7, null, null, 2, null, 1e3]
					]
				],
				9
			],
			[
				500,
				[
					[
						21063064,
						[
							[56, null, null, [1]],
							[53, null, null, [1]],
							[52, null, null, [1]],
							[27, null, null, [1]],
							[29, null, null, [1]],
							[14, null, null, [1]],
							[12, null, null, [1]],
							[63, null, null, [1]]
						]
					]
				],
				null,
				4
			],
			[
				50,
				[[21063065], [21063066, [[116, null, null, [1]]]]],
				[2, [[8, null, null, 2, null, 294], [7, null, null, 2, null, 1e3]]]
			],
			[
				1,
				[
					[21063090],
					[
						21063091,
						[[null, null, null, [null, null, null, ["cb", "1"]], null, 1]]
					]
				]
			],
			[
				10,
				[[21063094], [21063095], [21063096]],
				[
					2,
					[
						[4, null, 7],
						[8, null, null, 2, null, 278],
						[7, null, null, 2, null, 1e3]
					]
				],
				9
			],
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
				1,
				[[21063115], [21063116, [[115, null, null, [1]]]]],
				[2, [[8, null, null, 2, null, 294], [7, null, null, 2, null, 1e3]]]
			],
			[
				50,
				[
					[21063138, [[null, 14, null, [null, 1]]]],
					[21063139, [[null, 14, null, [null, 1]], [121, null, null, [1]]]]
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
			[10, [[22322686], [22322687, [[null, 3, null, [null, 0.01]]]]]],
			[
				100,
				[[22325465], [22325466, [[80, null, null, [1]]]]],
				[4, null, 6, null, null, null, null, ["21060611"]]
			],
			[10, [[53887176], [53887177]]],
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
			[null, [[21063039], [21063040, [[70, null, null, [1]]]]]]
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
					[
						21062763,
						[
							[56, null, null, [1]],
							[53, null, null, [1]],
							[52, null, null, [1]],
							[27, null, null, [1]],
							[88, null, null, [1]],
							[29, null, null, [1]],
							[14, null, null, [1]],
							[12, null, null, [1]],
							[63, null, null, [1]]
						]
					]
				],
				[12, null, null, null, 3, null, "googEnableStrictApi"],
				4
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
				1,
				[
					[
						21063140,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21063140"]],
							[null, 12, null, [null, 301]],
							[null, null, 7, [null, null, "21063140"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21063140"]]
						]
					],
					[
						21063141,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21063141"]],
							[null, 12, null, [null, 304]],
							[null, null, 7, [null, null, "21063141"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21063141"]]
						]
					]
				],
				null,
				1
			]
		],
		6: [
			[50, [[21062920], [21062921, [[null, 14, null, [null, 1]]]]]],
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
			[1e3, [[21063142, null, [6, null, null, 4, null, 1]]], [4, null, 3], 1],
			[
				1e3,
				[
					[
						21063143,
						[
							[null, null, 5, [null, null, "21063143"]],
							[null, null, 6, [null, null, "21063143"]]
						],
						[6, null, null, 4, null, 2]
					],
					[21063144, null, [6, null, null, 4, null, 3]]
				],
				[4, null, 3],
				1
			]
		]
	};
	var hc = function(a) {
		var b = { I: ac, J: gc };
		a = a || b;
		La() && C(210, ya(a.J));
		bc.call(this);
		var c = this;
		b = fc.g();
		b[3][6] = function(a) {
			a: {
				var b = c.f;
				a = parseInt(a, 10);
				if (l(b)) b = l(a) && 1 == a.length ? b.indexOf(a, 0) : -1;
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
		z(219).length || C(219, a.I);
		Q.g().b = b;
		C(241, b);
		Cb(
			qa(z(219), function(a) {
				return new M(a);
			})
		);
		C(230, Q.g().a);
		Hb(this);
	};
	fa(hc, bc);
	t("partner.googleadservices.com");
	var ic = t("www.googletagservices.com"),
		Z = function() {
			return z(46) && !z(6)
				? "http://pubads.g.doubleclick.net"
				: "https://securepubads.g.doubleclick.net";
		},
		jc = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		lc = function() {
			var a = z(76);
			if (a) return a;
			a = Z();
			var b = Bb(4, "/gpt/pubads_impl_"),
				c = kc() || R(2, 12, 0) || "301",
				d = Bb(5);
			a = a + b + c + ".js";
			d && (a += "?" + d);
			C(76, a);
			return a;
		},
		mc = function(a, b) {
			var c;
			if (!(c = a.currentScript))
				a: {
					if ((a = a.scripts))
						for (c = 0; c < a.length; c++) {
							var d = a[c];
							if (-1 < d.src.indexOf(ic + "/tag/js/gpt")) {
								c = d;
								break a;
							}
						}
					c = null;
				}
			C(172, c);
			b = new hc(b);
			Fb(b, 7);
			Fb(b, 5);
			R(1, 59, !1) && (C(173, ic), C(174, ic));
			b = z(150);
			W();
			Lb(b) && (V[1] = b);
		},
		nc = function() {
			return navigator.getBattery
				? navigator.getBattery().then(function(a) {
						C(243, a.level);
						C(244, a.charging);
						C(242, !0);
				  })
				: null;
		},
		kc = function() {
			var a = "";
			if (!z(148)) return a;
			try {
				var b = "";
				try {
					b = k.top.location.hash;
				} catch (d) {
					b = k.location.hash;
				}
				if (b) {
					var c = b.match(/\bgptv=(\d+)/);
					a = c ? c[1] : "";
				}
			} catch (d) {}
			return a;
		},
		oc = function(a, b) {
			var c = Pa(),
				d = c.fifWin || window;
			a = a || d.document;
			Qa("cmd", []);
			if (c.evalScripts) c.evalScripts();
			else {
				mc(a, b);
				d.PerformanceObserver && d.PerformanceLongTaskTiming && Zb(d);
				$b(d);
				b = lc();
				if (jc(a)) {
					d = "gpt-impl-" + Math.random();
					try {
						var e = '<script id="' + d + '" src="' + b + '">\x3c/script>';
						R(1, 17, !1) &&
							Ib() &&
							(e += '<link rel="preconnect" href="' + Z() + '">');
						a.write(e);
					} catch (f) {}
					a.getElementById(d) &&
						((c._loadStarted_ = !0), C(220, !1), R(2, 4, 0) || Vb());
				}
				c._loadStarted_ ||
					(R(2, 4, 0) || Ub(),
					R(1, 16, !1) && S(a, b, "preload", "script"),
					R(1, 108, !1) &&
						((d = Bb(6)),
						(e = kc() || R(2, 12, 0) || "301"),
						(d =
							Z() +
							"/gpt/" +
							("pubads_impl_rendering_" + e + ".js") +
							(d ? "?" + d : "")),
						S(a, d, "preload", "script")),
					(d = a.createElement("script")),
					(d.src = b),
					(d.async = !0),
					(a.head || a.body || a.documentElement).appendChild(d),
					R(1, 17, !1) && Ib() && S(a, Z(), "preconnect"),
					C(220, !0),
					(c._loadStarted_ = !0));
				(a = nc()) &&
					a.catch(function(a) {
						var b = new Wb();
						Xb(b, function(a) {
							a.methodId = 501;
						});
						b.b(501, a);
					});
			}
		};
	(function(a, b) {
		var c = new Wb();
		Xb(c, function(a) {
			a.methodId = 420;
		});
		Yb(c, function() {
			return oc(a, b);
		});
	})();
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this));
