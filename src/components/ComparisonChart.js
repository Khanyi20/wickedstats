import { Bar } from "react-chartjs-2";

function ComparisonChart({villain1, villain2, statsSelector}) {
    if(!villain1 || villain2) return(null);

    const data = {
        labels: [villain1.name, villain2.name],
        datasets: [
            {
                label: statsSelector,
                data: [
                    villain1.powerstat[statsSelector],
                    villain2.powerstat[statsSelector],

                ],
            },
        ],
    };

    return(
        <div>
            <h3>Comparison: {statsSelector}</h3>
            <Bar data={data}/>
        </div>
    );
}

export default ComparisonChart;