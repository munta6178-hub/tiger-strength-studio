import heroAsset from "@/assets/hero.jpg.asset.json";
import trainerAsset from "@/assets/trainer.jpg.asset.json";
import c1_2Asset from "@/assets/c1_2.jpg.asset.json";
import c1_3Asset from "@/assets/c1_3.jpg.asset.json";
import c1_5Asset from "@/assets/c1_5.jpg.asset.json";
import c1_7Asset from "@/assets/c1_7.jpg.asset.json";
import c1_9Asset from "@/assets/c1_9.jpg.asset.json";
import c1_11Asset from "@/assets/c1_11.jpg.asset.json";
import c1_13Asset from "@/assets/c1_13.jpg.asset.json";
import c2_1Asset from "@/assets/c2_1.jpg.asset.json";
import c2_3Asset from "@/assets/c2_3.jpg.asset.json";
import c2_4Asset from "@/assets/c2_4.jpg.asset.json";
import c2_6Asset from "@/assets/c2_6.jpg.asset.json";
import c2_7Asset from "@/assets/c2_7.jpg.asset.json";
import c2_9Asset from "@/assets/c2_9.jpg.asset.json";
import t2Asset from "@/assets/transformation-2.jpg.asset.json";
import t3Asset from "@/assets/transformation-3.jpg.asset.json";

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

const hero = heroAsset.url;
const trainer = trainerAsset.url;
const before = c2_3Asset.url;
const after = c2_4Asset.url;
const c2_1 = c2_1Asset.url;
const c2_6 = c2_6Asset.url;
const c2_7 = c2_7Asset.url;
const c2_9 = c2_9Asset.url;
const c1_2 = c1_2Asset.url;
const c1_3 = c1_3Asset.url;
const c1_5 = c1_5Asset.url;
const c1_7 = c1_7Asset.url;
const c1_9 = c1_9Asset.url;
const c1_11 = c1_11Asset.url;
const c1_13 = c1_13Asset.url;
const t2 = t2Asset.url;
const t3 = t3Asset.url;

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
