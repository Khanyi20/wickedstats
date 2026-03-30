import {
 Chart as ChartJS,
 BarElement,
 CategoryScale, 
 LinearScale,   
 PointElement,  
 LineElement    
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
 BarElement,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement
);

function ComparisonChart({villain1, villain2, statsSelector}) {
    if(!villain1 || !villain2) return null;

    const data = {
        labels: [villain1.name, villain2.name],
        datasets: [
            {
                label: statsSelector,
                data: [
                    villain1.powerstats[statsSelector],
                    villain2.powerstats[statsSelector],

                ],
                backgroundColor: [
      '#0c0a3eb7',
      '#b33f62a2'
    ],
    borderColor: [
      '#ff6384',
      '#ff9f40'
    ],
            },
        ],
    };

    return(
        <div>
            <h3 style={{color: "#ffffea"}}>Comparison: {statsSelector}</h3>
            <div className="compare-chart">
            <Bar data={data}/>
            </div>
        </div>
    );
}

export default ComparisonChart;