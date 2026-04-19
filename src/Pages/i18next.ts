import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationPortuguese from '../translation/Portuguese.json';
import translationEnglish from '../translation/English.json';

i18next
.use(initReactI18next)
.init({
  lng: 'en',
  resources: {
    en: {
      translation: translationEnglish
    },
    pt: {
      translation: translationPortuguese
    }
  }
});

export default i18next;