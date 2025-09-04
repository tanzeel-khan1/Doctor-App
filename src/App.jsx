import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./folder/Nav";
import Home from "./folder/Home";
import About from "./folder/About";
import ServiceArea from "./folder/ServiceArea";
import Blogs from "./folder/Blogs"
import Contact from "./folder/Contact"

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/serviceA" element={<ServiceArea />} />
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
};

export default App;
