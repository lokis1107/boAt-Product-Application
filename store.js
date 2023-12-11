import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./redux/CartSlice";
import ProductSlice from "./redux/ProductSlice";

export default configureStore({
  reducer: {
    cart: CartSlice,
    product: ProductSlice,
  },
});
