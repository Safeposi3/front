import axios from "axios";
import * as a from "../../constants/auth";

const BASE_URL = "http://127.0.0.1:8000";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: a.LOGIN_REQUEST });
    const payload = {
      username: username,
      password: password,
    };

    const { data } = await axios.post(`${BASE_URL}/login/`, payload);
    dispatch({ type: a.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: a.LOGIN_FAILURE, payload: error });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: a.LOGOUT_REQUEST });
    const { data } = await axios.post(`${BASE_URL}/logout/`);

    rdispatch({ type: a.LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: a.LOGOUT_FAILURE, payload: error });
  }
};

export const register = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: a.REGISTER_REQUEST });
    const payload = {
      username: username,
      password: password,
    };

    const { data } = await axios.post(`${BASE_URL}/register/`, payload);
    dispatch({ type: a.REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: a.REGISTER_FAILURE, payload: error });
  }
};
