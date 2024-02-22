import "server-only";

const DICTIONARIES = {
  en: () => import("@/app/dictionaries/en.json").then((module) => module.default),
  es: () => import("@/app/dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof DICTIONARIES) => DICTIONARIES[locale]();
