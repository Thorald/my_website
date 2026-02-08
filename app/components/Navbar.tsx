"use client";
import Link from "next/link";

const linkStyle = {
    color: "#FFF",
    fontSize: 18,
    fontWeight: 600,
    textDecoration: "none",
    opacity: 0.9,
};

export default function Navbar() {
    return (
        <nav
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderRadius: 12,
                marginBottom: 24,
            }}
        >
            <div>
                <Link
                    href="/"
                    className="nav-link"
                    style={{ ...linkStyle, fontSize: 20, fontWeight: 700 }}
                >
                    Emil Thorald Krakau Rasmussen
                </Link>
            </div>

            <div style={{ display: "flex", gap: 32 }}>
                <a href="#" className="nav-link" style={linkStyle}>
                    Projects
                </a>
                <a href="/about" className="nav-link" style={linkStyle}>
                    About me
                </a>
                <Link href="/blog" className="nav-link" style={linkStyle}>
                    Blog
                </Link>
            </div>

            {/* CSS needed for visited links */}
            <style jsx>{`
        .nav-link,
        .nav-link:visited,
        .nav-link:hover,
        .nav-link:active {
          color: white;
        }

        .nav-link:hover {
          opacity: 1;
        }
      `}</style>
        </nav>
    );
}
