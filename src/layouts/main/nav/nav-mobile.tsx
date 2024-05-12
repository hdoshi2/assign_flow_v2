import { useState, useEffect, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';

import { usePathname } from 'src/routes/hooks';

import Logo from 'src/components/logo';
import { NavUl } from 'src/components/nav-section';

import { NavProps } from './types';
import { NavList } from './nav-mobile-list';
import MenuButton from '../../components/menu-button';

// ----------------------------------------------------------------------

export default function NavMobile({ data, sx }: NavProps) {
  const theme = useTheme();

  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    setOpenMenu(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  return (
    <>
      <MenuButton onClick={handleOpenMenu} sx={{ ml: 1, ...sx }} />

      <Drawer
        open={openMenu}
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            width: 280,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Logo sx={{ mx: 2.5, my: 3 }} />

        <Stack
          component="nav"
          sx={{
            ...theme.mixins.hideScrollY,
            pb: 3,
            flex: '1 1 auto',
          }}
        >
          <NavUl>
            {data.map((list) => (
              <NavList key={list.title} data={list} />
            ))}
          </NavUl>
        </Stack>
      </Drawer>
    </>
  );
}
