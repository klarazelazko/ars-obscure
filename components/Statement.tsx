export default function Statement() {
  return (
    <section className="grid grid-cols-12 gap-x-6 bg-charcoal/50 px-16 py-32">
      {/* Left column: small label + caption */}
      <div className="col-span-3 space-y-2">
        <p className="label-meta text-stone">Curatorial statement</p>
        <p className="text-xs leading-relaxed text-taupe">
          On artifact priority and structural silence
        </p>
      </div>

      {/* Right column: big quote + two-column text */}
      <div className="col-span-9 space-y-8">
        <blockquote className="font-display text-4xl font-light leading-tight text-ivory">
          “Artwork first. Interface second. A serious digital museum devoted to
          unsettling art.”
        </blockquote>

        <div className="grid grid-cols-2 gap-6 text-sm leading-7 text-taupe">
          <p>
            The museum avoids the theater of shock and algorithmic vanity. In
            these austere digital chambers, canonical works of mortal dread,
            divine retribution and cognitive estrangement are treated with
            academic gravity.
          </p>

          {/* Curatorial note box */}
          <aside className="space-y-3 bg-ash/30 p-6">
            <p className="label-meta text-primary">Curatorial note</p>
            <p className="font-display text-xl italic leading-snug text-bone">
              Every artwork is reproduced uncropped and unadorned. Negative
              space functions as architectural silence between the halls.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}