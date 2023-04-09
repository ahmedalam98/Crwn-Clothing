import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {/* method 2) ---> you can also add cartCount to CartContext and use reduce() inside useEffect when cartItems change */}
        {cartItems.reduce(function (total, item) {
          return total + item.quantity;
        }, 0)}
      </span>
    </div>
  );
};

export default CartIcon;
