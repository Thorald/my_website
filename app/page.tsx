"use client";

import Link from "next/link";
import Navbar from "./components/Navbar";
import { POSTS } from "../lib/posts";
import { useState } from "react";
import { LadybugWalker } from "./components/ladybugWalker"; // adjust path if needed

export default function Board() {

  //Ladybug logic
  const latestPosts = POSTS.slice(0, 3);
  const [dir, setDir] = useState(1); // 1 = right, -1 = left

  return (
    <main>

      <section
        style={{
          width: "100%",
          backgroundImage: "url('/images/navbar-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "50px 16px",
          }}
        >
          {/* Navbar */}
          <Navbar />
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
        {/* Latest posts, cards, etc — unchanged */}

        {/* Hero */}
        <header style={{ marginBottom: 22 }}>
          <h1 style={{ fontSize: 42, margin: 0, lineHeight: 1.1 }}>Home</h1>
          <p style={{ opacity: 0.75, marginTop: 10, maxWidth: 650 }}>
            My personal site for writeups, notes, and experiments.
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
            {latestPosts.map((p) => (
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

            {latestPosts.length === 0 && (
              <li style={{ padding: "14px 16px", opacity: 0.75 }}>
                No posts yet.
              </li>
            )}
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
              Building a this website! With React + Next.js.
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
              <a
                href="https://github.com/Thorald"
                style={{ opacity: 0.9, textDecoration: "none" }}
              >
                GitHub
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/emil-rasmussen-8b02792a5/"
                style={{ opacity: 0.9, textDecoration: "none" }}
              >
                LinkedIn
              </a>
            </div>

          </div>

        </section>
      </div>
      <LadybugWalker />
    </main >
  );
}
