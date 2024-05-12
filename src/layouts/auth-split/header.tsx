import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { BREAKPOINT } from 'src/layouts/config-layout';

import Logo from 'src/components/logo';

import HeaderSection from '../components/header-section';
import SettingsButton from '../components/settings-button';

// ----------------------------------------------------------------------

export function Header() {
  const theme = useTheme();

  const breakpointUp = theme.breakpoints.up(BREAKPOINT.AUTH_CENTERED);

  return (
    <HeaderSection
      sx={{
        position: 'static',
        [breakpointUp]: {
          position: 'fixed',
        },
      }}
      slots={{
        leftNode: <Logo />,
        rightNode: (
          <>
            <SettingsButton />

            <Link
              href={paths.faqs}
              component={RouterLink}
              color="inherit"
              sx={{ typography: 'subtitle2', ml: 1 }}
            >
              Need help?
            </Link>
          </>
        ),
      }}
      slotProps={{
        container: { maxWidth: false },
      }}
    />
  );
}
