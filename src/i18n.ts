import { useEffect, useState } from "react";

type LanguageT = "it" | "fr" | "en";

type TranslationT = {
  [lang in LanguageT]: Record<string, string>;
};

export const translations: TranslationT = {
  it: {
    heroTitle: "Ci sposiamo!",
    heroSubtitle: "Unisciti a noi per celebrare il nostro giorno speciale",
    ourStory: "La nostra storia",
    details: "Dettagli evento",
    rsvp: "RSVP / Iscriviti",
    guests: "Numero persone",
    dietRequests: "Richieste alimentari",
    submit: "Invia RSVP",
    thanks: "Grazie! La tua risposta è stata registrata.",
    gift: "Contribuisci al viaggio di nozze",
    gallery: "Galleria",
    language: "Lingua",
  },
  en: {
    heroTitle: "We're getting married!",
    heroSubtitle: "Join us to celebrate our special day",
    ourStory: "Our story",
    details: "Event details",
    rsvp: "RSVP / Sign up",
    guests: "Number of people",
    dietRequests: "Dietary requests",
    submit: "Send RSVP",
    thanks: "Thanks! Your RSVP was received.",
    gift: "Contribute to our honeymoon",
    gallery: "Gallery",
    language: "Language",
  },
  fr: {
    heroTitle: "On se marie!",
    heroSubtitle: "Rejoignez-nous pour célébrer notre journée spéciale",
    ourStory: "Notre histoire",
    details: "Détails de l'événement",
    rsvp: "RSVP / Inscription",
    guests: "Nombre de personnes",
    dietRequests: "Demandes alimentaires",
    submit: "Envoyer RSVP",
    thanks: "Merci ! Votre réponse a été enregistrée.",
    gift: "Contribuer à notre voyage de noces",
    gallery: "Galerie",
    language: "Langue",
  },
};

export function useI18n() {
  const [lang, setLang] = useState<LanguageT>(() => {
    try {
      const stored = localStorage.getItem("ws_lang");
      if (stored === "it" || stored === "fr" || stored === "en") {
        return stored;
      }
      return "it";
    } catch {
      return "it";
    }
  });

  useEffect(() => localStorage.setItem("ws_lang", lang), [lang]);
  const t = (key: string | number) => translations[lang]?.[key] || key;
  return { lang, setLang, t };
}
