import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  );
}
