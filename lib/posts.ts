// lib/posts.ts
export type PostMeta = {
    slug: string;
    title: string;
    // optional later: date, tags, etc.
    import: () => Promise<any>;
};

// Add new posts here (ONE line per post)
export const POSTS: PostMeta[] = [
    {
        slug: "first_post",
        title: "first_post",
        import: () => import("../content/posts/first_post.mdx"),
    },
    {
        slug: "second_post",
        title: "second_post",
        import: () => import("../content/posts/second_post.mdx"),
    },
];

export const POSTS_BY_SLUG = Object.fromEntries(
    POSTS.map((p) => [p.slug, p] as const)
);
