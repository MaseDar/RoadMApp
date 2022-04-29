import {
  ProfileAction,
  ProfileActionTypes,
  ProfileContainer,
} from "../../types/profile";

const initialState: ProfileContainer = {
  loading: true,
};

export const profileReducer = (
  state = initialState,
  action: ProfileAction
): ProfileContainer => {
  switch (action.type) {
    case ProfileActionTypes.LOADING_PROFILE:
      return { ...state, loading: true };
    case ProfileActionTypes.GET_USER_ROADMAPS:
      return {
        ...state,
        loading: false,
        profile_roadmaps: action.roadmaps,
      };
    case ProfileActionTypes.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

// switch (action.type) {
//   case ProfileActionTypes.LOADING_ROADMAP:
//     return { ...state, loading: true };
//   case RoadmapActionTypes.GET_ROADMAP:
//     return {
//       ...state,
//       loading: false,
//       single_roadmap: action.roadmap,
//     };
//   case RoadmapActionTypes.GET_USER_ROADMAPS:
//     return { ...state, loading: false, profile_roadmaps: action.roadmaps };
//   case RoadmapActionTypes.ERROR:
//     return {
//       ...state,
//       loading: false,
//       error: action.error,
//     };
//   default:
//     return state;
// }
