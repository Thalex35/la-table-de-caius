// "Événements & privatisation" section: three formula cards (business
// lunches, birthdays, private catering) plus a WhatsApp call-to-action banner.
import { CakeSlice, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import { img, restaurant } from "@/lib/restaurant";
import { Reveal, SectionHeading } from "./Reveal";

const formulas = [
  {
    icon: Briefcase,
    title: "Déjeuners d'affaires",
    text: "Salon privatisable, service rapide et menu fixe en trois plats. Idéal pour recevoir partenaires et délégations.",
    detail: "10 à 25 couverts",
    image: img.salleBrique,
  },
  {
    icon: CakeSlice,
    title: "Anniversaires & baptêmes",
    text: "Décoration florale, gâteau au beurre maison et buffet créole servi dans la véranda ou au jardin.",
    detail: "20 à 60 invités",
    image: img.verandaBrique,
  },
  {
    icon: Sparkles,
    title: "Dîners privés & traiteur",
    text: "Ouverture en soirée sur réservation, ou service traiteur à domicile avec notre équipe.",
    detail: "Sur devis",
    image: img.buffetSalades,
  },
];

export function Events() {
  return (
    <section id="evenements" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Événements & privatisation"
            title="Recevez chez nous, comme chez vous"
            intro="Trois espaces — la véranda, le salon bleu et le jardin — que nous adaptons à votre occasion."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {formulas.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} className="group flex flex-col bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col border border-t-0 border-border/70 p-7">
                <f.icon className="h-5 w-5 text-gold" />
                <h3 className="mt-4 text-2xl leading-snug">{f.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                <p className="mt-5 text-[0.62rem] tracking-[0.24em] text-gold uppercase">
                  {f.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-12">
          <div className="flex flex-col items-start justify-between gap-6 border border-gold/40 bg-accent/40 p-8 sm:flex-row sm:items-center sm:p-10">
            <div className="max-w-xl">
              <h3 className="text-2xl leading-snug sm:text-3xl">
                Un projet d'événement ? Parlons-en aujourd'hui.
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Devis personnalisé sous 24 h, visite des espaces possible sur rendez-vous.
              </p>
            </div>
            <a
              href={`https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(
                "Bonjour, je souhaite organiser un événement privé à La Table de Caïus.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 bg-primary px-7 py-4 text-[0.72rem] tracking-[0.22em] text-primary-foreground uppercase transition-colors hover:bg-primary/90"
            >
              Nous contacter <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
