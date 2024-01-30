import React from "react";
import Header from "./companents/Header/header";
import Menu from "./pages/Menu/menu";
import Admin from "./pages/Admin/admin";
import Order from "./pages/Order/order";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Orders" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
