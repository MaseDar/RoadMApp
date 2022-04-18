import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { roadmapReducer } from "./roadmapReducer";
import { usersReducer } from "./userReducer";

export const rootReducer = combineReducers({
  stateUser: usersReducer,
  stateProfile: profileReducer,
  stateRoadmap: roadmapReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
