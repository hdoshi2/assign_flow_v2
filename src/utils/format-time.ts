import duration from 'dayjs/plugin/duration';
import dayjs, { Dayjs, OpUnitType } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

// ----------------------------------------------------------------------

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(isSameOrAfter);

// ----------------------------------------------------------------------

export type DatePickerValue = Dayjs | null;

export type InputDateValue = Dayjs | Date | string | number | null | undefined;

/**
 * Docs: https://day.js.org/docs/en/display/format
 */
export const formatStr = {
  dateTime: 'DD MMM YYYY h:mm a', // 17 Apr 2022 12:00 am
  date: 'DD MMM YYYY', // 17 Apr 2022
  time: 'h:mm a', // 12:00 am
  split: {
    dateTime: 'DD/MM/YYYY h:mm a', // 17/04/2022 12:00 am
    date: 'DD/MM/YYYY', // 17/04/2022
  },
  paramCase: {
    dateTime: 'DD-MM-YYYY h:mm a', // 17-04-2022 12:00 am
    date: 'DD-MM-YYYY', // 17-04-2022
  },
};

// ----------------------------------------------------------------------

/** Display value:
 *  17 Apr 2022 12:00 am
 */
export function fDateTime(date: InputDateValue, newFormat?: string) {
  if (!date) {
    return null;
  }

  const isValid = dayjs(date).isValid();

  return isValid ? dayjs(date).format(newFormat ?? formatStr.dateTime) : 'Invalid time value';
}

// ----------------------------------------------------------------------

/** Display value:
 *  17 Apr 2022
 */
export function fDate(date: InputDateValue, newFormat?: string) {
  if (!date) {
    return null;
  }

  const isValid = dayjs(date).isValid();

  return isValid ? dayjs(date).format(newFormat ?? formatStr.date) : 'Invalid time value';
}

// ----------------------------------------------------------------------

/** Display value:
 *  12:00 am
 */
export function fTime(date: InputDateValue, newFormat?: string) {
  if (!date) {
    return null;
  }

  const isValid = dayjs(date).isValid();

  return isValid ? dayjs(date).format(newFormat ?? formatStr.time) : 'Invalid time value';
}

// ----------------------------------------------------------------------

/** Display value:
 *  1713250100
 */
export function fTimestamp(date: InputDateValue) {
  if (!date) {
    return null;
  }

  const isValid = dayjs(date).isValid();

  return isValid ? dayjs(date).valueOf() : 'Invalid time value';
}

// ----------------------------------------------------------------------

/** Display value:
 *  a few seconds, 2 years
 */
export function fToNow(date: InputDateValue) {
  if (!date) {
    return null;
  }

  const isValid = dayjs(date).isValid();

  return isValid ? dayjs(date).toNow(true) : 'Invalid time value';
}

// ----------------------------------------------------------------------

export function fIsBetween(
  inputDate: InputDateValue,
  startDate: InputDateValue,
  endDate: InputDateValue
) {
  if (!inputDate || !startDate || !endDate) {
    return false;
  }

  const formattedInputDate = fTimestamp(inputDate);
  const formattedStartDate = fTimestamp(startDate);
  const formattedEndDate = fTimestamp(endDate);

  if (formattedInputDate && formattedStartDate && formattedEndDate) {
    return formattedInputDate >= formattedStartDate && formattedInputDate <= formattedEndDate;
  }

  return false;
}

// ----------------------------------------------------------------------

export function fIsAfter(startDate: InputDateValue, endDate: InputDateValue) {
  return dayjs(startDate).isAfter(endDate);
}

// ----------------------------------------------------------------------

export function fIsSame(startDate: InputDateValue, endDate: InputDateValue, units?: OpUnitType) {
  if (!startDate || !endDate) {
    return false;
  }

  const isValid = dayjs(startDate).isValid() && dayjs(endDate).isValid();

  if (!isValid) {
    return 'Invalid time value';
  }

  return dayjs(startDate).isSame(endDate, units ?? 'year');
}

// ----------------------------------------------------------------------

export function fDateRangeShortLabel(
  startDate: InputDateValue,
  endDate: InputDateValue,
  initial?: boolean
) {
  const isValid = dayjs(startDate).isValid() && dayjs(endDate).isValid();

  const isAfter = fIsAfter(startDate, endDate);

  if (!isValid || isAfter) {
    return 'Invalid time value';
  }

  let label = `${fDate(startDate)} - ${fDate(endDate)}`;

  if (initial) {
    return label;
  }

  const isSameYear = fIsSame(startDate, endDate, 'year');
  const isSameMonth = fIsSame(startDate, endDate, 'month');
  const isSameDay = fIsSame(startDate, endDate, 'day');

  if (isSameYear && !isSameMonth) {
    label = `${fDate(startDate, 'DD MMM')} - ${fDate(endDate)}`;
  } else if (isSameYear && isSameMonth && !isSameDay) {
    label = `${fDate(startDate, 'DD')} - ${fDate(endDate)}`;
  } else if (isSameYear && isSameMonth && isSameDay) {
    label = `${fDate(endDate)}`;
  }

  return label;
}

// ----------------------------------------------------------------------

export type DurationProps = {
  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
};

export function fAdd({
  years = 0,
  months = 0,
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0,
}: DurationProps) {
  const result = dayjs().add(
    dayjs.duration({ years, months, days, hours, minutes, seconds, milliseconds })
  );

  return result;
}

export function fSub({
  years = 0,
  months = 0,
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0,
}: DurationProps) {
  const result = dayjs().subtract(
    dayjs.duration({ years, months, days, hours, minutes, seconds, milliseconds })
  );

  return result;
}
