import { EmblaCarouselType } from 'embla-carousel';
import { useState, useEffect, useCallback } from 'react';

import { UseCarouselProgressReturnType } from '../types';

// ----------------------------------------------------------------------

export function useCarouselProgress(mainApi?: EmblaCarouselType): UseCarouselProgressReturnType {
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((_mainApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, _mainApi.scrollProgress()));

    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!mainApi) return;

    onScroll(mainApi);
    mainApi.on('reInit', onScroll);
    mainApi.on('scroll', onScroll);
  }, [mainApi, onScroll]);

  return {
    value: scrollProgress,
  };
}
