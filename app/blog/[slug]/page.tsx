import { notFound } from "next/navigation";
import PostClient from "./post-client";
import { POSTS_BY_SLUG } from "@/lib/posts";

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    if (!POSTS_BY_SLUG[slug]) notFound();
    return <PostClient slug={slug} />;
}
