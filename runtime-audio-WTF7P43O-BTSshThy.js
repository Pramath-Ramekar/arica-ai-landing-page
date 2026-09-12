import { n as e } from "./runtime-chunk-NSD7DU3P-Dy531bTP.js";
import { n as t } from "./runtime-chunk-TZCHGFVF-Cgrxt_U_.js";
import "./runtime-chunk-BVVSZMXD-CNMnepSY.js";
import "./runtime-chunk-WKTS4T2Q-Btdnvt_i.js";
import "./runtime-chunk-C6JZPJNZ-yPZlRW5T.js";
import { a as n, n as r } from "./runtime-chunk-Y5F2EZVH-Dm71pOc-.js";
//#region node_modules/@splinetool/runtime/build/runtime-audio-WTF7P43O.js
var i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = class {
	constructor(t, n, r, o) {
		this.data = n, this.isPlayAudioAction = !0;
		let { audio: s, volume: c, delay: l, loop: u } = n;
		if (!s) throw Error("Missing property");
		try {
			let t = typeof s == "string" ? o.getAudio(s).src : s.data;
			this.audioPlayer = new e({
				src: t,
				volume: c,
				delay: l,
				loop: u
			});
		} catch {
			console.warn(`Could not create an audio player for this object: "${r.name}" and this audio: "${s}"`);
		}
		a.has(r.uuid) ? a.get(r.uuid).push(this) : a.set(r.uuid, [this]), i.set(t, this);
	}
	playByToggle() {
		this.data.toggle === "stop" ? this.audioPlayer?.status === "playing" ? this.audioPlayer.stop() : (this.audioPlayer?.stop(), this.audioPlayer?.play()) : this.data.toggle === "pause" ? this.audioPlayer?.status === "playing" ? this.audioPlayer?.pause() : this.audioPlayer?.play() : (this.audioPlayer?.stop(), this.audioPlayer?.play());
	}
	dispose() {
		this.audioPlayer?.stop();
	}
}, s = class {
	constructor(e) {
		this.data = e, this.isPauseAudioAction = !0;
	}
	dispatch() {
		this.data.playAudio ? this.pauseAudio(this.data.playAudio) : this.data.object ? this.pauseAllAudiosFromObject(this.data.object) : this.pauseAllAudios();
	}
	pauseAudio(e) {
		let t = i.get(e);
		!t || (this.data.delay > 0 ? (this.disposeDelay(), this.timeoutId = window.setTimeout(() => {
			t.audioPlayer?.[this.data.interaction](), this.disposeDelay();
		}, this.data.delay)) : t.audioPlayer?.[this.data.interaction]());
	}
	pauseAllAudiosFromObject(e) {
		let t = a.get(e);
		!t?.length || (this.data.delay > 0 ? (this.disposeDelay(), this.timeoutId = window.setTimeout(() => {
			t.forEach((e) => e.audioPlayer?.[this.data.interaction]()), this.disposeDelay();
		}, this.data.delay)) : t.forEach((e) => e.audioPlayer?.[this.data.interaction]()));
	}
	pauseAllAudios() {
		let e = [...a.values()];
		!e.length || (this.data.delay > 0 ? (this.disposeDelay(), this.timeoutId = window.setTimeout(() => {
			e.forEach((e) => {
				e.forEach((e) => {
					e.audioPlayer?.[this.data.interaction]();
				});
			}), this.disposeDelay();
		}, this.data.delay)) : e.forEach((e) => {
			e.forEach((e) => {
				e.audioPlayer?.[this.data.interaction]();
			});
		}));
	}
	disposeDelay() {
		clearTimeout(this.timeoutId), delete this.timeoutId;
	}
	dispose() {
		clearTimeout(this.timeoutId), delete this.timeoutId;
	}
}, c = class {
	constructor(e, t, n, r, i) {
		if (this.data = t, this.shared = r, this.condition = i, t.interaction === "play") this.interaction = new o(e, t, n, r);
		else {
			if (t.interaction !== "pause" && t.interaction !== "stop") throw Error("Missing property");
			this.interaction = new s(t);
		}
	}
	dispatchBasic() {
		if (!1 === r(this.shared, this.condition)) return !1;
		this.interaction instanceof o ? this.interaction.playByToggle() : this.interaction.dispatch();
	}
	dispatchConditional() {
		if (!1 === r(this.shared, this.condition)) return !1;
		this.interaction instanceof o ? this.interaction.audioPlayer?.play() : this.interaction.dispatch();
	}
	dispatchGameControl(e) {
		if (!1 === r(this.shared, this.condition)) return !1;
		this.interaction instanceof o && (e === "start" ? this.interaction.audioPlayer?.play() : this.interaction.audioPlayer?.stop());
	}
	dispose() {
		this.interaction.dispose();
	}
};
n("Audio", ({ id: e, data: t, object: n, shared: r, actionCondition: i }) => new c(e, t, n, r, i)), t("audio");
//#endregion
