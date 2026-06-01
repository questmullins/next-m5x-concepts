const defaultHours = [
  ["Monday", "8:00 AM - 6:00 PM"],
  ["Tuesday", "8:00 AM - 6:00 PM"],
  ["Wednesday", "8:00 AM - 6:00 PM"],
  ["Thursday", "8:00 AM - 6:00 PM"],
  ["Friday", "8:00 AM - 6:00 PM"],
  ["Saturday", "9:00 AM - 2:00 PM"],
  ["Sunday", "Closed"]
];

export function GlassStoreHours({ hours = defaultHours }) {
  return (
    <section className="glass-hours" id="hours">
      <div className="glass-hours-copy">
        <p className="eyebrow">Shop Hours</p>
        <h2>Here when your car needs attention.</h2>
        <p>
          Stop by during shop hours or send a service request before you arrive. For larger repairs and diagnostics,
          scheduling ahead helps us give your car the time it deserves.
        </p>
      </div>
      <div className="glass-hours-card">
        {hours.map(([day, time]) => (
          <div className="glass-hours-row" key={day}>
            <span>{day}</span>
            <strong>{time}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
