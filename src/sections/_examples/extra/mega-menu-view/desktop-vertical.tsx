import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { MegaMenuDesktopVertical } from 'src/components/mega-menu';

import { NAV_ITEMS } from './data';

// ----------------------------------------------------------------------

export function DemoMegaMenuDesktopVertical() {
  return (
    <Stack direction="row" spacing={3} sx={{ height: 640, width: 1 }}>
      <Stack
        component={Paper}
        variant="outlined"
        sx={{
          width: 260,
          flexShrink: 0,
          display: 'flex',
          borderRadius: 2,
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6" sx={{ p: 2 }}>
          Menu Vertical
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <MegaMenuDesktopVertical
          data={NAV_ITEMS}
          slotProps={{
            // gap: 4,
            rootItem: {
              sx: {
                typography: 'subtitle1',
              },
              icon: {},
              title: {
                fontFamily: (theme) => theme.typography.fontSecondaryFamily,
              },
              info: {},
              arrow: {},
            },
            subItem: {},
            paper: { top: 40 },
            subheader: {},
            tags: {},
            moreLink: {},
            carousel: {
              sx: {},
              displayCount: 8,
            },
          }}
        />
      </Stack>

      <Box
        sx={{
          height: 1,
          borderRadius: 2,
          flex: '1 1 auto',
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      />
    </Stack>
  );
}
