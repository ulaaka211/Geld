import { Loader } from "@/assets/loader";

export default function Loading() {
  return (
    <div className="bg-white md:pt-[404px] md:pb-[436px] md:flex md:items-center md:justify-center">
      <div className="md:flex md:justify-center md:items-center md:flex-col md:gap-[48px]">
        <Loader />
        <div className="md:flex md:flex-col md:items-center md:gap-[16px]">
          <div className="loader"></div>
          <h2 className="text-[16px] font-[600] text-black">
            Түр хүлээнэ үү...
          </h2>
        </div>
      </div>
    </div>
  );
}
