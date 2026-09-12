import "./runtime-chunk-NSD7DU3P-Dy531bTP.js";
import { c as e } from "./runtime-chunk-2PT2WH66-BDVg0LVc.js";
import { n as t } from "./runtime-chunk-TZCHGFVF-Cgrxt_U_.js";
import "./runtime-chunk-BVVSZMXD-CNMnepSY.js";
import { v as n } from "./runtime-chunk-WKTS4T2Q-Btdnvt_i.js";
import "./runtime-chunk-HHRA6K3Y-BkevczXT.js";
import "./runtime-chunk-C6JZPJNZ-yPZlRW5T.js";
import "./runtime-chunk-A4V6IMN2-BnRq9jQC.js";
import "./runtime-chunk-Z4NV7FMH-g_cXy_BL.js";
import "./runtime-chunk-DSCGKWZ5-ag6hi1Pk.js";
import "./runtime-chunk-GJIYL4V5-D56wKA9c.js";
import "./runtime-chunk-UYRGNTDQ-ulwE91Cm.js";
import "./runtime-chunk-JBIPPY3K-CjIlYb5q.js";
import { o as r } from "./runtime-chunk-ZJCEUE6J-BC8J8XCO.js";
import { r as i, t as a } from "./runtime-chunk-DZNU62CT-BYJ-fYtG.js";
import { i as o, s } from "./runtime-chunk-Y5F2EZVH-Dm71pOc-.js";
//#region node_modules/@splinetool/runtime/build/runtime-resize-CRSWQBEC.js
var c = class {
	constructor(e, t, n, r, i, a, s, c) {
		this.eventId = e, this.id = t, this.data = n, this.dataEvent = r, this.object = i, this.stage = !1, this.actions = o(r, n.actions, a, s, c, i, "Toggle");
	}
	disconnect() {
		s(this.actions);
	}
	dispatchIn() {
		this.actions.Audio.forEach((e) => e.dispatchBasic()), this.actions.Particles.forEach((e) => e.dispatchBasic()), this.actions.Video.forEach((e) => e.dispatchBasic()), this.actions.Create.forEach((e) => e.dispatch()), this.actions.Destroy.forEach((e) => e.dispatch()), this.actions.Reset.forEach((e) => e.dispatch()), this.actions.Link.forEach((e) => e.dispatch()), this.actions.Transition.forEach((e) => {
			e.object.currentTransitionEvent !== this && (e.object.currentTransitionEvent = this, e.init());
		}), this.actions.Transition.forEach((e) => e.play()), this.actions.Animation.forEach((e) => e.play()), this.actions.SwitchCamera.forEach((e) => e.play()), this.actions.SceneTransition.forEach((e) => e.dispatch()), this.actions.SetVariable.forEach((e) => e.checkConditions()), this.actions.SetVariable.forEach((e) => e.dispatch()), this.actions.DynamicVariablePlay.forEach((e) => e.dispatch()), this.actions.ClearLocalStorage.forEach((e) => e.dispatch()), this.actions.UserAPI.forEach((e) => e.dispatch());
	}
	dispatchOut() {
		this.actions.Transition.forEach((e) => e.play());
	}
}, l = class extends i {
	constructor(e, t) {
		super(e), this.eventManager = t, this.breakpoints = [], this.resize = (e, t) => {
			this.breakpoints.forEach((r) => {
				let i, a = n.deviceToSize(r.data.size), o = r.dataEvent.orientation === "horizontal" ? e : t;
				switch (r.data.operator) {
					case "<":
						i = o < a[0];
						break;
					case ">":
						i = o > a[0];
						break;
					case "<>": i = o > a[0] && o < a[1];
				}
				r.stage !== i && (r.stage = i, r.stage ? r.dispatchIn() : r.dispatchOut());
			});
		}, this.onResizeObserver = new ResizeObserver((e) => {
			for (let t of e) {
				let { width: e, height: n } = t.contentRect;
				this.resize(e, n);
			}
		});
	}
	connect() {
		let { page: t, sharedAssets: n, domElement: i } = this.eventContext;
		this.onResizeObserver.observe(i);
		let a = (e) => {
			if (e.visible && e.data?.events.length) for (let { data: r, id: i } of e.data.events) r.disabled || r.type === "Resize" && r.breakpoints.forEach(({ data: a, id: o }) => {
				try {
					let s = new c(i, o, a, r, e, t, n, this.eventManager);
					this.breakpoints.push(s);
				} catch {}
			});
		};
		t.traverseEntity((t) => {
			(e(t) || t instanceof r) && t.frame?.traverse((e) => {
				a(e);
			}), a(t);
		});
	}
	disconnect() {
		this.onResizeObserver.disconnect(), this.breakpoints.forEach((e) => {
			e.disconnect();
		}), this.breakpoints = [];
	}
};
a("Resize", ({ eventContext: e, eventManager: t }) => new l(e, t)), t("resize");
//#endregion
