import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Lightbox } from "@/components/Lightbox";
import { GALLERY, IMG } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Tiger Gym Dikhan" },
      {
        name: "description",
        content:
          "Photographs of the Tiger Gym training floor, members, and competition nights in Dera Ismail Khan.",
      },
      { property: "og:title", content: "Gallery | Tiger Gym Dikhan" },
      {
        property: "og:description",
        content: "Inside Tiger Gym D.I. Khan — the floor, the members, the work.",
      },
      { property: "og:image", content: IMG.heroGym.src },
      { name: "twitter:image", content: IMG.heroGym.src },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div>
      <section className="border-b border-border/70 px-5 pt-36 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="label-eyebrow">Gallery</p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92] font-extrabold">
              The <span className="text-gold">record</span> of the work
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Real photographs from the Tiger Gym floor and from local competition nights. Tap any
              frame to view it full size.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-3 lg:grid-cols-3">
          {GALLERY.map((s, i) => (
            <Reveal
              key={s.src + i}
              delay={(i % 3) * 60}
              className={i % 5 === 0 ? "lg:col-span-2" : ""}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block aspect-[4/5] w-full overflow-hidden border border-border/60 focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none lg:aspect-auto lg:h-[460px]"
                aria-label={`View photo: ${s.alt}`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[0.3] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <span className="absolute inset-0 bg-background/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox shots={GALLERY} index={index} onClose={() => setIndex(null)} onIndex={setIndex} />
    </div>
  );
}