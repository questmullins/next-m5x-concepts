"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function ThemeIcon({ isDark }) {
  if (isDark) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 4.2V2.5M12 21.5v-1.7M18.1 5.9l1.2-1.2M4.7 19.3l1.2-1.2M19.8 12h1.7M2.5 12h1.7M18.1 18.1l1.2 1.2M4.7 4.7l1.2 1.2M12 7.1A4.9 4.9 0 1 1 7.1 12 4.9 4.9 0 0 1 12 7.1Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 14.1A7.9 7.9 0 0 1 9.9 4a8.4 8.4 0 1 0 10.1 10.1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GlassNav({ ctaHref, ctaLabel = "Schedule Service" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  const applyTheme = (mode) => {
    document.documentElement.dataset.glassMode = mode;
    document.body.dataset.glassMode = mode;
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("m5x-glass-theme");
    const darkMode = savedTheme === "dark";
    setMounted(true);
    setIsDark(darkMode);
    applyTheme(darkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (!mounted) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : previousOverflow || "";

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
  }, [menuOpen, mounted]);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const nextMode = isDark ? "dark" : "light";
    applyTheme(nextMode);
    window.localStorage.setItem("m5x-glass-theme", nextMode);
  }, [isDark, mounted]);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setIsDark((current) => !current);

  return (
    <header className="glass-header" id="top">
      <nav className="glass-nav" aria-label="Glass concept navigation">
        <Link href="#features" className="glass-nav-link is-selected">Features</Link>
        <Link href="#reviews" className="glass-nav-link">Reviews</Link>
        <Link href="#faq" className="glass-nav-link">FAQ</Link>
        <Link href="#contact" className="glass-nav-link">Contact</Link>
        <a className="glass-nav-cta" href={ctaHref}>
          {ctaLabel}
        </a>
      </nav>

      <button
        type="button"
        className="glass-theme-toggle"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        onClick={toggleTheme}
      >
        <ThemeIcon isDark={isDark} />
      </button>

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
            <button type="button" className="glass-mobile-link glass-mobile-theme" onClick={toggleTheme}>
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
            <a className="glass-mobile-cta" href={ctaHref} onClick={closeMenu}>
              {ctaLabel}
            </a>
          </div>
        </>
      ) : null}
    </header>
  );
}
