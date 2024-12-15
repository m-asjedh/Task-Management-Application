"use-client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Calendar } from "./ui/calendar";

const TaskCardDueDateSelector = () => {
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | undefined) => {
    setDueDate(date || null);
  };

  const removeDate = () => {
    setDueDate(null);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <div className="cursor-pointer">
          {dueDate ? (
            <div className=" bg-blue-100 text-blue-400 rounded-lg text-[10px] px-2 ">
              {dueDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </div>
          ) : (
            <CalendarDays size={24} color="gray" />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col items-center">
          <Calendar
            mode="single"
            selected={dueDate || undefined}
            onSelect={handleDateChange}
          />
          {dueDate && (
            <button
              className="mt-2 text-sm text-red-500 hover:underline"
              onClick={removeDate}
            >
              Remove Date
            </button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TaskCardDueDateSelector;
