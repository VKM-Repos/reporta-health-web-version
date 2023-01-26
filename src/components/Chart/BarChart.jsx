import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  ArcElement,
} from "chart.js";

import { Bar } from "react-chartjs-2";
// import "chartjs-plugin-datalabels";

// import { ChartDataLabels } from 'chartjs-plugin-datalabels';
// const ChartDataLabels = require('chartjs-plugin-datalabels')

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  ArcElement,
  Title
);

export default function BarChart(props) {
  const options = {
    responsive: true,
  };
  const handleChangeState = (event) => {};
  const data = {
    labels: ["Hospital", "Imaging", "Laboratory", "Phamacy"],
    datasets: [
      {
        data: props.data?.datasets[0]?.data,
        backgroundColor: ["#242F9B", "#54249B", "#247F9B", "#9B247F"],
        barPercentage: 0.5,
      },
    ],
  };
  return (
    <div>
      {!props.isLoading && <Bar data={data} options={options} />}

      <div className="flex gap-2 py-5 lg:text-sm text-xs w-fit flex-wrap">
        <div className="flex justify-center items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-[#242F9B]"></div> Hospital{" "}
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-[#54249B]"></div> Imaging{" "}
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-[#247F9B]"></div> Laboratory{" "}
        </div>
        <div className="flex justify-center items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-[#9B247F]"></div> Phamacy{" "}
        </div>
      </div>
    </div>
  );
}
