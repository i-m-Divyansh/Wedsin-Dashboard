import { actionTypes } from "./actionTypes";

let initialState = {
  showAlert: false,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SHOW_ALERT:
      return {
        ...state,
        showAlert: payload,
      };

    default:
      return state;
  }
};

export { appReducer };
