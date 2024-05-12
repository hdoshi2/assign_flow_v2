import { memo } from 'react';

import Stack from '@mui/material/Stack';

import { NavList } from './nav-list';
import Scrollbar from '../../scrollbar';
import { NavUl, NavLi } from '../styles';
import { navSectionClasses } from '../classes';
import { horizontalCssVars } from '../css-vars';
import { NavProps, NavGroupProps } from '../types';

// ----------------------------------------------------------------------

function NavSectionHorizontal({ data, slotProps, enabledRootRedirect, sx, ...other }: NavProps) {
  const spacing = slotProps?.gap ? `${slotProps?.gap}px` : 'var(--nav-item-spacing)';

  return (
    <Scrollbar
      slotProps={{
        content: { display: 'flex' },
      }}
    >
      <Stack
        component="nav"
        direction="row"
        alignItems="center"
        className={navSectionClasses.horizontal.root}
        sx={{
          ...horizontalCssVars,
          '--item-spacing': spacing,
          mx: 'auto',
          minHeight: 'var(--nav-height)',
          ...sx,
        }}
        {...other}
      >
        <NavUl sx={{ flexDirection: 'row', gap: 'var(--item-spacing)' }}>
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
    </Scrollbar>
  );
}

export default memo(NavSectionHorizontal);

// ----------------------------------------------------------------------

function Group({ items, slotProps, enabledRootRedirect }: NavGroupProps) {
  return (
    <NavLi>
      <NavUl sx={{ flexDirection: 'row', gap: 'var(--item-spacing)' }}>
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
