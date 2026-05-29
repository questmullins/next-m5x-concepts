import Link from "next/link";
import Image from "next/image";
import { ConceptNav } from "../components/ConceptNav";

const concepts = [
  {
    href: "/track",
    title: "Glass",
    copy: "Minimal, transparent, and now hero-led with a much stronger first impression and softer detail sections after the fold.",
    image: "/images/bmw_h_hero.jpg"
  },
  {
    href: "/glass-moody",
    title: "Glass Moody",
    copy: "A darker cinematic take on the glass system, built with onyx, prussian blue, coral, and amaranth depth.",
    image: "/images/bmw_b_hero.jpg"
  },
  {
    href: "/glass-colorful",
    title: "Glass Colorful",
    copy: "A brighter, more expressive take using petal pink, emerald, teal, orange, and soft white balance.",
    image: "/images/bmw_f_hero.jpg"
  },
  {
    href: "/atelier",
    title: "Showcase",
    copy: "Rounded, clean, and gallery-driven with a modern top bar, uniform thumbnails, and smooth scroll reveals.",
    image: "/images/bmw_h_small.jpg"
  },
  {
    href: "/community",
    title: "Future Shopper",
    copy: "Story-led, animated, and environmental with looping background graphics and a header that evolves as you explore.",
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
            The concept set now includes one strong hero-led Glass route, two palette-driven Glass variants,
            plus the separate Showcase and Future Shopper directions.
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
