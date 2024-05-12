import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Toolbar, { ToolbarProps } from '@mui/material/Toolbar';
import { alpha, useTheme, Breakpoint } from '@mui/material/styles';
import Container, { ContainerProps } from '@mui/material/Container';

import { useScrollOffSetTop } from 'src/hooks/use-scroll-offset-top';

import HeaderShadow from './header-shadow';

// ----------------------------------------------------------------------

type HeaderSectionProps = AppBarProps & {
  disableShadow?: boolean;
  disableDivider?: boolean;
  breakpoint?: Breakpoint;
  slots: {
    leftNode?: React.ReactNode;
    centerNode?: React.ReactNode;
    rightNode?: React.ReactNode;
  };
  slotProps?: {
    toolbar?: ToolbarProps;
    container?: ContainerProps;
  };
};

export default function HeaderSection({
  slots,
  slotProps,
  breakpoint = 'md',
  disableShadow,
  disableDivider = true,
  sx,
  ...other
}: HeaderSectionProps) {
  const theme = useTheme();

  const { offsetTop } = useScrollOffSetTop();

  const toolbarStyles = {
    default: {
      minHeight: 'auto',
      height: 'var(--layout-header-mobile-height)',
      [theme.breakpoints.up('sm')]: {
        minHeight: 'auto',
      },
      [theme.breakpoints.up(breakpoint)]: {
        height: 'var(--layout-header-desktop-height)',
      },
      transition: theme.transitions.create(['height', 'background-color'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
      }),
    },
    offset: {
      ...theme.mixins.bgBlur(alpha(theme.palette.background.default, 0.8)),
      [theme.breakpoints.up(breakpoint)]: {
        height: 'var(--layout-header-desktop-offset-height)',
      },
    },
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        zIndex: 'var(--layout-header-zIndex)',
        ...sx,
      }}
      {...other}
    >
      <Toolbar
        disableGutters
        {...slotProps?.toolbar}
        sx={{
          ...toolbarStyles.default,
          ...(offsetTop && toolbarStyles.offset),
          ...slotProps?.toolbar?.sx,
        }}
      >
        <Container
          {...slotProps?.container}
          sx={{
            height: 1,
            display: 'flex',
            alignItems: 'center',
            ...slotProps?.container?.sx,
          }}
        >
          {slots.leftNode && slots.leftNode}

          <Box
            sx={{
              display: 'flex',
              flex: '1 1 auto',
              justifyContent: 'center',
            }}
          >
            {slots.centerNode && slots.centerNode}
          </Box>

          {slots.rightNode && slots.rightNode}
        </Container>
      </Toolbar>

      {!disableDivider && (
        <Divider
          sx={{
            left: 0,
            width: 1,
            bottom: 0,
            position: 'absolute',
            borderStyle: 'dashed',
          }}
        />
      )}

      {offsetTop && !disableShadow && <HeaderShadow />}
    </AppBar>
  );
}
