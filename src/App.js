import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Shipping from "./Pages/Shipping";
import OrderComplete from "./Pages/OrderComplete";
import React from "react";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{ position: "sticky", top: 0, width: "100%", zIndex: "9999" }}
      >
          <div style={{ paddingLeft: "65px", backgroundColor: "#f5c71a" }}>
            <Header />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/success" element={<OrderComplete />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="cart/shipping" element={<Shipping />} />
        </Routes>
    </Router>
  );
}

export default App;
