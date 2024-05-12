import { Controller, useFormContext } from 'react-hook-form';

import Editor, { EditorProps } from '../editor';

// ----------------------------------------------------------------------

type Props = EditorProps & {
  name: string;
};

export default function RHFEditor({ name, helperText, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Editor {...field} errorText={error?.message} helperText={helperText} {...other} />
      )}
    />
  );
}
