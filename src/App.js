import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";
import { AppContext } from "./AppContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const oncekiler = JSON.parse(localStorage.getItem("KartlarYenidenDagitildi"));
  const baslangicDegeri = oncekiler ? oncekiler : [];

  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState(baslangicDegeri);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    const yeniState = [...cart, item];
    setCart(yeniState);
    localStorage.setItem("KartlarYenidenDagitildi", JSON.stringify(yeniState));
  };

  const removeItem = (itemId) => {
    const kalacaklar = cart.filter((item) => item.id !== itemId);
    setCart(kalacaklar);
    localStorage.setItem("KartlarYenidenDagitildi", JSON.stringify(kalacaklar));
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{ products, setProducts, cart, setCart, addItem, removeItem }}
      >
        <Navigation />

        {/* Routelar */}
        <main className="content">
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
