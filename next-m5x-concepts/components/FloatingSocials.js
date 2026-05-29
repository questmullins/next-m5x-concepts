"use client";

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

export function FloatingSocials() {
  return (
    <div className="floating-socials is-visible">
      <a className="floating-social-instagram" href="https://www.instagram.com/m5x_mechanix/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <InstagramIcon />
      </a>
      <a className="floating-social-youtube" href="https://www.youtube.com/channel/UCm0v-xv1uiD0EIrK2ZOx06w" target="_blank" rel="noreferrer" aria-label="YouTube">
        <YouTubeIcon />
      </a>
    </div>
  );
}
