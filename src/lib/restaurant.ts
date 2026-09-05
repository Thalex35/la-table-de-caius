// All the "content" for the site lives here: restaurant info, the menu,
// gallery captions, testimonials, FAQ. Keeping it in one file makes it easy
// to update prices/hours/text without touching any component.
import { restaurantImages } from "./restaurant-images";

export const img = {
  /** Véranda aux nappes bleues, grandes fenêtres sur le jardin */
  veranda: restaurantImages.veranda,
  /** Salle à manger principale, tables dressées */
  salleTables: restaurantImages.salleTables,
  /** Plaque gravée « La Table de Caïus » */
  enseigne: restaurantImages.enseigne,
  /** Buffet de salades et crudités */
  buffetSalades: restaurantImages.buffetSalades,
  /** Assiette de riz blanc parfumé */
  platRizBlanc: restaurantImages.platRizBlanc,
  /** Tassot de bœuf, oignons marinés, bananes pesées */
  platTassot: restaurantImages.platTassot,
  /** Le bar et ses bouteilles */
  bar: restaurantImages.bar,
  /** Poisson sauce tomate, haricots verts */
  platPoissonHaricots: restaurantImages.platPoissonHaricots,
  /** Gâteau au beurre, glaçage */
  gateau: restaurantImages.gateau,
  /** Extérieur : porte rouge, patio et jardin */
  exterieur: restaurantImages.exterieur,
  /** Poulet grillé, salade croquante et riz */
  platPouletGrille: restaurantImages.platPouletGrille,
  /** Assiette avocat, galette de maïs et légumes */
  platAvocat: restaurantImages.platAvocat,
  /** Filet de poisson sauce crème, riz jaune */
  platFiletCreme: restaurantImages.platFiletCreme,
  /** Poisson frit, salade de betterave, bananes pesées */
  platPoissonFrit: restaurantImages.platPoissonFrit,
  /** Bar aux murs jaunes */
  barJaune: restaurantImages.barJaune,
  /** Salle aux murs de brique et poutres */
  salleBrique: restaurantImages.salleBrique,
  /** Véranda de brique, tables bleues */
  verandaBrique: restaurantImages.verandaBrique,
  /** Verre de vin sur nappe */
  vin: restaurantImages.vin,
};

export const restaurant = {
  name: "La Table de Caïus",
  tagline: "Cuisine créole & française au cœur du Champ-de-Mars",
  address: "16, rue Légitime, Place des Héros de l'Indépendance, Port-au-Prince, Haïti",
  addressShort: "16, rue Légitime — Champ-de-Mars, Port-au-Prince",
  phone: "+509 39 35 3761",
  phoneHref: "+50939353761",
  phoneAlt: "+509 29 40 72 27",
  whatsapp: "50939353761",
  email: "contact@latabledecaius.ht",
  mapsUrl: "https://www.google.com/maps/place/La+Table+De+Caius/@18.5388396,-72.3357284,17z",
  hours: [
    { day: "Lundi – Vendredi", time: "10h00 – 16h00" },
    { day: "Samedi", time: "10h00 – 16h00" },
    { day: "Dimanche", time: "Fermé" },
  ],
};

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  signature?: boolean;
};

