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
