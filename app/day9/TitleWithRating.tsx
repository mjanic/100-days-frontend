"use client";

import { Rating as ReactRating } from "@smastrom/react-rating";
import { useState } from "react";

export default function TitleWithRating() {
  const [rating, setRating] = useState(4);

  return (
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
  );
}
