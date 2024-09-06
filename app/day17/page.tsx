"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import CalendarPicker from "./CalendarPicker";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Day14() {
  return (
    <div className="h-[100vh] p-20 flex items-center justify-center">
      <div className="bg-white w-full max-w-[800px] h-full p-4 rounded-lg shadow-2xl flex">
        <div className="w-[40%] h-full flex flex-col gap-2 p-1 pr-4">
          <CalendarPicker />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-xs font-bold">Adults</Label>
              <Select>
                <SelectTrigger className="text-xs h-9">
                  <SelectValue placeholder="1" />
                </SelectTrigger>
                <SelectContent className="text-xs">
                  <SelectItem className="text-xs" value="1">
                    1
                  </SelectItem>
                  <SelectItem className="text-xs" value="2">
                    2
                  </SelectItem>
                  <SelectItem className="text-xs" value="3">
                    3
                  </SelectItem>
                  <SelectItem className="text-xs" value="4">
                    4
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs font-bold">Children</Label>
              <Select>
                <SelectTrigger className="text-xs h-9">
                  <SelectValue placeholder="1" />
                </SelectTrigger>
                <SelectContent className="text-xs">
                  <SelectItem className="text-xs" value="1">
                    1
                  </SelectItem>
                  <SelectItem className="text-xs" value="2">
                    2
                  </SelectItem>
                  <SelectItem className="text-xs" value="3">
                    3
                  </SelectItem>
                  <SelectItem className="text-xs" value="4">
                    4
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="bg-orange-400 mt-auto h-9 text-xs">
            Book a room
          </Button>
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
