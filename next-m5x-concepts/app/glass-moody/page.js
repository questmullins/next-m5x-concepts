import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../../components/Reveal";
import { FaqAccordion } from "../../components/FaqAccordion";
import { ReviewMarquee } from "../../components/ReviewMarquee";

const reviews = [
  {
    quote: "Moody, sharp, and way more premium than a normal shop site. It feels considered.",
    source: "Design feedback"
  },
  {
    quote: "The darker vibe makes the hero feel expensive without turning into a nightclub.",
    source: "Concept review"
  },
  {
    quote: "It still reads clearly. The visuals carry more weight, but the content stays usable.",
    source: "Early tester"
  }
];

const faqs = [
  {
    question: "Why a darker direction?",
    answer:
      "This version leans into atmosphere, contrast, and richer color depth for a more cinematic presentation."
  },
  {
    question: "Does it still feel approachable?",
    answer:
      "Yes. The mood is stronger, but the typography, spacing, and CTA structure stay clean and easy to use."
  },
  {
    question: "What is the visual goal here?",
    answer:
      "To make the BMW imagery feel more premium and intentional while still keeping the transparent glass language."
  }
];

export default function GlassMoodyPage() {
  return (
    <main className="concept-page theme-glass-page theme-glass-moody">
      <header className="glass-header">
        <div className="glass-logo">m5x</div>
        <nav className="glass-nav" aria-label="Glass moody navigation">
          <Link href="#features">Features</Link>
          <Link href="#faq">FAQ</Link>
          <a className="glass-nav-cta" href="mailto:quest.mullins@gmail.com?subject=M5X%20Moody%20Glass%20Concept">
            Schedule Service
          </a>
        </nav>
      </header>

      <section className="glass-hero glass-hero-strong glass-hero-moody">
        <div className="glass-hero-backdrop">
          <Image
            src="/images/bmw_b_hero.jpg"
            alt="Red BMW in the shop"
            fill
            priority
            sizes="100vw"
            className="glass-hero-image"
          />
        </div>
        <div className="glass-hero-overlay" />
        <div className="glass-bg-blur blur-one" />
        <div className="glass-bg-blur blur-two" />

        <Reveal className="glass-hero-copy glass-hero-copy-strong">
          <p className="eyebrow">Glass / Moody</p>
          <h1>
            Dark tones.
            <br />
            Precise work.
            <br />
            <span>Quiet confidence.</span>
          </h1>
          <p className="lead-copy">
            The same glass-based structure, but with a darker atmosphere, cinematic depth,
            and a more expensive-feeling first impression.
          </p>
          <div className="glass-hero-actions">
            <a className="glass-primary-cta" href="mailto:quest.mullins@gmail.com?subject=M5X%20Mechanix%20Service%20Request">
              Email Us
            </a>
            <a className="glass-secondary-cta" href="#reviews">
              See Reviews
            </a>
          </div>
        </Reveal>

        <Reveal className="glass-hero-float glass-float-left" delay={80}>
          <strong>Onyx base.</strong>
          <span>Coral and amaranth accents add controlled energy.</span>
        </Reveal>

        <Reveal className="glass-hero-float glass-float-right" delay={140}>
          <strong>Still glass.</strong>
          <span>Just moodier, denser, and more cinematic.</span>
        </Reveal>
      </section>

      <section className="glass-text-feature" id="features">
        <Reveal className="glass-feature-intro">
          <h2>Built for a darker premium mood.</h2>
          <p>
            Stronger contrast, more color depth, and more dramatic image handling without losing the clean layout system.
          </p>
        </Reveal>
      </section>

      <section className="glass-image-story">
        <Reveal className="glass-story-card" delay={70}>
          <Image
            src="/images/bmw_h_small.jpg"
            alt="BMW grille detail"
            fill
            sizes="(max-width: 900px) 100vw, 34vw"
            className="glass-story-image"
          />
        </Reveal>
        <Reveal className="glass-story-copy" delay={120}>
          <h3>Same bones. Different emotional temperature.</h3>
          <p>
            This route is for when the site should feel tailored, darker, and more atmospheric without becoming unreadable.
          </p>
        </Reveal>
      </section>

      <section className="reviews-section" id="reviews">
        <Reveal className="reviews-head">
          <h2>From the first reactions.</h2>
          <p>Continuous motion, cleaner cards, darker surroundings.</p>
        </Reveal>
        <ReviewMarquee items={reviews} />
      </section>

      <section className="glass-faq" id="faq">
        <Reveal className="faq-head">
          <h2>Questions, answered.</h2>
        </Reveal>
        <FaqAccordion items={faqs} />
      </section>
    </main>
  );
}
