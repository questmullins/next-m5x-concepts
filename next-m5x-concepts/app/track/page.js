import Image from "next/image";
import { ConceptNav } from "../../components/ConceptNav";
import { HoursTable } from "../../components/HoursTable";
import { ParallaxBand } from "../../components/ParallaxBand";
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
    <main className="concept-page theme-track">
      <ConceptNav accent="rgba(255,255,255,.72)" inverted />

      <section className="hero-track">
        <div className="hero-track-copy">
          <p className="eyebrow">Concept One</p>
          <h1>Track glass for the modern BMW specialist.</h1>
          <p className="lead-copy">
            This direction leans dark, glossy, and precise. It treats the shop like a premium
            cockpit with layered transparency, side-scrolling services, and a sharper sense of motion.
          </p>
          <div className="hero-buttons">
            <a href="#schedule" className="primary-cta">Schedule service</a>
            <a href="#services" className="ghost-cta">View capabilities</a>
          </div>
        </div>

        <div className="glass-stack">
          <article className="glass-panel">
            <p>Specialty</p>
            <strong>BMW diagnostics, major service, enthusiast inspections</strong>
          </article>
          <article className="glass-panel">
            <p>Home Base</p>
            <strong>Fullerton, California</strong>
          </article>
        </div>
      </section>

      <ServiceRail items={serviceItems} caption="Service Rail" />

      <section className="split-layout" id="services">
        <div className="section-copy">
          <p className="eyebrow">Transparency</p>
          <h2>Information-forward without feeling cold.</h2>
          <p>
            The left side carries the message, the right side handles the shop facts,
            and the visuals stay in motion underneath. It feels more like a modern performance dashboard than a flyer.
          </p>
        </div>
        <HoursTable title="Shop Hours" rows={hours} />
      </section>

      <ParallaxBand src="/images/repairshop_hero.jpg" alt="Red BMWs in the shop" height="tall">
        <div className="band-card">
          <p className="eyebrow">Visual Layer</p>
          <h3>Parallax helps the photography carry more of the story.</h3>
        </div>
      </ParallaxBand>

      <section className="stats-band">
        <article>
          <strong>BMW</strong>
          <span>Core identity stays front and center</span>
        </article>
        <article>
          <strong>Glass</strong>
          <span>Transparent panels keep it premium</span>
        </article>
        <article>
          <strong>Motion</strong>
          <span>Horizontal rails and parallax add pace</span>
        </article>
      </section>

      <section className="schedule-panel" id="schedule">
        <div>
          <p className="eyebrow">Best Fit</p>
          <h2>Use this if you want the most high-end, future-facing feel.</h2>
        </div>
        <a className="primary-cta" href="mailto:quest.mullins@gmail.com?subject=M5X%20Track%20Glass%20Concept">
          Discuss this concept
        </a>
      </section>
    </main>
  );
}
