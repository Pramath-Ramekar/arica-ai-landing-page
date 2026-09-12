import { t as e } from "./rolldown-runtime-BsTNS5n0.js";
import { n as t, t as n } from "./dist-BacNt4J4.js";
//#region node_modules/react/cjs/react.production.js
var r = /* @__PURE__ */ e(((e) => {
	n();
	var r = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.activity"), h = Symbol.for("react.view_transition"), g = Symbol.iterator;
	function _(e) {
		return typeof e != "object" || !e ? null : (e = g && e[g] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var v = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, y = Object.assign, b = {};
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = b, this.updater = n || v;
	}
	x.prototype.isReactComponent = {}, x.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, x.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function S() {}
	S.prototype = x.prototype;
	function C(e, t, n) {
		this.props = e, this.context = t, this.refs = b, this.updater = n || v;
	}
	var w = C.prototype = new S();
	w.constructor = C, y(w, x.prototype), w.isPureReactComponent = !0;
	var T = Array.isArray;
	function E() {}
	var D = {
		H: null,
		A: null,
		T: null,
		S: null
	}, O = Object.prototype.hasOwnProperty;
	function k(e, t, n) {
		var i = n.ref;
		return {
			$$typeof: r,
			type: e,
			key: t,
			ref: i === void 0 ? null : i,
			props: n
		};
	}
	function A(e, t) {
		return k(e.type, t, e.props);
	}
	function j(e) {
		return typeof e == "object" && !!e && e.$$typeof === r;
	}
	function M(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var N = /\/+/g;
	function P(e, t) {
		return typeof e == "object" && e && e.key != null ? M("" + e.key) : t.toString(36);
	}
	function F(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(E, E) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function I(e, t, n, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case r:
				case i:
					c = !0;
					break;
				case p: return c = e._init, I(c(e._payload), t, n, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + P(e, 0) : a, T(o) ? (n = "", c != null && (n = c.replace(N, "$&/") + "/"), I(o, t, n, "", function(e) {
			return e;
		})) : o != null && (j(o) && (o = A(o, n + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(N, "$&/") + "/") + c)), t.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (T(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + P(a, u), c += I(a, t, n, s, o);
		else if (u = _(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + P(a, u++), c += I(a, t, n, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return I(F(e), t, n, a, o);
			throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function L(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return I(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function R(e) {
		if (e._status === -1) {
			var t = e._result, n = t();
			n.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = "fulfilled", n.value = t));
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = "rejected", n.reason = t));
			}), e._status === -1 && (e._status = 0, e._result = n);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var z = typeof reportError == "function" ? reportError : function(e) {
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
	};
	function B(e) {
		var t = D.T, n = {};
		n.types = t === null ? null : t.types, D.T = n;
		try {
			var r = e(), i = D.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(E, z);
		} catch (e) {
			z(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), D.T = t;
		}
	}
	function V(e) {
		var t = D.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else B(V.bind(null, e));
	}
	var ee = {
		map: L,
		forEach: function(e, t, n) {
			L(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return L(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return L(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!j(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = m, e.Children = ee, e.Component = x, e.Fragment = a, e.Profiler = s, e.PureComponent = C, e.StrictMode = o, e.Suspense = d, e.ViewTransition = h, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return D.H.useMemoCache(e);
		}
	}, e.addTransitionType = V, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = y({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !O.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return k(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: l,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: c,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) O.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return k(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: u,
			render: e
		};
	}, e.isValidElement = j, e.lazy = function(e) {
		return {
			$$typeof: p,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: R
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: f,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = B, e.unstable_useCacheRefresh = function() {
		return D.H.useCacheRefresh();
	}, e.use = function(e) {
		return D.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return D.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return D.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return D.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return D.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return D.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return D.H.useEffectEvent(e);
	}, e.useId = function() {
		return D.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return D.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return D.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return D.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return D.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return D.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return D.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return D.H.useRef(e);
	}, e.useState = function(e) {
		return D.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return D.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return D.H.useTransition();
	}, e.version = "19.3.0";
})), i = /* @__PURE__ */ e(((e, r) => {
	n(), t.env.NODE_ENV !== "production" && (function() {
		function n(e, t) {
			Object.defineProperty(o.prototype, e, { get: function() {
				console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
			} });
		}
		function i(e) {
			return typeof e != "object" || !e ? null : (e = se && e[se] || e["@@iterator"], typeof e == "function" ? e : null);
		}
		function a(e, t) {
			e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
			var n = e + "." + t;
			ce[n] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, e), ce[n] = !0);
		}
		function o(e, t, n) {
			this.props = e, this.context = t, this.refs = G, this.updater = n || le;
		}
		function s() {}
		function c(e, t, n) {
			this.props = e, this.context = t, this.refs = G, this.updater = n || le;
		}
		function l() {}
		function u(e) {
			return "" + e;
		}
		function d(e) {
			try {
				u(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var n = t.error, r = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return n.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", r), u(e);
			}
		}
		function f(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === fe ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case B: return "Fragment";
				case ee: return "Profiler";
				case V: return "StrictMode";
				case re: return "Suspense";
				case ie: return "SuspenseList";
				case ae: return "Activity";
				case oe: return "ViewTransition";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case z: return "Portal";
				case te: return e.displayName || "Context";
				case H: return (e._context.displayName || "Context") + ".Consumer";
				case ne:
					var t = e.render;
					return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case U: return t = e.displayName || null, t === null ? f(e.type) || "Memo" : t;
				case W:
					t = e._payload, e = e._init;
					try {
						return f(e(t));
					} catch {}
			}
			return null;
		}
		function p(e) {
			if (e === B) return "<>";
			if (typeof e == "object" && e && e.$$typeof === W) return "<...>";
			try {
				var t = f(e);
				return t ? "<" + t + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function m() {
			var e = q.A;
			return e === null ? null : e.getOwner();
		}
		function h() {
			return Error("react-stack-top-frame");
		}
		function g(e) {
			if (J.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function _(e, t) {
			function n() {
				me || (me = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function v() {
			var e = f(this.type);
			return ge[e] || (ge[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function y(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: R,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: v
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function b(e, t) {
			return t = y(e.type, t, e.props, e._owner, e._debugStack, e._debugTask), e._store && (t._store.validated = e._store.validated), t;
		}
		function x(e) {
			S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === W && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function S(e) {
			return typeof e == "object" && !!e && e.$$typeof === R;
		}
		function C(e) {
			var t = {
				"=": "=0",
				":": "=2"
			};
			return "$" + e.replace(/[=:]/g, function(e) {
				return t[e];
			});
		}
		function w(e, t) {
			return typeof e == "object" && e && e.key != null ? (d(e.key), C("" + e.key)) : t.toString(36);
		}
		function T(e) {
			switch (e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
				default: switch (typeof e.status == "string" ? e.then(l, l) : (e.status = "pending", e.then(function(t) {
					e.status === "pending" && (e.status = "fulfilled", e.value = t);
				}, function(t) {
					e.status === "pending" && (e.status = "rejected", e.reason = t);
				})), e.status) {
					case "fulfilled": return e.value;
					case "rejected": throw e.reason;
				}
			}
			throw e;
		}
		function E(e, t, n, r, a) {
			var o = typeof e;
			(o === "undefined" || o === "boolean") && (e = null);
			var s = !1;
			if (e === null) s = !0;
			else switch (o) {
				case "bigint":
				case "string":
				case "number":
					s = !0;
					break;
				case "object": switch (e.$$typeof) {
					case R:
					case z:
						s = !0;
						break;
					case W: return s = e._init, E(s(e._payload), t, n, r, a);
				}
			}
			if (s) {
				s = e, a = a(s);
				var c = r === "" ? "." + w(s, 0) : r;
				return de(a) ? (n = "", c != null && (n = c.replace(be, "$&/") + "/"), E(a, t, n, "", function(e) {
					return e;
				})) : a != null && (S(a) && (a.key != null && (s && s.key === a.key || d(a.key)), n = b(a, n + (a.key == null || s && s.key === a.key ? "" : ("" + a.key).replace(be, "$&/") + "/") + c), r !== "" && s != null && S(s) && s.key == null && s._store && !s._store.validated && (n._store.validated = 2), a = n), t.push(a)), 1;
			}
			if (s = 0, c = r === "" ? "." : r + ":", de(e)) for (var l = 0; l < e.length; l++) r = e[l], o = c + w(r, l), s += E(r, t, n, o, a);
			else if (l = i(e), typeof l == "function") for (l === e.entries && (ye || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ye = !0), e = l.call(e), l = 0; !(r = e.next()).done;) r = r.value, o = c + w(r, l++), s += E(r, t, n, o, a);
			else if (o === "object") {
				if (typeof e.then == "function") return E(T(e), t, n, r, a);
				throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
			}
			return s;
		}
		function D(e, t, n) {
			if (e == null) return e;
			var r = [], i = 0;
			return E(e, r, "", "", function(e) {
				return t.call(n, e, i++);
			}), r;
		}
		function O(e) {
			if (e._status === -1) {
				var t = null, n = null, r = e._ioInfo;
				r != null && (r.start = r.end = performance.now(), r.value = new Promise(function(e, r) {
					t = e, n = r;
				})), r = e._result;
				var i = r();
				if (i.then(function(n) {
					if (e._status === 0 || e._status === -1) {
						e._status = 1, e._result = n;
						var r = e._ioInfo;
						if (r != null) {
							r.end = performance.now();
							var a = n?.default;
							t(a), r.value.status = "fulfilled", r.value.value = a;
						}
						i.status === void 0 && (i.status = "fulfilled", i.value = n);
					}
				}, function(t) {
					if (e._status === 0 || e._status === -1) {
						e._status = 2, e._result = t;
						var r = e._ioInfo;
						r != null && (r.end = performance.now(), r.value.then(l, l), n(t), r.value.status = "rejected", r.value.reason = t), i.status === void 0 && (i.status = "rejected", i.reason = t);
					}
				}), r = e._ioInfo, r != null) {
					var a = i.displayName;
					typeof a == "string" && (r.name = a);
				}
				e._status === -1 && (e._status = 0, e._result = i);
			}
			if (e._status === 1) return r = e._result, r === void 0 && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", r), "default" in r || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", r), r.default;
			throw e._result;
		}
		function k() {
			var e = q.H;
			return e === null && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), e;
		}
		function A() {
			q.asyncTransitions--;
		}
		function j(e) {
			var t = q.T, n = {};
			n.types = t === null ? null : t.types, n._updatedFibers = /* @__PURE__ */ new Set(), q.T = n;
			try {
				var r = e(), i = q.S;
				i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && (q.asyncTransitions++, r.then(A, A), r.then(l, xe));
			} catch (e) {
				xe(e);
			} finally {
				t === null && n._updatedFibers && (e = n._updatedFibers.size, n._updatedFibers.clear(), 10 < e && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), t !== null && n.types !== null && (t.types !== null && t.types !== n.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), t.types = n.types), q.T = t;
			}
		}
		function M(e) {
			var t = q.T;
			if (t !== null) {
				var n = t.types;
				n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
			} else q.asyncTransitions === 0 && console.error("addTransitionType can only be called inside a `startTransition()` callback. It must be associated with a specific Transition."), j(M.bind(null, e));
		}
		function N(e) {
			if (Y === null) try {
				var t = ("require" + Math.random()).slice(0, 7);
				Y = (r && r[t]).call(r, "timers").setImmediate;
			} catch {
				Y = function(e) {
					!1 === Se && (Se = !0, typeof MessageChannel > "u" && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
					var t = new MessageChannel();
					t.port1.onmessage = e, t.port2.postMessage(void 0);
				};
			}
			return Y(e);
		}
		function P(e) {
			return 1 < e.length && typeof AggregateError == "function" ? AggregateError(e) : e[0];
		}
		function F(e, t) {
			t !== X - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), X = t;
		}
		function I(e, t, n) {
			var r = q.actQueue;
			if (r !== null) {
				if (r.length !== 0) try {
					L(r), N(function() {
						return I(e, t, n);
					});
					return;
				} catch (e) {
					q.thrownErrors.push(e);
				}
				else q.actQueue = null;
			}
			0 < q.thrownErrors.length ? (r = P(q.thrownErrors), q.thrownErrors.length = 0, n(r)) : t(e);
		}
		function L(e) {
			if (!Q) {
				Q = !0;
				var t = 0;
				try {
					for (; t < e.length; t++) {
						var n = e[t];
						do {
							q.didUsePromise = !1;
							var r = n(!1);
							if (r !== null) {
								if (q.didUsePromise) {
									e[t] = n, e.splice(0, t);
									return;
								}
								n = r;
							} else break;
						} while (1);
					}
					e.length = 0;
				} catch (n) {
					e.splice(0, t + 1), q.thrownErrors.push(n);
				} finally {
					Q = !1;
				}
			}
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var R = Symbol.for("react.transitional.element"), z = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), ee = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), te = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), oe = Symbol.for("react.view_transition"), se = Symbol.iterator, ce = {}, le = {
			isMounted: function() {
				return !1;
			},
			enqueueForceUpdate: function(e) {
				a(e, "forceUpdate");
			},
			enqueueReplaceState: function(e) {
				a(e, "replaceState");
			},
			enqueueSetState: function(e) {
				a(e, "setState");
			}
		}, ue = Object.assign, G = {};
		Object.freeze(G), o.prototype.isReactComponent = {}, o.prototype.setState = function(e, t) {
			if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
			this.updater.enqueueSetState(this, e, t, "setState");
		}, o.prototype.forceUpdate = function(e) {
			this.updater.enqueueForceUpdate(this, e, "forceUpdate");
		};
		var K = {
			isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
			replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
		};
		for ($ in K) K.hasOwnProperty($) && n($, K[$]);
		s.prototype = o.prototype, K = c.prototype = new s(), K.constructor = c, ue(K, o.prototype), K.isPureReactComponent = !0;
		var de = Array.isArray, fe = Symbol.for("react.client.reference"), q = {
			H: null,
			A: null,
			T: null,
			S: null,
			actQueue: null,
			asyncTransitions: 0,
			isBatchingLegacy: !1,
			didScheduleLegacyUpdate: !1,
			didUsePromise: !1,
			thrownErrors: [],
			getCurrentStack: null,
			recentlyCreatedOwnerStacks: 0
		}, J = Object.prototype.hasOwnProperty, pe = console.createTask ? console.createTask : function() {
			return null;
		};
		K = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var me, he, ge = {}, _e = K.react_stack_bottom_frame.bind(K, h)(), ve = pe(p(h)), ye = !1, be = /\/+/g, xe = typeof reportError == "function" ? reportError : function(e) {
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
		}, Se = !1, Y = null, X = 0, Z = !1, Q = !1, Ce = typeof queueMicrotask == "function" ? function(e) {
			queueMicrotask(function() {
				return queueMicrotask(e);
			});
		} : N;
		K = Object.freeze({
			__proto__: null,
			c: function(e) {
				return k().useMemoCache(e);
			}
		});
		var $ = {
			map: D,
			forEach: function(e, t, n) {
				D(e, function() {
					t.apply(this, arguments);
				}, n);
			},
			count: function(e) {
				var t = 0;
				return D(e, function() {
					t++;
				}), t;
			},
			toArray: function(e) {
				return D(e, function(e) {
					return e;
				}) || [];
			},
			only: function(e) {
				if (!S(e)) throw Error("React.Children.only expected to receive a single React element child.");
				return e;
			}
		};
		e.Activity = ae, e.Children = $, e.Component = o, e.Fragment = B, e.Profiler = ee, e.PureComponent = c, e.StrictMode = V, e.Suspense = re, e.ViewTransition = oe, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q, e.__COMPILER_RUNTIME = K, e.act = function(e) {
			var t = q.actQueue, n = X;
			X++;
			var r = q.actQueue = t === null ? [] : t, i = !1;
			try {
				var a = e();
			} catch (e) {
				q.thrownErrors.push(e);
			}
			if (0 < q.thrownErrors.length) throw F(t, n), e = P(q.thrownErrors), q.thrownErrors.length = 0, e;
			if (typeof a == "object" && a && typeof a.then == "function") {
				var o = a;
				return Ce(function() {
					i || Z || (Z = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
				}), { then: function(e, a) {
					i = !0, o.then(function(i) {
						if (F(t, n), n === 0) {
							try {
								L(r), N(function() {
									return I(i, e, a);
								});
							} catch (e) {
								q.thrownErrors.push(e);
							}
							if (0 < q.thrownErrors.length) {
								var o = P(q.thrownErrors);
								q.thrownErrors.length = 0, a(o);
							}
						} else e(i);
					}, function(e) {
						F(t, n), 0 < q.thrownErrors.length ? (e = P(q.thrownErrors), q.thrownErrors.length = 0, a(e)) : a(e);
					});
				} };
			}
			var s = a;
			if (F(t, n), n === 0 && (L(r), r.length !== 0 && Ce(function() {
				i || Z || (Z = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
			}), q.actQueue = null), 0 < q.thrownErrors.length) throw e = P(q.thrownErrors), q.thrownErrors.length = 0, e;
			return { then: function(e, t) {
				i = !0, n === 0 ? (q.actQueue = r, N(function() {
					return I(s, e, t);
				})) : e(s);
			} };
		}, e.addTransitionType = M, e.cache = function(e) {
			return function() {
				return e.apply(null, arguments);
			};
		}, e.cacheSignal = function() {
			return null;
		}, e.captureOwnerStack = function() {
			var e = q.getCurrentStack;
			return e === null ? null : e();
		}, e.cloneElement = function(e, t, n) {
			if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
			var r = ue({}, e.props), i = e.key, a = e._owner;
			if (t != null) {
				var o;
				a: {
					if (J.call(t, "ref") && (o = Object.getOwnPropertyDescriptor(t, "ref").get) && o.isReactWarning) {
						o = !1;
						break a;
					}
					o = t.ref !== void 0;
				}
				for (s in o && (a = m()), g(t) && (d(t.key), i = "" + t.key), t) !J.call(t, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && t.ref === void 0 || (r[s] = t[s]);
			}
			var s = arguments.length - 2;
			if (s === 1) r.children = n;
			else if (1 < s) {
				o = Array(s);
				for (var c = 0; c < s; c++) o[c] = arguments[c + 2];
				r.children = o;
			}
			for (r = y(e.type, i, r, a, e._debugStack, e._debugTask), i = 2; i < arguments.length; i++) x(arguments[i]);
			return r;
		}, e.createContext = function(e) {
			return e = {
				$$typeof: te,
				_currentValue: e,
				_currentValue2: e,
				_threadCount: 0,
				Provider: null,
				Consumer: null
			}, e.Provider = e, e.Consumer = {
				$$typeof: H,
				_context: e
			}, e._currentRenderer = null, e._currentRenderer2 = null, e;
		}, e.createElement = function(e, t, n) {
			for (var r = 2; r < arguments.length; r++) x(arguments[r]);
			var i;
			r = {};
			var a = null;
			if (t != null) for (i in he || !("__self" in t) || "key" in t || (he = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), g(t) && (d(t.key), a = "" + t.key), t) J.call(t, i) && i !== "key" && i !== "__self" && i !== "__source" && (r[i] = t[i]);
			var o = arguments.length - 2;
			if (o === 1) r.children = n;
			else if (1 < o) {
				for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
				Object.freeze && Object.freeze(s), r.children = s;
			}
			if (e && e.defaultProps) for (i in o = e.defaultProps, o) r[i] === void 0 && (r[i] = o[i]);
			return a && _(r, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), (i = 1e4 > q.recentlyCreatedOwnerStacks++) ? (s = Error.stackTraceLimit, Error.stackTraceLimit = 10, o = Error("react-stack-top-frame"), Error.stackTraceLimit = s) : o = _e, y(e, a, r, m(), o, i ? pe(p(e)) : ve);
		}, e.createRef = function() {
			var e = { current: null };
			return Object.seal(e), e;
		}, e.forwardRef = function(e) {
			e != null && e.$$typeof === U ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e == "function" ? e.length !== 0 && e.length !== 2 && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.") : console.error("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e), e != null && e.defaultProps != null && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
			var t = {
				$$typeof: ne,
				render: e
			}, n;
			return Object.defineProperty(t, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return n;
				},
				set: function(t) {
					n = t, e.name || e.displayName || (Object.defineProperty(e, "name", { value: t }), e.displayName = t);
				}
			}), t;
		}, e.isValidElement = S, e.lazy = function(e) {
			e = {
				_status: -1,
				_result: e
			};
			var t = {
				$$typeof: W,
				_payload: e,
				_init: O
			}, n = {
				name: "lazy",
				start: -1,
				end: -1,
				value: null,
				owner: null,
				debugStack: Error("react-stack-top-frame"),
				debugTask: console.createTask ? console.createTask("lazy()") : null
			};
			return e._ioInfo = n, t._debugInfo = [{ awaited: n }], t;
		}, e.memo = function(e, t) {
			e ?? console.error("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e), t = {
				$$typeof: U,
				type: e,
				compare: t === void 0 ? null : t
			};
			var n;
			return Object.defineProperty(t, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return n;
				},
				set: function(t) {
					n = t, e.name || e.displayName || (Object.defineProperty(e, "name", { value: t }), e.displayName = t);
				}
			}), t;
		}, e.startTransition = j, e.unstable_useCacheRefresh = function() {
			return k().useCacheRefresh();
		}, e.use = function(e) {
			return k().use(e);
		}, e.useActionState = function(e, t, n) {
			return k().useActionState(e, t, n);
		}, e.useCallback = function(e, t) {
			return k().useCallback(e, t);
		}, e.useContext = function(e) {
			var t = k();
			return e.$$typeof === H && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"), t.useContext(e);
		}, e.useDebugValue = function(e, t) {
			return k().useDebugValue(e, t);
		}, e.useDeferredValue = function(e, t) {
			return k().useDeferredValue(e, t);
		}, e.useEffect = function(e, t) {
			return e ?? console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"), k().useEffect(e, t);
		}, e.useEffectEvent = function(e) {
			return k().useEffectEvent(e);
		}, e.useId = function() {
			return k().useId();
		}, e.useImperativeHandle = function(e, t, n) {
			return k().useImperativeHandle(e, t, n);
		}, e.useInsertionEffect = function(e, t) {
			return e ?? console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"), k().useInsertionEffect(e, t);
		}, e.useLayoutEffect = function(e, t) {
			return e ?? console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"), k().useLayoutEffect(e, t);
		}, e.useMemo = function(e, t) {
			return k().useMemo(e, t);
		}, e.useOptimistic = function(e, t) {
			return k().useOptimistic(e, t);
		}, e.useReducer = function(e, t, n) {
			return k().useReducer(e, t, n);
		}, e.useRef = function(e) {
			return k().useRef(e);
		}, e.useState = function(e) {
			return k().useState(e);
		}, e.useSyncExternalStore = function(e, t, n) {
			return k().useSyncExternalStore(e, t, n);
		}, e.useTransition = function() {
			return k().useTransition();
		}, e.version = "19.3.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), a = /* @__PURE__ */ e(((e, a) => {
	n(), a.exports = t.env.NODE_ENV === "production" ? r() : i();
})), o = /* @__PURE__ */ e(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), s = /* @__PURE__ */ e(((e) => {
	n(), t.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === A ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
				case k: return "ViewTransition";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = j.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (M.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				F || (F = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return I[e] || (I[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, i, a, s, u) {
			var f = n.children;
			if (f !== void 0) {
				if (a) {
					if (N(f)) {
						for (a = 0; a < f.length; a++) p(f[a]);
						Object.freeze && Object.freeze(f);
					} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
				} else p(f);
			}
			if (M.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", z[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), z[f + a] = !0);
			}
			if (f = null, i !== void 0 && (r(i), f = "" + i), c(n) && (r(n.key), f = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return f && l(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, i, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = a(), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.view_transition"), A = Symbol.for("react.client.reference"), j = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, N = Array.isArray, P = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var F, I = {}, L = h.react_stack_bottom_frame.bind(h, s)(), R = P(i(s)), z = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > j.recentlyCreatedOwnerStacks++;
			if (r) {
				var a = Error.stackTraceLimit;
				Error.stackTraceLimit = 10;
				var o = Error("react-stack-top-frame");
				Error.stackTraceLimit = a;
			} else o = L;
			return f(e, t, n, !1, o, r ? P(i(e)) : R);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > j.recentlyCreatedOwnerStacks++;
			if (r) {
				var a = Error.stackTraceLimit;
				Error.stackTraceLimit = 10;
				var o = Error("react-stack-top-frame");
				Error.stackTraceLimit = a;
			} else o = L;
			return f(e, t, n, !0, o, r ? P(i(e)) : R);
		};
	})();
})), c = /* @__PURE__ */ e(((e, r) => {
	n(), r.exports = t.env.NODE_ENV === "production" ? o() : s();
}));
//#endregion
export { a as n, c as t };
