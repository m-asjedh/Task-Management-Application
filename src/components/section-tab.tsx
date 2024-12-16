"use client";

import { Plus } from "lucide-react";

interface SectionTabProps {
  colour: string;
  status: string;
  count: number;
}

const SectionTab = ({ colour, status, count }: SectionTabProps) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-md shadow-custom   m-4">
      <div className="flex items-center space-x-4">
        <div
          className={`w-6 h-6 bg-white rounded-full flex justify-center items-center ${colour}`}
        ></div>

        <div className="text-lg font-medium">{status}</div>

        <div className="w-6 h-6 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold flex items-center justify-center ">
          <div>{count}</div>
        </div>
      </div>

      <div className="flex items-center">
        <Plus className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
      </div>
    </div>
  );
};

export default SectionTab;
