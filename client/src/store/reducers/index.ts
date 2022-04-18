import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./userReducer";

export const rootReducer = combineReducers({
  stateUser: usersReducer,
  stateProfile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
