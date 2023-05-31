import * as u from "../../constants/buoys";

export const getBuoyReducer = (state = {}, action) => {
  switch (action.type) {
    case u.GET_BUOY_REQUEST:
      return {
        loading: true,
      };
    case u.GET_BUOY_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.GET_BUOY_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const createBuoyReducer = (state = {}, action) => {
  switch (action.type) {
    case u.CREATE_BUOY_REQUEST:
      return {
        loading: true,
      };
    case u.CREATE_BUOY_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.CREATE_BUOY_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateBuoyReducer = (state = {}, action) => {
  switch (action.type) {
    case u.UPDATE_BUOY_REQUEST:
      return {
        loading: true,
      };
    case u.UPDATE_BUOY_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.UPDATE_BUOY_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteBuoyReducer = (state = {}, action) => {
  switch (action.type) {
    case u.DELETE_BUOY_REQUEST:
      return {
        loading: true,
      };
    case u.DELETE_BUOY_SUCCESS:
      return {
        data: { ...action.payload },
      };
    case u.DELETE_BUOY_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export const listBuoysReducer = (state = {}, action) => {
  switch (action.type) {
    case u.LIST_BUOYS_REQUEST:
      return {
        loading: true,
      };
    case u.LIST_BUOYS_SUCCESS:
      return {
        data: [...action.payload],
      };
    case u.LIST_BUOYS_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
