import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// import compress from "astro-compress";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkHeadingId from "remark-heading-id";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jinng.org',
  image: {
    domains: ["img.jinng.org"]
  },
  prefetch: true,
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`
    }
  },
  integrations: [
    sitemap(),
    tailwind()],
  experimental: {
    contentCollectionCache: true
  },
  markdown: {
    remarkPlugins: [remarkMath, remarkHeadingId],
    rehypePlugins: [rehypeKatex, rehypeSlug, [rehypeAutolinkHeadings, {
      behavior: "wrap"
    }]]
  },
  shikiConfig: {
    experimentalThemes: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
});