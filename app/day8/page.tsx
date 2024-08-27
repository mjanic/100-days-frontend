"use client";

import { Rating as ReactRating } from "@smastrom/react-rating";
import { useState } from "react";
import { Timer, Gauge, Wallet } from "lucide-react";

export default function Day8() {
  const [rating, setRating] = useState(4);

  return (
    <div className="flex relative">
      <div className="relative h-[100vh] bg-[url('/iced-coffee.jpg')] bg-cover w-[50%] bg-center">
        <div className="absolute bottom-5 left-0 w-[40%] p-2 bg-black">
          <h1 className="text-xs font-bold text-white">
            SWEET ICED COFFEE WITH COCONUT MILK
          </h1>
        </div>
      </div>
      <div className="absolute top-[5%] left-[50%] ml-[-15%] w-[30%] h-[90px] py-2 px-4 bg-white whitespace-nowrap">
        <div className="flex items-center gap-2">
          <ReactRating
            style={{ maxWidth: 70 }}
            value={rating}
            onChange={setRating}
            spaceBetween={"small"}
          />
          <p className="text-[8px] font-bold">(189)</p>
        </div>
        <h1 className="text-2xl font-bold">Sweet iced Coffee with</h1>
        <h1 className="text-2xl font-bold">Coconut Milk</h1>
      </div>
      <div className="h-[100vh] w-[50%] mt-[120px] p-4">
        <div className="flex gap-4">
          <div className="flex gap-1">
            <div>
              <Timer />
            </div>
            <div>
              <h1 className="text-[8px]">TOTAL TIME</h1>
              <p className="text-[8px] text-[#ffb700] font-bold">10 minutes</p>
            </div>
          </div>
          <div className="flex gap-1">
            <div>
              <Gauge />
            </div>
            <div>
              <h1 className="text-[8px]">LEVEL</h1>
              <p className="text-[8px] text-[#ffb700] font-bold">
                intermediate
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <div>
              <Wallet />
            </div>
            <div>
              <h1 className="text-[8px]">BUDGET</h1>
              <p className="text-[8px] text-[#ffb700] font-bold">under $2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
