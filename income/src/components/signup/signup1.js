"use client";

import { Logo } from "@/assets/logo";
import Link from "next/link";
import { TextField } from "@mui/material";
import { useAuth } from "../provider/authprovider";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Signup1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const router = useRouter();

  const { calcaluteStrength, signUp, passwordError, setPasswordError } =
    useAuth();

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
            Welcome back, Please enter your details
          </p>
          <div className="md:flex md:flex-col md:gap-4 md:w-full">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="bg-[#e5e7eb]"
              value={name}
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              error={Boolean(passwordError)}
              color={passwordError ? "error" : "primary"}
              helperText={passwordError}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="bg-[#e5e7eb]"
              value={email}
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              error={Boolean(passwordError)}
              color={passwordError ? "error" : "primary"}
              helperText={passwordError}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className="bg-[#e5e7eb]"
              value={password}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              error={Boolean(passwordError)}
              color={passwordError ? "error" : "primary"}
              helperText={passwordError}
            />
            <TextField
              id="outlined-basic"
              label="Re-password"
              variant="outlined"
              className="bg-[#e5e7eb]"
              value={rePassword}
              type="password"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
              error={Boolean(passwordError)}
              color={passwordError ? "error" : "primary"}
              helperText={passwordError}
            />

            <button
              onClick={() => {
                // const strength = calcaluteStrength(password);

                // if (strength < 1) {
                //   setPasswordError("Weak");
                //   return;
                // } else if (strength < 2) {
                //   setPasswordError("Weak");
                //   return;
                // } else if (strength < 3) {
                //   setPasswordError("Good");
                //   return;
                // } else if (strength < 4) {
                //   setPasswordError("Strong");
                //   return;
                // }

                signUp(name, email, password);
                router.push("/signup2");
              }}
              className="md:flex md:justify-center md:items-center md:w-full rounded-[20px] bg-[#0166FF] text-white p-3"
            >
              <h2 className="text-[16px] font-[400] text-white">Sign up</h2>
            </button>
          </div>
          <div className="md:flex">
            <h2 className="text-[16px] font-[400] text-black">
              Already have account?
            </h2>
            <Link href={"/login"}>
              <div className="md:px-[16px]">
                <h3 className="'text-[16px] font-[400] text-[#0166FF]">
                  Log in
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF] md:w-[50%]"></div>
    </div>
  );
};
