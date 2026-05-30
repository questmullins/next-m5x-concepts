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
    quote: "The frosted background feels more intentional than the old dots, while the red still feels like M5X.",
    source: "Creative review"
  },
  {
    quote: "The darker glass gives the site a performance-shop edge without making it heavy.",
    source: "Concept review"
  },
  {
    quote: "The texture feels like smoked acrylic instead of a decorative pattern.",
    source: "User reaction"
  }
];

const faqs = [
  {
    question: "Why use frosted glass here?",
    answer:
      "This direction keeps the modern glass layout, but replaces loose dot decoration with smoked translucent layers, soft blur, and subtle texture."
  },
  {
    question: "Does it keep the M5X color?",
    answer:
      "Yes. The concept keeps the red accent and dark shop palette, using the color as diffused glow behind the glass instead of adding unrelated hues."
  },
  {
    question: "What is the best use case for this route?",
    answer:
      "When the site should feel more premium, technical, and polished than a typical dark automotive page."
  }
];

export default function GlassColorfulPage() {
  return (
    <main className="concept-page theme-glass-page theme-glass-colorful">
      <GlassNav ctaHref="#contact" />
      <FloatingSocials />

      <GlassHero
        image="/images/bmw_a_hero.jpg"
        alt="Silver BMW in architectural setting"
        variantClass="glass-hero-colorful"
      />

      <section className="glass-text-feature" id="features">
        <Reveal className="glass-feature-intro">
          <h2>Smoked glass. Same discipline.</h2>
          <p>
            This route keeps the clean geometry and motion, then swaps random dot texture for frosted acrylic depth and restrained red glow.
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
        <Reveal className="glass-story-card" delay={70} data-parallax-root>
          <Image
            src="/images/technician_hands_hero.jpg"
            alt="Mechanic hands working inside an engine bay"
            fill
            sizes="(max-width: 900px) 100vw, 34vw"
            className="glass-story-image"
            data-parallax-photo
          />
        </Reveal>
        <Reveal className="glass-story-copy" delay={120}>
          <h3>Polished, technical, and more intentional.</h3>
          <p>
            This is the route for a darker, more premium personality while keeping the motion, transparency, and spacing intact.
          </p>
        </Reveal>
      </section>

      <section className="reviews-section" id="reviews">
        <Reveal className="reviews-head">
          <h2>From the first reactions.</h2>
          <p>Same moving review rail, now with a smoked frosted atmosphere.</p>
        </Reveal>
        <ReviewMarquee items={reviews} />
      </section>

      <section className="glass-faq" id="faq">
        <Reveal className="faq-head">
          <h2>Questions, answered.</h2>
        </Reveal>
        <FaqAccordion items={faqs} />
      </section>

      <GlassContactSection variantClass="glass-contact-colorful" hideMark hideSocials />
    </main>
  );
}
