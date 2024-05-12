import { memo } from 'react';

import Stack from '@mui/material/Stack';

import { NavProps } from '../types';
import { NavList } from './nav-list';
import { NavUl } from '../../nav-section';
import { mobileCssVars } from '../css-vars';
import { navBasicClasses } from '../classes';

// ----------------------------------------------------------------------

function NavBasicMobile({ data, slotProps, enabledRootRedirect, sx, ...other }: NavProps) {
  const spacing = slotProps?.gap ? `${slotProps?.gap}px` : 'var(--nav-item-spacing)';

  return (
    <Stack
      component="nav"
      className={navBasicClasses.mobile.root}
      sx={{
        ...mobileCssVars,
        '--item-spacing': spacing,
        ...sx,
      }}
      {...other}
    >
      <NavUl
        sx={{
          flex: '1 1 auto',
          gap: 'var(--item-spacing)',
        }}
      >
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

export default memo(NavBasicMobile);
