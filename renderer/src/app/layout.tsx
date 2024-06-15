"use client";

import MainSidebar from "@/components/sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [route, setRoute] = useState("/");
  const segment = useSelectedLayoutSegment();

  useEffect(() => {
    setRoute(pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="flex bg-dark w-screen">
          <MainSidebar route={pathname} />
          <div className="flex ml-[106px] flex-col w-[100vw - 106px]">
            <Navbar />
            <div className="">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
