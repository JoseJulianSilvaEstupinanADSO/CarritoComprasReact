import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { searchProducts } from "../services/products";

export function useProducts() {
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const newProducts = await searchProducts();
      setProducts(newProducts);
    } catch (e) {}
  });

  useEffect(() => {
    getProducts()
  }, [])

  return {products: products, getProducts}
}
