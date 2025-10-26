import { useEffect, useState, type ReactNode } from "react";
import { translations, type LanguageT } from "./translations";
import { I18nContext } from "./use-i18n";

export interface I18nContextType {
  lang: LanguageT;
  setLang: (l: LanguageT) => void;
  t: (key: string) => string;
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<LanguageT>(() => {
    const stored = localStorage.getItem("ws_lang") as LanguageT;
    return stored || "it";
  });

  useEffect(() => {
    localStorage.setItem("ws_lang", lang);
  }, [lang]);

  const t = (key: string) => translations[lang]?.[key] || key;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};
