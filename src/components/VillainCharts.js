import {
 Chart as ChartJS,
 RadialLinearScale,
 ArcElement,
 CategoryScale, 
 LinearScale,   
 PointElement,  
 LineElement    
} from "chart.js";

import { Pie, Radar } from "react-chartjs-2";

ChartJS.register(
 RadialLinearScale,
 ArcElement,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement
);

function VillainCharts({villain}) {
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
            <Radar data={data}/>
            <Pie data={data}/>
            
        </div>
    );
}

export default VillainCharts;