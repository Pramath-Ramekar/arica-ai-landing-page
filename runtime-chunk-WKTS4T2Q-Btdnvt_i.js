import { n as e, t } from "./dist-BacNt4J4.js";
import { t as n } from "./dist-BEqxqAzs.js";
import { nn as r } from "./runtime-chunk-BVVSZMXD-CNMnepSY.js";
import { n as i } from "./runtime-chunk-ML3Z74BL-DtYug6iz.js";
//#region node_modules/@splinetool/runtime/build/runtime-chunk-WKTS4T2Q.js
t();
function a(e) {
	return Array.isArray(e) ? e : [e];
}
function o(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		if (e[n] < t[n]) return -1;
		if (e[n] > t[n]) return 1;
		n += 1;
	}
	return n === t.length ? n === e.length ? 0 : 1 : -1;
}
function s(e, t) {
	return Object.setPrototypeOf(e, t), e;
}
function c(e) {
	let t = { ...e };
	return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), t;
}
function l(e, t, n) {
	if (e === void 0 ? t === void 0 ? (e = 0, t = 10) : e = t - 10 : t === void 0 && (t = e + 10), e > t) {
		let n = e;
		e = t, t = n;
	}
	let r = [], i = 1 / (n + 1);
	for (let a = 0; a < n; a++) {
		let n = e + (t - e) * (a + .75 + .5 * Math.random()) * i;
		r.push(n);
	}
	return r;
}
function u(e) {
	return e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Float32Array || e instanceof Float64Array;
}
function d(e) {
	if (e.deepFreeze !== void 0) return void e.deepFreeze(e);
	let t = Object.getOwnPropertyNames(e);
	for (let n of t) {
		let t = e[n];
		t && typeof t == "object" && d(t);
	}
	return Object.freeze(e);
}
function f(e) {
	for (let t of Object.keys(e)) e[t] === void 0 && delete e[t];
	return e;
}
var ee = class {}, p = class extends ee {
	constructor(e) {
		super(), this.id = e;
	}
}, te = class extends ee {
	constructor(e) {
		super(), this.data = e;
	}
}, m = class {
	modifyById(e, t) {
		let n = this;
		if (n[e] === void 0) throw Error("not expected");
		{
			let r = {
				...n,
				[e]: t
			};
			return Object.setPrototypeOf(r, m.prototype), r;
		}
	}
	add(e, t) {
		return this.runOp({
			type: 1,
			id: e,
			data: t
		})?.data ?? this;
	}
	runOp(e) {
		let t = this;
		if (e.type === 1) {
			let n, r = t[e.id];
			n = r === void 0 ? {
				type: 2,
				id: e.id
			} : {
				type: 1,
				id: e.id,
				data: r
			};
			let { id: i, data: a } = e, o = {
				...t,
				[i]: a
			};
			return Object.setPrototypeOf(o, m.prototype), {
				data: o,
				actual: e,
				reverse: n
			};
		}
		if (e.type === 2) {
			let { id: n } = e, r = t[n];
			if (r === void 0) return null;
			{
				let i = { ...t };
				return Object.setPrototypeOf(i, m.prototype), delete i[n], {
					data: i,
					actual: e,
					reverse: {
						type: 1,
						id: n,
						data: r
					}
				};
			}
		}
		return null;
	}
}, ne = class extends Error {};
function re(e, t) {
	for (let n of e) !0 !== t(n.id, n.data) && re(n.children, t);
}
function ie(e, t) {
	if (!0 !== t(e.id, e.data)) for (let n of e.children) ie(n, t);
}
var ae, oe, h = class extends Array {
	constructor(...e) {
		super(...e), i(this, "partialObjectCaches"), i(this, "objCaches"), i(this, "parentCaches"), Object.setPrototypeOf(this, h.prototype);
	}
	deepFreeze() {
		let e = 0;
		for (; e < this.length;) d(this[e]), e++;
	}
	fillCaches0(e, t) {
		this.objCaches.set(e.id, e), this.parentCaches.set(e.id, t);
		for (let t of e.children) this.fillCaches0(t, e.id);
	}
	fillCaches() {
		if (this.objCaches === void 0) {
			this.objCaches = /* @__PURE__ */ new Map(), this.parentCaches = /* @__PURE__ */ new Map();
			for (let e of this) this.fillCaches0(e, null);
		}
	}
	randomId() {
		this.fillCaches();
		let e = Array.from(this.objCaches.keys());
		if (e.length !== 0) return e[Math.max(0, Math.floor(Math.random() * e.length) - 1)];
	}
	nonExistOrDescendantOf(e, t) {
		if (!this.has(e)) return !0;
		for (; e;) {
			let n = this.parent(e);
			if (n === t) return !0;
			e = n;
		}
		return !1;
	}
	rootAcestor(e) {
		for (; e;) {
			let t = this.parent(e);
			if (!t) return e;
			e = t;
		}
		return e;
	}
	isDescendantOf(e, t) {
		for (; e;) {
			let n = this.parent(e);
			if (n === t) return !0;
			e = n;
		}
		return !1;
	}
	data(e) {
		return this.get(e)?.data;
	}
	has(e) {
		return this.childrenOf(e) !== void 0;
	}
	partialCache(e) {
		this.partialObjectCaches === void 0 && (this.partialObjectCaches = /* @__PURE__ */ new Map());
		let t = this.get(e);
		t !== void 0 && this.partialObjectCaches.set(e, t);
	}
	get(e) {
		if (this.partialObjectCaches !== void 0) {
			let t = this.partialObjectCaches.get(e);
			if (t !== void 0) return t;
		}
		return this.fillCaches(), this.objCaches.get(e);
	}
	childrenOf(e) {
		return e === null ? this : this.get(e)?.children;
	}
	traverseFrom(e, t) {
		if (e === null) this.traverse(t);
		else {
			let n = this.get(e);
			n && ie(n, t);
		}
	}
	traverse(e) {
		re(this, e);
	}
	totalSize() {
		return this.fillCaches(), this.objCaches.size;
	}
	parent(e) {
		return this.fillCaches(), this.parentCaches.get(e);
	}
	childrenArray(e) {
		return e === null ? this : this.get(e).children;
	}
	modifyById(e, t) {
		if (this.get(e) === void 0) throw Error("not expected");
		{
			let n = this.parent(e), r = this.childrenArray(n), i = r.findIndex((t) => t.id === e);
			if (i < 0) throw Error("not expected");
			let a = r[i];
			r = [...r], r[i] = {
				...a,
				data: t
			};
			let o = /* @__PURE__ */ new Map();
			return o.set(e, r[i]), this.modifyArrayBy(n, r, o);
		}
	}
	modifyArrayBy(e, t, n = void 0) {
		let r = e, i = t;
		for (; r !== null;) {
			let e = i, t = r;
			if (r = this.parent(r), r === void 0) throw Error();
			i = this.childrenArray(r);
			let a = i.findIndex((e) => e.id === t);
			if (a < 0) throw Error();
			i = [...i], i[a] = {
				...i[a],
				children: e
			}, n && n.set(t, i[a]);
		}
		Object.setPrototypeOf(i, h.prototype);
		let a = i;
		if (n && this.objCaches !== void 0 && this.parentCaches !== void 0) {
			a.objCaches = this.objCaches;
			for (let [e, t] of n) a.objCaches.set(e, t);
			a.parentCaches = this.parentCaches, this.objCaches = void 0, this.parentCaches = void 0;
		} else a.fillCaches();
		return a;
	}
	runOp(e) {
		switch (e.type) {
			case 7: return this.addOp(e);
			case 8: return this.deleteOp(e);
			case 9: return this.moveOp(e);
		}
		return null;
	}
	checkDuplicatedIdRec({ id: e, children: t }) {
		if (this.get(e) !== void 0) return !0;
		for (let e of t) if (this.checkDuplicatedIdRec(e)) return !0;
		return !1;
	}
	addOp(e) {
		let { parent: t, fi: n, id: r, data: i, children: a } = e;
		if (t !== null && this.get(t) === void 0 || this.checkDuplicatedIdRec(e)) return null;
		{
			let o = t, s = this.childrenArray(o), c = {
				fi: n,
				id: r,
				data: i,
				children: a
			};
			return s = [...s, c], s.sort((e, t) => e.fi - t.fi), e.localIndex = s.indexOf(c), {
				data: this.modifyArrayBy(o, s),
				actual: e,
				reverse: {
					type: 8,
					id: r
				}
			};
		}
	}
	deleteOp(e) {
		let { id: t } = e;
		if (this.get(t) === null) return null;
		{
			let n = this.parent(t);
			if (n === void 0) return null;
			let r = this.childrenArray(n), i = r.findIndex((e) => e.id === t);
			e.localIndex = i, r = [...r];
			let a = r.splice(i, 1)[0];
			return {
				data: this.modifyArrayBy(n, r),
				actual: e,
				reverse: {
					type: 7,
					...a,
					parent: n
				}
			};
		}
	}
	moveOp(e) {
		let { parent: t, fi: n, id: r } = e;
		if (t !== null && this.get(t) === void 0) return this.deleteOp({
			type: 8,
			id: r
		});
		if (t !== null) {
			let e = t;
			for (; e !== null;) {
				if (e === void 0) throw Error();
				if (e === r) throw new ne("cyclic tree");
				e = this.parent(e);
			}
		}
		let i = this.parent(r);
		if (i === void 0) return null;
		let a = i, o = this.childrenArray(i), s = o.findIndex((e) => e.id === r);
		o = [...o];
		let c = o.splice(s, 1)[0], l = this.modifyArrayBy(i, o);
		i = t, o = l.childrenArray(i);
		let u = c.fi;
		return c = {
			...c,
			fi: n
		}, o = [...o, c], o.sort((e, t) => e.fi - t.fi), e.localIndex = o.indexOf(c), l = l.modifyArrayBy(i, o), {
			data: l,
			actual: e,
			reverse: {
				type: 9,
				parent: a,
				fi: u,
				id: r
			}
		};
	}
	previous(e, t) {
		if (t === null) {
			let t = this.childrenArray(e);
			return t.length === 0 ? null : t[t.length - 1].id;
		}
		let n = null;
		for (let r of this.childrenArray(e)) {
			if (r.id === t) return n;
			n = r.id;
		}
		return null;
	}
	traverseSortNext(e) {
		let t = this.parent(e);
		if (t !== void 0) {
			let n = this.childrenArray(t), r = n.findIndex((t) => t.id === e) + 1;
			if (r < n.length) return n[r].id;
			if (t) return this.traverseSortNext(t);
		}
	}
	sortNext(e) {
		let t = this.childrenArray(e);
		return t.length > 0 ? t[0].id : this.traverseSortNext(e);
	}
	traverseSortPrevious(e) {
		let t = this.childrenArray(e);
		return t.length > 0 ? this.traverseSortPrevious(t[t.length - 1].id) : e;
	}
	sortPrevious(e) {
		let t = this.parent(e);
		if (t !== void 0) {
			let n = this.childrenArray(t), r = n.findIndex((t) => t.id === e) - 1;
			return r >= 0 ? this.traverseSortPrevious(n[r].id) : t;
		}
	}
	getAllSorted(e) {
		let t = [];
		for (let n of e) {
			let e = this.getWithSortKey(n.id);
			e !== void 0 && t.push({
				...n,
				...e
			});
		}
		t.sort((e, t) => o(e.sortKey, t.sortKey));
		for (let e of t) delete e.sortKey;
		return t;
	}
	getAllIdSorted(e) {
		let t = [];
		for (let n of e) {
			let e = this.getWithSortKey(n);
			e !== void 0 && t.push(e);
		}
		t.sort((e, t) => o(e.sortKey, t.sortKey));
		for (let e of t) delete e.sortKey;
		return t.map((e) => e.id);
	}
	getWithSortKey(e) {
		let t = e, n = [], r = this.get(t), i = r;
		if (r !== void 0) {
			for (; t;) n.splice(0, 0, r.fi), t = this.parent(t), t !== null && (r = this.get(t));
			return {
				...i,
				sortKey: n
			};
		}
	}
	insertBeforeHelper(e, t, n) {
		return this.insertAfterHelper(e, this.previous(e, t), n);
	}
	insertAfterHelper(e, t, n) {
		let r = this.childrenArray(e);
		if (t === null) {
			if (r.length === 0) return l(0, n, n);
			{
				let e = r[0].fi;
				return l(e - n, e, n);
			}
		}
		{
			let i = this.get(t);
			if (i === void 0 || this.parent(t) !== e) throw Error("illegal args");
			let a = r.find((e) => e.fi > i.fi);
			if (a === void 0) {
				let e = r[r.length - 1].fi;
				return l(e, e + n, n);
			}
			return l(i.fi, a.fi, n);
		}
	}
}, se = null;
(oe = ae ||= {}).setPreservePrototype = function(e) {
	se = e;
}, oe.tryPreservePrototype = function(e, t) {
	return Object.getPrototypeOf(e) === se && Object.setPrototypeOf(t, se), t;
}, oe.runOp = function(e, t) {
	if (t.type !== 0) return null;
	if (Array.isArray(e) || u(e)) {
		let n = t.props, r = {}, i = u(e) ? e.slice() : [...e], a = !1;
		if (n) for (let e of Object.keys(n)) {
			let t = parseInt(e);
			if (isNaN(t)) throw Error("wrong index");
			r[e] = i[t], i[t] = n[e], a = !0;
		}
		return a ? {
			data: i,
			actual: t,
			reverse: {
				type: 0,
				props: r
			}
		} : null;
	}
	{
		let n = t.props, r = {}, i = { ...e }, a = !1;
		if (n) for (let e of Object.keys(n)) {
			r[e] = i[e];
			let t = n[e];
			t === void 0 ? delete i[e] : i[e] = t, a = !0;
		}
		return a ? {
			data: oe.tryPreservePrototype(e, i),
			actual: t,
			reverse: {
				type: 0,
				props: r
			}
		} : null;
	}
};
var g = class extends Array {
	constructor(...e) {
		super(...e), i(this, "objCaches"), Object.setPrototypeOf(this, g.prototype);
	}
	deepFreeze() {
		let e = 0;
		for (; e < this.length;) d(this[e]), e++;
	}
	fillCaches0(e) {
		this.objCaches.set(e.id, e);
	}
	fillCaches() {
		if (this.objCaches === void 0) {
			this.objCaches = /* @__PURE__ */ new Map(), Object.getOwnPropertyDescriptor(this, "objCaches").enumerable = !1;
			for (let e of this) this.fillCaches0(e);
		}
	}
	randomId() {
		this.fillCaches();
		let e = Array.from(this.objCaches.keys());
		if (e.length !== 0) return e[Math.max(0, Math.floor(Math.random() * e.length) - 1)];
	}
	data(e) {
		return this.get(e)?.data;
	}
	get(e) {
		return this.fillCaches(), this.objCaches.get(e);
	}
	modifyById(e, t) {
		if (this.get(e) === void 0) throw Error("not expected");
		{
			let n = this, r = n.findIndex((t) => t.id === e);
			if (r < 0) throw Error("not expected");
			let i = n[r];
			return n = [...n], n[r] = {
				...i,
				data: t
			}, this.modifyArrayBy(n);
		}
	}
	modifyArrayBy(t) {
		Object.setPrototypeOf(t, g.prototype);
		let n = t;
		return typeof e < "u" || n.fillCaches(), n;
	}
	runOp(e) {
		switch (e.type) {
			case 4: return this.addOp(e);
			case 5: return this.deleteOp(e);
			case 6: return this.moveOp(e);
		}
		return null;
	}
	addOp(e) {
		let { fi: t, id: n, data: r } = e, i = this, a = {
			fi: t,
			id: n,
			data: r
		};
		return i = [...i, a], i.sort((e, t) => e.fi - t.fi), e.localIndex = i.indexOf(a), {
			data: this.modifyArrayBy(i),
			actual: e,
			reverse: {
				type: 5,
				id: n
			}
		};
	}
	deleteOp(e) {
		let { id: t } = e, n = this, r = n.findIndex((e) => e.id === t);
		if (r === -1) return null;
		e.localIndex = r, n = [...n];
		let i = n.splice(r, 1)[0];
		return {
			data: this.modifyArrayBy(n),
			actual: e,
			reverse: {
				type: 4,
				...i
			}
		};
	}
	moveOp(e) {
		let { fi: t, id: n } = e, r = this;
		r = [...r];
		let i = r.findIndex((e) => e.id === n);
		if (i === -1) return null;
		let a = r[i].fi, o = {
			...r[i],
			fi: t
		};
		return r[i] = o, r.sort((e, t) => e.fi - t.fi), e.localIndex = r.indexOf(o), {
			data: this.modifyArrayBy(r),
			actual: e,
			reverse: {
				type: 6,
				fi: a,
				id: n
			}
		};
	}
	previous(e) {
		if (e === null) return this.length === 0 ? null : this[this.length - 1].id;
		let t = null;
		for (let n of this) {
			if (n.id === e) return t;
			t = n.id;
		}
		return null;
	}
	insertBeforeHelper(e, t) {
		return this.insertAfterHelper(this.previous(e), t);
	}
	insertAfterHelper(e, t) {
		let n = this;
		if (e === null) {
			if (n.length === 0) return l(0, t, t);
			{
				let e = n[0].fi;
				return l(e - t, e, t);
			}
		}
		{
			let r = this.get(e);
			if (r === void 0) throw Error("illegal args");
			let i = n.find((e) => e.fi > r.fi);
			if (i === void 0) {
				let e = n[n.length - 1].fi;
				return l(e, e + t, t);
			}
			return l(r.fi, i.fi, t);
		}
	}
};
function ce(e, t) {
	return pe(e, t, null) ?? e;
}
function le(e, t) {
	let n = {
		cur: [],
		result: [],
		len: 0
	};
	return [e = pe(e, t, n) ?? e, n.result];
}
function ue(e, t) {
	return e === null ? null : (e.cur[e.len] = t, e.len += 1, e);
}
function de(e) {
	e && --e.len;
}
function fe(e, t, n) {
	let r = !1, i = e.map((e) => {
		let i = e.id, a = t[i];
		if (a !== void 0 && typeof a == "string" && (r = !0, i = a, n !== null)) throw Error("not supported");
		let o = pe(e.data, t, ue(n, i));
		de(n), r ||= o !== void 0, o === void 0 && (o = e.data);
		let s = fe(e.children, t, n);
		return s === void 0 ? s = e.children : r = !0, {
			...e,
			id: i,
			data: o,
			children: s
		};
	});
	if (r) return i;
}
function pe(e, t, n) {
	if (e instanceof h) {
		let r = fe(e, t, n);
		return r !== void 0 && Object.setPrototypeOf(r, Object.getPrototypeOf(e)), r;
	}
	if (e instanceof g) return function(e, t, n) {
		let r = !1, i = e.map((e) => {
			let i = e.id, a = t[i];
			if (a !== void 0 && typeof a == "string" && (r = !0, i = a, n !== null)) throw Error("not supported");
			let o = pe(e.data, t, ue(n, i));
			return de(n), r ||= o !== void 0, o === void 0 && (o = e.data), {
				...e,
				id: i,
				data: o
			};
		});
		if (r) return Object.setPrototypeOf(i, Object.getPrototypeOf(e)), i;
	}(e, t, n);
	if (Array.isArray(e)) {
		let r = !1, i = e.map((e, i) => {
			let a = pe(e, t, ue(n, i));
			return de(n), r ||= a !== void 0, a === void 0 && (a = e), a;
		});
		return r ? (Object.setPrototypeOf(i, Object.getPrototypeOf(e)), i) : void 0;
	}
	if (e && typeof e == "object" && !u(e)) {
		let r = {}, i = !1;
		for (let [a, o] of Object.entries(e)) if (a !== "name" && a !== "variableId") {
			let e = t[a];
			if (typeof e == "string") {
				if (n !== null) throw Error("not supported");
				i = !0, a = e;
			}
			let s = pe(o, t, ue(n, a));
			de(n), i ||= s !== void 0, s === void 0 && (s = o), r[a] = s;
		} else r[a] = o;
		return i ? (Object.setPrototypeOf(r, Object.getPrototypeOf(e)), r) : void 0;
	}
	if (typeof e == "string") {
		let r = t[e];
		return r !== void 0 && function(e) {
			if (e === null) return null;
			e.result.push(e.cur.slice(0, e.len));
		}(n), r;
	}
}
function me(e) {
	return e && typeof e == "object" && e instanceof v;
}
var he, ge, _, _e, v = class {
	unusedFunOverridesTable(e) {}
	runOp(e) {
		let t = [], n = this, r = 0, i = {};
		for (; r < e.path.length;) {
			if (t.push(n), n = n === void 0 ? void 0 : n[e.path[r]], n !== void 0 && !me(n)) return null;
			r += 1;
		}
		n = n ? c(n) : new v();
		for (let [t, r] of Object.entries(e.props)) i[t] = n[t], r === void 0 ? delete n[t] : n[t] = r;
		for (; r > 0;) {
			if (Object.keys(n).length === 0) {
				let i = t[r - 1];
				i && (n = c(i), delete n[e.path[r - 1]]);
			} else {
				let i = t[r - 1];
				if (i) {
					let t = c(i);
					t[e.path[r - 1]] = n, n = t;
				} else {
					let t = new v();
					t[e.path[r - 1]] = n, n = t;
				}
			}
			--r;
		}
		return {
			data: Object.setPrototypeOf(n, v.prototype),
			actual: e,
			reverse: {
				...e,
				props: i
			}
		};
	}
};
function ve(e, t) {
	if (t === void 0) return;
	let n = !1, r = e.map((e) => {
		let r = e.id, i = ye(e.data, t[r]);
		if (n ||= i !== void 0, i === void 0 && (i = e.data), e.children) {
			let a = ve(e.children, t);
			return a === void 0 ? a = e.children : n = !0, {
				...e,
				id: r,
				data: i,
				children: a
			};
		}
		return {
			...e,
			id: r,
			data: i
		};
	});
	return n ? r : void 0;
}
function ye(e, t) {
	if (!me(t)) return t;
	if (e instanceof h) {
		let n = ve(e, t);
		return n !== void 0 && Object.setPrototypeOf(n, Object.getPrototypeOf(e)), n;
	}
	if (e instanceof g) return function(e, t) {
		if (t === void 0) return;
		let n = !1, r = e.map((e) => {
			let r = e.id, i = ye(e.data, t[r]);
			return n ||= i !== void 0, i === void 0 && (i = e.data), {
				...e,
				id: r,
				data: i
			};
		});
		return n ? (Object.setPrototypeOf(r, Object.getPrototypeOf(e)), r) : void 0;
	}(e, t);
	if (Array.isArray(e)) {
		let n = !1, r = e.map((e, r) => {
			let i = ye(e, t[r]);
			return n ||= i !== void 0, i === void 0 && (i = e), i;
		});
		return n ? (Object.setPrototypeOf(r, Object.getPrototypeOf(e)), r) : void 0;
	}
	if (e instanceof v) return be(e, t);
	if (e && typeof e == "object") {
		let n = {}, r = !1;
		for (let [i, a] of Object.entries(e)) {
			let e = ye(a, t[i]);
			r ||= e !== void 0, e === void 0 && (e = a), n[i] = e;
		}
		return r ? (Object.setPrototypeOf(n, Object.getPrototypeOf(e)), n) : void 0;
	}
}
function be(e, t) {
	if (e === void 0) return t;
	if (t === void 0) return e;
	if (!me(t)) return t;
	if (!me(e)) return he.apply(e, t);
	let n = /* @__PURE__ */ new Set();
	for (let t of Object.keys(e)) n.add(t);
	for (let e of Object.keys(t)) n.add(e);
	let r = new v();
	for (let i of n) r[i] = be(e === void 0 ? void 0 : e[i], t === void 0 ? void 0 : t[i]);
	return r;
}
((e) => {
	e.apply = function(e, t) {
		return ye(e, t) ?? e;
	}, e.merge = function(e, t) {
		return be(e, t);
	}, e.filterOp = function(e, t) {
		let n = 0, r = t.path, i = e;
		for (; n < r.length && i !== void 0;) {
			if (i = y.zoomOnce(i, r[n]), i === void 0) return t;
			if (!me(i)) return;
			n += 1;
		}
		if (i === void 0) return t;
		if (me(i)) {
			if (t.type === 0) {
				let e = { ...t.props };
				for (let t of Object.keys(i)) delete e[t];
				return {
					...t,
					props: e
				};
			}
			if (t.type === 1 || t.type === 4 || t.type === 7) {
				let e = ve([t], i);
				return e ? e[0] : t;
			}
			return t;
		}
	};
})(he ||= {}), (ge ||= {}).replaceProps = function(e, t) {
	let n = y.zoom(t, e.path);
	if (typeof n == "object") {
		let t = {};
		for (let r of Object.keys(e.props)) t[r] = n[r];
		return {
			...e,
			props: t
		};
	}
	return {
		...e,
		props: {}
	};
}, ((e) => {
	function t(e, t) {
		let n = t.path, r = [];
		for (;;) {
			let i;
			if (e instanceof v && t.type === 0 && (i = e.runOp({
				...t,
				path: n.slice(r.length)
			}), i === null && (i = void 0)), i === void 0 && r.length === n.length && (i = e instanceof h || e instanceof g || e instanceof m ? e.runOp(t) : ae.runOp(e, t)), i !== void 0) {
				if (i !== null) {
					let e = i.data;
					for (let t = r.length - 1; t >= 0; t--) {
						let i = n[t], a = r[t];
						if (a instanceof h) {
							if (typeof i == "number") throw Error("illegal arg");
							e = a.modifyById(i, e);
						} else if (a instanceof g) {
							if (typeof i == "number") throw Error("illegal arg");
							e = a.modifyById(i, e);
						} else if (a instanceof m) {
							if (typeof i == "number") throw Error("illegal arg");
							e = a.modifyById(i, e);
						} else if (a instanceof v) {
							let t = {
								...a,
								[i]: e
							};
							e = Object.setPrototypeOf(t, v.prototype);
						} else {
							if (typeof a != "object") return null;
							if (Array.isArray(a) || u(a)) {
								if (typeof i == "string" && (i = parseInt(i), isNaN(i))) throw Error("Invalid path");
								let t = e;
								e = u(a) ? a.slice() : [...a], e[i] = t;
							} else e = ae.tryPreservePrototype(a, {
								...a,
								[i]: e
							});
						}
					}
					return {
						data: e,
						actual: {
							...i.actual,
							path: n
						},
						reverse: {
							...i.reverse,
							path: n
						}
					};
				}
				return null;
			}
			let a, o = n[r.length];
			if (e instanceof h) {
				if (typeof o == "number") throw Error("");
				a = e.get(o)?.data;
			} else if (e instanceof g) {
				if (typeof o == "number") throw Error("");
				a = e.get(o)?.data;
			} else e !== null && (a = e[o]);
			if (a === void 0) return null;
			r.push(e), e = a;
		}
	}
	function n(e, t) {
		for (let n = 0; n < e.length && n < t.length; n++) if (e[n] !== t[n]) return !0;
		return !1;
	}
	function r(e, t) {
		if (e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
		return !0;
	}
	e.drop = function(e, t) {
		return {
			...e,
			path: e.path.slice(t)
		};
	}, e.applySimple = function(e, n) {
		return t(e, n)?.data ?? e;
	}, e.apply = t, e.pathDisjoint = n, e.pathEq = r, e.commutative = function(e, t) {
		return n(e.path, t.path);
	}, e.subsumed = function(e, t) {
		return !(e.type !== 0 || t.type !== 0 || !r(e.path, t.path)) && Object.keys(e.props).every((e) => t.props[e] !== void 0);
	};
})(_ ||= {}), ((e) => {
	function t(e, t) {
		let n = e, r = [], i = [];
		for (let e of t) try {
			if (e.type === 3 || e.type === 5 && e.path[e.path.length - 1] === "variables") {
				let t, a, o;
				if (e.type === 3 ? (t = y.zoom(n, [...e.path, e.id]), o = _.apply(n, {
					...e,
					type: 2
				})) : (t = y.zoom(n, [
					...e.path,
					e.id,
					"value"
				]), o = _.apply(n, e)), o !== null) {
					n = o.data;
					let [s, c] = le(n, { [e.id]: t });
					n = s;
					for (let o = 0; o < c.length; o++) {
						let s = c[o], l = s.pop();
						if (typeof l == "number") {
							let r = [l];
							for (let e = o + 1; e < c.length; e++) {
								let t = c[e], n = t[t.length - 1];
								if (typeof n != "number" || !y.equal(s, t.slice(0, t.length - 1))) break;
								r.push(n), c.splice(e, 1);
							}
							let i = y.zoom(n, s);
							a = i.map((t, n) => r.includes(n) ? e.id : t), t = i, l = s.pop();
						} else {
							if (l === "alphaOverride" || l === "alpha") {
								t /= 100;
								let e = t, r = y.zoom(n, s.slice(0, s.length - 2)), i = r.layers.map((t) => t.id === s[s.length - 1] ? {
									...t,
									data: {
										...t.data,
										[l]: e
									}
								} : t);
								Object.setPrototypeOf(i, Object.getPrototypeOf(r.layers)), r.layers = i;
							}
							a = e.id;
						}
						r.push({
							type: 0,
							path: s,
							props: { [l]: t }
						}), i.push({
							type: 0,
							path: s,
							props: { [l]: a }
						});
					}
					i.push(o.reverse), r.push(o.actual);
				}
			} else {
				let t = _.apply(n, e);
				t !== null && (r.push(t.actual), n = t.data, i.push(t.reverse));
			}
		} catch (e) {
			if (e instanceof ne) return null;
			throw e;
		}
		return {
			data: n,
			actual: r,
			reverse: i.reverse()
		};
	}
	e.empty = function() {
		return [];
	}, e.removePrefix = function(e, t) {
		let n = [];
		for (let r of e) {
			let [e, ...i] = r.path;
			e === t && n.push({
				...r,
				path: i
			});
		}
		return n;
	}, e.addPrefix = function(e, t) {
		return e.map((e) => ({
			...e,
			path: [t, ...e.path]
		}));
	}, e.concat = function(e, t) {
		return [...e, ...t];
	}, e.compress = function(e, t) {
		return [...e.filter((e) => !t.some((t) => _.subsumed(e, t))), ...t];
	}, e.commutative = function(e, t) {
		return e.every((e) => t.every((t) => _.commutative(e, t)));
	}, e.applyAll = function(e, n) {
		for (let r of n) {
			let n = t(e, r);
			n !== null && (e = n.data);
		}
		return e;
	}, e.apply = t;
})(_e ||= {});
var xe = Symbol(), Se = Symbol(), Ce = Symbol(), we = class {
	reportOp(e, t, n = []) {
		let r = this;
		if (t === null) return;
		r._current = t.data;
		let i = n;
		for (; !(r instanceof Pe);) {
			let e = r._path, t = r._current;
			if (e !== "" && i.splice(0, 0, e), r = r._parent, r === null) return;
			r.update(e, t);
		}
		r.push(i, e, t.actual, t.reverse);
	}
	deleteChildren(e) {
		if (this._children) {
			let t = this._children[e];
			if (t) {
				let n = t[Ce];
				n && n(), delete this._children[e];
			}
		}
	}
}, Te = class extends we {
	constructor(e, t, n) {
		super(), this._parent = e, this._path = t, this._current = n;
	}
	update(e, t) {
		if (Array.isArray(this._current)) {
			if (typeof e == "string" && (e = parseInt(e), isNaN(e))) throw Error("Invalid path");
			this._current = [...this._current], this._current[e] = t;
		} else this._current = ae.tryPreservePrototype(this._current, {
			...this._current,
			[e]: t
		});
	}
	runOp(e) {
		this.reportOp(e, ae.runOp(this._current, e), e.path);
	}
}, Ee = class extends we {
	constructor(e, t, n) {
		super(), this._parent = e, this._path = t, this._current = n;
	}
	update(e, t) {
		this._current = {
			...this._current,
			[e]: t
		}, Object.setPrototypeOf(this._current, m.prototype);
	}
	runOp(e) {
		this.reportOp(e, this._current.runOp(e));
	}
}, De = {
	get(e, t) {
		if (t === Ce) return () => {
			e._parent = null;
		};
		if (t === xe) return e._current;
		if (t === Se) return e;
		let { _current: n, _children: r } = e;
		if (t === "push" && Array.isArray(n)) throw Error("not supported to expand array");
		let i = r === void 0 ? void 0 : r[t];
		if (i !== void 0) return i;
		let a = n[t], o = Fe(e, t, a);
		return o === a ? a : (r === void 0 && (r = {}, e._children = r), r[t] = o, o);
	},
	has: (e, t) => t in e._current,
	ownKeys: (e) => Reflect.ownKeys(e._current),
	defineProperty() {
		throw Error("not supported");
	},
	getPrototypeOf: (e) => Object.getPrototypeOf(e._current),
	setPrototypeOf() {
		throw Error("not supported");
	},
	getOwnPropertyDescriptor(e, t) {
		let n = e._current, r = Reflect.getOwnPropertyDescriptor(n, t);
		return r && {
			writable: !0,
			configurable: !0,
			enumerable: r.enumerable,
			value: n[t]
		};
	}
}, Oe = {
	...De,
	set(e, t, n) {
		let r = {
			type: 0,
			props: { [t]: b(n) ?? n }
		};
		return e.deleteChildren(t), e.runOp(r), !0;
	},
	deleteProperty(e, t) {
		let n = {
			type: 0,
			props: { [t]: void 0 }
		};
		return e.deleteChildren(t), e.runOp(n), !0;
	}
}, ke = {
	...De,
	set(e, t, n) {
		return n === void 0 ? this.deleteProperty(e, t) : (e.deleteChildren(t), e.runOp({
			type: 1,
			id: t,
			data: n
		})), !0;
	},
	deleteProperty: (e, t) => (e.runOp({
		type: 2,
		id: t
	}), !0)
}, Ae = class extends we {
	constructor(e, t, n) {
		super(), this._children = {}, this._parent = e, this._path = t, this._current = n, this[Ce] = () => {
			this._parent = null;
		};
	}
	unproxy() {
		return this._current;
	}
	update(e, t) {
		this._current = this._current.modifyById(e, t);
	}
	runOp(e) {
		this.reportOp(e, this._current.runOp(e));
	}
	randomId() {
		return this._current.randomId();
	}
	isDescendantOf(e, t) {
		return this._current.isDescendantOf(e, t);
	}
	childrenOf(e) {
		return this._current.childrenOf(e);
	}
	get(e) {
		return this._current.get(e);
	}
	parent(e) {
		return this._current.parent(e);
	}
	traverse(e) {
		this._current.traverse((t, n) => {
			e(t, this.data(t));
		});
	}
	data(e) {
		let { _current: t, _children: n } = this, r = n === void 0 ? void 0 : n[e];
		if (r !== void 0) return r;
		let i = t.get(e)?.data, a = Fe(this, e, i);
		return a === i ? i : (n === void 0 && (n = {}, this._children = n), n[e] = a, a);
	}
	add(e, t, n, r, i) {
		this.runOp({
			type: 7,
			parent: e,
			fi: t,
			id: n,
			data: r,
			children: i
		});
	}
	move(e, t, n) {
		this.runOp({
			type: 9,
			parent: e,
			fi: t,
			id: n
		});
	}
	insertAfter(e, t, n) {
		let r = this._current.insertAfterHelper(e, t, n.length);
		for (let t = 0; t < n.length; t++) {
			let i = n[t];
			this.add(e, r[t], i.id, i.data, i.children);
		}
	}
	insertBefore(e, t, n) {
		let r = this._current.insertBeforeHelper(e, t, n.length);
		for (let t = 0; t < n.length; t++) {
			let i = n[t];
			this.add(e, r[t], i.id, i.data, i.children);
		}
	}
	moveAfter(e, t, n) {
		let r = this._current.insertAfterHelper(e, t, n.length);
		for (let t = 0; t < n.length; t++) {
			let i = n[t];
			this.move(e, r[t], i);
		}
	}
	moveBefore(e, t, n) {
		let r = this._current.insertBeforeHelper(e, t, n.length);
		for (let t = 0; t < n.length; t++) {
			let i = n[t];
			this.move(e, r[t], i);
		}
	}
	delete(e) {
		this.deleteChildren(e), this.runOp({
			type: 8,
			id: e
		});
	}
	sortNext(e) {
		return this._current.sortNext(e);
	}
	sortPrevious(e) {
		return this._current.sortPrevious(e);
	}
	getAllSorted(e) {
		return this._current.getAllSorted(e);
	}
}, je = class extends we {
	constructor(e, t, n) {
		super(), this._children = {}, this._parent = e, this._path = t, this._current = n, this[Ce] = () => {
			this._parent = null;
		};
	}
	unproxy() {
		return this._current;
	}
	get length() {
		return this._current.length;
	}
	forEach(e) {
		let t = this.length;
		for (let n = 0; n < t; n++) {
			let t = this._current[n].id, r = this._current[n].fi;
			e(this.data(this._current[n].id), t, r, n);
		}
	}
	find(e) {
		let t = this.length;
		for (let n = 0; n < t; n++) {
			let t = this._current[n].id;
			if (e(this.data(t), t)) return this.get(t);
		}
	}
	update(e, t) {
		this._current = this._current.modifyById(e, t);
	}
	randomId() {
		return this._current.randomId();
	}
	get(e) {
		return {
			...this._current.get(e),
			data: this.data(e)
		};
	}
	at(e) {
		let { id: t, fi: n } = this._current.at(e);
		return {
			id: t,
			fi: n,
			data: this.data(t)
		};
	}
	data(e) {
		let { _current: t, _children: n } = this, r = n === void 0 ? void 0 : n[e];
		if (r !== void 0) return r;
		let i = t.get(e)?.data, a = Fe(this, e, i);
		return a === i ? i : (n === void 0 && (n = {}, this._children = n), n[e] = a, a);
	}
	runOp(e) {
		this.reportOp(e, this._current.runOp(e));
	}
	add(e, t, n) {
		this.runOp({
			type: 4,
			fi: e,
			id: t,
			data: n
		});
	}
	move(e, t) {
		this.runOp({
			type: 6,
			fi: e,
			id: t
		});
	}
	insertAfter(e, t) {
		let n = this._current.insertAfterHelper(e, t.length);
		for (let e = 0; e < t.length; e++) {
			let r = t[e];
			this.add(n[e], r.id, r.data);
		}
	}
	insertBefore(e, t) {
		let n = this._current.insertBeforeHelper(e, t.length);
		for (let e = 0; e < t.length; e++) {
			let r = t[e];
			this.add(n[e], r.id, r.data);
		}
	}
	moveAfter(e, t) {
		let n = this._current.insertAfterHelper(e, t.length);
		for (let e = 0; e < t.length; e++) {
			let r = t[e];
			this.move(n[e], r);
		}
	}
	moveBefore(e, t) {
		let n = this._current.insertBeforeHelper(e, t.length);
		for (let e = 0; e < t.length; e++) {
			let r = t[e];
			this.move(n[e], r);
		}
	}
	delete(e) {
		this.deleteChildren(e), this.runOp({
			type: 5,
			id: e
		});
	}
};
function Me(e, t, n) {
	if (e.length > 0) {
		let r = e[e.length - 1];
		if (r.type === 0 && t.type === 0 && y.equal(r.path, n)) return void Object.assign(r.props, t.props);
	}
	e.push({
		...t,
		path: n
	});
}
var y, Ne, Pe = class extends we {
	constructor(e) {
		super(), this.ts = [], this.actual = [], this.reverse = [], this._current = e;
	}
	update(e, t) {
		if (e !== "") throw Error("");
		this._current = t;
	}
	push(e, t, n, r) {
		Me(this.ts, t, e), Me(this.actual, n, e), Me(this.reverse, r, e);
	}
	result() {
		return {
			data: this._current,
			ts: this.ts,
			actual: this.actual,
			reverse: this.reverse.reverse()
		};
	}
};
function Fe(e, t, n) {
	return n instanceof h ? new Ae(e, t, n) : n instanceof g ? new je(e, t, n) : n instanceof m ? new Proxy(new Ee(e, t, n), ke) : typeof n == "object" && n ? u(n) ? n : new Proxy(new Te(e, t, n), Oe) : n;
}
function Ie(e) {
	let t = new Pe(e);
	return [Fe(t, "", e), t];
}
function Le(e, t) {
	let [n, r] = Ie(e);
	return t(n), r.result();
}
function b(e) {
	return e instanceof Ae || e instanceof je ? e._current : typeof e == "object" && e ? e[xe] : e;
}
((e) => {
	function t(e, t) {
		return (e instanceof h || e instanceof Ae) && typeof t == "string" || (e instanceof g || e instanceof je) && typeof t == "string" ? e.data(t) : typeof t == "number" && Array.isArray(e) || typeof t == "string" && typeof e == "object" && e ? e[t] : void 0;
	}
	function n(e, n, r = 0) {
		for (; r < n.length && e !== void 0;) e = t(e, n[r]), r += 1;
		return e;
	}
	e.equal = function(e, t) {
		if (t.length !== e.length) return !1;
		{
			let n = 0;
			for (; n < e.length;) {
				if (e[n] !== t[n]) return !1;
				n += 1;
			}
		}
		return !0;
	}, e.removeOverridden = function(e, t, r) {
		let i = n(r, e);
		if (i !== void 0 && typeof i == "object" && i) {
			let e = { ...t };
			return Object.keys(i).forEach((t) => {
				delete e[t];
			}), e;
		}
		return t;
	}, e.zoomOnce = t, e.zoom = n, e.findPathes = function(e, t) {
		let n = [];
		return function e(r, i) {
			if (r instanceof p && r.id === t.id) n.push(i);
			else if (r instanceof g) for (let t = 0; t < r.length; t++) e(r[t].data, [...i, r[t].id]);
			else if (r instanceof h) r.traverse((t, n) => {
				e(n, [...i, t]);
			});
			else if (Array.isArray(r)) {
				if (typeof r[0] == "number") return;
				for (let t = 0; t < r.length; t++) e(r[t], [...i, t]);
			} else {
				if (u(r)) return;
				if (typeof r == "object" && r) for (let t in r) e(r[t], [...i, t]);
			}
		}(e, []), n;
	};
})(y ||= {});
try {
	Ne = new TextDecoder();
} catch {}
var x, S, C, w, T, Re, E, D = 0, ze = [], Be = ze, Ve = 0, O = {}, k = 0, A = 0, j = [], He = {
	useRecords: !1,
	mapsAsObjects: !0
}, Ue = new class {}();
Ue.name = "MessagePack 0xC1";
var M = !1, We = 2, Ge = class {
	constructor(e) {
		e && (!1 === e.useRecords && e.mapsAsObjects === void 0 && (e.mapsAsObjects = !0), e.sequential && !1 !== e.trusted && (e.trusted = !0, !e.structures && e.useRecords != 0 && (e.structures = [], e.maxSharedStructures ||= 0)), e.structures ? e.structures.sharedLength = e.structures.length : e.getStructures && ((e.structures = []).uninitialized = !0, e.structures.sharedLength = 0), e.int64AsNumber && (e.int64AsType = "number")), Object.assign(this, e);
	}
	unpack(e, t) {
		if (x) return _t(() => (vt(), this ? this.unpack(e, t) : Ge.prototype.unpack.call(He, e, t)));
		!e.buffer && e.constructor === ArrayBuffer && (e = typeof n < "u" ? n.from(e) : new Uint8Array(e)), typeof t == "object" ? (S = t.end || e.length, D = t.start || 0) : (D = 0, S = t > -1 ? t : e.length), Ve = 0, A = 0, w = null, Be = ze, T = null, x = e;
		try {
			E = e.dataView || (e.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength));
		} catch (t) {
			throw x = null, e instanceof Uint8Array ? t : /* @__PURE__ */ Error("Source must be a Uint8Array or Buffer but was a " + (e && typeof e == "object" ? e.constructor.name : typeof e));
		}
		if (this instanceof Ge) {
			if (O = this, this.structures) return C = this.structures, Ke();
			(!C || C.length > 0) && (C = []);
		} else O = He, (!C || C.length > 0) && (C = []);
		return Ke();
	}
	unpackMultiple(e, t) {
		let n, r = 0;
		try {
			M = !0;
			let i = e.length, a = this ? this.unpack(e, i) : xt.unpack(e, i);
			if (!t) {
				for (n = [a]; D < i;) r = D, n.push(Ke());
				return n;
			}
			if (!1 === t(a, r, D)) return;
			for (; D < i;) if (r = D, !1 === t(Ke(), r, D)) return;
		} catch (e) {
			throw e.lastPosition = r, e.values = n, e;
		} finally {
			M = !1, vt();
		}
	}
	_mergeStructures(e, t) {
		e ||= [], Object.isFrozen(e) && (e = e.map((e) => e.slice(0)));
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t];
			n && (n.isShared = !0, t >= 32 && (n.highByte = t - 32 >> 5));
		}
		e.sharedLength = e.length;
		for (let n in t || []) if (n >= 0) {
			let r = e[n], i = t[n];
			i && (r && ((e.restoreStructures || (e.restoreStructures = []))[n] = r), e[n] = i);
		}
		return this.structures = e;
	}
	decode(e, t) {
		return this.unpack(e, t);
	}
};
function Ke(e) {
	try {
		if (!O.trusted && !M) {
			let e = C.sharedLength || 0;
			e < C.length && (C.length = e);
		}
		let e;
		if (O.randomAccessStructure && x[D] < 64 && x[D], e = N(), T &&= (D = T.postBundlePosition, null), M && (C.restoreStructures = null), D == S) C && C.restoreStructures && qe(), C = null, x = null, Re &&= null;
		else {
			if (D > S) throw Error("Unexpected end of MessagePack data");
			if (!M) {
				let t;
				try {
					t = JSON.stringify(e, (e, t) => typeof t == "bigint" ? `${t}n` : t).slice(0, 100);
				} catch (e) {
					t = "(JSON view not available " + e + ")";
				}
				throw Error("Data read, but end of buffer not reached " + t);
			}
		}
		return e;
	} catch (e) {
		throw C && C.restoreStructures && qe(), vt(), (e instanceof RangeError || e.message.startsWith("Unexpected end of buffer") || D > S) && (e.incomplete = !0), e;
	}
}
function qe() {
	for (let e in C.restoreStructures) C[e] = C.restoreStructures[e];
	C.restoreStructures = null;
}
function N() {
	let e = x[D++];
	if (e < 160) {
		if (e < 128) {
			if (e < 64) return e;
			{
				let t = C[63 & e] || O.getStructures && Ze()[63 & e];
				return t ? (t.read ||= Ye(t, 63 & e), t.read()) : e;
			}
		}
		if (e < 144) {
			if (e -= 128, O.mapsAsObjects) {
				let t = {};
				for (let n = 0; n < e; n++) {
					let e = ut();
					e === "__proto__" && (e = "__proto_"), t[e] = N();
				}
				return t;
			}
			{
				let t = /* @__PURE__ */ new Map();
				for (let n = 0; n < e; n++) t.set(N(), N());
				return t;
			}
		}
		{
			e -= 144;
			let t = Array(e);
			for (let n = 0; n < e; n++) t[n] = N();
			return O.freezeData ? Object.freeze(t) : t;
		}
	}
	if (e < 192) {
		let t = e - 160;
		if (A >= D) return w.slice(D - k, (D += t) - k);
		if (A == 0 && S < 140) {
			let e = t < 16 ? ot(t) : at(t);
			if (e != null) return e;
		}
		return Qe(t);
	}
	{
		let t;
		switch (e) {
			case 192: return null;
			case 193: return T ? (t = N(), t > 0 ? T[1].slice(T.position1, T.position1 += t) : T[0].slice(T.position0, T.position0 -= t)) : Ue;
			case 194: return !1;
			case 195: return !0;
			case 196:
				if (t = x[D++], t === void 0) throw Error("Unexpected end of buffer");
				return ct(t);
			case 197: return t = E.getUint16(D), D += 2, ct(t);
			case 198: return t = E.getUint32(D), D += 4, ct(t);
			case 199: return F(x[D++]);
			case 200: return t = E.getUint16(D), D += 2, F(t);
			case 201: return t = E.getUint32(D), D += 4, F(t);
			case 202:
				if (t = E.getFloat32(D), O.useFloat32 > 2) {
					let e = bt[(127 & x[D]) << 1 | x[D + 1] >> 7];
					return D += 4, (e * t + (t > 0 ? .5 : -.5) | 0) / e;
				}
				return D += 4, t;
			case 203: return t = E.getFloat64(D), D += 8, t;
			case 204: return x[D++];
			case 205: return t = E.getUint16(D), D += 2, t;
			case 206: return t = E.getUint32(D), D += 4, t;
			case 207: return O.int64AsType === "number" ? (t = 4294967296 * E.getUint32(D), t += E.getUint32(D + 4)) : O.int64AsType === "string" ? t = E.getBigUint64(D).toString() : O.int64AsType === "auto" ? (t = E.getBigUint64(D), t <= BigInt(2) << BigInt(52) && (t = Number(t))) : t = E.getBigUint64(D), D += 8, t;
			case 208: return E.getInt8(D++);
			case 209: return t = E.getInt16(D), D += 2, t;
			case 210: return t = E.getInt32(D), D += 4, t;
			case 211: return O.int64AsType === "number" ? (t = 4294967296 * E.getInt32(D), t += E.getUint32(D + 4)) : O.int64AsType === "string" ? t = E.getBigInt64(D).toString() : O.int64AsType === "auto" ? (t = E.getBigInt64(D), t >= BigInt(-2) << BigInt(52) && t <= BigInt(2) << BigInt(52) && (t = Number(t))) : t = E.getBigInt64(D), D += 8, t;
			case 212:
				if (t = x[D++], t == 114) return ft(63 & x[D++]);
				{
					let e = j[t];
					if (e) return e.read ? (D++, e.read(N())) : e.noBuffer ? (D++, e()) : e(x.subarray(D, ++D));
					throw Error("Unknown extension " + t);
				}
			case 213: return t = x[D], t == 114 ? (D++, ft(63 & x[D++], x[D++])) : F(2);
			case 214: return F(4);
			case 215: return F(8);
			case 216: return F(16);
			case 217: return t = x[D++], A >= D ? w.slice(D - k, (D += t) - k) : $e(t);
			case 218: return t = E.getUint16(D), A >= (D += 2) ? w.slice(D - k, (D += t) - k) : et(t);
			case 219: return t = E.getUint32(D), A >= (D += 4) ? w.slice(D - k, (D += t) - k) : tt(t);
			case 220: return t = E.getUint16(D), D += 2, rt(t);
			case 221: return t = E.getUint32(D), D += 4, rt(t);
			case 222: return t = E.getUint16(D), D += 2, it(t);
			case 223: return t = E.getUint32(D), D += 4, it(t);
			default:
				if (e >= 224) return e - 256;
				if (e === void 0) {
					let e = /* @__PURE__ */ Error("Unexpected end of MessagePack data");
					throw e.incomplete = !0, e;
				}
				throw Error("Unknown MessagePack token " + e);
		}
	}
}
var Je = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
function Ye(e, t) {
	function n() {
		if (n.count++ > We) {
			let r;
			try {
				r = e.read = Function("r", "return function(){return " + (O.freezeData ? "Object.freeze" : "") + "({" + e.map((e) => e === "__proto__" ? "__proto_:r()" : Je.test(e) ? e + ":r()" : "[" + JSON.stringify(e) + "]:r()").join(",") + "})}")(N);
			} catch {
				return We = 1 / 0, n();
			}
			return e.read0 = r, e.highByte === 0 && (e.read = Xe(t, e.read)), r();
		}
		let r = {};
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t];
			n === "__proto__" && (n = "__proto_"), r[n] = N();
		}
		return O.freezeData ? Object.freeze(r) : r;
	}
	return n.count = 0, e.read0 = n, e.highByte === 0 ? Xe(t, n) : n;
}
var Xe = (e, t) => function() {
	let n = x[D++];
	if (n === 0) return t();
	let r = e < 32 ? -(e + (n << 5)) : e + (n << 5), i = C[r] || Ze()[r];
	if (!i) throw Error("Record id is not defined for " + r);
	return i.read ||= Ye(i, e), i.read();
};
function Ze() {
	let e = _t(() => (x = null, O.getStructures()));
	return C = O._mergeStructures(e, C);
}
var Qe = nt, $e = nt, et = nt, tt = nt;
function nt(e) {
	let t;
	if (e < 16 && (t = ot(e))) return t;
	if (e > 64 && Ne) return Ne.decode(x.subarray(D, D += e));
	let n = D + e, r = [];
	for (t = ""; D < n;) {
		let e = x[D++];
		if (128 & e) {
			if ((224 & e) == 192) {
				let t = (31 & e) << 6 | 63 & x[D++];
				t < 128 ? r.push(65533) : r.push(t);
			} else if ((240 & e) == 224) {
				let t = (31 & e) << 12 | (63 & x[D++]) << 6 | 63 & x[D++];
				t < 2048 || t >= 55296 && t <= 57343 ? r.push(65533) : r.push(t);
			} else if ((248 & e) == 240) {
				let t = (7 & e) << 18 | (63 & x[D++]) << 12 | (63 & x[D++]) << 6 | 63 & x[D++];
				t < 65536 || t > 1114111 ? r.push(65533) : (t > 65535 && (t -= 65536, r.push(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), r.push(t));
			} else r.push(65533);
		} else r.push(e);
		r.length >= 4096 && (t += P.apply(String, r), r.length = 0);
	}
	return r.length > 0 && (t += P.apply(String, r)), t;
}
function rt(e) {
	let t = Array(e);
	for (let n = 0; n < e; n++) t[n] = N();
	return O.freezeData ? Object.freeze(t) : t;
}
function it(e) {
	if (O.mapsAsObjects) {
		let t = {};
		for (let n = 0; n < e; n++) {
			let e = ut();
			e === "__proto__" && (e = "__proto_"), t[e] = N();
		}
		return t;
	}
	{
		let t = /* @__PURE__ */ new Map();
		for (let n = 0; n < e; n++) t.set(N(), N());
		return t;
	}
}
var P = String.fromCharCode;
function at(e) {
	let t = D, n = Array(e);
	for (let r = 0; r < e; r++) {
		let e = x[D++];
		if ((128 & e) > 0) return void (D = t);
		n[r] = e;
	}
	return P.apply(String, n);
}
function ot(e) {
	if (e < 4) {
		if (e < 2) {
			if (e === 0) return "";
			{
				let e = x[D++];
				return (128 & e) > 1 ? void --D : P(e);
			}
		}
		{
			let t = x[D++], n = x[D++];
			if ((128 & t) > 0 || (128 & n) > 0) return void (D -= 2);
			if (e < 3) return P(t, n);
			let r = x[D++];
			return (128 & r) > 0 ? void (D -= 3) : P(t, n, r);
		}
	}
	{
		let t = x[D++], n = x[D++], r = x[D++], i = x[D++];
		if ((128 & t) > 0 || (128 & n) > 0 || (128 & r) > 0 || (128 & i) > 0) return void (D -= 4);
		if (e < 6) {
			if (e === 4) return P(t, n, r, i);
			{
				let e = x[D++];
				return (128 & e) > 0 ? void (D -= 5) : P(t, n, r, i, e);
			}
		}
		if (e < 8) {
			let a = x[D++], o = x[D++];
			if ((128 & a) > 0 || (128 & o) > 0) return void (D -= 6);
			if (e < 7) return P(t, n, r, i, a, o);
			let s = x[D++];
			return (128 & s) > 0 ? void (D -= 7) : P(t, n, r, i, a, o, s);
		}
		{
			let a = x[D++], o = x[D++], s = x[D++], c = x[D++];
			if ((128 & a) > 0 || (128 & o) > 0 || (128 & s) > 0 || (128 & c) > 0) return void (D -= 8);
			if (e < 10) {
				if (e === 8) return P(t, n, r, i, a, o, s, c);
				{
					let e = x[D++];
					return (128 & e) > 0 ? void (D -= 9) : P(t, n, r, i, a, o, s, c, e);
				}
			}
			if (e < 12) {
				let l = x[D++], u = x[D++];
				if ((128 & l) > 0 || (128 & u) > 0) return void (D -= 10);
				if (e < 11) return P(t, n, r, i, a, o, s, c, l, u);
				let d = x[D++];
				return (128 & d) > 0 ? void (D -= 11) : P(t, n, r, i, a, o, s, c, l, u, d);
			}
			{
				let l = x[D++], u = x[D++], d = x[D++], f = x[D++];
				if ((128 & l) > 0 || (128 & u) > 0 || (128 & d) > 0 || (128 & f) > 0) return void (D -= 12);
				if (e < 14) {
					if (e === 12) return P(t, n, r, i, a, o, s, c, l, u, d, f);
					{
						let e = x[D++];
						return (128 & e) > 0 ? void (D -= 13) : P(t, n, r, i, a, o, s, c, l, u, d, f, e);
					}
				}
				{
					let ee = x[D++], p = x[D++];
					if ((128 & ee) > 0 || (128 & p) > 0) return void (D -= 14);
					if (e < 15) return P(t, n, r, i, a, o, s, c, l, u, d, f, ee, p);
					let te = x[D++];
					return (128 & te) > 0 ? void (D -= 15) : P(t, n, r, i, a, o, s, c, l, u, d, f, ee, p, te);
				}
			}
		}
	}
}
function st() {
	let e, t = x[D++];
	if (t < 192) e = t - 160;
	else switch (t) {
		case 217:
			e = x[D++];
			break;
		case 218:
			e = E.getUint16(D), D += 2;
			break;
		case 219:
			e = E.getUint32(D), D += 4;
			break;
		default: throw Error("Expected string");
	}
	return nt(e);
}
function ct(e) {
	return O.copyBuffers ? Uint8Array.prototype.slice.call(x, D, D += e) : x.subarray(D, D += e);
}
function F(e) {
	let t = x[D++];
	if (j[t]) {
		let n;
		return j[t](x.subarray(D, n = D += e), (e) => {
			D = e;
			try {
				return N();
			} finally {
				D = n;
			}
		});
	}
	throw Error("Unknown extension type " + t);
}
var lt = Array(4096);
function ut() {
	let e = x[D++];
	if (!(e >= 160 && e < 192)) return D--, dt(N());
	if (e -= 160, A >= D) return w.slice(D - k, (D += e) - k);
	if (!(A == 0 && S < 180)) return Qe(e);
	let t, n = 4095 & (e << 5 ^ (e > 1 ? E.getUint16(D) : e > 0 ? x[D] : 0)), r = lt[n], i = D, a = D + e - 3, o = 0;
	if (r && r.bytes == e) {
		for (; i < a;) {
			if (t = E.getUint32(i), t != r[o++]) {
				i = 1879048192;
				break;
			}
			i += 4;
		}
		for (a += 3; i < a;) if (t = x[i++], t != r[o++]) {
			i = 1879048192;
			break;
		}
		if (i === a) return D = i, r.string;
		a -= 3, i = D;
	}
	for (r = [], lt[n] = r, r.bytes = e; i < a;) t = E.getUint32(i), r.push(t), i += 4;
	for (a += 3; i < a;) t = x[i++], r.push(t);
	let s = e < 16 ? ot(e) : at(e);
	return r.string = s ?? Qe(e);
}
function dt(e) {
	if (typeof e == "string") return e;
	if (typeof e == "number" || typeof e == "boolean" || typeof e == "bigint") return e.toString();
	if (e == null) return e + "";
	if (O.allowArraysInMapKeys && Array.isArray(e) && e.flat().every((e) => [
		"string",
		"number",
		"boolean",
		"bigint"
	].includes(typeof e))) return e.flat().toString();
	throw Error("Invalid property type for record: " + typeof e);
}
var ft = (e, t) => {
	let n = N().map(dt), r = e;
	t !== void 0 && (e = e < 32 ? -((t << 5) + e) : (t << 5) + e, n.highByte = t);
	let i = C[e];
	return i && (i.isShared || M) && ((C.restoreStructures || (C.restoreStructures = []))[e] = i), C[e] = n, n.read = Ye(n, r), (n.read0 || n.read)();
};
j[0] = () => {}, j[0].noBuffer = !0, j[66] = (e) => {
	let t = e.byteLength % 8 || 8, n = BigInt(128 & e[0] ? e[0] - 256 : e[0]);
	for (let r = 1; r < t; r++) n <<= BigInt(8), n += BigInt(e[r]);
	if (e.byteLength !== t) {
		let r = new DataView(e.buffer, e.byteOffset, e.byteLength), i = (e, t) => {
			let n = t - e;
			if (n <= 40) {
				let n = r.getBigUint64(e);
				for (let i = e + 8; i < t; i += 8) n <<= BigInt(64), n |= r.getBigUint64(i);
				return n;
			}
			let a = e + (n >> 4 << 3), o = i(e, a), s = i(a, t);
			return o << BigInt(8 * (t - a)) | s;
		};
		n = n << BigInt(8 * (r.byteLength - t)) | i(t, r.byteLength);
	}
	return n;
};
var pt = {
	Error,
	EvalError,
	RangeError,
	ReferenceError,
	SyntaxError,
	TypeError,
	URIError,
	AggregateError: typeof AggregateError == "function" ? AggregateError : null
};
j[101] = () => {
	let e = N();
	if (!pt[e[0]]) {
		let t = Error(e[1], { cause: e[2] });
		return t.name = e[0], t;
	}
	return pt[e[0]](e[1], { cause: e[2] });
}, j[105] = (e) => {
	if (!1 === O.structuredClone) throw Error("Structured clone extension is disabled");
	let t = E.getUint32(D - 4);
	Re ||= /* @__PURE__ */ new Map();
	let n, r = x[D];
	n = r >= 144 && r < 160 || r == 220 || r == 221 ? [] : r >= 128 && r < 144 || r == 222 || r == 223 ? /* @__PURE__ */ new Map() : (r >= 199 && r <= 201 || r >= 212 && r <= 216) && x[D + 1] === 115 ? /* @__PURE__ */ new Set() : {};
	let i = { target: n };
	Re.set(t, i);
	let a = N();
	if (!i.used) return i.target = a;
	if (Object.assign(n, a), n instanceof Map) for (let [e, t] of a.entries()) n.set(e, t);
	if (n instanceof Set) for (let e of Array.from(a)) n.add(e);
	return n;
}, j[112] = (e) => {
	if (!1 === O.structuredClone) throw Error("Structured clone extension is disabled");
	let t = E.getUint32(D - 4), n = Re.get(t);
	return n.used = !0, n.target;
}, j[115] = () => new Set(N());
var mt = [
	"Int8",
	"Uint8",
	"Uint8Clamped",
	"Int16",
	"Uint16",
	"Int32",
	"Uint32",
	"Float32",
	"Float64",
	"BigInt64",
	"BigUint64"
].map((e) => e + "Array"), ht = typeof globalThis == "object" ? globalThis : window;
j[116] = (e) => {
	let t = e[0], n = Uint8Array.prototype.slice.call(e, 1).buffer, r = mt[t];
	if (!r) {
		if (t === 16) return n;
		if (t === 17) return new DataView(n);
		throw Error("Could not find typed array for code " + t);
	}
	return new ht[r](n);
}, j[120] = () => {
	let e = N();
	return new RegExp(e[0], e[1]);
};
var gt = [];
function _t(e) {
	let t = S, n = D, r = Ve, i = k, a = A, o = w, s = Be, c = Re, l = T, u = new Uint8Array(x.slice(0, S)), d = C, f = C.slice(0, C.length), ee = O, p = M, te = e();
	return S = t, D = n, Ve = r, k = i, A = a, w = o, Be = s, Re = c, T = l, x = u, M = p, (C = d).splice(0, C.length, ...f), O = ee, E = new DataView(x.buffer, x.byteOffset, x.byteLength), te;
}
function vt() {
	x = null, Re = null, C = null;
}
function yt(e) {
	e.unpack ? j[e.type] = e.unpack : j[e.type] = e;
}
j[98] = (e) => {
	let t = (e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3], n = D;
	return D += t - e.length, T = gt, (T = [st(), st()]).position0 = 0, T.position1 = 0, T.postBundlePosition = D, D = n, N();
}, j[255] = (e) => e.length == 4 ? /* @__PURE__ */ new Date(1e3 * (16777216 * e[0] + (e[1] << 16) + (e[2] << 8) + e[3])) : e.length == 8 ? /* @__PURE__ */ new Date(((e[0] << 22) + (e[1] << 14) + (e[2] << 6) + (e[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & e[3]) + 16777216 * e[4] + (e[5] << 16) + (e[6] << 8) + e[7])) : e.length == 12 ? /* @__PURE__ */ new Date(((e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3]) / 1e6 + 1e3 * ((128 & e[4] ? -281474976710656 : 0) + 1099511627776 * e[6] + 4294967296 * e[7] + 16777216 * e[8] + (e[9] << 16) + (e[10] << 8) + e[11])) : /* @__PURE__ */ new Date("invalid");
var bt = Array(147);
for (let e = 0; e < 256; e++) bt[e] = +("1e" + Math.floor(45.15 - .30103 * e));
var xt = new Ge({ useRecords: !1 }), St = (xt.unpack, xt.unpackMultiple, xt.unpack, /* @__PURE__ */ new Float32Array(1)), Ct = (new Uint8Array(St.buffer, 0, 4), [
	{
		Class: m.prototype.constructor,
		type: 1,
		write: (e) => ({ ...e }),
		read: (e) => (Object.setPrototypeOf(e, m.prototype), e)
	},
	{
		Class: g.prototype.constructor,
		type: 2,
		write: (e) => [...e],
		read: (e) => (Object.setPrototypeOf(e, g.prototype), e)
	},
	{
		Class: h.prototype.constructor,
		type: 3,
		write: (e) => [...e],
		read: (e) => (Object.setPrototypeOf(e, h.prototype), e)
	},
	{
		Class: p.prototype.constructor,
		type: 4,
		write: (e) => e.id,
		read: (e) => new p(e)
	},
	{
		Class: te.prototype.constructor,
		type: 5,
		write: (e) => e.data,
		read: (e) => new te(e)
	},
	{
		Class: v.prototype.constructor,
		type: 6,
		write: (e) => ({ ...e }),
		read: (e) => (Object.setPrototypeOf(e, v.prototype), e)
	}
]);
for (let e of Ct) yt(e);
var wt, Tt = new Ge({ structuredClone: !0 });
(wt ||= {}).deserialize = function(e) {
	return Tt.unpack(e);
};
var Et, Dt, Ot, kt = (e) => () => {
	throw Error(e + " is not available in the runtime build (decode-only CollabSerialize)");
}, At = {
	deserialize: wt.deserialize,
	serialize: kt("CollabSerialize.serialize"),
	checksum: kt("CollabSerialize.checksum")
};
function jt(e) {
	let t = typeof e;
	return e !== null && (t === "object" || t === "function");
}
(Dt = Et ||= {}).all = ["PerspectiveCamera", "OrthographicCamera"], Dt.is = function(e) {
	return Dt.all.includes(e);
}, ((e) => {
	e.DefaultUp = [
		0,
		1,
		0
	], e.DefaultTargetOffset = 1e3, e.MinTargetOffset = .001, e.sanitizeTargetOffset = function(t) {
		return t === void 0 || !Number.isFinite(t) || t < e.MinTargetOffset ? e.DefaultTargetOffset : t;
	}, e.DefaultAzimuth = -24, e.DefaultElevation = 15;
	let t = e.DefaultAzimuth * Math.PI / 180, n = e.DefaultElevation * Math.PI / 180, r = 180 / Math.PI;
	e.DefaultPosition = [
		e.DefaultTargetOffset * Math.sin(t) * Math.cos(n),
		e.DefaultTargetOffset * Math.sin(n),
		e.DefaultTargetOffset * Math.cos(t) * Math.cos(n)
	], e.DefaultRotation = [
		Math.atan2(-Math.sin(n), Math.cos(t) * Math.cos(n)) * r,
		Math.asin(Math.sin(t) * Math.cos(n)) * r,
		Math.atan2(Math.sin(t) * Math.sin(n), Math.cos(t)) * r
	], e.defaultData = {
		far: 1e5,
		type: "PerspectiveCamera",
		perspective: {
			near: 70,
			fov: 45,
			zoom: 1
		},
		orthographic: {
			near: -1e5,
			zoom: 1
		},
		up: e.DefaultUp,
		isUpVectorFlipped: !1,
		targetOffset: e.DefaultTargetOffset
	}, e.getZoom = function(e) {
		return e.type === "PerspectiveCamera" ? e.perspective?.zoom ?? 1 : e.orthographic?.zoom ?? 1;
	};
})(Ot ||= {});
var Mt, Nt, Pt, Ft, It, Lt, Rt, I, L, R, z, zt, Bt = "personal camera", Vt = "a218fcc3-276b-49b9-b485-49037fd14f5f", Ht = 5526619, Ut = ((e) => (e.x = "x", e.y = "y", e.z = "z", e))(Ut || {});
((e) => {
	function t(e, t) {
		return (t[0] - e[0]) ** 2 + (t[1] - e[1]) ** 2;
	}
	function n(e, n) {
		return Math.sqrt(t(e, n));
	}
	function r(t, n, r) {
		let i = e.sub(n, t), a = e.sub(r, t), o = e.dot(i, a) / e.dot(i, i), s = e.scalarMultiply(i, o);
		return e.add(t, s);
	}
	e.isEqual = function(e, t) {
		return e[0] === t[0] && e[1] === t[1];
	}, e.lerp = function(e, t, n) {
		return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n];
	}, e.add = function(e, t) {
		return [e[0] + t[0], e[1] + t[1]];
	}, e.sub = function(e, t) {
		return [e[0] - t[0], e[1] - t[1]];
	}, e.multiply = function(e, t) {
		return [e[0] * t[0], e[1] * t[1]];
	}, e.divide = function(e, t) {
		return [e[0] / t[0], e[1] / t[1]];
	}, e.distanceSquared = t, e.distance = n, e.dot = function(e, t) {
		return e[0] * t[0] + e[1] * t[1];
	}, e.scalarMultiply = function(e, t) {
		return [e[0] * t, e[1] * t];
	}, e.projectionOnto = r, e.projectionOntoDistance = function(e, t, i) {
		return n(e, r(e, t, i));
	}, e.center = function(e, t) {
		return [.5 * (e[0] + t[0]), .5 * (e[1] + t[1])];
	};
})(Mt ||= {}), (Pt = Nt ||= {}).isEqual = function(e, t) {
	return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
}, Pt.add = function(e, t) {
	return [
		e[0] + t[0],
		e[1] + t[1],
		e[2] + t[2]
	];
}, Pt.sub = function(e, t) {
	return [
		e[0] - t[0],
		e[1] - t[1],
		e[2] - t[2]
	];
}, Pt.div = function(e, t) {
	return [
		e[0] / t[0],
		e[1] / t[1],
		e[2] / t[2]
	];
}, Pt.mul = function(e, t) {
	return [
		e[0] * t[0],
		e[1] * t[1],
		e[2] * t[2]
	];
}, Pt.dist = function(e, t) {
	return Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]);
}, Pt.lerp = function(e, t, n) {
	return [
		e[0] + (t[0] - e[0]) * n,
		e[1] + (t[1] - e[1]) * n,
		e[2] + (t[2] - e[2]) * n
	];
}, ((e) => {
	e.isEqual = function(e, t) {
		return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
	}, e.lerp = function(e, t, n) {
		return [
			e[0] + (t[0] - e[0]) * n,
			e[1] + (t[1] - e[1]) * n,
			e[2] + (t[2] - e[2]) * n,
			e[3] + (t[3] - e[3]) * n
		];
	};
})(Ft ||= {}), ((e) => {
	let t = 180 / Math.PI, n = Math.PI / 180;
	function r(e) {
		return typeof e == "number" ? e * t : e;
	}
	function i(e) {
		return typeof e == "number" ? e * n : e;
	}
	e.radToDeg = function(e) {
		return [
			r(e[0]),
			r(e[1]),
			r(e[2])
		];
	}, e.degToRad = function(e) {
		return [
			i(e[0]),
			i(e[1]),
			i(e[2])
		];
	};
})(It ||= {}), (Rt = Lt ||= {}).identity = [
	1,
	0,
	0,
	0,
	0,
	1,
	0,
	0,
	0,
	0,
	1,
	0,
	0,
	0,
	0,
	1
], Rt.isEqual = function(e, t) {
	for (let n = 0; n < 16; n++) if (e[n] !== t[n]) return !1;
	return !0;
}, Rt.simplify = function(e) {
	return e ?? Rt.identity;
}, Rt.applyMatrix4 = function(e, t) {
	let n = t.slice(0);
	for (let r = 0, i = t.length; r < i; r += 3) {
		let i = e[3] * t[r] + e[7] * t[r + 1] + e[11] * t[r + 2] + e[15];
		n[r] = (e[0] * t[r] + e[4] * t[r + 1] + e[8] * t[r + 2] + e[12]) / i, n[r + 1] = (e[1] * t[r] + e[5] * t[r + 1] + e[9] * t[r + 2] + e[13]) / i, n[r + 2] = (e[2] * t[r] + e[6] * t[r + 1] + e[10] * t[r + 2] + e[14]) / i;
	}
	return n;
}, (L = I ||= {}).isRGB = function(e) {
	return typeof e == "object" && typeof e.r == "number" && typeof e.g == "number" && typeof e.b == "number";
}, L.white = {
	r: 1,
	g: 1,
	b: 1
}, L.red = {
	r: 1,
	g: 0,
	b: 0
}, L.black = {
	r: 0,
	g: 0,
	b: 0
}, L.toRgb255a1 = function(e) {
	return {
		r: Math.round(255 * e.r),
		g: Math.round(255 * e.g),
		b: Math.round(255 * e.b),
		a: 1
	};
}, L.clone = function(e) {
	return {
		r: e.r,
		g: e.g,
		b: e.b
	};
}, L.fromHex = function(e) {
	return {
		r: ((e = Math.floor(e)) >> 16 & 255) / 255,
		g: (e >> 8 & 255) / 255,
		b: (255 & e) / 255
	};
}, L.toHex = function(e) {
	return 65536 * Math.round(255 * e.r) + 256 * Math.round(255 * e.g) + Math.round(255 * e.b);
}, L.equals = function(e, t) {
	return e.r === t.r && e.g === t.g && e.b === t.b;
}, L.equalsFixed = function(e, t) {
	return e.r.toFixed(2) === t.r.toFixed(2) && e.g.toFixed(2) === t.g.toFixed(2) && e.b.toFixed(2) === t.b.toFixed(2);
}, L.lerp = function(e, t, n) {
	return {
		r: e.r + (t.r - e.r) * n,
		g: e.g + (t.g - e.g) * n,
		b: e.b + (t.b - e.b) * n
	};
}, L.is = function(e) {
	return !!jt(e) && "r" in e && "g" in e && "b" in e && !("a" in e);
}, (z = R ||= {}).white = {
	...I.white,
	a: 1
}, z.is = function(e) {
	return !!jt(e) && "r" in e && "g" in e && "b" in e && "a" in e;
}, z.transparent = {
	...I.white,
	a: 0
}, z.from0to1 = function(e) {
	return {
		r: e[0],
		g: e[1],
		b: e[2],
		a: e[3]
	};
}, z.fromHexAndA = function(e, t) {
	return {
		...I.fromHex(e),
		a: t
	};
}, z.toRgb255a1 = function(e) {
	return {
		r: Math.round(255 * e.r),
		g: Math.round(255 * e.g),
		b: Math.round(255 * e.b),
		a: e.a
	};
}, z.equals = function(e, t) {
	return I.equals(e, t) && e.a === t.a;
}, z.equalsFixed = function(e, t) {
	return I.equalsFixed(e, t) && e.a.toFixed(2) === t.a.toFixed(2);
}, z.lerp = function(e, t, n) {
	return {
		r: e.r + (t.r - e.r) * n,
		g: e.g + (t.g - e.g) * n,
		b: e.b + (t.b - e.b) * n,
		a: e.a + (t.a - e.a) * n
	};
}, z.toStyle = function({ r: e, g: t, b: n, a: r } = z.white) {
	return `rgba(${255 * e}, ${255 * t}, ${255 * n}, ${r})`;
}, (zt ||= {}).identity = {
	position: [
		0,
		0,
		0
	],
	rotation: [
		0,
		0,
		0
	],
	scale: [
		1,
		1,
		1
	],
	pivot: [
		0,
		0,
		0
	],
	pivotRotation: [
		0,
		0,
		0
	]
};
var Wt, B, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t = ((B = $t || {})[B.LINEAR = 0] = "LINEAR", B[B.EASE = 1] = "EASE", B[B.EASE_IN = 2] = "EASE_IN", B[B.EASE_OUT = 3] = "EASE_OUT", B[B.EASE_IN_OUT = 4] = "EASE_IN_OUT", B[B.CUBIC = 5] = "CUBIC", B[B.SPRING = 6] = "SPRING", B[B.ARC = 7] = "ARC", B[B.NONE = 8] = "NONE", B);
function en(e) {
	return typeof e == "string" && e.length === 36 && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e);
}
(Wt ||= {}).defaultData = {
	mass: 1,
	stiffness: 80,
	damping: 10,
	velocity: 0
}, (Gt ||= {}).defaultData = {
	control1: [.5, 0],
	control2: [.5, 1]
}, (qt = Kt ||= {}).linear = [
	0,
	0,
	1,
	1
], qt.ease = [
	.25,
	.1,
	.25,
	1
], qt.easeIn = [
	.42,
	0,
	1,
	1
], qt.easeOut = [
	0,
	0,
	.58,
	1
], qt.easeInOut = [
	.42,
	0,
	.58,
	1
], ((e) => {
	e.all = [
		"PointLight",
		"SpotLight",
		"DirectionalLight",
		"HemisphereLight"
	], e.is = function(t) {
		return e.all.includes(t);
	};
})(Jt ||= {}), (Yt ||= {}).defaultData = function(e) {
	return function(e) {
		if (e === "PointLight") return {
			type: e,
			color: R.white,
			intensity: 1,
			distance: 2e3,
			decay: 1,
			shadows: !0,
			shadowResolution: 1024,
			shadowRadius: 1,
			penumbraSize: .5,
			depth: 1e5
		};
		if (e === "SpotLight") return {
			type: e,
			color: R.white,
			intensity: 1,
			distance: 2e3,
			decay: 1,
			shadows: !0,
			penumbra: 0,
			angle: 30 / 180 * Math.PI,
			depth: 1e5,
			penumbraSize: .5,
			shadowResolution: 1024,
			shadowRadius: 1
		};
		if (e === "DirectionalLight") return {
			type: e,
			color: R.white,
			intensity: 1,
			shadows: !0,
			size: 2e3,
			depth: 1e5,
			penumbraSize: .5,
			shadowResolution: 1024,
			shadowRadius: 1
		};
		throw Error("not implemented");
	}(e);
}, ((e) => {
	e.defaultShapeData = {
		type: "PlaneEmitterShape",
		size: [
			100,
			100,
			100
		]
	}, e.defaultCollisionData = {
		colliderEntityId: null,
		collisionBounce: .75
	}, e.defaultData = {
		renderMaterial: {
			type: "particleMaterial",
			color: {
				r: 1,
				g: .2,
				b: .545,
				a: 1
			},
			color2: {
				r: .945,
				g: .714,
				b: .184,
				a: 1
			},
			coloring: "gradient",
			ease: "linearFadeOut",
			easeSize: "linearFadeOut",
			transparent: !0,
			size: [40, 40],
			texture: "pt_default_particle",
			spriteRotation: [0, 0]
		},
		birthRatePerSec: 50,
		gravity: 1,
		noiseStrength: 0,
		noiseScale: 0,
		noiseSeed: 1,
		noiseType: "curl",
		randomRotation: 0,
		randomScale: .2,
		randomMass: .5,
		rootObjectType: "instancedMesh",
		life: 1,
		direction: [
			0,
			0,
			0
		],
		directionMode: "axis",
		speed: 10,
		shape: e.defaultShapeData,
		autoPlay: !0,
		emitTimeDelay: 0,
		emitTimeCycle: "infinity",
		emitTimeDuration: 1,
		...e.defaultCollisionData
	};
})(Xt ||= {}), ((e) => {
	e.defaultData = {
		gravity: 10,
		damping: .03,
		localStiffness: .67,
		globalStiffness: .5,
		globalRange: .15,
		stiffnessFalloff: .1,
		windStrength: 0,
		vspCoefficient: .01,
		elasticity: .15,
		hairLength: .75,
		tipSeparation: .8,
		kink: 0,
		kinkFrequency: 0,
		clumpStrength: 0,
		clumpSize: 32,
		clumpTipScale: 1.5,
		spreadRadius: .03,
		guideStrands: 8192,
		headShape: "sphere",
		baseObjectId: null,
		hairColorSource: "custom",
		hairShadeRoot: .6,
		hairShadeTip: 1.15,
		hairRootColor: {
			r: .29,
			g: .102,
			b: .039,
			a: 1
		},
		hairMidColor: {
			r: .8,
			g: .267,
			b: .133,
			a: 1
		},
		hairTipColor: {
			r: .545,
			g: .18,
			b: .18,
			a: 1
		},
		headColor: {
			r: .325,
			g: .137,
			b: .114,
			a: 1
		},
		noiseEnabled: !1,
		noiseColorA: {
			r: .545,
			g: .184,
			b: .788,
			a: 1
		},
		noiseColorB: {
			r: .914,
			g: .188,
			b: .914,
			a: 1
		},
		noiseColorC: {
			r: .2,
			g: .4,
			b: 1,
			a: 1
		},
		noiseColorD: {
			r: .2,
			g: 1,
			b: .6,
			a: 1
		},
		noiseScale: 1.8,
		noiseMixHair: .75,
		noiseMixHead: .8,
		castShadow: !0,
		receiveShadow: !0,
		hairWidth: 1.75,
		specularPower: 40,
		specularIntensity: .4,
		diffuseIntensity: .6,
		ambientIntensity: .25,
		opacity: 1,
		tipFade: .4,
		autoPlay: !0
	}, e.regenProps = [
		"hairLength",
		"spreadRadius",
		"guideStrands",
		"headShape",
		"baseObjectId"
	];
})(Zt ||= {}), (Qt ||= {}).defaultData = {
	enabled: "visibility",
	fusedBody: !0,
	rigidBody: "positioned",
	density: 1,
	pointMass: 0,
	gravityScale: 1,
	friction: .5,
	damping: 0,
	restitution: .2,
	colliderType: "convex",
	enabledRotation: [
		!0,
		!0,
		!0
	],
	enabledTranslation: [
		!0,
		!0,
		!0
	]
};
var tn, nn, rn, an, on, sn, cn, ln, un, dn = ((e) => (e[e.Front = 0] = "Front", e[e.Back = 1] = "Back", e[e.Double = 2] = "Double", e))(dn || {});
((e) => {
	e.defaultData = {
		castShadow: !0,
		receiveShadow: !0
	}, e.equals = function(e, t) {
		return e.castShadow === t.castShadow && e.receiveShadow === t.receiveShadow;
	};
})(tn ||= {}), ((e) => {
	e.defaultData = {
		flatShading: !1,
		wireframe: !1,
		side: 0
	}, e.equals = function(e, t) {
		return e.flatShading === t.flatShading && e.side === t.side && e.wireframe === t.wireframe && (e.shadowCatcher ?? !1) === (t.shadowCatcher ?? !1);
	};
})(nn ||= {}), (rn ||= {}).defaultData = {
	...nn.defaultData,
	...tn.defaultData
}, (an ||= {}).getMaterialData = function(e, t) {
	let n = [];
	if ("material" in e) {
		let r = typeof e.material == "string" ? t.materials[e.material] ?? t.lib.materials[e.material]?.asset : e.material;
		r && n.push(r);
	} else if ("materials" in e) for (let r of e.materials) {
		let e = typeof r == "string" ? t.materials[r] ?? t.lib.materials[r]?.asset : r;
		e && n.push(e);
	}
	return n;
}, ((e) => {
	e.defaultVideo = {
		data: "",
		thumb: "/_assets/_videos/catThumb.png",
		type: "video",
		name: "Cat video"
	}, e.maxSize = 3e7;
})(on ||= {}), (sn ||= {}).is = function(e) {
	return e === "texture" || e === "video" || e === "color" || e === "depth" || e === "normal" || e === "gradient" || e === "noise" || e === "fresnel" || e === "cavity" || e === "dust" || e === "rainbow" || e === "toon" || e === "outline" || e === "particle" || e === "transmission" || e === "reflection" || e === "matcap" || e === "displace" || e === "pattern" || e === "vertexColor" || e === "light";
}, (cn ||= {}).is = function(e) {
	return e === "luminance" || e === "r" || e === "g" || e === "b" || e === "a";
}, (ln ||= {}).is = function(e) {
	return typeof e == "object" && !!e && e.image != null;
}, (un ||= {}).is = function(e) {
	return e === "phong" || e === "toon" || e === "lambert" || e === "physical";
};
var V, H, U, W, fn = ((e) => (e[e.Linear = 0] = "Linear", e[e.Radial = 1] = "Radial", e[e.Polar = 2] = "Polar", e))(fn || {}), pn = ((e) => (e[e.RepeatWrapping = 1e3] = "RepeatWrapping", e[e.ClampToEdgeWrapping = 1001] = "ClampToEdgeWrapping", e[e.MirroredRepeatWrapping = 1002] = "MirroredRepeatWrapping", e))(pn || {}), mn = ((e) => (e[e.NearestFilter = 1003] = "NearestFilter", e[e.LinearFilter = 1006] = "LinearFilter", e[e.LinearMipmapLinearFilter = 1008] = "LinearMipmapLinearFilter", e))(mn || {}), hn = ((e) => (e[e.UV = 0] = "UV", e[e.Planar = 1] = "Planar", e[e.Spherical = 2] = "Spherical", e[e.Cylindrical = 3] = "Cylindrical", e[e.Triplanar = 4] = "Triplanar", e))(hn || {}), gn = ((U = gn || {})[U.Simplex = 0] = "Simplex", U[U.SimplexFractal = 1] = "SimplexFractal", U[U.Ashima = 2] = "Ashima", U[U.Fbm = 3] = "Fbm", U[U.Perlin = 4] = "Perlin", U[U.Voronoi = 5] = "Voronoi", U), _n = ((H = _n || {})[H.F1 = 0] = "F1", H[H.F2 = 1] = "F2", H[H.F2MinusF1 = 2] = "F2MinusF1", H[H.SmoothBlend = 3] = "SmoothBlend", H[H.Edge = 4] = "Edge", H[H.Power = 5] = "Power", H[H.Lines = 6] = "Lines", H[H.Cells = 7] = "Cells", H), vn = ((e) => (e[e.Lights = 0] = "Lights", e[e.Static = 1] = "Static", e[e.Camera = 2] = "Camera", e))(vn || {}), yn = ((e) => (e[e.Circle = 0] = "Circle", e[e.Ring = 1] = "Ring", e[e.Polygon = 2] = "Polygon", e[e.Cross = 3] = "Cross", e[e.Diamond = 4] = "Diamond", e[e.Checkerboard = 5] = "Checkerboard", e[e.Line = 6] = "Line", e[e.Wave = 7] = "Wave", e))(yn || {}), bn = [
	"mode",
	"gradientType",
	"noiseType",
	"tracingMode",
	"mirror",
	"displacementType",
	"projection",
	"cnormal",
	"crop",
	"axis",
	"side",
	"roughnessMapChannel",
	"metalnessMap",
	"metalnessMapChannel",
	"normalMap",
	"aoMap",
	"aoMapChannel",
	"emissiveMap",
	"style"
], xn = [
	"wrapping",
	"image",
	"video",
	"name",
	"minFilter",
	"magFilter"
];
((e) => {
	e.patch = function(e, t) {
		let { texture: n, ...r } = t;
		if (Object.assign(e, r), n) {
			let t = e.texture;
			t && Object.assign(t, n);
		}
	}, e.defaultColorLayer = function(t) {
		return {
			...e.defaultData("color"),
			color: t
		};
	}, e.defaultData = function(e, t) {
		return e === "light" && t ? function(e) {
			let t = {
				mode: 0,
				isMask: !1,
				visible: !0,
				bumpMap: void 0,
				bumpMapIntensity: 5,
				roughnessMap: void 0,
				alphaOverride: 1
			};
			switch (e) {
				case "phong": return {
					...t,
					category: "phong",
					specular: {
						r: .2,
						g: .2,
						b: .2
					},
					shininess: 5,
					type: "light",
					visible: !0,
					mode: 0,
					occlusion: !0,
					alpha: .6
				};
				case "toon": return {
					...t,
					category: "toon",
					specular: {
						r: .2,
						g: .2,
						b: .2
					},
					shininess: 10,
					type: "light",
					alpha: 1
				};
				case "lambert": return {
					...t,
					category: "lambert",
					emissive: {
						r: 0,
						g: 0,
						b: 0
					},
					type: "light",
					alpha: 1,
					visible: !0,
					mode: 0,
					occlusion: !0
				};
				case "physical": return {
					...t,
					category: "physical",
					roughness: .6,
					metalness: .2,
					reflectivity: .2,
					type: "light",
					alpha: .6,
					visible: !0,
					mode: 0,
					occlusion: !0
				};
			}
		}(t) : function(e) {
			let t = {
				alpha: 1,
				mode: 0,
				isMask: !1,
				visible: !0
			};
			switch (e) {
				case "texture": return {
					...t,
					type: "texture",
					size: [128, 128],
					blending: 0,
					axis: "x",
					side: 2,
					projection: 0,
					texture: {
						image: "image_0",
						wrapping: 1e3,
						repeat: [1, 1],
						offset: [0, 0],
						rotation: 0,
						minFilter: 1008,
						magFilter: 1006
					},
					crop: !1
				};
				case "video": return {
					...t,
					type: "video",
					size: [128, 128],
					blending: 0,
					axis: "x",
					side: 2,
					projection: 0,
					texture: {
						video: on.defaultVideo,
						wrapping: 1001,
						repeat: [1, 1],
						offset: [0, 0],
						rotation: 0,
						minFilter: 1008,
						magFilter: 1006
					},
					crop: !1
				};
				case "color": return {
					...t,
					type: "color",
					color: I.fromHex(Ht)
				};
				case "vertexColor": return {
					...t,
					type: "vertexColor"
				};
				case "depth": return {
					...t,
					type: "depth",
					gradientType: 1,
					smooth: !1,
					isVector: !0,
					isWorldSpace: !1,
					origin: [
						0,
						0,
						0
					],
					direction: [
						1,
						0,
						0
					],
					colors: [[
						1,
						1,
						1,
						1
					], [
						0,
						0,
						0,
						1
					]],
					steps: [0, 1],
					near: 50,
					far: 200
				};
				case "normal": return {
					...t,
					type: "normal",
					cnormal: [
						1,
						1,
						1
					]
				};
				case "gradient": return {
					...t,
					type: "gradient",
					gradientType: 0,
					smooth: !1,
					colors: [
						[
							0,
							0,
							0,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						]
					],
					steps: [
						0,
						1,
						1,
						1,
						1,
						1,
						1,
						1,
						1,
						1
					],
					num: 2,
					angle: 0,
					offset: [0, 0],
					morph: [0, 0]
				};
				case "noise": return {
					...t,
					type: "noise",
					size: [
						100,
						100,
						100
					],
					noiseType: 0,
					scale: 1,
					move: 1,
					colorA: {
						...I.fromHex(6710886),
						a: 1
					},
					colorB: {
						...I.fromHex(6710886),
						a: 1
					},
					colorC: {
						...I.fromHex(16777215),
						a: 1
					},
					colorD: {
						...I.fromHex(16777215),
						a: 1
					},
					distortion: [1, 1],
					fA: [1.7, 9.2],
					fB: [8.3, 2.8],
					voronoiStyle: 0,
					highCut: 1,
					lowCut: 0,
					smoothness: .3,
					seed: 0,
					quality: 1
				};
				case "cavity": return {
					...t,
					type: "cavity",
					mode: 3,
					ridge: 1,
					valley: 1
				};
				case "fresnel": return {
					...t,
					type: "fresnel",
					color: R.fromHexAndA(16777215, 1),
					bias: .1,
					scale: 1,
					intensity: 2,
					factor: 1
				};
				case "dust": return {
					...t,
					type: "dust",
					color: R.fromHexAndA(10323813, 1),
					coverage: .2,
					softness: .2,
					noiseStrength: .2,
					noiseScale: 1
				};
				case "rainbow": return {
					...t,
					type: "rainbow",
					filmThickness: 30,
					movement: 0,
					wavelengths: [
						0,
						0,
						0
					],
					noiseStrength: 0,
					noiseScale: 1,
					offset: [
						0,
						0,
						0
					]
				};
				case "toon": return {
					...t,
					type: "toon",
					positioning: 2,
					colors: [
						[
							0,
							0,
							0,
							1
						],
						[
							.5,
							.5,
							.5,
							1
						],
						[
							.5,
							.5,
							.5,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						],
						[
							1,
							1,
							1,
							1
						]
					],
					steps: [
						0,
						.475,
						.525,
						1,
						1,
						1,
						1,
						1,
						1,
						1
					],
					num: 4,
					source: [
						0,
						1e3,
						0
					],
					isWorldSpace: !0,
					noiseStrength: 0,
					noiseScale: 1,
					shadowColor: R.fromHexAndA(0, 0),
					offset: [
						0,
						0,
						0
					]
				};
				case "outline": return {
					...t,
					type: "outline",
					outlineColor: R.fromHexAndA(0, 1),
					contourColor: R.fromHexAndA(0, 1),
					outlineWidth: 2,
					contourWidth: 5,
					outlineThreshold: .4,
					contourThreshold: 0,
					outlineSmoothing: 0,
					contourFrequency: 10,
					contourDirection: [
						0,
						1,
						0
					],
					positionalLines: !1,
					compensation: !0
				};
				case "matcap": return {
					...t,
					type: "matcap",
					texture: {
						image: "matcap_0",
						wrapping: 1001,
						repeat: [1, 1],
						offset: [0, 0],
						rotation: 0,
						minFilter: 1008,
						magFilter: 1006
					}
				};
				case "transmission": return {
					...t,
					type: "transmission",
					thickness: 10,
					ior: 1.5,
					roughness: 1
				};
				case "reflection": return {
					...t,
					type: "reflection",
					blur: 0,
					thickness: .001,
					steps: 60,
					stepSize: .005,
					tracingMode: 1,
					mirror: 0
				};
				case "displace": return {
					visible: !0,
					type: "displace",
					displacementType: "noise",
					noiseType: 0,
					scale: 10,
					movement: 1,
					offset: [
						0,
						0,
						0
					],
					intensity: 8,
					voronoiStyle: 0,
					smoothness: .3,
					seed: 0,
					highCut: 1,
					lowCut: 0,
					quality: 1
				};
				case "pattern": return {
					...t,
					type: "pattern",
					style: 0,
					projection: 0,
					axis: "y",
					blending: 0,
					offset: [0, 0],
					colorA: {
						...I.fromHex(0),
						a: 1
					},
					colorB: {
						...I.fromHex(16777215),
						a: 1
					},
					frequency: [10, 10],
					size: .5,
					variation: 0,
					smoothness: .5,
					zigzag: 0,
					rotation: 0,
					vertical: [0, 1],
					horizontal: [0, 1],
					sides: 6
				};
			}
		}(e);
	};
})(V ||= {}), ((e) => {
	function t(e, t = "layer1", n = "layer2", r = I.fromHex(16777215)) {
		let i = new g();
		return i.push({
			fi: 0,
			data: V.defaultData("light", e),
			id: t
		}), i.push({
			fi: 1,
			data: V.defaultData("color"),
			id: n
		}), { layers: i };
	}
	e.isMergable = function(e) {
		return !e.layers.some((e) => e.data.type === "texture" && e.data.projection !== 0 || e.data.type === "depth" && !e.data.isWorldSpace || e.data.type === "noise" || e.data.type === "dust" && e.data.noiseStrength !== 0 || e.data.type === "displace");
	}, e.getHash = function(e) {
		let t = "";
		return e.layers.forEach((e) => {
			Object.entries(e.data).forEach(([e, n]) => {
				t += `${e}${n}`, Array.isArray(n) ? n.forEach((e) => t += `${e}`) : typeof n == "object" ? Object.values(n).forEach((e) => {
					t += typeof e == "number" ? `${e.toFixed(4)}` : `${e}`;
				}) : t += `${n}`;
			});
		}), t;
	}, e.defaultEmptyData = function() {
		return { layers: new g() };
	}, e.defaultData = function(e = "layer1", n = "layer2") {
		return t("physical", e, n);
	}, e.withName = function(e, t) {
		return {
			...e,
			name: t
		};
	}, e.defaultTwoLayerData = t, e.defaultColorMaterial = function(e, t, n = "layer1", r = "layer2") {
		let i = new g();
		return i.push({
			fi: 0,
			data: V.defaultData("light", t),
			id: n
		}), i.push({
			fi: 1,
			data: V.defaultColorLayer(e),
			id: r
		}), { layers: i };
	}, e.defaultUIObjectMaterial = function(e) {
		let t = V.defaultData("texture");
		e && Object.assign(t.texture, { image: e });
		let n = new g();
		return n.push({
			fi: 0,
			data: t,
			id: "layer1"
		}), n.push({
			fi: 1,
			data: {
				...V.defaultData("transmission"),
				alpha: 1
			},
			id: "layer2"
		}), n.push({
			fi: 2,
			data: {
				...V.defaultData("light", "lambert"),
				alpha: 0
			},
			id: "layer3"
		}), { layers: n };
	}, e.defaultTwoLayerTextureData = function(e, t = "physical", n = "layer1", r = "layer2") {
		let i = V.defaultData("texture");
		Object.assign(i.texture, { image: e });
		let a = new g();
		return a.push({
			fi: 0,
			data: i,
			id: n
		}), a.push({
			fi: 1,
			data: V.defaultData("light", t),
			id: r
		}), { layers: a };
	}, e.defaultTwoLayerVideoTextureData = function(e, t = "physical", n = "layer1", r = "layer2") {
		let i = V.defaultData("video");
		Object.assign(i.texture, { video: e });
		let a = new g();
		return a.push({
			fi: 0,
			data: i,
			id: n
		}), a.push({
			fi: 1,
			data: V.defaultData("light", t),
			id: r
		}), { layers: a };
	};
})(W ||= {});
var Sn, Cn, wn = "Roboto_regular", Tn = "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf";
(Sn ||= {}).defaultData = function() {
	return {
		points: new g(),
		roundness: 0,
		shapeHoles: [],
		isClosed: !1
	};
}, (Cn ||= {}).defaultData = function() {
	return {
		points: new g(),
		lastInsertionPlane: null,
		subdivisions: 12,
		isClosed: !1,
		subdivisionMode: "parametric"
	};
};
var En, Dn = {
	type: "Ellipse",
	width: 50,
	height: 50,
	spikes: 16,
	angle: 360,
	innerRadius: 0
};
(En ||= {}).merge = function(e, t) {
	let n = { ...e };
	return Mn.forEach((r) => {
		Object.assign(n, { [r]: t[r] ?? e[r] });
	}), n;
};
var On, kn, G, An, jn = {
	shape: Dn,
	depth: 1,
	offset: 0,
	bevel: 50,
	bevelSides: 6,
	angle: 0,
	twist: 0,
	startScale: 1,
	endScale: 1,
	capType: "flat"
}, Mn = [
	"depth",
	"offset",
	"angle",
	"twist",
	"startScale",
	"endScale"
];
((e) => {
	e.is2DParametricMesh = function(e) {
		return e === "PolygonGeometry" || e === "RectangleGeometry" || e === "StarGeometry" || e === "TriangleGeometry" || e === "EllipseGeometry" || e === "UIGeometry";
	}, e.isParametricMesh = function(e) {
		return e === "PolygonGeometry" || e === "RectangleGeometry" || e === "StarGeometry" || e === "TriangleGeometry" || e === "EllipseGeometry" || e === "PathGeometry" || e === "VectorGeometry" || e === "ConeGeometry" || e === "CubeGeometry" || e === "CylinderGeometry" || e === "DodecahedronGeometry" || e === "HelixGeometry" || e === "IcosahedronGeometry" || e === "LatheGeometry" || e === "PyramidGeometry" || e === "SphereGeometry" || e === "PlaneGeometry" || e === "BackdropGeometry" || e === "TorusGeometry" || e === "TorusKnotGeometry" || e === "BooleanGeometry" || e === "TextGeometry" || e === "InputGeometry" || e === "DecalGeometry";
	}, e.isSwappableGeometry = function(e) {
		return e === "PolygonGeometry" || e === "RectangleGeometry" || e === "StarGeometry" || e === "TriangleGeometry" || e === "EllipseGeometry" || e === "PathGeometry" || e === "VectorGeometry" || e === "ConeGeometry" || e === "CubeGeometry" || e === "CylinderGeometry" || e === "DodecahedronGeometry" || e === "HelixGeometry" || e === "IcosahedronGeometry" || e === "LatheGeometry" || e === "PyramidGeometry" || e === "SphereGeometry" || e === "PlaneGeometry" || e === "BackdropGeometry" || e === "TorusGeometry" || e === "TorusKnotGeometry" || e === "TextGeometry" || e === "SubdivGeometry" || e === "NonParametricGeometry";
	};
})(On ||= {}), (kn ||= {}).merge = function(e, t) {
	let n = { ...e };
	return Object.assign(n, t), n.type === "PathGeometry" && "extrusion" in t && t.extrusion && (n.extrusion = { ...e.extrusion }, Object.assign(n.extrusion, En.merge(n.extrusion, t.extrusion))), n;
}, (An = G ||= {}).defaultData = function(e) {
	if (e === "RectangleGeometry") return {
		width: 320,
		height: 320,
		type: e,
		cornerRadius: [
			0,
			0,
			0,
			0
		],
		cornerType: 0,
		depth: 0,
		extrudeBevelSize: 0,
		extrudeBevelSegments: 1
	};
	if (e === "UIGeometry") return {
		type: e,
		frame: "",
		cornerRadius: [
			0,
			0,
			0,
			0
		],
		cornerType: 0,
		width: 1,
		height: 1
	};
	if (e === "PathGeometry") return {
		type: e,
		width: 1,
		height: 1,
		depth: 1,
		path: Cn.defaultData(),
		extrusion: jn
	};
	if (e === "VectorGeometry") return {
		width: 1,
		height: 1,
		type: e,
		subdivisions: 12,
		shape: Sn.defaultData(),
		depth: 0,
		extrudeBevelSize: 0,
		extrudeBevelSegments: 1
	};
	if (e === "BooleanGeometry") return {
		type: e,
		operation: 2,
		width: 0,
		height: 0,
		depth: 0,
		phongAngle: 35
	};
	if (e === "ShapeBlendGeometry") return {
		type: e,
		width: 0,
		height: 0,
		depth: 0,
		resolutionLevel: 6,
		blendRange: 100,
		useChildrenColors: !1
	};
	if (e === "DecalGeometry") return {
		type: e,
		width: 200,
		height: 200,
		depth: 200,
		offset: 1,
		projection: "all",
		projectionTargets: []
	};
	if (e === "TextGeometry") return {
		type: e,
		width: 100,
		height: 100,
		depth: 0,
		horizontalAlign: 1,
		verticalAlign: 1,
		fontSize: 16,
		lineHeight: 1.2,
		letterSpacing: 0,
		text: { textValue: "" },
		textTransform: 1,
		font: "Roboto_regular",
		editable: !1,
		extrudeBevelSize: 0,
		extrudeBevelSegments: 1
	};
	if (e === "InputGeometry") return {
		...An.defaultData("TextGeometry"),
		type: e,
		editable: !0
	};
	if (e === "SphereGeometry") return {
		type: "SphereGeometry",
		width: 100,
		height: 100,
		depth: 100,
		widthSegments: 64,
		heightSegments: 64,
		phiStart: 0,
		phiLength: 2 * Math.PI,
		thetaStart: 0,
		thetaLength: 180
	};
	throw Error("not implemented");
};
var Nn, Pn, Fn = [
	"width",
	"height",
	"depth"
];
((e) => {
	e.defaultData = function(e, t = .1) {
		return {
			disabled: !1,
			type: "linear",
			hideBase: !1,
			instanced: !1,
			count: 3,
			radial: {
				radius: 2 * Math.max(typeof e[0] == "number" ? e[0] : 1, typeof e[1] == "number" ? e[1] : 1),
				start: 0,
				end: 360,
				alignment: !1,
				axis: "y",
				scale: [
					1,
					1,
					1
				],
				rotation: [
					0,
					0,
					0
				],
				position: [
					0,
					0,
					0
				],
				pivot: [
					0,
					0,
					0
				],
				pivotRotation: [
					0,
					0,
					0
				]
			},
			toObject: {
				object: "",
				spreadType: "random",
				scale: [
					0,
					0,
					0
				],
				rotation: [
					0,
					0,
					0
				],
				position: [
					0,
					0,
					0
				],
				axis: "x",
				seed: 0,
				count: 99,
				align: "normal",
				pivot: [
					0,
					0,
					0
				],
				pivotRotation: [
					0,
					0,
					0
				]
			},
			linear: {
				scale: [
					1,
					1,
					1
				],
				rotation: [
					0,
					0,
					0
				],
				position: [
					(typeof e[0] == "number" ? e[0] + e[0] : 1) * t,
					0,
					0
				],
				pivot: [
					0,
					0,
					0
				],
				pivotRotation: [
					0,
					0,
					0
				]
			},
			grid: {
				count: [
					2,
					2,
					2
				],
				size: e.map((e) => (typeof e == "number" ? e : 1) * (1 + t)),
				useCenter: !0
			},
			randomness: !1,
			randomnessObject: {
				strength: 100,
				scale: [
					0,
					0,
					0
				],
				rotation: [
					0,
					0,
					0
				],
				position: [
					0,
					0,
					0
				],
				movement: 1,
				seed: 0,
				freqScale: 10,
				noiseType: "perlin"
			}
		};
	}, e.merge = function(e, t) {
		let n = { ...e };
		if (Yn.forEach((r) => {
			Object.assign(n, { [r]: t[r] ?? e[r] });
		}), n.radial = { ...e.radial }, t.radial) {
			let r = e.radial, i = t.radial;
			Xn.forEach((e) => {
				Object.assign(n.radial, { [e]: i[e] ?? r[e] });
			});
		}
		if (n.linear = { ...e.linear }, t.linear) {
			let r = e.linear, i = t.linear;
			Zn.forEach((e) => {
				Object.assign(n.linear, { [e]: i[e] ?? r[e] });
			});
		}
		if (n.grid = { ...e.grid }, t.grid) {
			let r = e.grid, i = t.grid;
			Qn.forEach((e) => {
				Object.assign(n.grid, { [e]: i[e] ?? r[e] });
			});
		}
		if (n.toObject = { ...e.toObject }, t.toObject) {
			let r = e.toObject, i = t.toObject;
			$n.forEach((e) => {
				Object.assign(n.toObject, { [e]: i[e] ?? r[e] });
			});
		}
		if (n.randomnessObject = { ...e.randomnessObject }, t.randomnessObject) {
			let r = e.randomnessObject, i = t.randomnessObject;
			er.forEach((e) => {
				Object.assign(n.randomnessObject, { [e]: i[e] ?? r[e] });
			});
		}
		return n;
	}, e.isPartial = function(e) {
		return !(!e.randomnessObject && !e.toObject);
	};
})(Nn ||= {}), ((e) => {
	e.defaultData = {
		radial: {},
		linear: {},
		grid: {},
		toObject: {},
		randomnessObject: {}
	};
	let t = [
		"radial",
		"linear",
		"grid",
		"toObject",
		"randomnessObject"
	];
	e.toOps = function(e, n) {
		let r = [];
		e.count !== void 0 && r.push({
			type: 0,
			path: n,
			props: { count: e.count }
		});
		for (let i of t) {
			let t = e[i];
			t && Object.keys(t).length > 0 && r.push({
				type: 0,
				path: [...n, i],
				props: t
			});
		}
		return r;
	};
})(Pn ||= {});
var In, Ln, K, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn = ["count"], Xn = [
	"radius",
	"start",
	"end",
	"position",
	"scale",
	"rotation"
], Zn = [
	"position",
	"scale",
	"rotation"
], Qn = ["count", "size"], $n = [
	"count",
	"position",
	"scale",
	"rotation"
], er = [
	"strength",
	"scale",
	"rotation",
	"position",
	"movement",
	"seed",
	"freqScale"
];
function tr(e) {
	let t = typeof e == "string" ? Number.parseInt(e, 10) : e;
	return typeof t == "number" && Number.isFinite(t) ? Math.min(5, Math.max(0, Math.round(t))) : 3;
}
((e) => {
	function t(e) {
		return e.mode ?? "linear";
	}
	e.defaultData = {
		enabled: !1,
		useBackgroundColor: !1,
		color: I.white,
		near: .1,
		far: 2e3,
		mode: "linear",
		density: .005,
		heightFalloff: .01,
		heightBase: 0
	}, e.getMode = t, e.getModeIndex = function(e) {
		let n = t(e);
		return n === "height" ? 1 : n === "both" ? 2 : 0;
	}, e.getDensity = function(t) {
		return t.density ?? e.defaultData.density;
	}, e.getHeightFalloff = function(t) {
		return t.heightFalloff ?? e.defaultData.heightFalloff;
	}, e.getHeightBase = function(t) {
		return t.heightBase ?? e.defaultData.heightBase;
	};
})(In ||= {}), (Ln ||= {}).defaultData = {
	image: null,
	rotation: 0,
	blur: 32,
	showBackground: !0
}, (K ||= {}).defaultData = {
	enabled: !1,
	mode: "hdri",
	hdri: Ln.defaultData,
	timeOfDay: 10,
	weather: "partlyCloudy",
	lighting: !0,
	lightingIntensity: 1,
	lightingQuality: "full",
	clouds: !0,
	windSpeed: 2,
	animateWind: !0,
	exposure: 1,
	seed: 2
}, (() => {
	let e = {
		opacity: 1,
		blendFunction: 13,
		enabled: !1
	};
	(Rn ||= {}).defaultData = {
		enabled: !1,
		pixelation: {
			...e,
			blendFunction: 16,
			granularity: 15
		},
		bloom: {
			...e,
			blendFunction: 16,
			intensity: 1,
			blurScale: 1,
			luminanceThreshold: .25,
			luminanceSmoothing: .025,
			kernelSize: 3
		},
		chromaticAberration: {
			...e,
			offset: [2, 2]
		},
		vignette: {
			...e,
			darkness: 1,
			offset: 0
		},
		hueSaturation: {
			...e,
			hue: 3,
			saturation: 0
		},
		brightnessContrast: {
			...e,
			brightness: .25,
			contrast: 0
		},
		depthOfField: {
			...e,
			focusDistance: 100,
			focalLength: 20,
			bokehScale: 5
		},
		noise: {
			...e,
			blendFunction: 16
		}
	};
})(), ((e) => {
	e.defaultData = {
		type: "normal",
		softShadowQuality: "low"
	}, e.isSoft = function(e) {
		return e != null && (e.type === void 0 || e.type === "soft");
	};
})(zn ||= {}), (Bn ||= {}).defaultData = {
	enabled: !0,
	color: {
		r: .8274509803921568,
		g: .8274509803921568,
		b: .8274509803921568
	},
	intensity: .75
}, (Vn ||= {}).defaultData = {
	occlusion: !1,
	aoFullRes: !1,
	radius: 256,
	bias: .5,
	aoColor: {
		r: .19607843137254902,
		g: .19607843137254902,
		b: .19607843137254902
	}
}, ((e) => {
	e.defaultData = {
		pipeline: "classic",
		toneMapping: "aces",
		exposure: 1
	}, e.isUntouched = function(e) {
		return e === void 0 || e.pipeline === "classic" && (e.toneMapping === "none" || e.toneMapping === "aces") && e.exposure === 1;
	};
})(Hn ||= {}), (Un ||= {}).defaultData = {
	usePhysics: !1,
	gravity: -10
}, (Wn ||= {}).defaultData = {
	playCamera: Bt,
	gameControlObject: null
}, (Gn ||= {}).defaultData = {
	backgroundColor: R.fromHexAndA(2500134, 1),
	postprocessing: Rn.defaultData,
	fog: In.defaultData,
	sky: K.defaultData,
	globalPhysics: Un.defaultData,
	ambient: Bn.defaultData,
	ao: Vn.defaultData,
	shadow: zn.defaultData,
	publish: Wn.defaultData,
	grading: Hn.defaultData
}, (Kn ||= {}).defaultData = {
	colliderType: "box",
	size: [
		100,
		100,
		100
	],
	colliderHelperVisible: !0,
	forceType: "collider",
	forceRange: "global",
	forceIntensity: .5,
	forceDambing: .95
}, ((e) => {
	e.isComponentRelated = function(e) {
		return e === "Component" || e === "Instance";
	}, e.isEmptyOrComponent = function(e) {
		return e === "Empty" || e === "Instance";
	};
})(qn ||= {}), ((e) => {
	e.identity = {
		...zt.identity,
		hiddenMatrix: Lt.identity
	}, e.fromObject = function(e) {
		return {
			position: e.position,
			rotation: e.rotation,
			scale: e.scale,
			pivot: e.pivot,
			pivotRotation: e.pivotRotation,
			hiddenMatrix: e.hiddenMatrix
		};
	}, e.merge = function(e, t) {
		return {
			position: t?.position || e.position,
			rotation: t?.rotation || e.rotation,
			pivot: t?.pivot || e.pivot,
			pivotRotation: t?.pivotRotation || e.pivotRotation,
			scale: t?.scale || e.scale,
			hiddenMatrix: t?.hiddenMatrix || e.hiddenMatrix
		};
	}, e.diff = function(e, t) {
		return f({
			position: Nt.isEqual(e.position, t.position) ? void 0 : t.position,
			rotation: Nt.isEqual(e.rotation, t.rotation) ? void 0 : t.rotation,
			scale: Nt.isEqual(e.scale, t.scale) ? null : t.scale,
			hiddenMatrix: Lt.isEqual(e.hiddenMatrix, t.hiddenMatrix) ? void 0 : t.hiddenMatrix
		});
	};
})(Jn ||= {});
var q, nr, rr, ir, ar, or, J, sr, cr, lr, ur, dr, fr, pr, mr, Y, hr, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, X, Z, Dr, Or, kr, Ar, jr = ["slide", "offset"];
function Mr(e, t = [0, 0]) {
	return [e && !isNaN(e[0]) ? e[0] : t[0], e && !isNaN(e[1]) ? e[1] : t[1]];
}
function Nr(e, t, n) {
	switch (e) {
		case 0: return "cubicBezier( 0, 0, 1, 1 )";
		case 1: return "cubicBezier( .25, .1, .25, 1 )";
		case 2: return "cubicBezier( .42, 0, 1, 1 )";
		case 3: return "cubicBezier( 0, 0, .58, 1 )";
		case 4: return "cubicBezier( .42, 0, .58, 1 )";
		case 7: return "cubicBezier( .25, 1, .5, 1 )";
		case 5: {
			let { control1: e, control2: n } = t ?? { ...Gt.defaultData };
			return `cubicBezier( ${e[0]}, ${e[1]}, ${n[0]}, ${n[1]} )`;
		}
		case 6: {
			let { mass: e, stiffness: t, damping: r, velocity: i } = n ?? { ...Wt.defaultData }, a = new Ir(e, t, r, i), o = a.solve(1);
			return () => (e) => a.solve(e) / o;
		}
		case 8: return () => (e) => Math.floor(e);
	}
}
(q ||= {}).defaultData = {
	states: new g(),
	events: new g(),
	visible: !0,
	raycastLock: !1,
	physics: Qt.defaultData,
	pathSnapping: {
		pathId: null,
		slide: 0,
		offset: 0,
		orientation: "tangential"
	},
	...Jn.identity,
	cloner: null
}, (nr ||= {}).defaultData = {
	type: "Empty",
	...q.defaultData
}, (rr ||= {}).defaultData = {
	type: "ParticleCollider",
	...Kn.defaultData,
	...q.defaultData
}, (ir ||= {}).defaultData = {
	type: "Component",
	...q.defaultData
}, (ar ||= {}).defaultData = {
	type: "Particle",
	...q.defaultData,
	...Xt.defaultData
}, (or ||= {}).defaultData = {
	type: "Hair",
	...q.defaultData,
	...Zt.defaultData
}, (J ||= {}).defaultData = {
	type: "Mesh",
	...q.defaultData,
	...rn.defaultData
}, (sr ||= {}).defaultData = {
	...q.defaultData,
	...Jn.identity,
	position: Ot.DefaultPosition,
	rotation: Ot.DefaultRotation,
	...Ot.defaultData
}, ((e) => {
	e.defaultData = function(e) {
		return {
			...q.defaultData,
			...Yt.defaultData(e)
		};
	}, e.defaultDirectionalLightData = {
		...e.defaultData("DirectionalLight"),
		position: [
			200,
			300,
			300
		],
		name: "Directional Light",
		intensity: .7
	};
})(cr ||= {}), ((e) => {
	function t(e, t, n = 0) {
		for (; n < t.length;) {
			let r = e ? e[t[n]] : void 0;
			if (t.length === n + 1) return r;
			if (!r) return;
			e = r.descendants, n += 1;
		}
	}
	e.resolveWithDes = t, e.resolve = function(e, n, r = 0) {
		let i = t(e, n, r);
		if (i) {
			let e = Object.keys(i);
			if (e.length === 1 && e[0] === "descendants") return;
		}
		return i;
	};
})(lr ||= {}), ((e) => {
	function t(e, t) {
		return {
			...q.defaultData,
			...t,
			component: e,
			overrides: new v(),
			physics: void 0,
			events: void 0,
			type: "Instance"
		};
	}
	e.rootOverrideProps = ["physics", "events"], e.compositeNonOptionalOverrideProps = ["geometry"], e.compositeEntireOverrideOverrideProps = ["material"], e.ofComponent = t, e.fromComponentData = function(e) {
		let n = Jn.fromObject(e.data);
		return t(e.id, n);
	};
})(ur ||= {}), ((e) => {
	e.defaultData = {
		type: "Page",
		...q.defaultData,
		physics: {
			...Qt.defaultData,
			fusedBody: !1
		},
		...Gn.defaultData,
		camera: sr.defaultData,
		timelines: new m()
	}, e.isUIPage = function(e) {
		return e.uiScene !== void 0;
	};
})(dr ||= {}), ((e) => {
	e.defaultCamera = {
		position: [
			0,
			0,
			1e3
		],
		scale: [
			1,
			1,
			1
		],
		rotation: [
			0,
			0,
			0
		],
		pivot: [
			0,
			0,
			0
		],
		pivotRotation: [
			0,
			0,
			0
		],
		hiddenMatrix: Lt.identity,
		name: "Play Camera",
		visible: !0,
		raycastLock: !1,
		physics: Qt.defaultData,
		states: new g(),
		events: new g(),
		cloner: null,
		pathSnapping: {
			pathId: null,
			orientation: "tangential",
			slide: 0,
			offset: 0
		},
		...Ot.defaultData
	}, e.KeysByResetCategory = {
		States: ["states"],
		Events: ["events"],
		Material: ["material", "materials"],
		Geometry: ["geometry"],
		Position: ["position"],
		Rotation: ["rotation"],
		Scale: ["scale"],
		Transform: [
			"position",
			"scale",
			"rotation",
			"hiddenMatrix"
		],
		Name: ["name"],
		Visibility: [
			"visible",
			"raycastLock",
			"flatShading",
			"wireframe",
			"side",
			"shadowCatcher"
		],
		Shadows: ["castShadow", "receiveShadow"],
		Cloner: ["cloner"],
		Physics: ["physics"]
	}, e.defaultMeshObject = {
		name: "Rectangle",
		...q.defaultData,
		...J.defaultData,
		geometry: G.defaultData("RectangleGeometry"),
		material: W.defaultTwoLayerData("physical", "layer1", "layer2")
	}, e.defaultBooleanObject = {
		name: "Boolean",
		...q.defaultData,
		...J.defaultData,
		geometry: G.defaultData("BooleanGeometry"),
		material: W.defaultTwoLayerData("physical", "layer1", "layer2")
	}, e.defaultShapeBlendObject = {
		name: "Shape Blend",
		...q.defaultData,
		...J.defaultData,
		geometry: G.defaultData("ShapeBlendGeometry"),
		material: W.defaultTwoLayerData("physical", "layer1", "layer2")
	}, e.defaultTextObject = {
		name: "Text",
		...q.defaultData,
		...J.defaultData,
		geometry: G.defaultData("TextGeometry"),
		material: W.defaultTwoLayerData("physical", "layer1", "layer2")
	}, e.defaultInputObject = {
		name: "Input",
		...q.defaultData,
		...J.defaultData,
		geometry: G.defaultData("InputGeometry"),
		material: W.defaultTwoLayerData("physical", "layer1", "layer2")
	};
})(fr ||= {}), ((e) => {
	e.newEmpty = function(e, t) {
		let n = { name: t };
		return e.type === "Mesh" ? (n.geometry = {}, "material" in e && (n.material = { layers: new v() }), "materials" in e && (n.materials = e.materials.map((e) => ({ layers: new v() })))) : Et.is(e.type) && (n.perspective = {}, n.orthographic = {}), n;
	}, e.toOps = function(e, t) {
		let n, r = [], i = {
			orthographic: 0,
			perspective: 0,
			geometry: 0
		};
		function a(e, t) {
			for (let [n, i] of Object.entries(t.layers)) {
				let { texture: t, ...a } = i;
				if (t !== void 0 && Object.keys(t).length > 0) {
					let i = {
						path: [
							...e,
							"layers",
							n,
							"texture"
						],
						props: t,
						type: 0
					};
					r.push(i);
				}
				if (Object.keys(a).length > 0) {
					let t = {
						path: [
							...e,
							"layers",
							n
						],
						props: a,
						type: 0
					};
					r.push(t);
				}
			}
		}
		for (let [e, o] of Object.entries(t)) {
			let t = o;
			if (e !== "name") {
				if (e === "cloner") r.push(...Pn.toOps(t, ["cloner"]));
				else if (e === "pathSnapping") r.push({
					path: [e],
					props: {
						slide: t.slide,
						offset: t.offset
					},
					type: 0
				});
				else if (e === "material") a(["material"], t);
				else if (e === "materials") for (let [e, n] of Object.entries(t)) a(["materials", e], n);
				else if (i[e] === 0) {
					if (e === "geometry" && t.extrusion !== void 0) {
						let n = {
							path: [e, "extrusion"],
							props: t.extrusion,
							type: 0
						};
						r.push(n), t = { ...t }, delete t.extrusion;
					}
					if (Object.keys(t).length > 0) {
						let n = {
							path: [e],
							props: t,
							type: 0
						};
						r.push(n);
					}
				} else n === void 0 && (n = {
					path: [],
					props: {},
					type: 0
				}, r.push(n)), n.props[e] = t;
			}
		}
		return r;
	}, e.patch = function(e, t) {
		if (t === void 0) return e;
		let n = { ...e };
		if (Object.assign(n, Jn.merge(n, t)), Object.assign(n, { pathSnapping: Object.assign({}, n.pathSnapping, {
			slide: t.pathSnapping?.slide ?? n.pathSnapping?.slide ?? 0,
			offset: t.pathSnapping?.offset ?? n.pathSnapping?.offset ?? 0
		}) }), Et.is(e.type)) {
			n.orthographic = { ...n.orthographic }, n.perspective = { ...n.perspective };
			let e = t;
			e.orthographic?.zoom !== void 0 && (n.orthographic.zoom = e.orthographic.zoom), e.perspective?.zoom !== void 0 && (n.perspective.zoom = e.perspective.zoom), e.isUpVectorFlipped !== void 0 && (n.isUpVectorFlipped = e.isUpVectorFlipped), e.targetOffset !== void 0 && (n.targetOffset = e.targetOffset);
		} else if (e.type === "Mesh") "geometry" in t && Object.assign(n, { geometry: kn.merge(n.geometry, t.geometry) }), (t.material || t.materials) && (n = function(e, t) {
			if (t === void 0) return e;
			let n = { ...e };
			return "material" in n && "material" in t && t.material && (n.material = Le(n.material, (e) => {
				if (typeof e != "string") for (let [n, r] of Object.entries(t.material.layers)) {
					let t = e.layers.data(n);
					t && V.patch(t, r);
				}
			}).data), n.materials && t.materials && (n.materials = Le(n.materials, (e) => {
				for (let r = 0; r < n.materials.length; r++) {
					let n = t.materials[r];
					if (typeof n != "string") for (let [t, i] of Object.entries(n.layers)) {
						let n = e[r]?.layers?.data(t);
						n && V.patch(n, i);
					}
				}
			}).data), n;
		}(n, t)), n.cloner && "cloner" in t && Object.assign(n, { cloner: Nn.merge(n.cloner, t.cloner) });
		else if (e.type === "Empty") n.cloner && "cloner" in t && Object.assign(n, { cloner: Nn.merge(n.cloner, t.cloner) });
		else if (Jt.is(e.type)) {
			let e = t;
			e.intensity !== void 0 && (n.intensity = e.intensity), e.color !== void 0 && (typeof e.color == "string" ? n.color = e.color : n.color = I.clone(e.color));
		}
		return n;
	};
})(pr ||= {}), (mr ||= {}).defaultData = {
	enablePan: !0,
	enableZoom: !0,
	enableRotate: !0,
	enableDamping: !0,
	rotationLimitsMode: 0,
	rotationVerticalOffset: {
		min: Math.PI / 4,
		max: Math.PI / 4
	},
	rotationHorizontalOffset: {
		min: Math.PI / 4,
		max: Math.PI / 4
	},
	rotationSoftLimit: 2,
	rotationSpeed: 1,
	panLimitsMode: 0,
	panVerticalOffset: {
		min: 250,
		max: 250
	},
	panHorizontalOffset: {
		min: 250,
		max: 250
	},
	panSoftLimit: 2,
	zoomLimitsEnabled: !1,
	zoomLimits: {
		min: .1,
		max: 2
	},
	autoRotate: !1,
	autoRotateSpeed: 2,
	autoRotateClockwise: !0,
	hoverRotatePanMode: 0,
	hoverRotatePanStrength: 20,
	hoverRotateDamping: .125,
	isTouchZoom: !0,
	orbitTouches: 2,
	panTouches: 3,
	resetHoverEffectOnPointerLeave: !0
}, (Y ||= {}).defaultData = {
	orbitControls: mr.defaultData,
	playPage: Vt,
	withBackground: !0,
	preventScroll: !1,
	preventTouchScroll: !1,
	hideCursor: !1,
	mouseEventTarget: "canvas",
	joystickSizeAndXYOffset: Array(12).fill(0).map((e, t) => {
		let n = 0, r = 0;
		return t < 5 ? r = -30 : t < 10 && (r = 30), t === 0 || t === 10 || t === 5 ? n = 30 : (t === 4 || t === 11 || t === 9) && (n = -30), [
			120,
			[n, r],
			"show"
		];
	}),
	settings: {
		image: {
			format: "jpg",
			ratio: 1,
			colorSpace: "display-p3"
		},
		videoStatic: {
			fps: 60,
			mbps: 150,
			ratio: 1,
			duration: 1e3,
			format: "mp4",
			imageFormat: "jpg",
			activeTimeline: null,
			colorSpace: "display-p3"
		},
		web: {
			logo: !0,
			compress: !0,
			preset: 1,
			preload: !0,
			hint: !1,
			imageQuality: 70,
			pixelRatioMobile: 0,
			pixelRatioDesktop: 0
		}
	},
	stopRaycast: !0,
	hdTransmission: !1,
	renderer: "webgpu",
	asyncShaderCompilation: !0
}, (hr ||= {}).defaultData = {
	id: "basic",
	label: "Basic",
	style: "None",
	prompt: ""
}, (gr ||= {}).defaultData = {
	weather: 0,
	shadows: 0,
	lightOrigin: 0,
	temperature: 0,
	sun: 0,
	camera: 0,
	environment: 0,
	particles: 0,
	nature: 0,
	floor: 0
}, ((e) => {
	e.defaultData = () => ({
		mode: "line-art-both",
		prompt: "",
		negativePrompt: "",
		style: { ...hr.defaultData },
		isRandomSeed: !0,
		seed: e.generateSeed(),
		guessMode: !1,
		advanced: !1,
		steps: 20,
		guidanceScale: 7.5,
		controlNetScale: 1,
		modifiers: gr.defaultData
	}), e.generateSeed = () => Math.round(1e5 * Math.random());
})(_r ||= {}), ((e) => {
	function t(e, t) {
		let n = e.scene.objects.get(t);
		if (n && n.data.type === "Component") return n;
		{
			let n = e.shared.lib.components[t];
			if (n) return {
				...n.asset,
				id: t
			};
		}
	}
	e.physicsEnabled = function(e) {
		return e.find((e) => e.data.type === "Page" && e.data.globalPhysics.usePhysics) !== void 0;
	}, e.findTimeline = function(e, t) {
		let n = e.find((e) => e.data.type === "Page" && e.data.timelines?.[t] !== void 0);
		return n && n.data.timelines?.[t];
	}, e.getComponentData = t, e.traverseModuleInstances = function(e, n, r) {
		e.scene.objects.traverseFrom(n, (n, i) => {
			if (i.type === "Instance") {
				let a = t(e, i.component)?.data;
				a && r(n, i, a.events);
			} else r(n, i, i.events);
		});
	};
})(vr ||= {}), ((e) => {
	function t(t = !0, n = []) {
		let r = [];
		t && r.push({ ...e.defaultLight }), r.push(...n);
		let i = new h();
		return i.push({
			fi: 1,
			id: Vt,
			data: {
				...dr.defaultData,
				name: "Scene 1"
			},
			children: r
		}), i;
	}
	function n(t) {
		return {
			...e.defaultData,
			objects: s(t, h.prototype)
		};
	}
	e.TRASH_CAN_ID = "830a2708-8ed9-49cf-a68e-085299892222", e.defaultLight = {
		fi: -1,
		data: cr.defaultDirectionalLightData,
		id: "830a2708-8ed9-49cf-a68e-085299899103",
		children: []
	}, e.createDefaultObjectTreeWithPage = t, e.defaultData = {
		objects: t(),
		publish: Y.defaultData,
		styles: _r.defaultData()
	}, e.emptyDataWithoutPage = function() {
		return {
			objects: new h(),
			publish: Y.defaultData,
			styles: _r.defaultData()
		};
	}, e.emptyDataWithPage = function(e = !0) {
		return {
			objects: t(e),
			publish: Y.defaultData,
			styles: _r.defaultData()
		};
	}, e.emptyData = function() {
		return {
			objects: new h(),
			publish: { ...Y.defaultData },
			styles: _r.defaultData()
		};
	}, e.withObjs = n, e.withObj = function(e, t) {
		return n([{
			id: e,
			data: t,
			children: [],
			fi: 0
		}]);
	};
})(yr ||= {}), (br ||= {}).defaultData = {
	preset: "fullscreen",
	allowResponsive: !1,
	size: [512, 512],
	coords: [0, 0],
	sceneScale: 1,
	color: {
		r: 0,
		g: 0,
		b: 0,
		a: .5
	}
}, ((e) => {
	e.defaultData = (e) => ({
		url: e,
		name: "New Webhook",
		parametersSchemas: new g()
	}), e.defaultParameterValueByType = (e) => e === "number" ? 0 : e !== "boolean" && "";
})(xr ||= {}), (Sr ||= {}).defaultData = (e, t = "GET") => ({
	url: e,
	method: t,
	name: "New API",
	headers: new g(),
	queries: new g(),
	autoStart: !0
}), ((e) => {
	function t(e) {
		return e.textValue !== void 0;
	}
	function n(e) {
		return typeof e == "boolean";
	}
	e.isTextValue = t, e.isNumber = function(e) {
		return typeof e == "number";
	}, e.isBoolean = n, e.typeOfVariable = function(e) {
		return t(e) ? "string" : n(e) ? "boolean" : "number";
	}, e.getDisplayedValue = function(t) {
		return e.isTextValue(t) ? Array.isArray(t.textValue) ? t.textValue.map((e) => e.toString().padStart(t.padding ?? 2, "0")).join(t.deliminator ?? ":") + (t.suffix === void 0 ? "" : " " + t.suffix) : t.textValue.toString() : e.isBoolean(t) ? t ? "True" : "False" : e.isNumber(t) ? parseFloat(t.toFixed(3)).toString() : t.toString();
	};
})(Cr ||= {}), (wr ||= {}).all = [
	"images",
	"videos",
	"colors",
	"audios",
	"particles",
	"fonts",
	"materials",
	"variables"
], (Tr ||= {}).all = [...wr.all, "components"], (Er ||= {}).defaultData = function() {
	return {
		images: new m(),
		videos: new m(),
		colors: new m(),
		audios: new m(),
		particles: new m(),
		fonts: new m(),
		materials: new m(),
		components: new m(),
		variables: new m(),
		userAPIs: new m(),
		userWebhooks: new m()
	};
}, (X ||= {}).defaultData = function() {
	return {
		images: new m(),
		videos: new m(),
		colors: new m(),
		audios: new m(),
		particles: new m(),
		fonts: new m(),
		materials: new m(),
		components: new m(),
		variables: new m(),
		userAPIs: new m(),
		userWebhooks: new m()
	};
}, ((e) => {
	e.defaultColors = function() {
		return s({ "89b10010-844c-11ec-a8a3-0242ac120002": {
			r: .5,
			g: .5,
			b: .5,
			a: 1,
			name: "Default Color"
		} }, m.prototype);
	}, e.defaultImages = function() {
		return s({}, m.prototype);
	}, e.emptyData = function() {
		return {
			catelogs: new m(),
			materials: new m(),
			images: new m(),
			videos: new m(),
			colors: new m(),
			audios: new m(),
			particles: new m(),
			fonts: new m(),
			variables: new g(),
			userAPIs: new m(),
			userWebhooks: new m(),
			lib: X.defaultData()
		};
	}, e.defaultVariables = function(e) {
		switch (e) {
			case "number": return {
				value: 0,
				name: "Number"
			};
			case "boolean": return {
				value: !1,
				name: "Boolean"
			};
			case "string": return {
				value: { textValue: "String value" },
				name: "String"
			};
			case "time": {
				let e = [
					0,
					0,
					0
				];
				return {
					name: "Time",
					value: {
						textValue: e,
						deliminator: ":",
						padding: 2,
						suffix: "AM"
					},
					dynamicVariableType: "time",
					format: "HH:mm:ss",
					format12h24h: "12ampm",
					timeZone: null,
					hasEnd: !1,
					endValue: {
						textValue: e,
						deliminator: ":",
						padding: 2,
						suffix: "AM"
					},
					autoStart: !0,
					repeat: !1
				};
			}
			case "counter": return {
				name: "Counter",
				value: 0,
				dynamicVariableType: "counter",
				updateInterval: 1e3,
				increment: 1,
				autoStart: !0,
				hasEnd: !0,
				endValue: 60,
				repeat: !0,
				randomStart: !1,
				range: [0, 100],
				decimals: 0
			};
			case "random": return {
				name: "Random",
				value: 0,
				dynamicVariableType: "random",
				updateInterval: 1e3,
				increment: 1,
				autoStart: !0,
				isStatic: !1,
				hasEnd: !0,
				endValue: 60,
				repeat: !0,
				min: 0,
				max: 100,
				decimals: 0
			};
			default: console.error("Unknown variable type", e);
		}
	}, e.getFormattedTimerTime = function(e, t) {
		if (t.format === "HH:mm:ss") {
			let t = Math.floor(e / 3600), n = Math.floor((e - 3600 * t) / 60);
			return { textValue: [
				t,
				n,
				Math.round(e - 3600 * t - 60 * n)
			] };
		}
		if (t.format === "mm:ss") {
			let t = Math.floor(e / 60);
			return { textValue: [t, Math.round(e - 60 * t)] };
		}
		return t.format === "number" ? Math.round(e) : Math.round(1e3 * e) / 1e3;
	};
})(Z ||= {}), ((e) => {
	e.defaultData = {
		schema: 131,
		scene: yr.defaultData,
		frames: new m().add("72fc2993-2da3-4b6b-96ac-2879db3a28bd", br.defaultData),
		shared: {
			...Z.emptyData(),
			colors: Z.defaultColors()
		}
	}, e.createDefaultData = function() {
		return At.deserialize(At.serialize(e.defaultData));
	}, e.emptyDataForImports = function() {
		return {
			schema: 131,
			scene: yr.emptyDataWithPage(),
			frames: new m().add("72fc2993-2da3-4b6b-96ac-2879db3a28bd", br.defaultData),
			shared: {
				...Z.emptyData(),
				colors: Z.defaultColors(),
				images: Z.defaultImages()
			}
		};
	}, e.emptyData = function() {
		return {
			schema: 131,
			scene: yr.emptyDataWithPage(),
			frames: new m().add("72fc2993-2da3-4b6b-96ac-2879db3a28bd", br.defaultData),
			shared: Z.emptyData()
		};
	}, e.clipboard2dData = function() {
		return {
			schema: 131,
			scene: yr.emptyData(),
			frames: new m(),
			shared: Z.emptyData()
		};
	}, e.withoutLib = function(e) {
		return {
			...e,
			shared: {
				...e.shared,
				lib: X.defaultData()
			}
		};
	}, e.getComponentData = function(e, t) {
		return vr.getComponentData(e, t);
	}, e.hasSensitiveData = function(e) {
		let t = Object.values(e.shared.userAPIs);
		for (let e of t) {
			let t = e.headers;
			for (let e of t) if (e.data.key.toLowerCase() === "authorization" && e.data.value !== "") return !0;
		}
		return !1;
	};
})(Dr ||= {}), (Or ||= {}).defaultData = function(e, t) {
	return {
		id: e,
		name: t,
		duration: 5,
		objectTimelines: new m()
	};
}, (kr ||= {}).is = function(e) {
	return e && typeof e.x == "number" && typeof e.y == "number" && typeof e.z == "number";
}, ((e) => {
	function t(e, t) {
		let n = [0, 0], r = [1, 1];
		if (e?.cubicControls) n = Mr(e.cubicControls.control1, n);
		else switch (e?.type) {
			case 2:
			case 4:
				n = [.42, 0];
				break;
			case 3:
			case 0:
				n = [0, 0];
				break;
			case 1:
				n = [.25, .1];
				break;
			case 7: n = [.25, 1];
		}
		if (t?.cubicControls) r = Mr(t.cubicControls.control2, r);
		else switch (t?.type) {
			case 2:
			case 0:
				r = [1, 1];
				break;
			case 3:
			case 4:
				r = [.58, 1];
				break;
			case 1:
				r = [.25, 1];
				break;
			case 7: r = [.5, 1];
		}
		return {
			control1: n,
			control2: r
		};
	}
	function n(n) {
		if (!e.BEZIER_PRESETS.includes(n)) return;
		let r = { type: n };
		return {
			control1: t(r).control1,
			control2: t(void 0, r).control2
		};
	}
	function r(e, t) {
		return Math.abs(e[0] - t[0]) < .001 && Math.abs(e[1] - t[1]) < .001;
	}
	function i(t) {
		let n = e.ROOT_PROPERTY_ORDER.indexOf(t[0]);
		return n === -1 ? e.ROOT_PROPERTY_ORDER.length : n;
	}
	function a(e) {
		return e.layerId ?? e.path.join(".");
	}
	function o(e) {
		let t = e[e.length - 1];
		return Fr.includes(t) ? t : void 0;
	}
	function s(e) {
		return e.layerId ? e.layerId : (o(e.path) ? e.path.slice(0, -1) : e.path).join(".");
	}
	function c(e) {
		return ["material", e.type === "light" ? `${e.category} lighting` : e.type];
	}
	function l(e, t, n) {
		return {
			id: e,
			data: {
				id: e,
				time: n?.time ?? 0,
				path: t,
				value: {},
				layerId: n?.layerId,
				index: n?.index,
				isPlaceholder: !0,
				easing: {
					type: 5,
					cubicControls: {
						control1: [.42, 0],
						control2: [.58, 1]
					}
				}
			}
		};
	}
	e.getControlsWithDefault = t, e.BEZIER_PRESETS = [
		0,
		1,
		2,
		3,
		4,
		7
	], e.presetHandles = n, e.presetForHandles = function(t) {
		return e.BEZIER_PRESETS.find((e) => {
			let i = n(e);
			return i !== void 0 && r(i.control1, t.control1) && r(i.control2, t.control2);
		});
	}, e.defaultData = function(e) {
		return {
			id: e,
			keyframes: new g()
		};
	}, e.ROOT_PROPERTY_ORDER = [
		"position",
		"rotation",
		"scale",
		"shape size",
		"material",
		"opacity",
		"camera",
		"light",
		"cloner",
		"path extrusion",
		"path snapping"
	], e.rowOrder = i, e.propertyKey = a, e.groupKeyframes = function(e, t) {
		let n = /* @__PURE__ */ new Map();
		for (let r of e) {
			let e = r.data;
			if (t?.(e)) continue;
			let i = a(e), o = n.get(i);
			o || (o = {
				id: i,
				path: e.path,
				keyframes: [],
				layerId: e.layerId,
				index: e.index
			}, n.set(i, o)), e.isPlaceholder ? o.placeholder = r.id : o.keyframes.push(r);
		}
		return [...n.values()].sort((e, t) => {
			let n = i(e.path) - i(t.path);
			return n === 0 ? (e.index ?? 0) - (t.index ?? 0) : n;
		});
	}, e.rowAxis = o, e.drawnRowKey = s, e.drawnRows = function(e) {
		let t = /* @__PURE__ */ new Map();
		for (let n of e) {
			let e = o(n.path), r = e ? n.path.slice(0, -1) : n.path, i = s(n), a = t.get(i);
			a || (a = {
				id: i,
				path: r,
				layerId: n.layerId,
				index: n.index,
				tracks: []
			}, t.set(i, a)), a.tracks.push({
				axis: e,
				property: n
			});
		}
		return [...t.values()];
	}, e.sortedKeyframes = function(e) {
		return [...e].sort((e, t) => e.data.time - t.data.time);
	}, e.materialLayerPath = c, e.createMaterialGroup = function(e, t) {
		return e.map(({ data: e, id: n }, r) => l(t(), c(e), {
			layerId: n,
			index: r
		}));
	}, e.placeholderKeyframe = l, e.createName = function(e) {
		return Object.entries(e).reduce((e, [t, n]) => (typeof n != "string" && e.push({ name: n.name }), e), []);
	}, e.Presets = [
		{
			name: "Slide in",
			animationParams: {
				translateX: {
					value: [-20, 0],
					easing: Nr(3),
					duration: 1e3
				},
				opacity: {
					value: [0, 1],
					easing: Nr(3),
					duration: 1e3
				},
				endDelay: 250,
				loop: !0
			}
		},
		{
			name: "Rotate",
			animationParams: {
				rotate: {
					value: [0, "1turn"],
					easing: Nr(5),
					duration: 700
				},
				endDelay: 250,
				loop: !0
			}
		},
		{
			name: "Scale Out",
			animationParams: {
				scale: {
					value: [1, 1.5],
					easing: Nr(4),
					duration: 1e3
				},
				endDelay: 250,
				loop: !0
			}
		},
		{
			name: "Jump",
			animationParams: {
				translateY: [
					{
						value: 0,
						duration: 200,
						easing: "linear"
					},
					{
						value: -20,
						easing: "linear",
						duration: 200
					},
					{
						value: 0,
						easing: "linear",
						duration: 100
					}
				],
				endDelay: 500,
				loop: !0
			}
		},
		{
			name: "Jump Rotate",
			animationParams: {
				translateY: [
					{
						value: 0,
						duration: 200,
						easing: "linear"
					},
					{
						value: -20,
						easing: "linear",
						duration: 200
					},
					{
						value: 0,
						easing: "linear",
						duration: 100
					}
				],
				rotate: {
					value: [0, "1turn"],
					easing: Nr(5),
					duration: 500
				},
				endDelay: 500,
				loop: !0
			}
		},
		{
			name: "Bounce",
			animationParams: {
				translateY: {
					value: ["20px", "-20px"],
					duration: 575,
					easing: "easeOutQuad"
				},
				direction: "alternate",
				loop: !0
			}
		}
	];
})(Ar ||= {});
var Pr, Fr = [
	"x",
	"y",
	"z"
], Ir = class {
	constructor(e = 1, t = 100, n = 10, r = 0) {
		this.mass = e, this.stiffness = t, this.damping = n, this.initialVelocity = r, this.m_w0 = Math.sqrt(t / e), this.m_zeta = n / (2 * Math.sqrt(t * e)), this.m_zeta < 1 ? (this.m_wd = this.m_w0 * Math.sqrt(1 - this.m_zeta * this.m_zeta), this.m_A = 1, this.m_B = (this.m_zeta * this.m_w0 - r) / this.m_wd) : (this.m_wd = 0, this.m_A = 1, this.m_B = -r + this.m_w0);
	}
	solve(e) {
		return 1 - (this.m_zeta < 1 ? Math.exp(-e * this.m_zeta * this.m_w0) * (this.m_A * Math.cos(this.m_wd * e) + this.m_B * Math.sin(this.m_wd * e)) : (this.m_A + this.m_B * e) * Math.exp(-e * this.m_w0));
	}
	getDuration() {
		let e = .16666666666666666, t = 0, n = 0;
		for (;;) if (t += e, this.solve(t) === 1) {
			if (n++, n >= 16) break;
		} else n = 0;
		return t * e * 1e3;
	}
};
function Lr(e) {
	return e === "MouseDown" || e === "MouseUp" || e === "KeyDown" || e === "KeyUp" || e === "Collision" || e === "Trigger";
}
((e) => {
	e.toEventUIType = function(e) {
		return e.type === "Conditional" ? e.condition.type === "Distance" ? "Distance" : "StateChange" : e.type;
	}, e.fromEventUIType = function(e) {
		return e === "Distance" || e === "StateChange" ? "Conditional" : e;
	};
})(Pr ||= {});
var Rr, zr, Br, Vr, Hr, Ur, Wr, Gr, Kr, qr, Jr, Yr, Xr, Zr, Qr, $r, ei, ti, ni, ri, ii, ai = {
	LookAt: [],
	Follow: ["Create"],
	DragDrop: [
		"Transition",
		"Animation",
		"Audio",
		"Particles",
		"Create",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	MouseHover: [
		"Transition",
		"Animation",
		"TimelineAnimation",
		"Particles",
		"Create",
		"Destroy",
		"SwitchCamera",
		"SceneTransition",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	Scroll: [
		"Transition",
		"Animation",
		"TimelineAnimation",
		"Create",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	Start: [
		"Transition",
		"Animation",
		"TimelineAnimation",
		"Audio",
		"Particles",
		"Video",
		"Create",
		"Destroy",
		"SwitchCamera",
		"SceneTransition",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	Conditional: [
		"Transition",
		"Animation",
		"TimelineAnimation",
		"Audio",
		"Particles",
		"Video",
		"Link",
		"Create",
		"Destroy",
		"SwitchCamera",
		"SceneTransition",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	MouseDown: [
		"Transition",
		"Animation",
		"TimelineAnimation",
		"Audio",
		"Particles",
		"Video",
		"Link",
		"Create",
		"Destroy",
		"SwitchCamera",
		"SceneTransition",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	MouseUp: [
		"Transition",
		"Animation",
		"TimelineAnimation",
		"Audio",
		"Particles",
		"Video",
		"Link",
		"Create",
		"Destroy",
		"SwitchCamera",
		"SceneTransition",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	MousePress: [
		"Transition",
		"Animation",
		"TimelineAnimation",
		"Audio",
		"Particles",
		"Video",
		"Link",
		"Create",
		"SwitchCamera",
		"SceneTransition",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	KeyDown: [
		"Transition",
		"Animation",
		"TimelineAnimation",
		"Audio",
		"Particles",
		"Video",
		"Link",
		"Create",
		"Destroy",
		"SwitchCamera",
		"SceneTransition",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	KeyUp: [
		"Transition",
		"Animation",
		"TimelineAnimation",
		"Audio",
		"Particles",
		"Video",
		"Link",
		"Create",
		"Destroy",
		"SwitchCamera",
		"SceneTransition",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	KeyPress: [
		"Transition",
		"Animation",
		"Audio",
		"Particles",
		"Video",
		"Link",
		"Create",
		"SwitchCamera",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	GameControl: [
		"Transition",
		"Animation",
		"TimelineAnimation",
		"Audio",
		"Particles",
		"Create",
		"Conditional"
	],
	Collision: [
		"Transition",
		"Animation",
		"TimelineAnimation",
		"Audio",
		"Particles",
		"Video",
		"Create",
		"Destroy",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	Trigger: [
		"Transition",
		"Audio",
		"Particles",
		"Video",
		"Link",
		"Create",
		"Destroy",
		"SwitchCamera",
		"SceneTransition",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	Resize: [
		"Transition",
		"Animation",
		"Audio",
		"Particles",
		"Video",
		"Create",
		"Destroy",
		"SwitchCamera",
		"SceneTransition",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	VariableChange: [
		"Transition",
		"Animation",
		"TimelineAnimation",
		"Audio",
		"Particles",
		"Video",
		"Link",
		"Create",
		"Destroy",
		"SwitchCamera",
		"SceneTransition",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	API: [
		"Transition",
		"Animation",
		"Audio",
		"Particles",
		"Video",
		"Link",
		"Create",
		"Destroy",
		"SwitchCamera",
		"SceneTransition",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	WEBHOOK: [
		"Transition",
		"Animation",
		"Audio",
		"Particles",
		"Video",
		"Link",
		"Create",
		"Destroy",
		"SwitchCamera",
		"SceneTransition",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	],
	AIAssistantListener: ["SetVariable"],
	AIAssistantTrigger: [
		"Transition",
		"Animation",
		"Audio",
		"Particles",
		"Video",
		"Link",
		"Create",
		"Destroy",
		"SwitchCamera",
		"SceneTransition",
		"Reset",
		"SetVariable",
		"DynamicVariablePlay",
		"Conditional",
		"ClearLocalStorage",
		"UserAPI"
	]
};
function oi(e, ...t) {
	let n = {};
	for (let r of t.flat()) e != null && r in e && (n[r] = e[r]);
	return n;
}
function si(e) {
	e.layers.forEach((e) => {
		if (e.type === "depth" && e.colorA !== void 0) {
			let t = e.colorA, n = e.colorB, r = [[
				t.r,
				t.g,
				t.b,
				t.a
			], [
				n.r,
				n.g,
				n.b,
				n.a
			]], i = [0, 1];
			for (let e = 2; e < 10; e++) r.push(r[1]), i.push(1);
			let a = {
				...oi(b(e), "type", "visible", "isVector", "isWorldSpace", "origin", "alpha", "mode"),
				near: Math.max(0, e.near),
				far: Math.max(0, e.far),
				colors: r,
				steps: i,
				num: 2,
				direction: [
					1,
					0,
					0
				],
				smooth: !1,
				gradientType: 1
			};
			Object.assign(e, a);
		} else if (e.type === "depth" && e.gradientType === 1 && (e.near < 0 || e.far < 0)) {
			let t = {
				...b(e),
				near: Math.max(e.near, 0),
				far: Math.max(e.far, 0)
			};
			Object.assign(e, t);
		}
	});
}
function Q(e, t) {
	Object.values(e.shared.materials).forEach((e) => t(e));
}
function $(e, t) {
	e.scene.objects.traverse((e, n) => {
		"materials" in n ? n.materials.forEach((e, r) => {
			e === void 0 && (n.materials[r] = W.defaultTwoLayerData("phong"), e = n.materials[r]), typeof e != "string" && t(e);
		}) : "material" in n ? typeof n.material != "string" && (n.material === void 0 && (n.material = W.defaultTwoLayerData("phong")), t(n.material)) : n.type === "Mesh" && (n.material === void 0 && (n.material = W.defaultTwoLayerData("phong")), t(n.material)), "overrides" in n && Object.values(n.overrides).forEach((e) => {
			e.material && typeof e.material != "string" && Object.getPrototypeOf(e.material) !== v.prototype && t(e.material);
		});
	});
}
function ci(e) {
	e.layers === void 0 && Object.assign(e, W.defaultTwoLayerData("lambert"));
}
function li(e) {
	!e.layers || e.layers.forEach((e) => {
		if (e.type === "depth" && e.colors.length === 10) {
			let t = [...e.colors];
			t.push(e.colors[9]);
			let n = [...e.steps];
			n.push(e.steps[9]);
			let r = {
				...b(e),
				colors: t,
				steps: n
			};
			Object.assign(e, r);
		}
	});
}
function ui(e) {
	e.scene.objects.traverse((e, t) => {
		"materials" in t ? t.materials.forEach((e) => {
			typeof e != "string" && li(e);
		}) : "material" in t && typeof t.material != "string" && li(t.material);
	}), Object.values(e.shared.materials).forEach((e) => li(e));
}
function di(e) {
	e.layers && e.layers.forEach((e) => {
		e.type === "depth" && e.num !== void 0 && (e.colors = e.colors.slice(0, e.num), e.steps = e.steps.slice(0, e.num), delete e.num);
	});
}
function fi(e) {
	e.layers && e.layers.forEach((e) => {
		(function(e) {
			return e.type !== "displace";
		})(e) && e.isMask === void 0 && (e.isMask = !1), (e.type === "texture" || e.type === "video") && e.blending === void 0 && (e.blending = 0), (e.type === "noise" || e.type === "displace" && e.displacementType === "noise") && (e.voronoiStyle === void 0 && (e.voronoiStyle = 0), e.highCut === void 0 && (e.highCut = 1), e.lowCut === void 0 && (e.lowCut = 0), e.smoothness === void 0 && (e.smoothness = .3), e.seed === void 0 && (e.seed = 0), e.quality === void 0 && (e.quality = 1));
	});
}
function pi(e) {
	let t = e.layers.find((e) => e.type === "light")?.data;
	if (t?.category === "basic") {
		let e = V.defaultData("light", "phong"), n = t;
		Object.assign(n, e), n.visible = !1;
	}
}
function mi(e) {
	Q(e, pi), $(e, pi);
}
function hi(e) {
	e.layers.forEach((e) => {
		e.type === "light" && e.category !== "toon" && e.occlusion === void 0 && (e.occlusion = !0);
	});
}
function gi(e) {
	e.layers && e.layers.forEach((e) => {
		e.type === "light" && e.bumpMapIntensity === void 0 && (e.bumpMapIntensity = 5);
	});
}
function _i(e) {
	e.layers && e.layers.forEach((e) => {
		e.type === "light" && e.alphaOverride === void 0 && (e.alphaOverride = 1);
	});
}
((e) => {
	e.is = function(e) {
		return e.type === "MouseDown" || e.type === "MouseUp" || e.type === "MousePress" || e.type === "KeyDown" || e.type === "KeyUp" || e.type === "KeyPress";
	}, e.defaultData = function(e) {
		return e === "MouseDown" || e === "MouseUp" || e === "MousePress" ? {
			type: e,
			mode: "Object",
			disabled: !1,
			name: "",
			actions: new g()
		} : {
			type: e,
			disabled: !1,
			name: "",
			key: void 0,
			actions: new g()
		};
	};
})(Rr ||= {}), ((e) => {
	e.propertyDefaultData = function(e) {
		return {
			type: "Property",
			value: [
				e ?? null,
				"position",
				"x"
			]
		};
	}, e.valueDefaultData = {
		type: "Literal",
		value: 0
	};
})(zr ||= {}), ((e) => {
	e.comparisonDefaultData = function(e) {
		return {
			type: "Comparison",
			operator: "==",
			lOperand: zr.propertyDefaultData(e),
			rOperand: { ...zr.valueDefaultData }
		};
	}, e.distanceDefaultData = function(e) {
		return {
			type: "Distance",
			toObject: e ?? null,
			fromObject: e ?? null,
			distance: 200
		};
	}, e.stateDefaultData = function(e, t) {
		return {
			type: "State",
			object: e ?? null,
			state: t ?? null
		};
	};
})(Br ||= {}), (Vr ||= {}).isConditionalSubActions = function(e) {
	return e.find((e) => e === "ifActions" || e === "elseActions") !== void 0;
}, ((e) => {
	e.is = function(e) {
		return e.type === "Conditional";
	}, e.defaultData = function(e) {
		return {
			type: "Conditional",
			disabled: !1,
			name: "",
			inActions: new g(),
			outActions: new g(),
			condition: Br.distanceDefaultData(e)
		};
	};
})(Hr ||= {}), (Ur ||= {}).defaultData = {
	type: "DragDrop",
	name: "",
	cursor: "hand",
	disabled: !1,
	dampingFactor: 1,
	objects: [],
	snapTo: "center",
	snapSurfaceMode: "bbox",
	snapSurfaceOffset: 0,
	dropOn: "all",
	autoOrient: !0,
	dropDestinations: [],
	plane: "adaptive",
	planeMode: "locked",
	referenceFrame: "global",
	limits: [
		-1 / 0,
		1 / 0,
		-1 / 0,
		1 / 0,
		-1 / 0,
		1 / 0
	],
	drop: !1,
	resetOnSnapFail: !1,
	snapSpeed: 20,
	resetSpeed: 20,
	dragDropActions: {
		drag: new g(),
		drop: new g()
	}
}, (Wr ||= {}).defaultData = {
	type: "Follow",
	disabled: !1,
	name: "",
	maxDelta: 0,
	dampingFactor: 1,
	target: "cursor",
	plane: "custom",
	resetOnPointerLeave: !0,
	resetAfterDistanceLimit: !0,
	enabledTranslation: [
		!0,
		!0,
		!0
	],
	limitDistanceEnabled: !1,
	limitDistance: 1e3,
	snapDelay: 0,
	resetSpeed: 5,
	actions: new g()
}, (Gr ||= {}).defaultData = {
	type: "LookAt",
	disabled: !1,
	name: "",
	distance: 1e3,
	dampingFactor: 1,
	target: "cursor",
	tilt: "up",
	axis: "z",
	plane: "custom",
	resetOnPointerLeave: !0,
	resetAfterDistanceLimit: !0,
	enabledRotation: [
		!0,
		!0,
		!0
	],
	limitDistanceEnabled: !1,
	limitDistance: 1e3,
	snapDelay: 0,
	resetSpeed: 5
}, ((e) => {
	e.is = function(e) {
		return e.type === "MouseHover";
	}, e.defaultData = function() {
		return {
			type: "MouseHover",
			disabled: !1,
			name: "",
			actions: new g()
		};
	};
})(Kr ||= {}), ((e) => {
	e.is = function(e) {
		return e.type === "Scroll";
	}, e.defaultData = function() {
		return {
			type: "Scroll",
			disabled: !1,
			name: "",
			steps: 100,
			trigger: "load",
			startFrom: "enter",
			enterAnchor: "top",
			startOffset: 0,
			endAfter: 400,
			actions: new g()
		};
	};
})(qr ||= {}), ((e) => {
	e.is = function(e) {
		return e.type === "Start";
	}, e.defaultData = function() {
		return {
			type: "Start",
			disabled: !1,
			name: "",
			actions: new g()
		};
	};
})(Jr ||= {}), ((e) => {
	e.is = function(e) {
		return e.type === "Collision";
	}, e.defaultData = function() {
		return {
			type: "Collision",
			disabled: !1,
			name: "",
			target: "character",
			actions: new g()
		};
	};
})(Yr ||= {}), ((e) => {
	e.is = function(e) {
		return e.type === "Trigger";
	}, e.defaultData = function(e, t) {
		return {
			type: "Trigger",
			name: "",
			disabled: !1,
			target: "all",
			triggeringObjects: [],
			actions: new g(),
			triggerZone: "box",
			position: t.toArray(),
			rotation: [
				0,
				0,
				0
			],
			size: e.toArray(),
			radius: e.length() / 2,
			helperVisible: !0
		};
	};
})(Xr ||= {}), ((e) => {
	e.defaultSizes = {
		mobile: [480, 480],
		tablet: [768, 768],
		desktop: [1200, 1200],
		custom: [769, 1200]
	}, e.is = function(e) {
		return e.type === "Resize";
	}, e.sizeToDevice = function(e) {
		return typeof e == "string" ? e : "custom";
	}, e.deviceToSize = function(t) {
		return typeof t == "string" ? [...e.defaultSizes[t]] : [...t];
	}, e.defaultData = function() {
		let t = {
			size: "mobile",
			operator: "<",
			actions: new g()
		}, n = {
			size: "tablet",
			operator: "<",
			actions: new g()
		}, i = {
			size: [...e.defaultSizes.custom],
			operator: "<>",
			actions: new g()
		}, a = new g();
		return a.push({
			id: r.generateUUID(),
			fi: 0,
			data: t
		}, {
			id: r.generateUUID(),
			fi: 1,
			data: n
		}, {
			id: r.generateUUID(),
			fi: 2,
			data: i
		}), {
			type: "Resize",
			disabled: !1,
			name: "",
			orientation: "horizontal",
			breakpoints: a
		};
	}, e.defaultBreakpointData = function() {
		return {
			size: [...e.defaultSizes.custom],
			operator: "<>",
			actions: new g()
		};
	};
})(Zr ||= {}), ((e) => {
	e.propertyPaths = {
		Position: ["position"],
		"Position X": ["position", "x"],
		"Position Y": ["position", "y"],
		"Position Z": ["position", "z"],
		Rotation: ["rotation"],
		"Rotation X": ["rotation", "x"],
		"Rotation Y": ["rotation", "y"],
		"Rotation Z": ["rotation", "z"],
		Scale: ["scale"],
		"Scale X": ["scale", "x"],
		"Scale Y": ["scale", "y"],
		"Scale Z": ["scale", "z"],
		Width: ["width"],
		Height: ["height"],
		Depth: ["depth"],
		"Mouse Position X": ["mouse", "x"],
		"Mouse Position Y": ["mouse", "y"],
		"Mouse Pressed": ["mouse", "pressed"],
		"Screen Width": ["mouse", "width"],
		"Screen Height": ["mouse", "height"],
		"Hit Position X": ["raycast", "x"],
		"Hit Position Y": ["raycast", "y"],
		"Hit Position Z": ["raycast", "z"],
		"Hit Object Position X": ["raycast", "objX"],
		"Hit Object Position Y": ["raycast", "objY"],
		"Hit Object Position Z": ["raycast", "objZ"]
	}, e.is = function(e) {
		return e.type === "VariableChange";
	}, e.defaultData = function() {
		return {
			disabled: !1,
			type: "VariableChange",
			name: "",
			actions: new g(),
			variableId: "",
			objectId: null,
			property: "Position X"
		};
	};
})(Qr ||= {}), ((e) => {
	e.is = function(e) {
		return e.type === "API";
	}, e.defaultData = function() {
		return {
			disabled: !1,
			type: "API",
			name: "",
			successActions: new g(),
			errorActions: new g(),
			userAPIId: ""
		};
	};
})($r ||= {}), ((e) => {
	e.is = function(e) {
		return e.type === "WEBHOOK";
	}, e.defaultData = function() {
		return {
			disabled: !1,
			type: "WEBHOOK",
			name: "",
			actions: new g(),
			userWebhookId: ""
		};
	};
})(ei ||= {}), ((e) => {
	e.is = function(e) {
		return e.type === "AIAssistantListener";
	}, e.defaultData = function() {
		return {
			disabled: !1,
			type: "AIAssistantListener",
			name: "",
			actions: new g(),
			analysis: "average",
			analysisRange: [0, 71],
			analysisSingle: 0
		};
	};
})(ti ||= {}), ((e) => {
	e.is = function(e) {
		return e.type === "AIAssistantTrigger";
	}, e.defaultData = function() {
		return {
			disabled: !1,
			description: "",
			name: "",
			type: "AIAssistantTrigger",
			actions: new g()
		};
	};
})(ni ||= {}), (ri ||= {}).list = [
	"idle",
	"move",
	"jump",
	"run"
], ((e) => {
	e.defaultColliderData = {
		type: "capsule",
		height: 200,
		radius: 50,
		position: [
			0,
			0,
			0
		],
		rotation: [
			0,
			0,
			0
		]
	}, e.defaultDataThirdPerson = {
		moveMode: "walk",
		forwardDirection: "+z",
		speedTranslate: 1e3,
		speedRotate: 100,
		runMultiplier: 2,
		rotationMode: "normal",
		rotBy: "keys",
		rotByTouch: "drag",
		delayPos: [.3, .3],
		delayRot: [.3, .3],
		keyAssignments: [
			["moveNegZ", "W"],
			["moveNegX", "A"],
			["movePosZ", "S"],
			["movePosX", "D"],
			["rotPosX", "▲"],
			["rotPosY", "◀"],
			["rotNegX", "▼"],
			["rotNegY", "▶"],
			["jump", "Space"],
			["run", "⇧"],
			["none", "Ctrl"]
		],
		touchControl: !0,
		joystickPosLoc: 5,
		joystickRotLoc: 11,
		jumpTouchButtonLoc: 9,
		collider: e.defaultColliderData,
		colliderHelperVisible: !0,
		collisionEnabled: !0,
		jumpPower: 100,
		resetYPosition: 3e3,
		alignToGround: !1,
		autoOrientMove: !0,
		orientWith: "camera",
		orientMode: "radial",
		delayPosCamera: .3,
		delayRotCamera: .3,
		camera: "",
		cameraXAxis: "Limit",
		cameraYAxis: "Free",
		cameraRotXLimits: [0, Math.PI / 2],
		cameraRotYLimits: [-Math.PI / 2, Math.PI / 2],
		gameActions: {
			idle: new g(),
			move: new g(),
			jump: new g(),
			run: new g()
		},
		navmesh: {
			enabled: !1,
			ch: 6,
			cs: 6,
			walkableClimb: 5,
			walkableHeight: 1,
			walkableRadius: 0,
			zones: "all",
			objects: [],
			helperVisible: !0,
			destinationHelperRadius: 0,
			destinationHelperColor: R.fromHexAndA(3728051, 1)
		}
	};
})(ii ||= {});
var vi = 180 / Math.PI;
function yi(e) {
	e.rotation = e.rotation.slice(0, 3).map((e) => e * vi);
}
function bi(e) {
	yi(e), e.type === "Page" && yi(e.camera), e.states?.forEach((e) => {
		e.rotation === void 0 || e.rotation === null || (e.rotation = e.rotation.slice(0, 3).map((e) => e * vi));
	});
	let t = e.geometry;
	t && t.type === "SphereGeometry" && (t.thetaLength = (t.thetaLength ?? 180) * vi), t && t.type === "TorusGeometry" && (t.arc *= vi), t && t.type === "PathGeometry" && (t.extrusion.angle *= vi, t.extrusion.twist *= vi), e.type === "Mesh" && e.geometry.type === "TextGeometry" && (e.geometry.text = { textValue: e.geometry.text }), Array.isArray(b(e.events)) && e.events?.forEach((e) => {
		(e.type === "MouseDown" || e.type === "MouseUp" || e.type === "MousePress" || e.type === "KeyDown" || e.type === "KeyUp" || e.type === "KeyPress" || e.type === "Collision" || e.type === "Trigger") && (e.runMode = e.toggle ? "Toggle" : "Repeat");
	});
}
function xi(e, t) {
	t(e.data);
	for (let n of e.children) xi(n, t);
}
function Si(e) {
	let t = e.schema ?? 104;
	t !== 131 && (t < 105 && (xi(e.asset, bi), e.schema = 105), t < 118 && (xi(e.asset, Ei), e.schema = 118), t < 121 && (xi(e.asset, Fi), e.schema = 121), t < 130 && (xi(e.asset, Ti), e.schema = 130));
}
function Ci(e, t) {
	$(e, t), Q(e, t), Object.values(e.shared.lib.materials).forEach((e) => t(e.asset));
}
function wi(e) {
	e.layers === void 0 && Object.assign(e, W.defaultTwoLayerData("phong"));
}
function Ti(e) {
	"materials" in e ? e.materials.forEach((e) => {
		e !== void 0 && typeof e != "string" && wi(e);
	}) : "material" in e && e.material !== void 0 && typeof e.material != "string" && wi(e.material);
}
function Ei(e) {
	e.timelineAnimations = s({}, m.prototype);
}
function Di(e) {
	let t = [];
	return e ? (e.forEach((e, n) => {
		let { path: r, keyframes: i } = e.data, a = r[0] === "material" ? e.id : void 0;
		i?.length ? i.forEach(({ id: e, data: i }) => {
			t.push({
				id: e,
				data: {
					...i,
					path: r,
					layerId: a,
					index: n
				}
			});
		}) : t.push(Ar.placeholderKeyframe(e.id, r, {
			layerId: a,
			index: n
		}));
	}), t.sort((e, t) => e.data.time - t.data.time), new g(...t.map((e, t) => ({
		...e,
		fi: t
	})))) : new g();
}
var Oi = [
	"position",
	"rotation",
	"scale",
	"shape size"
];
function ki(e) {
	for (let { id: t, data: n } of [...e.unproxy()]) {
		let i = n.path?.[0];
		if (!i || !Oi.includes(i)) continue;
		let a = Ai(n.value);
		if (!a.length) continue;
		let o = e.data(t);
		if (!o) continue;
		let s = n.value, [c, ...l] = a;
		for (let t of l) {
			let a = r.generateUUID();
			e.insertBefore(null, [{
				id: a,
				data: {
					...n,
					id: a,
					path: [i, t],
					value: s[t],
					easing: ji(n.easing)
				}
			}]);
		}
		o.path = [i, c], o.value = s[c];
	}
}
function Ai(e) {
	return typeof e != "object" || !e ? [] : Fr.filter((t) => t in e);
}
function ji(e) {
	let t = e?.cubicControls;
	return {
		...e,
		cubicControls: {
			control1: [...t?.control1 ?? [0, 0]],
			control2: [...t?.control2 ?? [1, 1]]
		},
		...e?.springParameters ? { springParameters: { ...e.springParameters } } : {}
	};
}
function Mi(e, t) {
	return Math.abs(e[0] - t[0]) < 1e-6 && Math.abs(e[1] - t[1]) < 1e-6;
}
function Ni(e) {
	let t = function(e) {
		let t = [];
		for (let n of Ar.groupKeyframes(e)) {
			let e = new Set(n.keyframes.flatMap((e) => Ai(e.data.value))), r = e.size ? [...e].map((e) => n.keyframes.filter((t) => Ai(t.data.value).includes(e))) : [n.keyframes];
			for (let e of r) {
				let n = [...e].sort((e, t) => e.data.time - t.data.time);
				for (let e = 0; e + 1 < n.length; e++) t.push({
					left: n[e],
					right: n[e + 1]
				});
			}
		}
		return t;
	}([...e.unproxy()]), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
	for (let { left: e, right: i } of t) {
		let t = e.data.easing?.type, a = (t === void 0 ? void 0 : Ar.presetHandles(t))?.control2 ?? (t === 5 ? Mr(i.data.easing?.cubicControls?.control2, [1, 1]) : void 0);
		if (!a) continue;
		let o = n.get(i.id);
		o ? Mi(o, a) || r.add(i.id) : n.set(i.id, a);
	}
	let i = /* @__PURE__ */ new Map();
	for (let { id: t, data: n } of e.unproxy()) {
		let e = n.easing?.type, r = e === void 0 ? void 0 : Ar.presetHandles(e);
		r && i.set(t, r.control1);
	}
	for (let { left: e, right: n } of t) r.has(n.id) && i.delete(e.id);
	for (let [t, n] of i) {
		let r = e.data(t);
		!r?.easing || (r.easing.cubicControls = {
			control1: n,
			control2: Mr(r.easing.cubicControls?.control2, [1, 1])
		}, r.easing.type = 5);
	}
	for (let { left: r, right: a } of t) {
		if (!i.has(r.id)) continue;
		let t = e.data(a.id), o = n.get(a.id);
		!t?.easing || !o || (t.easing.cubicControls = {
			control1: Mr(t.easing.cubicControls?.control1, [0, 0]),
			control2: o
		});
	}
}
function Pi(e, t) {
	e.scene.objects.traverse((e, n) => {
		let r = n;
		if (r.type === "Page" && r.timelines) for (let e of Object.values(r.timelines)) for (let n of Object.values(e.objectTimelines ?? {})) t(n.keyframes);
	});
}
function Fi(e) {
	e.pivot = [
		0,
		0,
		0
	], e.pivotRotation = [
		0,
		0,
		0
	];
}
function Ii(e) {
	let t = e.schema ?? 0;
	if (t !== 131) {
		if (t > 131) return void console.error(`This scene was created with a newer version of Spline (file format ${t}, this runtime reads 131). Update @splinetool/runtime to the latest version to load it correctly.`);
		console.warn("updating from ", t, "to ", 131), function(e, t) {
			if (t < 1 && ($(e, si), Q(e, si), e.schema = 1), t < 2 && (function(e) {
				Object.assign(e.scene.publish, { orbitControls: {
					...mr.defaultData,
					...b(e.scene.publish.orbitControls)
				} });
			}(e), e.schema = 2), t < 3 && (function(e) {
				function t(e) {
					if (e.layers) {
						for (let t of Object.values(e.layers)) if (t) {
							for (let [e, n] of Object.entries(t)) if ((bn.includes(e) || typeof n == "boolean") && delete t[e], e === "texture") for (let [e, t] of Object.entries(n)) (xn.includes(e) || typeof t == "boolean") && delete n[e];
						}
					}
				}
				e.scene.objects.traverse((e, n) => {
					n.states.forEach((e) => {
						let n = e;
						n.material ? t(n.material) : n.materials && n.materials.forEach((e) => {
							t(e);
						});
					});
				});
			}(e), e.schema = 3), t < 4 && (function(e) {
				e.scene.publish.withBackground = !0;
			}(e), e.schema = 4), t < 5 && (function(e) {
				e.scene.publish.settings.web = {
					compress: !0,
					preload: !0,
					preset: 1,
					logo: !0,
					hint: !1
				};
			}(e), e.schema = 5), t < 6 && (function(e) {
				e.scene.objects.traverse((e, t) => {
					let n = t.cloner;
					n && (n.radial.scale = n.radial.scale.map((e) => e + 1), n.linear.scale = n.linear.scale.map((e) => e + 1));
				});
			}(e), e.schema = 6), t < 7 && (function(e) {
				e.scene.objects.traverse((e, t) => {
					let n = t.geometry;
					n && (n.type === "DodecahedronGeometry" || n.type === "IcosahedronGeometry") && (n.detail = Math.round(n.detail));
				});
			}(e), e.schema = 7), t < 8 && (e.schema = 8), t < 9 && (ui(e), e.schema = 9), t < 10 && (function(e) {
				e.scene.objects.traverse((e, t) => {
					t.type === "Mesh" && (t.geometry.type === "BooleanGeometry" || t.geometry.type === "SubdivGeometry") && (t.geometry.phongAngle = 35);
				});
			}(e), e.schema = 10), t < 11 && (function(e) {
				e.scene.environment.ambientLight.softShadows = !1, e.scene.environment.ambientLight.softShadowQuality = "low", e.scene.objects.traverse((e, t) => {
					(t.type === "DirectionalLight" || t.type === "SpotLight") && (t.shadowResolution = 1024, t.shadowRadius = 1, t.depth = 1e5);
				}), e.shared.penumbraSize = [
					,
					,
					,
					,
					,
				].fill(.5);
			}(e), e.schema = 11), t < 12 && (ui(e), e.schema = 12), t < 13 && (function(e) {
				e.shared.audios = s({}, m.prototype);
			}(e), e.schema = 13), t < 14 && (function(e) {
				let t = e.shared.materials;
				Object.entries(t).forEach(([e, n]) => {
					if (!n.layers) {
						let n = {
							name: "Untitled Material",
							layers: [{
								fi: 0,
								data: {
									type: "light",
									category: "phong",
									alpha: .6,
									visible: !0,
									mode: 0,
									specular: {
										r: .2,
										g: .2,
										b: .2
									},
									shininess: 5
								},
								id: "layer1"
							}, {
								fi: 1,
								data: {
									type: "color",
									alpha: 1,
									visible: !0,
									mode: 0,
									color: {
										r: .2823529411764706,
										g: .2823529411764706,
										b: .30196078431372547
									}
								},
								id: "layer2"
							}]
						};
						Object.assign(t, { [e]: n });
					}
				});
			}(e), e.schema = 14), t < 15 && (function(e) {
				Object.entries(b(e.shared.images)).filter((e) => !1 === e[1].asset).map((e) => e[0]).forEach((t) => {
					delete e.shared.images[t];
				}), Object.entries(b(e.shared.audios)).filter((e) => !1 === e[1].asset).map((e) => e[0]).forEach((t) => {
					delete e.shared.audios[t];
				});
			}(e), e.schema = 15), t < 16 && (function(e) {
				e.scene.publish.settings.web.preload = !1;
			}(e), e.schema = 16), t < 17 && ($(e, di), Q(e, di), e.schema = 17), t < 18 && ($(e, ci), Q(e, ci), e.schema = 18), t < 19 && (function(e) {
				Object.assign(e.scene.publish.settings, { video: {
					...Y.defaultData.settings.video,
					...b(e.scene.publish.settings.video)
				} });
			}(e), e.schema = 19), t < 20 && (function(e) {
				e.shared.fonts = s({}, m.prototype);
			}(e), function(e) {
				let t = [];
				e.scene.objects.traverse((n, r) => {
					let i = r;
					if (i.type === "TextFrame") {
						let r = W.defaultTwoLayerData("phong"), a = typeof i.color == "string" ? e.shared.colors[i.color] : i.color;
						r.layers[1].data.color = {
							r: a.r,
							g: a.g,
							b: a.b
						}, r.layers[1].data.alpha = i.alpha;
						let o = function(e) {
							return e.replace(".typeface", "").replace(/optimer/gi, "open sans").replace("space_mono", "space mono").replace(/alma_mono/gi, "varela round").replace(/droid_sans_mono/gi, "noto sans mono").replace(/droid_sans|gentilis|gnomon_(simple|foreground)|helvetiker/gi, "roboto").replace(/droid_serif/gi, "roboto slab").replace("_sans", " sans").replace("crimson_text", "crimson text").replace("medium_medium", "medium").replace("fatface_fatface", "fatface").replace("100hairline", "thin").replace("200thin", "extralight").replace("300light", "light").replace("500medium", "medium").replace("600semi", "semibold").replace("800heavy", "extrabold").replace("900black", "black").replace(/bodoni_(11|16|24|36|48|72|96)([^_])/gi, "bodoni_$1_$2").replace(/bodoni_(11|16|24|36|48|72|96)/gi, "bodoni moda").replace(/(thin|hairline)(_regular)?/gi, "100").replace(/(extra|ultra)light(_regular)?/gi, "200").replace(/light(_regular)?/gi, "300").replace(/_book|_normal|_roman/gi, "_regular").replace(/medium(_regular)?/gi, "500").replace(/(semi|demi)bold(_regular)?/gi, "600").replace(/(extra|ultra)bold(_regular)?/gi, "800").replace(/bold(_regular)?/gi, "700").replace(/(black|heavy|fatface)(_regular)?/gi, "900").replace(/([1-9]00)_italic/gi, "$1italic").replace(/regularitalic/gi, "italic").replace(/regularitalic/gi, "italic").split(" ").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ");
						}(i.font);
						e.shared.fonts[o] === void 0 && (e.shared.fonts[o] = { name: o });
						let s = {
							name: i.name,
							...q.defaultData,
							...J.defaultData,
							flatShading: !1,
							wireframe: !1,
							geometry: {
								...G.defaultData("TextGeometry"),
								width: i.width,
								height: i.height,
								font: o,
								depth: 0,
								horizontalAlign: i.horizontalAlign,
								verticalAlign: i.verticalAlign,
								fontSize: 1.40625 * i.fontSize,
								lineHeight: i.lineHeight / 1.40625,
								letterSpacing: i.letterSpacing - 1,
								text: i.text,
								textTransform: i.textTransform,
								extrudeBevelSize: 0,
								extrudeBevelSegments: 1
							},
							material: r,
							states: b(i.states),
							events: b(i.events),
							visible: i.visible,
							raycastLock: i.raycastLock,
							position: i.position,
							rotation: i.rotation,
							scale: i.scale,
							hiddenMatrix: i.hiddenMatrix
						}, c = b(e.scene.objects).parent(n);
						e.scene.objects.insertAfter(c ?? null, n, [{
							id: n + "new",
							data: s,
							children: []
						}]), t.push(n);
					}
				}), t.forEach((t) => {
					e.scene.objects.delete(t);
				});
			}(e), e.schema = 20), t < 21 && (function(e) {
				let t = {
					0: "MouseDown",
					1: "MouseUp",
					2: "MouseHover",
					5: "KeyDown",
					6: "KeyUp",
					7: "Start",
					9: "LookAt",
					10: "Follow",
					11: "Scroll",
					12: "Audio",
					13: "GameControl"
				};
				e.scene.objects.traverse((e, n) => {
					n.events.forEach((e) => {
						if (t[Number(e.type)]) {
							if (Object.assign(e, { type: t[Number(e.type)] }), e.type === "Audio" && "audioEvent" in e && (Object.assign(e, { playAudio: e.audioEvent }), delete e.audioEvent), e.type === "GameControl") Object.assign(e, { gameActions: {
								idle: new g(),
								move: new g(),
								jump: new g()
							} });
							else {
								let t = new g();
								Object.assign(e, { actions: t }), (e.type === "MouseDown" || e.type === "MouseUp" || e.type === "KeyDown" || e.type === "KeyUp") && "url" in e && t.push({
									fi: 0,
									id: r.generateUUID(),
									data: {
										type: "Link",
										url: e.url,
										delay: 0
									}
								}), "targets" in e && (e.targets.forEach((e, n, i) => {
									let a = {
										easing: e.easing,
										duration: e.duration
									};
									e.easing === 6 ? Object.assign(a, oi(e, "mass", "stiffness", "damping", "velocity")) : e.easing === 5 && Object.assign(a, {
										control1: { ...e.control1 },
										control2: { ...e.control2 }
									});
									let o = {
										repeat: e.repeat ? -1 : 0,
										delay: e.delay,
										delayDirection: e.delayDirection,
										direction: e.cycle && e.rewind ? "pingpong-rewind" : e.cycle ? "pingpong" : "normal"
									}, s = {
										state: e.state,
										...o,
										...a
									}, c = {
										allowSlerp: !0,
										type: "Transition",
										object: e.object,
										repeat: 0,
										delay: 0,
										delayDirection: void 0,
										direction: "normal",
										tweens: new g({
											fi: 0,
											id: r.generateUUID(),
											data: {
												state: void 0,
												repeat: 0,
												delay: 0,
												delayDirection: void 0,
												direction: "normal",
												duration: 0,
												easing: 4
											}
										}, {
											fi: 1,
											id: r.generateUUID(),
											data: s
										})
									};
									t.push({
										fi: i,
										id: n,
										data: c
									});
								}), delete e.targets);
							}
						}
					});
				});
			}(e), function(e) {
				e.scene.objects.traverse((e, t) => {
					function n(e, n) {
						let i = new g(), a = [];
						if (t.events.forEach((e, t, r) => {
							if (e.type === "Audio" && e.trigger === n) {
								let n;
								a.push(t), e.interaction === "play" ? n = {
									...oi(e, "interaction", "audio", "delay", "volume", "loop"),
									triggerAfter: "after" in e ? e.after : void 0,
									toggle: "after" in e ? e.toggle : void 0,
									type: "Audio"
								} : (e.interaction === "pause" || e.interaction === "stop") && (n = {
									...oi(e, "interaction", "delay", "object", "playAudio"),
									type: "Audio"
								}), n && i.push({
									fi: r,
									id: t,
									data: n
								});
							}
						}), a.forEach((e) => t.events.delete(e)), i.length) {
							let n = t.events.find((t) => t.type === e)?.data;
							n ? "actions" in n && n.actions.insertBefore(null, i) : t.events.insertBefore(null, [{
								id: r.generateUUID(),
								data: {
									type: e,
									actions: i
								}
							}]);
						}
					}
					n("Start", "start"), n("MouseDown", "mouseDown"), n("MouseUp", "mouseUp"), n("KeyDown", "keyDown"), n("KeyUp", "keyUp");
				});
			}(e), e.schema = 21), t < 22 && (mi(e), e.schema = 22), t < 23 && (function(e) {
				e.scene.objects.traverse((e, t) => {
					t.type === "Mesh" && t.geometry.type === "SubdivGeometry" && (t.geometry.scaleBaked || (t.geometry.scaleBaked = [
						1,
						1,
						1
					]));
				});
			}(e), e.schema = 23), t < 24 && (function(e) {
				e.scene.objects.traverse((e, t) => {
					(t.type === "Empty" || t.type === "Mesh") && t.cloner && !t.cloner.randomnessObject && !t.cloner.toObject && !t.cloner.randomness && (t.cloner = {
						...t.cloner,
						toObject: {
							object: "",
							spreadType: "random",
							scale: [
								0,
								0,
								0
							],
							rotation: [
								0,
								0,
								0
							],
							position: [
								0,
								0,
								0
							],
							axis: "x",
							seed: 0,
							count: 99,
							align: "normal"
						},
						randomness: !1,
						randomnessObject: {
							strength: 100,
							scale: [
								0,
								0,
								0
							],
							rotation: [
								0,
								0,
								0
							],
							position: [
								0,
								0,
								0
							],
							movement: 1,
							seed: 0,
							freqScale: 10,
							noiseType: "perlin"
						}
					});
				});
			}(e), e.schema = 24), (t < 25 || e.shared.videos === void 0) && (function(e) {
				e.shared.videos = s({}, m.prototype);
			}(e), t < 25 && (e.schema = 25)), t < 26 && (function(e) {
				e.scene.objects.traverse((t, n) => {
					let r = e.scene.objects.unproxy().parent(t);
					if (r) {
						let t = b(e.scene.objects.data(r));
						t && t.type === "Mesh" && t.geometry.type === "BooleanGeometry" && n.type === "Mesh" && (n.visible = !0 !== b(n).booleanExclude);
					}
				});
			}(e), e.schema = 26), t < 27 && (function(e) {
				e.scene.objects.traverse((e, t) => {
					if (t.type === "Mesh") {
						let e = t;
						t.geometry.type === "NonParametricGeometry" ? e.material !== void 0 && delete e.material : e.materials !== void 0 && delete e.materials;
					}
				});
			}(e), e.schema = 27), t < 28 && (mi(e), e.schema = 28), t < 29 && (function(e) {
				function t(e) {
					Object.setPrototypeOf(e, v.prototype), e.texture && Object.setPrototypeOf(e.texture, v.prototype);
				}
				function n(e) {
					Object.setPrototypeOf(e, v.prototype);
					for (let n in e) t(e[n]);
				}
				e.scene.objects.traverse((e, t) => {
					t.states.forEach((e) => {
						let t = e;
						if (t.material) {
							let e = b(t.material).layers;
							n(e), t.material.layers = e;
						}
						if (t.materials) for (let e = 0; e < t.materials.length; e++) {
							let r = t.materials[e], i = b(r).layers;
							n(i), r.layers = i;
						}
					});
				});
			}(e), e.schema = 29), t < 30 && (function(e) {
				e.scene.objects.traverse((e, t) => {
					t.type === "Mesh" && t.geometry.type === "NonParametricGeometry" && !("material" in t) && !("materials" in t) && (t.material = W.defaultTwoLayerData("phong"));
				});
			}(e), e.schema = 30), t < 31 && (function(e) {
				e.scene.publish.orbitControls.autoZoom === void 0 && (e.scene.publish.orbitControls.autoZoom = !1), e.scene.objects.traverse((e, t) => {
					(t.type === "OrthographicCamera" || t.type === "PerspectiveCamera") && (t.orthographic.autoZoom === void 0 && (t.orthographic.autoZoom = !1), t.orthographic.autoZoomFrustumSize === void 0 && (t.orthographic.autoZoomFrustumSize = 790));
				});
			}(e), e.schema = 31), t < 33 && (function(e) {
				e.scene.objects.traverse((e, t) => {
					t.pathSnapping === void 0 && (t.pathSnapping = {
						pathId: null,
						slide: 0,
						offset: 0,
						orientation: "tangential"
					}), t.pathSnapping.offset === void 0 && (t.pathSnapping.offset = 0);
				});
			}(e), e.schema = 33), t < 34 && (function(e) {
				e.scene.publish.mouseEventTarget === void 0 && (e.scene.publish.mouseEventTarget = "canvas"), e.scene.publish.settings.web.hint === void 0 && (e.scene.publish.settings.web.hint = !1);
			}(e), e.schema = 34), t < 35 && (function(e) {
				let { video: t } = e.scene.publish.settings;
				t.format === "gif" && t.fps > 48 && (t.fps = 15);
			}(e), e.schema = 35), t < 36 && (function(e) {
				e.scene.objects.traverse((e, t) => {
					t.events.forEach((e) => {
						e.type === "GameControl" && (e.resetYPosition = Math.abs(e.resetYPosition - t.position[1]));
					});
				});
			}(e), e.schema = 36), t < 37 && (function(e) {
				let t = e.scene.environment.usePhysics;
				e.scene.objects.traverse((e, n) => {
					n.collision = t && n.physics === null ? !1 : "visibility";
				});
			}(e), e.schema = 37), t < 38 && ($(e, fi), Q(e, fi), e.schema = 38), t < 39 && (function(e) {
				e.scene.objects.traverse((e, t) => {
					t.events.forEach((e) => {
						e.type === "GameControl" && (e.navmesh = ii.defaultDataThirdPerson.navmesh);
					});
				});
			}(e), e.schema = 39), t < 40 && (function(e) {
				e.scene.styles || (e.scene.styles = _r.defaultData());
			}(e), e.schema = 40), t < 41 && (function(e) {
				e.scene.environment.ambientLight.occlusion === void 0 && (e.scene.environment.ambientLight.occlusion = !1), e.scene.environment.ambientLight.aoFullRes === void 0 && (e.scene.environment.ambientLight.aoFullRes = !1), e.scene.environment.ambientLight.radius === void 0 && (e.scene.environment.ambientLight.radius = 256), e.scene.environment.ambientLight.bias === void 0 && (e.scene.environment.ambientLight.bias = .5), e.scene.environment.ambientLight.aoColor === void 0 && (e.scene.environment.ambientLight.aoColor = {
					r: .19607843137254902,
					g: .19607843137254902,
					b: .19607843137254902
				}), $(e, hi), Q(e, hi);
			}(e), e.schema = 41), t < 42 && (function(e) {
				e.scene.objects.traverse((e, t) => {
					t.events.forEach((e) => {
						e.type === "GameControl" && Object.assign(e.gameActions, { run: new g() });
					});
				});
			}(e), e.schema = 42), t < 43 && (function(e) {
				e.scene.objects.traverse((e, t) => {
					t.events.forEach((e) => {
						e.type === "GameControl" && (e.keyAssignments = [
							...e.keyAssignments,
							["run", "⇧"],
							["none", "Ctrl"]
						]);
					});
				});
			}(e), e.schema = 43), t < 99) {
				$(e, gi), Q(e, gi), e.scene.publish.playCamera === null && (e.scene.publish.playCamera = "personal camera");
				let t = b(e.scene.objects), n = e.scene.objects;
				e.scene.publish.playPage = Vt, n.insertBefore(null, null, [{
					id: Vt,
					data: {
						...dr.defaultData,
						backgroundColor: e.scene.backgroundColor,
						fog: e.scene.fog,
						postprocessing: e.scene.postprocessing,
						ao: oi(e.scene.environment.ambientLight, "occlusion", "aoFullRes", "radius", "bias", "aoColor"),
						publish: {
							playCamera: e.scene.publish.playCamera,
							gameControlObject: e.scene.publish.gameControlObject
						},
						shadow: oi(e.scene.environment.ambientLight, "softShadowQuality"),
						globalPhysics: {
							...Un.defaultData,
							...oi(e.scene.environment, "usePhysics", "gravity")
						},
						camera: b(e.scene.ownerCamera) ?? dr.defaultData.camera,
						name: "Scene"
					},
					children: []
				}]);
				for (let e of t) e.id !== yr.TRASH_CAN_ID && n.move(Vt, e.fi, e.id);
				let r = 0, i = 0;
				e.shared.penumbraSize && e.scene.objects.traverse((t, n) => {
					n.type === "DirectionalLight" ? (n.penumbraSize = e.shared.penumbraSize[Math.min(r, 2)], r += 1) : n.type === "SpotLight" && (n.penumbraSize = e.shared.penumbraSize[3 + Math.min(i, 1)], i += 1), (n.physics === void 0 || n.physics === null) && n.type !== "Instance" && (n.physics = {}, Object.assign(n.physics, Qt.defaultData)), n.physics !== void 0 && n.physics !== null && (n.physics.enabled = n.collision ?? "visibility", delete n.collision);
				}), e.schema = 99;
			}
		}(e, t), t < 100 && (e.scene.publish.joystickSizeAndXYOffset === void 0 && (e.scene.publish.joystickSizeAndXYOffset = Y.defaultData.joystickSizeAndXYOffset), e.schema = 100), t < 101 && ($(e, _i), Q(e, _i), e.schema = 101), t < 102 && (function(e) {
			e.scene.objects.traverse((e, t) => {
				let n = t.geometry;
				n && n.type === "PathGeometry" && (n.extrusion.capType = "flat", n.extrusion.bevel = 50, n.extrusion.bevelSides = 6, n.extrusion.shape.type === "Custom" && (n.extrusion.shape.shapeQuality = "low"));
			});
		}(e), e.schema = 102), t < 104 && (e.shared.catelogs = new m(), e.shared.lib = X.defaultData(), e.schema = 104), t < 105 && (function(e) {
			e.shared.variables = s({}, m.prototype);
		}(e), e.scene.objects.traverse((e, t) => {
			bi(t);
		}), e.schema = 105);
		for (let t of Object.values(e.shared.lib.components)) Si(t);
		t < 106 && (function(e) {
			let t = b(e.shared.variables);
			e.shared.variables = s(Object.entries(t ?? {}).map(([e, t], n) => ({
				fi: n,
				id: e,
				data: t
			})), g.prototype);
		}(e), e.schema = 106), t < 107 && (e.shared.lib.variables = X.defaultData().variables, e.schema = 107), t < 109 && (function(e) {
			e.shared.particles = s({}, m.prototype), e.shared.lib && (e.shared.lib.particles = X.defaultData().particles);
		}(e), e.schema = 109), t < 110 && (function(e) {
			e.scene.objects.traverse((e, t) => {
				t.type === "Particle" && typeof t.renderMaterial.size == "number" && Object.assign(t.renderMaterial, { size: [t.renderMaterial.size, t.renderMaterial.size] });
			});
		}(e), e.schema = 110), t < 111 && (e.scene.objects.traverse((e, t) => {
			(function(e) {
				Array.isArray(b(e.events)) && e.events?.forEach((e) => {
					"disabled" in e || (e.disabled = !1), (e.type === "MouseDown" || e.type === "MouseUp" || e.type === "MousePress") && (e.mode = e.mode || "Object");
				});
			})(t);
		}), e.schema = 111), t < 112 && (function(e) {
			e.scene.objects.traverse((e, t) => {
				t.type === "Page" && (t.postprocessing.depthOfField.focusDistance = 100, t.postprocessing.depthOfField.focalLength = 20, t.postprocessing.depthOfField.bokehScale = 5);
			});
		}(e), e.schema = 112), t < 113 && (function(e) {
			e.scene.objects.traverse((e, t) => {
				!1 !== Array.isArray(b(t.events)) && t.events?.forEach((e) => {
					let t = e.runMode;
					e.type === "MouseDown" || e.type === "MouseUp" || e.type === "KeyDown" || e.type === "KeyUp" || e.type === "Collision" || e.type === "Trigger" ? e.actions?.forEach((e) => {
						e.type === "Transition" && (e.runMode = t ?? "Repeat"), (e.type === "Animation" || e.type === "SwitchCamera") && (e.runMode = t === "Toggle" ? "Toggle" : "Normal");
					}) : e.type === "MouseHover" || e.type === "MousePress" || e.type === "KeyPress" ? e.actions?.forEach((e) => {
						(e.type === "Transition" || e.type === "Animation" || e.type === "SwitchCamera") && (e.runMode = "Toggle");
					}) : e.type === "GameControl" ? (delete e.actions, Object.keys(e.gameActions).forEach((t) => {
						e.gameActions[t]?.forEach((e) => {
							e.type === "Transition" && (e.runMode = "Repeat"), e.type === "Animation" && (e.runMode = "Normal");
						});
					})) : e.type === "DragDrop" ? (delete e.actions, e.dragDropActions?.drag?.forEach((e) => {
						(e.type === "Transition" || e.type === "Animation" || e.type === "SwitchCamera") && (e.runMode = "Toggle");
					}), e.dragDropActions?.drop?.forEach((e) => {
						(e.type === "Transition" || e.type === "Animation" || e.type === "SwitchCamera") && (e.runMode = "Toggle");
					})) : e.type === "Resize" ? (delete e.actions, e.breakpoints?.forEach((e) => {
						e.actions?.forEach((e) => {
							(e.type === "Transition" || e.type === "Animation" || e.type === "SwitchCamera") && (e.runMode = "Toggle");
						});
					})) : e.type === "Start" ? e.actions?.forEach((e) => {
						e.type === "Transition" && (e.runMode = "Once"), (e.type === "Animation" || e.type === "SwitchCamera") && (e.runMode = "Normal");
					}) : e.type === "VariableChange" || e.type === "Scroll" ? e.actions?.forEach((e) => {
						e.type === "Transition" && (e.runMode = "Repeat"), (e.type === "Animation" || e.type === "SwitchCamera") && (e.runMode = "Normal");
					}) : e.type === "Conditional" && (delete e.actions, e.inActions?.forEach((e) => {
						e.type === "Transition" && (e.runMode = "Repeat"), (e.type === "Animation" || e.type === "SwitchCamera") && (e.runMode = "Normal");
					}), e.outActions?.forEach((e) => {
						e.type === "Transition" && (e.runMode = "Repeat"), (e.type === "Animation" || e.type === "SwitchCamera") && (e.runMode = "Normal");
					}));
				});
			});
		}(e), e.schema = 113), t < 114 && (e.scene.publish.settings.web.imageQuality === void 0 && (e.scene.publish.settings.web.imageQuality = 70), e.schema = 114), t < 115 && (function(e) {
			e.shared.userAPIs = s({}, m.prototype), e.shared.userWebhooks = s({}, m.prototype), e.shared.lib && (e.shared.lib.userAPIs = X.defaultData().userAPIs, e.shared.lib.userWebhooks = X.defaultData().userWebhooks);
		}(e), e.schema = 115), t < 116 && (function(e) {
			e.scene.publish.settings.videoStatic === void 0 && (e.scene.publish.settings.videoStatic = Y.defaultData.settings.videoStatic);
		}(e), e.schema = 116), t < 117 && (e.scene.publish.settings.web.pixelRatioMobile === void 0 && (e.scene.publish.settings.web.pixelRatioMobile = 0), e.scene.publish.settings.web.pixelRatioDesktop === void 0 && (e.scene.publish.settings.web.pixelRatioDesktop = 0), e.schema = 117), t < 118 && (e.shared.timelineAnimations = s({}, m.prototype), e.scene.objects.traverse((e, t) => {
			Ei(t);
		}), e.schema = 118), t < 119 && (e.scene.publish.settings.videoStatic.format = Dr.defaultData.scene.publish.settings.videoStatic.format, e.scene.publish.settings.videoStatic.imageFormat = Dr.defaultData.scene.publish.settings.videoStatic.imageFormat, e.schema = 119), t < 120 && (e.scene.publish.settings.image.colorSpace = "display-p3", e.scene.publish.settings.videoStatic.colorSpace = "display-p3", e.schema = 120), t < 121 && (e.scene.objects.traverse((e, t) => {
			Fi(t), t.type === "Page" && t.camera !== void 0 && Fi(t.camera);
		}), e.schema = 121), t < 122 && (delete e.scene.publish.settings.video, e.scene.publish.orbitControls.rotationSpeed = Dr.defaultData.scene.publish.orbitControls.rotationSpeed, e.schema = 122), t < 123 && (e.scene.objects.traverse((e, t) => {
			t.type === "Page" && t.sky === void 0 && (t.sky = K.defaultData);
		}), e.schema = 123), t < 124 && (t >= 123 && e.scene.objects.traverse((e, t) => {
			let n = t.sky;
			t.type === "Page" && n !== void 0 && (typeof n.exposure == "number" && (n.exposure = Math.round(n.exposure / 5e-4 * 1e4) / 1e4), n.lighting === void 0 && (n.lighting = K.defaultData.lighting));
		}), e.schema = 124), t < 125 && (e.scene.objects.traverse((e, t) => {
			let n = t.sky;
			t.type === "Page" && n !== void 0 && n.lightingIntensity === void 0 && (n.lightingIntensity = K.defaultData.lightingIntensity);
		}), e.schema = 125), t < 126 && (e.scene.objects.traverse((e, t) => {
			let n = t.sky;
			t.type === "Page" && n !== void 0 && (n.mode === void 0 && (n.mode = "physical"), n.hdri === void 0 ? n.hdri = { ...K.defaultData.hdri } : (n.hdri.blur === void 0 && (n.hdri.blur = K.defaultData.hdri.blur), Array.isArray(n.hdri.rotation) && (n.hdri.rotation = n.hdri.rotation[1] ?? 0)));
		}), e.schema = 126), t < 127 && (e.scene.objects.traverse((e, t) => {
			let n = t.sky;
			t.type === "Page" && n?.hdri !== void 0 && n.hdri.showBackground === void 0 && (n.hdri.showBackground = !0);
		}), e.schema = 127), t < 128 && (e.scene.objects.traverse((e, t) => {
			let n = t.sky;
			t.type === "Page" && n !== void 0 && n.lightingQuality === void 0 && (n.lightingQuality = "full");
		}), e.schema = 128), t < 129 && (e.scene.objects.traverse((e, t) => {
			if (t.type === "Page") {
				t.camera === void 0 && (t.camera = dr.defaultData.camera);
				let e = t.camera;
				e.far = 1e5, e.perspective ? e.perspective.near = 70 : e.perspective = {
					near: 70,
					fov: 45,
					zoom: 1
				};
			}
		}), e.schema = 129), t < 130 && (Ci(e, wi), e.schema = 130), t < 131 && (function(e) {
			e.scene.objects.traverse((e, t) => {
				let n = t.states;
				if (!n) return;
				let r = t.timelineAnimations, i = [];
				n.forEach((e, t) => {
					(e.isAnimation || r?.[t]) && i.push(t);
				}), i.forEach((e) => n.delete(e));
			});
		}(e), function(e) {
			let t = e.shared, n = t.timelineAnimations;
			if (!n) return;
			let r = e.scene.objects, i = r.unproxy().find((e) => e.data.type === "Page")?.id;
			for (let [e, t] of Object.entries(n)) {
				let n = s({}, m.prototype), a = 0, o = !!t.loop;
				for (let [e, i] of Object.entries(t.mapping ?? {})) {
					let t = r.data(e)?.timelineAnimations?.[i];
					!t || (a = Math.max(a, t.to ?? 0), o ||= !!t.loop, n[e] = {
						id: e,
						keyframes: Di(t.properties?.unproxy())
					});
				}
				let c = t.page ?? i, l = c ? r.data(c) : void 0;
				l && l.type === "Page" && ((l.timelines ??= s({}, m.prototype))[e] = {
					id: e,
					name: t.name,
					duration: a || 5,
					...o ? { loop: o } : {},
					objectTimelines: n
				});
			}
			delete t.timelineAnimations, r.traverse((e, t) => {
				delete t.timelineAnimations;
			});
		}(e), Pi(e, ki), Pi(e, Ni), e.schema = 131);
	}
}
//#endregion
export { Le as $, W as A, Wr as At, ri as B, tr as C, Z as Ct, Wt as D, zn as Dt, Rn as E, R as Et, Xn as F, o as G, y as H, Zn as I, Sn as J, I as K, Qr as L, ce as M, en as Mt, ge as N, ii as O, Cr as Ot, Gr as P, lr as Q, nr as R, Gt as S, jn as St, Bt as T, Mn as Tt, V as U, J as V, v as W, wn as X, At as Y, Mt as Z, cr as _, ur as _t, Dr as a, pr as at, he as b, h as bt, _ as c, Xt as ct, $n as d, Tn as dt, xr as et, er as f, Nt as ft, ai as g, Ot as gt, Ie as h, bn as ht, g as i, s as it, Ii as j, Yn as jt, sr as k, On as kt, Lr as l, Lt as lt, Un as m, dr as mt, Ht as n, Dn as nt, Ci as o, Ar as ot, on as p, a as pt, f as q, Mr as r, Ft as rt, Nn as s, In as st, jr as t, G as tt, Qn as u, Et as ut, Zr as v, vr as vt, Fn as w, Si as wt, Fr as x, xi as xt, q as y, Cn as yt, ln as z };
