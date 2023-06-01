import * as u from "../../constants/reservations";

export const getReservationReducer = (state = {}, action) => {
  switch (action.type) {
    case u.GET_RESERVATION_REQUEST:
      return {
        loading: true,
      };
    case u.GET_RESERVATION_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.GET_RESERVATION_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const createReservationReducer = (state = {}, action) => {
  switch (action.type) {
    case u.CREATE_RESERVATION_REQUEST:
      return {
        loading: true,
      };
    case u.CREATE_RESERVATION_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.CREATE_RESERVATION_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateReservationReducer = (state = {}, action) => {
  switch (action.type) {
    case u.UPDATE_RESERVATION_REQUEST:
      return {
        loading: true,
      };
    case u.UPDATE_RESERVATION_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.UPDATE_RESERVATION_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteReservationReducer = (state = {}, action) => {
  switch (action.type) {
    case u.DELETE_RESERVATION_REQUEST:
      return {
        loading: true,
      };
    case u.DELETE_RESERVATION_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.DELETE_RESERVATION_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const listReservationsReducer = (state = {}, action) => {
  switch (action.type) {
    case u.LIST_RESERVATION_REQUEST:
      return {
        loading: true,
      };
    case u.LIST_RESERVATION_SUCCESS:
      return {
        data: [...action.payload],
      };
    case u.LIST_RESERVATION_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
