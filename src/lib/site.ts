import hero from "@/assets/hero.jpg.asset.json";
import trainer from "@/assets/trainer.jpg.asset.json";
import before from "@/assets/c2_3.jpg.asset.json";
import after from "@/assets/c2_4.jpg.asset.json";
import c2_1 from "@/assets/c2_1.jpg.asset.json";
import c2_6 from "@/assets/c2_6.jpg.asset.json";
import c2_7 from "@/assets/c2_7.jpg.asset.json";
import c2_9 from "@/assets/c2_9.jpg.asset.json";
import c1_2 from "@/assets/c1_2.jpg.asset.json";
import c1_3 from "@/assets/c1_3.jpg.asset.json";
import c1_5 from "@/assets/c1_5.jpg.asset.json";
import c1_7 from "@/assets/c1_7.jpg.asset.json";

import c1_9 from "@/assets/c1_9.jpg.asset.json";
import c1_11 from "@/assets/c1_11.jpg.asset.json";
import c1_13 from "@/assets/c1_13.jpg.asset.json";
import t2 from "@/assets/transformation-2.jpg.asset.json";
import t3 from "@/assets/transformation-3.jpg.asset.json";

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

export const IMG = {
  heroGym: { src: hero.url, alt: "Training floor at Tiger Gym D.I. Khan with strength machines and a heavy bag" },
  trainer: {
    src: trainer.url,
    alt: "Tiger Hussain Marwat, Owner and Coach of Tiger Gym D.I. Khan, on the gym floor",
  },
  before: { src: before.url, alt: "Member before starting training at Tiger Gym D.I. Khan" },
  after: { src: after.url, alt: "The same member after consistent training at Tiger Gym D.I. Khan" },
};

export const EXTRA_TRANSFORMATIONS: { src: string; alt: string; tag: string }[] = [
  {
    src: t2.url,
    alt: "Back double biceps before and after transformation of a Tiger Gym member",
    tag: "Before / After",
  },
  {
    src: t3.url,
    alt: "Front pose before and after transformation of a Tiger Gym member",
    tag: "Before / After",
  },
];

export type Shot = { src: string; alt: string };

export const SHOWCASE: Shot[] = [
  { src: c1_7.url, alt: "Conditioned athlete holding a front double biceps pose at Tiger Gym" },
  { src: c2_6.url, alt: "Member posing after a strength training block at Tiger Gym" },
  { src: c1_2.url, alt: "Athlete posing on the Tiger Gym training floor" },
  { src: c2_7.url, alt: "Side pose showing conditioning built through consistent training" },
  { src: c1_13.url, alt: "Three training partners posing together at Tiger Gym" },
  { src: c1_9.url, alt: "Competitor prepared at Tiger Gym D.I. Khan" },
];

export const GALLERY: Shot[] = [
  { src: hero.url, alt: "Wide view of the Tiger Gym D.I. Khan training floor" },
  { src: c1_7.url, alt: "Athlete holding a front double biceps pose at Tiger Gym" },
  { src: c2_1.url, alt: "Member flexing after a training session at Tiger Gym" },
  { src: c1_5.url, alt: "Member standing on the Tiger Gym training floor" },
  { src: c2_9.url, alt: "Group of members posing back-to-camera at Tiger Gym" },
  { src: c1_3.url, alt: "Two training partners on the Tiger Gym floor" },
  { src: c2_6.url, alt: "Member posing after a strength training block" },
  { src: c1_11.url, alt: "Members at a local bodybuilding event" },
  { src: c1_13.url, alt: "Training partners posing together at Tiger Gym" },
  { src: c2_7.url, alt: "Side pose showing conditioning built at Tiger Gym" },
  { src: c1_9.url, alt: "Competitor prepared at Tiger Gym D.I. Khan" },
];