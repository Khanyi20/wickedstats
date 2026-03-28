import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If using Axios

const VillainData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // ... fetching logic goes here ...
  // Inside the AppDataFetcher component
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://superhero-search.p.rapidapi.com/api/heroes', {
        headers: {
          'X-RapidAPI-Key': '0d03d03fc7msh0e552a4c4fe6dbfp1cfa9djsn93dca974f4fd',
          'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com' // e.g., 'movie-api-by-api-ninjas.p.rapidapi.com'
        }
      });
      setData(response.data); // Axios puts the JSON data in response.data
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  fetchData();
}, []); // The empty dependency array [] ensures the effect runs only once on mount



  // ... rendering logic goes here ...

  // Inside the AppDataFetcher component's return statement
if (isLoading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error.message}</div>;
}

// Assuming the data is an array of items (adjust based on your API response structure)
return (
  <div>
    <h1>Fetched Data:</h1>
    <ul>
      {data && data.map((item) => (
        <li key={item.id}>{item.name}</li> // Adjust 'id' and 'name' based on your data fields
      ))}
    </ul>
  </div>
);


};

export default VillainData;
