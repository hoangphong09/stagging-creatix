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
    title: "Cộng Tác Viên Mạng Xã Hội",
    location: "Hà Nội",
    type: "Linh hoạt thời gian",
    slug: "cong-tac-vien-mang-xa-hoi",
  },
];

export default function CareersPage() {
  const router = useRouter();

  const handleJobClick = (slug: string) => {
    router.push(`/careers/${slug}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f8fafc] to-white relative overflow-hidden">
      <img
        src="/hire_yellow_shadow_image.svg"
        alt="creatix hiring shadow"
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none select-none absolute left-[10rem] top-[1rem] w-[25vw] max-w-[700px] z-0"
      />
      <img
        src="/hire_purple_shadow_image.svg"
        alt="creatix hiring shadow"
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none select-none absolute right-[-15vw] top-[-10vw] w-[40vw] max-w-[700px] z-0"
      />
      <main className="flex-1 flex flex-col items-center px-4 py-10">
        <div className="max-w-3xl w-full flex flex-col items-center">
          <h1 className="text-[36px] sm:text-[64px] font-extrabold text-center text-creatix-gray-900 mb-1 mt-16">
            Gia nhập đội ngũ
          </h1>
          <h2 className="text-[36px] sm:text-[64px] bg-gradient-primary bg-clip-text text-transparent font-extrabold mb-16 text-center">
            Creatix Technology
          </h2>
          <div className="w-full flex justify-center mb-10">
            <img
              src="/hire_main_image.png"
              alt="Creatix Hiring"
              loading="lazy"
              style={{
                maxWidth: 1444,
                height: "auto",
                minHeight: 380,
              }}
            />
          </div>
          <section className="w-full max-w-[720px] mx-auto mt-16 mb-20">
            <h3 className="text-[36px] sm:text-[48px] font-bold text-creatix-gray-900 text-center mb-3 leading-tight">
              Các vị trí đang tuyển
            </h3>
            <p className="text-center text-base sm:text-[20px] text-gray-400 mb-16 font-normal">
              “Khám phá cơ hội nghề nghiệp cùng môi trường công nghệ năng động.”
            </p>
            <div className="space-y-6 mb-10">
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
                      Địa điểm:{" "}
                      <span className="text-[#008CFF]">{job.location}</span> |{" "}
                      <span className="text-[#008CFF]">{job.type}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleJobClick(job.slug)}
                    className="mt-4 md:mt-0 text-[#6366F1] font-medium hover:underline whitespace-nowrap text-base"
                  >
                    Tìm hiểu thêm
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center text-gray-700 text-base font-bold">
              Không tìm thấy vị trí phù hợp? Gửi CV của bạn cho chúng tôi{" "}
              <Link href="#" className="text-[#6366F1] underline font-medium">
                tại đây
              </Link>
              .
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
