import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function useLanguage() {
  const { t, i18n } = useTranslation();

  // Load language from localStorage on first mount
  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

  // Change language and persist it
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return {
    t,
    language: i18n.language,
    changeLanguage,
  };
}
