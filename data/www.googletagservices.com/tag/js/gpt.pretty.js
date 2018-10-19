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
							var e = Object.getOwnPropertyDescriptor(b, c);
							e && Object.defineProperty(a, c, e);
						} else a[c] = b[c];
			a.I = b.prototype;
		},
		n = this,
		p = function(a) {
			return "string" == typeof a;
		},
		ha = function() {
			if (null === q) {
				a: {
					var a = n.document;
					if (
						(a = a.querySelector && a.querySelector("script[nonce]")) &&
						(a = a.nonce || a.getAttribute("nonce")) &&
						fa.test(a)
					)
						break a;
					a = null;
				}
				q = a || "";
			}
			return q;
		},
		fa = /^[\w+/_-]+[=]{0,2}$/,
		q = null,
		ia = function() {},
		r = function(a) {
			a.m = void 0;
			a.g = function() {
				return a.m ? a.m : (a.m = new a());
			};
		},
		ja = function(a) {
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
		t = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.I = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
			a.J = function(a, c, f) {
				for (
					var e = Array(arguments.length - 2), d = 2;
					d < arguments.length;
					d++
				)
					e[d - 2] = arguments[d];
				return b.prototype[c].apply(a, e);
			};
		};
	var ma = function(a, b) {
			if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
			for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
			return -1;
		},
		u = function(a, b) {
			for (var c = a.length, e = p(a) ? a.split("") : a, d = 0; d < c; d++)
				d in e && b.call(void 0, e[d], d, a);
		},
		na = function(a, b) {
			for (
				var c = a.length, e = [], d = 0, f = p(a) ? a.split("") : a, g = 0;
				g < c;
				g++
			)
				if (g in f) {
					var m = f[g];
					b.call(void 0, m, g, a) && (e[d++] = m);
				}
			return e;
		},
		pa = function(a, b) {
			for (
				var c = a.length, e = Array(c), d = p(a) ? a.split("") : a, f = 0;
				f < c;
				f++
			)
				f in d && (e[f] = b.call(void 0, d[f], f, a));
			return e;
		},
		qa = function(a, b) {
			a: {
				for (var c = a.length, e = p(a) ? a.split("") : a, d = 0; d < c; d++)
					if (d in e && b.call(void 0, e[d], d, a)) {
						b = d;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : p(a) ? a.charAt(b) : a[b];
		},
		ra = function(a, b) {
			a: {
				var c = a.length,
					e = p(a) ? a.split("") : a;
				for (--c; 0 <= c; c--)
					if (c in e && b.call(void 0, e[c], c, a)) {
						b = c;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : p(a) ? a.charAt(b) : a[b];
		};
	var sa = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		ua = function(a, b) {
			var c = 0;
			a = sa(String(a)).split(".");
			b = sa(String(b)).split(".");
			for (var e = Math.max(a.length, b.length), d = 0; 0 == c && d < e; d++) {
				var f = a[d] || "",
					g = b[d] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					if (0 == f[0].length && 0 == g[0].length) break;
					c =
						ta(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == g[1].length ? 0 : parseInt(g[1], 10)
						) ||
						ta(0 == f[2].length, 0 == g[2].length) ||
						ta(f[2], g[2]);
					f = f[3];
					g = g[3];
				} while (0 == c);
			}
			return c;
		},
		ta = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var v;
	a: {
		var va = n.navigator;
		if (va) {
			var wa = va.userAgent;
			if (wa) {
				v = wa;
				break a;
			}
		}
		v = "";
	}
	var ya = function() {
		var a = xa,
			b = {},
			c;
		for (c in a) b[c] = a[c];
		return b;
	};
	var x = function(a) {
		x[" "](a);
		return a;
	};
	x[" "] = ia;
	var y = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
	var z = function() {
		this.b = "";
		this.f = za;
	};
	z.prototype.c = !0;
	z.prototype.a = function() {
		return this.b;
	};
	var Aa = function(a) {
			return a instanceof z && a.constructor === z && a.f === za
				? a.b
				: "type_error:TrustedResourceUrl";
		},
		za = {};
	var A = function() {
		this.l = "";
		this.G = Ba;
	};
	A.prototype.c = !0;
	A.prototype.a = function() {
		return this.l;
	};
	var Ca = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		Ba = {},
		Da = function(a) {
			var b = new A();
			b.l = a;
			return b;
		};
	Da("about:blank");
	var Ea = function(a, b) {
		a.src = Aa(b);
		(b = ha()) && a.setAttribute("nonce", b);
	};
	var Ga = function(a) {
			Fa();
			var b = new z();
			b.b = a;
			return b;
		},
		Fa = ia;
	var Ka = function(a, b) {
			if (!Ha() && !Ia()) {
				var c = Math.random();
				if (c < b) return (c = Ja()), a[Math.floor(c * a.length)];
			}
			return null;
		},
		Ja = function() {
			if (!n.crypto) return Math.random();
			try {
				var a = new Uint32Array(1);
				n.crypto.getRandomValues(a);
				return a[0] / 65536 / 65536;
			} catch (b) {
				return Math.random();
			}
		},
		La = function() {
			var a = B(210),
				b;
			for (b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
			return !0;
		},
		Ia = y(function() {
			return -1 != v.indexOf("Google Web Preview") || 1e-4 > Math.random();
		}),
		Ha = y(function() {
			return -1 != v.indexOf("MSIE");
		}),
		Ma = /^(-?[0-9.]{1,30})$/,
		Na = function(a, b) {
			return Ma.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		C = function(a) {
			return /^true$/.test(a);
		},
		Oa = function() {
			try {
				return ha();
			} catch (a) {}
		};
	var D = function() {
		return n.googletag || (n.googletag = {});
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
		191: "001810171544580",
		192: "021810152207300",
		190: "011810152207300",
		231: 0.95,
		180: null,
		219: [],
		230: {},
		210: {},
		227: {},
		226: [],
		241: {},
		200: 0,
		202: "",
		239: 0.001,
		213: 1,
		214: 0.05,
		215: 0.01,
		217: 0,
		220: !1,
		228: "//www.googletagservices.com/pubconsole/",
		240: 0.005
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
		} catch (e) {}
		return !0;
	})(window);
	E[49] = new Date().getTime();
	E[36] = C("false");
	E[46] = C("false");
	E[148] = C("false");
	E[221] = C("");
	E[232] = C("false");
	E[204] = Na("{{MOD}}", -1);
	var F = function() {
		for (var a in E) this[a] = E[a];
	};
	r(F);
	var B = function(a) {
			return F.g()[a];
		},
		G = function(a, b) {
			F.g()[a] = b;
		},
		Pa = D(),
		Qa = F.g(),
		Ra = Pa._vars_,
		Sa;
	for (Sa in Ra) Qa[Sa] = Ra[Sa];
	Pa._vars_ = Qa;
	var Ta = function() {
			return Na("0") || 0;
		},
		Ua = function() {
			return "266";
		},
		Va = D();
	Va.hasOwnProperty("getVersion") || (Va.getVersion = Ua);
	var H = function() {},
		Wa = "function" == typeof Uint8Array,
		J = function(a, b, c, e) {
			a.b = null;
			b || (b = []);
			a.K = void 0;
			a.f = -1;
			a.a = b;
			a: {
				if ((b = a.a.length)) {
					--b;
					var d = a.a[b];
					if (
						!(
							null === d ||
							"object" != typeof d ||
							"array" == ja(d) ||
							(Wa && d instanceof Uint8Array)
						)
					) {
						a.h = b - a.f;
						a.c = d;
						break a;
					}
				}
				a.h = Number.MAX_VALUE;
			}
			a.w = {};
			if (c)
				for (b = 0; b < c.length; b++)
					(d = c[b]),
						d < a.h
							? ((d += a.f), (a.a[d] = a.a[d] || I))
							: (Xa(a), (a.c[d] = a.c[d] || I));
			if (e && e.length) for (b = 0; b < e.length; b++) Ya(a, e[b]);
		},
		I = [],
		Xa = function(a) {
			var b = a.h + a.f;
			a.a[b] || (a.c = a.a[b] = {});
		},
		Za = function(a, b) {
			if (b < a.h) {
				b += a.f;
				var c = a.a[b];
				return c === I ? (a.a[b] = []) : c;
			}
			if (a.c) return (c = a.c[b]), c === I ? (a.c[b] = []) : c;
		},
		$a = function(a, b) {
			if (b < a.h) {
				b += a.f;
				var c = a.a[b];
				return c === I ? (a.a[b] = []) : c;
			}
			c = a.c[b];
			return c === I ? (a.c[b] = []) : c;
		},
		K = function(a, b, c) {
			a = Za(a, b);
			return null == a ? c : a;
		},
		ab = function(a, b, c) {
			b < a.h ? (a.a[b + a.f] = c) : (Xa(a), (a.c[b] = c));
		},
		Ya = function(a, b) {
			for (var c, e, d = 0; d < b.length; d++) {
				var f = b[d],
					g = Za(a, f);
				null != g && ((c = f), (e = g), ab(a, f, void 0));
			}
			return c ? (ab(a, c, e), c) : 0;
		},
		L = function(a, b, c) {
			a.b || (a.b = {});
			if (!a.b[c]) {
				var e = Za(a, c);
				e && (a.b[c] = new b(e));
			}
			return a.b[c];
		},
		M = function(a, b, c) {
			a.b || (a.b = {});
			if (!a.b[c]) {
				for (var e = $a(a, c), d = [], f = 0; f < e.length; f++)
					d[f] = new b(e[f]);
				a.b[c] = d;
			}
			b = a.b[c];
			b == I && (b = a.b[c] = []);
			return b;
		};
	var bb = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var cb = function(a, b) {
		var c = void 0 === c ? {} : c;
		this.error = a;
		this.context = b.context;
		this.line = b.line || -1;
		this.msg = b.message || "";
		this.file = b.file || "";
		this.id = b.id || "jserror";
		this.meta = c;
	};
	var N = null,
		db = function() {
			if (null === N) {
				N = "";
				try {
					var a = "";
					try {
						a = n.top.location.hash;
					} catch (c) {
						a = n.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						N = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return N;
		};
	var fb = function(a) {
		J(this, a, eb, null);
	};
	t(fb, H);
	var hb = function(a) {
		J(this, a, gb, null);
	};
	t(hb, H);
	var O = function(a) {
		J(this, a, ib, jb);
	};
	t(O, H);
	var kb = function(a) {
		J(this, a, null, null);
	};
	t(kb, H);
	var mb = function(a) {
		J(this, a, lb, null);
	};
	t(mb, H);
	var P = function(a) {
		J(this, a, nb, ob);
	};
	t(P, H);
	var eb = [2],
		gb = [2];
	hb.prototype.getId = function() {
		return K(this, 1, 0);
	};
	var ib = [5],
		jb = [[1, 2, 3, 6]],
		lb = [4],
		nb = [2, 8],
		ob = [[3, 4, 5], [6, 7]];
	var pb = function(a) {
			return null != a ? !a : a;
		},
		qb = function(a, b) {
			for (var c = !1, e = 0; e < a.length; e++) {
				var d = a[e].call();
				if (d == b) return d;
				null == d && (c = !0);
			}
			if (!c) return !b;
		},
		sb = function(a, b) {
			var c = M(a, P, 2);
			if (!c.length) return rb(a, b);
			a = K(a, 1, 0);
			if (1 == a) return pb(sb(c[0], b));
			c = pa(c, function(a) {
				return function() {
					return sb(a, b);
				};
			});
			switch (a) {
				case 2:
					return qb(c, !1);
				case 3:
					return qb(c, !0);
			}
		},
		rb = function(a, b) {
			var c = Ya(a, ob[0]);
			a: {
				switch (c) {
					case 3:
						var e = K(a, 3, 0);
						break a;
					case 4:
						e = K(a, 4, 0);
						break a;
					case 5:
						e = K(a, 5, 0);
						break a;
				}
				e = void 0;
			}
			if (e && (b = (b = b[c]) && b[e])) {
				try {
					var d = b.apply(null, $a(a, 8));
				} catch (f) {
					return;
				}
				b = K(a, 1, 0);
				if (4 == b) return !!d;
				e = null != d;
				if (5 == b) return e;
				a: {
					switch (c) {
						case 4:
							a = +K(a, 6, 0);
							break a;
						case 5:
							a = K(a, 7, "");
							break a;
					}
					a = void 0;
				}
				if (null != a) {
					if (6 == b) return d === a;
					if (9 == b) return 0 == ua(d, a);
					if (e)
						switch (b) {
							case 7:
								return d < a;
							case 8:
								return d > a;
							case 12:
								return new RegExp(a).test(d);
							case 10:
								return -1 == ua(d, a);
							case 11:
								return 1 == ua(d, a);
						}
				}
			}
		},
		tb = function(a, b) {
			return !a || !(!b || !sb(a, b));
		};
	var ub = function(a, b) {
			switch (b) {
				case 1:
					return K(a, 1, 0);
				case 2:
					return K(a, 2, 0);
				case 3:
					return K(a, 3, 0);
				case 6:
					return K(a, 6, 0);
				default:
					return null;
			}
		},
		vb = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return K(a, 1, !1);
				case 2:
					return +K(a, 2, 0);
				case 3:
					return K(a, 3, "");
				case 6:
					return $a(a, 4);
				default:
					return null;
			}
		},
		wb = y(function() {
			var a = "";
			try {
				a = n.top.location.hash;
			} catch (c) {
				a = n.location.hash;
			}
			var b = {};
			if ((a = (a = /\bdflags=({.*})(&|$)/.exec(a)) && a[1]))
				try {
					b = JSON.parse(decodeURIComponent(a));
				} catch (c) {}
			return b;
		}),
		R = function(a, b, c) {
			var e = wb();
			if (e[a] && null != e[a][b]) return e[a][b];
			b = Q.g().a[a][b];
			if (!b) return c;
			b = new O(b);
			b = xb(b);
			a = vb(b, a);
			return null != a ? a : c;
		},
		xb = function(a) {
			var b = Q.g().b;
			if (b) {
				var c = ra(M(a, kb, 5), function(a) {
					return tb(L(a, P, 1), b);
				});
				if (c) return L(c, mb, 2);
			}
			return L(a, mb, 4);
		},
		Q = function() {
			var a = {};
			this.a = ((a[1] = {}), (a[2] = {}), (a[3] = {}), (a[6] = {}), a);
			this.b = null;
		};
	r(Q);
	var S = function(a, b) {
			return R(3, a, void 0 === b ? "" : b);
		},
		yb = function(a) {
			var b = Q.g().a;
			u(a, function(a) {
				var c = Ya(a, jb[0]),
					d = ub(a, c);
				d && (b[c][d] = a.a);
			});
		};
	var zb = function(a, b) {
			var c = this,
				e = void 0 === b ? {} : b;
			b = void 0 === e.u ? !1 : e.u;
			var d = void 0 === e.A ? {} : e.A;
			e = void 0 === e.D ? [] : e.D;
			this.h = a;
			this.w = b;
			this.b = d;
			this.a = null;
			this.f = e;
			this.c = {};
			if ((a = db()))
				(a = a.split(",") || []),
					u(a, function(a) {
						(a = parseInt(a, 10)) && (c.c[a] = !0);
					});
		},
		Cb = function(a) {
			var b = Ab.g(),
				c = b.h[a];
			c &&
				(delete b.h[a],
				u(c, function(a) {
					a = new fb(a);
					tb(L(a, P, 3), b.a) &&
						(a = Bb(b, a)) &&
						(b.f.push(a.getId()), (a = M(a, O, 2)) && yb(a));
				}));
		},
		Bb = function(a, b) {
			var c = M(b, hb, 2),
				e = a.a,
				d = e
					? na(c, function(a) {
							return tb(L(a, P, 3), e);
					  })
					: c,
				f = d.length;
			if (!f) return null;
			c = K(b, 4, 0);
			b = f * K(b, 1, 0);
			if (!c) return Db(a, d, b / 1e3);
			f = null != a.b[c] ? a.b[c] : 1e3;
			if (0 >= f) return null;
			d = Db(a, d, b / f);
			a.b[c] = d ? 0 : f - b;
			return d;
		},
		Db = function(a, b, c) {
			var e = a.c,
				d = qa(b, function(a) {
					return !!e[a.getId()];
				});
			return d ? d : a.w ? null : Ka(b, c);
		};
	var Eb = function(a) {
		var b = !1,
			c = !1;
		c = void 0 === c ? !1 : c;
		b = void 0 === b ? !1 : b;
		n.google_image_requests || (n.google_image_requests = []);
		var e = n.document.createElement("img");
		if (b) {
			var d = function() {
				if (b) {
					var a = n.google_image_requests,
						c = ma(a, e);
					0 <= c && Array.prototype.splice.call(a, c, 1);
				}
				e.removeEventListener && e.removeEventListener("load", d, !1);
				e.removeEventListener && e.removeEventListener("error", d, !1);
			};
			e.addEventListener && e.addEventListener("load", d, !1);
			e.addEventListener && e.addEventListener("error", d, !1);
		}
		c && (e.referrerPolicy = "no-referrer");
		e.src = a;
		n.google_image_requests.push(e);
	};
	var Fb = y(function() {
			var a = (n.navigator && n.navigator.userAgent) || "";
			a = a.toLowerCase();
			return (
				-1 != a.indexOf("firefox/") ||
				-1 != a.indexOf("chrome/") ||
				-1 != a.indexOf("opr/")
			);
		}),
		T = function(a, b, c, e, d) {
			e = void 0 === e ? "" : e;
			var f = a.createElement("link");
			try {
				f.rel = c;
				if (-1 != c.toLowerCase().indexOf("stylesheet")) var g = Aa(b);
				else {
					if (b instanceof z) var m = Aa(b);
					else {
						if (b instanceof A)
							var l =
								b instanceof A && b.constructor === A && b.G === Ba
									? b.l
									: "type_error:SafeUrl";
						else {
							if (b instanceof A) var w = b;
							else
								(b = "object" == typeof b && b.c ? b.a() : String(b)),
									Ca.test(b) || (b = "about:invalid#zClosurez"),
									(w = Da(b));
							l = w.a();
						}
						m = l;
					}
					g = m;
				}
				f.href = g;
			} catch (oa) {
				return;
			}
			e && "preload" == c && (f.as = e);
			d && (f.nonce = d);
			if ((a = a.getElementsByTagName("head")[0]))
				try {
					a.appendChild(f);
				} catch (oa) {}
		};
	var Gb = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Hb = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		Ib = function(a) {
			return Gb.test(a) && !Hb.test(a);
		},
		Jb = function(a) {
			return a.replace(/[\W]/g, function(a) {
				return "&#" + a.charCodeAt() + ";";
			});
		},
		U = n,
		Kb = function(a, b) {
			a = "https://" + ("adservice" + b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(n.location.hostname)];
			V[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(V[1]));
			return a + "?" + b.join("&");
		},
		V,
		W,
		X = function() {
			U = n;
			V = U.googleToken = U.googleToken || {};
			var a = +new Date();
			(V[1] && V[3] > a && 0 < V[2]) ||
				((V[1] = ""), (V[2] = -1), (V[3] = -1), (V[4] = ""), (V[6] = ""));
			W = U.googleIMState = U.googleIMState || {};
			Ib(W[1]) || (W[1] = ".google.com");
			"array" == ja(W[5]) || (W[5] = []);
			"boolean" == typeof W[6] || (W[6] = !1);
			"array" == ja(W[7]) || (W[7] = []);
			"number" == typeof W[8] || (W[8] = 0);
		},
		Lb = function(a) {
			try {
				a();
			} catch (b) {
				n.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		Nb = function(a) {
			"complete" == n.document.readyState ||
			"loaded" == n.document.readyState ||
			(n.document.currentScript && n.document.currentScript.async)
				? Mb(3)
				: a();
		},
		Ob = 0,
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
			s: Lb
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
				return ".google.com" != W[1] && 2 < ++Ob;
			},
			v: function() {
				return W[7];
			},
			s: function(a) {
				Nb(function() {
					Lb(a);
				});
			}
		},
		Mb = function(a) {
			1e-5 > Math.random() &&
				Eb(
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
						a
				);
		};
	Y.j = function() {
		if (!Y.i()) {
			var a = n.document,
				b = function(b) {
					var c = Kb("js", b),
						d = Oa();
					T(a, c, "preload", "script", d);
					b = a.createElement("script");
					b.type = "text/javascript";
					d && (b.nonce = d);
					b.onerror = function() {
						return n.processGoogleToken({}, 2);
					};
					c = Ga(c);
					Ea(b, c);
					try {
						(a.head || a.body || a.documentElement).appendChild(b), Y.o();
					} catch (m) {}
				},
				c = W[1];
			b(c);
			".google.com" != c && b(".google.com");
			b = {};
			var e = ((b.newToken = "FBT"), b);
			n.setTimeout(function() {
				return n.processGoogleToken(e, 1);
			}, 1e3);
		}
	};
	Z.j = function() {
		if (!Z.i()) {
			var a = n.document,
				b = Kb("sync.js", W[1]);
			T(a, b, "preload", "script");
			b = Jb(b);
			var c = x("script"),
				e = "",
				d = Oa();
			d && (e = 'nonce="' + Jb(d) + '"');
			var f =
				"<" +
				c +
				' src="' +
				b +
				'" ' +
				e +
				"></" +
				c +
				">" +
				("<" +
					c +
					" " +
					e +
					'>processGoogleTokenSync({"newToken":"FBS"},5);</' +
					c +
					">");
			Nb(function() {
				a.write(f);
				Z.o();
			});
		}
	};
	var Pb = function(a) {
			X();
			(V[3] >= +new Date() && V[2] >= +new Date()) || a.j();
		},
		Rb = function() {
			n.processGoogleToken =
				n.processGoogleToken ||
				function(a, b) {
					return Qb(Y, a, b);
				};
			Pb(Y);
		},
		Sb = function() {
			n.processGoogleTokenSync =
				n.processGoogleTokenSync ||
				function(a, b) {
					return Qb(Z, a, b);
				};
			Pb(Z);
		},
		Qb = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var e = b.newToken || "",
				d = "NT" == e,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				g = parseInt(b.validLifetimeSecs || "", 10),
				m = b["1p_jar"] || "";
			b = b.pucrd || "";
			X();
			1 == c ? a.C() : a.B();
			if (!e && a.F()) Ib(".google.com") && (W[1] = ".google.com"), a.j();
			else {
				var l = (U.googleToken = U.googleToken || {}),
					w =
						0 == c &&
						e &&
						p(e) &&
						!d &&
						"number" == typeof f &&
						0 < f &&
						"number" == typeof g &&
						0 < g &&
						p(m);
				d = d && !a.i() && (!(V[3] >= +new Date()) || "NT" == V[1]);
				var oa = !(V[3] >= +new Date()) && 0 != c;
				if (w || d || oa)
					(d = +new Date()),
						(f = d + 1e3 * f),
						(g = d + 1e3 * g),
						Mb(c),
						(l[5] = c),
						(l[1] = e),
						(l[2] = f),
						(l[3] = g),
						(l[4] = m),
						(l[6] = b),
						X();
				if (w || !a.i()) {
					c = a.v();
					for (e = 0; e < c.length; e++) a.s(c[e]);
					c.length = 0;
				}
			}
		};
	var Tb = function() {
			this.a = null;
		},
		Ub = function(a, b) {
			a.a = b;
		};
	Tb.prototype.b = function(a, b, c, e, d) {
		if (Math.random() > (void 0 === c ? 0.01 : c)) return !1;
		(b.error && b.meta && b.id) ||
			(b = new cb(b, { context: a, id: void 0 === d ? "gpt_exception" : d }));
		if (e || this.a) (b.meta = {}), this.a && this.a(b.meta), e && e(b.meta);
		n.google_js_errors = n.google_js_errors || [];
		n.google_js_errors.push(b);
		n.error_rep_loaded ||
			((b = n.document),
			(a = b.createElement("script")),
			Ea(
				a,
				Ga(
					n.location.protocol +
						"//pagead2.googlesyndication.com/pagead/js/err_rep.js"
				)
			),
			(b = b.getElementsByTagName("script")[0]) &&
				b.parentNode &&
				b.parentNode.insertBefore(a, b),
			(n.error_rep_loaded = !0));
		return !1;
	};
	var Vb = function(a, b) {
		var c = void 0 === c ? a.b : c;
		try {
			b();
		} catch (e) {
			if (!c.call(a, 420, e, 0.01, void 0, "gpt_exception")) throw e;
		}
	};
	var Wb = function(a) {
		if (!a.google_ltobserver) {
			var b = new a.PerformanceObserver(function(b) {
				var c = (a.google_lt_queue = a.google_lt_queue || []);
				u(b.getEntries(), function(a) {
					return c.push(a);
				});
			});
			b.observe({ entryTypes: ["longtask"] });
			a.google_ltobserver = b;
		}
	};
	var Xb = [
		[28, null, null, [1]],
		[38, null, null, [1]],
		[null, 7, null, [null, 0.1]],
		[40, null, null, [1]],
		[61, null, null, [1]],
		[46, null, null, [1]],
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
		[null, null, 2, [null, null, "1-0-30"]],
		[21, null, null, [1]],
		[4, null, null, [1]],
		[7, null, null, [1]]
	];
	var Yb = function() {
		zb.call(this, B(210), { u: B(211), A: B(227), D: B(226) });
	};
	ea(Yb, zb);
	var Zb = (function(a, b) {
			var c = b || bb;
			return function() {
				var b = this || n;
				b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {});
				var d = c(a[ka] || (a[ka] = ++la), arguments);
				return b.hasOwnProperty(d) ? b[d] : (b[d] = a.apply(this, arguments));
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
		$b = function() {
			return 0 === Zb(B(172));
		};
	var ac = function() {
		var a = {};
		this[3] = ((a[3] = $b), a);
		a = {};
		this[4] = ((a[4] = Ta), a);
		a = {};
		this[5] = ((a[2] = function() {
			return window.location.href;
		}),
		a);
	};
	r(ac);
	var xa = {
		3: [
			[50, [[21062624], [21062625, [[null, 2, null, []]]]], null, 5],
			[10, [[21062185], [21062186, [[24, null, null, [1]]]]]],
			[
				10,
				[
					[21062491, [[null, 10, null, [null, 2]]]],
					[21062492, [[null, 10, null, [null, 3]]]]
				]
			],
			[1, [[21062416], [21062417, [[37, null, null, [1]]]]]],
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
			[null, [[21062156], [21062157, [[15, null, null, [1]]]]]],
			[10, [[21062632], [21062634, [[null, 11, null, [null, 100]]]]]],
			[
				null,
				[
					[21062652],
					[
						21062653,
						[[null, null, null, [null, null, null, ["v", "1-0-30"]], null, 1]]
					],
					[21062654, [[null, null, 2, [null, null, "1-0-30"]]]]
				]
			],
			[
				50,
				[[21062068, [[58, null, null, [1]]]], [21062069]],
				[8, null, null, 2, null, 261]
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
					[21062287],
					[
						21062288,
						[
							[56, null, null, [1]],
							[53, null, null, [1]],
							[52, null, null, [1]],
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
			[10, [[21062667], [21062668, [[62, null, null, [1]]]]]],
			[
				10,
				[[21062352], [21062353, [[20, null, null, [1]]]]],
				[1, [[4, null, 1]]],
				3
			],
			[10, [[22322686], [22322687, [[null, 3, null, [null, 0.01]]]]]],
			[
				1,
				[
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
					]
				]
			],
			[50, [[21062420], [21062421, [[42, null, null, [1]]]]]],
			[10, [[21061803], [21061804]]],
			[1, [[21062638], [21062639, [[66, null, null, [1]]]]]],
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
			[50, [[21062454], [21062456, [[51, null, null, [1]]]]]],
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
			[1, [[108809132], [108809133, [[45, null, null, [1]]]]]],
			[50, [[21062377], [21062378, [[11, null, null, []]]]]],
			[50, [[21062388], [21062389, [[30, null, null, []]]]]],
			[1, [[21062261], [21062262, [[33, null, null, [1]]]]]],
			[50, [[21062452], [21062453, [[43, null, null, [1]]]]]],
			[1, [[20194812, [[20, null, null, [1]]]], [20194813]], null, 3],
			[
				50,
				[[21061763], [21061764, [[5, null, null, [1]], [4, null, null, [1]]]]]
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
					]
				],
				[4, null, 3]
			],
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
			[50, [[21062612], [21062613], [21062614]]],
			[5, [[21062414], [21062415, [[64, null, null, [1]]]]]]
		],
		4: [
			[null, [[21062304], [21062305, [[34, null, null, [1]]]]]],
			[null, [[21062498], [21062499, [[8, null, null, [1]]]]]]
		],
		5: [
			[
				250,
				[[21062605], [21062606, [[23, null, null, [1]]]]],
				[12, null, null, null, 2, null, "today\\.line\\.me/.+/article"]
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
				10,
				[
					[
						21062672,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21062672"]],
							[null, 12, null, [null, 266]],
							[null, null, 7, [null, null, "21062672"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21062672"]]
						]
					],
					[
						21062673,
						[
							[null, 7, null, [null, 1]],
							[null, 12, null, [null, 267]],
							[null, null, 7, [null, null, "21062673"]],
							[60, null, null, [1]]
						]
					]
				],
				null,
				1
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
						21062674,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21062674"]],
							[null, 12, null, [null, 266]],
							[null, null, 7, [null, null, "21062674"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21062674"]]
						]
					],
					[
						21062675,
						[
							[null, 7, null, [null, 1]],
							[null, 12, null, [null, 269]],
							[null, null, 7, [null, null, "21062675"]],
							[60, null, null, [1]]
						]
					]
				],
				null,
				1
			]
		],
		6: [[10, [[21062434], [21062435, [[44, null, null, [1]]]]], [4, null, 4]]],
		7: [
			[1e3, [[21062475, null, [6, null, null, 4, null, 1]]], [4, null, 3], 1],
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
			]
		]
	};
	var Ab = function() {
		La() && G(210, ya());
		Yb.call(this);
		var a = this,
			b = ac.g();
		b[3][6] = function(b) {
			return 0 <= ma(a.f, parseInt(b, 10));
		};
		this.a = b;
		B(219).length || G(219, Xb);
		Q.g().b = b;
		G(241, b);
		yb(
			pa(B(219), function(a) {
				return new O(a);
			})
		);
		G(230, Q.g().a);
	};
	ea(Ab, Yb);
	r(Ab);
	x("partner.googleadservices.com");
	var bc = x("www.googletagservices.com"),
		cc = function() {
			return B(46) && !B(6)
				? "http://pubads.g.doubleclick.net"
				: "https://securepubads.g.doubleclick.net";
		};
	(function(a) {
		var b = new Tb();
		Ub(b, function(a) {
			a.methodId = 420;
		});
		Vb(b, function() {
			var b = a,
				e = D(),
				d = e.fifWin || window;
			b = b || d.document;
			var f = [],
				g = D();
			g.hasOwnProperty("cmd") || (g.cmd = f);
			if (e.evalScripts) e.evalScripts();
			else {
				f = b;
				Cb(7);
				Cb(5);
				R(1, 59, !1) && (G(173, bc), G(174, bc));
				G(163, S(6));
				G(53, S(7));
				g = B(150);
				X();
				Ib(g) && (W[1] = g);
				if (!(g = f.currentScript))
					a: {
						if ((f = f.scripts))
							for (g = 0; g < f.length; g++) {
								var m = f[g];
								if (-1 < m.src.indexOf(bc + "/tag/js/gpt")) {
									g = m;
									break a;
								}
							}
						g = null;
					}
				G(172, g);
				d.PerformanceObserver && d.PerformanceLongTaskTiming && Wb(d);
				f = d;
				f = void 0 === f ? n : f;
				if ((f = (f = f.performance) && f.now ? f.now() : null))
					(f = { label: "1", type: 9, value: f }),
						(d = d.google_js_reporting_queue =
							d.google_js_reporting_queue || []),
						1024 > d.length && d.push(f);
				if ((d = B(76))) var l = d;
				else {
					d = cc();
					f = S(4, "/gpt/pubads_impl_");
					g = "";
					if (B(148))
						try {
							m = "";
							try {
								m = n.top.location.hash;
							} catch (w) {
								m = n.location.hash;
							}
							m && (g = (l = m.match(/\bgptv=(\d+)/)) ? l[1] : "");
						} catch (w) {}
					g = g || R(2, 12, 0) || "266";
					l = S(5);
					d = d + f + g + ".js";
					l && (d += "?" + l);
					G(76, d);
					l = d;
				}
				d = b.currentScript;
				if (
					!(
						"complete" == b.readyState ||
						"loaded" == b.readyState ||
						(d && d.async)
					)
				) {
					d = "gpt-impl-" + Math.random();
					try {
						(f = '<script id="' + d + '" src="' + l + '">\x3c/script>'),
							R(1, 17, !1) &&
								Fb() &&
								(f += '<link rel="preconnect" href="' + cc() + '">'),
							b.write(f);
					} catch (w) {}
					b.getElementById(d) &&
						((e._loadStarted_ = !0), G(220, !1), R(2, 4, 0) || Sb());
				}
				e._loadStarted_ ||
					(R(2, 4, 0) || Rb(),
					R(1, 16, !1) && T(b, l, "preload", "script"),
					(d = b.createElement("script")),
					(d.src = l),
					(d.async = !0),
					(b.head || b.body || b.documentElement).appendChild(d),
					R(1, 17, !1) && Fb() && T(b, cc(), "preconnect"),
					G(220, !0),
					(e._loadStarted_ = !0));
			}
		});
	})();
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this));
