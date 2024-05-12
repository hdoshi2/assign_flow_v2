import { Children, isValidElement } from 'react';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { carouselClasses } from './classes';
import { CarouselSlide } from './components/carousel-slide';
import { CarouselProps, CarouselBaseOptions, CarouselOptionsProps } from './types';

// ----------------------------------------------------------------------

type StyledProps = {
  axis?: CarouselOptionsProps['axis'];
  slideSpacing?: CarouselBaseOptions['slideSpacing'];
};

export const StyledRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'axis',
})<StyledProps>(({ axis }) => ({
  margin: 'auto',
  maxWidth: '100%',
  overflow: 'hidden',
  position: 'relative',
  ...(axis === 'y' && {
    height: '100%',
  }),
}));

export const StyledContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'axis' && prop !== 'slideSpacing',
})<StyledProps>(({ axis, slideSpacing }) => ({
  display: 'flex',
  backfaceVisibility: 'hidden',
  ...(axis === 'x' && {
    touchAction: 'pan-y',
    marginLeft: `calc(${slideSpacing} * -1)`,
  }),
  ...(axis === 'y' && {
    height: '100%',
    touchAction: 'pan-x',
    flexDirection: 'column',
    marginTop: `calc(${slideSpacing} * -1)`,
  }),
}));

// ----------------------------------------------------------------------

export default function Carousel({ carousel, children, sx, slotProps }: CarouselProps) {
  const { mainRef, options } = carousel;

  const axis = options?.axis ?? 'x';

  const slideSpacing = options?.slideSpacing ?? '0px';

  const direction = options?.direction ?? 'ltr';

  const renderChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const reactChild = child as React.ReactElement<{ key?: React.Key }>;

      return (
        <CarouselSlide key={reactChild.key} options={carousel.options} sx={slotProps?.slide}>
          {child}
        </CarouselSlide>
      );
    }
    return null;
  });

  return (
    <StyledRoot sx={sx} axis={axis} ref={mainRef} dir={direction} className={carouselClasses.root}>
      <StyledContainer
        axis={axis}
        slideSpacing={slideSpacing}
        className={carouselClasses.container}
        sx={{
          ...(carousel.pluginNames?.includes('autoHeight') && {
            alignItems: 'flex-start',
          }),
          ...slotProps?.container,
        }}
      >
        {renderChildren}
      </StyledContainer>
    </StyledRoot>
  );
}
