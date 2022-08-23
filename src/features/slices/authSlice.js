import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService"; // TM

// Get user from localStorage // TM
//const user = JSON.parse(localStorage.getItem("user"));

// Login user
// export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
//   try {
//     return await authService.login(user);
//   } catch (error) {
//     console.log("Erreur login");
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString();
//     return thunkAPI.rejectWithValue(message);
//   }
// });

////////////////////////////////
// Logout user
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});
////////////////////////////////

const initialState = {
  // user: user ? user : null, // TM
  user: null, // TM
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  token: null, //
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Non-async reducers:
    ////////////////////////////////
    // Pas avec TM, pourquoi ?
    setUser: (state, action) => {
      state.user = action.payload; // action.payload is the user object
      // return state
    },
    // Pas avec TM, pourquoi ?
    setToken: (state, action) => {
      state.token = action.payload;
      state.isSuccess = true;
    },
    ////////////////////////////////
    // TM
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  // TM
  extraReducers: (builder) => {
    builder
      // login, cf. f° login above
      // .addCase(login.pending, (state) => {
      //   state.isLoading = true; // fonctionne
      // })
      // .addCase(login.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.isSuccess = true; // ne fonctionne pas
      //   state.user = action.payload;
      // })
      // .addCase(login.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = true; // ne fonctionne pas
      //   state.message = action.payload;
      //   state.user = null;
      // })
      //login, cf. f° logout above
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

// ACTION CREATORS = are generated for each case reducer function
// Each action creator returns an action object with a type property (and a payload property)
export const { setUser, setToken, reset } = authSlice.actions;
export default authSlice.reducer;
