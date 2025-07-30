"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Career() {
  const jobs = [
    {
      title: "AI Researcher – Applied Computer Vision",
      description:
        "Phát triển và tối ưu các mô hình AI trong lĩnh vực xử lý ảnh và thị giác máy tính.",
    },
    {
      title: "iOS Developer (Mid/Senior)",
      description:
        "Phát triển ứng dụng iOS hiện đại sử dụng SwiftUI, tối ưu trải nghiệm người dùng với công nghệ mới nhất.",
    },
    {
      title: "Cộng Tác Viên Mạng Xã Hội",
      description:
        "Sáng tạo nội dung video ngắn cho TikTok, Instagram,Facebook và YouTube để quảng bá ứng dụng AI.",
    },
  ];

  return (
    <section id="hire-section" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Airplane icon - flush left, vertically centered, responsive */}
      <div className="hidden md:flex absolute left-0 top-36 -translate-y-1/2 w-[300px] lg:w-[420px] xl:w-[570px] h-auto z-10">
        <img
          src="/home_carrer_left.png"
          alt=""
          className="w-full h-auto object-contain rotate-[360deg]"
          style={{ minWidth: 0 }}
        />
      </div>
      {/* Verify icon - flush right, vertically centered, responsive */}
      <div className="hidden md:flex absolute right-0 top-[75%] -translate-y-1/2 w-[220px] lg:w-[320px] xl:w-[447px] h-auto z-40">
        <img
          src="/home_carrer_right.png"
          alt=""
          className="w-full h-auto object-contain rotate-[360deg]"
          style={{ minWidth: 0 }}
        />
      </div>
      {/* Decorative blurred icon (optional, not flush) */}
      <div className="absolute top-0 right-0 w-[180px] lg:w-[320px] xl:w-[499px] h-auto opacity-20 pointer-events-none">
        <img
          src="/home_carrer_shadow.png"
          alt=""
          className="w-full h-auto object-contain rotate-[-30deg] blur-sm"
          style={{ minWidth: 0 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-[56px] font-bold bg-gradient-secondary bg-clip-text text-transparent">
            Cơ hội nghề nghiệp
          </h2>
          <p className="text-[24px] text-creatix-gray-900 opacity-80 max-w-4xl mx-auto leading-relaxed">
            " Chúng tôi kiến tạo tương lai với các giải pháp Trí tuệ Nhân tạo
            tiên tiến, mang lại giá trị bền vững cho doanh nghiệp và cộng đồng.
            "
          </p>
          <Button className="bg-creatix-primary hover:bg-creatix-primary/90 text-white font-bold px-6 py-3 h-12 rounded-xl">
            Xem tất cả vị trí tuyển dụng
          </Button>
        </div>

        {/* Job Listings */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {jobs.slice(0, 2).map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-creatix-primary p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-8"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-creatix-gray-900">
                  {job.title}
                </h3>
                <p className="text-base text-creatix-gray-900 leading-relaxed font-light">
                  {job.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-creatix-primary font-semibold text-sm cursor-pointer hover:gap-3 transition-all">
                <span>Tìm hiểu thêm</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}

          {/* Single card for the third job to center it */}
          <div className="lg:col-span-2 flex justify-center">
            <div
              className="bg-white rounded-3xl border border-creatix-primary shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col -ml-px w-1/2"
              style={{ padding: "32px 32px 32px 23px" }}
            >
              <div className="space-y-3 mx-auto">
                <h3 className="text-xl font-bold text-creatix-gray-900">
                  Cộng Tác Viên Mạng Xã Hội
                </h3>
                <p className="text-base text-creatix-gray-900 leading-relaxed font-light">
                  Sáng tạo nội dung video ngắn cho TikTok, Instagram,Facebook và
                  YouTube để quảng bá ứng dụng AI.
                </p>
              </div>

              <div className="flex items-center gap-2 text-creatix-primary font-semibold text-sm cursor-pointer hover:gap-3 transition-all mt-8">
                <span>Tìm hiểu thêm</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
