import Image from "next/image";
import { FloatingSocials } from "../../components/FloatingSocials";
import { GlassContactSection } from "../../components/GlassContactSection";
import { GlassNav } from "../../components/GlassNav";
import { GlassStoreHours } from "../../components/GlassStoreHours";
import { Reveal } from "../../components/Reveal";

const values = [
  {
    title: "Clear diagnostics",
    body: "We verify the concern, explain what we find, and separate urgent repairs from work that can wait."
  },
  {
    title: "Enthusiast knowledge",
    body: "BMW experience helps us recognize common patterns while still treating every vehicle as its own case."
  },
  {
    title: "Work with care",
    body: "From routine maintenance to a deeper repair, the goal is a car that leaves the shop better than it arrived."
  }
];

export const metadata = {
  title: "About M5X Mechanix",
  description: "Learn about the enthusiast-led service approach behind M5X Mechanix in Fullerton, California."
};

export default function GlassAboutPage() {
  return (
    <main className="concept-page theme-glass-page theme-glass-colorful glass-about-page">
      <GlassNav ctaHref="/#contact" rootHref="/" />
      <FloatingSocials />

      <section className="glass-about-hero">
        <Image
          src="/images/toolbox/bmw_pair_01.jpg"
          alt="Two BMW vehicles parked outside an automotive shop"
          fill
          priority
          sizes="100vw"
          className="glass-about-hero-image"
        />
        <div className="glass-about-hero-overlay" />
        <Reveal className="glass-about-hero-copy">
          <p className="eyebrow">About M5X Mechanix | Fullerton, CA</p>
          <h1>A better shop experience starts with straight answers.</h1>
          <p>
            M5X Mechanix is an enthusiast-led automotive service shop built around thoughtful diagnostics, quality work,
            and practical recommendations for drivers who want to understand what their car needs.
          </p>
          <a className="glass-about-cta" href="/#contact">Schedule Service</a>
        </Reveal>
      </section>

      <section className="glass-about-story">
        <Reveal className="glass-about-story-media">
          <Image
            src="/images/toolbox/car_repair_02.jpg"
            alt="Technician inspecting a vehicle on a lift"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </Reveal>
        <Reveal className="glass-about-panel" delay={70}>
          <p className="eyebrow">The working standard</p>
          <h2>Good repairs begin with a careful look.</h2>
          <p>
            Whether you are dealing with a warning light, cooling issue, suspension noise, leak, or a car you are
            thinking about buying, the first step is understanding what is really happening.
          </p>
          <p>
            BMW is our specialty, but the standard applies to every make: inspect carefully, communicate clearly, and
            recommend work that makes sense for the car and the driver.
          </p>
        </Reveal>
      </section>

      <section className="glass-about-values">
        <Reveal className="glass-about-values-head">
          <p className="eyebrow">Why drivers come back</p>
          <h2>A shop relationship built on trust.</h2>
        </Reveal>
        <div className="glass-value-grid">
          {values.map((value, index) => (
            <Reveal className="glass-value-card" delay={index * 55} key={value.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="glass-about-gallery">
        {[
          ["/images/toolbox/engine_luxury_01.jpg", "BMW engine components during mechanical service"],
          ["/images/toolbox/interior_01.jpg", "Clean modern vehicle interior"],
          ["/images/toolbox/luxury_shop_01.jpg", "Sports car inside a clean automotive shop"]
        ].map(([src, alt], index) => (
          <Reveal className="glass-about-gallery-card" delay={index * 45} key={src}>
            <Image src={src} alt={alt} fill sizes="(max-width: 720px) 100vw, 33vw" />
          </Reveal>
        ))}
      </section>

      <GlassStoreHours />
      <GlassContactSection variantClass="glass-contact-colorful" hideMark hideSocials />
    </main>
  );
}
