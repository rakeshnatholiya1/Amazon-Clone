import Header from "./Header";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import commerce from "./lib/commerce";
import { useEffect, useState } from "react";
import Footer from "./Footer";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [productsListByCategory, setProductsListByCategory] = useState([]);
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProductsList(response.data);
  };

  const fetchProductsbyCategories = async (category) => {
    const response = await commerce.products.list({
      category_slug: [category],
    });

    setProductsListByCategory(response.data);
  };
  const addToCart = async (productId, quntity) => {
    const response = await commerce.cart.add(productId, quntity);
    setCart(response);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const RemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  };

  const fetchCategories = async () => {
    const response = await commerce.categories.list();
    setCategories(response.data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header cart={cart} categories={categories} />
        <Switch>
          <Route exact path="/">
            <div className="banner">
              <img
                src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
                alt=""
              />
            </div>
            <Products productsList={productsList} addToCart={addToCart} />
          </Route>
          <Route exact path="/ShoppingCart">
            <ShoppingCart cart={cart} RemoveFromCart={RemoveFromCart} />
          </Route>
          <Route exact path="/category/:slug">
            <div style={{ marginBottom: "350px" }}> </div>
            <Products
              productsList={productsListByCategory}
              addToCart={addToCart}
              fetchProductsbyCategories={fetchProductsbyCategories}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
