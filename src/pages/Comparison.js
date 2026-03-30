import { useState } from "react";
import ComparisonChart from "../components/ComparisonChart";
import VillainCard from "../components/VillainCard";
import VillainCharts from "../components/VillainCharts";
import VillainCharts2 from "../components/VillainCharts2";
import VillainSelector from "../components/StatSelector";

function Comparison() {

  // store the data of the villains selected
  const [villain1, setVillain1] = useState(null);
  const [villain2, setVillain2] = useState(null);
  const [statsSelector, setStatsSelector] = useState("power");// defaul comparison of the stats

  return (
    <div className="content">
      <h1 style={{color: "#ffffea", marginBottom: "20px"}}>Villain Comparison</h1>

      {/* this passes function down from child component */}
      <VillainSelector setVillain1={setVillain1} setVillain2={setVillain2}/>

      {/* Stats are selected here */}
      <div className="bararea">

        {/* onChange will updates the stat that was selected */}
      <select  className="barchart" onChange={(e) => setStatsSelector(e.target.value)}> 

        {/* the value is there to make sure values from states match the values from the API */}
        <option value="power">Power</option>
        <option value="speed">Speed</option>
        <option value="strength">Strength</option>
        <option value="intelligence">Intelligence</option>
      </select>
      </div>

      <div className="group-Villain" style={{display: "flex"}}>
        <VillainCard villain={villain1}/>
        <VillainCharts villain={villain1}/>
      </div>
      <div className="group-Villain" style={{display: "flex"}}>
      <VillainCard villain={villain2}/>
      <VillainCharts2 villain={villain2}/>
      </div>

      <ComparisonChart villain1={villain1} villain2={villain2} statsSelector={statsSelector}/>
    </div>
  );

}

export default Comparison;