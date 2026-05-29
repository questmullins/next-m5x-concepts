import Image from "next/image";
import { ConceptNav } from "../../components/ConceptNav";
import { HoursTable } from "../../components/HoursTable";
import { ParallaxBand } from "../../components/ParallaxBand";
import { Reveal } from "../../components/Reveal";

const rows = [
  { day: "Mon - Thu", hours: "8:00 AM - 5:30 PM" },
  { day: "Friday", hours: "8:00 AM - 4:30 PM" },
  { day: "Saturday", hours: "Inspections only" },
  { day: "Sunday", hours: "Closed" }
];

export default function AtelierPage() {
  return (
    <main className="concept-page theme-atelier theme-showcase">
      <ConceptNav accent="var(--accent-copper)" />

      <section className="hero-atelier">
        <Reveal className="atelier-card" distance={24}>
          <p className="eyebrow">Showcase</p>
          <h1>A gallery-like route with cleaner product-style browsing.</h1>
          <p className="lead-copy">
            This direction turns the shop into a clean showcase. Rounded image tiles, a minimal top bar,
            consistent spacing, and elegant reveal timing make it feel more inspectable and design-forward.
          </p>
        </Reveal>
        <div className="atelier-collage">
          <Reveal className="collage-large" delay={90}>
            <Image src="/images/bmw_f_hero.jpg" alt="BMW coupe on the road" fill sizes="(max-width: 900px) 100vw, 40vw" />
          </Reveal>
          <Reveal className="collage-small" delay={180}>
            <Image src="/images/bmw_h_small.jpg" alt="BMW grille detail" fill sizes="(max-width: 900px) 100vw, 20vw" />
          </Reveal>
        </div>
      </section>

      <section className="atelier-ribbon">
        <div className="ribbon-track">
          <span>BMW service</span>
          <span>Cooling systems</span>
          <span>Inspections</span>
          <span>Ride quality</span>
          <span>Major maintenance</span>
          <span>Fullerton</span>
          <span>Diagnostics</span>
        </div>
      </section>

      <section className="atelier-columns">
        <Reveal className="section-copy">
          <p className="eyebrow">Design Idea</p>
          <h2>A little more gallery, a little less garage brochure.</h2>
          <p>
            Think of this as the cleaner, more inspectable route. Uniform rounded media blocks,
            neat thumbnails, and subtle reveals make it feel like a professional design portfolio.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <HoursTable title="Open Hours" rows={rows} compact />
        </Reveal>
      </section>

      <section className="showcase-grid">
        {[
          "/images/bmw_f_small_mirror.jpg",
          "/images/bmw_a_small.jpg",
          "/images/bmw_h_hero.jpg",
          "/images/repairshop_small.jpg",
          "/images/technician_hands_small.jpg",
          "/images/bmw_h_small.jpg"
        ].map((src, index) => (
          <Reveal key={src} className="showcase-tile" delay={index * 70}>
            <Image src={src} alt="M5X showcase item" fill sizes="(max-width: 900px) 100vw, 25vw" />
          </Reveal>
        ))}
      </section>

      <ParallaxBand src="/images/technician_hands_hero.jpg" alt="Technician hands working" height="medium" tone="warm">
        <Reveal className="band-card warm" distance={18}>
          <p className="eyebrow">Hands-On</p>
          <h3>Rounded visuals and short animations keep the whole site crisp and inspectable.</h3>
        </Reveal>
      </ParallaxBand>

      <section className="atelier-story">
        <Reveal>
          <article>
            <p className="eyebrow">Use Case</p>
            <h2>Best for a design-led, cleaner premium vibe.</h2>
          </article>
        </Reveal>
        <Reveal>
          <article>
          <p>
            This route is strongest when the customer should browse, inspect, and feel guided by the presentation.
            It’s the most portfolio-like of the three.
          </p>
          <a className="primary-cta copper" href="mailto:quest.mullins@gmail.com?subject=M5X%20Showcase%20Concept">
            Pick this direction
          </a>
          </article>
        </Reveal>
      </section>
    </main>
  );
}
