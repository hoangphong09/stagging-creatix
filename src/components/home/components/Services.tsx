"use client";

import {
  BarChart3,
  Lightbulb,
  Smartphone,
  TrendingUp,
  Zap,
  Atom,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: "Phân tích và tiếp thị",
      description:
        "Cung cấp các giải pháp phân tích dữ liệu và chiến lược tiếp thị hiệu quả.",
    },
    {
      icon: Lightbulb,
      title: "Tư vấn giải pháp AI",
      description:
        "Phân tích nhu cầu, đề xuất và triển khai các giải pháp AI phù hợp với doanh nghiệp của bạn.",
    },
    {
      icon: Smartphone,
      title: "Phát triển ứng dụng di động",
      description:
        "Xây dựng các ứng dụng di động hiện đại, tối ưu hóa trải nghiệm người dùng.",
    },
    {
      icon: TrendingUp,
      title: "Phát triển mô hình AI tuỳ chỉnh",
      description:
        "Tạo ra các mô hình AI được thiết kế riêng để đáp ứng nhu cầu cụ thể.",
    },
    {
      icon: Atom,
      title: "Triển khai dịch vụ AI",
      description:
        "Hỗ trợ triển khai các dịch vụ AI vào hệ thống hiện tại của bạn.",
    },
    {
      icon: Zap,
      title: "Cung cấp dịch vụ AI",
      description:
        "Chúng tôi cung cấp dịch vụ AI tiên tiến, tối ưu hiệu suất và hiệu quả kinh doanh.",
    },
  ];

  return (
    <section
      id="service-section"
      className="py-10 sm:py-20 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-8">
          <div className="space-y-2">
            <div className="inline-flex items-center px-3 py-1 bg-creatix-primary/5 rounded-lg">
              <span className="text-sm font-semibold text-creatix-primary tracking-wide">
                Dịch vụ chúng tôi
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[48px] font-extrabold bg-gradient-to-r from-[#392F50] to-[#7344C8] bg-clip-text text-transparent leading-tight">
              Chúng tôi cung cấp các <br />
              dịch vụ AI
            </h2>
          </div>

          <p className="text-xl text-creatix-gray-800 opacity-80 max-w-lg leading-relaxed">
            "Tối ưu hiệu suất với các dịch vụ AI, phân tích và phát triển ứng
            dụng hiện đại."
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 space-y-6 group"
              >
                {/* Icon */}
                <div
                  className="w-15 h-15 bg-creatix-primary rounded-xl flex items-center justify-center font-thin"
                  style={{ width: "60px", height: "60px" }}
                >
                  <IconComponent
                    className="w-10 h-10 text-white"
                    strokeWidth={2}
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-creatix-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-creatix-gray-900 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Details Link (hover to show) */}
                <div className="hidden group-hover:flex items-center gap-2 text-sm font-semibold cursor-pointer transition-opacity duration-300">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Chi tiết
                  </span>
                  <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
