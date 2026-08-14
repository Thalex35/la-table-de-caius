import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { restaurant } from "@/lib/restaurant";
import { cn } from "@/lib/utils";

const links = [
  { href: "#apropos", label: "À propos" },
  { href: "#menu", label: "Menu" },
  { href: "#galerie", label: "Galerie" },
  { href: "#evenements", label: "Événements" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  // "scrolled" swaps the header from transparent-over-hero to a solid,
  // blurred background once the user has scrolled past the hero a bit.
  const [scrolled, setScrolled] = useState(false);
  // "open" controls the full-screen mobile nav overlay.
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); // run once on mount in case the page loads already scrolled
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu overlay is open, so the page
  // behind it doesn't scroll along with it.
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
          ? "border-b border-border/60 bg-background/92 py-3 backdrop-blur-md"
          : "border-b border-transparent py-5",
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
        <a href="#accueil" className="flex min-w-0 items-baseline gap-2">
          <span
            className={cn(
              "font-display truncate text-xl tracking-wide transition-colors sm:text-2xl",
              scrolled ? "text-foreground" : "text-ink-foreground",
            )}
          >
            La Table de Caïus
          </span>
          <span
            className={cn(
              "hidden shrink-0 text-[0.6rem] tracking-[0.28em] uppercase lg:inline",
              scrolled ? "text-gold" : "text-ink-foreground/60",
            )}
          >
            Port-au-Prince
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "relative text-[0.8rem] tracking-[0.14em] uppercase transition-colors",
                  "after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                  scrolled
                    ? "text-foreground/75 hover:text-foreground"
                    : "text-ink-foreground/80 hover:text-ink-foreground",
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#reservation"
            className={cn(
              "hidden shrink-0 items-center gap-2 border px-5 py-2.5 text-[0.72rem] tracking-[0.2em] uppercase transition-all duration-300 sm:inline-flex",
              scrolled
                ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
                : "border-gold/70 text-ink-foreground hover:bg-gold hover:text-gold-foreground",
            )}
          >
            Réserver
          </a>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen(true)}
            className={cn(
              "shrink-0 lg:hidden",
              scrolled ? "text-foreground" : "text-ink-foreground",
            )}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink text-ink-foreground lg:hidden">
          <div className="flex items-center justify-between px-5 py-5">
            <span className="font-display text-xl">La Table de Caïus</span>
            <button type="button" aria-label="Fermer le menu" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
            {[{ href: "#accueil", label: "Accueil" }, ...links].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display border-b border-ink-foreground/10 py-4 text-3xl text-ink-foreground/90"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="space-y-3 px-8 pb-10">
            <a
              href="#reservation"
              onClick={() => setOpen(false)}
              className="block bg-gold py-4 text-center text-[0.72rem] tracking-[0.24em] text-gold-foreground uppercase"
            >
              Réserver une table
            </a>
            <a
              href={`tel:${restaurant.phoneHref}`}
              className="flex items-center justify-center gap-2 border border-ink-foreground/25 py-4 text-[0.72rem] tracking-[0.24em] uppercase"
            >
              <Phone className="h-4 w-4" /> {restaurant.phone}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
