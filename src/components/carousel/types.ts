import { UseEmblaCarouselType } from 'embla-carousel-react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';

import { BoxProps } from '@mui/material/Box';
import { StackProps } from '@mui/material/Stack';
import { Theme, SxProps } from '@mui/material/styles';
import { ButtonBaseProps } from '@mui/material/ButtonBase';

// ----------------------------------------------------------------------

/**
 * Dot Buttons
 */
export type UseCarouselDotsReturnType = {
  snapCount: number;
  selectedIndex: number;
  scrollSnaps: number[];
  onClickDot: (index: number) => void;
};

export type CarouselDotButtonsProps = StackProps &
  Omit<UseCarouselDotsReturnType, 'snapCount'> & {
    variant?: 'circular' | 'rounded' | 'number';
  };

// ----------------------------------------------------------------------

/**
 * Prev & Next Buttons
 */
export type UseCarouselArrowsReturnType = {
  disablePrev: boolean;
  disableNext: boolean;
  onClickPrev: VoidFunction;
  onClickNext: VoidFunction;
};

export type CarouselArrowButtonProps = ButtonBaseProps & {
  svgSize?: number;
  variant: 'prev' | 'next';
  svgIcon?: React.ReactNode;
  options?: CarouselArrowButtonsProps['options'];
};

export type CarouselArrowButtonsProps = StackProps &
  UseCarouselArrowsReturnType & {
    totalSlides?: number;
    selectedIndex?: number;
    options?: Partial<CarouselOptionsProps>;
    slotProps?: {
      prevBtn?: {
        svgIcon?: CarouselArrowButtonProps['svgIcon'];
        svgSize?: CarouselArrowButtonProps['svgSize'];
        sx?: SxProps<Theme>;
      };
      nextBtn?: {
        svgIcon?: CarouselArrowButtonProps['svgIcon'];
        svgSize?: CarouselArrowButtonProps['svgSize'];
        sx?: SxProps<Theme>;
      };
    };
  };

// ----------------------------------------------------------------------

/**
 * Thumbs
 */
export type UseCarouselThumbsReturnType = {
  selectedIndex: number;
  thumbsApi?: EmblaCarouselType;
  thumbsRef: UseEmblaCarouselType[0];
  onClickThumb: (index: number) => void;
};

export type CarouselThumbProps = ButtonBaseProps & {
  src: string;
  index: number;
  selected: boolean;
};

export type CarouselThumbsProps = StackProps & {
  options?: Partial<CarouselOptionsProps>;
  slotProps?: {
    slide?: SxProps<Theme>;
    container?: SxProps<Theme>;
    disableMask?: boolean;
    thumb?: {
      width?: number;
      height?: number;
    };
  };
};

// ----------------------------------------------------------------------

/**
 * Progress
 */
export type UseCarouselProgressReturnType = {
  value: number;
};

export type CarouselProgressBarProps = BoxProps & UseCarouselProgressReturnType;

// ----------------------------------------------------------------------

/**
 * Autoplay
 */
export type UseCarouselAutoPlayReturnType = {
  isPlaying: boolean;
  onTogglePlay: VoidFunction;
  onClickAutoplay: (callback: () => void) => void;
};

// ----------------------------------------------------------------------

/**
 * Slide
 */
export type CarouselSlideProps = BoxProps & {
  options?: Partial<CarouselOptionsProps>;
};

// ----------------------------------------------------------------------

/**
 * Carousel
 */
export type CarouselBaseOptions = EmblaOptionsType & {
  slideSpacing?: string;
  parallax?: boolean | number;
  slidesToShow?: string | number;
};

export type CarouselOptionsProps = CarouselBaseOptions & {
  thumbs?: CarouselBaseOptions;
  breakpoints?: {
    [key: string]: CarouselBaseOptions;
  };
};

export type UseCarouselReturnType = {
  pluginNames?: string[];
  options?: CarouselOptionsProps;
  mainRef: UseEmblaCarouselType[0];
  mainApi?: EmblaCarouselType;
  thumbs: UseCarouselThumbsReturnType;
  dots: UseCarouselDotsReturnType;
  autoplay: UseCarouselAutoPlayReturnType;
  progress: UseCarouselProgressReturnType;
  autoScroll: UseCarouselAutoPlayReturnType;
  arrows: UseCarouselArrowsReturnType;
};

export type CarouselProps = {
  carousel: UseCarouselReturnType;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  slotProps?: {
    container?: SxProps<Theme>;
    slide?: SxProps<Theme>;
  };
};
