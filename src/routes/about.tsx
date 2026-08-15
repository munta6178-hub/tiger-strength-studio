import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { IMG, SHOWCASE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Head Coach | Tiger Gym Dikhan" },
      {
        name: "description",
        content:
          "The story of Tiger Gym in Dera Ismail Khan and the coaching standard set by owner and head trainer Tiger Hussain Marwat.",
      },
      { property: "og:title", content: "About & Head Coach | Tiger Gym Dikhan" },
      {
        property: "og:description",
        content: "A serious strength gym in D.I. Khan, run by a coach who trains on the floor.",
      },
      { property: "og:image", content: IMG.trainer.src },
      { name: "twitter:image", content: IMG.trainer.src },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="border-b border-border/70 px-5 pt-36 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="label-eyebrow">The Gym</p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92] font-extrabold">
              A floor with a <span className="text-gold">standard</span>
            </h1>
          </Reveal>
          <Reveal delay={100} className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tiger Gym was built in Dera Ismail Khan for people who wanted more than a place to
              pass an hour. The equipment is chosen for real lifting — racks, plates, cables and
              machines that hold up to heavy, repeated work — and the floor is kept clean, lit and
              organised so training never waits on a machine.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              What separates it is the coaching. Members are not handed a card and left alone.
              Every intake is assessed, given a written program, and corrected on the floor. That
              is why the transformations on these walls belong to local members, not stock photos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="relative">
            <div className="absolute -top-4 -left-4 hidden h-32 w-32 border-t border-l border-gold/50 lg:block" />
            <img
              src={IMG.trainer.src}
              alt={IMG.trainer.alt}
              className="relative w-full border border-border/60 object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="label-eyebrow">Owner & Head Coach</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.4vw,3.5rem)] leading-[0.98] font-extrabold">
              Tiger Hussain Marwat
            </h2>
            <div className="mt-4 rule-gold w-40" />
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Tiger Hussain Marwat runs the gym and coaches on the floor himself. He competes and
              trains alongside the members he programs for, which keeps the advice practical:
              lifts that can be loaded, diets that can be followed, and progress measured instead
              of guessed.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              His approach is simple and strict. Learn the movement, earn the load, log the work,
              and repeat it long enough for the body to have no choice but to change.
            </p>
            <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display text-xl leading-snug font-bold uppercase sm:text-2xl">
              “Discipline is the only supplement that never runs out.”
            </blockquote>
            <dl className="mt-10 grid grid-cols-3 border-t border-border/60 pt-6">
              {[
                ["Coaching", "On-floor"],
                ["Focus", "Strength & physique"],
                ["Members", "All levels"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                    {k}
                  </dt>
                  <dd className="mt-2 font-display text-sm font-bold uppercase">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/70 bg-charcoal px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="label-eyebrow">What we stand on</p>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.02] font-extrabold">
              Four rules that never move
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border/40 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Technique first", "Load is earned after the movement is clean. No exceptions."],
              ["Written plans", "Nobody trains blind. Every member knows the week ahead."],
              ["Respect the floor", "Weights racked, equipment wiped, everyone left alone to work."],
              ["Show up", "Consistency beats intensity every single month of the year."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} className="bg-charcoal p-8">
                <span className="font-display text-3xl font-extrabold text-gold/50">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-lg font-bold">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label-eyebrow">Inside the gym</p>
              <h2 className="mt-4 font-display text-[clamp(1.7rem,3.4vw,2.75rem)] font-extrabold">
                Members on the floor
              </h2>
            </div>
            <Link
              to="/gallery"
              className="text-[0.7rem] font-semibold tracking-[0.24em] text-gold uppercase hover:underline"
            >
              Full gallery
            </Link>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-3">
            {SHOWCASE.map((s, i) => (
              <Reveal key={s.src} delay={i * 50} as="figure">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-64 w-full border border-border/60 object-cover grayscale-[0.3] transition-all duration-700 hover:grayscale-0 sm:h-80"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}