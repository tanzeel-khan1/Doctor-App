import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./folder/Nav";
import Home from "./folder/Home";
import About from "./folder/About";
import ServiceArea from "./folder/ServiceArea";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/serviceA" element={<ServiceArea />} />
      </Routes>
    </>
  );
};

export default App;
