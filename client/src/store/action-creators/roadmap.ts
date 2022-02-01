import {Dispatch} from "redux";
import axios from "axios";
import {RoadMapAction, RoadMapActionTypes} from "../../types/roadmap";

export const getRoadmaps = () => {
    return async (dispatch: Dispatch<RoadMapAction>) => {
        try {
            dispatch({type: RoadMapActionTypes.LOADING_ROADMAPS})
            const response = await axios.get("http://localhost:5000", {
                params: {
                    type: "all"
                }
            })
            setTimeout(() => {
                dispatch({
                    type: RoadMapActionTypes.GET_USER_ROADMAPS, 
                    roadmaps: response.data,
                    success: true
                })
            }, 500)
        } catch (e) {
            dispatch({
                type: RoadMapActionTypes.ERROR, 
                error: "Ошибка: " + e
            })
        }
    }
}


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