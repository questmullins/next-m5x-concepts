"use client";

import { useState } from "react";

export function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(2);

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const isOpen = index === openIndex;

        return (
          <article key={item.question} className={`faq-item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <strong>{isOpen ? "×" : "+"}</strong>
            </button>
            <div className="faq-answer" hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
