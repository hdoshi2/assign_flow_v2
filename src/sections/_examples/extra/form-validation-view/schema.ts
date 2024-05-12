import * as Yup from 'yup';
import { z, ZodType } from 'zod';
import { isValidPhoneNumber } from 'react-phone-number-input/input';

import { fDate, fIsAfter } from 'src/utils/format-time';

import { schemaHelper } from 'src/components/hook-form';

import { FormData } from './types';

// ----------------------------------------------------------------------

export const FormSchema: ZodType<FormData> = z
  .object({
    fullName: z
      .string()
      .min(1, 'Full name is required!')
      .min(6, 'Mininum 6 characters')
      .max(32, 'Maximum 32 characters'),
    email: z.string().min(1, 'Email is required!').email('Email must be a valid email address'),
    phoneNumber: z
      .string()
      .min(1, 'Phone number is required!')
      .refine((data) => isValidPhoneNumber(data), 'Invalid phone number!'),
    age: z
      .number()
      .min(1, 'Age is required!')
      .min(18, 'Age must be between 18 and 100')
      .max(100, 'Age must be between 18 and 100'),
    startDate: schemaHelper.date('Start date is required!'),
    endDate: schemaHelper.date('End date is required!'),
    password: z.string().min(1, 'Password is required!').min(6, 'Password is too short!'),
    confirmPassword: z.string().min(1, 'Confirm password is required!'),
    autocomplete: schemaHelper.objectOrNull(),
    /* country */
    singleCountry: z.string().min(1, { message: 'Single country is required!' }),
    multiCountry: z.string().array().min(2, 'Must have at least 2 items'),
    /* select */
    singleSelect: z.string().min(1, { message: 'Single select is required!' }),
    multiSelect: z.string().array().min(2, 'Must have at least 2 items'),
    /* editor */
    editor: schemaHelper
      .editor()
      .min(100, { message: 'Content must be at least 100 characters' })
      .max(200, { message: 'Content must be less than 200 characters' }),
    /* checkbox */
    checkbox: schemaHelper.checkbox(),
    multiCheckbox: z.string().array().min(1, 'Choose at least one option!'),
    //
    switch: schemaHelper.checkbox('Switch is required!'),
    radioGroup: z.string().min(1, { message: 'Choose at least one option!' }),
    //
    slider: z.number().min(10, 'Mininum value is >= 10'),
    sliderRange: z
      .number()
      .array()
      .refine((data) => data[0] >= 20 && data[1] <= 80, 'Range must be between 20 and 80'),
    //
    singleUpload: schemaHelper.file(),
    multiUpload: schemaHelper.files(),
    // multiUpload: z.custom<(File | string)[]>((v) => !!v.length, {
    //   message: 'Images is required',
    // }),
    // multiUpload: schemaHelper.files(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match!',
    path: ['confirmPassword'],
  })
  .refine((data) => !fIsAfter(data.startDate, data.endDate), {
    message: 'End date cannot be earlier than start date.',
    path: ['endDate'],
  });

// ----------------------------------------------------------------------

export const FormSchema2 = Yup.object().shape({
  fullName: Yup.string()
    .required('Full name is required')
    .min(6, 'Mininum 6 characters')
    .max(32, 'Maximum 32 characters'),
  email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  phoneNumber: Yup.mixed<string>()
    .required('Phone number is required')
    .test('is-valid', 'Invalid phone number', (value) => {
      if (!value) {
        return false;
      }

      return isValidPhoneNumber(value);
    }),
  age: Yup.number()
    .required('Age is required')
    .moreThan(18, 'Age must be between 18 and 100')
    .lessThan(100, 'Age must be between 18 and 100'),
  //
  startDate: Yup.mixed<any>().nullable().required('Start date is required'),
  endDate: Yup.mixed<any>()
    .required('End date is required')
    .test(
      'date-min',
      'End date must be later than start date',
      (value, { parent }) => !fIsAfter(fDate(parent?.startDate), fDate(value))
    ),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be of minimum 6 characters length'),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], "Password's not match"),
  //
  slider: Yup.number().required('Slider is required').min(10, 'Mininum value is >= 10'),
  sliderRange: Yup.mixed()
    .required('Slider range is is required')
    .test('min', 'Range must be between 20 and 80', (value: any) => value[0] >= 20)
    .test('max', 'Range must be between 20 and 80', (value: any) => value[1] <= 80),
  //
  singleUpload: Yup.mixed<any>().nullable().required('Single upload is required'),
  multiUpload: Yup.array().min(2, 'Must have at least 2 items'),
  //
  checkbox: Yup.boolean().oneOf([true], 'Checkbox is required'),
  multiCheckbox: Yup.array().min(1, 'Choose at least one option'),
  //
  singleSelect: Yup.string().required('Single select is required'),
  multiSelect: Yup.array().min(2, 'Must have at least 2 items'),
  //
  singleCountry: Yup.string().required('Country is required'),
  multiCountry: Yup.array().min(2, 'Must have at least 2 items'),
  //
  switch: Yup.boolean().oneOf([true], 'Switch is required'),
  radioGroup: Yup.string().required('Choose at least one option'),
  editor: Yup.string().required('Editor is required'),
  autocomplete: Yup.mixed<any>().nullable().required('Autocomplete is required'),
});
