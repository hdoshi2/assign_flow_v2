import { listClasses } from '@mui/material/List';
import { paperClasses } from '@mui/material/Paper';
import { Theme, alpha } from '@mui/material/styles';
import { inputBaseClasses } from '@mui/material/InputBase';
import { iconButtonClasses } from '@mui/material/IconButton';
import { listItemIconClasses } from '@mui/material/ListItemIcon';
import { circularProgressClasses } from '@mui/material/CircularProgress';
import { formControlLabelClasses } from '@mui/material/FormControlLabel';

import { paper } from '../../css';

// ----------------------------------------------------------------------

export function dataGrid(theme: Theme) {
  const paperStyles = paper({ theme, dropdown: true });

  return {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          '--unstable_DataGrid-radius': 0,
          '--DataGrid-rowBorderColor': theme.palette.divider,
          '--DataGrid-containerBackground': theme.palette.background.neutral,
          '--unstable_DataGrid-headWeight': theme.typography.fontWeightSemiBold,
          borderWidth: 0,
        },
        withBorderColor: {
          borderColor: 'var(--DataGrid-rowBorderColor)',
        },
        /**
         * Column
         */
        columnHeader: {
          fontSize: 14,
          color: theme.palette.text.secondary,
          '&--sorted': {
            color: theme.palette.text.primary,
          },
        },
        columnSeparator: {
          color: 'var(--DataGrid-rowBorderColor)',
        },
        /**
         * Row, Cell
         */
        cell: {
          borderTopStyle: 'dashed',
          '&--editing': {
            boxShadow: 'none !important',
            backgroundColor: `${alpha(theme.palette.primary.main, 0.08)} !important`,
          },
        },
        /**
         * Toolbar
         */
        toolbarContainer: {
          gap: theme.spacing(2),
          padding: theme.spacing(2),
        },
        toolbarQuickFilter: {
          padding: 0,
          width: '100%',
          [`& .${inputBaseClasses.input}`]: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
          },
          [theme.breakpoints.up('md')]: {
            width: 'unset',
          },
        },
        /**
         * Paper
         */
        paper: {
          ...paperStyles,
          padding: 0,
        },
        menu: {
          [`& .${paperClasses.root}`]: {
            ...paperStyles,
            minWidth: 140,
          },
          [`& .${listClasses.root}`]: {
            padding: 0,
            [`& .${listItemIconClasses.root}`]: {
              minWidth: 0,
              marginRight: theme.spacing(2),
            },
          },
        },
        /**
         * Icons
         */
        menuIcon: {
          [`& .${iconButtonClasses.root}`]: {
            margin: theme.spacing(0, 1),
            padding: theme.spacing(0.25),
          },
        },
        iconButtonContainer: {
          [`& .${iconButtonClasses.root}`]: {
            padding: theme.spacing(0.25),
            marginLeft: theme.spacing(1),
          },
        },
        /**
         * Footer
         */
        footerContainer: {
          minHeight: 'auto',
          borderTopStyle: 'dashed',
        },
        selectedRowCount: {
          display: 'none',
          whiteSpace: 'nowrap',
        },
        overlay: {
          [`& .${circularProgressClasses.root}`]: {
            color: theme.palette.text.primary,
          },
        },
        /**
         * Columns Panel
         */
        columnsManagement: {
          gap: theme.spacing(0.5),
          padding: theme.spacing(2, 3),
        },
        columnsManagementHeader: {
          padding: theme.spacing(2, 2, 0, 2),
          [`& .${inputBaseClasses.input}`]: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
          },
        },
        columnsManagementFooter: {
          padding: theme.spacing(1, 2),
          [`& .${formControlLabelClasses.root}`]: {
            marginLeft: 0,
          },
        },
        /**
         * Filter Panel
         */
        filterForm: {
          alignItems: 'center',
          gap: theme.spacing(1.5),
          padding: theme.spacing(2),
        },
      },
    },
  };
}
