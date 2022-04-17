import {
  RoadmapAction,
  RoadmapActionTypes,
  RoadmapContainer,
} from "../../types/roadmap";

const initialState: RoadmapContainer = {
  roadmap: {
    user_id: 1,
    roadmap_id: 1,
    name: "Testing",
    short_description: "short",
    full_description: "full",
    background_url: "back_url",
    avatar_img: "av_url",
    percent: 0,
  },
  loading: false,
};

export const roadmapReducer = (
  state = initialState,
  action: RoadmapAction
): RoadmapContainer => {
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
