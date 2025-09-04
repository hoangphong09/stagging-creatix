export interface Product {
  title: string;
  description: string;
  image: string;
  logo?: string;
  badgeColor: string;
  titleColor: string;
  link: string;
}

export const PRODUCTS: readonly Product[] = [
  {
    title: "Magic Eraser",
    description: "Remove unwanted objects from photos quickly and accurately.",
    image: "/home_product_1.png",
    logo: "/prd_app_logo.png",
    badgeColor: "bg-[#F3F3F3]",
    titleColor: "text-creatix-gray-900",
    link: "https://stagging-magic-eraser.vercel.app/",
  },
  {
    title: "AI Video Editor",
    description:
      "Automatically edit, add effects, and enhance videos using AI.",
    image: "/home_product_2.png",

    badgeColor: "bg-[#F3F3F3]",
    logo: "/video_logo.png",
    titleColor: "text-creatix-gray-900",
    link: "https://stagging-video-eraser.vercel.app/",
  },
  {
    title: "Figma Translate Plugin",
    description:
      "Translate Figma text into any language with Google Gemini AI. Auto-detect, batch translate, and keep the original layout.",
    image: "/home_product_3.png",
    logo: "/translate_logo.png",
    badgeColor: "bg-[#F3F3F3]",
    titleColor: "text-creatix-gray-900",
    link: "https://www.figma.com/community/plugin/1493925748627016409/translate-text-with-gemini",
  },
];
