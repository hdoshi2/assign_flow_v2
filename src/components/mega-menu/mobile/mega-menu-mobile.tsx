import { useState, useEffect, useCallback, cloneElement } from 'react';

import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { usePathname } from 'src/routes/hooks';

import { NavProps } from '../types';
import { NavList } from './nav-list';
import { NavUl } from '../../nav-section';
import { mobileCssVars } from '../css-vars';
import { megaMenuClasses } from '../classes';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

export default function MegaMenuMobile({
  sx,
  data,
  slots,
  slotProps,
  ...other
}: NavProps & {
  slots?: {
    button?: React.ReactElement;
    topNode?: React.ReactNode;
    bottomNode?: React.ReactNode;
  };
}) {
  const theme = useTheme();

  const pathname = usePathname();

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  useEffect(() => {
    if (openDrawer) {
      handleCloseDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const spacing = slotProps?.gap ? `${slotProps?.gap}px` : 'var(--nav-item-spacing)';

  const renderButton = slots?.button ? (
    cloneElement(slots.button, { onClick: handleOpenDrawer })
  ) : (
    <IconButton onClick={handleOpenDrawer}>
      <SvgIcon>
        <path
          opacity="0.32"
          d="M15.7798 4.5H5.2202C4.27169 4.5 3.5 5.06057 3.5 5.75042C3.5 6.43943 4.27169 7 5.2202 7H15.7798C16.7283 7 17.5 6.43943 17.5 5.75042C17.5 5.06054 16.7283 4.5 15.7798 4.5Z"
          fill="currentColor"
        />
        <path
          d="M18.7798 10.75H8.2202C7.27169 10.75 6.5 11.3106 6.5 12.0004C6.5 12.6894 7.27169 13.25 8.2202 13.25H18.7798C19.7283 13.25 20.5 12.6894 20.5 12.0004C20.5 11.3105 19.7283 10.75 18.7798 10.75Z"
          fill="currentColor"
        />
        <path
          d="M15.7798 17H5.2202C4.27169 17 3.5 17.5606 3.5 18.2504C3.5 18.9394 4.27169 19.5 5.2202 19.5H15.7798C16.7283 19.5 17.5 18.9394 17.5 18.2504C17.5 17.5606 16.7283 17 15.7798 17Z"
          fill="currentColor"
        />
      </SvgIcon>
    </IconButton>
  );

  return (
    <>
      {renderButton}

      <Drawer
        open={openDrawer}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            width: NAV_WIDTH,
            display: 'flex',
            flexDirection: 'column',
          },
        }}
        sx={{
          ...mobileCssVars,
        }}
      >
        {slots?.topNode && slots?.topNode}

        <Stack
          component="nav"
          className={megaMenuClasses.mobile.root}
          sx={{
            ...theme.mixins.hideScrollY,
            flex: '1 1 auto',
            ...sx,
          }}
          {...other}
        >
          <NavUl sx={{ gap: spacing }}>
            {data.map((list) => (
              <NavList key={list.title} data={list} slotProps={slotProps} navWidth={NAV_WIDTH} />
            ))}
          </NavUl>
        </Stack>

        {slots?.bottomNode && slots?.bottomNode}
      </Drawer>
    </>
  );
}
