import Link from "next/link";
import React from "react";
import { APP_CONFIG } from "@/constants";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative text-white"
      style={{
        background: "linear-gradient(135deg, #8D4AF7 0%, #6C53FE 100%)",
      }}
    >
      <img
        src="/footer_wavy_bg.png"
        alt="wavy background"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
        style={{ objectFit: "cover" }}
        loading="lazy"
      />

      <div className="relative z-10 max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wide">
              Quick Links
            </h3>
            <div className="space-y-4">
              <Link
                href="#intro-section"
                className="block text-base hover:text-purple-200 transition-colors"
              >
                About
              </Link>
              <Link
                href="#product-section"
                className="block text-base hover:text-purple-200 transition-colors"
              >
                Products
              </Link>
              <Link
                href="/careers"
                className="block text-base hover:text-purple-200 transition-colors"
              >
                Careers
              </Link>
              <a
                href={`mailto:${APP_CONFIG.company.email}`}
                className="block text-base hover:text-purple-200 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-wide">
              Contact
            </h3>
            <div className="space-y-4">
              <p className="text-base">Email: {APP_CONFIG.company.email}</p>
              <p className="text-base">Điện thoại: {APP_CONFIG.company.phone}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 mb-16"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">{APP_CONFIG.company.name}</h2>
            <p className="text-base max-w-full">
              "Innovating to create the future with pioneering AI solutions."
            </p>
          </div>

          {/* Copyright */}
          <p className="text-base opacity-90 lg:text-right">
            © 2025 {APP_CONFIG.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
