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
      caption,
      //
      open,
      depth,
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
    const navItem = useNavItem({ path, icon, depth, hasChild, externalLink, enabledRootRedirect });

    return (
      <StyledNavItem
        ref={ref}
        aria-label={title}
        depth={depth}
        active={active}
        disabled={disabled}
        open={open && !active}
        disableRipple={navItem.rootItem}
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
            {caption && navItem.subItem && (
              <Box component="span" className={navSectionClasses.item.caption}>
                {caption}
              </Box>
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
            icon={navItem.subItem ? 'eva:arrow-ios-forward-fill' : 'eva:arrow-ios-downward-fill'}
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

  const subItem = depth !== 1;

  const baseStyles = {
    item: {},
    icon: {
      ...sharedStyles.icon,
      width: 'var(--nav-icon-size, 22px)',
      height: 'var(--nav-icon-size, 22px)',
      margin: 'var(--nav-icon-margin, 8px)',
    },
    texts: {
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'column',
    },
    title: {
      ...theme.typography.body2,
      fontWeight: active ? theme.typography.fontWeightSemiBold : theme.typography.fontWeightMedium,
    },
    caption: {
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
      padding: 'var(--nav-root-item-padding, 0)',
      borderRadius: 'var(--nav-root-item-radius, 0)',
      transition: theme.transitions.create(['all'], {
        duration: theme.transitions.duration.shorter,
      }),
      '&:hover': {
        opacity: 0.64,
      },
      [`& .${navSectionClasses.item.icon}`]: {
        ...baseStyles.icon,
      },
      [`& .${navSectionClasses.item.texts}`]: {
        ...baseStyles.texts,
      },
      [`& .${navSectionClasses.item.title}`]: {
        ...baseStyles.title,
      },
      [`& .${navSectionClasses.item.arrow}`]: {
        ...baseStyles.arrow,
      },
      [`& .${navSectionClasses.item.info}`]: {
        ...baseStyles.info,
      },
      // State
      ...(active && {
        color: theme.palette.primary.main,
      }),
      ...(open && {
        opacity: 0.64,
      }),
    }),

    /**
     * Sub item
     */
    ...(subItem && {
      ...baseStyles.item,
      fontSize: 13,
      borderRadius: 'var(--nav-sub-item-radius, 0)',
      padding: 'var(--nav-sub-item-padding, 6px 8px 6px 8px)',
      '&:hover': {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.action.hover,
      },
      color: theme.palette.text.secondary,
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

    /**
     * Disabled
     */
    ...(disabled && sharedStyles.disabled),
  };
});
