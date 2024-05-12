import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import ButtonBase from '@mui/material/ButtonBase';
import { alpha, styled } from '@mui/material/styles';

import Iconify from '../../iconify';
import { useNavItem } from '../hooks';
import { navSectionClasses } from '../classes';
import { stateClasses, sharedStyles } from '../styles';
import { NavItemProps, NavItemStateProps } from '../types';

// ----------------------------------------------------------------------

export const NavItem = forwardRef<HTMLButtonElement, NavItemProps>(
  (
    {
      path,
      icon,
      info,
      title,
      caption,
      //
      open,
      depth,
      active,
      disabled,
      hasChild,
      slotProps,
      externalLink,
      enabledRootRedirect,
      ...other
    },
    ref
  ) => {
    const navItem = useNavItem({ path, icon, depth, hasChild, externalLink, enabledRootRedirect });

    return (
      <StyledNavItem
        ref={ref}
        aria-label={title}
        depth={depth}
        active={active}
        disabled={disabled}
        open={open && !active}
        sx={{
          ...slotProps?.sx,
          [`& .${navSectionClasses.item.icon}`]: slotProps?.icon,
          [`& .${navSectionClasses.item.title}`]: slotProps?.title,
          [`& .${navSectionClasses.item.caption}`]: slotProps?.caption,
          [`& .${navSectionClasses.item.info}`]: slotProps?.info,
          [`& .${navSectionClasses.item.arrow}`]: slotProps?.arrow,
        }}
        className={stateClasses({ open: open && !active, active, disabled })}
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

        {caption && (
          <Tooltip title={caption} arrow placement="right">
            <Iconify icon="eva:info-outline" className={navSectionClasses.item.caption} />
          </Tooltip>
        )}

        {info && navItem.subItem && (
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
  shouldForwardProp: (prop) =>
    prop !== 'active' && prop !== 'open' && prop !== 'disabled' && prop !== 'depth',
})<NavItemStateProps>(({ active, open, disabled, depth, theme }) => {
  const rootItem = depth === 1;

  const subItem = !rootItem;

  const baseStyles = {
    item: {
      width: '100%',
      borderRadius: 'var(--nav-item-radius, 8px)',
      color: `var(--nav-item-color, ${theme.palette.text.secondary})`,
      '&:hover': {
        backgroundColor: `var(--nav-item-hover-bg, ${theme.palette.action.hover})`,
      },
    },
    title: {},
    caption: {
      width: 16,
      height: 16,
      color: `var(--nav-item-caption-color, ${theme.palette.text.disabled})`,
    },
    icon: {
      ...sharedStyles.icon,
      width: 'var(--nav-icon-size, 22px)',
      height: 'var(--nav-icon-size, 22px)',
    },
    arrow: {
      ...sharedStyles.arrow,
    },
    info: {
      ...sharedStyles.info,
    },
  } as const;

  return {
    /**
     * Root item
     */
    ...(rootItem && {
      ...baseStyles.item,
      textAlign: 'center',
      flexDirection: 'column',
      minHeight: 'var(--nav-root-item-height, 56px)',
      padding: 'var(--nav-root-item-padding, 8px 4px 6px 4px)',
      [`& .${navSectionClasses.item.icon}`]: {
        ...baseStyles.icon,
        margin: 'var(--nav-root-icon-margin, 0 0 6px 0)',
      },
      [`& .${navSectionClasses.item.title}`]: {
        ...baseStyles.title,
        ...sharedStyles.noWrap,
        fontSize: 10,
        lineHeight: '16px',
        fontWeight: active ? theme.typography.fontWeightBold : theme.typography.fontWeightSemiBold,
      },
      [`& .${navSectionClasses.item.caption}`]: {
        ...baseStyles.caption,
        top: 11,
        left: 6,
        position: 'absolute',
      },
      [`& .${navSectionClasses.item.arrow}`]: {
        ...baseStyles.arrow,
        top: 11,
        right: 6,
        position: 'absolute',
      },
      [`& .${navSectionClasses.item.info}`]: {
        ...baseStyles.info,
      },
      // State
      ...(active && {
        color: `var(--nav-item-root-active-color, ${theme.palette.primary.main})`,
        backgroundColor: `var(--nav-item-root-active-bg, ${alpha(theme.palette.primary.main, 0.08)})`,
        '&:hover': {
          backgroundColor: `var(--nav-item-root-active-hover-bg, ${alpha(theme.palette.primary.main, 0.16)})`,
        },
      }),
      ...(open && {
        color: `var(--nav-item-selected-color, ${theme.palette.text.primary})`,
        backgroundColor: `var(--nav-item-selected-bg, ${theme.palette.action.hover})`,
      }),
    }),

    /**
     * Sub item
     */
    ...(subItem && {
      ...baseStyles.item,
      color: theme.palette.text.secondary,
      minHeight: 'var(--nav-sub-item-height, 34px)',
      padding: 'var(--nav-sub-item-padding, 0 8px)',
      [`& .${navSectionClasses.item.icon}`]: {
        ...baseStyles.icon,
        margin: 'var(--nav-sub-icon-margin, 0 8px 0 0)',
      },
      [`& .${navSectionClasses.item.title}`]: {
        ...baseStyles.title,
        ...theme.typography.body2,
        fontWeight: active
          ? theme.typography.fontWeightSemiBold
          : theme.typography.fontWeightMedium,
        flex: '1 1 auto',
      },
      [`& .${navSectionClasses.item.caption}`]: {
        ...baseStyles.caption,
      },
      [`& .${navSectionClasses.item.arrow}`]: {
        ...baseStyles.arrow,
        marginRight: theme.spacing(-0.5),
      },
      [`& .${navSectionClasses.item.info}`]: {
        ...baseStyles.info,
      },
      // State
      ...(active && {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.selected,
      }),
      ...(open && {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
      }),
    }),

    /* Disabled */
    ...(disabled && sharedStyles.disabled),
  };
});
