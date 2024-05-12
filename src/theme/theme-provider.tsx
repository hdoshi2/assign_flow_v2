'use client';

import { useMemo } from 'react';
import merge from 'lodash/merge';

import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

import { useLocales } from 'src/locales';

import { useSettingsContext } from 'src/components/settings';

import { mixins } from './mixins';
import { shadows } from './shadows';
import { palette } from './palette';
import { typography } from './typography';
import RTL from './options/right-to-left';
import { customShadows } from './custom-shadows';
import { componentsOverrides } from './overrides';
import { updateCore, updateComponents } from './options/with-settings';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const { currentLang } = useLocales();

  const settings = useSettingsContext();

  const coreValues = useMemo(
    () => ({
      palette: palette(settings.themeMode),
      shadows: shadows(settings.themeMode),
      customShadows: customShadows(settings.themeMode),
      direction: settings.themeDirection,
      shape: { borderRadius: 8 },
      typography,
      mixins,
    }),
    [settings.themeMode, settings.themeDirection]
  );

  const theme = createTheme(coreValues as ThemeOptions);

  updateCore(theme, settings);

  theme.components = merge(componentsOverrides(theme), updateComponents(theme, settings));

  const themeWithLocale = useMemo(
    () => createTheme(theme, currentLang.systemValue),
    [currentLang.systemValue, theme]
  );

  return (
    <AppRouterCacheProvider options={{ key: 'css', prepend: true }}>
      <MuiThemeProvider theme={themeWithLocale}>
        <RTL themeDirection={settings.themeDirection}>
          <CssBaseline />
          {children}
        </RTL>
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
}
