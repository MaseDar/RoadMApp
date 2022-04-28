import {
  UserAction,
  UserActionTypes,
  UserContainer,
  UserState,
} from "../../types/user.type";

const initialState: UserContainer = {
  user: {
    id: 1,
    username: "denzalupaslona",
    email: "uproad@uproad.ru",
    password: "default",
  },
  token: "a",
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
    case UserActionTypes.LOGIN:
      return { ...state, loading: false, token: action.token };
    case UserActionTypes.ERROR:
      return {
        loading: false,
        error: action.error,
        user: state.user,
        token: state.token,
      };
    default:
      return state;
  }
};
