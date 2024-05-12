'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';
import { MegaMenuMobile } from 'src/components/mega-menu';

import { NAV_ITEMS } from './data';

// ----------------------------------------------------------------------

export function DemoMegaMenuMobile() {
  return (
    <MegaMenuMobile
      data={NAV_ITEMS}
      slots={{
        button: (
          <Button color="inherit" variant="contained" startIcon={<Iconify icon="carbon:menu" />}>
            Menu Mobile
          </Button>
        ),
        topNode: <Logo sx={{ mx: 2.5, my: 3 }} />,
        bottomNode: (
          <Divider>
            <Box
              sx={{
                p: 2,
                textAlign: 'center',
                color: 'text.secondary',
                typography: 'subtitle2',
              }}
            >
              Bottom
            </Box>
          </Divider>
        ),
      }}
    />
  );
}
