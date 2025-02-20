import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ar from '../../locales/ar.json';
import en from '../../locales/en.json';
import fr from '../../locales/fr.json';

export const languageRessources = {
    en: {translation : en},
    ar: {translation : ar},
    fr: {translation : fr},
}

i18next.use(initReactI18next).init({
    compatibilityJSON:'v1',
    lng:'en', // Set German as the default language
    fallbackLng:'ar', // Fallback to English if the selected language is not available
    resources:languageRessources,
});

export default i18next;
