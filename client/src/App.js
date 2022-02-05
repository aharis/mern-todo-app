import React from "react";
import { Route, Routes } from 'react-router-dom';

import Footer from "./components/Footer";
import EnterToDo from "./components/EnterToDo";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


const App = () => {

  return(
    <div>
      <Navbar />
      <div className="container w-100 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="enter-todo" element={<EnterToDo />} />
        </Routes>
      </div>
      <Footer />
    </div >
  );
}

export default App;
