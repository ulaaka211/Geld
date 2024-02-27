"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  // labels: ["Bills", "Food", "Shopping", "Insurance", "Clothing"],

  datasets: [
    {
      label: "# of Votes",
      data: [12, 8, 9, 15, 5],
      backgroundColor: [
        "rgb(214, 82, 146)",
        "rgb(50, 99, 233)",
        "rgb(229, 149, 61)",
        "rgb(88, 186, 199)",
        "rgb(243, 189, 147)",
      ],
    },
  ],
};

export const Card5 = () => {
  return (
    <div className="md:flex md:flex-col bg-white rounded-[12px] md:px-[24px] md:py-[16px]">
      <div className="md:flex md:items-center  md:gap-2 border-b md:pb-4">
        <h2 className="text-[16px] font-[600]">Income - Expense</h2>
      </div>
      <div className="md:flex md:items-center justify-between md:px-6 md:py-8">
        <div className="w-[250px] h-[250px]">
          <Doughnut data={data} />
        </div>
        <div className="md:flex md:flex-col md:gap-4">
          <div className="md:flex md:items-center md:gap-2">
            <div className="w-3 h-3 rounded-full bg-[#1C64F2]"></div>
            <h2 className="text-[14px] font-[400]">Bills</h2>
          </div>
          <div className="md:flex md:items-center md:gap-2">
            <div className="w-3 h-3 rounded-full bg-[#E74694]"></div>
            <h2 className="text-[14px] font-[400]">Food</h2>
          </div>
          <div className="md:flex  md:items-center md:gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FDBA8C]"></div>
            <h2 className="text-[14px] font-[400]">Shopping</h2>
          </div>
          <div className="md:flex md:items-center md:gap-2">
            <div className="w-3 h-3 rounded-full bg-[#16BDCA]"></div>
            <h2 className="text-[14px] font-[400]">Insurance</h2>
          </div>
          <div className="md:flex md:items-center  md:gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F2901C]"></div>
            <h2 className="text-[14px] font-[400]">Clothing</h2>
          </div>
        </div>
        <div className="md:flex md:flex-col md:gap-4">
          <div className="md:flex md:gap-2">
            <h2 className="text-[14px] font-[400]">5'000'000</h2>
          </div>
          <div className="md:flex md:gap-2">
            <h2 className="text-[14px] font-[400]">5'000'000</h2>
          </div>
          <div className="md:flex md:gap-2">
            <h2 className="text-[14px] font-[400]">5'000'000</h2>
          </div>
          <div className="md:flex md:gap-2">
            <h2 className="text-[14px] font-[400]">5'000'000</h2>
          </div>
          <div className="md:flex md:gap-2">
            <h2 className="text-[14px] font-[400]">5'000'000</h2>
          </div>
        </div>
        <div className="md:flex md:flex-col md:gap-4">
          <div className="md:flex md:gap-2">
            <h2 className="text-[14px] font-[400]">15.50%</h2>
          </div>
          <div className="md:flex md:gap-2">
            <h2 className="text-[14px] font-[400]">15.50%</h2>
          </div>
          <div className="md:flex md:gap-2">
            <h2 className="text-[14px] font-[400]">15.50%</h2>
          </div>
          <div className="md:flex md:gap-2">
            <h2 className="text-[14px] font-[400]">15.50%</h2>
          </div>
          <div className="md:flex md:gap-2">
            <h2 className="text-[14px] font-[400]">15.50%</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
