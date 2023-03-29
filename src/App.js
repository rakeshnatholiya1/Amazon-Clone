import Header from "./Header";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import commerce from "./lib/commerce";
import { useEffect, useState } from "react";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [ShoppingCart, setShoppingCart] = useState([]);
  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProductsList([response.data]);
  };
  const addToCart = async (productId, quntity) => {
    const response = await commerce.cart.add(productId, quntity);
    console.log(response.cart);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
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
            <ShoppingCart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
