import React from "react";
import { ScCartCheckout } from "./scParts";
import { useContext } from "react";
import { AppContext } from "../AppContext";

// Components
import Item from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { cart } = useContext(AppContext);

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {cart.map((item) => (
        <Item key={item.id} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
