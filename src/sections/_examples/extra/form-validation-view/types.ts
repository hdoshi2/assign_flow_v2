// ----------------------------------------------------------------------

export type FormData = {
  age: number;
  email: string;
  fullName: string;
  phoneNumber: string;
  //
  editor: string;
  switch: boolean;
  radioGroup: string;
  autocomplete: any | null;
  //
  password: string;
  confirmPassword: string;
  //
  startDate: Date | string | null;
  endDate: Date | string | null;
  //
  singleUpload?: File | string | null;
  multiUpload?: (File | string)[];
  //
  singleSelect: string;
  multiSelect: string[];
  //
  singleCountry: string;
  multiCountry: string[];
  //
  checkbox: boolean;
  multiCheckbox: string[];
  //
  slider: number;
  sliderRange: number[];
};
