import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal-container" onClick={() => dispatch(closeModal())}>
      <div className="modal">
        <h3>Are you sure you wan to clear the cart?</h3>
        <button
          className="btn-modal"
          onClick={() => dispatch(clearCart(), closeModal())}
        >
          Confirm
        </button>
        <button className="btn-modal" onClick={() => dispatch(closeModal())}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
