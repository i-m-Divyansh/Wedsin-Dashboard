import { actionTypes } from "../Subscription/actionTypes";
import { isAuthenticated } from "../../Helpers/authHelper";

//? AXIOS
import Axios from "../../Axios/Axios";

const getSubscriptionsAction = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_SUBSCRIPTION_REQUEST });

    let { data } = await Axios.get("/api/v1/user/get/subscription/plans", {
      headers: { Authorization: `Bearer ${isAuthenticated().token} ` },
    });
    console.log("data in getSubscriptionsAction", data);

    dispatch({
      type: actionTypes.GET_SUBSCRIPTION_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log("err in getSubscriptionsAction", err);

    dispatch({
      type: actionTypes.GET_SUBSCRIPTION_ERROR,
      payload: err.response.data.message ? err.response.data.message : err,
    });
  }
};

export { getSubscriptionsAction };
