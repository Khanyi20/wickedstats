
import React from 'react';
import './App.css';
// import Image from 'react-bootstrap/Image';
import { Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { BsEmojiAngryFill, BsEmojiAstonishedFill, BsEmojiGrimaceFill } from 'react-icons/bs';

import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Comparison from './pages/Comparison';
// import logo from './images/bad apple dark.png';
// import brandname from './images/Brand name.png';




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
          
          <Nav defaultActiveKey="/" className="flex-column">
            {/* <Image src={brandname} className='brandimage' alt='Wickedstats brand logo' /> */}
            {/* <Image src={logo} className='logoimage' alt='Wickedstats villain logo' /> */}
            <Link to="/" style={{ marginTop: '40px' }}><button className="nav-name">Home</button></Link>
            <Link to="/comparison"><button className="nav-name">Comparison</button></Link>
            <Link to="/timeline"><button className="nav-name">Timeline</button></Link>

            <p className='nav-description'>Wickedstats lets users compare fictional villains
              based on characteristics like strength and intelligence.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
              {/* <BsEmojiAngryFill className='emojiface' />
              <BsEmojiAstonishedFill className='emojiface' style={{ marginLeft: '5px' }} />
              <BsEmojiGrimaceFill className='emojiface' style={{ marginLeft: '5px' }} /> */}
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
