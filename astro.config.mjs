import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	server: {
		host: true,
	},
	site: 'https://jinng.org',
	integrations: [sitemap()],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
	},
});
