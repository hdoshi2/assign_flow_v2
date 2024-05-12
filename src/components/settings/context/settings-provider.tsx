'use client';

import { useMemo, useState, useCallback } from 'react';

import { useCookies } from 'src/hooks/use-cookies';
import { useLocalStorage } from 'src/hooks/use-local-storage';

import { SettingsState } from '../types';
import { SettingsContext } from './settings-context';
import { STORAGE_KEY, defaultSettings } from '../config-settings';

// ----------------------------------------------------------------------

type SettingsProviderProps = {
  children: React.ReactNode;
  settings: SettingsState;
  caches?: 'localStorage' | 'cookie';
};

export function SettingsProvider({
  children,
  settings,
  caches = 'localStorage',
}: SettingsProviderProps) {
  const cookies = useCookies<SettingsState>(STORAGE_KEY, settings, defaultSettings);

  const localStorage = useLocalStorage<SettingsState>(STORAGE_KEY, settings);

  const values = caches === 'cookie' ? cookies : localStorage;

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
      ...values.state,
      canReset: values.canReset,
      onReset: values.resetState,
      onUpdate: values.setState,
      onUpdateField: values.setField,
      // Drawer
      open: openDrawer,
      onToggle: onToggleDrawer,
      onClose: onCloseDrawer,
    }),
    [
      onCloseDrawer,
      onToggleDrawer,
      openDrawer,
      values.canReset,
      values.resetState,
      values.setField,
      values.setState,
      values.state,
    ]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}
