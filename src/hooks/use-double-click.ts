import { useRef, useMemo, useCallback } from 'react';

// ----------------------------------------------------------------------

type Props = {
  timeout?: number;
  click?: (e: React.SyntheticEvent) => void;
  doubleClick: (e: React.SyntheticEvent) => void;
};

export function useDoubleClick({ click, doubleClick, timeout = 250 }: Props) {
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  const clearClickTimeout = useCallback(() => {
    if (clickTimeout.current) {
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
    }
  }, []);

  const handleEvent = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      clearClickTimeout();
      if (click && event.detail === 1) {
        clickTimeout.current = setTimeout(() => {
          click(event);
        }, timeout);
      }
      if (event.detail % 2 === 0) {
        doubleClick(event);
      }
    },
    [click, doubleClick, timeout, clearClickTimeout]
  );

  const memoizedValue = useMemo(() => handleEvent, [handleEvent]);

  return memoizedValue;
}
