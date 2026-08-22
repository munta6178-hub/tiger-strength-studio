import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import { NAV, PHONE, PHONE_HREF } from "@/lib/site";
const logo = { url: "/images/tiger-gym-logo.png" };

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-charcoal">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-12">
        <div>
          <img
            src={logo.url}
            alt="Tiger Gym Dikhan logo"
            className="mb-5 h-16 w-auto"
            loading="lazy"
          />
          <p className="font-display text-2xl font-extrabold tracking-[0.1em] uppercase">
            Tiger<span className="text-gold">Gym</span>{" "}
            <span className="text-sm tracking-[0.3em] text-muted-foreground">Dikhan</span>
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Serious strength training in Dera Ismail Khan. Coached lifting, disciplined
            programming, and a floor that rewards showing up.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <p className="label-eyebrow">Navigate</p>
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <p className="label-eyebrow">Visit</p>
          <p className="flex items-start gap-3 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            Tiger Gym, Dera Ismail Khan, Khyber Pakhtunkhwa
          </p>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"
          >
            <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
            {PHONE}
          </a>
          <p className="flex items-start gap-3 text-sm text-muted-foreground">
            <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            Morning and evening sessions, six days a week
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-6 text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>&copy; {new Date().getFullYear()} Tiger Gym Dikhan</span>
          <span>Train hard. Stay humble.</span>
        </div>
      </div>
    </footer>
  );
}