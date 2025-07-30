import FeaturedProducts from "./components/FeaturedProducts";
import Career from "./components/Carrers";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <Services />
      <Career />
      <CTA />
    </div>
  );
}
