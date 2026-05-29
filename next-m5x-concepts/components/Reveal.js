"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "", delay = 0, distance = 28, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-block${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{
        "--reveal-delay": `${delay}ms`,
        "--reveal-distance": `${distance}px`
      }}
      {...props}
    >
      {children}
    </div>
  );
}
