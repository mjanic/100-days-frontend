"use client";

import { Rating as ReactRating } from "@smastrom/react-rating";
import { useState } from "react";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export default function Day18() {
  const [rating, setRating] = useState(4);
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="w-64 h-[80vh] bg-white rounded-xl shadow-2xl flex flex-col gap-4 overflow-hidden">
        <div className="w-full h-[35%] relative">
          <Image src="/restaurant.jpg" alt="restaurant" fill={true} />
          <div className="flex items-center justify-center rounded-full bg-black/40 gap-1 absolute bottom-2 left-[50%] transform -translate-x-1/2">
            <FontAwesomeIcon
              className="text-white"
              icon={faCircle}
              width={8}
              height={8}
            />
            <FontAwesomeIcon
              className="text-white"
              icon={faCircle}
              width={8}
              height={8}
            />
            <FontAwesomeIcon
              className="text-white"
              icon={faCircle}
              width={8}
              height={8}
            />
            <FontAwesomeIcon
              className="text-white"
              icon={faCircle}
              width={8}
              height={8}
            />
            <FontAwesomeIcon
              className="text-white"
              icon={faCircle}
              width={8}
              height={8}
            />
          </div>
        </div>

        <div className="flex justify-between px-2">
          <div className="flex flex-col gap-1">
            <h1 className="text-xs font-black">Gramercy Tavern</h1>
            <p className="text-[8px] text-slate-600 font-bold">
              20th St New York
            </p>
          </div>
          <FontAwesomeIcon
            className="self-center"
            icon={faHeart}
            width={18}
            height={18}
          />
        </div>
        <div className="flex items-center gap-2 px-2 -mt-2">
          <ReactRating
            style={{ maxWidth: 70 }}
            value={rating}
            onChange={setRating}
            spaceBetween={"small"}
          />
          <p className="text-[8px] font-bold">(231 reviews)</p>
        </div>
        <p className="font-semibold text-[10px] px-2">
          A quintessential New York City gem among the city's iconic
          establishements, Gramercy Tavern serves as an extraordianary
          destinations for secial occasions and an elevated version of an
          everyday retreat. Its's the unique kind of place you choose for a
          celebration after a joyfull engagement, or casually wander into to
          seek refuge from un unexpected downpour.
        </p>
        <Button className="w-full mt-auto rounded-none text-[12px]">
          Make a reservation
        </Button>
      </div>
    </div>
  );
}
