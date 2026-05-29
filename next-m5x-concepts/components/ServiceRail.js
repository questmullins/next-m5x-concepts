export function ServiceRail({ items, caption = "Capabilities" }) {
  return (
    <section className="service-rail-wrap">
      <div className="service-rail-header">
        <p>{caption}</p>
        <h3>Slide through the services</h3>
      </div>
      <div className="service-rail" role="list" aria-label={caption}>
        {items.map((item, index) => (
          <article key={item.title} className="service-rail-card" role="listitem">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h4>{item.title}</h4>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
