import axios from "axios";
import * as u from "../../constants/user";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const getUserInfo = () => async (dispatch) => {
  try {
    dispatch({ type: u.GET_USER_INFO_REQUEST });
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    const { data } = await axios.get(`${BASE_URL}/users/`, { headers });
    dispatch({ type: u.GET_USER_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: u.GET_USER_INFO_FAILURE, payload: error });
  }
};

export const updateUserInfo = (userData) => async (dispatch) => {
  try {
    dispatch({ type: u.UPDATE_USER_INFO_REQUEST });
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    const { data } = await axios.put(`${BASE_URL}/users/`, userData, {
      headers,
    });
    dispatch({ type: u.UPDATE_USER_INFO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: u.UPDATE_USER_INFO_FAILURE, payload: error });
  }
};
