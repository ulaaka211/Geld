import { Signup3img } from "@/assets/signup3img";
import Link from "next/link";

export const Signup3 = () => {
  return (
    <div className="md:flex md:flex-col md:items-center md:gap-[48px] bg-white h-screen md:pt-[20px]">
      <Signup3img />

      <div className="md:flex md:flex-col md:gap-[24px] md:w-[20%]">
        <div className="md:flex md:flex-col md:justify-center md:items-center md:gap-[16px]">
          <div className="bg-[#0166FF] md:p-[10px] rounded-[50%]">
            <img src="/Coins.svg" />
          </div>
          <h2 className="text-[24px] font-[600]">Set up your cash Balance</h2>
        </div>
        <input
          type="text"
          placeholder="Email"
          className="md:p-[16px] md:w-full rounded-[8px] bg-[#e5e7eb]"
        ></input>
        <p className="text-[12px] font-[400]">
          How much cash do you have in your wallet?
        </p>
        <Link href={"/signup4"}>
          <button className="md:flex md:justify-center md:items-center md:w-full rounded-[20px] bg-[#0166FF] text-white p-2">
            <h2 className="text-[16px] font-[400] text-white">Confirm</h2>
          </button>
        </Link>
      </div>
    </div>
  );
};
