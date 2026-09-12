import "./runtime-chunk-NSD7DU3P-Dy531bTP.js";
import { n as e, o as t } from "./runtime-chunk-TZCHGFVF-Cgrxt_U_.js";
import "./runtime-chunk-BVVSZMXD-CNMnepSY.js";
import "./runtime-chunk-WKTS4T2Q-Btdnvt_i.js";
import { l as n } from "./runtime-chunk-HHRA6K3Y-BkevczXT.js";
import "./runtime-chunk-C6JZPJNZ-yPZlRW5T.js";
import { Q as r } from "./runtime-chunk-A4V6IMN2-BnRq9jQC.js";
//#region node_modules/@splinetool/runtime/build/runtime-vectorShapes-BCUVEHSB.js
var i = class extends r {
	get forceComputeSize() {
		return !0;
	}
	get shape() {
		return this.geometry.userData.shape;
	}
	updateEntityBoxSize(e, t) {
		let r = this.geometry.getAttribute("position");
		r === void 0 ? super.updateEntityBoxSize(e, t) : n(r, this.geometry.drawRange.start, this.geometry.drawRange.count < 1 / 0 ? this.geometry.drawRange.count : r.count, e, t);
	}
};
t("VectorGeometry", (e, t, n) => new i(e, t, n)), e("vector-shapes");
//#endregion
