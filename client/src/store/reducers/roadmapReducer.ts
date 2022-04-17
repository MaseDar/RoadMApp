import {
  RoadmapAction,
  RoadmapActionTypes,
  RoadmapsContainer,
} from "../../types/roadmap";

const initialState: RoadmapsContainer = {
  roadmaps: {
    active_roadmaps: [],
    sucessed_roadmaps: [],
    created_roadmaps: [],
    favorited_roadmaps: [],
  },
  loading: false,
};

export const roadmapReducer = (
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
        roadmaps: { active_roadmaps: [action.roadmap] },
      };
    case RoadmapActionTypes.GET_USER_ROADMAPS:
      return { ...state, loading: false, roadmaps: action.roadmaps };
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
