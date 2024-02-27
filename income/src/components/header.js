"use client";
import { Logo } from "@/assets/logo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Modal1 } from "./modals/modal1";
import { Profile } from "./profile";

export const Header = (props) => {
  const router = useRouter();
  const [showModal1, setShowModal1] = useState(false);
  const [myProfile, setMyProfile] = useState(false);

  const closeModal = () => {
    setShowModal1(false);
  };

  const showModal = () => {
    setShowModal1(true);
  };

  const showProfile = () => {
    setMyProfile(true);
  };

  const closeProfile = () => {
    setMyProfile(false);
  };

  return (
    <div className="">
      <header className="m-auto md:py-[16px] md:px-[300px] bg-white">
        <nav className="w-full md:flex md:justify-between md:items-center">
          <div className="w-full md:flex md:gap-[24px]">
            <Logo />
            <h1
              onClick={() => {
                router.push("/dashboard");
              }}
              style={{
                fontWeight: 0 === props.activeTab ? "600" : "400",
              }}
              className="text-[16px] font-[600] text-[#0F172A] cursor-pointer"
            >
              Dashboard
            </h1>
            <h2
              onClick={() => {
                router.push("/records");
              }}
              style={{
                fontWeight: 0 === props.activeTab ? "400" : "600",
              }}
              className="text-[16px] font-[400] text-[#0F172A] cursor-pointer"
            >
              Records
            </h2>
          </div>
          <div className="md:flex">
            {showModal1 && <Modal1 toggle={closeModal} />}
            <div
              onClick={showModal}
              className="md:flex md:justify-center md:items-center md:mr-[24px] rounded-[20px] bg-[#0166FF] text-white gap-1 px-5"
            >
              <img src="/leading icon.svg" />
              <h2 className="text-[16px] font-[400] color-white">Record</h2>
            </div>
            {myProfile && <Profile toggle={closeProfile} />}
            <img onClick={showProfile} src="/placeholder.png" />
          </div>
        </nav>
      </header>
    </div>
  );
};
