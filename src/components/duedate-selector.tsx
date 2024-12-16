import { CalendarDays, X } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Calendar } from "./ui/calendar";

const DueDateSelector = ({
  dueDate,
  handleDateChange,
  removeDate,
}: {
  dueDate: string | null;
  handleDateChange: (date: Date) => void;
  removeDate: () => void;
}) => {
  return (
    <div className="flex space-x-12 items-center">
      <div className="flex space-x-4 justify-start items-center">
        <CalendarDays size={13} color="gray" />
        <div className="text-[14px] text-gray-500">Due Date</div>
      </div>
      <div className="flex space-x-4 justify-start items-center">
        {dueDate ? (
          <>
            <div className="text-[14px]">
              {new Date(dueDate).toLocaleDateString()}
            </div>
            <X
              className="cursor-pointer text-gray-500 hover:text-gray-700"
              size={14}
              onClick={removeDate}
            />
          </>
        ) : (
          <Popover>
            <PopoverTrigger>
              <div className="text-[14px] text-gray-500 hover:underline cursor-pointer">
                No due date
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={dueDate ? new Date(dueDate) : undefined}
                onSelect={(date) => {
                  if (date) handleDateChange(date);
                }}
              />
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default DueDateSelector;
