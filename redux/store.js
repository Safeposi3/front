import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  getShipReducer,
  createShipReducer,
  updateShipReducer,
  deleteShipReducer,
  listShipsReducer,
} from "./reducer/ships";
import {
  getReservationReducer,
  createReservationReducer,
  updateReservationReducer,
  deleteReservationReducer,
} from "./reducer/reservations";
import {
  getBuoyReducer,
  createBuoyReducer,
  updateBuoyReducer,
  deleteBuoyReducer,
  listBuoysReducer,
} from "./reducer/buoys";

import { LoginReducer, RegisterReducer } from "./reducer/auth";
// ... add other reducers here

export default configureStore({
  reducer: {
    getShip: getShipReducer,
    createShip: createShipReducer,
    updateShip: updateShipReducer,
    deleteShip: deleteShipReducer,
    listShips: listShipsReducer,
    getReservation: getReservationReducer,
    createReservation: createReservationReducer,
    updateReservation: updateReservationReducer,
    deleteReservation: deleteReservationReducer,
    login: LoginReducer,
    register: RegisterReducer,
    getBuoy: getBuoyReducer,
    createBuoy: createBuoyReducer,
    updateBuoy: updateBuoyReducer,
    deleteBuoy: deleteBuoyReducer,
    listBuoys: listBuoysReducer,
  },
  middleware: [thunk],
});
