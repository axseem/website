import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const blog = await getCollection("blog");
  const sortedPosts = blog.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

  const site = context.site || "https://axseem.me";

  const feed = {
    version: "https://jsonfeed.org/version/1.1",
    title: "axseem's blog",
    home_page_url: site.toString(),
    feed_url: `${site}feed.json`,
    description:
      "I post everything that I consider important, interesting, or useful, accompanying it with some of my own reflections",
    language: "en",
    items: sortedPosts.map((post) => ({
      id: `${site}blog/${post.id}`,
      url: `${site}blog/${post.id}`,
      title: post.data.title,
      date_published: post.data.date.toISOString(),
    })),
  };

  return new Response(JSON.stringify(feed, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}
