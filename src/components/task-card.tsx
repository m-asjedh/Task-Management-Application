import { CircleCheck, Clock4 } from "lucide-react";
import Image from "next/image";
import profile1 from "../../public/assets/images/profile1.png";

const TaskCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow m-4">
      {/* Header: Status Icon and Title */}
      <div className="flex items-center justify-between mb-2">
        {/* Status Icon */}
        <div className="flex items-center space-x-2">
          <CircleCheck className="text-green-500" />
          <span className="font-medium text-lg">
            Project setup and initial Configurations
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="text-gray-600 text-sm mb-4">
        Pellentesque varius ante posuere risus pellentesque mollis. Curabitur
        ultricee...
      </div>

      {/* Footer: Assignee, Due Date, and Priority */}
      <div className="flex items-center justify-between text-sm">
        {/* Assignee */}
        <div className="flex items-center space-x-2">
          <Image
            src={profile1}
            height={30}
            width={30}
            className="rounded-full"
            alt="Profile Pic"
          />
          <span className="text-gray-700 font-medium">John Doe</span>
        </div>

        {/* Due Date */}
        <div className="flex items-center space-x-2 text-gray-500">
          <Clock4 />
          <span>Aug 12</span>
        </div>

        {/* Priority */}
        <div className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md font-semibold">
          Medium
        </div>
      </div>

      {/* Additional Info: Deadline */}
      <div className="mt-4 text-sm text-red-600 flex items-center space-x-2">
        <Clock4 />
        <span>Should complete within 3 days ago</span>
      </div>
    </div>
  );
};

export default TaskCard;
