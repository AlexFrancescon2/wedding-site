import en from "./en.json";
import fr from "./fr.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import it from "./it.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    it: { translation: it },
  },
  lng: "it",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
