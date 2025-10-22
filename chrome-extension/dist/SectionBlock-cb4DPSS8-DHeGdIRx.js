import { $R, $r, Be, Gl, Hr, Je, Jt, Rn, Ze, cn, ds, dt, fn, kt, lt, sr, t8, tr, un } from "./index-e6Cke-ty-BIekTqkY.js";
import { f } from "./IconTitle.vue_vue_type_script_setup_true_lang-DLtdfn-T-BVHgg1U8.js";

//#region client/SectionBlock-cb4DPSS8.js
const S = ["open"], N = { "text-base": "" }, T = {
	key: 0,
	"text-sm": "",
	op50: ""
}, E = /* @__PURE__ */ $R(/* @__PURE__ */ sr({
	__name: "SectionBlock",
	props: {
		icon: {},
		text: {},
		description: {},
		containerClass: { default: "" },
		collapse: {
			type: Boolean,
			default: !0
		},
		open: {
			type: Boolean,
			default: !0
		},
		padding: {
			type: [Boolean, String],
			default: !0
		}
	},
	setup(e) {
		const n = Gl(e, "open", void 0, { passive: !0 });
		function v(t) {
			n.value = t.target.open;
		}
		return (t, a) => {
			const f$1 = f, m = t8("lazy-show");
			return Je(), lt(Hr, null, [Ze("details", {
				open: Be(n),
				onToggle: v
			}, [Ze("summary", { class: $r(["cursor-pointer select-none p4 hover:bg-active", e.collapse ? "" : "pointer-events-none"]) }, [dt(f$1, {
				icon: e.icon,
				text: e.text,
				"text-xl": "",
				transition: "",
				class: $r(Be(n) ? "op100" : "op60")
			}, {
				default: kt(() => [
					Ze("div", null, [Ze("div", N, [fn(t.$slots, "text", {}, () => [cn(un(e.text), 1)], !0)]), e.description || t.$slots.description ? (Je(), lt("div", T, [fn(t.$slots, "description", {}, () => [cn(un(e.description), 1)], !0)])) : tr("", !0)]),
					a[0] || (a[0] = Ze("div", { class: "flex-auto" }, null, -1)),
					fn(t.$slots, "actions", {}, void 0, !0),
					e.collapse ? (Je(), Jt(Be(ds), {
						key: 0,
						icon: "i-carbon-chevron-down",
						class: "chevron",
						"cursor-pointer": "",
						"place-self-start": "",
						"text-base": "",
						op75: "",
						transition: "",
						"duration-500": ""
					})) : tr("", !0)
				]),
				_: 3
			}, 8, [
				"icon",
				"text",
				"class"
			])], 2), Rn((Je(), lt("div", { class: $r(["flex flex-col flex-gap2 pb6 pt2", typeof e.padding == "string" ? e.padding : e.padding ? "px4" : ""]) }, [
				fn(t.$slots, "details", {}, void 0, !0),
				Ze("div", { class: $r([e.containerClass, "mt1"]) }, [fn(t.$slots, "default", {}, void 0, !0)], 2),
				fn(t.$slots, "footer", {}, void 0, !0)
			], 2)), [[m, Be(n)]])], 40, S), a[1] || (a[1] = Ze("div", { class: "x-divider" }, null, -1))], 64);
		};
	}
}), [["__scopeId", "data-v-d1d325e5"]]);

//#endregion
export { E };