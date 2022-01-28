import { actionTypes } from "./actionTypes";

let initialState = {
  categories: null,
};

const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload,
      };

    case actionTypes.GET_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export { categoryReducer };
