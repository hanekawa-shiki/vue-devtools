import { Be, Je, Jt, LX, UX, Xt, sr } from "./index-e6Cke-ty-BIekTqkY.js";

//#region client/components-D9oYqSOd.js
const d = /* @__PURE__ */ sr({
	__name: "components",
	setup(m) {
		function o() {
			Xt.value.emit("toggle-panel", !1);
		}
		function t() {
			Xt.value.emit("toggle-panel", !0);
		}
		return (l, u) => (Je(), Jt(Be(UX), {
			onOpenInEditor: Be(LX),
			onOnInspectComponentStart: o,
			onOnInspectComponentEnd: t
		}, null, 8, ["onOpenInEditor"]));
	}
});

//#endregion
export { d as default };