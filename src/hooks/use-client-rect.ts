import { useRef, useMemo, useState, useEffect, useCallback } from 'react';

// ----------------------------------------------------------------------

type ReturnType = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  x: number;
  y: number;
  width: number;
  height: number;
  elementRef: React.RefObject<HTMLDivElement>;
};

export function useClientRect(): ReturnType {
  const elementRef = useRef<HTMLDivElement>(null);

  const [rect, setRect] = useState<DOMRect | undefined>(undefined);

  const getRect = useCallback(() => {
    if (elementRef.current) {
      const clientRect = elementRef.current.getBoundingClientRect();
      setRect(clientRect);
    }
  }, []);

  useEffect(() => {
    getRect();

    window.addEventListener('resize', getRect);

    return () => {
      window.removeEventListener('resize', getRect);
    };
  }, [getRect]);

  const memoizedValue = useMemo(() => rect, [rect]);

  return {
    elementRef,
    top: memoizedValue?.top ?? 0,
    right: memoizedValue?.right ?? 0,
    bottom: memoizedValue?.bottom ?? 0,
    left: memoizedValue?.left ?? 0,
    x: memoizedValue?.x ?? 0,
    y: memoizedValue?.y ?? 0,
    width: memoizedValue?.width ?? 0,
    height: memoizedValue?.height ?? 0,
  };
}
