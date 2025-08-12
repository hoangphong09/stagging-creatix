"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const SLIDER_POSTS = [
  {
    title: "Tương Lai của AI trong Doanh Nghiệp",
    summary:
      "Khám phá cách AI đang thay đổi cách doanh nghiệp vận hành và tạo ra giá trị.",
    image: "/blog_post_1.jpg",
    tag: "#1 BÀI VIẾT NỔI BẬT TRONG THÁNG",
    link: "#",
    slug: "tuong-lai-ai-trong-doanh-nghiep",
  },
  {
    title: "Hướng Dẫn Sử Dụng Magic Eraser",
    summary: "Cách sử dụng Magic Eraser để chỉnh sửa ảnh siêu nhanh.",
    image: "/blog_post_2.jpg",
    tag: "#1 BÀI VIẾT NỔI BẬT",
    link: "#",
    slug: "huong-dan-su-dung-magic-eraser",
  },
  {
    title: "Figma Translate Plugin: Bí Quyết Dịch Nhanh",
    summary:
      "Hướng dẫn sử dụng Figma Translate Plugin để dịch nhanh giao diện thiết kế.",
    image: "/blog_post_3.jpg",
    tag: "#1 BÀI VIẾT NỔI BẬT",
    link: "#",
    slug: "figma-translate-plugin-bi-quyet-dich-nhanh",
  },
];

const OTHER_POSTS = [
  {
    title: "Tương lai của AI trong doanh nghiệp",
    summary: "Khám phá AI và sự đổi mới sáng tạo cho doanh nghiệp và tổ chức.",
    image: "/blog_post_1.jpg",
    tag: "",
    slug: "tuong-lai-ai-trong-doanh-nghiep",
  },
  {
    title: "5 Công Cụ AI Hàng Đầu Cho Nhà Thiết Kế",
    summary:
      "Tối ưu hóa công việc, sáng tạo và đổi mới với các công cụ AI hiện đại.",
    image: "/blog_post_4.jpg",
    tag: "",
    slug: "5-cong-cu-ai-cho-nha-thiet-ke",
  },
  {
    title: "Hướng Dẫn Sử Dụng ",
    summary: "Cách sử dụng Magic Eraser để chỉnh sửa ảnh siêu nhanh.",
    image: "/blog_post_2.jpg",
    tag: "Magic Eraser",
    slug: "huong-dan-su-dung-magic-eraser",
  },
  {
    title: "Figma Translate Plugin: Bí Quyết Dịch Nhanh",
    summary:
      "Hướng dẫn sử dụng Figma Translate Plugin để dịch nhanh giao diện thiết kế.",
    image: "/blog_post_3.jpg",
    tag: "",
    slug: "figma-translate-plugin-bi-quyet-dich-nhanh",
  },
];

const CARD_WIDTH = 960;
const CARD_GAP = 24;

