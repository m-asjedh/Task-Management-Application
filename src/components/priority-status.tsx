"use client";

interface PriorityStatusProps {
  dotColour: string;
  buttonBgColour: string;
  priorityType: string;
}

const PriorityStatus = ({
  dotColour,
  buttonBgColour,
  priorityType,
}: PriorityStatusProps) => {
  return (
    <div
      className={`flex items-center space-x-2 ${buttonBgColour} px-2 py-1 rounded-md`}
    >
      <div className={`w-2 h-2 rounded-full ${dotColour}`}></div>
      <div className="text-sm font-semibold">{priorityType}</div>
    </div>
  );
};

export default PriorityStatus;
