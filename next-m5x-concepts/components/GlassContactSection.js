import { GlassLogo } from "./GlassLogo";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10 9.4L15.8 12L10 14.6V9.4Z" fill="currentColor" />
    </svg>
  );
}

export function GlassContactSection({ variantClass = "", hideSocials = false }) {
  return (
    <section className={`glass-contact${variantClass ? ` ${variantClass}` : ""}`} id="contact">
      <div className="glass-contact-head">
        <div className="glass-contact-mark">
          <GlassLogo href="#top" />
        </div>
        <div>
          <h2>Ready to get started?</h2>
          <p>Send the year, make, model, and what needs attention. We will follow up with next steps.</p>
        </div>
      </div>

      <div className="glass-contact-grid">
        <form action="https://formspree.io/f/xaqkabzl" method="POST" className="glass-service-form">
          <label>
            <span>First Name</span>
            <input type="text" name="first_name" required />
          </label>
          <label>
            <span>Last Name</span>
            <input type="text" name="last_name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Car Make</span>
            <input type="text" name="car_make" required />
          </label>
          <label>
            <span>Model</span>
            <input type="text" name="model" required />
          </label>
          <label>
            <span>Year</span>
            <input type="text" name="year" required />
          </label>
          <label className="glass-form-wide">
            <span>Concern</span>
            <textarea name="concern" rows="8" required />
          </label>
          <input type="hidden" name="_subject" value="New M5X Mechanix Service Request" />
          <button type="submit" className="glass-form-submit">
            Send Service Request
          </button>
        </form>

        <div className="glass-contact-side">
          <div className="glass-map-shell">
            <iframe
              title="M5X Mechanix map"
              src="https://www.google.com/maps?q=227+N+Yale+Ave,+Fullerton,+CA+92831&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {!hideSocials ? (
            <div className="glass-social-strip">
              <a href="https://www.instagram.com/m5x_mechanix/" target="_blank" rel="noreferrer" className="glass-social-card">
                <InstagramIcon />
                <span>Instagram</span>
              </a>
              <a href="https://www.youtube.com/channel/UCm0v-xv1uiD0EIrK2ZOx06w" target="_blank" rel="noreferrer" className="glass-social-card">
                <YouTubeIcon />
                <span>YouTube</span>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
