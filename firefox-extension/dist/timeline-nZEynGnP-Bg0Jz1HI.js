import { $R, $U, $r, Be, Es, Fl, Gc, Hh, Hr, Hu, Je, Jm, Jt, Lr, Ri, Rn, Xt, Ze, cn, dt, ei, fN, io, kt, lt, p1, pt, sr, tr, un, v4, vn, ws, xt } from "./index-e6Cke-ty-BIekTqkY.js";

//#region client/timeline-nZEynGnP.js
const Z = {
	"h-full": "",
	flex: "",
	"flex-col": "",
	p2: ""
}, ee = {
	class: "relative mb-1 w-full flex items-center justify-end pb-1",
	border: "b dashed base"
}, te = {
	key: 0,
	class: "absolute left-0 text-xs text-gray-300 dark:text-gray-500"
}, ae = { class: "flex items-center gap-2 px-1" }, le = {
	key: 0,
	class: "recording recording-btn bg-[#ef4444]"
}, oe = {
	key: 1,
	class: "recording-btn bg-black op70 dark:bg-white hover:op100"
}, ne = { class: "flex items-center gap1" }, se = { class: "p2" }, ie = ["onClick"], re = ["onClick"], de = /* @__PURE__ */ $R(/* @__PURE__ */ sr({
	__name: "TimelineLayers",
	props: /* @__PURE__ */ Gc({ data: {} }, {
		modelValue: {},
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ Gc(["select", "clear"], ["update:modelValue"]),
	setup(S, { emit: y }) {
		const m = y, f = Fl(), d = pt(() => f.timelineLayersState.value.recordingState), r = pt(() => f.timelineLayersState.value), b = pt(() => d.value ? "Stop recording" : "Start recording"), { colorMode: x } = Jm();
		pt(() => x.value === "dark");
		const g = Hh(S, "modelValue");
		function u(a) {
			g.value = a, m("select", a), Xt.value.updateTimelineLayersState({ selected: a });
		}
		Lr(() => r.value.selected, (a) => {
			g.value = a;
		}, { immediate: !0 });
		function _(a) {
			return {
				mouse: r.value.mouseEventEnabled,
				keyboard: r.value.keyboardEventEnabled,
				"component-event": r.value.componentEventEnabled,
				performance: r.value.performanceEventEnabled
			}[a];
		}
		function p() {
			Xt.value.updateTimelineLayersState({ recordingState: !d.value });
		}
		function T(a) {
			const v = {
				mouse: "mouseEventEnabled",
				keyboard: "keyboardEventEnabled",
				"component-event": "componentEventEnabled",
				performance: "performanceEventEnabled"
			}[a];
			Xt.value.updateTimelineLayersState({ [v]: !_(a) });
		}
		return (a, v) => (Je(), lt("div", Z, [Ze("div", ee, [Be(d) ? tr("", !0) : (Je(), lt("span", te, "Not recording")), Ze("div", ae, [
			Rn((Je(), lt("div", {
				class: "flex items-center gap1",
				onClick: p
			}, [Be(d) ? (Je(), lt("span", le)) : (Je(), lt("span", oe))])), [[
				Be(Es),
				{ content: Be(b) },
				void 0,
				{ "bottom-end": !0 }
			]]),
			Rn((Je(), lt("div", {
				class: "flex items-center gap1",
				onClick: v[0] || (v[0] = (t) => m("clear"))
			}, [dt(Be(Hu), {
				name: "baseline-delete",
				"cursor-pointer": "",
				"text-xl": "",
				op70: "",
				"hover:op100": ""
			})])), [[
				Be(Es),
				{ content: "Clear all timelines" },
				void 0,
				{ "bottom-end": !0 }
			]]),
			Rn((Je(), lt("div", ne, [dt(Be(Hu), {
				name: "baseline-tips-and-updates",
				"cursor-pointer": "",
				"text-xl": "",
				op70: "",
				"hover:op100": ""
			})])), [[
				Be(Es),
				{
					content: "<p style='width: 285px'>Timeline events can cause significant performance overhead in large applications, so we recommend enabling it only when needed and on-demand. </p>",
					html: !0
				},
				void 0,
				{ "bottom-end": !0 }
			]])
		])]), Ze("ul", se, [(Je(!0), lt(Hr, null, ws(S.data, (t) => (Je(), lt("li", {
			key: t.id,
			class: $r(["group relative selectable-item", {
				active: t.id === g.value,
				op60: !_(t.id)
			}]),
			onClick: (n) => u(t.id)
		}, [cn(un(t.label) + " ", 1), Ze("span", {
			class: "absolute right-2 rounded-1 bg-primary-500 px1 text-3 text-white op0 [.active_&]:bg-primary-400 [.active_&]:dark:bg-gray-600 group-hover:op80 hover:op100!",
			onClick: io((n) => T(t.id), ["stop"])
		}, un(_(t.id) ? "Disable" : "Enable"), 9, re)], 10, ie))), 128))])]));
	}
}), [["__scopeId", "data-v-ba7472d9"]]), ue = { class: "h-full w-full" }, pe = { class: "no-scrollbar h-full flex select-none gap-2 overflow-scroll" }, ve = { class: "h-full flex flex-col" }, me = { class: "no-scrollbar h-full flex select-none gap-2 overflow-scroll" }, fe = { class: "h-full flex flex-col p2" }, ge = /* @__PURE__ */ sr({
	__name: "timeline",
	setup(S) {
		const y = xt(), m = xt(), f = xt(!1), { width: d } = fN(m), r = pt(() => f.value ? d.value < 700 : !1), b = Fl(), x = pt(() => b.appRecords.value.map((t) => ({
			label: t.name + (t.version ? ` (${t.version})` : ""),
			value: t.id
		}))), g = pt(() => x.value.map((t) => ({
			label: t.label,
			id: t.value
		}))), u = xt(b.activeAppRecordId.value);
		ei(() => {
			u.value = b.activeAppRecordId.value;
		});
		function _(t) {
			Xt.value.toggleApp(t).then(() => {
				a();
			});
		}
		const p = xt(""), T = [
			{
				label: "Mouse",
				id: "mouse"
			},
			{
				label: "Keyboard",
				id: "keyboard"
			},
			{
				label: "Component events",
				id: "component-event"
			},
			{
				label: "Performance",
				id: "performance"
			}
		];
		function a() {
			y.value?.clear();
		}
		function v() {
			a();
		}
		return (t, n) => {
			const B = de;
			return Je(), lt("div", ue, [dt(Be(p1), {
				ref_key: "splitpanesRef",
				ref: m,
				class: "flex-1 overflow-auto",
				horizontal: Be(r),
				onReady: n[2] || (n[2] = (k) => f.value = !0)
			}, {
				default: kt(() => [
					Be(x).length > 1 ? (Je(), Jt(Be(Ri), {
						key: 0,
						border: "base h-full",
						size: "20"
					}, {
						default: kt(() => [Ze("div", pe, [dt(Be($U), {
							modelValue: Be(u),
							"onUpdate:modelValue": n[0] || (n[0] = (k) => vn(u) ? u.value = k : null),
							data: Be(g),
							class: "w-full",
							onSelect: _
						}, null, 8, ["modelValue", "data"])])]),
						_: 1
					})) : tr("", !0),
					dt(Be(Ri), {
						border: "base",
						"h-full": ""
					}, {
						default: kt(() => [Ze("div", ve, [Ze("div", me, [dt(B, {
							modelValue: Be(p),
							"onUpdate:modelValue": n[1] || (n[1] = (k) => vn(p) ? p.value = k : null),
							data: T,
							class: "w-full",
							onSelect: v,
							onClear: a
						}, null, 8, ["modelValue"])])])]),
						_: 1
					}),
					dt(Be(Ri), {
						relative: "",
						"h-full": "",
						size: "65"
					}, {
						default: kt(() => [Ze("div", fe, [dt(Be(v4), {
							ref_key: "timelineRef",
							ref: y,
							"layer-ids": [Be(p)],
							"header-visible": !1,
							"doc-link": "",
							"plugin-id": "",
							"switcher-visible": !1
						}, null, 8, ["layer-ids"])])]),
						_: 1
					})
				]),
				_: 1
			}, 8, ["horizontal"])]);
		};
	}
});

//#endregion
export { ge as default };