import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../utils/inerfaces";

const initialState = {
  products: [],
  cart: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      const { payload } = action;
      state.products = payload;
    },

    setCart: (state: any, action) => {
      if (action.payload.type === "add") {
        const payload: Product = action.payload.items;

        state.cart.push(payload);
      } else {
        const products = state.cart.filter(
          (item: Product) => item.id !== action.payload.id
        );
        state.cart = products;
      }
    },
  },
});

export const { setProducts, setCart } = appSlice.actions;
export default appSlice.reducer;
