const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BObeL_BJ.js",app:"_app/immutable/entry/app.CwabSXKr.js",imports:["_app/immutable/entry/start.BObeL_BJ.js","_app/immutable/chunks/DjUCCs-_.js","_app/immutable/chunks/BrrLgHdD.js","_app/immutable/chunks/vfbQ1Zow.js","_app/immutable/entry/app.CwabSXKr.js","_app/immutable/chunks/BrrLgHdD.js","_app/immutable/chunks/DtWR4rtE.js","_app/immutable/chunks/DduFB2aB.js","_app/immutable/chunks/vfbQ1Zow.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Db-JqGni.js')),
			__memo(() => import('./chunks/1-wy-o1ApS.js')),
			__memo(() => import('./chunks/2-XLG45uEg.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
