import { Theme, alpha } from '@mui/material/styles';
import { sliderClasses } from '@mui/material/Slider';

// ----------------------------------------------------------------------

declare module '@mui/material/Slider' {
  interface SliderPropsColorOverrides {
    inherit: true;
  }
}

export function slider(theme: Theme) {
  const lightMode = theme.palette.mode === 'light';

  const cssVars = {
    // Rail
    '--rail-bg': alpha(theme.palette.grey[500], 0.12),
    '--rail-small-height': '6px',
    '--rail-medium-height': '10px',
    // Thumb
    '--thumb-small-size': '16px',
    '--thumb-medium-size': '20px',
    '--thumb-color': theme.palette.common.white,
    '--thumb-border-color': alpha(theme.palette.grey[500], 0.08),
    '--thumb-color-gradient': `linear-gradient(180deg, ${theme.palette.grey[500]} 0%, ${alpha(theme.palette.grey[500], 0)} 100%)`,
    // Mark
    '--mark-width': '1px',
    '--mark-small-height': '4px',
    '--mark-medium-height': '6px',
    '--mark-bg': alpha(theme.palette.grey[500], 0.48),
    '--mark-active-bg': alpha(theme.palette.common.white, 0.48),
    // Label
    '--value-label-bg': theme.palette.grey[lightMode ? 800 : 700],
    // State
    '--disabled-color': theme.palette.action.disabled,
  };

  return {
    MuiSlider: {
      styleOverrides: {
        root: {
          ...cssVars,
          [`&.${sliderClasses.disabled}`]: {
            color: 'var(--disabled-color)',
          },
        },
        rail: {
          opacity: 1,
          backgroundColor: 'var(--rail-bg)',
          height: 'var(--rail-medium-height)',
        },
        track: {
          height: 'var(--rail-medium-height)',
        },
        thumb: {
          borderWidth: 1,
          borderStyle: 'solid',
          color: 'var(--thumb-color)',
          width: 'var(--thumb-medium-size)',
          boxShadow: theme.customShadows.z1,
          height: 'var(--thumb-medium-size)',
          borderColor: 'var(--thumb-border-color)',
          '&::before': {
            opacity: 0.4,
            width: 'calc(100% - 5px)',
            height: 'calc(100% - 5px)',
            background: 'var(--thumb-color-gradient)',
          },
        },
        mark: {
          width: 'var(--mark-width)',
          height: 'var(--mark-medium-height)',
          backgroundColor: 'var(--mark-bg)',
          '&[data-index="0"]': { display: 'none' },
        },
        markActive: {
          backgroundColor: 'var(--mark-active-bg)',
        },
        sizeSmall: {
          [`& .${sliderClasses.rail}`]: {
            height: 'var(--rail-small-height)',
          },
          [`& .${sliderClasses.track}`]: {
            height: 'var(--rail-small-height)',
          },
          [`& .${sliderClasses.thumb}`]: {
            width: 'var(--thumb-small-size)',
            height: 'var(--thumb-small-size)',
          },
          [`& .${sliderClasses.mark}`]: {
            height: 'var(--mark-small-height)',
          },
        },
        markLabel: {
          fontSize: 13,
          color: theme.palette.text.disabled,
        },
        valueLabel: {
          borderRadius: 8,
          backgroundColor: 'var(--value-label-bg)',
        },
      },
    },
  };
}
