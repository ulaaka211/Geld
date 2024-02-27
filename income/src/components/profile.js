import { useAuth } from "./provider/authprovider";

export const Profile = (props) => {
  const { signOut } = useAuth();

  return (
    <div>
      <div
        onClick={props.toggle}
        className="fixed bg-[#00000080] z-40 top-0 left-0 w-screen h-screen"
      ></div>
      <div className="absolute z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:flex md:flex-col md:items-center border-[4px] border-[#0166FF] md:p-14 w-fit md:gap-4 rounded-[8px] bg-white">
        <div className="w-full md:flex md:justify-between">
          <h2 className="text-[16px] font-[600]">Edit Profile</h2>
          <img src="/X.svg" onClick={props.toggle} />
        </div>
        <div className="md:flex md:justify-center md:items-center border border-black md:p-6">
          <img src="/cat.jpeg" className="w-50 h-50 rounded-[50%]" />
        </div>
        <div className="w-full md:flex md:flex-col md:gap-[10px]">
          <h2 className="text-[16px] font-[400]">Name</h2>
          <input
            type="text"
            placeholder="Blake"
            className="md:p-[16px] placeholder-black text-black bg-[#F3F4F6] border border-[#D1D5DB] rounded-[8px]"
          ></input>
        </div>
        <div className="w-full md:flex md:flex-col md:gap-[10px]">
          <h2 className="text-[16px] font-[400]">Email</h2>
          <input
            type="text"
            placeholder="BlakeTheDogfucker@666gmail.com"
            className="md:p-[16px] placeholder-black text-black bg-[#F3F4F6] border border-[#D1D5DB] rounded-[8px]"
          ></input>
        </div>
        <div className="w-full md:flex md:flex-col md:gap-[10px]">
          <h2 className="text-[16px] font-[400]">Bio</h2>
          <input
            type="text"
            placeholder="Yolo"
            className="md:p-[16px] placeholder-black text-black bg-[#F3F4F6] border border-[#D1D5DB] rounded-[8px]"
          ></input>
        </div>
        <button
          onClick={() => {
            signOut();
          }}
          className="text-[16px] font-[400] text-red-500 hover:text-red-800 border border-red-500 hover:border-red-800 px-4 py-2 w-full rounded-[8px]"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
