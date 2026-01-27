import Link from "next/link";
import Navbar from "../components/Navbar";
import { POSTS } from "../../lib/posts";
import { LadybugWalker } from "../components/ladybugWalker";

export default function BlogIndex() {
    return (
        <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
            <Navbar />

            <header style={{ marginBottom: 18 }}>
                <h1 style={{ fontSize: 42, margin: 0 }}>Blog</h1>
                <p style={{ opacity: 0.75, marginTop: 10 }}>
                    All posts from <code>content/posts</code>.
                </p>
            </header>

            <section
                style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 16,
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        padding: "14px 16px",
                        borderBottom: "1px solid rgba(255,255,255,0.12)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <span style={{ fontWeight: 700 }}>All posts</span>
                    <span style={{ opacity: 0.7, fontSize: 14 }}>
                        {POSTS.length} total
                    </span>
                </div>

                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {POSTS.map((p) => (
                        <li
                            key={p.slug}
                            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                        >
                            <Link
                                href={`/blog/${p.slug}`}
                                style={{
                                    display: "block",
                                    padding: "14px 16px",
                                    textDecoration: "none",
                                }}
                            >
                                <div style={{ fontWeight: 700 }}>{p.title}</div>
                                <div style={{ opacity: 0.7, fontSize: 14, marginTop: 4 }}>
                                    /blog/{p.slug}
                                </div>
                            </Link>
                        </li>
                    ))}

                    {POSTS.length === 0 && (
                        <li style={{ padding: "14px 16px", opacity: 0.75 }}>
                            No posts yet.
                        </li>
                    )}
                </ul>
            </section>
            <LadybugWalker />
        </main>
    );
}
