"use client";

import Link from "next/link";

export function GlassLogo({ href = "/", className = "" }) {
  return (
    <Link href={href} className={`glass-brand${className ? ` ${className}` : ""}`} aria-label="M5X Mechanix home">
      <span className="glass-brand-word">
        <span>M5</span>
        <span className="glass-brand-accent">X</span>
      </span>
      <span className="glass-brand-sub">Mechanix</span>
    </Link>
  );
}
