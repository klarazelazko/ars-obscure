// Editorial content: one object per epoch, rendered as a column
const epochs = [
  { year: "1500", artists: ["Hieronymus Bosch", "Albrecht Dürer"], label: "The Doomsday Fable" },
  { year: "1600", artists: ["Caravaggio", "Artemisia Gentileschi"], label: "Tenebrist Severing" },
  { year: "1800", artists: ["Francisco Goya", "C. D. Friedrich"], label: "Mortal Sublimity" },
  { year: "1860", artists: ["Gustave Doré", "Charles Meryon"], label: "Graphic Damnation" },
  { year: "1890", artists: ["Edvard Munch", "Odilon Redon"], label: "Psychic Apparition" },
  { year: "1970", artists: ["Zdzisław Beksiński", "Francis Bacon"], label: "Dystopian Biomorph" },
];

export default function Timeline() {
  return (
    <section className="space-y-12 bg-charcoal px-16 py-24">
      {/* Section header: title (left) + connecting themes (right) */}
      <div className="flex items-end justify-between">
        <div className="space-y-2">
          <p className="label-meta text-stone">Temporal topography</p>
          <h2 className="font-display text-4xl font-light uppercase text-bone">
            Centuries of Darkness
          </h2>
        </div>
        <p className="label-meta text-primary">
          Connected by: Death · Time · Decay · Vanitas
        </p>
      </div>

      {/* Horizontal scroll on narrow screens, 6 columns on wide ones */}
      <div className="overflow-x-auto">
        <div className="grid min-w-[760px] grid-cols-6 gap-4">
          {epochs.map((epoch, i) => (
            <div key={epoch.year} className="space-y-2 bg-ash/30 p-4">
              {/* i + 1 turns the array index into "01", "02", ... */}
              <p className="label-meta text-stone">
                Epoch {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-display text-2xl text-bone lining-nums">{epoch.year}</p>
              <div className="text-[11px] leading-tight text-taupe">
                {epoch.artists.map((name) => (
                  <p key={name}>{name}</p>
                ))}
              </div>
              <p className="label-meta pt-1 text-primary">{epoch.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}