import * as u from "../../constants/auth";

export const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case u.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case u.LOGIN_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.LOGIN_FAILURE:
      return {
        error: action.payload,
      };
    case u.LOGIN_RESET:
      return {};
    default:
      return state;
  }
};

export const RegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case u.REGISTER_REQUEST:
      return {
        loading: true,
      };
    case u.REGISTER_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.REGISTER_FAILURE:
      return {
        error: action.payload,
      };
    case u.REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export const LogoutReducer = (state = {}, action) => {
  switch (action.type) {
    case u.LOGOUT_REQUEST:
      return {
        loading: true,
      };
    case u.LOGOUT_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.LOGOUT_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
