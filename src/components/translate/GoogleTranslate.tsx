"use client";
import { useEffect } from "react";

export default function GoogleTranslateFlags() {
  useEffect(() => {
    // Xóa script cũ (nếu có)
    const existing = document.querySelector(
      'script[src*="translate_a/element.js"]'
    );
    if (existing) existing.remove();

    // Thêm script Google Translate
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(addScript);

    // Init function
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,vi",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  const changeLang = (lang: string) => {
    const select = document.querySelector<HTMLSelectElement>(
      ".goog-te-combo"
    );
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {/* Việt Nam */}
      <button
        onClick={() => changeLang("vi")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
        }}
        title="Tiếng Việt"
      >
        🇻🇳
      </button>

      {/* Anh */}
      <button
        onClick={() => changeLang("en")}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
        }}
        title="English"
      >
        🇬🇧
      </button>

      {/* Ẩn UI gốc */}
      <div id="google_translate_element" style={{ display: "none" }} />
    </div>
  );
}
