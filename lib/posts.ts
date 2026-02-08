// lib/posts.ts
export type PostMeta = {
    slug: string;
    title: string;
    date: string;
    // optional later: date, tags, etc.
    import: () => Promise<any>;
};

// Add new posts here (ONE line per post)
export const POSTS: PostMeta[] = [
    {
        slug: "i_made_this_website",
        title: "I made this website!",
        date: "01/01/2026",
        import: () => import("../content/posts/i_made_this_website.mdx"),
    },
    {
        slug: "study_on_phone_use_in_trains",
        title: "I made a simple study on phone use in trains",
        date: "25/01/2026",
        import: () => import("../content/posts/study_on_phone_use_in_trains.mdx"),
    },
    {
        slug: "i_wrote_a_poem",
        title: "I wrote a poem",
        date: "07/02/2026",
        import: () => import("../content/posts/i_wrote_a_poem.mdx"),
    },
];

export const POSTS_BY_SLUG = Object.fromEntries(
    POSTS.map((p) => [p.slug, p] as const)
);
