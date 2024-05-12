import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { alpha, styled } from '@mui/material/styles';

import Iconify from 'src/components/iconify';
import { useNavItem } from 'src/components/nav-section/hooks';

import { NavItemProps, NavItemStateProps } from './types';

// ----------------------------------------------------------------------

export const NavItem = forwardRef<HTMLButtonElement, NavItemProps>(
  ({ title, path, icon, open, active, hasChild, externalLink, ...other }, ref) => {
    const navItem = useNavItem({ path, icon, hasChild, externalLink });

    return (
      <StyledNavItem
        ref={ref}
        aria-label={title}
        open={open}
        active={active}
        {...navItem.baseProps}
        {...other}
      >
        {navItem.renderIcon}

        <Box component="span" sx={{ flex: '1 1 auto' }}>
          {title}
        </Box>

        {hasChild && (
          <Iconify
            width={16}
            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
          />
        )}
      </StyledNavItem>
    );
  }
);

// ----------------------------------------------------------------------

const StyledNavItem = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open',
})<NavItemStateProps>(({ active, open, theme }) => ({
  ...theme.typography.body2,
  gap: 16,
  height: 48,
  width: '100%',
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(1.5),
  color: theme.palette.text.secondary,
  fontWeight: theme.typography.fontWeightMedium,
  ...(active && {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightSemiBold,
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.16),
    },
  }),
  ...(open && {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.action.hover,
  }),
}));
