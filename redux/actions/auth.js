import axios from "axios";
import * as a from "../../constants/auth";
const BASE_URL = "https://oceanbluereef.pythonanywhere.com/api";
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: a.LOGIN_REQUEST });
    const payload = {
      email: email,
      password: password,
    };

    const { data } = await axios.post(`${BASE_URL}/login/`, payload);
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("user", JSON.stringify(data.user_info));
    dispatch({ type: a.LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: a.LOGIN_FAILURE, payload: error?.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: a.LOGOUT_REQUEST });
    const { data } = await axios.post(`${BASE_URL}/logout/`);

    dispatch({ type: a.LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: a.LOGOUT_FAILURE, payload: error });
  }
};

export const register = (form) => async (dispatch) => {
  try {
    dispatch({ type: a.REGISTER_REQUEST });
    const payload = {
      email: form.email,
      password: form.password,
      first_name: form.fullName,
      last_name: form.fullName,
      birthdate: form.birthdate,
      phonenumber: form.phoneNumber,
      country: form.country,
      address: form.address,
      postal_code: form.postalCode,
      city: form.city,
      dni: form.dni,
    };
    const { data } = await axios.post(`${BASE_URL}/register/`, payload);
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("user", JSON.stringify(data.user_info));
    dispatch({ type: a.REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: a.REGISTER_FAILURE, payload: error });
  }
};
