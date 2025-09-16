export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BxKult4A.js",app:"_app/immutable/entry/app.CFdHhEAy.js",imports:["_app/immutable/entry/start.BxKult4A.js","_app/immutable/chunks/udz5pEkc.js","_app/immutable/chunks/C4QmIJg3.js","_app/immutable/chunks/gw28AIuH.js","_app/immutable/chunks/Dc-MXaS8.js","_app/immutable/entry/app.CFdHhEAy.js","_app/immutable/chunks/gw28AIuH.js","_app/immutable/chunks/Dc-MXaS8.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/gVk4lvHU.js","_app/immutable/chunks/D88xRgpN.js","_app/immutable/chunks/C4QmIJg3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/about","/privacy-policy","/sverdle/how-to-play"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
