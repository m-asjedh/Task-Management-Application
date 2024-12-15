"use-client";

import Image, { StaticImageData } from "next/image";
import { UserRound, X } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { useState } from "react";

const AssigneeSelector = ({
  assignee,
  availableAssignees,
  selectAssignee,
  removeAssignee,
}: {
  assignee: string | null;
  availableAssignees: { name: string; image: StaticImageData }[];
  selectAssignee: (name: string) => void;
  removeAssignee: () => void;
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex space-x-12 items-center">
      <div className="flex space-x-4 justify-start items-center">
        <UserRound size={13} color="gray" />
        <div className="text-[14px] text-gray-500">Assignee</div>
      </div>
      <div className="flex space-x-4 justify-start items-center">
        {assignee ? (
          <>
            <div className="flex items-center space-x-2">
              <Image
                src={
                  availableAssignees.find((a) => a.name === assignee)?.image ||
                  "/images/default_avatar.jpg"
                }
                alt={assignee}
                width={24}
                height={24}
                className="w-6 h-6 rounded-full"
              />
              <div className="text-[14px]">{assignee}</div>
            </div>
            <X
              className="cursor-pointer text-gray-500 hover:text-gray-700"
              size={14}
              onClick={removeAssignee}
            />
          </>
        ) : (
          <Popover open={isDropdownOpen} onOpenChange={setDropdownOpen}>
            <PopoverTrigger>
              <div className="text-[14px] text-gray-500 hover:underline cursor-pointer">
                Select Assignee
              </div>
            </PopoverTrigger>
            <PopoverContent>
              {availableAssignees.map(({ name, image }) => (
                <div
                  key={name}
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => selectAssignee(name)}
                >
                  <Image
                    src={image}
                    alt={name}
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  {name}
                </div>
              ))}
            </PopoverContent>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default AssigneeSelector;
