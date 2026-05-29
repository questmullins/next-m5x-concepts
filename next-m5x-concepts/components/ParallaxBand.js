"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ParallaxBand({ src, alt, height = "medium", tone = "dark", children }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    function updateOffset() {
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const limited = Math.max(0, Math.min(1, progress));
      setOffset((limited - 0.5) * 70);
    }

    updateOffset();
    window.addEventListener("scroll", updateOffset, { passive: true });
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("scroll", updateOffset);
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`parallax-band is-${height} is-${tone}`}
    >
      <div className="parallax-media" style={{ transform: `translateY(${offset}px)` }}>
        <Image src={src} alt={alt} fill sizes="100vw" className="parallax-image" />
      </div>
      <div className="parallax-overlay" />
      {children ? <div className="parallax-content">{children}</div> : null}
    </section>
  );
}
