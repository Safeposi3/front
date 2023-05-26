import axios from "axios";
import * as u from "../../constants/reservations";

const BASE_URL = "http://127.0.0.1:8000/api";

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
    const { data: reservation } = await axios.post(
      `${BASE_URL}/reservations/`,
      data
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
