import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Vertical theme index, bottom right
const themes = ["Vanitas", "Horror", "Despair", "Hell", "Death"];

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
      <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-obsidian to-transparent" />
      
      {/* Main area: title block centered vertically, theme index pinned bottom right */}
      <div className="relative flex flex-1 items-center justify-between">
        {/* Title block */}
        <div>
          {/* Main title */}
          <h1 className="font-display text-7xl font-light uppercase leading-[1.05] tracking-[0.04em] text-ivory xl:text-8xl">
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
        <ul className="space-y-3 self-end border-r border-(--border-subtle) pr-4 text-right label-meta text-taupe">
          {themes.map((theme) => (
            <li key={theme}>{theme}</li>
          ))}
        </ul>
      </div>

      {/* Footer strip: scroll hint (left), location (right) */}
      <div className="relative mt-10 flex items-center justify-between label-meta text-[9px] text-taupe">
        <span className="flex items-center gap-4">
          Scroll
          <span className="h-6 w-px bg-taupe" />
        </span>
        <span>Kraków · Est. 2026</span>
      </div>
    </section>
  );
}