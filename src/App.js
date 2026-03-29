
import React from 'react';
import './App.css';
import'./images/Asset 1.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav } from 'react-bootstrap';


import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Comparison from './pages/Comparison';
import logo from "./images/bad apple dark.png";
import brandname from "./images/Brand name.png";
import { BsEmojiAngryFill } from "react-icons/bs";
import { BsEmojiAstonishedFill } from "react-icons/bs";
import { BsEmojiGrimaceFill } from "react-icons/bs";


function App() {
  // return <Home /> 
  // return <Comparison/>
  
  return (
    

    <div className="img-background">
    <BrowserRouter>

      <Nav defaultActiveKey="/" className="flex-column">
      
        <image src={brandname} className='brandimage'  alt='No image found/Error'/>
        <image src={logo} className='logoimage'  alt='No image found/Error'/>
      
        <Link to="/" style={{marginTop: "10px"}} ><button className="nav-name">Home</button>
        </Link>
        <Link to="comparison" ><button className="nav-name">Comparison</button></Link>
        <Link to="timeline"  ><button className="nav-name">Timeline</button></Link>
        
          <p className='nav-description'>Wickedstats lets users compare fictional villains
            based on characteristics like strength, intelligence, and abilities. 
            It uses charts and side-by-side visuals to make differences to understand.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent:
            'center', marginTop:"5%"}}>
            <BsEmojiAngryFill  className='emojiface'/>
            <BsEmojiAstonishedFill className='emojiface' style={{marginLeft:"5px"}}/>
            <BsEmojiGrimaceFill className='emojiface'style={{marginLeft:"5px"}}/>
          </div>
      </Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/comparison" element={<Comparison />} />
      </Routes>
       
    </BrowserRouter></div>
    
  );
}

export default App;
