"use client";

import Image from "next/image";
import React, { useState } from "react";
import Banner from "@/../public/banner.png";
import Rocket from "@/../public/rocket.svg";
import DropDown from "@/../public/dropdown_arrow.svg";
import LatestNews from "@/components/latest_news";
import PortfolioTracker from "@/components/portfolio_tracker";
import CoinWatchList from "@/components/coin_watch";
import FriendsList from "@/components/friends_list";

export default function Home() {
  const [count, setCount] = useState(0);

  function handleCLick() {
    window.electronAPI.setTitle(`Title ${count}`);
    setCount(count + 1);
    // console.log(window.electronAPI);
    // alert(JSON.stringify(window.electronAPI));
  }

  return (
    <div className="w-[calc(100vw-106px)] max-h-[calc(100vh-120px)] overflow-auto px-6 ">
      <div style={{ contain: "content" }} className="banner area">
        <Image className="-z-10" src={Banner} alt="banner"></Image>

        <button className="shadow-white bg-black shadow-2xl z-50  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex  rounded-full">
          <div className="shadow-inner hover:bg-opacity-70 from-[#12DD89] bg-from-[#14F195]   shadow-green-950  bg-green-500 bg-gradient-to-b px-10 rounded-full py-4 from-[10%]">
            <div className="flex gap-8 mx-auto  items-center text-xl">
              <Image width={25} height={25} src={Rocket} alt="banner"></Image>{" "}
              Launch 12.1.12
              <Image
                width={25}
                height={25}
                src={DropDown}
                alt="banner"
              ></Image>{" "}
            </div>
          </div>
        </button>
      </div>
      <div className="flex justify-between">
        <div className="w-[25%]">
          <LatestNews />
        </div>
        <div className="w-[30%]">
          <PortfolioTracker />
        </div>
        <div className="w-[25%]">
          <CoinWatchList />
        </div>
        <div className="w-[20%]">
          <FriendsList />
        </div>
      </div>
    </div>
  );
}
