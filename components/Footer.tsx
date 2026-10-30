import Link from "next/link";

// Footer navigation, same destinations as the header
const halls = [
  { href: "/collection", label: "Permanent Collection" },
  { href: "/themes", label: "Themes" },
  { href: "/rooms", label: "Rooms" },
  { href: "/archive", label: "Archive" },
];

export default function Footer() {
  return (
    <footer className="border-t border-(--border-subtle) bg-charcoal px-16 py-12">
      <div className="grid grid-cols-12 gap-x-6">
        {/* Brand + short description */}
        <div className="col-span-6 space-y-4">
          <p className="font-display text-xl uppercase tracking-[0.15em] text-bone">
            Ars Obscura Collection
          </p>
          <p className="max-w-md text-[11px] leading-relaxed text-stone">
            A digital archive of dark arts, history, and the stories we can’t
            forget.
          </p>
        </div>

        {/* Navigation column */}
        <div className="col-span-3 space-y-3">
          <p className="label-meta text-stone">Halls</p>
          <ul className="space-y-2">
            {halls.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[11px] text-bone transition-colors hover:text-ivory"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Rights column */}
        <div className="col-span-3 space-y-3">
          <p className="label-meta text-stone">Rights</p>
          <Link
            href="/about"
            className="text-[11px] uppercase tracking-[0.12em] text-taupe transition-colors hover:text-bone"
          >
            Colophon and rights →
          </Link>
        </div>
      </div>

      {/* Bottom strip: copyright + motto */}
      <div className="mt-12 flex justify-between border-t border-(--border-subtle) pt-4 text-stone">
        <span className="label-meta">© 2026 Ars Obscura Collection</span>
        <span className="label-meta">Silence · Memory · Dissolution</span>
      </div>
    </footer>
  );
}