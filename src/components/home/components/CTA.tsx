"use client";

import { Button } from "@/components/ui/button";
import { APP_CONFIG } from "@/constants";
import { useCallback } from "react";

export default function CTA() {
  const partners = [
    "/partner/applovin_color.png",
    "/partner/admob_color.png",
    "/partner/adjust_color.png",
    "/partner/liffoff_color.png",
    "/partner/unity_color.png",
    "/partner/pangle_color.png",
  ];

  const handleContactNow = useCallback(() => {
    window.location.href = `mailto:${APP_CONFIG.company.email}`;
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Content */}
        <div className="text-center mb-16 space-y-8 flex flex-col items-center justify-center gap-10">
          <div className="space-y-4 flex flex-col items-center justify-center gap-4">
            <h2 className="text-[24px] font-extrabold text-[#0c0c0c] font-inter leading-[100%] tracking-[1px]">
              Our Partners
            </h2>
          </div>

          <div className="relative overflow-hidden pb-20">
            <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20 px-2">
              {partners.map((logo, index) => (
                <img
                  key={`partner-${index}`}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-14 sm:h-16 w-auto object-contain opacity-100 hover:opacity-100 transition-opacity flex-shrink-0"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          <div className="px-10 py-10 bg-gradient-to-r from-[#F1EBFF] to-[#EEF5FC] rounded-3xl max-w-full w-full mx-auto flex flex-col items-center justify-center gap-10">
            <span className="font-extrabold bg-gradient-to-r from-[#392F50] to-[#7344C8] bg-clip-text text-transparent font-inter text-[48px] leading-[80px] tracking-[0.025px]">
              Ready to experience?
            </span>
            <p className="text-[20px] font-inter text-[#383838] font-medium max-w-3xl mx-auto leading-[30px] tracking-[1px]">
              "Request a demo to explore how {APP_CONFIG.company.name} can help
              you."
            </p>
            <Button
              className="bg-[#635BFF] hover:bg-[#635BFF]/90 text-white font-bold px-8 py-3 h-12 w-auto rounded-xl"
              onClick={handleContactNow}
            >
              Contact Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
