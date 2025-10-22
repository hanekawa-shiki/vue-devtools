import "./src-DwLiZt9N.js";
import { createRpcServer, functions } from "./src-DgemCM31.js";

//#region src/user-app.ts
window.addEventListener("message", handshake);
createRpcServer(functions, { preset: "extension" });
function handshake(e) {
	if (e.data.source === "proxy->server" && e.data.payload.event === "init") window.removeEventListener("message", handshake);
}

//#endregion
export {  };