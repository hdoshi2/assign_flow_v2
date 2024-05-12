import 'server-only';
import { cache } from 'react';
import { createInstance } from 'i18next';
import acceptLanguage from 'accept-language';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { cookies as getCookies, headers as getHeaders } from 'next/headers';

import { languages, defaultNS, cookieName, i18nOptions, fallbackLng } from './config-locales';

// ----------------------------------------------------------------------

/**
/* By default
/* https://nextjs.org/docs/pages/building-your-application/routing/internationalization
/*
/* Use i18next with app folder and without locale in url:
 * https://github.com/i18next/next-app-dir-i18next-example/issues/12#issuecomment-1500917570
 */

acceptLanguage.languages(languages);

export async function detectLanguage() {
  const cookies = getCookies();

  const headers = getHeaders();

  // here we can read the session data
  // const session = await getSession();

  let language;

  if (!language && cookies.has(cookieName)) {
    language = acceptLanguage.get(cookies.get(cookieName)?.value);
  }

  if (!language) {
    language = acceptLanguage.get(headers.get('Accept-Language'));
  }

  if (!language) {
    language = fallbackLng;
  }

  return language;
}

// ----------------------------------------------------------------------

export const getServerTranslations = cache(async (ns = defaultNS, options = {}) => {
  const language = await detectLanguage();

  const i18nextInstance = await initServerI18next(language, ns);

  return {
    t: i18nextInstance.getFixedT(
      language,
      Array.isArray(ns) ? ns[0] : ns,
      (options as Record<string, any>).keyPrefix
    ),
    i18n: i18nextInstance,
  };
});

// ----------------------------------------------------------------------

const initServerI18next = async (language: string, namespace: string) => {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((lang: string, ns: string) => import(`./langs/${lang}/${ns}.json`)))
    .init(i18nOptions(language, namespace));

  return i18nInstance;
};
