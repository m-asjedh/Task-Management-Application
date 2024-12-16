const statusOptions = [
  { label: "Todo", color: "border-yellow-500" },
  { label: "In Progress", color: "border-blue-500" },
  { label: "Completed", color: "border-green-500" },
];

const StatusDisplay = ({ status }: { status: string }) => {
  const currentStatus = statusOptions.find((option) => option.label === status);

  return (
    <div className="flex space-x-16 items-center">
      <div className="flex space-x-4 justify-start items-center">
        <div className="w-3 h-3 bg-white rounded-full border border-gray-500"></div>
        <div className="text-[14px] text-gray-500">Status</div>
      </div>
      {currentStatus && (
        <div className="flex items-center space-x-2">
          <div
            className={`w-3 h-3 bg-white rounded-full border ${currentStatus.color}`}
          ></div>
          <div className="text-[14px]">{currentStatus.label}</div>
        </div>
      )}
    </div>
  );
};

export default StatusDisplay;
