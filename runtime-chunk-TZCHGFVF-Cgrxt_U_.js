//#region node_modules/@splinetool/runtime/build/runtime-chunk-TZCHGFVF.js
var e = /* @__PURE__ */ new Set();
function t(t) {
	e.add(t);
}
function n(t) {
	return e.has(t);
}
var r = /* @__PURE__ */ new Set();
function i(e, t) {
	let n = `${e}:${t}`;
	r.has(n) || r.add(n);
}
var a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
function s(e, t) {
	a.set(e, t);
}
function c(e) {
	return a.get(e);
}
function l(e, t) {
	o.set(e, t);
}
function u(e) {
	return o.get(e);
}
var d = /* @__PURE__ */ new Map();
function f(e, t) {
	d.set(e, t);
}
function p(e) {
	return d.get(e);
}
var m = null, h = null;
function g(e) {
	m = e, h !== null && e.setHanaUIWasmUrl(h);
}
function _(e) {
	h = e, m?.setHanaUIWasmUrl(e);
}
function v() {
	return m;
}
//#endregion
export { v as a, g as c, f as d, p as f, c as i, i as l, t as n, l as o, s as r, u as s, _ as t, n as u };
