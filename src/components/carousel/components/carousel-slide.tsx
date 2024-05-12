import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import { carouselClasses } from '../classes';
import { CarouselSlideProps, CarouselBaseOptions, CarouselOptionsProps } from '../types';

// ----------------------------------------------------------------------

type RootStyledProps = BoxProps & {
  axis?: CarouselOptionsProps['axis'];
  slideSpacing?: CarouselBaseOptions['slideSpacing'];
};

const StyledRoot = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'axis' && prop !== 'slideSpacing',
})<RootStyledProps>(({ axis, slideSpacing }) => ({
  position: 'relative',
  ...(axis === 'x' && {
    minWidth: 0,
    paddingLeft: slideSpacing,
  }),
  ...(axis === 'y' && {
    minHeight: 0,
    paddingTop: slideSpacing,
  }),
}));

const StyledContent = styled(Box)(() => ({
  overflow: 'hidden',
  position: 'relative',
  borderRadius: 'inherit',
}));

// ----------------------------------------------------------------------

export function CarouselSlide({ sx, options, children, ...other }: CarouselSlideProps) {
  const width = slideWidth(options?.slidesToShow ?? 1);

  return (
    <StyledRoot
      slideSpacing={options?.slideSpacing}
      axis={options?.axis ?? 'x'}
      className={carouselClasses.slide}
      sx={{
        flex: `0 0 ${width}`,
        ...sx,
      }}
      {...other}
    >
      {options?.parallax ? (
        <StyledContent className={carouselClasses.slideContent}>
          <div className="slide__parallax__layer">{children}</div>
        </StyledContent>
      ) : (
        children
      )}
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------

function slideWidth(value: string | number) {
  if (value === 'auto') {
    return 'auto';
  }
  if (typeof value === 'string' && value.endsWith('%')) {
    return value;
  }
  if (typeof value === 'string' && value.endsWith('px')) {
    return `calc(100% - ${value})`;
  }
  return `calc(100% / ${value})`;
}
