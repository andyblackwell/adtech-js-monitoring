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
		g = k
			? function(a, b) {
					a.__proto__ = b;
					if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
					return a;
			  }
			: null;
	}
	var da = g,
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
		l = this,
		m = function(a) {
			return "string" == typeof a;
		},
		ha = function() {
			if (null === n)
				a: {
					var a = l.document;
					if (
						(a = a.querySelector && a.querySelector("script[nonce]")) &&
						(a = a.nonce || a.getAttribute("nonce")) &&
						fa.test(a)
					) {
						n = a;
						break a;
					}
					n = "";
				}
			return n;
		},
		fa = /^[\w+/_-]+[=]{0,2}$/,
		n = null,
		ia = function(a) {
			a = a.split(".");
			for (var b = l, c = 0; c < a.length; c++)
				if (((b = b[a[c]]), null == b)) return null;
			return b;
		},
		ja = function() {},
		p = function(a) {
			a.m = void 0;
			a.g = function() {
				return a.m ? a.m : (a.m = new a());
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
		ka = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
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
	var na = function(a, b) {
			if (m(a)) return m(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
			for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
			return -1;
		},
		t = function(a, b) {
			for (var c = a.length, d = m(a) ? a.split("") : a, e = 0; e < c; e++)
				e in d && b.call(void 0, d[e], e, a);
		},
		oa = function(a, b) {
			for (
				var c = a.length, d = [], e = 0, f = m(a) ? a.split("") : a, h = 0;
				h < c;
				h++
			)
				if (h in f) {
					var v = f[h];
					b.call(void 0, v, h, a) && (d[e++] = v);
				}
			return d;
		},
		pa = function(a, b) {
			for (
				var c = a.length, d = Array(c), e = m(a) ? a.split("") : a, f = 0;
				f < c;
				f++
			)
				f in e && (d[f] = b.call(void 0, e[f], f, a));
			return d;
		},
		qa = function(a, b) {
			a: {
				for (var c = a.length, d = m(a) ? a.split("") : a, e = 0; e < c; e++)
					if (e in d && b.call(void 0, d[e], e, a)) {
						b = e;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : m(a) ? a.charAt(b) : a[b];
		},
		ra = function(a, b) {
			a: {
				var c = a.length,
					d = m(a) ? a.split("") : a;
				for (--c; 0 <= c; c--)
					if (c in d && b.call(void 0, d[c], c, a)) {
						b = c;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : m(a) ? a.charAt(b) : a[b];
		};
	var sa = function(a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
		},
		x = function(a, b) {
			var c = 0;
			a = sa(String(a)).split(".");
			b = sa(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var f = a[e] || "",
					h = b[e] || "";
				do {
					f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
					h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
					if (0 == f[0].length && 0 == h[0].length) break;
					c =
						w(
							0 == f[1].length ? 0 : parseInt(f[1], 10),
							0 == h[1].length ? 0 : parseInt(h[1], 10)
						) ||
						w(0 == f[2].length, 0 == h[2].length) ||
						w(f[2], h[2]);
					f = f[3];
					h = h[3];
				} while (0 == c);
			}
			return c;
		},
		w = function(a, b) {
			return a < b ? -1 : a > b ? 1 : 0;
		};
	var y;
	a: {
		var ta = l.navigator;
		if (ta) {
			var ua = ta.userAgent;
			if (ua) {
				y = ua;
				break a;
			}
		}
		y = "";
	}
	var va = function(a) {
		var b = {},
			c;
		for (c in a) b[c] = a[c];
		return b;
	};
	var z = function(a) {
		z[" "](a);
		return a;
	};
	z[" "] = ja;
	var A = function(a) {
		var b = !1,
			c;
		return function() {
			b || ((c = a()), (b = !0));
			return c;
		};
	};
	var B = function() {
		this.b = "";
		this.f = wa;
	};
	B.prototype.c = !0;
	B.prototype.a = function() {
		return this.b;
	};
	var xa = function(a) {
			return a instanceof B && a.constructor === B && a.f === wa
				? a.b
				: "type_error:TrustedResourceUrl";
		},
		wa = {};
	var C = function() {
		this.l = "";
		this.G = ya;
	};
	C.prototype.c = !0;
	C.prototype.a = function() {
		return this.l;
	};
	var za = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		ya = {},
		Aa = function(a) {
			var b = new C();
			b.l = a;
			return b;
		};
	Aa("about:blank");
	var Ba = function(a, b) {
		a.src = xa(b);
		(b = ha()) && a.setAttribute("nonce", b);
	};
	var Da = function(a) {
			Ca();
			var b = new B();
			b.b = a;
			return b;
		},
		Ca = ja;
	var Ha = function(a, b) {
			if (!Ea() && !Fa()) {
				var c = Math.random();
				if (c < b) return (c = Ga(l)), a[Math.floor(c * a.length)];
			}
			return null;
		},
		Ga = function(a) {
			if (!a.crypto) return Math.random();
			try {
				var b = new Uint32Array(1);
				a.crypto.getRandomValues(b);
				return b[0] / 65536 / 65536;
			} catch (c) {
				return Math.random();
			}
		},
		Ia = function() {
			var a = D(210),
				b;
			for (b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
			return !0;
		},
		Fa = A(function() {
			return -1 != y.indexOf("Google Web Preview") || 1e-4 > Math.random();
		}),
		Ea = A(function() {
			return -1 != y.indexOf("MSIE");
		}),
		Ja = /^(-?[0-9.]{1,30})$/,
		Ka = function(a, b) {
			return Ja.test(a) && ((a = Number(a)), !isNaN(a))
				? a
				: void 0 == b
					? null
					: b;
		},
		La = function() {
			try {
				return ha();
			} catch (a) {}
		};
	var Ma = function() {
			return l.googletag || (l.googletag = {});
		},
		Na = function(a, b) {
			var c = Ma();
			c.hasOwnProperty(a) || (c[a] = b);
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
		191: "001812051624460",
		192: "021811091519050",
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
		228: "//www.googletagservices.com/pubconsole/",
		242: !1,
		244: !1,
		243: -1
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
	E[204] = Ka("{{MOD}}", -1);
	var F = function() {
		for (var a in E) this[a] = E[a];
	};
	p(F);
	var D = function(a) {
			return F.g()[a];
		},
		G = function(a, b) {
			F.g()[a] = b;
		},
		Oa = Ma(),
		Pa = F.g(),
		Qa = Oa._vars_,
		Ra;
	for (Ra in Qa) Pa[Ra] = Qa[Ra];
	Oa._vars_ = Pa;
	var Sa = function() {
		return Ka("0") || 0;
	};
	Na("getVersion", function() {
		return "278";
	});
	var I = function() {},
		Ta = "function" == typeof Uint8Array,
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
							"array" == q(e) ||
							(Ta && e instanceof Uint8Array)
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
							: (Ua(a), (a.c[e] = a.c[e] || J));
			if (d && d.length) for (b = 0; b < d.length; b++) Va(a, d[b]);
		},
		J = [],
		Ua = function(a) {
			var b = a.h + a.f;
			a.a[b] || (a.c = a.a[b] = {});
		},
		Wa = function(a, b) {
			if (b < a.h) {
				b += a.f;
				var c = a.a[b];
				return c === J ? (a.a[b] = []) : c;
			}
			if (a.c) return (c = a.c[b]), c === J ? (a.c[b] = []) : c;
		},
		Xa = function(a, b) {
			if (b < a.h) {
				b += a.f;
				var c = a.a[b];
				return c === J ? (a.a[b] = []) : c;
			}
			c = a.c[b];
			return c === J ? (a.c[b] = []) : c;
		},
		L = function(a, b, c) {
			a = Wa(a, b);
			return null == a ? c : a;
		},
		Ya = function(a, b, c) {
			b < a.h ? (a.a[b + a.f] = c) : (Ua(a), (a.c[b] = c));
		},
		Va = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					h = Wa(a, f);
				null != h && ((c = f), (d = h), Ya(a, f, void 0));
			}
			return c ? (Ya(a, c, d), c) : 0;
		},
		M = function(a, b, c) {
			a.b || (a.b = {});
			if (!a.b[c]) {
				var d = Wa(a, c);
				d && (a.b[c] = new b(d));
			}
			return a.b[c];
		},
		N = function(a, b, c) {
			a.b || (a.b = {});
			if (!a.b[c]) {
				for (var d = Xa(a, c), e = [], f = 0; f < d.length; f++)
					e[f] = new b(d[f]);
				a.b[c] = e;
			}
			b = a.b[c];
			b == J && (b = a.b[c] = []);
			return b;
		};
	var Za = function(a, b) {
		a = [a];
		for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
		return a.join("\x0B");
	};
	var $a = function() {
		var a = window,
			b = -1;
		try {
			a.localStorage &&
				(b = parseInt(a.localStorage.getItem("google_experiment_mod"), 10));
		} catch (c) {
			return null;
		}
		if (0 <= b && 1e3 > b) return b;
		if (Fa()) return null;
		b = Math.floor(1e3 * Ga(a));
		try {
			if (a.localStorage)
				return a.localStorage.setItem("google_experiment_mod", "" + b), b;
		} catch (c) {}
		return null;
	};
	var ab = function(a, b) {
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
		bb = function() {
			if (null === O) {
				O = "";
				try {
					var a = "";
					try {
						a = l.top.location.hash;
					} catch (c) {
						a = l.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						O = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return O;
		};
	var db = function(a) {
		K(this, a, cb, null);
	};
	r(db, I);
	var fb = function(a) {
		K(this, a, eb, null);
	};
	r(fb, I);
	var P = function(a) {
		K(this, a, gb, hb);
	};
	r(P, I);
	var ib = function(a) {
		K(this, a, null, null);
	};
	r(ib, I);
	var kb = function(a) {
		K(this, a, jb, null);
	};
	r(kb, I);
	var Q = function(a) {
		K(this, a, lb, mb);
	};
	r(Q, I);
	var cb = [2],
		eb = [2];
	fb.prototype.getId = function() {
		return L(this, 1, 0);
	};
	var gb = [5],
		hb = [[1, 2, 3, 6]],
		jb = [4],
		lb = [2, 8],
		mb = [[3, 4, 5], [6, 7]];
	var nb = function(a) {
			return null != a ? !a : a;
		},
		ob = function(a, b) {
			for (var c = !1, d = 0; d < a.length; d++) {
				var e = a[d].call();
				if (e == b) return e;
				null == e && (c = !0);
			}
			if (!c) return !b;
		},
		qb = function(a, b) {
			var c = N(a, Q, 2);
			if (!c.length) return pb(a, b);
			a = L(a, 1, 0);
			if (1 == a) return nb(qb(c[0], b));
			c = pa(c, function(a) {
				return function() {
					return qb(a, b);
				};
			});
			switch (a) {
				case 2:
					return ob(c, !1);
				case 3:
					return ob(c, !0);
			}
		},
		pb = function(a, b) {
			var c = Va(a, mb[0]);
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
					var e = b.apply(null, Xa(a, 8));
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
					if (9 == b) return 0 == x(e, a);
					if (d)
						switch (b) {
							case 7:
								return e < a;
							case 8:
								return e > a;
							case 12:
								return new RegExp(a).test(e);
							case 10:
								return -1 == x(e, a);
							case 11:
								return 1 == x(e, a);
						}
				}
			}
		},
		rb = function(a, b) {
			return !a || !(!b || !qb(a, b));
		};
	var sb = function(a, b) {
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
		tb = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return L(a, 1, !1);
				case 2:
					return +L(a, 2, 0);
				case 3:
					return L(a, 3, "");
				case 6:
					return Xa(a, 4);
				default:
					return null;
			}
		},
		ub = A(function() {
			var a = "";
			try {
				a = l.top.location.hash;
			} catch (c) {
				a = l.location.hash;
			}
			var b = {};
			if ((a = (a = /\bdflags=({.*})(&|$)/.exec(a)) && a[1]))
				try {
					b = JSON.parse(decodeURIComponent(a));
				} catch (c) {}
			return b;
		}),
		S = function(a, b, c) {
			var d = ub();
			if (d[a] && null != d[a][b]) return d[a][b];
			b = R.g().a[a][b];
			if (!b) return c;
			b = new P(b);
			b = vb(b);
			a = tb(b, a);
			return null != a ? a : c;
		},
		vb = function(a) {
			var b = R.g().b;
			if (b) {
				var c = ra(N(a, ib, 5), function(a) {
					return rb(M(a, Q, 1), b);
				});
				if (c) return M(c, kb, 2);
			}
			return M(a, kb, 4);
		},
		R = function() {
			var a = {};
			this.a = ((a[1] = {}), (a[2] = {}), (a[3] = {}), (a[6] = {}), a);
			this.b = null;
		};
	p(R);
	var wb = function(a) {
		var b = R.g().a;
		t(a, function(a) {
			var c = Va(a, hb[0]),
				e = sb(a, c);
			e && (b[c][e] = a.a);
		});
	};
	var xb = function(a, b) {
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
			if ((a = bb()))
				(a = a.split(",") || []),
					t(a, function(a) {
						(a = parseInt(a, 10)) && (c.c[a] = !0);
					});
		},
		zb = function(a, b) {
			var c = a.h[b];
			c &&
				(delete a.h[b],
				t(c, function(b) {
					b = new db(b);
					rb(M(b, Q, 3), a.a) &&
						(b = yb(a, b)) &&
						(a.f.push(b.getId()), (b = N(b, P, 2)) && wb(b));
				}));
		},
		yb = function(a, b) {
			var c = N(b, fb, 2),
				d = a.a,
				e = d
					? oa(c, function(a) {
							return rb(M(a, Q, 3), d);
					  })
					: c,
				f = e.length;
			if (!f) return null;
			c = L(b, 4, 0);
			b = f * L(b, 1, 0);
			if (!c) return Ab(a, e, b / 1e3);
			f = null != a.b[c] ? a.b[c] : 1e3;
			if (0 >= f) return null;
			e = Ab(a, e, b / f);
			a.b[c] = e ? 0 : f - b;
			return e;
		},
		Ab = function(a, b, c) {
			var d = a.c,
				e = qa(b, function(a) {
					return !!d[a.getId()];
				});
			return e ? e : a.w ? null : Ha(b, c);
		};
	var Bb = function(a) {
		var b = !1,
			c = !1;
		c = void 0 === c ? !1 : c;
		b = void 0 === b ? !1 : b;
		l.google_image_requests || (l.google_image_requests = []);
		var d = l.document.createElement("img");
		if (b) {
			var e = function() {
				if (b) {
					var a = l.google_image_requests,
						c = na(a, d);
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
		l.google_image_requests.push(d);
	};
	var Cb = A(function() {
			var a = (l.navigator && l.navigator.userAgent) || "";
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
				if (-1 != c.toLowerCase().indexOf("stylesheet")) var h = xa(b);
				else {
					if (b instanceof B) var v = xa(b);
					else {
						if (b instanceof C)
							var u =
								b instanceof C && b.constructor === C && b.G === ya
									? b.l
									: "type_error:SafeUrl";
						else {
							if (b instanceof C) var H = b;
							else
								(b = "object" == typeof b && b.c ? b.a() : String(b)),
									za.test(b) || (b = "about:invalid#zClosurez"),
									(H = Aa(b));
							u = H.a();
						}
						v = u;
					}
					h = v;
				}
				f.href = h;
			} catch (la) {
				return;
			}
			d && "preload" == c && (f.as = d);
			e && (f.nonce = e);
			if ((a = a.getElementsByTagName("head")[0]))
				try {
					a.appendChild(f);
				} catch (la) {}
		};
	var Db = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		Eb = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		Fb = function(a) {
			return Db.test(a) && !Eb.test(a);
		},
		Gb = function(a) {
			return a.replace(/[\W]/g, function(a) {
				return "&#" + a.charCodeAt() + ";";
			});
		},
		U = l,
		Hb = function(a, b) {
			a = "https://" + ("adservice" + b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(l.location.hostname)];
			V[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(V[1]));
			return a + "?" + b.join("&");
		},
		V,
		W,
		X = function() {
			U = l;
			V = U.googleToken = U.googleToken || {};
			var a = +new Date();
			(V[1] && V[3] > a && 0 < V[2]) ||
				((V[1] = ""), (V[2] = -1), (V[3] = -1), (V[4] = ""), (V[6] = ""));
			W = U.googleIMState = U.googleIMState || {};
			Fb(W[1]) || (W[1] = ".google.com");
			"array" == q(W[5]) || (W[5] = []);
			"boolean" == typeof W[6] || (W[6] = !1);
			"array" == q(W[7]) || (W[7] = []);
			"number" == typeof W[8] || (W[8] = 0);
		},
		Ib = function(a) {
			try {
				a();
			} catch (b) {
				l.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		Kb = function(a) {
			"complete" == l.document.readyState ||
			"loaded" == l.document.readyState ||
			(l.document.currentScript && l.document.currentScript.async)
				? Jb(3)
				: a();
		},
		Lb = 0,
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
			s: Ib
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
				return ".google.com" != W[1] && 2 < ++Lb;
			},
			v: function() {
				return W[7];
			},
			s: function(a) {
				Kb(function() {
					Ib(a);
				});
			}
		},
		Jb = function(a) {
			1e-5 > Math.random() &&
				Bb(
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
						a
				);
		};
	Y.j = function() {
		if (!Y.i()) {
			var a = l.document,
				b = function(b) {
					b = Hb("js", b);
					var c = La();
					T(a, b, "preload", "script", c);
					c = a.createElement("script");
					c.type = "text/javascript";
					c.onerror = function() {
						return l.processGoogleToken({}, 2);
					};
					b = Da(b);
					Ba(c, b);
					try {
						(a.head || a.body || a.documentElement).appendChild(c), Y.o();
					} catch (h) {}
				},
				c = W[1];
			b(c);
			".google.com" != c && b(".google.com");
			b = {};
			var d = ((b.newToken = "FBT"), b);
			l.setTimeout(function() {
				return l.processGoogleToken(d, 1);
			}, 1e3);
		}
	};
	Z.j = function() {
		if (!Z.i()) {
			var a = l.document,
				b = Hb("sync.js", W[1]);
			T(a, b, "preload", "script");
			b = Gb(b);
			var c = z("script"),
				d = "",
				e = La();
			e && (d = 'nonce="' + Gb(e) + '"');
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
			Kb(function() {
				a.write(f);
				Z.o();
			});
		}
	};
	var Mb = function(a) {
			X();
			(V[3] >= +new Date() && V[2] >= +new Date()) || a.j();
		},
		Ob = function() {
			l.processGoogleToken =
				l.processGoogleToken ||
				function(a, b) {
					return Nb(Y, a, b);
				};
			Mb(Y);
		},
		Pb = function() {
			l.processGoogleTokenSync =
				l.processGoogleTokenSync ||
				function(a, b) {
					return Nb(Z, a, b);
				};
			Mb(Z);
		},
		Nb = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				h = parseInt(b.validLifetimeSecs || "", 10),
				v = b["1p_jar"] || "";
			b = b.pucrd || "";
			X();
			1 == c ? a.C() : a.B();
			if (!d && a.F()) Fb(".google.com") && (W[1] = ".google.com"), a.j();
			else {
				var u = (U.googleToken = U.googleToken || {}),
					H =
						0 == c &&
						d &&
						m(d) &&
						!e &&
						"number" == typeof f &&
						0 < f &&
						"number" == typeof h &&
						0 < h &&
						m(v);
				e = e && !a.i() && (!(V[3] >= +new Date()) || "NT" == V[1]);
				var la = !(V[3] >= +new Date()) && 0 != c;
				if (H || e || la)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(h = e + 1e3 * h),
						Jb(c),
						(u[5] = c),
						(u[1] = d),
						(u[2] = f),
						(u[3] = h),
						(u[4] = v),
						(u[6] = b),
						X();
				if (H || !a.i()) {
					c = a.v();
					for (d = 0; d < c.length; d++) a.s(c[d]);
					c.length = 0;
				}
			}
		};
	var Qb = function() {
			this.a = null;
		},
		Rb = function(a, b) {
			a.a = b;
		};
	Qb.prototype.b = function(a, b, c, d, e) {
		if (Math.random() > (void 0 === c ? 0.01 : c)) return !1;
		(b.error && b.meta && b.id) ||
			(b = new ab(b, { context: a, id: void 0 === e ? "gpt_exception" : e }));
		if (d || this.a) (b.meta = {}), this.a && this.a(b.meta), d && d(b.meta);
		l.google_js_errors = l.google_js_errors || [];
		l.google_js_errors.push(b);
		l.error_rep_loaded ||
			((b = l.document),
			(a = b.createElement("script")),
			Ba(
				a,
				Da(
					l.location.protocol +
						"//pagead2.googlesyndication.com/pagead/js/err_rep.js"
				)
			),
			(b = b.getElementsByTagName("script")[0]) &&
				b.parentNode &&
				b.parentNode.insertBefore(a, b),
			(l.error_rep_loaded = !0));
		return !1;
	};
	var Sb = function(a, b) {
		var c = void 0 === c ? a.b : c;
		try {
			b();
		} catch (d) {
			if (!c.call(a, 420, d, 0.01, void 0, "gpt_exception")) throw d;
		}
	};
	var Tb = function(a) {
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
	var Ub = function(a) {
		var b = a;
		b = void 0 === b ? l : b;
		if ((b = (b = b.performance) && b.now ? b.now() : null))
			(b = { label: "1", type: 9, value: b }),
				(a = a.google_js_reporting_queue = a.google_js_reporting_queue || []),
				1024 > a.length && a.push(b);
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
		xb.call(this, D(210), { u: D(211), A: D(227), D: D(226) });
	};
	ea(Wb, xb);
	var Xb = function() {
		return D(36);
	};
	var Yb = (function(a, b) {
			var c = b || Za;
			return function() {
				var b = this || l;
				b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {});
				var e = c(a[ka] || (a[ka] = ++ma), arguments);
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
			return 0 === Yb(D(172));
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
			if ((b = "function" == q(a)))
				(a = a && a.toString && a.toString()),
					(b = m(a) && -1 != a.indexOf("[native code]"));
			return b;
		}),
		(a[10] = function() {
			return window == window.top;
		}),
		a);
		a = {};
		this[4] = ((a[1] = function() {
			return D(204);
		}),
		(a[4] = Sa),
		(a[2] = function() {
			return 278;
		}),
		(a[5] = function() {
			var a = $a();
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
	p($b);
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
				[[21061763], [21061764, [[5, null, null, [1]], [4, null, null, [1]]]]]
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
				1
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
				1
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
				10,
				[
					[21062667],
					[21062668, [[62, null, null, [1]], [68, null, null, [1]]]],
					[21062841, [[62, null, null, [1]], [68, null, null, [1]]]]
				]
			],
			[1, [[21062693], [21062694, [[65, null, null, [1]]]]]],
			[10, [[21062697], [21062698, [[72, null, null, [1]]]]]],
			[10, [[21062722], [21062723, [[69, null, null, [1]]]]], null, 9],
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
			[
				1,
				[[21062825], [21062826], [21062827]],
				[2, [[4, null, 7], [8, null, null, 2, null, 278]]],
				9
			],
			[
				1,
				[[21062828], [21062829]],
				[2, [[4, null, 7], [8, null, null, 2, null, 278]]],
				9
			],
			[10, [[21062830], [21062831, [[90, null, null, [1]]]]]],
			[50, [[21062832], [21062833, [[89, null, null, [1]]]]]],
			[50, [[21062834], [21062835, [[33, null, null, [1]]]]], [4, null, 2], 8],
			[10, [[21062844], [21062845]]],
			[
				1,
				[[21062854], [21062855, [[100, null, null, [1]]]]],
				[8, null, null, 2, null, 278]
			],
			[
				1,
				[[21062856], [21062857, [[99, null, null, [1]]]]],
				[8, null, null, 2, null, 278]
			],
			[10, [[21062859], [21062860, [[92, null, null, [1]]]]], null, 8],
			[10, [[21062886], [21062887, [[91, null, null, [1]]]]]],
			[10, [[21062888], [21062889, [[101, null, null, [1]]]]]],
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
			[1, [[108809132], [108809133, [[45, null, null, [1]]]]]]
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
			[10, [[21062749], [21062750, [[95, null, null, [1]]]]]],
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
				10,
				[
					[
						21062890,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21062890"]],
							[null, 12, null, [null, 278]],
							[null, null, 7, [null, null, "21062890"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21062890"]]
						]
					],
					[
						21062891,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21062891"]],
							[null, 12, null, [null, 284]],
							[null, null, 7, [null, null, "21062891"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21062891"]]
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
						21062892,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21062892"]],
							[null, 12, null, [null, 284]],
							[null, null, 7, [null, null, "21062892"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21062892"]]
						]
					],
					[
						21062893,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21062893"]],
							[null, 12, null, [null, 285]],
							[null, null, 7, [null, null, "21062893"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21062893"]]
						]
					]
				],
				null,
				1
			],
			[
				null,
				[
					[
						21062894,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21062894"]],
							[null, 12, null, [null, 275]],
							[null, null, 7, [null, null, "21062894"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21062894"]]
						]
					],
					[
						21062895,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21062895"]],
							[null, 12, null, [null, 279]],
							[null, null, 7, [null, null, "21062895"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21062895"]]
						]
					],
					[
						21062896,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21062896"]],
							[null, 12, null, [null, 280]],
							[null, null, 7, [null, null, "21062896"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21062896"]]
						]
					],
					[
						21062897,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21062897"]],
							[null, 12, null, [null, 281]],
							[null, null, 7, [null, null, "21062897"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21062897"]]
						]
					],
					[
						21062898,
						[
							[null, 7, null, [null, 1]],
							[null, null, 5, [null, null, "21062898"]],
							[null, 12, null, [null, 282]],
							[null, null, 7, [null, null, "21062898"]],
							[60, null, null, [1]],
							[null, null, 6, [null, null, "21062898"]]
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
				[[21061507], [21061508, [[83, null, null, [1]], [84, null, null, [1]]]]]
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
		Ia() && G(210, va(a.J));
		Wb.call(this);
		var c = this;
		b = $b.g();
		b[3][6] = function(a) {
			return 0 <= na(c.f, parseInt(a, 10));
		};
		this.a = b;
		D(219).length || G(219, a.I);
		R.g().b = b;
		G(241, b);
		wb(
			pa(D(219), function(a) {
				return new P(a);
			})
		);
		G(230, R.g().a);
	};
	ea(bc, Wb);
	z("partner.googleadservices.com");
	var cc = z("www.googletagservices.com"),
		dc = function() {
			return D(46) && !D(6)
				? "http://pubads.g.doubleclick.net"
				: "https://securepubads.g.doubleclick.net";
		},
		ec = function(a) {
			var b = a.currentScript;
			return (
				"complete" != a.readyState &&
				"loaded" != a.readyState &&
				!(b && b.async)
			);
		},
		fc = function() {
			var a = D(76);
			if (a) return a;
			a = dc();
			var b = S(3, 4, "/gpt/pubads_impl_");
			var c = "";
			if (D(148))
				try {
					var d = "";
					try {
						d = l.top.location.hash;
					} catch (f) {
						d = l.location.hash;
					}
					if (d) {
						var e = d.match(/\bgptv=(\d+)/);
						c = e ? e[1] : "";
					}
				} catch (f) {}
			c = c || S(2, 12, 0) || "278";
			e = S(3, 5, "");
			a = a + b + c + ".js";
			e && (a += "?" + e);
			G(76, a);
			return a;
		},
		gc = function(a, b) {
			var c;
			if (!(c = a.currentScript))
				a: {
					if ((a = a.scripts))
						for (c = 0; c < a.length; c++) {
							var d = a[c];
							if (-1 < d.src.indexOf(cc + "/tag/js/gpt")) {
								c = d;
								break a;
							}
						}
					c = null;
				}
			G(172, c);
			b = new bc(b);
			zb(b, 7);
			zb(b, 5);
			S(1, 59, !1) && (G(173, cc), G(174, cc));
			b = D(150);
			X();
			Fb(b) && (W[1] = b);
		},
		hc = function() {
			return navigator.getBattery
				? navigator.getBattery().then(function(a) {
						G(243, a.level);
						G(244, a.charging);
						G(242, !0);
				  })
				: null;
		},
		ic = function(a, b) {
			var c = Ma(),
				d = c.fifWin || window;
			a = a || d.document;
			Na("cmd", []);
			if (c.evalScripts) c.evalScripts();
			else {
				gc(a, b);
				d.PerformanceObserver && d.PerformanceLongTaskTiming && Tb(d);
				Ub(d);
				b = fc();
				if (ec(a)) {
					d = "gpt-impl-" + Math.random();
					try {
						var e = '<script id="' + d + '" src="' + b + '">\x3c/script>';
						S(1, 17, !1) &&
							Cb() &&
							(e += '<link rel="preconnect" href="' + dc() + '">');
						a.write(e);
					} catch (f) {}
					a.getElementById(d) &&
						((c._loadStarted_ = !0), G(220, !1), S(2, 4, 0) || Pb());
				}
				c._loadStarted_ ||
					(S(2, 4, 0) || Ob(),
					S(1, 16, !1) && T(a, b, "preload", "script"),
					(d = a.createElement("script")),
					(d.src = b),
					(d.async = !0),
					(a.head || a.body || a.documentElement).appendChild(d),
					S(1, 17, !1) && Cb() && T(a, dc(), "preconnect"),
					G(220, !0),
					(c._loadStarted_ = !0));
				S(1, 95, !1) &&
					(a = hc()) &&
					a.catch(function(a) {
						var b = new Qb();
						Rb(b, function(a) {
							a.methodId = 501;
						});
						b.b(501, a);
					});
			}
		};
	(function(a, b) {
		var c = new Qb();
		Rb(c, function(a) {
			a.methodId = 420;
		});
		Sb(c, function() {
			return ic(a, b);
		});
	})();
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this));
