import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
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
          [`& .${navSectionClasses.item.texts}`]: slotProps?.texts,
          [`& .${navSectionClasses.item.title}`]: slotProps?.title,
          [`& .${navSectionClasses.item.caption}`]: slotProps?.caption,
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
          <Box component="span" className={navSectionClasses.item.texts}>
            <Box component="span" className={navSectionClasses.item.title}>
              {title}
            </Box>

            {caption && (
              <Tooltip title={caption} placement="top-start">
                <Box component="span" className={navSectionClasses.item.caption}>
                  {caption}
                </Box>
              </Tooltip>
            )}
          </Box>
        )}

        {info && (
          <Box component="span" className={navSectionClasses.item.info}>
            {info}
          </Box>
        )}

        {hasChild && (
          <Iconify
            width={16}
            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            className={navSectionClasses.item.arrow}
          />
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

  const lightMode = theme.palette.mode === 'light';

  const baseStyles = {
    item: {
      width: '100%',
      color: theme.palette.text.secondary,
      borderRadius: 'var(--nav-item-radius, 8px)',
      paddingTop: 'var(--nav-item-padding-top, 4px)',
      paddingLeft: 'var(--nav-item-padding-left, 12px)',
      paddingRight: 'var(--nav-item-padding-right, 8px)',
      paddingBottom: 'var(--nav-item-padding-bottom, 4px)',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
    },
    icon: {
      ...sharedStyles.icon,
      width: 'var(--nav-icon-size, 24px)',
      height: 'var(--nav-icon-size, 24px)',
      margin: 'var(--nav-icon-margin, 0 16px 0 0)',
    },
    texts: {
      minWidth: 0,
      flex: '1 1 auto',
    },
    title: {
      ...sharedStyles.noWrap,
      ...theme.typography.body2,
      fontWeight: active ? theme.typography.fontWeightSemiBold : theme.typography.fontWeightMedium,
    },
    caption: {
      ...sharedStyles.noWrap,
      ...theme.typography.caption,
      color: theme.palette.text.disabled,
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
      minHeight: 'var(--nav-root-item-height, 44px)',
      [`& .${navSectionClasses.item.icon}`]: {
        ...baseStyles.icon,
      },
      [`& .${navSectionClasses.item.texts}`]: {
        ...baseStyles.texts,
      },
      [`& .${navSectionClasses.item.title}`]: {
        ...baseStyles.title,
      },
      [`& .${navSectionClasses.item.caption}`]: {
        ...baseStyles.caption,
      },
      [`& .${navSectionClasses.item.arrow}`]: {
        ...baseStyles.arrow,
      },
      [`& .${navSectionClasses.item.info}`]: {
        ...baseStyles.info,
      },
      // State
      ...(active && {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
        color: lightMode ? theme.palette.primary.main : theme.palette.primary.main,
        '&:hover': {
          backgroundColor: alpha(theme.palette.primary.main, 0.16),
        },
      }),
      ...(open && {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
      }),
    }),

    /**
     * Sub item
     */
    ...(subItem && {
      ...baseStyles.item,
      minHeight: 'var(--nav-sub-item-height, 36px)',
      [`& .${navSectionClasses.item.icon}`]: {
        ...baseStyles.icon,
      },
      [`& .${navSectionClasses.item.texts}`]: {
        ...baseStyles.texts,
      },
      [`& .${navSectionClasses.item.title}`]: {
        ...baseStyles.title,
      },
      [`& .${navSectionClasses.item.caption}`]: {
        ...baseStyles.caption,
      },
      [`& .${navSectionClasses.item.arrow}`]: {
        ...baseStyles.arrow,
      },
      [`& .${navSectionClasses.item.info}`]: {
        ...baseStyles.info,
      },
      // Shape
      '&::before': {
        width: 3,
        left: -13,
        height: 16,
        content: '""',
        borderRadius: 3,
        position: 'absolute',
        transform: 'scale(0)',
        transition: theme.transitions.create(['transform'], {
          duration: theme.transitions.duration.short,
        }),
        ...(active && {
          transform: 'scale(1)',
          backgroundColor: 'currentColor',
        }),
      },
      // State
      ...(active && {
        color: theme.palette.text.primary,
      }),
      ...(open && {
        color: theme.palette.text.primary,
      }),
    }),

    /**
     * Disabled
     */
    ...(disabled && sharedStyles.disabled),
  };
});
