import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isSuccess: false,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // action.payload = user object
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      state.isSuccess = true;
    },
  },
});

export const { setUser, updateUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
