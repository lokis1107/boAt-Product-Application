import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    cart: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeCart: (state, action) => {
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn("Items not avilable in cart");
      }
      state.cart = newCart;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCart, removeCart } = counterSlice.actions;

export const selectItemById = (state, id) =>
  state.cart.cart.filter((item) => item.id === id);

export default counterSlice.reducer;
