'use client';

import { m, domMax, LazyMotion } from 'framer-motion';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function MotionLazy({ children }: Props) {
  return (
    <LazyMotion strict features={domMax}>
      <m.div> {children} </m.div>
    </LazyMotion>
  );
}
