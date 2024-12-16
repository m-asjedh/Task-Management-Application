"use client";

import { useEffect, useState } from "react";
import TaskCardAssigneeSelector from "./taskcard-assignee-selector";
import TaskCardDueDateSelector from "./taskcard-duedate-selector";
import PriorityStatus from "./priority-status";
import { CircleCheck, Clock4 } from "lucide-react";
import { Task } from "@/lib/features/task/taskSlice";
import RightDrawer from "./right-drawer";

const TaskCardForm = ({
  task,
  taskStatus,
}: {
  task: Task;
  taskStatus: "Todo" | "In Progress" | "Completed";
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [taskName, setTaskName] = useState<string>(task.name);
  const [selectedAssignee, setSelectedAssignee] = useState(task.assignee);
  const [dueDate, setDueDate] = useState<string>(task.dueDate || "");
  const [priority, setPriority] = useState<string>(task.priority || "");
  const [remainingTimeText, setRemainingTimeText] = useState<string>("");

  useEffect(() => {
    if (dueDate) {
      const currentDate = new Date();
      const dueDateObj = new Date(dueDate);
      const differenceInTime = dueDateObj.getTime() - currentDate.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

      if (differenceInDays > 1) {
        setRemainingTimeText(`Should complete within ${differenceInDays} days`);
      } else if (differenceInDays === 1) {
        setRemainingTimeText("Should complete within today");
      } else if (differenceInDays === 0) {
        setRemainingTimeText("Should complete within today");
      } else if (differenceInDays === -1) {
        setRemainingTimeText("Should’ve completed yesterday");
      } else {
        setRemainingTimeText(
          `Should’ve completed ${Math.abs(differenceInDays)} days ago`
        );
      }
    } else {
      setRemainingTimeText("");
    }
  }, [dueDate]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow m-4 cursor-pointer">
      <div
        onClick={() => setOpenDrawer(true)}
        className="flex items-center justify-between mb-2"
      >
        <div className="flex items-center space-x-2">
          <CircleCheck className="text-green-500" />
          <input
            type="text"
            className="rounded p-1 w-1/2 focus:outline-none border"
            placeholder="Enter task name"
            value={taskName}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
      </div>

      <hr className="my-2 border-gray-300" />

      {task.description && (
        <div className="text-gray-600 text-sm mb-4">{task.description}</div>
      )}

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <TaskCardAssigneeSelector
            assignee={selectedAssignee}
            selectAssignee={(assignee) => setSelectedAssignee(assignee)}
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

      {remainingTimeText && (
        <div
          className={`text-[12px] flex items-center space-x-2 ${
            remainingTimeText.startsWith("Should’ve completed")
              ? "text-red-500"
              : "text-gray-600"
          }`}
        >
          <Clock4 size={14} />
          <span>{remainingTimeText}</span>
        </div>
      )}

      <RightDrawer
        taskStatus={taskStatus}
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
        taskId={task.id}
        description={task.description || ""}
        taskName={taskName}
        dueDate={dueDate}
        setDueDate={(date) => setDueDate(date ? date.toString() : "")}
        assignee={selectedAssignee || null}
        setAssignee={(assignee) => setSelectedAssignee(assignee)}
        priority={priority}
        setPriority={setPriority}
      />
    </div>
  );
};

export default TaskCardForm;
