// Three customer quote cards, pulled straight from lib/restaurant.ts.
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/restaurant";
import { Reveal, SectionHeading } from "./Reveal";

export function Testimonials() {
  return (
    <section className="bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Ils sont revenus"
            title="Ce que disent nos hôtes"
            intro="Une note moyenne de 4,5 / 5 sur les avis publics, et beaucoup d'habitués."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.author}
              delay={i * 90}
              className="flex flex-col border border-border/70 bg-card p-8"
            >
              <Quote className="h-6 w-6 text-gold/70" />
              <p className="font-display mt-5 flex-1 text-lg leading-relaxed text-foreground/90 italic">
                « {t.quote} »
              </p>
              <div className="mt-7 border-t border-border pt-5">
                <p className="text-sm font-medium">{t.author}</p>
                <p className="mt-0.5 text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {t.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
