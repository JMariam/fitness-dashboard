/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaRunning} from 'react-icons/fa';
import { HiHome, HiChatBubbleLeftRight } from "react-icons/hi2";
import { BiSolidChart, BiSolidWallet } from "react-icons/bi";
import { GiRingedPlanet } from "react-icons/gi";
import { RiSettings2Fill } from "react-icons/ri";

export default function Sidebar() {
  return (
    <div className="bg-scootWhite1 h-[100vh] w-[10%] p-auto pt-12 flex flex-col gap-8 items-center ">
      <img src="/logo.svg" alt="" />
      <div className="flex flex-col gap-6 text-[24px]">
        <HiHome className='text-scootIconGrey'/>
        <BiSolidChart className='text-scootIconGrey'/>
        <FaRunning className='text-scootIconGrey'/>
        <HiChatBubbleLeftRight className='text-scootIconGrey'/>
        <GiRingedPlanet className='text-scootIconGrey'/>
        <RiSettings2Fill className='text-scootIconGrey'/>
        <BiSolidWallet className='text-scootIconGrey'/>
      </div>
    </div>
  )
}
