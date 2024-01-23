import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartSlice = createAsyncThunk("cart/getCartSlice", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data, "data");
    return data;
    //dispatch(getCartSlice.fulfilled(data));
  } catch (err) {
    console.error(err);
  }
});

const initialState = {
  cartItems: [],
  amount: 0, // nothing but the quantity
  total: 0,
  isLoading: true,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state, action) => {
      state.cartItems = []
    },
    removeItems: (state, action) => {
      //const itemId =  payload;
      console.log(action.payload, "ACTION");
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increseItems: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseItems: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if (cartItem.amount > 0) {
        cartItem.amount = cartItem.amount - 1;
      }
      //filter out the items with amount > 0
      state.cartItems = state.cartItems.filter((item) => item.amount > 0);
    },
    calculateTotals: (state, action) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    reset: (state, action) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartSlice.fulfilled, (state, action) => {
        console.log(action.payload, "action payload");
        state.isLoading = false;
        state.cartItems = action.payload; // Assuming the response contains the cart items
      })
      .addCase(getCartSlice.rejected, (state, action) => {
        state.isLoading = false;
        console.log("Error fetching data", action.error);
      });
  },
});
export default cartSlice.reducer;
export const {
  removeItems,
  increseItems,
  decreaseItems,
  calculateTotals,
  reset,
  clearCart
} = cartSlice.actions;
