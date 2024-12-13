import React from "react";
import { isMobile } from "react-device-detect";
import Layout from "./pages/Layout";
import ModalProvider from "./context/ModalProvider";
import Mobileerror from "./components/404page/Mobilepage.jsx"

function App() {
  if (isMobile) {
    return (
      <Mobileerror/>
    );
  }

  return (
    <ModalProvider>
      <Layout />
    </ModalProvider>
  );
}

export default App;
