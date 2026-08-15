import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SHOWCASE, PHONE, PHONE_HREF } from "@/lib/site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Training Programs | Tiger Gym Dikhan" },
      {
        name: "description",
        content:
          "Strength, muscle building, fat loss, beginner foundations and competition prep programs coached at Tiger Gym in Dera Ismail Khan.",
      },
      { property: "og:title", content: "Training Programs | Tiger Gym Dikhan" },
      {
        property: "og:description",
        content:
          "Coached strength and physique programs built around progressive overload at Tiger Gym D.I. Khan.",
      },
    ],
  }),
  component: Programs,
});

const PROGRAMS = [
  {
    n: "01",
    title: "Strength Foundation",
    focus: "Squat · Bench · Deadlift · Press",
    body: "Barbell-first programming for raw strength. Linear progression, tracked loads, and coaching on every heavy set so technique holds under weight.",
    points: ["3–4 sessions per week", "Weekly load progression", "Technique coaching on main lifts"],
  },
  {
    n: "02",
    title: "Muscle & Physique",
    focus: "Hypertrophy blocks",
    body: "Split training built for size and symmetry. Controlled tempo, full range, and volume that climbs across a block before a planned deload.",
    points: ["5–6 sessions per week", "Push / pull / leg structure", "Weak-point prioritisation"],
  },
  {
    n: "03",
    title: "Fat Loss & Conditioning",
    focus: "Body recomposition",
    body: "Weights stay in the plan while conditioning does the rest. Circuits, intervals and simple nutrition targets that survive a real schedule.",
    points: ["Strength kept, calories controlled", "Conditioning finishers", "Fortnightly measurements"],
  },
  {
    n: "04",
    title: "Beginner Intake",
    focus: "First 8 weeks",
    body: "For members who have never touched a barbell. Machines and cables first, then the compound lifts once movement quality is there.",
    points: ["Guided floor induction", "Movement screening", "Confidence before load"],
  },
  {
    n: "05",
    title: "Competition Prep",
    focus: "Stage-ready conditioning",
    body: "For members heading to local bodybuilding shows. Peak-week planning, posing practice, and conditioning managed week by week.",
    points: ["Posing rounds", "Condition checks", "Peak-week structure"],
  },
  {
    n: "06",
    title: "One-to-One Coaching",
    focus: "Personal training",
    body: "Every session coached from the first warm-up set to the last. Fastest route for members who want direct accountability.",
    points: ["Private session slots", "Programming written for you", "Direct progress review"],
  },
];

function Programs() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border/70 px-5 pt-36 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="label-eyebrow">Programs</p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92] font-extrabold">
              Training built in <span className="text-gold">blocks</span>, not moods
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every member at Tiger Gym trains on a plan with a start, a progression and a
              review. Pick the track that matches your goal — we will adjust it to your level on
              the floor.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-px border border-border/60 bg-border/40 md:grid-cols-2 xl:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="group flex flex-col justify-between bg-background p-8 transition-colors duration-500 hover:bg-charcoal lg:p-10"
            >
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-4xl font-extrabold text-border transition-colors duration-500 group-hover:text-gold/60">
                    {p.n}
                  </span>
                  <span className="text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
                    {p.focus}
                  </span>
                </div>
                <h2 className="mt-8 font-display text-2xl font-bold">{p.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
              <ul className="mt-8 space-y-2 border-t border-border/60 pt-6">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-3 text-[0.78rem] tracking-wide text-muted-foreground"
                  >
                    <span className="text-gold">—</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-charcoal px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="label-eyebrow">How a block runs</p>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.02] font-extrabold">
              Assess. Program. Progress. Review.
            </h2>
            <ol className="mt-10 space-y-8">
              {[
                ["Assessment", "Movement check, training history and an honest starting point."],
                ["Programming", "A written block with sets, loads and session order."],
                ["Progression", "Loads move every week while form is coached on the floor."],
                ["Review", "Numbers and photos compared, then the next block is built."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-6 border-b border-border/60 pb-6 last:border-0">
                  <span className="font-display text-sm font-bold text-gold">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/membership"
                className="bg-gold px-8 py-4 text-[0.7rem] font-bold tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
              >
                Start a program
              </Link>
              <a
                href={PHONE_HREF}
                className="border border-border px-8 py-4 text-[0.7rem] font-semibold tracking-[0.24em] uppercase transition-colors hover:border-gold hover:text-gold"
              >
                Call {PHONE}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-3">
            {SHOWCASE.slice(0, 4).map((s) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-56 w-full border border-border/60 object-cover grayscale-[0.25] transition-all duration-700 hover:grayscale-0 sm:h-72"
              />
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}