// Contact details card + an embedded OpenStreetMap iframe (no API key
// needed, unlike Google Maps embeds) with a Google Maps deep link on top.
import { Mail, MapPin, MessageCircle, Phone, ExternalLink } from "lucide-react";
import { img, restaurant } from "@/lib/restaurant";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Nous trouver"
            title="Rue Légitime, face au jardin du Musée d'Art"
            intro="Stationnement gratuit devant le restaurant, à deux minutes à pied du Champ-de-Mars."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="space-y-8">
            <div className="border border-border/70 bg-card p-8">
              <ul className="space-y-6 text-sm">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div className="min-w-0">
                    <p className="text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
                      Adresse
                    </p>
                    <p className="mt-1.5 leading-relaxed">{restaurant.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div className="min-w-0">
                    <p className="text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
                      Téléphone
                    </p>
                    <a
                      href={`tel:${restaurant.phoneHref}`}
                      className="mt-1.5 block hover:text-gold"
                    >
                      {restaurant.phone}
                    </a>
                    <p className="text-muted-foreground">{restaurant.phoneAlt}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div className="min-w-0">
                    <p className="text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
                      Email
                    </p>
                    <a href={`mailto:${restaurant.email}`} className="mt-1.5 block break-all hover:text-gold">
                      {restaurant.email}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
                  Horaires
                </p>
                <dl className="mt-3 space-y-2 text-sm">
                  {restaurant.hours.map((h) => (
                    <div key={h.day} className="flex items-baseline justify-between gap-4">
                      <dt className="text-muted-foreground">{h.day}</dt>
                      <dd className="shrink-0">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={`https://wa.me/${restaurant.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3.5 text-[0.68rem] tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary/90"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3.5 text-[0.68rem] tracking-[0.2em] uppercase transition-colors hover:border-gold hover:text-gold"
                >
                  Itinéraire <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative min-h-[380px]">
            <iframe
              title="Carte — La Table de Caïus, Port-au-Prince"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-72.3407%2C18.5358%2C-72.3307%2C18.5418&layer=mapnik&marker=18.5388396%2C-72.3357284"
              className="h-full min-h-[380px] w-full border border-border/70 grayscale-[35%]"
              loading="lazy"
            />
            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute right-4 bottom-4 hidden items-center gap-3 bg-card/95 px-5 py-4 shadow-lg backdrop-blur sm:flex"
            >
              <img
                src={img.exterieur}
                alt="Entrée du restaurant"
                className="h-12 w-12 shrink-0 object-cover"
                loading="lazy"
              />
              <span className="min-w-0">
                <span className="font-display block text-base">La Table de Caïus</span>
                <span className="block text-xs text-muted-foreground">
                  Ouvrir dans Google Maps
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
