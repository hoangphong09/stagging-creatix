"use client";

import { ArrowRight } from "lucide-react";

export default function FeaturedProducts() {
  const products = [
    {
      title: "Magic Eraser",
      description:
        "Xóa bỏ các đối tượng không mong muốn khỏi ảnh một cách nhanh chóng và chính xác.",
      image: "/home_product_1.png",
      logo: "/app_logo.png",
      badgeColor: "bg-red-50",
      titleColor: "bg-gradient-red bg-clip-text text-transparent",
    },
    {
      title: "AI Video Editor",
      description:
        "Tự động chỉnh sửa, thêm hiệu ứng và tối ưu hóa video của bạn bằng AI.",
      image: "/home_product_2.png",

      badgeColor: "bg-gray-200",
      titleColor: "text-creatix-gray-900",
    },
    {
      title: "Figma Translate Plugin",
      description:
        "Dịch văn bản trong thiết kế Figma sang bất kỳ ngôn ngữ nào với Google Gemini AI. Hỗ trợ tự động nhận dạng, dịch hàng loạt và giữ nguyên layout.",
      image: "/top_product_3.svg",

      badgeColor: "bg-gray-200",
      titleColor: "text-creatix-gray-900",
    },
  ];

  return (
    <section
      id="product-section"
      className="py-20 sm:py-40 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-32 -left-4 w-52 h-52 opacity-30">
        <img
          src="/home_product_shadow.png"
          alt=""
          className="w-full h-full object-contain transform rotate-[73deg] blur-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[42px] sm:text-[56px] font-extrabold bg-gradient-to-b from-[#392F50] to-[#7344C8] bg-clip-text text-transparent ">
            Sản phẩm nổi bật
          </p>
          <p className="text-base sm:text-xl text-creatix-gray-800 opacity-80 max-w-4xl mx-auto leading-relaxed">
            "Chúng tôi chọn lọc những sản phẩm nổi bật nhất – kết hợp giữa tính
            hữu dụng, trải nghiệm tốt và sự đơn giản trong từng thao tác."
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover rounded-3xl p-2"
                />
              </div>

              {/* Product Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Product Badge & Title */}
                <div className="space-y-4 flex-grow">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${product.badgeColor}`}
                  >
                    {product.logo && (
                      <img
                        src={product.logo}
                        alt="feature icon"
                        className="w-8 h-8"
                      />
                    )}
                    <span className={`font-bold text-lg ${product.titleColor}`}>
                      {product.title}
                    </span>
                  </div>

                  <p className="text-base text-creatix-gray-800 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-creatix-primary font-semibold text-sm cursor-pointer hover:gap-3 transition-all mt-6">
                  <span>Tìm hiểu thêm</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
