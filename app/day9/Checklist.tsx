"use client";

import { Checkbox } from "@/components/ui/checkbox";

export default function Checklist() {
  return (
    <div className="flex flex-col gap-2 text-[10px]">
      <div className="flex gap-1">
        <Checkbox
          className="h-3 w-3 rounded-none data-[state=checked]:bg-[#ffb700] data-[state=checked]:text-white"
          id="coffee"
        />
        <label
          htmlFor="coffee"
          className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          3 tablespoons of Espresso coffee powder
        </label>
      </div>
      <div className="flex gap-1">
        <Checkbox
          className="h-3 w-3 rounded-none data-[state=checked]:bg-[#ffb700] data-[state=checked]:text-white"
          id="water"
        />
        <label
          htmlFor="water"
          className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          1 cup of boiled water
        </label>
      </div>
      <div className="flex gap-1">
        <Checkbox
          className="h-3 w-3 rounded-none data-[state=checked]:bg-[#ffb700] data-[state=checked]:text-white"
          id="coco"
        />
        <label
          htmlFor="coco"
          className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          1 cup of Coconut milk
        </label>
      </div>
      <div className="flex gap-1">
        <Checkbox
          className="h-3 w-3 rounded-none data-[state=checked]:bg-[#ffb700] data-[state=checked]:text-white"
          id="suger"
        />
        <label
          htmlFor="suger"
          className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          2 teaspoons of Suger
        </label>
      </div>
    </div>
  );
}
