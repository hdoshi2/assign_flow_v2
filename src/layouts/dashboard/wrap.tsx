import Stack, { StackProps } from '@mui/material/Stack';
import Container, { ContainerProps } from '@mui/material/Container';

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
    <Stack
      component="main"
      flex="1 1 auto"
      sx={{
        width: 1,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Stack>
  );
}

// ----------------------------------------------------------------------

type MainContentProps = ContainerProps & {
  disablePadding?: boolean;
};

export function MainContent({ disablePadding, children, sx, ...other }: MainContentProps) {
  return (
    <Container
      sx={{
        pt: 'var(--layout-dashboard-content-pt)',
        pb: 'var(--layout-dashboard-content-pb)',
        pl: { sm: 'var(--layout-dashboard-content-pl)' },
        pr: { sm: 'var(--layout-dashboard-content-pr)' },
        ...(disablePadding && {
          p: { xs: 0, sm: 0 },
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Container>
  );
}
