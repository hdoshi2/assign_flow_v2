import { useState, forwardRef } from 'react';
import PhoneNumberInput from 'react-phone-number-input/input';

import InputAdornment from '@mui/material/InputAdornment';
import TextField, { TextFieldProps } from '@mui/material/TextField';

import { getCountryCode } from './utils';
import { CountryListPopover } from './list';
import { CountryCode, PhoneInputProps } from './types';

// ----------------------------------------------------------------------

const PhoneInput = forwardRef<HTMLDivElement, PhoneInputProps>(
  ({ value, onChange, placeholder, country: inputCountryCode, ...other }, ref) => {
    const defaultCountryCode = getCountryCode(value, inputCountryCode);

    const [countryCode, setCountry] = useState(defaultCountryCode);

    return (
      <PhoneNumberInput
        ref={ref}
        country={countryCode}
        inputComponent={CustomInput}
        value={value}
        onChange={onChange}
        placeholder={placeholder ?? 'Enter phone number'}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ ml: 1 }}>
              <CountryListPopover
                countryCode={countryCode}
                onClickCountry={(inputValue: CountryCode) => setCountry(inputValue)}
              />
            </InputAdornment>
          ),
        }}
        {...other}
      />
    );
  }
);

export default PhoneInput;

// ----------------------------------------------------------------------

const CustomInput = forwardRef<HTMLInputElement, TextFieldProps>(({ ...props }, ref) => (
  <TextField inputRef={ref} {...props} />
));
