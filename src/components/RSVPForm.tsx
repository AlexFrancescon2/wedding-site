import React, { useRef, useState } from "react";

import { CONFIG } from "../config";

export default function RSVPForm({ t }) {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [diet, setDiet] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const submittedRef = useRef(false);

  const onSubmit = () => {
    submittedRef.current = true;
  };
  const onIframeLoad = () => {
    if (submittedRef.current) {
      submittedRef.current = false;
      setSubmitted(true);
      setName("");
      setGuests(1);
      setDiet("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {!submitted ? (
        <form
          action={CONFIG.googleFormAction}
          method="POST"
          target="hidden_iframe"
          onSubmit={onSubmit}
        >
          <label className="block mb-3">
            <span className="text-sm">Nome</span>
            <input
              required
              name={CONFIG.googleFormFields.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border px-3 py-2"
            />
          </label>
          <label className="block mb-3">
            <span className="text-sm">{t("guests")}</span>
            <input
              required
              name={CONFIG.googleFormFields.guests}
              type="number"
              min={1}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="mt-1 block w-32 rounded-md border px-3 py-2"
            />
          </label>
          <label className="block mb-4">
            <span className="text-sm">{t("dietRequests")}</span>
            <textarea
              name={CONFIG.googleFormFields.diet}
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="mt-1 block w-full rounded-md border px-3 py-2"
            />
          </label>
          <button
            className="px-6 py-2 bg-indigo-600 text-white rounded-md"
            type="submit"
          >
            {t("submit")}
          </button>
        </form>
      ) : (
        <div className="text-center p-6">
          <h3 className="text-xl font-semibold">{t("thanks")}</h3>
          <button
            className="mt-4 text-sm underline"
            onClick={() => setSubmitted(false)}
          >
            Invia un'altra risposta
          </button>
        </div>
      )}
      <iframe
        name="hidden_iframe"
        style={{ display: "none" }}
        onLoad={onIframeLoad}
      />
    </div>
  );
}
