"use client";

import { Header } from "@/components/header";
import { Record } from "@/components/record";
import { Date } from "@/components/date";
import { Today } from "@/components/today";
import { Yesterday } from "@/components/yesterday";
import { useAuth } from "@/components/provider/authprovider";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Records() {
  const { isLoggedIn } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;
  return (
    <div className="md:flex md:flex-col">
      <Header />
      <div className="px-[300px] md:py-[40px] md:flex md:gap-5">
        <Record />
        <div className="w-full flex flex-col gap-6">
          <Date />
          <Today />
          <Yesterday />
        </div>
      </div>
    </div>
  );
}
