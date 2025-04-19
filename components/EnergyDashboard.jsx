import React, { useEffect, useState } from "react";
import EnergyInfoCard from "./EnergyInfoCard";
import {
  calculateConsumption,
  calculateCost,
  calculateFootprint,
} from "../utils/calculation";
import { EnergyConsumption } from "./EnergyConsumption";
import { groupByDay } from "../utils/reading";

const EnergyDashboard = ({ readings }) => {
  const [cost, setCost] = useState(0);
  const [consumption, setConsumption] = useState(0);
  const [footPrint, setFootPrint] = useState(0.0);
  const [grouped, setGrouped] = useState(groupByDay(readings));

  useEffect(() => {
    debugger;
    if (grouped && grouped.length > 0) {
      setCost(calculateCost(grouped));
      setConsumption(calculateConsumption(grouped));
      setFootPrint(calculateFootprint(grouped));
    }
  }, [readings, grouped]);

  return (
    <div>
      <EnergyConsumption
        readings={readings}
        grouped={grouped}
        setGrouped={setGrouped}
      />

      <div className="flex energy-dashboard">
        <EnergyInfoCard label="Cost" value={cost} unit="$" />
        <EnergyInfoCard label="Consumption" value={consumption} unit="KW/h" />
        <EnergyInfoCard label="FootPrint" value={footPrint} unit="$" />
      </div>
    </div>
  );
};

export default EnergyDashboard;
