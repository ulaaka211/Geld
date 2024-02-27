"use client";

import { Logo } from "@/assets/logo";
import Link from "next/link";
import { useAuth } from "./provider/authprovider";
import { useRouter } from "next/navigation";
import { TextField } from "@mui/material";
import { useState } from "react";

export const Login = (props) => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <div className="md:flex">
      <div className="md:w-[50%] h-screen bg-white md:flex md:items-center md:justify-center">
        <div className="md:flex md:flex-col md:items-center md:gap-[40px] bg-white md:p-3">
          <div className="md:flex md:gap-[10px]">
            <Logo />
            <h2 className="text-[18px] font-[600] text-black">Geld</h2>
          </div>
          <h2 className="text-[24px] font-[600] text-black">Welcome Back</h2>
          <p className="text-[16px] font-[400] text-black">
            Welcome back, Please enter your detailss
          </p>
          <div className="md:flex md:flex-col md:gap-4 md:w-full">
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="bg-[#e5e7eb]"
              type="email"
            />
            <TextField
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              label="Password"
              variant="outlined"
              className="bg-[#e5e7eb]"
            />

            <button
              onClick={() => {
                signIn(email, password);
                router.push("/dashboard");
              }}
              className="md:flex md:justify-center md:items-center md:w-full rounded-[20px] bg-[#0166FF] text-white p-3"
            >
              <h2 className="text-[16px] font-[400] text-white">Log in</h2>
            </button>
          </div>
          <div className="md:flex">
            <h2 className="text-[16px] font-[400] text-black">
              Don't have account?
            </h2>
            <Link href="/signup1">
              <button className="md:px-[16px]">
                <h3 className="'text-[16px] font-[400] text-[#0166FF]">
                  Sign up
                </h3>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF] md:w-[50%]"></div>
    </div>
  );
};
