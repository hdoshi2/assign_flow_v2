import Stack from '@mui/material/Stack';

import { NavUl } from 'src/components/nav-section';

import { NavProps } from './types';
import { NavList } from './nav-desktop-list';

// ----------------------------------------------------------------------

export default function NavDesktop({ data, sx }: NavProps) {
  return (
    <Stack
      component="nav"
      sx={{
        mr: 2.5,
        height: 1,
        ...sx,
      }}
    >
      <NavUl
        sx={{
          gap: 5,
          height: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        {data.map((list) => (
          <NavList key={list.title} data={list} />
        ))}
      </NavUl>
    </Stack>
  );
}
