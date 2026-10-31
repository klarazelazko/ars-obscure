import Link from "next/link";
import { ArrowRight } from "lucide-react";

// slug = future URL (/themes/hell), name = label shown on the page
const themes = [
  { slug: "vanitas", name: "Vanitas" },
  { slug: "horror", name: "Horror" },
  { slug: "despair", name: "Despair" },
  { slug: "grotesque", name: "The Grotesque" },
  { slug: "abyss", name: "The Abyss" },
  { slug: "isolation", name: "Isolation" },
  { slug: "fear", name: "Fear" },
  { slug: "death", name: "Death" },
  { slug: "hell", name: "Hell" },
  { slug: "unknown", name: "The Unknown" },
];

export default function ThemesList() {
  return (
    <section className="grid grid-cols-12 gap-x-6 px-16 py-32">
      {/* Left column: heading + short description */}
      <div className="col-span-4 space-y-4">
        <p className="label-meta text-stone">Thematic taxonomy</p>
        <h2 className="font-display text-5xl font-light uppercase text-ivory">
          Thematic Chambers
        </h2>
        <p className="max-w-xs text-sm leading-7 text-taupe">
          The collection is organised by emotion and psychological structure
          rather than by chronology.
        </p>
      </div>

      {/* Right column: one row per theme, separated by hairlines */}
      <ul className="col-span-8 divide-y divide-(--border-subtle)">
        {themes.map((theme, i) => (
          <li key={theme.slug}>
            <Link
              href={`/themes/${theme.slug}`}
              className="group flex items-center justify-between px-2 py-4 transition-colors duration-200 hover:bg-ash/40"
            >
              <span className="flex items-baseline gap-6">
                {/* Row number: 01, 02, ... */}
                <span className="label-meta text-stone transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Theme name, nudges right on hover */}
                <span className="font-display text-3xl uppercase tracking-wide text-bone transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ivory">
                  {theme.name}
                </span>
              </span>
              <ArrowRight
                size={14}
                strokeWidth={1}
                className="text-stone transition-colors group-hover:text-ivory"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}