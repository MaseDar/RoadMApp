export interface LogInState {
  username: string;
  password: string;
}

export interface SignUpState extends LogInState {
  email: string;
  gender?: "male" | "female";
}

export interface UserState extends SignUpState {
  id: number;
  firstName?: string;
  lastName?: string;
  backgroundUrl?: string;
  avatarUrl?: string;
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
  GET_USER = "GET_USER",
  EXIT = "EXIT",
  ERROR = "ERROR",
  LOADING = "LOADING",
  CHANGE_PROFILE = "UserActionTypes",
}

interface GetTestUserAction {
  type: UserActionTypes.GET_TEST_USER;
  user: UserState;
  success: boolean;
  error?: string;
}

interface GetUserAction {
  type: UserActionTypes.GET_USER;
  user: UserState;
  error?: string;
}

interface ChangeProfileAction {
  type: UserActionTypes.CHANGE_PROFILE;
  user: UserState;
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
  user: UserState;
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
  | GetUserAction
  | ChangeProfileAction
  | ErrorUserAction
  | UserLoading;
