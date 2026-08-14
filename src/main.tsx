import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Global styles: Tailwind + our custom design tokens (colors, fonts, the
// "reveal on scroll" utility, etc). Has to be imported once, here at the top.
import "./styles.css";

import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
