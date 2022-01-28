import { actionTypes } from "./actionTypes";
import Axios from "../../Axios/Axios";

const getInterestsAction = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_INTEREST_REQUEST });

    let { data } = await Axios.get("/api/v1/admin/get/interests");
    console.log("data in getInterestsAction", data);

    dispatch({
      type: actionTypes.GET_INTEREST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log("err in getInterestsAction", err);

    dispatch({
      type: actionTypes.GET_INTEREST_ERROR,
      payload: err.response.data.message ? err.response.data.message : err,
    });
  }
};

export { getInterestsAction };
