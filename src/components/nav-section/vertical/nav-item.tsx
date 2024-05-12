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
          [`& .${navSectionClasses.item.texts}`]: slotProps?.texts,
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
      borderRadius: 'var(--nav-item-radius, 8px)',
      paddingTop: 'var(--nav-item-padding-top, 4px)',
      paddingLeft: 'var(--nav-item-padding-left, 12px)',
      paddingRight: 'var(--nav-item-padding-right, 8px)',
      paddingBottom: 'var(--nav-item-padding-bottom, 4px)',
      color: `var(--nav-item-color, ${theme.palette.text.secondary})`,
      '&:hover': {
        backgroundColor: `var(--nav-item-hover-bg, ${theme.palette.action.hover})`,
      },
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
      color: `var(--nav-item-caption-color, ${theme.palette.text.disabled})`,
    },
    icon: {
      ...sharedStyles.icon,
      width: 'var(--nav-icon-size, 24px)',
      height: 'var(--nav-icon-size, 24px)',
      margin: 'var(--nav-icon-margin, 0 16px 0 0)',
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
        color: `var(--nav-item-root-active-color, ${lightMode ? theme.palette.primary.main : theme.palette.primary.main})`,
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
        left: 0,
        content: '""',
        position: 'absolute',
        width: 'var(--nav-herringbone-shape-size)',
        height: 'var(--nav-herringbone-shape-size)',
        transform:
          'translate(calc(var(--nav-herringbone-shape-size) * -1), calc(var(--nav-herringbone-shape-size) * -0.4))',
        backgroundColor: `var(--nav-herringbone-shape-color, ${theme.palette.mode === 'light' ? 'var(--nav-herringbone-shape-light-color)' : 'var(--nav-herringbone-shape-dark-color)'})`,
        mask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' viewBox='0 0 14 14'%3E%3Cpath d='M1 1v4a8 8 0 0 0 8 8h4' stroke='%23efefef' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat 50% 50%/100% auto`,
        WebkitMask: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' viewBox='0 0 14 14'%3E%3Cpath d='M1 1v4a8 8 0 0 0 8 8h4' stroke='%23efefef' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat 50% 50%/100% auto`,
      },
      // State
      ...(active && {
        color: `var(--nav-item-sub-active-color, ${theme.palette.text.primary})`,
        backgroundColor: `var(--nav-item-sub-active-bg, ${theme.palette.action.hover})`,
      }),
      ...(open && {
        color: `var(--nav-item-selected-color, ${theme.palette.text.primary})`,
      }),
    }),

    /**
     * Disabled
     */
    ...(disabled && sharedStyles.disabled),
  };
});
