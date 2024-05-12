import { z } from 'zod';
import { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import Stack, { StackProps } from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CircularProgress from '@mui/material/CircularProgress';

import { useBoolean } from 'src/hooks/use-boolean';

import { formatStr } from 'src/utils/format-time';

import { countries } from 'src/assets/data';

import Iconify from 'src/components/iconify';
import FormProvider, {
  RHFEditor,
  RHFSelect,
  RHFUpload,
  RHFSwitch,
  RHFSlider,
  RHFCheckbox,
  RHFTextField,
  RHFRadioGroup,
  RHFPhoneInput,
  RHFMultiSelect,
  RHFAutocomplete,
  RHFMultiCheckbox,
} from 'src/components/hook-form';

import { FormSchema } from './schema';
import { ValuesPreview } from './values-preview';

// ----------------------------------------------------------------------

const OPTIONS = [
  { value: 'option 1', label: 'Option 1' },
  { value: 'option 2', label: 'Option 2' },
  { value: 'option 3', label: 'Option 3' },
  { value: 'option 4', label: 'Option 4' },
  { value: 'option 5', label: 'Option 5' },
  { value: 'option 6', label: 'Option 6' },
  { value: 'option 7', label: 'Option 7' },
  { value: 'option 8', label: 'Option 8' },
];

type OptionType = {
  value: string;
  label: string;
};

export const defaultValues = {
  age: 0,
  email: '',
  fullName: '',
  phoneNumber: '',
  //
  editor: '',
  switch: false,
  radioGroup: '',
  autocomplete: null,
  //
  password: '',
  confirmPassword: '',
  //
  startDate: null,
  endDate: null,
  //
  singleUpload: '',
  // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWiX_zqs_k99i3NbNvTCFUDw81xGTMYh_9Hboqzjkew&s'

  multiUpload: [],
  //
  singleSelect: '',
  multiSelect: [],
  //
  singleCountry: '',
  multiCountry: [],
  //
  checkbox: false,
  multiCheckbox: [],
  //
  slider: 8,
  sliderRange: [15, 80],
};

type Props = {
  debug: boolean;
};

export function ReactHookForm({ debug }: Props) {
  const password = useBoolean();

  const methods = useForm<z.infer<typeof FormSchema>>({
    mode: 'all',
    resolver: zodResolver(FormSchema),
    defaultValues,
  });

  const {
    watch,
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const values = watch();

  // console.log('values', values.startDate);
  // console.log('errors', errors);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      reset();
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleDropSingleFile = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue('singleUpload', file, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleDropMultiFile = useCallback(
    (acceptedFiles: File[]) => {
      const files = values.multiUpload || [];

      setValue('multiUpload', [...files, ...acceptedFiles], {
        shouldValidate: true,
      });
    },
    [setValue, values.multiUpload]
  );

  return (
    <>
      {isSubmitting && (
        <Backdrop open sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}>
          <CircularProgress color="primary" />
        </Backdrop>
      )}

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Box
          gap={5}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          }}
          sx={{
            ...(debug && { pr: '280px' }),
          }}
        >
          <Stack spacing={3}>
            <Grid2>
              <Block>
                <RHFTextField name="fullName" label="Full Name" />
              </Block>

              <Block>
                <RHFTextField name="email" label="Email address" />
              </Block>
            </Grid2>

            <Grid2>
              <Block label="RHFPhoneInput">
                <RHFPhoneInput name="phoneNumber" label="Phone number" />
              </Block>

              <Block>
                <RHFTextField name="age" label="Age" type="number" />
              </Block>
            </Grid2>

            <Grid2>
              <Controller
                name="startDate"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <DatePicker
                    {...field}
                    label="Start date"
                    format={formatStr.split.date}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!error,
                        helperText: error?.message,
                      },
                    }}
                  />
                )}
              />

              <Controller
                name="endDate"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <DatePicker
                    {...field}
                    label="End date"
                    format={formatStr.split.date}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!error,
                        helperText: error?.message,
                      },
                    }}
                  />
                )}
              />
            </Grid2>

            <Grid2>
              <Block>
                <RHFTextField
                  name="password"
                  label="Password"
                  type={password.value ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={password.onToggle} edge="end">
                          <Iconify
                            icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Block>

              <Block>
                <RHFTextField
                  name="confirmPassword"
                  label="Confirm Password"
                  type={password.value ? 'text' : 'password'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={password.onToggle} edge="end">
                          <Iconify
                            icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Block>
            </Grid2>

            <Block label="RHFAutocomplete">
              <RHFAutocomplete
                name="autocomplete"
                label="Autocomplete"
                options={OPTIONS}
                getOptionLabel={(option: OptionType | string) => (option as OptionType).label}
                isOptionEqualToValue={(option, value) => option.value === value.value}
                renderOption={(props, option) => (
                  <li {...props} key={option.value}>
                    {option.label}
                  </li>
                )}
              />
            </Block>

            <Block label="RHFAutocomplete">
              <RHFAutocomplete
                name="singleCountry"
                type="country"
                label="Single country"
                placeholder="Choose a country"
                fullWidth
                options={countries.map((option) => option.label)}
                getOptionLabel={(option) => option}
              />
            </Block>

            <Block label="RHFAutocomplete">
              <RHFAutocomplete
                name="multiCountry"
                type="country"
                label="Multi country"
                placeholder="Choose a country"
                multiple
                fullWidth
                limitTags={3}
                options={countries.map((option) => option.label)}
                getOptionLabel={(option) => option}
              />
            </Block>

            <Grid2>
              <Block label="RHFSelect">
                <RHFSelect name="singleSelect" label="Single select">
                  <MenuItem value="">None</MenuItem>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                  {OPTIONS.map((option) => (
                    <MenuItem key={option.value} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </RHFSelect>
              </Block>

              <Block label="RHFMultiSelect">
                <RHFMultiSelect
                  chip
                  checkbox
                  name="multiSelect"
                  label="Multi select"
                  options={OPTIONS}
                />
              </Block>
            </Grid2>

            <Block label="RHFEditor">
              <RHFEditor fullItem name="editor" />
            </Block>
          </Stack>

          <Stack spacing={3}>
            <Block label="RHFUpload">
              <RHFUpload
                name="singleUpload"
                maxSize={3145728}
                onDrop={handleDropSingleFile}
                onDelete={() => setValue('singleUpload', null, { shouldValidate: true })}
              />
            </Block>

            <Block label="RHFUpload">
              <RHFUpload
                multiple
                thumbnail
                name="multiUpload"
                maxSize={3145728}
                maxFiles={5}
                onDrop={handleDropMultiFile}
                onRemove={(inputFile) =>
                  setValue(
                    'multiUpload',
                    values.multiUpload && values.multiUpload?.filter((file) => file !== inputFile),
                    { shouldValidate: true }
                  )
                }
                onRemoveAll={() => setValue('multiUpload', [], { shouldValidate: true })}
                onUpload={() => console.info('ON UPLOAD')}
              />
            </Block>

            <RHFCheckbox name="checkbox" label="RHFCheckbox" />

            <RHFSwitch name="switch" label="RHFSwitch" />

            <RHFRadioGroup
              row
              name="radioGroup"
              label="RHFRadioGroup"
              spacing={4}
              options={[
                { value: 'option 1', label: 'Radio 1' },
                { value: 'option 2', label: 'Radio 2' },
                { value: 'option 3', label: 'Radio 3' },
              ]}
            />

            <RHFMultiCheckbox
              row
              name="multiCheckbox"
              label="RHFMultiCheckbox"
              spacing={4}
              options={[
                { value: 'option 1', label: 'Checkbox 1' },
                { value: 'option 2', label: 'Checkbox 2' },
                { value: 'option 3', label: 'Checkbox 3' },
              ]}
            />

            <Block label="RHFSlider">
              <RHFSlider name="slider" />
            </Block>

            <Block label="RHFSlider">
              <RHFSlider name="sliderRange" />
            </Block>

            <LoadingButton
              fullWidth
              color="info"
              size="large"
              type="submit"
              variant="soft"
              loading={isSubmitting}
            >
              Submit to Check
            </LoadingButton>
          </Stack>
        </Box>

        {debug && <ValuesPreview />}
      </FormProvider>
    </>
  );
}

// ----------------------------------------------------------------------

type BlockProps = StackProps & {
  label?: string;
  children: React.ReactNode;
};

function Block({ label = 'RHFTextField', sx, children }: BlockProps) {
  return (
    <Stack spacing={1} sx={{ width: 1, ...sx }}>
      <Typography
        variant="caption"
        sx={{
          textAlign: 'right',
          fontStyle: 'italic',
          color: 'text.disabled',
          fontSize: (theme) => theme.typography.pxToRem(10),
        }}
      >
        {label}
      </Typography>
      {children}
    </Stack>
  );
}

// ----------------------------------------------------------------------

function Grid2({ children, sx, ...other }: BlockProps) {
  return (
    <Box
      rowGap={3}
      columnGap={2}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
      }}
      sx={{ ...sx }}
      {...other}
    >
      {children}
    </Box>
  );
}
