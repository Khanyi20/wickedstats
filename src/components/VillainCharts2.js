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
                backgroundColor: [
                '#F9564F',
                '#5B7B7A',
                '#B33F62',
                '#0C0A3E'
                ],

                // can change look by hovering over object
                hoverOffset: 4
            },
        ],
    };

    return(
        <div className="group-Villain">
            <h4 style={{color: "#ffffea"}}>{villain.name} Stats</h4>
            
            <div className="charts">
            <Pie data={data} />
            </div>
        </div>
    );
}

export default VillainCharts2;