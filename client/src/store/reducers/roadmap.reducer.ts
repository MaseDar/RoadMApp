import {
  RoadmapAction,
  RoadmapActionTypes,
  RoadmapConainer,
} from "../../types/roadmap";

const initialState: RoadmapConainer = {
  loading: true,
};

export const roadmapReducer = (
  state = initialState,
  action: RoadmapAction
): RoadmapConainer => {
  switch (action.type) {
    case RoadmapActionTypes.LOADING_ROADMAP:
      return { ...state, loading: true };
    case RoadmapActionTypes.GET_ROADMAP:
      return {
        ...state,
        loading: false,
        roadmap: action.roadmap,
      };
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
