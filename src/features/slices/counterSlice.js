import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    // Add non-async reducers here
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    // ici le action permet de faire passer le payload, la value que l'on veut, pex 33
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
  extraReducers: {
    // Add async reducers here
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
