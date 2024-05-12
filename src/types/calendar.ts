import { DatePickerValue } from 'src/utils/format-time';

// ----------------------------------------------------------------------

export type ICalendarFilterValue = string[] | DatePickerValue;

export type ICalendarFilters = {
  colors: string[];
  startDate: DatePickerValue;
  endDate: DatePickerValue;
};

// ----------------------------------------------------------------------

export type ICalendarDate = string | number;

export type ICalendarView = 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' | 'listWeek';

export type ICalendarRange = {
  start: ICalendarDate;
  end: ICalendarDate;
} | null;

export type ICalendarEvent = {
  id: string;
  color: string;
  title: string;
  allDay: boolean;
  description: string;
  end: ICalendarDate;
  start: ICalendarDate;
};
