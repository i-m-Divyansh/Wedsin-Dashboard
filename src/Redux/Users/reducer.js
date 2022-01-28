import { actionTypes } from "./actionTypes";

let initialState = {
  users: null,
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
      };

    case actionTypes.GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export { usersReducer };
