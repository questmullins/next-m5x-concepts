import Link from "next/link";

const links = [
  { href: "/", label: "Overview" },
  { href: "/track", label: "Track Glass" },
  { href: "/atelier", label: "Atelier" },
  { href: "/community", label: "Community" }
];

export function ConceptNav({ accent = "var(--accent-red)", inverted = false }) {
  return (
    <header className={`concept-nav${inverted ? " is-inverted" : ""}`}>
      <Link href="/" className="brand-lockup">
        <span className="brand-word">M5X</span>
        <span className="brand-sub">Mechanix Concepts</span>
      </Link>
      <nav className="concept-nav-links" aria-label="Concept pages">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="concept-nav-link"
            style={{ "--nav-accent": accent }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
