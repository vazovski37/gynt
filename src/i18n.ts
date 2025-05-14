'use client'

// src/i18n.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLanding from "./languages/en/landing.json";
import geLanding from "./languages/ge/landing.json";
import enNavbar from "./languages/en/navbar.json";
import geNavbar from "./languages/ge/navbar.json";
import enTeamRegistration from './languages/en/teamRegistration.json'
import geTeamRegistration from './languages/ge/teamRegistration.json'

// Safe language fallback (default to 'ge')
const savedLang = typeof window !== 'undefined' ? localStorage.getItem("la") || "ge" : "ge";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        landing: enLanding,
        navbar: enNavbar,
        teamRegistration: enTeamRegistration,
      },
      ge: {
        landing: geLanding,
        navbar: geNavbar,
        teamRegistration: geTeamRegistration,
      },
    },
    lng: savedLang,
    fallbackLng: "ge",
    ns: ["landing", "navbar", "teamRegistration"],
    defaultNS: "landing",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
