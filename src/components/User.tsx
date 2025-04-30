/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function User() {
  return (
    <div className="h-[100vh] w-[25%] p-auto pt-12 bg-scootWhite3">
      <div className="flex flex-col gap-4 w-[80%] mx-auto">
        <div className="">
          <div className="flex items-center gap-4">
            <img src="/user.png" alt="" className="w-12" />
            <div className="">
              <p className="text-[20px] font-bold">Thomas Fletcher</p>
              <p className="text-scootGrey1 flex items-center gap-1 text-[13px]">
                <IoLocationSharp className="text-[16px]" /> Sydney, Australia
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl py-4 px-10 flex items-center justify-between mt-8">
            <div className="">
              <p className="text-[20px] font-bold">
                75
                <span className="text-[12px] font-normal text-scootGrey2">
                  kg
                </span>
              </p>
              <p className="text-[14px] -mt-1 text-scootGrey3">Weight</p>
            </div>
            <div className="">
              <p className="text-[20px] font-bold">
                6.5
                <span className="text-[12px] font-normal text-scootGrey2">
                  ft
                </span>
              </p>
              <p className="text-[14px] -mt-1 text-scootGrey3">Height</p>
            </div>
            <div className="">
              <p className="text-[20px] font-bold">
                25
                <span className="text-[12px] font-normal text-scootGrey2">
                  yrs
                </span>
              </p>
              <p className="text-[14px] -mt-1 text-scootGrey3">Age</p>
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-[16px] mb-2 font-[600]">Your Goals</p>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-xl py-2 px-6 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <img src="/goal1.png" alt="" className="w-12" />
                <div className="">
                  <p className="text-[14px]">Running</p>
                  <p className="text-[12px] text-scootGrey2">70km/80km</p>
                </div>
              </div>
              {/* <div className="h-13 w-13 border-2 border-scootGrey2 rounded-full relative">
              <div
                className="h-[100%] w-[100%] border-scootOrange rounded-full"
                style={{ background: "conic-gradient(#4CAF50 79%, #e0e0e0 0)" }}
              >
                <div className="absolute inset-0 m-auto w-5/6 h-5/6 bg-white rounded-full"></div>
              </div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                text-sm font-bold text-green-500"
              >
                79%
              </div>
            </div> */}
            </div>
            <div className="bg-white rounded-xl py-2 px-6 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <img src="/goal2.png" alt="" className="w-12" />
                <div className="">
                  <p className="text-[14px]">Sleeping</p>
                  <p className="text-[12px] text-scootGrey2">50hrs/60hrs</p>
                </div>
              </div>
              {/* <div className="h-13 w-13 border-2 border-scootGrey2 rounded-full relative">
              <div
                className="h-[100%] w-[100%] border-scootOrange rounded-full"
                style={{ background: "conic-gradient(#4CAF50 79%, #e0e0e0 0)" }}
              >
                <div className="absolute inset-0 m-auto w-5/6 h-5/6 bg-white rounded-full"></div>
              </div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                text-sm font-bold text-green-500"
              >
                79%
              </div>
            </div> */}
            </div>
            <div className="bg-white rounded-xl py-2 px-6 flex items-center justify-between">
              <div className="flex items-center gap-6">
                <img src="/goal3.png" alt="" className="w-8" />
                <div className="">
                  <p className="text-[14px]">Weight Loss</p>
                  <p className="text-[12px] text-scootGrey2">70kg/100kg</p>
                </div>
              </div>
              {/* <div className="h-13 w-13 border-2 border-scootGrey2 rounded-full relative">
              <div
                className="h-[100%] w-[100%] border-scootOrange rounded-full"
                style={{ background: "conic-gradient(#4CAF50 79%, #e0e0e0 0)" }}
              >
                <div className="absolute inset-0 m-auto w-5/6 h-5/6 bg-white rounded-full"></div>
              </div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                text-sm font-bold text-green-500"
              >
                60%
              </div>
            </div> */}
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-[16px] mb-2 font-[600]">Monthly Progress</p>
          <div className=""></div>
        </div>

        <div className="">
          <p className="text-[16px] mb-2 font-[600]">Scheduled</p>
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-xl py-2 px-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/schedule.jpg" alt="" className="w-10" />
                <div className="">
                  <p className="text-[14px]">Training - Yoga Class</p>
                  <p className="text-[12px] text-scootGrey2">Fitness</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <HiOutlineDotsHorizontal className="text-[20px] text-scootGrey1" />
                <p className="text-[12px] text-scootGrey2">22 Mar</p>
              </div>
            </div>
            <div className="bg-white rounded-xl py-2 px-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src="/schedule.jpg" alt="" className="w-10" />
                <div className="">
                  <p className="text-[14px]">Training - Swimming</p>
                  <p className="text-[12px] text-scootGrey2">Fitness</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <HiOutlineDotsHorizontal className="text-[20px] text-scootGrey1" />
                <p className="text-[12px] text-scootGrey2">22 Mar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
