import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction} from "@reduxjs/toolkit"

type Quantity={
    TotalQuantity:number,
    TotalPrice:number,
}

const initialState:Quantity={
   TotalQuantity:0,
   TotalPrice:0
}

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    updateCheckoutValues: (
      state,
      action: PayloadAction<{ totalQuantity: number; totalPrice: number }>
    ) => {
      state.TotalQuantity = action.payload.totalQuantity;
      state.TotalPrice = action.payload.totalPrice;
    },
  },
});

export const { updateCheckoutValues }=checkoutSlice.actions
export default checkoutSlice.reducer