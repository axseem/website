// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { remarkReadingTime } from './remark-reading-time.mjs';
import { targetBlank } from './targetBlank';

// https://astro.build/config
export default defineConfig({
  site: 'https://axseem.me',

  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [[targetBlank, { domain: 'axseem.me' }]],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});