// import { useState, useEffect } from "react";
// import Image from 'react-bootstrap/Image'
// import { Container, Form } from "react-bootstrap";
// import { Row} from "react-bootstrap";
// import { Col } from "react-bootstrap";
//import brand from './src/Asset 1.svg'

import React from "react";
// import'./Asset 1.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
// import first from './';
//import Carousel from 'react-bootstrap/Carousel';




function Home() {
  return (
    <div className="content">

      <div className="carousel">
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    
        <div  className="container">
      <input type="text" placeholder="Search" className="search-area" />
      <button className="search-button">Search</button>
      </div>
      
      

    </div>

  );

  
}

export default Home;


{/* <div className="brand-picture" stylesheet={{height:"70%", width:"70%"}}>
        <img src="./Asset 1.svg" alt='No image found/Error'/>
        </div> */}

        

    {/* <div>
          <img  src= "url(./Asset 1.svg) " alt='Error'/>
        
        <h1>About API</h1>
        <p>
          The API endpoint <b>https://superhero-search.p.rapidapi.com/api/villains</b> 
           is a service available through RapidAPI that allows developers to get information about villain characters from comic universes such as Marvel and DC. It works by sending a GET request to the endpoint, which returns data in JSON format, making it easy to use in web applications. The API typically provides information such as the villains name, image, and other character-related details, which developers can display on websites or apps.
        </p>
      </div> */}