//? Axios
import Axios from "../../Axios/Axios";
import { isAuthenticated } from "../../Helpers/authHelper";
import { actionTypes } from "./actionTypes";

const getUsersAction = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_USERS_REQUEST });
  try {
    let { data } = await Axios.get("/api/v1/user/getAllUsers", {
      headers: { Authorization: `Bearer ${isAuthenticated().token}` },
    });
    console.log("data in getUsersAction", data.data);

    dispatch({ type: actionTypes.GET_USERS_SUCCESS, payload: data.data });
  } catch (error) {
    console.log("error in getUsersAction", error);

    dispatch({
      type: actionTypes.GET_USERS_ERROR,
      payload: error.response.data.message
        ? error.response.data.message
        : error,
    });
  }
};

export { getUsersAction };
