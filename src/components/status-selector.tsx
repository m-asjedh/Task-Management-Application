import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Circle } from "lucide-react";
import { useState } from "react";

const statusOptions = [
  { label: "Todo", color: "border-yellow-500" },
  { label: "In Progress", color: "border-blue-500" },
  { label: "Completed", color: "border-green-500" },
];

const StatusSelector = ({
  status,
  onStatusChange,
}: {
  status: string | null;
  onStatusChange: (status: "Todo" | "In Progress" | "Completed") => void;
}) => {
  const [open, setOpen] = useState(false);

  const currentStatus = status
    ? statusOptions.find((option) => option.label === status)
    : null;

  const handleStatusChange = (
    newStatus: "Todo" | "In Progress" | "Completed"
  ) => {
    onStatusChange(newStatus);
    setOpen(false);
  };

  return (
    <div className="flex items-center space-x-4">
      <Circle className="text-gray-500" size={14} />
      <div className="text-gray-500 text-sm">Status</div>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className="flex items-center space-x-2 text-sm text-gray-700 focus:outline-none">
            <div
              className={`w-3 h-3 rounded-full ${
                currentStatus ? currentStatus.color : ""
              }`}
            ></div>
            <span>{currentStatus ? currentStatus.label : "Select status"}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-2">
          <div className="flex flex-col space-y-2">
            {statusOptions.map((option) => (
              <button
                key={option.label}
                className="flex items-center space-x-2 text-sm text-gray-700 hover:bg-gray-100 p-2 rounded"
                onClick={() =>
                  handleStatusChange(
                    option.label as "Todo" | "In Progress" | "Completed"
                  )
                }
              >
                <div
                  className={`w-3 h-3 rounded-full border ${option.color}`}
                ></div>
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default StatusSelector;
