import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { APP_CONFIG } from "@/constants";

// Configure fonts if using next/font
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: `${APP_CONFIG.company.name} - ${APP_CONFIG.company.description}`,
  description: APP_CONFIG.company.longDescription,
  icons: { icon: '/favicon.ico' },
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
