import React, { useEffect, useState } from "react";
import { EnergyConsumption } from "./EnergyConsumption.jsx";
import { getReadings } from "../utils/reading";
import { Sidebar } from "./Sidebar.jsx";
import EnergyDashboard from "./EnergyDashboard.jsx";

export const App = () => {
  const [readings, setReadings] = useState();

  useEffect(() => {
    const fetchReadings = async () => {
      try {
        const result = await getReadings();
        setReadings(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReadings();
  }, []);

  if (!readings) {
    return null;
  }

  return (
    <div className="background shadow-2 flex overflow-hidden">
      <aside className="p3 menuWidth overflow-auto">
        <Sidebar />
      </aside>
      <article className="bg-very-light-grey p3 flex-auto overflow-auto">
        <EnergyDashboard readings={readings} />
      </article>
    </div>
  );
};
