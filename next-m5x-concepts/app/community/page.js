import Image from "next/image";
import { ConceptNav } from "../../components/ConceptNav";
import { HoursTable } from "../../components/HoursTable";
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
    <main className="concept-page theme-community">
      <ConceptNav accent="var(--accent-red)" />

      <section className="community-hero">
        <div className="community-copy">
          <p className="eyebrow">Concept Three</p>
          <h1>Fullerton motion with a warmer local welcome.</h1>
          <p className="lead-copy">
            This concept is brighter, friendlier, and less dramatic. It mixes transparent UI,
            subtle parallax, and business-friendly structure for a page that still feels current.
          </p>
          <div className="hero-buttons">
            <a className="primary-cta" href="#hours">Shop hours</a>
            <a className="ghost-cta dark" href="#gallery">Photo wall</a>
          </div>
        </div>
        <div className="community-media">
          <figure className="community-image main">
            <Image src="/images/bmw_b_hero.jpg" alt="Red BMW inside the shop" fill sizes="(max-width: 900px) 100vw, 42vw" />
          </figure>
          <figure className="community-image side">
            <Image src="/images/bmw_a_small.jpg" alt="Red SUV profile" fill sizes="(max-width: 900px) 100vw, 22vw" />
          </figure>
        </div>
      </section>

      <ServiceRail items={items} caption="What This Route Emphasizes" />

      <section className="community-hours" id="hours">
        <div className="section-copy">
          <p className="eyebrow">Visit Us</p>
          <h2>Clear structure for everyday customers.</h2>
          <p>
            This version keeps premium touches, but the shape of the page feels more accessible.
            The hours table, scheduling area, and gallery blocks are easier for a broad audience to scan.
          </p>
        </div>
        <HoursTable title="Open This Week" rows={hours} />
      </section>

      <section className="gallery-wall" id="gallery">
        <article className="gallery-card wide">
          <Image src="/images/bmw_f_small_mirror.jpg" alt="BMW by the water" fill sizes="(max-width: 900px) 100vw, 46vw" />
        </article>
        <article className="gallery-card">
          <Image src="/images/bmw_h_hero.jpg" alt="White BMW coupe parked in the city" fill sizes="(max-width: 900px) 100vw, 26vw" />
        </article>
        <article className="gallery-card copy-card">
          <p className="eyebrow">Best Fit</p>
          <h3>Choose this if the site should feel premium but more approachable.</h3>
          <a className="primary-cta" href="mailto:quest.mullins@gmail.com?subject=M5X%20Community%20Concept">
            Choose this route
          </a>
        </article>
      </section>
    </main>
  );
}
