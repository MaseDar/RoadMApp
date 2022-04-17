import { combineReducers } from "redux";
import { roadmapReducer } from "./roadmapReducer";
import { usersReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: usersReducer,
  stateRoadmaps: roadmapReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
