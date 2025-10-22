import { Be, Je, Jt, XK, _m, b4, ni, pt, qh, sr } from "./index-e6Cke-ty-BIekTqkY.js";

//#region client/custom-tab-view-vRg-h0gX.js
const C = /* @__PURE__ */ sr({
	__name: "custom-tab-view",
	setup(v) {
		const o = _m(), s = qh(), { flattenedTabs: n } = b4(), u = pt(() => o.params.name), t = pt(() => n.value.find((e) => u.value === e.name) || null);
		return ni(() => {
			if (!t.value) {
				const e = setTimeout(() => {
					if (t.value) {
						clearTimeout(e);
						return;
					}
					s.replace("/overview");
				}, 2e3);
			}
		}), (e, T) => {
			const c = XK;
			return Je(), Jt(c, { tab: Be(t) }, null, 8, ["tab"]);
		};
	}
});

//#endregion
export { C as default };