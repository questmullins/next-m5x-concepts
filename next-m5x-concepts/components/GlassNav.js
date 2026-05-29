"use client";

import Link from "next/link";
import { GlassLogo } from "./GlassLogo";

export function GlassNav({ ctaHref, ctaLabel = "Schedule Service" }) {
  return (
    <header className="glass-header" id="top">
      <GlassLogo className="glass-header-logo" />
      <nav className="glass-nav" aria-label="Glass concept navigation">
        <Link href="#features" className="glass-nav-link is-selected">Features</Link>
        <Link href="#reviews" className="glass-nav-link">Reviews</Link>
        <Link href="#faq" className="glass-nav-link">FAQ</Link>
        <Link href="#contact" className="glass-nav-link">Contact</Link>
        <a className="glass-nav-cta is-visible" href={ctaHref}>
          {ctaLabel}
        </a>
      </nav>
    </header>
  );
}
