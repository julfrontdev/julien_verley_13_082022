import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import logReducer from "../features/log/logSlice";

// Ajouter des slices avec des reducers (addTasks, deleteTasks etc.) cf. Lior Chamla 34"20'

// export default configureStore({
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    log: logReducer,
  },
});
