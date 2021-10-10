import React, { useState } from "react";
import ColorBox from "./components/ColorBox/ColorBox";
import { Nav } from "./components/Nav/Nav";
import "./styles/output.css";

const App = () => {
  return (
    <div
      style={{
        background: "#141414",
      }}
      className="h-screen w-full text-white flex justify-center items-center"
    >
      <Nav />
      <ColorBox />
    </div>
  );
};

export default App;
