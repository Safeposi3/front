import * as u from "../../constants/auth";

export const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case u.GET_RESERVATIONS_REQUEST:
      return {
        loading: true,
      };
    case u.GET_RESERVATIONS_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.GET_RESERVATIONS_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const RegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case u.GET_RESERVATIONS_REQUEST:
      return {
        loading: true,
      };
    case u.GET_RESERVATIONS_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.GET_RESERVATIONS_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const LogoutReducer = (state = {}, action) => {
  switch (action.type) {
    case u.GET_RESERVATIONS_REQUEST:
      return {
        loading: true,
      };
    case u.GET_RESERVATIONS_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.GET_RESERVATIONS_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
