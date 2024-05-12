import { memo } from 'react';

import Stack from '@mui/material/Stack';

import { NavList } from './nav-list';
import { NavUl, NavLi } from '../styles';
import { miniCssVars } from '../css-vars';
import { navSectionClasses } from '../classes';
import { NavProps, NavGroupProps } from '../types';

// ----------------------------------------------------------------------

function NavSectionMini({ data, slotProps, enabledRootRedirect, sx, ...other }: NavProps) {
  const spacing = slotProps?.gap ? `${slotProps?.gap}px` : 'var(--nav-item-spacing)';

  return (
    <Stack
      component="nav"
      className={navSectionClasses.mini.root}
      sx={{
        ...miniCssVars,
        '--item-spacing': spacing,
        ...sx,
      }}
      {...other}
    >
      <NavUl sx={{ flex: '1 1 auto', gap: 'var(--item-spacing)' }}>
        {data.map((group) => (
          <Group
            key={group.subheader || group.items[0].title}
            items={group.items}
            slotProps={slotProps}
            enabledRootRedirect={enabledRootRedirect}
          />
        ))}
      </NavUl>
    </Stack>
  );
}

export default memo(NavSectionMini);

// ----------------------------------------------------------------------

function Group({ items, slotProps, enabledRootRedirect }: NavGroupProps) {
  return (
    <NavLi>
      <NavUl sx={{ gap: 'var(--item-spacing)' }}>
        {items.map((list) => (
          <NavList
            key={list.title}
            data={list}
            depth={1}
            slotProps={slotProps}
            enabledRootRedirect={enabledRootRedirect}
          />
        ))}
      </NavUl>
    </NavLi>
  );
}
