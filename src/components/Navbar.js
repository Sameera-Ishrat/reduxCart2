import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <h2>ReduxCart</h2>
        <div className="nav-container">
          <CartIcon />
          <div className="badge">
            <p className="amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
