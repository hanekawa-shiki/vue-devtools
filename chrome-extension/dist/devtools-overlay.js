(function() {


//#region src/devtools-overlay.ts
	if (document instanceof HTMLDocument) {
		document.getElementsByTagName("body")[0];
		const detector = document.createElement("script");
		detector.src = chrome.runtime.getURL("dist/detector.js");
		detector.type = "module";
		detector.onload = () => {
			detector.parentNode.removeChild(detector);
		};
		(document.head || document.documentElement).appendChild(detector);
		window.addEventListener("message", (event) => {
			if (event.data.key === "__VUE_DEVTOOLS_VUE_DETECTED_EVENT__") chrome.runtime.sendMessage(event.data.data);
		}, false);
	}

//#endregion
})();