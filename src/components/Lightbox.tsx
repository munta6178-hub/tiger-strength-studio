import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Shot } from "@/lib/site";

export function Lightbox({
  shots,
  index,
  onClose,
  onIndex,
}: {
  shots: Shot[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((index + 1) % shots.length);
      if (e.key === "ArrowLeft") onIndex((index - 1 + shots.length) % shots.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, shots.length, onClose, onIndex]);

  if (index === null) return null;
  const shot = shots[index];
  if (!shot) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[60] flex flex-col bg-background/96 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-5 py-5 sm:px-8">
        <span className="text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase">
          {String(index + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="flex size-11 items-center justify-center border border-border hover:border-gold"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center gap-3 px-3 pb-10 sm:gap-6 sm:px-8">
        <button
          type="button"
          onClick={() => onIndex((index - 1 + shots.length) % shots.length)}
          aria-label="Previous photo"
          className="flex size-11 shrink-0 items-center justify-center border border-border hover:border-gold"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <img
          src={shot.src}
          alt={shot.alt}
          className="max-h-[76vh] w-auto max-w-full border border-border/60 object-contain"
        />
        <button
          type="button"
          onClick={() => onIndex((index + 1) % shots.length)}
          aria-label="Next photo"
          className="flex size-11 shrink-0 items-center justify-center border border-border hover:border-gold"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}