import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import { alpha, useTheme } from '@mui/material/styles';

import { carouselClasses } from '../classes';
import { CarouselDotButtonsProps } from '../types';

// ----------------------------------------------------------------------

export function CarouselDotButtons({
  onClickDot,
  scrollSnaps,
  selectedIndex,
  variant = 'circular',
  sx,
  ...other
}: CarouselDotButtonsProps) {
  const theme = useTheme();

  const dotStyles = (selected: boolean) => ({
    circular: {
      width: 18,
      height: 18,
      '&::before': {
        width: 8,
        height: 8,
        content: '""',
        opacity: 0.24,
        borderRadius: '50%',
        bgcolor: 'currentColor',
        transition: theme.transitions.create(['opacity'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.short,
        }),
        ...(selected && { opacity: 1 }),
      },
    },
    rounded: {
      width: 18,
      height: 18,
      '&::before': {
        width: 8,
        height: 8,
        content: '""',
        opacity: 0.24,
        borderRadius: '50%',
        bgcolor: 'currentColor',
        transition: theme.transitions.create(['width', 'opacity'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.short,
        }),
        ...(selected && { width: 14, opacity: 1, borderRadius: 1 }),
      },
    },
    number: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      typography: 'caption',
      color: 'text.disabled',
      border: `solid 1px ${alpha(theme.palette.grey[500], 0.16)}`,
      ...(selected && {
        bgcolor: 'text.primary',
        fontWeight: 'fontWeightSemiBold',
        color: theme.palette.mode === 'light' ? 'common.white' : 'grey.800',
      }),
    },
  });

  return (
    <Stack
      component="ul"
      direction="row"
      className={carouselClasses.dots}
      sx={{
        p: 0,
        m: 0,
        zIndex: 9,
        display: 'inline-flex',
        ...(variant === 'number' && { gap: 0.75 }),
        ...sx,
      }}
      {...other}
    >
      {scrollSnaps.map((_, index) => (
        <Box component="li" key={index} sx={{ listStyle: 'none', display: 'inline-flex' }}>
          <ButtonBase
            disableRipple
            className={carouselClasses.dot.concat(
              index === selectedIndex ? ` ${carouselClasses.state.selected}` : ''
            )}
            onClick={() => onClickDot(index)}
            sx={{
              ...(variant === 'circular' && dotStyles(index === selectedIndex).circular),
              ...(variant === 'rounded' && dotStyles(index === selectedIndex).rounded),
              ...(variant === 'number' && dotStyles(index === selectedIndex).number),
            }}
          >
            {variant === 'number' && index + 1}
          </ButtonBase>
        </Box>
      ))}
    </Stack>
  );
}
