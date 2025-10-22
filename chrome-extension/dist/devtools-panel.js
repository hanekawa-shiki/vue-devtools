import "./src-DwLiZt9N.js";
import { createRpcClient, functions, onRpcConnected } from "./src-DgemCM31.js";
import { JX, KX, YX } from "./index-e6Cke-ty-BIekTqkY.js";

//#region src/devtools-panel.ts
function init() {
	injectScript(chrome.runtime.getURL("dist/user-app.js"), () => {
		KX();
		createRpcClient(functions, { preset: "extension" });
	});
	chrome.devtools.network.onNavigated.addListener(() => {
		YX();
		injectScript(chrome.runtime.getURL("dist/user-app.js"), () => {
			onRpcConnected(() => {
				JX();
			});
		});
	});
}
init();
function injectScript(scriptName, cb) {
	const src = `
    (function() {
      var script = document.constructor.prototype.createElement.call(document, 'script');
      script.src = "${scriptName}";
      script.type = "module";
      document.documentElement.appendChild(script);
      script.parentNode.removeChild(script);
    })()
  `;
	let timeoutId = null;
	function execute() {
		clearTimeout(timeoutId);
		chrome.devtools.inspectedWindow.eval(src, (res, err) => {
			if (err) {
				timeoutId = setTimeout(() => {
					execute();
				}, 100);
				return;
			}
			cb();
		});
	}
	execute();
}

//#endregion
export {  };