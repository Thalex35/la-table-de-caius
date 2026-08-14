/**
 * PLACEHOLDER IMAGES
 * -------------------
 * The original project pulled its photos from Lovable's private asset CDN
 * (files like `hero-veranda.jpg.asset.json`), which isn't something this
 * export includes or that I can reach from here. So for now every photo
 * below points at a stock/placeholder image with a fixed "seed" (so it
 * stays the same photo every time you reload, instead of a random one).
 *
 * TO SWAP IN THE REAL PHOTOS:
 * 1. Drop your actual .jpg files into `src/assets/photos/`
 *    (veranda.jpg, salle-brique.jpg, plat-tassot.jpg, etc.)
 * 2. Replace the picsum.photos URL below with an import, e.g.:
 *      import veranda from "@/assets/photos/veranda.jpg";
 *      ...
 *      veranda: veranda,
 * 3. Do that for each key in `img` (restaurant.ts) — everything else in
 *    the app (Hero, Gallery, MenuSection, etc.) already reads from there,
 *    so nothing else needs to change.
 */
function placeholder(seed: string, width = 1200, height = 900) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

export const placeholderImg = {
  veranda: placeholder("latablecaius-veranda"),
  salleTables: placeholder("latablecaius-salle-tables"),
  enseigne: placeholder("latablecaius-enseigne", 600, 600),
  buffetSalades: placeholder("latablecaius-buffet"),
  platRizBlanc: placeholder("latablecaius-riz-blanc"),
  platTassot: placeholder("latablecaius-tassot"),
  bar: placeholder("latablecaius-bar"),
  platPoissonHaricots: placeholder("latablecaius-poisson-haricots"),
  gateau: placeholder("latablecaius-gateau"),
  exterieur: placeholder("latablecaius-exterieur"),
  platPouletGrille: placeholder("latablecaius-poulet-grille"),
  platAvocat: placeholder("latablecaius-avocat"),
  platFiletCreme: placeholder("latablecaius-filet-creme"),
  platPoissonFrit: placeholder("latablecaius-poisson-frit"),
  barJaune: placeholder("latablecaius-bar-jaune"),
  salleBrique: placeholder("latablecaius-salle-brique"),
  verandaBrique: placeholder("latablecaius-veranda-brique"),
  vin: placeholder("latablecaius-vin"),
};
