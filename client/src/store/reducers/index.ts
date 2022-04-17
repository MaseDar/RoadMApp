import { combineReducers } from "redux";
// import {usersReducer} from "./usersReducer";
import { roadmapReducer } from "./roadmapReducer";

export const rootReducer = combineReducers({
  // users: usersReducer,
  roadmap: roadmapReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
