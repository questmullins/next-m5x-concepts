import Image from "next/image";
import { Reveal } from "../../components/Reveal";
import { FaqAccordion } from "../../components/FaqAccordion";
import { ReviewMarquee } from "../../components/ReviewMarquee";
import { GlassNav } from "../../components/GlassNav";
import { GlassHero } from "../../components/GlassHero";
import { GlassContactSection } from "../../components/GlassContactSection";
import { FloatingSocials } from "../../components/FloatingSocials";

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
      <FloatingSocials />
      <GlassNav ctaHref="#contact" />

      <GlassHero
        image="/images/bmw_a_hero.jpg"
        alt="BMW outdoors"
        eyebrow="Glass / Colorful"
        title="Bright energy. Smooth layers."
        accentLine="Modern warmth."
        copy="The same glass-based idea, pushed into a brighter and more expressive palette with subtle shapes and a cleaner sense of color."
        variantClass="glass-hero-colorful glass-hero-colorful-full"
      />

      <section className="glass-action-strip glass-action-strip-in-hero" id="hero-actions">
        <a className="glass-primary-cta" href="#contact">
          Email Us
        </a>
        <a className="glass-secondary-cta" href="#reviews">
          See Reviews
        </a>
      </section>

      <section className="glass-text-feature" id="features">
        <Reveal className="glass-feature-intro">
          <h2>More color. Same discipline.</h2>
          <p>
            This route keeps the clean geometry and soft motion, then lets the palette and atmosphere do more of the personality work.
          </p>
        </Reveal>
      </section>

      <section className="glass-services glass-services-colorful">
        <Reveal className="glass-services-head">
          <p className="eyebrow">What We Do</p>
          <h2>Expert service. Any make.</h2>
        </Reveal>
        <div className="glass-services-list">
          {[
            ["Repair & Maintenance", "From oil leaks to cooling systems, we handle the details that keep your car performing."],
            ["Diagnostics", "Advanced diagnostics to find the root cause, not just the symptoms."],
            ["Performance", "Upgrades, tuning, and performance parts installed the right way."],
            ["Pre-Purchase Inspections", "Know what you're buying with a thorough, honest inspection."],
            ["Any Car Welcome", "BMW is the specialty, but we service and repair a wide range of vehicles."]
          ].map(([title, copy]) => (
            <Reveal key={title} className="glass-service-item" distance={20}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
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

      <GlassContactSection variantClass="glass-contact-colorful" hideSocials />
    </main>
  );
}
