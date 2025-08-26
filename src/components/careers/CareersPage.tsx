"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const JOBS = [
  {
    title: "AI Researcher – Applied Computer Vision",
    location: "Long Biên, Hà Nội",
    type: "Full-time",
    slug: "ai-researcher-applied-computer-vision",
  },
  {
    title: "iOS Developer (Mid/Senior)",
    location: "Long Biên, Hà Nội",
    type: "Full-time",
    slug: "ios-developer-mid-senior",
  },
  {
    title: "Social Media Content Creator",
    location: "Hà Nội",
    type: "Flexible",
    slug: "cong-tac-vien-mang-xa-hoi",
  },
];

export default function CareersPage() {
  const router = useRouter();

  const handleJobClick = (slug: string) => {
    router.push(`/careers/${slug}`);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <main className="flex-1 flex flex-col items-center px-4 sm:px-[120px] lg:px-[120px] xl:px-[120px] 2xl:px-[250px] py-10">
        <div className="max-w-full w-full flex flex-col items-center">
          <h1 className="text-[36px] sm:text-[64px] font-extrabold text-center font-vietnam-pro text-[#0c0c0c] tracking-[0.025px] mt-20">
            Join the Creatix
          </h1>
          <h2 className="text-[36px] sm:text-[64px] bg-gradient-to-r from-[#392F50] to-[#7344C8] bg-clip-text text-transparent font-extrabold font-vietnam-pro tracking-[0.025px] mb-8 text-center">
            Creatix Technology
          </h2>
          <span className="text-[20px] text-[#383838] font-inter font-medium leading-[30px] text-center max-w-[49rem] mb-24">
            “Join the Creatix team today – Where your ideas come to life and
            your career grows without limits.”
          </span>
          <div className="w-full flex justify-center mb-10">
            <img
              src="/career_image.png"
              alt="Creatix Hiring"
              loading="lazy"
              style={{
                height: "auto",
                minHeight: 380,
              }}
              className="max-w-full w-full"
            />
          </div>
          <section className="w-full max-w-full mx-auto mt-16 mb-20">
            <div className="text-center mb-16 space-y-4 z-10 px-2 sm:px-64 flex justify-center flex-col items-center">
              <div className="inline-flex items-center px-3 py-2 bg-[#635BFF1A] rounded-[8px]">
                <span className="text-[14px] font-inter font-semibold text-[#635BFF] tracking-[0.025px] leading-[100%]">
                  Recruitment
                </span>
              </div>
              <p className="text-[36px] sm:text-[48px] font-extrabold text-[#0C0C0C] font-inter tracking-[0.025px] leading-[80px]">
                Current positions
              </p>
              <p className="font-inter text-base sm:text-[20px] text-[#383838] opacity-85 font-medium leading-[30px] tracking-[1px]">
                “Explore career opportunities in a dynamic technology
                environment.”
              </p>
            </div>
            <div className="space-y-6 mb-10 w-full sm:w-1/2 mx-auto">
              {JOBS.map((job) => (
                <div
                  key={job.title}
                  className="flex flex-col md:flex-row md:items-center justify-between border border-[#635BFF] rounded-3xl px-8 py-7 bg-white hover:shadow-lg transition-all duration-200"
                  style={{ minHeight: 96 }}
                >
                  <div>
                    <div className="font-inter font-bold text-[20px] text-[#0C0C0C] leading-[100%] tracking-[0.0025px] mb-4">
                      {job.title}
                    </div>
                    <div className="font-inter text-[16px] font-normal text-[#0C0C0C] leading-[25px] tracking-[0.0025px]">
                      Location:{" "}
                      <span className="text-[#008CFF]">{job.location} | </span>
                      <span className="text-[#008CFF]">{job.type}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleJobClick(job.slug)}
                    className="mt-4 md:mt-0 text-[#635BFF] font-semibold font-inter text-[14px] leading-[100%] tracking-[1px] hover:underline whitespace-nowrap"
                  >
                    Learn more
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center font-inter text-[18px] font-semibold text-[#383838] leading-[35px] tracking-[0.025px]">
              Can't find a suitable position? Send us your CV {""}
              <Link href="#" className="text-[#635BFF] underline font-semibold">
                here.
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
