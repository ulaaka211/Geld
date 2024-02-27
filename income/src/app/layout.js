"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/components/provider/authprovider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full m-auto h-screen">
          <AuthProvider>{children}</AuthProvider>
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}
