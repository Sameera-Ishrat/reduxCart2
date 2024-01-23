import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import {
  removeItems,
  increseItems,
  decreaseItems,
} from "../features/cart/cartSlice";

const CartItem = ({ id, amount, img, title, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <img src={img} alt="title" />
      <div className="cart-description">
        <h3>{title}</h3>
        <p>{price}</p>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeItems(id))}
        >
          remove
        </button>
      </div>
      <div className="amount-styles">
        <button
          className="amount-btn"
          onClick={() => dispatch(increseItems({ id }))}
        >
          <ChevronUp />
        </button>
        {amount}
        <button
          className="amount-btn"
          onClick={() => dispatch(decreaseItems({ id }))}
        >
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
