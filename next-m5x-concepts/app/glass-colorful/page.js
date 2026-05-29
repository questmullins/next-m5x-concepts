import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../../components/Reveal";
import { FaqAccordion } from "../../components/FaqAccordion";
import { ReviewMarquee } from "../../components/ReviewMarquee";

const reviews = [
  {
    quote: "The color gives it energy without making it childish. It feels fresh and current.",
    source: "Creative review"
  },
  {
    quote: "It is still clean, but a lot more playful and memorable than the average shop site.",
    source: "Concept review"
  },
  {
    quote: "This version feels optimistic, modern, and easier to remember after one pass.",
    source: "User reaction"
  }
];

const faqs = [
  {
    question: "Why use a brighter palette here?",
    answer:
      "This direction explores a friendlier, more energetic expression while still keeping the glass layout and modern motion."
  },
  {
    question: "Does colorful mean less premium?",
    answer:
      "Not here. The goal is clean premium structure first, then strategic color through blur, gradients, and accent surfaces."
  },
  {
    question: "What is the best use case for this route?",
    answer:
      "When the brand should feel memorable, lively, and more design-forward than a typical dark automotive site."
  }
];

export default function GlassColorfulPage() {
  return (
    <main className="concept-page theme-glass-page theme-glass-colorful">
      <header className="glass-header">
        <div className="glass-logo">m5x</div>
        <nav className="glass-nav" aria-label="Glass colorful navigation">
          <Link href="#features">Features</Link>
          <Link href="#faq">FAQ</Link>
          <a className="glass-nav-cta" href="mailto:quest.mullins@gmail.com?subject=M5X%20Colorful%20Glass%20Concept">
            Schedule Service
          </a>
        </nav>
      </header>

      <section className="glass-hero glass-hero-strong glass-hero-colorful">
        <div className="glass-hero-backdrop">
          <Image
            src="/images/bmw_f_hero.jpg"
            alt="BMW at the waterfront"
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
          <p className="eyebrow">Glass / Colorful</p>
          <h1>
            Bright energy.
            <br />
            Smooth layers.
            <br />
            <span>Modern warmth.</span>
          </h1>
          <p className="lead-copy">
            The same glass-based idea, pushed into a brighter and more expressive palette using petal pink,
            emerald, teal, orange, and clean white spacing.
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
          <strong>Petal + teal.</strong>
          <span>Playful, soft, and still organized.</span>
        </Reveal>

        <Reveal className="glass-hero-float glass-float-right" delay={140}>
          <strong>Colorful glass.</strong>
          <span>A brighter identity without losing polish.</span>
        </Reveal>
      </section>

      <section className="glass-text-feature" id="features">
        <Reveal className="glass-feature-intro">
          <h2>More color. Same discipline.</h2>
          <p>
            This route keeps the clean geometry and soft movement, then lets the palette do more of the personality work.
          </p>
        </Reveal>
      </section>

      <section className="glass-image-story">
        <Reveal className="glass-story-card" delay={70}>
          <Image
            src="/images/bmw_a_hero.jpg"
            alt="Red BMW SUV outdoors"
            fill
            sizes="(max-width: 900px) 100vw, 34vw"
            className="glass-story-image"
          />
        </Reveal>
        <Reveal className="glass-story-copy" delay={120}>
          <h3>Friendly, vibrant, and more memorable.</h3>
          <p>
            This is the route for a brighter, more welcoming personality while keeping the motion, transparency, and premium spacing intact.
          </p>
        </Reveal>
      </section>

      <section className="reviews-section" id="reviews">
        <Reveal className="reviews-head">
          <h2>From the first reactions.</h2>
          <p>Same moving review rail, now with a more expressive atmosphere.</p>
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
