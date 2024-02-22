import "server-only";

const CVS = {
  en: () => import("@/app/dictionaries/cv_en.json").then((module) => module.default),
  es: () => import("@/app/dictionaries/cv_es.json").then((module) => module.default),
};

export const getCV = async (locale: keyof typeof CVS) => CVS[locale]();
