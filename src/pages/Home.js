import React, {useState} from "react";
import SearchBar from "../components/SearchSelector";
import VillainContainer from "../components/VillainContainer";

//import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  const [villain, setVillain] =useState([]);
  const [filterVillains, setFilterVillains] = useState([]);

  const fetchVillains = async() => {
    try{
        const response = await fetch("https://superhero-search.p.rapidapi.com/api/villains",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": '0d03d03fc7msh0e552a4c4fe6dbfp1cfa9djsn93dca974f4fd',
            "X-RapidAPI-Host": 'superhero-search.p.rapidapi.com',
          },
        }
      );
      const data = await response.json();
      setVillain(data);
      setFilterVillains(data);
    } 
    catch (error) {
      console.error(error);
    }
  };

  const onSearch = (query) => {
    if (!villain.length) {
      fetchVillains();
    }

    const filter = villain.filter((villains) => 
    villains.name.toLowerCase().includes(query.toLowerCase())
  );
  setFilterVillains(filter);
  };


  return (
    <div className="content">
    {/* className="container" */}
        <div >
          <h1>Villain Search</h1>
          <SearchBar onSearch={onSearch} />
          {/* <input type="text" placeholder="Search" className="search-area" />
          <button className="search-button">Search</button> */}
       
        <div>
          {filterVillains.map((villain, index) => (
            <VillainContainer key={(index)} villains={villain}/>
          ))}
        </div> 
        </div>
      
        

        <div className="brand-picture" stylesheet={{height:"70%", width:"70%"}}>
        {/* <img src={redApple} alt='No image found/Error'/> */}
        </div>

     <div className='info-container'>
        
        <h1>About API</h1>
        <p>
          The API endpoint <b>https://superhero-search.p.rapidapi.com/api/villains</b> 
           is a service available through RapidAPI that allows developers to get information about villain characters from comic universes such as Marvel and DC. It works by sending a GET request to the endpoint, which returns data in JSON format, making it easy to use in web applications. The API typically provides information such as the villains name, image, and other character-related details, which developers can display on websites or apps.
        </p>
      </div>

    </div>
      
  );

  
}

export default Home;


