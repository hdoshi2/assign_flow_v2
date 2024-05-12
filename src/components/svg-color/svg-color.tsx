import { forwardRef } from 'react';

import Box, { BoxProps } from '@mui/material/Box';

import { svgColorClasses } from './classes';

// ----------------------------------------------------------------------

export type SvgColorProps = BoxProps & {
  src: string;
};

const SvgColor = forwardRef<HTMLSpanElement, SvgColorProps>(({ src, sx, ...other }, ref) => (
  <Box
    component="span"
    className={svgColorClasses}
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      flexShrink: 0,
      display: 'inline-flex',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));

export default SvgColor;
