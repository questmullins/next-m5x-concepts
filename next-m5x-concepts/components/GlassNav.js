"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GlassLogo } from "./GlassLogo";

export function GlassNav({ ctaHref, ctaLabel = "Schedule Service" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow || "";
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow || "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="glass-header" id="top">
      <GlassLogo className="glass-header-logo" />
      <button
        type="button"
        className={`glass-mobile-toggle${menuOpen ? " is-open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="glass-mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className="glass-nav" aria-label="Glass concept navigation">
        <Link href="#features" className="glass-nav-link is-selected">Features</Link>
        <Link href="#reviews" className="glass-nav-link">Reviews</Link>
        <Link href="#faq" className="glass-nav-link">FAQ</Link>
        <Link href="#contact" className="glass-nav-link">Contact</Link>
        <a className="glass-nav-cta is-visible" href={ctaHref}>
          {ctaLabel}
        </a>
      </nav>
      {menuOpen ? (
        <>
          <button
            type="button"
            className="glass-mobile-scrim"
            aria-label="Close menu overlay"
            onClick={closeMenu}
          />
          <div className="glass-mobile-menu" id="glass-mobile-menu" role="dialog" aria-modal="true">
            <Link href="#features" className="glass-mobile-link is-selected" onClick={closeMenu}>Features</Link>
            <Link href="#reviews" className="glass-mobile-link" onClick={closeMenu}>Reviews</Link>
            <Link href="#faq" className="glass-mobile-link" onClick={closeMenu}>FAQ</Link>
            <Link href="#contact" className="glass-mobile-link" onClick={closeMenu}>Contact</Link>
            <a className="glass-mobile-cta" href={ctaHref} onClick={closeMenu}>
              {ctaLabel}
            </a>
          </div>
        </>
      ) : null}
    </header>
  );
}
