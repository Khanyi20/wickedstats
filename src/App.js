//import logo from './logo.svg';
import React from 'react';
import './App.css';
import'./images/Asset 1.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav } from 'react-bootstrap';


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Image from "./pages/VillainImage";
import brand from "./images/Asset 1.svg";
//import Image from "./pages/VillainImage";





function App() {
  return (
    

    <div className="img-background">
    <BrowserRouter>
    
      

    
    

      <Nav defaultActiveKey="/" className="flex-column">
      
        <img src={brand} style={{backgroundImage: "url(./images/Asset 1.svg) ", height:"65%" , width:"65%"}} alt='No image found/Error'/>
      
      
  <Link to="/"  ><button className="nav-name">Home</button></Link>
  <Link to="about"  style = {{marginTop: '10px'}}><button className="nav-name">About</button></Link>
  <Link to="contact"  style = {{marginTop: '10px'}}><button className="nav-name">Contact</button></Link>
  <Link to="image"  style = {{marginTop: '10px'}}><button className="nav-name">Image</button></Link>
</Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/image" element={<Image />} />

      </Routes>
      

       
    </BrowserRouter></div>
    
  );
}

export default App;
