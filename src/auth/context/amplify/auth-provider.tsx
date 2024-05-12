'use client';

import { Amplify } from 'aws-amplify';
import { useMemo, useEffect, useReducer, useCallback } from 'react';
import {
  signIn,
  signUp,
  signOut,
  confirmSignUp,
  resetPassword,
  resendSignUpCode,
  fetchAuthSession,
  fetchUserAttributes,
  confirmResetPassword,
} from 'aws-amplify/auth';

import { AMPLIFY_API } from 'src/config-global';

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

/**
 * DOCS: https://docs.amplify.aws/react/build-a-backend/auth/manage-user-session/
 */
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: `${AMPLIFY_API.userPoolId}`,
      userPoolClientId: `${AMPLIFY_API.userPoolWebClientId}`,
    },
  },
});

enum Types {
  INITIAL = 'INITIAL',
  LOGOUT = 'LOGOUT',
}

type Payload = {
  [Types.INITIAL]: {
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
      const authSession = (await fetchAuthSession()).tokens;

      if (authSession) {
        const userAttributes = await fetchUserAttributes();

        dispatch({
          type: Types.INITIAL,
          payload: {
            user: { ...authSession, ...userAttributes },
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
    await signIn({
      username: email,
      password,
    });

    const authSession = (await fetchAuthSession()).tokens;

    if (authSession) {
      const userAttributes = await fetchUserAttributes();

      dispatch({
        type: Types.INITIAL,
        payload: {
          user: { ...authSession, ...userAttributes },
        },
      });
    }
  }, []);

  // REGISTER
  const register = useCallback(async ({ email, password, firstName, lastName }: RegisterUser) => {
    await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
          email,
          given_name: firstName,
          family_name: lastName,
        },
      },
    });
  }, []);

  // CONFIRM REGISTER
  const confirmRegister = useCallback(
    async ({ email, code }: Pick<Credentials, 'email' | 'code'>) => {
      await confirmSignUp({
        username: email,
        confirmationCode: code,
      });
    },
    []
  );

  // RESEND CODE REGISTER
  const resendCodeRegister = useCallback(async ({ email }: Pick<Credentials, 'email'>) => {
    await resendSignUpCode({
      username: email,
    });
  }, []);

  // LOGOUT
  const logout = useCallback(async () => {
    await signOut();
    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  // FORGOT PASSWORD
  const forgotPassword = useCallback(async ({ email }: Pick<Credentials, 'email'>) => {
    await resetPassword({ username: email });
  }, []);

  // NEW PASSWORD
  const newPassword = useCallback(async ({ email, code, password }: Credentials) => {
    await confirmResetPassword({
      username: email,
      confirmationCode: code,
      newPassword: password,
    });
  }, []);

  // ----------------------------------------------------------------------

  const checkAuthenticated = state.user ? 'authenticated' : 'unauthenticated';

  const status = state.loading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: {
        ...state.user,
        id: state.user?.sub,
        accessToken: state.user?.accessToken?.toString(),
        displayName: `${state.user?.given_name} ${state.user?.family_name}`,
        role: 'admin',
      },
      method: 'amplify',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      //
      login,
      logout,
      register,
      newPassword,
      forgotPassword,
      confirmRegister,
      resendCodeRegister,
    }),
    [
      status,
      state.user,
      //
      login,
      logout,
      register,
      newPassword,
      forgotPassword,
      confirmRegister,
      resendCodeRegister,
    ]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
