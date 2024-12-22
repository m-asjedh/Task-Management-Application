"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { ArrowRight, StickyNote, Trash2 } from "lucide-react";
import StatusSelector from "./status-selector";
import DueDateSelector from "./duedate-selector";
import PrioritySelector from "./priority-selector";
import SecBtn from "./sect-btn";
import { deleteTask, Task, updateTask } from "../lib/features/task/taskSlice";
import DeleteConfirmationModal from "./delete-confirmation-modal";
import TaskCardAssigneeSelector from "./taskcard-assignee-selector";
import { on } from "events";

interface RightDrawerProps {
  taskStatus: "Todo" | "In Progress" | "Completed";
  isOpen: boolean;
  onClose: () => void;
  taskId: string;
  taskName: string;
  dueDate: string | null;
  setDueDate: (date: Date | null) => void;
  assignee: { id: string; name: string } | null;
  setAssignee: (assignee: { id: string; name: string } | null) => void;
  priority: string;
  setPriority: (priority: string) => void;
  description: string;
}

const RightDrawer = ({
  taskStatus,
  isOpen,
  onClose,
  taskId,
  taskName,
  dueDate,
  setDueDate,
  assignee,
  setAssignee,
  priority,
  setPriority,
  description,
}: RightDrawerProps) => {
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState<
    "Todo" | "In Progress" | "Completed" | null
  >(taskStatus);

  const handleUpdateTask = (updates: Partial<Task>) => {
    dispatch(updateTask({ id: taskId, updates }));
  };

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
    setModalOpen(false);
    onClose();
  };

  const handleStatusChange = (
    newStatus: "Todo" | "In Progress" | "Completed" | null
  ) => {
    setStatus(newStatus);
    handleUpdateTask({ status: newStatus || undefined });
  };

  const priorities = ["High", "Medium", "Low"];

  return (
    <>
      <Drawer open={isOpen} onOpenChange={onClose}>
        <DrawerContent className="w-[400px] p-4">
          <div className="flex justify-between items-center cursor-pointer">
            <SecBtn bgColour="bg-white text-black" statusText="Completed" />
            <div className="flex space-x-5">
              <Trash2
                size={18}
                className="cursor-pointer"
                onClick={() => {
                  setModalOpen(true);
                  onClose();
                }}
              />
              <ArrowRight
                size={18}
                onClick={onClose}
                className="cursor-pointer"
              />
            </div>
          </div>

          <hr className="my-4 border-gray-300" />

          <div className="border p-4 rounded-md font-bold mb-4">{taskName}</div>

          <div className="w-[80%] space-y-5">
            <StatusSelector
              status={status}
              onStatusChange={handleStatusChange}
            />
            <DueDateSelector
              dueDate={dueDate ? dueDate.toString() : null}
              handleDateChange={(date) => {
                if (date) {
                  setDueDate(date);
                  handleUpdateTask({ dueDate: date.toString() });
                }
              }}
              removeDate={() => setDueDate(null)}
            />
            <TaskCardAssigneeSelector
              assignee={assignee}
              selectAssignee={(assignee) => {
                setAssignee(assignee);
                handleUpdateTask({ assignee });
              }}
              mainDivContainerStyles="gap-12"
            />
            <PrioritySelector
              priority={priority}
              priorities={priorities}
              selectPriority={(newPriority) => {
                setPriority(newPriority);
                handleUpdateTask({ priority: newPriority });
              }}
            />
          </div>

          <hr className="my-4 border-gray-300" />

          <div className="mt-10">
            <div className="flex space-x-3 justify-start items-center">
              <StickyNote size={12} color="gray" />
              <div className="text-[14px] text-gray-500">Description</div>
            </div>
            <div className="border p-4 rounded-md mt-2 text-[12px]">
              <textarea
                className="w-full p-2 rounded focus:outline-none"
                rows={8}
                placeholder="Add task description here..."
                value={description || ""}
                onChange={(e) => {
                  handleUpdateTask({ description: e.target.value });
                }}
              />
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default RightDrawer;
