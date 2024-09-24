// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-static";
import netlify from "@sveltejs/adapter-netlify";
// import staticAdapter from '@sveltejs/adapter-static'
import { execSync } from "child_process";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
// https://kit.svelte.dev/docs/configuration

export let tag = execSync("git describe --tags || git rev-parse --short HEAD").toString().trim();

console.log({ tag });

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		csrf: {
			checkOrigin: false, //FIXME: CVE
		},
		// embedded: true,
		env: {
			dir: ".",
			publicPrefix: "PUBLIC_",
			privatePrefix: "",
		},
		files: {
			assets: "static",
		},
		// inlineStyleThreshold: 5*1024, //default 0,

		csp: {
			mode: "auto",
			directives: {
				// hack for everything
				"default-src": ["self", "unsafe-inline", "data:"],
				"connect-src": ["self", "data:", "https:", "filesystem:", "http:", "wss:"],
				"style-src": ["self", "unsafe-inline"],
				"font-src": ["self", "unsafe-inline", "data:"],
				"script-src": ["self", "wasm-unsafe-eval", "unsafe-inline", "unsafe-hashes"],
				"script-src-elem": [
					// "https://zpay2024.netlify.app",
					"self",
					"unsafe-inline",
					"wasm-unsafe-eval",
				],
			},
			// reportOnly: {
			// 	"script-src": ["self"],
			// },
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		// adapter: adapter({
		// 	pages: "build",
		// 	assets: "build",
		// 	fallback: null,
		// 	precompress: false,
		// 	strict: true,
		// }),
		adapter: netlify({
			edge: false,
			split: false, //both don't work together
		}),

		// adapter: staticAdapter({
		// 	// default options are shown. On some platforms
		// 	// these options are set automatically — see below
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: '/index.html',
		// 	precompress: false,
		// 	strict: false,
		// }),
		// prerender: {
		// 	crawl: true,
		// 	concurrency: 1,
		// 	handleHttpError: ({ path, referrer, message }) => {
		// 					// ignore deliberate link to shiny 404 page
		// 					if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
		// 						return;
		// 					}

		// 					// otherwise fail the build
		// 					throw new Error(message);
		// 				}

		// 	// use relative URLs similar to an anchor tag <a href="/test/1"></a>
		// 	// do not include group layout folders in the path such as /(group)/test/1
		// 	// entries: ['/proof/view/ad074eb8-2bc0-4432-9636-04cceb7c1e87', '/qr/c94476a0-8a75-4563-b70a-bf6124d7c59b']
		// 	// entries: ['*','/']
		// },
		appDir: "app",
		version: {
			// name: child_process.execSync("git rev-parse HEAD").toString().trim(),
			name: tag,
		},
		output: {
			preloadStrategy: "modulepreload",
		},
	},
};

export default config;

// https://kit.svelte.dev/docs/configuration
