import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PHONE, PHONE_HREF, IMG } from "@/lib/site";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership & Enquiry | Tiger Gym Dikhan" },
      {
        name: "description",
        content:
          "Membership options at Tiger Gym Dera Ismail Khan — monthly, quarterly and personal coaching. Send an enquiry or call the gym directly.",
      },
      { property: "og:title", content: "Membership & Enquiry | Tiger Gym Dikhan" },
      {
        property: "og:description",
        content: "Join Tiger Gym D.I. Khan — coached strength training for every level.",
      },
      { property: "og:image", content: IMG.heroGym.src },
      { name: "twitter:image", content: IMG.heroGym.src },
    ],
  }),
  component: Membership,
});

const TIERS = [
  {
    name: "Monthly",
    tag: "Full floor access",
    perks: [
      "Unlimited access in opening hours",
      "Written training program",
      "Floor coaching on main lifts",
      "Progress check every four weeks",
    ],
  },
  {
    name: "Quarterly",
    tag: "Best for real change",
    featured: true,
    perks: [
      "Everything in Monthly",
      "Three-block periodised plan",
      "Nutrition targets and review",
      "Priority slots at peak hours",
      "Photo and measurement tracking",
    ],
  },
  {
    name: "Personal Coaching",
    tag: "One-to-one",
    perks: [
      "Every session coached directly",
      "Program written for your goal",
      "Posing or competition prep",
      "Direct contact with the coach",
    ],
  },
];

function EnquiryForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {[
        { id: "name", label: "Full name", type: "text", placeholder: "Your name" },
        { id: "phone", label: "Phone", type: "tel", placeholder: "03xx xxxxxxx" },
      ].map((f) => (
        <div key={f.id}>
          <label
            htmlFor={f.id}
            className="block text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase"
          >
            {f.label}
          </label>
          <input
            id={f.id}
            name={f.id}
            type={f.type}
            required
            placeholder={f.placeholder}
            className="mt-3 w-full border border-input bg-transparent px-4 py-3.5 text-sm placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
          />
        </div>
      ))}
      <div>
        <label
          htmlFor="goal"
          className="block text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase"
        >
          Goal
        </label>
        <select
          id="goal"
          name="goal"
          className="mt-3 w-full border border-input bg-background px-4 py-3.5 text-sm focus:border-gold focus:outline-none"
        >
          <option>Build strength</option>
          <option>Build muscle</option>
          <option>Lose fat</option>
          <option>Beginner intake</option>
          <option>Competition prep</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your training history and preferred timing."
          className="mt-3 w-full border border-input bg-transparent px-4 py-3.5 text-sm placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gold py-4 text-[0.7rem] font-bold tracking-[0.24em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
      >
        Send enquiry
      </button>
      <p aria-live="polite" className="min-h-5 text-xs text-gold">
        {sent
          ? `Thanks — your enquiry is noted. For the fastest reply, call ${PHONE}.`
          : ""}
      </p>
    </form>
  );
}

function Membership() {
  return (
    <div>
      <section className="border-b border-border/70 px-5 pt-36 pb-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <Reveal>
            <p className="label-eyebrow">Membership</p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.92] font-extrabold">
              Join the <span className="text-gold">floor</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Every membership includes coaching and a written plan. Current rates are confirmed
              at reception or over the phone — call {PHONE} and we will walk you through the
              options.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-6 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 80}
              className={
                t.featured
                  ? "flex flex-col border border-gold/60 bg-charcoal p-8 lg:p-10"
                  : "flex flex-col border border-border/60 p-8 lg:p-10"
              }
            >
              <div className="flex items-center justify-between">
                <h2 className="font-display text-2xl font-extrabold">{t.name}</h2>
                {t.featured && (
                  <span className="border border-gold/60 px-3 py-1 text-[0.58rem] tracking-[0.2em] text-gold uppercase">
                    Popular
                  </span>
                )}
              </div>
              <p className="mt-3 text-[0.68rem] tracking-[0.22em] text-muted-foreground uppercase">
                {t.tag}
              </p>
              <ul className="mt-8 flex-1 space-y-4">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={PHONE_HREF}
                className={
                  t.featured
                    ? "mt-10 block bg-gold py-4 text-center text-[0.7rem] font-bold tracking-[0.24em] text-primary-foreground uppercase"
                    : "mt-10 block border border-border py-4 text-center text-[0.7rem] font-semibold tracking-[0.24em] uppercase transition-colors hover:border-gold hover:text-gold"
                }
              >
                Ask about {t.name}
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-charcoal px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <p className="label-eyebrow">Enquiry</p>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.02] font-extrabold">
              Tell us your goal
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Send the form and we will discuss your starting point, the right program, and the
              timings that suit you. Prefer to talk now? Call the gym.
            </p>
            <img
              src={IMG.heroGym.src}
              alt={IMG.heroGym.alt}
              loading="lazy"
              className="mt-10 hidden w-full border border-border/60 object-cover lg:block"
            />
          </Reveal>
          <Reveal delay={120} className="border border-border/60 bg-background p-7 sm:p-9">
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}