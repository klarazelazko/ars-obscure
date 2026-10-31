import Image from "next/image";
import Link from "next/link";

export default function RoomFeature() {
  return (
    <section className="px-16 py-32">
      {/* Section header: label + room title */}
      <div className="space-y-2">
        <p className="label-meta text-stone">Featured room</p>
        <h2 className="font-display text-5xl font-light uppercase text-ivory">
          Room II: Hell
        </h2>
      </div>

      {/* Banner: background image + scrim + text block */}
      <div className="relative mt-12 min-h-[28rem] overflow-hidden border border-(--border-subtle)">
        <Image
          src="/images/artworks/hell.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-r from-obsidian/85 to-obsidian/20" />

        {/* Text block, pinned to the bottom left of the banner */}
        <div className="relative flex min-h-[28rem] max-w-xl flex-col justify-end gap-6 p-12">
          <p className="font-display text-3xl italic text-ivory">
            “Abandon hope, all ye who enter here.”
          </p>
          <p className="text-sm leading-7 text-taupe">
            This room gathers works that depict hell, not only as a place but as
            a state of mind: a descent into suffering, punishment and the loss
            of humanity.
          </p>

          {/* Accent button (blood red, darker on hover) */}
          <Link
            href="/rooms/hell"
            className="w-fit border border-blood bg-blood px-6 py-3 text-[11px] uppercase tracking-[0.12em] text-ivory transition-colors duration-300 hover:bg-burgundy"
          >
            Explore the room
          </Link>
        </div>
      </div>
    </section>
  );
}