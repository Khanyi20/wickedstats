import { useState } from "react";
import ComparisonChart from "../components/ComparisonChart";
import VillainCard from "../components/VillainCard";
import VillainCharts from "../components/VillainCharts";
import VillainCharts2 from "../components/VillainCharts2";
import VillainSelector from "../components/StatSelector";

function Comparison() {
  const [villain1, setVillain1] = useState(null);
  const [villain2, setVillain2] = useState(null);
  const [statsSelector, setStatsSelector] = useState("power");

  return (
    <div className="content">
      <h1>Villain Comparison</h1>
      <VillainSelector setVillain1={setVillain1} setVillain2={setVillain2}/>

      {/* Stats are selected here */}
      <select onChange={(e) => setStatsSelector(e.target.value)}>
        <option value={"power"}>Power</option>
        <option value={"speed"}>Speed</option>
        <option value={"strength"}>Strength</option>
        <option value={"intelligence"}>Intelligence</option>
      </select>

      <div style={{display: "flex"}}>
        <VillainCard villain={villain1}/>
        <VillainCard villain={villain2}/>
      </div>

      <VillainCharts villain={villain1}/>
      <VillainCharts2 villain={villain2}/>

      <ComparisonChart villain1={villain1} villain2={villain2} statsSelector={statsSelector}/>
    </div>
  );

}

export default Comparison;