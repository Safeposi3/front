import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  getShipReducer,
  createShipReducer,
  updateShipReducer,
  deleteShipReducer,
} from "./reducer/ships";
import {
  getReservationReducer,
  createReservationReducer,
  updateReservationReducer,
  deleteReservationReducer,
} from "./reducer/reservations";
import { LoginReducer, RegisterReducer } from "./reducer/auth";
// ... add other reducers here

export default configureStore({
  reducer: {
    getShip: getShipReducer,
    createShip: createShipReducer,
    updateShip: updateShipReducer,
    deleteShip: deleteShipReducer,
    getReservation: getReservationReducer,
    createReservation: createReservationReducer,
    updateReservation: updateReservationReducer,
    deleteReservation: deleteReservationReducer,
    login: LoginReducer,
    register: RegisterReducer,

    // Add your reducers here
  },
  middleware: [thunk],
});
