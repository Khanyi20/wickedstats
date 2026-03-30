import {
 Chart as ChartJS,
 RadialLinearScale,
 CategoryScale, 
 LinearScale,   
 PointElement,  
 LineElement    
} from "chart.js";

import { Radar } from "react-chartjs-2";

ChartJS.register(
 RadialLinearScale,
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
                backgroundColor: '#0C0A3E',
                borderColor: '#B33F62',
                pointBackgroundColor: '#B33F62',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#B33F62'
            },
        ],
    };

    return(
        <div>
            <h4 style={{color: "#ffffea"}}>{villain.name} Stats</h4>
            <div className="charts">
            <Radar data={data}/>
            </div>
            
        </div>
    );
}

export default VillainCharts;