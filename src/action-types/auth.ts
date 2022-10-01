export interface Auth {
  username: string,
  name: string,
  surname: string,
  city: string
}

export interface IError {
  error: number;
  message: string;
}

export interface AuthState {
  data: Auth | null;
  error: IError | null;
  loading: boolean;
}

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_RESET = 'LOGIN_RESET';
export const LOGOUT = 'LOGOUT';

export interface Login {
  type: typeof LOGIN;
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: Auth;
}

interface LoginError {
  type: typeof LOGIN_ERROR;
  payload: IError;
}

interface LoginReset {
  type: typeof LOGIN_RESET;
}

export interface Logout {
  type: typeof LOGOUT;
}

export type AuthActionsTypes =
  | Login
  | LoginSuccess
  | LoginError
  | LoginReset
  | Logout;