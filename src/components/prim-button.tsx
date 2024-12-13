import { Plus } from "lucide-react";

const PrimButton = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-3 text-[12px] p-3">
        <Plus size={10} />
        Add Task
      </div>
    </div>
  );
};

export default PrimButton;
