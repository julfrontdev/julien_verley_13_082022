import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/slices/counterSlice";
import authReducer from "../features/slices/authSlice";

const reducer = {
  counter: counterReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;
