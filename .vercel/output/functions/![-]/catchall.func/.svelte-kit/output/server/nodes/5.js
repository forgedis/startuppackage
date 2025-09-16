import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/5.Bi5GfCs-.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/gw28AIuH.js","_app/immutable/chunks/Dc-MXaS8.js","_app/immutable/chunks/gVk4lvHU.js","_app/immutable/chunks/D88xRgpN.js","_app/immutable/chunks/BrveUI2Q.js","_app/immutable/chunks/CngExaDC.js","_app/immutable/chunks/udz5pEkc.js","_app/immutable/chunks/C4QmIJg3.js"];
export const stylesheets = ["_app/immutable/assets/5.yeGN9jlM.css"];
export const fonts = [];
