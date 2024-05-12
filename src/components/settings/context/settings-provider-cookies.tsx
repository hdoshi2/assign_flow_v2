'use client';

import { useMemo, useState, useCallback } from 'react';

import { useCookies } from 'src/hooks/use-cookies';

import { SettingsState } from '../types';
import { SettingsContext } from './settings-context';
import { STORAGE_KEY, defaultSettings } from '../config-settings';

// ----------------------------------------------------------------------

type SettingsProviderProps = {
  children: React.ReactNode;
  settings: SettingsState;
};

export function SettingsProvider({ children, settings }: SettingsProviderProps) {
  const { state, setState, setField, resetState, canReset } = useCookies<SettingsState>(
    STORAGE_KEY,
    settings,
    defaultSettings
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
    [canReset, onCloseDrawer, onToggleDrawer, openDrawer, resetState, setField, setState, state]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
