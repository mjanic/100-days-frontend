"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { addDays, format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { DateRange } from "react-day-picker";

import { useState } from "react";

export default function CalendarPicker() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-xs font-bold">Check In</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full h-9 text-xs justify-between text-left font-normal rounded-sm",
              !date && "text-muted-foreground"
            )}
          >
            {date?.from ? (
              format(date.from, "LLL dd, y")
            ) : (
              <span>Pick a date</span>
            )}
            <FontAwesomeIcon icon={faCalendarDays} width={15} height={15} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start" side="right">
          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      <Label className="text-xs font-bold">Check Out</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full h-9 text-xs justify-between text-left font-normal rounded-sm",
              !date && "text-muted-foreground"
            )}
          >
            {date?.to ? format(date.to, "LLL dd, y") : <span>Pick a date</span>}
            <FontAwesomeIcon icon={faCalendarDays} width={15} height={15} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start" side="right">
          <Calendar mode="range" selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
