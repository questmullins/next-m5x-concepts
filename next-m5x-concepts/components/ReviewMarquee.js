const duplicated = (items) => [...items, ...items];

export function ReviewMarquee({ items }) {
  return (
    <div className="review-marquee-shell">
      <div className="review-marquee-track">
        {duplicated(items).map((item, index) => (
          <article key={`${item.quote}-${index}`} className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>{item.quote}</p>
            <span>{item.source}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
