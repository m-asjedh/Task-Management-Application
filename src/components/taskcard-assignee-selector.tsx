"use-client";

import Image from "next/image";
import { UserRound } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { useState } from "react";
import profile1 from "../../public/assets/images/profile1.png";
import profile2 from "../../public/assets/images/profile2.png";

const TaskCardAssigneeSelector = ({
  assignee,
  selectAssignee,
}: {
  assignee: { id: string; name: string } | null;
  selectAssignee: (assignee: { id: string; name: string }) => void;
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const assignees = [
    { id: "1", name: "Mohamed", image: profile1 },
    { id: "2", name: "Asjedh", image: profile2 },
  ];

  return (
    <Popover open={isDropdownOpen} onOpenChange={setDropdownOpen}>
      <PopoverTrigger>
        <div className="cursor-pointer">
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
