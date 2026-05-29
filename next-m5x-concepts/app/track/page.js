import Image from "next/image";
import { ConceptNav } from "../../components/ConceptNav";
import { HoursTable } from "../../components/HoursTable";
import { ParallaxBand } from "../../components/ParallaxBand";
import { Reveal } from "../../components/Reveal";
import { ServiceRail } from "../../components/ServiceRail";

const serviceItems = [
  { title: "Diagnostics", copy: "Track down drivability issues with cleaner reporting and sharper communication." },
  { title: "Cooling", copy: "Cooling systems, leaks, pressure issues, and BMW failure-point maintenance." },
  { title: "Suspension", copy: "Handling, stance, bushings, steering feel, and road-ready refresh work." },
  { title: "Pre-Purchase", copy: "Inspections that help enthusiasts buy with better information." },
  { title: "Major Service", copy: "Bigger jobs, major intervals, and preventative work with a premium presentation." }
];

const hours = [
  { day: "Monday", hours: "8:00 AM - 5:30 PM" },
  { day: "Tuesday", hours: "8:00 AM - 5:30 PM" },
  { day: "Wednesday", hours: "8:00 AM - 5:30 PM" },
  { day: "Thursday", hours: "8:00 AM - 5:30 PM" },
  { day: "Friday", hours: "8:00 AM - 5:30 PM" },
  { day: "Saturday", hours: "By appointment" }
];

export default function TrackPage() {
  return (
    <main className="concept-page theme-track theme-glass">
      <ConceptNav accent="rgba(255,255,255,.72)" inverted />

      <section className="hero-track">
        <Reveal className="hero-track-copy" distance={34}>
          <p className="eyebrow">Glass</p>
          <h1>Track glass for the modern BMW specialist.</h1>
          <p className="lead-copy">
            A transparency-first concept with floating panes, short reveal animations, and a scrolling experience
            that keeps feeding the user images, facts, and motion without dropping into flat blocks.
          </p>
          <div className="hero-buttons">
            <a href="#schedule" className="primary-cta">Schedule service</a>
            <a href="#services" className="ghost-cta">View capabilities</a>
          </div>
        </Reveal>

        <div className="glass-stack">
          <Reveal delay={90}>
            <article className="glass-panel">
              <p>Experience</p>
              <strong>Text panels, image swaps, and layered windows keep the whole page active.</strong>
            </article>
          </Reveal>
          <Reveal delay={160}>
            <article className="glass-panel">
              <p>Specialty</p>
              <strong>BMW diagnostics, major service, enthusiast inspections</strong>
            </article>
          </Reveal>
          <Reveal delay={240}>
            <article className="glass-panel">
              <p>Home Base</p>
              <strong>Fullerton, California</strong>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="floating-image-rack">
        <Reveal className="floating-shot left" delay={60}>
          <Image src="/images/repairshop_small.jpg" alt="Shop detail" fill sizes="(max-width: 900px) 100vw, 18vw" />
        </Reveal>
        <Reveal className="floating-shot center" delay={140}>
          <Image src="/images/bmw_h_small.jpg" alt="BMW badge close-up" fill sizes="(max-width: 900px) 100vw, 20vw" />
        </Reveal>
        <Reveal className="floating-shot right" delay={220}>
          <Image src="/images/technician_hands_small.jpg" alt="Technician hands" fill sizes="(max-width: 900px) 100vw, 18vw" />
        </Reveal>
      </section>

      <Reveal>
        <ServiceRail items={serviceItems} caption="Service Rail" />
      </Reveal>

      <section className="split-layout glass-split" id="services">
        <Reveal className="section-copy" distance={30}>
          <p className="eyebrow">Transparency</p>
          <h2>Information-forward without feeling cold.</h2>
          <p>
            Panels come in as you scroll, details sit on floating glass, and the page keeps moving visually
            the way a Novu-style product site does, but aimed at a performance shop.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <HoursTable title="Shop Hours" rows={hours} />
        </Reveal>
      </section>

      <ParallaxBand src="/images/repairshop_hero.jpg" alt="Red BMWs in the shop" height="tall">
        <Reveal className="band-card" distance={18}>
          <p className="eyebrow">Visual Layer</p>
          <h3>Each section should arrive like a new pane sliding into view.</h3>
        </Reveal>
      </ParallaxBand>

      <section className="stats-band">
        <Reveal>
          <article>
            <strong>Glass</strong>
            <span>Overlapping transparent panels and card stacks</span>
          </article>
        </Reveal>
        <Reveal delay={90}>
          <article>
            <strong>Scroll</strong>
            <span>Short reveal timing keeps the page in motion</span>
          </article>
        </Reveal>
        <Reveal delay={180}>
          <article>
            <strong>Feed</strong>
            <span>Photos and text keep arriving throughout the experience</span>
          </article>
        </Reveal>
      </section>

      <section className="schedule-panel" id="schedule">
        <Reveal className="schedule-panel-inner">
          <div>
            <p className="eyebrow">Best Fit</p>
            <h2>Use this if you want the most layered and interactive direction.</h2>
          </div>
          <a className="primary-cta" href="mailto:quest.mullins@gmail.com?subject=M5X%20Glass%20Concept">
            Discuss this concept
          </a>
        </Reveal>
      </section>
    </main>
  );
}
