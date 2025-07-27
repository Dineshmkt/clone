import { createSlice,  } from "@reduxjs/toolkit";
import type {PayloadAction}from "@reduxjs/toolkit"
type ProductState = {
  numberText: number;
};

const initialState: ProductState = {
  numberText: 0,
};

const NumberSlice = createSlice({
  name: "Number",
  initialState,
  reducers: {
    NumberValue: (state, action: PayloadAction<number>) => {
      state.numberText = action.payload;
    },
  },
});

export const { NumberValue } = NumberSlice.actions;
export default NumberSlice.reducer;

