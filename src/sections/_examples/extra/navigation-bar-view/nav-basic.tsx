import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { useBoolean } from 'src/hooks/use-boolean';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { NavBasicMobile, NavBasicDesktop } from 'src/components/nav-basic';

import { BASIC_NAV_ITEMS } from './data';

// ----------------------------------------------------------------------

export function NavBasic() {
  const mobileOpen = useBoolean();

  return (
    <>
      <Stack
        spacing={2}
        variant="outlined"
        component={Paper}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ p: 2, width: 1, borderRadius: 2 }}
      >
        <IconButton onClick={mobileOpen.onTrue}>
          <Iconify icon="carbon:menu" />
        </IconButton>

        <NavBasicDesktop
          data={BASIC_NAV_ITEMS}
          slotProps={{
            // gap: 40,
            rootItem: {
              sx: {},
              icon: {},
              texts: {},
              title: {
                typography: 'subtitle1',
                fontFamily: (theme) => theme.typography.fontSecondaryFamily,
              },
              caption: {},
              arrow: {},
            },
            subItem: {
              sx: {},
              icon: {},
              texts: {},
              title: {},
              caption: {},
              arrow: {},
            },
            paper: {},
          }}
        />
      </Stack>

      <Drawer
        open={mobileOpen.value}
        onClose={mobileOpen.onFalse}
        PaperProps={{
          sx: {
            p: 2.5,
            width: 280,
          },
        }}
      >
        <Logo sx={{ mb: 2 }} />
        <NavBasicMobile
          data={BASIC_NAV_ITEMS}
          slotProps={{
            // gap: 8,
            rootItem: {
              sx: {},
              icon: {},
              texts: {},
              title: {
                typography: 'subtitle1',
                fontFamily: (theme) => theme.typography.fontSecondaryFamily,
              },
              caption: {},
              info: {},
              arrow: {},
            },
            subItem: {
              sx: {},
              icon: {},
              texts: {},
              title: {},
              caption: {},
              info: {},
              arrow: {},
            },
            paper: {},
          }}
        />
      </Drawer>
    </>
  );
}
