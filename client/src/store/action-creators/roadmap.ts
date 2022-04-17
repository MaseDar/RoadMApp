import { Dispatch } from "redux";
import axios from "axios";
import { RoadmapAction, RoadmapActionTypes } from "../../types/roadmap";

export const getRoadmaps = () => {
  return async (dispatch: Dispatch<RoadmapAction>) => {
    try {
      // Установка загрузки
      dispatch({ type: RoadmapActionTypes.LOADING_ROADMAP });
      // Запрос
      await axios.get("http://localhost:3000/roadmap").then((res) =>
        dispatch({
          type: RoadmapActionTypes.GET_ROADMAP,
          roadmap: res.data,
          success: true,
        })
      );
    } catch (e) {
      dispatch({
        type: RoadmapActionTypes.ERROR,
        error: "Ошибка: " + e,
        success: false,
      });
    }
  };
};

// export const fetchRoadMaps = (page = 1, limit = 10) => {
//     return async (dispatch: Dispatch<RoadMapAction>) => {
//         try {
//             dispatch({type: RoadMapActionTypes.FETCH_ROADMAPS})
//             const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
//                 params: {_page: page, _limit: limit}
//             })
//             setTimeout(() => {
//                 dispatch({type: RoadMapActionTypes.FETCH_ROADMAPS_SUCCESS, payload: response.data})
//             }, 500)
//         } catch (e) {
//             dispatch({
//                 type: RoadMapActionTypes.FETCH_ROADMAPS_ERROR,
//                 payload: 'Произошла ошибка при загрузке списка дел'
//             })
//         }
//     }
// }
// export function setRoadMapPage(page: number): RoadMapAction {
//     return {type: RoadMapActionTypes.SET_ROADMAP_PAGE, payload: page}
// }
