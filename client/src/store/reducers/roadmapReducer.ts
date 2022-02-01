import {RoadMapAction, RoadMapActionTypes, RoadMapState} from "../../types/roadmap";

const initialState: RoadMapState = {
    todos: [],
    page: 1,
    error: null,
    limit: 10,
    loading: false
}

export const roadmapReducer = (state = initialState, action: RoadMapAction): RoadMapState => {
    switch (action.type) {
        case RoadMapActionTypes.FETCH_ROADMAPS:
            return {...state, loading: true}
        case RoadMapActionTypes.FETCH_ROADMAPS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case RoadMapActionTypes.FETCH_ROADMAPS_ERROR:
            return {...state, loading: false, error: action.payload}
        case RoadMapActionTypes.SET_ROADMAP_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}