import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import { useBoolean } from 'src/hooks/use-boolean';

import { BREAKPOINT, layoutVars, useNavVars } from 'src/layouts/config-layout';

import { useSettingsContext } from 'src/components/settings';

import { Header } from './header';
import { Main, Wrap } from './wrap';
import { NavMobile, NavVertical, NavHorizontal } from './nav';
import { useNavData } from './config-navigation-with-translate';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const theme = useTheme();

  const nav = useBoolean();

  const navData = useNavData();

  const settings = useSettingsContext();

  const navVars = useNavVars(settings.themeNavColor, settings.themeMode) as React.CSSProperties;

  const breakpointUp = theme.breakpoints.up(BREAKPOINT.DASHBOARD);

  const isMini = settings.themeLayout === 'mini';

  const isHorizontal = settings.themeLayout === 'horizontal';

  const renderHorizontal = (
    <>
      {/* Put you alert */}
      <Header onOpenNav={nav.onTrue} />
      <NavHorizontal data={navData} />
      <Main sx={{ '--layout-dashboard-content-pt': '40px' }}>{children}</Main>
      {/* Put you footer */}
    </>
  );

  const renderVertical = (
    <>
      <NavVertical isMini={isMini} data={navData} />
      <Stack
        flex="1 1 auto"
        sx={{
          transition: theme.transitions.create(['padding-left'], {
            easing: 'var(--layout-transition-easing)',
            duration: 'var(--layout-transition-duration)',
          }),
          [breakpointUp]: {
            pl: 'var(--layout-nav-vertical-width)',
            ...(isMini && {
              pl: 'var(--layout-nav-mini-width)',
            }),
          },
        }}
      >
        {/* Put you alert */}
        <Header onOpenNav={nav.onTrue} />
        <Main>{children}</Main>
        {/* Put you footer */}
      </Stack>
    </>
  );

  return (
    <Wrap
      sx={{
        ...layoutVars,
        ...navVars,
      }}
    >
      <NavMobile
        data={navData}
        openNav={nav.value}
        onCloseNav={nav.onFalse}
        sx={{ ...layoutVars, ...navVars }}
      />

      {isHorizontal ? renderHorizontal : renderVertical}
    </Wrap>
  );
}
