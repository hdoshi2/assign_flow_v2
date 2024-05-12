import { useState, useEffect, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { usePathname, useActiveLink } from 'src/routes/hooks';

import Iconify from '../../iconify';
import { NavItem } from './nav-item';
import { NavListProps } from '../types';
import { NavUl, NavLi } from '../../nav-section';
import { NavSubList } from '../components/nav-sub-list';

// ----------------------------------------------------------------------

export function NavList({ data, slotProps, navWidth }: NavListProps & { navWidth: number }) {
  const theme = useTheme();

  const pathname = usePathname();

  const active = useActiveLink(data.path, !!data.children);

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu(true);
    }
  }, [data.children]);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  const renderNavItem = (
    <NavItem
      // slots
      path={data.path}
      icon={data.icon}
      info={data.info}
      title={data.title}
      // state
      active={active}
      disabled={data.disabled}
      hasChild={!!data.children}
      open={data.children && !!openMenu}
      externalLink={data.path.includes('http')}
      // styles
      slotProps={slotProps?.rootItem}
      // actions
      onClick={handleOpenMenu}
    />
  );

  if (data.children) {
    return (
      <NavLi disabled={data.disabled}>
        {renderNavItem}

        <Drawer
          open={openMenu}
          onClose={handleCloseMenu}
          slotProps={{
            backdrop: { invisible: true },
          }}
          PaperProps={{
            sx: {
              width: navWidth - 8,
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ px: 1, py: 1.5 }}>
            <IconButton onClick={handleCloseMenu}>
              <Iconify icon="eva:arrow-ios-back-fill" width={16} />
            </IconButton>

            <Typography noWrap variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
              {data.title}
            </Typography>
          </Stack>

          <Divider />

          <Stack
            component="nav"
            spacing={4}
            sx={{
              ...theme.mixins.hideScrollY,
              p: 2,
              flex: '1 1 auto',
            }}
          >
            <NavUl sx={{ gap: 3 }}>
              <NavSubList data={data.children} slotProps={slotProps} />
            </NavUl>
          </Stack>
        </Drawer>
      </NavLi>
    );
  }

  return <NavLi disabled={data.disabled}>{renderNavItem}</NavLi>;
}
