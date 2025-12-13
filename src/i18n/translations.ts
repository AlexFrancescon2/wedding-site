export type LanguageT = "it" | "en" | "fr";

export type TranlationsT = {
  [L in LanguageT]: Record<string, string>;
};

export const translations: TranlationsT = {
  it: {
    days: "Giorni",
    months: "Mesi",
    hours: "Ore",
    formTitle: "Facci sapere se ci sei!",
    name: "Nome e cognome",
    namePlaceholder: "Inserisci il tuo nome e cognome",
    email: "Email",
    emailPlaceholder: "Inserisci la tua e-mail",
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
    honeymoonSubtitle: "La tua presenza è il regalo più grande!",
    honeymoonText:
      "Se desideri aiutarci a trasformare questo viaggio in un ricordo per sempre, puoi farlo qui:",
    spotifyTitle: "Unitevi alla festa e alla musica!",
    spotifyContent1:
      "Scansionate il QR code e aggiungete le vostre canzoni preferite alla playlist, così potremo godercele insieme sulla pista da ballo.",
    spotifyContent2:
      "Dato che festeggeremo con ospiti italiani, francesi e inglesi, la musica internazionale è particolarmente gradita.",

    rsvp: "Conferma presenza",
    scanOrClick: "Scansiona o clicca",
  },
  en: {
    days: "Days",
    months: "Months",
    hours: "Hours",
    formTitle: "A pinch of information from our guests",
    name: "Name and last name",
    namePlaceholder: "Type your name and last name",
    email: "Email",
    emailPlaceholder: "Type your e-mail",
    totalAttendees: "Total attendees",
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
    honeymoonSubtitle: "Your presence is the greatest gift!",
    honeymoonText:
      "If you wish to help making our honeymoon into a memory of a lifetime, you may do here:",

    spotifyTitle: "Join the celebration and the music!",
    spotifyContent1:
      "Scan the QR code and add your favorite songs to the playlist, so we can enjoy them together on the dance floor.",
    spotifyContent2:
      "Since we’ll be celebrating with Italian, French and English speakers, international music is especially welcome. ",
    rsvp: "RSVP",
    scanOrClick: "Scan or click",
  },
  fr: {
    days: "Jours",
    months: "Mois",
    hours: "Heures",
    formTitle: "Une pincée d’informations de nos invités",
    name: "Nom et prénom",
    namePlaceholder: "Indiquez votre nom et prénom",
    email: "Email",
    emailPlaceholder: "Indiquez votre email",
    totalAttendees: "Nombre de personnes",
    totalAttendeesRequired: "Indiquez le nombre de personnes",
    totalAttendeesMin: "Ajoutez au moins une personne",
    dietaryRestrictions: "Restrictions alimentaires",
    dietaryRestrictionsPlaceholder: "Indiquez toutes restrictions alimentaires",
    dietaryRestrictionsNumber: "Invités avec des restrictions alimentaires",
    dietaryRestrictionsNumberPlaceholder:
      "Indiquez le nombre d'invités ayant des restrictions alimentaires",
    NumberOfKids: "Nombre d'enfants (<8 ans)",
    NumberOfKidsPlaceholder: "Indiquez le nombre d'enfants",
    notes: "Informations supplémentaires",
    notesPlaceholder:
      "Indiquez toute information supplémentaire que vous souhaitez nous communiquer !",
    send: "Envoyer",
    sending: "En cours d’envoi…",
    formSuccessTitle:
      "Youpi ! Votre présence est confirmée. Rendez-vous le 10 juillet 2026 !",
    formFailTitle: "Oups ! Un problème est survenu, merci de réessayer.",
    close: "Fermer",

    honeymoonTitle: "Pour tous ceux qui ont demandé",
    honeymoonSubtitle: "Votre présence est notre plus beau cadeau !",
    honeymoonText:
      "Si vous souhaitez nous aider à rendre notre lune de miel mémorable, vous pouvez le faire ici :",
    spotifyTitle: "Participez à la fête et à la playlist !",
    spotifyContent1:
      "Scannez le QR code et ajoutez vos chansons préférées à la playlist, pour faire vibrer la piste de danse !",
    spotifyContent2:
      "Comme nous aurons des invités italiens, français et anglais, la musique internationale est préférable pour que tout le monde en profite.",
    rsvp: "Confirmez votre présence",
    scanOrClick: "Scannez ou cliquez",
  },
};
