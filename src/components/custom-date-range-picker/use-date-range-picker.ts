import { useState, useCallback } from 'react';

import {
  fIsAfter,
  InputDateValue,
  DatePickerValue,
  fDateRangeShortLabel,
} from 'src/utils/format-time';

// ----------------------------------------------------------------------

export type UseDateRangePickerReturnType = {
  startDate: DatePickerValue;
  endDate: DatePickerValue;
  onChangeStartDate: (newValue: DatePickerValue) => void;
  onChangeEndDate: (newValue: DatePickerValue) => void;
  //
  open: boolean;
  onOpen?: VoidFunction;
  onClose: VoidFunction;
  onReset?: VoidFunction;
  //
  selected?: boolean;
  error?: boolean;
  //
  label?: string;
  shortLabel?: string;
  //
  title?: string;
  variant?: 'calendar' | 'input';
  //
  setStartDate?: React.Dispatch<React.SetStateAction<DatePickerValue>>;
  setEndDate?: React.Dispatch<React.SetStateAction<DatePickerValue>>;
};

export function useDateRangePicker(
  start: InputDateValue,
  end: InputDateValue
): UseDateRangePickerReturnType {
  const [open, setOpen] = useState(false);

  const [endDate, setEndDate] = useState(end as DatePickerValue);

  const [startDate, setStartDate] = useState(start as DatePickerValue);

  const error = fIsAfter(start, end);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onChangeStartDate = useCallback((newValue: DatePickerValue) => {
    setStartDate(newValue);
  }, []);

  const onChangeEndDate = useCallback(
    (newValue: DatePickerValue) => {
      if (error) {
        setEndDate(null);
      }
      setEndDate(newValue);
    },
    [error]
  );

  const onReset = useCallback(() => {
    setStartDate(null);
    setEndDate(null);
  }, []);

  return {
    startDate: startDate as DatePickerValue,
    endDate: endDate as DatePickerValue,
    onChangeStartDate,
    onChangeEndDate,
    //
    open,
    onOpen,
    onClose,
    onReset,
    //
    selected: !!startDate && !!endDate,
    error,
    //
    label: fDateRangeShortLabel(startDate, endDate, true),
    shortLabel: fDateRangeShortLabel(startDate, endDate),
    //
    setStartDate,
    setEndDate,
  };
}
