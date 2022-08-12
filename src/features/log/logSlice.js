import { createSlice } from "@reduxjs/toolkit";

// const initialState = { value: undefined };

export const logSlice = createSlice({
  name: "log",
  initialState: { value: undefined },
  reducers: {
    addEmail: (state, action) => {
      // ou // addEmail: (state, {payload}) => {
      // { type: "log/addEmail", payload: "" }
      //   const addedEmail = {
      //     text: action.payload,
      //   };
      //   state.push(addedEmail);
      state.value = action.payload; // state.value = payload;
      //   state.value.push(action.payload); // state.value = payload;
    },
    addPassword: (state, action) => {},
    deleteEmail: (state, action) => {
      // { type: "log/deleteEmail", payload: "" }
      const deletedEmail = {
        text: "",
      };
      state.push(deletedEmail);
    },
    deletePassword: (state, action) => {},
  },
});

export const { addEmail, addPassword, deletedEmail, deletePassword } =
  logSlice.actions;

export default logSlice.reducer;
