import {useState} from "react";
import SearchVillains from "../components/SearchVillains";
import Bad_apple_colour from "../images/Bad_apple_colour.png"
import Image from 'react-bootstrap/Image'
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";


//import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  const [results, setResults] = useState([]);


  return (
    <div className="content">
    {/* className="container" */}
        <div >
          <h1 style={{color:'#ffffea'}}>Villain Search</h1>

          <SearchVillains setResults={setResults} />

           <div style={{ display: "flex", flexWrap: "wrap" }}>
        {results.map((villain, index) => (
            <div
              key={index}
              style={{
                border: "1px solid gray",
                margin: "10px",
                padding: "10px",
                width: "200px",
              }}

              value={index}
            >
              <h3>{villain.name}</h3>

              <img
                src={villain?.images?.sm}
                alt={villain.name}
                style={{ width: "100%" }}
              />

              <p>Power: {villain?.powerstats?.power}</p>
              <p>Speed: {villain?.powerstats?.speed}</p>
              <p>Strength: {villain?.powerstats?.strength}</p>
              <p>Intelligence: {villain?.powerstats?.intelligence}</p>
            </div>
          ))
        }
      </div>
        </div>
      
        

        <div style={{display: "flex", marginTop: "40px"}} >
          <Container>
            <Row>
              <Col >
                <Image src={Bad_apple_colour} alt="No Image found" style={{height: "170px", width: "170px"}}/>
              </Col>
              
            </Row>
          </Container>
        
       

     <div className='info-container'>
        
        <h1>About API</h1>
        <p>
          The API endpoint <b>https://superhero-search.p.rapidapi.com/api/villains </b> 
           is a service available through RapidAPI that allows developers to get information about villain characters from comic universes such as Marvel and DC. It works by sending a GET request to the endpoint, which returns data in JSON format, making it easy to use in web applications. The API typically provides information such as the villains name, image, and other character-related details, which developers can display on websites or apps.
        </p>
      </div>
      </div>

    </div>
      
  );

  
}

export default Home;


