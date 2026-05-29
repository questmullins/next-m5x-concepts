import Image from "next/image";
import { ConceptNav } from "../../components/ConceptNav";
import { HoursTable } from "../../components/HoursTable";
import { MorphMenu } from "../../components/MorphMenu";
import { Reveal } from "../../components/Reveal";
import { ServiceRail } from "../../components/ServiceRail";

const items = [
  { title: "BMW Focus", copy: "Lead with BMW experience while staying welcoming to other makes." },
  { title: "Community", copy: "Put Fullerton trust, repeat customers, and neighborhood familiarity at the center." },
  { title: "Scheduling", copy: "Make the contact path obvious with a brighter, easier call to action." },
  { title: "Photos", copy: "Use the driveway and street-ready BMW shots for a more lifestyle-oriented tone." }
];

const hours = [
  { day: "Monday", hours: "8:30 AM - 5:30 PM" },
  { day: "Tuesday", hours: "8:30 AM - 5:30 PM" },
  { day: "Wednesday", hours: "8:30 AM - 5:30 PM" },
  { day: "Thursday", hours: "8:30 AM - 5:30 PM" },
  { day: "Friday", hours: "8:30 AM - 5:30 PM" }
];

export default function CommunityPage() {
  return (
    <main className="concept-page theme-community theme-future">
      <ConceptNav accent="var(--accent-red)" />
      <div className="future-header-shell">
        <MorphMenu />
      </div>

      <section className="community-hero future-hero" id="story">
        <div className="future-atmosphere">
          <span className="orb orb-one" />
          <span className="orb orb-two" />
          <span className="grid-wave" />
        </div>
        <Reveal className="community-copy" distance={24}>
          <p className="eyebrow">Future Shopper</p>
          <h1>A story-led route where the whole environment evolves.</h1>
          <p className="lead-copy">
            This concept is about progression. The graphics loop, the background mood shifts as you scroll,
            and the menu itself expands into place so the page feels like a guided experience.
          </p>
          <div className="hero-buttons">
            <a className="primary-cta" href="#hours">Shop hours</a>
            <a className="ghost-cta dark" href="#environment">See the environment</a>
          </div>
        </Reveal>
        <div className="community-media">
          <Reveal className="community-image main" delay={80}>
            <Image src="/images/bmw_b_hero.jpg" alt="Red BMW inside the shop" fill sizes="(max-width: 900px) 100vw, 42vw" />
          </Reveal>
          <Reveal className="community-image side" delay={170}>
            <Image src="/images/bmw_a_small.jpg" alt="Red SUV profile" fill sizes="(max-width: 900px) 100vw, 22vw" />
          </Reveal>
        </div>
      </section>

      <Reveal>
        <ServiceRail items={items} caption="What This Route Emphasizes" />
      </Reveal>

      <section className="community-hours future-shift" id="hours">
        <Reveal className="section-copy">
          <p className="eyebrow">Visit Us</p>
          <h2>Clear structure inside a more cinematic shell.</h2>
          <p>
            This route lets the site tell a story without losing usability. Hours, details, and CTA still stay clear,
            but the atmosphere around them becomes more animated and environmental.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <HoursTable title="Open This Week" rows={hours} />
        </Reveal>
      </section>

      <section className="gallery-wall future-gallery" id="environment">
        <Reveal className="gallery-card wide">
          <Image src="/images/bmw_f_small_mirror.jpg" alt="BMW by the water" fill sizes="(max-width: 900px) 100vw, 46vw" />
        </Reveal>
        <Reveal className="gallery-card">
          <Image src="/images/bmw_h_hero.jpg" alt="White BMW coupe parked in the city" fill sizes="(max-width: 900px) 100vw, 26vw" />
        </Reveal>
        <Reveal className="gallery-card copy-card" id="details">
          <p className="eyebrow">Best Fit</p>
          <h3>Choose this if the site should feel like a guided modern story, not just a landing page.</h3>
          <a className="primary-cta" href="mailto:quest.mullins@gmail.com?subject=M5X%20Future%20Shopper%20Concept">
            Choose this route
          </a>
        </Reveal>
      </section>
    </main>
  );
}
