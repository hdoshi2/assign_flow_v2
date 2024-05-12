import { mediaQueries } from './typography';

// ----------------------------------------------------------------------

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    hideScrollX?: CSSProperties;
    hideScrollY?: CSSProperties;
    remToPx: (value: string) => number;
    pxToRem: (value: number) => string;
    textGradient: (background: string) => CSSProperties;
    bgGradient: (background: string, imgUrl?: string) => CSSProperties;
    bgBlur: (background: string, blur?: number, imgUrl?: string) => CSSProperties;
    maxLine: (lineClamp: number, persistent?: CSSProperties) => CSSProperties;
  }
}

// ----------------------------------------------------------------------

/**
 ** Usage:
 * ...theme.mixins.hideScrollX,
 * ...theme.mixins.hideScrollY,
 */
const hideScrollX = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowX: 'auto',
  '&::-webkit-scrollbar': { display: 'none' },
};
const hideScrollY = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowX: 'auto',
  '&::-webkit-scrollbar': { display: 'none' },
};

function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

// ----------------------------------------------------------------------

/**
 ** Usage:
 * ...theme.mixins.textGradient( `to right, ${theme.palette.text.primary}, ${alpha(theme.palette.text.primary, 0.2)}`
 */
const textGradient = (background: string) => ({
  background: `linear-gradient(${background})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  color: 'transparent',
});

// ----------------------------------------------------------------------

/**
 ** Usage:
 * ...theme.mixins.bgGradient( `0deg, ${alpha(theme.palette.background.default, 0.92)}, ${alpha(theme.palette.background.default, 0.92)}`, '/assets/background/overlay-3-blur.jpg'),
 */
const bgGradient = (background: string, imgUrl?: string) => {
  if (imgUrl) {
    return {
      background: `linear-gradient(${background}), url(${imgUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    };
  }
  return { background: `linear-gradient(${background})` };
};

// ----------------------------------------------------------------------

/**
 ** Usage:
 * ...theme.mixins.bgBlur(alpha(theme.palette.background.paper, 0.8))
 */
const bgBlur = (background: string, blur = 6, imgUrl?: string) => {
  if (imgUrl) {
    return {
      position: 'relative',
      backgroundImage: `url(${imgUrl})`,
      '&::before': {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 9,
        content: '""',
        width: '100%',
        height: '100%',
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: background,
      },
    };
  }
  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: background,
  };
};

// ----------------------------------------------------------------------

/**
 * Limit the number of lines
 * @param lineClamp
 ** Usage:
 * ...theme.mixins.maxLine(2, theme.typography.caption)
 *
 * Limit the number of lines + keep height fixed
 * @param persistent
 ** Usage:
 * ...theme.mixins.maxLine(2, theme.typography.caption)
 */

export type FontProperties = {
  fontFamily: React.CSSProperties['fontFamily'];
  fontWeight: React.CSSProperties['fontWeight'];
  fontSize: React.CSSProperties['fontSize'];
  lineHeight: React.CSSProperties['lineHeight'];
};

export type FontResponsiveProperties = FontProperties & {
  [key: string]: {
    fontSize: React.CSSProperties['fontSize'];
  };
};

const getFontSize = (fontSize: React.CSSProperties['fontSize']) =>
  typeof fontSize === 'string' ? remToPx(fontSize) : fontSize;

const getLineHeight = (lineHeight: React.CSSProperties['lineHeight'], fontSize?: number) => {
  if (typeof lineHeight === 'string') {
    return fontSize ? remToPx(lineHeight) / fontSize : 1;
  }
  return lineHeight;
};

function maxLine(lineClamp: number, persistent?: FontResponsiveProperties) {
  const baseStyles = {
    overflow: 'hidden',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    WebkitLineClamp: lineClamp,
    WebkitBoxOrient: 'vertical',
  };

  if (persistent) {
    const fontSizeBase = getFontSize(persistent.fontSize);
    const fontSizeSm = getFontSize(persistent[mediaQueries.upSm]?.fontSize);
    const fontSizeMd = getFontSize(persistent[mediaQueries.upMd]?.fontSize);
    const fontSizeLg = getFontSize(persistent[mediaQueries.upLg]?.fontSize);

    const lineHeight = getLineHeight(persistent.lineHeight, fontSizeBase);

    return {
      ...baseStyles,
      ...(lineHeight && {
        ...(fontSizeBase && { height: fontSizeBase * lineHeight * lineClamp }),
        ...(fontSizeSm && { [mediaQueries.upSm]: { height: fontSizeSm * lineHeight * lineClamp } }),
        ...(fontSizeMd && { [mediaQueries.upMd]: { height: fontSizeMd * lineHeight * lineClamp } }),
        ...(fontSizeLg && { [mediaQueries.upLg]: { height: fontSizeLg * lineHeight * lineClamp } }),
      }),
    };
  }

  return baseStyles;
}

// ----------------------------------------------------------------------

export const mixins = {
  hideScrollX,
  hideScrollY,
  textGradient,
  bgGradient,
  bgBlur,
  maxLine,
  remToPx,
  pxToRem,
};
