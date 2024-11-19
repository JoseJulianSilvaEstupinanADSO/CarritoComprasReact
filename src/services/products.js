export const searchProducts = async () => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const json = await response.json();
    const products =  json;
    console.log(products, "pro")
    return products?.map((product) => ({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      category: product.category,
      desc: product.description,
    }));
  } catch (e) {
    throw new Error("Error en la busqueda de productos");
  }
};
