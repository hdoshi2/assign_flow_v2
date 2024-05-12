import { useTheme } from '@mui/material/styles';
import Stack, { StackProps } from '@mui/material/Stack';

import { BREAKPOINT } from 'src/layouts/config-layout';

// ----------------------------------------------------------------------

export function Main({ children, sx, ...other }: StackProps) {
  const theme = useTheme();

  const breakpointUp = theme.breakpoints.up(BREAKPOINT.AUTH_SPLIT);

  return (
    <Stack
      component="main"
      flex="1 1 auto"
      sx={{
        [breakpointUp]: {
          flexDirection: 'row',
        },
        ...sx,
      }}
      {...other}
    >
      {children}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function Content({ children, sx, ...other }: StackProps) {
  const theme = useTheme();

  const breakpointUp = theme.breakpoints.up(BREAKPOINT.AUTH_SPLIT);

  return (
    <Stack
      flex="1 1 auto"
      alignItems="center"
      sx={{
        px: 2,
        py: 5,
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
          width: 1,
          maxWidth: 'var(--layout-auth-content-form-width)',
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
}
