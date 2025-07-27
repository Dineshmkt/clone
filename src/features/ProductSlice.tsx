
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction}  from "@reduxjs/toolkit";
type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  rating?: number;
  quantity: number;
 
};

type ProductState = {
  product: Product[];
};

const initialState: ProductState = {
  product: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    AddProduct: (state, action: PayloadAction<Omit<Product, "quantity">>) => {
      const newProduct = action.payload;
      const existing = state.product.find((p) => p.id === newProduct.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.product.push({ ...newProduct, quantity: 1 });
      }
    },

    increaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.product.find((p) => p.id === action.payload.id);
      if (item) item.quantity += 1;
    },

    decreaseQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.product.find((p) => p.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    removeQuantity: (state, action: PayloadAction<{ id: string }>) => {
      state.product = state.product.filter((p) => p.id !== action.payload.id);
    },
    
  },
});

export const { AddProduct, increaseQuantity, decreaseQuantity, removeQuantity } = ProductSlice.actions;
export default ProductSlice.reducer;
