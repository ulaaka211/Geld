import { useState } from "react";
import { Modal4 } from "./modal4";
import { useAuth } from "../provider/authprovider";

export const Modal3 = (props) => {
  const { newIcon, setNewIcon, newIconColor, setNewIconColor } = useAuth();
  const [emoji, setEmoji] = useState(false);

  const showEmoji = () => {
    setEmoji(!emoji);
  };

  return (
    <div>
      <div className="fixed z-[50] bg-[#00000080] top-0 left-0 w-screen h-screen"></div>

      <div className="fixed z-[60] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  md:flex md:flex-col bg-white">
        <div className="md:flex md:justify-between md:px-[24px] md:py-[16px] md:gap-2 border-b">
          <h2 className="text-[16px] font-[600]">Add Record</h2>
          <img src="/X.svg" onClick={props.toggle} />
        </div>
        <div className="md:flex md:flex-col items-center md:p-6 md:gap-8">
          <div className=" md:flex md:gap-3 ">
            <div className="relative w-fit md:flex md:items-center md:justify-center bg-[#F3F4F6] border border-[#D1D5DB] rounded-[8px] md:pl-4 md:pr-2">
              <div
                style={{
                  color: newIconColor,
                }}
                className="w-5 h-5 mt-1"
              >
                {newIcon}
              </div>
              {emoji && <Modal4 />}
              <img src="/arrow_drop_down.svg" onClick={showEmoji} />
            </div>

            <div className="w-full md:flex justify-between bg-[#F3F4F6] border border-[#D1D5DB] rounded-[8px] md:p-4">
              <input
                type="text"
                placeholder="Name"
                className="text-[#94A3B8] bg-[#F3F4F6]"
              ></input>
              <img src="/arrow_drop_down.svg" />
            </div>
          </div>
          <button className="md:w-full md:px-[12px] md:py-2 rounded-[20px] bg-[#16A34A] text-white">
            <h2 className="text-[16px] font-[400]">Add Record</h2>
          </button>
        </div>
      </div>
    </div>
  );
};
