import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReucer from "./features/modal/modalSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal : modalReucer
  },
});
export default store;
