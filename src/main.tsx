import "./index.css";
import "./i18n/i18n.js";

import App from "./App.js";
import { I18nProvider } from "./i18n/i18n.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>
);
