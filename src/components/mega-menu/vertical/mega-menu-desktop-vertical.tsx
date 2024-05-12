import Stack from '@mui/material/Stack';

import { NavProps } from '../types';
import { NavList } from './nav-list';
import { NavUl } from '../../nav-section';
import { megaMenuClasses } from '../classes';
import { verticalCssVars } from '../css-vars';

// ----------------------------------------------------------------------

export default function MegaMenuDesktopVertical({
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
      className={megaMenuClasses.vertical.root}
      sx={{
        ...verticalCssVars,
        flex: '1 1 auto',
        ...sx,
      }}
      {...other}
    >
      <NavUl sx={{ gap: spacing }}>
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
