import { Signup2img } from "@/assets/signup2img";
import Link from "next/link";

export const Signup2 = () => {
  return (
    <div className="md:flex md:flex-col md:items-center md:gap-[48px] bg-white h-screen md:pt-[20px]">
      <Signup2img />

      <div className="md:flex md:flex-col md:gap-[24px] md:w-[20%]">
        <div className="md:flex md:flex-col md:justify-center md:items-center md:gap-[16px]">
          <div className="bg-[#0166FF] md:p-[10px] rounded-[50%]">
            <img src="/Money (1).svg" />
          </div>
          <h2 className="text-[24px] font-[600]">Select base currency</h2>
        </div>
        <select name="valiuts" className="md:p-[16px] bg-[#D1D5DB]">
          <option value="MNT - Mongolian Tugrik">MNT - Mongolian Tugrik</option>
          <option value="USD - USA Dollar">USD - USA Dollar</option>
        </select>
        <p className="text-[12px] font-[400]">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
        </p>
        <Link href={"/signup3"}>
          <button className="md:flex md:justify-center md:items-center md:w-full rounded-[20px] bg-[#0166FF] text-white p-2">
            <h2 className="text-[16px] font-[400] text-white">Confirm</h2>
          </button>
        </Link>
      </div>
    </div>
  );
};
