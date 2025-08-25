"use client";

import Link from "next/link";
import { useEffect, useState, useCallback, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "src/components/ui/button";
import { X, Loader2, ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useScrollThreshold } from "@/hooks/useScrollPosition";
import { APP_CONFIG } from "@/constants";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string>("about");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // Use custom hooks
  const { currentLanguage, isLoadingLanguage, changeLanguage } = useLanguage();
  const hasShadow = useScrollThreshold(10);

  // Memoize navigation items to prevent unnecessary re-renders
  const navigationItems = useMemo(() => APP_CONFIG.navigation.mainMenu, []);
  const secondaryNavigationItems = useMemo(
    () => APP_CONFIG.navigation.secondaryMenu,
    []
  );

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handle menu click with useCallback for performance
  const handleMenuClick = useCallback(
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
    },
    [pathname, router]
  );

  // Handle hash navigation
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

  // Handle scroll-based menu highlighting
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
        setActiveMenu("about");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle route-based menu highlighting
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
    } else if (pathname === "/our-story" || window.location.hash === "#story") {
      setActiveMenu("story");
    } else if (pathname === "/") {
      setActiveMenu("about");
    }
  }, [pathname]);

  // Memoize toggle functions
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const toggleLanguageDropdown = useCallback(() => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  }, [isLanguageDropdownOpen]);

  const handleLanguageChange = useCallback(
    (lang: "en" | "vi") => {
      changeLanguage(lang);
      setIsLanguageDropdownOpen(false);
    },
    [changeLanguage]
  );

  const handleRequestDemo = useCallback(() => {
    window.location.href = `mailto:${APP_CONFIG.company.email}`;
  }, []);

  return (
    <header
      className={`w-full sticky z-50 ${
        hasShadow ? "shadow-lg bg-white/95 backdrop-blur-sm" : ""
      }`}
    >
      {/* Google Translate Element - Hidden but necessary for translation to work */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      {/* Language Loading Overlay */}
      {isLoadingLanguage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] pointer-events-auto">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      )}

      <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="rounded-lg flex items-center justify-center">
              <img
                src="/creatix_logo.png"
                alt="logo"
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900 font-inter">
              {APP_CONFIG.company.name}
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.id}`}
                className={`text-base ${
                  activeMenu === item.key
                    ? "font-semibold text-blue-600 underline decoration-[1.5px] underline-offset-4"
                    : "font-medium text-gray-900 hover:text-blue-600 transition-colors"
                }`}
                onClick={handleMenuClick(item.key, item.id)}
              >
                {item.name}
              </a>
            ))}

            {secondaryNavigationItems.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`text-base ${
                  activeMenu === link.key
                    ? "font-semibold text-blue-600 underline decoration-[1.5px] underline-offset-4"
                    : "font-medium text-gray-900 hover:text-blue-600 transition-colors"
                }`}
                onClick={() => setActiveMenu(link.key)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side - Request Demo Button and Language Dropdown */}
          <div className="items-center gap-4 hidden sm:flex">
            <Button
              className="text-[16px] font-bold font-inter bg-gradient-to-r from-[#3C39FF] to-[#5199E1] bg-clip-text text-transparent border border-[#3C39FF] rounded-xl px-8 py-2 h-10 hover:bg-[#3C39FF] transition-all duration-200 shadow-none"
              onClick={handleRequestDemo}
            >
              Request a Demo
            </Button>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#9B9B9B] hover:border-[#3C39FF] transition-colors h-10"
              >
                <span className="text-sm font-medium">
                  {currentLanguage.toUpperCase()}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("vi")}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
                  >
                    Vietnamese
                  </button>
                </div>
              )}
            </div>
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
              <div className="rounded-lg flex items-center justify-center">
                <img
                  src="/creatix_logo.png"
                  alt="logo"
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-lg">
                {APP_CONFIG.company.name}
              </span>
            </Link>
            <button onClick={toggleMobileMenu}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 mt-4">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.id}`}
                className="text-base font-medium text-gray-800"
                onClick={handleMenuClick(item.key, item.id)}
              >
                {item.name}
              </a>
            ))}

            {secondaryNavigationItems.map((link) => (
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
            <Button
              className="bg-transparent border border-blue-500 font-bold rounded-xl px-6 py-2 h-10 hover:bg-blue-50 transition-all duration-200 shadow-none text-[14px] text-blue-600"
              onClick={handleRequestDemo}
            >
              Request a Demo
            </Button>

            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="flex items-center gap-2 px-3 py-2 rounded-2xl border border-[#9B9B9B] hover:border-[#3C39FF] transition-colors h-10"
              >
                <span className="text-sm font-medium">
                  {currentLanguage.toUpperCase()}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Language Indicator */}
              {currentLanguage === "vi" && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-xl">
                  VI
                </div>
              )}

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("vi")}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors"
                  >
                    Vietnamese
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
