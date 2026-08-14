import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { gallery } from "@/lib/restaurant";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

export function Gallery() {
  // null = lightbox closed, otherwise it's the index of the photo open
  // in the fullscreen lightbox below.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Let people close the lightbox with the Escape key, not just by
  // clicking outside the image.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="galerie" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Galerie"
            title="L'ambiance, en images"
            intro="Le jardin, la véranda, le bar et les assiettes du jour — photographiés dans la maison."
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal
              key={g.src + i}
              delay={(i % 4) * 70}
              className={cn(
                "group relative overflow-hidden",
                g.span === "tall" && "row-span-2",
                g.span === "wide" && "col-span-2",
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="h-full w-full cursor-zoom-in"
                aria-label={g.alt}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Fullscreen lightbox — clicking the dark backdrop closes it, but
          clicking the image itself doesn't (see stopPropagation below) */}
      {openIndex !== null ? (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-ink/95 p-4"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Fermer"
            className="absolute top-5 right-5 text-ink-foreground/70 hover:text-ink-foreground"
            onClick={() => setOpenIndex(null)}
          >
            <X className="h-7 w-7" />
          </button>
          <figure className="max-h-[88vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery[openIndex]!.src}
              alt={gallery[openIndex]!.alt}
              className="max-h-[80vh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-ink-foreground/60">
              {gallery[openIndex]!.alt}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
