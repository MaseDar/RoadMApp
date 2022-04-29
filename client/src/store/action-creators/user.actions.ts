import {
  LogInState,
  SignUpState,
  UserAction,
  UserActionTypes,
  UserState,
} from "../../types/user.type";
import { Dispatch } from "redux";
import axios from "axios";
import { token } from "./config";

export const getTestUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.LOADING });
      // Запрос
      let response = await axios.get(`http://localhost:3000/user`);
      dispatch({
        type: UserActionTypes.GET_TEST_USER,
        user: response.data,
        success: true,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.ERROR,
        error: "Ошибка: " + e,
        success: false,
      });
    }
  };
};

// TODO: Убрать password из ответа и сделать редиркет если пользователя нет или заблочить
export const getUserByName = (username?: string | null) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.LOADING });
      // Запрос
      let response = await axios.get(
        `http://localhost:3000/api/v1/profile/${username}`
      );
      console.log(response.data);
      dispatch({
        type: UserActionTypes.GET_TEST_USER,
        user: response.data,
        success: true,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.ERROR,
        error: "Ошибка: " + e,
        success: false,
      });
    }
  };
};

export const postSignUp = (signup: SignUpState) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      // Установка загрузки
      dispatch({ type: UserActionTypes.LOADING });
      // Запрос
      const response = await axios.post(
        `http://localhost:3000/api/v1/auth/login`,
        {
          signup,
        }
      );
      if (response.data.token)
        localStorage.setItem("token_access", response.data.token);
      dispatch({
        type: UserActionTypes.SIGNUP,
        token: response.data.token,
        success: true,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.ERROR,
        error: "Ошибка: " + e,
        success: false,
      });
    }
  };
};

// TODO: Переписать запросики с добавлением константы /api/v1/
export const postLogIn = (login: LogInState) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      // Установка загрузки
      dispatch({ type: UserActionTypes.LOADING });
      // Запрос
      const response = await axios.post(
        `http://localhost:3000/api/v1/auth/login`,
        {
          username: login.username,
          password: login.password,
        }
      );
      console.log(response.data);
      // TODO: Подумать как сделать с изменением профиля пользователя, а не записывать в локал данные
      if (response.data.token) {
        localStorage.setItem("token_access", response.data.token);
        localStorage.setItem("username", login.username);
      }
      dispatch({
        type: UserActionTypes.LOGIN,
        token: response.data.token,
        success: true,
        user: response.data.user,
      });
    } catch (e) {
      dispatch({
        type: UserActionTypes.ERROR,
        error: "Ошибка: " + e,
        success: false,
      });
    }
  };
};
// TODO: Сделать норм, а не просто костыль для проверки
export const postChangeUser = (firstname: string, lastname: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    // Установка загрузки
    dispatch({ type: UserActionTypes.LOADING });
    // Запрос
    await axios
      .post(
        `http://localhost:3000/api/v1/profile/change`,
        {
          firstname: firstname,
          lastname: lastname,
        },
        token
      )
      .then((res) =>
        dispatch({
          type: UserActionTypes.CHANGE_PROFILE,
          user: res.data,
        })
      )
      .catch((e) =>
        dispatch({
          type: UserActionTypes.ERROR,
          error: "Ошибка: " + e,
          success: false,
        })
      );
  };
};
