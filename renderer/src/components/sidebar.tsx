import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainSidebar = ({ route }: { route: string }) => {
  const version = "v1.4";
  return (
    <div>
      <div className="w-[106px] fixed h-screen py-10 bg-dark border-r border-line flex flex-col justify-between">
        <div className="flex flex-col gap-6 items-center">
          <Link href="/" className="items-center">
            <div
              className="hover:opacity-50"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <Image
                className=" fill-white"
                src="/icon.png"
                alt="logo"
                width={55}
                height={58}
              />
            </div>
          </Link>
          <Link href="/" className="mx-auto">
            <div className="h-[64px] bg-gradient-to-b from-[-100%] from-neutral-600 bg-dark hover:opacity-50 w-[64px] border border-neutral-700 rounded-md flex items-center">
              <Image
                className="flex mx-auto my-auto"
                src={
                  route === "/"
                    ? "/sidebar-game-selected.png"
                    : "/sidebar-game.svg"
                }
                alt="logo"
                width={34}
                height={18}
              />
            </div>
          </Link>
          <Link href="/" className="mx-auto">
            <div className="h-[64px] w-[64px] hover:opacity-50 border-neutral-700 rounded-md flex items-center">
              <Image
                className="flex mx-auto my-auto"
                src="/sidebar-view.svg"
                alt="logo"
                width={30}
                height={30}
              />
            </div>
          </Link>
          <Link href="/" className="mx-auto">
            <div className="h-[64px] w-[64px] border-neutral-700 rounded-md flex items-center">
              <Image
                className="flex mx-auto my-auto"
                src="/sidebar-refresh.svg"
                alt="logo"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <div className="h-[64px] flex-col gap-2 hover:cursor-pointer w-[64px] hover:opacity-50 border-neutral-700 rounded-md flex items-center">
            <Image
              className="flex mx-auto my-auto"
              src="/sidebar-settings.svg"
              alt="logo"
              width={64}
              height={64}
            />
            <p className="opacity-30 text-sm">{version}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSidebar;
