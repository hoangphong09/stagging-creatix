"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { PRODUCTS } from "@/constants/product";
import { SERVICES } from "@/constants/service";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { ProductCard } from "@/components/ui/ProductCard";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { COMMON_STYLES } from "@/constants";

interface PhoneSlide {
  id: number;
  img: string;
  badgeTop: React.ReactNode;
  badgeBottom: React.ReactNode;
}

// Slide data: each slide has its own image and text content
const PHONE_SLIDES: PhoneSlide[] = [
  {
    id: 2,
    img: "/home_hero_slider_2.png",
    badgeTop: (
      <>
        Turning Precious Life Moments
        <br />
        into Timeless Works of Art
      </>
    ),
    badgeBottom: (
      <>
        Discover the power of
        <br />
        photo editing with AI.
      </>
    ),
  },
  {
    id: 1,
    img: "/home_hero_slider_1.png",
    badgeTop: (
      <>
        Eliminate Distractions. Turn your <br />
        into stunning visuals.
      </>
    ),
    badgeBottom: (
      <>
        Turn real footage into animated
        <br />
        stories with creativity.
      </>
    ),
  },
];

interface StepIconProps {
  stepIndex: number;
  active: boolean;
  onClick?: () => void;
  clickable?: boolean;
}

// StepIcon component
const StepIcon: React.FC<StepIconProps> = ({
  stepIndex,
  active,
  onClick,
  clickable = false,
}) => (
  <div className="flex flex-col items-center">
    <div
      className={`transition-all duration-300 flex items-center justify-center rounded-2xl w-20 h-20 mb-0
        ${clickable ? "cursor-pointer pointer-events-auto" : ""}
      `}
      onClick={clickable && onClick ? onClick : undefined}
    >
      <img
        src={stepIndex === 0 ? "/slider_1.png" : "/slider_2.png"}
        alt="Eraser Icon"
        className={`w-full h-full object-contain ${active ? "" : "opacity-30"}`}
        draggable={false}
        loading="lazy"
      />
    </div>
    <div
      className={`h-8 w-px border-l-2 border-dashed mb-2 mt-5 ${
        active ? "border-[#635BFF]" : "border-gray-300"
      }`}
    />
  </div>
);

