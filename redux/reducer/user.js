import * as u from "../../constants/user";

export const userInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case u.GET_USER_INFO_REQUEST:
      return {
        loading: true,
      };
    case u.GET_USER_INFO_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.GET_USER_INFO_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case u.UPDATE_USER_INFO_REQUEST:
      return {
        loading: true,
      };
    case u.UPDATE_USER_INFO_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.UPDATE_USER_INFO_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
