// The little floating call + WhatsApp buttons pinned to the
// bottom-right corner of the screen on every page.
import { MessageCircle, Phone } from "lucide-react";
import { restaurant } from "@/lib/restaurant";

export function FloatingActions() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <a
        href={`tel:${restaurant.phoneHref}`}
        aria-label="Appeler le restaurant"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={`https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(
          "Bonjour, je souhaite réserver une table à La Table de Caïus.",
        )}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-full bg-primary py-3 pr-5 pl-4 text-primary-foreground shadow-xl transition-transform duration-300 hover:scale-[1.03]"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-[0.7rem] tracking-[0.18em] uppercase">WhatsApp</span>
      </a>
    </div>
  );
}
