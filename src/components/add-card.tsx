"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../lib/features/task/taskSlice";
import TaskCardAssigneeSelector from "./taskcard-assignee-selector";
import TaskCardDueDateSelector from "./taskcard-duedate-selector";
import PriorityStatus from "./priority-status";
import { CircleCheck } from "lucide-react";

const AddCard = ({
  status,
}: {
  status: "Todo" | "In Progress" | "Completed";
}) => {
  const [taskName, setTaskName] = useState<string>("");
  const [selectedAssignee, setSelectedAssignee] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [dueDate, setDueDate] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (taskName && selectedAssignee && dueDate && priority) {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        name: taskName,
        assignee: selectedAssignee,
        dueDate,
        priority,
        status,
      };

      dispatch(addTask(newTask));
      setIsCompleted(true);
    }
  }, [taskName, selectedAssignee, dueDate, priority, status, dispatch]);

  if (isCompleted) return null;

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

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <TaskCardAssigneeSelector
            assignee={selectedAssignee}
            selectAssignee={setSelectedAssignee}
            nameContainerStyles="hidden"
            closeIconStyles="hidden"
            divOneContainerStyles="hidden"
            divTwoContainerStyles="hidden"
          />
          <TaskCardDueDateSelector setDueDate={setDueDate} dueDate={dueDate} />
        </div>
        <PriorityStatus setPriority={setPriority} priority={priority} />
      </div>

      <hr className="my-2 border-gray-300" />
    </div>
  );
};

export default AddCard;
