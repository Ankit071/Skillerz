import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  userData: { name: string; age: number }[];
}
export interface User {
  name: string;
  age: number;
}

const initialState: CounterState = {
  value: 0,
  userData: [
    {
      name: "John Doe",
      age: 25,
    },
    {
      name: "Jenny William",
      age: 15,
    },
    {
      name: "Kyle Cook",
      age: 10,
    },
    {
      name: "Brad Traversey",
      age: 27,
    },
    {
      name: "Garry",
      age: 17,
    },
  ],
};

export const counterSlice = createSlice({
  name: "maincounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },

    addUser: (state, action: PayloadAction<User>) => {
      state.userData = [...state.userData, action.payload];
    },
  },
});

export const { increment, decrement, incrementByAmount, addUser } =
  counterSlice.actions;

export default counterSlice.reducer;
