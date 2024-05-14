import 'src/global.css';

// ----------------------------------------------------------------------

import { primaryFont } from 'src/theme/typography';
import { LocalizationProvider } from 'src/locales';
import ThemeProvider from 'src/theme/theme-provider';
import { AuthProvider } from 'src/auth/context/supabase';
import I18nProvider from 'src/locales/i18n-provider-local-storage';

import Toaster from 'src/components/snackbar';
import ProgressBar from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';

import { CheckoutProvider } from 'src/sections/checkout/context';

// import { AuthProvider } from 'src/auth/context/jwt';
// import { AuthProvider } from 'src/auth/context/auth0';
// import { AuthProvider } from 'src/auth/context/amplify';
// import { AuthProvider } from 'src/auth/context/supabase';

// ----------------------------------------------------------------------

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata = {
  title: 'Minimal UI Kit',
  description:
    'The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style',
  keywords: 'react,material,kit,application,dashboard,admin,template',
  manifest: '/manifest.json',
  icons: [
    { rel: 'icon', url: '/favicon/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-16x16.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/apple-touch-icon.png' },
  ],
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <I18nProvider>
      <html lang="en" className={primaryFont.className}>
        <body>
          <AuthProvider>
            <LocalizationProvider>
              <SettingsProvider settings={defaultSettings}>
                <ThemeProvider>
                  <MotionLazy>
                    <CheckoutProvider>
                      <Toaster />
                      <SettingsDrawer />
                      <ProgressBar />
                      {children}
                    </CheckoutProvider>
                  </MotionLazy>
                </ThemeProvider>
              </SettingsProvider>
            </LocalizationProvider>
          </AuthProvider>
        </body>
      </html>
    </I18nProvider>
  );
}
