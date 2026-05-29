import Link from "next/link";
import Image from "next/image";
import { ConceptNav } from "@/components/ConceptNav";

const concepts = [
  {
    href: "/track",
    title: "Track Glass",
    copy: "Dark, glossy, and motion-heavy with transparent telemetry panels and a horizontal service rail.",
    image: "/images/bmw_b_hero.jpg"
  },
  {
    href: "/atelier",
    title: "Machined Atelier",
    copy: "Warmer and more editorial with layered bronze surfaces, image parallax, and tighter storytelling.",
    image: "/images/bmw_f_hero.jpg"
  },
  {
    href: "/community",
    title: "Fullerton Motion",
    copy: "Brighter and more open, blending neighborhood trust with premium BMW imagery and schedule-first UX.",
    image: "/images/technician_hands_hero.jpg"
  }
];

export default function HomePage() {
  return (
    <main className="overview-page">
      <ConceptNav />
      <section className="overview-hero">
        <div>
          <p className="eyebrow">Next.js Concept Set</p>
          <h1>Three one-page directions for M5X Mechanix.</h1>
          <p className="lead-copy">
            Each page is a standalone landing page with a different philosophy,
            modern interaction patterns, and a stronger use of your photo set.
          </p>
        </div>
      </section>

      <section className="overview-grid">
        {concepts.map((concept) => (
          <Link key={concept.href} href={concept.href} className="concept-card">
            <div className="concept-card-media">
              <Image src={concept.image} alt={concept.title} fill sizes="(max-width: 900px) 100vw, 33vw" />
            </div>
            <div className="concept-card-copy">
              <p>{concept.title}</p>
              <h2>{concept.title}</h2>
              <span>{concept.copy}</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
