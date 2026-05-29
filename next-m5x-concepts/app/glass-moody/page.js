import Image from "next/image";
import { Reveal } from "../../components/Reveal";
import { FaqAccordion } from "../../components/FaqAccordion";
import { ReviewMarquee } from "../../components/ReviewMarquee";
import { GlassNav } from "../../components/GlassNav";
import { GlassHero } from "../../components/GlassHero";
import { GlassContactSection } from "../../components/GlassContactSection";

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
      <GlassNav ctaHref="#contact" />

      <GlassHero
        image="/images/bmw_b_hero.jpg"
        alt="Red BMW in the shop"
        eyebrow="Glass / Moody"
        title="Dark tones. Precise work."
        accentLine="Quiet confidence."
        copy="The same glass-based structure, pushed into a grittier, more cinematic mood with a darker grid-driven atmosphere."
        variantClass="glass-hero-moody"
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
          <h2>Built for a darker premium mood.</h2>
          <p>
            Stronger contrast, more depth, and a grittier background system make this feel sharper and more cinematic.
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
          <h3>Same bones. More grit.</h3>
          <p>
            This route is for when the site should feel tailored, denser, moodier, and more performance-minded without becoming unreadable.
          </p>
        </Reveal>
      </section>

      <section className="reviews-section" id="reviews">
        <Reveal className="reviews-head">
          <h2>From the first reactions.</h2>
          <p>Continuous motion, darker surroundings, and a more cinematic shell.</p>
        </Reveal>
        <ReviewMarquee items={reviews} />
      </section>

      <section className="glass-faq" id="faq">
        <Reveal className="faq-head">
          <h2>Questions, answered.</h2>
        </Reveal>
        <FaqAccordion items={faqs} />
      </section>

      <GlassContactSection variantClass="glass-contact-moody" />
    </main>
  );
}
