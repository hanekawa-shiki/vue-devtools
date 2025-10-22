import { $X, $r, BX, Be, Es, Fl, Gl, Gr, HX, Hr, Je, Jt, LX, Lr, NX, OX, Rn, Rs, Ss, VX, ZC, Ze, cn, ds, dt, ei, fn, hi, kt, la, lt, pO, pt, sr, t8, tS, to, tr, u1, un, vn, ws, xt, yO, yR, zX } from "./index-e6Cke-ty-BIekTqkY.js";
import { f } from "./IconTitle.vue_vue_type_script_setup_true_lang-DLtdfn-T-BVHgg1U8.js";
import { E } from "./SectionBlock-cb4DPSS8-DHeGdIRx.js";

//#region client/assets-DrHz0toh.js
const kt$1 = {
	key: 0,
	relative: "",
	"code-block": ""
}, Bt = {
	flex: "~ wrap",
	"w-full": ""
}, Ct = ["onClick"], At = {
	flex: "~ gap-2",
	px3: "",
	pb3: ""
}, Pt = /* @__PURE__ */ sr({
	__name: "CodeSnippets",
	props: {
		codeSnippets: {},
		eventType: {}
	},
	setup(a) {
		const i = a, t = Gr(i.codeSnippets[0]), { copy: e } = tS(), o = pt(() => t.value?.lang || "text");
		return ei(() => {
			i.codeSnippets.includes(t.value) || (t.value = i.codeSnippets[0]);
		}), (s, r) => a.codeSnippets.length ? (Je(), lt("div", kt$1, [Ze("div", Bt, [(Je(!0), lt(Hr, null, ws(a.codeSnippets, (d, y) => (Je(), lt("button", {
			key: y,
			px4: "",
			py2: "",
			border: "r base",
			hover: "bg-active",
			class: $r(d === Be(t) ? "" : "border-b"),
			onClick: (m) => t.value = d
		}, [Ze("div", {
			class: $r(d === Be(t) ? "" : "op30"),
			"font-mono": ""
		}, un(d.name), 3)], 10, Ct))), 128)), r[1] || (r[1] = Ze("div", {
			border: "b base",
			"flex-auto": ""
		}, null, -1))]), Be(t) ? (Je(), lt(Hr, { key: 0 }, [dt(Be(yR), {
			code: Be(t).code,
			lang: Be(o),
			lines: !1,
			"w-full": "",
			"of-auto": "",
			p3: ""
		}, null, 8, ["code", "lang"]), Ze("div", At, [dt(Be(Ss), { onClick: r[0] || (r[0] = (d) => Be(e)(Be(t).code, {
			silent: !1,
			type: a.eventType || `code-snippet-${Be(t).name}`
		})) }, {
			icon: kt(() => [fn(s.$slots, "i-carbon-copy")]),
			default: kt(() => [r[2] || (r[2] = cn(" Copy ", -1))]),
			_: 3
		}), Be(t)?.docs ? (Je(), Jt(Be(Ss), {
			key: 0,
			to: Be(t).docs,
			target: "_blank"
		}, {
			icon: kt(() => [fn(s.$slots, "i-carbon-catalog")]),
			default: kt(() => [r[3] || (r[3] = cn(" Docs ", -1))]),
			_: 3
		}, 8, ["to"])) : tr("", !0)])], 64)) : tr("", !0)])) : tr("", !0);
	}
}), St = ["title"], zt = /* @__PURE__ */ sr({
	__name: "FilepathItem",
	props: {
		filepath: {},
		lineBreak: { type: Boolean },
		subpath: { type: Boolean }
	},
	setup(a) {
		const i = a, t = pt(() => ({ path: i.filepath })), { copy: e } = tS();
		return (o, s) => Rn((Je(), lt("button", {
			"font-mono": "",
			"hover:underline": "",
			class: $r(a.lineBreak ? "" : "ws-nowrap of-hidden truncate"),
			title: a.filepath,
			onClick: s[0] || (s[0] = (r) => Be(e)(a.filepath))
		}, [cn(un(Be(t).path), 1)], 10, St)), [[Be(Es), "Copy file path"]]);
	}
});
function jt(a) {
	return typeof a == "string" ? `'${a}'` : new Vt().serialize(a);
}
const Vt = /* @__PURE__ */ (function() {
	class a {
		#t = /* @__PURE__ */ new Map();
		compare(t, e) {
			const o = typeof t, s = typeof e;
			return o === "string" && s === "string" ? t.localeCompare(e) : o === "number" && s === "number" ? t - e : String.prototype.localeCompare.call(this.serialize(t, !0), this.serialize(e, !0));
		}
		serialize(t, e) {
			if (t === null) return "null";
			switch (typeof t) {
				case "string": return e ? t : `'${t}'`;
				case "bigint": return `${t}n`;
				case "object": return this.$object(t);
				case "function": return this.$function(t);
			}
			return String(t);
		}
		serializeObject(t) {
			const e = Object.prototype.toString.call(t);
			if (e !== "[object Object]") return this.serializeBuiltInType(e.length < 10 ? `unknown:${e}` : e.slice(8, -1), t);
			const o = t.constructor, s = o === Object || o === void 0 ? "" : o.name;
			if (s !== "" && globalThis[s] === o) return this.serializeBuiltInType(s, t);
			if (typeof t.toJSON == "function") {
				const r = t.toJSON();
				return s + (r !== null && typeof r == "object" ? this.$object(r) : `(${this.serialize(r)})`);
			}
			return this.serializeObjectEntries(s, Object.entries(t));
		}
		serializeBuiltInType(t, e) {
			const o = this["$" + t];
			if (o) return o.call(this, e);
			if (typeof e?.entries == "function") return this.serializeObjectEntries(t, e.entries());
			throw new Error(`Cannot serialize ${t}`);
		}
		serializeObjectEntries(t, e) {
			const o = Array.from(e).sort((r, d) => this.compare(r[0], d[0]));
			let s = `${t}{`;
			for (let r = 0; r < o.length; r++) {
				const [d, y] = o[r];
				s += `${this.serialize(d, !0)}:${this.serialize(y)}`, r < o.length - 1 && (s += ",");
			}
			return s + "}";
		}
		$object(t) {
			let e = this.#t.get(t);
			return e === void 0 && (this.#t.set(t, `#${this.#t.size}`), e = this.serializeObject(t), this.#t.set(t, e)), e;
		}
		$function(t) {
			const e = Function.prototype.toString.call(t);
			return e.slice(-15) === "[native code] }" ? `${t.name || ""}()[native]` : `${t.name}(${t.length})${e.replace(/\s*\n\s*/g, "")}`;
		}
		$Array(t) {
			let e = "[";
			for (let o = 0; o < t.length; o++) e += this.serialize(t[o]), o < t.length - 1 && (e += ",");
			return e + "]";
		}
		$Date(t) {
			try {
				return `Date(${t.toISOString()})`;
			} catch {
				return "Date(null)";
			}
		}
		$ArrayBuffer(t) {
			return `ArrayBuffer[${new Uint8Array(t).join(",")}]`;
		}
		$Set(t) {
			return `Set${this.$Array(Array.from(t).sort((e, o) => this.compare(e, o)))}`;
		}
		$Map(t) {
			return this.serializeObjectEntries("Map", t.entries());
		}
	}
	for (const i of [
		"Error",
		"RegExp",
		"URL"
	]) a.prototype["$" + i] = function(t) {
		return `${i}(${t})`;
	};
	for (const i of [
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Uint16Array",
		"Int32Array",
		"Uint32Array",
		"Float32Array",
		"Float64Array"
	]) a.prototype["$" + i] = function(t) {
		return `${i}[${t.join(",")}]`;
	};
	for (const i of ["BigInt64Array", "BigUint64Array"]) a.prototype["$" + i] = function(t) {
		return `${i}[${t.join("n,")}${t.length > 0 ? "n" : ""}]`;
	};
	return a;
})(), It = [
	1779033703,
	-1150833019,
	1013904242,
	-1521486534,
	1359893119,
	-1694144372,
	528734635,
	1541459225
], Dt = [
	1116352408,
	1899447441,
	-1245643825,
	-373957723,
	961987163,
	1508970993,
	-1841331548,
	-1424204075,
	-670586216,
	310598401,
	607225278,
	1426881987,
	1925078388,
	-2132889090,
	-1680079193,
	-1046744716,
	-459576895,
	-272742522,
	264347078,
	604807628,
	770255983,
	1249150122,
	1555081692,
	1996064986,
	-1740746414,
	-1473132947,
	-1341970488,
	-1084653625,
	-958395405,
	-710438585,
	113926993,
	338241895,
	666307205,
	773529912,
	1294757372,
	1396182291,
	1695183700,
	1986661051,
	-2117940946,
	-1838011259,
	-1564481375,
	-1474664885,
	-1035236496,
	-949202525,
	-778901479,
	-694614492,
	-200395387,
	275423344,
	430227734,
	506948616,
	659060556,
	883997877,
	958139571,
	1322822218,
	1537002063,
	1747873779,
	1955562222,
	2024104815,
	-2067236844,
	-1933114872,
	-1866530822,
	-1538233109,
	-1090935817,
	-965641998
], Tt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", O = [];
var Ut = class {
	_data = new J();
	_hash = new J([...It]);
	_nDataBytes = 0;
	_minBufferSize = 0;
	finalize(i) {
		i && this._append(i);
		const t = this._nDataBytes * 8, e = this._data.sigBytes * 8;
		return this._data.words[e >>> 5] |= 128 << 24 - e % 32, this._data.words[(e + 64 >>> 9 << 4) + 14] = Math.floor(t / 4294967296), this._data.words[(e + 64 >>> 9 << 4) + 15] = t, this._data.sigBytes = this._data.words.length * 4, this._process(), this._hash;
	}
	_doProcessBlock(i, t) {
		const e = this._hash.words;
		let o = e[0], s = e[1], r = e[2], d = e[3], y = e[4], m = e[5], j = e[6], V = e[7];
		for (let b = 0; b < 64; b++) {
			if (b < 16) O[b] = i[t + b] | 0;
			else {
				const p = O[b - 15], c = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3, $ = O[b - 2], k = ($ << 15 | $ >>> 17) ^ ($ << 13 | $ >>> 19) ^ $ >>> 10;
				O[b] = c + O[b - 7] + k + O[b - 16];
			}
			const U = y & m ^ ~y & j, W = o & s ^ o & r ^ s & r, g = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22), f$1 = (y << 26 | y >>> 6) ^ (y << 21 | y >>> 11) ^ (y << 7 | y >>> 25), v = V + f$1 + U + Dt[b] + O[b], I = g + W;
			V = j, j = m, m = y, y = d + v | 0, d = r, r = s, s = o, o = v + I | 0;
		}
		e[0] = e[0] + o | 0, e[1] = e[1] + s | 0, e[2] = e[2] + r | 0, e[3] = e[3] + d | 0, e[4] = e[4] + y | 0, e[5] = e[5] + m | 0, e[6] = e[6] + j | 0, e[7] = e[7] + V | 0;
	}
	_append(i) {
		typeof i == "string" && (i = J.fromUtf8(i)), this._data.concat(i), this._nDataBytes += i.sigBytes;
	}
	_process(i) {
		let t, e = this._data.sigBytes / 64;
		i ? e = Math.ceil(e) : e = Math.max((e | 0) - this._minBufferSize, 0);
		const o = e * 16, s = Math.min(o * 4, this._data.sigBytes);
		if (o) {
			for (let r = 0; r < o; r += 16) this._doProcessBlock(this._data.words, r);
			t = this._data.words.splice(0, o), this._data.sigBytes -= s;
		}
		return new J(t, s);
	}
};
var J = class J {
	words;
	sigBytes;
	constructor(i, t) {
		i = this.words = i || [], this.sigBytes = t === void 0 ? i.length * 4 : t;
	}
	static fromUtf8(i) {
		const t = unescape(encodeURIComponent(i)), e = t.length, o = [];
		for (let s = 0; s < e; s++) o[s >>> 2] |= (t.charCodeAt(s) & 255) << 24 - s % 4 * 8;
		return new J(o, e);
	}
	toBase64() {
		const i = [];
		for (let t = 0; t < this.sigBytes; t += 3) {
			const e = this.words[t >>> 2] >>> 24 - t % 4 * 8 & 255, o = this.words[t + 1 >>> 2] >>> 24 - (t + 1) % 4 * 8 & 255, s = this.words[t + 2 >>> 2] >>> 24 - (t + 2) % 4 * 8 & 255, r = e << 16 | o << 8 | s;
			for (let d = 0; d < 4 && t * 8 + d * 6 < this.sigBytes * 8; d++) i.push(Tt.charAt(r >>> 6 * (3 - d) & 63));
		}
		return i.join("");
	}
	concat(i) {
		if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let t = 0; t < i.sigBytes; t++) {
			const e = i.words[t >>> 2] >>> 24 - t % 4 * 8 & 255;
			this.words[this.sigBytes + t >>> 2] |= e << 24 - (this.sigBytes + t) % 4 * 8;
		}
		else for (let t = 0; t < i.sigBytes; t += 4) this.words[this.sigBytes + t >>> 2] = i.words[t >>> 2];
		this.sigBytes += i.sigBytes;
	}
};
function Ot(a) {
	return new Ut().finalize(a).toBase64();
}
function Ft(a) {
	return Ot(jt(a));
}
const Et = /* @__PURE__ */ sr({
	__name: "AssetFontPreview",
	props: { asset: {} },
	setup(a) {
		const i = a, t = pt(() => `devtools-assets-${Ft(i.asset)}`);
		return VX(pt(() => `
  @font-face {
    font-family: '${t.value}';
    src: url('${i.asset.publicPath}');
  }
`)), (e, o) => (Je(), lt("div", {
			"of-hidden": "",
			style: Rs({ fontFamily: `'${Be(t)}'` })
		}, " Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz ", 4));
	}
}), Mt = {
	flex: "",
	"items-center": "",
	"justify-center": "",
	"of-hidden": "",
	"bg-active": "",
	"object-cover": "",
	p1: ""
}, Lt = ["src"], Rt = {
	key: 2,
	"i-carbon-document": "",
	"text-3xl": "",
	op20: ""
}, Nt = {
	key: 3,
	"w-full": "",
	"self-start": "",
	p4: ""
}, qt = ["textContent"], Gt = { key: 4 }, Jt$1 = [
	"src",
	"autoplay",
	"controls"
], Ht = { key: 5 }, Kt = {
	key: 0,
	"i-carbon-volume-up": "",
	"text-3xl": "",
	op20: ""
}, Wt = ["src"], Xt = {
	key: 6,
	"i-vscode-icons-file-type-wasm": "",
	"text-3xl": ""
}, Yt = {
	key: 7,
	"i-carbon-help": "",
	"text-3xl": "",
	op20: ""
}, it = /* @__PURE__ */ sr({
	__name: "AssetPreview",
	props: {
		asset: {},
		textContent: {},
		detail: { type: Boolean }
	},
	setup(a) {
		return (i, t) => {
			const e = Et;
			return Je(), lt("div", Mt, [a.asset.type === "image" ? (Je(), lt("img", {
				key: 0,
				src: a.asset.publicPath
			}, null, 8, Lt)) : a.asset.type === "font" ? (Je(), Jt(e, {
				key: a.asset.publicPath,
				asset: a.asset,
				"self-stretch": "",
				p2: "",
				"text-2xl": ""
			}, null, 8, ["asset"])) : a.asset.type === "text" && !a.textContent ? (Je(), lt("div", Rt)) : a.asset.type === "text" && a.textContent ? (Je(), lt("div", Nt, [Ze("pre", {
				"max-h-10rem": "",
				"of-hidden": "",
				"text-xs": "",
				"font-mono": "",
				textContent: un(a.textContent)
			}, null, 8, qt)])) : a.asset.type === "video" ? (Je(), lt("div", Gt, [Ze("video", {
				src: a.asset.publicPath,
				autoplay: a.detail,
				controls: a.detail
			}, null, 8, Jt$1)])) : a.asset.type === "audio" ? (Je(), lt("div", Ht, [a.detail ? (Je(), lt("audio", {
				key: 1,
				src: a.asset.publicPath,
				controls: ""
			}, null, 8, Wt)) : (Je(), lt("div", Kt))])) : a.asset.type === "wasm" ? (Je(), lt("div", Xt)) : (Je(), lt("div", Yt))]);
		};
	}
}), Qt = {
	flex: "~ col gap-4",
	"min-h-full": "",
	"w-full": "",
	"of-hidden": "",
	p4: ""
}, Zt = {
	flex: "~",
	"items-center": "",
	"justify-center": ""
}, te = {
	"max-w-full": "",
	"w-full": "",
	"table-fixed": ""
}, ee = {
	flex: "~ gap-1",
	"w-full": "",
	"items-center": ""
}, ne = {
	flex: "~ gap-1",
	"w-full": "",
	"items-center": "",
	"of-hidden": ""
}, se = {
	"flex-auto": "",
	"of-hidden": "",
	truncate: "",
	"ws-pre": "",
	"font-mono": ""
}, oe = { capitalize: "" }, ie = { key: 0 }, le = { op70: "" }, ae = { flex: "~ gap2 wrap" }, re = /* @__PURE__ */ sr({
	__name: "AssetDetails",
	props: { modelValue: {} },
	setup(a, { emit: i }) {
		const t = a, e = i, o = Fl(), s = Gl(t, "modelValue", e, { passive: !0 }), r = pt(() => o.vitePluginDetected.value), d = zX(() => yO.value.getAssetImporters(s.value.publicPath).then((p) => p), []), y = pt(() => pO.value), m = zX(() => {
			if (s.value.type === "image") return yO.value.getImageMeta(s.value.filePath).then((p) => p);
		}), j = xt(), V = xt(0), b = zX(async () => {
			if (s.value.type !== "text") return;
			V.value;
			const p = await yO.value.getTextAssetContent(s.value.filePath).then((c) => c);
			return j.value = p, p;
		}), U = pt(() => {
			const p = [];
			if (s.value.type === "image") {
				const c = m.value?.width ? `
  width="${m.value.width}"
  height="${m.value.height}" ` : " ";
				return p.push({
					lang: "vue-html",
					code: `<img${c}
  src="${s.value.publicPath}"
/>`,
					name: "Plain Image"
				}), p;
			}
			return p.push({
				lang: "html",
				code: `<a download href="${s.value.publicPath}">
  Download ${s.value.path.split("/").slice(-1)[0]}
</a>`,
				name: "Download link"
			}), p;
		}), { copy: W } = tS(), g = HX(() => s.value.mtime), f$1 = pt(() => {
			const p = s.value.size;
			return p < 1024 ? `${p} B` : p < 1024 * 1024 ? `${(p / 1024).toFixed(2)} KB` : `${(p / 1024 / 1024).toFixed(2)} MB`;
		}), v = pt(() => {
			if (!m.value?.width || !m.value?.height) return "";
			const p = ($, k) => k ? p(k, $ % k) : $, c = p(m.value.width, m.value.height);
			return c > 3 ? `${m.value.width / c}:${m.value.height / c}` : "";
		}), I = pt(() => [
			"image",
			"text",
			"video",
			"audio",
			"font"
		].includes(s.value.type));
		return (p, c) => {
			const $ = it, k = zt, R = la("RouterLink"), x = Pt;
			return Je(), lt("div", Qt, [
				Be(I) ? (Je(), lt(Hr, { key: 0 }, [c[2] || (c[2] = Ze("div", {
					flex: "~ gap2",
					"mb--2": "",
					"items-center": "",
					op50: ""
				}, [
					Ze("div", { "x-divider": "" }),
					Ze("div", { "flex-none": "" }, " Preview "),
					Ze("div", { "x-divider": "" })
				], -1)), Ze("div", Zt, [dt($, {
					detail: "",
					"max-h-80": "",
					"min-h-20": "",
					"min-w-20": "",
					"w-auto": "",
					rounded: "",
					border: "~ base",
					asset: Be(s),
					"text-content": Be(b)
				}, null, 8, ["asset", "text-content"])])], 64)) : tr("", !0),
				c[12] || (c[12] = Ze("div", {
					flex: "~ gap2",
					"mb--2": "",
					"items-center": "",
					op50: ""
				}, [
					Ze("div", { "x-divider": "" }),
					Ze("div", { "flex-none": "" }, " Details "),
					Ze("div", { "x-divider": "" })
				], -1)),
				Ze("table", te, [Ze("tbody", null, [
					Ze("tr", null, [c[3] || (c[3] = Ze("td", {
						"w-30": "",
						"ws-nowrap": "",
						pr5: "",
						"text-right": "",
						op50: ""
					}, " Filepath ", -1)), Ze("td", null, [Ze("div", ee, [dt(k, {
						filepath: Be(s).filePath,
						"text-left": ""
					}, null, 8, ["filepath"]), Be(r) && Be(y) ? Rn((Je(), Jt(Be(ds), {
						key: 0,
						title: "Open in Editor",
						icon: "i-carbon-launch",
						action: "",
						"flex-none": "",
						border: !1,
						onClick: c[0] || (c[0] = (B) => Be(LX)(Be(s).filePath))
					}, null, 512)), [[Be(Es), "Open in Editor"]]) : tr("", !0)])])]),
					Ze("tr", null, [c[4] || (c[4] = Ze("td", {
						"w-30": "",
						"ws-nowrap": "",
						pr5: "",
						"text-right": "",
						op50: ""
					}, " Public Path ", -1)), Ze("td", null, [Ze("div", ne, [
						Ze("div", se, un(Be(s).publicPath), 1),
						Rn(dt(Be(ds), {
							title: "Copy public path",
							icon: "i-carbon-copy",
							action: "",
							mr1: "",
							"mt--2px": "",
							"flex-none": "",
							border: !1,
							onClick: c[1] || (c[1] = (B) => Be(W)(Be(s).publicPath, { type: "assets-public-path" }))
						}, null, 512), [[Be(Es), "Copy public path"]]),
						dt(R, {
							to: Be(s).publicPath,
							target: "_blank"
						}, {
							default: kt(() => [Rn(dt(Be(ds), {
								icon: "i-carbon-launch",
								action: "",
								"flex-none": "",
								border: !1,
								title: "Open in Browser"
							}, null, 512), [[Be(Es), "Open in Browser"]])]),
							_: 1
						}, 8, ["to"])
					])])]),
					Ze("tr", null, [c[5] || (c[5] = Ze("td", {
						"w-30": "",
						"ws-nowrap": "",
						pr5: "",
						"text-right": "",
						op50: ""
					}, " Type ", -1)), Ze("td", oe, un(Be(s).type), 1)]),
					Be(m)?.width ? (Je(), lt(Hr, { key: 0 }, [Ze("tr", null, [c[6] || (c[6] = Ze("td", {
						"w-30": "",
						"ws-nowrap": "",
						pr5: "",
						"text-right": "",
						op50: ""
					}, " Image Size ", -1)), Ze("td", null, un(Be(m).width) + " x " + un(Be(m).height), 1)]), Be(v) ? (Je(), lt("tr", ie, [c[7] || (c[7] = Ze("td", {
						"w-30": "",
						"ws-nowrap": "",
						pr5: "",
						"text-right": "",
						op50: ""
					}, " Aspect Ratio ", -1)), Ze("td", null, un(Be(v)), 1)])) : tr("", !0)], 64)) : tr("", !0),
					Ze("tr", null, [c[8] || (c[8] = Ze("td", {
						"w-30": "",
						"ws-nowrap": "",
						pr5: "",
						"text-right": "",
						op50: ""
					}, " File size ", -1)), Ze("td", null, un(Be(f$1)), 1)]),
					Ze("tr", null, [c[9] || (c[9] = Ze("td", {
						"w-30": "",
						"ws-nowrap": "",
						pr5: "",
						"text-right": "",
						op50: ""
					}, " Last modified ", -1)), Ze("td", null, [cn(un(new Date(Be(s).mtime).toLocaleString()) + " ", 1), Ze("span", le, "(" + un(Be(g)) + ")", 1)])]),
					Ze("tr", null, [c[10] || (c[10] = Ze("td", {
						"w-30": "",
						"ws-nowrap": "",
						pr5: "",
						"text-right": "",
						"align-top": "",
						op50: ""
					}, " Importers ", -1)), Ze("td", null, [Be(d).length > 0 ? (Je(!0), lt(Hr, { key: 0 }, ws(Be(d), (B) => (Je(), lt("div", {
						key: B.url,
						flex: "~ gap-1",
						"w-full": "",
						"items-center": ""
					}, [dt(k, {
						filepath: B.id || B.url,
						"text-left": ""
					}, null, 8, ["filepath"]), Be(o).vitePluginDetected.value && Be(y) && B.id ? Rn((Je(), Jt(Be(ds), {
						key: 0,
						title: "Open in Editor",
						icon: "i-carbon-launch",
						action: "",
						"flex-none": "",
						border: !1,
						onClick: (N) => Be(LX)(B.id)
					}, null, 8, ["onClick"])), [[Be(Es), "Open in Editor"]]) : tr("", !0)]))), 128)) : (Je(), lt(Hr, { key: 1 }, [cn(" None ")], 64))])])
				])]),
				c[13] || (c[13] = Ze("div", {
					flex: "~ gap2",
					"mb--2": "",
					"items-center": "",
					op50: ""
				}, [
					Ze("div", { "x-divider": "" }),
					Ze("div", { "flex-none": "" }, " Actions "),
					Ze("div", { "x-divider": "" })
				], -1)),
				Ze("div", ae, [dt(Be(Ss), {
					to: Be(s).publicPath,
					download: "",
					target: "_blank"
				}, {
					icon: kt(() => [fn(p.$slots, "i-carbon-download")]),
					default: kt(() => [c[11] || (c[11] = cn(" Download ", -1))]),
					_: 3
				}, 8, ["to"])]),
				c[14] || (c[14] = Ze("div", { "flex-auto": "" }, null, -1)),
				Be(U).length ? (Je(), Jt(x, {
					key: 1,
					border: "t base",
					"mx--4": "",
					"mb--4": "",
					"code-snippets": Be(U)
				}, null, 8, ["code-snippets"])) : tr("", !0)
			]);
		};
	}
}), ue = /* @__PURE__ */ sr({
	__name: "AssetListItem",
	props: {
		item: {},
		index: { default: 0 },
		modelValue: {}
	},
	setup(a, { emit: i }) {
		const t = a, o = Gl(t, "modelValue", i, { passive: !0 }), s = pt(() => t.item?.children?.length), r = xt(!0), d = pt(() => s.value ? "i-carbon-folder" : t.item.type === "image" ? "i-carbon-image" : t.item.type === "video" ? "i-carbon-video" : t.item.type === "audio" ? "i-carbon-volume-up" : t.item.type === "font" ? "i-carbon-text-small-caps" : t.item.type === "text" ? "i-carbon-document" : t.item.type === "json" ? "i-carbon-json" : t.item.type === "wasm" ? "i-vscode-icons-file-type-wasm" : "i-carbon-document-blank");
		return (y, m) => {
			const j = la("AssetListItem", !0);
			return Je(), lt("div", null, [Ze("button", {
				flex: "~ gap-2",
				"w-full": "",
				"items-center": "",
				hover: "bg-active",
				px4: "",
				py1: "",
				style: Rs({ paddingLeft: `calc(1rem + ${a.index * 1.5}em)` }),
				class: $r({ "bg-active": !Be(s) && Be(o)?.filePath === a.item?.filePath }),
				border: "b base",
				onClick: m[0] || (m[0] = (V) => Be(s) ? r.value = !Be(r) : o.value = a.item)
			}, [
				Ze("div", { class: $r(Be(d)) }, null, 2),
				Ze("span", {
					class: $r({ "flex items-center": Be(s) }),
					"flex-auto": "",
					"text-start": "",
					"text-sm": "",
					"font-mono": ""
				}, un(a.item.path), 3),
				Be(s) ? (Je(), Jt(Be(ds), {
					key: 0,
					icon: "carbon:chevron-right",
					"transform-rotate": Be(r) ? 90 : 0,
					transition: ""
				}, null, 8, ["transform-rotate"])) : tr("", !0)
			], 6), Be(r) ? fn(y.$slots, "default", { key: 0 }, () => [(Je(!0), lt(Hr, null, ws(a.item?.children, (V) => (Je(), Jt(j, {
				key: V.filepath,
				modelValue: Be(o),
				"onUpdate:modelValue": m[1] || (m[1] = (b) => vn(o) ? o.value = b : null),
				item: V,
				index: a.index + 1
			}, null, 8, [
				"modelValue",
				"item",
				"index"
			]))), 128))]) : tr("", !0)]);
		};
	}
}), ce = {
	flex: "~ col gap-1",
	hover: "bg-active",
	"items-center": "",
	"of-hidden": "",
	rounded: "",
	p2: ""
}, de = {
	"w-full": "",
	"of-hidden": "",
	truncate: "",
	"ws-nowrap": "",
	"text-center": "",
	"text-xs": ""
}, pe = /* @__PURE__ */ sr({
	__name: "AssetGridItem",
	props: {
		asset: {},
		folder: {}
	},
	setup(a) {
		const i = a, t = pt(() => i.folder && i.asset.path.startsWith(i.folder) ? i.asset.path.slice(i.folder.length) : i.asset.path);
		return (e, o) => {
			const s = it;
			return Je(), lt("button", ce, [dt(s, {
				"h-30": "",
				"w-30": "",
				rounded: "",
				border: "~ base",
				asset: a.asset
			}, null, 8, ["asset"]), Ze("div", de, un(Be(t)), 1)]);
		};
	}
}), he = {
	flex: "~ col gap2",
	border: "b base",
	"navbar-glass": "",
	"flex-1": "",
	p4: ""
}, fe = {
	flex: "~ gap4",
	"items-center": ""
}, me = /* @__PURE__ */ sr({
	__name: "Navbar",
	props: {
		search: {},
		noPadding: { type: Boolean }
	},
	emits: ["update:search"],
	setup(a, { emit: i }) {
		const t = a, e = i, o = xt(t.search);
		return Lr(() => t.search, (s) => {
			o.value = s;
		}), Lr(o, () => {
			e("update:search", o.value);
		}), (s, r) => (Je(), lt("div", he, [Ze("div", fe, [fn(s.$slots, "search", {}, () => [a.search !== void 0 ? (Je(), Jt(Be(to), {
			key: 0,
			modelValue: Be(o),
			"onUpdate:modelValue": r[0] || (r[0] = (d) => vn(o) ? o.value = d : null),
			placeholder: "Search...",
			"left-icon": "i-carbon-search",
			class: $r(["flex-auto", { "px-5 py-2": !a.noPadding }])
		}, null, 8, ["modelValue", "class"])) : tr("", !0)]), fn(s.$slots, "actions")]), fn(s.$slots, "default")]));
	}
}), ve = {
	block: "",
	"h-full": "",
	"of-hidden": "",
	class: "drawer-container relative"
}, ye = {
	"h-full": "",
	"w-full": "",
	"of-auto": ""
}, ge = {
	"flex-none": "",
	flex: "~ gap2 items-center",
	"text-lg": ""
}, xe = {
	flex: "~ items-center justify-center",
	absolute: "",
	"bottom-0": "",
	"right-2px": "",
	"h-4": "",
	"w-4": "",
	"rounded-full": "",
	"bg-primary-800": "",
	"text-8px": "",
	"text-white": ""
}, be = {
	"w-full": "",
	flex: "~ gap-2 items-center",
	rounded: "",
	px2: "",
	py2: ""
}, we = {
	"text-xs": "",
	op75: ""
}, $e = { op50: "" }, _e = { key: 0 }, ke = {
	"mt--4": "",
	px2: "",
	grid: "~ cols-minmax-8rem"
}, Be$1 = {
	key: 1,
	p2: "",
	grid: "~ cols-minmax-8rem"
}, Ce = { key: 1 }, Ae = 50, Ve = /* @__PURE__ */ sr({
	__name: "assets",
	setup(a) {
		const i = xt(""), t = xt(), e = xt("grid"), o = xt([]), s = pt(() => {
			const g = [];
			for (const f$1 of o.value || []) {
				const v = f$1.path.split(".").pop();
				v && !g.find((I) => I.value === v) && g.push({
					label: v,
					value: v
				});
			}
			return g;
		}), r = xt([]);
		NX(() => s.value, (g) => {
			r.value = g.map((f$1) => f$1.value);
		});
		const d = xt(), y = pt(() => new u1(o.value || [], { keys: ["path"] })), m = pt(() => (i.value ? y.value.search(i.value).map((f$1) => f$1.item) : o.value || []).filter((f$1) => {
			const v = f$1.path.split(".").pop();
			return !v || r.value.includes(v);
		})), j = pt(() => {
			const g = {};
			for (const f$1 of m.value) {
				const v = `${f$1.relativePath.split("/").slice(0, -1).join("/")}/`;
				g[v] || (g[v] = []), g[v].push(f$1);
			}
			return Object.entries(g).sort(([f$1], [v]) => f$1.localeCompare(v));
		}), V = pt(() => {
			const g = { children: [] }, f$1 = (v, I, p) => {
				const [c, ...$] = I;
				let k = v.children.find((R) => R.path === c);
				k || (k = {
					...p,
					path: c,
					children: []
				}, v.children.push(k)), $.length > 1 ? f$1(k, $, p) : $.length === 1 && k.children.push({
					...p,
					path: $[0]
				});
			};
			return m.value.forEach((v) => {
				f$1(g, v.relativePath.split("/").filter((p) => p !== ""), v);
			}), g.children;
		});
		function b() {
			yO.value.getStaticAssets().then((g) => {
				o.value = g;
			});
		}
		function U() {
			b();
		}
		OX(() => {
			b(), yO.functions.on("assetsUpdated", U);
		});
		function W() {
			e.value = e.value === "list" ? "grid" : "list";
		}
		return hi(() => {
			yO.functions.off("assetsUpdated", U);
		}), (g, f$1) => {
			const v = f, I = me, p = pe, c = E, $ = ue, k = re, R = t8("tooltip");
			return Je(), lt("div", ve, [Ze("div", ye, [dt(I, {
				ref_key: "navbar",
				ref: t,
				search: Be(i),
				"onUpdate:search": f$1[1] || (f$1[1] = (x) => vn(i) ? i.value = x : null),
				pb2: "",
				"no-padding": !0
			}, {
				actions: kt(() => [Ze("div", ge, [dt(Be(ZC), {
					modelValue: Be(r),
					"onUpdate:modelValue": f$1[0] || (f$1[0] = (x) => vn(r) ? r.value = x : null),
					multiple: !0,
					options: Be(s)
				}, {
					button: kt(() => [Rn((Je(), Jt(v, {
						icon: "i-carbon-filter hover:op50",
						border: !1,
						title: "Filter",
						relative: "",
						"cursor-pointer": "",
						p2: "",
						"text-lg": "",
						onClick: () => {}
					}, {
						default: kt(() => [Ze("span", xe, un(Be(r).length), 1)]),
						_: 1
					})), [[
						R,
						"Filter",
						void 0,
						{ "bottom-end": !0 }
					]])]),
					item: kt(({ item: x, active: B }) => [Ze("div", be, [dt(Be(BX), { "model-value": B }, null, 8, ["model-value"]), Ze("span", we, un(x.label), 1)])]),
					_: 1
				}, 8, ["modelValue", "options"]), Rn(dt(Be(ds), {
					border: !1,
					icon: Be(e) === "grid" ? "i-carbon-list" : "i-carbon-grid",
					title: "Toggle view",
					action: "",
					"cursor-pointer": "",
					"text-lg": "",
					onClick: W
				}, null, 8, ["icon"]), [[
					R,
					"Toggle View",
					void 0,
					{ "bottom-end": !0 }
				]])])]),
				default: kt(() => [Ze("div", $e, [Be(i) ? (Je(), lt("span", _e, un(Be(m).length) + " matched · ", 1)) : tr("", !0), Ze("span", null, un(Be(o)?.length) + " assets in total", 1)])]),
				_: 1
			}, 8, ["search"]), Be(e) === "grid" ? (Je(), lt(Hr, { key: 0 }, [Be(j).length > 1 ? (Je(!0), lt(Hr, { key: 0 }, ws(Be(j), ([x, B]) => (Je(), Jt(c, {
				key: x,
				text: x,
				description: `${B.length} items`,
				open: B.length <= Ae,
				padding: !1
			}, {
				default: kt(() => [Ze("div", ke, [(Je(!0), lt(Hr, null, ws(B, (N) => (Je(), Jt(p, {
					key: N.path,
					asset: N,
					folder: x,
					onClick: (Pe) => d.value = N
				}, null, 8, [
					"asset",
					"folder",
					"onClick"
				]))), 128))])]),
				_: 2
			}, 1032, [
				"text",
				"description",
				"open"
			]))), 128)) : (Je(), lt("div", Be$1, [(Je(!0), lt(Hr, null, ws(Be(m), (x) => (Je(), Jt(p, {
				key: x.path,
				asset: x,
				onClick: (B) => d.value = x
			}, null, 8, ["asset", "onClick"]))), 128))]))], 64)) : (Je(), lt("div", Ce, [(Je(!0), lt(Hr, null, ws(Be(V), (x, B) => (Je(), Jt($, {
				key: B,
				modelValue: Be(d),
				"onUpdate:modelValue": f$1[2] || (f$1[2] = (N) => vn(d) ? d.value = N : null),
				item: x
			}, null, 8, ["modelValue", "item"]))), 128))]))]), dt(Be($X), {
				"model-value": !!Be(d),
				top: Be(t),
				permanent: "",
				"mount-to": ".drawer-container",
				position: "absolute",
				"content-class": "w120 text-sm",
				"onUpdate:modelValue": f$1[4] || (f$1[4] = (x) => {
					x || (d.value = void 0);
				})
			}, {
				default: kt(() => [Be(d) ? (Je(), Jt(k, {
					key: 0,
					modelValue: Be(d),
					"onUpdate:modelValue": f$1[3] || (f$1[3] = (x) => vn(d) ? d.value = x : null)
				}, null, 8, ["modelValue"])) : tr("", !0)]),
				_: 1
			}, 8, ["model-value", "top"])]);
		};
	}
});

//#endregion
export { Ve as default };