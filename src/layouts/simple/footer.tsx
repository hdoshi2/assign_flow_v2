import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Stack, { StackProps } from '@mui/material/Stack';

import Logo from 'src/components/logo';

// ----------------------------------------------------------------------

export function Footer({ sx, ...other }: StackProps) {
  return (
    <Stack
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      <Container>
        <Logo sx={{ mb: 1 }} />

        <Box sx={{ typography: 'caption' }}>
          © All rights reserved
          <br /> made by
          <Link href="https://minimals.cc/"> minimals.cc </Link>
        </Box>
      </Container>
    </Stack>
  );
}
