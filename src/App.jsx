import React, { Component } from "react";
import Home from "./components/Home";
import Classic from "./components/Classic";
import Specialty from "./components/Specialty";
import Product from "./components/Product";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <Router>
      <div>
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/classic" element={<Classic />}/>
        <Route path="/specialty" element={<Specialty />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
    </Router>
    );
  }
}

export default App;
