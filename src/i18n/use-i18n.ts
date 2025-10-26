import { createContext, useContext } from "react";

import type { I18nContextType } from "./i18n";

export const I18nContext = createContext<I18nContextType | undefined>(
  undefined
);

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