export default function BlogPage() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const total = SLIDER_POSTS.length;

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 50000000); // Adjust the timeout duration as needed
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, total]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const prev = () => goTo((current - 1 + total) % total);
  const next = () => goTo((current + 1) % total);

  const getVisibleSlides = () => {
    const prevIdx = (current - 1 + total) % total;
    const nextIdx = (current + 1) % total;
    return [prevIdx, current, nextIdx];
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <img
        src="/blog_right_obj.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none select-none absolute left-0 top-[5rem] w-[20vw] max-w-[700px] z-0"
      />
      <img
        src="/blog_left_obj.svg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none select-none absolute right-0 top-2 w-[25vw] max-w-[700px] z-0"
      />
      <main className="flex-1 flex flex-col items-center px-4 pt-8 pb-16">
        <section className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-[8rem] mt-[8rem]">
            <div className="flex items-center gap-3 mb-8 flex-col sm:flex-row">
              <span className="bg-gradient-to-br from-[#571CEC] to-[#A96CF9] text-white text-[64px] font-extrabold px-6 py-2 rounded-xl shadow-lg">
                Blog
              </span>
              <span className="text-[64px] font-extrabold text-creatix-gray-900">
                công nghệ
              </span>
            </div>
            <p className="text-[20px] text-gray-400 text-center max-w-2xl">
              Khám phá các bài viết mới nhất về AI, công nghệ và đổi mới sáng
              tạo.
            </p>
          </div>
          <div className="relative w-full flex items-center justify-center mb-16 select-none">
            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
              style={{ marginLeft: "64px" }}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div
              className="flex items-center justify-center transition-transform duration-500 relative "
              style={{
                width: "100%",
                maxWidth: "100%",
                position: "relative",
                height: 420,
              }}
            >
              {getVisibleSlides().map((idx, i) => {
                const post = SLIDER_POSTS[idx];
                const isCurrent = i === 1;

                return (
                  <div
                    key={idx}
                    className={`absolute top-0 transition-all duration-500 rounded-3xl shadow-xl overflow-hidden group`}
                    style={{
                      width: isCurrent ? "90vw" : "72vw",
                      maxWidth: isCurrent ? 960 : 768,
                      height: 480,
                      left: isCurrent
                        ? "50%"
                        : i === 0
                        ? `calc(0% - 270px)`
                        : `calc(100% + 270px)`,
                      transform: `translateX(-50%) scale(${
                        isCurrent ? 1 : 0.9
                      })`,
                      opacity: isCurrent ? 1 : 0.9,
                      zIndex: isCurrent ? 10 : 5,
                      pointerEvents: isCurrent ? "auto" : "none",
                      boxShadow: isCurrent
                        ? "0 8px 32px 0 rgba(124, 58, 237, 0.15)"
                        : "0 2px 12px 0 rgba(124, 58, 237, 0.07)",
                    }}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        style={{
                          filter: isCurrent ? "none" : "blur(2px)",
                          transition: "filter 0.3s",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
                      {/* Overlay elements */}
                      <div className="absolute top-0 left-0 w-full flex justify-between items-start p-5 z-20 pointer-events-none">
                        {/* Tag label */}
                        {post.tag && (
                          <span className="text-white text-xs font-bold px-3 py-1 rounded-lg pointer-events-auto">
                            {post.tag}
                          </span>
                        )}
                        {/* Social icons */}
                        <div className="flex gap-2 pointer-events-auto">
                          <a href="#" tabIndex={isCurrent ? 0 : -1}>
                            <img
                              src="/social/facebook.png"
                              alt="Facebook"
                              className="w-6 h-6"
                            />
                          </a>
                          <a href="#" tabIndex={isCurrent ? 0 : -1}>
                            <img
                              src="/social/facebook_2.png"
                              alt="Twitter"
                              className="w-6 h-6"
                            />
                          </a>
                          <a href="#" tabIndex={isCurrent ? 0 : -1}>
                            <img
                              src="/social/google.png"
                              alt="Google"
                              className="w-6 h-6"
                            />
                          </a>
                          <a href="#" tabIndex={isCurrent ? 0 : -1}>
                            <img
                              src="/social/twitter.png"
                              alt="LinkedIn"
                              className="w-6 h-6"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 w-full h-full flex flex-col justify-end p-8">
                      <span className="block text-white text-xs font-semibold mb-2">
                        {post.tag}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                        {post.title}
                      </h2>
                      <p className="text-white text-base mb-3">
                        {post.summary}
                      </p>
                      <a
                        href={`/blog/${post.slug}`}
                        className="text-white font-semibold underline"
                        tabIndex={isCurrent ? 0 : -1}
                      >
                        Đọc thêm &gt;
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center"
              style={{ marginRight: "64px" }}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Custom Pagination */}
            <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {SLIDER_POSTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? "w-12 bg-[#6366F1]"
                      : "w-4 bg-[#6366F1]/20"
                  }`}
                  aria-label={`Chuyển đến slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="w-full max-w-6xl mx-auto mt-32">
          <div className="mb-6">
            <div className="text-lg font-bold border-l-4 border-[#8B5CF6] pl-3">
              CÁC BÀI VIẾT KHÁC
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
            {OTHER_POSTS.map((post, idx) => (
              <Link
                key={post.title + idx}
                href={`/blog/${post.slug}`}
                className="bg-transparent rounded-2xl shadow-md overflow-hidden flex flex-col transition hover:shadow-xl"
              >
                <div className="relative w-full h-[15rem] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {post.tag && (
                    <span className="absolute top-3 left-3 bg-[#8B5CF6] text-white text-xs font-semibold px-3 py-1 rounded-lg shadow">
                      {post.tag}
                    </span>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-2xl text-creatix-gray-900 mb-2 flex flex-row items-center gap-1">
                    {post.title}
                    {post.tag && (
                      <span className="bg-clip-text bg-gradient-to-br from-[#7E39EA] to-[#D92F7F] text-transparent">
                        Magic Eraser
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 text-base mb-4 flex-1">
                    {post.summary}
                  </p>
                  <span className="text-[#6366F1] font-medium hover:underline text-base mt-auto">
                    Đọc thêm →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
