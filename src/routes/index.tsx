import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { IMG, SHOWCASE, PHONE, PHONE_HREF } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiger Gym Dikhan | Premium Strength Training in D.I. Khan" },
      {
        name: "description",
        content:
          "Tiger Gym Dera Ismail Khan — coached strength training, physique programs and real member transformations led by Tiger Hussain Marwat.",
      },
      { property: "og:title", content: "Tiger Gym Dikhan | Premium Strength Training" },
      {
        property: "og:description",
        content:
          "Coached lifting, written programs and proven transformations at Tiger Gym in Dera Ismail Khan.",
      },
      { property: "og:image", content: IMG.heroGym.src },
      { name: "twitter:image", content: IMG.heroGym.src },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <img
        src={IMG.heroGym.src}
        alt={IMG.heroGym.alt}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-background/85 to-transparent lg:w-2/3" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-[1440px] flex-col justify-end px-5 pt-32 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <Reveal>
          <p className="label-eyebrow">Dera Ismail Khan · Est. Strength</p>
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.9rem,9vw,7.5rem)] leading-[0.86] font-extrabold">
            Built by iron.
            <br />
            <span className="text-gold">Backed by discipline.</span>
          </h1>
        </Reveal>
        <Reveal delay={140} className="mt-9 max-w-xl">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tiger Gym is D.I. Khan&apos;s serious training floor — coached lifting, written
            programs, and members who turn up long enough to change.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/membership"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[0.7rem] font-bold tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Join Tiger Gym
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/programs"
              className="inline-flex items-center gap-3 border border-border px-8 py-4 text-[0.7rem] font-semibold tracking-[0.24em] uppercase transition-colors hover:border-gold hover:text-gold"
            >
              View programs
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 hidden border-t border-border/60 bg-background/70 backdrop-blur-sm lg:block">
        <div className="mx-auto grid max-w-[1440px] grid-cols-4 divide-x divide-border/60">
          {[
            ["Coached", "Every session on the floor"],
            ["Programmed", "Written blocks, tracked loads"],
            ["Local", "Transformations from D.I. Khan"],
            ["Open", "Six days a week"],
          ].map(([t, d]) => (
            <div key={t} className="px-8 py-5">
              <p className="font-display text-xs font-bold tracking-[0.2em] text-gold">{t}</p>
              <p className="mt-1.5 text-xs text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="border-y border-border/70 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="label-eyebrow">The Standard</p>
          <div className="mt-5 rule-gold w-24" />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-[clamp(1.9rem,4.4vw,3.6rem)] leading-[1.02] font-extrabold">
            We do not sell memberships. We build <span className="text-gold">lifters</span>.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Anyone can rent floor space. What changes a physique is a plan, a coach who watches
              your reps, and the patience to add weight week after week. That is the entire method
              here — nothing louder, nothing shorter.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              The equipment is heavy, the floor is clean, and the room is quiet enough to hear your
              own breathing on the last rep. Beginners are welcome and taught properly.
              Competitors are pushed harder.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CoachStrip() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <p className="label-eyebrow">Owner & Head Coach</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.6rem)] leading-[0.98] font-extrabold">
            Tiger Hussain
            <br />
            Marwat
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
            He trains on the same floor he coaches. Programs are written from experience under the
            bar, not copied from a feed — and he corrects your technique before he adds a single
            plate.
          </p>
          <Link
            to="/about"
            className="group mt-10 inline-flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.24em] text-gold uppercase"
          >
            Read the story
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
        <Reveal delay={120} className="relative order-1 lg:order-2">
          <div className="absolute -right-4 -bottom-4 hidden h-40 w-40 border-r border-b border-gold/50 lg:block" />
          <img
            src={IMG.trainer.src}
            alt={IMG.trainer.alt}
            loading="lazy"
            className="relative w-full border border-border/60 object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Transformation() {
  return (
    <section className="border-y border-border/70 bg-charcoal px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <p className="label-eyebrow">Transformation</p>
          <h2 className="mt-5 max-w-3xl font-display text-[clamp(1.9rem,4.4vw,3.6rem)] leading-[1.02] font-extrabold">
            Same member. Same floor. <span className="text-gold">Different man.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2">
          {[
            { ...IMG.before, tag: "Before" },
            { ...IMG.after, tag: "After" },
          ].map((s, i) => (
            <Reveal key={s.tag} delay={i * 120} as="figure" className="relative">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-[420px] w-full border border-border/60 object-cover sm:h-[560px]"
              />
              <figcaption className="absolute top-5 left-5 border border-gold/60 bg-background/80 px-4 py-2 text-[0.62rem] font-bold tracking-[0.28em] text-gold uppercase backdrop-blur-sm">
                {s.tag}
              </figcaption>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-10 max-w-2xl">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            No shortcuts and no filters — progressive overload, controlled nutrition, and months
            of showing up. This is what a full training block looks like when it is finished.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-eyebrow">Inside Tiger Gym</p>
            <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)] font-extrabold">
              The floor, the members, the work
            </h2>
          </div>
          <Link
            to="/gallery"
            className="text-[0.7rem] font-semibold tracking-[0.24em] text-gold uppercase hover:underline"
          >
            Open gallery
          </Link>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-3">
          {SHOWCASE.map((s, i) => (
            <Reveal key={s.src} delay={(i % 3) * 70} as="figure">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-56 w-full border border-border/60 object-cover grayscale-[0.35] transition-all duration-700 hover:grayscale-0 sm:h-80"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border/70">
      <img
        src={SHOWCASE[0]?.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-28 text-center sm:px-8 lg:px-12">
        <Reveal>
          <p className="label-eyebrow">Your first session</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2rem,5.5vw,4.5rem)] leading-[0.94] font-extrabold">
            Stop planning. <span className="text-gold">Start lifting.</span>
          </h2>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/membership"
              className="bg-gold px-9 py-4 text-[0.7rem] font-bold tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Become a member
            </Link>
            <a
              href={PHONE_HREF}
              className="border border-border px-9 py-4 text-[0.7rem] font-semibold tracking-[0.24em] uppercase transition-colors hover:border-gold hover:text-gold"
            >
              Call {PHONE}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div>
      <Hero />
      <Manifesto />
      <CoachStrip />
      <Transformation />
      <Showcase />
      <FinalCta />
    </div>
  );
}
