"use client";

import { Plus } from "lucide-react";

const PrimButton = () => {
  return (
    <button className="flex justify-center items-center gap-3 text-[12px] p-3 cursor-pointer mx-auto">
      <Plus size={10} />
      Add Task
    </button>
  );
};

export default PrimButton;
