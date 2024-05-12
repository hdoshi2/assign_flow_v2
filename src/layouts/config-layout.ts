import { useMemo } from 'react';

import { Breakpoint } from '@mui/material/styles';

// ----------------------------------------------------------------------

/**
 * BREAKPOINT
 * https://mui.com/material-ui/customization/default-theme/
 * "xs": 0,
 * "sm": 600,
 * "md": 900,
 * "lg": 1200,
 * "xl": 1536
 */
export const BREAKPOINT: Record<'DASHBOARD' | 'MAIN' | 'AUTH_SPLIT' | 'AUTH_CENTERED', Breakpoint> =
  {
    DASHBOARD: 'lg',
    MAIN: 'md',
    AUTH_SPLIT: 'md',
    AUTH_CENTERED: 'md',
  };

export const layoutVars = {
  '--layout-transition-easing': 'linear',
  '--layout-transition-duration': '120ms',
  /* header */
  '--layout-header-zIndex': 1100,
  '--layout-header-mobile-height': '64px',
  '--layout-header-desktop-height': '80px',
  '--layout-header-desktop-horizontal-height': 'var(--layout-header-mobile-height)',
  '--layout-header-desktop-offset-height': 'calc(var(--layout-header-desktop-height) - 16px)',
  /* nav */
  '--layout-nav-vertical-width': '280px',
  '--layout-nav-mini-width': '88px',
  '--layout-nav-zIndex': 'calc(var(--layout-header-zIndex) + 1)',
  /* main */
  '--layout-dashboard-content-pt': '8px',
  '--layout-dashboard-content-pb': '64px',
  '--layout-dashboard-content-pl': '40px',
  '--layout-dashboard-content-pr': '40px',
  '--layout-simple-content-compact-width': '448px',
  '--layout-auth-content-form-width': '420px',
};

// ----------------------------------------------------------------------

const setVar = (colorVar: string, opacity?: number) => {
  if (colorVar.includes('--palette-action')) {
    return `var(${colorVar})`;
  }
  return opacity ? `rgba(var(${colorVar}), ${opacity})` : `rgb(var(${colorVar}))`;
};

export function useNavVars(color: string, mode: string) {
  return useMemo(() => {
    switch (color) {
      case 'integrate':
        return {
          '--nav-bg': setVar('--palette-background-default'),
          '--nav-bg-blur': setVar('--palette-background-default', 0.8),
          '--nav-border-color': setVar('--palette-grey-500', 0.12),
          '--nav-text-primary-color': setVar('--palette-text-primary'),
          '--nav-text-secondary-color': setVar('--palette-text-secondary'),
          '--nav-text-disabled-color': setVar('--palette-text-disabled'),
          /* subheader */
          '--nav-subheader-color': setVar('--palette-text-disabled'),
          '--nav-subheader-hover-color': setVar('--palette-text-primary'),
          /* toggle button */
          '--nav-toggle-button-bg': setVar('--palette-background-default'),
          '--nav-toggle-button-hover-bg': setVar('--palette-background-neutral'),
          '--nav-toggle-button-color': setVar('--palette-action-active'),
          '--nav-toggle-button-hover-color': setVar('--palette-text-primary'),
          '--nav-toggle-button-border-color': setVar('--palette-grey-500', 0.12),
          /* item */
          '--nav-item-color': setVar('--palette-text-secondary'),
          '--nav-item-hover-bg': setVar('--palette-action-hover'),
          '--nav-item-selected-bg': setVar('--palette-action-hover'),
          '--nav-item-selected-color': setVar('--palette-text-primary'),
          '--nav-item-caption-color': setVar('--palette-text-disabled'),
          '--nav-item-root-active-color': setVar('--palette-primary-main'),
          '--nav-item-root-active-bg': setVar('--palette-primary-main', 0.08),
          '--nav-item-root-active-hover-bg': setVar('--palette-primary-main', 0.16),
          '--nav-item-sub-active-color': setVar('--palette-text-primary'),
          '--nav-item-sub-active-bg': setVar('--palette-action-hover'),
          '--nav-item-sub-icon-color': setVar('--palette-text-disabled'),
          '--nav-item-sub-icon-active-color': setVar('--palette-primary-main'),
          /* herringbone shape */
          '--nav-herringbone-shape-color': '#EDEFF2',
          ...(mode === 'dark' && {
            '--nav-item-root-active-color': setVar('--palette-primary-light'),
            '--nav-bg-blur': setVar('--palette-background-default', 0.96),
            '--nav-herringbone-shape-color': '#282F37',
          }),
        };
      case 'apparent':
        return {
          '--nav-bg': setVar('--palette-grey-900'),
          '--nav-bg-blur': setVar('--palette-grey-900', 0.96),
          '--nav-border-color': 'transparent',
          '--nav-text-primary-color': setVar('--palette-common-white'),
          '--nav-text-secondary-color': setVar('--palette-grey-500'),
          '--nav-text-disabled-color': setVar('--palette-grey-600'),
          /* subheader */
          '--nav-subheader-color': setVar('--palette-grey-600'),
          '--nav-subheader-hover-color': setVar('--palette-common-white'),
          /* toggle button */
          '--nav-toggle-button-bg': setVar('--palette-background-default'),
          '--nav-toggle-button-hover-bg': setVar('--palette-background-neutral'),
          '--nav-toggle-button-color': setVar('--palette-action-active'),
          '--nav-toggle-button-hover-color': setVar('--palette-text-primary'),
          '--nav-toggle-button-border-color': setVar('--palette-grey-500', 0.12),
          /* item */
          '--nav-item-color': setVar('--palette-grey-500'),
          '--nav-item-hover-bg': setVar('--palette-action-hover'),
          '--nav-item-selected-bg': setVar('--palette-action-hover'),
          '--nav-item-selected-color': setVar('--palette-common-white'),
          '--nav-item-caption-color': setVar('--palette-grey-600'),
          '--nav-item-root-active-color': setVar('--palette-primary-light'),
          '--nav-item-root-active-bg': setVar('--palette-primary-main', 0.08),
          '--nav-item-root-active-hover-bg': setVar('--palette-primary-main', 0.16),
          '--nav-item-sub-active-color': setVar('--palette-common-white'),
          '--nav-item-sub-active-bg': setVar('--palette-action-hover'),
          '--nav-item-sub-icon-color': setVar('--palette-grey-600'),
          '--nav-item-sub-icon-active-color': setVar('--palette-primary-main'),
          /* herringbone shape */
          '--nav-herringbone-shape-color': '#282F37',
          ...(mode === 'dark' && {
            '--nav-bg': setVar('--palette-grey-800'),
            '--nav-bg-blur': setVar('--palette-grey-800', 0.8),
          }),
        };
      default:
        return {};
    }
  }, [color, mode]);
}
