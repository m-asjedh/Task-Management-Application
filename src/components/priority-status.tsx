"use-client";

import { ChevronDown } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";

const PriorityStatus = ({
  priority,
  setPriority,
}: {
  setPriority: (pri: string) => void;
  priority: string;
}) => {
  const priorities = [
    {
      level: "Low",
      color: "bg-green-500",
      labelColor: "bg-green-100 text-green-600",
    },
    {
      level: "Medium",
      color: "bg-yellow-500",
      labelColor: "bg-yellow-100 text-yellow-600",
    },
    {
      level: "High",
      color: "bg-red-500",
      labelColor: "bg-red-100 text-red-600",
    },
  ];

  const selectPriority = (newPriority: string) => {
    setPriority(newPriority);
  };

  return (
    <div className="flex items-center space-x-4">
      <Popover>
        <PopoverTrigger>
          <div
            className={`flex items-center space-x-2 cursor-pointer px-3 py-1 rounded-md ${
              priority
                ? priorities.find((p) => p.level === priority)?.labelColor
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {priority && (
              <span
                className={`w-2 h-2 rounded-full ${
                  priorities.find((p) => p.level === priority)?.color
                }`}
              ></span>
            )}
            <span className="text-sm font-medium">
              {priority || "Set Priority"}
            </span>
            {!priority && <ChevronDown size={14} />}
          </div>
        </PopoverTrigger>
        <PopoverContent>
          {priorities.map(({ level }) => (
            <div
              key={level}
              className="px-4 py-2 text-sm font-medium cursor-pointer hover:bg-gray-100"
              onClick={() => selectPriority(level)}
            >
              {level}
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PriorityStatus;
