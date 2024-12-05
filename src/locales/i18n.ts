import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translationEn.json";
import translationKO from "../locales/ko/translationKO.json";
import translationID from "../locales/id/translationID.json";

const storedSettings = localStorage.getItem("setting-storage");
const selectedLanguage = storedSettings
  ? JSON.parse(storedSettings).state.selectedLanguage
  : "en";

const resources = {
  en: {
    translation: translationEN,
  },
  ko: {
    translation: translationKO,
  },
  id: {
    translation: translationID,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: selectedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
