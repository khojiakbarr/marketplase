import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./layout/MainLayout";
import Login from "./Pages/Login";
import ProductDetails from "./components/ProductDetails";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </MainLayout>
  );
}
