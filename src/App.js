import Navbar from "./components/Navbar";
import Product from "./components/Product";
import "bootstrap/dist/css/bootstrap.css";
import mattresses from "./mattresses";
import {useState} from "react";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const products = Object.values(mattresses.mattresses);
  const [cartProducts, setCartProducts] = useState([]);
  const [countCartItems, setCountCartItems] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Toggle for Shopping Cart Modal window
  const toggle = () => setShowModal(!showModal);

  // Add 1 item in shopping cart => plus 1 to Navbar shopping cart badge
  const addCountCartItems = () => setCountCartItems(countCartItems + 1);

  // Add product to shopping cart
  const addToShoppingCart = item => {
    const existed = cartProducts.find(el => el.name === item.name);
    if (existed) {
      cartProducts.map(el => el.name === existed.name ? el.count++ : el.count);
      setCartProducts(cartProducts);
    } else {
      item.count = 1;
      setCartProducts([...cartProducts, item]);
    }
    addCountCartItems();
  }

  // Clear shopping cart => delete all products from shopping cart
  const clearShoppingCart = () => {
    setCartProducts([]);
    setCountCartItems(0);
  }

  return (
    <div className="main">
      <Navbar countCartItems={countCartItems} toggle={toggle}/>
      <Product products={products} addToShoppingCart={addToShoppingCart}/>
      <ShoppingCart showModal={showModal} toggle={toggle} cartProducts={cartProducts}
                    clearShoppingCart={clearShoppingCart}/>
    </div>
  );
}

export default App;