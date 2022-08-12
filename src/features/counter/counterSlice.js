import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1000,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // (ajouter action) si on veut ajouter une action, ensuite action { type: "increment", payload: 1 }
      state.value += 10;
    },
    decrement: (state) => {
      state.value -= 10;
    },
    // ici le action permet de faire passer le payload (la donnée) // ? += ?
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
