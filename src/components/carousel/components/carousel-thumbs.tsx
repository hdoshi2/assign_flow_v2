import { Children, forwardRef, isValidElement } from 'react';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { alpha, useTheme } from '@mui/material/styles';

import { carouselClasses } from '../classes';
import { CarouselSlide } from './carousel-slide';
import { StyledRoot, StyledContainer } from '../carousel';
import { CarouselThumbProps, CarouselThumbsProps, CarouselOptionsProps } from '../types';

// ----------------------------------------------------------------------

export const CarouselThumbs = forwardRef<HTMLDivElement, CarouselThumbsProps>(
  ({ children, slotProps, options, sx, ...other }, ref) => {
    const thumbSize = 64;

    const axis = options?.axis ?? 'x';

    const slideSpacing = options?.slideSpacing ?? '12px';

    const maskStyles = useMaskStyle(axis) as React.CSSProperties;

    const slidesToShow =
      options?.slidesToShow && typeof options?.slidesToShow === 'number'
        ? options?.slidesToShow
        : 5;

    const calculate = (size = thumbSize) =>
      size * slidesToShow + parseFloat(slideSpacing) * slidesToShow;

    const renderChildren = Children.map(children, (child) => {
      if (isValidElement(child)) {
        const reactChild = child as React.ReactElement<{ key?: React.Key }>;

        return (
          <CarouselSlide
            component="li"
            key={reactChild.key}
            options={{ ...options, slidesToShow }}
            sx={{
              ...slotProps?.slide,
              listStyle: 'none',
              display: 'inline-flex',
              [`& .${carouselClasses.thumb}`]: {
                width: slotProps?.thumb?.width ?? thumbSize,
                height: slotProps?.thumb?.height ?? thumbSize,
              },
            }}
          >
            {child}
          </CarouselSlide>
        );
      }
      return null;
    });

    return (
      <StyledRoot
        ref={ref}
        axis={axis}
        className={carouselClasses.thumbs}
        sx={{
          flexShrink: 0,
          ...(axis === 'x' && {
            width: calculate(slotProps?.thumb?.width),
            p: 0.5,
          }),
          ...(axis === 'y' && {
            height: calculate(slotProps?.thumb?.height),
            p: 0.5,
          }),
          ...(!slotProps?.disableMask && {
            ...maskStyles,
          }),
          ...sx,
        }}
        {...other}
      >
        <StyledContainer
          component="ul"
          axis={axis}
          slideSpacing={slideSpacing}
          className={carouselClasses.thumbContainer}
          sx={{
            p: 0,
            m: 0,
            ...slotProps?.container,
          }}
        >
          {renderChildren}
        </StyledContainer>
      </StyledRoot>
    );
  }
);

// ----------------------------------------------------------------------

export function CarouselThumb({ selected, index, src, sx, ...other }: CarouselThumbProps) {
  return (
    <ButtonBase
      className={carouselClasses.thumb}
      sx={{
        opacity: 0.48,
        flexShrink: 0,
        cursor: 'pointer',
        borderRadius: 1.5,
        border: 'solid 2px transparent',
        transition: (theme) =>
          theme.transitions.create(['opacity', 'box-shadow'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.short,
          }),
        ...(selected && {
          opacity: 1,
          boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.main}`,
        }),
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        alt={`carousel-thumb-${index}`}
        src={src}
        className={carouselClasses.thumbImage}
        sx={{
          width: 1,
          height: 1,
          objectFit: 'cover',
          borderRadius: 'inherit',
        }}
      />
    </ButtonBase>
  );
}

// ----------------------------------------------------------------------

function useMaskStyle(axis: CarouselOptionsProps['axis']) {
  const theme = useTheme();

  const baseStyles = {
    zIndex: 9,
    content: '""',
    position: 'absolute',
  };

  if (axis === 'y') {
    return {
      '&::before, &::after': { ...baseStyles, left: 0, height: 40, width: '100%' },
      '&::before': {
        top: -8,
        background: `linear-gradient(to bottom, ${theme.palette.background.paper} 20%, ${alpha(theme.palette.background.paper, 0)} 100%)`,
      },
      '&::after': {
        bottom: -8,
        background: `linear-gradient(to top, ${theme.palette.background.paper} 20%, ${alpha(theme.palette.background.paper, 0)} 100%)`,
      },
    };
  }

  return {
    '&::before, &::after': { ...baseStyles, top: 0, width: 40, height: '100%' },
    '&::before': {
      left: -8,
      background: `linear-gradient(to right, ${theme.palette.background.paper} 20%, ${alpha(theme.palette.background.paper, 0)} 100%)`,
    },
    '&::after': {
      right: -8,
      background: `linear-gradient(to left, ${theme.palette.background.paper} 20%, ${alpha(theme.palette.background.paper, 0)} 100%)`,
    },
  };
}
