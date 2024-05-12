import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { NodeProps } from './data';

// ----------------------------------------------------------------------

export function SimpleNode({ name, role, sx }: NodeProps) {
  return (
    <Stack
      onClick={() => console.info(name)}
      sx={{
        p: 2,
        borderRadius: 1.5,
        cursor: 'pointer',
        display: 'inline-flex',
        textTransform: 'capitalize',
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
        border: (theme) => `1px solid ${alpha(theme.palette.primary.main, 0.24)}`,
        color: (theme) => (theme.palette.mode === 'light' ? 'primary.darker' : 'primary.lighter'),
        ...sx,
      }}
    >
      <Typography variant="subtitle2">{name}</Typography>
      <Typography variant="caption" sx={{ opacity: 0.48 }}>
        {role}
      </Typography>
    </Stack>
  );
}
