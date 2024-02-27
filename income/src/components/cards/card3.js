export const Card3 = () => {
  return (
    <div className="md:flex md:flex-col bg-white rounded-[12px]">
      <div className="md:flex md:items-center md:px-[24px] md:py-[16px] md:gap-2 border-b">
        <span className="w-2 h-2 rounded-[50%] bg-[#84CC16]"></span>
        <h2 className="text-[16px] font-[600]">Your Income</h2>
      </div>
      <div className="md:pt-[20px] md:pb-[24px] md:px-[24px]">
        <div className="md:flex md:flex-col">
          <div className="md:flex md:flex-col md:gap-4">
            <div className="md:flex md:gap-1">
              <h2 className="text-[36px] font-[600]">-1,200,000</h2>
              <span className="text-[36px] font-[600]">₮</span>
            </div>
            <h2 className="text-[18px] font-[400] text-[#64748B]">
              Your Income Amount
            </h2>
          </div>
          <div className="md:flex md:gap-2">
            <img src="/Leading icon (1).svg" />
            <h2 className="text-[18px] font-[400]">32% from last month</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
