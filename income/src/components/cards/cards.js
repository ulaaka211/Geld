import { Card1 } from "@/components/cards/card1";
import { Card2 } from "@/components/cards/card2";
import { Card3 } from "@/components/cards/card3";
import { Card4 } from "@/components/cards/card4";
import { Card5 } from "@/components/cards/card5";
import { Card6 } from "@/components/cards/card6";

export const Cards = () => {
  return (
    <div className="md:px-[300px] md:pt-[40px]">
      <div className="md:flex md:flex-col md:gap-6">
        <div className="w-full md:grid md:grid-cols-3 md:gap-6 ">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
        <div className="w-full md:grid md:grid-cols-2 md:gap-6">
          <Card4 />
          <Card5 />
        </div>
        <Card6 />
      </div>
    </div>
  );
};
