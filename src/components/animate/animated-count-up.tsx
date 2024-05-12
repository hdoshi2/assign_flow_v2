import { useRef, useEffect } from 'react';
import {
  m,
  animate,
  useInView,
  useTransform,
  useMotionValue,
  UseInViewOptions,
} from 'framer-motion';

import Typography, { TypographyProps } from '@mui/material/Typography';

// ----------------------------------------------------------------------

export type AnimatedCountUpProps = TypographyProps & {
  to: number;
  from?: number;
  toFixed?: number;
  duration?: number;
  unit?: 'k' | 'm' | 'b' | string;
  once?: UseInViewOptions['once'];
  amount?: UseInViewOptions['amount'];
};

export function AnimatedCountUp({
  to,
  sx,
  from = 0,
  unit = '',
  toFixed = 0,
  duration = 2,
  once = true,
  amount = 0.5,
  component = 'p',
  ...other
}: AnimatedCountUpProps) {
  const ref = useRef(null);

  const inView = useInView(ref, { once, amount });

  const count = useMotionValue(from);

  const rounded = useTransform(count, (latest) => latest.toFixed(toFixed));

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration });
    }
  }, [count, duration, inView, to]);

  return (
    <Typography component={component} sx={{ display: 'inline-flex', p: 0, m: 0, ...sx }} {...other}>
      <m.span ref={ref}>{rounded}</m.span>
      {unit}
    </Typography>
  );
}
