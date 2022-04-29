import { combineReducers } from "redux";
import { profileReducer } from "./profile.reducer";
import { roadmapReducer } from "./roadmap.reducer";
import { usersReducer } from "./user.reducer";

export const rootReducer = combineReducers({
  stateUser: usersReducer,
  stateProfile: profileReducer,
  stateRoadmap: roadmapReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
