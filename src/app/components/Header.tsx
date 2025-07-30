"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "src/components/ui/button";

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string>("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Handle anchor navigation
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

  // Scroll to section on initial load if hash exists
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

  // Track active section by scroll
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

  // Set menu active based on route
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
      className="w-full bg-gradient-to-br from-gray-50 to-purple-50 bg-opacity-100 sticky top-0 z-50"
      style={{ border: "none", boxShadow: "none" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              src="/logo.jpg"
            />
            <span className="text-xl font-bold text-creatix-gray-900 font-inter">
              Creatix Technology
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#intro-section"
              className={`text-base font-semibold ${
                activeMenu === "home"
                  ? "text-creatix-primary underline decoration-2 underline-offset-4"
                  : "text-creatix-gray-900 hover:text-creatix-primary transition-colors"
              }`}
              onClick={handleMenuClick("home", "intro-section")}
            >
              Giới thiệu
            </a>
            <a
              href="#product-section"
              className={`text-base font-medium ${
                activeMenu === "products"
                  ? "text-creatix-primary underline decoration-2 underline-offset-4"
                  : "text-creatix-gray-900 hover:text-creatix-primary transition-colors"
              }`}
              onClick={handleMenuClick("products", "product-section")}
            >
              Sản phẩm
            </a>
            <a
              href="#service-section"
              className={`text-base font-medium ${
                activeMenu === "services"
                  ? "text-creatix-primary underline decoration-2 underline-offset-4"
                  : "text-creatix-gray-900 hover:text-creatix-primary transition-colors"
              }`}
              onClick={handleMenuClick("services", "service-section")}
            >
              Dịch vụ
            </a>
            <Link
              href="/careers"
              className={`text-base font-medium ${
                activeMenu === "careers"
                  ? "text-creatix-primary underline decoration-2 underline-offset-4"
                  : "text-creatix-gray-900 hover:text-creatix-primary transition-colors"
              }`}
              onClick={() => setActiveMenu("careers")}
            >
              Tuyển dụng
            </Link>
            <Link
              href="/blog"
              className={`text-base font-medium ${
                activeMenu === "blog"
                  ? "text-creatix-primary underline decoration-2 underline-offset-4"
                  : "text-creatix-gray-900 hover:text-creatix-primary transition-colors"
              }`}
              onClick={() => setActiveMenu("blog")}
            >
              Blog
            </Link>
            <Link
              href="/our-story"
              className={`text-base font-medium ${
                activeMenu === "story"
                  ? "text-creatix-primary underline decoration-2 underline-offset-4"
                  : "text-creatix-gray-900 hover:text-creatix-primary transition-colors"
              }`}
              onClick={() => setActiveMenu("story")}
            >
              Câu chuyện
            </Link>
          </nav>
          <Button className="bg-transparent border border-purple-500 font-bold rounded-xl px-8 py-2 h-11 hover:bg-gradient-primary/10 transition-all duration-200 shadow-none">
            <p className="text-gradient-primary">Yêu cầu Demo</p>
          </Button>
          <div className="lg:hidden">
            <Button variant="ghost" size="icon">
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
    </header>
  );
};

export default Header;
