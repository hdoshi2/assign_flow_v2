import 'server-only';
import { cookies } from 'next/headers';

import { defaultSettings as defaultSettingsBase } from './config-settings';

// ----------------------------------------------------------------------

export function defaultSettingsCookies() {
  const cookieStore = cookies();

  const settingsStore = cookieStore.get('settings');

  return settingsStore ? JSON.parse(settingsStore?.value) : defaultSettingsBase;
}
