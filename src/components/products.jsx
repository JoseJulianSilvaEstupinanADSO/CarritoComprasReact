import "./Products.css";

import { AddToCartIcon } from "./icons";



export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <div>
                <strong> {product.title} </strong> - ${product.price}
            </div>
            <div>
                <button>
                    <AddToCartIcon/>
                </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
