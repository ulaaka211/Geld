"use client";

import { useState } from "react";
import { Modal3 } from "./modal3";

export const Modal2 = (props) => {
  const [showIcons, setShowIcons] = useState(false);

  const handleIcons = () => {
    setShowIcons(!showIcons);
  };

  const openIcons = () => {
    setShowIcons(true);
  };

  const closeIcons = () => {
    setShowIcons(false);
  };

  return (
    <div className=" rounded-[8px] border border-[#D1D5DB] bg-white absolute w-full h-[300%] left-0 top-14 overflow-scroll">
      {showIcons && <Modal3 toggle={closeIcons} />}
      <div
        onClick={openIcons}
        className="w-full md:flex md:p-4 gap-3 border-b border-[#D1D5DB]"
      >
        <img src="/PlusCircle (1).svg" />
        <div className="md:flex md:justify-right">
          <h2 className="text-[16px] font-[400]">Add Category</h2>
        </div>
      </div>
      <div className="w-full md:flex md:p-4 gap-3">
        <img src="/House.svg" />
        <div className="md:flex md:justify-right">
          <h2 className="text-[16px] font-[400]">Home</h2>
        </div>
      </div>
      <div className="w-full md:flex md:p-4 gap-3">
        <img src="/Gift.svg" />
        <div className="md:flex md:justify-right">
          <h2 className="text-[16px] font-[400]">Gift</h2>
        </div>
      </div>
      <div className="w-full md:flex md:p-4 gap-3">
        <img src="/ForkKnife.svg" />
        <div className="md:flex md:justify-right">
          <h2 className="text-[16px] font-[400]">Food</h2>
        </div>
      </div>
      <div className="w-full md:flex md:p-4 gap-3">
        <img src="/Wine.svg" />
        <div className="md:flex md:justify-right">
          <h2 className="text-[16px] font-[400]">Wine</h2>
        </div>
      </div>
    </div>
  );
};
