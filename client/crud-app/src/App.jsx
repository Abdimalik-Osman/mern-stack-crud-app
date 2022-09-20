import { useState, useEffect, useContext } from "react";
import {Link, Routes, Route} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Home from './components/home';
import UpdateUser from './components/update-user';

function App() {
  

  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/update-user/:empID" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
