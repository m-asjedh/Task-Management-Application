"use client";

import { CircleCheck, Clock4 } from "lucide-react";
import Image from "next/image";
import profile from "../../public/assets/images/profile1.png";
import PriorityStatus from "./priority-status";
import DateTab from "./date-tab";
import { Task } from "../lib/features/task/taskSlice";

interface TaskCardProps {
  task: Task;
  onClick: (taskId: string) => void;
}

const TaskCard = ({ task, onClick }: TaskCardProps) => {
  return (
    <div
      key={task.id}
      onClick={() => onClick(task.id)}
      className="p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow m-4 cursor-pointer"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <CircleCheck className="text-green-500" />
          <span className="font-bold text-lg">{task.name}</span>
        </div>
      </div>

      <hr className="my-2 border-gray-300" />

      <div className="text-gray-600 text-sm mb-4">{task.description}</div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <Image
            src={profile}
            height={30}
            width={30}
            className="rounded-full"
            alt="Profile Pic"
          />
          <DateTab
            buttonBgColour="bg-blue-100 text-blue-400"
            dateText={new Date(task.dueDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          />
        </div>
        <PriorityStatus
          dotColour={
            task.priority === "High"
              ? "bg-red-500"
              : task.priority === "Medium"
              ? "bg-yellow-500"
              : "bg-green-500"
          }
          buttonBgColour={
            task.priority === "High"
              ? "bg-red-100 text-red-700"
              : task.priority === "Medium"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }
          priorityType={task.priority}
        />
      </div>

      <hr className="my-2 border-gray-300" />

      <div className="text-[12px] flex items-center space-x-2 text-gray-600">
        <Clock4 size={14} />
        <span>
          {(() => {
            const dueDate = new Date(task.dueDate);
            const today = new Date();
            const diffDays = Math.ceil(
              (dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
            );

            if (diffDays > 1) return `Should complete within ${diffDays} days`;
            if (diffDays === 1) return "Should complete within tomorrow";
            if (diffDays === 0) return "Should complete within today";
            return `Should've completed ${Math.abs(diffDays)} days ago`;
          })()}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
