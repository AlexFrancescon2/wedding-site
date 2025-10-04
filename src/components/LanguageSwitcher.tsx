import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";

// import Flag from "react-world-flags";

const LANGUAGES = [
  { code: "it", label: "IT", flagCode: "IT" },
  { code: "en", label: "EN", flagCode: "GB" },
  { code: "fr", label: "FR", flagCode: "FR" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  // Sync i18n from URL query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get("lang");
    if (lang && LANGUAGES.some((l) => l.code === lang)) {
      i18n.changeLanguage(lang);
    }
  }, [location.search]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Change language and update query param
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    const params = new URLSearchParams(location.search);
    params.set("lang", lang); // append or replace lang param
    navigate(
      { pathname: location.pathname, search: params.toString() },
      { replace: true }
    );
    setOpen(false); // close dropdown
  };

  return (
    <div className="relative inline-block" ref={ref}>
      {/* Selected Language Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-gray-200 hover:bg-white transition"
      >
        {/* <Flag
          code={currentLang.flagCode}
          className="w-8 h-8 rounded-full object-cover"
        /> */}
        <span className="font-semibold text-lg">{currentLang.label}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white/90 backdrop-blur-md shadow-lg rounded-lg border border-gray-100 z-50">
          {LANGUAGES.filter((l) => l.code !== currentLang.code).map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center gap-3 px-4 py-2 w-full text-left text-base hover:bg-gray-100 transition-colors"
            >
              {/* <Flag
                code={lang.flagCode}
                className="w-8 h-8 rounded-full object-cover"
              /> */}
              <span className="font-semibold">{lang.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
