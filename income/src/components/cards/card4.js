"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {},
  responsive: true,
  scales: {
    y: {
      stacked: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Battle Pass",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000000 })),
      backgroundColor: "rgb(75, 192, 192)",
      barRoundness: 1,
    },
    {
      label: "Vodka",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10000000 })),
      backgroundColor: "rgb(53, 162, 235)",
      barRoundness: 12,
    },
  ],
};

export const Card4 = () => {
  return (
    <div className="md:flex md:flex-col bg-white rounded-[12px]">
      <div className="md:flex md:items-center md:px-[24px] md:py-[16px] md:gap-2 border-b">
        <h2 className="text-[16px] font-[600]">Income - Expense</h2>
      </div>
      <div className="md:pt-[20px] md:pb-[24px] md:px-[24px]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};
