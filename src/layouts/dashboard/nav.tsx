import { useEffect } from 'react';

import Toolbar from '@mui/material/Toolbar';
import Stack, { StackProps } from '@mui/material/Stack';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import { Theme, SxProps, useTheme } from '@mui/material/styles';

import { usePathname } from 'src/routes/hooks';

import { BREAKPOINT } from 'src/layouts/config-layout';

import Logo from 'src/components/logo';
import {
  NavSectionMini,
  NavItemBaseProps,
  NavSectionVertical,
  NavSectionHorizontal,
} from 'src/components/nav-section';

import NavUpgrade from '../components/nav-upgrade';
import HeaderShadow from '../components/header-shadow';
import NavToggleButton from '../components/nav-toggle-button';

// ----------------------------------------------------------------------

type NavVerticalProps = StackProps & {
  isMini: boolean;
  data: {
    subheader?: string;
    items: NavItemBaseProps[];
  }[];
};

export function NavVertical({ isMini, data, children, sx, ...other }: NavVerticalProps) {
  const theme = useTheme();

  const breakpointUp = theme.breakpoints.up(BREAKPOINT.DASHBOARD);

  const renderVerticalContent = (
    <>
      <Logo sx={{ my: 2.5, ml: 4 }} />

      <NavSectionVertical data={data} sx={{ flex: '1 1 auto', px: 2 }} />

      <NavUpgrade />
    </>
  );

  const renderMiniContent = (
    <>
      <Logo sx={{ mx: 'auto', my: 2.5 }} />

      <NavSectionMini data={data} sx={{ flex: '1 1 auto', px: 0.5, pb: 2 }} />
    </>
  );

  return (
    <Stack
      sx={{
        ...theme.mixins.hideScrollY,
        top: 0,
        left: 0,
        height: 1,
        display: 'none',
        position: 'fixed',
        borderRightWidth: 1,
        bgcolor: 'var(--nav-bg)',
        borderRightStyle: 'solid',
        borderRightColor: 'var(--nav-border-color)',
        zIndex: 'var(--layout-nav-zIndex)',
        width: isMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
        transition: theme.transitions.create(['width'], {
          easing: 'var(--layout-transition-easing)',
          duration: 'var(--layout-transition-duration)',
        }),
        [breakpointUp]: {
          display: 'flex',
        },
        ...sx,
      }}
      {...other}
    >
      <NavToggleButton
        sx={{
          transition: theme.transitions.create(['left'], {
            easing: 'var(--layout-transition-easing)',
            duration: 'var(--layout-transition-duration)',
          }),
          left: isMini
            ? 'calc(var(--layout-nav-mini-width) - 12px)'
            : 'calc(var(--layout-nav-vertical-width) - 12px)',
        }}
      />
      {isMini ? renderMiniContent : renderVerticalContent}
    </Stack>
  );
}

// ----------------------------------------------------------------------

type NavHorizontalProps = AppBarProps & {
  data: {
    subheader?: string;
    items: NavItemBaseProps[];
  }[];
};

export function NavHorizontal({ data, sx }: NavHorizontalProps) {
  const theme = useTheme();

  const breakpointUp = theme.breakpoints.up(BREAKPOINT.DASHBOARD);

  const renderContent = (
    <NavSectionHorizontal
      data={data}
      sx={{
        minHeight: 'var(--layout-header-desktop-horizontal-height)',
      }}
    />
  );

  return (
    <AppBar
      component="div"
      position="sticky"
      sx={{
        ...sx,
        display: 'none',
        top: 'var(--layout-header-desktop-horizontal-height)',
        [breakpointUp]: {
          display: 'flex',
        },
      }}
    >
      <Toolbar
        sx={{
          backdropFilter: `blur(6px)`,
          WebkitBackdropFilter: `blur(6px)`,
          backgroundColor: 'var(--nav-bg-blur)',
        }}
      >
        {renderContent}
      </Toolbar>

      <HeaderShadow />
    </AppBar>
  );
}

// ----------------------------------------------------------------------

type NavMobileProps = {
  openNav: boolean;
  onCloseNav: VoidFunction;
  sx?: SxProps<Theme>;
  data: {
    subheader?: string;
    items: NavItemBaseProps[];
  }[];
};

export function NavMobile({ data, openNav, onCloseNav, sx }: NavMobileProps) {
  const theme = useTheme();

  const pathname = usePathname();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <>
      <Logo sx={{ mt: 3, ml: 4, mb: 1 }} />

      <NavSectionVertical data={data} sx={{ flex: '1 1 auto' }} />

      <NavUpgrade />
    </>
  );

  return (
    <Drawer
      open={openNav}
      onClose={onCloseNav}
      sx={{
        ...sx,
        [`& .${drawerClasses.paper}`]: {
          ...theme.mixins.hideScrollY,
          bgcolor: 'var(--nav-bg)',
          width: 'var(--layout-nav-vertical-width)',
        },
      }}
    >
      {renderContent}
    </Drawer>
  );
}
