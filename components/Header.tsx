import Link from "next/link";
import { Search, Menu } from "lucide-react";

const links = [
  { href: "/collection", label: "Collection" },
  { href: "/themes", label: "Themes" },
  { href: "/rooms", label: "Rooms" },
  { href: "/archive", label: "Archive" },
];

export default function Header() {
  return (
    // absolute: overlays the hero instead of pushing content down
    <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-16 py-8">
      <Link
        href="/"
        className="font-display text-sm uppercase tracking-[0.08em] text-ivory"
      >
        Ars Obscura 
        <br />
        Collection
      </Link>

      <nav className="flex items-center gap-10">
        <ul className="flex gap-10">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[10px] uppercase tracking-[0.12em] text-bone/70 transition-colors duration-300 hover:text-ivory"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button aria-label="Search" className="text-bone/70 transition-colors duration-300 hover:text-ivory">
          <Search size={16} strokeWidth={1} />
        </button>
        <button aria-label="Menu" className="text-bone/70 transition-colors duration-300 hover:text-ivory">
          <Menu size={16} strokeWidth={1} />
        </button>
      </nav>
    </header>
  );
}