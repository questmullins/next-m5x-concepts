"use client";

import Link from "next/link";
import { useState } from "react";

const items = [
  { href: "#story", label: "Story" },
  { href: "#environment", label: "Environment" },
  { href: "#details", label: "Details" },
  { href: "#contact", label: "Contact" }
];

export function MorphMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`morph-menu${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="morph-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span>Future Shopper</span>
        <strong>{open ? "Close" : "Open"}</strong>
      </button>

      <nav className="morph-links" aria-label="Future Shopper sections">
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="morph-link"
            style={{ "--menu-delay": `${index * 70}ms` }}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
