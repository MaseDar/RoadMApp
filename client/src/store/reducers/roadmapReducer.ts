import {RoadMapAction, RoadMapActionTypes, RoadMapState} from "../../types/roadmap";

const initialState: RoadMapState = {
    roadmaps: [],
    error: null,
    limit: 10,
    loading: false
}

export const roadmapReducer = (state = initialState, action: RoadMapAction): RoadMapState => {
    switch (action.type) {
        case RoadMapActionTypes.LOADING_ROADMAPS:
            return {...state, loading: true}
        case RoadMapActionTypes.GET_USER_ROADMAPS:
            return {...state, loading: false, roadmaps: action.roadmaps}
        case RoadMapActionTypes.ERROR:
            return {...state, loading: false, error: action.error}
        default:
            return state
    }
}