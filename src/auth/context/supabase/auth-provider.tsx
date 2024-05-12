'use client';

import { useMemo, useEffect, useReducer, useCallback } from 'react';

import { paths } from 'src/routes/paths';

import { supabase } from './lib';
import { AuthContext } from './auth-context';
import {
  UserType,
  AuthState,
  LoginUser,
  Credentials,
  RegisterUser,
  ActionMapType,
} from '../../types';

// ----------------------------------------------------------------------
/**
 * NOTE:
 * We only build demo at basic level.
 * Customer will need to do some extra handling yourself if you want to extend the logic and other features...
 */
// ----------------------------------------------------------------------

enum Types {
  INITIAL = 'INITIAL',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  LOGOUT = 'LOGOUT',
}

type Payload = {
  [Types.INITIAL]: {
    user: UserType;
  };
  [Types.LOGIN]: {
    user: UserType;
  };
  [Types.REGISTER]: {
    user: UserType;
  };
  [Types.LOGOUT]: undefined;
};

// ----------------------------------------------------------------------

const initialState: AuthState = {
  user: null,
  loading: true,
};

const reducer = (
  state: AuthState,
  action: ActionMapType<Payload>[keyof ActionMapType<Payload>]
) => {
  if (action.type === Types.INITIAL) {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        dispatch({
          type: Types.INITIAL,
          payload: { user: null },
        });
        console.error(error);
        throw error;
      }

      if (session?.user) {
        dispatch({
          type: Types.INITIAL,
          payload: {
            user: { ...session, ...session?.user },
          },
        });
      } else {
        dispatch({
          type: Types.INITIAL,
          payload: { user: null },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: { user: null },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  // LOGIN
  const login = useCallback(async ({ email, password }: LoginUser) => {
    const {
      data: { session },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      dispatch({
        type: Types.LOGIN,
        payload: { user: null },
      });
      console.error(error);
      throw error;
    } else {
      dispatch({
        type: Types.LOGIN,
        payload: {
          user: { ...session, ...session?.user },
        },
      });
    }
  }, []);

  // REGISTER
  const register = useCallback(async ({ email, password, firstName, lastName }: RegisterUser) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}${paths.dashboard.root}`,
        data: {
          display_name: `${firstName} ${lastName}`,
        },
      },
    });

    if (error) {
      console.error(error);
      throw error;
    }
  }, []);

  // LOGOUT
  const logout = useCallback(async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error(error);
      throw error;
    }

    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  // FORGOT PASSWORD
  const forgotPassword = useCallback(async ({ email }: Pick<Credentials, 'email'>) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}${paths.auth.supabase.newPassword}`,
    });

    if (error) {
      console.error(error);
      throw error;
    }
  }, []);

  // NEW PASSWORD
  const updatePassword = useCallback(async ({ password }: Pick<Credentials, 'password'>) => {
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      console.error(error);
      throw error;
    }
  }, []);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';

  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: {
        ...state.user,
        id: state.user?.id,
        accessToken: state.user?.access_token,
        displayName: `${state.user?.user_metadata.display_name}`,
        role: 'admin',
      },
      method: 'supabase',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      //
      login,
      register,
      logout,
      forgotPassword,
      updatePassword,
    }),
    [forgotPassword, login, logout, updatePassword, register, state.user, status]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
