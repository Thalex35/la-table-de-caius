// "Notre maison" section: intro text + the three little value-prop
// columns (cuisine, fresh produce, hosting) + the framed photo on the right.
import { Leaf, Soup, Users } from "lucide-react";
import { img } from "@/lib/restaurant";
import { Reveal, SectionHeading } from "./Reveal";

const pillars = [
  {
    icon: Soup,
    title: "Cuisine créole revisitée",
    text: "Lambi, tassot, poisson gros sel et fettucini aux écrevisses : les recettes du pays, dressées avec soin.",
  },
  {
    icon: Leaf,
    title: "Produits frais du marché",
    text: "Légumes, poissons et jus pressés du jour. Rien n'est préparé la veille, tout est cuisiné le matin même.",
  },
  {
    icon: Users,
    title: "Une maison d'accueil",
    text: "Déjeuners d'affaires, retrouvailles de famille ou réceptions privées, dans un cadre calme et fleuri.",
  },
];

export function About() {
  return (
    <section id="apropos" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow">Notre maison</p>
            <h2 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
              Une table discrète,
              <span className="block italic text-primary">au cœur de Port-au-Prince.</span>
            </h2>
            <div className="rule-gold mt-6" />
            <div className="mt-7 space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground">
              <p>
                À deux pas de l'agitation du Champ-de-Mars, face au petit jardin du Musée d'Art,
                La Table de Caïus occupe une ancienne maison aux murs de brique et aux poutres de
                bois. On y entre par une porte rouge, on traverse le jardin, et le bruit de la
                ville s'efface.
              </p>
              <p>
                Depuis plus de vingt ans, la maison propose une cuisine qui marie la générosité
                créole et la précision française. Une carte courte, changée au fil du marché, une
                table du midi copieuse, et des jus frais naturels qui font sa réputation.
              </p>
              <p>
                Diplomates, familles et habitués du quartier s'y croisent chaque midi. C'est,
                dit-on, la cantine de l'ambassade de France — et surtout, une adresse où l'on
                revient.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title}>
                  <p.icon className="h-5 w-5 text-gold" />
                  <h3 className="mt-3 text-lg leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={120}>
            <div className="relative">
              <img
                src={img.salleBrique}
                alt="Salle aux murs de brique et poutres de bois de La Table de Caïus"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <img
                src={img.verandaBrique}
                alt="Table dressée avec nappe turquoise et fleurs fraîches"
                className="absolute -bottom-10 -left-6 hidden w-44 border-8 border-background object-cover shadow-xl sm:block sm:w-56"
                loading="lazy"
              />
              <div className="absolute -top-6 -right-4 hidden bg-primary px-6 py-5 text-primary-foreground lg:block">
                <p className="font-display text-4xl leading-none">20+</p>
                <p className="mt-1 text-[0.6rem] tracking-[0.22em] uppercase opacity-80">
                  années de service
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
