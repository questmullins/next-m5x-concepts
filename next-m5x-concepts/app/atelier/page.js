import Image from "next/image";
import { ConceptNav } from "@/components/ConceptNav";
import { HoursTable } from "@/components/HoursTable";
import { ParallaxBand } from "@/components/ParallaxBand";

const rows = [
  { day: "Mon - Thu", hours: "8:00 AM - 5:30 PM" },
  { day: "Friday", hours: "8:00 AM - 4:30 PM" },
  { day: "Saturday", hours: "Inspections only" },
  { day: "Sunday", hours: "Closed" }
];

export default function AtelierPage() {
  return (
    <main className="concept-page theme-atelier">
      <ConceptNav accent="var(--accent-copper)" />

      <section className="hero-atelier">
        <div className="atelier-card">
          <p className="eyebrow">Concept Two</p>
          <h1>Machined warmth with a more editorial rhythm.</h1>
          <p className="lead-copy">
            This page is calmer and more composed. It uses bronze glass, oversized captions,
            and a warm mechanical tone that feels closer to an atelier than a generic repair site.
          </p>
        </div>
        <div className="atelier-collage">
          <figure className="collage-large">
            <Image src="/images/bmw_f_hero.jpg" alt="BMW coupe on the road" fill sizes="(max-width: 900px) 100vw, 40vw" />
          </figure>
          <figure className="collage-small">
            <Image src="/images/bmw_h_small.jpg" alt="BMW grille detail" fill sizes="(max-width: 900px) 100vw, 20vw" />
          </figure>
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
        <div className="section-copy">
          <p className="eyebrow">Design Idea</p>
          <h2>A little more gallery, a little less garage brochure.</h2>
          <p>
            The photos do a lot of the talking here. Text blocks are shorter, the spacing is more deliberate,
            and service information feels curated instead of dumped into a card grid.
          </p>
        </div>
        <HoursTable title="Open Hours" rows={rows} compact />
      </section>

      <ParallaxBand src="/images/technician_hands_hero.jpg" alt="Technician hands working" height="medium" tone="warm">
        <div className="band-card warm">
          <p className="eyebrow">Hands-On</p>
          <h3>Bring the craft forward with close-up mechanical photography.</h3>
        </div>
      </ParallaxBand>

      <section className="atelier-story">
        <article>
          <p className="eyebrow">Use Case</p>
          <h2>Best for a more refined enthusiast brand.</h2>
        </article>
        <article>
          <p>
            This route works well if you want the site to feel premium, mature, and image-led.
            It is especially strong when paired with founder photos, process shots, and more editorial copy.
          </p>
          <a className="primary-cta copper" href="mailto:quest.mullins@gmail.com?subject=M5X%20Atelier%20Concept">
            Pick this direction
          </a>
        </article>
      </section>
    </main>
  );
}
