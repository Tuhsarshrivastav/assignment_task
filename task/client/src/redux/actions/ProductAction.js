import axios from "axios";

export const getAllProdcts = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_PRODUCTS_REQUEST" });
  try {
    const response = await axios.get("http://localhost:4000/api/getAllProduct");

    dispatch({ type: "GET_ALL_PRODUCTS_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "GET_ALL_PRODUCTS_FAIL", payload: err });
  }
};
