import { useState, useEffect } from "react";


function Comparison() {

  
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://superhero-search.p.rapidapi.com/api/villains")
      .then (response => response.json())
      .then (data => setData(data))
      .catch (error => console.error("Error fetching data", error));
    // async function grabData() {
    //   let response = await fetch(URL)
    //   let res = await response.json()
    //   setDate(res)
    

    //grabData()
    
  }, []);

  
  return( 
    
      <div>
        <h2>Contact Page</h2>
        {data? <h1>{data.title}</h1>: <p>Loading...</p>}
      </div>
    );
    
}

export default Comparison;