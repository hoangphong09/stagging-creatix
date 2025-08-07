"use client";

import { Button } from "@/components/ui/button";

export default function CTA() {
  const partners = [
    "/partner/unity_color.png",
    "/partner/pangle_color.png",
    "/partner/liffoff_color.png",
    "/partner/admob_color.png",
    "/partner/adjust_color.png",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Content */}
        <div className="text-center mb-16 space-y-8 flex flex-col items-center justify-center gap-6">
          <div className="space-y-4 flex flex-col items-center justify-center gap-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-creatix-gray-900">
              Sẵn sàng trải nghiệm?
            </h2>
            <p className="text-base sm:text-lg font-semibold bg-gradient-purple bg-clip-text text-transparent">
              "Yêu cầu một buổi demo để khám phá cách Creatix Technology có thể
              giúp bạn."
            </p>
          </div>

          <Button
            className="bg-gradient-purple hover:opacity-90 text-white font-bold px-8 py-3 h-12 w-auto rounded-xl"
            onClick={() =>
              (window.location.href = "mailto:admin@creatixtechnology.com")
            }
          >
            Liên hệ ngay
          </Button>
        </div>

        {/* Static partners row */}
        <div className="relative overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20 px-2">
            {partners.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-14 sm:h-16 w-auto object-contain opacity-100 hover:opacity-100 transition-opacity flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
