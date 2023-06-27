import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Hero from "../pages";
import Navbar from "../components/Navbar";
import Cart from "../pages/product/Cart";
import PoductView from "../pages/product/PoductView";

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={`/`} element={<Hero />} />
      </Routes>
      <Routes>
        <Route path={`/cart`} element={<Cart />} />
      </Routes>
      <Routes>
        <Route path={`/product/:id`} element={<PoductView />} />
      </Routes>
    </Router>
  );
};

export default Routing;
