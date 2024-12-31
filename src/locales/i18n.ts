import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translationEn.json";
import translationKO from "../locales/ko/translationKo.json";
import translationID from "../locales/id/translationId.json";
import translationZh from "../locales/zh/translationZh.json";
import translationEs from "../locales/es/translationEs.json";
import translationFr from "../locales/fr/translationFr.json";
import translationDe from "../locales/de/translationDe.json";
import translationAr from "../locales/ar/translationAr.json";
import translationPt from "../locales/pt/translationPt.json";
import translationRu from "../locales/ru/translationRu.json";
import translationJa from "../locales/ja/translationJa.json";
import translationHi from "../locales/hi/translationHi.json";

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
  zh: {
    translation: translationZh,
  },
  es: {
    translation: translationEs,
  },
  fr: {
    translation: translationFr,
  },
  de: {
    translation: translationDe,
  },
  ar: {
    translation: translationAr,
  },
  pt: {
    translation: translationPt,
  },
  ru: {
    translation: translationRu,
  },
  ja: {
    translation: translationJa,
  },
  hi: {
    translation: translationHi,
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
