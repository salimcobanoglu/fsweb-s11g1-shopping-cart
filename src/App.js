import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { AppContext } from "./AppContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart, item]);
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{ products, setProducts, cart, setCart, addItem, removeItem }}
      >
        <Navigation cart={cart} />

        {/* Routelar */}
        <main className="content">
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart cart={cart} />
          </Route>
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
