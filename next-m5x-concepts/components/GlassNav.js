"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GlassLogo } from "./GlassLogo";

export function GlassNav({ ctaHref, ctaLabel = "Schedule Service", ctaTargetId = "hero-actions" }) {
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const target = document.getElementById(ctaTargetId);
    if (!target) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingCta(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [ctaTargetId]);

  return (
    <header className="glass-header" id="top">
      <GlassLogo />
      <nav className={`glass-nav${showFloatingCta ? " is-expanded" : ""}`} aria-label="Glass concept navigation">
        <Link href="#features" className="glass-nav-link is-selected">Features</Link>
        <Link href="#reviews" className="glass-nav-link">Reviews</Link>
        <Link href="#faq" className="glass-nav-link">FAQ</Link>
        <Link href="#contact" className="glass-nav-link">Contact</Link>
        <a className={`glass-nav-cta${showFloatingCta ? " is-visible" : ""}`} href={ctaHref}>
          {ctaLabel}
        </a>
      </nav>
    </header>
  );
}
