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
			var ba = { G: !0 },
				ca = {};
			try {
				ca.__proto__ = ba;
				k = ca.G;
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
			a.H = b.prototype;
		},
		n = this,
		q = function(a) {
			return "string" == typeof a;
		},
		ha = function() {
			if (null === r) {
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
				r = a || "";
			}
			return r;
		},
		fa = /^[\w+/_-]+[=]{0,2}$/,
		r = null,
		ia = function() {},
		t = function(a) {
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
		u = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.H = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
			a.I = function(a, c, f) {
				for (
					var d = Array(arguments.length - 2), e = 2;
					e < arguments.length;
					e++
				)
					d[e - 2] = arguments[e];
				return b.prototype[c].apply(a, d);
			};
		};
	var w = function(a, b) {
			for (var c = a.length, d = q(a) ? a.split("") : a, e = 0; e < c; e++)
				e in d && b.call(void 0, d[e], e, a);
		},
		ka = function(a) {
			for (
				var b = x(219),
					c = b.length,
					d = Array(c),
					e = q(b) ? b.split("") : b,
					f = 0;
				f < c;
				f++
			)
				f in e && (d[f] = a.call(void 0, e[f], f, b));
			return d;
		},
		la = function(a, b) {
			a: {
				for (var c = a.length, d = q(a) ? a.split("") : a, e = 0; e < c; e++)
					if (e in d && b.call(void 0, d[e], e, a)) {
						b = e;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : q(a) ? a.charAt(b) : a[b];
		};
	var y;
	a: {
		var ma = n.navigator;
		if (ma) {
			var na = ma.userAgent;
			if (na) {
				y = na;
				break a;
			}
		}
		y = "";
	}
	var pa = function() {
		var a = oa,
			b = {},
			c;
		for (c in a) b[c] = a[c];
		return b;
	};
	var z = function(a) {
		z[" "](a);
		return a;
	};
	z[" "] = ia;
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
		this.f = qa;
	};
	B.prototype.c = !0;
	B.prototype.a = function() {
		return this.b;
	};
	var ra = function(a) {
			return a instanceof B && a.constructor === B && a.f === qa
				? a.b
				: "type_error:TrustedResourceUrl";
		},
		qa = {};
	var C = function() {
		this.l = "";
		this.F = sa;
	};
	C.prototype.c = !0;
	C.prototype.a = function() {
		return this.l;
	};
	var ta = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		sa = {},
		ua = function(a) {
			var b = new C();
			b.l = a;
			return b;
		};
	ua("about:blank");
	var va = function(a, b) {
		a.src = ra(b);
		(b = ha()) && a.setAttribute("nonce", b);
	};
	var xa = function(a) {
			wa();
			var b = new B();
			b.b = a;
			return b;
		},
		wa = ia;
	var Ba = function(a, b, c) {
			var d = !1;
			void 0 === c || c || (d = ya());
			return !d && !za() && ((c = Math.random()), c < b)
				? ((c = Aa()), a[Math.floor(c * a.length)])
				: null;
		},
		Aa = function() {
			if (!n.crypto) return Math.random();
			try {
				var a = new Uint32Array(1);
				n.crypto.getRandomValues(a);
				return a[0] / 65536 / 65536;
			} catch (b) {
				return Math.random();
			}
		},
		Ca = function() {
			var a = x(210),
				b;
			for (b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
			return !0;
		},
		za = A(function() {
			return -1 != y.indexOf("Google Web Preview") || 1e-4 > Math.random();
		}),
		ya = A(function() {
			return -1 != y.indexOf("MSIE");
		}),
		D = function(a) {
			return /^true$/.test(a);
		},
		Da = function() {
			try {
				return ha();
			} catch (a) {}
		};
	var E = function() {
		return n.googletag || (n.googletag = {});
	};
	var F = {
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
		77: 0.001,
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
		208: 0,
		169: 0,
		207: 0,
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
		191: "001809122303360",
		192: "021536699515199",
		190: "011536699515199",
		194: 1,
		225: 0.95,
		231: 0.95,
		199: 0,
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
		239: 0.01,
		213: 1,
		214: 0.05,
		215: 0.01,
		233: 0.01,
		237: 0.01,
		217: 0,
		220: !1,
		228: "//www.googletagservices.com/pubconsole/"
	};
	F[6] = (function(a, b) {
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
	F[49] = new Date().getTime();
	F[36] = D("false");
	F[46] = D("false");
	F[148] = D("false");
	F[221] = D("");
	F[232] = D("false");
	var Ea;
	a: {
		if (/^(-?[0-9.]{1,30})$/.test("{{MOD}}")) {
			var Fa = Number("{{MOD}}");
			if (!isNaN(Fa)) {
				Ea = Fa;
				break a;
			}
		}
		Ea = -1;
	}
	F[204] = Ea;
	var G = function() {
		for (var a in F) this[a] = F[a];
	};
	t(G);
	var x = function(a) {
			return G.g()[a];
		},
		H = function(a, b) {
			G.g()[a] = b;
		},
		Ga = E(),
		Ha = G.g(),
		Ia = Ga._vars_,
		Ja;
	for (Ja in Ia) Ha[Ja] = Ia[Ja];
	Ga._vars_ = Ha;
	var Ka = function() {
			return "249";
		},
		La = E();
	La.hasOwnProperty("getVersion") || (La.getVersion = Ka);
	var I = function() {},
		Ma = "function" == typeof Uint8Array,
		K = function(a, b, c, d) {
			a.b = null;
			b || (b = []);
			a.K = void 0;
			a.f = -1;
			a.a = b;
			a: {
				if ((b = a.a.length)) {
					--b;
					var e = a.a[b];
					if (
						e &&
						"object" == typeof e &&
						"array" != ja(e) &&
						!(Ma && e instanceof Uint8Array)
					) {
						a.h = b - a.f;
						a.c = e;
						break a;
					}
				}
				a.h = Number.MAX_VALUE;
			}
			a.J = {};
			if (c)
				for (b = 0; b < c.length; b++)
					(e = c[b]),
						e < a.h
							? ((e += a.f), (a.a[e] = a.a[e] || J))
							: (Na(a), (a.c[e] = a.c[e] || J));
			if (d && d.length) for (b = 0; b < d.length; b++) Oa(a, d[b]);
		},
		J = [],
		Na = function(a) {
			var b = a.h + a.f;
			a.a[b] || (a.c = a.a[b] = {});
		},
		Pa = function(a, b) {
			if (b < a.h) {
				b += a.f;
				var c = a.a[b];
				return c === J ? (a.a[b] = []) : c;
			}
			if (a.c) return (c = a.c[b]), c === J ? (a.c[b] = []) : c;
		},
		Qa = function(a, b) {
			if (b < a.h) {
				b += a.f;
				var c = a.a[b];
				return c === J ? (a.a[b] = []) : c;
			}
			c = a.c[b];
			return c === J ? (a.c[b] = []) : c;
		},
		L = function(a, b, c) {
			a = Pa(a, b);
			return null == a ? c : a;
		},
		Ra = function(a, b, c) {
			b < a.h ? (a.a[b + a.f] = c) : (Na(a), (a.c[b] = c));
		},
		Oa = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					h = Pa(a, f);
				null != h && ((c = f), (d = h), Ra(a, f, void 0));
			}
			return c ? (Ra(a, c, d), c) : 0;
		},
		Sa = function(a, b, c) {
			a.b || (a.b = {});
			if (!a.b[c]) {
				var d = Pa(a, c);
				d && (a.b[c] = new b(d));
			}
			return a.b[c];
		},
		Ta = function(a, b) {
			a.b || (a.b = {});
			if (!a.b[2]) {
				for (var c = Qa(a, 2), d = [], e = 0; e < c.length; e++)
					d[e] = new b(c[e]);
				a.b[2] = d;
			}
			b = a.b[2];
			b == J && (b = a.b[2] = []);
			return b;
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
	var M = null,
		Va = function() {
			if (null === M) {
				M = "";
				try {
					var a = "";
					try {
						a = n.top.location.hash;
					} catch (c) {
						a = n.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						M = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return M;
		};
	var Xa = function(a) {
		K(this, a, Wa, null);
	};
	u(Xa, I);
	var Za = function(a) {
		K(this, a, Ya, null);
	};
	u(Za, I);
	var N = function(a) {
		K(this, a, $a, ab);
	};
	u(N, I);
	var eb = function(a) {
		K(this, a, bb, null);
	};
	u(eb, I);
	var hb = function(a) {
		K(this, a, fb, gb);
	};
	u(hb, I);
	var Wa = [2],
		Ya = [2];
	Za.prototype.getId = function() {
		return L(this, 1, 0);
	};
	var $a = [5],
		ab = [[1, 2, 3, 6]],
		bb = [4],
		fb = [2, 8],
		gb = [[3, 4, 5], [6, 7]];
	var ib = function(a, b) {
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
		jb = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return L(a, 1, !1);
				case 2:
					return +L(a, 2, 0);
				case 3:
					return L(a, 3, "");
				case 6:
					return Qa(a, 4);
				default:
					return null;
			}
		},
		kb = A(function() {
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
		P = function(a, b, c) {
			var d = kb();
			if (d[a] && null != d[a][b]) return d[a][b];
			b = O.g().a[a][b];
			if (!b) return c;
			b = new N(b);
			O.g();
			b = Sa(b, eb, 4);
			a = jb(b, a);
			return null != a ? a : c;
		},
		O = function() {
			var a = {};
			this.a = ((a[1] = {}), (a[2] = {}), (a[3] = {}), (a[6] = {}), a);
		};
	t(O);
	var lb = function(a) {
		var b = O.g().a;
		w(a, function(a) {
			var c = Oa(a, ab[0]),
				e = ib(a, c);
			e && (b[c][e] = a.a);
		});
	};
	var mb = function(a, b) {
			var c = this,
				d = void 0 === b ? {} : b;
			b = void 0 === d.u ? !1 : d.u;
			var e = void 0 === d.w ? {} : d.w;
			d = void 0 === d.C ? [] : d.C;
			this.c = a;
			this.f = b;
			this.a = e;
			this.h = d;
			this.b = {};
			if ((a = Va()))
				(a = a.split(",") || []),
					w(a, function(a) {
						(a = parseInt(a, 10)) && (c.b[a] = !0);
					});
		},
		pb = function() {
			var a = nb.g(),
				b = a.c[5];
			b &&
				(delete a.c[5],
				w(b, function(b) {
					b = new Xa(b);
					!Sa(b, hb, 3) &&
						(b = ob(a, b)) &&
						(a.h.push(b.getId()), (b = Ta(b, N)) && lb(b));
				}));
		},
		ob = function(a, b) {
			var c = Ta(b, Za),
				d = c.length;
			if (!d) return null;
			var e = L(b, 4, 0);
			b = d * L(b, 1, 0);
			if (!e) return qb(a, c, b / 1e3);
			d = null != a.a[e] ? a.a[e] : 1e3;
			if (0 >= d) return null;
			c = qb(a, c, b / d);
			a.a[e] = c ? 0 : d - b;
			return c;
		},
		qb = function(a, b, c) {
			var d = a.b,
				e = la(b, function(a) {
					return !!d[a.getId()];
				});
			return e ? e : a.f ? null : Ba(b, c, !1);
		};
	var rb = function(a) {
		var b = !1,
			c = !1;
		c = void 0 === c ? !1 : c;
		b = void 0 === b ? !1 : b;
		n.google_image_requests || (n.google_image_requests = []);
		var d = n.document.createElement("img");
		if (b) {
			var e = function() {
				if (b) {
					var a = n.google_image_requests;
					a: if (q(a)) var c = q(d) && 1 == d.length ? a.indexOf(d, 0) : -1;
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
		n.google_image_requests.push(d);
	};
	var sb = A(function() {
			var a = (n.navigator && n.navigator.userAgent) || "";
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
				if (-1 != c.toLowerCase().indexOf("stylesheet")) var h = ra(b);
				else {
					if (b instanceof B) var p = ra(b);
					else {
						if (b instanceof C)
							var m =
								b instanceof C && b.constructor === C && b.F === sa
									? b.l
									: "type_error:SafeUrl";
						else {
							if (b instanceof C) var l = b;
							else
								(b = "object" == typeof b && b.c ? b.a() : String(b)),
									ta.test(b) || (b = "about:invalid#zClosurez"),
									(l = ua(b));
							m = l.a();
						}
						p = m;
					}
					h = p;
				}
				f.href = h;
			} catch (v) {
				return;
			}
			d && "preload" == c && (f.as = d);
			e && (f.nonce = e);
			if ((a = a.getElementsByTagName("head")[0]))
				try {
					a.appendChild(f);
				} catch (v) {}
		};
	var tb = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		ub = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		vb = function(a) {
			return tb.test(a) && !ub.test(a);
		},
		wb = function(a) {
			return a.replace(/[\W]/g, function(a) {
				return "&#" + a.charCodeAt() + ";";
			});
		},
		R = n,
		xb = function(a, b) {
			a = "https://" + ("adservice" + b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(n.location.hostname)];
			S[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(S[1]));
			return a + "?" + b.join("&");
		},
		S,
		T,
		U = function() {
			R = n;
			S = R.googleToken = R.googleToken || {};
			var a = +new Date();
			(S[1] && S[3] > a && 0 < S[2]) ||
				((S[1] = ""), (S[2] = -1), (S[3] = -1), (S[4] = ""), (S[6] = ""));
			T = R.googleIMState = R.googleIMState || {};
			vb(T[1]) || (T[1] = ".google.com");
			"array" == ja(T[5]) || (T[5] = []);
			"boolean" == typeof T[6] || (T[6] = !1);
			"array" == ja(T[7]) || (T[7] = []);
			"number" == typeof T[8] || (T[8] = 0);
		},
		yb = function(a) {
			try {
				a();
			} catch (b) {
				n.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		Ab = function(a) {
			"complete" == n.document.readyState ||
			"loaded" == n.document.readyState ||
			(n.document.currentScript && n.document.currentScript.async)
				? zb(3)
				: a();
		},
		Bb = 0,
		W = {
			i: function() {
				return 0 < T[8];
			},
			o: function() {
				T[8]++;
			},
			A: function() {
				0 < T[8] && T[8]--;
			},
			B: function() {
				T[8] = 0;
			},
			j: function() {},
			D: function() {
				return !1;
			},
			v: function() {
				return T[5];
			},
			s: yb
		},
		X = {
			i: function() {
				return T[6];
			},
			o: function() {
				T[6] = !0;
			},
			A: function() {
				T[6] = !1;
			},
			B: function() {
				T[6] = !1;
			},
			j: function() {},
			D: function() {
				return ".google.com" != T[1] && 2 < ++Bb;
			},
			v: function() {
				return T[7];
			},
			s: function(a) {
				Ab(function() {
					yb(a);
				});
			}
		},
		zb = function(a) {
			1e-5 > Math.random() &&
				rb(
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
						a
				);
		};
	W.j = function() {
		if (!W.i()) {
			var a = n.document,
				b = function(b) {
					var c = xb("js", b),
						d = Da();
					Q(a, c, "preload", "script", d);
					b = a.createElement("script");
					b.type = "text/javascript";
					d && (b.nonce = d);
					b.onerror = function() {
						return n.processGoogleToken({}, 2);
					};
					c = xa(c);
					va(b, c);
					try {
						(a.head || a.body || a.documentElement).appendChild(b), W.o();
					} catch (p) {}
				},
				c = T[1];
			b(c);
			".google.com" != c && b(".google.com");
			b = {};
			var d = ((b.newToken = "FBT"), b);
			n.setTimeout(function() {
				return n.processGoogleToken(d, 1);
			}, 1e3);
		}
	};
	X.j = function() {
		if (!X.i()) {
			var a = n.document,
				b = xb("sync.js", T[1]);
			Q(a, b, "preload", "script");
			b = wb(b);
			var c = z("script"),
				d = "",
				e = Da();
			e && (d = 'nonce="' + wb(e) + '"');
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
			Ab(function() {
				a.write(f);
				X.o();
			});
		}
	};
	var Cb = function(a) {
			U();
			(S[3] >= +new Date() && S[2] >= +new Date()) || a.j();
		},
		Eb = function() {
			n.processGoogleToken =
				n.processGoogleToken ||
				function(a, b) {
					return Db(W, a, b);
				};
			Cb(W);
		},
		Fb = function() {
			n.processGoogleTokenSync =
				n.processGoogleTokenSync ||
				function(a, b) {
					return Db(X, a, b);
				};
			Cb(X);
		},
		Db = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				h = parseInt(b.validLifetimeSecs || "", 10),
				p = b["1p_jar"] || "";
			b = b.pucrd || "";
			U();
			1 == c ? a.B() : a.A();
			if (!d && a.D()) vb(".google.com") && (T[1] = ".google.com"), a.j();
			else {
				var m = (R.googleToken = R.googleToken || {}),
					l =
						0 == c &&
						d &&
						q(d) &&
						!e &&
						"number" == typeof f &&
						0 < f &&
						"number" == typeof h &&
						0 < h &&
						q(p);
				e = e && !a.i() && (!(S[3] >= +new Date()) || "NT" == S[1]);
				var v = !(S[3] >= +new Date()) && 0 != c;
				if (l || e || v)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(h = e + 1e3 * h),
						zb(c),
						(m[5] = c),
						(m[1] = d),
						(m[2] = f),
						(m[3] = h),
						(m[4] = p),
						(m[6] = b),
						U();
				if (l || !a.i()) {
					c = a.v();
					for (d = 0; d < c.length; d++) a.s(c[d]);
					c.length = 0;
				}
			}
		};
	var Gb = function() {
			this.a = null;
		},
		Hb = function(a, b) {
			a.a = b;
		};
	Gb.prototype.b = function(a, b, c, d, e) {
		if (Math.random() > (void 0 === c ? 0.01 : c)) return !1;
		(b.error && b.meta && b.id) ||
			(b = new Ua(b, { context: a, id: void 0 === e ? "gpt_exception" : e }));
		if (d || this.a) (b.meta = {}), this.a && this.a(b.meta), d && d(b.meta);
		n.google_js_errors = n.google_js_errors || [];
		n.google_js_errors.push(b);
		n.error_rep_loaded ||
			((b = n.document),
			(a = b.createElement("script")),
			va(
				a,
				xa(
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
	var Ib = function(a, b) {
		var c = void 0 === c ? a.b : c;
		try {
			b();
		} catch (d) {
			if (!c.call(a, 420, d, 0.01, void 0, "gpt_exception")) throw d;
		}
	};
	var Jb = function(a) {
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
	var Kb = [
		[28, null, null, [1]],
		[38, null, null, [1]],
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
		[null, 7, null, [null, 0.1]],
		[21, null, null, [1]],
		[4, null, null, [1]],
		[7, null, null, [1]]
	];
	var Lb = function() {
		mb.call(this, x(210), { u: x(211), w: x(227), C: x(226) });
	};
	ea(Lb, mb);
	var oa = {
		3: [
			[10, [[21061799], [21061800], [21061801]]],
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
				1,
				[[21062352], [21062353, [[20, null, null, [1]]]]],
				[1, [[4, null, 1]]],
				3
			],
			[10, [[21062420], [21062421, [[42, null, null, [1]]]]]],
			[null, [[21062495], [21062496, [[47, null, null, [1]]]]]],
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
			[10, [[21062185], [21062186, [[24, null, null, [1]]]]]],
			[10, [[21062422], [21062423, [[39, null, null, [1]]]]]],
			[null, [[21062168], [21062169, [[23, null, null, [1]]]]]],
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
					[21062509, [[null, 11, null, [null, 1e3]]]],
					[21062510, [[null, 11, null, [null, 1e4]]]],
					[21062511, [[null, 11, null, [null, -1]]]]
				]
			],
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
	var nb = function() {
		Ca() && H(210, pa());
		Lb.call(this);
		x(219).length || H(219, Kb);
		lb(
			ka(function(a) {
				return new N(a);
			})
		);
		H(230, O.g().a);
	};
	ea(nb, Lb);
	t(nb);
	z("partner.googleadservices.com");
	var Mb = z("www.googletagservices.com"),
		Y = "",
		Z = "",
		Nb = x(46) && !x(6);
	Y = Nb ? "http:" : "https:";
	Z = x(Nb ? 2 : 3);
	var Ob = function(a) {
		var b = x(148) ? Va() : "";
		return (b = b && b.match(new RegExp("\\b(" + a.join("|") + ")\\b")))
			? b[0]
			: Ba(a, 0.001 * a.length);
	};
	(function(a) {
		var b = new Gb();
		Hb(b, function(a) {
			a.methodId = 420;
		});
		Ib(b, function() {
			var b = a,
				d = E(),
				e = d.fifWin || window;
			b = b || e.document;
			var f = [],
				h = E();
			h.hasOwnProperty("cmd") || (h.cmd = f);
			if (d.evalScripts) d.evalScripts();
			else {
				pb();
				f = b;
				if ((h = Ob(["21061590", "21061591"])))
					"21061591" == h ? (H(173, Mb), H(174, Mb)) : H(163, h),
						x(152).push(h);
				h = x(150);
				U();
				vb(h) && (T[1] = h);
				if (!(h = f.currentScript))
					a: {
						if ((f = f.scripts))
							for (h = 0; h < f.length; h++) {
								var p = f[h];
								if (-1 < p.src.indexOf(Mb + "/tag/js/gpt")) {
									h = p;
									break a;
								}
							}
						h = null;
					}
				H(172, h);
				e.PerformanceObserver && e.PerformanceLongTaskTiming && Jb(e);
				f = e;
				f = void 0 === f ? n : f;
				if ((f = (f = f.performance) && f.now ? f.now() : null))
					(f = { label: "1", type: 9, value: f }),
						(e = e.google_js_reporting_queue =
							e.google_js_reporting_queue || []),
						1024 > e.length && e.push(f);
				if ((e = x(76))) var m = e;
				else {
					var l;
					e = "";
					if (x(148))
						try {
							f = "";
							try {
								f = n.top.location.hash;
							} catch (cb) {
								f = n.location.hash;
							}
							f && (e = (l = f.match(/\bgptv=(\d+)/)) ? l[1] : "");
						} catch (cb) {}
					l = e;
					h = ["246", "249"];
					e = h[0] || "249";
					f = "";
					if (1 < h.length) {
						p = ["21062553", "210625534"];
						var v = Ob(p);
						if (v) {
							H(53, v);
							var db = p[0];
							if (v != db)
								for (var V = 1; V < p.length; ++V)
									if (v == p[V]) {
										m = h[V];
										break;
									}
							if (v == db || parseInt(m, 10) < parseInt(e, 10))
								(h = h[p.length - 1]), (f = "?v=" + h), H(163, h);
						}
					}
					e = Y + "//" + Z + "/gpt/pubads_impl_" + (l ? l : m || e) + ".js" + f;
					H(76, e);
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
								sb() &&
								(e += '<link rel="preconnect" href="' + Y + "//" + Z + '">'),
							b.write(e);
					} catch (cb) {}
					b.getElementById(l) &&
						((d._loadStarted_ = !0), H(220, !1), P(2, 4, 0) || Fb());
				}
				d._loadStarted_ ||
					(P(2, 4, 0) || Eb(),
					P(1, 16, !1) && Q(b, m, "preload", "script"),
					(l = b.createElement("script")),
					(l.src = m),
					(l.async = !0),
					(b.head || b.body || b.documentElement).appendChild(l),
					P(1, 17, !1) && sb() && Q(b, Y + "//" + Z, "preconnect"),
					H(220, !0),
					(d._loadStarted_ = !0));
			}
		});
	})();
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this));
