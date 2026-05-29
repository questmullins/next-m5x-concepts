export function HoursTable({ title = "Hours", rows, compact = false }) {
  return (
    <section className={`hours-card${compact ? " is-compact" : ""}`}>
      <div className="hours-card-head">
        <p>Visit The Shop</p>
        <h3>{title}</h3>
      </div>
      <table>
        <tbody>
          {rows.map((row) => (
            <tr key={row.day}>
              <th>{row.day}</th>
              <td>{row.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
