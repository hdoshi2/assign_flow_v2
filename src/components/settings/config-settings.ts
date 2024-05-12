import { SettingsState } from './types';

// ----------------------------------------------------------------------

export const STORAGE_KEY = 'settings';

export const defaultSettings: SettingsState = {
  themeMode: 'light', // 'light' | 'dark'
  themeDirection: 'ltr', //  'rtl' | 'ltr'
  themeContrast: 'default', // 'default' | 'bold'
  themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
  themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
  themeNavColor: 'integrate', // 'integrate' | 'apparent'
  themeStretch: false,
};
