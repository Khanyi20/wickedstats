
import { useEffect, useState } from "react";

function SearchVillains({setResults}) {
  //states are created to store the data from API after fetching it.
  const [villains, setVillains] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // state store whatever is typed in the input

  //useEffect initaites the function process of fetching API request.
  useEffect (() => {
    const fetchVillains = async () => {
      try {
        const response = await fetch(
          "https://superhero-search.p.rapidapi.com/api/villains",
          {
            headers: {
              "x-rapidapi-key": "0d03d03fc7msh0e552a4c4fe6dbfp1cfa9djsn93dca974f4fd",
		          "x-rapidapi-host": "superhero-search.p.rapidapi.com",
            },
          }
        );
        // turns the data requested from API into JSON format for organising purposes
        const data = await response.json();
          setVillains(data); //stores API data in setVillains state
      }
      //Error will take place if there was a problem with fetching the API request.
      catch (error) {
        console.error(error);
      }
    };
    fetchVillains();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value); //handleChange function handles the process of running through data as user enters terms in search field.
  };

  // runs through api to find terms related to what the user has typed 
  const handleSearch = () => {
    const filtered = villains.filter((villain) => 
      villain.name.toLowerCase().includes(searchTerm.toLowerCase())// makes searching any term easier
    ); 

    setResults(filtered); //sends data to parent component
  };



  return(
    <div className="container">
      <input className="search-area" type="text" placeholder="Search Villains" value={searchTerm} onChange={handleChange} />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
}


export default SearchVillains;