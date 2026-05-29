"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function GlassHero({ image, alt, eyebrow, title, accentLine, copy, variantClass = "" }) {
  const mediaRef = useRef(null);
  const contentRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      if (!rootRef.current || !mediaRef.current || !contentRef.current) {
        return;
      }

      const rect = rootRef.current.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
      const mediaShift = progress * -48;
      const contentShift = progress * -18;

      mediaRef.current.style.transform = `translate3d(0, ${mediaShift}px, 0) scale(1.06)`;
      contentRef.current.style.transform = `translate3d(0, ${contentShift}px, 0)`;
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
      <div className="glass-bg-blur blur-one" />
      <div className="glass-bg-blur blur-two" />
      <div className="glass-hero-noise" />
      <div ref={contentRef} className="glass-hero-copy glass-hero-copy-free">
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {title}
          {accentLine ? (
            <>
              <br />
              <span>{accentLine}</span>
            </>
          ) : null}
        </h1>
        <p className="lead-copy">{copy}</p>
      </div>
    </section>
  );
}
