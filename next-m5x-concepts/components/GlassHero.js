"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function GlassHero({
  image,
  alt,
  eyebrow,
  title,
  accentLine,
  copy,
  variantClass = "",
  introDelayMs = 0,
  hideCopy = false,
  leftSlideIntro = false,
  aggressiveParallax = false
}) {
  const mediaRef = useRef(null);
  const contentRef = useRef(null);
  const rootRef = useRef(null);
  const [introVisible, setIntroVisible] = useState(introDelayMs === 0);

  useEffect(() => {
    if (introDelayMs === 0) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIntroVisible(true);
    }, introDelayMs);

    return () => window.clearTimeout(timer);
  }, [introDelayMs]);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      if (!rootRef.current || !mediaRef.current || !contentRef.current) {
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
      <div className="glass-hero-noise" />
      <div
        ref={contentRef}
        className={`glass-hero-copy glass-hero-copy-free${leftSlideIntro ? " has-side-intro" : ""}${introVisible ? " is-visible" : ""}`}
      >
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
        {!hideCopy ? <p className="lead-copy">{copy}</p> : null}
      </div>
    </section>
  );
}
