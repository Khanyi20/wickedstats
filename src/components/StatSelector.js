import { useEffect, useState } from "react";

function VillainSelector({setVillain1, setVillain2}) {
    const [villains, setVillains] = useState([]);//[] creates an empty array to store data fetched from API

    useEffect (() => {

        //async function is created to fetch API
        const fetchVillains = async () => {
            const response = await fetch(
                "https://superhero-search.p.rapidapi.com/api/villains",
                {
                    headers: {
                        'x-rapidapi-key': '0d03d03fc7msh0e552a4c4fe6dbfp1cfa9djsn93dca974f4fd',
		                'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
                    },
                }
            );
            const data = await response.json();
            setVillains(data); // keep API data in state
        };
            fetchVillains(); //function is called 
    }, []); // empty array will run once to prevent errors of many requests


    return(
        <div className="drop-area" >
            
            {/* creates dropdown to choose villain from data stored in array */}
            <select onChange={(e) => setVillain1(villains[e.target.value])} className="dropdown">
                <option  >Select Villain 1</option>

                {/* loops through villains state for villain data */}
                { villains.map((v, index) => (

                    // key creates unique id for the villain object and value chooses which villain object to use
                    <option key={index} value={index}>
                        {v.name}
                    </option>
                ))}
            </select>

            <select onChange={(e) => setVillain2(villains[e.target.value])} className="dropdown">
                <option  >Select Villain 2</option>
                { villains.map((v, index) => (
                    <option key={index} value={index}>
                        {v.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default VillainSelector;