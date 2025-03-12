import type { Props as ArticleProps } from "../components/Article.astro";

export async function importArticles(
    modules: Record<string, () => Promise<{ frontmatter: ArticleProps }>>,
    basePath: string,
) {
    const posts = await Promise.all(
        Object.entries(modules).map(async ([path, mod]) => {
            const { frontmatter } = await mod();
            const slug = path.split("/").at(-1)?.replace(".md", "");
            return { ...frontmatter, url: `/${basePath}/${slug}/` };
        }),
    );

    return posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}