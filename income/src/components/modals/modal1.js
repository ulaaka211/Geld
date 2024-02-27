import { useState } from "react";
import { Modal2 } from "./modal2";

const types = [
  {
    label: "Expense",
    bgcolor: "#0166FF",
    color: "white",
  },
  {
    label: "Income",
    bgcolor: "#16A34A",
    color: "black",
  },
];

export const Modal1 = (props) => {
  const [type, setType] = useState(types[0]);
  const [bgColor, setBgColor] = useState("#0166FF");
  const [showCategory, setShowCategory] = useState(false);

  const handleCategory = () => {
    setShowCategory(!showCategory);
  };

  return (
    <div>
      <div
        onClick={props.toggle}
        className="fixed z-[40] bg-[#00000080] w-screen h-screen left-0 top-0"
      ></div>

      <div className="absolute z-[50] top-[20%] left-[32%] md:w-[40%] md:flex md:flex-col bg-white rounded-[12px]">
        <div className="md:flex md:justify-between md:px-[24px] md:py-[16px] md:gap-2 border-b">
          <h2 className="text-[16px] font-[600]">Add Record</h2>
          <img src="/X.svg" onClick={props.toggle} />
        </div>

        <div className="w-full md:grid md:grid-cols-2">
          <div className="md:pt-[20px] md:pb-[24px] md:px-[24px] md:flex md:flex-col md:gap-[20px]">
            <div className="w-full bg-[#F3F4F6] rounded-[20px]">
              {types.map((item) => (
                <button
                  onClick={() => {
                    setType(item);
                    setBgColor(item.bgcolor);
                  }}
                  className="w-[50%] md:px-[12px] md:py-2  rounded-[20px]"
                  style={{
                    background:
                      item.label === type.label ? item.bgcolor : undefined,
                    color: item.label === type.label ? "white" : "black",
                  }}
                >
                  <h2 className="text-[16px] font-[400]">{item.label}</h2>
                </button>
              ))}
            </div>
            <div className="md:flex md:flex-col md:gap-[10px]">
              <h2 className="text-[16px] font-[400]">Amount</h2>
              <input
                type="number"
                placeholder="₮ 000.00"
                className="md:p-[16px] placeholder-[#94A3B8] text-black bg-[#F3F4F6] border border-[#D1D5DB] rounded-[8px]"
              ></input>
            </div>
            <div className="md:flex md:flex-col md:gap-[10px]">
              <h2 className="text-[16px] font-[400]">Category</h2>
              <div className="relative md:flex md:justify-between placeholder-[#94A3B8] bg-[#F3F4F6] text-black border border-[#D1D5DB] rounded-[8px] md:p-4">
                <input
                  placeholder="Choose"
                  className="text-[#94A3B8] bg-[#F3F4F6]"
                ></input>
                {showCategory && <Modal2 />}
                <img onClick={handleCategory} src="/arrow_drop_down.svg" />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-3">
              <div className="md:flex md:flex-col md:gap-[10px]">
                <h2 className="text-[16px] font-[400]">Date</h2>
                <input
                  type="date"
                  className=" bg-[#F3F4F6] border border-[#D1D5DB] rounded-[8px] md:p-4"
                ></input>
              </div>
              <div className="md:flex md:flex-col md:gap-[10px]">
                <h2 className="text-[16px] font-[400]">Time</h2>
                <input
                  type="time"
                  className=" bg-[#F3F4F6] border border-[#D1D5DB] rounded-[8px] md:p-4"
                ></input>
              </div>
            </div>
            <button
              onClick={() => {}}
              style={{
                backgroundColor: bgColor,
              }}
              className="md:w-full md:px-[12px] md:py-2 rounded-[20px] bg-[#0166FF] text-white"
            >
              <h2 className="text-[16px] font-[400]">Add Record</h2>
            </button>
          </div>

          <div className="md:h-full md:flex md:flex-col md:gap-[24px] md:pt-[20px] md:pb-[24px] md:px-[24px]">
            <div className="md:h-[30%] md:flex md:flex-col md:gap-[10px]">
              <h2 className="text-[16px] font-[400]">Payee</h2>
              <input
                type="number"
                placeholder="Write here"
                className="md:h-full md:p-[16px] placeholder-[#94A3B8] text-black bg-[#F3F4F6] border border-[#D1D5DB] rounded-[8px]"
              ></input>
            </div>
            <div className="md:h-[70%] md:flex md:flex-col md:gap-[10px]">
              <h2 className="text-[16px] font-[400]">Note</h2>
              <input
                type="text"
                placeholder="Write here"
                className="md:h-full md:p-[16px] placeholder-[#94A3B8] text-black bg-[#F3F4F6] border border-[#D1D5DB] rounded-[8px]"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
