//#region src/detector.ts
function detect(win) {
	const detector = {
		delay: 1e3,
		retry: 10
	};
	function sendMessage(data) {
		win.postMessage({
			key: "__VUE_DEVTOOLS_VUE_DETECTED_EVENT__",
			data
		}, "*");
	}
	function runDetect() {
		if (window.__VUE_DEVTOOLS_VUE2_APP_DETECTED__) sendMessage({
			devtoolsEnabled: false,
			vueDetected: false,
			nuxtDetected: false,
			vue2Detected: true,
			vitePluginDetected: false,
			vitePluginClientUrl: ""
		});
		if (!!window.__NUXT__) {
			sendMessage({
				devtoolsEnabled: window.__VUE_DEVTOOLS_GLOBAL_HOOK__ && window.__VUE_DEVTOOLS_GLOBAL_HOOK__.enabled,
				vueDetected: true,
				nuxtDetected: true,
				vitePluginDetected: !!window.__VUE_DEVTOOLS_VITE_PLUGIN_DETECTED__,
				vitePluginClientUrl: window.__VUE_DEVTOOLS_VITE_PLUGIN_CLIENT_URL__
			});
			return;
		}
		if (!!window.__VITEPRESS__) {
			sendMessage({
				devtoolsEnabled: window.__VUE_DEVTOOLS_GLOBAL_HOOK__ && window.__VUE_DEVTOOLS_GLOBAL_HOOK__.enabled,
				vueDetected: true,
				vitePressDetected: true,
				vitePluginDetected: !!window.__VUE_DEVTOOLS_VITE_PLUGIN_DETECTED__,
				vitePluginClientUrl: window.__VUE_DEVTOOLS_VITE_PLUGIN_CLIENT_URL__
			});
			return;
		}
		if (!!window.__VUE__) {
			sendMessage({
				devtoolsEnabled: window.__VUE_DEVTOOLS_GLOBAL_HOOK__ && window.__VUE_DEVTOOLS_GLOBAL_HOOK__.enabled,
				vueDetected: true,
				vitePluginDetected: !!window.__VUE_DEVTOOLS_VITE_PLUGIN_DETECTED__,
				vitePluginClientUrl: window.__VUE_DEVTOOLS_VITE_PLUGIN_CLIENT_URL__
			});
			return;
		}
		if (detector.retry > 0) {
			detector.retry--;
			setTimeout(() => {
				runDetect();
			}, detector.delay);
			detector.delay *= 5;
		}
	}
	setTimeout(() => {
		runDetect();
	}, 100);
}
if (document instanceof HTMLDocument) detect(window);

//#endregion
export {  };