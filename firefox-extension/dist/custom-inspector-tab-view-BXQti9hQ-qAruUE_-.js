import { Be, Je, Jt, Sq, Ze, _m, cn, lt, mK, pt, qh, sr, tr, un, xt } from "./index-e6Cke-ty-BIekTqkY.js";

//#region client/custom-inspector-tab-view-BXQti9hQ.js
const B = {
	key: 0,
	flex: "~ col",
	"h-full": "",
	"items-center": "",
	"justify-center": ""
}, I = {
	flex: "~ col gap2",
	mxa: "",
	"items-center": ""
}, R = { "text-xl": "" }, w = { "text-rose": "" }, V = /* @__PURE__ */ sr({
	__name: "custom-inspector-tab-view",
	setup(C) {
		const a = _m(), u = qh(), n = xt(!1), c = mK(), r = pt(() => c.value.find((s) => s.name === a.params.name)?.pluginId);
		function l() {
			n.value = !0;
			const s = setTimeout(() => {
				clearTimeout(s), u.replace("/overview");
			}, 2e3);
		}
		return (s, t) => Be(n) ? (Je(), lt("div", B, [Ze("div", I, [
			t[1] || (t[1] = Ze("div", {
				"i-carbon-queued": "",
				mb2: "",
				"text-5xl": "",
				op50: ""
			}, null, -1)),
			Ze("p", R, [Ze("code", w, un(Be(a).params.name), 1), t[0] || (t[0] = cn(" not found ", -1))]),
			t[2] || (t[2] = Ze("p", {
				mt8: "",
				"animate-pulse": ""
			}, " Redirecting to overview page... ", -1))
		])])) : !Be(n) && Be(r) ? (Je(), Jt(Be(Sq), {
			key: 1,
			id: Be(a).params.name,
			"plugin-id": Be(r),
			onLoadError: l
		}, null, 8, ["id", "plugin-id"])) : tr("", !0);
	}
});

//#endregion
export { V as default };