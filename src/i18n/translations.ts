export type LanguageT = "it" | "en" | "fr";

export type TranlationsT = {
  [L in LanguageT]: Record<string, string>;
};

export const translations: TranlationsT = {
  it: {
    formTitle: "Facci sapere se ci sei!",
    name: "Nome",
    namePlaceholder: "Inserisci il tuo nome",
    totalAttendees: "Numero di Partecipanti",
    totalAttendeesRequired: "Indica il numero di partecipanti",
    totalAttendeesMin: "Almeno 1 persona",
    dietaryRestrictions: "Restrizioni alimentari",
    dietaryRestrictionsPlaceholder: "Indica le restrizioni alimentari",
    dietaryRestrictionsNumber: "Persone con restrizioni alimentari",
    dietaryRestrictionsNumberPlaceholder:
      "Indica il numero di persone con restrizioni alimentari",
    NumberOfKids: "Numero di bambini (<8 anni)",
    NumberOfKidsPlaceholder: "Indica il numero di bambini tra i partecipanti",
    notes: "Informazioni aggiuntive",
    notesPlaceholder:
      "Inscrisci qui qualsiasi informazione aggiuntiva ci vuoi riferire!",
    close: "Chiudi",
    send: "Invia",
    sending: "Invio...",
    formSuccessTitle:
      "Yay! Sei nella lista degli ospiti. Ci vediamo al grande giorno!",
    formFailTitle: "Ouch! Qualcosa è andato storto, per favore riprova",
    honeymoonTitle: "Per chi se lo fosse chiesto",
    honeymoonSubtitle:
      "Se vuoi partecipare al nostro viaggio con un pensiero, ecco un modo semplice:",
    honeymoonText:
      "Il tuo regalo ci aiuterà a trasformare questo viaggio in un ricordo per sempre.",

    // Old
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
    formTitle: "Let us know you're coming!",
    name: "Name",
    namePlaceholder: "Type your name",
    totalAttendees: "Total Attendees",
    totalAttendeesRequired: "Type the number of attendees",
    totalAttendeesMin: "Add at least one person",
    dietaryRestrictions: "Dietary restrictions",
    dietaryRestrictionsPlaceholder: "Type any dietary restrictions",
    dietaryRestrictionsNumber: "Guests with dietary restrictions",
    dietaryRestrictionsNumberPlaceholder:
      "Type the number of guests with dietary restrictions",
    NumberOfKids: "Number of kids (<8 years old)",
    NumberOfKidsPlaceholder: "Type the number of kids within the attendees",
    notes: "Additional information",
    notesPlaceholder:
      "Type here any additional info you would like to communicate to us!",
    send: "Send",
    sending: "Sending...",
    formSuccessTitle: "Yay! You’re on the guest list. See you at the big day!",
    formFailTitle: "Ouch! Something went wrong, please try again",
    close: "Close",

    honeymoonTitle: "For those who asked",
    honeymoonSubtitle:
      "If you’d like to join our journey in spirit, here’s how you can contribute:",
    honeymoonText:
      "Your gift will help us turn this trip into a memory of a lifetime.",

    // Old
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
