import Chart from "chart.js/auto";

let chart;

export const formatDateLabel = (timestamp, view) => {
  if (view === "24-hours") {
    return `${timestamp.toString().padStart(2, "0")}`; // Format as 00, 01, ..., 23
  }

  const date = new Date(timestamp);
  const month = date.getMonth();
  const day = date.getDate();

  const formatPart = (value) => {
    return value < 10 ? `0${value}` : `${value}`;
  };
  return `${formatPart(day)}/${formatPart(month + 1)}`;
};

export const renderChart = (containerId, readings, view) => {
  Chart.defaults.font.size = 10;

  const labels = readings.map(({ time }) => formatDateLabel(time, view));
  const values = readings.map(({ value }) => value);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "kWh usage",
        data: values,
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        borderWidth: 0.2,
        backgroundColor: "#5A8EDA",
        borderRadius: 10,
      },
    ],
  };

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(containerId, {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      maintainAspectRatio: false,
    },
  });
};
