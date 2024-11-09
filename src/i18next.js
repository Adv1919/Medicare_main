import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // load translations via HTTP
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    supportedLngs: ['en', 'hi'], // specify the languages you want to support
    fallbackLng: 'en', // fallback language when user language is unavailable
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['cookie'], // caches the user's preferred language
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // specify where translations are loaded from
    },
    react: { useSuspense: false },
  });

export default i18n;
