export const PHONE = "+92 305 9562887";
export const PHONE_HREF = "tel:+923059562887";
export const NAV = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/programs" },
  { label: "About", to: "/about" },
  { label: "Membership", to: "/membership" },
  { label: "Gallery", to: "/gallery" },
  { label: "Visit Us", to: "/visit" },
] as const;

const hero = "/images/hero.jpg";
const trainer = "/images/trainer.jpg";
const before = "/images/c2_3.jpg";
const after = "/images/c2_4.jpg";
const c2_1 = "/images/c2_1.jpg";
const c2_6 = "/images/c2_6.jpg";
const c2_7 = "/images/c2_7.jpg";
const c2_9 = "/images/c2_9.jpg";
const c1_2 = "/images/c1_2.jpg";
const c1_3 = "/images/c1_3.jpg";
const c1_5 = "/images/c1_5.jpg";
const c1_7 = "/images/c1_7.jpg";
const c1_9 = "/images/c1_9.jpg";
const c1_11 = "/images/c1_11.jpg";
const c1_13 = "/images/c1_13.jpg";
const t2 = "/images/transformation-2.jpg";
const t3 = "/images/transformation-3.jpg";

export const IMG = {
  heroGym: { src: hero, alt: "Training floor at Tiger Gym D.I. Khan with strength machines and a heavy bag" },
  trainer: {
    src: trainer,
    alt: "Tiger Hussain Marwat, Owner and Coach of Tiger Gym D.I. Khan, on the gym floor",
  },
  before: { src: before, alt: "Member before starting training at Tiger Gym D.I. Khan" },
  after: { src: after, alt: "The same member after consistent training at Tiger Gym D.I. Khan" },
};

export const EXTRA_TRANSFORMATIONS: { src: string; alt: string; tag: string }[] = [
  {
    src: t2,
    alt: "Back double biceps before and after transformation of a Tiger Gym member",
    tag: "Before / After",
  },
  {
    src: t3,
    alt: "Front pose before and after transformation of a Tiger Gym member",
    tag: "Before / After",
  },
];

export type Shot = { src: string; alt: string };

export const SHOWCASE: Shot[] = [
  { src: c1_7, alt: "Conditioned athlete holding a front double biceps pose at Tiger Gym" },
  { src: c2_6, alt: "Member posing after a strength training block at Tiger Gym" },
  { src: c1_2, alt: "Athlete posing on the Tiger Gym training floor" },
  { src: c2_7, alt: "Side pose showing conditioning built through consistent training" },
  { src: c1_13, alt: "Three training partners posing together at Tiger Gym" },
  { src: c1_9, alt: "Competitor prepared at Tiger Gym D.I. Khan" },
];

export const GALLERY: Shot[] = [
  { src: hero, alt: "Wide view of the Tiger Gym D.I. Khan training floor" },
  { src: c1_7, alt: "Athlete holding a front double biceps pose at Tiger Gym" },
  { src: c2_1, alt: "Member flexing after a training session at Tiger Gym" },
  { src: c1_5, alt: "Member standing on the Tiger Gym training floor" },
  { src: c2_9, alt: "Group of members posing back-to-camera at Tiger Gym" },
  { src: c1_3, alt: "Two training partners on the Tiger Gym floor" },
  { src: c2_6, alt: "Member posing after a strength training block" },
  { src: c1_11, alt: "Members at a local bodybuilding event" },
  { src: c1_13, alt: "Training partners posing together at Tiger Gym" },
  { src: c2_7, alt: "Side pose showing conditioning built at Tiger Gym" },
  { src: c1_9, alt: "Competitor prepared at Tiger Gym D.I. Khan" },
];
