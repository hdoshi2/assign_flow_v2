import { useTheme } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import { BREAKPOINT } from 'src/layouts/config-layout';

import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';

// ----------------------------------------------------------------------

export default function NavToggleButton({ sx, ...other }: IconButtonProps) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const breakpointUp = theme.breakpoints.up(BREAKPOINT.DASHBOARD);

  return (
    <IconButton
      size="small"
      onClick={() =>
        settings.onUpdateField(
          'themeLayout',
          settings.themeLayout === 'vertical' ? 'mini' : 'vertical'
        )
      }
      sx={{
        p: 0.5,
        top: 24,
        borderWidth: 1,
        display: 'none',
        position: 'fixed',
        borderStyle: 'solid',
        zIndex: 'var(--layout-nav-zIndex)',
        bgcolor: 'var(--nav-toggle-button-bg)',
        color: 'var(--nav-toggle-button-color)',
        borderColor: 'var(--nav-toggle-button-border-color)',
        '&:hover': {
          color: 'var(--nav-toggle-button-hover-color)',
          bgcolor: 'var(--nav-toggle-button-hover-bg)',
        },
        [breakpointUp]: {
          display: 'inline-flex',
        },
        ...sx,
      }}
      {...other}
    >
      <Iconify
        width={16}
        icon={
          settings.themeLayout === 'vertical'
            ? 'eva:arrow-ios-back-fill'
            : 'eva:arrow-ios-forward-fill'
        }
      />
    </IconButton>
  );
}
