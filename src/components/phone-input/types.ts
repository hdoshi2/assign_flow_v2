import { Country } from 'react-phone-number-input/input';

import { TextFieldProps } from '@mui/material/TextField';

// ----------------------------------------------------------------------

export type CountryCode = Country;

export type PhoneInputProps = Omit<TextFieldProps, 'onChange' | 'ref'> & {
  value: string;
  country?: Country;
  onChange: (newValue: string) => void;
};

export type CountryListProps = {
  countryCode?: Country;
  onClickCountry: (inputValue: Country) => void;
};
