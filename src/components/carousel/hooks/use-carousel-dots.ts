import { EmblaCarouselType } from 'embla-carousel';
import { useState, useEffect, useCallback } from 'react';

import { UseCarouselDotsReturnType } from '../types';

// ----------------------------------------------------------------------

export function useCarouselDots(mainApi?: EmblaCarouselType): UseCarouselDotsReturnType {
  const [snapCount, setSnapCount] = useState(0);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onClickDot = useCallback(
    (index: number) => {
      if (!mainApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi]
  );

  const onInit = useCallback((_mainApi: EmblaCarouselType) => {
    setScrollSnaps(_mainApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((_mainApi: EmblaCarouselType) => {
    setSelectedIndex(_mainApi.selectedScrollSnap());
    setSnapCount(_mainApi.scrollSnapList().length);
  }, []);

  useEffect(() => {
    if (!mainApi) return;

    onInit(mainApi);
    onSelect(mainApi);
    mainApi.on('reInit', onInit);
    mainApi.on('reInit', onSelect);
    mainApi.on('select', onSelect);
  }, [mainApi, onInit, onSelect]);

  return {
    snapCount,
    scrollSnaps,
    selectedIndex,
    onClickDot,
  };
}
