import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const blog = await getCollection("blog");
  const sortedPosts = blog.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  return rss({
    title: "axseem's blog",
    description:
      "I post everything that I consider important, interesting, or useful, accompanying it with some of my own reflections",
    site: context.site || "https://axseem.me",
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/blog/${post.id}`,
    })),
    customData: `<language>en-us</language>`,
    stylesheet: false,
    xmlns: {
      atom: "http://www.w3.org/2005/Atom",
    },
  });
}
