import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PHONE, PHONE_HREF, IMG } from "@/lib/site";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us in D.I. Khan | Tiger Gym Dikhan" },
      {
        name: "description",
        content:
          "Location, opening hours and contact details for Tiger Gym in Dera Ismail Khan. Walk in for a floor tour or call ahead.",
      },
      { property: "og:title", content: "Visit Tiger Gym Dikhan" },
      {
        property: "og:description",
        content: "Find Tiger Gym in Dera Ismail Khan — hours, location and contact.",
      },
      { property: "og:image", content: IMG.heroGym.src },
      { name: "twitter:image", content: IMG.heroGym.src },
    ],
  }),
  component: Visit,
});

const MAP_QUERY = "Tiger+Gym+Dera+Ismail+Khan";

function Visit() {
  return (
    <div>
      <section className="relative border-b border-border/70">
        <img
          src={IMG.heroGym.src}
          alt={IMG.heroGym.alt}
          className="h-[46vh] min-h-[320px] w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <p className="label-eyebrow">Visit Us</p>
            <h1 className="mt-4 font-display text-[clamp(2.3rem,6.5vw,5rem)] leading-[0.92] font-extrabold">
              Dera Ismail <span className="text-gold">Khan</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-10">
            {[
              {
                icon: MapPin,
                title: "Address",
                lines: ["Tiger Gym", "Dera Ismail Khan, Khyber Pakhtunkhwa, Pakistan"],
              },
              {
                icon: Phone,
                title: "Phone",
                lines: [PHONE],
                href: PHONE_HREF,
              },
              {
                icon: Clock,
                title: "Hours",
                lines: [
                  "Monday – Saturday: morning & evening sessions",
                  "Friday: shortened evening session",
                  "Sunday: closed",
                ],
              },
            ].map((b) => (
              <div key={b.title} className="border-b border-border/60 pb-8 last:border-0">
                <div className="flex items-center gap-3">
                  <b.icon className="size-4 text-gold" aria-hidden="true" />
                  <h2 className="font-display text-sm font-bold tracking-[0.18em]">{b.title}</h2>
                </div>
                <div className="mt-4 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                  {b.lines.map((l) =>
                    b.href ? (
                      <a key={l} href={b.href} className="block hover:text-gold">
                        {l}
                      </a>
                    ) : (
                      <p key={l}>{l}</p>
                    ),
                  )}
                </div>
              </div>
            ))}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-gold/60 px-7 py-4 text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              <Navigation className="size-4" aria-hidden="true" />
              Get directions
            </a>
          </Reveal>

          <Reveal delay={120} className="min-h-[420px] border border-border/60">
            <iframe
              title="Map showing Tiger Gym in Dera Ismail Khan"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              loading="lazy"
              className="h-full min-h-[420px] w-full grayscale-[0.6]"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border/70 bg-charcoal px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-8">
          <h2 className="max-w-xl font-display text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.05] font-extrabold">
            Walk in for a floor tour — no appointment needed
          </h2>
          <a
            href={PHONE_HREF}
            className="bg-gold px-9 py-4 text-[0.7rem] font-bold tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Call the gym
          </a>
        </div>
      </section>
    </div>
  );
}