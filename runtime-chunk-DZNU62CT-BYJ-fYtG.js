//#region node_modules/@splinetool/runtime/build/runtime-chunk-DZNU62CT.js
var e = /* @__PURE__ */ new Map();
function t(t, n) {
	e.set(t, n);
}
function n(t) {
	return e.get(t);
}
var r = class {
	constructor(e) {
		this.eventContext = e, this.domEventsNeeded = /* @__PURE__ */ new Set(), this.hasVideoAction = !1;
	}
	connect() {}
	disconnect() {}
	dispose() {
		this.disconnect(), this.eventContext = void 0;
	}
};
//#endregion
export { n, r, t };
