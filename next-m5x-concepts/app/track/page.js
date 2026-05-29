import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../../components/Reveal";
import { FaqAccordion } from "../../components/FaqAccordion";
import { ReviewMarquee } from "../../components/ReviewMarquee";

const reviews = [
  {
    quote: "Kole explains things in a way that actually makes sense. The car left better than expected.",
    source: "BMW owner"
  },
  {
    quote: "It feels like a specialist shop without the weird attitude. Clean, sharp, and honest.",
    source: "Fullerton customer"
  },
  {
    quote: "I came in for one issue and finally got clarity on the bigger picture. That matters.",
    source: "Early client feedback"
  },
  {
    quote: "The inspection was thorough, practical, and didn’t feel like a sales pitch.",
    source: "Pre-purchase inspection"
  }
];

const faqs = [
  {
    question: "How is M5X different from a general repair shop?",
    answer:
      "BMW is the core focus, so the experience is tuned toward diagnostics, common platform issues, enthusiast ownership, and cleaner communication around specialized work."
  },
  {
    question: "Do you only work on BMWs?",
    answer:
      "No. BMW is the specialty, but other vehicles are welcome when they need capable attention, practical guidance, and a shop that takes the details seriously."
  },
  {
    question: "What kinds of jobs fit best here?",
    answer:
      "Diagnostics, cooling systems, oil leaks, suspension refreshes, major maintenance, inspections, and jobs where clear reasoning matters as much as the repair itself."
  },
  {
    question: "Can I reach out before I know exactly what’s wrong?",
    answer:
      "Yes. A big part of the experience is helping owners describe the issue, understand the likely paths forward, and know what kind of appointment makes sense."
  },
  {
    question: "Do you offer inspections for used BMWs?",
    answer:
      "Yes. This is one of the strongest use cases for the brand because the process benefits from platform familiarity and a more careful eye for recurring trouble spots."
  }
];

export default function GlassPage() {
  return (
    <main className="concept-page theme-glass-page">
      <header className="glass-header">
        <div className="glass-logo">m5x</div>
        <nav className="glass-nav" aria-label="Glass concept navigation">
          <Link href="#features">Features</Link>
          <Link href="#faq">FAQ</Link>
          <a className="glass-nav-cta" href="mailto:quest.mullins@gmail.com?subject=M5X%20Mechanix%20Glass%20Concept">
            Schedule Service
          </a>
        </nav>
      </header>

      <section className="glass-hero">
        <div className="glass-bg-blur blur-one" />
        <div className="glass-bg-blur blur-two" />
        <Reveal className="glass-hero-copy" distance={24}>
          <p className="eyebrow">Glass</p>
          <h1>BMW-first service with a softer, cleaner digital feel.</h1>
          <p className="lead-copy">
            A transparent, modern landing page that keeps feeding the visitor useful content while
            the imagery, text, and layered surfaces gently move through the scroll.
          </p>
        </Reveal>

        <Reveal className="glass-hero-visual" delay={90} distance={30}>
          <div className="glass-device-frame">
            <div className="glass-device-glow" />
            <div className="glass-device-panel">
              <Image
                src="/images/bmw_b_hero.jpg"
                alt="BMW inside the shop"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className="glass-device-image"
              />
            </div>
          </div>
          <div className="glass-side-note note-left">
            <strong>Clear diagnostics.</strong>
            <span>No clutter, no heavy dealership feel.</span>
          </div>
          <div className="glass-side-note note-right">
            <strong>Built around trust.</strong>
            <span>Specialist knowledge with everyday communication.</span>
          </div>
        </Reveal>
      </section>

      <section className="glass-text-feature" id="features">
        <Reveal className="glass-feature-intro">
          <h2>Prioritize what actually matters.</h2>
          <p>
            The page should feel light, modern, and focused. Short text, clean spacing,
            and motion that supports the experience instead of taking it over.
          </p>
        </Reveal>
      </section>

      <section className="glass-image-story">
        <Reveal className="glass-story-card card-top" delay={70}>
          <Image
            src="/images/technician_hands_hero.jpg"
            alt="Technician hands working"
            fill
            sizes="(max-width: 900px) 100vw, 34vw"
            className="glass-story-image"
          />
        </Reveal>
        <Reveal className="glass-story-copy" delay={120}>
          <h3>Images and text should trade attention as you move.</h3>
          <p>
            Instead of dropping the user into stacked blocks, this route lets images appear,
            text settle in, and content feel revealed rather than dumped all at once.
          </p>
        </Reveal>
      </section>

      <section className="reviews-section">
        <Reveal className="reviews-head">
          <h2>From the first customers.</h2>
          <p>Simple, clean social proof in a continuously moving review rail.</p>
        </Reveal>
        <ReviewMarquee items={reviews} />
      </section>

      <section className="glass-faq" id="faq">
        <Reveal className="faq-head">
          <h2>Got questions?</h2>
        </Reveal>
        <FaqAccordion items={faqs} />
      </section>

      <footer className="glass-footer">
        <div className="glass-footer-backdrop">
          <Image
            src="/images/bmw_f_hero.jpg"
            alt="BMW by the water"
            fill
            sizes="100vw"
            className="glass-footer-image"
          />
        </div>
        <div className="glass-footer-overlay" />
        <div className="glass-footer-content">
          <Reveal className="glass-footer-hero">
            <h2>Bring your next service, inspection, or diagnosis to M5X.</h2>
            <p>
              Built for BMW owners, open to the right work, and designed to feel modern from the first scroll to the first message.
            </p>
            <a className="glass-footer-cta" href="mailto:quest.mullins@gmail.com?subject=M5X%20Mechanix%20Inquiry">
              Schedule Service
            </a>
          </Reveal>

          <div className="glass-footer-links">
            <Reveal>
              <div>
                <h3>Visit</h3>
                <p>227 N Yale Ave.<br />Fullerton, CA 92831</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <h3>Explore</h3>
                <p>BMW service<br />Diagnostics<br />Inspections</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div>
                <h3>Connect</h3>
                <p>Instagram<br />Email<br />YouTube</p>
              </div>
            </Reveal>
          </div>
        </div>
      </footer>
    </main>
  );
}
