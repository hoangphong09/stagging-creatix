"use client";
import React, { useEffect, useState } from "react";

// Slide data: each slide has its own image and text content
const phoneSlides = [
  {
    id: 1,
    img: "/home_hero_slider_1.svg",
    badgeTop: (
      <>
        Biến khoảnh khắc thành <br />
        nghệ thuật
      </>
    ),
    badgeBottom: (
      <>
        Khám phá sức mạnh chỉnh ảnh <br />
        bằng AI.
      </>
    ),
  },
  {
    id: 2,
    img: "/home_hero_slider_2.svg",
    badgeTop: (
      <>
        Erase distractions. Transform your <br />
        video into stunning visuals.
      </>
    ),
    badgeBottom: (
      <>
        Turn real footage into <br />
        animated stories.
      </>
    ),
  },
  {
    id: 3,
    img: "home_hero_slider_1.svg",
    badgeTop: (
      <>
        Biến khoảnh khắc thành <br />
        nghệ thuật
      </>
    ),
    badgeBottom: (
      <>
        Khám phá sức mạnh chỉnh ảnh <br />
        bằng AI.
      </>
    ),
  },
];

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  // For smooth fade transition
  const [show, setShow] = useState(true);
  const sliderStep = [0, 1, 2];
  const activeSliderStep = 1;
  useEffect(() => {
    setShow(false);
    const timeout = setTimeout(() => setShow(true), 100); // fade out then in
    return () => clearTimeout(timeout);
  }, [activeStep]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % phoneSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="intro-section"
      className="relative bg-gradient-to-br from-gray-50 to-purple-50 overflow-hidden"
      style={{ minHeight: "837px" }}
    >
      {/* Decorative Left Cover */}
      <img
        src="/home_hero_left_cover_1.svg"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute left-0 bottom-10 w-[360px] lg:w-[480px] xl:w-[520px] h-auto z-20 pointer-events-none select-none"
        style={{ minWidth: 0 }}
      />

      {/* Decorative Wavy Background */}
      <img
        src="/home_hero_wavy_bg.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none select-none"
        style={{ objectFit: "cover" }}
      />

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto pt-32 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent font-vietnam-pro">
                  Creatix Technology
                </span>
                <br />
                <span className="text-creatix-gray-900 font-inter text-3xl lg:text-4xl">
                  "Tiên phong trong lĩnh vực"
                </span>
              </h1>

              <p className="text-lg text-creatix-gray-900 leading-relaxed max-w-lg">
                <span className="font-bold">Creatix Technology</span> chuyên
                cung cấp dịch vụ và giải pháp công nghệ hiện đại, giúp đơn giản
                hóa quy trình và nâng cao hiệu quả kinh doanh.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="space-y-6">
              <p className="text-sm font-bold text-creatix-gray-900 uppercase tracking-wide">
                Tải ngay để trải nghiệm thử dịch vụ của chúng tôi
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Google Play */}
                <div className="flex items-center gap-3 bg-creatix-primary px-4 py-3 rounded-xl hover:opacity-90 cursor-pointer">
                  <img
                    src="/chplay.png"
                    alt="Google Play"
                    className="w-8 h-8"
                  />
                  <div className="text-white">
                    <div className="text-sm font-semibold">Get it on</div>
                    <div className="text-lg font-bold">Google Play</div>
                  </div>
                </div>

                {/* App Store */}
                <div className="flex items-center gap-3 bg-creatix-gray-900 px-4 py-3 rounded-xl hover:opacity-90 cursor-pointer">
                  <img
                    src="appstore.png"
                    alt="App Store"
                    className="w-8 h-8"
                  />
                  <div className="text-white">
                    <div className="text-sm font-semibold">Download on the</div>
                    <div className="text-lg font-bold">App Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Phone: Absolutely positioned, flush right and bottom (now flush with partner section) */}
      <div
        className={
          phoneSlides[activeStep].id === 2
            ? "absolute right-28 bottom-[15.85rem] flex items-end pointer-events-none z-20"
            : "absolute right-0 bottom-[14.85rem] flex items-end pointer-events-none z-20"
        }
      >
        <div className="relative w-[320px] sm:w-[420px] md:w-[520px] lg:w-[600px] xl:w-[700px]">
          {/* Hand Image with smooth transition */}
          <div
            className={`transition-opacity duration-500 ${
              show ? "opacity-100" : "opacity-0"
            }`}
            key={activeStep}
          >
            <img
              src={phoneSlides[activeStep].img}
              alt="Mobile App Mockup"
              className="w-full h-auto drop-shadow-2xl"
              style={{ display: "block" }}
            />
            {/* Badge - Top Right */}
            <div
              className={
                phoneSlides[activeStep].id === 2
                  ? "absolute -top-12 right-2 bg-gradient-to-b from-purple-100 to-blue-100 border border-purple-300 rounded-xl p-4 shadow-lg pointer-events-auto"
                  : "absolute -top-3 right-28 bg-gradient-red-light border border-red-200 rounded-xl p-4 shadow-lg pointer-events-auto"
              }
            >
              <p
                className={
                  phoneSlides[activeStep].id === 2
                    ? "text-sm font-medium bg-gradient-to-b from-purple-600 to-blue-600 bg-clip-text text-transparent leading-6"
                    : "text-sm font-medium bg-gradient-red bg-clip-text text-transparent leading-6"
                }
              >
                {phoneSlides[activeStep].badgeTop}
              </p>
            </div>
            {/* Badge - Bottom Left */}
            <div
              className={
                phoneSlides[activeStep].id === 2
                  ? "absolute bottom-40 left-20 bg-gradient-to-b from-purple-100 to-blue-100 border border-purple-300 rounded-xl p-4 shadow-lg pointer-events-auto"
                  : "absolute bottom-40 -left-1 bg-gradient-red-light border border-red-200 rounded-xl p-4 shadow-lg pointer-events-auto"
              }
            >
              <p
                className={
                  phoneSlides[activeStep].id === 2
                    ? "text-sm font-medium bg-gradient-to-b from-purple-600 to-blue-600 bg-clip-text text-transparent leading-6"
                    : "text-sm font-medium bg-gradient-red bg-clip-text text-transparent leading-6"
                }
              >
                {phoneSlides[activeStep].badgeBottom}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="step-group absolute top-[20rem] right-[2rem] transform -translate-y-1/2 z-30 flex flex-col gap-4">
        {phoneSlides.map((slide, index) => (
          <StepIcon
            key={slide.id}
            active={activeStep === index}
            clickable={true}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </div>
      {/* Partner Logos Section */}
      <section className="w-screen relative z-10 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-primary py-12 mt-[-9px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white tracking-wide">
              Các đối tác của chúng tôi
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20 px-2">
            {[
              {
                alt: "Unity",
                src: "/partner/unity.png",
              },
              {
                alt: "Pangle",
                src: "/partner/pangle.png",
              },
              {
                alt: "Liftoff",
                src: "/partner/liftoff.png",
              },
              {
                alt: "AppLovin",
                src: "/partner/applovin.png",
              },
              {
                alt: "AdMob",
                src: "/partner/admob.png",
              },
              {
                alt: "Adjust",
                src: "/partner/adjust.png",
              },
            ].map((partner, idx) => (
              <img
                key={idx}
                src={partner.src}
                alt={partner.alt}
                className="max-h-20 lg:max-h-24 object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

// StepIcon component
function StepIcon({
  active,
  onClick,
  clickable = false,
}: {
  active: boolean;
  onClick?: () => void;
  clickable?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`transition-all duration-300 flex items-center justify-center rounded-2xl w-16 h-16 mb-0
        ${
          active
            ? "border-2 border-[#635BFF] shadow-[0_0_0_6px_rgba(99,91,255,0.15)] bg-[rgba(99,91,255,0.2)]"
            : "border-2 border-gray-200 bg-gray-100 opacity-60"
        }
        ${clickable ? "cursor-pointer pointer-events-auto" : ""}
      `}
        style={{
          boxShadow: active ? "0 0 16px 4px rgba(99,91,255,0.25)" : undefined,
        }}
        onClick={clickable && onClick ? onClick : undefined}
      >
        <img
          src="/home_slider_logo.png"
          alt="Eraser Icon"
          className={`w-8 h-8 object-contain ${active ? "" : "opacity-60"}`}
          draggable={false}
        />
      </div>
      <div
        className={`h-8 w-px border-l-2 border-dashed mb-2 mt-5 ${
          active ? "border-[#635BFF]" : "border-gray-300"
        }`}
      />
    </div>
  );
}
