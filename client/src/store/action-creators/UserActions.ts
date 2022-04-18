import { UserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import axios from "axios";

export const getTestUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.LOADING });
      // Запрос
      let response = await axios.get(`http://localhost:3000/user`);
      console.log(response);
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

export const fetchUsers = () => {
  // return async (dispatch: Dispatch<UserAction>) => {
  //     try {
  //         dispatch({type: UserActionTypes.FETCH_USERS})
  //         const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  //         setTimeout(() => {
  //             dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
  //         }, 500)
  //     } catch (e) {
  //         dispatch({
  //             type: UserActionTypes.FETCH_USERS_ERROR,
  //             payload: 'Произошла ошибка при загрузке пользователей'
  //         })
  //     }
  // }
};
