import { memo } from 'react';

import Stack from '@mui/material/Stack';

import { NavProps } from '../types';
import { NavList } from './nav-list';
import { NavUl } from '../../nav-section';
import { navBasicClasses } from '../classes';
import { desktopCssVars } from '../css-vars';

// ----------------------------------------------------------------------

function NavBasicDesktop({ data, slotProps, enabledRootRedirect, sx, ...other }: NavProps) {
  const spacing = slotProps?.gap ? `${slotProps?.gap}px` : 'var(--nav-item-spacing)';

  return (
    <Stack
      component="nav"
      spacing={5}
      direction="row"
      className={navBasicClasses.desktop.root}
      sx={{
        ...desktopCssVars,
        '--item-spacing': spacing,
        ...sx,
      }}
      {...other}
    >
      <NavUl sx={{ flexDirection: 'row', gap: 'var(--item-spacing)' }}>
        {data.map((list) => (
          <NavList
            key={list.title}
            data={list}
            depth={1}
            slotProps={slotProps}
            enabledRootRedirect={enabledRootRedirect}
          />
        ))}
      </NavUl>
    </Stack>
  );
}

export default memo(NavBasicDesktop);
