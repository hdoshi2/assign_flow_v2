import { numberFormatLocale } from 'src/locales';

// ----------------------------------------------------------------------

/*
 * Locales code
 * https://gist.github.com/raushankrjha/d1c7e35cf87e69aa8b4208a8171a8416
 */

export type InputNumberValue = string | number | null | undefined;

type Options = Intl.NumberFormatOptions | undefined;

// ----------------------------------------------------------------------

export function fNumber(inputValue: InputNumberValue, options?: Options) {
  const locale = numberFormatLocale() || { code: 'en-US', currency: 'USD' };

  if (inputValue == null) return '';

  if (Number.isNaN(inputValue)) return `${inputValue}`;

  const number = Number(inputValue);

  const fm = new Intl.NumberFormat(locale.code, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
  }).format(number);

  return fm;
}

// ----------------------------------------------------------------------

export function fCurrency(inputValue: InputNumberValue, options?: Options) {
  const locale = numberFormatLocale() || { code: 'en-US', currency: 'USD' };

  if (inputValue == null) return '';
  if (Number.isNaN(inputValue)) return `${inputValue}`;

  const number = Number(inputValue);

  const fm = new Intl.NumberFormat(locale.code, {
    style: 'currency',
    currency: locale.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
  }).format(number);

  return fm;
}

// ----------------------------------------------------------------------

export function fPercent(inputValue: InputNumberValue, options?: Options) {
  const locale = numberFormatLocale() || { code: 'en-US', currency: 'USD' };

  if (inputValue == null) return '';
  if (Number.isNaN(inputValue)) return `${inputValue}`;

  const number = Number(inputValue) / 100;

  const fm = new Intl.NumberFormat(locale.code, {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
    ...options,
  }).format(number);

  return fm;
}

// ----------------------------------------------------------------------

export function fShortenNumber(inputValue: InputNumberValue, options?: Options) {
  const locale = numberFormatLocale() || { code: 'en-US', currency: 'USD' };

  if (inputValue == null) return '';
  if (Number.isNaN(inputValue)) return `${inputValue}`;

  const number = Number(inputValue);

  const fm = new Intl.NumberFormat(locale.code, {
    notation: 'compact',
    maximumFractionDigits: 2,
    ...options,
  }).format(number);

  return fm.replace(/[A-Z]/g, (match) => match.toLowerCase());
}

// ----------------------------------------------------------------------

export function fData(inputValue: InputNumberValue) {
  if (inputValue == null) return '';
  if (Number.isNaN(inputValue)) return `${inputValue}`;

  if (inputValue === 0) return '0 bytes';

  const units = ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'];

  const decimal = 2;

  const baseValue = 1024;

  const number = Number(inputValue);

  const index = Math.floor(Math.log(number) / Math.log(baseValue));

  const fm = `${parseFloat((number / baseValue ** index).toFixed(decimal))} ${units[index]}`;

  return fm;
}
