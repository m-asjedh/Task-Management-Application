import React from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { ArrowRight, StickyNote, Trash2 } from "lucide-react";
import profilePic from "../../public/assets/images/profile1.png";
import StatusSelector from "./status-selector";
import DueDateSelector from "./duedate-selector";
import AssigneeSelector from "./assignee-selector";
import PrioritySelector from "./priority-selector";
import SecBtn from "./sect-btn";

interface RightDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  dueDate: Date | null;
  setDueDate: (date: Date | null) => void;
  assignee: string | null;
  setAssignee: (name: string | null) => void;
  priority: string;
  setPriority: (priority: string) => void;
}

const RightDrawer: React.FC<RightDrawerProps> = ({
  isOpen,
  onClose,
  dueDate,
  setDueDate,
  assignee,
  setAssignee,
  priority,
  setPriority,
}) => {
  const availableAssignees = [
    { name: "John Taylor", image: profilePic },
    { name: "Sarah Connor", image: profilePic },
    { name: "Asad Ahmed", image: profilePic },
  ];

  const priorities = ["High", "Medium", "Low"];

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="w-[400px] p-4">
        {/* Header Section */}
        <div className="flex justify-between items-center cursor-pointer">
          <SecBtn bgColour="bg-white text-black" statusText="Completed" />
          <div className="flex space-x-5">
            <Trash2 size={18} className="cursor-pointer" />
            <ArrowRight
              size={18}
              onClick={onClose}
              className="cursor-pointer"
            />
          </div>
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Task Title */}
        <div className="border p-4 rounded-md font-bold mb-4">
          <h1>Project Setup and Initial Configurations</h1>
        </div>

        {/* Selectors */}
        <div className="w-[80%] space-y-5">
          <StatusSelector
            status="Todo"
            onChangeStatus={(newStatus) => console.log(newStatus)}
          />
          <DueDateSelector
            dueDate={dueDate}
            handleDateChange={(date) => setDueDate(date || null)}
            removeDate={() => setDueDate(null)}
          />
          <AssigneeSelector
            assignee={assignee}
            availableAssignees={availableAssignees}
            selectAssignee={(name) => setAssignee(name)}
            removeAssignee={() => setAssignee(null)}
          />
          <PrioritySelector
            priority={priority}
            priorities={priorities}
            selectPriority={(newPriority) => setPriority(newPriority)}
          />
        </div>

        {/* Description */}
        <div className="mt-10">
          <div className="flex space-x-3 justify-start items-center">
            <StickyNote size={12} color="gray" />
            <div className="text-[14px] text-gray-500">Description</div>
          </div>
          <div className="border p-4 rounded-md mt-2 text-[12px]">
            <p>
              This task involves setting up the project environment and
              configuring all necessary tools and frameworks to ensure smooth
              development. The steps include:
            </p>
            <ol className="list-decimal pl-5">
              <li>Repository Setup</li>
              <li>Environment Setup</li>
              <li>Dependency Installation</li>
              <li>Configuration Management</li>
              <li>Database Setup</li>
              <li>Version Control Integration</li>
              <li>Testing and Validation</li>
              <li>Documentation</li>
            </ol>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default RightDrawer;
