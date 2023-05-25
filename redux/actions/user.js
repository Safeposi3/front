import axios from "axios";
import * as u from "../../constants/user";

const BASE_URL = "http://127.0.0.1:8000";

export const getUserInfo = () => async (dispatch) => {
  try {
    dispatch({ type: u.GET_USER_INFO_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/users/`);
    dispatch({ type: u.GET_USER_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: u.GET_USER_INFO_FAILURE, payload: error });
  }
};

export const updateUserInfo = (userData) => async (dispatch) => {
  try {
    dispatch({ type: u.UPDATE_USER_INFO_REQUEST });
    const { data } = await axios.put(`${BASE_URL}/users/`, userData);
    dispatch({ type: u.UPDATE_USER_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: u.UPDATE_USER_INFO_FAILURE, payload: error });
  }
};
