"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { POSTS_BY_SLUG } from "@/lib/posts";

export default function PostClient({ slug }: { slug: string }) {
    const post = POSTS_BY_SLUG[slug];
    if (!post) return <p>Post not found.</p>;

    // Prevent MDX from being imported during SSR (avoids createContext server error)
    const MDX = dynamic(post.import, {
        ssr: false,
        loading: () => <p style={{ opacity: 0.75 }}>Loading…</p>,
    });

    return (
        <main>
            <section
                style={{
                    width: "100%",
                    backgroundImage: "url('/images/navbar-bg4.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center 40%",
                }}
            >
                <div
                    style={{
                        maxWidth: 1200,
                        margin: "0 auto",
                        padding: "50px 16px",
                    }}
                >
                    {/* Navbar */}
                    <Navbar />
                </div>
            </section>
            <section style={{
                maxWidth: 900,
                margin: "0 auto",
                padding: "30px 16px",
            }}>
                <article
                    style={{
                        maxWidth: 720,
                        margin: "0 auto",
                        padding: "18px 16px",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 16,
                    }}
                >
                    <div style={{ marginBottom: 14 }}>
                        <Link href="/blog" style={{ textDecoration: "none", opacity: 0.8 }}>
                            ← Back to blog
                        </Link>
                    </div>

                    <h1 style={{ fontSize: 34, margin: "8px 0 14px", lineHeight: 1.15 }}>
                        {post.title}
                    </h1>

                    {/* MDX content */}
                    <div style={{ lineHeight: 1.7 }}>
                        <MDX />
                    </div>
                </article>
            </section>
        </main>
    );
}
