import Image from "next/image";
import { Reveal } from "../../components/Reveal";
import { FaqAccordion } from "../../components/FaqAccordion";
import { ReviewMarquee } from "../../components/ReviewMarquee";
import { GlassNav } from "../../components/GlassNav";
import { GlassHero } from "../../components/GlassHero";
import { GlassContactSection } from "../../components/GlassContactSection";

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
    quote: "The inspection was thorough, practical, and did not feel like a sales pitch.",
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
    question: "Can I reach out before I know exactly what is wrong?",
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
      <GlassNav ctaHref="#contact" />

      <GlassHero
        image="/images/bmw_a_hero.jpg"
        alt="BMW hero shot"
        eyebrow="BMW Specialist | Fullerton, CA"
        title="Better care. Real results."
        accentLine="Any car. Always."
        copy="A softer glass-driven interface with a stronger first impression, smoother parallax, and cleaner detail sections once the scroll begins."
        variantClass="glass-hero-clean"
      />

      <section className="glass-action-strip" id="hero-actions">
        <a className="glass-primary-cta" href="#contact">
          Email Us
        </a>
        <a className="glass-secondary-cta" href="#reviews">
          See Reviews
        </a>
      </section>

      <section className="glass-text-feature" id="features">
        <Reveal className="glass-feature-intro">
          <h2>Prioritize what actually matters.</h2>
          <p>
            The page stays clean and modern, but the hero now carries far more of the emotional weight before the lighter glass system takes over.
          </p>
        </Reveal>
      </section>

      <section className="glass-image-story">
        <Reveal className="glass-story-card" delay={70}>
          <Image
            src="/images/technician_hands_hero.jpg"
            alt="Technician hands working"
            fill
            sizes="(max-width: 900px) 100vw, 34vw"
            className="glass-story-image"
          />
        </Reveal>
        <Reveal className="glass-story-copy" delay={120}>
          <h3>Modern layers after a bold first impression.</h3>
          <p>
            Strong hero presentation up front, then softer transitions into the content, reviews, FAQ, and service request flow.
          </p>
        </Reveal>
      </section>

      <section className="reviews-section" id="reviews">
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

      <GlassContactSection />
    </main>
  );
}
