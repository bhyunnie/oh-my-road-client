import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/main/Home";
import Modals from "./components/modal/MainModal";
import { ModalProivder } from "./context/ModalContext";
import Oauth2 from "./external/discord/oauth2";
import { LocationProvider } from "./context/LocationContext";

function App() {
  return (
    <ModalProivder>
      <LocationProvider>
        <Modals></Modals>
        <Routes>
          <Route path="/oauth/discord" element={<Oauth2 />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </LocationProvider>
    </ModalProivder>
  );
}

export default App;
