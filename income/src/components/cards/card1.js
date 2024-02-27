export const Card1 = () => {
  return (
    <div className="relative bg-[#0166FF] rounded-[12px] md:flex md:flex-col md:justify-between md:p-10">
      <img src="/Shape.svg" className="absolute z-[0] right-0 bottom-0" />
      <div className="md:flex md:gap-2">
        <img src="/Vector (1).svg" />
        <img src="/Geld (1).svg" />
      </div>
      <div className="md:flex md:flex-col">
        <div className="md:flex md:flex-col">
          <h2 className="text-[16px] font-[400] text-white">cash</h2>
          <span className="text-[24px] font-[600] text-white">Zailaa hu</span>
        </div>
      </div>
    </div>
  );
};
