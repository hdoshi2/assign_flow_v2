import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

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
        disableRipple
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
          <Iconify icon="eva:arrow-ios-downward-fill" className={navSectionClasses.item.arrow} />
        )}
      </StyledNavItem>
    );
  }
);

// ----------------------------------------------------------------------

const StyledNavItem = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open' && prop !== 'disabled',
})<NavItemStateProps>(({ active, open, disabled, theme }) => ({
  minHeight: 'var(--nav-item-height, 32px)',
  padding: 'var(--nav-item-padding, 4px 8px)',
  borderRadius: 'var(--nav-item-radius, 6px)',
  transition: theme.transitions.create(['background-color'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  [`& .${navSectionClasses.item.title}`]: {
    ...theme.typography.body2,
    flexShrink: 0,
    fontWeight: active ? theme.typography.fontWeightSemiBold : theme.typography.fontWeightMedium,
  },
  [`& .${navSectionClasses.item.icon}`]: {
    ...sharedStyles.icon,
    width: 'var(--nav-icon-size, 22px)',
    height: 'var(--nav-icon-size, 22px)',
    margin: 'var(--nav-icon-margin, 0 8px 0 0)',
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
  }),
  ...(open && {
    backgroundColor: theme.palette.action.hover,
  }),
  ...(disabled && sharedStyles.disabled),
}));
