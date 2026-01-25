"use client";

import Link from "next/link";

export default function Board() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 12,
          marginBottom: 24,
        }}
      >
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.18)",
              display: "grid",
              placeItems: "center",
              fontWeight: 700,
            }}
          >
            E
          </div>
          <span style={{ fontWeight: 700 }}>Emil’s Site</span>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          <a href="#" style={{ opacity: 0.85, textDecoration: "none" }}>
            Projects
          </a>
          <a href="#" style={{ opacity: 0.85, textDecoration: "none" }}>
            About
          </a>
          <Link href="/blog" style={{ opacity: 0.85, textDecoration: "none" }}>
            Blog
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ marginBottom: 22 }}>
        <h1 style={{ fontSize: 42, margin: 0, lineHeight: 1.1 }}>Home</h1>
        <p style={{ opacity: 0.75, marginTop: 10, maxWidth: 650 }}>
          A small personal site for writeups, notes, and experiments.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
          <Link
            href="/blog"
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.18)",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            View blog
          </Link>

          <a
            href="#"
            style={{
              padding: "10px 12px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.12)",
              textDecoration: "none",
              opacity: 0.85,
            }}
          >
            Contact (soon)
          </a>
        </div>
      </header>

      {/* Latest posts */}
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
          <h2 style={{ margin: 0, fontSize: 18 }}>Latest posts</h2>
          <Link href="/blog" style={{ fontSize: 14, textDecoration: "none" }}>
            See all →
          </Link>
        </div>

        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
          <li style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <Link
              href="/blog/first_post"
              style={{
                display: "block",
                padding: "14px 16px",
                textDecoration: "none",
              }}
            >
              <div style={{ fontWeight: 700 }}>My First Post</div>
              <div style={{ opacity: 0.7, fontSize: 14, marginTop: 4 }}>
                /blog/first_post
              </div>
            </Link>
          </li>

          <li style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <Link
              href="/blog/second_post"
              style={{
                display: "block",
                padding: "14px 16px",
                textDecoration: "none",
              }}
            >
              <div style={{ fontWeight: 700 }}>My Second Post</div>
              <div style={{ opacity: 0.7, fontSize: 14, marginTop: 4 }}>
                /blog/second_post
              </div>
            </Link>
          </li>
        </ul>
      </section>

      {/* Quick cards */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
          marginTop: 18,
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 16,
          }}
        >
          <div style={{ fontWeight: 700 }}>Now</div>
          <div style={{ opacity: 0.75, marginTop: 6 }}>
            Building a tiny blog system with MDX + Next.js.
          </div>
        </div>

        <div
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 16,
          }}
        >
          <div style={{ fontWeight: 700 }}>Next</div>
          <div style={{ opacity: 0.75, marginTop: 6 }}>
            Add dates/tags, auto-generate the post list, and improve styling.
          </div>
        </div>

        <div
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 16,
          }}
        >
          <div style={{ fontWeight: 700 }}>Links</div>
          <div style={{ opacity: 0.75, marginTop: 6 }}>
            <a href="#" style={{ opacity: 0.9, textDecoration: "none" }}>
              GitHub (soon)
            </a>
            <br />
            <a href="#" style={{ opacity: 0.9, textDecoration: "none" }}>
              LinkedIn (soon)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
