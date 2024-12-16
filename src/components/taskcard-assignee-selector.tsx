"use-client";

import Image from "next/image";
import { UserRound, X } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { useState } from "react";
import profile1 from "../../public/assets/images/profile1.png";
import profile2 from "../../public/assets/images/profile2.png";

const TaskCardAssigneeSelector = ({
  assignee,
  selectAssignee,
  removeAssignee,
  nameContainerStyles,
  closeIconStyles,
  divOneContainerStyles,
  divTwoContainerStyles,
  mainDivContainerStyles,
}: {
  assignee: { id: string; name: string } | null;
  selectAssignee: (assignee: { id: string; name: string }) => void;
  removeAssignee?: () => void;
  nameContainerStyles?: string;
  closeIconStyles?: string;
  divOneContainerStyles?: string;
  divTwoContainerStyles?: string;
  mainDivContainerStyles?: string;
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const assignees = [
    { id: "1", name: "Mohamed", image: profile1 },
    { id: "2", name: "Asjedh", image: profile2 },
  ];

  return (
    <Popover open={isDropdownOpen} onOpenChange={setDropdownOpen}>
      <PopoverTrigger>
        <div
          className={`cursor-pointer flex  items-center ${mainDivContainerStyles}`}
        >
          <div
            className={`flex space-x-4 justify-start items-center ${divOneContainerStyles}`}
          >
            <UserRound size={13} color="gray" />
            <div
              className={`text-[14px] text-gray-500 ${divTwoContainerStyles}`}
            >
              Assignee
            </div>
          </div>
          <div className="flex space-x-4 justify-start items-center">
            {assignee ? (
              <Image
                src={
                  assignees.find((a) => a.id === assignee.id)?.image ||
                  "/images/default_avatar.jpg"
                }
                alt={assignee.name}
                width={24}
                height={24}
                className="w-6 h-6 rounded-full"
              />
            ) : (
              <UserRound size={24} color="gray" />
            )}
            <div className={`text-[14px] ${nameContainerStyles}`}>
              {assignee?.name}
            </div>
            <X
              className={`cursor-pointer text-gray-500 hover:text-gray-700 ${closeIconStyles}`}
              size={14}
              onClick={removeAssignee}
            />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-40">
          {assignees.map(({ id, name, image }) => (
            <div
              key={id}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                selectAssignee({ id, name });
                setDropdownOpen(false);
              }}
            >
              <Image
                src={image}
                alt={name}
                width={24}
                height={24}
                className="w-6 h-6 rounded-full mr-2"
              />
              <div className="text-sm">{name}</div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TaskCardAssigneeSelector;
