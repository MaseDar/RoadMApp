import { combineReducers } from "redux";
// import {usersReducer} from "./usersReducer";
import { roadmapReducer } from "./roadmapReducer";

export const rootReducer = combineReducers({
  // users: usersReducer,
  stateRoadmap: roadmapReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
