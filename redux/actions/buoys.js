import axios from "axios";
import * as a from "../../constants/buoys";
const BASE_URL = "http://127.0.0.1:8000/api";

export const listBuoys = () => async (dispatch) => {
  try {
    dispatch({ type: a.LIST_BUOYS_REQUEST });
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    const { data } = await axios.get(`${BASE_URL}/buoys/`, { headers });
    dispatch({ type: a.LIST_BUOYS_SUCCESS, payload: data });
  } catch {
    dispatch({ type: a.LIST_BUOYS_FAILURE });
  }
};

export const getBuoy = (id) => async (dispatch) => {
  try {
    dispatch({ type: a.GET_BUOY_REQUEST });
    const headers = {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    const { data } = await axios.get(`${BASE_URL}/buoys/${id}/`, { headers });
    dispatch({ type: a.GET_BUOY_SUCCESS, payload: data });
  } catch {
    dispatch({ type: a.GET_BUOY_FAILURE });
  }
};

export const deleteBuoy = (id) => async (dispatch) => {
  try {
    dispatch({ type: a.DELETE_BUOY_REQUEST });
    const { data } = await axios.delete(`${BASE_URL}/buoys/${id}/`);
    dispatch({ type: a.DELETE_BUOY_SUCCESS, payload: data });
  } catch {
    dispatch({ type: a.DELETE_BUOY_FAILURE });
  }
};

export const updateBuoy = (buoy) => async (dispatch) => {
  try {
    dispatch({ type: a.UPDATE_BUOY_REQUEST });
    const { data } = await axios.put(`${BASE_URL}/buoys/${buoy.id}/`, buoy);
    dispatch({ type: a.UPDATE_BUOY_SUCCESS, payload: data });
  } catch {
    dispatch({ type: a.UPDATE_BUOY_FAILURE });
  }
};
