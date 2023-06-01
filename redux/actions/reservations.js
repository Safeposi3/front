import axios from "axios";
import * as u from "../../constants/reservations";

const BASE_URL = "https://oceanbluereef.pythonanywhere.com/api";
export const getReservations = (id) => async (dispatch) => {
  try {
    dispatch({ type: u.GET_RESERVATION_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/reservations/${id}/`);

    dispatch({ type: u.GET_RESERVATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: u.GET_RESERVATION_FAILURE, payload: error });
  }
};

export const deleteReservation = (id) => async (dispatch) => {
  try {
    dispatch({ type: u.DELETE_RESERVATION_REQUEST });
    const { data } = await axios.delete(`${BASE_URL}/reservations/${id}/`);
    dispatch({ type: u.DELETE_RESERVATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: u.DELETE_RESERVATION_FAILURE, payload: error });
  }
};

export const createReservation = (data) => async (dispatch) => {
  try {
    dispatch({ type: u.CREATE_RESERVATION_REQUEST });
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    const { data: reservation } = await axios.post(
      `${BASE_URL}/reservations/`,
      data,
      { headers }
    );
    dispatch({ type: u.CREATE_RESERVATION_SUCCESS, payload: reservation });
  } catch (error) {
    dispatch({ type: u.CREATE_RESERVATION_FAILURE, payload: error });
  }
};

export const updateReservation = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: u.UPDATE_RESERVATION_REQUEST });
    const { data: reservation } = await axios.put(
      `${BASE_URL}/reservations/${id}/`,
      data
    );
    dispatch({ type: u.UPDATE_RESERVATION_SUCCESS, payload: reservation });
  } catch (error) {
    dispatch({ type: u.UPDATE_RESERVATION_FAILURE, payload: error });
  }
};

export const listReservations = () => async (dispatch) => {
  try {
    dispatch({ type: u.LIST_RESERVATION_REQUEST });
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    const { data } = await axios.get(`${BASE_URL}/reservations/`, { headers });
    dispatch({ type: u.LIST_RESERVATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: u.LIST_RESERVATION_FAILURE, payload: error });
  }
};
