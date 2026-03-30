import { useEffect, useState } from "react";

function VillainSelector({setVillain1, setVillain2}) {
    const [villains, setVillains] = useState([]);

    useEffect (() => {
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
            setVillains(data);
        };
            fetchVillains();
    }, []);


    return(
        <div className="drop-area" >
            <select onChange={(e) => setVillain1(villains[e.target.value])} className="dropdown">
                <option  >Select Villain 1</option>
                { villains.map((v, index) => (
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