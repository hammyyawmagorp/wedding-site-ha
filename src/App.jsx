import React from "react";
import Header from "./components/header/Header";
import Portal from "./components/portal/Portal";
import { Routes, Route } from "react-router-dom";
import WeddingHub from "./components/wedding hub/WeddingHub";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Portal />}></Route>
        <Route path="/whub" element={<WeddingHub />}></Route>
      </Routes>
    </>
  );
}
export default App;
