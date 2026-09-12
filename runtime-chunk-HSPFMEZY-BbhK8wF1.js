import { n as e, t } from "./dist-BacNt4J4.js";
import { r as n, t as r } from "./runtime-chunk-ML3Z74BL-DtYug6iz.js";
import { Et as i, G as a, H as o, N as s } from "./runtime-chunk-WKTS4T2Q-Btdnvt_i.js";
import { m as c } from "./runtime-chunk-HHRA6K3Y-BkevczXT.js";
import { a as l, i as u, o as d, t as f } from "./runtime-chunk-C6JZPJNZ-yPZlRW5T.js";
import { t as p } from "./runtime-chunk-NTUTXO7Q-AFTfmU66.js";
//#region node_modules/@splinetool/runtime/build/runtime-chunk-HSPFMEZY.js
t();
var m, h, g, _ = r((e, t) => {
	function n(e, t, r, i) {
		this.message = e, this.expected = t, this.found = r, this.location = i, this.name = "SyntaxError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, n);
	}
	(function(e, t) {
		function n() {
			this.constructor = e;
		}
		n.prototype = t.prototype, e.prototype = new n();
	})(n, Error), n.buildMessage = function(e, t) {
		var n, r = {
			literal: function(e) {
				return "\"" + a(e.text) + "\"";
			},
			class: function(e) {
				var t, n = "";
				for (t = 0; t < e.parts.length; t++) n += e.parts[t] instanceof Array ? o(e.parts[t][0]) + "-" + o(e.parts[t][1]) : o(e.parts[t]);
				return "[" + (e.inverted ? "^" : "") + n + "]";
			},
			any: function(e) {
				return "any character";
			},
			end: function(e) {
				return "end of input";
			},
			other: function(e) {
				return e.description;
			}
		};
		function i(e) {
			return e.charCodeAt(0).toString(16).toUpperCase();
		}
		function a(e) {
			return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
				return "\\x0" + i(e);
			}).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
				return "\\x" + i(e);
			});
		}
		function o(e) {
			return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e) {
				return "\\x0" + i(e);
			}).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e) {
				return "\\x" + i(e);
			});
		}
		function s(e) {
			return r[e.type](e);
		}
		return "Expected " + function(e) {
			var t, n, r = Array(e.length);
			for (t = 0; t < e.length; t++) r[t] = s(e[t]);
			if (r.sort(), r.length > 0) {
				for (t = 1, n = 1; t < r.length; t++) r[t - 1] !== r[t] && (r[n] = r[t], n++);
				r.length = n;
			}
			switch (r.length) {
				case 1: return r[0];
				case 2: return r[0] + " or " + r[1];
				default: return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
			}
		}(e) + " but " + ((n = t) ? "\"" + a(n) + "\"" : "end of input") + " found.";
	}, t.exports = {
		SyntaxError: n,
		parse: function(e, t) {
			t = t === void 0 ? {} : t;
			var r, i = {}, a = { svg_path: xe }, o = xe, s = function(e) {
				if (!e) return [];
				for (var t = [], n = 0; n < e.length; n++) t = t.concat.apply(t, e[n]);
				var r = t[0];
				return r && r.code == "m" && (delete r.relative, r.code = "M"), t;
			}, c = function(e, t) {
				return function(e, t) {
					if (!t) return [e];
					for (var n = [e], r = 0, i = t.length; r < i; r++) n[r + 1] = t[r][1];
					return n;
				}(e, t);
			}, l = /^[Mm]/, u = G(["M", "m"], !1, !1), d = function(e, t, n) {
				var r = $(e, [t]);
				return n && (r = r.concat($(e == "M" ? "L" : "l", n[1]))), r;
			}, f = /^[Zz]/, p = G(["Z", "z"], !1, !1), m = function() {
				return $("Z");
			}, h = /^[Ll]/, g = G(["L", "l"], !1, !1), _ = function(e, t) {
				return $(e, t);
			}, v = /^[Hh]/, y = G(["H", "h"], !1, !1), b = function(e, t) {
				return $(e, t.map(function(e) {
					return { x: e };
				}));
			}, x = /^[Vv]/, S = G(["V", "v"], !1, !1), C = function(e, t) {
				return $(e, t.map(function(e) {
					return { y: e };
				}));
			}, w = /^[Cc]/, ee = G(["C", "c"], !1, !1), T = function(e, t, n) {
				return {
					x1: e.x,
					y1: e.y,
					x2: t.x,
					y2: t.y,
					x: n.x,
					y: n.y
				};
			}, E = /^[Ss]/, D = G(["S", "s"], !1, !1), O = function(e, t) {
				return {
					x2: e.x,
					y2: e.y,
					x: t.x,
					y: t.y
				};
			}, k = /^[Qq]/, A = G(["Q", "q"], !1, !1), j = function(e, t) {
				return {
					x1: e.x,
					y1: e.y,
					x: t.x,
					y: t.y
				};
			}, M = /^[Tt]/, N = G(["T", "t"], !1, !1), te = /^[Aa]/, ne = G(["A", "a"], !1, !1), re = function(e, t, n, r, i, a) {
				return {
					rx: e,
					ry: t,
					xAxisRotation: n,
					largeArc: r,
					sweep: i,
					x: a.x,
					y: a.y
				};
			}, ie = function(e, t) {
				return {
					x: e,
					y: t
				};
			}, P = function(e) {
				return 1 * e;
			}, F = function(e) {
				return 1 * e.join("");
			}, I = /^[01]/, ae = G(["0", "1"], !1, !1), L = function(e) {
				return e == "1";
			}, R = function() {
				return "";
			}, oe = ",", se = ye(",", !1), ce = function(e) {
				return e.join("");
			}, z = ".", B = ye(".", !1), le = /^[eE]/, ue = G(["e", "E"], !1, !1), de = /^[+\-]/, fe = G(["+", "-"], !1, !1), pe = /^[0-9]/, me = G([["0", "9"]], !1, !1), he = function(e) {
				return e.join("");
			}, ge = /^[ \t\n\r]/, _e = G([
				" ",
				"	",
				"\n",
				"\r"
			], !1, !1), V = 0, H = [{
				line: 1,
				column: 1
			}], U = 0, ve = [], W = 0;
			if ("startRule" in t) {
				if (!(t.startRule in a)) throw Error("Can't start parsing from rule \"" + t.startRule + "\".");
				o = a[t.startRule];
			}
			function ye(e, t) {
				return {
					type: "literal",
					text: e,
					ignoreCase: t
				};
			}
			function G(e, t, n) {
				return {
					type: "class",
					parts: e,
					inverted: t,
					ignoreCase: n
				};
			}
			function be(t) {
				var n, r = H[t];
				if (r) return r;
				for (n = t - 1; !H[n];) n--;
				for (r = {
					line: (r = H[n]).line,
					column: r.column
				}; n < t;) e.charCodeAt(n) === 10 ? (r.line++, r.column = 1) : r.column++, n++;
				return H[t] = r, r;
			}
			function K(e, t) {
				var n = be(e), r = be(t);
				return {
					start: {
						offset: e,
						line: n.line,
						column: n.column
					},
					end: {
						offset: t,
						line: r.line,
						column: r.column
					}
				};
			}
			function q(e) {
				V < U || (V > U && (U = V, ve = []), ve.push(e));
			}
			function xe() {
				for (var e = V, t = [], n = Q(), r, a; n !== i;) t.push(n), n = Q();
				if (t !== i) {
					if (n = function() {
						var e = V, t, n, r, a, o;
						if ((t = J()) !== i) {
							for (n = [], r = V, a = [], o = Q(); o !== i;) a.push(o), o = Q();
							for (a !== i && (o = J()) !== i ? r = a = [a, o] : (V = r, r = i); r !== i;) {
								for (n.push(r), r = V, a = [], o = Q(); o !== i;) a.push(o), o = Q();
								a !== i && (o = J()) !== i ? r = a = [a, o] : (V = r, r = i);
							}
							n === i ? (V = e, e = i) : e = t = c(t, n);
						} else V = e, e = i;
						return e;
					}(), n === i && (n = null), n !== i) {
						for (r = [], a = Q(); a !== i;) r.push(a), a = Q();
						r === i ? (V = e, e = i) : e = t = s(n);
					} else V = e, e = i;
				} else V = e, e = i;
				return e;
			}
			function J() {
				var t = V, n = function() {
					var t = V, n, r, a, o, s, c;
					if (l.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, W === 0 && q(u)), n !== i) {
						for (r = [], a = Q(); a !== i;) r.push(a), a = Q();
						r !== i && (a = Y()) !== i ? (o = V, (s = X()) === i && (s = null), s !== i && (c = Ce()) !== i ? o = s = [s, c] : (V = o, o = i), o === i && (o = null), o === i ? (V = t, t = i) : t = n = d(n, a, o)) : (V = t, t = i);
					} else V = t, t = i;
					return t;
				}(), r, a, o, s;
				if (n !== i) {
					for (r = [], a = V, o = [], s = Q(); s !== i;) o.push(s), s = Q();
					for (o !== i && (s = Se()) !== i ? a = o = [o, s] : (V = a, a = i); a !== i;) {
						for (r.push(a), a = V, o = [], s = Q(); s !== i;) o.push(s), s = Q();
						o !== i && (s = Se()) !== i ? a = o = [o, s] : (V = a, a = i);
					}
					r === i ? (V = t, t = i) : t = n = c(n, r);
				} else V = t, t = i;
				return t;
			}
			function Se() {
				var t, n;
				return f.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, W === 0 && q(p)), n !== i && (n = m()), (t = n) === i && (t = function() {
					var t = V, n, r, a;
					if (h.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, W === 0 && q(g)), n !== i) {
						for (r = [], a = Q(); a !== i;) r.push(a), a = Q();
						r !== i && (a = Ce()) !== i ? t = n = _(n, a) : (V = t, t = i);
					} else V = t, t = i;
					return t;
				}()) === i && (t = function() {
					var t = V, n, r, a;
					if (v.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, W === 0 && q(y)), n !== i) {
						for (r = [], a = Q(); a !== i;) r.push(a), a = Q();
						r !== i && (a = we()) !== i ? t = n = b(n, a) : (V = t, t = i);
					} else V = t, t = i;
					return t;
				}()) === i && (t = function() {
					var t = V, n, r, a;
					if (x.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, W === 0 && q(S)), n !== i) {
						for (r = [], a = Q(); a !== i;) r.push(a), a = Q();
						r !== i && (a = we()) !== i ? t = n = C(n, a) : (V = t, t = i);
					} else V = t, t = i;
					return t;
				}()) === i && (t = function() {
					var t = V, n, r, a;
					if (w.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, W === 0 && q(ee)), n !== i) {
						for (r = [], a = Q(); a !== i;) r.push(a), a = Q();
						r === i ? (V = t, t = i) : (a = function() {
							var e = V, t, n, r, a, o;
							if ((t = Te()) !== i) {
								for (n = [], r = V, (a = X()) === i && (a = null), a !== i && (o = Te()) !== i ? r = a = [a, o] : (V = r, r = i); r !== i;) n.push(r), r = V, (a = X()) === i && (a = null), a !== i && (o = Te()) !== i ? r = a = [a, o] : (V = r, r = i);
								n === i ? (V = e, e = i) : e = t = c(t, n);
							} else V = e, e = i;
							return e;
						}(), a === i ? (V = t, t = i) : t = n = _(n, a));
					} else V = t, t = i;
					return t;
				}()) === i && (t = function() {
					var t = V, n, r, a;
					if (E.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, W === 0 && q(D)), n !== i) {
						for (r = [], a = Q(); a !== i;) r.push(a), a = Q();
						r === i ? (V = t, t = i) : (a = function() {
							var e = V, t, n, r, a, o;
							if ((t = Ee()) !== i) {
								for (n = [], r = V, (a = X()) === i && (a = null), a !== i && (o = Ee()) !== i ? r = a = [a, o] : (V = r, r = i); r !== i;) n.push(r), r = V, (a = X()) === i && (a = null), a !== i && (o = Ee()) !== i ? r = a = [a, o] : (V = r, r = i);
								n === i ? (V = e, e = i) : e = t = c(t, n);
							} else V = e, e = i;
							return e;
						}(), a === i ? (V = t, t = i) : t = n = _(n, a));
					} else V = t, t = i;
					return t;
				}()) === i && (t = function() {
					var t = V, n, r, a;
					if (k.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, W === 0 && q(A)), n !== i) {
						for (r = [], a = Q(); a !== i;) r.push(a), a = Q();
						r === i ? (V = t, t = i) : (a = function() {
							var e = V, t, n, r, a, o;
							if ((t = De()) !== i) {
								for (n = [], r = V, (a = X()) === i && (a = null), a !== i && (o = De()) !== i ? r = a = [a, o] : (V = r, r = i); r !== i;) n.push(r), r = V, (a = X()) === i && (a = null), a !== i && (o = De()) !== i ? r = a = [a, o] : (V = r, r = i);
								n === i ? (V = e, e = i) : e = t = c(t, n);
							} else V = e, e = i;
							return e;
						}(), a === i ? (V = t, t = i) : t = n = _(n, a));
					} else V = t, t = i;
					return t;
				}()) === i && (t = function() {
					var t = V, n, r, a;
					if (M.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, W === 0 && q(N)), n !== i) {
						for (r = [], a = Q(); a !== i;) r.push(a), a = Q();
						r === i ? (V = t, t = i) : (a = function() {
							var e = V, t, n, r, a, o;
							if ((t = Y()) !== i) {
								for (n = [], r = V, (a = X()) === i && (a = null), a !== i && (o = Y()) !== i ? r = a = [a, o] : (V = r, r = i); r !== i;) n.push(r), r = V, (a = X()) === i && (a = null), a !== i && (o = Y()) !== i ? r = a = [a, o] : (V = r, r = i);
								n === i ? (V = e, e = i) : e = t = c(t, n);
							} else V = e, e = i;
							return e;
						}(), a === i ? (V = t, t = i) : t = n = _(n, a));
					} else V = t, t = i;
					return t;
				}()) === i && (t = function() {
					var t = V, n, r, a;
					if (te.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, W === 0 && q(ne)), n !== i) {
						for (r = [], a = Q(); a !== i;) r.push(a), a = Q();
						r === i ? (V = t, t = i) : (a = function() {
							var e = V, t, n, r, a, o;
							if ((t = Oe()) !== i) {
								for (n = [], r = V, (a = X()) === i && (a = null), a !== i && (o = Oe()) !== i ? r = a = [a, o] : (V = r, r = i); r !== i;) n.push(r), r = V, (a = X()) === i && (a = null), a !== i && (o = Oe()) !== i ? r = a = [a, o] : (V = r, r = i);
								n === i ? (V = e, e = i) : e = t = c(t, n);
							} else V = e, e = i;
							return e;
						}(), a === i ? (V = t, t = i) : t = n = _(n, a));
					} else V = t, t = i;
					return t;
				}()), t;
			}
			function Ce() {
				var e = V, t, n, r, a, o;
				if ((t = Y()) !== i) {
					for (n = [], r = V, (a = X()) === i && (a = null), a !== i && (o = Y()) !== i ? r = a = [a, o] : (V = r, r = i); r !== i;) n.push(r), r = V, (a = X()) === i && (a = null), a !== i && (o = Y()) !== i ? r = a = [a, o] : (V = r, r = i);
					n === i ? (V = e, e = i) : e = t = c(t, n);
				} else V = e, e = i;
				return e;
			}
			function we() {
				var e = V, t, n, r, a, o;
				if ((t = Ae()) !== i) {
					for (n = [], r = V, (a = X()) === i && (a = null), a !== i && (o = Ae()) !== i ? r = a = [a, o] : (V = r, r = i); r !== i;) n.push(r), r = V, (a = X()) === i && (a = null), a !== i && (o = Ae()) !== i ? r = a = [a, o] : (V = r, r = i);
					n === i ? (V = e, e = i) : e = t = c(t, n);
				} else V = e, e = i;
				return e;
			}
			function Te() {
				var e = V, t, n, r, a, o;
				return (t = Y()) === i ? (V = e, e = i) : ((n = X()) === i && (n = null), n !== i && (r = Y()) !== i ? ((a = X()) === i && (a = null), a !== i && (o = Y()) !== i ? e = t = T(t, r, o) : (V = e, e = i)) : (V = e, e = i)), e;
			}
			function Ee() {
				var e = V, t, n, r;
				return (t = Y()) === i ? (V = e, e = i) : ((n = X()) === i && (n = null), n !== i && (r = Y()) !== i ? e = t = O(t, r) : (V = e, e = i)), e;
			}
			function De() {
				var e = V, t, n, r;
				return (t = Y()) === i ? (V = e, e = i) : ((n = X()) === i && (n = null), n !== i && (r = Y()) !== i ? e = t = j(t, r) : (V = e, e = i)), e;
			}
			function Oe() {
				var e = V, t, n, r, a, o, s, c, l, u, d;
				return (t = ke()) === i ? (V = e, e = i) : ((n = X()) === i && (n = null), n !== i && (r = ke()) !== i ? ((a = X()) === i && (a = null), a !== i && (o = Ae()) !== i && X() !== i && (s = je()) !== i ? ((c = X()) === i && (c = null), c !== i && (l = je()) !== i ? ((u = X()) === i && (u = null), u !== i && (d = Y()) !== i ? e = t = re(t, r, o, s, l, d) : (V = e, e = i)) : (V = e, e = i)) : (V = e, e = i)) : (V = e, e = i)), e;
			}
			function Y() {
				var e = V, t, n, r;
				return (t = Ae()) === i ? (V = e, e = i) : ((n = X()) === i && (n = null), n !== i && (r = Ae()) !== i ? e = t = ie(t, r) : (V = e, e = i)), e;
			}
			function ke() {
				var e;
				return (e = Ne()) === i && (e = Z()), e !== i && (e = P(e)), e;
			}
			function Ae() {
				var e = V, t, n;
				return (t = Fe()) === i && (t = null), t !== i && (n = Ne()) !== i ? e = t = [t, n] : (V = e, e = i), e === i && (e = V, (t = Fe()) === i && (t = null), t !== i && (n = Z()) !== i ? e = t = [t, n] : (V = e, e = i)), e !== i && (e = F(e)), e;
			}
			function je() {
				var t;
				return I.test(e.charAt(V)) ? (t = e.charAt(V), V++) : (t = i, W === 0 && q(ae)), t !== i && (t = L(t)), t;
			}
			function X() {
				var e = V, t = [], n, r, a;
				if ((n = Q()) !== i) for (; n !== i;) t.push(n), n = Q();
				else t = i;
				if (t !== i) {
					if ((n = Me()) === i && (n = null), n !== i) {
						for (r = [], a = Q(); a !== i;) r.push(a), a = Q();
						r === i ? (V = e, e = i) : e = t = [
							t,
							n,
							r
						];
					} else V = e, e = i;
				} else V = e, e = i;
				if (e === i) {
					if (e = V, t = V, (n = Me()) !== i) {
						for (r = [], a = Q(); a !== i;) r.push(a), a = Q();
						r === i ? (V = t, t = i) : t = n = [n, r];
					} else V = t, t = i;
					t !== i && (t = R()), e = t;
				}
				return e;
			}
			function Me() {
				var t;
				return e.charCodeAt(V) === 44 ? (t = oe, V++) : (t = i, W === 0 && q(se)), t;
			}
			function Ne() {
				var t = V, n = function() {
					var t = V, n, r, a;
					return (n = Z()) === i && (n = null), n === i ? (V = t, t = i) : (e.charCodeAt(V) === 46 ? (r = z, V++) : (r = i, W === 0 && q(B)), r !== i && (a = Z()) !== i ? t = n = [
						n,
						r,
						a
					] : (V = t, t = i)), t === i && (t = V, (n = Z()) === i ? (V = t, t = i) : (e.charCodeAt(V) === 46 ? (r = z, V++) : (r = i, W === 0 && q(B)), r === i ? (V = t, t = i) : t = n = [n, r])), t !== i && (t = ce(t)), t;
				}(), r;
				return n === i ? (V = t, t = i) : ((r = Pe()) === i && (r = null), r === i ? (V = t, t = i) : t = n = [n, r]), t === i && (t = V, (n = Z()) !== i && (r = Pe()) !== i ? t = n = [n, r] : (V = t, t = i)), t !== i && (t = ce(t)), t;
			}
			function Pe() {
				var t = V, n, r, a;
				return le.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, W === 0 && q(ue)), n === i ? (V = t, t = i) : ((r = Fe()) === i && (r = null), r !== i && (a = Z()) !== i ? t = n = [
					n,
					r,
					a
				] : (V = t, t = i)), t !== i && (t = ce(t)), t;
			}
			function Fe() {
				var t;
				return de.test(e.charAt(V)) ? (t = e.charAt(V), V++) : (t = i, W === 0 && q(fe)), t;
			}
			function Z() {
				var t = [], n;
				if (pe.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, W === 0 && q(me)), n !== i) for (; n !== i;) t.push(n), pe.test(e.charAt(V)) ? (n = e.charAt(V), V++) : (n = i, W === 0 && q(me));
				else t = i;
				return t !== i && (t = he(t)), t;
			}
			function Q() {
				var t;
				return ge.test(e.charAt(V)) ? (t = e.charAt(V), V++) : (t = i, W === 0 && q(_e)), t !== i && (t = R()), t;
			}
			var Ie, Le, Re, ze = {
				m: "moveto",
				l: "lineto",
				h: "horizontal lineto",
				v: "vertical lineto",
				c: "curveto",
				s: "smooth curveto",
				q: "quadratic curveto",
				t: "smooth quadratic curveto",
				a: "elliptical arc",
				z: "closepath"
			};
			for (var Be in ze) ze[Be.toUpperCase()] = ze[Be];
			function $(e, t) {
				t ||= [{}];
				for (var n = t.length; n--;) {
					var r = {
						code: e,
						command: ze[e]
					};
					for (var i in e == e.toLowerCase() && (r.relative = !0), t[n]) r[i] = t[n][i];
					t[n] = r;
				}
				return t;
			}
			if ((r = o()) !== i && V === e.length) return r;
			throw r !== i && V < e.length && q({ type: "end" }), Ie = ve, Le = U < e.length ? e.charAt(U) : null, Re = U < e.length ? K(U, U + 1) : K(U, U), new n(n.buildMessage(Ie, Le), Ie, Le, Re);
		}
	};
}), v = r((e, t) => {
	var n = _().parse;
	n.parseSVG = n, n.makeAbsolute = function(e) {
		var t, n = {
			x: 0,
			y: 0
		}, r = {
			x: "x0",
			y: "y0",
			x1: "x0",
			y1: "y0",
			x2: "x0",
			y2: "y0"
		};
		return e.forEach(function(e) {
			for (var i in e.command === "moveto" && (t = e), e.x0 = n.x, e.y0 = n.y, r) i in e && (e[i] += e.relative ? e[r[i]] : 0);
			"x" in e || (e.x = n.x), "y" in e || (e.y = n.y), e.relative = !1, e.code = e.code.toUpperCase(), e.command == "closepath" && (e.x = t.x, e.y = t.y), n = e;
		}), e;
	}, t.exports = n;
});
function y() {
	if (!h) {
		if (!m) return Promise.reject(/* @__PURE__ */ Error("HanaRenderer: no Hana UI loader registered. Call setHanaUILoader() from the host app before initializing a HanaRenderer."));
		(h = m()).catch(() => {
			h = void 0;
		});
	}
	return h;
}
function b(e) {
	g = e;
}
function x() {
	return m ||= async () => async function(e, t) {
		return await e.default(t ? { module_or_path: t } : void 0), Object.getOwnPropertyDescriptor(e.Engine.prototype, "scene") || Object.defineProperty(e.Engine.prototype, "scene", { get: function() {
			let t = Object.create(e.SceneController.prototype);
			return t.__wbg_ptr = this.__wbg_ptr, t;
		} }), { createEngine: (t) => e.Engine.create(t, JSON.parse("{\"schema\":13,\"scenes\":[{\"fi\":0,\"id\":\"32603ebf4-bd9a-54ba-c1e9-6645c3ee7a53\",\"data\":{\"name\":\"Page\",\"backgroundColor\":[0,0,0,0],\"objects\":[]}}],\"assets\":{\"images\":{},\"videos\":{},\"colors\":{},\"audios\":{},\"numbers\":{},\"booleans\":{},\"strings\":{},\"dynamicVariables\":{\"counters\":{},\"randoms\":{},\"timers\":{},\"times\":{}},\"fonts\":{},\"animations\":{},\"geometries\":{},\"emojiArt\":{}},\"publish\":{\"logo\":true,\"presentationSizing\":\"Contain\",\"allowPageScroll\":true,\"showBackground\":true},\"framePublish\":{},\"components\":{}}"), !0) };
	}(await import("./hana-ui-DRmsB-s2.js"), g ?? function() {
		let t = typeof e < "u" ? "2.0.46" : void 0;
		return `https://cdn.spline.design/@splinetool/runtime${t ? `@${t}` : ""}/build/hana-ui.wasm`;
	}()), y().then(() => {});
}
var S = Math.PI / 180, C, w = 1e-10;
function ee(e, t) {
	let [[n, r], [i, a]] = e, [[o, s], [c, l]] = t, u = (n - i) * (s - l) - (r - a) * (o - c);
	if (u === 0) return !1;
	let d = ((n - o) * (s - l) - (r - s) * (o - c)) / u, f = -((n - i) * (r - s) - (r - a) * (n - o)) / u;
	return d >= 0 && d <= 1 && f >= 0 && f <= 1;
}
((e) => {
	function t(e) {
		return [
			e[0],
			e[3],
			e[1],
			e[4],
			e[2],
			e[5]
		];
	}
	e.identity = function() {
		return [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		];
	}, e.copy = function(t, n = e.identity()) {
		for (let e = 0, r = t.length; e < r; e++) n[e] = t[e];
		return n;
	}, e.create = function(t, n, r, i, a, o) {
		return e.setAbcdef(e.identity(), t, n, r, i, a, o);
	}, e.setAbcdef = function(e, t, n, r, i, a, o) {
		return e[0] = t, e[1] = r, e[2] = a, e[3] = n, e[4] = i, e[5] = o, e;
	}, e.append = function(n, r) {
		let [i, a, o, s, c, l] = t(n), [u, d, f, p, m, h] = t(r), g = u * i + d * o, _ = u * a + d * s, v = f * i + p * o, y = f * a + p * s, b = m * i + h * o + c, x = m * a + h * s + l;
		return e.create(g, _, v, y, b, x);
	}, e.prepend = function(n, r) {
		let [i, a, o, s, c, l] = t(n), [u, d, f, p, m, h] = t(r), g = i, _ = a, v = o, y = s;
		(u !== 1 || d !== 0 || f !== 0 || p !== 1) && (g = i * u + a * f, _ = i * d + a * p, v = o * u + s * f, y = o * d + s * p);
		let b = c * u + l * f + m, x = c * d + l * p + h;
		return e.create(g, _, v, y, b, x);
	}, e.getAbcdef = t, e.invert = function(t) {
		let [n, r, i, a, o, s] = e.getAbcdef(t), c = n * a - r * i, l = a / c, u = -r / c, d = -i / c, f = n / c, p = (i * s - a * o) / c, m = -(n * s - r * o) / c;
		return e.create(l, u, d, f, p, m);
	}, e.apply = function([t, n], r) {
		let [i, a, o, s, c, l] = e.getAbcdef(r);
		return [i * t + o * n + c, a * t + s * n + l];
	}, e.applyInverse = function(t, n) {
		let [r, i, a, o, s, c] = e.getAbcdef(n), l = 1 / (r * o + a * -i), [u, d] = t;
		return [o * l * u + -a * l * d + (c * a - s * o) * l, r * l * d + -i * l * u + (-c * r + s * i) * l];
	}, e.scale = function(t, n, r = n) {
		let [i, a, o, s, c, l] = e.getAbcdef(t);
		return e.setAbcdef(t, i * n, a * r, o * n, s * r, c * n, l * r), t;
	}, e.rotate = function(t, n) {
		let r = Math.cos(n), i = Math.sin(n), [a, o, s, c, l, u] = e.getAbcdef(t);
		return e.setAbcdef(t, a * r - o * i, a * i + o * r, s * r - c * i, s * i + c * r, l * r - u * i, l * i + u * r), t;
	}, e.rotateAround = function(t, n, r) {
		let [i, a] = r, o = e.translate(t, -i, -a);
		return o = e.rotate(o, n), o = e.translate(o, i, a), o;
	}, e.translate = function(t, n, r) {
		let [i, a, o, s, c, l] = e.getAbcdef(t);
		return e.setAbcdef(t, i, a, o, s, c + n, l + r), t;
	}, e.setTranslate = function(t, n, r) {
		let [i, a, o, s] = e.getAbcdef(t);
		return e.setAbcdef(t, i, a, o, s, n, r), t;
	}, e.setPosition = function(t, n, r) {
		let [i, a, o, s] = e.getAbcdef(t);
		return e.setAbcdef(t, i, a, o, s, n, r), t;
	}, e.getScale = function(t) {
		let [n, r, i, a] = e.getAbcdef(t);
		return [Math.sqrt(n * n + r * r), Math.sqrt(i * i + a * a)];
	}, e.getPosition = function(t) {
		let [, , , , n, r] = e.getAbcdef(t);
		return [n, r];
	}, e.getRotation = function(t, n) {
		return e.decompose(t, n).rotation;
	}, e.decompose = function(t, n) {
		let [r, i, a, o, s, c] = e.getAbcdef(t), { rotation: l, scale: u, shear: d } = function(e) {
			let t = e[0][0], n = e[1][0], r = e[0][1], i = e[1][1], a = Math.sqrt(t * t + n * n), o = a > w ? t / a : 1, s = a > w ? n / a : 0, c = o * t + s * n, l = o * i - s * r, u = o * r + s * i;
			return {
				rotation: Math.atan2(s, o),
				scale: [c, l],
				shear: [Math.abs(l) > w ? u / l : 0, 0]
			};
		}([[r, a], [i, o]]);
		return {
			position: [s + (n[0] * r + n[1] * a) - n[0], c + (n[0] * i + n[1] * o) - n[1]],
			scale: u,
			rotation: l,
			shear: d,
			pivot: n
		};
	}, e.compose = function(t, n, r, i, a = [0, 0]) {
		let [o, s] = t, [c, l] = i, [u, d, f, p] = function({ rotation: e, scale: t, shear: n }) {
			let r = Math.cos(e), i = Math.sin(e), a = n[0] * t[1], o = n[1] * t[0];
			return [
				r * t[0] - i * o,
				i * t[0] + r * o,
				r * a - i * t[1],
				i * a + r * t[1]
			];
		}({
			rotation: r,
			scale: n,
			shear: a
		}), m = o - (c * u + l * f) + c, h = s - (c * d + l * p) + l;
		return e.create(u, d, f, p, m, h);
	};
})(C ||= {});
var T, E, D, O, k, A = [
	[-1, 1],
	[-1, -1],
	[1, -1],
	[1, 1]
], j = (e, t, n) => {
	let r = e.getCenter(), i = e.getHalfSize(), a = C.append(t, e.worldMatrix);
	i[0] === 0 && i[1] === 0 ? n.push(C.apply(r, a)) : A.forEach((e) => {
		let t = [e[0] * i[0] + r[0], e[1] * i[1] + r[1]];
		n.push(C.apply(t, a));
	});
}, M = class {
	constructor() {
		this.matrix = C.identity(), this.min = [1 / 0, 1 / 0], this.max = [-1 / 0, -1 / 0], this.vertices = [], this.edges = [];
	}
	setFromObjectSize(e, t = !1) {
		e.updateWorldMatrix(), this.makeEmpty(), C.copy(e.worldMatrix, this.matrix);
		let n = C.invert(e.worldMatrix);
		this.expandByObjectSize(e, n, t);
	}
	expandByObjectSize(e, t, n = !1) {
		let r = [], i = !0 === e.isBaseGroup ? e : void 0;
		!0 === n && i !== void 0 ? i.traverse((e) => {
			e.visible && j(e, t, r);
		}) : j(e, t, r), this.setFromPoints(r);
	}
	setFromSize(e, t, n) {
		this.makeEmpty(), C.copy(n, this.matrix), this.expandBySize(e, t, n);
	}
	expandBySize(e, t, n) {
		[
			C.apply([0, 0], n),
			C.apply([0, t], n),
			C.apply([e, t], n),
			C.apply([e, 0], n)
		].forEach((e) => this.expandByPoint(e));
	}
	getCenter() {
		let [e, t] = this.min, [n, r] = this.getHalfSize();
		return C.apply([e + n, t + r], this.matrix);
	}
	getSize() {
		return [this.max[0] - this.min[0], this.max[1] - this.min[1]];
	}
	getHalfSize() {
		return [.5 * (this.max[0] - this.min[0]), .5 * (this.max[1] - this.min[1])];
	}
	makeEmpty() {
		this.min = [1 / 0, 1 / 0], this.max = [-1 / 0, -1 / 0];
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t of e) this.expandByPoint(t);
	}
	expandByPoint(e) {
		this.min = [Math.min(this.min[0], e[0]), Math.min(this.min[1], e[1])], this.max = [Math.max(this.max[0], e[0]), Math.max(this.max[1], e[1])];
	}
	computeVertices() {
		let [e, t] = this.getHalfSize(), n = this.getCenter(), [r, i, a, o] = C.getAbcdef(this.matrix), s = C.create(r, i, a, o, n[0], n[1]);
		this.vertices = A.map(([n, r]) => C.apply([n * e, r * t], s));
	}
	computeEdges() {
		this.edges = [];
		for (let e = 0, t = this.vertices.length; e < t; ++e) this.edges.push([this.vertices[e], this.vertices[(e + 1) % t]]);
	}
	project(e, t) {
		let n = this.matrix;
		return t && (n = C.append(t.worldMatrix, n)), C.applyInverse(e, n);
	}
	intersects(e, t, n) {
		return this.intersectsInLocalSpace(...this.project([e, t], n));
	}
	intersectsInLocalSpace(e, t) {
		let { min: n, max: r } = this;
		return e >= n[0] && e <= r[0] && t >= n[1] && t <= r[1];
	}
	containsPoint(e) {
		let [t, n] = e, [r, i] = this.min, [a, o] = this.max;
		return t >= r && t <= a && n >= i && n <= o;
	}
	intersectsBBox2D(e) {
		for (let t = 0, n = this.edges.length; t < n; t++) {
			let n = this.edges[t];
			for (let t = 0, r = e.edges.length; t < r; t++) if (ee(n, e.edges[t])) return !0;
		}
		for (let t = 0, n = e.vertices.length; t < n; t++) {
			let n = e.vertices[t];
			if (this.containsPoint(n)) return !0;
		}
		return !1;
	}
	ensureMinMax() {
		let e = this.min, t = this.max;
		this.min = [Math.min(e[0], t[0]), Math.min(e[1], t[1])], this.max = [Math.max(e[0], t[0]), Math.max(e[1], t[1])];
	}
	copy(e) {
		this.min = [...e.min], this.max = [...e.max], C.copy(e.matrix, this.matrix), this.computeVertices(), this.computeEdges();
	}
	clone() {
		let e = new M();
		return e.copy(this), e;
	}
}, N = class {
	constructor(e, t, n) {
		this.uuid = e, this.data = t, this.isObject2D = !0, this.localMatrix = C.identity(), this.worldMatrix = C.identity(), this.ignoreCameraZoom = !1, this.visible = !0, this._singleBBox = new M(), this._recursiveBBox = new M(), this.singleBBoxNeedsUpdate = !0, this.recursiveBBoxNeedsUpdate = !0, this.stateSelection = null, this.prevState = null, this.currentState = null, this.reversibleToState = null, this.currentTransitionEvent = null, this.previousAction = null, this.name = "", this.position = [0, 0], this.scale = [1, 1], this.rotation = 0, this.shear = [0, 0], this.emitter = p(), this.dpr = n.dpr ?? 1, this.dataPatched = t;
	}
	project(e, t) {
		let n = this.worldMatrix;
		return t && (n = C.append(t.worldMatrix, n)), C.applyInverse(e, n);
	}
	intersects(e, t, n, r = !1) {
		return this.visible && !this.data.raycastLock && this.intersectsInLocalSpace(...this.project([e, t], n), r);
	}
	intersectsInLocalSpace(e, t, n = !1) {
		let { min: r, max: i } = n ? this.recursiveBBox : this.singleBBox;
		return e >= r[0] && e <= i[0] && t >= r[1] && t <= i[1];
	}
	applyTransforms(e) {
		e.setTransform(this.worldMatrix, this.ignoreCameraZoom);
	}
	get singleBBox() {
		return this.singleBBoxNeedsUpdate && (this.singleBBoxNeedsUpdate = !1, this._singleBBox.setFromObjectSize(this, !1), this._singleBBox.computeVertices(), this._singleBBox.computeEdges()), this._singleBBox;
	}
	get recursiveBBox() {
		return this.recursiveBBoxNeedsUpdate && (this.recursiveBBoxNeedsUpdate = !1, this._recursiveBBox.setFromObjectSize(this, !0), this._recursiveBBox.computeVertices(), this._recursiveBBox.computeEdges()), this._recursiveBBox;
	}
	updateLocalMatrix() {
		this.localMatrix = C.compose(this.position, this.scale, this.rotation * S, f.getPivot(this.dataPatched), this.shear);
	}
	updateWorldMatrix(e, t, n) {
		let r = this.parent;
		t && r != null && r.updateWorldMatrix(e, !0, !1), e && this.updateLocalMatrix(), this.worldMatrix = this.parent ? C.append(this.parent.worldMatrix, this.localMatrix) : C.copy(this.localMatrix), this.singleBBoxNeedsUpdate = !0, this.recursiveBBoxNeedsUpdate = !0;
	}
	get pivot() {
		return f.getPivot(this.data);
	}
	getCenter() {
		return [0, 0];
	}
	getHalfSize() {
		return [0, 0];
	}
	get id() {
		return this.uuid;
	}
	resetBBoxNeedsUpdateSelf() {
		this.singleBBoxNeedsUpdate = !0, this.recursiveBBoxNeedsUpdate = !0;
	}
	resetBBoxNeedsUpdate() {
		this.resetBBoxNeedsUpdateSelf(), this.traverseAncestors((e) => {
			e.resetBBoxNeedsUpdateSelf();
		});
	}
	updateTransformState(e) {
		let t = !1;
		e.position !== void 0 && (t = !0, this.position = e.position), e.rotation !== void 0 && (t = !0, this.rotation = e.rotation), e.scale !== void 0 && (t = !0, this.scale = e.scale), e.shear !== void 0 && (t = !0, this.shear = e.shear), t && (this.updateWorldMatrix(!0, !1, !0), this.resetBBoxNeedsUpdate());
	}
	updateByOp(e, t, n) {
		e.type === 0 && e.props.visible !== void 0 && (this.visible = e.props.visible), this.data = t, this.data = t;
		let r = e, i = c(e.path, ["states", "*"]);
		if (i !== null) {
			if (e.type === 0) {
				let [t] = i;
				if (this?.stateSelection === t) {
					let t = { ...e.props };
					if (delete t.name, Object.values(e.props).some((e) => e === void 0)) {
						let n = this.data;
						if (n !== void 0) {
							let r = o.zoom(n, e.path.slice(2));
							if (r) for (let n in e.props) e.props[n] === void 0 && n in r && (t[n] = r[n]);
						}
					}
					r = {
						...e,
						props: t,
						path: e.path.slice(2)
					};
				}
			}
		} else if (e.type === 0) {
			let t = this.stateSelection ? this.data.states.data(this.stateSelection) : void 0;
			if (t !== void 0) {
				if (e.props.name !== void 0 && t.name) {
					let { name: e, ...n } = t;
					t = n;
				}
				let n = o.removeOverridden(e.path, e.props, t);
				r = {
					...e,
					props: n
				};
			}
		}
		this.updateByPatchedOpBase(r, l.patch(this.data, this.stateSelection ? this.data.states.data(this.stateSelection) : void 0), n);
	}
	changeSelectedState(e, t, n = !1) {
		if (this.data.states.length !== 0 || n) {
			for (let e of this.data.states) l.toOps(this.data, e.data).forEach((e) => {
				let n = s.replaceProps(e, this.data);
				this.dataPatched = this.data, this.updateByPatchedOp(n, this.data, t);
			});
			if (e !== null) {
				let n = this.data.states.data(e);
				n && (this.dataPatched = l.patch(this.data, n), l.toOps(this.data, n).forEach((e) => {
					this.updateByPatchedOp(e, this.dataPatched, t);
				}));
			}
			n && this.updateTransformState(this.dataPatched), this.stateSelection = e;
		}
	}
	updateState(e, t) {
		e.name !== void 0 && (this.name = e.name), e.visible !== void 0 && (this.visible = e.visible), this.updateTransformState(e);
	}
	updateByPatchedOpBase(e, t, n) {
		this.dataPatched = t, this.updateByPatchedOp(e, t, n);
	}
	updateByPatchedOp(e, t, n) {
		e.path.length === 0 && e.type === 0 && this.updateState(e.props, n), this.requestRender();
	}
	traverseFrameAncestors(e) {
		this.traverseAncestors((t) => {
			t.data.type === "frame2d" && e(t);
		});
	}
	traverseAncestors(e) {
		let t = this.parent;
		for (; t;) e(t), t = t.parent;
	}
	requestRender() {
		this.traverseFrameAncestors((e) => {
			e.requestRender();
		});
	}
	clone(e) {
		let t = new N(this.uuid, this.data, e);
		return t.parent = void 0, t;
	}
	addEventListener(e, t) {
		this.emitter.on(e, t);
	}
	removeEventListener(e, t) {
		this.emitter.off(e, t);
	}
	dispatchEvent(e) {
		this.emitter.emit(e.type, {
			...e,
			target: e.target ?? this
		});
	}
	traverseSortNextHelper() {
		let e = this.parent;
		if (e) {
			let t = e.children;
			if (t) {
				let n = t.indexOf(this) + 1;
				return t[n] ? t[n] : e.traverseSortNextHelper();
			}
		}
	}
	sortNext() {
		let e = this.children;
		return e && e.length > 0 && e[0] ? e[0] : this.traverseSortNextHelper();
	}
	isDescendantOf(e) {
		e instanceof N && (e = e.uuid);
		let t = this;
		for (; t.parent;) {
			if (t.parent.uuid === e) return !0;
			t = t.parent;
		}
		return !1;
	}
}, te = class {
	constructor(e, t, n) {
		this.uuid = e, this.data = t, this.enabled = !1, this.color = i.transparent, this.blurRadius = 0, this.offset = [0, 0], this.spread = 0, this.update(t);
	}
	update(e) {
		e.color !== void 0 && (this.color = e.color), e.enabled !== void 0 && (this.enabled = e.enabled), e.blurRadius !== void 0 && (this.blurRadius = e.blurRadius), e.offset !== void 0 && (this.offset = e.offset), e.spread !== void 0 && (this.spread = e.spread);
	}
}, ne = class {
	constructor(e, t, n) {
		this.uuid = e, this.data = t, this.enabled = !1, this.radius = 0, this.update(t);
	}
	update(e) {
		e.enabled !== void 0 && (this.enabled = e.enabled), e.radius !== void 0 && (this.radius = e.radius);
	}
}, re = class {
	constructor(e, t, n) {
		this.uuid = e, this.data = t, this.enabled = !1, this.color = i.transparent, this.update(t);
	}
	update(e) {
		e.enabled !== void 0 && (this.enabled = e.enabled), e.color !== void 0 && (this.color = e.color);
	}
}, ie = class {
	constructor(e, t, n) {
		this.uuid = e, this.data = t, this.enabled = !1, this.color = i.transparent, this.thickness = 0, this.mode = "inside", this.update(t);
	}
	update(e) {
		e.enabled !== void 0 && (this.enabled = e.enabled), e.color !== void 0 && (this.color = e.color), e.thickness !== void 0 && (this.thickness = e.thickness), e.mode !== void 0 && (this.mode = e.mode);
	}
}, P = class extends N {
	constructor(e, t, n) {
		super(e, t, n), this.uuid = e, this.data = t, this.autoClose = !0, this.fill = new re(e + "-fill", t.fill, n), this.stroke = new ie(e + "-stroke", t.stroke, n), this.dropShadow = new te(e + "-dropShadow", t.dropShadow, n), this.innerShadow = new te(e + "-innerShadow", t.innerShadow, n), this.backgroundBlur = new ne(e + "-backgroundBlur", t.backgroundBlur, n), this.layerBlur = new ne(e + "-layerBlur", t.layerBlur, n);
	}
	applyFillStroke(e) {
		e.fillColor = this.fill.enabled ? this.fill.color : i.transparent, e.strokeColor = this.stroke.enabled && this.stroke.thickness > 0 ? this.stroke.color : i.transparent, e.strokeMode = this.stroke.mode, e.lineWidth = this.stroke.thickness;
	}
	applyFilters(e) {
		e.layerBlur = this.layerBlur.enabled ? 5 * this.layerBlur.radius : 0, e.backgroundBlur = this.backgroundBlur.enabled ? 5 * this.backgroundBlur.radius : 0, this.dropShadow.enabled ? (e.dropShadowBlur = 5 * this.dropShadow.blurRadius, e.dropShadowColor = this.dropShadow.color, e.dropShadowOffsetX = this.dropShadow.offset[0], e.dropShadowOffsetY = this.dropShadow.offset[1]) : e.dropShadowColor = i.transparent, this.innerShadow.enabled ? (e.innerShadowSpread = this.innerShadow.spread, e.innerShadowBlur = 5 * this.innerShadow.blurRadius, e.innerShadowColor = this.innerShadow.color, e.innerShadowOffsetX = this.innerShadow.offset[0], e.innerShadowOffsetY = this.innerShadow.offset[1]) : e.innerShadowColor = i.transparent;
	}
	innerDraw(e) {}
	draw(e) {
		!this.visible || (e.save(), this.applyTransforms(e), this.applyFilters(e), this.applyFillStroke(e), e.beginPath(), this.innerDraw(e), this.autoClose && e.closePath(), this.fill.enabled && e.fill(), this.stroke.enabled && e.stroke(), e.restore());
	}
	updateByPatchedOp(e, t, n) {
		super.updateByPatchedOp(e, t, n), e.type === 0 && (c(e.path, ["fill"]) ? this.fill.update(e.props) : c(e.path, ["stroke"]) ? this.stroke.update(e.props) : c(e.path, ["dropShadow"]) ? this.dropShadow.update(e.props) : c(e.path, ["innerShadow"]) ? this.innerShadow.update(e.props) : c(e.path, ["layerBlur"]) ? this.layerBlur.update(e.props) : c(e.path, ["backgroundBlur"]) ? this.backgroundBlur.update(e.props) : this.resetBBoxNeedsUpdate());
	}
	updateState(e, t) {
		super.updateState(e, t), e.fill !== void 0 && this.fill.update(e.fill), e.stroke !== void 0 && this.stroke.update(e.stroke), e.dropShadow !== void 0 && this.dropShadow.update(e.dropShadow), e.innerShadow !== void 0 && this.innerShadow.update(e.innerShadow), e.layerBlur !== void 0 && this.layerBlur.update(e.layerBlur), e.backgroundBlur !== void 0 && this.backgroundBlur.update(e.backgroundBlur);
	}
	clone(e) {
		let t = new P(this.uuid, this.data, e);
		return t.parent = void 0, t;
	}
}, F = class extends P {
	constructor(e, t, n) {
		super(e, t, n), this.uuid = e, this.data = t, this.width = 0, this.height = 0, this.updateState(t, n);
	}
	innerDraw(e) {
		e.ellipse(.5 * this.width, .5 * this.height, .5 * this.width, .5 * this.height, 0, 0, 2 * Math.PI);
	}
	intersectsInLocalSpace(e, t) {
		return function(e, t, n, r, i, a) {
			let o = e - n, s = t - r;
			return o * o / (i * i) + s * s / (a * a) <= 1;
		}(e, t, .5 * this.width, .5 * this.height, .5 * this.width, .5 * this.height);
	}
	getCenter() {
		return [.5 * this.width, .5 * this.height];
	}
	getHalfSize() {
		return [.5 * this.width, .5 * this.height];
	}
	updateSizeState(e) {
		let t = !1;
		e.width !== void 0 && (this.width = typeof e.width == "number" ? e.width : this.width, t = !0), e.height !== void 0 && (this.height = typeof e.height == "number" ? e.height : this.height, t = !0), t && this.updateWorldMatrix(!0, !1, !0);
	}
	updateState(e, t) {
		super.updateState(e, t), this.updateSizeState(e);
	}
	clone(e) {
		let t = new F(this.uuid, this.data, e);
		return t.parent = void 0, t;
	}
}, I = class extends P {
	constructor(e, t, n) {
		super(e, t, n), this.uuid = e, this.data = t, this.width = 0, this.height = 0, this.cornerRadius = [
			0,
			0,
			0,
			0
		], this.updateState(t, n);
	}
	innerDraw(e) {
		e.rect(0, 0, this.width, this.height, ...this.cornerRadius);
	}
	getCenter() {
		return [.5 * this.width, .5 * this.height];
	}
	getHalfSize() {
		return [.5 * this.width, .5 * this.height];
	}
	updateCornerState(e) {
		e.cornerRadius !== void 0 && (this.cornerRadius = e.cornerRadius);
	}
	updateSizeState(e) {
		let t = !1;
		e.width !== void 0 && (this.width = typeof e.width == "number" ? e.width : this.width, t = !0), e.height !== void 0 && (this.height = typeof e.height == "number" ? e.height : this.height, t = !0), t && this.updateWorldMatrix(!0, !1, !0);
	}
	updateState(e, t) {
		super.updateState(e, t), this.updateSizeState(e), this.updateCornerState(e);
	}
	clone(e) {
		let t = new I(this.uuid, this.data, e);
		return t.parent = void 0, t;
	}
}, ae = class extends P {
	constructor(e, t, n) {
		super(e, t, n), this.uuid = e, this.data = t, this._textHeight = 0, this._textHeightDirty = !0, this.width = 0, this.height = 0, this.updateState(t, n);
	}
	get textHeight() {
		return this._textHeight;
	}
	applyFillStroke(e) {
		e.fillColor = this.fill.enabled ? this.fill.color : i.transparent, e.strokeColor = this.stroke.enabled && this.stroke.thickness > 0 ? this.stroke.color : i.transparent, e.strokeMode = "center", e.lineWidth = this.stroke.thickness;
	}
	innerDraw(e) {
		this._fontHolder?.arrayBuffer && this._fontHolder.arrayBuffer.byteLength > 1 && this.data.font && e.registerFont(this._fontHolder.arrayBuffer, this.data.font);
		let t = this.data.textTransform, n = this.data.text.textValue.toString(), r = t === 2 ? n.toUpperCase() : t === 3 ? n.toLowerCase() : n, { height: i } = e.drawText(r, {
			x: 0,
			y: 0,
			width: this.width,
			height: this.height,
			fontSize: this.data.fontSize,
			lineHeight: this.data.lineHeight ?? 1,
			letterSpacing: this.data.letterSpacing ?? 0,
			horizontalAlign: this.data.horizontalAlign,
			verticalAlign: this.data.verticalAlign,
			font: this.data.font
		});
		this._textHeight = i;
	}
	getCenter() {
		return [.5 * this.width, .5 * this.height];
	}
	getHalfSize() {
		return [.5 * this.width, .5 * this.height];
	}
	updateSizeState(e) {
		let t = !1;
		e.width !== void 0 && (this.width = typeof e.width == "number" ? e.width : this.width, t = !0), e.height !== void 0 && (this.height = typeof e.height == "number" ? e.height : this.height, t = !0), t && this.updateWorldMatrix(!0, !1, !0);
	}
	updateFontState(e, { shared: t }) {
		e.font !== void 0 && (this._fontHolder = t.getFont(e.font), this._fontHolder && !this._fontHolder.isLoaded && this._fontHolder.loadingPromise.then(() => {
			this.requestRender();
		}));
	}
	updateState(e, t) {
		super.updateState(e, t), this.updateSizeState(e), this.updateFontState(e, t);
	}
	clone(e) {
		let t = new ae(this.uuid, this.data, e);
		return t.parent = void 0, t;
	}
}, L = class extends P {
	constructor(e, t, n) {
		super(e, t, n), this.uuid = e, this.data = t, this.curves = [], this.extremasBBox = {
			min: [0, 0],
			max: [0, 0]
		}, this.updateState(t, n);
	}
	computeExtremas() {
		this.curves.length === 0 && this.computeCurves();
		let e = this.curves.map((e) => T.extremas(e)), t = [1 / 0, 1 / 0], n = [-1 / 0, -1 / 0];
		for (let r = 0, i = e.length; r < i; r++) {
			let i = e[r];
			i[0][0] < t[0] && (t[0] = i[0][0]), i[0][1] < t[1] && (t[1] = i[0][1]), i[1][0] > n[0] && (n[0] = i[1][0]), i[1][1] > n[1] && (n[1] = i[1][1]);
		}
		return this.extremasBBox.min = [t[0], t[1]], this.extremasBBox.max = [n[0], n[1]], this.extremasBBox;
	}
	computeCurves() {
		this.curves = [];
		for (let e = 1, t = this.data.points.length; e < t; e++) {
			let t = this.data.points[e].data, n = this.data.points[e - 1].data, r = {
				start: n.position,
				cp1: n.controlNext.position,
				cp2: t.controlPrevious.position,
				end: t.position
			};
			this.curves.push(r);
		}
		let e = this.data.points[0].data, t = this.data.points[this.data.points.length - 1].data;
		if (this.data.isClosed) {
			let n = {
				start: t.position,
				cp1: t.controlNext.position,
				cp2: e.controlPrevious.position,
				end: e.position
			};
			this.curves.push(n);
		}
	}
	getCenter() {
		let [e, t] = this.extremasBBox.min, [n, r] = this.getHalfSize();
		return [e + n, t + r];
	}
	getHalfSize() {
		let { min: e, max: t } = this.extremasBBox;
		return [.5 * (t[0] - e[0]), .5 * (t[1] - e[1])];
	}
	innerDraw(e) {
		for (let t = 0, n = this.data.points.length; t < n; t++) {
			let n = this.data.points[t].data;
			if (t === 0) {
				let [t, r] = n.position;
				e.moveTo(t, r);
			} else {
				let r = this.data.points[t - 1].data, [i, a] = r.controlNext.position, [o, s] = n.controlPrevious.position, [c, l] = n.position, u = {
					start: r.position,
					cp1: r.controlNext.position,
					cp2: n.controlPrevious.position,
					end: n.position
				};
				T.derive(u), e.bezierCurveTo(i, a, o, s, c, l);
			}
		}
		let t = this.data.points[0].data, n = this.data.points[this.data.points.length - 1].data;
		if (this.data.isClosed) {
			let [r, i] = n.controlNext.position, [a, o] = t.controlPrevious.position, [s, c] = t.position;
			e.bezierCurveTo(r, i, a, o, s, c);
		}
	}
	updateState(e, t) {
		super.updateState(e, t), this.computeExtremas();
	}
	clone(e) {
		let t = new L(this.uuid, this.data, e);
		return t.parent = void 0, t;
	}
};
((e) => {
	function t(e, t, n, r = !1) {
		let i = e - 2 * t + n;
		if (i !== 0) {
			let r = -Math.sqrt(Math.abs(t * t - e * n)), a = -e + t;
			return [-(r + a) / i, -(-r + a) / i];
		}
		return t !== n && i === 0 ? [(2 * t - n) / (2 * (t - n))] : [];
	}
	e.derive = function(e) {
		let t = e.start, n = e.cp1, r = e.cp2, i = e.end, a = {
			start: [3 * (n[0] - t[0]), 3 * (n[1] - t[1])],
			cp: [3 * (r[0] - n[0]), 3 * (r[1] - n[1])],
			end: [3 * (i[0] - r[0]), 3 * (i[1] - r[1])]
		};
		return e.derivative = a, a.derivative = E.derive(a), a;
	}, e.droot = function(n) {
		let r = n.derivative ?? e.derive(n), i = r.start, a = r.cp, o = r.end;
		return [t(i[0], a[0], o[0]), t(i[1], a[1], o[1])];
	}, e.extremas = function(t) {
		let [n, r] = e.droot(t), i = [t.start[0], t.end[0]], a = [t.start[1], t.end[1]];
		for (let r of n) i.push(e.compute(t, Math.min(1, Math.max(0, r)))[0]);
		for (let n of r) a.push(e.compute(t, Math.min(1, Math.max(0, n)))[1]);
		return i.sort((e, t) => e - t), a.sort((e, t) => e - t), [[i[0], a[0]], [i[i.length - 1], a[a.length - 1]]];
	}, e.compute = function(e, t) {
		if (t === 0) return [...e.start];
		if (t === 1) return [...e.end];
		let n = 1 - t, r = n * n, i = t * t, a = r * n, o = r * t * 3, s = n * i * 3, c = t * i;
		return [a * e.start[0] + o * e.cp1[0] + s * e.cp2[0] + c * e.end[0], a * e.start[1] + o * e.cp1[1] + s * e.cp2[1] + c * e.end[1]];
	};
})(T ||= {}), (D = E ||= {}).derive = function(e) {
	let t = e.start, n = e.cp, r = e.end, i = {
		start: [2 * (n[0] - t[0]), 2 * (n[1] - t[1])],
		end: [2 * (r[0] - n[0]), 2 * (r[1] - n[1])]
	};
	return i.derivative = O.derive(i), e.derivative = i, i;
}, D.droot = function(e) {
	let t = e.derivative ?? D.derive(e), n = t.start, r = t.end;
	return [n[0] === r[0] ? 0 : n[0] / (n[0] - r[0]), n[1] === r[1] ? 0 : n[1] / (n[1] - r[1])];
}, D.compute = function(e, t) {
	if (t === 0) return [...e.start];
	if (t === 1) return [...e.end];
	let n = 1 - t, r = n * n, i = n * t * 2, a = t * t;
	return [r * e.start[0] + i * e.cp[0] + a * e.end[0], r * e.start[1] + i * e.cp[1] + a * e.end[1]];
}, (k = O ||= {}).derive = function(e) {
	let t = e.start, n = e.end;
	return e.derivative = [n[0] - t[0], n[1] - t[1]], e.derivative;
}, k.compute = function(e, t) {
	if (t === 0) return [...e.start];
	if (t === 1) return [...e.end];
	let n = e.start, r = e.end;
	return [n[0] + (r[0] - n[0]) * t, n[1] + (r[1] - n[1]) * t];
};
var R = class extends N {
	constructor(e, t, n) {
		super(e, t, n), this.uuid = e, this.data = t, this.context = n, this.isBaseGroup = !0, this.children = [];
	}
	add(e) {
		e.parent && e.parent instanceof R && e.parent.remove(e), this.children.push(e), e.parent = this;
	}
	remove(e) {
		let t = this.children.indexOf(e);
		t >= 0 && (this.children.splice(t, 1), e.parent = void 0);
	}
	traverse(e) {
		let t = e(this);
		if (!0 !== t) for (let n of this.children) n instanceof R ? n.traverse(e) : t = e(n);
	}
	intersectsChildrenHelper(e, t, n, r, i) {
		for (let a of this.children) if (a.intersects(e, t, n, !1) && (i.push(a), r) || a instanceof R && a.intersectsChildrenHelper(e, t, n, r, i)) return !0;
		return !1;
	}
	intersectsChildren(e, t, n, r = !1, i = [], a = !1) {
		return this.intersectsChildrenHelper(e, t, n, r, i), i;
	}
	intersectsChildrenHelperReverse(e, t, n, r, i) {
		for (let a of this.children) if (a instanceof R && a.intersectsChildrenHelperReverse(e, t, n, r, i) || a.intersects(e, t, n, !1) && (i.push(a), r)) return !0;
		return !1;
	}
	intersectsChildrenReverse(e, t, n, r = !1, i = [], a = !1) {
		return this.intersectsChildrenHelperReverse(e, t, n, r, i), i;
	}
	updateWorldMatrix(e, t, n) {
		if (super.updateWorldMatrix(e, t, n), n && this.children) for (let t of this.children) t.updateWorldMatrix(e, !1, !0);
	}
	find(e) {
		let t;
		return this.traverse((n) => {
			n.uuid === e && (t = n);
		}), t;
	}
	innerDrawChildren(e) {
		for (let t = this.children.length - 1; t >= 0; t--) this.children[t].draw(e);
	}
	resetBBoxNeedsUpdate() {
		super.resetBBoxNeedsUpdate(), this.traverse((e) => {
			e.resetBBoxNeedsUpdateSelf();
		});
	}
	clone(e) {
		let t = new R(this.uuid, this.data, e);
		t.parent = void 0;
		for (let n of this.children) t.add(n.clone(e));
		return t;
	}
}, oe = class extends R {
	constructor(e, t, n) {
		super(e, t, n), this.uuid = e, this.data = t, this.updateState(t, n);
	}
	draw(e) {
		!this.visible || (e.save(), this.applyTransforms(e), this.innerDrawChildren(e), e.restore());
	}
	clone(e) {
		let t = new oe(this.uuid, this.data, e);
		t.parent = void 0;
		for (let n of this.children) t.add(n.clone(e));
		return t;
	}
}, se = class extends R {
	constructor(e, t, n) {
		super(e, t, n), this.uuid = e, this.width = 0, this.height = 0, this.clipped = !0, this.background = new I(e + "-background", d.defaultData, n), this.background.parent = this, this.updateState(t, n);
	}
	get fill() {
		return this.background.fill;
	}
	get stroke() {
		return this.background.stroke;
	}
	get backgroundBlur() {
		return this.background.backgroundBlur;
	}
	get layerBlur() {
		return this.background.layerBlur;
	}
	get dropShadow() {
		return this.background.dropShadow;
	}
	get innerShadow() {
		return this.background.innerShadow;
	}
	get cornerRadius() {
		return this.background.cornerRadius;
	}
	set cornerRadius(e) {
		this.background.cornerRadius = e;
	}
	updateLocalMatrix() {
		super.updateLocalMatrix(), this.background?.updateLocalMatrix();
	}
	updateWorldMatrix(e, t, n) {
		super.updateWorldMatrix(e, t, n), this.background?.updateWorldMatrix(e, t, n);
	}
	draw(e) {
		if (!this.visible) return;
		e.save();
		let t = this.width, n = this.height;
		this.applyTransforms(e), this.background.width = t, this.background.height = n, this.background.draw(e), this.clipped && e.clipRect(0, 0, t, n, ...this.cornerRadius), this.innerDrawChildren(e), e.restore();
	}
	getCenter() {
		return [.5 * this.width, .5 * this.height];
	}
	getHalfSize() {
		return [.5 * this.width, .5 * this.height];
	}
	updateCornerState(e) {
		e.cornerRadius !== void 0 && (this.cornerRadius = e.cornerRadius);
	}
	updateSizeState(e) {
		let t = !1;
		e.width !== void 0 && (this.width = typeof e.width == "number" ? e.width : this.width, t = !0), e.height !== void 0 && (this.height = typeof e.height == "number" ? e.height : this.height, t = !0), t && this.updateWorldMatrix(!0, !1, !0);
	}
	updateState(e, t) {
		super.updateState(e, t), this.updateSizeState(e), this.updateCornerState(e), e.fill !== void 0 && this.fill.update(e.fill), e.stroke !== void 0 && this.stroke.update(e.stroke), e.dropShadow !== void 0 && this.dropShadow.update(e.dropShadow), e.innerShadow !== void 0 && this.innerShadow.update(e.innerShadow), e.layerBlur !== void 0 && this.layerBlur.update(e.layerBlur), e.backgroundBlur !== void 0 && this.backgroundBlur.update(e.backgroundBlur), e.clipped !== void 0 && (this.clipped = e.clipped);
	}
	requestRender() {
		super.requestRender(), this.dispatchEvent({ type: "render" });
	}
	dispose() {
		this.removeEventListener("render");
	}
	updateByPatchedOp(e, t, n) {
		super.updateByPatchedOp(e, t, n), e.type === 0 && (c(e.path, ["fill"]) ? this.fill.update(e.props) : c(e.path, ["stroke"]) ? this.stroke.update(e.props) : c(e.path, ["dropShadow"]) ? this.dropShadow.update(e.props) : c(e.path, ["innerShadow"]) ? this.innerShadow.update(e.props) : c(e.path, ["layerBlur"]) ? this.layerBlur.update(e.props) : c(e.path, ["backgroundBlur"]) ? this.backgroundBlur.update(e.props) : this.resetBBoxNeedsUpdate());
	}
	clone(e) {
		let t = new se(this.uuid, this.data, e);
		t.parent = void 0;
		for (let n of this.children) t.add(n.clone(e));
		return t;
	}
}, ce = n(v(), 1), z = /* @__PURE__ */ new Map(), B = null, le = class extends P {
	constructor(e, t, n) {
		super(e, t, n), this.uuid = e, this.data = t, this._pathBBox = new DOMRect(), this.path = "", this.updateState(t, n), this.autoClose = !1, this.computeSVGBBox();
	}
	computeSVGBBox() {
		let e = this.path;
		ue(this.path) && (console.warn("Invalid SVG path", this.uuid), e = ""), this._pathBBox = function(e) {
			let t = z.get(e);
			if (t !== void 0) return t;
			if (B === null || !B.isConnected) {
				let e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
				e.setAttribute("aria-hidden", "true"), e.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;visibility:hidden;pointer-events:none", B = document.createElementNS("http://www.w3.org/2000/svg", "path"), e.appendChild(B), document.body.appendChild(e);
			}
			B.setAttribute("d", e);
			let n = B.getBBox();
			return z.size >= 4096 && z.clear(), z.set(e, n), n;
		}(e);
	}
	innerDraw(e) {
		e.path(this.path);
	}
	intersectsInLocalSpace(e, t) {
		return e >= this._pathBBox.x && e <= this._pathBBox.x + this._pathBBox.width && t >= this._pathBBox.y && t <= this._pathBBox.y + this._pathBBox.height;
	}
	getCenter() {
		return [(this._pathBBox.x + this._pathBBox.width) / 2, (this._pathBBox.y + this._pathBBox.height) / 2];
	}
	getHalfSize() {
		return [(this._pathBBox.x + this._pathBBox.width) / 2, (this._pathBBox.y + this._pathBBox.height) / 2];
	}
	updateState(e, t) {
		super.updateState(e, t), e.path !== void 0 && (this.path = e.path, this.computeSVGBBox());
	}
	clone(e) {
		let t = new le(this.uuid, this.data, e);
		return t.parent = void 0, t;
	}
};
function ue(e) {
	return /NaN/.test(e);
}
function de(e, t = 1, n = 1) {
	if (t <= 0 || n <= 0) return e;
	if (ue(e)) return console.warn("Cannot scale invalid path", e), fe([]);
	if (t === 1 && n === 1) return e;
	try {
		return fe((0, ce.parseSVG)(e).map((e) => {
			let r = { ...e };
			return "x" in r && (r.x *= t), "y" in r && (r.y *= n), "x1" in r && (r.x1 *= t), "x2" in r && (r.x2 *= t), "y1" in r && (r.y1 *= n), "y2" in r && (r.y2 *= n), "rx" in r && (r.rx *= t), "ry" in r && (r.ry *= n), r;
		}));
	} catch (e) {
		return console.warn("Error parsing SVG path", e), fe([]);
	}
}
function fe(e) {
	let t, n = [
		"rx",
		"ry",
		"xAxisRotation",
		"largeArc",
		"sweep",
		"x1",
		"y1",
		"x2",
		"y2",
		"x",
		"y"
	];
	return e.map((e) => {
		let r = [];
		n.forEach((t) => {
			if (t in e) {
				let n = 1 * e[t];
				r.length && n >= 0 && r.push(","), r.push(n);
			}
		});
		let i = (t === e.code ? r[0] < 0 ? "" : "," : e.code) + r.join("");
		return t = e.code, i;
	}).join("");
}
var pe = class {
	constructor(e, t, n) {
		this.uuid = e, this.data = t, this.group = new oe(pe.GROUP_ID, { ...u.defaultData }, n), this.createChildrenObjects(t.objects, this.group, n);
	}
	createObject(e, t, n, r, i, a) {
		let o = function(e, t, n) {
			switch (t.type) {
				case "ellipse2d": return new F(e, t, n);
				case "rectangle2d": return new I(e, t, n);
				case "text2d": return new ae(e, t, n);
				case "vector2d": return new L(e, t, n);
				case "path2d": return new le(e, t, n);
				case "frame2d": return new se(e, t, n);
				default: return new oe(e, t, n);
			}
		}(e, t, a);
		o && (r.add(o), r.children.splice(i, 0, r.children.pop()), o.updateWorldMatrix(), n.length > 0 && (o instanceof oe || o instanceof se) && this.createChildrenObjects(n, o, a));
	}
	createChildrenObjects(e, t, n) {
		let r = 0;
		for (let i of e) this.createObject(i.id, i.data, i.children, t, r, n), r += 1;
	}
	draw(e) {
		this.group.draw(e);
	}
	updateEntityByOp(e, t, n, r) {
		let i = this.find(e);
		if (i) try {
			i.updateByOp(t, n, { shared: r });
		} catch (e) {
			console.error(e);
		}
	}
	updateTreeByOp(e, t) {
		if (e.path.length === 0 && e.type === 7) {
			let n = e.parent === null ? this.group : this.find(e.parent);
			n !== void 0 && n instanceof R && (this.createObject(e.id, e.data, e.children, n, e.localIndex, t), n.requestRender());
		} else if (e.path.length === 0 && e.type === 8) {
			let t = this.find(e.id);
			if (t !== void 0 && t.parent !== void 0 && t.parent instanceof R) {
				let e = t.parent;
				t.resetBBoxNeedsUpdate(), e?.remove(t), e?.requestRender();
			}
		} else if (e.path.length === 0 && e.type === 9) {
			let t = this.find(e.id);
			if (t !== void 0) {
				let n = t.parent, r = e.parent === null ? this : this.find(e.parent);
				if (r instanceof R || r === this) {
					r.add(t);
					let i = e.localIndex;
					r.children.splice(i, 0, r.children.pop()), t.updateWorldMatrix(!0, !1, !0), n?.requestRender(), t.requestRender();
				}
				t.resetBBoxNeedsUpdate();
			}
		}
	}
	add(e) {
		this.group.add(e);
	}
	remove(e) {
		this.group.remove(e);
	}
	traverse(e) {
		this.group.traverse((t) => {
			t !== this.group && e(t);
		});
	}
	intersectsChildren(e, t, n, r = !1, i = []) {
		return this.group.intersectsChildren(e, t, n, r, i, !0);
	}
	intersectsChildrenReverse(e, t, n, r = !1, i = []) {
		return this.group.intersectsChildrenReverse(e, t, n, r, i, !0);
	}
	find(e) {
		return this.group.find(e);
	}
	get children() {
		return this.group.children;
	}
	project(e, t) {
		return this.group.project(e, t);
	}
	getWithSortKey(e) {
		let t = this.find(e);
		if (t === void 0) return;
		let n = [], r = t;
		for (; r !== this.group;) {
			let e = r;
			r = r.parent;
			let t = r.children.indexOf(e);
			n.splice(0, 0, t);
		}
		return {
			entity: t,
			sortKey: n
		};
	}
	getAllSorted(e) {
		let t = [];
		for (let n of e) {
			let e = this.getWithSortKey(n.id);
			e !== void 0 && t.push(e);
		}
		return t.sort((e, t) => a(e.sortKey, t.sortKey)), t.map((e) => e.entity);
	}
}, me = pe;
me.GROUP_ID = "scene2d";
var he = n(v(), 1);
function ge(e, t, n, r, i, a, o, s, c, l) {
	if (t === c && n === l) return;
	if (r = Math.abs(r), i = Math.abs(i), r === 0 || i === 0) return void e.push({ LineTo: {
		x: c,
		y: l
	} });
	let u = a * Math.PI / 180, d = Math.cos(u), f = Math.sin(u), p = (t - c) / 2, m = (n - l) / 2, h = d * p + f * m, g = -f * p + d * m, _ = h * h / (r * r) + g * g / (i * i);
	if (_ > 1) {
		let e = Math.sqrt(_);
		r *= e, i *= e;
	}
	let v = r * r, y = i * i, b = v * y - v * g * g - y * h * h, x = v * g * g + y * h * h, S = (o === s ? -1 : 1) * Math.sqrt(Math.max(0, b / x)), C = r * g * S / i, w = S * (-i * h) / r, ee = d * C - f * w + (t + c) / 2, T = f * C + d * w + (n + l) / 2, E = Math.atan2((g - w) / i, (h - C) / r), D = Math.atan2((-g - w) / i, (-h - C) / r) - E;
	!s && D > 0 ? D -= 2 * Math.PI : s && D < 0 && (D += 2 * Math.PI);
	let O = Math.max(1, Math.ceil(Math.abs(D) / (Math.PI / 2))), k = D / O, A = 4 / 3 * Math.tan(k / 4), j = E, M = t, N = n;
	for (let t = 0; t < O; t++) {
		let t = j + k, n = Math.cos(j), a = Math.sin(j), o = Math.cos(t), s = Math.sin(t), c = ee + r * o * d - i * s * f, l = T + r * o * f + i * s * d, u = -r * a * d - i * n * f, p = -r * a * f + i * n * d, m = -r * s * d - i * o * f, h = -r * s * f + i * o * d;
		e.push({ CurveTo: [
			{
				x: M + A * u,
				y: N + A * p
			},
			{
				x: c - A * m,
				y: l - A * h
			},
			{
				x: c,
				y: l
			}
		] }), j = t, M = c, N = l;
	}
}
var _e = .5522847498307936, V = 1536 / 2816;
function H(e) {
	let t = e.getUint32(0);
	return t === 65536 || t === 1330926671 || t === 1953658213 ? 0 : t === 1953784678 && e.getUint32(8) > 0 ? e.getUint32(12) : void 0;
}
var U = !1;
function ve() {
	U || (U = !0, console.warn("[HanaRenderer] clipRect: precise clipping of rotated/complex content is not supported by the Hana UI overlay yet; drawing unclipped. (Axis-aligned rectangles are clipped geometrically.)"));
}
var W = class {
	constructor(e, t = 1) {
		this.canvas = e, this._dpr = t, this._width = 0, this._height = 0, this._isSizeDirty = !1, this._crashed = !1, this._shapes = [], this._lastPushedJSON = "", this._ctm = C.identity(), this._stack = [], this._clips = [], this._pathEls = [], this._simpleShape = null, this._pathPrimitives = 0, this._fillColor = i.transparent, this._strokeColor = i.transparent, this._lineWidth = 1, this._strokeMode = "inside", this._layerBlur = 0, this._backgroundBlur = 0, this._dropShadowBlur = 0, this._dropShadowOffsetX = 0, this._dropShadowOffsetY = 0, this._dropShadowColor = i.transparent, this._innerShadowBlur = 0, this._innerShadowOffsetX = 0, this._innerShadowOffsetY = 0, this._innerShadowSpread = 0, this._innerShadowColor = i.transparent, this._fonts = /* @__PURE__ */ new Map(), this._fontsFlushed = /* @__PURE__ */ new Set(), this._engineFonts = /* @__PURE__ */ new Set(), this._fontXPerEm = /* @__PURE__ */ new Map(), this._measureCache = /* @__PURE__ */ new Map();
		try {
			let n = e.getBoundingClientRect();
			e.width = n.width * t, e.height = n.height * t;
		} catch {
			console.log(e.width, t);
		}
	}
	get dpr() {
		return this._dpr;
	}
	set dpr(e) {
		this._dpr = e, this._isSizeDirty = !0;
	}
	get width() {
		return this._width;
	}
	get height() {
		return this._height;
	}
	async init() {
		if (!this._engine && !this._crashed) {
			try {
				this._context = await y(), this._engine = await this._context.createEngine(this.canvas);
			} catch (e) {
				this._crashed = !0, console.error("[HanaRenderer] Failed to load the Hana UI engine; UI scenes will not render.", e);
				return;
			}
			if (this._width > 0 && this._height > 0) this._syncViewport();
			else {
				let e = this.canvas.getBoundingClientRect();
				e.width > 0 && e.height > 0 && (this._width = e.width, this._height = e.height, this._syncViewport());
			}
			this._flushFonts(), this.uiFontReady = this._watchUiFont();
		}
	}
	_watchUiFont() {
		return new Promise((e) => {
			let t = this._engine;
			if (!t || typeof t.scene.isUiFontLoaded != "function") return void e();
			let n = () => {
				let e = !1;
				return this._guard(() => {
					e = t.scene.isUiFontLoaded();
				}), e;
			};
			if (n()) return void e();
			let r = Date.now(), i = setInterval(() => {
				this._crashed || Date.now() - r > 3e5 ? clearInterval(i) : n() && (clearInterval(i), e());
			}, 150);
		});
	}
	_syncViewport() {
		let e = this._engine;
		if (!e || this._crashed) return;
		let t = this._width, n = this._height;
		this.canvas.style.width = t + "px", this.canvas.style.height = n + "px", this.canvas.width = Math.max(1, Math.ceil(t * this._dpr)), this.canvas.height = Math.max(1, Math.ceil(n * this._dpr)), this._guard(() => {
			e.resize([t, n], this._dpr), e.scene.updateCamera({
				position: [t / 2, n / 2],
				zoom: 1
			});
		});
	}
	setSize(e, t) {
		!this._isSizeDirty && e === this._width && t === this._height || (this._isSizeDirty = !1, this._width = e, this._height = t, this._engine ? this._syncViewport() : (this.canvas.style.width = e + "px", this.canvas.style.height = t + "px", this.canvas.width = Math.max(1, Math.ceil(e * this._dpr)), this.canvas.height = Math.max(1, Math.ceil(t * this._dpr))));
	}
	_guard(e) {
		if (!this._crashed) try {
			e();
		} catch (e) {
			this._crashed = !0, console.error("[HanaRenderer] Hana engine call failed; disabling this renderer instance.", e);
		}
	}
	async loadFont(e, t) {
		try {
			let n = await fetch(e);
			if (!n.ok) return void console.error(`[HanaRenderer] loadFont: ${e} returned HTTP ${n.status}; skipping "${t}"`);
			let r = await n.arrayBuffer();
			if (r.byteLength === 0) return void console.error(`[HanaRenderer] loadFont: ${e} was empty; skipping "${t}"`);
			this.registerFont(r, t);
		} catch (n) {
			console.error(`[HanaRenderer] loadFont failed for "${t}" (${e}):`, n);
		}
	}
	registerFont(e, t) {
		if (this._fonts.has(t)) return;
		this._fonts.set(t, e), function(e) {
			try {
				return H(new DataView(e)) !== void 0;
			} catch {
				return !1;
			}
		}(e) && this._engineFonts.add(t);
		let n = function(e) {
			try {
				let t = new DataView(e), n = H(t);
				if (n === void 0) return;
				let r = t.getUint16(n + 4), i = -1, a = -1;
				for (let e = 0; e < r; e++) {
					let r = n + 12 + 16 * e, o = t.getUint32(r);
					o === 1751474532 && (i = t.getUint32(r + 8)), o === 1330851634 && (a = t.getUint32(r + 8));
				}
				if (i < 0 || a < 0) return;
				let o = t.getUint16(i + 18), s = t.getUint16(a);
				if (o === 0 || s < 2) return;
				let c = t.getInt16(a + 86);
				return c > 0 ? c / o : void 0;
			} catch {
				return;
			}
		}(e);
		n !== void 0 && this._fontXPerEm.set(t, n), this._flushFonts();
	}
	_flushFonts() {
		let e = this._engine;
		if (e) for (let [t, n] of this._fonts) this._fontsFlushed.has(t) || (this._fontsFlushed.add(t), this._guard(() => {
			!1 === e.scene.addLocalFont(t, new Uint8Array(n)) && this._engineFonts.delete(t);
		}));
	}
	set strokeColor(e) {
		this._strokeColor = e;
	}
	set fillColor(e) {
		this._fillColor = e;
	}
	set lineWidth(e) {
		this._lineWidth = e;
	}
	set strokeMode(e) {
		this._strokeMode = e;
	}
	set dropShadowBlur(e) {
		this._dropShadowBlur = e;
	}
	set dropShadowColor(e) {
		this._dropShadowColor = e;
	}
	set dropShadowOffsetX(e) {
		this._dropShadowOffsetX = e;
	}
	set dropShadowOffsetY(e) {
		this._dropShadowOffsetY = e;
	}
	set innerShadowBlur(e) {
		this._innerShadowBlur = e;
	}
	set innerShadowColor(e) {
		this._innerShadowColor = e;
	}
	set innerShadowOffsetX(e) {
		this._innerShadowOffsetX = e;
	}
	set innerShadowOffsetY(e) {
		this._innerShadowOffsetY = e;
	}
	set innerShadowSpread(e) {
		this._innerShadowSpread = e;
	}
	set layerBlur(e) {
		this._layerBlur = e;
	}
	set backgroundBlur(e) {
		this._backgroundBlur = e;
	}
	save() {
		this._stack.push({
			ctm: C.copy(this._ctm),
			clipLen: this._clips.length
		});
	}
	restore() {
		let e = this._stack.pop();
		!e || (this._ctm = e.ctm, this._clips.length = e.clipLen);
	}
	setTransform(e, t = !1) {
		let n = C.identity();
		if (this.camera?.enabled && (n = C.append(n, this.camera.worldMatrix), t)) {
			let e = C.getScale(this.camera.worldMatrix);
			n = C.scale(n, 1 / e[0], 1 / e[1]);
		}
		this._ctm = C.append(n, e);
	}
	transform(e) {
		this._ctm = C.append(this._ctm, e);
	}
	beginPath() {
		this._pathEls = [], this._simpleShape = null, this._pathPrimitives = 0;
	}
	closePath() {
		this._pathEls.length !== 0 && this._pathEls[this._pathEls.length - 1] !== "ClosePath" && this._pathEls.push("ClosePath");
	}
	_startFreeform() {
		this._simpleShape = null, this._pathPrimitives++;
	}
	moveTo(e, t) {
		this._startFreeform(), this._pathEls.push({ MoveTo: {
			x: e,
			y: t
		} });
	}
	lineTo(e, t) {
		this._startFreeform(), this._pathEls.push({ LineTo: {
			x: e,
			y: t
		} });
	}
	bezierCurveTo(e, t, n, r, i, a) {
		this._startFreeform(), this._pathEls.push({ CurveTo: [
			{
				x: e,
				y: t
			},
			{
				x: n,
				y: r
			},
			{
				x: i,
				y: a
			}
		] });
	}
	quadraticCurveTo(e, t, n, r) {
		this._startFreeform(), this._pathEls.push({ QuadTo: [{
			x: e,
			y: t
		}, {
			x: n,
			y: r
		}] });
	}
	path(e) {
		this._startFreeform(), this._pathEls.push(...function(e) {
			let t, n = [];
			try {
				t = (0, he.makeAbsolute)((0, he.parseSVG)(e));
			} catch (e) {
				return console.error("[HanaRenderer] Failed to parse SVG path:", e), n;
			}
			let r = 0, i = 0, a = 0, o = 0, s = null, c = null;
			for (let e of t) {
				let t = null, l = null;
				switch (e.code) {
					case "M":
						r = a = e.x, i = o = e.y, n.push({ MoveTo: {
							x: r,
							y: i
						} });
						break;
					case "L":
						r = e.x, i = e.y, n.push({ LineTo: {
							x: r,
							y: i
						} });
						break;
					case "H":
						r = e.x, n.push({ LineTo: {
							x: r,
							y: i
						} });
						break;
					case "V":
						i = e.y, n.push({ LineTo: {
							x: r,
							y: i
						} });
						break;
					case "C": {
						let a = {
							x: e.x1,
							y: e.y1
						}, o = {
							x: e.x2,
							y: e.y2
						};
						r = e.x, i = e.y, n.push({ CurveTo: [
							a,
							o,
							{
								x: r,
								y: i
							}
						] }), t = o;
						break;
					}
					case "S": {
						let a = s ? {
							x: 2 * r - s.x,
							y: 2 * i - s.y
						} : {
							x: r,
							y: i
						}, o = {
							x: e.x2,
							y: e.y2
						};
						r = e.x, i = e.y, n.push({ CurveTo: [
							a,
							o,
							{
								x: r,
								y: i
							}
						] }), t = o;
						break;
					}
					case "Q": {
						let t = {
							x: e.x1,
							y: e.y1
						};
						r = e.x, i = e.y, n.push({ QuadTo: [t, {
							x: r,
							y: i
						}] }), l = t;
						break;
					}
					case "T": {
						let t = c ? {
							x: 2 * r - c.x,
							y: 2 * i - c.y
						} : {
							x: r,
							y: i
						};
						r = e.x, i = e.y, n.push({ QuadTo: [t, {
							x: r,
							y: i
						}] }), l = t;
						break;
					}
					case "A": {
						let t = r, a = i;
						r = e.x, i = e.y, ge(n, t, a, e.rx, e.ry, e.xAxisRotation, e.largeArc, e.sweep, r, i);
						break;
					}
					case "Z": r = a, i = o, n.push("ClosePath");
				}
				s = t, c = l;
			}
			return n;
		}(e));
	}
	rect(e, t, n, r, i = 0, a = 0, o = 0, s = 0) {
		if (!q([
			e,
			t,
			n,
			r
		])) return;
		let c = {
			x: e,
			y: t,
			w: n,
			h: r,
			radii: [
				i,
				a,
				o,
				s
			]
		};
		this._pathPrimitives++, this._simpleShape = this._pathPrimitives === 1 && this._pathEls.length === 0 ? {
			kind: "rect",
			rect: c,
			smoothing: 0
		} : null, Ce(this._pathEls, c);
	}
	ellipse(e, t, n, r, i, a, o, s) {
		if (q([
			e,
			t,
			n,
			r
		])) {
			if (n < 0 || r < 0) throw Error("radii cannot be negative");
			this._pathPrimitives++, this._simpleShape = this._pathPrimitives === 1 && this._pathEls.length === 0 ? {
				kind: "ellipse",
				cx: e,
				cy: t,
				rx: n,
				ry: r
			} : null, function(e, t, n, r, i) {
				let a = r * _e, o = i * _e;
				e.push({ MoveTo: {
					x: t + r,
					y: n
				} }, { CurveTo: [
					{
						x: t + r,
						y: n + o
					},
					{
						x: t + a,
						y: n + i
					},
					{
						x: t,
						y: n + i
					}
				] }, { CurveTo: [
					{
						x: t - a,
						y: n + i
					},
					{
						x: t - r,
						y: n + o
					},
					{
						x: t - r,
						y: n
					}
				] }, { CurveTo: [
					{
						x: t - r,
						y: n - o
					},
					{
						x: t - a,
						y: n - i
					},
					{
						x: t,
						y: n - i
					}
				] }, { CurveTo: [
					{
						x: t + a,
						y: n - i
					},
					{
						x: t + r,
						y: n - o
					},
					{
						x: t + r,
						y: n
					}
				] }, "ClosePath");
			}(this._pathEls, e, t, n, r);
		}
	}
	clipRect(e, t, n, r, i = 0, a = 0, o = 0, s = 0) {
		let c = C.invert(this._ctm);
		!c || this._clips.push({
			m: C.copy(this._ctm),
			inv: c,
			rect: {
				x: e,
				y: t,
				w: n,
				h: r,
				radii: [
					i,
					a,
					o,
					s
				]
			}
		});
	}
	fill() {
		this._emit(!0);
	}
	stroke() {
		this._strokeColor.a <= 0 || this._lineWidth <= 0 || this._emit(!1);
	}
	_emit(e) {
		let t = this._effectChain(e);
		if (e && this._fillColor.a <= 0 && !t) return;
		let n = this._classifyShape();
		if (!n) return;
		let r = this._applyClips(n);
		if (r === "skip") return;
		if (!e && r !== n) {
			let e = J(n);
			if (e) return void this._emitClippedRectStroke(e, t);
		}
		n = r;
		let i = {
			shape: n,
			color: e ? K(this._fillColor) : [
				0,
				0,
				0,
				0
			],
			transform: C.getAbcdef(this._ctm)
		};
		e || (i.stroke = this._strokeDesc()), t && (i.effect_chain = t), this._shapes.push(i);
	}
	_emitClippedRectStroke(e, t) {
		let n = this._lineWidth, r = this._strokeMode === "outside" ? n : this._strokeMode === "center" ? n / 2 : 0, i = n - r, a = Math.min(e.w, e.h) / 2, o = e.radii.map((e) => Math.max(0, Math.min(e, a))), s = {
			x: e.x - r,
			y: e.y - r,
			w: e.w + 2 * r,
			h: e.h + 2 * r,
			radii: o.map((e) => e > 0 ? e + r : 0)
		}, c = e.w - 2 * i, l = e.h - 2 * i, u = c > 0 && l > 0 ? {
			x: e.x + i,
			y: e.y + i,
			w: c,
			h: l,
			radii: o.map((e) => Math.max(0, e - i))
		} : null, d = this._applyClips(xe(s, 0));
		if (d === "skip") return;
		let f = J(d) ?? s, p = null;
		if (u) {
			let e = this._applyClips(xe(u, 0));
			p = e === "skip" ? null : J(e) ?? u;
		}
		let m = [];
		Ce(m, f), p && function(e, t) {
			let { x: n, y: r, w: i, h: a } = t, o = Math.min(i, a) / 2, [s, c, l, u] = t.radii.map((e) => Math.max(0, Math.min(e, o)));
			if (s === 0 && c === 0 && l === 0 && u === 0) return void e.push({ MoveTo: {
				x: n,
				y: r
			} }, { LineTo: {
				x: n,
				y: r + a
			} }, { LineTo: {
				x: n + i,
				y: r + a
			} }, { LineTo: {
				x: n + i,
				y: r
			} }, "ClosePath");
			let d = 1 - _e;
			e.push({ MoveTo: {
				x: n + s,
				y: r
			} }), s > 0 && e.push({ CurveTo: [
				{
					x: n + s * d,
					y: r
				},
				{
					x: n,
					y: r + s * d
				},
				{
					x: n,
					y: r + s
				}
			] }), e.push({ LineTo: {
				x: n,
				y: r + a - u
			} }), u > 0 && e.push({ CurveTo: [
				{
					x: n,
					y: r + a - u * d
				},
				{
					x: n + u * d,
					y: r + a
				},
				{
					x: n + u,
					y: r + a
				}
			] }), e.push({ LineTo: {
				x: n + i - l,
				y: r + a
			} }), l > 0 && e.push({ CurveTo: [
				{
					x: n + i - l * d,
					y: r + a
				},
				{
					x: n + i,
					y: r + a - l * d
				},
				{
					x: n + i,
					y: r + a - l
				}
			] }), e.push({ LineTo: {
				x: n + i,
				y: r + c
			} }), c > 0 && e.push({ CurveTo: [
				{
					x: n + i,
					y: r + c * d
				},
				{
					x: n + i - c * d,
					y: r
				},
				{
					x: n + i - c,
					y: r
				}
			] }), e.push("ClosePath");
		}(m, p);
		let h = {
			shape: { Custom: m },
			color: K(this._strokeColor),
			transform: C.getAbcdef(this._ctm)
		};
		t && (h.effect_chain = t), this._shapes.push(h);
	}
	_classifyShape() {
		let e = this._simpleShape;
		return e ? e.kind === "rect" ? xe(e.rect, e.smoothing) : { Ellipse: {
			center_x: e.cx,
			center_y: e.cy,
			rx: e.rx,
			ry: e.ry
		} } : this._pathEls.length === 0 ? null : { Custom: this._pathEls.slice() };
	}
	_strokeDesc() {
		return {
			width: this._lineWidth,
			line_join: "Miter",
			color: K(this._strokeColor),
			align: ye[this._strokeMode],
			cap: "Butt"
		};
	}
	_effectChain(e) {
		let t = this.camera?.scale ?? 1, n = [];
		if (e && this._dropShadowColor.a > 0 && n.push({ DropShadow: {
			position: [this._dropShadowOffsetX * t, this._dropShadowOffsetY * t],
			blur: { Uniform: { size: 2 * this._dropShadowBlur * t } },
			spread: 0,
			color: K(this._dropShadowColor)
		} }), e && this._backgroundBlur > 0) {
			let [e, t] = C.getScale(this._ctm), r = (e + t) / 2;
			n.push({ BackgroundBlur: { blur: { Uniform: { size: 2 * this._backgroundBlur * r } } } });
		}
		if (this._layerBlur > 0 && n.push({ LayerBlur: { blur: { Uniform: { size: 2 * this._layerBlur * t } } } }), e && this._innerShadowColor.a > 0) {
			let [e, r, i, a] = C.getAbcdef(this._ctm), o = this._innerShadowOffsetX, s = this._innerShadowOffsetY;
			n.push({ InnerShadow: {
				position: [e * o + i * s, r * o + a * s],
				blur: { Uniform: { size: 2 * this._innerShadowBlur * t } },
				spread: this._innerShadowSpread * t,
				color: K(this._innerShadowColor)
			} });
		}
		return n.length > 0 ? n : void 0;
	}
	_applyClips(e, t = this._ctm) {
		if (this._clips.length === 0) return e;
		let n = e;
		for (let e of this._clips) {
			let r = C.append(e.inv, t), [i, a, o, s, c, l] = C.getAbcdef(r), u = Math.abs(a) <= 1e-6 * (Math.abs(i) + Math.abs(s)) && Math.abs(o) <= 1e-6 * (Math.abs(i) + Math.abs(s)), d = Se(n);
			if (!d) return n;
			if (!u) {
				ve();
				continue;
			}
			let f = i * d.minX + c, p = i * d.maxX + c, m = s * d.minY + l, h = s * d.maxY + l, g = Math.min(f, p), _ = Math.max(f, p), v = Math.min(m, h), y = Math.max(m, h), b = e.rect, x = Math.max(g, b.x), S = Math.max(v, b.y), w = Math.min(_, b.x + b.w), ee = Math.min(y, b.y + b.h);
			if (x >= w || S >= ee) return "skip";
			if (x === g && S === v && w === _ && ee === y) continue;
			let T = J(n);
			if (!T || i === 0 || s === 0) {
				ve();
				continue;
			}
			let E = (x - c) / i, D = (w - c) / i, O = (S - l) / s, k = (ee - l) / s, A = Math.min(E, D), j = Math.min(O, k), M = Math.abs(D - E), N = Math.abs(k - O), [te, ne, re, ie] = T.radii, P = A !== T.x, F = j !== T.y, I = A + M !== T.x + T.w, ae = j + N !== T.y + T.h, L = Math.min(M, N) / 2;
			n = xe({
				x: A,
				y: j,
				w: M,
				h: N,
				radii: [
					P || F ? 0 : Math.min(te, L),
					I || F ? 0 : Math.min(ne, L),
					I || ae ? 0 : Math.min(re, L),
					P || ae ? 0 : Math.min(ie, L)
				]
			}, 0);
		}
		return n;
	}
	drawText(e, t) {
		let n = this._engineFonts.has(t.font), r = this._fontXPerEm.get(t.font), i = !n && r ? r / V : 1, a = { TextSimple: {
			text: e,
			font_size: t.fontSize * i,
			size: [t.width, t.height],
			horizontal_align: G[t.horizontalAlign] ?? "Left",
			vertical_align: be[t.verticalAlign] ?? "Top",
			line_height: t.lineHeight,
			letter_spacing: t.letterSpacing,
			...n ? { font_id: t.font } : {}
		} }, o = this._effectChain(!0), s = this._fillColor.a > 0, c = this._strokeColor.a > 0 && this._lineWidth > 0;
		if (s || c || o) {
			let e = C.append(this._ctm, C.translate(C.identity(), t.x, t.y));
			if (this._applyClips(a, e) !== "skip") {
				let t = {
					shape: a,
					color: s ? K(this._fillColor) : [
						0,
						0,
						0,
						0
					],
					transform: C.getAbcdef(e)
				};
				c && (t.stroke = this._strokeDesc()), o && (t.effect_chain = o), this._shapes.push(t);
			}
		}
		return { height: this._measureTextHeight(e, t) };
	}
	_measureTextHeight(e, t) {
		let n = `${t.font}|${t.fontSize}|${t.lineHeight}|${t.letterSpacing}|${t.width}|${e}`, r = this._measureCache.get(n);
		if (r !== void 0) return r;
		let i = 0, a = this._engine;
		if (a && !this._crashed && this._fontsFlushed.has(t.font)) try {
			let [, n] = a.scene.measureTextNaturalSize({
				size: [t.width, t.height],
				text: e,
				fontSize: t.fontSize,
				horizontalAlign: G[t.horizontalAlign] ?? "Left",
				verticalAlign: be[t.verticalAlign] ?? "Top",
				lineHeight: t.lineHeight,
				letterSpacing: t.letterSpacing,
				textTransform: "None",
				font: t.font,
				version: 0,
				autoSize: "None",
				truncate: "None"
			});
			i = n;
		} catch {}
		if (!(i > 0)) {
			let n = .55 * t.fontSize + Math.max(0, t.letterSpacing), r = Math.max(1, Math.floor(t.width / n)), a = 0;
			for (let t of e.split("\n")) a += Math.max(1, Math.ceil(t.length / r));
			i = a * t.fontSize * t.lineHeight;
		}
		return this._measureCache.size > 512 && this._measureCache.clear(), this._measureCache.set(n, i), i;
	}
	clear() {
		this._shapes = [], this._ctm = C.identity(), this._stack.length = 0, this._clips.length = 0;
	}
	render() {
		let e = this._engine;
		if (!e || this._crashed) return;
		let t = JSON.stringify(this._shapes);
		t !== this._lastPushedJSON && (this._guard(() => e.scene.updateUiShapes(this._shapes)), this._lastPushedJSON = t), this._guard(() => e.onFrame());
	}
}, ye = {
	inside: "Inside",
	outside: "Outside",
	center: "Center"
}, G = {
	1: "Left",
	2: "Right",
	3: "Center",
	4: "Justify"
}, be = {
	1: "Top",
	2: "Center",
	3: "Bottom"
};
function K({ r: e, g: t, b: n, a: r }) {
	return [
		e,
		t,
		n,
		r
	];
}
function q(e) {
	for (let t = 0; t < e.length; t++) if (e[t] !== void 0 && !Number.isFinite(e[t])) return !1;
	return !0;
}
function xe(e, t) {
	let [n, r, i, a] = e.radii;
	return n === 0 && r === 0 && i === 0 && a === 0 ? { Rectangle: {
		x: e.x,
		y: e.y,
		width: e.w,
		height: e.h
	} } : { RoundedRectangle: {
		x: e.x,
		y: e.y,
		width: e.w,
		height: e.h,
		radius: [
			n,
			r,
			i,
			a
		],
		corner_smoothing: t
	} };
}
function J(e) {
	if ("Rectangle" in e) {
		let t = e.Rectangle;
		return {
			x: t.x,
			y: t.y,
			w: t.width,
			h: t.height,
			radii: [
				0,
				0,
				0,
				0
			]
		};
	}
	if ("RoundedRectangle" in e) {
		let t = e.RoundedRectangle;
		return {
			x: t.x,
			y: t.y,
			w: t.width,
			h: t.height,
			radii: [
				t.radius[0],
				t.radius[1],
				t.radius[2],
				t.radius[3]
			]
		};
	}
	return null;
}
function Se(e) {
	let t = J(e);
	if (t) return {
		minX: t.x,
		minY: t.y,
		maxX: t.x + t.w,
		maxY: t.y + t.h
	};
	if ("Ellipse" in e) {
		let t = e.Ellipse;
		return {
			minX: t.center_x - t.rx,
			minY: t.center_y - t.ry,
			maxX: t.center_x + t.rx,
			maxY: t.center_y + t.ry
		};
	}
	if ("TextSimple" in e) {
		let t = e.TextSimple;
		return {
			minX: 0,
			minY: 0,
			maxX: t.size[0],
			maxY: t.size[1]
		};
	}
	if ("Custom" in e) {
		let t = 1 / 0, n = 1 / 0, r = -1 / 0, i = -1 / 0, a = (e) => {
			e.x < t && (t = e.x), e.y < n && (n = e.y), e.x > r && (r = e.x), e.y > i && (i = e.y);
		};
		for (let t of e.Custom) t !== "ClosePath" && ("MoveTo" in t ? a(t.MoveTo) : "LineTo" in t ? a(t.LineTo) : "QuadTo" in t ? t.QuadTo.forEach(a) : "CurveTo" in t && t.CurveTo.forEach(a));
		return t === 1 / 0 ? null : {
			minX: t,
			minY: n,
			maxX: r,
			maxY: i
		};
	}
	return null;
}
function Ce(e, t) {
	let { x: n, y: r, w: i, h: a } = t, o = Math.min(i, a) / 2, [s, c, l, u] = t.radii.map((e) => Math.max(0, Math.min(e, o)));
	if (s === 0 && c === 0 && l === 0 && u === 0) return void e.push({ MoveTo: {
		x: n,
		y: r
	} }, { LineTo: {
		x: n + i,
		y: r
	} }, { LineTo: {
		x: n + i,
		y: r + a
	} }, { LineTo: {
		x: n,
		y: r + a
	} }, "ClosePath");
	let d = 1 - _e;
	e.push({ MoveTo: {
		x: n + s,
		y: r
	} }), e.push({ LineTo: {
		x: n + i - c,
		y: r
	} }), c > 0 && e.push({ CurveTo: [
		{
			x: n + i - c * d,
			y: r
		},
		{
			x: n + i,
			y: r + c * d
		},
		{
			x: n + i,
			y: r + c
		}
	] }), e.push({ LineTo: {
		x: n + i,
		y: r + a - l
	} }), l > 0 && e.push({ CurveTo: [
		{
			x: n + i,
			y: r + a - l * d
		},
		{
			x: n + i - l * d,
			y: r + a
		},
		{
			x: n + i - l,
			y: r + a
		}
	] }), e.push({ LineTo: {
		x: n + u,
		y: r + a
	} }), u > 0 && e.push({ CurveTo: [
		{
			x: n + u * d,
			y: r + a
		},
		{
			x: n,
			y: r + a - u * d
		},
		{
			x: n,
			y: r + a - u
		}
	] }), e.push({ LineTo: {
		x: n,
		y: r + s
	} }), s > 0 && e.push({ CurveTo: [
		{
			x: n,
			y: r + s * d
		},
		{
			x: n + s * d,
			y: r
		},
		{
			x: n + s,
			y: r
		}
	] }), e.push("ClosePath");
}
function we({ constraints: e, newParentWidth: t, newParentHeight: n, initialParentWidth: r, initialParentHeight: i, objectInitialWidth: a, objectInitialHeight: o, objectInitialPosition: s }) {
	let { horizontalConstraint: c, verticalConstraint: l } = e, u = t - r, d = n - i, f = a, p = o, m = s[0], h = s[1];
	if (c !== 0) {
		if (c === 1) m += u;
		else if (c === 3) m += u / 2;
		else if (c === 2) f = Math.max(1, f + u);
		else if (c === 4) {
			let e = t / r;
			f *= e, m *= e;
		}
	}
	if (l !== 0) {
		if (l === 1) h += d;
		else if (l === 3) h += d / 2;
		else if (l === 2) p = Math.max(1, p + d);
		else if (l === 4) {
			let e = n / i;
			p *= e, h *= e;
		}
	}
	return {
		width: f,
		height: p,
		position: [m, h]
	};
}
n(v(), 1);
//#endregion
export { de as a, oe as c, ae as d, we as f, I as i, C as l, b as m, me as n, F as o, x as p, P as r, se as s, le as t, W as u };
