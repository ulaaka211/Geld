"use client";
import { Header } from "@/components/header";
import { Cards } from "@/components/cards/cards";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/provider/authprovider";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Cards />
    </div>
  );
}
