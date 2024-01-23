import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartSlice } from "./features/cart/cartSlice";
import CartContainer from "./components/CartContainer";
import { openModal } from "./features/modal/modalSlice";import Modal from "./components/Modal";


function App() {
  const dispatch = useDispatch();

  const {isOpen} = useSelector((state) => state.modal)

  const { cartItems, isLoading } = useSelector((state) => state.cart);

  //useEffect for the total

  useEffect(() => {
    dispatch(calculateTotals());
  }, [dispatch, cartItems]);

  useEffect(() => {
    dispatch(getCartSlice());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
    {isOpen && <Modal />}
    </div>
  );
}

export default App;
