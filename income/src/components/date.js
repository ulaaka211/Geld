export const Date = () => {
  return (
    <div className="w-full md:flex md:flex-col md:gap-6">
      <div className="w-full md:flex md:justify-between">
        <div className="md:flex md:items-center md:justify-center md:gap-4">
          <div className="md:flex md:items-center md:justify-center rounded-2 md:p-2 bg-[#E5E7EB] rounded-[8px]">
            <img src="/icon (1).svg" />
          </div>
          <h2 className="text-[16px] font-[400]">Last 30 Days</h2>
          <div className="md:flex md:items-center md:justify-center rounded-2 md:p-2 bg-[#E5E7EB] rounded-[8px]">
            <img src="/icon (2).svg" />
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-between md:p-4 bg-white rounded-[8px]">
          <select className="bg-white">
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
        </div>
      </div>
      <div className="md:px-6 md:py-3 md:flex md:justify-between bg-white rounded-[8px]">
        <div className="md:flex md:gap-4">
          <input type="checkbox" className="border p-2"></input>
          <h2 className="text-[16px] font-[400]">Select All</h2>
        </div>
        <div className="md:flex md:items-center">
          <span className="text-[#94A3B8]">-</span>
          <h2 className="text-[16px] font-[400] text-[#94A3B8]">1'000'000</h2>
        </div>
      </div>
    </div>
  );
};
