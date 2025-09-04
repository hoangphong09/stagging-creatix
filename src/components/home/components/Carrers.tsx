"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useCallback, useMemo } from "react";

import { useIsMobile } from "@/hooks/useIsMobile";

export default function Career() {
  const isMobile = useIsMobile();

  // Memoize jobs data to prevent unnecessary re-renders
  const jobs = useMemo(
    () => [
      {
        title: "AI Researcher – Applied Computer Vision",
        description:
          "Develop and optimize AI models in the field of image processing and computer vision.",
        link: "/careers/ai-researcher-applied-computer-vision",
      },
      {
        title: "iOS Developer (Mid/Senior)",
        description:
          "Develop modern iOS applications using SwiftUI, optimizing user experience with the latest technologies.",
        link: "/careers/ios-developer-mid-senior",
      },
      {
        title: "Social Media Content Creator",
        description:
          "Create short-form videos for TikTok, Instagram, Facebook, and YouTube to promote AI applications.",
        isMobileOnly: true,
        link: "/careers/cong-tac-vien-mang-xa-hoi",
      },
    ],
    []
  );

  // Memoize visible jobs based on mobile state
  const visibleJobs = useMemo(
    () => (isMobile ? jobs : jobs.slice(0, 2)),
    [isMobile, jobs]
  );

  // Memoize click handlers
  const handleViewAllJobs = useCallback(() => {
    window.location.href = "/careers";
  }, []);

  const handleLearnMore = useCallback((link: string) => {
    window.open(link, "_blank");
  }, []);

  return (
    <section
      id="hire-section"
      className="py-10 sm:py-20 relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: 'url("/carrer_bg_image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Airplane icon - flush left, vertically centered, responsive */}
      <div className="hidden md:flex absolute left-0 top-36 -translate-y-1/2 w-[300px] lg:w-[420px] xl:w-[570px] h-auto z-10">
        <img
          src="/home_carrer_left.png"
          alt="air_plane_icon"
          className="w-full h-auto object-contain rotate-[360deg]"
          style={{ minWidth: 0 }}
          loading="lazy"
        />
      </div>

      {/* Verify icon - flush right, vertically centered, responsive */}
      <div className="hidden md:flex absolute -right-1 top-[80%] -translate-y-1/2 w-[220px] lg:w-[320px] xl:w-[320px] h-auto z-40">
        <img
          src="/home_carrer_right.png"
          alt="verify_icon"
          className="h-auto object-contain rotate-[360deg]"
          style={{ minWidth: 0 }}
          loading="lazy"
        />
      </div>

      {/* Decorative blurred icon (optional, not flush) */}
      <div className="absolute top-0 right-0 w-[180px] lg:w-[320px] xl:w-[499px] h-auto opacity-20 pointer-events-none">
        <img
          src="/home_carrer_shadow.png"
          alt="decorative_shadow"
          className="w-full h-auto object-contain rotate-[-30deg] blur-sm"
          style={{ minWidth: 0 }}
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-full mx-auto px-4 sm:px-[120px] lg:px-[120px] xl:px-[120px] 2xl:px-[250px] ">
        {/* Header */}
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-[42px] sm:text-[48px] font-extrabold tracking-[3%] leading-[80px] font-inter bg-gradient-to-r from-[#392F50] to-[#7344C8] bg-clip-text text-transparent">
            Career Opportunities
          </h2>
          <p className="text-xl text-[#0C0C0C] font-normal opacity-80 max-w-3xl mx-auto leading-[30px] tracking-[5%] font-inter">
            We create the future with advanced AI solutions, delivering
            sustainable value to businesses and communities.
          </p>
          <Button
            className="bg-[#635BFF] hover:bg-[#635BFF]/90 text-white text-base font-bold px-6 py-3 h-12 rounded-xl font-inter tracking-[0.5%] leading-[100%]"
            onClick={handleViewAllJobs}
          >
            View all job vacancies
          </Button>
        </div>

        {/* Job Listings */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-full mx-auto">
          {visibleJobs.map((job, index) => (
            <div
              key={job.title + index}
              className="bg-white rounded-3xl border border-creatix-primary p-8 transition-shadow duration-300 space-y-8"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0C0C0C] font-inter tracking-[0.5%] leading-[100%]">
                  {job.title}
                </h3>
                <p className="text-base font-normal text-[#0C0C0C] font-inter tracking-[0.5%] leading-[25px]">
                  {job.description}
                </p>
              </div>

              <div
                className="flex items-center gap-2 text-creatix-primary font-semibold text-sm cursor-pointer hover:gap-3 transition-all"
                onClick={() => handleLearnMore(job.link)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleLearnMore(job.link);
                  }
                }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}

          {/* Single card for the third job to center it */}
          <div className="hidden sm:flex lg:col-span-2 justify-center">
            <div
              className="bg-white rounded-3xl border border-creatix-primary shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col -ml-px w-1/2"
              style={{ padding: "32px 32px 32px 23px" }}
            >
              <div className="space-y-3 mx-auto">
                <h3 className="text-xl font-bold text-creatix-gray-900">
                  Social Media Content Creator
                </h3>
                <p className="text-base text-creatix-gray-900 leading-relaxed font-light">
                  Create short-form videos for TikTok, Instagram, Facebook, and
                  YouTube to promote AI applications.
                </p>
              </div>

              <div
                className="flex items-center gap-2 text-creatix-primary font-semibold text-sm cursor-pointer hover:gap-3 transition-all mt-8"
                onClick={() =>
                  handleLearnMore("/careers/cong-tac-vien-mang-xa-hoi")
                }
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleLearnMore("/careers/cong-tac-vien-mang-xa-hoi");
                  }
                }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
