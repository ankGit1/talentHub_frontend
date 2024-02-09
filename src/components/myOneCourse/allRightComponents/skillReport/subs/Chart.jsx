import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function Chart({ passData }) {
  const dataNum = passData.map(({ completion }) => completion);
  const labelsStage = passData.map(({ title }) => title);
  const data = {
    labels: labelsStage.map((stage) => stage),
    datasets: [
      {
        label: "skilled",
        data: dataNum.map((num) => num),
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
          "rgba(34, 56, 78)",
          "rgba(120, 45, 200)",
          "rgba(200, 180, 50)",
          "rgba(80, 160, 120)",
          "rgba(220, 120, 40)",
          "rgba(10, 100, 190)",
          "rgba(130, 70, 220)",
          "rgba(90, 200, 30)",
          "rgba(190, 20, 120)",
          "rgba(60, 160, 190)",
          "rgba(240, 80, 40)",
          "rgba(170, 50, 210)",
          "rgba(40, 140, 90)",
          "rgba(200, 130, 30)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, 
    },
  };
  return <PolarArea data={data} options={options} />;
}
