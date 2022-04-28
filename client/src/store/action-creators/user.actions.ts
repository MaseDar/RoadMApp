import {
  LogInState,
  SignUpState,
  UserAction,
  UserActionTypes,
} from "../../types/user.type";
import { Dispatch } from "redux";
import axios from "axios";

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
      dispatch({
        type: UserActionTypes.LOGIN,
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
