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

const hero = "/images/gym.jpg";
const trainer = "/images/trainer.jpg";
const before_after = "/images/before_after.jpg";
const gallery = "/images/gallery.jpg";
const gallery2 = "/images/gallery2.jpg";
const logo = "/images/logo.jpg";

export const IMG = {
  heroGym: { src: hero, alt: "Training floor at Tiger Gym D.I. Khan with strength machines and a heavy bag" },
  trainer: {
    src: trainer,
    alt: "Tiger Hussain Marwat, Owner and Coach of Tiger Gym D.I. Khan, on the gym floor",
  },
  before: { src: before_after, alt: "Member before starting training at Tiger Gym D.I. Khan" },
  after: { src: before_after, alt: "The same member after consistent training at Tiger Gym D.I. Khan" },
};

export const EXTRA_TRANSFORMATIONS: { src: string; alt: string; tag: string }[] = [
  {
    src: before_after,
    alt: "Before and after transformation of a Tiger Gym member",
    tag: "Before / After",
  }
];

export type Shot = { src: string; alt: string };

export const SHOWCASE: Shot[] = [
  { src: gallery, alt: "Athlete holding a front double biceps pose at Tiger Gym" },
  { src: gallery2, alt: "Member posing after a strength training block at Tiger Gym" },
  { src: hero, alt: "Tiger Gym training floor" },
  { src: trainer, alt: "Trainer at Tiger Gym" },
];

export const GALLERY: Shot[] = [
  { src: hero, alt: "Wide view of the Tiger Gym D.I. Khan training floor" },
  { src: gallery, alt: "Athlete at Tiger Gym" },
  { src: gallery2, alt: "Member flexing after a training session at Tiger Gym" },
  { src: trainer, alt: "Trainer at Tiger Gym" },
  { src: before_after, alt: "Transformation at Tiger Gym" },
  { src: logo, alt: "Tiger Gym Logo" }
];
