import { useAuth } from "../provider/authprovider";
import * as FaIcons from "react-icons/fa";

const newIcons = [
  <FaIcons.FaImage />,
  <FaIcons.FaMicrophone />,
  <FaIcons.FaBaseballBall />,
  <FaIcons.FaPeace />,
  <FaIcons.FaPencilAlt />,
  <FaIcons.FaPagelines />,
  <FaIcons.FaPager />,
  <FaIcons.FaPaintBrush />,
  <FaIcons.FaPaintRoller />,
  <FaIcons.FaPalette />,
  <FaIcons.FaPalfed />,
  <FaIcons.FaPallet />,
  <FaIcons.FaPaperPlane />,
  <FaIcons.FaPaperclip />,
  <FaIcons.FaParachuteBox />,
  <FaIcons.FaParagraph />,
  <FaIcons.FaParking />,
  <FaIcons.FaPassport />,
  <FaIcons.FaPastafarianism />,
  <FaIcons.FaPaste />,
  <FaIcons.FaPatreon />,
  <FaIcons.FaPause />,
  <FaIcons.FaPauseCircle />,
  <FaIcons.FaPaw />,
  <FaIcons.FaPeace />,
  <FaIcons.FaPen />,
  <FaIcons.FaPepperHot />,
  <FaIcons.FaPercent />,
  <FaIcons.FaPhoenixSquadron />,
  <FaIcons.FaPiedPiperHat />,
];
const colorChoice = [
  "#0166FF",
  "#01B3FF",
  "#41CC00",
  "#F9D100",
  "#FF7B01",
  "#AE01FF",
  "#FF0101",
];

export const Modal4 = () => {
  const { newIcon, setNewIcon, newIconColor, setNewIconColor } = useAuth();

  return (
    <div>
      <div className="absolute w-[310px] top-[100%] left-0 flex flex-col gap-6 bg-white drop-shadow-[0_4px_12px_rgba(0, 0, 0, 0.25)]">
        <div className="grid grid-cols-6 gap-6 px-6 pt-6 cursor-pointer">
          {newIcons.map((item) => (
            <div
              onClick={(event) => {
                setNewIcon(item);
              }}
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-4 px-6 pb-6 items-center justify-center border-t pt-6 ">
          {colorChoice.map((item) => (
            <div
              className="rounded-full w-5 h-5 cursor-pointer"
              key={item}
              onClick={() => {
                setNewIconColor(item);
              }}
              style={{
                backgroundColor: item,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
