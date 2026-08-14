import { useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "@/lib/restaurant";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

export function Faq() {
  // Only one question open at a time (classic accordion behaviour).
  // Starts with the first question (index 0) already expanded.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Questions fréquentes" title="Bon à savoir avant de venir" />
        </Reveal>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 45}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display min-w-0 text-xl leading-snug">{f.q}</span>
                  <Plus
                    className={cn(
                      "mt-1 h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                {/* Animating from grid-rows-[0fr] to [1fr] gives a smooth
                    height transition without needing to know the answer's
                    height in advance (can't animate to/from "auto" in CSS) */}
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-out",
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
