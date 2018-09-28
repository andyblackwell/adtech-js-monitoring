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
		h = ba
			? function(a, b) {
					a.__proto__ = b;
					if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
					return a;
			  }
			: null;
	}
	var ea = h,
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
			a.J = b.prototype;
		},
		k = this,
		p = function(a) {
			return "string" == typeof a;
		},
		ja = function() {
			if (null === ha) {
				a: {
					var a = k.document;
					if (
						(a = a.querySelector && a.querySelector("script[nonce]")) &&
						(a = a.nonce || a.getAttribute("nonce")) &&
						ia.test(a)
					)
						break a;
					a = null;
				}
				ha = a || "";
			}
			return ha;
		},
		ia = /^[\w+/_-]+[=]{0,2}$/,
		ha = null,
		ka = function() {},
		la = function(a) {
			a.m = void 0;
			a.g = function() {
				return a.m ? a.m : (a.m = new a());
			};
		},
		ma = function(a) {
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
		q = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.J = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
			a.K = function(a, c, f) {
				for (
					var e = Array(arguments.length - 2), d = 2;
					d < arguments.length;
					d++
				)
					e[d - 2] = arguments[d];
				return b.prototype[c].apply(a, e);
			};
		};
	var r = function(a, b) {
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
					var n = f[g];
					b.call(void 0, n, g, a) && (d[e++] = n);
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
	var t;
	a: {
		var ua = k.navigator;
		if (ua) {
			var va = ua.userAgent;
			if (va) {
				t = va;
				break a;
			}
		}
		t = "";
	}
	var xa = function() {
		var a = wa,
			b = {},
			c;
		for (c in a) b[c] = a[c];
		return b;
	};
	var u = function(a) {
		u[" "](a);
		return a;
	};
	u[" "] = ka;
	var v = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
	var x = function() {
		this.b = "";
		this.f = ya;
	};
	x.prototype.c = !0;
	x.prototype.a = function() {
		return this.b;
	};
	var za = function(a) {
			return a instanceof x && a.constructor === x && a.f === ya
				? a.b
				: "type_error:TrustedResourceUrl";
		},
		ya = {};
	var y = function() {
		this.l = "";
		this.G = Aa;
	};
	y.prototype.c = !0;
	y.prototype.a = function() {
		return this.l;
	};
	var Ba = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		Aa = {},
		Ca = function(a) {
			var b = new y();
			b.l = a;
			return b;
		};
	Ca("about:blank");
	var Da = function(a, b) {
		a.src = za(b);
		(b = ja()) && a.setAttribute("nonce", b);
	};
	var Fa = function(a) {
			Ea();
			var b = new x();
			b.b = a;
			return b;
		},
		Ea = ka;
	var Ja = function(a, b, c) {
			var d = !1;
			void 0 === c || c || (d = Ga());
			return !d && !Ha() && ((c = Math.random()), c < b)
				? ((c = Ia()), a[Math.floor(c * a.length)])
				: null;
		},
		Ia = function() {
			if (!k.crypto) return Math.random();
			try {
				var a = new Uint32Array(1);
				k.crypto.getRandomValues(a);
				return a[0] / 65536 / 65536;
			} catch (b) {
				return Math.random();
			}
		},
		Ka = function() {
			var a = z(210),
				b;
			for (b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
			return !0;
		},
		Ha = v(function() {
			return -1 != t.indexOf("Google Web Preview") || 1e-4 > Math.random();
		}),
		Ga = v(function() {
			return -1 != t.indexOf("MSIE");
		}),
		A = function(a) {
			return /^true$/.test(a);
		},
		La = function() {
			try {
				return ja();
			} catch (a) {}
		};
	var B = function() {
		return k.googletag || (k.googletag = {});
	};
	var C = {
		1: "pagead2.googlesyndication.com",
		2: "pubads.g.doubleclick.net",
		3: "securepubads.g.doubleclick.net",
		173: "pubads.g.doubleclick.net",
		174: "securepubads.g.doubleclick.net",
		7: 0.02,
		13: 1500,
		23: 0.001,
		24: 200,
		33: "pagead2.googlesyndication.com",
		37: 0.01,
		38: 0.001,
		53: "",
		58: 1,
		65: 0,
		66: 1e-5,
		67: 0,
		68: 0,
		69: 1,
		71: 0.05,
		162: 0,
		163: "",
		76: "",
		81: 0.001,
		99: 0.01,
		103: 0.01,
		104: "/pagead/js/rum.js",
		113: 1,
		114: 1,
		115: 0,
		117: 1,
		118: 1,
		124: 1,
		208: 0.01,
		169: 0,
		207: 0.01,
		127: 0,
		129: 0.05,
		134: 0.01,
		135: 0.1,
		229: !1,
		143: 0.005,
		144: 0.001,
		187: 0.01,
		141: 1,
		158: 0.001,
		150: "",
		179: 0.05,
		170: !1,
		211: !1,
		196: 0.001,
		234: 0.01,
		236: 5e-4,
		197: 0.001,
		152: [],
		172: null,
		182: 1e3,
		188: 0.02,
		189: 0.5,
		191: "001809272228320",
		192: "021809142227020",
		190: "011809142227020",
		194: 1,
		225: 0.95,
		231: 0.95,
		180: null,
		219: [],
		230: {},
		210: {},
		227: {},
		226: [],
		195: 1,
		198: 1,
		200: 1,
		201: 0.001,
		202: "",
		239: 0.001,
		213: 1,
		214: 0.05,
		215: 0.01,
		237: 0.01,
		217: 0,
		220: !1,
		228: "//www.googletagservices.com/pubconsole/",
		240: 0
	};
	C[6] = (function(a, b) {
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
	C[49] = new Date().getTime();
	C[36] = A("false");
	C[46] = A("false");
	C[148] = A("false");
	C[221] = A("");
	C[232] = A("false");
	var Ma;
	a: {
		if (/^(-?[0-9.]{1,30})$/.test("{{MOD}}")) {
			var Na = Number("{{MOD}}");
			if (!isNaN(Na)) {
				Ma = Na;
				break a;
			}
		}
		Ma = -1;
	}
	C[204] = Ma;
	var D = function() {
		for (var a in C) this[a] = C[a];
	};
	la(D);
	var z = function(a) {
			return D.g()[a];
		},
		E = function(a, b) {
			D.g()[a] = b;
		},
		Oa = B(),
		Pa = D.g(),
		Qa = Oa._vars_,
		Ra;
	for (Ra in Qa) Pa[Ra] = Qa[Ra];
	Oa._vars_ = Pa;
	var Sa = function() {
			return "259";
		},
		Ta = B();
	Ta.hasOwnProperty("getVersion") || (Ta.getVersion = Sa);
	var F = function() {},
		Ua = "function" == typeof Uint8Array,
		H = function(a, b, c, d) {
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
						e &&
						"object" == typeof e &&
						"array" != ma(e) &&
						!(Ua && e instanceof Uint8Array)
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
							? ((e += a.f), (a.a[e] = a.a[e] || G))
							: (Va(a), (a.c[e] = a.c[e] || G));
			if (d && d.length) for (b = 0; b < d.length; b++) Wa(a, d[b]);
		},
		G = [],
		Va = function(a) {
			var b = a.h + a.f;
			a.a[b] || (a.c = a.a[b] = {});
		},
		Xa = function(a, b) {
			if (b < a.h) {
				b += a.f;
				var c = a.a[b];
				return c === G ? (a.a[b] = []) : c;
			}
			if (a.c) return (c = a.c[b]), c === G ? (a.c[b] = []) : c;
		},
		Ya = function(a, b) {
			if (b < a.h) {
				b += a.f;
				var c = a.a[b];
				return c === G ? (a.a[b] = []) : c;
			}
			c = a.c[b];
			return c === G ? (a.c[b] = []) : c;
		},
		I = function(a, b, c) {
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
		J = function(a, b, c) {
			a.b || (a.b = {});
			if (!a.b[c]) {
				var d = Xa(a, c);
				d && (a.b[c] = new b(d));
			}
			return a.b[c];
		},
		K = function(a, b, c) {
			a.b || (a.b = {});
			if (!a.b[c]) {
				for (var d = Ya(a, c), e = [], f = 0; f < d.length; f++)
					e[f] = new b(d[f]);
				a.b[c] = e;
			}
			b = a.b[c];
			b == G && (b = a.b[c] = []);
			return b;
		};
	var $a = function(a, b) {
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
		ab = function() {
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
	var cb = function(a) {
		H(this, a, bb, null);
	};
	q(cb, F);
	var eb = function(a) {
		H(this, a, db, null);
	};
	q(eb, F);
	var M = function(a) {
		H(this, a, fb, gb);
	};
	q(M, F);
	var hb = function(a) {
		H(this, a, null, null);
	};
	q(hb, F);
	var jb = function(a) {
		H(this, a, ib, null);
	};
	q(jb, F);
	var N = function(a) {
		H(this, a, kb, lb);
	};
	q(N, F);
	var bb = [2],
		db = [2];
	eb.prototype.getId = function() {
		return I(this, 1, 0);
	};
	var fb = [5],
		gb = [[1, 2, 3, 6]],
		ib = [4],
		kb = [2, 8],
		lb = [[3, 4, 5], [6, 7]];
	var mb = function(a) {
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
			a = I(a, 1, 0);
			if (1 == a) return mb(rb(c[0], b));
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
			var c = Wa(a, lb[0]);
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
			if (d) {
				switch (c) {
					case 3:
						var e = b.L;
						break;
					case 4:
						e = b.N;
						break;
					case 5:
						e = b.I;
				}
				b = e ? e[d] : void 0;
				if (b) {
					try {
						var f = b.apply(null, Ya(a, 8));
					} catch (g) {
						return;
					}
					b = I(a, 1, 0);
					if (4 == b) return !!f;
					e = null != f;
					if (5 == b) return e;
					a: {
						switch (c) {
							case 4:
								a = +I(a, 6, 0);
								break a;
							case 5:
								a = I(a, 7, "");
								break a;
						}
						a = void 0;
					}
					if (null != a) {
						if (6 == b) return f === a;
						if (9 == b) return 0 == ta(f, a);
						if (e)
							switch (b) {
								case 7:
									return f < a;
								case 8:
									return f > a;
								case 12:
									return new RegExp(a).test(f);
								case 10:
									return -1 == ta(f, a);
								case 11:
									return 1 == ta(f, a);
							}
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
		ub = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return I(a, 1, !1);
				case 2:
					return +I(a, 2, 0);
				case 3:
					return I(a, 3, "");
				case 6:
					return Ya(a, 4);
				default:
					return null;
			}
		},
		vb = v(function() {
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
		P = function(a, b, c) {
			var d = vb();
			if (d[a] && null != d[a][b]) return d[a][b];
			b = O.g().a[a][b];
			if (!b) return c;
			b = new M(b);
			b = wb(b);
			a = ub(b, a);
			return null != a ? a : c;
		},
		wb = function(a) {
			var b = O.g().b;
			if (b) {
				var c = qa(K(a, hb, 5), function(a) {
					return sb(J(a, N, 1), b);
				});
				if (c) return J(c, jb, 2);
			}
			return J(a, jb, 4);
		},
		O = function() {
			var a = {};
			this.a = ((a[1] = {}), (a[2] = {}), (a[3] = {}), (a[6] = {}), a);
			this.b = null;
		};
	la(O);
	var yb = function() {
			var a = xb;
			O.g().b = a;
		},
		zb = function(a) {
			var b = O.g().a;
			r(a, function(a) {
				var c = Wa(a, gb[0]),
					e = tb(a, c);
				e && (b[c][e] = a.a);
			});
		};
	var Ab = function(a, b) {
			var c = this,
				d = void 0 === b ? {} : b;
			b = void 0 === d.u ? !1 : d.u;
			var e = void 0 === d.A ? {} : d.A;
			d = void 0 === d.D ? [] : d.D;
			this.f = a;
			this.h = b;
			this.b = e;
			this.a = null;
			this.w = d;
			this.c = {};
			if ((a = ab()))
				(a = a.split(",") || []),
					r(a, function(a) {
						(a = parseInt(a, 10)) && (c.c[a] = !0);
					});
		},
		Db = function() {
			var a = Bb.g(),
				b = a.f[5];
			b &&
				(delete a.f[5],
				r(b, function(b) {
					b = new cb(b);
					sb(J(b, N, 3), a.a) &&
						(b = Cb(a, b)) &&
						(a.w.push(b.getId()), (b = K(b, M, 2)) && zb(b));
				}));
		},
		Cb = function(a, b) {
			var c = K(b, eb, 2),
				d = a.a,
				e = d
					? na(c, function(a) {
							return sb(J(a, N, 3), d);
					  })
					: c,
				f = e.length;
			if (!f) return null;
			c = I(b, 4, 0);
			b = f * I(b, 1, 0);
			if (!c) return Eb(a, e, b / 1e3);
			f = null != a.b[c] ? a.b[c] : 1e3;
			if (0 >= f) return null;
			e = Eb(a, e, b / f);
			a.b[c] = e ? 0 : f - b;
			return e;
		},
		Eb = function(a, b, c) {
			var d = a.c,
				e = pa(b, function(a) {
					return !!d[a.getId()];
				});
			return e ? e : a.h ? null : Ja(b, c, !1);
		};
	var Fb = function(a) {
		var b = !1,
			c = !1;
		c = void 0 === c ? !1 : c;
		b = void 0 === b ? !1 : b;
		k.google_image_requests || (k.google_image_requests = []);
		var d = k.document.createElement("img");
		if (b) {
			var e = function() {
				if (b) {
					var a = k.google_image_requests;
					a: if (p(a)) var c = p(d) && 1 == d.length ? a.indexOf(d, 0) : -1;
					else {
						for (c = 0; c < a.length; c++) if (c in a && a[c] === d) break a;
						c = -1;
					}
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
		k.google_image_requests.push(d);
	};
	var Gb = v(function() {
			var a = (k.navigator && k.navigator.userAgent) || "";
			a = a.toLowerCase();
			return (
				-1 != a.indexOf("firefox/") ||
				-1 != a.indexOf("chrome/") ||
				-1 != a.indexOf("opr/")
			);
		}),
		Q = function(a, b, c, d, e) {
			d = void 0 === d ? "" : d;
			var f = a.createElement("link");
			try {
				f.rel = c;
				if (-1 != c.toLowerCase().indexOf("stylesheet")) var g = za(b);
				else {
					if (b instanceof x) var n = za(b);
					else {
						if (b instanceof y)
							var m =
								b instanceof y && b.constructor === y && b.G === Aa
									? b.l
									: "type_error:SafeUrl";
						else {
							if (b instanceof y) var l = b;
							else
								(b = "object" == typeof b && b.c ? b.a() : String(b)),
									Ba.test(b) || (b = "about:invalid#zClosurez"),
									(l = Ca(b));
							m = l.a();
						}
						n = m;
					}
					g = n;
				}
				f.href = g;
			} catch (w) {
				return;
			}
			d && "preload" == c && (f.as = d);
			e && (f.nonce = e);
			if ((a = a.getElementsByTagName("head")[0]))
				try {
					a.appendChild(f);
				} catch (w) {}
		};
	var Hb = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Ib = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		Jb = function(a) {
			return Hb.test(a) && !Ib.test(a);
		},
		Kb = function(a) {
			return a.replace(/[\W]/g, function(a) {
				return "&#" + a.charCodeAt() + ";";
			});
		},
		R = k,
		Lb = function(a, b) {
			a = "https://" + ("adservice" + b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(k.location.hostname)];
			S[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(S[1]));
			return a + "?" + b.join("&");
		},
		S,
		T,
		U = function() {
			R = k;
			S = R.googleToken = R.googleToken || {};
			var a = +new Date();
			(S[1] && S[3] > a && 0 < S[2]) ||
				((S[1] = ""), (S[2] = -1), (S[3] = -1), (S[4] = ""), (S[6] = ""));
			T = R.googleIMState = R.googleIMState || {};
			Jb(T[1]) || (T[1] = ".google.com");
			"array" == ma(T[5]) || (T[5] = []);
			"boolean" == typeof T[6] || (T[6] = !1);
			"array" == ma(T[7]) || (T[7] = []);
			"number" == typeof T[8] || (T[8] = 0);
		},
		Mb = function(a) {
			try {
				a();
			} catch (b) {
				k.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		Ob = function(a) {
			"complete" == k.document.readyState ||
			"loaded" == k.document.readyState ||
			(k.document.currentScript && k.document.currentScript.async)
				? Nb(3)
				: a();
		},
		Pb = 0,
		V = {
			i: function() {
				return 0 < T[8];
			},
			o: function() {
				T[8]++;
			},
			B: function() {
				0 < T[8] && T[8]--;
			},
			C: function() {
				T[8] = 0;
			},
			j: function() {},
			F: function() {
				return !1;
			},
			v: function() {
				return T[5];
			},
			s: Mb
		},
		W = {
			i: function() {
				return T[6];
			},
			o: function() {
				T[6] = !0;
			},
			B: function() {
				T[6] = !1;
			},
			C: function() {
				T[6] = !1;
			},
			j: function() {},
			F: function() {
				return ".google.com" != T[1] && 2 < ++Pb;
			},
			v: function() {
				return T[7];
			},
			s: function(a) {
				Ob(function() {
					Mb(a);
				});
			}
		},
		Nb = function(a) {
			1e-5 > Math.random() &&
				Fb(
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
						a
				);
		};
	V.j = function() {
		if (!V.i()) {
			var a = k.document,
				b = function(b) {
					var c = Lb("js", b),
						d = La();
					Q(a, c, "preload", "script", d);
					b = a.createElement("script");
					b.type = "text/javascript";
					d && (b.nonce = d);
					b.onerror = function() {
						return k.processGoogleToken({}, 2);
					};
					c = Fa(c);
					Da(b, c);
					try {
						(a.head || a.body || a.documentElement).appendChild(b), V.o();
					} catch (n) {}
				},
				c = T[1];
			b(c);
			".google.com" != c && b(".google.com");
			b = {};
			var d = ((b.newToken = "FBT"), b);
			k.setTimeout(function() {
				return k.processGoogleToken(d, 1);
			}, 1e3);
		}
	};
	W.j = function() {
		if (!W.i()) {
			var a = k.document,
				b = Lb("sync.js", T[1]);
			Q(a, b, "preload", "script");
			b = Kb(b);
			var c = u("script"),
				d = "",
				e = La();
			e && (d = 'nonce="' + Kb(e) + '"');
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
			Ob(function() {
				a.write(f);
				W.o();
			});
		}
	};
	var Qb = function(a) {
			U();
			(S[3] >= +new Date() && S[2] >= +new Date()) || a.j();
		},
		Sb = function() {
			k.processGoogleToken =
				k.processGoogleToken ||
				function(a, b) {
					return Rb(V, a, b);
				};
			Qb(V);
		},
		Tb = function() {
			k.processGoogleTokenSync =
				k.processGoogleTokenSync ||
				function(a, b) {
					return Rb(W, a, b);
				};
			Qb(W);
		},
		Rb = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				g = parseInt(b.validLifetimeSecs || "", 10),
				n = b["1p_jar"] || "";
			b = b.pucrd || "";
			U();
			1 == c ? a.C() : a.B();
			if (!d && a.F()) Jb(".google.com") && (T[1] = ".google.com"), a.j();
			else {
				var m = (R.googleToken = R.googleToken || {}),
					l =
						0 == c &&
						d &&
						p(d) &&
						!e &&
						"number" == typeof f &&
						0 < f &&
						"number" == typeof g &&
						0 < g &&
						p(n);
				e = e && !a.i() && (!(S[3] >= +new Date()) || "NT" == S[1]);
				var w = !(S[3] >= +new Date()) && 0 != c;
				if (l || e || w)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(g = e + 1e3 * g),
						Nb(c),
						(m[5] = c),
						(m[1] = d),
						(m[2] = f),
						(m[3] = g),
						(m[4] = n),
						(m[6] = b),
						U();
				if (l || !a.i()) {
					c = a.v();
					for (d = 0; d < c.length; d++) a.s(c[d]);
					c.length = 0;
				}
			}
		};
	var Ub = function() {
			this.a = null;
		},
		Vb = function(a, b) {
			a.a = b;
		};
	Ub.prototype.b = function(a, b, c, d, e) {
		if (Math.random() > (void 0 === c ? 0.01 : c)) return !1;
		(b.error && b.meta && b.id) ||
			(b = new $a(b, { context: a, id: void 0 === e ? "gpt_exception" : e }));
		if (d || this.a) (b.meta = {}), this.a && this.a(b.meta), d && d(b.meta);
		k.google_js_errors = k.google_js_errors || [];
		k.google_js_errors.push(b);
		k.error_rep_loaded ||
			((b = k.document),
			(a = b.createElement("script")),
			Da(
				a,
				Fa(
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
	var Wb = function(a, b) {
		var c = void 0 === c ? a.b : c;
		try {
			b();
		} catch (d) {
			if (!c.call(a, 420, d, 0.01, void 0, "gpt_exception")) throw d;
		}
	};
	var Xb = function(a) {
		if (!a.google_ltobserver) {
			var b = new a.PerformanceObserver(function(b) {
				var c = (a.google_lt_queue = a.google_lt_queue || []);
				r(b.getEntries(), function(a) {
					return c.push(a);
				});
			});
			b.observe({ entryTypes: ["longtask"] });
			a.google_ltobserver = b;
		}
	};
	var Yb = [
		[28, null, null, [1]],
		[38, null, null, [1]],
		[null, 7, null, [null, 0.1], [[[4, null, 5], [null, 1]]]],
		[46, null, null, [1]],
		[11, null, null, [1]],
		[18, null, null, [1]],
		[39, null, null, [1]],
		[30, null, null, [1]],
		[25, null, null, [1]],
		[3, null, null, [1]],
		[null, 8, null, [null, -1]],
		[15, null, null, [1]],
		[null, 11, null, [null, 10]],
		[45, null, null, []],
		[null, null, 2, [null, null, "1-0-29"]],
		[21, null, null, [1]],
		[4, null, null, [1]],
		[7, null, null, [1]]
	];
	var Zb = function() {
		Ab.call(this, z(210), { u: z(211), A: z(227), D: z(226) });
	};
	fa(Zb, Ab);
	var $b = {},
		xb = {
			I: (($b[2] = function() {
				return window.location.href;
			}),
			$b)
		};
	var wa = {
		3: [
			[50, [[21061799], [21061800], [21061801]]],
			[
				10,
				[
					[21062492, [[null, 10, null, [null, 3]]]],
					[21062491, [[null, 10, null, [null, 2]]]]
				]
			],
			[1, [[21062416], [21062417, [[37, null, null, [1]]]]]],
			[50, [[21062457], [21062458, [[40, null, null, [1]]]]]],
			[
				50,
				[[21061763], [21061764, [[5, null, null, [1]], [4, null, null, [1]]]]]
			],
			[50, [[21062377], [21062378, [[11, null, null, []]]]]],
			[null, [[21062156], [21062157, [[15, null, null, [1]]]]]],
			[
				50,
				[
					[21062287],
					[
						21062288,
						[
							[27, null, null, [1]],
							[29, null, null, [1]],
							[14, null, null, [1]],
							[12, null, null, [1]],
							[32, null, null, [1]]
						]
					]
				],
				null,
				4
			],
			[
				10,
				[
					[21062500],
					[
						21062501,
						[
							[null, 6, null, [null, 1]],
							[27, null, null, [1]],
							[29, null, null, [1]],
							[26, null, null, [1]],
							[14, null, null, [1]],
							[12, null, null, [1]],
							[32, null, null, [1]]
						]
					]
				],
				null,
				4
			],
			[1, [[21062261], [21062262, [[33, null, null, [1]]]]]],
			[50, [[21062388], [21062389, [[30, null, null, []]]]]],
			[1, [[20194813], [20194812, [[20, null, null, [1]]]]], null, 3],
			[
				10,
				[[21062352], [21062353, [[20, null, null, [1]]]]],
				[1, [[4, null, 1]]],
				3
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
			[50, [[21062420], [21062421, [[42, null, null, [1]]]]]],
			[1, [[21062495], [21062496, [[47, null, null, [1]]]]]],
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
			[50, [[20196119], [20196120, [[48, null, null, [1]]]]]],
			[10, [[21062185], [21062186, [[24, null, null, [1]]]]]],
			[
				1,
				[
					[22321847],
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
					]
				]
			],
			[
				1e3,
				[
					[
						21062150,
						null,
						[
							3,
							[
								[6, null, null, 1, null, 19],
								[6, null, null, 1, null, 29],
								[6, null, null, 1, null, 39],
								[6, null, null, 1, null, 49]
							]
						]
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
						[
							3,
							[
								[6, null, null, 1, null, 16],
								[6, null, null, 1, null, 26],
								[6, null, null, 1, null, 36],
								[6, null, null, 1, null, 46]
							]
						]
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
						[
							3,
							[
								[6, null, null, 1, null, 17],
								[6, null, null, 1, null, 27],
								[6, null, null, 1, null, 37],
								[6, null, null, 1, null, 47]
							]
						]
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
						[
							3,
							[
								[6, null, null, 1, null, 18],
								[6, null, null, 1, null, 28],
								[6, null, null, 1, null, 38],
								[6, null, null, 1, null, 48]
							]
						]
					]
				],
				[4, null, 3]
			],
			[
				1,
				[
					[21062021],
					[21062012],
					[21062013],
					[21062014],
					[21062015],
					[21062016],
					[21062017],
					[21062018],
					[21062019],
					[21062020],
					[21062011]
				]
			],
			[10, [[22322686], [22322687, [[null, 3, null, [null, 0.01]]]]]],
			[
				1,
				[
					[21062508],
					[21062596, [[null, 11, null, [null, 10]]]],
					[21062579, [[null, 11, null, [null, 100]]]],
					[21062509, [[null, 11, null, [null, 1e3]]]],
					[21062510, [[null, 11, null, [null, 1e4]]]],
					[21062578, [[null, 11, null, [null, 11]]]],
					[21062511, [[null, 11, null, [null, -1]]]]
				]
			],
			[50, [[21062454], [21062456, [[51, null, null, [1]]]]]],
			[
				null,
				[
					[21062120, [[null, null, 2, [null, null, "1-0-29"]]]],
					[21062119],
					[
						21062118,
						[[null, null, null, [null, null, null, ["v", "1-0-29"]], null, 1]]
					]
				]
			],
			[1, [[108809132], [108809133, [[45, null, null, [1]]]]]],
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
			[50, [[21062125], [21062126, [[null, 2, null, [null, 1e3]]]]], null, 5],
			[
				10,
				[
					[21062505],
					[21062507, [[null, 2, null, [null, 5e3]]]],
					[21062506, [[null, 2, null, [null, 3e3]]]]
				],
				null,
				5
			],
			[10, [[21061803], [21061804]]],
			[50, [[21062452], [21062453, [[43, null, null, [1]]]]]]
		],
		4: [
			[null, [[21062498], [21062499, [[8, null, null, [1]]]]]],
			[null, [[21062304], [21062305, [[34, null, null, [1]]]]]]
		],
		5: [
			[
				1,
				[
					[21062549, [[null, null, 5, [null, null, "ob"]]]],
					[21062550, [[null, null, 4, [null, null, "/gpt/pubads_impl_ob_"]]]]
				]
			],
			[
				50,
				[
					[21062168],
					[21062169, [[23, null, null, [1]]]],
					[
						21062605,
						null,
						[12, null, null, null, 2, null, "today.line.me/.+/article"]
					],
					[
						21062606,
						[[23, null, null, [1]]],
						[12, null, null, null, 2, null, "today.line.me/.+/article"]
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
			]
		],
		6: [[10, [[21062434], [21062435, [[44, null, null, [1]]]]], [4, null, 4]]]
	};
	var Bb = function() {
		Ka() && E(210, xa());
		Zb.call(this);
		this.a = xb;
		z(219).length || E(219, Yb);
		yb();
		zb(
			oa(z(219), function(a) {
				return new M(a);
			})
		);
		E(230, O.g().a);
	};
	fa(Bb, Zb);
	la(Bb);
	u("partner.googleadservices.com");
	var ac = u("www.googletagservices.com"),
		X = "",
		Z = "",
		bc = z(46) && !z(6);
	X = bc ? "http:" : "https:";
	Z = z(bc ? 2 : 3);
	var cc = function(a) {
		var b = z(148) ? ab() : "";
		return (b = b && b.match(new RegExp("\\b(" + a.join("|") + ")\\b")))
			? b[0]
			: Ja(a, 0.001 * a.length);
	};
	(function(a) {
		var b = new Ub();
		Vb(b, function(a) {
			a.methodId = 420;
		});
		Wb(b, function() {
			var b = a,
				d = B(),
				e = d.fifWin || window;
			b = b || e.document;
			var f = [],
				g = B();
			g.hasOwnProperty("cmd") || (g.cmd = f);
			if (d.evalScripts) d.evalScripts();
			else {
				Db();
				f = b;
				if ((g = cc(["21061590", "21061591"])))
					"21061591" == g ? (E(173, ac), E(174, ac)) : E(163, g),
						z(152).push(g);
				g = z(150);
				U();
				Jb(g) && (T[1] = g);
				if (!(g = f.currentScript))
					a: {
						if ((f = f.scripts))
							for (g = 0; g < f.length; g++) {
								var n = f[g];
								if (-1 < n.src.indexOf(ac + "/tag/js/gpt")) {
									g = n;
									break a;
								}
							}
						g = null;
					}
				E(172, g);
				e.PerformanceObserver && e.PerformanceLongTaskTiming && Xb(e);
				f = e;
				f = void 0 === f ? k : f;
				if ((f = (f = f.performance) && f.now ? f.now() : null))
					(f = { label: "1", type: 9, value: f }),
						(e = e.google_js_reporting_queue =
							e.google_js_reporting_queue || []),
						1024 > e.length && e.push(f);
				if ((e = z(76))) var m = e;
				else {
					e = "";
					if (z(148))
						try {
							f = "";
							try {
								f = k.top.location.hash;
							} catch (nb) {
								f = k.location.hash;
							}
							if (f) {
								var l = f.match(/\bgptv=(\d+)/);
								e = l ? l[1] : "";
							}
						} catch (nb) {}
					f = ["257", "259"];
					g = f[0] || "259";
					l = P(3, 5, "");
					if (1 < f.length) {
						n = ["21062607", "21062608"];
						var w = cc(n);
						if (w) {
							E(53, w);
							var ob = n[0];
							if (w != ob)
								for (var Y = 1; Y < n.length; ++Y)
									if (w == n[Y]) {
										m = f[Y];
										break;
									}
							if (w == ob || parseInt(m, 10) < parseInt(g, 10))
								l += f[n.length - 1];
						}
					}
					m = e ? e : m || g;
					e = P(3, 4, "/gpt/pubads_impl_");
					e = X + "//" + Z + e + m + ".js";
					l && ((e += "?" + l), E(163, l));
					E(76, e);
					m = e;
				}
				l = b.currentScript;
				if (
					!(
						"complete" == b.readyState ||
						"loaded" == b.readyState ||
						(l && l.async)
					)
				) {
					l = "gpt-impl-" + Math.random();
					try {
						(e = '<script id="' + l + '" src="' + m + '">\x3c/script>'),
							P(1, 17, !1) &&
								Gb() &&
								(e += '<link rel="preconnect" href="' + X + "//" + Z + '">'),
							b.write(e);
					} catch (nb) {}
					b.getElementById(l) &&
						((d._loadStarted_ = !0), E(220, !1), P(2, 4, 0) || Tb());
				}
				d._loadStarted_ ||
					(P(2, 4, 0) || Sb(),
					P(1, 16, !1) && Q(b, m, "preload", "script"),
					(l = b.createElement("script")),
					(l.src = m),
					(l.async = !0),
					(b.head || b.body || b.documentElement).appendChild(l),
					P(1, 17, !1) && Gb() && Q(b, X + "//" + Z, "preconnect"),
					E(220, !0),
					(d._loadStarted_ = !0));
			}
		});
	})();
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this));
