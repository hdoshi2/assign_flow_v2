import { FieldValues, useFormContext } from 'react-hook-form';

import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { fileData } from 'src/components/file-thumbnail';

// ----------------------------------------------------------------------

export function ValuesPreview() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const {
    watch,
    formState: { errors },
  } = useFormContext();

  const values = watch();

  if (!mdUp) {
    return null;
  }

  return (
    <Portal>
      <Stack
        sx={{
          ...theme.mixins.bgBlur(alpha(theme.palette.grey[900], 0.8)),
          py: 5,
          top: 0,
          px: 2.5,
          right: 0,
          height: 1,
          width: 280,
          position: 'fixed',
          overflowX: 'auto',
          color: 'common.white',
          zIndex: theme.zIndex.drawer,
        }}
      >
        <Typography variant="overline" sx={{ mb: 2, color: 'success.light' }}>
          Values
        </Typography>

        {Object.keys(values).map((value) => (
          <Stack key={value} spacing={0.5} sx={{ typography: 'caption', my: 0.5 }}>
            <Typography variant="caption" sx={{ color: 'warning.main' }}>
              {value} :
            </Typography>

            <strong>{parseValue(values, value)}</strong>
          </Stack>
        ))}

        <Divider sx={{ my: 2 }} />

        <Typography variant="overline" sx={{ mb: 2, color: 'error.light' }}>
          Errors
        </Typography>

        <Typography variant="caption" sx={{ color: 'error.light' }}>
          {JSON.stringify(Object.keys(errors), null, 2)}
        </Typography>
      </Stack>
    </Portal>
  );
}

// ----------------------------------------------------------------------

function parseValue(values: FieldValues, value: string) {
  if (value === 'singleUpload') {
    return JSON.stringify(values.singleUpload && fileData(values.singleUpload));
  }
  if (value === 'multiUpload') {
    return JSON.stringify(values.multiUpload.map((file: File) => fileData(file)));
  }
  return JSON.stringify(values[value]) || '---';
}
