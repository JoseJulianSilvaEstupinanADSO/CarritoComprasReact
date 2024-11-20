import { useCart } from "../hooks/useCart";
import "./Products.css";

import { AddToCartIcon, RemoveFromCartIcon } from "./icons";

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductInCard = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>
                <strong> {product.title} </strong> - ${product.price}
              </div>
              <div>
                <button
                  onClick={() => {
                    isProductInCard
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCard ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