// The carte is split into tabs (entrées / plats / buffet / desserts) —
// MenuSection.tsx reads this array to build both the tab buttons and the
// item cards for whichever tab is active.
export const menu: { id: string; label: string; note: string; items: MenuItem[] }[] = [
  {
    id: "entrees",
    label: "Entrées",
    note: "Pour ouvrir le repas, en douceur.",
    items: [
      {
        name: "Lambi créole en cassolette",
        description:
          "Lambi mijoté longuement, sauce créole aux poivrons doux, oignons et épices du pays.",
        price: "700 HTG",
        signature: true,
      },
      {
        name: "Accras de morue",
        description: "Beignets croustillants de morue, piment doux, sauce ti-malice maison.",
        price: "450 HTG",
      },
      {
        name: "Avocat du jardin, vinaigrette citron vert",
        description: "Avocat de saison, huile d'olive, citron vert, fleur de sel.",
        price: "400 HTG",
        image: img.platAvocat,
      },
      {
        name: "Soupe joumou",
        description: "La grande soupe au giraumon, servie chaque samedi midi.",
        price: "500 HTG",
      },
    ],
  },
  {
    id: "plats",
    label: "Plats",
    note: "Le cœur de la maison : le créole, cuisiné à la française.",
    items: [
      {
        name: "Poisson gros sel, sauce créole",
        description:
          "Poisson entier frit, salade de betterave, bananes pesées et riz national.",
        price: "1 250 HTG",
        image: img.platPoissonFrit,
        signature: true,
      },
      {
        name: "Poulet grillé aux herbes",
        description: "Poulet mariné 24 h, grillé au charbon, légumes croquants et riz blanc.",
        price: "950 HTG",
        image: img.platPouletGrille,
      },
      {
        name: "Tassot de bœuf, sauce ti-malice",
        description: "Bœuf confit puis saisi, oignons marinés, bananes pesées, légumes du jour.",
        price: "1 100 HTG",
        image: img.platTassot,
      },
      {
        name: "Filet de poisson sauce crème & épinards",
        description: "Filet nappé d'une sauce crémeuse aux herbes, riz djon-djon parfumé.",
        price: "1 150 HTG",
        image: img.platFiletCreme,
        signature: true,
      },
      {
        name: "Escalope de poulet sauce blanche",
        description: "Escalope dorée, sauce blanche aux fines herbes, riz jaune et légumes.",
        price: "900 HTG",
        image: img.platRizBlanc,
      },
      {
        name: "Fettucini aux écrevisses",
        description: "Le grand classique de la maison, sauce onctueuse et écrevisses fraîches.",
        price: "1 300 HTG",
        image: img.platPoissonHaricots,
        signature: true,
      },
      {
        name: "Lasagne bolognaise",
        description: "Pâtes fraîches, sauce longuement mijotée, gratinée au four.",
        price: "850 HTG",
        image: img.salleTables,
      },
    ],
  },
  {
    id: "buffet",
    label: "Table du midi",
    note: "Servie du lundi au samedi, de 11h30 à 15h00.",
    items: [
      {
        name: "Buffet créole du jour",
        description:
          "Trois plats chauds au choix, riz, légumes de saison, salades fraîches et dessert.",
        price: "1 000 HTG",
        image: img.buffetSalades,
        signature: true,
      },
      {
        name: "Table de salades & crudités",
        description: "Salades composées du jour, préparées le matin même.",
        price: "Inclus",
        image: img.buffetSalades,
      },
      {
        name: "Formule express",
        description: "Plat du jour + jus frais + café, servi en moins de vingt minutes.",
        price: "750 HTG",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts & boissons",
    note: "Faits maison, comme il se doit.",
    items: [
      {
        name: "Gâteau au beurre",
        description: "Le dessert signature, moelleux, glaçage vanillé.",
        price: "350 HTG",
        signature: true,
      },
      {
        name: "Jus frais naturels",
        description: "Corossol, chadèque, cerise pays, ananas — pressés à la commande.",
        price: "250 HTG",
        image: img.gateau,
      },
      {
        name: "Sélection de vins",
        description: "Vins français et chiliens, au verre ou à la bouteille.",
        price: "dès 400 HTG",
        image: img.vin,
      },
      {
        name: "Café haïtien",
        description: "Café des mornes, torréfaction artisanale.",
        price: "150 HTG",
      },
    ],
  },
];

// Gallery.tsx uses `span` to make the masonry-ish grid: "tall" = row-span-2,
// "wide" = col-span-2, undefined = a normal single cell.
export const gallery = [
  { src: img.veranda, alt: "Véranda aux nappes bleues, ouverte sur le jardin", span: "tall" },
  { src: img.salleTables, alt: "Salle principale dressée pour le déjeuner" },
  { src: img.platPoissonFrit, alt: "Poisson frit, salade de betterave et bananes pesées" },
  { src: img.bar, alt: "Le bar de La Table de Caïus" },
  { src: img.verandaBrique, alt: "Véranda de brique et tables aux nappes bleues" },
  { src: img.platPouletGrille, alt: "Poulet grillé, riz et salade croquante" },
  { src: img.salleBrique, alt: "Salle aux murs de brique et poutres de bois", span: "wide" },
  { src: img.exterieur, alt: "Entrée du restaurant, patio et jardin" },
  { src: img.platFiletCreme, alt: "Filet de poisson, sauce crème et riz jaune" },
  { src: img.buffetSalades, alt: "Buffet de salades et crudités du midi" },
  { src: img.gateau, alt: "Gâteau au beurre, le dessert signature" },
  { src: img.enseigne, alt: "Plaque gravée de La Table de Caïus" },
];

export const testimonials = [
  {
    quote:
      "Cadre très agréable et calme, face au jardin du Musée d'Art, à deux pas du Champ-de-Mars. Les fettucini aux écrevisses sont un régal.",
    author: "Nadège P.",
    role: "Habituée du déjeuner",
  },
  {
    quote:
      "Nous y recevons nos partenaires depuis des années. Le service est discret, la cuisine constante, l'adresse fait toujours son effet.",
    author: "Jean-Robert L.",
    role: "Directeur, Port-au-Prince",
  },
  {
    quote:
      "On a privatisé la véranda pour l'anniversaire de ma mère. Tout était fleuri, chaleureux, et le gâteau au beurre a fait l'unanimité.",
    author: "Micheline D.",
    role: "Réception familiale",
  },
];

export const faq = [
  {
    q: "Faut-il réserver ?",
    a: "La réservation est vivement conseillée pour le déjeuner, en particulier du mardi au vendredi. Un appel ou un message WhatsApp suffit, et nous confirmons dans la journée.",
  },
  {
    q: "Quels sont les horaires d'ouverture ?",
    a: "Nous accueillons nos hôtes du lundi au samedi, de 10h00 à 16h00. Le restaurant est fermé le dimanche. Les événements privés peuvent être organisés en soirée sur demande.",
  },
  {
    q: "Peut-on privatiser une salle ?",
    a: "Oui. La véranda, le salon bleu et le jardin peuvent être privatisés pour des déjeuners d'affaires, anniversaires, baptêmes ou réceptions, de 10 à 60 personnes.",
  },
  {
    q: "Proposez-vous des plats à emporter ?",
    a: "Tous les plats de la carte sont disponibles à emporter, et la livraison est possible dans le centre de Port-au-Prince. Commandez par téléphone ou WhatsApp.",
  },
  {
    q: "Où se garer ?",
    a: "Un stationnement gratuit est disponible devant le restaurant, rue Légitime, ainsi qu'aux abords de la Place des Héros de l'Indépendance.",
  },
  {
    q: "Le restaurant est-il adapté aux familles ?",
    a: "Absolument. Nous accueillons volontiers les enfants et proposons des portions adaptées ainsi que des jus frais naturels.",
  },
];
