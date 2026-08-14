import { useState } from "react";
import { menu } from "@/lib/restaurant";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

export function MenuSection() {
  // Which tab (entrées / plats / buffet / desserts) is currently shown.
  // Defaults to the first category in the `menu` array.
  const [active, setActive] = useState(menu[0]!.id);
  const current = menu.find((c) => c.id === active) ?? menu[0]!;

  return (
    <section id="menu" className="bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="La carte"
            title="Ce que l'on sert aujourd'hui"
            intro="Une carte volontairement courte, dictée par le marché du matin. Les prix sont indicatifs et évoluent avec la saison."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {menu.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={cn(
                  "border px-5 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase transition-all duration-300",
                  active === c.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-gold hover:text-foreground",
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-muted-foreground italic">{current.note}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {current.items.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 60}
              className="group flex gap-5 border border-border/70 bg-card p-5 transition-all duration-500 hover:border-gold/60 hover:shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)] sm:p-6"
            >
              {item.image ? (
                <div className="hidden h-28 w-28 shrink-0 overflow-hidden sm:block">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="hidden h-28 w-28 shrink-0 items-center justify-center bg-accent/60 sm:flex">
                  <span className="font-display text-3xl text-gold">C</span>
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="min-w-0 flex-1 text-xl leading-snug">{item.name}</h3>
                  <span className="shrink-0 text-sm tracking-wide text-gold">{item.price}</span>
                </div>
                {item.signature ? (
                  <span className="mt-2 inline-block border border-gold/50 px-2 py-0.5 text-[0.55rem] tracking-[0.2em] text-gold uppercase">
                    Signature
                  </span>
                ) : null}
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Une allergie, un régime particulier, un menu de groupe ?
          </p>
          <a
            href="#reservation"
            className="mt-4 inline-flex items-center border border-primary bg-primary px-8 py-4 text-[0.72rem] tracking-[0.24em] text-primary-foreground uppercase transition-colors hover:bg-primary/90"
          >
            Réserver votre table
          </a>
        </Reveal>
      </div>
    </section>
  );
}
