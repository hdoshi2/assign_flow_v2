import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import { NavSectionHorizontal } from 'src/components/nav-section';

import { NAV_ITEMS } from './data';

// ----------------------------------------------------------------------

export function NavHorizontal() {
  return (
    <Stack
      component={Paper}
      variant="outlined"
      sx={{
        px: 2,
        borderRadius: 2,
      }}
    >
      <NavSectionHorizontal
        data={NAV_ITEMS}
        slotProps={{
          // gap: 40,
          paper: {},
          rootItem: {
            sx: {
              // typography: 'subtitle1',
              // fontFamily: (theme) => theme.typography.fontSecondaryFamily,
            },
            icon: {},
            title: {},
            caption: {},
            info: {},
            arrow: {},
          },
          subItem: {
            sx: {},
            icon: {},
            title: {},
            caption: {},
            info: {},
            arrow: {},
          },
        }}
      />
    </Stack>
  );
}
