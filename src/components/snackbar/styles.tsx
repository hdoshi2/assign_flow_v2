import { Toaster as SonnerToaster } from 'sonner';

import { alpha, styled } from '@mui/material/styles';

import { toasterClasses } from './classes';

// ----------------------------------------------------------------------

export const StyledToaster = styled(SonnerToaster)(({ theme }) => {
  const baseStyles = {
    toastColor: {
      padding: theme.spacing(0.5, 1, 0.5, 0.5),
      boxShadow: theme.customShadows.z8,
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.paper,
    },
  };

  return {
    width: 300,
    [`& .${toasterClasses.toast}`]: {
      gap: 12,
      width: '100%',
      minHeight: 52,
      display: 'flex',
      borderRadius: 10,
      alignItems: 'center',
      padding: theme.spacing(1, 1, 1, 1.5),
      color: theme.palette.background.paper,
      backgroundColor: theme.palette.text.primary,
    },
    /*
     * Content
     */
    [`& .${toasterClasses.content}`]: {
      gap: 0,
      flex: '1 1 auto',
    },
    [`& .${toasterClasses.title}`]: {
      ...theme.typography.subtitle2,
    },
    [`& .${toasterClasses.description}`]: {
      ...theme.typography.caption,
      opacity: 0.64,
    },
    /*
     * Buttons
     */
    [`& .${toasterClasses.actionButton}`]: {},
    [`& .${toasterClasses.cancelButton}`]: {},
    [`& .${toasterClasses.closeButton}`]: {
      top: 6,
      right: 6,
      left: 'auto',
      transform: 'unset',
      backgroundColor: 'transparent',
      color: 'inherit',
      borderColor: alpha(theme.palette.grey[500], 0.16),
      '&:hover': {
        backgroundColor: 'transparent',
        borderColor: alpha(theme.palette.grey[500], 0.4),
      },
    },
    /*
     * Icon
     */
    [`& .${toasterClasses.icon}`]: {
      width: 48,
      margin: 0,
      height: 48,
      display: 'flex',
      background: 'yellow',
      alignItems: 'center',
      borderRadius: 'inherit',
      justifyContent: 'center',
    },
    /*
     * Error
     */
    [`& .${toasterClasses.error}`]: {
      ...baseStyles.toastColor,
      [`& .${toasterClasses.icon}`]: {
        color: theme.palette.error.main,
        backgroundColor: alpha(theme.palette.error.main, 0.16),
      },
    },
    /*
     * Success
     */
    [`& .${toasterClasses.success}`]: {
      ...baseStyles.toastColor,
      [`& .${toasterClasses.icon}`]: {
        color: theme.palette.success.main,
        backgroundColor: alpha(theme.palette.success.main, 0.16),
      },
    },
    /*
     * Warning
     */
    [`& .${toasterClasses.warning}`]: {
      ...baseStyles.toastColor,
      [`& .${toasterClasses.icon}`]: {
        color: theme.palette.warning.main,
        backgroundColor: alpha(theme.palette.warning.main, 0.16),
      },
    },
    /*
     * Info
     */
    [`& .${toasterClasses.info}`]: {
      ...baseStyles.toastColor,
      [`& .${toasterClasses.icon}`]: {
        color: theme.palette.info.main,
        backgroundColor: alpha(theme.palette.info.main, 0.16),
      },
    },
  };
});
