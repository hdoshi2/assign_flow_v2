import { alpha, Theme } from '@mui/material/styles';
import { DrawerProps, drawerClasses } from '@mui/material/Drawer';

import { paper } from '../../css';

// ----------------------------------------------------------------------

export function drawer(theme: Theme) {
  const lightMode = theme.palette.mode === 'light';

  return {
    MuiDrawer: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: DrawerProps }) => ({
          ...(ownerState.variant === 'temporary' && {
            [`& .${drawerClasses.paper}`]: {
              ...paper({ theme }),
              ...(ownerState.anchor === 'top' && {
                borderRadius: '0px 0px 12px 12px',
              }),
              ...(ownerState.anchor === 'bottom' && {
                borderRadius: '12px 12px 0px 0px',
              }),
              ...(ownerState.anchor === 'left' && {
                borderRadius: '0 12px 12px 0',
                boxShadow: `40px 40px 80px -8px ${alpha(
                  lightMode ? theme.palette.grey[500] : theme.palette.common.black,
                  0.24
                )}`,
              }),
              ...(ownerState.anchor === 'right' && {
                borderRadius: '12px 0px 0px 12px',
                boxShadow: `-40px 40px 80px -8px ${alpha(
                  lightMode ? theme.palette.grey[500] : theme.palette.common.black,
                  0.24
                )}`,
              }),
            },
          }),
        }),
      },
    },
  };
}
