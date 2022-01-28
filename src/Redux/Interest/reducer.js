import { actionTypes } from "./actionTypes";

let initialState = {
  interests: null,
};

const interestReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_INTEREST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_INTEREST_SUCCESS:
      return {
        ...state,
        loading: false,
        interests: payload,
      };

    case actionTypes.GET_INTEREST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export { interestReducer };
