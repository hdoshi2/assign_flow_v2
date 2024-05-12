import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

interface ConvertedBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export function useCarouselBreakpoints() {
  const theme = useTheme();

  const converted = Object.entries(theme.breakpoints.values).reduce((acc, [key, value]) => {
    acc[key as keyof ConvertedBreakpoints] = `(min-width: ${value}px)`;
    return acc;
  }, {} as ConvertedBreakpoints);

  return converted;
}
