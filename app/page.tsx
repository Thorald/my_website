"use client";

import Link from "next/link";

export default function Board() {
  return (
    <>
      <h1>Home</h1>

      <section>
        <h2>Latest posts</h2>
        <ul>
          <li>
            <Link href="/blog/first_post">
              My First Post
            </Link>
          </li>
          <li>
            <Link href="/blog/second_post">
              My Second Post
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}