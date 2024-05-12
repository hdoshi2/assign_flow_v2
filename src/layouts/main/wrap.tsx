import Stack, { StackProps } from '@mui/material/Stack';

// ----------------------------------------------------------------------

export function Wrap({ children, sx, ...other }: StackProps) {
  return (
    <Stack
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
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
    <Stack
      component="main"
      flex="1 1 auto"
      sx={{
        ...sx,
      }}
      {...other}
    >
      {children}
    </Stack>
  );
}
