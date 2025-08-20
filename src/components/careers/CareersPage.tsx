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
      <main className="flex-1 flex flex-col items-center px-4 py-10">
        <div className="max-w-[90rem] w-full flex flex-col items-center">
          <h1 className="text-[36px] sm:text-[64px] font-extrabold text-center text-creatix-gray-900 mb-1 mt-16">
            Join the Creatix
          </h1>
          <h2 className="text-[36px] sm:text-[64px] bg-gradient-to-r from-[#392F50] to-[#7344C8] bg-clip-text text-transparent font-extrabold mb-16 text-center">
            Creatix Technology
          </h2>
          <div className="w-full flex justify-center mb-10">
            <img
              src="/career_image.png"
              alt="Creatix Hiring"
              loading="lazy"
              style={{
                maxWidth: 1444,
                height: "auto",
                minHeight: 380,
              }}
            />
          </div>
          <section className="w-full max-w-[90rem] mx-auto mt-16 mb-20">
            <div className="text-center mb-16 space-y-4 z-10 px-2 sm:px-64 flex justify-center flex-col items-center">
              <div className="inline-flex items-center px-3 py-1 bg-[#635BFF1A] rounded-lg">
                <span className="text-sm font-semibold text-creatix-primary tracking-wide">
                  Recruitment
                </span>
              </div>
              <p className="text-[36px] sm:text-[56px] font-extrabold bg-gradient-to-r from-[#392F50] to-[#7344C8] bg-clip-text text-transparent ">
                Current positions
              </p>
              <p className="font-inter text-base sm:text-xl text-[#383838] font-medium opacity-80">
                “Explore career opportunities in a dynamic technology
                environment.”
              </p>
            </div>
            <div className="space-y-6 mb-10 w-full sm:w-1/2 mx-auto">
              {JOBS.map((job) => (
                <div
                  key={job.title}
                  className="flex flex-col md:flex-row md:items-center justify-between border border-[#7B61FF] rounded-2xl px-8 py-7 bg-white hover:shadow-lg transition-all duration-200"
                  style={{ minHeight: 96 }}
                >
                  <div>
                    <div className="font-bold text-lg text-creatix-gray-900 mb-1">
                      {job.title}
                    </div>
                    <div className="text-base text-gray-700">
                      Location:{" "}
                      <span className="text-[#008CFF]">{job.location}</span> |{" "}
                      <span className="text-[#008CFF]">{job.type}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleJobClick(job.slug)}
                    className="mt-4 md:mt-0 text-[#6366F1] font-medium hover:underline whitespace-nowrap text-base"
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center text-gray-700 text-lg font-semibold">
              Can't find a suitable position? Send us your CV {""}
              <Link href="#" className="text-[#6366F1] underline font-medium">
                here.
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
