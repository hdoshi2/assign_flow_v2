import { useMemo } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, Breakpoint } from '@mui/material/styles';

// ----------------------------------------------------------------------

type UseResponsiveReturnType = boolean;

export type Query = 'up' | 'down' | 'between' | 'only';

export type Value = Breakpoint | number;

export function useResponsive(query: Query, start?: Value, end?: Value): UseResponsiveReturnType {
  const theme = useTheme();

  const getQuery = useMemo(() => {
    switch (query) {
      case 'up':
        return theme.breakpoints.up(start as Value);
      case 'down':
        return theme.breakpoints.down(start as Value);
      case 'between':
        return theme.breakpoints.between(start as Value, end as Value);
      case 'only':
        return theme.breakpoints.only(start as Breakpoint);
      default:
        return theme.breakpoints.up('xs');
    }
  }, [theme, query, start, end]);

  const mediaQueryResult = useMediaQuery(getQuery);

  return mediaQueryResult;
}

// ----------------------------------------------------------------------

type UseWidthReturnType = Breakpoint;

export function useWidth(): UseWidthReturnType {
  const theme = useTheme();

  const keys = useMemo(() => [...theme.breakpoints.keys].reverse(), [theme]);

  const width = keys.reduce((output: Breakpoint | null, key: Breakpoint) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const matches = useMediaQuery(theme.breakpoints.up(key));

    return !output && matches ? key : output;
  }, null);

  return width || 'xs';
}
