import {
 Chart as ChartJS,
 ArcElement,
 CategoryScale, 
 LinearScale,   
 PointElement,  
 LineElement    
} from "chart.js";

import { Pie} from "react-chartjs-2";

ChartJS.register(
 ArcElement,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement
);

function VillainCharts2({villain}) {
    if (!villain) return(null);

    const stats = villain.powerstats;
    const data = {
        labels: ["Power", "Speed", "Strength", "Intelligence"],
        datasets: [
            {
                label: villain.name,
                data: [
                    stats.power,
                    stats.speed,
                    stats.strength,
                    stats.intelligence
                ],
            },
        ],
    };

    return(
        <div>
            <h4>{villain.name} Stats</h4>
            <Pie data={data}/>
            
        </div>
    );
}

export default VillainCharts2;