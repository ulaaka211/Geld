export const Card6 = () => {
  return (
    <div className="md:flex md:flex-col bg-white rounded-[12px]">
      <div className="md:flex md:items-center md:px-[24px] md:py-[16px] md:gap-2 border-b">
        <h2 className="text-[16px] font-[600]">Last Records</h2>
      </div>
      <div className="w-full md:flex md:flex-col md:gap-6">
        <div className="md:px-6 md:py-3 md:flex md:justify-between bg-white rounded-[8px]">
          <div>
            <div className="md:flex md:gap-4">
              <input type="checkbox" className="border p-2"></input>
              <div className="rounded-full bg-[#0166FF] p-1 md:flex md:items-center md:justify-center w-10 h-10">
                <img src="/House (2).svg" />
              </div>
              <div>
                <h2 className="text-[16px] font-[400]">Lending & Renting</h2>
                <h3 className="text-[12px] font-[400] text-[#6B7280]">12:47</h3>
              </div>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <span className="text-[#23E01F]">-</span>
            <h2 className="text-[16px] font-[400] text-[#23E01F]">1'000'000</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
