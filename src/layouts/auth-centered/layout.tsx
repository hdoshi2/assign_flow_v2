import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import { layoutVars } from 'src/layouts/config-layout';

import { Main } from './wrap';
import { Header } from './header';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function AuthCenteredLayout({ children }: Props) {
  const theme = useTheme();

  const renderBackground = (
    <Box
      sx={{
        width: 1,
        height: 1,
        zIndex: 1,
        content: "''",
        position: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        opacity: theme.palette.mode === 'light' ? 0.24 : 0.08,
        backgroundImage: 'url(/assets/background/overlay-3-blur.jpg)',
      }}
    />
  );

  return (
    <Stack
      sx={{
        ...layoutVars,
        minHeight: '100vh',
      }}
    >
      <Header />

      <Main>{children}</Main>

      {renderBackground}
    </Stack>
  );
}
