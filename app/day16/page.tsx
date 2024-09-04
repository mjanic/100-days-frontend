"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import CalendarPicker from "./CalendarPicker";

export default function Day14() {
  return (
    <div className="h-[100vh] p-[10%] flex items-center justify-center">
      <div className="bg-white w-full h-full p-4 rounded-lg shadow-2xl flex">
        <div className="w-[40%] h-full flex flex-col gap-2">
          <CalendarPicker label="Check In" />
          <CalendarPicker label="Check Out" />
        </div>
        <div className="h-full w-[60%]">
          <div className="flex flex-col h-full">
            <div className="w-full h-[70%] relative p-1">
              <div className="relative w-full h-full">
                <Image
                  className="object-cover"
                  src="/hotel-1.jpg"
                  fill={true}
                  alt="hotel-1"
                />
                <div className="absolute bottom-2 left-3 bg-black/30 p-1 rounded-md text-white">
                  <h1 className="text-sm font-bold">Golden Apartments</h1>
                  <p className="flex gap-1 text-[10px]">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      width={10}
                      height={10}
                    />{" "}
                    Punta Cana, Dominican republic
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 p-1 gap-2 h-[30%] w-full">
              <div className="relative">
                <Image
                  className="object-cover"
                  src="/hotel-2.jpg"
                  alt="hotel-2"
                  fill={true}
                />
              </div>
              <div className="relative">
                <Image
                  className="object-cover"
                  src="/hotel-3.jpg"
                  alt="hotel-3"
                  fill={true}
                />
              </div>
              <div className="relative">
                <Image
                  className="object-cover"
                  src="/hotel-4.jpg"
                  alt="hotel-4"
                  fill={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
