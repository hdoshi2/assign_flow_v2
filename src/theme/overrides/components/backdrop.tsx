import { alpha, Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function backdrop(theme: Theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[800], 0.48),
        },
        invisible: {
          background: 'transparent',
        },
      },
    },
  };
}
