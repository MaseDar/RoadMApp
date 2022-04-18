import { Dispatch } from "redux";
import axios from "axios";

import { UserState } from "../../types/user";
import { ProfileAction, ProfileActionTypes } from "../../types/profile";

export const getUserRoadmaps = (user: UserState) => {
  return async (dispatch: Dispatch<ProfileAction>) => {
    try {
      // Установка загрузки
      dispatch({ type: ProfileActionTypes.LOADING_PROFILE });
      // Запрос
      const response = await axios.get(
        `http://localhost:3000/profile/${user.login}/roadmaps/`
      );
      dispatch({
        type: ProfileActionTypes.GET_USER_ROADMAPS,
        roadmaps: response.data,
        success: true,
      });
    } catch (e) {
      dispatch({
        type: ProfileActionTypes.ERROR,
        error: "Ошибка: " + e,
        success: false,
      });
    }
  };
};
