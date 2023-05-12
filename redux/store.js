import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    // Add your reducers here
  },
  middleware: [thunk],
});
