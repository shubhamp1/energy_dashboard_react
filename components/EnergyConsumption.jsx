import React, { useEffect, useState } from "react";
import { renderChart } from "../utils/chart.js";
import { groupByDay, groupByHour, sortByTime } from "../utils/reading";

export const EnergyConsumption = ({ readings, grouped, setGrouped }) => {
  const containerId = "usageChart";
  const [view, setView] = useState("30-days");
  useEffect(() => {
    if (!readings?.length) return;
    const gropedView =
      view === "30-days" ? groupByDay(readings) : groupByHour(readings);
    setGrouped(gropedView);
    renderChart(containerId, sortByTime(gropedView).slice(-30), view);
  }, [view]);

  return (
    <>
      <h1 className="regular darkgray line-height-1 mb3">Energy consumption</h1>

      <section className="mb3">
        <button
          className={`h5 inline-block shadow-2 pl2 pr2 pt1 pb1 roundedMore border-grey ${
            view === "30-days" ? "bg-blue white" : "bg-white darkgray"
          }`}
          onClick={() => setView("30-days")}
        >
          Last 30 days
        </button>

        <button
          className={`h5 inline-block shadow-2 pl2 pr2 pt1 pb1 roundedMore border-grey ml2 ${
            view === "24-hours" ? "bg-blue white" : "bg-white darkgray"
          }`}
          onClick={() => setView("24-hours")}
        >
          Last 24 hours
        </button>
      </section>

      <section className="chartHeight mb3">
        <canvas id={containerId} />
      </section>
    </>
  );
};
