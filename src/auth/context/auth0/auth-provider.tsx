'use client';

import { useMemo, useState, useEffect, useCallback } from 'react';
import {
  AppState,
  useAuth0,
  Auth0Provider,
  LogoutOptions,
  PopupLoginOptions,
} from '@auth0/auth0-react';

import { AUTH0_API } from 'src/config-global';

import { AuthContext } from './auth-context';

// ----------------------------------------------------------------------

const STORAGE_KEY = 'accessToken';

type Props = {
  children: React.ReactNode;
};

// ----------------------------------------------------------------------

export function AuthProvider({ children }: Props) {
  const domain = AUTH0_API.domain ?? '';

  const clientId = AUTH0_API.clientId ?? '';

  const redirectUri = AUTH0_API.callbackUrl ?? '';

  const onRedirectCallback = useCallback((appState?: AppState) => {
    window.location.replace(appState?.returnTo || window.location.pathname);
  }, []);

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
    >
      <AuthProviderContainer>{children}</AuthProviderContainer>
    </Auth0Provider>
  );
}

// ----------------------------------------------------------------------

function AuthProviderContainer({ children }: Props) {
  const {
    user,
    logout,
    isLoading,
    loginWithPopup,
    isAuthenticated,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();

  const [popupClick, setPopupClick] = useState(true);

  const [accessToken, setAccessToken] = useState<string | null>(null);

  const getAccessToken = useCallback(async () => {
    try {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();

        setAccessToken(token);
        localStorage.setItem(STORAGE_KEY, token);
      }
    } catch (error) {
      console.error(error);
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  useEffect(() => {
    getAccessToken();
  }, [getAccessToken]);

  // LOGIN
  const handleLoginWithPopup = useCallback(
    async (options?: PopupLoginOptions) => {
      loginWithPopup?.(options);
      setPopupClick(false);
    },
    [loginWithPopup]
  );

  // LOGOUT
  const handleLogout = useCallback(
    async (options?: LogoutOptions) => {
      logout?.(options);
      localStorage.removeItem(STORAGE_KEY);
    },
    [logout]
  );

  // ----------------------------------------------------------------------

  const checkAuthenticated = isAuthenticated ? 'authenticated' : 'unauthenticated';

  const status = popupClick && isLoading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: {
        ...user,
        id: user?.sub,
        accessToken,
        displayName: user?.name,
        photoURL: user?.picture,
        role: 'admin',
      },
      method: 'auth0',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      //
      loginWithRedirect,
      loginWithPopup: handleLoginWithPopup,
      logout: handleLogout,
    }),
    [accessToken, handleLoginWithPopup, handleLogout, loginWithRedirect, status, user]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
