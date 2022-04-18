import {
  UserAction,
  UserActionTypes,
  UserContainer,
  UserState,
} from "../../types/user";

const initialState: UserContainer = {
  user: { id: 1, login: "denzalupaslona" },
  loading: false,
};

export const usersReducer = (
  state = initialState,
  action: UserAction
): UserContainer => {
  switch (action.type) {
    case UserActionTypes.LOADING:
      return { ...state, loading: true };
    case UserActionTypes.GET_TEST_USER:
      return { ...state, loading: false, user: action.user };
    case UserActionTypes.ERROR:
      return {
        loading: false,
        error: action.error,
        user: state.user,
      };
    default:
      return state;
  }
};
