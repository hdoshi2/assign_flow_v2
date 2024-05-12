import Stack, { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

export function Wrap({ children, sx, ...other }: StackProps) {
  return (
    <Stack
      sx={{
        minHeight: '100vh',
        ...sx,
      }}
      {...other}
    >
      {children}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function Main({ children, sx, ...other }: StackProps) {
  return (
    <Stack component="main" flex="1 1 auto" sx={sx} {...other}>
      {children}
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function CompactContent({ children, sx, ...other }: StackProps) {
  return (
    <Stack
      sx={{
        width: 1,
        mx: 'auto',
        textAlign: 'center',
        py: { xs: 5, md: 10, lg: 12 },
        maxWidth: 'var(--layout-simple-content-compact-width)',
        ...sx,
      }}
      {...other}
    >
      {children}
    </Stack>
  );
}
