"use client";

import TaskCardAssigneeSelector from "./taskcard-assignee-selector";
import TaskCardDueDateSelector from "./taskcard-duedate-selector";
import PriorityStatus from "./priority-status";
import { CircleCheck, Clock4 } from "lucide-react";
import { useState } from "react";

const AddTask = () => {
  const [selectedAssignee, setSelectedAssignee] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [taskName, setTaskName] = useState<string>("");

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow m-4 cursor-pointer">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <CircleCheck className="text-green-500" />
          <input
            type="text"
            className="rounded p-1 w-full focus:outline-none"
            placeholder="Enter task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
      </div>

      <hr className="my-2 border-gray-300" />

      <div className="text-gray-600 text-sm mb-4">Project description</div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <TaskCardAssigneeSelector
            assignee={selectedAssignee}
            selectAssignee={setSelectedAssignee}
          />
          <TaskCardDueDateSelector />
        </div>
        <PriorityStatus />
      </div>

      <hr className="my-2 border-gray-300" />

      <div className="text-[12px] flex items-center space-x-2 text-gray-600">
        <Clock4 size={14} />
        <span>Should complete within 3 days ago</span>
      </div>
    </div>
  );
};

export default AddTask;
