"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { BLOG_CONTENT } from "@/constants/blogContent";

const BLOGS = [
  {
    slug: "tuong-lai-ai-trong-doanh-nghiep",
    title: "Tương Lai của AI trong Doanh Nghiệp",
    tag: "#1 BÀI VIẾT NỔI BẬT TRONG THÁNG",
    image: "/blog_post_1.svg",
  },
  {
    slug: "huong-dan-su-dung-magic-eraser",
    title: "Hướng Dẫn Sử Dụng Magic Eraser",
    tag: "#1 BÀI VIẾT NỔI BẬT TRONG THÁNG",
    image: "/blog_post_2.svg",
  },
  {
    slug: "figma-translate-plugin-bi-quyet-dich-nhanh",
    title: "Figma Translate Plugin: Bí Quyết Dịch Nhanh",
    tag: "#1 BÀI VIẾT NỔI BẬT TRONG THÁNG",
    image: "/blog_post_3.svg",
  },
  {
    slug: "5-cong-cu-ai-cho-nha-thiet-ke",
    title: "5 Công Cụ AI Hàng Đầu Cho Nhà Thiết Kế",
    tag: "#1 BÀI VIẾT NỔI BẬT TRONG THÁNG",
    image: "/blog_post_4.svg",
  },
];

const RELATED_POSTS = BLOGS.map(({ slug, title, image }) => ({
  title,
  image,
  link: `/blog/${slug}`,
}));

export default function BlogDescriptionPage() {
  const { blogSlug } = useParams();
  const router = useRouter();
  const blog = BLOGS.find((j) => j.slug === blogSlug);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-xl">Không tìm thấy bài viết này.</div>
        <button
          className="flex items-center gap-2 text-[#6366F1] font-bold mb-8"
          onClick={() => router.push("/blog")}
        >
          <span className="text-xl">&#8592;</span>
          <p className="hover:underline">Quay lại Blog</p>
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white px-4 pt-8 pb-16">
      <div className="max-w-5xl w-full mx-auto">
        <button
          className="flex items-center gap-2 text-[#6366F1] font-bold mb-8"
          onClick={() => router.push("/blog")}
        >
          <span className="text-xl">&#8592;</span>
          <p className="hover:underline">Quay lại Blog</p>
        </button>
        <h1 className="text-[32px] md:text-[36px] font-bold text-creatix-gray-900 mb-2 leading-tight">
          {blog.title}
        </h1>
        <div className="text-xs text-creatix-gray-900 mb-6 font-bold">
          {blog.tag}
        </div>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-2xl mb-8 object-cover"
          style={{ maxHeight: 520 }}
        />
        <div className="prose max-w-none text-base text-creatix-gray-900 mb-12">
          {BLOG_CONTENT[blog.slug]}
        </div>
      </div>
      <div className="max-w-6xl w-full mx-auto mt-8">
        <div
          className="text-xl font-bold mb-2 border-l-4 pl-3"
          style={{ borderColor: "#8B5CF6" }}
        >
          <h3 className="text-lg font-bold mb-8 text-creatix-gray-900">
            CÁC BÀI VIẾT KHÁC
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RELATED_POSTS.filter((p) => p.title !== blog.title).map((post) => (
            <Link
              key={post.title}
              href={post.link}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[180px] object-cover mb-4"
              />
              <div className="px-4 pb-4 flex-1 flex flex-col justify-between">
                <h4 className="font-semibold text-base mb-5 text-creatix-gray-900">
                  {post.title}
                </h4>
                <span className="text-[#6366F1] text-xs font-medium hover:underline mt-auto">
                  Đọc thêm &gt;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
