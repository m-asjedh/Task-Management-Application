"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PrimButton from "@/components/prim-button";
import SectionTab from "@/components/section-tab";
import AddCard from "@/components/add-card";
import TaskCardForm from "@/components/task-card";
import { useSelector } from "react-redux";
import { TaskState } from "../lib/features/task/taskSlice";

export default function Home() {
  const [todoTasks, setTodoTasks] = useState<string[]>([]);
  const [progressTasks, setProgressTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const tasks = useSelector((state: { tasks: TaskState }) => state.tasks.tasks);
  console.log("Tasks from Redux:", tasks);

  const addTask = (status: "Todo" | "In Progress" | "Completed") => {
    const newTaskId = uuidv4();

    if (status === "Todo") {
      setTodoTasks((prev) => [...prev, newTaskId]);
      console.log("todo task created", newTaskId);
    } else if (status === "In Progress") {
      setProgressTasks((prev) => [...prev, newTaskId]);
      console.log("progress task created");
    } else if (status === "Completed") {
      setCompletedTasks((prev) => [...prev, newTaskId]);
      console.log("completed task created");
    }
  };

  const taskStatuses: Array<"Todo" | "In Progress" | "Completed"> = [
    "Todo",
    "In Progress",
    "Completed",
  ];

  return (
    <div className="w-full h-full bg-gray-100">
      <div className="flex m-4">
        {taskStatuses.map((status) => (
          <div
            key={status}
            className="flex-1 border-2 border-dotted border-gray-400 rounded-lg m-3"
          >
            <SectionTab colour={"border border-yellow-500"} status={status} />

            {tasks
              ?.filter((tsk) => tsk.status === status)
              .map((tsk) => (
                <TaskCardForm key={tsk.id} task={tsk} />
              ))}

            {status === "Todo" &&
              todoTasks.map((taskId) => <AddCard key={taskId} status="Todo" />)}
            {status === "In Progress" &&
              progressTasks.map((taskId) => (
                <AddCard key={taskId} status="In Progress" />
              ))}
            {status === "Completed" &&
              completedTasks.map((taskId) => (
                <AddCard key={taskId} status="Completed" />
              ))}

            <PrimButton onClick={() => addTask(status)} />
          </div>
        ))}
      </div>
    </div>
  );
}
