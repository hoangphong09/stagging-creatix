"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "src/components/ui/button";
import { X, Loader2 } from "lucide-react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string>("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [isLoadingLanguage, setIsLoadingLanguage] = useState(false);

  // --- Google Translate init ---
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById("google-translate-script")) return;

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "vi" },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);

  // --- Hàm đổi ngôn ngữ ---
  const changeLanguage = (lang: string) => {
    const googleTranslateCookieName = "googtrans";
    setIsLoadingLanguage(true);

    if (lang === "vi") {
      document.cookie = `${googleTranslateCookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${window.location.hostname}`;
      document.cookie = `${googleTranslateCookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
      location.reload();
      return;
    }

    // Set cookie đúng format
    document.cookie = `${googleTranslateCookieName}=/vi/${lang};path=/;domain=${window.location.hostname}`;
    document.cookie = `${googleTranslateCookieName}=/vi/${lang};path=/;`;

    // Reload để Google Translate áp dụng
    location.reload();
  };

  // --- Tự động detect IP và dịch ---
  useEffect(() => {
    const detectLangAndTranslate = async () => {
      try {
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        const country = data.country_code || "VN";
        console.log("Detected country code:", country);
        const countryToLang: Record<string, string> = {
          US: "en",
          GB: "en",
          FR: "fr",
          JP: "ja",
          VN: "vi",
          DE: "de",
          CN: "zh",
        };

        const lang = countryToLang[country] || "vi";

        // Nếu ngôn ngữ khác tiếng Việt mới dịch
        if (lang !== "vi") {
          // Chỉ dịch nếu chưa set cookie
          if (!document.cookie.includes(`/vi/${lang}`)) {
            changeLanguage(lang);
          }
        }
      } catch (error) {
        console.error("Detect language error:", error);
      }
    };

    detectLangAndTranslate();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick =
    (menu: string, sectionId: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      setActiveMenu(menu);

      if (pathname !== "/") {
        router.push(`/#${sectionId}`);
      } else {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
          );
        }
      }
      setMobileMenuOpen(false);
    };

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + 140;
      const intro = document.getElementById("intro-section");
      const product = document.getElementById("product-section");
      const service = document.getElementById("service-section");

      if (service && scrollY >= service.offsetTop) {
        setActiveMenu("services");
      } else if (product && scrollY >= product.offsetTop) {
        setActiveMenu("products");
      } else if (intro && scrollY >= intro.offsetTop) {
        setActiveMenu("home");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/services" || window.location.hash === "#services") {
      setActiveMenu("services");
    } else if (
      pathname === "/products" ||
      window.location.hash === "#products"
    ) {
      setActiveMenu("products");
    } else if (pathname === "/careers" || window.location.hash === "#careers") {
      setActiveMenu("careers");
    } else if (pathname === "/blog" || window.location.hash === "#blog") {
      setActiveMenu("blog");
    } else if (pathname === "/story" || window.location.hash === "#story") {
      setActiveMenu("story");
    } else if (pathname === "/") {
      setActiveMenu("home");
    }
  }, [pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 transition-shadow duration-200 ${
        hasShadow ? "shadow-[0_5px_10px_rgba(0,0,0,0.05)]" : ""
      }`}
    >
      {isLoadingLanguage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] pointer-events-auto">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-lg"
              src="/logo.jpg"
              alt="Creatix Logo"
            />
            <span className="text-xl font-bold text-creatix-gray-900 font-inter">
              Creatix Technology
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: "Giới thiệu", id: "intro-section", key: "home" },
              { name: "Sản phẩm", id: "product-section", key: "products" },
              { name: "Dịch vụ", id: "service-section", key: "services" },
            ].map((item) => (
              <a
                key={item.key}
                href={`#${item.id}`}
                className={`text-base ${
                  activeMenu === item.key
                    ? "font-semibold text-creatix-primary underline decoration-[1.5px] underline-offset-4"
                    : "font-medium text-creatix-gray-900 hover:text-creatix-primary transition-colors"
                }`}
                onClick={handleMenuClick(item.key, item.id)}
              >
                {item.name}
              </a>
            ))}

            {[
              { href: "/careers", label: "Tuyển dụng", key: "careers" },
              { href: "/blog", label: "Blog", key: "blog" },
              { href: "/our-story", label: "Câu chuyện", key: "story" },
            ].map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`text-base ${
                  activeMenu === link.key
                    ? "font-semibold text-creatix-primary underline decoration-[1.5px] underline-offset-4"
                    : "font-medium text-creatix-gray-900 hover:text-creatix-primary transition-colors"
                }`}
                onClick={() => setActiveMenu(link.key)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language Buttons */}
          <div className="flex items-center gap-2">
            <Button
              className="bg-transparent border border-purple-500 font-bold rounded-xl px-8 py-2 h-11 hover:bg-gradient-primary/10 transition-all duration-200 shadow-none text-[16px]"
              onClick={() =>
                (window.location.href = "mailto:admin@creatixtechnology.com")
              }
            >
              <p className="text-gradient-primary">Yêu cầu Demo</p>
            </Button>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div
              id="google_translate_element"
              style={{ display: "none" }}
            ></div>
            <button
              onClick={() => changeLanguage("vi")}
              className="w-8 h-8 overflow-hidden"
            >
              <img src="/country/vietnam.png" alt="Tiếng Việt" />
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="w-8 h-8 overflow-hidden"
            >
              <img src="/country/england.png" alt="English" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.jpg" className="w-8 h-8 rounded" />
              <span className="font-bold text-lg">Creatix Technology</span>
            </Link>
            <button onClick={toggleMobileMenu}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 mt-4">
            {[
              { name: "Giới thiệu", id: "intro-section", key: "home" },
              { name: "Sản phẩm", id: "product-section", key: "products" },
              { name: "Dịch vụ", id: "service-section", key: "services" },
            ].map((item) => (
              <a
                key={item.key}
                href={`#${item.id}`}
                className="text-base font-medium text-gray-800"
                onClick={handleMenuClick(item.key, item.id)}
              >
                {item.name}
              </a>
            ))}

            {[
              { href: "/careers", label: "Tuyển dụng", key: "careers" },
              { href: "/blog", label: "Blog", key: "blog" },
              { href: "/our-story", label: "Câu chuyện", key: "story" },
            ].map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-base font-medium text-gray-800"
                onClick={() => {
                  setActiveMenu(link.key);
                  setMobileMenuOpen(false);
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-row gap-4 items-center">
            <div
              id="google_translate_element"
              style={{ display: "none" }}
            ></div>
            <button
              onClick={() => changeLanguage("vi")}
              className="w-8 h-8 overflow-hidden"
            >
              <img src="/country/vietnam.png" alt="Tiếng Việt" />
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className="w-8 h-8 overflow-hidden"
            >
              <img src="/country/england.png" alt="English" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