const Hero = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [show, setShow] = useState(true);

  // Memoize slide data to prevent unnecessary re-renders
  const currentSlide = useMemo(() => PHONE_SLIDES[activeStep], [activeStep]);

  // For smooth fade transition
  useEffect(() => {
    setShow(false);
    const timeout = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timeout);
  }, [activeStep]);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PHONE_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Memoize step click handler
  const handleStepClick = useCallback((index: number) => {
    setActiveStep(index);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="intro-section"
        className="relative overflow-hidden"
        style={{ minHeight: "837px" }}
      >
        {/* Main Content */}
        <div className="relative z-30 mx-auto pt-2 px-4 sm:px-[120px] lg:px-[120px] xl:px-[120px] 2xl:px-[250px] sm:pt-24 xl:max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[600px]">
            {/* Left */}
            <div className="space-y-8">
              <div className="space-y-6">
                <span className="text-[56px] font-extrabold leading-[65px] tracking-[0.025px]">
                  <span
                    className={`font-extrabold ${COMMON_STYLES.gradients.primary} bg-clip-text text-transparent font-vietnam-pro`}
                  >
                    Creatix Technology
                  </span>
                  <br />
                  <span className="text-creatix-gray-900 font-inter text-[32px] sm:text-[36px] leading-[65px] tracking-[0.025px]">
                    Pioneering in the field
                  </span>
                </span>

                <p className="text-[16px] sm:text-[18px] font-inter text-[#060017] leading-[35px] font-normal tracking-[1px]">
                  <span className="font-bold">Creatix Technology </span>
                  specializes in providing modern technology services and
                  solutions, helping to simplify processes and improve business
                  efficiency.
                </p>
              </div>

              {/* Download Buttons */}
              <div className="space-y-6">
                <p className="text-base sm:text-base font-bold text-[#0C0C0C] leading-[25px] font-inter uppercase tracking-wide">
                  Download now to experience our services
                </p>
                <div className="flex flex-row gap-6">
                  <DownloadButton platform="google-play" />
                  <DownloadButton platform="app-store" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Phone: Absolutely positioned, flush right and bottom */}
        <div className="absolute right-14 top-[1.5rem] items-end pointer-events-none z-20 hidden sm:flex">
          <div className="relative w-[320px] sm:w-[420px] md:w-[520px] lg:w-[600px] xl:w-[700px]">
            {/* Hand Image with smooth transition */}
            <div
              className={`transition-opacity duration-500 ${
                show ? "opacity-100" : "opacity-0"
              }`}
              key={activeStep}
            >
              <img
                src={currentSlide.img}
                alt="Mobile App Mockup"
                className="w-full h-full drop-shadow-2xl"
                style={{ display: "block" }}
                loading="lazy"
              />

              {/* Badge - Top Right */}
              <div
                className={
                  currentSlide.id === 2
                    ? "absolute top-10 right-28 bg-gradient-to-b from-[#f3f3ff] to-[#f0f6ff] border border-purple-300 rounded-xl p-4 shadow-lg pointer-events-auto"
                    : "absolute top-10 right-28 bg-gradient-red-light border border-red-200 rounded-xl p-4 shadow-lg pointer-events-auto"
                }
              >
                <p
                  className={
                    currentSlide.id === 2
                      ? "text-sm font-medium bg-gradient-to-b from-[#7839FF] to-[#5199E1] bg-clip-text text-transparent leading-6"
                      : "text-sm font-medium bg-gradient-to-b from-[#FF3838] to-[#FF3368] bg-clip-text text-transparent leading-6"
                  }
                >
                  {currentSlide.badgeTop}
                </p>
              </div>

              {/* Badge - Bottom Left */}
              <div
                className={
                  currentSlide.id === 2
                    ? "absolute bottom-40 -left-1 bg-gradient-to-b from-[#f3f3ff] to-[#f0f6ff] border border-purple-300 rounded-xl p-4 shadow-lg pointer-events-auto"
                    : "absolute bottom-40 -left-1 bg-gradient-red-light border border-red-200 rounded-xl p-4 shadow-lg pointer-events-auto"
                }
              >
                <p
                  className={
                    currentSlide.id === 2
                      ? "text-sm font-medium bg-gradient-to-b from-[#7839FF] to-[#5199E1] bg-clip-text text-transparent leading-6"
                      : "text-sm font-medium bg-gradient-red bg-clip-text text-transparent leading-6"
                  }
                >
                  {currentSlide.badgeBottom}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step indicators */}
        <div className="step-group absolute top-[20rem] right-[2rem] transform -translate-y-1/2 z-30 flex-col gap-4 hidden sm:flex">
          {PHONE_SLIDES.map((_, index) => (
            <StepIcon
              key={index}
              stepIndex={index}
              active={activeStep === index}
              clickable={true}
              onClick={() => handleStepClick(index)}
            />
          ))}
        </div>
      </section>

      {/* PRODUCT SECTION - Separated from Hero */}
      <section className="relative z-10 -mt-16 2xl:px-[80px] sm:px-[40px]">
        <div className="mx-auto px-8 sm:px-20 py-20 shadow-sm rounded-3xl overflow-hidden bg-white">
          {/* Header */}
          <div className="text-center mb-16 space-y-4 z-10 px-2 sm:px-64 flex justify-center flex-col items-center">
            <div className="inline-flex items-center px-3 py-1 bg-[#635BFF1A] rounded-lg">
              <span className="text-sm font-inter font-semibold text-[#635BFF] tracking-[0.5px] leading-[25px]">
                Outstanding product
              </span>
            </div>
            <p
              className={`text-[36px] sm:text-[48px] font-extrabold text-[#0C0C0C] tracking-[0.025px] leading-[80px] font-inter`}
            >
              Feature Products
            </p>
            <p className="font-inter text-[16px] sm:text-[20px] text-[#383838] font-medium opacity-80 leading-[30px] tracking-[1px]">
              "We carefully select the best products – combining practicality,
              great user experience, and simplicity in every action."
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-3 gap-8 2xl:px-[90px]" id="product-section">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.title + index} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-full mt-32 mx-auto px-4 sm:px-[120px] lg:px-[120px] xl:px-[120px] 2xl:px-[250px] mb-20">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-8">
          <div className="space-y-2">
            <div className="inline-flex items-center px-3 py-1 bg-[#635BFF1A] rounded-lg mb-2">
              <span className="text-sm font-inter font-semibold text-[#635BFF] tracking-[0.5px] leading-[25px]">
                Our AI Services
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[48px] font-extrabold text-[#0C0C0C] tracking-[3%] leading-[80px] font-inter">
              We provide AI services
            </h2>
          </div>

          <p className="text-base font-inter font-normal text-[#383838] opacity-80 max-w-lg leading-[30px] tracking-[5%] sm:mt-10">
            Optimize performance with AI services, analytics, and modern
            application development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8" id="service-section">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title + index} service={service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default React.memo(Hero);
