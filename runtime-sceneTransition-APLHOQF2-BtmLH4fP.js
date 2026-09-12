import "./runtime-chunk-NSD7DU3P-Dy531bTP.js";
import { n as e } from "./runtime-chunk-TZCHGFVF-Cgrxt_U_.js";
import "./runtime-chunk-BVVSZMXD-CNMnepSY.js";
import "./runtime-chunk-WKTS4T2Q-Btdnvt_i.js";
import "./runtime-chunk-HHRA6K3Y-BkevczXT.js";
import "./runtime-chunk-C6JZPJNZ-yPZlRW5T.js";
import "./runtime-chunk-A4V6IMN2-BnRq9jQC.js";
import "./runtime-chunk-Z4NV7FMH-g_cXy_BL.js";
import "./runtime-chunk-DSCGKWZ5-ag6hi1Pk.js";
import "./runtime-chunk-GJIYL4V5-D56wKA9c.js";
import "./runtime-chunk-UYRGNTDQ-ulwE91Cm.js";
import "./runtime-chunk-JBIPPY3K-CjIlYb5q.js";
import "./runtime-chunk-ZJCEUE6J-BC8J8XCO.js";
import { a as t, n } from "./runtime-chunk-Y5F2EZVH-Dm71pOc-.js";
import { _ as r } from "./react-spline-CbtMUAP1.js";
//#region node_modules/@splinetool/runtime/build/runtime-sceneTransition-APLHOQF2.js
var i = class {
	constructor(e, t, n, r, i) {
		this.data = e, this.page = t, this.eventManager = n, this.shared = r, this.condition = i, this.timeOutId = -1, this.scene = t.scene;
	}
	dispatch() {
		if (!1 === n(this.shared, this.condition)) return !1;
		this.data.target !== this.page.uuid && (window.clearTimeout(this.timeOutId), this.timeOutId = window.setTimeout(() => {
			this.play();
		}, 1e3 * this.data.delay));
	}
	dispose() {
		window.clearTimeout(this.timeOutId);
	}
	play() {
		if (this.scene.children.every((e) => e.uuid !== this.data.target || e.data.uiScene)) return;
		this.data.transition === "fade" && this.data.duration > 0 && this.eventManager.eventContext.renderer.renderFromSceneForSceneTransitionPass(this.scene, this.scene.activeCamera, 1e3 * this.data.duration), this.eventManager.deactivate(), this.eventManager.controlsManager.deactivate();
		let e = this.scene.activeCamera;
		this.scene.updatePage(this.data.target), this.scene.traverseVisibleEntity((e) => {
			e.type === "ParticleSystem" && (e.sleep(), e.wakeUp(), e.data.autoPlay ? e.start() : e.stop());
		}), this.scene.activePage.switchToPlayCamera(), this.scene.activeCamera.copyViewPlaneSize(e), r(this.scene.activePage, this.shared), this.eventManager.activate(), this.eventManager.controlsManager.activate(this.eventManager);
	}
};
t("SceneTransition", ({ data: e, page: t, eventManager: n, shared: r, actionCondition: a }) => new i(e, t, n, r, a)), e("scene-transition");
//#endregion
