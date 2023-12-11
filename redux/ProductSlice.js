import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    id: null,
    image: null,
    name: null,
    description: null,
    product: null,
  },
  reducers: {
    setProduct: (state, action) => {
      state.cart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProduct } = productSlice.actions;

export const selectProduct = (state) => state.product.product;

export default productSlice.reducer;
