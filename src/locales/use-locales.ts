'use client';

import dayjs from 'dayjs';
import i18next from 'i18next';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useRouter } from 'src/routes/hooks';

import { allLangs } from './all-langs';
import { fallbackLng } from './config-locales';

// ----------------------------------------------------------------------

export function useLocales() {
  const defaultLang = allLangs.filter((lang) => lang.value === fallbackLng)[0];

  const currentLang =
    allLangs.find((lang) => lang.value === i18next.resolvedLanguage) || defaultLang;

  return {
    allLangs,
    defaultLang,
    currentLang,
  };
}

// ----------------------------------------------------------------------

export function useTranslate(ns?: string) {
  const { t, i18n } = useTranslation(ns);

  const router = useRouter();

  const adapterLocale = allLangs.find(
    (lang) => lang.value === i18n.resolvedLanguage
  )?.adapterLocale;

  const onChangeLang = useCallback(
    (newLang: string) => {
      i18n.changeLanguage(newLang);
      dayjs.locale(adapterLocale);
      router.refresh();
    },
    [adapterLocale, i18n, router]
  );

  return {
    t,
    i18n,
    onChangeLang,
  };
}

// ----------------------------------------------------------------------

export function numberFormatLocale() {
  const lng = i18next.resolvedLanguage ?? fallbackLng;

  const currentLang = allLangs.find((lang) => lang.value === lng);

  return {
    code: currentLang?.numberFormat.code,
    currency: currentLang?.numberFormat.currency,
  };
}
