import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Load translations via HTTP
  .use(initReactI18next) // Integrate i18n with React
  .init({
    lng: 'en', // Default language (English)
    fallbackLng: 'en', // Fallback language
    backend: {
      loadPath: '/i18n/{{lng}}.json', // Load the merged JSON file from Webpack (e.g., en.json, fr.json)
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
