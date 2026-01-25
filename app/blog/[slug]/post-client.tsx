"use client";

import dynamic from "next/dynamic";
import { POSTS_BY_SLUG } from "@/lib/posts";

export default function PostClient({ slug }: { slug: string }) {
    const post = POSTS_BY_SLUG[slug];

    // This prevents MDX from being imported during SSR (avoids createContext server error)
    const MDX = dynamic(post.import, {
        ssr: false,
        loading: () => <p>Loading…</p>,
    });

    return (
        <main>
            <h1>This is a blogpost!</h1>
            <MDX />
        </main>
    );
}
