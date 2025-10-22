import { isNumeric } from "./src-DwLiZt9N.js";

//#region src/background.ts
const ports = {};
function initPort(portInfo) {
	const { tab, name, port } = portInfo;
	ports[tab] ??= {
		devtools: null,
		userApp: null
	};
	ports[tab][name] = port;
	return ports[tab];
}
function devtoolsUserAppPipe(tabId) {
	const { devtools, userApp } = ports[tabId];
	let disconnected = false;
	function onDevtoolsMessage(message) {
		if (disconnected) return;
		if ({ "NODE_ENV": "production" }.NODE_ENV === "development") console.log("%cdevtools -> userApp", "color:#888;", message);
		userApp.postMessage(message);
	}
	devtools.onMessage.addListener(onDevtoolsMessage);
	function onUserAppMessage(message) {
		if (disconnected) return;
		if ({ "NODE_ENV": "production" }.NODE_ENV === "development") console.log("%cuserApp -> devtools", "color:#888;", message);
		devtools.postMessage(message);
	}
	userApp.onMessage.addListener(onUserAppMessage);
	function shutdown() {
		disconnected = true;
		if (!ports[tabId]) return;
		const { devtools: devtools$1, userApp: userApp$1 } = ports[tabId];
		devtools$1.onMessage.removeListener(onDevtoolsMessage);
		userApp$1.onMessage.removeListener(onUserAppMessage);
		devtools$1?.disconnect();
		userApp$1?.disconnect();
		delete ports[tabId];
	}
	devtools.onDisconnect.addListener(shutdown);
	userApp.onDisconnect.addListener(shutdown);
}
chrome.runtime.onConnect.addListener((port) => {
	const portInfo = {
		tab: "",
		name: "",
		port
	};
	if (isNumeric(port.name)) {
		portInfo.tab = port.name;
		portInfo.name = "devtools";
		chrome.tabs.executeScript(+port.name, { file: "/dist/proxy.js" }, (res) => {});
	} else {
		portInfo.tab = port.sender.tab.id;
		portInfo.name = "userApp";
	}
	const tab = initPort(portInfo);
	if (tab.devtools && tab.userApp) devtoolsUserAppPipe(portInfo.tab);
});
chrome.runtime.onMessage.addListener((req, sender) => {
	if (sender.tab && req.vue2Detected) {
		chrome.browserAction.setPopup({
			tabId: sender.tab.id,
			popup: "popups/vue2-migration-guide.html"
		});
		chrome.browserAction.setIcon({
			tabId: sender.tab.id,
			path: {
				16: `icons/16.png`,
				48: `icons/48.png`,
				128: `icons/128.png`
			}
		});
	}
	if (sender.tab && req.vueDetected) {
		let suffix = "";
		if (req.nuxtDetected) suffix = ".nuxt";
		else if (req.vitePressDetected) suffix = ".vitepress";
		chrome.browserAction.setIcon({
			tabId: sender.tab.id,
			path: {
				16: `icons/16${suffix}.png`,
				48: `icons/48${suffix}.png`,
				128: `icons/128${suffix}.png`
			}
		});
		chrome.browserAction.setPopup({
			tabId: sender.tab.id,
			popup: req.devtoolsEnabled ? `popups/enabled${suffix}.html` : `popups/disabled${suffix}.html`
		});
	}
});

//#endregion
export {  };