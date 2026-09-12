import { b as e } from "./runtime-chunk-HHRA6K3Y-BkevczXT.js";
//#region node_modules/@splinetool/runtime/build/runtime-chunk-GR2ZC5GY.js
function t(n) {
	if (n.component) {
		let r = n.component.instances.indexOf(n);
		r >= 0 && n.component.instances.splice(r, 1);
		for (let r of n.children) e.is(r) && t(r);
	}
}
//#endregion
export { t };
