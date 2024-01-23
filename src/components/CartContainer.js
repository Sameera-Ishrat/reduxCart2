import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import {reset} from "../features/cart/cartSlice";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
const dispatch = useDispatch();

  const { cartItems, amount, total } = useSelector((state) => state.cart);
  console.log(cartItems, "cartitems from cart container");
  if (amount < 1) {
    return (
      <section>
        <header>
          <h2>Your Cart  <span>is empty</span></h2>
         
        </header>
      </section>
    );
  }
  return (
    <>
      <section>
        <header>
          <h2>Your cart</h2>
        </header>
      </section>
      <div className="cart">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total : 
          </h4>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(openModal())} >clear cart</button>
      </footer>
    </>
  );
};

export default CartContainer;
