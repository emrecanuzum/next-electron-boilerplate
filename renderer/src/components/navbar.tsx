import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { IoIosLock } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <div className=" py-6 h-[120px] px-6 w-[calc(100vw-106px)]  justify-between grid grid-cols-12 gap-5">
        <div className="col-span-8 items-center  text-[1vw] border border-line rounded-full px-5 py-5">
          <p> Update 1.0: Lorem Ipsum Dolor lores unes on mesdium</p>
        </div>
        <button className="col-span-2 hover:opacity-50  bg-gradient-primary items-center border border-line rounded-full flex gap-2 p-2 lg:p-5">
          <div className="flex mx-auto items-center gap-2">
            <IoIosLock size={20} />
            <p className=" text-[1vw]"> Manage Wallet</p>
          </div>
        </button>

        <button className="mx-auto">
          <div className="h-[70px] flex gap-1 bg-gradient-to-b from-[-100%] from-neutral-600 bg-dark hover:opacity-50 w-[70px] border border-line rounded-3xl items-center">
            <Image
              className="flex mx-auto my-auto"
              src={"/navbar_mail.svg"}
              alt="logo"
              width={34}
              height={18}
            />
          </div>
        </button>
        <button className="mx-auto">
          <div className="h-[70px] bg-gradient-to-b mx-auto from-[-100%] from-neutral-600 bg-dark hover:opacity-50 w-[70px] border border-line rounded-3xl flex items-center">
            <div className="flex mx-auto">
              <MdClose size={40} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
