import { W as e } from "./runtime-chunk-BVVSZMXD-CNMnepSY.js";
import { r as t } from "./runtime-chunk-DSCGKWZ5-ag6hi1Pk.js";
import { t as n } from "./runtime-chunk-VE44RSRZ-SmjzvHjx.js";
//#region node_modules/@splinetool/runtime/build/runtime-chunk-AF23X5NO.js
var r = class extends t(e, n) {
	constructor(e, t) {
		super(), this.super_Entity(e, t), this.objectHelper.update(), this.data.type === "Empty" && (this.objectHelper.visible = !1);
	}
	updateState(e, t) {
		this.updateState_Entity(e, t), "buffer" in e && Object.keys(e).length === 1 && t.scene.reloadSplats();
	}
};
//#endregion
export { r as t };
