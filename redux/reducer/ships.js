import * as u from "../../constants/ships";

export const getShipReducer = (state = {}, action) => {
  switch (action.type) {
    case u.GET_SHIP_REQUEST:
      return {
        loading: true,
      };
    case u.GET_SHIP_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.GET_SHIP_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const createShipReducer = (state = {}, action) => {
  switch (action.type) {
    case u.CREATE_SHIP_REQUEST:
      return {
        loading: true,
      };
    case u.CREATE_SHIP_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.CREATE_SHIP_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateShipReducer = (state = {}, action) => {
  switch (action.type) {
    case u.UPDATE_SHIP_REQUEST:
      return {
        loading: true,
      };
    case u.UPDATE_SHIP_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.UPDATE_SHIP_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteShipReducer = (state = {}, action) => {
  switch (action.type) {
    case u.DELETE_SHIP_REQUEST:
      return {
        loading: true,
      };
    case u.DELETE_SHIP_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.DELETE_SHIP_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const listShipsReducer = (state = {}, action) => {
  switch (action.type) {
    case u.LIST_SHIPS_REQUEST:
      return {
        loading: true,
      };
    case u.LIST_SHIPS_SUCCESS:
      return {
        data: [...action.payload],
      };
    case u.LIST_SHIPS_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
