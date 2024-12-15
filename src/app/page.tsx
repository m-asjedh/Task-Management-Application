import PrimButton from "@/components/prim-button";
import SectionTab from "@/components/section-tab";
import TaskCard from "@/components/task-card";

export default function Home() {
  return (
    <div className=" w-full h-full bg-gray-100">
      <div className="flex m-4">
        <div className="flex-1 border-2 border-dotted border-gray-400 rounded-lg m-3">
          <SectionTab colour={"border border-yellow-500"} status="Todo" />
          <TaskCard />
          <PrimButton />
        </div>
        <div className="flex-1 border-2 border-dotted border-gray-400 rounded-lg m-3">
          <SectionTab colour={"border border-blue-500"} status="Progress" />
          <PrimButton />
        </div>
        <div className="flex-1 border-2 border-dotted border-gray-400 rounded-lg m-3 ">
          <SectionTab colour={"border border-green-500"} status="Completed" />
          <PrimButton />
        </div>
      </div>
    </div>
  );
}
