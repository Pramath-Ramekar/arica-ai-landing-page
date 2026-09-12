import { t as e } from "./rolldown-runtime-BsTNS5n0.js";
import { n as t, t as n } from "./dist-BacNt4J4.js";
import { n as r, t as i } from "./jsx-runtime-CvRyLqAF.js";
//#region node_modules/scheduler/cjs/scheduler.production.js
var a = /* @__PURE__ */ e(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function ee(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, te || (te = !0, se());
			else {
				var t = n(l);
				t !== null && le(ee, t.startTime - e);
			}
		}
	}
	var te = !1, ne = -1, re = 5, ie = -1;
	function ae() {
		return g ? !0 : !(e.unstable_now() - ie < re);
	}
	function oe() {
		if (g = !1, te) {
			var t = e.unstable_now();
			ie = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(ne), ne = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && ae());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && le(ee, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? se() : te = !1;
			}
		}
	}
	var se;
	if (typeof y == "function") se = function() {
		y(oe);
	};
	else if (typeof MessageChannel < "u") {
		var x = new MessageChannel(), ce = x.port2;
		x.port1.onmessage = oe, se = function() {
			ce.postMessage(null);
		};
	} else se = function() {
		_(oe, 0);
	};
	function le(t, n) {
		ne = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(ne), ne = -1) : h = !0, le(ee, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, te || (te = !0, se()))), r;
	}, e.unstable_shouldYield = ae, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), o = /* @__PURE__ */ e(((e) => {
	n(), t.env.NODE_ENV !== "production" && (function() {
		function t() {
			if (ee = !1, ie) {
				var t = e.unstable_now();
				se = t;
				var n = !0;
				try {
					a: {
						y = !1, b && (b = !1, ne(ae), ae = -1), v = !0;
						var a = _;
						try {
							b: {
								for (o(t), g = r(p); g !== null && !(g.expirationTime > t && c());) {
									var u = g.callback;
									if (typeof u == "function") {
										g.callback = null, _ = g.priorityLevel;
										var d = u(g.expirationTime <= t);
										if (t = e.unstable_now(), typeof d == "function") {
											g.callback = d, o(t), n = !0;
											break b;
										}
										g === r(p) && i(p), o(t);
									} else i(p);
									g = r(p);
								}
								if (g !== null) n = !0;
								else {
									var f = r(m);
									f !== null && l(s, f.startTime - t), n = !1;
								}
							}
							break a;
						} finally {
							g = null, _ = a, v = !1;
						}
						n = void 0;
					}
				} finally {
					n ? x() : ie = !1;
				}
			}
		}
		function n(e, t) {
			var n = e.length;
			e.push(t);
			a: for (; 0 < n;) {
				var r = n - 1 >>> 1, i = e[r];
				if (0 < a(i, t)) e[r] = t, e[n] = i, n = r;
				else break a;
			}
		}
		function r(e) {
			return e.length === 0 ? null : e[0];
		}
		function i(e) {
			if (e.length === 0) return null;
			var t = e[0], n = e.pop();
			if (n !== t) {
				e[0] = n;
				a: for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
					var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
					if (0 > a(c, n)) l < i && 0 > a(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
					else if (l < i && 0 > a(u, n)) e[r] = u, e[l] = n, r = l;
					else break a;
				}
			}
			return t;
		}
		function a(e, t) {
			var n = e.sortIndex - t.sortIndex;
			return n === 0 ? e.id - t.id : n;
		}
		function o(e) {
			for (var t = r(m); t !== null;) {
				if (t.callback === null) i(m);
				else if (t.startTime <= e) i(m), t.sortIndex = t.expirationTime, n(p, t);
				else break;
				t = r(m);
			}
		}
		function s(e) {
			if (b = !1, o(e), !y) {
				if (r(p) !== null) y = !0, ie || (ie = !0, x());
				else {
					var t = r(m);
					t !== null && l(s, t.startTime - e);
				}
			}
		}
		function c() {
			return ee ? !0 : !(e.unstable_now() - se < oe);
		}
		function l(t, n) {
			ae = te(function() {
				t(e.unstable_now());
			}, n);
		}
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
			var u = performance;
			e.unstable_now = function() {
				return u.now();
			};
		} else {
			var d = Date, f = d.now();
			e.unstable_now = function() {
				return d.now() - f;
			};
		}
		var p = [], m = [], h = 1, g = null, _ = 3, v = !1, y = !1, b = !1, ee = !1, te = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, re = typeof setImmediate < "u" ? setImmediate : null, ie = !1, ae = -1, oe = 5, se = -1;
		if (typeof re == "function") var x = function() {
			re(t);
		};
		else if (typeof MessageChannel < "u") {
			var ce = new MessageChannel(), le = ce.port2;
			ce.port1.onmessage = t, x = function() {
				le.postMessage(null);
			};
		} else x = function() {
			te(t, 0);
		};
		e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
			e.callback = null;
		}, e.unstable_forceFrameRate = function(e) {
			0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : oe = 0 < e ? Math.floor(1e3 / e) : 5;
		}, e.unstable_getCurrentPriorityLevel = function() {
			return _;
		}, e.unstable_next = function(e) {
			switch (_) {
				case 1:
				case 2:
				case 3:
					var t = 3;
					break;
				default: t = _;
			}
			var n = _;
			_ = t;
			try {
				return e();
			} finally {
				_ = n;
			}
		}, e.unstable_requestPaint = function() {
			ee = !0;
		}, e.unstable_runWithPriority = function(e, t) {
			switch (e) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5: break;
				default: e = 3;
			}
			var n = _;
			_ = e;
			try {
				return t();
			} finally {
				_ = n;
			}
		}, e.unstable_scheduleCallback = function(t, i, a) {
			var o = e.unstable_now();
			switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, t) {
				case 1:
					var c = -1;
					break;
				case 2:
					c = 250;
					break;
				case 5:
					c = 1073741823;
					break;
				case 4:
					c = 1e4;
					break;
				default: c = 5e3;
			}
			return c = a + c, t = {
				id: h++,
				callback: i,
				priorityLevel: t,
				startTime: a,
				expirationTime: c,
				sortIndex: -1
			}, a > o ? (t.sortIndex = a, n(m, t), r(p) === null && t === r(m) && (b ? (ne(ae), ae = -1) : b = !0, l(s, a - o))) : (t.sortIndex = c, n(p, t), y || v || (y = !0, ie || (ie = !0, x()))), t;
		}, e.unstable_shouldYield = c, e.unstable_wrapCallback = function(e) {
			var t = _;
			return function() {
				var n = _;
				_ = t;
				try {
					return e.apply(this, arguments);
				} finally {
					_ = n;
				}
			};
		}, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), s = /* @__PURE__ */ e(((e, r) => {
	n(), r.exports = t.env.NODE_ENV === "production" ? a() : o();
})), c = /* @__PURE__ */ e(((e) => {
	var t = r();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function i() {}
	var a = {
		d: {
			f: i,
			r: function() {
				throw Error(n(522));
			},
			D: i,
			C: i,
			L: i,
			m: i,
			X: i,
			S: i,
			M: i
		},
		p: 0,
		findDOMNode: null
	}, o = Symbol.for("react.portal"), s = Symbol.for("react.recoverable"), c = Symbol.for("react.optimistic_key");
	function l(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: o,
			key: r == null ? null : r === c ? c : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var u = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function d(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, e.browser = function(e) {
		return {
			$$typeof: s,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return l(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = u.T, n = a.p;
		try {
			if (u.T = null, a.p = 2, e) return e();
		} finally {
			u.T = t, a.p = n, a.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, a.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && a.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin), i = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? a.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: i,
				fetchPriority: o
			}) : n === "script" && a.d.X(e, {
				crossOrigin: r,
				integrity: i,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = d(t.as, t.crossOrigin);
					a.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? a.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin);
			a.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = d(t.as, t.crossOrigin);
				a.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else a.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		a.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return u.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return u.H.useHostTransitionStatus();
	}, e.version = "19.3.0";
})), l = /* @__PURE__ */ e(((e) => {
	n(), t.env.NODE_ENV !== "production" && (function() {
		function t() {}
		function n(e) {
			return "" + e;
		}
		function i(e, t, r) {
			var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
			if (i == null) i = null;
			else if (i === p) i = p;
			else {
				try {
					n(i);
					var a = !1;
				} catch {
					a = !0;
				}
				a && (console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object"), n(i)), i = "" + i;
			}
			return {
				$$typeof: d,
				key: i,
				children: e,
				containerInfo: t,
				implementation: r
			};
		}
		function a(e, t) {
			if (e === "font") return "";
			if (typeof t == "string") return t === "use-credentials" ? t : "";
		}
		function o(e) {
			return e === null ? "`null`" : e === void 0 ? "`undefined`" : e === "" ? "an empty string" : "something with type \"" + typeof e + "\"";
		}
		function s(e) {
			return e === null ? "`null`" : e === void 0 ? "`undefined`" : e === "" ? "an empty string" : typeof e == "string" ? JSON.stringify(e) : typeof e == "number" ? "`" + e + "`" : "something with type \"" + typeof e + "\"";
		}
		function c() {
			var e = m.H;
			return e === null && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), e;
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var l = r(), u = {
			d: {
				f: t,
				r: function() {
					throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.");
				},
				D: t,
				C: t,
				L: t,
				m: t,
				X: t,
				S: t,
				M: t
			},
			p: 0,
			findDOMNode: null
		}, d = Symbol.for("react.portal"), f = Symbol.for("react.recoverable"), p = Symbol.for("react.optimistic_key"), m = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
		typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u, e.browser = function(e) {
			return {
				$$typeof: f,
				_reason: e
			};
		}, e.createPortal = function(e, t) {
			var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error("Target container is not a DOM element.");
			return i(e, t, null, n);
		}, e.flushSync = function(e) {
			var t = m.T, n = u.p;
			try {
				if (m.T = null, u.p = 2, e) return e();
			} finally {
				m.T = t, u.p = n, u.d.f() && console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.");
			}
		}, e.preconnect = function(e, t) {
			typeof e == "string" && e ? t != null && typeof t != "object" ? console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.", s(t)) : t != null && typeof t.crossOrigin != "string" && console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.", o(t.crossOrigin)) : console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", o(e)), typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, u.d.C(e, t));
		}, e.prefetchDNS = function(e) {
			if (typeof e != "string" || !e) console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", o(e));
			else if (1 < arguments.length) {
				var t = arguments[1];
				typeof t == "object" && t.hasOwnProperty("crossOrigin") ? console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", s(t)) : console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.", s(t));
			}
			typeof e == "string" && u.d.D(e);
		}, e.preinit = function(e, t) {
			if (typeof e == "string" && e ? typeof t != "object" || !t ? console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.", s(t)) : t.as !== "style" && t.as !== "script" && console.error("ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are \"style\" and \"script\".", s(t.as)) : console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.", o(e)), typeof e == "string" && t && typeof t.as == "string") {
				var n = t.as, r = a(n, t.crossOrigin), i = typeof t.integrity == "string" ? t.integrity : void 0, c = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
				n === "style" ? u.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
					crossOrigin: r,
					integrity: i,
					fetchPriority: c
				}) : n === "script" && u.d.X(e, {
					crossOrigin: r,
					integrity: i,
					fetchPriority: c,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0
				});
			}
		}, e.preinitModule = function(e, t) {
			var n = "";
			if (typeof e == "string" && e || (n += " The `href` argument encountered was " + o(e) + "."), t !== void 0 && typeof t != "object" ? n += " The `options` argument encountered was " + o(t) + "." : t && "as" in t && t.as !== "script" && (n += " The `as` option encountered was " + s(t.as) + "."), n) console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s", n);
			else switch (n = t && typeof t.as == "string" ? t.as : "script", n) {
				case "script": break;
				default: n = s(n), console.error("ReactDOM.preinitModule(): Currently the only supported \"as\" type for this function is \"script\" but received \"%s\" instead. This warning was generated for `href` \"%s\". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)", n, e);
			}
			typeof e == "string" && (typeof t == "object" && t ? (t.as == null || t.as === "script") && (n = a(t.as, t.crossOrigin), u.d.M(e, {
				crossOrigin: n,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
			})) : t ?? u.d.M(e));
		}, e.preload = function(e, t) {
			var n = "";
			if (typeof e == "string" && e || (n += " The `href` argument encountered was " + o(e) + "."), typeof t != "object" || !t ? n += " The `options` argument encountered was " + o(t) + "." : typeof t.as == "string" && t.as || (n += " The `as` option encountered was " + o(t.as) + "."), n && console.error("ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel=\"preload\" as=\"...\" />` tag.%s", n), typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
				n = t.as;
				var r = a(n, t.crossOrigin);
				u.d.L(e, n, {
					crossOrigin: r,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					type: typeof t.type == "string" ? t.type : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
					referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
					imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
					imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
					media: typeof t.media == "string" ? t.media : void 0
				});
			}
		}, e.preloadModule = function(e, t) {
			var n = "";
			typeof e == "string" && e || (n += " The `href` argument encountered was " + o(e) + "."), t !== void 0 && typeof t != "object" ? n += " The `options` argument encountered was " + o(t) + "." : t && "as" in t && typeof t.as != "string" && (n += " The `as` option encountered was " + o(t.as) + "."), n && console.error("ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel=\"modulepreload\" as=\"...\" />` tag.%s", n), typeof e == "string" && (t ? (n = a(t.as, t.crossOrigin), u.d.m(e, {
				as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
				crossOrigin: n,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
			})) : u.d.m(e));
		}, e.requestFormReset = function(e) {
			u.d.r(e);
		}, e.unstable_batchedUpdates = function(e, t) {
			return e(t);
		}, e.useFormState = function(e, t, n) {
			return c().useFormState(e, t, n);
		}, e.useFormStatus = function() {
			return c().useHostTransitionStatus();
		}, e.version = "19.3.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), u = /* @__PURE__ */ e(((e, r) => {
	n();
	function i() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
			if (t.env.NODE_ENV !== "production") throw Error("^_^");
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
			} catch (e) {
				console.error(e);
			}
		}
	}
	t.env.NODE_ENV === "production" ? (i(), r.exports = c()) : r.exports = l();
})), d = /* @__PURE__ */ e(((e) => {
	n();
	var i = s(), a = r(), o = u();
	function c(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function l(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function d(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function f(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function p(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function m(e) {
		if (d(e) !== e) throw Error(c(188));
	}
	function h(e) {
		var t = e.alternate;
		if (!t) {
			if (t = d(e), t === null) throw Error(c(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var i = n.return;
			if (i === null) break;
			var a = i.alternate;
			if (a === null) {
				if (r = i.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (i.child === a.child) {
				for (a = i.child; a;) {
					if (a === n) return m(i), e;
					if (a === r) return m(i), t;
					a = a.sibling;
				}
				throw Error(c(188));
			}
			if (n.return !== r.return) n = i, r = a;
			else {
				for (var o = !1, s = i.child; s;) {
					if (s === n) {
						o = !0, n = i, r = a;
						break;
					}
					if (s === r) {
						o = !0, r = i, n = a;
						break;
					}
					s = s.sibling;
				}
				if (!o) {
					for (s = a.child; s;) {
						if (s === n) {
							o = !0, n = a, r = i;
							break;
						}
						if (s === r) {
							o = !0, r = a, n = i;
							break;
						}
						s = s.sibling;
					}
					if (!o) throw Error(c(189));
				}
			}
			if (n.alternate !== r) throw Error(c(190));
		}
		if (n.tag !== 3) throw Error(c(188));
		return n.stateNode.current === n ? e : t;
	}
	function g(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = g(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function _(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && _(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function v(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function y(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function b(e) {
		var t = [null, null], n = v(e);
		return n === null || ee(t, e, n.child, { foundSelf: !1 }), t;
	}
	function ee(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && ee(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function te(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(c(559));
		}
	}
	var ne = null, re = null;
	function ie(e, t, n) {
		return e === n || e === t && (ne = e, !0);
	}
	function ae(e, t, n) {
		return e === n ? (re = e, !1) : e === t && (re !== null && (ne = e), !0);
	}
	function oe(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function se(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var x = Object.assign, ce = Symbol.for("react.element"), le = Symbol.for("react.transitional.element"), ue = Symbol.for("react.portal"), de = Symbol.for("react.fragment"), fe = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), me = Symbol.for("react.consumer"), he = Symbol.for("react.context"), ge = Symbol.for("react.forward_ref"), _e = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), ye = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), be = Symbol.for("react.activity"), xe = Symbol.for("react.legacy_hidden"), Se = Symbol.for("react.memo_cache_sentinel"), Ce = Symbol.for("react.view_transition"), we = Symbol.for("react.recoverable"), Te = Symbol.iterator;
	function Ee(e) {
		return typeof e != "object" || !e ? null : (e = Te && e[Te] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var De = Symbol.for("react.client.reference");
	function Oe(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === De ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case de: return "Fragment";
			case pe: return "Profiler";
			case fe: return "StrictMode";
			case _e: return "Suspense";
			case ve: return "SuspenseList";
			case be: return "Activity";
			case Ce: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case ue: return "Portal";
			case he: return e.displayName || "Context";
			case me: return (e._context.displayName || "Context") + ".Consumer";
			case ge:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case ye: return t = e.displayName || null, t === null ? Oe(e.type) || "Memo" : t;
			case S:
				t = e._payload, e = e._init;
				try {
					return Oe(e(t));
				} catch {}
		}
		return null;
	}
	var ke = Array.isArray, C = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ae = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, je = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, Me = [], Ne = -1;
	function Pe(e) {
		return { current: e };
	}
	function Fe(e) {
		0 > Ne || (e.current = Me[Ne], Me[Ne] = null, Ne--);
	}
	function Ie(e, t) {
		Ne++, Me[Ne] = e.current, e.current = t;
	}
	var Le = Pe(null), Re = Pe(null), w = Pe(null), ze = Pe(null);
	function Be(e, t) {
		switch (Ie(w, t), Ie(Re, e), Ie(Le, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? Dp(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = Dp(t), e = Op(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		Fe(Le), Ie(Le, e);
	}
	function Ve() {
		Fe(Le), Fe(Re), Fe(w);
	}
	function He(e) {
		var t = e.memoizedState;
		t !== null && (Sh._currentValue = t.memoizedState, Ie(ze, e)), t = Le.current;
		var n = Op(t, e.type);
		t !== n && (Ie(Re, e), Ie(Le, n));
	}
	function Ue(e) {
		Re.current === e && (Fe(Le), Fe(Re)), ze.current === e && (Fe(ze), Sh._currentValue = je);
	}
	var We, Ge;
	function Ke(e) {
		if (We === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			We = t && t[1] || "", Ge = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + We + e + Ge;
	}
	var qe = !1;
	function Je(e, t) {
		if (!e || qe) return "";
		qe = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			qe = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Ke(n) : "";
	}
	function Ye(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Ke(e.type);
			case 16: return Ke("Lazy");
			case 13: return e.child !== t && t !== null ? Ke("Suspense Fallback") : Ke("Suspense");
			case 19: return Ke("SuspenseList");
			case 0:
			case 15: return Je(e.type, !1);
			case 11: return Je(e.type.render, !1);
			case 1: return Je(e.type, !0);
			case 31: return Ke("Activity");
			case 30: return Ke("ViewTransition");
			default: return "";
		}
	}
	function Xe(e) {
		try {
			var t = "", n = null;
			do
				t += Ye(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Ze = Object.prototype.hasOwnProperty, Qe = i.unstable_scheduleCallback, $e = i.unstable_cancelCallback, et = i.unstable_shouldYield, tt = i.unstable_requestPaint, nt = i.unstable_now, rt = i.unstable_getCurrentPriorityLevel, it = i.unstable_ImmediatePriority, at = i.unstable_UserBlockingPriority, ot = i.unstable_NormalPriority, st = i.unstable_LowPriority, ct = i.unstable_IdlePriority, lt = i.log, ut = i.unstable_setDisableYieldValue, dt = null, ft = null;
	function pt(e) {
		if (typeof lt == "function" && ut(e), ft && typeof ft.setStrictMode == "function") try {
			ft.setStrictMode(dt, e);
		} catch {}
	}
	var mt = Math.clz32 ? Math.clz32 : _t, ht = Math.log, gt = Math.LN2;
	function _t(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (ht(e) / gt | 0) | 0;
	}
	var vt = 256, yt = 262144, bt = 4194304;
	function xt(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function St(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = xt(n))) : i = xt(o) : i = xt(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = xt(n))) : i = xt(o)) : i = xt(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function Ct(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function wt(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - mt(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function Tt(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function Et() {
		var e = bt;
		return bt <<= 1, !(bt & 62914560) && (bt = 4194304), e;
	}
	function Dt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function Ot(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function kt(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - mt(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && At(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function At(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - mt(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function jt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - mt(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function Mt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : Nt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function Nt(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function Pt(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function Ft() {
		var e = Ae.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Rh(e.type)) : e;
	}
	function It(e, t) {
		var n = Ae.p;
		try {
			return Ae.p = e, t();
		} finally {
			Ae.p = n;
		}
	}
	var Lt = Math.random().toString(36).slice(2), Rt = "__reactFiber$" + Lt, zt = "__reactProps$" + Lt, Bt = "__reactContainer$" + Lt, Vt = "__reactEvents$" + Lt, Ht = "__reactListeners$" + Lt, Ut = "__reactHandles$" + Lt, Wt = "__reactResources$" + Lt, Gt = "__reactMarker$" + Lt, Kt = "__reactLoad$" + Lt;
	function qt(e) {
		delete e[Rt], delete e[zt], delete e[Ht], delete e[Ut];
	}
	function Jt(e) {
		var t;
		if (t = e[Rt]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Bt] || n[Rt]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Om(e); e !== null;) {
					if (n = e[Rt]) return n;
					e = Om(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Yt(e) {
		if (e = e[Rt] || e[Bt]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function Xt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(c(33));
	}
	function Zt(e) {
		var t = e[Wt];
		return t ||= e[Wt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Qt(e) {
		e[Gt] = !0;
	}
	function $t(e) {
		e[Kt] = void 0;
	}
	var en = /* @__PURE__ */ new Set(), tn = {};
	function nn(e, t) {
		rn(e, t), rn(e + "Capture", t);
	}
	function rn(e, t) {
		for (tn[e] = t, e = 0; e < t.length; e++) en.add(t[e]);
	}
	var an = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), on = {}, sn = {};
	function cn(e) {
		return Ze.call(sn, e) ? !0 : Ze.call(on, e) ? !1 : an.test(e) ? sn[e] = !0 : (on[e] = !0, !1);
	}
	var T = !1;
	function ln() {
		var e = T;
		return T = !1, e;
	}
	function un(e, t, n) {
		if (cn(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function dn(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function fn(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function pn(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function mn(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function hn(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function gn(e) {
		if (!e._valueTracker) {
			var t = mn(e) ? "checked" : "value";
			e._valueTracker = hn(e, t, "" + e[t]);
		}
	}
	function _n(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = mn(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var vn = /[\n"\\]/g;
	function yn(e) {
		return e.replace(vn, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function bn(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + pn(t)) : e.value !== "" + pn(t) && (e.value = "" + pn(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : Sn(e, pn(n)) : o === "number" && e.value == t ? Sn(e, pn(e.value)) : Sn(e, pn(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + pn(s) : e.removeAttribute("name");
	}
	function xn(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				gn(e);
				return;
			}
			n = n == null ? "" : "" + pn(n), t = t == null ? n : "" + pn(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), gn(e);
	}
	function Sn(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function Cn(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + pn(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function wn(e, t, n) {
		if (t != null && (t = "" + pn(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + pn(n);
	}
	function Tn(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(c(92));
				if (ke(r)) {
					if (1 < r.length) throw Error(c(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = pn(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), gn(e);
	}
	function En(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var Dn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function On(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Dn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function kn(e, t, n) {
		if (t != null && typeof t != "object") throw Error(c(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", T = !0);
			for (var i in t) r = t[i], t.hasOwnProperty(i) && n[i] !== r && (On(e, i, r), T = !0);
		} else for (var a in t) t.hasOwnProperty(a) && On(e, a, t[a]);
	}
	function An(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var jn = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), Mn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Nn(e) {
		return Mn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function Pn() {}
	var Fn = null;
	function In(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var Ln = null, Rn = null;
	function zn(e) {
		var t = Yt(e);
		if (t && (e = t.stateNode)) {
			var n = e[zt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (bn(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + yn("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var i = r[zt] || null;
								if (!i) throw Error(c(90));
								bn(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && _n(r);
					}
					break a;
				case "textarea":
					wn(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && Cn(e, !!n.multiple, t, !1);
			}
		}
	}
	var Bn = !1;
	function Vn(e, t, n) {
		if (Bn) return e(t, n);
		Bn = !0;
		try {
			return e(t);
		} finally {
			if (Bn = !1, (Ln !== null || Rn !== null) && (ef(), Ln && (t = Ln, e = Rn, Rn = Ln = null, zn(t), e))) for (t = 0; t < e.length; t++) zn(e[t]);
		}
	}
	function Hn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[zt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(c(231, t, typeof n));
		return n;
	}
	var Un = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), Wn = !1;
	if (Un) try {
		var Gn = {};
		Object.defineProperty(Gn, "passive", { get: function() {
			Wn = !0;
		} }), window.addEventListener("test", Gn, Gn), window.removeEventListener("test", Gn, Gn);
	} catch {
		Wn = !1;
	}
	var Kn = null, qn = null, Jn = null;
	function Yn() {
		if (Jn) return Jn;
		var e, t = qn, n = t.length, r, i = "value" in Kn ? Kn.value : Kn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Jn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function Xn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Zn() {
		return !0;
	}
	function Qn() {
		return !1;
	}
	function $n(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Zn : Qn, this.isPropagationStopped = Qn, this;
		}
		return x(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Zn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Zn);
			},
			persist: function() {},
			isPersistent: Zn
		}), t;
	}
	var er = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, tr = $n(er), nr = x({}, er, {
		view: 0,
		detail: 0
	}), rr = $n(nr), ir, ar, or, sr = x({}, nr, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: vr,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== or && (or && e.type === "mousemove" ? (ir = e.screenX - or.screenX, ar = e.screenY - or.screenY) : ar = ir = 0, or = e), ir);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : ar;
		}
	}), cr = $n(sr), lr = $n(x({}, sr, { dataTransfer: 0 })), ur = $n(x({}, nr, { relatedTarget: 0 })), dr = $n(x({}, er, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), fr = $n(x({}, er, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), pr = $n(x({}, er, { data: 0 })), mr = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, hr = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, gr = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function _r(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = gr[e]) ? !!t[e] : !1;
	}
	function vr() {
		return _r;
	}
	var yr = $n(x({}, nr, {
		key: function(e) {
			if (e.key) {
				var t = mr[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Xn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hr[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: vr,
		charCode: function(e) {
			return e.type === "keypress" ? Xn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Xn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), br = $n(x({}, sr, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), xr = $n(x({}, er, { submitter: 0 })), Sr = $n(x({}, nr, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: vr
	})), Cr = $n(x({}, er, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), wr = $n(x({}, sr, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), Tr = $n(x({}, er, {
		newState: 0,
		oldState: 0,
		source: 0
	})), Er = [
		9,
		13,
		27,
		32
	], Dr = Un && "CompositionEvent" in window, Or = null;
	Un && "documentMode" in document && (Or = document.documentMode);
	var kr = Un && "TextEvent" in window && !Or, Ar = Un && (!Dr || Or && 8 < Or && 11 >= Or), jr = " ", Mr = !1;
	function Nr(e, t) {
		switch (e) {
			case "keyup": return Er.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function Pr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var Fr = !1;
	function Ir(e, t) {
		switch (e) {
			case "compositionend": return Pr(t);
			case "keypress": return t.which === 32 ? (Mr = !0, jr) : null;
			case "textInput": return e = t.data, e === jr && Mr ? null : e;
			default: return null;
		}
	}
	function Lr(e, t) {
		if (Fr) return e === "compositionend" || !Dr && Nr(e, t) ? (e = Yn(), Jn = qn = Kn = null, Fr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return Ar && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var Rr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function zr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Rr[e.type] : t === "textarea";
	}
	function Br(e, t, n, r) {
		Ln ? Rn ? Rn.push(r) : Rn = [r] : Ln = r, t = up(t, "onChange"), 0 < t.length && (n = new tr("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var Vr = null, Hr = null;
	function Ur(e) {
		rp(e, 0);
	}
	function Wr(e) {
		if (_n(Xt(e))) return e;
	}
	function Gr(e, t) {
		if (e === "change") return t;
	}
	var Kr = !1;
	if (Un) {
		var qr;
		if (Un) {
			var Jr = "oninput" in document;
			if (!Jr) {
				var Yr = document.createElement("div");
				Yr.setAttribute("oninput", "return;"), Jr = typeof Yr.oninput == "function";
			}
			qr = Jr;
		} else qr = !1;
		Kr = qr && (!document.documentMode || 9 < document.documentMode);
	}
	function Xr() {
		Vr && (Vr.detachEvent("onpropertychange", Zr), Hr = Vr = null);
	}
	function Zr(e) {
		if (e.propertyName === "value" && Wr(Hr)) {
			var t = [];
			Br(t, Hr, e, In(e)), Vn(Ur, t);
		}
	}
	function Qr(e, t, n) {
		e === "focusin" ? (Xr(), Vr = t, Hr = n, Vr.attachEvent("onpropertychange", Zr)) : e === "focusout" && Xr();
	}
	function $r(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return Wr(Hr);
	}
	function ei(e, t) {
		if (e === "click") return Wr(t);
	}
	function ti(e, t) {
		if (e === "input" || e === "change") return Wr(t);
	}
	function ni(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var ri = typeof Object.is == "function" ? Object.is : ni;
	function ii(e, t) {
		if (ri(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Ze.call(t, i) || !ri(e[i], t[i])) return !1;
		}
		return !0;
	}
	function ai(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function oi(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function si(e, t) {
		var n = oi(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = oi(n);
		}
	}
	function ci(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ci(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function li(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = ai(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = ai(e.document);
		}
		return t;
	}
	function ui(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var di = Un && "documentMode" in document && 11 >= document.documentMode, fi = null, pi = null, mi = null, hi = !1;
	function gi(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		hi || fi == null || fi !== ai(r) || (r = fi, "selectionStart" in r && ui(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), mi && ii(mi, r) || (mi = r, r = up(pi, "onSelect"), 0 < r.length && (t = new tr("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = fi)));
	}
	function _i(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var vi = {
		animationend: _i("Animation", "AnimationEnd"),
		animationiteration: _i("Animation", "AnimationIteration"),
		animationstart: _i("Animation", "AnimationStart"),
		transitionrun: _i("Transition", "TransitionRun"),
		transitionstart: _i("Transition", "TransitionStart"),
		transitioncancel: _i("Transition", "TransitionCancel"),
		transitionend: _i("Transition", "TransitionEnd")
	}, yi = {}, bi = {};
	Un && (bi = document.createElement("div").style, "AnimationEvent" in window || (delete vi.animationend.animation, delete vi.animationiteration.animation, delete vi.animationstart.animation), "TransitionEvent" in window || delete vi.transitionend.transition);
	function xi(e) {
		if (yi[e]) return yi[e];
		if (!vi[e]) return e;
		var t = vi[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in bi) return yi[e] = t[n];
		return e;
	}
	var Si = xi("animationend"), Ci = xi("animationiteration"), wi = xi("animationstart"), Ti = xi("transitionrun"), Ei = xi("transitionstart"), Di = xi("transitioncancel"), Oi = xi("transitionend"), ki = /* @__PURE__ */ new Map(), Ai = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	Ai.push("scrollEnd");
	function ji(e, t) {
		ki.set(e, t), nn(t, [e]);
	}
	var Mi = 0;
	function Ni(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = Fd.identifierPrefix;
		var n = Mi++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function Pi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Ud;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function Fi(e, t) {
		return e = Pi(e), t = Pi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var Ii = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var n = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(n)) return;
		} else if (typeof t == "object" && typeof t.emit == "function") {
			t.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, Li = [], Ri = 0, zi = 0;
	function Bi() {
		for (var e = Ri, t = zi = Ri = 0; t < e;) {
			var n = Li[t];
			Li[t++] = null;
			var r = Li[t];
			Li[t++] = null;
			var i = Li[t];
			Li[t++] = null;
			var a = Li[t];
			if (Li[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && Wi(n, i, a);
		}
	}
	function Vi(e, t, n, r) {
		Li[Ri++] = e, Li[Ri++] = t, Li[Ri++] = n, Li[Ri++] = r, zi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function Hi(e, t, n, r) {
		return Vi(e, t, n, r), Gi(e);
	}
	function Ui(e, t) {
		return Vi(e, null, null, t), Gi(e);
	}
	function Wi(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - mt(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Gi(e) {
		if (50 < Wd) throw Wd = 0, Gd = null, Error(c(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Ki = {};
	function qi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Ji(e, t, n, r) {
		return new qi(e, t, n, r);
	}
	function Yi(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Xi(e, t) {
		var n = e.alternate;
		return n === null ? (n = Ji(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Zi(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function Qi(e, t, n, r, i, a) {
		var o = 0;
		if (r = e, typeof r == "function") Yi(r) && (o = 1);
		else if (typeof r == "string") o = ch(e, n, Le.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case be: return e = Ji(31, n, t, i), e.elementType = be, e.lanes = a, e;
			case de: return $i(n.children, i, a, t);
			case fe:
				o = 8, i |= 24;
				break;
			case pe: return e = Ji(12, n, t, i | 2), e.elementType = pe, e.lanes = a, e;
			case _e: return e = Ji(13, n, t, i), e.elementType = _e, e.lanes = a, e;
			case ve: return e = Ji(19, n, t, i), e.elementType = ve, e.lanes = a, e;
			case xe:
			case Ce: return e = i | 32, e = Ji(30, n, t, e), e.elementType = Ce, e.lanes = a, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case he:
						o = 10;
						break a;
					case me:
						o = 9;
						break a;
					case ge:
						o = 11;
						break a;
					case ye:
						o = 14;
						break a;
					case S:
						o = 16, r = null;
						break a;
				}
				o = 29, n = Error(c(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = Ji(o, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
	}
	function $i(e, t, n, r) {
		return e = Ji(7, e, r, t), e.lanes = n, e;
	}
	function ea(e, t, n) {
		return e = Ji(6, e, null, t), e.lanes = n, e;
	}
	function ta(e) {
		var t = Ji(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function na(e, t, n) {
		return t = Ji(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var ra = /* @__PURE__ */ new WeakMap();
	function ia(e, t) {
		if (typeof e == "object" && e) {
			var n = ra.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Xe(t)
			}, ra.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Xe(t)
		};
	}
	var aa = [], oa = 0, sa = null, ca = 0, la = [], ua = 0, da = null, fa = 1, pa = "";
	function ma(e, t) {
		aa[oa++] = ca, aa[oa++] = sa, sa = e, ca = t;
	}
	function ha(e, t, n) {
		la[ua++] = fa, la[ua++] = pa, la[ua++] = da, da = e;
		var r = fa;
		e = pa;
		var i = 32 - mt(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - mt(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, fa = 1 << 32 - mt(t) + i | n << i | r, pa = a + e;
		} else fa = 1 << a | n << i | r, pa = e;
	}
	function ga(e) {
		e.return !== null && (ma(e, 1), ha(e, 1, 0));
	}
	function _a(e) {
		for (; e === sa;) sa = aa[--oa], aa[oa] = null, ca = aa[--oa], aa[oa] = null;
		for (; e === da;) da = la[--ua], la[ua] = null, pa = la[--ua], la[ua] = null, fa = la[--ua], la[ua] = null;
	}
	function va(e, t) {
		la[ua++] = fa, la[ua++] = pa, la[ua++] = da, fa = t.id, pa = t.overflow, da = e;
	}
	var ya = null, ba = null, E = !1, xa = null, Sa = !1, Ca = Error(c(519));
	function wa(e) {
		throw Aa(ia(Error(c(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), Ca;
	}
	function Ta(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[Rt] = e, t[zt] = r, n) {
			case "dialog":
				R("cancel", t), R("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				R("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < tp.length; n++) R(tp[n], t);
				break;
			case "source":
				R("error", t);
				break;
			case "img":
			case "image":
			case "link":
				R("error", t), R("load", t);
				break;
			case "details":
				R("toggle", t);
				break;
			case "input":
				R("invalid", t), xn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				R("invalid", t);
				break;
			case "textarea": R("invalid", t), Tn(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || gp(t.textContent, n) ? (r.popover != null && (R("beforetoggle", t), R("toggle", t)), r.onScroll != null && R("scroll", t), r.onScrollEnd != null && R("scrollend", t), r.onClick != null && (t.onclick = Pn), t = !0) : t = !1, t || wa(e, !0);
	}
	function Ea(e) {
		for (ya = e.return; ya;) switch (ya.tag) {
			case 5:
			case 31:
			case 13:
				Sa = !1;
				return;
			case 27:
			case 3:
				Sa = !0;
				return;
			default: ya = ya.return;
		}
	}
	function Da(e) {
		if (e !== ya) return !1;
		if (!E) return Ea(e), E = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || Ap(e.type, e.memoizedProps)), n = !n), n && ba && wa(e), Ea(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(c(317));
			ba = Dm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(c(317));
			ba = Dm(e);
		} else t === 27 ? (t = ba, zp(e.type) ? (e = z, z = null, ba = e) : ba = t) : ba = ya ? Em(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Oa() {
		ba = ya = null, E = !1;
	}
	function ka() {
		var e = xa;
		return e !== null && (kd === null ? kd = e : kd.push.apply(kd, e), xa = null), e;
	}
	function Aa(e) {
		xa === null ? xa = [e] : xa.push(e);
	}
	var ja = Pe(null), Ma = null, Na = null;
	function Pa(e, t, n) {
		Ie(ja, t._currentValue), t._currentValue = n;
	}
	function Fa(e) {
		e._currentValue = ja.current, Fe(ja);
	}
	function Ia(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function La(e, t, n, r) {
		var i = e.child;
		for (i !== null && (i.return = e); i !== null;) {
			var a = i.dependencies;
			if (a !== null) {
				var o = i.child;
				a = a.firstContext;
				a: for (; a !== null;) {
					var s = a;
					a = i;
					for (var l = 0; l < t.length; l++) if (s.context === t[l]) {
						a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Ia(a.return, n, e), r || (o = null);
						break a;
					}
					a = s.next;
				}
			} else if (i.tag === 18) {
				if (o = i.return, o === null) throw Error(c(341));
				o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Ia(o, n, e), o = null;
			} else i.tag === 13 && i.memoizedState !== null && i.memoizedState.dehydrated === null ? (i.lanes |= n, o = i.alternate, o !== null && (o.lanes |= n), Ia(i.return, n, e), o = i.child, o = o === null ? null : o.sibling) : o = i.child;
			if (o !== null) o.return = i;
			else for (o = i; o !== null;) {
				if (o === e) {
					o = null;
					break;
				}
				if (i = o.sibling, i !== null) {
					i.return = o.return, o = i;
					break;
				}
				o = o.return;
			}
			i = o;
		}
	}
	function Ra(e, t, n, r) {
		e = null;
		for (var i = t, a = !1; i !== null;) {
			if (!a) {
				if (i.flags & 524288) a = !0;
				else if (i.flags & 262144) break;
			}
			if (i.tag === 10) {
				var o = i.alternate;
				if (o === null) throw Error(c(387));
				if (o = o.memoizedProps, o !== null) {
					var s = i.type;
					ri(i.pendingProps.value, o.value) || (e === null ? e = [s] : e.push(s));
				}
			} else if (i === ze.current) {
				if (o = i.alternate, o === null) throw Error(c(387));
				o.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e === null ? e = [Sh] : e.push(Sh));
			}
			i = i.return;
		}
		return e !== null && La(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function za(e) {
		for (e = e.firstContext; e !== null;) {
			if (!ri(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function Ba(e) {
		Ma = e, Na = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function Va(e) {
		return Ua(Ma, e);
	}
	function Ha(e, t) {
		return Ma === null && Ba(e), Ua(e, t);
	}
	function Ua(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, Na === null) {
			if (e === null) throw Error(c(308));
			Na = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else Na = Na.next = t;
		return n;
	}
	var Wa = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, Ga = i.unstable_scheduleCallback, D = i.unstable_NormalPriority, O = {
		$$typeof: he,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Ka() {
		return {
			controller: new Wa(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function qa(e) {
		e.refCount--, e.refCount === 0 && Ga(D, function() {
			e.controller.abort();
		});
	}
	function Ja(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var Ya = null;
	function Xa(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var Za = null, Qa = 0, $a = 0, eo = null;
	function to(e, t) {
		if (Za === null) {
			var n = Za = [];
			Qa = 0, $a = Xf(), eo = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return Qa++, t.then(no, no), t;
	}
	function no() {
		if (--Qa === 0 && (Ya = null, Za !== null)) {
			eo !== null && (eo.status = "fulfilled");
			var e = Za;
			Za = null, $a = 0, eo = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function ro(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var io = C.S;
	C.S = function(e, t) {
		if (Md = nt(), typeof t == "object" && t && typeof t.then == "function" && to(e, t), Ya !== null) for (var n = If; n !== null;) Ja(n, Ya), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = If; r !== null;) Ja(r, n), r = r.next;
			if ($a !== 0) {
				r = Ya, r === null && (r = Ya = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		io !== null && io(e, t);
	};
	var ao = Pe(null);
	function oo() {
		var e = ao.current;
		return e === null ? gd.pooledCache : e;
	}
	function so(e, t) {
		t === null ? Ie(ao, ao.current) : Ie(ao, t.pool);
	}
	function co() {
		var e = oo();
		return e === null ? null : {
			parent: O._currentValue,
			pool: e
		};
	}
	var lo = Error(c(460)), uo = Error(c(474)), fo = Error(c(542)), po = { then: function() {} };
	function mo(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function ho(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Pn, Pn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, yo(e), e === void 0 && !("reason" in t) ? Error(c(600)) : e;
			default:
				if (typeof t.status == "string") t.then(Pn, Pn);
				else {
					if (e = gd, e !== null && 100 < e.shellSuspendCounter) throw Error(c(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, yo(e), e;
				}
				throw _o = t, lo;
		}
	}
	function go(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (_o = e, lo) : e;
		}
	}
	var _o = null;
	function vo() {
		if (_o === null) throw Error(c(459));
		var e = _o;
		return _o = null, e;
	}
	function yo(e) {
		if (e === lo || e === fo) throw Error(c(483));
	}
	var bo = null, xo = 0;
	function So(e) {
		var t = xo;
		return xo += 1, bo === null && (bo = []), ho(bo, e, t);
	}
	function Co(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function wo(e, t) {
		throw t.$$typeof === ce ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(c(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function To(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function i(e, t) {
			return e = Xi(e, t), e.index = 0, e.sibling = null, e;
		}
		function a(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function o(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function s(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = ea(n, e.mode, r), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var a = n.type;
			return a === de ? (e = d(e, t, n.props.children, r, n.key), Co(e, n), e) : t !== null && (t.elementType === a || typeof a == "object" && a && a.$$typeof === S && go(a) === t.type) ? (t = i(t, n.props), Co(t, n), t.return = e, t) : (t = Qi(n.type, n.key, n.props, null, e.mode, r), Co(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = na(n, e.mode, r), t.return = e, t) : (t = i(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, a) {
			return t === null || t.tag !== 7 ? (t = $i(n, e.mode, r, a), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = ea("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case le: return n = Qi(t.type, t.key, t.props, null, e.mode, n), Co(n, t), n.return = e, n;
					case ue: return t = na(t, e.mode, n), t.return = e, t;
					case S: return t = go(t), f(e, t, n);
				}
				if (ke(t) || Ee(t)) return t = $i(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, So(t), n);
				if (t.$$typeof === he) return f(e, Ha(e, t), n);
				wo(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? s(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case le: return n.key === i ? l(e, t, n, r) : null;
					case ue: return n.key === i ? u(e, t, n, r) : null;
					case S: return n = go(n), p(e, t, n, r);
				}
				if (ke(n) || Ee(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, So(n), r);
				if (n.$$typeof === he) return p(e, t, Ha(e, n), r);
				wo(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, s(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case le: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case ue: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case S: return r = go(r), m(e, t, n, r, i);
				}
				if (ke(r) || Ee(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, So(r), i);
				if (r.$$typeof === he) return m(e, t, n, Ha(t, r), i);
				wo(t, r);
			}
			return null;
		}
		function h(i, o, s, c) {
			for (var l = null, u = null, d = o, h = o = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), o = a(_, o, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), E && ma(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (o = a(d, o, h), u === null ? l = d : u.sibling = d, u = d);
				return E && ma(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), o = a(g, o, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), E && ma(i, h), l;
		}
		function g(i, o, s, l) {
			if (s == null) throw Error(c(151));
			for (var u = null, d = null, h = o, g = o = 0, _ = null, v = s.next(); h !== null && !v.done; g++, v = s.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(i, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(i, h), o = a(y, o, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(i, h), E && ma(i, g), u;
			if (h === null) {
				for (; !v.done; g++, v = s.next()) v = f(i, v.value, l), v !== null && (o = a(v, o, g), d === null ? u = v : d.sibling = v, d = v);
				return E && ma(i, g), u;
			}
			for (h = r(h); !v.done; g++, v = s.next()) v = m(h, i, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), o = a(v, o, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(i, e);
			}), E && ma(i, g), u;
		}
		function _(e, r, a, s) {
			if (typeof a == "object" && a && a.type === de && a.key === null && a.props.ref === void 0 && (a = a.props.children), typeof a == "object" && a) {
				switch (a.$$typeof) {
					case le:
						a: {
							for (var l = a.key; r !== null;) {
								if (r.key === l) {
									if (l = a.type, l === de) {
										if (r.tag === 7) {
											n(e, r.sibling), s = i(r, a.props.children), Co(s, a), s.return = e, e = s;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === S && go(l) === r.type) {
										n(e, r.sibling), s = i(r, a.props), Co(s, a), s.return = e, e = s;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							a.type === de ? (s = $i(a.props.children, e.mode, s, a.key), Co(s, a), s.return = e, e = s) : (s = Qi(a.type, a.key, a.props, null, e.mode, s), Co(s, a), s.return = e, e = s);
						}
						return o(e);
					case ue:
						a: {
							for (l = a.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
										n(e, r.sibling), s = i(r, a.children || []), s.return = e, e = s;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							s = na(a, e.mode, s), s.return = e, e = s;
						}
						return o(e);
					case S: return a = go(a), _(e, r, a, s);
				}
				if (ke(a)) return h(e, r, a, s);
				if (Ee(a)) {
					if (l = Ee(a), typeof l != "function") throw Error(c(150));
					return a = l.call(a), g(e, r, a, s);
				}
				if (typeof a.then == "function") return _(e, r, So(a), s);
				if (a.$$typeof === he) return _(e, r, Ha(e, a), s);
				wo(e, a);
			}
			return typeof a == "string" && a !== "" || typeof a == "number" || typeof a == "bigint" ? (a = "" + a, r !== null && r.tag === 6 ? (n(e, r.sibling), s = i(r, a), s.return = e, e = s) : (n(e, r), s = ea(a, e.mode, s), s.return = e, e = s), o(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				xo = 0;
				var i = _(e, t, n, r);
				return bo = null, i;
			} catch (t) {
				if (t === lo || t === fo) throw t;
				var a = Ji(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var Eo = To(!0), Do = To(!1), Oo = !1;
	function ko(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function Ao(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function jo(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function Mo(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, M & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Gi(e), Wi(e, null, n), t;
		}
		return Vi(e, r, t, n), Gi(e);
	}
	function No(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, jt(e, n);
		}
	}
	function Po(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var Fo = !1;
	function Io() {
		if (Fo) {
			var e = eo;
			if (e !== null) throw e;
		}
	}
	function Lo(e, t, n, r) {
		Fo = !1;
		var i = e.updateQueue;
		Oo = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (P & f) === f : (r & f) === f) {
					f !== 0 && f === $a && (Fo = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = x({}, d, f);
								break a;
							case 2: Oo = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), Cd |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function Ro(e, t) {
		if (typeof e != "function") throw Error(c(191, e));
		e.call(t);
	}
	function zo(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Ro(n[e], t);
	}
	var Bo = Pe(null), Vo = Pe(0);
	function Ho(e, t) {
		e = xd, Ie(Vo, e), Ie(Bo, t), xd = e | t.baseLanes;
	}
	function Uo() {
		Ie(Vo, xd), Ie(Bo, Bo.current);
	}
	function Wo() {
		xd = Vo.current, Fe(Bo), Fe(Vo);
	}
	var Go = Pe(null), Ko = null;
	function qo(e) {
		var t = e.alternate;
		Ie(Qo, Qo.current & 1), Ie(Go, e), Ko === null && (t === null || Bo.current !== null || t.memoizedState !== null) && (Ko = e);
	}
	function Jo(e) {
		Ie(Qo, Qo.current), Ie(Go, e), Ko === null && (Ko = e);
	}
	function Yo(e) {
		e.tag === 22 ? (Ie(Qo, Qo.current), Ie(Go, e), Ko === null && (Ko = e)) : Xo();
	}
	function Xo() {
		Ie(Qo, Qo.current), Ie(Go, Go.current);
	}
	function Zo(e) {
		Fe(Go), Ko === e && (Ko = null), Fe(Qo);
	}
	var Qo = Pe(0);
	function $o(e, t) {
		Ie(Go, Go.current), Ie(Qo, t);
	}
	function es(e) {
		Fe(Qo), Fe(Go), Ko === e && (Ko = null);
	}
	function ts(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || Cm(n) || wm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var ns = 0, k = null, rs = null, is = null, as = !1, os = !1, ss = !1, cs = 0, ls = 0, us = null, ds = 0;
	function fs() {
		throw Error(c(321));
	}
	function ps(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!ri(e[n], t[n])) return !1;
		return !0;
	}
	function ms(e, t, n, r, i, a) {
		return ns = a, k = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, C.H = e === null || e.memoizedState === null ? jc : Mc, ss = !1, a = n(r, i), ss = !1, os && (a = gs(t, n, r, i)), hs(e), a;
	}
	function hs(e) {
		C.H = Ac;
		var t = rs !== null && rs.next !== null;
		if (ns = 0, is = rs = k = null, as = !1, ls = 0, us = null, t) throw Error(c(300));
		e === null || Yc || (e = e.dependencies, e !== null && za(e) && (Yc = !0));
	}
	function gs(e, t, n, r) {
		k = e;
		var i = 0;
		do {
			if (os && (us = null), ls = 0, os = !1, 25 <= i) throw Error(c(301));
			if (i += 1, is = rs = null, e.updateQueue != null) {
				var a = e.updateQueue;
				a.lastEffect = null, a.events = null, a.stores = null, a.memoCache != null && (a.memoCache.index = 0);
			}
			C.H = Nc, a = t(n, r);
		} while (os);
		return a;
	}
	function _s() {
		var e = C.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? ws(t) : t, e = e.useState()[0], (rs === null ? null : rs.memoizedState) !== e && (k.flags |= 1024), t;
	}
	function vs() {
		var e = cs !== 0;
		return cs = 0, e;
	}
	function ys(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function bs(e) {
		if (as) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			as = !1;
		}
		ns = 0, is = rs = k = null, os = !1, ls = cs = 0, us = null;
	}
	function xs() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return is === null ? k.memoizedState = is = e : is = is.next = e, is;
	}
	function Ss() {
		if (rs === null) {
			var e = k.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = rs.next;
		var t = is === null ? k.memoizedState : is.next;
		if (t !== null) is = t, rs = e;
		else {
			if (e === null) throw k.alternate === null ? Error(c(467)) : Error(c(310));
			rs = e, e = {
				memoizedState: rs.memoizedState,
				baseState: rs.baseState,
				baseQueue: rs.baseQueue,
				queue: rs.queue,
				next: null
			}, is === null ? k.memoizedState = is = e : is = is.next = e;
		}
		return is;
	}
	function Cs() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function ws(e) {
		var t = ls;
		return ls += 1, us === null && (us = []), e = ho(us, e, t), t = k, (is === null ? t.memoizedState : is.next) === null && (t = t.alternate, C.H = t === null || t.memoizedState === null ? jc : Mc), e;
	}
	function Ts(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return ws(e);
			if (e.$$typeof === we) return;
			if (e.$$typeof === he) return Va(e);
		}
		throw Error(c(438, String(e)));
	}
	function Es(e) {
		var t = null, n = k.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = k.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = Cs(), k.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = Se;
		return t.index++, n;
	}
	function Ds(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Os(e) {
		return ks(Ss(), rs, e);
	}
	function ks(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(c(311));
		r.lastRenderedReducer = n;
		var i = e.baseQueue, a = r.pending;
		if (a !== null) {
			if (i !== null) {
				var o = i.next;
				i.next = a.next, a.next = o;
			}
			t.baseQueue = i = a, r.pending = null;
		}
		if (a = e.baseState, i === null) e.memoizedState = a;
		else {
			t = i.next;
			var s = o = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (ns & f) === f : (P & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === $a && (d = !0);
					else if ((ns & p) === p) {
						u = u.next, p === $a && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (s = l = f, o = a) : l = l.next = f, k.lanes |= p, Cd |= p;
					f = u.action, ss && n(a, f), a = u.hasEagerState ? u.eagerState : n(a, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (s = l = p, o = a) : l = l.next = p, k.lanes |= f, Cd |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? o = a : l.next = s, !ri(a, e.memoizedState) && (Yc = !0, d && (n = eo, n !== null))) throw n;
			e.memoizedState = a, e.baseState = o, e.baseQueue = l, r.lastRenderedState = a;
		}
		return i === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function As(e) {
		var t = Ss(), n = t.queue;
		if (n === null) throw Error(c(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, i = n.pending, a = t.memoizedState;
		if (i !== null) {
			n.pending = null;
			var o = i = i.next;
			do
				a = e(a, o.action), o = o.next;
			while (o !== i);
			ri(a, t.memoizedState) || (Yc = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
		}
		return [a, r];
	}
	function js(e, t, n) {
		var r = k, i = Ss(), a = E;
		if (a) {
			if (n === void 0) throw Error(c(407));
			n = n();
		} else n = t();
		var o = !ri((rs || i).memoizedState, n);
		if (o && (i.memoizedState = n, Yc = !0), i = i.queue, nc(Ps.bind(null, r, i, e), [e]), e = i.getSnapshot !== t || o || is !== null && !!(is.memoizedState.tag & 1), Zs(e ? 9 : 8, { destroy: void 0 }, Ns.bind(null, r, i, n, t), null), e) {
			if (r.flags |= 2048, gd === null) throw Error(c(349));
			a || ns & 127 || Ms(r, t, n);
		}
		return n;
	}
	function Ms(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = k.updateQueue, t === null ? (t = Cs(), k.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Ns(e, t, n, r) {
		t.value = n, t.getSnapshot = r, Fs(t) && Is(e);
	}
	function Ps(e, t, n) {
		return n(function() {
			Fs(t) && Is(e);
		});
	}
	function Fs(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !ri(e, n);
		} catch {
			return !0;
		}
	}
	function Is(e) {
		var t = Ui(e, 2);
		t !== null && Yd(t, e, 2);
	}
	function Ls(e) {
		var t = xs();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), ss) {
				pt(!0);
				try {
					n();
				} finally {
					pt(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Ds,
			lastRenderedState: e
		}, t;
	}
	function Rs(e, t, n, r) {
		return e.baseState = n, ks(e, rs, typeof r == "function" ? r : Ds);
	}
	function zs(e, t, n, r, i) {
		if (Dc(e)) throw Error(c(485));
		if (e = t.action, e !== null) {
			var a = {
				payload: i,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					a.listeners.push(e);
				}
			};
			C.T === null ? a.isTransition = !1 : n(!0), r(a), n = t.pending, n === null ? (a.next = t.pending = a, Bs(t, a)) : (a.next = n.next, t.pending = n.next = a);
		}
	}
	function Bs(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = C.T, o = {};
			o.types = a === null ? null : a.types, C.T = o;
			try {
				var s = n(i, r), c = C.S;
				c !== null && c(o, s), Vs(e, t, s);
			} catch (n) {
				Us(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), C.T = a;
			}
		} else try {
			a = n(i, r), Vs(e, t, a);
		} catch (n) {
			Us(e, t, n);
		}
	}
	function Vs(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			Hs(e, t, n);
		}, function(n) {
			return Us(e, t, n);
		}) : Hs(e, t, n);
	}
	function Hs(e, t, n) {
		t.status = "fulfilled", t.value = n, Ws(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Bs(e, n)));
	}
	function Us(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Ws(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Ws(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function Gs(e, t) {
		return t;
	}
	function Ks(e, t) {
		if (E) {
			var n = gd.formState;
			if (n !== null) {
				a: {
					var r = k;
					if (E) {
						if (ba) {
							b: {
								for (var i = ba, a = Sa; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = Em(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								ba = Em(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						wa(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = xs(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Gs,
			lastRenderedState: t
		}, n.queue = r, n = wc.bind(null, k, r), r.dispatch = n, r = Ls(!1), a = Ec.bind(null, k, !1, r.queue), r = xs(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = zs.bind(null, k, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function qs(e) {
		return Js(Ss(), rs, e);
	}
	function Js(e, t, n) {
		if (t = ks(e, t, Gs)[0], e = Os(Ds)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = ws(t);
		} catch (e) {
			throw e === lo ? fo : e;
		}
		else r = t;
		t = Ss();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (k.flags |= 2048, Zs(9, { destroy: void 0 }, Ys.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function Ys(e, t) {
		e.action = t;
	}
	function Xs(e) {
		var t = Ss(), n = rs;
		if (n !== null) return Js(t, n, e);
		Ss(), t = t.memoizedState, n = Ss();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function Zs(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = k.updateQueue, t === null && (t = Cs(), k.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function Qs() {
		return Ss().memoizedState;
	}
	function $s(e, t, n, r) {
		var i = xs();
		k.flags |= e, i.memoizedState = Zs(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function ec(e, t, n, r) {
		var i = Ss();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		rs !== null && r !== null && ps(r, rs.memoizedState.deps) ? i.memoizedState = Zs(t, a, n, r) : (k.flags |= e, i.memoizedState = Zs(1 | t, a, n, r));
	}
	function tc(e, t) {
		$s(8390656, 8, e, t);
	}
	function nc(e, t) {
		ec(2048, 8, e, t);
	}
	function rc(e) {
		k.flags |= 4;
		var t = k.updateQueue;
		if (t === null) t = Cs(), k.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function ic(e) {
		var t = Ss().memoizedState;
		return rc({
			ref: t,
			nextImpl: e
		}), function() {
			if (M & 2) throw Error(c(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function ac(e, t) {
		return ec(4, 2, e, t);
	}
	function oc(e, t) {
		return ec(4, 4, e, t);
	}
	function sc(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function cc(e, t, n) {
		n = n == null ? null : n.concat([e]), ec(4, 4, sc.bind(null, t, e), n);
	}
	function lc() {}
	function uc(e, t) {
		var n = Ss();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && ps(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function dc(e, t) {
		var n = Ss();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && ps(t, r[1])) return r[0];
		if (r = e(), ss) {
			pt(!0);
			try {
				e();
			} finally {
				pt(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function fc(e, t, n) {
		return n === void 0 || ns & 1073741824 && !(P & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = qd(), k.lanes |= e, Cd |= e, n);
	}
	function pc(e, t, n, r) {
		return ri(n, t) ? n : Bo.current === null ? !(ns & 106) || ns & 1073741824 && !(P & 261930) ? (Yc = !0, e.memoizedState = n) : (e = qd(), k.lanes |= e, Cd |= e, t) : (e = fc(e, n, r), ri(e, t) || (Yc = !0), e);
	}
	function mc(e, t, n, r, i) {
		var a = Ae.p;
		Ae.p = a !== 0 && 8 > a ? a : 8;
		var o = C.T, s = {};
		s.types = o === null ? null : o.types, C.T = s, Ec(e, !1, t, n);
		try {
			var c = i(), l = C.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? Tc(e, t, ro(c, r), Kd(e)) : Tc(e, t, r, Kd(e));
		} catch (n) {
			Tc(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, Kd());
		} finally {
			Ae.p = a, o !== null && s.types !== null && (o.types = s.types), C.T = o;
		}
	}
	function hc() {}
	function gc(e, t, n, r) {
		if (e.tag !== 5) throw Error(c(476));
		var i = _c(e).queue;
		mc(e, i, t, je, n === null ? hc : function() {
			return vc(e), n(r);
		});
	}
	function _c(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: je,
			baseState: je,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ds,
				lastRenderedState: je
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Ds,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function vc(e) {
		var t = _c(e);
		t.next === null && (t = e.alternate.memoizedState), Tc(e, t.next.queue, {}, Kd());
	}
	function yc() {
		return Va(Sh);
	}
	function bc() {
		return Ss().memoizedState;
	}
	function xc() {
		return Ss().memoizedState;
	}
	function Sc(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = Kd();
					e = jo(n);
					var r = Mo(t, e, n);
					r !== null && (Yd(r, t, n), No(r, t, n)), t = { cache: Ka() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function Cc(e, t, n) {
		var r = Kd();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Dc(e) ? Oc(t, n) : (n = Hi(e, t, n, r), n !== null && (Yd(n, e, r), kc(n, t, r)));
	}
	function wc(e, t, n) {
		Tc(e, t, n, Kd());
	}
	function Tc(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Dc(e)) Oc(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, ri(s, o)) return Vi(e, t, i, 0), gd === null && Bi(), !1;
			} catch {}
			if (n = Hi(e, t, i, r), n !== null) return Yd(n, e, r), kc(n, t, r), !0;
		}
		return !1;
	}
	function Ec(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Xf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Dc(e)) {
			if (t) throw Error(c(479));
		} else t = Hi(e, n, r, 2), t !== null && Yd(t, e, 2);
	}
	function Dc(e) {
		var t = e.alternate;
		return e === k || t !== null && t === k;
	}
	function Oc(e, t) {
		os = as = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function kc(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, jt(e, n);
		}
	}
	var Ac = {
		readContext: Va,
		use: Ts,
		useCallback: fs,
		useContext: fs,
		useEffect: fs,
		useImperativeHandle: fs,
		useLayoutEffect: fs,
		useInsertionEffect: fs,
		useMemo: fs,
		useReducer: fs,
		useRef: fs,
		useState: fs,
		useDebugValue: fs,
		useDeferredValue: fs,
		useTransition: fs,
		useSyncExternalStore: fs,
		useId: fs,
		useHostTransitionStatus: fs,
		useFormState: fs,
		useActionState: fs,
		useOptimistic: fs,
		useMemoCache: fs,
		useCacheRefresh: fs,
		useEffectEvent: fs
	}, jc = {
		readContext: Va,
		use: Ts,
		useCallback: function(e, t) {
			return xs().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Va,
		useEffect: tc,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), $s(4194308, 4, sc.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return $s(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			$s(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = xs();
			t = t === void 0 ? null : t;
			var r = e();
			if (ss) {
				pt(!0);
				try {
					e();
				} finally {
					pt(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = xs();
			if (n !== void 0) {
				var i = n(t);
				if (ss) {
					pt(!0);
					try {
						n(t);
					} finally {
						pt(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = Cc.bind(null, k, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = xs();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = Ls(e);
			var t = e.queue, n = wc.bind(null, k, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: lc,
		useDeferredValue: function(e, t) {
			return fc(xs(), e, t);
		},
		useTransition: function() {
			var e = Ls(!1);
			return e = mc.bind(null, k, e.queue, !0, !1), xs().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = k, i = xs();
			if (E) {
				if (n === void 0) throw Error(c(407));
				n = n();
			} else {
				if (n = t(), gd === null) throw Error(c(349));
				P & 127 || Ms(r, t, n);
			}
			i.memoizedState = n;
			var a = {
				value: n,
				getSnapshot: t
			};
			return i.queue = a, tc(Ps.bind(null, r, a, e), [e]), r.flags |= 2048, Zs(9, { destroy: void 0 }, Ns.bind(null, r, a, n, t), null), n;
		},
		useId: function() {
			var e = xs(), t = gd.identifierPrefix;
			if (E) {
				var n = pa, r = fa;
				n = (r & ~(1 << 32 - mt(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = cs++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = ds++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: yc,
		useFormState: Ks,
		useActionState: Ks,
		useOptimistic: function(e) {
			var t = xs();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = Ec.bind(null, k, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: Es,
		useCacheRefresh: function() {
			return xs().memoizedState = Sc.bind(null, k);
		},
		useEffectEvent: function(e) {
			var t = xs(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (M & 2) throw Error(c(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, Mc = {
		readContext: Va,
		use: Ts,
		useCallback: uc,
		useContext: Va,
		useEffect: nc,
		useImperativeHandle: cc,
		useInsertionEffect: ac,
		useLayoutEffect: oc,
		useMemo: dc,
		useReducer: Os,
		useRef: Qs,
		useState: function() {
			return Os(Ds);
		},
		useDebugValue: lc,
		useDeferredValue: function(e, t) {
			return pc(Ss(), rs.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Os(Ds)[0], t = Ss().memoizedState;
			return [typeof e == "boolean" ? e : ws(e), t];
		},
		useSyncExternalStore: js,
		useId: bc,
		useHostTransitionStatus: yc,
		useFormState: qs,
		useActionState: qs,
		useOptimistic: function(e, t) {
			return Rs(Ss(), rs, e, t);
		},
		useMemoCache: Es,
		useCacheRefresh: xc,
		useEffectEvent: ic
	}, Nc = {
		readContext: Va,
		use: Ts,
		useCallback: uc,
		useContext: Va,
		useEffect: nc,
		useImperativeHandle: cc,
		useInsertionEffect: ac,
		useLayoutEffect: oc,
		useMemo: dc,
		useReducer: As,
		useRef: Qs,
		useState: function() {
			return As(Ds);
		},
		useDebugValue: lc,
		useDeferredValue: function(e, t) {
			var n = Ss();
			return rs === null ? fc(n, e, t) : pc(n, rs.memoizedState, e, t);
		},
		useTransition: function() {
			var e = As(Ds)[0], t = Ss().memoizedState;
			return [typeof e == "boolean" ? e : ws(e), t];
		},
		useSyncExternalStore: js,
		useId: bc,
		useHostTransitionStatus: yc,
		useFormState: Xs,
		useActionState: Xs,
		useOptimistic: function(e, t) {
			var n = Ss();
			return rs === null ? (n.baseState = e, [e, n.queue.dispatch]) : Rs(n, rs, e, t);
		},
		useMemoCache: Es,
		useCacheRefresh: xc,
		useEffectEvent: ic
	};
	function Pc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : x({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var Fc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = Kd(), i = jo(r);
			i.payload = t, n != null && (i.callback = n), t = Mo(e, i, r), t !== null && (Yd(t, e, r), No(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = Kd(), i = jo(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Mo(e, i, r), t !== null && (Yd(t, e, r), No(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = Kd(), r = jo(n);
			r.tag = 2, t != null && (r.callback = t), t = Mo(e, r, n), t !== null && (Yd(t, e, n), No(t, e, n));
		}
	};
	function Ic(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !ii(n, r) || !ii(i, a) : !0;
	}
	function Lc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Fc.enqueueReplaceState(t, t.state, null);
	}
	function Rc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = x({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function zc(e) {
		Ii(e);
	}
	function Bc(e) {
		console.error(e);
	}
	function Vc(e) {
		Ii(e);
	}
	function Hc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Uc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Wc(e, t, n) {
		return n = jo(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Hc(e, t);
		}, n;
	}
	function Gc(e) {
		return e = jo(e), e.tag = 3, e;
	}
	function Kc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Uc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Uc(t, n, r), typeof i != "function" && (Pd === null ? Pd = /* @__PURE__ */ new Set([this]) : Pd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function qc(e, t, n, r, i) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && Ra(t, n, i, !0), n = Go.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return Ko === null ? cf() : n.alternate === null && Sd === 0 && (Sd = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, r === po ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), Af(e, r, i)), !1;
					case 22: return n.flags |= 65536, r === po ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), Af(e, r, i)), !1;
				}
				throw Error(c(435, n.tag));
			}
			return Af(e, r, i), cf(), !1;
		}
		if (E) return t = Go.current, t === null ? (r !== Ca && (t = Error(c(423), { cause: r }), Aa(ia(t, n))), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, r = ia(r, n), i = Wc(e.stateNode, r, i), Po(e, i), Sd !== 4 && (Sd = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, r !== Ca && (e = Error(c(422), { cause: r }), Aa(ia(e, n)))), !1;
		var a = Error(c(520), { cause: r });
		if (a = ia(a, n), Od === null ? Od = [a] : Od.push(a), Sd !== 4 && (Sd = 2), t === null) return !0;
		r = ia(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Wc(n.stateNode, r, e), Po(n, e), !1;
				case 1:
					if (t = n.type, a = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || a !== null && typeof a.componentDidCatch == "function" && (Pd === null || !Pd.has(a)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = Gc(i), Kc(i, e, n, r), Po(n, i), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Jc = Error(c(461)), Yc = !1;
	function Xc(e, t, n, r) {
		t.child = e === null ? Do(t, null, n, r) : Eo(t, e.child, n, r);
	}
	function Zc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return Ba(t), r = ms(e, t, n, o, a, i), s = vs(), e !== null && !Yc ? (ys(e, t, i), Tl(e, t, i)) : (E && s && ga(t), t.flags |= 1, Xc(e, t, r, i), t.child);
	}
	function Qc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Yi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, $c(e, t, a, r, i)) : (e = Qi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !El(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? ii : n, n(o, r) && e.ref === t.ref) return Tl(e, t, i);
		}
		return t.flags |= 1, e = Xi(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function $c(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (ii(a, r) && e.ref === t.ref) {
				if (Yc = !1, t.pendingProps = r = a, El(e, i)) e.flags & 131072 && (Yc = !0);
				else return t.lanes = e.lanes, Tl(e, t, i);
			}
		}
		return sl(e, t, n, r, i);
	}
	function el(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return nl(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && so(t, a === null ? null : a.cachePool), a === null ? Uo() : Ho(t, a), Yo(t);
			else return r = t.lanes = 536870912, nl(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && so(t, null), Uo(), Xo()) : (so(t, a.cachePool), Ho(t, a), Xo(), t.memoizedState = null);
		return Xc(e, t, i, n), t.child;
	}
	function tl(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function nl(e, t, n, r, i) {
		var a = oo();
		return a = a === null ? null : {
			parent: O._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && so(t, null), Uo(), Yo(t), e !== null && Ra(e, t, r, !0), t.childLanes = i, null;
	}
	function rl(e, t) {
		return t = gl({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function il(e, t, n) {
		return Eo(t, e.child, null, n), e = rl(t, t.pendingProps), e.flags |= 2, Zo(t), t.memoizedState = null, e;
	}
	function al(e, t, n) {
		var r = t.pendingProps, i = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (E) {
				if (r.mode === "hidden") return e = rl(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, tl(null, e);
				if (Jo(t), (e = ba) ? (e = Sm(e, Sa), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: da === null ? null : {
						id: fa,
						overflow: pa
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = ta(e), n.return = t, t.child = n, ya = t, ba = null)) : e = null, e === null) throw wa(t);
				return t.lanes = 536870912, null;
			}
			return rl(t, r);
		}
		var a = e.memoizedState;
		if (a !== null) {
			var o = a.dehydrated;
			if (Jo(t), i) {
				if (t.flags & 256) t.flags &= -257, t = il(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(c(558));
			} else if (Yc || Ra(e, t, n, !1), i = (n & e.childLanes) !== 0, Yc || i) {
				if (Bo.current === null) {
					if (r = gd, r !== null && (o = Mt(r, n), o !== 0 && o !== a.retryLane)) throw a.retryLane = o, Ui(e, o), Yd(r, e, o), Jc;
					cf();
				}
				t = il(e, t, n);
			} else e = a.treeContext, ba = Em(o.nextSibling), ya = t, E = !0, xa = null, Sa = !1, e !== null && va(t, e), t = rl(t, r), t.flags |= 134221824;
			return t;
		}
		return e = Xi(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function ol(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(c(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function sl(e, t, n, r, i) {
		return Ba(t), n = ms(e, t, n, r, void 0, i), r = vs(), e !== null && !Yc ? (ys(e, t, i), Tl(e, t, i)) : (E && r && ga(t), t.flags |= 1, Xc(e, t, n, i), t.child);
	}
	function cl(e, t, n, r, i, a) {
		return Ba(t), t.updateQueue = null, n = gs(t, r, n, i), hs(e), r = vs(), e !== null && !Yc ? (ys(e, t, a), Tl(e, t, a)) : (E && r && ga(t), t.flags |= 1, Xc(e, t, n, a), t.child);
	}
	function ll(e, t, n, r, i) {
		if (Ba(t), t.stateNode === null) {
			var a = Ki, o = n.contextType;
			typeof o == "object" && o && (a = Va(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Fc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, ko(t), o = n.contextType, a.context = typeof o == "object" && o ? Va(o) : Ki, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Pc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && Fc.enqueueReplaceState(a, a.state, null), Lo(t, r, a, i), Io(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = Rc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Ki, typeof u == "object" && u && (o = Va(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && Lc(t, a, r, o), Oo = !1;
			var f = t.memoizedState;
			a.state = f, Lo(t, r, a, i), Io(), l = t.memoizedState, s || f !== l || Oo ? (typeof d == "function" && (Pc(t, n, d, r), l = t.memoizedState), (c = Oo || Ic(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, Ao(e, t), o = t.memoizedProps, u = Rc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Ki, typeof l == "object" && l && (c = Va(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && Lc(t, a, r, c), Oo = !1, f = t.memoizedState, a.state = f, Lo(t, r, a, i), Io();
			var p = t.memoizedState;
			o !== d || f !== p || Oo || e !== null && e.dependencies !== null && za(e.dependencies) ? (typeof s == "function" && (Pc(t, n, s, r), p = t.memoizedState), (u = Oo || Ic(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && za(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, ol(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = Eo(t, e.child, null, i), t.child = Eo(t, null, n, i)) : Xc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = Tl(e, t, i), e;
	}
	function ul(e, t, n, r) {
		return Oa(), t.flags |= 256, Xc(e, t, n, r), t.child;
	}
	var dl = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function fl(e) {
		return {
			baseLanes: e,
			cachePool: co()
		};
	}
	function pl(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= Ed), e;
	}
	function ml(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(Qo.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (E) {
				if (i ? qo(t) : Xo(), (e = ba) ? (e = Sm(e, Sa), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: da === null ? null : {
						id: fa,
						overflow: pa
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = ta(e), n.return = t, t.child = n, ya = t, ba = null)) : e = null, e === null) throw wa(t);
				return t.lanes = wm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (Xo(), i = t.mode, a = gl({
				mode: "hidden",
				children: a
			}, i), r = $i(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = fl(n), r.childLanes = pl(e, o, n), t.memoizedState = dl, tl(null, r)) : (qo(t), hl(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return vl(e, t, a, o, r, c, s, n);
		}
		return i ? (Xo(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Xi(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = $i(i, a, n, null), i.flags |= 2) : i = Xi(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, tl(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = fl(n) : (a = i.cachePool, a === null ? a = co() : (s = O._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = pl(e, o, n), t.memoizedState = dl, tl(e.child, r)) : (qo(t), n = e.child, e = n.sibling, n = Xi(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function hl(e, t) {
		return t = gl({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function gl(e, t) {
		return e = Ji(22, e, null, t), e.lanes = 0, e;
	}
	function _l(e, t, n) {
		return Eo(t, e.child, null, n), e = hl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function vl(e, t, n, r, i, a, o, s) {
		if (n) return t.flags & 256 ? (qo(t), t.flags &= -257, _l(e, t, s)) : t.memoizedState === null ? (Xo(), a = i.fallback, o = t.mode, i = gl({
			mode: "visible",
			children: i.children
		}, o), a = $i(a, o, s, null), a.flags |= 2, i.return = t, a.return = t, i.sibling = a, t.child = i, Eo(t, e.child, null, s), i = t.child, i.memoizedState = fl(s), i.childLanes = pl(e, r, s), t.memoizedState = dl, tl(null, i)) : (Xo(), t.child = e.child, t.flags |= 128, null);
		if (qo(t), wm(a)) {
			if (r = a.nextSibling && a.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (i = Error(c(419)), i.stack = "", i.digest = r, Aa({
				value: i,
				source: null,
				stack: null
			})), _l(e, t, s);
		}
		if (Yc || Ra(e, t, s, !1), r = (s & e.childLanes) !== 0, Yc || r) {
			if (Bo.current !== null) return _l(e, t, s);
			if (r = gd, r !== null && (i = Mt(r, s), i !== 0 && i !== o.retryLane)) throw o.retryLane = i, Ui(e, i), Yd(r, e, i), Jc;
			return Cm(a) || cf(), _l(e, t, s);
		}
		return Cm(a) ? (t.flags |= 192, t.child = e.child, null) : (e = o.treeContext, ba = Em(a.nextSibling), ya = t, E = !0, xa = null, Sa = !1, e !== null && va(t, e), t = hl(t, i.children), t.flags |= 134221824, t);
	}
	function yl(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Ia(e.return, t, n);
	}
	function bl(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && ts(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function xl(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function Sl(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function Cl(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = Qo.current;
		if (t.flags & 128) return $o(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, $o(t, o), i === "backwards" && e !== null ? (Sl(e), Xc(e, t, r, n), Sl(e)) : Xc(e, t, r, n), r = E ? ca : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && yl(e, n, t);
			else if (e.tag === 19) yl(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = bl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, Sl(t)), xl(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && ts(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				xl(t, !0, n, null, a, r);
				break;
			case "together":
				xl(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = bl(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), xl(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function wl(e, t, n) {
		var r = t.pendingProps;
		return Pa(t, t.type, r.value), Xc(e, t, r.children, n), t.child;
	}
	function Tl(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), Cd |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (Ra(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(c(153));
		if (t.child !== null) {
			for (e = t.child, n = Xi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Xi(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function El(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && za(e)));
	}
	function Dl(e, t, n) {
		switch (t.tag) {
			case 3:
				Be(t, t.stateNode.containerInfo), Pa(t, O, e.memoizedState.cache), Oa();
				break;
			case 27:
			case 5:
				He(t);
				break;
			case 4:
				Be(t, t.stateNode.containerInfo);
				break;
			case 10:
				Pa(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, Jo(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return qo(t), t.flags |= 128, null;
					r = Ra(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? ml(e, t, n) : (qo(t), e = Tl(e, t, n), e === null ? null : e.sibling);
				}
				qo(t);
				break;
			case 19:
				if (t.flags & 128) return Cl(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (Ra(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return Cl(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), $o(t, Qo.current), r) break;
				return null;
			case 22: return t.lanes = 0, el(e, t, n, t.pendingProps);
			case 24: Pa(t, O, e.memoizedState.cache);
		}
		return Tl(e, t, n);
	}
	function Ol(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Yc = !0;
			else {
				if (!El(e, n) && !(t.flags & 128)) return Yc = !1, Dl(e, t, n);
				Yc = !!(e.flags & 131072);
			}
		} else Yc = !1, E && t.flags & 1048576 && ha(t, ca, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = go(t.elementType), t.type = e, typeof e == "function") Yi(e) ? (r = Rc(e, r), t.tag = 1, t = ll(null, t, e, r, n)) : (t.tag = 0, t = sl(null, t, e, r, n));
					else {
						if (e != null) {
							var i = e.$$typeof;
							if (i === ge) {
								t.tag = 11, t = Zc(null, t, e, r, n);
								break a;
							}
							if (i === ye) {
								t.tag = 14, t = Qc(null, t, e, r, n);
								break a;
							}
							if (i === he) {
								t.tag = 10, t.type = e, t = wl(null, t, n);
								break a;
							}
						}
						throw t = Oe(e) || e, Error(c(306, t, ""));
					}
				}
				return t;
			case 0: return sl(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, i = Rc(r, t.pendingProps), ll(e, t, r, i, n);
			case 3:
				a: {
					if (Be(t, t.stateNode.containerInfo), e === null) throw Error(c(387));
					r = t.pendingProps;
					var a = t.memoizedState;
					i = a.element, Ao(e, t), Lo(t, r, null, n);
					var o = t.memoizedState;
					if (r = o.cache, Pa(t, O, r), r !== a.cache && La(t, [O], n, !0), Io(), r = o.element, a.isDehydrated) {
						if (a = {
							element: r,
							isDehydrated: !1,
							cache: o.cache
						}, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
							t = ul(e, t, r, n);
							break a;
						}
						if (r !== i) {
							i = ia(Error(c(424)), t), Aa(i), t = ul(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (ba = Em(e.firstChild), ya = t, E = !0, xa = null, Sa = !0, n = Do(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (Oa(), r === i) {
							t = Tl(e, t, n);
							break a;
						}
						Xc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return ol(e, t), e === null ? (n = Jm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : E || (t.stateNode = kp(t.type, t.pendingProps, w.current, t)) : t.memoizedState = Jm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return He(t), e === null && E && (r = t.stateNode = jm(t.type, t.pendingProps, w.current), ya = t, Sa = !0, i = ba, zp(t.type) ? (z = i, ba = Em(r.firstChild)) : ba = i), Xc(e, t, t.pendingProps.children, n), ol(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && E && ((i = r = ba) && (r = bm(r, t.type, t.pendingProps, Sa), r === null ? i = !1 : (t.stateNode = r, ya = t, ba = Em(r.firstChild), Sa = !1, i = !0)), i || wa(t)), He(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, r = a.children, Ap(i, a) ? r = null : o !== null && Ap(i, o) && (t.flags |= 32), t.memoizedState !== null && (i = ms(e, t, _s, null, null, n), Sh._currentValue = i), ol(e, t), Xc(e, t, r, n), t.child;
			case 6: return e === null && E && ((e = n = ba) && (n = xm(n, t.pendingProps, Sa), n === null ? e = !1 : (t.stateNode = n, ya = t, ba = null, e = !0)), e || wa(t)), null;
			case 13: return ml(e, t, n);
			case 4: return Be(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Eo(t, null, r, n) : Xc(e, t, r, n), t.child;
			case 11: return Zc(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, ol(e, t), Xc(e, t, r, n), t.child;
			case 8: return Xc(e, t, t.pendingProps.children, n), t.child;
			case 12: return Xc(e, t, t.pendingProps.children, n), t.child;
			case 10: return wl(e, t, n);
			case 9: return i = t.type._context, r = t.pendingProps.children, Ba(t), i = Va(i), r = r(i), t.flags |= 1, Xc(e, t, r, n), t.child;
			case 14: return Qc(e, t, t.type, t.pendingProps, n);
			case 15: return $c(e, t, t.type, t.pendingProps, n);
			case 19: return Cl(e, t, n);
			case 31: return al(e, t, n);
			case 22: return el(e, t, n, t.pendingProps);
			case 24: return Ba(t), r = Va(O), e === null ? (i = oo(), i === null && (i = gd, a = Ka(), i.pooledCache = a, a.refCount++, a !== null && (i.pooledCacheLanes |= n), i = a), t.memoizedState = {
				parent: r,
				cache: i
			}, ko(t), Pa(t, O, i)) : ((e.lanes & n) !== 0 && (Ao(e, t), Lo(t, null, null, n), Io()), i = e.memoizedState, a = t.memoizedState, i.parent === r ? (r = a.cache, Pa(t, O, r), r !== i.cache && La(t, [O], n, !0)) : (i = {
				parent: r,
				cache: r
			}, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Pa(t, O, r))), Xc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : E && ga(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : ol(e, t), Xc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(c(156, t.tag));
	}
	function kl(e) {
		e.flags |= 4;
	}
	function Al(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? lh(t, r) : lh(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (af()) e.flags |= 8192;
				else throw _o = po, uo;
			}
		} else e.flags &= -16777217;
	}
	function jl(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !uh(t)) {
			if (af()) e.flags |= 8192;
			else throw _o = po, uo;
		}
	}
	function Ml(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : Et(), e.lanes |= t, Dd |= t);
	}
	function Nl(e, t) {
		if (!E) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function Pl(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function Fl(e, t, n) {
		var r = t.pendingProps;
		switch (_a(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return Pl(t), null;
			case 1: return Pl(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), Fa(O), Ve(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Da(t) ? kl(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ka())), Pl(t), null;
			case 26:
				var i = t.type, a = t.memoizedState;
				return e === null ? (kl(t), a === null ? (Pl(t), Al(t, i, null, r, n)) : (Pl(t), jl(t, a))) : a ? a === e.memoizedState ? (Pl(t), t.flags &= -16777217) : (kl(t), Pl(t), jl(t, a)) : (e = e.memoizedProps, e !== r && kl(t), Pl(t), Al(t, i, e, r, n)), null;
			case 27:
				if (Ue(t), n = w.current, i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && kl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(c(166));
						return Pl(t), t.subtreeFlags &= -33554433, null;
					}
					e = Le.current, Da(t) ? Ta(t, e) : (e = jm(i, r, n), t.stateNode = e, kl(t));
				}
				return Pl(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (Ue(t), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && kl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(c(166));
						return Pl(t), t.subtreeFlags &= -33554433, null;
					}
					if (a = Le.current, Da(t)) Ta(t, a);
					else {
						var o = Ep(w.current);
						switch (a) {
							case 1:
								a = o.createElementNS("http://www.w3.org/2000/svg", i);
								break;
							case 2:
								a = o.createElementNS("http://www.w3.org/1998/Math/MathML", i);
								break;
							default: switch (i) {
								case "svg":
									a = o.createElementNS("http://www.w3.org/2000/svg", i);
									break;
								case "math":
									a = o.createElementNS("http://www.w3.org/1998/Math/MathML", i);
									break;
								case "script":
									a = o.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild);
									break;
								case "select":
									a = typeof r.is == "string" ? o.createElement("select", { is: r.is }) : o.createElement("select"), r.multiple ? a.multiple = !0 : r.size && (a.size = r.size);
									break;
								default: a = typeof r.is == "string" ? o.createElement(i, { is: r.is }) : o.createElement(i);
							}
						}
						a[Rt] = t, a[zt] = r;
						a: for (o = t.child; o !== null;) {
							if (o.tag === 5 || o.tag === 6) a.appendChild(o.stateNode);
							else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
								o.child.return = o, o = o.child;
								continue;
							}
							if (o === t) break a;
							for (; o.sibling === null;) {
								if (o.return === null || o.return === t) break a;
								o = o.return;
							}
							o.sibling.return = o.return, o = o.sibling;
						}
						t.stateNode = a;
						a: switch (yp(a, i, r), i) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && kl(t);
					}
				}
				return Pl(t), t.subtreeFlags &= -33554433, Al(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && kl(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(c(166));
					if (e = w.current, Da(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, i = ya, i !== null) switch (i.tag) {
							case 27:
							case 5: r = i.memoizedProps;
						}
						e[Rt] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || gp(e.nodeValue, n)), e || wa(t, !0);
					} else e = Ep(e).createTextNode(r), e[Rt] = t, t.stateNode = e;
				}
				return Pl(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = Da(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(c(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(c(557));
							e[Rt] = t;
						} else Oa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						Pl(t), e = !1;
					} else n = ka(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Zo(t), t) : (Zo(t), null);
					if (t.flags & 128) throw Error(c(558));
				}
				return Pl(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (i = Da(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!i) throw Error(c(318));
							if (i = t.memoizedState, i = i === null ? null : i.dehydrated, !i) throw Error(c(317));
							i[Rt] = t;
						} else Oa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						Pl(t), i = !1;
					} else i = ka(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
					if (!i) return t.flags & 256 ? (Zo(t), t) : (Zo(t), null);
				}
				return Zo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, i = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (i = r.alternate.memoizedState.cachePool.pool), a = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (a = r.memoizedState.cachePool.pool), a !== i && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Ml(t, t.updateQueue), Pl(t), null);
			case 4: return Ve(), e === null && op(t.stateNode.containerInfo), t.flags |= 67108864, Pl(t), null;
			case 10: return Fa(t.type), Pl(t), null;
			case 19:
				if (es(t), r = t.memoizedState, r === null) return Pl(t), null;
				if (i = !!(t.flags & 128), a = r.rendering, a === null) {
					if (i) Nl(r, !1);
					else {
						if (Sd !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (a = ts(e), a !== null) {
								for (t.flags |= 128, Nl(r, !1), e = a.updateQueue, t.updateQueue = e, Ml(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Zi(n, e), n = n.sibling;
								return $o(t, Qo.current & 1 | 2), E && ma(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && nt() > Nd && (t.flags |= 128, i = !0, Nl(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!i) {
						if (e = ts(a), e !== null) {
							if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Ml(t, e), Nl(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !a.alternate && !E) return Pl(t), null;
						} else 2 * nt() - r.renderingStartTime > Nd && n !== 536870912 && (t.flags |= 128, i = !0, Nl(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (a.sibling = t.child, t.child = a) : (e = r.last, e === null ? t.child = a : e.sibling = a, r.last = a);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = nt(), e.sibling = null, a = Qo.current, a = i ? a & 1 | 2 : a & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || E ? $o(t, a) : (n = a, Ie(Go, t), Ie(Qo, n), Ko === null && (Ko = t)), E && ma(t, r.treeForkCount), e;
				}
				return Pl(t), null;
			case 22:
			case 23: return Zo(t), Wo(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (Pl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Pl(t), n = t.updateQueue, n !== null && Ml(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && Fe(ao), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Fa(O), Pl(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, Pl(t), null;
		}
		throw Error(c(156, t.tag));
	}
	function Il(e, t) {
		switch (_a(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return Fa(O), Ve(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return Ue(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Zo(t), t.alternate === null) throw Error(c(340));
					Oa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Zo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(c(340));
					Oa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return es(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return Ve(), null;
			case 10: return Fa(t.type), null;
			case 22:
			case 23: return Zo(t), Wo(), e !== null && Fe(ao), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return Fa(O), null;
			case 25: return null;
			default: return null;
		}
	}
	function Ll(e, t) {
		switch (_a(t), t.tag) {
			case 3:
				Fa(O), Ve();
				break;
			case 26:
			case 27:
			case 5:
				Ue(t);
				break;
			case 4:
				Ve();
				break;
			case 31:
				t.memoizedState !== null && Zo(t);
				break;
			case 13:
				Zo(t);
				break;
			case 19:
				es(t);
				break;
			case 10:
				Fa(t.type);
				break;
			case 22:
			case 23:
				Zo(t), Wo(), e !== null && Fe(ao);
				break;
			case 24: Fa(O);
		}
	}
	function Rl(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			kf(t, t.return, e);
		}
	}
	function zl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								kf(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			kf(t, t.return, e);
		}
	}
	function Bl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				zo(t, n);
			} catch (t) {
				kf(e, e.return, t);
			}
		}
	}
	function Vl(e, t, n) {
		n.props = Rc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			kf(e, t, n);
		}
	}
	function Hl(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = Ni(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Zp(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new Qp(e);
							_(e.child, !1, hm, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			kf(e, t, n);
		}
	}
	function Ul(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				kf(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				kf(e, t, n);
			}
			else n.current = null;
		}
	}
	function Wl(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) _m(e.stateNode, t[n]);
	}
	function Gl(e) {
		for (var t = e.return; t !== null && (Jl(t) && _m(e.stateNode, t.stateNode), !ql(t));) t = t.return;
	}
	function Kl(e) {
		for (var t = e.return; t !== null && (Jl(t) && vm(e.stateNode, t.stateNode), !ql(t));) t = t.return;
	}
	function ql(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function Jl(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function Yl(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			kf(e, e.return, t);
		}
	}
	function Xl(e, t, n) {
		try {
			var r = e.stateNode;
			xp(r, e.type, n, t), r[zt] = t;
		} catch (t) {
			kf(e, e.return, t);
		}
	}
	function Zl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && zp(e.type) || e.tag === 4;
	}
	function Ql(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Zl(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && zp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function $l(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Pn)), Wl(e, r), T = !0;
		else if (i !== 4 && (i === 27 && (Wl(e, r), r = null, zp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for ($l(e, t, n, r), e = e.sibling; e !== null;) $l(e, t, n, r), e = e.sibling;
	}
	function eu(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), Wl(e, r), T = !0;
		else if (i !== 4 && (i === 27 && (Wl(e, r), r = null, zp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (eu(e, t, n, r), e = e.sibling; e !== null;) eu(e, t, n, r), e = e.sibling;
	}
	function tu(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			yp(t, r, n), t[Rt] = e, t[zt] = n;
		} catch (t) {
			kf(e, e.return, t);
		}
	}
	var nu = !1, ru = null;
	function iu(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (nu = !0);
	}
	var au = null;
	function ou() {
		var e = au;
		return au = null, e;
	}
	var su = 0;
	function cu(e, t, n, r, i) {
		return su = 0, lu(e.child, t, n, r, i);
	}
	function lu(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Gp(o);
					r.push(s), s.view && (a = !0);
				} else a || Gp(o).view && (a = !0);
				nu = !0, Hp(o, su === 0 ? t : t + "_" + su, n), su++;
			} else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || lu(e.child, t, n, r, i) && (a = !0));
			e = e.sibling;
		}
		return a;
	}
	function A(e, t) {
		for (; e !== null;) e.tag === 5 ? Up(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || A(e.child, t)), e = e.sibling;
	}
	function uu(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (uu(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(c(544));
				var n = t.name;
				t = Fi(t.default, t.share), t !== "none" && (cu(e, n, t, null, !1) || A(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function du(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = Ni(r, n), a = Fi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? uu(e) : cu(e, i, a, null, !1) ? (uu(e), n.paired || t || Jd(e, r.onEnter)) : A(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) du(e, t), e = e.sibling;
		else uu(e);
	}
	function fu(e) {
		if (ru !== null && ru.size !== 0) {
			var t = ru;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = Fi(n.default, n.share);
								if (a !== "none" && (cu(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, Jd(e, n.onShare)) : A(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					fu(e);
				}
				e = e.sibling;
			}
		}
	}
	function pu(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = Ni(t, e.stateNode), r = ru === null ? void 0 : ru.get(n), i = Fi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (cu(e, n, i, null, !1) ? r === void 0 ? Jd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, ru.delete(n), Jd(e, t.onShare)) : A(e.child, !1)), ru !== null && fu(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) pu(e), e = e.sibling;
		else ru !== null && fu(e);
	}
	function mu(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = Ni(t, e.stateNode);
				t = Fi(t.default, t.update), e.flags &= -5, t !== "none" && cu(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && mu(e);
			e = e.sibling;
		}
	}
	function hu(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, A(e.child, !1));
				}
				hu(e);
			}
			e = e.sibling;
		}
	}
	function gu(e) {
		if (e.tag === 30) e.stateNode.paired = null, A(e.child, !1), hu(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) gu(e), e = e.sibling;
		else hu(e);
	}
	function _u(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? A(e.child, !1) : e.subtreeFlags & 33554432 && _u(e), e = e.sibling;
	}
	function vu(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && su < a.length) {
					var l = a[su], u = Gp(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && Hp(c, su === 0 ? n : n + "_" + su, i), s && e.flags & 4 || (au === null && (au = []), au.push(c, su === 0 ? r : r + "_" + su, t.memoizedProps)), su++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : vu(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function yu(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = Ni(n, r), a = Fi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(Kp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				su = 0, i = vu(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || Jd(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && yu(e, t);
			e = e.sibling;
		}
	}
	var bu = !1, xu = !1, Su = !1, Cu = !1, wu = typeof WeakSet == "function" ? WeakSet : Set, Tu = null, Eu = !1, Du = !1, Ou = !1, ku = !1;
	function Au(e, t, n) {
		if (e = e.containerInfo, wp = jh, e = li(e), ui(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (Tp = {
			focusedElem: e,
			selectionRange: r
		}, jh = !1, n = (n & 335544064) === n, Tu = t, t = n ? 9270 : 1024; Tu !== null;) {
			if (e = Tu, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && pu(r[a]);
			if (e.alternate === null && e.flags & 2) n && iu(e), ju(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && pu(r), ju(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && iu(e), ju(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, Tu = r) : (n && mu(e), ju(n));
			}
		}
		ru = null;
	}
	function ju(e) {
		for (; Tu !== null;) {
			var t = Tu, n = e, r = t.alternate, i = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (i & 1024 && r !== null) {
						n = void 0, i = r.memoizedProps, r = r.memoizedState;
						var a = t.stateNode;
						try {
							var o = Rc(t.type, i);
							n = a.getSnapshotBeforeUpdate(o, r), a.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							kf(t, t.return, e);
						}
					}
					break;
				case 3:
					if (i & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) ym(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								ym(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = Ni(r.memoizedProps, r.stateNode), i = t.memoizedProps, i = Fi(i.default, i.update), i !== "none" && cu(r, n, i, r.memoizedState = [], !0));
					break;
				default: if (i & 1024) throw Error(c(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, Tu = r;
				break;
			}
			Tu = t.return;
		}
	}
	function Mu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Zu(e, n), r & 4 && Rl(5, n);
				break;
			case 1:
				if (Zu(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						kf(n, n.return, e);
					}
					else {
						var i = Rc(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							kf(n, n.return, e);
						}
					}
				}
				r & 64 && Bl(n), r & 512 && Hl(n, n.return);
				break;
			case 3:
				if (Zu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						zo(e, t);
					} catch (e) {
						kf(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && tu(n);
			case 26:
			case 5:
				Zu(e, n), t === null && r & 4 && Yl(n), r & 512 && Hl(n, n.return);
				break;
			case 12:
				Zu(e, n);
				break;
			case 31:
				Zu(e, n), r & 4 && Vu(e, n);
				break;
			case 13:
				Zu(e, n), r & 4 && Hu(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Nf.bind(null, n), Tm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || bu, !r) {
					var a = t !== null && t.memoizedState !== null || xu;
					t = bu, i = xu, bu = r, (xu = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), $u(e, n, r)) : Zu(e, n), bu = t, xu = i;
				}
				break;
			case 30:
				Zu(e, n), r & 512 && Hl(n, n.return);
				break;
			case 7: r & 512 && Hl(n, n.return);
			default: Zu(e, n);
		}
	}
	function Nu(e, t) {
		for (e = e.child; e !== null;) Pu(e, t), e = e.sibling;
	}
	function Pu(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					kf(e, e.return, t);
				}
				Fu(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, T = !0;
				} catch (t) {
					kf(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? Vp(s, !0) : Vp(e.stateNode, !1);
				} catch (t) {
					kf(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && Nu(e, t);
				break;
			default: Nu(e, t);
		}
	}
	function Fu(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						Pu(n, r);
						break a;
					case 22:
						n.memoizedState === null && Fu(n, r);
						break a;
					default: Fu(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function Iu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, Iu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && qt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var Lu = null, Ru = !1;
	function zu(e, t, n) {
		for (n = n.child; n !== null;) Bu(e, t, n), n = n.sibling;
	}
	function Bu(e, t, n) {
		if (ft && typeof ft.onCommitFiberUnmount == "function") try {
			ft.onCommitFiberUnmount(dt, n);
		} catch {}
		switch (n.tag) {
			case 26:
				xu || Ul(n, t), zu(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !xu && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				xu || Ul(n, t), Kl(n);
				var r = Lu, i = Ru;
				zp(n.type) && (Lu = n.stateNode, Ru = !1), zu(e, t, n), Mm(n.stateNode, n.type, n.memoizedProps), Lu = r, Ru = i;
				break;
			case 5: xu || Ul(n, t), Kl(n);
			case 6:
				if (n.tag === 6 && Kl(n), r = Lu, i = Ru, Lu = null, zu(e, t, n), Lu = r, Ru = i, Lu !== null) {
					if (Ru) try {
						(Lu.nodeType === 9 ? Lu.body : Lu.nodeName === "HTML" ? Lu.ownerDocument.body : Lu).removeChild(n.stateNode), T = !0;
					} catch (e) {
						kf(n, t, e);
					}
					else try {
						Lu.removeChild(n.stateNode), T = !0;
					} catch (e) {
						kf(n, t, e);
					}
				}
				break;
			case 18:
				Lu !== null && (Ru ? (e = Lu, Bp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), rg(e)) : Bp(Lu, n.stateNode));
				break;
			case 4:
				r = Lu, i = Ru, Lu = n.stateNode.containerInfo, Ru = !0, zu(e, t, n), Lu = r, Ru = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				zl(2, n, t), xu || zl(4, n, t), zu(e, t, n);
				break;
			case 1:
				xu || (Ul(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Vl(n, t, r)), zu(e, t, n);
				break;
			case 21:
				zu(e, t, n);
				break;
			case 22:
				xu = (r = xu) || n.memoizedState !== null, zu(e, t, n), xu = r;
				break;
			case 30:
				Ul(n, t), zu(e, t, n);
				break;
			case 7:
				xu || Ul(n, t), zu(e, t, n);
				break;
			default: zu(e, t, n);
		}
	}
	function Vu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				rg(e);
			} catch (e) {
				kf(t, t.return, e);
			}
		}
	}
	function Hu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			rg(e);
		} catch (e) {
			kf(t, t.return, e);
		}
	}
	function Uu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new wu()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new wu()), t;
			default: throw Error(c(435, e.tag));
		}
	}
	function Wu(e, t) {
		var n = Uu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = Pf.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Gu(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var i = 0; i < r.length; i++) {
			var a = r[i], o = e, s = t, l = s;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (zp(l.type)) {
							Lu = l.stateNode, Ru = !1;
							break a;
						}
						break;
					case 5:
						Lu = l.stateNode, Ru = !1;
						break a;
					case 3:
					case 4:
						Lu = l.stateNode.containerInfo, Ru = !0;
						break a;
				}
				l = l.return;
			}
			if (Lu === null) throw Error(c(160));
			Bu(o, s, a), Lu = null, Ru = !1, o = a.alternate, o !== null && (o.return = null), a.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) qu(t, e, n), t = t.sibling;
	}
	var Ku = null;
	function qu(e, t, n) {
		var r = e.alternate, i = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (i & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var a = 0; a < r.length; a++) {
					var o = r[a];
					o.ref.impl = o.nextImpl;
				}
				Gu(t, e, n), j(e), i & 4 && (zl(3, e, e.return), Rl(3, e), zl(5, e, e.return));
				break;
			case 1:
				Gu(t, e, n), j(e), i & 512 && (xu || r === null || Ul(r, r.return)), i & 64 && bu && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (a = Ku, Gu(t, e, n), j(e), i & 512 && (xu || r === null || Ul(r, r.return)), i & 4) {
					if (i = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (bu) e.stateNode = kp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, i = a.ownerDocument || a;
										b: switch (t) {
											case "title":
												r = i.getElementsByTagName("title")[0], (!r || r[Gt] || r[Rt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = i.createElement(t), i.head.insertBefore(r, i.querySelector("head > title"))), yp(r, t, n), r[Rt] = e, Qt(r), t = r;
												break a;
											case "link":
												if (a = oh("link", "href", i).get(t + (n.href || ""))) {
													for (o = 0; o < a.length; o++) if (r = a[o], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														a.splice(o, 1);
														break b;
													}
												}
												r = i.createElement(t), yp(r, t, n), i.head.appendChild(r);
												break;
											case "meta":
												if (a = oh("meta", "content", i).get(t + (n.content || ""))) {
													for (o = 0; o < a.length; o++) if (r = a[o], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														a.splice(o, 1);
														break b;
													}
												}
												r = i.createElement(t), yp(r, t, n), i.head.appendChild(r);
												break;
											default: throw Error(c(468, t));
										}
										r[Rt] = e, Qt(r), t = r;
									}
									e.stateNode = t;
								}
							} else bu || sh(a, e.type, e.stateNode);
						} else e.stateNode = th(a, n, e.memoizedProps);
					} else i === n ? n === null && e.stateNode !== null && Xl(e, e.memoizedProps, r.memoizedProps) : (i === null ? (t = r.stateNode, t === null || xu || t.parentNode.removeChild(t)) : i.count--, n === null ? bu || sh(a, e.type, e.stateNode) : th(a, n, e.memoizedProps));
				}
				break;
			case 27:
				Gu(t, e, n), j(e), i & 512 && (xu || r === null || Ul(r, r.return)), r !== null && i & 4 && Xl(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (a = Su, Su = !1, Gu(t, e, n), Su = a, j(e), i & 512 && (xu || r === null || Ul(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						En(t, ""), T = !0;
					} catch (t) {
						kf(e, e.return, t);
					}
				}
				i & 4 && e.stateNode != null && (t = e.memoizedProps, Xl(e, t, r === null ? t : r.memoizedProps)), i & 1024 && (Cu = !0);
				break;
			case 6:
				if (Gu(t, e, n), j(e), i & 4) {
					if (e.stateNode === null) throw Error(c(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, T = !0;
					} catch (t) {
						kf(e, e.return, t);
					}
				}
				break;
			case 3:
				if (T = !1, ah = null, a = Ku, Ku = Im(t.containerInfo), Gu(t, e, n), Ku = a, j(e), i & 4 && r !== null && r.memoizedState.isDehydrated) try {
					rg(t.containerInfo);
				} catch (t) {
					kf(e, e.return, t);
				}
				Cu && (Cu = !1, Ju(e)), T = !1;
				break;
			case 4:
				i = Su, Su = bu, r = ln(), a = Ku, Ku = Im(e.stateNode.containerInfo), Gu(t, e, n), j(e), Ku = a, T && Du && (Ou = !0), T = r, Su = i;
				break;
			case 12:
				Gu(t, e, n), j(e);
				break;
			case 31:
				Gu(t, e, n), j(e), i & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Wu(e, t)));
				break;
			case 13:
				Gu(t, e, n), j(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (jd = nt()), i & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Wu(e, t)));
				break;
			case 22:
				a = e.memoizedState !== null, o = r !== null && r.memoizedState !== null;
				var s = bu, l = xu, u = Su;
				bu = s || a, Su = u || a, xu = l || o, Gu(t, e, n), xu = l, Su = u, bu = s, j(e), i & 8192 && (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, !a || r === null || o || bu || xu || (t = o || xu, n = bu, r = xu, bu = a || bu, xu = t, Qu(e, 2), bu = n, xu = r), !a && Su || Nu(e, a)), i & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, Wu(e, n))));
				break;
			case 19:
				Gu(t, e, n), j(e), i & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Wu(e, t)));
				break;
			case 30:
				i & 512 && (xu || r === null || Ul(r, r.return)), i = ln(), a = Du, o = (n & 335544064) === n, s = e.memoizedProps, Du = o && Fi(s.default, s.update) !== "none", Gu(t, e, n), j(e), o && r !== null && T && (e.flags |= 4), Du = a, T = i;
				break;
			case 21: break;
			case 7: i & 512 && (xu || r === null || Ul(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Gu(t, e, n), j(e);
		}
	}
	function j(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Zl(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var i = e.return; i !== null;) {
					if (Jl(i)) {
						var a = i.stateNode;
						r === null ? r = [a] : r.push(a);
					}
					if (ql(i)) break;
					i = i.return;
				}
				var o = r;
				if (n == null) throw Error(c(160));
				switch (n.tag) {
					case 27:
						var s = n.stateNode;
						eu(e, Ql(e), s, o);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (En(l, ""), n.flags &= -33), eu(e, Ql(e), l, o);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						$l(e, Ql(e), u, o);
						break;
					default: throw Error(c(161));
				}
			} catch (t) {
				kf(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Ju(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			Ju(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, jh = !0, t.reset(), jh = !1), e = e.sibling;
		}
	}
	function Yu(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) Xu(t, e), t = t.sibling;
		else yu(t, !1);
	}
	function Xu(e, t) {
		var n = e.alternate;
		if (n === null) du(e, !1);
		else switch (e.tag) {
			case 3:
				if (ku = Eu = !1, ou(), Yu(t, e), !Eu && !Ou) {
					if (e = au, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Up(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), ku = !0;
				}
				au = null;
				break;
			case 5:
				Yu(t, e);
				break;
			case 4:
				r = Eu, Eu = !1, Yu(t, e), Eu && (Ou = !0), Eu = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Yu(t, e) : du(e, !1));
				break;
			case 30:
				r = Eu, i = ou(), Eu = !1, Yu(t, e), Eu && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = Ni(a, o), o = Ni(n.memoizedProps, o);
				var s = Fi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, su = 0, t = vu(e, n, t, o, s, a, !0), su !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (Jd(e, e.memoizedProps.onUpdate), au = i) : i !== null && (i.push.apply(i, au), au = i), Eu = e.flags & 32 ? !0 : r;
				break;
			default: Yu(t, e);
		}
	}
	function Zu(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) Mu(e, t.alternate, t), t = t.sibling;
	}
	function Qu(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					zl(4, n, n.return), Qu(n, r);
					break;
				case 1:
					Ul(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && Vl(n, n.return, i), Qu(n, r);
					break;
				case 27: r & 2 && Mm(n.stateNode, n.type, n.memoizedProps);
				case 5:
					Ul(n, n.return), n.tag !== 5 && n.tag !== 27 || Kl(n), Qu(n, r);
					break;
				case 6:
					Kl(n);
					break;
				case 26:
					Ul(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || xu || i.parentNode.removeChild(i), Qu(n, r);
					break;
				case 22:
					n.memoizedState === null && Qu(n, r);
					break;
				case 30:
					Ul(n, n.return), Qu(n, r);
					break;
				case 7: Ul(n, n.return);
				default: Qu(n, r);
			}
			e = e.sibling;
		}
	}
	function $u(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					$u(i, a, n), Rl(4, a);
					break;
				case 1:
					if ($u(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						kf(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) Ro(l[i], c);
						} catch (e) {
							kf(r, r.return, e);
						}
					}
					s && o & 64 && Bl(a), Hl(a, a.return);
					break;
				case 27: n & 2 && tu(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || Gl(a), $u(i, a, n), s && r === null && o & 4 && Yl(a), Hl(a, a.return);
					break;
				case 6:
					Gl(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || bu || sh(Im(c.ownerDocument), a.type, c), $u(i, a, n), s && r === null && o & 4 && Yl(a), Hl(a, a.return);
					break;
				case 12:
					$u(i, a, n);
					break;
				case 31:
					$u(i, a, n), s && o & 4 && Vu(i, a);
					break;
				case 13:
					$u(i, a, n), s && o & 4 && Hu(i, a);
					break;
				case 22:
					a.memoizedState === null && $u(i, a, n), Hl(a, a.return);
					break;
				case 30:
					$u(i, a, n), Hl(a, a.return);
					break;
				case 7: Hl(a, a.return);
				default: $u(i, a, n);
			}
			t = t.sibling;
		}
	}
	function ed(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && qa(n));
	}
	function td(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qa(e));
	}
	function nd(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) rd(e, t, n, r), t = t.sibling;
		else i && _u(t);
	}
	function rd(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && gu(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				nd(e, t, n, r), a & 2048 && Rl(9, t);
				break;
			case 1:
				nd(e, t, n, r);
				break;
			case 3:
				nd(e, t, n, r), i && ku && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && qa(a)));
				break;
			case 12:
				if (a & 2048) {
					nd(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						kf(t, t.return, e);
					}
				} else nd(e, t, n, r);
				break;
			case 31:
				nd(e, t, n, r);
				break;
			case 13:
				nd(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && gu(t), o._visibility & 2 ? nd(e, t, n, r) : (o._visibility |= 2, id(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && gu(s), o._visibility & 2 ? nd(e, t, n, r) : ad(e, t)), a & 2048 && ed(s, t);
				break;
			case 24:
				nd(e, t, n, r), a & 2048 && td(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (A(a.child, !0), A(t.child, !0))), nd(e, t, n, r);
				break;
			default: nd(e, t, n, r);
		}
	}
	function id(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					id(a, o, s, c, i), Rl(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, id(a, o, s, c, i)) : u._visibility & 2 ? id(a, o, s, c, i) : ad(a, o), i && l & 2048 && ed(o.alternate, o);
					break;
				case 24:
					id(a, o, s, c, i), i && l & 2048 && td(o.alternate, o);
					break;
				default: id(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function ad(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					ad(n, r), i & 2048 && ed(r.alternate, r);
					break;
				case 24:
					ad(n, r), i & 2048 && td(r.alternate, r);
					break;
				default: ad(n, r);
			}
			t = t.sibling;
		}
	}
	var od = 8192;
	function sd(e, t, n) {
		if (e.subtreeFlags & od) for (e = e.child; e !== null;) cd(e, t, n), e = e.sibling;
	}
	function cd(e, t, n) {
		switch (e.tag) {
			case 26:
				sd(e, t, n), e.flags & od && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && fh(n, e)) : ph(n, Ku, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				sd(e, t, n), e.flags & od && (e = e.stateNode, (t & 335544128) === t && fh(n, e));
				break;
			case 3:
			case 4:
				var r = Ku;
				Ku = Im(e.stateNode.containerInfo), sd(e, t, n), Ku = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = od, od = 16777216, sd(e, t, n), od = r) : sd(e, t, n));
				break;
			case 30:
				if ((e.flags & od) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, ru === null && (ru = /* @__PURE__ */ new Map()), ru.set(r, i);
				}
				sd(e, t, n);
				break;
			default: sd(e, t, n);
		}
	}
	function ld(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function ud(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				Tu = r, pd(r, e);
			}
			ld(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) dd(e), e = e.sibling;
	}
	function dd(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				ud(e), e.flags & 2048 && zl(9, e, e.return);
				break;
			case 3:
				ud(e);
				break;
			case 12:
				ud(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, fd(e)) : ud(e);
				break;
			default: ud(e);
		}
	}
	function fd(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				Tu = r, pd(r, e);
			}
			ld(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					zl(8, t, t.return), fd(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, fd(t));
					break;
				default: fd(t);
			}
			e = e.sibling;
		}
	}
	function pd(e, t) {
		for (; Tu !== null;) {
			var n = Tu;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					zl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: qa(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, Tu = r;
			else a: for (n = e; Tu !== null;) {
				r = Tu;
				var i = r.sibling, a = r.return;
				if (Iu(r), r === n) {
					Tu = null;
					break a;
				}
				if (i !== null) {
					i.return = a, Tu = i;
					break a;
				}
				Tu = a;
			}
		}
	}
	var md = {
		getCacheForType: function(e) {
			var t = Va(O), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return Va(O).controller.signal;
		}
	}, hd = typeof WeakMap == "function" ? WeakMap : Map, M = 0, gd = null, N = null, P = 0, F = 0, _d = null, vd = !1, yd = !1, bd = !1, xd = 0, Sd = 0, Cd = 0, wd = 0, Td = 0, Ed = 0, Dd = 0, Od = null, kd = null, Ad = !1, jd = 0, Md = 0, Nd = Infinity, I = null, Pd = null, L = 0, Fd = null, Id = null, Ld = 0, Rd = 0, zd = null, Bd = null, Vd = null, Hd = null, Ud = null, Wd = 0, Gd = null;
	function Kd() {
		return M & 2 && P !== 0 ? P & -P : C.T === null ? Ft() : Xf();
	}
	function qd() {
		if (Ed === 0) {
			if (!(P & 536870912) || E) {
				var e = yt;
				yt <<= 1, !(yt & 3932160) && (yt = 262144), Ed = e;
			} else Ed = 536870912;
		}
		return e = Go.current, e !== null && (e.flags |= 32), Ed;
	}
	function Jd(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Zp(Ni(e.memoizedProps, n))), Hd === null && (Hd = []), Hd.push(t.bind(null, r));
		}
	}
	function Yd(e, t, n) {
		(e === gd && (F === 2 || F === 9) || e.cancelPendingCommit !== null) && (nf(e, 0), $d(e, P, Ed, !1)), Ot(e, n), (!(M & 2) || e !== gd) && (e === gd && (!(M & 2) && (wd |= n), Sd === 4 && $d(e, P, Ed, !1)), Hf(e));
	}
	function Xd(e, t, n) {
		if (M & 6) throw Error(c(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || Ct(e, t), i = r ? df(e, t) : lf(e, t, !0), a = r;
		do {
			if (i === 0) {
				yd && !r && $d(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, a && !Qd(n)) {
				i = lf(e, t, !1), a = !1;
				continue;
			}
			if (i === 2) {
				if (a = t, e.errorRecoveryDisabledLanes & a) var o = 0;
				else o = e.pendingLanes & -536870913, o = o === 0 ? o & 536870912 ? 536870912 : 0 : o;
				if (o !== 0) {
					t = o;
					a: {
						var s = e;
						i = Od;
						var l = s.current.memoizedState.isDehydrated;
						if (l && (nf(s, o).flags |= 256), o = lf(s, o, !1), o !== 2 && o !== 6) {
							if (bd && !l) {
								s.errorRecoveryDisabledLanes |= a, wd |= a, i = 4;
								break a;
							}
							a = kd, kd = i, a !== null && (kd === null ? kd = a : kd.push.apply(kd, a));
						}
						i = o;
					}
					if (a = !1, i !== 2) continue;
				}
			}
			if (i === 1) {
				nf(e, 0), $d(e, t, 0, !0);
				break;
			}
			a: {
				switch (r = e, a = i, a) {
					case 0:
					case 1: throw Error(c(345));
					case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
					case 6:
						$d(r, t, Ed, !vd);
						break a;
					case 2:
						kd = null;
						break;
					case 3:
					case 5: break;
					default: throw Error(c(329));
				}
				if ((t & 62914560) === t && (i = jd + 300 - nt(), 10 < i)) {
					if ($d(r, t, Ed, !vd), St(r, 0, !0) !== 0) break a;
					Ld = t, r.timeoutHandle = Np(Zd.bind(null, r, n, kd, I, Ad, t, Ed, wd, Dd, vd, a, "Throttled", -0, 0), i);
					break a;
				}
				Zd(r, n, kd, I, Ad, t, Ed, wd, Dd, vd, a, null, -0, 0);
			}
			break;
		} while (1);
		Hf(e);
	}
	function Zd(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		if (d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: Pn
		}, ru = null, cd(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = _h.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? jd - nt() : (a & 4194048) === a ? Md - nt() : 0, m = hh(d, m), m !== null)) {
			Ld = a, e.cancelPendingCommit = m(vf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), $d(e, a, o, !l);
			return;
		}
		vf(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Qd(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!ri(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function $d(e, t, n, r) {
		t = wt(e, t), t &= ~Td, t &= ~wd, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - mt(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && At(e, n, t);
	}
	function ef() {
		return M & 6 ? !0 : (Uf(0, !1), !1);
	}
	function tf() {
		if (N !== null) {
			if (F === 0) var e = N.return;
			else e = N, Na = Ma = null, bs(e), bo = null, xo = 0, e = N;
			for (; e !== null;) Ll(e.alternate, e), e = e.return;
			N = null;
		}
	}
	function nf(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, Pp(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Ld = 0, tf(), gd = e, N = n = Xi(e.current, null), P = t, F = 0, _d = null, vd = !1, yd = Ct(e, t), bd = !1, Dd = Ed = Td = wd = Cd = Sd = 0, kd = Od = null, Ad = !1, xd = wt(e, t), Bi(), n;
	}
	function rf(e, t) {
		k = null, C.H = Ac, t === lo || t === fo ? (t = vo(), F = 3) : t === uo ? (t = vo(), F = 4) : F = t === Jc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, _d = t, N === null && (Sd = 1, Hc(e, ia(t, e.current)));
	}
	function af() {
		var e = Go.current;
		return e === null ? !0 : (P & 4194048) === P ? Ko === null : (P & 62914560) === P || P & 536870912 ? e === Ko : !1;
	}
	function of() {
		var e = C.H;
		return C.H = Ac, e === null ? Ac : e;
	}
	function sf() {
		var e = C.A;
		return C.A = md, e;
	}
	function cf() {
		Sd = 4, vd || (P & 4194048) !== P && Go.current !== null || (yd = !0), !(Cd & 134217727) && !(wd & 134217727) || gd === null || $d(gd, P, Ed, !1);
	}
	function lf(e, t, n) {
		var r = M;
		M |= 2;
		var i = of(), a = sf();
		(gd !== e || P !== t) && (I = null, nf(e, t)), t = !1;
		var o = Sd;
		a: do
			try {
				if (F !== 0 && N !== null) {
					var s = N, c = _d;
					switch (F) {
						case 8:
							tf(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							Go.current === null && (t = !0);
							var l = F;
							if (F = 0, _d = null, hf(e, s, c, l), n && yd) {
								o = 0;
								break a;
							}
							break;
						default: l = F, F = 0, _d = null, hf(e, s, c, l);
					}
				}
				uf(), o = Sd;
				break;
			} catch (t) {
				rf(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, Na = Ma = null, M = r, C.H = i, C.A = a, N === null && (gd = null, P = 0, Bi()), o;
	}
	function uf() {
		for (; N !== null;) pf(N);
	}
	function df(e, t) {
		var n = M;
		M |= 2;
		var r = of(), i = sf();
		gd !== e || P !== t ? (I = null, Nd = nt() + 500, nf(e, t)) : yd = Ct(e, t);
		a: do
			try {
				if (F !== 0 && N !== null) {
					t = N;
					var a = _d;
					b: switch (F) {
						case 1:
							F = 0, _d = null, hf(e, t, a, 1);
							break;
						case 2:
						case 9:
							if (mo(a)) {
								F = 0, _d = null, mf(t);
								break;
							}
							t = function() {
								F !== 2 && F !== 9 || gd !== e || (F = 7), Hf(e);
							}, a.then(t, t);
							break a;
						case 3:
							F = 7;
							break a;
						case 4:
							F = 5;
							break a;
						case 7:
							mo(a) ? (F = 0, _d = null, mf(t)) : (F = 0, _d = null, hf(e, t, a, 7));
							break;
						case 5:
							var o = null;
							switch (N.tag) {
								case 26: o = N.memoizedState;
								case 5:
								case 27:
									var s = N;
									if (o ? uh(o) : s.stateNode.complete) {
										F = 0, _d = null;
										var l = s.sibling;
										if (l !== null) N = l;
										else {
											var u = s.return;
											u === null ? N = null : (N = u, gf(u));
										}
										break b;
									}
							}
							F = 0, _d = null, hf(e, t, a, 5);
							break;
						case 6:
							F = 0, _d = null, hf(e, t, a, 6);
							break;
						case 8:
							tf(), Sd = 6;
							break a;
						default: throw Error(c(462));
					}
				}
				ff();
				break;
			} catch (t) {
				rf(e, t);
			}
		while (1);
		return Na = Ma = null, C.H = r, C.A = i, M = n, N === null ? (gd = null, P = 0, Bi(), Sd) : 0;
	}
	function ff() {
		for (; N !== null && !et();) pf(N);
	}
	function pf(e) {
		var t = Ol(e.alternate, e, xd);
		e.memoizedProps = e.pendingProps, t === null ? gf(e) : N = t;
	}
	function mf(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = cl(n, t, t.pendingProps, t.type, void 0, P);
				break;
			case 11:
				t = cl(n, t, t.pendingProps, t.type.render, t.ref, P);
				break;
			case 5:
				bs(t);
				var r = t;
				r === ya && (E ? (Ea(r), r.tag === 5 && r.stateNode != null && (ba = r.stateNode)) : (Ea(r), E = !0));
			default: Ll(n, t), t = N = Zi(t, xd), t = Ol(n, t, xd);
		}
		e.memoizedProps = e.pendingProps, t === null ? gf(e) : N = t;
	}
	function hf(e, t, n, r) {
		Na = Ma = null, bs(t), bo = null, xo = 0;
		var i = t.return;
		try {
			if (qc(e, i, t, n, P)) {
				Sd = 1, Hc(e, ia(n, e.current)), N = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw N = i, t;
			Sd = 1, Hc(e, ia(n, e.current)), N = null;
			return;
		}
		t.flags & 32768 ? (E || r === 1 ? e = !0 : yd || P & 536870912 ? e = !1 : (vd = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = Go.current, r !== null && r.tag === 13 && (r.flags |= 16384))), _f(t, e)) : gf(t);
	}
	function gf(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				_f(t, vd);
				return;
			}
			e = t.return;
			var n = Fl(t.alternate, t, xd);
			if (n !== null) {
				N = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				N = t;
				return;
			}
			N = t = e;
		} while (t !== null);
		Sd === 0 && (Sd = 5);
	}
	function _f(e, t) {
		do {
			var n = Il(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, N = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				N = e;
				return;
			}
			N = e = n;
		} while (e !== null);
		Sd = 6, N = null;
	}
	function vf(e, t, n, r, i, a, o, s, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			Ef();
		while (L !== 0);
		if (M & 6) throw Error(c(327));
		if (t !== null) {
			if (t === e.current) throw Error(c(177));
			e === gd && (N = gd = null, P = 0), Id = t, Fd = e, Ld = n, zd = i, Bd = r, yf(e, t, n, o, s, l, f);
		}
	}
	function yf(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (Rd = s, s |= zi, kt(e, n, s, r, i, a), Hd = null, (n & 335544064) === n ? (Ud = Xa(e), r = 10262) : (Ud = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ff(ot, function() {
			return Df(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), nu = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = C.T, C.T = null, i = Ae.p, Ae.p = 2, a = M, M |= 4;
			try {
				Au(e, t, n);
			} finally {
				M = a, Ae.p = i, C.T = r;
			}
		}
		L = 1, nu ? Vd = Yp(o, e.containerInfo, Ud, Sf, Cf, xf, wf, Df, bf, null, null) : (Sf(), Cf(), wf());
	}
	function bf(e) {
		if (L !== 0) {
			var t = Fd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function xf() {
		L === 3 && (L = 0, Xu(Id, Fd), L = 4);
	}
	function Sf() {
		if (L === 1) {
			L = 0;
			var e = Fd, t = Id, n = Ld, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = C.T, C.T = null;
				var i = Ae.p;
				Ae.p = 2;
				var a = M;
				M |= 4;
				try {
					Du = Ou = !1, qu(t, e, n), n = Tp;
					var o = li(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && ci(s.ownerDocument.documentElement, s)) {
						if (c !== null && ui(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = si(s, h), v = si(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					jh = !!wp, Tp = wp = null;
				} finally {
					M = a, Ae.p = i, C.T = r;
				}
			}
			e.current = t, L = 2;
		}
	}
	function Cf() {
		if (L === 2) {
			L = 0;
			var e = Fd, t = Id, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = C.T, C.T = null;
				var r = Ae.p;
				Ae.p = 2;
				var i = M;
				M |= 4;
				try {
					Mu(e, t.alternate, t);
				} finally {
					M = i, Ae.p = r, C.T = n;
				}
			}
			L = 3;
		}
	}
	function wf() {
		if (L === 4 || L === 3) {
			L = 0;
			var e = Vd;
			Vd = null, tt();
			var t = Fd, n = Id, r = Ld, i = Bd, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? L = 5 : (L = 0, Id = Fd = null, Tf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (Pd = null), Pt(r), n = n.stateNode, ft && typeof ft.onCommitFiberRoot == "function") try {
				ft.onCommitFiberRoot(dt, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = C.T, a = Ae.p, Ae.p = 2, C.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					C.T = n, Ae.p = a;
				}
			}
			if (i = Hd, o = Ud, Ud = null, i !== null && (Hd = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			Ld & 3 && Ef(), Hf(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Gd ? Wd++ : (Wd = 0, Gd = t) : (Wd = 0, Gd = null), Uf(0, !1);
		}
	}
	function Tf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, qa(t)));
	}
	function Ef() {
		return Vd !== null && (Vd.skipTransition(), Vd = null), Sf(), Cf(), wf(), Df();
	}
	function Df() {
		if (L !== 5) return !1;
		var e = Fd, t = Rd;
		Rd = 0;
		var n = Pt(Ld), r = C.T, i = Ae.p;
		try {
			Ae.p = 32 > n ? 32 : n, C.T = null, n = zd, zd = null;
			var a = Fd, o = Ld;
			if (L = 0, Id = Fd = null, Ld = 0, M & 6) throw Error(c(331));
			var s = M;
			if (M |= 4, dd(a.current), rd(a, a.current, o, n), M = s, Uf(0, !1), ft && typeof ft.onPostCommitFiberRoot == "function") try {
				ft.onPostCommitFiberRoot(dt, a);
			} catch {}
			return !0;
		} finally {
			Ae.p = i, C.T = r, Tf(e, t);
		}
	}
	function Of(e, t, n) {
		t = ia(n, t), t = Wc(e.stateNode, t, 2), e = Mo(e, t, 2), e !== null && (Ot(e, 2), Hf(e));
	}
	function kf(e, t, n) {
		if (e.tag === 3) Of(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				Of(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Pd === null || !Pd.has(r))) {
					e = ia(n, e), n = Gc(2), r = Mo(t, n, 2), r !== null && (Kc(n, r, t, e), Ot(r, 2), Hf(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function Af(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new hd();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (bd = !0, i.add(n), e = jf.bind(null, e, t, n), t.then(e, e));
	}
	function jf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, gd === e && (P & n) === n && (Sd === 4 || Sd === 3 && (P & 62914560) === P && 300 > nt() - jd ? M & 2 ? Td |= n : nf(e, 0) : Td |= n, Dd === P && (Dd = 0)), Hf(e);
	}
	function Mf(e, t) {
		t === 0 && (t = Et()), e = Ui(e, t), e !== null && (Ot(e, t), Hf(e));
	}
	function Nf(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), Mf(e, n);
	}
	function Pf(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, i = e.memoizedState;
				i !== null && (n = i.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(c(314));
		}
		r !== null && r.delete(t), Mf(e, n);
	}
	function Ff(e, t) {
		return Qe(e, t);
	}
	var If = null, Lf = null, Rf = !1, zf = !1, Bf = !1, Vf = 0;
	function Hf(e) {
		e !== Lf && e.next === null && (Lf === null ? If = Lf = e : Lf = Lf.next = e), zf = !0, Rf || (Rf = !0, Yf());
	}
	function Uf(e, t) {
		if (!Bf && zf) {
			Bf = !0;
			do
				for (var n = !1, r = If; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - mt(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Jf(r, a));
						} else a = P, a = St(r, r === gd ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || Ct(r, a) || (n = !0, Jf(r, a));
					}
					r = r.next;
				}
			while (n);
			Bf = !1;
		}
	}
	function Wf() {
		Gf();
	}
	function Gf() {
		zf = Rf = !1;
		var e = 0;
		Vf !== 0 && Mp() && (e = Vf);
		for (var t = nt(), n = null, r = If; r !== null;) {
			var i = r.next, a = Kf(r, t);
			a === 0 ? (r.next = null, n === null ? If = i : n.next = i, i === null && (Lf = n)) : (n = r, (e !== 0 || a & 3) && (zf = !0)), r = i;
		}
		L !== 0 && L !== 5 || Uf(e, !1), Vf !== 0 && (Vf = 0);
	}
	function Kf(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - mt(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Tt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = gd, n = P, n = St(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (F === 2 || F === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && $e(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || Ct(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && $e(r), Pt(n)) {
				case 2:
				case 8:
					n = at;
					break;
				case 32:
					n = ot;
					break;
				case 268435456:
					n = ct;
					break;
				default: n = ot;
			}
			return r = qf.bind(null, e), n = Qe(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && $e(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function qf(e, t) {
		if (L !== 0 && L !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (Ef() && e.callbackNode !== n) return null;
		var r = P;
		return r = St(e, e === gd ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Xd(e, r, t), Kf(e, nt()), e.callbackNode != null && e.callbackNode === n ? qf.bind(null, e) : null);
	}
	function Jf(e, t) {
		if (Ef()) return null;
		Xd(e, t, !0);
	}
	function Yf() {
		Lp(function() {
			M & 6 ? Qe(it, Wf) : Gf();
		});
	}
	function Xf() {
		if (Vf === 0) {
			var e = $a;
			e === 0 && (e = vt, vt <<= 1, !(vt & 261888) && (vt = 256)), Vf = e;
		}
		return Vf;
	}
	function Zf(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Nn(e);
	}
	function Qf(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Zf((i[zt] || null).action), o = r.submitter;
			o && (t = (t = o[zt] || null) ? Zf(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new tr("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (Vf !== 0) {
								var e = new FormData(i, o);
								gc(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), gc(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var $f = 0; $f < Ai.length; $f++) {
		var ep = Ai[$f];
		ji(ep.toLowerCase(), "on" + (ep[0].toUpperCase() + ep.slice(1)));
	}
	ji(Si, "onAnimationEnd"), ji(Ci, "onAnimationIteration"), ji(wi, "onAnimationStart"), ji("dblclick", "onDoubleClick"), ji("focusin", "onFocus"), ji("focusout", "onBlur"), ji(Ti, "onTransitionRun"), ji(Ei, "onTransitionStart"), ji(Di, "onTransitionCancel"), ji(Oi, "onTransitionEnd"), rn("onMouseEnter", ["mouseout", "mouseover"]), rn("onMouseLeave", ["mouseout", "mouseover"]), rn("onPointerEnter", ["pointerout", "pointerover"]), rn("onPointerLeave", ["pointerout", "pointerover"]), nn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), nn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), nn("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), nn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), nn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), nn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var tp = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), np = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tp));
	function rp(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Ii(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Ii(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function R(e, t) {
		var n = t[Vt];
		n === void 0 && (n = t[Vt] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (sp(t, e, 2, !1), n.add(r));
	}
	function ip(e, t, n) {
		var r = 0;
		t && (r |= 4), sp(n, e, r, t);
	}
	var ap = "_reactListening" + Math.random().toString(36).slice(2);
	function op(e) {
		if (!e[ap]) {
			e[ap] = !0, en.forEach(function(t) {
				t !== "selectionchange" && (np.has(t) || ip(t, !1, e), ip(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[ap] || (t[ap] = !0, ip("selectionchange", !1, t));
		}
	}
	function sp(e, t, n, r) {
		switch (Rh(t)) {
			case 2:
				var i = Mh;
				break;
			case 8:
				i = Nh;
				break;
			default: i = Ph;
		}
		n = i.bind(null, t, n, e), i = void 0, !Wn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function cp(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var s = r.stateNode.containerInfo;
				if (s === i) break;
				if (o === 4) for (o = r.return; o !== null;) {
					var c = o.tag;
					if ((c === 3 || c === 4) && o.stateNode.containerInfo === i) return;
					o = o.return;
				}
				for (; s !== null;) {
					if (o = Jt(s), o === null) return;
					if (c = o.tag, c === 5 || c === 6 || c === 26 || c === 27) {
						r = a = o;
						continue a;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
		Vn(function() {
			var r = a, i = In(n), o = [];
			a: {
				var s = ki.get(e);
				if (s !== void 0) {
					var c = tr, l = e;
					switch (e) {
						case "keypress": if (Xn(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = yr;
							break;
						case "focusin":
							l = "focus", c = ur;
							break;
						case "focusout":
							l = "blur", c = ur;
							break;
						case "beforeblur":
						case "afterblur":
							c = ur;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							c = cr;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							c = lr;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							c = Sr;
							break;
						case Si:
						case Ci:
						case wi:
							c = dr;
							break;
						case Oi:
							c = Cr;
							break;
						case "scroll":
						case "scrollend":
							c = rr;
							break;
						case "wheel":
							c = wr;
							break;
						case "copy":
						case "cut":
						case "paste":
							c = fr;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							c = br;
							break;
						case "submit":
							c = xr;
							break;
						case "toggle":
						case "beforetoggle": c = Tr;
					}
					var u = !!(t & 4), f = !u && (e === "scroll" || e === "scrollend"), p = u ? s === null ? null : s + "Capture" : s;
					u = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = Hn(m, p), g != null && u.push(lp(m, g, h))), f) break;
						m = m.return;
					}
					0 < u.length && (s = new c(s, l, null, n, i), o.push({
						event: s,
						listeners: u
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (c = e === "mouseover" || e === "pointerover", s = e === "mouseout" || e === "pointerout", c && n !== Fn && (l = n.relatedTarget || n.fromElement) && (Jt(l) || l[Bt])) break a;
					(s || c) && (l = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window, s ? (c = n.relatedTarget || n.toElement, s = r, c = c ? Jt(c) : null, c !== null && (f = d(c), u = c.tag, c !== f || u !== 5 && u !== 27 && u !== 6) && (c = null)) : (s = null, c = r), s !== c && (u = cr, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (u = br, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = s == null ? l : Xt(s), h = c == null ? l : Xt(c), l = new u(g, m + "leave", s, n, i), l.target = f, l.relatedTarget = h, g = null, Jt(i) === r && (u = new u(p, m + "enter", c, n, i), u.target = h, u.relatedTarget = f, g = u), f = g, u = s && c ? se(s, c, dp) : null, s !== null && fp(o, l, s, u, !1), c !== null && f !== null && fp(o, f, c, u, !0)));
				}
				a: {
					if (s = r ? Xt(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var _ = Gr;
					else if (zr(s)) {
						if (Kr) _ = ti;
						else {
							_ = $r;
							var v = Qr;
						}
					} else c = s.nodeName, !c || c.toLowerCase() !== "input" || s.type !== "checkbox" && s.type !== "radio" ? r && An(r.elementType) && (_ = Gr) : _ = ei;
					if (_ &&= _(e, r)) {
						Br(o, _, n, i);
						break a;
					}
					v && v(e, s, r);
				}
				switch (v = r ? Xt(r) : window, e) {
					case "focusin":
						(zr(v) || v.contentEditable === "true") && (fi = v, pi = r, mi = null);
						break;
					case "focusout":
						mi = pi = fi = null;
						break;
					case "mousedown":
						hi = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						hi = !1, gi(o, n, i);
						break;
					case "selectionchange": if (di) break;
					case "keydown":
					case "keyup": gi(o, n, i);
				}
				var y;
				if (Dr) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else Fr ? Nr(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (Ar && n.locale !== "ko" && (Fr || b !== "onCompositionStart" ? b === "onCompositionEnd" && Fr && (y = Yn()) : (Kn = i, qn = "value" in Kn ? Kn.value : Kn.textContent, Fr = !0)), v = up(r, b), 0 < v.length && (b = new pr(b, e, null, n, i), o.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = Pr(n), y !== null && (b.data = y)))), (y = kr ? Ir(e, n) : Lr(e, n)) && (b = up(r, "onBeforeInput"), 0 < b.length && (v = new pr("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: v,
					listeners: b
				}), v.data = y)), Qf(o, e, r, n, i);
			}
			rp(o, t);
		});
	}
	function lp(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function up(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = Hn(e, n), i != null && r.unshift(lp(e, i, a)), i = Hn(e, t), i != null && r.push(lp(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function dp(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function fp(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = Hn(n, a), l != null && o.unshift(lp(n, l, c))) : i || (l = Hn(n, a), l != null && o.push(lp(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var pp = /\r\n?/g, mp = /\u0000|\uFFFD/g;
	function hp(e) {
		return (typeof e == "string" ? e : "" + e).replace(pp, "\n").replace(mp, "");
	}
	function gp(e, t) {
		return t = hp(t), hp(e) === t;
	}
	function _p(e, t, n, r, i, a) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || En(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && En(e, "" + r);
				else return;
				break;
			case "className":
				dn(e, "class", r);
				break;
			case "tabIndex":
				dn(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				dn(e, n, r);
				break;
			case "style":
				kn(e, r, a);
				return;
			case "data": if (t !== "object") {
				dn(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = Nn(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof a == "function" && (n === "formAction" ? (t !== "input" && _p(e, t, "name", i.name, i, null), _p(e, t, "formEncType", i.formEncType, i, null), _p(e, t, "formMethod", i.formMethod, i, null), _p(e, t, "formTarget", i.formTarget, i, null)) : (_p(e, t, "encType", i.encType, i, null), _p(e, t, "method", i.method, i, null), _p(e, t, "target", i.target, i, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = Nn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = Pn);
				return;
			case "onScroll":
				r != null && R("scroll", e);
				return;
			case "onScrollEnd":
				r != null && R("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(c(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(c(60));
						a?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = Nn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				R("beforetoggle", e), R("toggle", e), un(e, "popover", r);
				break;
			case "xlinkActuate":
				fn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				fn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				fn(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				fn(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				fn(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				fn(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				fn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				fn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				fn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				un(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = jn.get(n) || n, un(e, n, r);
			else return;
		}
		T = !0;
	}
	function vp(e, t, n, r, i, a) {
		switch (n) {
			case "style":
				kn(e, r, a);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(c(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(c(60));
						a?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") En(e, r);
				else if (typeof r == "number" || typeof r == "bigint") En(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && R("scroll", e);
				return;
			case "onScrollEnd":
				r != null && R("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = Pn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!tn.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), a = n.slice(2, i ? n.length - 7 : void 0), t = e[zt] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(a, t, i), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(a, r, i);
						break a;
					}
					T = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : un(e, n, r);
				}
				return;
		}
		T = !0;
	}
	function yp(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				R("error", e), R("load", e);
				var r = !1, i = !1, a;
				for (a in n) if (n.hasOwnProperty(a)) {
					var o = n[a];
					if (o != null) switch (a) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							i = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(c(137, t));
						default: _p(e, t, a, o, n, null);
					}
				}
				i && _p(e, t, "srcSet", n.srcSet, n, null), r && _p(e, t, "src", n.src, n, null);
				return;
			case "input":
				R("invalid", e);
				var s = a = o = i = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							i = d;
							break;
						case "type":
							o = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							a = d;
							break;
						case "defaultValue":
							s = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(c(137, t));
							break;
						default: _p(e, t, r, d, n, null);
					}
				}
				xn(e, a, s, l, u, o, i, !1);
				return;
			case "select":
				for (i in R("invalid", e), r = o = a = null, n) if (n.hasOwnProperty(i) && (s = n[i], s != null)) switch (i) {
					case "value":
						a = s;
						break;
					case "defaultValue":
						o = s;
						break;
					case "multiple": r = s;
					default: _p(e, t, i, s, n, null);
				}
				t = a, n = o, e.multiple = !!r, t == null ? n != null && Cn(e, !!r, n, !0) : Cn(e, !!r, t, !1);
				return;
			case "textarea":
				for (o in R("invalid", e), a = i = r = null, n) if (n.hasOwnProperty(o) && (s = n[o], s != null)) switch (o) {
					case "value":
						r = s;
						break;
					case "defaultValue":
						i = s;
						break;
					case "children":
						a = s;
						break;
					case "dangerouslySetInnerHTML":
						if (s != null) throw Error(c(91));
						break;
					default: _p(e, t, o, s, n, null);
				}
				Tn(e, r, i, a);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: _p(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				R("beforetoggle", e), R("toggle", e), R("cancel", e), R("close", e);
				break;
			case "iframe":
			case "object":
				R("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < tp.length; r++) R(tp[r], e);
				break;
			case "image":
				R("error", e), R("load", e);
				break;
			case "details":
				R("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": R("error", e), R("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(c(137, t));
					default: _p(e, t, u, r, n, null);
				}
				return;
			default: if (An(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && vp(e, t, d, r, n, void 0));
				return;
			}
		}
		for (s in n) n.hasOwnProperty(s) && (r = n[s], r != null && _p(e, t, s, r, n, null));
	}
	var bp = {};
	function xp(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var i = null, a = null, o = null, s = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || _p(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (T = !0), a = m;
							break;
						case "name":
							m !== f && (T = !0), i = m;
							break;
						case "checked":
							m !== f && (T = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (T = !0), d = m;
							break;
						case "value":
							m !== f && (T = !0), o = m;
							break;
						case "defaultValue":
							m !== f && (T = !0), s = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(c(137, t));
							break;
						default: m !== f && _p(e, t, p, m, r, f);
					}
				}
				bn(e, o, s, l, u, d, a, i);
				return;
			case "select":
				for (a in m = o = s = p = null, n) if (l = n[a], n.hasOwnProperty(a) && l != null) switch (a) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(a) || _p(e, t, a, null, r, l);
				}
				for (i in r) if (a = r[i], l = n[i], r.hasOwnProperty(i) && (a != null || l != null)) switch (i) {
					case "value":
						a !== l && (T = !0), p = a;
						break;
					case "defaultValue":
						a !== l && (T = !0), s = a;
						break;
					case "multiple": a !== l && (T = !0), o = a;
					default: a !== l && _p(e, t, i, a, r, l);
				}
				t = s, n = o, r = m, p == null ? !!r != !!n && (t == null ? Cn(e, !!n, n ? [] : "", !1) : Cn(e, !!n, t, !0)) : Cn(e, !!n, p, !1);
				return;
			case "textarea":
				for (s in m = p = null, n) if (i = n[s], n.hasOwnProperty(s) && i != null && !r.hasOwnProperty(s)) switch (s) {
					case "value": break;
					case "children": break;
					default: _p(e, t, s, null, r, i);
				}
				for (o in r) if (i = r[o], a = n[o], r.hasOwnProperty(o) && (i != null || a != null)) switch (o) {
					case "value":
						i !== a && (T = !0), p = i;
						break;
					case "defaultValue":
						i !== a && (T = !0), m = i;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (i != null) throw Error(c(91));
						break;
					default: i !== a && _p(e, t, o, i, r, a);
				}
				wn(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: _p(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (T = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: _p(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && _p(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(c(137, t));
						break;
					default: _p(e, t, u, p, r, m);
				}
				return;
			default: if (An(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && vp(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || vp(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && _p(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || _p(e, t, f, p, r, m);
	}
	function Sp(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function Cp() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && Sp(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && Sp(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var wp = null, Tp = null;
	function Ep(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function Dp(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function Op(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function kp(e, t, n, r) {
		return n = Ep(n).createElement(e), n[Rt] = r, n[zt] = t, yp(n, e, t), Qt(n), n;
	}
	function Ap(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var jp = null;
	function Mp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== jp && (jp = e, !0) : (jp = null, !1);
	}
	var Np = typeof setTimeout == "function" ? setTimeout : void 0, Pp = typeof clearTimeout == "function" ? clearTimeout : void 0, Fp = typeof Promise == "function" ? Promise : void 0, Ip = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Np, Lp = typeof queueMicrotask == "function" ? queueMicrotask : Fp === void 0 ? Np : function(e) {
		return Fp.resolve(null).then(e).catch(Rp);
	};
	function Rp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function zp(e) {
		return e === "head";
	}
	function Bp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), rg(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") Nm(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, Nm(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[Gt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && Nm(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		rg(t);
	}
	function Vp(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function Hp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Up(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function Wp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Gp(e) {
		return Wp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function Kp(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return Wp(t, n, e);
	}
	function qp(e) {
		return e.documentElement.clientHeight;
	}
	function Jp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Yp(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (qp(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += dh(f), u > mh) {
									s.length = o;
									break;
								}
								f = new Promise(Jp.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Xp(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Xp.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : x({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Xp.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Xp.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Zp(e) {
		return {
			name: e,
			group: new Xp("group", e),
			imagePair: new Xp("image-pair", e),
			old: new Xp("old", e),
			new: new Xp("new", e)
		};
	}
	function Qp(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	Qp.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (rm(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = tm(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), _(this._fragmentFiber.child, !1, $p, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function $p(e, t, n, r) {
		return te(e).addEventListener(t, n, r), !1;
	}
	Qp.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = rm(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = tm(i.optionsOrUseCapture), _(this._fragmentFiber.child, !1, em, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function em(e, t, n, r) {
		return te(e).removeEventListener(t, n, r), !1;
	}
	function tm(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function nm(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function rm(e, t, n, r) {
		if (e.length === 0) return -1;
		r = nm(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && nm(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	Qp.prototype.dispatchEvent = function(e) {
		var t = v(this._fragmentFiber);
		if (t === null) return !0;
		t = te(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, tm(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, tm(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, Qp.prototype.focus = function(e) {
		_(this._fragmentFiber.child, !0, im, e, void 0, void 0);
	};
	function im(e, t) {
		return e.tag !== 6 && (e = te(e), km(e, t));
	}
	Qp.prototype.focusLast = function(e) {
		var t = [];
		_(this._fragmentFiber.child, !0, am, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !im(t[n], e); n--);
	};
	function am(e, t) {
		return t.push(e), !1;
	}
	Qp.prototype.blur = function() {
		var e = v(this._fragmentFiber);
		e !== null && (e = te(e), e = Ep(e).activeElement, e !== null && _(this._fragmentFiber.child, !1, om, e, void 0, void 0));
	};
	function om(e, t) {
		return e.tag !== 6 && (e = te(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	Qp.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), _(this._fragmentFiber.child, !1, sm, e, void 0, void 0);
	};
	function sm(e, t) {
		return e.tag !== 6 && (e = te(e), t.observe(e), !1);
	}
	Qp.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), _(this._fragmentFiber.child, !1, cm, e, void 0, void 0);
			for (var n = t = 0; n < lm.length; n++) {
				var r = lm[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : lm[t++] = r;
			}
			lm.length = t;
		}
	};
	function cm(e, t) {
		return e.tag !== 6 && (e = te(e), t.unobserve(e), !1);
	}
	var lm = [], um = !1;
	function dm(e, t, n) {
		lm.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), um || (um = !0, Am(function() {
			um = !1;
			var e = lm;
			lm = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	Qp.prototype.getClientRects = function() {
		var e = [];
		return _(this._fragmentFiber.child, !1, fm, e, void 0, void 0), e;
	};
	function fm(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = te(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	Qp.prototype.getRootNode = function(e) {
		var t = v(this._fragmentFiber);
		return t === null ? this : te(t).getRootNode(e);
	}, Qp.prototype.compareDocumentPosition = function(e) {
		var t = v(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		_(this._fragmentFiber.child, !1, am, n, void 0, void 0);
		var r = te(t);
		if (n.length === 0) {
			if (n = r, y(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = b(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = te(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = te(n[0]), i = te(n[n.length - 1]);
		var a = y(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || pm(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function pm(e, t, n, r, i) {
		var a = Jt(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = v(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = se(n, a, oe), t === null ? t = !1 : (_(t, !0, ie, a, n), a = ne, ne = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = se(r, a, oe), t === null ? t = !1 : (_(t, !0, ae, a, r), a = ne, re = ne = null, t = a !== null)), t) : !1;
	}
	function mm(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	Qp.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(c(566));
		var t = [];
		_(this._fragmentFiber.child, !1, am, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = b(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || v(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = te(r), mm(e, n);
				return;
			}
			if (r = te(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var i = t[r];
			i.tag === 6 ? (i = te(i), mm(i, n)) : te(i).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function hm(e, t) {
		return e = te(e), gm(e, t), !1;
	}
	function gm(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function _m(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, tm(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < lm.length; i++) {
				var a = lm[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (lm[r++] = a);
			}
			lm.length = r, n.observe(e);
		}), gm(e, t));
	}
	function vm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, tm(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? dm(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function ym(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					ym(n), qt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function bm(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[Gt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = Em(e.nextSibling), e === null) break;
		}
		return null;
	}
	function xm(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Em(e.nextSibling), e === null)) return null;
		return e;
	}
	function Sm(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Em(e.nextSibling), e === null)) return null;
		return e;
	}
	function Cm(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function wm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function Tm(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function Em(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var z = null;
	function Dm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return Em(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function Om(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function km(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function Am(e) {
		Ip(function() {
			Ip(function(t) {
				return e(t);
			});
		});
	}
	function jm(e, t, n) {
		switch (t = Ep(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(c(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(c(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(c(454));
				return e;
			default: throw Error(c(451));
		}
	}
	function Mm(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && _p(e, t, r, null, bp, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Pn && (e.onclick = null), qt(e);
	}
	function Nm(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		qt(e);
	}
	var Pm = /* @__PURE__ */ new Map(), Fm = /* @__PURE__ */ new Set();
	function Im(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var Lm = Ae.d;
	Ae.d = {
		f: Rm,
		r: zm,
		D: Hm,
		C: Um,
		L: Wm,
		m: Gm,
		X: qm,
		S: Km,
		M: B
	};
	function Rm() {
		var e = Lm.f(), t = ef();
		return e || t;
	}
	function zm(e) {
		var t = Yt(e);
		t !== null && t.tag === 5 && t.type === "form" ? vc(t) : Lm.r(e);
	}
	var Bm = typeof document > "u" ? null : document;
	function Vm(e, t, n) {
		var r = Bm;
		if (r && typeof t == "string" && t) {
			var i = yn(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), Fm.has(i) || (Fm.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), yp(t, "link", e), Qt(t), r.head.appendChild(t)));
		}
	}
	function Hm(e) {
		Lm.D(e), Vm("dns-prefetch", e, null);
	}
	function Um(e, t) {
		Lm.C(e, t), Vm("preconnect", e, t);
	}
	function Wm(e, t, n) {
		Lm.L(e, t, n);
		var r = Bm;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + yn(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + yn(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + yn(n.imageSizes) + "\"]")) : i += "[href=\"" + yn(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Ym(e);
					break;
				case "script": a = $m(e);
			}
			if (!(Pm.has(a) || (e = x({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), Pm.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Xm(a)) || t === "script" && r.querySelector(eh(a))))) {
				var o = r.createElement("link");
				yp(o, "link", e), t === "style" && (o[Kt] = !0, o.onload = o.onerror = function() {
					$t(o);
				}), Qt(o), r.head.appendChild(o);
			}
		}
	}
	function Gm(e, t) {
		Lm.m(e, t);
		var n = Bm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + yn(r) + "\"][href=\"" + yn(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = $m(e);
			}
			if (!Pm.has(a) && (e = x({
				rel: "modulepreload",
				href: e
			}, t), Pm.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(eh(a))) return;
				}
				r = n.createElement("link"), yp(r, "link", e), Qt(r), n.head.appendChild(r);
			}
		}
	}
	function Km(e, t, n) {
		Lm.S(e, t, n);
		var r = Bm;
		if (r && e) {
			var i = Zt(r).hoistableStyles, a = Ym(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Xm(a))) s.loading = 5;
				else {
					e = x({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = Pm.get(a)) && rh(e, n);
					var c = o = r.createElement("link");
					Qt(c), yp(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, nh(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function qm(e, t) {
		Lm.X(e, t);
		var n = Bm;
		if (n && e) {
			var r = Zt(n).hoistableScripts, i = $m(e), a = r.get(i);
			a || (a = n.querySelector(eh(i)), a || (e = x({
				src: e,
				async: !0
			}, t), (t = Pm.get(i)) && ih(e, t), a = n.createElement("script"), Qt(a), yp(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function B(e, t) {
		Lm.M(e, t);
		var n = Bm;
		if (n && e) {
			var r = Zt(n).hoistableScripts, i = $m(e), a = r.get(i);
			a || (a = n.querySelector(eh(i)), a || (e = x({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = Pm.get(i)) && ih(e, t), a = n.createElement("script"), Qt(a), yp(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Jm(e, t, n, r) {
		var i = (i = w.current) ? Im(i) : null;
		if (!i) throw Error(c(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Ym(n.href), t = Zt(i).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Ym(n.href);
					var a = Zt(i).hoistableStyles, o = a.get(e);
					if (o || (i = i.ownerDocument || i, o = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, a.set(e, o), (a = i.querySelector(Xm(e))) ? a._p || (o.instance = a, o.state.loading = 5) : (a = Pm.get(e), a || (a = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, Pm.set(e, a)), Qm(i, e, a, o.state))), t && r === null) throw Error(c(528, ""));
					return o;
				}
				if (t && r !== null) throw Error(c(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = $m(n), t = Zt(i).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(c(444, e));
		}
	}
	function Ym(e) {
		return "href=\"" + yn(e) + "\"";
	}
	function Xm(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Zm(e) {
		return x({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Qm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[Kt]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Kt] = !0, t.onload = t.onerror = $t.bind(null, t), yp(t, "link", n), Qt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function $m(e) {
		return "[src=\"" + yn(e) + "\"]";
	}
	function eh(e) {
		return "script[async]" + e;
	}
	function th(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + yn(n.href) + "\"]");
				if (r) return t.instance = r, Qt(r), r;
				var i = x({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Qt(r), yp(r, "style", i), nh(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				i = Ym(n.href);
				var a = e.querySelector(Xm(i));
				if (a) return t.state.loading |= 4, t.instance = a, Qt(a), a;
				r = Zm(n), (i = Pm.get(i)) && rh(r, i), a = (e.ownerDocument || e).createElement("link"), Qt(a);
				var o = a;
				return o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), yp(a, "link", r), t.state.loading |= 4, nh(a, n.precedence, e), t.instance = a;
			case "script": return a = $m(n.src), (i = e.querySelector(eh(a))) ? (t.instance = i, Qt(i), i) : (r = n, (i = Pm.get(a)) && (r = x({}, n), ih(r, i)), e = e.ownerDocument || e, i = e.createElement("script"), Qt(i), yp(i, "link", r), e.head.appendChild(i), t.instance = i);
			case "void": return null;
			default: throw Error(c(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, nh(r, n.precedence, e));
		return t.instance;
	}
	function nh(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function rh(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function ih(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var ah = null;
	function oh(e, t, n) {
		if (ah === null) {
			var r = /* @__PURE__ */ new Map(), i = ah = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = ah, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[Gt] || a[Rt] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function sh(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function ch(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function lh(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function uh(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function dh(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function fh(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += dh(t), e.suspenseyImages.push(t)), e = vh.bind(e), t.decode().then(e, e));
	}
	function ph(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Ym(r.href), a = t.querySelector(Xm(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = _h.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Qt(a);
					return;
				}
				a = t.ownerDocument || t, r = Zm(r), (i = Pm.get(i)) && rh(r, i), a = a.createElement("link"), Qt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), yp(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = _h.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var mh = 0;
	function hh(e, t) {
		return e.stylesheets && e.count === 0 && bh(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && bh(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && mh === 0 && (mh = 62500 * Cp());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && bh(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > mh ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function gh(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) bh(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function _h() {
		this.count--, gh(this);
	}
	function vh() {
		this.imgCount--, gh(this);
	}
	var yh = null;
	function bh(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, yh = /* @__PURE__ */ new Map(), t.forEach(xh, e), yh = null, _h.call(e));
	}
	function xh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = yh.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), yh.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = _h.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var Sh = {
		$$typeof: he,
		Provider: null,
		Consumer: null,
		_currentValue: je,
		_currentValue2: je,
		_threadCount: 0
	};
	function Ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Dt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Dt(0), this.hiddenUpdates = Dt(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function wh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new Ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Ji(3, null, null, t), e.current = a, a.stateNode = e, t = Ka(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, ko(a), e;
	}
	function Th(e) {
		return e ? (e = Ki, e) : Ki;
	}
	function Eh(e, t, n, r, i, a) {
		i = Th(i), r.context === null ? r.context = i : r.pendingContext = i, r = jo(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = Mo(e, r, t), n !== null && (Yd(n, e, t), No(n, e, t));
	}
	function Dh(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function Oh(e, t) {
		Dh(e, t), (e = e.alternate) && Dh(e, t);
	}
	function kh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Ui(e, 67108864);
			t !== null && Yd(t, e, 67108864), Oh(e, 67108864);
		}
	}
	function Ah(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Kd();
			t = Nt(t);
			var n = Ui(e, t);
			n !== null && Yd(n, e, t), Oh(e, t);
		}
	}
	var jh = !0;
	function Mh(e, t, n, r) {
		var i = C.T;
		C.T = null;
		var a = Ae.p;
		try {
			Ae.p = 2, Ph(e, t, n, r);
		} finally {
			Ae.p = a, C.T = i;
		}
	}
	function Nh(e, t, n, r) {
		var i = C.T;
		C.T = null;
		var a = Ae.p;
		try {
			Ae.p = 8, Ph(e, t, n, r);
		} finally {
			Ae.p = a, C.T = i;
		}
	}
	function Ph(e, t, n, r) {
		if (jh) {
			var i = Fh(r);
			if (i === null) cp(e, t, r, Ih, n), qh(e, r);
			else if (Yh(i, e, t, n, r)) r.stopPropagation();
			else if (qh(e, r), t & 4 && -1 < Kh.indexOf(e)) {
				for (; i !== null;) {
					var a = Yt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = xt(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - mt(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									Hf(a), !(M & 6) && (Nd = nt() + 500, Uf(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Ui(a, 2), s !== null && Yd(s, a, 2), ef(), Oh(a, 2);
					}
					if (a = Fh(r), a === null && cp(e, t, r, Ih, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else cp(e, t, r, null, n);
		}
	}
	function Fh(e) {
		return e = In(e), Lh(e);
	}
	var Ih = null;
	function Lh(e) {
		if (Ih = null, e = Jt(e), e !== null) {
			var t = d(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = f(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = p(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return Ih = e, null;
	}
	function Rh(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "fullscreenerror":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "resize":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (rt()) {
				case it: return 2;
				case at: return 8;
				case ot:
				case st: return 32;
				case ct: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var zh = !1, Bh = null, Vh = null, Hh = null, Uh = /* @__PURE__ */ new Map(), Wh = /* @__PURE__ */ new Map(), Gh = [], Kh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function qh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Bh = null;
				break;
			case "dragenter":
			case "dragleave":
				Vh = null;
				break;
			case "mouseover":
			case "mouseout":
				Hh = null;
				break;
			case "pointerover":
			case "pointerout":
				Uh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": Wh.delete(t.pointerId);
		}
	}
	function Jh(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Yt(t), t !== null && kh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Yh(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Bh = Jh(Bh, e, t, n, r, i), !0;
			case "dragenter": return Vh = Jh(Vh, e, t, n, r, i), !0;
			case "mouseover": return Hh = Jh(Hh, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Uh.set(a, Jh(Uh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, Wh.set(a, Jh(Wh.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Xh(e) {
		var t = Jt(e.target);
		if (t !== null) {
			var n = d(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = f(n), t !== null) {
						e.blockedOn = t, It(e.priority, function() {
							Ah(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = p(n), t !== null) {
						e.blockedOn = t, It(e.priority, function() {
							Ah(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Zh(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = Fh(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				Fn = r, n.target.dispatchEvent(r), Fn = null;
			} else return t = Yt(n), t !== null && kh(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Qh(e, t, n) {
		Zh(e) && n.delete(t);
	}
	function $h() {
		zh = !1, Bh !== null && Zh(Bh) && (Bh = null), Vh !== null && Zh(Vh) && (Vh = null), Hh !== null && Zh(Hh) && (Hh = null), Uh.forEach(Qh), Wh.forEach(Qh);
	}
	function eg(e, t) {
		e.blockedOn === t && (e.blockedOn = null, zh || (zh = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, $h)));
	}
	var tg = null;
	function ng(e) {
		tg !== e && (tg = e, i.unstable_scheduleCallback(i.unstable_NormalPriority, function() {
			tg === e && (tg = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Lh(r || n) === null) continue;
					break;
				}
				var a = Yt(n);
				a !== null && (e.splice(t, 3), t -= 3, gc(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function rg(e) {
		function t(t) {
			return eg(t, e);
		}
		Bh !== null && eg(Bh, e), Vh !== null && eg(Vh, e), Hh !== null && eg(Hh, e), Uh.forEach(t), Wh.forEach(t);
		for (var n = 0; n < Gh.length; n++) {
			var r = Gh[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Gh.length && (n = Gh[0], n.blockedOn === null);) Xh(n), n.blockedOn === null && Gh.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[zt] || null;
			if (typeof a == "function") o || ng(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[zt] || null) s = o.formAction;
					else if (Lh(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), ng(n);
			}
		}
	}
	function ig() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function ag(e) {
		this._internalRoot = e;
	}
	og.prototype.render = ag.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(c(409));
		var n = t.current;
		Eh(n, Kd(), e, t, null, null);
	}, og.prototype.unmount = ag.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			Eh(e.current, 2, null, e, null, null), ef(), t[Bt] = null;
		}
	};
	function og(e) {
		this._internalRoot = e;
	}
	og.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = Ft();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Gh.length && t !== 0 && t < Gh[n].priority; n++);
			Gh.splice(n, 0, e), n === 0 && Xh(e);
		}
	};
	var sg = a.version;
	if (sg !== "19.3.0") throw Error(c(527, sg, "19.3.0"));
	Ae.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
		return e = h(t), e = e === null ? null : g(e), e = e === null ? null : e.stateNode, e;
	};
	var cg = {
		bundleType: 0,
		version: "19.3.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: C,
		reconcilerVersion: "19.3.0"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var lg = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!lg.isDisabled && lg.supportsFiber) try {
			dt = lg.inject(cg), ft = lg;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!l(e)) throw Error(c(299));
		var n = !1, r = "", i = zc, a = Bc, o = Vc;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (a = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = wh(e, 1, !1, null, null, n, r, null, i, a, o, ig), e[Bt] = t.current, op(e), new ag(t);
	}, e.hydrateRoot = function(e, t, n) {
		if (!l(e)) throw Error(c(299));
		var r = !1, i = "", a = zc, o = Bc, s = Vc, u = null;
		return n != null && (!0 === n.unstable_strictMode && (r = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (a = n.onUncaughtError), n.onCaughtError !== void 0 && (o = n.onCaughtError), n.onRecoverableError !== void 0 && (s = n.onRecoverableError), n.formState !== void 0 && (u = n.formState)), t = wh(e, 1, !0, t, n ?? null, r, i, u, a, o, s, ig), t.context = Th(null), n = t.current, r = Kd(), r = Nt(r), i = jo(r), i.callback = null, Mo(n, i, r), n = r, t.current.lanes = n, Ot(t, n), Hf(t), e[Bt] = t.current, op(e), new og(t);
	}, e.version = "19.3.0";
})), f = /* @__PURE__ */ e(((e) => {
	n(), t.env.NODE_ENV !== "production" && (function() {
		function n(e, t) {
			for (e = e.memoizedState; e !== null && 0 < t;) e = e.next, t--;
			return e;
		}
		function i(e, t, n, r) {
			if (n >= t.length) return r;
			var a = t[n], o = qm(e) ? e.slice() : z({}, e);
			return o[a] = i(e[a], t, n + 1, r), o;
		}
		function a(e, t, n) {
			if (t.length !== n.length) console.warn("copyWithRename() expects paths of the same length");
			else {
				for (var r = 0; r < n.length - 1; r++) if (t[r] !== n[r]) {
					console.warn("copyWithRename() expects paths to be the same except for the deepest key");
					return;
				}
				return o(e, t, n, 0);
			}
		}
		function o(e, t, n, r) {
			var i = t[r], a = qm(e) ? e.slice() : z({}, e);
			return r + 1 === t.length ? (a[n[r]] = a[i], qm(a) ? a.splice(i, 1) : delete a[i]) : a[i] = o(e[i], t, n, r + 1), a;
		}
		function c(e, t, n) {
			var r = t[n], i = qm(e) ? e.slice() : z({}, e);
			return n + 1 === t.length ? (qm(i) ? i.splice(r, 1) : delete i[r], i) : (i[r] = c(e[r], t, n + 1), i);
		}
		function l() {
			return !1;
		}
		function d() {
			return null;
		}
		function f() {
			console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks");
		}
		function p() {
			console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
		}
		function m() {}
		function h() {}
		function g(e) {
			var t = [];
			return e.forEach(function(e) {
				t.push(e);
			}), t.sort().join(", ");
		}
		function _(e, t, n, r) {
			return new Ur(e, t, n, r);
		}
		function v(e, t) {
			e.context === zv && (Xp(e.current, 2, t, e, null, null), mu());
		}
		function y(e, t) {
			if (Bv !== null) {
				var n = t.staleFamilies;
				t = t.updatedFamilies, Gu(), Hr(e.current, t, n), mu();
			}
		}
		function b(e) {
			Bv = e;
		}
		function ee(e) {
			return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
		}
		function te(e) {
			for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
			for (; t.return;) t = t.return;
			return t.tag === 3 ? e : null;
		}
		function ne(e) {
			if (e.tag === 13) {
				var t = e.memoizedState;
				if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
			}
			return null;
		}
		function re(e) {
			if (e.tag === 31) {
				var t = e.memoizedState;
				if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
			}
			return null;
		}
		function ie(e) {
			if (te(e) !== e) throw Error("Unable to find node on an unmounted component.");
		}
		function ae(e) {
			var t = e.alternate;
			if (!t) {
				if (t = te(e), t === null) throw Error("Unable to find node on an unmounted component.");
				return t === e ? e : null;
			}
			for (var n = e, r = t;;) {
				var i = n.return;
				if (i === null) break;
				var a = i.alternate;
				if (a === null) {
					if (r = i.return, r !== null) {
						n = r;
						continue;
					}
					break;
				}
				if (i.child === a.child) {
					for (a = i.child; a;) {
						if (a === n) return ie(i), e;
						if (a === r) return ie(i), t;
						a = a.sibling;
					}
					throw Error("Unable to find node on an unmounted component.");
				}
				if (n.return !== r.return) n = i, r = a;
				else {
					for (var o = !1, s = i.child; s;) {
						if (s === n) {
							o = !0, n = i, r = a;
							break;
						}
						if (s === r) {
							o = !0, r = i, n = a;
							break;
						}
						s = s.sibling;
					}
					if (!o) {
						for (s = a.child; s;) {
							if (s === n) {
								o = !0, n = a, r = i;
								break;
							}
							if (s === r) {
								o = !0, r = a, n = i;
								break;
							}
							s = s.sibling;
						}
						if (!o) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
					}
				}
				if (n.alternate !== r) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
			}
			if (n.tag !== 3) throw Error("Unable to find node on an unmounted component.");
			return n.stateNode.current === n ? e : t;
		}
		function oe(e) {
			var t = e.tag;
			if (t === 5 || t === 26 || t === 27 || t === 6) return e;
			for (e = e.child; e !== null;) {
				if (t = oe(e), t !== null) return t;
				e = e.sibling;
			}
			return null;
		}
		function se(e, t, n, r, i) {
			x(e.child, !1, t, n, r, i);
		}
		function x(e, t, n, r, i, a) {
			for (; e !== null;) {
				if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && x(e.child, t, n, r, i, a)) return !0;
				e = e.sibling;
			}
			return !1;
		}
		function ce(e) {
			for (e = e.return; e !== null;) {
				if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
				e = e.return;
			}
			return null;
		}
		function le(e) {
			var t = !1;
			for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
			return t;
		}
		function ue(e) {
			var t = [null, null], n = ce(e);
			return n === null || de(t, e, n.child, { foundSelf: !1 }), t;
		}
		function de(e, t, n, r) {
			for (; n !== null;) {
				if (n === t) r.foundSelf = !0;
				else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
					if (r.foundSelf) return e[1] = n, !0;
					e[0] = n;
				} else if ((n.tag !== 22 || n.memoizedState === null) && de(e, t, n.child, r)) return !0;
				n = n.sibling;
			}
			return !1;
		}
		function fe(e) {
			switch (e.tag) {
				case 5:
				case 27:
				case 6: return e.stateNode;
				case 3: return e.stateNode.containerInfo;
				default: throw Error("Expected to find a host node. This is a bug in React.");
			}
		}
		function pe(e, t, n) {
			return e === n || e === t && (Tm = e, !0);
		}
		function me(e, t, n) {
			return e === n ? (Em = e, !1) : e === t && (Em !== null && (Tm = e), !0);
		}
		function he(e) {
			if (e === null) return null;
			do
				e = e === null ? null : e.return;
			while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
			return e || null;
		}
		function ge(e, t, n) {
			for (var r = 0, i = e; i; i = n(i)) r++;
			i = 0;
			for (var a = t; a; a = n(a)) i++;
			for (; 0 < r - i;) e = n(e), r--;
			for (; 0 < i - r;) t = n(t), i--;
			for (; r--;) {
				if (e === t || t !== null && e === t.alternate) return e;
				e = n(e), t = n(t);
			}
			return null;
		}
		function _e(e) {
			return typeof e != "object" || !e ? null : (e = Gm && e[Gm] || e["@@iterator"], typeof e == "function" ? e : null);
		}
		function ve(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === Km ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case Am: return "Fragment";
				case Mm: return "Profiler";
				case jm: return "StrictMode";
				case Im: return "Suspense";
				case Lm: return "SuspenseList";
				case Bm: return "Activity";
				case Um: return "ViewTransition";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case km: return "Portal";
				case Pm: return e.displayName || "Context";
				case Nm: return (e._context.displayName || "Context") + ".Consumer";
				case Fm:
					var t = e.render;
					return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case Rm: return t = e.displayName || null, t === null ? ve(e.type) || "Memo" : t;
				case zm:
					t = e._payload, e = e._init;
					try {
						return ve(e(t));
					} catch {}
			}
			return null;
		}
		function ye(e) {
			return typeof e.tag == "number" ? S(e) : typeof e.name == "string" ? e.name : null;
		}
		function S(e) {
			var t = e.type;
			switch (e.tag) {
				case 31: return "Activity";
				case 24: return "Cache";
				case 9: return (t._context.displayName || "Context") + ".Consumer";
				case 10: return t.displayName || "Context";
				case 18: return "DehydratedFragment";
				case 11: return e = t.render, e = e.displayName || e.name || "", t.displayName || (e === "" ? "ForwardRef" : "ForwardRef(" + e + ")");
				case 7: return "Fragment";
				case 26:
				case 27:
				case 5: return t;
				case 4: return "Portal";
				case 3: return "Root";
				case 6: return "Text";
				case 16: return ve(t);
				case 8: return t === jm ? "StrictMode" : "Mode";
				case 22:
					if (e.return !== null) return S(e.return);
					break;
				case 12: return "Profiler";
				case 21: return "Scope";
				case 13: return "Suspense";
				case 19: return "SuspenseList";
				case 25: return "TracingMarker";
				case 30: return "ViewTransition";
				case 1:
				case 0:
				case 14:
				case 15:
					if (typeof t == "function") return t.displayName || t.name || null;
					if (typeof t == "string") return t;
					break;
				case 29:
					if (t = e._debugInfo, t != null) {
						for (var n = t.length - 1; 0 <= n; n--) if (typeof t[n].name == "string") return t[n].name;
					}
					if (e.return !== null) return S(e.return);
			}
			return null;
		}
		function be(e) {
			return { current: e };
		}
		function xe(e, t) {
			0 > Qm ? console.error("Unexpected pop.") : (t !== Zm[Qm] && console.error("Unexpected Fiber popped."), e.current = Xm[Qm], Xm[Qm] = null, Zm[Qm] = null, Qm--);
		}
		function Se(e, t, n) {
			Qm++, Xm[Qm] = e.current, Zm[Qm] = n, e.current = t;
		}
		function Ce(e) {
			return e === null && console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."), e;
		}
		function we(e, t) {
			Se(th, t, e), Se(eh, e, e), Se($m, null, e);
			var n = t.nodeType;
			switch (n) {
				case 9:
				case 11:
					n = n === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Yd(t) : vT;
					break;
				default: if (n = t.tagName, t = t.namespaceURI) t = Yd(t), t = Xd(t, n);
				else switch (n) {
					case "svg":
						t = yT;
						break;
					case "math":
						t = bT;
						break;
					default: t = vT;
				}
			}
			n = n.toLowerCase(), n = ln(null, n), n = {
				context: t,
				ancestorInfo: n
			}, xe($m, e), Se($m, n, e);
		}
		function Te(e) {
			xe($m, e), xe(eh, e), xe(th, e);
		}
		function Ee() {
			return Ce($m.current);
		}
		function De(e) {
			var t = e.memoizedState;
			t !== null && (eE._currentValue = t.memoizedState, Se(nh, e, e)), t = Ce($m.current);
			var n = e.type, r = Xd(t.context, n);
			n = ln(t.ancestorInfo, n), r = {
				context: r,
				ancestorInfo: n
			}, t !== r && (Se(eh, e, e), Se($m, r, e));
		}
		function Oe(e) {
			eh.current === e && (xe($m, e), xe(eh, e)), nh.current === e && (xe(nh, e), eE._currentValue = $T);
		}
		function ke() {}
		function C() {
			if (rh === 0) {
				ih = console.log, ah = console.info, oh = console.warn, sh = console.error, ch = console.group, lh = console.groupCollapsed, uh = console.groupEnd;
				var e = {
					configurable: !0,
					enumerable: !0,
					value: ke,
					writable: !0
				};
				Object.defineProperties(console, {
					info: e,
					log: e,
					warn: e,
					error: e,
					group: e,
					groupCollapsed: e,
					groupEnd: e
				});
			}
			rh++;
		}
		function Ae() {
			if (rh--, rh === 0) {
				var e = {
					configurable: !0,
					enumerable: !0,
					writable: !0
				};
				Object.defineProperties(console, {
					log: z({}, e, { value: ih }),
					info: z({}, e, { value: ah }),
					warn: z({}, e, { value: oh }),
					error: z({}, e, { value: sh }),
					group: z({}, e, { value: ch }),
					groupCollapsed: z({}, e, { value: lh }),
					groupEnd: z({}, e, { value: uh })
				});
			}
			0 > rh && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
		}
		function je(e) {
			var t = Error.prepareStackTrace;
			if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith("Error: react-stack-top-frame\n") && (e = e.slice(29)), t = e.indexOf("\n"), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf("\n", t)), t !== -1) e = e.slice(0, t);
			else return "";
			return e;
		}
		function Me(e) {
			if (dh === void 0) try {
				throw Error();
			} catch (e) {
				var t = e.stack.trim().match(/\n( *(at )?)/);
				dh = t && t[1] || "", fh = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
			}
			return "\n" + dh + e + fh;
		}
		function Ne(e, t) {
			if (!e || ph) return "";
			var n = mh.get(e);
			if (n !== void 0) return n;
			ph = !0, n = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
			var r = null;
			r = B.H, B.H = null, C();
			try {
				var i = { DetermineComponentFrameRoot: function() {
					try {
						if (t) {
							var n = function() {
								throw Error();
							};
							if (Object.defineProperty(n.prototype, "props", { set: function() {
								throw Error();
							} }), typeof Reflect == "object" && Reflect.construct) {
								try {
									Reflect.construct(n, []);
								} catch (e) {
									var r = e;
								}
								Reflect.construct(e, [], n);
							} else {
								try {
									n.call();
								} catch (e) {
									r = e;
								}
								n = !1;
								try {
									var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
									Object.defineProperty(e.prototype, "props", {
										configurable: !0,
										set: function() {
											throw Error();
										}
									}), n = !0, new e();
								} finally {
									n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
								}
							}
						} else {
							try {
								throw Error();
							} catch (e) {
								r = e;
							}
							(n = e()) && typeof n.catch == "function" && n.catch(function() {});
						}
					} catch (e) {
						if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
					}
					return [null, null];
				} };
				i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
				var a = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
				a && a.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
				var o = i.DetermineComponentFrameRoot(), s = o[0], c = o[1];
				if (s && c) {
					var l = s.split("\n"), u = c.split("\n");
					for (o = a = 0; a < l.length && !l[a].includes("DetermineComponentFrameRoot");) a++;
					for (; o < u.length && !u[o].includes("DetermineComponentFrameRoot");) o++;
					if (a === l.length || o === u.length) for (a = l.length - 1, o = u.length - 1; 1 <= a && 0 <= o && l[a] !== u[o];) o--;
					for (; 1 <= a && 0 <= o; a--, o--) if (l[a] !== u[o]) {
						if (a !== 1 || o !== 1) do
							if (a--, o--, 0 > o || l[a] !== u[o]) {
								var d = "\n" + l[a].replace(" at new ", " at ");
								return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), typeof e == "function" && mh.set(e, d), d;
							}
						while (1 <= a && 0 <= o);
						break;
					}
				}
			} finally {
				ph = !1, B.H = r, Ae(), Error.prepareStackTrace = n;
			}
			return l = (l = e ? e.displayName || e.name : "") ? Me(l) : "", typeof e == "function" && mh.set(e, l), l;
		}
		function Pe(e, t) {
			switch (e.tag) {
				case 26:
				case 27:
				case 5: return Me(e.type);
				case 16: return Me("Lazy");
				case 13: return e.child !== t && t !== null ? Me("Suspense Fallback") : Me("Suspense");
				case 19: return Me("SuspenseList");
				case 0:
				case 15: return Ne(e.type, !1);
				case 11: return Ne(e.type.render, !1);
				case 1: return Ne(e.type, !0);
				case 31: return Me("Activity");
				case 30: return Me("ViewTransition");
				default: return "";
			}
		}
		function Fe(e) {
			try {
				var t = "", n = null;
				do {
					t += Pe(e, n);
					var r = e._debugInfo;
					if (r) for (var i = r.length - 1; 0 <= i; i--) {
						var a = r[i];
						if (typeof a.name == "string") {
							var o = t;
							a: {
								var s = a.name, c = a.env, l = a.debugLocation;
								if (l != null) {
									var u = je(l), d = u.lastIndexOf("\n"), f = d === -1 ? u : u.slice(d + 1);
									if (f.indexOf(s) !== -1) {
										var p = "\n" + f;
										break a;
									}
								}
								p = Me(s + (c ? " [" + c + "]" : ""));
							}
							t = o + p;
						}
					}
					n = e, e = e.return;
				} while (e);
				return t;
			} catch (e) {
				return "\nError generating stack: " + e.message + "\n" + e.stack;
			}
		}
		function Ie(e) {
			return (e = e ? e.displayName || e.name : "") ? Me(e) : "";
		}
		function Le() {
			if (hh === null) return null;
			var e = hh._debugOwner;
			return e == null ? null : ye(e);
		}
		function Re() {
			if (hh === null) return "";
			var e = hh;
			try {
				var t = "";
				switch (e.tag === 6 && (e = e.return), e.tag) {
					case 26:
					case 27:
					case 5:
						t += Me(e.type);
						break;
					case 13:
						t += Me("Suspense");
						break;
					case 19:
						t += Me("SuspenseList");
						break;
					case 31:
						t += Me("Activity");
						break;
					case 30:
						t += Me("ViewTransition");
						break;
					case 0:
					case 15:
					case 1:
						e._debugOwner || t !== "" || (t += Ie(e.type));
						break;
					case 11: e._debugOwner || t !== "" || (t += Ie(e.type.render));
				}
				for (; e;) if (typeof e.tag == "number") {
					var n = e;
					e = n._debugOwner;
					var r = n._debugStack;
					if (e && r) {
						var i = je(r);
						i !== "" && (t += "\n" + i);
					}
				} else if (e.debugStack != null) {
					var a = e.debugStack;
					(e = e.owner) && a && (t += "\n" + je(a));
				} else break;
				var o = t;
			} catch (e) {
				o = "\nError generating stack: " + e.message + "\n" + e.stack;
			}
			return o;
		}
		function w(e, t, n, r, i, a, o) {
			var s = hh;
			ze(e);
			try {
				return e !== null && e._debugTask ? e._debugTask.run(t.bind(null, n, r, i, a, o)) : t(n, r, i, a, o);
			} finally {
				ze(s);
			}
			throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.");
		}
		function ze(e) {
			B.getCurrentStack = e === null ? null : Re, gh = !1, hh = e;
		}
		function Be(e) {
			return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
		}
		function Ve(e) {
			try {
				return He(e), !1;
			} catch {
				return !0;
			}
		}
		function He(e) {
			return "" + e;
		}
		function Ue(e, t) {
			if (Ve(e)) return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.", t, Be(e)), He(e);
		}
		function We(e, t) {
			if (Ve(e)) return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.", t, Be(e)), He(e);
		}
		function Ge(e) {
			if (Ve(e)) return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.", Be(e)), He(e);
		}
		function Ke(e) {
			if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
			var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
			if (t.isDisabled) return !0;
			if (!t.supportsFiber) return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"), !0;
			try {
				jh = t.inject(e), Mh = t;
			} catch (e) {
				console.error("React instrumentation encountered an error: %o.", e);
			}
			return !!t.checkDCE;
		}
		function qe(e) {
			if (typeof kh == "function" && Ah(e), Mh && typeof Mh.setStrictMode == "function") try {
				Mh.setStrictMode(jh, e);
			} catch (e) {
				Nh || (Nh = !0, console.error("React instrumentation encountered an error: %o", e));
			}
		}
		function Je(e) {
			return e >>>= 0, e === 0 ? 32 : 31 - (Ih(e) / Lh | 0) | 0;
		}
		function Ye(e) {
			var t = e & 42;
			if (t !== 0) return t;
			switch (e & -e) {
				case 1: return 1;
				case 2: return 2;
				case 4: return 4;
				case 8: return 8;
				case 16: return 16;
				case 32: return 32;
				case 64: return 64;
				case 128: return 128;
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072: return e & -e;
				case 262144:
				case 524288:
				case 1048576:
				case 2097152: return e & 3932160;
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432: return e & 62914560;
				case 67108864: return 67108864;
				case 134217728: return 134217728;
				case 268435456: return 268435456;
				case 536870912: return 536870912;
				case 1073741824: return 0;
				default: return console.error("Should have found matching lanes. This is a bug in React."), e;
			}
		}
		function Xe(e, t, n) {
			var r = e.pendingLanes;
			if (r === 0) return 0;
			var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
			e = e.warmLanes;
			var s = r & 134217727;
			return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = Ye(n))) : i = Ye(o) : i = Ye(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = Ye(n))) : i = Ye(o)) : i = Ye(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
		}
		function Ze(e, t) {
			return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
		}
		function Qe(e, t) {
			t & 8 && (t |= t & 32);
			var n = e.entangledLanes;
			if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
				var r = 31 - Fh(n), i = 1 << r;
				t |= e[r], n &= ~i;
			}
			return t;
		}
		function $e(e, t) {
			switch (e) {
				case 1:
				case 2:
				case 4:
				case 8:
				case 64: return t + 250;
				case 16:
				case 32:
				case 128:
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152: return t + 5e3;
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432: return -1;
				case 67108864:
				case 134217728:
				case 268435456:
				case 536870912:
				case 1073741824: return -1;
				default: return console.error("Should have found matching lanes. This is a bug in React."), -1;
			}
		}
		function et() {
			var e = Bh;
			return Bh <<= 1, !(Bh & 62914560) && (Bh = 4194304), e;
		}
		function tt(e) {
			for (var t = [], n = 0; 31 > n; n++) t.push(e);
			return t;
		}
		function nt(e, t) {
			e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
		}
		function rt(e, t, n, r, i, a) {
			var o = e.pendingLanes;
			e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
			var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
			for (n = o & ~n; 0 < n;) {
				var u = 31 - Fh(n), d = 1 << u;
				s[u] = 0, c[u] = -1;
				var f = l[u];
				if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
					var p = f[u];
					p !== null && (p.lane &= -536870913);
				}
				n &= ~d;
			}
			r !== 0 && it(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
		}
		function it(e, t, n) {
			e.pendingLanes |= t, e.suspendedLanes &= ~t;
			var r = 31 - Fh(t);
			e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
		}
		function at(e, t) {
			var n = e.entangledLanes |= t;
			for (e = e.entanglements; n;) {
				var r = 31 - Fh(n), i = 1 << r;
				i & t | e[r] & t && (e[r] |= t), n &= ~i;
			}
		}
		function ot(e, t) {
			var n = t & -t;
			return n = n & 42 ? 1 : st(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
		}
		function st(e) {
			switch (e) {
				case 2:
					e = 1;
					break;
				case 8:
					e = 4;
					break;
				case 32:
					e = 16;
					break;
				case 256:
				case 512:
				case 1024:
				case 2048:
				case 4096:
				case 8192:
				case 16384:
				case 32768:
				case 65536:
				case 131072:
				case 262144:
				case 524288:
				case 1048576:
				case 2097152:
				case 4194304:
				case 8388608:
				case 16777216:
				case 33554432:
					e = 128;
					break;
				case 268435456:
					e = 134217728;
					break;
				default: e = 0;
			}
			return e;
		}
		function ct(e, t, n) {
			if (Ph) for (e = e.pendingUpdatersLaneMap; 0 < n;) {
				var r = 31 - Fh(n), i = 1 << r;
				e[r].add(t), n &= ~i;
			}
		}
		function lt(e, t) {
			if (Ph) for (var n = e.pendingUpdatersLaneMap, r = e.memoizedUpdaters; 0 < t;) {
				var i = 31 - Fh(t);
				e = 1 << i, i = n[i], 0 < i.size && (i.forEach(function(e) {
					var t = e.alternate;
					t !== null && r.has(t) || r.add(e);
				}), i.clear()), t &= ~e;
			}
		}
		function ut(e) {
			return e &= -e, Vh !== 0 && Vh < e ? Hh !== 0 && Hh < e ? e & 134217727 ? Uh : Wh : Hh : Vh;
		}
		function dt() {
			var e = Jm.p;
			return e === 0 ? (e = window.event, e === void 0 ? Uh : sm(e.type)) : e;
		}
		function ft(e, t) {
			var n = Jm.p;
			try {
				return Jm.p = e, t();
			} finally {
				Jm.p = n;
			}
		}
		function pt(e) {
			delete e[Kh], delete e[qh], delete e[Xh], delete e[Zh];
		}
		function mt(e) {
			var t;
			if (t = e[Kh]) return t;
			for (var n = e.parentNode; n;) {
				if (t = n[Jh] || n[Kh]) {
					if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = lp(e); e !== null;) {
						if (n = e[Kh]) return n;
						e = lp(e);
					}
					return t;
				}
				e = n, n = e.parentNode;
			}
			return null;
		}
		function ht(e) {
			if (e = e[Kh] || e[Jh]) {
				var t = e.tag;
				if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
			}
			return null;
		}
		function gt(e) {
			var t = e.tag;
			if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
			throw Error("getNodeFromInstance: Invalid argument.");
		}
		function _t(e) {
			var t = e[Qh];
			return t ||= e[Qh] = {
				hoistableStyles: /* @__PURE__ */ new Map(),
				hoistableScripts: /* @__PURE__ */ new Map()
			}, t;
		}
		function vt(e) {
			e[$h] = !0;
		}
		function yt(e) {
			e[eg] = void 0;
		}
		function bt(e, t) {
			xt(e, t), xt(e + "Capture", t);
		}
		function xt(e, t) {
			ng[e] && console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), ng[e] = t;
			var n = e.toLowerCase();
			for (rg[n] = e, e === "onDoubleClick" && (rg.ondblclick = e), e = 0; e < t.length; e++) tg.add(t[e]);
		}
		function St(e, t) {
			ig[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
		}
		function Ct(e) {
			return _h.call(sg, e) ? !0 : _h.call(og, e) ? !1 : ag.test(e) ? sg[e] = !0 : (og[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
		}
		function wt() {
			var e = cg;
			return cg = !1, e;
		}
		function Tt(e, t, n) {
			if (Ct(t)) {
				if (!e.hasAttribute(t)) {
					switch (typeof n) {
						case "symbol":
						case "object": return n;
						case "function": return n;
						case "boolean": if (!1 === n) return n;
					}
					return n === void 0 ? void 0 : null;
				}
				return e = t.toLowerCase() === "nonce" ? e.nonce : e.getAttribute(t), e === "" && !0 === n || (Ue(n, t), e === "" + n ? n : e);
			}
		}
		function Et(e, t, n) {
			if (Ct(t)) {
				if (n === null) e.removeAttribute(t);
				else {
					switch (typeof n) {
						case "undefined":
						case "function":
						case "symbol":
							e.removeAttribute(t);
							return;
						case "boolean":
							var r = t.toLowerCase().slice(0, 5);
							if (r !== "data-" && r !== "aria-") {
								e.removeAttribute(t);
								return;
							}
					}
					Ue(n, t), e.setAttribute(t, n);
				}
			}
		}
		function Dt(e, t, n) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
					case "boolean":
						e.removeAttribute(t);
						return;
				}
				Ue(n, t), e.setAttribute(t, n);
			}
		}
		function Ot(e, t, n, r) {
			if (r === null) e.removeAttribute(n);
			else {
				switch (typeof r) {
					case "undefined":
					case "function":
					case "symbol":
					case "boolean":
						e.removeAttribute(n);
						return;
				}
				Ue(r, n), e.setAttributeNS(t, n, r);
			}
		}
		function kt(e) {
			switch (typeof e) {
				case "bigint":
				case "boolean":
				case "number":
				case "string":
				case "undefined": return e;
				case "object": return Ge(e), e;
				default: return "";
			}
		}
		function At(e) {
			var t = e.type;
			return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
		}
		function jt(e, t, n) {
			var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
			if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
				var i = r.get, a = r.set;
				return Object.defineProperty(e, t, {
					configurable: !0,
					get: function() {
						return i.call(this);
					},
					set: function(e) {
						Ge(e), n = "" + e, a.call(this, e);
					}
				}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
					getValue: function() {
						return n;
					},
					setValue: function(e) {
						Ge(e), n = "" + e;
					},
					stopTracking: function() {
						e._valueTracker = null, delete e[t];
					}
				};
			}
		}
		function Mt(e) {
			if (!e._valueTracker) {
				var t = At(e) ? "checked" : "value";
				e._valueTracker = jt(e, t, "" + e[t]);
			}
		}
		function Nt(e) {
			if (!e) return !1;
			var t = e._valueTracker;
			if (!t) return !0;
			var n = t.getValue(), r = "";
			return e && (r = At(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
		}
		function Pt(e) {
			return e.replace(lg, function(e) {
				return "\\" + e.charCodeAt(0).toString(16) + " ";
			});
		}
		function Ft(e, t) {
			t.checked === void 0 || t.defaultChecked === void 0 || dg || (console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", Le() || "A component", t.type), dg = !0), t.value === void 0 || t.defaultValue === void 0 || ug || (console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components", Le() || "A component", t.type), ug = !0);
		}
		function It(e, t, n, r, i, a, o, s) {
			e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? (Ue(o, "type"), e.type = o) : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + kt(t)) : e.value !== "" + kt(t) && (e.value = "" + kt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : Rt(e, kt(n)) : o === "number" && e.value == t ? Rt(e, kt(e.value)) : Rt(e, kt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? (Ue(s, "name"), e.name = "" + kt(s)) : e.removeAttribute("name");
		}
		function Lt(e, t, n, r, i, a, o, s) {
			if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (Ue(a, "type"), e.type = a), t != null || n != null) {
				if (!(a !== "submit" && a !== "reset" || t != null)) {
					Mt(e);
					return;
				}
				n = n == null ? "" : "" + kt(n), t = t == null ? n : "" + kt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
			}
			r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (Ue(o, "name"), e.name = o), Mt(e);
		}
		function Rt(e, t) {
			e.defaultValue !== "" + t && (e.defaultValue = "" + t);
		}
		function zt(e, t) {
			t.value ?? (typeof t.children == "object" && t.children !== null ? Cm.Children.forEach(t.children, function(e) {
				e == null || typeof e == "string" || typeof e == "number" || typeof e == "bigint" || pg || (pg = !0, console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."));
			}) : t.dangerouslySetInnerHTML == null || mg || (mg = !0, console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), t.selected == null || fg || (console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), fg = !0);
		}
		function Bt() {
			var e = Le();
			return e ? "\n\nCheck the render method of `" + e + "`." : "";
		}
		function Vt(e, t, n, r) {
			if (e = e.options, t) {
				t = {};
				for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
				for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
			} else {
				for (n = "" + kt(n), t = null, i = 0; i < e.length; i++) {
					if (e[i].value === n) {
						e[i].selected = !0, r && (e[i].defaultSelected = !0);
						return;
					}
					t !== null || e[i].disabled || (t = e[i]);
				}
				t !== null && (t.selected = !0);
			}
		}
		function Ht(e, t) {
			for (e = 0; e < gg.length; e++) {
				var n = gg[e];
				if (t[n] != null) {
					var r = qm(t[n]);
					t.multiple && !r ? console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, Bt()) : !t.multiple && r && console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, Bt());
				}
			}
			t.value === void 0 || t.defaultValue === void 0 || hg || (console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"), hg = !0);
		}
		function Ut(e, t) {
			t.value === void 0 || t.defaultValue === void 0 || _g || (console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components", Le() || "A component"), _g = !0), t.children != null && t.value == null && console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
		}
		function Wt(e, t, n) {
			if (t != null && (t = "" + kt(t), t !== e.value && (e.value = t), n == null)) {
				e.defaultValue !== t && (e.defaultValue = t);
				return;
			}
			e.defaultValue = n == null ? "" : "" + kt(n);
		}
		function Gt(e, t, n, r) {
			if (t == null) {
				if (r != null) {
					if (n != null) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
					if (qm(r)) {
						if (1 < r.length) throw Error("<textarea> can only have at most one child.");
						r = r[0];
					}
					n = r;
				}
				n ??= "", t = n;
			}
			n = kt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Mt(e);
		}
		function Kt(e, t) {
			return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Kt(e.children[0], t) : e;
		}
		function qt(e) {
			return "  " + "  ".repeat(e);
		}
		function Jt(e) {
			return "+ " + "  ".repeat(e);
		}
		function Yt(e) {
			return "- " + "  ".repeat(e);
		}
		function Xt(e) {
			switch (e.tag) {
				case 26:
				case 27:
				case 5: return e.type;
				case 16: return "Lazy";
				case 31: return "Activity";
				case 13: return "Suspense";
				case 19: return "SuspenseList";
				case 0:
				case 15: return e = e.type, e.displayName || e.name || null;
				case 11: return e = e.type.render, e.displayName || e.name || null;
				case 1: return e = e.type, e.displayName || e.name || null;
				default: return null;
			}
		}
		function Zt(e, t) {
			return vg.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? "{\"...\"}" : "{" + e.slice(0, t - 7) + "...\"}" : "{" + e + "}") : e.length > t ? 5 > t ? "{\"...\"}" : e.slice(0, t - 3) + "..." : e;
		}
		function Qt(e, t, n) {
			var r = 120 - 2 * n;
			if (t === null) return Jt(n) + Zt(e, r) + "\n";
			if (typeof t == "string") {
				for (var i = 0; i < t.length && i < e.length && t.charCodeAt(i) === e.charCodeAt(i); i++);
				return i > r - 8 && 10 < i && (e = "..." + e.slice(i - 8), t = "..." + t.slice(i - 8)), Jt(n) + Zt(e, r) + "\n" + Yt(n) + Zt(t, r) + "\n";
			}
			return qt(n) + Zt(e, r) + "\n";
		}
		function $t(e) {
			return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(e, t) {
				return t;
			});
		}
		function en(e, t) {
			switch (typeof e) {
				case "string": return e = JSON.stringify(e), e.length > t ? 5 > t ? "\"...\"" : e.slice(0, t - 4) + "...\"" : e;
				case "object":
					if (e === null) return "null";
					if (qm(e)) return "[...]";
					if (e.$$typeof === Om) return (t = ve(e.type)) ? "<" + t + ">" : "<...>";
					var n = $t(e);
					if (n === "Object") {
						for (var r in n = "", t -= 2, e) if (e.hasOwnProperty(r)) {
							var i = JSON.stringify(r);
							if (i !== "\"" + r + "\"" && (r = i), t -= r.length - 2, i = en(e[r], 15 > t ? t : 15), t -= i.length, 0 > t) {
								n += n === "" ? "..." : ", ...";
								break;
							}
							n += (n === "" ? "" : ",") + r + ":" + i;
						}
						return "{" + n + "}";
					}
					return n;
				case "function": return (t = e.displayName || e.name) ? "function " + t : "function";
				default: return String(e);
			}
		}
		function tn(e, t) {
			return typeof e != "string" || vg.test(e) ? "{" + en(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? "\"...\"" : "\"" + e.slice(0, t - 5) + "...\"" : "\"" + e + "\"";
		}
		function nn(e, t, n) {
			var r = 120 - n.length - e.length, i = [], a;
			for (a in t) if (t.hasOwnProperty(a) && a !== "children") {
				var o = tn(t[a], 120 - n.length - a.length - 1);
				r -= a.length + o.length + 2, i.push(a + "=" + o);
			}
			return i.length === 0 ? n + "<" + e + ">\n" : 0 < r ? n + "<" + e + " " + i.join(" ") + ">\n" : n + "<" + e + "\n" + n + "  " + i.join("\n" + n + "  ") + "\n" + n + ">\n";
		}
		function rn(e, t, n) {
			var r = "", i = z({}, t), a;
			for (a in e) if (e.hasOwnProperty(a)) {
				delete i[a];
				var o = 120 - 2 * n - a.length - 2, s = en(e[a], o);
				t.hasOwnProperty(a) ? (o = en(t[a], o), r += Jt(n) + a + ": " + s + "\n", r += Yt(n) + a + ": " + o + "\n") : r += Jt(n) + a + ": " + s + "\n";
			}
			for (var c in i) i.hasOwnProperty(c) && (e = en(i[c], 120 - 2 * n - c.length - 2), r += Yt(n) + c + ": " + e + "\n");
			return r;
		}
		function an(e, t, n, r) {
			var i = "", a = /* @__PURE__ */ new Map();
			for (l in n) n.hasOwnProperty(l) && a.set(l.toLowerCase(), l);
			if (a.size === 1 && a.has("children")) i += nn(e, t, qt(r));
			else {
				for (var o in t) if (t.hasOwnProperty(o) && o !== "children") {
					var s = 120 - 2 * (r + 1) - o.length - 1, c = a.get(o.toLowerCase());
					if (c !== void 0) {
						a.delete(o.toLowerCase());
						var l = t[o];
						c = n[c];
						var u = tn(l, s);
						s = tn(c, s), typeof l == "object" && l && typeof c == "object" && c && $t(l) === "Object" && $t(c) === "Object" && (2 < Object.keys(l).length || 2 < Object.keys(c).length || -1 < u.indexOf("...") || -1 < s.indexOf("...")) ? i += qt(r + 1) + o + "={{\n" + rn(l, c, r + 2) + qt(r + 1) + "}}\n" : (i += Jt(r + 1) + o + "=" + u + "\n", i += Yt(r + 1) + o + "=" + s + "\n");
					} else i += qt(r + 1) + o + "=" + tn(t[o], s) + "\n";
				}
				a.forEach(function(e) {
					if (e !== "children") {
						var t = 120 - 2 * (r + 1) - e.length - 1;
						i += Yt(r + 1) + e + "=" + tn(n[e], t) + "\n";
					}
				}), i = i === "" ? qt(r) + "<" + e + ">\n" : qt(r) + "<" + e + "\n" + i + qt(r) + ">\n";
			}
			return e = n.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (a = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (a = "" + t), i += Qt(a, "" + e, r + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (i = e == null ? i + Qt("" + t, null, r + 1) : i + Qt("" + t, void 0, r + 1)), i;
		}
		function on(e, t) {
			var n = Xt(e);
			if (n === null) {
				for (n = "", e = e.child; e;) n += on(e, t), e = e.sibling;
				return n;
			}
			return qt(t) + "<" + n + ">\n";
		}
		function sn(e, t) {
			var n = Kt(e, t);
			if (n !== e && (e.children.length !== 1 || e.children[0] !== n)) return qt(t) + "...\n" + sn(n, t + 1);
			n = "";
			var r = e.fiber._debugInfo;
			if (r) for (var i = 0; i < r.length; i++) {
				var a = r[i].name;
				typeof a == "string" && (n += qt(t) + "<" + a + ">\n", t++);
			}
			if (r = "", i = e.fiber.pendingProps, e.fiber.tag === 6) r = Qt(i, e.serverProps, t), t++;
			else if (a = Xt(e.fiber), a !== null) {
				if (e.serverProps === void 0) {
					r = t;
					var o = 120 - 2 * r - a.length - 2, s = "";
					for (l in i) if (i.hasOwnProperty(l) && l !== "children") {
						var c = tn(i[l], 15);
						if (o -= l.length + c.length + 2, 0 > o) {
							s += " ...";
							break;
						}
						s += " " + l + "=" + c;
					}
					r = qt(r) + "<" + a + s + ">\n", t++;
				} else e.serverProps === null ? (r = nn(a, i, Jt(t)), t++) : typeof e.serverProps == "string" ? console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React.") : (r = an(a, i, e.serverProps, t), t++);
			}
			var l = "";
			for (i = e.fiber.child, a = 0; i && a < e.children.length;) o = e.children[a], o.fiber === i ? (l += sn(o, t), a++) : l += on(i, t), i = i.sibling;
			for (i && 0 < e.children.length && (l += qt(t) + "...\n"), i = e.serverTail, e.serverProps === null && t--, e = 0; e < i.length; e++) a = i[e], l = typeof a == "string" ? l + (Yt(t) + Zt(a, 120 - 2 * t) + "\n") : l + nn(a.type, a.props, Yt(t));
			return n + r + l;
		}
		function cn(e) {
			try {
				return "\n\n" + sn(e, 0);
			} catch {
				return "";
			}
		}
		function T(e, t, n) {
			for (var r = t, i = null, a = 0; r;) r === e && (a = 0), i = {
				fiber: r,
				children: i === null ? [] : [i],
				serverProps: r === t ? n : r === e ? null : void 0,
				serverTail: [],
				distanceFromLeaf: a
			}, a++, r = r.return;
			return i === null ? "" : cn(i).replaceAll(/^[+-]/gm, ">");
		}
		function ln(e, t) {
			var n = z({}, e || Cg), r = { tag: t };
			return bg.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), xg.indexOf(t) !== -1 && (n.pTagInButtonScope = null), yg.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = r, t === "form" && (n.formTag = r), t === "a" && (n.aTagInScope = r), t === "button" && (n.buttonTagInScope = r), t === "nobr" && (n.nobrTagInScope = r), t === "p" && (n.pTagInButtonScope = r), t === "li" && (n.listItemTagAutoclosing = r), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = r), t === "#document" || t === "html" ? n.containerTagInScope = null : n.containerTagInScope ||= r, e !== null || t !== "#document" && t !== "html" && t !== "body" ? !0 === n.implicitRootScope && (n.implicitRootScope = !1) : n.implicitRootScope = !0, n;
		}
		function un(e, t, n) {
			switch (t) {
				case "tr": return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
				case "tbody":
				case "thead":
				case "tfoot": return e === "tr" || e === "style" || e === "script" || e === "template";
				case "colgroup": return e === "col" || e === "template";
				case "table": return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
				case "head": return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
				case "html":
					if (n) break;
					return e === "head" || e === "body" || e === "frameset";
				case "frameset": return e === "frame";
				case "#document": if (!n) return e === "html";
			}
			switch (e) {
				case "h1":
				case "h2":
				case "h3":
				case "h4":
				case "h5":
				case "h6": return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
				case "rp":
				case "rt": return Sg.indexOf(t) === -1;
				case "caption":
				case "col":
				case "colgroup":
				case "input": return t !== "select";
				case "frameset":
				case "frame":
				case "tbody":
				case "td":
				case "tfoot":
				case "th":
				case "thead":
				case "tr": return t == null;
				case "head": return n || t === null;
				case "html": return n && t === "#document" || t === null;
				case "body": return n && (t === "#document" || t === "html") || t === null;
			}
			return !0;
		}
		function dn(e, t) {
			switch (e) {
				case "address":
				case "article":
				case "aside":
				case "blockquote":
				case "center":
				case "details":
				case "dialog":
				case "dir":
				case "div":
				case "dl":
				case "fieldset":
				case "figcaption":
				case "figure":
				case "footer":
				case "header":
				case "hgroup":
				case "main":
				case "menu":
				case "nav":
				case "ol":
				case "p":
				case "section":
				case "summary":
				case "ul":
				case "pre":
				case "listing":
				case "table":
				case "hr":
				case "xmp":
				case "h1":
				case "h2":
				case "h3":
				case "h4":
				case "h5":
				case "h6": return t.pTagInButtonScope;
				case "form": return t.formTag || t.pTagInButtonScope;
				case "li": return t.listItemTagAutoclosing;
				case "dd":
				case "dt": return t.dlItemTagAutoclosing;
				case "button": return t.buttonTagInScope;
				case "a": return t.aTagInScope;
				case "nobr": return t.nobrTagInScope;
			}
			return null;
		}
		function fn(e, t) {
			for (; e;) {
				switch (e.tag) {
					case 5:
					case 26:
					case 27: if (e.type === t) return e;
				}
				e = e.return;
			}
			return null;
		}
		function pn(e, t) {
			t ||= Cg;
			var n = t.current;
			if (t = (n = un(e, n && n.tag, t.implicitRootScope) ? null : n) ? null : dn(e, t), t = n || t, !t) return !0;
			var r = t.tag;
			if (t = String(!!n) + "|" + e + "|" + r, wg[t]) return !1;
			wg[t] = !0;
			var i = (t = hh) ? fn(t.return, r) : null, a = t !== null && i !== null ? T(i, t, null) : "", o = "<" + e + ">";
			return n ? (n = "", r === "table" && e === "tr" && (n += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error("In HTML, %s cannot be a child of <%s>.%s\nThis will cause a hydration error.%s", o, r, n, a)) : console.error("In HTML, %s cannot be a descendant of <%s>.\nThis will cause a hydration error.%s", o, r, a), t && (e = t.return, i === null || e === null || i === e && e._debugOwner === t._debugOwner || w(i, function() {
				console.error("<%s> cannot contain a nested %s.\nSee this log for the ancestor stack trace.", r, o);
			})), !1;
		}
		function mn(e, t, n) {
			if (n || un("#text", t, !1)) return !0;
			if (n = "#text|" + t, wg[n]) return !1;
			wg[n] = !0;
			var r = (n = hh) ? fn(n, t) : null;
			return n = n !== null && r !== null ? T(r, n, n.tag === 6 ? null : { children: null }) : "", /\S/.test(e) ? console.error("In HTML, text nodes cannot be a child of <%s>.\nThis will cause a hydration error.%s", t, n) : console.error("In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.\nThis will cause a hydration error.%s", t, n), !1;
		}
		function hn(e, t) {
			if (t) {
				var n = e.firstChild;
				if (n && n === e.lastChild && n.nodeType === 3) {
					n.nodeValue = t;
					return;
				}
			}
			e.textContent = t;
		}
		function gn(e) {
			return e.replace(Ag, function(e, t) {
				return t.toUpperCase();
			});
		}
		function _n(e, t, n) {
			var r = t.indexOf("--") === 0;
			r || (-1 < t.indexOf("-") ? Mg.hasOwnProperty(t) && Mg[t] || (Mg[t] = !0, console.error("Unsupported style property %s. Did you mean %s?", t, gn(t.replace(kg, "ms-")))) : Og.test(t) ? Mg.hasOwnProperty(t) && Mg[t] || (Mg[t] = !0, console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?", t, t.charAt(0).toUpperCase() + t.slice(1))) : !jg.test(n) || Ng.hasOwnProperty(n) && Ng[n] || (Ng[n] = !0, console.error("Style property values shouldn't contain a semicolon. Try \"%s: %s\" instead.", t, n.replace(jg, ""))), typeof n == "number" && (isNaN(n) ? Pg || (Pg = !0, console.error("`NaN` is an invalid value for the `%s` css style property.", t)) : isFinite(n) || Fg || (Fg = !0, console.error("`Infinity` is an invalid value for the `%s` css style property.", t)))), n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Ig.has(t) ? t === "float" ? e.cssFloat = n : (We(n, t), e[t] = ("" + n).trim()) : e[t] = n + "px";
		}
		function vn(e, t, n) {
			if (t != null && typeof t != "object") throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
			if (t && Object.freeze(t), e = e.style, n != null) {
				if (t) {
					var r = {};
					if (n) {
						for (var i in n) if (n.hasOwnProperty(i) && !t.hasOwnProperty(i)) for (var a = Tg[i] || [i], o = 0; o < a.length; o++) r[a[o]] = i;
					}
					for (var s in t) if (t.hasOwnProperty(s) && (!n || n[s] !== t[s])) for (i = Tg[s] || [s], a = 0; a < i.length; a++) r[i[a]] = s;
					for (var c in s = {}, t) for (i = Tg[c] || [c], a = 0; a < i.length; a++) s[i[a]] = c;
					for (var l in c = {}, r) if (i = r[l], (a = s[l]) && i !== a && (o = i + "," + a, !c[o])) {
						c[o] = !0, o = console;
						var u = t[i];
						o.error.call(o, "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", u == null || typeof u == "boolean" || u === "" ? "Removing" : "Updating", i, a);
					}
				}
				for (var d in n) !n.hasOwnProperty(d) || t != null && t.hasOwnProperty(d) || (d.indexOf("--") === 0 ? e.setProperty(d, "") : d === "float" ? e.cssFloat = "" : e[d] = "", cg = !0);
				for (var f in t) l = t[f], t.hasOwnProperty(f) && n[f] !== l && (_n(e, f, l), cg = !0);
			} else for (r in t) t.hasOwnProperty(r) && _n(e, r, t[r]);
		}
		function yn(e) {
			if (e.indexOf("-") === -1) return !1;
			switch (e) {
				case "annotation-xml":
				case "color-profile":
				case "font-face":
				case "font-face-src":
				case "font-face-uri":
				case "font-face-format":
				case "font-face-name":
				case "missing-glyph": return !1;
				default: return !0;
			}
		}
		function bn(e) {
			return zg.get(e) || e;
		}
		function xn(e, t) {
			if (_h.call(Hg, t) && Hg[t]) return !0;
			if (Wg.test(t)) {
				if (e = "aria-" + t.slice(4).toLowerCase(), e = Vg.hasOwnProperty(e) ? e : null, e == null) return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Hg[t] = !0;
				if (t !== e) return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, e), Hg[t] = !0;
			}
			if (Ug.test(t)) {
				if (e = t.toLowerCase(), e = Vg.hasOwnProperty(e) ? e : null, e == null) return Hg[t] = !0, !1;
				t !== e && (console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, e), Hg[t] = !0);
			}
			return !0;
		}
		function Sn(e, t) {
			var n = [], r;
			for (r in t) xn(e, r) || n.push(r);
			t = n.map(function(e) {
				return "`" + e + "`";
			}).join(", "), n.length === 1 ? console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e) : 1 < n.length && console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props", t, e);
		}
		function Cn(e, t, n, r) {
			if (_h.call(Kg, t) && Kg[t]) return !0;
			var i = t.toLowerCase();
			if (i === "onfocusin" || i === "onfocusout") return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Kg[t] = !0;
			if (typeof n == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction")) return !0;
			if (r != null) {
				if (e = r.possibleRegistrationNames, r.registrationNameDependencies.hasOwnProperty(t)) return !0;
				if (r = e.hasOwnProperty(i) ? e[i] : null, r != null) return console.error("Invalid event handler property `%s`. Did you mean `%s`?", t, r), Kg[t] = !0;
				if (qg.test(t)) return console.error("Unknown event handler property `%s`. It will be ignored.", t), Kg[t] = !0;
			} else if (qg.test(t)) return Jg.test(t) && console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Kg[t] = !0;
			if (Yg.test(t) || Xg.test(t)) return !0;
			if (i === "innerhtml") return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Kg[t] = !0;
			if (i === "aria") return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Kg[t] = !0;
			if (i === "is" && n != null && typeof n != "string") return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), Kg[t] = !0;
			if (typeof n == "number" && isNaN(n)) return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Kg[t] = !0;
			if (Bg.hasOwnProperty(i)) {
				if (i = Bg[i], i !== t) return console.error("Invalid DOM property `%s`. Did you mean `%s`?", t, i), Kg[t] = !0;
			} else if (t !== i) return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, i), Kg[t] = !0;
			switch (t) {
				case "dangerouslySetInnerHTML":
				case "children":
				case "style":
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "ref": return !0;
				case "innerText":
				case "textContent": return !0;
			}
			switch (typeof n) {
				case "boolean": switch (t) {
					case "autoFocus":
					case "checked":
					case "multiple":
					case "muted":
					case "selected":
					case "contentEditable":
					case "spellCheck":
					case "draggable":
					case "value":
					case "autoReverse":
					case "externalResourcesRequired":
					case "focusable":
					case "preserveAlpha":
					case "allowFullScreen":
					case "async":
					case "autoPlay":
					case "controls":
					case "credentialless":
					case "default":
					case "defer":
					case "disabled":
					case "disablePictureInPicture":
					case "disableRemotePlayback":
					case "formNoValidate":
					case "hidden":
					case "loop":
					case "noModule":
					case "noValidate":
					case "open":
					case "playsInline":
					case "readOnly":
					case "required":
					case "reversed":
					case "scoped":
					case "seamless":
					case "itemScope":
					case "capture":
					case "download":
					case "inert": return !0;
					default: return i = t.toLowerCase().slice(0, 5), i === "data-" || i === "aria-" || (n ? console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.", n, t, t, n, t) : console.error("Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s=\"%s\" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", n, t, t, n, t, t, t), Kg[t] = !0);
				}
				case "function":
				case "symbol": return Kg[t] = !0, !1;
				case "string": if (n === "false" || n === "true") {
					switch (t) {
						case "checked":
						case "selected":
						case "multiple":
						case "muted":
						case "allowFullScreen":
						case "async":
						case "autoPlay":
						case "controls":
						case "credentialless":
						case "default":
						case "defer":
						case "disabled":
						case "disablePictureInPicture":
						case "disableRemotePlayback":
						case "formNoValidate":
						case "hidden":
						case "loop":
						case "noModule":
						case "noValidate":
						case "open":
						case "playsInline":
						case "readOnly":
						case "required":
						case "reversed":
						case "scoped":
						case "seamless":
						case "itemScope":
						case "inert": break;
						default: return !0;
					}
					console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : "Although this works, it will not work as expected if you pass the string \"false\".", t, n), Kg[t] = !0;
				}
			}
			return !0;
		}
		function wn(e, t, n) {
			var r = [], i;
			for (i in t) Cn(e, i, t[i], n) || r.push(i);
			t = r.map(function(e) {
				return "`" + e + "`";
			}).join(", "), r.length === 1 ? console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e) : 1 < r.length && console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ", t, e);
		}
		function Tn(e) {
			return Zg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
		}
		function En() {}
		function Dn(e) {
			return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
		}
		function On(e) {
			var t = ht(e);
			if (t && (e = t.stateNode)) {
				var n = e[qh] || null;
				a: switch (e = t.stateNode, t.type) {
					case "input":
						if (It(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
							for (n = e; n.parentNode;) n = n.parentNode;
							for (Ue(t, "name"), n = n.querySelectorAll("input[name=\"" + Pt("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
								var r = n[t];
								if (r !== e && r.form === e.form) {
									var i = r[qh] || null;
									if (!i) throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
									It(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
								}
							}
							for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && Nt(r);
						}
						break a;
					case "textarea":
						Wt(e, n.value, n.defaultValue);
						break a;
					case "select": t = n.value, t != null && Vt(e, !!n.multiple, t, !1);
				}
			}
		}
		function kn(e, t, n) {
			if (t_) return e(t, n);
			t_ = !0;
			try {
				return e(t);
			} finally {
				if (t_ = !1, ($g !== null || e_ !== null) && (mu(), $g && (t = $g, e = e_, e_ = $g = null, On(t), e))) for (t = 0; t < e.length; t++) On(e[t]);
			}
		}
		function An(e, t) {
			var n = e.stateNode;
			if (n === null) return null;
			var r = n[qh] || null;
			if (r === null) return null;
			n = r[t];
			a: switch (t) {
				case "onClick":
				case "onClickCapture":
				case "onDoubleClick":
				case "onDoubleClickCapture":
				case "onMouseDown":
				case "onMouseDownCapture":
				case "onMouseMove":
				case "onMouseMoveCapture":
				case "onMouseUp":
				case "onMouseUpCapture":
				case "onMouseEnter":
					(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
					break a;
				default: e = !1;
			}
			if (e) return null;
			if (n && typeof n != "function") throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof n + "` type.");
			return n;
		}
		function jn() {
			if (s_) return s_;
			var e, t = o_, n = t.length, r, i = "value" in a_ ? a_.value : a_.textContent, a = i.length;
			for (e = 0; e < n && t[e] === i[e]; e++);
			var o = n - e;
			for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
			return s_ = i.slice(e, 1 < r ? 1 - r : void 0);
		}
		function Mn(e) {
			var t = e.keyCode;
			return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
		}
		function Nn() {
			return !0;
		}
		function Pn() {
			return !1;
		}
		function Fn(e) {
			function t(t, n, r, i, a) {
				for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
				return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Nn : Pn, this.isPropagationStopped = Pn, this;
			}
			return z(t.prototype, {
				preventDefault: function() {
					this.defaultPrevented = !0;
					var e = this.nativeEvent;
					e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Nn);
				},
				stopPropagation: function() {
					var e = this.nativeEvent;
					e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Nn);
				},
				persist: function() {},
				isPersistent: Nn
			}), t;
		}
		function In(e) {
			var t = this.nativeEvent;
			return t.getModifierState ? t.getModifierState(e) : (e = T_[e]) ? !!t[e] : !1;
		}
		function Ln() {
			return In;
		}
		function Rn(e, t) {
			switch (e) {
				case "keyup": return N_.indexOf(t.keyCode) !== -1;
				case "keydown": return t.keyCode !== P_;
				case "keypress":
				case "mousedown":
				case "focusout": return !0;
				default: return !1;
			}
		}
		function zn(e) {
			return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
		}
		function Bn(e, t) {
			switch (e) {
				case "compositionend": return zn(t);
				case "keypress": return t.which === z_ ? (V_ = !0, B_) : null;
				case "textInput": return e = t.data, e === B_ && V_ ? null : e;
				default: return null;
			}
		}
		function Vn(e, t) {
			if (H_) return e === "compositionend" || !F_ && Rn(e, t) ? (e = jn(), s_ = o_ = a_ = null, H_ = !1, e) : null;
			switch (e) {
				case "paste": return null;
				case "keypress":
					if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
						if (t.char && 1 < t.char.length) return t.char;
						if (t.which) return String.fromCharCode(t.which);
					}
					return null;
				case "compositionend": return R_ && t.locale !== "ko" ? null : t.data;
				default: return null;
			}
		}
		function Hn(e) {
			var t = e && e.nodeName && e.nodeName.toLowerCase();
			return t === "input" ? !!U_[e.type] : t === "textarea";
		}
		function Un(e) {
			if (!n_) return !1;
			e = "on" + e;
			var t = e in document;
			return t ||= (t = document.createElement("div"), t.setAttribute(e, "return;"), typeof t[e] == "function"), t;
		}
		function Wn(e, t, n, r) {
			$g ? e_ ? e_.push(r) : e_ = [r] : $g = r, t = Sd(t, "onChange"), 0 < t.length && (n = new l_("onChange", "change", null, n, r), e.push({
				event: n,
				listeners: t
			}));
		}
		function Gn(e) {
			P(e, 0);
		}
		function Kn(e) {
			if (Nt(gt(e))) return e;
		}
		function qn(e, t) {
			if (e === "change") return t;
		}
		function Jn() {
			W_ && (W_.detachEvent("onpropertychange", Yn), G_ = W_ = null);
		}
		function Yn(e) {
			if (e.propertyName === "value" && Kn(G_)) {
				var t = [];
				Wn(t, G_, e, Dn(e)), kn(Gn, t);
			}
		}
		function Xn(e, t, n) {
			e === "focusin" ? (Jn(), W_ = t, G_ = n, W_.attachEvent("onpropertychange", Yn)) : e === "focusout" && Jn();
		}
		function Zn(e) {
			if (e === "selectionchange" || e === "keyup" || e === "keydown") return Kn(G_);
		}
		function Qn(e, t) {
			if (e === "click") return Kn(t);
		}
		function $n(e, t) {
			if (e === "input" || e === "change") return Kn(t);
		}
		function er(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function tr(e, t) {
			if (q_(e, t)) return !0;
			if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
			var n = Object.keys(e), r = Object.keys(t);
			if (n.length !== r.length) return !1;
			for (r = 0; r < n.length; r++) {
				var i = n[r];
				if (!_h.call(t, i) || !q_(e[i], t[i])) return !1;
			}
			return !0;
		}
		function nr(e) {
			if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
			try {
				return e.activeElement || e.body;
			} catch {
				return e.body;
			}
		}
		function rr(e) {
			for (; e && e.firstChild;) e = e.firstChild;
			return e;
		}
		function ir(e, t) {
			var n = rr(e);
			e = 0;
			for (var r; n;) {
				if (n.nodeType === 3) {
					if (r = e + n.textContent.length, e <= t && r >= t) return {
						node: n,
						offset: t - e
					};
					e = r;
				}
				a: {
					for (; n;) {
						if (n.nextSibling) {
							n = n.nextSibling;
							break a;
						}
						n = n.parentNode;
					}
					n = void 0;
				}
				n = rr(n);
			}
		}
		function ar(e, t) {
			return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ar(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
		}
		function or(e) {
			e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
			for (var t = nr(e.document); t instanceof e.HTMLIFrameElement;) {
				try {
					var n = typeof t.contentWindow.location.href == "string";
				} catch {
					n = !1;
				}
				if (n) e = t.contentWindow;
				else break;
				t = nr(e.document);
			}
			return t;
		}
		function sr(e) {
			var t = e && e.nodeName && e.nodeName.toLowerCase();
			return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
		}
		function cr(e, t, n) {
			var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
			Q_ || Y_ == null || Y_ !== nr(r) || (r = Y_, "selectionStart" in r && sr(r) ? r = {
				start: r.selectionStart,
				end: r.selectionEnd
			} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
				anchorNode: r.anchorNode,
				anchorOffset: r.anchorOffset,
				focusNode: r.focusNode,
				focusOffset: r.focusOffset
			}), Z_ && tr(Z_, r) || (Z_ = r, r = Sd(X_, "onSelect"), 0 < r.length && (t = new l_("onSelect", "select", null, t, n), e.push({
				event: t,
				listeners: r
			}), t.target = Y_)));
		}
		function lr(e, t) {
			var n = {};
			return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
		}
		function ur(e) {
			if (ev[e]) return ev[e];
			if (!$_[e]) return e;
			var t = $_[e], n;
			for (n in t) if (t.hasOwnProperty(n) && n in tv) return ev[e] = t[n];
			return e;
		}
		function dr(e, t) {
			lv.set(e, t), bt(t, [e]);
		}
		function fr(e, t) {
			if (e.name != null && e.name !== "auto") return e.name;
			if (t.autoName !== null) return t.autoName;
			e = aw.identifierPrefix;
			var n = dv++;
			return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
		}
		function pr(e) {
			if (e == null || typeof e == "string") return e;
			var t = null, n = mw;
			if (n !== null) for (var r = 0; r < n.length; r++) {
				var i = e[n[r]];
				if (i != null) {
					if (i === "none") return "none";
					t = t == null ? i : t + (" " + i);
				}
			}
			return t ?? e.default;
		}
		function mr(e, t) {
			return e = pr(e), t = pr(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
		}
		function hr(e) {
			for (var t = vv, n = 0; n < e.length && n < Sv; n++) {
				var r = e[n];
				if (typeof r == "object" && r) {
					if (qm(r) && r.length === 2 && typeof r[0] == "string") {
						if (t !== vv && t !== xv) return yv;
						t = xv;
					} else return yv;
				} else {
					if (typeof r == "function" || typeof r == "string" && 50 < r.length || t !== vv && t !== bv || typeof r == "bigint") return yv;
					t = bv;
				}
			}
			return t;
		}
		function gr(e, t, n, r) {
			if (!ArrayBuffer.isView(e)) {
				var i = 0, a;
				for (a in e) if (_h.call(e, a) && a[0] !== "_" && (i++, vr(a, e[a], t, n, r), i >= Sv)) {
					t.push([r + "\xA0\xA0".repeat(n) + "Only " + Sv + " properties are shown. React will not log more properties of this object.", ""]);
					break;
				}
			}
		}
		function _r(e) {
			return "$$typeof" in e && _h.call(e, "$$typeof") ? e.$$typeof : void 0;
		}
		function vr(e, t, n, r, i) {
			switch (typeof t) {
				case "object":
					if (t === null) {
						t = "null";
						break;
					}
					if (_r(t) === Om) {
						var a = ve(t.type) || "…", o = t.key;
						t = t.props;
						var s = Object.keys(t), c = s.length;
						if (o == null && c === 0) {
							t = "<" + a + " />";
							break;
						}
						if (3 > r || c === 1 && s[0] === "children" && o == null) {
							t = "<" + a + " … />";
							break;
						}
						for (var l in n.push([i + "\xA0\xA0".repeat(r) + e, "<" + a]), o !== null && vr("key", o, n, r + 1, i), e = !1, o = 0, t) if (o++, l === "children" ? t.children != null && (!qm(t.children) || 0 < t.children.length) && (e = !0) : _h.call(t, l) && l[0] !== "_" && vr(l, t[l], n, r + 1, i), o >= Sv) break;
						n.push(["", e ? ">…</" + a + ">" : "/>"]);
						return;
					}
					if (a = Object.prototype.toString.call(t), a = a.slice(8, a.length - 1), ArrayBuffer.isView(t)) {
						t = t.length, t = typeof t == "number" ? a + "(" + t + ")" : a;
						break;
					}
					if (a === "Array") {
						if (l = t.length > Sv, o = hr(t), o === bv || o === vv) {
							t = JSON.stringify(l ? t.slice(0, Sv).concat("…") : t);
							break;
						}
						if (o === xv) {
							for (n.push([i + "\xA0\xA0".repeat(r) + e, ""]), e = 0; e < t.length && e < Sv; e++) a = t[e], vr(a[0], a[1], n, r + 1, i);
							l && vr(Sv.toString(), "…", n, r + 1, i);
							return;
						}
					}
					if (a === "Promise") {
						if (t.status === "fulfilled") {
							if (a = n.length, vr(e, t.value, n, r, i), n.length > a) {
								n = n[a], n[1] = "Promise<" + (n[1] || "Object") + ">";
								return;
							}
						} else if (t.status === "rejected" && (a = n.length, vr(e, t.reason, n, r, i), n.length > a)) {
							n = n[a], n[1] = "Rejected Promise<" + n[1] + ">";
							return;
						}
						n.push(["\xA0\xA0".repeat(r) + e, "Promise"]);
						return;
					}
					a === "Object" && (l = Object.getPrototypeOf(t)) && typeof l.constructor == "function" && (a = l.constructor.name), n.push([i + "\xA0\xA0".repeat(r) + e, a === "Object" ? 3 > r ? "" : "…" : a]), 3 > r && gr(t, n, r + 1, i);
					return;
				case "function":
					t = t.name, t = t === "" || typeof t != "string" ? "() => {}" : t + "() {}";
					break;
				case "string":
					t = t === _v ? "…" : JSON.stringify(1024 <= t.length ? t.slice(0, 1023) + "…" : t);
					break;
				case "undefined":
					t = "undefined";
					break;
				case "boolean":
					t = t ? "true" : "false";
					break;
				default: t = String(t);
			}
			n.push([i + "\xA0\xA0".repeat(r) + e, t]);
		}
		function yr(e, t, n, r) {
			var i = !0, a = 0;
			for (s in e) {
				if (a > Sv) {
					n.push(["Previous object has more than " + Sv + " properties. React will not attempt to diff objects with too many properties.", ""]), i = !1;
					break;
				}
				s in t || (n.push([Cv + "\xA0\xA0".repeat(r) + s, "…"]), i = !1), a++;
			}
			for (var o in a = 0, t) {
				if (a > Sv) {
					n.push(["Next object has more than " + Sv + " properties. React will not attempt to diff objects with too many properties.", ""]), i = !1;
					break;
				}
				if (o in e) {
					var s = e[o], c = t[o];
					if (s !== c) {
						if (r === 0 && o === "children") {
							i = "\xA0\xA0".repeat(r) + o, n.push([Cv + i, "…"], [wv + i, "…"]), i = !1;
							continue;
						}
						if (!(3 <= r)) {
							if (typeof s == "object" && typeof c == "object" && s !== null && c !== null && _r(s) === _r(c)) {
								if (_r(c) === Om) {
									if (s.type === c.type && s.key === c.key) {
										s = ve(c.type) || "…", i = "\xA0\xA0".repeat(r) + o, s = "<" + s + " … />", n.push([Cv + i, s], [wv + i, s]), i = !1;
										continue;
									}
								} else {
									var l = Object.prototype.toString.call(s), u = Object.prototype.toString.call(c);
									if (l === u && (u === "[object Object]" || u === "[object Array]")) {
										l = [Tv + "\xA0\xA0".repeat(r) + o, u === "[object Array]" ? "Array" : ""], n.push(l), u = n.length, yr(s, c, n, r + 1) ? u === n.length && (l[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : i = !1;
										continue;
									}
								}
							} else if (typeof s == "function" && typeof c == "function" && s.name === c.name && s.length === c.length && (l = Function.prototype.toString.call(s), u = Function.prototype.toString.call(c), l === u)) {
								s = c.name === "" ? "() => {}" : c.name + "() {}", n.push([Tv + "\xA0\xA0".repeat(r) + o, s + " Referentially unequal function closure. Consider memoization."]);
								continue;
							}
						}
						vr(o, s, n, r, Cv), vr(o, c, n, r, wv), i = !1;
					}
				} else n.push([wv + "\xA0\xA0".repeat(r) + o, "…"]), i = !1;
				a++;
			}
			return i;
		}
		function br(e) {
			H = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
		}
		function xr(e, t, n, r) {
			Ev && (Av.start = t, Av.end = n, kv.color = "warning", kv.tooltipText = r, kv.properties = null, (e = e._debugTask) ? e.run(performance.measure.bind(performance, r, Av)) : performance.measure(r, Av), performance.clearMeasures(r));
		}
		function Sr(e, t, n) {
			xr(e, t, n, "Reconnect");
		}
		function Cr(e, t, n, r, i) {
			var a = S(e);
			if (a !== null && Ev) {
				var o = e.alternate, s = e.actualDuration;
				if (o === null || o.child !== e.child) for (var c = e.child; c !== null; c = c.sibling) s -= c.actualDuration;
				s = .5 > s ? r ? "tertiary-light" : "primary-light" : 10 > s ? r ? "tertiary" : "primary" : 100 > s ? r ? "tertiary-dark" : "primary-dark" : "error";
				var l = e.memoizedProps;
				r = e._debugTask, l !== null && o !== null && o.memoizedProps !== l ? (c = [jv], l = yr(o.memoizedProps, l, c, 0), 1 < c.length ? (l && !Ov && (o.lanes & i) === 0 && 100 < e.actualDuration ? (Ov = !0, c[0] = Nv, kv.color = "warning", kv.tooltipText = Mv) : (kv.color = s, kv.tooltipText = a), kv.properties = c, Av.start = t, Av.end = n, e = "​" + a, r == null ? performance.measure(e, Av) : r.run(performance.measure.bind(performance, e, Av)), performance.clearMeasures(e)) : r == null ? console.timeStamp(a, t, n, Dv, void 0, s) : r.run(console.timeStamp.bind(console, a, t, n, Dv, void 0, s))) : r == null ? console.timeStamp(a, t, n, Dv, void 0, s) : r.run(console.timeStamp.bind(console, a, t, n, Dv, void 0, s));
			}
		}
		function wr(e, t, n, r) {
			if (Ev) {
				var i = S(e);
				if (i !== null) {
					for (var a = null, o = [], s = 0; s < r.length; s++) {
						var c = r[s];
						a == null && c.source !== null && (a = c.source._debugTask), c = c.value, o.push(["Error", typeof c == "object" && c && typeof c.message == "string" ? String(c.message) : String(c)]);
					}
					e.key !== null && vr("key", e.key, o, 0, ""), e.memoizedProps !== null && gr(e.memoizedProps, o, 0, ""), a ??= e._debugTask, e = {
						start: t,
						end: n,
						detail: { devtools: {
							color: "error",
							track: Dv,
							tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
							properties: o
						} }
					}, i = "​" + i, a ? a.run(performance.measure.bind(performance, i, e)) : performance.measure(i, e), performance.clearMeasures(i);
				}
			}
		}
		function Tr(e, t, n, r, i) {
			if (i !== null) {
				if (Ev) {
					var a = S(e);
					if (a !== null) {
						r = [];
						for (var o = 0; o < i.length; o++) {
							var s = i[o].value;
							r.push(["Error", typeof s == "object" && s && typeof s.message == "string" ? String(s.message) : String(s)]);
						}
						e.key !== null && vr("key", e.key, r, 0, ""), e.memoizedProps !== null && gr(e.memoizedProps, r, 0, ""), t = {
							start: t,
							end: n,
							detail: { devtools: {
								color: "error",
								track: Dv,
								tooltipText: "A lifecycle or effect errored",
								properties: r
							} }
						}, e = e._debugTask, n = "​" + a, e ? e.run(performance.measure.bind(performance, n, t)) : performance.measure(n, t), performance.clearMeasures(n);
					}
				}
			} else a = S(e), a !== null && Ev && (i = 1 > r ? "secondary-light" : 100 > r ? "secondary" : 500 > r ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(console.timeStamp.bind(console, a, t, n, Dv, void 0, i)) : console.timeStamp(a, t, n, Dv, void 0, i));
		}
		function Er(e, t, n, r) {
			!Ev || t <= e || (n = (n & 738197653) === n ? "tertiary-dark" : "primary-dark", r ? r.run(console.timeStamp.bind(console, "Prewarm", e, t, H, V, n)) : console.timeStamp("Prewarm", e, t, H, V, n));
		}
		function Dr(e, t, n, r) {
			!Ev || t <= e || (n = (n & 738197653) === n ? "tertiary-dark" : "primary-dark", r ? r.run(console.timeStamp.bind(console, "Suspended", e, t, H, V, n)) : console.timeStamp("Suspended", e, t, H, V, n));
		}
		function Or(e, t, n, r) {
			!Ev || t <= e || (r ? r.run(console.timeStamp.bind(console, "Errored", e, t, H, V, "error")) : console.timeStamp("Errored", e, t, H, V, "error"));
		}
		function kr(e, t, n, r) {
			!Ev || t <= e || (r ? r.run(console.timeStamp.bind(console, n, e, t, H, V, "secondary-light")) : console.timeStamp(n, e, t, H, V, "secondary-light"));
		}
		function Ar(e, t, n, r, i) {
			if (Ev && !(t <= e)) {
				for (var a = [], o = 0; o < n.length; o++) {
					var s = n[o].value;
					a.push(["Error", typeof s == "object" && s && typeof s.message == "string" ? String(s.message) : String(s)]);
				}
				e = {
					start: e,
					end: t,
					detail: { devtools: {
						color: "error",
						track: H,
						trackGroup: V,
						tooltipText: r ? "Remaining Effects Errored" : "Commit Errored",
						properties: a
					} }
				}, i ? i.run(performance.measure.bind(performance, "Errored", e)) : performance.measure("Errored", e), performance.clearMeasures("Errored");
			}
		}
		function jr(e, t, n, r, i) {
			n === null ? !Ev || t <= e || (i ? i.run(console.timeStamp.bind(console, r ? "Commit Interrupted View Transition" : "Commit", e, t, H, V, r ? "error" : "secondary-dark")) : console.timeStamp(r ? "Commit Interrupted View Transition" : "Commit", e, t, H, V, r ? "error" : "secondary-dark")) : Ar(e, t, n, !1, i);
		}
		function Mr(e, t, n) {
			!Ev || t <= e || (n ? n.run(console.timeStamp.bind(console, "Animating", e, t, H, V, "secondary-dark")) : console.timeStamp("Animating", e, t, H, V, "secondary-dark"));
		}
		function Nr() {
			for (var e = Lv, t = Rv = Lv = 0; t < e;) {
				var n = Iv[t];
				Iv[t++] = null;
				var r = Iv[t];
				Iv[t++] = null;
				var i = Iv[t];
				Iv[t++] = null;
				var a = Iv[t];
				if (Iv[t++] = null, r !== null && i !== null) {
					var o = r.pending;
					o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
				}
				a !== 0 && Lr(n, i, a);
			}
		}
		function Pr(e, t, n, r) {
			Iv[Lv++] = e, Iv[Lv++] = t, Iv[Lv++] = n, Iv[Lv++] = r, Rv |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
		}
		function Fr(e, t, n, r) {
			return Pr(e, t, n, r), Rr(e);
		}
		function Ir(e, t) {
			return Pr(e, null, null, t), Rr(e);
		}
		function Lr(e, t, n) {
			e.lanes |= n;
			var r = e.alternate;
			r !== null && (r.lanes |= n);
			for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & Pv || (i = !0)), e = a, a = a.return;
			return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Fh(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
		}
		function Rr(e) {
			if (yw > vw) throw ww = yw = 0, Tw = bw = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
			ww > Cw && (ww = 0, Tw = null, console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")), e.alternate === null && e.flags & 4098 && nd(e);
			for (var t = e, n = t.return; n !== null;) t.alternate === null && t.flags & 4098 && nd(e), t = n, n = t.return;
			return t.tag === 3 ? t.stateNode : null;
		}
		function zr(e) {
			if (Bv === null) return e;
			var t = Bv(e);
			return t === void 0 ? e : t.current;
		}
		function Br(e, t) {
			if (Bv === null) return !1;
			var n = Bv, r = e.elementType;
			t = t.type;
			var i = !1, a = typeof t == "object" && t ? t.$$typeof : null;
			switch (e.tag) {
				case 1:
					typeof t == "function" && (i = !0);
					break;
				case 0:
					(typeof t == "function" || a === zm) && (i = !0);
					break;
				case 11:
					(a === Fm || a === zm) && (i = !0);
					break;
				case 14:
				case 15:
					(a === Rm || a === zm) && (i = !0);
					break;
				default: return !1;
			}
			return !!(i && (e = n(r), e !== void 0 && e === n(t)));
		}
		function Vr(e) {
			Bv !== null && typeof WeakSet == "function" && (Vv === null && (Vv = /* @__PURE__ */ new WeakSet()), Vv.add(e));
		}
		function Hr(e, t, n) {
			do {
				var r = e, i = r.alternate, a = r.child, o = r.sibling, s = r.tag, c = r.type, l = r.elementType, u = null;
				switch (r = null, s) {
					case 0:
					case 1:
						u = c;
						break;
					case 15:
						u = c, r = l;
						break;
					case 14:
						r = l;
						break;
					case 11: u = c.render, r = l;
				}
				if (Bv === null) throw Error("Expected resolveFamily to be set during hot reload.");
				var d = Bv;
				if (c = l = !1, u !== null && (u = d(u), u !== void 0 && (n.has(u) ? c = !0 : t.has(u) && (s === 1 ? c = !0 : l = !0))), c || r === null || (s = d(r), s !== void 0 && n.has(s) ? c = !0 : typeof r == "object" && r.$$typeof === zm && (s = r._payload, s._status === 1 && (s = d(s._result.default), s !== void 0 && n.has(s) && (c = !0)))), Vv !== null && (Vv.has(e) || i !== null && Vv.has(i)) && (c = !0), c && (e._debugNeedsRemount = !0), (c || l) && (i = Ir(e, 2), i !== null && A(i, e, 2)), a === null || c || Hr(a, t, n), o === null) break;
				e = o;
			} while (1);
		}
		function Ur(e, t, n, r) {
			this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, Kv || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
		}
		function Wr(e) {
			return e = e.prototype, !(!e || !e.isReactComponent);
		}
		function Gr(e, t) {
			var n = e.alternate;
			switch (n === null ? (n = _(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugOwner = e._debugOwner, n._debugStack = e._debugStack, n._debugTask = e._debugTask, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null, n.actualDuration = -0, n.actualStartTime = -1.1), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
				lanes: t.lanes,
				firstContext: t.firstContext,
				_debugThenableState: t._debugThenableState
			}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugInfo = e._debugInfo, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
				case 0:
				case 15:
				case 14:
				case 1:
				case 11: n.type = zr(e.type);
			}
			return n;
		}
		function Kr(e, t) {
			e.flags &= 1206910978;
			var n = e.alternate;
			return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
				lanes: t.lanes,
				firstContext: t.firstContext,
				_debugThenableState: t._debugThenableState
			}, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration), e;
		}
		function qr(e, t, n, r, i, a) {
			var o = 0, s = zr(e);
			if (typeof s == "function") Wr(s) && (o = 1);
			else if (typeof s == "string") o = Ee(), o = Fp(e, n, o) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
			else a: switch (s) {
				case Bm: return t = _(31, n, t, i), t.elementType = Bm, t.lanes = a, t;
				case Am: return Yr(n.children, i, a, t);
				case jm:
					o = 8, i |= Uv, i |= Wv;
					break;
				case Mm: return e = n, r = i, typeof e.id != "string" && console.error("Profiler must specify an \"id\" of type `string` as a prop. Received the type `%s` instead.", typeof e.id), t = _(12, e, t, r | W), t.elementType = Mm, t.lanes = a, t.stateNode = {
					effectDuration: 0,
					passiveEffectDuration: 0
				}, t;
				case Im: return t = _(13, n, t, i), t.elementType = Im, t.lanes = a, t;
				case Lm: return t = _(19, n, t, i), t.elementType = Lm, t.lanes = a, t;
				case Vm:
				case Um: return e = i | Gv, t = _(30, n, t, e), t.elementType = Um, t.lanes = a, t.stateNode = {
					autoName: null,
					paired: null,
					clones: null,
					ref: null
				}, t;
				default:
					if (typeof s == "object" && s) switch (s.$$typeof) {
						case Pm:
							o = 10;
							break a;
						case Nm:
							o = 9;
							break a;
						case Fm:
							o = 11;
							break a;
						case Rm:
							o = 14;
							break a;
						case zm:
							o = 16, s = null;
							break a;
					}
					n = "", (e === void 0 || typeof e == "object" && e && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? s = "null" : qm(e) ? s = "array" : e !== void 0 && e.$$typeof === Om ? (s = "<" + (ve(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, (o = r ? ye(r) : null) && (n += "\n\nCheck the render method of `" + o + "`."), o = 29, n = Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (s + "." + n)), s = null;
			}
			return t = _(o, n, t, i), t.elementType = e, t.type = s, t.lanes = a, t._debugOwner = r, t;
		}
		function Jr(e, t, n) {
			return t = qr(e.type, e.key, e.props, e._owner, t, n), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
		}
		function Yr(e, t, n, r) {
			return e = _(7, e, r, t), e.lanes = n, e;
		}
		function Xr(e, t, n) {
			return e = _(6, e, null, t), e.lanes = n, e;
		}
		function Zr(e) {
			var t = _(18, null, null, U);
			return t.stateNode = e, t;
		}
		function Qr(e, t, n) {
			return t = _(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation
			}, t;
		}
		function $r(e, t) {
			if (typeof e == "object" && e) {
				var n = qv.get(e);
				return n === void 0 ? (t = {
					value: e,
					source: t,
					stack: Fe(t)
				}, qv.set(e, t), t) : n;
			}
			return {
				value: e,
				source: t,
				stack: Fe(t)
			};
		}
		function ei(e, t) {
			oi(), Jv[Yv++] = Zv, Jv[Yv++] = Xv, Xv = e, Zv = t;
		}
		function ti(e, t, n) {
			oi(), Qv[$v++] = ty, Qv[$v++] = ny, Qv[$v++] = ey, ey = e;
			var r = ty;
			e = ny;
			var i = 32 - Fh(r) - 1;
			r &= ~(1 << i), n += 1;
			var a = 32 - Fh(t) + i;
			if (30 < a) {
				var o = i - i % 5;
				a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, ty = 1 << 32 - Fh(t) + i | n << i | r, ny = a + e;
			} else ty = 1 << a | n << i | r, ny = e;
		}
		function ni(e) {
			oi(), e.return !== null && (ei(e, 1), ti(e, 1, 0));
		}
		function ri(e) {
			for (; e === Xv;) Xv = Jv[--Yv], Jv[Yv] = null, Zv = Jv[--Yv], Jv[Yv] = null;
			for (; e === ey;) ey = Qv[--$v], Qv[$v] = null, ny = Qv[--$v], Qv[$v] = null, ty = Qv[--$v], Qv[$v] = null;
		}
		function ii() {
			return oi(), ey === null ? null : {
				id: ty,
				overflow: ny
			};
		}
		function ai(e, t) {
			oi(), Qv[$v++] = ty, Qv[$v++] = ny, Qv[$v++] = ey, ty = t.id, ny = t.overflow, ey = e;
		}
		function oi() {
			G || console.error("Expected to be hydrating. This is a bug in React. Please file an issue.");
		}
		function si(e, t) {
			if (e.return === null) {
				if (oy === null) oy = {
					fiber: e,
					children: [],
					serverProps: void 0,
					serverTail: [],
					distanceFromLeaf: t
				};
				else {
					if (oy.fiber !== e) throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");
					oy.distanceFromLeaf > t && (oy.distanceFromLeaf = t);
				}
				return oy;
			}
			var n = si(e.return, t + 1).children;
			return 0 < n.length && n[n.length - 1].fiber === e ? (n = n[n.length - 1], n.distanceFromLeaf > t && (n.distanceFromLeaf = t), n) : (t = {
				fiber: e,
				children: [],
				serverProps: void 0,
				serverTail: [],
				distanceFromLeaf: t
			}, n.push(t), t);
		}
		function ci() {
			G && console.error("We should not be hydrating here. This is a bug in React. Please file a bug.");
		}
		function li(e, t) {
			ay || (e = si(e, 0), e.serverProps = null, t !== null && (t = op(t), e.serverTail.push(t)));
		}
		function ui(e) {
			var t = 1 < arguments.length && arguments[1] !== void 0 && arguments[1], n = "", r = oy;
			throw r !== null && (oy = null, n = cn(r)), gi($r(Error("Hydration failed because the server rendered " + (t ? "text" : "HTML") + " didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:\n\n- A server/client branch `if (typeof window !== 'undefined')`.\n- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.\n- Date formatting in a user's locale which doesn't match the server.\n- External changing data without sending a snapshot of it along with the HTML.\n- Invalid HTML tag nesting.\n\nIt can also happen if the client has a browser extension installed which messes with the HTML before React loaded.\n\nhttps://react.dev/link/hydration-mismatch" + n), e)), ly;
		}
		function di(e) {
			var t = e.stateNode, n = e.type, r = e.memoizedProps;
			switch (t[Kh] = e, t[qh] = r, Td(n, r), n) {
				case "dialog":
					F("cancel", t), F("close", t);
					break;
				case "iframe":
				case "object":
				case "embed":
					F("load", t);
					break;
				case "video":
				case "audio":
					for (n = 0; n < Bw.length; n++) F(Bw[n], t);
					break;
				case "source":
					F("error", t);
					break;
				case "img":
				case "image":
				case "link":
					F("error", t), F("load", t);
					break;
				case "details":
					F("toggle", t);
					break;
				case "input":
					St("input", r), F("invalid", t), Ft(t, r), Lt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
					break;
				case "option":
					zt(t, r);
					break;
				case "select":
					St("select", r), F("invalid", t), Ht(t, r);
					break;
				case "textarea": St("textarea", r), F("invalid", t), Ut(t, r), Gt(t, r.value, r.defaultValue, r.children);
			}
			n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Nd(t.textContent, n) ? (r.popover != null && (F("beforetoggle", t), F("toggle", t)), r.onScroll != null && F("scroll", t), r.onScrollEnd != null && F("scrollend", t), r.onClick != null && (t.onclick = En), t = !0) : t = !1, t || ui(e, !0);
		}
		function fi(e) {
			for (ry = e.return; ry;) switch (ry.tag) {
				case 5:
				case 31:
				case 13:
					cy = !1;
					return;
				case 27:
				case 3:
					cy = !0;
					return;
				default: ry = ry.return;
			}
		}
		function pi(e) {
			if (e !== ry) return !1;
			if (!G) return fi(e), G = !0, !1;
			var t = e.tag, n;
			if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || $d(e.type, e.memoizedProps)), n = !n), n && iy) {
				for (n = iy; n;) {
					var r = si(e, 0), i = op(n);
					r.serverTail.push(i), n = i.type === "Suspense" ? cp(n) : ap(n.nextSibling);
				}
				ui(e);
			}
			if (fi(e), t === 13) {
				if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
				iy = cp(e);
			} else if (t === 31) {
				if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
				iy = cp(e);
			} else t === 27 ? (t = iy, df(e.type) ? (e = IT, IT = null, iy = e) : iy = t) : iy = ry ? ap(e.stateNode.nextSibling) : null;
			return !0;
		}
		function mi() {
			iy = ry = null, ay = G = !1;
		}
		function hi() {
			var e = sy;
			return e !== null && (RC === null ? RC = e : RC.push.apply(RC, e), sy = null), e;
		}
		function gi(e) {
			sy === null ? sy = [e] : sy.push(e);
		}
		function _i() {
			var e = oy;
			if (e !== null) {
				oy = null;
				for (var t = cn(e); 0 < e.children.length;) e = e.children[0];
				w(e.fiber, function() {
					console.error("A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:\n\n- A server/client branch `if (typeof window !== 'undefined')`.\n- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.\n- Date formatting in a user's locale which doesn't match the server.\n- External changing data without sending a snapshot of it along with the HTML.\n- Invalid HTML tag nesting.\n\nIt can also happen if the client has a browser extension installed which messes with the HTML before React loaded.\n\n%s%s", "https://react.dev/link/hydration-mismatch", t);
				});
			}
		}
		function vi() {
			my = py = null, hy = !1;
		}
		function yi(e, t, n) {
			Se(uy, t._currentValue, e), t._currentValue = n, Se(dy, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== fy && console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = fy;
		}
		function bi(e, t) {
			e._currentValue = uy.current;
			var n = dy.current;
			xe(dy, t), e._currentRenderer = n, xe(uy, t);
		}
		function xi(e, t, n) {
			for (; e !== null;) {
				var r = e.alternate;
				if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
				e = e.return;
			}
			e !== n && console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
		}
		function Si(e, t, n, r) {
			var i = e.child;
			for (i !== null && (i.return = e); i !== null;) {
				var a = i.dependencies;
				if (a !== null) {
					var o = i.child;
					a = a.firstContext;
					a: for (; a !== null;) {
						var s = a;
						a = i;
						for (var c = 0; c < t.length; c++) if (s.context === t[c]) {
							a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), xi(a.return, n, e), r || (o = null);
							break a;
						}
						a = s.next;
					}
				} else if (i.tag === 18) {
					if (o = i.return, o === null) throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");
					o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), xi(o, n, e), o = null;
				} else i.tag === 13 && i.memoizedState !== null && i.memoizedState.dehydrated === null ? (i.lanes |= n, o = i.alternate, o !== null && (o.lanes |= n), xi(i.return, n, e), o = i.child, o = o === null ? null : o.sibling) : o = i.child;
				if (o !== null) o.return = i;
				else for (o = i; o !== null;) {
					if (o === e) {
						o = null;
						break;
					}
					if (i = o.sibling, i !== null) {
						i.return = o.return, o = i;
						break;
					}
					o = o.return;
				}
				i = o;
			}
		}
		function Ci(e, t, n, r) {
			e = null;
			for (var i = t, a = !1; i !== null;) {
				if (!a) {
					if (i.flags & 524288) a = !0;
					else if (i.flags & 262144) break;
				}
				if (i.tag === 10) {
					var o = i.alternate;
					if (o === null) throw Error("Should have a current fiber. This is a bug in React.");
					if (o = o.memoizedProps, o !== null) {
						var s = i.type;
						q_(i.pendingProps.value, o.value) || (e === null ? e = [s] : e.push(s));
					}
				} else if (i === nh.current) {
					if (o = i.alternate, o === null) throw Error("Should have a current fiber. This is a bug in React.");
					o.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e === null ? e = [eE] : e.push(eE));
				}
				i = i.return;
			}
			return e !== null && Si(t, e, n, r), t.flags |= 262144, e !== null;
		}
		function wi(e) {
			for (e = e.firstContext; e !== null;) {
				if (!q_(e.context._currentValue, e.memoizedValue)) return !0;
				e = e.next;
			}
			return !1;
		}
		function Ti(e) {
			py = e, my = null, e = e.dependencies, e !== null && (e.firstContext = null);
		}
		function Ei(e) {
			return hy && console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Oi(py, e);
		}
		function Di(e, t) {
			return py === null && Ti(e), Oi(e, t);
		}
		function Oi(e, t) {
			var n = t._currentValue;
			if (t = {
				context: t,
				memoizedValue: n,
				next: null
			}, my === null) {
				if (e === null) throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
				my = t, e.dependencies = {
					lanes: 0,
					firstContext: t,
					_debugThenableState: null
				}, e.flags |= 524288;
			} else my = my.next = t;
			return n;
		}
		function ki() {
			return {
				controller: new gy(),
				data: /* @__PURE__ */ new Map(),
				refCount: 0
			};
		}
		function Ai(e) {
			e.controller.signal.aborted && console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."), e.refCount++;
		}
		function ji(e) {
			e.refCount--, 0 > e.refCount && console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."), e.refCount === 0 && _y(vy, function() {
				e.controller.abort();
			});
		}
		function Mi(e, t) {
			if (e.pendingLanes & 4194048) {
				var n = e.transitionTypes;
				for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
					var r = t[e];
					n.indexOf(r) === -1 && n.push(r);
				}
			}
		}
		function Ni(e) {
			var t = e.transitionTypes;
			return e.transitionTypes = null, t;
		}
		function Pi(e, t, n) {
			e & 127 ? 0 > Fy && (Fy = xy(), Iy = Sy(t), Ry = t, n != null && (zy = S(n)), (Z & (aC | oC)) !== iC && (Ny = !0, Ly = Cy), e = nf(), t = tf(), e !== Hy || t !== Vy ? Hy = -1.1 : t !== null && (Ly = Cy), By = e, Vy = t) : e & 4194048 && 0 > Ky && (Ky = xy(), Jy = Sy(t), Yy = t, n != null && (Xy = S(n)), 0 > Gy) && (e = nf(), t = tf(), (e !== $y || t !== Qy) && ($y = -1.1), Zy = e, Qy = t);
		}
		function Fi(e) {
			if (0 > Fy) {
				Fy = xy(), Iy = e._debugTask == null ? null : e._debugTask, (Z & (aC | oC)) !== iC && (Ly = Cy);
				var t = nf(), n = tf();
				t !== Hy || n !== Vy ? Hy = -1.1 : n !== null && (Ly = Cy), By = t, Vy = n;
			}
			0 > Ky && (Ky = xy(), Jy = e._debugTask == null ? null : e._debugTask, 0 > Gy) && (e = nf(), t = tf(), (e !== $y || t !== Qy) && ($y = -1.1), Zy = e, Qy = t);
		}
		function Ii() {
			var e = Ay;
			return Ay = 0, e;
		}
		function Li(e) {
			var t = Ay;
			return Ay = e, t;
		}
		function Ri(e) {
			var t = Ay;
			return Ay += e, t;
		}
		function zi() {
			q = K = -1.1;
		}
		function Bi() {
			var e = K;
			return K = -1.1, e;
		}
		function Vi(e) {
			0 <= e && (K = e);
		}
		function Hi() {
			var e = jy;
			return jy = -0, e;
		}
		function Ui(e) {
			0 <= e && (jy = e);
		}
		function Wi() {
			var e = My;
			return My = null, e;
		}
		function Gi() {
			var e = Ny;
			return Ny = !1, e;
		}
		function Ki(e) {
			ky = xy(), 0 > e.actualStartTime && (e.actualStartTime = ky);
		}
		function qi(e) {
			if (0 <= ky) {
				var t = xy() - ky;
				e.actualDuration += t, e.selfBaseDuration = t, ky = -1;
			}
		}
		function Ji(e) {
			if (0 <= ky) {
				var t = xy() - ky;
				e.actualDuration += t, ky = -1;
			}
		}
		function Yi() {
			if (0 <= ky) {
				var e = xy(), t = e - ky;
				ky = -1, Ay += t, jy += t, q = e;
			}
		}
		function Xi(e) {
			My === null && (My = []), My.push(e), Oy === null && (Oy = []), Oy.push(e);
		}
		function Zi() {
			ky = xy(), 0 > K && (K = ky);
		}
		function Qi(e) {
			for (var t = e.child; t;) e.actualDuration += t.actualDuration, t = t.sibling;
		}
		function $i(e, t) {
			if (lb === null) {
				var n = lb = [];
				ub = 0, db = hd(), fb = {
					status: "pending",
					value: void 0,
					then: function(e) {
						n.push(e);
					}
				};
			}
			return ub++, t.then(ea, ea), t;
		}
		function ea() {
			if (--ub === 0 && (-1 < Ky || (Gy = -1.1), by = null, lb !== null)) {
				fb !== null && (fb.status = "fulfilled");
				var e = lb;
				lb = null, db = 0, fb = null;
				for (var t = 0; t < e.length; t++) (0, e[t])();
			}
		}
		function ta(e, t) {
			var n = [], r = {
				status: "pending",
				value: null,
				reason: null,
				then: function(e) {
					n.push(e);
				}
			};
			return e.then(function() {
				r.status = "fulfilled", r.value = t;
				for (var e = 0; e < n.length; e++) (0, n[e])(t);
			}, function(e) {
				for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
			}), r;
		}
		function na() {
			var e = mb.current;
			return e === null ? mC.pooledCache : e;
		}
		function ra(e, t) {
			t === null ? Se(mb, mb.current, e) : Se(mb, t.pool, e);
		}
		function ia() {
			var e = na();
			return e === null ? null : {
				parent: yy._currentValue,
				pool: e
			};
		}
		function aa() {
			return {
				didWarnAboutUncachedPromise: !1,
				thenables: []
			};
		}
		function oa(e) {
			return e = e.status, e === "fulfilled" || e === "rejected";
		}
		function sa(e, t, n, r) {
			B.actQueue !== null && (B.didUsePromise = !0);
			var i = e.thenables;
			if (n = i[n], n === void 0 ? i.push(t) : n !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")), t.then(En, En), t = n), t._debugInfo === void 0) {
				e = performance.now(), i = t.displayName;
				var a = {
					name: typeof i == "string" ? i : "Promise",
					start: e,
					end: e,
					value: t
				};
				t._debugInfo = [{ awaited: a }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
					a.end = performance.now();
				}, t.then(e, e));
			}
			switch (t.status) {
				case "fulfilled": return t.value;
				case "rejected": throw r = t.reason, ua(r), r === void 0 && !("reason" in t) ? Error("A rejected Promise was passed to React without a `reason` property. React threw a generic error from where the Promise was used to assist in identifying the problematic Promise. Make sure that instrumented Promises correctly set the `reason` property when setting `status` to `'rejected'`.") : r;
				default:
					if (typeof t.status == "string") t.then(En, En);
					else {
						if (e = mC, e !== null && 100 < e.shellSuspendCounter) throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
						e = t, e.status = "pending", e.then(function(e) {
							if (t.status === "pending") {
								var n = t;
								n.status = "fulfilled", n.value = e;
							}
						}, function(e) {
							if (t.status === "pending") {
								var n = t;
								n.status = "rejected", n.reason = e;
							}
						});
					}
					switch (t.status) {
						case "fulfilled": return t.value;
						case "rejected": throw r = t.reason, ua(r), r;
					}
					throw Zb = t, Qb = !0, Xb || r === null || r.alternate !== null || (Jb = r, Yb = Error("This library called use() to suspend in a previous render but did not call use() when it finished. This indicates an incorrect use of use(). Learn more: https://react.dev/warnings/conditional-use-of-use")), Wb;
			}
		}
		function ca(e) {
			try {
				return Ub(e);
			} catch (e) {
				throw typeof e == "object" && e && typeof e.then == "function" ? (Zb = e, Qb = !0, Wb) : e;
			}
		}
		function la() {
			if (Zb === null) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
			var e = Zb;
			return Zb = null, Qb = !1, e;
		}
		function ua(e) {
			if (e === Wb || e === Kb) throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");
		}
		function da(e, t) {
			return e === t ? !0 : e.tag !== t.tag || e.type !== t.type || e.key !== t.key || e.index !== t.index || e.tag === 3 && e.stateNode !== t.stateNode || e.return === null || t.return === null ? !1 : da(e.return, t.return);
		}
		function fa(e) {
			var t = J;
			return e != null && (J = t === null ? e : t.concat(e)), t;
		}
		function pa() {
			var e = J;
			if (e != null) {
				for (var t = e.length - 1; 0 <= t; t--) if (e[t].name != null) {
					var n = e[t].debugTask;
					if (n != null) return n;
				}
			}
			return null;
		}
		function ma(e, t, n) {
			for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
				var a = r[i];
				if (a !== "children" && a !== "key" && a !== "ref") {
					t === null && (t = Jr(e, n.mode, 0), t._debugInfo = J, t.return = n), w(t, function(e) {
						console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key`, `ref`, and `children` props.", e);
					}, a);
					break;
				}
			}
		}
		function ha(e) {
			var t = ex;
			return ex += 1, $b === null && ($b = aa()), sa($b, e, t, null);
		}
		function ga(e, t) {
			t = t.props.ref, e.ref = t === void 0 ? null : t;
		}
		function _a(e, t) {
			throw t.$$typeof === Dm ? Error("A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the \"react\" package is used.\n- A library pre-bundled an old copy of \"react\" or \"react/jsx-runtime\".\n- A compiler tries to \"inline\" JSX instead of using the runtime.") : (e = Object.prototype.toString.call(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."));
		}
		function va(e, t) {
			var n = pa();
			n === null ? _a(e, t) : n.run(_a.bind(null, e, t));
		}
		function ya(e, t) {
			var n = S(e) || "Component";
			ix[n] || (ix[n] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.\n  root.render(%s)", t, t, t) : console.error("Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.\n  <%s>{%s}</%s>", t, t, n, t, n));
		}
		function ba(e, t) {
			var n = pa();
			n === null ? ya(e, t) : n.run(ya.bind(null, e, t));
		}
		function E(e, t) {
			var n = S(e) || "Component";
			ax[n] || (ax[n] = !0, t = String(t), e.tag === 3 ? console.error("Symbols are not valid as a React child.\n  root.render(%s)", t) : console.error("Symbols are not valid as a React child.\n  <%s>%s</%s>", n, t, n));
		}
		function xa(e, t) {
			var n = pa();
			n === null ? E(e, t) : n.run(E.bind(null, e, t));
		}
		function Sa(e) {
			function t(t, n) {
				if (e) {
					var r = t.deletions;
					r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
				}
			}
			function n(n, r) {
				if (!e) return null;
				for (; r !== null;) t(n, r), r = r.sibling;
				return null;
			}
			function r(e) {
				for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
				return t;
			}
			function i(e, t) {
				return e = Gr(e, t), e.index = 0, e.sibling = null, e;
			}
			function a(t, n, r) {
				return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
			}
			function o(t) {
				return e && t.alternate === null && (t.flags |= 134217730), t;
			}
			function s(e, t, n, r) {
				return t === null || t.tag !== 6 ? (t = Xr(n, e.mode, r), t.return = e, t._debugOwner = e, t._debugTask = e._debugTask, t._debugInfo = J, t) : (t = i(t, n), t.return = e, t._debugInfo = J, t);
			}
			function c(e, t, n, r) {
				var a = n.type;
				return a === Am ? (t = u(e, t, n.props.children, r, n.key), ga(t, n), ma(n, t, e), t) : t !== null && (t.elementType === a || Br(t, n) || typeof a == "object" && a && a.$$typeof === zm && ca(a) === t.type) ? (t = i(t, n.props), ga(t, n), t.return = e, t._debugOwner = n._owner, t._debugInfo = J, t) : (t = Jr(n, e.mode, r), ga(t, n), t.return = e, t._debugInfo = J, t);
			}
			function l(e, t, n, r) {
				return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Qr(n, e.mode, r), t.return = e, t._debugInfo = J, t) : (t = i(t, n.children || []), t.return = e, t._debugInfo = J, t);
			}
			function u(e, t, n, r, a) {
				return t === null || t.tag !== 7 ? (t = Yr(n, e.mode, r, a), t.return = e, t._debugOwner = e, t._debugTask = e._debugTask, t._debugInfo = J, t) : (t = i(t, n), t.return = e, t._debugInfo = J, t);
			}
			function d(e, t, n) {
				if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Xr("" + t, e.mode, n), t.return = e, t._debugOwner = e, t._debugTask = e._debugTask, t._debugInfo = J, t;
				if (typeof t == "object" && t) {
					switch (t.$$typeof) {
						case Om: return n = Jr(t, e.mode, n), ga(n, t), n.return = e, e = fa(t._debugInfo), n._debugInfo = J, J = e, n;
						case km: return t = Qr(t, e.mode, n), t.return = e, t._debugInfo = J, t;
						case zm:
							var r = fa(t._debugInfo);
							return t = ca(t), e = d(e, t, n), J = r, e;
					}
					if (qm(t) || _e(t)) return n = Yr(t, e.mode, n, null), n.return = e, n._debugOwner = e, n._debugTask = e._debugTask, e = fa(t._debugInfo), n._debugInfo = J, J = e, n;
					if (typeof t.then == "function") return r = fa(t._debugInfo), e = d(e, ha(t), n), J = r, e;
					if (t.$$typeof === Pm) return d(e, Di(e, t), n);
					va(e, t);
				}
				return typeof t == "function" && ba(e, t), typeof t == "symbol" && xa(e, t), null;
			}
			function f(e, t, n, r) {
				var i = t === null ? null : t.key;
				if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? s(e, t, "" + n, r) : null;
				if (typeof n == "object" && n) {
					switch (n.$$typeof) {
						case Om: return n.key === i ? (i = fa(n._debugInfo), e = c(e, t, n, r), J = i, e) : null;
						case km: return n.key === i ? l(e, t, n, r) : null;
						case zm: return i = fa(n._debugInfo), n = ca(n), e = f(e, t, n, r), J = i, e;
					}
					if (qm(n) || _e(n)) return i === null ? (i = fa(n._debugInfo), e = u(e, t, n, r, null), J = i, e) : null;
					if (typeof n.then == "function") return i = fa(n._debugInfo), e = f(e, t, ha(n), r), J = i, e;
					if (n.$$typeof === Pm) return f(e, t, Di(e, n), r);
					va(e, n);
				}
				return typeof n == "function" && ba(e, n), typeof n == "symbol" && xa(e, n), null;
			}
			function p(e, t, n, r, i) {
				if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, s(t, e, "" + r, i);
				if (typeof r == "object" && r) {
					switch (r.$$typeof) {
						case Om: return n = e.get(r.key === null ? n : r.key) || null, e = fa(r._debugInfo), t = c(t, n, r, i), J = e, t;
						case km: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
						case zm:
							var a = fa(r._debugInfo);
							return r = ca(r), t = p(e, t, n, r, i), J = a, t;
					}
					if (qm(r) || _e(r)) return n = e.get(n) || null, e = fa(r._debugInfo), t = u(t, n, r, i, null), J = e, t;
					if (typeof r.then == "function") return a = fa(r._debugInfo), t = p(e, t, n, ha(r), i), J = a, t;
					if (r.$$typeof === Pm) return p(e, t, n, Di(t, r), i);
					va(t, r);
				}
				return typeof r == "function" && ba(t, r), typeof r == "symbol" && xa(t, r), null;
			}
			function m(e, t, n, r) {
				if (typeof n != "object" || !n) return r;
				switch (n.$$typeof) {
					case Om:
					case km:
						h(e, t, n);
						var i = n.key;
						if (typeof i != "string") break;
						if (r === null) {
							r = /* @__PURE__ */ new Set(), r.add(i);
							break;
						}
						if (!r.has(i)) {
							r.add(i);
							break;
						}
						w(t, function() {
							console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", i);
						});
						break;
					case zm: n = ca(n), m(e, t, n, r);
				}
				return r;
			}
			function g(i, o, s, c) {
				for (var l = null, u = null, h = null, g = o, _ = o = 0, v = null; g !== null && _ < s.length; _++) {
					g.index > _ ? (v = g, g = null) : v = g.sibling;
					var y = f(i, g, s[_], c);
					if (y === null) {
						g === null && (g = v);
						break;
					}
					l = m(i, y, s[_], l), e && g && y.alternate === null && t(i, g), o = a(y, o, _), h === null ? u = y : h.sibling = y, h = y, g = v;
				}
				if (_ === s.length) return n(i, g), G && ei(i, _), u;
				if (g === null) {
					for (; _ < s.length; _++) g = d(i, s[_], c), g !== null && (l = m(i, g, s[_], l), o = a(g, o, _), h === null ? u = g : h.sibling = g, h = g);
					return G && ei(i, _), u;
				}
				for (g = r(g); _ < s.length; _++) v = p(g, i, _, s[_], c), v !== null && (l = m(i, v, s[_], l), e && (y = v.alternate, y !== null && g.delete(y.key === null ? _ : y.key)), o = a(v, o, _), h === null ? u = v : h.sibling = v, h = v);
				return e && g.forEach(function(e) {
					return t(i, e);
				}), G && ei(i, _), u;
			}
			function v(i, o, s, c) {
				if (s == null) throw Error("An iterable object provided no iterator.");
				for (var l = null, u = null, h = o, g = o = 0, _ = null, v = null, y = s.next(); h !== null && !y.done; g++, y = s.next()) {
					h.index > g ? (_ = h, h = null) : _ = h.sibling;
					var b = f(i, h, y.value, c);
					if (b === null) {
						h === null && (h = _);
						break;
					}
					v = m(i, b, y.value, v), e && h && b.alternate === null && t(i, h), o = a(b, o, g), u === null ? l = b : u.sibling = b, u = b, h = _;
				}
				if (y.done) return n(i, h), G && ei(i, g), l;
				if (h === null) {
					for (; !y.done; g++, y = s.next()) h = d(i, y.value, c), h !== null && (v = m(i, h, y.value, v), o = a(h, o, g), u === null ? l = h : u.sibling = h, u = h);
					return G && ei(i, g), l;
				}
				for (h = r(h); !y.done; g++, y = s.next()) _ = p(h, i, g, y.value, c), _ !== null && (v = m(i, _, y.value, v), e && (y = _.alternate, y !== null && h.delete(y.key === null ? g : y.key)), o = a(_, o, g), u === null ? l = _ : u.sibling = _, u = _);
				return e && h.forEach(function(e) {
					return t(i, e);
				}), G && ei(i, g), l;
			}
			function y(e, r, a, s) {
				if (typeof a == "object" && a && a.type === Am && a.key === null && a.props.ref === void 0 && (ma(a, null, e), a = a.props.children), typeof a == "object" && a) {
					switch (a.$$typeof) {
						case Om:
							var c = fa(a._debugInfo);
							a: {
								for (var l = a.key; r !== null;) {
									if (r.key === l) {
										if (l = a.type, l === Am) {
											if (r.tag === 7) {
												n(e, r.sibling), s = i(r, a.props.children), ga(s, a), s.return = e, s._debugOwner = a._owner, s._debugInfo = J, ma(a, s, e), e = s;
												break a;
											}
										} else if (r.elementType === l || Br(r, a) || typeof l == "object" && l && l.$$typeof === zm && ca(l) === r.type) {
											n(e, r.sibling), s = i(r, a.props), ga(s, a), s.return = e, s._debugOwner = a._owner, s._debugInfo = J, e = s;
											break a;
										}
										n(e, r);
										break;
									}
									t(e, r), r = r.sibling;
								}
								a.type === Am ? (s = Yr(a.props.children, e.mode, s, a.key), ga(s, a), s.return = e, s._debugOwner = e, s._debugTask = e._debugTask, s._debugInfo = J, ma(a, s, e), e = s) : (s = Jr(a, e.mode, s), ga(s, a), s.return = e, s._debugInfo = J, e = s);
							}
							return e = o(e), J = c, e;
						case km:
							a: {
								for (c = a, a = c.key; r !== null;) {
									if (r.key === a) {
										if (r.tag === 4 && r.stateNode.containerInfo === c.containerInfo && r.stateNode.implementation === c.implementation) {
											n(e, r.sibling), s = i(r, c.children || []), s.return = e, e = s;
											break a;
										}
										n(e, r);
										break;
									}
									t(e, r), r = r.sibling;
								}
								s = Qr(c, e.mode, s), s.return = e, e = s;
							}
							return o(e);
						case zm: return c = fa(a._debugInfo), a = ca(a), e = y(e, r, a, s), J = c, e;
					}
					if (qm(a)) return g(e, r, a, s);
					if (_e(a)) {
						if (c = a, a = _e(c), typeof a != "function") throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
						return l = a.call(c), l === c ? (e.tag !== 0 || Object.prototype.toString.call(e.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(l) !== "[object Generator]") && (nx || console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."), nx = !0) : c.entries !== a || tx || (console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tx = !0), v(e, r, l, s);
					}
					if (typeof a.then == "function") return c = fa(a._debugInfo), e = y(e, r, ha(a), s), J = c, e;
					if (a.$$typeof === Pm) return y(e, r, Di(e, a), s);
					va(e, a);
				}
				return typeof a == "string" && a !== "" || typeof a == "number" || typeof a == "bigint" ? (c = "" + a, r !== null && r.tag === 6 ? (n(e, r.sibling), s = i(r, c), s.return = e, e = s) : (n(e, r), s = Xr(c, e.mode, s), s.return = e, s._debugOwner = e, s._debugTask = e._debugTask, s._debugInfo = J, e = s), o(e)) : (typeof a == "function" && ba(e, a), typeof a == "symbol" && xa(e, a), n(e, r));
			}
			return function(e, t, n, r) {
				var i = J;
				J = null;
				try {
					ex = 0;
					var a = y(e, t, n, r);
					return $b = null, a;
				} catch (t) {
					if (t === Wb || t === Kb) throw t;
					var o = _(29, t, null, e.mode);
					o.lanes = r, o.return = e;
					var s = o._debugInfo = J;
					if (o._debugOwner = e._debugOwner, o._debugTask = e._debugTask, s != null) {
						for (var c = s.length - 1; 0 <= c; c--) if (typeof s[c].stack == "string") {
							o._debugOwner = s[c], o._debugTask = s[c].debugTask;
							break;
						}
					}
					return o;
				} finally {
					J = i;
				}
			};
		}
		function Ca(e, t) {
			var n = qm(e);
			return e = !n && typeof _e(e) == "function", n || e ? (n = n ? "array" : "iterable", console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", n, t, n), !1) : !0;
		}
		function wa(e) {
			e.updateQueue = {
				baseState: e.memoizedState,
				firstBaseUpdate: null,
				lastBaseUpdate: null,
				shared: {
					pending: null,
					lanes: 0,
					hiddenCallbacks: null
				},
				callbacks: null
			};
		}
		function Ta(e, t) {
			e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
				baseState: e.baseState,
				firstBaseUpdate: e.firstBaseUpdate,
				lastBaseUpdate: e.lastBaseUpdate,
				shared: e.shared,
				callbacks: null
			});
		}
		function Ea(e) {
			return {
				lane: e,
				tag: cx,
				payload: null,
				callback: null,
				next: null
			};
		}
		function Da(e, t, n) {
			var r = e.updateQueue;
			if (r === null) return null;
			if (r = r.shared, mx === r && !px) {
				var i = S(e);
				console.error("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.\n\nPlease update the following component: %s", i), px = !0;
			}
			return (Z & aC) === iC ? (Pr(e, r, t, n), Rr(e)) : (i = r.pending, i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Rr(e), Lr(e, null, n), t);
		}
		function Oa(e, t, n) {
			if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
				var r = t.lanes;
				r &= e.pendingLanes, n |= r, t.lanes = n, at(e, n);
			}
		}
		function ka(e, t) {
			var n = e.updateQueue, r = e.alternate;
			if (r !== null && (r = r.updateQueue, n === r)) {
				var i = null, a = null;
				if (n = n.firstBaseUpdate, n !== null) {
					do {
						var o = {
							lane: n.lane,
							tag: n.tag,
							payload: n.payload,
							callback: null,
							next: null
						};
						a === null ? i = a = o : a = a.next = o, n = n.next;
					} while (n !== null);
					a === null ? i = a = t : a = a.next = t;
				} else i = a = t;
				n = {
					baseState: r.baseState,
					firstBaseUpdate: i,
					lastBaseUpdate: a,
					shared: r.shared,
					callbacks: r.callbacks
				}, e.updateQueue = n;
				return;
			}
			e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
		}
		function Aa() {
			if (hx) {
				var e = fb;
				if (e !== null) throw e;
			}
		}
		function ja(e, t, n, r) {
			hx = !1;
			var i = e.updateQueue;
			fx = !1, mx = i.shared;
			var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
			if (s !== null) {
				i.shared.pending = null;
				var c = s, l = c.next;
				c.next = null, o === null ? a = l : o.next = l, o = c;
				var u = e.alternate;
				u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
			}
			if (a !== null) {
				var d = i.baseState;
				o = 0, u = l = c = null, s = a;
				do {
					var f = s.lane & -536870913, p = f !== s.lane;
					if (p ? ($ & f) === f : (r & f) === f) {
						f !== 0 && f === db && (hx = !0), u !== null && (u = u.next = {
							lane: 0,
							tag: s.tag,
							payload: s.payload,
							callback: null,
							next: null
						});
						a: {
							f = e;
							var m = s, h = t, g = n;
							switch (m.tag) {
								case lx:
									if (m = m.payload, typeof m == "function") {
										hy = !0;
										var _ = m.call(g, d, h);
										if (f.mode & Uv) {
											qe(!0);
											try {
												m.call(g, d, h);
											} finally {
												qe(!1);
											}
										}
										hy = !1, d = _;
										break a;
									}
									d = m;
									break a;
								case dx: f.flags = f.flags & -65537 | 128;
								case cx:
									if (_ = m.payload, typeof _ == "function") {
										if (hy = !0, m = _.call(g, d, h), f.mode & Uv) {
											qe(!0);
											try {
												_.call(g, d, h);
											} finally {
												qe(!1);
											}
										}
										hy = !1;
									} else m = _;
									if (m == null) break a;
									d = z({}, d, m);
									break a;
								case ux: fx = !0;
							}
						}
						f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
					} else p = {
						lane: f,
						tag: s.tag,
						payload: s.payload,
						callback: s.callback,
						next: null
					}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
					if (s = s.next, s === null) {
						if (s = i.shared.pending, s === null) break;
						p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
					}
				} while (1);
				u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), MC |= o, e.lanes = o, e.memoizedState = d;
			}
			mx = null;
		}
		function Ma(e, t) {
			if (typeof e != "function") throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
			e.call(t);
		}
		function Na(e, t) {
			var n = e.shared.hiddenCallbacks;
			if (n !== null) for (e.shared.hiddenCallbacks = null, e = 0; e < n.length; e++) Ma(n[e], t);
		}
		function Pa(e, t) {
			var n = e.callbacks;
			if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Ma(n[e], t);
		}
		function Fa(e, t) {
			var n = AC;
			Se(_x, n, e), Se(gx, t, e), AC = n | t.baseLanes;
		}
		function Ia(e) {
			Se(_x, AC, e), Se(gx, gx.current, e);
		}
		function La(e) {
			AC = _x.current, xe(gx, e), xe(_x, e);
		}
		function Ra(e) {
			var t = e.alternate;
			Se(Sx, Sx.current & bx, e), Se(vx, e, e), yx === null && (t === null || gx.current !== null || t.memoizedState !== null) && (yx = e);
		}
		function za(e) {
			Se(Sx, Sx.current, e), Se(vx, e, e), yx === null && (yx = e);
		}
		function Ba(e) {
			e.tag === 22 ? (Se(Sx, Sx.current, e), Se(vx, e, e), yx === null && (yx = e)) : Va(e);
		}
		function Va(e) {
			Se(Sx, Sx.current, e), Se(vx, vx.current, e);
		}
		function Ha(e) {
			xe(vx, e), yx === e && (yx = null), xe(Sx, e);
		}
		function Ua(e, t) {
			Se(vx, vx.current, e), Se(Sx, t, e);
		}
		function Wa(e) {
			xe(Sx, e), xe(vx, e), yx === e && (yx = null);
		}
		function Ga(e) {
			for (var t = e; t !== null;) {
				if (t.tag === 13) {
					var n = t.memoizedState;
					if (n !== null && (n = n.dehydrated, n === null || rp(n) || R(n))) return t;
				} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
					if (t.flags & 128) return t;
				} else if (t.child !== null) {
					t.child.return = t, t = t.child;
					continue;
				}
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return null;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
			return null;
		}
		function D() {
			var e = X;
			Wx === null ? Wx = [e] : Wx.push(e);
		}
		function O() {
			var e = X;
			if (Wx !== null && (Gx++, Wx[Gx] !== e)) {
				var t = S(Y);
				if (!kx.has(t) && (kx.add(t), Wx !== null)) {
					for (var n = "", r = 0; r <= Gx; r++) {
						var i = Wx[r], a = r === Gx ? e : i;
						for (i = r + 1 + ". " + i; 30 > i.length;) i += " ";
						i += a + "\n", n += i;
					}
					console.error("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n", t, n);
				}
			}
		}
		function Ka(e) {
			e == null || qm(e) || console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", X, typeof e);
		}
		function qa() {
			var e = S(Y);
			Mx.has(e) || (Mx.add(e), console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.", e));
		}
		function Ja() {
			throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
		}
		function Ya(e, t) {
			if (Kx) return !1;
			if (t === null) return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", X), !1;
			e.length !== t.length && console.error("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s", X, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
			for (var n = 0; n < t.length && n < e.length; n++) if (!q_(e[n], t[n])) return !1;
			return !0;
		}
		function Xa(e, t, n, r, i, a) {
			Nx = a, Y = t, Wx = e === null ? null : e._debugHookTypes, Gx = -1, Kx = e !== null && e.type !== t.type, (Object.prototype.toString.call(n) === "[object AsyncFunction]" || Object.prototype.toString.call(n) === "[object AsyncGeneratorFunction]") && (a = S(Y), jx.has(a) || (jx.add(a), console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.", a === null ? "An unknown Component" : "<" + a + ">"))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, B.H = e !== null && e.memoizedState !== null ? Xx : Wx === null ? Jx : Yx, Rx = a = (t.mode & Uv) !== U;
			var o = Db(n, r, i);
			if (Rx = !1, Lx && (o = Qa(t, n, r, i)), a) {
				qe(!0);
				try {
					o = Qa(t, n, r, i);
				} finally {
					qe(!1);
				}
			}
			return Za(e, t), o;
		}
		function Za(e, t) {
			t._debugHookTypes = Wx, t.dependencies === null ? Vx !== null && (t.dependencies = {
				lanes: 0,
				firstContext: null,
				_debugThenableState: Vx
			}) : t.dependencies._debugThenableState = Vx;
			var n = Vx;
			if (Jb !== null && da(Jb, t) && (n !== null || Yb === null || Xb || (Xb = !0, console.error(Yb)), Yb = Jb = null), B.H = qx, n = Px !== null && Px.next !== null, Nx = 0, Wx = X = Fx = Px = Y = null, Gx = -1, e !== null && (e.flags & 1206910976) != (t.flags & 1206910976) && console.error("Internal React error: Expected static flag was missing. Please notify the React team."), Ix = !1, Bx = 0, Vx = null, n) throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
			e === null || gS || (e = e.dependencies, e !== null && wi(e) && (gS = !0)), Qb ? (Qb = !1, e = !0) : e = !1, e && (t = S(t) || "Unknown", Ax.has(t) || jx.has(t) || (Ax.add(t), console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")));
		}
		function Qa(e, t, n, r) {
			Y = e;
			var i = 0;
			do {
				if (Lx && (Vx = null), Bx = 0, Lx = !1, i >= Ux) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
				if (i += 1, Kx = !1, Fx = Px = null, e.updateQueue != null) {
					var a = e.updateQueue;
					a.lastEffect = null, a.events = null, a.stores = null, a.memoCache != null && (a.memoCache.index = 0);
				}
				Gx = -1, B.H = Zx, a = Db(t, n, r);
			} while (Lx);
			return a;
		}
		function $a() {
			var e = B.H, t = e.useState()[0];
			return t = typeof t.then == "function" ? oo(t) : t, e = e.useState()[0], (Px === null ? null : Px.memoizedState) !== e && (Y.flags |= 1024), t;
		}
		function eo() {
			var e = zx !== 0;
			return zx = 0, e;
		}
		function to(e, t, n) {
			t.updateQueue = e.updateQueue, t.flags = (t.mode & Wv) === U ? t.flags & -2053 : t.flags & -805308421, e.lanes &= ~n;
		}
		function no(e) {
			if (Ix) {
				for (e = e.memoizedState; e !== null;) {
					var t = e.queue;
					t !== null && (t.pending = null), e = e.next;
				}
				Ix = !1;
			}
			Nx = 0, Wx = Fx = Px = Y = null, Gx = -1, X = null, Lx = !1, Bx = zx = 0, Vx = null;
		}
		function ro() {
			var e = {
				memoizedState: null,
				baseState: null,
				baseQueue: null,
				queue: null,
				next: null
			};
			return Fx === null ? Y.memoizedState = Fx = e : Fx = Fx.next = e, Fx;
		}
		function io() {
			if (Px === null) {
				var e = Y.alternate;
				e = e === null ? null : e.memoizedState;
			} else e = Px.next;
			var t = Fx === null ? Y.memoizedState : Fx.next;
			if (t !== null) Fx = t, Px = e;
			else {
				if (e === null) throw Y.alternate === null ? Error("Update hook called on initial render. This is likely a bug in React. Please file an issue.") : Error("Rendered more hooks than during the previous render.");
				Px = e, e = {
					memoizedState: Px.memoizedState,
					baseState: Px.baseState,
					baseQueue: Px.baseQueue,
					queue: Px.queue,
					next: null
				}, Fx === null ? Y.memoizedState = Fx = e : Fx = Fx.next = e;
			}
			return Fx;
		}
		function ao() {
			return {
				lastEffect: null,
				events: null,
				stores: null,
				memoCache: null
			};
		}
		function oo(e) {
			var t = Bx;
			return Bx += 1, Vx === null && (Vx = aa()), e = sa(Vx, e, t, Y), t = Y, (Fx === null ? t.memoizedState : Fx.next) === null && (t = t.alternate, B.H = t !== null && t.memoizedState !== null ? Xx : Jx), e;
		}
		function so(e) {
			if (typeof e == "object" && e) {
				if (typeof e.then == "function") return oo(e);
				if (e.$$typeof === Wm) return;
				if (e.$$typeof === Pm) return Ei(e);
			}
			throw Error("An unsupported type was passed to use(): " + String(e));
		}
		function co(e) {
			var t = null, n = Y.updateQueue;
			if (n !== null && (t = n.memoCache), t == null) {
				var r = Y.alternate;
				r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
					data: r.data.map(function(e) {
						return e.slice();
					}),
					index: 0
				})));
			}
			if (t ??= {
				data: [],
				index: 0
			}, n === null && (n = ao(), Y.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0 || Kx) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = Hm;
			else n.length !== e && console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.", n.length, e);
			return t.index++, n;
		}
		function lo(e, t) {
			return typeof t == "function" ? t(e) : t;
		}
		function uo(e, t, n) {
			var r = ro();
			if (n !== void 0) {
				var i = n(t);
				if (Rx) {
					qe(!0);
					try {
						n(t);
					} finally {
						qe(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = vs.bind(null, Y, e), [r.memoizedState, e];
		}
		function fo(e) {
			return po(io(), Px, e);
		}
		function po(e, t, n) {
			var r = e.queue;
			if (r === null) throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
			r.lastRenderedReducer = n;
			var i = e.baseQueue, a = r.pending;
			if (a !== null) {
				if (i !== null) {
					var o = i.next;
					i.next = a.next, a.next = o;
				}
				t.baseQueue !== i && console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), t.baseQueue = i = a, r.pending = null;
			}
			if (a = e.baseState, i === null) e.memoizedState = a;
			else {
				t = i.next;
				var s = o = null, c = null, l = t, u = !1;
				do {
					var d = l.lane & -536870913;
					if (d === l.lane ? (Nx & d) === d : ($ & d) === d) {
						var f = l.revertLane;
						if (f === 0) c !== null && (c = c.next = {
							lane: 0,
							revertLane: 0,
							gesture: null,
							action: l.action,
							hasEagerState: l.hasEagerState,
							eagerState: l.eagerState,
							next: null
						}), d === db && (u = !0);
						else if ((Nx & f) === f) {
							l = l.next, f === db && (u = !0);
							continue;
						} else d = {
							lane: 0,
							revertLane: l.revertLane,
							gesture: null,
							action: l.action,
							hasEagerState: l.hasEagerState,
							eagerState: l.eagerState,
							next: null
						}, c === null ? (s = c = d, o = a) : c = c.next = d, Y.lanes |= f, MC |= f;
						d = l.action, Rx && n(a, d), a = l.hasEagerState ? l.eagerState : n(a, d);
					} else f = {
						lane: d,
						revertLane: l.revertLane,
						gesture: l.gesture,
						action: l.action,
						hasEagerState: l.hasEagerState,
						eagerState: l.eagerState,
						next: null
					}, c === null ? (s = c = f, o = a) : c = c.next = f, Y.lanes |= d, MC |= d;
					l = l.next;
				} while (l !== null && l !== t);
				if (c === null ? o = a : c.next = s, !q_(a, e.memoizedState) && (gS = !0, u && (n = fb, n !== null))) throw n;
				e.memoizedState = a, e.baseState = o, e.baseQueue = c, r.lastRenderedState = a;
			}
			return i === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
		}
		function mo(e) {
			var t = io(), n = t.queue;
			if (n === null) throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");
			n.lastRenderedReducer = e;
			var r = n.dispatch, i = n.pending, a = t.memoizedState;
			if (i !== null) {
				n.pending = null;
				var o = i = i.next;
				do
					a = e(a, o.action), o = o.next;
				while (o !== i);
				q_(a, t.memoizedState) || (gS = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
			}
			return [a, r];
		}
		function ho(e, t, n) {
			var r = Y, i = ro();
			if (G) {
				if (n === void 0) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
				var a = n();
				Ox || a === n() || (console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ox = !0);
			} else {
				if (a = t(), Ox || (n = t(), q_(a, n) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), Ox = !0)), mC === null) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
				$ & 127 || _o(r, t, a);
			}
			return i.memoizedState = a, n = {
				value: a,
				getSnapshot: t
			}, i.queue = n, Wo(yo.bind(null, r, n, e), [e]), r.flags |= 2048, Bo(wx | Dx, { destroy: void 0 }, vo.bind(null, r, n, a, t), null), a;
		}
		function go(e, t, n) {
			var r = Y, i = io(), a = G;
			if (a) {
				if (n === void 0) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
				n = n();
			} else if (n = t(), !Ox) {
				var o = t();
				q_(n, o) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), Ox = !0);
			}
			if ((o = !q_((Px || i).memoizedState, n)) && (i.memoizedState = n, gS = !0), i = i.queue, Uo(2048, Dx, yo.bind(null, r, i, e), [e]), e = i.getSnapshot !== t || o || Fx !== null && (Fx.memoizedState.tag & wx) !== Cx, Bo(e ? wx | Dx : Dx, { destroy: void 0 }, vo.bind(null, r, i, n, t), null), e) {
				if (r.flags |= 2048, mC === null) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
				a || Nx & 127 || _o(r, t, n);
			}
			return n;
		}
		function _o(e, t, n) {
			e.flags |= 16384, e = {
				getSnapshot: t,
				value: n
			}, t = Y.updateQueue, t === null ? (t = ao(), Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
		}
		function vo(e, t, n, r) {
			t.value = n, t.getSnapshot = r, bo(t) && xo(e);
		}
		function yo(e, t, n) {
			return n(function() {
				bo(t) && (Pi(2, "updateSyncExternalStore()", e), xo(e));
			});
		}
		function bo(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !q_(e, n);
			} catch {
				return !0;
			}
		}
		function xo(e) {
			var t = Ir(e, 2);
			t !== null && A(t, e, 2);
		}
		function So(e) {
			var t = ro();
			if (typeof e == "function") {
				var n = e;
				if (e = n(), Rx) {
					qe(!0);
					try {
						n();
					} finally {
						qe(!1);
					}
				}
			}
			return t.memoizedState = t.baseState = e, t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: lo,
				lastRenderedState: e
			}, t;
		}
		function Co(e) {
			e = So(e);
			var t = e.queue, n = ys.bind(null, Y, t);
			return t.dispatch = n, [e.memoizedState, n];
		}
		function wo(e) {
			var t = ro();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = xs.bind(null, Y, !0, n), n.dispatch = t, [e, t];
		}
		function To(e, t) {
			return Eo(io(), Px, e, t);
		}
		function Eo(e, t, n, r) {
			return e.baseState = n, po(e, Px, typeof r == "function" ? r : lo);
		}
		function Do(e, t) {
			var n = io();
			return Px === null ? (n.baseState = e, [e, n.queue.dispatch]) : Eo(n, Px, e, t);
		}
		function Oo(e, t, n, r, i) {
			if (Ss(e)) throw Error("Cannot update action state while rendering.");
			if (e = t.action, e !== null) {
				var a = {
					payload: i,
					action: e,
					next: null,
					isTransition: !0,
					status: "pending",
					value: null,
					reason: null,
					listeners: [],
					then: function(e) {
						a.listeners.push(e);
					}
				};
				B.T === null ? a.isTransition = !1 : n(!0), r(a), n = t.pending, n === null ? (a.next = t.pending = a, ko(t, a)) : (a.next = n.next, t.pending = n.next = a);
			}
		}
		function ko(e, t) {
			var n = t.action, r = t.payload, i = e.state;
			if (t.isTransition) {
				var a = B.T, o = {};
				o.types = a === null ? null : a.types, o._updatedFibers = /* @__PURE__ */ new Set(), B.T = o;
				try {
					var s = n(i, r), c = B.S;
					c !== null && c(o, s), Ao(e, t, s);
				} catch (n) {
					Mo(e, t, n);
				} finally {
					a !== null && o.types !== null && (a.types !== null && a.types !== o.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), a.types = o.types), B.T = a, a === null && o._updatedFibers && (e = o._updatedFibers.size, o._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."));
				}
			} else try {
				o = n(i, r), Ao(e, t, o);
			} catch (n) {
				Mo(e, t, n);
			}
		}
		function Ao(e, t, n) {
			typeof n == "object" && n && typeof n.then == "function" ? (B.asyncTransitions++, n.then(os, os), n.then(function(n) {
				jo(e, t, n);
			}, function(n) {
				return Mo(e, t, n);
			}), t.isTransition || console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")) : jo(e, t, n);
		}
		function jo(e, t, n) {
			t.status = "fulfilled", t.value = n, No(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, ko(e, n)));
		}
		function Mo(e, t, n) {
			var r = e.pending;
			if (e.pending = null, r !== null) {
				r = r.next;
				do
					t.status = "rejected", t.reason = n, No(t), t = t.next;
				while (t !== r);
			}
			e.action = null;
		}
		function No(e) {
			e = e.listeners;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
		function Po(e, t) {
			return t;
		}
		function Fo(e, t) {
			if (G) {
				var n = mC.formState;
				if (n !== null) {
					a: {
						var r = Y;
						if (G) {
							if (iy) {
								b: {
									for (var i = iy, a = cy; i.nodeType !== 8;) {
										if (!a) {
											i = null;
											break b;
										}
										if (i = ap(i.nextSibling), i === null) {
											i = null;
											break b;
										}
									}
									a = i.data, i = a === mT || a === hT ? i : null;
								}
								if (i) {
									iy = ap(i.nextSibling), r = i.data === mT;
									break a;
								}
							}
							ui(r);
						}
						r = !1;
					}
					r && (t = n[0]);
				}
			}
			return n = ro(), n.memoizedState = n.baseState = t, r = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Po,
				lastRenderedState: t
			}, n.queue = r, n = ys.bind(null, Y, r), r.dispatch = n, r = So(!1), a = xs.bind(null, Y, !1, r.queue), r = ro(), i = {
				state: t,
				dispatch: null,
				action: e,
				pending: null
			}, r.queue = i, n = Oo.bind(null, Y, i, a, n), i.dispatch = n, r.memoizedState = e, [
				t,
				n,
				!1
			];
		}
		function Io(e) {
			return Lo(io(), Px, e);
		}
		function Lo(e, t, n) {
			if (t = po(e, t, Po)[0], e = fo(lo)[0], typeof t == "object" && t && typeof t.then == "function") try {
				var r = oo(t);
			} catch (e) {
				throw e === Wb ? Kb : e;
			}
			else r = t;
			t = io();
			var i = t.queue, a = i.dispatch;
			return n !== t.memoizedState && (Y.flags |= 2048, Bo(wx | Dx, { destroy: void 0 }, Ro.bind(null, i, n), null)), [
				r,
				a,
				e
			];
		}
		function Ro(e, t) {
			e.action = t;
		}
		function zo(e) {
			var t = io(), n = Px;
			if (n !== null) return Lo(t, n, e);
			io(), t = t.memoizedState, n = io();
			var r = n.queue.dispatch;
			return n.memoizedState = e, [
				t,
				r,
				!1
			];
		}
		function Bo(e, t, n, r) {
			return e = {
				tag: e,
				create: n,
				deps: r,
				inst: t,
				next: null
			}, t = Y.updateQueue, t === null && (t = ao(), Y.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
		}
		function Vo(e) {
			var t = ro();
			return e = { current: e }, t.memoizedState = e;
		}
		function Ho(e, t, n, r) {
			var i = ro();
			Y.flags |= e, i.memoizedState = Bo(wx | t, { destroy: void 0 }, n, r === void 0 ? null : r);
		}
		function Uo(e, t, n, r) {
			var i = io();
			r = r === void 0 ? null : r;
			var a = i.memoizedState.inst;
			Px !== null && r !== null && Ya(r, Px.memoizedState.deps) ? i.memoizedState = Bo(t, a, n, r) : (Y.flags |= e, i.memoizedState = Bo(wx | t, a, n, r));
		}
		function Wo(e, t) {
			(Y.mode & Wv) === U ? Ho(8390656, Dx, e, t) : Ho(545261568, Dx, e, t);
		}
		function Go(e) {
			Y.flags |= 4;
			var t = Y.updateQueue;
			if (t === null) t = ao(), Y.updateQueue = t, t.events = [e];
			else {
				var n = t.events;
				n === null ? t.events = [e] : n.push(e);
			}
		}
		function Ko(e) {
			var t = ro(), n = { impl: e };
			return t.memoizedState = n, function() {
				if ((Z & aC) !== iC) throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
				return n.impl.apply(void 0, arguments);
			};
		}
		function qo(e) {
			var t = io().memoizedState;
			return Go({
				ref: t,
				nextImpl: e
			}), function() {
				if ((Z & aC) !== iC) throw Error("A function wrapped in useEffectEvent can't be called during rendering.");
				return t.impl.apply(void 0, arguments);
			};
		}
		function Jo(e, t) {
			var n = 4194308;
			return (Y.mode & Wv) !== U && (n |= 268435456), Ho(n, Ex, e, t);
		}
		function Yo(e, t) {
			if (typeof t == "function") {
				e = e();
				var n = t(e);
				return function() {
					typeof n == "function" ? n() : t(null);
				};
			}
			if (t != null) return t.hasOwnProperty("current") || console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(t).join(", ") + "}"), e = e(), t.current = e, function() {
				t.current = null;
			};
		}
		function Xo(e, t, n) {
			typeof t != "function" && console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t === null ? "null" : typeof t), n = n == null ? null : n.concat([e]);
			var r = 4194308;
			(Y.mode & Wv) !== U && (r |= 268435456), Ho(r, Ex, Yo.bind(null, t, e), n);
		}
		function Zo(e, t, n) {
			typeof t != "function" && console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t === null ? "null" : typeof t), n = n == null ? null : n.concat([e]), Uo(4, Ex, Yo.bind(null, t, e), n);
		}
		function Qo(e, t) {
			return ro().memoizedState = [e, t === void 0 ? null : t], e;
		}
		function $o(e, t) {
			var n = io();
			t = t === void 0 ? null : t;
			var r = n.memoizedState;
			return t !== null && Ya(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
		}
		function es(e, t) {
			var n = ro();
			t = t === void 0 ? null : t;
			var r = e();
			if (Rx) {
				qe(!0);
				try {
					e();
				} finally {
					qe(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		}
		function ts(e, t) {
			var n = io();
			t = t === void 0 ? null : t;
			var r = n.memoizedState;
			if (t !== null && Ya(t, r[1])) return r[0];
			if (r = e(), Rx) {
				qe(!0);
				try {
					e();
				} finally {
					qe(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		}
		function ns(e, t) {
			return is(ro(), e, t);
		}
		function k(e, t) {
			return as(io(), Px.memoizedState, e, t);
		}
		function rs(e, t) {
			var n = io();
			return Px === null ? is(n, e, t) : as(n, Px.memoizedState, e, t);
		}
		function is(e, t, n) {
			return n === void 0 || Nx & 1073741824 && !($ & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = cu(), Y.lanes |= e, MC |= e, n);
		}
		function as(e, t, n, r) {
			return q_(n, t) ? n : gx.current === null ? !(Nx & 106) || Nx & 1073741824 && !($ & 261930) ? (gS = !0, e.memoizedState = n) : (e = cu(), Y.lanes |= e, MC |= e, t) : (e = is(e, n, r), q_(e, t) || (gS = !0), e);
		}
		function os() {
			B.asyncTransitions--;
		}
		function ss(e, t, n, r, i) {
			var a = Jm.p;
			Jm.p = a !== 0 && a < Hh ? a : Hh;
			var o = B.T, s = {};
			s.types = o === null ? null : o.types, s._updatedFibers = /* @__PURE__ */ new Set(), B.T = s, xs(e, !1, t, n);
			try {
				var c = i(), l = B.S;
				if (l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function") {
					B.asyncTransitions++, c.then(os, os);
					var u = ta(c, r);
					bs(e, t, u, su(e));
				} else bs(e, t, r, su(e));
			} catch (n) {
				bs(e, t, {
					then: function() {},
					status: "rejected",
					reason: n
				}, su(e));
			} finally {
				Jm.p = a, o !== null && s.types !== null && (o.types !== null && o.types !== s.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), o.types = s.types), B.T = o, o === null && s._updatedFibers && (e = s._updatedFibers.size, s._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."));
			}
		}
		function cs(e, t, n, r) {
			if (e.tag !== 5) throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");
			var i = ls(e).queue;
			Fi(e), ss(e, i, t, $T, n === null ? m : function() {
				return us(e), n(r);
			});
		}
		function ls(e) {
			var t = e.memoizedState;
			if (t !== null) return t;
			t = {
				memoizedState: $T,
				baseState: $T,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: lo,
					lastRenderedState: $T
				},
				next: null
			};
			var n = {};
			return t.next = {
				memoizedState: n,
				baseState: n,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: lo,
					lastRenderedState: n
				},
				next: null
			}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
		}
		function us(e) {
			B.T === null && console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");
			var t = ls(e);
			t.next === null && (t = e.alternate.memoizedState), bs(e, t.next.queue, {}, su(e));
		}
		function ds() {
			var e = So(!1);
			return e = ss.bind(null, Y, e.queue, !0, !1), ro().memoizedState = e, [!1, e];
		}
		function fs() {
			var e = fo(lo)[0], t = io().memoizedState;
			return [typeof e == "boolean" ? e : oo(e), t];
		}
		function ps() {
			var e = mo(lo)[0], t = io().memoizedState;
			return [typeof e == "boolean" ? e : oo(e), t];
		}
		function ms() {
			return Ei(eE);
		}
		function hs() {
			var e = ro(), t = mC.identifierPrefix;
			if (G) {
				var n = ny, r = ty;
				n = (r & ~(1 << 32 - Fh(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = zx++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Hx++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		}
		function gs() {
			return ro().memoizedState = _s.bind(null, Y);
		}
		function _s(e, t) {
			for (var n = e.return; n !== null;) {
				switch (n.tag) {
					case 24:
					case 3:
						var r = su(n), i = Ea(r), a = Da(n, i, r);
						a !== null && (Pi(r, "refresh()", e), A(a, n, r), Oa(a, n, r)), e = ki(), t != null && a !== null && console.error("The seed argument is not enabled outside experimental channels."), i.payload = { cache: e };
						return;
				}
				n = n.return;
			}
		}
		function vs(e, t, n) {
			var r = arguments;
			typeof r[3] == "function" && console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."), r = su(e);
			var i = {
				lane: r,
				revertLane: 0,
				gesture: null,
				action: n,
				hasEagerState: !1,
				eagerState: null,
				next: null
			};
			Ss(e) ? Cs(t, i) : (i = Fr(e, t, i, r), i !== null && (Pi(r, "dispatch()", e), A(i, e, r), ws(i, t, r)));
		}
		function ys(e, t, n) {
			var r = arguments;
			typeof r[3] == "function" && console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."), r = su(e), bs(e, t, n, r) && Pi(r, "setState()", e);
		}
		function bs(e, t, n, r) {
			var i = {
				lane: r,
				revertLane: 0,
				gesture: null,
				action: n,
				hasEagerState: !1,
				eagerState: null,
				next: null
			};
			if (Ss(e)) Cs(t, i);
			else {
				var a = e.alternate;
				if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) {
					var o = B.H;
					B.H = $x;
					try {
						var s = t.lastRenderedState, c = a(s, n);
						if (i.hasEagerState = !0, i.eagerState = c, q_(c, s)) return Pr(e, t, i, 0), mC === null && Nr(), !1;
					} catch {} finally {
						B.H = o;
					}
				}
				if (n = Fr(e, t, i, r), n !== null) return A(n, e, r), ws(n, t, r), !0;
			}
			return !1;
		}
		function xs(e, t, n, r) {
			if (B.T === null && db === 0 && console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."), r = {
				lane: 2,
				revertLane: hd(),
				gesture: null,
				action: r,
				hasEagerState: !1,
				eagerState: null,
				next: null
			}, Ss(e)) {
				if (t) throw Error("Cannot update optimistic state while rendering.");
				console.error("Cannot call startTransition while rendering.");
			} else t = Fr(e, n, r, 2), t !== null && (Pi(2, "setOptimistic()", e), A(t, e, 2));
		}
		function Ss(e) {
			var t = e.alternate;
			return e === Y || t !== null && t === Y;
		}
		function Cs(e, t) {
			Lx = Ix = !0;
			var n = e.pending;
			n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
		}
		function ws(e, t, n) {
			if (n & 4194048) {
				var r = t.lanes;
				r &= e.pendingLanes, n |= r, t.lanes = n, at(e, n);
			}
		}
		function Ts(e) {
			if (e !== null && typeof e != "function") {
				var t = String(e);
				dS.has(t) || (dS.add(t), console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", e));
			}
		}
		function Es(e, t, n, r) {
			var i = e.memoizedState, a = n(r, i);
			if (e.mode & Uv) {
				qe(!0);
				try {
					a = n(r, i);
				} finally {
					qe(!1);
				}
			}
			a === void 0 && (t = ve(t) || "Component", sS.has(t) || (sS.add(t), console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", t))), i = a == null ? i : z({}, i, a), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
		}
		function Ds(e, t, n, r, i, a, o) {
			var s = e.stateNode;
			if (typeof s.shouldComponentUpdate == "function") {
				if (n = s.shouldComponentUpdate(r, a, o), e.mode & Uv) {
					qe(!0);
					try {
						n = s.shouldComponentUpdate(r, a, o);
					} finally {
						qe(!1);
					}
				}
				return n === void 0 && console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", ve(t) || "Component"), n;
			}
			return t.prototype && t.prototype.isPureReactComponent ? !tr(n, r) || !tr(i, a) : !0;
		}
		function Os(e, t, n, r) {
			var i = t.state;
			typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== i && (e = S(e) || "Component", nS.has(e) || (nS.add(e), console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", e)), fS.enqueueReplaceState(t, t.state, null));
		}
		function ks(e, t) {
			var n = t;
			if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
			if (e = e.defaultProps) for (var i in n === t && (n = z({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
			return n;
		}
		function As(e) {
			gv(e), console.warn("%s\n\n%s\n", pS ? "An error occurred in the <" + pS + "> component." : "An error occurred in one of your React components.", "Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://react.dev/link/error-boundaries to learn more about error boundaries.");
		}
		function js(e) {
			var t = pS ? "The above error occurred in the <" + pS + "> component." : "The above error occurred in one of your React components.", n = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((mS || "Anonymous") + ".");
			if (typeof e == "object" && e && typeof e.environmentName == "string") {
				var r = e.environmentName;
				e = [
					"%o\n\n%s\n\n%s\n",
					e,
					t,
					n
				].slice(0), typeof e[0] == "string" ? e.splice(0, 1, tE + " " + e[0], nE, iE + r + iE, rE) : e.splice(0, 0, tE, nE, iE + r + iE, rE), e.unshift(console), r = aE.apply(console.error, e), r();
			} else console.error("%o\n\n%s\n\n%s\n", e, t, n);
		}
		function Ms(e) {
			gv(e);
		}
		function Ns(e, t) {
			try {
				pS = t.source ? S(t.source) : null, mS = null;
				var n = t.value;
				if (B.actQueue !== null) B.thrownErrors.push(n);
				else {
					var r = e.onUncaughtError;
					r(n, { componentStack: t.stack });
				}
			} catch (e) {
				setTimeout(function() {
					throw e;
				});
			}
		}
		function Ps(e, t, n) {
			try {
				pS = n.source ? S(n.source) : null, mS = S(t);
				var r = e.onCaughtError;
				r(n.value, {
					componentStack: n.stack,
					errorBoundary: t.tag === 1 ? t.stateNode : null
				});
			} catch (e) {
				setTimeout(function() {
					throw e;
				});
			}
		}
		function Fs(e, t, n) {
			return n = Ea(n), n.tag = dx, n.payload = { element: null }, n.callback = function() {
				w(t.source, Ns, e, t);
			}, n;
		}
		function Is(e) {
			return e = Ea(e), e.tag = dx, e;
		}
		function Ls(e, t, n, r) {
			var i = n.type.getDerivedStateFromError;
			if (typeof i == "function") {
				var a = r.value;
				e.payload = function() {
					return i(a);
				}, e.callback = function() {
					Vr(n), w(r.source, Ps, t, n, r);
				};
			}
			var o = n.stateNode;
			o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
				Vr(n), w(r.source, Ps, t, n, r), typeof i != "function" && (qC === null ? qC = /* @__PURE__ */ new Set([this]) : qC.add(this)), Fb(this, r), typeof i == "function" || !(n.lanes & 2) && console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", S(n) || "Unknown");
			});
		}
		function Rs(e, t, n, r, i) {
			if (n.flags |= 32768, Ph && rd(e, i), typeof r == "object" && r && typeof r.then == "function") {
				if (t = n.alternate, t !== null && Ci(t, n, i, !0), G && (ay = !0), n = vx.current, n !== null) {
					switch (n.tag) {
						case 31:
						case 13:
						case 19: return yx === null ? Cu() : n.alternate === null && jC === sC && (jC = uC), n.flags &= -257, n.flags |= 65536, n.lanes = i, r === qb ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), Ju(e, r, i)), !1;
						case 22: return n.flags |= 65536, r === qb ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
							transitions: null,
							markerInstances: null,
							retryQueue: /* @__PURE__ */ new Set([r])
						}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), Ju(e, r, i)), !1;
					}
					throw Error("Unexpected Suspense handler tag (" + n.tag + "). This is a bug in React.");
				}
				return Ju(e, r, i), Cu(), !1;
			}
			if (G) return ay = !0, t = vx.current, t === null ? (r !== ly && gi($r(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.", { cause: r }), n)), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, r = $r(r, n), i = Fs(e.stateNode, r, i), ka(e, i), jC !== dC && (jC = lC)) : (t.tag === 19 && console.error("SuspenseList should never catch while hydrating. This is a bug in React."), !(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, r !== ly && gi($r(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.", { cause: r }), n))), !1;
			var a = $r(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.", { cause: r }), n);
			if (LC === null ? LC = [a] : LC.push(a), jC !== dC && (jC = lC), t === null) return !0;
			r = $r(r, n), n = t;
			do {
				switch (n.tag) {
					case 3: return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Fs(n.stateNode, r, e), ka(n, e), !1;
					case 1:
						if (t = n.type, a = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || a !== null && typeof a.componentDidCatch == "function" && (qC === null || !qC.has(a)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = Is(i), Ls(i, e, n, r), ka(n, i), !1;
						break;
					case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
				}
				n = n.return;
			} while (n !== null);
			return !1;
		}
		function zs(e, t, n, r) {
			t.child = e === null ? sx(t, null, n, r) : ox(t, e.child, n, r);
		}
		function Bs(e, t, n, r, i) {
			n = n.render;
			var a = zr(n);
			if (a !== n && (n = a, e !== null && (gS = !0)), a = t.ref, "ref" in r) {
				var o = {};
				for (var s in r) s !== "ref" && (o[s] = r[s]);
			} else o = r;
			return Ti(t), r = Xa(e, t, n, o, a, i), s = eo(), e !== null && !gS ? (to(e, t, i), mc(e, t, i)) : (G && s && ni(t), t.flags |= 1, zs(e, t, r, i), t.child);
		}
		function Vs(e, t, n, r, i) {
			if (e === null) {
				var a = n.type;
				return typeof a == "function" && !Wr(a) && a.defaultProps === void 0 && n.compare === null ? (n = zr(a), t.tag = 15, t.type = n, ec(t, a), Hs(e, t, n, r, i)) : (e = qr(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
			}
			if (a = e.child, !hc(e, i)) {
				var o = a.memoizedProps;
				if (n = n.compare, n = n === null ? tr : n, n(o, r) && e.ref === t.ref) return mc(e, t, i);
			}
			return t.flags |= 1, e = Gr(a, r), e.ref = t.ref, e.return = t, t.child = e;
		}
		function Hs(e, t, n, r, i) {
			if (e !== null) {
				var a = e.memoizedProps;
				if (tr(a, r) && e.ref === t.ref && t.type === e.type) {
					if (gS = !1, t.pendingProps = r = a, hc(e, i)) e.flags & 131072 && (gS = !0);
					else return t.lanes = e.lanes, mc(e, t, i);
				}
			}
			return Xs(e, t, n, r, i);
		}
		function Us(e, t, n, r) {
			var i = r.children, a = e === null ? null : e.memoizedState;
			if (e === null && t.stateNode === null && (t.stateNode = {
				_visibility: Pv,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null
			}), r.mode === "hidden") {
				if (t.flags & 128) {
					if (a = a === null ? n : a.baseLanes | n, e !== null) {
						for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
						r = i & ~a;
					} else r = 0, t.child = null;
					return Gs(e, t, a, n, r);
				}
				if (n & 536870912) t.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, e !== null && ra(t, a === null ? null : a.cachePool), a === null ? Ia(t) : Fa(t, a), Ba(t);
				else return r = t.lanes = 536870912, Gs(e, t, a === null ? n : a.baseLanes | n, n, r);
			} else a === null ? (e !== null && ra(t, null), Ia(t), Va(t)) : (ra(t, a.cachePool), Fa(t, a), Va(t), t.memoizedState = null);
			return zs(e, t, i, n), t.child;
		}
		function Ws(e, t) {
			return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
				_visibility: Pv,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null
			}), t.sibling;
		}
		function Gs(e, t, n, r, i) {
			var a = na();
			return a = a === null ? null : {
				parent: yy._currentValue,
				pool: a
			}, t.memoizedState = {
				baseLanes: n,
				cachePool: a
			}, e !== null && ra(t, null), Ia(t), Ba(t), e !== null && Ci(e, t, r, !0), t.childLanes = i, null;
		}
		function Ks(e, t) {
			var n = t.hidden;
			return n !== void 0 && console.error("<Activity> doesn't accept a hidden prop. Use mode=\"hidden\" instead.\n- <Activity %s>\n+ <Activity %s>", !0 === n ? "hidden" : !1 === n ? "hidden={false}" : "hidden={...}", n ? "mode=\"hidden\"" : "mode=\"visible\""), t = ac({
				mode: t.mode,
				children: t.children
			}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
		}
		function qs(e, t, n) {
			return ox(t, e.child, null, n), e = Ks(t, t.pendingProps), e.flags |= 2, Ha(t), t.memoizedState = null, e;
		}
		function Js(e, t, n) {
			var r = t.pendingProps, i = !!(t.flags & 128);
			if (t.flags &= -129, e === null) {
				if (G) {
					if (r.mode === "hidden") return e = Ks(t, r), t.lanes = 536870912, e.memoizedState = {
						baseLanes: 0,
						cachePool: null
					}, Ws(null, e);
					if (za(t), (e = iy) ? (n = np(e, cy), n = n !== null && n.data === iT ? n : null, n !== null && (r = {
						dehydrated: n,
						treeContext: ii(),
						retryLane: 536870912,
						hydrationErrors: null
					}, t.memoizedState = r, r = Zr(n), r.return = t, t.child = r, ry = t, iy = null)) : n = null, n === null) throw li(t, e), ui(t);
					return t.lanes = 536870912, null;
				}
				return Ks(t, r);
			}
			var a = e.memoizedState;
			if (a !== null) {
				var o = a.dehydrated;
				if (za(t), i) {
					if (t.flags & 256) t.flags &= -257, t = qs(e, t, n);
					else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
					else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");
				} else if (ci(), n & 536870912 && Su(t), gS || Ci(e, t, n, !1), i = (n & e.childLanes) !== 0, gS || i) {
					if (gx.current === null) {
						if (r = mC, r !== null && (o = ot(r, n), o !== 0 && o !== a.retryLane)) throw a.retryLane = o, Ir(e, o), A(r, e, o), hS;
						Cu();
					}
					t = qs(e, t, n);
				} else e = a.treeContext, iy = ap(o.nextSibling), ry = t, G = !0, sy = null, ay = !1, oy = null, cy = !1, e !== null && ai(t, e), t = Ks(t, r), t.flags |= 134221824;
				return t;
			}
			return a = e.child, r = {
				mode: r.mode,
				children: r.children
			}, n & 536870912 && (n & e.lanes) !== 0 && Su(t), e = Gr(a, r), e.ref = t.ref, t.child = e, e.return = t, e;
		}
		function Ys(e, t) {
			var n = t.ref;
			if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
			else {
				if (typeof n != "function" && typeof n != "object") throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");
				(e === null || e.ref !== n) && (t.flags |= 4194816);
			}
		}
		function Xs(e, t, n, r, i) {
			if (n.prototype && typeof n.prototype.render == "function") {
				var a = ve(n) || "Unknown";
				_S[a] || (console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", a, a), _S[a] = !0);
			}
			return t.mode & Uv && hb.recordLegacyContextWarning(t, null), e === null && (ec(t, t.type), n.contextTypes && (a = ve(n) || "Unknown", yS[a] || (yS[a] = !0, console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)", a)))), Ti(t), n = Xa(e, t, n, r, void 0, i), r = eo(), e !== null && !gS ? (to(e, t, i), mc(e, t, i)) : (G && r && ni(t), t.flags |= 1, zs(e, t, n, i), t.child);
		}
		function Zs(e, t, n, r, i, a) {
			return Ti(t), Gx = -1, Kx = e !== null && e.type !== t.type, t.updateQueue = null, n = Qa(t, r, n, i), Za(e, t), r = eo(), e !== null && !gS ? (to(e, t, a), mc(e, t, a)) : (G && r && ni(t), t.flags |= 1, zs(e, t, n, a), t.child);
		}
		function Qs(e, t, n, r, i) {
			switch (d(t)) {
				case !1:
					var a = t.stateNode, o = new t.type(t.memoizedProps, a.context).state;
					a.updater.enqueueSetState(a, o, null);
					break;
				case !0:
					t.flags |= 128, t.flags |= 65536, a = Error("Simulated error coming from DevTools");
					var s = i & -i;
					if (t.lanes |= s, o = mC, o === null) throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
					s = Is(s), Ls(s, o, t, $r(a, t)), ka(t, s);
			}
			if (Ti(t), t.stateNode === null) {
				if (o = zv, a = n.contextType, "contextType" in n && a !== null && (a === void 0 || a.$$typeof !== Pm) && !uS.has(n) && (uS.add(n), s = a === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof a == "object" ? a.$$typeof === Nm ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(a).join(", ") + "}." : " However, it is set to a " + typeof a + ".", console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ve(n) || "Component", s)), typeof a == "object" && a && (o = Ei(a)), a = new n(r, o), t.mode & Uv) {
					qe(!0);
					try {
						a = new n(r, o);
					} finally {
						qe(!1);
					}
				}
				if (o = t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = fS, t.stateNode = a, a._reactInternals = t, a._reactInternalInstance = tS, typeof n.getDerivedStateFromProps == "function" && o === null && (o = ve(n) || "Component", rS.has(o) || (rS.add(o), console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", o, a.state === null ? "null" : "undefined", o))), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function") {
					var c = s = o = null;
					if (typeof a.componentWillMount == "function" && !0 !== a.componentWillMount.__suppressDeprecationWarning ? o = "componentWillMount" : typeof a.UNSAFE_componentWillMount == "function" && (o = "UNSAFE_componentWillMount"), typeof a.componentWillReceiveProps == "function" && !0 !== a.componentWillReceiveProps.__suppressDeprecationWarning ? s = "componentWillReceiveProps" : typeof a.UNSAFE_componentWillReceiveProps == "function" && (s = "UNSAFE_componentWillReceiveProps"), typeof a.componentWillUpdate == "function" && !0 !== a.componentWillUpdate.__suppressDeprecationWarning ? c = "componentWillUpdate" : typeof a.UNSAFE_componentWillUpdate == "function" && (c = "UNSAFE_componentWillUpdate"), o !== null || s !== null || c !== null) {
						a = ve(n) || "Component";
						var l = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
						aS.has(a) || (aS.add(a), console.error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://react.dev/link/unsafe-component-lifecycles", a, l, o === null ? "" : "\n  " + o, s === null ? "" : "\n  " + s, c === null ? "" : "\n  " + c));
					}
				}
				a = t.stateNode, o = ve(n) || "Component", a.render || (n.prototype && typeof n.prototype.render == "function" ? console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?", o) : console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.", o)), !a.getInitialState || a.getInitialState.isReactClassApproved || a.state || console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), a.contextType && console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), n.childContextTypes && !lS.has(n) && (lS.add(n), console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)", o)), n.contextTypes && !cS.has(n) && (cS.add(n), console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)", o)), typeof a.componentShouldUpdate == "function" && console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), n.prototype && n.prototype.isPureReactComponent && a.shouldComponentUpdate !== void 0 && console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ve(n) || "A pure component"), typeof a.componentDidUnmount == "function" && console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof a.componentDidReceiveProps == "function" && console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof a.componentWillRecieveProps == "function" && console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof a.UNSAFE_componentWillRecieveProps == "function" && console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o), s = a.props !== r, a.props !== void 0 && s && console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o), a.defaultProps && console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof a.getSnapshotBeforeUpdate != "function" || typeof a.componentDidUpdate == "function" || iS.has(n) || (iS.add(n), console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ve(n))), typeof a.getDerivedStateFromProps == "function" && console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof a.getDerivedStateFromError == "function" && console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof n.getSnapshotBeforeUpdate == "function" && console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o), (s = a.state) && (typeof s != "object" || qm(s)) && console.error("%s.state: must be set to an object or null", o), typeof a.getChildContext == "function" && typeof n.childContextTypes != "object" && console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o), a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, wa(t), o = n.contextType, a.context = typeof o == "object" && o ? Ei(o) : zv, a.state === r && (o = ve(n) || "Component", oS.has(o) || (oS.add(o), console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", o))), t.mode & Uv && hb.recordLegacyContextWarning(t, a), hb.recordUnsafeLifecycleWarnings(t, a), a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Es(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && (console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", S(t) || "Component"), fS.enqueueReplaceState(a, a.state, null)), ja(t, r, a, i), Aa(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Wv) !== U && (t.flags |= 268435456), a = !0;
			} else if (e === null) {
				a = t.stateNode;
				var u = t.memoizedProps;
				s = ks(n, u), a.props = s;
				var f = a.context;
				c = n.contextType, o = zv, typeof c == "object" && c && (o = Ei(c)), l = n.getDerivedStateFromProps, c = typeof l == "function" || typeof a.getSnapshotBeforeUpdate == "function", u = t.pendingProps !== u, c || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (u || f !== o) && Os(t, a, r, o), fx = !1;
				var p = t.memoizedState;
				a.state = p, ja(t, r, a, i), Aa(), f = t.memoizedState, u || p !== f || fx ? (typeof l == "function" && (Es(t, n, l, r), f = t.memoizedState), (s = fx || Ds(t, n, s, r, p, f, o)) ? (c || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Wv) !== U && (t.flags |= 268435456)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Wv) !== U && (t.flags |= 268435456), t.memoizedProps = r, t.memoizedState = f), a.props = r, a.state = f, a.context = o, a = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Wv) !== U && (t.flags |= 268435456), a = !1);
			} else {
				a = t.stateNode, Ta(e, t), o = t.memoizedProps, c = ks(n, o), a.props = c, l = t.pendingProps, p = a.context, f = n.contextType, s = zv, typeof f == "object" && f && (s = Ei(f)), u = n.getDerivedStateFromProps, (f = typeof u == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== l || p !== s) && Os(t, a, r, s), fx = !1, p = t.memoizedState, a.state = p, ja(t, r, a, i), Aa();
				var m = t.memoizedState;
				o !== l || p !== m || fx || e !== null && e.dependencies !== null && wi(e.dependencies) ? (typeof u == "function" && (Es(t, n, u, r), m = t.memoizedState), (c = fx || Ds(t, n, c, r, p, m, s) || e !== null && e.dependencies !== null && wi(e.dependencies)) ? (f || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, m, s), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, m, s)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = m), a.props = r, a.state = m, a.context = s, a = c) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), a = !1);
			}
			if (s = a, Ys(e, t), o = !!(t.flags & 128), s || o) {
				if (s = t.stateNode, ze(t), o && typeof n.getDerivedStateFromError != "function") n = null, ky = -1;
				else if (n = kb(s), t.mode & Uv) {
					qe(!0);
					try {
						kb(s);
					} finally {
						qe(!1);
					}
				}
				t.flags |= 1, e !== null && o ? (t.child = ox(t, e.child, null, i), t.child = ox(t, null, n, i)) : zs(e, t, n, i), t.memoizedState = s.state, e = t.child;
			} else e = mc(e, t, i);
			return i = t.stateNode, a && i.props !== r && (xS || console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", S(t) || "a component"), xS = !0), e;
		}
		function $s(e, t, n, r) {
			return mi(), t.flags |= 256, zs(e, t, n, r), t.child;
		}
		function ec(e, t) {
			t && t.childContextTypes && console.error("childContextTypes cannot be defined on a function component.\n  %s.childContextTypes = ...", t.displayName || t.name || "Component"), typeof t.getDerivedStateFromProps == "function" && (e = ve(t) || "Unknown", bS[e] || (console.error("%s: Function components do not support getDerivedStateFromProps.", e), bS[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = ve(t) || "Unknown", vS[t] || (console.error("%s: Function components do not support contextType.", t), vS[t] = !0));
		}
		function tc(e) {
			return {
				baseLanes: e,
				cachePool: ia()
			};
		}
		function nc(e, t, n) {
			return e = e === null ? 0 : e.childLanes & ~n, t && (e |= FC), e;
		}
		function rc(e, t, n) {
			var r = t.pendingProps;
			l(t) && (t.flags |= 128);
			var i = !1, a = !!(t.flags & 128), o;
			if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : (Sx.current & xx) !== 0), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
				if (G) {
					if (i ? Ra(t) : Va(t), (e = iy) ? (n = np(e, cy), n = n !== null && n.data !== iT ? n : null, n !== null && (o = {
						dehydrated: n,
						treeContext: ii(),
						retryLane: 536870912,
						hydrationErrors: null
					}, t.memoizedState = o, o = Zr(n), o.return = t, t.child = o, ry = t, iy = null)) : n = null, n === null) throw li(t, e), ui(t);
					return t.lanes = R(n) ? 32 : 536870912, null;
				}
				return a = r.children, r = r.fallback, i ? (Va(t), i = t.mode, a = ac({
					mode: "hidden",
					children: a
				}, i), r = Yr(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = tc(n), r.childLanes = nc(e, o, n), t.memoizedState = TS, Ws(null, r)) : (Ra(t), ic(t, a));
			}
			var s = e.memoizedState;
			if (s !== null) {
				var c = s.dehydrated;
				if (c !== null) return sc(e, t, a, o, r, c, s, n);
			}
			return i ? (Va(t), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Gr(s, {
				mode: "hidden",
				children: r.children
			}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Yr(i, a, n, null), i.flags |= 2) : i = Gr(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Ws(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = tc(n) : (a = i.cachePool, a === null ? a = ia() : (s = yy._currentValue, a = a.parent === s ? a : {
				parent: s,
				pool: s
			}), i = {
				baseLanes: i.baseLanes | n,
				cachePool: a
			}), r.memoizedState = i, r.childLanes = nc(e, o, n), t.memoizedState = TS, Ws(e.child, r)) : (s !== null && (n & 62914560) === n && (n & e.lanes) !== 0 && Su(t), Ra(t), n = e.child, e = n.sibling, n = Gr(n, {
				mode: "visible",
				children: r.children
			}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
		}
		function ic(e, t) {
			return t = ac({
				mode: "visible",
				children: t
			}, e.mode), t.return = e, e.child = t;
		}
		function ac(e, t) {
			return e = _(22, e, null, t), e.lanes = 0, e;
		}
		function oc(e, t, n) {
			return ox(t, e.child, null, n), e = ic(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
		}
		function sc(e, t, n, r, i, a, o, s) {
			if (n) {
				if (t.flags & 256) return Ra(t), t.flags &= -257, oc(e, t, s);
				if (t.memoizedState !== null) return Va(t), t.child = e.child, t.flags |= 128, null;
				Va(t);
				var c = i.fallback, l = t.mode, u = ac({
					mode: "visible",
					children: i.children
				}, l);
				return c = Yr(c, l, s, null), c.flags |= 2, u.return = t, c.return = t, u.sibling = c, t.child = u, ox(t, e.child, null, s), c = t.child, c.memoizedState = tc(s), c.childLanes = nc(e, r, s), t.memoizedState = TS, Ws(null, c);
			}
			if (Ra(t), ci(), s & 536870912 && Su(t), R(a)) {
				if (r = a.nextSibling && a.nextSibling.dataset, r) {
					c = r.dgst;
					var d = r.msg;
					l = r.stck, u = r.cstck;
				}
				return a = d, o = c, i = l, r = u, c = o, l = a, u = i, i = r, c !== Tb && (r = Error(l || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), r.stack = u || "", r.digest = c, c = i === void 0 ? null : i, l = {
					value: r,
					source: null,
					stack: c
				}, typeof c == "string" && qv.set(r, l), gi(l)), oc(e, t, s);
			}
			if (gS || Ci(e, t, s, !1), r = (s & e.childLanes) !== 0, gS || r) {
				if (gx.current !== null) return oc(e, t, s);
				if (r = mC, r !== null && (c = ot(r, s), c !== 0 && c !== o.retryLane)) throw o.retryLane = c, Ir(e, c), A(r, e, c), hS;
				return rp(a) || Cu(), oc(e, t, s);
			}
			return rp(a) ? (t.flags |= 192, t.child = e.child, null) : (e = o.treeContext, iy = ap(a.nextSibling), ry = t, G = !0, sy = null, ay = !1, oy = null, cy = !1, e !== null && ai(t, e), t = ic(t, i.children), t.flags |= 134221824, t);
		}
		function cc(e, t, n) {
			e.lanes |= t;
			var r = e.alternate;
			r !== null && (r.lanes |= t), xi(e.return, t, n);
		}
		function lc(e) {
			for (var t = null; e !== null;) {
				var n = e.alternate;
				n !== null && Ga(n) === null && (t = e), e = e.sibling;
			}
			return t;
		}
		function uc(e, t, n, r, i, a) {
			var o = e.memoizedState;
			o === null ? e.memoizedState = {
				isBackwards: t,
				rendering: null,
				renderingStartTime: 0,
				last: r,
				tail: n,
				tailMode: i,
				treeForkCount: a
			} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
		}
		function dc(e) {
			var t = e.child;
			for (e.child = null; t !== null;) {
				var n = t.sibling;
				t.sibling = e.child, e.child = t, t = n;
			}
		}
		function fc(e, t, n) {
			var r = t.pendingProps, i = r.revealOrder, a = r.tail, o = r.children, s = Sx.current;
			if (t.flags & 128) return Ua(t, s), null;
			if ((r = (s & xx) !== 0) ? (s = s & bx | xx, t.flags |= 128) : s &= bx, Ua(t, s), s = i ?? "null", i != null && i !== "forwards" && i !== "backwards" && i !== "unstable_legacy-backwards" && i !== "together" && i !== "independent" && !SS[s]) {
				if (SS[s] = !0, typeof i == "string") switch (i.toLowerCase()) {
					case "together":
					case "forwards":
					case "backwards":
					case "independent":
						console.error("\"%s\" is not a valid value for revealOrder on <SuspenseList />. Use lowercase \"%s\" instead.", i, i.toLowerCase());
						break;
					case "forward":
					case "backward":
						console.error("\"%s\" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use \"%ss\" instead.", i, i.toLowerCase());
						break;
					default: console.error("\"%s\" is not a supported revealOrder on <SuspenseList />. Did you mean \"independent\", \"together\", \"forwards\" or \"backwards\"?", i);
				}
				else console.error("%s is not a supported value for revealOrder on <SuspenseList />. Did you mean \"independent\", \"together\", \"forwards\" or \"backwards\"?", i);
			}
			s = a ?? "null", CS[s] || a == null || (a !== "visible" && a !== "collapsed" && a !== "hidden" ? (CS[s] = !0, console.error("\"%s\" is not a supported value for tail on <SuspenseList />. Did you mean \"visible\", \"collapsed\" or \"hidden\"?", a)) : i != null && i !== "forwards" && i !== "backwards" && i !== "unstable_legacy-backwards" && (CS[s] = !0, console.error("<SuspenseList tail=\"%s\" /> is only valid if revealOrder is \"forwards\" (default) or \"backwards\". Did you mean to specify revealOrder=\"forwards\"?", a)));
			a: if ((i == null || i === "forwards" || i === "backwards" || i === "unstable_legacy-backwards") && o != null && !1 !== o) {
				if (qm(o)) {
					for (s = 0; s < o.length; s++) if (!Ca(o[s], s)) break a;
				} else if (s = _e(o), typeof s == "function") {
					if (s = s.call(o)) for (var c = s.next(), l = 0; !c.done; c = s.next()) {
						if (!Ca(c.value, l)) break a;
						l++;
					}
				} else console.error("A single row was passed to a <SuspenseList revealOrder=\"%s\" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?", i);
			}
			if (i === "backwards" && e !== null ? (dc(e), zs(e, t, o, n), dc(e)) : zs(e, t, o, n), G ? (oi(), o = Zv) : o = 0, !r && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
				if (e.tag === 13) e.memoizedState !== null && cc(e, n, t);
				else if (e.tag === 19) cc(e, n, t);
				else if (e.child !== null) {
					e.child.return = e, e = e.child;
					continue;
				}
				if (e === t) break a;
				for (; e.sibling === null;) {
					if (e.return === null || e.return === t) break a;
					e = e.return;
				}
				e.sibling.return = e.return, e = e.sibling;
			}
			switch (i) {
				case "backwards":
					n = lc(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, dc(t)), uc(t, !0, i, null, a, o);
					break;
				case "unstable_legacy-backwards":
					for (n = null, i = t.child, t.child = null; i !== null;) {
						if (e = i.alternate, e !== null && Ga(e) === null) {
							t.child = i;
							break;
						}
						e = i.sibling, i.sibling = n, n = i, i = e;
					}
					uc(t, !0, n, null, a, o);
					break;
				case "together":
					uc(t, !1, null, null, void 0, o);
					break;
				case "independent":
					t.memoizedState = null;
					break;
				default: n = lc(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), uc(t, !1, i, n, a, o);
			}
			return t.child;
		}
		function pc(e, t, n) {
			var r = t.type, i = t.pendingProps, a = i.value;
			return "value" in i || ES || (ES = !0, console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")), yi(t, r, a), zs(e, t, i.children, n), t.child;
		}
		function mc(e, t, n) {
			if (e !== null && (t.dependencies = e.dependencies), ky = -1, MC |= t.lanes, (n & t.childLanes) === 0) {
				if (e !== null) {
					if (Ci(e, t, n, !1), (n & t.childLanes) === 0) return null;
				} else return null;
			}
			if (e !== null && t.child !== e.child) throw Error("Resuming work not yet implemented.");
			if (t.child !== null) {
				for (e = t.child, n = Gr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Gr(e, e.pendingProps), n.return = t;
				n.sibling = null;
			}
			return t.child;
		}
		function hc(e, t) {
			return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && wi(e)));
		}
		function gc(e, t, n) {
			switch (t.tag) {
				case 3:
					we(t, t.stateNode.containerInfo), yi(t, yy, e.memoizedState.cache), mi();
					break;
				case 27:
				case 5:
					De(t);
					break;
				case 4:
					we(t, t.stateNode.containerInfo);
					break;
				case 10:
					yi(t, t.type, t.memoizedProps.value);
					break;
				case 12:
					(n & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
					var r = t.stateNode;
					r.effectDuration = -0, r.passiveEffectDuration = -0;
					break;
				case 31:
					if (t.memoizedState !== null) return t.flags |= 128, za(t), null;
					break;
				case 13:
					if (r = t.memoizedState, r !== null) {
						if (r.dehydrated !== null) return Ra(t), t.flags |= 128, null;
						r = Ci(e, t, n, !1);
						var i = t.child.childLanes;
						return r || (n & i) !== 0 ? rc(e, t, n) : (Ra(t), e = mc(e, t, n), e === null ? null : e.sibling);
					}
					Ra(t);
					break;
				case 19:
					if (t.flags & 128) return fc(e, t, n);
					if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (Ci(e, t, n, !1), (n & t.childLanes) !== 0), i) {
						if (r) return fc(e, t, n);
						t.flags |= 128;
					}
					if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Ua(t, Sx.current), r) break;
					return null;
				case 22: return t.lanes = 0, Us(e, t, n, t.pendingProps);
				case 24: yi(t, yy, e.memoizedState.cache);
			}
			return mc(e, t, n);
		}
		function _c(e, t, n) {
			if (t._debugNeedsRemount && e !== null) {
				n = qr(zr(t.elementType), t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes), n._debugStack = t._debugStack, n._debugTask = t._debugTask;
				var r = t.return;
				if (r === null) throw Error("Cannot swap the root fiber.");
				if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, n._debugInfo = t._debugInfo, t === r.child) r.child = n;
				else {
					var i = r.child;
					if (i === null) throw Error("Expected parent to have a child.");
					for (; i.sibling !== t;) if (i = i.sibling, i === null) throw Error("Expected to find the previous sibling.");
					i.sibling = n;
				}
				return t = r.deletions, t === null ? (r.deletions = [e], r.flags |= 16) : t.push(e), n.flags |= 134217730, n;
			}
			if (e !== null) {
				if (e.memoizedProps !== t.pendingProps || t.type !== e.type) gS = !0;
				else {
					if (!hc(e, n) && !(t.flags & 128)) return gS = !1, gc(e, t, n);
					gS = !!(e.flags & 131072);
				}
			} else gS = !1, (r = G) && (oi(), r = !!(t.flags & 1048576)), r && (r = t.index, oi(), ti(t, Zv, r));
			switch (t.lanes = 0, t.tag) {
				case 16:
					a: if (r = t.pendingProps, e = ca(t.elementType), e = zr(e), t.type = e, typeof e == "function") Wr(e) ? (r = ks(e, r), t.tag = 1, t = Qs(null, t, e, r, n)) : (t.tag = 0, ec(t, e), t = Xs(null, t, e, r, n));
					else {
						if (e != null) {
							if (i = e.$$typeof, i === Fm) {
								t.tag = 11, t = Bs(null, t, e, r, n);
								break a;
							}
							if (i === Rm) {
								t.tag = 14, t = Vs(null, t, e, r, n);
								break a;
							}
							if (i === Pm) {
								t.tag = 10, t.type = e, t = pc(null, t, n);
								break a;
							}
						}
						throw t = "", typeof e == "object" && e && e.$$typeof === zm && (t = " Did you wrap a component in React.lazy() more than once?"), n = ve(e) || e, Error("Element type is invalid. Received a promise that resolves to: " + n + ". Lazy element type must resolve to a class or function." + t);
					}
					return t;
				case 0: return Xs(e, t, t.type, t.pendingProps, n);
				case 1: return r = t.type, i = ks(r, t.pendingProps), Qs(e, t, r, i, n);
				case 3:
					a: {
						if (we(t, t.stateNode.containerInfo), e === null) throw Error("Should have a current fiber. This is a bug in React.");
						r = t.pendingProps;
						var a = t.memoizedState;
						i = a.element, Ta(e, t), ja(t, r, null, n);
						var o = t.memoizedState;
						if (r = o.cache, yi(t, yy, r), r !== a.cache && Si(t, [yy], n, !0), Aa(), r = o.element, a.isDehydrated) {
							if (a = {
								element: r,
								isDehydrated: !1,
								cache: o.cache
							}, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
								t = $s(e, t, r, n);
								break a;
							}
							if (r !== i) {
								i = $r(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t), gi(i), t = $s(e, t, r, n);
								break a;
							}
							switch (e = t.stateNode.containerInfo, e.nodeType) {
								case 9:
									e = e.body;
									break;
								default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
							}
							for (iy = ap(e.firstChild), ry = t, G = !0, sy = null, ay = !1, oy = null, cy = !0, n = sx(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
						} else {
							if (mi(), r === i) {
								t = mc(e, t, n);
								break a;
							}
							zs(e, t, r, n);
						}
						t = t.child;
					}
					return t;
				case 26: return Ys(e, t), e === null ? (n = xp(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : G || (t.stateNode = Zd(t.type, t.pendingProps, Ce(th.current), t)) : t.memoizedState = xp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
				case 27: return De(t), e === null && G && (r = Ce(th.current), i = Ee(), r = t.stateNode = hp(t.type, t.pendingProps, r, i, !1), ay || (i = Wd(r, t.type, t.pendingProps, i), i !== null && (si(t, 0).serverProps = i)), ry = t, cy = !0, i = iy, df(t.type) ? (IT = i, iy = ap(r.firstChild)) : iy = i), zs(e, t, t.pendingProps.children, n), Ys(e, t), e === null && (t.flags |= 4194304), t.child;
				case 5: return e === null && G && (a = Ee(), r = pn(t.type, a.ancestorInfo), i = iy, (o = !i) || (o = ep(i, t.type, t.pendingProps, cy), o === null ? a = !1 : (t.stateNode = o, ay || (a = Wd(o, t.type, t.pendingProps, a), a !== null && (si(t, 0).serverProps = a)), ry = t, iy = ap(o.firstChild), cy = !1, a = !0), o = !a), o && (r && li(t, i), ui(t))), De(t), i = t.type, a = t.pendingProps, o = e === null ? null : e.memoizedProps, r = a.children, $d(i, a) ? r = null : o !== null && $d(i, o) && (t.flags |= 32), t.memoizedState !== null && (i = Xa(e, t, $a, null, null, n), eE._currentValue = i), Ys(e, t), zs(e, t, r, n), t.child;
				case 6: return e === null && G && (n = t.pendingProps, e = Ee(), r = e.ancestorInfo.current, n = r == null || mn(n, r.tag, e.ancestorInfo.implicitRootScope), e = iy, (r = !e) || (r = tp(e, t.pendingProps, cy), r === null ? r = !1 : (t.stateNode = r, ry = t, iy = null, r = !0), r = !r), r && (n && li(t, e), ui(t))), null;
				case 13: return rc(e, t, n);
				case 4: return we(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ox(t, null, r, n) : zs(e, t, r, n), t.child;
				case 11: return Bs(e, t, t.type, t.pendingProps, n);
				case 7: return r = t.pendingProps, Ys(e, t), zs(e, t, r, n), t.child;
				case 8: return zs(e, t, t.pendingProps.children, n), t.child;
				case 12: return t.flags |= 4, t.flags |= 2048, r = t.stateNode, r.effectDuration = -0, r.passiveEffectDuration = -0, zs(e, t, t.pendingProps.children, n), t.child;
				case 10: return pc(e, t, n);
				case 9: return i = t.type._context, r = t.pendingProps.children, typeof r != "function" && console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Ti(t), i = Ei(i), r = Db(r, i, void 0), t.flags |= 1, zs(e, t, r, n), t.child;
				case 14: return Vs(e, t, t.type, t.pendingProps, n);
				case 15: return Hs(e, t, t.type, t.pendingProps, n);
				case 19: return fc(e, t, n);
				case 31: return Js(e, t, n);
				case 22: return Us(e, t, n, t.pendingProps);
				case 24: return Ti(t), r = Ei(yy), e === null ? (i = na(), i === null && (i = mC, a = ki(), i.pooledCache = a, Ai(a), a !== null && (i.pooledCacheLanes |= n), i = a), t.memoizedState = {
					parent: r,
					cache: i
				}, wa(t), yi(t, yy, i)) : ((e.lanes & n) !== 0 && (Ta(e, t), ja(t, null, null, n), Aa()), i = e.memoizedState, a = t.memoizedState, i.parent === r ? (r = a.cache, yi(t, yy, r), r !== i.cache && Si(t, [yy], n, !0)) : (i = {
					parent: r,
					cache: r
				}, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), yi(t, yy, r))), zs(e, t, t.pendingProps.children, n), t.child;
				case 30: return t.stateNode === null && (t.stateNode = {
					autoName: null,
					paired: null,
					clones: null,
					ref: null
				}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : G && ni(t), r.className !== void 0 && (i = typeof r.className == "string" ? JSON.stringify(r.className) : "{...}", wS[i] || (wS[i] = !0, console.error("<ViewTransition> doesn't accept a \"className\" prop. It has been renamed to \"default\".\n-   <ViewTransition className=%s>\n+   <ViewTransition default=%s>", i, i))), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Ys(e, t), zs(e, t, r.children, n), t.child;
				case 29: throw t.pendingProps;
			}
			throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
		}
		function vc(e) {
			e.flags |= 4;
		}
		function yc(e, t, n, r, i) {
			var a;
			if ((a = (e.mode & Gv) !== U) && (a = n === null ? Ip(t, r) : Ip(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
				if (e.flags |= 16777216, (i & 335544128) === i) {
					if (e.stateNode.complete) e.flags |= 8192;
					else if (yu()) e.flags |= 8192;
					else throw Zb = qb, Gb;
				}
			} else e.flags &= -16777217;
		}
		function bc(e, t) {
			if (t.type !== "stylesheet" || (t.state.loading & VT) !== LT) e.flags &= -16777217;
			else if (e.flags |= 16777216, !Lp(t)) {
				if (yu()) e.flags |= 8192;
				else throw Zb = qb, Gb;
			}
		}
		function xc(e, t) {
			t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : et(), e.lanes |= t, IC |= t);
		}
		function Sc(e, t) {
			if (!G) switch (e.tailMode) {
				case "visible": break;
				case "collapsed":
					for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
					r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
					break;
				default:
					for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
					n === null ? e.tail = null : n.sibling = null;
			}
		}
		function Cc(e) {
			var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
			if (t) {
				if ((e.mode & W) !== U) {
					for (var i = e.selfBaseDuration, a = e.child; a !== null;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 1206910976, r |= a.flags & 1206910976, i += a.treeBaseDuration, a = a.sibling;
					e.treeBaseDuration = i;
				} else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
			} else if ((e.mode & W) !== U) {
				i = e.actualDuration, a = e.selfBaseDuration;
				for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, i += o.actualDuration, a += o.treeBaseDuration, o = o.sibling;
				e.actualDuration = i, e.treeBaseDuration = a;
			} else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
			return e.subtreeFlags |= r, e.childLanes = n, t;
		}
		function wc(e, t, n) {
			var r = t.pendingProps;
			switch (ri(t), t.tag) {
				case 16:
				case 15:
				case 0:
				case 11:
				case 7:
				case 8:
				case 12:
				case 9:
				case 14: return Cc(t), null;
				case 1: return Cc(t), null;
				case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), bi(yy, t), Te(t), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (pi(t) ? (_i(), vc(t)) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, hi())), Cc(t), null;
				case 26:
					var i = t.type, a = t.memoizedState;
					return e === null ? (vc(t), a === null ? (Cc(t), yc(t, i, null, r, n)) : (Cc(t), bc(t, a))) : a ? a === e.memoizedState ? (Cc(t), t.flags &= -16777217) : (vc(t), Cc(t), bc(t, a)) : (e = e.memoizedProps, e !== r && vc(t), Cc(t), yc(t, i, e, r, n)), null;
				case 27:
					if (Oe(t), n = Ce(th.current), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && vc(t);
					else {
						if (!r) {
							if (t.stateNode === null) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
							return Cc(t), t.subtreeFlags &= -33554433, null;
						}
						e = Ee(), pi(t) ? di(t, e) : (e = hp(i, r, n, e, !0), t.stateNode = e, vc(t));
					}
					return Cc(t), t.subtreeFlags &= -33554433, null;
				case 5:
					if (Oe(t), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && vc(t);
					else {
						if (!r) {
							if (t.stateNode === null) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
							return Cc(t), t.subtreeFlags &= -33554433, null;
						}
						var o = Ee();
						if (pi(t)) di(t, o);
						else {
							switch (a = Ce(th.current), pn(i, o.ancestorInfo), o = o.context, a = Jd(a), o) {
								case yT:
									a = a.createElementNS(Rg, i);
									break;
								case bT:
									a = a.createElementNS(Lg, i);
									break;
								default: switch (i) {
									case "svg":
										a = a.createElementNS(Rg, i);
										break;
									case "math":
										a = a.createElementNS(Lg, i);
										break;
									case "script":
										a = a.createElement("div"), CT || Qd(r) || (console.error("Encountered a script tag while rendering React component. Scripts inside React components are never executed when rendering on the client. Consider using template tag instead (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)."), CT = !0), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild);
										break;
									case "select":
										a = typeof r.is == "string" ? a.createElement("select", { is: r.is }) : a.createElement("select"), r.multiple ? a.multiple = !0 : r.size && (a.size = r.size);
										break;
									default: a = typeof r.is == "string" ? a.createElement(i, { is: r.is }) : a.createElement(i), i.indexOf("-") === -1 && (i !== i.toLowerCase() && console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", i), Object.prototype.toString.call(a) !== "[object HTMLUnknownElement]" || _h.call(wT, i) || (wT[i] = !0, console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", i)));
								}
							}
							a[Kh] = t, a[qh] = r;
							a: for (o = t.child; o !== null;) {
								if (o.tag === 5 || o.tag === 6) a.appendChild(o.stateNode);
								else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
									o.child.return = o, o = o.child;
									continue;
								}
								if (o === t) break a;
								for (; o.sibling === null;) {
									if (o.return === null || o.return === t) break a;
									o = o.return;
								}
								o.sibling.return = o.return, o = o.sibling;
							}
							t.stateNode = a;
							a: switch (L(a, i, r), i) {
								case "button":
								case "input":
								case "select":
								case "textarea":
									r = !!r.autoFocus;
									break a;
								case "img":
									r = !0;
									break a;
								default: r = !1;
							}
							r && vc(t);
						}
					}
					return Cc(t), t.subtreeFlags &= -33554433, yc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
				case 6:
					if (e && t.stateNode != null) e.memoizedProps !== r && vc(t);
					else {
						if (typeof r != "string" && t.stateNode === null) throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
						if (e = Ce(th.current), n = Ee(), pi(t)) {
							if (e = t.stateNode, n = t.memoizedProps, i = !ay, r = null, a = ry, a !== null) switch (a.tag) {
								case 3:
									i && (i = sp(e, n, r), i !== null && (si(t, 0).serverProps = i));
									break;
								case 27:
								case 5: r = a.memoizedProps, i && (i = sp(e, n, r), i !== null && (si(t, 0).serverProps = i));
							}
							e[Kh] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Nd(e.nodeValue, n)), e || ui(t, !0);
						} else i = n.ancestorInfo.current, i != null && mn(r, i.tag, n.ancestorInfo.implicitRootScope), e = Jd(e).createTextNode(r), e[Kh] = t, t.stateNode = e;
					}
					return Cc(t), null;
				case 31:
					if (n = t.memoizedState, e === null || e.memoizedState !== null) {
						if (r = pi(t), n !== null) {
							if (e === null) {
								if (!r) throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
								if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");
								e[Kh] = t, Cc(t), (t.mode & W) !== U && n !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
							} else _i(), mi(), !(t.flags & 128) && (n = t.memoizedState = null), t.flags |= 4, Cc(t), (t.mode & W) !== U && n !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
							e = !1;
						} else n = hi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
						if (!e) return t.flags & 256 ? (Ha(t), t) : (Ha(t), null);
						if (t.flags & 128) throw Error("Client rendering an Activity suspended it again. This is a bug in React.");
					}
					return Cc(t), null;
				case 13:
					if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
						if (i = r, a = pi(t), i !== null && i.dehydrated !== null) {
							if (e === null) {
								if (!a) throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
								if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
								a[Kh] = t, Cc(t), (t.mode & W) !== U && i !== null && (i = t.child, i !== null && (t.treeBaseDuration -= i.treeBaseDuration));
							} else _i(), mi(), !(t.flags & 128) && (i = t.memoizedState = null), t.flags |= 4, Cc(t), (t.mode & W) !== U && i !== null && (i = t.child, i !== null && (t.treeBaseDuration -= i.treeBaseDuration));
							i = !1;
						} else i = hi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
						if (!i) return t.flags & 256 ? (Ha(t), t) : (Ha(t), null);
					}
					return Ha(t), t.flags & 128 ? (t.lanes = n, (t.mode & W) !== U && Qi(t), t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, i = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (i = r.alternate.memoizedState.cachePool.pool), a = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (a = r.memoizedState.cachePool.pool), a !== i && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), xc(t, t.updateQueue), Cc(t), (t.mode & W) !== U && n && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
				case 4: return Te(t), e === null && vd(t.stateNode.containerInfo), t.flags |= 67108864, Cc(t), null;
				case 10: return bi(t.type, t), Cc(t), null;
				case 19:
					if (Wa(t), r = t.memoizedState, r === null) return Cc(t), null;
					if (i = !!(t.flags & 128), a = r.rendering, a === null) {
						if (i) Sc(r, !1);
						else {
							if (jC !== sC || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
								if (a = Ga(e), a !== null) {
									for (t.flags |= 128, Sc(r, !1), e = a.updateQueue, t.updateQueue = e, xc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Kr(n, e), n = n.sibling;
									return Ua(t, Sx.current & bx | xx), G && ei(t, r.treeForkCount), t.child;
								}
								e = e.sibling;
							}
							r.tail !== null && Sh() > UC && (t.flags |= 128, i = !0, Sc(r, !1), t.lanes = 4194304);
						}
					} else {
						if (!i) {
							if (e = Ga(a), e !== null) {
								if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, xc(t, e), Sc(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !a.alternate && !G) return Cc(t), null;
							} else 2 * Sh() - r.renderingStartTime > UC && n !== 536870912 && (t.flags |= 128, i = !0, Sc(r, !1), t.lanes = 4194304);
						}
						r.isBackwards ? (a.sibling = t.child, t.child = a) : (e = r.last, e === null ? t.child = a : e.sibling = a, r.last = a);
					}
					if (r.tail !== null) {
						e = r.tail;
						a: {
							for (n = e; n !== null;) {
								if (n.alternate !== null) {
									n = !1;
									break a;
								}
								n = n.sibling;
							}
							n = !0;
						}
						return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Sh(), e.sibling = null, a = Sx.current, a = i ? a & bx | xx : a & bx, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || G ? Ua(t, a) : (n = a, Se(vx, t, t), Se(Sx, n, t), yx === null && (yx = t)), G && ei(t, r.treeForkCount), e;
					}
					return Cc(t), null;
				case 22:
				case 23: return Ha(t), La(t), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (Cc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Cc(t), n = t.updateQueue, n !== null && xc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && xe(mb, t), null;
				case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), bi(yy, t), Cc(t), null;
				case 25: return null;
				case 30: return t.flags |= 33554432, Cc(t), null;
			}
			throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
		}
		function Tc(e, t) {
			switch (ri(t), t.tag) {
				case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & W) !== U && Qi(t), t) : null;
				case 3: return bi(yy, t), Te(t), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
				case 26:
				case 27:
				case 5: return Oe(t), null;
				case 31:
					if (t.memoizedState !== null) {
						if (Ha(t), t.alternate === null) throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
						mi();
					}
					return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & W) !== U && Qi(t), t) : null;
				case 13:
					if (Ha(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
						if (t.alternate === null) throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
						mi();
					}
					return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & W) !== U && Qi(t), t) : null;
				case 19: return Wa(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
				case 4: return Te(t), null;
				case 10: return bi(t.type, t), null;
				case 22:
				case 23: return Ha(t), La(t), e !== null && xe(mb, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & W) !== U && Qi(t), t) : null;
				case 24: return bi(yy, t), null;
				case 25: return null;
				default: return null;
			}
		}
		function Ec(e, t) {
			switch (ri(t), t.tag) {
				case 3:
					bi(yy, t), Te(t);
					break;
				case 26:
				case 27:
				case 5:
					Oe(t);
					break;
				case 4:
					Te(t);
					break;
				case 31:
					t.memoizedState !== null && Ha(t);
					break;
				case 13:
					Ha(t);
					break;
				case 19:
					Wa(t);
					break;
				case 10:
					bi(t.type, t);
					break;
				case 22:
				case 23:
					Ha(t), La(t), e !== null && xe(mb, t);
					break;
				case 24: bi(yy, t);
			}
		}
		function Dc(e) {
			return (e.mode & W) !== U;
		}
		function Oc(e, t) {
			Dc(e) ? (Zi(), Ac(t, e), Yi()) : Ac(t, e);
		}
		function kc(e, t, n) {
			Dc(e) ? (Zi(), jc(n, e, t), Yi()) : jc(n, e, t);
		}
		function Ac(e, t) {
			try {
				var n = t.updateQueue, r = n === null ? null : n.lastEffect;
				if (r !== null) {
					var i = r.next;
					n = i;
					do {
						if ((n.tag & e) === e && (r = void 0, (e & Tx) !== Cx && (Ew = !0), r = w(t, zb, n), (e & Tx) !== Cx && (Ew = !1), r !== void 0 && typeof r != "function")) {
							var a = void 0;
							a = (n.tag & Ex) === 0 ? (n.tag & Tx) === 0 ? "useEffect" : "useInsertionEffect" : "useLayoutEffect";
							var o = void 0;
							o = r === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof r.then == "function" ? "\n\nIt looks like you wrote " + a + "(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\n" + a + "(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching" : " You returned: " + r, w(t, function(e, t) {
								console.error("%s must not return anything besides a function, which is used for clean-up.%s", e, t);
							}, a, o);
						}
						n = n.next;
					} while (n !== i);
				}
			} catch (e) {
				j(t, t.return, e);
			}
		}
		function jc(e, t, n) {
			try {
				var r = t.updateQueue, i = r === null ? null : r.lastEffect;
				if (i !== null) {
					var a = i.next;
					r = a;
					do {
						if ((r.tag & e) === e) {
							var o = r.inst, s = o.destroy;
							s !== void 0 && (o.destroy = void 0, (e & Tx) !== Cx && (Ew = !0), i = t, w(i, Vb, i, n, s), (e & Tx) !== Cx && (Ew = !1));
						}
						r = r.next;
					} while (r !== a);
				}
			} catch (e) {
				j(t, t.return, e);
			}
		}
		function Mc(e, t) {
			Dc(e) ? (Zi(), Ac(t, e), Yi()) : Ac(t, e);
		}
		function Nc(e, t, n) {
			Dc(e) ? (Zi(), jc(n, e, t), Yi()) : jc(n, e, t);
		}
		function Pc(e) {
			var t = e.updateQueue;
			if (t !== null) {
				var n = e.stateNode;
				e.type.defaultProps || "ref" in e.memoizedProps || xS || (n.props !== e.memoizedProps && console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", S(e) || "instance"), n.state !== e.memoizedState && console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", S(e) || "instance"));
				try {
					w(e, Pa, t, n);
				} catch (t) {
					j(e, e.return, t);
				}
			}
		}
		function Fc(e, t, n) {
			return e.getSnapshotBeforeUpdate(t, n);
		}
		function Ic(e, t) {
			var n = t.memoizedProps, r = t.memoizedState;
			t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || xS || (t.props !== e.memoizedProps && console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", S(e) || "instance"), t.state !== e.memoizedState && console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", S(e) || "instance"));
			try {
				var i = ks(e.type, n), a = w(e, Fc, t, i, r);
				n = DS, a !== void 0 || n.has(e.type) || (n.add(e.type), w(e, function() {
					console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", S(e));
				})), t.__reactInternalSnapshotBeforeUpdate = a;
			} catch (t) {
				j(e, e.return, t);
			}
		}
		function Lc(e, t, n) {
			n.props = ks(e.type, e.memoizedProps), n.state = e.memoizedState, Dc(e) ? (Zi(), w(e, Lb, e, t, n), Yi()) : w(e, Lb, e, t, n);
		}
		function Rc(e) {
			var t = e.ref;
			if (t !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var n = e.stateNode;
						break;
					case 30:
						n = e.stateNode;
						var r = fr(e.memoizedProps, n);
						(n.ref === null || n.ref.name !== r) && (n.ref = Nf(r)), n = n.ref;
						break;
					case 7:
						e.stateNode === null && (n = new Pf(e), se(e, Yf, n), e.stateNode = n), n = e.stateNode;
						break;
					default: n = e.stateNode;
				}
				if (typeof t == "function") {
					if (Dc(e)) try {
						Zi(), e.refCleanup = t(n);
					} finally {
						Yi();
					}
					else e.refCleanup = t(n);
				} else typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", S(e)), t.current = n;
			}
		}
		function zc(e, t) {
			try {
				w(e, Rc, e);
			} catch (n) {
				j(e, t, n);
			}
		}
		function Bc(e, t) {
			var n = e.ref, r = e.refCleanup;
			if (n !== null) {
				if (typeof r == "function") try {
					if (Dc(e)) try {
						Zi(), w(e, r);
					} finally {
						Yi(e);
					}
					else w(e, r);
				} catch (n) {
					j(e, t, n);
				} finally {
					e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
				}
				else if (typeof n == "function") try {
					if (Dc(e)) try {
						Zi(), w(e, n, null);
					} finally {
						Yi(e);
					}
					else w(e, n, null);
				} catch (n) {
					j(e, t, n);
				}
				else n.current = null;
			}
		}
		function Vc(e, t, n, r) {
			var i = e.memoizedProps, a = i.id, o = i.onCommit;
			i = i.onRender, t = t === null ? "mount" : "update", sb && (t = "nested-update"), typeof i == "function" && i(a, t, e.actualDuration, e.treeBaseDuration, e.actualStartTime, n), typeof o == "function" && o(a, t, r, n);
		}
		function Hc(e, t, n, r) {
			var i = e.memoizedProps;
			e = i.id, i = i.onPostCommit, t = t === null ? "mount" : "update", sb && (t = "nested-update"), typeof i == "function" && i(e, t, r, n);
		}
		function Uc(e, t) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) Zf(e.stateNode, t[n]);
		}
		function Wc(e) {
			for (var t = e.return; t !== null && (qc(t) && Zf(e.stateNode, t.stateNode), !Kc(t));) t = t.return;
		}
		function Gc(e) {
			for (var t = e.return; t !== null && (qc(t) && Qf(e.stateNode, t.stateNode), !Kc(t));) t = t.return;
		}
		function Kc(e) {
			return e.tag === 5 || e.tag === 3 || e.tag === 27;
		}
		function qc(e) {
			return e && e.tag === 7 && e.stateNode !== null;
		}
		function Jc(e) {
			var t = e.type, n = e.memoizedProps, r = e.stateNode;
			try {
				w(e, af, r, t, n, e);
			} catch (t) {
				j(e, e.return, t);
			}
		}
		function Yc(e, t, n) {
			try {
				w(e, sf, e.stateNode, e.type, n, t, e);
			} catch (t) {
				j(e, e.return, t);
			}
		}
		function Xc(e) {
			return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && df(e.type) || e.tag === 4;
		}
		function Zc(e) {
			a: for (;;) {
				for (; e.sibling === null;) {
					if (e.return === null || Xc(e.return)) return null;
					e = e.return;
				}
				for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
					if (e.tag === 27 && df(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
					e.child.return = e, e = e.child;
				}
				if (!(e.flags & 2)) return e.stateNode;
			}
		}
		function Qc(e, t, n, r) {
			var i = e.tag;
			if (i === 5 || i === 6) i = e.stateNode, t ? (uf(n), (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t)) : (uf(n), t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), i = n._reactRootContainer, i != null || t.onclick !== null || (t.onclick = En)), Uc(e, r), cg = !0;
			else if (i !== 4 && (i === 27 && (Uc(e, r), r = null, df(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Qc(e, t, n, r), e = e.sibling; e !== null;) Qc(e, t, n, r), e = e.sibling;
		}
		function $c(e, t, n, r) {
			var i = e.tag;
			if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), Uc(e, r), cg = !0;
			else if (i !== 4 && (i === 27 && (Uc(e, r), r = null, df(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for ($c(e, t, n, r), e = e.sibling; e !== null;) $c(e, t, n, r), e = e.sibling;
		}
		function el(e) {
			for (var t, n = e.return; n !== null;) {
				if (Xc(n)) {
					t = n;
					break;
				}
				n = n.return;
			}
			n = null;
			for (var r = e.return; r !== null;) {
				if (qc(r)) {
					var i = r.stateNode;
					n === null ? n = [i] : n.push(i);
				}
				if (Kc(r)) break;
				r = r.return;
			}
			if (t == null) throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
			switch (t.tag) {
				case 27:
					t = t.stateNode, r = Zc(e), $c(e, r, t, n);
					break;
				case 5:
					r = t.stateNode, t.flags & 32 && (cf(r), t.flags &= -33), t = Zc(e), $c(e, t, r, n);
					break;
				case 3:
				case 4:
					t = t.stateNode.containerInfo, r = Zc(e), Qc(e, r, t, n);
					break;
				default: throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
			}
		}
		function tl(e) {
			var t = e.stateNode, n = e.memoizedProps;
			try {
				w(e, gp, e.type, n, t, e);
			} catch (t) {
				j(e, e.return, t);
			}
		}
		function nl(e) {
			(e.tag === 30 || e.subtreeFlags & 33554432) && (OS = !0);
		}
		function rl() {
			var e = AS;
			return AS = null, e;
		}
		function il(e, t, n, r, i) {
			return jS = 0, (t = al(e.child, t, n, r, i)) && e._debugTask != null && ib === null && (ib = e._debugTask), t;
		}
		function al(e, t, n, r, i) {
			for (var a = !1; e !== null;) {
				if (e.tag === 5) {
					var o = e.stateNode;
					if (r !== null) {
						var s = Ef(o);
						r.push(s), s.view && (a = !0);
					} else a || Ef(o).view && (a = !0);
					OS = !0, Cf(o, jS === 0 ? t : t + "_" + jS, n), jS++;
				} else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || al(e.child, t, n, r, i) && (a = !0));
				e = e.sibling;
			}
			return a;
		}
		function ol(e, t) {
			for (; e !== null;) e.tag === 5 ? wf(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || ol(e.child, t)), e = e.sibling;
		}
		function sl(e) {
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if ((e.tag !== 22 || e.memoizedState === null) && (sl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
					var t = e.memoizedProps;
					if (t.name == null || t.name === "auto") throw Error("Found a pair with an auto name. This is a bug in React.");
					var n = t.name;
					t = mr(t.default, t.share), t !== "none" && (il(e, n, t, null, !1) || ol(e.child, !1));
				}
				e = e.sibling;
			}
		}
		function cl(e, t) {
			if (e.tag === 30) {
				var n = e.stateNode, r = e.memoizedProps, i = fr(r, n), a = mr(r.default, n.paired ? r.share : r.enter);
				a === "none" ? sl(e) : il(e, i, a, null, !1) ? (sl(e), n.paired || t || lu(e, r.onEnter)) : ol(e.child, !1);
			} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) cl(e, t), e = e.sibling;
			else sl(e);
		}
		function ll(e) {
			if (kS !== null && kS.size !== 0) {
				var t = kS;
				if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
					if (e.tag !== 22 || e.memoizedState === null) {
						if (e.tag === 30 && e.flags & 18874368) {
							var n = e.memoizedProps, r = n.name;
							if (r != null && r !== "auto") {
								var i = t.get(r);
								if (i !== void 0) {
									var a = mr(n.default, n.share);
									if (a !== "none" && (il(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, lu(e, n.onShare)) : ol(e.child, !1)), t.delete(r), t.size === 0) break;
								}
							}
						}
						ll(e);
					}
					e = e.sibling;
				}
			}
		}
		function ul(e) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = fr(t, e.stateNode), r = kS === null ? void 0 : kS.get(n), i = mr(t.default, r === void 0 ? t.exit : t.share);
				i !== "none" && (il(e, n, i, null, !1) ? r === void 0 ? lu(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, kS.delete(n), lu(e, t.onShare)) : ol(e.child, !1)), kS !== null && ll(e);
			} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) ul(e), e = e.sibling;
			else kS !== null && ll(e);
		}
		function dl(e) {
			for (e = e.child; e !== null;) {
				if (e.tag === 30) {
					var t = e.memoizedProps, n = fr(t, e.stateNode);
					t = mr(t.default, t.update), e.flags &= -5, t !== "none" && il(e, n, t, e.memoizedState = [], !1);
				} else e.subtreeFlags & 33554432 && dl(e);
				e = e.sibling;
			}
		}
		function fl(e) {
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var t = e.stateNode;
						t.paired !== null && (t.paired = null, ol(e.child, !1));
					}
					fl(e);
				}
				e = e.sibling;
			}
		}
		function pl(e) {
			if (e.tag === 30) e.stateNode.paired = null, ol(e.child, !1), fl(e);
			else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) pl(e), e = e.sibling;
			else fl(e);
		}
		function ml(e) {
			for (e = e.child; e !== null;) e.tag === 30 ? ol(e.child, !1) : e.subtreeFlags & 33554432 && ml(e), e = e.sibling;
		}
		function hl(e, t, n, r, i, a, o) {
			for (var s = !1; t !== null;) {
				if (t.tag === 5) {
					var c = t.stateNode;
					if (a !== null && jS < a.length) {
						var l = a[jS], u = Ef(c);
						(l.view || u.view) && (s = !0);
						var d;
						if (d = !(e.flags & 4)) {
							if (u.clip) d = !0;
							else {
								d = l.rect;
								var f = u.rect;
								d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
							}
						}
						d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
					} else e.flags |= 32;
					e.flags & 4 && Cf(c, jS === 0 ? n : n + "_" + jS, i), s && e.flags & 4 || (AS === null && (AS = []), AS.push(c, jS === 0 ? r : r + "_" + jS, t.memoizedProps)), jS++;
				} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : hl(e, t.child, n, r, i, a, o) && (s = !0));
				t = t.sibling;
			}
			return s;
		}
		function gl(e, t) {
			for (e = e.child; e !== null;) {
				if (e.tag === 30) {
					var n = e.memoizedProps, r = e.stateNode, i = fr(n, r), a = mr(n.default, n.update);
					if (t) {
						r = r.clones;
						var o = r === null ? null : r.map(Df);
					} else o = e.memoizedState, e.memoizedState = null;
					r = e;
					var s = e.child, c = i;
					jS = 0, a = hl(r, s, c, i, a, o, !1), e.flags & 4 && a && (t || lu(e, n.onUpdate));
				} else e.subtreeFlags & 33554432 && gl(e, t);
				e = e.sibling;
			}
		}
		function _l(e) {
			var t = e.memoizedProps.name;
			if (t != null && t !== "auto") {
				var n = MS.get(t);
				if (n !== void 0) {
					if (n !== e && n !== e.alternate && !NS[t]) {
						NS[t] = !0;
						var r = JSON.stringify(t);
						w(e, function() {
							console.error("There are two <ViewTransition name=%s> components with the same name mounted at the same time. This is not supported and will cause View Transitions to error. Try to use a more unique name e.g. by using a namespace prefix and adding the id of an item to the name.", r);
						}), w(n, function() {
							console.error("The existing <ViewTransition name=%s> duplicate has this stack trace.", r);
						});
					}
				} else MS.set(t, e);
			}
		}
		function vl(e) {
			var t = e.memoizedProps.name;
			if (t != null && t !== "auto") {
				var n = MS.get(t);
				n === void 0 || n !== e && n !== e.alternate || MS.delete(t);
			}
		}
		function yl(e, t) {
			return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 && e.memoizedState.isDehydrated && !(t.flags & 256);
		}
		function bl(e, t, n) {
			if (e = e.containerInfo, xT = _E, e = or(e), sr(e)) {
				if ("selectionStart" in e) var r = {
					start: e.selectionStart,
					end: e.selectionEnd
				};
				else a: {
					r = (r = e.ownerDocument) && r.defaultView || window;
					var i = r.getSelection && r.getSelection();
					if (i && i.rangeCount !== 0) {
						r = i.anchorNode;
						var a = i.anchorOffset, o = i.focusNode;
						i = i.focusOffset;
						try {
							r.nodeType, o.nodeType;
						} catch {
							r = null;
							break a;
						}
						var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
						b: for (;;) {
							for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
							for (;;) {
								if (f === e) break b;
								if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
								f = p, p = f.parentNode;
							}
							f = m;
						}
						r = c === -1 || l === -1 ? null : {
							start: c,
							end: l
						};
					} else r = null;
				}
				r ||= {
					start: 0,
					end: 0
				};
			} else r = null;
			for (ST = {
				focusedElem: e,
				selectionRange: r
			}, _E = !1, n = (n & 335544064) === n, HS = t, t = n ? 9270 : 1024; HS !== null;) {
				if (e = HS, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && ul(r[a]);
				if (e.alternate === null && e.flags & 2) n && nl(e), xl(n);
				else {
					if (e.tag === 22) {
						if (r = e.alternate, e.memoizedState !== null) {
							r !== null && r.memoizedState === null && n && ul(r), xl(n);
							continue;
						}
						if (r !== null && r.memoizedState !== null) {
							n && nl(e), xl(n);
							continue;
						}
					}
					r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, HS = r) : (n && dl(e), xl(n));
				}
			}
			kS = null;
		}
		function xl(e) {
			for (; HS !== null;) {
				var t = HS, n = t, r = e, i = n.alternate, a = n.flags;
				switch (n.tag) {
					case 0:
					case 11:
					case 15: break;
					case 1:
						a & 1024 && i !== null && Ic(n, i);
						break;
					case 3:
						if (a & 1024) {
							if (r = n.stateNode.containerInfo, n = r.nodeType, n === 9) $f(r);
							else if (n === 1) switch (r.nodeName) {
								case "HEAD":
								case "HTML":
								case "BODY":
									$f(r);
									break;
								default: r.textContent = "";
							}
						}
						break;
					case 5:
					case 26:
					case 27:
					case 6:
					case 4:
					case 17: break;
					case 30:
						r && i !== null && (r = i, i = n, n = fr(r.memoizedProps, r.stateNode), i = i.memoizedProps, i = mr(i.default, i.update), i !== "none" && il(r, n, i, r.memoizedState = [], !0));
						break;
					default: if (a & 1024) throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
				}
				if (r = t.sibling, r !== null) {
					r.return = t.return, HS = r;
					break;
				}
				HS = t.return;
			}
		}
		function Sl(e, t, n) {
			var r = Bi(), i = Hi(), a = Wi(), o = Gi(), s = n.flags;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					zl(e, n), s & 4 && Oc(n, Ex | wx);
					break;
				case 1:
					if (zl(e, n), s & 4) {
						if (e = n.stateNode, t === null) n.type.defaultProps || "ref" in n.memoizedProps || xS || (e.props !== n.memoizedProps && console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", S(n) || "instance"), e.state !== n.memoizedState && console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", S(n) || "instance")), Dc(n) ? (Zi(), w(n, jb, n, e), Yi()) : w(n, jb, n, e);
						else {
							var c = ks(n.type, t.memoizedProps);
							t = t.memoizedState, n.type.defaultProps || "ref" in n.memoizedProps || xS || (e.props !== n.memoizedProps && console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", S(n) || "instance"), e.state !== n.memoizedState && console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", S(n) || "instance")), Dc(n) ? (Zi(), w(n, Nb, n, e, c, t, e.__reactInternalSnapshotBeforeUpdate), Yi()) : w(n, Nb, n, e, c, t, e.__reactInternalSnapshotBeforeUpdate);
						}
					}
					s & 64 && Pc(n), s & 512 && zc(n, n.return);
					break;
				case 3:
					if (t = Ii(), zl(e, n), s & 64 && (s = n.updateQueue, s !== null)) {
						if (c = null, n.child !== null) switch (n.child.tag) {
							case 27:
							case 5:
								c = n.child.stateNode;
								break;
							case 1: c = n.child.stateNode;
						}
						try {
							w(n, Pa, s, c);
						} catch (e) {
							j(n, n.return, e);
						}
					}
					e.effectDuration += Li(t);
					break;
				case 27: t === null && s & 4 && tl(n);
				case 26:
				case 5:
					if (zl(e, n), t === null) {
						if (s & 4) Jc(n);
						else if (s & 64) {
							e = n.type, t = n.memoizedProps, c = n.stateNode;
							try {
								w(n, of, c, e, t, n);
							} catch (e) {
								j(n, n.return, e);
							}
						}
					}
					s & 512 && zc(n, n.return);
					break;
				case 12:
					if (s & 4) {
						s = Ii(), zl(e, n), e = n.stateNode, e.effectDuration += Ri(s);
						try {
							w(n, Vc, n, t, Ey, e.effectDuration);
						} catch (e) {
							j(n, n.return, e);
						}
					} else zl(e, n);
					break;
				case 31:
					zl(e, n), s & 4 && kl(e, n);
					break;
				case 13:
					zl(e, n), s & 4 && Al(e, n), s & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (s = Zu.bind(null, n), ip(e, s))));
					break;
				case 22:
					if (s = n.memoizedState !== null || LS, !s) {
						var l = t !== null && t.memoizedState !== null || RS;
						t = LS, c = RS, LS = s, (RS = l) && !c ? (s = IS, n.subtreeFlags & 8772 && (s |= FS), Ul(e, n, s), (n.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && Sr(n, K, q)) : zl(e, n), LS = t, RS = c;
					}
					break;
				case 30:
					s & 18874368 && _l(n), zl(e, n), s & 512 && zc(n, n.return);
					break;
				case 7: s & 512 && zc(n, n.return);
				default: zl(e, n);
			}
			(n.mode & W) !== U && 0 <= K && 0 <= q && ((Ny || .05 < jy) && Tr(n, K, q, jy, My), n.alternate === null && n.return !== null && n.return.alternate !== null && .05 < q - K && (yl(n.return.alternate, n.return) || xr(n, K, q, "Mount"))), Vi(r), Ui(i), My = a, Ny = o;
		}
		function Cl(e, t) {
			for (e = e.child; e !== null;) wl(e, t), e = e.sibling;
		}
		function wl(e, t) {
			switch (e.tag) {
				case 5:
				case 26:
					try {
						var n = e.stateNode;
						t ? w(e, _f, n) : w(e, bf, e.stateNode, e.memoizedProps);
					} catch (t) {
						j(e, e.return, t);
					}
					Tl(e, t);
					break;
				case 6:
					try {
						var r = e.stateNode;
						t ? w(e, vf, r) : w(e, xf, r, e.memoizedProps), cg = !0;
					} catch (t) {
						j(e, e.return, t);
					}
					break;
				case 18:
					try {
						var i = e.stateNode;
						t ? w(e, gf, i) : w(e, yf, e.stateNode);
					} catch (t) {
						j(e, e.return, t);
					}
					break;
				case 22:
				case 23:
					e.memoizedState === null && Cl(e, t);
					break;
				default: Cl(e, t);
			}
		}
		function Tl(e, t) {
			if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
				a: {
					var n = e, r = t;
					switch (n.tag) {
						case 4:
							wl(n, r);
							break a;
						case 22:
							n.memoizedState === null && Tl(n, r);
							break a;
						default: Tl(n, r);
					}
				}
				e = e.sibling;
			}
		}
		function El(e) {
			var t = e.alternate;
			t !== null && (e.alternate = null, El(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && pt(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
		}
		function Dl(e, t, n) {
			for (n = n.child; n !== null;) Ol(e, t, n), n = n.sibling;
		}
		function Ol(e, t, n) {
			if (Mh && typeof Mh.onCommitFiberUnmount == "function") try {
				Mh.onCommitFiberUnmount(jh, n);
			} catch (e) {
				Nh || (Nh = !0, console.error("React instrumentation encountered an error: %o", e));
			}
			var r = Bi(), i = Hi(), a = Wi(), o = Gi();
			switch (n.tag) {
				case 26:
					RS || Bc(n, t), Dl(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !RS && (e = n.stateNode, e.parentNode.removeChild(e));
					break;
				case 27:
					RS || Bc(n, t), Gc(n);
					var s = YS, c = XS;
					df(n.type) && (YS = n.stateNode, XS = !1), Dl(e, t, n), w(n, _p, n.stateNode, n.type, n.memoizedProps), YS = s, XS = c;
					break;
				case 5: RS || Bc(n, t), Gc(n);
				case 6:
					if (n.tag === 6 && Gc(n), s = YS, c = XS, YS = null, Dl(e, t, n), YS = s, XS = c, YS !== null) {
						if (XS) try {
							w(n, pf, YS, n.stateNode), cg = !0;
						} catch (e) {
							j(n, t, e);
						}
						else try {
							w(n, ff, YS, n.stateNode), cg = !0;
						} catch (e) {
							j(n, t, e);
						}
					}
					break;
				case 18:
					YS !== null && (XS ? (e = YS, mf(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), _m(e)) : mf(YS, n.stateNode));
					break;
				case 4:
					s = YS, c = XS, YS = n.stateNode.containerInfo, XS = !0, Dl(e, t, n), YS = s, XS = c;
					break;
				case 0:
				case 11:
				case 14:
				case 15:
					jc(Tx, n, t), RS || kc(n, t, Ex), Dl(e, t, n);
					break;
				case 1:
					RS || (Bc(n, t), s = n.stateNode, typeof s.componentWillUnmount == "function" && Lc(n, t, s)), Dl(e, t, n);
					break;
				case 21:
					Dl(e, t, n);
					break;
				case 22:
					RS = (s = RS) || n.memoizedState !== null, Dl(e, t, n), RS = s;
					break;
				case 30:
					n.flags & 18874368 && vl(n), Bc(n, t), Dl(e, t, n);
					break;
				case 7:
					RS || Bc(n, t), Dl(e, t, n);
					break;
				default: Dl(e, t, n);
			}
			(n.mode & W) !== U && 0 <= K && 0 <= q && (Ny || .05 < jy) && Tr(n, K, q, jy, My), Vi(r), Ui(i), My = a, Ny = o;
		}
		function kl(e, t) {
			if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
				e = e.dehydrated;
				try {
					w(t, dp, e);
				} catch (e) {
					j(t, t.return, e);
				}
			}
		}
		function Al(e, t) {
			if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
				w(t, fp, e);
			} catch (e) {
				j(t, t.return, e);
			}
		}
		function jl(e) {
			switch (e.tag) {
				case 31:
				case 13:
				case 19:
					var t = e.stateNode;
					return t === null && (t = e.stateNode = new VS()), t;
				case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new VS()), t;
				default: throw Error("Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React.");
			}
		}
		function Ml(e, t) {
			var n = jl(e);
			t.forEach(function(t) {
				if (!n.has(t)) {
					if (n.add(t), Ph) {
						if (US !== null && WS !== null) rd(WS, US);
						else throw Error("Expected finished root and lanes to be set. This is a bug in React.");
					}
					var r = Qu.bind(null, e, t);
					t.then(r, r);
				}
			});
		}
		function Nl(e, t, n) {
			var r = t.deletions;
			if (r !== null) for (var i = 0; i < r.length; i++) {
				var a = e, o = t, s = r[i], c = Bi(), l = o;
				a: for (; l !== null;) {
					switch (l.tag) {
						case 27:
							if (df(l.type)) {
								YS = l.stateNode, XS = !1;
								break a;
							}
							break;
						case 5:
							YS = l.stateNode, XS = !1;
							break a;
						case 3:
						case 4:
							YS = l.stateNode.containerInfo, XS = !0;
							break a;
					}
					l = l.return;
				}
				if (YS === null) throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
				Ol(a, o, s), YS = null, XS = !1, (s.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && xr(s, K, q, "Unmount"), Vi(c), a = s, o = a.alternate, o !== null && (o.return = null), a.return = null;
			}
			if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Pl(t, e, n), t = t.sibling;
		}
		function Pl(e, t, n) {
			var r = Bi(), i = Hi(), a = Wi(), o = Gi(), s = e.alternate, c = e.flags;
			switch (e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					if (c & 4 && (s = e.updateQueue, s = s === null ? null : s.events, s !== null)) for (var l = 0; l < s.length; l++) {
						var u = s[l];
						u.ref.impl = u.nextImpl;
					}
					Nl(t, e, n), Fl(e), c & 4 && (jc(Tx | wx, e, e.return), Ac(Tx | wx, e), kc(e, e.return, Ex | wx));
					break;
				case 1:
					Nl(t, e, n), Fl(e), c & 512 && (RS || s === null || Bc(s, s.return)), c & 64 && LS && (t = e.updateQueue, t !== null && (n = t.callbacks, n !== null && (c = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = c === null ? n : c.concat(n))));
					break;
				case 26:
					if (l = ZS, Nl(t, e, n), Fl(e), c & 512 && (RS || s === null || Bc(s, s.return)), c & 4) {
						if (c = s === null ? null : s.memoizedState, n = e.memoizedState, s === null) {
							if (n === null) {
								if (e.stateNode === null) {
									if (LS) e.stateNode = Zd(e.type, e.memoizedProps, t.containerInfo, e);
									else {
										a: {
											t = e.type, n = e.memoizedProps, c = l.ownerDocument || l;
											b: switch (t) {
												case "title":
													s = c.getElementsByTagName("title")[0], (!s || s[$h] || s[Kh] || s.namespaceURI === Rg || s.hasAttribute("itemprop")) && (s = c.createElement(t), c.head.insertBefore(s, c.querySelector("head > title"))), L(s, t, n), s[Kh] = e, vt(s), t = s;
													break a;
												case "link":
													if (l = Np("link", "href", c).get(t + (n.href || ""))) {
														for (u = 0; u < l.length; u++) if (s = l[u], s.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && s.getAttribute("rel") === (n.rel == null ? null : n.rel) && s.getAttribute("title") === (n.title == null ? null : n.title) && s.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
															l.splice(u, 1);
															break b;
														}
													}
													s = c.createElement(t), L(s, t, n), c.head.appendChild(s);
													break;
												case "meta":
													if (l = Np("meta", "content", c).get(t + (n.content || ""))) {
														for (u = 0; u < l.length; u++) if (s = l[u], Ue(n.content, "content"), s.getAttribute("content") === (n.content == null ? null : "" + n.content) && s.getAttribute("name") === (n.name == null ? null : n.name) && s.getAttribute("property") === (n.property == null ? null : n.property) && s.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && s.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
															l.splice(u, 1);
															break b;
														}
													}
													s = c.createElement(t), L(s, t, n), c.head.appendChild(s);
													break;
												default: throw Error("getNodesForType encountered a type it did not expect: \"" + t + "\". This is a bug in React.");
											}
											s[Kh] = e, vt(s), t = s;
										}
										e.stateNode = t;
									}
								} else LS || Pp(l, e.type, e.stateNode);
							} else e.stateNode = kp(l, n, e.memoizedProps);
						} else c === n ? n === null && e.stateNode !== null && Yc(e, e.memoizedProps, s.memoizedProps) : (c === null ? (t = s.stateNode, t === null || RS || t.parentNode.removeChild(t)) : c.count--, n === null ? LS || Pp(l, e.type, e.stateNode) : kp(l, n, e.memoizedProps));
					}
					break;
				case 27:
					Nl(t, e, n), Fl(e), c & 512 && (RS || s === null || Bc(s, s.return)), s !== null && c & 4 && Yc(e, e.memoizedProps, s.memoizedProps);
					break;
				case 5:
					if (l = zS, zS = !1, Nl(t, e, n), zS = l, Fl(e), c & 512 && (RS || s === null || Bc(s, s.return)), e.flags & 32) {
						t = e.stateNode;
						try {
							w(e, cf, t), cg = !0;
						} catch (t) {
							j(e, e.return, t);
						}
					}
					c & 4 && e.stateNode != null && (t = e.memoizedProps, Yc(e, t, s === null ? t : s.memoizedProps)), c & 1024 && (BS = !0, e.type !== "form" && console.error("Unexpected host component type. Expected a form. This is a bug in React."));
					break;
				case 6:
					if (Nl(t, e, n), Fl(e), c & 4) {
						if (e.stateNode === null) throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
						t = e.memoizedProps, n = s === null ? t : s.memoizedProps, c = e.stateNode;
						try {
							w(e, lf, c, n, t), cg = !0;
						} catch (t) {
							j(e, e.return, t);
						}
					}
					break;
				case 3:
					if (l = Ii(), cg = !1, KT = null, u = ZS, ZS = yp(t.containerInfo), Nl(t, e, n), ZS = u, Fl(e), c & 4 && s !== null && s.memoizedState.isDehydrated) try {
						w(e, up, t.containerInfo);
					} catch (t) {
						j(e, e.return, t);
					}
					BS && (BS = !1, Il(e)), t.effectDuration += Li(l), cg = !1;
					break;
				case 4:
					c = zS, zS = LS, s = wt(), l = ZS, ZS = yp(e.stateNode.containerInfo), Nl(t, e, n), Fl(e), ZS = l, cg && KS && (qS = !0), cg = s, zS = c;
					break;
				case 12:
					c = Ii(), Nl(t, e, n), Fl(e), e.stateNode.effectDuration += Ri(c);
					break;
				case 31:
					Nl(t, e, n), Fl(e), c & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Ml(e, t)));
					break;
				case 13:
					Nl(t, e, n), Fl(e), e.child.flags & 8192 && e.memoizedState !== null != (s !== null && s.memoizedState !== null) && (BC = Sh()), c & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Ml(e, t)));
					break;
				case 22:
					l = e.memoizedState !== null, u = s !== null && s.memoizedState !== null;
					var d = LS, f = RS, p = zS;
					LS = d || l, zS = p || l, RS = f || u, Nl(t, e, n), RS = f, zS = p, LS = d, u && !l && !d && !f && (e.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && Sr(e, K, q), Fl(e), c & 8192 && (t = e.stateNode, t._visibility = l ? t._visibility & ~Pv : t._visibility | Pv, !l || s === null || u || LS || RS || (t = IS, n = u || RS, s = LS, u = RS, LS = l || LS, RS = n, Vl(e, t), (e.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && xr(e, K, q, "Disconnect"), LS = s, RS = u), !l && zS || Cl(e, l)), c & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, Ml(e, n))));
					break;
				case 19:
					Nl(t, e, n), Fl(e), c & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Ml(e, t)));
					break;
				case 30:
					c & 512 && (RS || s === null || Bc(s, s.return)), c = wt(), l = KS, u = (n & 335544064) === n, d = e.memoizedProps, KS = u && mr(d.default, d.update) !== "none", Nl(t, e, n), Fl(e), u && s !== null && cg && (e.flags |= 4), KS = l, cg = c;
					break;
				case 21: break;
				case 7: c & 512 && (RS || s === null || Bc(s, s.return)), s && s.stateNode !== null && (s.stateNode._fragmentFiber = e);
				default: Nl(t, e, n), Fl(e);
			}
			(e.mode & W) !== U && 0 <= K && 0 <= q && ((Ny || .05 < jy) && Tr(e, K, q, jy, My), e.alternate === null && e.return !== null && e.return.alternate !== null && .05 < q - K && (yl(e.return.alternate, e.return) || xr(e, K, q, "Mount"))), Vi(r), Ui(i), My = a, Ny = o;
		}
		function Fl(e) {
			var t = e.flags;
			if (t & 2) {
				try {
					w(e, el, e);
				} catch (t) {
					j(e, e.return, t);
				}
				e.flags &= -3;
			}
			t & 4096 && (e.flags &= -4097);
		}
		function Il(e) {
			if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
				var t = e;
				Il(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, _E = !0, t.reset(), _E = !1), e = e.sibling;
			}
		}
		function Ll(e, t) {
			if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) Rl(t, e), t = t.sibling;
			else gl(t, !1);
		}
		function Rl(e, t) {
			var n = e.alternate;
			if (n === null) cl(e, !1);
			else switch (e.tag) {
				case 3:
					if (JS = GS = !1, rl(), Ll(t, e), !GS && !qS) {
						if (e = AS, e !== null) for (var r = 0; r < e.length; r += 3) {
							n = e[r];
							var i = e[r + 1];
							wf(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
								opacity: [0, 0],
								pointerEvents: ["none", "none"]
							}, {
								duration: 0,
								fill: "forwards",
								pseudoElement: "::view-transition-group(" + i + ")"
							});
						}
						e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(root)"
						}), e.animate({
							width: [0, 0],
							height: [0, 0]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition"
						})), JS = !0;
					}
					AS = null;
					break;
				case 5:
					Ll(t, e);
					break;
				case 4:
					r = GS, GS = !1, Ll(t, e), GS && (qS = !0), GS = r;
					break;
				case 22:
					e.memoizedState === null && (n.memoizedState === null ? Ll(t, e) : cl(e, !1));
					break;
				case 30:
					r = GS, i = rl(), GS = !1, Ll(t, e), GS && (e.flags |= 4);
					var a = e.memoizedProps, o = e.stateNode;
					t = fr(a, o), o = fr(n.memoizedProps, o);
					var s = mr(a.default, a.update);
					s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, jS = 0, t = hl(e, n, t, o, s, a, !0), jS !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (lu(e, e.memoizedProps.onUpdate), AS = i) : i !== null && (i.push.apply(i, AS), AS = i), GS = e.flags & 32 ? !0 : r;
					break;
				default: Ll(t, e);
			}
		}
		function zl(e, t) {
			if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) Sl(e, t.alternate, t), t = t.sibling;
		}
		function Bl(e, t) {
			var n = Bi(), r = Hi(), i = Wi(), a = Gi();
			switch (e.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					kc(e, e.return, Ex), Vl(e, t);
					break;
				case 1:
					Bc(e, e.return);
					var o = e.stateNode;
					typeof o.componentWillUnmount == "function" && Lc(e, e.return, o), Vl(e, t);
					break;
				case 27: (t & IS) !== PS && w(e, _p, e.stateNode, e.type, e.memoizedProps);
				case 5:
					Bc(e, e.return), e.tag !== 5 && e.tag !== 27 || Gc(e), Vl(e, t);
					break;
				case 6:
					Gc(e);
					break;
				case 26:
					Bc(e, e.return), o = e.stateNode, e.memoizedState !== null || o === null || RS || o.parentNode.removeChild(o), Vl(e, t);
					break;
				case 22:
					e.memoizedState === null && Vl(e, t);
					break;
				case 30:
					e.flags & 18874368 && vl(e), Bc(e, e.return), Vl(e, t);
					break;
				case 7: Bc(e, e.return);
				default: Vl(e, t);
			}
			(e.mode & W) !== U && 0 <= K && 0 <= q && (Ny || .05 < jy) && Tr(e, K, q, jy, My), Vi(n), Ui(r), My = i, Ny = a;
		}
		function Vl(e, t) {
			for (e = e.child; e !== null;) Bl(e, t), e = e.sibling;
		}
		function Hl(e, t, n, r) {
			var i = Bi(), a = Hi(), o = Wi(), s = Gi(), c = n.flags, l = (r & FS) !== PS;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Ul(e, n, r), Oc(n, Ex);
					break;
				case 1:
					if (Ul(e, n, r), t = n.stateNode, typeof t.componentDidMount == "function" && w(n, jb, n, t), t = n.updateQueue, t !== null) {
						e = n.stateNode;
						try {
							w(n, Na, t, e);
						} catch (e) {
							j(n, n.return, e);
						}
					}
					l && c & 64 && Pc(n), zc(n, n.return);
					break;
				case 27: (r & IS) !== PS && tl(n);
				case 5:
					n.tag !== 5 && n.tag !== 27 || Wc(n), Ul(e, n, r), l && t === null && c & 4 && Jc(n), zc(n, n.return);
					break;
				case 6:
					Wc(n);
					break;
				case 26:
					var u = n.stateNode;
					n.memoizedState !== null || u === null || LS || Pp(yp(u.ownerDocument), n.type, u), Ul(e, n, r), l && t === null && c & 4 && Jc(n), zc(n, n.return);
					break;
				case 12:
					if (l && c & 4) {
						c = Ii(), Ul(e, n, r), l = n.stateNode, l.effectDuration += Ri(c);
						try {
							w(n, Vc, n, t, Ey, l.effectDuration);
						} catch (e) {
							j(n, n.return, e);
						}
					} else Ul(e, n, r);
					break;
				case 31:
					Ul(e, n, r), l && c & 4 && kl(e, n);
					break;
				case 13:
					Ul(e, n, r), l && c & 4 && Al(e, n);
					break;
				case 22:
					n.memoizedState === null && Ul(e, n, r), zc(n, n.return);
					break;
				case 30:
					Ul(e, n, r), c & 18874368 && _l(n), zc(n, n.return);
					break;
				case 7: zc(n, n.return);
				default: Ul(e, n, r);
			}
			(n.mode & W) !== U && 0 <= K && 0 <= q && (Ny || .05 < jy) && Tr(n, K, q, jy, My), Vi(i), Ui(a), My = o, Ny = s;
		}
		function Ul(e, t, n) {
			for (n = t.subtreeFlags & 8772 ? n : n & ~FS, t = t.child; t !== null;) Hl(e, t.alternate, t, n), t = t.sibling;
		}
		function Wl(e, t) {
			var n = null;
			e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && Ai(e), n != null && ji(n));
		}
		function Gl(e, t) {
			e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Ai(t), e != null && ji(e));
		}
		function Kl(e, t, n, r, i) {
			var a = (n & 335544064) === n;
			if (t.subtreeFlags & (a ? 10262 : 10256) || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)) for (t = t.child; t !== null;) a = t.sibling, ql(e, t, n, r, a === null ? i : a.actualStartTime), t = a;
			else a && ml(t);
		}
		function ql(e, t, n, r, i) {
			var a = Bi(), o = Hi(), s = Wi(), c = Gi(), l = Ov, u = (n & 335544064) === n;
			u && t.alternate === null && t.return !== null && t.return.alternate !== null && pl(t);
			var d = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					(t.mode & W) !== U && 0 < t.actualStartTime && t.flags & 1 && Cr(t, t.actualStartTime, i, QS, n), Kl(e, t, n, r, i), d & 2048 && Mc(t, Dx | wx);
					break;
				case 1:
					(t.mode & W) !== U && 0 < t.actualStartTime && (t.flags & 128 ? wr(t, t.actualStartTime, i, []) : t.flags & 1 && Cr(t, t.actualStartTime, i, QS, n)), Kl(e, t, n, r, i);
					break;
				case 3:
					var f = Ii(), p = QS;
					QS = t.alternate !== null && t.alternate.memoizedState.isDehydrated && !(t.flags & 256), Kl(e, t, n, r, i), QS = p, u && JS && (n = e.containerInfo, n = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, n.style.viewTransitionName === "root" && (n.style.viewTransitionName = ""), n = n.ownerDocument.documentElement, n !== null && n.style.viewTransitionName === "none" && (n.style.viewTransitionName = "")), d & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), r = t.memoizedState.cache, r !== n && (Ai(r), n != null && ji(n))), e.passiveEffectDuration += Li(f);
					break;
				case 12:
					if (d & 2048) {
						d = Ii(), Kl(e, t, n, r, i), e = t.stateNode, e.passiveEffectDuration += Ri(d);
						try {
							w(t, Hc, t, t.alternate, Ey, e.passiveEffectDuration);
						} catch (e) {
							j(t, t.return, e);
						}
					} else Kl(e, t, n, r, i);
					break;
				case 31:
					d = QS, f = t.alternate === null ? null : t.alternate.memoizedState, u = t.memoizedState, f !== null && u === null ? (u = t.deletions, u !== null && 0 < u.length && u[0].tag === 18 ? (QS = !1, f = f.hydrationErrors, f !== null && wr(t, t.actualStartTime, i, f)) : QS = !0) : QS = !1, Kl(e, t, n, r, i), QS = d;
					break;
				case 13:
					d = QS, f = t.alternate === null ? null : t.alternate.memoizedState, u = t.memoizedState, f === null || f.dehydrated === null || u !== null && u.dehydrated !== null ? QS = !1 : (u = t.deletions, u !== null && 0 < u.length && u[0].tag === 18 ? (QS = !1, f = f.hydrationErrors, f !== null && wr(t, t.actualStartTime, i, f)) : QS = !0), Kl(e, t, n, r, i), QS = d;
					break;
				case 23: break;
				case 22:
					p = t.stateNode, f = t.alternate, t.memoizedState === null ? (u && f !== null && f.memoizedState !== null && pl(t), p._visibility & Fv ? Kl(e, t, n, r, i) : (p._visibility |= Fv, Jl(e, t, n, r, !!(t.subtreeFlags & 10256) || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child), i), (t.mode & W) === U || QS || (e = t.actualStartTime, 0 <= e && .05 < i - e && Sr(t, e, i), 0 <= K && 0 <= q && .05 < q - K && Sr(t, K, q)))) : (u && f !== null && f.memoizedState === null && pl(f), p._visibility & Fv ? Kl(e, t, n, r, i) : Xl(e, t, n, r, i)), d & 2048 && Wl(f, t);
					break;
				case 24:
					Kl(e, t, n, r, i), d & 2048 && Gl(t.alternate, t);
					break;
				case 30:
					u && (d = t.alternate, d !== null && (ol(d.child, !0), ol(t.child, !0))), Kl(e, t, n, r, i);
					break;
				default: Kl(e, t, n, r, i);
			}
			(t.mode & W) !== U && ((e = !QS && t.alternate === null && t.return !== null && t.return.alternate !== null) && (n = t.actualStartTime, 0 <= n && .05 < i - n && xr(t, n, i, "Mount")), 0 <= K && 0 <= q && ((Ny || .05 < jy) && Tr(t, K, q, jy, My), e && .05 < q - K && xr(t, K, q, "Mount"))), Vi(a), Ui(o), My = s, Ny = c, Ov = l;
		}
		function Jl(e, t, n, r, i, a) {
			for (i &&= !!(t.subtreeFlags & 10256) || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child), t = t.child; t !== null;) {
				var o = t.sibling;
				Yl(e, t, n, r, i, o === null ? a : o.actualStartTime), t = o;
			}
		}
		function Yl(e, t, n, r, i, a) {
			var o = Bi(), s = Hi(), c = Wi(), l = Gi(), u = Ov;
			i && (t.mode & W) !== U && 0 < t.actualStartTime && t.flags & 1 && Cr(t, t.actualStartTime, a, QS, n);
			var d = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15:
					Jl(e, t, n, r, i, a), Mc(t, Dx);
					break;
				case 23: break;
				case 22:
					var f = t.stateNode;
					t.memoizedState === null ? (f._visibility |= Fv, Jl(e, t, n, r, i, a)) : f._visibility & Fv ? Jl(e, t, n, r, i, a) : Xl(e, t, n, r, a), i && d & 2048 && Wl(t.alternate, t);
					break;
				case 24:
					Jl(e, t, n, r, i, a), i && d & 2048 && Gl(t.alternate, t);
					break;
				default: Jl(e, t, n, r, i, a);
			}
			(t.mode & W) !== U && 0 <= K && 0 <= q && (Ny || .05 < jy) && Tr(t, K, q, jy, My), Vi(o), Ui(s), My = c, Ny = l, Ov = u;
		}
		function Xl(e, t, n, r, i) {
			if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)) for (var a = t.child; a !== null;) {
				t = a.sibling;
				var o = e, s = n, c = r, l = t === null ? i : t.actualStartTime, u = Ov;
				(a.mode & W) !== U && 0 < a.actualStartTime && a.flags & 1 && Cr(a, a.actualStartTime, l, QS, s);
				var d = a.flags;
				switch (a.tag) {
					case 22:
						Xl(o, a, s, c, l), d & 2048 && Wl(a.alternate, a);
						break;
					case 24:
						Xl(o, a, s, c, l), d & 2048 && Gl(a.alternate, a);
						break;
					default: Xl(o, a, s, c, l);
				}
				Ov = u, a = t;
			}
		}
		function Zl(e, t, n) {
			if (e.subtreeFlags & $S) for (e = e.child; e !== null;) Ql(e, t, n), e = e.sibling;
		}
		function Ql(e, t, n) {
			switch (e.tag) {
				case 26:
					Zl(e, t, n), e.flags & $S && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && zp(n, e)) : Bp(n, ZS, e.memoizedState, e.memoizedProps));
					break;
				case 5:
					Zl(e, t, n), e.flags & $S && (e = e.stateNode, (t & 335544128) === t && zp(n, e));
					break;
				case 3:
				case 4:
					var r = ZS;
					ZS = yp(e.stateNode.containerInfo), Zl(e, t, n), ZS = r;
					break;
				case 22:
					e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = $S, $S = 16777216, Zl(e, t, n), $S = r) : Zl(e, t, n));
					break;
				case 30:
					if ((e.flags & $S) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
						var i = e.stateNode;
						i.paired = null, kS === null && (kS = /* @__PURE__ */ new Map()), kS.set(r, i);
					}
					Zl(e, t, n);
					break;
				default: Zl(e, t, n);
			}
		}
		function $l(e) {
			var t = e.alternate;
			if (t !== null && (e = t.child, e !== null)) {
				t.child = null;
				do
					t = e.sibling, e.sibling = null, e = t;
				while (e !== null);
			}
		}
		function eu(e) {
			var t = e.deletions;
			if (e.flags & 16) {
				if (t !== null) for (var n = 0; n < t.length; n++) {
					var r = t[n], i = Bi();
					HS = r, iu(r, e), (r.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && xr(r, K, q, "Unmount"), Vi(i);
				}
				$l(e);
			}
			if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) tu(e), e = e.sibling;
		}
		function tu(e) {
			var t = Bi(), n = Hi(), r = Wi(), i = Gi();
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					eu(e), e.flags & 2048 && Nc(e, e.return, Dx | wx);
					break;
				case 3:
					var a = Ii();
					eu(e), e.stateNode.passiveEffectDuration += Li(a);
					break;
				case 12:
					a = Ii(), eu(e), e.stateNode.passiveEffectDuration += Ri(a);
					break;
				case 22:
					a = e.stateNode, e.memoizedState !== null && a._visibility & Fv && (e.return === null || e.return.tag !== 13) ? (a._visibility &= ~Fv, nu(e), (e.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && xr(e, K, q, "Disconnect")) : eu(e);
					break;
				default: eu(e);
			}
			(e.mode & W) !== U && 0 <= K && 0 <= q && (Ny || .05 < jy) && Tr(e, K, q, jy, My), Vi(t), Ui(n), Ny = i, My = r;
		}
		function nu(e) {
			var t = e.deletions;
			if (e.flags & 16) {
				if (t !== null) for (var n = 0; n < t.length; n++) {
					var r = t[n], i = Bi();
					HS = r, iu(r, e), (r.mode & W) !== U && 0 <= K && 0 <= q && .05 < q - K && xr(r, K, q, "Unmount"), Vi(i);
				}
				$l(e);
			}
			for (e = e.child; e !== null;) ru(e), e = e.sibling;
		}
		function ru(e) {
			var t = Bi(), n = Hi(), r = Wi(), i = Gi();
			switch (e.tag) {
				case 0:
				case 11:
				case 15:
					Nc(e, e.return, Dx), nu(e);
					break;
				case 22:
					var a = e.stateNode;
					a._visibility & Fv && (a._visibility &= ~Fv, nu(e));
					break;
				default: nu(e);
			}
			(e.mode & W) !== U && 0 <= K && 0 <= q && (Ny || .05 < jy) && Tr(e, K, q, jy, My), Vi(t), Ui(n), Ny = i, My = r;
		}
		function iu(e, t) {
			for (; HS !== null;) {
				var n = HS, r = n, i = t, a = Bi(), o = Hi(), s = Wi(), c = Gi();
				switch (r.tag) {
					case 0:
					case 11:
					case 15:
						Nc(r, i, Dx);
						break;
					case 23:
					case 22:
						r.memoizedState !== null && r.memoizedState.cachePool !== null && (i = r.memoizedState.cachePool.pool, i != null && Ai(i));
						break;
					case 24: ji(r.memoizedState.cache);
				}
				if ((r.mode & W) !== U && 0 <= K && 0 <= q && (Ny || .05 < jy) && Tr(r, K, q, jy, My), Vi(a), Ui(o), Ny = c, My = s, r = n.child, r !== null) r.return = n, HS = r;
				else a: for (n = e; HS !== null;) {
					if (r = HS, a = r.sibling, o = r.return, El(r), r === n) {
						HS = null;
						break a;
					}
					if (a !== null) {
						a.return = o, HS = a;
						break a;
					}
					HS = o;
				}
			}
		}
		function au() {
			nC.forEach(function(e) {
				return e();
			});
		}
		function ou() {
			var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
			return e || B.actQueue === null || console.error("The current testing environment is not configured to support act(...)"), e;
		}
		function su(e) {
			if ((Z & aC) !== iC && $ !== 0) return $ & -$;
			var t = B.T;
			return t === null ? (e = dt(), e === Vh && (Jb = null), e) : (t._updatedFibers ||= /* @__PURE__ */ new Set(), t._updatedFibers.add(e), Jb !== null && dt() === Vh && (Jb = null), hd());
		}
		function cu() {
			if (FC === 0) {
				if (!($ & 536870912) || G) {
					var e = zh;
					zh <<= 1, !(zh & 3932160) && (zh = 262144), FC = e;
				} else FC = 536870912;
			}
			return e = vx.current, e !== null && (e.flags |= 32), FC;
		}
		function lu(e, t) {
			if (t != null) {
				var n = e.stateNode, r = n.ref;
				r === null && (r = n.ref = Nf(fr(e.memoizedProps, n))), pw === null && (pw = []), pw.push(t.bind(null, r));
			}
		}
		function A(e, t, n) {
			if (Ew && console.error("useInsertionEffect must not schedule updates."), xw && (Sw = !0), (e === mC && (TC === _C || TC === wC) || e.cancelPendingCommit !== null) && (_u(e, 0), pu(e, $, FC, !1)), nt(e, n), (Z & aC) !== iC && e === mC) {
				if (gh) switch (t.tag) {
					case 0:
					case 11:
					case 15:
						e = Q && S(Q) || "Unknown", Aw.has(e) || (Aw.add(e), t = S(t) || "Unknown", console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render", t, e, e));
						break;
					case 1: kw ||= (console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), !0);
				}
			} else Ph && ct(e, t, n), ad(t), e === mC && ((Z & aC) === iC && (NC |= n), jC === dC && pu(e, $, FC, !1)), od(e);
		}
		function uu(e, t, n) {
			if ((Z & (aC | oC)) !== iC) throw Error("Should not already be working.");
			if ($ !== 0 && Q !== null) {
				var r = Q, i = Sh();
				switch (ab) {
					case vC:
					case _C:
						var a = ob;
						Ev && ((r = r._debugTask) ? r.run(console.timeStamp.bind(console, "Suspended", a, i, Dv, void 0, "primary-light")) : console.timeStamp("Suspended", a, i, Dv, void 0, "primary-light"));
						break;
					case wC:
						a = ob, Ev && ((r = r._debugTask) ? r.run(console.timeStamp.bind(console, "Action", a, i, Dv, void 0, "primary-light")) : console.timeStamp("Action", a, i, Dv, void 0, "primary-light"));
						break;
					default: Ev && (r = i - ob, 3 > r || console.timeStamp("Blocked", ob, i, Dv, void 0, 5 > r ? "primary-light" : 10 > r ? "primary" : 100 > r ? "primary-dark" : "error"));
				}
			}
			a = (n = !n && !(t & 127) && (t & e.expiredLanes) === 0 || Ze(e, t)) ? Eu(e, t) : wu(e, t, !0);
			var o = n;
			do {
				if (a === sC) {
					OC && !n && pu(e, t, 0, !1), t = TC, ob = xy(), ab = t;
					break;
				}
				if (r = Sh(), i = e.current.alternate, o && !fu(i)) {
					br(t), i = Ty, a = r, !Ev || a <= i || (KC ? KC.run(console.timeStamp.bind(console, "Teared Render", i, a, H, V, "error")) : console.timeStamp("Teared Render", i, a, H, V, "error")), gu(t, r), a = wu(e, t, !1), o = !1;
					continue;
				}
				if (a === lC) {
					if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						br(t), Or(Ty, r, t, KC), gu(t, r), t = s;
						a: {
							r = e, a = o, o = LC;
							var c = r.current.memoizedState.isDehydrated;
							if (c && (_u(r, s).flags |= 256), s = wu(r, s, !1), s !== lC && s !== fC) {
								if (kC && !c) {
									r.errorRecoveryDisabledLanes |= a, NC |= a, a = dC;
									break a;
								}
								r = RC, RC = o, r !== null && (RC === null ? RC = r : RC.push.apply(RC, r));
							}
							a = s;
						}
						if (o = !1, a !== lC) continue;
						r = Sh();
					}
				}
				if (a === cC) {
					br(t), Or(Ty, r, t, KC), gu(t, r), _u(e, 0), pu(e, t, 0, !0);
					break;
				}
				a: {
					switch (n = e, a) {
						case sC:
						case cC: throw Error("Root did not complete. This is a bug in React.");
						case dC: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
						case fC:
							br(t), Er(Ty, r, t, KC), gu(t, r), i = t, i & 127 ? Uy = r : i & 4194048 && (eb = r), pu(n, t, FC, !DC);
							break a;
						case lC:
							RC = null;
							break;
						case uC:
						case pC: break;
						default: throw Error("Unknown root exit status.");
					}
					if (B.actQueue !== null) Pu(n, i, t, RC, GC, zC, FC, NC, IC, DC, a, null, null, Ty, r);
					else {
						if ((t & 62914560) === t && (o = BC + HC - Sh(), 10 < o)) {
							if (pu(n, t, FC, !DC), Xe(n, 0, !0) !== 0) break a;
							sw = t, n.timeoutHandle = DT(du.bind(null, n, i, RC, GC, zC, t, FC, NC, IC, DC, a, "Throttled", Ty, r), o);
							break a;
						}
						du(n, i, RC, GC, zC, t, FC, NC, IC, DC, a, null, Ty, r);
					}
				}
				break;
			} while (1);
			od(e);
		}
		function du(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
			e.timeoutHandle = kT;
			var m = t.subtreeFlags, h = (a & 335544064) === a, g = null;
			if ((h || m & 8192 || (m & 16785408) == 16785408) && (g = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: En
			}, kS = null, Ql(t, a, g), h && (m = g, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = Up.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? BC - Sh() : (a & 4194048) === a ? VC - Sh() : 0, m = Vp(g, m), m !== null)) {
				sw = a, e.cancelPendingCommit = m(Pu.bind(null, e, t, a, n, r, i, o, s, c, l, u, g, g.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < g.count ? 0 < g.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : g.imgCount === 1 ? "Suspended on an Image" : 0 < g.imgCount ? "Suspended on Images" : null, f, p)), pu(e, a, o, !l);
				return;
			}
			Pu(e, t, a, n, r, i, o, s, c, l, u, g, d, f, p);
		}
		function fu(e) {
			for (var t = e;;) {
				var n = t.tag;
				if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
					var i = n[r], a = i.getSnapshot;
					i = i.value;
					try {
						if (!q_(a(), i)) return !1;
					} catch {
						return !1;
					}
				}
				if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
				else {
					if (t === e) break;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) return !0;
						t = t.return;
					}
					t.sibling.return = t.return, t = t.sibling;
				}
			}
			return !0;
		}
		function pu(e, t, n, r) {
			t = Qe(e, t), t &= ~PC, t &= ~NC, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
			for (var i = t; 0 < i;) {
				var a = 31 - Fh(i), o = 1 << a;
				r[a] = -1, i &= ~o;
			}
			n !== 0 && it(e, n, t);
		}
		function mu() {
			return (Z & (aC | oC)) !== iC || (sd(0, !1), !1);
		}
		function hu() {
			if (Q !== null) {
				if (TC === hC) var e = Q.return;
				else e = Q, vi(), no(e), $b = null, ex = 0, e = Q;
				for (; e !== null;) Ec(e.alternate, e), e = e.return;
				Q = null;
			}
		}
		function gu(e, t) {
			e & 127 && (Py = t), e & 4194048 && (Wy = t), e & 62914560 && (tb = t), e & 2080374784 && (nb = t);
		}
		function _u(e, t) {
			Ev && (console.timeStamp("Blocking Track", .003, .003, "Blocking", V, "primary-light"), console.timeStamp("Transition Track", .003, .003, "Transition", V, "primary-light"), console.timeStamp("Suspense Track", .003, .003, "Suspense", V, "primary-light"), console.timeStamp("Idle Track", .003, .003, "Idle", V, "primary-light"));
			var n = Ty;
			if (Ty = xy(), $ !== 0 && 0 < n) {
				if (br($), jC === uC || jC === dC) Er(n, Ty, t, KC);
				else {
					var r = Ty, i = KC;
					if (Ev && !(r <= n)) {
						var a = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", o = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
						i ? i.run(console.timeStamp.bind(console, o, n, r, H, V, a)) : console.timeStamp(o, n, r, H, V, a);
					}
				}
				gu($, Ty);
			}
			if (n = KC, KC = null, t & 127) {
				KC = Iy, i = 0 <= Fy && Fy < Py ? Py : Fy, r = 0 <= By && By < Py ? Py : By, a = 0 <= r ? r : 0 <= i ? i : Ty, 0 <= Uy ? (br(2), Dr(Uy, a, t, n)) : rb & 127 && (br(2), Mr(Py, a, ib)), n = i;
				var s = r, c = Vy, l = 0 < Hy, u = Ly === Cy, d = Ly === wy;
				if (i = Ty, r = Iy, a = Ry, o = zy, Ev) {
					if (H = "Blocking", 0 < n ? n > i && (n = i) : n = i, 0 < s ? s > n && (s = n) : s = n, c !== null && n > s) {
						var f = l ? "secondary-light" : "warning";
						r ? r.run(console.timeStamp.bind(console, l ? "Consecutive" : "Event: " + c, s, n, H, V, f)) : console.timeStamp(l ? "Consecutive" : "Event: " + c, s, n, H, V, f);
					}
					i > n && (s = u ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", u = d ? "Promise Resolved" : u ? "Cascading Update" : 5 < i - n ? "Update Blocked" : "Update", d = [], o != null && d.push(["Component name", o]), a != null && d.push(["Method name", a]), n = {
						start: n,
						end: i,
						detail: { devtools: {
							properties: d,
							track: H,
							trackGroup: V,
							color: s
						} }
					}, r ? r.run(performance.measure.bind(performance, u, n)) : performance.measure(u, n), performance.clearMeasures(u));
				}
				Fy = -1.1, Ly = 0, zy = Ry = null, Uy = -1.1, Hy = By, By = -1.1, Py = xy();
			}
			return t & 4194048 && (KC = Jy, i = 0 <= Gy && Gy < Wy ? Wy : Gy, n = 0 <= Ky && Ky < Wy ? Wy : Ky, r = 0 <= Zy && Zy < Wy ? Wy : Zy, a = 0 <= r ? r : 0 <= n ? n : Ty, 0 <= eb ? (br(256), Dr(eb, a, t, KC)) : rb & 4194048 && (br(256), Mr(Wy, a, ib)), d = r, s = Qy, c = 0 < $y, l = qy === wy, a = Ty, r = Jy, o = Yy, u = Xy, Ev && (H = "Transition", 0 < n ? n > a && (n = a) : n = a, 0 < i ? i > n && (i = n) : i = n, 0 < d ? d > i && (d = i) : d = i, i > d && s !== null && (f = c ? "secondary-light" : "warning", r ? r.run(console.timeStamp.bind(console, c ? "Consecutive" : "Event: " + s, d, i, H, V, f)) : console.timeStamp(c ? "Consecutive" : "Event: " + s, d, i, H, V, f)), n > i && (r ? r.run(console.timeStamp.bind(console, "Action", i, n, H, V, "primary-dark")) : console.timeStamp("Action", i, n, H, V, "primary-dark")), a > n && (i = l ? "Promise Resolved" : 5 < a - n ? "Update Blocked" : "Update", d = [], u != null && d.push(["Component name", u]), o != null && d.push(["Method name", o]), n = {
				start: n,
				end: a,
				detail: { devtools: {
					properties: d,
					track: H,
					trackGroup: V,
					color: "primary-light"
				} }
			}, r ? r.run(performance.measure.bind(performance, i, n)) : performance.measure(i, n), performance.clearMeasures(i))), Ky = Gy = -1.1, qy = 0, eb = -1.1, $y = Zy, Zy = -1.1, Wy = xy()), t & 62914560 && rb & 62914560 && (br(4194304), Mr(tb, Ty, ib)), t & 2080374784 && rb & 2080374784 && (br(268435456), Mr(nb, Ty, ib)), n = e.timeoutHandle, n !== kT && (e.timeoutHandle = kT, OT(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), sw = 0, hu(), mC = e, Q = n = Gr(e.current, null), $ = t, TC = hC, EC = null, DC = !1, OC = Ze(e, t), kC = !1, jC = sC, IC = FC = PC = NC = MC = 0, RC = LC = null, zC = !1, AC = Qe(e, t), Nr(), e = mv(), 1e3 < e - fv && (B.recentlyCreatedOwnerStacks = 0, fv = e), hb.discardPendingWarnings(), n;
		}
		function vu(e, t) {
			Y = null, B.H = qx, B.getCurrentStack = null, gh = !1, hh = null, t === Wb || t === Kb ? (t = la(), TC = vC) : t === Gb ? (t = la(), TC = yC) : TC = t === hS ? CC : typeof t == "object" && t && typeof t.then == "function" ? xC : gC, EC = t;
			var n = Q;
			n === null ? (jC = cC, Ns(e, $r(t, e.current))) : n.mode & W && qi(n);
		}
		function yu() {
			var e = vx.current;
			return e === null ? !0 : ($ & 4194048) === $ ? yx === null : ($ & 62914560) === $ || $ & 536870912 ? e === yx : !1;
		}
		function bu() {
			var e = B.H;
			return B.H = qx, e === null ? qx : e;
		}
		function xu() {
			var e = B.A;
			return B.A = eC, e;
		}
		function Su(e) {
			KC === null && (KC = e._debugTask == null ? null : e._debugTask);
		}
		function Cu() {
			jC = dC, DC || ($ & 4194048) !== $ && vx.current !== null || (OC = !0), !(MC & 134217727) && !(NC & 134217727) || mC === null || pu(mC, $, FC, !1);
		}
		function wu(e, t, n) {
			var r = Z;
			Z |= aC;
			var i = bu(), a = xu();
			if (mC !== e || $ !== t) {
				if (Ph) {
					var o = e.memoizedUpdaters;
					0 < o.size && (rd(e, $), o.clear()), lt(e, t);
				}
				GC = null, _u(e, t);
			}
			t = !1, o = jC;
			a: do
				try {
					if (TC !== hC && Q !== null) {
						var s = Q, c = EC;
						switch (TC) {
							case CC:
								hu(), o = fC;
								break a;
							case vC:
							case _C:
							case wC:
							case xC:
								vx.current === null && (t = !0);
								var l = TC;
								if (TC = hC, EC = null, ju(e, s, c, l), n && OC) {
									o = sC;
									break a;
								}
								break;
							default: l = TC, TC = hC, EC = null, ju(e, s, c, l);
						}
					}
					Tu(), o = jC;
					break;
				} catch (t) {
					vu(e, t);
				}
			while (1);
			return t && e.shellSuspendCounter++, vi(), Z = r, B.H = i, B.A = a, Q === null && (mC = null, $ = 0, Nr()), o;
		}
		function Tu() {
			for (; Q !== null;) Ou(Q);
		}
		function Eu(e, t) {
			var n = Z;
			Z |= aC;
			var r = bu(), i = xu();
			if (mC !== e || $ !== t) {
				if (Ph) {
					var a = e.memoizedUpdaters;
					0 < a.size && (rd(e, $), a.clear()), lt(e, t);
				}
				GC = null, UC = Sh() + WC, _u(e, t);
			} else OC = Ze(e, t);
			a: do
				try {
					if (TC !== hC && Q !== null) b: switch (t = Q, a = EC, TC) {
						case gC:
							TC = hC, EC = null, ju(e, t, a, gC);
							break;
						case _C:
						case wC:
							if (oa(a)) {
								TC = hC, EC = null, ku(t);
								break;
							}
							t = function() {
								TC !== _C && TC !== wC || mC !== e || (TC = SC), od(e);
							}, a.then(t, t);
							break a;
						case vC:
							TC = SC;
							break a;
						case yC:
							TC = bC;
							break a;
						case SC:
							oa(a) ? (TC = hC, EC = null, ku(t)) : (TC = hC, EC = null, ju(e, t, a, SC));
							break;
						case bC:
							var o = null;
							switch (Q.tag) {
								case 26: o = Q.memoizedState;
								case 5:
								case 27:
									var s = Q;
									if (o ? Lp(o) : s.stateNode.complete) {
										TC = hC, EC = null;
										var c = s.sibling;
										if (c !== null) Q = c;
										else {
											var l = s.return;
											l === null ? Q = null : (Q = l, Mu(l));
										}
										break b;
									}
									break;
								default: console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.");
							}
							TC = hC, EC = null, ju(e, t, a, bC);
							break;
						case xC:
							TC = hC, EC = null, ju(e, t, a, xC);
							break;
						case CC:
							hu(), jC = fC;
							break a;
						default: throw Error("Unexpected SuspendedReason. This is a bug in React.");
					}
					B.actQueue === null ? Du() : Tu();
					break;
				} catch (t) {
					vu(e, t);
				}
			while (1);
			return vi(), B.H = r, B.A = i, Z = n, Q === null ? (mC = null, $ = 0, Nr(), jC) : sC;
		}
		function Du() {
			for (; Q !== null && !bh();) Ou(Q);
		}
		function Ou(e) {
			var t = e.alternate;
			(e.mode & W) === U ? t = w(e, _c, t, e, AC) : (Ki(e), t = w(e, _c, t, e, AC), qi(e)), e.memoizedProps = e.pendingProps, t === null ? Mu(e) : Q = t;
		}
		function ku(e) {
			var t = w(e, Au, e);
			e.memoizedProps = e.pendingProps, t === null ? Mu(e) : Q = t;
		}
		function Au(e) {
			var t = e.alternate, n = (e.mode & W) !== U;
			switch (n && Ki(e), e.tag) {
				case 15:
				case 0:
					t = Zs(t, e, e.pendingProps, e.type, void 0, $);
					break;
				case 11:
					t = Zs(t, e, e.pendingProps, e.type.render, e.ref, $);
					break;
				case 5:
					no(e);
					var r = e;
					r === ry && (G ? (fi(r), r.tag === 5 && r.stateNode != null && (iy = r.stateNode)) : (fi(r), G = !0));
				default: Ec(t, e), e = Q = Kr(e, AC), t = _c(t, e, AC);
			}
			return n && qi(e), t;
		}
		function ju(e, t, n, r) {
			vi(), no(t), $b = null, ex = 0;
			var i = t.return;
			try {
				if (Rs(e, i, t, n, $)) {
					jC = cC, Ns(e, $r(n, e.current)), Q = null;
					return;
				}
			} catch (t) {
				if (i !== null) throw Q = i, t;
				jC = cC, Ns(e, $r(n, e.current)), Q = null;
				return;
			}
			t.flags & 32768 ? (G || r === gC ? e = !0 : OC || $ & 536870912 ? e = !1 : (DC = e = !0, (r === _C || r === wC || r === vC || r === xC) && (r = vx.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Nu(t, e)) : Mu(t);
		}
		function Mu(e) {
			var t = e;
			do {
				if (t.flags & 32768) {
					Nu(t, DC);
					return;
				}
				var n = t.alternate;
				if (e = t.return, Ki(t), n = w(t, wc, n, t, AC), (t.mode & W) !== U && Ji(t), n !== null) {
					Q = n;
					return;
				}
				if (t = t.sibling, t !== null) {
					Q = t;
					return;
				}
				Q = t = e;
			} while (t !== null);
			jC === sC && (jC = pC);
		}
		function Nu(e, t) {
			do {
				var n = Tc(e.alternate, e);
				if (n !== null) {
					n.flags &= 32767, Q = n;
					return;
				}
				if ((e.mode & W) !== U) {
					Ji(e), n = e.actualDuration;
					for (var r = e.child; r !== null;) n += r.actualDuration, r = r.sibling;
					e.actualDuration = n;
				}
				if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
					Q = e;
					return;
				}
				Q = e = n;
			} while (e !== null);
			jC = fC, Q = null;
		}
		function Pu(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m) {
			e.cancelPendingCommit = null;
			do
				Gu();
			while (iw !== QC);
			if (hb.flushLegacyContextWarning(), hb.flushPendingUnsafeLifecycleWarnings(), (Z & (aC | oC)) !== iC) throw Error("Should not already be working.");
			if (br(n), u === lC) Or(p, m, n, KC);
			else if (r !== null) {
				if (l = t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && !!(t.flags & 256), a = KC, Ev && !(m <= p)) {
					u = [];
					for (var h = 0; h < r.length; h++) {
						var g = r[h].value;
						u.push(["Recoverable Error", typeof g == "object" && g && typeof g.message == "string" ? String(g.message) : String(g)]);
					}
					p = {
						start: p,
						end: m,
						detail: { devtools: {
							color: "primary-dark",
							track: H,
							trackGroup: V,
							tooltipText: l ? "Hydration Failed" : "Recovered after Error",
							properties: u
						} }
					}, a ? a.run(performance.measure.bind(performance, "Recovered", p)) : performance.measure("Recovered", p), performance.clearMeasures("Recovered");
				}
			} else a = KC, !Ev || m <= p || (l = (n & 738197653) === n ? "tertiary-dark" : "primary-dark", u = (n & 536870912) === n ? "Prepared" : (n & 201326741) === n ? "Hydrated" : "Render", a ? a.run(console.timeStamp.bind(console, u, p, m, H, V, l)) : console.timeStamp(u, p, m, H, V, l));
			if (t !== null) {
				if (n === 0 && console.error("finishedLanes should not be empty during a commit. This is a bug in React."), t === e.current) throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
				e === mC && (Q = mC = null, $ = 0), ow = t, aw = e, sw = n, uw = i, dw = r, lw = m, hw = f, gw = JC, _w = null, Fu(e, t, n, o, s, c, d, f, m);
			}
		}
		function Fu(e, t, n, r, i, a, o, s, c) {
			var l = t.lanes | t.childLanes;
			if (cw = l, l |= Rv, rt(e, n, l, r, i, a), pw = null, (n & 335544064) === n ? (mw = Ni(e), r = 10262) : (mw = null, r = 10256), t.actualDuration !== 0 || (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, id(Eh, function() {
				return ET = window.event, gw === JC && (gw = XC), Ku(), null;
			})) : (e.callbackNode = null, e.callbackPriority = 0), Oy = null, Ey = xy(), s !== null && kr(c, Ey, s, KC), OS = !1, s = !!(t.flags & 13878), t.subtreeFlags & 13878 || s) {
				s = B.T, B.T = null, c = Jm.p, Jm.p = Vh, r = Z, Z |= oC;
				try {
					bl(e, t, n);
				} finally {
					Z = r, Jm.p = c, B.T = s;
				}
			}
			iw = $C, OS ? (rb |= n, ib = null, fw = jf(o, e.containerInfo, mw, Bu, Vu, zu, Hu, Ku, Iu, Lu, Ru.bind(null, n))) : (Bu(), Vu(), Hu());
		}
		function Iu(e) {
			if (iw !== QC) {
				var t = aw.onRecoverableError;
				t(e, Uu(null));
			}
		}
		function Lu(e) {
			Dy = xy(), jr(hw === null ? lw : Ey, Dy, Oy, gw === YC, KC), hw = _w = e;
		}
		function Ru(e) {
			if ((rb & e) !== 0) {
				var t = ib;
				rb &= ~e, ib = null, e & 4194048 && !($ & 4194048) && !(sw & 4194048) && (br(256), Mr(Wy, Sh(), t)), e & 62914560 && !($ & 62914560) && !(sw & 62914560) && (br(4194304), Mr(tb, Sh(), t)), e & 2080374784 && !($ & 2080374784) && !(sw & 2080374784) && (br(268435456), Mr(nb, Sh(), t));
			}
		}
		function zu() {
			iw === tw && (iw = QC, Rl(ow, aw), iw = nw);
		}
		function Bu() {
			if (iw === $C) {
				iw = QC;
				var e = aw, t = ow, n = sw, r = !!(t.flags & 13878);
				if (t.subtreeFlags & 13878 || r) {
					r = B.T, B.T = null;
					var i = Jm.p;
					Jm.p = Vh;
					var a = Z;
					Z |= oC;
					try {
						US = n, WS = e, KS = qS = !1, zi(), Pl(t, e, n), WS = US = null, n = ST;
						var o = or(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
						if (o !== s && s && s.ownerDocument && ar(s.ownerDocument.documentElement, s)) {
							if (c !== null && sr(s)) {
								var l = c.start, u = c.end;
								if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
								else {
									var d = s.ownerDocument || document, f = d && d.defaultView || window;
									if (f.getSelection) {
										var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
										!p.extend && h > g && (o = g, g = h, h = o);
										var _ = ir(s, h), v = ir(s, g);
										if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
											var y = d.createRange();
											y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
										}
									}
								}
							}
							for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
								element: p,
								left: p.scrollLeft,
								top: p.scrollTop
							});
							for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
								var b = d[s];
								b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
							}
						}
						_E = !!xT, ST = xT = null;
					} finally {
						Z = a, Jm.p = i, B.T = r;
					}
				}
				e.current = t, iw = ew;
			}
		}
		function Vu() {
			if (iw === ew) {
				iw = QC;
				var e = _w;
				if (e !== null) {
					Ey = xy();
					var t = Dy, n = Ey;
					!Ev || n <= t || (ib ? ib.run(console.timeStamp.bind(console, e, t, n, H, V, "secondary-light")) : console.timeStamp(e, t, n, H, V, "secondary-light"));
				}
				e = aw, t = ow, n = sw;
				var r = !!(t.flags & 8772);
				if (t.subtreeFlags & 8772 || r) {
					r = B.T, B.T = null;
					var i = Jm.p;
					Jm.p = Vh;
					var a = Z;
					Z |= oC;
					try {
						US = n, WS = e, zi(), Sl(e, t.alternate, t), WS = US = null;
					} finally {
						Z = a, Jm.p = i, B.T = r;
					}
				}
				e = lw, t = hw, Dy = xy(), jr(t === null ? e : Ey, Dy, Oy, gw === YC, KC), iw = tw;
			}
		}
		function Hu() {
			if (iw === nw || iw === tw) {
				if (iw === nw) {
					var e = Dy;
					Dy = xy();
					var t = Dy, n = gw === YC;
					!Ev || t <= e || (ib ? ib.run(console.timeStamp.bind(console, n ? "Interrupted View Transition" : "Starting Animation", e, t, H, V, n ? "error" : "secondary-light")) : console.timeStamp(n ? "Interrupted View Transition" : "Starting Animation", e, t, H, V, n ? " error" : "secondary-light")), gw !== YC && (gw = ZC);
				}
				iw = QC, e = fw, fw = null, xh(), t = aw;
				var r = ow;
				n = sw;
				var i = dw, a = (n & 335544064) === n ? 10262 : 10256;
				(a = r.actualDuration !== 0 || (r.subtreeFlags & a) !== 0 || (r.flags & a) !== 0) ? iw = rw : (iw = QC, ow = aw = null, Wu(t, t.pendingLanes), ww = 0, Tw = null);
				var o = t.pendingLanes;
				if (o === 0 && (qC = null), a || td(t), o = ut(n), r = r.stateNode, Mh && typeof Mh.onCommitFiberRoot == "function") try {
					var s = (r.current.flags & 128) == 128;
					switch (o) {
						case Vh:
							var c = wh;
							break;
						case Hh:
							c = Th;
							break;
						case Uh:
							c = Eh;
							break;
						case Wh:
							c = Oh;
							break;
						default: c = Eh;
					}
					Mh.onCommitFiberRoot(jh, r, c, s);
				} catch (e) {
					Nh || (Nh = !0, console.error("React instrumentation encountered an error: %o", e));
				}
				if (Ph && t.memoizedUpdaters.clear(), au(), i !== null) {
					s = B.T, c = Jm.p, Jm.p = Vh, B.T = null;
					try {
						var l = t.onRecoverableError;
						for (r = 0; r < i.length; r++) {
							var u = i[r], d = Uu(u.stack);
							w(u.source, l, u.value, d);
						}
					} finally {
						B.T = s, Jm.p = c;
					}
				}
				if (l = pw, u = mw, mw = null, l !== null && (pw = null, u === null && (u = []), e !== null)) for (d = 0; d < l.length; d++) i = (0, l[d])(u), i !== void 0 && e.finished.finally(i);
				sw & 3 && Gu(), od(t), o = t.pendingLanes, n & 261930 && o & 42 ? (cb = !0, t === bw ? yw++ : (yw = 0, bw = t)) : (yw = 0, bw = null), a || gu(n, Dy), sd(0, !1);
			}
		}
		function Uu(e) {
			return e = { componentStack: e }, Object.defineProperty(e, "digest", { get: function() {
				console.error("You are accessing \"digest\" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.");
			} }), e;
		}
		function Wu(e, t) {
			(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ji(t)));
		}
		function Gu() {
			return fw !== null && (fw.skipTransition(), Dw || (Dw = !0, console.warn("A flushSync update cancelled a View Transition because it was called while the View Transition was still preparing. To preserve the synchronous semantics, React had to skip the View Transition. If you can, try to avoid flushSync() in a scenario that's likely to interfere.")), fw = null, gw = YC), Bu(), Vu(), Hu(), Ku();
		}
		function Ku() {
			if (iw !== rw) return !1;
			var e = aw, t = cw;
			cw = 0;
			var n = ut(sw), r = Uh === 0 || Uh > n ? Uh : n;
			n = B.T;
			var i = Jm.p;
			try {
				Jm.p = r, B.T = null;
				var a = uw;
				uw = null, r = aw;
				var o = sw;
				if (iw = QC, ow = aw = null, sw = 0, (Z & (aC | oC)) !== iC) throw Error("Cannot flush passive effects while already rendering.");
				br(o), xw = !0, Sw = !1;
				var s = 0;
				if (Oy = null, s = Sh(), gw === ZC) Mr(Dy, s, ib);
				else {
					var c = Dy, l = s, u = gw === XC;
					!Ev || l <= c || (KC ? KC.run(console.timeStamp.bind(console, u ? "Waiting for Paint" : "Waiting", c, l, H, V, "secondary-light")) : console.timeStamp(u ? "Waiting for Paint" : "Waiting", c, l, H, V, "secondary-light"));
				}
				c = Z, Z |= oC;
				var d = r.current;
				zi(), tu(d);
				var f = r.current;
				d = lw, zi(), ql(r, f, o, a, d), td(r), Z = c;
				var p = Sh();
				if (f = s, d = KC, Oy === null ? !Ev || p <= f || (d ? d.run(console.timeStamp.bind(console, "Remaining Effects", f, p, H, V, "secondary-dark")) : console.timeStamp("Remaining Effects", f, p, H, V, "secondary-dark")) : Ar(f, p, Oy, !0, d), gu(o, p), sd(0, !1), Sw ? r === Tw ? ww++ : (ww = 0, Tw = r) : ww = 0, Sw = xw = !1, Mh && typeof Mh.onPostCommitFiberRoot == "function") try {
					Mh.onPostCommitFiberRoot(jh, r);
				} catch (e) {
					Nh || (Nh = !0, console.error("React instrumentation encountered an error: %o", e));
				}
				var m = r.current.stateNode;
				return m.effectDuration = 0, m.passiveEffectDuration = 0, !0;
			} finally {
				Jm.p = i, B.T = n, Wu(e, t);
			}
		}
		function qu(e, t, n) {
			t = $r(n, t), Xi(t), t = Fs(e.stateNode, t, 2), e = Da(e, t, 2), e !== null && (nt(e, 2), od(e));
		}
		function j(e, t, n) {
			if (Ew = !1, e.tag === 3) qu(e, e, n);
			else {
				for (; t !== null;) {
					if (t.tag === 3) {
						qu(t, e, n);
						return;
					}
					if (t.tag === 1) {
						var r = t.stateNode;
						if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (qC === null || !qC.has(r))) {
							e = $r(n, e), Xi(e), n = Is(2), r = Da(t, n, 2), r !== null && (Ls(n, r, t, e), nt(r, 2), od(r));
							return;
						}
					}
					t = t.return;
				}
				console.error("Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.\n\nError message:\n\n%s", n);
			}
		}
		function Ju(e, t, n) {
			var r = e.pingCache;
			if (r === null) {
				r = e.pingCache = new rC();
				var i = /* @__PURE__ */ new Set();
				r.set(t, i);
			} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
			i.has(n) || (kC = !0, i.add(n), r = Yu.bind(null, e, t, n), Ph && rd(e, n), t.then(r, r));
		}
		function Yu(e, t, n) {
			var r = e.pingCache;
			r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, n & 127 ? 0 > Fy && (Py = Fy = xy(), Iy = Sy("Promise Resolved"), Ly = wy) : n & 4194048 && 0 > Ky && (Wy = Ky = xy(), Jy = Sy("Promise Resolved"), qy = wy), ou() && B.actQueue === null && console.error("A suspended resource finished loading inside a test, but the event was not wrapped in act(...).\n\nWhen testing, code that resolves suspended data should be wrapped into act(...):\n\nact(() => {\n  /* finish loading suspended data */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act"), mC === e && ($ & n) === n && ((jC === dC || jC === uC && ($ & 62914560) === $ && Sh() - BC < HC) && (Z & aC) === iC ? _u(e, 0) : PC |= n, IC === $ && (IC = 0)), od(e);
		}
		function Xu(e, t) {
			t === 0 && (t = et()), e = Ir(e, t), e !== null && (nt(e, t), od(e));
		}
		function Zu(e) {
			var t = e.memoizedState, n = 0;
			t !== null && (n = t.retryLane), Xu(e, n);
		}
		function Qu(e, t) {
			var n = 0;
			switch (e.tag) {
				case 31:
				case 13:
					var r = e.stateNode, i = e.memoizedState;
					i !== null && (n = i.retryLane);
					break;
				case 19:
					r = e.stateNode;
					break;
				case 22:
					r = e.stateNode._retryCache;
					break;
				default: throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
			}
			r !== null && r.delete(t), Xu(e, n);
		}
		function $u(e, t, n) {
			if (t.subtreeFlags & 134225920) for (t = t.child; t !== null;) {
				var r = e, i = t, a = i.type === jm;
				a = n || a, i.tag === 22 ? i.memoizedState === null && (a && i.flags & 134225920 ? w(i, ed, r, i) : i.subtreeFlags & 134217728 && w(i, $u, r, i, a)) : i.flags & 134217728 ? a && w(i, ed, r, i) : $u(r, i, a), t = t.sibling;
			}
		}
		function ed(e, t) {
			qe(!0);
			try {
				Bl(t, PS), ru(t), Hl(e, t.alternate, t, PS), Yl(e, t, 0, null, !1, 0);
			} finally {
				qe(!1);
			}
		}
		function td(e) {
			var t = !0;
			e.current.mode & (Uv | Wv) || (t = !1), $u(e, e.current, t);
		}
		function nd(e) {
			if ((Z & aC) === iC) {
				var t = e.tag;
				if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
					if (t = S(e) || "ReactComponent", Ow !== null) {
						if (Ow.has(t)) return;
						Ow.add(t);
					} else Ow = /* @__PURE__ */ new Set([t]);
					w(e, function() {
						console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.");
					});
				}
			}
		}
		function rd(e, t) {
			Ph && e.memoizedUpdaters.forEach(function(n) {
				ct(e, n, t);
			});
		}
		function id(e, t) {
			var n = B.actQueue;
			return n === null ? vh(e, t) : (n.push(t), jw);
		}
		function ad(e) {
			ou() && B.actQueue === null && w(e, function() {
				console.error("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act", S(e));
			});
		}
		function od(e) {
			e !== Nw && e.next === null && (Nw === null ? Mw = Nw = e : Nw = Nw.next = e), Iw = !0, B.actQueue === null ? Pw || (Pw = !0, md()) : Fw || (Fw = !0, md());
		}
		function sd(e, t) {
			if (!Lw && Iw) {
				Lw = !0;
				do
					for (var n = !1, r = Mw; r !== null;) {
						if (!t) {
							if (e !== 0) {
								var i = r.pendingLanes;
								if (i === 0) var a = 0;
								else {
									var o = r.suspendedLanes, s = r.pingedLanes;
									a = (1 << 31 - Fh(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
								}
								a !== 0 && (n = !0, fd(r, a));
							} else a = $, a = Xe(r, r === mC ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== kT), !(a & 3) || Ze(r, a) || (n = !0, fd(r, a));
						}
						r = r.next;
					}
				while (n);
				Lw = !1;
			}
		}
		function cd() {
			ET = window.event, ld();
		}
		function ld() {
			Iw = Fw = Pw = !1;
			var e = 0;
			Rw !== 0 && ef() && (e = Rw);
			for (var t = Sh(), n = null, r = Mw; r !== null;) {
				var i = r.next, a = ud(r, t);
				a === 0 ? (r.next = null, n === null ? Mw = i : n.next = i, i === null && (Nw = n)) : (n = r, (e !== 0 || a & 3) && (Iw = !0)), r = i;
			}
			iw !== QC && iw !== rw || sd(e, !1), Rw !== 0 && (Rw = 0);
		}
		function ud(e, t) {
			for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
				var o = 31 - Fh(a), s = 1 << o, c = i[o];
				c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = $e(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
			}
			if (t = mC, n = $, n = Xe(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== kT), r = e.callbackNode, n === 0 || e === t && (TC === _C || TC === wC) || e.cancelPendingCommit !== null) return r !== null && pd(r), e.callbackNode = null, e.callbackPriority = 0;
			if (!(n & 3) || Ze(e, n)) {
				if (t = n & -n, t !== e.callbackPriority || B.actQueue !== null && r !== zw) pd(r);
				else return t;
				switch (ut(n)) {
					case Vh:
					case Hh:
						n = Th;
						break;
					case Uh:
						n = Eh;
						break;
					case Wh:
						n = Oh;
						break;
					default: n = Eh;
				}
				return r = dd.bind(null, e), B.actQueue === null ? n = vh(n, r) : (B.actQueue.push(r), n = zw), e.callbackPriority = t, e.callbackNode = n, t;
			}
			return r !== null && pd(r), e.callbackPriority = 2, e.callbackNode = null, 2;
		}
		function dd(e, t) {
			if (cb = sb = !1, ET = window.event, iw !== QC && iw !== rw) return e.callbackNode = null, e.callbackPriority = 0, null;
			var n = e.callbackNode;
			if (gw === JC && (gw = XC), Gu() && e.callbackNode !== n) return null;
			var r = $;
			return r = Xe(e, e === mC ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== kT), r === 0 ? null : (uu(e, r, t), ud(e, Sh()), e.callbackNode != null && e.callbackNode === n ? dd.bind(null, e) : null);
		}
		function fd(e, t) {
			if (Gu()) return null;
			sb = cb, cb = !1, uu(e, t, !0);
		}
		function pd(e) {
			e !== zw && e !== null && yh(e);
		}
		function md() {
			B.actQueue !== null && B.actQueue.push(function() {
				return ld(), null;
			}), MT(function() {
				(Z & (aC | oC)) === iC ? ld() : vh(wh, cd);
			});
		}
		function hd() {
			if (Rw === 0) {
				var e = db;
				e === 0 && (e = Rh, Rh <<= 1, !(Rh & 261888) && (Rh = 256)), Rw = e;
			}
			return Rw;
		}
		function M(e) {
			return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (Ue(e, "action"), Tn(e));
		}
		function gd(e, t, n, r, i) {
			if (t === "submit" && n && n.stateNode === i) {
				var a = M((i[qh] || null).action), o = r.submitter;
				o && (t = (t = o[qh] || null) ? M(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
				var s = new l_("action", "action", null, r, i);
				e.push({
					event: s,
					listeners: [{
						instance: null,
						listener: function() {
							if (r.defaultPrevented) {
								if (Rw !== 0) {
									var e = new FormData(i, o), t = {
										pending: !0,
										data: e,
										method: i.method,
										action: a
									};
									Object.freeze(t), cs(n, t, null, e);
								}
							} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), t = {
								pending: !0,
								data: e,
								method: i.method,
								action: a
							}, Object.freeze(t), cs(n, t, a, e));
						},
						currentTarget: i
					}]
				});
			}
		}
		function N(e, t, n) {
			e.currentTarget = n;
			try {
				t(e);
			} catch (e) {
				gv(e);
			}
			e.currentTarget = null;
		}
		function P(e, t) {
			t = !!(t & 4);
			for (var n = 0; n < e.length; n++) {
				var r = e[n];
				a: {
					var i = void 0, a = r.event;
					if (r = r.listeners, t) for (var o = r.length - 1; 0 <= o; o--) {
						var s = r[o], c = s.instance, l = s.currentTarget;
						if (s = s.listener, c !== i && a.isPropagationStopped()) break a;
						c === null ? N(a, s, l) : w(c, N, a, s, l), i = c;
					}
					else for (o = 0; o < r.length; o++) {
						if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== i && a.isPropagationStopped()) break a;
						c === null ? N(a, s, l) : w(c, N, a, s, l), i = c;
					}
				}
			}
		}
		function F(e, t) {
			Vw.has(e) || console.error("Did not expect a listenToNonDelegatedEvent() call for \"%s\". This is a bug in React. Please file an issue.", e);
			var n = t[Yh];
			n === void 0 && (n = t[Yh] = /* @__PURE__ */ new Set());
			var r = e + "__bubble";
			n.has(r) || (yd(t, e, 2, !1), n.add(r));
		}
		function _d(e, t, n) {
			Vw.has(e) && !t && console.error("Did not expect a listenToNativeEvent() call for \"%s\" in the bubble phase. This is a bug in React. Please file an issue.", e);
			var r = 0;
			t && (r |= 4), yd(n, e, r, t);
		}
		function vd(e) {
			if (!e[Hw]) {
				e[Hw] = !0, tg.forEach(function(t) {
					t !== "selectionchange" && (Vw.has(t) || _d(t, !1, e), _d(t, !0, e));
				});
				var t = e.nodeType === 9 ? e : e.ownerDocument;
				t === null || t[Hw] || (t[Hw] = !0, _d("selectionchange", !1, t));
			}
		}
		function yd(e, t, n, r) {
			switch (sm(t)) {
				case Vh:
					var i = nm;
					break;
				case Hh:
					i = rm;
					break;
				default: i = im;
			}
			n = i.bind(null, t, n, e), i = void 0, !r_ || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
				capture: !0,
				passive: i
			}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
		}
		function bd(e, t, n, r, i) {
			var a = r;
			if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
				if (r === null) return;
				var o = r.tag;
				if (o === 3 || o === 4) {
					var s = r.stateNode.containerInfo;
					if (s === i) break;
					if (o === 4) for (o = r.return; o !== null;) {
						var c = o.tag;
						if ((c === 3 || c === 4) && o.stateNode.containerInfo === i) return;
						o = o.return;
					}
					for (; s !== null;) {
						if (o = mt(s), o === null) return;
						if (c = o.tag, c === 5 || c === 6 || c === 26 || c === 27) {
							r = a = o;
							continue a;
						}
						s = s.parentNode;
					}
				}
				r = r.return;
			}
			kn(function() {
				var r = a, i = Dn(n), o = [];
				a: {
					var s = lv.get(e);
					if (s !== void 0) {
						var c = l_, l = e;
						switch (e) {
							case "keypress": if (Mn(n) === 0) break a;
							case "keydown":
							case "keyup":
								c = E_;
								break;
							case "focusin":
								l = "focus", c = v_;
								break;
							case "focusout":
								l = "blur", c = v_;
								break;
							case "beforeblur":
							case "afterblur":
								c = v_;
								break;
							case "click": if (n.button === 2) break a;
							case "auxclick":
							case "dblclick":
							case "mousedown":
							case "mousemove":
							case "mouseup":
							case "mouseout":
							case "mouseover":
							case "contextmenu":
								c = g_;
								break;
							case "drag":
							case "dragend":
							case "dragenter":
							case "dragexit":
							case "dragleave":
							case "dragover":
							case "dragstart":
							case "drop":
								c = __;
								break;
							case "touchcancel":
							case "touchend":
							case "touchmove":
							case "touchstart":
								c = k_;
								break;
							case nv:
							case rv:
							case iv:
								c = y_;
								break;
							case cv:
								c = A_;
								break;
							case "scroll":
							case "scrollend":
								c = d_;
								break;
							case "wheel":
								c = j_;
								break;
							case "copy":
							case "cut":
							case "paste":
								c = b_;
								break;
							case "gotpointercapture":
							case "lostpointercapture":
							case "pointercancel":
							case "pointerdown":
							case "pointermove":
							case "pointerout":
							case "pointerover":
							case "pointerup":
								c = D_;
								break;
							case "submit":
								c = O_;
								break;
							case "toggle":
							case "beforetoggle": c = M_;
						}
						var u = !!(t & 4), d = !u && (e === "scroll" || e === "scrollend"), f = u ? s === null ? null : s + "Capture" : s;
						u = [];
						for (var p = r, m; p !== null;) {
							var h = p;
							if (m = h.stateNode, h = h.tag, h !== 5 && h !== 26 && h !== 27 || m === null || f === null || (h = An(p, f), h != null && u.push(xd(p, h, m))), d) break;
							p = p.return;
						}
						0 < u.length && (s = new c(s, l, null, n, i), o.push({
							event: s,
							listeners: u
						}));
					}
				}
				if (!(t & 7)) {
					a: {
						if (c = e === "mouseover" || e === "pointerover", s = e === "mouseout" || e === "pointerout", c && n !== Qg && (l = n.relatedTarget || n.fromElement) && (mt(l) || l[Jh])) break a;
						(s || c) && (l = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window, s ? (c = n.relatedTarget || n.toElement, s = r, c = c ? mt(c) : null, c !== null && (d = te(c), u = c.tag, c !== d || u !== 5 && u !== 27 && u !== 6) && (c = null)) : (s = null, c = r), s !== c && (u = g_, h = "onMouseLeave", f = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (u = D_, h = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = s == null ? l : gt(s), m = c == null ? l : gt(c), l = new u(h, p + "leave", s, n, i), l.target = d, l.relatedTarget = m, h = null, mt(i) === r && (u = new u(f, p + "enter", c, n, i), u.target = m, u.relatedTarget = d, h = u), d = h, u = s && c ? ge(s, c, Cd) : null, s !== null && wd(o, l, s, u, !1), c !== null && d !== null && wd(o, d, c, u, !0)));
					}
					a: {
						if (s = r ? gt(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var g = qn;
						else if (Hn(s)) {
							if (K_) g = $n;
							else {
								g = Zn;
								var _ = Xn;
							}
						} else c = s.nodeName, !c || c.toLowerCase() !== "input" || s.type !== "checkbox" && s.type !== "radio" ? r && yn(r.elementType) && (g = qn) : g = Qn;
						if (g &&= g(e, r)) {
							Wn(o, g, n, i);
							break a;
						}
						_ && _(e, s, r);
					}
					switch (_ = r ? gt(r) : window, e) {
						case "focusin":
							(Hn(_) || _.contentEditable === "true") && (Y_ = _, X_ = r, Z_ = null);
							break;
						case "focusout":
							Z_ = X_ = Y_ = null;
							break;
						case "mousedown":
							Q_ = !0;
							break;
						case "contextmenu":
						case "mouseup":
						case "dragend":
							Q_ = !1, cr(o, n, i);
							break;
						case "selectionchange": if (J_) break;
						case "keydown":
						case "keyup": cr(o, n, i);
					}
					var v;
					if (F_) b: {
						switch (e) {
							case "compositionstart":
								var y = "onCompositionStart";
								break b;
							case "compositionend":
								y = "onCompositionEnd";
								break b;
							case "compositionupdate":
								y = "onCompositionUpdate";
								break b;
						}
						y = void 0;
					}
					else H_ ? Rn(e, n) && (y = "onCompositionEnd") : e === "keydown" && n.keyCode === P_ && (y = "onCompositionStart");
					y && (R_ && n.locale !== "ko" && (H_ || y !== "onCompositionStart" ? y === "onCompositionEnd" && H_ && (v = jn()) : (a_ = i, o_ = "value" in a_ ? a_.value : a_.textContent, H_ = !0)), _ = Sd(r, y), 0 < _.length && (y = new x_(y, e, null, n, i), o.push({
						event: y,
						listeners: _
					}), v ? y.data = v : (v = zn(n), v !== null && (y.data = v)))), (v = L_ ? Bn(e, n) : Vn(e, n)) && (y = Sd(r, "onBeforeInput"), 0 < y.length && (_ = new S_("onBeforeInput", "beforeinput", null, n, i), o.push({
						event: _,
						listeners: y
					}), _.data = v)), gd(o, e, r, n, i);
				}
				P(o, t);
			});
		}
		function xd(e, t, n) {
			return {
				instance: e,
				listener: t,
				currentTarget: n
			};
		}
		function Sd(e, t) {
			for (var n = t + "Capture", r = []; e !== null;) {
				var i = e, a = i.stateNode;
				if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = An(e, n), i != null && r.unshift(xd(e, i, a)), i = An(e, t), i != null && r.push(xd(e, i, a))), e.tag === 3) return r;
				e = e.return;
			}
			return [];
		}
		function Cd(e) {
			if (e === null) return null;
			do
				e = e.return;
			while (e && e.tag !== 5 && e.tag !== 27);
			return e || null;
		}
		function wd(e, t, n, r, i) {
			for (var a = t._reactName, o = []; n !== null && n !== r;) {
				var s = n, c = s.alternate, l = s.stateNode;
				if (s = s.tag, c !== null && c === r) break;
				s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = An(n, a), l != null && o.unshift(xd(n, l, c))) : i || (l = An(n, a), l != null && o.push(xd(n, l, c)))), n = n.return;
			}
			o.length !== 0 && e.push({
				event: t,
				listeners: o
			});
		}
		function Td(e, t) {
			Sn(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || Gg || (Gg = !0, e === "select" && t.multiple ? console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
			var n = {
				registrationNameDependencies: ng,
				possibleRegistrationNames: rg
			};
			yn(e) || typeof t.is == "string" || wn(e, t, n), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.");
		}
		function Ed(e, t, n, r) {
			t !== n && (n = Md(n), Md(t) !== n && (r[e] = t));
		}
		function Dd(e) {
			return !!(e.getAttribute("vt-share") || e.getAttribute("vt-exit") || e.getAttribute("vt-enter") || e.getAttribute("vt-update"));
		}
		function Od(e) {
			if (!Dd(e)) return !1;
			var t = e.getAttribute("vt-name");
			return e = e.style["view-transition-name"], t ? t === e : e.startsWith("_T_");
		}
		function kd(e, t, n) {
			t.forEach(function(t) {
				t === "style" ? e.getAttribute(t) !== "" && (t = e.style, (t.length === 1 && t[0] === "view-transition-name" || t.length === 2 && t[0] === "view-transition-class" && t[1] === "view-transition-name") && Od(e) || (n.style = Ld(e))) : n[Id(t)] = e.getAttribute(t);
			});
		}
		function Ad(e, t) {
			!1 === t ? console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
		}
		function jd(e, t) {
			return e = e.namespaceURI === Lg || e.namespaceURI === Rg ? e.ownerDocument.createElementNS(e.namespaceURI, e.tagName) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
		}
		function Md(e) {
			return Ve(e) && (console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.", Be(e)), He(e)), (typeof e == "string" ? e : "" + e).replace(Zw, "\n").replace(Qw, "");
		}
		function Nd(e, t) {
			return t = Md(t), Md(e) === t;
		}
		function I(e, t, n, r, i, a) {
			switch (n) {
				case "children":
					if (typeof r == "string") mn(r, t, !1), t === "body" || t === "textarea" && r === "" || hn(e, r);
					else if (typeof r == "number" || typeof r == "bigint") mn("" + r, t, !1), t !== "body" && hn(e, "" + r);
					else return;
					break;
				case "className":
					Dt(e, "class", r);
					break;
				case "tabIndex":
					Dt(e, "tabindex", r);
					break;
				case "dir":
				case "role":
				case "viewBox":
				case "width":
				case "height":
					Dt(e, n, r);
					break;
				case "style":
					vn(e, r, a);
					return;
				case "data": if (t !== "object") {
					Dt(e, "data", r);
					break;
				}
				case "src":
				case "href":
					if (r === "" && (t !== "a" || n !== "href")) {
						console.error(n === "src" ? "An empty string (\"\") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string." : "An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", n, n), e.removeAttribute(n);
						break;
					}
					if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
						e.removeAttribute(n);
						break;
					}
					Ue(r, n), r = Tn(r), e.setAttribute(n, r);
					break;
				case "action":
				case "formAction":
					if (r != null && (t === "form" ? n === "formAction" ? console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>.") : typeof r == "function" && (i.encType == null && i.method == null || Jw || (Jw = !0, console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")), i.target == null || qw || (qw = !0, console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))) : t === "input" || t === "button" ? n === "action" ? console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>.") : t !== "input" || i.type === "submit" || i.type === "image" || Gw ? t !== "button" || i.type == null || i.type === "submit" || Gw ? typeof r == "function" && (i.name == null || Kw || (Kw = !0, console.error("Cannot specify a \"name\" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.")), i.formEncType == null && i.formMethod == null || Jw || (Jw = !0, console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")), i.formTarget == null || qw || (qw = !0, console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))) : (Gw = !0, console.error("A button can only specify a formAction along with type=\"submit\" or no type.")) : (Gw = !0, console.error("An input can only specify a formAction along with type=\"submit\" or type=\"image\".")) : console.error(n === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>.")), typeof r == "function") {
						e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
						break;
					}
					if (typeof a == "function" && (n === "formAction" ? (t !== "input" && I(e, t, "name", i.name, i, null), I(e, t, "formEncType", i.formEncType, i, null), I(e, t, "formMethod", i.formMethod, i, null), I(e, t, "formTarget", i.formTarget, i, null)) : (I(e, t, "encType", i.encType, i, null), I(e, t, "method", i.method, i, null), I(e, t, "target", i.target, i, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
						e.removeAttribute(n);
						break;
					}
					Ue(r, n), r = Tn(r), e.setAttribute(n, r);
					break;
				case "onClick":
					r != null && (typeof r != "function" && Ad(n, r), e.onclick = En);
					return;
				case "onScroll":
					r != null && (typeof r != "function" && Ad(n, r), F("scroll", e));
					return;
				case "onScrollEnd":
					r != null && (typeof r != "function" && Ad(n, r), F("scrollend", e));
					return;
				case "dangerouslySetInnerHTML":
					if (r != null) {
						if (typeof r != "object" || !("__html" in r)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
						if (n = r.__html, n != null) {
							if (i.children != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
							a?.__html !== n && (e.innerHTML = n);
						}
					}
					break;
				case "multiple":
					e.multiple = r && typeof r != "function" && typeof r != "symbol";
					break;
				case "muted":
					e.muted = r && typeof r != "function" && typeof r != "symbol";
					break;
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "defaultValue":
				case "defaultChecked":
				case "innerHTML":
				case "ref": break;
				case "autoFocus": break;
				case "xlinkHref":
					if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
						e.removeAttribute("xlink:href");
						break;
					}
					Ue(r, n), n = Tn(r), e.setAttributeNS($w, "xlink:href", n);
					break;
				case "contentEditable":
				case "spellCheck":
				case "draggable":
				case "value":
				case "autoReverse":
				case "externalResourcesRequired":
				case "focusable":
				case "preserveAlpha":
					r != null && typeof r != "function" && typeof r != "symbol" ? (Ue(r, n), e.setAttribute(n, r)) : e.removeAttribute(n);
					break;
				case "inert": r !== "" || Xw[n] || (Xw[n] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", n));
				case "allowFullScreen":
				case "async":
				case "autoPlay":
				case "controls":
				case "credentialless":
				case "default":
				case "defer":
				case "disabled":
				case "disablePictureInPicture":
				case "disableRemotePlayback":
				case "formNoValidate":
				case "hidden":
				case "loop":
				case "noModule":
				case "noValidate":
				case "open":
				case "playsInline":
				case "readOnly":
				case "required":
				case "reversed":
				case "scoped":
				case "seamless":
				case "itemScope":
					r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
					break;
				case "capture":
				case "download":
					!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? (Ue(r, n), e.setAttribute(n, r)) : e.removeAttribute(n);
					break;
				case "cols":
				case "rows":
				case "size":
				case "span":
					r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? (Ue(r, n), e.setAttribute(n, r)) : e.removeAttribute(n);
					break;
				case "rowSpan":
				case "start":
					r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : (Ue(r, n), e.setAttribute(n, r));
					break;
				case "popover":
					F("beforetoggle", e), F("toggle", e), Et(e, "popover", r);
					break;
				case "xlinkActuate":
					Ot(e, $w, "xlink:actuate", r);
					break;
				case "xlinkArcrole":
					Ot(e, $w, "xlink:arcrole", r);
					break;
				case "xlinkRole":
					Ot(e, $w, "xlink:role", r);
					break;
				case "xlinkShow":
					Ot(e, $w, "xlink:show", r);
					break;
				case "xlinkTitle":
					Ot(e, $w, "xlink:title", r);
					break;
				case "xlinkType":
					Ot(e, $w, "xlink:type", r);
					break;
				case "xmlBase":
					Ot(e, eT, "xml:base", r);
					break;
				case "xmlLang":
					Ot(e, eT, "xml:lang", r);
					break;
				case "xmlSpace":
					Ot(e, eT, "xml:space", r);
					break;
				case "is":
					a != null && console.error("Cannot update the \"is\" prop after it has been initialized."), Et(e, "is", r);
					break;
				case "innerText":
				case "textContent": return;
				case "popoverTarget": Yw || typeof r != "object" || !r || (Yw = !0, console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.", r));
				default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = bn(n), Et(e, n, r);
				else {
					ng.hasOwnProperty(n) && r != null && typeof r != "function" && Ad(n, r);
					return;
				}
			}
			cg = !0;
		}
		function Pd(e, t, n, r, i, a) {
			switch (n) {
				case "style":
					vn(e, r, a);
					return;
				case "dangerouslySetInnerHTML":
					if (r != null) {
						if (typeof r != "object" || !("__html" in r)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");
						if (n = r.__html, n != null) {
							if (i.children != null) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
							a?.__html !== n && (e.innerHTML = n);
						}
					}
					break;
				case "children":
					if (typeof r == "string") hn(e, r);
					else if (typeof r == "number" || typeof r == "bigint") hn(e, "" + r);
					else return;
					break;
				case "onScroll":
					r != null && (typeof r != "function" && Ad(n, r), F("scroll", e));
					return;
				case "onScrollEnd":
					r != null && (typeof r != "function" && Ad(n, r), F("scrollend", e));
					return;
				case "onClick":
					r != null && (typeof r != "function" && Ad(n, r), e.onclick = En);
					return;
				case "suppressContentEditableWarning":
				case "suppressHydrationWarning":
				case "innerHTML":
				case "ref": return;
				case "innerText":
				case "textContent": return;
				default:
					if (ng.hasOwnProperty(n)) r != null && typeof r != "function" && Ad(n, r);
					else a: {
						if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), a = n.slice(2, i ? n.length - 7 : void 0), t = e[qh] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(a, t, i), typeof r == "function")) {
							typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(a, r, i);
							break a;
						}
						cg = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Et(e, n, r);
					}
					return;
			}
			cg = !0;
		}
		function L(e, t, n) {
			switch (Td(t, n), t) {
				case "div":
				case "span":
				case "svg":
				case "path":
				case "a":
				case "g":
				case "p":
				case "li": break;
				case "img":
					F("error", e), F("load", e);
					var r = !1, i = !1, a;
					for (a in n) if (n.hasOwnProperty(a)) {
						var o = n[a];
						if (o != null) switch (a) {
							case "src":
								r = !0;
								break;
							case "srcSet":
								i = !0;
								break;
							case "children":
							case "dangerouslySetInnerHTML": throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
							default: I(e, t, a, o, n, null);
						}
					}
					i && I(e, t, "srcSet", n.srcSet, n, null), r && I(e, t, "src", n.src, n, null);
					return;
				case "input":
					St("input", n), F("invalid", e);
					var s = a = o = i = null, c = null, l = null;
					for (r in n) if (n.hasOwnProperty(r)) {
						var u = n[r];
						if (u != null) switch (r) {
							case "name":
								i = u;
								break;
							case "type":
								o = u;
								break;
							case "checked":
								c = u;
								break;
							case "defaultChecked":
								l = u;
								break;
							case "value":
								a = u;
								break;
							case "defaultValue":
								s = u;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (u != null) throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
								break;
							default: I(e, t, r, u, n, null);
						}
					}
					Ft(e, n), Lt(e, a, s, c, l, o, i, !1);
					return;
				case "select":
					for (i in St("select", n), F("invalid", e), r = o = a = null, n) if (n.hasOwnProperty(i) && (s = n[i], s != null)) switch (i) {
						case "value":
							a = s;
							break;
						case "defaultValue":
							o = s;
							break;
						case "multiple": r = s;
						default: I(e, t, i, s, n, null);
					}
					Ht(e, n), t = a, n = o, e.multiple = !!r, t == null ? n != null && Vt(e, !!r, n, !0) : Vt(e, !!r, t, !1);
					return;
				case "textarea":
					for (o in St("textarea", n), F("invalid", e), a = i = r = null, n) if (n.hasOwnProperty(o) && (s = n[o], s != null)) switch (o) {
						case "value":
							r = s;
							break;
						case "defaultValue":
							i = s;
							break;
						case "children":
							a = s;
							break;
						case "dangerouslySetInnerHTML":
							if (s != null) throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
							break;
						default: I(e, t, o, s, n, null);
					}
					Ut(e, n), Gt(e, r, i, a);
					return;
				case "option":
					for (c in zt(e, n), n) if (n.hasOwnProperty(c) && (r = n[c], r != null)) switch (c) {
						case "selected":
							e.selected = r && typeof r != "function" && typeof r != "symbol";
							break;
						default: I(e, t, c, r, n, null);
					}
					return;
				case "dialog":
					F("beforetoggle", e), F("toggle", e), F("cancel", e), F("close", e);
					break;
				case "iframe":
				case "object":
					F("load", e);
					break;
				case "video":
				case "audio":
					for (r = 0; r < Bw.length; r++) F(Bw[r], e);
					break;
				case "image":
					F("error", e), F("load", e);
					break;
				case "details":
					F("toggle", e);
					break;
				case "embed":
				case "source":
				case "link": F("error", e), F("load", e);
				case "area":
				case "base":
				case "br":
				case "col":
				case "hr":
				case "keygen":
				case "meta":
				case "param":
				case "track":
				case "wbr":
				case "menuitem":
					for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
						case "children":
						case "dangerouslySetInnerHTML": throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
						default: I(e, t, l, r, n, null);
					}
					return;
				default: if (yn(t)) {
					for (u in n) n.hasOwnProperty(u) && (r = n[u], r !== void 0 && Pd(e, t, u, r, n, void 0));
					return;
				}
			}
			for (s in n) n.hasOwnProperty(s) && (r = n[s], r != null && I(e, t, s, r, n, null));
		}
		function Fd(e, t, n, r) {
			switch (Td(t, r), t) {
				case "div":
				case "span":
				case "svg":
				case "path":
				case "a":
				case "g":
				case "p":
				case "li": break;
				case "input":
					var i = null, a = null, o = null, s = null, c = null, l = null, u = null;
					for (p in n) {
						var d = n[p];
						if (n.hasOwnProperty(p) && d != null) switch (p) {
							case "checked": break;
							case "value": break;
							case "defaultValue": c = d;
							default: r.hasOwnProperty(p) || I(e, t, p, null, r, d);
						}
					}
					for (var f in r) {
						var p = r[f];
						if (d = n[f], r.hasOwnProperty(f) && (p != null || d != null)) switch (f) {
							case "type":
								p !== d && (cg = !0), a = p;
								break;
							case "name":
								p !== d && (cg = !0), i = p;
								break;
							case "checked":
								p !== d && (cg = !0), l = p;
								break;
							case "defaultChecked":
								p !== d && (cg = !0), u = p;
								break;
							case "value":
								p !== d && (cg = !0), o = p;
								break;
							case "defaultValue":
								p !== d && (cg = !0), s = p;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (p != null) throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
								break;
							default: p !== d && I(e, t, f, p, r, d);
						}
					}
					t = n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null, r = r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null, t || !r || Ww || (console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"), Ww = !0), !t || r || Uw || (console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"), Uw = !0), It(e, o, s, c, l, u, a, i);
					return;
				case "select":
					for (a in p = o = s = f = null, n) if (c = n[a], n.hasOwnProperty(a) && c != null) switch (a) {
						case "value": break;
						case "multiple": p = c;
						default: r.hasOwnProperty(a) || I(e, t, a, null, r, c);
					}
					for (i in r) if (a = r[i], c = n[i], r.hasOwnProperty(i) && (a != null || c != null)) switch (i) {
						case "value":
							a !== c && (cg = !0), f = a;
							break;
						case "defaultValue":
							a !== c && (cg = !0), s = a;
							break;
						case "multiple": a !== c && (cg = !0), o = a;
						default: a !== c && I(e, t, i, a, r, c);
					}
					r = s, t = o, n = p, f == null ? !!n != !!t && (r == null ? Vt(e, !!t, t ? [] : "", !1) : Vt(e, !!t, r, !0)) : Vt(e, !!t, f, !1);
					return;
				case "textarea":
					for (s in p = f = null, n) if (i = n[s], n.hasOwnProperty(s) && i != null && !r.hasOwnProperty(s)) switch (s) {
						case "value": break;
						case "children": break;
						default: I(e, t, s, null, r, i);
					}
					for (o in r) if (i = r[o], a = n[o], r.hasOwnProperty(o) && (i != null || a != null)) switch (o) {
						case "value":
							i !== a && (cg = !0), f = i;
							break;
						case "defaultValue":
							i !== a && (cg = !0), p = i;
							break;
						case "children": break;
						case "dangerouslySetInnerHTML":
							if (i != null) throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
							break;
						default: i !== a && I(e, t, o, i, r, a);
					}
					Wt(e, f, p);
					return;
				case "option":
					for (var m in n) if (f = n[m], n.hasOwnProperty(m) && f != null && !r.hasOwnProperty(m)) switch (m) {
						case "selected":
							e.selected = !1;
							break;
						default: I(e, t, m, null, r, f);
					}
					for (c in r) if (f = r[c], p = n[c], r.hasOwnProperty(c) && f !== p && (f != null || p != null)) switch (c) {
						case "selected":
							f !== p && (cg = !0), e.selected = f && typeof f != "function" && typeof f != "symbol";
							break;
						default: I(e, t, c, f, r, p);
					}
					return;
				case "img":
				case "link":
				case "area":
				case "base":
				case "br":
				case "col":
				case "embed":
				case "hr":
				case "keygen":
				case "meta":
				case "param":
				case "source":
				case "track":
				case "wbr":
				case "menuitem":
					for (var h in n) f = n[h], n.hasOwnProperty(h) && f != null && !r.hasOwnProperty(h) && I(e, t, h, null, r, f);
					for (l in r) if (f = r[l], p = n[l], r.hasOwnProperty(l) && f !== p && (f != null || p != null)) switch (l) {
						case "children":
						case "dangerouslySetInnerHTML":
							if (f != null) throw Error(t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
							break;
						default: I(e, t, l, f, r, p);
					}
					return;
				default: if (yn(t)) {
					for (var g in n) f = n[g], n.hasOwnProperty(g) && f !== void 0 && !r.hasOwnProperty(g) && Pd(e, t, g, void 0, r, f);
					for (u in r) f = r[u], p = n[u], !r.hasOwnProperty(u) || f === p || f === void 0 && p === void 0 || Pd(e, t, u, f, r, p);
					return;
				}
			}
			for (var _ in n) f = n[_], n.hasOwnProperty(_) && f != null && !r.hasOwnProperty(_) && I(e, t, _, null, r, f);
			for (d in r) f = r[d], p = n[d], !r.hasOwnProperty(d) || f === p || f == null && p == null || I(e, t, d, f, r, p);
		}
		function Id(e) {
			switch (e) {
				case "class": return "className";
				case "for": return "htmlFor";
				default: return e;
			}
		}
		function Ld(e) {
			for (var t = {}, n = e.style, r = 0; r < n.length; r++) {
				var i = n[r];
				i === "view-transition-name" && Od(e) || (t[i] = n.getPropertyValue(i));
			}
			return t;
		}
		function Rd(e, t, n) {
			if (t != null && typeof t != "object") console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
			else {
				var r, i = r = "", a;
				for (a in t) if (t.hasOwnProperty(a)) {
					var o = t[a];
					o != null && typeof o != "boolean" && o !== "" && (a.indexOf("--") === 0 ? (We(o, a), r += i + a + ":" + ("" + o).trim()) : typeof o != "number" || o === 0 || Ig.has(a) ? (We(o, a), r += i + a.replace(Eg, "-$1").toLowerCase().replace(Dg, "-ms-") + ":" + ("" + o).trim()) : r += i + a.replace(Eg, "-$1").toLowerCase().replace(Dg, "-ms-") + ":" + o + "px", i = ";");
				}
				r ||= null, t = e.getAttribute("style"), t !== r && (r = Md(r), t = Md(t), t === r || t[t.length - 1] === ";" && Dd(e) || (n.style = Ld(e)));
			}
		}
		function zd(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean": return;
			}
			else if (r != null) switch (typeof r) {
				case "function":
				case "symbol":
				case "boolean": break;
				default: if (Ue(r, t), e === "" + r) return;
			}
			Ed(t, e, r, a);
		}
		function Bd(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) {
				switch (typeof r) {
					case "function":
					case "symbol": return;
				}
				if (!r) return;
			} else switch (typeof r) {
				case "function":
				case "symbol": break;
				default: if (r) return;
			}
			Ed(t, e, r, a);
		}
		function Vd(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol": return;
			}
			else if (r != null) switch (typeof r) {
				case "function":
				case "symbol": break;
				default: if (Ue(r, n), e === "" + r) return;
			}
			Ed(t, e, r, a);
		}
		function Hd(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean": return;
				default: if (isNaN(r)) return;
			}
			else if (r != null) switch (typeof r) {
				case "function":
				case "symbol":
				case "boolean": break;
				default: if (!isNaN(r) && (Ue(r, t), e === "" + r)) return;
			}
			Ed(t, e, r, a);
		}
		function Ud(e, t, n, r, i, a) {
			if (i.delete(n), e = e.getAttribute(n), e === null) switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean": return;
			}
			else if (r != null) switch (typeof r) {
				case "function":
				case "symbol":
				case "boolean": break;
				default: if (Ue(r, t), n = Tn("" + r), e === n) return;
			}
			Ed(t, e, r, a);
		}
		function Wd(e, t, n, r) {
			for (var i = {}, a = /* @__PURE__ */ new Set(), o = e.attributes, s = 0; s < o.length; s++) switch (o[s].name.toLowerCase()) {
				case "value": break;
				case "checked": break;
				case "selected": break;
				case "vt-name":
				case "vt-update":
				case "vt-enter":
				case "vt-exit":
				case "vt-share":
				case "vt-parent-enter":
				case "vt-parent-exit": break;
				default: a.add(o[s].name);
			}
			if (yn(t)) {
				for (var c in n) if (n.hasOwnProperty(c)) {
					var l = n[c];
					if (l != null) {
						if (ng.hasOwnProperty(c)) typeof l != "function" && Ad(c, l);
						else if (!0 !== n.suppressHydrationWarning) switch (c) {
							case "children":
								typeof l != "string" && typeof l != "number" || Ed("children", e.textContent, l, i);
								continue;
							case "suppressContentEditableWarning":
							case "suppressHydrationWarning":
							case "defaultValue":
							case "defaultChecked":
							case "innerHTML":
							case "ref": continue;
							case "dangerouslySetInnerHTML":
								o = e.innerHTML, l = l ? l.__html : void 0, l != null && (l = jd(e, l), Ed(c, o, l, i));
								continue;
							case "style":
								a.delete(c), Rd(e, l, i);
								continue;
							case "offsetParent":
							case "offsetTop":
							case "offsetLeft":
							case "offsetWidth":
							case "offsetHeight":
							case "isContentEditable":
							case "outerText":
							case "outerHTML":
								a.delete(c.toLowerCase()), console.error("Assignment to read-only property will result in a no-op: `%s`", c);
								continue;
							case "className":
								a.delete("class"), o = Tt(e, "class", l), Ed("className", o, l, i);
								continue;
							default: r.context === vT && t !== "svg" && t !== "math" ? a.delete(c.toLowerCase()) : a.delete(c), o = Tt(e, c, l), Ed(c, o, l, i);
						}
					}
				}
			} else for (l in n) if (n.hasOwnProperty(l) && (c = n[l], c != null)) {
				if (ng.hasOwnProperty(l)) typeof c != "function" && Ad(l, c);
				else if (!0 !== n.suppressHydrationWarning) switch (l) {
					case "children":
						typeof c != "string" && typeof c != "number" || Ed("children", e.textContent, c, i);
						continue;
					case "suppressContentEditableWarning":
					case "suppressHydrationWarning":
					case "value":
					case "checked":
					case "selected":
					case "defaultValue":
					case "defaultChecked":
					case "innerHTML":
					case "ref": continue;
					case "dangerouslySetInnerHTML":
						o = e.innerHTML, c = c ? c.__html : void 0, c != null && (c = jd(e, c), o !== c && (i[l] = { __html: o }));
						continue;
					case "className":
						zd(e, l, "class", c, a, i);
						continue;
					case "tabIndex":
						zd(e, l, "tabindex", c, a, i);
						continue;
					case "style":
						a.delete(l), Rd(e, c, i);
						continue;
					case "multiple":
						a.delete(l), Ed(l, e.multiple, c, i);
						continue;
					case "muted":
						a.delete(l), Ed(l, e.muted, c, i);
						continue;
					case "autoFocus":
						a.delete("autofocus"), Ed(l, e.autofocus, c, i);
						continue;
					case "data": if (t !== "object") {
						a.delete(l), o = e.getAttribute("data"), Ed(l, o, c, i);
						continue;
					}
					case "src":
					case "href":
						if (!(c !== "" || t === "a" && l === "href" || t === "object" && l === "data")) {
							console.error(l === "src" ? "An empty string (\"\") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string." : "An empty string (\"\") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.", l, l);
							continue;
						}
						Ud(e, l, l, c, a, i);
						continue;
					case "action":
					case "formAction":
						if (o = e.getAttribute(l), typeof c == "function") {
							a.delete(l.toLowerCase()), l === "formAction" ? (a.delete("name"), a.delete("formenctype"), a.delete("formmethod"), a.delete("formtarget")) : (a.delete("enctype"), a.delete("method"), a.delete("target"));
							continue;
						}
						if (o === nT) {
							a.delete(l.toLowerCase()), Ed(l, "function", c, i);
							continue;
						}
						Ud(e, l, l.toLowerCase(), c, a, i);
						continue;
					case "xlinkHref":
						Ud(e, l, "xlink:href", c, a, i);
						continue;
					case "contentEditable":
						Vd(e, l, "contenteditable", c, a, i);
						continue;
					case "spellCheck":
						Vd(e, l, "spellcheck", c, a, i);
						continue;
					case "draggable":
					case "autoReverse":
					case "externalResourcesRequired":
					case "focusable":
					case "preserveAlpha":
						Vd(e, l, l, c, a, i);
						continue;
					case "allowFullScreen":
					case "async":
					case "autoPlay":
					case "controls":
					case "credentialless":
					case "default":
					case "defer":
					case "disabled":
					case "disablePictureInPicture":
					case "disableRemotePlayback":
					case "formNoValidate":
					case "hidden":
					case "loop":
					case "noModule":
					case "noValidate":
					case "open":
					case "playsInline":
					case "readOnly":
					case "required":
					case "reversed":
					case "scoped":
					case "seamless":
					case "itemScope":
						Bd(e, l, l.toLowerCase(), c, a, i);
						continue;
					case "capture":
					case "download":
						a: {
							s = e;
							var u = o = l, d = i;
							if (a.delete(u), s = s.getAttribute(u), s === null) switch (typeof c) {
								case "undefined":
								case "function":
								case "symbol": break a;
								default: if (!1 === c) break a;
							}
							else if (c != null) switch (typeof c) {
								case "function":
								case "symbol": break;
								case "boolean":
									if (!0 === c && s === "") break a;
									break;
								default: if (Ue(c, o), s === "" + c) break a;
							}
							Ed(o, s, c, d);
						}
						continue;
					case "cols":
					case "rows":
					case "size":
					case "span":
						a: {
							if (s = e, u = o = l, d = i, a.delete(u), s = s.getAttribute(u), s === null) switch (typeof c) {
								case "undefined":
								case "function":
								case "symbol":
								case "boolean": break a;
								default: if (isNaN(c) || 1 > c) break a;
							}
							else if (c != null) switch (typeof c) {
								case "function":
								case "symbol":
								case "boolean": break;
								default: if (!(isNaN(c) || 1 > c) && (Ue(c, o), s === "" + c)) break a;
							}
							Ed(o, s, c, d);
						}
						continue;
					case "rowSpan":
						Hd(e, l, "rowspan", c, a, i);
						continue;
					case "start":
						Hd(e, l, l, c, a, i);
						continue;
					case "xHeight":
						zd(e, l, "x-height", c, a, i);
						continue;
					case "xlinkActuate":
						zd(e, l, "xlink:actuate", c, a, i);
						continue;
					case "xlinkArcrole":
						zd(e, l, "xlink:arcrole", c, a, i);
						continue;
					case "xlinkRole":
						zd(e, l, "xlink:role", c, a, i);
						continue;
					case "xlinkShow":
						zd(e, l, "xlink:show", c, a, i);
						continue;
					case "xlinkTitle":
						zd(e, l, "xlink:title", c, a, i);
						continue;
					case "xlinkType":
						zd(e, l, "xlink:type", c, a, i);
						continue;
					case "xmlBase":
						zd(e, l, "xml:base", c, a, i);
						continue;
					case "xmlLang":
						zd(e, l, "xml:lang", c, a, i);
						continue;
					case "xmlSpace":
						zd(e, l, "xml:space", c, a, i);
						continue;
					case "inert":
						c !== "" || Xw[l] || (Xw[l] = !0, console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.", l)), Bd(e, l, l, c, a, i);
						continue;
					default: if (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") {
						s = bn(l), o = !1, r.context === vT && t !== "svg" && t !== "math" ? a.delete(s.toLowerCase()) : (u = l.toLowerCase(), u = Bg.hasOwnProperty(u) && Bg[u] || null, u !== null && u !== l && (o = !0, a.delete(u)), a.delete(s));
						a: if (u = e, d = s, s = c, Ct(d)) {
							if (u.hasAttribute(d)) u = d.toLowerCase() === "nonce" ? u.nonce : u.getAttribute(d), Ue(s, d), s = u === "" + s ? s : u;
							else {
								switch (typeof s) {
									case "function":
									case "symbol": break a;
									case "boolean": if (u = d.toLowerCase().slice(0, 5), u !== "data-" && u !== "aria-") break a;
								}
								s = s === void 0 ? void 0 : null;
							}
						} else s = void 0;
						o || Ed(l, s, c, i);
					}
				}
			}
			return 0 < a.size && !0 !== n.suppressHydrationWarning && kd(e, a, i), Object.keys(i).length === 0 ? null : i;
		}
		function Gd(e, t) {
			switch (e.length) {
				case 0: return "";
				case 1: return e[0];
				case 2: return e[0] + " " + t + " " + e[1];
				default: return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
			}
		}
		function Kd(e) {
			switch (e) {
				case "css":
				case "script":
				case "font":
				case "img":
				case "image":
				case "input":
				case "link": return !0;
				default: return !1;
			}
		}
		function qd() {
			if (typeof performance.getEntriesByType == "function") {
				for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
					var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
					if (a && s && Kd(o)) {
						for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
							var c = n[r], l = c.startTime;
							if (l > s) break;
							var u = c.transferSize, d = c.initiatorType;
							u && Kd(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
						}
						if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
					}
				}
				if (0 < e) return t / e / 1e6;
			}
			return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
		}
		function Jd(e) {
			return e.nodeType === 9 ? e : e.ownerDocument;
		}
		function Yd(e) {
			switch (e) {
				case Rg: return yT;
				case Lg: return bT;
				default: return vT;
			}
		}
		function Xd(e, t) {
			if (e === vT) switch (t) {
				case "svg": return yT;
				case "math": return bT;
				default: return vT;
			}
			return e === yT && t === "foreignObject" ? vT : e;
		}
		function Zd(e, t, n, r) {
			return n = Jd(n).createElement(e), n[Kh] = r, n[qh] = t, L(n, e, t), vt(n), n;
		}
		function Qd(e) {
			if (e = e.type, typeof e != "string" || e === "" || (e = e.toLowerCase(), e === "module" || e === "importmap" || e === "speculationrules")) return !1;
			switch (e) {
				case "application/ecmascript":
				case "application/javascript":
				case "application/x-ecmascript":
				case "application/x-javascript":
				case "text/ecmascript":
				case "text/javascript":
				case "text/javascript1.0":
				case "text/javascript1.1":
				case "text/javascript1.2":
				case "text/javascript1.3":
				case "text/javascript1.4":
				case "text/javascript1.5":
				case "text/jscript":
				case "text/livescript":
				case "text/x-ecmascript":
				case "text/x-javascript": return !1;
			}
			return !0;
		}
		function $d(e, t) {
			return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
		}
		function ef() {
			var e = window.event;
			return e && e.type === "popstate" ? e !== TT && (TT = e, !0) : (TT = null, !1);
		}
		function tf() {
			var e = window.event;
			return e && e !== ET ? e.type : null;
		}
		function nf() {
			var e = window.event;
			return e && e !== ET ? e.timeStamp : -1.1;
		}
		function rf(e) {
			setTimeout(function() {
				throw e;
			});
		}
		function af(e, t, n) {
			switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && e.focus();
					break;
				case "img": n.src ? e.src = n.src : n.srcSet && (e.srcset = n.srcSet);
			}
		}
		function of() {}
		function sf(e, t, n, r) {
			Fd(e, t, n, r), e[qh] = r;
		}
		function cf(e) {
			hn(e, "");
		}
		function lf(e, t, n) {
			e.nodeValue = n;
		}
		function uf(e) {
			if (!e.__reactWarnedAboutChildrenConflict) {
				var t = e[qh] || null;
				if (t !== null) {
					var n = ht(e);
					n !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, w(n, function() {
						console.error("Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets \"children\" text content using React. It should be a leaf with no children. Otherwise it's ambiguous which children should be used.");
					})) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, w(n, function() {
						console.error("Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets \"dangerouslySetInnerHTML\" using React. It should be a leaf with no children. Otherwise it's ambiguous which children should be used.");
					})));
				}
			}
		}
		function df(e) {
			return e === "head";
		}
		function ff(e, t) {
			e.removeChild(t);
		}
		function pf(e, t) {
			(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
		}
		function mf(e, t) {
			var n = t, r = 0;
			do {
				var i = n.nextSibling;
				if (e.removeChild(n), i && i.nodeType === 8) {
					if (n = i.data, n === sT || n === aT) {
						if (r === 0) {
							e.removeChild(i), _m(t);
							return;
						}
						r--;
					} else if (n === oT || n === cT || n === lT || n === uT || n === iT) r++;
					else if (n === dT) vp(e.ownerDocument.documentElement);
					else if (n === pT) {
						n = e.ownerDocument.head, vp(n);
						for (var a = n.firstChild; a;) {
							var o = a.nextSibling, s = a.nodeName;
							a[$h] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
						}
					} else n === fT && vp(e.ownerDocument.body);
				}
				n = i;
			} while (n);
			_m(t);
		}
		function hf(e, t) {
			var n = e;
			e = 0;
			do {
				var r = n.nextSibling;
				if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
					if (n = r.data, n === sT) {
						if (e === 0) break;
						e--;
					} else n !== oT && n !== cT && n !== lT && n !== uT || e++;
				}
				n = r;
			} while (n);
		}
		function gf(e) {
			hf(e, !0);
		}
		function _f(e) {
			e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
		}
		function vf(e) {
			e.nodeValue = "";
		}
		function yf(e) {
			hf(e, !1);
		}
		function bf(e, t) {
			t = t[_T], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
		}
		function xf(e, t) {
			e.nodeValue = t;
		}
		function Sf(e) {
			for (var t = e.firstChild; t != null;) {
				if (t.nodeType === 1 && getComputedStyle(t).display === "block") {
					w(ht(t) || ht(e), function(e, t) {
						console.error("You're about to start a <ViewTransition> around a display: inline element <%s>, which itself has a display: block element <%s> inside it. This might trigger a bug in Safari which causes the View Transition to be skipped with a duplicate name error.\nhttps://bugs.webkit.org/show_bug.cgi?id=290923", e.toLocaleLowerCase(), t.toLocaleLowerCase());
					}, e.tagName, t.tagName);
					break;
				}
				if (t.firstChild != null) t = t.firstChild;
				else {
					if (t === e) break;
					for (; t.nextSibling == null && t.parentNode != null && t.parentNode !== e;) t = t.parentNode;
					t = t.nextSibling;
				}
			}
		}
		function Cf(e, t, n) {
			if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
				if (t = e.getClientRects(), t.length === 1) var r = 1;
				else for (var i = r = 0; i < t.length; i++) {
					var a = t[i];
					0 < a.width && 0 < a.height && r++;
				}
				r === 1 ? (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom) : Sf(e);
			}
		}
		function wf(e, t) {
			e = e.style, t = t[_T];
			var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
			e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
		}
		function Tf(e, t, n) {
			return n = n.ownerDocument.defaultView, {
				rect: e,
				abs: t.position === "absolute" || t.position === "fixed",
				clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
				view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
			};
		}
		function Ef(e) {
			return Tf(e.getBoundingClientRect(), getComputedStyle(e), e);
		}
		function Df(e) {
			var t = e.getBoundingClientRect();
			t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
			var n = getComputedStyle(e);
			return Tf(t, n, e);
		}
		function Of(e, t) {
			if (typeof e == "object" && e) switch (e.name) {
				case "TimeoutError": return Error("A ViewTransition timed out because a Navigation stalled. This can happen if a Navigation is blocked on React itself. Such as if it's resolved inside useEffect. This can be solved by moving the resolution to useLayoutEffect.", { cause: e });
				case "AbortError": return t ? null : Error("A ViewTransition was aborted early. This might be because you have other View Transition libraries on the page and only one can run at a time. To avoid this, use only React's built-in <ViewTransition> to coordinate.", { cause: e });
				case "InvalidStateError": if (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") return null;
			}
			return e;
		}
		function kf(e) {
			return e.documentElement.clientHeight;
		}
		function Af(e) {
			this.addEventListener("load", e), this.addEventListener("error", e);
		}
		function jf(e, t, n, r, i, a, o, s, c, l, u) {
			var d = t.nodeType === 9 ? t : t.ownerDocument;
			try {
				var f = d.startViewTransition({
					update: function() {
						var t = d.defaultView, n = t.navigation && t.navigation.transition, o = d.fonts.status;
						r();
						var s = [];
						if (o === "loaded" && (kf(d), d.fonts.status === "loading" && s.push(d.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, f = 0; f < c.length; f++) {
							var p = c[f];
							if (!p.complete) {
								var m = p.getBoundingClientRect();
								if (0 < m.bottom && 0 < m.right && m.top < t.innerHeight && m.left < t.innerWidth) {
									if (u += Rp(p), u > XT) {
										s.length = o;
										break;
									}
									p = new Promise(Af.bind(p)), s.push(p);
								}
							}
						}
						if (0 < s.length) return l(0 < o ? s.length > o ? "Waiting on Fonts and Images" : "Waiting on Fonts" : "Waiting on Images"), t = Promise.race([Promise.all(s), new Promise(function(e) {
							return setTimeout(e, NT);
						})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
						if (i(), n) return n.finished.then(a, a);
						a();
					},
					types: n
				});
				d.__reactViewTransition = f;
				var p = [];
				return f.ready.then(function() {
					for (var e = d.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
						var n = e[t], r = n.effect, i = r.pseudoElement;
						if (i != null && i.startsWith("::view-transition")) {
							p.push(n), n = r.getKeyframes();
							for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
								var l = n[c], u = l.width;
								if (i === void 0) i = u;
								else if (i !== u) {
									s = !1;
									break;
								}
								if (u = l.height, a === void 0) a = u;
								else if (a !== u) {
									s = !1;
									break;
								}
								delete l.width, delete l.height, l.transform === "none" && delete l.transform;
							}
							s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
						}
					}
					o();
				}, function(e) {
					d.__reactViewTransition === f && (d.__reactViewTransition = null);
					try {
						e = Of(e, !1), e !== null && c(e);
					} finally {
						r(), i(), o(), u();
					}
				}), f.finished.finally(function() {
					for (var e = 0; e < p.length; e++) p[e].cancel();
					d.__reactViewTransition === f && (d.__reactViewTransition = null), u(), s();
				}), f;
			} catch {
				return r(), i(), u(), o(), null;
			}
		}
		function Mf(e, t) {
			this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
		}
		function Nf(e) {
			return {
				name: e,
				group: new Mf("group", e),
				imagePair: new Mf("image-pair", e),
				old: new Mf("old", e),
				new: new Mf("new", e)
			};
		}
		function Pf(e) {
			this._fragmentFiber = e, this._observers = this._eventListeners = null;
		}
		function Ff(e, t, n, r) {
			return fe(e).addEventListener(t, n, r), !1;
		}
		function If(e, t, n, r) {
			return fe(e).removeEventListener(t, n, r), !1;
		}
		function Lf(e) {
			return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
				capture: e.capture,
				passive: e.passive
			} : e;
		}
		function Rf(e) {
			return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
		}
		function zf(e, t, n, r) {
			if (e.length === 0) return -1;
			r = Rf(r);
			for (var i = 0; i < e.length; i++) {
				var a = e[i];
				if (a.type === t && a.listener === n && Rf(a.optionsOrUseCapture) === r) return i;
			}
			return -1;
		}
		function Bf(e, t) {
			return e.tag !== 6 && (e = fe(e), pp(e, t));
		}
		function Vf(e, t) {
			return t.push(e), !1;
		}
		function Hf(e, t) {
			return e.tag !== 6 && (e = fe(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
		}
		function Uf(e, t) {
			return e.tag !== 6 && (e = fe(e), t.observe(e), !1);
		}
		function Wf(e, t) {
			return e.tag !== 6 && (e = fe(e), t.unobserve(e), !1);
		}
		function Gf(e, t, n) {
			PT.push({
				fragmentInstance: e,
				observer: t,
				instance: n
			}), FT || (FT = !0, mp(function() {
				FT = !1;
				var e = PT;
				PT = [];
				for (var t = 0; t < e.length; t++) {
					var n = e[t];
					n.observer.unobserve(n.instance);
				}
			}));
		}
		function Kf(e, t) {
			if (e.tag === 6) {
				e = e.stateNode;
				var n = e.ownerDocument.createRange();
				n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
			} else e = fe(e), t.push.apply(t, e.getClientRects());
			return !1;
		}
		function qf(e, t, n, r, i) {
			var a = mt(i);
			if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
				if (n = !!a) a: {
					for (; a !== null;) {
						if (a.tag === 7 && (a === t || a.alternate === t)) {
							n = !0;
							break a;
						}
						a = a.return;
					}
					n = !1;
				}
				return n;
			}
			if (e & Node.DOCUMENT_POSITION_CONTAINS) {
				if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
				a: {
					for (a = t, t = ce(t); a !== null;) {
						if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
							a = !0;
							break a;
						}
						a = a.return;
					}
					a = !1;
				}
				return a;
			}
			return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = ge(n, a, he), t === null ? t = !1 : (x(t, !0, pe, a, n), a = Tm, Tm = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = ge(r, a, he), t === null ? t = !1 : (x(t, !0, me, a, r), a = Tm, Em = Tm = null, t = a !== null)), t) : !1;
		}
		function Jf(e, t) {
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
		}
		function Yf(e, t) {
			return e = fe(e), Xf(e, t), !1;
		}
		function Xf(e, t) {
			e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
		}
		function Zf(e, t) {
			var n = t._eventListeners;
			if (n !== null) for (var r = 0; r < n.length; r++) {
				var i = n[r];
				e.addEventListener(i.type, i.attachedListener, Lf(i.optionsOrUseCapture));
			}
			e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
				for (var r = 0, i = 0; i < PT.length; i++) {
					var a = PT[i];
					(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (PT[r++] = a);
				}
				PT.length = r, n.observe(e);
			}), Xf(e, t));
		}
		function Qf(e, t) {
			var n = t._eventListeners;
			if (n !== null) for (var r = 0; r < n.length; r++) {
				var i = n[r];
				e.removeEventListener(i.type, i.attachedListener, Lf(i.optionsOrUseCapture));
			}
			e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
				typeof n.rootMargin == "string" ? Gf(t, n, e) : n.unobserve(e);
			}), e.reactFragments != null && e.reactFragments.delete(t));
		}
		function $f(e) {
			var t = e.firstChild;
			for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
				var n = t;
				switch (t = t.nextSibling, n.nodeName) {
					case "HTML":
					case "HEAD":
					case "BODY":
						$f(n), pt(n);
						continue;
					case "SCRIPT":
					case "STYLE": continue;
					case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
				}
				e.removeChild(n);
			}
		}
		function ep(e, t, n, r) {
			for (; e.nodeType === 1;) {
				var i = n;
				if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
					if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
				} else if (!r) {
					if (t === "input" && e.type === "hidden") {
						Ue(i.name, "name");
						var a = i.name == null ? null : "" + i.name;
						if (i.type === "hidden" && e.getAttribute("name") === a) return e;
					} else return e;
				} else if (!e[$h]) switch (t) {
					case "meta":
						if (!e.hasAttribute("itemprop")) break;
						return e;
					case "link":
						if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
						return e;
					case "style":
						if (e.hasAttribute("data-precedence")) break;
						return e;
					case "script":
						if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
						return e;
					default: return e;
				}
				if (e = ap(e.nextSibling), e === null) break;
			}
			return null;
		}
		function tp(e, t, n) {
			if (t === "") return null;
			for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = ap(e.nextSibling), e === null)) return null;
			return e;
		}
		function np(e, t) {
			for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = ap(e.nextSibling), e === null)) return null;
			return e;
		}
		function rp(e) {
			return e.data === cT || e.data === lT;
		}
		function R(e) {
			return e.data === uT || e.data === cT && e.ownerDocument.readyState !== gT;
		}
		function ip(e, t) {
			var n = e.ownerDocument;
			if (e.data === lT) e._reactRetry = t;
			else if (e.data !== cT || n.readyState !== gT) t();
			else {
				var r = function() {
					t(), n.removeEventListener("DOMContentLoaded", r);
				};
				n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
			}
		}
		function ap(e) {
			for (; e != null; e = e.nextSibling) {
				var t = e.nodeType;
				if (t === 1 || t === 3) break;
				if (t === 8) {
					if (t = e.data, t === oT || t === uT || t === cT || t === lT || t === iT || t === mT || t === hT) break;
					if (t === sT || t === aT) return null;
				}
			}
			return e;
		}
		function op(e) {
			if (e.nodeType === 1) {
				for (var t = e.nodeName.toLowerCase(), n = {}, r = e.attributes, i = 0; i < r.length; i++) {
					var a = r[i];
					n[Id(a.name)] = a.name.toLowerCase() === "style" ? Ld(e) : a.value;
				}
				return {
					type: t,
					props: n
				};
			}
			return e.nodeType === 8 ? e.data === iT ? {
				type: "Activity",
				props: {}
			} : {
				type: "Suspense",
				props: {}
			} : e.nodeValue;
		}
		function sp(e, t, n) {
			return n === null || !0 !== n[rT] ? (e.nodeValue === t ? e = null : (t = Md(t), e = Md(e.nodeValue) === t ? null : e.nodeValue), e) : null;
		}
		function cp(e) {
			e = e.nextSibling;
			for (var t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === sT || n === aT) {
						if (t === 0) return ap(e.nextSibling);
						t--;
					} else n !== oT && n !== uT && n !== cT && n !== lT && n !== iT || t++;
				}
				e = e.nextSibling;
			}
			return null;
		}
		function lp(e) {
			e = e.previousSibling;
			for (var t = 0; e;) {
				if (e.nodeType === 8) {
					var n = e.data;
					if (n === oT || n === uT || n === cT || n === lT || n === iT) {
						if (t === 0) return e;
						t--;
					} else n !== sT && n !== aT || t++;
				}
				e = e.previousSibling;
			}
			return null;
		}
		function up(e) {
			_m(e);
		}
		function dp(e) {
			_m(e);
		}
		function fp(e) {
			_m(e);
		}
		function pp(e, t) {
			function n() {
				r = !0;
			}
			if (e.ownerDocument.activeElement === e) return !0;
			var r = !1;
			try {
				e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
			} finally {
				e.ownerDocument.removeEventListener("focus", n, !0);
			}
			return r;
		}
		function mp(e) {
			jT(function() {
				jT(function(t) {
					return e(t);
				});
			});
		}
		function hp(e, t, n, r, i) {
			switch (i && pn(e, r.ancestorInfo), t = Jd(n), e) {
				case "html":
					if (e = t.documentElement, !e) throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");
					return e;
				case "head":
					if (e = t.head, !e) throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");
					return e;
				case "body":
					if (e = t.body, !e) throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");
					return e;
				default: throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.");
			}
		}
		function gp(e, t, n, r) {
			if (!n[Jh] && ht(n)) {
				var i = n.tagName.toLowerCase();
				console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.", i, i, i);
			}
			switch (e) {
				case "html":
				case "head":
				case "body": break;
				default: console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.");
			}
			for (i = n.attributes; i.length;) n.removeAttributeNode(i[0]);
			L(n, e, t), n[Kh] = r, n[qh] = t;
		}
		function _p(e, t, n) {
			for (var r in n) {
				var i = n[r];
				n.hasOwnProperty(r) && i != null && I(e, t, r, null, tT, i);
			}
			n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === En && (e.onclick = null), pt(e);
		}
		function vp(e) {
			for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
			pt(e);
		}
		function yp(e) {
			if (typeof e.getRootNode == "function") {
				var t = e.getRootNode();
				if (t.nodeType === 9 || t.nodeType === 11) return t;
			}
			return e.nodeType === 9 ? e : e.ownerDocument;
		}
		function bp(e, t, n) {
			var r = GT;
			if (r && typeof t == "string" && t) {
				var i = Pt(t);
				i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), UT.has(i) || (UT.add(i), e = {
					rel: e,
					crossOrigin: n,
					href: t
				}, r.querySelector(i) === null && (t = r.createElement("link"), L(t, "link", e), vt(t), r.head.appendChild(t)));
			}
		}
		function xp(e, t, n, r) {
			var i = (i = th.current) ? yp(i) : null;
			if (!i) throw Error("\"resourceRoot\" was expected to exist. This is a bug in React.");
			switch (e) {
				case "meta":
				case "title": return null;
				case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Cp(n.href), t = _t(i).hoistableStyles, r = t.get(n), r || (r = {
					type: "style",
					instance: null,
					count: 0,
					state: null
				}, t.set(n, r)), r) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
				case "link":
					if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
						e = Cp(n.href);
						var a = _t(i).hoistableStyles, o = a.get(e);
						if (o || (i = i.ownerDocument || i, o = {
							type: "stylesheet",
							instance: null,
							count: 0,
							state: {
								loading: LT,
								preload: null
							}
						}, a.set(e, o), (a = i.querySelector(wp(e))) ? a._p || (o.instance = a, o.state.loading = RT | VT) : (a = HT.get(e), a || (a = {
							rel: "preload",
							as: "style",
							href: n.href,
							crossOrigin: n.crossOrigin,
							integrity: n.integrity,
							media: n.media,
							hrefLang: n.hrefLang,
							referrerPolicy: n.referrerPolicy
						}, HT.set(e, a)), Ep(i, e, a, o.state))), t && r === null) throw n = "\n\n  - " + Sp(t) + "\n  + " + Sp(n), Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n);
						return o;
					}
					if (t && r !== null) throw n = "\n\n  - " + Sp(t) + "\n  + " + Sp(n), Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + n);
					return null;
				case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Dp(n), t = _t(i).hoistableScripts, r = t.get(n), r || (r = {
					type: "script",
					instance: null,
					count: 0,
					state: null
				}, t.set(n, r)), r) : {
					type: "void",
					instance: null,
					count: 0,
					state: null
				};
				default: throw Error("getResource encountered a type it did not expect: \"" + e + "\". this is a bug in React.");
			}
		}
		function Sp(e) {
			var t = 0, n = "<link";
			return typeof e.rel == "string" ? (t++, n += " rel=\"" + e.rel + "\"") : _h.call(e, "rel") && (t++, n += " rel=\"" + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + "\""), typeof e.href == "string" ? (t++, n += " href=\"" + e.href + "\"") : _h.call(e, "href") && (t++, n += " href=\"" + (e.href === null ? "null" : "invalid type " + typeof e.href) + "\""), typeof e.precedence == "string" ? (t++, n += " precedence=\"" + e.precedence + "\"") : _h.call(e, "precedence") && (t++, n += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (n += " ..."), n + " />";
		}
		function Cp(e) {
			return "href=\"" + Pt(e) + "\"";
		}
		function wp(e) {
			return "link[rel=\"stylesheet\"][" + e + "]";
		}
		function Tp(e) {
			return z({}, e, {
				"data-precedence": e.precedence,
				precedence: null
			});
		}
		function Ep(e, t, n, r) {
			if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
				if (!0 !== t[eg]) {
					r.loading = RT;
					return;
				}
			} else t = e.createElement("link"), t[eg] = !0, t.onload = t.onerror = yt.bind(null, t), L(t, "link", n), vt(t), e.head.appendChild(t);
			r.preload = t, t.addEventListener("load", function() {
				return r.loading |= RT;
			}), t.addEventListener("error", function() {
				return r.loading |= zT;
			});
		}
		function Dp(e) {
			return "[src=\"" + Pt(e) + "\"]";
		}
		function Op(e) {
			return "script[async]" + e;
		}
		function kp(e, t, n) {
			if (t.count++, t.instance === null) switch (t.type) {
				case "style":
					var r = e.querySelector("style[data-href~=\"" + Pt(n.href) + "\"]");
					if (r) return t.instance = r, vt(r), r;
					var i = z({}, n, {
						"data-href": n.href,
						"data-precedence": n.precedence,
						href: null,
						precedence: null
					});
					return r = (e.ownerDocument || e).createElement("style"), vt(r), L(r, "style", i), Ap(r, n.precedence, e), t.instance = r;
				case "stylesheet":
					i = Cp(n.href);
					var a = e.querySelector(wp(i));
					if (a) return t.state.loading |= VT, t.instance = a, vt(a), a;
					r = Tp(n), (i = HT.get(i)) && jp(r, i), a = (e.ownerDocument || e).createElement("link"), vt(a);
					var o = a;
					return o._p = new Promise(function(e, t) {
						o.onload = e, o.onerror = t;
					}), L(a, "link", r), t.state.loading |= VT, Ap(a, n.precedence, e), t.instance = a;
				case "script": return a = Dp(n.src), (i = e.querySelector(Op(a))) ? (t.instance = i, vt(i), i) : (r = n, (i = HT.get(a)) && (r = z({}, n), Mp(r, i)), e = e.ownerDocument || e, i = e.createElement("script"), vt(i), L(i, "link", r), e.head.appendChild(i), t.instance = i);
				case "void": return null;
				default: throw Error("acquireResource encountered a resource type it did not expect: \"" + t.type + "\". this is a bug in React.");
			}
			else t.type === "stylesheet" && (t.state.loading & VT) === LT && (r = t.instance, t.state.loading |= VT, Ap(r, n.precedence, e));
			return t.instance;
		}
		function Ap(e, t, n) {
			for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
				var s = r[o];
				if (s.dataset.precedence === t) a = s;
				else if (a !== i) break;
			}
			a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
		}
		function jp(e, t) {
			e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
		}
		function Mp(e, t) {
			e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
		}
		function Np(e, t, n) {
			if (KT === null) {
				var r = /* @__PURE__ */ new Map(), i = KT = /* @__PURE__ */ new Map();
				i.set(n, r);
			} else i = KT, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
			if (r.has(e)) return r;
			for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
				var a = n[i];
				if (!(a[$h] || a[Kh] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== Rg) {
					var o = a.getAttribute(t) || "";
					o = e + o;
					var s = r.get(o);
					s ? s.push(a) : r.set(o, [a]);
				}
			}
			return r;
		}
		function Pp(e, t, n) {
			e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
		}
		function Fp(e, t, n) {
			var r = !n.ancestorInfo.containerTagInScope;
			if (n.context === yT || t.itemProp != null) return !r || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.", e, e), !1;
			switch (e) {
				case "meta":
				case "title": return !0;
				case "style":
					if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
						r && console.error("Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel=\"stylesheet\" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence=\"default\"` and `href=\"some unique resource identifier\"`.");
						break;
					}
					return !0;
				case "link":
					if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
						if (t.rel === "stylesheet" && typeof t.precedence == "string") {
							e = t.href;
							var i = t.onError, a = t.disabled;
							n = [], t.onLoad && n.push("`onLoad`"), i && n.push("`onError`"), a != null && n.push("`disabled`"), i = Gd(n, "and"), i += n.length === 1 ? " prop" : " props", a = n.length === 1 ? "an " + i : "the " + i, n.length && console.error("React encountered a <link rel=\"stylesheet\" href=\"%s\" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.", e, a, i);
						}
						r && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag") : (t.onError || t.onLoad) && console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));
						break;
					}
					switch (t.rel) {
						case "stylesheet": return e = t.precedence, t = t.disabled, typeof e != "string" && r && console.error("Cannot render a <link rel=\"stylesheet\" /> outside the main document without knowing its precedence. Consider adding precedence=\"default\" or moving it into the root <head> tag."), typeof e == "string" && t == null;
						default: return !0;
					}
				case "script":
					if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
						r && (e ? t.onLoad || t.onError ? console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>.") : console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>.") : console.error("Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async=\"\" or moving it into the root <head> tag."));
						break;
					}
					return !0;
				case "noscript":
				case "template": r && console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.", e);
			}
			return !1;
		}
		function Ip(e, t) {
			return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
		}
		function Lp(e) {
			return e.type !== "stylesheet" || (e.state.loading & BT) !== LT;
		}
		function Rp(e) {
			return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
		}
		function zp(e, t) {
			typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Rp(t), e.suspenseyImages.push(t)), e = Wp.bind(e), t.decode().then(e, e));
		}
		function Bp(e, t, n, r) {
			if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && (n.state.loading & VT) === LT) {
				if (n.instance === null) {
					var i = Cp(r.href), a = t.querySelector(wp(i));
					if (a) {
						t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = Up.bind(e), t.then(e, e)), n.state.loading |= VT, n.instance = a, vt(a);
						return;
					}
					a = t.ownerDocument || t, r = Tp(r), (i = HT.get(i)) && jp(r, i), a = a.createElement("link"), vt(a);
					var o = a;
					o._p = new Promise(function(e, t) {
						o.onload = e, o.onerror = t;
					}), L(a, "link", r), n.instance = a;
				}
				e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & BT) === LT && (e.count++, n = Up.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
			}
		}
		function Vp(e, t) {
			return e.stylesheets && e.count === 0 && Gp(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
				var r = setTimeout(function() {
					if (e.stylesheets && Gp(e, e.stylesheets), e.unsuspend) {
						var t = e.unsuspend;
						e.unsuspend = null, t();
					}
				}, qT + t);
				0 < e.imgBytes && XT === 0 && (XT = 125 * qd() * YT);
				var i = setTimeout(function() {
					if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Gp(e, e.stylesheets), e.unsuspend)) {
						var t = e.unsuspend;
						e.unsuspend = null, t();
					}
				}, (e.imgBytes > XT ? 50 : JT) + t);
				return e.unsuspend = n, function() {
					e.unsuspend = null, clearTimeout(r), clearTimeout(i);
				};
			} : null;
		}
		function Hp(e) {
			if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
				if (e.stylesheets) Gp(e, e.stylesheets);
				else if (e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}
		}
		function Up() {
			this.count--, Hp(this);
		}
		function Wp() {
			this.imgCount--, Hp(this);
		}
		function Gp(e, t) {
			e.stylesheets = null, e.unsuspend !== null && (e.count++, QT = /* @__PURE__ */ new Map(), t.forEach(Kp, e), QT = null, Up.call(e));
		}
		function Kp(e, t) {
			if (!(t.state.loading & VT)) {
				var n = QT.get(e);
				if (n) var r = n.get(ZT);
				else {
					n = /* @__PURE__ */ new Map(), QT.set(e, n);
					for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
						var o = i[a];
						(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
					}
					r && n.set(ZT, r);
				}
				i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(ZT, i), n.set(o, i), this.count++, r = Up.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= VT;
			}
		}
		function qp(e, t, n, r, i, a, o, s, c) {
			for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = kT, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = tt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tt(0), this.hiddenUpdates = tt(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
			this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
		}
		function Jp(e, t, n, r, i, a, o, s, c, l, u, d) {
			return e = new qp(e, t, n, o, c, l, u, d, s), t = Hv, !0 === a && (t |= Uv | Wv), t |= W, a = _(3, null, null, t), e.current = a, a.stateNode = e, t = ki(), Ai(t), e.pooledCache = t, Ai(t), a.memoizedState = {
				element: r,
				isDehydrated: n,
				cache: t
			}, wa(a), e;
		}
		function Yp(e) {
			return e ? (e = zv, e) : zv;
		}
		function Xp(e, t, n, r, i, a) {
			if (Mh && typeof Mh.onScheduleFiberRoot == "function") try {
				Mh.onScheduleFiberRoot(jh, r, n);
			} catch (e) {
				Nh || (Nh = !0, console.error("React instrumentation encountered an error: %o", e));
			}
			i = Yp(i), r.context === null ? r.context = i : r.pendingContext = i, gh && hh !== null && !oE && (oE = !0, console.error("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.", S(hh) || "Unknown")), r = Ea(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.", a), r.callback = a), n = Da(e, r, t), n !== null && (Pi(t, "root.render()", null), A(n, e, t), Oa(n, e, t));
		}
		function Zp(e, t) {
			if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
				var n = e.retryLane;
				e.retryLane = n !== 0 && n < t ? n : t;
			}
		}
		function Qp(e, t) {
			Zp(e, t), (e = e.alternate) && Zp(e, t);
		}
		function $p(e) {
			if (e.tag === 13 || e.tag === 31) {
				var t = Ir(e, 67108864);
				t !== null && A(t, e, 67108864), Qp(e, 67108864);
			}
		}
		function em(e) {
			if (e.tag === 13 || e.tag === 31) {
				var t = su(e);
				t = st(t);
				var n = Ir(e, t);
				n !== null && A(n, e, t), Qp(e, t);
			}
		}
		function tm() {
			return hh;
		}
		function nm(e, t, n, r) {
			var i = B.T;
			B.T = null;
			var a = Jm.p;
			try {
				Jm.p = Vh, im(e, t, n, r);
			} finally {
				Jm.p = a, B.T = i;
			}
		}
		function rm(e, t, n, r) {
			var i = B.T;
			B.T = null;
			var a = Jm.p;
			try {
				Jm.p = Hh, im(e, t, n, r);
			} finally {
				Jm.p = a, B.T = i;
			}
		}
		function im(e, t, n, r) {
			if (_E) {
				var i = am(r);
				if (i === null) bd(e, t, r, vE, n), cm(e, r);
				else if (um(i, e, t, n, r)) r.stopPropagation();
				else if (cm(e, r), t & 4 && -1 < EE.indexOf(e)) {
					for (; i !== null;) {
						var a = ht(i);
						if (a !== null) switch (a.tag) {
							case 3:
								if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
									var o = Ye(a.pendingLanes);
									if (o !== 0) {
										var s = a;
										for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
											var c = 1 << 31 - Fh(o);
											s.entanglements[1] |= c, o &= ~c;
										}
										od(a), (Z & (aC | oC)) === iC && (UC = Sh() + WC, sd(0, !1));
									}
								}
								break;
							case 31:
							case 13: s = Ir(a, 2), s !== null && A(s, a, 2), mu(), Qp(a, 2);
						}
						if (a = am(r), a === null && bd(e, t, r, vE, n), a === i) break;
						i = a;
					}
					i !== null && r.stopPropagation();
				} else bd(e, t, r, null, n);
			}
		}
		function am(e) {
			return e = Dn(e), om(e);
		}
		function om(e) {
			if (vE = null, e = mt(e), e !== null) {
				var t = te(e);
				if (t === null) e = null;
				else {
					var n = t.tag;
					if (n === 13) {
						if (e = ne(t), e !== null) return e;
						e = null;
					} else if (n === 31) {
						if (e = re(t), e !== null) return e;
						e = null;
					} else if (n === 3) {
						if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
						e = null;
					} else t !== e && (e = null);
				}
			}
			return vE = e, null;
		}
		function sm(e) {
			switch (e) {
				case "beforetoggle":
				case "cancel":
				case "click":
				case "close":
				case "contextmenu":
				case "copy":
				case "cut":
				case "auxclick":
				case "dblclick":
				case "dragend":
				case "dragstart":
				case "drop":
				case "focusin":
				case "focusout":
				case "input":
				case "invalid":
				case "keydown":
				case "keypress":
				case "keyup":
				case "mousedown":
				case "mouseup":
				case "paste":
				case "pause":
				case "play":
				case "pointercancel":
				case "pointerdown":
				case "pointerup":
				case "ratechange":
				case "reset":
				case "seeked":
				case "submit":
				case "toggle":
				case "touchcancel":
				case "touchend":
				case "touchstart":
				case "volumechange":
				case "change":
				case "selectionchange":
				case "textInput":
				case "compositionstart":
				case "compositionend":
				case "compositionupdate":
				case "beforeblur":
				case "afterblur":
				case "beforeinput":
				case "blur":
				case "fullscreenchange":
				case "fullscreenerror":
				case "focus":
				case "hashchange":
				case "popstate":
				case "select":
				case "selectstart": return Vh;
				case "drag":
				case "dragenter":
				case "dragexit":
				case "dragleave":
				case "dragover":
				case "mousemove":
				case "mouseout":
				case "mouseover":
				case "pointermove":
				case "pointerout":
				case "pointerover":
				case "resize":
				case "scroll":
				case "touchmove":
				case "wheel":
				case "mouseenter":
				case "mouseleave":
				case "pointerenter":
				case "pointerleave": return Hh;
				case "message": switch (Ch()) {
					case wh: return Vh;
					case Th: return Hh;
					case Eh:
					case Dh: return Uh;
					case Oh: return Wh;
					default: return Uh;
				}
				default: return Uh;
			}
		}
		function cm(e, t) {
			switch (e) {
				case "focusin":
				case "focusout":
					bE = null;
					break;
				case "dragenter":
				case "dragleave":
					xE = null;
					break;
				case "mouseover":
				case "mouseout":
					SE = null;
					break;
				case "pointerover":
				case "pointerout":
					CE.delete(t.pointerId);
					break;
				case "gotpointercapture":
				case "lostpointercapture": wE.delete(t.pointerId);
			}
		}
		function lm(e, t, n, r, i, a) {
			return e === null || e.nativeEvent !== a ? (e = {
				blockedOn: t,
				domEventName: n,
				eventSystemFlags: r,
				nativeEvent: a,
				targetContainers: [i]
			}, t !== null && (t = ht(t), t !== null && $p(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
		}
		function um(e, t, n, r, i) {
			switch (t) {
				case "focusin": return bE = lm(bE, e, t, n, r, i), !0;
				case "dragenter": return xE = lm(xE, e, t, n, r, i), !0;
				case "mouseover": return SE = lm(SE, e, t, n, r, i), !0;
				case "pointerover":
					var a = i.pointerId;
					return CE.set(a, lm(CE.get(a) || null, e, t, n, r, i)), !0;
				case "gotpointercapture": return a = i.pointerId, wE.set(a, lm(wE.get(a) || null, e, t, n, r, i)), !0;
			}
			return !1;
		}
		function dm(e) {
			var t = mt(e.target);
			if (t !== null) {
				var n = te(t);
				if (n !== null) {
					if (t = n.tag, t === 13) {
						if (t = ne(n), t !== null) {
							e.blockedOn = t, ft(e.priority, function() {
								em(n);
							});
							return;
						}
					} else if (t === 31) {
						if (t = re(n), t !== null) {
							e.blockedOn = t, ft(e.priority, function() {
								em(n);
							});
							return;
						}
					} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
						e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
						return;
					}
				}
			}
			e.blockedOn = null;
		}
		function fm(e) {
			if (e.blockedOn !== null) return !1;
			for (var t = e.targetContainers; 0 < t.length;) {
				var n = am(e.nativeEvent);
				if (n === null) {
					n = e.nativeEvent;
					var r = new n.constructor(n.type, n), i = r;
					Qg !== null && console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Qg = i, n.target.dispatchEvent(r), Qg === null && console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Qg = null;
				} else return t = ht(n), t !== null && $p(t), e.blockedOn = n, !1;
				t.shift();
			}
			return !0;
		}
		function pm(e, t, n) {
			fm(e) && n.delete(t);
		}
		function mm() {
			yE = !1, bE !== null && fm(bE) && (bE = null), xE !== null && fm(xE) && (xE = null), SE !== null && fm(SE) && (SE = null), CE.forEach(pm), wE.forEach(pm);
		}
		function hm(e, t) {
			e.blockedOn === t && (e.blockedOn = null, yE || (yE = !0, Sm.unstable_scheduleCallback(Sm.unstable_NormalPriority, mm)));
		}
		function gm(e) {
			DE !== e && (DE = e, Sm.unstable_scheduleCallback(Sm.unstable_NormalPriority, function() {
				DE === e && (DE = null);
				for (var t = 0; t < e.length; t += 3) {
					var n = e[t], r = e[t + 1], i = e[t + 2];
					if (typeof r != "function") {
						if (om(r || n) === null) continue;
						break;
					}
					var a = ht(n);
					a !== null && (e.splice(t, 3), t -= 3, n = {
						pending: !0,
						data: i,
						method: n.method,
						action: r
					}, Object.freeze(n), cs(a, n, r, i));
				}
			}));
		}
		function _m(e) {
			function t(t) {
				return hm(t, e);
			}
			bE !== null && hm(bE, e), xE !== null && hm(xE, e), SE !== null && hm(SE, e), CE.forEach(t), wE.forEach(t);
			for (var n = 0; n < TE.length; n++) {
				var r = TE[n];
				r.blockedOn === e && (r.blockedOn = null);
			}
			for (; 0 < TE.length && (n = TE[0], n.blockedOn === null);) dm(n), n.blockedOn === null && TE.shift();
			if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
				var i = n[r], a = n[r + 1], o = i[qh] || null;
				if (typeof a == "function") o || gm(n);
				else if (o) {
					var s = null;
					if (a && a.hasAttribute("formAction")) {
						if (i = a, o = a[qh] || null) s = o.formAction;
						else if (om(i) !== null) continue;
					} else s = o.action;
					typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), gm(n);
				}
			}
		}
		function vm() {
			function e(e) {
				e.canIntercept && e.info === "react-transition" && e.intercept({
					handler: function() {
						return new Promise(function(e) {
							return i = e;
						});
					},
					focusReset: "manual",
					scroll: "manual"
				});
			}
			function t() {
				i !== null && (i(), i = null), r || setTimeout(n, 20);
			}
			function n() {
				if (!r && !navigation.transition) {
					var e = navigation.currentEntry;
					e && e.url != null && navigation.navigate(e.url, {
						state: e.getState(),
						info: "react-transition",
						history: "replace"
					});
				}
			}
			if (typeof navigation == "object") {
				var r = !1, i = null;
				return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
					r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
				};
			}
		}
		function ym(e) {
			this._internalRoot = e;
		}
		function bm(e) {
			this._internalRoot = e;
		}
		function xm(e) {
			e[Jh] && (e._reactRootContainer ? console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var Sm = s(), Cm = r(), wm = u(), Tm = null, Em = null, z = Object.assign, Dm = Symbol.for("react.element"), Om = Symbol.for("react.transitional.element"), km = Symbol.for("react.portal"), Am = Symbol.for("react.fragment"), jm = Symbol.for("react.strict_mode"), Mm = Symbol.for("react.profiler"), Nm = Symbol.for("react.consumer"), Pm = Symbol.for("react.context"), Fm = Symbol.for("react.forward_ref"), Im = Symbol.for("react.suspense"), Lm = Symbol.for("react.suspense_list"), Rm = Symbol.for("react.memo"), zm = Symbol.for("react.lazy"), Bm = Symbol.for("react.activity"), Vm = Symbol.for("react.legacy_hidden"), Hm = Symbol.for("react.memo_cache_sentinel"), Um = Symbol.for("react.view_transition"), Wm = Symbol.for("react.recoverable"), Gm = Symbol.iterator, Km = Symbol.for("react.client.reference"), qm = Array.isArray, B = Cm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Jm = wm.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ym = Object.freeze({
			pending: !1,
			data: null,
			method: null,
			action: null
		}), Xm = [], Zm = [], Qm = -1, $m = be(null), eh = be(null), th = be(null), nh = be(null), rh = 0, ih, ah, oh, sh, ch, lh, uh;
		ke.__reactDisabledLog = !0;
		var dh, fh, ph = !1, mh = new (typeof WeakMap == "function" ? WeakMap : Map)(), hh = null, gh = !1, _h = Object.prototype.hasOwnProperty, vh = Sm.unstable_scheduleCallback, yh = Sm.unstable_cancelCallback, bh = Sm.unstable_shouldYield, xh = Sm.unstable_requestPaint, Sh = Sm.unstable_now, Ch = Sm.unstable_getCurrentPriorityLevel, wh = Sm.unstable_ImmediatePriority, Th = Sm.unstable_UserBlockingPriority, Eh = Sm.unstable_NormalPriority, Dh = Sm.unstable_LowPriority, Oh = Sm.unstable_IdlePriority, kh = Sm.log, Ah = Sm.unstable_setDisableYieldValue, jh = null, Mh = null, Nh = !1, Ph = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Fh = Math.clz32 ? Math.clz32 : Je, Ih = Math.log, Lh = Math.LN2, Rh = 256, zh = 262144, Bh = 4194304, Vh = 2, Hh = 8, Uh = 32, Wh = 268435456, Gh = Math.random().toString(36).slice(2), Kh = "__reactFiber$" + Gh, qh = "__reactProps$" + Gh, Jh = "__reactContainer$" + Gh, Yh = "__reactEvents$" + Gh, Xh = "__reactListeners$" + Gh, Zh = "__reactHandles$" + Gh, Qh = "__reactResources$" + Gh, $h = "__reactMarker$" + Gh, eg = "__reactLoad$" + Gh, tg = /* @__PURE__ */ new Set(), ng = {}, rg = {}, ig = {
			button: !0,
			checkbox: !0,
			image: !0,
			hidden: !0,
			radio: !0,
			reset: !0,
			submit: !0
		}, ag = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), og = {}, sg = {}, cg = !1, lg = /[\n"\\]/g, ug = !1, dg = !1, fg = !1, pg = !1, mg = !1, hg = !1, gg = ["value", "defaultValue"], _g = !1, vg = /["'&<>\n\t]|^\s|\s$/, yg = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "), bg = "applet caption html table td th marquee object select template foreignObject desc title".split(" "), xg = bg.concat(["button"]), Sg = "dd dt li option optgroup p rp rt".split(" "), Cg = {
			current: null,
			formTag: null,
			aTagInScope: null,
			buttonTagInScope: null,
			nobrTagInScope: null,
			pTagInButtonScope: null,
			listItemTagAutoclosing: null,
			dlItemTagAutoclosing: null,
			containerTagInScope: null,
			implicitRootScope: !1
		}, wg = {}, Tg = {
			animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),
			background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),
			backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
			border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),
			borderBlock: "borderBlockEndColor borderBlockEndStyle borderBlockEndWidth borderBlockStartColor borderBlockStartStyle borderBlockStartWidth".split(" "),
			borderBlockColor: ["borderBlockEndColor", "borderBlockStartColor"],
			borderBlockEnd: [
				"borderBlockEndColor",
				"borderBlockEndStyle",
				"borderBlockEndWidth"
			],
			borderBlockStart: [
				"borderBlockStartColor",
				"borderBlockStartStyle",
				"borderBlockStartWidth"
			],
			borderBlockStyle: ["borderBlockEndStyle", "borderBlockStartStyle"],
			borderBlockWidth: ["borderBlockEndWidth", "borderBlockStartWidth"],
			borderBottom: [
				"borderBottomColor",
				"borderBottomStyle",
				"borderBottomWidth"
			],
			borderColor: [
				"borderBottomColor",
				"borderLeftColor",
				"borderRightColor",
				"borderTopColor"
			],
			borderImage: [
				"borderImageOutset",
				"borderImageRepeat",
				"borderImageSlice",
				"borderImageSource",
				"borderImageWidth"
			],
			borderInline: "borderInlineEndColor borderInlineEndStyle borderInlineEndWidth borderInlineStartColor borderInlineStartStyle borderInlineStartWidth".split(" "),
			borderInlineColor: ["borderInlineEndColor", "borderInlineStartColor"],
			borderInlineEnd: [
				"borderInlineEndColor",
				"borderInlineEndStyle",
				"borderInlineEndWidth"
			],
			borderInlineStart: [
				"borderInlineStartColor",
				"borderInlineStartStyle",
				"borderInlineStartWidth"
			],
			borderInlineStyle: ["borderInlineEndStyle", "borderInlineStartStyle"],
			borderInlineWidth: ["borderInlineEndWidth", "borderInlineStartWidth"],
			borderLeft: [
				"borderLeftColor",
				"borderLeftStyle",
				"borderLeftWidth"
			],
			borderRadius: [
				"borderBottomLeftRadius",
				"borderBottomRightRadius",
				"borderTopLeftRadius",
				"borderTopRightRadius"
			],
			borderRight: [
				"borderRightColor",
				"borderRightStyle",
				"borderRightWidth"
			],
			borderStyle: [
				"borderBottomStyle",
				"borderLeftStyle",
				"borderRightStyle",
				"borderTopStyle"
			],
			borderTop: [
				"borderTopColor",
				"borderTopStyle",
				"borderTopWidth"
			],
			borderWidth: [
				"borderBottomWidth",
				"borderLeftWidth",
				"borderRightWidth",
				"borderTopWidth"
			],
			colorAdjust: ["printColorAdjust"],
			columnRule: [
				"columnRuleColor",
				"columnRuleStyle",
				"columnRuleWidth"
			],
			columns: ["columnCount", "columnWidth"],
			containIntrinsicSize: ["containIntrinsicHeight", "containIntrinsicWidth"],
			container: ["containerName", "containerType"],
			flex: [
				"flexBasis",
				"flexGrow",
				"flexShrink"
			],
			flexFlow: ["flexDirection", "flexWrap"],
			font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),
			fontSynthesis: [
				"fontSynthesisPosition",
				"fontSynthesisSmallCaps",
				"fontSynthesisStyle",
				"fontSynthesisWeight"
			],
			fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),
			gap: ["columnGap", "rowGap"],
			grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),
			gridArea: [
				"gridColumnEnd",
				"gridColumnStart",
				"gridRowEnd",
				"gridRowStart"
			],
			gridColumn: ["gridColumnEnd", "gridColumnStart"],
			gridColumnGap: ["columnGap"],
			gridGap: ["columnGap", "rowGap"],
			gridRow: ["gridRowEnd", "gridRowStart"],
			gridRowGap: ["rowGap"],
			gridTemplate: [
				"gridTemplateAreas",
				"gridTemplateColumns",
				"gridTemplateRows"
			],
			inset: [
				"bottom",
				"left",
				"right",
				"top"
			],
			insetBlock: ["insetBlockEnd", "insetBlockStart"],
			insetInline: ["insetInlineEnd", "insetInlineStart"],
			listStyle: [
				"listStyleImage",
				"listStylePosition",
				"listStyleType"
			],
			margin: [
				"marginBottom",
				"marginLeft",
				"marginRight",
				"marginTop"
			],
			marginBlock: ["marginBlockEnd", "marginBlockStart"],
			marginInline: ["marginInlineEnd", "marginInlineStart"],
			marker: [
				"markerEnd",
				"markerMid",
				"markerStart"
			],
			mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),
			maskPosition: ["maskPositionX", "maskPositionY"],
			offset: [
				"offsetAnchor",
				"offsetDistance",
				"offsetPath",
				"offsetPosition",
				"offsetRotate"
			],
			outline: [
				"outlineColor",
				"outlineStyle",
				"outlineWidth"
			],
			overflow: ["overflowX", "overflowY"],
			overscrollBehavior: ["overscrollBehaviorX", "overscrollBehaviorY"],
			padding: [
				"paddingBottom",
				"paddingLeft",
				"paddingRight",
				"paddingTop"
			],
			paddingBlock: ["paddingBlockEnd", "paddingBlockStart"],
			paddingInline: ["paddingInlineEnd", "paddingInlineStart"],
			pageBreakAfter: ["breakAfter"],
			pageBreakBefore: ["breakBefore"],
			pageBreakInside: ["breakInside"],
			placeContent: ["alignContent", "justifyContent"],
			placeItems: ["alignItems", "justifyItems"],
			placeSelf: ["alignSelf", "justifySelf"],
			scrollMargin: [
				"scrollMarginBottom",
				"scrollMarginLeft",
				"scrollMarginRight",
				"scrollMarginTop"
			],
			scrollMarginBlock: ["scrollMarginBlockEnd", "scrollMarginBlockStart"],
			scrollMarginInline: ["scrollMarginInlineEnd", "scrollMarginInlineStart"],
			scrollPadding: [
				"scrollPaddingBottom",
				"scrollPaddingLeft",
				"scrollPaddingRight",
				"scrollPaddingTop"
			],
			scrollPaddingBlock: ["scrollPaddingBlockEnd", "scrollPaddingBlockStart"],
			scrollPaddingInline: ["scrollPaddingInlineEnd", "scrollPaddingInlineStart"],
			textDecoration: [
				"textDecorationColor",
				"textDecorationLine",
				"textDecorationStyle",
				"textDecorationThickness"
			],
			textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
			textWrap: ["textWrapMode", "textWrapStyle"],
			transition: [
				"transitionBehavior",
				"transitionDelay",
				"transitionDuration",
				"transitionProperty",
				"transitionTimingFunction"
			],
			verticalAlign: [
				"alignmentBaseline",
				"baselineShift",
				"baselineSource"
			],
			whiteSpace: ["textWrapMode", "whiteSpaceCollapse"],
			wordWrap: ["overflowWrap"]
		}, Eg = /([A-Z])/g, Dg = /^ms-/, Og = /^(?:webkit|moz|o)[A-Z]/, kg = /^-ms-/, Ag = /-(.)/g, jg = /;\s*$/, Mg = {}, Ng = {}, Pg = !1, Fg = !1, Ig = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")), Lg = "http://www.w3.org/1998/Math/MathML", Rg = "http://www.w3.org/2000/svg", zg = /* @__PURE__ */ new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["maskType", "mask-type"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"]
		]), Bg = {
			accept: "accept",
			acceptcharset: "acceptCharset",
			"accept-charset": "acceptCharset",
			accesskey: "accessKey",
			action: "action",
			allowfullscreen: "allowFullScreen",
			alt: "alt",
			as: "as",
			async: "async",
			autocapitalize: "autoCapitalize",
			autocomplete: "autoComplete",
			autocorrect: "autoCorrect",
			autofocus: "autoFocus",
			autoplay: "autoPlay",
			autosave: "autoSave",
			capture: "capture",
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			challenge: "challenge",
			charset: "charSet",
			checked: "checked",
			children: "children",
			cite: "cite",
			class: "className",
			classid: "classID",
			classname: "className",
			cols: "cols",
			colspan: "colSpan",
			content: "content",
			contenteditable: "contentEditable",
			contextmenu: "contextMenu",
			controls: "controls",
			controlslist: "controlsList",
			coords: "coords",
			credentialless: "credentialless",
			crossorigin: "crossOrigin",
			dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
			data: "data",
			datetime: "dateTime",
			default: "default",
			defaultchecked: "defaultChecked",
			defaultvalue: "defaultValue",
			defer: "defer",
			dir: "dir",
			disabled: "disabled",
			disablepictureinpicture: "disablePictureInPicture",
			disableremoteplayback: "disableRemotePlayback",
			download: "download",
			draggable: "draggable",
			enctype: "encType",
			enterkeyhint: "enterKeyHint",
			fetchpriority: "fetchPriority",
			for: "htmlFor",
			form: "form",
			formmethod: "formMethod",
			formaction: "formAction",
			formenctype: "formEncType",
			formnovalidate: "formNoValidate",
			formtarget: "formTarget",
			frameborder: "frameBorder",
			headers: "headers",
			height: "height",
			hidden: "hidden",
			high: "high",
			href: "href",
			hreflang: "hrefLang",
			htmlfor: "htmlFor",
			httpequiv: "httpEquiv",
			"http-equiv": "httpEquiv",
			icon: "icon",
			id: "id",
			imagesizes: "imageSizes",
			imagesrcset: "imageSrcSet",
			inert: "inert",
			innerhtml: "innerHTML",
			inputmode: "inputMode",
			integrity: "integrity",
			is: "is",
			itemid: "itemID",
			itemprop: "itemProp",
			itemref: "itemRef",
			itemscope: "itemScope",
			itemtype: "itemType",
			keyparams: "keyParams",
			keytype: "keyType",
			kind: "kind",
			label: "label",
			lang: "lang",
			list: "list",
			loop: "loop",
			low: "low",
			manifest: "manifest",
			marginwidth: "marginWidth",
			marginheight: "marginHeight",
			max: "max",
			maxlength: "maxLength",
			media: "media",
			mediagroup: "mediaGroup",
			method: "method",
			min: "min",
			minlength: "minLength",
			multiple: "multiple",
			muted: "muted",
			name: "name",
			nomodule: "noModule",
			nonce: "nonce",
			novalidate: "noValidate",
			open: "open",
			optimum: "optimum",
			pattern: "pattern",
			placeholder: "placeholder",
			playsinline: "playsInline",
			poster: "poster",
			preload: "preload",
			profile: "profile",
			radiogroup: "radioGroup",
			readonly: "readOnly",
			referrerpolicy: "referrerPolicy",
			rel: "rel",
			required: "required",
			reversed: "reversed",
			role: "role",
			rows: "rows",
			rowspan: "rowSpan",
			sandbox: "sandbox",
			scope: "scope",
			scoped: "scoped",
			scrolling: "scrolling",
			seamless: "seamless",
			selected: "selected",
			shape: "shape",
			size: "size",
			sizes: "sizes",
			span: "span",
			spellcheck: "spellCheck",
			src: "src",
			srcdoc: "srcDoc",
			srclang: "srcLang",
			srcset: "srcSet",
			start: "start",
			step: "step",
			style: "style",
			summary: "summary",
			tabindex: "tabIndex",
			target: "target",
			title: "title",
			type: "type",
			usemap: "useMap",
			value: "value",
			width: "width",
			wmode: "wmode",
			wrap: "wrap",
			about: "about",
			accentheight: "accentHeight",
			"accent-height": "accentHeight",
			accumulate: "accumulate",
			additive: "additive",
			alignmentbaseline: "alignmentBaseline",
			"alignment-baseline": "alignmentBaseline",
			allowreorder: "allowReorder",
			alphabetic: "alphabetic",
			amplitude: "amplitude",
			arabicform: "arabicForm",
			"arabic-form": "arabicForm",
			ascent: "ascent",
			attributename: "attributeName",
			attributetype: "attributeType",
			autoreverse: "autoReverse",
			azimuth: "azimuth",
			basefrequency: "baseFrequency",
			baselineshift: "baselineShift",
			"baseline-shift": "baselineShift",
			baseprofile: "baseProfile",
			bbox: "bbox",
			begin: "begin",
			bias: "bias",
			by: "by",
			calcmode: "calcMode",
			capheight: "capHeight",
			"cap-height": "capHeight",
			clip: "clip",
			clippath: "clipPath",
			"clip-path": "clipPath",
			clippathunits: "clipPathUnits",
			cliprule: "clipRule",
			"clip-rule": "clipRule",
			color: "color",
			colorinterpolation: "colorInterpolation",
			"color-interpolation": "colorInterpolation",
			colorinterpolationfilters: "colorInterpolationFilters",
			"color-interpolation-filters": "colorInterpolationFilters",
			colorprofile: "colorProfile",
			"color-profile": "colorProfile",
			colorrendering: "colorRendering",
			"color-rendering": "colorRendering",
			contentscripttype: "contentScriptType",
			contentstyletype: "contentStyleType",
			cursor: "cursor",
			cx: "cx",
			cy: "cy",
			d: "d",
			datatype: "datatype",
			decelerate: "decelerate",
			descent: "descent",
			diffuseconstant: "diffuseConstant",
			direction: "direction",
			display: "display",
			divisor: "divisor",
			dominantbaseline: "dominantBaseline",
			"dominant-baseline": "dominantBaseline",
			dur: "dur",
			dx: "dx",
			dy: "dy",
			edgemode: "edgeMode",
			elevation: "elevation",
			enablebackground: "enableBackground",
			"enable-background": "enableBackground",
			end: "end",
			exponent: "exponent",
			externalresourcesrequired: "externalResourcesRequired",
			fill: "fill",
			fillopacity: "fillOpacity",
			"fill-opacity": "fillOpacity",
			fillrule: "fillRule",
			"fill-rule": "fillRule",
			filter: "filter",
			filterres: "filterRes",
			filterunits: "filterUnits",
			floodopacity: "floodOpacity",
			"flood-opacity": "floodOpacity",
			floodcolor: "floodColor",
			"flood-color": "floodColor",
			focusable: "focusable",
			fontfamily: "fontFamily",
			"font-family": "fontFamily",
			fontsize: "fontSize",
			"font-size": "fontSize",
			fontsizeadjust: "fontSizeAdjust",
			"font-size-adjust": "fontSizeAdjust",
			fontstretch: "fontStretch",
			"font-stretch": "fontStretch",
			fontstyle: "fontStyle",
			"font-style": "fontStyle",
			fontvariant: "fontVariant",
			"font-variant": "fontVariant",
			fontweight: "fontWeight",
			"font-weight": "fontWeight",
			format: "format",
			from: "from",
			fx: "fx",
			fy: "fy",
			g1: "g1",
			g2: "g2",
			glyphname: "glyphName",
			"glyph-name": "glyphName",
			glyphorientationhorizontal: "glyphOrientationHorizontal",
			"glyph-orientation-horizontal": "glyphOrientationHorizontal",
			glyphorientationvertical: "glyphOrientationVertical",
			"glyph-orientation-vertical": "glyphOrientationVertical",
			glyphref: "glyphRef",
			gradienttransform: "gradientTransform",
			gradientunits: "gradientUnits",
			hanging: "hanging",
			horizadvx: "horizAdvX",
			"horiz-adv-x": "horizAdvX",
			horizoriginx: "horizOriginX",
			"horiz-origin-x": "horizOriginX",
			ideographic: "ideographic",
			imagerendering: "imageRendering",
			"image-rendering": "imageRendering",
			in2: "in2",
			in: "in",
			inlist: "inlist",
			intercept: "intercept",
			k1: "k1",
			k2: "k2",
			k3: "k3",
			k4: "k4",
			k: "k",
			kernelmatrix: "kernelMatrix",
			kernelunitlength: "kernelUnitLength",
			kerning: "kerning",
			keypoints: "keyPoints",
			keysplines: "keySplines",
			keytimes: "keyTimes",
			lengthadjust: "lengthAdjust",
			letterspacing: "letterSpacing",
			"letter-spacing": "letterSpacing",
			lightingcolor: "lightingColor",
			"lighting-color": "lightingColor",
			limitingconeangle: "limitingConeAngle",
			local: "local",
			markerend: "markerEnd",
			"marker-end": "markerEnd",
			markerheight: "markerHeight",
			markermid: "markerMid",
			"marker-mid": "markerMid",
			markerstart: "markerStart",
			"marker-start": "markerStart",
			markerunits: "markerUnits",
			markerwidth: "markerWidth",
			mask: "mask",
			maskcontentunits: "maskContentUnits",
			masktype: "maskType",
			maskunits: "maskUnits",
			mathematical: "mathematical",
			mode: "mode",
			numoctaves: "numOctaves",
			offset: "offset",
			opacity: "opacity",
			operator: "operator",
			order: "order",
			orient: "orient",
			orientation: "orientation",
			origin: "origin",
			overflow: "overflow",
			overlineposition: "overlinePosition",
			"overline-position": "overlinePosition",
			overlinethickness: "overlineThickness",
			"overline-thickness": "overlineThickness",
			paintorder: "paintOrder",
			"paint-order": "paintOrder",
			panose1: "panose1",
			"panose-1": "panose1",
			pathlength: "pathLength",
			patterncontentunits: "patternContentUnits",
			patterntransform: "patternTransform",
			patternunits: "patternUnits",
			pointerevents: "pointerEvents",
			"pointer-events": "pointerEvents",
			points: "points",
			pointsatx: "pointsAtX",
			pointsaty: "pointsAtY",
			pointsatz: "pointsAtZ",
			popover: "popover",
			popovertarget: "popoverTarget",
			popovertargetaction: "popoverTargetAction",
			prefix: "prefix",
			preservealpha: "preserveAlpha",
			preserveaspectratio: "preserveAspectRatio",
			primitiveunits: "primitiveUnits",
			property: "property",
			r: "r",
			radius: "radius",
			refx: "refX",
			refy: "refY",
			renderingintent: "renderingIntent",
			"rendering-intent": "renderingIntent",
			repeatcount: "repeatCount",
			repeatdur: "repeatDur",
			requiredextensions: "requiredExtensions",
			requiredfeatures: "requiredFeatures",
			resource: "resource",
			restart: "restart",
			result: "result",
			results: "results",
			rotate: "rotate",
			rx: "rx",
			ry: "ry",
			scale: "scale",
			security: "security",
			seed: "seed",
			shaperendering: "shapeRendering",
			"shape-rendering": "shapeRendering",
			slope: "slope",
			spacing: "spacing",
			specularconstant: "specularConstant",
			specularexponent: "specularExponent",
			speed: "speed",
			spreadmethod: "spreadMethod",
			startoffset: "startOffset",
			stddeviation: "stdDeviation",
			stemh: "stemh",
			stemv: "stemv",
			stitchtiles: "stitchTiles",
			stopcolor: "stopColor",
			"stop-color": "stopColor",
			stopopacity: "stopOpacity",
			"stop-opacity": "stopOpacity",
			strikethroughposition: "strikethroughPosition",
			"strikethrough-position": "strikethroughPosition",
			strikethroughthickness: "strikethroughThickness",
			"strikethrough-thickness": "strikethroughThickness",
			string: "string",
			stroke: "stroke",
			strokedasharray: "strokeDasharray",
			"stroke-dasharray": "strokeDasharray",
			strokedashoffset: "strokeDashoffset",
			"stroke-dashoffset": "strokeDashoffset",
			strokelinecap: "strokeLinecap",
			"stroke-linecap": "strokeLinecap",
			strokelinejoin: "strokeLinejoin",
			"stroke-linejoin": "strokeLinejoin",
			strokemiterlimit: "strokeMiterlimit",
			"stroke-miterlimit": "strokeMiterlimit",
			strokewidth: "strokeWidth",
			"stroke-width": "strokeWidth",
			strokeopacity: "strokeOpacity",
			"stroke-opacity": "strokeOpacity",
			suppresscontenteditablewarning: "suppressContentEditableWarning",
			suppresshydrationwarning: "suppressHydrationWarning",
			surfacescale: "surfaceScale",
			systemlanguage: "systemLanguage",
			tablevalues: "tableValues",
			targetx: "targetX",
			targety: "targetY",
			textanchor: "textAnchor",
			"text-anchor": "textAnchor",
			textdecoration: "textDecoration",
			"text-decoration": "textDecoration",
			textlength: "textLength",
			textrendering: "textRendering",
			"text-rendering": "textRendering",
			to: "to",
			transform: "transform",
			transformorigin: "transformOrigin",
			"transform-origin": "transformOrigin",
			typeof: "typeof",
			u1: "u1",
			u2: "u2",
			underlineposition: "underlinePosition",
			"underline-position": "underlinePosition",
			underlinethickness: "underlineThickness",
			"underline-thickness": "underlineThickness",
			unicode: "unicode",
			unicodebidi: "unicodeBidi",
			"unicode-bidi": "unicodeBidi",
			unicoderange: "unicodeRange",
			"unicode-range": "unicodeRange",
			unitsperem: "unitsPerEm",
			"units-per-em": "unitsPerEm",
			unselectable: "unselectable",
			valphabetic: "vAlphabetic",
			"v-alphabetic": "vAlphabetic",
			values: "values",
			vectoreffect: "vectorEffect",
			"vector-effect": "vectorEffect",
			version: "version",
			vertadvy: "vertAdvY",
			"vert-adv-y": "vertAdvY",
			vertoriginx: "vertOriginX",
			"vert-origin-x": "vertOriginX",
			vertoriginy: "vertOriginY",
			"vert-origin-y": "vertOriginY",
			vhanging: "vHanging",
			"v-hanging": "vHanging",
			videographic: "vIdeographic",
			"v-ideographic": "vIdeographic",
			viewbox: "viewBox",
			viewtarget: "viewTarget",
			visibility: "visibility",
			vmathematical: "vMathematical",
			"v-mathematical": "vMathematical",
			vocab: "vocab",
			widths: "widths",
			wordspacing: "wordSpacing",
			"word-spacing": "wordSpacing",
			writingmode: "writingMode",
			"writing-mode": "writingMode",
			x1: "x1",
			x2: "x2",
			x: "x",
			xchannelselector: "xChannelSelector",
			xheight: "xHeight",
			"x-height": "xHeight",
			xlinkactuate: "xlinkActuate",
			"xlink:actuate": "xlinkActuate",
			xlinkarcrole: "xlinkArcrole",
			"xlink:arcrole": "xlinkArcrole",
			xlinkhref: "xlinkHref",
			"xlink:href": "xlinkHref",
			xlinkrole: "xlinkRole",
			"xlink:role": "xlinkRole",
			xlinkshow: "xlinkShow",
			"xlink:show": "xlinkShow",
			xlinktitle: "xlinkTitle",
			"xlink:title": "xlinkTitle",
			xlinktype: "xlinkType",
			"xlink:type": "xlinkType",
			xmlbase: "xmlBase",
			"xml:base": "xmlBase",
			xmllang: "xmlLang",
			"xml:lang": "xmlLang",
			xmlns: "xmlns",
			"xml:space": "xmlSpace",
			xmlnsxlink: "xmlnsXlink",
			"xmlns:xlink": "xmlnsXlink",
			xmlspace: "xmlSpace",
			y1: "y1",
			y2: "y2",
			y: "y",
			ychannelselector: "yChannelSelector",
			z: "z",
			zoomandpan: "zoomAndPan"
		}, Vg = {
			"aria-current": 0,
			"aria-description": 0,
			"aria-details": 0,
			"aria-disabled": 0,
			"aria-hidden": 0,
			"aria-invalid": 0,
			"aria-keyshortcuts": 0,
			"aria-label": 0,
			"aria-roledescription": 0,
			"aria-autocomplete": 0,
			"aria-checked": 0,
			"aria-expanded": 0,
			"aria-haspopup": 0,
			"aria-level": 0,
			"aria-modal": 0,
			"aria-multiline": 0,
			"aria-multiselectable": 0,
			"aria-orientation": 0,
			"aria-placeholder": 0,
			"aria-pressed": 0,
			"aria-readonly": 0,
			"aria-required": 0,
			"aria-selected": 0,
			"aria-sort": 0,
			"aria-valuemax": 0,
			"aria-valuemin": 0,
			"aria-valuenow": 0,
			"aria-valuetext": 0,
			"aria-atomic": 0,
			"aria-busy": 0,
			"aria-live": 0,
			"aria-relevant": 0,
			"aria-dropeffect": 0,
			"aria-grabbed": 0,
			"aria-activedescendant": 0,
			"aria-colcount": 0,
			"aria-colindex": 0,
			"aria-colspan": 0,
			"aria-controls": 0,
			"aria-describedby": 0,
			"aria-errormessage": 0,
			"aria-flowto": 0,
			"aria-labelledby": 0,
			"aria-owns": 0,
			"aria-posinset": 0,
			"aria-rowcount": 0,
			"aria-rowindex": 0,
			"aria-rowspan": 0,
			"aria-setsize": 0,
			"aria-braillelabel": 0,
			"aria-brailleroledescription": 0,
			"aria-colindextext": 0,
			"aria-rowindextext": 0
		}, Hg = {}, Ug = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Wg = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Gg = !1, Kg = {}, qg = /^on./, Jg = /^on[^A-Z]/, Yg = RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Xg = RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Zg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Qg = null, $g = null, e_ = null, t_ = !1, n_ = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), r_ = !1;
		if (n_) try {
			var i_ = {};
			Object.defineProperty(i_, "passive", { get: function() {
				r_ = !0;
			} }), window.addEventListener("test", i_, i_), window.removeEventListener("test", i_, i_);
		} catch {
			r_ = !1;
		}
		var a_ = null, o_ = null, s_ = null, c_ = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function(e) {
				return e.timeStamp || Date.now();
			},
			defaultPrevented: 0,
			isTrusted: 0
		}, l_ = Fn(c_), u_ = z({}, c_, {
			view: 0,
			detail: 0
		}), d_ = Fn(u_), f_, p_, m_, h_ = z({}, u_, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: Ln,
			button: 0,
			buttons: 0,
			relatedTarget: function(e) {
				return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
			},
			movementX: function(e) {
				return "movementX" in e ? e.movementX : (e !== m_ && (m_ && e.type === "mousemove" ? (f_ = e.screenX - m_.screenX, p_ = e.screenY - m_.screenY) : p_ = f_ = 0, m_ = e), f_);
			},
			movementY: function(e) {
				return "movementY" in e ? e.movementY : p_;
			}
		}), g_ = Fn(h_), __ = Fn(z({}, h_, { dataTransfer: 0 })), v_ = Fn(z({}, u_, { relatedTarget: 0 })), y_ = Fn(z({}, c_, {
			animationName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		})), b_ = Fn(z({}, c_, { clipboardData: function(e) {
			return "clipboardData" in e ? e.clipboardData : window.clipboardData;
		} })), x_ = Fn(z({}, c_, { data: 0 })), S_ = x_, C_ = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		}, w_ = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta"
		}, T_ = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey"
		}, E_ = Fn(z({}, u_, {
			key: function(e) {
				if (e.key) {
					var t = C_[e.key] || e.key;
					if (t !== "Unidentified") return t;
				}
				return e.type === "keypress" ? (e = Mn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? w_[e.keyCode] || "Unidentified" : "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: Ln,
			charCode: function(e) {
				return e.type === "keypress" ? Mn(e) : 0;
			},
			keyCode: function(e) {
				return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
			},
			which: function(e) {
				return e.type === "keypress" ? Mn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
			}
		})), D_ = Fn(z({}, h_, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0
		})), O_ = Fn(z({}, c_, { submitter: 0 })), k_ = Fn(z({}, u_, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: Ln
		})), A_ = Fn(z({}, c_, {
			propertyName: 0,
			elapsedTime: 0,
			pseudoElement: 0
		})), j_ = Fn(z({}, h_, {
			deltaX: function(e) {
				return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
			},
			deltaY: function(e) {
				return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
			},
			deltaZ: 0,
			deltaMode: 0
		})), M_ = Fn(z({}, c_, {
			newState: 0,
			oldState: 0,
			source: 0
		})), N_ = [
			9,
			13,
			27,
			32
		], P_ = 229, F_ = n_ && "CompositionEvent" in window, I_ = null;
		n_ && "documentMode" in document && (I_ = document.documentMode);
		var L_ = n_ && "TextEvent" in window && !I_, R_ = n_ && (!F_ || I_ && 8 < I_ && 11 >= I_), z_ = 32, B_ = String.fromCharCode(z_), V_ = !1, H_ = !1, U_ = {
			color: !0,
			date: !0,
			datetime: !0,
			"datetime-local": !0,
			email: !0,
			month: !0,
			number: !0,
			password: !0,
			range: !0,
			search: !0,
			tel: !0,
			text: !0,
			time: !0,
			url: !0,
			week: !0
		}, W_ = null, G_ = null, K_ = !1;
		n_ && (K_ = Un("input") && (!document.documentMode || 9 < document.documentMode));
		var q_ = typeof Object.is == "function" ? Object.is : er, J_ = n_ && "documentMode" in document && 11 >= document.documentMode, Y_ = null, X_ = null, Z_ = null, Q_ = !1, $_ = {
			animationend: lr("Animation", "AnimationEnd"),
			animationiteration: lr("Animation", "AnimationIteration"),
			animationstart: lr("Animation", "AnimationStart"),
			transitionrun: lr("Transition", "TransitionRun"),
			transitionstart: lr("Transition", "TransitionStart"),
			transitioncancel: lr("Transition", "TransitionCancel"),
			transitionend: lr("Transition", "TransitionEnd")
		}, ev = {}, tv = {};
		n_ && (tv = document.createElement("div").style, "AnimationEvent" in window || (delete $_.animationend.animation, delete $_.animationiteration.animation, delete $_.animationstart.animation), "TransitionEvent" in window || delete $_.transitionend.transition);
		var nv = ur("animationend"), rv = ur("animationiteration"), iv = ur("animationstart"), av = ur("transitionrun"), ov = ur("transitionstart"), sv = ur("transitioncancel"), cv = ur("transitionend"), lv = /* @__PURE__ */ new Map(), uv = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
		uv.push("scrollEnd");
		var dv = 0, fv = 0;
		if (typeof performance == "object" && typeof performance.now == "function") var pv = performance, mv = function() {
			return pv.now();
		};
		else {
			var hv = Date;
			mv = function() {
				return hv.now();
			};
		}
		var gv = typeof reportError == "function" ? reportError : function(e) {
			if (typeof window == "object" && typeof window.ErrorEvent == "function") {
				var n = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
					error: e
				});
				if (!window.dispatchEvent(n)) return;
			} else if (typeof t == "object" && typeof t.emit == "function") {
				t.emit("uncaughtException", e);
				return;
			}
			console.error(e);
		}, _v = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", vv = 0, yv = 1, bv = 2, xv = 3, Sv = 100, Cv = "-\xA0", wv = "+\xA0", Tv = " \xA0", Ev = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Dv = "Components ⚛", V = "Scheduler ⚛", H = "Blocking", Ov = !1, kv = {
			color: "primary",
			properties: null,
			tooltipText: "",
			track: Dv
		}, Av = {
			start: -0,
			end: -0,
			detail: { devtools: kv }
		}, jv = ["Changed Props", ""], Mv = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", Nv = ["Changed Props", Mv], Pv = 1, Fv = 2, Iv = [], Lv = 0, Rv = 0, zv = {};
		Object.freeze(zv);
		var Bv = null, Vv = null, U = 0, Hv = 1, W = 2, Uv = 8, Wv = 16, Gv = 32, Kv = !1;
		try {
			Object.preventExtensions({});
		} catch {
			Kv = !0;
		}
		var qv = /* @__PURE__ */ new WeakMap(), Jv = [], Yv = 0, Xv = null, Zv = 0, Qv = [], $v = 0, ey = null, ty = 1, ny = "", ry = null, iy = null, G = !1, ay = !1, oy = null, sy = null, cy = !1, ly = Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."), uy = be(null), dy = be(null), fy = {}, py = null, my = null, hy = !1, gy = typeof AbortController < "u" ? AbortController : function() {
			var e = [], t = this.signal = {
				aborted: !1,
				addEventListener: function(t, n) {
					e.push(n);
				}
			};
			this.abort = function() {
				t.aborted = !0, e.forEach(function(e) {
					return e();
				});
			};
		}, _y = Sm.unstable_scheduleCallback, vy = Sm.unstable_NormalPriority, yy = {
			$$typeof: Pm,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
			_currentRenderer: null,
			_currentRenderer2: null
		}, by = null, xy = Sm.unstable_now, Sy = console.createTask ? console.createTask : function() {
			return null;
		}, Cy = 1, wy = 2, Ty = -0, Ey = -0, Dy = -0, Oy = null, ky = -1.1, Ay = -0, jy = -0, K = -1.1, q = -1.1, My = null, Ny = !1, Py = -0, Fy = -1.1, Iy = null, Ly = 0, Ry = null, zy = null, By = -1.1, Vy = null, Hy = -1.1, Uy = -1.1, Wy = -0, Gy = -1.1, Ky = -1.1, qy = 0, Jy = null, Yy = null, Xy = null, Zy = -1.1, Qy = null, $y = -1.1, eb = -1.1, tb = -0, nb = -0, rb = 0, ib = null, ab = 0, ob = -1.1, sb = !1, cb = !1, lb = null, ub = 0, db = 0, fb = null, pb = B.S;
		B.S = function(e, t) {
			if (VC = Sh(), typeof t == "object" && t && typeof t.then == "function") {
				if (0 > Gy && 0 > Ky) {
					Gy = xy();
					var n = nf(), r = tf();
					(n !== $y || r !== Qy) && ($y = -1.1), Zy = n, Qy = r;
				}
				$i(e, t);
			}
			if (by !== null) for (n = Mw; n !== null;) Mi(n, by), n = n.next;
			if (n = e.types, n !== null) {
				for (r = Mw; r !== null;) Mi(r, n), r = r.next;
				if (db !== 0) {
					r = by, r === null && (r = by = []);
					for (var i = 0; i < n.length; i++) {
						var a = n[i];
						r.indexOf(a) === -1 && r.push(a);
					}
				}
			}
			pb !== null && pb(e, t);
		};
		var mb = be(null), hb = {
			recordUnsafeLifecycleWarnings: function() {},
			flushPendingUnsafeLifecycleWarnings: function() {},
			recordLegacyContextWarning: function() {},
			flushLegacyContextWarning: function() {},
			discardPendingWarnings: function() {}
		}, gb = [], _b = [], vb = [], yb = [], bb = [], xb = [], Sb = /* @__PURE__ */ new Set();
		hb.recordUnsafeLifecycleWarnings = function(e, t) {
			Sb.has(e.type) || (typeof t.componentWillMount == "function" && !0 !== t.componentWillMount.__suppressDeprecationWarning && gb.push(e), e.mode & Uv && typeof t.UNSAFE_componentWillMount == "function" && _b.push(e), typeof t.componentWillReceiveProps == "function" && !0 !== t.componentWillReceiveProps.__suppressDeprecationWarning && vb.push(e), e.mode & Uv && typeof t.UNSAFE_componentWillReceiveProps == "function" && yb.push(e), typeof t.componentWillUpdate == "function" && !0 !== t.componentWillUpdate.__suppressDeprecationWarning && bb.push(e), e.mode & Uv && typeof t.UNSAFE_componentWillUpdate == "function" && xb.push(e));
		}, hb.flushPendingUnsafeLifecycleWarnings = function() {
			var e = /* @__PURE__ */ new Set();
			0 < gb.length && (gb.forEach(function(t) {
				e.add(S(t) || "Component"), Sb.add(t.type);
			}), gb = []);
			var t = /* @__PURE__ */ new Set();
			0 < _b.length && (_b.forEach(function(e) {
				t.add(S(e) || "Component"), Sb.add(e.type);
			}), _b = []);
			var n = /* @__PURE__ */ new Set();
			0 < vb.length && (vb.forEach(function(e) {
				n.add(S(e) || "Component"), Sb.add(e.type);
			}), vb = []);
			var r = /* @__PURE__ */ new Set();
			0 < yb.length && (yb.forEach(function(e) {
				r.add(S(e) || "Component"), Sb.add(e.type);
			}), yb = []);
			var i = /* @__PURE__ */ new Set();
			0 < bb.length && (bb.forEach(function(e) {
				i.add(S(e) || "Component"), Sb.add(e.type);
			}), bb = []);
			var a = /* @__PURE__ */ new Set();
			if (0 < xb.length && (xb.forEach(function(e) {
				a.add(S(e) || "Component"), Sb.add(e.type);
			}), xb = []), 0 < t.size) {
				var o = g(t);
				console.error("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s", o);
			}
			0 < r.size && (o = g(r), console.error("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state\n\nPlease update the following components: %s", o)), 0 < a.size && (o = g(a), console.error("Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s", o)), 0 < e.size && (o = g(e), console.warn("componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", o)), 0 < n.size && (o = g(n), console.warn("componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", o)), 0 < i.size && (o = g(i), console.warn("componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s", o));
		};
		var Cb = /* @__PURE__ */ new Map(), wb = /* @__PURE__ */ new Set();
		hb.recordLegacyContextWarning = function(e, t) {
			for (var n = null, r = e; r !== null;) r.mode & Uv && (n = r), r = r.return;
			n === null ? console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.") : !wb.has(e.type) && (r = Cb.get(n), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (r === void 0 && (r = [], Cb.set(n, r)), r.push(e));
		}, hb.flushLegacyContextWarning = function() {
			Cb.forEach(function(e) {
				if (e.length !== 0) {
					var t = e[0], n = /* @__PURE__ */ new Set();
					e.forEach(function(e) {
						n.add(S(e) || "Component"), wb.add(e.type);
					});
					var r = g(n);
					w(t, function() {
						console.error("Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://react.dev/link/legacy-context", r);
					});
				}
			});
		}, hb.discardPendingWarnings = function() {
			gb = [], _b = [], vb = [], yb = [], bb = [], xb = [], Cb = /* @__PURE__ */ new Map();
		};
		var Tb = "", Eb = { react_stack_bottom_frame: function(e, t, n) {
			var r = gh;
			gh = !0;
			try {
				return e(t, n);
			} finally {
				gh = r;
			}
		} }, Db = Eb.react_stack_bottom_frame.bind(Eb), Ob = { react_stack_bottom_frame: function(e) {
			var t = gh;
			gh = !0;
			try {
				return e.render();
			} finally {
				gh = t;
			}
		} }, kb = Ob.react_stack_bottom_frame.bind(Ob), Ab = { react_stack_bottom_frame: function(e, t) {
			try {
				t.componentDidMount();
			} catch (t) {
				j(e, e.return, t);
			}
		} }, jb = Ab.react_stack_bottom_frame.bind(Ab), Mb = { react_stack_bottom_frame: function(e, t, n, r, i) {
			try {
				t.componentDidUpdate(n, r, i);
			} catch (t) {
				j(e, e.return, t);
			}
		} }, Nb = Mb.react_stack_bottom_frame.bind(Mb), Pb = { react_stack_bottom_frame: function(e, t) {
			var n = t.stack;
			e.componentDidCatch(t.value, { componentStack: n === null ? "" : n });
		} }, Fb = Pb.react_stack_bottom_frame.bind(Pb), Ib = { react_stack_bottom_frame: function(e, t, n) {
			try {
				n.componentWillUnmount();
			} catch (n) {
				j(e, t, n);
			}
		} }, Lb = Ib.react_stack_bottom_frame.bind(Ib), Rb = { react_stack_bottom_frame: function(e) {
			var t = e.create;
			return e = e.inst, t = t(), e.destroy = t;
		} }, zb = Rb.react_stack_bottom_frame.bind(Rb), Bb = { react_stack_bottom_frame: function(e, t, n) {
			try {
				n();
			} catch (n) {
				j(e, t, n);
			}
		} }, Vb = Bb.react_stack_bottom_frame.bind(Bb), Hb = { react_stack_bottom_frame: function(e) {
			var t = e._init;
			return t(e._payload);
		} }, Ub = Hb.react_stack_bottom_frame.bind(Hb), Wb = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."), Gb = Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."), Kb = Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."), qb = { then: function() {
			console.error("Internal React error: A listener was unexpectedly attached to a \"noop\" thenable. This is a bug in React. Please file an issue.");
		} }, Jb = null, Yb = null, Xb = !1, Zb = null, Qb = !1, $b = null, ex = 0, J = null, tx, nx = tx = !1, rx = {}, ix = {}, ax = {};
		h = function(e, t, n) {
			if (typeof n == "object" && n && n._store && (!n._store.validated && n.key == null || n._store.validated === 2)) {
				if (typeof n._store != "object") throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
				n._store.validated = 1;
				var r = S(e), i = r || "null";
				if (!rx[i]) {
					rx[i] = !0, n = n._owner, e = e._debugOwner;
					var a = "";
					e && typeof e.tag == "number" && (i = S(e)) && (a = "\n\nCheck the render method of `" + i + "`."), a || r && (a = "\n\nCheck the top-level render call using <" + r + ">.");
					var o = "";
					n != null && e !== n && (r = null, typeof n.tag == "number" ? r = S(n) : typeof n.name == "string" && (r = n.name), r && (o = " It was passed a child from " + r + ".")), w(t, function() {
						console.error("Each child in a list should have a unique \"key\" prop.%s%s See https://react.dev/link/warning-keys for more information.", a, o);
					});
				}
			}
		};
		var ox = Sa(!0), sx = Sa(!1), cx = 0, lx = 1, ux = 2, dx = 3, fx = !1, px = !1, mx = null, hx = !1, gx = be(null), _x = be(0), vx = be(null), yx = null, bx = 1, xx = 2, Sx = be(0), Cx = 0, wx = 1, Tx = 2, Ex = 4, Dx = 8, Ox, kx = /* @__PURE__ */ new Set(), Ax = /* @__PURE__ */ new Set(), jx = /* @__PURE__ */ new Set(), Mx = /* @__PURE__ */ new Set(), Nx = 0, Y = null, Px = null, Fx = null, Ix = !1, Lx = !1, Rx = !1, zx = 0, Bx = 0, Vx = null, Hx = 0, Ux = 25, X = null, Wx = null, Gx = -1, Kx = !1, qx = {
			readContext: Ei,
			use: so,
			useCallback: Ja,
			useContext: Ja,
			useEffect: Ja,
			useImperativeHandle: Ja,
			useLayoutEffect: Ja,
			useInsertionEffect: Ja,
			useMemo: Ja,
			useReducer: Ja,
			useRef: Ja,
			useState: Ja,
			useDebugValue: Ja,
			useDeferredValue: Ja,
			useTransition: Ja,
			useSyncExternalStore: Ja,
			useId: Ja,
			useHostTransitionStatus: Ja,
			useFormState: Ja,
			useActionState: Ja,
			useOptimistic: Ja,
			useMemoCache: Ja,
			useCacheRefresh: Ja,
			useEffectEvent: Ja
		}, Jx = null, Yx = null, Xx = null, Zx = null, Qx = null, $x = null, eS = null;
		Jx = {
			readContext: function(e) {
				return Ei(e);
			},
			use: so,
			useCallback: function(e, t) {
				return X = "useCallback", D(), Ka(t), Qo(e, t);
			},
			useContext: function(e) {
				return X = "useContext", D(), Ei(e);
			},
			useEffect: function(e, t) {
				return X = "useEffect", D(), Ka(t), Wo(e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", D(), Ka(n), Xo(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				X = "useInsertionEffect", D(), Ka(t), Ho(4, Tx, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", D(), Ka(t), Jo(e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", D(), Ka(t);
				var n = B.H;
				B.H = Qx;
				try {
					return es(e, t);
				} finally {
					B.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", D();
				var r = B.H;
				B.H = Qx;
				try {
					return uo(e, t, n);
				} finally {
					B.H = r;
				}
			},
			useRef: function(e) {
				return X = "useRef", D(), Vo(e);
			},
			useState: function(e) {
				X = "useState", D();
				var t = B.H;
				B.H = Qx;
				try {
					return Co(e);
				} finally {
					B.H = t;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", D();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", D(), ns(e, t);
			},
			useTransition: function() {
				return X = "useTransition", D(), ds();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", D(), ho(e, t, n);
			},
			useId: function() {
				return X = "useId", D(), hs();
			},
			useFormState: function(e, t) {
				return X = "useFormState", D(), qa(), Fo(e, t);
			},
			useActionState: function(e, t) {
				return X = "useActionState", D(), Fo(e, t);
			},
			useOptimistic: function(e) {
				return X = "useOptimistic", D(), wo(e);
			},
			useHostTransitionStatus: ms,
			useMemoCache: co,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", D(), gs();
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", D(), Ko(e);
			}
		}, Yx = {
			readContext: function(e) {
				return Ei(e);
			},
			use: so,
			useCallback: function(e, t) {
				return X = "useCallback", O(), Qo(e, t);
			},
			useContext: function(e) {
				return X = "useContext", O(), Ei(e);
			},
			useEffect: function(e, t) {
				return X = "useEffect", O(), Wo(e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", O(), Xo(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				X = "useInsertionEffect", O(), Ho(4, Tx, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", O(), Jo(e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", O();
				var n = B.H;
				B.H = Qx;
				try {
					return es(e, t);
				} finally {
					B.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", O();
				var r = B.H;
				B.H = Qx;
				try {
					return uo(e, t, n);
				} finally {
					B.H = r;
				}
			},
			useRef: function(e) {
				return X = "useRef", O(), Vo(e);
			},
			useState: function(e) {
				X = "useState", O();
				var t = B.H;
				B.H = Qx;
				try {
					return Co(e);
				} finally {
					B.H = t;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", O();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", O(), ns(e, t);
			},
			useTransition: function() {
				return X = "useTransition", O(), ds();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", O(), ho(e, t, n);
			},
			useId: function() {
				return X = "useId", O(), hs();
			},
			useActionState: function(e, t) {
				return X = "useActionState", O(), Fo(e, t);
			},
			useFormState: function(e, t) {
				return X = "useFormState", O(), qa(), Fo(e, t);
			},
			useOptimistic: function(e) {
				return X = "useOptimistic", O(), wo(e);
			},
			useHostTransitionStatus: ms,
			useMemoCache: co,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", O(), gs();
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", O(), Ko(e);
			}
		}, Xx = {
			readContext: function(e) {
				return Ei(e);
			},
			use: so,
			useCallback: function(e, t) {
				return X = "useCallback", O(), $o(e, t);
			},
			useContext: function(e) {
				return X = "useContext", O(), Ei(e);
			},
			useEffect: function(e, t) {
				X = "useEffect", O(), Uo(2048, Dx, e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", O(), Zo(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				return X = "useInsertionEffect", O(), Uo(4, Tx, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", O(), Uo(4, Ex, e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", O();
				var n = B.H;
				B.H = $x;
				try {
					return ts(e, t);
				} finally {
					B.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", O();
				var r = B.H;
				B.H = $x;
				try {
					return fo(e, t, n);
				} finally {
					B.H = r;
				}
			},
			useRef: function() {
				return X = "useRef", O(), io().memoizedState;
			},
			useState: function() {
				X = "useState", O();
				var e = B.H;
				B.H = $x;
				try {
					return fo(lo);
				} finally {
					B.H = e;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", O();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", O(), k(e, t);
			},
			useTransition: function() {
				return X = "useTransition", O(), fs();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", O(), go(e, t, n);
			},
			useId: function() {
				return X = "useId", O(), io().memoizedState;
			},
			useFormState: function(e) {
				return X = "useFormState", O(), qa(), Io(e);
			},
			useActionState: function(e) {
				return X = "useActionState", O(), Io(e);
			},
			useOptimistic: function(e, t) {
				return X = "useOptimistic", O(), To(e, t);
			},
			useHostTransitionStatus: ms,
			useMemoCache: co,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", O(), io().memoizedState;
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", O(), qo(e);
			}
		}, Zx = {
			readContext: function(e) {
				return Ei(e);
			},
			use: so,
			useCallback: function(e, t) {
				return X = "useCallback", O(), $o(e, t);
			},
			useContext: function(e) {
				return X = "useContext", O(), Ei(e);
			},
			useEffect: function(e, t) {
				X = "useEffect", O(), Uo(2048, Dx, e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", O(), Zo(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				return X = "useInsertionEffect", O(), Uo(4, Tx, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", O(), Uo(4, Ex, e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", O();
				var n = B.H;
				B.H = eS;
				try {
					return ts(e, t);
				} finally {
					B.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", O();
				var r = B.H;
				B.H = eS;
				try {
					return mo(e, t, n);
				} finally {
					B.H = r;
				}
			},
			useRef: function() {
				return X = "useRef", O(), io().memoizedState;
			},
			useState: function() {
				X = "useState", O();
				var e = B.H;
				B.H = eS;
				try {
					return mo(lo);
				} finally {
					B.H = e;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", O();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", O(), rs(e, t);
			},
			useTransition: function() {
				return X = "useTransition", O(), ps();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", O(), go(e, t, n);
			},
			useId: function() {
				return X = "useId", O(), io().memoizedState;
			},
			useFormState: function(e) {
				return X = "useFormState", O(), qa(), zo(e);
			},
			useActionState: function(e) {
				return X = "useActionState", O(), zo(e);
			},
			useOptimistic: function(e, t) {
				return X = "useOptimistic", O(), Do(e, t);
			},
			useHostTransitionStatus: ms,
			useMemoCache: co,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", O(), io().memoizedState;
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", O(), qo(e);
			}
		}, Qx = {
			readContext: function(e) {
				return p(), Ei(e);
			},
			use: function(e) {
				return f(), so(e);
			},
			useCallback: function(e, t) {
				return X = "useCallback", f(), D(), Qo(e, t);
			},
			useContext: function(e) {
				return X = "useContext", f(), D(), Ei(e);
			},
			useEffect: function(e, t) {
				return X = "useEffect", f(), D(), Wo(e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", f(), D(), Xo(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				X = "useInsertionEffect", f(), D(), Ho(4, Tx, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", f(), D(), Jo(e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", f(), D();
				var n = B.H;
				B.H = Qx;
				try {
					return es(e, t);
				} finally {
					B.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", f(), D();
				var r = B.H;
				B.H = Qx;
				try {
					return uo(e, t, n);
				} finally {
					B.H = r;
				}
			},
			useRef: function(e) {
				return X = "useRef", f(), D(), Vo(e);
			},
			useState: function(e) {
				X = "useState", f(), D();
				var t = B.H;
				B.H = Qx;
				try {
					return Co(e);
				} finally {
					B.H = t;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", f(), D();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", f(), D(), ns(e, t);
			},
			useTransition: function() {
				return X = "useTransition", f(), D(), ds();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", f(), D(), ho(e, t, n);
			},
			useId: function() {
				return X = "useId", f(), D(), hs();
			},
			useFormState: function(e, t) {
				return X = "useFormState", f(), D(), Fo(e, t);
			},
			useActionState: function(e, t) {
				return X = "useActionState", f(), D(), Fo(e, t);
			},
			useOptimistic: function(e) {
				return X = "useOptimistic", f(), D(), wo(e);
			},
			useMemoCache: function(e) {
				return f(), co(e);
			},
			useHostTransitionStatus: ms,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", D(), gs();
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", f(), D(), Ko(e);
			}
		}, $x = {
			readContext: function(e) {
				return p(), Ei(e);
			},
			use: function(e) {
				return f(), so(e);
			},
			useCallback: function(e, t) {
				return X = "useCallback", f(), O(), $o(e, t);
			},
			useContext: function(e) {
				return X = "useContext", f(), O(), Ei(e);
			},
			useEffect: function(e, t) {
				X = "useEffect", f(), O(), Uo(2048, Dx, e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", f(), O(), Zo(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				return X = "useInsertionEffect", f(), O(), Uo(4, Tx, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", f(), O(), Uo(4, Ex, e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", f(), O();
				var n = B.H;
				B.H = $x;
				try {
					return ts(e, t);
				} finally {
					B.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", f(), O();
				var r = B.H;
				B.H = $x;
				try {
					return fo(e, t, n);
				} finally {
					B.H = r;
				}
			},
			useRef: function() {
				return X = "useRef", f(), O(), io().memoizedState;
			},
			useState: function() {
				X = "useState", f(), O();
				var e = B.H;
				B.H = $x;
				try {
					return fo(lo);
				} finally {
					B.H = e;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", f(), O();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", f(), O(), k(e, t);
			},
			useTransition: function() {
				return X = "useTransition", f(), O(), fs();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", f(), O(), go(e, t, n);
			},
			useId: function() {
				return X = "useId", f(), O(), io().memoizedState;
			},
			useFormState: function(e) {
				return X = "useFormState", f(), O(), Io(e);
			},
			useActionState: function(e) {
				return X = "useActionState", f(), O(), Io(e);
			},
			useOptimistic: function(e, t) {
				return X = "useOptimistic", f(), O(), To(e, t);
			},
			useMemoCache: function(e) {
				return f(), co(e);
			},
			useHostTransitionStatus: ms,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", O(), io().memoizedState;
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", f(), O(), qo(e);
			}
		}, eS = {
			readContext: function(e) {
				return p(), Ei(e);
			},
			use: function(e) {
				return f(), so(e);
			},
			useCallback: function(e, t) {
				return X = "useCallback", f(), O(), $o(e, t);
			},
			useContext: function(e) {
				return X = "useContext", f(), O(), Ei(e);
			},
			useEffect: function(e, t) {
				X = "useEffect", f(), O(), Uo(2048, Dx, e, t);
			},
			useImperativeHandle: function(e, t, n) {
				return X = "useImperativeHandle", f(), O(), Zo(e, t, n);
			},
			useInsertionEffect: function(e, t) {
				return X = "useInsertionEffect", f(), O(), Uo(4, Tx, e, t);
			},
			useLayoutEffect: function(e, t) {
				return X = "useLayoutEffect", f(), O(), Uo(4, Ex, e, t);
			},
			useMemo: function(e, t) {
				X = "useMemo", f(), O();
				var n = B.H;
				B.H = $x;
				try {
					return ts(e, t);
				} finally {
					B.H = n;
				}
			},
			useReducer: function(e, t, n) {
				X = "useReducer", f(), O();
				var r = B.H;
				B.H = $x;
				try {
					return mo(e, t, n);
				} finally {
					B.H = r;
				}
			},
			useRef: function() {
				return X = "useRef", f(), O(), io().memoizedState;
			},
			useState: function() {
				X = "useState", f(), O();
				var e = B.H;
				B.H = $x;
				try {
					return mo(lo);
				} finally {
					B.H = e;
				}
			},
			useDebugValue: function() {
				X = "useDebugValue", f(), O();
			},
			useDeferredValue: function(e, t) {
				return X = "useDeferredValue", f(), O(), rs(e, t);
			},
			useTransition: function() {
				return X = "useTransition", f(), O(), ps();
			},
			useSyncExternalStore: function(e, t, n) {
				return X = "useSyncExternalStore", f(), O(), go(e, t, n);
			},
			useId: function() {
				return X = "useId", f(), O(), io().memoizedState;
			},
			useFormState: function(e) {
				return X = "useFormState", f(), O(), zo(e);
			},
			useActionState: function(e) {
				return X = "useActionState", f(), O(), zo(e);
			},
			useOptimistic: function(e, t) {
				return X = "useOptimistic", f(), O(), Do(e, t);
			},
			useMemoCache: function(e) {
				return f(), co(e);
			},
			useHostTransitionStatus: ms,
			useCacheRefresh: function() {
				return X = "useCacheRefresh", O(), io().memoizedState;
			},
			useEffectEvent: function(e) {
				return X = "useEffectEvent", f(), O(), qo(e);
			}
		};
		var tS = {}, nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), dS = /* @__PURE__ */ new Set();
		Object.freeze(tS);
		var fS = {
			enqueueSetState: function(e, t, n) {
				e = e._reactInternals;
				var r = su(e), i = Ea(r);
				i.payload = t, n != null && (Ts(n), i.callback = n), t = Da(e, i, r), t !== null && (Pi(r, "this.setState()", e), A(t, e, r), Oa(t, e, r));
			},
			enqueueReplaceState: function(e, t, n) {
				e = e._reactInternals;
				var r = su(e), i = Ea(r);
				i.tag = lx, i.payload = t, n != null && (Ts(n), i.callback = n), t = Da(e, i, r), t !== null && (Pi(r, "this.replaceState()", e), A(t, e, r), Oa(t, e, r));
			},
			enqueueForceUpdate: function(e, t) {
				e = e._reactInternals;
				var n = su(e), r = Ea(n);
				r.tag = ux, t != null && (Ts(t), r.callback = t), t = Da(e, r, n), t !== null && (Pi(n, "this.forceUpdate()", e), A(t, e, n), Oa(t, e, n));
			}
		}, pS = null, mS = null, hS = Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."), gS = !1, _S = {}, vS = {}, yS = {}, bS = {}, xS = !1, SS = {}, CS = {}, wS = {}, TS = {
			dehydrated: null,
			treeContext: null,
			retryLane: 0,
			hydrationErrors: null
		}, ES = !1, DS = null;
		DS = /* @__PURE__ */ new Set();
		var OS = !1, kS = null, AS = null, jS = 0, MS = /* @__PURE__ */ new Map(), NS = {}, PS = 0, FS = 1, IS = 2, LS = !1, RS = !1, zS = !1, BS = !1, VS = typeof WeakSet == "function" ? WeakSet : Set, HS = null, US = null, WS = null, GS = !1, KS = !1, qS = !1, JS = !1, YS = null, XS = !1, ZS = null, QS = !1, $S = 8192, eC = {
			getCacheForType: function(e) {
				var t = Ei(yy), n = t.data.get(e);
				return n === void 0 && (n = e(), t.data.set(e, n)), n;
			},
			cacheSignal: function() {
				return Ei(yy).controller.signal;
			},
			getOwner: function() {
				return hh;
			}
		};
		if (typeof Symbol == "function" && Symbol.for) {
			var tC = Symbol.for;
			tC("selector.component"), tC("selector.has_pseudo_class"), tC("selector.role"), tC("selector.test_id"), tC("selector.text");
		}
		var nC = [], rC = typeof WeakMap == "function" ? WeakMap : Map, iC = 0, aC = 2, oC = 4, sC = 0, cC = 1, lC = 2, uC = 3, dC = 4, fC = 6, pC = 5, Z = iC, mC = null, Q = null, $ = 0, hC = 0, gC = 1, _C = 2, vC = 3, yC = 4, bC = 5, xC = 6, SC = 7, CC = 8, wC = 9, TC = hC, EC = null, DC = !1, OC = !1, kC = !1, AC = 0, jC = sC, MC = 0, NC = 0, PC = 0, FC = 0, IC = 0, LC = null, RC = null, zC = !1, BC = 0, VC = 0, HC = 300, UC = Infinity, WC = 500, GC = null, KC = null, qC = null, JC = 0, YC = 1, XC = 2, ZC = 3, QC = 0, $C = 1, ew = 2, tw = 3, nw = 4, rw = 5, iw = 0, aw = null, ow = null, sw = 0, cw = 0, lw = -0, uw = null, dw = null, fw = null, pw = null, mw = null, hw = null, gw = JC, _w = null, vw = 50, yw = 0, bw = null, xw = !1, Sw = !1, Cw = 50, ww = 0, Tw = null, Ew = !1, Dw = !1, Ow = null, kw = !1, Aw = /* @__PURE__ */ new Set(), jw = {}, Mw = null, Nw = null, Pw = !1, Fw = !1, Iw = !1, Lw = !1, Rw = 0, zw = {};
		(function() {
			for (var e = 0; e < uv.length; e++) {
				var t = uv[e], n = t.toLowerCase();
				t = t[0].toUpperCase() + t.slice(1), dr(n, "on" + t);
			}
			dr(nv, "onAnimationEnd"), dr(rv, "onAnimationIteration"), dr(iv, "onAnimationStart"), dr("dblclick", "onDoubleClick"), dr("focusin", "onFocus"), dr("focusout", "onBlur"), dr(av, "onTransitionRun"), dr(ov, "onTransitionStart"), dr(sv, "onTransitionCancel"), dr(cv, "onTransitionEnd");
		})(), xt("onMouseEnter", ["mouseout", "mouseover"]), xt("onMouseLeave", ["mouseout", "mouseover"]), xt("onPointerEnter", ["pointerout", "pointerover"]), xt("onPointerLeave", ["pointerout", "pointerover"]), bt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), bt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), bt("onBeforeInput", [
			"compositionend",
			"keypress",
			"textInput",
			"paste"
		]), bt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), bt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), bt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
		var Bw = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Vw = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bw)), Hw = "_reactListening" + Math.random().toString(36).slice(2), Uw = !1, Ww = !1, Gw = !1, Kw = !1, qw = !1, Jw = !1, Yw = !1, Xw = {}, Zw = /\r\n?/g, Qw = /\u0000|\uFFFD/g, $w = "http://www.w3.org/1999/xlink", eT = "http://www.w3.org/XML/1998/namespace", tT = {}, nT = "javascript:throw new Error('React form unexpectedly submitted.')", rT = "suppressHydrationWarning", iT = "&", aT = "/&", oT = "$", sT = "/$", cT = "$?", lT = "$~", uT = "$!", dT = "html", fT = "body", pT = "head", mT = "F!", hT = "F", gT = "loading", _T = "style", vT = 0, yT = 1, bT = 2, xT = null, ST = null, CT = !1, wT = {
			dialog: !0,
			webview: !0
		}, TT = null, ET = void 0, DT = typeof setTimeout == "function" ? setTimeout : void 0, OT = typeof clearTimeout == "function" ? clearTimeout : void 0, kT = -1, AT = typeof Promise == "function" ? Promise : void 0, jT = typeof requestAnimationFrame == "function" ? requestAnimationFrame : DT, MT = typeof queueMicrotask == "function" ? queueMicrotask : AT === void 0 ? DT : function(e) {
			return AT.resolve(null).then(e).catch(rf);
		}, NT = 500;
		Mf.prototype.animate = function(e, t) {
			return t = typeof t == "number" ? { duration: t } : z({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
		}, Mf.prototype.getAnimations = function() {
			for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
				var a = n[i].effect;
				a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
			}
			return r;
		}, Mf.prototype.getComputedStyle = function() {
			return getComputedStyle(this._scope, this._selector);
		}, Pf.prototype.addEventListener = function(e, t, n) {
			var r = null, i = null;
			if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
				this._eventListeners === null && (this._eventListeners = []);
				var a = this._eventListeners;
				if (zf(a, e, t, n) === -1) {
					var o = this, s = t;
					n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
						o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
					}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Lf(n), a.push({
						type: e,
						listener: t,
						optionsOrUseCapture: n,
						attachedListener: s,
						cleanup: i
					}), se(this._fragmentFiber, Ff, e, s, r);
				}
				this._eventListeners = a;
			}
		}, Pf.prototype.removeEventListener = function(e, t, n) {
			var r = this._eventListeners;
			if (r !== null && (t = zf(r, e, t, n), t !== -1)) {
				var i = r[t];
				n = i.attachedListener;
				var a = i.cleanup;
				i = Lf(i.optionsOrUseCapture), se(this._fragmentFiber, If, e, n, i), r.splice(t, 1), a !== null && a();
			}
		}, Pf.prototype.dispatchEvent = function(e) {
			var t = ce(this._fragmentFiber);
			if (t === null) return !0;
			t = fe(t);
			var n = this._eventListeners;
			if (n !== null && 0 < n.length || !e.bubbles) {
				var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
				if (n) for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.addEventListener(a.type, a.attachedListener, Lf(a.optionsOrUseCapture));
				}
				if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Lf(a.optionsOrUseCapture));
				return t.removeChild(r), e;
			}
			return t.dispatchEvent(e);
		}, Pf.prototype.focus = function(e) {
			x(this._fragmentFiber.child, !0, Bf, e, void 0, void 0);
		}, Pf.prototype.focusLast = function(e) {
			var t = [];
			x(this._fragmentFiber.child, !0, Vf, t, void 0, void 0);
			for (var n = t.length - 1; 0 <= n && !Bf(t[n], e); n--);
		}, Pf.prototype.blur = function() {
			var e = ce(this._fragmentFiber);
			e !== null && (e = fe(e), e = Jd(e).activeElement, e !== null && se(this._fragmentFiber, Hf, e));
		}, Pf.prototype.observeUsing = function(e) {
			var t = !1, n = !1;
			se(this._fragmentFiber, function(e) {
				if (e.tag === 6) t = !0;
				else return n = !0;
				return !1;
			}), t && !n && console.error("observeUsing() was called on a FragmentInstance with only text children. Observers do not work on text nodes."), this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), se(this._fragmentFiber, Uf, e);
		}, Pf.prototype.unobserveUsing = function(e) {
			var t = this._observers;
			if (t !== null && t.has(e)) {
				t.delete(e), se(this._fragmentFiber, Wf, e);
				for (var n = t = 0; n < PT.length; n++) {
					var r = PT[n];
					r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : PT[t++] = r;
				}
				PT.length = t;
			} else console.error("You are calling unobserveUsing() with an observer that is not being observed with this fragment instance. First attach the observer with observeUsing()");
		};
		var PT = [], FT = !1;
		Pf.prototype.getClientRects = function() {
			var e = [];
			return se(this._fragmentFiber, Kf, e), e;
		}, Pf.prototype.getRootNode = function(e) {
			var t = ce(this._fragmentFiber);
			return t === null ? this : fe(t).getRootNode(e);
		}, Pf.prototype.compareDocumentPosition = function(e) {
			var t = ce(this._fragmentFiber);
			if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
			var n = [];
			se(this._fragmentFiber, Vf, n);
			var r = fe(t);
			if (n.length === 0) {
				if (t = r, le(this._fragmentFiber)) {
					a: {
						for (n = this._fragmentFiber.return; n !== null;) {
							if (n.tag === 4) {
								n = n.stateNode.containerInfo;
								break a;
							}
							if (n.tag === 3 || n.tag === 5 || n.tag === 27) break;
							n = n.return;
						}
						n = null;
					}
					n != null && (t = n);
				}
				n = this._fragmentFiber;
				var i = r = t.compareDocumentPosition(e);
				return t === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = ue(n)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = fe(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
			}
			t = fe(n[0]), i = fe(n[n.length - 1]);
			var a = le(this._fragmentFiber) ? t.parentElement : r;
			if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
			r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
			var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
			return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || qf(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}, Pf.prototype.scrollIntoView = function(e) {
			if (typeof e == "object") throw Error("FragmentInstance.scrollIntoView() does not support scrollIntoViewOptions. Use the alignToTop boolean instead.");
			var t = [];
			se(this._fragmentFiber, Vf, t);
			var n = !1 !== e;
			if (t.length === 0) {
				var r = ue(this._fragmentFiber);
				if (r = n ? r[1] || r[0] || ce(this._fragmentFiber) : r[0] || r[1], r === null) return;
				if (r.tag === 6) {
					e = fe(r), Jf(e, n);
					return;
				}
				if (r = fe(r), r.nodeType !== 9) {
					if (r.nodeType === 11) {
						n = "host" in r ? r.host : null, n === null ? console.warn("You are attempting to scroll a FragmentInstance that is only mounted inside a detached DocumentFragment. No scroll was performed.") : n.scrollIntoView(e);
						return;
					}
					r.scrollIntoView(e);
				}
			}
			for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
				var i = t[r];
				i.tag === 6 ? (i = fe(i), Jf(i, n)) : fe(i).scrollIntoView(e), r += n ? -1 : 1;
			}
		};
		var IT = null, LT = 0, RT = 1, zT = 2, BT = 3, VT = 4, HT = /* @__PURE__ */ new Map(), UT = /* @__PURE__ */ new Set(), WT = Jm.d;
		Jm.d = {
			f: function() {
				var e = WT.f(), t = mu();
				return e || t;
			},
			r: function(e) {
				var t = ht(e);
				t !== null && t.tag === 5 && t.type === "form" ? us(t) : WT.r(e);
			},
			D: function(e) {
				WT.D(e), bp("dns-prefetch", e, null);
			},
			C: function(e, t) {
				WT.C(e, t), bp("preconnect", e, t);
			},
			L: function(e, t, n) {
				WT.L(e, t, n);
				var r = GT;
				if (r && e && t) {
					var i = "link[rel=\"preload\"][as=\"" + Pt(t) + "\"]";
					t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + Pt(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + Pt(n.imageSizes) + "\"]")) : i += "[href=\"" + Pt(e) + "\"]";
					var a = i;
					switch (t) {
						case "style":
							a = Cp(e);
							break;
						case "script": a = Dp(e);
					}
					if (!(HT.has(a) || (e = z({
						rel: "preload",
						href: t === "image" && n && n.imageSrcSet ? void 0 : e,
						as: t
					}, n), HT.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(wp(a)) || t === "script" && r.querySelector(Op(a))))) {
						var o = r.createElement("link");
						L(o, "link", e), t === "style" && (o[eg] = !0, o.onload = o.onerror = function() {
							yt(o);
						}), vt(o), r.head.appendChild(o);
					}
				}
			},
			m: function(e, t) {
				WT.m(e, t);
				var n = GT;
				if (n && e) {
					var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + Pt(r) + "\"][href=\"" + Pt(e) + "\"]", a = i;
					switch (r) {
						case "audioworklet":
						case "paintworklet":
						case "serviceworker":
						case "sharedworker":
						case "worker":
						case "script": a = Dp(e);
					}
					if (!HT.has(a) && (e = z({
						rel: "modulepreload",
						href: e
					}, t), HT.set(a, e), n.querySelector(i) === null)) {
						switch (r) {
							case "audioworklet":
							case "paintworklet":
							case "serviceworker":
							case "sharedworker":
							case "worker":
							case "script": if (n.querySelector(Op(a))) return;
						}
						r = n.createElement("link"), L(r, "link", e), vt(r), n.head.appendChild(r);
					}
				}
			},
			X: function(e, t) {
				WT.X(e, t);
				var n = GT;
				if (n && e) {
					var r = _t(n).hoistableScripts, i = Dp(e), a = r.get(i);
					a || (a = n.querySelector(Op(i)), a || (e = z({
						src: e,
						async: !0
					}, t), (t = HT.get(i)) && Mp(e, t), a = n.createElement("script"), vt(a), L(a, "link", e), n.head.appendChild(a)), a = {
						type: "script",
						instance: a,
						count: 1,
						state: null
					}, r.set(i, a));
				}
			},
			S: function(e, t, n) {
				WT.S(e, t, n);
				var r = GT;
				if (r && e) {
					var i = _t(r).hoistableStyles, a = Cp(e);
					t ||= "default";
					var o = i.get(a);
					if (!o) {
						var s = {
							loading: LT,
							preload: null
						};
						if (o = r.querySelector(wp(a))) s.loading = RT | VT;
						else {
							e = z({
								rel: "stylesheet",
								href: e,
								"data-precedence": t
							}, n), (n = HT.get(a)) && jp(e, n);
							var c = o = r.createElement("link");
							vt(c), L(c, "link", e), c._p = new Promise(function(e, t) {
								c.onload = e, c.onerror = t;
							}), c.addEventListener("load", function() {
								s.loading |= RT;
							}), c.addEventListener("error", function() {
								s.loading |= zT;
							}), s.loading |= VT, Ap(o, t, r);
						}
						o = {
							type: "stylesheet",
							instance: o,
							count: 1,
							state: s
						}, i.set(a, o);
					}
				}
			},
			M: function(e, t) {
				WT.M(e, t);
				var n = GT;
				if (n && e) {
					var r = _t(n).hoistableScripts, i = Dp(e), a = r.get(i);
					a || (a = n.querySelector(Op(i)), a || (e = z({
						src: e,
						async: !0,
						type: "module"
					}, t), (t = HT.get(i)) && Mp(e, t), a = n.createElement("script"), vt(a), L(a, "link", e), n.head.appendChild(a)), a = {
						type: "script",
						instance: a,
						count: 1,
						state: null
					}, r.set(i, a));
				}
			}
		};
		var GT = typeof document > "u" ? null : document, KT = null, qT = 6e4, JT = 800, YT = 500, XT = 0, ZT = null, QT = null, $T = Ym, eE = {
			$$typeof: Pm,
			Provider: null,
			Consumer: null,
			_currentValue: $T,
			_currentValue2: $T,
			_threadCount: 0
		}, tE = "%c%s%c", nE = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", rE = "", iE = " ", aE = Function.prototype.bind, oE = !1, sE = null, cE = null, lE = null, uE = null, dE = null, fE = null, pE = null, mE = null, hE = null, gE = null;
		sE = function(e, t, r, a) {
			t = n(e, t), t !== null && (r = i(t.memoizedState, r, 0, a), t.memoizedState = r, t.baseState = r, e.memoizedProps = z({}, e.memoizedProps), r = Ir(e, 2), r !== null && A(r, e, 2));
		}, cE = function(e, t, r) {
			t = n(e, t), t !== null && (r = c(t.memoizedState, r, 0), t.memoizedState = r, t.baseState = r, e.memoizedProps = z({}, e.memoizedProps), r = Ir(e, 2), r !== null && A(r, e, 2));
		}, lE = function(e, t, r, i) {
			t = n(e, t), t !== null && (r = a(t.memoizedState, r, i), t.memoizedState = r, t.baseState = r, e.memoizedProps = z({}, e.memoizedProps), r = Ir(e, 2), r !== null && A(r, e, 2));
		}, uE = function(e, t, n) {
			e.pendingProps = i(e.memoizedProps, t, 0, n), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ir(e, 2), t !== null && A(t, e, 2);
		}, dE = function(e, t) {
			e.pendingProps = c(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ir(e, 2), t !== null && A(t, e, 2);
		}, fE = function(e, t, n) {
			e.pendingProps = a(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ir(e, 2), t !== null && A(t, e, 2);
		}, pE = function(e) {
			var t = Ir(e, 2);
			t !== null && A(t, e, 2);
		}, mE = function(e) {
			var t = et(), n = Ir(e, t);
			n !== null && A(n, e, t);
		}, hE = function(e) {
			d = e;
		}, gE = function(e) {
			l = e;
		};
		var _E = !0, vE = null, yE = !1, bE = null, xE = null, SE = null, CE = /* @__PURE__ */ new Map(), wE = /* @__PURE__ */ new Map(), TE = [], EE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "), DE = null;
		if (bm.prototype.render = ym.prototype.render = function(e) {
			var t = this._internalRoot;
			if (t === null) throw Error("Cannot update an unmounted root.");
			var n = arguments;
			typeof n[1] == "function" ? console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ee(n[1]) ? console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : n[1] !== void 0 && console.error("You passed a second argument to root.render(...) but it only accepts one argument."), n = e;
			var r = t.current;
			Xp(r, su(r), n, t, null, null);
		}, bm.prototype.unmount = ym.prototype.unmount = function() {
			var e = arguments;
			if (typeof e[0] == "function" && console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."), e = this._internalRoot, e !== null) {
				this._internalRoot = null;
				var t = e.containerInfo;
				(Z & (aC | oC)) !== iC && console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Xp(e.current, 2, null, e, null, null), mu(), t[Jh] = null;
			}
		}, bm.prototype.unstable_scheduleHydration = function(e) {
			if (e) {
				var t = dt();
				e = {
					blockedOn: null,
					target: e,
					priority: t
				};
				for (var n = 0; n < TE.length && t !== 0 && t < TE[n].priority; n++);
				TE.splice(n, 0, e), n === 0 && dm(e);
			}
		}, (function() {
			var e = Cm.version;
			if (e !== "19.3.0") throw Error("Incompatible React versions: The \"react\" and \"react-dom\" packages must have the exact same version. Instead got:\n  - react:      " + (e + "\n  - react-dom:  19.3.0\nLearn more: https://react.dev/warnings/version-mismatch"));
		})(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"), Jm.findDOMNode = function(e) {
			var t = e._reactInternals;
			if (t === void 0) throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error("Argument appears to not be a ReactComponent. Keys: " + e));
			return e = ae(t), e = e === null ? null : oe(e), e = e === null ? null : e.stateNode, e;
		}, !(function() {
			var e = {
				bundleType: 1,
				version: "19.3.0",
				rendererPackageName: "react-dom",
				currentDispatcherRef: B,
				reconcilerVersion: "19.3.0"
			};
			return e.overrideHookState = sE, e.overrideHookStateDeletePath = cE, e.overrideHookStateRenamePath = lE, e.overrideProps = uE, e.overridePropsDeletePath = dE, e.overridePropsRenamePath = fE, e.scheduleUpdate = pE, e.scheduleRetry = mE, e.setErrorHandler = hE, e.setSuspenseHandler = gE, e.scheduleRefresh = y, e.scheduleRoot = v, e.setRefreshHandler = b, e.getCurrentFiber = tm, Ke(e);
		})() && n_ && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
			var OE = window.location.protocol;
			/^(https?|file):$/.test(OE) && console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (OE === "file:" ? "\nYou might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq" : ""), "font-weight:bold");
		}
		e.createRoot = function(e, t) {
			if (!ee(e)) throw Error("Target container is not a DOM element.");
			xm(e);
			var n = !1, r = "", i = As, a = js, o = Ms;
			return t != null && (t.hydrate ? console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t && t.$$typeof === Om && console.error("You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:\n\n  let root = createRoot(domContainer);\n  root.render(<App />);"), !0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (a = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Jp(e, 1, !1, null, null, n, r, null, i, a, o, vm), e[Jh] = t.current, vd(e), new ym(t);
		}, e.hydrateRoot = function(e, t, n) {
			if (!ee(e)) throw Error("Target container is not a DOM element.");
			xm(e), t === void 0 && console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
			var r = !1, i = "", a = As, o = js, s = Ms, c = null;
			return n != null && (!0 === n.unstable_strictMode && (r = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (a = n.onUncaughtError), n.onCaughtError !== void 0 && (o = n.onCaughtError), n.onRecoverableError !== void 0 && (s = n.onRecoverableError), n.formState !== void 0 && (c = n.formState)), t = Jp(e, 1, !0, t, n ?? null, r, i, c, a, o, s, vm), t.context = Yp(null), n = t.current, r = su(n), r = st(r), i = Ea(r), i.callback = null, Da(n, i, r), Pi(r, "hydrateRoot()", null), n = r, t.current.lanes = n, nt(t, n), od(t), e[Jh] = t.current, vd(e), new bm(t);
		}, e.version = "19.3.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), p = (/* @__PURE__ */ e(((e, r) => {
	n();
	function i() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
			if (t.env.NODE_ENV !== "production") throw Error("^_^");
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
			} catch (e) {
				console.error(e);
			}
		}
	}
	t.env.NODE_ENV === "production" ? (i(), r.exports = d()) : r.exports = f();
})))(), m = r(), h = i(), g = (0, m.lazy)(() => import("./react-spline-CbtMUAP1.js").then((e) => e.t));
function _({ scene: e, className: t }) {
	return /* @__PURE__ */ (0, h.jsx)(m.Suspense, {
		fallback: /* @__PURE__ */ (0, h.jsx)("div", {
			className: "w-full h-full flex items-center justify-center",
			children: /* @__PURE__ */ (0, h.jsx)("span", { className: "loader" })
		}),
		children: /* @__PURE__ */ (0, h.jsx)(g, {
			scene: e,
			className: t
		})
	});
}
//#endregion
//#region src/components/HeroSplineDemo.tsx
function v() {
	return /* @__PURE__ */ (0, h.jsxs)("div", {
		className: "relative w-full min-h-[560px]",
		children: [/* @__PURE__ */ (0, h.jsxs)("div", {
			className: "relative z-0 w-full px-8 pt-6 pb-6 flex flex-col items-center text-center min-h-[560px]",
			children: [/* @__PURE__ */ (0, h.jsx)("span", {
				className: "font-mono text-[11px] tracking-[0.14em] uppercase text-[#ff7049]",
				children: "AI Security Testing"
			}), /* @__PURE__ */ (0, h.jsxs)("h1", {
				className: "mt-3 whitespace-nowrap text-3xl md:text-4xl lg:text-5xl font-medium leading-[0.98] tracking-tight text-[#f2f1eb]",
				children: [
					"Shipped fast.",
					" ",
					/* @__PURE__ */ (0, h.jsx)("span", {
						className: "text-[#a3a29a]",
						children: "Tested by no one."
					})
				]
			})]
		}), /* @__PURE__ */ (0, h.jsx)("div", {
			className: "absolute inset-0 z-10 translate-y-8 pointer-events-none [mask-image:linear-gradient(to_left,black_40%,transparent_82%)] [-webkit-mask-image:linear-gradient(to_left,black_40%,transparent_82%)]",
			children: /* @__PURE__ */ (0, h.jsx)(_, {
				scene: "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
				className: "w-full h-full"
			})
		})]
	});
}
//#endregion
//#region src/widget-entry.tsx
function y() {
	let e = document.getElementById("hero-spline-root");
	if (!e) {
		console.warn("[hero-spline-widget] #hero-spline-root not found on page, skipping mount.");
		return;
	}
	(0, p.createRoot)(e).render(/* @__PURE__ */ (0, h.jsx)(v, {}));
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", y) : y();
//#endregion
