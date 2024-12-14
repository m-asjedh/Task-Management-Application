"use client";

import { CircleCheck } from "lucide-react";

interface SecBtnProps {
  bgColour: string;
  statusText: string;
}

const SecBtn = ({ bgColour, statusText }: SecBtnProps) => {
  return (
    <div>
      <div
        className={`px-2 py-1 flex items-center space-x-2 ${bgColour} rounded-md w-fit border`}
      >
        <CircleCheck className="text-gray-600" size={14} />
        <span className="text-sm font-medium">{statusText}</span>
      </div>
    </div>
  );
};

export default SecBtn;
