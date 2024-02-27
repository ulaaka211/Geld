"use client";

import { useContext, useState } from "react";
import { Slider } from "@mui/material";
import { Modal1 } from "./modals/modal1";

export const Record = () => {
  const [low, setLow] = useState([25, 75]);
  const [showModal1, setShowModal1] = useState(false);

  const showModal = () => {
    setShowModal1(true);
  };

  const closeModal = () => {
    setShowModal1(false);
  };

  return (
    <div className="flex gap-[24px]">
      <div className="min-w-[282px] bg-white rounded-xl border border-[#E5E7EB] px-[16px] py-[24px] flex flex-col gap-[24px]">
        <div className="flex flex-col">
          <h3 className="font-semibold text-2xl text-black mb-[24px]">
            Records
          </h3>
          {showModal1 && <Modal1 toggle={closeModal} />}
          <button
            onClick={showModal}
            className=" py-[4px] flex justify-center rounded-[20px] bg-[#0166FF] w-full text-white font-normal text-base"
          >
            + Add
          </button>
        </div>
        <input
          placeholder="search"
          className="px-[16px] py-[4px] rounded-lg w-full border border-[#D1D5DB] bg-[#F3F4F6]"
        />
        <div className="flex flex-col gap-[16px]">
          <h4 className="text-[#1F2937] font-semibold text-base">Types</h4>
          <form className="">
            <div className="md:flex md:gap-2">
              <input type="radio" className="" name="all" />
              <label htmlFor="all">All</label>
            </div>
            <div className="md:flex md:gap-2">
              <input type="radio" className="bg-white" name="income" />
              <label htmlFor="income">Income</label>
            </div>
            <div className="md:flex md:gap-2">
              <input type="radio" className="bg-white" name="expense" />
              <label htmlFor="expense">Expense</label>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center justify-between">
            <h4 className="text-[#1F2937] font-semibold text-base">Category</h4>
            <button className="px-[12px]">Clear</button>
          </div>
          <button className="px-[12px] text-[#1F2937] md:flex md:items-center md:gap-2">
            <img src="/Leading icon (2).svg" />
            <h2 className="text-[16px] font-[400]">Add Category</h2>
          </button>
        </div>
        <div className="flex flex-col gap-[16px] w-full">
          <h4 className="text-[#1F2937] font-semibold text-base">
            Amount Range
          </h4>
          <div className="flex flex-col gap-[16px]">
            <div className="flex justify-between">
              {/* <input
                type="number"
                className="px-4 py-3 rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] placeholder-black w-[120px]"
                value={low}
              ></input>
              <input
                type="number"
                className=" px-4 py-3 rounded-lg border border-[#D1D5DB] bg-[#F3F4F6] placeholder-black w-[120px]"
                value={low}
              ></input> */}
            </div>
            <div className="md:flex md:flex-col md:items-center">
              <div className="w-full md:flex relative">
                {/* <input
                  type="range"
                  min="1"
                  max="500"
                  value={low}
                  onChange={(e) => setLow(e.target.value)}
                  className="absolute w-full"
                />
                <input
                  type="range"
                  min="500"
                  max="1000"
                  value={high}
                  onChange={(e) => setHigh(e.target.value)}
                  className="w-full"
                /> */}

                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={low}
                  onChange={(e) => setLow(e.target.value)}
                />
              </div>
              <div className="w-full md:flex md:justify-between">
                {/* <span>{low}</span>
                <span>{low}</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
