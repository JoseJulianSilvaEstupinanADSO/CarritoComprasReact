import "./Cart.css";

import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./icons";
import { useCart } from "../hooks/useCart";

export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  function CartItem({ image, price, title, quantity, addToCart }) {
    return (
      <li>

        <img src={image} alt="img" />
        <div>
          <strong>{title}</strong> - ${price}
        </div>
        <footer>
          <small onClick={addToCart}>Qty: {quantity}</small>
          <button>+</button>
        </footer>
      </li>
    );
  }
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
            {
              cart.map(product => (
                <CartItem key={product.id} addToCart={() => addToCart(product)}
                {...product}>

                </CartItem>
              ))
            }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
