"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GlassLogo } from "./GlassLogo";

export function GlassHero({ image, alt, variantClass = "" }) {
  const rootRef = useRef(null);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const mediaNodes = document.querySelectorAll("[data-parallax-photo]");

      mediaNodes.forEach((node) => {
        const root = node.closest("[data-parallax-root]");
        if (!(root instanceof HTMLElement) || !(node instanceof HTMLElement)) {
          return;
        }

        const rect = root.getBoundingClientRect();
        const normalized = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
        const maxShift = root.offsetHeight * 0.1;
        const shift = normalized * maxShift;

        node.style.transform = `translate3d(0, ${-shift}px, 0) scale(1.15)`;
      });
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
    <section ref={rootRef} data-parallax-root className={`glass-hero glass-hero-free ${variantClass}`}>
      <div data-parallax-photo className="glass-hero-backdrop glass-hero-backdrop-free">
        <Image src={image} alt={alt} fill priority sizes="100vw" className="glass-hero-image" />
      </div>
      <div className="glass-hero-overlay" />
      <div className="glass-hero-brand-shell">
        <GlassLogo className="glass-hero-brand-mark" />
      </div>
    </section>
  );
}
