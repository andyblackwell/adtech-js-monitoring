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
		h;
	if ("function" == typeof Object.setPrototypeOf) h = Object.setPrototypeOf;
	else {
		var k;
		a: {
			var ba = { H: !0 },
				ca = {};
			try {
				ca.__proto__ = ba;
				k = ca.H;
				break a;
			} catch (a) {}
			k = !1;
		}
		h = k
			? function(a, b) {
					a.__proto__ = b;
					if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
					return a;
			  }
			: null;
	}
	var da = h,
		ea = function(a, b) {
			a.prototype = aa(b.prototype);
			a.prototype.constructor = a;
			if (da) da(a, b);
			else
				for (var c in b)
					if ("prototype" != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d);
						} else a[c] = b[c];
			a.K = b.prototype;
		},
		m = this,
		p = function(a) {
			return "string" == typeof a;
		},
		ha = function() {
			if (null === q)
				a: {
					var a = m.document;
					if (
						(a = a.querySelector && a.querySelector("script[nonce]")) &&
						(a = a.nonce || a.getAttribute("nonce")) &&
						fa.test(a)
					) {
						q = a;
						break a;
					}
					q = "";
				}
			return q;
		},
		fa = /^[\w+/_-]+[=]{0,2}$/,
		q = null,
		ia = function(a) {
			a = a.split(".");
			for (var b = m, c = 0; c < a.length; c++)
				if (((b = b[a[c]]), null == b)) return null;
			return b;
		},
		ja = function() {},
		t = function(a) {
			a.m = void 0;
			a.g = function() {
				return a.m ? a.m : (a.m = new a());
			};
		},
		u = function(a) {
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
		ka = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
		la = 0,
		v = function(a, b) {
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
	var ma = function(a, b) {
			if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
			for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
			return -1;
		},
		w = function(a, b) {
			for (var c = a.length, d = p(a) ? a.split("") : a, e = 0; e < c; e++)
				e in d && b.call(void 0, d[e], e, a);
		},
		na = function(a, b) {
			for (
				var c = a.length, d = [], e = 0, f = p(a) ? a.split("") : a, g = 0;
				g < c;
				g++
			)
				if (g in f) {
					var l = f[g];
					b.call(void 0, l, g, a) && (d[e++] = l);
				}
			return d;
		},
		oa = function(a, b) {
			for (
				var c = a.length, d = Array(c), e = p(a) ? a.split("") : a, f = 0;
				f < c;
				f++
			)
				f in e && (d[f] = b.call(void 0, e[f], f, a));
			return d;
		},
		pa = function(a, b) {
			a: {
				for (var c = a.length, d = p(a) ? a.split("") : a, e = 0; e < c; e++)
					if (e in d && b.call(void 0, d[e], e, a)) {
						b = e;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : p(a) ? a.charAt(b) : a[b];
		},
		qa = function(a, b) {
			a: {
				var c = a.length,
					d = p(a) ? a.split("") : a;
				for (--c; 0 <= c; c--)
					if (c in d && b.call(void 0, d[c], c, a)) {
						b = c;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : p(a) ? a.charAt(b) : a[b];
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
					g = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c =
						sa(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == g[1].length ? 0 : parseInt(g[1], 10)
						) ||
						sa(0 == f[2].length, 0 == g[2].length) ||
						sa(f[2], g[2]);
					f = f[3];
					g = g[3];
				} while (0 == c);
			}
			return c;
		},
		sa = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var x;
	a: {
		var ua = m.navigator;
		if (ua) {
			var va = ua.userAgent;
			if (va) {
				x = va;
				break a;
			}
		}
		x = "";
	}
	var wa = function(a) {
		var b = {},
			c;
		for (c in a) b[c] = a[c];
		return b;
	};
	var y = function(a) {
		y[" "](a);
		return a;
	};
	y[" "] = ja;
	var z = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
	var A = function() {
		this.b = "";
		this.f = xa;
	};
	A.prototype.c = !0;
	A.prototype.a = function() {
		return this.b;
	};
	var ya = function(a) {
			return a instanceof A && a.constructor === A && a.f === xa
				? a.b
				: "type_error:TrustedResourceUrl";
		},
		xa = {};
	var B = function() {
		this.l = "";
		this.G = za;
	};
	B.prototype.c = !0;
	B.prototype.a = function() {
		return this.l;
	};
	var Aa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		za = {},
		Ba = function(a) {
			var b = new B();
			b.l = a;
			return b;
		};
	Ba("about:blank");
	var Ca = function(a, b) {
		a.src = ya(b);
		(b = ha()) && a.setAttribute("nonce", b);
	};
	var Ea = function(a) {
			Da();
			var b = new A();
			b.b = a;
			return b;
		},
		Da = ja;
	var Ia = function(a, b) {
			if (!Fa() && !Ga()) {
				var c = Math.random();
				if (c < b) return (c = Ha(m)), a[Math.floor(c * a.length)];
			}
			return null;
		},
		Ha = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		Ja = function() {
			var a = C(210),
				b;
			for (b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
			return !0;
		},
		Ga = z(function() {
			return -1 != x.indexOf("Google Web Preview") || 1e-4 > Math.random();
		}),
		Fa = z(function() {
			return -1 != x.indexOf("MSIE");
		}),
		Ka = /^(-?[0-9.]{1,30})$/,
		La = function(a, b) {
			return Ka.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		Ma = function() {
			try {
				return ha();
			} catch (a) {}
		};
	var D = function() {
		return m.googletag || (m.googletag = {});
	};
	var E = {
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
		144: 0.05,
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
		191: "001811091519050",
		192: "021811202351440",
		190: "011811091519050",
		180: null,
		219: [],
		230: {},
		210: {},
		227: {},
		226: [],
		241: {},
		202: "",
		213: 1,
		214: 0.05,
		215: 0.01,
		217: 0,
		220: !1,
		228: "//www.googletagservices.com/pubconsole/"
	};
	E[6] = (function(a, b) {
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
	E[49] = new Date().getTime();
	E[36] = /^true$/.test("false");
	E[46] = /^true$/.test("false");
	E[148] = /^true$/.test("false");
	E[221] = /^true$/.test("");
	E[204] = La("{{MOD}}", -1);
	var G = function() {
		for (var a in E) this[a] = E[a];
	};
	t(G);
	var C = function(a) {
			return G.g()[a];
		},
		H = function(a, b) {
			G.g()[a] = b;
		},
		Na = D(),
		Oa = G.g(),
		Pa = Na._vars_,
		Qa;
	for (Qa in Pa) Oa[Qa] = Pa[Qa];
	Na._vars_ = Oa;
	var Ra = function() {
			return La("0") || 0;
		},
		Sa = function() {
			return "276";
		},
		Ta = D();
	Ta.hasOwnProperty("getVersion") || (Ta.getVersion = Sa);
	var I = function() {},
		Ua = "function" == typeof Uint8Array,
		K = function(a, b, c, d) {
			a.b = null;
			b || (b = []);
			a.M = void 0;
			a.f = -1;
			a.a = b;
			a: {
				if ((b = a.a.length)) {
					--b;
					var e = a.a[b];
					if (
						!(
							null === e ||
							"object" != typeof e ||
							"array" == u(e) ||
							(Ua && e instanceof Uint8Array)
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
							? ((e += a.f), (a.a[e] = a.a[e] || J))
							: (Va(a), (a.c[e] = a.c[e] || J));
			if (d && d.length) for (b = 0; b < d.length; b++) Wa(a, d[b]);
		},
		J = [],
		Va = function(a) {
			var b = a.h + a.f;
			a.a[b] || (a.c = a.a[b] = {});
		},
		Xa = function(a, b) {
			if (b < a.h) {
				b += a.f;
				var c = a.a[b];
				return c === J ? (a.a[b] = []) : c;
			}
			if (a.c) return (c = a.c[b]), c === J ? (a.c[b] = []) : c;
		},
		Ya = function(a, b) {
			if (b < a.h) {
				b += a.f;
				var c = a.a[b];
				return c === J ? (a.a[b] = []) : c;
			}
			c = a.c[b];
			return c === J ? (a.c[b] = []) : c;
		},
		L = function(a, b, c) {
			a = Xa(a, b);
			return null == a ? c : a;
		},
		Za = function(a, b, c) {
			b < a.h ? (a.a[b + a.f] = c) : (Va(a), (a.c[b] = c));
		},
		Wa = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					g = Xa(a, f);
				null != g && ((c = f), (d = g), Za(a, f, void 0));
			}
			return c ? (Za(a, c, d), c) : 0;
		},
		M = function(a, b, c) {
			a.b || (a.b = {});
			if (!a.b[c]) {
				var d = Xa(a, c);
				d && (a.b[c] = new b(d));
			}
			return a.b[c];
		},
		N = function(a, b, c) {
			a.b || (a.b = {});
			if (!a.b[c]) {
				for (var d = Ya(a, c), e = [], f = 0; f < d.length; f++)
					e[f] = new b(d[f]);
				a.b[c] = e;
			}
			b = a.b[c];
			b == J && (b = a.b[c] = []);
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
		if (Ga()) return null;
		b = Math.floor(1e3 * Ha(a));
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
	var O = null,
		cb = function() {
			if (null === O) {
				O = "";
				try {
					var a = "";
					try {
						a = m.top.location.hash;
					} catch (c) {
						a = m.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						O = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return O;
		};
	var eb = function(a) {
		K(this, a, db, null);
	};
	v(eb, I);
	var gb = function(a) {
		K(this, a, fb, null);
	};
	v(gb, I);
	var P = function(a) {
		K(this, a, hb, ib);
	};
	v(P, I);
	var jb = function(a) {
		K(this, a, null, null);
	};
	v(jb, I);
	var lb = function(a) {
		K(this, a, kb, null);
	};
	v(lb, I);
	var Q = function(a) {
		K(this, a, mb, nb);
	};
	v(Q, I);
	var db = [2],
		fb = [2];
	gb.prototype.getId = function() {
		return L(this, 1, 0);
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
			var c = N(a, Q, 2);
			if (!c.length) return qb(a, b);
			a = L(a, 1, 0);
			if (1 == a) return ob(rb(c[0], b));
			c = oa(c, function(a) {
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
			var c = Wa(a, nb[0]);
			a: {
				switch (c) {
					case 3:
						var d = L(a, 3, 0);
						break a;
					case 4:
						d = L(a, 4, 0);
						break a;
					case 5:
						d = L(a, 5, 0);
						break a;
				}
				d = void 0;
			}
			if (d && (b = (b = b[c]) && b[d])) {
				try {
					var e = b.apply(null, Ya(a, 8));
				} catch (f) {
					return;
				}
				b = L(a, 1, 0);
				if (4 == b) return !!e;
				d = null != e;
				if (5 == b) return d;
				a: {
					switch (c) {
						case 4:
							a = +L(a, 6, 0);
							break a;
						case 5:
							a = L(a, 7, "");
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
		sb = function(a, b) {
			return !a || !(!b || !rb(a, b));
		};
	var tb = function(a, b) {
			switch (b) {
				case 1:
					return L(a, 1, 0);
				case 2:
					return L(a, 2, 0);
				case 3:
					return L(a, 3, 0);
				case 6:
					return L(a, 6, 0);
				default:
					return null;
			}
		},
		ub = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return L(a, 1, !1);
				case 2:
					return +L(a, 2, 0);
				case 3:
					return L(a, 3, "");
				case 6:
					return Ya(a, 4);
				default:
					return null;
			}
		},
		vb = z(function() {
			var a = "";
			try {
				a = m.top.location.hash;
			} catch (c) {
				a = m.location.hash;
			}
			var b = {};
			if ((a = (a = /\bdflags=({.*})(&|$)/.exec(a)) && a[1]))
				try {
					b = JSON.parse(decodeURIComponent(a));
				} catch (c) {}
			return b;
		}),
		S = function(a, b, c) {
			var d = vb();
			if (d[a] && null != d[a][b]) return d[a][b];
			b = R.g().a[a][b];
			if (!b) return c;
			b = new P(b);
			b = wb(b);
			a = ub(b, a);
			return null != a ? a : c;
		},
		wb = function(a) {
			var b = R.g().b;
			if (b) {
				var c = qa(N(a, jb, 5), function(a) {
					return sb(M(a, Q, 1), b);
				});
				if (c) return M(c, lb, 2);
			}
			return M(a, lb, 4);
		},
		R = function() {
			var a = {};
			this.a = ((a[1] = {}), (a[2] = {}), (a[3] = {}), (a[6] = {}), a);
			this.b = null;
		};
	t(R);
	var xb = function(a) {
		var b = R.g().a;
		w(a, function(a) {
			var c = Wa(a, ib[0]),
				e = tb(a, c);
			e && (b[c][e] = a.a);
		});
	};
	var yb = function(a, b) {
			var c = this,
				d = void 0 === b ? {} : b;
			b = void 0 === d.u ? !1 : d.u;
			var e = void 0 === d.A ? {} : d.A;
			d = void 0 === d.D ? [] : d.D;
			this.h = a;
			this.w = b;
			this.b = e;
			this.a = null;
			this.f = d;
			this.c = {};
			if ((a = cb()))
				(a = a.split(",") || []),
					w(a, function(a) {
						(a = parseInt(a, 10)) && (c.c[a] = !0);
					});
		},
		Ab = function(a, b) {
			var c = a.h[b];
			c &&
				(delete a.h[b],
				w(c, function(b) {
					b = new eb(b);
					sb(M(b, Q, 3), a.a) &&
						(b = zb(a, b)) &&
						(a.f.push(b.getId()), (b = N(b, P, 2)) && xb(b));
				}));
		},
		zb = function(a, b) {
			var c = N(b, gb, 2),
				d = a.a,
				e = d
					? na(c, function(a) {
							return sb(M(a, Q, 3), d);
					  })
					: c,
				f = e.length;
			if (!f) return null;
			c = L(b, 4, 0);
			b = f * L(b, 1, 0);
			if (!c) return Bb(a, e, b / 1e3);
			f = null != a.b[c] ? a.b[c] : 1e3;
			if (0 >= f) return null;
			e = Bb(a, e, b / f);
			a.b[c] = e ? 0 : f - b;
			return e;
		},
		Bb = function(a, b, c) {
			var d = a.c,
				e = pa(b, function(a) {
					return !!d[a.getId()];
				});
			return e ? e : a.w ? null : Ia(b, c);
		};
	var Cb = function(a) {
		var b = !1,
			c = !1;
		c = void 0 === c ? !1 : c;
		b = void 0 === b ? !1 : b;
		m.google_image_requests || (m.google_image_requests = []);
		var d = m.document.createElement("img");
		if (b) {
			var e = function() {
				if (b) {
					var a = m.google_image_requests,
						c = ma(a, d);
					0 <= c && Array.prototype.splice.call(a, c, 1);
				}
				d.removeEventListener && d.removeEventListener("load", e, !1);
				d.removeEventListener && d.removeEventListener("error", e, !1);
			};
			d.addEventListener && d.addEventListener("load", e, !1);
			d.addEventListener && d.addEventListener("error", e, !1);
		}
		c && (d.referrerPolicy = "no-referrer");
		d.src = a;
		m.google_image_requests.push(d);
	};
	var Db = z(function() {
			var a = (m.navigator && m.navigator.userAgent) || "";
			a = a.toLowerCase();
			return (
				-1 != a.indexOf("firefox/") ||
				-1 != a.indexOf("chrome/") ||
				-1 != a.indexOf("opr/")
			);
		}),
		T = function(a, b, c, d, e) {
			d = void 0 === d ? "" : d;
			var f = a.createElement("link");
			try {
				f.rel = c;
				if (-1 != c.toLowerCase().indexOf("stylesheet")) var g = ya(b);
				else {
					if (b instanceof A) var l = ya(b);
					else {
						if (b instanceof B)
							var n =
								b instanceof B && b.constructor === B && b.G === za
									? b.l
									: "type_error:SafeUrl";
						else {
							if (b instanceof B) var r = b;
							else
								(b = "object" == typeof b && b.c ? b.a() : String(b)),
									Aa.test(b) || (b = "about:invalid#zClosurez"),
									(r = Ba(b));
							n = r.a();
						}
						l = n;
					}
					g = l;
				}
				f.href = g;
			} catch (F) {
				return;
			}
			d && "preload" == c && (f.as = d);
			e && (f.nonce = e);
			if ((a = a.getElementsByTagName("head")[0]))
				try {
					a.appendChild(f);
				} catch (F) {}
		};
	var Eb = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Fb = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		Gb = function(a) {
			return Eb.test(a) && !Fb.test(a);
		},
		Hb = function(a) {
			return a.replace(/[\W]/g, function(a) {
				return "&#" + a.charCodeAt() + ";";
			});
		},
		U = m,
		Ib = function(a, b) {
			a = "https://" + ("adservice" + b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(m.location.hostname)];
			V[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(V[1]));
			return a + "?" + b.join("&");
		},
		V,
		W,
		X = function() {
			U = m;
			V = U.googleToken = U.googleToken || {};
			var a = +new Date();
			(V[1] && V[3] > a && 0 < V[2]) ||
				((V[1] = ""), (V[2] = -1), (V[3] = -1), (V[4] = ""), (V[6] = ""));
			W = U.googleIMState = U.googleIMState || {};
			Gb(W[1]) || (W[1] = ".google.com");
			"array" == u(W[5]) || (W[5] = []);
			"boolean" == typeof W[6] || (W[6] = !1);
			"array" == u(W[7]) || (W[7] = []);
			"number" == typeof W[8] || (W[8] = 0);
		},
		Jb = function(a) {
			try {
				a();
			} catch (b) {
				m.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		Lb = function(a) {
			"complete" == m.document.readyState ||
			"loaded" == m.document.readyState ||
			(m.document.currentScript && m.document.currentScript.async)
				? Kb(3)
				: a();
		},
		Mb = 0,
		Y = {
			i: function() {
				return 0 < W[8];
			},
			o: function() {
				W[8]++;
			},
			B: function() {
				0 < W[8] && W[8]--;
			},
			C: function() {
				W[8] = 0;
			},
			j: function() {},
			F: function() {
				return !1;
			},
			v: function() {
				return W[5];
			},
			s: Jb
		},
		Z = {
			i: function() {
				return W[6];
			},
			o: function() {
				W[6] = !0;
			},
			B: function() {
				W[6] = !1;
			},
			C: function() {
				W[6] = !1;
			},
			j: function() {},
			F: function() {
				return ".google.com" != W[1] && 2 < ++Mb;
			},
			v: function() {
				return W[7];
			},
			s: function(a) {
				Lb(function() {
					Jb(a);
				});
			}
		},
		Kb = function(a) {
			1e-5 > Math.random() &&
				Cb(
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
						a
				);
		};
	Y.j = function() {
		if (!Y.i()) {
			var a = m.document,
				b = function(b) {
					b = Ib("js", b);
					var c = Ma();
					T(a, b, "preload", "script", c);
					c = a.createElement("script");
					c.type = "text/javascript";
					c.onerror = function() {
						return m.processGoogleToken({}, 2);
					};
					b = Ea(b);
					Ca(c, b);
					try {
						(a.head || a.body || a.documentElement).appendChild(c), Y.o();
					} catch (g) {}
				},
				c = W[1];
			b(c);
			".google.com" != c && b(".google.com");
			b = {};
			var d = ((b.newToken = "FBT"), b);
			m.setTimeout(function() {
				return m.processGoogleToken(d, 1);
			}, 1e3);
		}
	};
	Z.j = function() {
		if (!Z.i()) {
			var a = m.document,
				b = Ib("sync.js", W[1]);
			T(a, b, "preload", "script");
			b = Hb(b);
			var c = y("script"),
				d = "",
				e = Ma();
			e && (d = 'nonce="' + Hb(e) + '"');
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
			Lb(function() {
				a.write(f);
				Z.o();
			});
		}
	};
	var Nb = function(a) {
			X();
			(V[3] >= +new Date() && V[2] >= +new Date()) || a.j();
		},
		Pb = function() {
			m.processGoogleToken =
				m.processGoogleToken ||
				function(a, b) {
					return Ob(Y, a, b);
				};
			Nb(Y);
		},
		Qb = function() {
			m.processGoogleTokenSync =
				m.processGoogleTokenSync ||
				function(a, b) {
					return Ob(Z, a, b);
				};
			Nb(Z);
		},
		Ob = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				g = parseInt(b.validLifetimeSecs || "", 10),
				l = b["1p_jar"] || "";
			b = b.pucrd || "";
			X();
			1 == c ? a.C() : a.B();
			if (!d && a.F()) Gb(".google.com") && (W[1] = ".google.com"), a.j();
			else {
				var n = (U.googleToken = U.googleToken || {}),
					r =
						0 == c &&
						d &&
						p(d) &&
						!e &&
						"number" == typeof f &&
						0 < f &&
						"number" == typeof g &&
						0 < g &&
						p(l);
				e = e && !a.i() && (!(V[3] >= +new Date()) || "NT" == V[1]);
				var F = !(V[3] >= +new Date()) && 0 != c;
				if (r || e || F)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(g = e + 1e3 * g),
						Kb(c),
						(n[5] = c),
						(n[1] = d),
						(n[2] = f),
						(n[3] = g),
						(n[4] = l),
						(n[6] = b),
						X();
				if (r || !a.i()) {
					c = a.v();
					for (d = 0; d < c.length; d++) a.s(c[d]);
					c.length = 0;
				}
			}
		};
	var Rb = function() {
			this.a = null;
		},
		Sb = function(a, b) {
			a.a = b;
		};
	Rb.prototype.b = function(a, b, c, d, e) {
		if (Math.random() > (void 0 === c ? 0.01 : c)) return !1;
		(b.error && b.meta && b.id) ||
			(b = new bb(b, { context: a, id: void 0 === e ? "gpt_exception" : e }));
		if (d || this.a) (b.meta = {}), this.a && this.a(b.meta), d && d(b.meta);
		m.google_js_errors = m.google_js_errors || [];
		m.google_js_errors.push(b);
		m.error_rep_loaded ||
			((b = m.document),
			(a = b.createElement("script")),
			Ca(
				a,
				Ea(
					m.location.protocol +
						"//pagead2.googlesyndication.com/pagead/js/err_rep.js"
				)
			),
			(b = b.getElementsByTagName("script")[0]) &&
				b.parentNode &&
				b.parentNode.insertBefore(a, b),
			(m.error_rep_loaded = !0));
		return !1;
	};
	var Tb = function(a, b) {
		var c = void 0 === c ? a.b : c;
		try {
			b();
		} catch (d) {
			if (!c.call(a, 420, d, 0.01, void 0, "gpt_exception")) throw d;
		}
	};
	var Ub = function(a) {
		if (!a.google_ltobserver) {
			var b = new a.PerformanceObserver(function(b) {
				var c = (a.google_lt_queue = a.google_lt_queue || []);
				w(b.getEntries(), function(a) {
					return c.push(a);
				});
			});
			b.observe({ entryTypes: ["longtask"] });
			a.google_ltobserver = b;
		}
	};
	var Vb = [
		[28, null, null, [1]],
		[38, null, null, [1]],
		[null, 7, null, [null, 0.1]],
		[40, null, null, [1]],
		[61, null, null, [1]],
		[46, null, null, [1]],
		[null, null, 8, [null, null, "/pagead/js/rum.js"]],
		[11, null, null, [1]],
		[48, null, null, [1]],
		[18, null, null, [1]],
		[39, null, null, [1]],
		[30, null, null, [1]],
		[25, null, null, [1]],
		[3, null, null, [1]],
		[null, 8, null, [null, -1]],
		[15, null, null, [1]],
		[null, 11, null, [null, 10]],
		[null, 2, null, [null, 1e3]],
		[45, null, null, []],
		[null, null, 2, [null, null, "1-0-31"]],
		[21, null, null, [1]],
		[4, null, null, [1]],
		[7, null, null, [1]],
		[94, null, null, [1]]
	];
	var Wb = function() {
		yb.call(this, C(210), { u: C(211), A: C(227), D: C(226) });
	};
	ea(Wb, yb);
	var Xb = function() {
		return C(36);
	};
	var Yb = (function(a, b) {
			var c = b || $a;
			return function() {
				var b = this || m;
				b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {});
				var e = c(a[ka] || (a[ka] = ++la), arguments);
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
		Zb = function() {
			return 0 === Yb(C(172));
		};
	var $b = function() {
		var a = {};
		this[3] = ((a[8] = function(a) {
			return !!ia(a);
		}),
		(a[3] = Zb),
		(a[2] = Xb),
		(a[9] = function(a) {
			a = ia(a);
			var b;
			if ((b = "function" == u(a)))
				(a = a && a.toString && a.toString()),
					(b = p(a) && -1 != a.indexOf("[native code]"));
			return b;
		}),
		(a[10] = function() {
			return window == window.top;
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return C(204);
		}),
		(a[4] = Ra),
		(a[2] = function() {
			return 276;
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
	t($b);
	var ac = {
		0: [[null, [[21062822], [21062823]]]],
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
						[8, null, null, 2, null, 274],
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
						[8, null, null, 2, null, 274],
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
						[8, null, null, 2, null, 274],
						[4, null, 6, null, null, null, null, ["21061508"]],
						[4, null, 8, null, null, null, null, ["google_ltobserver"]]
					]
				]
			],
			[
				50,
				[[21061763], [21061764, [[5, null, null, [1]], [4, null, null, [1]]]]]
			],
			[10, [[21061803], [21061804]]],
			[
				50,
				[[21061999], [21062e3, [[81, null, null, [1]]]]],
				[
					2,
					[
						[8, null, null, 2, null, 274],
						[4, null, 6, null, null, null, null, ["21061508"]],
						[4, null, 10]
					]
				]
			],
			[
				1,
				[
					[21062011],
					[21062012],
					[21062013],
					[21062014],
					[21062015],
					[21062016],
					[21062017],
					[21062018],
					[21062019],
					[21062020],
					[21062021]
				]
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
			[1, [[21062261], [21062262, [[33, null, null, [1]]]]], null, 8],
			[
				50,
				[
					[21062287],
					[
						21062288,
						[
							[56, null, null, [1]],
							[53, null, null, [1]],
							[52, null, null, [1]],
							[67, null, null, [1]],
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
			[5, [[21062414], [21062415, [[64, null, null, [1]]]]]],
			[1, [[21062416], [21062417, [[37, null, null, [1]]]]]],
			[50, [[21062420], [21062421, [[42, null, null, [1]]]]]],
			[50, [[21062452], [21062453, [[43, null, null, [1]]]]]],
			[50, [[21062454], [21062456, [[51, null, null, [1]]]]]],
			[
				10,
				[
					[21062491, [[null, 10, null, [null, 2]]]],
					[21062492, [[null, 10, null, [null, 3]]]]
				]
			],
			[1, [[21062495], [21062496, [[47, null, null, [1]]]]]],
			[
				10,
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
				null,
				[
					[21062505],
					[21062506, [[null, 2, null, [null, 3e3]]]],
					[21062507, [[null, 2, null, [null, 5e3]]]]
				],
				null,
				5
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
			[50, [[21062624], [21062625, [[null, 2, null, []]]]], null, 5],
			[null, [[21062638], [21062639, [[66, null, null, [1]]]]], [4, null, 7]],
			[
				10,
				[[21062667], [21062668, [[62, null, null, [1]], [68, null, null, [1]]]]]
			],
			[1, [[21062693], [21062694, [[65, null, null, [1]]]]]],
			[10, [[21062697], [21062698, [[72, null, null, [1]]]]]],
			[10, [[21062722], [21062723, [[69, null, null, [1]]]]]],
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
			[10, [[21062745], [21062748, [[null, 11, null, [null, 60]]]]]],
			[
				10,
				[
					[21062751],
					[21062752, [[null, 15, null, [null, 1]]]],
					[21062753, [[null, 15, null, [null, 2]]]]
				]
			],
			[1, [[21062761], [21062762]], [4, null, 7]],
			[
				10,
				[
					[21062796],
					[21062797, null, [4, null, 8, null, null, null, null, ["Map"]]]
				]
			],
			[50, [[21062818], [21062819, [[93, null, null, [1]]]]]],
			[10, [[21062830], [21062831, [[90, null, null, [1]]]]]],
			[10, [[21062832], [21062833, [[89, null, null, [1]]]]]],
			[10, [[21062834], [21062835, [[33, null, null, [1]]]]], [4, null, 2], 8],
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
				[
					2,
					[
						[8, null, null, 2, null, 274],
						[4, null, 6, null, null, null, null, ["21060611"]]
					]
				]
			],
			[1, [[108809132], [108809133, [[45, null, null, [1]]]]]]
		],
		4: [
			[null, [[21062304], [21062305, [[34, null, null, [1]]]]]],
			[
				null,
				[
					[21062777],
					[21062778, [[74, null, null, [1]]]],
					[21062779, [[75, null, null, [1]]]],
					[21062780, [[74, null, null, [1]], [75, null, null, [1]]]]
				]
			],
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
				[
					2,
					[
						[8, null, null, 2, null, 274],
						[4, null, 6, null, null, null, null, ["21061508"]]
					]
				]
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
				1,
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
							[67, null, null, [1]],
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
				100,
				[
					[
						21062839,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21062839"]],
							[null, 12, null, [null, 276]],
							[null, null, 7, [null, null, "21062839"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21062839"]]
						]
					],
					[
						21062840,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21062840"]],
							[null, 12, null, [null, 275]],
							[null, null, 7, [null, null, "21062840"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21062840"]]
						]
					]
				],
				null,
				1
			]
		],
		6: [
			[10, [[21062434], [21062435, [[44, null, null, [1]]]]], [4, null, 4]],
			[
				10,
				[
					[21062717],
					[21062718, [[null, 14, null, [null, 1]]]],
					[21062719, [[null, 14, null, [null, 2]]]]
				],
				[1, [[4, null, 6, null, null, null, null, ["21062722", "21062723"]]]]
			]
		],
		7: [
			[
				10,
				[
					[21061507],
					[21061508, [[83, null, null, [1]], [84, null, null, [1]]]]
				],
				[8, null, null, 2, null, 274]
			],
			[
				1e3,
				[
					[
						21062473,
						[
							[null, null, 5, [null, null, "21062473"]],
							[null, null, 6, [null, null, "21062473"]]
						],
						[6, null, null, 4, null, 2]
					],
					[21062474, null, [6, null, null, 4, null, 3]]
				],
				[4, null, 3],
				1
			],
			[1e3, [[21062475, null, [6, null, null, 4, null, 1]]], [4, null, 3], 1]
		]
	};
	var bc = function(a) {
		var b = { I: Vb, J: ac };
		a = a || b;
		Ja() && H(210, wa(a.J));
		Wb.call(this);
		var c = this;
		b = $b.g();
		b[3][6] = function(a) {
			return 0 <= ma(c.f, parseInt(a, 10));
		};
		this.a = b;
		C(219).length || H(219, a.I);
		R.g().b = b;
		H(241, b);
		xb(
			oa(C(219), function(a) {
				return new P(a);
			})
		);
		H(230, R.g().a);
	};
	ea(bc, Wb);
	y("partner.googleadservices.com");
	var cc = y("www.googletagservices.com"),
		dc = function() {
			return C(46) && !C(6)
				? "http://pubads.g.doubleclick.net"
				: "https://securepubads.g.doubleclick.net";
		};
	(function(a, b) {
		var c = new Rb();
		Sb(c, function(a) {
			a.methodId = 420;
		});
		Tb(c, function() {
			var c = a,
				e = D(),
				f = e.fifWin || window;
			c = c || f.document;
			var g = [],
				l = D();
			l.hasOwnProperty("cmd") || (l.cmd = g);
			if (e.evalScripts) e.evalScripts();
			else {
				if (!(g = c.currentScript))
					a: {
						if ((g = c.scripts))
							for (l = 0; l < g.length; l++) {
								var n = g[l];
								if (-1 < n.src.indexOf(cc + "/tag/js/gpt")) {
									g = n;
									break a;
								}
							}
						g = null;
					}
				H(172, g);
				g = new bc(b);
				Ab(g, 7);
				Ab(g, 5);
				S(1, 59, !1) && (H(173, cc), H(174, cc));
				g = C(150);
				X();
				Gb(g) && (W[1] = g);
				f.PerformanceObserver && f.PerformanceLongTaskTiming && Ub(f);
				g = f;
				g = void 0 === g ? m : g;
				if ((g = (g = g.performance) && g.now ? g.now() : null))
					(g = { label: "1", type: 9, value: g }),
						(f = f.google_js_reporting_queue =
							f.google_js_reporting_queue || []),
						1024 > f.length && f.push(g);
				if ((f = C(76))) var r = f;
				else {
					f = dc();
					g = S(3, 4, "/gpt/pubads_impl_");
					l = "";
					if (C(148))
						try {
							n = "";
							try {
								n = m.top.location.hash;
							} catch (F) {
								n = m.location.hash;
							}
							n && (l = (r = n.match(/\bgptv=(\d+)/)) ? r[1] : "");
						} catch (F) {}
					l = l || S(2, 12, 0) || "276";
					r = S(3, 5, "");
					f = f + g + l + ".js";
					r && (f += "?" + r);
					H(76, f);
					r = f;
				}
				f = c.currentScript;
				if (
					!(
						"complete" == c.readyState ||
						"loaded" == c.readyState ||
						(f && f.async)
					)
				) {
					f = "gpt-impl-" + Math.random();
					try {
						(g = '<script id="' + f + '" src="' + r + '">\x3c/script>'),
							S(1, 17, !1) &&
								Db() &&
								(g += '<link rel="preconnect" href="' + dc() + '">'),
							c.write(g);
					} catch (F) {}
					c.getElementById(f) &&
						((e._loadStarted_ = !0), H(220, !1), S(2, 4, 0) || Qb());
				}
				e._loadStarted_ ||
					(S(2, 4, 0) || Pb(),
					S(1, 16, !1) && T(c, r, "preload", "script"),
					(f = c.createElement("script")),
					(f.src = r),
					(f.async = !0),
					(c.head || c.body || c.documentElement).appendChild(f),
					S(1, 17, !1) && Db() && T(c, dc(), "preconnect"),
					H(220, !0),
					(e._loadStarted_ = !0));
			}
		});
	})();
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this));
