import orderBy from 'lodash/orderBy';

import Stack from '@mui/material/Stack';
import List, { listClasses } from '@mui/material/List';
import Link, { linkClasses } from '@mui/material/Link';
import ListItem, { listItemClasses } from '@mui/material/ListItem';
import ListSubheader, { listSubheaderClasses } from '@mui/material/ListSubheader';

import { RouterLink } from 'src/routes/components';

import { muiNav, extraNav, foundationNav } from './config-navigation';

// ----------------------------------------------------------------------

export function ComponentNav() {
  return (
    <Stack
      component="nav"
      sx={{
        width: 280,
        flexShrink: 0,
        position: 'sticky',
        display: { xs: 'none', md: 'flex' },
        top: 'var(--layout-header-desktop-height)',
        [`& .${listClasses.root}`]: {
          mb: 2,
          gap: 0.75,
          display: 'flex',
          flexDirection: 'column',
        },
        [`& .${listItemClasses.root}`]: {
          alignItems: 'flex-start',
        },
        [`& .${listSubheaderClasses.root}`]: {
          mt: 0,
          mx: 0,
          mb: 1,
          p: 0,
          color: 'text.primary',
          typography: 'overline',
        },
        [`& .${linkClasses.root}`]: {
          typography: 'body2',
          color: 'text.secondary',
          fontSize: (theme) => theme.typography.pxToRem(13),
          '&:hover': {
            color: 'text.primary',
          },
        },
      }}
    >
      <List disablePadding>
        <ListItem disablePadding sx={{ flexDirection: 'column' }}>
          <ListSubheader component="h6">Foundation</ListSubheader>
          <List disablePadding>
            {foundationNav.map((item) => (
              <ListItem disablePadding key={item.name}>
                <Link component={RouterLink} href={item.href}>
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </ListItem>

        <ListItem disablePadding sx={{ flexDirection: 'column' }}>
          <ListSubheader component="h6">MUI</ListSubheader>
          <List disablePadding>
            {orderBy(muiNav, ['name'], ['asc']).map((item) => (
              <ListItem disablePadding key={item.name}>
                <Link component={RouterLink} href={item.href}>
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </ListItem>

        <ListItem disablePadding sx={{ flexDirection: 'column' }}>
          <ListSubheader component="h6">Extra</ListSubheader>
          <List disablePadding>
            {orderBy(extraNav, ['name'], ['asc']).map((item) => (
              <ListItem disablePadding key={item.name}>
                <Link component={RouterLink} href={item.href}>
                  {item.name}
                </Link>
              </ListItem>
            ))}
          </List>
        </ListItem>
      </List>
    </Stack>
  );
}
