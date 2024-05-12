'use client';

import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18nextProvider, initReactI18next } from 'react-i18next';

import { localStorageGetItem } from 'src/utils/storage-available';

import { i18nOptions, fallbackLng } from './config-locales';

// ----------------------------------------------------------------------

const lng = localStorageGetItem('i18nextLng', fallbackLng);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(resourcesToBackend((lang: string, ns: string) => import(`./langs/${lang}/${ns}.json`)))
  .init({
    ...i18nOptions(lng),
    detection: {
      caches: ['localStorage'],
    },
  });

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function I18nProvider({ children }: Props) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
