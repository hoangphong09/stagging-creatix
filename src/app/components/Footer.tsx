import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative text-white"
      style={{
        background: "linear-gradient(135deg, #8D4AF7 0%, #6C53FE 100%)",
      }}
    >
      <img
        src="/footer_wavy_bg.svg"
        alt="wavy background"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
        style={{ objectFit: "cover" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wide">
              LIÊN KẾT NHANH
            </h3>
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-base hover:text-purple-200 transition-colors"
              >
                Giới thiệu
              </Link>
              <Link
                href="/products"
                className="block text-base hover:text-purple-200 transition-colors"
              >
                Sản phẩm
              </Link>
              <Link
                href="/careers"
                className="block text-base hover:text-purple-200 transition-colors"
              >
                Tuyển dụng
              </Link>
              <Link
                href="/contact"
                className="block text-base hover:text-purple-200 transition-colors"
              >
                Liên hệ
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wide">
              LIÊN HỆ
            </h3>
            <div className="space-y-4">
              <p className="text-base">Email: admin@creatixtechnology.com</p>
              <p className="text-base">Điện thoại: (+84) 817 991 996</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mb-16"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Creatix Technology</h2>
            <p className="text-base max-w-full">
              "Đổi mới sáng tạo, kiến tạo tương lai với giải pháp AI tiên
              phong."
            </p>
          </div>

          {/* Copyright */}
          <p className="text-base opacity-90 lg:text-right">
            © 2025 Creatix Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
