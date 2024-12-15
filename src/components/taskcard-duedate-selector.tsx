"use-client";

import { CalendarDays } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Calendar } from "./ui/calendar";

const TaskCardDueDateSelector = ({
  setDueDate,
  dueDate,
}: {
  setDueDate: (date: string) => void;
  dueDate: string;
}) => {
  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      setDueDate(date.toString());
    }
  };

  const removeDate = () => {
    setDueDate("");
  };

  return (
    <Popover>
      <PopoverTrigger>
        <div className="cursor-pointer">
          {dueDate ? (
            <div className=" bg-blue-100 text-blue-400 rounded-lg text-[10px] px-2 ">
              {new Date(dueDate).toLocaleDateString("en-US", {
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
            selected={dueDate ? new Date(dueDate) : undefined}
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
