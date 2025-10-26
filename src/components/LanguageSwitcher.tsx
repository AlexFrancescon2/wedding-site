import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "it", label: "Italiano", flag: "/flags/it.png" },
  { code: "en", label: "English", flag: "/flags/en.png" },
  { code: "fr", label: "Français", flag: "/flags/fr.png" },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get("lang");
    if (lang && LANGUAGES.some((l) => l.code === lang)) {
      i18n.changeLanguage(lang);
    }
  }, [location.search]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    const params = new URLSearchParams(location.search);
    params.set("lang", lang);
    navigate(
      { pathname: location.pathname, search: params.toString() },
      { replace: true }
    );
    setOpen(false);
  };

  return (
    <div className="relative inline-block" ref={ref}>
      {/* Selected language button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-full
                   bg-white text-gray-800
                   hover:bg-gray-100 transition-all duration-150
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <img
          src={currentLang.flag}
          alt={currentLang.code}
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
        <span className="font-medium text-sm">{currentLang.label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-40 bg-white
                     shadow-md z-50 animate-fadeSlide overflow-hidden rounded-md"
        >
          {LANGUAGES.filter((l) => l.code !== currentLang.code).map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center gap-3 px-4 py-2 w-full
                         text-left text-gray-800 text-sm bg-white
                         hover:bg-gray-200 transition-colors duration-150
                         rounded-none border-none"
            >
              <img src={lang.flag} alt={lang.code} className="w-5 h-5" />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
