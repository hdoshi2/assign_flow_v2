import { Theme } from '@mui/material/styles';

import { generateVars } from '../../generate-vars';

// ----------------------------------------------------------------------

export function cssBaseline(theme: Theme) {
  const cssVars = generateVars(theme);

  const rootVars = {
    ...cssVars,
    /* Add more below */
  };

  return {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': rootVars,
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          minHeight: '100vh',
        },
        '#root, #__next': {
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          maxWidth: '100%',
          display: 'inline-block',
          verticalAlign: 'bottom',
        },
      },
    },
  };
}
