import { Theme, Palette, hexToRgb } from '@mui/material/styles';

import { CustomShadows } from './custom-shadows';

// ----------------------------------------------------------------------

const convertHexToRgb = (hexColor: string): string =>
  hexToRgb(hexColor).replace('rgb(', '').replace(/\)/g, '');

export function generatePaletteVars(palette: Partial<Palette>): Record<string, string> {
  const cssVariables: Record<string, string> = {};

  Object.entries(palette).forEach(([type, colors]) => {
    Object.entries(colors).forEach(([key, value]) => {
      const variableName = `--palette-${type}-${key}`;
      cssVariables[variableName] = convertHexToRgb(value);
    });
  });

  return cssVariables;
}

export function generatePaletteActionVars(palette: Palette['action']): Record<string, string> {
  const cssVariables: Record<string, string> = {};

  Object.entries(palette).forEach(([key, value]) => {
    const variableName = `--palette-action-${key}`;
    cssVariables[variableName] = value;
  });

  return cssVariables;
}

// ----------------------------------------------------------------------

export function generateShadowsVars(customShadows: CustomShadows): Record<string, string> {
  const cssVariables: Record<string, string> = {};

  Object.entries(customShadows).forEach(([shadowKey, shadowValue]) => {
    const variableName = `--custom-shadows-${shadowKey}`;
    cssVariables[variableName] = shadowValue;
  });

  return cssVariables;
}

// ----------------------------------------------------------------------

export function generateVars(theme: Theme) {
  const cssVars = {
    /**
     * palette
     */
    ...generatePaletteVars({
      text: theme.palette.text,
      background: theme.palette.background,
      primary: theme.palette.primary,
      secondary: theme.palette.secondary,
      info: theme.palette.info,
      warning: theme.palette.warning,
      success: theme.palette.success,
      error: theme.palette.error,
      grey: theme.palette.grey,
      common: theme.palette.common,
    }),
    ...generatePaletteActionVars(theme.palette.action),
    '--palette-divider': theme.palette.divider,
    /**
     * custom shadows
     */
    ...generateShadowsVars(theme.customShadows),
  };

  return cssVars;
}
