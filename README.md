# La Table de Caïus — site (React + Vite)

Site vitrine du restaurant "La Table de Caïus" (Port-au-Prince), reconstruit
en **React + Vite classique** (SPA), sans framework méta (pas de TanStack
Start, pas de SSR). C'est un site 100% statique : après `npm run build`, le
dossier `dist/` peut être déposé tel quel sur n'importe quel hébergement
(Netlify, Vercel, GitHub Pages, un simple cPanel/FTP, etc.).

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir l'URL affichée dans le terminal (en général http://localhost:5173).

## Build de production

```bash
npm run build
```

Le résultat est généré dans `dist/`. Le dossier `dist/` est ce qu'il faut
mettre en ligne.

## ⚠️ À propos des photos

Le projet original (fait avec Lovable) chargeait ses photos depuis un CDN
privé auquel je n'avais pas accès pour cette reconstruction. **Toutes les
images du site sont donc pour l'instant des placeholders** (photos
aléatoires mais fixes, via picsum.photos), juste pour que la mise en page
soit visible et complète.

Pour mettre tes vraies photos :

1. Récupère tes photos (véranda, plats, salle, etc.) et mets-les dans
   `src/assets/photos/` (par exemple `veranda.jpg`, `plat-tassot.jpg`, ...).
2. Ouvre `src/lib/restaurant.ts`, et pour chaque entrée de l'objet `img`,
   remplace la référence au placeholder par un import de ton fichier, ex. :

   ```ts
   import veranda from "@/assets/photos/veranda.jpg";
   // ...
   export const img = {
     veranda: veranda, // au lieu de placeholderImg.veranda
     // ...
   };
   ```

Tu peux les remplacer une par une, à ton rythme — le site fonctionne très
bien avec un mélange de vraies photos et de placeholders en attendant.

## Structure du projet

```
src/
  main.tsx              → point d'entrée, monte <App /> dans #root
  App.tsx                → assemble toutes les sections de la page
  styles.css              → thème Tailwind (couleurs, polices, radius…)
  lib/
    restaurant.ts         → tout le contenu du site (menu, horaires, avis, FAQ…)
    placeholder-images.ts → images temporaires en attendant les vraies photos
    utils.ts               → petit helper pour combiner des classes Tailwind
  components/
    site/                 → une section du site = un composant
      Hero.tsx, About.tsx, MenuSection.tsx, Gallery.tsx,
      Reservation.tsx, Events.tsx, Testimonials.tsx, Faq.tsx,
      Contact.tsx, SiteHeader.tsx, SiteFooter.tsx, FloatingActions.tsx,
      Reveal.tsx           → petit composant d'animation "apparition au scroll"
    ui/
      sonner.tsx            → notification "toast" (utilisée par le formulaire de réservation)
```

## Le formulaire de réservation

Le formulaire (`Reservation.tsx`) ne fait **pas** encore d'envoi réel : il
simule un envoi (petit délai + message de succès), mais rien n'est
transmis nulle part pour l'instant. Le code est commenté à l'endroit exact
où brancher un vrai envoi (API perso, service comme Formspree/EmailJS, ou
un lien WhatsApp pré-rempli).

## Stack technique

- React 18 + Vite 6
- Tailwind CSS v4 (via `@tailwindcss/vite`, pas besoin de fichier de config
  séparé — tout est dans `src/styles.css`)
- `lucide-react` pour les icônes
- `sonner` pour les notifications toast
