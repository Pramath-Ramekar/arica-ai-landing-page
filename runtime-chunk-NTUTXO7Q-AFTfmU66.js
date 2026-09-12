//#region node_modules/@splinetool/runtime/build/runtime-chunk-NTUTXO7Q.js
function e(e) {
	return {
		all: e ||= /* @__PURE__ */ new Map(),
		on: function(t, n) {
			var r = e.get(t);
			r ? r.push(n) : e.set(t, [n]);
		},
		off: function(t, n) {
			var r = e.get(t);
			r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []));
		},
		emit: function(t, n) {
			var r = e.get(t);
			r && r.slice().map(function(e) {
				e(n);
			}), (r = e.get("*")) && r.slice().map(function(e) {
				e(t, n);
			});
		}
	};
}
//#endregion
export { e as t };
