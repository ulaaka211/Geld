import { Signup4img } from "@/assets/signup4img";
import Link from "next/link";

export const Signup4 = () => {
  return (
    <div className="md:flex md:flex-col md:items-center md:gap-[48px] bg-white h-screen md:pt-[20px] ">
      <Signup4img />

      <div className="md:flex md:flex-col md:gap-[24px] md:w-[20%]">
        <div className="md:flex md:flex-col md:justify-center md:items-center md:gap-[16px]">
          <div className="bg-[#0166FF] md:p-[10px] rounded-[50%]">
            <img src="/Check.svg" />
          </div>
          <h2 className="text-[24px] font-[600]">Good Job</h2>
        </div>
        <p className="text-[12px] font-[400]">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
        <Link href={"/dashboard"}>
          <button className="md:flex md:justify-center md:items-center md:w-full rounded-[20px] bg-[#0166FF] text-white p-2">
            <h2 className="text-[16px] font-[400] text-white">
              Go to Dashboard
            </h2>
          </button>
        </Link>
      </div>
    </div>
  );
};
