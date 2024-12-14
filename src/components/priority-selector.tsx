import { ChevronDown, Flag } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";

const PrioritySelector = ({
  priority,
  priorities,
  selectPriority,
}: {
  priority: string;
  priorities: string[];
  selectPriority: (newPriority: string) => void;
}) => {
  return (
    <div className="flex space-x-16 items-center">
      <div className="flex space-x-4 justify-start items-center">
        <Flag size={13} color="gray" />
        <div className="text-[14px] text-gray-500">Priority</div>
      </div>
      <div className="flex space-x-4 justify-start items-center">
        <div className="text-[14px]">{priority}</div>
        <Popover>
          <PopoverTrigger>
            <ChevronDown className="cursor-pointer text-gray-500" size={14} />
          </PopoverTrigger>
          <PopoverContent>
            {priorities.map((level) => (
              <div
                key={level}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => selectPriority(level)}
              >
                {level}
              </div>
            ))}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default PrioritySelector;
