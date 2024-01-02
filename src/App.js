import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/main/Home";
import Modals from "./components/modal/MainModal";
import { ModalProivder } from "./context/ModalContext";

function App() {
  return (
    <ModalProivder>
      <Modals></Modals>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </ModalProivder>
  );
}

export default App;
