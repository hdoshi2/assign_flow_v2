import { useRef, useMemo } from 'react';
import { useScroll, MotionValue } from 'framer-motion';

// ----------------------------------------------------------------------

type ReturnType = {
  scrollXProgress: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
  elementRef: React.RefObject<HTMLDivElement>;
};

export type UseScrollProgressProps = 'document' | 'container';

export function useScrollProgress(target: UseScrollProgressProps = 'document'): ReturnType {
  const elementRef = useRef<HTMLDivElement>(null);

  const options = {
    container: elementRef,
  };

  const { scrollYProgress, scrollXProgress } = useScroll(
    target === 'container' ? options : undefined
  );

  const memoizedValue = useMemo(
    () => ({
      elementRef,
      scrollXProgress,
      scrollYProgress,
    }),
    [elementRef, scrollXProgress, scrollYProgress]
  );

  return memoizedValue;
}
