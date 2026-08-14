// Simple footer: restaurant name/address, the same nav links as the
// header, and a copyright line.
import { restaurant } from "@/lib/restaurant";

export function SiteFooter() {
  return (
    <footer className="bg-ink py-14 text-ink-foreground">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-ink-foreground/12 pb-10 sm:flex-row sm:items-end">
          <div>
            <p className="font-display text-3xl">La Table de Caïus</p>
            <p className="mt-2 max-w-sm text-sm text-ink-foreground/60">
              {restaurant.addressShort} — ouvert du lundi au samedi, 10h00 à 16h00.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-[0.7rem] tracking-[0.2em] uppercase">
            {[
              { href: "#apropos", label: "À propos" },
              { href: "#menu", label: "Menu" },
              { href: "#galerie", label: "Galerie" },
              { href: "#reservation", label: "Réserver" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-ink-foreground/65 hover:text-gold">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-7 flex flex-col gap-2 text-xs text-ink-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} La Table de Caïus — Port-au-Prince, Haïti.</p>
          <p>Maquette de présentation — site de démonstration.</p>
        </div>
      </div>
    </footer>
  );
}
