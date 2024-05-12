import { useState, useEffect, useCallback } from 'react';

import Collapse from '@mui/material/Collapse';

import { usePathname } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import { NavItem } from './nav-item';
import { NavListProps, NavSubListProps } from '../types';
import { NavLi, NavUl, navSectionClasses } from '../../nav-section';

// ----------------------------------------------------------------------

export function NavList({ data, depth, slotProps, enabledRootRedirect }: NavListProps) {
  const pathname = usePathname();

  const active = useActiveLink(data.path, !!data.children);

  const [openMenu, setOpenMenu] = useState(active);

  useEffect(() => {
    if (!active) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleToggleMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu((prev) => !prev);
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
      title={data.title}
      info={data.info}
      caption={data.caption}
      // state
      depth={depth}
      open={openMenu}
      hasChild={!!data.children}
      enabledRootRedirect={enabledRootRedirect}
      externalLink={!!data.path.includes('http')}
      // styles
      slotProps={depth === 1 ? slotProps?.rootItem : slotProps?.subItem}
      // actions
      onClick={handleToggleMenu}
    />
  );

  if (data.children) {
    return (
      <NavLi
        disabled={data.disabled}
        sx={{
          [`& .${navSectionClasses.li}`]: {
            '&:first-of-type': { mt: 'var(--item-spacing)' },
          },
        }}
      >
        {renderNavItem}

        <Collapse
          in={openMenu}
          sx={{
            ...(depth + 1 !== 1 && {
              pl: 'calc(var(--nav-item-padding-left) - 2px + var(--nav-icon-size) / 2)',
              [`& .${navSectionClasses.ul}`]: {
                position: 'relative',
                pl: '12px',
                '&::before': {
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: '1px',
                  content: '""',
                  opacity: 0.24,
                  bgcolor: 'grey.500',
                  position: 'absolute',
                },
              },
            }),
          }}
        >
          <NavSubList
            data={data.children}
            depth={depth}
            slotProps={slotProps}
            enabledRootRedirect={enabledRootRedirect}
          />
        </Collapse>
      </NavLi>
    );
  }

  return <NavLi disabled={data.disabled}>{renderNavItem}</NavLi>;
}

// ----------------------------------------------------------------------

function NavSubList({ data, depth, slotProps, enabledRootRedirect }: NavSubListProps) {
  return (
    <NavUl sx={{ gap: 'var(--item-spacing)' }}>
      {data.map((list) => (
        <NavList
          key={list.title}
          data={list}
          depth={depth + 1}
          slotProps={slotProps}
          enabledRootRedirect={enabledRootRedirect}
        />
      ))}
    </NavUl>
  );
}
