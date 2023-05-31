import axios from "axios";
import * as u from "../../constants/ships";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getShip = (id) => async (dispatch) => {
  try {
    dispatch({ type: u.GET_SHIP_REQUEST });
    const { data } = await axios.get(`${BASE_URL}/ships/${id}/`);

    dispatch({ type: u.GET_SHIP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: u.GET_SHIP_FAILURE, payload: error });
  }
};

export const createShip = (shipData) => async (dispatch) => {
  // shipData should contain necessary data to create a ship
  try {
    dispatch({ type: u.CREATE_SHIP_REQUEST });
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    const { data } = await axios.post(`${BASE_URL}/ships/`, shipData);

    dispatch({ type: u.CREATE_SHIP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: u.CREATE_SHIP_FAILURE, payload: error });
  }
};

export const updateShip = (id, shipData) => async (dispatch) => {
  // shipData should contain necessary data to update a ship
  try {
    dispatch({ type: u.UPDATE_SHIP_REQUEST });

    const { data } = await axios.put(`${BASE_URL}/ships/${id}/`, shipData);
    dispatch({ type: u.UPDATE_SHIP_SUCCESS, payload: data });
  } catch {
    dispatch({ type: u.UPDATE_SHIP_FAILURE, payload: error });
  }
};

export const deleteShip = (id) => async (dispatch) => {
  try {
    dispatch({ type: u.DELETE_SHIP_REQUEST });
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };

    const { data } = await axios.delete(`${BASE_URL}/ships/${id}/`);
    dispatch({ type: u.DELETE_SHIP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: u.DELETE_SHIP_FAILURE, payload: error });
  }
};

export const listShips = () => async (dispatch) => {
  try {
    dispatch({ type: u.LIST_SHIPS_REQUEST });
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    };
    const { data } = await axios.get(`${BASE_URL}/ships/`, { headers });
    dispatch({ type: u.LIST_SHIPS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: u.LIST_SHIPS_FAILURE, payload: error });
  }
};
