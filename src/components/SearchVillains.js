
import { useEffect, useState } from "react";

function SearchVillains({setResults}) {
  const [villains, setVillains] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


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
        const data = await response.json();
          setVillains(data);
      }
      catch (error) {
        console.error(error);
      }
    };
    fetchVillains();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const filtered = villains.filter((villain) => 
      villain.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered);
  };



  return(
    <div className="container">
      <input className="search-area" type="text" placeholder="Search Villains" value={searchTerm} onChange={handleChange} />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
}


export default SearchVillains;