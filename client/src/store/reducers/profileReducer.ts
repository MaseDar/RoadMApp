import {
  RoadmapAction,
  RoadmapActionTypes,
  RoadmapsContainer,
} from "../../types/roadmap";

const initialState: RoadmapsContainer = {
  loading: false,
};

export const profileReducer = (
  state = initialState,
  action: RoadmapAction
): RoadmapsContainer => {
  switch (action.type) {
    case RoadmapActionTypes.LOADING_ROADMAP:
      return { ...state, loading: true };
    case RoadmapActionTypes.GET_ROADMAP:
      return {
        ...state,
        loading: false,
        single_roadmap: action.roadmap,
      };
    case RoadmapActionTypes.GET_USER_ROADMAPS:
      return { ...state, loading: false, profile_roadmaps: action.roadmaps };
    case RoadmapActionTypes.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
