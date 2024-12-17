// import i18n from 'i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
// import HttpBackend from 'i18next-http-backend'
// import { initReactI18next } from 'react-i18next'

// i18n
//     .use(LanguageDetector)
//     .use(HttpBackend)
//     .use(initReactI18next)

//     .init({
//         fallbackLng: 'en',
//         supportedLngs: ['en', 'ur', 'zh'],
//         debug: true,
//         defaultNS: 'herosection',
//         interpolation: {
//             escapeValue: false,
//         },
//         backend: {
//             loadPath: '/locales/{{lng}}/{{ns}}.json'
//         }
//     });

//     export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation namespaces
import herosectionEn from "../locales/en/herosection.json";
import herosectionZh from "../locales/zh/herosection.json";
import herosectionUr from "../locales/ur/herosection.json";

import destinationsEn from "../locales/en/destinations.json";
import destinationsZh from "../locales/zh/destinations.json";
import destinationsUr from "../locales/ur/destinations.json";

import footerEn from "../locales/en/footer.json";
import footerZh from "../locales/zh/footer.json";
import footerUr from "../locales/ur/footer.json";

import servicesEn from "../locales/en/services.json";
import servicesZh from "../locales/zh/services.json";
import servicesUr from "../locales/ur/services.json";

import subscriptionEn from "../locales/en/subscription.json";
import subscriptionZh from "../locales/zh/subscription.json";
import subscriptionUr from "../locales/ur/subscription.json";

import testimonialsEn from "../locales/en/testimonials.json";
import testimonialsZh from "../locales/zh/testimonials.json";
import testimonialsUr from "../locales/ur/testimonials.json";

import ticketsEn from "../locales/en/tickets.json";
import ticketsZh from "../locales/zh/tickets.json";
import ticketsUr from "../locales/ur/tickets.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
        herosection: herosectionEn,
        destinations: destinationsEn,
        footer: footerEn,
        services: servicesEn,
        subscription: subscriptionEn,
        testimonials: testimonialsEn,
        tickets: ticketsEn,
      },
      zh: {
        herosection: herosectionZh,
        destinations: destinationsZh,
        footer: footerZh,
        services: servicesZh,
        subscription: subscriptionZh,
        testimonials: testimonialsZh,
        tickets: ticketsZh,
      },
      ur: {
        herosection: herosectionUr,
        destinations: destinationsUr,
        footer: footerUr,
        services: servicesUr,
        subscription: subscriptionUr,
        testimonials: testimonialsUr,
        tickets: ticketsUr,
      },
  },
  lng: "en", 
  fallbackLng: "en",
  ns: [
    "herosection",
    "destinations",
    "footer",
    "services",
    "subscription",
    "testimonials",
    "tickets",
  ],
  defaultNS: "herosection", 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;