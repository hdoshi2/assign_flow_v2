'use client';

import { useMemo, useState, useCallback } from 'react';

import { useLocalStorage } from 'src/hooks/use-local-storage';

import { SettingsState } from '../types';
import { STORAGE_KEY } from '../config-settings';
import { SettingsContext } from './settings-context';

// ----------------------------------------------------------------------

type SettingsProviderProps = {
  children: React.ReactNode;
  settings: SettingsState;
};

export function SettingsProvider({ children, settings }: SettingsProviderProps) {
  const { state, setState, setField, canReset, resetState } = useLocalStorage<SettingsState>(
    STORAGE_KEY,
    settings
  );

  const [openDrawer, setOpenDrawer] = useState(false);

  // Drawer
  const onToggleDrawer = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setOpenDrawer(false);
  }, []);

  const memoizedValue = useMemo(
    () => ({
      ...state,
      canReset,
      onReset: resetState,
      onUpdate: setState,
      onUpdateField: setField,
      // Drawer
      open: openDrawer,
      onToggle: onToggleDrawer,
      onClose: onCloseDrawer,
    }),
    [state, canReset, setField, setState, openDrawer, resetState, onCloseDrawer, onToggleDrawer]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
