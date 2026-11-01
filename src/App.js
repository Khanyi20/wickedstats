
import React from 'react';
import './App.css';

import { Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Comparison from './pages/Comparison';
import Logo from './images/bad apple dark.png';

import ColorBends from './component/ColorBends';


function App() {
  return (
    <div className="App app-shell">
      <div className="color-bends-background" aria-hidden="true">
        <ColorBends
          colors={['#ff5c7a', '#8a5cff', '#00ffd1']}
          rotation={90}
          speed={0.2}
          scale={1.2}
          frequency={1.9}
          warpStrength={1}
          mouseInfluence={1}
          noise={0.15}
          parallax={0.5}
          iterations={1}
          intensity={1.5}
          bandWidth={1}
          transparent
          autoRotate={0}
          color="#A855F7"
        />
      </div>

      <BrowserRouter>
        <div className="app-content">
          
          <Nav className="top-navigation" aria-label="Main navigation">
            
              <img src={Logo} alt="WickedStats Logo" className="logoimage" />
            
            <div className="navigation-links">
              <Link to="/" className="nav-name">Home</Link>
              <Link to="/comparison" className="nav-name">Comparison</Link>
              <Link to="/timeline" className="nav-name">Timeline</Link>
            </div>
           
          </Nav>

          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/comparison" element={<Comparison />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
