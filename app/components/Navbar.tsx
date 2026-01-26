import Link from "next/link";

export default function Navbar() {
    return (
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
                <span style={{ fontWeight: 700 }}>
                    <a href="/" style={{ opacity: 0.85, textDecoration: "none" }}>
                        Emil's Site
                    </a>
                </span>
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
    );
}
