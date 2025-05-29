// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { remarkReadingTime } from './remark-reading-time.mjs';
import { targetBlank } from './targetBlank';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://axseem.me',

  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [[targetBlank, { domain: 'axseem.me' }]],
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },

  redirects: {
    '/one-year-sixteen-books': {
      destination: '/blog/one-year-sixteen-books',
      status: 301,
    },
    '/share-with-the-world': {
      destination: '/blog/share-with-the-world',
      status: 301,
    },
    '/i-am-worse-than-you-think': {
      destination: '/diary/i-am-worse-than-you-think',
      status: 301,
    },
    '/what-a-great-call': {
      destination: '/diary/what-a-great-call',
      status: 301,
    },
    '/just-a-regular-day': {
      destination: '/diary/just-a-regular-day',
      status: 301,
    },
    '/i-will-beg-for-attention': {
      destination: '/diary/i-will-beg-for-attention',
      status: 301,
    },
    '/you-are-too-serious': {
      destination: '/diary/you-are-too-serious',
      status: 301,
    },
    '/my-selfies-suck': {
      destination: '/diary/my-selfies-suck',
      status: 301,
    },
  },

  integrations: [mdx()],
});