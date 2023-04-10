import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>
        {/* method 2) ---> you can also add cartCount to CartContext and use reduce() inside useEffect when cartItems change */}
        {cartItems.reduce(function (total, item) {
          return total + item.quantity;
        }, 0)}
      </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
