import { z } from 'zod';
import dayjs from 'dayjs';

// ----------------------------------------------------------------------

export const schemaHelper = {
  date: (message = 'Date is required!') =>
    z.coerce
      .date()
      .nullable()
      .transform((dateString, ctx) => {
        const date = dayjs(dateString).format();

        const stringToDate = z.string().pipe(z.coerce.date());

        if (!dateString) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message });
        }

        if (!stringToDate.safeParse(date).success) {
          ctx.addIssue({ code: z.ZodIssueCode.invalid_date });
        }

        return date;
      }),
  // editor
  editor: (message = 'Editor is required!') => z.string().min(8, { message }), // include "" and <p></p>
  // object
  objectOrNull: (message = 'Autocomplete is required!') =>
    z
      .object({})
      .nullable()
      .refine((value) => value !== null, message),
  // checkbox
  checkbox: (message = 'Checkbox is required!') =>
    z.coerce.boolean().refine((bool) => bool === true, { message }),
  // switch
  switch: (message = 'Switch is required!') =>
    z.coerce.boolean().refine((bool) => bool === true, { message }),
  // file
  // files: () => z.any().refine((files) => files?.length > 1, 'Image is required.'),
  file: (message = 'File is required!') =>
    typeof window === 'undefined'
      ? z.null()
      : z.custom<File>(
          (file) => file instanceof File || (typeof file === 'string' && !!file.length),
          {
            message,
          }
        ),
  files: () =>
    typeof window === 'undefined'
      ? z.undefined()
      : z
          .array(z.custom<File>())
          .refine((files) => files.length !== 0, {
            message: 'Files is required!',
          })
          .refine((files) => files.length >= 2, {
            message: 'Must have at least 2 items',
          }),
};
