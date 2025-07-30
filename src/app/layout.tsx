import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"; // Import fonts if needed, or manage via CSS
import "./styles.css"; // Import additional global styles
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
  title: "Creatix Technology - Giải pháp AI tiên phong",
  description:
    "Creatix Technology cung cấp các giải pháp AI sáng tạo như AI Video Editor, AI Portrait Creator, Magic Eraser và các dịch vụ tư vấn AI.",
  // Add other metadata like icons, open graph, etc. here
  // icons: { icon: '/favicon.ico' } // Example if you have a favicon
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.className} ${poppins.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
