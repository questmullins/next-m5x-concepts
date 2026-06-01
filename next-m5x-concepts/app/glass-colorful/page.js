import Image from "next/image";
import { Reveal } from "../../components/Reveal";
import { FaqAccordion } from "../../components/FaqAccordion";
import { ReviewMarquee } from "../../components/ReviewMarquee";
import { GlassNav } from "../../components/GlassNav";
import { GlassHero } from "../../components/GlassHero";
import { GlassContactSection } from "../../components/GlassContactSection";
import { FloatingSocials } from "../../components/FloatingSocials";
import { GlassStoreHours } from "../../components/GlassStoreHours";

const reviews = [
  {
    quote: "Kole explained the cooling issue clearly, prioritized what mattered, and got the car feeling dependable again.",
    source: "BMW service customer"
  },
  {
    quote: "The inspection notes were practical and honest. I knew exactly what I was buying before I committed.",
    source: "Pre-purchase inspection"
  },
  {
    quote: "The shop feels enthusiast-led without the pressure. Clear diagnostics, clean work, and realistic advice.",
    source: "Diagnostics customer"
  }
];

const faqs = [
  {
    question: "What vehicles does M5X service?",
    answer:
      "BMW is the specialty, especially enthusiast-owned cars, but M5X also services and repairs a wide range of makes when the concern fits the shop's diagnostic and repair workflow."
  },
  {
    question: "How should I request service?",
    answer:
      "Send the year, make, model, and the concern through the service form. Include recent symptoms, warning lights, noises, leaks, or maintenance history if you have it."
  },
  {
    question: "Do you offer pre-purchase inspections?",
    answer:
      "Yes. Pre-purchase inspections focus on condition, common failure points, repair priorities, and whether the vehicle makes sense for the buyer."
  }
];

const services = [
  ["Repair & Maintenance", "Oil leaks, cooling systems, brakes, suspension, fluids, and the maintenance details that keep the car reliable."],
  ["Diagnostics", "Warning lights, drivability issues, electrical concerns, leaks, and noises checked with root-cause thinking."],
  ["Performance", "Enthusiast upgrades, supporting maintenance, and parts installed with attention to fit, use case, and reliability."],
  ["Pre-Purchase Inspections", "A practical condition report before you buy, with clear notes on what matters now and what may come later."],
  ["Detailing & Cleaning", "Interior refreshes, exterior wash support, and cleanup recommendations before delivery, sale, or inspection."],
  ["Any Car Welcome", "BMW is the specialty, but M5X evaluates and services a wide range of vehicles with the same careful approach."]
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
          <p className="eyebrow">Fullerton, California</p>
          <h2>Honest service for cars you care about.</h2>
          <p>
            M5X Mechanix is built for drivers who want thoughtful diagnostics, clear recommendations, and work that is
            done with care. BMW is our specialty, but every car gets the same focused attention.
          </p>
        </Reveal>
      </section>

      <section className="glass-services glass-services-colorful">
        <Reveal className="glass-services-head">
          <p className="eyebrow">What We Do</p>
          <h2>Expert service. Any make.</h2>
        </Reveal>
        <div className="glass-services-list">
          {services.map(([title, copy]) => (
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
            src="/images/toolbox/car_repair_02.jpg"
            alt="Technician inspecting the underside of a vehicle on a lift"
            fill
            sizes="(max-width: 900px) 100vw, 34vw"
            className="glass-story-image"
            data-parallax-photo
          />
        </Reveal>
        <Reveal className="glass-story-copy" delay={120}>
          <p className="eyebrow">Built around the diagnosis</p>
          <h3>Know what your car needs and why.</h3>
          <p>
            From a strange drivability issue to a routine maintenance visit, we start by listening, checking the car,
            and explaining the next step before the work moves forward.
          </p>
        </Reveal>
      </section>

      <section className="glass-shop-gallery">
        <Reveal className="glass-shop-gallery-head">
          <p className="eyebrow">In the shop</p>
          <h2>From daily drivers to enthusiast builds.</h2>
          <p>Maintenance, diagnostics, inspections, and upgrades handled with the same careful standard.</p>
        </Reveal>
        <div className="glass-shop-gallery-grid">
          {[
            ["/images/toolbox/bmw_pair_01.jpg", "Two BMW vehicles parked outside the shop", "BMW-focused care"],
            ["/images/toolbox/engine_luxury_01.jpg", "BMW engine components during service", "Mechanical work"],
            ["/images/toolbox/tire_mounting_01.jpg", "Technician mounting a tire", "Road-ready details"]
          ].map(([src, alt, label], index) => (
            <Reveal className="glass-shop-gallery-card" delay={index * 55} key={src}>
              <Image src={src} alt={alt} fill sizes="(max-width: 720px) 100vw, 33vw" />
              <span>{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <GlassStoreHours />

      <section className="reviews-section" id="reviews">
        <Reveal className="reviews-head">
          <h2>What drivers appreciate.</h2>
          <p>Clear communication, realistic priorities, and repairs that make sense.</p>
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
