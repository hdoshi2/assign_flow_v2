import { memo, useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';

import { NavList } from './nav-list';
import { verticalCssVars } from '../css-vars';
import { navSectionClasses } from '../classes';
import { NavProps, NavGroupProps } from '../types';
import { NavUl, NavLi, Subheader } from '../styles';

// ----------------------------------------------------------------------

function NavSectionVertical({ data, slotProps, enabledRootRedirect, sx, ...other }: NavProps) {
  const spacing = slotProps?.gap ? `${slotProps?.gap}px` : 'var(--nav-item-spacing)';

  return (
    <Stack
      component="nav"
      className={navSectionClasses.vertical.root}
      sx={{
        ...verticalCssVars,
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
        {data.map((group) => (
          <Group
            key={group.subheader ?? group.items[0].title}
            subheader={group.subheader}
            items={group.items}
            slotProps={slotProps}
            enabledRootRedirect={enabledRootRedirect}
          />
        ))}
      </NavUl>
    </Stack>
  );
}

export default memo(NavSectionVertical);

// ----------------------------------------------------------------------

function Group({ subheader, items, slotProps, enabledRootRedirect }: NavGroupProps) {
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const renderContent = (
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
  );

  return (
    <NavLi>
      {subheader ? (
        <>
          <Subheader open={open} onClick={handleToggle} sx={slotProps?.subheader}>
            {subheader}
          </Subheader>

          <Collapse in={open}>{renderContent}</Collapse>
        </>
      ) : (
        renderContent
      )}
    </NavLi>
  );
}
