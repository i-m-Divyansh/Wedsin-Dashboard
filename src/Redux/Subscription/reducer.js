import { actionTypes } from "./actionTypes";

let initialState = {
  subscriptions: null,
};

//? subscriptionReducer
const subscriptionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.GET_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        subscriptions: payload,
      };

    case actionTypes.GET_SUBSCRIPTION_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export { subscriptionReducer };
