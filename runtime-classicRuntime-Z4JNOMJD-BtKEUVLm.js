import "./runtime-chunk-NSD7DU3P-Dy531bTP.js";
import { $ as e, $t as t, C as n, Ct as r, D as i, Dt as a, Et as o, Ft as s, Gn as c, H as l, I as u, J as d, Kt as f, L as p, Ln as m, M as h, Nn as g, O as _, Or as v, Ot as y, Pr as b, Rn as x, Rt as S, S as C, V as w, Vt as T, Wn as ee, Wr as E, Wt as D, Yn as O, Zr as te, Zt as ne, _r as re, bn as k, bt as ie, c as ae, cr as oe, d as se, di as ce, dn as le, er as ue, f as de, fn as fe, g as pe, gt as me, h as he, hi as ge, hn as _e, ir as A, it as j, j as ve, kn as ye, mi as be, n as xe, nn as Se, nr as Ce, oi as we, ot as M, p as Te, q as Ee, s as De, sr as Oe, ti as N, tn as ke, tr as Ae, tt as je, ui as Me, ut as Ne, vr as Pe, w as Fe, wn as Ie, wr as Le, wt as Re, x as ze, yi as Be, zn as Ve, zr as P, zt as He } from "./runtime-chunk-BVVSZMXD-CNMnepSY.js";
import { A as Ue, Dt as We, E as Ge, U as Ke, n as qe, st as Je, z as Ye } from "./runtime-chunk-WKTS4T2Q-Btdnvt_i.js";
import { v as Xe } from "./runtime-chunk-HHRA6K3Y-BkevczXT.js";
import "./runtime-chunk-C6JZPJNZ-yPZlRW5T.js";
import { B as F, C as Ze, G as I, I as L, M as Qe, S as $e, T as et, U as tt, b as nt, d as rt, f as R, p as it, r as at } from "./runtime-chunk-A4V6IMN2-BnRq9jQC.js";
import "./runtime-chunk-Z4NV7FMH-g_cXy_BL.js";
import "./runtime-chunk-DSCGKWZ5-ag6hi1Pk.js";
import "./runtime-chunk-GJIYL4V5-D56wKA9c.js";
import "./runtime-chunk-FNG2IRQJ-DBvUndTI.js";
import "./runtime-chunk-VE44RSRZ-SmjzvHjx.js";
import "./runtime-chunk-AF23X5NO-BsAL-h5w.js";
import "./runtime-chunk-UYRGNTDQ-ulwE91Cm.js";
import { t as ot } from "./runtime-chunk-JBIPPY3K-CjIlYb5q.js";
import "./runtime-chunk-ZJCEUE6J-BC8J8XCO.js";
import "./runtime-chunk-GR2ZC5GY-DEpnZOEc.js";
import "./runtime-chunk-XV6R6T7P-CqajVNOJ.js";
import "./runtime-chunk-W4NXLGIX-B6f5sdgC.js";
import { s as st } from "./runtime-chunk-FQNSP44B-HM6ovUUu.js";
import { b as ct, v as lt } from "./react-spline-CbtMUAP1.js";
import { a as ut, c as dt, d as ft, f as pt, i as z, l as mt, m as ht, n as gt, o as _t, p as vt, r as yt, s as bt, t as xt, u as St } from "./runtime-chunk-3IZ67XSS-DTyLMAPf.js";
import { n as Ct, r as wt, t as Tt } from "./runtime-chunk-EOV2DL2V-CTKMLLri.js";
import { i as Et, n as Dt, t as Ot } from "./runtime-chunk-KL6OIHVF-oHBXFAFk.js";
import { n as kt } from "./runtime-chunk-CVUJ3GMH-DaiaL2Lv.js";
import { t as At } from "./runtime-chunk-GFTBNL2W-MvZsK_7I.js";
//#region node_modules/@splinetool/runtime/build/runtime-classicRuntime-Z4JNOMJD.js
var jt = class {
	constructor(e) {
		if (this.hashProperties = void 0, this.isNode = !0, this.shortcuts = {}, jt.uuidContext === null) throw Error("plz startContext");
		this.uuid = jt.uuidContext === jt.globalContext ? "_gid" + jt.uuidContext.nodeContextUuid++ : "_uid" + jt.uuidContext.nodeContextUuid++, this.type = e, this.name = "";
	}
	static startContext(e) {
		this.uuidContext === null || this.uuidContext === jt.globalContext ? this.uuidContext = e : console.error("Can't start context twice");
	}
	static endContext(e) {
		this.uuidContext !== e && console.error("Can't end context twice"), this.uuidContext = null;
	}
	analyze(e, t) {
		t ??= {}, e.analyzing = !0, this.build(e.addFlow(t.slot, t.cache, t.context), "v4"), e.clearVertexNodeCode(), e.clearFragmentNodeCode(), e.removeFlow(), e.analyzing = !1;
	}
	analyzeAndFlow(e, t, n) {
		return n ??= {}, this.analyze(e, n), this.flow(e, t, n);
	}
	flow(e, t, n) {
		n ??= {}, e.addFlow(n.slot, n.cache, n.context);
		let r = {
			result: this.build(e, t),
			code: e.clearNodeCode(),
			extra: e.context.extra
		};
		return e.removeFlow(), r;
	}
	build(e, t, n) {
		t ??= this.getType(e, t);
		let r = e.getNodeData(n ?? this);
		return e.analyzing && this.appendDepsNode(e, r, t), e.nodes.indexOf(this) === -1 && e.nodes.push(this), this.updateFrame !== void 0 && e.updaters.indexOf(this) === -1 && e.updaters.push(this), this.generate(e, t, n);
	}
	updateFrame(e) {}
	generateReadonly(e, t, n, r, i, a) {
		return "";
	}
	generate(e, t, n, r, i) {
		return "";
	}
	parse(e, t, n, r) {}
	appendDepsNode(e, t, n) {
		t.deps = (t.deps || 0) + 1;
		let r = e.getTypeLength(n);
		(r > (t.outputMax || 0) || this.getType(e, n)) && (t.outputMax = r, t.output = n);
	}
	setName(e) {
		this.name = e;
	}
	getName() {
		return this.name;
	}
	getType(e, t) {
		return t === "sampler2D" || t === "samplerCube" ? t : this.type;
	}
}, B = jt;
B.globalContext = { nodeContextUuid: 0 }, B.uuidContext = jt.globalContext;
var Mt = 3e3, Nt = 3001, Pt = class {
	constructor(e) {
		e ??= {}, this.name = e.name, this.type = e.type, this.node = e.node, this.size = e.size, this.needsUpdate = e.needsUpdate;
	}
	get value() {
		return this.node.value;
	}
	set value(e) {
		this.node.value = e;
	}
}, Ft = new class {
	constructor() {
		this.nodes = {}, this.keywords = {};
	}
	add(e) {
		this.nodes[e.name] = e;
	}
	addKeyword(e, t, n) {
		n = n === void 0 || n, this.keywords[e] = {
			callback: t,
			cache: n
		};
	}
	remove(e) {
		delete this.nodes[e.name];
	}
	removeKeyword(e) {
		delete this.keywords[e];
	}
	get(e) {
		return this.nodes[e];
	}
	getKeyword(e, t) {
		return this.keywords[e].callback(t);
	}
	getKeywordData(e) {
		return this.keywords[e];
	}
	contains(e) {
		return this.nodes[e] !== void 0;
	}
	containsKeyword(e) {
		return this.keywords[e] !== void 0;
	}
}(), V = class extends B {
	constructor(e, t) {
		super(e), this.scope = "", t ??= {}, this.shared = t.shared === void 0 || t.shared, this.unique = t.unique !== void 0 && t.unique;
	}
	build(e, t, n, r) {
		if (t ??= this.getType(e), this.getShared(e, t)) {
			let i = this.getUnique(e, t);
			i && this.uuid === void 0 && (this.uuid = Se.generateUUID()), n = e.getUUID(n ?? this.getUUID(), !i);
			let a = e.getNodeData(n), o = a.output || this.getType(e);
			if (e.analyzing) return (a.deps || 0) > 0 || this.getLabel() ? (this.appendDepsNode(e, a, t), this.generate(e, t, n)) : super.build(e, t, n);
			if (i) return a.name = a.name || super.build(e, t, n), a.name;
			if (!this.getLabel() && (!this.getShared(e, o) || e.context.ignoreCache || a.deps === 1)) return super.build(e, t, n);
			n = this.getUUID(!1);
			let s = this.getTemp(e, n);
			if (s) return e.format(s, o, t);
			{
				s = super.generate(e, t, n, a.output, r);
				let i = this.generate(e, o, n);
				return e.addNodeCode(s + " = " + i + ";"), e.format(s, o, t);
			}
		}
		return super.build(e, t, n);
	}
	getShared(e, t) {
		return t !== "sampler2D" && t !== "samplerCube" && this.shared;
	}
	getUnique(e, t) {
		return this.unique;
	}
	setLabel(e) {
		return this.label = e, this;
	}
	getLabel() {
		return this.label;
	}
	getUUID(e) {
		let t = this.uuid;
		return typeof this.scope == "string" && (t = this.scope + "-" + t), t;
	}
	getTemp(e, t) {
		t ||= this.uuid;
		let n = e.getVars()[t];
		return n ? n.name : void 0;
	}
	generate(e, t, n, r, i) {
		return this.getShared(e, t) || console.error("TempNode is not shared"), n ??= this.uuid, e.getTempVar(n, r ?? this.getType(e), i, this.getLabel()).name;
	}
}, It = class extends V {
	constructor(e, t) {
		(t ??= {}).shared = t.shared !== void 0 && t.shared, super(e, t), this.readonly = !1;
	}
	setReadonly(e) {
		return this.readonly = e, this.hashProperties = this.readonly ? ["value"] : void 0, this;
	}
	getReadonly() {
		return this.readonly;
	}
	generate(e, t, n, r, i, a) {
		n = e.getUUID(n ?? this.getUUID()), r ??= this.getType(e);
		let o = e.getNodeData(n);
		return this.getReadonly() && this.generateReadonly !== void 0 ? this.generateReadonly(e, t, n, r, i, a) : e.isShader("vertex") ? (o.vertex ||= e.createVertexUniform(r, this, i, a, this.getLabel()), e.format(o.vertex.name, r, t)) : (o.fragment ||= e.createFragmentUniform(r, this, i, a, this.getLabel()), e.format(o.fragment.name, r, t));
	}
}, Lt = class extends It {
	constructor(e = 0, t) {
		super("v2"), this.nodeType = "Vector2", this.value = e instanceof _ ? e : new _(e, t);
	}
	get x() {
		return this.value.x;
	}
	set x(e) {
		this.value.x = e;
	}
	get y() {
		return this.value.y;
	}
	set y(e) {
		this.value.y = e;
	}
	generateReadonly(e, t, n, r, i, a) {
		return e.format("vec2(" + this.value.x + ", " + this.value.y + ")", r, t);
	}
}, Rt = class extends It {
	constructor(e = 0, t, n) {
		super("v3"), this.nodeType = "Vector3", this.value = e instanceof l ? e : new l(e, t, n);
	}
	get x() {
		return this.value.x;
	}
	set x(e) {
		this.value.x = e;
	}
	get y() {
		return this.value.y;
	}
	set y(e) {
		this.value.y = e;
	}
	get z() {
		return this.value.z;
	}
	set z(e) {
		this.value.z = e;
	}
	generateReadonly(e, t, n, r, i, a) {
		return e.format("vec3(" + this.value.x + ", " + this.value.y + ", " + this.value.z + ")", r, t);
	}
}, zt = class extends It {
	constructor(e) {
		super("v4"), this.nodeType = "Vector4", this.value = e instanceof I ? e : new I(e.r, e.g, e.b, e.a);
	}
	generateReadonly(e, t, n, r, i, a) {
		return e.format("vec4(" + this.value.r + ", " + this.value.g + ", " + this.value.b + ", " + this.value.a + ")", r, t);
	}
}, Bt = /^\s*([a-z_0-9]+)\s([a-z_0-9]+)\s*\((.*?)\)/i, Vt = /[a-z_0-9]+/gi, H = class extends V {
	constructor(e, t, n, r, i) {
		super(i), this.src = "", this.nodeType = "Function", this.useKeywords = !0, this.includes = [], this.extensions = {}, this.keywords = {}, this.isMethod = i === void 0, this.isInterface = !1, this.parse(e, t, n, r);
	}
	getShared(e, t) {
		return !this.isMethod;
	}
	getType(e) {
		return e.getTypeByFormat(this.type);
	}
	getInputByName(e) {
		if (this.inputs) {
			let t = this.inputs.length;
			for (; t--;) if (this.inputs[t].name === e) return this.inputs[t];
		}
	}
	getIncludeByName(e) {
		if (this.includes) {
			let t = this.includes.length;
			for (; t--;) if (this.includes[t].name === e) return this.includes[t];
		}
	}
	generate(e, t, n, r, i) {
		let a, o = 0, s = this.src;
		if (this.includes) for (let t = 0; t < this.includes.length; t++) e.include(this.includes[t], this);
		for (let t in this.extensions) e.extensions[t] = !0;
		let c = [];
		for (; a = Vt.exec(this.src);) c.push(a);
		for (let t = 0; t < c.length; t++) {
			let n = c[t], r = n[0], i = !this.isMethod || !this.getInputByName(r), a = r;
			if (this.keywords[r] || this.useKeywords && i && Ft.containsKeyword(r)) {
				let t = this.keywords[r];
				if (!t) {
					let n = Ft.getKeywordData(r);
					n.cache && (t = e.keywords[r]), t ||= Ft.getKeyword(r, e), n.cache && (e.keywords[r] = t);
				}
				a = t.build(e);
			}
			r !== a && s[n.index + o - 1] !== "." && (s = s.substring(0, n.index + o) + a + s.substring(n.index + r.length + o), o += a.length - r.length), this.getIncludeByName(a) === void 0 && Ft.contains(a) && e.include(Ft.get(a));
		}
		return t === "source" ? s : this.isMethod ? (this.isInterface || e.include(this, void 0, s), this.name) : e.format("( " + s + " )", this.getType(e), t);
	}
	parse(e, t, n, r) {
		if (this.src = e || "", this.includes = t ?? [], this.extensions = n ?? {}, this.keywords = r ?? {}, this.isMethod) {
			let e = Bt.exec(this.src);
			if (this.inputs = [], e && e.length == 4) {
				this.type = e[1], this.name = e[2];
				let t = e[3].match(Vt);
				if (t) {
					let e = 0;
					for (; e < t.length;) {
						let n, r = t[e++];
						r === "in" || r === "out" || r === "inout" ? n = t[e++] : (n = r, r = "");
						let i = t[e++];
						this.inputs.push({
							name: i,
							type: n,
							qualifier: r
						});
					}
				}
				this.isInterface = this.src.indexOf("{") === -1;
			} else this.type = "", this.name = "";
		}
	}
}, Ht = /^([a-z_0-9]+)\s([a-z_0-9]+)\s?=?\s?(.*?)(;|$)/i, Ut = class extends V {
	constructor(e = "", t) {
		super(), this.src = "", this.useDefine = !1, this.nodeType = "Const", this.parse(e || Ut.PI, void 0, void 0, void 0, t);
	}
	getType(e) {
		return e.getTypeByFormat(this.type);
	}
	parse(e, t, n, r, i) {
		this.src = e || "";
		let a, o, s = "", c = Ht.exec(e);
		this.useDefine = i ?? this.src.charAt(0) === "#", c && c.length > 1 ? (o = c[1], a = c[2], s = c[3]) : (a = this.src, o = "f"), this.name = a, this.type = o, this.value = s;
	}
	build(e, t) {
		if (t === "source") {
			if (this.value) return this.useDefine ? "#define " + this.name + " " + this.value : "const " + this.type + " " + this.name + " = " + this.value + ";";
			if (this.useDefine) return this.src;
		}
		return e.include(this), e.format(this.name, this.getType(e), t);
	}
	generate(e, t, n, r, i) {
		return e.format(this.name, this.getType(e), t);
	}
}, U = Ut;
U.PI = "PI", U.PI2 = "PI2", U.RECIPROCAL_PI = "RECIPROCAL_PI", U.RECIPROCAL_PI2 = "RECIPROCAL_PI2", U.LOG2 = "LOG2", U.EPSILON = "EPSILON";
var Wt = /* @__PURE__ */ RegExp("^structs*([a-z_0-9]+)s*{s*((.|\n)*?)}", "gim"), Gt = /* @__PURE__ */ RegExp("s*(w*?)s*(w*?)(=|;)", "gim"), Kt = class extends V {
	constructor(e = "") {
		super(), this.inputs = [], this.src = "", this.nodeType = "Struct", this.parse(e);
	}
	getType(e) {
		return e.getTypeByFormat(this.name);
	}
	getInputByName(e) {
		let t = this.inputs.length;
		for (; t--;) if (this.inputs[t].name === e) return this.inputs[t];
	}
	generate(e, t, n, r, i) {
		return t === "source" ? this.src + ";" : e.format("( " + this.src + " )", this.getType(e), t);
	}
	parse(e = "") {
		this.src = e, this.inputs = [];
		let t = Wt.exec(e);
		if (t) {
			let e, n = t[2];
			for (; e = Gt.exec(n);) this.inputs.push({
				type: e[1],
				name: e[2]
			});
			this.name = t[1];
		} else this.name = "";
		this.type = this.name;
	}
}, qt = class extends V {
	constructor(e) {
		super("v2", { shared: !1 }), this.nodeType = "UV", this.index = e ?? 0;
	}
	generate(e, t) {
		e.requires.uv[this.index] = !0;
		let n = this.index > 0 ? this.index + 1 : "", r = e.isShader("vertex") ? "uv" + n : "vUv" + n;
		return e.format(r, this.getType(e), t);
	}
};
Ft.addKeyword("uv", function() {
	return new qt();
}), Ft.addKeyword("uv2", function() {
	return new qt(1);
});
var Jt = class extends V {
	constructor(e, t) {
		super("v4"), this.nodeType = "ColorSpace", this.input = e, this.method = t ?? Jt.LINEAR_TO_LINEAR, this.hashProperties = ["method"];
	}
	static getEncodingComponents(e) {
		switch (e) {
			case Mt: return ["Linear"];
			case Nt: return ["sRGB"];
			default: return [];
		}
	}
	generate(e, t) {
		let n = this.input.build(e, "v4"), r = this.getType(e), i = Jt.Nodes[this.method], a = e.include(i);
		if (a === Jt.LINEAR_TO_LINEAR) return e.format(n, r, t);
		if (i.inputs?.length === 2) {
			let i = this.factor.build(e, "f");
			return e.format(a + "( " + n + ", " + i + " )", r, t);
		}
		return e.format(a + "( " + n + " )", r, t);
	}
	fromEncoding(e) {
		let t = Jt.getEncodingComponents(e);
		this.method = "LinearTo" + t[0], this.factor = t[1];
	}
	fromDecoding(e) {
		let t = Jt.getEncodingComponents(e);
		this.method = t[0] + "ToLinear", this.factor = t[1];
	}
}, Yt = Jt;
Yt.Nodes = {
	LinearToLinear: new H([
		"vec4 LinearToLinear( in vec4 value ) {",
		"	return value;",
		"}"
	].join("\n")),
	sRGBToLinear: new H([
		"vec4 sRGBToLinear( in vec4 value ) {",
		"	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );",
		"}"
	].join("\n")),
	LinearTosRGB: new H([
		"vec4 LinearTosRGB( in vec4 value ) {",
		"	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );",
		"}"
	].join("\n"))
}, Yt.LINEAR_TO_LINEAR = "LinearToLinear", Yt.SRGB_TO_LINEAR = "sRGBToLinear", Yt.LINEAR_TO_SRGB = "LinearTosRGB";
var W = class extends H {
	constructor(e = "", t, n, r, i) {
		super(e, i, r, n, t), this.nodeType = "Expression";
	}
}, Xt = class extends It {
	constructor(e = new m(), t, n, r) {
		super("v4", { shared: !0 }), this.nodeType = "Texture", this.value = e, this.uv = t ?? new qt(), this.bias = n, this.project = r !== void 0 && r;
	}
	getTexture(e, t) {
		return super.generate(e, t, this.value.uuid, "t");
	}
	generate(e, t) {
		if (t === "sampler2D") return this.getTexture(e, t);
		let n, r, i = this.getTexture(e, t), a = this.uv.build(e, this.project ? "v4" : "v2"), o = this.bias ? this.bias.build(e, "f") : void 0;
		o === void 0 && e.context.bias && (o = e.context.bias.setTexture(this).build(e, "f")), n = this.project ? "texture2DProj" : o ? "tex2DBias" : "tex2D", r = o ? n + "( " + i + ", " + a + ", " + o + " )" : n + "( " + i + ", " + a + " )";
		let s = {
			include: e.isShader("vertex"),
			ignoreCache: !0
		}, c = this.getType(e);
		return e.addContext(s), this.colorSpace = this.colorSpace ?? new Yt(new W("", c)), this.colorSpace.fromDecoding(e.getTextureEncodingFromMap(this.value)), this.colorSpace.input.parse(r), r = this.colorSpace.build(e, c), e.removeContext(), e.format(r, c, t);
	}
}, G = class extends It {
	constructor(e) {
		super("f"), this.nodeType = "Float", this.value = e ?? 0;
	}
	generateReadonly(e, t, n, r, i, a) {
		return e.format(this.value + (this.value % 1 ? "" : ".0"), r, t);
	}
}, Zt = class extends V {
	constructor(e, t) {
		super(), this.inputs = [], this.nodeType = "FunctionCall", this.value = e, this.inputs = t ?? [];
	}
	getFunction() {
		return this.value;
	}
	getType(e) {
		return this.value.getType(e);
	}
	generate(e, t, n, r, i) {
		r = this.getType(e);
		let a = this.value, o = a.build(e, t) + "( ", s = [];
		if (a.inputs) {
			for (let t = 0; t < a.inputs.length; t++) {
				let n = a.inputs[t], r = this.inputs[t] || this.inputs[n.name];
				s.push(r.build(e, e.getTypeByFormat(n.type)));
			}
			o += s.join(", ") + " )";
		}
		return e.format(o, r, t);
	}
}, Qt = class extends V {
	constructor(e, t, n = Qt.ADD) {
		super(), this.nodeType = "Operator", this.type = e.type, this.a = e, this.b = t, this.op = n;
	}
	getType(e) {
		let t = this.a.getType(e), n = this.b.getType(e);
		return e.isTypeMatrix(t) ? "v4" : e.getTypeLength(n) > e.getTypeLength(t) ? n : t;
	}
	generate(e, t) {
		let n = this.getType(e);
		this.type = n;
		let r = this.a.build(e, n), i = this.b.build(e, n);
		return e.format("( " + r + " " + this.op + " " + i + " )", n, t);
	}
}, $t = Qt;
$t.ADD = "+", $t.SUB = "-", $t.MUL = "*", $t.DIV = "/";
var K = class extends V {
	constructor(e, t = K.ABS, n, r) {
		super(), this.nodeType = "Math", this.a = e, typeof t == "string" ? r = t : this.b = t, typeof n == "string" ? r = n : this.c = n, this.method = r, this.hashProperties = ["method"];
	}
	getNumInputs(e) {
		switch (this.method) {
			case K.MIX:
			case K.CLAMP:
			case K.REFRACT:
			case K.SMOOTHSTEP:
			case K.FACEFORWARD: return 3;
			case K.MIN:
			case K.MAX:
			case K.MOD:
			case K.STEP:
			case K.REFLECT:
			case K.DISTANCE:
			case K.DOT:
			case K.CROSS:
			case K.POW: return 2;
			default: return 1;
		}
	}
	getInputType(e) {
		let t = e.getTypeLength(this.a.getType(e)), n = this.b ? e.getTypeLength(this.b.getType(e)) : 0, r = this.c ? e.getTypeLength(this.c.getType(e)) : 0;
		return t > n && t > r ? this.a.getType(e) : n > r ? this.b.getType(e) : this.c.getType(e);
	}
	getType(e) {
		switch (this.method) {
			case K.LENGTH:
			case K.DISTANCE:
			case K.DOT: return "f";
			case K.CROSS: return "v3";
		}
		return this.getInputType(e);
	}
	generate(e, t) {
		let n, r, i, a = this.a ? e.getTypeLength(this.a.getType(e)) : 0, o = this.b ? e.getTypeLength(this.b.getType(e)) : 0, s = this.c ? e.getTypeLength(this.c.getType(e)) : 0, c = this.getInputType(e), l = this.getType(e);
		switch (this.type = l, this.method) {
			case K.NEGATE: return e.format("( -" + this.a.build(e, c) + " )", c, t);
			case K.INVERT: return e.format("( 1.0 - " + this.a.build(e, c) + " )", c, t);
			case K.CROSS:
				n = this.a.build(e, "v3"), r = this.b.build(e, "v3");
				break;
			case K.STEP:
				n = this.a.build(e, a === 1 ? "f" : c), r = this.b.build(e, c);
				break;
			case K.MIN:
			case K.MAX:
			case K.MOD:
				n = this.a.build(e, c), r = this.b.build(e, o === 1 ? "f" : c);
				break;
			case K.REFRACT:
				n = this.a.build(e, c), r = this.b.build(e, c), i = this.c.build(e, "f");
				break;
			case K.MIX:
				n = this.a.build(e, c), r = this.b.build(e, c), i = this.c.build(e, s === 1 ? "f" : c);
				break;
			default: n = this.a.build(e, c), this.b && (r = this.b.build(e, c)), this.c && (i = this.c.build(e, c));
		}
		let u = [];
		u.push(n), r && u.push(r), i && u.push(i);
		let d = this.getNumInputs(e);
		if (u.length !== d) throw Error(`Arguments not match used in "${this.method}". Require ${d}, currently ${u.length}.`);
		return e.format(this.method + "( " + u.join(", ") + " )", l, t);
	}
}, q = K;
q.RAD = "radians", q.DEG = "degrees", q.EXP = "exp", q.EXP2 = "exp2", q.LOG = "log", q.LOG2 = "log2", q.SQRT = "sqrt", q.INV_SQRT = "inversesqrt", q.FLOOR = "floor", q.CEIL = "ceil", q.NORMALIZE = "normalize", q.FRACT = "fract", q.SATURATE = "saturate", q.SIN = "sin", q.COS = "cos", q.TAN = "tan", q.ASIN = "asin", q.ACOS = "acos", q.ARCTAN = "atan", q.ABS = "abs", q.SIGN = "sign", q.LENGTH = "length", q.NEGATE = "negate", q.INVERT = "invert", q.MIN = "min", q.MAX = "max", q.MOD = "mod", q.STEP = "step", q.REFLECT = "reflect", q.DISTANCE = "distance", q.DOT = "dot", q.CROSS = "cross", q.POW = "pow", q.MIX = "mix", q.CLAMP = "clamp", q.REFRACT = "refract", q.SMOOTHSTEP = "smoothstep", q.FACEFORWARD = "faceforward";
var en = class extends V {
	constructor(e, t, n) {
		super("v4"), this.nodeType = "TextureCubeUV", this.value = e, this.uv = t, this.bias = n;
	}
	bilinearCubeUV(e, t, n, r) {
		let i = new Zt(en.Nodes.bilinearCubeUV, [
			t,
			n,
			r
		]);
		this.colorSpaceTL = this.colorSpaceTL ?? new Yt(new W("", "v4")), this.colorSpaceTL.fromDecoding(e.getTextureEncodingFromMap(this.value.value)), this.colorSpaceTL.input.parse(i.build(e) + ".tl"), this.colorSpaceTR = this.colorSpaceTR ?? new Yt(new W("", "v4")), this.colorSpaceTR.fromDecoding(e.getTextureEncodingFromMap(this.value.value)), this.colorSpaceTR.input.parse(i.build(e) + ".tr"), this.colorSpaceBL = this.colorSpaceBL ?? new Yt(new W("", "v4")), this.colorSpaceBL.fromDecoding(e.getTextureEncodingFromMap(this.value.value)), this.colorSpaceBL.input.parse(i.build(e) + ".bl"), this.colorSpaceBR = this.colorSpaceBR ?? new Yt(new W("", "v4")), this.colorSpaceBR.fromDecoding(e.getTextureEncodingFromMap(this.value.value)), this.colorSpaceBR.input.parse(i.build(e) + ".br");
		let a = {
			include: e.isShader("vertex"),
			ignoreCache: !0
		};
		e.addContext(a), this.colorSpaceTLExp = new W(this.colorSpaceTL.build(e, "v4"), "v4"), this.colorSpaceTRExp = new W(this.colorSpaceTR.build(e, "v4"), "v4"), this.colorSpaceBLExp = new W(this.colorSpaceBL.build(e, "v4"), "v4"), this.colorSpaceBRExp = new W(this.colorSpaceBR.build(e, "v4"), "v4"), e.removeContext();
		let o = new W("mix( mix( cubeUV_TL, cubeUV_TR, cubeUV.f.x ), mix( cubeUV_BL, cubeUV_BR, cubeUV.f.x ), cubeUV.f.y )", "v4");
		return o.keywords.cubeUV_TL = this.colorSpaceTLExp, o.keywords.cubeUV_TR = this.colorSpaceTRExp, o.keywords.cubeUV_BL = this.colorSpaceBLExp, o.keywords.cubeUV_BR = this.colorSpaceBRExp, o.keywords.cubeUV = i, o;
	}
	generate(e, t) {
		if (e.isShader("fragment")) {
			let n = this.uv, r = this.bias || e.context.roughness, i = new q(new Zt(en.Nodes.roughnessToMip, [r]), en.Nodes.m0, en.Nodes.cubeUV_maxMipLevel, q.CLAMP), a = new q(i, q.FLOOR), o = new q(i, q.FRACT), s = new q(this.bilinearCubeUV(e, this.value, n, a), this.bilinearCubeUV(e, this.value, n, new $t(a, new G(1).setReadonly(!0), $t.ADD)), o, q.MIX);
			return e.format(s.build(e), "v4", t);
		}
		return console.warn("TextureCubeUVNode is not compatible with " + e.shader + " shader."), e.format("vec4( 0.0 )", this.getType(e), t);
	}
}, tn = en;
tn.Nodes = function() {
	let e = new Kt("struct TextureCubeUVData {\n			vec4 tl;\n			vec4 tr;\n			vec4 br;\n			vec4 bl;\n			vec2 f;\n		}"), t = new U("float cubeUV_maxMipLevel 8.0", !0), n = new U("float cubeUV_minMipLevel 4.0", !0), r = new U("float cubeUV_maxTileSize 256.0", !0), i = new U("float cubeUV_minTileSize 16.0", !0), a = new H("float getFace(vec3 direction) {\n				vec3 absDirection = abs(direction);\n				float face = -1.0;\n				if (absDirection.x > absDirection.z) {\n					if (absDirection.x > absDirection.y)\n						face = direction.x > 0.0 ? 0.0 : 3.0;\n					else\n						face = direction.y > 0.0 ? 1.0 : 4.0;\n				} else {\n					if (absDirection.z > absDirection.y)\n						face = direction.z > 0.0 ? 2.0 : 5.0;\n					else\n						face = direction.y > 0.0 ? 1.0 : 4.0;\n				}\n				return face;\n		}");
	a.useKeywords = !1;
	let o = new H("vec2 getUV(vec3 direction, float face) {\n				vec2 uv;\n				if (face == 0.0) {\n					uv = vec2(direction.z, direction.y) / abs(direction.x); \n				} else if (face == 1.0) {\n					uv = vec2(-direction.x, -direction.z) / abs(direction.y); \n				} else if (face == 2.0) {\n					uv = vec2(-direction.x, direction.y) / abs(direction.z); \n				} else if (face == 3.0) {\n					uv = vec2(-direction.z, direction.y) / abs(direction.x); \n				} else if (face == 4.0) {\n					uv = vec2(-direction.x, direction.z) / abs(direction.y); \n				} else {\n					uv = vec2(direction.x, direction.y) / abs(direction.z); \n				}\n				return 0.5 * (uv + 1.0);\n		}");
	o.useKeywords = !1;
	let s = new H("TextureCubeUVData bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n			float face = getFace(direction);\n			float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n			mipInt = max(mipInt, cubeUV_minMipLevel);\n			float faceSize = exp2(mipInt);\n			float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n			vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n			vec2 f = fract(uv);\n			uv += 0.5 - f;\n			if (face > 2.0) {\n				uv.y += faceSize;\n				face -= 3.0;\n			}\n			uv.x += face * faceSize;\n			if(mipInt < cubeUV_maxMipLevel){\n				uv.y += 2.0 * cubeUV_maxTileSize;\n			}\n			uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n			uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n			uv *= texelSize;\n			vec4 tl = texture2D(envMap, uv);\n			uv.x += texelSize;\n			vec4 tr = texture2D(envMap, uv);\n			uv.y += texelSize;\n			vec4 br = texture2D(envMap, uv);\n			uv.x -= texelSize;\n			vec4 bl = texture2D(envMap, uv);\n			return TextureCubeUVData( tl, tr, br, bl, f );\n		}", [
		e,
		a,
		o,
		t,
		n,
		r,
		i
	]);
	s.useKeywords = !1;
	let c = new U("float r0 1.0", !0), l = new U("float v0 0.339", !0), u = new U("float m0 -2.0", !0);
	return {
		bilinearCubeUV: s,
		roughnessToMip: new H("float roughnessToMip(float roughness) {\n			float mip = 0.0;\n			if (roughness >= r1) {\n				mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n			} else if (roughness >= r4) {\n				mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n			} else if (roughness >= r5) {\n				mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n			} else if (roughness >= r6) {\n				mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n			} else {\n				mip = -2.0 * log2(1.16 * roughness);// 1.16 = 1.79^0.25\n			}\n			return mip;\n		}", [
			c,
			l,
			u,
			new U("float r1 0.8", !0),
			new U("float v1 0.276", !0),
			new U("float m1 -1.0", !0),
			new U("float r4 0.4", !0),
			new U("float v4 0.046", !0),
			new U("float m4 2.0", !0),
			new U("float r5 0.305", !0),
			new U("float v5 0.016", !0),
			new U("float m5 3.0", !0),
			new U("float r6 0.21", !0),
			new U("float v6 0.0038", !0),
			new U("float m6 4.0", !0)
		]),
		m0: u,
		cubeUV_maxMipLevel: t
	};
}();
var nn = class extends V {
	constructor(e) {
		super("v3"), this.nodeType = "Normal", this.scope = e ?? nn.VIEW;
	}
	getShared() {
		return this.scope === nn.WORLD;
	}
	build(e, t, n, r) {
		let i = e.context[this.scope + "Normal"];
		return i ? i.build(e, t, n, r) : super.build(e, t, n);
	}
	generate(e, t, n, r, i) {
		let a;
		switch (this.scope) {
			case nn.VIEW:
				a = e.isShader("vertex") ? "transformedNormal" : "geometryNormal";
				break;
			case nn.LOCAL:
				e.isShader("vertex") ? a = "objectNormal" : (e.requires.normal = !0, a = "vObjectNormal");
				break;
			case nn.WORLD: e.isShader("vertex") ? a = "inverseTransformDirection( transformedNormal, viewMatrix ).xyz" : (e.requires.worldNormal = !0, a = "vWNormal");
		}
		return e.format(a, this.getType(e), t);
	}
}, rn = nn;
rn.LOCAL = "local", rn.WORLD = "world", rn.VIEW = "view", rn.NORMAL = "normal", Ft.addKeyword("viewNormal", function() {
	return new rn(rn.VIEW);
}), Ft.addKeyword("localNormal", function() {
	return new rn(rn.NORMAL);
}), Ft.addKeyword("worldNormal", function() {
	return new rn(rn.WORLD);
});
var an = class extends V {
	constructor(e) {
		super("v3"), this.nodeType = "Position", this.scope = e ?? an.LOCAL;
	}
	getType() {
		return this.scope === an.PROJECTION ? "v4" : this.type;
	}
	getShader() {
		switch (this.scope) {
			case an.LOCAL:
			case an.WORLD: return !1;
		}
		return !0;
	}
	generate(e, t, n, r, i) {
		let a;
		switch (this.scope) {
			case an.LOCAL:
				e.isShader("vertex") ? a = "transformed" : (e.requires.position = !0, a = "vPosition");
				break;
			case an.WORLD:
				if (e.isShader("vertex")) return "( modelMatrix * vec4( transformed, 1.0 ) ).xyz";
				e.requires.worldPosition = !0, a = "vWPosition";
				break;
			case an.VIEW:
				a = e.isShader("vertex") ? "-mvPosition.xyz" : "vViewPosition";
				break;
			case an.PROJECTION: a = e.isShader("vertex") ? "( projectionMatrix * modelViewMatrix * vec4( position, 1.0 ) )" : "vec4( 0.0 )";
		}
		return e.format(a, this.getType(), t);
	}
}, on = an;
on.LOCAL = "local", on.WORLD = "world", on.VIEW = "view", on.PROJECTION = "projection", Ft.addKeyword("position", function() {
	return new on();
}), Ft.addKeyword("worldPosition", function() {
	return new on(on.WORLD);
}), Ft.addKeyword("viewPosition", function() {
	return new on(on.VIEW);
});
var sn = class extends V {
	constructor(e) {
		super("v3"), this.nodeType = "Reflect", this.scope = e ?? sn.CUBE;
	}
	getUnique(e) {
		return !e.context.viewNormal;
	}
	getType() {
		return this.scope === sn.SPHERE ? "v2" : this.type;
	}
	generate(e, t) {
		let n = this.getUnique(e);
		if (e.isShader("fragment")) {
			let r;
			switch (this.scope) {
				case sn.VECTOR: {
					let t = new rn(rn.VIEW), i = e.context.roughness, a = t.build(e, "v3"), o = new on(on.VIEW).build(e, "v3"), s = i ? i.build(e, "f") : void 0, c = `reflect( -normalize( ${o} ), ${a} )`;
					s && (c = `normalize( mix( ${c}, ${a}, ${s} * ${s} ) )`);
					let l = `inverseTransformDirection( ${c}, viewMatrix )`;
					n ? (e.addNodeCode(`vec3 reflectVec = ${l};`), r = "reflectVec") : r = l;
					break;
				}
				case sn.CUBE: {
					let t = new sn(sn.VECTOR).build(e, "v3"), i = "vec3( -" + t + ".x, " + t + ".yz )";
					n ? (e.addNodeCode(`vec3 reflectCubeVec = ${i};`), r = "reflectCubeVec") : r = i;
					break;
				}
				case sn.SPHERE: {
					let t = "normalize( ( viewMatrix * vec4( " + new sn(sn.VECTOR).build(e, "v3") + ", 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) ).xy * 0.5 + 0.5";
					n ? (e.addNodeCode(`vec2 reflectSphereVec = ${t};`), r = "reflectSphereVec") : r = t;
					break;
				}
			}
			return e.format(r, this.getType(), t);
		}
		return console.warn("ReflectNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.type, t);
	}
}, cn = sn;
cn.CUBE = "cube", cn.SPHERE = "sphere", cn.VECTOR = "vector";
var ln = class extends V {
	constructor(e = new Xt(), t, n) {
		super("v4"), this.nodeType = "TextureCube", this.value = e, this.radianceNode = new tn(this.value, t ?? new cn(cn.VECTOR), n), this.irradianceNode = new tn(this.value, new rn(rn.WORLD), new G(1).setReadonly(!0));
	}
	generate(e, t) {
		return e.isShader("fragment") ? (e.require("irradiance"), e.context.bias && e.context.bias.setTexture(this.value), (e.slot === "irradiance" ? this.irradianceNode : this.radianceNode).build(e, t)) : (console.warn("TextureCubeNode is not compatible with " + e.shader + " shader."), e.format("vec4( 0.0 )", this.getType(e), t));
	}
}, un = class extends It {
	constructor(e = new n(), t, r) {
		super("v4", { shared: !0 }), this.nodeType = "CubeTexture", this.value = e, this.uv = t ?? new cn(), this.bias = r;
	}
	getTexture(e, t) {
		return super.generate(e, t, this.value.uuid, "tc");
	}
	generate(e, t) {
		if (t === "samplerCube") return this.getTexture(e, t);
		let n, r = this.getTexture(e, t), i = this.uv?.build(e, "v3"), a = this.bias ? this.bias.build(e, "f") : void 0;
		a === void 0 && e.context.bias && (a = e.context.bias.setTexture(this).build(e, "f")), n = a ? "texCubeBias( " + r + ", " + i + ", " + a + " )" : "texCube( " + r + ", " + i + " )";
		let o = {
			include: e.isShader("vertex"),
			ignoreCache: !0
		}, s = this.getType(e);
		return e.addContext(o), this.colorSpace = this.colorSpace ?? new Yt(new W("", s)), this.colorSpace.fromDecoding(e.getTextureEncodingFromMap(this.value)), this.colorSpace.input.parse(n), n = this.colorSpace.build(e, s), e.removeContext(), e.format(n, s, t);
	}
}, dn = [
	"x",
	"y",
	"z",
	"w"
], fn = [
	"float",
	"vec2",
	"vec3",
	"vec4"
], pn = {
	float: "f",
	vec2: "v2",
	vec3: "v3",
	vec4: "v4",
	mat4: "v4",
	int: "i",
	bool: "b",
	"float[]": "f[]",
	"vec4[]": "v4[]"
}, mn = {
	t: "sampler2D",
	tc: "samplerCube",
	b: "bool",
	i: "int",
	f: "float",
	c: "vec3",
	v2: "vec2",
	v3: "vec3",
	v4: "vec4",
	m3: "mat3",
	m4: "mat4",
	"f[]": "float[]",
	"v4[]": "vec4[]"
}, hn = class {
	constructor() {
		this.includes = {
			consts: {},
			functions: {},
			structs: {}
		}, this.cache = "", this.slot = "", this.shader = "", this.context = {}, this.needsJitter = !0, this.getIncludesCode = function() {
			function e(e, t) {
				return e.deps.length - t.deps.length;
			}
			return function(t, n) {
				let r = this.getIncludes(t, n);
				if (!r) return "";
				let i = "";
				r = r.sort(e);
				for (let e = 0; e < r.length; e++) r[e].src && (i += r[e].src + "\n");
				return i;
			};
		}(), this.slots = [], this.caches = [], this.contexts = [], this.keywords = {}, this.nodeData = {}, this.fragmentVariables = {}, this.fragmentParsVariables = {}, this.vertexParsVariables = {}, this.requires = {
			uv: [],
			color: [],
			transparent: !1,
			irradiance: !1,
			position: !1,
			worldPosition: !1,
			normal: !1,
			worldNormal: !1,
			vWorldViewDir: !1,
			modelMatrix: !1,
			viewMatrix: !1,
			projectionMatrix: !1
		}, this.includes = {
			consts: [],
			functions: [],
			structs: []
		}, this.attributes = {}, this.prefixCode = [
			"#ifdef TEXTURE_LOD_EXT",
			"	#define texCube(a, b) textureCube(a, b)",
			"	#define texCubeBias(a, b, c) textureCubeLodEXT(a, b, c)",
			"	#define tex2D(a, b) texture2D(a, b)",
			"	#define tex2DBias(a, b, c) texture2DLodEXT(a, b, c)",
			"#else",
			"	#define texCube(a, b) textureCube(a, b)",
			"	#define texCubeBias(a, b, c) textureCube(a, b, c)",
			"	#define tex2D(a, b) texture2D(a, b)",
			"	#define tex2DBias(a, b, c) texture2D(a, b, c)",
			"#endif",
			"\n			\n			#define SPE_BLENDING_NORMAL 0\n			#define SPE_BLENDING_MULTIPLY 1\n			#define SPE_BLENDING_SCREEN 2\n			#define SPE_BLENDING_OVERLAY 3\n\n			vec3 spe_normalBlend( vec3 a, vec3 b, float alpha ) {\n				return mix( a, b, alpha );\n			}\n\n			vec3 spe_multiplyBlend( vec3 a, vec3 b, float alpha ) {\n				return mix( a, a * b, alpha );\n			}\n\n			vec3 spe_screenBlend( vec3 a, vec3 b, float alpha ) {\n				vec3 tmp = 1.0 - ( 1.0 - a ) * ( 1.0 - b );\n				return mix( a, tmp, alpha );\n			}\n\n			vec3 spe_overlayBlend( vec3 a, vec3 b, float alpha ) {\n				vec3 tmp = mix( 1. - 2. * (1. - a) * (1. - b), 2. * a * b, step( a, vec3(.5) ) );\n				return clamp( mix( a, tmp, alpha ), 0.0, 1.0 );\n			}\n\n			vec3 spe_blend( vec3 a, vec3 b, float alpha, int mode ) {\n				if ( mode == SPE_BLENDING_NORMAL ) return spe_normalBlend( a, b, alpha );\n				else if ( mode == SPE_BLENDING_MULTIPLY ) return spe_multiplyBlend( a, b, alpha );\n				else if ( mode == SPE_BLENDING_SCREEN ) return spe_screenBlend( a, b, alpha );\n				else if ( mode == SPE_BLENDING_OVERLAY ) return spe_overlayBlend( a, b, alpha );\n				return vec3( 1.0 );\n			}\n			",
			"#include <packing>",
			"#include <common>"
		].join("\n"), this.parsCode = {
			vertex: ["float neighbor_offset = 0.0001;", ""].join("\n"),
			fragment: [
				"float accumAlpha = 0.0;",
				"void accumulateAlpha(float alpha) {\n					accumAlpha += (1.0 - accumAlpha) * alpha;\n				}",
				""
			].join("\n")
		}, this.code = {
			vertex: "",
			fragment: ""
		}, this.nodeCode = {
			vertex: "",
			fragment: ""
		}, this.resultCode = {
			vertex: "",
			fragment: ""
		}, this.finalCode = {
			vertex: "",
			fragment: ""
		}, this.inputs = {
			uniforms: {
				list: [],
				vertex: [],
				fragment: []
			},
			arrayUniforms: {
				list: [],
				vertex: [],
				fragment: []
			},
			vars: {
				varying: [],
				vertex: [],
				fragment: []
			}
		}, this.defines = {}, this.uniforms = {}, this.extensions = {
			derivatives: !1,
			fragDepth: !1,
			drawBuffers: !1,
			shaderTextureLOD: !1
		}, this.updaters = [], this.nodes = [], this.analyzing = !1;
	}
	build(e, t) {
		this.addVertexParsCode("\nuniform int frameIndex;\nuniform vec2 resolution;\nuniform mat4 previousModelViewMatrix;\nuniform mat4 previousProjectionMatrix;\n\nvarying vec4 vCurrentPosition;\nvarying vec4 vPreviousPosition;\n"), this.addFragmentParsCode("\nlayout(location = 1) out vec4 gVelocity;\n\nuniform int frameIndex;\nuniform vec2 resolution;\n\nvarying vec4 vCurrentPosition;\nvarying vec4 vPreviousPosition;\n\nconst vec2 haltonSequence[16] = vec2[16](\nvec2( 0.000000,-0.333334),\nvec2(-0.500000, 0.333334),\nvec2( 0.500000,-0.777778),\nvec2(-0.750000,-0.111112),\nvec2( 0.250000, 0.555556),\nvec2(-0.250000,-0.555556),\nvec2( 0.750000, 0.111112),\nvec2(-0.875000, 0.777778),\nvec2(0.125000, -0.925926),\nvec2(-0.375000, -0.259260),\nvec2(0.625000, 0.407408),\nvec2(-0.625000, -0.703704),\nvec2(0.375000, -0.037038),\nvec2(-0.125000, 0.629630),\nvec2(0.875000, -0.481482),\nvec2(-0.937500, 0.185186));\n\nvec2 vogelDiskSample(int sampleIndex, int sampleCount, float angle) {\n  const float goldenAngle = 2.399963f; \n  float r = sqrt(float(sampleIndex) + 0.5f) / sqrt(float(sampleCount));\n  float theta = float(sampleIndex) * goldenAngle + angle;\n  float sine = sin(theta);\n  float cosine = cos(theta);\n  return vec2(cosine, sine) * r;\n}\n\n\nfloat getNoiseInterleavedGradient(vec2 screenPos) {\n    vec3 magic = vec3(0.06711056f, 0.00583715f, 52.9829189f);\n    return fract(magic.z * fract(dot(screenPos, magic.xy)));\n}\n\n"), this.buildShader("vertex", e), this.buildShader("fragment", t);
		for (let e = 0; e < this.requires.uv.length; e++) if (this.requires.uv[e]) {
			let t = e > 0 ? e + 1 : "";
			this.addVaryCode("varying vec2 vUv" + t + ";"), e > 0 && this.addVertexParsCode("attribute vec2 uv" + t + ";"), this.addVertexFinalCode("vUv" + t + " = uv" + t + ";");
		}
		return this.requires.color[0] && (this.addVaryCode("varying vec4 vColor;"), this.addVertexFinalCode("\n				#if defined( USE_COLOR_ALPHA )\n					vColor = color;\n				#elif defined( USE_COLOR )\n					vColor = vec4( color, 1.0 );\n				#else\n					vColor = vec4( 1.0 );\n				#endif\n			")), this.requires.color[1] && (this.addVaryCode("varying vec4 vColor2;"), this.addVertexParsCode("attribute vec4 color2;"), this.addVertexFinalCode("vColor2 = color2;")), this.requires.position && (this.addVaryCode("varying vec3 vPosition;"), this.addVertexFinalCode("vPosition = transformed;")), this.requires.worldPosition, this.requires.normal && (this.addVaryCode("varying vec3 vObjectNormal;"), this.addVertexFinalCode("\n				#ifndef SHAPEBLEND \n					vObjectNormal = normal;\n				#else\n					vObjectNormal = objectNormal;\n				#endif\n			")), this.requires.modelMatrix && this.addFragmentParsCode("uniform mat4 modelMatrix;"), this.requires.viewMatrix && this.addFragmentParsCode("uniform mat4 viewMatrix;"), this.requires.projectionMatrix && this.addFragmentParsCode("uniform mat4 projectionMatrix;"), this.requires.worldNormal && (this.addVaryCode("varying vec3 vWNormal;"), this.addVertexFinalCode("vWNormal = inverseTransformDirection( transformedNormal, viewMatrix ).xyz;")), this.requires.vWorldViewDir && (this.addVaryCode("varying vec3 vWorldViewDir;"), this.addVertexFinalCode("vWorldViewDir = isPerspectiveMatrix( projectionMatrix ) ?  ( (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition ) : vec3( -viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2] );")), this.needsJitter && (this.addVertexFinalCode("\n\nconst vec2 haltonSequence[16] = vec2[16](\nvec2( 0.000000,-0.333334),\nvec2(-0.500000, 0.333334),\nvec2( 0.500000,-0.777778),\nvec2(-0.750000,-0.111112),\nvec2( 0.250000, 0.555556),\nvec2(-0.250000,-0.555556),\nvec2( 0.750000, 0.111112),\nvec2(-0.875000, 0.777778),\nvec2(0.125000, -0.925926),\nvec2(-0.375000, -0.259260),\nvec2(0.625000, 0.407408),\nvec2(-0.625000, -0.703704),\nvec2(0.375000, -0.037038),\nvec2(-0.125000, 0.629630),\nvec2(0.875000, -0.481482),\nvec2(-0.937500, 0.185186));\n\n\nvec2 offset = haltonSequence[frameIndex];\noffset.x /= resolution.x;\noffset.y /= resolution.y;\n\nvec4 currentPosition = gl_Position;\nvec4 currentPositionJittered = currentPosition + (vec4(offset.x, offset.y, 0.0, 0.0) * currentPosition.w);\n\n\n\nvCurrentPosition = currentPosition;\nvec4 previousLocalPosition = vec4(transformed, 1.0);\n#ifdef USE_INSTANCING\n\n\n\npreviousLocalPosition = instanceMatrix * previousLocalPosition;\n#endif\nvPreviousPosition = previousProjectionMatrix * previousModelViewMatrix * previousLocalPosition;\n#ifdef OUTLINE_COMPENSATION\nvPreviousPosition.xy += OUTLINE_COMPENSATION;\n#endif\ngl_Position = currentPositionJittered;\n\n"), this.addFragmentFinalCode("\nvec2 oldPos = vPreviousPosition.xy;\n    oldPos /= vPreviousPosition.w;\n    oldPos.xy = (oldPos.xy+1.)/2.0;\n\nvec2 newPos = vCurrentPosition.xy;\n    newPos /= vCurrentPosition.w;\n    newPos.xy = (newPos.xy+1.)/2.0;\n\nvec2 velocity = (newPos - oldPos);\n\n\nif (gl_FragColor.a <= 0.0) discard;\n\ngVelocity = vec4(velocity, 0.0, 1.0);\n")), this;
	}
	buildShader(e, t) {
		this.resultCode[e] = t.build(this.setShader(e), "v4");
	}
	setMaterial(e, t) {
		return this.defines = {}, this;
	}
	addFlow(e, t, n) {
		return this.addSlot(e).addCache(t).addContext(n);
	}
	removeFlow() {
		return this.removeSlot().removeCache().removeContext();
	}
	addCache(e) {
		return this.cache = e ?? "", this.caches.push(this.cache), this;
	}
	removeCache() {
		return this.caches.pop(), this.cache = this.caches[this.caches.length - 1] || "", this;
	}
	addContext(e) {
		return this.context = Object.assign({}, this.context, e), this.context.extra = this.context.extra || {}, this.contexts.push(this.context), this;
	}
	removeContext() {
		return this.contexts.pop(), this.context = this.contexts[this.contexts.length - 1] || {}, this;
	}
	addSlot(e) {
		return this.slot = e || "", this.slots.push(this.slot), this;
	}
	removeSlot() {
		return this.slots.pop(), this.slot = this.slots[this.slots.length - 1] || "", this;
	}
	addFragmentVariable(e, t) {
		this.fragmentVariables[e] === void 0 && (this.addFragmentCode(`${t} ${e};`), this.fragmentVariables[e] = "");
	}
	addFragmentParsVariable(e, t) {
		this.fragmentParsVariables[e] === void 0 && (this.addFragmentParsCode(`${t} ${e};`), this.fragmentParsVariables[e] = "");
	}
	addVertexParsVariable(e, t) {
		this.vertexParsVariables[e] === void 0 && (this.addVertexParsCode(`${t} ${e};`), this.vertexParsVariables[e] = "");
	}
	addVertexCode(e) {
		this.addCode(e, "vertex");
	}
	addFragmentCode(e) {
		this.addCode(e, "fragment");
	}
	addCode(e, t) {
		this.code[t ?? this.shader] += e + "\n";
	}
	addVertexNodeCode(e) {
		this.addNodeCode(e, "vertex");
	}
	addFragmentNodeCode(e) {
		this.addNodeCode(e, "fragment");
	}
	addNodeCode(e, t) {
		this.nodeCode[t ?? this.shader] += e + "\n";
	}
	clearNodeCode(e) {
		e ??= this.shader;
		let t = this.nodeCode[e];
		return this.nodeCode[e] = "", t;
	}
	clearVertexNodeCode() {
		return this.clearNodeCode("vertex");
	}
	clearFragmentNodeCode() {
		return this.clearNodeCode("fragment");
	}
	addVertexFinalCode(e) {
		this.addFinalCode(e, "vertex");
	}
	addFragmentFinalCode(e) {
		this.addFinalCode(e, "fragment");
	}
	addFinalCode(e, t) {
		this.finalCode[t ?? this.shader] += e + "\n";
	}
	addVertexParsCode(e) {
		this.addParsCode(e, "vertex");
	}
	addFragmentParsCode(e) {
		this.addParsCode(e, "fragment");
	}
	addParsCode(e, t) {
		this.parsCode[t ?? this.shader] += e + "\n";
	}
	addVaryCode(e) {
		this.addVertexParsCode(e), this.addFragmentParsCode(e);
	}
	isCache(e) {
		return this.caches.indexOf(e) !== -1;
	}
	isSlot(e) {
		return this.slots.indexOf(e) !== -1;
	}
	define(e, t) {
		this.defines[e] = t === void 0 ? 1 : t;
	}
	require(e) {
		this.requires[e] = !0;
	}
	isDefined(e) {
		return this.defines[e] !== void 0;
	}
	getVar(e, t, n, r = "varying", i = "V", a = "") {
		let o = this.getVars(r), s = o[e];
		if (!s) {
			let r = o.length;
			s = {
				name: n || "node" + i + r + (a ? "_" + a : ""),
				type: t
			}, o.push(s), o[e] = s;
		}
		return s;
	}
	getTempVar(e, t, n, r) {
		return this.getVar(e, t, n, this.shader, "T", r);
	}
	getAttribute(e, t) {
		if (!this.attributes[e]) {
			let n = this.getVar(e, t);
			this.addVertexParsCode("attribute " + t + " " + e + ";"), this.addVertexFinalCode(n.name + " = " + e + ";"), this.attributes[e] = {
				varying: n,
				name: e,
				type: t
			};
		}
		return this.attributes[e];
	}
	getCode(e) {
		return [
			this.prefixCode,
			this.parsCode[e],
			this.getVarListCode(this.getVars("varying"), "varying"),
			this.getVarListCode(this.inputs.uniforms[e], "uniform"),
			this.getVarListCode(this.inputs.arrayUniforms[e], "uniform"),
			this.getIncludesCode("consts", e),
			this.getIncludesCode("structs", e),
			this.getIncludesCode("functions", e),
			"void main() {",
			this.getVarListCode(this.getVars(e)),
			this.code[e],
			this.resultCode[e],
			this.finalCode[e],
			"}"
		].join("\n");
	}
	getVarListCode(e, t) {
		t ??= "";
		let n = "";
		for (let r = 0, i = e.length; r < i; ++r) {
			let i = e[r], a = i.type, o = i.name, s = i.size, c = this.getFormatByType(a);
			if (c === void 0) throw Error("Node pars " + c + " not found.");
			c.includes("[]") ? n += t + " " + c.substring(0, c.length - 2) + " " + o + `[${s}];\n` : n += t + " " + c + " " + o + ";\n";
		}
		return n;
	}
	getVars(e) {
		return this.inputs.vars[e ?? this.shader];
	}
	getNodeData(e) {
		let t = e instanceof B ? e.uuid : e;
		return this.nodeData[t] = this.nodeData[t] || {};
	}
	createUniform(e, t, n, r, i, a) {
		if (t.includes("[]")) {
			let o = this.inputs.arrayUniforms, s = o.list.length, c = new Pt({
				type: t,
				size: n.size,
				name: r || "nodeUA" + s + (a ? "_" + a : ""),
				node: n,
				needsUpdate: i
			});
			return o.list.push(c), o[e].push(c), o[e][c.name] = c, this.uniforms[c.name] = c, c;
		}
		{
			let o = this.inputs.uniforms, s = o.list.length, c = new Pt({
				type: t,
				name: r || "nodeU" + s + (a ? "_" + a : ""),
				node: n,
				needsUpdate: i
			});
			return o.list.push(c), o[e].push(c), o[e][c.name] = c, this.uniforms[c.name] = c, c;
		}
	}
	createVertexUniform(e, t, n, r, i) {
		return this.createUniform("vertex", e, t, n, r, i);
	}
	createFragmentUniform(e, t, n, r, i) {
		return this.createUniform("fragment", e, t, n, r, i);
	}
	include(e, t, n) {
		let r;
		if (e = typeof e == "string" ? Ft.get(e) : e, !1 === this.context.include) return e.name;
		e instanceof H ? r = this.includes.functions : e instanceof U ? r = this.includes.consts : e instanceof Kt && (r = this.includes.structs);
		let i = r[this.shader] = r[this.shader] || [];
		if (e) {
			let r = i[e.name];
			if (r || (r = i[e.name] = {
				node: e,
				deps: []
			}, i.push(r), r.src = e.build(this, "source")), e instanceof H && t && i[t.name] && i[t.name].deps.indexOf(e) === -1 && (i[t.name].deps.push(e), e.includes?.length)) {
				let n = 0;
				do
					this.include(e.includes[n++], t);
				while (n < e.includes.length);
			}
			return n && (r.src = n), e.name;
		}
		throw Error("Include not found.");
	}
	colorToVectorProperties(e) {
		return e.replace("r", "x").replace("g", "y").replace("b", "z").replace("a", "w");
	}
	colorToVector(e) {
		return e.replace(/c/g, "v3");
	}
	getIncludes(e, t) {
		return this.includes[e][t || this.shader];
	}
	getConstructorFromLength(e) {
		return fn[e - 1];
	}
	isTypeMatrix(e) {
		return /^m/.test(e);
	}
	getTypeLength(e) {
		return e === "f" ? 1 : parseInt(this.colorToVector(e).substr(1));
	}
	getTypeFromLength(e) {
		return e === 1 ? "f" : "v" + e;
	}
	findNode(...e) {
		for (let t = 0; t < arguments.length; t++) {
			let n = e[t];
			if (n?.isNode) return n;
		}
	}
	resolve(...e) {
		for (let t = 0; t < arguments.length; t++) {
			let n = e[t];
			if (n !== void 0) {
				if (n.isNode) return n;
				if (n.isTexture) switch (n.mapping) {
					case 301:
					case 302: return new un(n);
					case 306: return new ln(new Xt(n));
					default: return new Xt(n);
				}
				else {
					if (n.isVector2) return new Lt(n);
					if (n.isVector3) return new Rt(n);
					if (n.isVector4) return new zt(n);
				}
			}
		}
	}
	format(e, t, n) {
		switch (this.colorToVector(n + " <- " + t)) {
			case "f <- v2":
			case "f <- v3":
			case "f <- v4": return e + ".x";
			case "f <- i":
			case "f <- b": return "float( " + e + " )";
			case "v2 <- f": return "vec2( " + e + " )";
			case "v2 <- v3":
			case "v2 <- v4": return e + ".xy";
			case "v2 <- i":
			case "v2 <- b":
			case "v3 <- i":
			case "v3 <- b": return "vec2( float( " + e + " ) )";
			case "v3 <- f": return "vec3( " + e + " )";
			case "v3 <- v2": return "vec3( " + e + ", 0.0 )";
			case "v3 <- v4": return e + ".xyz";
			case "v4 <- f": return "vec4( " + e + " )";
			case "v4 <- v2": return "vec4( " + e + ", 0.0, 1.0 )";
			case "v4 <- v3": return "vec4( " + e + ", 1.0 )";
			case "v4 <- i":
			case "v4 <- b": return "vec4( float( " + e + " ) )";
			case "i <- f":
			case "i <- b": return "int( " + e + " )";
			case "i <- v2":
			case "i <- v3":
			case "i <- v4": return "int( " + e + ".x )";
			case "b <- f": return "( " + e + " != 0.0 )";
			case "b <- v2": return "( " + e + " != vec2( 0.0 ) )";
			case "b <- v3": return "( " + e + " != vec3( 0.0 ) )";
			case "b <- v4": return "( " + e + " != vec4( 0.0 ) )";
			case "b <- i": return "( " + e + " != 0 )";
		}
		return e;
	}
	getTypeByFormat(e) {
		return pn[e] || e;
	}
	getFormatByType(e) {
		return mn[e] || e;
	}
	getUUID(e, t) {
		return (t = t === void 0 || t) && this.cache && (e = this.cache + "-" + e), e;
	}
	getElementByIndex(e) {
		return dn[e];
	}
	getIndexByElement(e) {
		return dn.indexOf(e);
	}
	isShader(e) {
		return this.shader === e;
	}
	setShader(e) {
		return this.shader = e, this;
	}
	mergeDefines(e) {
		for (let t in e) this.defines[t] = e[t];
		return this.defines;
	}
	mergeUniform(e) {
		for (let t in e) this.uniforms[t] = e[t];
		return this.uniforms;
	}
	getTextureEncodingFromMap(e) {
		let t;
		return e ? e.isTexture && (t = e.colorSpace === "srgb" ? Nt : Mt) : t = Mt, t === Mt && this.context.gamma && (t = Nt), t;
	}
}, J = class extends It {
	constructor(e = 0, t, n, r) {
		super("c"), this.nodeType = "Color", this.value = e instanceof I ? e : new I(e || 0, t, n, r);
	}
	setRGBA(e) {
		this.value.setRGBA(e.r, e.g, e.b, e.a);
	}
	generate(e, t, n, r, i, a) {
		n = e.getUUID(n ?? this.getUUID()), r ??= this.getType(e);
		let o = e.getNodeData(n), s = this.getReadonly() && this.generateReadonly !== void 0;
		if (this.alpha) {
			let t = this.alpha.build(e, "f");
			e.addFragmentNodeCode(`accumAlpha += ( 1.0 - accumAlpha ) * ${t};`);
		}
		return s ? this.generateReadonly(e, t, n, r, i, a) : e.isShader("vertex") ? (o.vertex ||= e.createVertexUniform(r, this, i, a, this.getLabel()), e.format(o.vertex.name, r, t)) : (o.fragment ||= e.createFragmentUniform(r, this, i, a, this.getLabel()), e.format(o.fragment.name, r, t));
	}
	generateReadonly(e, t, n, r, i, a) {
		return e.format("vec3(" + this.value.r + ", " + this.value.g + ", " + this.value.b + ")", r, t);
	}
}, Y = class extends It {
	constructor(e) {
		super("i"), this.nodeType = "Int", this.value = Math.floor(e ?? 0);
	}
	generateReadonly(e, t, n, r, i, a) {
		return e.format(this.value.toString(), r, t);
	}
};
function gn() {
	let e = null, t = !1, n = null, r = null;
	function i(t, a) {
		n(t, a), r = e.requestAnimationFrame(i);
	}
	return {
		start: function() {
			!0 !== t && n !== null && e !== null && (r = e.requestAnimationFrame(i), t = !0);
		},
		stop: function() {
			e !== null && e.cancelAnimationFrame(r), t = !1;
		},
		setAnimationLoop: function(e) {
			n = e;
		},
		setContext: function(t) {
			e = t;
		}
	};
}
function _n(e) {
	let t = /* @__PURE__ */ new WeakMap();
	return {
		get: function(e) {
			return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
		},
		remove: function(n) {
			n.isInterleavedBufferAttribute && (n = n.data);
			let r = t.get(n);
			r && (e.deleteBuffer(r.buffer), t.delete(n));
		},
		update: function(n, r) {
			if (n.isInterleavedBufferAttribute && (n = n.data), n.isGLBufferAttribute) {
				let e = t.get(n);
				(!e || e.version < n.version) && t.set(n, {
					buffer: n.buffer,
					type: n.type,
					bytesPerElement: n.elementSize,
					version: n.version
				});
				return;
			}
			let i = t.get(n);
			if (i === void 0) t.set(n, function(t, n) {
				let r, i = t.array, a = t.usage, o = i.byteLength, s = e.createBuffer();
				if (e.bindBuffer(n, s), e.bufferData(n, i, a), t.onUploadCallback(), i instanceof Float32Array) r = e.FLOAT;
				else if (typeof Float16Array < "u" && i instanceof Float16Array) r = e.HALF_FLOAT;
				else if (i instanceof Uint16Array) r = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
				else if (i instanceof Int16Array) r = e.SHORT;
				else if (i instanceof Uint32Array) r = e.UNSIGNED_INT;
				else if (i instanceof Int32Array) r = e.INT;
				else if (i instanceof Int8Array) r = e.BYTE;
				else if (i instanceof Uint8Array) r = e.UNSIGNED_BYTE;
				else {
					if (!(i instanceof Uint8ClampedArray)) throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + i);
					r = e.UNSIGNED_BYTE;
				}
				return {
					buffer: s,
					type: r,
					bytesPerElement: i.BYTES_PER_ELEMENT,
					version: t.version,
					size: o
				};
			}(n, r));
			else if (i.version < n.version) {
				if (i.size !== n.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
				(function(t, n, r) {
					let i = n.array, a = n.updateRanges;
					if (e.bindBuffer(r, t), a.length === 0) e.bufferSubData(r, 0, i);
					else {
						a.sort((e, t) => e.start - t.start);
						let t = 0;
						for (let e = 1; e < a.length; e++) {
							let n = a[t], r = a[e];
							r.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++t, a[t] = r);
						}
						a.length = t + 1;
						for (let t = 0, n = a.length; t < n; t++) {
							let n = a[t];
							e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
						}
						n.clearUpdateRanges();
					}
					n.onUploadCallback();
				})(i.buffer, n, r), i.version = n.version;
			}
		}
	};
}
var X = {
	alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
	alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
	alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
	alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
	alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
	aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
	aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
	batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif",
	batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
	begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
	beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
	bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} ",
	iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
	bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
	clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
	clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
	clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
	clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
	color_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif",
	color_pars_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif",
	color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif",
	color_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif",
	common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\n#define inverseTransformDirection transformDirectionByInverseViewMatrix\nvec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {\n	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );\n}\nvec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} ",
	cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
	defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n#endif",
	displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
	displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
	emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
	emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
	colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
	colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
	envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif",
	envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
	envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
	fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
	fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
	fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
	fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
	gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
	lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
	lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
	lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif\n#include <lightprobes_pars_fragment>",
	lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
	lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
	lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
	lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
	lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
	lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n		vec3 iridescenceFresnelDielectric;\n		vec3 iridescenceFresnelMetallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		return 0.5 / max( gv + gl, EPSILON );\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nvec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;\n	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;\n	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;\n	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;\n	float Ess_V = dfgV.x + dfgV.y;\n	float Ess_L = dfgL.x + dfgL.y;\n	float Ems_V = 1.0 - Ess_V;\n	float Ems_L = 1.0 - Ess_L;\n	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;\n	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );\n	float compensationFactor = Ems_V * Ems_L;\n	vec3 multiScatter = Fms * compensationFactor;\n	return singleScatter + multiScatter;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
	lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n	#ifdef USE_LIGHT_PROBES_GRID\n		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;\n		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );\n		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
	lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
	lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
	lightprobes_pars_fragment: "#ifdef USE_LIGHT_PROBES_GRID\nuniform highp sampler3D probesSH;\nuniform vec3 probesMin;\nuniform vec3 probesMax;\nuniform vec3 probesResolution;\nvec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {\n	vec3 res = probesResolution;\n	vec3 gridRange = probesMax - probesMin;\n	vec3 resMinusOne = res - 1.0;\n	vec3 probeSpacing = gridRange / resMinusOne;\n	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;\n	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );\n	uvw = uvw * resMinusOne / res + 0.5 / res;\n	float nz          = res.z;\n	float paddedSlices = nz + 2.0;\n	float atlasDepth  = 7.0 * paddedSlices;\n	float uvZBase     = uvw.z * nz + 1.0;\n	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );\n	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );\n	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );\n	vec3 c0 = s0.xyz;\n	vec3 c1 = vec3( s0.w, s1.xy );\n	vec3 c2 = vec3( s1.zw, s2.x );\n	vec3 c3 = s2.yzw;\n	vec3 c4 = s3.xyz;\n	vec3 c5 = vec3( s3.w, s4.xy );\n	vec3 c6 = vec3( s4.zw, s5.x );\n	vec3 c7 = s5.yzw;\n	vec3 c8 = s6.xyz;\n	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;\n	vec3 result = c0 * 0.886227;\n	result += c1 * 2.0 * 0.511664 * y;\n	result += c2 * 2.0 * 0.511664 * z;\n	result += c3 * 2.0 * 0.511664 * x;\n	result += c4 * 2.0 * 0.429043 * x * y;\n	result += c5 * 2.0 * 0.429043 * y * z;\n	result += c6 * ( 0.743125 * z * z - 0.247708 );\n	result += c7 * 2.0 * 0.429043 * x * z;\n	result += c8 * 0.429043 * ( x * x - y * y );\n	return max( result, vec3( 0.0 ) );\n}\n#endif",
	logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
	logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
	map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
	map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
	map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
	metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
	morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
	morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
	morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
	normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#if defined( USE_PACKED_NORMALMAP )\n		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );\n	#endif\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
	normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n		#ifdef FLIP_SIDED\n			vBitangent = - vBitangent;\n		#endif\n	#endif\n#endif",
	normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
	clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
	clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
	clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
	iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
	opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
	packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}",
	premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
	project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
	dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
	dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
	roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
	roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
	shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			shadowCoord.z += shadowBias;\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				float radius = shadowRadius * texelSize.x;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp -= shadowBias;\n			#else\n				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp += shadowBias;\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			vec2 sample0 = vogelDiskSample( 0, 5, phi );\n			vec2 sample1 = vogelDiskSample( 1, 5, phi );\n			vec2 sample2 = vogelDiskSample( 2, 5, phi );\n			vec2 sample3 = vogelDiskSample( 3, 5, phi );\n			vec2 sample4 = vogelDiskSample( 4, 5, phi );\n			shadow = (\n				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )\n			) * 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif",
	shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
	shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#ifdef HAS_NORMAL\n		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n	#else\n		vec3 shadowWorldNormal = vec3( 0.0 );\n	#endif\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
	shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
	skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
	skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
	specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
	specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
	tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
	tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
	transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
	transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
	uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
	worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
	background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
	background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
	depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
	distance_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
	distance_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}",
	equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
	equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
	meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
	meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
	meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
	meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
	meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
	points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
}, Z = {
	common: {
		diffuse: { value: new b(16777215) },
		opacity: { value: 1 },
		map: { value: null },
		mapTransform: { value: new P() },
		alphaMap: { value: null },
		alphaMapTransform: { value: new P() },
		alphaTest: { value: 0 }
	},
	specularmap: {
		specularMap: { value: null },
		specularMapTransform: { value: new P() }
	},
	envmap: {
		envMap: { value: null },
		envMapRotation: { value: new P() },
		reflectivity: { value: 1 },
		ior: { value: 1.5 },
		refractionRatio: { value: .98 },
		dfgLUT: { value: null }
	},
	aomap: {
		aoMap: { value: null },
		aoMapIntensity: { value: 1 },
		aoMapTransform: { value: new P() }
	},
	lightmap: {
		lightMap: { value: null },
		lightMapIntensity: { value: 1 },
		lightMapTransform: { value: new P() }
	},
	bumpmap: {
		bumpMap: { value: null },
		bumpMapTransform: { value: new P() },
		bumpScale: { value: 1 }
	},
	normalmap: {
		normalMap: { value: null },
		normalMapTransform: { value: new P() },
		normalScale: { value: new _(1, 1) }
	},
	displacementmap: {
		displacementMap: { value: null },
		displacementMapTransform: { value: new P() },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }
	},
	emissivemap: {
		emissiveMap: { value: null },
		emissiveMapTransform: { value: new P() }
	},
	metalnessmap: {
		metalnessMap: { value: null },
		metalnessMapTransform: { value: new P() }
	},
	roughnessmap: {
		roughnessMap: { value: null },
		roughnessMapTransform: { value: new P() }
	},
	gradientmap: { gradientMap: { value: null } },
	fog: {
		fogDensity: { value: 25e-5 },
		fogNear: { value: 1 },
		fogFar: { value: 2e3 },
		fogColor: { value: new b(16777215) }
	},
	lights: {
		ambientLightColor: { value: [] },
		lightProbe: { value: [] },
		directionalLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		directionalLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		directionalShadowMatrix: { value: [] },
		spotLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				direction: {},
				distance: {},
				coneCos: {},
				penumbraCos: {},
				decay: {}
			}
		},
		spotLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		spotLightMap: { value: [] },
		spotLightMatrix: { value: [] },
		pointLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				decay: {},
				distance: {}
			}
		},
		pointLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {},
				shadowCameraNear: {},
				shadowCameraFar: {}
			}
		},
		pointShadowMatrix: { value: [] },
		hemisphereLights: {
			value: [],
			properties: {
				direction: {},
				skyColor: {},
				groundColor: {}
			}
		},
		rectAreaLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				width: {},
				height: {}
			}
		},
		ltc_1: { value: null },
		ltc_2: { value: null },
		probesSH: { value: null },
		probesMin: { value: new l() },
		probesMax: { value: new l() },
		probesResolution: { value: new l() }
	},
	points: {
		diffuse: { value: new b(16777215) },
		opacity: { value: 1 },
		size: { value: 1 },
		scale: { value: 1 },
		map: { value: null },
		alphaMap: { value: null },
		alphaMapTransform: { value: new P() },
		alphaTest: { value: 0 },
		uvTransform: { value: new P() }
	},
	sprite: {
		diffuse: { value: new b(16777215) },
		opacity: { value: 1 },
		center: { value: new _(.5, .5) },
		rotation: { value: 0 },
		map: { value: null },
		mapTransform: { value: new P() },
		alphaMap: { value: null },
		alphaMapTransform: { value: new P() },
		alphaTest: { value: 0 }
	}
}, vn = {
	basic: {
		uniforms: i([
			Z.common,
			Z.specularmap,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.fog
		]),
		vertexShader: X.meshbasic_vert,
		fragmentShader: X.meshbasic_frag
	},
	lambert: {
		uniforms: i([
			Z.common,
			Z.specularmap,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.fog,
			Z.lights,
			{
				emissive: { value: new b(0) },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: X.meshlambert_vert,
		fragmentShader: X.meshlambert_frag
	},
	phong: {
		uniforms: i([
			Z.common,
			Z.specularmap,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.fog,
			Z.lights,
			{
				emissive: { value: new b(0) },
				specular: { value: new b(1118481) },
				shininess: { value: 30 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: X.meshphong_vert,
		fragmentShader: X.meshphong_frag
	},
	standard: {
		uniforms: i([
			Z.common,
			Z.envmap,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.roughnessmap,
			Z.metalnessmap,
			Z.fog,
			Z.lights,
			{
				emissive: { value: new b(0) },
				roughness: { value: 1 },
				metalness: { value: 0 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: X.meshphysical_vert,
		fragmentShader: X.meshphysical_frag
	},
	toon: {
		uniforms: i([
			Z.common,
			Z.aomap,
			Z.lightmap,
			Z.emissivemap,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.gradientmap,
			Z.fog,
			Z.lights,
			{ emissive: { value: new b(0) } }
		]),
		vertexShader: X.meshtoon_vert,
		fragmentShader: X.meshtoon_frag
	},
	matcap: {
		uniforms: i([
			Z.common,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			Z.fog,
			{ matcap: { value: null } }
		]),
		vertexShader: X.meshmatcap_vert,
		fragmentShader: X.meshmatcap_frag
	},
	points: {
		uniforms: i([Z.points, Z.fog]),
		vertexShader: X.points_vert,
		fragmentShader: X.points_frag
	},
	dashed: {
		uniforms: i([
			Z.common,
			Z.fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		]),
		vertexShader: X.linedashed_vert,
		fragmentShader: X.linedashed_frag
	},
	depth: {
		uniforms: i([Z.common, Z.displacementmap]),
		vertexShader: X.depth_vert,
		fragmentShader: X.depth_frag
	},
	normal: {
		uniforms: i([
			Z.common,
			Z.bumpmap,
			Z.normalmap,
			Z.displacementmap,
			{ opacity: { value: 1 } }
		]),
		vertexShader: X.meshnormal_vert,
		fragmentShader: X.meshnormal_frag
	},
	sprite: {
		uniforms: i([Z.sprite, Z.fog]),
		vertexShader: X.sprite_vert,
		fragmentShader: X.sprite_frag
	},
	background: {
		uniforms: {
			uvTransform: { value: new P() },
			t2D: { value: null },
			backgroundIntensity: { value: 1 }
		},
		vertexShader: X.background_vert,
		fragmentShader: X.background_frag
	},
	backgroundCube: {
		uniforms: {
			envMap: { value: null },
			backgroundBlurriness: { value: 0 },
			backgroundIntensity: { value: 1 },
			backgroundRotation: { value: new P() }
		},
		vertexShader: X.backgroundCube_vert,
		fragmentShader: X.backgroundCube_frag
	},
	cube: {
		uniforms: {
			tCube: { value: null },
			tFlip: { value: -1 },
			opacity: { value: 1 }
		},
		vertexShader: X.cube_vert,
		fragmentShader: X.cube_frag
	},
	equirect: {
		uniforms: { tEquirect: { value: null } },
		vertexShader: X.equirect_vert,
		fragmentShader: X.equirect_frag
	},
	distance: {
		uniforms: i([
			Z.common,
			Z.displacementmap,
			{
				referencePosition: { value: new l() },
				nearDistance: { value: 1 },
				farDistance: { value: 1e3 }
			}
		]),
		vertexShader: X.distance_vert,
		fragmentShader: X.distance_frag
	},
	shadow: {
		uniforms: i([
			Z.lights,
			Z.fog,
			{
				color: { value: new b(0) },
				opacity: { value: 1 }
			}
		]),
		vertexShader: X.shadow_vert,
		fragmentShader: X.shadow_frag
	}
};
vn.physical = {
	uniforms: i([vn.standard.uniforms, {
		clearcoat: { value: 0 },
		clearcoatMap: { value: null },
		clearcoatMapTransform: { value: new P() },
		clearcoatNormalMap: { value: null },
		clearcoatNormalMapTransform: { value: new P() },
		clearcoatNormalScale: { value: new _(1, 1) },
		clearcoatRoughness: { value: 0 },
		clearcoatRoughnessMap: { value: null },
		clearcoatRoughnessMapTransform: { value: new P() },
		dispersion: { value: 0 },
		iridescence: { value: 0 },
		iridescenceMap: { value: null },
		iridescenceMapTransform: { value: new P() },
		iridescenceIOR: { value: 1.3 },
		iridescenceThicknessMinimum: { value: 100 },
		iridescenceThicknessMaximum: { value: 400 },
		iridescenceThicknessMap: { value: null },
		iridescenceThicknessMapTransform: { value: new P() },
		sheen: { value: 0 },
		sheenColor: { value: new b(0) },
		sheenColorMap: { value: null },
		sheenColorMapTransform: { value: new P() },
		sheenRoughness: { value: 1 },
		sheenRoughnessMap: { value: null },
		sheenRoughnessMapTransform: { value: new P() },
		transmission: { value: 0 },
		transmissionMap: { value: null },
		transmissionMapTransform: { value: new P() },
		transmissionSamplerSize: { value: new _() },
		transmissionSamplerMap: { value: null },
		thickness: { value: 0 },
		thicknessMap: { value: null },
		thicknessMapTransform: { value: new P() },
		attenuationDistance: { value: 0 },
		attenuationColor: { value: new b(0) },
		specularColor: { value: new b(1, 1, 1) },
		specularColorMap: { value: null },
		specularColorMapTransform: { value: new P() },
		specularIntensity: { value: 1 },
		specularIntensityMap: { value: null },
		specularIntensityMapTransform: { value: new P() },
		anisotropyVector: { value: new _() },
		anisotropyMap: { value: null },
		anisotropyMapTransform: { value: new P() }
	}]),
	vertexShader: X.meshphysical_vert,
	fragmentShader: X.meshphysical_frag
};
var yn = {
	r: 0,
	b: 0,
	g: 0
}, bn = new De(), xn = new P();
function Sn(e, n, r, i, a, o) {
	let s, l, u = new b(0), d = !0 === a ? 0 : 1, f = null, m = 0, h = null;
	function g(e) {
		let t = !0 === e.isScene ? e.background : null;
		if (t && t.isTexture) {
			let r = e.backgroundBlurriness > 0;
			t = n.get(t, r);
		}
		return t;
	}
	function _(t, n) {
		t.getRGB(yn, xe(e)), r.buffers.color.setClear(yn.r, yn.g, yn.b, n, o);
	}
	return {
		getClearColor: function() {
			return u;
		},
		setClearColor: function(e, t = 1) {
			u.set(e), d = t, _(u, d);
		},
		getClearAlpha: function() {
			return d;
		},
		setClearAlpha: function(e) {
			d = e, _(u, d);
		},
		render: function(t) {
			let n = !1, i = g(t);
			i === null ? _(u, d) : i && i.isColor && (_(i, 1), n = !0);
			let a = e.xr.getEnvironmentBlendMode();
			a === "additive" ? r.buffers.color.setClear(0, 0, 0, 1, o) : a === "alpha-blend" && r.buffers.color.setClear(0, 0, 0, 0, o), (e.autoClear || n) && (r.buffers.depth.setTest(!0), r.buffers.depth.setMask(!0), r.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
		},
		addToRenderList: function(n, r) {
			let a = g(r);
			a && (a.isCubeTexture || a.mapping === 306) ? (l === void 0 && (l = new t(new T(1, 1, 1), new E({
				name: "BackgroundCubeMaterial",
				uniforms: ve(vn.backgroundCube.uniforms),
				vertexShader: vn.backgroundCube.vertexShader,
				fragmentShader: vn.backgroundCube.fragmentShader,
				side: 1,
				depthTest: !1,
				depthWrite: !1,
				fog: !1,
				allowOverride: !1
			})), l.geometry.deleteAttribute("normal"), l.geometry.deleteAttribute("uv"), l.onBeforeRender = function(e, t, n) {
				this.matrixWorld.copyPosition(n.matrixWorld);
			}, Object.defineProperty(l.material, "envMap", { get: function() {
				return this.uniforms.envMap.value;
			} }), i.update(l)), l.material.uniforms.envMap.value = a, l.material.uniforms.backgroundBlurriness.value = r.backgroundBlurriness, l.material.uniforms.backgroundIntensity.value = r.backgroundIntensity, l.material.uniforms.backgroundRotation.value.setFromMatrix4(bn.makeRotationFromEuler(r.backgroundRotation)).transpose(), a.isCubeTexture && !1 === a.isRenderTargetTexture && l.material.uniforms.backgroundRotation.value.premultiply(xn), l.material.toneMapped = c.getTransfer(a.colorSpace) !== O, (f !== a || m !== a.version || h !== e.toneMapping) && (l.material.needsUpdate = !0, f = a, m = a.version, h = e.toneMapping), l.layers.enableAll(), n.unshift(l, l.geometry, l.material, 0, 0, null)) : a && a.isTexture && (s === void 0 && (s = new t(new p(2, 2), new E({
				name: "BackgroundMaterial",
				uniforms: ve(vn.background.uniforms),
				vertexShader: vn.background.vertexShader,
				fragmentShader: vn.background.fragmentShader,
				side: 0,
				depthTest: !1,
				depthWrite: !1,
				fog: !1,
				allowOverride: !1
			})), s.geometry.deleteAttribute("normal"), Object.defineProperty(s.material, "map", { get: function() {
				return this.uniforms.t2D.value;
			} }), i.update(s)), s.material.uniforms.t2D.value = a, s.material.uniforms.backgroundIntensity.value = r.backgroundIntensity, s.material.toneMapped = c.getTransfer(a.colorSpace) !== "srgb", !0 === a.matrixAutoUpdate && a.updateMatrix(), s.material.uniforms.uvTransform.value.copy(a.matrix), (f !== a || m !== a.version || h !== e.toneMapping) && (s.material.needsUpdate = !0, f = a, m = a.version, h = e.toneMapping), s.layers.enableAll(), n.unshift(s, s.geometry, s.material, 0, 0, null));
		},
		dispose: function() {
			l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0), s !== void 0 && (s.geometry.dispose(), s.material.dispose(), s = void 0);
		}
	};
}
function Cn(e, t) {
	let n = e.getParameter(e.MAX_VERTEX_ATTRIBS), r = {}, i = l(null), a = i, o = !1;
	function s(t) {
		return e.bindVertexArray(t);
	}
	function c(t) {
		return e.deleteVertexArray(t);
	}
	function l(e) {
		let t = [], r = [], i = [];
		for (let e = 0; e < n; e++) t[e] = 0, r[e] = 0, i[e] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: t,
			enabledAttributes: r,
			attributeDivisors: i,
			object: e,
			attributes: {},
			index: null
		};
	}
	function u() {
		let e = a.newAttributes;
		for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
	}
	function d(e) {
		f(e, 0);
	}
	function f(t, n) {
		let r = a.newAttributes, i = a.enabledAttributes, o = a.attributeDivisors;
		r[t] = 1, i[t] === 0 && (e.enableVertexAttribArray(t), i[t] = 1), o[t] !== n && (e.vertexAttribDivisor(t, n), o[t] = n);
	}
	function p() {
		let t = a.newAttributes, n = a.enabledAttributes;
		for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0);
	}
	function m(t, n, r, i, a, o, s) {
		!0 === s ? e.vertexAttribIPointer(t, n, r, a, o) : e.vertexAttribPointer(t, n, r, i, a, o);
	}
	function h() {
		g(), o = !0, a !== i && (a = i, s(a.object));
	}
	function g() {
		i.geometry = null, i.program = null, i.wireframe = !1;
	}
	return {
		setup: function(n, i, c, h, g) {
			let _ = !1, v = function(t, n, i, a) {
				let o = !0 === a.wireframe, s = r[n.id];
				s === void 0 && (s = {}, r[n.id] = s);
				let c = !0 === t.isInstancedMesh ? t.id : 0, u = s[c];
				u === void 0 && (u = {}, s[c] = u);
				let d = u[i.id];
				d === void 0 && (d = {}, u[i.id] = d);
				let f = d[o];
				return f === void 0 && (f = l(e.createVertexArray()), d[o] = f), f;
			}(n, h, c, i);
			a !== v && (a = v, s(a.object)), _ = function(e, t, n, r) {
				let i = a.attributes, o = t.attributes, s = 0, c = n.getAttributes();
				for (let t in c) if (c[t].location >= 0) {
					let n = i[t], r = o[t];
					if (r === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (r = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (r = e.instanceColor)), n === void 0 || n.attribute !== r || r && n.data !== r.data) return !0;
					s++;
				}
				return a.attributesNum !== s || a.index !== r;
			}(n, h, c, g), _ && function(e, t, n, r) {
				let i = {}, o = t.attributes, s = 0, c = n.getAttributes();
				for (let t in c) if (c[t].location >= 0) {
					let n = o[t];
					n === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (n = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (n = e.instanceColor));
					let r = {};
					r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, s++;
				}
				a.attributes = i, a.attributesNum = s, a.index = r;
			}(n, h, c, g), g !== null && t.update(g, e.ELEMENT_ARRAY_BUFFER), (_ || o) && (o = !1, function(n, r, i, a) {
				u();
				let o = a.attributes, s = i.getAttributes(), c = r.defaultAttributeValues;
				for (let r in s) {
					let i = s[r];
					if (i.location >= 0) {
						let s = o[r];
						if (s === void 0 && (r === "instanceMatrix" && n.instanceMatrix && (s = n.instanceMatrix), r === "instanceColor" && n.instanceColor && (s = n.instanceColor)), s !== void 0) {
							let r = s.normalized, o = s.itemSize, c = t.get(s);
							if (c === void 0) continue;
							let l = c.buffer, u = c.type, p = c.bytesPerElement, h = u === e.INT || u === e.UNSIGNED_INT || s.gpuType === 1013;
							if (s.isInterleavedBufferAttribute) {
								let t = s.data, c = t.stride, g = s.offset;
								if (t.isInstancedInterleavedBuffer) {
									for (let e = 0; e < i.locationSize; e++) f(i.location + e, t.meshPerAttribute);
									!0 !== n.isInstancedMesh && a._maxInstanceCount === void 0 && (a._maxInstanceCount = t.meshPerAttribute * t.count);
								} else for (let e = 0; e < i.locationSize; e++) d(i.location + e);
								e.bindBuffer(e.ARRAY_BUFFER, l);
								for (let e = 0; e < i.locationSize; e++) m(i.location + e, o / i.locationSize, u, r, c * p, (g + o / i.locationSize * e) * p, h);
							} else {
								if (s.isInstancedBufferAttribute) {
									for (let e = 0; e < i.locationSize; e++) f(i.location + e, s.meshPerAttribute);
									!0 !== n.isInstancedMesh && a._maxInstanceCount === void 0 && (a._maxInstanceCount = s.meshPerAttribute * s.count);
								} else for (let e = 0; e < i.locationSize; e++) d(i.location + e);
								e.bindBuffer(e.ARRAY_BUFFER, l);
								for (let e = 0; e < i.locationSize; e++) m(i.location + e, o / i.locationSize, u, r, o * p, o / i.locationSize * e * p, h);
							}
						} else if (c !== void 0) {
							let t = c[r];
							if (t !== void 0) switch (t.length) {
								case 2:
									e.vertexAttrib2fv(i.location, t);
									break;
								case 3:
									e.vertexAttrib3fv(i.location, t);
									break;
								case 4:
									e.vertexAttrib4fv(i.location, t);
									break;
								default: e.vertexAttrib1fv(i.location, t);
							}
						}
					}
				}
				p();
			}(n, i, c, h), g !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(g).buffer));
		},
		reset: h,
		resetDefaultState: g,
		dispose: function() {
			h();
			for (let e in r) {
				let t = r[e];
				for (let e in t) {
					let n = t[e];
					for (let e in n) {
						let t = n[e];
						for (let e in t) c(t[e].object), delete t[e];
						delete n[e];
					}
				}
				delete r[e];
			}
		},
		releaseStatesOfGeometry: function(e) {
			if (r[e.id] === void 0) return;
			let t = r[e.id];
			for (let e in t) {
				let n = t[e];
				for (let e in n) {
					let t = n[e];
					for (let e in t) c(t[e].object), delete t[e];
					delete n[e];
				}
			}
			delete r[e.id];
		},
		releaseStatesOfObject: function(e) {
			for (let t in r) {
				let n = r[t], i = !0 === e.isInstancedMesh ? e.id : 0, a = n[i];
				if (a !== void 0) {
					for (let e in a) {
						let t = a[e];
						for (let e in t) c(t[e].object), delete t[e];
						delete a[e];
					}
					delete n[i], Object.keys(n).length === 0 && delete r[t];
				}
			}
		},
		releaseStatesOfProgram: function(e) {
			for (let t in r) {
				let n = r[t];
				for (let t in n) {
					let r = n[t];
					if (r[e.id] === void 0) continue;
					let i = r[e.id];
					for (let e in i) c(i[e].object), delete i[e];
					delete r[e.id];
				}
			}
		},
		initAttributes: u,
		enableAttribute: d,
		disableUnusedAttributes: p
	};
}
function wn(e, t, n) {
	let r;
	this.setMode = function(e) {
		r = e;
	}, this.render = function(t, i) {
		e.drawArrays(r, t, i), n.update(i, r, 1);
	}, this.renderInstances = function(t, i, a) {
		a !== 0 && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
	}, this.renderMultiDraw = function(e, i, a) {
		if (a === 0) return;
		t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, e, 0, i, 0, a);
		let o = 0;
		for (let e = 0; e < a; e++) o += i[e];
		n.update(o, r, 1);
	};
}
function Tn(e, t, n, r) {
	let i;
	function a(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let o = n.precision === void 0 ? "highp" : n.precision, s = a(o);
	s !== o && (j("WebGLRenderer:", o, "not supported, using", s, "instead."), o = s);
	let c = !0 === n.logarithmicDepthBuffer, l = !0 === n.reversedDepthBuffer && t.has("EXT_clip_control");
	return !0 === n.reversedDepthBuffer && !1 === l && j("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."), {
		isWebGL2: !0,
		getMaxAnisotropy: function() {
			if (i !== void 0) return i;
			if (!0 === t.has("EXT_texture_filter_anisotropic")) {
				let n = t.get("EXT_texture_filter_anisotropic");
				i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
			} else i = 0;
			return i;
		},
		getMaxPrecision: a,
		textureFormatReadable: function(t) {
			return t === 1023 || r.convert(t) === e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT);
		},
		textureTypeReadable: function(n) {
			let i = n === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
			return !(n !== 1009 && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) && n !== 1015 && !i);
		},
		precision: o,
		logarithmicDepthBuffer: c,
		reversedDepthBuffer: l,
		maxTextures: e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
		maxVertexTextures: e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
		maxTextureSize: e.getParameter(e.MAX_TEXTURE_SIZE),
		maxCubemapSize: e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
		maxAttributes: e.getParameter(e.MAX_VERTEX_ATTRIBS),
		maxVertexUniforms: e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
		maxVaryings: e.getParameter(e.MAX_VARYING_VECTORS),
		maxFragmentUniforms: e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
		maxSamples: e.getParameter(e.MAX_SAMPLES),
		samples: e.getParameter(e.SAMPLES)
	};
}
function En(e) {
	let t = this, n = null, r = 0, i = !1, a = !1, o = new Oe(), s = new P(), c = {
		value: null,
		needsUpdate: !1
	};
	function l(e, n, r, i) {
		let a = e === null ? 0 : e.length, l = null;
		if (a !== 0) {
			if (l = c.value, !0 !== i || l === null) {
				let t = r + 4 * a, i = n.matrixWorldInverse;
				s.getNormalMatrix(i), (l === null || l.length < t) && (l = new Float32Array(t));
				for (let t = 0, n = r; t !== a; ++t, n += 4) o.copy(e[t]).applyMatrix4(i, s), o.normal.toArray(l, n), l[n + 3] = o.constant;
			}
			c.value = l, c.needsUpdate = !0;
		}
		return t.numPlanes = a, t.numIntersection = 0, l;
	}
	this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
		let n = e.length !== 0 || t || r !== 0 || i;
		return i = t, r = e.length, n;
	}, this.beginShadows = function() {
		a = !0, l(null);
	}, this.endShadows = function() {
		a = !1;
	}, this.setGlobalState = function(e, t) {
		n = l(e, t, 0);
	}, this.setState = function(o, s, u) {
		let d = o.clippingPlanes, f = o.clipIntersection, p = o.clipShadows, m = e.get(o);
		if (!i || d === null || d.length === 0 || a && !p) a ? l(null) : (c.value !== n && (c.value = n, c.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0);
		else {
			let e = a ? 0 : r, t = 4 * e, i = m.clippingState || null;
			c.value = i, i = l(d, s, t, u);
			for (let e = 0; e !== t; ++e) i[e] = n[e];
			m.clippingState = i, this.numIntersection = f ? this.numPlanes : 0, this.numPlanes += e;
		}
	};
}
xn.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
var Dn = class extends e {
	constructor(e = 1, t = {}) {
		super(e, e, t), this.isWebGLCubeRenderTarget = !0;
		let r = {
			width: e,
			height: e,
			depth: 1
		}, i = [
			r,
			r,
			r,
			r,
			r,
			r
		];
		this.texture = new n(i), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
	}
	fromEquirectangularTexture(e, n) {
		this.texture.type = n.type, this.texture.colorSpace = n.colorSpace, this.texture.generateMipmaps = n.generateMipmaps, this.texture.minFilter = n.minFilter, this.texture.magFilter = n.magFilter;
		let r = { tEquirect: { value: null } }, i = new T(5, 5, 5), a = new E({
			name: "CubemapFromEquirect",
			uniforms: ve(r),
			vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
			fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			",
			side: 1,
			blending: 0
		});
		a.uniforms.tEquirect.value = n;
		let o = new t(i, a), s = n.minFilter;
		return n.minFilter === 1008 && (n.minFilter = 1006), (() => {
			throw Error("fromEquirectangularTexture is not supported by the Spline runtime");
		})().update(e, o), n.minFilter = s, o.geometry.dispose(), o.material.dispose(), this;
	}
	clear(e, t = !0, n = !0, r = !0) {
		let i = e.getRenderTarget();
		for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
		e.setRenderTarget(i);
	}
};
function On(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = null;
	function i(e, t) {
		return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302), e;
	}
	function a(e) {
		let n = e.target;
		n.removeEventListener("dispose", a);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function o(e) {
		let t = e.target;
		t.removeEventListener("dispose", o);
		let r = n.get(t);
		r !== void 0 && (n.delete(t), r.dispose());
	}
	return {
		get: function(s, c = !1) {
			return s == null ? null : c ? function(e) {
				if (e && e.isTexture) {
					let t = e.mapping, i = t === 303 || t === 304, a = t === 301 || t === 302;
					if (i || a) {
						let t = n.get(e), s = t === void 0 ? 0 : t.texture.pmremVersion;
						if (e.isRenderTargetTexture && e.pmremVersion !== s) {
							if (r === null) throw Error("PMREM environment-map conversion is not supported by the Spline runtime");
							return t = i ? r.fromEquirectangular(e, t) : r.fromCubemap(e, t), t.texture.pmremVersion = e.pmremVersion, n.set(e, t), t.texture;
						}
						if (t !== void 0) return t.texture;
						{
							let s = e.image;
							if (i && s && s.height > 0 || a && s && function(e) {
								let t = 0;
								for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
								return t === 6;
							}(s)) {
								if (r === null) throw Error("PMREM environment-map conversion is not supported by the Spline runtime");
								return t = i ? r.fromEquirectangular(e) : r.fromCubemap(e), t.texture.pmremVersion = e.pmremVersion, n.set(e, t), e.addEventListener("dispose", o), t.texture;
							}
							return null;
						}
					}
				}
				return e;
			}(s) : function(n) {
				if (n && n.isTexture) {
					let r = n.mapping;
					if (r === 303 || r === 304) {
						if (t.has(n)) return i(t.get(n).texture, n.mapping);
						{
							let r = n.image;
							if (r && r.height > 0) {
								let o = new Dn(r.height);
								return o.fromEquirectangularTexture(e, n), t.set(n, o), n.addEventListener("dispose", a), i(o.texture, n.mapping);
							}
							return null;
						}
					}
				}
				return n;
			}(s);
		},
		dispose: function() {
			t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r !== null && (r.dispose(), r = null);
		}
	};
}
function kn(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r = e.getExtension(n);
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function() {
			n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
		},
		get: function(e) {
			let t = n(e);
			return t === null && je("WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function An(e, t, n, r) {
	let i = {}, a = /* @__PURE__ */ new WeakMap();
	function o(e) {
		let s = e.target;
		s.index !== null && t.remove(s.index);
		for (let e in s.attributes) t.remove(s.attributes[e]);
		s.removeEventListener("dispose", o), delete i[s.id];
		let c = a.get(s);
		c && (t.remove(c), a.delete(s)), r.releaseStatesOfGeometry(s), !0 === s.isInstancedBufferGeometry && delete s._maxInstanceCount, n.memory.geometries--;
	}
	function s(e) {
		let n = [], r = e.index, i = e.attributes.position, o = 0;
		if (i === void 0) return;
		if (r !== null) {
			let e = r.array;
			o = r.version;
			for (let t = 0, r = e.length; t < r; t += 3) {
				let r = e[t + 0], i = e[t + 1], a = e[t + 2];
				n.push(r, i, i, a, a, r);
			}
		} else {
			let e = i.array;
			o = i.version;
			for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
				let e = t + 0, r = t + 1, i = t + 2;
				n.push(e, r, r, i, i, e);
			}
		}
		let s = new (i.count >= 65535 ? ne : f)(n, 1);
		s.version = o;
		let c = a.get(e);
		c && t.remove(c), a.set(e, s);
	}
	return {
		get: function(e, t) {
			return !0 === i[t.id] || (t.addEventListener("dispose", o), i[t.id] = !0, n.memory.geometries++), t;
		},
		update: function(n) {
			let r = n.attributes;
			for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
		},
		getWireframeAttribute: function(e) {
			let t = a.get(e);
			if (t) {
				let n = e.index;
				n !== null && t.version < n.version && s(e);
			} else s(e);
			return a.get(e);
		}
	};
}
function jn(e, t, n) {
	let r, i, a;
	this.setMode = function(e) {
		r = e;
	}, this.setIndex = function(e) {
		i = e.type, a = e.bytesPerElement;
	}, this.render = function(t, o) {
		e.drawElements(r, o, i, t * a), n.update(o, r, 1);
	}, this.renderInstances = function(t, o, s) {
		s !== 0 && (e.drawElementsInstanced(r, o, i, t * a, s), n.update(o, r, s));
	}, this.renderMultiDraw = function(e, a, o) {
		if (o === 0) return;
		t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, a, 0, i, e, 0, o);
		let s = 0;
		for (let e = 0; e < o; e++) s += a[e];
		n.update(s, r, 1);
	};
}
function Mn(e) {
	let t = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	return {
		memory: {
			geometries: 0,
			textures: 0
		},
		render: t,
		programs: null,
		autoReset: !0,
		reset: function() {
			t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
		},
		update: function(n, r, i) {
			switch (t.calls++, r) {
				case e.TRIANGLES:
					t.triangles += n / 3 * i;
					break;
				case e.LINES:
					t.lines += n / 2 * i;
					break;
				case e.LINE_STRIP:
					t.lines += i * (n - 1);
					break;
				case e.LINE_LOOP:
					t.lines += i * n;
					break;
				case e.POINTS:
					t.points += i * n;
					break;
				default: M("WebGLInfo: Unknown draw mode:", r);
			}
		}
	};
}
function Nn(e, t, n) {
	let r = /* @__PURE__ */ new WeakMap(), i = new N();
	return { update: function(a, o, s) {
		let c = a.morphTargetInfluences, l = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = l === void 0 ? 0 : l.length, d = r.get(o);
		if (d === void 0 || d.count !== u) {
			let e = function() {
				v.dispose(), r.delete(o), o.removeEventListener("dispose", e);
			};
			d !== void 0 && d.texture.dispose();
			let n = o.morphAttributes.position !== void 0, a = o.morphAttributes.normal !== void 0, s = o.morphAttributes.color !== void 0, c = o.morphAttributes.position || [], l = o.morphAttributes.normal || [], f = o.morphAttributes.color || [], p = 0;
			!0 === n && (p = 1), !0 === a && (p = 2), !0 === s && (p = 3);
			let m = o.attributes.position.count * p, h = 1;
			m > t.maxTextureSize && (h = Math.ceil(m / t.maxTextureSize), m = t.maxTextureSize);
			let g = new Float32Array(m * h * 4 * u), v = new we(g, m, h, u);
			v.type = Be, v.needsUpdate = !0;
			let y = 4 * p;
			for (let e = 0; e < u; e++) {
				let t = c[e], r = l[e], o = f[e], u = m * h * 4 * e;
				for (let e = 0; e < t.count; e++) {
					let c = e * y;
					!0 === n && (i.fromBufferAttribute(t, e), g[u + c + 0] = i.x, g[u + c + 1] = i.y, g[u + c + 2] = i.z, g[u + c + 3] = 0), !0 === a && (i.fromBufferAttribute(r, e), g[u + c + 4] = i.x, g[u + c + 5] = i.y, g[u + c + 6] = i.z, g[u + c + 7] = 0), !0 === s && (i.fromBufferAttribute(o, e), g[u + c + 8] = i.x, g[u + c + 9] = i.y, g[u + c + 10] = i.z, g[u + c + 11] = o.itemSize === 4 ? i.w : 1);
				}
			}
			d = {
				count: u,
				texture: v,
				size: new _(m, h)
			}, r.set(o, d), o.addEventListener("dispose", e);
		}
		if (!0 === a.isInstancedMesh && a.morphTexture !== null) s.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
		else {
			let t = 0;
			for (let e = 0; e < c.length; e++) t += c[e];
			let n = o.morphTargetsRelative ? 1 : 1 - t;
			s.getUniforms().setValue(e, "morphTargetBaseInfluence", n), s.getUniforms().setValue(e, "morphTargetInfluences", c);
		}
		s.getUniforms().setValue(e, "morphTargetsTexture", d.texture, n), s.getUniforms().setValue(e, "morphTargetsTextureSize", d.size);
	} };
}
function Pn(e, t, n, r, i) {
	let a = /* @__PURE__ */ new WeakMap();
	function o(e) {
		let t = e.target;
		t.removeEventListener("dispose", o), r.releaseStatesOfObject(t), n.remove(t.instanceMatrix), t.instanceColor !== null && n.remove(t.instanceColor);
	}
	return {
		update: function(r) {
			let s = i.render.frame, c = r.geometry, l = t.get(r, c);
			if (a.get(l) !== s && (t.update(l), a.set(l, s)), r.isInstancedMesh && (!1 === r.hasEventListener("dispose", o) && r.addEventListener("dispose", o), a.get(r) !== s && (n.update(r.instanceMatrix, e.ARRAY_BUFFER), r.instanceColor !== null && n.update(r.instanceColor, e.ARRAY_BUFFER), a.set(r, s))), r.isSkinnedMesh) {
				let e = r.skeleton;
				a.get(e) !== s && (e.update(), a.set(e, s));
			}
			return l;
		},
		dispose: function() {
			a = /* @__PURE__ */ new WeakMap();
		}
	};
}
var Fn = {
	1: "LINEAR_TONE_MAPPING",
	2: "REINHARD_TONE_MAPPING",
	3: "CINEON_TONE_MAPPING",
	4: "ACES_FILMIC_TONE_MAPPING",
	6: "AGX_TONE_MAPPING",
	7: "NEUTRAL_TONE_MAPPING",
	5: "CUSTOM_TONE_MAPPING"
};
function In(n, r, i, o, s, l) {
	let u = new e(r, i, {
		type: n,
		depthBuffer: s,
		stencilBuffer: l,
		samples: o ? 4 : 0,
		depthTexture: s ? new Ee(r, i) : void 0
	}), d = new e(r, i, {
		type: a,
		depthBuffer: !1,
		stencilBuffer: !1
	}), f = new Ve();
	f.setAttribute("position", new h([
		-1,
		3,
		0,
		-1,
		-1,
		0,
		3,
		-1,
		0
	], 3)), f.setAttribute("uv", new h([
		0,
		2,
		0,
		0,
		2,
		0
	], 2));
	let p, m = new ye({
		uniforms: { tDiffuse: { value: null } },
		vertexShader: "\n			precision highp float;\n\n			uniform mat4 modelViewMatrix;\n			uniform mat4 projectionMatrix;\n\n			attribute vec3 position;\n			attribute vec2 uv;\n\n			varying vec2 vUv;\n\n			void main() {\n				vUv = uv;\n				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n			}",
		fragmentShader: "\n			precision highp float;\n\n			uniform sampler2D tDiffuse;\n\n			varying vec2 vUv;\n\n			#include <tonemapping_pars_fragment>\n			#include <colorspace_pars_fragment>\n\n			void main() {\n				gl_FragColor = texture2D( tDiffuse, vUv );\n\n				#ifdef LINEAR_TONE_MAPPING\n					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n				#elif defined( REINHARD_TONE_MAPPING )\n					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n				#elif defined( CINEON_TONE_MAPPING )\n					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n				#elif defined( ACES_FILMIC_TONE_MAPPING )\n					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n				#elif defined( AGX_TONE_MAPPING )\n					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n				#elif defined( NEUTRAL_TONE_MAPPING )\n					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n				#elif defined( CUSTOM_TONE_MAPPING )\n					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n				#endif\n\n				#ifdef SRGB_TRANSFER\n					gl_FragColor = sRGBTransferOETF( gl_FragColor );\n				#endif\n			}",
		depthTest: !1,
		depthWrite: !1
	}), g = new t(f, m), _ = new re(-1, 1, 1, -1, 0, 1), v = null, y = null, b = !1, x = null, S = [], C = !1;
	this.setSize = function(e, t) {
		u.setSize(e, t), d.setSize(e, t);
		for (let n = 0; n < S.length; n++) {
			let r = S[n];
			r.setSize && r.setSize(e, t);
		}
	}, this.setEffects = function(e) {
		S = e, C = S.length > 0 && !0 === S[0].isRenderPass;
		let t = u.width, n = u.height;
		for (let e = 0; e < S.length; e++) {
			let r = S[e];
			r.setSize && r.setSize(t, n);
		}
	}, this.begin = function(e, t) {
		if (b || e.toneMapping === 0 && S.length === 0) return !1;
		if (x = t, t !== null) {
			let e = t.width, n = t.height;
			(u.width !== e || u.height !== n) && this.setSize(e, n);
		}
		return !1 === C && e.setRenderTarget(u), p = e.toneMapping, e.toneMapping = 0, !0;
	}, this.hasRenderPass = function() {
		return C;
	}, this.end = function(e, t) {
		e.toneMapping = p, b = !0;
		let n = u, r = d;
		for (let i = 0; i < S.length; i++) {
			let a = S[i];
			if (!1 !== a.enabled && (a.render(e, r, n, t), !1 !== a.needsSwap)) {
				let e = n;
				n = r, r = e;
			}
		}
		if (v !== e.outputColorSpace || y !== e.toneMapping) {
			v = e.outputColorSpace, y = e.toneMapping, m.defines = {}, c.getTransfer(v) === "srgb" && (m.defines.SRGB_TRANSFER = "");
			let t = Fn[y];
			t && (m.defines[t] = ""), m.needsUpdate = !0;
		}
		m.uniforms.tDiffuse.value = n.texture, e.setRenderTarget(x), e.render(g, _), x = null, b = !1;
	}, this.isCompositing = function() {
		return b;
	}, this.dispose = function() {
		u.depthTexture && u.depthTexture.dispose(), u.dispose(), d.dispose(), f.dispose(), m.dispose();
	};
}
var Ln = new m(), Rn = new Ee(1, 1), zn = new we(), Bn = new r(), Vn = new n(), Hn = [], Un = [], Wn = /* @__PURE__ */ new Float32Array(16), Gn = /* @__PURE__ */ new Float32Array(9), Kn = /* @__PURE__ */ new Float32Array(4);
function qn(e, t, n) {
	let r = e[0];
	if (r == null || r <= 0 || r > 0) return e;
	let i = t * n, a = Hn[i];
	if (a === void 0 && (a = new Float32Array(i), Hn[i] = a), t !== 0) {
		r.toArray(a, 0);
		for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i);
	}
	return a;
}
function Jn(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Yn(e, t) {
	for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function Xn(e, t) {
	let n = Un[t];
	n === void 0 && (n = new Int32Array(t), Un[t] = n);
	for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function Zn(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function Qn(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Jn(n, t)) return;
		e.uniform2fv(this.addr, t), Yn(n, t);
	}
}
function $n(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else if (t.r !== void 0) (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
	else {
		if (Jn(n, t)) return;
		e.uniform3fv(this.addr, t), Yn(n, t);
	}
}
function er(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Jn(n, t)) return;
		e.uniform4fv(this.addr, t), Yn(n, t);
	}
}
function tr(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Jn(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), Yn(n, t);
	} else {
		if (Jn(n, r)) return;
		Kn.set(r), e.uniformMatrix2fv(this.addr, !1, Kn), Yn(n, r);
	}
}
function nr(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Jn(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), Yn(n, t);
	} else {
		if (Jn(n, r)) return;
		Gn.set(r), e.uniformMatrix3fv(this.addr, !1, Gn), Yn(n, r);
	}
}
function rr(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (Jn(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), Yn(n, t);
	} else {
		if (Jn(n, r)) return;
		Wn.set(r), e.uniformMatrix4fv(this.addr, !1, Wn), Yn(n, r);
	}
}
function ir(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function ar(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Jn(n, t)) return;
		e.uniform2iv(this.addr, t), Yn(n, t);
	}
}
function or(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (Jn(n, t)) return;
		e.uniform3iv(this.addr, t), Yn(n, t);
	}
}
function sr(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Jn(n, t)) return;
		e.uniform4iv(this.addr, t), Yn(n, t);
	}
}
function cr(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function lr(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (Jn(n, t)) return;
		e.uniform2uiv(this.addr, t), Yn(n, t);
	}
}
function ur(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (Jn(n, t)) return;
		e.uniform3uiv(this.addr, t), Yn(n, t);
	}
}
function dr(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (Jn(n, t)) return;
		e.uniform4uiv(this.addr, t), Yn(n, t);
	}
}
function fr(e, t, n) {
	let r, i = this.cache, a = n.allocateTextureUnit();
	i[0] !== a && (e.uniform1i(this.addr, a), i[0] = a), this.type === e.SAMPLER_2D_SHADOW ? (Rn.compareFunction = n.isReversedDepthBuffer() ? 518 : 515, r = Rn) : r = Ln, n.setTexture2D(t || r, a);
}
function pr(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || Bn, i);
}
function mr(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTextureCube(t || Vn, i);
}
function hr(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || zn, i);
}
function gr(e, t) {
	e.uniform1fv(this.addr, t);
}
function _r(e, t) {
	let n = qn(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function vr(e, t) {
	let n = qn(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function yr(e, t) {
	let n = qn(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function br(e, t) {
	let n = qn(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function xr(e, t) {
	let n = qn(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function Sr(e, t) {
	let n = qn(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function Cr(e, t) {
	e.uniform1iv(this.addr, t);
}
function wr(e, t) {
	e.uniform2iv(this.addr, t);
}
function Tr(e, t) {
	e.uniform3iv(this.addr, t);
}
function Er(e, t) {
	e.uniform4iv(this.addr, t);
}
function Dr(e, t) {
	e.uniform1uiv(this.addr, t);
}
function Or(e, t) {
	e.uniform2uiv(this.addr, t);
}
function kr(e, t) {
	e.uniform3uiv(this.addr, t);
}
function Ar(e, t) {
	e.uniform4uiv(this.addr, t);
}
function jr(e, t, n) {
	let r, i = this.cache, a = t.length, o = Xn(n, a);
	Jn(i, o) || (e.uniform1iv(this.addr, o), Yn(i, o)), r = this.type === e.SAMPLER_2D_SHADOW ? Rn : Ln;
	for (let e = 0; e !== a; ++e) n.setTexture2D(t[e] || r, o[e]);
}
function Mr(e, t, n) {
	let r = this.cache, i = t.length, a = Xn(n, i);
	Jn(r, a) || (e.uniform1iv(this.addr, a), Yn(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || Bn, a[e]);
}
function Nr(e, t, n) {
	let r = this.cache, i = t.length, a = Xn(n, i);
	Jn(r, a) || (e.uniform1iv(this.addr, a), Yn(r, a));
	for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || Vn, a[e]);
}
function Pr(e, t, n) {
	let r = this.cache, i = t.length, a = Xn(n, i);
	Jn(r, a) || (e.uniform1iv(this.addr, a), Yn(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || zn, a[e]);
}
var Fr = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = function(e) {
			switch (e) {
				case 5126: return Zn;
				case 35664: return Qn;
				case 35665: return $n;
				case 35666: return er;
				case 35674: return tr;
				case 35675: return nr;
				case 35676: return rr;
				case 5124:
				case 35670: return ir;
				case 35667:
				case 35671: return ar;
				case 35668:
				case 35672: return or;
				case 35669:
				case 35673: return sr;
				case 5125: return cr;
				case 36294: return lr;
				case 36295: return ur;
				case 36296: return dr;
				case 35678:
				case 36198:
				case 36298:
				case 36306:
				case 35682: return fr;
				case 35679:
				case 36299:
				case 36307: return pr;
				case 35680:
				case 36300:
				case 36308:
				case 36293: return mr;
				case 36289:
				case 36303:
				case 36311:
				case 36292: return hr;
			}
		}(t.type);
	}
}, Ir = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = function(e) {
			switch (e) {
				case 5126: return gr;
				case 35664: return _r;
				case 35665: return vr;
				case 35666: return yr;
				case 35674: return br;
				case 35675: return xr;
				case 35676: return Sr;
				case 5124:
				case 35670: return Cr;
				case 35667:
				case 35671: return wr;
				case 35668:
				case 35672: return Tr;
				case 35669:
				case 35673: return Er;
				case 5125: return Dr;
				case 36294: return Or;
				case 36295: return kr;
				case 36296: return Ar;
				case 35678:
				case 36198:
				case 36298:
				case 36306:
				case 35682: return jr;
				case 35679:
				case 36299:
				case 36307: return Mr;
				case 35680:
				case 36300:
				case 36308:
				case 36293: return Nr;
				case 36289:
				case 36303:
				case 36311:
				case 36292: return Pr;
			}
		}(t.type);
	}
}, Lr = class {
	constructor(e) {
		this.id = e, this.seq = [], this.map = {};
	}
	setValue(e, t, n) {
		if (t === void 0) return;
		let r = this.seq;
		for (let i = 0, a = r.length; i !== a; ++i) {
			let a = r[i];
			a.setValue(e, t[a.id], n);
		}
	}
}, Rr = /(\w+)(\])?(\[|\.)?/g;
function zr(e, t) {
	e.seq.push(t), e.map[t.id] = t;
}
function Br(e, t, n) {
	let r = e.name, i = r.length;
	for (Rr.lastIndex = 0;;) {
		let a = Rr.exec(r), o = Rr.lastIndex, s = a[1], c = a[2] === "]", l = a[3];
		if (c && (s |= 0), l === void 0 || l === "[" && o + 2 === i) {
			zr(n, l === void 0 ? new Fr(s, e, t) : new Ir(s, e, t));
			break;
		}
		{
			let e = n.map[s];
			e === void 0 && (e = new Lr(s), zr(n, e)), n = e;
		}
	}
}
var Vr = class {
	constructor(e, t) {
		this.seq = [], this.map = {};
		let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
		for (let r = 0; r < n; ++r) {
			let n = e.getActiveUniform(t, r);
			Br(n, e.getUniformLocation(t, n.name), this);
		}
		let r = [], i = [];
		for (let t of this.seq) t.type === e.SAMPLER_2D_SHADOW || t.type === e.SAMPLER_CUBE_SHADOW || t.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(t) : i.push(t);
		r.length > 0 && (this.seq = r.concat(i));
	}
	setValue(e, t, n, r) {
		let i = this.map[t];
		i !== void 0 && i.setValue(e, n, r);
	}
	setOptional(e, t, n) {
		let r = t[n];
		r !== void 0 && this.setValue(e, n, r);
	}
	static upload(e, t, n, r) {
		for (let i = 0, a = t.length; i !== a; ++i) {
			let a = t[i], o = n[a.id];
			!1 !== o.needsUpdate && a.setValue(e, o.value, r);
		}
	}
	static seqWithValue(e, t) {
		let n = [];
		for (let r = 0, i = e.length; r !== i; ++r) {
			let i = e[r];
			i.id in t && n.push(i);
		}
		return n;
	}
};
function Hr(e, t, n) {
	let r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
var Ur = 0, Wr = new P();
function Gr(e, t, n) {
	let r = e.getShaderParameter(t, e.COMPILE_STATUS), i = (e.getShaderInfoLog(t) || "").trim();
	if (r && i === "") return "";
	let a = /ERROR: 0:(\d+)/.exec(i);
	if (a) {
		let r = parseInt(a[1]);
		return n.toUpperCase() + "\n\n" + i + "\n\n" + function(e, t) {
			let n = e.split("\n"), r = [], i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
			for (let e = i; e < a; e++) {
				let i = e + 1;
				r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
			}
			return r.join("\n");
		}(e.getShaderSource(t), r);
	}
	return i;
}
function Kr(e, t) {
	let n = function(e) {
		c._getMatrix(Wr, c.workingColorSpace, e);
		let t = `mat3( ${Wr.elements.map((e) => e.toFixed(4))} )`;
		switch (c.getTransfer(e)) {
			case y: return [t, "LinearTransferOETF"];
			case O: return [t, "sRGBTransferOETF"];
			default: return j("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
		}
	}(t);
	return [
		`vec4 ${e}( vec4 value ) {`,
		`\treturn ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
		"}"
	].join("\n");
}
var qr = {
	1: "Linear",
	2: "Reinhard",
	3: "Cineon",
	4: "ACESFilmic",
	6: "AgX",
	7: "Neutral",
	5: "Custom"
};
function Jr(e, t) {
	let n = qr[t];
	return n === void 0 ? (j("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var Yr = new l();
function Xr(e) {
	return e !== "";
}
function Zr(e, t) {
	let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
	return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Qr(e, t) {
	return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var $r = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ei(e) {
	return e.replace($r, ni);
}
var ti = /* @__PURE__ */ new Map();
function ni(e, t) {
	let n = X[t];
	if (n === void 0) {
		let e = ti.get(t);
		if (e === void 0) throw Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
		n = X[e], j("WebGLRenderer: Shader chunk \"%s\" has been deprecated. Use \"%s\" instead.", t, e);
	}
	return ei(n);
}
var ri = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ii(e) {
	return e.replace(ri, ai);
}
function ai(e, t, n, r) {
	let i = "";
	for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
	return i;
}
function oi(e) {
	let t = `precision ${e.precision} float;\n\tprecision ${e.precision} int;\n\tprecision ${e.precision} sampler2D;\n\tprecision ${e.precision} samplerCube;\n\tprecision ${e.precision} sampler3D;\n\tprecision ${e.precision} sampler2DArray;\n\tprecision ${e.precision} sampler2DShadow;\n\tprecision ${e.precision} samplerCubeShadow;\n\tprecision ${e.precision} sampler2DArrayShadow;\n\tprecision ${e.precision} isampler2D;\n\tprecision ${e.precision} isampler3D;\n\tprecision ${e.precision} isamplerCube;\n\tprecision ${e.precision} isampler2DArray;\n\tprecision ${e.precision} usampler2D;\n\tprecision ${e.precision} usampler3D;\n\tprecision ${e.precision} usamplerCube;\n\tprecision ${e.precision} usampler2DArray;\n\t`;
	return e.precision === "highp" ? t += "\n#define HIGH_PRECISION" : e.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : e.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
var si = {
	1: "SHADOWMAP_TYPE_PCF",
	3: "SHADOWMAP_TYPE_VSM"
}, ci = {
	301: "ENVMAP_TYPE_CUBE",
	302: "ENVMAP_TYPE_CUBE",
	306: "ENVMAP_TYPE_CUBE_UV"
}, li = { 302: "ENVMAP_MODE_REFRACTION" }, ui = {
	0: "ENVMAP_BLENDING_MULTIPLY",
	1: "ENVMAP_BLENDING_MIX",
	2: "ENVMAP_BLENDING_ADD"
};
function di(e, t, n, r) {
	let i, a, o = e.getContext(), s = n.defines, l = n.vertexShader, u = n.fragmentShader, d = function(e) {
		return si[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
	}(n), f = function(e) {
		return !1 === e.envMap ? "ENVMAP_TYPE_CUBE" : ci[e.envMapMode] || "ENVMAP_TYPE_CUBE";
	}(n), p = function(e) {
		return !1 === e.envMap ? "ENVMAP_MODE_REFLECTION" : li[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
	}(n), m = function(e) {
		return !1 === e.envMap ? "ENVMAP_BLENDING_NONE" : ui[e.combine] || "ENVMAP_BLENDING_NONE";
	}(n), h = function(e) {
		let t = e.envMapCubeUVHeight;
		if (t === null) return null;
		let n = Math.log2(t) - 2, r = 1 / t;
		return {
			texelWidth: 1 / (3 * Math.max(2 ** n, 112)),
			texelHeight: r,
			maxMip: n
		};
	}(n), g = function(e) {
		return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Xr).join("\n");
	}(n), _ = function(e) {
		let t = [];
		for (let n in e) {
			let r = e[n];
			!1 !== r && t.push("#define " + n + " " + r);
		}
		return t.join("\n");
	}(s), v = o.createProgram(), y = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
	n.isRawShaderMaterial ? (i = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		_
	].filter(Xr).join("\n"), i.length > 0 && (i += "\n"), a = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		_
	].filter(Xr).join("\n"), a.length > 0 && (a += "\n")) : (i = [
		oi(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		_,
		n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
		n.batching ? "#define USE_BATCHING" : "",
		n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
		n.instancing ? "#define USE_INSTANCING" : "",
		n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
		n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + p : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.mapUv ? "#define MAP_UV " + n.mapUv : "",
		n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
		n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
		n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
		n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
		n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
		n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
		n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
		n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
		n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
		n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
		n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
		n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
		n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
		n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
		n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
		n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
		n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
		n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
		n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
		n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
		n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
		n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
		n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
		n.vertexNormals ? "#define HAS_NORMAL" : "",
		n.vertexColors ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.skinning ? "#define USE_SKINNING" : "",
		n.morphTargets ? "#define USE_MORPHTARGETS" : "",
		n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "",
		n.morphColors ? "#define USE_MORPHCOLORS" : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + d : "",
		n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 modelMatrix;",
		"uniform mat4 modelViewMatrix;",
		"uniform mat4 projectionMatrix;",
		"uniform mat4 viewMatrix;",
		"uniform mat3 normalMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		"#ifdef USE_INSTANCING",
		"	attribute mat4 instanceMatrix;",
		"#endif",
		"#ifdef USE_INSTANCING_COLOR",
		"	attribute vec3 instanceColor;",
		"#endif",
		"#ifdef USE_INSTANCING_MORPH",
		"	uniform sampler2D morphTexture;",
		"#endif",
		"attribute vec3 position;",
		"attribute vec3 normal;",
		"attribute vec2 uv;",
		"#ifdef USE_UV1",
		"	attribute vec2 uv1;",
		"#endif",
		"#ifdef USE_UV2",
		"	attribute vec2 uv2;",
		"#endif",
		"#ifdef USE_UV3",
		"	attribute vec2 uv3;",
		"#endif",
		"#ifdef USE_TANGENT",
		"	attribute vec4 tangent;",
		"#endif",
		"#if defined( USE_COLOR_ALPHA )",
		"	attribute vec4 color;",
		"#elif defined( USE_COLOR )",
		"	attribute vec3 color;",
		"#endif",
		"#ifdef USE_SKINNING",
		"	attribute vec4 skinIndex;",
		"	attribute vec4 skinWeight;",
		"#endif",
		"\n"
	].filter(Xr).join("\n"), a = [
		oi(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		_,
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
		n.map ? "#define USE_MAP" : "",
		n.matcap ? "#define USE_MATCAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + f : "",
		n.envMap ? "#define " + p : "",
		n.envMap ? "#define " + m : "",
		h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
		h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
		h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoat ? "#define USE_CLEARCOAT" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.dispersion ? "#define USE_DISPERSION" : "",
		n.iridescence ? "#define USE_IRIDESCENCE" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaTest ? "#define USE_ALPHATEST" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.sheen ? "#define USE_SHEEN" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "",
		n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
		n.vertexAlphas || n.batchingColor ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.gradientMap ? "#define USE_GRADIENTMAP" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + d : "",
		n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
		n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
		n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 viewMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		n.toneMapping === 0 ? "" : "#define TONE_MAPPING",
		n.toneMapping === 0 ? "" : X.tonemapping_pars_fragment,
		n.toneMapping === 0 ? "" : Jr("toneMapping", n.toneMapping),
		n.dithering ? "#define DITHERING" : "",
		n.opaque ? "#define OPAQUE" : "",
		X.colorspace_pars_fragment,
		Kr("linearToOutputTexel", n.outputColorSpace),
		(c.getLuminanceCoefficients(Yr), [
			"float luminance( const in vec3 rgb ) {",
			`\tconst vec3 weights = vec3( ${Yr.x.toFixed(4)}, ${Yr.y.toFixed(4)}, ${Yr.z.toFixed(4)} );`,
			"	return dot( weights, rgb );",
			"}"
		].join("\n")),
		n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
		"\n"
	].filter(Xr).join("\n")), l = ei(l), l = Zr(l, n), l = Qr(l, n), u = ei(u), u = Zr(u, n), u = Qr(u, n), l = ii(l), u = ii(u), !0 !== n.isRawShaderMaterial && (y = "#version 300 es\n", i = [
		g,
		"#define attribute in",
		"#define varying out",
		"#define texture2D texture"
	].join("\n") + "\n" + i, a = [
		"#define varying in",
		n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
		n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
		"#define gl_FragDepthEXT gl_FragDepth",
		"#define texture2D texture",
		"#define textureCube texture",
		"#define texture2DProj textureProj",
		"#define texture2DLodEXT textureLod",
		"#define texture2DProjLodEXT textureProjLod",
		"#define textureCubeLodEXT textureLod",
		"#define texture2DGradEXT textureGrad",
		"#define texture2DProjGradEXT textureProjGrad",
		"#define textureCubeGradEXT textureGrad"
	].join("\n") + "\n" + a);
	let b, x, S = y + i + l, C = y + a + u, w = Hr(o, o.VERTEX_SHADER, S), T = Hr(o, o.FRAGMENT_SHADER, C);
	function ee(t) {
		if (e.debug.checkShaderErrors) {
			let n = o.getProgramInfoLog(v) || "", r = o.getShaderInfoLog(w) || "", s = o.getShaderInfoLog(T) || "", c = n.trim(), l = r.trim(), u = s.trim(), d = !0, f = !0;
			if (!1 === o.getProgramParameter(v, o.LINK_STATUS)) {
				if (d = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(o, v, w, T);
				else {
					let e = Gr(o, w, "vertex"), n = Gr(o, T, "fragment");
					M("WebGLProgram: Shader Error " + o.getError() + " - VALIDATE_STATUS " + o.getProgramParameter(v, o.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + c + "\n" + e + "\n" + n);
				}
			} else c === "" ? (l === "" || u === "") && (f = !1) : j("WebGLProgram: Program Info Log:", c);
			f && (t.diagnostics = {
				runnable: d,
				programLog: c,
				vertexShader: {
					log: l,
					prefix: i
				},
				fragmentShader: {
					log: u,
					prefix: a
				}
			});
		}
		o.deleteShader(w), o.deleteShader(T), b = new Vr(o, v), x = function(e, t) {
			let n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
			for (let i = 0; i < r; i++) {
				let r = e.getActiveAttrib(t, i), a = r.name, o = 1;
				r.type === e.FLOAT_MAT2 && (o = 2), r.type === e.FLOAT_MAT3 && (o = 3), r.type === e.FLOAT_MAT4 && (o = 4), n[a] = {
					type: r.type,
					location: e.getAttribLocation(t, a),
					locationSize: o
				};
			}
			return n;
		}(o, v);
	}
	o.attachShader(v, w), o.attachShader(v, T), n.index0AttributeName === void 0 ? !0 === n.hasPositionAttribute && o.bindAttribLocation(v, 0, "position") : o.bindAttribLocation(v, 0, n.index0AttributeName), o.linkProgram(v), this.getUniforms = function() {
		return b === void 0 && ee(this), b;
	}, this.getAttributes = function() {
		return x === void 0 && ee(this), x;
	};
	let E = !1 === n.rendererExtensionParallelShaderCompile;
	return this.isReady = function() {
		return !1 === E && (E = o.getProgramParameter(v, 37297)), E;
	}, this.destroy = function() {
		r.releaseStatesOfProgram(this), o.deleteProgram(v), this.program = void 0;
	}, this.type = n.shaderType, this.name = n.shaderName, this.id = Ur++, this.cacheKey = t, this.usedTimes = 1, this.program = v, this.vertexShader = w, this.fragmentShader = T, this;
}
var fi = 0, pi = class {
	constructor() {
		this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
	}
	update(e, t, n) {
		let r = this._getShaderCacheForMaterial(e);
		return !1 === r.has(t) && (r.add(t), t.usedTimes++), !1 === r.has(n) && (r.add(n), n.usedTimes++), this;
	}
	remove(e) {
		let t = this.materialCache.get(e);
		for (let e of t) e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code);
		return this.materialCache.delete(e), this;
	}
	getVertexShaderStage(e) {
		return this._getShaderStage(e.vertexShader);
	}
	getFragmentShaderStage(e) {
		return this._getShaderStage(e.fragmentShader);
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear();
	}
	_getShaderCacheForMaterial(e) {
		let t = this.materialCache, n = t.get(e);
		return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
	}
	_getShaderStage(e) {
		let t = this.shaderCache, n = t.get(e);
		return n === void 0 && (n = new mi(e), t.set(e, n)), n;
	}
}, mi = class {
	constructor(e) {
		this.id = fi++, this.code = e, this.usedTimes = 0;
	}
};
function hi(e) {
	return e === 1030 || e === 37490 || e === 36285;
}
function gi(e, t, n, r, i, a) {
	let o = new S(), s = new pi(), l = /* @__PURE__ */ new Set(), u = [], d = /* @__PURE__ */ new Map(), f = r.logarithmicDepthBuffer, p = r.precision, m = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distance",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};
	function h(e) {
		return l.add(e), e === 0 ? "uv" : `uv${e}`;
	}
	return {
		getParameters: function(i, o, u, d, g, _) {
			let v = d.fog, y = g.geometry, b = i.isMeshStandardMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial ? d.environment : null, x = i.isMeshStandardMaterial || i.isMeshLambertMaterial && !i.envMap || i.isMeshPhongMaterial && !i.envMap, S = t.get(i.envMap || b, x), C = S && S.mapping === 306 ? S.image.height : null, w = m[i.type];
			i.precision !== null && (p = r.getMaxPrecision(i.precision), p !== i.precision && j("WebGLProgram.getParameters:", i.precision, "not supported, using", p, "instead."));
			let T, ee, E, D, O = y.morphAttributes.position || y.morphAttributes.normal || y.morphAttributes.color, te = O === void 0 ? 0 : O.length, ne = 0;
			if (y.morphAttributes.position !== void 0 && (ne = 1), y.morphAttributes.normal !== void 0 && (ne = 2), y.morphAttributes.color !== void 0 && (ne = 3), w) {
				let e = vn[w];
				T = e.vertexShader, ee = e.fragmentShader;
			} else {
				T = i.vertexShader, ee = i.fragmentShader;
				let e = s.getVertexShaderStage(i), t = s.getFragmentShaderStage(i);
				s.update(i, e, t), E = e.id, D = t.id;
			}
			let re = e.getRenderTarget(), k = e.state.buffers.depth.getReversed(), ie = !0 === g.isInstancedMesh, ae = !0 === g.isBatchedMesh, oe = !!i.map, se = !!i.matcap, ce = !!S, le = !!i.aoMap, ue = !!i.lightMap, de = !!i.bumpMap && !1 === i.wireframe, fe = !!i.normalMap, pe = !!i.displacementMap, me = !!i.emissiveMap, he = !!i.metalnessMap, ge = !!i.roughnessMap, _e = i.anisotropy > 0, A = i.clearcoat > 0, ve = i.dispersion > 0, ye = i.iridescence > 0, be = i.sheen > 0, xe = i.transmission > 0, Se = _e && !!i.anisotropyMap, Ce = A && !!i.clearcoatMap, we = A && !!i.clearcoatNormalMap, M = A && !!i.clearcoatRoughnessMap, Te = ye && !!i.iridescenceMap, Ee = ye && !!i.iridescenceThicknessMap, De = be && !!i.sheenColorMap, Oe = be && !!i.sheenRoughnessMap, N = !!i.specularMap, ke = !!i.specularColorMap, Ae = !!i.specularIntensityMap, je = xe && !!i.transmissionMap, Me = xe && !!i.thicknessMap, Ne = !!i.gradientMap, Pe = !!i.alphaMap, Fe = i.alphaTest > 0, Ie = !!i.alphaHash, Le = !!i.extensions, Re = 0;
			i.toneMapped && (re === null || !0 === re.isXRRenderTarget) && (Re = e.toneMapping);
			let ze = {
				shaderID: w,
				shaderType: i.type,
				shaderName: i.name,
				vertexShader: T,
				fragmentShader: ee,
				defines: i.defines,
				customVertexShaderID: E,
				customFragmentShaderID: D,
				isRawShaderMaterial: !0 === i.isRawShaderMaterial,
				glslVersion: i.glslVersion,
				precision: p,
				batching: ae,
				batchingColor: ae && g._colorsTexture !== null,
				instancing: ie,
				instancingColor: ie && g.instanceColor !== null,
				instancingMorph: ie && g.morphTexture !== null,
				outputColorSpace: re === null ? e.outputColorSpace : !0 === re.isXRRenderTarget ? re.texture.colorSpace : c.workingColorSpace,
				alphaToCoverage: !!i.alphaToCoverage,
				map: oe,
				matcap: se,
				envMap: ce,
				envMapMode: ce && S.mapping,
				envMapCubeUVHeight: C,
				aoMap: le,
				lightMap: ue,
				bumpMap: de,
				normalMap: fe,
				displacementMap: pe,
				emissiveMap: me,
				normalMapObjectSpace: fe && i.normalMapType === 1,
				normalMapTangentSpace: fe && i.normalMapType === 0,
				packedNormalMap: fe && i.normalMapType === 0 && hi(i.normalMap.format),
				metalnessMap: he,
				roughnessMap: ge,
				anisotropy: _e,
				anisotropyMap: Se,
				clearcoat: A,
				clearcoatMap: Ce,
				clearcoatNormalMap: we,
				clearcoatRoughnessMap: M,
				dispersion: ve,
				iridescence: ye,
				iridescenceMap: Te,
				iridescenceThicknessMap: Ee,
				sheen: be,
				sheenColorMap: De,
				sheenRoughnessMap: Oe,
				specularMap: N,
				specularColorMap: ke,
				specularIntensityMap: Ae,
				transmission: xe,
				transmissionMap: je,
				thicknessMap: Me,
				gradientMap: Ne,
				opaque: !1 === i.transparent && i.blending === 1 && !1 === i.alphaToCoverage,
				alphaMap: Pe,
				alphaTest: Fe,
				alphaHash: Ie,
				combine: i.combine,
				mapUv: oe && h(i.map.channel),
				aoMapUv: le && h(i.aoMap.channel),
				lightMapUv: ue && h(i.lightMap.channel),
				bumpMapUv: de && h(i.bumpMap.channel),
				normalMapUv: fe && h(i.normalMap.channel),
				displacementMapUv: pe && h(i.displacementMap.channel),
				emissiveMapUv: me && h(i.emissiveMap.channel),
				metalnessMapUv: he && h(i.metalnessMap.channel),
				roughnessMapUv: ge && h(i.roughnessMap.channel),
				anisotropyMapUv: Se && h(i.anisotropyMap.channel),
				clearcoatMapUv: Ce && h(i.clearcoatMap.channel),
				clearcoatNormalMapUv: we && h(i.clearcoatNormalMap.channel),
				clearcoatRoughnessMapUv: M && h(i.clearcoatRoughnessMap.channel),
				iridescenceMapUv: Te && h(i.iridescenceMap.channel),
				iridescenceThicknessMapUv: Ee && h(i.iridescenceThicknessMap.channel),
				sheenColorMapUv: De && h(i.sheenColorMap.channel),
				sheenRoughnessMapUv: Oe && h(i.sheenRoughnessMap.channel),
				specularMapUv: N && h(i.specularMap.channel),
				specularColorMapUv: ke && h(i.specularColorMap.channel),
				specularIntensityMapUv: Ae && h(i.specularIntensityMap.channel),
				transmissionMapUv: je && h(i.transmissionMap.channel),
				thicknessMapUv: Me && h(i.thicknessMap.channel),
				alphaMapUv: Pe && h(i.alphaMap.channel),
				vertexTangents: !!y.attributes.tangent && (fe || _e),
				vertexNormals: !!y.attributes.normal,
				vertexColors: i.vertexColors,
				vertexAlphas: !0 === i.vertexColors && !!y.attributes.color && y.attributes.color.itemSize === 4,
				pointsUvs: !0 === g.isPoints && !!y.attributes.uv && (oe || Pe),
				fog: !!v,
				useFog: !0 === i.fog,
				fogExp2: !!v && v.isFogExp2,
				flatShading: !1 === i.wireframe && (!0 === i.flatShading || y.attributes.normal === void 0 && !1 === fe && (i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshPhysicalMaterial)),
				sizeAttenuation: !0 === i.sizeAttenuation,
				logarithmicDepthBuffer: f,
				reversedDepthBuffer: k,
				skinning: !0 === g.isSkinnedMesh,
				hasPositionAttribute: y.attributes.position !== void 0,
				morphTargets: y.morphAttributes.position !== void 0,
				morphNormals: y.morphAttributes.normal !== void 0,
				morphColors: y.morphAttributes.color !== void 0,
				morphTargetsCount: te,
				morphTextureStride: ne,
				numDirLights: o.directional.length,
				numPointLights: o.point.length,
				numSpotLights: o.spot.length,
				numSpotLightMaps: o.spotLightMap.length,
				numRectAreaLights: o.rectArea.length,
				numHemiLights: o.hemi.length,
				numDirLightShadows: o.directionalShadowMap.length,
				numPointLightShadows: o.pointShadowMap.length,
				numSpotLightShadows: o.spotShadowMap.length,
				numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
				numLightProbes: o.numLightProbes,
				numLightProbeGrids: _.length,
				numClippingPlanes: a.numPlanes,
				numClipIntersection: a.numIntersection,
				dithering: i.dithering,
				shadowMapEnabled: e.shadowMap.enabled && u.length > 0,
				shadowMapType: e.shadowMap.type,
				toneMapping: Re,
				decodeVideoTexture: oe && !0 === i.map.isVideoTexture && c.getTransfer(i.map.colorSpace) === "srgb",
				decodeVideoTextureEmissive: me && !0 === i.emissiveMap.isVideoTexture && c.getTransfer(i.emissiveMap.colorSpace) === "srgb",
				premultipliedAlpha: i.premultipliedAlpha,
				doubleSided: i.side === 2,
				flipSided: i.side === 1,
				useDepthPacking: i.depthPacking >= 0,
				depthPacking: i.depthPacking || 0,
				index0AttributeName: i.index0AttributeName,
				extensionClipCullDistance: Le && !0 === i.extensions.clipCullDistance && n.has("WEBGL_clip_cull_distance"),
				extensionMultiDraw: (Le && !0 === i.extensions.multiDraw || ae) && n.has("WEBGL_multi_draw"),
				rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
				customProgramCacheKey: i.customProgramCacheKey()
			};
			return ze.vertexUv1s = l.has(1), ze.vertexUv2s = l.has(2), ze.vertexUv3s = l.has(3), l.clear(), ze;
		},
		getProgramCacheKey: function(t) {
			let n = [];
			if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), t.defines !== void 0) for (let e in t.defines) n.push(e), n.push(t.defines[e]);
			return !1 === t.isRawShaderMaterial && (function(e, t) {
				e.push(t.precision), e.push(t.outputColorSpace), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.mapUv), e.push(t.alphaMapUv), e.push(t.lightMapUv), e.push(t.aoMapUv), e.push(t.bumpMapUv), e.push(t.normalMapUv), e.push(t.displacementMapUv), e.push(t.emissiveMapUv), e.push(t.metalnessMapUv), e.push(t.roughnessMapUv), e.push(t.anisotropyMapUv), e.push(t.clearcoatMapUv), e.push(t.clearcoatNormalMapUv), e.push(t.clearcoatRoughnessMapUv), e.push(t.iridescenceMapUv), e.push(t.iridescenceThicknessMapUv), e.push(t.sheenColorMapUv), e.push(t.sheenRoughnessMapUv), e.push(t.specularMapUv), e.push(t.specularColorMapUv), e.push(t.specularIntensityMapUv), e.push(t.transmissionMapUv), e.push(t.thicknessMapUv), e.push(t.combine), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.numLightProbes), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking);
			}(n, t), function(e, t) {
				o.disableAll(), t.instancing && o.enable(0), t.instancingColor && o.enable(1), t.instancingMorph && o.enable(2), t.matcap && o.enable(3), t.envMap && o.enable(4), t.normalMapObjectSpace && o.enable(5), t.normalMapTangentSpace && o.enable(6), t.clearcoat && o.enable(7), t.iridescence && o.enable(8), t.alphaTest && o.enable(9), t.vertexColors && o.enable(10), t.vertexAlphas && o.enable(11), t.vertexUv1s && o.enable(12), t.vertexUv2s && o.enable(13), t.vertexUv3s && o.enable(14), t.vertexTangents && o.enable(15), t.anisotropy && o.enable(16), t.alphaHash && o.enable(17), t.batching && o.enable(18), t.dispersion && o.enable(19), t.batchingColor && o.enable(20), t.gradientMap && o.enable(21), t.packedNormalMap && o.enable(22), t.vertexNormals && o.enable(23), e.push(o.mask), o.disableAll(), t.fog && o.enable(0), t.useFog && o.enable(1), t.flatShading && o.enable(2), t.logarithmicDepthBuffer && o.enable(3), t.reversedDepthBuffer && o.enable(4), t.skinning && o.enable(5), t.morphTargets && o.enable(6), t.morphNormals && o.enable(7), t.morphColors && o.enable(8), t.premultipliedAlpha && o.enable(9), t.shadowMapEnabled && o.enable(10), t.doubleSided && o.enable(11), t.flipSided && o.enable(12), t.useDepthPacking && o.enable(13), t.dithering && o.enable(14), t.transmission && o.enable(15), t.sheen && o.enable(16), t.opaque && o.enable(17), t.pointsUvs && o.enable(18), t.decodeVideoTexture && o.enable(19), t.decodeVideoTextureEmissive && o.enable(20), t.alphaToCoverage && o.enable(21), t.numLightProbeGrids > 0 && o.enable(22), t.hasPositionAttribute && o.enable(23), e.push(o.mask);
			}(n, t), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join();
		},
		getUniforms: function(e) {
			let t, n = m[e.type];
			if (n) {
				let e = vn[n];
				t = w.clone(e.uniforms);
			} else t = e.uniforms;
			return t;
		},
		acquireProgram: function(t, n) {
			let r = d.get(n);
			return r === void 0 ? (r = new di(e, n, t, i), u.push(r), d.set(n, r)) : ++r.usedTimes, r;
		},
		releaseProgram: function(e) {
			if (--e.usedTimes === 0) {
				let t = u.indexOf(e);
				u[t] = u[u.length - 1], u.pop(), d.delete(e.cacheKey), e.destroy();
			}
		},
		releaseShaderCache: function(e) {
			s.remove(e);
		},
		programs: u,
		dispose: function() {
			s.dispose();
		}
	};
}
function _i() {
	let e = /* @__PURE__ */ new WeakMap();
	return {
		has: function(t) {
			return e.has(t);
		},
		get: function(t) {
			let n = e.get(t);
			return n === void 0 && (n = {}, e.set(t, n)), n;
		},
		remove: function(t) {
			e.delete(t);
		},
		update: function(t, n, r) {
			e.get(t)[n] = r;
		},
		dispose: function() {
			e = /* @__PURE__ */ new WeakMap();
		}
	};
}
function vi(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.materialVariant === t.materialVariant ? e.z === t.z ? e.id - t.id : e.z - t.z : e.materialVariant - t.materialVariant : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function yi(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function bi() {
	let e = [], t = 0, n = [], r = [], i = [];
	function a(e) {
		let t = 0;
		return e.isInstancedMesh && (t += 2), e.isSkinnedMesh && (t += 1), t;
	}
	function o(n, r, i, o, s, c) {
		let l = e[t];
		return l === void 0 ? (l = {
			id: n.id,
			object: n,
			geometry: r,
			material: i,
			materialVariant: a(n),
			groupOrder: o,
			renderOrder: n.renderOrder,
			z: s,
			group: c
		}, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = r, l.material = i, l.materialVariant = a(n), l.groupOrder = o, l.renderOrder = n.renderOrder, l.z = s, l.group = c), t++, l;
	}
	return {
		opaque: n,
		transmissive: r,
		transparent: i,
		init: function() {
			t = 0, n.length = 0, r.length = 0, i.length = 0;
		},
		push: function(e, t, a, s, c, l) {
			let u = o(e, t, a, s, c, l);
			a.transmission > 0 ? r.push(u) : !0 === a.transparent ? i.push(u) : n.push(u);
		},
		unshift: function(e, t, a, s, c, l) {
			let u = o(e, t, a, s, c, l);
			a.transmission > 0 ? r.unshift(u) : !0 === a.transparent ? i.unshift(u) : n.unshift(u);
		},
		finish: function() {
			for (let n = t, r = e.length; n < r; n++) {
				let t = e[n];
				if (t.id === null) break;
				t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null;
			}
		},
		sort: function(e, t, a) {
			n.length > 1 && n.sort(e || vi), r.length > 1 && r.sort(t || yi), i.length > 1 && i.sort(t || yi), a && (n.reverse(), r.reverse(), i.reverse());
		}
	};
}
function xi() {
	let e = /* @__PURE__ */ new WeakMap();
	return {
		get: function(t, n) {
			let r, i = e.get(t);
			return i === void 0 ? (r = new bi(), e.set(t, [r])) : n >= i.length ? (r = new bi(), i.push(r)) : r = i[n], r;
		},
		dispose: function() {
			e = /* @__PURE__ */ new WeakMap();
		}
	};
}
function Si() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					direction: new l(),
					color: new b()
				};
				break;
			case "SpotLight":
				n = {
					position: new l(),
					direction: new l(),
					color: new b(),
					distance: 0,
					coneCos: 0,
					penumbraCos: 0,
					decay: 0
				};
				break;
			case "PointLight":
				n = {
					position: new l(),
					color: new b(),
					distance: 0,
					decay: 0
				};
				break;
			case "HemisphereLight":
				n = {
					direction: new l(),
					skyColor: new b(),
					groundColor: new b()
				};
				break;
			case "RectAreaLight": n = {
				color: new b(),
				position: new l(),
				halfWidth: new l(),
				halfHeight: new l()
			};
		}
		return e[t.id] = n, n;
	} };
}
var Ci = 0;
function wi(e, t) {
	return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function Ti(e) {
	let t = new Si(), n = function() {
		let e = {};
		return { get: function(t) {
			if (e[t.id] !== void 0) return e[t.id];
			let n;
			switch (t.type) {
				case "DirectionalLight":
				case "SpotLight":
					n = {
						shadowIntensity: 1,
						shadowBias: 0,
						shadowNormalBias: 0,
						shadowRadius: 1,
						shadowMapSize: new _()
					};
					break;
				case "PointLight": n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new _(),
					shadowCameraNear: 1,
					shadowCameraFar: 1e3
				};
			}
			return e[t.id] = n, n;
		} };
	}(), r = {
		version: 0,
		hash: {
			directionalLength: -1,
			pointLength: -1,
			spotLength: -1,
			rectAreaLength: -1,
			hemiLength: -1,
			numDirectionalShadows: -1,
			numPointShadows: -1,
			numSpotShadows: -1,
			numSpotMaps: -1,
			numLightProbes: -1
		},
		ambient: [
			0,
			0,
			0
		],
		probe: [],
		directional: [],
		directionalShadow: [],
		directionalShadowMap: [],
		directionalShadowMatrix: [],
		spot: [],
		spotLightMap: [],
		spotShadow: [],
		spotShadowMap: [],
		spotLightMatrix: [],
		rectArea: [],
		rectAreaLTC1: null,
		rectAreaLTC2: null,
		point: [],
		pointShadow: [],
		pointShadowMap: [],
		pointShadowMatrix: [],
		hemi: [],
		numSpotLightShadowsWithMaps: 0,
		numLightProbes: 0
	};
	for (let e = 0; e < 9; e++) r.probe.push(new l());
	let i = new l(), a = new De(), o = new De();
	return {
		setup: function(i) {
			let a = 0, o = 0, s = 0;
			for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
			let c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0, v = 0;
			i.sort(wi);
			for (let e = 0, y = i.length; e < y; e++) {
				let y = i[e], b = y.color, x = y.intensity, S = y.distance, C = null;
				if (y.shadow && y.shadow.map && (C = y.shadow.map.texture.format === 1030 ? y.shadow.map.texture : y.shadow.map.depthTexture || y.shadow.map.texture), y.isAmbientLight) a += b.r * x, o += b.g * x, s += b.b * x;
				else if (y.isLightProbe) {
					for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(y.sh.coefficients[e], x);
					v++;
				} else if (y.isDirectionalLight) {
					let e = t.get(y);
					if (e.color.copy(y.color).multiplyScalar(y.intensity), y.castShadow) {
						let e = y.shadow, t = n.get(y);
						t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, r.directionalShadow[c] = t, r.directionalShadowMap[c] = C, r.directionalShadowMatrix[c] = y.shadow.matrix, p++;
					}
					r.directional[c] = e, c++;
				} else if (y.isSpotLight) {
					let e = t.get(y);
					e.position.setFromMatrixPosition(y.matrixWorld), e.color.copy(b).multiplyScalar(x), e.distance = S, e.coneCos = Math.cos(y.angle), e.penumbraCos = Math.cos(y.angle * (1 - y.penumbra)), e.decay = y.decay, r.spot[u] = e;
					let i = y.shadow;
					if (y.map && (r.spotLightMap[g] = y.map, g++, i.updateMatrices(y), y.castShadow && _++), r.spotLightMatrix[u] = i.matrix, y.castShadow) {
						let e = n.get(y);
						e.shadowIntensity = i.intensity, e.shadowBias = i.bias, e.shadowNormalBias = i.normalBias, e.shadowRadius = i.radius, e.shadowMapSize = i.mapSize, r.spotShadow[u] = e, r.spotShadowMap[u] = C, h++;
					}
					u++;
				} else if (y.isRectAreaLight) {
					let e = t.get(y);
					e.color.copy(b).multiplyScalar(x), e.halfWidth.set(.5 * y.width, 0, 0), e.halfHeight.set(0, .5 * y.height, 0), r.rectArea[d] = e, d++;
				} else if (y.isPointLight) {
					let e = t.get(y);
					if (e.color.copy(y.color).multiplyScalar(y.intensity), e.distance = y.distance, e.decay = y.decay, y.castShadow) {
						let e = y.shadow, t = n.get(y);
						t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, t.shadowCameraNear = e.camera.near, t.shadowCameraFar = e.camera.far, r.pointShadow[l] = t, r.pointShadowMap[l] = C, r.pointShadowMatrix[l] = y.shadow.matrix, m++;
					}
					r.point[l] = e, l++;
				} else if (y.isHemisphereLight) {
					let e = t.get(y);
					e.skyColor.copy(y.color).multiplyScalar(x), e.groundColor.copy(y.groundColor).multiplyScalar(x), r.hemi[f] = e, f++;
				}
			}
			d > 0 && (!0 === e.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = Z.LTC_FLOAT_1, r.rectAreaLTC2 = Z.LTC_FLOAT_2) : (r.rectAreaLTC1 = Z.LTC_HALF_1, r.rectAreaLTC2 = Z.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = o, r.ambient[2] = s;
			let y = r.hash;
			(y.directionalLength !== c || y.pointLength !== l || y.spotLength !== u || y.rectAreaLength !== d || y.hemiLength !== f || y.numDirectionalShadows !== p || y.numPointShadows !== m || y.numSpotShadows !== h || y.numSpotMaps !== g || y.numLightProbes !== v) && (r.directional.length = c, r.spot.length = u, r.rectArea.length = d, r.point.length = l, r.hemi.length = f, r.directionalShadow.length = p, r.directionalShadowMap.length = p, r.pointShadow.length = m, r.pointShadowMap.length = m, r.spotShadow.length = h, r.spotShadowMap.length = h, r.directionalShadowMatrix.length = p, r.pointShadowMatrix.length = m, r.spotLightMatrix.length = h + g - _, r.spotLightMap.length = g, r.numSpotLightShadowsWithMaps = _, r.numLightProbes = v, y.directionalLength = c, y.pointLength = l, y.spotLength = u, y.rectAreaLength = d, y.hemiLength = f, y.numDirectionalShadows = p, y.numPointShadows = m, y.numSpotShadows = h, y.numSpotMaps = g, y.numLightProbes = v, r.version = Ci++);
		},
		setupView: function(e, t) {
			let n = 0, s = 0, c = 0, l = 0, u = 0, d = t.matrixWorldInverse;
			for (let t = 0, f = e.length; t < f; t++) {
				let f = e[t];
				if (f.isDirectionalLight) {
					let e = r.directional[n];
					e.direction.setFromMatrixPosition(f.matrixWorld), i.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(d), n++;
				} else if (f.isSpotLight) {
					let e = r.spot[c];
					e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), e.direction.setFromMatrixPosition(f.matrixWorld), i.setFromMatrixPosition(f.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(d), c++;
				} else if (f.isRectAreaLight) {
					let e = r.rectArea[l];
					e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), o.identity(), a.copy(f.matrixWorld), a.premultiply(d), o.extractRotation(a), e.halfWidth.set(.5 * f.width, 0, 0), e.halfHeight.set(0, .5 * f.height, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), l++;
				} else if (f.isPointLight) {
					let e = r.point[s];
					e.position.setFromMatrixPosition(f.matrixWorld), e.position.applyMatrix4(d), s++;
				} else if (f.isHemisphereLight) {
					let e = r.hemi[u];
					e.direction.setFromMatrixPosition(f.matrixWorld), e.direction.transformDirection(d), u++;
				}
			}
		},
		state: r
	};
}
function Ei(e) {
	let t = new Ti(e), n = [], r = [], i = [], a = {
		lightsArray: n,
		shadowsArray: r,
		lightProbeGridArray: i,
		camera: null,
		lights: t,
		transmissionRenderTarget: {},
		textureUnits: 0
	};
	return {
		init: function(e) {
			a.camera = e, n.length = 0, r.length = 0, i.length = 0;
		},
		state: a,
		setupLights: function() {
			t.setup(n);
		},
		setupLightsView: function(e) {
			t.setupView(n, e);
		},
		pushLight: function(e) {
			n.push(e);
		},
		pushShadow: function(e) {
			r.push(e);
		},
		pushLightProbeGrid: function(e) {
			i.push(e);
		}
	};
}
function Di(e) {
	let t = /* @__PURE__ */ new WeakMap();
	return {
		get: function(n, r = 0) {
			let i, a = t.get(n);
			return a === void 0 ? (i = new Ei(e), t.set(n, [i])) : r >= a.length ? (i = new Ei(e), a.push(i)) : i = a[r], i;
		},
		dispose: function() {
			t = /* @__PURE__ */ new WeakMap();
		}
	};
}
var Oi = [
	new l(1, 0, 0),
	new l(-1, 0, 0),
	new l(0, 1, 0),
	new l(0, -1, 0),
	new l(0, 0, 1),
	new l(0, 0, -1)
], ki = [
	new l(0, -1, 0),
	new l(0, -1, 0),
	new l(0, 0, 1),
	new l(0, 0, -1),
	new l(0, -1, 0),
	new l(0, -1, 0)
], Ai = new De(), ji = new l(), Mi = new l();
function Ni(n, r, i) {
	let o = new Me(), s = new _(), c = new _(), l = new N(), u = new Pe(), d = new A(), f = {}, p = i.maxTextureSize, m = {
		0: 1,
		1: 0,
		2: 2
	}, h = new E({
		defines: { VSM_SAMPLES: 8 },
		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new _() },
			radius: { value: 4 }
		},
		vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}",
		fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );\n	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );\n}"
	}), y = h.clone();
	y.defines.HORIZONTAL_PASS = 1;
	let b = new Ve();
	b.setAttribute("position", new v(new Float32Array([
		-1,
		-1,
		.5,
		3,
		-1,
		.5,
		-1,
		3,
		.5
	]), 3));
	let x = new t(b, h), S = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
	let C = this.type;
	function w(t, i) {
		let a = r.update(x);
		h.defines.VSM_SAMPLES !== t.blurSamples && (h.defines.VSM_SAMPLES = t.blurSamples, y.defines.VSM_SAMPLES = t.blurSamples, h.needsUpdate = !0, y.needsUpdate = !0), t.mapPass === null && (t.mapPass = new e(s.x, s.y, {
			format: 1030,
			type: 1016
		})), h.uniforms.shadow_pass.value = t.map.depthTexture, h.uniforms.resolution.value = t.mapSize, h.uniforms.radius.value = t.radius, n.setRenderTarget(t.mapPass), n.clear(), n.renderBufferDirect(i, null, a, h, x, null), y.uniforms.shadow_pass.value = t.mapPass.texture, y.uniforms.resolution.value = t.mapSize, y.uniforms.radius.value = t.radius, n.setRenderTarget(t.map), n.clear(), n.renderBufferDirect(i, null, a, y, x, null);
	}
	function T(e, t, r, i) {
		let a = null, o = !0 === r.isPointLight ? e.customDistanceMaterial : e.customDepthMaterial;
		if (o !== void 0) a = o;
		else if (a = !0 === r.isPointLight ? d : u, n.localClippingEnabled && !0 === t.clipShadows && Array.isArray(t.clippingPlanes) && t.clippingPlanes.length !== 0 || t.displacementMap && t.displacementScale !== 0 || t.alphaMap && t.alphaTest > 0 || t.map && t.alphaTest > 0 || !0 === t.alphaToCoverage) {
			let e = a.uuid, n = t.uuid, r = f[e];
			r === void 0 && (r = {}, f[e] = r);
			let i = r[n];
			i === void 0 && (i = a.clone(), r[n] = i, t.addEventListener("dispose", D)), a = i;
		}
		return a.visible = t.visible, a.wireframe = t.wireframe, a.side = i === 3 ? t.shadowSide === null ? t.side : t.shadowSide : t.shadowSide === null ? m[t.side] : t.shadowSide, a.alphaMap = t.alphaMap, a.alphaTest = !0 === t.alphaToCoverage ? .5 : t.alphaTest, a.map = t.map, a.clipShadows = t.clipShadows, a.clippingPlanes = t.clippingPlanes, a.clipIntersection = t.clipIntersection, a.displacementMap = t.displacementMap, a.displacementScale = t.displacementScale, a.displacementBias = t.displacementBias, a.wireframeLinewidth = t.wireframeLinewidth, a.linewidth = t.linewidth, !0 === r.isPointLight && !0 === a.isMeshDistanceMaterial && (n.properties.get(a).light = r), a;
	}
	function ee(e, t, i, a, s) {
		if (!1 === e.visible) return;
		if (e.layers.test(t.layers) && (e.isMesh || e.isLine || e.isPoints) && (e.castShadow || e.receiveShadow && s === 3) && (!e.frustumCulled || o.intersectsObject(e))) {
			e.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, e.matrixWorld);
			let o = r.update(e), c = e.material;
			if (Array.isArray(c)) {
				let r = o.groups;
				for (let l = 0, u = r.length; l < u; l++) {
					let u = r[l], d = c[u.materialIndex];
					if (d && d.visible) {
						let r = T(e, d, a, s);
						e.onBeforeShadow(n, e, t, i, o, r, u), n.renderBufferDirect(i, null, o, r, e, u), e.onAfterShadow(n, e, t, i, o, r, u);
					}
				}
			} else if (c.visible) {
				let r = T(e, c, a, s);
				e.onBeforeShadow(n, e, t, i, o, r, null), n.renderBufferDirect(i, null, o, r, e, null), e.onAfterShadow(n, e, t, i, o, r, null);
			}
		}
		let c = e.children;
		for (let e = 0, n = c.length; e < n; e++) ee(c[e], t, i, a, s);
	}
	function D(e) {
		e.target.removeEventListener("dispose", D);
		for (let t in f) {
			let n = f[t], r = e.target.uuid;
			r in n && (n[r].dispose(), delete n[r]);
		}
	}
	this.render = function(t, r, i) {
		if (!1 === S.enabled || !1 === S.autoUpdate && !1 === S.needsUpdate || t.length === 0) return;
		this.type === 2 && (j("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = 1);
		let u = n.getRenderTarget(), d = n.getActiveCubeFace(), f = n.getActiveMipmapLevel(), m = n.state;
		m.setBlending(0), !0 === m.buffers.depth.getReversed() ? m.buffers.color.setClear(0, 0, 0, 0) : m.buffers.color.setClear(1, 1, 1, 1), m.buffers.depth.setTest(!0), m.setScissorTest(!1);
		let h = C !== this.type;
		h && r.traverse(function(e) {
			e.material && (Array.isArray(e.material) ? e.material.forEach((e) => e.needsUpdate = !0) : e.material.needsUpdate = !0);
		});
		for (let u = 0, d = t.length; u < d; u++) {
			let d = t[u], f = d.shadow;
			if (f === void 0) {
				j("WebGLShadowMap:", d, "has no shadow.");
				continue;
			}
			if (!1 === f.autoUpdate && !1 === f.needsUpdate) continue;
			s.copy(f.mapSize);
			let _ = f.getFrameExtents();
			s.multiply(_), c.copy(f.mapSize), (s.x > p || s.y > p) && (s.x > p && (c.x = Math.floor(p / _.x), s.x = c.x * _.x, f.mapSize.x = c.x), s.y > p && (c.y = Math.floor(p / _.y), s.y = c.y * _.y, f.mapSize.y = c.y));
			let v = n.state.buffers.depth.getReversed();
			if (f.camera._reversedDepth = v, f.map === null || !0 === h) {
				if (f.map !== null && (f.map.depthTexture !== null && (f.map.depthTexture.dispose(), f.map.depthTexture = null), f.map.dispose()), this.type === 3) {
					if (d.isPointLight) {
						j("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
						continue;
					}
					f.map = new e(s.x, s.y, {
						format: pe,
						type: a,
						minFilter: g,
						magFilter: g,
						generateMipmaps: !1
					}), f.map.texture.name = d.name + ".shadowMap", f.map.depthTexture = new Ee(s.x, s.y, Be), f.map.depthTexture.name = d.name + ".shadowMapDepth", f.map.depthTexture.format = He, f.map.depthTexture.compareFunction = null, f.map.depthTexture.minFilter = Ie, f.map.depthTexture.magFilter = Ie;
				} else d.isPointLight ? (f.map = new Dn(s.x), f.map.depthTexture = new he(s.x, ae)) : (f.map = new e(s.x, s.y), f.map.depthTexture = new Ee(s.x, s.y, ae)), f.map.depthTexture.name = d.name + ".shadowMap", f.map.depthTexture.format = He, this.type === 1 ? (f.map.depthTexture.compareFunction = v ? 518 : 515, f.map.depthTexture.minFilter = g, f.map.depthTexture.magFilter = g) : (f.map.depthTexture.compareFunction = null, f.map.depthTexture.minFilter = Ie, f.map.depthTexture.magFilter = Ie);
				f.camera.updateProjectionMatrix();
			}
			let y = f.map.isWebGLCubeRenderTarget ? 6 : 1;
			for (let e = 0; e < y; e++) {
				if (f.map.isWebGLCubeRenderTarget) n.setRenderTarget(f.map, e), n.clear();
				else {
					e === 0 && (n.setRenderTarget(f.map), n.clear());
					let t = f.getViewport(e);
					l.set(c.x * t.x, c.y * t.y, c.x * t.z, c.y * t.w), m.viewport(l);
				}
				if (d.isPointLight) {
					let t = f.camera, n = f.matrix, r = d.distance || t.far;
					r !== t.far && (t.far = r, t.updateProjectionMatrix()), ji.setFromMatrixPosition(d.matrixWorld), t.position.copy(ji), Mi.copy(t.position), Mi.add(Oi[e]), t.up.copy(ki[e]), t.lookAt(Mi), t.updateMatrixWorld(), n.makeTranslation(-ji.x, -ji.y, -ji.z), Ai.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), f._frustum.setFromProjectionMatrix(Ai, t.coordinateSystem, t.reversedDepth);
				} else f.updateMatrices(d);
				o = f.getFrustum(), ee(r, i, f.camera, d, this.type);
			}
			!0 !== f.isPointLightShadow && this.type === 3 && w(f, i), f.needsUpdate = !1;
		}
		C = this.type, S.needsUpdate = !1, n.setRenderTarget(u, d, f);
	};
}
function Pi(e, t) {
	let n = new function() {
		let t = !1, n = new N(), r = null, i = new N(0, 0, 0, 0);
		return {
			setMask: function(n) {
				r !== n && !t && (e.colorMask(n, n, n, n), r = n);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t, r, a, o, s) {
				!0 === s && (t *= o, r *= o, a *= o), n.set(t, r, a, o), !1 === i.equals(n) && (e.clearColor(t, r, a, o), i.copy(n));
			},
			reset: function() {
				t = !1, r = null, i.set(-1, 0, 0, 0);
			}
		};
	}(), r = new function() {
		let n = !1, r = !1, i = null, a = null, o = null;
		return {
			setReversed: function(e) {
				if (r !== e) {
					let n = t.get("EXT_clip_control");
					e ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT) : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT), r = e;
					let i = o;
					o = null, this.setClear(i);
				}
			},
			getReversed: function() {
				return r;
			},
			setTest: function(t) {
				t ? pe(e.DEPTH_TEST) : me(e.DEPTH_TEST);
			},
			setMask: function(t) {
				i !== t && !n && (e.depthMask(t), i = t);
			},
			setFunc: function(t) {
				if (r && (t = s[t]), a !== t) {
					switch (t) {
						case 0:
							e.depthFunc(e.NEVER);
							break;
						case 1:
							e.depthFunc(e.ALWAYS);
							break;
						case 2:
							e.depthFunc(e.LESS);
							break;
						case 3:
							e.depthFunc(e.LEQUAL);
							break;
						case 4:
							e.depthFunc(e.EQUAL);
							break;
						case 5:
							e.depthFunc(e.GEQUAL);
							break;
						case 6:
							e.depthFunc(e.GREATER);
							break;
						case 7:
							e.depthFunc(e.NOTEQUAL);
							break;
						default: e.depthFunc(e.LEQUAL);
					}
					a = t;
				}
			},
			setLocked: function(e) {
				n = e;
			},
			setClear: function(t) {
				o !== t && (o = t, r && (t = 1 - t), e.clearDepth(t));
			},
			reset: function() {
				n = !1, i = null, a = null, o = null, r = !1;
			}
		};
	}(), i = new function() {
		let t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
		return {
			setTest: function(n) {
				t || (n ? pe(e.STENCIL_TEST) : me(e.STENCIL_TEST));
			},
			setMask: function(r) {
				n !== r && !t && (e.stencilMask(r), n = r);
			},
			setFunc: function(t, n, o) {
				(r !== t || i !== n || a !== o) && (e.stencilFunc(t, n, o), r = t, i = n, a = o);
			},
			setOp: function(t, n, r) {
				(o !== t || s !== n || c !== r) && (e.stencilOp(t, n, r), o = t, s = n, c = r);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				l !== t && (e.clearStencil(t), l = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null, a = null, o = null, s = null, c = null, l = null;
			}
		};
	}(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), c = {}, l = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), f = [], p = null, m = !1, h = null, g = null, _ = null, v = null, y = null, x = null, S = null, C = new b(0, 0, 0), w = 0, T = !1, ee = null, E = null, D = null, O = null, te = null, ne = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), re = !1, k = 0, ie = e.getParameter(e.VERSION);
	ie.indexOf("WebGL") === -1 ? ie.indexOf("OpenGL ES") !== -1 && (k = parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]), re = k >= 2) : (k = parseFloat(/^WebGL (\d)/.exec(ie)[1]), re = k >= 1);
	let ae = null, oe = {}, se = e.getParameter(e.SCISSOR_BOX), ce = e.getParameter(e.VIEWPORT), le = new N().fromArray(se), ue = new N().fromArray(ce);
	function de(t, n, r, i) {
		let a = /* @__PURE__ */ new Uint8Array(4), o = e.createTexture();
		e.bindTexture(t, o), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
		for (let o = 0; o < r; o++) t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + o, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
		return o;
	}
	let fe = {};
	function pe(t) {
		!0 !== c[t] && (e.enable(t), c[t] = !0);
	}
	function me(t) {
		!1 !== c[t] && (e.disable(t), c[t] = !1);
	}
	fe[e.TEXTURE_2D] = de(e.TEXTURE_2D, e.TEXTURE_2D, 1), fe[e.TEXTURE_CUBE_MAP] = de(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), fe[e.TEXTURE_2D_ARRAY] = de(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), fe[e.TEXTURE_3D] = de(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), n.setClear(0, 0, 0, 1), r.setClear(1), i.setClear(0), pe(e.DEPTH_TEST), r.setFunc(3), A(!1), j(1), pe(e.CULL_FACE), _e(0);
	let he = {
		100: e.FUNC_ADD,
		101: e.FUNC_SUBTRACT,
		102: e.FUNC_REVERSE_SUBTRACT
	};
	he[103] = e.MIN, he[104] = e.MAX;
	let ge = {
		200: e.ZERO,
		201: e.ONE,
		202: e.SRC_COLOR,
		204: e.SRC_ALPHA,
		210: e.SRC_ALPHA_SATURATE,
		208: e.DST_COLOR,
		206: e.DST_ALPHA,
		203: e.ONE_MINUS_SRC_COLOR,
		205: e.ONE_MINUS_SRC_ALPHA,
		209: e.ONE_MINUS_DST_COLOR,
		207: e.ONE_MINUS_DST_ALPHA,
		211: e.CONSTANT_COLOR,
		212: e.ONE_MINUS_CONSTANT_COLOR,
		213: e.CONSTANT_ALPHA,
		214: e.ONE_MINUS_CONSTANT_ALPHA
	};
	function _e(t, n, r, i, a, o, s, c, l, u) {
		if (t !== 0) {
			if (!1 === m && (pe(e.BLEND), m = !0), t === 5) a ||= n, o ||= r, s ||= i, (n !== g || a !== y) && (e.blendEquationSeparate(he[n], he[a]), g = n, y = a), (r !== _ || i !== v || o !== x || s !== S) && (e.blendFuncSeparate(ge[r], ge[i], ge[o], ge[s]), _ = r, v = i, x = o, S = s), (!1 === c.equals(C) || l !== w) && (e.blendColor(c.r, c.g, c.b, l), C.copy(c), w = l), h = t, T = !1;
			else if (t !== h || u !== T) {
				if ((g !== 100 || y !== 100) && (e.blendEquation(e.FUNC_ADD), g = 100, y = 100), u) switch (t) {
					case 1:
						e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.ONE, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
						break;
					default: M("WebGLState: Invalid blending: ", t);
				}
				else switch (t) {
					case 1:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
						break;
					case 3:
						M("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
						break;
					case 4:
						M("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
						break;
					default: M("WebGLState: Invalid blending: ", t);
				}
				_ = null, v = null, x = null, S = null, C.set(0, 0, 0), w = 0, h = t, T = u;
			}
		} else !0 === m && (me(e.BLEND), m = !1);
	}
	function A(t) {
		ee !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), ee = t);
	}
	function j(t) {
		t === 0 ? me(e.CULL_FACE) : (pe(e.CULL_FACE), t !== E && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), E = t;
	}
	function ve(t, n, i) {
		t ? (pe(e.POLYGON_OFFSET_FILL), (O !== n || te !== i) && (O = n, te = i, r.getReversed() && (n = -n), e.polygonOffset(n, i))) : me(e.POLYGON_OFFSET_FILL);
	}
	return {
		buffers: {
			color: n,
			depth: r,
			stencil: i
		},
		enable: pe,
		disable: me,
		bindFramebuffer: function(t, n) {
			return u[t] !== n && (e.bindFramebuffer(t, n), u[t] = n, t === e.DRAW_FRAMEBUFFER && (u[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (u[e.DRAW_FRAMEBUFFER] = n), !0);
		},
		drawBuffers: function(t, n) {
			let r = f, i = !1;
			if (t) {
				r = d.get(n), r === void 0 && (r = [], d.set(n, r));
				let a = t.textures;
				if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
					for (let t = 0, n = a.length; t < n; t++) r[t] = e.COLOR_ATTACHMENT0 + t;
					r.length = a.length, i = !0;
				}
			} else r[0] !== e.BACK && (r[0] = e.BACK, i = !0);
			i && e.drawBuffers(r);
		},
		useProgram: function(t) {
			return p !== t && (e.useProgram(t), p = t, !0);
		},
		setBlending: _e,
		setMaterial: function(t, a) {
			t.side === 2 ? me(e.CULL_FACE) : pe(e.CULL_FACE);
			let o = t.side === 1;
			a && (o = !o), A(o), t.blending === 1 && !1 === t.transparent ? _e(0) : _e(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha), r.setFunc(t.depthFunc), r.setTest(t.depthTest), r.setMask(t.depthWrite), n.setMask(t.colorWrite);
			let s = t.stencilWrite;
			i.setTest(s), s && (i.setMask(t.stencilWriteMask), i.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), i.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), ve(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? pe(e.SAMPLE_ALPHA_TO_COVERAGE) : me(e.SAMPLE_ALPHA_TO_COVERAGE);
		},
		setFlipSided: A,
		setCullFace: j,
		setLineWidth: function(t) {
			t !== D && (re && e.lineWidth(t), D = t);
		},
		setPolygonOffset: ve,
		setScissorTest: function(t) {
			t ? pe(e.SCISSOR_TEST) : me(e.SCISSOR_TEST);
		},
		activeTexture: function(t) {
			t === void 0 && (t = e.TEXTURE0 + ne - 1), ae !== t && (e.activeTexture(t), ae = t);
		},
		bindTexture: function(t, n, r) {
			r === void 0 && (r = ae === null ? e.TEXTURE0 + ne - 1 : ae);
			let i = oe[r];
			i === void 0 && (i = {
				type: void 0,
				texture: void 0
			}, oe[r] = i), (i.type !== t || i.texture !== n) && (ae !== r && (e.activeTexture(r), ae = r), e.bindTexture(t, n || fe[t]), i.type = t, i.texture = n);
		},
		unbindTexture: function() {
			let t = oe[ae];
			t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
		},
		compressedTexImage2D: function() {
			try {
				e.compressedTexImage2D(...arguments);
			} catch (e) {
				M("WebGLState:", e);
			}
		},
		compressedTexImage3D: function() {
			try {
				e.compressedTexImage3D(...arguments);
			} catch (e) {
				M("WebGLState:", e);
			}
		},
		texImage2D: function() {
			try {
				e.texImage2D(...arguments);
			} catch (e) {
				M("WebGLState:", e);
			}
		},
		texImage3D: function() {
			try {
				e.texImage3D(...arguments);
			} catch (e) {
				M("WebGLState:", e);
			}
		},
		pixelStorei: function(t, n) {
			l[t] !== n && (e.pixelStorei(t, n), l[t] = n);
		},
		getParameter: function(t) {
			return l[t] === void 0 ? e.getParameter(t) : l[t];
		},
		updateUBOMapping: function(t, n) {
			let r = o.get(n);
			r === void 0 && (r = /* @__PURE__ */ new WeakMap(), o.set(n, r));
			let i = r.get(t);
			i === void 0 && (i = e.getUniformBlockIndex(n, t.name), r.set(t, i));
		},
		uniformBlockBinding: function(t, n) {
			let r = o.get(n).get(t);
			a.get(n) !== r && (e.uniformBlockBinding(n, r, t.__bindingPointIndex), a.set(n, r));
		},
		texStorage2D: function() {
			try {
				e.texStorage2D(...arguments);
			} catch (e) {
				M("WebGLState:", e);
			}
		},
		texStorage3D: function() {
			try {
				e.texStorage3D(...arguments);
			} catch (e) {
				M("WebGLState:", e);
			}
		},
		texSubImage2D: function() {
			try {
				e.texSubImage2D(...arguments);
			} catch (e) {
				M("WebGLState:", e);
			}
		},
		texSubImage3D: function() {
			try {
				e.texSubImage3D(...arguments);
			} catch (e) {
				M("WebGLState:", e);
			}
		},
		compressedTexSubImage2D: function() {
			try {
				e.compressedTexSubImage2D(...arguments);
			} catch (e) {
				M("WebGLState:", e);
			}
		},
		compressedTexSubImage3D: function() {
			try {
				e.compressedTexSubImage3D(...arguments);
			} catch (e) {
				M("WebGLState:", e);
			}
		},
		scissor: function(t) {
			!1 === le.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), le.copy(t));
		},
		viewport: function(t) {
			!1 === ue.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), ue.copy(t));
		},
		reset: function() {
			e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), r.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), c = {}, l = {}, ae = null, oe = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), f = [], p = null, m = !1, h = null, g = null, _ = null, v = null, y = null, x = null, S = null, C = new b(0, 0, 0), w = 0, T = !1, ee = null, E = null, D = null, O = null, te = null, le.set(0, 0, e.canvas.width, e.canvas.height), ue.set(0, 0, e.canvas.width, e.canvas.height), n.reset(), r.reset(), i.reset();
		}
	};
}
function Fi(e, t, n, r, i, a, s) {
	let l, u = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, d = !(typeof navigator > "u") && /OculusBrowser/g.test(navigator.userAgent), f = new _(), p = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new WeakMap(), v = !1;
	try {
		v = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
	} catch {}
	function b(e, t) {
		return v ? new OffscreenCanvas(e, t) : o("canvas");
	}
	function S(e, t, n) {
		let r = 1, i = Te(e);
		if ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)), r < 1) {
			if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof VideoFrame < "u" && e instanceof VideoFrame) {
				let n = Math.floor(r * i.width), a = Math.floor(r * i.height);
				l === void 0 && (l = b(n, a));
				let o = t ? b(n, a) : l;
				return o.width = n, o.height = a, o.getContext("2d").drawImage(e, 0, 0, n, a), j("WebGLRenderer: Texture has been resized from (" + i.width + "x" + i.height + ") to (" + n + "x" + a + ")."), o;
			}
			return "data" in e && j("WebGLRenderer: Image in DataTexture is too big (" + i.width + "x" + i.height + ")."), e;
		}
		return e;
	}
	function C(e) {
		return e.generateMipmaps;
	}
	function w(t) {
		e.generateMipmap(t);
	}
	function T(t) {
		return t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : t.isWebGL3DRenderTarget ? e.TEXTURE_3D : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
	}
	function ee(n, r, i, a, o, s = !1) {
		if (n !== null) {
			if (e[n] !== void 0) return e[n];
			j("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
		}
		let l;
		a && (l = t.get("EXT_texture_norm16"), l || j("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
		let u = r;
		if (r === e.RED && (i === e.FLOAT && (u = e.R32F), i === e.HALF_FLOAT && (u = e.R16F), i === e.UNSIGNED_BYTE && (u = e.R8), i === e.UNSIGNED_SHORT && l && (u = l.R16_EXT), i === e.SHORT && l && (u = l.R16_SNORM_EXT)), r === e.RED_INTEGER && (i === e.UNSIGNED_BYTE && (u = e.R8UI), i === e.UNSIGNED_SHORT && (u = e.R16UI), i === e.UNSIGNED_INT && (u = e.R32UI), i === e.BYTE && (u = e.R8I), i === e.SHORT && (u = e.R16I), i === e.INT && (u = e.R32I)), r === e.RG && (i === e.FLOAT && (u = e.RG32F), i === e.HALF_FLOAT && (u = e.RG16F), i === e.UNSIGNED_BYTE && (u = e.RG8), i === e.UNSIGNED_SHORT && l && (u = l.RG16_EXT), i === e.SHORT && l && (u = l.RG16_SNORM_EXT)), r === e.RG_INTEGER && (i === e.UNSIGNED_BYTE && (u = e.RG8UI), i === e.UNSIGNED_SHORT && (u = e.RG16UI), i === e.UNSIGNED_INT && (u = e.RG32UI), i === e.BYTE && (u = e.RG8I), i === e.SHORT && (u = e.RG16I), i === e.INT && (u = e.RG32I)), r === e.RGB_INTEGER && (i === e.UNSIGNED_BYTE && (u = e.RGB8UI), i === e.UNSIGNED_SHORT && (u = e.RGB16UI), i === e.UNSIGNED_INT && (u = e.RGB32UI), i === e.BYTE && (u = e.RGB8I), i === e.SHORT && (u = e.RGB16I), i === e.INT && (u = e.RGB32I)), r === e.RGBA_INTEGER && (i === e.UNSIGNED_BYTE && (u = e.RGBA8UI), i === e.UNSIGNED_SHORT && (u = e.RGBA16UI), i === e.UNSIGNED_INT && (u = e.RGBA32UI), i === e.BYTE && (u = e.RGBA8I), i === e.SHORT && (u = e.RGBA16I), i === e.INT && (u = e.RGBA32I)), r === e.RGB && (i === e.UNSIGNED_SHORT && l && (u = l.RGB16_EXT), i === e.SHORT && l && (u = l.RGB16_SNORM_EXT), i === e.UNSIGNED_INT_5_9_9_9_REV && (u = e.RGB9_E5), i === e.UNSIGNED_INT_10F_11F_11F_REV && (u = e.R11F_G11F_B10F)), r === e.RGBA) {
			let t = s ? y : c.getTransfer(o);
			i === e.FLOAT && (u = e.RGBA32F), i === e.HALF_FLOAT && (u = e.RGBA16F), i === e.UNSIGNED_BYTE && (u = t === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), i === e.UNSIGNED_SHORT && l && (u = l.RGBA16_EXT), i === e.SHORT && l && (u = l.RGBA16_SNORM_EXT), i === e.UNSIGNED_SHORT_4_4_4_4 && (u = e.RGBA4), i === e.UNSIGNED_SHORT_5_5_5_1 && (u = e.RGB5_A1);
		}
		return (u === e.R16F || u === e.R32F || u === e.RG16F || u === e.RG32F || u === e.RGBA16F || u === e.RGBA32F) && t.get("EXT_color_buffer_float"), u;
	}
	function E(t, n) {
		let r;
		return t ? n === null || n === 1014 || n === 1020 ? r = e.DEPTH24_STENCIL8 : n === 1015 ? r = e.DEPTH32F_STENCIL8 : n === 1012 && (r = e.DEPTH24_STENCIL8, j("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : n === null || n === 1014 || n === 1020 ? r = e.DEPTH_COMPONENT24 : n === 1015 ? r = e.DEPTH_COMPONENT32F : n === 1012 && (r = e.DEPTH_COMPONENT16), r;
	}
	function D(e, t) {
		return !0 === C(e) || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps !== void 0 && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1;
	}
	function O(e) {
		let t = e.target;
		t.removeEventListener("dispose", O), function(e) {
			let t = r.get(e);
			if (t.__webglInit === void 0) return;
			let n = e.source, i = h.get(n);
			if (i) {
				let r = i[t.__cacheKey];
				r.usedTimes--, r.usedTimes === 0 && re(e), Object.keys(i).length === 0 && h.delete(n);
			}
			r.remove(e);
		}(t), t.isVideoTexture && p.delete(t), t.isHTMLTexture && m.delete(t);
	}
	function ne(t) {
		let n = t.target;
		n.removeEventListener("dispose", ne), function(t) {
			let n = r.get(t);
			if (t.depthTexture && (t.depthTexture.dispose(), r.remove(t.depthTexture)), t.isWebGLCubeRenderTarget) for (let t = 0; t < 6; t++) {
				if (Array.isArray(n.__webglFramebuffer[t])) for (let r = 0; r < n.__webglFramebuffer[t].length; r++) e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
				else e.deleteFramebuffer(n.__webglFramebuffer[t]);
				n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
			}
			else {
				if (Array.isArray(n.__webglFramebuffer)) for (let t = 0; t < n.__webglFramebuffer.length; t++) e.deleteFramebuffer(n.__webglFramebuffer[t]);
				else e.deleteFramebuffer(n.__webglFramebuffer);
				if (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer) for (let t = 0; t < n.__webglColorRenderbuffer.length; t++) n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
				n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
			}
			let i = t.textures;
			for (let t = 0, n = i.length; t < n; t++) {
				let n = r.get(i[t]);
				n.__webglTexture && (e.deleteTexture(n.__webglTexture), s.memory.textures--), r.remove(i[t]);
			}
			r.remove(t);
		}(n);
	}
	function re(t) {
		let n = r.get(t);
		e.deleteTexture(n.__webglTexture);
		let i = t.source;
		delete h.get(i)[n.__cacheKey], s.memory.textures--;
	}
	let ie = 0;
	function ae(t, i) {
		let a = r.get(t);
		if (t.isVideoTexture && function(e) {
			let t = s.render.frame;
			p.get(e) !== t && (p.set(e, t), e.update());
		}(t), !1 === t.isRenderTargetTexture && !0 !== t.isExternalTexture && t.version > 0 && a.__version !== t.version) {
			let e = t.image;
			if (e === null) j("WebGLRenderer: Texture marked for update but no image data found.");
			else {
				if (!1 !== e.complete) return void me(a, t, i);
				j("WebGLRenderer: Texture marked for update but image is incomplete");
			}
		} else t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
		n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i);
	}
	let se = {
		[te]: e.REPEAT,
		[k]: e.CLAMP_TO_EDGE,
		[Le]: e.MIRRORED_REPEAT
	}, le = {
		[Ie]: e.NEAREST,
		[oe]: e.NEAREST_MIPMAP_NEAREST,
		[be]: e.NEAREST_MIPMAP_LINEAR,
		[g]: e.LINEAR,
		[x]: e.LINEAR_MIPMAP_NEAREST,
		[ce]: e.LINEAR_MIPMAP_LINEAR
	}, ue = {
		512: e.NEVER,
		519: e.ALWAYS,
		513: e.LESS,
		515: e.LEQUAL,
		514: e.EQUAL,
		518: e.GEQUAL,
		516: e.GREATER,
		517: e.NOTEQUAL
	};
	function de(n, a) {
		if (a.type === 1015 && !1 === t.has("OES_texture_float_linear") && (a.magFilter === 1006 || a.magFilter === 1007 || a.magFilter === 1005 || a.magFilter === 1008 || a.minFilter === 1006 || a.minFilter === 1007 || a.minFilter === 1005 || a.minFilter === 1008) && j("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(n, e.TEXTURE_WRAP_S, se[a.wrapS]), e.texParameteri(n, e.TEXTURE_WRAP_T, se[a.wrapT]), (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, se[a.wrapR]), e.texParameteri(n, e.TEXTURE_MAG_FILTER, le[a.magFilter]), e.texParameteri(n, e.TEXTURE_MIN_FILTER, le[a.minFilter]), a.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, ue[a.compareFunction])), !0 === t.has("EXT_texture_filter_anisotropic")) {
			if (a.magFilter === 1003 || a.minFilter !== 1005 && a.minFilter !== 1008 || a.type === 1015 && !1 === t.has("OES_texture_float_linear")) return;
			if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
				let o = t.get("EXT_texture_filter_anisotropic");
				e.texParameterf(n, o.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy())), r.get(a).__currentAnisotropy = a.anisotropy;
			}
		}
	}
	function fe(t, n) {
		let r = !1;
		t.__webglInit === void 0 && (t.__webglInit = !0, n.addEventListener("dispose", O));
		let i = n.source, a = h.get(i);
		a === void 0 && (a = {}, h.set(i, a));
		let o = function(e) {
			let t = [];
			return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.colorSpace), t.join();
		}(n);
		if (o !== t.__cacheKey) {
			a[o] === void 0 && (a[o] = {
				texture: e.createTexture(),
				usedTimes: 0
			}, s.memory.textures++, r = !0), a[o].usedTimes++;
			let i = a[t.__cacheKey];
			i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && re(n)), t.__cacheKey = o, t.__webglTexture = a[o].texture;
		}
		return r;
	}
	function pe(e, t, n) {
		return Math.floor(Math.floor(e / n) / t);
	}
	function me(t, o, s) {
		let l = e.TEXTURE_2D;
		(o.isDataArrayTexture || o.isCompressedArrayTexture) && (l = e.TEXTURE_2D_ARRAY), o.isData3DTexture && (l = e.TEXTURE_3D);
		let u = fe(t, o), d = o.source;
		n.bindTexture(l, t.__webglTexture, e.TEXTURE0 + s);
		let f = r.get(d);
		if (d.version !== f.__version || !0 === u) {
			if (n.activeTexture(e.TEXTURE0 + s), (typeof ImageBitmap < "u" && o.image instanceof ImageBitmap) == 0) {
				let t = c.getPrimaries(c.workingColorSpace), r = o.colorSpace === "" ? null : c.getPrimaries(o.colorSpace), i = o.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
				n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, i);
			}
			n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment);
			let t = S(o.image, !1, i.maxTextureSize);
			t = we(o, t);
			let r = a.convert(o.format, o.colorSpace), p = a.convert(o.type), h = ee(o.internalFormat, r, p, o.normalized, o.colorSpace, o.isVideoTexture);
			de(l, o);
			let g, _ = o.mipmaps, v = !0 !== o.isVideoTexture, y = f.__version === void 0 || !0 === u, b = d.dataReady, x = D(o, t);
			if (o.isDepthTexture) h = E(o.format === Fe, o.type), y && (v ? n.texStorage2D(e.TEXTURE_2D, 1, h, t.width, t.height) : n.texImage2D(e.TEXTURE_2D, 0, h, t.width, t.height, 0, r, p, null));
			else if (o.isDataTexture) {
				if (_.length > 0) {
					v && y && n.texStorage2D(e.TEXTURE_2D, x, h, _[0].width, _[0].height);
					for (let t = 0, i = _.length; t < i; t++) g = _[t], v ? b && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, g.width, g.height, r, p, g.data) : n.texImage2D(e.TEXTURE_2D, t, h, g.width, g.height, 0, r, p, g.data);
					o.generateMipmaps = !1;
				} else v ? (y && n.texStorage2D(e.TEXTURE_2D, x, h, t.width, t.height), b && function(t, r, i, a) {
					let o = t.updateRanges;
					if (o.length === 0) n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r.width, r.height, i, a, r.data);
					else {
						o.sort((e, t) => e.start - t.start);
						let s = 0;
						for (let e = 1; e < o.length; e++) {
							let t = o[s], n = o[e], i = t.start + t.count, a = pe(n.start, r.width, 4), c = pe(t.start, r.width, 4);
							n.start <= i + 1 && a === c && pe(n.start + n.count - 1, r.width, 4) === a ? t.count = Math.max(t.count, n.start + n.count - t.start) : (++s, o[s] = n);
						}
						o.length = s + 1;
						let c = n.getParameter(e.UNPACK_ROW_LENGTH), l = n.getParameter(e.UNPACK_SKIP_PIXELS), u = n.getParameter(e.UNPACK_SKIP_ROWS);
						n.pixelStorei(e.UNPACK_ROW_LENGTH, r.width);
						for (let t = 0, s = o.length; t < s; t++) {
							let s = o[t], c = Math.floor(s.start / 4), l = Math.ceil(s.count / 4), u = c % r.width, d = Math.floor(c / r.width), f = l;
							n.pixelStorei(e.UNPACK_SKIP_PIXELS, u), n.pixelStorei(e.UNPACK_SKIP_ROWS, d), n.texSubImage2D(e.TEXTURE_2D, 0, u, d, f, 1, i, a, r.data);
						}
						t.clearUpdateRanges(), n.pixelStorei(e.UNPACK_ROW_LENGTH, c), n.pixelStorei(e.UNPACK_SKIP_PIXELS, l), n.pixelStorei(e.UNPACK_SKIP_ROWS, u);
					}
				}(o, t, r, p)) : n.texImage2D(e.TEXTURE_2D, 0, h, t.width, t.height, 0, r, p, t.data);
			} else if (o.isCompressedTexture) {
				if (o.isCompressedArrayTexture) {
					v && y && n.texStorage3D(e.TEXTURE_2D_ARRAY, x, h, _[0].width, _[0].height, t.depth);
					for (let i = 0, a = _.length; i < a; i++) if (g = _[i], o.format !== 1023) {
						if (r !== null) {
							if (v) {
								if (b) {
									if (o.layerUpdates.size > 0) {
										let t = ge(g.width, g.height, o.format, o.type);
										for (let a of o.layerUpdates) {
											let o = g.data.subarray(a * t / g.data.BYTES_PER_ELEMENT, (a + 1) * t / g.data.BYTES_PER_ELEMENT);
											n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, a, g.width, g.height, 1, r, o);
										}
										o.clearLayerUpdates();
									} else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, g.width, g.height, t.depth, r, g.data);
								}
							} else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, i, h, g.width, g.height, t.depth, 0, g.data, 0, 0);
						} else j("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
					} else v ? b && n.texSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, g.width, g.height, t.depth, r, p, g.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, i, h, g.width, g.height, t.depth, 0, r, p, g.data);
				} else {
					v && y && n.texStorage2D(e.TEXTURE_2D, x, h, _[0].width, _[0].height);
					for (let t = 0, i = _.length; t < i; t++) g = _[t], o.format === 1023 ? v ? b && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, g.width, g.height, r, p, g.data) : n.texImage2D(e.TEXTURE_2D, t, h, g.width, g.height, 0, r, p, g.data) : r === null ? j("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : v ? b && n.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, g.width, g.height, r, g.data) : n.compressedTexImage2D(e.TEXTURE_2D, t, h, g.width, g.height, 0, g.data);
				}
			} else if (o.isDataArrayTexture) {
				if (v) {
					if (y && n.texStorage3D(e.TEXTURE_2D_ARRAY, x, h, t.width, t.height, t.depth), b) {
						if (o.layerUpdates.size > 0) {
							let i = ge(t.width, t.height, o.format, o.type);
							for (let a of o.layerUpdates) {
								let o = t.data.subarray(a * i / t.data.BYTES_PER_ELEMENT, (a + 1) * i / t.data.BYTES_PER_ELEMENT);
								n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, a, t.width, t.height, 1, r, p, o);
							}
							o.clearLayerUpdates();
						} else n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, t.width, t.height, t.depth, r, p, t.data);
					}
				} else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, h, t.width, t.height, t.depth, 0, r, p, t.data);
			} else if (o.isData3DTexture) v ? (y && n.texStorage3D(e.TEXTURE_3D, x, h, t.width, t.height, t.depth), b && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, t.width, t.height, t.depth, r, p, t.data)) : n.texImage3D(e.TEXTURE_3D, 0, h, t.width, t.height, t.depth, 0, r, p, t.data);
			else if (o.isFramebufferTexture) {
				if (y) {
					if (v) n.texStorage2D(e.TEXTURE_2D, x, h, t.width, t.height);
					else {
						let i = t.width, a = t.height;
						for (let t = 0; t < x; t++) n.texImage2D(e.TEXTURE_2D, t, h, i, a, 0, r, p, null), i >>= 1, a >>= 1;
					}
				}
			} else if (o.isHTMLTexture) {
				if ("texElementImage2D" in e) {
					let n = e.canvas;
					if (n.hasAttribute("layoutsubtree") || n.setAttribute("layoutsubtree", "true"), t.parentNode !== n) return n.appendChild(t), m.add(o), n.onpaint = (e) => {
						let t = e.changedElements;
						for (let e of m) t.includes(e.image) && (e.needsUpdate = !0);
					}, void n.requestPaint();
					if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, t);
					else {
						let n = e.RGBA, r = e.RGBA, i = e.UNSIGNED_BYTE;
						e.texElementImage2D(e.TEXTURE_2D, 0, n, r, i, t);
					}
					e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
				}
			} else if (_.length > 0) {
				if (v && y) {
					let t = Te(_[0]);
					n.texStorage2D(e.TEXTURE_2D, x, h, t.width, t.height);
				}
				for (let t = 0, i = _.length; t < i; t++) g = _[t], v ? b && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, r, p, g) : n.texImage2D(e.TEXTURE_2D, t, h, r, p, g);
				o.generateMipmaps = !1;
			} else if (v) {
				if (y) {
					let r = Te(t);
					n.texStorage2D(e.TEXTURE_2D, x, h, r.width, r.height);
				}
				b && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r, p, t);
			} else n.texImage2D(e.TEXTURE_2D, 0, h, r, p, t);
			C(o) && w(l), f.__version = d.version, o.onUpdate && o.onUpdate(o);
		}
		t.__version = o.version;
	}
	function he(t, i, o, s, c, l) {
		let d = a.convert(o.format, o.colorSpace), f = a.convert(o.type), p = ee(o.internalFormat, d, f, o.normalized, o.colorSpace), m = r.get(i), h = r.get(o);
		if (h.__renderTarget = i, !m.__hasExternalTextures) {
			let t = Math.max(1, i.width >> l), r = Math.max(1, i.height >> l);
			c === e.TEXTURE_3D || c === e.TEXTURE_2D_ARRAY ? n.texImage3D(c, l, p, t, r, i.depth, 0, d, f, null) : n.texImage2D(c, l, p, t, r, 0, d, f, null);
		}
		n.bindFramebuffer(e.FRAMEBUFFER, t), Ce(i) ? u.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, s, c, h.__webglTexture, 0, Se(i)) : (c === e.TEXTURE_2D || c >= e.TEXTURE_CUBE_MAP_POSITIVE_X && c <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, s, c, h.__webglTexture, l), n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function _e(t, n, r) {
		if (e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer) {
			let i = n.depthTexture, a = i && i.isDepthTexture ? i.type : null, o = E(n.stencilBuffer, a), s = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
			Ce(n) ? u.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, Se(n), o, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, Se(n), o, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, o, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, s, e.RENDERBUFFER, t);
		} else {
			let t = n.textures;
			for (let i = 0; i < t.length; i++) {
				let o = t[i], s = a.convert(o.format, o.colorSpace), c = a.convert(o.type), l = ee(o.internalFormat, s, c, o.normalized, o.colorSpace);
				Ce(n) ? u.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, Se(n), l, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, Se(n), l, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, l, n.width, n.height);
			}
		}
		e.bindRenderbuffer(e.RENDERBUFFER, null);
	}
	function A(t, i, o) {
		let s = !0 === i.isWebGLCubeRenderTarget;
		if (n.bindFramebuffer(e.FRAMEBUFFER, t), !i.depthTexture || !i.depthTexture.isDepthTexture) throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
		let c = r.get(i.depthTexture);
		if (c.__renderTarget = i, (!c.__webglTexture || i.depthTexture.image.width !== i.width || i.depthTexture.image.height !== i.height) && (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), s) {
			if (c.__webglInit === void 0 && (c.__webglInit = !0, i.depthTexture.addEventListener("dispose", O)), c.__webglTexture === void 0) {
				c.__webglTexture = e.createTexture(), n.bindTexture(e.TEXTURE_CUBE_MAP, c.__webglTexture), de(e.TEXTURE_CUBE_MAP, i.depthTexture);
				let t, r = a.convert(i.depthTexture.format), o = a.convert(i.depthTexture.type);
				i.depthTexture.format === 1026 ? t = e.DEPTH_COMPONENT24 : i.depthTexture.format === 1027 && (t = e.DEPTH24_STENCIL8);
				for (let n = 0; n < 6; n++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, t, i.width, i.height, 0, r, o, null);
			}
		} else ae(i.depthTexture, 0);
		let l = c.__webglTexture, d = Se(i), f = s ? e.TEXTURE_CUBE_MAP_POSITIVE_X + o : e.TEXTURE_2D, p = i.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
		if (i.depthTexture.format === 1026) Ce(i) ? u.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, l, 0, d) : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, l, 0);
		else {
			if (i.depthTexture.format !== 1027) throw Error("THREE.WebGLTextures: Unknown depthTexture format.");
			Ce(i) ? u.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, p, f, l, 0, d) : e.framebufferTexture2D(e.FRAMEBUFFER, p, f, l, 0);
		}
	}
	function ve(t) {
		let i = r.get(t), a = !0 === t.isWebGLCubeRenderTarget;
		if (i.__boundDepthTexture !== t.depthTexture) {
			let e = t.depthTexture;
			if (i.__depthDisposeCallback && i.__depthDisposeCallback(), e) {
				let t = () => {
					delete i.__boundDepthTexture, delete i.__depthDisposeCallback, e.removeEventListener("dispose", t);
				};
				e.addEventListener("dispose", t), i.__depthDisposeCallback = t;
			}
			i.__boundDepthTexture = e;
		}
		if (t.depthTexture && !i.__autoAllocateDepthBuffer) {
			if (a) for (let e = 0; e < 6; e++) A(i.__webglFramebuffer[e], t, e);
			else {
				let e = t.texture.mipmaps;
				e && e.length > 0 ? A(i.__webglFramebuffer[0], t, 0) : A(i.__webglFramebuffer, t, 0);
			}
		} else if (a) {
			i.__webglDepthbuffer = [];
			for (let r = 0; r < 6; r++) if (n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]), i.__webglDepthbuffer[r] === void 0) i.__webglDepthbuffer[r] = e.createRenderbuffer(), _e(i.__webglDepthbuffer[r], t, !1);
			else {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, a = i.__webglDepthbuffer[r];
				e.bindRenderbuffer(e.RENDERBUFFER, a), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a);
			}
		} else {
			let r = t.texture.mipmaps;
			if (r && r.length > 0 ? n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[0]) : n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer === void 0) i.__webglDepthbuffer = e.createRenderbuffer(), _e(i.__webglDepthbuffer, t, !1);
			else {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, r = i.__webglDepthbuffer;
				e.bindRenderbuffer(e.RENDERBUFFER, r), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, r);
			}
		}
		n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	let ye = [], xe = [];
	function Se(e) {
		return Math.min(i.maxSamples, e.samples);
	}
	function Ce(e) {
		let n = r.get(e);
		return e.samples > 0 && !0 === t.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture;
	}
	function we(e, t) {
		let n = e.colorSpace, r = e.format, i = e.type;
		return !0 === e.isCompressedTexture || !0 === e.isVideoTexture || n !== "srgb-linear" && n !== "" && (c.getTransfer(n) === "srgb" ? (r !== 1023 || i !== 1009) && j("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : M("WebGLTextures: Unsupported texture color space:", n)), t;
	}
	function Te(e) {
		return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement ? (f.width = e.naturalWidth || e.width, f.height = e.naturalHeight || e.height) : typeof VideoFrame < "u" && e instanceof VideoFrame ? (f.width = e.displayWidth, f.height = e.displayHeight) : (f.width = e.width, f.height = e.height), f;
	}
	this.allocateTextureUnit = function() {
		let e = ie;
		return e >= i.maxTextures && j("WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + i.maxTextures), ie += 1, e;
	}, this.resetTextureUnits = function() {
		ie = 0;
	}, this.getTextureUnits = function() {
		return ie;
	}, this.setTextureUnits = function(e) {
		ie = e;
	}, this.setTexture2D = ae, this.setTexture2DArray = function(t, i) {
		let a = r.get(t);
		!1 === t.isRenderTargetTexture && t.version > 0 && a.__version !== t.version ? me(a, t, i) : (t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null), n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i));
	}, this.setTexture3D = function(t, i) {
		let a = r.get(t);
		!1 === t.isRenderTargetTexture && t.version > 0 && a.__version !== t.version ? me(a, t, i) : n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
	}, this.setTextureCube = function(t, o) {
		let s = r.get(t);
		!0 !== t.isCubeDepthTexture && t.version > 0 && s.__version !== t.version ? function(t, o, s) {
			if (o.image.length !== 6) return;
			let l = fe(t, o), u = o.source;
			n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + s);
			let d = r.get(u);
			if (u.version !== d.__version || !0 === l) {
				n.activeTexture(e.TEXTURE0 + s);
				let t = c.getPrimaries(c.workingColorSpace), r = o.colorSpace === "" ? null : c.getPrimaries(o.colorSpace), f = o.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
				n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, o.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, o.premultiplyAlpha), n.pixelStorei(e.UNPACK_ALIGNMENT, o.unpackAlignment), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, f);
				let p = o.isCompressedTexture || o.image[0].isCompressedTexture, m = o.image[0] && o.image[0].isDataTexture, h = [];
				for (let e = 0; e < 6; e++) h[e] = p || m ? m ? o.image[e].image : o.image[e] : S(o.image[e], !0, i.maxCubemapSize), h[e] = we(o, h[e]);
				let g, _ = h[0], v = a.convert(o.format, o.colorSpace), y = a.convert(o.type), b = ee(o.internalFormat, v, y, o.normalized, o.colorSpace), x = !0 !== o.isVideoTexture, T = d.__version === void 0 || !0 === l, E = u.dataReady, O = D(o, _);
				if (de(e.TEXTURE_CUBE_MAP, o), p) {
					x && T && n.texStorage2D(e.TEXTURE_CUBE_MAP, O, b, _.width, _.height);
					for (let t = 0; t < 6; t++) {
						g = h[t].mipmaps;
						for (let r = 0; r < g.length; r++) {
							let i = g[r];
							o.format === 1023 ? x ? E && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, v, y, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, b, i.width, i.height, 0, v, y, i.data) : v === null ? j("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : x ? E && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, v, i.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, b, i.width, i.height, 0, i.data);
						}
					}
				} else {
					if (g = o.mipmaps, x && T) {
						g.length > 0 && O++;
						let t = Te(h[0]);
						n.texStorage2D(e.TEXTURE_CUBE_MAP, O, b, t.width, t.height);
					}
					for (let t = 0; t < 6; t++) if (m) {
						x ? E && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, h[t].width, h[t].height, v, y, h[t].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, b, h[t].width, h[t].height, 0, v, y, h[t].data);
						for (let r = 0; r < g.length; r++) {
							let i = g[r].image[t].image;
							x ? E && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, i.width, i.height, v, y, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, b, i.width, i.height, 0, v, y, i.data);
						}
					} else {
						x ? E && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, v, y, h[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, b, v, y, h[t]);
						for (let r = 0; r < g.length; r++) {
							let i = g[r];
							x ? E && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, v, y, i.image[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, b, v, y, i.image[t]);
						}
					}
				}
				C(o) && w(e.TEXTURE_CUBE_MAP), d.__version = u.version, o.onUpdate && o.onUpdate(o);
			}
			t.__version = o.version;
		}(s, t, o) : n.bindTexture(e.TEXTURE_CUBE_MAP, s.__webglTexture, e.TEXTURE0 + o);
	}, this.rebindTextures = function(t, n, i) {
		let a = r.get(t);
		n !== void 0 && he(a.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), i !== void 0 && ve(t);
	}, this.setupRenderTarget = function(t) {
		let i = t.texture, o = r.get(t), c = r.get(i);
		t.addEventListener("dispose", ne);
		let l = t.textures, u = !0 === t.isWebGLCubeRenderTarget, d = l.length > 1;
		if (d || (c.__webglTexture === void 0 && (c.__webglTexture = e.createTexture()), c.__version = i.version, s.memory.textures++), u) {
			o.__webglFramebuffer = [];
			for (let t = 0; t < 6; t++) if (i.mipmaps && i.mipmaps.length > 0) {
				o.__webglFramebuffer[t] = [];
				for (let n = 0; n < i.mipmaps.length; n++) o.__webglFramebuffer[t][n] = e.createFramebuffer();
			} else o.__webglFramebuffer[t] = e.createFramebuffer();
		} else {
			if (i.mipmaps && i.mipmaps.length > 0) {
				o.__webglFramebuffer = [];
				for (let t = 0; t < i.mipmaps.length; t++) o.__webglFramebuffer[t] = e.createFramebuffer();
			} else o.__webglFramebuffer = e.createFramebuffer();
			if (d) for (let t = 0, n = l.length; t < n; t++) {
				let n = r.get(l[t]);
				n.__webglTexture === void 0 && (n.__webglTexture = e.createTexture(), s.memory.textures++);
			}
			if (t.samples > 0 && !1 === Ce(t)) {
				o.__webglMultisampledFramebuffer = e.createFramebuffer(), o.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, o.__webglMultisampledFramebuffer);
				for (let n = 0; n < l.length; n++) {
					let r = l[n];
					o.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, o.__webglColorRenderbuffer[n]);
					let i = a.convert(r.format, r.colorSpace), s = a.convert(r.type), c = ee(r.internalFormat, i, s, r.normalized, r.colorSpace, !0 === t.isXRRenderTarget), u = Se(t);
					e.renderbufferStorageMultisample(e.RENDERBUFFER, u, c, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, o.__webglColorRenderbuffer[n]);
				}
				e.bindRenderbuffer(e.RENDERBUFFER, null), t.depthBuffer && (o.__webglDepthRenderbuffer = e.createRenderbuffer(), _e(o.__webglDepthRenderbuffer, t, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null);
			}
		}
		if (u) {
			n.bindTexture(e.TEXTURE_CUBE_MAP, c.__webglTexture), de(e.TEXTURE_CUBE_MAP, i);
			for (let n = 0; n < 6; n++) if (i.mipmaps && i.mipmaps.length > 0) for (let r = 0; r < i.mipmaps.length; r++) he(o.__webglFramebuffer[n][r], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, r);
			else he(o.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
			C(i) && w(e.TEXTURE_CUBE_MAP), n.unbindTexture();
		} else if (d) {
			for (let i = 0, a = l.length; i < a; i++) {
				let a = l[i], s = r.get(a), c = e.TEXTURE_2D;
				(t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (c = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(c, s.__webglTexture), de(c, a), he(o.__webglFramebuffer, t, a, e.COLOR_ATTACHMENT0 + i, c, 0), C(a) && w(c);
			}
			n.unbindTexture();
		} else {
			let r = e.TEXTURE_2D;
			if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(r, c.__webglTexture), de(r, i), i.mipmaps && i.mipmaps.length > 0) for (let n = 0; n < i.mipmaps.length; n++) he(o.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, r, n);
			else he(o.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0, r, 0);
			C(i) && w(r), n.unbindTexture();
		}
		t.depthBuffer && ve(t);
	}, this.updateRenderTargetMipmap = function(e) {
		let t = e.textures;
		for (let i = 0, a = t.length; i < a; i++) {
			let a = t[i];
			if (C(a)) {
				let t = T(e), i = r.get(a).__webglTexture;
				n.bindTexture(t, i), w(t), n.unbindTexture();
			}
		}
	}, this.updateMultisampleRenderTarget = function(t) {
		if (t.samples > 0) {
			if (!1 === Ce(t)) {
				let i = t.textures, a = t.width, o = t.height, s = e.COLOR_BUFFER_BIT, c = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, l = r.get(t), u = i.length > 1;
				if (u) for (let t = 0; t < i.length; t++) n.bindFramebuffer(e.FRAMEBUFFER, l.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, l.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
				n.bindFramebuffer(e.READ_FRAMEBUFFER, l.__webglMultisampledFramebuffer);
				let f = t.texture.mipmaps;
				f && f.length > 0 ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, l.__webglFramebuffer[0]) : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, l.__webglFramebuffer);
				for (let n = 0; n < i.length; n++) {
					if (t.resolveDepthBuffer && (t.depthBuffer && (s |= e.DEPTH_BUFFER_BIT), t.stencilBuffer && t.resolveStencilBuffer && (s |= e.STENCIL_BUFFER_BIT)), u) {
						e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, l.__webglColorRenderbuffer[n]);
						let t = r.get(i[n]).__webglTexture;
						e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
					}
					e.blitFramebuffer(0, 0, a, o, 0, 0, a, o, s, e.NEAREST), !0 === d && (ye.length = 0, xe.length = 0, ye.push(e.COLOR_ATTACHMENT0 + n), t.depthBuffer && !1 === t.resolveDepthBuffer && (ye.push(c), xe.push(c), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, xe)), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, ye));
				}
				if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), u) for (let t = 0; t < i.length; t++) {
					n.bindFramebuffer(e.FRAMEBUFFER, l.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, l.__webglColorRenderbuffer[t]);
					let a = r.get(i[t]).__webglTexture;
					n.bindFramebuffer(e.FRAMEBUFFER, l.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, a, 0);
				}
				n.bindFramebuffer(e.DRAW_FRAMEBUFFER, l.__webglMultisampledFramebuffer);
			} else if (t.depthBuffer && !1 === t.resolveDepthBuffer && d) {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
				e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
			}
		}
	}, this.setupDepthRenderbuffer = ve, this.setupFrameBufferTexture = he, this.useMultisampledRTT = Ce, this.isReversedDepthBuffer = function() {
		return n.buffers.depth.getReversed();
	};
}
function Ii(e, t) {
	return { convert: function(n, r = "") {
		let i, a = c.getTransfer(r);
		if (n === 1009) return e.UNSIGNED_BYTE;
		if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
		if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
		if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
		if (n === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
		if (n === 1010) return e.BYTE;
		if (n === 1011) return e.SHORT;
		if (n === 1012) return e.UNSIGNED_SHORT;
		if (n === 1013) return e.INT;
		if (n === 1014) return e.UNSIGNED_INT;
		if (n === 1015) return e.FLOAT;
		if (n === 1016) return e.HALF_FLOAT;
		if (n === 1021) return e.ALPHA;
		if (n === 1022) return e.RGB;
		if (n === 1023) return e.RGBA;
		if (n === 1026) return e.DEPTH_COMPONENT;
		if (n === 1027) return e.DEPTH_STENCIL;
		if (n === 1028) return e.RED;
		if (n === 1029) return e.RED_INTEGER;
		if (n === 1030) return e.RG;
		if (n === 1031) return e.RG_INTEGER;
		if (n === 1033) return e.RGBA_INTEGER;
		if (n === 33776 || n === 33777 || n === 33778 || n === 33779) {
			if (a === "srgb") {
				if (i = t.get("WEBGL_compressed_texture_s3tc_srgb"), i === null) return null;
				if (n === 33776) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
				if (n === 33777) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
				if (n === 33778) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
				if (n === 33779) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
			} else {
				if (i = t.get("WEBGL_compressed_texture_s3tc"), i === null) return null;
				if (n === 33776) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
				if (n === 33777) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
				if (n === 33778) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
				if (n === 33779) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
			}
		}
		if (n === 35840 || n === 35841 || n === 35842 || n === 35843) {
			if (i = t.get("WEBGL_compressed_texture_pvrtc"), i === null) return null;
			if (n === 35840) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
			if (n === 35841) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
			if (n === 35842) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
			if (n === 35843) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
		}
		if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491) {
			if (i = t.get("WEBGL_compressed_texture_etc"), i === null) return null;
			if (n === 36196 || n === 37492) return a === "srgb" ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
			if (n === 37496) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC;
			if (n === 37488) return i.COMPRESSED_R11_EAC;
			if (n === 37489) return i.COMPRESSED_SIGNED_R11_EAC;
			if (n === 37490) return i.COMPRESSED_RG11_EAC;
			if (n === 37491) return i.COMPRESSED_SIGNED_RG11_EAC;
		}
		if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) {
			if (i = t.get("WEBGL_compressed_texture_astc"), i === null) return null;
			if (n === 37808) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
			if (n === 37809) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
			if (n === 37810) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
			if (n === 37811) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
			if (n === 37812) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
			if (n === 37813) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
			if (n === 37814) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
			if (n === 37815) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
			if (n === 37816) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
			if (n === 37817) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
			if (n === 37818) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
			if (n === 37819) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
			if (n === 37820) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
			if (n === 37821) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
		}
		if (n === 36492 || n === 36494 || n === 36495) {
			if (i = t.get("EXT_texture_compression_bptc"), i === null) return null;
			if (n === 36492) return a === "srgb" ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
			if (n === 36494) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
			if (n === 36495) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
		}
		if (n === 36283 || n === 36284 || n === 36285 || n === 36286) {
			if (i = t.get("EXT_texture_compression_rgtc"), i === null) return null;
			if (n === 36283) return i.COMPRESSED_RED_RGTC1_EXT;
			if (n === 36284) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
			if (n === 36285) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
			if (n === 36286) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
		}
		return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n];
	} };
}
var Li = new De(), Ri = new P();
function zi(e, t) {
	function n(e, t) {
		!0 === e.matrixAutoUpdate && e.updateMatrix(), t.value.copy(e.matrix);
	}
	function r(e, r) {
		e.opacity.value = r.opacity, r.color && e.diffuse.value.copy(r.color), r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.bumpMap && (e.bumpMap.value = r.bumpMap, n(r.bumpMap, e.bumpMapTransform), e.bumpScale.value = r.bumpScale, r.side === 1 && (e.bumpScale.value *= -1)), r.normalMap && (e.normalMap.value = r.normalMap, n(r.normalMap, e.normalMapTransform), e.normalScale.value.copy(r.normalScale), r.side === 1 && e.normalScale.value.negate()), r.displacementMap && (e.displacementMap.value = r.displacementMap, n(r.displacementMap, e.displacementMapTransform), e.displacementScale.value = r.displacementScale, e.displacementBias.value = r.displacementBias), r.emissiveMap && (e.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, e.emissiveMapTransform)), r.specularMap && (e.specularMap.value = r.specularMap, n(r.specularMap, e.specularMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
		let i = t.get(r), a = i.envMap, o = i.envMapRotation;
		a && (e.envMap.value = a, e.envMapRotation.value.setFromMatrix4(Li.makeRotationFromEuler(o)).transpose(), a.isCubeTexture && !1 === a.isRenderTargetTexture && e.envMapRotation.value.premultiply(Ri), e.reflectivity.value = r.reflectivity, e.ior.value = r.ior, e.refractionRatio.value = r.refractionRatio), r.lightMap && (e.lightMap.value = r.lightMap, e.lightMapIntensity.value = r.lightMapIntensity, n(r.lightMap, e.lightMapTransform)), r.aoMap && (e.aoMap.value = r.aoMap, e.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, e.aoMapTransform));
	}
	return {
		refreshFogUniforms: function(t, n) {
			n.color.getRGB(t.fogColor.value, xe(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density);
		},
		refreshMaterialUniforms: function(e, i, a, o, s) {
			i.isNodeMaterial ? i.uniformsNeedUpdate = !1 : i.isMeshBasicMaterial ? r(e, i) : i.isMeshLambertMaterial ? (r(e, i), i.envMap && (e.envMapIntensity.value = i.envMapIntensity)) : i.isMeshToonMaterial ? (r(e, i), function(e, t) {
				t.gradientMap && (e.gradientMap.value = t.gradientMap);
			}(e, i)) : i.isMeshPhongMaterial ? (r(e, i), function(e, t) {
				e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4);
			}(e, i), i.envMap && (e.envMapIntensity.value = i.envMapIntensity)) : i.isMeshStandardMaterial ? (r(e, i), function(e, t) {
				e.metalness.value = t.metalness, t.metalnessMap && (e.metalnessMap.value = t.metalnessMap, n(t.metalnessMap, e.metalnessMapTransform)), e.roughness.value = t.roughness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap, n(t.roughnessMap, e.roughnessMapTransform)), t.envMap && (e.envMapIntensity.value = t.envMapIntensity);
			}(e, i), i.isMeshPhysicalMaterial && function(e, t, r) {
				e.ior.value = t.ior, t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap, n(t.sheenColorMap, e.sheenColorMapTransform)), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap, n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))), t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap, n(t.clearcoatMap, e.clearcoatMapTransform)), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap, n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap, n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), t.side === 1 && e.clearcoatNormalScale.value.negate())), t.dispersion > 0 && (e.dispersion.value = t.dispersion), t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1], t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap, n(t.iridescenceMap, e.iridescenceMapTransform)), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap, n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = r.texture, e.transmissionSamplerSize.value.set(r.width, r.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap, n(t.transmissionMap, e.transmissionMapTransform)), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap, n(t.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor)), t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)), t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap, n(t.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularColorMap && (e.specularColorMap.value = t.specularColorMap, n(t.specularColorMap, e.specularColorMapTransform)), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap, n(t.specularIntensityMap, e.specularIntensityMapTransform));
			}(e, i, s)) : i.isMeshMatcapMaterial ? (r(e, i), function(e, t) {
				t.matcap && (e.matcap.value = t.matcap);
			}(e, i)) : i.isMeshDepthMaterial ? r(e, i) : i.isMeshDistanceMaterial ? (r(e, i), function(e, n) {
				let r = t.get(n).light;
				e.referencePosition.value.setFromMatrixPosition(r.matrixWorld), e.nearDistance.value = r.shadow.camera.near, e.farDistance.value = r.shadow.camera.far;
			}(e, i)) : i.isMeshNormalMaterial ? r(e, i) : i.isLineBasicMaterial ? (function(e, t) {
				e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, t.map && (e.map.value = t.map, n(t.map, e.mapTransform));
			}(e, i), i.isLineDashedMaterial && function(e, t) {
				e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
			}(e, i)) : i.isPointsMaterial ? function(e, t, r, i) {
				e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * r, e.scale.value = .5 * i, t.map && (e.map.value = t.map, n(t.map, e.uvTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
			}(e, i, a, o) : i.isSpriteMaterial ? function(e, t) {
				e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map, n(t.map, e.mapTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
			}(e, i) : i.isShadowMaterial ? (e.color.value.copy(i.color), e.opacity.value = i.opacity) : i.isShaderMaterial && (i.uniformsNeedUpdate = !1);
		}
	};
}
Ri.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
var Bi = new Uint16Array([
	12469,
	15057,
	12620,
	14925,
	13266,
	14620,
	13807,
	14376,
	14323,
	13990,
	14545,
	13625,
	14713,
	13328,
	14840,
	12882,
	14931,
	12528,
	14996,
	12233,
	15039,
	11829,
	15066,
	11525,
	15080,
	11295,
	15085,
	10976,
	15082,
	10705,
	15073,
	10495,
	13880,
	14564,
	13898,
	14542,
	13977,
	14430,
	14158,
	14124,
	14393,
	13732,
	14556,
	13410,
	14702,
	12996,
	14814,
	12596,
	14891,
	12291,
	14937,
	11834,
	14957,
	11489,
	14958,
	11194,
	14943,
	10803,
	14921,
	10506,
	14893,
	10278,
	14858,
	9960,
	14484,
	14039,
	14487,
	14025,
	14499,
	13941,
	14524,
	13740,
	14574,
	13468,
	14654,
	13106,
	14743,
	12678,
	14818,
	12344,
	14867,
	11893,
	14889,
	11509,
	14893,
	11180,
	14881,
	10751,
	14852,
	10428,
	14812,
	10128,
	14765,
	9754,
	14712,
	9466,
	14764,
	13480,
	14764,
	13475,
	14766,
	13440,
	14766,
	13347,
	14769,
	13070,
	14786,
	12713,
	14816,
	12387,
	14844,
	11957,
	14860,
	11549,
	14868,
	11215,
	14855,
	10751,
	14825,
	10403,
	14782,
	10044,
	14729,
	9651,
	14666,
	9352,
	14599,
	9029,
	14967,
	12835,
	14966,
	12831,
	14963,
	12804,
	14954,
	12723,
	14936,
	12564,
	14917,
	12347,
	14900,
	11958,
	14886,
	11569,
	14878,
	11247,
	14859,
	10765,
	14828,
	10401,
	14784,
	10011,
	14727,
	9600,
	14660,
	9289,
	14586,
	8893,
	14508,
	8533,
	15111,
	12234,
	15110,
	12234,
	15104,
	12216,
	15092,
	12156,
	15067,
	12010,
	15028,
	11776,
	14981,
	11500,
	14942,
	11205,
	14902,
	10752,
	14861,
	10393,
	14812,
	9991,
	14752,
	9570,
	14682,
	9252,
	14603,
	8808,
	14519,
	8445,
	14431,
	8145,
	15209,
	11449,
	15208,
	11451,
	15202,
	11451,
	15190,
	11438,
	15163,
	11384,
	15117,
	11274,
	15055,
	10979,
	14994,
	10648,
	14932,
	10343,
	14871,
	9936,
	14803,
	9532,
	14729,
	9218,
	14645,
	8742,
	14556,
	8381,
	14461,
	8020,
	14365,
	7603,
	15273,
	10603,
	15272,
	10607,
	15267,
	10619,
	15256,
	10631,
	15231,
	10614,
	15182,
	10535,
	15118,
	10389,
	15042,
	10167,
	14963,
	9787,
	14883,
	9447,
	14800,
	9115,
	14710,
	8665,
	14615,
	8318,
	14514,
	7911,
	14411,
	7507,
	14279,
	7198,
	15314,
	9675,
	15313,
	9683,
	15309,
	9712,
	15298,
	9759,
	15277,
	9797,
	15229,
	9773,
	15166,
	9668,
	15084,
	9487,
	14995,
	9274,
	14898,
	8910,
	14800,
	8539,
	14697,
	8234,
	14590,
	7790,
	14479,
	7409,
	14367,
	7067,
	14178,
	6621,
	15337,
	8619,
	15337,
	8631,
	15333,
	8677,
	15325,
	8769,
	15305,
	8871,
	15264,
	8940,
	15202,
	8909,
	15119,
	8775,
	15022,
	8565,
	14916,
	8328,
	14804,
	8009,
	14688,
	7614,
	14569,
	7287,
	14448,
	6888,
	14321,
	6483,
	14088,
	6171,
	15350,
	7402,
	15350,
	7419,
	15347,
	7480,
	15340,
	7613,
	15322,
	7804,
	15287,
	7973,
	15229,
	8057,
	15148,
	8012,
	15046,
	7846,
	14933,
	7611,
	14810,
	7357,
	14682,
	7069,
	14552,
	6656,
	14421,
	6316,
	14251,
	5948,
	14007,
	5528,
	15356,
	5942,
	15356,
	5977,
	15353,
	6119,
	15348,
	6294,
	15332,
	6551,
	15302,
	6824,
	15249,
	7044,
	15171,
	7122,
	15070,
	7050,
	14949,
	6861,
	14818,
	6611,
	14679,
	6349,
	14538,
	6067,
	14398,
	5651,
	14189,
	5311,
	13935,
	4958,
	15359,
	4123,
	15359,
	4153,
	15356,
	4296,
	15353,
	4646,
	15338,
	5160,
	15311,
	5508,
	15263,
	5829,
	15188,
	6042,
	15088,
	6094,
	14966,
	6001,
	14826,
	5796,
	14678,
	5543,
	14527,
	5287,
	14377,
	4985,
	14133,
	4586,
	13869,
	4257,
	15360,
	1563,
	15360,
	1642,
	15358,
	2076,
	15354,
	2636,
	15341,
	3350,
	15317,
	4019,
	15273,
	4429,
	15203,
	4732,
	15105,
	4911,
	14981,
	4932,
	14836,
	4818,
	14679,
	4621,
	14517,
	4386,
	14359,
	4156,
	14083,
	3795,
	13808,
	3437,
	15360,
	122,
	15360,
	137,
	15358,
	285,
	15355,
	636,
	15344,
	1274,
	15322,
	2177,
	15281,
	2765,
	15215,
	3223,
	15120,
	3451,
	14995,
	3569,
	14846,
	3567,
	14681,
	3466,
	14511,
	3305,
	14344,
	3121,
	14037,
	2800,
	13753,
	2467,
	15360,
	0,
	15360,
	1,
	15359,
	21,
	15355,
	89,
	15346,
	253,
	15325,
	479,
	15287,
	796,
	15225,
	1148,
	15133,
	1492,
	15008,
	1749,
	14856,
	1882,
	14685,
	1886,
	14506,
	1783,
	14324,
	1608,
	13996,
	1398,
	13702,
	1183
]), Vi = null, Hi = class {
	constructor(t = {}) {
		let n, { canvas: r = se(), context: i = null, depth: o = !0, stencil: s = !1, alpha: f = !1, antialias: p = !1, premultipliedAlpha: m = !0, preserveDrawingBuffer: h = !1, powerPreference: g = "default", failIfMajorPerformanceCaveat: _ = !1, reversedDepthBuffer: v = !1, outputBufferType: y = _e } = t;
		if (this.isWebGLRenderer = !0, i !== null) {
			if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
			n = i.getContextAttributes().alpha;
		} else n = f;
		let x = y, S = /* @__PURE__ */ new Set([
			ue,
			D,
			d
		]), C = /* @__PURE__ */ new Set([
			_e,
			ae,
			Re,
			Ce,
			de,
			u
		]), w = /* @__PURE__ */ new Uint32Array(4), T = /* @__PURE__ */ new Int32Array(4), ee = new l(), E = null, O = null, te = [], ne = [], re = null;
		this.domElement = r, this.debug = {
			checkShaderErrors: !0,
			onShaderError: null
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
		let k = this, ie = !1, oe = null, le = null, fe = null, pe = null;
		this._outputColorSpace = Te;
		let he = 0, ge = 0, A = null, ve = -1, ye = null, be = new N(), xe = new N(), Se = null, we = new b(0), Ee = 0, Oe = r.width, ke = r.height, je = 1, Pe = null, Fe = null, Ie = new N(0, 0, Oe, ke), Le = new N(0, 0, Oe, ke), Be = !1, Ve = new Me(), P = !1, He = !1, Ue = new De(), We = new l(), Ge = new N(), Ke = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		}, qe = !1;
		function Je() {
			return A === null ? je : 1;
		}
		let Ye, Xe, F, Ze, I, L, Qe, $e, et, tt, nt, rt, R, it, at, ot, st, ct, lt, ut, dt, ft, pt, z = i;
		function mt(e, t) {
			return r.getContext(e, t);
		}
		try {
			let e = {
				alpha: !0,
				depth: o,
				stencil: s,
				antialias: p,
				premultipliedAlpha: m,
				preserveDrawingBuffer: h,
				powerPreference: g,
				failIfMajorPerformanceCaveat: _
			};
			if ("setAttribute" in r && r.setAttribute("data-engine", "three.js r185"), r.addEventListener("webglcontextlost", _t, !1), r.addEventListener("webglcontextrestored", vt, !1), r.addEventListener("webglcontextcreationerror", yt, !1), z === null) {
				let t = "webgl2";
				if (z = mt(t, e), z === null) throw mt(t) ? /* @__PURE__ */ Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : /* @__PURE__ */ Error("THREE.WebGLRenderer: Error creating WebGL context.");
			}
		} catch (e) {
			throw M("WebGLRenderer: " + e.message), e;
		}
		function ht() {
			Ye = new kn(z), Ye.init(), dt = new Ii(z, Ye), Xe = new Tn(z, Ye, t, dt), F = new Pi(z, Ye), Xe.reversedDepthBuffer && v && F.buffers.depth.setReversed(!0), le = z.createFramebuffer(), fe = z.createFramebuffer(), pe = z.createFramebuffer(), Ze = new Mn(z), I = new _i(), L = new Fi(z, Ye, F, I, Xe, dt, Ze), Qe = new On(k), $e = new _n(z), ft = new Cn(z, $e), et = new An(z, $e, Ze, ft), tt = new Pn(z, et, $e, ft, Ze), ct = new Nn(z, Xe, L), at = new En(I), nt = new gi(k, Qe, Ye, Xe, ft, at), rt = new zi(k, I), R = new xi(), it = new Di(Ye), st = new Sn(k, Qe, F, tt, n, m), ot = new Ni(k, tt, Xe), pt = {
				update() {
					throw Error("UniformsGroups are not supported by the Spline runtime");
				},
				bind() {
					throw Error("UniformsGroups are not supported by the Spline runtime");
				},
				dispose() {}
			}, lt = new wn(z, Ye, Ze), ut = new jn(z, Ye, Ze), Ze.programs = nt.programs, k.capabilities = Xe, k.extensions = Ye, k.properties = I, k.renderLists = R, k.shadowMap = ot, k.state = F, k.info = Ze;
		}
		ht(), x !== 1009 && (re = new In(x, r.width, r.height, p, o, s));
		let gt = Object.assign(new ze(), {
			enabled: !1,
			isPresenting: !1,
			cameraAutoUpdate: !0,
			setFramebufferScaleFactor() {},
			setReferenceSpaceType() {},
			getReferenceSpace: () => null,
			setReferenceSpace() {},
			getBaseLayer: () => null,
			getBinding: () => null,
			getFrame: () => null,
			getSession: () => null,
			async setSession() {
				throw Error("WebXR is not supported by the Spline runtime");
			},
			getEnvironmentBlendMode() {},
			getDepthTexture: () => null,
			updateCamera() {},
			getCamera: () => null,
			getFoveation() {},
			setFoveation() {},
			hasDepthSensing: () => !1,
			getDepthSensingMesh: () => null,
			setAnimationLoop() {},
			getController: () => null,
			getControllerGrip: () => null,
			getHand: () => null,
			dispose() {}
		});
		function _t(e) {
			e.preventDefault(), Ae("WebGLRenderer: Context Lost."), ie = !0;
		}
		function vt() {
			Ae("WebGLRenderer: Context Restored."), ie = !1;
			let e = Ze.autoReset, t = ot.enabled, n = ot.autoUpdate, r = ot.needsUpdate, i = ot.type;
			ht(), Ze.autoReset = e, ot.enabled = t, ot.autoUpdate = n, ot.needsUpdate = r, ot.type = i;
		}
		function yt(e) {
			M("WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
		}
		function bt(e) {
			let t = e.target;
			t.removeEventListener("dispose", bt), function(e) {
				(function(e) {
					let t = I.get(e).programs;
					t !== void 0 && (t.forEach(function(e) {
						nt.releaseProgram(e);
					}), e.isShaderMaterial && nt.releaseShaderCache(e));
				})(e), I.remove(e);
			}(t);
		}
		function xt(e, t, n) {
			!0 === e.transparent && e.side === 2 && !1 === e.forceSinglePass ? (e.side = 1, e.needsUpdate = !0, jt(e, t, n), e.side = 0, e.needsUpdate = !0, jt(e, t, n), e.side = 2) : jt(e, t, n);
		}
		this.xr = gt, this.getContext = function() {
			return z;
		}, this.getContextAttributes = function() {
			return z.getContextAttributes();
		}, this.forceContextLoss = function() {
			let e = Ye.get("WEBGL_lose_context");
			e && e.loseContext();
		}, this.forceContextRestore = function() {
			let e = Ye.get("WEBGL_lose_context");
			e && e.restoreContext();
		}, this.getPixelRatio = function() {
			return je;
		}, this.setPixelRatio = function(e) {
			e !== void 0 && (je = e, this.setSize(Oe, ke, !1));
		}, this.getSize = function(e) {
			return e.set(Oe, ke);
		}, this.setSize = function(e, t, n = !0) {
			gt.isPresenting ? j("WebGLRenderer: Can't change size while VR device is presenting.") : (Oe = e, ke = t, r.width = Math.floor(e * je), r.height = Math.floor(t * je), !0 === n && (r.style.width = e + "px", r.style.height = t + "px"), re !== null && re.setSize(r.width, r.height), this.setViewport(0, 0, e, t));
		}, this.getDrawingBufferSize = function(e) {
			return e.set(Oe * je, ke * je).floor();
		}, this.setDrawingBufferSize = function(e, t, n) {
			Oe = e, ke = t, je = n, r.width = Math.floor(e * n), r.height = Math.floor(t * n), this.setViewport(0, 0, e, t);
		}, this.setEffects = function(e) {
			if (x !== 1009) {
				if (e) {
					for (let t = 0; t < e.length; t++) if (!0 === e[t].isOutputPass) {
						j("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
						break;
					}
				}
				re.setEffects(e || []);
			} else M("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
		}, this.getCurrentViewport = function(e) {
			return e.copy(be);
		}, this.getViewport = function(e) {
			return e.copy(Ie);
		}, this.setViewport = function(e, t, n, r) {
			e.isVector4 ? Ie.set(e.x, e.y, e.z, e.w) : Ie.set(e, t, n, r), F.viewport(be.copy(Ie).multiplyScalar(je).round());
		}, this.getScissor = function(e) {
			return e.copy(Le);
		}, this.setScissor = function(e, t, n, r) {
			e.isVector4 ? Le.set(e.x, e.y, e.z, e.w) : Le.set(e, t, n, r), F.scissor(xe.copy(Le).multiplyScalar(je).round());
		}, this.getScissorTest = function() {
			return Be;
		}, this.setScissorTest = function(e) {
			F.setScissorTest(Be = e);
		}, this.setOpaqueSort = function(e) {
			Pe = e;
		}, this.setTransparentSort = function(e) {
			Fe = e;
		}, this.getClearColor = function(e) {
			return e.copy(st.getClearColor());
		}, this.setClearColor = function() {
			st.setClearColor(...arguments);
		}, this.getClearAlpha = function() {
			return st.getClearAlpha();
		}, this.setClearAlpha = function() {
			st.setClearAlpha(...arguments);
		}, this.clear = function(e = !0, t = !0, n = !0) {
			let r = 0;
			if (e) {
				let e = !1;
				if (A !== null) {
					let t = A.texture.format;
					e = S.has(t);
				}
				if (e) {
					let e = A.texture.type, t = C.has(e), n = st.getClearColor(), r = st.getClearAlpha(), i = n.r, a = n.g, o = n.b;
					t ? (w[0] = i, w[1] = a, w[2] = o, w[3] = r, z.clearBufferuiv(z.COLOR, 0, w)) : (T[0] = i, T[1] = a, T[2] = o, T[3] = r, z.clearBufferiv(z.COLOR, 0, T));
				} else r |= z.COLOR_BUFFER_BIT;
			}
			t && (r |= z.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), n && (r |= z.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), r !== 0 && z.clear(r);
		}, this.clearColor = function() {
			this.clear(!0, !1, !1);
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1);
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0);
		}, this.setNodesHandler = function(e) {
			e.setRenderer(this), oe = e;
		}, this.dispose = function() {
			r.removeEventListener("webglcontextlost", _t, !1), r.removeEventListener("webglcontextrestored", vt, !1), r.removeEventListener("webglcontextcreationerror", yt, !1), st.dispose(), R.dispose(), it.dispose(), I.dispose(), Qe.dispose(), tt.dispose(), ft.dispose(), pt.dispose(), nt.dispose(), gt.dispose(), gt.removeEventListener("sessionstart", Ct), gt.removeEventListener("sessionend", wt), Tt.stop();
		}, this.renderBufferDirect = function(e, t, n, r, i, a) {
			t === null && (t = Ke);
			let o = i.isMesh && i.matrixWorld.determinantAffine() < 0, s = function(e, t, n, r, i) {
				!0 !== t.isScene && (t = Ke), L.resetTextureUnits();
				let a = t.fog, o = r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial ? t.environment : null, s = A === null ? k.outputColorSpace : !0 === A.isXRRenderTarget ? A.texture.colorSpace : c.workingColorSpace, l = r.isMeshStandardMaterial || r.isMeshLambertMaterial && !r.envMap || r.isMeshPhongMaterial && !r.envMap, u = Qe.get(r.envMap || o, l), d = !0 === r.vertexColors && !!n.attributes.color && n.attributes.color.itemSize === 4, f = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0), p = !!n.morphAttributes.position, m = !!n.morphAttributes.normal, h = !!n.morphAttributes.color, g = 0;
				r.toneMapped && (A === null || !0 === A.isXRRenderTarget) && (g = k.toneMapping);
				let _ = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, v = _ === void 0 ? 0 : _.length, y = I.get(r), b = O.state.lights;
				if (!0 === P && (!0 === He || e !== ye)) {
					let t = e === ye && r.id === ve;
					at.setState(r, e, t);
				}
				let x = !1;
				r.version === y.__version ? (y.needsLights && y.lightsStateVersion !== b.state.version || y.outputColorSpace !== s || i.isBatchedMesh && !1 === y.batching || !i.isBatchedMesh && !0 === y.batching || i.isBatchedMesh && !0 === y.batchingColor && i.colorTexture === null || i.isBatchedMesh && !1 === y.batchingColor && i.colorTexture !== null || i.isInstancedMesh && !1 === y.instancing || !i.isInstancedMesh && !0 === y.instancing || i.isSkinnedMesh && !1 === y.skinning || !i.isSkinnedMesh && !0 === y.skinning || i.isInstancedMesh && !0 === y.instancingColor && i.instanceColor === null || i.isInstancedMesh && !1 === y.instancingColor && i.instanceColor !== null || i.isInstancedMesh && !0 === y.instancingMorph && i.morphTexture === null || i.isInstancedMesh && !1 === y.instancingMorph && i.morphTexture !== null || y.envMap !== u || !0 === r.fog && y.fog !== a || y.numClippingPlanes !== void 0 && (y.numClippingPlanes !== at.numPlanes || y.numIntersection !== at.numIntersection) || y.vertexAlphas !== d || y.vertexTangents !== f || y.morphTargets !== p || y.morphNormals !== m || y.morphColors !== h || y.toneMapping !== g || y.morphTargetsCount !== v || !!y.lightProbeGrid != O.state.lightProbeGridArray.length > 0) && (x = !0) : (x = !0, y.__version = r.version);
				let S = y.currentProgram;
				!0 === x && (S = jt(r, t, i), oe && r.isNodeMaterial && oe.onUpdateProgram(r, S, y));
				let C = !1, w = !1, T = !1, E = S.getUniforms(), D = y.uniforms;
				if (F.useProgram(S.program) && (C = !0, w = !0, T = !0), r.id !== ve && (ve = r.id, w = !0), y.needsLights) {
					let e = function(e, t) {
						if (e.length === 0) return null;
						if (e.length === 1) return e[0].texture === null ? null : e[0];
						ee.setFromMatrixPosition(t.matrixWorld);
						for (let t = 0, n = e.length; t < n; t++) {
							let n = e[t];
							if (n.texture !== null && n.boundingBox.containsPoint(ee)) return n;
						}
						return null;
					}(O.state.lightProbeGridArray, i);
					y.lightProbeGrid !== e && (y.lightProbeGrid = e, w = !0);
				}
				if (C || ye !== e) {
					F.buffers.depth.getReversed() && !0 !== e.reversedDepth && (e._reversedDepth = !0, e.updateProjectionMatrix()), E.setValue(z, "projectionMatrix", e.projectionMatrix), E.setValue(z, "viewMatrix", e.matrixWorldInverse);
					let t = E.map.cameraPosition;
					t !== void 0 && t.setValue(z, We.setFromMatrixPosition(e.matrixWorld)), Xe.logarithmicDepthBuffer && E.setValue(z, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && E.setValue(z, "isOrthographic", !0 === e.isOrthographicCamera), ye !== e && (ye = e, w = !0, T = !0);
				}
				if (y.needsLights && (b.state.directionalShadowMap.length > 0 && E.setValue(z, "directionalShadowMap", b.state.directionalShadowMap, L), b.state.spotShadowMap.length > 0 && E.setValue(z, "spotShadowMap", b.state.spotShadowMap, L), b.state.pointShadowMap.length > 0 && E.setValue(z, "pointShadowMap", b.state.pointShadowMap, L)), i.isSkinnedMesh) {
					E.setOptional(z, i, "bindMatrix"), E.setOptional(z, i, "bindMatrixInverse");
					let e = i.skeleton;
					e && (e.boneTexture === null && e.computeBoneTexture(), E.setValue(z, "boneTexture", e.boneTexture, L));
				}
				i.isBatchedMesh && (E.setOptional(z, i, "batchingTexture"), E.setValue(z, "batchingTexture", i._matricesTexture, L), E.setOptional(z, i, "batchingIdTexture"), E.setValue(z, "batchingIdTexture", i._indirectTexture, L), E.setOptional(z, i, "batchingColorTexture"), i._colorsTexture !== null && E.setValue(z, "batchingColorTexture", i._colorsTexture, L));
				let te = n.morphAttributes;
				if ((te.position !== void 0 || te.normal !== void 0 || te.color !== void 0) && ct.update(i, n, S), (w || y.receiveShadow !== i.receiveShadow) && (y.receiveShadow = i.receiveShadow, E.setValue(z, "receiveShadow", i.receiveShadow)), (r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial) && r.envMap === null && t.environment !== null && (D.envMapIntensity.value = t.environmentIntensity), D.dfgLUT !== void 0 && (D.dfgLUT.value = (Vi === null && ((Vi = new Ne(Bi, 16, 16, 1030, 1016)).name = "DFG_LUT", Vi.minFilter = 1006, Vi.magFilter = 1006, Vi.wrapS = 1001, Vi.wrapT = 1001, Vi.generateMipmaps = !1, Vi.needsUpdate = !0), Vi)), w) {
					if (E.setValue(z, "toneMappingExposure", k.toneMappingExposure), y.needsLights && function(e, t) {
						e.ambientLightColor.needsUpdate = t, e.lightProbe.needsUpdate = t, e.directionalLights.needsUpdate = t, e.directionalLightShadows.needsUpdate = t, e.pointLights.needsUpdate = t, e.pointLightShadows.needsUpdate = t, e.spotLights.needsUpdate = t, e.spotLightShadows.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t;
					}(D, T), a && !0 === r.fog && rt.refreshFogUniforms(D, a), rt.refreshMaterialUniforms(D, r, je, ke, O.state.transmissionRenderTarget[e.id]), y.needsLights && y.lightProbeGrid) {
						let e = y.lightProbeGrid;
						D.probesSH.value = e.texture, D.probesMin.value.copy(e.boundingBox.min), D.probesMax.value.copy(e.boundingBox.max), D.probesResolution.value.copy(e.resolution);
					}
					Vr.upload(z, B(y), D, L);
				}
				if (r.isShaderMaterial && !0 === r.uniformsNeedUpdate && (Vr.upload(z, B(y), D, L), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && E.setValue(z, "center", i.center), E.setValue(z, "modelViewMatrix", i.modelViewMatrix), E.setValue(z, "normalMatrix", i.normalMatrix), E.setValue(z, "modelMatrix", i.matrixWorld), i.previousModelViewMatrix && E.setValue(z, "previousModelViewMatrix", i.previousModelViewMatrix), e.previousProjectionMatrix && E.setValue(z, "previousProjectionMatrix", e.previousProjectionMatrix), r.uniformsGroups !== void 0) {
					let e = r.uniformsGroups;
					for (let t = 0, n = e.length; t < n; t++) {
						let n = e[t];
						pt.update(n, S), pt.bind(n, S);
					}
				}
				return S;
			}(e, t, n, r, i);
			F.setMaterial(r, o);
			let l = n.index, u = 1;
			if (!0 === r.wireframe) {
				if (l = et.getWireframeAttribute(n), l === void 0) return;
				u = 2;
			}
			let d = n.drawRange, f = n.attributes.position, p = d.start * u, m = (d.start + d.count) * u;
			a !== null && (p = Math.max(p, a.start * u), m = Math.min(m, (a.start + a.count) * u)), l === null ? f != null && (p = Math.max(p, 0), m = Math.min(m, f.count)) : (p = Math.max(p, 0), m = Math.min(m, l.count));
			let h = m - p;
			if (h < 0 || h === 1 / 0) return;
			ft.setup(i, r, s, n, l);
			let g, _ = lt;
			if (l !== null && (g = $e.get(l), _ = ut, _.setIndex(g)), i.isMesh) !0 === r.wireframe ? (F.setLineWidth(r.wireframeLinewidth * Je()), _.setMode(z.LINES)) : _.setMode(z.TRIANGLES);
			else if (i.isLine) {
				let e = r.linewidth;
				e === void 0 && (e = 1), F.setLineWidth(e * Je()), i.isLineSegments ? _.setMode(z.LINES) : i.isLineLoop ? _.setMode(z.LINE_LOOP) : _.setMode(z.LINE_STRIP);
			} else i.isPoints ? _.setMode(z.POINTS) : i.isSprite && _.setMode(z.TRIANGLES);
			if (i.isBatchedMesh) {
				if (Ye.get("WEBGL_multi_draw")) _.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
				else {
					let e = i._multiDrawStarts, t = i._multiDrawCounts, n = i._multiDrawCount, a = l ? $e.get(l).bytesPerElement : 1, o = I.get(r).currentProgram.getUniforms();
					for (let r = 0; r < n; r++) o.setValue(z, "_gl_DrawID", r), _.render(e[r] / a, t[r]);
				}
			} else if (i.isInstancedMesh) _.renderInstances(p, h, i.count);
			else if (n.isInstancedBufferGeometry) {
				let e = n._maxInstanceCount === void 0 ? 1 / 0 : n._maxInstanceCount, t = Math.min(n.instanceCount, e);
				_.renderInstances(p, h, t);
			} else _.render(p, h);
		}, this.compile = function(e, t, n = null) {
			n === null && (n = e), O = it.get(n), O.init(t), ne.push(O), n.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (O.pushLight(e), e.castShadow && O.pushShadow(e));
			}), e !== n && e.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (O.pushLight(e), e.castShadow && O.pushShadow(e));
			}), O.setupLights();
			let r = /* @__PURE__ */ new Set();
			return e.traverse(function(e) {
				if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
				let t = e.material;
				if (t) {
					if (Array.isArray(t)) for (let i = 0; i < t.length; i++) {
						let a = t[i];
						xt(a, n, e), r.add(a);
					}
					else xt(t, n, e), r.add(t);
				}
			}), O = ne.pop(), r;
		}, this.compileAsync = function(e, t, n = null) {
			let r = this.compile(e, t, n);
			return new Promise((t) => {
				function n() {
					r.forEach(function(e) {
						I.get(e).currentProgram.isReady() && r.delete(e);
					}), r.size === 0 ? t(e) : setTimeout(n, 10);
				}
				Ye.get("KHR_parallel_shader_compile") === null ? setTimeout(n, 10) : n();
			});
		};
		let St = null;
		function Ct() {
			Tt.stop();
		}
		function wt() {
			Tt.start();
		}
		let Tt = new gn();
		function Et(e, t, n, r) {
			if (!1 === e.visible) return;
			if (e.layers.test(t.layers)) {
				if (e.isGroup) n = e.renderOrder;
				else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
				else if (e.isLightProbeGrid) O.pushLightProbeGrid(e);
				else if (e.isLight) O.pushLight(e), e.castShadow && O.pushShadow(e);
				else if (e.isSprite) {
					if (!e.frustumCulled || Ve.intersectsSprite(e)) {
						r && Ge.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ue);
						let t = tt.update(e), i = e.material;
						i.visible && E.push(e, t, i, n, Ge.z, null);
					}
				} else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || Ve.intersectsObject(e))) {
					let t = tt.update(e), i = e.material;
					if (r && (e.boundingSphere === void 0 ? (t.boundingSphere === null && t.computeBoundingSphere(), Ge.copy(t.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(), Ge.copy(e.boundingSphere.center)), Ge.applyMatrix4(e.matrixWorld).applyMatrix4(Ue)), Array.isArray(i)) {
						let r = t.groups;
						for (let a = 0, o = r.length; a < o; a++) {
							let o = r[a], s = i[o.materialIndex];
							s && s.visible && E.push(e, t, s, n, Ge.z, o);
						}
					} else i.visible && E.push(e, t, i, n, Ge.z, null);
				}
			}
			let i = e.children;
			for (let e = 0, a = i.length; e < a; e++) Et(i[e], t, n, r);
		}
		function Dt(e, t, n, r) {
			let { opaque: i, transmissive: a, transparent: o } = e;
			O.setupLightsView(n), !0 === P && at.setGlobalState(k.clippingPlanes, n), r && F.viewport(be.copy(r)), i.length > 0 && kt(i, t, n), a.length > 0 && kt(a, t, n), o.length > 0 && kt(o, t, n), F.buffers.depth.setTest(!0), F.buffers.depth.setMask(!0), F.buffers.color.setMask(!0), F.setPolygonOffset(!1);
		}
		function Ot(t, n, r, i) {
			if ((!0 === r.isScene ? r.overrideMaterial : null) !== null) return;
			if (O.state.transmissionRenderTarget[i.id] === void 0) {
				let t = Ye.has("EXT_color_buffer_half_float") || Ye.has("EXT_color_buffer_float");
				O.state.transmissionRenderTarget[i.id] = new e(1, 1, {
					generateMipmaps: !0,
					type: t ? a : _e,
					minFilter: ce,
					samples: Math.max(4, Xe.samples),
					stencilBuffer: s,
					resolveDepthBuffer: !1,
					resolveStencilBuffer: !1,
					colorSpace: c.workingColorSpace
				});
			}
			let o = O.state.transmissionRenderTarget[i.id], l = i.viewport || be;
			o.setSize(l.z * k.transmissionResolutionScale, l.w * k.transmissionResolutionScale);
			let u = k.getRenderTarget(), d = k.getActiveCubeFace(), f = k.getActiveMipmapLevel();
			k.setRenderTarget(o), k.getClearColor(we), Ee = k.getClearAlpha(), Ee < 1 && k.setClearColor(16777215, .5), k.clear(), qe && st.render(r);
			let p = k.toneMapping;
			k.toneMapping = 0;
			let m = i.viewport;
			if (i.viewport !== void 0 && (i.viewport = void 0), O.setupLightsView(i), !0 === P && at.setGlobalState(k.clippingPlanes, i), kt(t, r, i), L.updateMultisampleRenderTarget(o), L.updateRenderTargetMipmap(o), !1 === Ye.has("WEBGL_multisampled_render_to_texture")) {
				let e = !1;
				for (let t = 0, a = n.length; t < a; t++) {
					let { object: a, geometry: o, material: s, group: c } = n[t];
					if (s.side === 2 && a.layers.test(i.layers)) {
						let t = s.side;
						s.side = 1, s.needsUpdate = !0, At(a, r, i, o, s, c), s.side = t, s.needsUpdate = !0, e = !0;
					}
				}
				!0 === e && (L.updateMultisampleRenderTarget(o), L.updateRenderTargetMipmap(o));
			}
			k.setRenderTarget(u, d, f), k.setClearColor(we, Ee), m !== void 0 && (i.viewport = m), k.toneMapping = p;
		}
		function kt(e, t, n) {
			let r = !0 === t.isScene ? t.overrideMaterial : null;
			for (let i = 0, a = e.length; i < a; i++) {
				let a = e[i], { object: o, geometry: s, group: c } = a, l = a.material;
				!0 === l.allowOverride && r !== null && (l = r), o.layers.test(n.layers) && At(o, t, n, s, l, c);
			}
		}
		function At(e, t, n, r, i, a) {
			e.onBeforeRender(k, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(k, t, n, r, e, a), !0 === i.transparent && i.side === 2 && !1 === i.forceSinglePass ? (i.side = 1, i.needsUpdate = !0, k.renderBufferDirect(n, t, r, i, e, a), i.side = 0, i.needsUpdate = !0, k.renderBufferDirect(n, t, r, i, e, a), i.side = 2) : k.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(k, t, n, r, i, a);
		}
		function jt(e, t, n) {
			!0 !== t.isScene && (t = Ke);
			let r = I.get(e), i = O.state.lights, a = O.state.shadowsArray, o = i.state.version, s = nt.getParameters(e, i.state, a, t, n, O.state.lightProbeGridArray), c = nt.getProgramCacheKey(s), l = r.programs;
			r.environment = e.isMeshStandardMaterial || e.isMeshLambertMaterial || e.isMeshPhongMaterial ? t.environment : null, r.fog = t.fog;
			let u = e.isMeshStandardMaterial || e.isMeshLambertMaterial && !e.envMap || e.isMeshPhongMaterial && !e.envMap;
			r.envMap = Qe.get(e.envMap || r.environment, u), r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation, l === void 0 && (e.addEventListener("dispose", bt), l = /* @__PURE__ */ new Map(), r.programs = l);
			let d = l.get(c);
			if (d !== void 0) {
				if (r.currentProgram === d && r.lightsStateVersion === o) return Mt(e, s), d;
			} else s.uniforms = nt.getUniforms(e), oe !== null && e.isNodeMaterial && oe.build(e, n, s), e.onBeforeCompile(s, k), d = nt.acquireProgram(s, c), l.set(c, d), r.uniforms = s.uniforms;
			let f = r.uniforms;
			return (!e.isShaderMaterial && !e.isRawShaderMaterial || !0 === e.clipping) && (f.clippingPlanes = at.uniform), Mt(e, s), r.needsLights = function(e) {
				return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights;
			}(e), r.lightsStateVersion = o, r.needsLights && (f.ambientLightColor.value = i.state.ambient, f.lightProbe.value = i.state.probe, f.directionalLights.value = i.state.directional, f.directionalLightShadows.value = i.state.directionalShadow, f.spotLights.value = i.state.spot, f.spotLightShadows.value = i.state.spotShadow, f.rectAreaLights.value = i.state.rectArea, f.ltc_1.value = i.state.rectAreaLTC1, f.ltc_2.value = i.state.rectAreaLTC2, f.pointLights.value = i.state.point, f.pointLightShadows.value = i.state.pointShadow, f.hemisphereLights.value = i.state.hemi, f.directionalShadowMatrix.value = i.state.directionalShadowMatrix, f.spotLightMatrix.value = i.state.spotLightMatrix, f.spotLightMap.value = i.state.spotLightMap, f.pointShadowMatrix.value = i.state.pointShadowMatrix), r.lightProbeGrid = O.state.lightProbeGridArray.length > 0, r.currentProgram = d, r.uniformsList = null, d;
		}
		function B(e) {
			if (e.uniformsList === null) {
				let t = e.currentProgram.getUniforms();
				e.uniformsList = Vr.seqWithValue(t.seq, e.uniforms);
			}
			return e.uniformsList;
		}
		function Mt(e, t) {
			let n = I.get(e);
			n.outputColorSpace = t.outputColorSpace, n.batching = t.batching, n.batchingColor = t.batchingColor, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.instancingMorph = t.instancingMorph, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping;
		}
		Tt.setAnimationLoop(function(e) {
			St && St(e);
		}), typeof self < "u" && Tt.setContext(self), this.setAnimationLoop = function(e) {
			St = e, gt.setAnimationLoop(e), e === null ? Tt.stop() : Tt.start();
		}, gt.addEventListener("sessionstart", Ct), gt.addEventListener("sessionend", wt), this.render = function(e, t) {
			if (t !== void 0 && !0 !== t.isCamera) return void M("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
			if (!0 === ie) return;
			oe !== null && oe.renderStart(e, t);
			let n = !0 === gt.enabled && !0 === gt.isPresenting, r = re !== null && (A === null || n) && re.begin(k, A);
			if (!0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), t.parent === null && !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(), !0 === gt.enabled && !0 === gt.isPresenting && (re === null || !1 === re.isCompositing()) && (!0 === gt.cameraAutoUpdate && gt.updateCamera(t), t = gt.getCamera()), !0 === e.isScene && e.onBeforeRender(k, e, t, A), O = it.get(e, ne.length), O.init(t), O.state.textureUnits = L.getTextureUnits(), ne.push(O), Ue.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), Ve.setFromProjectionMatrix(Ue, 2e3, t.reversedDepth), He = this.localClippingEnabled, P = at.init(this.clippingPlanes, He), E = R.get(e, te.length), E.init(), te.push(E), !0 === gt.enabled && !0 === gt.isPresenting) {
				let e = k.xr.getDepthSensingMesh();
				e !== null && Et(e, t, -1 / 0, k.sortObjects);
			}
			Et(e, t, 0, k.sortObjects), E.finish(), !0 === k.sortObjects && E.sort(Pe, Fe, t.reversedDepth), qe = !1 === gt.enabled || !1 === gt.isPresenting || !1 === gt.hasDepthSensing(), qe && st.addToRenderList(E, e), this.info.render.frame++, !0 === this.info.autoReset && this.info.reset(), !0 === P && at.beginShadows();
			let i = O.state.shadowsArray;
			if (ot.render(i, e, t), !0 === P && at.endShadows(), !1 === (r && re.hasRenderPass())) {
				let n = E.opaque, r = E.transmissive;
				if (O.setupLights(), t.isArrayCamera) {
					let i = t.cameras;
					if (r.length > 0) for (let t = 0, a = i.length; t < a; t++) Ot(n, r, e, i[t]);
					qe && st.render(e);
					for (let t = 0, n = i.length; t < n; t++) {
						let n = i[t];
						Dt(E, e, n, n.viewport);
					}
				} else r.length > 0 && Ot(n, r, e, t), qe && st.render(e), Dt(E, e, t);
			}
			A !== null && ge === 0 && (L.updateMultisampleRenderTarget(A), L.updateRenderTargetMipmap(A)), r && re.end(k), !0 === e.isScene && e.onAfterRender(k, e, t), ft.resetDefaultState(), ve = -1, ye = null, ne.pop(), ne.length > 0 ? (O = ne[ne.length - 1], L.setTextureUnits(O.state.textureUnits), !0 === P && at.setGlobalState(k.clippingPlanes, O.state.camera)) : O = null, te.pop(), E = te.length > 0 ? te[te.length - 1] : null, oe !== null && oe.renderEnd();
		}, this.getActiveCubeFace = function() {
			return he;
		}, this.getActiveMipmapLevel = function() {
			return ge;
		}, this.getRenderTarget = function() {
			return A;
		}, this.setRenderTargetTextures = function(e, t, n) {
			let r = I.get(e);
			r.__autoAllocateDepthBuffer = !1 === e.resolveDepthBuffer, !1 === r.__autoAllocateDepthBuffer && (r.__useRenderToTexture = !1), I.get(e.texture).__webglTexture = t, I.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? void 0 : n, r.__hasExternalTextures = !0;
		}, this.setRenderTargetFramebuffer = function(e, t) {
			let n = I.get(e);
			n.__webglFramebuffer = t, n.__useDefaultFramebuffer = t === void 0;
		}, this.setRenderTarget = function(e, t = 0, n = 0) {
			A = e, he = t, ge = n;
			let r = null, i = !1, a = !1;
			if (e) {
				let o = I.get(e);
				if (o.__useDefaultFramebuffer !== void 0) return F.bindFramebuffer(z.FRAMEBUFFER, o.__webglFramebuffer), be.copy(e.viewport), xe.copy(e.scissor), Se = e.scissorTest, F.viewport(be), F.scissor(xe), F.setScissorTest(Se), void (ve = -1);
				if (o.__webglFramebuffer === void 0) L.setupRenderTarget(e);
				else if (o.__hasExternalTextures) L.rebindTextures(e, I.get(e.texture).__webglTexture, I.get(e.depthTexture).__webglTexture);
				else if (e.depthBuffer) {
					let t = e.depthTexture;
					if (o.__boundDepthTexture !== t) {
						if (t !== null && I.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
						L.setupDepthRenderbuffer(e);
					}
				}
				let s = e.texture;
				(s.isData3DTexture || s.isDataArrayTexture || s.isCompressedArrayTexture) && (a = !0);
				let c = I.get(e).__webglFramebuffer;
				e.isWebGLCubeRenderTarget ? (r = Array.isArray(c[t]) ? c[t][n] : c[t], i = !0) : r = e.samples > 0 && !1 === L.useMultisampledRTT(e) ? I.get(e).__webglMultisampledFramebuffer : Array.isArray(c) ? c[n] : c, be.copy(e.viewport), xe.copy(e.scissor), Se = e.scissorTest;
			} else be.copy(Ie).multiplyScalar(je).floor(), xe.copy(Le).multiplyScalar(je).floor(), Se = Be;
			if (n !== 0 && (r = le), F.bindFramebuffer(z.FRAMEBUFFER, r) && F.drawBuffers(e, r), F.viewport(be), F.scissor(xe), F.setScissorTest(Se), i) {
				let r = I.get(e.texture);
				z.framebufferTexture2D(z.FRAMEBUFFER, z.COLOR_ATTACHMENT0, z.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
			} else if (a) {
				let r = t;
				for (let t = 0; t < e.textures.length; t++) {
					let i = I.get(e.textures[t]);
					z.framebufferTextureLayer(z.FRAMEBUFFER, z.COLOR_ATTACHMENT0 + t, i.__webglTexture, n, r);
				}
			} else if (e !== null && n !== 0) {
				let t = I.get(e.texture);
				z.framebufferTexture2D(z.FRAMEBUFFER, z.COLOR_ATTACHMENT0, z.TEXTURE_2D, t.__webglTexture, n);
			}
			ve = -1;
		}, this.readRenderTargetPixels = function(e, t, n, r, i, a, o, s = 0) {
			if (!e || !e.isWebGLRenderTarget) return void M("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let c = I.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) {
				F.bindFramebuffer(z.FRAMEBUFFER, c);
				try {
					let o = e.textures[s], c = o.format, l = o.type;
					if (e.textures.length > 1 && z.readBuffer(z.COLOR_ATTACHMENT0 + s), !Xe.textureFormatReadable(c)) return void M("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
					if (!Xe.textureTypeReadable(l)) return void M("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
					t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && z.readPixels(t, n, r, i, dt.convert(c), dt.convert(l), a);
				} finally {
					let e = A === null ? null : I.get(A).__webglFramebuffer;
					F.bindFramebuffer(z.FRAMEBUFFER, e);
				}
			}
		}, this.readRenderTargetPixelsAsync = async function(e, t, n, r, i, a, o, s = 0) {
			if (!e || !e.isWebGLRenderTarget) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let c = I.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && o !== void 0 && (c = c[o]), c) {
				if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
					F.bindFramebuffer(z.FRAMEBUFFER, c);
					let o = e.textures[s], l = o.format, u = o.type;
					if (e.textures.length > 1 && z.readBuffer(z.COLOR_ATTACHMENT0 + s), !Xe.textureFormatReadable(l)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
					if (!Xe.textureTypeReadable(u)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
					let d = z.createBuffer();
					z.bindBuffer(z.PIXEL_PACK_BUFFER, d), z.bufferData(z.PIXEL_PACK_BUFFER, a.byteLength, z.STREAM_READ), z.readPixels(t, n, r, i, dt.convert(l), dt.convert(u), 0);
					let f = A === null ? null : I.get(A).__webglFramebuffer;
					F.bindFramebuffer(z.FRAMEBUFFER, f);
					let p = z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE, 0);
					return z.flush(), await me(z, p, 4), z.bindBuffer(z.PIXEL_PACK_BUFFER, d), z.getBufferSubData(z.PIXEL_PACK_BUFFER, 0, a), z.deleteBuffer(d), z.deleteSync(p), a;
				}
				throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
			}
		}, this.copyFramebufferToTexture = function(e, t = null, n = 0) {
			let r = 2 ** -n, i = Math.floor(e.image.width * r), a = Math.floor(e.image.height * r), o = t === null ? 0 : t.x, s = t === null ? 0 : t.y;
			L.setTexture2D(e, 0), z.copyTexSubImage2D(z.TEXTURE_2D, n, 0, 0, o, s, i, a), F.unbindTexture();
		}, this.copyTextureToTexture = function(e, t, n = null, r = null, i = 0, a = 0) {
			let o, s, c, l, u, d, f, p, m, h = e.isCompressedTexture ? e.mipmaps[a] : e.image;
			if (n !== null) o = n.max.x - n.min.x, s = n.max.y - n.min.y, c = n.isBox3 ? n.max.z - n.min.z : 1, l = n.min.x, u = n.min.y, d = n.isBox3 ? n.min.z : 0;
			else {
				let t = 2 ** -i;
				o = Math.floor(h.width * t), s = Math.floor(h.height * t), c = e.isDataArrayTexture ? h.depth : e.isData3DTexture ? Math.floor(h.depth * t) : 1, l = 0, u = 0, d = 0;
			}
			r === null ? (f = 0, p = 0, m = 0) : (f = r.x, p = r.y, m = r.z);
			let g, _ = dt.convert(t.format), v = dt.convert(t.type);
			t.isData3DTexture ? (L.setTexture3D(t, 0), g = z.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? (L.setTexture2DArray(t, 0), g = z.TEXTURE_2D_ARRAY) : (L.setTexture2D(t, 0), g = z.TEXTURE_2D), F.activeTexture(z.TEXTURE0), F.pixelStorei(z.UNPACK_FLIP_Y_WEBGL, t.flipY), F.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), F.pixelStorei(z.UNPACK_ALIGNMENT, t.unpackAlignment);
			let y = F.getParameter(z.UNPACK_ROW_LENGTH), b = F.getParameter(z.UNPACK_IMAGE_HEIGHT), x = F.getParameter(z.UNPACK_SKIP_PIXELS), S = F.getParameter(z.UNPACK_SKIP_ROWS), C = F.getParameter(z.UNPACK_SKIP_IMAGES);
			F.pixelStorei(z.UNPACK_ROW_LENGTH, h.width), F.pixelStorei(z.UNPACK_IMAGE_HEIGHT, h.height), F.pixelStorei(z.UNPACK_SKIP_PIXELS, l), F.pixelStorei(z.UNPACK_SKIP_ROWS, u), F.pixelStorei(z.UNPACK_SKIP_IMAGES, d);
			let w = e.isDataArrayTexture || e.isData3DTexture, T = t.isDataArrayTexture || t.isData3DTexture;
			if (e.isDepthTexture) {
				let n = I.get(e), r = I.get(t), h = I.get(n.__renderTarget), g = I.get(r.__renderTarget);
				F.bindFramebuffer(z.READ_FRAMEBUFFER, h.__webglFramebuffer), F.bindFramebuffer(z.DRAW_FRAMEBUFFER, g.__webglFramebuffer);
				for (let n = 0; n < c; n++) w && (z.framebufferTextureLayer(z.READ_FRAMEBUFFER, z.COLOR_ATTACHMENT0, I.get(e).__webglTexture, i, d + n), z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER, z.COLOR_ATTACHMENT0, I.get(t).__webglTexture, a, m + n)), z.blitFramebuffer(l, u, o, s, f, p, o, s, z.DEPTH_BUFFER_BIT, z.NEAREST);
				F.bindFramebuffer(z.READ_FRAMEBUFFER, null), F.bindFramebuffer(z.DRAW_FRAMEBUFFER, null);
			} else if (i !== 0 || e.isRenderTargetTexture || I.has(e)) {
				let n = I.get(e), r = I.get(t);
				F.bindFramebuffer(z.READ_FRAMEBUFFER, fe), F.bindFramebuffer(z.DRAW_FRAMEBUFFER, pe);
				for (let e = 0; e < c; e++) w ? z.framebufferTextureLayer(z.READ_FRAMEBUFFER, z.COLOR_ATTACHMENT0, n.__webglTexture, i, d + e) : z.framebufferTexture2D(z.READ_FRAMEBUFFER, z.COLOR_ATTACHMENT0, z.TEXTURE_2D, n.__webglTexture, i), T ? z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER, z.COLOR_ATTACHMENT0, r.__webglTexture, a, m + e) : z.framebufferTexture2D(z.DRAW_FRAMEBUFFER, z.COLOR_ATTACHMENT0, z.TEXTURE_2D, r.__webglTexture, a), i === 0 ? T ? z.copyTexSubImage3D(g, a, f, p, m + e, l, u, o, s) : z.copyTexSubImage2D(g, a, f, p, l, u, o, s) : z.blitFramebuffer(l, u, o, s, f, p, o, s, z.COLOR_BUFFER_BIT, z.NEAREST);
				F.bindFramebuffer(z.READ_FRAMEBUFFER, null), F.bindFramebuffer(z.DRAW_FRAMEBUFFER, null);
			} else T ? e.isDataTexture || e.isData3DTexture ? z.texSubImage3D(g, a, f, p, m, o, s, c, _, v, h.data) : t.isCompressedArrayTexture ? z.compressedTexSubImage3D(g, a, f, p, m, o, s, c, _, h.data) : z.texSubImage3D(g, a, f, p, m, o, s, c, _, v, h) : e.isDataTexture ? z.texSubImage2D(z.TEXTURE_2D, a, f, p, o, s, _, v, h.data) : e.isCompressedTexture ? z.compressedTexSubImage2D(z.TEXTURE_2D, a, f, p, h.width, h.height, _, h.data) : z.texSubImage2D(z.TEXTURE_2D, a, f, p, o, s, _, v, h);
			F.pixelStorei(z.UNPACK_ROW_LENGTH, y), F.pixelStorei(z.UNPACK_IMAGE_HEIGHT, b), F.pixelStorei(z.UNPACK_SKIP_PIXELS, x), F.pixelStorei(z.UNPACK_SKIP_ROWS, S), F.pixelStorei(z.UNPACK_SKIP_IMAGES, C), a === 0 && t.generateMipmaps && z.generateMipmap(g), F.unbindTexture();
		}, this.initRenderTarget = function(e) {
			I.get(e).__webglFramebuffer === void 0 && L.setupRenderTarget(e);
		}, this.initTexture = function(e) {
			e.isCubeTexture ? L.setTextureCube(e, 0) : e.isData3DTexture ? L.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? L.setTexture2DArray(e, 0) : L.setTexture2D(e, 0), F.unbindTexture();
		}, this.resetState = function() {
			he = 0, ge = 0, A = null, F.reset(), ft.reset();
		}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	get coordinateSystem() {
		return le;
	}
	get outputColorSpace() {
		return this._outputColorSpace;
	}
	set outputColorSpace(e) {
		this._outputColorSpace = e;
		let t = this.getContext();
		t.drawingBufferColorSpace = c._getDrawingBufferColorSpace(e), t.unpackColorSpace = c._getUnpackColorSpace();
	}
}, Ui = class extends It {
	constructor(e) {
		super("b"), this.nodeType = "Bool", this.value = e ?? !1;
	}
	generateReadonly(e, t, n, r) {
		return e.format(this.value ? "true" : "false", r, t);
	}
}, Wi = class extends It {
	constructor(e = 1, t) {
		super("f[]"), this.nodeType = "FloatArray", this.size = e, this.value = Array.isArray(t) ? t : typeof t == "number" ? Array(e).fill(t) : Array(e).fill(0);
	}
}, Gi = class extends It {}, Ki = class extends Gi {
	constructor(e) {
		super("v3"), this.image = e, this._value = new l();
	}
	get value() {
		return this._value.x = this.image.isVideo ? this.image.img.videoWidth ?? 0 : this.image.img.width, this._value.y = this.image.isVideo ? this.image.img.videoHeight ?? 0 : this.image.img.height, this._value;
	}
}, qi = class extends Gi {
	constructor(e, t, n = 1008, r = 1006) {
		super("t"), this.image = e, this.wrap = t, this.minFilter = n, this.magFilter = r;
	}
	get value() {
		return this.image.getTexture(this.wrap, this.minFilter, this.magFilter);
	}
}, Ji = class extends It {
	constructor(e) {
		super("m3"), this.nodeType = "Matrix3", this.value = e ?? new P();
	}
	generateReadonly(e, t, n, r, i, a) {
		return e.format("mat3(" + this.value.elements.join(", ") + ")", r, t);
	}
	get elements() {
		return this.value.elements;
	}
	set elements(e) {
		this.value.fromArray(e);
	}
}, Yi = class extends It {
	constructor(e) {
		super("m4"), this.nodeType = "Matrix4", this.value = e ?? new De();
	}
	generateReadonly(e, t, n, r, i, a) {
		return e.format("mat4(" + this.value.elements.join(", ") + ")", r, t);
	}
	get elements() {
		return this.value.elements;
	}
	set elements(e) {
		this.value.fromArray(e);
	}
};
function Xi(e, t, n, r = 0) {
	e.setUvTransform(n[0], n[1], t[0], t[1], 0, 0, 0).premultiply(new P().makeRotation(r * Se.DEG2RAD));
}
var Zi = class extends Ji {
	constructor(e, t, n = 0) {
		super(new P()), this.repeat = e, this.offset = t, this.rotation = n, Xi(this.value, e, t, n);
	}
	updateMatrix() {
		Xi(this.value, this.repeat, this.offset, this.rotation);
	}
}, Qi = class extends It {
	constructor(e = 1, t) {
		super("v4[]"), this.nodeType = "Vector4Array", this.size = e, this.value = Array.isArray(t) ? t : t instanceof N ? Array(e).fill(t) : Array(e).fill(new N(0));
	}
}, $i = class extends V {
	constructor(e, t, n, r) {
		super("v3"), this.nodeType = "Blend", this.a = e, this.b = t, this.alpha = n, this.mode = r;
	}
	generate(e, t) {
		if (e.isShader("fragment")) {
			let n = [];
			return n.push(this.a.build(e, "c")), n.push(this.b.build(e, "c")), n.push(this.alpha.build(e, "f")), n.push(this.mode.build(e, "i")), e.format("spe_blend(" + n.join(",") + ")", this.getType(e), t);
		}
		return console.warn("BlendNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, ea = class extends V {
	constructor(e, t) {
		super("v3"), this.nodeType = "CustomColor", this.color = e, this.alpha = t, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		if (e.isShader("fragment")) {
			let n = e.include(ea.Nodes.customColor);
			e.addFragmentVariable(this.calpha, "float");
			let r = [];
			return r.push(this.color.build(e, "v3")), r.push(this.mask ? `luminance(${this.mask.build(e, "v3")})` : "1.0"), r.push(this.alpha.build(e, "f")), r.push(this.calpha), e.format(n + "(" + r.join(",") + ")", this.getType(e), t);
		}
		return console.warn("CustomColorNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, ta = ea;
ta.Nodes = { customColor: new H("vec3 customColor(vec3 color, float mask, float alpha, out float calpha) {\n				float lalpha = alpha * mask;\n				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);\n				accumAlpha += (1.0 - accumAlpha) * lalpha;\n\n				return color;\n			}") };
var na = class extends V {
	constructor(e, t) {
		super("v3"), this.nodeType = "CustomNormal", this.cnormal = e, this.alpha = t, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		if (e.isShader("fragment")) {
			let n = e.include(na.Nodes.customNormal);
			e.addFragmentVariable(this.calpha, "float");
			let r = [];
			return r.push(this.cnormal.build(e, "v3")), r.push("normal"), r.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), r.push(this.alpha.build(e, "f")), r.push(this.calpha), e.format(n + "(" + r.join(",") + ")", this.getType(e), t);
		}
		return console.warn("CustomNormalNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, ra = na;
ra.Nodes = { customNormal: new H("vec3 customNormal(vec3 cnormal, vec3 norm, float mask, float alpha, out float calpha) {\n				vec3 normal = packNormalToRGB( norm ).rgb;\n				normal *= step( vec3(0.5), cnormal );\n\n				float lalpha = alpha * mask;\n				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );\n				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;\n\n				return normal;\n			}") };
var ia = [
	{
		a: "y",
		b: "z",
		pole: "x"
	},
	{
		a: "z",
		b: "x",
		pole: "y"
	},
	{
		a: "x",
		b: "y",
		pole: "z"
	}
], aa = class extends V {
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f = -1) {
		super("v3"), this.nodeType = "CustomTexture", this.texture = e, this.textureSize = t, this.crop = n, this.projection = r, this.axis = i, this.projectionAxis = f, this.side = a, this.size = o, this.blending = s, this.mat = c, this.isMask = d, this.alpha = l, this.mode = u, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		e.require("position"), e.require("normal"), e.require("uv"), e.requires.uv = [!0], e.extensions.shaderTextureLOD = !0, e.extensions.derivatives = !0;
		let n, r = `g${this.uuid.toString().replace(/-/g, "")}`;
		switch (this.projection.value) {
			case 3: {
				let t = this.projectionAxis;
				if (t === 0 || t === 2) {
					let { a: i, b: a, pole: o } = ia[t];
					n = e.include(new H(`\nvec3 ${r}_cylindricalTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {\n                vec3 posN = normalize(position);\n                float u = 0.5 + atan(posN.${i}, posN.${a}) / (2.*3.1415);\n                float scaledHeight = position.${o} / (size.y * 0.5);\n                float v =  (scaledHeight / 2.) + .5;\n\n                vec2 calculatedUv = vec2(u,v);\n\t\t\t\tvec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;\n\t\t\t\twriteUv = uvs;\n\n                // Seam-safe FILTERED sample: the atan()-derived u jumps a whole\n                // period at the wrap seam, so implicit derivatives would smear a\n                // lowest-mip column across it. Folding the u-derivatives to the\n                // nearest period keeps the true footprint — and, unlike the\n                // forced-LOD sample this replaces (log2(fwidth*texSize), up to a\n                // full mip too low), it leaves mip selection to the sampler, so\n                // the layer's Sharpness filters and anisotropy actually apply.\n                vec2 uvDx = dFdx(uvs); uvDx.x -= floor(uvDx.x + 0.5);\n                vec2 uvDy = dFdy(uvs); uvDy.x -= floor(uvDy.x + 0.5);\n\t\t\t\t#ifdef GL_EXT_shader_texture_lod\n                vec4 tmp = texture2DGradEXT(tex, uvs, uvDx, uvDy);\n\t\t\t\t#else\n                vec4 tmp = textureGrad(tex, uvs, uvDx, uvDy);\n\t\t\t\t#endif\n\n\t\t\t\tvec3 col = tmp.rgb;\n\t\t\t\tfloat lalpha = alpha * tmp.a;\n\t\t\t\tif ( crop > 0.5 ) {\n\t\t\t\t\tif ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {\n\t\t\t\t\t\tlalpha = 0.0;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tlalpha *= mask;\n\n\t\t\t\tcalpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );\n\t\t\t\taccumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n\t\t\t\treturn col;\n\t\t\t}\n`));
				} else n = e.include(aa.Nodes.cylindrical);
				break;
			}
			case 2: {
				let t = this.projectionAxis;
				if (t === 0 || t === 2) {
					let { a: i, b: a, pole: o } = ia[t];
					n = e.include(new H(`\nvec3 ${r}_sphericalTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {\n                vec3 posN = normalize(vPosition);\n                float u = 0.5 + atan(posN.${i}, posN.${a}) / (2.*3.1415);\n                float v = 0.5 + asin(posN.${o}) / 3.1415;\n\n                vec2 calculatedUv = vec2(u,v);\n\t\t\t\tvec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;\n\t\t\t\twriteUv = uvs;\n\n                // Seam-safe FILTERED sample: the atan()-derived u jumps a whole\n                // period at the wrap seam, so implicit derivatives would smear a\n                // lowest-mip column across it. Folding the u-derivatives to the\n                // nearest period keeps the true footprint — and, unlike the\n                // forced-LOD sample this replaces (log2(fwidth*texSize), up to a\n                // full mip too low), it leaves mip selection to the sampler, so\n                // the layer's Sharpness filters and anisotropy actually apply.\n                vec2 uvDx = dFdx(uvs); uvDx.x -= floor(uvDx.x + 0.5);\n                vec2 uvDy = dFdy(uvs); uvDy.x -= floor(uvDy.x + 0.5);\n\t\t\t\t#ifdef GL_EXT_shader_texture_lod\n                vec4 tmp = texture2DGradEXT(tex, uvs, uvDx, uvDy);\n\t\t\t\t#else\n                vec4 tmp = textureGrad(tex, uvs, uvDx, uvDy);\n\t\t\t\t#endif\n\n\t\t\t\tvec3 col = tmp.rgb;\n\t\t\t\tfloat lalpha = alpha * tmp.a;\n\t\t\t\tif ( crop > 0.5 ) {\n\t\t\t\t\tif ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {\n\t\t\t\t\t\tlalpha = 0.0;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tlalpha *= mask;\n\n\t\t\t\tcalpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );\n\t\t\t\taccumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n\t\t\t\treturn col;\n\t\t\t}\n`));
				} else n = e.include(aa.Nodes.spherical);
				break;
			}
			case 1: {
				let t = [
					"vec3(1.0, 0.0, 0.0)",
					"vec3(0.0, 1.0, 0.0)",
					"vec3(0.0, 0.0, 1.0)"
				][this.axis.value], i = [
					"zy",
					"xz",
					"xy"
				][this.axis.value], a = new H(`\n\t\tvec3 ${r}_planarTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {\n\t\t\t\tvec2 projected = (1. + (position.${i})) / 2.;\n\t\t\t\tvec2 uvs = ( mat * vec3( (projected * 2. - 1.) / (size * .5), 1. ) / 2. + 0.5 ).xy;\n\t\t\t\twriteUv = uvs;\n\n\t\t\t\tvec4 tmp = texture2D( tex, uvs );\n\n\t\t\t\tvec3 col = tmp.rgb;\n\t\t\t\tfloat lalpha = alpha * tmp.a;\n\t\t\t\t${this.side.value === 2 ? "" : `lalpha *= step(0.0, ${this.side.value === 1 ? "-1.0 * " : ""}dot(vObjectNormal, ${t}));`}\n\n\t\t\t\tif ( crop > 0.5 ) {\n\t\t\t\t\tif ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {\n\t\t\t\t\t\tlalpha = 0.0;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\tlalpha *= mask;\n\n\t\t\t\tcalpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );\n\t\t\t\taccumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n\t\t\t\treturn col;\n\t\t\t}`);
				n = e.include(a);
				break;
			}
			case 4:
				n = e.include(aa.Nodes.triplanar);
				break;
			case 0: {
				let t = aa.Nodes.uv.src, i = new H(t.replace("uvTexture", `${r}_uvTexture`));
				n = e.include(i);
				break;
			}
			default: n = e.include(aa.Nodes.uv);
		}
		e.addFragmentVariable(this.calpha, "float");
		let i = [];
		if (i.push("normal"), i.push(this.texture.generate(e, "t")), i.push(this.textureSize.build(e, "v2")), i.push(this.crop.build(e, "f")), i.push(this.mat.build(e, "mat3")), i.push(this.size.build(e, "v2")), i.push(this.blending.build(e, "f")), i.push(this.isMask.build(e, "b")), i.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), i.push(this.alpha.build(e, "f")), i.push(this.mode.build(e, "i")), i.push(this.calpha), this.projection.value === 4) {
			let t = `${r}_writeUvs`, n = t + "0", a = t + "1", o = t + "2", s = `${r}_triplanarWeights`;
			e.addFragmentVariable(n, "vec2"), e.addFragmentVariable(a, "vec2"), e.addFragmentVariable(o, "vec2"), e.addFragmentVariable(s, "vec3"), i.push(n), i.push(a), i.push(o), i.push(s);
		} else {
			let t = `${r}_writeUvs`;
			e.addFragmentVariable(t, "vec2"), i.push(t);
		}
		return e.format(n + "(" + i.join(",") + ")", this.getType(e), t);
	}
}, oa = aa;
oa.Nodes = {
	cylindrical: new H("\nvec3 cylindricalTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {\n                vec3 posN = normalize(position);\n                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);\n                float scaledHeight = position.y / (size.y * 0.5);\n                float v =  (scaledHeight / 2.) + .5;\n\n                vec2 calculatedUv = vec2(u,v);\n				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;\n				writeUv = uvs;\n\n                // Seam-safe FILTERED sample: the atan()-derived u jumps a whole\n                // period at the wrap seam, so implicit derivatives would smear a\n                // lowest-mip column across it. Folding the u-derivatives to the\n                // nearest period keeps the true footprint — and, unlike the\n                // forced-LOD sample this replaces (log2(fwidth*texSize), up to a\n                // full mip too low), it leaves mip selection to the sampler, so\n                // the layer's Sharpness filters and anisotropy actually apply.\n                vec2 uvDx = dFdx(uvs); uvDx.x -= floor(uvDx.x + 0.5);\n                vec2 uvDy = dFdy(uvs); uvDy.x -= floor(uvDy.x + 0.5);\n				#ifdef GL_EXT_shader_texture_lod\n                vec4 tmp = texture2DGradEXT(tex, uvs, uvDx, uvDy);\n				#else\n                vec4 tmp = textureGrad(tex, uvs, uvDx, uvDy);\n				#endif\n\n				vec3 col = tmp.rgb;\n				float lalpha = alpha * tmp.a;\n				if ( crop > 0.5 ) {\n					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {\n						lalpha = 0.0;\n					}\n				}\n\n				lalpha *= mask;\n				\n				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );\n				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n				return col;\n			}\n"),
	spherical: new H("\nvec3 sphericalTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {\n                vec3 posN = normalize(vPosition);\n                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);\n                float v = 0.5 + asin(posN.y) / 3.1415;\n\n                vec2 calculatedUv = vec2(u,v);\n				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;\n				writeUv = uvs;\n\n                // Seam-safe FILTERED sample: the atan()-derived u jumps a whole\n                // period at the wrap seam, so implicit derivatives would smear a\n                // lowest-mip column across it. Folding the u-derivatives to the\n                // nearest period keeps the true footprint — and, unlike the\n                // forced-LOD sample this replaces (log2(fwidth*texSize), up to a\n                // full mip too low), it leaves mip selection to the sampler, so\n                // the layer's Sharpness filters and anisotropy actually apply.\n                vec2 uvDx = dFdx(uvs); uvDx.x -= floor(uvDx.x + 0.5);\n                vec2 uvDy = dFdy(uvs); uvDy.x -= floor(uvDy.x + 0.5);\n				#ifdef GL_EXT_shader_texture_lod\n                vec4 tmp = texture2DGradEXT(tex, uvs, uvDx, uvDy);\n				#else\n                vec4 tmp = textureGrad(tex, uvs, uvDx, uvDy);\n				#endif\n\n				vec3 col = tmp.rgb;\n				float lalpha = alpha * tmp.a;\n				if ( crop > 0.5 ) {\n					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {\n						lalpha = 0.0;\n					}\n				}\n\n				lalpha *= mask;\n\n				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );\n				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n				return col;\n			}\n"),
	uv: new H("vec3 uvTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUv) {\n				vec2 uvs = ( mat * vec3( vUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;\n				writeUv = uvs;\n\n				vec4 tmp = texture2D( tex, uvs );\n\n				vec3 col = tmp.rgb;\n\n				float lalpha = alpha * tmp.a;\n				if ( crop > 0.5 ) {\n					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {\n						lalpha = 0.0;\n					}\n				}\n				\n				lalpha *= mask;\n\n				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );\n				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n				return col;\n			}"),
	triplanar: new H("vec3 triplanarTexture(vec3 normal, sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float blending, bool isMask, float mask, float alpha, int mode, out float calpha, out vec2 writeUvs0, out vec2 writeUvs1, out vec2 writeUvs2, out vec3 writeWeights) {\n				vec3 p = position;\n				vec2 uv0 = (1.0 + p.xy) / 2.0;     \n				vec2 uv1 = (1.0 + p.zy) / 2.0;		\n				vec2 uv2 = (1.0 + p.xz) / 2.0;		\n	\n				uv0 = (mat * vec3((uv0 * 2.0 - 1.0) / (size * 0.5), 1.0) / 2.0 + 0.5).xy;\n				uv1 = (mat * vec3((uv1 * 2.0 - 1.0) / (size * 0.5), 1.0) / 2.0 + 0.5).xy;\n				uv2 = (mat * vec3((uv2 * 2.0 - 1.0) / (size * 0.5), 1.0) / 2.0 + 0.5).xy;\n\n				// Range from 3 to 128 seems to be good\n				float exponent = (1.0 - blending) * 125.0 + 3.0;\n\n				vec3 n = vObjectNormal;\n				vec3 weights = abs(normalize(n));\n				weights = pow(weights, vec3(exponent));\n				weights /= dot(weights, vec3(1.0));\n\n				// Write out all sets of UVs that we generated\n				writeUvs0 = uv0;\n				writeUvs1 = uv1;\n				writeUvs2 = uv2;\n				writeWeights = weights;\n\n				// Plain filtered samples: triplanar UVs are continuous (no wrap\n				// seam), so implicit derivatives are already correct — the\n				// forced-LOD sample this replaces bypassed the layer's Sharpness\n				// filters and over-blurred by up to a mip (fwidth overestimates\n				// the footprint; see the spherical/cylindrical variants).\n				vec4 tmp = \n					texture2D(tex, uv0) * weights.z + \n					texture2D(tex, uv1) * weights.x + \n					texture2D(tex, uv2) * weights.y;\n\n				vec3 col = tmp.rgb;\n				float lalpha = alpha * tmp.a;\n\n				// Apply cropping across all 3 planes\n				if ( crop > 0.5 ) {\n					if ( uv0.x < 0.0 || uv0.x > 1.0 || uv0.y < 0.0 || uv0.y > 1.0 )  {\n						lalpha = 0.0;\n					}\n					if ( uv1.x < 0.0 || uv1.x > 1.0 || uv1.y < 0.0 || uv1.y > 1.0 )  {\n						lalpha = 0.0;\n					}\n					if ( uv2.x < 0.0 || uv2.x > 1.0 || uv2.y < 0.0 || uv2.y > 1.0 )  {\n						lalpha = 0.0;\n					}\n				}\n\n				lalpha *= mask;\n				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);\n				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n				return col;//n * 0.5 + 0.5;\n			}			\n			")
};
var sa = class extends V {
	constructor(e, t, n, r, i, a, o, s, c, l, u, d) {
		super("v3"), this.nodeType = "Depth", this.gradientType = e, this.smooth = t, this.near = n, this.far = r, this.isVector = i, this.isWorldSpace = a, this.origin = o, this.direction = s, this.colors = c, this.steps = l, this.isMask = d, this.alpha = u, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		let n = `g${this.uuid.toString().replace(/-/g, "")}`, r = new H(`vec3 ${n}_sdepth(float near, float far, vec3 origin, vec3 direction, vec4 colors[${n}_MAX_COLORS], float steps[${n}_MAX_COLORS], bool isMask, float mask, float alpha, out float calpha) {\n               vec4 color = colors[0];\n               #ifdef ${n}_IS_VECTOR\n                   #ifdef ${n}_LINEAR\n                       #ifdef ${n}_WORLDSPACE\n                       float depth = vectorLinearWorldSpaceDepth(direction, origin, near, far);\n                       #else\n                       float depth = vectorLinearObjectSpaceDepth(direction, origin, near, far);\n                       #endif\n                   #else\n                       #ifdef ${n}_WORLDSPACE\n                           float depth = vectorSphericalWorldSpaceDepth(origin, near, far);\n                       #else\n                           float depth = vectorSphericalObjectSpaceDepth(origin, near, far);\n                       #endif\n                   #endif\n               #else\n                   float dist = length(vWPosition - cameraPosition);\n\t\t\t       float depth = ( dist - near ) / ( far - near );\n               #endif\n\n\n              float p;\n              #ifdef ${n}_SMOOTH\n\t\t\t\tfor ( int i = 1; i < ${n}_MAX_COLORS; i++ ) {\n\t\t\t\t\t\tp = clamp( ( depth - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );\n\t\t\t\t\t\tcolor = mix(color, colors[i], smoothstep(0.0, 1.0, p));\n\t\t\t\t\t}\n              #else\n                for ( int i = 1; i < ${n}_MAX_COLORS; i++ ) {\n                   p = clamp(( depth - steps[i - 1] ) / ( steps[i] - steps[i - 1] ), 0.0, 1.0);\n                   color = mix(color, colors[i], p);\n                 }\n              #endif\n\n               float lalpha = alpha * color.a * mask;\n               calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));\n\t\t\t   accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\t\t\t   \n               return color.rgb;\n\t\t\t}`, [
			sa.Nodes.vectorLinearWorldSpaceDepth,
			sa.Nodes.vectorLinearObjectSpaceDepth,
			sa.Nodes.vectorSphericalObjectSpaceDepth,
			sa.Nodes.vectorSphericalWorldSpaceDepth
		]);
		if (e.isShader("fragment")) {
			e.define(`${n}_MAX_COLORS`, this.colors.value.length), this.smooth.value && e.define(`${n}_SMOOTH`), this.isVector.value > .5 && e.define(`${n}_IS_VECTOR`), this.gradientType.value === 0 && e.define(`${n}_LINEAR`), this.isWorldSpace.value > .5 && e.define(`${n}_WORLDSPACE`), e.require("worldPosition"), e.addFragmentVariable(this.calpha, "float");
			let i = e.include(r), a = [];
			return a.push(this.near.build(e, "f")), a.push(this.far.build(e, "f")), a.push(this.origin.build(e, "v3")), a.push(this.direction.build(e, "v3")), a.push(this.colors.build(e, "v4[]")), a.push(this.steps.build(e, "f[]")), a.push(this.isMask.build(e, "b")), a.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), a.push(this.alpha.build(e, "f")), a.push(this.calpha), e.format(i + "(" + a.join(",") + ")", this.getType(e), t);
		}
		return console.warn("DepthNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, ca = sa;
ca.Nodes = {
	vectorLinearWorldSpaceDepth: new H("float vectorLinearWorldSpaceDepth(vec3 direction, vec3 origin, float near, float far) {\n               vec3 n = normalize(direction);\n               float dist = (n.x*(vWPosition.x - origin.x) + n.y*(vWPosition.y - origin.y) + n.z*(vWPosition.z - origin.z));\n               return ( dist - near ) / ( far - near );\n            }"),
	vectorLinearObjectSpaceDepth: new H("float vectorLinearObjectSpaceDepth(vec3 direction, vec3 origin, float near, float far) {\n               vec3 n = normalize(direction);\n               float dist = (n.x*(position.x - origin.x) + n.y*(position.y - origin.y) + n.z*(position.z - origin.z));\n               return ( dist - near ) / ( far - near );\n            }"),
	vectorSphericalWorldSpaceDepth: new H("float vectorSphericalWorldSpaceDepth(vec3 origin, float near, float far) {\n               float dist = length(vWPosition - origin);\n               return ( dist - near ) / ( far - near );\n            }"),
	vectorSphericalObjectSpaceDepth: new H("float vectorSphericalObjectSpaceDepth(vec3 origin, float near, float far) {\n               float dist = length(position - origin);\n               return ( dist - near ) / ( far - near );\n            }")
};
var la = class extends V {
	constructor(e, t, n, r, i, a, o) {
		super("v3"), this.nodeType = "Cavity", this.firstTime = !0, this.ridge = e, this.valley = t, this.normalViewMap = n, this.resolution = r, this.isMask = o, this.alpha = i, this.mode = a, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		if (this.firstTime && (e.addVertexParsVariable("randomColor", "attribute vec3"), e.addVertexParsVariable("vID", "flat out float"), e.addFragmentParsVariable("vID", "flat in float"), e.addVertexFinalCode("\n                vID = randomColor.r;\n            ")), e.isShader("fragment")) {
			e.addFragmentVariable(this.calpha, "float");
			let n = e.include(la.Nodes.cavity), r = [];
			return r.push(this.normalViewMap.getTexture(e, "t")), r.push(this.resolution.build(e, "v2")), r.push(this.ridge.build(e, "f")), r.push(this.valley.build(e, "f")), r.push(this.isMask.build(e, "b")), r.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), r.push(this.alpha.build(e, "f")), r.push(this.mode.build(e, "i")), r.push(this.calpha), this.firstTime = !this.firstTime, e.format(n + "(" + r.join(",") + ")", this.getType(e), t);
		}
		return console.warn("CavityNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, ua = la;
ua.Nodes = function() {
	return { cavity: new H("vec3 cavity(sampler2D normalViewMap, vec2 resolution, float ridge, float valley, bool isMask, float mask, float alpha, int mode, out float calpha) {\n				// The factors saturate the soft clamp by 2 — beyond that the\n				// response is visually identical, so 2 is the ceiling\n				// everywhere (panel, DSL, variables, old files).\n				ridge = clamp(ridge, 0.0, 2.0);\n				valley = clamp(valley, 0.0, 2.0);\n\n				vec2 nuv = gl_FragCoord.xy / resolution;\n				vec2 texel = vec2(1.0) / resolution;\n\n				vec4 nUp = texture2D(normalViewMap, nuv + vec2(0.0, texel.y));\n				vec4 nDown = texture2D(normalViewMap, nuv - vec2(0.0, texel.y));\n				vec4 nLeft = texture2D(normalViewMap, nuv - vec2(texel.x, 0.0));\n				vec4 nRight = texture2D(normalViewMap, nuv + vec2(texel.x, 0.0));\n\n				float curv = 0.0;\n				if (nUp.a == vID && nDown.a == vID && nLeft.a == vID && nRight.a == vID &&\n					dot(nUp.xyz, nUp.xyz) > 0.5 && dot(nDown.xyz, nDown.xyz) > 0.5 &&\n					dot(nLeft.xyz, nLeft.xyz) > 0.5 && dot(nRight.xyz, nRight.xyz) > 0.5) {\n					float ndiff = (nUp.y - nDown.y) + (nRight.x - nLeft.x);\n					// Blender's control mapping (workbench_data.c): a bigger\n					// factor lowers the control, which raises both the linear\n					// range and the clamp ceiling of the soft clamp — the\n					// factors get a real O(1) signal to scale.\n					float ridgeControl = 0.5 / max(ridge * ridge, 0.0001);\n					float valleyControl = 0.7 / max(valley * valley, 0.0001);\n					curv = ndiff > 0.0\n						? 2.0 * cavitySoftClamp(ndiff, ridgeControl)\n						: -2.0 * cavitySoftClamp(-ndiff, valleyControl);\n					// Dead-zone: sub-visible curvature (buffer quantization\n					// noise, near-zero factors) is no curvature.\n					if (abs(curv) < 0.001) curv = 0.0;\n				}\n\n				// Where there is no curvature the layer says NOTHING: composite\n				// with weight 0 (the outline layer's pattern) so flat pixels are\n				// a bit-exact passthrough. Compositing the identity mid-grey at\n				// full alpha instead perturbs the frame by float ulps\n				// (1-2(1-b)(1-o) != b exactly), which downstream edge-AA\n				// amplified into visible silhouette speckles. Mask mode keeps\n				// the full-coverage grey — the mask IS the color output.\n				// (\"active\" is a GLSL ES reserved word — hence cavityOn.)\n				float cavityOn = curv != 0.0 ? 1.0 : 0.0;\n				float lalpha = alpha * mask * mix(cavityOn, 1.0, float(isMask));\n				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));\n				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n				return vec3(clamp(0.5 + 0.5 * curv, 0.0, 1.0));\n			}", [new H("float cavitySoftClamp(float c, float control) {\n				if (c < 0.5 / control) return c * (1.0 - c * control);\n				return 0.25 / control;\n			}")]) };
}();
var da = function() {
	let e = new H("vec3 random3(vec3 c) {\n			float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));\n			vec3 r;\n			r.z = fract(512.0*j);\n			j *= .125;\n			r.x = fract(512.0*j);\n			j *= .125;\n			r.y = fract(512.0*j);\n			return r-0.5;\n		}"), t = new H("float simplexFast(vec3 p) {\n			 vec3 s = floor(p + dot(p, vec3(F3)));\n			 mediump vec3 x = p - s + dot(s, vec3(G3));\n			 mediump vec3 hs = s;\n			 \n			 mediump vec3 e = step(vec3(0.0), x - x.yzx);\n			 mediump vec3 i1 = e*(1.0 - e.zxy);\n			 mediump vec3 i2 = 1.0 - e.zxy*(1.0 - e);\n				\n			 mediump vec3 x1 = x - i1 + G3;\n			 mediump vec3 x2 = x - i2 + 2.0*G3;\n			 mediump vec3 x3 = x - 1.0 + 3.0*G3;\n			 \n			 mediump vec4 w, d;\n			 \n			 w.x = dot(x, x);\n			 w.y = dot(x1, x1);\n			 w.z = dot(x2, x2);\n			 w.w = dot(x3, x3);\n			 \n			 w = max(0.6 - w, 0.0);\n			 \n			 d.x = dot(random3(hs), x);\n			 d.y = dot(random3(hs + i1), x1);\n			 d.z = dot(random3(hs + i2), x2);\n			 d.w = dot(random3(hs + 1.0), x3);\n			 \n			 w *= w;\n			 w *= w;\n			 d *= w;\n			 \n			 return dot(d, vec4(52.0));\n		}", [e]);
	t.keywords.F3 = new U("float F3 0.3333333"), t.keywords.G3 = new U("float G3 0.1666667");
	let n = new H("float simplexPrecise(vec3 p) {\n			 vec3 s = floor(p + dot(p, vec3(F3)));\n			 vec3 x = p - s + dot(s, vec3(G3));\n			 \n			 vec3 e = step(vec3(0.0), x - x.yzx);\n			 vec3 i1 = e*(1.0 - e.zxy);\n			 vec3 i2 = 1.0 - e.zxy*(1.0 - e);\n				\n			 vec3 x1 = x - i1 + G3;\n			 vec3 x2 = x - i2 + 2.0*G3;\n			 vec3 x3 = x - 1.0 + 3.0*G3;\n			 \n			 vec4 w, d;\n			 \n			 w.x = dot(x, x);\n			 w.y = dot(x1, x1);\n			 w.z = dot(x2, x2);\n			 w.w = dot(x3, x3);\n			 \n			 w = max(0.6 - w, 0.0);\n			 \n			 d.x = dot(random3(s), x);\n			 d.y = dot(random3(s + i1), x1);\n			 d.z = dot(random3(s + i2), x2);\n			 d.w = dot(random3(s + 1.0), x3);\n			 \n			 w *= w;\n			 w *= w;\n			 d *= w;\n			 \n			 return dot(d, vec4(52.0));\n		}", [e]);
	n.keywords.F3 = new U("float F3 0.3333333"), n.keywords.G3 = new U("float G3 0.1666667");
	let r = new H("float simplexFractal(vec3 m) {\n			mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);\n			mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);\n			mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);\n			return 0.5333333 * simplexFast(m * rot1)\n				 + 0.2666667 * simplexFast(2.0 * m * rot2)\n				 + 0.1333333 * simplexFast(4.0 * m * rot3)\n				 + 0.0666667 * simplexFast(8.0 * m);\n		}", [t]), i = new H("vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}"), a = new H("vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}"), o = new H("float simplexAshima(vec3 v) {\n		  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n		  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n		  vec3 i  = floor(v + dot(v, C.yyy) );\n		  vec3 x0 =   v - i + dot(i, C.xxx) ;\n		  vec3 g = step(x0.yzx, x0.xyz);\n		  vec3 l = 1.0 - g;\n		  vec3 i1 = min( g.xyz, l.zxy );\n		  vec3 i2 = max( g.xyz, l.zxy );\n		  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n		  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n		  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n		  i = mod(i, 289.0 ); \n		  vec4 p = permute( permute( permute( \n					 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n				   + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n				   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n		  float n_ = 1.0/7.0; \n		  vec3  ns = n_ * D.wyz - D.xzx;\n		  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  \n		  vec4 x_ = floor(j * ns.z);\n		  vec4 y_ = floor(j - 7.0 * x_ );    \n		  vec4 x = x_ *ns.x + ns.yyyy;\n		  vec4 y = y_ *ns.x + ns.yyyy;\n		  vec4 h = 1.0 - abs(x) - abs(y);\n		  vec4 b0 = vec4( x.xy, y.xy );\n		  vec4 b1 = vec4( x.zw, y.zw );\n		  vec4 s0 = floor(b0)*2.0 + 1.0;\n		  vec4 s1 = floor(b1)*2.0 + 1.0;\n		  vec4 sh = -step(h, vec4(0.0));\n		  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n		  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n		  vec3 p0 = vec3(a0.xy,h.x);\n		  vec3 p1 = vec3(a0.zw,h.y);\n		  vec3 p2 = vec3(a1.xy,h.z);\n		  vec3 p3 = vec3(a1.zw,h.w);\n		  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n		  p0 *= norm.x;\n		  p1 *= norm.y;\n		  p2 *= norm.z;\n		  p3 *= norm.w;\n		  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n		  m = m * m;\n		  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n										dot(p2,x2), dot(p3,x3) ) );\n		}", [i, a]), s = new H("float fbm(vec3 x) {\n			float v = 0.0;\n			float a = 0.5;\n			vec3 shift = vec3(100);\n			for (int i = 0; i < NUM_OCTAVES; ++i) {\n				v += a * noise(x);\n				x = x * 2.0 + shift;\n				a *= 0.5;\n			}\n			return v;\n		}", [new H("float noise(vec3 p){\n			vec3 a = floor(p);\n			vec3 d = p - a;\n			d = d * d * (3.0 - 2.0 * d);\n			vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);\n			vec4 k1 = perm(b.xyxy);\n			vec4 k2 = perm(k1.xyxy + b.zzww);\n			vec4 c = k2 + a.zzzz;\n			vec4 k3 = perm(c);\n			vec4 k4 = perm(c + 1.0);\n			vec4 o1 = fract(k3 * (1.0 / 41.0));\n			vec4 o2 = fract(k4 * (1.0 / 41.0));\n			vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);\n			vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);\n			return o4.y * d.y + o4.x * (1.0 - d.y);\n		}", [new H("vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}", [new H("vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}")])])]);
	return s.keywords.NUM_OCTAVES = new U("int NUM_OCTAVES 5"), {
		simplexFast: t,
		simplexPrecise: n,
		simplexFractal: r,
		simplexAshima: o,
		fbm: s,
		perlin: new H("float perlin(vec3 P){\n		  vec3 Pi0 = floor(P);\n		  vec3 Pi1 = Pi0 + vec3(1.0);\n		  Pi0 = mod(Pi0, 289.0);\n		  Pi1 = mod(Pi1, 289.0);\n		  vec3 Pf0 = fract(P);\n		  vec3 Pf1 = Pf0 - vec3(1.0);\n		  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n		  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n		  vec4 iz0 = Pi0.zzzz;\n		  vec4 iz1 = Pi1.zzzz;\n		  vec4 ixy = permute(permute(ix) + iy);\n		  vec4 ixy0 = permute(ixy + iz0);\n		  vec4 ixy1 = permute(ixy + iz1);\n		  vec4 gx0 = ixy0 / 7.0;\n		  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n		  gx0 = fract(gx0);\n		  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n		  vec4 sz0 = step(gz0, vec4(0.0));\n		  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n		  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n		  vec4 gx1 = ixy1 / 7.0;\n		  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n		  gx1 = fract(gx1);\n		  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n		  vec4 sz1 = step(gz1, vec4(0.0));\n		  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n		  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n		  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n		  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n		  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n		  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n		  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n		  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n		  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n		  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n		  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n		  g000 *= norm0.x;\n		  g010 *= norm0.y;\n		  g100 *= norm0.z;\n		  g110 *= norm0.w;\n		  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n		  g001 *= norm1.x;\n		  g011 *= norm1.y;\n		  g101 *= norm1.z;\n		  g111 *= norm1.w;\n		  float n000 = dot(g000, Pf0);\n		  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n		  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n		  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n		  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n		  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n		  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n		  float n111 = dot(g111, Pf1);\n		  vec3 fade_xyz = fade(Pf0);\n		  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n		  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n		  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n		  return 2.2 * n_xyz;\n		}", [
			i,
			a,
			new H("vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}")
		]),
		voronoi: new H("float voronoi(in vec3 x, in int style, in float smoothness, in float seed, in int quality) \n		{\n			\n			ivec3 p = ivec3(floor(x));\n			vec3 f = fract(x);\n\n			\n			\n			\n			\n			\n			\n			\n			\n			float f1_smooth = 8.0;\n			float f1 = 8.0;\n			float f2_smooth = 8.0;\n			float f2 = 8.0;\n			float e_smooth = 8.0;\n			float e = 8.0;\n\n			\n			ivec3 mb;\n			vec3 mr; \n\n			int steps = quality;\n			\n			for (int x = -steps; x <= steps; x++) \n			for (int y = -steps; y <= steps; y++)\n			for (int z = -steps; z <= steps; z++)\n			{\n				ivec3 b = ivec3(x, y, z);\n				vec3 r = vec3(b) + hashwithoutsine33(vec3(p + b) + seed) - f;\n				float d = length(r);\n				\n				f1_smooth = smin(d, f1_smooth, smoothness);\n\n				\n				if (d < f1) \n				{\n					f2 = f1;\n					f1 = d;\n\n					mb = ivec3(x, y, z);\n					mr = r;\n				} \n				else if (d < f2) \n				{\n					f2 = d;\n				}\n			}	\n			\n			\n			\n			if (style != 0 &&  style != 5 && style != 7)\n			for (int x = -steps; x <= steps; x++) \n			for (int y = -steps; y <= steps; y++)\n			for (int z = -steps; z <= steps; z++)\n			{\n				\n				ivec3 b = mb + ivec3(x, y, z);\n				vec3 r = vec3(b) + hashwithoutsine33(vec3(p + b) + seed) - f;\n				float d1 = dot(0.5 * (mr + r), (r - mr)); 				\n				float d2 = dot(0.5 * (mr + r), normalize(r - mr));\n\n				e_smooth = smin(d1, e_smooth, smoothness);\n\n				e = min(e, d2);\n\n				\n				{\n					ivec3 b = ivec3(x, y, z);\n					if (b != mb) \n					{\n						vec3 r = vec3(b) + hashwithoutsine33(vec3(p + b) + seed) - f;\n						float d = length(r);\n\n						f2_smooth = smin(d, f2_smooth, smoothness);\n					}\n				}\n			}\n\n			\n			if (style == 0) \n			{\n				return f1_smooth;\n			}\n			if (style == 1) \n			{\n				return f2_smooth;\n			}\n			if (style == 2) \n			{\n				return f2_smooth - f1_smooth;\n				\n				\n				\n			}\n			if (style == 3) \n			{\n				\n				float a = f1; \n				float b = f2;\n				float k = 3.0;\n				float h = max(k - abs(a - b), 0.0) / k;\n				float final = min(a, b) - h * h * k * (1.0 / 4.0);\n				return final;\n			}\n			if (style == 4) \n			{\n				\n				return exp(5.0 * e_smooth);\n			}\n			if (style == 5) \n			{\n				return pow(f1_smooth, 3.0);\n			}\n			if (style == 6) \n			{				\n				const float eps = 0.0125;\n\n				\n				float thickness = smoothness * 0.25 + eps;\n\n				\n				float blur = pow(smoothness, 3.0) * 0.25 + eps;\n\n				return smoothstep(\n					thickness - thickness * blur, \n					thickness + thickness * blur, \n					e\n				);\n			}\n			if (style == 7) \n			{\n				return hashwithoutsine13(vec3(p + mb) + seed);\n			}\n		}\n	", [
			new H("float hashwithoutsine13(vec3 p3)\n		{\n			p3  = fract(p3 * .1031);\n			p3 += dot(p3, p3.yzx + 33.33);\n			return fract((p3.x + p3.y) * p3.z);\n		}"),
			new H("vec3 hashwithoutsine33(vec3 p3)\n		{\n			p3 = fract(p3 * vec3(.1031, .1030, .0973));\n			p3 += dot(p3, p3.yxz+33.33);\n			return fract((p3.xxy + p3.yxx)*p3.zyx);\n		}"),
			new H("float metric(in vec3 p)\n		{\n			\n			return length(p);\n\n			\n			\n			\n		}"),
			new H("float smin( float a, float b, float k )\n		{\n			float h = smoothstep(0.0, 1.0, 0.5 + 0.5 * (b - a) / k);\n			float correction = k * h * (1.0 - h);\n			return mix(b, a, h) - correction;\n		}"),
			new H("float smax( float a, float b, float k )\n		{\n			float h = smoothstep(1.0, 0.0, 0.5 + 0.5 * (a - b) / k);\n			float correction = k * h * (1.0 - h);\n			return mix(a, b, h) + correction;\n		}"),
			new H("float remap(float value, float input_min, float input_max, float output_min, float output_max) {\n			// Compute width of each interval\n			float input_width = input_max - input_min;\n			float output_width = output_max - output_min;\n		\n			// Convert input range into a 0-1 range \n			float scaled = (value - input_min) / input_width;\n		\n			// Convert the 0-1 range into a value in output range\n			return output_min + (scaled * output_width);\n		}")
		])
	};
}(), fa = class extends V {
	constructor(e, t, n, r, i, a, o) {
		super("v3"), this.nodeType = "Dust", this.color = e, this.coverage = t, this.softness = n, this.noiseStrength = r, this.noiseScale = i, this.isMask = o, this.alpha = a, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		if (e.require("worldNormal"), e.isShader("fragment")) {
			e.addFragmentVariable(this.calpha, "float");
			let n = e.include(fa.Nodes.dust), r = [];
			return r.push(this.color.build(e, "c")), r.push(this.coverage.build(e, "f")), r.push(this.softness.build(e, "f")), r.push(this.noiseStrength.build(e, "f")), r.push(this.noiseScale.build(e, "f")), r.push(this.isMask.build(e, "b")), r.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), r.push(this.alpha.build(e, "f")), r.push(this.calpha), e.format(n + "(" + r.join(",") + ")", this.getType(e), t);
		}
		return console.warn("DustNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, pa = fa;
pa.Nodes = { dust: new H("vec3 dust(vec3 color, float coverage, float softness, float noiseStrength, float noiseScale, bool isMask, float mask, float alpha, out float calpha) {\n				float facingUp = dot(normalize(vWNormal), vec3(0.0, 1.0, 0.0));\n\n				float breakup = 0.0;\n				if (noiseStrength != 0.0) {\n					vec3 st = position / noiseScale;\n					float noise = simplexFast(st + vec3(1.7, 9.2, 1.0));\n					breakup = noise * noiseStrength;\n				}\n\n				float soft = max(softness, 0.0001);\n				float settle = mix(1.0 + soft, -1.0 - soft, clamp(coverage, 0.0, 1.0));\n				float amount = smoothstep(settle - soft, settle + soft, facingUp + breakup);\n\n				float lalpha = amount * alpha * mask;\n				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));\n				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n				return color;\n			 }", [da.simplexFast]) };
var ma = class extends V {
	constructor(e, t, n, r, i, a, o, s) {
		super("v3"), this.nodeType = "Fresnel", this.color = e, this.bias = t, this.scale = n, this.intensity = r, this.factor = i, this.isMask = s, this.alpha = a, this.mode = o, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		if (e.require("vWorldViewDir"), e.require("worldNormal"), e.isShader("fragment")) {
			e.addFragmentVariable(this.calpha, "float");
			let n = new H("vec3 fresnel(vec3 color, float bias, float scale, float intensity, float factor, bool isMask, float mask, float alpha, int mode, out float calpha) {\n					float fresnel = bias + scale * pow( abs( factor + dot( normalize( vWorldViewDir ), normalize( vWNormal ) ) ), intensity );\n\n					float lalpha = clamp(fresnel, 0.0, 1.0) * alpha * mask;\n					calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));\n					accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n					return color;\n				}"), r = e.include(n), i = [];
			return i.push(this.color.build(e, "c")), i.push(this.bias.build(e, "f")), i.push(this.scale.build(e, "f")), i.push(this.intensity.build(e, "f")), i.push(this.factor.build(e, "f")), i.push(this.isMask.build(e, "b")), i.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), i.push(this.alpha.build(e, "f")), i.push(this.mode.build(e, "i")), i.push(this.calpha), e.format(r + "(" + i.join(",") + ")", this.getType(e), t);
		}
		return console.warn("FresnelNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, ha = class extends V {
	constructor(e, t, n, r, i, a, o, s, c) {
		super("v3"), this.nodeType = "Gradient", this.gradientType = e, this.smooth = t, this.colors = n, this.steps = r, this.offset = i, this.morph = a, this.angle = o, this.isMask = c, this.alpha = s, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		if (e.isShader("fragment")) {
			e.define("GRAD_MAX", 10), e.require("uv"), e.requires.uv = [!0], e.addFragmentVariable(this.calpha, "float");
			let n = e.include(ha.Nodes.gradient), r = [];
			return r.push(this.gradientType.build(e, "i")), r.push(this.smooth.build(e, "b")), r.push(this.colors.build(e, "v4[]")), r.push(this.steps.build(e, "f[]")), r.push(this.offset.build(e, "v2")), r.push(this.morph.build(e, "v2")), r.push(this.angle.build(e, "f")), r.push(this.isMask.build(e, "b")), r.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), r.push(this.alpha.build(e, "f")), r.push(this.calpha), e.format(n + "(" + r.join(",") + ")", this.getType(e), t);
		}
		return console.warn("GradientNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, ga = ha;
ga.Nodes = { gradient: new H("vec3 gradient(int gradientType, bool smoothed, vec4 colors[GRAD_MAX], float steps[GRAD_MAX], vec2 offset, vec2 morph, float angle, bool isMask, float mask, float alpha, out float calpha) {\n				vec4 color = colors[0];\n				vec2 m = morph / vUv.xy;\n				vec2 rot = vec2( 0.5 + m.x, m.y );\n				vec2 dt = vec2(\n					cos( angle ) * rot.x - sin( angle ) * rot.y,\n					sin( angle ) * rot.x + cos( angle ) * rot.y\n				);\n				vec2 pt = ( vUv - 0.5 + offset ) / 2.0 + dt / 2.0;\n				float t = dot( pt, dt ) / dot( dt, dt );\n				if ( gradientType == 1 ) {\n					t = distance (\n						( vUv + morph ) * 3.0,\n						( vUv + offset ) + 1.0\n					) + angle;\n				} else if ( gradientType == 2 ) {\n					float polar = atan(\n						vUv.x + morph.x - 0.5 + offset.x,\n						vUv.y + morph.y - 0.5 + offset.y\n					) * -1.0;\n					t = fract( ( angle / PI / -2.0 ) + 0.5 * ( polar / PI ) );\n				}\n\n				float p;\n				if (smoothed) {\n					for ( int i = 1; i < GRAD_MAX; i++ ) {\n						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );\n						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));\n					}\n\n				} else {\n					for ( int i = 1; i < GRAD_MAX; i++ ) {\n						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );\n						color = mix(color, colors[i], p);\n					}\n				}\n\n				float lalpha = alpha * color.a * mask;\n				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));\n				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n				\n				return color.xyz;\n			}") };
var _a = class extends V {
	constructor(e, t, n, r, i) {
		super("v3"), this.nodeType = "Matcap", this.texture = e, this.isMask = r, this.alpha = t, this.mode = n, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`, this.rotation = i;
	}
	generate(e, t) {
		if (e.isShader("fragment")) {
			e.addFragmentVariable(this.calpha, "float");
			let n = e.include(_a.Nodes.matcap);
			e.require("normal"), e.requires.normal = !0;
			let r = [];
			return r.push(this.texture.generate(e, "t")), r.push("normal"), r.push(this.isMask.build(e, "b")), r.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), r.push(this.alpha.build(e, "f")), r.push(this.mode.build(e, "i")), r.push(this.calpha), r.push(this.rotation.build(e, "f")), e.format(n + "(" + r.join(",") + ")", this.getType(e), t);
		}
		return console.warn("MatcapNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, va = _a;
va.Nodes = { matcap: new H("vec3 matcap(sampler2D matcapTex, vec3 normal, bool isMask, float mask, float alpha, int mode, out float calpha, float rotation) {\n					vec3 viewDir = normalize( vViewPosition );\n					vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n					vec3 y = cross( viewDir, x );\n					vec2 uv = vec2( dot( x, normal ), dot( y, normal ) );\n					uv = mat2( cos(rotation), sin(rotation), -sin(rotation), cos(rotation) ) * uv;\n					uv = uv * 0.495 + 0.5;\n					vec4 matcapColor = texture2D( matcapTex, uv );\n\n					float lalpha = alpha * mask;\n					calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));\n					accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n					\n					return matcapColor.rgb;\n            	}") };
var ya = class extends V {
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v) {
		super("v3"), this.nodeType = "Noise", this.scale = e, this.size = t, this.move = n, this.fA = r, this.fB = i, this.distortion = a, this.colorA = o, this.colorB = s, this.colorC = c, this.colorD = l, this.noiseType = d, this.voronoiStyle = p, this.highCut = m, this.lowCut = h, this.smoothness = g, this.seed = _, this.quality = v, this.isMask = f, this.alpha = u, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t, n, r, i) {
		e.require("uv"), e.requires.uv = [!0], e.addFragmentVariable(this.calpha, "float");
		let a = [
			"simplexFast",
			"simplexFractal",
			"simplexAshima",
			"fbm",
			"perlin",
			"voronoi"
		][this.noiseType.value], o = new H(`vec3 ${a}customNoise(float scale, vec3 size, float move, vec2 fA, vec2 fB, vec2 distortion, vec4 colorA, vec4 colorB, vec4 colorC, vec4 colorD, int voronoiStyle, float highCut, float lowCut, float smoothness, float seed, int quality, bool isMask, float mask, float alpha, out float calpha) \n\t\t\t{\n                \n\t\t\t\tscale = max(abs(scale), 0.001);\n\n\t\t\t\tvec3 st = position / size;\n\t\t\t\tst /= scale;\n\n\t\t\t\t${a == "voronoi" ? `\n\t\tfloat v = ${a}(st + move, voronoiStyle, smoothness, seed, quality);\n\n\t\t\n\t\tv = remap(v, lowCut, highCut, 0.0, 1.0);\n\t\tv = smax(v, 0.0, smoothness * 0.25);\n\t\tv = smin(v, 1.0, smoothness * 0.25);\n\n\t\t\n\t\tvec4 color = mix(colorA, colorC, v); \n\t\t` : `\n\t\tvec3 q = vec3(${a}(st),\n\t\t\t\t\t   ${a}(st + vec3(1.0)),\n\t\t\t\t\t   ${a}(st + vec3(1.0)));\n\t\tvec3 r = vec3(${a}(st + vec3(distortion, 1.0) * q + vec3(fA, 1.0) + move),\n\t\t\t\t\t  ${a}(st + vec3(distortion, 1.0) * q + vec3(fB, 1.0) + move), \n\t\t\t\t\t  ${a}(st * q));\n\t\tfloat f = ${a}(st + r);\n\t\tvec4 color;\n\t\tcolor = mix(colorA, colorB, clamp((f * f) * 4.0, 0.0, 1.0));\n\t\tcolor = mix(color, colorC, clamp(length(q), 0.0, 1.0));\n\t\tcolor = mix(color, colorD, clamp(length(r.x), 0.0, 1.0));\n\t\t`}\n\n\t\t\t\tfloat lalpha = alpha * color.a * mask;\n\t\t\t\tcalpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));\n\t\t\t\taccumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n\t\t\t\treturn clamp(color, 0.0, 1.0).rgb;\n\t\t\t}`, [
			da.simplexFast,
			da.simplexFractal,
			da.simplexAshima,
			da.fbm,
			da.perlin,
			da.voronoi
		]), s = e.include(o), c = [];
		return c.push(this.scale.build(e, "f")), c.push(this.size.build(e, "v3")), c.push(this.move.build(e, "f")), c.push(this.fA.build(e, "v2")), c.push(this.fB.build(e, "v2")), c.push(this.distortion.build(e, "v2")), c.push(this.colorA.build(e, "v4")), c.push(this.colorB.build(e, "v4")), c.push(this.colorC.build(e, "v4")), c.push(this.colorD.build(e, "v4")), c.push(this.voronoiStyle.build(e, "i")), c.push(this.highCut.build(e, "f")), c.push(this.lowCut.build(e, "f")), c.push(this.smoothness.build(e, "f")), c.push(this.seed.build(e, "f")), c.push(this.quality.build(e, "i")), c.push(this.isMask.build(e, "b")), c.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), c.push(this.alpha.build(e, "f")), c.push(this.calpha), e.format(s + "(" + c.join(",") + ")", this.getType(e), t);
	}
};
ya.numOctaves = 5;
var ba = class extends V {
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
		super("v3"), this.nodeType = "Outline", this.firstTime = !0, this.outlineColor = e, this.contourColor = t, this.outlineWidth = n, this.contourWidth = r, this.contourThreshold = i, this.outlineThreshold = a, this.contourFrequency = o, this.outlineSmoothing = s, this.contourDirection = c, this.positionalLines = l, this.compensation = u, this.resolution = d, this.normalMap = f, this.depthMap = p, this.pixelRatio = m, this.alpha = h, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		let n = `g${this.uuid.toString().replace(/-/g, "")}`;
		if (e.require("vWorldViewDir"), e.require("worldNormal"), e.extensions.derivatives = !0, this.compensation.value && e.define("OUTLINE_COMPENSATION", `${n}_offset`), this.firstTime) {
			let t = this.outlineWidth.build(e, "f"), r = this.resolution.build(e, "v2"), i = this.compensation.build(e, "b"), a = this.pixelRatio.build(e, "f");
			e.addVertexParsVariable("randomColor", "attribute vec3"), e.addVertexParsVariable("extrudeNormal", "attribute vec3"), e.addVertexParsVariable(t, "uniform float"), e.addVertexParsVariable(r, "uniform vec2"), e.addVertexParsVariable(i, "uniform bool"), e.addVertexParsVariable(a, "uniform float"), e.addVertexParsVariable("vID", "flat out float"), e.addFragmentParsVariable("vID", "flat in float"), e.addVertexFinalCode(`\n                vID = randomColor.r;\n                vec2 ${n}_offset = vec2(0.0);\n                if (${i}) {\n                    // Instanced draws (cloner instancing): 'transformed' is still\n                    // instance-local here — three's chunks only apply instanceMatrix\n                    // inside project_vertex — so apply it by hand like they do.\n                    vec4 ${n}_localPosition = vec4(transformed, 1.0);\n                    vec3 ${n}_extrudeNormal = extrudeNormal;\n                    #ifdef USE_INSTANCING\n                    ${n}_localPosition = instanceMatrix * ${n}_localPosition;\n                    ${n}_extrudeNormal = mat3(instanceMatrix) * ${n}_extrudeNormal;\n                    #endif\n                    vec4 ${n}_clipPosition = projectionMatrix * (modelViewMatrix * ${n}_localPosition);\n                    \n                    \n                    \n                    vec3 ${n}_clipNormal = mat3(projectionMatrix) * (mat3(modelViewMatrix) * ${n}_extrudeNormal) + 0.0000001;\n                    ${n}_offset = normalize(${n}_clipNormal.xy) / ${r} * (${t} / 2.0) * ${n}_clipPosition.w * 2.0 * ${a};\n                    ${n}_clipPosition.xy += ${n}_offset;\n                    \n                    \n                    gl_Position = ${n}_clipPosition;\n                }\n            `);
		}
		if (e.isShader("fragment")) {
			e.require("uv"), e.requires.uv = [!0], e.addFragmentVariable(this.calpha, "float");
			let n = e.include(ba.Nodes.outline), r = [];
			return r.push(this.outlineColor.build(e, "c")), r.push(this.contourColor.build(e, "c")), r.push(this.outlineWidth.build(e, "f")), r.push(this.contourWidth.build(e, "f")), r.push(this.contourThreshold.build(e, "f")), r.push(this.outlineThreshold.build(e, "f")), r.push(this.contourFrequency.build(e, "f")), r.push(this.outlineSmoothing.build(e, "f")), r.push(this.contourDirection.build(e, "v3")), r.push(this.positionalLines.build(e, "b")), r.push(this.resolution.build(e, "v2")), r.push(this.normalMap.getTexture(e, "t")), r.push(this.depthMap.getTexture(e, "t")), r.push(this.pixelRatio.build(e, "f")), r.push(this.compensation.build(e, "b")), r.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), r.push(this.alpha.build(e, "f")), r.push(this.calpha), this.firstTime = !this.firstTime, e.format(n + "(" + r.join(",") + ")", this.getType(e), t);
		}
		return console.warn("OutlineNode is not compatible with " + e.shader + " shader."), "";
	}
}, xa = ba;
xa.Nodes = function() {
	return { outline: new H("vec3 outline(vec3 outlineColor, vec3 contourColor, float outlineWidth, float contourWidth, float outlineThreshold, float contourThreshold, float outlineSmoothing, float contourFrequency, vec3 contourDirection, bool positionalLines, vec2 resolution, sampler2D normalMap, sampler2D depthMap, float pixelRatio, bool compensation, float mask, float alpha, out float calpha) {\n                vec3 result = outlineColor;\n                float resultAlpha = 0.0;\n\n                vec3 N = normalize(vWNormal);\n                vec2 nuv = (gl_FragCoord.xy / resolution);\n                float sobelSample = compensation ? sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth / 2., pixelRatio) : sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth, pixelRatio);\n                resultAlpha = smoothstep(outlineThreshold - outlineSmoothing, outlineThreshold + outlineSmoothing, sobelSample);\n\n                \n                \n\n                float t = 1.0 - contourThreshold;\n                if(positionalLines) {\n                    vec3 NDir = position * contourDirection;\n                    float NT = NDir.x + NDir.y + NDir.z;\n                    float f  = fract(NT * contourFrequency * 0.01);\n                    float df = fwidth(NT * contourFrequency);\n\n                    float g = smoothstep(df * (contourWidth * 0.01), df * (contourWidth * 0.01 * 2.0), f);\n                    if (g < 1.0 && resultAlpha == 0.0) {\n                        result = contourColor;\n                        resultAlpha = 1.0;\n                    }\n                 }\n                 else {\n                    vec3 NDir = N * contourDirection;\n                    float NT = NDir.x + NDir.y + NDir.z;\n                    float df = fwidth(NT * contourThreshold);\n                    float f = sin(NT * 1.0 * contourFrequency);\n                    float g = smoothstep(0.0, df * contourWidth, 1.0 - f);\n\n                    if (df > (t * 0.5) && g < 1.0 && resultAlpha == 0.0) {\n                        result = contourColor;\n                        resultAlpha = 1.0 - g;\n                    }\n                 }\n\n                 float lalpha = alpha * resultAlpha * mask;\n                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );\n                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;\n				 \n                 return result;\n             }", [new H("\nfloat sobelSample(sampler2D t, sampler2D d, vec2 uv, vec2 resolution, float outlineWidth, float pixelRatio)\n{\n    vec2 halton = haltonSequence[frameIndex];\n    float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy + halton);\n    float temporalAngle  = temporalOffset * PI2;\n\n    vec2 texelSize = (vec2(1.0) / resolution);\n    vec2 offsetSize = texelSize * outlineWidth * pixelRatio;\n\n    vec2 uvSamples[9];\n    vec4 normalSamples[9];\n\n	uvSamples[0] = uv + vec2( -offsetSize.x, -offsetSize.y) + (vogelDiskSample(0, 9, temporalAngle) * texelSize);\n	uvSamples[1] = uv + vec2(0.0, -offsetSize.y) + (vogelDiskSample(1, 9, temporalAngle) * texelSize);\n	uvSamples[2] = uv + vec2(  offsetSize.x, -offsetSize.y) + (vogelDiskSample(2, 9, temporalAngle) * texelSize);\n	uvSamples[3] = uv + vec2( -offsetSize.x, 0.0) + (vogelDiskSample(3, 9, temporalAngle) * texelSize);\n	uvSamples[4] = uv;\n	uvSamples[5] = uv + vec2(  offsetSize.x, 0.0) + (vogelDiskSample(5, 9, temporalAngle) * texelSize);\n	uvSamples[6] = uv + vec2( -offsetSize.x, offsetSize.y) + (vogelDiskSample(6, 9, temporalAngle) * texelSize);\n	uvSamples[7] = uv + vec2(0.0, offsetSize.y) + (vogelDiskSample(7, 9, temporalAngle) * texelSize);\n	uvSamples[8] = uv + vec2(  offsetSize.x, offsetSize.y) + (vogelDiskSample(8, 9, temporalAngle) * texelSize);\n\n\n    normalSamples[0] = texture2D(t, uvSamples[0]);\n    normalSamples[1] = texture2D(t, uvSamples[1]);\n    normalSamples[2] = texture2D(t, uvSamples[2]);\n    normalSamples[3] = texture2D(t, uvSamples[3]);\n    normalSamples[4] = texture2D(t, uvSamples[4]);\n    normalSamples[5] = texture2D(t, uvSamples[5]);\n    normalSamples[6] = texture2D(t, uvSamples[6]);\n    normalSamples[7] = texture2D(t, uvSamples[7]);\n    normalSamples[8] = texture2D(t, uvSamples[8]);\n\n    float depthBias = 0.0001;\n    \n    if (normalSamples[0].a != vID && normalSamples[0].a != 0.0) {\n        float depthAtSample = texture2D(d, uvSamples[0]).r + depthBias;\n        if (gl_FragCoord.z > depthAtSample) {\n           return 0.0;\n        }\n    }\n\n    if (normalSamples[1].a != vID && normalSamples[1].a != 0.0) {\n        float depthAtSample = texture2D(d, uvSamples[1]).r + depthBias;\n        if (gl_FragCoord.z > depthAtSample) {\n           return 0.0;\n        }\n    }\n\n    if (normalSamples[2].a != vID && normalSamples[2].a != 0.0) {\n        float depthAtSample = texture2D(d, uvSamples[2]).r + depthBias;\n        if (gl_FragCoord.z > depthAtSample) {\n           return 0.0;\n        }\n    }\n\n    if (normalSamples[3].a != vID && normalSamples[3].a != 0.0) {\n        float depthAtSample = texture2D(d, uvSamples[3]).r + depthBias;\n        if (gl_FragCoord.z > depthAtSample) {\n           return 0.0;\n        }\n    }\n\n\n    if (normalSamples[4].a != vID && normalSamples[4].a != 0.0) {\n        float depthAtSample = texture2D(d, uvSamples[4]).r + depthBias;\n        if (gl_FragCoord.z > depthAtSample) {\n           return 0.0;\n        }\n    }\n\n    if (normalSamples[5].a != vID && normalSamples[5].a != 0.0) {\n        float depthAtSample = texture2D(d, uvSamples[5]).r + depthBias;\n        if (gl_FragCoord.z > depthAtSample) {\n           return 0.0;\n        }\n    }\n\n    if (normalSamples[6].a != vID && normalSamples[6].a != 0.0) {\n        float depthAtSample = texture2D(d, uvSamples[6]).r + depthBias;\n        if (gl_FragCoord.z > depthAtSample) {\n           return 0.0;\n        }\n    }\n\n    if (normalSamples[7].a != vID && normalSamples[7].a != 0.0) {\n        float depthAtSample = texture2D(d, uvSamples[7]).r + depthBias;\n        if (gl_FragCoord.z > depthAtSample) {\n           return 0.0;\n        }\n    }\n\n    if (normalSamples[8].a != vID && normalSamples[8].a != 0.0) {\n        float depthAtSample = texture2D(d, uvSamples[8]).r + depthBias;\n        if (gl_FragCoord.z > depthAtSample) {\n           return 0.0;\n        }\n    }\n\n    vec3 sobel_edge_h = normalSamples[2].rgb + (2.0*normalSamples[5].rgb) + normalSamples[8].rgb - (normalSamples[0].rgb + (2.0*normalSamples[3].rgb) + normalSamples[6].rgb);\n  	vec3 sobel_edge_v = normalSamples[0].rgb + (2.0*normalSamples[1].rgb) + normalSamples[2].rgb - (normalSamples[6].rgb + (2.0*normalSamples[7].rgb) + normalSamples[8].rgb);\n\n    float edgeNormal = sqrt(dot(sobel_edge_h, sobel_edge_h) + dot(sobel_edge_v, sobel_edge_v));\n    return edgeNormal;\n}\n")]) };
}();
var Sa = class extends V {
	constructor(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _) {
		super("v3"), this.nodeType = "Pattern", this.style = e, this.projection = t, this.axis = n, this.blending = r, this.offset = i, this.colorA = a, this.colorB = o, this.frequency = s, this.size = c, this.variation = l, this.smoothness = u, this.zigzag = d, this.rotation = f, this.vertical = p, this.horizontal = m, this.sides = h, this.isMask = _, this.alpha = g, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		if (e.isShader("fragment")) {
			let n;
			switch (e.require("position"), e.require("uv"), e.requires.uv = [!0], e.require("normal"), e.requires.normal = !0, e.addFragmentVariable(this.calpha, "float"), this.style.value) {
				case 0:
				default:
					n = "circle";
					break;
				case 1:
					n = "ring";
					break;
				case 2:
					n = "polygon";
					break;
				case 3:
					n = "xcross";
					break;
				case 4:
					n = "diamond";
					break;
				case 5:
					n = "checkerboard";
					break;
				case 6:
					n = "line";
					break;
				case 7: n = "wave";
			}
			let r = `g${this.uuid.toString().replace(/-/g, "")}`, i = new H("float hashwithoutsine12(vec2 p)\n				{\n					vec3 p3 = fract(vec3(p.xyx) * .1031);\n					p3 += dot(p3, p3.yzx + 33.33);\n					return fract((p3.x + p3.y) * p3.z);\n				}"), a = new H("vec2 rotate_uv(in vec2 uv, float a, bool repeat) \n				{\n					const float mid = 0.5;\n					float radians = a * (PI / 180.0);\n					vec2 rotated = vec2(\n						cos(radians) * (uv.x - mid) + sin(radians) * (uv.y - mid) + mid,\n						cos(radians) * (uv.y - mid) - sin(radians) * (uv.x - mid) + mid\n					);\n					return repeat ? fract(rotated): rotated;\n				}"), o = "";
			if (this.projection.value === 4) o = `\n\t\t\t\tvec3 p = position;\n\t\t\t\tfloat factor = 0.0125;\n\t\t\t\tvec2 uv0 = fract(p.xy * factor);\n\t\t\t\tvec2 uv1 = fract(p.zy * factor);\n\t\t\t\tvec2 uv2 = fract(p.xz * factor);\n\t\t\t\t\n\t\t\t\tuv0 = rotate_uv(uv0 + offset, rotation, true);\n\t\t\t\tuv1 = rotate_uv(uv1 + offset, rotation, true);\n\t\t\t\tuv2 = rotate_uv(uv2 + offset, rotation, true);\n\t\n\t\t\t\tfloat d0 = ${this.style.value === 2 ? `${n}(uv0, frequency, size, variation, smoothness_remapped, zigzag, rotation, sides)` : `${n}(uv0, frequency, size, variation, smoothness_remapped, zigzag, rotation)`};\n\t\t\t\tfloat d1 = ${this.style.value === 2 ? `${n}(uv1, frequency, size, variation, smoothness_remapped, zigzag, rotation, sides)` : `${n}(uv1, frequency, size, variation, smoothness_remapped, zigzag, rotation)`};\n\t\t\t\tfloat d2 = ${this.style.value === 2 ? `${n}(uv2, frequency, size, variation, smoothness_remapped, zigzag, rotation, sides)` : `${n}(uv2, frequency, size, variation, smoothness_remapped, zigzag, rotation)`};\n\t\t\t\t\n\t\t\t\t\n\t\t\t\tfloat exponent = (1.0 - blending) * 125.0 + 3.0;\n\n\t\t\t\tvec3 n = vObjectNormal;\n\t\t\t\tvec3 weights = abs(normalize(n));\n\t\t\t\tweights = pow(weights, vec3(exponent));\n\t\t\t\tweights /= dot(weights, vec3(1.0));\n\t\t\t\td0 *= weights.z;\n\t\t\t\td1 *= weights.x;\n\t\t\t\td2 *= weights.y;\n\t\t\t\tfloat draw = d0 + d1 + d2;\n\t\n\t\t\t\tvec2 custom_uv = uv0 * weights.z + uv1 * weights.x + uv2 * weights.y;\n\t\t\t\t`;
			else {
				let e = this.style.value === 2 ? `${n}(custom_uv, frequency, size, variation, smoothness_remapped, zigzag, rotation, sides)` : `${n}(custom_uv, frequency, size, variation, smoothness_remapped, zigzag, rotation)`, t = "";
				this.axis.value === 0 ? t = "float radius = length(p);\n					float theta = atan(p.y, p.z);\n					float phi = acos(p.x / radius);" : this.axis.value === 1 ? t = "float radius = length(p);\n					float theta = atan(p.x, p.z);\n					float phi = acos(p.y / radius);" : (this.axis.value, t = "float radius = length(p);\n					float theta = atan(p.y, p.x);\n					float phi = acos(p.z / radius);");
				let r = "";
				switch (this.projection.value) {
					case 0:
						r = "custom_uv = vUv.st;";
						break;
					case 1:
					case 3:
					default: break;
					case 2: r = `\n\t\t\t\t\t\t\tvec3 p = position;\n\t\t\t\t\t\t\t${t}\n\t\t\t\t\t\t\tcustom_uv = vec2(theta, phi);\n\t\t\t\t\t\t\tcustom_uv /= PI;\n\t\t\t\t\t\t\t`;
				}
				o = `\n\t\t\t\tvec2 custom_uv;\n\t\t\t\t${r}\n\t\n\t\t\t\tcustom_uv += offset;\n\t\t\t\tcustom_uv = fract(custom_uv);\n\t\t\t\tcustom_uv = rotate_uv(custom_uv, rotation, true);\n\t\n\t\t\t\tfloat draw = ${e};\n\t\t\t\t`;
			}
			let s = new H(`vec3 ${r}_pattern(vec3 normal, float blending, int style, vec2 offset, vec4 colorA, vec4 colorB, vec2 frequency, float size, float variation, float smoothness, float zigzag, float rotation, vec2 vertical, vec2 horizontal, int sides, bool isMask, float mask, float alpha, out float calpha) {\n\t\t\t\t\tconst float TWO_PI = PI * 2.0;\n\t\t\t\t\tfloat smoothness_remapped = pow(smoothness, 5.0);\t\n\n\t\t\t\t\t${o}\n\n\t\t\t\t\t\n\t\t\t\t\tvec4 color = mix(colorA, colorB, draw);\n\t\t\t\t\tcolor.a = clamp(color.a, 0.0, 1.0);\n\n\t\t\t\t\t\n\t\t\t\t\tcolor.a *= \n\t\t\t\t\t\tstep(vertical.x, custom_uv.y) * \n\t\t\t\t\t\tstep(custom_uv.y, vertical.y);\n\t\t\t\t\tcolor.a *= \n\t\t\t\t\t\tstep(horizontal.x, abs(custom_uv.x)) * \n\t\t\t\t\t\tstep(abs(custom_uv.x), horizontal.y);\n\n\t\t\t\t\t\n\t\t\t\t\tfloat lalpha = alpha * clamp(color.a, 0.0, 1.0) * mask;\n\t\t\t\t\tcalpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));\n\t\t\t\t\taccumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n\t\t\t\t\treturn clamp(color, 0.0, 1.0).rgb;\n\t\t\t\t}`, [
				a,
				i,
				Sa.DrawFunctions.circle,
				Sa.DrawFunctions.ring,
				Sa.DrawFunctions.polygon,
				Sa.DrawFunctions.cross,
				Sa.DrawFunctions.diamond,
				Sa.DrawFunctions.checkerboard,
				Sa.DrawFunctions.line,
				Sa.DrawFunctions.wave
			]), c = e.include(s), l = [];
			return l.push("normal"), l.push(this.blending.build(e, "f")), l.push(this.style.build(e, "i")), l.push(this.offset.build(e, "v2")), l.push(this.colorA.build(e, "v4")), l.push(this.colorB.build(e, "v4")), l.push(this.frequency.build(e, "v2")), l.push(this.size.build(e, "f")), l.push(this.variation.build(e, "f")), l.push(this.smoothness.build(e, "f")), l.push(this.zigzag.build(e, "f")), l.push(this.rotation.build(e, "f")), l.push(this.vertical.build(e, "v2")), l.push(this.horizontal.build(e, "v2")), l.push(this.sides.build(e, "i")), l.push(this.isMask.build(e, "b")), l.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), l.push(this.alpha.build(e, "f")), l.push(this.calpha), e.format(c + "(" + l.join(",") + ")", this.getType(e), t);
		}
		return console.warn("PatterNode is not compatible with " + e.shader + " shader."), e.format("vec3(0.0)", this.getType(e), t);
	}
}, Ca = Sa;
Ca.DrawFunctions = function() {
	let e = new H("vec2 tile_and_center(in vec2 uv, in vec2 frequency, in float variation, in float zigzag, in float rotation) {\n                \n                uv *= frequency;\n\n                \n                vec2 i = floor(uv);\n\n                \n                float row_offset = mod(i.y, 2.0);\n                uv.x += row_offset * zigzag;\n                vec2 f = fract(uv);\n\n				\n				\n				\n				\n				\n				\n				\n\n                f = f * 2.0 - 1.0;\n\n				\n				i = floor(uv);\n				float rand = (hashwithoutsine12(i) * 5.0 + 1.0);\n				float jitter = mix(1.0, rand, variation);\n				f *= jitter;\n\n                return f;\n            }", [new H("float hashwithoutsine12(vec2 p) {\n				vec3 p3 = fract(vec3(p.xyx) * 0.1031);\n				p3 += dot(p3, p3.yzx + 33.33);\n				return fract((p3.x + p3.y) * p3.z);\n			}")]);
	return {
		tileAndCenter: e,
		circle: new H("float circle(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {\n                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);\n                return smoothstep(\n                    -smoothness, \n                     smoothness, \n                     length(f) - size\n                );\n            }", [e]),
		ring: new H("float ring(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {\n                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);\n\n				float d = length(f);\n                const float inner_width = 0.5;\n\n                float outer = smoothstep(-smoothness, smoothness, d - size);\n                float inner = smoothstep(-smoothness, smoothness, d - size * inner_width);\n				return outer + (1.0 - inner);   \n            }", [e]),
		polygon: new H("float sdf_ngon(in vec2 p, in float r, in int n) {\n                float an = (PI * 2.0) / float(n);\n                float he = r * tan(0.5 * an);\n                \n                \n                p = -p.yx; \n                float bn = an * floor((atan(p.y, p.x) + 0.5 * an) / an);\n                vec2  cs = vec2(cos(bn), sin(bn));\n                p = mat2(cs.x, -cs.y, cs.y, cs.x)*p;\n            \n                \n                return length(p - vec2(r, clamp(p.y, -he, he))) * sign(p.x - r);\n            }\n            \n            float polygon(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation, in int sides) {\n                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);\n                return smoothstep(-smoothness, smoothness, sdf_ngon(f, size, sides));\n            }", [e]),
		cross: new H("float sdf_cross(in vec2 p, in vec2 b, float r ) {\n                p = abs(p); \n				p = (p.y > p.x) ? p.yx : p.xy;\n                vec2  q = p - b;\n                float k = max(q.y, q.x);\n                vec2  w = (k > 0.0) ? q : vec2(b.y - p.x, -k);\n                return sign(k) * length(max(w, 0.0)) + r;\n            }\n            \n            \n            float xcross(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {\n                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);\n                return smoothstep(-smoothness, smoothness, sdf_cross(f, vec2(size, size * 0.25), smoothness));\n            }", [e]),
		diamond: new H("float ndot(vec2 a, vec2 b) { \n                return a.x*b.x - a.y*b.y; \n            }\n            \n            float sdf_diamond(in vec2 p, in vec2 b) {\n                p = abs(p);\n                float h = clamp(ndot(b - 2.0 * p, b) / dot(b, b), -1.0, 1.0);\n                float d = length(p - 0.5 * b * vec2(1.0 - h, 1.0 + h));\n                return d * sign(p.x * b.y + p.y * b.x - b.x * b.y);\n            }\n\n            float diamond(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {\n                vec2 f = tile_and_center(uv, frequency, variation, zigzag, rotation);\n	            return smoothstep(-smoothness, smoothness, sdf_diamond(f, vec2(size)));\n            }", [e]),
		checkerboard: new H("float checkerboard(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {\n                uv *= frequency;\n                vec2 i = floor(uv);\n\n                float offset = mod(i.y, 2.0);\n\n                uv.x += offset + zigzag * offset;\n                float x = floor(uv.x);\n                \n                return mod(x, 2.0);\n            }"),
		line: new H("float line(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {\n                vec2 f = tile_and_center(uv, frequency, 0.0, zigzag, rotation);\n				\n				\n				float row = floor(uv * frequency).y;\n				float rand = hashwithoutsine12(vec2(row));\n				float s = mix(size, size * rand, variation);\n\n				return smoothstep(\n					s - smoothness, \n					s + smoothness, \n					abs(f.y)\n				);\n            }", [e]),
		wave: new H("\n            float udf_cos(in vec2 p, in float a, in float b, in float c, in float d) {\n                \n                p = c * (p - vec2(d, a));\n                \n                const float TWO_PI = PI * 2.0;\n\n                \n                p.x = mod(p.x, TWO_PI); \n                if (p.x > PI) {\n                    p.x = TWO_PI - p.x;\n                }\n            \n                \n                float xa = 0.0;\n                float xb = TWO_PI;\n\n                \n                for (int i = 0; i < 24; i++) {\n                    float x = 0.5 * (xa + xb);\n                    float y = x - p.x + b * c * sin(x) * (p.y - b * c * cos(x));\n                    if (y < 0.0) xa = x; \n                    else xb = x;\n                }\n                float x = 0.5 * (xa + xb);\n                \n                \n                vec2 q = vec2(x, b * c * cos(x));\n                return length(p - q) / c;\n            }\n\n            float wave(in vec2 uv, in vec2 frequency, in float size, in float variation, in float smoothness, in float zigzag, in float rotation) {\n                float repeat = frequency.x;\n                uv *= repeat;\n                vec2 i = floor(uv);\n                float row_offset = mod(i.y, 2.0);\n                uv.x += row_offset * zigzag;\n                vec2 f = vec2(uv.x, fract(uv.y));\n\n                \n                const float amplitude = 0.125;\n                float wave_frequency = frequency.y * 0.1;\n                float distance_estimate = udf_cos(f, 0.50, amplitude, wave_frequency * (2.0 * PI), 0.0);\n\n				\n				float rand = hashwithoutsine12(vec2(i.y));\n				float s = mix(size, size * rand, variation);\n\n                return smoothstep(-smoothness, smoothness, distance_estimate - s * 0.5);\n            }")
	};
}();
var wa = class extends V {
	constructor(e, t, n, r, i, a, o, s, c = !0) {
		super("v3"), this.nodeType = "Rainbow", this.filmThickness = e, this.movement = t, this.wavelengths = n, this.noiseStrength = r, this.noiseScale = i, this.offset = a, this.isMask = s, this.alpha = o, this.noiseEnabled = c, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		if (e.require("vWorldViewDir"), e.require("worldNormal"), e.isShader("fragment")) {
			e.require("uv"), e.requires.uv = [!0], e.addFragmentVariable(this.calpha, "float");
			let n = e.include(this.noiseEnabled ? wa.Nodes.rainbow : wa.Nodes.rainbowNN), r = [];
			return r.push(this.filmThickness.build(e, "f")), r.push(this.movement.build(e, "f")), r.push(this.wavelengths.build(e, "v3")), r.push(this.noiseStrength.build(e, "f")), r.push(this.noiseScale.build(e, "f")), r.push(this.offset.build(e, "v3")), r.push(this.isMask.build(e, "b")), r.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), r.push(this.alpha.build(e, "f")), r.push(this.calpha), e.format(n + "(" + r.join(",") + ")", this.getType(e), t);
		}
		return console.warn("RainbowNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, Ta = wa;
Ta.Nodes = function() {
	return {
		rainbow: new H("vec3 rainbow(float filmThickness, float movement, vec3 wavelengths, float noiseStrength, float noiseScale, vec3 offset, bool isMask, float mask, float alpha, out float calpha) {\n				mediump vec3 res = clamp(attenuation(wavelengths, filmThickness, movement, noiseStrength, noiseScale, offset), 0.0, 2.0);\n\n				float rainbowContribution = clamp(res.r + res.g + res.b, 0.0, 1.0);\n\n				float lalpha = alpha * rainbowContribution * mask;\n				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));\n				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n				return res;\n			 }", [new H("vec3 attenuation(vec3 wavelengths, float filmThickness, float movement, float noiseStrength, float noiseScale, vec3 offset) {\n				float f = 0.0;\n\n				if (noiseStrength != 0.0) {\n					vec3 st = position / noiseScale;\n					float noise = simplexFast(1.6 * st + vec3(1.8, 1.5, 1.9) * simplexFast(st) + vec3(1.7, 9.2, 1.0));\n					f = noise * noiseStrength;\n				}\n\n				vec3 waves = wavelengths * vec3(1.0, 0.8, 0.6) + 1.0;\n				float angle = dot(normalize(vWorldViewDir + (offset * -0.001)), normalize(vWNormal));\n\n				mediump vec3 color = cos((((filmThickness + f) / waves) * angle) + movement);\n				return .5 + .5 * color;\n			 }", [da.simplexFast])]),
		rainbowNN: new H("vec3 rainbowNN(float filmThickness, float movement, vec3 wavelengths, float noiseStrength, float noiseScale, vec3 offset, bool isMask, float mask, float alpha, out float calpha) {\n				mediump vec3 res = clamp(attenuationNN(wavelengths, filmThickness, movement, noiseStrength, noiseScale, offset), 0.0, 2.0);\n\n				float rainbowContribution = clamp(res.r + res.g + res.b, 0.0, 1.0);\n\n				float lalpha = alpha * rainbowContribution * mask;\n				calpha = mix(lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0), lalpha, float(isMask));\n				accumAlpha += (1.0 - accumAlpha) * lalpha * (1.0 - float(isMask));\n\n				return res;\n			 }", [new H("vec3 attenuationNN(vec3 wavelengths, float filmThickness, float movement, float noiseStrength, float noiseScale, vec3 offset) {\n				vec3 waves = wavelengths * vec3(1.0, 0.8, 0.6) + 1.0;\n				float angle = dot(normalize(vWorldViewDir + (offset * -0.001)), normalize(vWNormal));\n\n				mediump vec3 color = cos(((filmThickness / waves) * angle) + movement);\n				return .5 + .5 * color;\n			 }")])
	};
}();
var Ea = class extends V {
	constructor(e, t, n, r, i, a, o, s, c, l) {
		super("v3"), this.nodeType = "Toon", this.positioning = e, this.colors = t, this.steps = n, this.source = r, this.isWorldSpace = i, this.noiseStrength = a, this.noiseScale = o, this.shadowColor = s, this.offset = c, this.alpha = l, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		if (e.require("worldNormal"), e.require("worldPosition"), e.isShader("fragment")) {
			e.define("COLORS_MAX", 10), e.addFragmentVariable(this.calpha, "float");
			let n = e.include(Ea.Nodes.toon), r = [];
			return r.push(this.positioning.build(e, "i")), r.push(this.colors.build(e, "v4[]")), r.push(this.steps.build(e, "f[]")), r.push(this.source.build(e, "v3")), r.push(this.isWorldSpace.build(e, "b")), r.push(this.noiseStrength.build(e, "f")), r.push(this.noiseScale.build(e, "f")), r.push(this.shadowColor.build(e, "v4")), r.push(this.offset.build(e, "v3")), r.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), r.push(this.alpha.build(e, "f")), r.push(this.calpha), e.format(n + "(" + r.join(",") + ")", this.getType(e), t);
		}
		return console.warn("ToonNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, Da = Ea;
Da.Nodes = function() {
	let e = new H("float rand(float n) {\n				return fract(sin(n) * 43758.5453123);\n			}"), t = new H("float valueNoise(vec3 x) {\n				const vec3 step = vec3(110, 241, 171);\n			\n				vec3 i = floor(x);\n				vec3 f = fract(x);\n			 \n				\n				\n				float n = dot(i, step);\n			\n				vec3 u = f * f * (3.0 - 2.0 * f);\n				return mix(mix(mix( hash1(n + dot(step, vec3(0, 0, 0))), hash1(n + dot(step, vec3(1, 0, 0))), u.x),\n							   mix( hash1(n + dot(step, vec3(0, 1, 0))), hash1(n + dot(step, vec3(1, 1, 0))), u.x), u.y),\n						   mix(mix( hash1(n + dot(step, vec3(0, 0, 1))), hash1(n + dot(step, vec3(1, 0, 1))), u.x),\n							   mix( hash1(n + dot(step, vec3(0, 1, 1))), hash1(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);\n			}", [new H("float hash1(float p) { \n				p = fract(p * 0.011); \n				p *= p + 7.5; \n				p *= p + p; \n				return fract(p); \n			}")]), n = new H("vec3 voronoiNoise(in vec3 x)\n			{\n				vec3 p = floor(x);\n				vec3 f = fract(x);\n\n				float id = 0.0;\n				vec2 res = vec2(100.0);\n\n				for(int k=-1; k<=1; k++)\n				for(int j=-1; j<=1; j++)\n				for(int i=-1; i<=1; i++)\n				{\n					vec3 b = vec3(float(i), float(j), float(k));\n\n					\n					vec3 r = vec3(b) - f + hash3(p + b);\n					float d = dot(r, r);\n\n					if (d < res.x)\n					{\n						id = dot(p + b, vec3(1.0, 57.0, 113.0));\n						res = vec2(d, res.x);			\n					}\n					else if (d < res.y)\n					{\n						res.y = d;\n					}\n				}\n\n				return vec3(sqrt(res), abs(id));\n			}\n			", [new H("vec3 hash3(vec3 x) {\n				x = vec3(dot(x,vec3(127.1, 311.7, 74.7)),\n						 dot(x,vec3(269.5, 183.3, 246.1)),\n						 dot(x,vec3(113.5, 271.9, 124.6)));\n			\n				return fract(sin(x)*43758.5453123);\n			}")]);
	return { toon: new H("vec3 toon(int positioning, vec4 colors[COLORS_MAX], float steps[COLORS_MAX], vec3 source, bool isWorldSpace, float noiseStrength, float noiseScale, vec4 shadowColor, vec3 offset, float mask, float alpha, out float calpha) {\n				float t = 0.0;\n				float shadow = 1.0;\n\n				if (positioning == 0) {\n\n					\n					#if (defined(PHONG) || defined(LAMBERT) || defined(STANDARD))\n\n						\n						const vec3 weights = vec3(0.2125, 0.7154, 0.0721);\n						vec3 lpos;\n						vec3 l;\n						float dproduct;\n\n						#if (NUM_POINT_LIGHTS > 0)\n\n							#if defined(USE_SHADOWMAP) && (NUM_POINT_LIGHT_SHADOWS > 0)\n								PointLightShadow pointLightShadow;\n							#endif \n\n							#pragma unroll_loop_start\n							for (int i = 0; i < NUM_POINT_LIGHTS; i++) {\n								\n								lpos = (inverse(viewMatrix) * vec4(pointLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;\n								l = normalize(lpos - worldPosition);\n								\n								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;\n								\n								\n								\n\n								t = max(t, dproduct);\n\n								\n								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS)\n									pointLightShadow = pointLightShadows[UNROLLED_LOOP_INDEX];\n									shadow *= getPointShadow( \n											pointShadowMap[UNROLLED_LOOP_INDEX], \n											pointLightShadow.shadowMapSize,\n											pointLightShadow.shadowIntensity,\n											pointLightShadow.shadowBias, \n											pointLightShadow.shadowRadius,\n											vPointShadowCoord[UNROLLED_LOOP_INDEX], \n											pointLightShadow.shadowCameraNear, \n											pointLightShadow.shadowCameraFar);\n								#endif\n							}\n							#pragma unroll_loop_end\n\n						#endif\n\n						#if NUM_DIR_LIGHTS > 0 \n							\n							#if defined(USE_SHADOWMAP) && (NUM_DIR_LIGHT_SHADOWS > 0)\n								DirectionalLightShadow directionalLightShadow;\n							#endif \n\n							#pragma unroll_loop_start\n							for (int i = 0; i < NUM_DIR_LIGHTS; i++) {\n								\n								l = (inverse(viewMatrix) * vec4(directionalLights[UNROLLED_LOOP_INDEX].direction, 0.0)).xyz;\n		\n								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;\n								t = max(t, dproduct);\n\n								\n								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS)\n									directionalLightShadow = directionalLightShadows[UNROLLED_LOOP_INDEX];\n									shadow *= getShadow( \n										UNROLLED_LOOP_INDEX,\n										directionalShadowMap[UNROLLED_LOOP_INDEX], \n										directionalLightShadow.shadowMapSize,\n										directionalLightShadow.shadowIntensity,\n										directionalLightShadow.shadowBias, \n										directionalLightShadow.shadowRadius, \n										vDirectionalShadowCoord[UNROLLED_LOOP_INDEX]);\n								#endif\n							}\n							#pragma unroll_loop_end\n\n						#endif\n\n						#if NUM_SPOT_LIGHTS > 0 \n							\n							#if defined(USE_SHADOWMAP) && (NUM_SPOT_LIGHT_SHADOWS > 0)\n								SpotLightShadow spotLightShadow;\n							#endif \n\n							#pragma unroll_loop_start\n							for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {\n								lpos = (inverse(viewMatrix) * vec4(spotLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;\n								l = normalize(lpos - worldPosition);\n								\n								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;\n								t = max(t, dproduct);\n\n								\n								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS)\n									spotLightShadow = spotLightShadows[UNROLLED_LOOP_INDEX];\n									shadow *= getShadow(\n										UNROLLED_LOOP_INDEX,\n										spotShadowMap[UNROLLED_LOOP_INDEX], \n										spotLightShadow.shadowMapSize,\n										spotLightShadow.shadowIntensity,\n										spotLightShadow.shadowBias, \n										spotLightShadow.shadowRadius, \n										vSpotLightCoord[UNROLLED_LOOP_INDEX]);\n								#endif\n							}\n							#pragma unroll_loop_end\n\n						#endif\n\n						t = clamp(t, 0.0, 1.0);\n				\n					#endif\n\n				} else if (positioning == 1) {\n					\n					vec3 origin = mix(position, worldPosition, float(isWorldSpace));\n					vec3 direction = normalize(source - origin);\n					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	\n\n				} else {\n\n					vec3 origin = worldPosition;\n					vec3 source = cameraPosition - offset;\n					vec3 direction = normalize(source - origin);\n					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	\n					\n				}\n\n				if (noiseStrength > 0.0) {\n					\n					vec3 st = position / noiseScale;\n					\n					\n					float noise = 1.0 - voronoiNoise(st).x;\n\n					\n					\n\n					\n					\n					\n					\n					\n					\n					\n					\n\n					t += noise * noiseStrength;\n				}\n\n				t = clamp(t, 0.0, 1.0);\n\n				\n				float p;\n				vec4 color = colors[0];\n				for (int i = 1; i < COLORS_MAX; i++) {\n					p = clamp((t - steps[i-1]) / (steps[i] - steps[i-1]), 0.0, 1.0);\n					color = mix(color, colors[i], smoothstep(0.0, 1.0, p));\n				}\n\n				\n				if (positioning == 0) {\n\n					vec3 blendedShadow = mix(color.rgb, shadowColor.rgb, shadowColor.a);\n					color.rgb = mix(blendedShadow, color.rgb, shadow);\n				\n				}\n\n				\n				float lalpha = alpha * color.a * mask;\n				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);\n				accumAlpha += (1.0 - accumAlpha) * lalpha;\n\n				return color.xyz;\n\n            }", [
		da.simplexFast,
		e,
		t,
		n
	]) };
}();
var Oa = { textureBicubic: new H("float w0( float a ) {\n            return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n        }\n    \n        float w1( float a ) {\n            return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n        }\n    \n        float w2( float a ){\n            return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n        }\n    \n        float w3( float a ) {\n            return ( 1.0 / 6.0 ) * ( a * a * a );\n        }\n    \n        \n        float g0( float a ) {\n            return w0( a ) + w1( a );\n        }\n    \n        float g1( float a ) {\n            return w2( a ) + w3( a );\n        }\n    \n        \n        float h0( float a ) {\n            return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n        }\n    \n        float h1( float a ) {\n            return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n        }\n    \n        vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n            uv = uv * texelSize.zw + 0.5;\n    \n            vec2 iuv = floor( uv );\n            vec2 fuv = fract( uv );\n    \n            float g0x = g0( fuv.x );\n            float g1x = g1( fuv.x );\n            float h0x = h0( fuv.x );\n            float h1x = h1( fuv.x );\n            float h0y = h0( fuv.y );\n            float h1y = h1( fuv.y );\n    \n            vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n            vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n            vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n            vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n    \n            return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) + \n                   g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n        }\n\n        vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n            vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n            vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n            vec2 fLodSizeInv = 1.0 / fLodSize;\n            vec2 cLodSizeInv = 1.0 / cLodSize;\n            vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n            vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n            return mix( fSample, cSample, fract( lod ) );\n        }") }, ka = class extends V {
	constructor(e, t, n, r, i, a, o, s) {
		super("v3"), this.nodeType = "Transmission", this.thickness = e, this.ior = t, this.roughness = n, this.transmissionSamplerSize = r, this.transmissionSamplerMap = i, this.transmissionDepthMap = a, this.aspectRatio = o, this.alpha = s, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		if (e.extensions.shaderTextureLOD = !0, e.extensions.derivatives = !0, e.isShader("fragment")) {
			e.define("NUM_SAMPLES", 6), e.define("BLUR_SLOD", 2 ** Q.transmissionLod.value), e.require("worldPosition"), e.requires.worldNormal = !0, e.requires.modelMatrix = !0, e.requires.projectionMatrix = !0, e.addFragmentVariable(this.calpha, "float");
			let n = e.include(ka.Nodes.transmission), r = [];
			return r.push(this.thickness.build(e, "f")), r.push(this.ior.build(e, "f")), r.push(this.roughness.build(e, "f")), r.push(this.transmissionSamplerSize.build(e, "v2")), r.push(this.transmissionSamplerMap.getTexture(e, "t")), r.push(this.transmissionDepthMap.getTexture(e, "t")), r.push(this.aspectRatio.build(e, "v2")), r.push("normal"), r.push(this.mask ? `luminance(${this.mask.flow(e, "v3").result})` : "1.0"), r.push(this.alpha.build(e, "f")), r.push(this.calpha), e.format(n + "(" + r.join(",") + ")", this.getType(e), t);
		}
		return console.warn("TransmissionNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, Aa = ka;
Aa.Nodes = function() {
	let e = new H("vec3 blur(sampler2D sp, vec2 U, vec2 scale, float lod, sampler2D dm, vec2 unrefractedU, vec2 aspectRatio) {\n                \n                \n\n				\n				if (lod == 0.0) {\n					#ifdef TEXTURE_LOD_EXT\n					return texture2DLodEXT( sp, U, 0.0).rgb;\n					#else\n					return textureLod( sp, U, 0.0).rgb;\n					#endif\n				}\n				\n				vec2 texelSize = vec2(1.0) / resolution;\n                vec2 halton = haltonSequence[frameIndex];\n                float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy + halton);\n                float temporalAngle  = temporalOffset * PI2;\n				vec3 res = vec3(0.0);\n                vec2 uv = vec2(0.0);\n                vec2 offset = vec2(0.0);\n                vec2 vogelSample = vec2(0.0);\n                for (int i = 0; i < NUM_SAMPLES; i++) {\n                    vogelSample =  vogelDiskSample(i, NUM_SAMPLES, temporalAngle) * texelSize;\n                    offset = vogelSample * scale * (lod * 10.0); \n                    uv = U + offset;\n                    float opaqueDepth = unpackRGBAToDepth(textureLod(dm, uv, lod));\n                    if (opaqueDepth != 0.0 && opaqueDepth < gl_FragCoord.z) {\n                        uv = unrefractedU;\n                        lod = lod > 4.0 ? lod : lod / 2.0;\n                    }\n                    res += textureLod(sp, uv, lod).rgb;\n                }\n                return res / float(NUM_SAMPLES);\n            }"), t = new H("vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {\n		        \n		        vec3 refractionVector = refract( -v,  n, 1.0 / ior );\n		        \n				\n		        vec3 modelScale;\n		        modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		        modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		        modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\n		        \n		        return normalize( refractionVector ) * thickness * modelScale;\n	        }"), n = new H("float applyIorToRoughness( float roughness, float ior ) {\n				// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and\n				// an IOR of 1.5 results in the default amount of microfacet refraction.\n				return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n			}");
	return { transmission: new H("vec3 transmission(float thickness, float ior, float roughness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio, vec3 normal, float mask, float alpha, out float calpha) {\n                vec3 v = vec3(0.);\n                if (isOrthographic) {\n                    v = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n                } else {\n                    v = normalize(vWPosition - cameraPosition);\n                }\n                vec3 transmission = getIBLVolumeRefraction(vWNormal, -v, roughness,  vWPosition, modelMatrix, viewMatrix, projectionMatrix, ior, thickness, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, aspectRatio );\n                \n				float lalpha = alpha * mask;\n				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );\n				accumAlpha += ( 1.0 - accumAlpha ) * alpha;\n\n				return transmission;\n            }", [new H("vec3 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n\n				\n				vec4 ndcPos = projMatrix * viewMatrix *  vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n\n				vec4 ndcPosUnrefracted = projMatrix * viewMatrix * vec4(position, 1.0 );\n				vec2 unrefractedCoords = ndcPosUnrefracted.xy / ndcPosUnrefracted.w;\n				unrefractedCoords += 1.0;\n				unrefractedCoords /= 2.0;\n\n				\n				return getTransmissionSample( refractionCoords, roughness, ior, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, unrefractedCoords, aspectRatio );\n    		}", [new H("vec3 getTransmissionSample( vec2 fragCoord, float roughness, float ior, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 unrefractedCoords, vec2 aspectRatio) {\n				\n				\n				#ifdef IS_THREEJS_EXPORT\n					float lod = log2(transmissionSamplerSize.x) * applyIorToRoughness(roughness / 5.0, ior);\n					return textureBicubic(transmissionSamplerMap, fragCoord.xy, lod).rgb;\n				#else\n					float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n					float lod = applyIorToRoughness(roughness, ior);\n					return blur(transmissionSamplerMap, fragCoord, vec2(lod), min(framebufferLod / 5.5, 8.5), transmissionDepthMap, unrefractedCoords, aspectRatio);\n				#endif\n			}", [
		Oa.textureBicubic,
		n,
		e
	]), t])]) };
}();
var ja = class extends V {
	constructor(e) {
		super("v3"), this.nodeType = "VertexColor", this.alpha = e, this.calpha = `g${this.uuid.toString().replace(/-/g, "")}_calpha`;
	}
	generate(e, t) {
		if (e.isShader("fragment")) {
			e.requires.color[0] = !0;
			let n = e.include(ja.Nodes.vertexColorLayer);
			e.addFragmentVariable(this.calpha, "float");
			let r = [];
			return r.push("vColor"), r.push(this.mask ? `luminance(${this.mask.build(e, "v3")})` : "1.0"), r.push(this.alpha.build(e, "f")), r.push(this.calpha), e.format(n + "(" + r.join(",") + ")", this.getType(e), t);
		}
		return console.warn("VertexColorNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, Ma = ja;
Ma.Nodes = { vertexColorLayer: new H("vec3 vertexColorLayer(vec4 vcolor, float mask, float alpha, out float calpha) {\n				float lalpha = alpha * mask * vcolor.a;\n				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);\n				accumAlpha += (1.0 - accumAlpha) * lalpha;\n\n				return vcolor.rgb;\n			}") };
var Na, Pa = ((Na = Pa || {}).NOISE = "noise", Na.MAP = "map", Na), Fa = class extends V {
	constructor(e, t, n, r, i, a, o, s, c, l, u) {
		super("v3"), this.displacementTypeIndex = new Y(0), this.nodeType = "VertexDisplacement", this.intensity = e, this.movementOrTexture = t, Object.values(Pa)[this.displacementTypeIndex.value] === "map" && (this.mat = new Ji(this.movementOrTexture.value.matrix)), this.cropOrOffset = n, this.scale = l, this.noiseFunctionIndex = u, this.voronoiStyle = r, this.smoothness = i, this.seed = a, this.highCut = o, this.lowCut = s, this.quality = c;
	}
	generate(e, t) {
		if (e.isShader("vertex")) {
			e.define("USE_LAYER_DISPLACE");
			let n, r = [];
			switch (r.push("displaced_position"), r.push("displaced_normal"), Object.values(Pa)[this.displacementTypeIndex.value]) {
				case "map":
					n = e.include(Fa.Nodes.map), r.push(this.movementOrTexture.getTexture(e, "t")), r.push("uv"), r.push(this.cropOrOffset.build(e, "f")), this.mat && r.push(this.mat.build(e, "mat3"));
					break;
				case "noise": {
					let t = [
						"simplexPrecise",
						"simplexFractal",
						"simplexAshima",
						"fbm",
						"perlin",
						"voronoi"
					][this.noiseFunctionIndex.value], i = new H("vec3 orthogonal(vec3 v) {\n							return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));\n						}"), a = new H("vec3 vertexDisplacementNoise(vec3 position, vec3 normal, float scale, vec3 offset, float movement, int voronoiStyle, float smoothness, float seed, float highCut, float lowCut, int quality, float intensity, out vec3 displaced_normal) {\n							vec3 displaced_position = distorted(position, normal, scale, intensity, offset, neighbor_offset, movement, voronoiStyle, smoothness, seed, highCut, lowCut, quality);\n							vec3 tangent1 = orthogonal(normal);\n							vec3 tangent2 = normalize(cross(normal, tangent1));\n\n                            \n                            \n                            \n                            \n                            \n							vec3 nearby1 = position + tangent1;\n							vec3 nearby2 = position + tangent2;\n							vec3 distorted1 = distorted(nearby1, normal, scale, intensity, offset, neighbor_offset, movement, voronoiStyle, smoothness, seed, highCut, lowCut, quality);\n							vec3 distorted2 = distorted(nearby2, normal, scale, intensity, offset, neighbor_offset, movement, voronoiStyle, smoothness, seed, highCut, lowCut, quality);\n							displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));\n							return displaced_position;\n						}", [new H(`vec3 distorted(vec3 p, vec3 n, float scale, float intensity, vec3 offset, float neighbour_offset, float movement, int voronoiStyle, float smoothness, float seed, float highCut, float lowCut, int quality) {\n\t\t\t\t\t\t\t${t == "voronoi" ? `\n\t\t\t\t\tfloat v = ${t}((p + offset) * scale * 0.001 + neighbour_offset + (movement * 0.1), voronoiStyle, smoothness, seed, quality);\n\t\t\t\t\tv = remap(v, lowCut, highCut, 0.0, 1.0);\n\t\t\t\t\tv = smax(v, 0.0, smoothness * 0.25);\n\t\t\t\t\tv = smin(v, 1.0, smoothness * 0.25);\n\n\t\t\t\t\treturn p + n * v * intensity;\n\t\t\t\t\t` : `\n\t\t\t\t\treturn p + n * ${t}((p + offset) * scale * 0.001 + neighbour_offset + (movement * 0.1)) * intensity;\n\t\t\t\t\t`}\n\t\t\t\t\t\t}`, [
						da.simplexPrecise,
						da.simplexFractal,
						da.simplexAshima,
						da.fbm,
						da.perlin,
						da.voronoi
					]), i]);
					n = e.include(a), r.push(this.scale.build(e, "f")), r.push(this.cropOrOffset.build(e, "v3")), r.push(this.movementOrTexture.build(e, "f")), r.push(this.voronoiStyle.build(e, "i")), r.push(this.smoothness.build(e, "f")), r.push(this.seed.build(e, "f")), r.push(this.highCut.build(e, "f")), r.push(this.lowCut.build(e, "f")), r.push(this.quality.build(e, "i"));
					break;
				}
			}
			return r.push(this.intensity.build(e, "f")), r.push("displaced_normal"), e.format(n + "(" + r.join(",") + ")", this.getType(e), t);
		}
		return console.warn("VertexDisplacementNode is not compatible with " + e.shader + " shader."), e.format("vec3( 0.0 )", this.getType(e), t);
	}
}, Ia = Fa;
Ia.Nodes = function() {
	return { map: new H("vec3 vertexDisplacementMap(vec3 position, vec3 normal, sampler2D tex, vec2 uv, float crop, mat3 mat, float intensity, out vec3 displaced_normal) {\n				vec3 displaced_position = position + normal * displacementMapTexture(tex, crop, uv, mat, vec2(0.0)) * intensity;\n				vec3 tangent1 = normalize(orthogonal(normal));\n				vec3 tangent2 = normalize(cross(normal, tangent1));\n				vec3 nearby1 = position + tangent1 * 0.1;\n				vec3 nearby2 = position + tangent2 * 0.1;\n				vec3 distorted1 = nearby1 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;\n				vec3 distorted2 = nearby2 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;\n				displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));\n				return displaced_position;\n			}", [new H("vec3 orthogonal(vec3 v) {\n				return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));\n			}"), new H("float displacementMapTexture(sampler2D tex, float crop, vec2 uv, mat3 mat, vec2 offset) {\n				vec2 uvs = (mat * vec3(uv * 2.0 - 1.0, 1.0) / 2.0 + 0.5).xy + offset;\n				vec4 tmp = texture2D(tex, uvs);\n				vec3 col = tmp.rgb;\n				if (crop > 0.5) {\n					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {\n						return 0.0;\n					}\n				}\n				return col.r;\n			}")]) };
}();
var Q = {
	normalRenderTarget: new Xt(),
	normalRenderTargetDepth: new Xt(),
	normalViewRenderTarget: new Xt(),
	transmissionRenderTarget: new Xt(),
	aspectRatio: new Lt(),
	transmissionSize: new Lt(2048, 2048),
	transmissionRenderTargetDepth: new Xt(),
	aoRenderTarget: new Xt(),
	aoEnabled: new Ui(),
	pixelRatioNode: new G(1),
	resolution: new Lt(),
	penumbraSize: new Wi(5, .5),
	frameIndex: new Y(0),
	transmissionLod: new Y(2),
	taaEnabled: new Ui(!0)
};
for (let e of Object.values(Q)) e.isRenderGlobal = !0;
var La = {
	spe_fogMode: new C(0),
	spe_fogHeightParams: new C(new l(.005, .01, 0))
}, Ra = "\n#include <fog_pars_fragment>\n#ifdef USE_FOG\n	uniform float spe_fogMode;\n	uniform vec3 spe_fogHeightParams;\n\n	// Analytic optical depth of an exponential height-fog layer along the\n	// camera->fragment ray (see FogChunk.ts). fogWorldDelta = fragment -\n	// camera in WORLD space, fogDist = its length. With x = falloff *\n	// fogWorldDelta.y the integral collapses to camDensity * fogDist * F(x),\n	// F(x) = (1 - e^-x)/x. F is evaluated on a sign-preserving |x| >= 1e-4:\n	// that keeps F's x->0 limit of 1 (horizontal rays / falloff 0 degrade to\n	// classic exponential fog) without a branch — deliberate, because the\n	// WGSL twins' select() evaluates BOTH sides, so a guarded division, not\n	// a branch, is what actually prevents inf/NaN there, and all four\n	// implementations stay line-for-line identical.\n	float speHeightFogFactor(const in vec3 fogWorldDelta, const in float fogDist) {\n		float density = spe_fogHeightParams.x;\n		float falloff = spe_fogHeightParams.y;\n		float relY = cameraPosition.y - spe_fogHeightParams.z;\n		// Density at the camera's own height, overflow-clamped: far below\n		// the fog base the exponent explodes; the fog factor saturates to 1\n		// long before, so the clamp is invisible.\n		float camDensity = density * exp(clamp(-falloff * relY, -60.0, 60.0));\n		float x = clamp(falloff * fogWorldDelta.y, -60.0, 60.0);\n		float xSafe = (x >= 0.0 ? 1.0 : -1.0) * max(abs(x), 1e-4);\n		float opticalDepth =\n			camDensity * fogDist * (1.0 - exp(-xSafe)) / xSafe;\n		return 1.0 - exp(-max(opticalDepth, 0.0));\n	}\n#endif\n", za = "\n#ifdef USE_FOG\n	float speFogLinear = smoothstep(fogNear, fogFar, vFogDepth);\n	vec3 speFogViewPos = -vViewPosition;\n	float speFogDist = length(speFogViewPos);\n	vec3 speFogWorldDelta = speFogViewPos * mat3(viewMatrix);\n	float speFogHeight = speHeightFogFactor(speFogWorldDelta, speFogDist);\n	float speFogWLinear = 1.0 - step(0.5, spe_fogMode) + step(1.5, spe_fogMode);\n	float speFogWHeight = step(0.5, spe_fogMode);\n	float speFogFactor = 1.0 -\n		(1.0 - speFogLinear * speFogWLinear) *\n			(1.0 - speFogHeight * speFogWHeight);\n	gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, speFogFactor);\n#endif\n", Ba = class extends B {
	constructor() {
		super("basic"), this.nodeType = "Basic", this.color = new J(qe), this.shadingAlpha = new G(1), this.shadingBlend = new Y(0), this.previousModelViewMatrix = new Yi(), this.previouseProjectionMatrix = new Yi();
	}
	get category() {
		return "phong";
	}
	generate(e) {
		let t;
		if (e.isShader("vertex")) {
			let n = this.position ? this.position.analyzeAndFlow(e, "v3", { cache: "position" }) : void 0;
			e.mergeUniform({ frameIndex: Q.frameIndex }), e.mergeUniform({ resolution: Q.resolution }), e.mergeUniform({ previousModelViewMatrix: this.previousModelViewMatrix }), e.mergeUniform({ previousProjectionMatrix: this.previouseProjectionMatrix }), e.mergeUniform(w.merge([Z.fog])), e.mergeUniform(La), e.addParsCode([
				"varying vec3 vViewPosition;",
				"varying vec3 vWPosition;",
				"#include <fog_pars_vertex>",
				"#include <skinning_pars_vertex>",
				"#include <normal_pars_vertex>",
				"#include <morphtarget_pars_vertex>"
			].join("\n"));
			let r = [
				"#include <beginnormal_vertex>",
				"#include <morphnormal_vertex>",
				"\n				#include <skinbase_vertex>\n				#include <skinnormal_vertex>\n				#if !defined( USE_LAYER_DISPLACE )\n					#include <defaultnormal_vertex>\n				#endif\n\n				vec3 displaced_position = position;\n				vec3 displaced_normal = normal;\n\n				#if defined( USE_LAYER_DISPLACE )\n					vec3 transformed;\n					vec3 transformedNormal;\n				#endif\n				",
				"#include <normal_vertex>",
				"\n				#if !defined( USE_LAYER_DISPLACE )\n					#include <begin_vertex>\n				#endif /* !USE_LAYER_DISPLACE */\n				"
			];
			n && r.push(n.code, n.result ? "displaced_position = " + n.result + ";" : ""), r.push("transformed = displaced_position;", "#include <morphtarget_vertex>", "#include <skinning_vertex>", "transformedNormal = normalMatrix * displaced_normal;", "#ifndef FLAT_SHADED", "	vNormal = transformedNormal;", "#endif"), r.push("#include <project_vertex>", "#include <fog_vertex>", "#include <clipping_planes_vertex>", "	vViewPosition = - mvPosition.xyz;", "#include <worldpos_vertex>"), r.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"), t = r.join("\n");
		} else {
			this.color === void 0 && (this.color = new J(5526619)), this.color.analyze(e, { slot: "color" }), this.alpha && this.alpha.analyze(e), this.afterColor && this.afterColor.analyze(e, { slot: "afterColor" });
			let n = this.color.flow(e, "c", { slot: "color" }), r = this.alpha ? this.alpha.flow(e, "f") : void 0, i = this.alphaOverride ? this.alphaOverride.flow(e, "f") : void 0, a = this.afterColor ? this.afterColor.flow(e, "c", { slot: "afterColor" }) : void 0;
			e.requires.transparent = r !== void 0, e.addParsCode([
				"varying vec3 vWPosition;",
				Ra,
				"#include <dithering_pars_fragment>",
				"varying vec3 vViewPosition;",
				"#include <normal_pars_fragment>"
			].join("\n"));
			let o = ["#include <normal_fragment_begin>", n.code];
			r && o.push(r.code, "#ifdef ALPHATEST", " if ( " + r.result + " <= ALPHATEST ) discard;", "#endif"), a ? o.push(a.code, `vec3 outgoingLight = ${n.result};`, `vec3 finalColor = spe_blend(outgoingLight, ${a.result}, 1.0, SPE_BLENDING_NORMAL);`) : o.push(`vec3 finalColor = ${n.result};`);
			let s = "1.0";
			this.mask && (this.mask.analyze(e), s = `luminance(${this.mask.flow(e, "v3").result})`), r ? o.push(`gl_FragColor = vec4( finalColor, accumAlpha * ${r.result} * ${s} );`) : o.push("gl_FragColor = vec4(" + n.result + ", 1.0 );"), i && o.push(`gl_FragColor.a *= ${i.result};`), o.push(za, "#include <dithering_fragment>"), t = o.join("\n");
		}
		return t;
	}
}, Va = class extends B {
	constructor() {
		super("lambert"), this.nodeType = "Lambert", this.color = new J(qe), this.emissive = new J(0), this.emissiveIntensity = new G(1), this.previousModelViewMatrix = new Yi(), this.previouseProjectionMatrix = new Yi(), this.shadingAlpha = new G(1), this.shadingBlend = new Y(0), this.occlusion = new Ui(!0);
	}
	get category() {
		return "lambert";
	}
	build(e) {
		let t;
		if (e.define("LAMBERT"), e.requires.lights = !0, e.extensions.derivatives = !0, e.isShader("vertex")) {
			let n = this.position ? this.position.analyzeAndFlow(e, "v3", { cache: "position" }) : void 0;
			e.mergeUniform({ frameIndex: Q.frameIndex }), e.mergeUniform({ resolution: Q.resolution }), e.mergeUniform({ previousModelViewMatrix: this.previousModelViewMatrix }), e.mergeUniform({ previousProjectionMatrix: this.previouseProjectionMatrix }), e.mergeUniform(w.merge([Z.fog, Z.lights])), e.mergeUniform(La), e.addParsCode([
				"varying vec3 vViewPosition;",
				"varying vec3 vWPosition;",
				"varying vec3 vLightFront;",
				"varying vec3 vIndirectFront;",
				"#ifndef DOUBLE_SIDED",
				"   #define DOUBLE_SIDED",
				"#endif",
				"#ifdef DOUBLE_SIDED",
				"	varying vec3 vLightBack;",
				"	varying vec3 vIndirectBack;",
				"#endif",
				"#include <bsdfs>",
				"#include <lights_pars_begin>",
				"#include <color_pars_vertex>",
				"#include <fog_pars_vertex>",
				"#include <skinning_pars_vertex>",
				"#include <normal_pars_vertex>",
				"#include <morphtarget_pars_vertex>",
				"#include <shadowmap_pars_vertex>",
				"#include <clipping_planes_pars_vertex>"
			].join("\n"));
			let r = [
				"#include <beginnormal_vertex>",
				"#include <morphnormal_vertex>",
				"\n				#include <skinbase_vertex>\n				#include <skinnormal_vertex>\n				#ifndef USE_LAYER_DISPLACE\n					#include <defaultnormal_vertex>\n				#endif\n\n				vec3 displaced_position = position;\n				vec3 displaced_normal = objectNormal;\n\n				#ifdef USE_LAYER_DISPLACE\n					vec3 transformed;\n					vec3 transformedNormal;\n				#endif\n				",
				"#include <normal_vertex>",
				"\n				#ifndef USE_LAYER_DISPLACE\n					#include <begin_vertex>\n				#endif\n				"
			];
			n && r.push(n.code, n.result ? "displaced_position = " + n.result + ";" : ""), r.push("transformed = displaced_position;", "#include <morphtarget_vertex>", "#include <skinning_vertex>", "transformedNormal = normalMatrix * displaced_normal;", "#ifndef FLAT_SHADED", "    vNormal = transformedNormal;", "#endif"), r.push("	#include <project_vertex>", "	#include <clipping_planes_vertex>", "	vViewPosition = - mvPosition.xyz;", "	#include <worldpos_vertex>", "\n					vec3 diffuse = vec3( 1.0 );\n					\n					\n					struct GeometricContext { vec3 position; vec3 normal; vec3 viewDir; };\n					GeometricContext geometry;\n					geometry.position = mvPosition.xyz;\n					geometry.normal = normalize( transformedNormal );\n					geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\n				"), r.push("\n					GeometricContext backGeometry;\n					backGeometry.position = geometry.position;\n					backGeometry.normal = -geometry.normal;\n					backGeometry.viewDir = geometry.viewDir;\n					vLightFront = vec3( 0.0 );\n					vIndirectFront = vec3( 0.0 );\n					#ifdef DOUBLE_SIDED\n						vLightBack = vec3( 0.0 );\n						vIndirectBack = vec3( 0.0 );\n					#endif\n					IncidentLight directLight;\n					float dotNL;\n					vec3 directLightColor_Diffuse;\n					vIndirectFront += getAmbientLightIrradiance( ambientLightColor );\n					#if defined( USE_LIGHT_PROBES )\n						vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );\n					#endif\n					#ifdef DOUBLE_SIDED\n						vIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n						#if defined( USE_LIGHT_PROBES )\n							vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );\n						#endif\n					#endif\n					#if NUM_POINT_LIGHTS > 0\n						#pragma unroll_loop_start\n						for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n							getPointLightInfo( pointLights[ i ], geometry.position, directLight );\n							dotNL = dot( geometry.normal, directLight.direction );\n							directLightColor_Diffuse = directLight.color;\n							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n							#ifdef DOUBLE_SIDED\n								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n							#endif\n						}\n						#pragma unroll_loop_end\n					#endif\n					#if NUM_SPOT_LIGHTS > 0\n						#pragma unroll_loop_start\n						for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n							getSpotLightInfo( spotLights[ i ], geometry.position, directLight );\n							dotNL = dot( geometry.normal, directLight.direction );\n							directLightColor_Diffuse = directLight.color;\n							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n							#ifdef DOUBLE_SIDED\n								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n							#endif\n						}\n						#pragma unroll_loop_end\n					#endif\n					#if NUM_DIR_LIGHTS > 0\n						#pragma unroll_loop_start\n						for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n							getDirectionalLightInfo( directionalLights[ i ], directLight );\n							dotNL = dot( geometry.normal, directLight.direction );\n							directLightColor_Diffuse = directLight.color;\n							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n							#ifdef DOUBLE_SIDED\n								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n							#endif\n						}\n						#pragma unroll_loop_end\n					#endif\n					#if NUM_HEMI_LIGHTS > 0\n						#pragma unroll_loop_start\n						for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n							vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );\n							#ifdef DOUBLE_SIDED\n								vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );\n							#endif\n						}\n						#pragma unroll_loop_end\n					#endif\n				", "	#include <shadowmap_vertex>", "	#include <fog_vertex>"), r.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"), t = r.join("\n");
		} else {
			e.mergeUniform({ penumbraSize: Q.penumbraSize }), e.mergeUniform({ frameIndex: Q.frameIndex }), e.mergeUniform({ aoMap: Q.aoRenderTarget }), e.mergeUniform({ aoEnabled: Q.aoEnabled }), this.color === void 0 && (this.color = new J(5526619)), this.color.analyze(e, { slot: "color" }), this.shadingAlpha.analyze(e), this.shadingBlend.analyze(e), this.afterColor && this.afterColor.analyze(e, { slot: "afterColor" }), this.alpha && this.alpha.analyze(e);
			let n = this.color.flow(e, "c", { slot: "color" }), r = this.emissive.flow(e, "c", { slot: "emissive" }), i = this.emissiveIntensity.flow(e, "f", { slot: "emissive" }), a = this.occlusion.flow(e, "b", { slot: "occlusion" }), o = this.shadingAlpha.flow(e, "f"), s = this.shadingBlend.flow(e, "i"), c = this.afterColor ? this.afterColor.flow(e, "c", { slot: "afterColor" }) : void 0, l = this.alpha ? this.alpha.flow(e, "f") : void 0, u = this.alphaOverride ? this.alphaOverride.flow(e, "f") : void 0;
			e.requires.transparent = l !== void 0, e.addParsCode([
				"uniform float penumbraSize[5];",
				"uniform sampler2D aoMap;",
				"uniform bool aoEnabled;",
				"varying vec3 vViewPosition;",
				"varying vec3 vWPosition;",
				"varying vec3 vLightFront;",
				"varying vec3 vIndirectFront;",
				"#ifndef DOUBLE_SIDED",
				"   #define DOUBLE_SIDED",
				"#endif",
				"#include <normal_pars_fragment>",
				"#ifdef DOUBLE_SIDED",
				"	varying vec3 vLightBack;",
				"	varying vec3 vIndirectBack;",
				"#endif",
				"#include <bsdfs>",
				"#include <lights_pars_begin>",
				Ra,
				"#include <shadowmap_pars_fragment>",
				"#include <shadowmask_pars_fragment>",
				"#include <clipping_planes_pars_fragment>",
				"#include <dithering_pars_fragment>"
			].join("\n"));
			let d = [
				"#include <normal_fragment_begin>",
				"\n				\n				vec3 viewdx = dFdx(vViewPosition);\n				vec3 viewdy = dFdy(vViewPosition);\n				vec3 faceNormal = normalize(cross(viewdx, viewdy));\n				bool isFrontFacing = (dot(normal, faceNormal) >= 0.0);\n				",
				"#include <clipping_planes_fragment>"
			];
			d.push(n.code, "vec3 diffuseColor = " + n.result + ";", "ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );"), l && d.push(l.code, "#ifdef ALPHATEST", "if ( " + l.result + " <= ALPHATEST ) discard;", "#endif"), d.push("#ifdef DOUBLE_SIDED", "	reflectedLight.indirectDiffuse += ( isFrontFacing ) ? vIndirectFront : vIndirectBack;", "#else", "	reflectedLight.indirectDiffuse += vIndirectFront;", "#endif", "#ifdef USE_LIGHTMAP", "	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );", "	reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;", "#endif", "reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );", "#ifdef DOUBLE_SIDED", "	reflectedLight.directDiffuse = ( isFrontFacing ) ? vLightFront : vLightBack;", "#else", "	reflectedLight.directDiffuse = vLightFront;", "#endif", "reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();"), r && d.push(r.code, "reflectedLight.directDiffuse += " + r.result + " * " + i.result + ";"), d.push("vec3 ao = aoEnabled && " + a.result + " ? tex2D(aoMap, gl_FragCoord.xy / resolution).rgb : vec3(1.0);", "vec3 outgoingLight = (reflectedLight.directDiffuse + reflectedLight.indirectDiffuse) ;");
			let f = "1.0";
			this.mask && (this.mask.analyze(e), f = `luminance(${this.mask.flow(e, "v3").result})`), d.push(`\n\t\t\t\tif (outgoingLight != diffuseColor) {\n\t\t\t\t\tfloat lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );\n\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * ${o.result} * ${f} * lightAccu;\n\t\t\t\t\toutgoingLight = spe_blend( diffuseColor, outgoingLight, ${o.result} * ${f}, ${s.result} );\n\n\t\t\t\t\toutgoingLight *= ao;\n\t\t\t\t}\n\t\t\t\t`), c && d.push(c.code, `outgoingLight = spe_blend(outgoingLight, ${c.result}, 1.0, SPE_BLENDING_NORMAL);`), l ? d.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${l.result} );`) : d.push("gl_FragColor = vec4( outgoingLight, 1.0 );"), u && d.push(`gl_FragColor.a *= ${u.result};`), d.push("#include <colorspace_fragment>", za, "#include <dithering_fragment>"), t = d.join("\n");
		}
		return t;
	}
}, Ha = {
	dHdxy: new H("vec2 dHdxy(sampler2D bumpMap, vec2 bumpMapUv, float bumpScale) {\n\n            \n            vec2 dSTdx = dFdx(bumpMapUv);\n\n            \n            vec2 dSTdy = dFdy(bumpMapUv);\n            \n            \n            float Hll = bumpScale * luminance(texture(bumpMap, bumpMapUv).rgb);\n            float dBx = bumpScale * luminance(texture(bumpMap, bumpMapUv + dSTdx).rgb) - Hll;\n            float dBy = bumpScale * luminance(texture(bumpMap, bumpMapUv + dSTdy).rgb) - Hll;\n            \n            return vec2( dBx, dBy );\n        }"),
	perturbNormalArb: new H("vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n            vec3 vSigmaX = dFdx( surf_pos.xyz );\n            vec3 vSigmaY = dFdy( surf_pos.xyz );\n            vec3 vN = surf_norm; \n            \n            vN = normalize(vN);\n\n            vec3 R1 = cross( vSigmaY, vN );\n            vec3 R2 = cross( vN, vSigmaX );\n\n            R1 = normalize(R1);\n            R2 = normalize(R2);\n    \n            float fDet = dot( vSigmaX, R1 ) * faceDirection;\n    \n            vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n            return normalize( abs( fDet ) * vN - vGrad );\n        }")
}, Ua = class extends B {
	constructor() {
		super("standard"), this.nodeType = "Standard", this.color = new J(qe), this.roughness = new G(.3), this.metalness = new G(0), this.reflectivity = new G(.5), this.previousModelViewMatrix = new Yi(), this.previouseProjectionMatrix = new Yi(), this.shadingAlpha = new G(1), this.shadingBlend = new Y(0), this.occlusion = new Ui(!0);
	}
	get category() {
		return "physical";
	}
	build(e) {
		let t;
		if (e.define("STANDARD"), e.requires.lights = !0, e.extensions.derivatives = !0, e.extensions.shaderTextureLOD = !0, e.isShader("vertex")) {
			let n = this.position ? this.position.analyzeAndFlow(e, "v3", { cache: "position" }) : void 0;
			e.mergeUniform({ frameIndex: Q.frameIndex }), e.mergeUniform({ resolution: Q.resolution }), e.mergeUniform({ previousModelViewMatrix: this.previousModelViewMatrix }), e.mergeUniform({ previousProjectionMatrix: this.previouseProjectionMatrix }), e.mergeUniform(w.merge([Z.fog, Z.lights])), e.mergeUniform(La), Z.LTC_1 && (e.uniforms.ltc_1 = { value: void 0 }, e.uniforms.ltc_2 = { value: void 0 }), e.addParsCode([
				"varying vec3 vViewPosition;",
				"varying vec3 vWPosition;",
				"#include <fog_pars_vertex>",
				"#include <skinning_pars_vertex>",
				"#include <normal_pars_vertex>",
				"#include <morphtarget_pars_vertex>",
				"#include <shadowmap_pars_vertex>",
				"#include <clipping_planes_pars_vertex>"
			].join("\n"));
			let r = [
				"#include <beginnormal_vertex>",
				"#include <morphnormal_vertex>",
				"\n				#include <skinbase_vertex>\n				#include <skinnormal_vertex>\n				#if !defined( USE_LAYER_DISPLACE )\n					#include <defaultnormal_vertex>\n				#endif\n\n				vec3 displaced_position = position;\n				vec3 displaced_normal = objectNormal;\n\n				#if defined( USE_LAYER_DISPLACE )\n					vec3 transformed;\n					vec3 transformedNormal;\n				#endif\n				",
				"#include <normal_vertex>",
				"\n				#if !defined( USE_LAYER_DISPLACE )\n					#include <begin_vertex>\n				#endif /* !USE_LAYER_DISPLACE */\n				"
			];
			n && r.push(n.code, n.result ? "displaced_position = " + n.result + ";" : ""), r.push("transformed = displaced_position;", "#include <morphtarget_vertex>", "#include <skinning_vertex>", "transformedNormal = normalMatrix * displaced_normal;", "#ifndef FLAT_SHADED", "    vNormal = transformedNormal;", "#endif"), r.push("#include <project_vertex>", "#include <fog_vertex>", "#include <clipping_planes_vertex>", "	vViewPosition = - mvPosition.xyz;", "#include <worldpos_vertex>", "#include <shadowmap_vertex>"), r.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"), t = r.join("\n");
		} else {
			e.mergeUniform({ penumbraSize: Q.penumbraSize }), e.mergeUniform({ frameIndex: Q.frameIndex }), e.mergeUniform({ aoMap: Q.aoRenderTarget }), e.mergeUniform({ aoEnabled: Q.aoEnabled }), e.mergeUniform({ dfgLUT: { value: null } });
			let n = { gamma: !0 };
			this.color === void 0 && (this.color = new J(5526619)), this.color.analyze(e, {
				slot: "color",
				context: n
			}), this.roughness.analyze(e), this.metalness.analyze(e);
			let r = this.occlusion.flow(e, "b", { slot: "occlusion" });
			this.shadingAlpha.analyze(e), this.shadingBlend.analyze(e), this.afterColor && this.afterColor.analyze(e, { slot: "afterColor" }), this.alpha && this.alpha.analyze(e), this.reflectivity && this.reflectivity.analyze(e);
			let i = this.color.flow(e, "c", {
				slot: "color",
				context: n
			}), a = this.roughness.flow(e, "f"), o = this.metalness.flow(e, "f"), s = this.shadingAlpha.flow(e, "f"), c = this.shadingBlend.flow(e, "i"), l = this.afterColor ? this.afterColor.flow(e, "c", { slot: "afterColor" }) : void 0, u = this.alpha ? this.alpha.flow(e, "f") : void 0, d = this.alphaOverride ? this.alphaOverride.flow(e, "f") : void 0, f = this.reflectivity ? this.reflectivity.flow(e, "f") : void 0;
			e.requires.transparent = u !== void 0, e.addParsCode([
				"varying vec3 vViewPosition;",
				"varying vec3 vWPosition;",
				"uniform float penumbraSize[5];",
				"uniform sampler2D aoMap;",
				"uniform bool aoEnabled;",
				"#include <normal_pars_fragment>",
				"#include <dithering_pars_fragment>",
				Ra,
				"#include <bsdfs>",
				"#include <lights_pars_begin>",
				"#include <lights_physical_pars_fragment>",
				"#include <shadowmap_pars_fragment>"
			].join("\n"));
			let p = [
				"#include <clipping_planes_fragment>",
				"	#include <normal_fragment_begin>",
				"\n				\n				vec3 viewdx = dFdx(vViewPosition);\n				vec3 viewdy = dFdy(vViewPosition);\n				vec3 faceNormal = normalize(cross(viewdx,viewdy));\n				if (dot(normal, faceNormal) < 0.0) {\n					normal *= -1.0;\n				}\n				",
				"	PhysicalMaterial material;",
				"	material.diffuseColor = vec3( 1.0 );"
			];
			if (this.bumpMap) {
				e.include(Ha.dHdxy), e.include(Ha.perturbNormalArb);
				let t = this.bumpMap.texture.flow(e, "t"), n = this.bumpMap.flow(e, "v3"), r = this.bumpMapIntensity ? this.bumpMapIntensity.flow(e, "f").result : "1.0", i = "";
				i = this.bumpMap.projection.value === 4 ? `\n\t\t\t\t\tvec3 bumpNormal = vec3(0.0);\n\t\t\t\t\t{\n\t\t\t\t\t\tvec2 uv0 = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_writeUvs0;\n\t\t\t\t\t\tvec2 uv1 = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_writeUvs1;\n\t\t\t\t\t\tvec2 uv2 = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_writeUvs2;\n\t\t\t\t\t\tvec3 weights = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_triplanarWeights;\n\n\t\t\t\t\t\tvec2 grad0 = dHdxy(${t.result}, uv0, ${r});\n\t\t\t\t\t\tvec3 n0 = perturbNormalArb(-vViewPosition, normal, grad0, faceDirection);\n\n\t\t\t\t\t\tvec2 grad1 = dHdxy(${t.result}, uv1, ${r});\n\t\t\t\t\t\tvec3 n1 = perturbNormalArb(-vViewPosition, normal, grad1, faceDirection);\n\n\t\t\t\t\t\tvec2 grad2 = dHdxy(${t.result}, uv2, ${r});\n\t\t\t\t\t\tvec3 n2 = perturbNormalArb(-vViewPosition, normal, grad2, faceDirection);\n\t\t\t\t\t\t\n\t\t\t\t\t\tbumpNormal = n0 * weights.z + n1 * weights.x + n2 * weights.y;\n\t\t\t\t\t\tbumpNormal = normalize(bumpNormal);\n\t\t\t\t\t}\n\n\t\t\t\t\tnormal = bumpNormal;\n\t\t\t\t\t` : `\n\t\t\t\t\tvec2 bumpMapCachedUv = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_writeUvs;\n\t\t\t\t\tvec2 grad = dHdxy(${t.result}, bumpMapCachedUv, ${r});\n\t\t\t\t\tnormal = perturbNormalArb( - vViewPosition, normal, grad, faceDirection );\n\t\t\t\t\t`, p.push(`// Call the Texture Layer's function once here so that it writes out its procedural UV coordinates\n\t\t\t\t\t${n.result};\n\t\t\t\t\t${i}\n\t\t\t\t\t`);
			}
			if (p.push(i.code, "	vec3 diffuseColor = " + i.result + ";", "	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );", o.code, "	float metalnessFactor = " + o.result + ";"), this.roughnessMap) {
				let t = this.roughnessMap.texture.flow(e, "t"), n = this.roughnessMap.flow(e, "v3"), r = "";
				r = this.roughnessMap.projection.value === 4 ? `\n\t\t\t\t\tfloat roughnessChange = 1.0;\n\t\t\t\t\t{\n\t\t\t\t\t\tvec2 uv0 = g${this.roughnessMap.uuid.toString().replace(/-/g, "")}_writeUvs0;\n\t\t\t\t\t\tvec2 uv1 = g${this.roughnessMap.uuid.toString().replace(/-/g, "")}_writeUvs1;\n\t\t\t\t\t\tvec2 uv2 = g${this.roughnessMap.uuid.toString().replace(/-/g, "")}_writeUvs2;\n\t\t\t\t\t\tvec3 weights = g${this.roughnessMap.uuid.toString().replace(/-/g, "")}_triplanarWeights;\n\n\t\t\t\t\t\tfloat r0 = luminance(texture(${t.result}, uv0).rgb) * roughnessScale;\n\t\t\t\t\t\tfloat r1 = luminance(texture(${t.result}, uv1).rgb) * roughnessScale;\n\t\t\t\t\t\tfloat r2 = luminance(texture(${t.result}, uv2).rgb) * roughnessScale;\n\n\t\t\t\t\t\troughnessChange = (r0 * weights.z + r1 * weights.x + r2 * weights.y);\n\t\t\t\t\t}\n\t\t\t\t\tfloat roughnessFactor = roughnessChange * ${a.result};\n\t\t\t\t\t` : `\n\t\t\t\t\tvec2 roughnessMapCachedUv = g${this.roughnessMap.uuid.toString().replace(/-/g, "")}_writeUvs;\n\n\t\t\t\t\tvec4 vals = texture(${t.result},  roughnessMapCachedUv);\n\t\t\t\t\tfloat roughnessFactor = luminance(vals.rgb) * ${a.result};\n\t\t\t\t\t`, p.push(`// Call the Texture Layer's function once here so that it writes out its procedural UV coordinates\n\t\t\t\t\t${n.result};\n\n\t\t\t\t\tconst float roughnessScale = 1.0;\n\n\t\t\t\t\t${r}\n\t\t\t\t`);
			} else p.push(a.code, "	float roughnessFactor = " + a.result + ";");
			u && p.push(u.code, "#ifdef ALPHATEST", "	if ( " + u.result + " <= ALPHATEST ) discard;", "#endif"), p.push("vec3 dxy = max( abs( dFdx( normal ) ), abs( dFdy( normal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );"), p.push("material.diffuseColor = diffuseColor;", "material.diffuseContribution = diffuseColor * ( 1.0 - metalnessFactor );", "material.metalness = metalnessFactor;", "material.specularF90 = 1.0;", "material.roughness = max( roughnessFactor, 0.0525 );", "material.roughness += geometryRoughness;", "material.roughness = min( material.roughness, 1.0 );", "material.roughness = clamp( roughnessFactor, 0.04, 1.0 );"), f ? p.push(f.code, "material.specularColor = vec3( 0.16 * pow2( " + f.result + " ) );", "material.specularColorBlended = mix( material.specularColor, diffuseColor, metalnessFactor );") : p.push("material.specularColor = vec3( 0.04 );", "material.specularColorBlended = mix( material.specularColor, diffuseColor, metalnessFactor );"), p.push("#include <lights_fragment_begin>"), p.push("#include <lights_fragment_end>"), p.push("vec3 ao = aoEnabled && " + r.result + " ? tex2D(aoMap, gl_FragCoord.xy / resolution).rgb : vec3(1.0);", "vec3 outgoingLight = ((reflectedLight.directDiffuse + reflectedLight.indirectDiffuse)) + reflectedLight.directSpecular + reflectedLight.indirectSpecular;");
			let m = "1.0";
			this.mask && (this.mask.analyze(e), m = `luminance(${this.mask.flow(e, "v3").result})`), p.push(`\n\t\t\t\tif (outgoingLight != diffuseColor) {\n\t\t\t\t\tfloat lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );\n\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * ${s.result} * ${m} * lightAccu;\n\t\t\t\t\toutgoingLight = spe_blend( diffuseColor, outgoingLight, ${s.result} * ${m}, ${c.result} );\n\t\t\t\t\t\n\t\t\t\t\toutgoingLight *= ao;\n\t\t\t\t}\n\t\t\t\t`), l && p.push(l.code, `outgoingLight = spe_blend(outgoingLight, ${l.result}, 1.0, SPE_BLENDING_NORMAL);`), u ? p.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${u.result} );`) : p.push("gl_FragColor = vec4( outgoingLight, 1.0 );"), d && p.push(`gl_FragColor.a *= ${d.result};`), p.push("#include <colorspace_fragment>", za, "#include <dithering_fragment>"), t = p.join("\n");
		}
		return t;
	}
}, Wa = class extends B {
	constructor() {
		super("toon"), this.nodeType = "Toon", this.color = new J(qe), this.specular = new J(1118481), this.shininess = new G(30), this.previousModelViewMatrix = new Yi(), this.previouseProjectionMatrix = new Yi(), this.shadingAlpha = new G(1), this.shadingBlend = new Y(0);
	}
	get category() {
		return "toon";
	}
	build(e) {
		let t;
		if (e.define("TOON"), e.requires.lights = !0, e.extensions.derivatives = !0, e.isShader("vertex")) {
			let n = this.position ? this.position.analyzeAndFlow(e, "v3", { cache: "position" }) : void 0;
			e.mergeUniform({ frameIndex: Q.frameIndex }), e.mergeUniform({ resolution: Q.resolution }), e.mergeUniform({ previousModelViewMatrix: this.previousModelViewMatrix }), e.mergeUniform({ previousProjectionMatrix: this.previouseProjectionMatrix }), e.mergeUniform(w.merge([Z.fog, Z.lights])), e.mergeUniform(La), e.addParsCode([
				"varying vec3 vViewPosition;",
				"varying vec3 vWPosition;",
				"#include <fog_pars_vertex>",
				"#include <skinning_pars_vertex>",
				"#include <normal_pars_vertex>",
				"#include <morphtarget_pars_vertex>",
				"#include <shadowmap_pars_vertex>",
				"#include <clipping_planes_pars_vertex>"
			].join("\n"));
			let r = [
				"#include <beginnormal_vertex>",
				"#include <morphnormal_vertex>",
				"\n				#include <skinbase_vertex>\n				#include <skinnormal_vertex>\n				#ifndef USE_LAYER_DISPLACE\n					#include <defaultnormal_vertex>\n				#endif\n\n				vec3 displaced_position = position;\n				vec3 displaced_normal = objectNormal;\n\n				#ifdef USE_LAYER_DISPLACE\n					vec3 transformed;\n					vec3 transformedNormal;\n				#endif\n				",
				"#include <normal_vertex>",
				"\n				#ifndef USE_LAYER_DISPLACE\n					#include <begin_vertex>\n				#endif\n				"
			];
			n && r.push(n.code, n.result ? "displaced_position = " + n.result + ";" : ""), r.push("transformed = displaced_position;", "#include <morphtarget_vertex>", "#include <skinning_vertex>", "transformedNormal = normalMatrix * displaced_normal;", "#ifndef FLAT_SHADED", "    vNormal = transformedNormal;", "#endif"), r.push("	#include <project_vertex>", "	#include <fog_vertex>", "	#include <clipping_planes_vertex>", "	vViewPosition = - mvPosition.xyz;", "	#include <worldpos_vertex>", "	#include <shadowmap_vertex>", "	#include <fog_vertex>"), r.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"), t = r.join("\n");
		} else {
			e.mergeUniform({ penumbraSize: Q.penumbraSize }), e.mergeUniform({ frameIndex: Q.frameIndex }), e.mergeUniform({ aoMap: Q.aoRenderTarget }), e.mergeUniform({ aoEnabled: Q.aoEnabled }), this.color === void 0 && (this.color = new J(5526619)), this.color.analyze(e, { slot: "color" }), this.specular.analyze(e), this.shininess.analyze(e), this.shadingAlpha.analyze(e), this.shadingBlend.analyze(e), this.afterColor && this.afterColor.analyze(e, { slot: "afterColor" }), this.alpha && this.alpha.analyze(e);
			let n = this.color.flow(e, "c", { slot: "color" }), r = this.specular.flow(e, "c"), i = this.shininess.flow(e, "f"), a = this.shadingAlpha.flow(e, "f"), o = this.shadingBlend.flow(e, "i"), s = this.afterColor ? this.afterColor.flow(e, "c", { slot: "afterColor" }) : void 0, c = this.alpha ? this.alpha.flow(e, "f") : void 0, l = this.alphaOverride ? this.alphaOverride.flow(e, "f") : void 0;
			e.requires.transparent = c !== void 0, e.addParsCode([
				"uniform float penumbraSize[5];",
				"uniform sampler2D aoMap;",
				"uniform bool aoEnabled;",
				"varying vec3 vWPosition;",
				"#include <normal_pars_fragment>",
				"#include <gradientmap_pars_fragment>",
				Ra,
				"#include <bsdfs>",
				"#include <lights_pars_begin>",
				"#include <dithering_pars_fragment>",
				"\n					varying vec3 vViewPosition;\n					struct ToonMaterial {\n						vec3	diffuseColor;\n						vec3	specularColor;\n						float	specularShininess;\n						float	specularStrength;\n					};\n					\n					\n					\n					void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n						vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\n						reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n						reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n					}\n					void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n						reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n					}\n					#define RE_Direct				RE_Direct_Toon\n					#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\n					#define Material_LightProbeLOD( material )	(0)\n					",
				"#include <shadowmap_pars_fragment>",
				"#include <bumpmap_pars_fragment>",
				"#include <normalmap_pars_fragment>"
			].join("\n"));
			let u = [
				"#include <normal_fragment_begin>",
				"\n				\n				vec3 viewdx = dFdx(vViewPosition);\n				vec3 viewdy = dFdy(vViewPosition);\n				vec3 faceNormal = normalize(cross(viewdx,viewdy));\n				if (dot(normal, faceNormal) < 0.0) {\n					normal *= -1.0;\n				}\n				",
				"	ToonMaterial material;"
			];
			if (this.bumpMap) {
				e.include(Ha.dHdxy), e.include(Ha.perturbNormalArb);
				let t = this.bumpMap.texture.flow(e, "t"), n = this.bumpMap.flow(e, "v3"), r = this.bumpMapIntensity ? this.bumpMapIntensity.flow(e, "f").result : "1.0", i = "";
				i = this.bumpMap.projection.value === 4 ? `\n\t\t\t\t\tvec3 bumpNormal = vec3(0.0);\n\t\t\t\t\t{\n\t\t\t\t\t\tvec2 uv0 = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_writeUvs0;\n\t\t\t\t\t\tvec2 uv1 = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_writeUvs1;\n\t\t\t\t\t\tvec2 uv2 = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_writeUvs2;\n\t\t\t\t\t\tvec3 weights = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_triplanarWeights;\n\n\t\t\t\t\t\tvec2 grad0 = dHdxy(${t.result}, uv0, ${r});\n\t\t\t\t\t\tvec3 n0 = perturbNormalArb(-vViewPosition, normal, grad0, faceDirection);\n\n\t\t\t\t\t\tvec2 grad1 = dHdxy(${t.result}, uv1, ${r});\n\t\t\t\t\t\tvec3 n1 = perturbNormalArb(-vViewPosition, normal, grad1, faceDirection);\n\n\t\t\t\t\t\tvec2 grad2 = dHdxy(${t.result}, uv2, ${r});\n\t\t\t\t\t\tvec3 n2 = perturbNormalArb(-vViewPosition, normal, grad2, faceDirection);\n\t\t\t\t\t\t\n\t\t\t\t\t\tbumpNormal = n0 * weights.z + n1 * weights.x + n2 * weights.y;\n\t\t\t\t\t\tbumpNormal = normalize(bumpNormal);\n\t\t\t\t\t}\n\n\t\t\t\t\tnormal = bumpNormal;\n\t\t\t\t\t` : `\n\t\t\t\t\tvec2 bumpMapCachedUv = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_writeUvs;\n\t\t\t\t\tvec2 grad = dHdxy(${t.result}, bumpMapCachedUv, ${r});\n\t\t\t\t\tnormal = perturbNormalArb( - vViewPosition, normal, grad, faceDirection );\n\t\t\t\t\t`, u.push(`// Call the Texture Layer's function once here so that it writes out its procedural UV coordinates\n\t\t\t\t\t${n.result};\n\t\t\t\t\t${i}\n\t\t\t\t\t`);
			}
			u.push(n.code, "	vec3 diffuseColor = " + n.result + ";", "	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );", r.code, "	vec3 specular = " + r.result + ";", i.code, "	float shininess = max( 0.0001, " + i.result + " );", "	float specularStrength = 1.0;"), c && u.push(c.code, "#ifdef ALPHATEST", "if ( " + c.result + " <= ALPHATEST ) discard;", "#endif"), u.push("material.diffuseColor = diffuseColor;"), u.push("material.specularColor = specular;", "material.specularShininess = shininess;", "material.specularStrength = specularStrength;", "#include <lights_fragment_begin>", "#include <lights_fragment_end>"), u.push("vec3 ao = aoEnabled ? tex2D(aoMap, gl_FragCoord.xy / resolution).rgb : vec3(1.0);", "vec3 outgoingLight = ((reflectedLight.directDiffuse + reflectedLight.indirectDiffuse) * ao) + reflectedLight.directSpecular;");
			let d = "1.0";
			this.mask && (this.mask.analyze(e), d = `luminance(${this.mask.flow(e, "v3").result})`), u.push(`\n\t\t\t\tif (outgoingLight != diffuseColor) {\n\t\t\t\t\tfloat lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );\n\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * ${a.result} * ${d} * lightAccu;\n\t\t\t\t\toutgoingLight = spe_blend( diffuseColor, outgoingLight, ${a.result} * ${d}, ${o.result} );\n\t\t\t\t}\n\t\t\t\t`), s && u.push(s.code, `outgoingLight = spe_blend(outgoingLight, ${s.result}, 1.0, SPE_BLENDING_NORMAL);`), c ? u.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${c.result} );`) : u.push("gl_FragColor = vec4( outgoingLight, 1.0 );"), l && u.push(`gl_FragColor.a *= ${l.result};`), u.push("#include <colorspace_fragment>", za, "#include <dithering_fragment>"), t = u.join("\n");
		}
		return t;
	}
}, Ga = class extends B {
	constructor() {
		super("phong"), this.nodeType = "Phong", this.color = new J(qe), this.specular = new J(1118481), this.shininess = new G(30), this.previousModelViewMatrix = new Yi(), this.previouseProjectionMatrix = new Yi(), this.shadingAlpha = new G(1), this.shadingBlend = new Y(0), this.occlusion = new Ui(!0);
	}
	get category() {
		return "phong";
	}
	build(e) {
		let t;
		if (e.define("PHONG"), e.requires.lights = !0, e.extensions.derivatives = !0, e.isShader("vertex")) {
			let n = this.position ? this.position.analyzeAndFlow(e, "v3", { cache: "position" }) : void 0;
			e.mergeUniform({ frameIndex: Q.frameIndex }), e.mergeUniform({ resolution: Q.resolution }), e.mergeUniform({ previousModelViewMatrix: this.previousModelViewMatrix }), e.mergeUniform({ previousProjectionMatrix: this.previouseProjectionMatrix }), e.mergeUniform(w.merge([Z.fog, Z.lights])), e.mergeUniform(La), e.addParsCode([
				"varying vec3 vViewPosition;",
				"varying vec3 vWPosition;",
				"#include <fog_pars_vertex>",
				"#include <skinning_pars_vertex>",
				"#include <normal_pars_vertex>",
				"#include <morphtarget_pars_vertex>",
				"#include <shadowmap_pars_vertex>",
				"#include <clipping_planes_pars_vertex>"
			].join("\n"));
			let r = [
				"#include <beginnormal_vertex>",
				"#include <morphnormal_vertex>",
				"\n				#include <skinbase_vertex>\n				#include <skinnormal_vertex>\n				#ifndef USE_LAYER_DISPLACE\n					#include <defaultnormal_vertex>\n				#endif\n\n				vec3 displaced_position = position;\n				vec3 displaced_normal = objectNormal;\n\n				#ifdef USE_LAYER_DISPLACE\n					vec3 transformed;\n					vec3 transformedNormal;\n				#endif\n				",
				"#include <normal_vertex>",
				"\n				#ifndef USE_LAYER_DISPLACE\n					#include <begin_vertex>\n				#endif\n				"
			];
			n && r.push(n.code, n.result ? "displaced_position = " + n.result + ";" : ""), r.push("transformed = displaced_position;", "#include <morphtarget_vertex>", "#include <skinning_vertex>", "transformedNormal = normalMatrix * displaced_normal;", "#ifndef FLAT_SHADED", "    vNormal = transformedNormal;", "#endif"), r.push("	#include <project_vertex>", "	#include <clipping_planes_vertex>", "	vViewPosition = - mvPosition.xyz;", "	#include <worldpos_vertex>", "	#include <shadowmap_vertex>", "	#include <fog_vertex>"), r.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"), t = r.join("\n");
		} else {
			e.mergeUniform({ penumbraSize: Q.penumbraSize }), e.mergeUniform({ frameIndex: Q.frameIndex }), e.mergeUniform({ aoMap: Q.aoRenderTarget }), e.mergeUniform({ aoEnabled: Q.aoEnabled }), this.color === void 0 && (this.color = new J(5526619)), this.color.analyze(e, { slot: "color" }), this.specular.analyze(e), this.shininess.analyze(e);
			let n = this.occlusion.flow(e, "b", { slot: "occlusion" });
			this.shadingAlpha.analyze(e), this.shadingBlend.analyze(e), this.afterColor && this.afterColor.analyze(e, { slot: "afterColor" }), this.alpha && this.alpha.analyze(e);
			let r = this.color.flow(e, "c", { slot: "color" }), i = this.specular.flow(e, "c"), a = this.shininess.flow(e, "f"), o = this.shadingAlpha.flow(e, "f"), s = this.shadingBlend.flow(e, "i"), c = this.afterColor ? this.afterColor.flow(e, "c", { slot: "afterColor" }) : void 0, l = this.alpha ? this.alpha.flow(e, "f") : void 0, u = this.alphaOverride ? this.alphaOverride.flow(e, "f") : void 0;
			e.requires.transparent = l !== void 0, e.addParsCode([
				"varying vec3 vWPosition;",
				"uniform vec3 emissive;",
				"uniform float penumbraSize[5];",
				"uniform sampler2D aoMap;",
				"uniform bool aoEnabled;",
				"#include <normal_pars_fragment>",
				Ra,
				"#include <bsdfs>",
				"#include <lights_pars_begin>",
				"#include <lights_phong_pars_fragment>",
				"#include <shadowmap_pars_fragment>",
				"#include <dithering_pars_fragment>"
			].join("\n"));
			let d = [
				"#include <normal_fragment_begin>",
				"\n				\n				vec3 viewdx = dFdx(vViewPosition);\n				vec3 viewdy = dFdy(vViewPosition);\n				vec3 faceNormal = normalize(cross(viewdx,viewdy));\n				if (dot(normal, faceNormal) < 0.0) {\n					normal *= -1.0;\n				}\n				",
				"	BlinnPhongMaterial material;"
			];
			if (this.bumpMap) {
				e.include(Ha.dHdxy), e.include(Ha.perturbNormalArb);
				let t = this.bumpMap.texture.flow(e, "t"), n = this.bumpMap.flow(e, "v3"), r = this.bumpMapIntensity ? this.bumpMapIntensity.flow(e, "f").result : "1.0", i = "";
				i = this.bumpMap.projection.value === 4 ? `\n\t\t\t\t\tvec3 bumpNormal = vec3(0.0);\n\t\t\t\t\t{\n\t\t\t\t\t\tvec2 uv0 = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_writeUvs0;\n\t\t\t\t\t\tvec2 uv1 = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_writeUvs1;\n\t\t\t\t\t\tvec2 uv2 = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_writeUvs2;\n\t\t\t\t\t\tvec3 weights = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_triplanarWeights;\n\n\t\t\t\t\t\tvec2 grad0 = dHdxy(${t.result}, uv0, ${r});\n\t\t\t\t\t\tvec3 n0 = perturbNormalArb(-vViewPosition, normal, grad0, faceDirection);\n\n\t\t\t\t\t\tvec2 grad1 = dHdxy(${t.result}, uv1, ${r});\n\t\t\t\t\t\tvec3 n1 = perturbNormalArb(-vViewPosition, normal, grad1, faceDirection);\n\n\t\t\t\t\t\tvec2 grad2 = dHdxy(${t.result}, uv2, ${r});\n\t\t\t\t\t\tvec3 n2 = perturbNormalArb(-vViewPosition, normal, grad2, faceDirection);\n\t\t\t\t\t\t\n\t\t\t\t\t\tbumpNormal = n0 * weights.z + n1 * weights.x + n2 * weights.y;\n\t\t\t\t\t\tbumpNormal = normalize(bumpNormal);\n\t\t\t\t\t}\n\n\t\t\t\t\tnormal = bumpNormal;\n\t\t\t\t\t` : `\n\t\t\t\t\tvec2 bumpMapCachedUv = g${this.bumpMap.uuid.toString().replace(/-/g, "")}_writeUvs;\n\t\t\t\t\tvec2 grad = dHdxy(${t.result}, bumpMapCachedUv, ${r});\n\t\t\t\t\tnormal = perturbNormalArb( - vViewPosition, normal, grad, faceDirection );\n\t\t\t\t\t`, d.push(`// Call the Texture Layer's function once here so that it writes out its procedural UV coordinates\n\t\t\t\t\t${n.result};\n\t\t\t\t\t${i}\n\t\t\t\t\t`);
			}
			d.push(r.code, "	vec3 diffuseColor = " + r.result + ";", "	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );", "	vec3 totalEmissiveRadiance = emissive;", i.code, "	vec3 specular = " + i.result + ";", a.code, "	float shininess = max( 0.0001, " + a.result + " );", "	float specularStrength = 1.0;"), l && d.push(l.code, "#ifdef ALPHATEST", "if ( " + l.result + " <= ALPHATEST ) discard;", "#endif"), d.push("material.diffuseColor = diffuseColor;"), d.push("material.specularColor = specular;", "material.specularShininess = shininess;", "material.specularStrength = specularStrength;", "#include <lights_fragment_begin>", "#include <lights_fragment_end>"), d.push("vec3 ao = aoEnabled && " + n.result + " ? tex2D(aoMap, gl_FragCoord.xy / resolution).rgb : vec3(1.0);", "vec3 outgoingLight = ((reflectedLight.directDiffuse + reflectedLight.indirectDiffuse)) + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;");
			let f = "1.0";
			this.mask && (this.mask.analyze(e), f = `luminance(${this.mask.flow(e, "v3").result})`), d.push(`\n\t\t\t\tif (outgoingLight != diffuseColor) {\n\t\t\t\t\tfloat lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );\n\t\t\t\t\taccumAlpha += ( 1.0 - accumAlpha ) * ${o.result} * ${f} * lightAccu;\n\t\t\t\t\toutgoingLight = spe_blend( diffuseColor, outgoingLight, ${o.result} * ${f}, ${s.result} );\n\t\t\t\t\t\n\t\t\t\t\toutgoingLight *= ao;\n\t\t\t\t}\n\t\t\t\t`), c && d.push(c.code, `outgoingLight = spe_blend(outgoingLight, ${c.result}, 1.0, SPE_BLENDING_NORMAL);`), l ? d.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${l.result});`) : d.push("gl_FragColor = vec4( outgoingLight, 1.0 );"), u && d.push(`gl_FragColor.a *= ${u.result};`), d.push("#include <colorspace_fragment>", za, "#include <dithering_fragment>"), t = d.join("\n");
		}
		return t;
	}
}, Ka = /* @__PURE__ */ new Map();
function qa(e, t) {
	Ka.set(e, t);
}
var Ja = /* @__PURE__ */ new Set();
function Ya(e, t, n) {
	if (t === "isMask" || e.type === "rainbow" && t === "noiseStrength" && e.noiseCompiledIn !== void 0 && (!0 === e.noiseForced || nt(n)) !== e.noiseCompiledIn) return !0;
	let r = F[e.type], i = rt[e.type];
	if (i !== void 0) {
		let r = e.color;
		if (i.includes(t)) {
			let e = r[t]?.value?.length;
			if (e !== void 0 && e !== n.length) return !0;
		}
	}
	return r !== void 0 && r.includes(t);
}
function Xa(e, t) {
	if (Array.isArray(t)) {
		if (!Array.isArray(e) || e.length !== t.length) return !1;
		for (let [n, r] of t.entries()) {
			let t = e[n];
			if (typeof r == "string" || typeof r == "number" && typeof t == "string") return !0;
		}
		return !1;
	}
	let n = typeof e == "string", r = typeof t == "string";
	return n !== r || n && r;
}
function Za(e, t, n) {
	let r = n.uniforms[`f${n.id}_texture`];
	if (!r) return !1;
	let i = !1, a = e;
	if ("image" in a) {
		let e = a.image, n = t.image(e), i = r;
		i.image instanceof $e || i.image.deref(), i.image = n;
	}
	if ("video" in a) {
		let e = a.video, n = t.video(e), i = r;
		i.image instanceof $e || i.image.deref(), i.image = n;
	}
	if ("wrapping" in a && (r.wrap = a.wrapping), "minFilter" in a && (r.minFilter = a.minFilter), "magFilter" in a && (r.magFilter = a.magFilter), "rotation" in a && n.uniforms[`f${n.id}_rotation`]) return n.uniforms[`f${n.id}_rotation`].value = (R(a.rotation ?? 0, t) ?? 0) * Se.DEG2RAD, i;
	if ("repeat" in a || "offset" in a || "rotation" in a) {
		let e = n.uniforms[`f${n.id}_mat`];
		if (!e) return i;
		if ("repeat" in a) {
			let r = a.repeat;
			Xa(n.data.texture.repeat, r) && (i = !0), e.repeat = eo(r, t).map((e, t) => typeof r[t] == "string" ? 1 / e : e);
		}
		if ("offset" in a) {
			let r = a.offset;
			Xa(n.data.texture.offset, r) && (i = !0), e.offset = eo(r, t).map((e, t) => typeof r[t] == "string" ? -e : e);
		}
		if ("rotation" in a) {
			let r = n.data.texture.rotation, o = a.rotation ?? 0;
			(r === void 0 || Xa(r, o)) && (i = !0), e.rotation = R(o, t) ?? 0;
		}
		e.updateMatrix();
	}
	return i;
}
var Qa = (e, t) => (e ||= new l(), e.x = R(e.x, t) ?? 0, e.y = R(e.y, t) ?? 0, e.z = R(e.z, t) ?? 0, e), $a = (e, t) => (e ||= new _(), e.x = R(e.x, t) ?? 0, e.y = R(e.y, t) ?? 0, e), eo = (e, t) => {
	let n = e.map((e) => R(e, t) ?? 0);
	return [n[0], n[1]];
}, to = class {
	constructor(e, t, n, r, i) {
		this.id = e, this.uuid = t, this.data = n, this.uniforms = {};
		for (let e in r) this.uniforms[`f${this.id}_${e}`] = r[e];
		for (let e in n) ao(e, this, n, i);
	}
	get type() {
		return this.data.type;
	}
	static create(e, t, n, r, i) {
		if (n.type === "light") return ro.createLightLayer(e, t, n, r);
		if (n.type === "color") return function(e, t, n, r) {
			let i = Et(n, r), a = new J(i.color ?? 5526619), o = io(i), s = new ta(a, o.alpha), c = new W(s.calpha, "f");
			return new $(e, t, n, {
				color: a,
				...o
			}, s, o.mode, c, o.isMask, r);
		}(e, t, n, r);
		let a = (o = n.type, Ka.get(o));
		var o;
		return a ? a(e, t, n, r, i) : (function(e) {
			Ja.has(e) || (Ja.add(e), console.warn(`[spe] Material layer type "${e}" is not available in this runtime build (compiled out) — rendering flat red. Re-export the scene with its full layer set or load the full runtime build.`));
		}(n.type), function(e, t, n, r) {
			let i = n, a = io({
				alpha: typeof i.alpha == "string" ? Number(r.getVariable(i.alpha) ?? 100) / 100 : i.alpha,
				mode: i.mode,
				isMask: i.isMask
			}), o = new J(1, 0, 0, 1), s = new ta(o, a.alpha), c = new W(s.calpha, "f");
			return new $(e, t, n, {
				color: o,
				...a
			}, s, a.mode, c, a.isMask, r);
		}(e, t, n, r));
	}
	updateByOp(e, t, n) {
		let r = e, i = !1;
		if (r.path[0] === void 0) {
			for (let e of Object.keys(r.props)) try {
				let n = this.data[e], r = t[e];
				if (Array.isArray(n) && Array.isArray(r)) {
					for (let [e, t] of r.entries()) {
						let r = n[e];
						if (typeof t == "string" || typeof t == "number" && typeof r == "string") {
							i = !0;
							break;
						}
					}
					if (i) break;
				} else if (typeof r == "string" && typeof n == "number" || typeof r == "number" && typeof n == "string" || typeof r == "string" && typeof n == "string" && r !== n) {
					i = !0;
					break;
				}
			} catch (e) {
				console.error(e);
			}
			if (r.type === 0) return "type" in r.props || "category" in r.props || "visible" in r.props || "noiseType" in r.props ? (n.scene.markNeedsUpdateRendererDirty(), !0) : function(e, t, n, r) {
				let i = !1;
				for (let [a, o] of Object.entries(e)) {
					if (a === "bumpMap" || a === "roughnessMap") {
						i = !0;
						continue;
					}
					if (!a || o === void 0) continue;
					if (ao(a, n, r, t)) {
						a === "visible" && n.type === "light" && (i = !0);
						continue;
					}
					n.visible = r.visible;
					let e = n.uniforms[`f${n.id}_${a}`];
					if (e && !(e instanceof Gi)) switch (i ||= Ya(n, a, o), e.constructor) {
						case J:
							if (typeof o == "string") {
								let n = t.getColor(o);
								n && (e.value = n);
								break;
							}
							{
								let t = o;
								e.value instanceof it ? e.value = new I(t.r, t.g, t.b, t.a) : e.setRGBA(t);
								break;
							}
						case zt:
							if (typeof o == "string") {
								let n = t.getColor(o);
								n && (e.value = n);
								break;
							}
							{
								let t = o;
								e.value instanceof it ? e.value = new I(t.r, t.g, t.b, t.a) : e.value.setRGBA(t.r, t.g, t.b, t.a);
								break;
							}
						case Lt: {
							let t = o;
							e.value.setX(t[0]), e.value.setY(t[1]);
							break;
						}
						case Rt: {
							let t = o;
							e.value.setX(t[0]), e.value.setY(t[1]), e.value.setZ(t[2]);
							break;
						}
						case Xt:
							Za(o, t, n);
							break;
						case Qi:
							e.value = o.map((e) => new N(...e));
							break;
						default: e.value = o;
					}
				}
				return i;
			}(r.props, n.shared, this, t) || i;
		} else if (r.path[0] === "texture") return !("texture" in t) && !("video" in t) || Za(r.props, n.shared, this) || i;
		return i;
	}
	dispose() {
		if (et(this)) {
			let e = this.uniforms[`f${this.id}_texture`];
			if (!e) return !1;
			let t = e;
			t.image instanceof $e || t.image.deref();
		}
	}
	hasValueByKey(e) {
		return this.uniforms[e] !== void 0;
	}
	hasValue(e) {
		return this.hasValueByKey(`f${this.id}_${e}`);
	}
	setValue(e, t) {
		let n = `f${this.id}_${e}`;
		if (this.hasValueByKey(n) && t !== void 0 && (this.uniforms[n].value = t, e === "noiseStrength" && !1 === this.noiseCompiledIn && typeof t == "number" && t !== 0 && this.onNoiseMismatch !== void 0)) {
			let e = this.onNoiseMismatch;
			this.onNoiseMismatch = void 0, e(t) && (this.noiseCompiledIn = !0);
		}
	}
	getNode(e) {
		let t = `f${this.id}_${e}`;
		if (this.hasValueByKey(t)) return this.uniforms[t];
	}
	getValue(e) {
		let t = `f${this.id}_${e}`;
		if (this.hasValueByKey(t)) return this.uniforms[t].value;
	}
	getName(e) {
		let t = /f\d+_(.*)/.exec(e);
		if (t && t.length > 1) return t[1];
		console.log(`Layer.getName: error ${e}`);
	}
	getNames() {
		let e = [];
		for (let t in this.uniforms) {
			let n = this.getName(t);
			n && e.push(n);
		}
		return e;
	}
}, $ = class extends to {
	constructor(e, t, n, r, i, a, o, s, c) {
		super(e, t, n, r, c), this.params = r, this.color = i, this.mode = a, this.alpha = o, this.isMask = s;
	}
}, no = class extends to {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, r, a), this.position = i;
	}
}, ro = class extends to {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, i, a), this.node = r;
	}
	static createLightLayer(e, t, n, r) {
		let i, a, o = new G(Ze(n.alpha, r)), s = new Y(n.mode), c = new G(n.bumpMapIntensity), l = new G(Ze(n.alphaOverride, r));
		if (n.visible) {
			if (n.category === "lambert") {
				i = new Va();
				let e = new J(r.color(n.emissive) ?? 0), t = new Ui(n.occlusion ?? !0);
				a = {
					emissive: e,
					occlusion: t
				}, i.emissive = e, i.occlusion = t;
			} else if (n.category === "toon") {
				i = new Wa();
				let e = new G(n.shininess ?? 30), t = new J(r.color(n.specular) ?? 1118481);
				a = {
					shininess: e,
					specular: t
				}, i.shininess = e, i.specular = t;
			} else if (n.category === "physical") {
				i = new Ua();
				let e = new G(n.roughness ?? .3), t = new G(n.metalness ?? 0), r = new G(n.reflectivity ?? .5), o = new Ui(n.occlusion ?? !0);
				a = {
					roughness: e,
					metalness: t,
					reflectivity: r,
					occlusion: o
				}, i.roughness = e, i.metalness = t, i.reflectivity = r, i.occlusion = o;
			} else {
				i = new Ga();
				let e = new G(n.shininess ?? 30), t = new J(n.specular === void 0 ? 1118481 : r.color(n.specular) ?? 1118481), o = new Ui(n.occlusion ?? !0);
				a = {
					shininess: e,
					specular: t,
					occlusion: o
				}, i.shininess = e, i.specular = t, i.occlusion = o;
			}
		} else i = new Ba(), a = {};
		return i.alpha = new G(1), i.shadingAlpha = o, i.shadingBlend = s, i.bumpMapIntensity = c, i.alphaOverride = l, a.alpha = i.shadingAlpha, a.mode = i.shadingBlend, a.bumpMapIntensity = i.bumpMapIntensity, a.alphaOverride = i.alphaOverride, new ro(e, t, n, i, a, r);
	}
	get category() {
		return this.node.category;
	}
};
function io(e) {
	return {
		alpha: new G(e.alpha ?? 1),
		mode: new Y(e.mode ?? 0),
		isMask: new Ui(e.isMask ?? !1)
	};
}
function ao(e, t, n, r) {
	if (n.type === "displace" && (e === "intensity" || e === "visible")) {
		let e = t.uniforms[`f${t.id}_intensity`];
		return e ? (e.value = (R(n.intensity, r) ?? 1) * +!!n.visible, e) : void 0;
	}
	if (n.type !== "displace" && (e === "alpha" || e === "visible")) {
		let i = t.uniforms[`f${t.id}_alpha`];
		if (!i) return;
		if (i.value = Ze(n.alpha, r) * +!!n.visible, n.type === "outline" && e === "visible") {
			let e = t.uniforms[`f${t.id}_compensation`];
			e && (e.value = n.compensation && n.visible);
		}
		return i;
	}
}
function oo(e, t, n, r, i, a, o = []) {
	let s = n;
	for (let e of o) e in s && (s = s[e]);
	for (let t of e) t in s && i.getVariable(s[t], [
		"material",
		a,
		"layer",
		r,
		...o,
		String(t)
	]);
	for (let e of t) e in s && s[e].forEach((t, n) => {
		i.getVariable(t, [
			"material",
			a,
			"layer",
			r,
			...o,
			String(e),
			n === 0 ? "x" : n === 1 ? "y" : "z"
		]);
	});
}
var so = class extends E {
	constructor() {
		super(void 0), this.isClassicNodeMaterial = !0, this.flatShading = !1, this.needsJitter = !0, this.shadersPatchedForShapeBlend = !1, this.nodeExtensions = {
			derivatives: !1,
			fragDepth: !1,
			drawBuffers: !1,
			shaderTextureLOD: !1
		}, this.nodeContextUuid = 0, this.fog = !0, this.dithering = !0, this.vertexColors = !0, this.transparent = !0;
	}
	customProgramCacheKey() {
		return "";
	}
}, co = !1, lo = class extends so {
	constructor(e, t, n, r) {
		super(), this.flatShading = e, this.side = t, this.wireframe = n, this.root = r;
	}
	updateAfterBuild() {
		let e = this.root;
		this.lights = e.lights, this.vertexShader = e.vertexShader, this.fragmentShader = e.fragmentShader, Object.assign(this.defines, e.defines), Object.assign(this.uniforms, e.uniforms), this.nodeExtensions = e.nodeExtensions, this.transparent = e.transparent, this.cacheKey = e.customProgramCacheKey() + "flat" + this.flatShading + this.side;
	}
	onBeforeCompile(e, t) {
		this.root.onBeforeCompile(e);
	}
	get data() {
		return this.root.data;
	}
	get category() {
		return this.root.category;
	}
	get hasAO() {
		return this.root.hasAO;
	}
	getFlavor(e, t, n, r) {
		return this.root.getFlavor(e, t, n, r);
	}
	get layers() {
		return this.root.layers;
	}
	get fragment() {
		return this.root.fragment;
	}
	getLayersOfType(e) {
		return this.root.getLayersOfType(e);
	}
	getLayerByUuid(e) {
		return this.root.getLayerByUuid(e);
	}
	ensureRainbowNoiseCompiled(e, t) {
		return this.root.ensureRainbowNoiseCompiled(e, t);
	}
	updateByOp(e, t, n) {
		this.root.updateByOp(e, t, n);
	}
	nodeMaterialDispose() {
		this.root.nodeMaterialDispose();
	}
}, uo = class extends so {
	constructor(e, t, n = !0) {
		super(), this.data = e, this.allowVariableSaves = n, this.layerIdGen = 0, this.flavors = [], this.masks = {}, this.type = "NodeMaterial", this.forceRainbowNoise = /* @__PURE__ */ new Set(), this.syntheticMapLayers = /* @__PURE__ */ new Map(), this.updaters = [], this.needsJitter = t.shared.needsJitter, B.startContext(this), this.reset0(e, t), B.endContext(this);
	}
	setTransparent(e, t) {
		if (this.transparent !== e) {
			this.transparent = e, this.needsUpdate = !0;
			for (let t of this.flavors) t !== void 0 && (t.transparent = e, t.needsUpdate = !0);
			t?.markNeedsUpdateRendererDirty();
		}
	}
	get nodeMaterial() {
		return this;
	}
	getFlavor(e, t, n, r) {
		let i = n ? 6 : (e ? 3 : 0) + t;
		if (i += 7 * ((r?.resolutionLevel ?? 0) - (r?.useChildrenColors ? 4 : 0)), i === 0) return this;
		this.flavors === void 0 && (this.flavors = []), --i;
		let a = this.flavors[i];
		return a === void 0 && (a = new lo(e, t, n, this), a.needsJitter = this.needsJitter, this.flavors[i] = a, a.flatShading = e, a.side = t, a.updateAfterBuild(), r && (a.defines.SHAPEBLEND = r.resolutionLevel, a.defines.SHAPEBLEND_C = +!!r.useChildrenColors)), a;
	}
	get fragment() {
		return this.lightLayer.node;
	}
	get category() {
		return this.lightLayer.category;
	}
	get hasAO() {
		return this.lightLayer.getNode("occlusion")?.value ?? !1;
	}
	ensureRainbowNoiseCompiled(e, t) {
		let n = this.data.layers?.data(e);
		return n !== void 0 && n.type === "rainbow" && (!this.forceRainbowNoise.has(e) && !nt(n.noiseStrength) || !1 === this.getLayerByUuid(e)?.noiseCompiledIn) && (this.forceRainbowNoise.add(e), B.startContext(this), this.reset0(this.data, this.lastContext), B.endContext(this), t !== void 0 && this.getLayerByUuid(e)?.setValue("noiseStrength", t), !0);
	}
	reset(e, t, n = !1) {
		B.startContext(this), (this.data !== e || n) && this.reset0(e, t), B.endContext(this);
	}
	reset0(e, t) {
		this.lastContext = t, this.data = e;
		let n = e.layers ?? Ue.defaultTwoLayerData("phong").layers, r = [];
		for (let e of n) try {
			let n = to.create(this.layerIdGen++, e.id, e.data, t.shared, this.forceRainbowNoise.has(e.id) ? { forceRainbowNoise: !0 } : void 0);
			if (n.type === "rainbow" && !1 === n.noiseCompiledIn) {
				let t = e.id;
				n.onNoiseMismatch = (e) => this.ensureRainbowNoiseCompiled(t, e);
			}
			r.push(n);
		} catch (t) {
			console.warn(`[spe] material layer '${e.data.type}' (${e.id}) failed to build — skipping this layer`, t);
		}
		this.layers = r, this.layers.reverse(), this.name = e.name ?? "Untitled Material", this.onUpdate(t.shared), this.setTransparent(at(e, t.shared), t.scene), this.saveVariableLocations(t);
	}
	onVariableUpdate(e, t, n) {
		if (e[0] === "alphaOverride") this.setTransparent(at(this.data, n.shared), n.scene), this.lightLayer.setValue("alphaOverride", Math.max(0, Math.min(Number(t) / 100, 1)));
		else if (e[0] === "layer") {
			let r = e[1], i = e[2];
			if (r && i) {
				let a = this.layers.find((e) => e.uuid === r);
				if (a?.hasValue(i)) {
					if (i === "alpha") this.setTransparent(at(this.data, n.shared), n.scene), a.setValue(i, Math.max(0, Math.min(Number(t) / 100, 1)));
					else {
						let r = a.getValue(i), o = e[3], s = e[4];
						if (r instanceof m) {
							let e, i = r[o];
							typeof i == "number" ? e = Number(t) : i.isVector2 && (e = i.toArray(), s === "x" ? e[0] = Number(t) : s === "y" && (e[1] = Number(t))), Za({ [o]: e }, n.shared, a);
							return;
						}
						(o === "x" || o === "y" || o === "z") && r.isVector3 || (o === "x" || o === "y") && r.isVector2 ? r[o] = Number(t) : a.setValue(i, t);
					}
				}
			}
		}
	}
	saveVariableLocations(e) {
		if (!this.allowVariableSaves) return;
		let t = this.data.layers?.find((e) => e.data.type === "light");
		t && e.shared.getVariable(t.data.alphaOverride, [
			"material",
			this.uuid,
			"alphaOverride"
		]), this.data.layers?.forEach((t) => {
			"alpha" in t.data && typeof t.data.alpha == "string" && e.shared.getVariable(t.data.alpha, [
				"material",
				this.uuid,
				"layer",
				t.id,
				"alpha"
			]), t.data.type === "displace" ? t.data.displacementType === "noise" ? oo([
				"intensity",
				"scale",
				"movement",
				"smoothness",
				"seed",
				"highCut",
				"lowCut"
			], ["offset"], t.data, t.id, e.shared, this.uuid) : oo(["intensity"], [], t.data, t.id, e.shared, this.uuid) : t.data.type === "depth" ? oo(["near", "far"], ["origin", "direction"], t.data, t.id, e.shared, this.uuid) : t.data.type === "cavity" ? oo(["ridge", "valley"], [], t.data, t.id, e.shared, this.uuid) : t.data.type === "fresnel" ? oo([
				"bias",
				"scale",
				"intensity",
				"factor"
			], [], t.data, t.id, e.shared, this.uuid) : t.data.type === "dust" ? oo([
				"coverage",
				"softness",
				"noiseStrength",
				"noiseScale"
			], [], t.data, t.id, e.shared, this.uuid) : t.data.type === "rainbow" ? oo([
				"filmThickness",
				"movement",
				"noiseStrength",
				"noiseScale"
			], ["offset", "wavelengths"], t.data, t.id, e.shared, this.uuid) : t.data.type === "noise" ? oo([
				"scale",
				"move",
				"seed",
				"highCut",
				"lowCut",
				"smoothness"
			], [
				"size",
				"distortion",
				"fA",
				"fB"
			], t.data, t.id, e.shared, this.uuid) : t.data.type === "pattern" ? oo([
				"blending",
				"size",
				"variation",
				"smoothness",
				"zigzag",
				"rotation"
			], [
				"offset",
				"frequency",
				"vertical",
				"horizontal"
			], t.data, t.id, e.shared, this.uuid) : t.data.type === "outline" ? oo([
				"outlineWidth",
				"contourWidth",
				"outlineThreshold",
				"contourThreshold",
				"outlineSmoothing",
				"contourFrequency"
			], ["contourDirection"], t.data, t.id, e.shared, this.uuid) : t.data.type === "toon" ? oo(["noiseStrength", "noiseScale"], ["offset", "source"], t.data, t.id, e.shared, this.uuid) : t.data.type === "transmission" ? oo([
				"roughness",
				"thickness",
				"ior"
			], [], t.data, t.id, e.shared, this.uuid) : t.data.type === "texture" || t.data.type === "video" ? (oo([], ["size"], t.data, t.id, e.shared, this.uuid), oo(["rotation"], ["repeat", "offset"], t.data, t.id, e.shared, this.uuid, ["texture"])) : t.data.type === "gradient" ? oo(["angle"], ["offset", "morph"], t.data, t.id, e.shared, this.uuid) : t.data.type === "matcap" && oo(["rotation"], [], t.data, t.id, e.shared, this.uuid, ["texture"]);
		});
	}
	getLayersOfType(e) {
		return this.layers.filter((t) => t.type === e);
	}
	getLayerByUuid(e) {
		return this.layers.find((t) => t.uuid === e);
	}
	onUpdate(e) {
		this.lightLayer = this.layers.find((e) => e instanceof ro), this.lightLayer === void 0 && (this.lightLayer = new ro(0, "", {
			...Ke.defaultData("light", "phong"),
			visible: !1
		}, new Ba(), {}, e)), this.dispose();
		for (let e of this.flavors) e && e.dispose();
		this.applyTextureMaps(e), this.applyMasks(), this.blendColors(), this.blendAfterColors(), this.blendPositions(), this.build(), this.nodeContextUuid = 0;
	}
	syntheticMapNode(e, t) {
		let n = this.syntheticMapLayers.get(e);
		if (n === void 0) try {
			let r = Ke.defaultData("texture"), i = {
				...r,
				visible: !1,
				texture: {
					...r.texture,
					image: e.image,
					wrapping: e.wrapping ?? 1e3,
					offset: e.offset ?? [0, 0],
					repeat: e.repeat ?? [1, 1],
					minFilter: e.minFilter ?? 1008,
					magFilter: e.magFilter ?? 1006
				}
			};
			n = to.create(this.layerIdGen++, `mapImage${this.layerIdGen}`, i, t), this.syntheticMapLayers.set(e, n);
		} catch (e) {
			console.warn("[spe] light-layer map image failed to build — skipped", e);
			return;
		}
		let r = n.color;
		return r instanceof oa ? r : void 0;
	}
	applyTextureMaps(e) {
		let t = this.layers.find((e) => e instanceof ro);
		if (!t) return;
		let n = t.data, r = n.bumpMap, i = n.roughnessMap;
		t.node.bumpMap = void 0, t.node.roughnessMap = void 0;
		for (let e of this.syntheticMapLayers.values()) e.dispose();
		this.syntheticMapLayers.clear(), Ye.is(r) && (t.node.bumpMap = this.syntheticMapNode(r, e)), Ye.is(i) && (t.node.roughnessMap = this.syntheticMapNode(i, e));
		let a = n;
		!co && (a.metalnessMap !== void 0 || a.normalMap !== void 0 || a.aoMap !== void 0 || a.emissiveMap !== void 0 || a.roughnessMapChannel !== void 0 && a.roughnessMapChannel !== "luminance" || a.clearcoat !== void 0 || a.sheen !== void 0 || a.ior !== void 0 || a.iridescence !== void 0 || a.emissive !== void 0 && typeof a.emissive == "object" && (a.emissive.r > 0 || a.emissive.g > 0 || a.emissive.b > 0)) && (co = !0, console.warn("[spline] this document uses PBR material maps (metalness/normal/AO/emissive), which the classic WebGL pipeline does not render — the WebGPU renderer shows them"));
		for (let e = 0; e < this.layers.length; ++e) {
			let n = this.layers[e];
			n instanceof $ && n.color instanceof oa && (n.uuid === r && (t.node.bumpMap = n.color), n.uuid === i && (t.node.roughnessMap = n.color));
		}
	}
	updateByOp(e, t, n) {
		if (B.startContext(this), t === void 0 ? t = this.data : this.data = t, this.setTransparent(at(t, n.shared), n.scene), e.path[0] === "layers") {
			let r = n.shared, i = e.path[1];
			if (i === void 0) n.scene.markNeedsUpdateRendererDirty(), this.reset0(t, n);
			else {
				e.type === 0 && e.props.occlusion !== void 0 && n.scene.markNeedsUpdateRendererDirty();
				let a = this.layers.find((e) => e.uuid === i);
				if (a) {
					let o, s = t.layers.data(i);
					e.type === 0 && ("alpha" in e.props || "alphaOverride" in e.props) && (o = "alpha" in e.props ? {
						...e.props,
						alpha: Ze(e.props.alpha, r, [
							"material",
							this.uuid,
							"layer",
							i,
							"alpha"
						])
					} : {
						...e.props,
						alphaOverride: Ze(e.props.alphaOverride, r, [
							"material",
							this.uuid,
							"alphaOverride"
						])
					}), a.updateByOp({
						...e,
						...o ? { props: o } : {},
						path: e.path.slice(2)
					}, s, n) && this.reset0(t, n);
				}
			}
		} else this.reset0(t, n);
		B.endContext(this);
	}
	applyMasks() {
		for (let e = 0; e < this.layers.length; ++e) {
			let t = this.layers[e];
			t instanceof $ ? t.color.mask = void 0 : t instanceof ro && (t.node.mask = void 0);
		}
		for (let e = 0; e < this.layers.length; ++e) {
			let t = this.layers[e];
			if (t instanceof $ && t.isMask.value && t.data.visible && e > 0) {
				let n = e - 1, r = this.layers[n];
				r instanceof ro ? r.node.mask = new $t(t.color, t.alpha, $t.MUL) : r instanceof $ && (r.isMask.value || (r.color.mask = new $t(t.color, t.alpha, $t.MUL)));
			}
		}
	}
	blendColors() {
		let e = this.layers.findIndex((e) => e instanceof $), t = this.layers.findIndex((e) => e instanceof ro);
		if (e !== -1 && e < t) {
			let n = this.layers[e].color;
			for (let r = e + 1; r < t; ++r) {
				let e = this.layers[r];
				if (e instanceof $) {
					if (e.isMask.value) continue;
					n = new $i(n, e.color, e.alpha, e.mode);
				}
			}
			this.fragment.color = n;
		} else this.fragment.color = void 0;
	}
	blendAfterColors() {
		let e = new W("outgoingLight", "f"), t = this.layers.findIndex((e) => e instanceof ro);
		if (this.layers.length > t + 1) {
			for (let n = t + 1; n < this.layers.length; ++n) {
				let t = this.layers[n];
				if (t instanceof $) {
					if (t.isMask.value) continue;
					e = new $i(e, t.color, t.alpha, t.mode);
				}
			}
			this.fragment.afterColor = e;
		} else this.fragment.afterColor = void 0;
	}
	blendPositions() {
		let e = this.layers.filter((e) => e instanceof no);
		if (e.length > 0) {
			let t = e[0].position;
			for (let n = 1; n < e.length; ++n) e[n] && (t = new $t(t, e[n].position, $t.ADD), t = new $t(t, new G(.5).setReadonly(!0), $t.MUL));
			this.fragment.position = t;
		} else this.fragment.position = void 0;
	}
	getDefines() {
		return this.defines;
	}
	getUniforms() {
		return this.uniforms;
	}
	getVertexShader() {
		return this.vertexShader;
	}
	getFragmentShader() {
		return this.fragmentShader;
	}
	onBeforeCompile(e) {
		this.shapeBlendhack && this.shapeBlendhack(this), e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.extensionDerivatives = !0 === this.nodeExtensions.derivatives, e.extensionFragDepth = !0 === this.nodeExtensions.fragDepth, e.extensionDrawBuffers = !0 === this.nodeExtensions.drawBuffers, e.extensionShaderTextureLOD = !0 === this.nodeExtensions.shaderTextureLOD;
	}
	clampUniformsForPreview(e, t) {
		let n = (e, t, n) => Math.min(Math.max(e, t), n);
		for (let r of this.layers) if (r.type === "displace") {
			let i = n(r.uniforms[`f${r.id}_intensity`].value, e, t);
			r.uniforms[`f${r.id}_intensity`].value = i;
		}
	}
	updateFrame(e) {
		for (let t = 0; t < this.updaters.length; ++t) e.updateNode(this.updaters[t]);
	}
	build() {
		let e = new hn();
		e.needsJitter = this.needsJitter, this.lights = this.lightLayer.data.visible, e.build(this.fragment, this.fragment), this.vertexShader = e.getCode("vertex"), this.fragmentShader = e.getCode("fragment"), this.defines = e.defines, this.uniforms = e.uniforms, this.nodeExtensions = e.extensions, this.updaters = e.updaters;
		for (let e of this.flavors) e && e.updateAfterBuild();
		return this.shadersPatchedForShapeBlend = !1, this;
	}
	nodeMaterialDispose() {
		this.layers.forEach((e) => e.dispose());
		for (let e of this.syntheticMapLayers.values()) e.dispose();
		this.syntheticMapLayers.clear(), super.dispose();
		for (let e of this.flavors) e && e.dispose();
	}
	assetsLoaded() {
		for (let e of this.layers) if (e instanceof $) {
			let t = e.params.texture;
			if (t instanceof qi && !t.image.loaded) return !1;
		}
		for (let e of this.syntheticMapLayers.values()) {
			let t = e.params?.texture;
			if (t instanceof qi && !t.image.loaded) return !1;
		}
		return !0;
	}
};
Object.defineProperties(so.prototype, { properties: { get: function() {
	return this.fragment.properties;
} } });
var fo = class extends uo {
	constructor(e, t, n) {
		super(e, t, !1), this.isClassicSharedMaterial = !0, this.uuid = n, this.allowVariableSaves = !0, this.saveVariableLocations(t);
	}
}, po = "\nvec2 receiverPlaneDepthBias(vec3 dcdx, vec3 dcdy)\n{\n    float det = dcdx.x * dcdy.y - dcdx.y * dcdy.x;\n    \n    \n    float invDet = 1.0 / (abs(det) < 1e-10 ? (det < 0.0 ? -1e-10 : 1e-10) : det);\n    return vec2(\n        (dcdy.y * dcdx.z - dcdx.y * dcdy.z) * invDet,\n        (dcdx.x * dcdy.z - dcdy.x * dcdx.z) * invDet\n    );\n}\n\n\n\n\nfloat receiverPlaneAdjust(vec2 dzduv, vec2 offset)\n{\n    return clamp(dot(dzduv, offset), -0.05, 0.05);\n}\n", mo = globalThis, ho = mo.__SPE_ORIGINAL_LIGHTS_FRAGMENT_BEGIN__ ??= X.lights_fragment_begin, go = mo.__SPE_ORIGINAL_SHADOWMASK_PARS__ ??= X.shadowmask_pars_fragment, _o = mo.__SPE_ORIGINAL_SHADOWMAP_PARS__ ??= X.shadowmap_pars_fragment, vo = null, yo = () => {
	let e = _o.replaceAll("vogelDiskSample", "spStockVogelDiskSample").replaceAll("interleavedGradientNoise", "spStockInterleavedGradientNoise"), t = e.indexOf("#if defined( SHADOWMAP_TYPE_PCF )"), n = e.indexOf("#elif defined( SHADOWMAP_TYPE_VSM )");
	if (t < 0 || n <= t) return e;
	let r = e.slice(t, n), i = r.replace(/texture\( shadowMap, vec3\( shadowCoord\.xy \+ spStockVogelDiskSample\( ([0-4]), 5, phi \) \* radius, shadowCoord\.z \) \)/g, "texture( shadowMap, vec3( shadowCoord.xy + spStockOffset$1, shadowCoord.z + receiverPlaneAdjust( spStockDzduv, spStockOffset$1 ) ) )"), a = "float phi = spStockInterleavedGradientNoise( gl_FragCoord.xy ) * PI2;";
	return i !== r && i.includes(a) ? (r = i.replace(a, a + "\n				vec2 spStockDzduv = receiverPlaneDepthBias( dFdx( shadowCoord.xyz ), dFdy( shadowCoord.xyz ) );\n				vec2 spStockOffset0 = spStockVogelDiskSample( 0, 5, phi ) * radius;\n				vec2 spStockOffset1 = spStockVogelDiskSample( 1, 5, phi ) * radius;\n				vec2 spStockOffset2 = spStockVogelDiskSample( 2, 5, phi ) * radius;\n				vec2 spStockOffset3 = spStockVogelDiskSample( 3, 5, phi ) * radius;\n				vec2 spStockOffset4 = spStockVogelDiskSample( 4, 5, phi ) * radius;"), r = r.replace("#if defined( SHADOWMAP_TYPE_PCF )", po + "\n#if defined( SHADOWMAP_TYPE_PCF )"), e.slice(0, t) + r + e.slice(n)) : e;
}, bo = "\n\n  // Linear Fade In\n  float linearFadeIn(float t) {\n    return t;\n  }\n\n\n  // linear fade out\n  float linearFadeOut(float t) {\n    return 1.0 - t;\n  }\n  \n  float linearInOut(float t) {\n    return t < 0.5 ? t :  (1.0 - t);  \n  }\n\n    // lerp\n    float lerp(float a, float b, float t) {\n      return a + (b - a) * t;\n    }\n\n  // Ease In Out Quart\n  float exponentialInOut(float t) {\n    return t < 0.4 ? lerp(0.0, 1.0, t / 0.4) :\n    t > 0.6 ? lerp(1.0, 0.0, (t - 0.6) / 0.4) :\n    1.0;\n   }\n\n  // constant\n  float constant(float t) {\n    return 1.0;\n  } \n", xo = `\n  uniform sampler2D uPosition;\n  uniform float uSize;\n  uniform float uSizeEnd;\n  uniform vec3 uWorldOffset;\n  uniform vec4 uWorldQuaternion;\n  \n  uniform float uRotation;\n  uniform float uRotationEnd;\n  uniform vec2 center;\n\n  \n  uniform float uRandScaleFactor;\n  uniform float uRandRotationFactor;\n\n  attribute vec2 ref;\n\n  varying float v_LifeLeft;    \n  varying vec2 vUv;\n  varying vec2 vRef;\n\n  \n\nfloat rand(vec3 co){\n  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\n\nvec3 applyQuaternionToVector( vec4 q, vec3 v ){\n  return v + 2.0 * cross( q.xyz, cross( q.xyz, v ) + q.w * v );\n}\n\nvec3 applyForce(vec3 force, float mass) {\n  vec3 acceleration = force / mass;\n    \n  return acceleration;\n}\n\n  ${bo}\n`, So = "\n  uniform vec4 uColor;                \n  uniform vec4 uColor2;               \n  uniform sampler2D uTexture;         \n  varying float v_LifeLeft;   \n  varying vec2 vUv;\n  varying vec2 vRef;\n\n  float random(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n  }\n  " + bo + "  \n  \nvec3 rgb2xyz (in vec3 rgb) {\n    float r = rgb.r;\n	float g = rgb.g;\n	float b = rgb.b;\n\n	r = r > 0.04045 ? pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);\n	g = g > 0.04045 ? pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);\n	b = b > 0.04045 ? pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);\n\n	float x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);\n	float y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);\n	float z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);\n    \n    vec3 xyz = vec3(\n        (r * 0.4124) + (g * 0.3576) + (b * 0.1805) * 100.0,\n        (r * 0.2126) + (g * 0.7152) + (b * 0.0722) * 100.0,\n        (r * 0.0193) + (g * 0.1192) + (b * 0.9505) * 100.0\n    );\n    return(xyz);\n}\n\nvec3 xyz2lab (in vec3 xyz) {\n	float x = xyz.x / 95.047;\n	float y = xyz.y / 100.0;\n	float z = xyz.z / 108.883;\n\n	x = x > 0.008856 ? pow(x, 1.0 / 3.0) : (7.787 * x) + (16.0 / 116.0);\n	y = y > 0.008856 ? pow(y, 1.0 / 3.0) : (7.787 * y) + (16.0 / 116.0);\n	z = z > 0.008856 ? pow(z, 1.0 / 3.0) : (7.787 * z) + (16.0 / 116.0);\n\n    vec3 lab = vec3((116.0 * y) - 16.0, 500.0 * (x - y), 200.0 * (y - z));\n    return(lab);\n}\n\nvec3 rgb2lab(in vec3 rgb) {\n    vec3 xyz = rgb2xyz(rgb);\n    vec3 lab = xyz2lab(xyz);\n    return(lab);\n}\n\nvec3 xyz2rgb (in vec3 xyz) {\n	float x = xyz.x / 100.0;\n	float y = xyz.y / 100.0;\n	float z = xyz.z / 100.0;\n	\n    \n	float r = (x *  3.2406) + (y * -1.5372) + (z * -0.4986);\n	float g = (x * -0.9689) + (y *  1.8758) + (z *  0.0415);\n	float b = (x *  0.0557) + (y * -0.2040) + (z *  1.0570);\n\n	r = r > 0.0031308 ? ((1.055 * pow(r, 1.0 / 2.4)) - 0.055) : r * 12.92;\n	g = g > 0.0031308 ? ((1.055 * pow(g, 1.0 / 2.4)) - 0.055) : g * 12.92;\n	b = b > 0.0031308 ? ((1.055 * pow(b, 1.0 / 2.4)) - 0.055) : b * 12.92;\n\n	r = min(max(0.0, r), 1.0);\n	g = min(max(0.0, g), 1.0);\n	b = min(max(0.0, b), 1.0);\n\n	return(vec3(r, g, b));\n}\n\nvec3 lab2xyz (in vec3 lab) {\n    float l = lab.x;\n	float a = lab.y;\n	float b = lab.z;\n\n  	float y = (l + 16.0) / 116.0;\n	float x = a / 500.0 + y;\n	float z = y - b / 200.0;\n\n	float y2 = pow(y, 3.0);\n	float x2 = pow(x, 3.0);\n	float z2 = pow(z, 3.0);\n\n  	y = y2 > 0.008856 ? y2 : (y - 16.0 / 116.0) / 7.787;\n	x = x2 > 0.008856 ? x2 : (x - 16.0 / 116.0) / 7.787;\n	z = z2 > 0.008856 ? z2 : (z - 16.0 / 116.0) / 7.787;\n\n	x *= 95.047;\n	y *= 100.0;\n	z *= 108.883;\n\n	return(vec3(x, y, z));\n}\nvec3 lab2rgb (in vec3 lab) {\n    vec3 xyz = lab2xyz(lab);\n    vec3 rgb = xyz2rgb(xyz);\n    return(rgb);\n}\n\n\n\n", Co = class extends E {
	constructor(e, t) {
		super(), this.needsJitter = !0, this.type = "ParticleMaterial", this.nodeExtensions = {
			derivatives: !1,
			fragDepth: !1,
			drawBuffers: !1,
			shaderTextureLOD: !1
		}, this.easeOpacity = "linearFadeIn", this.easeSize = "linearFadeIn", this.useSizeEnd = !1, this.isColoringRandom = !1, this.init(e, t), this.context = t;
	}
	reset() {}
	init(e, t) {
		this.transparent = !0, this.depthTest = !0, this.depthWrite = !1, this.easeOpacity = e.ease, this.easeSize = e.easeSize, this.layers = [], B.startContext(B.globalContext), this.lightLayer = new ro(0, "", {
			...Ke.defaultData("light", "phong"),
			visible: !1
		}, new Ba(), {}, t.shared), B.endContext(B.globalContext), this.build();
	}
	updateState(e) {
		e.coloring !== void 0 && (this.isColoringRandom = e.coloring === "random"), e.color !== void 0 && (e.color instanceof Array ? this.uniforms.uColor.value = e.color : this.uniforms.uColor.value = this.context.shared.color(e.color)), e.color2 !== void 0 && (e.color2 instanceof Array ? this.uniforms.uColor2.value = e.color2 : this.uniforms.uColor2.value = this.context.shared.color(e.color2)), e.size !== void 0 && (this.uniforms.uSize.value = e.size[0], this.uniforms.uSizeEnd.value = e.size[1], this.useSizeEnd = e.size[0] !== e.size[1]), e.ease !== void 0 && (this.easeOpacity = e.ease, this.build()), e.easeSize !== void 0 && (this.easeSize = e.easeSize, this.build()), this.needsUpdate = !0;
	}
	onBeforeCompile(e) {
		this.build(), e.defines = this.defines, e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader;
	}
	build() {
		let e = new hn();
		return e.needsJitter = this.needsJitter, e.addFragmentParsCode("\nlayout(location = 1) out vec4 gVelocity;\n"), e.buildShader("vertex", this.fragment), e.buildShader("fragment", this.fragment), e.addFragmentFinalCode("\n    \n    if (gl_FragColor.a <= 0.0) discard;\n\n    gVelocity = vec4(0.0, 0.0, 0.0, 1.0);\n"), this.isColoringRandom && e.define("USE_RANDOM_COLORING"), this.useSizeEnd && e.define("USE_SIZE_END"), e.addVertexParsCode(xo), e.addFragmentParsCode(So), e.addVertexFinalCode((({ easeSize: e = "linearFadeOut" }) => `\n  vUv = uv;  \n  vRef = ref;\n  \n  float lifeLeft = texture2D(uPosition, ref).w;\n  v_LifeLeft = lifeLeft;\n  \n  vec3 pos = texture2D(uPosition, ref).rgb - uWorldOffset;\n  \n  pos = applyQuaternionToVector(uWorldQuaternion, pos);  \n            \n  #ifdef  USE_SIZE_END\n    \n    float t = 1. - lifeLeft;\n    float currentSize = mix(uSize, uSizeEnd, t); \n    vec3 scaledPosition = position * vec3(currentSize);\n  #else\n    \n    float easeSize = ${e}(1. - lifeLeft);\n    \n    vec3 scaledPosition = position * vec3(uSize * easeSize);\n  #endif\n\n  \n  vec2 scale;\n  scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n  scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );    \n  \n  float randRef = rand(ref);\n  scale *= (1.0 - (uRandScaleFactor * randRef));\n  \n  float randRotation =  2.0 * PI * ( uRandRotationFactor * randRef);\n  float originalRotation = (1.0 - uRotation) * 2.0 * PI;\n  float originalRotationEnd = (1.0 - uRotationEnd) * 2.0 * PI;\n  \n  float finalRotation = mix(originalRotation + randRotation, originalRotationEnd + randRotation, lifeLeft);\n\n  vec2 alignedPosition = ( scaledPosition.xy - ( center - vec2( 0.5 ) ) ) * scale;\n  vec2 rotatedPosition;\n  rotatedPosition.x = cos( finalRotation ) * alignedPosition.x - sin( finalRotation ) * alignedPosition.y;\n  rotatedPosition.y = sin( finalRotation ) * alignedPosition.x + cos( finalRotation ) * alignedPosition.y;\n  \n  mat4 instanceMatrix = mat4(\n    vec4(1.0, 0.0, 0.0, 0.0),\n    vec4(0.0, 1.0, 0.0, 0.0),\n    vec4(0.0, 0.0, 1.0, 0.0),\n    vec4(pos.x, pos.y, pos.z, 1.0)\n  );  \n\n  mvPosition = modelViewMatrix * instanceMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n  mvPosition.xy += rotatedPosition;\n  gl_Position = projectionMatrix  * mvPosition;   \n`)({ easeSize: this.easeSize })), e.addFragmentFinalCode((({ easeOpacity: e = "linearFadeOut" }) => `  \n  \n  if (v_LifeLeft <= 0.005 ) {\n    discard;\n  }\n\n  #ifdef USE_RANDOM_COLORING\n    float randVal = random(vRef); \n    vec4 color = mix(uColor, uColor2, randVal); \n  #else\n    vec4 color = mix(uColor, uColor2, 1. - v_LifeLeft);\n  #endif\n\n  \n  float finalAlpha = ${e}(1. - v_LifeLeft);  \n  vec4 textureColor = texture2D(uTexture, vUv).rgba; \n  finalColor = textureColor.rgb * color.rgb;\n  finalAlpha = color.a * textureColor.a * finalAlpha;\n  \n  gl_FragColor = vec4(finalColor, finalAlpha);     \n\n`)({ easeOpacity: this.easeOpacity })), this.vertexShader = e.getCode("vertex"), this.fragmentShader = e.getCode("fragment"), this.defines = e.defines, this.uniforms = {
			...e.uniforms,
			...this.uniforms
		}, this.nodeExtensions = e.extensions, this;
	}
	get nodeMaterial() {
		return this;
	}
	get fragment() {
		return this.lightLayer.node;
	}
	getDefines() {
		return this.defines;
	}
	nodeMaterialDispose() {
		this.layers.forEach((e) => e.dispose()), super.dispose();
	}
}, wo = new re(-1, 1, 1, -1, 0, 1), To = new class extends Ve {
	constructor() {
		super(), this.setAttribute("position", new h([
			-1,
			3,
			0,
			-1,
			-1,
			0,
			3,
			-1,
			0
		], 3)), this.setAttribute("uv", new h([
			0,
			2,
			0,
			0,
			2,
			0
		], 2));
	}
}(), Eo = class {
	constructor(e) {
		this._mesh = new t(To, e);
	}
	dispose() {
		this._mesh.geometry.dispose();
	}
	render(e) {
		e.render(this._mesh, wo);
	}
	get material() {
		return this._mesh.material;
	}
	set material(e) {
		this._mesh.material = e;
	}
}, Do = class {
	constructor(t, n, r) {
		this.variables = [], this.currentTextureIndex = 0;
		let i = Be, a = { passThruTexture: { value: null } }, o = l("uniform sampler2D passThruTexture;\n\nvoid main() {\n\n	vec2 uv = gl_FragCoord.xy / resolution.xy;\n\n	gl_FragColor = texture2D( passThruTexture, uv );\n\n}\n", a), s = new Eo(o);
		function c(e) {
			e.defines.resolution = "vec2( " + t.toFixed(1) + ", " + n.toFixed(1) + " )";
		}
		function l(e, t) {
			let n = new E({
				name: "GPUComputationShader",
				uniforms: t ||= {},
				vertexShader: "void main()	{\n\n	gl_Position = vec4( position, 1.0 );\n\n}\n",
				fragmentShader: e
			});
			return c(n), n;
		}
		this.setDataType = function(e) {
			return i = e, this;
		}, this.addVariable = function(e, t, n) {
			let r = {
				name: e,
				initialValueTexture: n,
				material: this.createShaderMaterial(t),
				dependencies: null,
				renderTargets: [],
				wrapS: null,
				wrapT: null,
				minFilter: Ie,
				magFilter: Ie
			};
			return this.variables.push(r), r;
		}, this.setVariableDependencies = function(e, t) {
			e.dependencies = t;
		}, this.init = function() {
			if (r.capabilities.maxVertexTextures === 0) return "No support for vertex shader textures.";
			for (let e = 0; e < this.variables.length; e++) {
				let r = this.variables[e];
				r.renderTargets[0] = this.createRenderTarget(t, n, r.wrapS, r.wrapT, r.minFilter, r.magFilter), r.renderTargets[1] = this.createRenderTarget(t, n, r.wrapS, r.wrapT, r.minFilter, r.magFilter), this.renderTexture(r.initialValueTexture, r.renderTargets[0]), this.renderTexture(r.initialValueTexture, r.renderTargets[1]);
				let i = r.material, a = i.uniforms;
				if (r.dependencies !== null) for (let e = 0; e < r.dependencies.length; e++) {
					let t = r.dependencies[e];
					if (t.name !== r.name) {
						let e = !1;
						for (let n = 0; n < this.variables.length; n++) if (t.name === this.variables[n].name) {
							e = !0;
							break;
						}
						if (!e) return "Variable dependency not found. Variable=" + r.name + ", dependency=" + t.name;
					}
					a[t.name] = { value: null }, i.fragmentShader = "\nuniform sampler2D " + t.name + ";\n" + i.fragmentShader;
				}
			}
			return this.currentTextureIndex = 0, null;
		}, this.compute = function() {
			let e = this.currentTextureIndex, t = +(this.currentTextureIndex === 0);
			for (let n = 0, r = this.variables.length; n < r; n++) {
				let r = this.variables[n];
				if (r.dependencies !== null) {
					let t = r.material.uniforms;
					for (let n = 0, i = r.dependencies.length; n < i; n++) {
						let i = r.dependencies[n];
						t[i.name].value = i.renderTargets[e].texture;
					}
				}
				this.doRenderTarget(r.material, r.renderTargets[t]);
			}
			this.currentTextureIndex = t;
		}, this.getCurrentRenderTarget = function(e) {
			return e.renderTargets[this.currentTextureIndex];
		}, this.getAlternateRenderTarget = function(e) {
			return e.renderTargets[+(this.currentTextureIndex === 0)];
		}, this.dispose = function() {
			s.dispose();
			let e = this.variables;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				n.initialValueTexture && n.initialValueTexture.dispose();
				let r = n.renderTargets;
				for (let e = 0; e < r.length; e++) r[e].dispose();
				n.material.dispose();
			}
		}, this.addResolutionDefine = c, this.createShaderMaterial = l, this.createRenderTarget = function(r, a, o, s, c, l) {
			return new e(r ||= t, a ||= n, {
				wrapS: o ||= 1001,
				wrapT: s ||= 1001,
				minFilter: c ||= 1003,
				magFilter: l ||= 1003,
				format: ie,
				type: i,
				depthBuffer: !1
			});
		}, this.createTexture = function() {
			let e = new Float32Array(t * n * 4), r = new Ne(e, t, n, ie, Be);
			return r.needsUpdate = !0, r;
		}, this.renderTexture = function(e, t) {
			a.passThruTexture.value = e, this.doRenderTarget(o, t), a.passThruTexture.value = null;
		}, this.doRenderTarget = function(e, t) {
			let n = r.getRenderTarget(), i = r.xr.enabled, a = r.shadowMap.autoUpdate;
			r.xr.enabled = !1, r.shadowMap.autoUpdate = !1, s.material = e, r.setRenderTarget(t), s.render(r), s.material = o, r.xr.enabled = i, r.shadowMap.autoUpdate = a, r.setRenderTarget(n);
		};
	}
};
function Oo(e, t, n, r) {
	let i = n, a = i.type === "texture" ? i.texture.image == null ? r.getImage("") : r.uiBuffer(i.texture.image) ?? r.image(i.texture.image) : r.video(i.texture.video), o = new qi(a, i.texture.wrapping ?? (i.type === "texture" ? 1e3 : 1001), i.texture.minFilter ?? 1008, i.texture.magFilter ?? 1006), s = new Ki(a), c = new Zi(eo(i.texture.repeat ?? [1, 1], r), eo(i.texture.offset ?? [0, 0], r), R(i.texture.rotation ?? 0, r)), l = new G(+!!i.crop), u = new Y(i.projection ?? 0), d = new Y([
		"x",
		"y",
		"z"
	].indexOf(i.axis) ?? 0), f = i.projectionAxis ? [
		"x",
		"y",
		"z"
	].indexOf(i.projectionAxis) : -1, p = new Y(i.side ?? 0), m = new Lt(i.size ? new _(...eo(i.size, r)) : new _(100, 100)), h = new G(i.blending ?? 0), g = new G(Ze(i.alpha, r)), v = new Y(i.mode ?? 0), y = new Ui(i.isMask ?? !1), b = new oa(o, s, l, u, d, p, m, h, c, g, v, y, f), x = new W(b.calpha, "f");
	return new $(e, t, i, {
		texture: o,
		textureSize: s,
		crop: l,
		projection: u,
		axis: d,
		side: p,
		size: m,
		blending: h,
		mat: c,
		alpha: g,
		mode: v,
		isMask: y
	}, b, v, x, y, r);
}
At({
	createMaterial: (e, t) => new Co(e, t),
	createComputation: (e, t, n) => new Do(e, t, n)
}), qa("texture", Oo), qa("video", Oo), qa("matcap", (e, t, n, r) => {
	let i = n, a = new qi(i.texture.image == null ? r.getImage("") : r.image(i.texture.image), i.texture.wrapping ?? 1001, i.texture.minFilter ?? 1008, i.texture.magFilter ?? 1006), o = new G(Ze(i.alpha, r)), s = new Y(i.mode ?? 0), c = new Ui(i.isMask ?? !1), l = new G((R(i.texture.rotation ?? 0, r) ?? 0) * Se.DEG2RAD), u = new va(a, o, s, c, l), d = new W(u.calpha, "f");
	return new $(e, t, i, {
		texture: a,
		alpha: o,
		mode: s,
		isMask: c,
		rotation: l
	}, u, s, d, c, r);
}), qa("displace", (e, t, n, r) => {
	let i = n;
	if (i.displacementType === "noise") {
		let n = new Rt(new l(...i.offset.map((e) => R(e, r) ?? 0))), a = new G(R(i.scale, r) ?? 10), o = new G(R(i.intensity, r) ?? 8), s = new G(R(i.movement, r) ?? 1), c = new Y(i.noiseType ?? 0), u = new Y(i.voronoiStyle ?? 0), d = new G(R(i.smoothness, r) ?? .5), f = new G(R(i.seed, r) ?? 0), p = new G(R(i.highCut, r) ?? 1), m = new G(R(i.lowCut, r) ?? 0), h = new Y(R(i.quality, r) ?? 1), g = new Ia(o, s, n, u, d, f, p, m, h, a, c);
		return new no(e, t, i, {
			offset: n,
			scale: a,
			intensity: o,
			movement: s,
			noiseType: c,
			voronoiStyle: u,
			smoothness: d,
			seed: f,
			highCut: p,
			lowCut: m,
			quality: h
		}, g, r);
	}
	throw Error();
}), qa("cavity", (e, t, n, r) => {
	let i = Et(n, r), a = new G(R(i.ridge, r) ?? 1), o = new G(R(i.valley, r) ?? 1), s = io(i), c = new ua(a, o, Q.normalViewRenderTarget, Q.resolution, s.alpha, s.mode, s.isMask), l = new W(c.calpha, "f");
	return new $(e, t, n, {
		ridge: a,
		valley: o,
		...s
	}, c, s.mode, l, s.isMask, r);
}), qa("dust", (e, t, n, r) => {
	let i = Et(n, r), a = new J(i.color ?? 10323813), o = new G(i.coverage ?? .2), s = new G(i.softness ?? .2), c = new G(i.noiseStrength ?? .2), l = new G(i.noiseScale ?? 1), u = io(i), d = new pa(a, o, s, c, l, u.alpha, u.isMask), f = new W(d.calpha, "f");
	return new $(e, t, n, {
		color: a,
		coverage: o,
		softness: s,
		noiseStrength: c,
		noiseScale: l,
		...u
	}, d, u.mode, f, u.isMask, r);
}), qa("fresnel", (e, t, n, r) => {
	let i = Et(n, r), a = new J(i.color ?? 16777215), o = new G(R(i.bias, r) ?? .1), s = new G(R(i.scale, r) ?? 1), c = new G(R(i.intensity, r) ?? 2), l = new G(R(i.factor, r) ?? 1), u = io(i), d = new ma(a, o, s, c, l, u.alpha, u.mode, u.isMask), f = new W(d.calpha, "f");
	return new $(e, t, n, {
		color: a,
		bias: o,
		scale: s,
		intensity: c,
		factor: l,
		...u
	}, d, u.mode, f, u.isMask, r);
}), qa("gradient", (e, t, n, r) => {
	let i, a, o = Et(n, r), s = new Y(o.gradientType ?? 0), c = new Ui(o.smooth ?? !1);
	o.colors ? i = new Qi(o.colors.length, o.colors) : (i = new Qi(10, new N(0, 0, 0, 1)), i.value[1] = new N(1, 1, 1, 1)), o.steps ? a = new Wi(o.steps.length, o.steps) : (a = new Wi(10, 1), a.value[0] = 0);
	let l = new Lt($a(o.offset ?? new _(0, 0), r)), u = new Lt($a(o.morph ?? new _(0, 0), r)), d = new G(R(o.angle ?? 0, r)), f = io(o), p = new ga(s, c, i, a, l, u, d, f.alpha, f.isMask), m = new W(p.calpha, "f");
	return new $(e, t, n, {
		gradientType: s,
		smooth: c,
		colors: i,
		steps: a,
		offset: l,
		morph: u,
		angle: d,
		...f
	}, p, f.mode, m, f.isMask, r);
}), qa("depth", (e, t, n, r) => {
	let i, a, o = Et(n, r), s = new Y(o.gradientType ?? 0), c = new Ui(o.smooth ?? !1), l = new G(R(o.near, r) ?? 50), u = new G(R(o.far, r) ?? 200), d = new G(o.isVector ?? 1), f = new G(o.isWorldSpace ?? 0), p = new Rt(Qa(o.origin, r)), m = new Rt(Qa(o.direction, r));
	o.colors ? i = new Qi(o.colors.length, o.colors) : (i = new Qi(2, new N(0, 0, 0, 1)), i.value[1] = new N(1, 1, 1, 1)), o.steps ? a = new Wi(o.steps.length, o.steps) : (a = new Wi(2, 1), a.value[0] = 0);
	let h = io(o), g = new ca(s, c, l, u, d, f, p, m, i, a, h.alpha, h.isMask), _ = new W(g.calpha, "f");
	return new $(e, t, n, {
		gradientType: s,
		smooth: c,
		near: l,
		far: u,
		isVector: d,
		isWorldSpace: f,
		origin: p,
		direction: m,
		colors: i,
		steps: a,
		...h
	}, g, h.mode, _, h.isMask, r);
}), qa("normal", (e, t, n, r) => {
	let i = Et(n, r), a = new Rt(i.cnormal ?? new l(1, 1, 1)), o = io(i), s = new ra(a, o.alpha), c = new W(s.calpha, "f");
	return new $(e, t, n, {
		cnormal: a,
		...o
	}, s, o.mode, c, o.isMask, r);
}), qa("noise", (e, t, n, r) => {
	let i = Et(n, r), a = new G(R(i.scale, r) ?? 1), o = new Rt(Qa(i.size ?? new l(100, 100, 100), r)), s = new G(R(i.move, r) ?? 1), c = new Lt($a(i.fA ?? new _(1.7, 9.2), r)), u = new Lt($a(i.fB ?? new _(8.3, 2.8), r)), d = new Lt($a(i.distortion ?? new _(1, 1), r)), f = new zt(i.colorA), p = new zt(i.colorB), m = new zt(i.colorC), h = new zt(i.colorD), g = new Y(i.noiseType ?? 0), v = new Y(i.voronoiStyle ?? 0), y = new G(R(i.highCut, r) ?? 1), b = new G(R(i.lowCut, r) ?? 0), x = new G(R(i.smoothness, r) ?? .5), S = new G(R(i.seed, r) ?? .5), C = new Y(i.quality ?? 1), w = io(i), T = new ya(a, o, s, c, u, d, f, p, m, h, w.alpha, g, w.isMask, v, y, b, x, S, C), ee = new W(T.calpha, "f");
	return new $(e, t, n, {
		scale: a,
		size: o,
		move: s,
		fA: c,
		fB: u,
		distortion: d,
		colorA: f,
		colorB: p,
		colorC: m,
		colorD: h,
		noiseType: g,
		...w,
		voronoiStyle: v,
		highCut: y,
		lowCut: b,
		smoothness: x,
		seed: S,
		quality: C
	}, T, w.mode, ee, w.isMask, r);
}), qa("rainbow", (e, t, n, r, i) => {
	let a = Et(n, r), o = new G(R(a.filmThickness, r) ?? 30), s = new G(R(a.movement, r) ?? 0), c = new Rt(Qa(a.wavelengths, r)), l = new G(R(a.noiseStrength, r) ?? 0), u = new G(R(a.noiseScale, r) ?? 1), d = new Rt(Qa(a.offset, r)), f = io(a), p = !0 === i?.forceRainbowNoise, m = p || nt(a.noiseStrength), h = new Ta(o, s, c, l, u, d, f.alpha, f.isMask, m), g = new W(h.calpha, "f"), _ = new $(e, t, n, {
		filmThickness: o,
		movement: s,
		wavelengths: c,
		noiseStrength: l,
		noiseScale: u,
		offset: d,
		...f
	}, h, f.mode, g, f.isMask, r);
	return _.noiseCompiledIn = m, _.noiseForced = p, _;
}), qa("toon", (e, t, n, r) => {
	let i, a, o = Et(n, r), s = new Y(o.positioning ?? 0);
	o.colors ? i = new Qi(o.colors.length, o.colors) : (i = new Qi(10, new N(0, 0, 0, 1)), i.value[1] = new N(1, 1, 1, 1)), o.steps ? a = new Wi(o.steps.length, o.steps) : (a = new Wi(10, 1), a.value[0] = 0);
	let c = new Rt(Qa(o.source ?? new l(0, 0, 0), r)), u = new Ui(o.isWorldSpace ?? !0), d = new G(R(o.noiseStrength ?? 0, r)), f = new G(R(o.noiseScale ?? 1, r)), p = new zt(o.shadowColor), m = new Rt(Qa(o.offset ?? new l(0, 0, 0), r)), h = io(o), g = new Da(s, i, a, c, u, d, f, p, m, h.alpha), _ = new W(g.calpha, "f");
	return new $(e, t, n, {
		positioning: s,
		colors: i,
		steps: a,
		source: c,
		isWorldSpace: u,
		noiseStrength: d,
		noiseScale: f,
		shadowColor: p,
		offset: m,
		...h
	}, g, h.mode, _, h.isMask, r);
}), qa("outline", (e, t, n, r) => {
	let i = Et(n, r), a = new J(i.outlineColor ?? 16777215), o = new J(i.contourColor ?? 16777215), s = new G(R(i.outlineWidth ?? .1, r)), c = new G(R(i.contourWidth ?? .1, r)), u = new G(R(i.outlineThreshold ?? .1, r)), d = new G(R(i.contourThreshold ?? .1, r)), f = new G(R(i.outlineSmoothing ?? .1, r)), p = new G(R(i.contourFrequency ?? .1, r)), m = new Rt(Qa(i.contourDirection ?? new l(0, 1, 0), r)), h = new Ui(i.positionalLines ?? !1), g = new Ui(i.compensation ?? !0), _ = Q.normalRenderTarget, v = Q.normalRenderTargetDepth, y = Q.pixelRatioNode, b = Q.resolution, x = io(i), S = new xa(a, o, s, c, u, d, f, p, m, h, g, b, _, v, y, x.alpha), C = new W(S.calpha, "f");
	return new $(e, t, n, {
		outlineColor: a,
		contourColor: o,
		outlineWidth: s,
		contourWidth: c,
		outlineThreshold: u,
		contourThreshold: d,
		outlineSmoothing: f,
		contourFrequency: p,
		contourDirection: m,
		positionalLines: h,
		compensation: g,
		...x
	}, S, x.mode, C, x.isMask, r);
}), qa("transmission", (e, t, n, r) => {
	let i = Et(n, r), a = new G(R(i.thickness ?? 10, r)), o = new G(R(i.ior ?? 1.5, r)), s = new G(R(i.roughness ?? .5, r)), c = Q.transmissionSize, l = Q.transmissionRenderTarget, u = Q.transmissionRenderTargetDepth, d = window.innerWidth, f = window.innerHeight, p = d >= f ? new Lt(f / d, 1) : new Lt(1, d / f), m = io(i), h = new Aa(a, o, s, c, l, u, p, m.alpha), g = new W(h.calpha, "f");
	return new $(e, t, n, {
		thickness: a,
		ior: o,
		roughness: s,
		aspectRatio: p,
		...m
	}, h, m.mode, g, m.isMask, r);
});
var ko = !1;
qa("reflection", (e, t, n, r) => {
	ko || (ko = !0, console.warn("[spline] The reflection material layer requires the WebGPU renderer — it renders as invisible on the classic WebGL pipeline."));
	let i = Et(n, r), a = new G(i.blur ?? 0), o = new G(i.thickness ?? .001), s = new Y(i.steps ?? 60), c = new G(i.stepSize ?? .005), l = new Y(i.tracingMode ?? 1), u = io(i), d = new ta(new J(0, 0, 0, 1), new G(0)), f = new W(d.calpha, "f");
	return new $(e, t, n, {
		blur: a,
		thickness: o,
		steps: s,
		stepSize: c,
		tracingMode: l,
		...u
	}, d, u.mode, f, u.isMask, r);
}), qa("pattern", (e, t, n, r) => {
	let i = Et(n, r), a = new Y(i.style ?? 0), o = new Y(i.projection ?? 0), s = new Y([
		"x",
		"y",
		"z"
	].indexOf(i.axis) ?? 0), c = new G(R(i.blending ?? 0, r)), l = new Lt($a(i.offset, r)), u = new zt(i.colorA), d = new zt(i.colorB), f = new Lt($a(i.frequency ?? new _(10, 10), r)), p = new G(R(i.size ?? .5, r)), m = new G(R(i.variation ?? 0, r)), h = new G(R(i.smoothness ?? .5, r)), g = new G(R(i.zigzag ?? 0, r)), v = new G(R(i.rotation ?? 0, r)), y = new Lt($a(i.vertical ?? new _(0, 1), r)), b = new Lt($a(i.horizontal ?? new _(0, 1), r)), x = new Y(i.sides ?? 6), S = io(i), C = new Ca(a, o, s, c, l, u, d, f, p, m, h, g, v, y, b, x, S.alpha, S.isMask), w = new W(C.calpha, "f");
	return new $(e, t, n, {
		style: a,
		projection: o,
		axis: s,
		blending: c,
		offset: l,
		colorA: u,
		colorB: d,
		frequency: f,
		size: p,
		variation: m,
		smoothness: h,
		zigzag: g,
		rotation: v,
		vertical: y,
		horizontal: b,
		sides: x,
		...S
	}, C, S.mode, w, S.isMask, r);
}), qa("vertexColor", (e, t, n, r) => {
	let i = io(Et(n, r)), a = new Ma(i.alpha), o = new W(a.calpha, "f");
	return new $(e, t, n, { ...i }, a, i.mode, o, i.isMask, r);
}), Qe({
	createRootMaterial: (e, t) => new uo(e, t),
	createSharedMaterial: (e, t, n) => new fo(e, t, n)
}), tt((e, t) => e ? ((e = "medium") => {
	if (vo === e) return !1;
	vo = e, X.shadowmap_pars_fragment = ((e) => `\n\n// PCSS implementation based on:\n// https://www.gamedev.net/articles/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/\n// NOTE: This number affects how big the shadow blur can\n// possibly get. Bigger number == bigger blur, but less precise results\n\nconst float  gPenumbraFilterSize = 80.0;\n// Blocker search at half the PCF budget (min 4): the average-blocker-depth\n// estimate feeds the squared/clamped penumbra term, which tolerates far\n// more estimator variance than the visible PCF edge — and the per-frame\n// vogel rotation integrates the residual under TAA. The reduced count is\n// ALSO the vogelDiskSample count in computePenumbra so the sparser spiral\n// still spans the full search radius (classic N with i < N/2 would only\n// cover the inner sqrt(1/2) of the disk and miss far blockers). Mirrors\n// the WebGPU filter's split (splinePCSS.ts blockerSampleCount).\nconst int   gPenumbraSamples = ${Math.max(4, e >> 1)};\nconst int gShadowSamples = ${e};\nconst float gShadowSamplesRpc = 1.0f / float(gShadowSamples);\n\n#ifdef USE_SHADOWMAP\n    #if NUM_DIR_LIGHT_SHADOWS > 0\n\n        uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n        varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\n        struct DirectionalLightShadow {\n            // Field order must match three r185's stock struct\n            // (shadowmap_pars_vertex) or the uniform layout differs between the\n            // vertex and fragment stages. shadowIntensity was added in r185.\n            float shadowIntensity;\n            float shadowBias;\n            float shadowNormalBias;\n            float shadowRadius;\n            vec2 shadowMapSize;\n        };\n\n        uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\n    #endif\n\n    #if NUM_SPOT_LIGHT_SHADOWS > 0\n\n        uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n        varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\n        struct SpotLightShadow {\n            // Field order must match three r185's stock struct\n            // (shadowmap_pars_vertex) or the uniform layout differs between the\n            // vertex and fragment stages. shadowIntensity was added in r185.\n            float shadowIntensity;\n            float shadowBias;\n            float shadowNormalBias;\n            float shadowRadius;\n            vec2 shadowMapSize;\n        };\n\n        uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\n    #endif\n\n    #if NUM_POINT_LIGHT_SHADOWS > 0\n\n        // r185 renders point-light shadows into a cube render target with a\n        // CubeDepthTexture (WebGLShadowMap always uses WebGLCubeRenderTarget\n        // for point lights), so the map binds as a cube sampler — the old\n        // 2D cube-atlas (cubeToUV) layout no longer exists. BasicShadowMap\n        // leaves compareFunction null, so raw depth reads work.\n        uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n        varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\n        struct PointLightShadow {\n            // Field order must match three r185's stock struct.\n            float shadowIntensity;\n            float shadowBias;\n            float shadowNormalBias;\n            float shadowRadius;\n            vec2 shadowMapSize;\n            float shadowCameraNear;\n            float shadowCameraFar;\n        };\n\n        uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\n    #endif\n\n    /*\n    #if NUM_RECT_AREA_LIGHTS > 0\n\n        // TODO (abelnation): create uniforms for area light shadows\n\n    #endif\n    */\n\n${po}\n\nfloat computePenumbra(int index, sampler2D shadowMap, float temporalAngle, float texelSize, vec2 uv, float compare, float texelScalar, float shadowRadius, vec2 dzduv)\n{\n    float penumbra = 1.0;\n    float blockerDepthAvg = 0.0;\n    float blockerCount = 0.0;\n\n    #pragma unroll_loop_start\n    for(int i = 0; i < gPenumbraSamples; i ++)\n    {\n        vec2 offset = (vogelDiskSample(i, gPenumbraSamples, temporalAngle) * texelSize) * texelScalar;\n        float depth = texture2D( shadowMap, uv + offset ).r;\n\n        if(depth < compare + receiverPlaneAdjust(dzduv, offset) + 0.0001)\n        {\n            blockerDepthAvg += depth;\n            blockerCount++;\n        }\n    }\n    #pragma unroll_loop_end\n\n    if (blockerCount > 0.0)\n    {\n        blockerDepthAvg /= blockerCount;\n\n        \n        penumbra = (compare - blockerDepthAvg) / (blockerDepthAvg);\n        penumbra *= penumbra;\n        penumbra *= 200.0 * penumbraSize[min(index, 5 - 1)]; // Magic number that affects how quickly the penumbra grows\n\n        return clamp(penumbra, 0.00, 1.0);\n    }\n    return 0.0;\n}\n\nfloat vogelShadow(int index, sampler2D shadowMap, vec2 uv, float texelSize, float compare, float shadowRadius, vec2 dzduv)\n{\n    float shadow         = 0.0f;\n\n    // NOTE: When using TAA, we should use screen space interleaved gradient noise\n    vec2 halton = haltonSequence[frameIndex];\n    float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy + halton);\n    float temporalAngle  = temporalOffset * PI2;\n\n    float texelScalar = (gPenumbraFilterSize) / (texelSize * 1024.);\n    float penumbra = computePenumbra(index, shadowMap, temporalAngle, texelSize, uv, compare, texelScalar, shadowRadius, dzduv);\n    if (penumbra == -1.0) {\n        return 1.0;\n    }\n\n    #pragma unroll_loop_start\n    for (int i = 0; i < gShadowSamples; i++)\n    {\n        vec2 vogelSample =  vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;\n        // Overall blurring offset\n        vec2 offset = vogelSample * (shadowRadius * 2.);\n\n        // Penumbra offset\n        offset += vogelSample * (penumbra * texelScalar);\n\n        shadow += step( compare + receiverPlaneAdjust(dzduv, offset), texture2D( shadowMap, uv + offset ).r );\n    }\n    #pragma unroll_loop_end\n\n    return shadow * gShadowSamplesRpc;\n}\n\n\n    float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\n        // r185: shadow maps are DepthTextures bound without compare mode\n        // (BasicShadowMap), so depth is read directly from .r rather than from\n        // an RGBA-packed encoding.\n        return step( compare, texture2D( depths, uv ).r );\n\n    }\n\n    float textureCubeCompare( samplerCube depths, vec3 dir, float compare ) {\n\n        float depth = textureCube( depths, dir ).r;\n\n        #ifdef USE_REVERSED_DEPTH_BUFFER\n\n            depth = 1.0 - depth;\n\n        #endif\n\n        return step( compare, depth );\n\n    }\n\n    vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\n        return unpackRGBATo2Half( texture2D( shadow, uv ) );\n\n    }\n\n    float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\n        float occlusion = 1.0;\n\n        vec2 distribution = texture2DDistribution( shadow, uv );\n\n        float hard_shadow = step( compare , distribution.x ); // Hard Shadow\n\n        if (hard_shadow != 1.0 ) {\n\n            float distance = compare - distribution.x ;\n            float variance = max( 0.00000, distribution.y * distribution.y );\n            float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality\n            softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed\n            occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\n        }\n        return occlusion;\n\n    }\n\n    float getShadow( int i, sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\n        float shadow = 1.0;\n\n        shadowCoord.xyz /= shadowCoord.w;\n        shadowCoord.z += shadowBias;\n\n        // Receiver-plane depth gradient — derivatives taken BEFORE the\n        // frustum branch (well-defined across the quad) of the projected\n        // coord, so the vogel taps can slope-correct their compares.\n        vec2 dzduv = receiverPlaneDepthBias( dFdx( shadowCoord.xyz ), dFdy( shadowCoord.xyz ) );\n\n        // if ( something && something ) breaks ATI OpenGL shader compiler\n        // if ( all( something, something ) ) using this instead\n\n        bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n        bool inFrustum = all( inFrustumVec );\n\n        bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n        bool frustumTest = all( frustumTestVec );\n\n        if ( frustumTest ) {\n\n        // SHADOWMAP_TYPE_BASIC included: on r185 the renderer must use\n        // BasicShadowMap (PCFShadowMap binds the depth texture as a\n        // sampler2DShadow with hardware compare, which this custom PCSS\n        // sampling can't read from), so BASIC is the define our PCSS path\n        // now runs under.\n        #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC )\n\n            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n            return vogelShadow(i, shadowMap, shadowCoord.xy, texelSize.x, shadowCoord.z, shadowRadius, dzduv );\n\n        #elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n            float dx = texelSize.x;\n            float dy = texelSize.y;\n\n            vec2 uv = shadowCoord.xy;\n            vec2 f = fract( uv * shadowMapSize + 0.5 );\n            uv -= f * texelSize;\n\n            shadow = (\n                texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n                texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n                texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n                texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n                mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n                     texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n                     f.x ) +\n                mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n                     texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n                     f.x ) +\n                mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n                     texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n                     f.y ) +\n                mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n                     texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n                     f.y ) +\n                mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n                          texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n                          f.x ),\n                     mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n                          texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n                          f.x ),\n                     f.y )\n            ) * ( 1.0 / 9.0 );\n\n        #elif defined( SHADOWMAP_TYPE_VSM )\n\n            shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n        #else // no percentage-closer filtering:\n\n            shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\n        #endif\n\n        }\n\n        return shadow;\n\n    }\n\n    float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\n        float shadow = 1.0;\n        // Offset magnitude matches the pre-r185 2D cube-atlas texel size so the\n        // blur radius is visually unchanged.\n        vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\n        // for point lights, the uniform @vShadowCoord is re-purposed to hold\n        // the vector from the light to the world-space position of the fragment.\n        vec3 lightToPosition = shadowCoord.xyz;\n\n        // r185 cube shadow maps store perspective depth along the sampled\n        // face's view axis (not radial distance): view-space depth is the\n        // largest component of the light-to-fragment vector.\n        vec3 absVec = abs( lightToPosition );\n        float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n\n        if ( viewSpaceZ - shadowCameraFar > 0.0 || viewSpaceZ - shadowCameraNear < 0.0 ) {\n\n            return shadow;\n\n        }\n\n        // viewZ to perspective depth\n        float compare = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n        compare += shadowBias;\n\n        // bd3D = base direction 3D\n        vec3 bd3D = normalize( lightToPosition );\n\n        vec2 halton = haltonSequence[frameIndex];\n        float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy + halton);\n        float temporalAngle  = temporalOffset * PI2;\n\n        #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_VSM ) || defined( SHADOWMAP_TYPE_BASIC )\n            for (int i = 0; i < gShadowSamples; i++) {\n                vec2 vogelSample = vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;\n\n                // Overall blurring offset\n                vec3 offset = vec3(vogelSample.x, vogelSample.y, -vogelSample.x) * (shadowRadius + 5.);\n\n                // NOTE: Removed for now\n                // Penumbra offset\n                //offset += vec3(vogelSample.x, vogelSample.y, vogelSample.y)  * (penumbra * gPenumbraFilterSize);\n\n                shadow += textureCubeCompare( shadowMap, bd3D + offset, compare );\n\n            }\n            return shadow * gShadowSamplesRpc;\n\n        #elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n            for (int i = 0; i < 16; i++) {\n                vec2 vogelSample = vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;\n\n                // Overall blurring offset\n                vec3 offset = vec3(vogelSample.x, vogelSample.y, -vogelSample.x) * (shadowRadius + 5.);\n\n                shadow += textureCubeCompare( shadowMap, bd3D + offset, compare );\n\n            }\n            return shadow * (1.0 / 16.0);\n        #else // no percentage-closer filtering\n\n            return textureCubeCompare( shadowMap, bd3D, compare );\n\n        #endif\n\n    }\n\n#endif\n`)(((e) => {
		switch (e) {
			case "low": return 8;
			case "medium":
			default: return 16;
			case "high": return 32;
		}
	})(e));
	let t = ho.slice();
	t = t.replace("getShadow( spotShadowMap[ i ]", "getShadow( UNROLLED_LOOP_INDEX + 3, spotShadowMap[ i ]"), t = t.replace("getShadow( directionalShadowMap[ i ]", "getShadow( UNROLLED_LOOP_INDEX, directionalShadowMap[ i ]"), X.lights_fragment_begin = t;
	let n = go.slice();
	return n = n.replaceAll("getShadow(", "getShadow( UNROLLED_LOOP_INDEX, "), X.shadowmask_pars_fragment = n, !0;
})(t) : (() => {
	if (vo === null || vo === "off") {
		let e = vo === null;
		return vo = "off", e && (X.shadowmap_pars_fragment = yo()), !1;
	}
	return vo = "off", X.shadowmap_pars_fragment = yo(), X.lights_fragment_begin = ho, X.shadowmask_pars_fragment = go, !0;
})()), L(() => {
	let e = new ke();
	return e.depthWrite = !1, e.opacity = .5, e.onBeforeCompile = (e) => {
		e.fragmentShader = "layout(location = 1) out vec4 gVelocity;\n" + e.fragmentShader.replace("void main() {", "void main() {\n	gVelocity = vec4(0.0);");
	}, e;
});
var Ao = "\nvec3 normal = (normalize(vNormal)).rgb;\n\nfloat contrastDepth = (gl_FragCoord.z - 0.5) * depthContrast + 0.5;\n\nvec3 resultColor = mix(mix(vColor, normal, 0.2), vec3(contrastDepth), 0.4);\n", jo = "\nvec3 nv = normalize(vNormalView);\nif (!gl_FrontFacing) nv = -nv;\n", Mo = `\nuniform float depthContrast;\nvarying vec3 vNormal;\nvarying vec3 vNormalView;\nflat in vec3 vColor;\nvoid main()\n{\n${jo}\ngl_FragColor = vec4(nv, vColor.r);\n}\n`, No = `\nlayout(location = 1) out vec4 gViewNormal;\nuniform float depthContrast;\nvarying vec3 vNormal;\nvarying vec3 vNormalView;\nflat in vec3 vColor;\nvoid main()\n{\n${Ao}\ngl_FragColor = vec4(resultColor, vColor.r);\n\n${jo}\ngViewNormal = vec4(nv, vColor.r);\n}\n`, Po = { value: 1 }, Fo = (e) => new E({
	vertexShader: "\nattribute vec3 randomColor;\nvarying vec3 vNormal;\nvarying vec3 vNormalView;\nflat out vec3 vColor;\n#include <skinning_pars_vertex>\n#include <morphtarget_pars_vertex>\n\nvoid main()\n{\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\nvec3 transformed = vec3(position);\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n\n\n\n\n\nvec4 localPosition = vec4(transformed, 1.0);\n#ifdef USE_INSTANCING\nlocalPosition = instanceMatrix * localPosition;\nobjectNormal = mat3(instanceMatrix) * objectNormal;\n#endif\n\nvNormal = normal;\nvNormalView = normalMatrix * objectNormal;\nvColor = randomColor;\ngl_Position = projectionMatrix * (modelViewMatrix * localPosition);\n}\n",
	fragmentShader: e,
	uniforms: { depthContrast: Po }
}), Io = Fo(`\nuniform float depthContrast;\nvarying vec3 vNormal;\nvarying vec3 vNormalView;\nflat in vec3 vColor;\nvoid main()\n{\n${Ao}\ngl_FragColor = vec4(resultColor, vColor.r);\n}\n`), Lo = Fo(Mo), Ro = Fo(No), zo = "float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\n	if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\n		return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n	}\n\n	return 1.0;\n\n}", Bo = /float getDistanceAttenuation\([^)]*\)\s*\{[\s\S]*?\n\}/, Vo = class extends E {
	constructor() {
		super({
			name: "PassthroughMaterial",
			uniforms: { inputBuffer: new C(null) },
			blending: 0,
			depthWrite: !1,
			depthTest: !1,
			vertexShader: "#define GLSLIFY 1\nvarying vec2 vUv;void main(){gl_Position=vec4(position.xy,1.0,1.0);vUv=position.xy*0.5+0.5;}",
			fragmentShader: "#define GLSLIFY 1\nlayout(location=1)out vec4 gVelocity;varying vec2 vUv;uniform sampler2D inputBuffer;void main(){gl_FragColor=texture2D(inputBuffer,vUv);gVelocity=vec4(0.0);}"
		});
	}
	set inputBuffer(e) {
		this.uniforms.inputBuffer.value = e;
	}
}, Ho = class extends ht {
	constructor() {
		super("TAAResolvePass"), this.MRTCompatible = !0, this.needsSwap = !1, this.passThroughMaterial = new Vo(), this.resolutionVector = new _(), this.resolveMaterial = new E({
			name: "TAAResolveMaterial",
			uniforms: {
				inputBuffer: new C(null),
				historyBuffer: new C(null),
				velocityBuffer: new C(null),
				depthBuffer: new C(null),
				resolution: new C(new _())
			},
			blending: 0,
			depthWrite: !1,
			depthTest: !1,
			vertexShader: "#define GLSLIFY 1\nvarying vec2 vUv;varying vec2 vTexCoords[9];uniform vec2 resolution;void main(){vUv=position.xy*0.5+0.5;vec2 texelSize=vec2(1.0)/resolution;vTexCoords[0]=vUv+vec2(-texelSize.x,-texelSize.y);vTexCoords[1]=vUv+vec2(0.0,-texelSize.y);vTexCoords[2]=vUv+vec2(texelSize.x,-texelSize.y);vTexCoords[3]=vUv+vec2(-texelSize.x,0.0);vTexCoords[4]=vUv+vec2(0.0,0.0);vTexCoords[5]=vUv+vec2(texelSize.x,0.0);vTexCoords[6]=vUv+vec2(-texelSize.x,texelSize.y);vTexCoords[7]=vUv+vec2(0.0,texelSize.y);vTexCoords[8]=vUv+vec2(texelSize.x,texelSize.y);gl_Position=vec4(position.xy,1.0,1.0);}",
			fragmentShader: "#define GLSLIFY 1\n#include <common>\nvarying vec2 vUv;varying vec2 vTexCoords[9];uniform sampler2D inputBuffer;uniform sampler2D historyBuffer;uniform sampler2D velocityBuffer;uniform sampler2D depthBuffer;uniform vec2 resolution;\n#define USE_YCOCG\n#define USE_CATMULL_ROM\nconst float feedback_min=0.5;const float feedback_max=0.95;vec3 RGB_YCoCg(vec3 c){return vec3(c.x/4.0+c.y/2.0+c.z/4.0,c.x/2.0-c.z/2.0,-c.x/4.0+c.y/2.0-c.z/4.0);}vec3 YCoCg_RGB(vec3 c){return clamp(vec3(c.x+c.y-c.z,c.x+c.z,c.x-c.y-c.z),vec3(0.0),vec3(1.0));}vec4 sample_color(sampler2D tex,vec2 uv){\n#ifdef USE_YCOCG\nvec4 c=texture(tex,uv);return vec4(RGB_YCoCg(c.rgb),c.a);\n#else\nreturn texture(tex,uv);\n#endif\n}vec4 sample_catmull_rom(sampler2D tex,vec2 uv,vec2 texSize){vec2 samplePos=uv*texSize;vec2 texPos1=floor(samplePos-0.5)+0.5;vec2 f=samplePos-texPos1;vec2 w0=f*(-0.5+f*(1.0-0.5*f));vec2 w1=1.0+f*f*(-2.5+1.5*f);vec2 w2=f*(0.5+f*(2.0-1.5*f));vec2 w3=f*f*(-0.5+0.5*f);vec2 w12=w1+w2;vec2 offset12=w2/(w1+w2);vec2 texPos0=texPos1-1.0;vec2 texPos3=texPos1+2.0;vec2 texPos12=texPos1+offset12;texPos0/=texSize;texPos3/=texSize;texPos12/=texSize;vec4 result=vec4(0.0);result+=texture2D(tex,vec2(texPos12.x,texPos0.y))*w12.x*w0.y;result+=texture2D(tex,vec2(texPos0.x,texPos12.y))*w0.x*w12.y;result+=texture2D(tex,vec2(texPos12.x,texPos12.y))*w12.x*w12.y;result+=texture2D(tex,vec2(texPos3.x,texPos12.y))*w3.x*w12.y;result+=texture2D(tex,vec2(texPos12.x,texPos3.y))*w12.x*w3.y;return result;}vec3 choose_motion_vector(){\n#ifdef CHOOSE_LONGEST_MOTION_VECTOR\nfloat longest=-1.0;vec3 v_choose=vec3(-1.0);for(int i=0;i<9;i++){vec3 v=texture2D(velocityBuffer,vTexCoords[i]).rgb;float l=length(v.xy);if(l>longest){longest=l;v_choose=v;}}return v_choose;\n#else\nfloat closest_depth=1000.0;vec2 closest_uv_offset=vec2(0.0);for(int i=0;i<9;i++){float neighbor_depth=texture2D(depthBuffer,vTexCoords[i]).r;if(neighbor_depth<closest_depth){closest_uv_offset=vTexCoords[i];closest_depth=neighbor_depth;}}return texture2D(velocityBuffer,closest_uv_offset).rgb;\n#endif\n}vec4 clipAabb(vec3 aabb_min,vec3 aabb_max,vec4 avg,vec4 input_texel){const float FLT_EPS=0.00000001;vec3 p_clip=0.5*(aabb_max+aabb_min);vec3 e_clip=0.5*(aabb_max-aabb_min)+FLT_EPS;vec4 v_clip=input_texel-vec4(p_clip,avg.w);vec3 v_unit=v_clip.xyz/e_clip;vec3 a_unit=abs(v_unit);float ma_unit=max(a_unit.x,max(a_unit.y,a_unit.z));if(ma_unit>1.0){return vec4(p_clip,avg.w)+v_clip/ma_unit;}else{return input_texel;}}vec3 clip_aabb_variance(in vec3 cOld,in vec3 cNew,in vec3 centre,in vec3 halfSize){if(all(lessThanEqual(abs(cOld-centre),halfSize))){return cOld;}vec3 dir=(cNew-cOld);vec3 near=centre-sign(dir)*halfSize;vec3 tAll=(near-cOld)/dir;float t=0.0001;for(int i=0;i<3;i++){if(tAll[i]>=0.0&&tAll[i]<t){t=tAll[i];}}if(t>=0.0001){return cOld;}return cOld+dir*t;}void main(){vec3 v=choose_motion_vector();vec2 velocity=v.rg;vec2 previousPixelPos=vUv-velocity;vec4 currentColor=sample_color(inputBuffer,vUv);\n#ifdef USE_CATMULL_ROM\nvec4 previousColor=sample_catmull_rom(historyBuffer,previousPixelPos,resolution);\n#else\nvec4 previousColor=sample_color(historyBuffer,previousPixelPos);\n#endif\n#ifdef USE_YCOCG\npreviousColor=vec4(RGB_YCoCg(previousColor.rgb),previousColor.a);\n#endif\nvec4 ctl=sample_color(inputBuffer,vTexCoords[0]);vec4 ctc=sample_color(inputBuffer,vTexCoords[1]);vec4 ctr=sample_color(inputBuffer,vTexCoords[2]);vec4 cml=sample_color(inputBuffer,vTexCoords[3]);vec4 cmc=sample_color(inputBuffer,vTexCoords[4]);vec4 cmr=sample_color(inputBuffer,vTexCoords[5]);vec4 cbl=sample_color(inputBuffer,vTexCoords[6]);vec4 cbc=sample_color(inputBuffer,vTexCoords[7]);vec4 cbr=sample_color(inputBuffer,vTexCoords[8]);vec4 cmin=min(ctl,min(ctc,min(ctr,min(cml,min(cmc,min(cmr,min(cbl,min(cbc,cbr))))))));vec4 cmax=max(ctl,max(ctc,max(ctr,max(cml,max(cmc,max(cmr,max(cbl,max(cbc,cbr))))))));vec4 cavg=(ctl+ctc+ctr+cml+cmc+cmr+cbl+cbc+cbr)/9.0;vec4 cmin5=min(ctc,min(cml,min(cmc,min(cmr,cbc))));vec4 cmax5=max(ctc,max(cml,max(cmc,max(cmr,cbc))));vec4 cavg5=(ctc+cml+cmc+cmr+cbc)/5.0;cmin=0.5*(cmin+cmin5);cmax=0.5*(cmax+cmax5);cavg=0.5*(cavg+cavg5);\n#ifdef USE_YCOCG\nvec2 chroma_extent=vec2(0.25*0.5*(cmax.r-cmin.r));vec2 chroma_center=currentColor.gb;cmin.yz=chroma_center-chroma_extent;cmax.yz=chroma_center+chroma_extent;cavg.yz=chroma_center;\n#endif\nvec4 previousColorClipped=clamp(previousColor,cmin,cmax);\n#ifdef LUMINANCE_DIFFERENCES\n#ifdef USE_YCOCG\nfloat lum0=currentColor.r;float lum1=previousColorClipped.r;\n#else\nfloat lum0=luminance(currentColor.rgb);float lum1=luminance(previousColorClipped.rgb);\n#endif\nfloat unbiased_diff=abs(lum0-lum1)/max(lum0,max(lum1,0.2));float unbiased_weight=1.0-unbiased_diff;float unbiased_weight_sqr=unbiased_weight*unbiased_weight;float k_feedback=mix(feedback_min,feedback_max,unbiased_weight_sqr);vec4 result=mix(currentColor,previousColorClipped,vec4(k_feedback));\n#else\nconst float alpha=0.1;vec4 result=mix(currentColor,previousColorClipped,1.0-alpha);\n#endif\n#ifdef USE_YCOCG\ngl_FragColor=vec4(YCoCg_RGB(result.rgb).rgb,result.a);\n#else\ngl_FragColor=result;\n#endif\n}"
		}), this.historyRenderTarget = new e(1024, 1024, {
			minFilter: g,
			stencilBuffer: !1,
			depthBuffer: !1
		}), this.historyRenderTarget.texture.name = "TAA.History", this.resultRenderTarget = new e(1024, 1024, {
			minFilter: g,
			stencilBuffer: !1,
			depthBuffer: !1
		}), this.resultRenderTarget.texture.name = "TAA.Output";
	}
	setSize(e, t) {
		this.historyRenderTarget.setSize(e, t), this.resultRenderTarget.setSize(e, t);
	}
	render(e, t) {
		this.fullscreenMaterial = this.resolveMaterial, this.resolveMaterial.uniforms.inputBuffer.value = t.textures[0], this.resolveMaterial.uniforms.velocityBuffer.value = t.textures[1], this.resolveMaterial.uniforms.depthBuffer.value = t.depthTexture, this.resolveMaterial.uniforms.historyBuffer.value = this.historyRenderTarget.texture, this.resolveMaterial.uniforms.resolution.value.set(t.width, t.height), e.setRenderTarget(this.resultRenderTarget), e.render(this.scene, this.camera), this.fullscreenMaterial = this.passThroughMaterial, this.passThroughMaterial.inputBuffer = this.resultRenderTarget.texture, e.setRenderTarget(this.historyRenderTarget), e.render(this.scene, this.camera);
		let n = this.renderToScreen ? null : t;
		this.fullscreenMaterial = this.passThroughMaterial, this.passThroughMaterial.inputBuffer = this.resultRenderTarget.texture, e.setRenderTarget(n), e.render(this.scene, this.camera);
	}
	dispose() {
		super.dispose(), this.resultRenderTarget.dispose(), this.historyRenderTarget.dispose(), this.resolveMaterial.dispose(), this.passThroughMaterial.dispose();
	}
}, Uo = class extends ht {
	constructor(e, t, n) {
		super("TransmissionPass", void 0, t), this.MRTCompatible = !0, this.depthPass = new z(e, t, { renderTarget: n.transmissionDepthTarget }), this.passThroughMaterial = new Vo(), this.splineScene = e, this.needsSwap = !1;
	}
	updatePasses(e) {
		this.passThroughMaterial.dispose(), this.passThroughMaterial = new Vo(), this.depthPass.dispose(), this.depthPass = new z(this.splineScene, this.camera, { renderTarget: e.transmissionDepthTarget });
	}
	setCamera(e) {
		this.camera = e;
	}
	setScene(e) {
		this.splineScene = e;
	}
	render(e, t, n) {
		let r = this.camera.layers.mask, i = e;
		i.setRenderTarget(i.transmissionRenderTarget), this.fullscreenMaterial = this.passThroughMaterial, this.passThroughMaterial.inputBuffer = t.textures[0], i.clear(), i.render(this.scene, this.camera), i.shadowMap.needsUpdate = !1, i.shadowMap.autoUpdate = !1, this.camera.layers.disable(3), this.depthPass.render(e, t, n);
		let a = this.renderToScreen ? null : t;
		this.camera.layers.set(3), e.setRenderTarget(a), e.render(this.splineScene, this.camera), this.camera.layers.mask = r;
	}
	dispose() {
		super.dispose(), this.depthPass?.renderPass.dispose(), this.depthPass.dispose(), this.passThroughMaterial.dispose(), this.depthPass = void 0, this.passThroughMaterial = void 0, this.splineScene = void 0, this.scene = void 0, this.camera = void 0;
	}
}, Wo = new ee(), Go = new E({
	transparent: !0,
	vertexShader: "\n        void main() {\n            gl_Position = vec4(0.0);\n        }\n    ",
	fragmentShader: "\n        layout(location = 1) out vec4 gVelocity;\n\n        void main() {\n            gl_FragColor = vec4(0.0);\n			gVelocity = vec4(0.0);\n        }\n    "
}), Ko = class extends ht {
	constructor(e, t, n) {
		super("OpaquePass", t ?? Wo, n), this.MRTCompatible = !0, this.originalMaterials = [], this.hasTransmissionPass = !1, this.clear = !0, this.clearColorOnly = !1, this.clearDepth = !1, this.needsSwap = !1, this.MRTCompatible = e;
	}
	setCamera(e) {
		this.camera = e;
	}
	setScene(e) {
		this.scene = e ?? Wo;
	}
	getScene() {
		return this.scene;
	}
	render(e, t) {
		this.camera.layers.enable(3), this.hasTransmissionPass && (this.originalMaterials.length = 0, this.scene.traverse((e) => {
			e.layers.isEnabled(3) && e instanceof Xe && (this.originalMaterials.push([e, e.material]), e.material = Go);
		}), !0 !== e.manageShadowUpdates && (e.shadowMap.needsUpdate = !0, e.shadowMap.autoUpdate = !0)), this.camera.layers.enable(8), this.camera.layers.enable(4);
		let n = this.renderToScreen ? null : t;
		e.setRenderTarget(n), this.clearColorOnly && e.clear(!0, !1, !0), this.clear && e.clear(), e.render(this.scene, this.camera), this.clearDepth && e.clear(!1, !0, !1), this.hasTransmissionPass && this.originalMaterials.forEach((e) => {
			e[0].material = e[1];
		});
	}
	dispose() {
		super.dispose(), this.originalMaterials.length = 0, this.scene = void 0, this.camera = void 0;
	}
}, qo = class {
	constructor(e, { depthBuffer: t = !0, stencilBuffer: n = !1, multisampling: r = 0, frameBufferType: i = 0 } = {}) {
		this.renderer = e, this.helperStartIndex = 0, this.copyPass = new yt(), this.depthTexture = null, this.timer = new ft(), this._width = 1, this._height = 1, this.passes = [], this.helperPasses = [], this.autoRenderToScreen = !0, this.inputBuffer = this.createBuffer(t, n, i, r, !0, "input buffer mrt"), this.inputBufferSingle = this.createBuffer(t, n, i, r, !1, " input buffer single"), this.inputBufferSingle.texture.dispose(), this.inputBufferSingle.depthTexture.dispose(), this.inputBufferSingle.texture = this.inputBuffer.textures[0], this.inputBufferSingle.depthTexture = this.inputBuffer.depthTexture, this.outputBuffer = this.inputBuffer.clone(), this.outputBuffer.name = "output buffer mrt", this.outputBufferSingle = this.createBuffer(t, n, i, r, !1, "output buffer single"), this.outputBufferSingle.texture.dispose(), this.outputBufferSingle.depthTexture.dispose(), this.outputBufferSingle.texture = this.outputBuffer.textures[0], this.outputBufferSingle.depthTexture = this.outputBuffer.depthTexture, this.setRenderer(e);
	}
	get multisampling() {
		return this.inputBuffer.samples || 0;
	}
	set multisampling(e) {
		let t = this.inputBuffer, n = this.multisampling;
		n > 0 && e > 0 ? (this.inputBuffer.samples = e, this.outputBuffer.samples = e, this.inputBuffer.dispose(), this.outputBuffer.dispose()) : n !== e && (this.inputBuffer.dispose(), this.outputBuffer.dispose(), console.log("creating new input buffer"), this.inputBuffer = this.createBuffer(t.depthBuffer, t.stencilBuffer, t.texture.type, e, !0, "new input buffer"), this.inputBuffer.depthTexture = this.depthTexture, this.outputBuffer = this.inputBuffer.clone());
	}
	getTimer() {
		return this.timer;
	}
	getRenderer() {
		return this.renderer;
	}
	setRenderer(e) {
		if (this.renderer = e, e !== null) {
			let t = e.getSize(new _()), n = e.getContext().getContextAttributes()?.alpha ?? !1, r = this.inputBuffer.textures[0].type;
			r === 1009 && e.outputColorSpace === "srgb" && (this.inputBuffer.textures[0].colorSpace = "srgb", this.outputBuffer.textures[0].colorSpace = "srgb", this.inputBuffer.dispose(), this.outputBuffer.dispose()), e.autoClear = !1, this.setSize(t.width, t.height, !1);
			for (let t of this.passes) t.initialize(e, n, r);
		}
	}
	replaceRenderer(e, t = !0) {
		let n = this.renderer, r = n.domElement.parentNode;
		return this.setRenderer(e), t && r !== null && (r.removeChild(n.domElement), r.appendChild(e.domElement)), n;
	}
	createDepthTexture() {
		let e = this.depthTexture = new Ee(this._width, this._height);
		return this.inputBuffer.depthTexture = e, this.inputBuffer.stencilBuffer ? (e.format = Fe, e.type = Ce) : e.type = ae, e;
	}
	deleteDepthTexture() {
		if (this.depthTexture !== null) {
			this.depthTexture.dispose(), this.depthTexture = null, this.inputBuffer.depthTexture = null, this.inputBuffer.dispose();
			for (let e of this.passes) e.setDepthTexture(null);
		}
	}
	createBuffer(t, n, r, i, o, s) {
		let c, l = this.renderer, u = l === null ? new _() : l.getDrawingBufferSize(new _()), d = {
			minFilter: g,
			magFilter: g,
			wrapS: k,
			wrapT: k,
			stencilBuffer: n,
			depthBuffer: t
		};
		i > 0 ? (c = new e(u.width, u.height, d), c.samples = i) : (o ? (c = new e(u.width, u.height, {
			...d,
			count: 2
		}), c.textures[1].type = a) : c = new e(u.width, u.height, d), c.depthTexture = new Ee(2048, 2048), c.depthTexture.type = Be);
		let f = c.textures.length > 1;
		return r === 1009 && l !== null && l.outputColorSpace === "srgb" && (f ? c.textures.forEach((e) => e.colorSpace = "srgb") : c.texture.colorSpace = "srgb"), f ? c.textures.forEach((e, t) => {
			e.name = `EffectComposer.Buffer ${o} ${t}`, e.generateMipmaps = !1;
		}) : (c.texture.name = `EffectComposer.Buffer ${o}`, c.texture.generateMipmaps = !1), c.name = s, c;
	}
	addPass(e, t) {
		let n, r = this.passes, i = this.renderer, a = i.getDrawingBufferSize(new _()), o = i.getContext().getContextAttributes()?.alpha ?? !1;
		if (e.MRTCompatible && (n = this.inputBuffer.textures[0].type), e.MRTCompatible || (n = this.inputBuffer.texture.type), e.setRenderer(i), e.setSize(a.width, a.height), e.initialize(i, o, n), this.autoRenderToScreen && (r.length > 0 && (r[r.length - 1].renderToScreen = !1), e.renderToScreen && (this.autoRenderToScreen = !1)), t === void 0 ? r.push(e) : r.splice(t, 0, e), this.autoRenderToScreen && (r[r.length - 1].renderToScreen = !0), e.needsDepthTexture || this.depthTexture !== null) {
			if (this.depthTexture === null) {
				let t = this.createDepthTexture();
				for (e of r) e.setDepthTexture(t);
			} else e.setDepthTexture(this.depthTexture);
		}
	}
	setHelperStartIndex(e) {
		this.helperStartIndex = e;
	}
	removePass(e) {
		let t = this.passes, n = t.indexOf(e);
		n !== -1 && t.splice(n, 1).length > 0 && (this.depthTexture !== null && (t.reduce((e, t) => e || t.needsDepthTexture, !1) || e.getDepthTexture() === this.depthTexture && e.setDepthTexture(null)), this.autoRenderToScreen && n === t.length && (e.renderToScreen = !1, t.length > 0 && (t[t.length - 1].renderToScreen = !0)));
	}
	removeAllPasses() {
		let e = this.passes;
		e.length > 0 && (this.autoRenderToScreen && (e[e.length - 1].renderToScreen = !1), this.passes = []);
	}
	render(e) {
		let t, n, r, i, a = this.renderer, o = this.copyPass, s = this.inputBuffer, c = this.outputBuffer, l = this.inputBufferSingle, u = this.outputBufferSingle, d = !1;
		e === void 0 && (e = this.timer.update().getDelta());
		for (let f of this.passes) f.enabled && (f.MRTCompatible ? f.render(a, s, c, e, d) : f.render(a, l, u, e, d), f.needsSwap && (d && (o.renderToScreen = f.renderToScreen, t = a.getContext(), n = a.state.buffers.stencil, n.setFunc(t.NOTEQUAL, 1, 4294967295), o.render(a, s, c, e, d), n.setFunc(t.EQUAL, 1, 4294967295)), r = s, i = l, s = c, l = u, c = r, u = i), f instanceof St ? d = !0 : f instanceof xt && (d = !1));
	}
	setSize(e, t, n) {
		let r = this.renderer;
		if (this._width = e, this._height = t, e === void 0 || t === void 0) {
			let n = r.getSize(new _());
			e = n.width, t = n.height;
		}
		r.setSize(e, t, n);
		let i = r.getDrawingBufferSize(new _());
		this.inputBuffer.setSize(i.width, i.height), this.outputBuffer.setSize(i.width, i.height), this.inputBufferSingle.setSize(i.width, i.height), this.outputBufferSingle.setSize(i.width, i.height);
		for (let e of this.passes) e.setSize(i.width, i.height);
	}
	reset() {
		let e = this.timer.isAutoResetEnabled();
		this.dispose(), this.autoRenderToScreen = !0, this.timer.setAutoResetEnabled(e);
	}
	dispose() {
		for (let e of this.passes) e.dispose();
		this.passes = [], this.inputBuffer !== null && this.inputBuffer.dispose(), this.outputBuffer !== null && this.outputBuffer.dispose(), this.inputBufferSingle !== null && this.inputBufferSingle.dispose(), this.outputBufferSingle !== null && this.outputBufferSingle.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose();
	}
}, Jo = new E({
	name: "CombineMaterial",
	uniforms: {
		inputBufferA: new C(null),
		inputBufferB: new C(null)
	},
	blending: 0,
	depthWrite: !1,
	depthTest: !1,
	vertexShader: "\nvarying vec2 vUv;\nvoid main() {\n    gl_Position = vec4(position.xy, 1.0, 1.0);\n    vUv = position.xy * 0.5 + 0.5;\n}\n",
	fragmentShader: "\n    varying vec2 vUv;\n    uniform sampler2D inputBufferA;\n    uniform sampler2D inputBufferB;\n\n    \n    layout(location = 1) out vec4 gVelocity;\n\n    void main() {\n	vec4 resA = texture2D(inputBufferA, vUv);\n	vec4 resB = texture2D(inputBufferB, vUv);\n    float a = resA.a + resB.a * ( 1.0 - resA.a );\n\n	vec4 res;\n	res.rgb =  resA.rgb + (resB.rgb * (1.0 - resA.a));\n	res.a = resA.a + resB.a * (1.0 - resA.a);\n	gl_FragColor = res;\n    gVelocity = vec4(0.0);\n    }\n"
}), Yo = class extends ht {
	constructor(t) {
		super("HelperPass", void 0, t), this.MRTCompatible = !1, this._width = 10, this._height = 10, this.fullscreenMaterial = Jo, this.helperPass = new Ko(!1, void 0, this.camera), this.helperPass.hasTransmissionPass = !1, this.helperPass.clear = !1, this.helperPass.renderToScreen = !1, this.helperPassOnTop = new Ko(!1, void 0, this.camera), this.helperPassOnTop.hasTransmissionPass = !1, this.helperPassOnTop.clear = !1, this.helperPassOnTop.renderToScreen = !1, this.rt = new e(10, 10, {
			minFilter: g,
			magFilter: g,
			wrapS: k,
			wrapT: k,
			depthBuffer: !0
		});
	}
	_ensureEffectPass() {
		if (this.effectPass) return this.effectPass;
		let e = new _t({
			preset: ut.LOW,
			edgeDetectionMode: gt.COLOR
		});
		return e.addEventListener("load", () => this.onSmaaTexturesLoaded?.()), this.effectPass = new vt(this.camera, e), this._initializeArgs && this.effectPass.initialize(...this._initializeArgs), this.effectPass.setSize(this._width, this._height), this.effectPass;
	}
	setSize(e, t) {
		this._width = e, this._height = t, this.rt.setSize(e, t), this.effectPass?.setSize(e, t);
	}
	set sceneHelpers(e) {
		this.helperPass.setScene(e);
	}
	get sceneHelpers() {
		return this.helperPass.getScene();
	}
	set sceneHelpersOnTop(e) {
		this.helperPassOnTop.setScene(e);
	}
	get sceneHelpersOnTop() {
		return this.helperPassOnTop.getScene();
	}
	setCamera(e) {
		this.helperPass.setCamera(e), this.helperPassOnTop.setCamera(e);
	}
	initialize(e, t, n) {
		super.initialize(e, t, n), this._initializeArgs = [
			e,
			t,
			n
		], this.effectPass?.initialize(e, t, n);
	}
	dispose() {
		super.dispose(), this.rt.dispose(), this.effectPass?.dispose(), this.helperPass.dispose(), this.helperPassOnTop.dispose();
	}
	render(e, t, n) {
		this.rt.depthTexture = t.depthTexture;
		let r = e.getClearAlpha();
		e.setClearAlpha(0), this.helperPass.clearDepth = !0, this.helperPass.clearColorOnly = !0, this.helperPass.render(e, this.rt), this.helperPassOnTop.render(e, this.rt);
		let i = this._ensureEffectPass();
		i.renderToScreen = !1, i.render(e, this.rt, n), this.fullscreenMaterial.uniforms.inputBufferA.value = n.texture, this.fullscreenMaterial.uniforms.inputBufferB.value = t.texture, e.setClearAlpha(r), e.setRenderTarget(null), e.clear(), e.render(this.scene, this.camera);
	}
}, Xo = new E({
	vertexShader: "#define GLSLIFY 1\n#include <skinning_pars_vertex>\n#include <morphtarget_pars_vertex>\nout vec3 n;void main(){\n#include <beginnormal_vertex>\n#include <morphnormal_vertex>\n#include <skinbase_vertex>\n#include <skinnormal_vertex>\n#include <defaultnormal_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\nvec4 view_space=viewMatrix*modelMatrix*vec4(transformed,1.0);gl_Position=projectionMatrix*view_space;n=normalize(transformedNormal);}",
	fragmentShader: "#define GLSLIFY 1\nin vec3 n;void main(){gl_FragColor=vec4(gl_FrontFacing ? n :-n,1.0);}",
	side: 2
}), Zo = new E({
	vertexShader: "#define GLSLIFY 1\nout vec2 v_uv;void main(){gl_Position=vec4(position.xy,1.0,1.0);v_uv=uv;}",
	fragmentShader: "#define GLSLIFY 1\nin vec2 v_uv;uniform sampler2D texture_ao_lrez;uniform sampler2D texture_depth_lrez;uniform sampler2D texture_depth_hrez;uniform float near;uniform float far;float linearize_depth(float depth_sampled){float z=depth_sampled*2.0-1.0;return(2.0*near*far)/(far+near-z*(far-near));}vec2 nearest_depth_filter(in vec2 uv){vec2 resolution=vec2(textureSize(texture_depth_lrez,0));vec2 texel_size=1.0/resolution;vec2 offset=uv-0.5*texel_size;float d_hrez=texture(texture_depth_hrez,uv).r;float a=abs(d_hrez-texture(texture_depth_lrez,offset).r);float b=abs(d_hrez-texture(texture_depth_lrez,offset+vec2(texel_size.x,0.0)).r);float c=abs(d_hrez-texture(texture_depth_lrez,offset+vec2(0.0,texel_size.y)).r);float d=abs(d_hrez-texture(texture_depth_lrez,offset+vec2(texel_size.x,texel_size.y)).r);float min_diff=min(a,min(b,min(c,d)));if(min_diff==a)return offset;if(min_diff==b)return offset+vec2(texel_size.x,0.0);if(min_diff==c)return offset+vec2(0.0,texel_size.y);if(min_diff==d)return offset+vec2(texel_size.x,texel_size.y);}void main(){\n#ifdef DEBUG\nfloat d_lrez=texture(texture_depth_lrez,v_uv).r;float d_hrez=texture(texture_depth_hrez,v_uv).r;float output_d=mix(linearize_depth(d_lrez)/far,linearize_depth(d_hrez)/far,step(0.5,v_uv.x));gl_FragColor=vec4(vec3(output_d),1.0);\n#else\nvec2 filtered_uv=nearest_depth_filter(v_uv);vec4 ao=texture(texture_ao_lrez,filtered_uv);gl_FragColor=vec4(ao.rgb,1.0);gl_FragColor=ao;\n#endif\n}",
	uniforms: {
		texture_ao_lrez: new C(null),
		texture_depth_lrez: new C(null),
		texture_depth_hrez: new C(null),
		near: new C(null),
		far: new C(null)
	}
}), Qo = class extends ht {
	constructor(t, n) {
		super("AmbientOcclusionPass", void 0, n), this.fogEnabled = !1, this.fogNear = 1, this.fogFar = 1e3, this.fogMode = 0, this.fogHeightParams = new l(.005, .01, 0), this.frameIndex = 0, this.sanitizeViewport = !1, this._runHalfRes = !0, this._width = 1, this._height = 1;
		let r = 1024, i = 1024;
		this.gBuffer = new e(r, i, {
			type: st ? a : Be,
			depthTexture: new Ee(r, i),
			minFilter: g,
			magFilter: g
		}), this.depthBufferHighRes = new e(r, i, { depthTexture: new Ee(r, i) }), this.aoBuffer = new e(r, i, {
			minFilter: g,
			magFilter: g
		}), this.splineScene = t, this.splineCamera = n, this.hbaoMaterial = new E({
			vertexShader: "#define GLSLIFY 1\nout vec2 v_uv;void main(){v_uv=uv;gl_Position=vec4(position.xy,1.0,1.0);}",
			fragmentShader: "precision highp float;precision highp int;precision highp sampler2D;\n#define GLSLIFY 1\nin vec2 v_uv;const float pi=3.14159265;const float num_steps=4.0;const float num_directions=4.0;uniform float near;uniform float far;uniform float fov;uniform vec4 proj_info;uniform bool is_ortho;uniform vec2 resolution;uniform float radius_of_influence;uniform float radius_in_screen_space;uniform float exponent;uniform vec3 ao_color;uniform float bias;uniform sampler2D texture_depth;uniform sampler2D texture_normals;uniform sampler2D texture_blue_noise;uniform sampler2D texture_color_pass;const vec2 blue_noise_in_disk[16]=vec2[16](vec2(0.4787119925022125,0.875764012336731),vec2(-0.3379560112953186,-0.7939590215682983),vec2(-0.9552590250968933,-0.028163999319076538),vec2(0.8645269870758057,0.3256889879703522),vec2(0.20934200286865234,-0.3956570029258728),vec2(-0.10677900165319443,0.6725850105285645),vec2(0.15621300041675568,0.2351129949092865),vec2(-0.4136439859867096,-0.08285599946975708),vec2(-0.41566699743270874,0.3239090144634247),vec2(0.14189599454402924,-0.9399799704551697),vec2(0.9549319744110107,-0.18251599371433258),vec2(-0.7661839723587036,0.4107989966869354),vec2(-0.4349119961261749,-0.45884498953819275),vec2(0.4152419865131378,-0.07872399687767029),vec2(0.7283350229263306,-0.4917770028114319),vec2(-0.05808600038290024,-0.06640099734067917));uniform int frame_index;uniform bool fog_enabled;uniform float fog_near;uniform float fog_far;uniform float fog_mode;uniform vec3 fog_height_params;uniform mat4 camera_world_matrix;float height_fog_factor(vec3 fog_world_delta,float fog_dist,vec3 camera_world_pos){float density=fog_height_params.x;float falloff=fog_height_params.y;float rel_y=camera_world_pos.y-fog_height_params.z;float cam_density=density*exp(clamp(-falloff*rel_y,-60.0,60.0));float x=clamp(falloff*fog_world_delta.y,-60.0,60.0);float x_safe=(x>=0.0 ? 1.0 :-1.0)*max(abs(x),1e-4);float optical_depth=cam_density*fog_dist*(1.0-exp(-x_safe))/x_safe;return 1.0-exp(-max(optical_depth,0.0));}vec3 uv_to_view_space(vec2 uv,float eye_z){return vec3((uv*proj_info.xy+proj_info.zw)*(is_ortho ? 1.0 : eye_z),eye_z);}float linearize_depth(float depth_sampled){float z=is_ortho ? depth_sampled : depth_sampled*2.0-1.0;return mix((2.0*near*far)/(far+near-z*(far-near)),near+z*(far-near),float(is_ortho));}vec3 get_view_position(vec2 uv_coords){float linear_depth=linearize_depth(texture(texture_depth,uv_coords).x);return uv_to_view_space(uv_coords,linear_depth);}vec3 min_difference(vec3 p,vec3 right,vec3 left){vec3 v1=right-p;vec3 v2=p-left;return(dot(v1,v1)<dot(v2,v2))? v1 : v2;}vec3 rebuild_normal(in vec2 uv,in vec3 p){vec2 one_over_resolution=1.0/resolution;vec3 r=get_view_position(uv+vec2(one_over_resolution.x,0));vec3 l=get_view_position(uv+vec2(-one_over_resolution.x,0));vec3 t=get_view_position(uv+vec2(0,one_over_resolution.y));vec3 b=get_view_position(uv+vec2(0,-one_over_resolution.y));return normalize(cross(min_difference(p,r,l),min_difference(p,t,b)));}float falloff(float distance_squared){float neg_inv_r2=-1.0/(radius_of_influence*radius_of_influence);return distance_squared*neg_inv_r2+1.0;}float ao_contribution(vec3 P,vec3 N,vec3 S){vec3 to_sample=S-P;float norm_squared=dot(to_sample,to_sample);float norm=sqrt(norm_squared);float cos_theta=dot(N,to_sample)/max(norm,1e-4);return clamp(cos_theta-bias,0.0,1.0)*clamp(falloff(norm_squared),0.0,1.0);}float compute_ambient_occlusion(vec2 uv,float radius_in_screen_space,vec3 pc,vec3 view_space_n){vec2 one_over_resolution=1.0/resolution;ivec2 noise_uv=ivec2(gl_FragCoord.xy)&ivec2(127);float noise=texelFetch(texture_blue_noise,noise_uv,0).r;noise=fract(noise+0.61803398875*float(frame_index));float theta=noise*2.0*3.1415;float ct=cos(theta);float st=sin(theta);float step_size=radius_in_screen_space/(num_steps+1.0);const float angle_step=2.0*pi/num_directions;float contribution=0.0;for(int i=0;i<int(num_directions);++i){float current_pixel=step_size+1.0;for(int j=0;j<int(num_steps);++j){int index=i*int(num_steps)+j;vec2 blue_noise_sample=blue_noise_in_disk[index];vec2 disk_point;disk_point.x=blue_noise_sample.x*ct-blue_noise_sample.y*st;disk_point.y=blue_noise_sample.x*st+blue_noise_sample.y*ct;vec2 sample_direction=disk_point;vec2 snapped_uv=round(current_pixel*sample_direction)*one_over_resolution+uv;vec3 ps=get_view_position(snapped_uv);current_pixel+=step_size;contribution+=ao_contribution(pc,view_space_n,ps);}}float mult=1.0/(1.0-bias);contribution*=mult/(num_directions*num_steps);return clamp(1.0-contribution*2.0,0.0,1.0);}\n#define USE_GBUFFER_NORMALS\nvoid main(){vec3 view_space_p=get_view_position(v_uv);\n#ifdef USE_GBUFFER_NORMALS\nvec3 view_space_n=texture(texture_normals,v_uv).rgb;view_space_n.z*=-1.0;\n#else\nvec3 view_space_n=-rebuild_normal(v_uv,view_space_p);\n#endif\nfloat radius_ss=max(radius_in_screen_space/(is_ortho ? 1.0 : view_space_p.z),num_steps+1.0);float ao=compute_ambient_occlusion(v_uv,radius_ss,view_space_p,view_space_n);float final=pow(ao,exponent);if(view_space_p.z>=far){final=1.0;}vec3 color=mix(ao_color,vec3(1.0),final);if(fog_enabled){float fog_linear=smoothstep(fog_near,fog_far,view_space_p.z);vec3 world_p=(camera_world_matrix*vec4(view_space_p.xy,-view_space_p.z,1.0)).xyz;vec3 cam_pos=camera_world_matrix[3].xyz;float fog_height=height_fog_factor(world_p-cam_pos,max(length(world_p-cam_pos),1e-6),cam_pos);float w_linear=1.0-step(0.5,fog_mode)+step(1.5,fog_mode);float w_height=step(0.5,fog_mode);float fog_factor=1.0-(1.0-fog_linear*w_linear)*(1.0-fog_height*w_height);color=mix(color,vec3(1.0),fog_factor);}gl_FragColor=vec4(color,1.0);}",
			uniforms: {
				near: new C(null),
				far: new C(null),
				fov: new C(null),
				proj_info: new C(new N()),
				is_ortho: new C(!1),
				resolution: new C(new _()),
				radius_of_influence: new C(8),
				radius_in_screen_space: new C(1),
				exponent: new C(1),
				ao_color: new C(new l()),
				bias: new C(.5),
				texture_depth: new C(null),
				texture_normals: new C(null),
				texture_blue_noise: new C(null),
				frame_index: new C(0),
				fog_enabled: new C(!1),
				fog_near: new C(1),
				fog_far: new C(1e3),
				fog_mode: new C(0),
				fog_height_params: new C(new l(.005, .01, 0)),
				camera_world_matrix: new C(new De())
			}
		}), this.radius = 128, this.aoColor = {
			r: 0,
			g: 0,
			b: 0
		}, this.bias = .5, this.hbaoMaterial.uniforms.texture_depth.value = this.gBuffer.depthTexture, this.hbaoMaterial.uniforms.texture_normals.value = this.gBuffer.texture, this.needsSwap = !0, this.aaBuffer = new e(r, i, {
			minFilter: g,
			magFilter: g,
			wrapS: k,
			wrapT: k,
			depthBuffer: !1,
			type: Be
		});
	}
	_ensureEffectPass() {
		if (this.effectPass) return this.effectPass;
		let e = new _t({
			preset: ut.ULTRA,
			edgeDetectionMode: gt.COLOR
		});
		e.addEventListener("load", () => this.onSmaaTexturesLoaded?.()), this.effectPass = new vt(this.camera, e), this._initializeArgs && this.effectPass.initialize(...this._initializeArgs);
		let t = this._runHalfRes ? .5 : 1;
		return this.effectPass.setSize(this._width * t, this._height * t), this.effectPass;
	}
	initialize(e, t, n) {
		super.initialize(e, t, n), this._initializeArgs = [
			e,
			t,
			n
		], this.effectPass?.initialize(e, t, n);
	}
	setBlueNoiseTexture(e) {
		this.hbaoMaterial.uniforms.texture_blue_noise.value = e;
	}
	setSize(e, t) {
		this._width = e, this._height = t, this.depthBufferHighRes.setSize(e, t);
		let n = this._runHalfRes ? .5 : 1, r = e * n, i = t * n;
		this.gBuffer.setSize(r, i), this.aoBuffer.setSize(r, i), this.hbaoMaterial.uniforms.resolution.value.set(r, i), this.aaBuffer.setSize(r, i), this.effectPass?.setSize(r, i);
	}
	get runHalfRes() {
		return this._runHalfRes;
	}
	set runHalfRes(e) {
		this._runHalfRes = e, this.setSize(this._width, this._height);
	}
	setCamera(e) {
		this.splineCamera = e;
	}
	setScene(e) {
		this.splineScene = e;
	}
	setDepthTexture(e) {
		this.depthBufferHighRes.depthTexture = e, Zo.uniforms.texture_depth_hrez.value = e, Zo.needsUpdate = !0;
	}
	render(e, t, n) {
		let r = null, i = null, a = null, o = null, s = (t) => {
			e.setViewport(0, 0, t.width, t.height);
		};
		this.sanitizeViewport && (r = new N(), i = new N(), e.getViewport(r), e.getScissor(i), a = e.getScissorTest(), o = e.getRenderTarget(), e.setScissorTest(!1)), this.splineScene.overrideMaterial = Xo;
		let c = this.splineCamera.layers.mask;
		if (this.splineCamera.layers.set(5), e.setRenderTarget(this.gBuffer), this.sanitizeViewport && s(this.gBuffer), e.clear(), e.render(this.splineScene, this.splineCamera), this.runHalfRes && (Xo.colorWrite = !1, e.setRenderTarget(this.depthBufferHighRes), this.sanitizeViewport && s(this.depthBufferHighRes), e.clear(), e.render(this.splineScene, this.splineCamera), Xo.colorWrite = !0, e.state.buffers.color.setMask(!0)), this.splineScene.overrideMaterial = null, this.splineCamera.layers.mask = c, this.hbaoMaterial.uniforms.radius_of_influence.value = this.radius, this.hbaoMaterial.uniforms.ao_color.value.set(this.aoColor.r, this.aoColor.g, this.aoColor.b), this.hbaoMaterial.uniforms.bias.value = this.bias, this.hbaoMaterial.uniforms.fog_enabled.value = this.fogEnabled, this.hbaoMaterial.uniforms.fog_near.value = this.fogNear, this.hbaoMaterial.uniforms.fog_far.value = this.fogFar, this.hbaoMaterial.uniforms.fog_mode.value = this.fogMode, this.hbaoMaterial.uniforms.fog_height_params.value.copy(this.fogHeightParams), this.hbaoMaterial.uniforms.camera_world_matrix.value.copy(this.splineCamera.matrixWorld), this.hbaoMaterial.uniforms.frame_index.value = this.frameIndex, this.frameIndex++, this.splineCamera.isPerspectiveCamera) {
			this.hbaoMaterial.uniforms.near.value = this.splineCamera.perspCamera.near, this.hbaoMaterial.uniforms.far.value = this.splineCamera.perspCamera.far;
			let e = this.splineCamera.perspCamera.projectionMatrix.elements, t = 2 / e[0], n = 2 / e[5], r = -(1 - e[8]) / e[0], i = -(1 + e[9]) / e[5];
			this.hbaoMaterial.uniforms.proj_info.value.set(t, n, r, i);
			let a = this.splineCamera.perspCamera.fov * (Math.PI / 180), o = this.hbaoMaterial.uniforms.resolution.value.y / (2 * Math.tan(.5 * a)), s = .5 * this.hbaoMaterial.uniforms.radius_of_influence.value * o;
			this.hbaoMaterial.uniforms.radius_in_screen_space.value = s, this.hbaoMaterial.uniforms.is_ortho.value = !1;
		} else {
			this.hbaoMaterial.uniforms.near.value = this.splineCamera.orthoCamera.near, this.hbaoMaterial.uniforms.far.value = this.splineCamera.orthoCamera.far;
			let e = this.splineCamera.orthoCamera.projectionMatrix.elements, t = 2 / e[0], n = 2 / e[5], r = -(1 + e[12]) / e[0], i = -(1 - e[13]) / e[5];
			this.hbaoMaterial.uniforms.proj_info.value.set(t, n, r, i);
			let a = this.hbaoMaterial.uniforms.resolution.value.y / n * .5, o = this.hbaoMaterial.uniforms.radius_of_influence.value * a;
			this.hbaoMaterial.uniforms.radius_in_screen_space.value = o, this.hbaoMaterial.uniforms.is_ortho.value = !0;
		}
		let l = e.aoRenderTarget;
		if (this.runHalfRes) this.fullscreenMaterial = this.hbaoMaterial, e.setRenderTarget(this.aoBuffer), this.sanitizeViewport && s(this.aoBuffer), e.clear(), e.render(this.scene, this.camera), this.fullscreenMaterial = Zo, Zo.uniforms.texture_ao_lrez.value = this.aoBuffer.texture, Zo.uniforms.texture_depth_lrez.value = this.gBuffer.depthTexture, Zo.uniforms.texture_depth_hrez.value = this.depthBufferHighRes.depthTexture, e.setRenderTarget(l), this.sanitizeViewport && s(l), e.clear(), e.render(this.scene, this.camera);
		else {
			this.fullscreenMaterial = this.hbaoMaterial, e.setRenderTarget(this.aaBuffer), this.sanitizeViewport && s(this.aaBuffer), e.clear(), e.render(this.scene, this.camera);
			let t = this._ensureEffectPass();
			t.renderToScreen = !1, t.render(e, this.aaBuffer, l);
		}
		this.sanitizeViewport && r && i && a !== null && (e.setRenderTarget(o), e.setViewport(r.x, r.y, r.z, r.w), e.setScissor(i.x, i.y, i.z, i.w), e.setScissorTest(a));
	}
	dispose() {
		super.dispose(), this.gBuffer.dispose(), this.depthBufferHighRes.dispose(), this.aoBuffer.dispose(), this.aaBuffer.dispose(), this.effectPass?.dispose(), this.hbaoMaterial.dispose(), this.splineScene = null, this.splineCamera = null;
	}
}, $o = class extends pt {
	constructor() {
		super(new E({
			vertexShader: "\nvarying vec2 vUv;\nvoid main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
			fragmentShader: "\nuniform sampler2D tInput;\nuniform sampler2D tMap;\nuniform vec2 resolution;\nvarying vec2 vUv;\n\nuniform vec2 uResolution;\nuniform vec2 uCoords;\n\n\nfloat rectangle(vec2 st, vec2 size) {\n    size = vec2(0.5) - size * 0.5;\n    vec2 uv = vec2(step(size.x, st.x), step(size.y, st.y));\n    uv *= vec2(step(size.x, 1.0 - st.x), step(size.y, 1.0 - st.y));\n\n    return uv.x * uv.y;\n}\n\nuniform vec2 uSize;\nuniform float uScale;\nuniform float uDPR;\nuniform float uCurrent;\nuniform vec3 uSceneColor;\n\nvoid main() {\n    vec2 screenUv = gl_FragCoord.xy / uResolution.xy;\n    screenUv *= 1.0 / uDPR;\n\n    vec2 center = vec2(0.5, -0.5);\n    vec2 outsideUv = screenUv;\n    outsideUv += center;\n    outsideUv -= uCoords.xy / uResolution.xy;\n    outsideUv = (outsideUv - 0.5) + 0.5;\n    outsideUv -= center;\n    vec2 s = (uSize / uResolution) * uScale;\n    float isOutside = 1.0 - rectangle(outsideUv, s);\n    \n    vec2 mid = vec2(0.5);\n    vec2 insideUv = (screenUv - mid + s * mid) / s;\n    vec4 background = texture2D(tInput, screenUv);\n    vec4 image = texture2D(tMap, insideUv);\n    gl_FragColor = mix(image, background, isOutside);\n}\n",
			uniforms: {
				tInput: new C(null),
				tMap: new C(null),
				uResolution: new C(new _()),
				uSize: new C(new _()),
				uCoords: new C(new _()),
				uScale: new C(1),
				uSceneColor: new C(new b(16711680)),
				uDPR: new C(1),
				uCurrent: new C(0)
			}
		}), "tInput"), this.needsSwap = !0;
	}
	get uniforms() {
		return this.fullscreenMaterial.uniforms;
	}
	get texture() {
		return this.uniforms.tMap.value;
	}
	set texture(e) {
		this.uniforms.tMap.value = e;
	}
}, es = [], ts = class extends pt {
	constructor() {
		super(new E({
			vertexShader: "\nvoid main() {\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
			fragmentShader: "\nuniform sampler2D toScene;\nuniform sampler2D fromScene;\nuniform vec2 resolution;\n\nuniform vec2 uResolution;\nuniform float uDPR;\n\nuniform float mixRatio;\nuniform sampler2D tMixTexture;\nuniform int useTexture;\nuniform float threshold;\n\nvoid main() {\n	vec2 screenUv = gl_FragCoord.xy / uResolution.xy;\n	screenUv *= 1.0 / uDPR;\n\n	vec4 texel1 = texture2D( fromScene, screenUv );\n	vec4 texel2 = texture2D( toScene, screenUv );\n\n	if (useTexture==1) {\n		\n		vec4 transitionTexel = texture2D( tMixTexture, screenUv );\n		float r = mixRatio * (1.0 + threshold * 2.0) - threshold;\n		float mixf=clamp((transitionTexel.r - r)*(1.0/threshold), 0.0, 1.0);\n		\n		gl_FragColor = mix( texel1, texel2, mixf );\n	} else {\n		\n		gl_FragColor = mix( texel1, texel2, mixRatio );\n		\n	}\n}\n",
			uniforms: {
				toScene: new C(null),
				fromScene: new C(null),
				uResolution: new C(new _()),
				uDPR: new C(1),
				mixRatio: new C(0),
				threshold: new C(.1),
				useTexture: new C(0),
				tMixTexture: { value: es[0] }
			}
		}), "toScene"), this.needsSwap = !0;
	}
	get uniforms() {
		return this.fullscreenMaterial.uniforms;
	}
	get texture() {
		return this.uniforms.fromScene.value;
	}
	set texture(e) {
		this.uniforms.fromScene.value = e;
	}
}, ns = class extends pt {
	constructor() {
		super(new E({
			vertexShader: "\nvoid main() {\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
			fragmentShader: "\nuniform sampler2D inputBuffer;\nuniform sampler2D blurredInputBuffer;\nuniform sampler2D overlay;\nuniform float blurIntensity;\n\nuniform vec2 uResolution;\nuniform float uDPR;\n\nvoid main() {\n	vec2 screenUv = gl_FragCoord.xy / uResolution.xy;\n	screenUv *= 1.0 / uDPR;\n\n	vec4 texel1 = texture2D( overlay, screenUv );\n	vec4 texel2 = texture2D( inputBuffer, screenUv );\n	vec4 texel3 = texture2D( blurredInputBuffer, screenUv );\n\n	float blurMask2 = max(sign(texel1.a), 0.0) * blurIntensity;\n    gl_FragColor = mix( mix(texel2, texel3, blurMask2), texel1, texel1.a );\n}\n",
			uniforms: {
				inputBuffer: new C(null),
				blurredInputBuffer: new C(null),
				overlay: new C(null),
				uResolution: new C(new _()),
				uDPR: new C(1),
				blurIntensity: new C(0)
			}
		})), this._blurEnabled = !1, this.blurTarget = new e(1, 1, {
			minFilter: g,
			magFilter: g,
			wrapS: k,
			wrapT: k
		}), this.blurPass = new bt({
			width: window.innerWidth,
			height: window.innerHeight,
			kernelSize: mt.HUGE,
			resolutionScale: .25
		}), this.blurPass.renderToScreen = !1, this.uniforms.blurredInputBuffer.value = this.blurTarget.texture;
	}
	get uniforms() {
		return this.fullscreenMaterial.uniforms;
	}
	get texture() {
		return this.uniforms.overlay.value;
	}
	set texture(e) {
		this.uniforms.overlay.value = e;
	}
	setResolution(e, t, n = 1) {
		this.uniforms.uResolution.value.set(e, t), this.uniforms.uDPR.value = n, this.blurPass.setSize(e, t), this.blurTarget.setSize(e, t), this.blurPass.setSize(e, t);
	}
	get uiCanvas() {
		return this._uiCanvas;
	}
	set uiCanvas(e) {
		this._uiCanvas = e, e.texture && (this.uniforms.overlay.value = e.texture);
		let t = e.frame;
		if (t) {
			let e = t.data.backgroundBlur, n = e.radius;
			this._blurEnabled = e.enabled, this.uniforms.blurIntensity.value = +!!this._blurEnabled, this.blurPass.scale = n / 3;
		}
	}
	render(e, t, n, r, i) {
		this._blurEnabled && (this.blurPass.setDepthTexture(this.getDepthTexture()), this.blurPass.render(e, t, this.blurTarget, r, i)), super.render(e, t, n, r, i);
	}
	dispose() {
		super.dispose(), this.blurTarget.dispose(), this.blurPass.dispose(), this.fullscreenMaterial.dispose(), this._uiCanvas = void 0;
	}
}, rs = class extends pt {
	constructor() {
		super(new E({
			vertexShader: "\nvarying vec2 vUv;\nvoid main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
			fragmentShader: "\nuniform sampler2D tInput;\nuniform sampler2D tOverlayImage;\nvarying vec2 vUv;\nuniform vec2 uResolution;\nuniform vec2 uRightBottom;\nuniform vec2 uImageSize;\nuniform float uScale;\nuniform float uDPR;\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n	return blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\nvec4 drawFixedSizeImage(sampler2D image, vec2 screenUV, vec2 imageSize, vec2 imageCoords, vec2 screenSize, float dpr) {\n	vec2 uv = (screenUV * screenSize * dpr - imageCoords) / (imageSize * dpr);\n	if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {\n		return vec4(0.0);\n	}\n	return texture2D(image, uv);\n}\n\nvoid main() {\n    vec2 screenUV = gl_FragCoord.xy / (uResolution.xy * uDPR);\n	vec2 imageCoords = vec2(uResolution.x * uDPR - uImageSize.x * uScale * uDPR - uRightBottom.x * uDPR, uRightBottom.y * uDPR);\n    vec4 background = texture2D(tInput, screenUV);\n    vec4 image = drawFixedSizeImage(tOverlayImage, screenUV, uImageSize * uScale, imageCoords, uResolution, uDPR);\n    gl_FragColor = vec4(blendNormal(background.rgb, image.rgb, image.a), max(background.a, image.a));\n}\n",
			uniforms: {
				tInput: new C(null),
				tOverlayImage: new C(null),
				uResolution: new C(new _()),
				uImageSize: new C(new _()),
				uRightBottom: new C(new _(20, 20)),
				uScale: new C(.25),
				uDPR: new C(1)
			}
		}), "tInput");
	}
	get uniforms() {
		return this.fullscreenMaterial.uniforms;
	}
	get texture() {
		return this.uniforms.tOverlayImage.value;
	}
	set texture(e) {
		this.uniforms.tOverlayImage.value = e;
		let t = e.image;
		this.uniforms.uImageSize.value.set(t.width, t.height);
	}
}, is = class extends pt {
	constructor() {
		super(new E({
			vertexShader: "\nvarying vec2 vUv;\nvoid main() {\n	vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
			fragmentShader: "\nuniform sampler2D inputBuffer;\nvarying vec2 vUv;\n\nvec3 SrgbToLinear(vec3 color) {\n	\n	vec3 sRGB = color.rgb;\n	color.rgb = sRGB * (sRGB * (sRGB * 0.305306011 + 0.682171111) + 0.012522878);\n	return color;\n}\n\nvoid main() {\n	vec4 texel = texture2D(inputBuffer, vUv);\n	texel.rgb = SrgbToLinear(texel.rgb);\n    gl_FragColor = texel;\n}\n",
			uniforms: {
				inputBuffer: new C(null),
				uResolution: new C(new _()),
				uDPR: new C(1)
			}
		}), "inputBuffer"), this.needsSwap = !0;
	}
	get uniforms() {
		return this.fullscreenMaterial.uniforms;
	}
};
function as(e, t) {
	return t && t.enabled && e.push(t.effect), e;
}
var os = (e) => Object.values(dt).includes(e) ? e : dt.NORMAL, ss = class extends ze {
	constructor(e, t) {
		super(), this._needsDOFResize = t, this.postprocessingState = Ge.defaultData, this._scene = new ee(), this._camera = new ot(), this.effects = /* @__PURE__ */ new Map(), this.blueNoiseTexture = new Ne(), this._renderToScreen = !0, this._isUIOverlayEnabled = !1, this.timer = new fe(), this.renderer = e, this.debug = !1;
		for (let [e, t] of Ct()) this.effects.set(e, t());
		this.effectComposer = new qo(this.renderer), this.effectComposer.autoRenderToScreen = !1, this.opaquePass = new Ko(!0, this.scene, this.camera), this.opaquePass.clear = !0, this.transmissionPass = new Uo(this.scene, this.camera, this.renderer), this.aoPass = new Qo(this.scene, this.camera), this.taaPass = new Ho(), this.taaPass.renderToScreen = !1, this.helperPass = new Yo(this.camera), this.helperPass.renderToScreen = !1;
		let n = () => {
			this.dispatchEvent({ type: "smaaloaded" });
		};
		this.aoPass.onSmaaTexturesLoaded = n, this.helperPass.onSmaaTexturesLoaded = n, this.stylesOverlayPass = new $o(), this.stylesOverlayPass.enabled = !1, this.uiOverlayPass = new ns(), this.uiOverlayPass.enabled = !1, this.logoOverlayPass = new rs(), this.logoOverlayPass.enabled = !1, this.sceneTransitionPass = new ts(), this.sceneTransitionPass.enabled = !1, this.srgbToLinear = new is(), this.srgbToLinear.enabled = !1, this._initCopyPass(), this._initPasses();
	}
	set overlayTexture(e) {
		e === void 0 ? this.stylesOverlayPass.enabled = !1 : (this.stylesOverlayPass.texture = e, this.stylesOverlayPass.enabled = !0);
	}
	get overlayTexture() {
		return this.stylesOverlayPass.texture;
	}
	set sceneHelpers(e) {
		this.helperPass.sceneHelpers = e;
	}
	get sceneHelpers() {
		return this.helperPass.sceneHelpers;
	}
	set sceneHelpersOnTop(e) {
		this.helperPass.sceneHelpersOnTop = e;
	}
	get sceneHelpersOnTop() {
		return this.helperPass.sceneHelpersOnTop;
	}
	get scene() {
		return this._scene;
	}
	set scene(e) {
		this._scene = e, this.opaquePass.setScene(e), this.transmissionPass.setScene(e), this.aoPass.setScene(e);
	}
	get camera() {
		return this._camera;
	}
	set camera(e) {
		let t = this._camera !== e;
		this._camera = e, this.opaquePass.setCamera(e), this.transmissionPass.setCamera(e), t && this.transmissionPass.updatePasses(this.renderer), this.aoPass.setCamera(e), this.helperPass.setCamera(e), this.effects.get("depthOfField")?.setCamera(e);
	}
	updateRenderToScreen() {
		let e = !1;
		for (let t = this.effectComposer.passes.length - 1; t >= 0; t--) {
			let n = this.effectComposer.passes[t];
			!0 !== n.enabled || e || !this._renderToScreen ? n.renderToScreen = !1 : (n.renderToScreen = !0, e = !0);
		}
	}
	get isUIOverlayEnabled() {
		return this._isUIOverlayEnabled;
	}
	disableUIOverlay() {
		this._isUIOverlayEnabled = !1;
	}
	enableUIOverlay() {
		this._isUIOverlayEnabled = !0;
	}
	disableHelpers() {
		this.helperPass.enabled = !1, this.updateRenderToScreen();
	}
	enableHelpers() {
		this.helperPass.enabled = !0, this.updateRenderToScreen();
	}
	updateBlueNoiseTexture(e) {
		this.blueNoiseTexture = new Ne(e, 128, 128), this.blueNoiseTexture.wrapS = te, this.blueNoiseTexture.wrapT = te, this.blueNoiseTexture.minFilter = Ie, this.blueNoiseTexture.magFilter = Ie, this.blueNoiseTexture.needsUpdate = !0;
	}
	setAmbientOcclusionParams(e, t, n, r, i, a, o, s, c) {
		this.aoPass.enabled = e, this.aoPass.radius = t, this.aoPass.bias = n, this.aoPass.aoColor = r, this.aoPass.fogEnabled = i, this.aoPass.fogNear = a, this.aoPass.fogFar = o, this.aoPass.fogMode = Je.getModeIndex({ mode: s.mode }), this.aoPass.fogHeightParams.set(s.density, s.heightFalloff, s.heightBase), this.aoPass.runHalfRes !== !c && (this.aoPass.runHalfRes = !c);
	}
	setTransmissionPassEnabled(e) {
		this.transmissionPass.enabled = e, this.opaquePass.hasTransmissionPass = e;
	}
	_initPasses() {
		if (this.uvEffectPass?.dispose(), this.effectPass?.dispose(), this.effectComposer.removeAllPasses(), this.transmissionPass.updatePasses(this.renderer), this.effectComposer.addPass(this.aoPass), this.effectComposer.addPass(this.opaquePass), this.effectComposer.addPass(this.transmissionPass), this.effectComposer.addPass(this.taaPass), this.postprocessingState.enabled) {
			let e = [this.effects.get("pixelation")].reduce(as, []);
			e.length > 0 && (this.uvEffectPass = new vt(this.camera, ...e), this.uvEffectPass.renderToScreen = !1, this.uvEffectPass.encodeOutput = !1, this.effectComposer.addPass(this.uvEffectPass));
			let t = [
				this.effects.get("chromaticAberration"),
				this.effects.get("bloom"),
				this.effects.get("depthOfField"),
				this.effects.get("colorAverage"),
				this.effects.get("hueSaturation"),
				this.effects.get("brightnessContrast"),
				this.effects.get("vignette"),
				this.effects.get("noise")
			].reduce(as, []);
			if (t.length > 0 && (this.effectPass = new vt(this.camera, ...t), this.effectPass.renderToScreen = !1, this.effectPass.encodeOutput = !1, this.effectComposer.addPass(this.effectPass), this._needsDOFResize && this.effects.get("depthOfField")?.enabled && window !== void 0)) {
				let e = this.renderer.viewportWidth, t = this.renderer.viewportHeight;
				this.renderer.setSize(e - 1, t - 1), this.renderer.setSize(e, t);
			}
		}
		this.effectComposer.addPass(this.stylesOverlayPass), this.effectComposer.addPass(this.uiOverlayPass), this.effectComposer.addPass(this.sceneTransitionPass), this.effectComposer.addPass(this.helperPass), this.effectComposer.addPass(this.srgbToLinear), this.effectComposer.addPass(this.logoOverlayPass);
	}
	_initCopyPass() {
		if (this._savePass) return;
		let t = new _();
		this.renderer.getDrawingBufferSize(t), this._rt = new e(t.x, t.y, {
			depthBuffer: !1,
			stencilBuffer: !1,
			wrapS: te,
			wrapT: te
		}), this._rt.samples = 0, this.renderer.outputColorSpace === "srgb" && (this._rt.texture.colorSpace = "srgb"), this._savePass = new yt(this._rt, !1), this._savePass.renderToScreen = !1;
	}
	setCopyPass(e) {
		this._rt = e, this._savePass = new yt(this._rt, !1), this.renderToScreen = !1;
	}
	get renderToScreen() {
		return this._renderToScreen;
	}
	set renderToScreen(e) {
		if (this._renderToScreen === e) return;
		let t = this.effectComposer;
		!t || (!0 === e ? t.removePass(this._savePass) : t.addPass(this._savePass), this._renderToScreen = e, this.updateRenderToScreen());
	}
	get sceneTransitionFromTexture() {
		return this.sceneTransitionPass.texture;
	}
	set sceneTransitionFromTexture(e) {
		e !== this.sceneTransitionPass.texture && (e === null ? (this.sceneTransitionPass.enabled = !1, this.updateRenderToScreen()) : this.sceneTransitionPass.enabled = !0, this.sceneTransitionPass.texture = e);
	}
	setWatermark(e) {
		this.logoOverlayPass.enabled = e !== null, e && (this.logoOverlayPass.texture = e);
	}
	get texture() {
		return this._rt && this._rt.texture;
	}
	get renderTarget() {
		return this._rt;
	}
	updatePostprocessing(e) {
		let { enabled: t, ...n } = e, r = !1;
		t !== this.postprocessingState.enabled && (r = !0);
		for (let e of Object.entries(n)) {
			let t = e[1], n = this.effects.get(e[0]);
			if (!n) {
				let r = Tt(e[0]);
				r ? (n = r(), this.effects.set(e[0], n), e[0] === "depthOfField" && n.setCamera(this._camera)) : t?.enabled && wt(e[0], "webgl");
			}
			if (n) {
				n.enabled !== t.enabled && (r = !0), n.enabled = t.enabled;
				for (let [e, r] of Object.entries(t)) e === "blendFunction" ? n.blendFunction = os(r) : n[e] = r;
			}
		}
		this.postprocessingState = e, r && this._initPasses();
	}
	render() {
		this.renderer.shadowMap.type === 0 && this._normalizeShadowDepthTextures(), this.timer.update(), this.effectComposer.render(this.timer.getDelta());
	}
	_normalizeShadowDepthTextures() {
		this._scene.traverse((e) => {
			let t = e;
			if (!t.isLight) return;
			let n = t.shadow?.map?.depthTexture;
			n && n.compareFunction !== null && (n.compareFunction = null, n.minFilter = 1003, n.magFilter = 1003, n.needsUpdate = !0);
		});
	}
	setScissor(e, t, n, r) {
		e instanceof N ? (this.effectComposer.inputBuffer.scissor.set(e.x, e.y, e.z, e.w), this.effectComposer.outputBuffer.scissor.set(e.x, e.y, e.z, e.w)) : (this.effectComposer.inputBuffer.scissor.set(e, t, n, r), this.effectComposer.outputBuffer.scissor.set(e, t, n, r));
		let i = this.renderer.getPixelRatio();
		this.effectComposer.inputBuffer.scissor.multiplyScalar(i), this.effectComposer.outputBuffer.scissor.multiplyScalar(i), this.renderer.setScissor(e, t, n, r);
	}
	setScissorTest(e) {
		this.effectComposer.inputBuffer.scissorTest = e, this.effectComposer.outputBuffer.scissorTest = e, this.renderer.setScissorTest(e);
	}
	setViewport(e, t, n, r) {
		e instanceof N ? (this.effectComposer.inputBuffer.viewport.copy(e), this.effectComposer.outputBuffer.viewport.copy(e)) : (this.effectComposer.inputBuffer.viewport.set(e, t, n, r), this.effectComposer.outputBuffer.viewport.set(e, t, n, r));
	}
	resize(e, t, n) {
		if (this.effectComposer.setSize(e, t, n), this._rt) {
			let n = this.renderer.getPixelRatio();
			this._rt.setSize(e * n, t * n);
		}
	}
	dispose() {
		this.uvEffectPass?.dispose(), this.effectPass?.dispose(), this.effectComposer.dispose(), this.blueNoiseTexture.dispose(), this._rt?.dispose(), this.effects.forEach((e) => e.dispose()), this.effects.clear(), this._scene = void 0, this._camera = void 0, this.renderer = void 0;
	}
}, cs = new m(), ls = new _(), us = class extends Hi {
	constructor(e) {
		super(e), this._pixelRatio = this.getPixelRatio(), this.viewportWidth = 1, this.viewportHeight = 1, this.resolution = new _(), this.dummyCamera = new ot(), this.sceneTransitionDuration = 0, this.sceneTransitionTimeRemaining = -1, this.manageShadowUpdates = !1, this.forceShadowUpdates = !1, this.clear = (e = !0, t = !0, n = !0) => {
			let r = this.getContext(), i = 0;
			e && (i |= r.COLOR_BUFFER_BIT), t && (i |= r.DEPTH_BUFFER_BIT), n && (i |= r.STENCIL_BUFFER_BIT), r.clear(i), r.clearBufferfv(r.COLOR, 1, [
				0,
				0,
				0,
				1
			]);
		}, (() => {
			if (!Bo.test(X.lights_pars_begin)) {
				if (X.lights_pars_begin.includes(zo)) return;
				throw Error("spe: could not find getDistanceAttenuation in lights_pars_begin — three shader chunk layout changed");
			}
			X.lights_pars_begin = X.lights_pars_begin.replace(Bo, zo);
		})(), this.pipeline = new ss(this, e?.needsDOFResize ?? !1), this.autoClear = !1;
		let t = this.setPixelRatio.bind(this), n = this.setSize.bind(this);
		this.shadowMap.enabled = !0, this.shadowMap.type = 0, this.dummyCamera.matrixAutoUpdate = !1, this.domElement.removeAttribute("data-engine"), this._applyPreferredDrawingBufferColorSpace(), this.setPixelRatio = (e) => {
			this._pixelRatio !== e && (this._pixelRatio = e, t(e));
		}, this.setSize = (e, t, r = !0) => {
			(this.viewportWidth !== e || this.viewportHeight !== t) && (this.viewportWidth = e, this.viewportHeight = t, n(e, t, r), this.normalRenderTarget?.setSize(e * this._pixelRatio, t * this._pixelRatio), this._resizeTransmission(e, t), this.transmissionDepthTarget?.setSize(e * this._pixelRatio / 2, t * this._pixelRatio / 2), this.pipeline.resize(e, t, r));
		}, this._superDispose = this.dispose, this.dispose = this._currentDispose;
	}
	_applyPreferredDrawingBufferColorSpace() {
		let e = this.getContext();
		if (e && "drawingBufferColorSpace" in e) try {
			e.drawingBufferColorSpace = "display-p3";
		} catch (e) {
			console.warn(e);
		}
	}
	get outputColorSpace() {
		return super.outputColorSpace;
	}
	set outputColorSpace(e) {
		super.outputColorSpace = e, this._applyPreferredDrawingBufferColorSpace();
	}
	createAORenderTarget() {
		this.aoRenderTarget === void 0 && (this.aoRenderTarget = new e(this.viewportWidth * this._pixelRatio, this.viewportHeight * this._pixelRatio, {
			generateMipmaps: !1,
			minFilter: 1006,
			magFilter: 1006,
			wrapS: 1001,
			wrapT: 1001,
			depthBuffer: !1
		}));
	}
	_resizeTransmission(e, t) {
		this.transmissionRenderTarget?.setSize(e * this._pixelRatio / (this.hdTransmission ? 1 : 2), t * this._pixelRatio / (this.hdTransmission ? 1 : 2)), this.aoRenderTarget?.setSize(e * this._pixelRatio / 1, t * this._pixelRatio / 1);
	}
	get hdTransmission() {
		return Q.transmissionLod.value === 1;
	}
	set hdTransmission(e) {
		Q.transmissionLod.value = !0 === e ? 1 : 2, this._resizeTransmission(this.viewportWidth, this.viewportHeight);
	}
	createTransmissionRenderTarget() {
		this.transmissionRenderTarget === void 0 && (this.transmissionRenderTarget = new e(this.viewportWidth * this._pixelRatio / (this.hdTransmission ? 1 : 2), this.viewportHeight * this._pixelRatio / (this.hdTransmission ? 1 : 2), {
			generateMipmaps: !0,
			minFilter: 1008,
			magFilter: 1006,
			wrapS: 1001,
			wrapT: 1001,
			depthBuffer: !1
		}), this.transmissionDepthTarget = new e(this.viewportWidth * this._pixelRatio / 2, this.viewportHeight * this._pixelRatio / 2, {
			minFilter: 1003,
			magFilter: 1003,
			depthBuffer: !1
		}));
	}
	createNormalRenderTarget(t) {
		let n = t.outline && t.cavity ? "both" : t.cavity ? "normals" : "hash";
		this.normalRenderTarget !== void 0 && this.normalRenderTargetFlavor !== n && (this.normalRenderTarget.depthTexture?.dispose(), this.normalRenderTarget.dispose(), this.normalRenderTarget = void 0), this.normalRenderTarget === void 0 && (this.normalRenderTarget = new e(this.viewportWidth * this._pixelRatio, this.viewportHeight * this._pixelRatio, {
			count: n === "both" ? 2 : 1,
			generateMipmaps: !1,
			minFilter: 1003,
			magFilter: 1003,
			type: n === "normals" ? 1016 : 1015,
			depthTexture: new Ee(this.viewportWidth * this._pixelRatio, this.viewportHeight * this._pixelRatio)
		}), n === "both" && (this.normalRenderTarget.textures[1].type = 1016), this.normalRenderTargetFlavor = n);
	}
	renderNormal(e, t, n) {
		if (this.normalRenderTarget) {
			this.setClearColor(0), n.layers.enable(8), n.layers.disable(0), n.layers.disable(3), t.traverseEntity((e) => {
				e.layers.isEnabled(8) && (e.copyPreviousMatrix = !1);
			}), this.setRenderTarget(this.normalRenderTarget), this.clear(), Po.value = n instanceof ot ? (n.far - n.near) / 1e4 : 1;
			let r = this.normalRenderTargetFlavor ?? "hash";
			t.overrideMaterial = r === "both" ? Ro : r === "normals" ? Lo : Io, this.render(t, n), this.setClearColor(t.bgColor, t.bgColor.a), this.setRenderTarget(null), t.overrideMaterial = e.wireframeState ? ct : null, n.layers.enable(0), n.layers.enable(3), t.traverseEntity((e) => {
				e.layers.isEnabled(8) && (e.copyPreviousMatrix = !0);
			});
		}
	}
	renderSplineSceneWithDummyCamera(e, t, n = 1) {
		this.dummyCamera.updateCameraState(t.dataPatched), this.dummyCamera.matrix.copy(t.matrixWorld);
		let r = t.height, i = t.width, a = this.viewportWidth / this.viewportHeight;
		i < r ? i = r * a : r = i / a, this.dummyCamera.setViewplaneSize(i, r);
		for (let t = 0; t < n; t++) this.renderSplineScene(e, this.dummyCamera);
	}
	renderSplineScene(e, t, { sceneHelpers: n = this.sceneHelpers, sceneHelpersOnTop: r = this.sceneHelpersOnTop, overrideTransmission: i, overrideNormal: a } = {}) {
		kt(this);
		let o = e instanceof lt ? e.activePage : e, s = o.visible;
		o.visible = !0;
		let c = o.scene, l = +!We.isSoft(o.data.shadow);
		if (this.shadowMap.type !== l && (this.shadowMap.type = l, o.traverseEntity((e) => {
			let t = e;
			t.isLight && t.shadow?.map && (t.shadow.map.dispose(), t.shadow.map = null, t.shadow.needsUpdate = !0);
		}), c.markShadowsDirty()), this.setClearColor(o.bgColor, o.bgColor.a), o.penumbraSizeArray.forEach((e, t) => {
			Q.penumbraSize.value[t] = e;
		}), Q.pixelRatioNode.value = this.getPixelRatio(), this.resolution.x !== 0 && this.resolution.y !== 0 ? Q.resolution.value.set(this.resolution.x, this.resolution.y) : Q.resolution.value.set(this.viewportWidth * this._pixelRatio, this.viewportHeight * this._pixelRatio), a !== void 0) Q.normalRenderTarget.value = a, Q.normalRenderTargetDepth.value = cs, Q.normalViewRenderTarget.value = cs;
		else if (c.needsNormal()) {
			let e = c.normalPassNeeds();
			this.createNormalRenderTarget(e);
			let n = this.normalRenderTargetFlavor, r = this.normalRenderTarget.textures;
			Q.normalRenderTarget.value = n === "normals" ? cs : r[0], Q.normalRenderTargetDepth.value = this.normalRenderTarget.depthTexture, Q.normalViewRenderTarget.value = n === "both" ? r[1] : n === "normals" ? r[0] : cs, this.renderNormal(c, o, t);
		}
		La.spe_fogMode.value = Je.getModeIndex({ mode: o.fogMode }), La.spe_fogHeightParams.value.set(o.fogDensity ?? Je.getDensity({}), o.fogHeightFalloff ?? Je.getHeightFalloff({}), o.fogHeightBase ?? Je.getHeightBase({}));
		let u = o.data.ao, d = u.occlusion && !Dt.enabled;
		if (d && (this.createAORenderTarget(), Q.aoRenderTarget.value = this.aoRenderTarget.texture), Q.aoEnabled.value = d, this.pipeline.setAmbientOcclusionParams(d, u.radius, u.bias, o.aoColor, o.fog !== null, o.backupFog.near, o.backupFog.far, {
			mode: o.fogMode ?? "linear",
			density: o.fogDensity ?? Je.getDensity({}),
			heightFalloff: o.fogHeightFalloff ?? Je.getHeightFalloff({}),
			heightBase: o.fogHeightBase ?? Je.getHeightBase({})
		}, u.aoFullRes && !st), this.pipeline.aoPass.setBlueNoiseTexture(this.pipeline.blueNoiseTexture), this.pipeline.isUIOverlayEnabled && o.uiCanvas?.enabled && o.uiCanvas.texture && o.uiCanvas.texture.image.width > 0) {
			let e = this.getSize(ls), t = this.getPixelRatio();
			(o.uiCanvas.width !== this.viewportWidth || o.uiCanvas.height !== this.viewportHeight || o.uiCanvas.dpr !== t) && o.uiCanvas.applySize({
				width: this.viewportWidth,
				height: this.viewportHeight
			}, t), o.uiCanvas.render(this), this.pipeline.uiOverlayPass.uiCanvas = o.uiCanvas, this.pipeline.uiOverlayPass.enabled = !0, this.pipeline.uiOverlayPass.setResolution(e.x, e.y, t), this.pipeline.updateRenderToScreen();
		} else this.pipeline.uiOverlayPass.enabled = !1, this.pipeline.updateRenderToScreen();
		if (this.pipeline.logoOverlayPass.enabled) {
			let e = this.getSize(ls), t = this.getPixelRatio();
			this.pipeline.logoOverlayPass.uniforms.uResolution.value.set(e.x, e.y), this.pipeline.logoOverlayPass.uniforms.uDPR.value = t;
		}
		let f = !1;
		if (i !== void 0) Q.transmissionRenderTarget.value = i, Q.transmissionRenderTargetDepth.value = cs, this.pipeline.setTransmissionPassEnabled(!1);
		else {
			let e = c.needsTransmission();
			e && (this.transmissionRenderTarget === void 0 && (f = !0), this.createTransmissionRenderTarget(), Q.transmissionRenderTarget.value = this.transmissionRenderTarget.texture, Q.aspectRatio.value = (p = this.viewportWidth) >= (m = this.viewportHeight) ? new _(m / p, 1) : new _(1, p / m), Q.transmissionRenderTargetDepth.value = this.transmissionDepthTarget.texture), this.pipeline.setTransmissionPassEnabled(e);
		}
		var p, m;
		t.layers.enable(3), t.layers.enable(8), t.layers.enable(4), this.pipeline.sceneHelpers = n, this.pipeline.sceneHelpersOnTop = r, this.pipeline.taaPass.enabled = Q.taaEnabled.value, this.pipeline.scene = o, this.pipeline.camera = t, f && this.pipeline.transmissionPass.updatePasses(this);
		let h = Ot(o.postprocessing);
		this.pipeline.postprocessingState !== h && (this.pipeline.updatePostprocessing(h), !n && !r && this.pipeline.disableHelpers()), this.clearAlphaOverride !== void 0 && this.setClearAlpha(this.clearAlphaOverride), c.shapeBlendIntances.forEach((e) => {
			e.onBeforeShadowPass(this);
		}), this.manageShadowUpdates && (this.shadowMap.autoUpdate = !1, (c.shadowsDirty || this.forceShadowUpdates) && (this.shadowMap.needsUpdate = !0)), o.overrideMaterial = c.wireframeState ? ct : null, this.pipeline.render(), this.manageShadowUpdates && (c.shadowsDirty = !1), Q.taaEnabled.value && (Q.frameIndex.value = (Q.frameIndex.value + 1) % 16), t instanceof ot && t.copyHistory(), o.visible = s;
	}
	renderFromSceneForSceneTransitionPass(e, t, n) {
		this.pipeline.renderToScreen = !1, this.pipeline.renderTarget, this.renderSplineScene(e, t), this.pipeline.sceneTransitionFromTexture = this.pipeline.renderTarget.texture, this.sceneTransitionDuration = n, this.sceneTransitionTimeRemaining = n, this.pipeline.renderToScreen = !0;
		let r = this.pipeline.sceneTransitionPass.uniforms;
		r.uDPR.value = window.devicePixelRatio, r.uResolution.value.set(this.domElement.width, this.domElement.height).divideScalar(window.devicePixelRatio);
	}
	_currentDispose() {
		this._superDispose(), this.pipeline.dispose(), this.aoRenderTarget?.dispose(), this.aoRenderTarget = void 0, this.transmissionRenderTarget?.dispose(), this.transmissionRenderTarget = void 0, this.transmissionDepthTarget?.dispose(), this.transmissionDepthTarget = void 0, this.normalRenderTarget?.depthTexture?.dispose(), this.normalRenderTarget?.dispose(), this.normalRenderTarget = void 0, this.normalRenderTargetFlavor = void 0, this.dummyCamera.dispose(), this.dummyCamera = void 0, Q.normalRenderTarget.value = cs, Q.normalRenderTargetDepth.value = cs, Q.normalViewRenderTarget.value = cs, Q.transmissionRenderTarget.value = cs, Q.transmissionRenderTargetDepth.value = cs, Q.aoRenderTarget.value = cs;
	}
};
//#endregion
export { us as SplineRenderer, Q as rendererGlobals };
