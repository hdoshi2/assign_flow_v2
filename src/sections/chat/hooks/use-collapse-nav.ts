import { useState, useCallback } from 'react';

// ----------------------------------------------------------------------

export type UseNavCollapseReturnType = {
  collapseDesktop: boolean;
  onCloseDesktop: VoidFunction;
  onCollapseDesktop: VoidFunction;
  openMobile: boolean;
  onOpenMobile: VoidFunction;
  onCloseMobile: VoidFunction;
};

export function useCollapseNav(): UseNavCollapseReturnType {
  const [openMobile, setOpenMobile] = useState(false);

  const [collapseDesktop, setCollapseDesktop] = useState(false);

  const onCollapseDesktop = useCallback(() => {
    setCollapseDesktop((prev) => !prev);
  }, []);

  const onCloseDesktop = useCallback(() => {
    setCollapseDesktop(false);
  }, []);

  const onOpenMobile = useCallback(() => {
    setOpenMobile(true);
  }, []);

  const onCloseMobile = useCallback(() => {
    setOpenMobile(false);
  }, []);

  return {
    collapseDesktop,
    onCloseDesktop,
    onCollapseDesktop,
    //
    openMobile,
    onOpenMobile,
    onCloseMobile,
  };
}
