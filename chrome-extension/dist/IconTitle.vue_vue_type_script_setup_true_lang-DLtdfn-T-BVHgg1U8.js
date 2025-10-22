import { $r, Je, Ze, fn, lt, sr, tr, un } from "./index-e6Cke-ty-BIekTqkY.js";

//#region client/IconTitle.vue_vue_type_script_setup_true_lang-DLtdfn-T.js
const d = {
	flex: "~ gap-3",
	"items-center": ""
}, f = /* @__PURE__ */ sr({
	__name: "IconTitle",
	props: {
		icon: {},
		text: {}
	},
	setup(e) {
		return (n, m) => (Je(), lt("div", d, [e.icon ? (Je(), lt("div", {
			key: 0,
			class: $r(e.icon)
		}, null, 2)) : tr("", !0), fn(n.$slots, "default", {}, () => [Ze("div", null, un(e.text), 1)])]));
	}
});

//#endregion
export { f };