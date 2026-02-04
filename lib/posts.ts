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
        slug: "i_made_this_website",
        title: "I made this website!",
        import: () => import("../content/posts/i_made_this_website.mdx"),
    },
    {
        slug: "study_on_phone_use_in_trains",
        title: "I made a study on phone use in trains",
        import: () => import("../content/posts/study_on_phone_use_in_trains.mdx"),
    },
];

export const POSTS_BY_SLUG = Object.fromEntries(
    POSTS.map((p) => [p.slug, p] as const)
);
