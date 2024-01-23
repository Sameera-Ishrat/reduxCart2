import { configureStore } from "@reduxjs/toolkit";
import {render,screen} from "@testing-library/react";
import { Provider } from "react-redux";
import CartContainer from "./CartContainer";
import cartReducer from "../features/cart/cartSlice";


const mockStore = configureStore({
  reducer : {
    cart : cartReducer
  }  // Pass the reducer to configureStore
});
describe("Cart Component" , () => {
    it('renders empty cart when the amount is less than 1' , () => {
        const store = mockStore({cart : {amount: 0}});
        render(
            <Provider store={store}>
                <CartContainer/>
            </Provider>
        )
        const textElement = screen.getByText('Your cart is empty');
        expect(textElement).toBeInTheDocument()
    })
})
