import { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
    LinearScale, 
    PointElement, 
    Tooltip, Legend
);

function TimeLineChart() {
    const [timelineData, setTimeLineData] = useState([]);

    useEffect(() => {
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

            const processdata = 
            data.map((v, index) => {
                const appearance = v?.biography?.firstAppearance;

                if (!appearance) return null

                const match = appearance.match(/\d{4}/); // method to find any 4 digit number

                if (!match) return null;

                const year = parseInt(match[0]); // converts data findings into string and returns an integer


                // creates points on the chart
                return {
                    x: year,
                    y: index,
                    name: v.name,
                };
            })
            .filter(Boolean) // removes any invalid data
            .sort((a, b) => a.x - b.x); //sorts oldest data set to newest data set

            setTimeLineData(processdata);
        };

        fetchVillains();
    }, []);


    const data = {
        datasets: [{
    label: 'Villains First Appearances',
    data: timelineData,
    backgroundColor: '#F9564F'
            },
        ],

    };

    const options = {
        scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        display: false, // to hide as it has no use
      },
    },
    plugins: {
      tooltip: {
        callbacks: {

          // function will display data info when hovering over it
          label: function (context) {
            return context.raw.name + " (" + context.raw.x + ")";
          },
        },
      },
    },
    };


    return(
        <div>
            <h2 style={{color: "#ffffea"}}>Villain Timeline</h2>
            <Scatter data={data} options={options} className= "timechart"/>
        </div>
    );
}

export default TimeLineChart;