import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Vertical theme index, bottom right
const themes = ["Vanitas", "Horror", "Despair", "Hell", "Death"];

// Featured works row: add an object here to add a card
const featured = [
  {
    kind: "Art",
    title: "Saturn Devouring His Son",
    meta: "Francisco Goya, 1819-1823",
    href: "/artwork/saturn-devouring-his-son",
    image: "/images/artworks/saturn.jpg",
    position: "object-top",
  },
  {
    kind: "Themes",
    title: "The inferno & its visions",
    meta: "Hell · Death · Despair",
    href: "/themes/hell",
    image: "/images/artworks/inferno.jpg",
    position: "object-center",
  },
  {
    kind: "Collection",
    title: "Vanitas",
    meta: "Mortality · Passage · Silence",
    href: "/themes/vanitas",
    image: "/images/artworks/vanitas.jpg",
    position: "object-[50%_80%]",
  },
  {
    kind: "Room",
    title: "Fear",
    meta: "Anxiety · Unease",
    href: "/themes/fear",
    image: "/images/artworks/hell.jpg",
    position: "object-center",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden px-16 pb-8 pt-32">
      {/* Background artwork + left-to-right scrim for text legibility */}
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-r from-obsidian/85 to-obsidian/20" />

      {/* Top area: title block (left) + theme index (right) */}
      <div className="relative flex flex-1 justify-between">
        {/* Title block */}
        <div>
        
          {/* Main title */}
          <h1 className="mt-8 font-display text-7xl font-light uppercase leading-[1.05] tracking-[0.04em] text-ivory xl:text-8xl">
            ARS OBSCURA
          </h1>

          {/* Divider line */}
          <div className="mt-10 h-px w-20 bg-bone/60" />

          {/* Subtitle */}
          <p className="mt-8 font-display text-lg italic leading-relaxed text-bone/80">
            A digital museum of dark arts
          </p>

          {/* Primary CTA */}
          <Link
            href="/collection"
            className="mt-10 inline-flex w-fit items-center gap-4 border border-bone/60 px-8 py-3 text-[11px] uppercase tracking-[0.18em] text-bone transition-colors duration-300 hover:bg-bone hover:text-obsidian"
          >
            Enter
            <ArrowRight size={14} strokeWidth={1} />
          </Link>
        </div>

        {/* Theme index */}
        <ul className="space-y-3 self-end border-r border-(--border-subtle) pr-4 text-right label-meta text-stone">
          {themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </div>

      {/* Featured works row */}
      <div className="relative mt-12">
        {/* Row heading link */}
        <Link
          href="/collection"
          className="inline-flex items-center gap-4 label-meta text-bone transition-colors hover:text-ivory"
        >
          Featured works
          <ArrowRight size={14} strokeWidth={1} />
        </Link>

        {/* 4 equal columns for cards + 1 fixed column for the side quote */}
        <div className="mt-6 grid grid-cols-[repeat(4,1fr)_14rem] gap-6">
          {/* Cards, one per item in `featured` */}
          {featured.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative block h-64 overflow-hidden border border-(--border-subtle) transition-colors duration-300 hover:border-(--border-hover)"
            >
              {/* Card image, slow zoom on hover */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-600 group-hover:scale-[1.02]"
              />
              {/* Bottom scrim so the text stays readable */}
              <div className="absolute inset-0 bg-linear-to-b from-obsidian/0 via-obsidian/30 to-obsidian/95" />

              {/* Card text: kind, title, meta + arrow */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div className="space-y-2">
                  <p className="label-meta text-[9px] text-taupe">{item.kind}</p>
                  <p className="font-display text-xl uppercase leading-tight text-ivory">
                    {item.title}
                  </p>
                  <p className="label-meta text-[9px] text-stone">{item.meta}</p>
                </div>
                <ArrowRight size={14} strokeWidth={1} className="shrink-0 text-bone" />
              </div>
            </Link>
          ))}

          {/* Side quote + link */}
          <aside className="flex flex-col justify-between border-l border-(--border-subtle) pl-8">
            <div className="space-y-6 font-display italic leading-relaxed text-bone/80">
              <p>
                Not all beauty
                <br />
                is peaceful.
              </p>
              <p>
                Step inside
                <br />
                the stories
                <br />
                that still whisper.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-px w-10 bg-bone/60" />
              <Link
                href="/collection"
                className="inline-flex items-center gap-3 label-meta text-[9px] text-bone transition-colors hover:text-ivory"
              >
                Explore the museum
                <ArrowRight size={14} strokeWidth={1} />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer strip: scroll hint (left), location (right) */}
      <div className="relative mt-10 flex items-center justify-between label-meta text-[9px] text-stone">
        <span className="flex items-center gap-4">
          Scroll
          <span className="h-6 w-px bg-stone" />
        </span>
        <span>Kraków · Est. 2026</span>
      </div>
    </section>
  );
}