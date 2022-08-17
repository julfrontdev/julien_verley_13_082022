import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    // Non-async reducers:
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    }, // cf. TraversyMedia with async reducers = extraReducers: (builder)... .addCase...
  },
});

// ACTION CREATORS = are generated for each case reducer function
// Each action creator returns an action object with a type property (and a payload property)
export const { setUser, setToken, reset } = authSlice.actions;
export default authSlice.reducer;
