export interface UserState {
    id: number
    login: string
    password: string
    firstname: string
    secondname: string
    email: string
    error: null | string
    loading: boolean
}

export enum UserActionTypes {
    LOGIN = "LOGIN",
    SIGNUP = "SIGNUP",
    EXIT = "EXIT",
}

interface LoginUserAction {
    type: UserActionTypes.LOGIN,
    success: boolean 
    error: null | string
}

interface SignUpUserAction {
    type: UserActionTypes.SIGNUP,
    success: boolean 
    error: null | string
}

interface ExitUserAction {
    type: UserActionTypes.EXIT,
    success: boolean 
    error: null | string
}

export type UserAction = LoginUserAction | SignUpUserAction | ExitUserAction