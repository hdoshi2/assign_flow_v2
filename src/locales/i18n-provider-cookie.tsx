'use client';

import i18n from 'i18next';
import { useMemo } from 'react';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import { i18nOptions } from './config-locales';

// ----------------------------------------------------------------------

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(resourcesToBackend((lang: string, ns: string) => import(`./langs/${lang}/${ns}.json`)))
  .init({
    ...i18nOptions(),
    detection: {
      caches: ['cookie'],
    },
  });

// ----------------------------------------------------------------------

type Props = {
  language: string;
  children: React.ReactNode;
};

export default function I18nProvider({ language, children }: Props) {
  useMemo(() => {
    i18n.changeLanguage(language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
