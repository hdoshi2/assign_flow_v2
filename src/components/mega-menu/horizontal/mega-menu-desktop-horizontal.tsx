import Stack from '@mui/material/Stack';

import { NavProps } from '../types';
import { NavList } from './nav-list';
import { NavUl } from '../../nav-section';
import { megaMenuClasses } from '../classes';
import { horizontalCssVars } from '../css-vars';

// ----------------------------------------------------------------------

export default function MegaMenuDesktopHorizontal({
  sx,
  data,
  slotProps,
  enabledRootRedirect,
  ...other
}: NavProps) {
  const spacing = slotProps?.gap ? `${slotProps?.gap}px` : 'var(--nav-item-spacing)';

  return (
    <Stack
      component="nav"
      className={megaMenuClasses.horizontal.root}
      sx={{
        ...horizontalCssVars,
        ...sx,
      }}
      {...other}
    >
      <NavUl
        sx={{
          gap: spacing,
          flexDirection: 'row',
        }}
      >
        {data.map((list) => (
          <NavList
            key={list.title}
            data={list}
            slotProps={slotProps}
            enabledRootRedirect={enabledRootRedirect}
          />
        ))}
      </NavUl>
    </Stack>
  );
}
