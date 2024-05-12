import { Theme } from '@mui/material/styles';
import { TabsProps } from '@mui/material/Tabs';
import { tabClasses } from '@mui/material/Tab';

// ----------------------------------------------------------------------

// NEW VARIANT
declare module '@mui/material/Tabs' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}

// ----------------------------------------------------------------------

export function tabs(theme: Theme) {
  return {
    MuiTabs: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: TabsProps }) => {
          const { variant } = ownerState;

          return {
            ...(variant !== 'fullWidth' && {
              gap: 24,
              [theme.breakpoints.up('sm')]: {
                gap: 40,
              },
            }),
          };
        },
        scroller: {
          gap: 'inherit',
        },
        flexContainer: {
          gap: 'inherit',
        },
        indicator: {
          backgroundColor: theme.palette.text.primary,
        },
        scrollButtons: {
          width: 48,
          borderRadius: '50%',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 0,
          opacity: 1,
          minWidth: 48,
          minHeight: 48,
          fontWeight: theme.typography.fontWeightSemiBold,
          [`&:not(.${tabClasses.selected})`]: {
            color: theme.palette.text.secondary,
          },
        },
      },
    },
  };
}
