# La Table de Caïus — Restaurant Website

Welcome to the official website for **La Table de Caïus**, a premium restaurant located in Port-au-Prince, Haiti. This repository contains the modern, fast-loading web application built with React and Vite.

## 📖 Project Description

This is a showcase website (also called a "business website" or "brochure site") for the La Table de Caïus restaurant. It features:

- **Restaurant Information** - Details about the restaurant, its history, and mission
- **Menu Section** - Browse the restaurant's offerings and specialties
- **Photo Gallery** - Visual showcase of the restaurant's ambiance, dishes, and dining experience
- **Reservation System** - Allow customers to book tables online
- **Events Page** - Information about special events and promotions
- **Contact & Location** - Easy ways for customers to reach the restaurant
- **Customer Testimonials** - Reviews and feedback from satisfied diners
- **Frequently Asked Questions** - Common questions answered

## 🛠️ Technology Stack

- **Frontend Framework:** React 18+ with TypeScript
- **Build Tool:** Vite (extremely fast bundler)
- **Styling:** CSS with modern features
- **Deployment:** Static Site (no server required)
- **Type Safety:** Full TypeScript support

This is a **100% static website** - after building, it can be deployed to any hosting platform without needing a backend server.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed on your machine
- npm or yarn package manager

### Installation & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Thalex35/la-table-de-caius.git
   cd latable-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   - The terminal will display a local URL (typically `http://localhost:5173`)
   - Click the link or copy it into your browser to see the website live

### Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder. This folder contains all the files you need to upload to your hosting provider.

**Deployment Options:**
- Netlify
- Vercel
- GitHub Pages
- Traditional web hosting (cPanel, FTP, etc.)
- Any static file hosting service

## 📸 Adding Your Restaurant Photos

The website includes placeholder images to show the layout. To customize the website with your own photos, follow these steps:

### Step 1: Add Your Photos
1. Prepare your restaurant photos (e.g., restaurant interior, veranda, signature dishes, ambiance)
2. Place them in the `src/assets/photos/` folder
3. Examples: `veranda.jpg`, `plat-tassot.jpg`, `dining-room.jpg`, etc.

### Step 2: Update the Photo References
1. Open the file `src/lib/restaurant.ts`
2. Find the `img` object that contains all image references
3. Replace placeholder references with your actual photos

**Example:**
```typescript
// Before (with placeholder):
import placeholderImg from "@/lib/placeholder-images";
export const img = {
  veranda: placeholderImg.veranda,
};

// After (with your photos):
import veranda from "@/assets/photos/veranda.jpg";
import signature_dish from "@/assets/photos/plat-tassot.jpg";

export const img = {
  veranda: veranda,
  signature_dish: signature_dish,
};
```

### Photo Tips
- Use high-quality images (at least 1200px width)
- Compress images for faster loading (tools: TinyPNG, ImageOptim)
- Use consistent image dimensions within each section
- Portrait photos work best for gallery items

## 📁 Project Structure

```
latable-react/
├── src/
│   ├── components/
│   │   ├── site/           # Main restaurant pages
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Events.tsx
│   │   │   ├── Faq.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── MenuSection.tsx
│   │   │   ├── Reservation.tsx
│   │   │   └── ...
│   │   └── ui/             # Reusable UI components
│   ├── assets/
│   │   └── photos/         # Your restaurant photos
│   ├── lib/
│   │   ├── restaurant.ts   # Restaurant data & photos
│   │   └── utils.ts        # Helper functions
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Entry point
├── public/                 # Static files (robots.txt, etc.)
├── package.json            # Dependencies & scripts
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

## ✨ Key Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Fast Performance** - Built with Vite for instant page loads
- **SEO Optimized** - Ready for search engine optimization
- **No Backend Required** - 100% static, easier and cheaper to host
- **TypeScript** - Type-safe code for fewer bugs
- **Modern React** - Latest React practices and hooks

## 📝 Customization Guide

### Update Restaurant Information
- Edit `src/lib/restaurant.ts` to update business hours, contact info, menu items, and more
- All restaurant data is centralized in this file

### Modify Styling
- Edit `src/styles.css` for global styles
- Component-level styles can be added directly in component files

### Add New Pages or Sections
- Create new components in `src/components/site/`
- Import them in `src/App.tsx`
- Add routing logic as needed

## 🌐 Deployment Instructions

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your GitHub account to Netlify
3. Select this repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### Deploy to Vercel
1. Push your code to GitHub
2. Import your project to Vercel
3. It will auto-detect Vite and configure settings
4. Click "Deploy"

### Deploy to Traditional Hosting
1. Run `npm run build`
2. Upload the `dist/` folder contents via FTP or your hosting control panel
3. Done!

## 🤝 Contributing

If you'd like to improve this website:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Support & Contact

For issues, questions, or suggestions about this website project, please open an issue on GitHub.

---

**La Table de Caïus** — Enjoy fine dining in Port-au-Prince 🍽️

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
