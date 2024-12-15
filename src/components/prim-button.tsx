"use client";

import { Plus } from "lucide-react";

const PrimButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="flex justify-center items-center gap-3 text-[12px] p-3 cursor-pointer mx-auto"
      onClick={onClick}
    >
      <Plus size={10} />
      Add Task
    </button>
  );
};

export default PrimButton;
