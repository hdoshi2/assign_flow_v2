import Box, { BoxProps } from '@mui/material/Box';
import MuiCollapse, { CollapseProps } from '@mui/material/Collapse';
import ListSubheader, { ListSubheaderProps } from '@mui/material/ListSubheader';

import { navSectionClasses } from './classes';
import { svgColorClasses } from '../svg-color';
import Iconify, { iconifyClasses } from '../iconify';

// ----------------------------------------------------------------------

export function stateClasses({
  open,
  active,
  disabled,
}: {
  open?: boolean;
  active?: boolean;
  disabled?: boolean;
}) {
  let classes = navSectionClasses.item.root;

  if (active) {
    classes += ` ${navSectionClasses.state.active}`;
  } else if (open) {
    classes += ` ${navSectionClasses.state.open}`;
  } else if (disabled) {
    classes += ` ${navSectionClasses.state.disabled}`;
  }

  return classes;
}

// ----------------------------------------------------------------------

export const sharedStyles = {
  icon: {
    flexShrink: 0,
    display: 'inline-flex',
    [`& svg, img, .${iconifyClasses}, .${svgColorClasses}`]: {
      width: '100%',
      height: '100%',
    },
  },
  arrow: {
    width: 16,
    height: 16,
    flexShrink: 0,
    marginLeft: '6px',
    display: 'inline-flex',
  },
  info: {
    fontSize: 12,
    flexShrink: 0,
    fontWeight: 600,
    marginLeft: '6px',
    lineHeight: 18 / 12,
    display: 'inline-flex',
  },
  noWrap: {
    width: '100%',
    maxWidth: '100%',
    display: 'block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  disabled: {
    opacity: 0.48,
    pointerEvents: 'none',
  },
} as const;

// ----------------------------------------------------------------------

export function Subheader({
  sx,
  open,
  children,
  ...other
}: ListSubheaderProps & { open?: boolean }) {
  return (
    <ListSubheader
      disableSticky
      component="div"
      className={navSectionClasses.subheader}
      sx={{
        typography: 'overline',
        gap: 1,
        fontSize: 11,
        cursor: 'pointer',
        alignItems: 'center',
        position: 'relative',
        display: 'inline-flex',
        alignSelf: 'flex-start',
        padding: (theme) => theme.spacing(2, 1, 1, 1.5),
        color: (theme) => `var(--nav-subheader-color, ${theme.palette.text.disabled})`,
        transition: (theme) =>
          theme.transitions.create(['color', 'padding-left'], {
            duration: theme.transitions.duration.standard,
          }),
        '&:hover': {
          pl: 2,
          color: (theme) => `var(--nav-subheader-hover-color, ${theme.palette.text.primary})`,
          '& svg': {
            opacity: 1,
          },
        },
        '& svg': {
          left: -4,
          opacity: 0,
          width: 16,
          height: 16,
          position: 'absolute',
          transition: (theme) =>
            theme.transitions.create(['opacity'], {
              duration: theme.transitions.duration.standard,
            }),
        },
        ...sx,
      }}
      {...other}
    >
      <Iconify icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'} />

      {children}
    </ListSubheader>
  );
}

// ----------------------------------------------------------------------

export function NavCollapse({ children, depth, sx, ...other }: CollapseProps & { depth: number }) {
  return (
    <MuiCollapse
      sx={{
        ...(depth + 1 !== 1 && {
          pl: 'calc(var(--nav-item-padding-left) - 2px + var(--nav-icon-size) / 2)',
          [`& .${navSectionClasses.ul}`]: {
            position: 'relative',
            pl: 'var(--nav-herringbone-shape-size)',
            '&::before': {
              top: 0,
              left: 0,
              width: '2px',
              content: '""',
              position: 'absolute',
              bottom:
                'calc(var(--nav-sub-item-height) - 2px - var(--nav-herringbone-shape-size) / 2)',
              bgcolor: (theme) =>
                `var(--nav-herringbone-shape-color, ${theme.palette.mode === 'light' ? 'var(--nav-herringbone-shape-light-color)' : 'var(--nav-herringbone-shape-dark-color)'})`,
            },
          },
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </MuiCollapse>
  );
}

// ----------------------------------------------------------------------

export function NavLi({ children, disabled, sx, ...other }: BoxProps & { disabled?: boolean }) {
  return (
    <Box
      component="li"
      className={navSectionClasses.li}
      sx={{
        display: 'flex',
        listStyle: 'none',
        flexDirection: 'column',
        ...(disabled && { cursor: 'not-allowed' }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}

// ----------------------------------------------------------------------

export function NavUl({ children, sx, ...other }: BoxProps) {
  return (
    <Box
      component="ul"
      className={navSectionClasses.ul}
      sx={{ p: 0, m: 0, display: 'flex', flexDirection: 'column', ...sx }}
      {...other}
    >
      {children}
    </Box>
  );
}
