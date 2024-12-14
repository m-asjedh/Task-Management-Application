"use client";
import PrimButton from "@/components/prim-button";
import RightDrawer from "@/components/right-drawer";
import SectionTab from "@/components/section-tab";
import TaskCard from "@/components/task-card";
import store from "@/lib/store";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { useState } from "react";
import { Provider } from "react-redux";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const tasks = useSelector((state: RootState) => state.tasks);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const todoTasks = tasks.filter((task) => task.status === "Todo");
  const inProgressTasks = tasks.filter((task) => task.status === "Progress");
  const completedTasks = tasks.filter((task) => task.status === "Completed");

  return (
    <Provider store={store}>
      <div className="w-full h-full bg-gray-100">
        <div className="flex m-4">
          <div className="flex-1 border-2 border-dotted border-gray-400 rounded-lg m-3">
            <SectionTab colour={"border border-yellow-500"} status="Todo" />
            {todoTasks.map((task) => (
              <TaskCard key={task.id} onClick={openDrawer} task={task} />
            ))}
            <PrimButton />
          </div>

          {/* In Progress Column */}
          <div className="flex-1 border-2 border-dotted border-gray-400 rounded-lg m-3">
            <SectionTab colour={"border border-blue-500"} status="Progress" />
            {inProgressTasks.map((task) => (
              <TaskCard key={task.id} onClick={openDrawer} task={task} />
            ))}
            <PrimButton />
          </div>

          {/* Completed Column */}
          <div className="flex-1 border-2 border-dotted border-gray-400 rounded-lg m-3">
            <SectionTab colour={"border border-green-500"} status="Completed" />
            {completedTasks.map((task) => (
              <TaskCard key={task.id} onClick={openDrawer} task={task} />
            ))}
            <PrimButton />
          </div>
        </div>

        {/* Drawer */}
        <RightDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
      </div>
    </Provider>
  );
}
