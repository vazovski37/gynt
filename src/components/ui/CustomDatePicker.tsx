"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export function CustomDatePicker({
  selected,
  onSelect,
}: {
  selected: Date | undefined;
  onSelect: (date: Date | undefined) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i); // last 100 years
  const months = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString("default", { month: "long" }));

  const [month, setMonth] = React.useState<Date>(selected ?? new Date());

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {selected ? format(selected, "PPP") : "Pick a date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={(date) => {
            onSelect(date);
            setOpen(false);
          }}
          month={month}
          onMonthChange={setMonth}
          captionLayout="dropdown-buttons"
          fromYear={1900}
          toYear={currentYear}
        />
      </PopoverContent>
    </Popover>
  );
}
