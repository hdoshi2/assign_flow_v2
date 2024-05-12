import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ButtonBase from '@mui/material/ButtonBase';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

const WORKSPACES = [
  { id: 'team-1', name: 'Team 1', logo: '/assets/icons/workspaces/logo-1.png', plan: 'Free' },
  { id: 'team-2', name: 'Team 2', logo: '/assets/icons/workspaces/logo-2.png', plan: 'Pro' },
  { id: 'team-3', name: 'Team 3', logo: '/assets/icons/workspaces/logo-3.png', plan: 'Pro' },
];

// ----------------------------------------------------------------------

export default function WorkspacePopover() {
  const popover = usePopover();

  const breakpointUp = 'sm';

  const [workspace, setWorkspace] = useState(WORKSPACES[0]);

  const handleChangeWorkspace = useCallback(
    (newValue: (typeof WORKSPACES)[0]) => {
      setWorkspace(newValue);
      popover.onClose();
    },
    [popover]
  );

  return (
    <>
      <Stack
        component={ButtonBase}
        direction="row"
        disableRipple
        onClick={popover.onOpen}
        className="workspace--dropdown"
        {...{ spacing: { xs: 0.5, [breakpointUp]: 1 } }}
        sx={{ py: 0.5 }}
      >
        <Avatar alt={workspace.name} src={workspace.logo} sx={{ width: 24, height: 24 }} />
        <Box
          component="span"
          className="label"
          sx={{
            typography: 'subtitle2',
            display: { xs: 'none', [breakpointUp]: 'inline-flex' },
          }}
        >
          {workspace.name}
        </Box>
        <Label
          color={workspace.plan === 'Free' ? 'default' : 'info'}
          sx={{ height: 22, display: { xs: 'none', [breakpointUp]: 'inline-flex' } }}
        >
          {workspace.plan}
        </Label>
        <Iconify icon="carbon:chevron-sort" width={16} className="arrow" />
      </Stack>

      <CustomPopover open={popover.open} onClose={popover.onClose} arrow="top-left">
        <MenuList sx={{ width: 240 }}>
          {WORKSPACES.map((option) => (
            <MenuItem
              key={option.id}
              selected={option.id === workspace.id}
              onClick={() => handleChangeWorkspace(option)}
              sx={{ height: 48 }}
            >
              <Avatar alt={option.name} src={option.logo} sx={{ width: 24, height: 24, mr: 1.5 }} />

              <Box component="span" sx={{ flexGrow: 1 }}>
                {option.name}
              </Box>

              <Label color={option.plan === 'Free' ? 'default' : 'info'}>{option.plan}</Label>
            </MenuItem>
          ))}
        </MenuList>
      </CustomPopover>
    </>
  );
}
