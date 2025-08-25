import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Configure fonts if using next/font
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Creatix Technology – Pioneering AI Solutions",
  description:
    "Creatix Technology provides innovative AI solutions such as AI Video Editor, AI Portrait Creator, Magic Eraser, and AI consulting services.",
  icons: { icon: "/favicon.ico" },
  robots: "index, follow",
  openGraph: {
    title: "Creatix Technology – Pioneering AI Solutions",
    description:
      "Creatix Technology provides innovative AI solutions such as AI Video Editor, AI Portrait Creator, Magic Eraser, and AI consulting services.",
    type: "website",
    url: "https://stagging-creatix.vercel.app/",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/07813659-8917-48ca-b3d7-e0e05385c538.png?token=Bf5MyEEfV4bOXZjYjLqE9Rs8x30dsdkIzPnWz1wmvgM&height=630&width=1200&expires=33292097148",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creatix Technology – Pioneering AI Solutions",
    description:
      "Creatix Technology provides innovative AI solutions such as AI Video Editor, AI Portrait Creator, Magic Eraser, and AI consulting services.",
    images: [
      "https://opengraph.b-cdn.net/production/images/07813659-8917-48ca-b3d7-e0e05385c538.png?token=Bf5MyEEfV4bOXZjYjLqE9Rs8x30dsdkIzPnWz1wmvgM&height=630&width=1200&expires=33292097148",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.className} ${poppins.variable}`}>
      <body
        style={{
          backgroundImage: 'url("/merge_bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
