"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GlassLogo } from "./GlassLogo";

export function GlassHero({
  image,
  alt,
  eyebrow,
  title,
  accentLine,
  copy,
  variantClass = "",
  aggressiveParallax = false
}) {
  const mediaRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      if (!rootRef.current || !mediaRef.current) {
        return;
      }

      const rect = rootRef.current.getBoundingClientRect();
      const scrolledWithinHero = Math.max(0, Math.min(window.scrollY, rect.height));
      const mediaShift = aggressiveParallax
        ? Math.min(scrolledWithinHero * 0.12, 40)
        : Math.max(-1, Math.min(1, rect.top / window.innerHeight)) * 48;

      mediaRef.current.style.transform = aggressiveParallax
        ? `translate3d(0, -${mediaShift}px, 0) scale(1.04)`
        : `translate3d(0, ${-mediaShift}px, 0) scale(1.06)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={rootRef} className={`glass-hero glass-hero-free ${variantClass}`}>
      <div ref={mediaRef} className="glass-hero-backdrop glass-hero-backdrop-free">
        <Image src={image} alt={alt} fill priority sizes="100vw" className="glass-hero-image" />
      </div>
      <div className="glass-hero-overlay" />
      <div className="glass-hero-brand-shell">
        <GlassLogo className="glass-hero-brand-mark" />
      </div>
    </section>
  );
}
