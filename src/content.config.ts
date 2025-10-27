import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

const content = defineCollection({
  loader: glob({ pattern: ["*.mdx", "*.md"], base: "./src/content" }),
  schema: z.object({}),
});

export const collections = {
  blog: blog,
  content: content,
};
