
import React from "react";
import Career from "./components/Carrers";
import CTA from "./components/CTA";
import Hero from "./components/Hero";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="relative z-10">
        <Hero />
      </div>
      <Career />
      <CTA />
    </div>
  );
};

export default React.memo(HomePage);
