import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
    .use(LanguageDetector)
    .use(HttpBackend)
    .use(initReactI18next)

    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'ur', 'zh'],
        debug: true,
        defaultNS: 'herosection',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    });
    
    export default i18n;
