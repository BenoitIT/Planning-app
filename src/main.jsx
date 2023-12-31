import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { ReduxProvider } from "./redux/AppReduxProvider";
import App from "./App";
import LoadingScreen from "./layouts/loadingScreen";
import "./index.css";
i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "fr", "kiny"],
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

const loadingMarkup = (
  <LoadingScreen/>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </React.StrictMode>
  </Suspense>
);
