import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MenuSection } from "@/components/site/MenuSection";
import { Gallery } from "@/components/site/Gallery";
import { Reservation } from "@/components/site/Reservation";
import { Events } from "@/components/site/Events";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Toaster } from "@/components/ui/sonner";

// This is a one-page site: every "route" is just an anchor (#menu, #contact,
// etc.) scrolling to a section below. No react-router needed for something
// this simple — the header/footer links just point at the section ids.
function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <Reservation />
        <Events />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingActions />

      {/* Toasts for the reservation form confirmation message */}
      <Toaster position="top-center" richColors />
    </>
  );
}

export default App;
