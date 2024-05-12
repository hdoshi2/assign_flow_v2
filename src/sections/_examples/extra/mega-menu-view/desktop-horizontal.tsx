'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { MegaMenuDesktopHorizontal } from 'src/components/mega-menu';

import { NAV_ITEMS } from './data';

// ----------------------------------------------------------------------

export function DemoMegaMenuDesktopHorizontal() {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: 'background.paper',
        boxShadow: (theme) => theme.customShadows.z8,
      }}
    >
      <Toolbar component={Container}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Menu Horizon
        </Typography>

        <MegaMenuDesktopHorizontal
          data={NAV_ITEMS.slice(0, 5)}
          slotProps={{
            // gap: 32,
            rootItem: {
              sx: {},
              icon: {},
              title: {
                typography: 'subtitle1',
                fontFamily: (theme) => theme.typography.fontSecondaryFamily,
              },
              info: {},
              arrow: {},
            },
            subItem: {},
            paper: {},
            subheader: {},
            tags: {},
            moreLink: {},
            carousel: {
              sx: {},
              displayCount: 8,
            },
          }}
        />
      </Toolbar>
    </AppBar>
  );
}
