import { Products } from "./components/products";
import { useProducts } from "./hooks/useProducts";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";

function App() {
  const { products } = useProducts();

  const { filterProducts } = useFilters();

  const fil = filterProducts(products);
  return (
    <>
      <Header />
      <Products products={fil}></Products>
      {IS_DEVELOPMENT && <Footer/>}
    </>
  );
}

export default App;
