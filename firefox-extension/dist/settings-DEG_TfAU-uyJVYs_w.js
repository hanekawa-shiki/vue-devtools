import { $r, BX, Be, FX, Hr, IX, Je, Jt, MR, Py, Ss, ZC, Ze, b4, cn, dX, dt, fR, io, kt, lt, ms, pt, qX, sf, sr, tr, un, vn, ws, xt, zR } from "./index-e6Cke-ty-BIekTqkY.js";
import { f } from "./IconTitle.vue_vue_type_script_setup_true_lang-DLtdfn-T-BVHgg1U8.js";

//#region client/settings-DEG_TfAU.js
const pe = {
	"h-full": "",
	"w-full": "",
	"of-auto": "",
	px8: "",
	py6: ""
}, me = {
	grid: "~ md:cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-x-10 gap-y-3",
	"max-w-300": ""
}, ve = { flex: "~ col gap-2" }, fe = {
	flex: "~ gap-2",
	"flex-auto": "",
	"items-center": "",
	"justify-start": ""
}, xe = {
	capitalize: "",
	op75: ""
}, ge = {
	flex: "~ gap-2",
	"flex-auto": "",
	"items-center": "",
	"justify-start": "",
	"pr-4": "",
	"text-sm": ""
}, ce = ["onClick"], be = ["onClick"], ye = ["onClick"], Ve = { flex: "~ col gap-2" }, ke = { flex: "~ gap2" }, we = { class: "flex items-center gap2 text-sm" }, Ce = { class: "flex items-center gap2 text-sm" }, Se = { class: "flex items-center gap2 text-sm" }, Te = { class: "flex items-center gap2 text-sm" }, Ue = { flex: "~ gap-2" }, De = /* @__PURE__ */ sr({
	__name: "settings",
	setup(Ie) {
		const { categorizedTabs: H } = b4(), A = dX(), q = A === "iframe" || A === "separate-window", { scale: k, interactionCloseOnOutsideClick: w, showPanel: C, minimizePanelInteractive: g, expandSidebar: S, scrollableSidebar: T, reduceMotion: G } = Py(IX(ms)), J = [
			["Tiny", 12 / 15],
			["Small", 14 / 15],
			["Normal", 1],
			["Large", 16 / 15],
			["Huge", 18 / 15]
		], K = [
			["Always", 0],
			["1s", 1e3],
			["2s", 2e3],
			["5s", 5e3],
			["10s", 1e4],
			["Never", -1]
		], { hiddenTabCategories: c, hiddenTabs: b, pinnedTabs: i } = Py(ms.value.tabSettings);
		function Q(s, e) {
			e ? b.value = b.value.filter((u) => u !== s) : b.value.push(s);
		}
		function W(s, e) {
			e ? c.value = c.value.filter((u) => u !== s) : c.value.push(s);
		}
		function X(s) {
			i.value.includes(s) ? i.value = i.value.filter((e) => e !== s) : i.value.push(s);
		}
		function L(s, e) {
			const u = i.value.indexOf(s);
			if (u === -1) return;
			const v = u + e;
			if (v < 0 || v >= i.value.length) return;
			const o = [...i.value];
			o.splice(u, 1), o.splice(v, 0, s), i.value = o;
		}
		const y = xt(!1);
		async function Y() {
			qX(), window.location.reload();
		}
		const M = K.map(([s, e]) => ({
			label: s,
			value: e
		})), Z = pt(() => `${M.find((e) => e.value === g.value)?.label ?? "Select..."}`);
		return (s, e) => {
			const u = f, v = sf;
			return Je(), lt("div", pe, [dt(u, {
				class: "mb-5 text-xl op75",
				icon: "i-carbon-settings-adjust",
				text: "DevTools Settings"
			}), Ze("div", me, [Ze("div", ve, [e[12] || (e[12] = Ze("h3", { "text-lg": "" }, " Tabs ", -1)), (Je(!0), lt(Hr, null, ws(Be(H), ([{ name: o, hidden: f$1 }, N]) => (Je(), lt(Hr, { key: o }, [N.length ? (Je(), Jt(Be(fR), {
				key: 0,
				p3: "",
				flex: "~ col gap-1",
				class: $r(f$1 ? "op50 grayscale" : "")
			}, {
				default: kt(() => [
					dt(Be(zR), {
						"model-value": !Be(c).includes(o),
						class: "row-reverse flex py1 pl2 pr1 hover:bg-active",
						"onUpdate:modelValue": (n) => W(o, n)
					}, {
						default: kt(() => [Ze("div", fe, [Ze("span", xe, un(o), 1)])]),
						_: 2
					}, 1032, ["model-value", "onUpdate:modelValue"]),
					e[11] || (e[11] = Ze("div", {
						"mx--1": "",
						my1: "",
						"h-1px": "",
						border: "b base",
						op75: ""
					}, null, -1)),
					(Je(!0), lt(Hr, null, ws(N, (n) => (Je(), Jt(Be(zR), {
						key: n.name,
						class: $r(["row-reverse n-primary flex py1 pl2 pr1 hover:bg-active", n.hidden ? "op35" : ""]),
						"model-value": !Be(b).includes(n.name),
						"onUpdate:modelValue": (P) => Q(n.name, P)
					}, {
						default: kt(() => [Ze("div", ge, [
							dt(v, {
								"text-xl": "",
								icon: n.icon,
								fallback: n.fallbackIcon,
								title: n.title
							}, null, 8, [
								"icon",
								"fallback",
								"title"
							]),
							Ze("span", null, un(n.title), 1),
							e[10] || (e[10] = Ze("div", { "flex-auto": "" }, null, -1)),
							Be(i).includes(n.name) ? (Je(), lt(Hr, { key: 0 }, [Ze("button", {
								class: "flex items-center px1 py1 text-sm op65 hover:bg-active hover:op100",
								onClick: io(() => {
									Be(i).indexOf(n.name) !== 0 && L(n.name, -1);
								}, ["stop"])
							}, [...e[8] || (e[8] = [Ze("div", { class: "i-carbon-caret-up" }, null, -1)])], 8, ce), Ze("button", {
								class: "flex items-center px1 py1 text-sm op65 hover:bg-active hover:op100",
								onClick: io(() => {
									Be(i).indexOf(n.name) !== Be(i).length - 1 && L(n.name, 1);
								}, ["stop"])
							}, [...e[9] || (e[9] = [Ze("div", { class: "i-carbon-caret-down" }, null, -1)])], 8, be)], 64)) : tr("", !0),
							Ze("button", {
								class: "flex items-center px1 py1 text-sm op65 hover:bg-active hover:op100",
								onClick: io((P) => X(n.name), ["stop"])
							}, [Ze("div", { class: $r(Be(i).includes(n.name) ? " i-carbon-pin-filled rotate--45" : " i-carbon-pin op45") }, null, 2)], 8, ye)
						])]),
						_: 2
					}, 1032, [
						"model-value",
						"class",
						"onUpdate:modelValue"
					]))), 128))
				]),
				_: 2
			}, 1032, ["class"])) : tr("", !0)], 64))), 128))]), Ze("div", Ve, [
				e[25] || (e[25] = Ze("h3", { "text-lg": "" }, " Appearance ", -1)),
				dt(Be(fR), {
					p4: "",
					flex: "~ col gap-2"
				}, {
					default: kt(() => [
						Ze("div", ke, [dt(Be(MR), { animation: !Be(G) }, {
							default: kt(({ isDark: o, toggle: f$1 }) => [dt(Be(Ss), {
								outlined: "",
								type: "primary",
								onClick: f$1
							}, {
								default: kt(() => [e[13] || (e[13] = Ze("div", {
									"i-carbon-sun": "",
									"dark:i-carbon-moon": "",
									"translate-y--1px": ""
								}, null, -1)), cn(" " + un(o ? "Dark" : "Light"), 1)]),
								_: 2
							}, 1032, ["onClick"])]),
							_: 1
						}, 8, ["animation"])]),
						e[16] || (e[16] = Ze("div", {
							"mx--2": "",
							my1: "",
							"h-1px": "",
							border: "b base",
							op75: ""
						}, null, -1)),
						e[17] || (e[17] = Ze("p", null, "UI Scale", -1)),
						Ze("div", null, [dt(Be(ZC), {
							modelValue: Be(k),
							"onUpdate:modelValue": e[0] || (e[0] = (o) => vn(k) ? k.value = o : null),
							options: J.map(([o, f$1]) => ({
								label: o,
								value: f$1
							})),
							"button-props": { outlined: !0 }
						}, null, 8, ["modelValue", "options"])]),
						e[18] || (e[18] = Ze("div", {
							"mx--2": "",
							my1: "",
							"h-1px": "",
							border: "b base",
							op75: ""
						}, null, -1)),
						Ze("div", we, [dt(Be(BX), {
							modelValue: Be(S),
							"onUpdate:modelValue": e[1] || (e[1] = (o) => vn(S) ? S.value = o : null)
						}, null, 8, ["modelValue"]), e[14] || (e[14] = Ze("span", { op75: "" }, "Expand Sidebar", -1))]),
						Ze("div", Ce, [dt(Be(BX), {
							modelValue: Be(T),
							"onUpdate:modelValue": e[2] || (e[2] = (o) => vn(T) ? T.value = o : null)
						}, null, 8, ["modelValue"]), e[15] || (e[15] = Ze("span", { op75: "" }, "Scrollable Sidebar", -1))])
					]),
					_: 1
				}),
				Be(q) ? (Je(), lt(Hr, { key: 0 }, [e[23] || (e[23] = Ze("h3", {
					mt2: "",
					"text-lg": ""
				}, " Features ", -1)), dt(Be(fR), {
					p4: "",
					flex: "~ col gap-2"
				}, {
					default: kt(() => [
						Ze("div", Se, [dt(Be(BX), {
							modelValue: Be(w),
							"onUpdate:modelValue": e[3] || (e[3] = (o) => vn(w) ? w.value = o : null)
						}, null, 8, ["modelValue"]), e[19] || (e[19] = Ze("span", { op75: "" }, "Close DevTools when clicking outside", -1))]),
						Ze("div", Te, [dt(Be(BX), {
							modelValue: Be(C),
							"onUpdate:modelValue": e[4] || (e[4] = (o) => vn(C) ? C.value = o : null)
						}, null, 8, ["modelValue"]), e[20] || (e[20] = Ze("span", { op75: "" }, "Always show the floating panel", -1))]),
						e[21] || (e[21] = Ze("div", {
							"mx--2": "",
							my1: "",
							"h-1px": "",
							border: "b base",
							op75: ""
						}, null, -1)),
						e[22] || (e[22] = Ze("p", null, "Minimize floating panel on inactive", -1)),
						Ze("div", null, [dt(Be(ZC), {
							modelValue: Be(g),
							"onUpdate:modelValue": e[5] || (e[5] = (o) => vn(g) ? g.value = o : null),
							"button-props": { outlined: !0 },
							options: Be(M),
							placeholder: Be(Z)
						}, null, 8, [
							"modelValue",
							"options",
							"placeholder"
						])])
					]),
					_: 1
				})], 64)) : tr("", !0),
				e[26] || (e[26] = Ze("h3", {
					mt2: "",
					"text-lg": ""
				}, " Debug ", -1)),
				Ze("div", Ue, [dt(Be(Ss), {
					outlined: "",
					type: "warning",
					onClick: e[6] || (e[6] = (o) => y.value = !0)
				}, {
					default: kt(() => [...e[24] || (e[24] = [Ze("div", { "i-carbon-breaking-change": "" }, null, -1), cn(" Reset Local Settings & State ", -1)])]),
					_: 1
				}), dt(Be(FX), {
					modelValue: Be(y),
					"onUpdate:modelValue": e[7] || (e[7] = (o) => vn(y) ? y.value = o : null),
					title: "Clear Local Settings & State",
					width: "40%",
					height: "200px",
					content: "Are you sure you to reset all local settings & state? Devtools will reload.",
					onConfirm: Y
				}, null, 8, ["modelValue"])])
			])])]);
		};
	}
});

//#endregion
export { De as default };