export interface LogInState {
  username: string;
  password: string;
}

export interface SignUpState extends LogInState {
  email: string;
}

export interface UserState extends SignUpState {
  id: number;
  // firstname: string
  // secondname: string
  // email: string
  // error: null | string
  // loading: boolean
}

export interface UserContainer {
  user: UserState;
  loading: boolean;
  error?: string;
  token: string;
}

export enum UserActionTypes {
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
  GET_TEST_USER = "GET_TEST_USER",
  EXIT = "EXIT",
  ERROR = "ERROR",
  LOADING = "LOADING",
}

interface GetTestUserAction {
  type: UserActionTypes.GET_TEST_USER;
  user: UserState;
  success: boolean;
  error?: string;
}

interface UserLoading {
  type: UserActionTypes.LOADING;
}

interface LoginUserAction {
  type: UserActionTypes.LOGIN;
  token: string;
  success: boolean;
  error?: string;
}

interface SignUpUserAction {
  type: UserActionTypes.SIGNUP;
  success: boolean;
  error?: string;
}

interface ExitUserAction {
  type: UserActionTypes.EXIT;
  success: boolean;
  error?: string;
}

interface ErrorUserAction {
  type: UserActionTypes.ERROR;
  success: boolean;
  error?: string;
}

export type UserAction =
  | LoginUserAction
  | SignUpUserAction
  | ExitUserAction
  | GetTestUserAction
  | ErrorUserAction
  | UserLoading;
