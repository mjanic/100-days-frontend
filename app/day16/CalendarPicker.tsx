"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

import { useState } from "react";

interface CalendarPickerProps {
  label: string;
}

export default function CalendarPicker({ label }: CalendarPickerProps) {
  const [date, setDate] = useState<Date>();

  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[240px] justify-between text-left font-normal rounded-sm",
              !date && "text-muted-foreground"
            )}
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <FontAwesomeIcon icon={faCalendarDays} width={15} height={15} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
