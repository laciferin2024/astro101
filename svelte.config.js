import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/vite-plugin-svelte').SvelteConfig} */
const config = {
  preprocess: vitePreprocess(),  // Enables preprocessing like TypeScript or SCSS
  compilerOptions: { dev: true, },
};

export default config;
