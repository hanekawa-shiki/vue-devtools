import { $r, Be, Fl, Hr, Je, Jt, LX, Ln, Ri, SO, Ss, Vu, Xt, Ze, cn, dt, e7, ei, hi, io, jX, kX, kt, lt, p1, pO, pt, sr, to, tr, un, vn, ws, xt, yR } from "./index-e6Cke-ty-BIekTqkY.js";
import "./IconTitle.vue_vue_type_script_setup_true_lang-DLtdfn-T-BVHgg1U8.js";
import { E } from "./SectionBlock-cb4DPSS8-DHeGdIRx.js";

//#region client/pages-D6NTK9Y9.js
const Q = { "p-2": "" }, X = { class: "flex items-center justify-between" }, ee = /* @__PURE__ */ sr({
	__name: "RouteMetaDetail",
	props: { meta: {} },
	emits: ["close"],
	setup(p) {
		return (i, r) => (Je(), lt("div", Q, [Ze("div", X, [r[1] || (r[1] = Ze("span", { class: "font-500" }, "Route meta detail", -1)), Ze("div", {
			class: "i-carbon-close cursor-pointer p1 $ui-text",
			onClick: r[0] || (r[0] = (_) => i.$emit("close"))
		})]), dt(Be(yR), {
			code: JSON.stringify(p.meta, null, 2),
			lang: "json",
			lines: ""
		}, null, 8, ["code"])]));
	}
}), te = {
	block: "",
	"cursor-pointer": ""
}, ne = { p2: "" }, oe = ["onSubmit"], ae = {
	flex: "~",
	"items-center": "",
	p2: "",
	"text-sm": "",
	"font-mono": ""
}, se = { key: 1 }, le = /* @__PURE__ */ sr({
	__name: "RoutePathItem",
	props: { route: {} },
	emits: ["navigate"],
	setup(p, { emit: i }) {
		const r = p, _ = i;
		function v(n) {
			return n.split(/(:\w+[?*+]?(?:\([^)]*\))?[?*+]?)/).filter(Boolean);
		}
		const d = xt([]), c = pt(() => v(r.route.path));
		ei(() => {
			d.value = Array.from({ length: c.value.length }, () => "");
		});
		const u = pt(() => c.value.map((n, o) => n[0] === ":" ? d.value[o] : n).join("").replace(/\/+/g, "/")), s = pt(() => r.route.path.includes(":"));
		function m() {
			_("navigate", u.value);
		}
		return (n, o) => Be(s) ? (Je(), Jt(Be(Vu), { key: 1 }, {
			popper: kt(({ hide: f }) => [Ze("div", ne, [Ze("form", {
				flex: "~ col",
				onSubmit: io(() => {
					m(), f();
				}, ["prevent"])
			}, [Be(s) ? (Je(), lt(Hr, { key: 0 }, [o[0] || (o[0] = Ze("div", {
				px2: "",
				"text-sm": "",
				op50: ""
			}, " Fill params and navigate: ", -1)), Ze("div", ae, [(Je(!0), lt(Hr, null, ws(Be(c), (x, C) => (Je(), lt(Hr, { key: C }, [x[0] === ":" ? (Je(), Jt(Be(to), {
				key: 0,
				modelValue: Be(d)[C],
				"onUpdate:modelValue": (k) => Be(d)[C] = k,
				"n-sm": "",
				"w-20": "",
				placeholder: x.slice(1)
			}, null, 8, [
				"modelValue",
				"onUpdate:modelValue",
				"placeholder"
			])) : (Je(), lt("span", se, un(x), 1))], 64))), 128))])], 64)) : tr("", !0), dt(Be(Ss), {
				block: "",
				type: "primary"
			}, {
				default: kt(() => [...o[1] || (o[1] = [cn(" Navigate ", -1)])]),
				_: 1
			})], 40, oe)])]),
			default: kt(() => [Ze("code", te, [(Je(!0), lt(Hr, null, ws(Be(c), (f, x) => (Je(), lt("span", {
				key: x,
				class: $r(f[0] === ":" ? "text-gray border border-dashed rounded border-gray:50 px1" : "")
			}, un(f[0] === ":" ? f.slice(1) : f), 3))), 128))])]),
			_: 1
		})) : (Je(), lt("button", {
			key: 0,
			onClick: m
		}, [Ze("code", null, un(p.route.path), 1)]));
	}
}), re = { "w-full": "" }, ie = {
	border: "b base",
	"px-3": ""
}, ue = {
	key: 0,
	"text-left": ""
}, de = {
	"w-20": "",
	"pr-1": ""
}, ce = {
	flex: "",
	"items-center": "",
	"justify-end": ""
}, pe = { "text-sm": "" }, me = {
	flex: "inline gap3",
	"items-center": ""
}, ve = {
	op0: "",
	"group-hover:op100": "",
	flex: "~ gap1"
}, fe = ["onClick"], he = {
	"w-0": "",
	"ws-nowrap": "",
	"pr-1": "",
	"text-left": "",
	"text-sm": "",
	"font-mono": "",
	op50: ""
}, ge = {
	key: 0,
	"w-50": "",
	"ws-nowrap": "",
	"pr-1": "",
	"text-left": "",
	"text-sm": "",
	"font-mono": "",
	op50: "",
	hover: "text-primary op100"
}, _e = ["title", "onClick"], xe = /* @__PURE__ */ sr({
	__name: "RoutesTable",
	props: {
		pages: {},
		matched: {},
		matchedPending: {}
	},
	emits: ["navigate", "selectMeta"],
	setup(p) {
		const i = p, r = pt(() => [...i.pages].sort((u, s) => u.path.localeCompare(s.path))), _ = pt(() => pO.value), v = Fl();
		function d(u, s = 0) {
			const m = JSON.stringify(u, null, s);
			return m === "{}" ? "-" : m;
		}
		const c = pt(() => r.value.some((u) => Object.keys(u.meta)?.length));
		return (u, s) => {
			const m = le;
			return Je(), lt("div", null, [Ze("table", re, [Ze("thead", ie, [Ze("tr", null, [
				s[1] || (s[1] = Ze("th", { "text-left": "" }, null, -1)),
				s[2] || (s[2] = Ze("th", { "text-left": "" }, " Route Path ", -1)),
				s[3] || (s[3] = Ze("th", { "text-left": "" }, " Name ", -1)),
				Be(c) ? (Je(), lt("th", ue, " Route Meta ")) : tr("", !0)
			])]), Ze("tbody", null, [(Je(!0), lt(Hr, null, ws(Be(r), (n) => (Je(), lt("tr", {
				key: n.name,
				class: "group",
				"h-7": "",
				border: "b dashed transparent hover:base"
			}, [
				Ze("td", de, [Ze("div", ce, [p.matched.find((o) => o.name === n.name) ? (Je(), Jt(Be(jX), {
					key: 0,
					"bg-green-400:10": "",
					"text-green-400": "",
					title: "active",
					textContent: "active"
				})) : p.matchedPending.find((o) => o.name === n.name) ? (Je(), Jt(Be(jX), {
					key: 1,
					"bg-teal-400:10": "",
					"text-teal-400": "",
					title: "next",
					textContent: "next"
				})) : tr("", !0)])]),
				Ze("td", pe, [Ze("div", me, [dt(m, {
					route: n,
					class: $r(p.matched.find((o) => o.name === n.name) ? "text-primary-400" : p.matchedPending.find((o) => o.name === n.name) ? "text-teal" : ""),
					onNavigate: s[0] || (s[0] = (o) => u.$emit("navigate", o))
				}, null, 8, ["route", "class"]), Ze("div", ve, [n.meta?.file && Be(v).vitePluginDetected.value && Be(_) ? (Je(), lt("button", {
					key: 0,
					"text-sm": "",
					op40: "",
					hover: "op100 text-primary-400",
					title: "Open in editor",
					onClick: (o) => Be(LX)(n.meta?.file)
				}, [...s[4] || (s[4] = [Ze("div", { "i-carbon-script-reference": "" }, null, -1)])], 8, fe)) : tr("", !0)])])]),
				Ze("td", he, un(n.name), 1),
				Be(c) ? (Je(), lt("td", ge, [Ze("span", {
					"inline-block": "",
					"w-50": "",
					"cursor-pointer": "",
					"overflow-hidden": "",
					"text-ellipsis": "",
					title: d(n.meta, 2),
					onClick: () => u.$emit("selectMeta", n.meta)
				}, un(d(n.meta)), 9, _e)])) : tr("", !0)
			]))), 128))])])]);
		};
	}
}), be = {
	block: "",
	"h-screen": "",
	"of-auto": ""
}, ye = {
	"h-full": "",
	class: "grid grid-rows-[auto_1fr]"
}, ke = {
	border: "b base",
	flex: "~ col gap1",
	px4: "",
	py3: ""
}, $e = {
	key: 1,
	op50: ""
}, we = {
	key: 0,
	"text-orange": "",
	op75: ""
}, Re = {
	key: 1,
	op50: ""
}, Ee = /* @__PURE__ */ sr({
	__name: "pages",
	setup(p) {
		const i = xt(""), r = xt(null), _ = xt([]), v = pt(() => i.value === r.value?.path ? [] : _.value), d = xt([]), c = xt();
		function u(n) {
			d.value = n.routes, r.value = n.currentRoute, i.value = r.value?.path ?? "/";
		}
		function s() {
			v.value.length && m(i.value);
		}
		function m(n) {
			Xt.value.navigate(n);
		}
		return SO(() => {
			Xt.value.getRouterInfo().then((n) => {
				u(n);
			}), Xt.functions.on(Ln.ROUTER_INFO_UPDATED, u);
		}), kX(i, () => {
			i.value !== r.value?.path && Xt.value.getMatchedRoutes(i.value).then((n) => {
				_.value = n;
			});
		}), hi(() => {
			Xt.functions.off(Ln.ROUTER_INFO_UPDATED, u);
		}), (n, o) => {
			const f = xe, x = E, C = ee;
			return Je(), lt("div", be, [Ze("div", ye, [Ze("div", ke, [
				Ze("div", null, [(Je(), lt("span", $e, "Current route"))]),
				dt(Be(to), {
					modelValue: Be(i),
					"onUpdate:modelValue": o[0] || (o[0] = (k) => vn(i) ? i.value = k : null),
					"left-icon": "i-carbon-direction-right-01 scale-y--100",
					class: $r(Be(r)?.path === Be(i) ? "" : Be(v).length ? "text-green!" : "text-orange!"),
					onKeydown: e7(s, ["enter"])
				}, null, 8, ["modelValue", "class"]),
				Ze("div", null, [Be(r)?.path !== Be(i) ? (Je(), lt(Hr, { key: 0 }, [o[6] || (o[6] = Ze("span", null, [
					cn("Press "),
					Ze("b", { "font-bold": "" }, "Enter"),
					cn(" to navigate")
				], -1)), Be(v).length ? tr("", !0) : (Je(), lt("span", we, " (no match)"))], 64)) : (Je(), lt("span", Re, "Edit path above to navigate"))])
			]), dt(Be(p1), { class: "of-hidden" }, {
				default: kt(() => [dt(Be(Ri), {
					size: "70",
					class: "of-auto!"
				}, {
					default: kt(() => [dt(x, {
						icon: "i-carbon-tree-view-alt",
						text: "All Routes",
						description: `${Be(d).length} routes registered in your application`,
						padding: !1
					}, {
						default: kt(() => [Be(d).length ? (Je(), Jt(f, {
							key: 0,
							pages: Be(d),
							matched: Be(r)?.matched ?? [],
							"matched-pending": Be(v),
							onNavigate: m,
							onSelectMeta: o[1] || (o[1] = (k) => c.value = k)
						}, null, 8, [
							"pages",
							"matched",
							"matched-pending"
						])) : tr("", !0)]),
						_: 1
					}, 8, ["description"])]),
					_: 1
				}), Be(c) ? (Je(), Jt(Be(Ri), {
					key: 0,
					size: "30",
					class: "of-auto!"
				}, {
					default: kt(() => [dt(C, {
						meta: Be(c),
						onClose: o[2] || (o[2] = (k) => c.value = void 0)
					}, null, 8, ["meta"])]),
					_: 1
				})) : tr("", !0)]),
				_: 1
			})])]);
		};
	}
});

//#endregion
export { Ee as default };