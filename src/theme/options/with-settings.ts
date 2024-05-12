import { Theme, alpha } from '@mui/material/styles';

import { SettingsContextProps } from 'src/components/settings';

import { grey } from '../palette';
import { getPrimaryPreset } from './presets';

// ----------------------------------------------------------------------

export function updateCore(theme: Theme, settings: SettingsContextProps) {
  const { themeColorPresets, themeContrast, themeMode } = settings;

  const primaryPreset = getPrimaryPreset(themeColorPresets);

  /*
   * Settings Color Presets
   */
  if (themeColorPresets !== 'default') {
    theme.palette.primary = primaryPreset;
    theme.customShadows.primary = `0 8px 16px 0 ${alpha(`${primaryPreset.main}`, 0.24)}`;
  }

  /*
   * Settings Contrast
   */
  if (themeContrast === 'bold' && themeMode === 'light') {
    theme.palette.background.default = grey[200];
  }
}

// ----------------------------------------------------------------------

export function updateComponents(theme: Theme, settings: SettingsContextProps) {
  const { themeContrast } = settings;

  if (themeContrast === 'bold') {
    return {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: theme.customShadows.z1,
          },
        },
      },
    };
  }

  return {};
}
