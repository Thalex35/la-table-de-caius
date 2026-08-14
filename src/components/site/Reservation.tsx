import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { CalendarCheck, Clock, Users } from "lucide-react";
import { img, restaurant } from "@/lib/restaurant";
import { Reveal } from "./Reveal";

const times = [
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
];

const fieldClass =
  "w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold";
const labelClass = "block text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase";

export function Reservation() {
  const [sending, setSending] = useState(false);

  // NOTE: this is a front-end-only demo — there's no backend here, so the
  // form doesn't actually send anything anywhere yet. It just reads the
  // visitor's name from the form, fakes a ~900ms "sending" delay, then
  // shows a success toast. To make this real, replace the setTimeout below
  // with an actual request (e.g. POST to your own API, or a service like
  // Formspree / EmailJS / a WhatsApp deep link with the filled-in details).
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = String(new FormData(form).get("name") ?? "").trim();
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Demande de réservation envoyée", {
        description: `Merci ${name || ""}, nous vous confirmons votre table par téléphone dans l'heure.`,
      });
    }, 900);
  };

  return (
    <section id="reservation" className="bg-ink py-24 text-ink-foreground sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Réservation</p>
            <h2 className="mt-4 text-4xl leading-[1.08] text-ink-foreground sm:text-5xl">
              Réservez votre table
              <span className="block italic text-gold">en moins d'une minute.</span>
            </h2>
            <div className="rule-gold mt-6" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-foreground/70">
              Le déjeuner se remplit vite, en particulier du mardi au vendredi. Indiquez-nous
              simplement vos préférences : nous confirmons par téléphone ou WhatsApp.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-ink-foreground/80">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Service du lundi au samedi, 10h00 – 16h00
              </li>
              <li className="flex items-start gap-3">
                <Users className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Groupes de plus de 10 personnes : menu dédié sur demande
              </li>
              <li className="flex items-start gap-3">
                <CalendarCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                Confirmation sous une heure pendant les heures d'ouverture
              </li>
            </ul>

            <img
              src={img.veranda}
              alt="Salon aux nappes bleues, dressé pour un déjeuner"
              loading="lazy"
              className="mt-10 hidden aspect-[16/10] w-full object-cover lg:block"
            />
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              className="border border-ink-foreground/12 bg-ink-foreground/[0.04] p-6 backdrop-blur-sm sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="name">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Marie-Ange Joseph"
                    className={`${fieldClass} mt-2`}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+509 0000 0000"
                    className={`${fieldClass} mt-2`}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="guests">
                    Nombre de personnes
                  </label>
                  <select id="guests" name="guests" defaultValue="2" className={`${fieldClass} mt-2`}>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>
                        {n} {n > 1 ? "personnes" : "personne"}
                      </option>
                    ))}
                    <option value="13+">Plus de 12 (groupe)</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="date">
                    Date
                  </label>
                  <input id="date" name="date" type="date" required className={`${fieldClass} mt-2`} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="time">
                    Heure
                  </label>
                  <select id="time" name="time" defaultValue="12:30" className={`${fieldClass} mt-2`}>
                    {times.map((t) => (
                      <option key={t} value={t}>
                        {t.replace(":", "h")}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="message">
                    Message (facultatif)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Table en véranda, anniversaire, allergie…"
                    className={`${fieldClass} mt-2 resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-7 w-full bg-gold py-4 text-[0.72rem] tracking-[0.24em] text-gold-foreground uppercase transition-colors hover:bg-gold/90 disabled:opacity-60"
              >
                {sending ? "Envoi en cours…" : "Envoyer ma demande"}
              </button>
              <p className="mt-4 text-center text-xs text-ink-foreground/45">
                Ou appelez directement le{" "}
                <a href={`tel:${restaurant.phoneHref}`} className="text-gold underline-offset-4 hover:underline">
                  {restaurant.phone}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
