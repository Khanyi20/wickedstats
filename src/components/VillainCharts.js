//importing chart components from chart.js to use to analyse data from API

import {
 Chart as ChartJS,
 RadialLinearScale,
 CategoryScale, 
 LinearScale,   
 PointElement,  
 LineElement    
} from "chart.js";

import { Radar } from "react-chartjs-2";


//registers the elements used to create the specific chart that was chosen
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
        // names that will show on axes
        labels: ["Power", "Speed", "Strength", "Intelligence"],
        datasets: [
            {
                //chart title
                label: villain.name,

                // Values to be used on the chart
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

                {/* renders through chart using the data fetched from API(villain)  */}
            <Radar data={data}/>
            </div>
            
        </div>
    );
}

export default VillainCharts;