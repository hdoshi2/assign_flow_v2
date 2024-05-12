import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';

import { BREAKPOINT, layoutVars } from 'src/layouts/config-layout';

import Logo from 'src/components/logo';

import NavMobile from './nav/nav-mobile';
import NavDesktop from './nav/nav-desktop';
import { navData } from './config-navigation';
import LoginButton from '../components/login-button';
import VersionLabel from '../components/version-label';
import HeaderSection from '../components/header-section';
import SettingsButton from '../components/settings-button';

// ----------------------------------------------------------------------

export function Header() {
  const theme = useTheme();

  const breakpointUp = theme.breakpoints.up(BREAKPOINT.MAIN);

  return (
    <HeaderSection
      slots={{
        leftNode: (
          <VersionLabel>
            <Logo />
          </VersionLabel>
        ),
        rightNode: (
          <>
            <NavDesktop
              data={navData}
              sx={{
                ...layoutVars,
                display: 'none',
                [breakpointUp]: {
                  display: 'flex',
                },
              }}
            />

            <Stack
              alignItems="center"
              sx={{
                flexDirection: 'row',
                [breakpointUp]: {
                  flexDirection: 'row-reverse',
                },
              }}
            >
              <Button variant="contained" target="_blank" rel="noopener" href={paths.minimalUI}>
                Purchase Now
              </Button>

              <LoginButton
                sx={{
                  display: 'none',
                  [breakpointUp]: {
                    display: 'inline-flex',
                  },
                }}
              />

              <SettingsButton
                sx={{
                  ml: 1,
                  [breakpointUp]: { ml: 0, mr: 2 },
                }}
              />

              <NavMobile
                data={navData}
                sx={{
                  [breakpointUp]: {
                    display: 'none',
                  },
                }}
              />
            </Stack>
          </>
        ),
      }}
    />
  );
}
