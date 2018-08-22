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
		p = this,
		q = function(a) {
			return "string" == typeof a;
		},
		ia = function() {
			if (null === fa) {
				a: {
					var a = p.document;
					if (
						(a = a.querySelector && a.querySelector("script[nonce]")) &&
						(a = a.nonce || a.getAttribute("nonce")) &&
						ha.test(a)
					)
						break a;
					a = null;
				}
				fa = a || "";
			}
			return fa;
		},
		ha = /^[\w+/_-]+[=]{0,2}$/,
		fa = null,
		ja = function() {},
		ka = function(a) {
			a.m = void 0;
			a.g = function() {
				return a.m ? a.m : (a.m = new a());
			};
		},
		la = function(a) {
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
		r = function(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.H = b.prototype;
			a.prototype = new c();
			a.prototype.constructor = a;
			a.I = function(a, c, f) {
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
			if (q(a)) return q(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
			for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
			return -1;
		},
		u = function(a, b) {
			for (var c = a.length, d = q(a) ? a.split("") : a, e = 0; e < c; e++)
				e in d && b.call(void 0, d[e], e, a);
		},
		na = function(a) {
			for (
				var b = v(219),
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
		oa = function(a, b) {
			a: {
				for (var c = a.length, d = q(a) ? a.split("") : a, e = 0; e < c; e++)
					if (e in d && b.call(void 0, d[e], e, a)) {
						b = e;
						break a;
					}
				b = -1;
			}
			return 0 > b ? null : q(a) ? a.charAt(b) : a[b];
		},
		pa = function(a) {
			return Array.prototype.concat.apply([], arguments);
		};
	var x;
	a: {
		var qa = p.navigator;
		if (qa) {
			var ra = qa.userAgent;
			if (ra) {
				x = ra;
				break a;
			}
		}
		x = "";
	}
	var ta = function() {
		var a = sa,
			b = {},
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
		this.f = ua;
	};
	A.prototype.c = !0;
	A.prototype.a = function() {
		return this.b;
	};
	var va = function(a) {
			return a instanceof A && a.constructor === A && a.f === ua
				? a.b
				: "type_error:TrustedResourceUrl";
		},
		ua = {};
	var C = function() {
		this.l = "";
		this.F = wa;
	};
	C.prototype.c = !0;
	C.prototype.a = function() {
		return this.l;
	};
	var xa = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		wa = {},
		ya = function(a) {
			var b = new C();
			b.l = a;
			return b;
		};
	ya("about:blank");
	var za = function(a, b) {
		a.src = va(b);
		(b = ia()) && a.setAttribute("nonce", b);
	};
	var Ba = function(a) {
			Aa();
			var b = new A();
			b.b = a;
			return b;
		},
		Aa = ja;
	var Fa = function(a, b, c) {
			var d = !1;
			void 0 === c || c || (d = Ca());
			return !d && !Da() && ((c = Math.random()), c < b)
				? ((c = Ea()), a[Math.floor(c * a.length)])
				: null;
		},
		Ea = function() {
			if (!p.crypto) return Math.random();
			try {
				var a = new Uint32Array(1);
				p.crypto.getRandomValues(a);
				return a[0] / 65536 / 65536;
			} catch (b) {
				return Math.random();
			}
		},
		Ga = function() {
			var a = v(210),
				b;
			for (b in a) if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
			return !0;
		},
		Da = z(function() {
			return -1 != x.indexOf("Google Web Preview") || 1e-4 > Math.random();
		}),
		Ca = z(function() {
			return -1 != x.indexOf("MSIE");
		}),
		E = function(a) {
			return /^true$/.test(a);
		},
		Ha = function() {
			try {
				return ia();
			} catch (a) {}
		};
	var F = function() {
		return p.googletag || (p.googletag = {});
	};
	var G = {
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
		118: 1,
		124: 1,
		208: 0.01,
		169: 0,
		207: 0.01,
		127: 0,
		129: 0.05,
		131: "",
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
		188: 0.01,
		189: 0.01,
		191: "001535039767807",
		192: "021535038987988",
		190: "011535038987988",
		194: 0.95,
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
		239: 0.001,
		213: 1,
		214: 0.05,
		215: 0.01,
		233: 0.01,
		235: 0.01,
		237: 0.01,
		217: 0,
		220: !1,
		228: "//www.googletagservices.com/pubconsole/"
	};
	G[6] = (function(a, b) {
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
	G[49] = new Date().getTime();
	G[36] = E("false");
	G[46] = E("false");
	G[148] = E("false");
	G[221] = E("");
	G[232] = E("false");
	var Ia;
	a: {
		if (/^(-?[0-9.]{1,30})$/.test("{{MOD}}")) {
			var Ja = Number("{{MOD}}");
			if (!isNaN(Ja)) {
				Ia = Ja;
				break a;
			}
		}
		Ia = -1;
	}
	G[204] = Ia;
	var H = function() {
		for (var a in G) this[a] = G[a];
	};
	ka(H);
	var v = function(a) {
			return H.g()[a];
		},
		I = function(a, b) {
			H.g()[a] = b;
		},
		Ka = F(),
		La = H.g(),
		Ma = Ka._vars_,
		Na;
	for (Na in Ma) La[Na] = Ma[Na];
	Ka._vars_ = La;
	var Oa = function() {
			return "243";
		},
		Pa = F();
	Pa.hasOwnProperty("getVersion") || (Pa.getVersion = Oa);
	var J = function() {},
		Qa = "function" == typeof Uint8Array,
		L = function(a, b, c, d) {
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
						"array" != la(e) &&
						!(Qa && e instanceof Uint8Array)
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
							? ((e += a.f), (a.a[e] = a.a[e] || K))
							: (Ra(a), (a.c[e] = a.c[e] || K));
			if (d && d.length) for (b = 0; b < d.length; b++) Sa(a, d[b]);
		},
		K = [],
		Ra = function(a) {
			var b = a.h + a.f;
			a.a[b] || (a.c = a.a[b] = {});
		},
		Ta = function(a, b) {
			if (b < a.h) {
				b += a.f;
				var c = a.a[b];
				return c === K ? (a.a[b] = []) : c;
			}
			if (a.c) return (c = a.c[b]), c === K ? (a.c[b] = []) : c;
		},
		Ua = function(a, b) {
			if (b < a.h) {
				b += a.f;
				var c = a.a[b];
				return c === K ? (a.a[b] = []) : c;
			}
			c = a.c[b];
			return c === K ? (a.c[b] = []) : c;
		},
		M = function(a, b, c) {
			a = Ta(a, b);
			return null == a ? c : a;
		},
		Va = function(a, b, c) {
			b < a.h ? (a.a[b + a.f] = c) : (Ra(a), (a.c[b] = c));
		},
		Sa = function(a, b) {
			for (var c, d, e = 0; e < b.length; e++) {
				var f = b[e],
					h = Ta(a, f);
				null != h && ((c = f), (d = h), Va(a, f, void 0));
			}
			return c ? (Va(a, c, d), c) : 0;
		},
		Wa = function(a, b, c) {
			a.b || (a.b = {});
			if (!a.b[c]) {
				var d = Ta(a, c);
				d && (a.b[c] = new b(d));
			}
			return a.b[c];
		},
		Xa = function(a, b) {
			a.b || (a.b = {});
			if (!a.b[2]) {
				for (var c = Ua(a, 2), d = [], e = 0; e < c.length; e++)
					d[e] = new b(c[e]);
				a.b[2] = d;
			}
			b = a.b[2];
			b == K && (b = a.b[2] = []);
			return b;
		};
	var Ya = function(a, b) {
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
		Za = function() {
			if (null === N) {
				N = "";
				try {
					var a = "";
					try {
						a = p.top.location.hash;
					} catch (c) {
						a = p.location.hash;
					}
					if (a) {
						var b = a.match(/\bdeid=([\d,]+)/);
						N = b ? b[1] : "";
					}
				} catch (c) {}
			}
			return N;
		};
	var ab = function(a) {
		L(this, a, $a, null);
	};
	r(ab, J);
	var $a = [2],
		cb = function(a) {
			L(this, a, bb, null);
		};
	r(cb, J);
	var bb = [2];
	cb.prototype.getId = function() {
		return M(this, 1, 0);
	};
	var O = function(a) {
		L(this, a, db, eb);
	};
	r(O, J);
	var db = [5],
		eb = [[1, 2, 3, 6]],
		hb = function(a) {
			L(this, a, gb, null);
		};
	r(hb, J);
	var gb = [4],
		kb = function(a) {
			L(this, a, ib, jb);
		};
	r(kb, J);
	var ib = [2, 8],
		jb = [[3, 4, 5], [6, 7]];
	var lb = function(a, b) {
			switch (b) {
				case 1:
					return M(a, 1, 0);
				case 2:
					return M(a, 2, 0);
				case 3:
					return M(a, 3, 0);
				case 6:
					return M(a, 6, 0);
				default:
					return null;
			}
		},
		mb = function(a, b) {
			if (!a) return null;
			switch (b) {
				case 1:
					return M(a, 1, !1);
				case 2:
					return +M(a, 2, 0);
				case 3:
					return M(a, 3, "");
				case 6:
					return Ua(a, 4);
				default:
					return null;
			}
		},
		nb = z(function() {
			var a = "";
			try {
				a = p.top.location.hash;
			} catch (c) {
				a = p.location.hash;
			}
			var b = {};
			if ((a = (a = /\bdflags=({.*})(&|$)/.exec(a)) && a[1]))
				try {
					b = JSON.parse(decodeURIComponent(a));
				} catch (c) {}
			return b;
		}),
		Q = function(a, b, c) {
			var d = nb();
			if (d[a] && null != d[a][b]) return d[a][b];
			b = P.g().a[a][b];
			if (!b) return c;
			b = new O(b);
			P.g();
			b = Wa(b, hb, 4);
			a = mb(b, a);
			return null != a ? a : c;
		},
		P = function() {
			var a = {};
			this.a = ((a[1] = {}), (a[2] = {}), (a[3] = {}), (a[6] = {}), a);
		};
	ka(P);
	var ob = function(a) {
		var b = P.g().a;
		u(a, function(a) {
			var c = Sa(a, eb[0]),
				e = lb(a, c);
			e && (b[c][e] = a.a);
		});
	};
	var pb = function(a, b) {
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
			if ((a = Za()))
				(a = a.split(",") || []),
					u(a, function(a) {
						(a = parseInt(a, 10)) && (c.b[a] = !0);
					});
		},
		sb = function() {
			var a = qb.g(),
				b = a.c[5];
			b &&
				(delete a.c[5],
				u(b, function(b) {
					b = new ab(b);
					!Wa(b, kb, 3) &&
						(b = rb(a, b)) &&
						(a.h.push(b.getId()), (b = Xa(b, O)) && ob(b));
				}));
		},
		rb = function(a, b) {
			var c = Xa(b, cb),
				d = c.length;
			if (!d) return null;
			var e = M(b, 4, 0);
			b = d * M(b, 1, 0);
			if (!e) return tb(a, c, b / 1e3);
			d = null != a.a[e] ? a.a[e] : 1e3;
			if (0 >= d) return null;
			c = tb(a, c, b / d);
			a.a[e] = c ? 0 : d - b;
			return c;
		},
		tb = function(a, b, c) {
			var d = a.b,
				e = oa(b, function(a) {
					return !!d[a.getId()];
				});
			return e ? e : a.f ? null : Fa(b, c, !1);
		};
	var ub = function(a) {
		var b = !1,
			c = !1;
		c = void 0 === c ? !1 : c;
		b = void 0 === b ? !1 : b;
		p.google_image_requests || (p.google_image_requests = []);
		var d = p.document.createElement("img");
		if (b) {
			var e = function() {
				if (b) {
					var a = p.google_image_requests,
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
		p.google_image_requests.push(d);
	};
	var vb = z(function() {
			var a = (p.navigator && p.navigator.userAgent) || "";
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
				if (-1 != c.toLowerCase().indexOf("stylesheet")) var h = va(b);
				else {
					if (b instanceof A) var n = va(b);
					else {
						if (b instanceof C)
							var m =
								b instanceof C && b.constructor === C && b.F === wa
									? b.l
									: "type_error:SafeUrl";
						else {
							if (b instanceof C) var l = b;
							else
								(b = "object" == typeof b && b.c ? b.a() : String(b)),
									xa.test(b) || (b = "about:invalid#zClosurez"),
									(l = ya(b));
							m = l.a();
						}
						n = m;
					}
					h = n;
				}
				f.href = h;
			} catch (t) {
				return;
			}
			d && "preload" == c && (f.as = d);
			e && (f.nonce = e);
			if ((a = a.getElementsByTagName("head")[0]))
				try {
					a.appendChild(f);
				} catch (t) {}
		};
	var wb = /^\.google\.(com?\.)?[a-z]{2,3}$/,
		xb = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
		yb = function(a) {
			return wb.test(a) && !xb.test(a);
		},
		zb = function(a) {
			return a.replace(/[\W]/g, function(a) {
				return "&#" + a.charCodeAt() + ";";
			});
		},
		S = p,
		Ab = function(a, b) {
			a = "https://" + ("adservice" + b + "/adsid/integrator." + a);
			b = ["domain=" + encodeURIComponent(p.location.hostname)];
			T[3] >= +new Date() && b.push("adsid=" + encodeURIComponent(T[1]));
			return a + "?" + b.join("&");
		},
		T,
		U,
		V = function() {
			S = p;
			T = S.googleToken = S.googleToken || {};
			var a = +new Date();
			(T[1] && T[3] > a && 0 < T[2]) ||
				((T[1] = ""), (T[2] = -1), (T[3] = -1), (T[4] = ""), (T[6] = ""));
			U = S.googleIMState = S.googleIMState || {};
			yb(U[1]) || (U[1] = ".google.com");
			"array" == la(U[5]) || (U[5] = []);
			"boolean" == typeof U[6] || (U[6] = !1);
			"array" == la(U[7]) || (U[7] = []);
			"number" == typeof U[8] || (U[8] = 0);
		},
		Bb = function(a) {
			try {
				a();
			} catch (b) {
				p.setTimeout(function() {
					throw b;
				}, 0);
			}
		},
		Db = function(a) {
			"complete" == p.document.readyState ||
			"loaded" == p.document.readyState ||
			(p.document.currentScript && p.document.currentScript.async)
				? Cb(3)
				: a();
		},
		Eb = 0,
		W = {
			i: function() {
				return 0 < U[8];
			},
			o: function() {
				U[8]++;
			},
			A: function() {
				0 < U[8] && U[8]--;
			},
			B: function() {
				U[8] = 0;
			},
			j: function() {},
			D: function() {
				return !1;
			},
			v: function() {
				return U[5];
			},
			s: Bb
		},
		X = {
			i: function() {
				return U[6];
			},
			o: function() {
				U[6] = !0;
			},
			A: function() {
				U[6] = !1;
			},
			B: function() {
				U[6] = !1;
			},
			j: function() {},
			D: function() {
				return ".google.com" != U[1] && 2 < ++Eb;
			},
			v: function() {
				return U[7];
			},
			s: function(a) {
				Db(function() {
					Bb(a);
				});
			}
		},
		Cb = function(a) {
			1e-5 > Math.random() &&
				ub(
					"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" +
						a
				);
		};
	W.j = function() {
		if (!W.i()) {
			var a = p.document,
				b = function(b) {
					var c = Ab("js", b),
						d = Ha();
					R(a, c, "preload", "script", d);
					b = a.createElement("script");
					b.type = "text/javascript";
					d && (b.nonce = d);
					b.onerror = function() {
						return p.processGoogleToken({}, 2);
					};
					c = Ba(c);
					za(b, c);
					try {
						(a.head || a.body || a.documentElement).appendChild(b), W.o();
					} catch (n) {}
				},
				c = U[1];
			b(c);
			".google.com" != c && b(".google.com");
			b = {};
			var d = ((b.newToken = "FBT"), b);
			p.setTimeout(function() {
				return p.processGoogleToken(d, 1);
			}, 1e3);
		}
	};
	X.j = function() {
		if (!X.i()) {
			var a = p.document,
				b = Ab("sync.js", U[1]);
			R(a, b, "preload", "script");
			b = zb(b);
			var c = y("script"),
				d = "",
				e = Ha();
			e && (d = 'nonce="' + zb(e) + '"');
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
			Db(function() {
				a.write(f);
				X.o();
			});
		}
	};
	var Fb = function(a) {
			V();
			(T[3] >= +new Date() && T[2] >= +new Date()) || a.j();
		},
		Hb = function() {
			p.processGoogleToken =
				p.processGoogleToken ||
				function(a, b) {
					return Gb(W, a, b);
				};
			Fb(W);
		},
		Ib = function() {
			p.processGoogleTokenSync =
				p.processGoogleTokenSync ||
				function(a, b) {
					return Gb(X, a, b);
				};
			Fb(X);
		},
		Gb = function(a, b, c) {
			b = void 0 === b ? {} : b;
			c = void 0 === c ? 0 : c;
			var d = b.newToken || "",
				e = "NT" == d,
				f = parseInt(b.freshLifetimeSecs || "", 10),
				h = parseInt(b.validLifetimeSecs || "", 10),
				n = b["1p_jar"] || "";
			b = b.pucrd || "";
			V();
			1 == c ? a.B() : a.A();
			if (!d && a.D()) yb(".google.com") && (U[1] = ".google.com"), a.j();
			else {
				var m = (S.googleToken = S.googleToken || {}),
					l =
						0 == c &&
						d &&
						q(d) &&
						!e &&
						"number" == typeof f &&
						0 < f &&
						"number" == typeof h &&
						0 < h &&
						q(n);
				e = e && !a.i() && (!(T[3] >= +new Date()) || "NT" == T[1]);
				var t = !(T[3] >= +new Date()) && 0 != c;
				if (l || e || t)
					(e = +new Date()),
						(f = e + 1e3 * f),
						(h = e + 1e3 * h),
						Cb(c),
						(m[5] = c),
						(m[1] = d),
						(m[2] = f),
						(m[3] = h),
						(m[4] = n),
						(m[6] = b),
						V();
				if (l || !a.i()) {
					c = a.v();
					for (d = 0; d < c.length; d++) a.s(c[d]);
					c.length = 0;
				}
			}
		};
	var Jb = function() {
			this.a = null;
		},
		Kb = function(a, b) {
			a.a = b;
		};
	Jb.prototype.b = function(a, b, c, d, e) {
		if (Math.random() > (void 0 === c ? 0.01 : c)) return !1;
		(b.error && b.meta && b.id) ||
			(b = new Ya(b, { context: a, id: void 0 === e ? "gpt_exception" : e }));
		if (d || this.a) (b.meta = {}), this.a && this.a(b.meta), d && d(b.meta);
		p.google_js_errors = p.google_js_errors || [];
		p.google_js_errors.push(b);
		p.error_rep_loaded ||
			((b = p.document),
			(a = b.createElement("script")),
			za(
				a,
				Ba(
					p.location.protocol +
						"//pagead2.googlesyndication.com/pagead/js/err_rep.js"
				)
			),
			(b = b.getElementsByTagName("script")[0]) &&
				b.parentNode &&
				b.parentNode.insertBefore(a, b),
			(p.error_rep_loaded = !0));
		return !1;
	};
	var Lb = function(a, b) {
		var c = void 0 === c ? a.b : c;
		try {
			b();
		} catch (d) {
			if (!c.call(a, 420, d, 0.01, void 0, "gpt_exception")) throw d;
		}
	};
	var Mb = function(a) {
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
	var Nb = [
		[28, null, null, [1]],
		[11, null, null, [1]],
		[18, null, null, [1]],
		[39, null, null, [1]],
		[30, null, null, [1]],
		[25, null, null, [1]],
		[3, null, null, [1]],
		[null, 8, null, [null, -1]],
		[15, null, null, [1]],
		[45, null, null, []],
		[null, null, 2, [null, null, "1-0-29"]],
		[null, 7, null, [null, 0.1]],
		[21, null, null, [1]],
		[4, null, null, [1]],
		[7, null, null, [1]]
	];
	var Ob = function() {
		pb.call(this, v(210), { u: v(211), w: v(227), C: v(226) });
	};
	ea(Ob, pb);
	var sa = {
		3: [
			[10, [[21061799], [21061800], [21061801]]],
			[1, [[21062416], [21062417, [[37, null, null, [1]]]]]],
			[
				50,
				[[21061763], [21061764, [[5, null, null, [1]], [4, null, null, [1]]]]]
			],
			[50, [[21062377], [21062378, [[11, null, null, []]]]]],
			[null, [[21062156], [21062157, [[15, null, null, [1]]]]]],
			[
				10,
				[
					[21062287],
					[
						21062288,
						[
							[27, null, null, [1]],
							[14, null, null, [1]],
							[12, null, null, [1]],
							[32, null, null, [1]]
						]
					],
					[
						21062289,
						[
							[null, 6, null, [null, 1]],
							[27, null, null, [1]],
							[26, null, null, [1]],
							[14, null, null, [1]],
							[12, null, null, [1]],
							[32, null, null, [1]]
						]
					]
				]
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
			[1, [[21062420], [21062421, [[42, null, null, [1]]]]]],
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
			[
				10,
				[
					[21062125],
					[21062137, [[null, 2, null, [null, 5e3]]]],
					[21062126, [[null, 2, null, [null, 1e3]]]],
					[21062136, [[null, 2, null, [null, 3e3]]]]
				]
			],
			[10, [[21061803], [21061804]]]
		],
		4: [[null, [[21062304], [21062305, [[34, null, null, [1]]]]]]],
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
		6: [[1, [[21062434], [21062435, [[44, null, null, [1]]]]], [4, null, 4]]]
	};
	var qb = function() {
		Ga() && I(210, ta());
		Ob.call(this);
		v(219).length || I(219, Nb);
		ob(
			na(function(a) {
				return new O(a);
			})
		);
		I(230, P.g().a);
	};
	ea(qb, Ob);
	ka(qb);
	y("partner.googleadservices.com");
	var Pb = y("www.googletagservices.com"),
		Y = "",
		Z = "",
		Qb = v(46) && !v(6);
	Y = Qb ? "http:" : "https:";
	Z = v(Qb ? 2 : 3);
	var Rb = function(a, b) {
		var c = v(148) ? Za() : "";
		return (c = c && c.match(new RegExp("\\b(" + a.join("|") + ")\\b")))
			? c[0]
			: b
				? Fa(a, a.length * b)
				: null;
	};
	(function(a) {
		var b = new Jb();
		Kb(b, function(a) {
			a.methodId = 420;
		});
		Lb(b, function() {
			var b = a,
				d = F(),
				e = d.fifWin || window;
			b = b || e.document;
			var f = [],
				h = F();
			h.hasOwnProperty("cmd") || (h.cmd = f);
			if (d.evalScripts) d.evalScripts();
			else {
				sb();
				f = b;
				if ((h = Rb(["21061590", "21061591"], 0.001)))
					"21061591" == h ? (I(173, Pb), I(174, Pb)) : I(163, h),
						v(152).push(h);
				-1 != x.indexOf("Mobile") || I(194, v(225));
				h = v(150);
				V();
				yb(h) && (U[1] = h);
				if (!(h = f.currentScript))
					a: {
						if ((f = f.scripts))
							for (h = 0; h < f.length; h++) {
								var n = f[h];
								if (-1 < n.src.indexOf(Pb + "/tag/js/gpt")) {
									h = n;
									break a;
								}
							}
						h = null;
					}
				I(172, h);
				e.PerformanceObserver && e.PerformanceLongTaskTiming && Mb(e);
				f = e;
				f = void 0 === f ? p : f;
				if ((f = (f = f.performance) && f.now ? f.now() : null))
					(f = { label: "1", type: 9, value: f }),
						(e = e.google_js_reporting_queue =
							e.google_js_reporting_queue || []),
						1024 > e.length && e.push(f);
				if ((e = v(76))) var m = e;
				else {
					var l;
					e = "";
					if (v(148))
						try {
							f = "";
							try {
								f = p.top.location.hash;
							} catch (fb) {
								f = p.location.hash;
							}
							f && (e = (l = f.match(/\bgptv=(\d+)/)) ? l[1] : "");
						} catch (fb) {}
					l = e;
					n = ["242", "243"];
					e = n[0] || "243";
					f = "";
					h = !1;
					if (v(131)) (m = "243"), (h = !0);
					else if (1 < n.length) {
						var t = ["21062450", "21062451"],
							w = [""];
						if (1 >= w.length || t.length != w.length) w = [];
						var D = Rb(pa(t, w), 0.01);
						if (D) {
							h = !0;
							I(53, D);
							var B = 0 <= ma(w, D);
							I(170, B);
							B && (t = w);
							w = t[0];
							if (D != w)
								for (B = 1; B < t.length; ++B)
									if (D == t[B]) {
										m = n[B];
										break;
									}
							if (D == w || parseInt(m, 10) < parseInt(e, 10))
								(n = n[t.length - 1]), (f = "?v=" + n), I(163, n);
						}
					}
					h ||
						((h = Rb(["21062293", "21062294"], 0.001)) &&
							"21062294" == h &&
							((h = Date.now()), (f = "?cb=" + h), I(163, h)));
					e = Y + "//" + Z + "/gpt/pubads_impl_" + (l ? l : m || e) + ".js" + f;
					I(76, e);
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
							Q(1, 17, !1) &&
								vb() &&
								(e += '<link rel="preconnect" href="' + Y + "//" + Z + '">'),
							b.write(e);
					} catch (fb) {}
					b.getElementById(l) &&
						((d._loadStarted_ = !0), I(220, !1), Q(2, 4, 0) || Ib());
				}
				d._loadStarted_ ||
					(Q(2, 4, 0) || Hb(),
					Q(1, 16, !1) && R(b, m, "preload", "script"),
					(l = b.createElement("script")),
					(l.src = m),
					(l.async = !0),
					(b.head || b.body || b.documentElement).appendChild(l),
					Q(1, 17, !1) && vb() && R(b, Y + "//" + Z, "preconnect"),
					I(220, !0),
					(d._loadStarted_ = !0));
			}
		});
	})();
}.call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this));
