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
            <div style={{ display: "flex", gap: 12, alignItems: "left" }}>
                <a href="/" style={{ opacity: 0.85, textDecoration: "none", fontWeight: "700" }}>
                    Emil Thorald Krakau Rasmussen
                </a>
            </div>

            <div style={{ display: "flex", gap: 32 }}>
                <a href="#" style={{ opacity: 0.85, textDecoration: "none" }}>
                    Projects
                </a>
                <a href="#" style={{ opacity: 0.85, textDecoration: "none" }}>
                    About me
                </a>
                <Link href="/blog" style={{ opacity: 0.85, textDecoration: "none" }}>
                    Blog
                </Link>
            </div>
        </nav>
    );
}
