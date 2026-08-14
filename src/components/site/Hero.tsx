// The big full-screen intro section at the top of the page: background
// photo, headline, two CTA buttons, and a small stats row.
import { ChevronDown, Clock, MapPin } from "lucide-react";
import { img, restaurant } from "@/lib/restaurant";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-[100svh] overflow-hidden bg-ink">
      <img
        src={img.veranda}
        alt="Véranda de La Table de Caïus ouverte sur le jardin, à Port-au-Prince"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/45 to-ink/90" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pt-28 pb-24 lg:px-8">
        <p className="eyebrow">Depuis 1998 — Champ-de-Mars, Port-au-Prince</p>
        <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.02] text-ink-foreground sm:text-7xl lg:text-8xl">
          Le goût du pays,
          <span className="block italic text-gold">servi avec élégance.</span>
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
          {restaurant.tagline}. Une maison de famille, une véranda ouverte sur le jardin du
          Musée d'Art, et une cuisine créole travaillée avec la rigueur française.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#reservation"
            className="inline-flex items-center justify-center bg-gold px-8 py-4 text-[0.72rem] tracking-[0.24em] text-gold-foreground uppercase transition-colors duration-300 hover:bg-gold/90"
          >
            Réserver une table
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center border border-ink-foreground/35 px-8 py-4 text-[0.72rem] tracking-[0.24em] text-ink-foreground uppercase transition-colors duration-300 hover:border-ink-foreground hover:bg-ink-foreground/10"
          >
            Découvrir la carte
          </a>
        </div>

        <dl className="mt-16 grid gap-6 border-t border-ink-foreground/15 pt-8 sm:grid-cols-3">
          <div className="flex min-w-0 items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <div className="min-w-0">
              <dt className="text-[0.62rem] tracking-[0.24em] text-ink-foreground/50 uppercase">
                Ouverture
              </dt>
              <dd className="mt-1 text-sm text-ink-foreground/90">Lun – Sam · 10h00 – 16h00</dd>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <div className="min-w-0">
              <dt className="text-[0.62rem] tracking-[0.24em] text-ink-foreground/50 uppercase">
                Adresse
              </dt>
              <dd className="mt-1 text-sm text-ink-foreground/90">{restaurant.addressShort}</dd>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-3">
            <span className="mt-0.5 text-xs text-gold">★★★★☆</span>
            <div className="min-w-0">
              <dt className="text-[0.62rem] tracking-[0.24em] text-ink-foreground/50 uppercase">
                Avis
              </dt>
              <dd className="mt-1 text-sm text-ink-foreground/90">4,5 / 5 — cadre calme & soigné</dd>
            </div>
          </div>
        </dl>
      </div>

      <a
        href="#apropos"
        aria-label="Descendre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-ink-foreground/50 transition-colors hover:text-gold lg:block"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
