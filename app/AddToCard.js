export const AddToCard = (item) => {
  const storedProduct = localStorage.getItem("products") || "[]";
  let Product = JSON.parse(storedProduct);
  const existProduct = Product.find((product) => product.id === item.id);
  if (existProduct) {
    existProduct.quantity += 1;
    localStorage.setItem("products", JSON.stringify(Product));
  } else {
    item.quantity = 1;
    Product.push(item);
    localStorage.setItem("products", JSON.stringify(Product));
  }
};

export const removeFromCart = (product) => {
  const storedProduct = localStorage.getItem("products");
  let products = JSON.parse(storedProduct);
  products = products.filter((item) => item.id !== product.id);
  localStorage.setItem("products", JSON.stringify(products));
};
export const reload = () => {
  window.location.reload();
};
