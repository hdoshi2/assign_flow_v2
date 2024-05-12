import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { alpha, styled } from '@mui/material/styles';

import Iconify from '../../iconify';
import { useNavItem } from '../../nav-section/hooks';
import { NavItemProps, NavItemStateProps } from '../types';
import { stateClasses, sharedStyles, navSectionClasses } from '../../nav-section';

// ----------------------------------------------------------------------

export const NavItem = forwardRef<HTMLButtonElement, NavItemProps>(
  (
    {
      path,
      icon,
      info,
      title,
      //
      open,
      active,
      hasChild,
      disabled,
      slotProps,
      externalLink,
      enabledRootRedirect,
      ...other
    },
    ref
  ) => {
    const navItem = useNavItem({ path, icon, hasChild, externalLink, enabledRootRedirect });

    return (
      <StyledNavItem
        ref={ref}
        aria-label={title}
        open={open}
        active={active}
        disabled={disabled}
        className={stateClasses({ open: open && !active, active, disabled })}
        sx={{
          ...slotProps?.sx,
          [`& .${navSectionClasses.item.icon}`]: slotProps?.icon,
          [`& .${navSectionClasses.item.title}`]: slotProps?.title,
          [`& .${navSectionClasses.item.info}`]: slotProps?.info,
          [`& .${navSectionClasses.item.arrow}`]: slotProps?.arrow,
        }}
        {...navItem.baseProps}
        {...other}
      >
        {icon && (
          <Box component="span" className={navSectionClasses.item.icon}>
            {navItem.renderIcon}
          </Box>
        )}

        {title && (
          <Box component="span" className={navSectionClasses.item.title}>
            {title}
          </Box>
        )}

        {info && (
          <Box component="span" className={navSectionClasses.item.info}>
            {info}
          </Box>
        )}

        {hasChild && (
          <Iconify icon="eva:arrow-ios-forward-fill" className={navSectionClasses.item.arrow} />
        )}
      </StyledNavItem>
    );
  }
);

// ----------------------------------------------------------------------

const StyledNavItem = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open' && prop !== 'disabled',
})<NavItemStateProps>(({ active, open, disabled, theme }) => ({
  minHeight: 'var(--nav-item-height, 40px)',
  borderRadius: 'var(--nav-item-radius, 0)',
  padding: 'var(--nav-item-padding, 8px 12px 8px 20px)',
  transition: theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  [`& .${navSectionClasses.item.title}`]: {
    ...theme.typography.body2,
    flex: '1 1 auto',
    fontWeight: active ? theme.typography.fontWeightSemiBold : theme.typography.fontWeightMedium,
  },
  [`& .${navSectionClasses.item.icon}`]: {
    ...sharedStyles.icon,
    width: 'var(--nav-icon-size, 22px)',
    height: 'var(--nav-icon-size, 22px)',
    margin: 'var(--nav-icon-margin, 0 16px 0 0)',
  },
  [`& .${navSectionClasses.item.arrow}`]: {
    ...sharedStyles.arrow,
  },
  [`& .${navSectionClasses.item.info}`]: {
    ...sharedStyles.info,
  },
  // State
  ...(active && {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.16),
    },
  }),
  ...(open && {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.action.hover,
  }),
  ...(disabled && sharedStyles.disabled),
}));
