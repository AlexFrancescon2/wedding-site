import { useState, type ReactNode } from "react";
import { translations, type LanguageT } from "./translations";
import { I18nContext } from "./use-i18n";

export interface I18nContextType {
  lang: LanguageT;
  setLang: (l: LanguageT) => void;
  t: (key: string) => string;
}

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<LanguageT>(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryLang: any = queryParams.get("lang");
    return queryLang || "it";
  });

  const t = (key: string) => translations[lang]?.[key] || key;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};
