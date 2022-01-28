import { actionTypes } from "./actionTypes";

//? Axios
import Axios from "../../Axios/Axios";

const getCategoriesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_CATEGORIES_REQUEST,
    });

    let { data } = await Axios.get("/api/v1/admin/get/categories");

    console.log("data in getCategoriesAction", data);

    dispatch({
      type: actionTypes.GET_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log("err in getCategoriesAction", err);

    dispatch({
      type: actionTypes.GET_CATEGORIES_ERROR,
      payload: err.response.data.message ? err.response.data.message : err,
    });
  }
};

export { getCategoriesAction };
