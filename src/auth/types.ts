import { LogoutOptions, PopupLoginOptions, RedirectLoginOptions } from '@auth0/auth0-react';

// ----------------------------------------------------------------------

export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type UserType = null | Record<string, any>;

export type AuthState = {
  status?: string;
  loading: boolean;
  user: UserType;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type RegisterUser = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type Credentials = {
  email: string;
  code: string;
  password: string;
};

// ----------------------------------------------------------------------

type CanRemove = {
  login?: ({ email, password }: LoginUser) => Promise<void>;
  register?: ({ email, password, firstName, lastName }: RegisterUser) => Promise<void>;
  //
  loginWithGoogle?: () => Promise<void>;
  loginWithGithub?: () => Promise<void>;
  loginWithTwitter?: () => Promise<void>;
  //
  loginWithPopup?: (options?: PopupLoginOptions) => Promise<void>;
  loginWithRedirect?: (options?: RedirectLoginOptions) => Promise<void>;
  //
  confirmRegister?: ({ email, code }: Pick<Credentials, 'email' | 'code'>) => Promise<void>;
  forgotPassword?: ({ email }: Pick<Credentials, 'email'>) => Promise<void>;
  resendCodeRegister?: ({ email }: Pick<Credentials, 'email'>) => Promise<void>;
  newPassword?: ({ email, code, password }: Credentials) => Promise<void>;
  updatePassword?: ({ password }: Pick<Credentials, 'password'>) => Promise<void>;
};

// ----------------------------------------------------------------------

export type JWTContextType = CanRemove & {
  user: UserType;
  method: string;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  login: ({ email, password }: LoginUser) => Promise<void>;
  register: ({ email, password, firstName, lastName }: RegisterUser) => Promise<void>;
  logout: () => Promise<void>;
};

// ----------------------------------------------------------------------

export type FirebaseContextType = CanRemove & {
  user: UserType;
  method: string;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  logout: () => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithGithub: () => Promise<void>;
  loginWithTwitter: () => Promise<void>;
  forgotPassword?: ({ email }: Pick<Credentials, 'email'>) => Promise<void>;
  login: ({ email, password }: LoginUser) => Promise<void>;
  register: ({ email, password, firstName, lastName }: RegisterUser) => Promise<void>;
};

// ----------------------------------------------------------------------

export type AmplifyContextType = CanRemove & {
  user: UserType;
  method: string;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  login: ({ email, password }: LoginUser) => Promise<unknown>;
  register: ({ email, password, firstName, lastName }: RegisterUser) => Promise<unknown>;
  logout: () => Promise<unknown>;
  confirmRegister: ({ email, code }: Pick<Credentials, 'email' | 'code'>) => Promise<void>;
  forgotPassword: ({ email }: Pick<Credentials, 'email'>) => Promise<void>;
  resendCodeRegister: ({ email }: Pick<Credentials, 'email'>) => Promise<void>;
  newPassword: ({ email, code, password }: Credentials) => Promise<void>;
};

// ----------------------------------------------------------------------

export type Auth0ContextType = CanRemove & {
  user: UserType;
  method: string;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  loginWithPopup: (options?: PopupLoginOptions) => Promise<void>;
  loginWithRedirect: (options?: RedirectLoginOptions) => Promise<void>;
  logout: (options?: LogoutOptions) => Promise<void>;
};

// ----------------------------------------------------------------------

export type SupabaseContextType = CanRemove & {
  user: UserType;
  method: string;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  login: ({ email, password }: LoginUser) => Promise<void>;
  register: ({ email, password, firstName, lastName }: RegisterUser) => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: ({ email }: Pick<Credentials, 'email'>) => Promise<void>;
  updatePassword: ({ password }: Pick<Credentials, 'password'>) => Promise<void>;
};
