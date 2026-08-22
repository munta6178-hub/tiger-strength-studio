import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, PHONE, PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";
function Wordmark() {
  return (
    <Link to="/" className="group flex items-baseline gap-2" aria-label="Tiger Gym Dikhan home">
      <img
        src="/images/logo.jpg"
        alt="Tiger Gym Dikhan logo"
        className="h-10 w-auto self-center sm:h-12 mix-blend-screen"
      />
      <span className="font-display text-lg font-extrabold tracking-[0.12em] uppercase sm:text-xl">
        Tiger<span className="text-gold">Gym</span>
      </span>
      <span className="hidden text-[0.6rem] font-semibold tracking-[0.34em] text-muted-foreground uppercase sm:inline">
        Dikhan
      </span>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1440px] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12",
          scrolled ? "h-16" : "h-20 sm:h-24",
        )}
      >
        <Wordmark />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative text-[0.72rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:ring-1 focus-visible:ring-gold focus-visible:outline-none data-[status=active]:text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-gold xl:flex"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {PHONE}
          </a>
          <Link
            to="/membership"
            className="hidden border border-gold/60 px-5 py-2.5 text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-primary-foreground sm:inline-block"
          >
            Join Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex size-11 items-center justify-center border border-border text-foreground lg:hidden"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <Wordmark />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex size-11 items-center justify-center border border-border"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-1 px-5 sm:px-8" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-5 font-display text-3xl font-bold tracking-tight uppercase data-[status=active]:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-3 px-5 pb-10 sm:px-8">
            <Link
              to="/membership"
              onClick={() => setOpen(false)}
              className="block bg-gold py-4 text-center text-xs font-bold tracking-[0.24em] text-primary-foreground uppercase"
            >
              Join Tiger Gym
            </Link>
            <a
              href={PHONE_HREF}
              className="block border border-border py-4 text-center text-xs font-semibold tracking-[0.2em] uppercase"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}