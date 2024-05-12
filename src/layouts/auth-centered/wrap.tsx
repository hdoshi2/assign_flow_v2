import { useTheme } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

import { BREAKPOINT } from 'src/layouts/config-layout';

// ----------------------------------------------------------------------

export function Main({ children, sx, ...other }: StackProps) {
  const theme = useTheme();

  const breakpointUp = theme.breakpoints.up(BREAKPOINT.AUTH_CENTERED);

  return (
    <Stack
      component="main"
      flex="1 1 auto"
      alignItems="center"
      sx={{
        px: 2,
        py: 5,
        zIndex: 9,
        [breakpointUp]: {
          px: 0,
          py: 'calc(var(--layout-header-desktop-height) + 24px)',
          justifyContent: 'center',
        },
        ...sx,
      }}
      {...other}
    >
      <Stack
        sx={{
          py: 5,
          px: 3,
          width: 1,
          borderRadius: 2,
          bgcolor: 'background.default',
          boxShadow: theme.customShadows.card,
          maxWidth: 'var(--layout-auth-content-form-width)',
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
}
