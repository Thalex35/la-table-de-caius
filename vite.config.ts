import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Plain Vite + React setup — no meta-framework, no SSR.
// Just a static single-page site that builds to /dist and can be
// hosted anywhere (Netlify, Vercel static, an S3 bucket, cPanel, etc.)
export default defineConfig({
  base: '/la-table-de-caius/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // lets us write imports like `@/lib/utils` instead of long relative paths
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
